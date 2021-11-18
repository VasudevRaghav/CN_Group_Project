webcam_state = 0;

function change_cam_logo(){
    console.log("Test OK");
    cross = document.getElementById("cross-cam");
    circle1 = document.getElementsByTagName("circle-cam-1");
    circle2 = document.getElementsByTagName("circle-cam-2");
    circle3 = document.getElementsByTagName("circle-cam-3");

    cross.style.visibility='hidden';
    if(webcam_state==0){
        circle1.style.fill='#000000';
        circle2.style.fill='#000000';
        circle3.style.fill='#000000';
        webcam_state=1;
    }else{
        webcam_state=0;
        circle1.style.fill='#FF0000';
        circle2.style.fill='#FF0000';
        circle3.style.fill='#FF0000';
    }
}

cam_btn = document.getElementById("cam_btn");
cam_btn.addEventListener("click",change_cam_logo);

var StopWebCam = function () {
    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }
    video.srcObject = null;
}

var start = function () {
    var video = document.getElementById("webcam"),
        vendorURL = window.URL || window.webkitURL;

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            }).catch(function (error) {
                console.log("Something went wrong");
            });
    }
}
$(function () { start(); });