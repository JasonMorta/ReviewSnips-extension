async function background(){
console.log("running the extension now");



}background()


chrome.runtime.onMessage.addListener(gotMSG)

function gotMSG(){
  
}

