import {createClient} from "@supabase/supabase-js";
  const supabaseUrl = "https://xerefkpovwkonnzatvqg.supabase.co"
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlcmVma3Bvdndrb25uemF0dnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4Njg4MzIsImV4cCI6MjA2NDQ0NDgzMn0.cq6vA9LU53ZnmgegoFHdDm6LXZTE0Sdvtw5I6UswvQQ"
    const supabase = createClient(supabaseUrl, supabaseKey)

    export default supabaseUrl