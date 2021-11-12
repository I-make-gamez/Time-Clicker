const t = document.getElementsByClassName("tl")[0];
const le = document.getElementById('le');
const c = document.getElementById("c");
const l = document.getElementById("l");
const yt = document.getElementById('yt');

var year = -500000;
var yeta = 0;
var bcad = "BC";
var tl_open = false;
var tl_timer = NaN;
let ans = undefined;
let ask = window.prompt;

t.addEventListener("click", function() {
    if(yeta >= 20){
        yeta -= 20;
        year -= 20    
        l.innerHTML = `Year: ${Math.abs(year)} ${bcad}`;
        yt.innerHTML = `Years Travelled: ${yeta}`
        tl_open = true
        unlock_tl();
    }
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

le.addEventListener('click', function() {
    switch(tl_open){
        case true:
            timeLeap;
            break;
        case false:
            alert(`Stop Cheating!`)
            break;
    }
}, false);

function unlock_tl(){
    t.style.opacity = 0;
    le.style.opacity = 1;
}

function timeLeap(){
    
}