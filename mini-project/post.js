// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let url = new URL(location);
let postUser = url.searchParams.get('post');
let post = JSON.parse(postUser);


let divPost  = document.createElement('div');
divPost.classList.add('divPost');
document.body.append(divPost);
divPost.innerText = `userId: ${post.userId} 
id: ${post.id} 
title: ${post.title} 
body: ${post.body}`



let commentsDiv = document.createElement('div');
commentsDiv.classList.add('commentsDiv');
document.body.appendChild(commentsDiv);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        for (let comment of comments) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('commentDiv')
            commentsDiv.appendChild(commentDiv);

            for (let commentElement in comment) {
                let block = document.createElement('div');
                block.classList.add('block');
                commentDiv.appendChild(block);
                block.innerText = `${commentElement} ${comment[commentElement]}`
            }
        }
    });



