let tab1=["KAMIEN", "PAPIER", "NOZYCE"]

function losujKamien(){
    let losIndex = Math.floor(Math.random() * tab1.length)
    let pLos = document.getElementById("losowanie")

    if(losIndex==0){
        alert("PRZECIWNIK DAŁ KAMIEŃ - REMIS")
    }
    else if(losIndex==1){
        alert("PRZECIWNIK DAŁ PAPIER - PRZEGRALES")
    }
    else{
        alert("PRZECIWNIK DAŁ NOŻYCE - WYGRALES")
    }
}
function losujPapier(){
    let losIndex = Math.floor(Math.random() * tab1.length)
    let pLos = document.getElementById("losowanie")

    if(losIndex==0){
        alert("PRZECIWNIK DAŁ KAMIEŃ - WYGRALES")
    }
    else if(losIndex==1){
        alert("PRZECIWNIK DAŁ PAPIER - REMIS")
    }
    else{
        alert("PRZECIWNIK DAŁ NOŻYCE - PRZEGRALES")
    }
}
function losujNozyce(){
    let losIndex = Math.floor(Math.random() * tab1.length)
    let pLos = document.getElementById("losowanie")

    if(losIndex==0){
        alert("PRZECIWNIK DAŁ KAMIEŃ - PRZEGRALES")
    }
    else if(losIndex==1){
        alert("PRZECIWNIK DAŁ PAPIER - WYGRALES")
    }
    else{
        alert("PRZECIWNIK DAŁ NOŻYCE - REMIS")
    }
}

