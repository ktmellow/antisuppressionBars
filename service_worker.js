const exbrowser = "chrome";
const browsernewtab = "chrome://newtab/";
const browserstore = "https://chrome.google.com";

chrome.action.onClicked.addListener(function(tab){
	if(tab.url.match(/^http/i) || tab.url.match(/^file/i)){
		if((new URL(tab.url)).origin != browserstore && tab.url != browsernewtab){
			chrome.scripting.executeScript({
				target: {tabId: tab.id},
				files: ["reading_bars.js"]
			});
		}
	}
});