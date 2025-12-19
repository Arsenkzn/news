import { CategoriesType } from '@/entities/category';
export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';

export interface CategoriesApiResponce {
  categories: CategoriesType[];
  description: string;
  status: string;
}

export interface IFilters {
  page_number: number;
  category: CategoriesType | null;
  page_size: number;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;

export interface CategoriesApiResponse {
  categories: CategoriesType[];
  description: string;
  status: string;
}


