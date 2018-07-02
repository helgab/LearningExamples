doubleAfter2Seconds = x => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    });
}
        
doubleAfter2Seconds(10).then(r => { 
    console.log(r)
});

let sum = doubleAfter2Seconds(10) + doubleAfter2Seconds(20) + doubleAfter2Seconds(30);
console.log(sum);

addPromise = x => {
    return new Promise(resolve => {
        doubleAfter2Seconds(10).then(a => {
            doubleAfter2Seconds(20).then(b => {
                doubleAfter2Seconds(30).then(c => {
                    resolve (x + a + b + c);
                })
            })
        })
    });
}

addPromise(10).then(sum => { 
    console.log(sum);
});

addAsync = async x => {
    return await doubleAfter2Seconds(10) + await doubleAfter2Seconds(20) + await doubleAfter2Seconds(30) + x;
}