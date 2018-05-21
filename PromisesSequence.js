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

const story = get('story.json');
let sequence = Promise.resolve();

story.chapterUrls.forEach(function(chapterUrl) {
    sequence = sequence.then(function() {
        return get(chapterUrl);
    }).then(function(chapter) {
        addHtmlToPage(chapter.html);
    });
})

// tidy up the code using array.reduce
// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

story.chapterUrls.reduce(function(sequence, chapterUrl){
    return sequence.then(function() {
        return get(chapterUrl);
    }).then(function(chapter) {
        addHtmlToPage(chapter.html);
    })
}, Promise.resolve())
