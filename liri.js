                    
require("dotenv").config();

//project vars

var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node -spotify-api');
var spotify = new Spotify(keys.spotify);
var movieName = process.argv[3]
var liriReturn = process.argv[2]
var twitter = require('twitter');
var axios = require("axios");



//switches for various commands 
switch(LiriReturn) {
   case "spotify-this-song":
       getSpotify(userSearch);
       break;

case "concert-this":
     getBandsInTown();
     break;

case "movie-this":
    getOMDB(userSearch);
    break;

case "do what it says"  :
    getRandom();
    break;


// instructions for first-time user lurking around on the command line//
default: console.log("\n" + "type any command after 'node liri.js': " + "\n" +
   "spotify-this-song 'any song title' " + "\n" +
   "concert-this 'any-concert' "+ "\n" +
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

    function (err, data) {
        if (!err) {
            var trackinfo = data.tracks.items;
            for (var i = 0; i < 5; i ++) { 
                if (trackInfo[i] != undefined) {
                    var spotifyResults = 
                        "Artists: " + trackingInfo[i].artists[0].name + "\n" +
                        "Song: " + trackInfo[i].name + "\n" +
                        "Preview URL: " + trackInfo[i].preview_url + "\n"
                        "Album: " + trackInfo[i].album.name + "\n"

                        console.log(spotifyResults);
                        console.log('');
                };
            };
        } else {
            console.log("error: " + err)
            return;
        }
    });
};
//command 3 movie this
// run a movie to the OMDB API with the movie specified
function movieThis() {

// using movieName from var list at top
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

request(queryUrl, function (error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

    // pull requested data in readable format
    var myMovieData = JSON.parse(body);
    var queryUrlResults =
        "Title: " + myMovieData.Title + "\n" +
        "Year: " + myMovieData.Year + "\n" +
        "IMDB Rating: " + myMovieData.Ratings[0].Value + "\n" +
        "Rotten Tomatoes Rating: " + myMovieData.Ratings[1].Value + "\n" +
        "Origin Country: " + myMovieData.Country + "\n" +
        "Language: " + myMovieData.Language + "\n"  +
        "Plot: " + myMovieData.Plot + "\n" +
        "Actors" + myMovieData.Actors + "\n" 

        console.log(queryUrlResults);

    } else {
        console.log("error: " + err)
        return;
    }
});

}




