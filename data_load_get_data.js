fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => displayUser(json))

  function displayUser(users){
    const userName = users.map (user => user.username);
    // console.log(userName);
    const ul = document.getElementById("container");
    for (let i = 0; i < userName.length; i++) {
        const user = userName[i];
        const li = document.createElement("li");
        li.innerText = user;
        ul.appendChild(li);
    }
}