//头部搜索栏点击事件
; (function () {
    var checkBar = $("#checkArea");
    checkBar.click(function () {
        $("#select_class_list").css({ "display": "block" });
        $("#select_class_arrowBar").text("∧");
    });
    var selectCheckBar = $("#select_class_list>ul").children();
    selectCheckBar.click(function () {
        $("#select_class_arrowBar").text("∨");
        $("#select_class_list").css({ "display": "none" });
        $("#select_class_namebar").text($(this).children("span").text());
    })
})();

//顶部轮播图
; (function () {
    var pics = $("#scrollPicBar").children();
    var btns = $(".scrollBtns").children();
    var showNow = 0;
    pics.each(function () {
        if ($(this).index() != showNow) {
            $(this).css({ "display": "none" });
        }
    })
    btns.each(function () {
        if ($(this).index() == showNow) {
            $(this).css({ "border": "1px solid #e02445" });
        }
    })
    btns.mouseenter(function () {
        if ($(this).index() != showNow) {
            pics.eq(showNow).stop(false, true).fadeOut(500);
            btns.eq(showNow).css({ "border": "1px solid #ffffff" })
            $(this).css({ "border": "1px solid #e02445" });
            pics.eq($(this).index()).stop(false, true).fadeIn(500);
            showNow = $(this).index();
        }
    })
    function AutoPlayPic() {
        var index = showNow + 1;
        if (index >= pics.length) { index = 0 }
        pics.eq(showNow).fadeOut(500);
        btns.eq(showNow).css({ "border": "1px solid #ffffff" })
        pics.eq(index).fadeIn(500);
        btns.eq(index).css({ "border": "1px solid #e02445" });
        showNow = index
    }
    var timer = setInterval(AutoPlayPic, 7000);
    $("#scrollImgs").mouseenter(function () {
        clearInterval(timer);
    })
    $("#scrollImgs").mouseleave(function () {
        timer = setInterval(AutoPlayPic, 7000);
    })

})();
//展会信息块轮播图
; (function () {
    var pics = $(".exhi_ScrollPics>ul").children();
    var btns = $(".exhi_ScrollPicBar_Btns").children();
    var showNow = 0;
    pics.each(function () {
        if ($(this).index() != showNow) {
            $(this).css({ "display": "none" });
        }
    })
    btns.each(function () {
        if ($(this).index() == showNow) {
            $(this).css({
                "background": "#db2242",
                "border": "1px solid #db2242"
            });
        }
    })
    btns.mouseenter(function () {
        if ($(this).index() != showNow) {
            pics.eq(showNow).stop(false, true).fadeOut(500);
            btns.eq(showNow).css({ "border": "1px solid #db2242", "background": "transparent" })
            $(this).css({ "background": "#db2242" });
            pics.eq($(this).index()).stop(false, true).fadeIn(500);
            showNow = $(this).index();
        }
    })
    function AutoPlayPic() {
        var index = showNow + 1;
        if (index >= pics.length) { index = 0 }
        pics.eq(showNow).fadeOut(500);
        btns.eq(showNow).css({ "border": "1px solid #db2242", "background": "transparent" })
        pics.eq(index).fadeIn(500);
        btns.eq(index).css({ "background": "#db2242" });
        showNow = index
    }
    var timer = setInterval(AutoPlayPic, 7000);
    $(".ind_Info_exhi_ScrollPicBar").mouseenter(function () {
        clearInterval(timer);
    })
    $(".ind_Info_exhi_ScrollPicBar").mouseleave(function () {
        timer = setInterval(AutoPlayPic, 7000);
    })
})();
//返回顶部按钮事件
; (function () {
    $(".backToTopBtn").click(function () {
        $("body,html").animate({ "scrollTop": "0" }, 300);
    })
})();
//顶部浮动搜索栏显示/隐藏事件监听
; (function () {
    var showPosition = $("#index_topmenuBar").offset().top;
    $(window).scroll(function () {
        var scrollNow = $(window).scrollTop();
        if (scrollNow >= showPosition) {
            $(".index_serchBar").fadeIn(300);
        }
        else {
            $(".index_serchBar").fadeOut(300);
        }
    })
})();
//二级菜单
; (function () {
    var secMenu = $(".secMenu");
    var li = $(".categoryList>ul").children();
    li.mouseenter(function () {
        var index = $(this).index();
        secMenu.eq(index).stop(false, true).css({ "display": "block" })
    });
    li.mouseleave(function () {
        var index = $(this).index();
        secMenu.eq(index).stop(false, true).css({ "display": "none" })
    })
})();
//公告栏切换
; (function () {
    var list = $(".infoContentBar").children();
    var showNow = 0;
    list.each(function () {
        if ($(this).index() != showNow) {
            $(this).css({ "display": "none" });
        }
    })
    var Titles = $(".infoMenuBar").children();
    list.eq(showNow).css({ "display": "block" });
    Titles.eq(showNow).css({ "borderBottom": "3px solid #db2242", "color": "#db2242" })
    Titles.mouseenter(function () {
        var index = $(this).index();
        if (index != showNow) {
            list.eq(showNow).css({ "display": "none" });
            Titles.eq(showNow).css({ "borderBottom": "none", "color": "#4b4b4b" })
            list.eq(index).css({ "display": "block" });
            $(this).css({ "borderBottom": "3px solid #db2242", "color": "#db2242" })
            showNow = index;
        }
    })
    Titles.mouseleave(function () {
        var index = $(this).index();
    })
})();
//左侧浮动导航栏显示/隐藏事件监听、点击事件、滚动事件
; (function () {
    var fixedBar = $("#index_fixed_menuBar");
    var fixedList = fixedBar.children();
    var startShowPosition = $("#index_topmenuBar").offset().top + parseInt($("#index_topmenuBar").css("height"));
    var endShowPosition = $(".index_InfoBar").offset().top;
    var imgArr = $("#index_fixed_menuBar img");
    var emArr = $("#index_fixed_menuBar em");
    var floor = $(".index_floor");
    var showNow = NaN;
    $(window).scroll(function () {
        if ($(window).scrollTop() >= startShowPosition && $(window).scrollTop() <= endShowPosition) {
            fixedBar.fadeIn(300);
        }
        else if ($(window).scrollTop() > endShowPosition) {
            fixedBar.fadeOut(300);
            showNow = NaN;
            imgArr.each(function () {
                $(this).css({ "display": "block" });
            })
            emArr.each(function () {
                $(this).css({ "display": "none" });
            })
        }
        else if (($(window).scrollTop() < startShowPosition)) {
            fixedBar.fadeOut(300);
            showNow = NaN;
            imgArr.each(function () {
                $(this).css({ "display": "block" });
            })
            emArr.each(function () {
                $(this).css({ "display": "none" });
            })
        }
        var scrollNow = $(window).scrollTop()
        if (scrollNow > startShowPosition && scrollNow < floor.eq(0).offset().top) {
            imgArr.eq(0).fadeIn(100);
            emArr.eq(0).fadeOut(100);
            showNow = NaN;
        }
        else if (scrollNow >= floor.eq(0).offset().top && scrollNow < floor.eq(1).offset().top) {
            imgArr.eq(0).fadeOut(100);
            emArr.eq(0).fadeIn(100);
            imgArr.eq(1).fadeIn(100);
            emArr.eq(1).fadeOut(100);
            showNow = 1;
        }
        else if (scrollNow >= floor.eq(1).offset().top && scrollNow < floor.eq(2).offset().top) {
            imgArr.eq(0).fadeIn(100);
            emArr.eq(0).fadeOut(100);
            imgArr.eq(1).fadeOut(100);
            emArr.eq(1).fadeIn(100);
            imgArr.eq(2).fadeIn(100);
            emArr.eq(2).fadeOut(100);
            showNow = 2;
        }
        else if (scrollNow >= floor.eq(2).offset().top && scrollNow < floor.eq(3).offset().top) {
            imgArr.eq(1).fadeIn(100);
            emArr.eq(1).fadeOut(100);
            imgArr.eq(2).fadeOut(100);
            emArr.eq(2).fadeIn(100);
            imgArr.eq(3).fadeIn(100);
            emArr.eq(3).fadeOut(100);
            showNow = 3;
        }
        else if (scrollNow >= floor.eq(3).offset().top && scrollNow < floor.eq(4).offset().top) {
            imgArr.eq(2).fadeIn(100);
            emArr.eq(2).fadeOut(100);
            imgArr.eq(3).fadeOut(100);
            emArr.eq(3).fadeIn(100);
            imgArr.eq(4).fadeIn(100);
            emArr.eq(4).fadeOut(100);
            showNow = 4;
        }
        else if (scrollNow >= floor.eq(4).offset().top && scrollNow < floor.eq(5).offset().top) {
            imgArr.eq(3).fadeIn(100);
            emArr.eq(3).fadeOut(100);
            imgArr.eq(4).fadeOut(100);
            emArr.eq(4).fadeIn(100);
            imgArr.eq(5).fadeIn(100);
            emArr.eq(5).fadeOut(100);
            showNow = 5;
        }
        else if (scrollNow >= floor.eq(5).offset().top && scrollNow < floor.eq(6).offset().top) {
            imgArr.eq(4).fadeIn(100);
            emArr.eq(4).fadeOut(100);
            imgArr.eq(5).fadeOut(100);
            emArr.eq(5).fadeIn(100);
            imgArr.eq(6).fadeIn(100);
            emArr.eq(6).fadeOut(100);
            showNow = 6;
        }
        else if (scrollNow >= floor.eq(6).offset().top && scrollNow < floor.eq(7).offset().top) {
            imgArr.eq(5).fadeIn(100);
            emArr.eq(5).fadeOut(100);
            imgArr.eq(6).fadeOut(100);
            emArr.eq(6).fadeIn(100);
            imgArr.eq(7).fadeIn(100);
            emArr.eq(7).fadeOut(100);
            showNow = 7;
        }
        else if (scrollNow >= floor.eq(7).offset().top && scrollNow < endShowPosition) {
            imgArr.eq(6).fadeIn(100);
            emArr.eq(6).fadeOut(100);
            imgArr.eq(7).fadeOut(100);
            emArr.eq(7).fadeIn(100);
            showNow = 8;
        }
        else if (scrollNow >= endShowPosition) {
            imgArr.eq(7).fadeIn(100);
            emArr.eq(7).fadeOut(100);
            showNow = NaN;
        }
    })
    fixedList.each(function () {
        if ($(this).index() > 0 && $(this).index() < 9) {
            $(this).mouseenter(function () {
                if ($(this).index() != showNow) {
                    imgArr.eq($(this).index() - 1).fadeOut(100);
                    emArr.eq($(this).index() - 1).fadeIn(100);
                }
            })
            $(this).mouseleave(function () {
                if ($(this).index() != showNow) {
                    imgArr.eq($(this).index() - 1).fadeIn(100);
                    emArr.eq($(this).index() - 1).fadeOut(100);
                }
            })
            $(this).click(function () {
                $("body,html").animate({ "scrollTop": floor.eq($(this).index() - 1).offset().top }, 300);
            })
        }
        if ($(this).index() == 9) {
            $(this).click(function () {
                $("body,html").animate({ "scrollTop": endShowPosition - 1 }, 300);
            })
        }
    })
})();
// 手机站
; (function () {
    $("#top_main_left1").mouseenter(function () {
        $("#top_main_left1 #ewm").animate({ height: 357 }, 300);
    })
    $("#top_main_left1").mouseleave(function () {
        $("#top_main_left1 #ewm").stop().css({ height: 0 });
    })
})();
// 收藏夹
; (function () {
    $("#right_jt_scj").mouseenter(function () {
        $("#right_jt_scj #scj").animate({ height: 58 }, 300).css({ "border": "1px solid #e0e0e0", "border-top": "1px solid white" });
    })
    $("#right_jt_scj").mouseleave(function () {
        $("#right_jt_scj #scj").stop().css({ height: 0, "border": "none" });
    })
})();
// 采购商
; (function () {
    $("#right_jt_cgs").mouseenter(function () {

        $("#right_jt_cgs #cgs").animate({ height: 88 }, 300).css({ "border": "1px solid #e0e0e0", "border-top": "1px solid white" })

    })
    $("#right_jt_cgs").mouseleave(function () {

        $("#right_jt_cgs #cgs").stop().css({ height: 0, "border": "none" });

    })
})();
// 供应商
; (function () {
    $("#right_jt_gys").mouseenter(function () {

        $("#right_jt_gys #gys").animate({ height: 117 }, 300).css({ "border": "1px solid #e0e0e0", "border-top": "1px solid white" })

    })
    $("#right_jt_gys").mouseleave(function () {

        $("#right_jt_gys #gys").stop().css({ height: 0, "border": "none" });

    })
})();
// 服务
; (function () {
    $("#right_jt_qhfw").mouseenter(function () {
        $("#right_jt_qhf2").css({ "display": "block" });
        $("#right_jt_qhfw #qhfw").animate({ height: 152 }, 300).css({ "border": "1px solid #e0e0e0" })

    })
    $("#right_jt_qhfw").mouseleave(function () {
        $("#right_jt_qhf2").css({ "display": "none" });
        $("#right_jt_qhfw #qhfw").stop().css({ height: 0, "border": "none" });

    })
})();
// 导航
; (function () {
    $("#daohang").mouseenter(function () {
        $("#right_jt_dh1").css({ "display": "block" });
        $("#daohang #right_jt_dh").animate({ height: 264 }, 300).css({ "border": "1px solid #e0e0e0" })

    })
    $("#daohang").mouseleave(function () {
        $("#right_jt_dh1").css({ "display": "none" });
        $("#daohang #right_jt_dh").stop().css({ height: 0, "border": "none" });

    })
})();