//$(document).ready(function(){

var secondsTotal;
var secondsElapsed = 0;
var secondsRemain;
var interval;

$(".quizOptions").on("click", function() {
    var selectedQuiz = $(".quizOptions:checked").val();
    var quizDesc;

    if (selectedQuiz === "q1") {     
        $("#descMsg").text(qbMarioDesc);
        secondsTotal = qbMario.length * 1;
    }

    else

        if (selectedQuiz === "q2") {
            $("#descMsg").text(qbCaliforniaDesc);
            secondsTotal = qbCalifornia.length * 15;

        }
    
    else

            if (selectedQuiz === "q3") {
                $("#descMsg").text(qbMexicoDesc);
                secondsTotal = qbMexico.length * 15;

            }
            
    else

                if (selectedQuiz === "q4") {
                    $("#descMsg").text(qbCodingDesc);
                    secondsTotal = qbCoding.length * 15;

                }

    else

                    if (selectedQuiz === "q5") {
                        $("#descMsg").text(qbHTMLDesc);
                        secondsTotal = qbHTML.length * 15;

                    }
    
    else

                        if (selectedQuiz === "q6") {
                            $("#descMsg").text(qbJSDesc);
                            secondsTotal = qbJS.length * 15;

                        }
});

$("#startBtn").on("click", function() {
    $("#timer").text(secondsTotal);
    interval = setInterval(function() {
    secondsElapsed++;
    secondsRemain = secondsTotal-secondsElapsed;
    renderTime();
    }, 1000); 
});

function renderTime() {
    $("#timer").text(secondsRemain);
    if (secondsRemain<=0) {
        stopTimer()
    }
};

function stopTimer() {
    clearInterval(interval);
}  
