fetch('http://localhost:3000/login').then(x => x.json()).then(y => megjelenit(y));

function megjelenit(tomb) {
    let sz = "";

    for (let elem of tomb) {
        sz += "<tr>";
        sz += "<td>" + elem.username + "</td>";
        sz+= "<td>" + elem.password + "</td>";
<<<<<<< HEAD
        sz+= "<td><button onclick='modositas(`"+elem.username+"`)'>Modositas</button></td>";
        sz+= "<td><button onclick='torles(`"+elem.username+"`)'>Torles</button></td>";
=======
        sz+= "<td><button onclick='modositas("+elem.username.text+")'>Modositas</button></td>";
        sz+= "<td><button onclick='torles("+elem.username+")'>Torles</button></td>";
>>>>>>> 137789bfc158f252942445945e373cc322fa5c82
        sz += "</tr>";  
    }

    document.getElementById("dataholder").innerHTML = sz;

    console.log(tomb);
}

function torles(username){
<<<<<<< HEAD
    if(confirm("Biztos torolni akarod?")){
        
    }else{
        return;
    }

    id = ""+username
    let adatok = {
        "bevitel1": id     
      }
      
      fetch('http://localhost:3000/loginDelete', {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => alert(response.json())) 

      location.reload();
=======
    //post to backend
>>>>>>> 137789bfc158f252942445945e373cc322fa5c82
}

function modositas(username){
    ujnev = prompt("Adja meg a felhasznalonevet")
    ujjelszo = prompt("Adja meg a jelszavat")
    felhasznalonev = ""+username
    let adatok = {
        "bevitel1": ujnev,
        "bevitel2": ujjelszo,
        "bevitel3": felhasznalonev      
      }
      
      fetch('http://localhost:3000/loginUpdate', {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => alert(response.json())) 

      location.reload();
<<<<<<< HEAD
}
=======
}
>>>>>>> 137789bfc158f252942445945e373cc322fa5c82
