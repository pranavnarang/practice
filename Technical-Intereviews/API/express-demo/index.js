const Joi = require('Joi');
const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    {id:1, name:'course 1'},
    {id:2, name:'course 2'},
    {id:3, name:'course 3'}
]

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {

    const schema = {
        name: Joi.string().min(3).required()
    };

    let result = Joi.validate(req.body, schema);

    if (result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    let course = {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(course);
    res.send(course);
})

app.get('/api/courses/:id', (req, res) => {
    let course = null;

    courses.map( c => {
        if (c.id === parseInt(req.params.id)){
            course = c;
        }
    });

    if(!course){
        res.status(404).send(`The course with id ${req.params.id} was not found.`)
    } else {
        res.send(course);
    }
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});

const port = process.env.PORT || 3000 
app.listen(port, () => console.log(`Listening on port ${port}...`));
