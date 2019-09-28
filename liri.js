require("dotenv").config();
//project vars

var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var movieName = process.argv[3];
var bandSearch = process.argv[3];
var liriReturn = process.argv[2];
var twitter = require("twitter");
var client = new twitter(keys.client);
var axios = require("axios");
console.log("argv", process.argv);

//switches for various commands
switch (liriReturn) {
	case "spotify-this-song":
		//getSpotify(userSearch);
		spotifyThisSong(process.argv[3]);
		break;

	case "concert-this":
		concertThis(process.argv[3]);
		break;

	case "movie-this":
		//getOMDB(userSearch);
		movieThis(process.argv[3]);
		break;

		break;

	case "do what it says":
		getRandom();
		break;

	// instructions for first-time user lurking around on the command line//
	default:
		console.log(
			"\n" +
				"type any command after 'node liri.js': " +
				"\n" +
				"spotify-this-song 'any song title' " +
				"\n" +
				"concert-this 'any-concert' " +
				"\n" +
				"movie-this 'any-movie-title' " +
				"\n" +
				"do-what-it-says" +
				"\n" +
				"Use quotes for multiword titles!"
		);
}

//Command 1 my-tweets
//errors who are from twitter are not defined or twitter is not a constructor//
/*function myTweets() {
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
*/

//command 1 spotify this song
// i need artist, song name, preview, album
function spotifyThisSong(trackName) {
	//var trackName = process.argv[3];
	if (!trackName) {
		trackName = "The sign";
	}
	//songRequest = trackName;

	return spotify.search(
		{
			type: "track",
			query: trackName
		},
		function(err, data) {
			if (!err) {
				var trackInfo = data.tracks.items;
				for (var i = 0; i < 5; i++) {
					if (trackInfo[i] != undefined) {
						var spotifyResults =
							"Artists: " +
							trackInfo[i].artists[0].name +
							"\n" +
							"Song: " +
							trackInfo[i].name +
							"\n" +
							"Preview URL: " +
							trackInfo[i].preview_url +
							"\n";
						"Album: " + trackInfo[i].album.name + "\n";

						console.log(spotifyResults);
						console.log("");
					}
				}
			} else {
				console.log("error: " + err);
				return;
			}
		}
	);
}

// command 2 concert this
//choose a concert of your choice by typing on the command line node liri.js concert this

function concertThis(bandName) {
	console.log("concert-this");
	var queryUrl = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codecademy";
	axios.get(queryUrl).then((response) => {
		// console.log('response.data', response.data);

		const bandNames = response.data.map(function(band) {
			return band.lineup.join(", ");
		});
		console.log("bandNames", bandNames);

		//console.log('Name', Name);
		//console.log('City', City);
		// console.log('Date', Date);
		// console.log('Country', Country);

		//command 3 movie this
		// run a movie to the OMDB API with the movie specified
	});
}
function movieThis(movieName) {
	console.log("movie-this");
	// using movieName from var list at top
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
	//  console.log("queryUrl", queryUrl)
	axios.get(queryUrl).then((response) => {
		const { Title, Rated, Year, Released, imdbRating, Country, Language, Plot, Actors } = response.data;
		console.log("Title", Title);
		console.log("Rated", Rated);
		console.log("Year", Year);
		console.log("Released", Released);
		console.log("imdbRating", imdbRating);
		console.log("Country", Country);
		console.log("Language", Language);
		console.log("Plot", Plot);
		console.log("Actors", Actors);
		// console.log(response))
	});
}
