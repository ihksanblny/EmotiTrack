//Eksport Variabel dari .env

const config = {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
    port: process.env.PORT || 5000
}

module.exports = config;