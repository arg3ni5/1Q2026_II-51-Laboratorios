import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://vxoszugvginrsttxnika.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4b3N6dWd2Z2lucnN0dHhuaWthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMjA0ODMsImV4cCI6MjA2ODg5NjQ4M30.BUdy45pw6RbgbHhN45q3zpaWgKCsDJH_s78HKemQ_PA";

export const supabase = createClient(supabaseUrl, supabaseKey);