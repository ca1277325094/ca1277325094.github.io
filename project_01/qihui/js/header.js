
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
        $("#right_jt_scj #scj").animate({ height: 58 }, 300 ).css({"border":"1px solid #e0e0e0","border-top":"1px solid white"});
    })
    $("#right_jt_scj").mouseleave(function () {
        $("#right_jt_scj #scj").stop().css({ height: 0 ,"border":"none"});
    })
})();
// 采购商
; (function () {
    $("#right_jt_cgs").mouseenter(function () {

        $("#right_jt_cgs #cgs").animate({ height: 88 }, 300).css({"border":"1px solid #e0e0e0","border-top":"1px solid white"})

    })
    $("#right_jt_cgs").mouseleave(function () {

        $("#right_jt_cgs #cgs").stop().css({ height: 0 ,"border":"none"});

    })
})();
// 供应商
; (function () {
    $("#right_jt_gys").mouseenter(function () {

        $("#right_jt_gys #gys").animate({ height: 117 }, 300).css({"border":"1px solid #e0e0e0","border-top":"1px solid white"})

    })
    $("#right_jt_gys").mouseleave(function () {

        $("#right_jt_gys #gys").stop().css({ height: 0 ,"border":"none"});

    })
})();
// 服务
; (function () {
    $("#right_jt_qhfw").mouseenter(function () {
        $("#right_jt_qhf2").css({"display":"block"});
        $("#right_jt_qhfw #qhfw").animate({ height: 152 }, 300).css({"border":"1px solid #e0e0e0"})

    })
    $("#right_jt_qhfw").mouseleave(function () {
        $("#right_jt_qhf2").css({"display":"none"});
        $("#right_jt_qhfw #qhfw").stop().css({ height: 0 ,"border":"none"});

    })
})();
// 导航
; (function () {
    $("#daohang").mouseenter(function () {
        $("#right_jt_dh1").css({"display":"block"});
        $("#daohang #right_jt_dh").animate({ height: 264 }, 300).css({"border":"1px solid #e0e0e0"})

    })
    $("#daohang").mouseleave(function () {
        $("#right_jt_dh1").css({"display":"none"});
        $("#daohang #right_jt_dh").stop().css({ height: 0 ,"border":"none"});

    })
})();