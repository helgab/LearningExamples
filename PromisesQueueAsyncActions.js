const apiKey = 'AIzaSyD8lP1HFEBiLDrbw19-9ayDiTrD2tEJT9c'

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

get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Paris&key=${apiKey}`)
.then(function(response){
    const restaurantId = response.results[1].id;
    get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${restaurantId}+key=${apiKey}`)
}, function(error){
    console.log('Request failed', error);
}).then(function(details) {
    console.log(`Restaurant ${details.result.name} website ${details.result.website}`);
}, function(error) {
    console.log('Request failed', error);
})

// method to return restaurant details

function getRestaurantDetails(i) {
    const restaurantPromise = restaurantPromise || get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Paris&key=${apiKey}`);

    return restaurantPromise.then(function(response) {
        const restaurantId = response.results[i].id;
        return get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${restaurantId}+key=${apiKey}`);
    })
}

getRestaurantDetails(2).then(function(details) {
    console.log(`Restaurant ${details.result.name}, website ${details.results.website}`);
    return getRestaurantDetails(3);
}).then(function(details) {
    console.log(`Restaurant ${details.result.name}, website ${details.results.website}`);
})