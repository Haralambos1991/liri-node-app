
var keys = require("./keys");
require("dotenv").config();
console.log(keys);


var keys = require("./keys.js");
//Sets up the user input for the function i and the content i seek.
var userInput = process.argv[2];
var ask = process.argv[3];
// With this code i can literally find out where my favorite concert is playing
var bandsInTown = function(bandInput) {
    var Events = require('bandsintown-events');
    if (bandInput === undefined) {
        bandInput = "Error Occurence: ";
    }
    request ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function(error){
        if(error) {
            console.log("Error Occurence: " + error);
        } else {
            for(var i = 0; i < Events.length; i++){
                console.log("City: " + Events[i].venue.city);
                console.log("Venue: " + Events[i].venue.name);
                console.log("Date: " + Events[i].datetime);
            

//This function, in theory, would have allowed a user to find song info.
function spotify() {

    var spotify = require('node-spotify-api');
 
    var spotify = new Spotify(keys.spotify)
 
    spotify.search({ type: 'track', query: value, limit: 1 }, function(err, data) {
    // spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        
        // returning artist name
        console.log(data.tracks.items[0].artists[0].name);

        // returning song's name 
        console.log(data.tracks.items[0].name);
        
        // returning preview link of the song from Spotify
        console.log(data.tracks.items[0].preview_url);
        
        // returning album that the song is from
        console.log(data.tracks.items[0].album.name);        
        });
    };

function movie() {

    // var omdb = require('omdb');
 
    var request = require('request');
    request('http://www.omdbapi.com/?apikey=trilogy&plot=full&tomatoes=true&r=json&t='+ value, function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    const obj = JSON.parse(body);

    console.log(obj.Title);
    console.log(obj.Year);
    console.log(obj.imdbRating);
    console.log(obj.tomatoRating);
    console.log(obj.Country);
    console.log(obj.Language);
    console.log(obj.Plot);
    console.log(obj.Actors);
 
    });
 
    if(!movie) {
        return console.log('Movie not found!');
    }
    
};

function doIt() {

    // fs is a core Node package for reading and writing files
    var fs = require("fs");

    
    fs.readFile("random.txt", "utf8", function(error, data) {

      // If the code experiences any errors it will log the error to the console.
      if (error) {
        return console.log(error);
      }

      // We will then print the contents of data
        //console.log(data);

      // Then split it by commas (to make it more readable)
      var dataArr = data.split(",");

      // We will then re-display the content as an array for later use.
      console.log(dataArr[0]);
      console.log(dataArr[1]);

    //   cannot get the values of dataArr to run in commandline
      var action = process.argv[2] = dataArr[0];
      var value = process.argv[3] = dataArr[1];

    });
}

=======
var keys = require("./keys");
require("dotenv").config();
console.log(keys);


var keys = require("./keys.js");
//Sets up the user input for the function i and the content i seek.
var userInput = process.argv[2];
var ask = process.argv[3];
// With this code i can literally find out where my favorite concert is playing
var bandsInTown = function(bandInput) {
    var Events = require('bandsintown-events');
    if (bandInput === undefined) {
        bandInput = "Error Occurence: ";
    }
    request ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function(error){
        if(error) {
            console.log("Error Occurence: " + error);
        } else {
            for(var i = 0; i < Events.length; i++){
                console.log("City: " + Events[i].venue.city);
                console.log("Venue: " + Events[i].venue.name);
                console.log("Date: " + Events[i].datetime);
            

//This function, in theory, would have allowed a user to find song info.
function spotify() {

    var spotify = require('node-spotify-api');
 
    var spotify = new Spotify(keys.spotify)
 
    spotify.search({ type: 'track', query: value, limit: 1 }, function(err, data) {
    // spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        
        // returning artist name
        console.log(data.tracks.items[0].artists[0].name);

        // returning song's name 
        console.log(data.tracks.items[0].name);
        
        // returning preview link of the song from Spotify
        console.log(data.tracks.items[0].preview_url);
        
        // returning album that the song is from
        console.log(data.tracks.items[0].album.name);        
        });
    };

function movie() {

    // var omdb = require('omdb');
 
    var request = require('request');
    request('http://www.omdbapi.com/?apikey=trilogy&plot=full&tomatoes=true&r=json&t='+ value, function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    const obj = JSON.parse(body);

    console.log(obj.Title);
    console.log(obj.Year);
    console.log(obj.imdbRating);
    console.log(obj.tomatoRating);
    console.log(obj.Country);
    console.log(obj.Language);
    console.log(obj.Plot);
    console.log(obj.Actors);
 
    });
 
    if(!movie) {
        return console.log('Movie not found!');
    }
    
};

function doIt() {

    // fs is a core Node package for reading and writing files
    var fs = require("fs");

    
    fs.readFile("random.txt", "utf8", function(error, data) {

      // If the code experiences any errors it will log the error to the console.
      if (error) {
        return console.log(error);
      }

      // We will then print the contents of data
        //console.log(data);

      // Then split it by commas (to make it more readable)
      var dataArr = data.split(",");

      // We will then re-display the content as an array for later use.
      console.log(dataArr[0]);
      console.log(dataArr[1]);

    //   cannot get the values of dataArr to run in commandline
      var action = process.argv[2] = dataArr[0];
      var value = process.argv[3] = dataArr[1];

    });
}
            }
