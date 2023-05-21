import { checkDomain } from './utils/domainChecker.js';
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return new Promise((resolve, reject) => {
      chrome.tabs.sendMessage(details.tabId, {url: details.url}, response => {
        if (response && response.block) {
          resolve({cancel: true});
        } else {
          resolve({cancel: false});
        }
      });
    });
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "checkDomain") {
    import('./utils/domainChecker.js').then(module => {
      const isHiddenAdDomain = module.checkDomain(request.url);
      sendResponse({block: isHiddenAdDomain});
    });
  }
  return true;
});
