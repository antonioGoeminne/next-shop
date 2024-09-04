import { createClient } from "@/utils/supabase/server";
import { Error } from "@/types/supabase";
import { Product } from "@/features/product/types";

type TopSellingFetchResponse = [Product[] | null, Error | null];
// here we simulate a fetch to backend

export const topSellingFetch = async (): Promise<TopSellingFetchResponse> => {
  const supabase = createClient();

  try {
    let { data: products, error } = await supabase.from("products").select("*");
    return [products, error];
  } catch (error) {
    console.log("topSellingFetch error", error);
    return [null, error as Error];
  }
};
