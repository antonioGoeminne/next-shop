import { type Error } from "@/types/supabase";
import { reviewsFetch } from "../api/happy-reviews";
import { Review } from "../types/reviews";

interface UseGetHappyReviews {
  reviews: Review[];
  error: Error | null;
}

export const useGetHappyReviews = async (): Promise<UseGetHappyReviews> => {
  const [reviews, error] = await reviewsFetch();

  return { reviews: reviews ?? [], error };
};
