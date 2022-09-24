/*********** Importing the data from navbar.js **********/

import { navbar } from "./components/navbar.js";
// console.log('navbar:', navbar);

let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();

import { appendData } from "./scripts/append.js";

/********************** ADDING EVENT LISTENER *********************/

document.getElementById('index-page').addEventListener('click', function() {
    window.location.href = 'index.html'
});

/********************** APPENDING THE DATA IN HOME PAGE *********************/

let post_div = document.getElementById('posts');

const getData = async() => {

    try {

        let res = await fetch(`http://localhost:3000/posts`);

        let data = await res.json();
        console.log('data:', data);

        appendData(data, post_div);

    } catch (error) {
        console.log('error:', error);
    }
}
getData();