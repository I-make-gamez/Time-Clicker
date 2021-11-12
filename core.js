const t = document.getElementsByClassName("tl")[0];
const le = document.getElementById('le');
const c = document.getElementById("c");
const l = document.getElementById("l");
const yt = document.getElementById('yt');
const vers = document.getElementById('ver');
const achive = document.getElementById('achive')

var version = "0.6.6"
var year = -500000;
var yeta = 0;
var bcad = "BC";
var tl_open = false;
var tl_timer = 11;
var tlx = 0;
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
            tl_open = false
            year += 50 + tlx;
            yeta += 50 + tlx; 
            l.innerHTML = `Year: ${Math.abs(year)} ${bcad}`;
            yt.innerHTML = `Years Travelled: ${yeta}`
            tl_timer = 10;
            le.style.opacity = 0
            setInterval(() => {
                tl_timer -= 1
                if(tl_timer <= 1 && tl_open == false){
                    le.style.opacity = 1;
                    tl_open = true
                    return;
                }else{
                    return;
                };
            }, 1000);
            break;
    }
}, false);

achive.addEventListener('click', function(){
    alert("Comming in 1.0.0")
}, false);

vers.addEventListener('click', function(){
    alert("What's New?\n1) 'Time Leap' powerup added\n2) Bug Fixes")
}, false);

function unlock_tl(){
    t.style.opacity = 0;
    le.style.opacity = 1;
}

function updateVersion(){
    vers.innerHTML = `Version: ${version}`
}