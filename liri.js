                    
require("dotenv").config();

//project vars

var keyn = require("./keys.js");
var fs = require("fs");
var Spotify = require('node -spotify-api');
var spotify = new Spotify(keys.spotify)
var movieName = process.argv[3];
var liriReturn = process.argv[2];
var twitter = require('twitter');
var client = new twitter(keys.twitter);

//switches for various commands
switch(liriReturn) {
   case "my-tweets":
       myTweets();
       break;

case "spotify-this-song":
     spotifyThisSong();
     break;

case "movie-this":
    movieThis();
    break;

case "do what it says"  :
    dowhatitSays();
    break;


// instructions for first-time user lurking around on the command line//
default: console.log("\n" + "type any command after 'node liri.js': " + "\n" +
   "my-tweets" + "\n" +
   "spotify-this-song 'any song title' " + "\n" +
   "movie-this 'any-movie-title' " + "\n" +
   "do-what-it-says" + "\n" +
   "Use quotes for multiword titles!");

};

//Command 1 my-tweets
//errors who are from twitter are not defined or twitter is not a constructor//
function myTweets() {
    var params = { screen_name: 'WelcomeToParadise'};
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
           for (var i = 0; i < tweets.length; i++) {

            console.log(tweets[i].text);
           };
        } else {
            console.log("error: " + err);
             return;
        }
    });
}

//command 3 spotify this song
// i need artist, song name, preview, album
function spotifyThisSong(trackName) {
    var trackName = process.argv[3];
    if (!trackName) {
        trackName = "The sign";
    };
    songRequest = trackName;
    spotify.search({
        type: "track",
        query: SongRequest
    },

    function 