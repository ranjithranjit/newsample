const questions = document.querySelectorAll(".question ");
const answers = document.querySelectorAll(".answer p");






for (let j = 0; j < questions.length; j++) {
  questions[j].addEventListener("click", function(event) {
    if(answers[j].style.display === "none" || answers[j].style.display ===""){
        for(let i = 0; i<answers.length;i++){
            answers[i].style.display = "none";
        }
        answers[j].style.display = "block";

    }else{
        answers[j].style.display = "none";

    }
});
}

