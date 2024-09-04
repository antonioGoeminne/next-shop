import { type Product } from "@/features/product/types";
import { type Error } from "@/types/supabase";
import { newArrivalsFetch } from "../api/newArrivalsFetch";

interface UseGetNewArrivals {
  products: Product[];
  error: Error | null;
}

export const useGetNewArrivals = async (): Promise<UseGetNewArrivals> => {
  const [products, error] = await newArrivalsFetch();

  return { products: products ?? [], error };
};
