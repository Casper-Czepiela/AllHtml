$(document).ready( () => {
  var name = localStorage.getItem("nameID");
  $("#printBook").append(name);
  var time = localStorage.getItem("timeID");
  $("#printBook1").append(time);
  var ohip = localStorage.getItem("ohipID");
  $("#printBook2").append(ohip);
  var email = localStorage.getItem("emailID");
  $("#printBook3").append(email);
  var phone = localStorage.getItem("phoneID");
  $("#printBook4").append(phone);
});