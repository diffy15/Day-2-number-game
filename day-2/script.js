var inccount = document.getElementById('inc-count');
var deccount = document.getElementById('dec-count');

let incval = 0;
let decval = 100;

function inc(value){
    if(incval + value <= 100) {
        incval += value;
        inccount.innerText = incval;
    }
}

function dec(value){
    if(decval - value >= 0) {
        decval -= value;
        deccount.innerText = decval;
    }
}

function add() {
    let total = incval + decval;
    result.innerText = ` ${total}`;
}