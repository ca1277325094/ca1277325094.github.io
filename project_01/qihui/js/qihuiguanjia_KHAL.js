//头部效果
(function () {
    var x = 0;
    $(".header_m .nav_m a").mouseover(function () {
        if (x == 3) {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" })
        } else {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" }).removeClass("on")
        }
        var index = $(this).index()
        $(this).css({ color: "#015cd1" }).addClass("on")
        x = index
    }).mouseout(function () {
        if (x == 3) {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" })
        } else {
            $(".header_m .nav_m a").eq(x).css({ color: "#333" }).removeClass("on")
        }
    })
})()

$(".JQ_case h2").animate({ fontSize: 32}, 500)

