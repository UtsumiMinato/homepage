// var requestURL = '../style/style.JSON';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send(null);
// request.onload = function() {
//     var styleData = request.response;
//     backgroundSet(styleData)
//   }




let backgroundFile = document.querySelector('#background-flie');
let applyBtn = document.querySelector('.side-menu-apply');
let backgroundImage = document.querySelector('#background-image');






applyBtn.addEventListener('click',() => {
    backgroundSet()
})




function backgroundSet(){
    let backgroundPath = '../background/' + backgroundFile.files[0]['name'];
    backgroundImage.attributes[1].value = backgroundPath;
    document.cookie =  `background=${backgroundPath}; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
}






function config(){
    backgroundImage.attributes[1].value = getCookieByName('background');
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