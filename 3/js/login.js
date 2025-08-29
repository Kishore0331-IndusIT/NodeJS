
        function validate() {
  
  var pass = document.reg_form.pass;
  var email = document.reg_form.email;
    if (!pass.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
    alert("Password must be 8-15 characters long and contain a lowercase, uppercase, digit, and special character.");
    pass.focus();
    return false;
  }

   if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }
  return true;
}

   