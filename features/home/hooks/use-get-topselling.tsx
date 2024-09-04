import { type Product } from "@/features/product/types";
import { type Error } from "@/types/supabase";
import { topSellingFetch } from "../api/topSellingFetch";

interface UseGetTopSelling {
  products: Product[];
  error: Error | null;
}

export const useGetTopSelling = async (): Promise<UseGetTopSelling> => {
  const [products, error] = await topSellingFetch();

  return { products: products ?? [], error };
};
