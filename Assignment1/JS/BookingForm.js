$(document).ready( () => {	
  $("#submitBtn").click(function(){
     var nID = $("#nameId").val();
     localStorage.setItem("nameID",nID) 
     var tID = $("#timeId").val();
     localStorage.setItem("timeID",tID) 
     var ohip = $("#ohipNum").val();
     localStorage.setItem("ohipID",ohip) 
     var eID = $("#emailId").val();
     localStorage.setItem("emailID",eID) 
     var pID = $("#phoneId").val();
     localStorage.setItem("phoneID",pID)   
   });
});