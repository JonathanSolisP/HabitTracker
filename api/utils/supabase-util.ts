import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

export const createSupabaseClient = () => {
  const SUPABASE_URL = process.env.SUPABASE_URL ?? '';
  const SUPABASE_SECRET = process.env.SUPABASE_SECRET ?? '';
  return createClient(SUPABASE_URL, SUPABASE_SECRET);
};

export const TABLE_NAMES = {
  HABITS: 'Habits',
}