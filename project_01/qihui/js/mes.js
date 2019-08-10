(function () {
	$(".xhcategory").click(function () {
		$(this).css({
			background: "white",
			color: "black"
		})
	})
	$(".xhcategory").eq(0).css({ backgroundColor: "white", color: "black" })
})()

var x = 0;
var flag = true;

$(".xhimgs").eq(0).show();
$(".xhstreamer").eq(0).show();
$(".xhdot").eq(0).css({ backgroundColor: "red" });



function next() {
	$(".xhimgs").eq(x).fadeOut(2000);
	$(".xhstreamer").eq(x).fadeOut(1000);
	$(".xhdot").eq(x).css({ backgroundColor: "white" });
	x++;
	if (x > 3) {
		x = 0;
	}
	$(".xhimgs").eq(x).fadeIn(2000);
	$(".xhstreamer").eq(x).fadeIn(2000);
	$(".xhdot").eq(x).css({ backgroundColor: "red" });
}

$(".xhnext").click(function () {
	$(".xhimgs").eq(x).fadeOut(500);
	$(".xhstreamer").eq(x).fadeOut(500);
	$(".xhdot").eq(x).css({ backgroundColor: "white" });
	x--;
	if (x < 0) {
		x = 3;
	}
	$(".xhimgs").eq(x).fadeIn(500);
	$(".xhstreamer").eq(x).fadeIn(500);
	$(".xhdot").eq(x).css({ backgroundColor: "red" })
})

$(".xhprev").click(function () {
	$(".xhimgs").eq(x).fadeOut(500);
	$(".xhstreamer").eq(x).fadeOut(500);
	$(".xhdot").eq(x).css({ backgroundColor: "white" });
	x++;
	if (x > 3) {
		x = 0;
	}
	$(".xhimgs").eq(x).fadeIn(500);
	$(".xhstreamer").eq(x).fadeIn(500);
	$(".xhdot").eq(x).css({ backgroundColor: "red" });
})

var xhdot = document.getElementsByClassName('xhdot');
for (var i = 0; i < xhdot.length; i++) {
	xhdot[i].index = i;
	xhdot[i].onclick = function () {
		$(".xhimgs").eq(x).fadeOut(500);
		$(".xhstreamer").eq(x).fadeOut(500);
		$(".xhdot").eq(x).css({ backgroundColor: "white" });
		x = this.index;
		$(".xhimgs").eq(x).fadeIn(500);
		$(".xhstreamer").eq(x).fadeIn(500);
		$(".xhdot").eq(x).css({ backgroundColor: "red" });
	}
}



var count = setInterval(next, 2000);

$(".xhstate").mouseover(function () {

	clearInterval(count);
})
$(".xhstate").mouseout(function () {

	count = setInterval(next, 2000);
})




$(".xhyear").mouseover(function () {

	$(".xhmorth").css({
		border: "1px solid #CCCCCC",
	})
	$(".xhyear").css({
		borderTop: "1px solid #DB2242",
		borderLeft: "1px solid #CCC",
		borderRight: "none",
		borderBottom: "none",
	})
})
$(".xhmorth").mouseover(function () {
	$(".xhyear").css({
		border: "1px solid #CCCCCC",
	})
	$(".xhmorth").css({
		borderTop: "1px solid #DB2242",
		borderRight: "1px solid #CCC",
		borderLeft: "none",
		borderBottom: "none",
	})
})