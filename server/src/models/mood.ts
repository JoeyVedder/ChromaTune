import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

class UserMood extends Model {
    public spotifyPlaylistId: string | undefined; 
    name: any;
}

UserMood.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        moodId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        spotifyPlaylistId: { 
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
    },
    {
        sequelize,
        modelName: 'UserMood',
        tableName: 'user_moods'
    }
);

export default UserMood;