
import express from 'express';

const app = express();
const port = process.env.PORT || '3000'

app.get('/', (req, res) => {
  res.send('jerrin kallukalam testing!!');
});

app.get('/users', (req, res) => {
  res.send(JSON.stringify({user: ['a', 'b', 'c']}));
});

app.get('/api/weather', (req, res) => {
  res.send(JSON.stringify({message: 'Hello from api/API (jk-ws-ts)' }));
});

app.get('/api/cities', (req, res) => {
  res.send(JSON.stringify({cities: ['Los Angeles', 'NYC', 'Boston', 'Seattle', 'Miami', 'Tampa']}));
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
