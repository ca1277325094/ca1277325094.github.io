$("document").ready(function(){
    var Cz_message_ipt = document.getElementById("Cz_message_iptu")
    var Cz_theme = document.getElementById("Cz_theme");
    var Cz_message_ipt1 = document.getElementById("Cz_message_ipt1")
    var Cz_content = document.getElementById("Cz_content")
    var Cz_code=document.getElementById("Cz_code");
    
    var Cz_special = /[\s%&#@*#]/
    function fun(flag) {
        if($("#Cz_message_ipt").val() == ""&&!flag){
            return false
        }
        if ($("#Cz_message_ipt").val() == "") {
            $("#Cz_theme").css({display:"block"})
            $("#Cz_theme").html("请输入内容")
            return false
        }
        if (Cz_special.test($("#Cz_message_ipt").val())) {
            $("#Cz_theme").css({display:"block"})
            $("#Cz_theme").html("包含非法字符") 
            return false
        }
        return true
    }
    
    $("#Cz_message_ipt").blur(fun)
    $("#Cz_message_ipt").focus(function(){
        $("#Cz_theme").css({display:"none"})
    })

    function Fun(flag) {
        if(Cz_message_ipt1.innerHTML==""&&!flag){
            return false
        }
        if (Cz_message_ipt1.innerHTML==""){
            console.log(Cz_message_ipt1.innerHTML=="")
            $("#Cz_content").css({ display: "block" });
            $("#Cz_content").html("内容不能为空")
            return false
            
        }
        return true
    }
    $("#Cz_message_ipt1").blur(Fun)
    $("#Cz_message_ipt1").focus(function () {
        $("#Cz_content").css({ display: "none" });
    })

var telReg=/^1[3-9]\d{9}$/
function Person(flag){
    if($("#Cz_message_ipt0").val()==""&&!flag){
        return false
    }
        
    
        if($("#Cz_message_ipt0").val()==""){
            $("#Cz_person").css({display:"block"});
            $("#Cz_person").html("请输入2-10位中文字符")
            return false
        }
        return true
}
$("#Cz_message_ipt0").blur(Person);
$("#Cz_message_ipt0").focus(function(){
    $("#Cz_person").css({display:"none"})
})
var telReg=/^1[3-9]\d{9}$/
function Tel(flag){
    if($("#Cz_message_ipt3").val()==""&&!flag){
        return false
    }
    if($("#Cz_message_ipt3").val()==""){
        $("#Cz_tel").css({display:"block"});
            $("#Cz_tel").html("请输入手機號")
            return false
    }
    if(!(telReg.test($("#Cz_message_ipt3").val()))){
        $("#Cz_tel").css({display:"block"});
        $("#Cz_tel").html("请输入正确手机号格式");
        return false
    }
    return true
}
$("#Cz_message_ipt3").blur(Tel);
$("#Cz_message_ipt3").focus(function(){
    $("#Cz_tel").css({display:"none"})
})
var  Cz_str = "abcdefghijklmopqrstuvwxyz0123456789";
function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
var codes = "";
function codeFun() {
    codes = "";
    for (var i = 0; i < 4; i++) {
        codes +=Cz_str.charAt(random(0, Cz_str.length - 1));
    }
    console.log(codes)
    Cz_code.innerHTML=codes
   
}
$("#Cz_code").click(codeFun)
 var Cz_form=document.getElementById("Cz_form");
 var Cz_message_ipt4=document.getElementById("Cz_message_ipt4")
 
Cz_form.onsubmit=function(){
     var patts= new RegExp(codes,"i")
    if( !((fun(true))&&Fun(true)&&Person(true)&&Tel(true))){
         return false
     }
     if(patts.test(Cz_message_ipt4.innerHTML)){
         console.log(Cz_message_ipt4.innerHTML)
     }
     else{
        alert("您的验证码有误")
        return false
    }
 }
})
