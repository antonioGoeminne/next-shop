import { createClient } from "@/utils/supabase/server";
import { Error } from "@/types/supabase";
import { Review } from "../types/reviews";

type HappyReviewsFetchResponse = [Review[] | null, Error | null];

export const reviewsFetch = async (): Promise<HappyReviewsFetchResponse> => {
  const supabase = createClient();

  try {
    let { data: reviews, error } = await supabase.from("reviews").select("*");
    return [reviews, error];
  } catch (error) {
    console.log("reviewsFetchError", "reviewsFetchError");
    return [null, error as Error];
  }
};
