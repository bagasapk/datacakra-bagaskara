import type { UploadFile } from "antd";
import type { MeInterface } from "./Auth.type";

export interface ResponseGetArticles {
  id: number;
  documentId: string;
  title: string;
  description: string;
  cover_image_url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null | string;
  user: MeInterface;
  category?: { id: number };
  comments: ResponseGetArticlesComment[];
  localizations: [];
}

export interface ResponseGetArticlesById {
  id: number;
  documentId: string;
  title: string;
  description: string;
  cover_image_url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null | string;
  comments?: ResponseGetArticlesComment[];
}

export interface ResponseGetArticlesComment {
  id: number;
  documentId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null | string;
  user?: MeInterface
}

export interface ResponseUpload {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: null | string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null | string;
}

export interface RequestPostCreateArticle {
  title: string;
  description: string;
  cover_image_url: string | UploadFile[];
  category: number;
}
