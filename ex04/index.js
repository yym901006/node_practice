const Sequelize = require("sequelize");
module.exports.initModel = async (sequelize) => {
  // ##BEGIN## 代码已加密

  const Product = sequelize.define("product", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: Sequelize.STRING,
  });

  Product.belongsTo(User, {
    constraints: true,
    onDelete: "CASCADE",
  });
  User.hasMany(Product);

  await User.sync({ force: true });

  await Product.sync({ force: true });

  // ##END##
  return { User, Product };
};
