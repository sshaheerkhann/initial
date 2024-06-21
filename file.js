function submitData() {
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let conf_pass = document.getElementById("conf_pass").value;
    let errors =[];
    passwordChecker(pass, conf_pass, errors);
    contactChecker(contact, errors);
    emailChecker(email, errors);
    if(errors.length){alert(errors);}
    else {alert('Successful');}

}

function passwordChecker(pass, conf_pass, errors) {
    if(pass === ''){errors.push('password is required');return errors;}
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(pass.length < 6){errors.push('password is too short'); return errors;}
    if(pass !== conf_pass){errors.push('password does not match'); return errors;}
    if(!format.test(pass)){errors.push('password does not contain special characters'); return errors;}
}

function contactChecker(contact, errors) {
    if(contact === ''){return;}
    var reg = /^\d+$/
    if(!reg.test(contact)){errors.push('contact must contain numbers only'); return errors;}
    if(contact.length < 7 && contact.length > 12){errors.push('contact should consist of 7-12 numbers'); return errors;}
}

function emailChecker(email, errors) {
    if(email === ''){errors.push('email is required');return errors;}
    var reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(!reg.test(email)){errors.push('not a valid email'); return errors;}
}

