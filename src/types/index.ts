import { ReactNode } from 'react';

export interface ArticleContent {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  category?: string;
  pitch?: string;
  overview: ReactNode;
  implementationContext: ReactNode;
  clientContext: ReactNode;
  objective: ReactNode;
  challenges: ReactNode;
  risks: ReactNode;
  presentation: ReactNode;
  explanation: ReactNode;
  results: ReactNode;
}

export interface SkillArticle extends ArticleContent {
  icon: ReactNode;
}

export interface ProjectArticle extends ArticleContent {
  image: string;
  category: string;
  pitch: string;
}