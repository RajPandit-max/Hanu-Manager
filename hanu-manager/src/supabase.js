import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://vovibwyfknnktgyrirbk.supabase.co"
const supabaseKey = "sb_publishable_67zYdt-EN_mqIGJ_rg4q7Q_oHNaTTZO"

export const supabase = createClient(supabaseUrl, supabaseKey)