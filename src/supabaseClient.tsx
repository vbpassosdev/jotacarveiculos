import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rzartyqwolxjochapqpm.supabase.co'; // substitua com a URL do seu projeto
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6YXJ0eXF3b2x4am9jaGFwcXBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzNDQ1MzcsImV4cCI6MjAzOTkyMDUzN30.05yOZiX3luCq0MKNdmRukRiuWhZUujQ8i46RZeC8emc'; // substitua com a sua chave pública

export const supabase = createClient(supabaseUrl, supabaseKey);
