let backgroundFile = document.querySelector('#background-flie');
let applyBtn = document.querySelector('.side-menu-apply');
let cancleBtn = document.querySelector('.side-menu-cancle');
let backgroundImage = document.querySelector('#background-image');
let languageSelect = document.querySelector('#language-select').value + '';

function valueChange(){
    languageSelect = document.querySelector('#language-select').value + '';
}


applyBtn.addEventListener('click',() => {
    languageSet(languageSelect);
    backgroundSet();
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


//font setting
let backgroundTitlefont = document.querySelector('#background-title');
let selectIimageTitlefont = document.querySelector('#select-image-title');
let languageTitlefont = document.querySelector('#language-title');
let fontFamilyTitlefont = document.querySelector('#font-family-title');
let searchEngineTitlefont = document.querySelector('#search-engine-title');


class language {
    constructor(backgroundTitle, selectIimagetitle, languageTitle, fontFamilytitle,searchEnginetitle){
        this.backgroundTitle = backgroundTitle;
        this.selectIimageTitle = selectIimagetitle;
        this.languageTitle = languageTitle;
        this.fontFamilyTitle = fontFamilytitle;
        this.searchEngineTitle = searchEnginetitle;
    }
    
}

var chineseTraditional = new language ('背景:', '選擇圖片:', '語言:', '字型:', '搜尋引擎:')
var japanese = new language ('壁紙：', '画像を選択:', '言語:', 'フォント:', '検索エンジン:')
var englishUS = new language ('Wallpaper:', 'Select image:', 'Language:', 'Fonts:', 'Search engine:')



function chineseTraditionalSet(){
    backgroundTitlefont.innerText = chineseTraditional.backgroundTitle;
    selectIimageTitlefont.innerText = chineseTraditional.selectIimageTitle;
    languageTitlefont.innerText = chineseTraditional.languageTitle;
    fontFamilyTitlefont.innerText = chineseTraditional.fontFamilyTitle;
    searchEngineTitlefont.innerText = chineseTraditional.searchEngineTitle;
    document.cookie = `language=chineseTraditionalSet; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
}

function japaneseSet(){
    backgroundTitlefont.innerText = japanese.backgroundTitle;
    selectIimageTitlefont.innerText = japanese.selectIimageTitle;
    languageTitlefont.innerText = japanese.languageTitle;
    fontFamilyTitlefont.innerText = japanese.fontFamilyTitle;
    searchEngineTitlefont.innerText = japanese.searchEngineTitle;
    document.cookie = `language=japaneseSet; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
}

function engineUSSet(){
    backgroundTitlefont.innerText = englishUS.backgroundTitle;
    selectIimageTitlefont.innerText = englishUS.selectIimageTitle;
    languageTitlefont.innerText = englishUS.languageTitle;
    fontFamilyTitlefont.innerText = englishUS.fontFamilyTitle;
    searchEngineTitlefont.innerText = englishUS.searchEngineTitle;
    document.cookie = `language=engineUSSet; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
}

function languageSet(language){
    if (language === 'chineseTraditionalSet'){
        chineseTraditionalSet();
    }
    else if(language === 'japaneseSet'){
        japaneseSet();
    }
    else if(language === 'engineUsSet'){
        engineUSSet();
    }
    else{
        console.log('LanguageSettingError!!!')
    }
}


function config(){
    languageSet(getCookieByName('language'));
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
