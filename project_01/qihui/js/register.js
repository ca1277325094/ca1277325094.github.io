// 手机号

log_tel.onfocus=function(){

	log_txt.innerHTML=""

}

log_tel.onblur=function(){
	dltelFun()
}

function dltelFun(flag){

	if(flag){

		if(log_tel.value==""){

			var xx="请输入电话号码"

			log_txt.innerHTML=xx

			return false

		}

	}else{

		if(log_tel.value==""){

			return false

		}

	}

	if(!(/^1[3-9][0-9]{9}$/.test(log_tel.value))){

		var xx="手机号必须是以1开头的11位数字"

		log_txt.innerHTML=xx

		return false
	}

	return true

}

//密码

log_pwd.onfocus=function(){

	log_txt.innerHTML=""

}

log_pwd.onblur=function(){

	dlpswFun()

}

function dlpswFun(flag){

	if(flag){

		if(log_pwd.value==""){

			var xx="请输入密码"

			log_txt.innerHTML=xx

			return false

		}

	}else{

		if(log_pwd.value==""){

			return false

		}

	}

	if(!(/^.{6,20}$/.test(log_pwd.value))){

		var xx="密码长度需要在6-20位"

		log_txt.innerHTML=xx

		return false

	}

	if(/[\s\$&\*]/.test(log_pwd.value)){

		var xx="密码中含有非法字符"

		log_txt.innerHTML=xx

		return false
	}

	return true

}

	
	log_bg.onsubmit=function(){

		var res1=dltelFun(true)
		if(!res1){
			return false
		}

		var res2=dlpswFun(true)
		if(!res2){
			return false
		}

		if(wjmm_box.checked){

			setCookie("log_tel",log_tel.value,7)
			setCookie("log_pwd",log_pwd.value,7)

		}

	}

	var telVal=getCookie("log_tel")

	if(telVal){

		log_tel.value=telVal;
		log_pwd.value=getCookie("log_pwd")

	}