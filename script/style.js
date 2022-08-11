let backgroundFile = document.querySelector('#background-flie');
let applyBtn = document.querySelector('.side-menu-apply');
let cancleBtn = document.querySelector('.side-menu-cancle');
let backgroundImage = document.querySelector('#background-image');
let languageSelect = document.querySelector('#language-select').value + '';

function valueChange(){
    languageSelect = document.querySelector('#language-select').value + '';
}


applyBtn.addEventListener('click',() => {
    languageSet(languageSelect)
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
let serachFont = document.querySelector('#search');




class language {
    constructor(backgroundTitle, selectIimagetitle, languageTitle, fontFamilytitle,searchEnginetitle, searchFont, cancle, apply){
        this.backgroundTitle = backgroundTitle;
        this.selectIimageTitle = selectIimagetitle;
        this.languageTitle = languageTitle;
        this.fontFamilyTitle = fontFamilytitle;
        this.searchEngineTitle = searchEnginetitle;
        this.searchFont = searchFont;
        this.cancle = cancle;
        this.apply = apply;
    }
    
}

var chineseTraditional = new language ('背景:', '選擇圖片:', '語言:', '字型:', '搜尋引擎:','使用 Google 搜尋或輸入網址','取消','套用')
var japanese = new language ('壁紙：', '画像を選択:', '言語:', 'フォント:', '検索エンジン:', 'Google で検索、または URL を入力します', 'キャンセル', 'アプライ')
var englishUS = new language ('Wallpaper:', 'Select image:', 'Language:', 'Fonts:', 'Search engine:', 'Search with Google or enter address', 'cancle', 'apply')



function chineseTraditionalSet(){
    backgroundTitlefont.innerText = chineseTraditional.backgroundTitle;
    selectIimageTitlefont.innerText = chineseTraditional.selectIimageTitle;
    languageTitlefont.innerText = chineseTraditional.languageTitle;
    fontFamilyTitlefont.innerText = chineseTraditional.fontFamilyTitle;
    searchEngineTitlefont.innerText = chineseTraditional.searchEngineTitle;
    serachFont.placeholder = chineseTraditional.searchFont;
    applyBtn.innnerText = chineseTraditional.apply;
    cancleBtn.innnerText = chineseTraditional.cancle;
    // document.querySelector('#chineseTraditionalSet').selected = selected;
    document.cookie = `language=chineseTraditional; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
}

function japaneseSet(){
    backgroundTitlefont.innerText = japanese.backgroundTitle;
    selectIimageTitlefont.innerText = japanese.selectIimageTitle;
    languageTitlefont.innerText = japanese.languageTitle;
    fontFamilyTitlefont.innerText = japanese.fontFamilyTitle;
    searchEngineTitlefont.innerText = japanese.searchEngineTitle;
    serachFont.placeholder = japanese.searchFont;
    applyBtn.innnerText = japanese.apply;
    cancleBtn.innnerText = japanese.cancle;
    // document.querySelector('#japaneseSet').selected = selected;
    document.cookie = `language=japanese; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
}

function engineUSSet(){
    backgroundTitlefont.innerText = englishUS.backgroundTitle;
    selectIimageTitlefont.innerText = englishUS.selectIimageTitle;
    languageTitlefont.innerText = englishUS.languageTitle;
    fontFamilyTitlefont.innerText = englishUS.fontFamilyTitle;
    searchEngineTitlefont.innerText = englishUS.searchEngineTitle;
    serachFont.placeholder = englishUS.searchFont;
    applyBtn.innnerText = englishUS.apply;
    cancleBtn.innnerText = englishUS.cancle;
    // document.querySelector('#engineUsSet').selected = selected;
    document.cookie = `language=engineUs; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
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
            engineUSSet();
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
        else if(language === 'engineUs'){
            engineUSSet();
        }
        else{
            console.log('Language automatic setting completed');
        }
    }
}



function config(){
    languageSet(window.navigator.language);
    if (document.cookie.length > 0){
        languageSet(languageSelect);
    }
    backgroundImage.src = getCookie('background');
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }



