
window.setTimeout(function () {
    window.location.href = "main.html";

}, 12000);

/* function preventBack() {
    window.history.forward();
}

setTimeout("preventBack()", 0);
window.onunload = function() {
    null
}; */

function disableBack() { window.history.forward(); }
setTimeout("disableBack()", 0);
window.onunload = function () { null };