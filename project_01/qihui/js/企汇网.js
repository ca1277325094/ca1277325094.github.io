var bannerSec = document.querySelectorAll('.p_01');


var secP = document.querySelectorAll('.p_01>p')
var secUl = document.querySelectorAll('.p_nr0')
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




var p_lis = document.querySelectorAll('.p_shilw>ul>li');
var p_uis = document.querySelectorAll('.p_duoyu>ul');

var count=0;

for(var i=0;i<p_lis.length;i++){


    p_lis[i].index=i;

    p_lis[i].onmouseenter=function(){

 console.log(111);
 
        p_lis[count].className="";
        p_uis[count].className="";


        this.className="p_con";
        p_uis[this.index].className="p_duoyu1";

        count=this.index;

    }

}