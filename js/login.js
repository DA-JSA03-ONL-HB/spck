var username = document.getElementById("name")
var password = document.getElementById("password")

function checklogin () {
    if (username.value.trim().length == 0 || password.value.trim().length == 0 ){
        alert('vui lòng nhập đầy đủ thông tin')
    }
    else if( JSON.parse(localStorage.getItem('User Nam')) != username || JSON.parse(localStorage.getItem('passwword'))) {
        alert('Tên đăng nhập hoặc mật khẩu chưa đúng')
    }
    else{
        alert('Bạn đăng nhập thành công');
        window.location.href='../html/index.html'
    }

}