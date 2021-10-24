var score = [];
var allScores=[];
var questions = [
  "Which one is a third party API?",
  "What do you close an array with?",
  "What would you use to store inputs so they can be retrieved at a later date on a website?",
  "Which adds a comment when updating your git repository?",
  "What value does math.random return?"
]

var answer1 = [
  "Google",
  "JQuery",
  "CSS",
  "innerhtml",
  ""
]
var answer2 = [
  ")",
  "}",
  "</array",
  "]"
]
 
var answer3 = [
  "CSV",
  "javascript",
  "web API",
  "local storage"
]

var answer4 =[
  "git add",
  "git clone",
  "git commit",
  "git push"
]

var answer5 =[
  "1 to 9",
  "1 to 100",
  "0 to 10",
  "0 to 1"
]



// function for quiz timer
var counter = 20;
function startTimer(){
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("second");
      span.innerHTML = "Time Left: " + counter;
    }
    if (counter === 0) {
      clearInterval(counter);
      scoreandinitials();
    }
  }, 1000);
  return counter;
};


document.getElementById("quiz").style.display = "none";
document.getElementById("results").style.display = "none";
document.getElementById("scores").style.display = "none";
// starts quiz and has first question information
function firstQuestion()
{
  
    document.getElementById("start-quiz");
    startTimer();

    

  var targetDiv = document.getElementById("wrapper")
  var timeHeader = document.getElementById("second")
  var scores = document.getElementById("scores")

    if (targetDiv.style.display !== "none") {
      targetDiv.style.display = "none";
      timeHeader.style.display = "block";
      quiz.style.display = "block";
      scores.style.display = "none";

      
      
    } else {
      targetDiv.style.display = "block";
      timeHeader.style.display = "none";
      quiz.style.display = "block";
      scores.style.display = "none";
      
    }

     const firstanswer = document.getElementById("first-answer")
     const secondanswer = document.getElementById("second-answer");
     const thirdanswer = document.getElementById("third-answer");
     const fourthanswer = document.getElementById("fourth-answer");
     const Question = document.getElementById("quiz1");
     Question.innerHTML = questions[0];
     
     for (var i = 0; i < 1; i++) {
       const button1 = document.createElement("button1");
       const button2 = document.createElement("button2");
       const button3 = document.createElement("button3");
       const button4 = document.createElement("button4");
       
      
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
     
        document.getElementById ("first-answer").onclick = function(){
          const answer = document.getElementById("answer");
          counter -= 2;
          score.push([-5]);
          document.getElementById("second").innerHTML = "Time Left: " + counter;
          firstanswer.innerHTML = "";
          secondanswer.innerHTML = "";
          thirdanswer.innerHTML = "";
          fourthanswer.innerHTML = "";
          answer.innerHTML = "Incorrect";
          secondQuestion();
        
          
        
        }
        
       document.getElementById ("second-answer").onclick = function(){
        const answer = document.getElementById("answer");
        score.push([10]);
        firstanswer.innerHTML = "";
        secondanswer.innerHTML = "";
        thirdanswer.innerHTML = "";
        fourthanswer.innerHTML = "";
        answer.innerHTML = "You are correct!!!";
        secondQuestion();
        
      } 

      document.getElementById ("third-answer").onclick = function(){
        const answer = document.getElementById("answer");
        counter -= 2;
        score.push([-5]);
        document.getElementById("second").innerHTML = "Time Left: " + counter;
        firstanswer.innerHTML = "";
        secondanswer.innerHTML = "";
        thirdanswer.innerHTML = "";
        fourthanswer.innerHTML = "";
        answer.innerHTML = "Incorrect";
        secondQuestion();
          
      } 

      document.getElementById ("fourth-answer").onclick = function(){
        const answer = document.getElementById("answer");
        counter -= 2;
        score.push([-5]);
        document.getElementById("second").innerHTML = "Time Left: " + counter;
        firstanswer.innerHTML = "";
        secondanswer.innerHTML = "";
        thirdanswer.innerHTML = "";
        fourthanswer.innerHTML = "";
        answer.innerHTML = "Incorrect";
        secondQuestion();
          
      } 
      
};   

function secondQuestion(){
  
    var targetDiv = document.getElementById("wrapper")
    var timeHeader = document.getElementById("second")
    
    targetDiv.style.display = "none";
    timeHeader.style.display = "block";
    

    
   const firstanswer = document.getElementById("first-answer");
   const secondanswer = document.getElementById("second-answer");
   const thirdanswer = document.getElementById("third-answer");
   const fourthanswer = document.getElementById("fourth-answer");
   const Question = document.getElementById("quiz1");
   Question.innerHTML = questions[1];
   
   for (var i = 0; i < 1; i++) {
     const button1 = document.createElement("button1");
     const button2 = document.createElement("button2");
     const button3 = document.createElement("button3");
     const button4 = document.createElement("button4");
     
    
      button1.innerText = answer2[0];
      button2.innerText = answer2[1];
      button3.innerText = answer2[2];
      button4.innerText = answer2[3];
      addEventListener("click", function() {
       
     })

     firstanswer.appendChild(button1);
     secondanswer.appendChild(button2);
     thirdanswer.appendChild(button3);
     fourthanswer.appendChild(button4);

    }
   
      document.getElementById ("first-answer").onclick = function(){
        const answer = document.getElementById("answer");
        counter -= 2;
        score.push([-5]);
        document.getElementById("second").innerHTML = "Time Left: " + counter;
        firstanswer.innerHTML = "";
        secondanswer.innerHTML = "";
        thirdanswer.innerHTML = "";
        fourthanswer.innerHTML = "";
        answer.innerHTML = "Incorrect";
        
        thirdQuestion();
        
      }
      
     document.getElementById ("second-answer").onclick = function(){
      const answer = document.getElementById("answer");
      counter -= 2;
      score.push([-5]);
      document.getElementById("second").innerHTML = "Time Left: " + counter;
      firstanswer.innerHTML = "";
      secondanswer.innerHTML = "";
      thirdanswer.innerHTML = "";
      fourthanswer.innerHTML = "";
      answer.innerHTML = "Incorrect";
      thirdQuestion();
          
    } 

    document.getElementById ("third-answer").onclick = function(){
      const answer = document.getElementById("answer");
      score.push([10]);
      answer.innerHTML = "You are correct!!!";
      firstanswer.innerHTML = "";
      secondanswer.innerHTML = "";
      thirdanswer.innerHTML = "";
      fourthanswer.innerHTML = "";
      thirdQuestion();
    } 

    document.getElementById ("fourth-answer").onclick = function(){
      const answer = document.getElementById("answer");
      counter -= 2;
      score.push([-5]);
      document.getElementById("second").innerHTML = "Time Left: " + counter;
      firstanswer.innerHTML = "";
      secondanswer.innerHTML = "";
      thirdanswer.innerHTML = "";
      fourthanswer.innerHTML = "";
      answer.innerHTML = "Incorrect";
      thirdQuestion();
         
    } 
    
};   

function thirdQuestion(){
  
  var targetDiv = document.getElementById("wrapper")
  var timeHeader = document.getElementById("second")
      
      targetDiv.style.display = "none";
      timeHeader.style.display = "block";
      
  
      
  const firstanswer = document.getElementById("first-answer");
  const secondanswer = document.getElementById("second-answer");
  const thirdanswer = document.getElementById("third-answer");
  const fourthanswer = document.getElementById("fourth-answer");
  const Question = document.getElementById("quiz1");
  Question.innerHTML = questions[2];
     
  for (var i = 0; i < 1; i++) {
    const button1 = document.createElement("button1");
    const button2 = document.createElement("button2");
    const button3 = document.createElement("button3");
    const button4 = document.createElement("button4");
       
      
    button1.innerText = answer3[0];
    button2.innerText = answer3[1];
    button3.innerText = answer3[2];
    button4.innerText = answer3[3];
    addEventListener("click", function() {
         
    })
  
    firstanswer.appendChild(button1);
    secondanswer.appendChild(button2);
    thirdanswer.appendChild(button3);
    fourthanswer.appendChild(button4);
  
   }
     
    document.getElementById ("first-answer").onclick = function(){
      const answer = document.getElementById("answer");
      answer.innerHTML = "Incorrect";
      counter -= 2;
      score.push([-5]);
      document.getElementById("second").innerHTML = "Time Left: " + counter;
      firstanswer.innerHTML = "";
      secondanswer.innerHTML = "";
      thirdanswer.innerHTML = "";
      fourthanswer.innerHTML = "";
      fourthQuestion(); 
          
    }
        
    document.getElementById ("second-answer").onclick = function(){
      const answer = document.getElementById("answer");
      answer.innerHTML = "Incorrect";
      counter -= 2;
      score.push([-5]);
      document.getElementById("second").innerHTML = "Time Left: " + counter;
      firstanswer.innerHTML = "";
      secondanswer.innerHTML = "";
      thirdanswer.innerHTML = "";
      fourthanswer.innerHTML = "";
      fourthQuestion(); 
            
    } 
  
    document.getElementById ("third-answer").onclick = function(){
      const answer = document.getElementById("answer");
      answer.innerHTML = "Incorrect";
      counter -= 2;
      score.push([-5]);
      document.getElementById("second").innerHTML = "Time Left: " + counter;
      firstanswer.innerHTML = "";
      secondanswer.innerHTML = "";
      thirdanswer.innerHTML = "";
      fourthanswer.innerHTML = "";
      fourthQuestion(); 
            
  
      } 
  
    document.getElementById ("fourth-answer").onclick = function(){
      const answer = document.getElementById("answer");
      score.push([10]);
      answer.innerHTML = "You are correct!!!";
      firstanswer.innerHTML = "";
      secondanswer.innerHTML = "";
      thirdanswer.innerHTML = "";
      fourthanswer.innerHTML = "";
      fourthQuestion(); 
        
      } 
};   

function fourthQuestion(){
  
  var targetDiv = document.getElementById("wrapper")
  var timeHeader = document.getElementById("second")
      
    targetDiv.style.display = "none";
    timeHeader.style.display = "block";
      
  
      
  const firstanswer = document.getElementById("first-answer");
  const secondanswer = document.getElementById("second-answer");
  const thirdanswer = document.getElementById("third-answer");
  const fourthanswer = document.getElementById("fourth-answer");
  const Question = document.getElementById("quiz1");
  Question.innerHTML = questions[3];
     
  for (var i = 0; i < 1; i++) {
    const button1 = document.createElement("button1");
    const button2 = document.createElement("button2");
    const button3 = document.createElement("button3");
    const button4 = document.createElement("button4");
       
      
    button1.innerText = answer4[0];
    button2.innerText = answer4[1];
    button3.innerText = answer4[2];
    button4.innerText = answer4[3];
    addEventListener("click", function() {
         
    })
  
    firstanswer.appendChild(button1);
    secondanswer.appendChild(button2);
    thirdanswer.appendChild(button3);
    fourthanswer.appendChild(button4);
  
   }
     
    document.getElementById ("first-answer").onclick = function(){
      const answer = document.getElementById("answer");
      answer.innerHTML = "Incorrect";
      counter -= 2;
      score.push([-5]);
      document.getElementById("second").innerHTML = "Time Left: " + counter;
      firstanswer.innerHTML = "";
      secondanswer.innerHTML = "";
      thirdanswer.innerHTML = "";
      fourthanswer.innerHTML = "";
      fifthQuestion(); 
          
    }
        
    document.getElementById ("second-answer").onclick = function(){
      const answer = document.getElementById("answer");
      answer.innerHTML = "Incorrect";
      counter -= 2;
      score.push([-5]);
      document.getElementById("second").innerHTML = "Time Left: " + counter;
      firstanswer.innerHTML = "";
      secondanswer.innerHTML = "";
      thirdanswer.innerHTML = "";
      fourthanswer.innerHTML = "";
      fifthQuestion();    
    } 
  
    document.getElementById ("third-answer").onclick = function(){
      const answer = document.getElementById("answer");
      score.push([10]);
      answer.innerHTML = "You are correct!!!";
      firstanswer.innerHTML = "";
      secondanswer.innerHTML = "";
      thirdanswer.innerHTML = "";
      fourthanswer.innerHTML = "";
      fifthQuestion(); 
        
    } 
  
    document.getElementById ("fourth-answer").onclick = function(){
      const answer = document.getElementById("answer");
      answer.innerHTML = "Incorrect";
      score.push([-5]);
      counter -= 2;
      document.getElementById("second").innerHTML = "Time Left: " + counter;
      firstanswer.innerHTML = "";
      secondanswer.innerHTML = "";
      thirdanswer.innerHTML = "";
      fourthanswer.innerHTML = "";
      fifthQuestion();
          
    } 
  };   

function fifthQuestion(){
  
    var targetDiv = document.getElementById("wrapper")
    var timeHeader = document.getElementById("second")
        
        targetDiv.style.display = "none";
        timeHeader.style.display = "block";
        
    
        
    const firstanswer = document.getElementById("first-answer");
    const secondanswer = document.getElementById("second-answer");
    const thirdanswer = document.getElementById("third-answer");
    const fourthanswer = document.getElementById("fourth-answer");
    const Question = document.getElementById("quiz1");
    Question.innerHTML = questions[4];
       
    for (var i = 0; i < 1; i++) {
      const button1 = document.createElement("button1");
      const button2 = document.createElement("button2");
      const button3 = document.createElement("button3");
      const button4 = document.createElement("button4");
         
        
      button1.innerText = answer5[0];
      button2.innerText = answer5[1];
      button3.innerText = answer5[2];
      button4.innerText = answer5[3];
      addEventListener("click", function() {
      })
    
      firstanswer.appendChild(button1);
      secondanswer.appendChild(button2);
      thirdanswer.appendChild(button3);
      fourthanswer.appendChild(button4);
    
     }
       
      document.getElementById ("first-answer").onclick = function(){
        const answer = document.getElementById("answer");
        answer.innerHTML = "Incorrect";
        score.push([-5]);
        document.getElementById("second").innerHTML = "Time Left: " + counter;
        firstanswer.innerHTML = "";
        secondanswer.innerHTML = "";
        thirdanswer.innerHTML = "";
        fourthanswer.innerHTML = "";
        Question.innerHTML = "";
        scoreandinitials();
        

      }
          
      document.getElementById ("second-answer").onclick = function(){
        const answer = document.getElementById("answer");
        answer.innerHTML = "Incorrect";
        score.push([-5]);
        document.getElementById("second").innerHTML = "Time Left: " + counter;
        firstanswer.innerHTML = "";
        secondanswer.innerHTML = "";
        thirdanswer.innerHTML = "";
        fourthanswer.innerHTML = "";
        Question.innerHTML = "";
        clearInterval(counter);
        scoreandinitials();
        
    
      } 
    
      document.getElementById ("third-answer").onclick = function(){
        const answer = document.getElementById("answer");
        answer.innerHTML = "Incorrect";
        score.push([-5]);
        document.getElementById("second").innerHTML = "Time Left: " + counter;
        firstanswer.innerHTML = "";
        secondanswer.innerHTML = "";
        thirdanswer.innerHTML = "";
        fourthanswer.innerHTML = "";
        Question.innerHTML = "";
        scoreandinitials();
        
        
      } 
    
      document.getElementById ("fourth-answer").onclick = function(){
        const answer = document.getElementById("answer");
        score.push([10]);
        answer.innerHTML = "You are correct!!!";
        Question.innerHTML = "";
        firstanswer.innerHTML = "";
        secondanswer.innerHTML = "";
        thirdanswer.innerHTML = "";
        fourthanswer.innerHTML = "";
        Question.innerHTML = ""; 
        scoreandinitials();
        
        
      } 
    };   

  // score and inititals input
function scoreandinitials(){
      
      var Question = document.getElementById("quiz1")
      var targetDiv = document.getElementById("results")
      var firstanswer = document.getElementById("first-answer")
      var secondanswer = document.getElementById("second-answer")
      var thirdanswer = document.getElementById("third-answer")
      var fourthanswer = document.getElementById("fourth-answer")
      var answer = document.getElementById("answer")
      var timeHeader = document.getElementById("second")
      var results = document.getElementById("results")
      
     

      Question.style.display = "none";
      targetDiv.style.display = "block";
      firstanswer.style.display = "none";
      secondanswer.style.display = "none";
      thirdanswer.style.display = "none";
      fourthanswer.style.display = "none";
      answer.style.display = "none";
      timeHeader.style.display = "none";
      results.style.display = "block";
      quiz.style.display = "none";

      // add up score
    
      let sum = 0;

      for (let i = 0; i < score.length; i++) {
        sum += parseInt(score[i]);
      }
      console.log("score:" + score)
      console.log("sum" + sum)

      document.getElementById ("submit").onclick = function(){
      var initials = document.getElementById("Inititals").value;
      
      allScores.push(JSON.parse(localStorage.getItem("Score and Initials")));
      allScores.push({initials, sum});
      console.log(allScores);

      localStorage.setItem("Score", JSON.stringify(sum));
      localStorage.setItem("Initials", initials);
      localStorage.setItem("Score and Initials", JSON.stringify(allScores));

     location.reload();
     return false;
      }
    };
    
    // display scores and initials
  function scores(){
      var targetDiv = document.getElementById("wrapper")
      var scores = document.getElementById("scores")
      const quiz3 = document.getElementById("back-to-quiz")
     
      targetDiv.style.display = "none";
      scores.style.display = "block";
      quiz3.style.display = "block";

      for (var i = 0; i < 1; i++) {
        const button5 = document.createElement("button5");
 
        button5.innerText = "Go Back to Quiz";
       
        addEventListener("click", function() {
        })
      
        quiz3.appendChild(button5);
       
      
       }

      const scores2 = document.getElementById("scores2");
      //var scores1 = localStorage.getItem("Initials") + " " + localStorage.getItem("Score");
      scores2.innerHTML = "High Scores - " + allScores[0];
  };

