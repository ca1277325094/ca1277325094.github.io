function setCookie(cookieName,cookieVal,cookieDay){

    if(cookieDay){//如果cookieDay的布尔值为真  执行if{}的代码
        var d=new Date();
        d.setTime(d.getTime()+cookieDay*1000*60*60*24);
        var t=d.toGMTString();
        var text=CryptoJS.AES.encrypt(cookieVal,"good morning").toString();//翻译
        document.cookie=cookieName+"="+encodeURIComponent(text)+";path=/;expires="+t;//转码
    }else{//如果cookieDay的布尔值为假 执行else{}的代码
        document.cookie=cookieName+"="+encodeURIComponent(text)+";path=/";
    }
    
}


function setCookie(cookieName,cookieVal,cookieDay){

    if(cookieDay){
        var d=new Date();
        d.setTime(d.getTime()+cookieDay*1000*60*60*24);
    }

}




























function getCookie(cookieName){
    
    var str=" "+document.cookie+";";

    if(str.indexOf(" "+cookieName+"=")==-1){
        return false;
    }

    // var patt=/\sage=(.*?);/;
    var patt=new RegExp("\\s"+cookieName+"=(.*?);");
    
    var text=decodeURIComponent(patt.exec(str)[1]);//解码

    res=CryptoJS.AES.decrypt(text,"good morning").toString(CryptoJS.enc.Utf8);//翻译
    console.log(res);

    return res;

}




