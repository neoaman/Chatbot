function getBotResponse() {
          var rawText = $("#textInput").val();
          var userHtml = '<p class="userText"><span>' + rawText + "</span></p>";
          $("#textInput").val("");
          $("#chatbox").append(userHtml);
          document
            .getElementById("userInput")
            .scrollIntoView({ block: "start", behavior: "smooth" });
          $.get("/get", { msg: rawText }).done(function(data) {

            var botHtml = '<p class="botText"><span>' + data + "</span></p>";
            $("#chatbox").append(botHtml);
            document
              .getElementById("userInput")
              .scrollIntoView({ block: "start", behavior: "smooth" });
//              Adding Voice Output to output data
if ('speechSynthesis' in window) {
              var text = (data);
              var msg = new SpeechSynthesisUtterance();
              var voices = window.speechSynthesis.getVoices();
              msg.voice = voices[3];
              msg.rate = 1.3;
              msg.pitch = 1;
              msg.text = text;
              speechSynthesis.speak(msg);}
          });
        }
        $("#textInput").keypress(function(e) {
          if (e.which == 13) {

            getBotResponse();


          }
        });