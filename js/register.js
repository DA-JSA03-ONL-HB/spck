var username = document.getElementById("name")
var phone_number = document.getElementById("phone-number")
var email = document.getElementById("Email")
var pass = document.getElementById("password")
var repass = document.getElementById("re-password")
var form = document.getElementById("form")
let users= JSON.parse(localStorage.getItem("user"))|| [

]


form.addEventListener("submit",function (){
    var user = {
        "username":username.value,
        "phone-number":phone_number.value,
        "Email":email.value,
        "pass":password.value
    }
    users.push(user)
    localStorage.setItem("user", JSON.stringify(users))
   
})