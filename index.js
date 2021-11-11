//SHOW/HIDE TAB RIGHT OF LOGIN

function leftShow() {
    // left
    let left = document.querySelector('.left-toogle-on');
    left.classList.add("leftShow");
    left.classList.remove("leftHide");    
}

function rightShow() {
    // right
    let right = document.querySelector('.right-toogle-on');
    right.classList.add("rightShow");
    right.classList.remove("rightHide");
}

function leftHide() {    
    // left
    let left = document.querySelector('.left-toogle-on');
    left.classList.add("leftHide");
    left.classList.remove("leftShow");    
}

function rightHide() {
    // right
    let right = document.querySelector('.right-toogle-on');
    right.classList.add("rightHide");
    right.classList.remove("rightShow");
}




// SHOW/HIDDEN IFRAMES SELECTION

function showErp() {
    let erps = document.getElementById("erps");
    let services = document.getElementById("services");
    
    
    erps.classList.add("toRight");
    services.classList.add("toRight");
    
    // services.classList.remove("toLeft"); 
    
    erps.style.display = "block";
    services.style.display = "none";
}

function showServices() {
    let erps = document.getElementById("erps");
    let services = document.getElementById("services");

    
    // services.classList.add("toLeft");
    // erps.classList.remove("toRight");
    
    erps.style.display = "none";
    services.style.display = "block";
}


// BTN IFRAME UNDELINED

function underlineBtnERP() {
    document.getElementById("btnERP").style.borderBottom = "1px solid black";
    document.getElementById("btnServ").style.borderBottom = "none";
}

function underlineBtnServ() {
    document.getElementById("btnERP").style.borderBottom = "none";
    document.getElementById("btnServ").style.borderBottom = "1px solid black";
}