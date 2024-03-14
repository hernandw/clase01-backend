const express = require('express');


const app = express();
const port = 3001 

app.get('/', (req, res) => res.send('Hello World desde express!'));

app.get('/about', (req, res) => {
    
    res.send('About page!, ' + name + ' ' + suma);
})

app.get('/contact', (req, res) => res.json({ name: 'John', age: 30 }));

app.get('/product', (req, res) => res.send('Product page!'));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));