import {Model, Table, PrimaryKey, Column} from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: 'products'
})
export default class ProductModel extends Model {
  
  @PrimaryKey
  @Column
  declare id: string;

  @Column({allowNull: false})
  declare name: string

  @Column({allowNull: false})
  declare price: number
}