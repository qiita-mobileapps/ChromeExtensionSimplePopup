// background.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "performAction") {
      console.log("Received message from content.js:", message.data);

      chrome.windows.getCurrent(async win => {
        
        /*
        * Positioning the popup screen.
        */
        // screen size-based position.
        const dualScreenLeft = win.left ?? 0;
        const dualScreenTop = win.top ?? 0;

        // own window size.
        const width = win.width ?? 0;
        const height = win.height ?? 0;

        // popup window size.
        const popupWidth = 450;
        const popupHeight = 540
  
        // current position on the right side of the screen.
        const rightPos = dualScreenLeft + width;
        let left = (Math.floor(rightPos) < popupWidth ? 0 : 
          ( Math.floor(rightPos) > message.data.screenWidth ? message.data.screenWidth - popupWidth : rightPos - popupWidth));

        // current position at the top of the screen (including the vertical size of the drawable area).
        const buttomPos = dualScreenTop + popupHeight;
        let top = (Math.floor(dualScreenTop) < 0 ? 0 : 
          ( Math.floor(buttomPos) > message.data.screenHeight ? message.data.screenHeight - popupHeight : dualScreenTop));

        /*
        * Display a popup screen.
        */
        chrome.windows.create({
          url: 'popup.html',
          width: popupWidth,
          height: popupHeight,
          top,
          left,
          focused: true,
          type: 'popup',
        });

      });

  }
});


