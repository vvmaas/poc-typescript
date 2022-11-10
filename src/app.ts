import express from 'express';
import router from './routers/index.js';
import dotenv from 'dotenv';

dotenv.config();
    
const app = express ();
app.use(express.json())
app.use(router)

app.listen (process.env.PORT, () => {
    console.log('Rolling at ' + process.env.PORT)
})