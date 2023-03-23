module.exports = (sequelize, DataTypes) =>{
    const Users = sequelize.define("Users", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eMail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passWord: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateOfBirth: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Users;
    }