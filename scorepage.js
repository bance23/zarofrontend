fetch('http://localhost:3000/score').then(x => x.json()).then(y => megjelenit(y));

function megjelenit(tomb) {
    let sz = "";

    for (let elem of tomb) {      	
        sz += "<tr>";
        sz += "<td>" + elem.score_id + "</td>";
        sz += "<td>" + elem.score_playerid + "</td>";
        sz += "<td>" + elem.score_points + "</td>";
        sz += "<td>" + (elem.score_date.substring(0, elem.score_date.length - 14)) + "</td>";
        sz += "<td>" + elem.score_time + "</td>";
        sz += "<td><button onclick='modositas(`"+elem.score_id+"`)'>Modositas</button></td>";
        sz += "<td><button onclick='torles(`"+elem.score_id+"`)'>Torles</button></td>";
        sz += "</tr>";  
    }

    document.getElementById("dataholder").innerHTML = sz;

    console.log(tomb);
}

function torles(scoreid){
    if(confirm("Biztos torolni akarod?")){
        
    }else{
        return;
    }
    

    id = ""+scoreid
    let adatok = {
        "bevitel1": id     
      }
      
      fetch('http://localhost:3000/scoreDelete', {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => alert(response.json())) 

      location.reload();
}

function modositas(score_id){
    ujplayerid = prompt("Adja meg a playerid-t")
    ujpalyaid = prompt("Adja meg a palyaid-t")
    ujpont = prompt("Adja meg a pontokat")
    ujdatum = prompt("Adja meg az uj datumot (Minta: 2023-01-01)")  //valamiert egy nappal korabbi datum megy fel a db-be
    ujido = prompt("Adja meg az uj idot (Minta: 00:03:24)")  
    scoreId = ""+score_id
    let adatok = {
        "bevitel1": ujplayerid,
        "bevitel2": ujpalyaid,
        "bevitel3": ujpont,
        "bevitel4": ujdatum,      
        "bevitel5": ujido,      
        "bevitel6": scoreId,      
      }
      
      fetch('http://localhost:3000/scoreUpdate', {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => alert(response.json())) 

      location.reload();
}
