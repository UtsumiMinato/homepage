let backgroundFile = document.querySelector('#background-flie');
let applyBtn = document.querySelector('.side-menu-apply');
let cancleBtn = document.querySelector('.side-menu-cancle');
let backgroundImage = document.querySelector('#background-image');
let languageSelect = document.querySelector('#language-select').value + '';
let backgroundBlur = document.querySelector('#bg-m');
let backgroundBlurValue = document.querySelector('#background-blur-value');
let backgroundSettingResetBtn = document.querySelector('#background-setting-reset-btn');

let setCookie = (key, value)=>{
    document.cookie = `${key}=${value}; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
}

function valueChange(){
    languageSelect = document.querySelector('#language-select').value + '';
    searchEngine = document.querySelector('#search-engine-select').value;
    backgroundBlurValue = document.querySelector('#background-blur-value');
    switch (nowLanguage){
        case 'chineseTraditional':
            serachFont.placeholder = `使用 ${searchEngine} 搜尋或輸入網址`;
            console.log(nowLanguage);
            break;
        case 'japanese':
            serachFont.placeholder = `${document.querySelector('#search-engine-select').value} で検索、または URL を入力します`;
            console.log(nowLanguage);
            break;
        case 'englishUs':
            serachFont.placeholder = `Search with ${searchEngine} or enter address`;
            console.log(nowLanguage);
            break;
    }
    
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
    setCookie('backgroundBlur', backgroundBlurValue.value);
}

applyBtn.addEventListener('click',() => {
    if (backgroundFile.value.length != 0){
        backgroundSet();
    }
    
    backgroundBlurSet();

    
    languageSet(languageSelect);

    setClockFontColor();

    setDateFontColor();

})

cancleBtn.addEventListener('click',() => {
    sideMenu.style.transform="translateX(-103%)"; 
    clockClickNum +=1;
})

backgroundSettingResetBtn.addEventListener('click',()=>{
    setCookie('backgroundBlur', '2.5');
    backgroundBlur.style.backdropFilter = `blur(2.5px)`;
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
let backgroundResetBtn = document.querySelector('#background-setting-reset-btn');
let themeResetBtn = document.querySelector('#theme-color-reset-btn');
let themeTitle = document.querySelector('#font-color-setting-title');
let fontColorClock = document.querySelector('#font-color-setting-clock-title');
let fontColorDate = document.querySelector('#font-color-setting-date-title');
let languageTitleP = document.querySelector('#language-title-p');
let searchEngineTitleP = document.querySelector('#search-engine-title-p');
themeResetBtn.addEventListener('click', ()=>{
    setCookie('ClockColor', '#f0f8ff');
    setCookie('DateColor', '#f0f8ff');
})



var chineseTraditional = {
        'backgroundTitle':'背景:',
        'selectIimageTitle':'選擇圖片',
        'languageTitle':'語言:',
        'fontFamilyTitle':'字型:',
        'searchEngineTitle':'搜尋引擎:',
        'searchEngineTitleP':'搜尋引擎',
        'languageTitleP':'語言',
        'searchFont':`使用 ${searchEngine} 搜尋或輸入網址`,
        'cancleFont':'取消',
        'applyFont':'套用',
        'monthFont':'月',
        'dateFont': '日',
        'dayFont':['星期日','星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        'linkMenuTitle':'捷徑:',
        'linkMenuSettingTitle':'捷徑設定:',
        'siteNameFont':'名稱:',
        'siteSettingBtnFont':'確定',
        'backgroundBlurTextFont':'模糊度',
        'resetFont':'重設',
        'theme':'主題',
        'fontColorClockFont' : '時鐘',
        'fontColorDateFont' : '日期',
    }
var japanese = {
        'backgroundTitle':'壁紙：',
        'selectIimageTitle': '画像を選択',
        'languageTitle': '言語:', 
        'fontFamilyTitle':'フォント:',
        'searchEngineTitle': '検索エンジン:',
        'searchEngineTitleP':'検索エンジン',
        'languageTitleP':'言語', 
        'searchFont':`${document.querySelector('#search-engine-select').value} で検索、または URL を入力します`,
        'cancleFont':'キャンセル',
        'applyFont':'アプライ',
        'monthFont':'月',
        'dateFont':'日',
        'dayFont':['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
        'linkMenuTitle':'ショートカット:',
        'linkMenuSettingTitle': 'ショートカット設定:',
        'siteNameFont':'名前:',
        'siteSettingBtnFont':'設定',
        'backgroundBlurTextFont':'ぼかし度',
        'resetFont':'リセット',
        'theme':'テーマ：',
        'fontColorClockFont' : '時計',
        'fontColorDateFont' : '日付',
    }
var englishUs = {
        'backgroundTitle':'Wallpaper:',
        'selectIimageTitle':'Select image',
        'languageTitle':'Language:', 
        'fontFamilyTitle':'Fonts:',
        'searchEngineTitle':'Search engine:',
        'searchEngineTitleP':'Search engine',
        'languageTitleP':'Language',
        'searchFont':`Search with ${searchEngine} or enter address`,
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
        'theme':'theme：',
        'fontColorClockFont' : 'Clock',
        'fontColorDateFont' : 'Date',
    }


function chineseTraditionalSet(){
    backgroundTitlefont.innerText = chineseTraditional.backgroundTitle;
    selectIimageTitlefont.innerText = chineseTraditional.selectIimageTitle;
    languageTitlefont.innerText = chineseTraditional.languageTitle;
    searchEngineTitlefont.innerText = chineseTraditional.searchEngineTitle;
    serachFont.placeholder = chineseTraditional.searchFont;
    applyBtn.innerText = chineseTraditional.applyFont;
    cancleBtn.innerText = chineseTraditional.cancleFont;
    chineseTraditionalOption.selected=true; //預選繁體中文
    languageSelect = 'chineseTraditional'; //設定選項為繁體中文
    nowLanguage = 'chineseTraditional';
    linkMenuTitleFont.innerText = chineseTraditional.linkMenuTitle;
    linkMenuSwitchTitleFont.innerText = chineseTraditional.linkMenuTitle;
    linkMenuSettingTitleFont.innerText = chineseTraditional.linkMenuSettingTitle;
    backgroundBlurText.innerText = chineseTraditional.backgroundBlurTextFont;
    backgroundResetBtn.innerText = chineseTraditional.resetFont;
    themeResetBtn.innerText = chineseTraditional.resetFont;
    themeTitle.innerText = chineseTraditional.theme;
    fontColorClock.innerText = chineseTraditional.fontColorClockFont;
    fontColorDate.innerText = chineseTraditional.fontColorDateFont;
    languageTitleP.innerText = chineseTraditional.languageTitleP;
    searchEngineTitleP.innerText = chineseTraditional.searchEngineTitleP;
    for (i=0;i<4;i++){
        siteName[i].placeholder = chineseTraditional.siteNameFont;
    }
    for (i=0;i<4;i++){
        siteEditBtn[i].innerText = chineseTraditional.siteSettingBtnFont;
    }
    
    setCookie('language', 'chineseTraditional');
}

function japaneseSet(){
    backgroundTitlefont.innerText = japanese.backgroundTitle;
    selectIimageTitlefont.innerText = japanese.selectIimageTitle;
    languageTitlefont.innerText = japanese.languageTitle;
    searchEngineTitlefont.innerText = japanese.searchEngineTitle;
    serachFont.placeholder = `${document.querySelector('#search-engine-select').value} で検索、または URL を入力します`;
    applyBtn.innerText = japanese.applyFont;
    cancleBtn.innerText = japanese.cancleFont;
    japaneseOption.selected = true;
    languageSelect = 'japanese';
    nowLanguage = 'japanese';
    linkMenuTitleFont.innerText = japanese.linkMenuTitle;
    linkMenuSwitchTitleFont.innerText = japanese.linkMenuTitle;
    linkMenuSettingTitleFont.innerText = japanese.linkMenuSettingTitle;
    backgroundBlurText.innerText = japanese.backgroundBlurTextFont;
    backgroundResetBtn.innerText = japanese.resetFont;
    themeResetBtn.innerText = japanese.resetFont;
    themeTitle.innerText = japanese.theme;
    fontColorClock.innerText = japanese.fontColorClockFont;
    fontColorDate.innerText = japanese.fontColorDateFont;
    languageTitleP.innerText = japanese.languageTitleP;
    searchEngineTitleP.innerText = japanese.searchEngineTitleP;
    for (i=0;i<4;i++){
        siteName[i].placeholder = japanese.siteNameFont;
    }
    for (i=0;i<4;i++){
        siteEditBtn[i].innerText = japanese.siteSettingBtnFont;
    }
    setCookie('language', 'japanese');
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
    backgroundResetBtn.innerText = englishUs.resetFont;
    themeResetBtn.innerText = englishUs.resetFont;
    themeTitle.innerText = englishUs.theme;
    fontColorClock.innerText = englishUs.fontColorClockFont;
    fontColorDate.innerText = englishUs.fontColorDateFont;
    languageTitleP.innerText = englishUs.languageTitleP;
    searchEngineTitleP.innerText = englishUs.searchEngineTitleP;
    for (i=0;i<4;i++){
        siteName[i].placeholder = englishUs.siteNameFont;
    }
    for (i=0;i<4;i++){
        siteEditBtn[i].innerText = englishUs.siteSettingBtnFont;
    }

    setCookie('language', 'englishUs');
}
function languageSet(language){
    if(document.cookie.length === 0){

        switch (language){
            case 'zh-TW':
                console.log('自動辨識中文');
                chineseTraditionalSet();
                break;

            case 'ja':
                console.log('自動辨識ja');
                japaneseSet();
                break;

            case 'en':
                console.log('自動辨識en');
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
    document.querySelector('#background-name').innerText = 'File：' + backgroundFile.value.split('\\')[2];
}

let siteMenu = document.querySelector('#site-menu');
let siteMenuSwitch = document.querySelector('#site-menu-switch').checked;
let linkSettingMenu = document.querySelector('#link-setting-menu');


function settingSiteMenu(){
    siteMenuSwitch = document.querySelector('#site-menu-switch').checked;
    if(siteMenuSwitch === true){
        siteMenu.style.display = 'flex';
        linkSettingMenu.style.display = '';

        setCookie('linkSettingMenu', ' ');
        setCookie('siteMenu', 'true');
    }
    else if (siteMenuSwitch === false){
        siteMenu.style.display = 'none';
        linkSettingMenu.style.display = 'none';

        setCookie('linkSettingMenu', 'none');
        setCookie('siteMenu', 'false');
    }
}

function siteMenuConfig(siteMenuStatus){
    if (siteMenuStatus === 'true'){
        siteMenu.style.display = 'flex';
        setCookie('siteMenu', 'true')
        document.querySelector('#site-menu-switch').checked = true;
    }
    else if (siteMenuStatus === 'false'){
        siteMenu.style.display = 'none';
        setCookie('siteMenu', 'false');
    }
}



function setSite(num){
    document.querySelector(`#site-name-show-${num}`).innerText = document.querySelector(`#site-name-${num}`).value;
    document.querySelector(`#site-url-${num}`).href = document.querySelector(`#site-url-input-${num}`).value;
    setCookie(`sitename${num}`, `${document.querySelector(`#site-name-${num}`).value}`);
    setCookie(`siteurl${num}`,  `${document.querySelector(`#site-url-input-${num}`).value}`);
}

let clockFontColor = document.querySelector('#clock-font-color-select');
let clockFont = document.querySelector('#clock');
let setClockFontColor = ()=>{
    clockFont.style.color = clockFontColor.value;
    setCookie('ClockColor', `${clockFontColor.value}`);
}

let dateFontColor = document.querySelector('#date-font-color-select');
let dateFont = document.querySelector('.date');
let setDateFontColor = () =>{
    dateFont.style.color = dateFontColor.value;
    setCookie('DateColor', `${dateFontColor.value}`);
}



function config(){
    var nowLanguage = '';
    languageSet(window.navigator.language);
    if (document.cookie.length > 0){//設定語言
        languageSet(getCookie('language'));
        siteMenuConfig(getCookie('siteMenu'));
    }

    if(getCookie('ClockColor')){
        let color = getCookie('ClockColor');
        clockFont.style.color = color;
        clockFontColor.value = color;
    }else{
        clockFontColor.value = '#f0f8ff';
        clockFont.style.color = '#f0f8ff';
    }

    if(getCookie('DateColor')){
        let color = getCookie('DateColor');
        dateFont.style.color = color;
        dateFontColor.value = color;
    }else{
        dateFontColor.value = '#f0f8ff';
        dateFont.style.color = '#f0f8ff';
    }

    for (i = 1; i<5; i++){
        if (getCookie(`sitename${i}`) != undefined){//設定快捷輸入框語言
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

    if (getCookie('backgroundBlur')){//設定背景透明度
        backgroundBlur.style.backdropFilter = `Blur(${getCookie('backgroundBlur')}px)`;
        backgroundBlurValue.value = `${getCookie('backgroundBlur')}`;
    }
    else{
        backgroundBlurValue.value = 2.5;
        backgroundBlur.style.backdropFilter = `blur(${backgroundBlurValue.value}px)`;
    }
    
    backgroundImage.src = localStorage.getItem('background') || './/background/samantha-hendrata-wffp0K8sr7s-unsplash.jpg';
    
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }



