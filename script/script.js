function startTime(){
  let today = new Date();
  let hh = today.getHours();
  let mm = today.getMinutes();
  let ss = today.getSeconds();
  let mon = today.getMonth();
  let date = today.getDate();
  let day = today.getDay();
  let period = hh >= 12 ? 'PM' : 'AM';
  hh = hh % 12;
  hh = hh || 12;
  hh = checkTime(hh);
  mm = checkTime(mm);
  ss = checkTime(ss);
  if (hh <= 11){
    if(document.getElementById('clock').innerText !== period + ' ' + hh + " " + mm){
      document.getElementById('clock').innerText = period + ' ' + hh + " " + mm;
    }
  }
  else if (hh >= 12){
    if(document.getElementById('clock').innerText !== period + ' ' + hh + " " +  mm){
      document.getElementById('clock').innerText = period + ' ' + hh + " " +  mm;
    }
  }

  if(document.querySelector('.date').innerText !== mon+1 + window[nowLanguage].monthFont + date + window[nowLanguage].dateFont + '　' + window[nowLanguage].dayFont[day]){
    document.querySelector('.date').innerText = mon+1 + window[nowLanguage].monthFont + date + window[nowLanguage].dateFont + '　' + window[nowLanguage].dayFont[day];
  }
  
  let timeoutId = setTimeout(startTime, 1000);
}
  

//sideMenu開關
let sideMenu = document.querySelector('.side-menu');
const clockBtn = document.querySelector('#clock');
let clockClickNum = 0;

clockBtn.addEventListener('click',function(){
  if(clockClickNum % 2 == 0){
    sideMenu.style.transform="translateX(0)";
    clockClickNum +=1;
  }  
  else if(clockClickNum % 2 != 0){
    sideMenu.style.transform="translateX(-103%)";
    clockClickNum +=1;
  }
})



function checkTime(i){
  if(i < 10) {
    i = "0" + i;
  }
  return i;
}



let searchBar = document.querySelector('#search')//文字框




let inputState =  true

searchBar.addEventListener('compositionupdate',function(){
  inputState = false
})//正在拼字

searchBar.addEventListener('compositionstart',function(){
  inputState = false
})//正在拼字或選字時更改了內容

searchBar.addEventListener('compositionend',function(){
  inputState = true
})//拼字或選字完成



searchBar.addEventListener('keydown',function(e){
  if(e.code == 'Enter' && inputState == true && searchBar.value!=''){
    sendWords()
  }
})//如果按下Enter就執行sendWords funsction

let searchBtn = document.querySelector('#search-btn')//收尋按鈕

function searchBtnClick(){
  console.log('click!!');
  if(inputState == true && searchBar.value!=''){
    sendWords()
  }
}

let searchEngine = document.querySelector('#search-engine-select').value;


function sendWords(){
  if (searchBar.value.indexOf("www.") != -1) {
    let searchUrl = "https://" + searchBar.value
    document.location.href=searchUrl;
    searchBar.value = ''
    
  }
  else if(searchBar.value.indexOf(".") != -1){
    let searchUrl = "https://www." + searchBar.value
    document.location.href=searchUrl;
    searchBar.value = ''
    
  }
  else if (searchEngine === 'Google'){
    let searchUrl = "https://www.google.com/search?q=" + searchBar.value
    document.location.href=searchUrl;
    searchBar.value = ''
    
  }
  else if (searchEngine === 'Yahoo'){
    let searchUrl = "https://tw.search.yahoo.com/search?p=" + searchBar.value
    document.location.href=searchUrl;
    searchBar.value = ''
    
  }
  else if (searchEngine === 'Bing'){
    let searchUrl = "https://www.bing.com/search?q=" + searchBar.value
    document.location.href=searchUrl;
    searchBar.value = ''
    
  }
  
  
}