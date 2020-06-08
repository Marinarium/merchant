/*var videoContainer = document.getElementsByTagName('video')[0];
var goover = document.getElementsByClassName('goover')[0];

goover.style.height = videoContainer.getBoundingClientRect().height + 'px';
goover.style.width = videoContainer.getBoundingClientRect().width + 'px'*/

function disableVideoControls() {
    var video = document.getElementById("videoPlayer");
    video.removeAttribute("controls");
};