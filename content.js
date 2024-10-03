chrome.storage.sync.get(["translateEnabled"], (data) => {
    if (data.translateEnabled) {
      translateChats();
    }
  });
  

  function translateChats() {
    const chatMessages = document.querySelectorAll("span.selectable-text.copyable-text");
    chatMessages.forEach((message) => {
      const text = message.innerText;
  
      
      translateText(text).then((translatedText) => {
        message.innerText = translatedText;
      });
    });
  }
  
  
  async function translateText(text) {

    //paid google translate api

    // const response = await fetch("https://api.example.com/translate", {
    //   method: "POST",
    //   body: JSON.stringify({ text: text, targetLanguage: "en" }),
    //   headers: { "Content-Type": "application/json" }
    // });
    // const data = await response.json();

    //dummy data
    const translatedText = 'dummy translation'
    return translatedText;
  }
  