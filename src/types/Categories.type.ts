import type { ResponseGetArticlesById } from "./Destinations.type";

export interface GetCategories {
  id: number;
  documentId: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null;
  articles?: ResponseGetArticlesById[]
}

export interface RequestCategory {
  name: string;
  description: string;
}
