

function NewWindow(tab) {
	console.log(tab);
	windowscreate = chrome.windows.create({
		height:600,
		width:800,
		type:"popup",
		url:chrome.runtime.getURL("HTTPHeaderMain.html")
    });
}
chrome.action.onClicked.addListener(NewWindow);

function handleInstalled(details) {
    browser.tabs.create({
        url: "https://github.com/Nitrama/HTTP-Header-Live/blob/master/release/README.md"
    });
}
//browser.runtime.onInstalled.addListener(handleInstalled);
