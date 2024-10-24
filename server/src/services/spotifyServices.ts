
import SpotifyWebApi from "spotify-web-api-node";
import dotenv from "dotenv";

dotenv.config();

const SpotifyAPI = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI
});

export const getPlaylistByMood = async (mood: string) => {
    try {
        const data = await SpotifyAPI.clientCredentialsGrant();
        SpotifyAPI.setAccessToken(data.body["access_token"]);

        const searchResult = await SpotifyAPI.searchPlaylists(mood, 
            { 
                limit: 5,
                offset: 0
            });
        
        return searchResult.body.playlists?.items || [];
    } catch (error) {
        console.error(`Error in getPlaylistByMood: ${error}`);
        return [];
        // take a look at this error and see if you can handle it better
    }
};

