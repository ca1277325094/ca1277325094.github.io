var coho_list=["控制电缆","橡套电缆","漆包线","网管","绝缘导线","音频线、视频线","特种电缆","电力电缆","信号电缆","电子线","电线电缆附件","电气设备用电缆","排线","同轴电缆","其他电线、电缆","通讯电缆","仪表电缆"]

var area=document.getElementsByClassName('area')[0];
var industry=document.getElementsByClassName('industry')[0];
var moreind=industry.getElementsByTagName('div')[0];
var moreare=area.getElementsByTagName('div')[0];
var ul=document.getElementsByClassName('productShowGrid')[0].children[0];
var li=ul.getElementsByTagName('li')[0];
var ulHot=document.getElementsByClassName('productHot')[0].children[0]
var searchInput=document.getElementsByClassName('searchbox')[0].children[1].children[0]
var searchArr=document.getElementsByClassName('searchbox')[0].children[0].children[1]

// 选择搜索范围
$('.target').click(function(){
	if($('.searchRange').css('display')=="block"){
		$('.searchRange').hide();
		searchArr.style.transform="rotate(0deg)";
	}else{

		$('.searchRange').show();
		searchArr.style.transform="rotate(180deg)";
	}	
})

$('.range').click(function(){
	$('.target span').html($(this).html());
	$('.searchRange').hide();
	var res=searchInput.placeholder="输入"+$(this).html()+"名称";
	searchArr.style.transform="rotate(0deg)";
})


// 将行业/供货地区显示在列表里
for(var i=0;i<coho_list.length;i++){
	var node=document.createElement('a');
	node.innerHTML=coho_list[i];
	industry.appendChild(node);
}

for(var x in data){
	var node=document.createElement('a');
	node.innerHTML=x;
	area.appendChild(node);
}



function morexian(){

	if(this.parentNode.style.overflow=="visible"){
		this.parentNode.style.overflow="hidden";
		this.parentNode.style.height="30px";
		this.innerHTML="更多"
	}else{
		this.parentNode.style.overflow="visible";
		this.parentNode.style.height="auto";
		this.innerHTML="隐藏"
	}

}

// 点击显示更多供货地区/行业选项
moreind.onclick=morexian;
moreare.onclick=morexian;

// 克隆单个商品填满商品列表
for(var i=0;i<39;i++){
	var node=li.cloneNode(true);
	ul.appendChild(node)
}

// 克隆单个商品填入热门商品列表
function ulHots(){

	var node=document.createElement('div')
	var node2=document.createElement('div')
	node.className="hotLogo";
	node.innerHTML="相关推荐";
	node2.className="hotTri";
	node.appendChild(node2);
	return node;

}

for(var i=0;i<4;i++){
	var nodeli=li.cloneNode(true);
	var node=ulHots();
	nodeli.appendChild(node)
	ulHot.appendChild(nodeli);
	var liHot=ulHot.getElementsByTagName('li')
	liHot[i].children[0].children[0].children[0].src="http://img.qihuiwang.com/94ad8d96f739ff91e883bd041214e36f_300_0_fill_jpeg.jpg"
}



