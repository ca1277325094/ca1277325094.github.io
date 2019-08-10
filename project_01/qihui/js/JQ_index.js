; (function () {
    // **************************************
    //产品优势这一大块的js代码
    // 第一个li默认样式
    $(".tabCon ul li").eq(0).css({
        background: "#e50730",
        color: "#fff"
    })
    //第一个箭头默认显示
    $(".JQ_car .JQ_jt").eq(0).css({
        display: "block"
    })
    //第一个数字默认显示
    $(".tabCon ul .JQ_car .aaa").eq(0).css({
        backgroundPosition: "-39px center"
    })
    //第一个图片默认显示
    $(".JQ_tabImg .tabImg01").eq(0).css({
        display: "block"
    })
    // 图片切换效果
    var x = 0;//全局变量
    //鼠标放上去的时候
    $(".tabCon ul li").mouseover(function () {
        //放上去之前
        $(".tabCon ul li").eq(x).css({
            background: "#dadada",
            color: "#666"
        })
        //放上去之前箭头隐藏
        $(".JQ_car .JQ_jt").eq(x).css({
            display: "none"
        })
        //放上去之前的数字是灰色的
        $(".tabCon ul .JQ_car .aaa").eq(x).css({
            backgroundPosition: "0px center"
        })
        //放上去之前切换图片路径
        $(".JQ_tabImg .tabImg").eq(x).css({
            display: "none"
        })
        var index = $(this).index()//获取对应的索引
        x = index
        //放上去之后背景颜色和字体颜色
        $(".tabCon ul li").eq(x).css({
            background: "#e50730",
            color: "#fff"
        })
        //放上去箭头显示
        $(".JQ_car .JQ_jt").eq(x).css({
            display: "block"
        })
        //放上去之后数字的颜色变为白色
        $(".tabCon ul .JQ_car .aaa").eq(x).css({
            backgroundPosition: "-39px center"
        })
        //放上去之后图片路径
        $(".JQ_tabImg .tabImg").eq(x).css({
            display: "block"
        })

    })
    // *******************************************
    // 点击上边跳转到对应的位置
    // 找到关于企彩通
    $(".JQ_nav .JQ_right ul li").eq(0).click(function () {
        // 找到对应的offsetTop值
        var oft1 = parseInt($(".JQ_about .aboutOne").offset().top)
        $("body,html").animate({
            scrollTop: oft1
        }, 500)
    })
    // 找到产品优势
    $(".JQ_nav .JQ_right ul li").eq(1).click(function () {
        // 找到对应的offsetTop值
        var oft1 = parseInt($(".JQ_aboutTwo ").offset().top)
        $("body,html").animate({
            scrollTop: oft1
        }, 500)
    })
    //找到发布操作
    $(".JQ_nav .JQ_right ul li").eq(2).click(function () {
        // 找到对应的offsetTop值
        var oft1 = parseInt($(".JQ_aboutThree ").offset().top)
        $("body,html").animate({
            scrollTop: oft1
        }, 500)
    })
    //找到套餐资费
    $(".JQ_nav .JQ_right ul li").eq(3).click(function () {
        // 找到对应的offsetTop值
        var oft1 = parseInt($(".JQ_aboutFour ").offset().top)
        $("body,html").animate({
            scrollTop: oft1
        }, 500)
    })
    //找到开通流程
    $(".JQ_nav .JQ_right ul li").eq(4).click(function () {
        // 找到对应的offsetTop值
        var oft1 = parseInt($(".JQ_aboutFive ").offset().top)
        $("body,html").animate({
            scrollTop: oft1
        }, 500)
    })
    //找到申请开通
    $(".JQ_nav .JQ_right ul li").eq(5).click(function () {
        // 找到对应的offsetTop值
        var oft1 = parseInt($(".JQ_aboutSix ").offset().top)
        $("body,html").animate({
            scrollTop: oft1
        }, 500)
    })
    // 产品优势动画默认的位置
    $(".JQ_aboutTwo").css({
        marginTop: 630
    })

    $("#JQ_aboutTwo_box").css({
        width:"100%",
        height:622,
        overflow:"hidden"
    })
    //window下的滚动事件
    $(window).scroll(function () {
        //获取到scrooTop的值
        var st = parseInt($("body,html").scrollTop())
        var H = window.innerHeight;//获取浏览器窗口高度 
        // 如果滚动的时候大于200的时候让侧边栏显示 否则的话隐藏
        if (st > 200) {
            $(".JQ_aside").css({ display: "block" });
            // 如果大于两百的时候让产品优势的动画出现
            $(".JQ_aboutTwo").fadeIn("1000", "linear", function () {
                $(".JQ_aboutTwo").css({
                    display: "block"
                }).animate({
                    marginTop: 0
                }, 300)
            })
        }
        else { $(".JQ_aside").css({ display: "none" }) }


        // 找到发布操作的offsetTop值
        var oft1 = parseInt($(".JQ_aboutThree ").offset().top)

        if (oft1 < st + H - 100) {
            $(".JQ_aboutThree").animate({ marginLeft: 0 }, 500)
        }

        //找到套餐资费的offsetTop值
        var oft2 = parseInt($(".JQ_aboutFour ").offset().top)
        if (oft2 < st + H - 100) {
            $(".JQ_aboutFour").animate({ marginLeft: 0 }, 500)
        }

        //找到开通流程的offsetTop值
        var oft3 = parseInt($(".JQ_aboutFive ").offset().top)
        if (oft3 < st + H - 100) {
            $(".JQ_aboutFive").animate({ marginLeft: 0 }, 500)
        }

        //找到申请开通的offsetTop值
        var oft4 = parseInt($(".JQ_aboutSix ").offset().top)
        console.log(oft4)
        if (oft4 < st + H + 50) {
            $(".JQ_aboutSix").animate({ marginLeft: 0 }, 500)
        }
    })
    //点击向上的时候让scroolTop等于0  返回顶部按钮
    $(".JQ_aside .up").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 500)
    })


})()









