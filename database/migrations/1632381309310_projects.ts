import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Projects extends BaseSchema {
  protected tableName = 'projects'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('user_id').after('id').unsigned().references('id').inTable('users');
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('user_id');
      table.dropColumn('user_id');
    })
  }
}
