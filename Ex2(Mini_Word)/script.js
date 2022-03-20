var p1 = document.getElementById("pa");


//changer la taille 
var size = document.getElementById("text")
size.addEventListener("input", Size, false);

function Size(event) {
    if (p1) {
        p1.style.fontSize = event.target.value + "px";
    }
}
//changer la police
document.getElementById("police-select").onchange = function() {
    p1.style.fontFamily = document.getElementById("police-select").value;
}

//changer la couleur
var col = document.getElementById("sel-color");
col.addEventListener("input", changecol, false);

function changecol(e) {
    if (p1) {
        p1.style.color = e.target.value;
    }
}