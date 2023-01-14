fetch('http://localhost:3000/player').then(x => x.json()).then(y => megjelenit(y));

function megjelenit(tomb) {
    let sz = "";

    for (let elem of tomb) {
        sz += "<tr>";
        sz += "<td>" + elem.player_id + "</td>";
        sz += "<td>" + elem.player_name + "</td>";
        sz+= "<td>" + (elem.player_join_date.substring(0, elem.player_join_date.length - 14)) + "</td>";
        sz+= "<td><button onclick='modositas(`"+elem.player_name+"`)'>Modositas</button></td>";
        sz+= "<td><button onclick='torles(`"+elem.player_id+"`)'>Torles</button></td>";
        sz += "</tr>";  
    }

    document.getElementById("dataholder").innerHTML = sz;

    console.log(tomb);
}

function torles(playerid){
    if(confirm("Biztos torolni akarod?")){
        
    }else{
        return;
    }
    
    id = ""+playerid
    let adatok = {
        "bevitel1": id     
      }
      
      fetch('http://localhost:3000/playerDelete', {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => alert(response.json())) 

      location.reload();
}

function modositas(username){
    ujnev = prompt("Adja meg a felhasznalonevet")
    ujdatum = prompt("Adja meg az uj datumot (Minta: 2023-01-01)")  //valamiert egy nappal korabbi datum megy fel a db-be
    felhasznalonev = ""+username
    let adatok = {
        "bevitel1": ujnev,
        "bevitel2": ujdatum,
        "bevitel3": felhasznalonev      
      }
      
      fetch('http://localhost:3000/playerUpdate', {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => alert(response.json())) 

      location.reload();
}
