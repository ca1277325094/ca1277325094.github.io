

; (function () {

function paging(el,obj){

		var prev=el.getElementsByClassName("djprev")[0];
		var next=el.getElementsByClassName("djnext")[0];
		var content=el.getElementsByClassName("djcontent")[0];
       

		var flag=true;

		function pass(){
			flag=true;
		}

		var page=obj.page;
		
		var total=obj.total;
		
		var num=obj.num;
		
		var mid=(num+1)/2;

		function render(){
			var html="";
			
			if(page<=mid){

				for(var i=1;i<=num-2;i++){

					if(page==i){
						html+="<span class='num' style='background:red'>"+i+"</span>"
					}else{
						html+="<span class='num'>"+i+"</span>"
					}

				}

				html+="<span>...</span>"
				html+="<span class='num'>"+total+"</span>"

			}

			if(page>total-mid){

				html+="<span class='num'>1</span>"
				html+="<span>...</span>"

				for(var i=total-(num-3);i<=total;i++){

					if(page==i){
						html+="<span class='num' style='background:red'>"+i+"</span>"
					}else{
						html+="<span class='num'>"+i+"</span>"
					}

				}

			}

			if(page>mid&&page<=total-mid){

				html+="<span class='num'>1</span>";
				html+="<span>...</span>";

				for(var i=page-(num-4-1)/2;i<=page+(num-4-1)/2;i++){

					if(page==i){
						html+="<span class='num' style='background:red'>"+i+"</span>"
					}else{
						html+="<span class='num'>"+i+"</span>"
					}

				}

				html+="<span>...</span>";
				html+="<span class='num'>"+total+"</span>";

			}

			
			content.innerHTML=html;
		}

		
		render();
		obj.change(page,pass);

		
		next.onclick=function(){

			if(flag){

				flag=false;

				page++;
				if(page>total){
					page=total;
					flag=true;
				}else{
					render();

					obj.change(page,pass);
				}

			}

		}

		
		prev.onclick=function(){

			if(flag){

				flag=false;

				page--;
				if(page<1){
					page=1;
					flag=true;
				}else{
					render();

					obj.change(page,pass);
				}

			}

		}

		content.onclick=function(e){

			if(flag){

				flag=false;

				if(e.target.className=="num"){

					page=parseInt(e.target.innerHTML);

					render();

					obj.change(page,pass);
				}

			}

		}

	}

//切换

 var res=$(".djpages");
 paging(res[0],{
		page:1,
		total:23,
		num:7,
		change:function(p,next){
			next();
		}
	})



$("#djye4").click(function(){

   var add= parseInt( $("#djye3")[0].value);

   // console.log(add)
   paging(res[0],{
		page:add,
		total:23,
		num:7,
		change:function(p,next){
			
			next();
		}
	})

   $("#djye3")[0].value="";

})




 //输入框
 // var x=0;


	// $("#djyin4").click(function(){

 //     $("#djyin").css({display:"none"})
	// 	djjj.src="images/qie3_03.png"

		
 //        x++;
		
	// 	if ((x/2)%1) {
			
	// 	$("#djyin").css({display:"block"})
	// 	djjj.src="images/djqie2_07.png"
		
	// 	}else{
			
	// 	$("#djyin").css({display:"none"})
	// 	djjj.src="images/qie3_03.png"

	// 	x=0;
      
	// 	}

	// })


 $("#djyin4").mouseout(function(){

	
	   $("#djyin").css({display:"none"})
		djjj.src="images/qie3_03.png"
	   
	
   })
$("#djyin4").mousemove(function(){

	
	   $("#djyin").css({display:"block"})
	   djjj.src="images/djqie2_07.png"
	
   })

//输入框切换
	var add=document.getElementById('djyin').children;

 	// console.log( djchang2.placeholder)
      
      for(var i=0;i<add.length;i++){

         add[i].onclick=function(){
         	
          djchang2.placeholder="请输入"+this.innerHTML+"名称"

         }

      }

    



 


	//分格颜色
	var bba=[1,3,5,7,9,11,13];

    $(".djpp").each(function(i){
      
	$(".djpp").eq((bba[i])).css({background:"#f3f6f8"});
	
    })

//变化

$(".djnnn1").mousemove(function(){

  $("#djyingg").css({marginRight:0,width:100,color:"white"});
})

$(".djnnn1").mouseout(function(){

  $("#djyingg").css({marginRight:-200,width:100,color:"white",marginTop:0});
  
})

})();
