const express = require ('express')
const app = express();
const cors = require('cors');
const port = process.env.Port || 5000;

app.use(cors())

const courses = require('./data/courses.json') 

app.get('/', (req, res) => {
    res.send('News API Running on this is time');
});

app.get('/courses-categories', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log('Educational Website Server runinng on port', port);
})


module.exports =app;