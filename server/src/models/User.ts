import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

// Define attributes interface
interface UserAttributes {
    id?: number;
    username: string;
    email: string;
    password: string;
    // Optional: other user-specific fields you might want
    lastLoginDate?: Date;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

// Define model instance interface
interface UserInstance extends Model<UserAttributes>, UserAttributes {}

const User = sequelize.define<UserInstance>('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 30] // username must be between 3 and 30 characters
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 100] // password must be at least 6 characters
        }
    },
    lastLoginDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: true, // This will add createdAt and updatedAt fields
    tableName: 'users' // This will ensure the table name is lowercase
});

export default User;