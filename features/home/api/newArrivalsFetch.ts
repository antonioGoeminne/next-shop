import { createClient } from "@/utils/supabase/server";
import { Error } from "@/types/supabase";
import { Product } from "@/features/product/types";

type NewArrivalsFetchResponse = [Product[] | null, Error | null];
// here we simulate a fetch to backend

export const newArrivalsFetch = async (): Promise<NewArrivalsFetchResponse> => {
  const supabase = createClient();

  try {
    let { data: products, error } = await supabase.from("products").select("*");
    return [products, error];
  } catch (error) {
    console.log("newArrivalsFetchError", error);
    return [null, error as Error];
  }
};
