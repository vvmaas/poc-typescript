import express from 'express';
import router from './routers/index';
import dotenv from 'dotenv';

dotenv.config();
    
const app = express ();
app.use(router)
app.use(express.json())

app.listen (process.env.PORT, () => {
    console.log('Rolling at ' + process.env.PORT)
})