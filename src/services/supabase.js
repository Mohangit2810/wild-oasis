import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://entsbxzpaklxauzhxwun.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVudHNieHpwYWtseGF1emh4d3VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5MTU0NzgsImV4cCI6MjAzMDQ5MTQ3OH0.T6BECUUZR9PBaM2RbmuZrBbujNtxgYqErgh4xq2JXg4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
