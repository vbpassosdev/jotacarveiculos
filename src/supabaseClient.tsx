import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pmeeehdclwipxxnkkvdx.supabase.co'; // substitua com a URL do seu projeto

const supabaseKey = 'sb_publishable_m7LdIZnyQiK7zeIwMdkbzg_NHSQ9CFJ'; // substitua com a sua chave pública

export const supabase = createClient(supabaseUrl, supabaseKey);
