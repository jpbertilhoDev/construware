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

export interface User {
  id: number;
  username: string;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image?: string;
  publishedAt: string;
  tags: string[];
  author: User;
}

declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  grammars: SpeechGrammarList;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  serviceURI: string;

  start(): void;
  stop(): void;
  abort(): void;

  onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onerror:
    | ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any)
    | null;
  onnomatch:
    | ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any)
    | null;
  onresult:
    | ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any)
    | null;
  onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
}

declare var SpeechRecognition: {
  prototype: SpeechRecognition;
  new (): SpeechRecognition;
};

interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string;
  readonly message: string;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  readonly length: number;
  readonly isFinal: boolean;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

interface SpeechGrammarList {
  readonly length: number;
  addFromString(string: string, weight?: number): void;
  addFromURI(src: string, weight?: number): void;
  item(index: number): SpeechGrammar;
  [index: number]: SpeechGrammar;
}

interface SpeechGrammar {
  src: string;
  weight: number;
}

export interface AIMessage {
  id: string;
  type: "ai" | "user" | "system";
  content: string;
  timestamp: Date;
  options?: string[];
  attachments?: FileAttachment[];
  analysis?: CompetitorAnalysis;
  recommendations?: TechRecommendation[];
}

export interface FileAttachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  analysis?: string;
}

export interface CompetitorAnalysis {
  competitors: Array<{
    name: string;
    strengths: string[];
    weaknesses: string[];
    pricing: string;
    marketShare: string;
    website?: string;
    employees?: string;
  }>;
  opportunities: string[];
  recommendations: string[];
  marketSize?: string;
  growthRate?: string;
}

export interface TechRecommendation {
  category: string;
  technology: string;
  description: string;
  benefits: string[];
  implementationTime: string;
  estimatedCost: string;
  priority: "high" | "medium" | "low";
  complexity: "simple" | "moderate" | "complex";
  roi: string;
}

export interface AIUserData {
  name?: string;
  company?: string;
  businessType?: string;
  employees?: string;
  currentSystem?: string;
  mainChallenge?: string;
  budget?: string;
  timeline?: string;
  email?: string;
  whatsapp?: string;
  industry?: string;
  location?: string;
  website?: string;
  competitors?: string[];
  techStack?: string[];
  goals?: string[];
  annualRevenue?: string;
  digitalMaturity?: "basic" | "intermediate" | "advanced";
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  type: "demo" | "consultation" | "technical" | "followup";
  status: "scheduled" | "confirmed" | "completed" | "cancelled";
  description?: string;
  attendees?: string[];
  meetingUrl?: string;
  agenda?: string[];
}

export interface BusinessType {
  id: string;
  name: string;
  emoji: string;
  keywords: string[];
  commonChallenges?: string[];
  recommendedSolutions?: string[];
  averageProjectCost?: string;
  implementationTime?: string;
}

export interface TechStack {
  name: string;
  description: string;
  category: string;
  popularity?: number;
  complexity?: "simple" | "moderate" | "complex";
  costRange?: string;
  alternatives?: string[];
}

export interface AnalyticsData {
  totalConversations: number;
  completionRate: number;
  averageSessionTime: number;
  topBusinessTypes: Array<{ type: string; count: number }>;
  topChallenges: Array<{ challenge: string; count: number }>;
  conversionRate: number;
  leadQuality: "high" | "medium" | "low";
}

export interface ROICalculation {
  currentCosts: number;
  projectedSavings: number;
  implementationCost: number;
  annualSavings: number;
  paybackPeriod: number;
  roi: number;
  netPresentValue: number;
}

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  content: string;
  type: "welcome" | "followup" | "demo" | "report";
  variables: string[];
}

export interface WhatsAppMessage {
  id: string;
  recipient: string;
  content: string;
  status: "pending" | "sent" | "delivered" | "read" | "failed";
  timestamp: Date;
  attachments?: Array<{
    type: "pdf" | "image" | "document";
    url: string;
    name: string;
  }>;
}
