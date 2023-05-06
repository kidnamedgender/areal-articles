'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Seqialize) {
    await queryInterface.createTable('articles', {
      id: { type: Seqialize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: Seqialize.DataTypes.STRING, allowNull: false },
      text: { type: Seqialize.DataTypes.TEXT, allowNull: false },
      updatedAt: Seqialize.DataTypes.DATE,
      createdAt: Seqialize.DataTypes.DATE,
    });

    await queryInterface.createTable('comments', {
      id: { type: Seqialize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      text: { type: Seqialize.DataTypes.TEXT, allowNull: false },
      updatedAt: Seqialize.DataTypes.DATE,
      createdAt: Seqialize.DataTypes.DATE,
      articleId: {
        type: Seqialize.DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'articles',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('articles');
  },
};
