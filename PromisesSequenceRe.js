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

get('story.json').then(function(story) {
    addHtmlToPage(story.heading);

    return story.chapterUrls.reduce(function(sequence, chapterUrl) {
        return sequence.then(function() {
            return get(chapterUrl);
        }).then(function(chapter) {
            addHtmlToPage(chapter.html);
        });
    }, Promise.resolve());
}).then(function() {
    addTextToPage("All done");
}).catch(function(error) {
    addTextToPage("Broken" + error.message);
}).then(function() {
    document.querySelector('.spinner').style.display = 'none';
})