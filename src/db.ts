import { Pool } from 'pg'

const connectionString =
  'postgres://wtdepltr:0qNBTvEN8n1fnCUEfO3rHZrxkkT3frWv@kesavan.db.elephantsql.com/wtdepltr'

const db = new Pool({ connectionString })

export default db
