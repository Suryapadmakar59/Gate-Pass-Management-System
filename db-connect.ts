/* --------db connection of mySql--------- */
import { Client } from 'pg';
export const sqlDbConnection = async () => {
    const client = new Client(process.env.SQL_URL);
    try {
        await client.connect();
        // executes a query to get the current timestamp from the database
        // await client.query(`
        // CREATE TABLE IF NOT EXISTS users (
        //         id SERIAL PRIMARY KEY,
        //         e_code VARCHAR(50) NOT NULL,
        //         e_gate VARCHAR(50) NOT NULL,
        //         e_date VARCHAR(50) NOT NULL,
        //         sno VARCHAR(50) NOT NULL,
        //         gpass_no VARCHAR(50) NOT NULL,
        //         worker_name VARCHAR(50) NOT NULL,
        //         worker_desig VARCHAR(255) NOT NULL,
        //         worker_agency VARCHAR(255) NOT NULL,
        //         gpass_expiry_dt VARCHAR(50) NOT NULL,
        //         time_from VARCHAR(50) NOT NULL,
        //         time_to VARCHAR(50) NOT NULL,
        //         work_area VARCHAR(50) NOT NULL
        //     );
        // `)
        return client;
    } catch (err) {
        throw err;
    }
}

