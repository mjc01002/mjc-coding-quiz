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
  "innerhtml", "test"
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
 

    if (targetDiv.style.display !== "none") {
      targetDiv.style.display = "none";
      timeHeader.style.display = "block";
      
    } else {
      targetDiv.style.display = "block";
      timeHeader.style.display = "none";
    }

     const firstanswer = document.getElementById("first-answer");
     const secondanswer = document.getElementById("second-answer");
     const thirdanswer = document.getElementById("third-answer");
     const fourthanswer = document.getElementById("fourth-answer");
     const firstQuestion = document.getElementById("quiz1");
     firstQuestion.innerHTML = questions[0];
     
     for (var i = 0; i < 1; i++) {
       const button1 = document.createElement("button1");
       const button2 = document.createElement("button2");
       const button3 = document.createElement("button3");
       const button4 = document.createElement("button4");
       const answer = document.createElement("answer");
      
        button1.innerText = answer1[0];
        button2.innerText = answer1[1];
        button3.innerText = answer1[2];
        button4.innerText = answer1[3];
        addEventListener("click", function() {
         
       })

       firstanswer.appendChild(button1);
       secondanswer.appendChild(button2);
       thirdanswer.appendChild(button3);
       fourthanswer.appendChild(button4);

      }
     
        document.getElementById ("answser").innerHTML = "Incorrect";
       

      
      };   
    



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
