import { sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

import { Comment } from './Comment.js';

const Article = sequelize.define('article', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  text: { type: DataTypes.TEXT, allowNull: false },
});

Article.hasMany(Comment, { onDelete: 'cascade', hooks: true });
Comment.belongsTo(Article);

export { Article };
