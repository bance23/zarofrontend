fetch('http://localhost:3000/login').then(x => x.json()).then(y => megjelenit(y));
let userData;

function megjelenit(tomb){
    let sz = "";

    for (let elem of tomb) {
        sz += "<div>";
        sz += elem.username + " " + elem.password;
        sz += "</div>";

        document.getElementById('fetchData').innerHTML = sz;
    }

    console.log(tomb);
}

function getDbData(data){
    userData = data;
}

function login(){
    let inputUsername = document.getElementById('username').value;
    let passwordUsername = document.getElementById('password').value;

    console.log(document.getElementById('username').value +  " " + document.getElementById('password').value);

    for (let elem of userData) {
        if(elem.username == inputUsername && elem.password == passwordUsername){
            window.location.href = "fooldal.html";
        }else{
            alert("Szar vagy nem jo a loginod");
        }
    }
}
