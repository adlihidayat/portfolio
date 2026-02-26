export interface TechItem {
  name: string;
  logoUrl: string;
  invert?: boolean;
}

export type ProjectStatus = "complete" | "Completed" | "not started" | "drafted";

export interface Project {
  slug: string;
  title: string;
  description: string;
  images: string[];
  createdAt: string;
  lastUpdated: string;
  githubUrl: string;
  liveUrl: string;
  status: ProjectStatus;
  keyFeatures: string[];
  techStack: TechItem[];
  category: "Artificial intelligence" | "Website" | "All";
}

export const projects: Project[] = [
  {
    slug: "urban-ai",
    title: "Urban AI",
    description: "Built a complete AI-powered customer service and product knowledge assistant.",
    images: ["/projects/urban-republic/thumbnail.webp", "https://placehold.co/600x400/1D1D1D/FFFFFF?text=Urban+AI+2", "https://placehold.co/600x400/1D1D1D/FFFFFF?text=Urban+AI+3"],
    createdAt: "Jan 2026",
    lastUpdated: "Mar 2026",
    githubUrl: "https://github.com/adlih/urban-ai",
    liveUrl: "https://example.com/urban-ai",
    status: "drafted",
    keyFeatures: ["RAG Search", "Autonomous Agent", "Dynamic Filtering"],
    techStack: [
      { name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Python", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Redis", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" }
    ],
    category: "Artificial intelligence",
  },
  {
    slug: "siartour-travel",
    title: "Siar Tour Haramain",
    description: "Official website of siar tour to strengthen the brand’s digital presence and support customer acquisition. The goal was to create a structured, user-friendly platform where visitors could easily access product information, pricing details, and company values. I designed and developed the website end-to-end with a focus on clear information architecture, responsive design across devices, and maintainable structure. The result is a modern, scalable web platform that improves usability, professionalism, and long-term maintainability.",
    images: ["/projects/siar-tour/thumbnail.webp", "/projects/siar-tour/mock.webp", "/projects/siar-tour/ui-design.webp"],
    createdAt: "Dec 2025",
    lastUpdated: "Jan 2026",
    githubUrl: "#",
    liveUrl: "https://siartour.com",
    status: "Completed",
    keyFeatures: ["Program management system", "Media-driven activity showcase", "Integrated ordering workflow", "Internal content management system"],
    techStack: [
      { name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    category: "Website",
  },
  {
    slug: "reellnnovate",
    title: "ReeIInnovate",
    description: "This is a company profile website for start up that focus on fishing. It designed to reel in new customers and cast a wider net for brand awareness. The website features a streamlined user experience that allows visitors to easily navigate product information, price options, company values, etc. responsive design to ensure optimal viewing across all devices, ensuring a catch on every platform. and optimize the website to improve the user experience",
    images: ["/projects/reellnovate/thumbnail.webp", "/projects/reellnovate/mock.webp", "/projects/reellnovate/ui-design.webp"],
    createdAt: "Aug 2024",
    lastUpdated: "Aug 2024",
    githubUrl: "https://github.com/adlihidayat/reellnnovate",
    liveUrl: "https://reellnnovate.vercel.app/",
    status: "Completed",
    keyFeatures: [],
    techStack: [
      { name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
    category: "Website",
  },
  {
    slug: "wabread",
    title: "WaBread",
    description: "A website an engaging 3D visual experience that showcases a store, providing users with an immersive interaction. It features a navigational menu for seamless browsing across different sections, including a contact area for customer inquiries, an address section for locating the physical store, and a promotional section highlighting current offers. The integration of R3F adds dynamic 3D visuals that enhance user engagement, making the browsing experience more interactive and visually appealing.",
    images: ["/projects/wabread/thumbnail.webp", "/projects/wabread/mock.webp", "/projects/wabread/ui-design.webp"],
    createdAt: "Aug 2024",
    lastUpdated: "Aug 2024",
    githubUrl: "https://github.com/adlihidayat/wabread",
    liveUrl: "https://wabread.vercel.app/",
    status: "Completed",
    keyFeatures: ["360 Rotation to interactively rotate an object or scene in a full circle."],
    techStack: [
      { name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Three.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg", invert: true },
      { name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Framer Motion", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", invert: true },
    ],
    category: "Website",
  },
  {
    slug: "healthiez",
    title: "Healthiez",
    description: "This is a Niche website that provide informations abaout healthy food. Catering to individuals seeking to nourish their bodies and minds with delicious and wholesome recipes. The website offers a the list of healthy food, ingredient, the video of how to cook it, etc. The data of this website is come from TheMealDb, an API that provide information about food and has lot of feature",
    images: ["/projects/healthiez/thumbnail.webp", "/projects/healthiez/mock.webp", "/projects/healthiez/ui-design.webp"],
    createdAt: "Oct 2023",
    lastUpdated: "Oct 2023",
    githubUrl: "https://github.com/adlihidayat/healthiezz",
    liveUrl: "https://healthiezz.vercel.app/",
    status: "Completed",
    keyFeatures: ["Search Bar to search the food easily by its name", "Filter by foot type"],
    techStack: [
      { name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "SWR", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
    category: "Website",
  },
  {
    slug: "core-align",
    title: "Core Align",
    description: "The website showcases Core Align's new 'Hypfo' shoes with an immersive 3D experience and smooth navigation. It highlights the shoe's design, technology, and features, offering a modern, responsive interface for users to explore. This is website use framer motion to apply scroll based animation to the 3d assets and the background to make it appealing.",
    images: ["/projects/core-align/thumbnail.webp", "/projects/core-align/mock.webp", "/projects/core-align/ui-design.webp"],
    createdAt: "Aug 2024",
    lastUpdated: "Aug 2024",
    githubUrl: "https://github.com/adlihidayat/core-align",
    liveUrl: "https://core-align.vercel.app/",
    status: "Completed",
    keyFeatures: ["Scroll Based Animation a dynamic and engaging browsing experience as you explore the content.",],
    techStack: [
      { name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Three.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg", invert: true },
      { name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Framer Motion", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", invert: true },
    ],
    category: "Website",
  },
  {
    slug: "newshub",
    title: "NewsHub",
    description: "The NewsHub web application is a modern and efficient news platform designed to provide users with up-to-date news from various sources. The app features a user-friendly interface where users can search for specific news topics and filter results by popularity, relevancy, or publication date. Powered by the News API, the platform ensures that only high-quality, relevant articles are displayed, while integrating Google OAuth for easy user login. NewsHub aims to deliver an intuitive browsing experience, allowing users to stay informed and engaged with the latest stories in a simple and straightforward manner.",
    images: ["/projects/newshub/thumbnail.webp", "/projects/newshub/mock.webp", "/projects/newshub/ui-design.webp"],
    createdAt: "Sep 2024",
    lastUpdated: "Sep 2024",
    githubUrl: "https://github.com/adlihidayat/news-hub",
    liveUrl: "https://newshub-net.vercel.app/",
    status: "Completed",
    keyFeatures: ["Animation that make it visually engaging and eye-catching for users", "Search bar to allowing users easily find specific news articles or topics of interest.", "Login  using their google account",],
    techStack: [
      { name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Framer Motion", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", invert: true },
    ],
    category: "Website",
  },
  {
    slug: "serenity-dining",
    title: "Serenity Dining",
    description: "A Restaurant website that show the user the detail of the restaurant (like facility, menu, gallery, place, etc), this website also have a feature to book a seat from your house but the user need to login first before ordering. This website has its own database to save the menu and the detail of it, the order of customer, etc. The authentication is using google api. The UI is elegant that suit the vibe of the restaurant.",
    images: ["/projects/serenity-dining/thumbnail.webp", "/projects/serenity-dining/mock.webp", "/projects/serenity-dining/ui-design.webp"],
    createdAt: "Dec 2023",
    lastUpdated: "Dec 2023",
    githubUrl: "https://github.com/adlihidayat/serenity-dining",
    liveUrl: "https://serenity-dining.vercel.app/",
    status: "Completed",
    keyFeatures: ["login using google account", "Realtime Database", "Payment gateway"],
    techStack: [
      { name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Framer Motion", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", invert: true },
      { name: "MongoDB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Prisma", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
      { name: "NextAuth", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    ],
    category: "Website",
  },
];

export interface Blog {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  postedDate: string;
  readTime: string;
  liveLink: string;
}

export const blogs: Blog[] = [
  {
    slug: "decoding-strategies-nlp",
    title: "Decoding Strategies in NLP Explained: From Greedy Search to Top-P Sampling (and How to Tune Them)",
    description: "Dive deep into the mathematics and code behind popular text generation strategies.",
    imageUrl: "/blogs/decoding-strategies.webp",
    postedDate: "Sep 02, 2024",
    readTime: "17 min read",
    liveLink: "https://dhiya-adli.hashnode.dev/decoding-strategies-in-nlp",
  },
  {
    slug: "bpe-vs-wordpiece",
    title: "BPE vs WordPiece vs SentencePiece: A Beginner-Friendly Guide to Subword Tokenization",
    description: "Understanding the tokenization algorithms powering modern LLMs.",
    imageUrl: "/blogs/tokenization.webp",
    postedDate: "Aug 27, 2024",
    readTime: "12 min read",
    liveLink: "https://dhiya-adli.hashnode.dev/bpe-vs-wordpiece-vs-sentencepiece-a-beginner-friendly-guide-to-subword-tokenization",
  }
];
