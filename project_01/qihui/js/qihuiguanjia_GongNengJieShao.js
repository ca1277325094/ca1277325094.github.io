//头部效果
(function () {
    var x = 0;
    $(".header_m .nav_m a").mouseover(function () {
        if (x == 1) {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" })
        } else {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" }).removeClass("on")
        }
        var index = $(this).index()
        $(this).css({ color: "#015cd1" }).addClass("on")
        x = index
    }).mouseout(function () {
        if (x == 1) {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" })
        } else {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" }).removeClass("on")
        }
    })
})()
//动画效果
$(".aboutFive .afTit").animate({ fontSize: 42, }, 500)
$(".aboutFive .about1").fadeIn(1200)
$(".aboutFive .about1_cen").animate({ marginTop: 0, }, 500)

$(".aboutFiv .aboutFive_list li").eq(0).css({ left: -360, top: 0 })
$(".aboutFiv .aboutFive_list li").eq(1).css({ left: 420, top: 370 })
$(".aboutFiv .aboutFive_list li").eq(2).css({ right: -360, top: 0 })

    ; (function () {
        $(window).scroll(function () {
            var wh = $(window).height()
            var st = $(window).scrollTop()
            var oft1 = $(".aboutTwo .aboutTwo_left").offset().top;
            var oft2 = $(".aboutThree .aboutThree_right").offset().top;
            var oft3 = $(".aboutFour .aboutFour_left").offset().top;
            var oft4 = $(".aboutFiv .aboutFive_right").offset().top;
            var oft5 = $(".aboutFiv .aboutFive_list li").eq(0).offset().top;

            if (oft1 < wh + st - 80) {
                $(".aboutTwo .aboutTwo_left").animate({
                    left: 0,
                }, 500)
                $(".aboutTwo .aboutTwo_right").animate({
                    right: 0,
                }, 500)
            }
            if (oft2 < wh + st - 80) {
                $(".aboutThree .aboutThree_right").animate({
                    left: 0,
                }, 500)
                $(".aboutThree .aboutThree_left").animate({
                    right: 0,
                }, 500)
            }
            if (oft3 < wh + st - 80) {
                $(".aboutFour .aboutFour_left").animate({
                    left: 0,
                }, 500)
                $(".aboutFour .aboutFour_right").animate({
                    right: 0,
                }, 500)
            }
            if (oft4 < wh + st - 80) {
                $(".aboutFiv .aboutFive_right").animate({
                    fontSize: 32,
                }, 500)
            }
            if (oft5 < wh + st - 80) {
                $(".aboutFiv .aboutFive_list li").eq(0).animate({ left: 0, top: 0 })
                $(".aboutFiv .aboutFive_list li").eq(1).animate({ left: 420, top: 0 })
                $(".aboutFiv .aboutFive_list li").eq(2).animate({ right: 0, top: 0 })
            }
        })
    })()
