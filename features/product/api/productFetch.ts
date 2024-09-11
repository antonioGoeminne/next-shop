import { createClient } from "@/utils/supabase/server";
import { Error } from "@/types/supabase";
import { Product } from "../types";

type ProductFetchresponse = [Product | null, Error | null];

export const productFetch = async (
  id: string
): Promise<ProductFetchresponse> => {
  const supabase = createClient();

  try {
    let { data: product, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id);
    return [product?.[0], error];
  } catch (error) {
    console.log("productFetchError", error);
    return [null, error as Error];
  }
};
