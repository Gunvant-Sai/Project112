var SpeechEmoji1 = "";
 var SpeechEmoji2 = "";

Webcam.set
    (
        {
            height: 300,
            width: 350,
            img_format: "jpg",
            jpg_quality: 100
        } 
    )

    Webcam.attach( "#camera" )

    function Snapshot()
    {
      Webcam.snap(function(data_uri) {
      document.getElementById("result").innerHTML = "<img id='HULAISBACK' src='"+data_uri+"'>";
      });}

      console.log(ml5.version);
      classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9wkkBuxEN/model.json",modelReady)
      function modelReady()
      {
          console.log("modelReady");
      }

      function Speak()
     {
         var synth= window.speechSynthesis;
         var speak_data_1 = "The First Prediction Is"+speak_data_1;
         var speak_data_2 = "The Second Prediction Is"+speak_data_2;
         var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
        synth.Speak(utterThis);
     }

     function check()
     {
         img = document.getElementById("HULAISBACK");
         classifier.classify(img,gotResult)
     }

     function gotResult(error,results)
     {
       if(error)
       {
           console.console(error);
       }

       else
       {
        console.log(results);
        predition1 = results[0].label;
        predition2 = results[1].label;
        document.getElementById(emotion_name1).innerHTML = predition1;
        document.getElementById(emotion_name2).innerHTML = predition2;
       speak();

       if (predition1 == "Happy")
       {
        document.getElementById("emoji1").innerHTML = "&#128512;";
       }

       elseif (predition1 == "Sad")
       {
        document.getElementById("emoji1").innerHTML = "&#128532;";
       }

       elseif (predition1 == "Angry")
       {
        document.getElementById("emoji1").innerHTML = "&#128520;";
       }


       if (predition2 == "Happy")
       {
        document.getElementById("emoji2").innerHTML = "&#128512;";
       }

       elseif (predition2 == "Sad")
       {
        document.getElementById("emoji2").innerHTML = "&#128532;";
       }

       elseif (predition2 == "Angry")
       {
        document.getElementById("emoji2").innerHTML = "&#128520;";
       }
       }
       
     }
