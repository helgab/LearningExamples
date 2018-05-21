let promise = new Promise(function(resolve, reject) {
    resolve(1);
})

promise.then(function(val){
    console.log(val); // 1
    return val+2;
}).then(function(val){
    console.log(val); // 3
})

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

get('story.json').then(function(response) {
    return JSON.parse(response);
}).then(function(response) {
    console.log(`JSON response ${response}`);
})

// shortcut

get('story.json').then(JSON.parse).then(function(response) {
    console.log(`JSON response ${response}`);
})

//creating a function to get JSON

function getJSON(url) {
    return get('story.json').then(JSON.parse);
}