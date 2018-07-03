const url = 'https://randomuser.me/api/?results=10';
fetch(url).then(data => { console.log(data)});
fetch(url).then(res => res.json());

const urlPost = 'https://randomuser.me/api';
const data = {
    name: 'Helga'
}

let fetchData = { 
    method: 'POST', 
    body: data,
    headers: new Headers()
}

fetch(urlPost, fetchData).then(res => console.log(res));

let request = new Request(urlPost, {
    method: 'POST',
    body: data,
    headers: new Headers()
});

fetch(request).then(res => console.log(res));