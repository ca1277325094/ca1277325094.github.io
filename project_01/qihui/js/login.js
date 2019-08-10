// 手机号

ipt_tel.onfocus=function(){

	wrong_txt1.style.display="none"

}

ipt_tel.onblur=function(){
	telFun(false)
}

function telFun(flag){

	if(flag){

		if(ipt_tel.value==""){

			wrong_txt1.style.display="block"

			var xx="请输入电话号码"

			ipt_tel_txt.innerHTML=xx

			return false

		}

	}else{

		if(ipt_tel.value==""){

			return false

		}

	}

	if(!(/^1[3-9][0-9]{9}$/.test(ipt_tel.value))){

		wrong_txt1.style.display="block"

		var xx="手机号必须是以1开头的11位数字"

		ipt_tel_txt.innerHTML=xx

		return false
	}

	return true

}

// 验证码
 
	var arr="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

	var brr=""

	sendyzm1.onclick=function(){

		brr=""

		for(var i=0;i<4;i++){

			var num=Math.floor(Math.random()*(arr.length))

			brr+=arr.charAt(num)

		}

		this.innerHTML=brr

	}

	ipt_yzm.onfocus=function(){

		wrong_txt2.style.display="none"

	}

	ipt_yzm.onblur=function(){

		yzmFun(false)

	}

	function yzmFun(flag){

		if(flag){

			if(ipt_yzm.value==""){

				wrong_txt2.style.display="block"

				var xx="请输入验证码"

				ipt_tel_yzm.innerHTML=xx

				return false

			}

		}else{

			if(ipt_yzm.value==""){

				return false

			}

		}

		if((ipt_yzm.value.toLowerCase())!==(sendyzm1.innerHTML.toLowerCase())){

			wrong_txt2.style.display="block"

			var xx="验证码错误"

			ipt_tel_yzm.innerHTML=xx

			return false

		}

		return true

	}
// 短信验证码
	var crr="1234567890"

	var drr=""

	sendyzm2.onclick=function(){

		drr=""

		for(var i=0;i<4;i++){

			var num=Math.floor(Math.random()*(crr.length))

			drr+=crr.charAt(num)

		}

		this.innerHTML=drr

	}

	ipt_sjyzm.onfocus=function(){

		wrong_txt3.style.display="none"

	}

	ipt_sjyzm.onblur=function(){

		sjyzmFun(false)

	}

	function sjyzmFun(flag){

		if(flag){

			if(ipt_sjyzm.value==""){

				wrong_txt3.style.display="block"

				var xx="请输入手机验证码"

				ipt_tel_sjyzm.innerHTML=xx

				return false

			}

		}else{

			if(ipt_sjyzm.value==""){

				return false

			}

		}

		if((ipt_sjyzm.value)!==(sendyzm2.innerHTML)){

			wrong_txt3.style.display="block"

			var xx="手机验证码错误"

			ipt_tel_sjyzm.innerHTML=xx

			return false

		}

		return true

	}

	// 勾选
	
	function ckb(flag){

		if(flag){

			if(!login_main_form_xz.checked){
				alert("需要勾选")
				return false
			}

		}

		return true
	}

	login_main_form.onsubmit=function(){

		var res1=telFun(true)
		if(!res1){
			return false
		}

		var res2=yzmFun(true)
		if(!res2){
			return false
		}

		var res3=sjyzmFun(true)
		if(!res3){
			return false
		}

		var res4=ckb(true)
		if(!res4){
			return false
		}
		return true

	}