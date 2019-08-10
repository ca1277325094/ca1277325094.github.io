(function() {
    $(window).scroll(function() {
        var st = $(window).scrollTop()
        if (st > 0) {
            $(".xdeyes").eq(0).css({
                position: "fixed",
            })
        } else {
            $(".xdeyes").eq(0).css({
                position: "static",
            })
        }
    })
})()




var xdphone = $(".xdphone");
var xdmake = $(".xdmake");
var xdnext = $(".xdnext");
var xdprev = $(".xdprev");


$(".xdmake").eq(0).css({ left: 0 });


var x = 0;

$(".xdnext").click(function() {

    $(".xdmake").eq(x).animate({ left: -985 }, 500);

    x++;

    if (x > 6) {

        x = 0;

    }

    $(".xdmake").eq(x).css({ left: 985 }, 500);

    $(".xdmake").eq(x).animate({ left: 0 }, 500);

})



$(".xdprev").click(function() {

    $(".xdmake").eq(x).animate({ left: 985 }, 500);

    x--;

    if (x < 0) {

        x = 6;

    }

    $(".xdmake").eq(x).css({ left: -985 }, 500);

    $(".xdmake").eq(x).animate({ left: 0 }, 500);

})