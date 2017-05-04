chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("got it");
    alert("message received");
});
