module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define(
    'user',
    {
      id: {
        type: DataTypes.BIGINT(),
        allowNull: false,
        primaryKey: true,
        field: 'id',
      },
      nickname: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'nickname',
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'password',
      },
      avatar: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'avatar',
      },
      mobile: {
        type: DataTypes.STRING(13),
        allowNull: false,
        field: 'mobile',
      },
      signature: DataTypes.STRING(255),
      background_img: DataTypes.STRING(255),
      gender: {
        type: DataTypes.INTEGER(1),
        default: 0
      },
      status: {
        type: DataTypes.INTEGER(255),
        allowNull: false,
        default: 0,
        field: 'status',
      },
      created_time: {
        type: DataTypes.INTEGER,
        field: 'create_time',
      },
      updated_time:{
        type: DataTypes.INTEGER,
        field: 'update_time',
      }
    },
    {
      tableName: 'user',
      timestamps: false
    }
  );

  return Model;
};
