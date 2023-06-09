import { sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

const Comment = sequelize.define('comment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.TEXT, allowNull: false },
});

export { Comment };
