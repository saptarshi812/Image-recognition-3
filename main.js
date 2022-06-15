Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})
camera=document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    })
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qVDERPiVs/',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function Check(){
    console.log ("working");
    img=document.getElementById("capture_image");
    classifier.classify(img,gotResult);
    }
function gotResult(error,results){
    if (error){
        console.error(error);
    }
    else {console.log (results);
    document.getElementById("object-name").innerHTML=results[0].label;
    document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}