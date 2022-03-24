	

    let firstName = document.forms['form']['fname'];
    let lastName = document.forms['form']['lname'];
    let email = document.forms['form']['email'];
    let passWord = document.forms['form']['password'];
    let phoneNumber = document.forms['form']['pnumber'];
    
    let firstname_error = document.getElementById('firstname');
    let lastname_error = document.getElementById('lastname');
    let email_error = document.getElementById('emailaddress');
    let password_error = document.getElementById('password');
    let pass_error = document.getElementById('phonenumber');
    let card=document.getElementById('card');
    let mpesa=document.getElementById('mpesa');


    firstName.addEventListener('textInput', first_Verify);
    lastName.addEventListener('textInput', last_Verify);
    email.addEventListener('textInput', email_Verify);
    passWord.addEventListener('textInput', pass_Verify);
    phoneNumber.addEventListener('textInput', phone_Verify);

    
    function validated(){
        if (firstName.value.length < 9) {
            firstName.style.border = "1px solid red";
            firstName_error.style.display = "block";
            firstName.focus();
            return false;
        }
        if (lastName.value.length < 9) {
            lastName.style.border = "1px solid red";
            lastName_error.style.display = "block";
            lastName.focus();
            return false;
        }
        if (email.value.length < 9) {
            email.style.border = "1px solid red";
            email_error.style.display = "block";
            email.focus();
            return false;
        }
        if (passWord.value.length < 6) {
            passWord.style.border = "1px solid red";
            passWord_error.style.display = "block";
            passWord.focus();
            return false;
        }
        if (phoneNumber.value.length < 9) {
            phoneNumber.style.border = "1px solid red";
            phoneNumber_error.style.display = "block";
            phoneNumber.focus();
            return false;
        }
    
    }
    function email_Verify(){
        if (email.value.length >= 8) {
            email.style.border = "1px solid silver";
            email_error.style.display = "none";
            return true;
        }
    }
    function pass_Verify(){
        if (password.value.length >= 5) {
            password.style.border = "1px solid silver";
            pass_error.style.display = "none";
            return true;
        }
    }
    
function checkModeOfPayment(){
    if(card.selected){
        window.location='vis.html'
    }
    else{
        window.location='saf.html'
    }

}
    