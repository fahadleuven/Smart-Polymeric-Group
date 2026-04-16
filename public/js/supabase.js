// supabase.js
const SUPABASE_URL = "https://janlmvtomnbvuxzjxbgg.supabase.co";
const SUPABASE_ANON_KEY = "mFub24iLCJpYXQiOjE3Njg4MDM1NTYsImV4cCI6MjA4NDM3OTU1Nn0.Wkcw6WTsXDgKfja6gkoSGtiI-Bl8SNs-99RLX3ohPZQ";

// attach to window so all pages can use it
window.supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
