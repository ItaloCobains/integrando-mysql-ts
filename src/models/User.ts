import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UserInstace extends Model {
    id: number;
    name: string;
    age: number;
}

export const User = sequelize.define<UserInstace>("User", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.STRING,
        defaultValue: 18
    },
},{
    tableName: "users",
    timestamps: false,
});