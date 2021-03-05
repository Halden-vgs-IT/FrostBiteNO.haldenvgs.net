window.onload = startup;

var hytteinfo = [
    {
        hytte : "Granstua",
        senger : 4,
        standard : "Høy",
        badestue : "ja",
        ukepris : 12000,
        ledighet : {
            jul : false,
            vinter : false,
            poske : true
        }
    },
    {
        hytte : "Granbo",
        senger : 6,
        standard : "Middels",
        badestue : "Nei",
        ukepris : 15000,
        ledighet : {
            jul : true,
            vinter : true,
            poske : false
        }
    },
    {
        hytte : "Grantoppen",
        senger : 8,
        standard : "Lav",
        badestue : "Nei",
        ukepris : 16000,
        ledighet : {
            jul : false,
            vinter : true,
            poske : false
        }
    },
    {
        hytte : "Granhug",
        senger : 10,
        standard : "Høy",
        badestue : "ja",
        ukepris : 30000,
        ledighet : {
            jul : false,
            vinter : true,
            poske : false
        }
    }
]

var hyt = document.getElementsByClassName("hyt");
var sen = document.getElementsByClassName("seng");
var stand = document.getElementsByClassName("stand");
var bad = document.getElementsByClassName("bad");
var pri = document.getElementsByClassName("pri");
var ferie = 0;


function startup(){
    document.getElementById("ferie").onchange = btn;

    hytteinfo.forEach(function(item, index) {
        hyt[index].innerHTML = hytteinfo[index]["hytte"];
    });
    hytteinfo.forEach(function(item, index) {
        sen[index].innerHTML = hytteinfo[index]["senger"];
    });
    hytteinfo.forEach(function(item, index) {
        stand[index].innerHTML = hytteinfo[index]["standard"];
    });
    hytteinfo.forEach(function(item, index) {
        bad[index].innerHTML = hytteinfo[index]["badestue"];
    });
    hytteinfo.forEach(function(item, index) {
        pri[index].innerHTML = hytteinfo[index]["ukepris"];
    });

    document.getElementById("knappUaP").onclick = leiUaP;
    document.getElementById("knappBoJ").onclick = leiBoJ;
    document.getElementById("knappBoP").onclick = leiBoP;
    document.getElementById("knappEnV").onclick = leiEnV;
    document.getElementById("knappUgV").onclick = leiUgV;
}
function btn(){
    var ferie = document.getElementById("ferie").value
    var fe = ferie * 1;

    if (fe === 0){
        document.getElementById("knappUaJ").style.display = "inline";
        document.getElementById("knappUaV").style.display = "none";
        document.getElementById("knappUaP").style.display = "none";
        document.getElementById("knappBoJ").style.display = "inline";
        document.getElementById("knappBoV").style.display = "none";
        document.getElementById("knappBoP").style.display = "none";
        document.getElementById("knappEnJ").style.display = "inline";
        document.getElementById("knappEnV").style.display = "none";
        document.getElementById("knappEnP").style.display = "none";
        document.getElementById("knappUgJ").style.display = "inline";
        document.getElementById("knappUgV").style.display = "none";
        document.getElementById("knappUgP").style.display = "none";
    }
    else if (fe === 1){
        document.getElementById("knappUaJ").style.display = "none";
        document.getElementById("knappUaV").style.display = "inline";
        document.getElementById("knappUaP").style.display = "none";
        document.getElementById("knappBoJ").style.display = "none";
        document.getElementById("knappBoV").style.display = "inline";
        document.getElementById("knappBoP").style.display = "none";
        document.getElementById("knappEnJ").style.display = "none";
        document.getElementById("knappEnV").style.display = "inline";
        document.getElementById("knappEnP").style.display = "none";
        document.getElementById("knappUgJ").style.display = "none";
        document.getElementById("knappUgV").style.display = "inline";
        document.getElementById("knappUgP").style.display = "none";
    }
    else if (fe === 2){
        document.getElementById("knappUaJ").style.display = "none";
        document.getElementById("knappUaV").style.display = "none";
        document.getElementById("knappUaP").style.display = "inline";
        document.getElementById("knappBoJ").style.display = "none";
        document.getElementById("knappBoV").style.display = "none";
        document.getElementById("knappBoP").style.display = "inline";
        document.getElementById("knappEnJ").style.display = "none";
        document.getElementById("knappEnV").style.display = "none";
        document.getElementById("knappEnP").style.display = "inline";
        document.getElementById("knappUgJ").style.display = "none";
        document.getElementById("knappUgV").style.display = "none";
        document.getElementById("knappUgP").style.display = "inline";
    }
    else if (fe === 7){
        document.getElementById("knappUaJ").style.display = "none";
        document.getElementById("knappUaV").style.display = "none";
        document.getElementById("knappUaP").style.display = "none";
        document.getElementById("knappBoJ").style.display = "none";
        document.getElementById("knappBoV").style.display = "none";
        document.getElementById("knappBoP").style.display = "none";
        document.getElementById("knappEnJ").style.display = "none";
        document.getElementById("knappEnV").style.display = "none";
        document.getElementById("knappEnP").style.display = "none";
        document.getElementById("knappUgJ").style.display = "none";
        document.getElementById("knappUgV").style.display = "none";
        document.getElementById("knappUgP").style.display = "none";
    }
}
function leiUaP(){
    document.getElementById("knappUaP").innerHTML = "Utleid";
}
function leiBoJ(){
    document.getElementById("knappBoJ").innerHTML = "Utleid";
}
function leiBoP(){
    document.getElementById("knappBoP").innerHTML = "Utleid";
}
function leiEnV(){
    document.getElementById("knappEnV").innerHTML = "Utleid";
}
function leiUgV(){
    document.getElementById("knappUgV").innerHTML = "Utleid";
}