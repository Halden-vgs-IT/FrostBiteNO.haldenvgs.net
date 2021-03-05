var slideshowCounter = 0;
var imageGallery, dotBox, box, videoBox;
const hytteInfo = [
    {navn:'Granstua', sengeplasser:'4', standard:'Middels', bilder: ['medier/granstua01.jpg','medier/granstua02.jpg','medier/granstua3.jpg']},
    {navn:'Granbo', sengeplasser:'6', standard:'Lav', bilder: ['medier/granbo01.jpg','medier/granbo02.jpg','medier/granbo03.jpg']}
];
window.onload = function() {
    imageGallery = document.getElementById('lightbox');
    box = document.getElementById('images');
    dotBox = document.getElementById('dotBox');
    videoBox = document.getElementById('videoBox');

    document.getElementById("granstua").onclick = () => lightbox(0);
    document.getElementById("granbo").onclick = () => lightbox(1);
    document.getElementById("kryss1").onclick = () => closeBox(imageGallery);
    document.getElementById("kryss2").onclick = () => closeBox(videoBox,1);
    document.getElementById('showVideo').onclick = () => showBox(videoBox,1);
    document.getElementById("knappForan").onclick = () => moveSlide(1);
    document.getElementById("knappTilbake").onclick = () => moveSlide(-1);
}

function lightbox(x) {

    while (dotBox.lastChild) dotBox.removeChild(dotBox.lastChild);
    var slides = document.getElementsByClassName('slides');
    while(slides[0]) slides[0].parentNode.removeChild(slides[0]);

    for (var i = 0; i < hytteInfo[x].bilder.length; i++) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        var span = document.createElement('span');
        div.className = 'slides';
        img.src = hytteInfo[x].bilder[i];
        span.className = 'dot';
        span.value = i;
        span.onclick = function() {slide(this.value)};

        div.appendChild(img);
        box.appendChild(div);
        dotBox.appendChild(span);
    }

    var hytteInfoKey = Object.keys(hytteInfo[x]);
    var hytteInfoValue = Object.values(hytteInfo[x]);
    var info = "";
    for (var i = 0; i < hytteInfoKey.length-1; i++) {
        info+= `${hytteInfoKey[i]}: ${hytteInfoValue[i]}<br/>`
    }
    document.getElementById('tekst').innerHTML = info;

    slide(0);
    showBox(imageGallery);
}
function showBox(dom, type=0) {
    dom.style.visibility = 'visible';
    dom.style.opacity = '1';
    if (type === 0) document.getElementById("main").style.display = "none";
}
function closeBox(dom, type=0) {
    dom.style.visibility = 'hidden';
    dom.style.opacity = '0';
    if (type === 0) document.getElementById("main").style.display = "block";
}

function moveSlide(x=1) {
    slideshowCounter += x;
    slide(slideshowCounter);
}
function slide(x) {
    var slides = document.getElementsByClassName("slides");
    slideshowCounter = x;
    if (slideshowCounter == slides.length) slideshowCounter = 0;
    else if (slideshowCounter == -1) slideshowCounter = slides.length-1;
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = "dot"
    }
    slides[slideshowCounter].style.display = "block";
    dots[slideshowCounter].classList.toggle("active");
}
//må legge meg lit flat å fortelle at jeg har hentet mesteparden av denne oppgaven på nett