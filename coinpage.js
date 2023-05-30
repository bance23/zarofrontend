fetch('http://localhost:24002/coin').then(x => x.json()).then(y => megjelenit(y));

function megjelenit(tomb) {
    let sz = "";

    for (let elem of tomb) {
        sz += "<tr>";
        sz += "<td>" + elem.Coin_playerid + "</td>";
        sz += "<td>" + elem.Coin_coin + "</td>";       
        sz+= "<td><button onclick='modositas(`"+elem.Coin_playerid+"`)'>Modositas</button></td>";
        sz+= "<td><button onclick='torles(`"+elem.Coin_coin+"`)'>Torles</button></td>";
        sz += "</tr>";  
    }

    document.getElementById("dataholder").innerHTML = sz;

    console.log(tomb);
}

function torles(coinid){
    if(confirm("Biztos torolni akarod?")){
        
    }else{
        return;
    }

    id = ""+coinid
    let adatok = {
        "bevitel1": id     
      }
      
      fetch('http://localhost:24002/coinDelete', {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => alert(response.json())) 

      location.reload();
}

function modositas(coinid){
    id = ""+coinid
    ertek = prompt("Adja meg a coinok szamat!")
    let adatok = {
        "bevitel2": id,
        "bevitel1": ertek     
      }
      
      fetch('http://localhost:24002/coinUpdate', {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => alert(response.json())) 

      location.reload();
}
