import { Sequelize } from "sequelize";

const db = new Sequelize('crud-db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db