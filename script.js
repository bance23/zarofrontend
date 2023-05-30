//fetch('http://localhost:24002/login').then(x => x.json()).then(y => megjelenit(y));
fetch('http://localhost:24002/login').then(x => x.json()).then(y => getDbData(y));

let userData;

function megjelenit(tomb) {
    let sz = "";

    for (let elem of tomb) {
        sz += "<div>";
        sz += elem.username + " " + elem.password;
        sz += "</div>";

        document.getElementById('fetchData').innerHTML = sz;
    }

    console.log(tomb);
}

function getDbData(data) {
    userData = data;
}

function login() {
    let inputUsername = document.getElementsByTagName("input")[0].value;
    let inputPassword = document.getElementsByTagName("input")[1].value;
    let belep = false;

    console.log(inputUsername + " " + inputPassword);

    for (let elem of userData) {
        if (elem.username == inputUsername && elem.password == inputPassword) {
            belep = true;
            break;
        }
    }

    if (belep) {
        window.location.href = "fooldal.html";
        belep = false;
    } else {
        alert("Nem jo a loginod");
    }
}
