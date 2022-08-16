let backgroundFile = document.querySelector('#background-flie');
let applyBtn = document.querySelector('.side-menu-apply');
let cancleBtn = document.querySelector('.side-menu-cancle');
let backgroundImage = document.querySelector('#background-image');
let languageSelect = document.querySelector('#language-select').value + '';
let nowLanguage = languageSelect;


function valueChange(){
    languageSelect = document.querySelector('#language-select').value + '';
    searchEngine = document.querySelector('#search-engine-select').value;
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

applyBtn.addEventListener('click',() => {
    if (backgroundFile.value.length != 0){
        backgroundSet();
    }
    languageSet(languageSelect)
})

cancleBtn.addEventListener('click',() => {
    sideMenu.style.transform="translateX(-103%)"; 
    clockClickNum +=1;
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




class language {
    constructor(backgroundTitle, selectIimagetitle, languageTitle, fontFamilytitle,searchEnginetitle, searchFont, cancleFont, applyFont,monthFont, dateFont ,dayFont){
        this.backgroundTitle = backgroundTitle;
        this.selectIimageTitle = selectIimagetitle;
        this.languageTitle = languageTitle;
        this.fontFamilyTitle = fontFamilytitle;
        this.searchEngineTitle = searchEnginetitle;
        this.searchFont = searchFont;
        this.cancleFont = cancleFont;
        this.applyFont = applyFont;
        this.monthFont = monthFont;
        this.dateFont = dateFont;
        this.dayFont = dayFont;
    }
    
}

var chineseTraditional = new language ('背景:', '選擇圖片', '語言:', '字型:', '搜尋引擎:','使用 Google 搜尋或輸入網址','取消','套用','月','日',['星期日','星期一', '星期二', '星期三', '星期四', '星期五', '星期六'])
var japanese = new language ('壁紙：', '画像を選択', '言語:', 'フォント:', '検索エンジン:', 'Google で検索、または URL を入力します', 'キャンセル', 'アプライ','月','日', ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'])
var englishUs = new language ('Wallpaper:', 'Select image', 'Language:', 'Fonts:', 'Search engine:', 'Search with Google or enter address', 'cancle', 'apply','/','',['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday'])



function chineseTraditionalSet(){
    backgroundTitlefont.innerText = chineseTraditional.backgroundTitle;
    selectIimageTitlefont.innerText = chineseTraditional.selectIimageTitle;
    languageTitlefont.innerText = chineseTraditional.languageTitle;
    searchEngineTitlefont.innerText = chineseTraditional.searchEngineTitle;
    serachFont.placeholder = chineseTraditional.searchFont;
    applyBtn.innerText = chineseTraditional.applyFont;
    cancleBtn.innerText = chineseTraditional.cancleFont;
    chineseTraditionalOption.selected=true;
    languageSelect = 'chineseTraditional';
    nowLanguage = 'chineseTraditional';
    document.cookie = `language=chineseTraditional; expires=Tue, 19 Jan 2038 03:14:07 GMT;`;
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
    document.cookie = `language=japanese; expires=Tue, 19 Jan 2038 03:14:07 GMT;`;
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
    document.cookie = `language=englishUs; expires=Tue, 19 Jan 2038 03:14:07 GMT;`;
}
function languageSet(language){
    if(document.cookie.length === 0){
        
        if(language === 'zh-TW'){
            console.log('自動辨識中文');
            chineseTraditionalSet();
            
        }
        else if (language === 'ja'){
            console.log('自動辨識ja');
            japaneseSet();
            
            
        }
        else if (language === 'en'){
            console.log('自動辨識en');
            englishUsSet();
            
        }
        else{
            englishUsSet();
        }
    }
    else{
        if (language === 'chineseTraditional'){
            chineseTraditionalSet();
        }
        else if(language === 'japanese'){
            japaneseSet();
        }
        else if(language === 'englishUs'){
            englishUsSet();
        }
        else{
            console.log('Language automatic setting completed');
        }
    }
}

let backgroundName = document.querySelector('#background-name');


function changeFileName(){
    document.querySelector('#background-name').innerText = 'File：' + backgroundFile.value.split('\\')[2];
}

let siteMenu = document.querySelector('#site-menu');
let siteMenuSwitch = document.querySelector('#site-menu-switch').checked;

function settingSiteMenu(){
    siteMenuSwitch = document.querySelector('#site-menu-switch').checked;
    if(siteMenuSwitch === true){
        siteMenu.style.display = 'flex';
        document.cookie = `siteMenu=true; expires=Tue, 19 Jan 2038 03:14:07 GMT;`;
    }
    else if (siteMenuSwitch === false){
        siteMenu.style.display = 'none';
        document.cookie = `siteMenu=false; expires=Tue, 19 Jan 2038 03:14:07 GMT;`;
    }
}

function siteMenuConfig(siteMenuStatus){
    if (siteMenuStatus === 'true'){
        siteMenu.style.display = 'flex';
        document.cookie = `siteMenu=true; expires=Tue, 19 Jan 2038 03:14:07 GMT;`;
        document.querySelector('#site-menu-switch').checked = true;
    }
    else if (siteMenuStatus === 'false'){
        siteMenu.style.display = 'none';
        document.cookie = `siteMenu=false; expires=Tue, 19 Jan 2038 03:14:07 GMT;`;
    }
}



function setSite(num){
    document.querySelector(`#site-name-show-${num}`).innerText = document.querySelector(`#site-name-${num}`).value;
    document.querySelector(`#site-url-${num}`).href = document.querySelector(`#site-url-input-${num}`).value;
    document.cookie = `sitename${num} = ${document.querySelector(`#site-name-${num}`).value}; expires=Tue, 19 Jan 2038 03:14:07 GMT;`;
    document.cookie = `siteurl${num} = ${document.querySelector(`#site-url-input-${num}`).value}; expires=Tue, 19 Jan 2038 03:14:07 GMT;`;
}





function config(){
    languageSet(window.navigator.language);
    if (document.cookie.length > 0){
        languageSet(getCookie('language'));
        siteMenuConfig(getCookie('siteMenu'));
    }

    for (i = 1; i<5; i++){
        if (getCookie(`sitename${i}`) != undefined){
            document.querySelector(`#site-name-show-${i}`).innerText = getCookie(`sitename${i}`);
            document.querySelector(`#site-url-${i}`).href = getCookie(`siteurl${i}`);
        }
    }
    
    if (localStorage.getItem('background') != undefined){
        backgroundImage.src = localStorage.getItem('background');
    }
    
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }



