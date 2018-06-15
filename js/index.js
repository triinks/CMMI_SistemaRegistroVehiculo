//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $email    = $("#Email");
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function isEmailValid() {

  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test($("#Email").val())) {
    return false;
  } else {
    return true;
    alert("valido");
  }
}

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isEmailValid() && isPasswordValid() && arePasswordsMatching();
}

function emailEvent() {
//Find out if email is v alid
  if(isEmailValid()) {
    //Hide hint if valid
     $email.next().hide();   
  } else {
    //else show hint
    $email.next().show();
  }
}

function passwordEvent(){
    //Find out if password is valid  
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint 
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on email input
$password.focus(emailEvent).keyup(emailEvent).keyup(enableSubmitEvent);

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();