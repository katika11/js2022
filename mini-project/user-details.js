let url = new URL(location.href);
let id = url.searchParams.get('data');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {

        for (const item in value) {
            let userDiv = document.createElement('div');

            if (typeof value[item] !== 'object') {

                userDiv.innerText = `${item} ${value[item]}`;
            } else {
                userDiv.innerText = `${item} :`

                for (const key in value[item]) {
                    const innerDiv = document.createElement('div');
                    if (typeof value[item][key] !== 'object') {
                        innerDiv.innerText = `${key} ${value[item][key]}`;

                    } else {
                        innerDiv.innerText = `${key} :`;

                        for (const element in value[item][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element} ${value[item][key][element]}`;
                            }
                            innerDiv.append(htmlDivElement);
                        }
                    }
                    userDiv.append(innerDiv);
                }
            }
            document.body.append(userDiv);

        }
    });


let button = document.createElement("button");
button.innerText = 'posts of current user'
document.body.appendChild(button)

button.onclick = function () {
 fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
     .then(value => value.json())
     .then(posts => {
         for (const post of posts) {
             let userPost = document.createElement('div');
             userPost.innerText = `${post.title}`
             document.body.appendChild(userPost);

             let a = document.createElement('a');
             a.href = `post-details.html?post=${JSON.stringify(post)}`;
             a.innerText = 'click';
             userPost.appendChild(a);
         }
     });
}


// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.





