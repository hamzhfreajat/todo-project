var userName = prompt("Please Enter Your Name :")
var userGender = prompt("Please Enter Your Gender:")
var confirmMassage = "If you wants to skip the welcome massage" ;
const isInputCorrect = value => {
    value = value.toLowerCase();
    if(value === 'yes' || value === 'no'){
        return true
    }
    return false;
}
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


if(!confirm(confirmMassage)){
    if (userGender != ""){
        alert("Welcome : "+userGender +" "+ userName )
    }else{
        alert("Your Name is :" + userName )
    }
}
let userUniversity = prompt('Are you in university ! "Hint : The answer should be Yes Or No"');
while(!isInputCorrect(userUniversity)) {
    userUniversity = prompt('Are you in university ! "Hint : The answer should be Yes Or No');
}
let userLocation = prompt('Are you live in Jordan ! "Hint : The answer should be Yes Or No"');
while(!isInputCorrect(userLocation)) {
     userLocation = prompt('Are you live in Jordan ! "Hint : The answer should be Yes Or No');
}
let userCarrer = prompt('Are you programmer ! "Hint : The answer should be Yes Or No"');
while(!isInputCorrect(userCarrer)) {
     userCarrer = prompt('Are you programmer ! "Hint : The answer should be Yes Or No');
}
const userArray = [userName , userGender , userAge , userUniversity, userLocation , userCarrer];

userArray.forEach(item => console.log(item));



