/* this is just to my editor, so it stops complaining */
/* global chrome */

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
  // Get current tab info. Just general data, no Shields info here.
  console.log('tab', tab)

  // Actual Shields info for the active tab. This is loaded
  // only once on page refresh.
  chrome.braveShields.onBlocked.addListener((detail) => {
    // The detail object lists all resources blocked and has
    // information about the resource type and URL.
    // In Shields we count resources by incrementing the counter
    // and using `length` to add numbers i.e. detail.blockType.length.
    console.log('blocked resource (blockType)', detail.blockType)
    console.log('blocked resource (URL of what was actually blocked)', detail.subresource)

    // Get controls information for the active tab.
    // Not sure if you need this but there we go.
    chrome.braveShields.getBraveShieldsEnabled(tab.url, isEnabled => console.log('Shields enabled?', isEnabled))
    chrome.braveShields.getAdControlType(tab.url, policy => console.log('What is the current policy for ads?', policy))
    chrome.braveShields.getHTTPSEverywhereEnabled(tab.url, isEnabled => console.log('Is HTTPS everywhere enabled?', isEnabled))
    chrome.braveShields.getNoScriptControlType(tab.url, policy => console.log('What is the current policy for scripts loaded?', policy))
    chrome.braveShields.getFingerprintingControlType(tab.url, policy => console.log('What is the current policy for fingerprinting?', policy))
    chrome.braveShields.getCookieControlType(tab.url, policy => console.log('What is the current policy for cookies?', policy))
  })

})
