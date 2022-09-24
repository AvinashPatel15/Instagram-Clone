/********************** APPENDING THE DATA IN HOME PAGE *********************/

// let container = document.getElementById('posts');

const appendData = (data, container) => {

    container.innerHTML = null;

    data.forEach(({ caption, image_url }) => {

        let div = document.createElement('div');
        div.setAttribute('id', 'post');

        let info = document.createElement('div');
        info.setAttribute('class', 'info');

        let user = document.createElement('div');
        user.setAttribute('class', 'user');

        let profile_img = document.createElement('div');
        profile_img.setAttribute('class', 'profile-img');

        let pro_img = document.createElement('img');
        pro_img.src = 'https://i.ibb.co/bLHqgxF/1602809658568.png';

        let username = document.createElement('p');
        username.innerText = 'Avinash Patel';
        username.setAttribute('class', 'username');

        let options = document.createElement('img');
        options.src = 'https://cdn-icons-png.flaticon.com/512/17/17764.png';
        options.setAttribute('class', 'options');

        let post_img = document.createElement('img');
        post_img.src = image_url;
        post_img.setAttribute('class', 'post-img');

        let rec = document.createElement('div');
        rec.setAttribute('class', 'rec');

        let rec_left = document.createElement('div');
        rec_left.setAttribute('class', 'rec-left');

        let rec_left_1 = document.createElement('i');
        rec_left_1.setAttribute('class', 'fa-regular fa-heart');

        let rec_left_2 = document.createElement('i');
        rec_left_2.setAttribute('class', 'fa-regular fa-comment');

        let rec_left_3 = document.createElement('i');
        rec_left_3.setAttribute('class', 'fa-solid fa-share');

        let rec_right = document.createElement('div');
        rec_right.setAttribute('class', 'rec-right');

        let rec_right_1 = document.createElement('i');
        rec_right_1.setAttribute('class', 'fa-regular fa-bookmark');

        let post_con = document.createElement('div');
        post_con.setAttribute('class', 'post-content');

        let likes = document.createElement('p');
        likes.setAttribute('class', 'likes');
        likes.innerText = '1,025 Likes';

        let caption1 = document.createElement('p');
        caption1.setAttribute('class', 'caption');
        caption1.innerText = caption;

        let post_time = document.createElement('p');
        post_time.setAttribute('class', 'post-time');
        post_time.innerText = '5 Minutes ago';

        let comment = document.createElement('div');
        comment.setAttribute('class', 'comment');

        let comment_icon = document.createElement('img');
        comment_icon.src = 'https://static.thenounproject.com/png/1190202-200.png';
        comment_icon.setAttribute('class', 'comment-icon');

        let input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Add A Comment';
        input.setAttribute('class', 'comment-box');

        let btn = document.createElement('button');
        btn.innerText = 'Post';
        btn.setAttribute('class', 'comment-btn');


        info.append(user, options);
        user.append(profile_img, username);
        profile_img.append(pro_img);
        rec.append(rec_left, rec_right);
        rec_left.append(rec_left_1, rec_left_2, rec_left_3);
        rec_right.append(rec_right_1);
        post_con.append(likes, caption1, post_time);
        comment.append(comment_icon, input, btn);
        div.append(info, post_img, rec, post_con, comment);
        container.append(div);
    });
}

export { appendData };