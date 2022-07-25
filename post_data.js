
document.getElementById('submit').addEventListener('click',function(){
    const title = document.getElementById('title').value;
    const bodyContent = document.getElementById('body-content').value;
    const post = {
      title:title, body:bodyContent
    };
    newPostToServer(post);
})

function newPostToServer(post) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
}