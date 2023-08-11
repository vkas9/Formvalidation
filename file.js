let username=document.getElementsByClassName("username");
let password=document.getElementsByClassName("password");


function validateForm(){
    if(username.value==""){
        console.log("empty");
    }
    return false;
}
