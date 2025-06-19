import { ReactNode } from 'react';

export interface ArticleContent {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  category?: string;
  pitch?: string;
  overview: string;
  implementationContext: string;
  clientContext: string;
  objective: string;
  challenges: string;
  risks: string;
  presentation: string;
  explanation: string;
  results: string;
}

export interface SkillArticle extends ArticleContent {
  icon: ReactNode;
}

export interface ProjectArticle extends ArticleContent {
  image: string;
  category: string;
  pitch: string;
}