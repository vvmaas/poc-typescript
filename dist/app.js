import express from 'express';
import router from './routers/index.js';
import dotenv from 'dotenv';
dotenv.config();
var app = express();
app.use(router);
app.use(express.json());
app.listen(process.env.PORT, function () {
    console.log('Rolling at ' + process.env.PORT);
});
