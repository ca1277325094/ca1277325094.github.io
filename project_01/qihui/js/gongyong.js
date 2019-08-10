//轮播图
; (function () {
    $(".bigpic ul li").eq(0).css({
        backgroundImage: "url(images/mh/banner1.jpg)"
    }).show()
    $(".bigpic ul li").eq(1).css({
        backgroundImage: "url(images/mh/banner2.jpg)"
    })
    var x = 0;
    function xia() {
        $(".bigpic ul li").eq(x).fadeOut(1000)
        $(".mark ul li").eq(x).removeClass("on")
        x++
        if (x > 1) { x = 0 }
        $(".bigpic ul li").eq(x).fadeIn(1000)
        $(".mark ul li").eq(x).addClass("on")
    }
    //自动播放
    var timer = setInterval(xia, 4000)
    $(".banner_m").mouseover(function () {
        clearInterval(timer)
    }).mouseout(function () {
        timer = setInterval(xia, 4000)
    })
    //下面小圆点的点击事件
    $(".mark ul li").click(function () {
        var index = $(this).index()
        $(".bigpic ul li").eq(x).fadeOut(1000)
        $(".mark ul li").eq(x).removeClass("on")
        x = index
        $(".bigpic ul li").eq(x).fadeIn(1000)
        $(".mark ul li").eq(x).addClass("on")
    })
})()
    // 尾部交互
    ; (function () {
        //最底部图片切换效果
        var x = 0
        $(".aboutSix .aboutSix_foot .foot_3 span").mouseover(function () {
            $(".aboutSix .aboutSix_foot .foot_3 span").eq(x).css({
                backgroundPosition: "center 0"
            })
            var index = $(this).index()
            x = index
            $(".aboutSix .aboutSix_foot .foot_3 span").eq(x).css({
                backgroundPosition: "center -52px"
            })
        }).mouseout(function () {
            $(".aboutSix .aboutSix_foot .foot_3 span").eq(x).css({
                backgroundPosition: "center 0"
            })
        })
        // 新浪小图标的效果
        $(".aboutSix .aboutSix_foot .foot_1 .foot_1_icon a").mouseover(function () {
            $(".aboutSix .aboutSix_foot .foot_1 .foot_1_icon a").css({
                backgroundPosition: "0 -173px"
            })
        }).mouseout(function () {
            $(".aboutSix .aboutSix_foot .foot_1 .foot_1_icon a").css({
                backgroundPosition: "0 -140px"
            })
        })
    })()
    //返回顶部
    ; (function () {
        $(".go_back_top").mouseover(function () {
            $(".go_back_top").css({
                backgroundPosition: "0 -45px"
            })
        }).mouseout(function(){
            $(".go_back_top").css({
                backgroundPosition: "0 0px"
            })
        }).click(function(){
            $("body,html").animate({
                scrollTop:0
            },500)
        })

        $(window).scroll(function(){
            var st= $("body,html").scrollTop()
            if(st>200){
                $(".go_back_top").css({
                    display:"block"
                })
            }else{
                $(".go_back_top").css({
                    display:"none"
                })
            }
        })
    })()

