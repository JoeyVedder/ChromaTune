
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { UserMood } from './userMood';

@Table({
    tableName: 'moods',
    timestamps: true
})

export class userMood extends Model {
    @Column ({
        type: DataType.Integer,
        primartKey: true,
        autoIncrement: true
})
    id!: number;

    @Column({
        type: DataType.Integer,
        allowNull: false
    })
    userId!: number;

    //Reference to Mood Model
    @ForeignKey(() => Mood)
    @Column({
        type: DataType.Integer,
        allowNull: false
    })
    moodId!: number;

    // Establish relationship with mood
    @BelongsTo(() => Mood)
    mood!: Mood;

    // Store selected playlist ID from Spotify
    @Column({
        type: DataType.String,
        allowNull: true
    })
    playlistId?: string;
}

    export ype UserMoodAttributes = {
        id: number;
        userId: number;
        moodId: number;
        playlistId?: string;
        createdAT?: Date;
        updatedAt?: Date;
    }
    export type UserMoodCreationAttributes = Omit<UserMoodAttributes, 'id'>;