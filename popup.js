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