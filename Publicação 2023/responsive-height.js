window.onload = function () {
    const height = document.body.scrollHeight;
    parent.postMessage(height, '*');
};
 
window.onresize = function () {
    const height = document.body.scrollHeight;
    parent.postMessage(height, '*');
};