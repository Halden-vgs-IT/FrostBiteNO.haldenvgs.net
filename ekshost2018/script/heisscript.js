window.onload = startup;

function startup(){
    document.getElementById("btn").onclick = kalkuler;
}
function kalkuler(){
    var alder = document.getElementById("alder").value
    var dager = document.getElementById("antDag").value
    var pris = alder * dager;
    var avslag = alder * 5;
    var pengerspart = (dager - 5) * alder;

    if (dager < 5){
        document.getElementById("output").innerHTML = "du må betale " + pris + "kr";
        document.getElementById("output2").innerHTML = "";
    }
    else {
        document.getElementById("output").innerHTML = "Du må betale " + avslag + "kr";
        document.getElementById("output2").innerHTML = "du får avslag på  " + pengerspart + "kr";
    }
}

var slider = document.getElementById("antDag");
var output = document.getElementById("dag");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}