var express = require('express');
var router = express.Router();
var movieList = require('../controllers/movies/index.js')
var addMovie = require('../controllers/movies/new.js')

/* GET  to movies homepage. */
router.get('/', movieList.movies);

router.get('/new', addMovie.movies);

router.post('/add', addMovie.add);

module.exports = router;