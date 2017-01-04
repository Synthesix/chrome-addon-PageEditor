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
    var editPageLINK = document.getElementById('toggleEdit');
    var takeScreenshotLINK = document.getElementById('takeScreenshot');

    editPageLINK.addEventListener('click', function() {
      chrome.tabs.executeScript({
            code: '(' + simpleEdit + ')();'
         });
    });

    takeScreenshotLINK.addEventListener('click', function() {

        chrome.tabs.captureVisibleTab(function(screenshotUrl) {

          chrome.tabs.create({url: screenshotUrl});
        });
    });
});
