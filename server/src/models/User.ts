
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

class User extends Model {
  username: any;
    email: any;
  password() {
      throw new Error('Method not implemented.');
  }
  id!: number;
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;

