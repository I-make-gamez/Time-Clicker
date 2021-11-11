var year = -500000;
var bcad = "BC";

const c = document.getElementById("#c");
const l = document.getElementById("#l");
const t = document.getElementsByClassName(".U1")[0];

c.addEventListener("click", function() {
    year += 1;
    if (year >= 1) {
        bcad = "AD";
    }
    if (year <= 1) {
        bcad = "BC";
    }
    l.innerHTML = `Year: `
});

t.addEventListener("click", function() {
    window.alert('T is defined!')
});