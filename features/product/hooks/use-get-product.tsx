import { productFetch } from "../api/productFetch";
import { type Error } from "@/types/supabase";
import { type Product } from "../types";

interface UseGetProduct {
  product: Product | null;
  error: Error | null;
}

export const useGetProduct = async (id: string): Promise<UseGetProduct> => {
  const [product, error] = await productFetch(id);

  return { product: product, error };
};
