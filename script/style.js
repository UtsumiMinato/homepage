let backgroundFile = document.querySelector('#background-flie');
let applyBtn = document.querySelector('.side-menu-apply');
let cancleBtn = document.querySelector('.side-menu-cancle');
let backgroundImage = document.querySelector('#background-image');
let languageSelect = document.querySelector('#language-select').value + '';

function valueChange(){
    languageSelect = document.querySelector('#language-select').value + '';
}


applyBtn.addEventListener('click',() => {
    if (backgroundFile.value.length != 0){
        backgroundSet();
    }
    languageSet(languageSelect)
})

cancleBtn.addEventListener('click',() => {
    sideMenu.style.transform="translateX(-100%)"; 
    clockClickNum +=1;
})


function backgroundSet(){
        let backgroundPath = '../background/' + backgroundFile.value.split('\\')[2];
        backgroundImage.src = backgroundPath;
        document.cookie =  `background=${backgroundPath}; expires=Tue, 19 Jan 2038 03:14:07 GMT;`;
}


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
    constructor(backgroundTitle, selectIimagetitle, languageTitle, fontFamilytitle,searchEnginetitle, searchFont, cancleFont, applyFont){
        this.backgroundTitle = backgroundTitle;
        this.selectIimageTitle = selectIimagetitle;
        this.languageTitle = languageTitle;
        this.fontFamilyTitle = fontFamilytitle;
        this.searchEngineTitle = searchEnginetitle;
        this.searchFont = searchFont;
        this.cancleFont = cancleFont;
        this.applyFont = applyFont;
    }
    
}

var chineseTraditional = new language ('背景:', '選擇圖片', '語言:', '字型:', '搜尋引擎:','使用 Google 搜尋或輸入網址','取消','套用')
var japanese = new language ('壁紙：', '画像を選択', '言語:', 'フォント:', '検索エンジン:', 'Google で検索、または URL を入力します', 'キャンセル', 'アプライ')
var englishUs = new language ('Wallpaper:', 'Select image', 'Language:', 'Fonts:', 'Search engine:', 'Search with Google or enter address', 'cancle', 'apply')



function chineseTraditionalSet(){
    backgroundTitlefont.innerText = chineseTraditional.backgroundTitle;
    selectIimageTitlefont.innerText = chineseTraditional.selectIimageTitle;
    languageTitlefont.innerText = chineseTraditional.languageTitle;
    searchEngineTitlefont.innerText = chineseTraditional.searchEngineTitle;
    serachFont.placeholder = chineseTraditional.searchFont;
    applyBtn.innerText = chineseTraditional.applyFont;
    cancleBtn.innerText = chineseTraditional.cancleFont;
    chineseTraditionalOption.selected=true
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
    japaneseOption.selected = true
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
    englishUsOption.selected = true
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
            console.log('Language setting error');
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

let backgroundName = document.querySelector('#background-name')


function changeFileName(){
    document.querySelector('#background-name').innerText = 'File：' + backgroundFile.value.split('\\')[2];
}


function config(){
    languageSet(window.navigator.language);
    if (document.cookie.length > 0){
        languageSet(getCookie('language'));
    }
    backgroundImage.src = getCookie('background');
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }



