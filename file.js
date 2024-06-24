function submitData() {
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let conf_pass = document.getElementById("conf_pass").value;
    let errors =[];
    
    nameChecker(name, errors);
    emailChecker(email, errors);
    contactChecker(contact, errors);
    passwordChecker(pass, conf_pass, errors);

    if(errors.length){alert(errors);}
    else {alert('Successful');}

}

function nameChecker(name, errors) {
    debugger;
    if(name === ''){errors.push('name is required');return errors;}
    if(name[0] !== name[0].toUpperCase()){errors.push('First letter of name must be capital');return errors;}
}

function passwordChecker(pass, conf_pass, errors) {
    if(pass === ''){errors.push('password is required');return errors;}
    var format = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;
    if(pass.length < 6){errors.push('password is too short'); return errors;}
    if(pass !== conf_pass){errors.push('password does not match'); return errors;}
    if(!format.test(pass)){errors.push('password should be mixtur of number and letters'); return errors;}
}

function contactChecker(contact, errors) {
    if(contact === ''){return;}
    var reg = /^\d+$/
    if(!reg.test(contact)){errors.push('contact must contain numbers only'); return errors;}
    if(contact.length !== 11 ){errors.push('contact should consist of 11 numbers'); return errors;}
}

function emailChecker(email, errors) {
    if(email === ''){errors.push('email is required');return errors;}
    var reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(!reg.test(email)){errors.push('not a valid email'); return errors;}
}

