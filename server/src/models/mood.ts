
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

interface MoodAttributes {
    id: number;
    name: string;
    description?: string;
    spotifyCategory: string;
    createdAt?: Date;
    updatedAt?: Date;
    }

inerface MoodInstance extends Model<MoodAttributes>, MoodAttributes {}

const Mood = sequelize.define<MoodInstance>('Mood', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [1, 50],
    }
},
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 50],
        }
},
description: {
    type: DataTypes.STRING,
    allowNull: true 
    }
}
}, {
    tableName: 'moods',
    timestamps: true,
});

export default Mood;
