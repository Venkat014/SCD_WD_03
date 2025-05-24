
let questionOneAnswer = document.getElementById('questionOneAnswer');
let questionTwoAnswer = document.getElementById('questionTwoAnswer');
let questionThreeAnswer = document.getElementById('questionThreeAnswer');
let questionFourAnswer = document.getElementById('questionFourAnswer');
let questionFiveAnswer = document.getElementById('questionFiveAnswer');

let quizAppContainerEl = document.getElementById('quizAppContainer');
let resultBgContainerEl = document.getElementById('resultBgContainer')
let quizResultContainerEl = document.getElementById('quizResultContainer');

let submitBtnEl = document.getElementById('submitBtn');

submitBtnEl.addEventListener("click", function () {
  var correctAnswers = {
    q1: "India", 
    q2: "Jasprit Bumrah", 
    q3: "United States and West Indies", 
    q4: "20", 
    q5: "Rahmanullah Gurbaz"  
  };

  let score = 0;

  // Question 1
  let q1Answer = document.querySelector('input[name="q1"]:checked');
  if (q1Answer && q1Answer.value === correctAnswers.q1) {
    score++;
    questionOneAnswer.textContent = "Correct Answer: "+q1Answer.value;
    questionOneAnswer.style.color = "green";
  }
  else{
    questionOneAnswer.textContent = "Your option is wrong: "+q1Answer.value;
    questionOneAnswer.style.color = "red";
    let correctAnsEl = document.createElement('p');
    correctAnsEl.textContent = "Correct answer is: "+correctAnswers.q1;
    correctAnsEl.style.color = "green";
    questionOneAnswer.appendChild(correctAnsEl);
  }

  // Question 2
  let q2Answer = document.querySelector('input[name="q2"]:checked');
  if (q2Answer && q2Answer.value === correctAnswers.q2) {
    score++;
    questionTwoAnswer.textContent = "Correct Answer: "+q2Answer.value;
    questionTwoAnswer.style.color = "green";
  }
  else{
    questionTwoAnswer.textContent = "Your option is wrong: "+q2Answer.value;
    questionTwoAnswer.style.color = "red";
    let correctAnsEl = document.createElement('p');
    correctAnsEl.textContent = "Correct answer is: "+correctAnswers.q2;
    correctAnsEl.style.color = "green";
    questionTwoAnswer.appendChild(correctAnsEl);
  }

  // Question 3
  let q3Answer = document.querySelector('input[name="q3"]:checked');
  if (q3Answer && q3Answer.value === correctAnswers.q3) {
    score++;
    questionThreeAnswer.textContent = "Correct Answer: "+q3Answer.value;
    questionThreeAnswer.style.color = "green";
  }
  else{
    questionThreeAnswer.textContent = "Your option is wrong: "+q3Answer.value;
    questionThreeAnswer.style.color = "red";
    let correctAnsEl = document.createElement('p');
    correctAnsEl.textContent = "Correct answer is: "+correctAnswers.q3;
    correctAnsEl.style.color = "green";
    questionThreeAnswer.appendChild(correctAnsEl);
  }

  // Question 4
  let q4Answer = document.querySelector('input[name="q4"]:checked');
  if (q4Answer && q4Answer.value === correctAnswers.q4) {
    score++;
    questionFourAnswer.textContent = "Correct Answer: "+q4Answer.value;
    questionFourAnswer.style.color = "green";
  }
  else{
    questionFourAnswer.textContent = "Your option is wrong: "+q4Answer.value;
    questionFourAnswer.style.color = "red";
    let correctAnsEl = document.createElement('p');
    correctAnsEl.textContent = "Correct answer is: "+correctAnswers.q4;
    correctAnsEl.style.color = "green";
    questionFourAnswer.appendChild(correctAnsEl);
  }

  // Question 5
  let q5Answer = document.querySelector('input[name="q5"]:checked');
  if (q5Answer && q5Answer.value === correctAnswers.q5) {
    score++;
    questionFiveAnswer.textContent = "Correct Answer: "+q5Answer.value;
    questionFiveAnswer.style.color = "green";
  }
  else{
    questionFiveAnswer.textContent = "Your option is wrong: "+q5Answer.value;
    questionFiveAnswer.style.color = "red";
    let correctAnsEl = document.createElement('p');
    correctAnsEl.textContent = "Correct answer is: "+correctAnswers.q5;
    correctAnsEl.style.color = "green";
    questionFiveAnswer.appendChild(correctAnsEl);
  }

  // Show result
  quizAppContainerEl.classList.add('d-none');
  displayResults(score);
});

function displayResults(score){
    resultBgContainerEl.classList.add('d-block');

    let resultCardContainerEl = document.createElement('div');
    resultBgContainerEl.classList.add('result-bg-container', 'p-5', 'shadow', 'shadow-lg', 'text-center');

    let quizeTitleEl = document.createElement('h1');
    quizeTitleEl.classList.add('result-name');
    quizeTitleEl.textContent = "Quiz Results";
    resultCardContainerEl.appendChild(quizeTitleEl); 
  
    if(score >= 4){
      let passedWishesEl = document.createElement('p');
      passedWishesEl.textContent = "Perfect score! Well done";
      passedWishesEl.classList.add('passed-wishes');
      resultCardContainerEl.appendChild(passedWishesEl);

      let passedStatusEl = document.createElement('p');
      passedStatusEl.textContent = "Passed";
      passedStatusEl.classList.add('passed-status','mb-2');
      resultCardContainerEl.appendChild(passedStatusEl);

      let resultStatusEl = document.createElement('p');
      resultStatusEl.textContent = "You scored "+score+" out of 5";
      resultStatusEl.classList.add('result-scrote-text');
      resultCardContainerEl.appendChild(resultStatusEl);

      let practiceBtn = document.createElement('button');
      practiceBtn.textContent = "Practice again";
      practiceBtn.classList.add('practice-btn');
      practiceBtn.addEventListener('click', function(){
      
      quizResultContainerEl.classList.add('d-none');
      quizAppContainerEl.classList.remove('d-none');
      questionOneAnswer.textContent = "";
      questionTwoAnswer.textContent = "";
      questionThreeAnswer.textContent = "";
      questionFourAnswer.textContent = "";
      questionFiveAnswer.textContent = "";
      location.reload();
    });
    resultCardContainerEl.appendChild(practiceBtn);

    }
    else{
      let failedWishesEl = document.createElement('p');
      failedWishesEl.textContent = "Great effort! Try again and you'll improve";
      failedWishesEl.classList.add('failed-wishes');
      resultCardContainerEl.appendChild(failedWishesEl);

      let failedStatusEl = document.createElement('p');
      failedStatusEl.textContent = "Failed";
      failedStatusEl.classList.add('failed-status','mb-2');
      resultCardContainerEl.appendChild(failedStatusEl);

      let resultStatusEl = document.createElement('p');
      resultStatusEl.textContent = "You scored "+score+" out of 5";
      resultStatusEl.classList.add('result-scrote-text'); 
      resultCardContainerEl.appendChild(resultStatusEl);

      let practiceBtn = document.createElement('button');
      practiceBtn.textContent = "Review Mistakes";
      practiceBtn.classList.add('practice-btn');
      practiceBtn.addEventListener('click', function(){
      quizResultContainerEl.classList.add('d-none');
      quizAppContainerEl.classList.remove('d-none');
    });
    resultCardContainerEl.appendChild(practiceBtn);
    }
    
    
    resultBgContainerEl.appendChild(resultCardContainerEl);
}
