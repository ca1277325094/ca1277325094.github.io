// 商品轮播图
$('.detailsImg div:eq(0)').css({left:0})
$('.detailsImgSm img').first().css({borderColor:"#ff6600"})
var x=0;
var flag=true
var timer=setInterval(function(){

	if(x==3){
		$('.detailsImg div').first().css({left:345});
		$('.detailsImg div').eq(x).animate({left:-345});
		$('.detailsImg div').first().animate({left:0});
		$('.detailsImgSm img').eq(x).css({borderColor:"#fff"})
		$('.detailsImgSm img').first().css({borderColor:"#ff6600"})
		x=0;
	}else{
		$('.detailsImg div').eq(x+1).css({left:345});
		$('.detailsImg div').eq(x).animate({left:-345});
		$('.detailsImg div').eq(x+1).animate({left:0});
		$('.detailsImgSm img').eq(x).css({borderColor:"#fff"})
		$('.detailsImgSm img').eq(x+1).css({borderColor:"#ff6600"})
		x++;
	}
},2100)
$('.slides').mouseover(function(){
	clearInterval(timer)
})

$('.slides').mouseout(function(){

	timer=setInterval(function(){
		
		if(x==3){
			$('.detailsImg div').first().css({left:345});
			$('.detailsImg div').eq(x).animate({left:-345});
			$('.detailsImg div').first().animate({left:0});
			$('.detailsImgSm img').eq(x).css({borderColor:"#fff"})
			$('.detailsImgSm img').first().css({borderColor:"#ff6600"})
			x=0;
		}else{
			$('.detailsImg div').eq(x+1).css({left:345});
			$('.detailsImg div').eq(x).animate({left:-345});
			$('.detailsImg div').eq(x+1).animate({left:0});
			$('.detailsImgSm img').eq(x).css({borderColor:"#fff"})
			$('.detailsImgSm img').eq(x+1).css({borderColor:"#ff6600"})
			x++;
		}

	},2100)

})
$('.detailsImgSm').children().first().css({marginLeft:0})
$('.detailsImgSm').children().last().css({marginRight:0})
$('.detailsImgSm img').mouseover(function(){

	if(flag){
		
		flag=false;
		if($(this).index()>x){

			$('.detailsImg div').eq($(this).index()).css({left:345});
			$('.detailsImg div').eq(x).animate({left:-345},200);
			$('.detailsImg div').eq($(this).index()).animate({left:0},200,function(){
				flag=true;
			});
			$('.detailsImgSm img').eq(x).css({borderColor:"#fff"})
			$('.detailsImgSm img').eq($(this).index()).css({borderColor:"#ff6600"})

		}else if($(this).index()<x){

			$('.detailsImg div').eq($(this).index()).css({left:-345});
			$('.detailsImg div').eq(x).animate({left:345},200);
			$('.detailsImg div').eq($(this).index()).animate({left:0},200,function(){
				flag=true;
			});
			$('.detailsImgSm img').eq(x).css({borderColor:"#fff"})
			$('.detailsImgSm img').eq($(this).index()).css({borderColor:"#ff6600"})
		}else{
			flag=true;
		}
		x=$(this).index()

	}

})

// 收藏、分享、举报、扫码
$('.inclined>div').first().css({marginLeft:0});
$('.inclined>div').last().css({marginRight:0});

// 在相关栏目里的省企业名录里插入市
var clumnList=document.getElementsByClassName('clumnList')[0];

;(function(){

	for(var x in data){
		if(x=="山东省"){
			var html="";
			for(var y in data[x][0]){
				var node=document.createElement('a');
				node.innerHTML=y;
				node.href="#"
				clumnList.appendChild(node);
			}
		}
	}

})()

// 点击查看联系方式弹出联系方式界面
$('.lookTel').click(function(){
	
	$('.contactWay').css({display:"block"})
	$('body').css({overflow:"hidden"})

})

// 点击举报弹出举报界面
$('.report').click(function(){

	$('.reportpage').css({display:"block"})
	$('body').css({overflow:"hidden"})

})

// 点击X关闭“查看联系方式界面”或者“举报界面”
$('.close').click(function(){
	$('.contactWay').css({display:"none"})
	$('.reportpage').css({display:"none"})
	$('.QQonline').css({display:"none"})
	$('body').css({overflow:"visible"})
})


// 点击收藏或取消收藏店铺
$('.collectNo').click(function(){
	$('.collectNo').css({display:"none"})
	$('.collectYes').css({display:"block"})
})
$('.collectYes').click(function(){
	$('.collectYes').css({display:"none"})
	$('.collectNo').css({display:"block"})
})

// 分享界面小图标
var shareTo=$('.shareTo div')
for(var i=0;i<shareTo.length;i++){
	$('.shareTo div').eq(i).css({backgroundImage:"url(images/coho_share.png)"})
}

// 点击选择QQ或者匿名聊天
$('#QQonline').click(function(){
	
	$('.QQonline').css({display:"block"})

})