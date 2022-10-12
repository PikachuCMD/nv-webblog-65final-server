module.exports = (sequelize, DataTypes) => {
    const Camera = sequelize.define('Camera', {
        title: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        pictures: DataTypes.STRING,
        content: DataTypes.TEXT,
        category: DataTypes.STRING,
        status: DataTypes.STRING,
        prices: DataTypes.STRING
    })
    return Camera
}