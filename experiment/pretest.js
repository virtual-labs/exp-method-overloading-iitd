
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
      question: "Q1. Compile time polymorphism is also known as_____.",
      answers: {
        a: "Method Overriding",
        b: "Method Overloading",
        c: "Method Rewriting",
        d: "None of these"
      },
      correctAnswer: "b"
    },

    {
      question: "Q2.  Which conditions should a method satisfy for overloading a method in a class.A) its return type should be same. B) number of parameters it takes should be different. C) type of parameters should be different.",

      answers: {
        a: " Only A",
        b: "Both A and B",
        c: "Either B and C",
        d: "All of the above are true."
      },
      correctAnswer: "c"
    },

    {
      question: "Q3. Can we overload the constructor of a class ?",
      answers: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "a"
    },
	
	{
      question: "Q4.To successfully overload a method in Java, the return types must be _____.",
      answers: {
        a: "Same",
        b: "Different",
        c: "Same but using superclass or subclass types also work",
        d: "None"
      },
      correctAnswer: "c"
    },
	
	{
      question: "Q5. To successfully overload a method in Java, the argument-list or parameter-list must be _____.",
      answers: {
        a: "Same",
        b: "Different",
        c: "Same but using superclass or subclass types also work",
        d: "None"
      },
      correctAnswer: "b"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
