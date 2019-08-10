//头部效果
(function () {
    var x = 0;
    $(".header_m .nav_m a").mouseover(function () {
        if (x == 0) {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" })
        } else {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" }).removeClass("on")
        }
        var index = $(this).index()
        $(this).css({ color: "#015cd1" }).addClass("on")
        x = index
    }).mouseout(function () {
        if (x == 0) {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" })
        } else {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" }).removeClass("on")
        }
    })
})()
//动画效果
$(".introduce_m p").eq(0).css({ marginTop: 170 })
$(".introduce_m h2").animate({
    fontSize: 32,
}, 500)
$(".introduce_m p").eq(0).animate({
    marginTop: 0,
}, 500)
$(".anli_m ul li").eq(0).css({
    top: 20,
    left: -600
})
$(".anli_m ul li").eq(1).css({
    top: 20,
    left: -300
})
$(".anli_m ul li").eq(2).css({
    top: 20,
    left: 1200
})
$(".anli_m ul li").eq(3).css({
    top: 20,
    left: 1500
})


var flag1 = true
var flag2 = true

$(window).scroll(function () {
    var wh = $(window).height()
    var st = $(window).scrollTop()
    var oft1 = $(".youshi_m h2").offset().top;
    var oft2 = Math.floor($(".youshi_m>ul li").eq(0).offset().top)
    var oft3 = $(".anli_m h2").offset().top;
    var oft4 = $(".anli_m ul li").eq(0).offset().top;
    // console.log(wh, st, oft2)
    if (oft1 < wh + st - 50) {
        $(".youshi_m h2").animate({
            fontSize: 32,
        }, 500)
    }
    if (oft2 < wh + st + 500 && flag1) {
        flag1 = false
        $(".youshi_m>ul li").animate({
            marginTop: 0,
        }, 100)
    }
    if (oft3 < wh + st - 50) {
        $(".anli_m h2").animate({
            fontSize: 32,
        }, 500)
    }
    if (oft4 < wh + st - 50 && flag2) {
        flag2 = false
        $(".anli_m ul li").eq(0).animate({
            top: 20,
            left: 0
        }, 100)
        $(".anli_m ul li").eq(1).animate({
            top: 20,
            left: 305
        }, 100)
        $(".anli_m ul li").eq(2).animate({
            top: 20,
            left: 610
        }, 100)
        $(".anli_m ul li").eq(3).animate({
            top: 20,
            left: 915
        }, 100)
    }
})