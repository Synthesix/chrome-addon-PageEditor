function simpleEdit(){
  if(document.body.contentEditable=='true'){
    document.body.contentEditable='false';
  }
  else{
    document.body.contentEditable='true';
    document.body.spellcheck=false;
  }

  if(document.designMode=='on'){
    document.designMode='off';
  }
  else{
    document.designMode='on';
    document.body.spellcheck=false;
  }
}

chrome.browserAction.onClicked.addListener(function(tab) {
      chrome.tabs.executeScript({
            code: '(' + simpleEdit + ')();'
      });
});
