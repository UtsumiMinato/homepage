function startTime(){
    let today = new Date();
    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();
    mm = checkTime(mm);
    ss = checkTime(ss);
    document.getElementById('clock').innerHTML = hh + ":" + mm + ":" + ss;
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

searchBar.addEventListener('compositionupdate',function(ev){
  inputState = false
})//正在拼字

searchBar.addEventListener('compositionstart',function(ev){
  inputState = false
})//正在拼字或選字時更改了內容

searchBar.addEventListener('compositionend',function(ev){
  inputState = true
})//拼字或選字完成



searchBar.addEventListener('keydown',function(e){
  if(e.code == 'Enter' && inputState == true && searchBar.value!=''){
    sendWords()
  }
})//如果按下Enter就執行sendWords funsction


function sendWords(){
  if (searchBar.value.indexOf("www.") != -1) {
    let searchUrl = "https://" + searchBar.value
    document.location.href=searchUrl;
    searchBar.value = ''
    return false
  }
  else if(searchBar.value.indexOf(".") != -1){
    let searchUrl = "https://www." + searchBar.value
    document.location.href=searchUrl;
    searchBar.value = ''
    return false
  }
  else{
    let searchUrl = "https://www.google.com/search?q=" + searchBar.value
    document.location.href=searchUrl;
    searchBar.value = ''
    return false
  }
  
  
}