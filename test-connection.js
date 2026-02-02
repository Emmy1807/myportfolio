const { Pool } = require('pg');

async function main() {
    const pool = new Pool({
        user: 'postgres',
        password: 'postgres',
        host: 'host.docker.internal',
        port: 5432,
        database: 'portfolio',
        sslmode: 'disable'
        console.error('✗ Connection error:', error.message);
        console.error('Error:', error);
    } finally {
        await pool.end();
    }
}

main();
