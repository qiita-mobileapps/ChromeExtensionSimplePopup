// content.js
document.getElementById('openPopupButton').addEventListener('click', function () {

  console.log("content.js BUTTON Event" )

  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  chrome.runtime.sendMessage({ action: "performAction", data: {"screenWidth": screenWidth, "screenHeight": screenHeight}});
});

