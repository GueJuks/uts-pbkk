import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Product = db.define('product', {
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    tanggal: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Product;

// Membuat function untuk membuat table product jika tidak terdapat pda database
(async()=>{
    await db.sync();
})();