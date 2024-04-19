const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/api/alive', (req, res) => {
    const response = {
        "message": "Hello World!!"
    }
    res.status(200).json(response);
});

const PORT = 1080;
app.listen(PORT, () => {
    console.log(`Servidor Mock está sendo executado na porta ${PORT}`);
});

