let htmlElem = document.querySelector('html');
let pElem = document.querySelector('p');
let imgElem = document.querySelector('img');

let bgcolorForm = document.getElementById('bgcolor');
let fontForm = document.getElementById('font');
let imageForm = document.getElementById('image');

if(!localStorage.getItem('bgcolor')) {
    populateStorage();
}else{
    setStyles();
}

function populateStorage(){
    localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
    
    localStorage.setItem('font', document.getElementById('font').value);
    
    localStorage.setItem('image', document.getElementById('img').value);

    setStyles();
}

function setStyles() {
    let currentColor = localStorage.getItem('bgcolor');
    let currentFont = localStorage.getItem('font');
    let currentImage = localStorage.getItem('image');

    document.getElementById('bgcolor').value = currentColor;
    document.getElementById('font').value = currentFont;
    document.getElementById('image').value = currentImage;

    htmlElem.style.backgroundColor = '#' + currentColor;
    pEleme.style.fontFamily = currentFont;
    imgElem.setAttribute('src', currentImage);
}

bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.oncancel = populateStorage;