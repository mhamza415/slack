"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class workspace_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Workspace }) {
      this.belongsTo(Workspace, { foreignKey: "id" });
      this.belongsTo(User, { foreignKey: "id" });
    }
  }
  workspace_user.init(
    {
      w_id: DataTypes.STRING,
      u_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "workspace_user",
      modelName: "workspace_user",
    }
  );
  return workspace_user;
};
