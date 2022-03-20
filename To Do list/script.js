function new_element() {
    var li = document.createElement("li");
    var input = document.getElementById("input");
    var tinput = document.getElementById("tinput");
    var inputValue = input.value + ":" + tinput.value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if ((input === '') || (tinput === '')) {
        alert("You must write something!");
    } else {
        document.getElementById("tasks").appendChild(li);
    }
    document.getElementById("input").value = "";
    document.getElementById("tinput").value = " ";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}