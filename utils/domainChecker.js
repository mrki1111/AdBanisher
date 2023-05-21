// utils/domainChecker.js

const hiddenAdDomains = [
  // Add the list of domains that are known to serve hidden ads.
  // Example: "example-hidden-ad-domain.com"
];

function checkDomain(url) {
  const urlObj = new URL(url);
  const domain = urlObj.hostname;

  return hiddenAdDomains.includes(domain);
}

export { checkDomain };
