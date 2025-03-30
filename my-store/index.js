const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/productos', (req, res) => {
  res.json({
    name: 'Producto1',
    precio: '1000'
  });
})

app.listen(port, ()  => {
  console.log('Mi port ' + port);
})
