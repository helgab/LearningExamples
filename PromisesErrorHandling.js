function get(url){
    return new Promise(function(resolve, reject){
        let req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            if(req.status === 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText))
            }
        };

        req.onerror = function() {
            reject(Error('Network error'));
        }

        req.send();
    });
}

get('https://api.github.com/users').then(function(response) {
    console.log('Successful request');
}, function(error) {
    console.log('Unsuccessful request');
});

get('https://api.github.com/users').then(function(response) {
    console.log('Success!')
}).catch(function(error) {
    console.log('Failed!');
});

function getJSON(url) {
    return get(url).then(JSON.parse).catch(function(error) {
        console.log(`Error for url ${url}, ${error}`);
        throw error;
    })
}