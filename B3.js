function pwdd(){
    let nam = document.getElementById("name").value;
    let data = document.getElementById("pwd").value;
    if (data === "123"){
        alert("đăng nhập thành công , tên đăng nhập : "+nam)
    }
    else{
        alert("Đăng nhập thất bại")
    }
}