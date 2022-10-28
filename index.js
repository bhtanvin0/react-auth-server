const express = require ('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const courses = require('./data/courses.json') 

app.get('/', (req, res) => {
    res.send('News API Running on this is time');
});

app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const ids =parseFloat(id)
    const selecteCourses = courses.find( c => c.id === ids);
    res.send(selecteCourses);
})


app.listen(port, () => {
    console.log('Educational Website Server runinng on port', port);
})


module.exports =app;