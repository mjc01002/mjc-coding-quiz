// Assignment code here

var second = 20;
var timer;


// Set Button to start quiz
document.form_main.start.onclick = () => start ();

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

// Password Length function

function getPasswordLength() {
  
  var length = parseInt(prompt("What length would you like for the password? (min: 8, max: 128)"));



  while (length < 8 || length > 128 || isNaN(length)) {
   alert("Invalid length. Re-enter length.");
   length = parseInt(prompt("What length would you like for the password? (min: 8, max: 128)"));
  }

  return length;
  
}

//generate password function - sets character requirements, generates a random password from a set of character, and push text of password to screen.
function generatePassword() {
    var length = getPasswordLength();
    var password = "";
    var numbers = prompt("Do you want numbers in your password?")
    var numbers = numbers.toLowerCase()
    if(numbers === "yes") {
      characterPool.push.apply(characterPool, numbersList);
      numbers1 = Math.floor(Math.random() *numbersList.length);
      passwordTemp.push(numbersList[numbers1]);
      } else {
        numbers1 = Math.floor(Math.random() *doNotInclude.length);
    }     
      
      
      
      
    var upperCase = window.prompt("Do you want uppercase letters in your password?");
    var upperCase1 = upperCase.toLowerCase()
    if(upperCase1 === "yes") {
      characterPool.push.apply(characterPool, upperCase2);
      upperCase3 = Math.floor(Math.random() * upperCase2.length);  
      passwordTemp.push(upperCase2[upperCase3]);
      } else {
        upperCase3 = Math.floor(Math.random() *doNotInclude.length);
    }   
  
    var lowerCase = prompt("Do you want lower case letters in your password?");
    var lowerCase1= lowerCase.toLowerCase();
    if(lowerCase1 === "yes") {
      characterPool.push.apply(characterPool, lowerCase2);
      lowerCase3 = Math.floor(Math.random() *lowerCase2.length);
      passwordTemp.push(lowerCase2[lowerCase3]);
      } else {
          lowerCase3 = Math.floor(Math.random() *doNotInclude.length);
    }
  
    var specialCharacters = prompt("Do you want special characters in your password?");
    var specialCharacters1 = specialCharacters.toLowerCase();
    if(specialCharacters1 === "yes") {
      characterPool.push.apply(characterPool, specialChar);
      specialChar1 = Math.floor(Math.random() *specialChar.length);
      passwordTemp.push(specialChar[specialChar1])
      } else {
          specialChar1 = Math.floor(Math.random() *doNotInclude.length);
    }
      // This line makes sure the password includes the characters based on the asked questions. 
      password = passwordTemp.join("");
    
      // check that criteria is met
    if(numbers + upperCase1 + lowerCase1 + specialCharacters1 === "nononono") {
      alert("Need to include at least on number, upper case letter, lower case letter, or special character");
      
      return generatePassword();
       } else {
        
    }
      
      // adds the required amount of characters based on the first question and randomizes it for a unique password. 
    while (password.length < length){
      password += characterPool[Math.floor(Math.random() *characterPool.length)];
      
    }
      var passwordReshuffle = password.split('').sort(function(){return 0.5-Math.random()}).join('');

      // oushes password to password box on screen. 
      var passwordText = document.querySelector("#password");
      passwordText.value = passwordReshuffle;
      
      return passwordReshuffle;
    
    }


      
    





