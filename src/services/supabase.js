import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fpjmiouobhbspsuhulqf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwam1pb3VvYmhic3BzdWh1bHFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3NDc2MDYsImV4cCI6MjA1NDMyMzYwNn0._kJUcZxSFKMU_Q2t0a1eWZvixc3KOEhKu2yr817e8OU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
