/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Nikita Smetanko 300314907
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [];

// Objects with quote, source, citation, and year properties
var quote1 = {quote: "Do. Or do not. There is no try.", source: "Yoda", citation: "Star Wars Episode V: The Empire Strikes Back", year: "1980"};
var quote2 = {quote: "It's a trap!", source: "Admiral Ackbar", citation: "Star Wars Episode VI: Return of the Jedi", year: "1983"};
var quote3 = {quote: "I find your lack of faith disturbing.", source: "Darth Vader", citation: "Star Wars: Episode IV – A New Hope", year: "1977"};
var quote4 = {quote: "Hello There", source: "Obi-Wan Kenobi", citation: "Star Wars Episode III: Revenge of the Sith", year: "2005"};
var quote5 = {quote: "May the Force be with you.", source: "basically everyone"};

// Pushing objects into the quotes array
quotes.push(quote1, quote2, quote3, quote4, quote5);

// Test to see if the quotes array was properly populated with objects
// console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // A variable that holds random number from 0 to the total length of the quotes array
  var randNumber = Math.floor(Math.random() * quotes.length);

  // A variable that holds random quote that was pulled from the quotes array based on the random number
  var randQuote = quotes[randNumber];

  // Return the random quote
  return randQuote;
}

// Test to see if the getRandomQuote() function works properly
// console.log(getRandomQuote());

/***
 * `printQuote` function
***/
function printQuote() {
  // A variable to hold the random quote that was returned from the getRandomQuote() function
  let randomQuote = getRandomQuote();

  // Output string with quote and quote's source in it
  let outputHTML = "<p class='source'>" + randomQuote.quote + "</p>" + "<p class='source'>" + randomQuote.source;

  // Check to see if the quote contains citation property
  // If it does => add the citation to the output string
  if(randomQuote.citation !== undefined) {
    outputHTML += "<span class='citation'>" + randomQuote.citation + "</span>";
  }

  // Check to see if the quote contains year property
  // If it does => add the year to the output string
  if(randomQuote.year !== undefined) {
    outputHTML += "<span class='year'>" + randomQuote.year + "</span>";
  }

  // Finish the output string with the closing "p" tag
  outputHTML += "</p>";

  // Set the innerHTML of the div with the 'quote-box' id to the output string
  document.getElementById('quote-box').innerHTML = outputHTML;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);