import PG from 'pg';
const Pool = PG.Pool;

const connection = new Pool({
    user: "postgres",
    password:  '1111',
    host: "localhost",
    port: 5432,
    database: "node_postgres"
})

export default connection