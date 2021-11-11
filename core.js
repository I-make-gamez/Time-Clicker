const t = document.getElementsByClassName("tl")[0];
const c = document.getElementById("c");
const l = document.getElementById("l");
const yt = document.getElementById('yt');

var year = -500000;
var yeta = 0
var bcad = "BC";

t.addEventListener("click", function() {
    window.alert('T is defined!');
}, false);

c.addEventListener("click", function() {
    year += 1;
    yeta += 1;
    if (year >= 1) {
        bcad = "AD";
    }
    if (year <= 1) {
        bcad = "BC";
    }
    l.innerHTML = `Year: ${Math.abs(year)} ${bcad}`;
    yt.innerHTML = `Years Travelled: ${yeta}`
}, false);