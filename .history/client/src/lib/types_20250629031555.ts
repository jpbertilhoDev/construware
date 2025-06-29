export interface FeatureTab {
  id: string;
  title: string;
  icon: string;
  content: {
    title: string;
    features: string[];
    image: string;
    imageAlt: string;
  };
}

export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaVariant: "default" | "outline";
  bgColor?: string;
  discount?: string;
  icon: any;
  justification?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  imageUrl: string;
  readTime: number;
}

export interface ForumTopic {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  createdAt: string;
  replies: number;
  views: number;
  isSticky?: boolean;
  isLocked?: boolean;
}

export interface ForumCategory {
  id: string;
  name: string;
  description: string;
  topicCount: number;
  lastPost?: {
    title: string;
    author: string;
    createdAt: string;
  };
}

    author: string;
    createdAt: string;
  };
}
