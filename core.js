var year = -500000;
var bcad = "BC";

const c = document.getElementById("#c");
const l = document.getElementById("#l");
const t = document.getElementsByClassName(".U1")[0];


if (c) {
    c.addEventListener("click", function() {
        year += 1;
        if (year >= 1) {
            bcad = "AD";
        }
        if (year <= 1) {
            bcad = "BC";
        }
        l.innerHTML = "Year: " + Math.abs(year) + bcad;
    });
}

if (t) {
    t.addEventListener("click", function() {
        console.log("t is defined!");
    });
}