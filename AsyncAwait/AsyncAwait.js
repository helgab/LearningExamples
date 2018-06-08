var request = require('request');

function getQuote() {
    var quote;

    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
        quote = body;
    });

    return quote;
}

function main() {
    var quote = getQuote();
    console.log(quote);
}

main();

// rewrite with Async function
function getQuote() {
    return new Promise(function(resolve, reject) {
        request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
            quote = body;

            resolve(body);
        });
    });
}

async function main() {
    var quote = await getQuote();
    console.log(quote);
}

main();

// with error handling

function getQuote() {
    return new Promise(function(resolve, reject) {
        request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
        
        if (error) return reject(error)
        resolve(body);
        });
    });
}

async function main() {
    try {
        var quote = await getQuote();
        console.log(quote);
    }
    catch (error) {
        console.log(error)
    }
}

main(); 
console.log('Rob Swanson once said');