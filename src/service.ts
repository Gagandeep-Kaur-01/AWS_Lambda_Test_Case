// import express from 'express';
import express = require('express');
import { hellohandler } from './handler'

const app = express();
const bp = require('body-parser');

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Well done");
});

app.get('/hello', async(req, res) => {
   const response =  await hellohandler();
   res.send(response);
})

app.listen(3000, () => {
    console.log('The application is listening on the port 3000');
})

