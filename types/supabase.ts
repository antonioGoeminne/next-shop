import { PostgrestError } from "@supabase/supabase-js";

export type postgressError = PostgrestError | null;
export type Error = any[] | postgressError;
