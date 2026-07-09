// fetch-trends.js - Jamstack Data Collection Script
// Run with: node scripts/fetch-trends.js

const fs = require('fs');
const path = require('path');
const https = require('https');

// Helper to wrap https.get in a Promise
function fetchUrl(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'GitAI-Trends-Bot/1.0',
        ...headers
      }
    };

    https.get(url, options, (res) => {
      let data = '';
      
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error(`Failed to fetch ${url}: Status ${res.statusCode}`));
      }

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Simple regex-based XML parser for arXiv
function parseArxivXml(xmlString) {
  const entries = [];
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  let match;
  
  while ((match = entryRegex.exec(xmlString)) !== null) {
    const entryContent = match[1];
    const titleMatch = entryContent.match(/<title>([\s\S]*?)<\/title>/);
    const summaryMatch = entryContent.match(/<summary>([\s\S]*?)<\/summary>/);
    const idMatch = entryContent.match(/<id>([\s\S]*?)<\/id>/);
    const publishedMatch = entryContent.match(/<published>([\s\S]*?)<\/published>/);
    
    if (titleMatch && summaryMatch && idMatch) {
      // Clean up string formatting
      const title = titleMatch[1].replace(/\s+/g, ' ').trim();
      const summary = summaryMatch[1].replace(/\s+/g, ' ').trim();
      const url = idMatch[1].trim();
      const date = publishedMatch ? publishedMatch[1].trim().substring(0, 10) : new Date().toISOString().substring(0, 10);
      
      entries.push({
        title,
        summary,
        url,
        date
      });
    }
  }
  return entries;
}

// Helper to determine category based on text
function getCategoryFromText(text = "") {
  const lower = text.toLowerCase();
  if (lower.includes('agent') || lower.includes('multi-agent')) {
    return 'agent';
  } else if (lower.includes('diffusion') || lower.includes('image') || lower.includes('video') || lower.includes('generation') || lower.includes('text-to-image')) {
    return 'image';
  } else if (lower.includes('llm') || lower.includes('transformer') || lower.includes('llama') || lower.includes('gpt') || lower.includes('chat') || lower.includes('language model')) {
    return 'llm';
  } else if (lower.includes('framework') || lower.includes('pipeline') || lower.includes('benchmark') || lower.includes('serving') || lower.includes('quantization')) {
    return 'tooling';
  }
  return 'research';
}

async function main() {
  console.log('--- Starting GitAI Trends Data Collection ---');
  
  const githubHeaders = {};
  if (process.env.GITHUB_TOKEN) {
    console.log('GitHub Token found in environment. Using authenticated requests.');
    githubHeaders['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
  } else {
    console.log('No GITHUB_TOKEN found. Proceeding with unauthenticated API requests.');
  }

  // 1. Fetch GitHub AI Trends
  let repositories = [];
  try {
    console.log('Fetching top AI repositories from GitHub...');
    // Querying stars > 5000 and topic:ai
    const ghUrl = 'https://api.github.com/search/repositories?q=topic:ai+stars:>5000&sort=stars&order=desc&per_page=15';
    let rawGhData;
    
    try {
      rawGhData = await fetchUrl(ghUrl, githubHeaders);
    } catch (err) {
      if (githubHeaders['Authorization']) {
        console.warn('Authenticated GitHub request failed. Retrying without token...', err.message);
        rawGhData = await fetchUrl(ghUrl, {});
      } else {
        throw err;
      }
    }
    
    const ghData = JSON.parse(rawGhData);

    if (ghData.items && ghData.items.length > 0) {
      repositories = ghData.items.map((item, index) => {
        const category = getCategoryFromText(`${item.name} ${item.description}`);
        
        let tags = (item.topics || []).slice(0, 3).map(t => t.charAt(0).toUpperCase() + t.slice(1));
        if (tags.length === 0) {
          tags = [item.language || "AI", "Trending"];
        }

        return {
          id: `fetch-repo-${item.id}`,
          name: item.name,
          owner: item.owner.login,
          description: item.description || "No description provided.",
          stars: item.stargazers_count,
          forks: item.forks_count,
          language: item.language || "Python",
          category: category,
          tags: tags,
          url: item.html_url,
          hotScore: Math.max(70, Math.min(100, 100 - index * 2)) // Ranking based score
        };
      });
      console.log(`Successfully collected ${repositories.length} repositories.`);
    }
  } catch (error) {
    console.error('Error fetching GitHub Trends:', error.message);
  }

  // 2. Fetch AI Papers from arXiv
  let newsAndPapers = [];
  try {
    console.log('Fetching latest AI/ML papers from arXiv...');
    const arxivUrl = 'https://export.arxiv.org/api/query?search_query=cat:cs.AI+OR+cat:cs.LG+OR+cat:cs.CL&max_results=8&sortBy=lastUpdatedDate&sortOrder=descending';
    const rawXml = await fetchUrl(arxivUrl);
    const parsedPapers = parseArxivXml(rawXml);

    parsedPapers.forEach((paper, index) => {
      const category = getCategoryFromText(`${paper.title} ${paper.summary}`);
      
      // Clean tags from title keyword
      let tags = ["Research"];
      if (category === 'llm') tags.push("LLM");
      else if (category === 'image') tags.push("ImageGen");
      else if (category === 'agent') tags.push("Agent");

      newsAndPapers.push({
        id: `fetch-paper-${index}`,
        title: paper.title,
        source: 'arXiv.org',
        date: paper.date,
        description: paper.summary.substring(0, 240) + '...',
        category: category,
        tags: tags,
        url: paper.url,
        hotScore: Math.floor(Math.random() * 15) + 80,
        content: paper.summary
      });
    });
    console.log(`Successfully collected ${parsedPapers.length} research papers.`);
  } catch (error) {
    console.error('Error fetching arXiv Papers:', error.message);
  }

  // 3. Fetch Hugging Face Papers
  try {
    console.log('Fetching daily papers from Hugging Face...');
    const hfUrl = 'https://huggingface.co/api/daily_papers';
    const rawHfData = await fetchUrl(hfUrl);
    const hfData = JSON.parse(rawHfData);

    if (Array.isArray(hfData)) {
      const collectedHf = hfData.slice(0, 5).map((item, index) => {
        const title = item.title || (item.paper && item.paper.title) || "Untitled Paper";
        const id = item.id || (item.paper && item.paper.id);
        const summary = item.summary || (item.paper && item.paper.summary) || "Click source for paper details and discussions on Hugging Face.";
        const date = item.publishedAt ? item.publishedAt.substring(0, 10) : new Date().toISOString().substring(0, 10);
        
        const category = getCategoryFromText(`${title} ${summary}`);

        return {
          id: `fetch-hf-${id}`,
          title: title,
          source: 'Hugging Face Daily',
          date: date,
          description: summary.substring(0, 240) + '...',
          category: category,
          tags: ["Hugging Face", "Paper"],
          url: `https://huggingface.co/papers/${id}`,
          hotScore: 90 - index,
          content: summary
        };
      });

      // Merge with arXiv
      newsAndPapers = [...newsAndPapers, ...collectedHf];
      console.log(`Successfully collected ${collectedHf.length} Hugging Face papers.`);
    }
  } catch (error) {
    console.error('Error fetching Hugging Face Papers:', error.message);
  }

  // 4. Fetch Hugging Face Models
  let hfModels = [];
  try {
    console.log('Fetching top models by downloads from Hugging Face...');
    const hfModelsUrl = 'https://huggingface.co/api/models?sort=downloads&direction=-1&limit=10';
    const rawHfModels = await fetchUrl(hfModelsUrl);
    const hfModelsData = JSON.parse(rawHfModels);

    if (Array.isArray(hfModelsData)) {
      hfModels = hfModelsData.map((item, index) => {
        const name = item.id.split('/')[1] || item.id;
        const owner = item.author || "Community";
        const category = getCategoryFromText(`${item.id} ${item.pipeline_tag || ''}`);
        
        let tags = [];
        if (item.pipeline_tag) {
          tags.push(item.pipeline_tag);
        }
        if (item.tags && item.tags.includes('quantized')) {
          tags.push('Quantized');
        }
        tags = tags.concat(item.tags ? item.tags.slice(0, 2) : []).map(t => t.charAt(0).toUpperCase() + t.slice(1));
        if (tags.length === 0) tags = ["Model"];

        return {
          id: `fetch-model-${item.id.replace(/\//g, '--')}`,
          name: name,
          owner: owner,
          fullName: item.id,
          downloads: item.downloads || 0,
          likes: item.likes || 0,
          category: category,
          tags: tags.slice(0, 3),
          url: `https://huggingface.co/${item.id}`,
          hotScore: Math.max(70, Math.min(100, 100 - index * 2))
        };
      });
      console.log(`Successfully collected ${hfModels.length} Hugging Face models.`);
    }
  } catch (error) {
    console.error('Error fetching Hugging Face Models:', error.message);
  }

  // 5. Output Data Structure
  const trendsData = {
    updatedAt: new Date().toISOString(),
    githubProjects: repositories,
    aiNews: newsAndPapers,
    hfModels: hfModels
  };

  // Write to Output JSON
  const outputDir = path.join(__dirname, '..', 'data');
  const outputPath = path.join(outputDir, 'trends-data.json');

  try {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(trendsData, null, 2), 'utf8');
    console.log(`Successfully updated: ${outputPath}`);
    console.log('--- Data Collection Completed Successfully ---');
  } catch (error) {
    console.error('Error writing trends data file:', error.message);
    process.exit(1);
  }
}

main();
