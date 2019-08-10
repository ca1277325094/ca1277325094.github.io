var bannerSec = document.querySelectorAll('.p_01');


var secP = document.querySelectorAll('.p_01>p')
var secUl = document.querySelectorAll('.p_links')
bannerSec.forEach(function (item, index) {
  
    item.index = index;
    var ind = index;
  
  
   
    
    item.onmouseenter = function (e) {
        secUl[ind].style.display = 'block';
        e.target.style.background = '#ff6700'
        e.target.style.cursor = 'pointer'
    }
    item.onmouseleave = function (e) {
        secUl[ind].style.display = 'none';
        e.target.style.background = ''
        e.target.style.cursor = ''
    }

})


var plis = document.querySelector('.p_nrong2_ul');
var p_lis = document.querySelectorAll('.p_nrong2_ul>li')

var btns=document.getElementsByClassName("p_nrong2_ul2")[0].children
var imgs=document.getElementsByClassName("p_nrong2_ul")[0].children
console.log(imgs)
var x = 0;



function next() {
    timer = setInterval(function () {
       x++;
       if (x ==4) {
           x = 0;
           $(".p_nrong2_ul").css({ marginLeft: 0 });
          

       }
       $(".p_nrong2_ul").animate({ marginLeft: -728 * x }, 500)
      
    
   }, 5000);

  
}

next();

// // for(var i=0;i<imgs.length;i++){
// //     // $("#btn").append("<button>"+(i+1)+"</button>")
// //     $("<button></button>").html(i+1).appendTo(btn)
// // }


// $("imgs").eq(0).css({
//     left:0
// })

// btns.click(function(){

//     var index=$(this).index();

//     if(index>x){

//         // 把即将显示的图片定位到view右侧
//         imgs.eq(index).css({
//             left:500
//         })

//         // 即将显示的和当前显示的一起往左移动
        
//         imgs.eq(x).animate({left:-500})
//         imgs.eq(index).animate({left:0})

//         x=index;

//     }else if(index<x){

//         // 把即将显示的图片定位到view左侧
//         imgs.eq(index).css({
//             left:-500
//         })

//         // 即将显示的和当前显示的一起往右移动
        
//         imgs.eq(x).animate({left:500})
//         imgs.eq(index).animate({left:0})

//         x=index;

//     }

// })

// $('.asd').mousemove(function () {
//    clearInterval(timer);
// })
// $('.asd').mouseout(function () {
//    next()
// })