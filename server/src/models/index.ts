import User from './User.js';
import Mood from './mood.js';
import moodRoutes from '../routes/moodRoutes.js';

// Later you can add other models here like:
// import Playlist from './Playlist.js';
// import UserMood from './UserMood.js';

// You can set up associations here later
// For example:
// User.hasMany(Playlist);
// Playlist.belongsTo(User);

app.use(`/api/mood`, moodRoutes);

export {
    User,
    Mood
};