
import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('jerrin testing!!');
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});