fetch('http://localhost:3000/login').then(x => x.json()).then(y => megjelenit(y));

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