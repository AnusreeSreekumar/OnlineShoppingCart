import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((error) => {
    if(error){
        console.error('Error connecting to MySQL database:', error)
    }
    else{
        console.log('Connected to MySQL database')
    }
});

export default db;