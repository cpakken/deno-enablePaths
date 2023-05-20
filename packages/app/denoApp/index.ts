import { Hono } from 'https://deno.land/x/hono@v3.2.0/mod.ts'

// import { Hono } from 'hono'
import { serve } from 'https://deno.land/std@0.188.0/http/server.ts'

const app = new Hono()

app.get('/', (c) => c.text('Hello Deno!'))

serve(app.fetch)
