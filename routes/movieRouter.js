// import controllers review, Movies
const movieController = require('../controllers/movieController.js')
const reviewController = require('../controllers/reviewController')


// router
const router = require('express').Router()


// use routers
router.post('/addMovie', movieController.addMovie)

router.get('/allMovies', movieController.getAllMovies)



// Review Url and Controller

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)

// get Movie Reviews
router.get('/getMovieReviews/:id', movieController.getMovieReviews)




// Movies router
router.get('/:id', movieController.getOneMovie)

router.put('/:id', movieController.updateMovie)

router.delete('/:id', movieController.deleteMovie)

module.exports = router