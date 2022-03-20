var nb = Math.round(Math.random() * 10);


do {
    for (i = 0; i < 5; i++) {
        var x = prompt("entrer un numéro :");
        if (x == nb)
            break;
        else if (x > nb) {
            alert("moins --");
        } else {
            alert("plus ++")
        }
    }
    if (x == nb) {
        alert("Bravo !!!")
        var y = prompt("voulez-vous jouer une autre fois ?")
    } else {
        alert("essaye une autre fois :( ..")
    }
}
while (y.toUpperCase() == "OUI");