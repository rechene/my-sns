import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rgspkshfnlssxwxnkudt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnc3Brc2hmbmxzc3h3eG5rdWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyMTE0MDEsImV4cCI6MjA5ODc4NzQwMX0.ga9SgxQN98PsQnur6EBYaMUJxwlB1O41BGIsC7rwT6s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
