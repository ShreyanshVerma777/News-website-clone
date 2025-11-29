import Image from "next/image";


export const articles = [
  {
    id: 1,
    slug: "delhi-pollution-levels-rise",
    title: "Delhi pollution levels rise again, authorities issue health advisory",
    summary: "Air quality indices cross severe category in various areas...",
    content: "Full article content goes here...",
    category: "City",
    author: "Staff Reporter",
    date: "2025-11-26T09:30:00Z",
    imageUrl: "/images/image1.jpg",
    isTopStory: true,
  },
  {
    id: 2,
    slug: "india-cricket-series-win",
    title: "India clinches thrilling series win in final over",
    summary: "Last over heroics give India a stunning win...",
    content: "Sports article content...",
    category: "Sports",
    author: "Sports Desk",
    date: "2025-11-25T16:00:00Z",
    imageUrl: "/images/image2.jpg",
    isTopStory: true,
  },
  {
    id: 3,
    slug: "startup-funding-surge",
    title: "Startup funding surges as investors bet big on AI",
    summary: "VCs show confidence despite market slowdown...",
    content: "Business article content...",
    category: "Business",
    author: "Business Bureau",
    date: "2025-11-24T12:00:00Z",
    imageUrl: "", // testing missing image
    isTopStory: false,
  },
];

export const getAllArticles = () => articles;
export const getArticleBySlug = (slug) => articles.find(a => a.slug === slug);
export const getTopStories = () => articles.filter(a => a.isTopStory);
