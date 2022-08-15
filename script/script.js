function startTime(){
    let today = new Date();
    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();
    let mon = today.getMonth();
    let date = today.getDate();
    let day = today.getDay();
    mm = checkTime(mm);
    ss = checkTime(ss);
    document.getElementById('clock').innerHTML = hh + ":" + mm + ":" + ss;
    document.querySelector('.date').innerHTML = mon+1 + window[nowLanguage].monthFont + date + window[nowLanguage].dateFont + '　' + window[nowLanguage].dayFont[day];
    let timeoutId = setTimeout(startTime, 500);
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
    sideMenu.style.transform="translateX(-100%)";
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
let searchBtn = document.querySelector('#search-btn')//收尋按鈕

searchBtn.addEventListener('click',function(){
  if(inputState == true && searchBar.value!=''){
    sendWords()
  }
})



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
  else if (searchEngine === 'google'){
    let searchUrl = "https://www.google.com/search?q=" + searchBar.value
    document.location.href=searchUrl;
    searchBar.value = ''
    
  }
  else if (searchEngine === 'yahoo'){
    let searchUrl = "https://tw.search.yahoo.com/search?p=" + searchBar.value
    document.location.href=searchUrl;
    searchBar.value = ''
    
  }
  else if (searchEngine === 'bing'){
    let searchUrl = "https://www.bing.com/search?q=" + searchBar.value
    document.location.href=searchUrl;
    searchBar.value = ''
    
  }
  
  
}