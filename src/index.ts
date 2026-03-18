import { serve } from '@hono/node-server'
import { app } from './app.js'
import { cors } from 'hono/cors'

app.use(
  '*',
  cors({
    origin: ['http://localhost:5173'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type'],
  }),
)

const port = 3000

console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})