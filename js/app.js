
var userName = prompt("Please Enter Your Name :")
var userGender = prompt("Please Enter Your Gender:")
userGender = userGender.toLowerCase();

switch (userGender){
    case "male":
        userGender = "Mr"
        break;
    case "female":
        userGender="Ms"
        break;
    default:
    {
        alert("The Gender Should be male or female")
        userGender = ""
    }
}
var userAge = prompt("Plaese Enter Your Age");
if (userAge < 1){
    alert("The number must be greater than zero");
}
var confirmMassage = "If you wants to skip the welcome massage" ;

if(!confirm(confirmMassage)){
    if (userGender != ""){
        alert("Welcome : "+userGender +" "+ userName )
    }else{
        alert("Your Name is :" + userName )
    }
}



