let Email = document.getElementById("Email");
let submit = document.getElementById("submit"); 
let submitTime = new Date();
// let gender = document.getElementById("Gender");
const regEx = {
    email: /^([\w\.\_]+)@([a-zA-Z])+\.([a-z]{2,3})(\.[a-z]{2,3})*$/,
    name: /^[a-zA-Z]+$/
}

success = () => {
    alert("Entry Successful");
}
error = () => {
    alert("Invalid Input");
}

const pitcure_upload = document.querySelector("#picture");
let picture = "";

pitcure_upload.addEventListener('change', function(){
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        picture = reader.result;
        document.querySelector('#show_image').style.backgroundImage = `url(${picture})`
    });
    reader.readAsDataURL(this.files[0]);
})

submit.onclick = function validate(){
    // if (regExp.test(Email.value)){
    //     alert(`Email: Valid
    // Entered at: `+ submitTime);
    //     console.log(Email + " is valid");
    // } else {
    //     alert("Email: Invalid");
    //     console.log(Email + " not valid");
    // }

    // regEx.email.test(Email.value) ?  alert("Email: Valid \nEntered on: "+ submitTime)
    //     :  alert("Email: Invalid");
    // regEx.email.test(Email.value) ? console.log(Email.value + ' was submitted on ' + submitTime) 
    //     : console.log(Email.value + " is incorrect");  

    // regEx.name.test(FirstName.value)?  success() : error();
    // regEx.name.test(LastName.value)?  success() : error();
    // regEx.name.test(Email.value)?  success() : error();

    if (regEx.name.test(FirstName.value) === regEx.name.test(LastName.value) === regEx.email.test(Email.value) === true){
        success();
    } else {
        error();
    }    

    // (gender.value == "Male" || gender.value == "Female")? success() : error();      
}

