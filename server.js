import express from 'express';

const app = express();
const PORT = 5000;

app.use(express.json());


app.get('/', (req, res) => {
 res.send("<h1>Hello world</h1>");
})

app.listen(PORT, () => {
  console.log(`auto baby on ${PORT}!`);
});