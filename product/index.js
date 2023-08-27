const express = require('express');
const cors = require('cors');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());
app.get('/', (req, res) => {
    res.send({
        'products': [
            'Shirt',
            'T-shirt',
            'Dress'
        ]
    })
})

app.listen(PORT, HOST)

console.log(`Server running on ${PORT} an ${HOST}`)