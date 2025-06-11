import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from "express";
import path from 'path';
import { sqlDbConnection } from './db-connect';
dotenv.config();
const app = express();

/* for inserting users data in table from xlsx sheet */

/* const insertData = async (client: Client) => {
    try {
        const query = `
            INSERT INTO users (
                e_code, e_gate, e_date, sno, gpass_no, worker_name,
                worker_desig, worker_agency, gpass_expiry_dt, time_from, time_to, work_area
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        `;

        const data = loadDataFromExcel();
        for (const row of data) {
            await client.query(query, [
                row['E_CODE'], row['E_GATE'], row['E_DATE'], row['SNO'], row['GPASS_NO'],
                row['WORKER_NAME'], row['WORKER_DESIG'], row['WORKER_AGENCY'],
                row['GPASS_EXPIRY_DT'], row['TIME_FROM'], row['TIME_TO'], row['WORK_AREA']
            ]);
        }
    } catch (err) {
        console.error("Error inserting data:", err);
    }
}

const loadDataFromExcel = (): any[] => {
    const filePath = path.resolve('C:\\Users\\RSK.RSL-197\\Downloads\\GMS_data.xls');
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    return jsonData;
}

const main = async () => {
    try {
        const client = await sqlDbConnection();
        await insertData(client);
        await client.end();
    } catch (err) {
        console.error("Error in main execution:", err);
    }
}

main().catch(err => {
    console.error("Error in main execution:", err);
}); */

let loggedIn: boolean = false;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    // Set CORS headers    
    // res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL); // Replace with your frontend domain
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true"); // Allow credentials (cookies, etc.)
    // Pass to next layer of middleware
    next();
});


// Serve the login file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../login.html'));
});

// Serve users.html file
app.get('/users', (req, res) => {
    if (loggedIn) {
        res.sendFile(path.join(__dirname, '../users.html'));
    } else {
        res.redirect('/');
    }
});

// Handle login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Implement your user authentication logic here
    if (username === 'pranay_1234' && password === 'pranay@1234') {
        loggedIn = true;
        res.redirect('/users');
    } else {
        res.send('Invalid username or password');
    }
});

app.get('/api/users', async (req, res) => {
    const gpassNo = req.query.gpass_no;
    let query = 'SELECT * FROM users';
    let values: any[] | undefined = [];

    if (gpassNo) {
        query += ' WHERE gpass_no = $1';
        values = [gpassNo];
    }

    try {
        const client = await sqlDbConnection();
        const result = await client.query(query, values);
        await client.end();
        res.json(result.rows);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on the port::${process.env.PORT}`);
});

