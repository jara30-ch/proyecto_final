import pkg from "pg"
const { Pool } = pkg

export const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Longline4",
  database: "tienda_juguetes",
  port: 5432
})