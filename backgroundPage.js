async function background(){
console.log("running the extension now");

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, response) {
  console.log(message)
  
}
}background()

