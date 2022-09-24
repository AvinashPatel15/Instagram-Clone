/********************* IMPORTING DATA FROM navbar.js *********************/

import { navbar } from "./components/navbar.js";
// console.log('navbar:', navbar);

let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();

/********************** ADDING EVENT LISTENER *********************/

document.getElementById('index-page').addEventListener('click', function() {
    window.location.href = 'index.html'
});

let int = document.getElementById('image');

int.addEventListener('change', function() {
    handleImage(event);
});

let btn = document.getElementById('create_btn');

btn.addEventListener('click', function() {
    addPost();
});
btn.disabled = true;

let delete_btn = document.getElementById('delete_btn');

delete_btn.addEventListener('click', function() {
    deletePost();
});

let update_btn = document.getElementById('update_btn');

update_btn.addEventListener('click', function() {
    updatePost();
});

let image_url;

/********************** 1st Step: UPLOADING THE DATA IN OUR SERVER *********************/

const addPost = async() => {

    let caption = document.getElementById('caption').value;

    let id = document.getElementById('id').value;

    let send_this_data = {

        caption,
        id,
        image_url,
    }

    let res = await fetch(' http://localhost:3000/posts', {

        method: 'POST',
        body: JSON.stringify(send_this_data),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    let data = await res.json();
    console.log('data:', data);

}

/********************** IMAGE CHANGE TO AN URL *********************/

const handleImage = async(event) => {
    // console.log('event:', event);

    // let id = document.getElementById('id');
    // let caption = document.getElementById('caption');

    try {

        let image = document.getElementById('image');
        // console.log('image:', image);

        let actual_image = image.files[0];
        // console.log('actual_image:', actual_image);

        let form = new FormData();
        form.append('image', actual_image);

        let res = await fetch(`https://api.imgbb.com/1/upload?key=789254f775c743f0d0352de572748f9f`, {

            method: 'POST',
            body: form,
        });

        let data = await res.json();
        // console.log('data:', data);

        image_url = data.data.display_url;
        console.log('image_url:', image_url);

        btn.disabled = false;

    } catch (error) {
        console.log('error:', error);
    }
}

/********************** DELETE POST *********************/

const deletePost = async() => {

    try {

        let id_to_delete = document.getElementById('delete_id').value;

        let res = await fetch(`http://localhost:3000/posts/${id_to_delete}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        let data = await res.json();

        console.log('data:', data);

    } catch (error) {
        console.log('error:', error);
    }
}

/********************** UPDATE POST *********************/

const updatePost = async() => {

    try {

        let update_id = document.getElementById('update_id').value;

        let new_caption = document.getElementById('new_caption').value;

        let send_data = {
            caption: new_caption,
        }

        let res = await fetch(`http://localhost:3000/posts/${update_id}`, {

            method: 'PATCH',
            body: JSON.stringify(send_data),

            headers: {
                'Content-Type': 'application/json',
            },
        });

        let data = await res.json();

        console.log('data:', data);

    } catch (error) {
        console.log('error:', error);
    }
}