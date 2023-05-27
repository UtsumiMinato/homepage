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
    
    backgroundBlurSet();

    
    languageSet(languageSelect);

    setClockFontColor();

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
let backgroundResetBtn = document.querySelector('#background-setting-reset-btn');
let clockResetBtn = document.querySelector('#colok-color-reset-btn');

clockResetBtn.addEventListener('click', ()=>{
    document.cookie = `ClockColor=#f0f8ff; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
})



var chineseTraditional = {
        'backgroundTitle':'背景:',
        'selectIimageTitle':'選擇圖片',
        'languageTitle':'語言:',
        'fontFamilyTitle':'字型:',
        'searchEngineTitle':'搜尋引擎:',
        'searchFont':'使用 Google 搜尋或輸入網址',
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
        'fontColorTitle':'文字顏色：',
    }
var japanese = {
        'backgroundTitle':'壁紙：',
        'selectIimageTitle': '画像を選択',
        'languageTitle': '言語:', 
        'fontFamilyTitle':'フォント:',
        'searchEngineTitle': '検索エンジン:', 
        'searchFont':'Google で検索、または URL を入力します',
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
        'fontColorTitle':'文字顏色：',
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
        'fontColorTitle':'文字顏色：',
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
    clockResetBtn.innerText = chineseTraditional.resetFont;
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
    backgroundResetBtn.innerText = japanese.resetFont;
    clockResetBtn.innerText = japanese.resetFont;
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
    backgroundResetBtn.innerText = englishUs.resetFont;
    clockResetBtn.innerText = englishUs.resetFont;

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

let fontColor = document.querySelector('#font-color-select');
let clockFont = document.querySelector('#clock');
let setClockFontColor = ()=>{
    clockFont.style.color = fontColor.value;
    document.cookie = `ClockColor=${fontColor.value}; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=none; Secure`;
}



function config(){
    var nowLanguage = '';
    languageSet(window.navigator.language);
    if (document.cookie.length > 0){//設定語言
        languageSet(getCookie('language'));
        siteMenuConfig(getCookie('siteMenu'));
    }

    if(getCookie('ClockColor') != undefined){
        let color = getCookie('ClockColor');
        clockFont.style.color = color;
        fontColor.value = color;
    }else{
        fontColor.value = '#f0f8ff';
        clockFont.style.color = '#f0f8ff';
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

    if (getCookie('backgroundBlur') != undefined){//設定背景透明度
        backgroundBlur.style.backdropFilter = `Blur(${getCookie('backgroundBlur')}px)`;
        backgroundBlurValue.value = `${getCookie('backgroundBlur')}`;
    }
    else if(getCookie('backgroundBlur') != undefined === false){
        backgroundBlurValue.value = `0.7`;
    }
    
    if (localStorage.getItem('background') != undefined){//設定背景圖片
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



