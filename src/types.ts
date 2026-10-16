export type SupportedLanguage = 'global' | 'spanish' | 'english' | 'hinglish' | 'portuguese';

export interface StreamMessage {
  id: string;
  author: string;
  platform: 'kick' | 'youtube';
  text: string;
  category: 'question' | 'request' | 'tip' | 'chatter' | 'toxic' | 'member';
  badge?: 'MEMBER' | 'REPEAT' | 'VIP' | 'MOD' | 'SUPER CHAT';
  repeatCount?: number;
  tipAmount?: string;
  timestamp: string;
  isAnswered?: boolean;
  avatarColor?: string;
  language?: SupportedLanguage;
}

export interface ClusteredRequest {
  id: string;
  topic: string;
  count: number;
  category: string;
  isCompleted?: boolean;
}

export interface StreamQuestion {
  id: string;
  author: string;
  question: string;
  repeatCount: number;
  minutesAgo: number;
  isAnswered: boolean;
  platform: 'kick' | 'youtube';
}

export interface ActivePerson {
  id: string;
  author: string;
  status: 'joined' | 'active' | 'superchat';
  latestMessage: string;
  timestamp: string;
  messageCount?: number;
}

