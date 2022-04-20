module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.INTEGER
        },
        length: {
            type: dataTypes.INTEGER
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        },
    
        created_at: {
            type: dataTypes.DATE
        },

        updated_at: { 
            type: dataTypes.DATE
        },

        deleted_at: {
            type: dataTypes.DATE
        },
    
    
    };
    let config = {
        tableName: 'movies',
        createdAt:'created_at',
        updatedAt:'updated_at',
        deletedAt:'deleted_at',
        paranoid: true
    };
    const Movie = sequelize.define(alias, cols, config)

    return Movie
}