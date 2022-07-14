import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface UserInstance extends Model {
    id: number;
    title: string;
    done: boolean;
}

export const User = sequelize.define<UserInstance>('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING,
        
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'todos',
    timestamps: false
});