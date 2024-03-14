const express = require('express');


const app = express();
const port = 3005 


app.get('/', (req, res) => res.send('Hello World desde express!'));

app.get('/about', (req, res) => {
    
    res.send('About page!');


})

app.get('toctoc', (req, res) => res.send('<h1>¿Quien es?</h1>'));

app.get('contact', (req, res) => res.json({ name: 'John', age: 30 }));

app.get('product', (req, res) => res.send('Product page!'));
app.get("/product/:id", (req, res) =>
  res.send("Product " + req.params.id + " page!")
);

app.put('/update', (req, res) => res.send('ruta put'));
app.get('/registro', (req, res) => res.send('ruta registro desde get'));
app.post('/registro', (req, res) => res.send('ruta registro desde post'));

app.get('*', (req, res) => res.send('<h1>Esta ruta no existe</h1>'));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));