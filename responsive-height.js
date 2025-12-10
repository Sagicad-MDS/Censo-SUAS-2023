function sendHeight() {
    const height = document.body.scrollHeight;
    parent.postMessage(height, '*');
}
 
window.onload = sendHeight;
window.onresize = sendHeight;