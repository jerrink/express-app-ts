
import express from 'express';

const app = express();
const port = process.env.PORT || '3000'

app.get('/', (req, res) => {
  res.send('jerrin kallukalam testing!!');
});

app.get('/users', (req, res) => {
  res.send(JSON.stringify({user: ['a', 'b', 'c']}));
});

app.get('/weather', (req, res) => {
  res.send(JSON.stringify({message: 'Hello from API (jk-ws-ts)' }));
});

app.get('/cities', (req, res) => {
  res.send(JSON.stringify({cities: ['NYC', 'Boston', 'Seattle', 'Miami', 'Tampa']}));
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
