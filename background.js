// listen for our browerAction button to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
  
  // for the current tab, inject the "reading_bars.js" file & execute it
  chrome.tabs.executeScript(tab.ib, {
    file: 'reading_bars.js'
  });

});