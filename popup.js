var textarea = document.getElementById("textarea");
var answer = document.getElementById("copyAnswer");
var copy = document.getElementById("copyBlock");


copy.addEventListener('click', function(e) {

    textarea.select();

    try {
        var ok = document.execCommand('copy');
        if (ok) answer.innerHTML = 'Copied!';
        else answer.innerHTML = 'Unable to copy!';
    } catch (err) {
        answer.innerHTML = 'Unsupported Browser!';
    }
});

function copyIsSuccess() {
    var copy
    try {
        copy = window.getSelection().toString();
        copied = document.execCommand("copy")
    } catch (e) {
        copied = e;
    }
    return copy
}

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text();
    }
    return text;
}

document.onmouseup = document.onkeyup = document.onselectionchange = function() {
    document.getElementById("sel").value = copyIsSuccess();
};