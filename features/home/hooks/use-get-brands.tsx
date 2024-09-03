import { brandsFetch } from "../api/brandsFetch";
import { type Brand } from "../types/brand";
import { type Error } from "@/types/supabase";

interface UseGetBrands {
  brands: Brand[];
  error: Error | null;
}

export const useGetBrands = async (): Promise<UseGetBrands> => {
  const [brands, error] = await brandsFetch();

  return { brands: brands ?? [], error };
};
