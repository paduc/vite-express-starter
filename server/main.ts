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
  // let files = fs.readdirSync(assetsPath)
  // for(const file of files){
  //   console.log(assetsPath, file)
  // }

  let files = fs.readdirSync('./')
  for(const file of files){
    console.log('./' ,file)
  }

  files = fs.readdirSync('../')
  for(const file of files){
    console.log('../' ,file)
  }
  
  files = fs.readdirSync('../app')
  for(const file of files){
    console.log('../app' ,file)
  }
  app.use(express.static(assetsPath));

  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: assetsPath });
  });
}

app.listen(port, async () => {
  console.log(`Server is listening on port ${port}...`);
});
