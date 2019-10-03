import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';

const app = express();
const PORT = 5000;

app.get('/weather/:city/:country', async (req, res) => {
  const formData = `${req.params.city},${req.params.country}`
  const apiUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${
    formData}&APPID=${process.env.API_KEY}&units=metric`)
  const data = await apiUrl.json()
  res.send({data})
});

app.listen(PORT, () => {
  console.log(`auto baby on ${PORT}!`);
});