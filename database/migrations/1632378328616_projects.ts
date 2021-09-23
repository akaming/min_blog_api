import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Projects extends BaseSchema {
  protected tableName = 'projects';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.string('title').notNullable();
      table.string('image_src').notNullable();
      table.text('content').notNullable();
      table.string('link');

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
