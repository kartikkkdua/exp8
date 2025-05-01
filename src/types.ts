export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
  releaseYear: number;
  genre: string[];
  description: string;
  reviews: Review[];
}

export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}