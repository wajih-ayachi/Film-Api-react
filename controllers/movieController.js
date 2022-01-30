const db = require('../models')




// create main Model
const Movie = db.movies
const Review = db.reviews

// main work

// 1. create product

const addMovie = async (req, res) => {

    let info = {
        titre: req.body.titre,
        synopsis: req.body.synopsis,
        realisateur: req.body.realisateur,
        acteurs:req.body.acteurs
    }

    const product = await Movie.create(info)
    res.status(200).send(product)
    console.log(product)

}



// 2. get all products

const getAllMovies = async (req, res) => {

    let products = await Movie.findAll({})
    res.status(200).send(products)

}

// 3. get single product

const getOneMovie = async (req, res) => {

    let id = req.params.id
    let product = await Movie.findOne({ where: { id: id }})
    res.status(200).send(product)

}

// 4. update Product

const updateMovie = async (req, res) => {

    let id = req.params.id

    const product = await Movie.update(req.body, { where: { id: id }})

    res.status(200).send(product)
   

}

// 5. delete product by id

const deleteMovie = async (req, res) => {

    let id = req.params.id
    
    await Movie.destroy({ where: { id: id }} )

    res.status(200).send('Product is deleted !')

}



// 7. connect one to many relation Product and Reviews

const getMovieReviews =  async (req, res) => {

    const id = req.params.id

    const data = await Movie.findOne({
        include: [{
            model: Review,
            as: 'review'
        }],
        where: { id: id }
    })

    res.status(200).send(data)

}





module.exports = {
    addMovie,
    getAllMovies,
    getOneMovie,
    updateMovie,
    deleteMovie,
    getMovieReviews,
    
    
}