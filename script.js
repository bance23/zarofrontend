//fetch('http://localhost:3000/player').then(x => x.json()).then(y => megjelenit(y));

function megjelenit(tomb){
    let sz = "";

    for (let elem of tomb) {
        sz += "<div>";
        sz += elem.player_id + " " + elem.player_name + " " + elem.player_join_date;
        sz += "</div>";

        document.getElementById('fetchData').innerHTML = sz;
    }

    console.log(tomb);
}