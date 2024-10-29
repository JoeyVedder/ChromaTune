
import SpotifyWebApi from 'spotify-web-api-node';
import dotenv from 'dotenv';

dotenv.config();

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI
});

const moodSearchTerms = {
    'Happy': 'happy upbeat cheerful',
    'Sad': 'sad melancholy emotional',
    'Angry': 'angry intense powerful',
    'Energetic': 'energetic workout upbeat',
    'Tired': 'relaxing chill sleep'
};

const refreshAccessToken = async () => {
    try {
        const data = await spotifyApi.clientCredentialsGrant();
        spotifyApi.setAccessToken(data.body['access_token']);
        return true;
    } catch (error) {
        console.error('Error refreshing access token:', error);
        return false;
    }
};

export const getPlaylistsByMood = async (mood: string) => {
    try {

        await refreshAccessToken();

        const searchTerm = moodSearchTerms[mood as keyof typeof moodSearchTerms] || mood;
        const searchResults = await spotifyApi.searchPlaylists(searchTerm, {
            limit: 10,
            offset: 0
        });

        return searchResults.body.playlists?.items.map(playlist => ({
            id: playlist.id,
            name: playlist.name,
            description: playlist.description,
            imageUrl: playlist.images[0]?.url,
            tracksTotal: playlist.tracks.total,
            spotifyUrl: playlist.external_urls.spotify
        }));

    } catch (error) {
        console.error('Error getting playlists:', error);
        throw error;
    }
};

export const getPlaylistDetails = async (playlistId: string) => {
    try {
        await refreshAccessToken();

        const playlist = await spotifyApi.getPlaylist(playlistId);

        return {
            id: playlist.body.id,
            name: playlist.body.name,
            description: playlist.body.description,
            imageUrl: playlist.body.images[0]?.url,
            tracks: playlist.body.tracks.items.map(item => ({
                id: item.track?.id,
                name: item.track?.name,
                artist: item.track?.artists[0]?.name,
                album: item.track?.album?.name,
                duration: item.track?.duration_ms,
                previewUrl: item.track?.preview_url
            }))
        };
    } catch (error) {
        console.error('Error getting playlist details:', error);
        throw error;
    }
};

export default spotifyApi;
