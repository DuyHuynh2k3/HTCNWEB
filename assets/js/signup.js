$(document).ready(function(){

    function KiemTraHo(){
        if($("#txtHo").val()==""){
            $("#errHo").html("Xin nhập thông tin")
            return false
        }
        var rex_ho =/^[A-Z]{1}[a-z]*$/
        if(!rex_ho.test($("#txtHo").val())){
            $("#errHo").html("! Họ bắt đầu bằng ký tự hoa")
            return false
        }
        $("#errHo").html("*")
        return true
    }
    $("#txtHo").blur(KiemTraHo)
    function KiemTraTen(){
        if($("#txtTen").val()==""){
            $("#errTen").html("Xin nhập thông tin")
            return false
        }
        var rex_ten = /^[A-Z]{1}[a-z]*$/
        if(!rex_ten.test($("#txtTen").val())){
            $("#errTen").html("! Tên bắt đầu bằng ký tự hoa")
            return false
        }
        $("#errTen").html("*")
        return true
    }
    $("#txtTen").blur(KiemTraTen)


    function KiemTraEmail(){
        if($("#txtEmail").val()==""){
            $("#errEmail").html("Xin nhập thông tin")
            return false
        }
        var rex_email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
        if(!rex_email.test($("#txtEmail").val())){
            $("#errEmail").html("! Email không tồn tại")
            return false
        }
        $("#errEmail").html("*")
        return true
    }
    $("#txtEmail").blur(KiemTraEmail)


    function KiemTraSoDienThoai(){
        if($("#txtTel").val()==""){
            $("#errTel").html("Xin nhập thông tin")
            return false
        }
        var rex_sdt = /^0{1}[1-9]{9}$/
        if(!rex_sdt.test($("#txtTel").val())){
            $("#errTel").html("! Số điện thoại không tồn tại")
            return false
        }
        $("#errTel").html("*")
        return true
    }
    $("#txtTel").blur(KiemTraSoDienThoai)


    function KiemTraNgaySinh(){
        if($("#txtNgay").val()==""){
            $("#errNgay").html("Xin nhập thông tin")
            return false
        }
        var day = new Date($("#txtNgay").val())
        var today = new Date()
        if((today.getFullYear() - day.getFullYear()) < 18){
            $("#errNgay").html("! Tuổi phải trên 18")
            return false
        }
        $("#errNgay").html("*")
        return true
    }
    $("#txtNgay").blur(KiemTraNgaySinh)


    function KiemTraMatKhau(){
        if($("#txtPass").val()==""){
            $("#errpass").html("Xin nhập thông tin")
            return false
        }
        var rex_pass = /^[a-zA-Z0-9_']{8,}$/
        if(!rex_pass.test($("#txtPass").val())){
            $("#errpass").html("! Mật khẩu chứa ít nhất 8 ký tự và không chưa ký tự đặt biệt")
            return false
        }
        $("#errpass").html("*")
        return true
    }
    $("#txtPass").blur(KiemTraMatKhau)


    function KiemTraLaiMatKhau(){
        if($("#txtPW").val()==""){
            $("#errPW").html("Xin nhập thông tin")
            return false
        }
        var matkhau = $("#txtPass").val()
        if(matkhau !=$("#txtPW").val()){
            $("#errPW").html("! Mật khẩu không giống ở trên")
            return false
        }
        $("#errPW").html("*")
        return true
    }
    $("#txtPW").blur(KiemTraLaiMatKhau)


    function KiemTraDiaChi(){
        if($("#txtDiaChi").val()==""){
            $("#errDiaChi").html("Xin nhập thông tin")
            return false
        }
        $("#errDiaChi").html("*")
        return true
    }
    $("#txtDiaChi").blur(KiemTraDiaChi)

    $("#btnDK").click(function(){
        if(!KiemTraHo()||!KiemTraTen()||!KiemTraEmail()||!KiemTraSoDienThoai()||!KiemTraNgaySinh()||!KiemTraLaiMatKhau()||!KiemTraMatKhau()||!KiemTraDiaChi()){
            $("#message").html("Lỗi! Vui lòng nhập đầy đủ thông tin")
            return false
        }
        $("#message").html("Đăng ký thành công")
        window.location.href = 'index.html';
        return true
    })
})