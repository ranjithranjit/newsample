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


document.getElementById("whatsappLink").addEventListener("click", function() {
    var phoneNumber = "9342813051";
    
    // Remove any non-numeric characters from the phone number
    phoneNumber = phoneNumber.replace(/\D/g, '');
    
    // Construct the WhatsApp URL with the phone number and a predefined message (optional)
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=Hello%20from%20my%20website!";
    
    // Open the WhatsApp chat window
    window.open(whatsappUrl, '_blank');

});


