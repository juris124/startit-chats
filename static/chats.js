//console.log("Sveiciens no konsoles!");
const ATJAUNOT = 5000;

async function lasiChatu(){
    const atbilde = await fetch('/chats/lasi');
    const datuObjekts = await atbilde.json();
    raadiChatuVienkaarshi(datuObjekts);
}

function raadiChatuVienkaarshi(dati){
    const jaunaRinda="<br>";
    let chats = "";
    let chataDiv = document.getElementById("chats");

    for(let rinda of dati['chats']){
        chats = chats + rinda + jaunaRinda;

    }
    chataDiv.innerHTML = chats;
}

function raadiChatu(){

}


function suutiZinju(){

}