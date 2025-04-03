// AutoIncrement, PrimaryKey, AllowNull, Validate, IsEmail

import { table } from "console";
import { Table, Column, Model, DataType } from "sequelize-typescript";


@Table({
    tableName: 'users',
    timestamps: false,
    defaultScope: {
        attributes: {
            exclude: ['password']
        }
    
    }

})

export class User extends Model {
    @Column({
      type: DataType.STRING(50),
      allowNull: false
    })
    names!: string;
  
    @Column({
      type: DataType.STRING(50),
      allowNull: false
    })
    lastnames!: string;
  
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        min: 18
      }
    })
    age!: number;
    @Column({
        type: DataType.ENUM("Masculino", "Femenino"),
        allowNull: false
      })
      gender!: string;
    
      @Column({
        type: DataType.TEXT,
        allowNull: false
      })
      password!: string;

      @Column({
        type: DataType.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      })
      email!: string;

  }