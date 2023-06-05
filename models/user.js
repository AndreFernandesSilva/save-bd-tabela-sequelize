const Sequelize = require('sequelize')
const db = require('./db')

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

;(async () => {
    await db.sync({force:true})
 })()
//Criar Tabela
//User.sync()

//Verifica se há alguma dierença na tabela e realiza a alteração
//User.sync({ alter: true })

module.exports = User