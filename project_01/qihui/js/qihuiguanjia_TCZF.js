//头部效果
(function () {
    var x = 0;
    $(".header_m .nav_m a").mouseover(function () {
        if (x == 2) {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" })
        } else {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" }).removeClass("on")
        }
        var index = $(this).index()
        $(this).css({ color: "#015cd1" }).addClass("on")
        x = index
    }).mouseout(function () {
        if (x == 2) {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" })
        } else {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" }).removeClass("on")
        }
    })
})()

    //表格固定导航
    ; (function () {
        $(window).scroll(function () {
            var st = $(window).scrollTop()
            var H = $(window).height()
            var oft1 = $(".jhline").offset().top
            console.log(st)
            if (st > 821) {
                $(".jhdao").eq(0).css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                })
                $("#jhcat_box .jhcat").css({
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                })
            } else {
                $(".jhdao").eq(0).css({
                    position: "static",
                })
                $(".jhcat").eq(0).css({
                    position: "static",
                    // top:0,
                    // left:0
                })
            }
            if (oft1 < st + 1000) {
                $(".jhcat").eq(0).css({
                    position: "static",
                    // top:0,
                    // left:0
                })
            }
        })
    })()

    $("#jhbug_box .jhbug").animate({top:100},100,function(){
        $("#jhbug_box .jhbug").animate({top:-100},200,function(){
            $("#jhbug_box .jhbug").animate({top:0},90)
        })
    })