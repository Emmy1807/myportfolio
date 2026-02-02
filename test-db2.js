const { Pool } = require('pg');

async function main() {
    const pool = new Pool({
        user: 'postgres',
        password: 'postgres',
        host: 'host.docker.internal',
        port: 5432,
        database: 'portfolio'
    });

    try {
        console.log('Attempting to connect to PostgreSQL...');
        const result = await pool.query('SELECT version()');
        console.log('✓ Connection successful!');
        console.log(result.rows[0]);
    } catch (error) {
        console.error('✗ Connection error:', error.message);
    } finally {
        await pool.end();
    }
}

main();
