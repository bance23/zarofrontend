fetch('http://localhost:3000/palya').then(x => x.json()).then(y => megjelenit(y));

function megjelenit(tomb) {
    let sz = "";

    for (let elem of tomb) {
        sz += "<tr>";
        sz += "<td>" + elem.palya_id + "</td>";
        sz += "<td>" + elem.palya_name + "</td>";       
        sz+= "<td><button onclick='modositas(`"+elem.palya_id+"`)'>Modositas</button></td>";
        sz+= "<td><button onclick='torles(`"+elem.palya_id+"`)'>Torles</button></td>";
        sz += "</tr>";  
    }

    document.getElementById("dataholder").innerHTML = sz;

    console.log(tomb);
}

function torles(palyaid){
    if(confirm("Biztos torolni akarod?")){
        
    }else{
        return;
    }

    id = ""+palyaid
    let adatok = {
        "bevitel1": id     
      }
      
      fetch('http://localhost:3000/palyaDelete', {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => alert(response.json())) 

      location.reload();
}

function modositas(palyaid){
    ujnev = prompt("Adja meg a nevet")
    id = ""+palyaid
    let adatok = {
        "bevitel1": ujnev,
        "bevitel2": id     
      }
      
      fetch('http://localhost:3000/palyaUpdate', {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => alert(response.json())) 

      location.reload();
}
