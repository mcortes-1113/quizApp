//$(document).ready(function(){

//timer variables
var secondsTotal;
var secondsElapsed = 0;
var secondsRemain;
var interval;
//display variables
var currentQuiz;
var currentQ;
var currentCh;
var currentA;
var qCount;
//question bank variables
var qbMarioDesc = "This quiz includes facts about Mario";
var  qbMario = [ 
                {                        
                title: "In which city was Mario born?",
                choices: ["Nashville, TN", "Mexico City, MX", "Los Angeles, CA", "Murfreesboro, TN"],
                answer: "Mexico City, MX"},
                {
                title: "Which vehicle does Mario drive?",
                choices:["GMC Sierra", "Audi Q5", "Hyundai Elantra", "Nissan 240sx"],
                answer: "GMC Sierra"},
                {
                title: "How old is Mario?",
                choices: ["30", "39", "400", "44"],
                answer: "39"},
                {
                title: "Where is Mario traveling for Winter Break?",
                choices: ["Orlando, FL", "Los Angeles, CA", "New York, NY", "Denver, CO"],
                answer: "Los Angeles, CA"}
];
var qbCaliforniaDesc = "This quiz will test your knowledge about California";
var qbCalifornia = [
                    {
                    title: "Which animal can be found in California's flag?",
                    choices: ["Eagle", "Bear", "Hamster", "Dog"],
                    answer: "Bear"},
                    {
                    title: "Which is California's capital city?",
                    choices: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"],
                    answer: "Sacramento"},
                    {
                    title: "In which of these California's cities is the world famous \"Rodeo Drive\" located?",
                    choices: ["Hollywood", "Las Vegas", "Beverly Hills", "Los Angeles"],
                    answer: "Beverly Hills"},
                    {
                    title: "If it's 4pm in Tennessee, what time is it in California?",
                    choices: ["12pm", "5pm", "1pm", "2pm"],
                    answer: "2pm"}
];
var qbMexicoDesc = "This quiz will test your knowledge about Mexico";
var qbMexico = [
                {
                title: "Which 3 colors are present in Mexico's flag?",
                choices: ["Green, White and Red", "Blue, Red and Yellow", "Red, White and Orange", "Black and White"],
                answer: "Green, White and Red"},
                {
                title: "Which is Mexico's capital city?",
                choices: ["Guadalajara", "Monterrey", "Mexico City", "Cancun"],
                answer: "Mexico City"},
                {
                title: "What is Mexico's currency called?",
                choices: ["Dollar", "Bolivar", "Yen", "Peso"],
                answer: "Peso"},
                {
                title: "Which of the following IS NOT a beach city within Mexico?",
                choices: ["Cabo", "Cancun", "Puerto Vallarta", "All of these are beach cities"],
                answer: "All of these are beach cities"}
];
var qbCodingDesc = "This quiz will test your knowledge about Coding";
var qbCoding = [
                {
                title: "question placeholder1",
                choices: ["a", "b","c","d"],
                answer: "answer placeholder1"},
                {
                title: "question placeholder2",
                choices: ["a", "b","c","d"],
                answer: "answer placeholder2"},
                {
                title: "question placeholder3",
                choices: ["a", "b","c","d"],
                answer: "answer placeholder3"},
                {
                title: "question placeholder4",
                choices: ["a", "b","c","d"],
                answer: "answer placeholder4"}
];
var qbHTMLDesc = "This quiz will test your knowledge about HTML";
var qbHTML = [
            {
            title: "question placeholder1",
            choices: ["a", "b","c","d"],
            answer: "answer placeholder1"},
            {
            title: "question placeholder2",
            choices: ["a", "b","c","d"],
            answer: "answer placeholder2"},
            {
            title: "question placeholder3",
            choices: ["a", "b","c","d"],
            answer: "answer placeholder3"},
            {
            title: "question placeholder4",
            choices: ["a", "b","c","d"],
            answer: "answer placeholder4"}
];
var qbJSDesc = "This quiz will test your knowledge about javascript";
var qbJS = [
            {
            title: "question placeholder1",
            choices: ["a", "b","c","d"],
            answer: "answer placeholder1"},
            {
            title: "question placeholder2",
            choices: ["a", "b","c","d"],
            answer: "answer placeholder2"},
            {
            title: "question placeholder3",
            choices: ["a", "b","c","d"],
            answer: "answer placeholder3"},
            {
            title: "question placeholder4",
            choices: ["a", "b","c","d"],
            answer: "answer placeholder4"}
];



$(".quizOptions").on("click", function() {
    var selectedQuiz = $(".quizOptions:checked").val();

    if (selectedQuiz === "q1") {   
        secondsTotal = 4;
        currentQuiz = qbMario;
    }
    else
        if (selectedQuiz === "q2") {
            secondsTotal = 4;
            currentQuiz = qbCalifornia;
        }
        else
            if (selectedQuiz === "q3") {
                secondsTotal = 4;
                currentQuiz = qbMexico;
            }
            else
                if (selectedQuiz === "q4") {
                    secondsTotal = 4;
                    currentQuiz = qbCoding;
                }
    else
                    if (selectedQuiz === "q5") {
                        secondsTotal = 4;
                        currentQuiz = qbHTML;
                    }
        else
                        if (selectedQuiz === "q6") {
                            secondsTotal = 4;
                            currentQuiz = qbJS;
                        }
});

$("#startBtn").on("click", function() {
    populateFirstQuestion();
    $("#timer").text(secondsTotal);
    interval = setInterval(function() {
    secondsElapsed++;
    secondsRemain = secondsTotal-secondsElapsed;
    renderTime();
    }, 1000); 
});

function populateFirstQuestion() {

        currentQ = currentQuiz[0].title;
        $("#question").text(currentQ);

        for (chi=0;chi<currentQuiz.length;chi++) {
            currentCh = currentQuiz[0].choices[chi];
            $("#choices").append($("<li><button>" + currentCh + "</button></li>")).find('button').addClass('choice-button');
                }
};

/*function validateAnswer() {
    $(".choice-button").on("click", function() {
        if (this.text === currentA) {
            $("#result").text("Correct")

        }
    })
}*/

function renderTime() {
    $("#timer").text(secondsRemain);
    if (secondsRemain<=0) {
        stopTimer()
    }
};

function stopTimer() {
    clearInterval(interval);
};
