const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
})
app.get('/about', (req, res) => {
    res.render('about.ejs');
})
app.get('/projects', (req, res) => {
    res.render('projects.ejs');
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000");
})