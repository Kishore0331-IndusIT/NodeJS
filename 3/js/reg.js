   
        function validate() {
  var uname = document.reg_form.uname;
  var pass = document.reg_form.pass;
  var address = document.reg_form.address;
  var email = document.reg_form.email;
  var mobile = document.reg_form.mobile;
  var genderRadios = document.reg_form.gender;

  if (uname.value.trim() === "") {
    alert("User Name is required");
    uname.focus();
    return false;
  }

  if (!pass.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
    alert("Password must be 8-15 characters long and contain a lowercase, uppercase, digit, and special character.");
    pass.focus();
    return false;
  }

  if (address.value.trim() === "") {
    alert("Address is required");
    address.focus();
    return false;
  }

  let genderSelected = false;
  for (let i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      genderSelected = true;
      break;
    }
  }
  if (!genderSelected) {
    alert("Please select your gender.");
    return false;
  }

  if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }

  if (!mobile.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 digits and cannot start with 0.");
    mobile.focus();
    return false;
  }

  return true;
}

    