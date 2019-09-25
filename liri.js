require('dotenv').config();
//project vars

var keys = require('./keys.js');
var fs = require('fs');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var movieName = process.argv[3];
var liriReturn = process.argv[2];
var twitter = require('twitter');
var client = new twitter(keys.client);
var axios = require('axios');

console.log('argv', process.argv);

//switches for various commands
switch (liriReturn) {
    case 'spotify-this-song':
        //getSpotify(userSearch);
        spotifyThisSong(process.argv[3]);
        break;

    case 'concert-this':
        concertThis();
        break;

    case 'movie-this':
        //getOMDB(userSearch);
        movieThis(process.argv[3]);
        break;
   
    case 'do what it says':
        getRandom();
        break;

    // instructions for first-time user lurking around on the command line//
    default:
        console.log(
            '\n' +
                "type any command after 'node liri.js': " +
                '\n' +
                "spotify-this-song 'any song title' " +
                '\n' +
                "concert-this 'any-concert' " +
                '\n' +
                "movie-this 'any-movie-title' " +
                '\n' +
                'do-what-it-says' +
                '\n' +
                'Use quotes for multiword titles!'
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
        trackName = 'The sign';
    }
    //songRequest = trackName;

    return spotify.search(
        {
            type: 'track',
            query: trackName,
        },
        function(err, data) {
            if (!err) {
                var trackInfo = data.tracks.items;
                for (var i = 0; i < 5; i++) {
                    if (trackInfo[i] != undefined) {
                        var spotifyResults =
                            'Artists: ' +
                            trackInfo[i].artists[0].name +
                            '\n' +
                            'Song: ' +
                            trackInfo[i].name +
                            '\n' +
                            'Preview URL: ' +
                            trackInfo[i].preview_url +
                            '\n';
                        'Album: ' + trackInfo[i].album.name + '\n';

                        console.log(spotifyResults);
                        console.log('');
                    }
                }
            } else {
                console.log('error: ' + err);
                return;
            }
        }
    );
}

// command 2 concert this
//choose a concert of your choice by typing on the command line node liri.js concert this

function concertThis() {
    var bandSearch =
        'https://rest.bandsintown.com/artists/' +
        BandName +
        '/events?app_id=codingbootcamp';

    request(bandSearch, function(error, response, body) {
        console.log(JSON.parse(body));
    });
}

//command 3 movie this
// run a movie to the OMDB API with the movie specified
function movieThis() {
    console.log("movie-this")
    // using movieName from var list at top
    var queryUrl =
        'http://www.omdbapi.com/?t=' +
        movieName +
        '&y=&plot=short&apikey=trilogy';
//  console.log("queryUrl", queryUrl)
axios.get(queryUrl).then( (response ) => {

    const { Title, Rated, Year, Released, imdbRating  } = response.data
    console.log("Title", Title)
    console.log("Rated", Rated)
    console.log("Year", Year)
    console.log("Released", Released )
    console.log("imdbRating", imdbRating)
    // console.log(response))
})
    //  {
    //     console.log("axios.get",{error, response, body})
    //     // If the request is successful
    //     if (!error && response.statusCode === 200) {
    //         // pull requested data in readable format
    //         var myMovieData = JSON.parse(body);
    //         var queryUrlResults =
    //             'Title: ' +
    //             myMovieData.Title +
    //             '\n' +
    //             'Year: ' +
    //             myMovieData.Year +
    //             '\n' +
    //             'IMDB Rating: ' +
    //             myMovieData.Ratings[0].Value +
    //             '\n' +
    //             'Rotten Tomatoes Rating: ' +
        //         myMovieData.Ratings[1].Value +
        //         '\n' +
        //         'Origin Country: ' +
        //         myMovieData.Country +
        //         '\n' +
        //         'Language: ' +
        //         myMovieData.Language +
        //         '\n' +
        //         'Plot: ' +
        //         myMovieData.Plot +
        //         '\n' +
        //         'Actors' +
        //         myMovieData.Actors +
        //         '\n';

        //     console.log(queryUrlResults);
        // } else {
        //     console.log('error: ' + err);
        //     return;
        // }
    // });
}