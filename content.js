// content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.url) {
    const hiddenAds = document.querySelectorAll('[style*="display:none"], [style*="display: none"], [style*="visibility:hidden"], [style*="visibility: hidden"]');
    let block = false;

    hiddenAds.forEach(ad => {
      if (ad.src === request.url || ad.href === request.url) {
        block = true;
      }
    });

    sendResponse({block: block});
  }
});
