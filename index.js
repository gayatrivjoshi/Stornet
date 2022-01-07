let querying = chrome.tabs.query({currentWindow : true});
console.log(querying);

var gettingAll = chrome.windows.getAll();
// const output = JSON.parse(gettingAll);
console.log(gettingAll);
