document.addEventListener("hello", function(data) {
    console.log("hello listner");
    chrome.runtime.sendMessage("test");
});
console.log("content script init");
