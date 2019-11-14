if(window.location.search.indexOf("?") != -1){ 
    var query = window.location.search.replace("?","");
    var kvp = query.split("&");
    for(let i = 0;i < kvp.length; i++){
      let kv = kvp[i].split("=");
      if(kv[0] == "a"){
        window.location.hash = kv[1];
    window.scrollTo(0,document.documentElement.scrollTop-200);
    break;
      }
    }
    }