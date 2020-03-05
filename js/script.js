const getTextBtnElement = document.getElementById("getText");

const getUsersBtnElement = document.getElementById("getUsers");

const getPostsBtnElement = document.getElementById("getPosts");

getTextBtnElement.addEventListener("click", getText);

getUsersBtnElement.addEventListener("click", getUsers);

getPostsBtnElement.addEventListener("click", getPosts);

function getText(){
//    //console.log(123);
//    fetch('sample.txt')
//    .then(function(respons){
//        //console.log(respons.text);
//        return respons.text();
//    })
//    .then(function(data){
//        console.log(data); 
//    });
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("output").innerHTML = data;
    })
}

function getUsers(){
    fetch('json/users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2 class="display-4 mb-4">Users</h2>';
        //console.log(data);
        data.forEach(function(user){
            output += `
              <ul class="list-group mb-3">
                <li class="list-group-item">ID: ${user.id}</li>
                <li class="list-group-item">Name: ${user.name}</li>
                <li class="list-group-item">Email: ${user.email}</li>
              </ul>
            `;
        })
        document.getElementById('output').innerHTML = output;
    })
    
}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2 class="display-4 mb-4">Posts</h2>';
        //console.log(data);
        data.forEach(function(post){
            output += `
             <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
             </div>
            `;
        })
        document.getElementById('output').innerHTML = output;
    })
}