
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Mood from './mood.js';

interface UserMoodAttributes {
    id?: number;
    userId: number;
    moodId: number;
    spotifyPlaylistId?: string;
    timestamp?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

interface UserMoodInstance extends Model<UserMoodAttributes>, UserMoodAttributes {}

const UserMood = sequelize.define<UserMoodInstance>('UserMood', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        }
    },
    moodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'moods',
            key: 'id',
        }

    },
    spotifyPlaylistId: {        
        type: DataTypes.STRING,
        allowNull: true,        
    },
    
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
}, {
    tableName: 'user_moods',
    timestamps: true,
});

export default UserMood;