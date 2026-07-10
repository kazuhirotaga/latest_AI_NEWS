// GitAI Trends - Logic & Data Coordination

// ==========================================
// 1. Initial Mock Data (High-Quality AI Hub)
// ==========================================

const INITIAL_GITHUB_PROJECTS = [
  {
    id: "repo-1",
    name: "ollama",
    owner: "ollama",
    description: "Get up and running with large language models locally. Run Llama 3, Mistral, Gemma, and other models with ease.",
    stars: 87400,
    forks: 7200,
    language: "Go",
    languageColor: "#00ADD8",
    category: "llm",
    tags: ["LLM", "Local-AI", "CLI"],
    url: "https://github.com/ollama/ollama",
    hotScore: 98
  },
  {
    id: "repo-2",
    name: "transformers",
    owner: "huggingface",
    description: "State-of-the-art Machine Learning for PyTorch, TensorFlow, and JAX. Access thousands of pretrained models.",
    stars: 128500,
    forks: 25400,
    language: "Python",
    languageColor: "#3572A5",
    category: "tooling",
    tags: ["Deep-Learning", "PyTorch", "NLP"],
    url: "https://github.com/huggingface/transformers",
    hotScore: 95
  },
  {
    id: "repo-3",
    name: "stable-diffusion-webui",
    owner: "AUTOMATIC1111",
    description: "Stable Diffusion web UI. A browser interface based on Gradio library for Stable Diffusion.",
    stars: 134200,
    forks: 26100,
    language: "Python",
    languageColor: "#3572A5",
    category: "image",
    tags: ["Stable-Diffusion", "Web-UI", "Image-Gen"],
    url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    hotScore: 92
  },
  {
    id: "repo-4",
    name: "autogen",
    owner: "microsoft",
    description: "A programming framework for agentic AI. Enable multi-agent conversations to solve complex tasks.",
    stars: 28500,
    forks: 4100,
    language: "Python",
    languageColor: "#3572A5",
    category: "agent",
    tags: ["AI-Agents", "Multi-Agent", "LLM-Framework"],
    url: "https://github.com/microsoft/autogen",
    hotScore: 94
  },
  {
    id: "repo-5",
    name: "vllm",
    owner: "vllm-project",
    description: "A high-throughput and memory-efficient LLM serving and inference engine. Extremely fast generation.",
    stars: 24300,
    forks: 3100,
    language: "Python",
    languageColor: "#3572A5",
    category: "tooling",
    tags: ["Inference", "LLM-Serving", "GPU-Optimization"],
    url: "https://github.com/vllm-project/vllm",
    hotScore: 96
  },
  {
    id: "repo-6",
    name: "ComfyUI",
    owner: "comfyanonymous",
    description: "The most powerful and modular stable diffusion GUI and backend. Graph/nodes-based interface.",
    stars: 42100,
    forks: 4800,
    language: "Python",
    languageColor: "#3572A5",
    category: "image",
    tags: ["Node-UI", "Image-Gen", "Stable-Diffusion"],
    url: "https://github.com/comfyanonymous/ComfyUI",
    hotScore: 90
  },
  {
    id: "repo-7",
    name: "langchain",
    owner: "langchain-ai",
    description: "Building applications with LLMs through composability. Flexible prompt templates and agents chains.",
    stars: 92400,
    forks: 14200,
    language: "Python",
    languageColor: "#3572A5",
    category: "tooling",
    tags: ["LLM-Framework", "RAG", "Chains"],
    url: "https://github.com/langchain-ai/langchain",
    hotScore: 89
  },
  {
    id: "repo-8",
    name: "llama.cpp",
    owner: "ggerganov",
    description: "LLM inference in C/C++. Run Llama models on consumer hardware with CPU optimization and quantization.",
    stars: 64500,
    forks: 9200,
    language: "C++",
    languageColor: "#f34b7d",
    category: "tooling",
    tags: ["C++", "Quantization", "Edge-AI"],
    url: "https://github.com/ggerganov/llama.cpp",
    hotScore: 97
  }
];

const INITIAL_AI_NEWS = [
  {
    id: "news-1",
    title: "Llama 3.1 Released: The Largest Open-Weights Model Yet",
    source: "Meta AI Blog",
    date: "2026-07-08",
    description: "Meta has introduced Llama 3.1 405B, alongside upgraded 70B and 8B models. These models feature a 128K context window, improved multilingual support, and state-of-the-art tool use capabilities.",
    category: "llm",
    tags: ["Meta", "LLM", "Open-Source"],
    url: "https://ai.meta.com/blog/meta-llama-3-1/",
    hotScore: 99,
    content: "Llama 3.1 represents a massive leap forward for the open-weights community. The flagship 405B parameter model rivals the performance of top-tier closed models like GPT-4o on various benchmarks. In addition, Meta has updated its licensing to allow developers to use Llama 3.1 outputs to train other models, fostering a new wave of synthetic data generation and distillation projects. The models support tools out of the box, including web search, code interpreters, and mathematical solvers."
  },
  {
    id: "news-2",
    title: "Scaling Laws for Autoregressive Generative Modeling",
    source: "arXiv:2606.01234",
    date: "2026-06-28",
    description: "A foundational research paper investigating how performance scales with compute, parameters, and dataset size in multimodal models.",
    category: "research",
    tags: ["Scaling-Laws", "Research-Paper", "Multimodal"],
    url: "https://arxiv.org/abs/2001.08361",
    hotScore: 85,
    content: "This research compiles extensive empirical results verifying scaling law behavior across diverse modalities (text, audio, vision). The findings demonstrate that cross-entropy loss decreases predictably as a power-law, showing no signs of saturation at current compute budgets. Crucially, the authors highlight optimal allocations of compute: for 10x compute, parameter count should increase by ~5.5x while token budget increases by ~1.8x, showing training efficiency is heavily token-dependent."
  },
  {
    id: "news-3",
    title: "AI Agents Take Over Software Engineering Workflows",
    source: "TechCrunch",
    date: "2026-07-05",
    description: "A survey of new developer agent platforms emerging in 2026. Startup agents are now capable of resolving complex Git issues and writing multi-file PRs completely autonomously.",
    category: "agent",
    tags: ["AI-Agents", "Software-Engineering", "DevTools"],
    url: "https://techcrunch.com",
    hotScore: 91,
    content: "Developer-focused AI agents are transitioning from simple code assistants to autonomous teammates. Companies are integrating agents directly into CI/CD pipelines, allowing them to triage bug reports, draft initial bugfixes, write comprehensive regression tests, and submit fully documented pull requests. While human approval remains crucial, developers report saving over 40% of their daily maintenance overhead using these agentic setups."
  },
  {
    id: "news-4",
    title: "Sora 2.0: Photorealistic Consistency in Long-form Video",
    source: "OpenAI News",
    date: "2026-07-02",
    description: "OpenAI has quietly upgraded its video generation platform. Sora 2.0 features physics-consistent multi-angle generation and extended video lengths up to 3 minutes.",
    category: "image",
    tags: ["OpenAI", "Video-Gen", "Diffusion-Transformer"],
    url: "https://openai.com",
    hotScore: 94,
    content: "OpenAI's latest iteration of its generative video model, Sora 2.0, fixes major inconsistencies regarding basic physical rules (like gravity and occlusion). By incorporating a hybrid architecture merging 3D game engines with diffusion transformers (DiTs), the model can output complex scenes where object permanence is preserved across camera angle cuts. Visual artists are already utilizing it for commercial pre-visualization."
  },
  {
    id: "news-5",
    title: "The Rise of On-Device AI in Smart Devices",
    source: "Hugging Face Blog",
    date: "2026-07-01",
    description: "With the help of lightweight architectures like MobileLLM and quantization libraries, real-time voice assistants are running completely offline.",
    category: "tooling",
    tags: ["On-Device", "Edge-Computing", "Quantization"],
    url: "https://huggingface.co/blog",
    hotScore: 88,
    content: "As privacy concerns mount and cloud hosting costs rise, running AI on edge hardware has become a primary target. Sub-3B parameter models, quantized to 4-bit or even 2-bit weights, now display reasoning qualities matching 7B parameter models from a year ago. NPU hardware accelerators in laptops and smartphones are delivering 50+ tokens per second completely offline, revolutionizing voice user interfaces."
  }
];

const INITIAL_HF_MODELS = [
  {
    id: "model-meta-llama--Meta-Llama-3-8B-Instruct",
    name: "Meta-Llama-3-8B-Instruct",
    owner: "meta-llama",
    fullName: "meta-llama/Meta-Llama-3-8B-Instruct",
    downloads: 1420500,
    likes: 8530,
    category: "llm",
    tags: ["Text-Generation", "Llama3", "Instruct"],
    url: "https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct",
    hotScore: 98
  },
  {
    id: "model-black-forest-labs--FLUX.1-schnell",
    name: "FLUX.1-schnell",
    owner: "black-forest-labs",
    fullName: "black-forest-labs/FLUX.1-schnell",
    downloads: 852000,
    likes: 4120,
    category: "image",
    tags: ["Text-to-Image", "Flux", "Schnell"],
    url: "https://huggingface.co/black-forest-labs/FLUX.1-schnell",
    hotScore: 97
  },
  {
    id: "model-microsoft--Phi-3-mini-4k-instruct",
    name: "Phi-3-mini-4k-instruct",
    owner: "microsoft",
    fullName: "microsoft/Phi-3-mini-4k-instruct",
    downloads: 412000,
    likes: 2150,
    category: "llm",
    tags: ["Text-Generation", "Phi-3", "Mini"],
    url: "https://huggingface.co/microsoft/Phi-3-mini-4k-instruct",
    hotScore: 92
  },
  {
    id: "model-Qwen--Qwen2-7B-Instruct",
    name: "Qwen2-7B-Instruct",
    owner: "Qwen",
    fullName: "Qwen/Qwen2-7B-Instruct",
    downloads: 631000,
    likes: 3100,
    category: "llm",
    tags: ["Text-Generation", "Qwen", "Instruct"],
    url: "https://huggingface.co/Qwen/Qwen2-7B-Instruct",
    hotScore: 95
  }
];

const INITIAL_AI_GADGETS = [
  {
    id: "gadget-1",
    title: "Rabbit r1: Pocket-Sized AI Companion",
    source: "Rabbit Tech",
    date: "2026-05-15",
    description: "A pocket-sized companion device utilizing a Large Action Model (LAM) designed to navigate applications and execute tasks on your behalf.",
    category: "agent",
    tags: ["Rabbit", "LAM", "Hardware"],
    url: "https://www.rabbit.tech/",
    hotScore: 92,
    content: "The Rabbit r1 is a co-designed device with Teenage Engineering. It features a 2.8-inch touchscreen, a rotating camera, and a push-to-talk button. Instead of relying on APIs, its Large Action Model learns how humans interact with web interfaces (like ordering food or booking rides) and executes those workflows directly, attempting to bypass the standard app store paradigm."
  },
  {
    id: "gadget-2",
    title: "Ray-Ban Meta Smart Glasses (Second Gen)",
    source: "Meta Hardware",
    date: "2026-06-10",
    description: "Stylish smart glasses featuring built-in Meta AI, 12MP camera, open-ear audio, and real-time multimodal search capabilities.",
    category: "image",
    tags: ["Meta", "Smart-Glasses", "Multimodal"],
    url: "https://www.meta.com/smart-glasses/",
    hotScore: 97,
    content: "The second-generation Ray-Ban Meta Smart Glasses represent a major step forward for wearable AI. Users can ask Meta AI to 'look and tell' about objects in front of them, translate foreign signs in real-time, or identify plants and landmarks. The open-ear audio delivers rich sound while maintaining environmental awareness."
  },
  {
    id: "gadget-3",
    title: "Limitless Pendant: Wearable Audio AI",
    source: "Limitless AI",
    date: "2026-04-20",
    description: "A wearable clasp that records your daily conversations and meetings, summarizing notes and tasks with secure cloud-based LLMs.",
    category: "tooling",
    tags: ["Limitless", "Audio-AI", "Wearable"],
    url: "https://www.limitless.ai/",
    hotScore: 90,
    content: "The Limitless Pendant acts as an external memory aid. It features a battery life of up to 100 hours and utilizes advanced beamforming microphone arrays to isolate the wearer's voice. Captured audio is securely transcribed, summarized, and automatically synced with calendars and email applications to extract actionable checklist items."
  }
];

// ==========================================
// 2. Application State Management
// ==========================================

const state = {
  githubProjects: [...INITIAL_GITHUB_PROJECTS],
  aiNews: [...INITIAL_AI_NEWS],
  hfModels: [...INITIAL_HF_MODELS],
  aiGadgets: [...INITIAL_AI_GADGETS],
  bookmarks: JSON.parse(localStorage.getItem("gitai_favorites")) || [],
  activeTab: "github", // "github", "news", "hf", "gadget", "fav"
  activeCategory: "all",
  searchQuery: "",
  sortBy: "hot"
};

// ==========================================
// 3. Helper Functions & UI Utilities
// ==========================================

// Save Bookmarks to LocalStorage
function saveBookmarks() {
  localStorage.setItem("gitai_favorites", JSON.stringify(state.bookmarks));
  updateFavBadge();
}

// Toggle Bookmark Item
function toggleBookmark(itemId, type) {
  const index = state.bookmarks.findIndex(item => item.id === itemId);
  let isAdded = false;

  if (index === -1) {
    // Add to bookmarks
    let itemToAdd = null;
    if (type === "github") {
      itemToAdd = state.githubProjects.find(p => p.id === itemId);
    } else if (type === "news") {
      itemToAdd = state.aiNews.find(n => n.id === itemId);
    } else if (type === "model") {
      itemToAdd = state.hfModels.find(m => m.id === itemId);
    } else if (type === "gadget") {
      itemToAdd = state.aiGadgets.find(g => g.id === itemId);
    }

    if (itemToAdd) {
      state.bookmarks.push({ ...itemToAdd, bookmarkType: type });
      isAdded = true;
      showToast(`「${itemToAdd.name || itemToAdd.title}」をお気に入りに追加しました`, "success");
    }
  } else {
    // Remove from bookmarks
    const item = state.bookmarks[index];
    state.bookmarks.splice(index, 1);
    showToast(`「${item.name || item.title}」をお気に入りから削除しました`, "info");
  }

  saveBookmarks();
  renderActiveView();
}

// Check if Item is Bookmarked
function isBookmarked(itemId) {
  return state.bookmarks.some(item => item.id === itemId);
}

// Update Favorite Count Badge
function updateFavBadge() {
  const badge = document.getElementById("fav-count");
  if (badge) {
    badge.textContent = state.bookmarks.length;
  }
}

// Display Toast Message
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = '<i class="fa-solid fa-circle-info"></i>';
  if (type === "success") {
    icon = '<i class="fa-solid fa-circle-check"></i>';
  } else if (type === "error") {
    icon = '<i class="fa-solid fa-circle-exclamation"></i>';
  }

  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);

  // Trigger Slide-in Animation
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  // Fade out and remove
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// Get Programming Language Dot Color
function getLanguageDotColor(lang) {
  const colors = {
    "Python": "#3572A5",
    "JavaScript": "#f1e05a",
    "TypeScript": "#3178c6",
    "Go": "#00ADD8",
    "C++": "#f34b7d",
    "Rust": "#dea584",
    "Java": "#b07219",
    "HTML": "#e34c26"
  };
  return colors[lang] || "#64748b";
}

// ==========================================
// 4. Render Engine
// ==========================================

// Create GitHub Repository Card
function createRepoCard(project) {
  const isFav = isBookmarked(project.id);
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-id", project.id);
  
  const tagsHtml = project.tags.map(t => `<span class="tag-badge">${t}</span>`).join("");
  const starIconClass = isFav ? "fa-solid fa-star active" : "fa-regular fa-star";

  card.innerHTML = `
    <div class="card-header">
      <div class="card-icon-container card-icon-github" aria-hidden="true">
        <i class="fa-brands fa-github"></i>
      </div>
      <button class="btn-star ${isFav ? "active" : ""}" aria-label="お気に入り登録" onclick="event.stopPropagation(); window.handleBookmarkToggle('${project.id}', 'github')">
        <i class="${starIconClass}"></i>
      </button>
    </div>
    <div class="card-tags">${tagsHtml}</div>
    <h3 class="card-title" onclick="window.handleOpenDetail('${project.id}', 'github')">${project.owner} / ${project.name}</h3>
    <p class="card-desc">${project.description}</p>
    <div class="card-meta tnum">
      <div class="meta-item">
        <span class="meta-lang-dot" style="background-color: ${project.languageColor || getLanguageDotColor(project.language)}"></span>
        <span>${project.language}</span>
      </div>
      <div class="meta-item">
        <i class="fa-regular fa-star"></i>
        <span>${(project.stars / 1000).toFixed(1)}k</span>
      </div>
      <div class="meta-item">
        <i class="fa-solid fa-arrow-trend-up"></i>
        <span>Hot: ${project.hotScore}%</span>
      </div>
    </div>
  `;
  return card;
}

// Create News / Research Paper Card
function createNewsCard(news) {
  const isFav = isBookmarked(news.id);
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-id", news.id);

  const tagsHtml = news.tags.map(t => `<span class="tag-badge">${t}</span>`).join("");
  const starIconClass = isFav ? "fa-solid fa-star active" : "fa-regular fa-star";
  
  // Decide icon based on tags/source
  const isPaper = news.category === "research" || news.source.toLowerCase().includes("arxiv");
  const iconClass = isPaper ? "fa-solid fa-graduation-cap" : "fa-regular fa-newspaper";
  const iconTheme = isPaper ? "card-icon-paper" : "card-icon-news";

  card.innerHTML = `
    <div class="card-header">
      <div class="card-icon-container ${iconTheme}" aria-hidden="true">
        <i class="${iconClass}"></i>
      </div>
      <button class="btn-star ${isFav ? "active" : ""}" aria-label="お気に入り登録" onclick="event.stopPropagation(); window.handleBookmarkToggle('${news.id}', 'news')">
        <i class="${starIconClass}"></i>
      </button>
    </div>
    <div class="card-tags">${tagsHtml}</div>
    <h3 class="card-title" onclick="window.handleOpenDetail('${news.id}', 'news')">${news.title}</h3>
    <p class="card-desc">${news.description}</p>
    <div class="card-meta tnum">
      <div class="meta-item">
        <i class="fa-regular fa-calendar"></i>
        <span>${news.date}</span>
      </div>
      <div class="meta-item">
        <i class="fa-solid fa-globe"></i>
        <span>${news.source}</span>
      </div>
      <div class="meta-item">
        <i class="fa-solid fa-arrow-trend-up"></i>
        <span>Hot: ${news.hotScore}%</span>
      </div>
    </div>
  `;
  return card;
}

// Create Hugging Face Model Card
function createModelCard(model) {
  const isFav = isBookmarked(model.id);
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-id", model.id);

  const tagsHtml = model.tags.map(t => `<span class="tag-badge">${t}</span>`).join("");
  const starIconClass = isFav ? "fa-solid fa-star active" : "fa-regular fa-star";
  
  const dlFormatted = model.downloads >= 1000000 
    ? (model.downloads / 1000000).toFixed(1) + 'M' 
    : model.downloads >= 1000 
      ? (model.downloads / 1000).toFixed(0) + 'k' 
      : model.downloads;

  const likesFormatted = model.likes >= 1000
    ? (model.likes / 1000).toFixed(1) + 'k'
    : model.likes;

  card.innerHTML = `
    <div class="card-header">
      <div class="card-icon-container" style="background: #fbbf24;" aria-hidden="true">
        <i class="fa-solid fa-robot"></i>
      </div>
      <button class="btn-star ${isFav ? "active" : ""}" aria-label="お気に入り登録" onclick="event.stopPropagation(); window.handleBookmarkToggle('${model.id}', 'model')">
        <i class="${starIconClass}"></i>
      </button>
    </div>
    <div class="card-tags">${tagsHtml}</div>
    <h3 class="card-title" onclick="window.handleOpenDetail('${model.id}', 'model')">${model.fullName}</h3>
    <p class="card-desc">Hugging Faceで人気のAIモデル。タスクカテゴリ: ${model.category.toUpperCase()}。詳細は「詳細を見る」よりご確認ください。</p>
    <div class="card-meta tnum">
      <div class="meta-item">
        <i class="fa-solid fa-download"></i>
        <span>${dlFormatted}</span>
      </div>
      <div class="meta-item">
        <i class="fa-regular fa-thumbs-up"></i>
        <span>${likesFormatted}</span>
      </div>
      <div class="meta-item">
        <i class="fa-solid fa-arrow-trend-up"></i>
        <span>Hot: ${model.hotScore}%</span>
      </div>
    </div>
  `;
  return card;
}

// Create AI Gadget Card
function createGadgetCard(gadget) {
  const isFav = isBookmarked(gadget.id);
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-id", gadget.id);

  const tagsHtml = gadget.tags.map(t => `<span class="tag-badge">${t}</span>`).join("");
  const starIconClass = isFav ? "fa-solid fa-star active" : "fa-regular fa-star";

  card.innerHTML = `
    <div class="card-header">
      <div class="card-icon-container" style="background: #0ea5e9;" aria-hidden="true">
        <i class="fa-solid fa-laptop"></i>
      </div>
      <button class="btn-star ${isFav ? "active" : ""}" aria-label="お気に入り登録" onclick="event.stopPropagation(); window.handleBookmarkToggle('${gadget.id}', 'gadget')">
        <i class="${starIconClass}"></i>
      </button>
    </div>
    <div class="card-tags">${tagsHtml}</div>
    <h3 class="card-title" onclick="window.handleOpenDetail('${gadget.id}', 'gadget')">${gadget.title}</h3>
    <p class="card-desc">${gadget.description}</p>
    <div class="card-meta tnum">
      <div class="meta-item">
        <i class="fa-regular fa-calendar"></i>
        <span>${gadget.date}</span>
      </div>
      <div class="meta-item">
        <i class="fa-solid fa-microchip"></i>
        <span>${gadget.source}</span>
      </div>
      <div class="meta-item">
        <i class="fa-solid fa-arrow-trend-up"></i>
        <span>Hot: ${gadget.hotScore}%</span>
      </div>
    </div>
  `;
  return card;
}

// Get Filtered and Sorted Data
function getProcessedData(list, type) {
  // 1. Search Query Filter
  let result = list.filter(item => {
    let textToSearch = "";
    if (type === "github") {
      textToSearch = `${item.owner} ${item.name} ${item.description} ${item.language} ${item.tags.join(" ")}`;
    } else if (type === "news") {
      textToSearch = `${item.title} ${item.description} ${item.source} ${item.tags.join(" ")}`;
    } else if (type === "model" || item.bookmarkType === "model") {
      textToSearch = `${item.owner} ${item.name} ${item.fullName} ${item.tags.join(" ")}`;
    } else if (type === "gadget" || item.bookmarkType === "gadget") {
      textToSearch = `${item.title} ${item.description} ${item.source} ${item.tags.join(" ")}`;
    } else {
      textToSearch = `${item.owner || ''} ${item.name || ''} ${item.title || ''} ${item.fullName || ''} ${item.tags ? item.tags.join(" ") : ""}`;
    }
    return textToSearch.toLowerCase().includes(state.searchQuery.toLowerCase());
  });

  // 2. Category Chip Filter
  if (state.activeCategory !== "all") {
    result = result.filter(item => item.category === state.activeCategory);
  }

  // 3. Sort Order
  result.sort((a, b) => {
    if (state.sortBy === "hot") {
      return b.hotScore - a.hotScore;
    } else if (state.sortBy === "stars") {
      if (type === "github" || a.bookmarkType === "github") {
        return b.stars - a.stars;
      } else if (type === "model" || a.bookmarkType === "model") {
        return b.downloads - a.downloads;
      } else {
        const dateA = a.date ? new Date(a.date) : new Date(0);
        const dateB = b.date ? new Date(b.date) : new Date(0);
        return dateB - dateA;
      }
    } else if (state.sortBy === "name") {
      const nameA = a.name ? a.name.toLowerCase() : (a.title ? a.title.toLowerCase() : "");
      const nameB = b.name ? b.name.toLowerCase() : (b.title ? b.title.toLowerCase() : "");
      return nameA.localeCompare(nameB);
    }
    return 0;
  });

  return result;
}

// Render the Active view Panel
function renderActiveView() {
  const query = state.searchQuery;
  const clearBtn = document.getElementById("clear-search");
  if (clearBtn) {
    clearBtn.style.display = query ? "flex" : "none";
  }

  if (state.activeTab === "github") {
    const listContainer = document.getElementById("github-list");
    listContainer.innerHTML = "";
    const processed = getProcessedData(state.githubProjects, "github");
    
    if (processed.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
          <div class="empty-icon"><i class="fa-brands fa-github"></i></div>
          <h3>該当するリポジトリはありません</h3>
          <p>別の検索条件やカテゴリを選択してみてください。</p>
        </div>
      `;
    } else {
      processed.forEach(proj => {
        listContainer.appendChild(createRepoCard(proj));
      });
    }
  } 
  
  else if (state.activeTab === "news") {
    const listContainer = document.getElementById("news-list");
    listContainer.innerHTML = "";
    const processed = getProcessedData(state.aiNews, "news");

    if (processed.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
          <div class="empty-icon"><i class="fa-regular fa-newspaper"></i></div>
          <h3>該当するニュース・論文はありません</h3>
          <p>別の検索条件やカテゴリを選択してみてください。</p>
        </div>
      `;
    } else {
      processed.forEach(news => {
        listContainer.appendChild(createNewsCard(news));
      });
    }
  } 
  
  else if (state.activeTab === "hf") {
    const listContainer = document.getElementById("hf-list");
    listContainer.innerHTML = "";
    const processed = getProcessedData(state.hfModels, "model");

    if (processed.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
          <div class="empty-icon"><i class="fa-solid fa-robot"></i></div>
          <h3>該当するモデルはありません</h3>
          <p>別の検索条件やカテゴリを選択してみてください。</p>
        </div>
      `;
    } else {
      processed.forEach(model => {
        listContainer.appendChild(createModelCard(model));
      });
    }
  }
  
  else if (state.activeTab === "gadget") {
    const listContainer = document.getElementById("gadget-list");
    listContainer.innerHTML = "";
    const processed = getProcessedData(state.aiGadgets, "gadget");

    if (processed.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
          <div class="empty-icon"><i class="fa-solid fa-laptop"></i></div>
          <h3>該当するガジェットニュースはありません</h3>
          <p>別の検索条件やカテゴリを選択してみてください。</p>
        </div>
      `;
    } else {
      processed.forEach(gadget => {
        listContainer.appendChild(createGadgetCard(gadget));
      });
    }
  }
  
  else if (state.activeTab === "fav") {
    const listContainer = document.getElementById("fav-list");
    const emptyState = document.getElementById("fav-empty");
    listContainer.innerHTML = "";

    // For bookmarks, filter according to current search query and category as well
    const processed = getProcessedData(state.bookmarks, "bookmarks");

    if (processed.length === 0) {
      emptyState.style.display = "block";
      listContainer.style.display = "none";
    } else {
      emptyState.style.display = "none";
      listContainer.style.display = "grid";

      processed.forEach(item => {
        if (item.bookmarkType === "github") {
          listContainer.appendChild(createRepoCard(item));
        } else if (item.bookmarkType === "model") {
          listContainer.appendChild(createModelCard(item));
        } else if (item.bookmarkType === "gadget") {
          listContainer.appendChild(createGadgetCard(item));
        } else {
          listContainer.appendChild(createNewsCard(item));
        }
      });
    }
  }
}

// ==========================================
// 5. GitHub API Live Sync Implementation
// ==========================================

async function fetchGitHubTrends() {
  const syncBtn = document.getElementById("api-sync-btn");
  const originalHtml = syncBtn.innerHTML;
  
  // Set loading state
  syncBtn.disabled = true;
  syncBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>同期中...</span>';

  // Inject loader UI to list
  const activeListId = state.activeTab === "github" ? "github-list" : (state.activeTab === "news" ? "news-list" : "fav-list");
  const container = document.getElementById(activeListId);
  const originalContent = container.innerHTML;
  
  container.innerHTML = `
    <div class="loader-container">
      <div class="loader"></div>
      <div class="loader-text">GitHub APIからトレンドデータを取得中...</div>
    </div>
  `;

  try {
    // Fetch top AI repositories on GitHub (query matches topic:ai, topic:llm etc, sorted by stars)
    // Using simple endpoint suitable for public token-less requests
    const response = await fetch("https://api.github.com/search/repositories?q=topic:ai+stars:>10000&sort=stars&order=desc", {
      headers: {
        "Accept": "application/vnd.github.v3+json"
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: Status ${response.status}`);
    }

    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      // Map API response to our custom application format
      const fetchedProjects = data.items.slice(0, 10).map((item, index) => {
        // Classify category based on tags or description
        let category = "tooling";
        const desc = (item.description || "").toLowerCase();
        const name = item.name.toLowerCase();
        
        if (desc.includes("agent") || name.includes("agent")) {
          category = "agent";
        } else if (desc.includes("llm") || desc.includes("llama") || desc.includes("gpt") || desc.includes("chat") || name.includes("gpt")) {
          category = "llm";
        } else if (desc.includes("diffusion") || desc.includes("image") || desc.includes("video") || desc.includes("generation")) {
          category = "image";
        }

        // Extract some nice mock tags from repository topics
        let tags = (item.topics || []).slice(0, 3).map(t => t.charAt(0).toUpperCase() + t.slice(1));
        if (tags.length === 0) {
          tags = [item.language || "AI", "Popular"];
        }

        return {
          id: `api-repo-${item.id}`,
          name: item.name,
          owner: item.owner.login,
          description: item.description || "No description provided.",
          stars: item.stargazers_count,
          forks: item.forks_count,
          language: item.language || "Markdown",
          languageColor: getLanguageDotColor(item.language),
          category: category,
          tags: tags,
          url: item.html_url,
          hotScore: Math.floor(Math.random() * 15) + 85 // Rank highly
        };
      });

      // Merge with initial projects (avoiding duplicates by name)
      const merged = [...fetchedProjects];
      state.githubProjects.forEach(orig => {
        if (!merged.some(m => m.name.toLowerCase() === orig.name.toLowerCase())) {
          merged.push(orig);
        }
      });

      state.githubProjects = merged;
      showToast("GitHub トレンドの同期に成功しました！", "success");
    } else {
      throw new Error("No repository data found.");
    }
  } catch (error) {
    console.error(error);
    showToast(`同期エラー: API上限かネットワーク不良が発生しました。内蔵データを表示します。`, "error");
    container.innerHTML = originalContent; // Restore
  } finally {
    // Reset button state
    syncBtn.disabled = false;
    syncBtn.innerHTML = originalHtml;
    
    // Refresh view
    renderActiveView();
  }
}

// ==========================================
// 6. Detail Modal Engine
// ==========================================

function openDetail(itemId, type) {
  const modal = document.getElementById("detail-modal");
  const body = document.getElementById("modal-body");
  if (!modal || !body) return;

  let item = null;
  if (type === "github") {
    item = state.githubProjects.find(p => p.id === itemId) || state.bookmarks.find(b => b.id === itemId);
  } else if (type === "model") {
    item = state.hfModels.find(m => m.id === itemId) || state.bookmarks.find(b => b.id === itemId);
  } else if (type === "gadget") {
    item = state.aiGadgets.find(g => g.id === itemId) || state.bookmarks.find(b => b.id === itemId);
  } else {
    item = state.aiNews.find(n => n.id === itemId) || state.bookmarks.find(b => b.id === itemId);
  }

  if (!item) return;

  const isFav = isBookmarked(item.id);
  const favIconClass = isFav ? "fa-solid fa-star" : "fa-regular fa-star";
  const favText = isFav ? "お気に入り解除" : "お気に入り登録";

  if (type === "github") {
    body.innerHTML = `
      <div class="modal-title-area">
        <div class="modal-icon card-icon-github" aria-hidden="true">
          <i class="fa-brands fa-github"></i>
        </div>
        <div>
          <h2 class="modal-title">${item.owner} / ${item.name}</h2>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.25rem;">GitHub Repository</p>
        </div>
      </div>
      
      <div class="modal-meta-grid">
        <div class="modal-meta-card">
          <span class="modal-meta-label">主要言語</span>
          <span class="modal-meta-val">${item.language}</span>
        </div>
        <div class="modal-meta-card">
          <span class="modal-meta-label">Star数</span>
          <span class="modal-meta-val">${item.stars.toLocaleString()}</span>
        </div>
        <div class="modal-meta-card">
          <span class="modal-meta-label">Fork数</span>
          <span class="modal-meta-val">${item.forks.toLocaleString()}</span>
        </div>
        <div class="modal-meta-card">
          <span class="modal-meta-label">急上昇度</span>
          <span class="modal-meta-val">${item.hotScore}%</span>
        </div>
      </div>

      <p class="modal-body-text">${item.description}</p>
      
      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 0.9rem; font-weight: 700; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 0.5rem;">クローンコマンド</h4>
        <div style="display: flex; background: var(--bg-secondary); padding: 0.75rem 1rem; border-radius: var(--radius-md); justify-content: space-between; align-items: center;">
          <code id="clone-cmd" style="font-family: monospace; font-size: 0.9rem; color: var(--text-primary);">git clone ${item.url}.git</code>
          <button class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="window.copyCloneCommand()">
            <i class="fa-regular fa-copy"></i> コピー
          </button>
        </div>
      </div>

      <div class="modal-actions">
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fa-brands fa-github"></i> GitHubで開く
        </a>
        <button class="btn btn-secondary" onclick="window.handleBookmarkToggle('${item.id}', 'github'); window.handleCloseDetail();">
          <i class="${favIconClass}"></i> ${favText}
        </button>
      </div>
    `;
  } else if (type === "model") {
    body.innerHTML = `
      <div class="modal-title-area">
        <div class="modal-icon" style="background: #fbbf24;" aria-hidden="true">
          <i class="fa-solid fa-robot"></i>
        </div>
        <div>
          <h2 class="modal-title">${item.fullName}</h2>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.25rem;">Hugging Face Model</p>
        </div>
      </div>
      
      <div class="modal-meta-grid">
        <div class="modal-meta-card">
          <span class="modal-meta-label">オーサー</span>
          <span class="modal-meta-val">${item.owner}</span>
        </div>
        <div class="modal-meta-card">
          <span class="modal-meta-label">月間DL数</span>
          <span class="modal-meta-val">${item.downloads.toLocaleString()}</span>
        </div>
        <div class="modal-meta-card">
          <span class="modal-meta-label">Likes数</span>
          <span class="modal-meta-val">${item.likes.toLocaleString()}</span>
        </div>
        <div class="modal-meta-card">
          <span class="modal-meta-label">急上昇度</span>
          <span class="modal-meta-val">${item.hotScore}%</span>
        </div>
      </div>

      <p class="modal-body-text">Hugging Face上の急上昇AIモデル。モデルの詳細やモデルカード（README）、ウェイトのファイルリスト、使用方法などはHugging Faceのモデルページよりご確認いただけます。</p>
      
      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 0.9rem; font-weight: 700; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 0.5rem;">HF-CLI ダウンロードコマンド</h4>
        <div style="display: flex; background: var(--bg-secondary); padding: 0.75rem 1rem; border-radius: var(--radius-md); justify-content: space-between; align-items: center;">
          <code id="clone-cmd" style="font-family: monospace; font-size: 0.9rem; color: var(--text-primary);">huggingface-cli download ${item.fullName}</code>
          <button class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="window.copyCloneCommand()">
            <i class="fa-regular fa-copy"></i> コピー
          </button>
        </div>
      </div>

      <div class="modal-actions">
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Hugging Faceで開く
        </a>
        <button class="btn btn-secondary" onclick="window.handleBookmarkToggle('${item.id}', 'model'); window.handleCloseDetail();">
          <i class="${favIconClass}"></i> ${favText}
        </button>
      </div>
    `;
  } else if (type === "gadget") {
    body.innerHTML = `
      <div class="modal-title-area">
        <div class="modal-icon" style="background: #0ea5e9;" aria-hidden="true">
          <i class="fa-solid fa-laptop"></i>
        </div>
        <div>
          <h2 class="modal-title">${item.title}</h2>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.25rem;">${item.source} • ${item.date}</p>
        </div>
      </div>
      
      <div class="modal-meta-grid">
        <div class="modal-meta-card">
          <span class="modal-meta-label">メーカー/情報源</span>
          <span class="modal-meta-val">${item.source}</span>
        </div>
        <div class="modal-meta-card">
          <span class="modal-meta-label">公開日</span>
          <span class="modal-meta-val">${item.date}</span>
        </div>
        <div class="modal-meta-card">
          <span class="modal-meta-label">急上昇度</span>
          <span class="modal-meta-val">${item.hotScore}%</span>
        </div>
      </div>

      <p class="modal-body-text" style="font-weight: 600; font-size: 1.05rem; margin-bottom: 1rem; color: var(--text-primary); border-left: 3px solid var(--accent-color); padding-left: 0.75rem;">
        ${item.description}
      </p>
      <p class="modal-body-text" style="white-space: pre-line;">${item.content || "詳細なスペックや実機レビューは公式サイト、または情報元のテック記事をご参照ください。"}</p>
      
      <div class="modal-actions">
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> 公式/記事サイトで開く
        </a>
        <button class="btn btn-secondary" onclick="window.handleBookmarkToggle('${item.id}', 'gadget'); window.handleCloseDetail();">
          <i class="${favIconClass}"></i> ${favText}
        </button>
      </div>
    `;
  } else {
    const isPaper = item.category === "research" || item.source.toLowerCase().includes("arxiv");
    const iconClass = isPaper ? "fa-solid fa-graduation-cap" : "fa-regular fa-newspaper";
    const iconTheme = isPaper ? "card-icon-paper" : "card-icon-news";

    body.innerHTML = `
      <div class="modal-title-area">
        <div class="modal-icon ${iconTheme}" aria-hidden="true">
          <i class="${iconClass}"></i>
        </div>
        <div>
          <h2 class="modal-title">${item.title}</h2>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.25rem;">${item.source} • ${item.date}</p>
        </div>
      </div>

      <div class="modal-meta-grid" style="grid-template-columns: repeat(2, 1fr);">
        <div class="modal-meta-card">
          <span class="modal-meta-label">情報ソース</span>
          <span class="modal-meta-val">${item.source}</span>
        </div>
        <div class="modal-meta-card">
          <span class="modal-meta-label">ホットスコア</span>
          <span class="modal-meta-val">${item.hotScore}%</span>
        </div>
      </div>

      <div class="modal-body-text">
        <p style="font-weight: 600; font-size: 1.05rem; margin-bottom: 1rem; color: var(--text-primary); border-left: 3px solid var(--accent-color); padding-left: 0.75rem;">
          ${item.description}
        </p>
        <p style="white-space: pre-line;">${item.content || "詳細な記事コンテンツは外部リンクよりご参照ください。"}</p>
      </div>

      <div class="modal-actions">
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> ソース元を開く
        </a>
        <button class="btn btn-secondary" onclick="window.handleBookmarkToggle('${item.id}', 'news'); window.handleCloseDetail();">
          <i class="${favIconClass}"></i> ${favText}
        </button>
      </div>
    `;
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeDetail() {
  const modal = document.getElementById("detail-modal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Re-enable background scroll
  }
}

// Clone Command Copy Utility
window.copyCloneCommand = function() {
  const codeEl = document.getElementById("clone-cmd");
  if (codeEl) {
    navigator.clipboard.writeText(codeEl.textContent)
      .then(() => showToast("クローンコマンドをクリップボードにコピーしました", "success"))
      .catch(() => showToast("コピーに失敗しました", "error"));
  }
};

// ==========================================
// 7. Event Binding & Initialization
// ==========================================

// Function to load the fetched trends JSON file
async function loadTrendsData() {
  try {
    const response = await fetch("data/trends-data.json");
    if (!response.ok) {
      throw new Error(`Failed to load trends JSON: Status ${response.status}`);
    }
    const data = await response.json();
    
    if (data.githubProjects && data.githubProjects.length > 0) {
      state.githubProjects = data.githubProjects;
    }
    if (data.aiNews && data.aiNews.length > 0) {
      state.aiNews = data.aiNews;
    }
    if (data.hfModels && data.hfModels.length > 0) {
      state.hfModels = data.hfModels;
    }
    if (data.aiGadgets && data.aiGadgets.length > 0) {
      state.aiGadgets = data.aiGadgets;
    }
    
    console.log(`Loaded trends data generated at: ${data.updatedAt}`);
    showToast("最新のデータを読み込みました", "success");
  } catch (error) {
    console.log("Could not load external trends-data.json, using built-in fallback data.", error.message);
  } finally {
    // Refresh views with loaded or fallback data
    renderActiveView();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Update Initial UI States
  updateFavBadge();
  
  // Load fetched JSON data (fallbacks to mock data automatically)
  loadTrendsData();

  // Tab Navigation Handling
  const tabs = {
    "tab-github": { panelId: "github-panel", name: "github" },
    "tab-news": { panelId: "news-panel", name: "news" },
    "tab-hf": { panelId: "hf-panel", name: "hf" },
    "tab-gadget": { panelId: "gadget-panel", name: "gadget" },
    "tab-fav": { panelId: "fav-panel", name: "fav" }
  };

  Object.keys(tabs).forEach(tabId => {
    const tabEl = document.getElementById(tabId);
    if (tabEl) {
      tabEl.addEventListener("click", () => {
        // Update tabs active state
        Object.keys(tabs).forEach(id => {
          const el = document.getElementById(id);
          el.classList.remove("active");
          el.setAttribute("aria-selected", "false");
          
          const panel = document.getElementById(tabs[id].panelId);
          panel.classList.remove("active");
        });

        tabEl.classList.add("active");
        tabEl.setAttribute("aria-selected", "true");
        
        const activePanel = document.getElementById(tabs[tabId].panelId);
        activePanel.classList.add("active");

        state.activeTab = tabs[tabId].name;
        renderActiveView();
      });
    }
  });

  // Search Input Handling
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderActiveView();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        state.searchQuery = "";
        renderActiveView();
      }
    });
  }

  // Category Filter Handling
  const categoryFilters = document.getElementById("category-filters");
  if (categoryFilters) {
    categoryFilters.addEventListener("click", (e) => {
      const chip = e.target.closest(".filter-chip");
      if (!chip) return;

      // Reset active chip classes
      const chips = categoryFilters.querySelectorAll(".filter-chip");
      chips.forEach(c => c.classList.remove("active"));
      
      chip.classList.add("active");
      state.activeCategory = chip.dataset.category;
      renderActiveView();
    });
  }

  // Sorting Handling
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderActiveView();
    });
  }

  // GitHub Sync Handling
  const syncBtn = document.getElementById("api-sync-btn");
  if (syncBtn) {
    syncBtn.addEventListener("click", fetchGitHubTrends);
  }

  // Modal Backdrop/Close Button Handling
  const modal = document.getElementById("detail-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeDetail);
  }

  if (modal) {
    modal.querySelector(".modal-backdrop").addEventListener("click", closeDetail);
  }

  // Logo Reset click handler
  const logoLink = document.getElementById("logo-link");
  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      // Reset all states
      state.searchQuery = "";
      state.activeCategory = "all";
      state.sortBy = "hot";
      if (searchInput) searchInput.value = "";
      
      // Select All Filter Chip
      const chips = categoryFilters.querySelectorAll(".filter-chip");
      chips.forEach(c => c.classList.remove("active"));
      if (chips[0]) chips[0].classList.add("active");

      // Switch to main GitHub Trends Tab
      const githubTab = document.getElementById("tab-github");
      if (githubTab) githubTab.click();
    });
  }

  // Quick button link to favorites
  const favToggleBtn = document.getElementById("favorites-toggle");
  if (favToggleBtn) {
    favToggleBtn.addEventListener("click", () => {
      const favTab = document.getElementById("tab-fav");
      if (favTab) favTab.click();
    });
  }
});

// ==========================================
// 8. Global Action Handlers (Accessible from Inline onclicks)
// ==========================================

window.handleBookmarkToggle = function(itemId, type) {
  toggleBookmark(itemId, type);
};

window.handleOpenDetail = function(itemId, type) {
  openDetail(itemId, type);
};

window.handleCloseDetail = function() {
  closeDetail();
};
