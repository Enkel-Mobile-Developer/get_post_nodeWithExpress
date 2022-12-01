import express from 'express';
import {sumOfArray, returnUnique} from './functions.js';

const app = express();
app.use(express.json());

app.get('/unique', async (req, res) => {
  console.log('GET method =>');
  const numbers= req.query.numbers;
  const unique = returnUnique(numbers);
  res.json(unique);
});

app.get('/sum', async (req, res) => {
    console.log('GET method =>');
    const numbers = req.query.numbers;
    const arr = [];
    

    for (let number of numbers) {
        if(!isNaN(Number(number))) {
        arr.push(Number(number));}
    }
    const Sum = sumOfArray(arr);
    res.send(String(Sum));
});

app.post('/unique', async (req, res) => {
  console.log('POST method =>');
  const numbers= req.query.numbers;
  const unique = returnUnique(numbers);
  res.json(unique);
});


app.post('/sum', async (req, res) => {
  console.log('POST method =>');
  const numbers = req.query.numbers;
  const arr = [];
  

  for (let number of numbers) {
      if(!isNaN(Number(number))) {
      arr.push(Number(number));}
  }
  const Sum = sumOfArray(arr);
  res.send(String(Sum));
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
