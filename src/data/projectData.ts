// src/data/projectData.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  date: string;
  techStack: {
    name: string;
    description: string;
  }[];
  features: {
    name: string;
    description: string;
  }[];
  link?: string;
  repository?: string;
  featured?: boolean;
}

export const projectData: Project[] = [
  {
    id: '1',
    slug: 'newshub',
    title: 'NewsHub',
    category: 'Web Development',
    shortDescription: 'A modern news aggregation platform',
    description: 'NewsHub is a comprehensive news aggregation platform that curates and displays news from various sources in an elegant, user-friendly interface.',
    image: '/images/projects/newshub.jpg',
    images: [
      '/images/projects/newshub-1.jpg',
      '/images/projects/newshub-2.jpg',
    ],
    date: '2025-03-15',
    techStack: [
      { name: 'Next.js', description: 'React framework for production' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
      { name: 'TypeScript', description: 'Typed JavaScript' },
    ],
    features: [
      { name: 'Real-time Updates', description: 'Live news feed updates' },
      { name: 'Category Filtering', description: 'Filter by news categories' },
    ],
    link: 'https://newshub-demo.com',
    repository: 'https://github.com/username/newshub',
    featured: true,
  },
  {
    id: '2',
    slug: 'serenity-dining',
    title: 'Serenity Dining Co',
    category: 'Web Development',
    shortDescription: 'Elegant restaurant booking system',
    description: 'A sophisticated restaurant website with online booking capabilities, menu management, and customer authentication.',
    image: '/images/projects/serenity.jpg',
    images: [
      '/images/projects/serenity-1.jpg',
      '/images/projects/serenity-2.jpg',
    ],
    date: '2025-03-20',
    techStack: [
      { name: 'Next.js', description: 'Popular JavaScript framework' },
      { name: 'Tailwind CSS', description: 'Styling framework' },
      { name: 'MongoDB', description: 'Document database' },
      { name: 'Prisma ORM', description: 'Database interaction' },
      { name: 'NextAuth', description: 'Authentication solution' },
    ],
    features: [
      { name: 'Online Booking', description: 'Reserve tables online' },
      { name: 'Menu Management', description: 'Dynamic menu system' },
      { name: 'User Authentication', description: 'Secure login system' },
    ],
    link: 'https://serenity-dining.com',
    featured: true,
  },
  {
    id: '3',
    slug: 'reelinnovate',
    title: 'ReelInnovate',
    category: 'Web Development',
    shortDescription: 'Video content platform',
    description: 'A modern video sharing and streaming platform with advanced features.',
    image: '/images/projects/reelinnovate.jpg',
    images: [],
    date: '2025-02-10',
    techStack: [
      { name: 'Next.js', description: 'React framework' },
      { name: 'Tailwind CSS', description: 'CSS framework' },
    ],
    features: [
      { name: 'Video Upload', description: 'Upload and manage videos' },
      { name: 'Streaming', description: 'Smooth video playback' },
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'healthiezz',
    title: 'Healthiezz',
    category: 'Web Development',
    shortDescription: 'Health and wellness tracking app',
    description: 'A comprehensive health tracking application for monitoring fitness and nutrition.',
    image: '/images/projects/healthiezz.jpg',
    images: [],
    date: '2025-01-15',
    techStack: [
      { name: 'Next.js', description: 'JavaScript framework' },
      { name: 'Tailwind CSS', description: 'Styling solution' },
    ],
    features: [
      { name: 'Activity Tracking', description: 'Track daily activities' },
      { name: 'Nutrition Log', description: 'Log meals and calories' },
    ],
    featured: true,
  },
  {
    id: '5',
    slug: 'core-align',
    title: 'Core Align',
    category: 'Web Development',
    shortDescription: 'Fitness and alignment platform',
    description: 'Platform focused on core strength and body alignment exercises.',
    image: '/images/projects/core-align.jpg',
    images: [],
    date: '2024-12-20',
    techStack: [
      { name: 'Next.js', description: 'React framework' },
      { name: 'Tailwind CSS', description: 'CSS framework' },
    ],
    features: [
      { name: 'Exercise Library', description: 'Comprehensive exercise database' },
      { name: 'Progress Tracking', description: 'Track your improvements' },
    ],
  },
  {
    id: '6',
    slug: 'messendger',
    title: 'Messendger',
    category: 'Web Development',
    shortDescription: 'Real-time messaging application',
    description: 'A modern messaging platform with real-time chat capabilities.',
    image: '/images/projects/messendger.jpg',
    images: [],
    date: '2024-11-30',
    techStack: [
      { name: 'Next.js', description: 'Framework' },
      { name: 'Tailwind CSS', description: 'Styling' },
    ],
    features: [
      { name: 'Real-time Chat', description: 'Instant messaging' },
      { name: 'Group Chats', description: 'Create group conversations' },
    ],
  },
  {
    id: '7',
    slug: 'iga-panggang-wak-budi',
    title: 'Iga Panggang Wak Budi',
    category: 'Web Development',
    shortDescription: 'Traditional restaurant website',
    description: 'Website for traditional Indonesian grilled ribs restaurant.',
    image: '/images/projects/iga-panggang.jpg',
    images: [],
    date: '2024-10-15',
    techStack: [
      { name: 'Next.js', description: 'Web framework' },
      { name: 'Tailwind CSS', description: 'Styling' },
    ],
    features: [
      { name: 'Menu Display', description: 'Showcase menu items' },
      { name: 'Location Info', description: 'Find restaurant locations' },
    ],
  },
  {
    id: '8',
    slug: 'twitter-clone',
    title: 'Twitter Clone',
    category: 'Web Development',
    shortDescription: 'Social media platform clone',
    description: 'A full-featured Twitter clone with posting, following, and feed features.',
    image: '/images/projects/twitter-clone.jpg',
    images: [],
    date: '2024-09-20',
    techStack: [
      { name: 'Next.js', description: 'Framework' },
      { name: 'Tailwind CSS', description: 'Styling' },
    ],
    features: [
      { name: 'Post Tweets', description: 'Share your thoughts' },
      { name: 'Follow Users', description: 'Connect with others' },
    ],
  },
  {
    id: '9',
    slug: 'wabread',
    title: 'WaBread',
    category: 'Web Development',
    shortDescription: 'Artisan bakery e-commerce',
    description: 'E-commerce platform for artisan bread and baked goods.',
    image: '/images/projects/wabread.jpg',
    images: [],
    date: '2024-08-10',
    techStack: [
      { name: 'Next.js', description: 'Framework' },
      { name: 'Tailwind CSS', description: 'Styling' },
    ],
    features: [
      { name: 'Online Ordering', description: 'Order bread online' },
      { name: 'Product Catalog', description: 'Browse all products' },
    ],
  },
];