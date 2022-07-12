let Email = document.getElementById("Email");
let submit = document.getElementById("submit"); 
let submitTime = new Date();
const regExp = /^([\w\.\_]+)@([a-zA-Z])+\.([a-z]{2,3})(\.[a-z]{2,3})*$/;
// const regExp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

submit.onclick = function validate(){
    // if (regExp.test(Email.value)){
    //     alert(`Email: Valid
    // Entered at: `+ submitTime);
    //     console.log(Email + " is valid");
    // } else {
    //     alert("Email: Invalid");
    //     console.log(Email + " not valid");
    // }
    regExp.test(Email.value) ?  alert("Email: Valid \nEntered on: "+ submitTime)
        :  alert("Email: Invalid");
    regExp.test(Email.value) ? console.log(Email.value + ' was submitted on ' + submitTime) 
        : console.log(Email.value + " is incorrect");    
}

