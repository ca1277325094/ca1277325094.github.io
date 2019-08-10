function paging(el,obj){

		var prev=el.getElementsByClassName("Cz_main_prev")[0];
		var next=el.getElementsByClassName("Cz_main_next")[0];
		var content=el.getElementsByClassName("Cz_main_page_content")[0];


		var flag=true;

		function pass(){
			flag=true;
		}

		// 默认显示那一页
		var page=obj.page;
		// 总页数
		var total=obj.total;
		// 显示几个页码
		var num=obj.num;
		// 中间值
		var mid=(num+1)/2;

		function render(){
			var html="";
			// 页码为num中间值以及之前数字的时候
			if(page<=mid){

				for(var i=1;i<=num-2;i++){

					if(page==i){
						html+="<span class='num' style='background:green'>"+i+"</span>"
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
						html+="<span class='num' style='background:green'>"+i+"</span>"
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
						html+="<span class='num' style='background:green'>"+i+"</span>"
					}else{
						html+="<span class='num'>"+i+"</span>"
					}

				}

				html+="<span>...</span>";
				html+="<span class='num'>"+total+"</span>";

			}

			// 将拼接好的页码插入容器
			content.innerHTML=html;
		}

		// 初始化填充
		render();
		obj.change(page,pass);

		// 点击下一页
		next.onclick=function(){

			if(flag){

				flag=false;

				page++;
				if(page>total){
					page=total;
				}else{
					render();

					obj.change(page,pass);

				}

			}

		}

		// 点击上一页
		prev.onclick=function(){

			if(flag){

				flag=false;

				page--;
				if(page<1){
					page=1;
				}else{
					render();

					obj.change(page,pass);
				}

			}

		}

		// 页码按钮点击
		
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