var Email = document.getElementById("email")
var password = document.getElementById("password")
var form = document.getElementById("form")
let users= JSON.parse(localStorage.getItem("user"))|| [

]
function checklogin () {
   

}
form.addEventListener("submit",function (e){
     e.preventDefault()
     let index= users.findIndex(item=>item.Email== Email.value && item.pass == password.value)
    if (Email.value.trim().length == 0 || password.value.trim().length == 0 ){
        alert("Vui lòng nhập đầy đủ thông tin")
    }
    else if(index== -1) {
        alert('Tên đăng nhập hoặc mật khẩu chưa đúng')
    }
    else{
        alert('Bạn đăng nhập thành công');
        window.location.href='../html/index.html'
    }
})   
   


 
