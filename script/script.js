function startTime(){
    var today = new Date();
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    mm = checkTime(mm);
    ss = checkTime(ss);
    document.getElementById('clock').innerHTML = hh + ":" + mm + ":" + ss;
    var timeoutId = setTimeout(startTime, 500);
  }
  
  function checkTime(i){
    if(i < 10) {
      i = "0" + i;
    }
    return i;
  }



  let searchBar = document.querySelector('#search')//文字框

  searchBar.addEventListener('keydown',function(e){
    if(e.code == 'Enter'){
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