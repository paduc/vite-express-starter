import express from 'express';
import fs from 'node:fs';
const app = express();
const port = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.get('/test', (req, res) => {
  res.send('hello world')
})

if (isProduction) {
  console.log('isProduction');

  const assetsPath = '../app/dist'
  app.use(express.static(assetsPath));

  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: assetsPath });
  });
}

app.listen(port, async () => {
  console.log(`Server is listening on port ${port}...`);
});
