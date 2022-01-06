
// chrome.runtime.onInstalled.addListener((reason) => {
//   if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: "onboarding.html",
//     });
//   }
// });
chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: chrome.extension.getURL("onboarding.html"),
    selected: true,
  });
});
console.log(chrome.action);
