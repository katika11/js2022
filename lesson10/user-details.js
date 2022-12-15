let url = new URL(location.href);
let id = url.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/users/' + id)
.then(value => value.json())
.then(value => {
    console.log(value);
})