let backgroundFile = document.querySelector('#background-flie');
let applyBtn = document.querySelector('.side-menu-apply');
let cancleBtn = document.querySelector('.side-menu-cancle');
let backgroundImage = document.querySelector('#background-image');
let languageSelect = document.querySelector('#language-select').value + '';
let backgroundBlur = document.querySelector('#bg-m');
let backgroundBlurValue = document.querySelector('#background-blur-value');
let backgroundSettingResetBtn = document.querySelector('#background-setting-reset-btn');

function valueChange(){
    languageSelect = document.querySelector('#language-select').value + '';
    searchEngine = document.querySelector('#search-engine-select').value;
    backgroundBlurValue = document.querySelector('#background-blur-value');
}

function backgroundSet() {
    var preview = backgroundImage;
    var file    = backgroundFile.files[0];
    var reader  = new FileReader();
  
    reader.addEventListener("load", function () {
        localStorage.setItem('background',`${reader.result}`);
        preview.src = reader.result;
    }, false);
  
    
        reader.readAsDataURL(file);
    
  }

function backgroundBlurSet(){
    backgroundBlur.style.backdropFilter = `blur(${backgroundBlurValue.value}px)`;
    document.cookie = `backgroundBlur=${backgroundBlurValue.value}; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
}

applyBtn.addEventListener('click',() => {
    if (backgroundFile.value.length != 0){
        backgroundSet();
    }
    
    backgroundBlurSet()

    
    languageSet(languageSelect)
})

cancleBtn.addEventListener('click',() => {
    sideMenu.style.transform="translateX(-103%)"; 
    clockClickNum +=1;
})

backgroundSettingResetBtn.addEventListener('click',()=>{
    document.cookie = `backgroundBlur=0.7; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
    backgroundBlur.style.backdropFilter = `blur(0.7px)`;
    backgroundImage.src = './/background//andre-benz-cXU6tNxhub0-unsplash-1080.jpg';
    localStorage.removeItem('background');
})



//font setting
let backgroundTitlefont = document.querySelector('#background-title');
let selectIimageTitlefont = document.querySelector('#select-image-title');
let languageTitlefont = document.querySelector('#language-title');
let fontFamilyTitlefont = document.querySelector('#font-family-title');
let searchEngineTitlefont = document.querySelector('#search-engine-title');
let serachFont = document.querySelector('#search');
let chineseTraditionalOption = document.querySelector('#chineseTraditionalSet');
let japaneseOption = document.querySelector('#japaneseSet');
let englishUsOption = document.querySelector('#englishUsSet');
let linkMenuTitleFont = document.querySelector('#link-menu-title');
let linkMenuSwitchTitleFont = document.querySelector('#link-menu-switch-title');
let linkMenuSettingTitleFont = document.querySelector('#link-menu-setting-title');
let siteName = document.querySelectorAll('.site-name');
let siteEditBtn = document.querySelectorAll('.site-edit');
let backgroundBlurText = document.querySelector('#background-blur-text');
let resetBtn = document.querySelector('#background-setting-reset-btn');
// class language {
//     constructor(backgroundTitle, selectIimagetitle, languageTitle, fontFamilytitle,searchEnginetitle, searchFont, cancleFont, applyFont,monthFont, dateFont ,dayFont ,linkMenuTitle ,linkMenuSettingTitle, siteName, siteSettingBtn){
//         this.backgroundTitle = backgroundTitle;
//         this.selectIimageTitle = selectIimagetitle;
//         this.languageTitle = languageTitle;
//         this.fontFamilyTitle = fontFamilytitle;
//         this.searchEngineTitle = searchEnginetitle;
//         this.searchFont = searchFont;
//         this.cancleFont = cancleFont;
//         this.applyFont = applyFont;
//         this.monthFont = monthFont;
//         this.dateFont = dateFont;
//         this.dayFont = dayFont;
//         this.linkMenuTitle = linkMenuTitle;
//         this.linkMenuSettingTitle = linkMenuSettingTitle;
//         this.siteName = siteName;
//         this.siteSettingBtn = siteSettingBtn;
//     }
    
// }

// var chineseTraditional = new language ('??????:', '????????????', '??????:', '??????:', '????????????:','?????? Google ?????????????????????','??????','??????','???','???',['?????????','?????????', '?????????', '?????????', '?????????', '?????????', '?????????'],'??????:','????????????:','????????????:', '??????');
// var japanese = new language ('?????????', '???????????????', '??????:', '????????????:', '??????????????????:', 'Google ????????????????????? URL ??????????????????', '???????????????', '????????????','???','???', ['?????????','?????????','?????????','?????????','?????????','?????????','?????????'],'?????????????????????:', '???????????????????????????:','??????:','??????');
// var englishUs = new language ('Wallpaper:', 'Select image', 'Language:', 'Fonts:', 'Search engine:', 'Search with Google or enter address', 'cancle', 'apply','/','',['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday'],'Shortcut:', 'Shortcut setting:', 'Name:','Done');



var chineseTraditional = {
        'backgroundTitle':'??????:',
        'selectIimageTitle':'????????????',
        'languageTitle':'??????:',
        'fontFamilyTitle':'??????:',
        'searchEngineTitle':'????????????:',
        'searchFont':'?????? Google ?????????????????????',
        'cancleFont':'??????',
        'applyFont':'??????',
        'monthFont':'???',
        'dateFont': '???',
        'dayFont':['?????????','?????????', '?????????', '?????????', '?????????', '?????????', '?????????'],
        'linkMenuTitle':'??????:',
        'linkMenuSettingTitle':'????????????:',
        'siteNameFont':'??????:',
        'siteSettingBtnFont':'??????',
        'backgroundBlurTextFont':'?????????',
        'resetFont':'??????',
    }
var japanese = {
        'backgroundTitle':'?????????',
        'selectIimageTitle': '???????????????',
        'languageTitle': '??????:', 
        'fontFamilyTitle':'????????????:',
        'searchEngineTitle': '??????????????????:', 
        'searchFont':'Google ????????????????????? URL ??????????????????',
        'cancleFont':'???????????????',
        'applyFont':'????????????',
        'monthFont':'???',
        'dateFont':'???',
        'dayFont':['?????????','?????????','?????????','?????????','?????????','?????????','?????????'],
        'linkMenuTitle':'?????????????????????:',
        'linkMenuSettingTitle': '???????????????????????????:',
        'siteNameFont':'??????:',
        'siteSettingBtnFont':'??????',
        'backgroundBlurTextFont':'????????????',
        'resetFont':'????????????',
    }
var englishUs = {
        'backgroundTitle':'Wallpaper:',
        'selectIimageTitle':'Select image',
        'languageTitle':'Language:', 
        'fontFamilyTitle':'Fonts:',
        'searchEngineTitle':'Search engine:',
        'searchFont':'Search with Google or enter address',
        'cancleFont': 'cancle',
        'applyFont': 'apply',
        'monthFont':'/',
        'dateFont':'',
        'dayFont':['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday'],
        'linkMenuTitle':'Shortcut:', 
        'linkMenuSettingTitle': 'Shortcut setting:',
        'siteNameFont': 'Name:',
        'siteSettingBtnFont':'Done',
        'backgroundBlurTextFont':'Blur',
        'resetFont':'Reset',
    }


function chineseTraditionalSet(){
    backgroundTitlefont.innerText = chineseTraditional.backgroundTitle;
    selectIimageTitlefont.innerText = chineseTraditional.selectIimageTitle;
    languageTitlefont.innerText = chineseTraditional.languageTitle;
    searchEngineTitlefont.innerText = chineseTraditional.searchEngineTitle;
    serachFont.placeholder = chineseTraditional.searchFont;
    applyBtn.innerText = chineseTraditional.applyFont;
    cancleBtn.innerText = chineseTraditional.cancleFont;
    chineseTraditionalOption.selected=true; //??????????????????
    languageSelect = 'chineseTraditional'; //???????????????????????????
    nowLanguage = 'chineseTraditional';
    linkMenuTitleFont.innerText = chineseTraditional.linkMenuTitle;
    linkMenuSwitchTitleFont.innerText = chineseTraditional.linkMenuTitle;
    linkMenuSettingTitleFont.innerText = chineseTraditional.linkMenuSettingTitle;
    backgroundBlurText.innerText = chineseTraditional.backgroundBlurTextFont;
    resetBtn.innerText = chineseTraditional.resetFont;
    for (i=0;i<4;i++){
        siteName[i].placeholder = chineseTraditional.siteNameFont;
    }
    for (i=0;i<4;i++){
        siteEditBtn[i].innerText = chineseTraditional.siteSettingBtnFont;
    }
    
    document.cookie = `language=chineseTraditional; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
}

function japaneseSet(){
    backgroundTitlefont.innerText = japanese.backgroundTitle;
    selectIimageTitlefont.innerText = japanese.selectIimageTitle;
    languageTitlefont.innerText = japanese.languageTitle;
    searchEngineTitlefont.innerText = japanese.searchEngineTitle;
    serachFont.placeholder = japanese.searchFont;
    applyBtn.innerText = japanese.applyFont;
    cancleBtn.innerText = japanese.cancleFont;
    japaneseOption.selected = true;
    languageSelect = 'japanese';
    nowLanguage = 'japanese';
    linkMenuTitleFont.innerText = japanese.linkMenuTitle;
    linkMenuSwitchTitleFont.innerText = japanese.linkMenuTitle;
    linkMenuSettingTitleFont.innerText = japanese.linkMenuSettingTitle;
    backgroundBlurText.innerText = japanese.backgroundBlurTextFont;
    resetBtn.innerText = japanese.resetFont;
    for (i=0;i<4;i++){
        siteName[i].placeholder = japanese.siteNameFont;
    }
    for (i=0;i<4;i++){
        siteEditBtn[i].innerText = japanese.siteSettingBtnFont;
    }
    document.cookie = `language=japanese; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
}

function englishUsSet(){
    backgroundTitlefont.innerText = englishUs.backgroundTitle;
    selectIimageTitlefont.innerText = englishUs.selectIimageTitle;
    languageTitlefont.innerText = englishUs.languageTitle;
    searchEngineTitlefont.innerText = englishUs.searchEngineTitle;
    serachFont.placeholder = englishUs.searchFont;
    applyBtn.innerText = englishUs.applyFont;
    cancleBtn.innerText = englishUs.cancleFont;
    englishUsOption.selected = true;
    languageSelect = 'englishUs';
    nowLanguage = 'englishUs';
    linkMenuTitleFont.innerText = englishUs.linkMenuTitle;
    linkMenuSwitchTitleFont.innerText = englishUs.linkMenuTitle;
    linkMenuSettingTitleFont.innerText = englishUs.linkMenuSettingTitle;
    backgroundBlurText.innerText = englishUs.backgroundBlurTextFont;
    resetBtn.innerText = englishUs.resetFont;
    for (i=0;i<4;i++){
        siteName[i].placeholder = englishUs.siteNameFont;
    }
    for (i=0;i<4;i++){
        siteEditBtn[i].innerText = englishUs.siteSettingBtnFont;
    }
    document.cookie = `language=englishUs; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
}
function languageSet(language){
    if(document.cookie.length === 0){

        switch (language){
            case 'zh-TW':
                console.log('??????????????????');
                chineseTraditionalSet();
                break;

            case 'ja':
                console.log('????????????ja');
                japaneseSet();
                break;

            case 'en':
                console.log('????????????en');
                englishUsSet();
            
            default:
                englishUsSet();
        }

    }
    else{
        switch(language){
            case 'chineseTraditional':
                chineseTraditionalSet();
            break;

            case 'japanese':
                japaneseSet();
            break;

            case 'englishUs':
                englishUsSet();
            break;

            default:
                console.log('Language automatic setting completed');

        }
    }
}

let backgroundName = document.querySelector('#background-name');


function changeFileName(){
    document.querySelector('#background-name').innerText = 'File???' + backgroundFile.value.split('\\')[2];
}

let siteMenu = document.querySelector('#site-menu');
let siteMenuSwitch = document.querySelector('#site-menu-switch').checked;
let linkSettingMenu = document.querySelector('#link-setting-menu');


function settingSiteMenu(){
    siteMenuSwitch = document.querySelector('#site-menu-switch').checked;
    if(siteMenuSwitch === true){
        siteMenu.style.display = 'flex';
        linkSettingMenu.style.display = '';
        document.cookie = `linkSettingMenu=''; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
        document.cookie = `siteMenu=true; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
    }
    else if (siteMenuSwitch === false){
        siteMenu.style.display = 'none';
        linkSettingMenu.style.display = 'none';
        document.cookie = `linkSettingMenu=none; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
        document.cookie = `siteMenu=false; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
    }
}

function siteMenuConfig(siteMenuStatus){
    if (siteMenuStatus === 'true'){
        siteMenu.style.display = 'flex';
        document.cookie = `siteMenu=true; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
        document.querySelector('#site-menu-switch').checked = true;
    }
    else if (siteMenuStatus === 'false'){
        siteMenu.style.display = 'none';
        document.cookie = `siteMenu=false; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
    }
}



function setSite(num){
    document.querySelector(`#site-name-show-${num}`).innerText = document.querySelector(`#site-name-${num}`).value;
    document.querySelector(`#site-url-${num}`).href = document.querySelector(`#site-url-input-${num}`).value;
    document.cookie = `sitename${num} = ${document.querySelector(`#site-name-${num}`).value}; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
    document.cookie = `siteurl${num} = ${document.querySelector(`#site-url-input-${num}`).value}; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
}





function config(){
    var nowLanguage = '';
    languageSet(window.navigator.language);
    if (document.cookie.length > 0){//????????????
        languageSet(getCookie('language'));
        siteMenuConfig(getCookie('siteMenu'));
    }

    for (i = 1; i<5; i++){
        if (getCookie(`sitename${i}`) != undefined){//???????????????????????????
            document.querySelector(`#site-name-show-${i}`).innerText = getCookie(`sitename${i}`);
            document.querySelector(`#site-url-${i}`).href = getCookie(`siteurl${i}`);
        }
    }

    if (getCookie('linkSettingMenu') != undefined){
        linkSettingMenu.style.display = getCookie('linkSettingMenu');
    }
    else if (getCookie('linkSettingMenu') != undefined === false){
        linkSettingMenu.style.display = 'none';
    }

    if (getCookie('backgroundBlur') != undefined){//?????????????????????
        backgroundBlur.style.backdropFilter = `Blur(${getCookie('backgroundBlur')}px)`;
        backgroundBlurValue.value = `${getCookie('backgroundBlur')}`;
    }
    else if(getCookie('backgroundBlur') != undefined === false){
        backgroundBlurValue.value = `0.7`;
    }
    
    if (localStorage.getItem('background') != undefined){//??????????????????
        backgroundImage.src = localStorage.getItem('background');
    }
    else {
        backgroundImage.src = './/background//tianshu-liu-aqZ3UAjs_M4-unsplash.jpg';
    }

    

    
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }



