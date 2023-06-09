import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class Message extends Model {
  declare message: string;
  declare UserId: number;
  id: unknown;
}

Message.init(
  {
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Message',
    tableName: 'messages',
    timestamps: true,
  },
);

export default Message;
