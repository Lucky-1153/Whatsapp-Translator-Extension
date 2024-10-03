
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes.translateEnabled) {
      const isTranslationEnabled = changes.translateEnabled.newValue;

      chrome.tabs.query({ url: "*://web.whatsapp.com/*" }, (tabs) => {
        tabs.forEach((tab) => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: toggleTranslationState,
            args: [isTranslationEnabled],
          });
        });
      });
    }
  });
  

  function toggleTranslationState(enabled) {
   
    if (enabled) {
      console.log("Translation is enabled. Activating translation script...");
      translateChats(); 
    } else {
      console.log("Translation is disabled. Deactivating translation script...");
      
    }
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggleTranslation") {
    
      chrome.storage.sync.set({ translateEnabled: request.value }, () => {
        sendResponse({ status: "Translation toggled" });
      });
      return true; 
    }
  });
  