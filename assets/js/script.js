var score = 0;
var questions = [
  "Which one is a third party API?",
  "What do you close an array with?",
  "What would you use to store inputs so they can be retrieved at a later date on the website?",
  "Which on adds a comment to your git repository?",
  "What value does math.random return?"
]

var answer1 = [
  "Google",
  "JQuery",
  "CSS",
  "innerhtml"
]
var questions1 = [
  { question: "Which one is a third party API?",
    answers: {
      1: "Google",
      2: "JQuery",
      3: "CSS",
      4: "innerhtml"
    },
  correctAnswer: "2"},

  { question: "What do you close an array with?",
    answers: {
      1: ")",
      2: "}",
      3: "</array",
      4: "]"
    },
  correctAnswer: "3"},

  { question: "What would you use to store inputs so they can be retrieved at a later date on the website?",
    answers: {
      1: "CSV",
      2: "javascript",
      3: "web API",
      4: "local storage"
    },
  correctAnswer: "4"},

  { question: "Which on adds a comment to your git repository?",
    answers: {
      1: "git add",
      2: "git clone",
      3: "git commit",
      4: "git push"
    },
  correctAnswer: "3"},

  { question: "What value does math.random return?",
    answers: {
      1: "1 to 9",
      2: "1 to 100",
      3: "0 to 10",
      4: "0 to 1"
    },
  correctAnswer: "4"},
]
console.log(questions);
// start timer
function startTimer(){
  var counter = 21;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("second");
      span.innerHTML = "Time Left: " + counter;
    }
    if (counter === 0) {
        alert('sorry, out of time');
        clearInterval(counter);
    }
  }, 1000);
}
function start()
{
    document.getElementById("start-quiz");
    startTimer();
   
    console.log(startTimer)

  var targetDiv = document.getElementById("wrapper")
  var timeHeader = document.getElementById("second")
  var output = "";

    if (targetDiv.style.display !== "none") {
      targetDiv.style.display = "none";
      timeHeader.style.display = "block";
      
    } else {
      targetDiv.style.display = "block";
      timeHeader.style.display = "none";
    }

    div = document.getElementById("quiz"),
    div = document.getElementById("first-answer").style.display="block";
    div = document.getElementById("second-answer").style.display="block"; 
    div = document.getElementById("second-answer").style.display="block"; 
    div = document.getElementById("second-answer").style.display="block";  
    output = questions[0];
    //div.innerHTML=output;
    //div.innerHTML;
   
  
    
    
   // .concat(answer1[0], answer1[1]);
    

    
};

var elements = document.getElementsByClassName("btn");
var names = '';
for(var i = 0; i < elements.length; i++) {
names += elements[i].name;
}
document.write(names);
console.log(names);

 console.log(answer1);

// quiz section
function quiz(){
   
   var choice = [];
  
    // for each question...
    questions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        var answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }
