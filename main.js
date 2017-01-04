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

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('toggleEdit');

    link.addEventListener('click', function() {
      chrome.tabs.executeScript({
            code: '(' + simpleEdit + ')();'
         });
    });
});
