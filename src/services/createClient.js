
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cqhyievlkhmocqeujjju.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxaHlpZXZsa2htb2NxZXVqamp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyOTA2OTYsImV4cCI6MjA0OTg2NjY5Nn0.l4BQ6Moh8SjlXFMPUiTjrEfkzOyQPC2U7eyvThW1RKQ'

export const supabase = createClient(supabaseUrl, supabaseKey)