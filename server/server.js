const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

// Use bodyParser
app.use(bodyParser.json());

// Config for only development
if (process.env.NODE_ENV === 'development') {
    app.use(cors())
    

    //Morgan give information about each request
    //Cors it's allow to deal with react for localhost:3000 without any problem
    app.use(morgan('dev'))
}






app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not founded"
    })
})

app.get('/', (req, res) => { res.send('Hello from Express!')});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});