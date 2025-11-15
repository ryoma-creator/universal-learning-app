// src/types.ts

export interface LearningItem {
  id: string;
  en: string;
  jp: string;
  category: string;
  usage: string | string[]; // 配列も対応
  nuance?: string;
  situation?: string | string[]; // 配列も対応
  form?: string[]; // 追加: 文法形式
  image?: string; // 追加: 覚えやすいイメージ・比喩
  partOfSpeech?: string; // 追加: 品詞
  simpleTranslation?: string; // 追加: 超シンプルな訳
  createdAt: Date;
  lastReviewed?: Date;
  correctCount: number;
  mistakeCount: number;
  mastered: boolean;
}

export interface DailyLog {
  id: string;
  date: Date;
  improvements: string[];
  newLearnings: string[];
  challenges: string[];
  mood: number; // 1-5
  productivity: number; // 1-5
  aiSuggestions?: string[];
}

export type Category = 
  | 'ビジネス英語'
  | '技術用語' 
  | 'IBM面接'
  | '日常英語'
  | 'ネイティブ表現'
  | 'プレゼンテーション'
  | '超頻出表現'
  | '感情・反応表現'
  | '学習用語'
  | 'AWS用語'
  | 'その他';

export type Mode = 
  | 'home'
  | 'vocabulary'
  | 'vocab-list'
  | 'quick-add'
  | 'mistakes'
  | 'daily-log'
  | 'ai-analysis';

export interface DailyLog {
  id: string;
  date: Date;
  improvements: string[];
  newLearnings: string[];
  challenges: string[];
  mood: number; // 1-5
  productivity: number; // 1-5
  aiSuggestions?: string[];
}

export type Category = 
  | 'ビジネス英語'
  | '技術用語' 
  | 'IBM面接'
  | '日常英語'
  | 'ネイティブ表現'
  | 'プレゼンテーション'
  | '超頻出表現'
  | '感情・反応表現'
  | '学習用語'
  | 'その他';

  export type Mode = 
  | 'home'
  | 'vocabulary'
  | 'vocab-list'
  | 'quick-add'
  | 'mistakes'
  | 'grammar'  // この行を追加
  | 'daily-log'
  | 'ai-analysis';