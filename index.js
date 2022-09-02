readlineSync = require('readline-sync');

// var userName = readlineSync.question("what is your name ?")
console.log("Welcome to the DO YOU KNOW Abhijit quiz!");
var username = readlineSync.question("What's your name? ");
console.log("\nHello " + username + " let's begin");
console.log("--------------------------------");


var questions = [
  {
     question: "When were the first widely accepted laws of cricket brought out? ",
    answer: "1744"
    
  },
  {
    question: "Till 1889 how many balls an over used to be bowled? ",
    answer:"four"
  },
  {
    question: "In which country was an eight-ball over in vogue till lately? ",
    answer:"Australia"
  },
  
  {
    question: "When was overarm bowling accepted as legal? ",
    answer:"1864"
  },
  {
    question: "When was the earliest available record of cricket having been played in India ",
    answer:"1721"
  },
  {
    question: "When was overarm bowling accepted as legal? ",
    answer:"1864"
  },
  {
    question: "When was the first Hindu cricket club formed",
    answer:"1866"
  },
  {
    question: " When was the Board of Control for Cricket in India set up?",
    answer:"1927"
  },
  {
    question: " When was the National Cricket Championship for the Ranji Trophy started?",
    answer:"1934"
  },
  {
    question: " Harold Larwood played in the Quadrangulars. True or false?",
    answer:"true"
  },
  
]

var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  console.log(userAnswer);
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("You're correct!");
    score++;
    
    console.log("score: ", score);
    console.log("--------------------------------");
  }
  else {
    console.log("Oops that's incorrect!");
    console.log("score: ", score);
    console.log("Right answer is : " + answer);
    console.log("--------------------------------\n");
  }
}

//toTraverse
for (i = 0; i < questions.length; i++) {
  var current = questions[i];
  play(current.question, current.answer);
}

//showScore
console.log(username + " your final score is: ", score);


