module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        CameraId: DataTypes.STRING,
        comment: DataTypes.TEXT,
        userId: DataTypes.STRING
    })

    return Comment
}