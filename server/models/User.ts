import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../dataBase';

class User extends Model {
  declare email: string;
  declare username: string;
  declare password: string;
  declare phone: string;
  declare role: 'player' | 'stadium';
}
User.init(
  {
    username: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    phone: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  },
);

export default User;
