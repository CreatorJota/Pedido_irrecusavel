const button = document.getElementById('no');
const height = window.innerHeight - 50;
const width = window.innerWidth - 50;
no.addEventListener('mouseover', function() {
    button.style.position = "absolute";
    button.style.top = Math.random() * height + "px";
    button.style.left = Math.random() * width + "px";
    //var randomY = Math.floor(Math.random() * window.innerHeight);
    //no.style.position = "absolute";
    //no.style.top = randomY + "px";
    //no.style.left = randomX + "px";
});