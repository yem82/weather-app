import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';

const app = express();
const PORT = 5000;

app.get('/weather', (req, res) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.API_KEY}`).
    then(res => res.json()).
    then(data => res.send({data}))
});

app.listen(PORT, () => {
  console.log(`auto baby on ${PORT}!`);
});