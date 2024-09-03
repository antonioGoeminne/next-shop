import { createClient } from "@/utils/supabase/server";
import { Brand } from "../types/brand";
import { Error } from "@/types/supabase";

type BrandsFetchResponse = [Brand[] | null, Error | null];

export const brandsFetch = async (): Promise<BrandsFetchResponse> => {
  const supabase = createClient();

  try {
    let { data: brands, error } = await supabase.from("brands").select("*");
    return [brands, error];
  } catch (error) {
    console.log("brandsFetchError", "brandsFetchError");
    return [null, error as Error];
  }
};
