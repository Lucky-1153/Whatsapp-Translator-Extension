document.getElementById("toggle-translation").addEventListener("click", () => {
    chrome.storage.sync.get(["translateEnabled"], (data) => {
      const newValue = !data.translateEnabled;
      chrome.storage.sync.set({ translateEnabled: newValue }, () => {
        document.getElementById("toggle-translation").textContent = newValue
          ? "Disable Translation"
          : "Enable Translation";
      });
    });
  });
  

  chrome.storage.sync.get(["translateEnabled"], (data) => {
    document.getElementById("toggle-translation").textContent = data.translateEnabled
      ? "Disable Translation"
      : "Enable Translation";
  });
  