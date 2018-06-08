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
    console.log(`Successful request. ${response}`);
}, function(error) {
    console.log(`Failed request. ${error}`);
})