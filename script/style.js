

let backgroundFile = document.querySelector('#background-flie');
let applyBtn = document.querySelector('.side-menu-apply');
let cancleBtn = document.querySelector('.side-menu-cancle');
let backgroundImage = document.querySelector('#background-image');






applyBtn.addEventListener('click',() => {
    backgroundSet()
})

cancleBtn.addEventListener('click',() => {
    sideMenu.style.transform="translateX(-100%)"; 
    clockClickNum +=1;
})



function backgroundSet(){
    let backgroundPath = '../background/' + backgroundFile.files[0]['name'];
    backgroundImage.src = backgroundPath;
    document.cookie =  `background=${backgroundPath}; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
}






function config(){
    backgroundImage.src = getCookieByName('background');
}




function parseCookie() {
    let cookieObj = {};
    let cookieAry = document.cookie.split(';');
    let cookie;
    
    for (let i=0, l=cookieAry.length; i<l; ++i) {
        if(cookieAry[i].includes('=')){
        cookie = cookieAry[i].split('=');
        cookieObj[cookie[0]] = cookie[1];
        }
    }
    return cookieObj;
}

function getCookieByName(name) {
    let value = parseCookie()[name];
    if (value) 
        value = decodeURIComponent(value);
    return value;
}