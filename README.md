# AdBanisher

Unmasking and banishing those sneaky ads, one website at a time. Join the fight and contribute.

## Description

AdBanisher is a browser extension that detects and blocks hidden ads on websites. This project is a beginner's attempt to learn JavaScript and create a useful tool for improving the browsing experience. The extension is built using JavaScript and the Chrome Extension API.

## How it works

The goal of this extension is to automatically detect and block hidden ads on websites as the user browses the web. It does this in two ways:

- Monitoring DOM changes: A content script runs on all web pages and checks for any hidden elements (display: none, visibility: hidden, etc.) that get added after page load. If any hidden elements match known ad domains or URLs, they are blocked.
- Blocking network requests: A background script uses the webRequest API to monitor network requests. For each request, it checks if the request URL matches any hidden element on the page or a known ad domain. If so, the request is blocked.

The extension can be enabled or disabled by the user through the extension icon in the Chrome toolbar.

## Manifest

The `manifest.json` file describes the extension including permissions, content/background scripts, icons, etc.

## Content script

The `content.js` content script runs on all web pages. It listens for messages from the background script and checks if anyhidden elements on the page match the URL sent in the message. It responds back with whether to block the request or not.

## Background script

The `background.js` background script runs persistently. It uses the webRequest API to monitor network requests. For each request, it sends a message to the content script on that tab with the URL. It waits for a response, and if the content script says to block the request, it cancels it. It also checks if a URL belongs to a known ad domain using the `domainChecker` utility.

## Domain checker

The `domainChecker.js` utility file has a list of known ad domains. The `checkDomain()` function checks if a given URL's domain matches any domain on the list.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug reports, please feel free to open an issue or submit a pull request. As a beginner in JavaScript, I appreciate any advice or feedback to help me learn and improve this project.

## License

This project is licensed under the MIT License.
