export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  link: string;
  image?: string;
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    title: "BPE Vs WordPiece Vs SentencePiece: A Beginner-Friendly Guide To Subword Tokenization",
    date: "2025-05-12",
    author: "Dhiya Adli",
    link: "https://www.figma.com/design/qt", // replace with actual link
    image: "/images/blog/tokenization.jpg",
  },
  {
    id: "2",
    title: "Decoding Strategies in NLP Explained: From Greedy Search to Top-P Sampling (and How to Tune Them)",
    date: "2025-09-15",
    author: "Dhiya Adli",
    link: "https://medium.com/@yourhandle/understanding-machine-learning",
    image: "/images/blog/ml-guide.jpg",
  },
  {
    id: "3",
    title: "Building Scalable APIs with Next.js 14",
    date: "2025-09-10",
    author: "Dhiya Adli",
    link: "https://medium.com/@yourhandle/building-scalable-apis-nextjs",
    image: "/images/blog/nextjs-api.jpg",
  },
  {
    id: "4",
    title: "The Future of AI: Trends to Watch in 2025",
    date: "2025-09-05",
    author: "Dhiya Adli",
    link: "https://medium.com/@yourhandle/future-of-ai-2025",
    image: "/images/blog/ai-trends.jpg",
  },
  {
    id: "5",
    title: "Optimizing React Performance: Tips and Tricks",
    date: "2025-08-28",
    author: "Dhiya Adli",
    link: "https://dev.to/yourhandle/optimizing-react-performance",
    image: "/images/blog/react-performance.jpg",
  },
  {
    id: "6",
    title: "Deep Learning Demystified: Neural Networks Explained",
    date: "2025-08-20",
    author: "Dhiya Adli",
    link: "https://medium.com/@yourhandle/deep-learning-demystified",
    image: "/images/blog/neural-networks.jpg",
  },
  {
    id: "7",
    title: "Building Real-Time Applications with WebSockets",
    date: "2025-08-12",
    author: "Dhiya Adli",
    link: "https://hashnode.com/@yourhandle/building-realtime-apps",
    image: "/images/blog/websockets.jpg",
  },
  {
    id: "8",
    title: "TypeScript Best Practices for Large Projects",
    date: "2025-08-05",
    author: "Dhiya Adli",
    link: "https://medium.com/@yourhandle/typescript-best-practices",
    image: "/images/blog/typescript-best-practices.jpg",
  },
  {
    id: "9",
    title: "Introduction to Natural Language Processing",
    date: "2025-07-30",
    author: "Dhiya Adli",
    link: "https://medium.com/@yourhandle/introduction-to-nlp",
    image: "/images/blog/nlp-intro.jpg",
  },
  {
    id: "10",
    title: "Mastering CSS Grid and Flexbox",
    date: "2025-07-22",
    author: "Dhiya Adli",
    link: "https://dev.to/yourhandle/mastering-css-grid-flexbox",
    image: "/images/blog/css-layouts.jpg",
  },
  {
    id: "11",
    title: "Building Microservices with Node.js",
    date: "2025-07-15",
    author: "Dhiya Adli",
    link: "https://medium.com/@yourhandle/building-microservices-nodejs",
    image: "/images/blog/microservices.jpg",
  },
  {
    id: "12",
    title: "Computer Vision: From Theory to Practice",
    date: "2025-07-08",
    author: "Dhiya Adli",
    link: "https://medium.com/@yourhandle/computer-vision-theory-practice",
    image: "/images/blog/computer-vision.jpg",
  },
  {
    id: "13",
    title: "Serverless Architecture: Pros and Cons",
    date: "2025-07-01",
    author: "Dhiya Adli",
    link: "https://hashnode.com/@yourhandle/serverless-architecture",
    image: "/images/blog/serverless.jpg",
  },
];
