const sendEmailButton = document.getElementById("sendEmail");
//const phoneNumberInput = document.getElementById("user_phone");
const lastName = document.getElementById("user_lastName").value;
const firstName = document.getElementById("user_firstName").value;
const email = document.getElementById("user_email").value;
const phoneNum = document.getElementById("user_phone").value;
const msg = document.getElementById("user_msg").value;

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


if (lastName === ""){
    document.getElementById("lastNameError").textContent = "Enter your Last Name";
}

if (firstName === ""){
    document.getElementById("firstNameError").textContent = "Enter your First Name";
}
if (email === ""){
    document.getElementById("emailError").textContent = "Enter your Email";
}else if(!emailPattern.test(email)){
    document.getElementById("emailError").textContent = "Invalid Email Formatt";
}
if (phone === ""){
    document.getElementById("phoneError").textContent = "Enter your Email";
}else if(!emailPattern.test(phone)){
    document.getElementById("phoneError").textContent = "Invalid Email Formatt";
}
if (msg === ""){
    document.getElementById("msgError").textContent = "Enter a Message";
}
if(lastName === "" || firstName === "" || !emailPattern.test(email) || email === "" || phoneNum === "" || msg === ""){
    document.getElementById("lastName").scrollIntoView();
}else{
    emailjs.init("NBl3SSRSoVUKke5-o");
    const contactParameters = {
        user_lastName: lastName,
        user_firstName: firstName,
        user_email: email,
        user_phoneNum: user_phoneNum,
        user_message: user_msg,
    };
    emailjs.send("service_aqfvwff", "template_wcgj866", contactParameters)
}




function validatePhoneNumber(input_str){
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(input_str);
}

function validateForm(event){
    var phone = document.getElementById("user_phone").ariaValueMax;
    if(!validatePhoneNumber(phone)){
        document.getElementById("phone-error").classList.remove("hidden");
    } else{
        document.getElementById("phone-error").classList.add("hidden");
        alert("validation success")
    }
    event.preventDefault();


}