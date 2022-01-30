module.exports = (sequelize, DataTypes) => {

    const Movie = sequelize.define("movie", {
      
        titre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        synopsis: {
            type: DataTypes.TEXT
        },
        realisateur: {
            type: DataTypes.STRING
        },
        acteurs: {
            type: DataTypes.TEXT
        },
        
    
    })

    return Movie

}