
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
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
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Q1. What is the output of the below Java program?",

      answers: {
        a: "PLANE",
        b: "AIRPORT",
        c: "Compiler error",
        d: "None"
      },
      correctAnswer: "c"
    },

    {
      question: "Q2. What is the output of the below Java program with method overloading?",

      answers: {
        a: "PINE",
        b: "TEAK",
        c: "Compiler error",
        d: "None"
      },
      correctAnswer: "b"
    },

    {
      question: "Q3.  Java method overloading implements the OOPS concept ___.",
      answers: {
        a: "Inheritance",
        b: "Polymorphism"
        c: "Encapsulation"
        d: "None"        
      },
      correctAnswer: "b"
    },
	
	{
      question: "Q4. Which is the overloaded static method of Math class to get absolute value in Java?",
      answers: {
        a: " Math.abs(int)",
        b: " Math.abs(float)"
        c: " Math.abs(double)"
        d: " All the above"        
      },
      correctAnswer: "d"
    },
	
	{
      question: "Q5. What will be the output of the following program ?",
      
      answers: {
        a: "Compile Time Error",
        b: "Runtime Error",
        c: "int,"
        d: "float"
      },
      correctAnswer: "a"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
