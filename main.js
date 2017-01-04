function enableToolbar(){
  document.body.style.margin = "0";
  document.body.style.transition = "padding-top 0.4s";
  document.body.style.paddingTop = "70px";
  elementToolbar.style.top = "0";
}

function disableToolbar(){
  document.body.style.paddingTop = "0";
  elementToolbar.style.top = "-70px";
}

function addToolbar(){
  elementToolbar.setAttribute("id", "pageEditorToolbar");
  document.body.appendChild(elementToolbar);

  elementToolbar.style.position = "fixed";
  elementToolbar.style.top = "-70px";
  elementToolbar.style.width = "100vw";
  elementToolbar.style.height = "70px";
  elementToolbar.style.backgroundColor = "steelblue";
  elementToolbar.style.transition = "top 0.4s";
  elementToolbar.style.zIndex  = "9999";
}


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

var toolBarEnabled = false;


chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
        code: 'if(typeof toolBarCreated === "undefined"){ var toolBarCreated = true; var elementToolbar = document.createElement("DIV"); (' + addToolbar + ')();}'
  });
  if(!toolBarEnabled){
    chrome.tabs.executeScript({
          code: '(' + enableToolbar + ')();'
    });
    toolBarEnabled = true;
  }
  else {
    chrome.tabs.executeScript({
          code: '(' + disableToolbar + ')();'
    });
    toolBarEnabled = false;
  }
});
