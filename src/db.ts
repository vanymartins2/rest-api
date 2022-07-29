import { Pool } from 'pg'

const connectionString = '{connectionString}'

const db = new Pool({ connectionString })

export default db
