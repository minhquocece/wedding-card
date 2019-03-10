// prod.js - production keys here!!!
module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: 'mongodb+srv://wedding-card-prod:wedding-card-pro@wedding-card-prod-q2ppm.mongodb.net/test?retryWrites=true',
	cookieKey: process.env.COOKIE_KEY
};