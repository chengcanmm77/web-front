function goodAddToCat(t, e, i) {
    if (t = t || null, null != t) {
        var n = {};
        n[t] = "1",
        $.addToCart(t, n, null, {
            is_logistics: "1"
        },
        null, i)
    }
}
function saleNumUpdate() {
    $.saleNumUpdate && $.saleNumUpdate([{
        selector: ".JS_async_price",
        type: "price",
        param: "price_id",
        key: "show_price"
    },
    {
        selector: ".JS_async_sale_num",
        type: "sale_num",
        param: "id",
        key: "num"
    }],
    function() {
        $(".JS_async_sale_num").each(function(t, e) {
            0 == $(e).text() && $(e).parents("a").css("display", "none")
        })
    })
}
function goodCollect(t, e, i, n) {
    function o(t) {
        window._gaq.push(["_trackEvent"].concat(t))
    }
    n.lock || (n.lock = !0, t = t || null, null != t && ($.addGoodsToCollect(t,
    function(i) {
        e && ($(e).find(".i2").addClass("i2sec"), $(e).find("span").text("已收藏")),
        $.alert(i.msg),
        o(["新版列表页", "收藏", "成功_" + t])
    },
    function() {
        n.lock = !1
    }), i || o(["新版列表页", "收藏", "点击_" + t])))
}
function TabMouseover(t, e, i, n) {
    var o = $("#" + t + " .fixture_title"),
    a = $("." + e),
    s = $("#" + t + " a");
    o.mouseover(function() {
        for (var t = o.index(this), r = 0; r < o.length; r++) o[r].innerHTML.length > 3 && 1 == i && (o[r].innerHTML = o[r].innerHTML.slice(2)),
        o[r].className = "fixture_title Left",
        a[r].className = e + " none";
        1 == i && (o[t].innerHTML = "推荐" + o[t].innerHTML),
        o[t].className = "fixture_title Left current",
        a[t].className = e,
        n && (s[0].href = n[t])
    })
}
function getLocalData(t) {
    var e = "";
    return t && (e = $.cookie(t) || ""),
    e
}
function saveLocalData(t, e) {
    "object" == $.type(t) ? $.each(t,
    function(e) {
        saveLocalData(e, t[e])
    }) : "array" == $.type(t) ? saveLocalData("stockArea", t.join(",")) : t && e && $.cookie(t, e)
}
function CategoryInit2() {
    function t() {
        var t = c.find(".JS_Multiselect");
        t.on("click",
        function(n) {
            var o = $(this);
            i(t),
            e(o)
        })
    }
    function e(t) {
        function e(t, e, i) {
            var n = [],
            o = $(t).attr("data-url");
            e.find(".selected").length;
            e.find(".selected").each(function(t, e) {
                var i = $(this).attr("data-type");
                n.push(i)
            }),
            o = o.replace(/{\d{4}}/, n.join("_")),
            location.href = o
        }
        var o = t.parents(".normal,.brand"),
        a = t.parents(".shell"),
        s = t.parents("table").find(".JS_more"),
        r = $("#JS_brand_overflow").find("li"),
        c = a.find(".list a"),
        l = a.find(".JS_cancle"),
        d = a.find(".isSure .JS_sure"),
        f = t.parents("table").find(".isSure .JS_sure"),
        u = t.parents("table").find(".JS_cancle"),
        _ = 0,
        h = 0;
        1 != $("#JS_brand_more").attr("data-state") && (t.parents("table").find("#JS_brand_more").trigger("click"), t.parents("table").find(".isSure").removeClass("none"), $("#JS_brand_overflow").css({
            top: "0px",
            marginBottom: "0px"
        })),
        s.removeAttr("is-open", !1).html("<span>更多</span><i></i>").removeClass("open"),
        a.addClass("auto"),
        o.addClass("multi");
        var v = o.index() + 1;
        $("#JS_category_filter dl").removeClass("borderTopnone"),
        $("#JS_category_filter dl").eq(v) && $("#JS_category_filter dl").eq(v).addClass("borderTopnone"),
        a.find(".isSure ").removeClass("none"),
        s.hide(),
        t.hide(),
        c.on("click",
        function(t) {
            return _ = n(this, _),
            !1
        }),
        r.on("click",
        function() {
            return h = n(this, h),
            !1
        }),
        d.on("click",
        function() {
            e(this, a)
        }),
        f.on("click",
        function() {
            e(this, $("#JS_brand_overflow"))
        }),
        l.on("click",
        function() {
            i(t)
        }),
        u.on("click",
        function() {
            i(t)
        })
    }
    function i(t) {
        var e = t.parents(".normal,.brand"),
        i = t.parents(".shell"),
        n = $("#JS_brand_overflow"),
        a = n.find("li"),
        s = t.parents("table").find(".JS_more"),
        r = i.find(".list a");
        s.removeAttr("is-open", !1).html("<span>更多</span><i></i>").removeClass("open"),
        n.attr("data-line") > 1 && $("#JS_brand_more").show(),
        t.show(),
        a.unbind("click"),
        a.removeClass("selected"),
        a.parents(".shell").find(".isSure ").addClass("none"),
        a.parents("table").find(".isSure ").addClass("none"),
        $("#JS_brand_more").removeAttr("data-state", 0).html("<span>更多</span><i></i>").removeClass("open"),
        o($("#JS_brand_more"), n, 1),
        e.hasClass("multi") && (i.removeClass("auto"), e.removeClass("multi"), s.show(), t.show(), r.unbind("click"), r.removeClass("selected"), r.parents(".shell").find(".isSure ").addClass("none"))
    }
    function n(t, e) {
        var i = $(t).parents(".shell").find(".isSure .JS_sure"),
        n = $(t).parents("table").find(".isSure .JS_sure");
        return $(t).hasClass("selected") ? ($(t).removeClass("selected"), e--) : ($(t).addClass("selected"), e++),
        e > 0 ? (i && i.removeClass("disabled").attr("disabled", !1), n && n.removeClass("disabled").attr("disabled", !1)) : (i && (i.addClass("disabled").attr("disabled", !0), i.unbind("click")), n && (n.addClass("disabled").attr("disabled", !0), n.unbind("click"))),
        e
    }
    function o(t, e, i) {
        i ? (window.LOAD ? e.css({
            width: "894px",
            height: "53px",
            overflowX: "hidden",
            overflowY: "hidden"
        }) : e.css({
            width: "700px",
            height: "53px",
            overflowX: "hidden",
            overflowY: "hidden"
        }), e.css({
            top: "0",
            marginBottom: "0"
        }), e.scrollTop(0)) : (window.LOAD ? e.css({
            width: "959px"
        }) : e.css({
            width: "749px"
        }), e.css({
            top: "36px",
            marginBottom: "36px"
        }), $(t).attr("data-state", 1).html("<span>收起</span><i></i>").addClass("open"), showBrandImage("more"))
    }
    function a() {
        d = c.find(".JS_more"),
        d.length <= 0 || d.click(function() {
            var t = t = $(this).parents(".shell");
            "true" == $(this).attr("is-open") ? (t.removeClass("auto"), $(this).removeAttr("is-open", !1).html("<span>更多</span><i></i>").removeClass("open")) : (t.addClass("auto"), $(this).attr("is-open", !0).html("<span>收起</span><i></i>").addClass("open"))
        })
    }
    function s() {
        var t = $("#JS_brand_overflow"),
        e = $("#JS_brand_more"),
        i = (t.attr("data-total"), t.attr("data-line")),
        n = 0;
        i > 1 && (e.css({
            display: "inline-block"
        }), e.click(function() {
            i > 4 ? (n = "209px", t.css({
                "overflow-y": "auto"
            })) : 4 == i ? n = "209px": 3 == i ? n = "157px": 2 == i && (n = "105px"),
            t.css({
                height: n
            }),
            1 == $(this).attr("data-state") ? ($(this).removeAttr("data-state", 0).html("<span>更多</span><i></i>").removeClass("open"), o(this, t, 1)) : o(this, t, 0)
        })),
        t.find("li").hover(function() {
            $(this).addClass("hover")
        },
        function() {
            $(this).removeClass("hover")
        })
    }
    var r = $("#JS_category_filter");
    if (! (r.length <= 0)) {
        var c = r.find("dl"),
        l = function() {
            c.each(function(t) {
                var e, i = c.eq(t),
                n = i.attr("is-brand"),
                o = i.find("table"),
                a = i.find(".jMore");
                i.hasClass("none") ? (i.removeClass("none"), e = o.height(), i.addClass("none")) : e = o.height(),
                !n && e > 24 && a.css({
                    display: "inline-block"
                }).addClass("JS_more")
            })
        };
        l();
        t();
        var d = [];
        a(),
        s(),
        $("#JS_exp_fliter").on("click",
        function() {
            function t(t, e, i) {
                t.each(function(i) {
                    "1" == e ? t.eq(i).removeClass("none") : t.eq(i).addClass("none")
                }),
                i.attr("state", e)
            }
            var e = $(this),
            i = e.find("span");
            e.toggleClass("open"),
            i.data("txt") || i.data("txt", i.text()),
            i.text("收起" == i.text() ? i.data("txt") || "展开": "收起");
            var n = $("#JS_category_filter").find("dl"),
            o = n.filter(function() {
                return $(this).hasClass("normal") || $(this).hasClass("brand")
            });
            o = o.slice(3),
            "1" == e.attr("state") ? t(o, 0, e) : (t(o, 1, e), showBrandImage("filter", !0))
        })
    }
}
function initPriceFilter() {
    function t() {
        var t, e = parseInt(i.val()),
        o = parseInt(n.val()),
        a = CG.priceUrl || window.location.href;
        return e > 0 && o >= 0 && a && (e < o && (t = o, o = e, e = t), a = a.replace("-n1", 0 == o ? "": "-n" + o), a = a.replace("-x1", "-x" + e), window.location.href = a),
        !1
    }
    var e = $("#JS_filter_price_btn"),
    i = $("#JS_filter_price_max"),
    n = $("#JS_filter_price_min");
    e.length && i.length && n.length && (e.click(t), i.keyup(function(e) {
        13 == e.keyCode && t()
    }), n.keyup(function(e) {
        13 == e.keyCode && t()
    }))
}
function initSort() {
    function t(t) {
        t = t || window.event,
        t.stopPropagation ? t.stopPropagation() : t.cancleBubble = !0
    }
    $("region_id");
    $("#JS_sort_panel").on("mouseenter", ".o-time .o-select",
    function() {
        $(this).addClass("o-select-hover")
    }).on("mouseleave", ".o-time .o-select",
    function() {
        $(this).removeClass("o-select-hover")
    }).on("click", "#JS_area_select",
    function() {
        if ($(this).toggleClass("o-select-active"), $("#JS_region_select_box").toggleClass("none"), SelectRegion.init.inited || (SelectRegion.init(_curRegionInfo), SelectRegion.init.inited = 1), $(this).hasClass("o-select-active")) {
            var t = $(this).width();
            $(this).find(".o-shadow").css({
                width: t + 10 + "px",
                height: "4px",
                overflow: "hidden"
            })
        } else $(this).find(".o-shadow").css({
            width: "0px",
            height: "0px",
            overflow: "hidden"
        })
    }).on("click", "#JS_region_select_box",
    function(e) {
        t(e)
    }).on("click", "#JS_area_select",
    function(e) {
        t(e)
    }),
    $(document).on("click",
    function() {
        $("#JS_area_select").removeClass("o-select-active"),
        $("#JS_area_select").find(".o-shadow").css({
            width: "0px",
            height: "0px",
            overflow: "hidden"
        }),
        $("#JS_region_select_box").addClass("none")
    })
}
function initGoodsList() {
    $("#JS_list_panel").on("mouseenter", ".g-item",
    function() {
        $(this).addClass("g-hover")
    }).on("mouseleave", ".g-item",
    function() {
        $(this).removeClass("g-hover")
    })
}
function initTrackEvent() {
    function t(t) {
        window._gaq.push(["_trackEvent"].concat(t))
    }
    window._gaq = window._gaq || [],
    $("#JS_category_filter").one("mouseenter.trackEvent", "#JS_filter_cat_menu",
    function() {
        t(["新版列表页", "鼠标移入二级分类", $("#JS_filter_cats").find("a.current").text()])
    }).one("click.trackEvent", ".price-btn",
    function() {
        t(["新版列表页", "更多筛选类型按钮", $("#JS_filter_cats").find("a.current").text()])
    }),
    $(document).on("click.trackEvent", ".t-sale",
    function() {
        t(["新版列表页", "已售"])
    }).on("click.trackEvent", ".t-pop",
    function() {
        t(["新版列表页", "人气"])
    }).on("click.trackEvent", ".t-score",
    function() {
        t(["新版列表页", "评分"])
    }),
    $(".ga1").on("click",
    function() {
        t(["2016版列表页", "收藏", "click"])
    }),
    $(".ga2").on("click",
    function() {
        t(["2016版列表页", "点击参加团购", "click"])
    }),
    $(".ga3").on("click",
    function() {
        t(["2016版列表页", "点击立即购买", "click"])
    }),
    $(".ga4").on("click",
    function() {
        t(["2016版列表页", "点击一键购买", "click"])
    }),
    $(".ga5").on("click",
    function() {
        t(["2016版列表页", "加入购物车", "click"])
    }),
    $(".ga6").on("click",
    function() {
        t(["2016版列表页", "点击找相似", "click"])
    }),
    $(".ga7").on("click",
    function() {
        t(["2016版列表页", "点击对比按钮", "click"])
    }),
    $(".ga8").on("click",
    function() {
        t(["2016版列表页", "点击对比框中的对比按钮", "click"])
    })
}
function initImgLoader(t) {
    function e() {
        s = a.scrollTop(),
        s > t && (o(), n())
    }
    function i() {
        o(),
        n()
    }
    function n() {
        setTimeout(function() {
            a.off("load", i).off("scroll", e)
        },
        0)
    }
    function o() {
        jQuery.lazyImg.start("both", {
            attributeTag: "data-src",
            loaderNumber: 10
        })
    }
    var a = $(window),
    s = a.scrollTop(),
    t = t || 300;
    s > t ? o() : a.on("load", i).on("scroll", e)
}
function showBrandImage(t, e) {
    window.showBrandImage["_CLICK_" + t] || ($("#JS_brand_overflow img" + (e ? ".JS_firstline": "") + ":visible").each(function() {
        if (!this.__brandImgIsLoaded) {
            var t = $(this);
            t.attr("src", t.data("brandsrc")),
            this.__brandImgIsLoaded = !0
        }
    }), window.showBrandImage["_CLICK_" + t] = !0)
}
function MLL_header_search_submit(t) {
    function e(t, e) {
        for (var i = [], n = 0; n < t.length; n++) t[n] != e && i.push(t[n]);
        return i
    }
    if (1 == t) {
        var i = $("#JS_MLL_search_header_input2")[0];
        $("#JS_search_form2")[0]
    } else if (2 == t) {
        var i = $("#JS_MLL_search_header_input3")[0];
        $("#JS_search_form3")[0]
    } else {
        var i = $("#JS_MLL_search_header_input")[0];
        $("#JS_search_form")[0]
    }
    var n = i.value + "";
    n = $.trim(n || "");
    var o = n;
    if (n && o.replace(/[^\x00-\xff]/g, "**").length < 31) {
        var a = $.cookie("search_h");
        a ? (a = unescape(a), a = a.split("*#"), a = e(a, n), a.length > 9 && a.shift(), a = a.join("*#"), a += "*#" + n) : a = n + "*#",
        a = escape(a),
        $.cookie("search_h", a, {
            path: "/",
            expires: 30
        })
    }
    return !! n && (window.__HEAD_SEARCH_WORDS_OBJ && __HEAD_SEARCH_WORDS_OBJ[n] ? (location.href = __HEAD_SEARCH_WORDS_OBJ[n].href + (__HEAD_SEARCH_WORDS_OBJ[n].href.indexOf("#") >= 0 ? "&": "#") + "kw=" + encodeURIComponent(n), !1) : (i.value = n, !0))
}
function guessLike() {
    var t, e = 1;
    if ($("body").hasClass("root_body")) {
        var i = 3;
        t = -317
    } else {
        var i = 4;
        t = -340
    }
    $("#JS_update").on("click",
    function() {
        e < i ? ($("#JS_you_like").animate({
            top: t * e + "px"
        },
        0), e++) : ($("#JS_you_like").animate({
            top: 0
        },
        0), e = 1)
    })
}
function isSelected() {
    return $("#JS_online").hasClass("b_checked")
}
function contrast() {
    $(".d-options .o-btn1").on("click",
    function() {
        if (initData.contrastLock) {
            $(".contrast-div").fadeIn(0);
            var t = $(this).attr("data-goods-id");
            if ($(this).hasClass("seclected")) removeContrast(t),
            $(this).removeClass("seclected");
            else if (initData.contrastNum < 4) {
                var e = $("#JS_contrast_ul").find("li.goods_contrast").first().find(".rectdiv").attr("data-cat-id");
                if (e && $(this).attr("data-cat-id") != e) return void alert("请选择同类商品进行对比！");
                $(this).addClass("seclected"),
                initData.goodsArry.push(t),
                $.cookie("gId", initData.goodsArry, {
                    path: "/",
                    expires: 30
                }),
                contrastAjax(t),
                initData.contrastNum++
            } else alert("只能选择4个商品对比！")
        }
    }),
    $("#JS_compare").on("click",
    function() {
        for (var t = "/compare/",
        e = 0; e < initData.goodsArry.length; e++) t += 0 == e ? initData.goodsArry[e] : e == initData.goodsArry.length - 1 ? -initData.goodsArry[e] + ".html": "-" + initData.goodsArry[e];
        return initData.contrastNum < 2 ? void alert("请至少选择两个商品进行对比！") : void window.open(t)
    }),
    $("#JS_clearbox").on("click",
    function() {
        if (initData.goodsArry.length) {
            for (var t = [], e = 0; e < initData.goodsArry.length; e++) t[e] = initData.goodsArry[e];
            for (var e = 0; e < t.length; e++) removeContrast(t[e])
        }
    }),
    $(".d-options .o-btn1").hover(function() {
        $(this).hasClass("seclected") || $(this).addClass("o-hover")
    },
    function() {
        $(this).removeClass("o-hover")
    }),
    $("#JS_cart2").hover(function() {
        $(this).removeClass("nav-cart")
    },
    function() {
        $(this).addClass("nav-cart")
    }),
    removeHover(),
    $(".d-options .o-btn2").hover(function() {
        $(this).addClass("border-hover"),
        $(this).parents(".d-options").find(".o-btn1").addClass("borderrightnone"),
        $(this).parents(".d-options").find(".o-btn3").addClass("borderleftnone")
    },
    function() {
        $(this).removeClass("border-hover"),
        $(this).parents(".d-options").find(".o-btn1").removeClass("borderrightnone"),
        $(this).parents(".d-options").find(".o-btn3").removeClass("borderleftnone")
    })
}
function recordAjax(t, e) {
    var i = $("#JS_browsing"),
    n = "";
    $.cookie("grecd");
    $.ajax({
        url: "/compare_goods/" + t + ".html",
        dataType: "json",
        type: "GET",
        async: !1,
        success: function(t) {
            for (var e = 0; e < t.length; e++) n += '<li><a target="_blank" href="' + t[e].goods_url + '"><img src="' + _IMG + '/images/blank.gif" data-src="' + t[e].goods_thumb + '"/><p id="p-' + t[e].goods_id + '">¥' + t[e].shop_price + "</p></a></li>"
        }
    }),
    i.html(n),
    $.lazyImg.start();
    var o = priceAjax(e);
    o && $.each(o,
    function(t, e) {
        $("#p-" + e.goods_id).text("¥" + e.show_price)
    })
}
function contrastAjax(t) {
    $("#JS_contrast_goods").trigger("click");
    var e = $("#JS_contrast_ul li"),
    i = "";
    $.ajax({
        url: "/compare_goods/" + t + ".html",
        dataType: "json",
        type: "GET",
        async: !1,
        success: function(e) {
            var n, o = priceAjax(t);
            n = o[0] ? o[0].show_price: e[0].shop_price,
            "noprice" == o && (n = e[0].shop_price),
            i = '<div class="rectdiv Left" data-cat-id="' + e[0].cat_id + '" data-goods-id="' + e[0].goods_id + '"><a target="_blank" href="' + e[0].goods_url + '"><img src="' + _IMG + '/images/blank.gif" data-src="' + e[0].goods_thumb + '"/></a></div>',
            i += '<p class="textmsg Left" class="Left"><a target="_blank" href="' + e[0].goods_url + '">' + e[0].goods_name + "</a></p>",
            i += '<p class="Left goods-price_remove clearfix"><span class="goods-price">¥' + n + '</span><a onclick="removeContrast(' + e[0].goods_id + ')" href="javascript:;">删除</a></p>'
        }
    }),
    e.hasClass("goods_contrast") ? $("#JS_contrast_ul li.goods_contrast").last().next("li").html(i).addClass("goods_contrast") : e.first().html(i).addClass("goods_contrast"),
    $.lazyImg.start()
}
function priceAjax(t) {
    var e;
    return $.ajax({
        url: "/dubbo_api/realtimeSite/get?&type=price",
        data: "ids=" + t,
        dataType: "json",
        type: "GET",
        async: !1,
        success: function(t) {
            e = 0 == t.error ? t.result.price: "noprice"
        }
    }),
    e
}
function removeContrast(t) {
    var e;
    $(".g-item").each(function(e, i) {
        var n = $(i).find(".o-btn1").attr("data-goods-id");
        t == n && $(i).find(".o-btn1").removeClass("seclected")
    }),
    $("#JS_contrast_ul li").each(function(i, n) {
        $(n).find(".rectdiv").attr("data-goods-id") == t && (e = $(this))
    });
    var i = '<li class="clearfix"><div class="rectdiv Left nogoods">4</div><p class="textmsg Left" class="Left">您还可以继续添加</p></li>',
    n = $(e).index();
    $("#JS_contrast_ul li").each(function(t, e) {
        if (t > n) {
            var i = $(e).find(".nogoods").text();
            $(e).find(".nogoods").text(i - 1)
        }
    }),
    initData.goodsArry.removeArry(t),
    $.cookie("gId", initData.goodsArry, {
        path: "/",
        expires: 30
    }),
    e.remove(),
    initData.contrastNum--,
    $(".lastli").before(i),
    removeHover()
}
function removeHover() {
    $("#JS_contrast_ul li").on("mouseenter",
    function() {
        $(this).addClass("c-hover")
    }),
    $("#JS_contrast_ul li").on("mouseleave",
    function() {
        $(this).removeClass("c-hover")
    })
}
function getPreCouponInfo() {
    function t(t, e) {
        $(t).css("cursor", "pointer"),
        $(t).click(function() {
            return $.couponPresell(e.bonusGoodsId + "|" + e.realGoodsId, {
                evtFrom: "商品列表页_" + e.bonusId
            }),
            !1
        })
    }
    var e = [],
    i = {};
    $("#JS_list_panel li.g-item").each(function() {
        var t = $(this).find(".JS_icon_img");
        t.length && (i[this.getAttribute("data-goods-id")] = t, e.push(this.getAttribute("data-goods-id")))
    }),
    e.length && $.ajax({
        type: "GET",
        url: "/NewFrameEntrance?r=BookGoodsBonus/GetBookGoodsBonus&goods_ids=" + e.join(",") + "&common_bonus_type_id=",
        dataType: "json",
        success: function(e) {
            if (e && 0 == e.error && e.data) {
                var n = e.data;
                for (var o in n)"function" != typeof o && 1 == n[o].length && i[o] && t(i[o], {
                    bonusGoodsId: n[o][0].bonus_goods_id,
                    bonusId: n[o][0].bonus_type_id,
                    realGoodsId: o
                })
            }
        }
    })
}
var MAIN_DOMAIN = "/",
SelectRegion = {
    init: function(t) {
        var e = this,
        i = getLocalData("stockArea"),
        n = [];
        i && (n = i.split(",")),
        this.areaIds = n;
        var e = this,
        o = $("#JS_region_select_box");
        if (o.on("click", "#JS_province_tab",
        function() {
            e.activate(this)
        }).on("click", "#JS_city_tab",
        function() {
            e.activate(this);
            var t = $(this);
            if (e.curSelect.pro < 0) {
                var i = t.data("parent_id");
                i && (e.curSelect.pro = i, e.select(i, "", 0))
            }
        }).on("click", "#JS_region_tab",
        function() {
            e.activate(this);
            var t = $(this),
            i = $("#JS_city_tab .name").text();
            if (e.curSelect.city < 0) {
                var n = t.data("parent_id");
                n && (e.curSelect.city = n, e.select(n, "", 1,
                function() {},
                i))
            }
        }).on("click", "#JS_province_select a.r-item",
        function() {
            var t = $(this),
            i = t.data("region_id");
            e.select(i, t.text(), 0)
        }).on("click", "#JS_city_select a.r-item",
        function() {
            var t = $(this),
            i = t.data("region_id"),
            n = $(this).text();
            $.cookie("c_city", i, {
                expires: 7
            }),
            e.select(i, t.text(), 1,
            function() {},
            n),
            e.curSelect.city = i
        }).on("click", "#JS_region_select a.r-item",
        function() {
            var t = $(this),
            i = t.data("region_id");
            $.cookie("c_city", i, {
                expires: 7
            }),
            e.select(i, t.text(), 2),
            e.curSelect.region = i
        }).on("click", ".a-close",
        function() {
            $("#JS_area_select").removeClass("o-select-active"),
            $("#JS_area_select").removeClass("o-select-active"),
            $("#JS_area_select").find(".o-shadow").css({
                width: "0px",
                height: "0px",
                overflow: "hidden"
            }),
            $("#JS_region_select_box").addClass("none")
        }), this.boxs = {},
        this.boxs.pro = {
            tab: o.find("#JS_province_tab"),
            select: o.find("#JS_province_select")
        },
        this.boxs.city = {
            tab: o.find("#JS_city_tab"),
            select: o.find("#JS_city_select")
        },
        this.boxs.rgn = {
            tab: o.find("#JS_region_tab"),
            select: o.find("#JS_region_select")
        },
        t && t.city > 0) {
            var a = {
                2 : {
                    name: "北京",
                    id: 35
                },
                10 : {
                    name: "上海",
                    id: 110
                },
                3 : {
                    name: "天津",
                    id: 36
                },
                23 : {
                    name: "重庆",
                    id: 271
                }
            },
            s = this.boxs;
            s.pro.tab.find(".name").html((t.proName + "" || "请选择").substr(0, 5)),
            s.city.tab.attr("data-parent_id", t.pro || 0).find(".name").html((t.cityName + "" || "请选择").substr(0, 5)),
            t.pro && t.pro in a ? s.city.tab.addClass("none") : s.city.tab.removeClass("none"),
            setTimeout(function() {
                0 == t.regionName && (t.regionName = t.cityName),
                s.rgn.tab.attr("data-parent_id", t.city || 0).addClass("t-cur").find(".name").html("请选择".substr(0, 5)),
                s.rgn.tab.removeClass("none")[0].click()
            },
            0)
        }
    },
    activate: function(t, e) {
        var i = $(t),
        n = i.index();
        t = this.boxs[this.tabs[n]],
        t.tab.addClass("t-cur").removeClass("none").siblings(".t-tab").removeClass("t-cur"),
        t.select.removeClass("none").siblings().addClass("none")
    },
    tabs: ["pro", "city", "rgn"],
    select: function(t, e, i, n, o) {
        function a(a) {
            if (a && 0 == a.error && a.region_list && a.region_list.length > 0) {
                var s = c.boxs[c.tabs[i + 1]];
                e && s.tab.find(".name").html("请选择"),
                s.select.html(c.format(a, t)),
                c.activate(s.tab),
                t in c.cache || (c.cache[t] = a)
            } else if (a && 0 == a.error && a.region_list && 0 == a.region_list.length) {
                var s = c.boxs[c.tabs[i + 1]];
                e && s.tab.find(".name").html("请选择"),
                s.select.html(c.format(a, t)),
                c.activate(s.tab),
                $("#JS_region_select").html('<li><a title="' + o + '" data-region_id="' + t + '" class="r-item" href="javascript:void(0)">' + o + "</a></li>")
            } else {
                var s = c.boxs[c.tabs[i + 1]];
                s.tab.nextAll(".t-tab").addClass("none"),
                c.redirect(t)
            }
            "function" == typeof n && n(a)
        }
        e && "undefined" != typeof i && this.boxs[this.tabs[i]].tab.find(".name").html(e.substr(0, 5)),
        0 == i && t && this.curSelect.pro != t && (this.boxs[this.tabs[i]].tab.siblings(".t-tab").addClass("none"), this.curSelect.pro = t);
        var s = {
            0 : {
                name: "全国",
                id: 0
            },
            2 : {
                name: "北京",
                id: 35
            },
            10 : {
                name: "上海",
                id: 110
            },
            3 : {
                name: "天津",
                id: 36
            },
            23 : {
                name: "重庆",
                id: 271
            }
        };
        if (t in s) {
            if (0 == t) return void this.redirect(0);
            var r = s[t];
            return this.select(r.id, r.name, 1),
            this.curSelect.city = t,
            this.boxs[this.tabs[1]].tab.addClass("none"),
            void this.boxs[this.tabs[1]].select.addClass("none")
        }
        if (this.areaIds[i] = t, 2 == i) return void this.redirect(t);
        var c = this;
        t in c.cache ? a(c.cache[t]) : $.ajax({
            url: c.domain + 'ajax_ajax/?act=data_center&module=common&method=getRegionByParentId&param={"parent_id":' + t + "}",
            dataType: "json",
            success: a
        })
    },
    redirect: function(t) {
        return saveLocalData(this.areaIds),
        !(!_basic_url || !t) && (setTimeout(function() {
            window.location.href = _basic_url.replace(/xxxx/, t)
        },
        10), !0)
    },
    format: function(t) {
        var e = t.region_list || [];
        if (!e && !e.length) return "";
        for (var i = $.trim,
        n = e.length,
        o = [], a = 0; a < n; a++) {
            var s = e[a];
            s.region_name = i(s.region_name),
            o.push("<li " + (s.region_name.length > 4 ? 'class="long"': "") + '><a title="' + s.region_name + '" data-region_id="' + s.region_id + '" class="r-item" href="javascript:void(0)">' + s.region_name + "</a></li>")
        }
        return o.join("")
    },
    regions: [],
    domain: MAIN_DOMAIN,
    cache: {},
    curSelect: {
        pro: -1,
        city: -1,
        region: -1
    }
};

CategoryInit2(),
/*exprCallBackNum && exprCallBackNum.callFnArr && exprCallBackNum.callFnArr.push(function(t) {
    var e = t.html_content;
    if (!e) {
        if (!_allExprInfo) return ! 1;
        e = {
            city: _allExprInfo.city_name,
            expr_count: _allExprInfo.expr_num
        }
    }
    $("#JS_expr_info").removeClass("none").find("a").html(e.city + (e.expr_count || 0) + "家体验馆")
}),*/
function(t) {
    var e = t("#JS_filter_fixed_cats"),
    i = 230,
    n = t(window).scrollTop();
    n >= i && e.show(),
    t(window).on("scroll",
    function() {
        n = t(this).scrollTop(),
        n >= i ? e.show() : e.hide()
    }),
    t("#JS_MLL_search_header_input2").focus(function() {
        t.searchKey("JS_MLL_search_header_input2"),
        t("#JS_MLL_search_header_input2").unbind("focus"),
        t(this).addClass("search-input-focus")
    })
} (jQuery),


$(function() {
    function t(t) {
        window._gaq.push(["_trackEvent"].concat(t))
    }
    showBrandImage("init", !0),
    initPriceFilter(),
    saleNumUpdate(),
    initSort(),
    initGoodsList(),
    contrast(),
    guessLike(),
    initTrackEvent(),
    //initImgLoader(300),
    //new TabMouseover("JS_fixture_recom", "fixture_commune", 1, _fixture_url),
    //new TabMouseover("JS_fixture_article", "fixture_knowledge", 0, _fixture_bbs),
    isSelected() && $(".g-float-left").addClass("online-hover"),
    $(".checkbox-icon").each(function(t, e) {
        $(e).hasClass("b_checked") ? $(e).addClass("borderc9033b") : $(e).removeClass("borderc9033b")
    }),
    $("#JS_list_panel .kficon").on("click",
    function() {
        window.mchat && window.mchat.openui && ($("#JS_FC_chat").trigger("click"), mchat.openui(null, {
            click: "categoryPage"
        }), t(["列表页在线客服按钮", "点击在线客服按钮", "click"]))
    })
});


var goodsIdCookie = [],
recordCookie = [],
strCookie = $.cookie("gId"),
recCookie = $.cookie("grecd");
strCookie && (goodsIdCookie = strCookie.split(",")),
goodsIdCookie.length || (goodsIdCookie = []),
recCookie && (recordCookie = recCookie.split(","), recordCookie = recordCookie.reverse()),
recordCookie.length || (recordCookie = []);
var initData = {
    contrastNum: goodsIdCookie.length || 0,
    goodsArry: goodsIdCookie || [],
    recordArry: recordCookie || [],
    contrastLock: !1
};
window.onload = function() {
    if ($(".g-item").hover(function() {
        var t = $(this).find(".g-float-left");
        t.hasClass("online-hover") || t.addClass("online-hover")
    },
    function() {
        var t = $(this).find(".g-float-left");
        isSelected() || t.removeClass("online-hover")
    }), initData.goodsArry.length > 0) {
        $(".contrast-div").fadeIn(0);
        for (var t = 0; t < initData.goodsArry.length; t++) $("#g-" + initData.goodsArry[t]).addClass("seclected"),
        contrastAjax(initData.goodsArry[t])
    }
    if (initData.contrastLock = !0, initData.recordArry.length > 0) {
        for (var e = "",
        i = "",
        t = 0; t < initData.recordArry.length; t++) t > 0 ? (e += "-" + initData.recordArry[t], i += "_" + initData.recordArry[t]) : (e += initData.recordArry[t], i += initData.recordArry[t]);
        initData.goods_id = e,
        recordAjax(e, i)
    }
    initData.recordArry.length < 9 ? $(".pnBtn").css("visibility", "hidden") : ($(".pnBtn").css("visibility", "visible　"), $("#JS_browsing").find("li").eq(0).addClass("cur")),
    getPreCouponInfo()
},
function() {
    $(".hiddenbox").click(function() {
        $(".contrast-div").fadeOut(0)
    }),
    $("#JS_contrast_goods").click(function() {
        $(this).hasClass("cur") || ($("#JS_browsing_record").removeClass("cur"), $("#JS_browsing_div").fadeOut(0), $("#JS_contrast_ul").fadeIn(0), $(this).addClass("cur"), $(this).parents(".tab-btns").removeClass("borleft"))
    }),
    $("#JS_browsing_record").click(function() {
        $(this).hasClass("cur") || ($("#JS_contrast_goods").removeClass("cur"), $("#JS_contrast_ul").fadeOut(0), $("#JS_browsing_div").fadeIn(0), $(this).addClass("cur"), $(this).parents(".tab-btns").addClass("borleft"));
        var t = window.location.href;
        $.ajax({
            url: t,
            type: "GET",
            async: !1,
            success: function() {
                var t = [],
                e = $.cookie("grecd");
                e && (t = e.split(","), t = t.reverse()),
                t.length || (t = []);
                var i = t || [];
                if (i.length > 0) {
                    for (var n = "",
                    o = "",
                    a = 0; a < i.length; a++) a > 0 ? (n += "-" + i[a], o += "_" + i[a]) : (n += i[a], o += i[a]);
                    if (n == initData.goods_id) return;
                    recordAjax(n, o)
                }
                i.length < 9 ? $(".pnBtn").css("visibility", "hidden") : ($(".pnBtn").css("visibility", "visible　"), $("#JS_browsing").find("li").eq(0).addClass("cur"))
            }
        })
    })
} (),
function() {
    function t(t) {
        o.animate({
            left: a + t + "px"
        },
        20),
        o.find("li.cur").removeClass("cur").prev("li").addClass("cur")
    }
    function e(t) {
        o.animate({
            left: -a + t + "px"
        },
        20),
        o.find("li.cur").removeClass("cur").next("li").addClass("cur")
    }
    function i() {
        var t = $("#JS_browsing").find("li.cur").index();
        initData.recordArry.length > 8 && (0 == t ? $("#JS_prev").css("visibility", "hidden") : $("#JS_prev").css("visibility", "visible"), t == initData.recordArry.length - 8 ? $("#JS_next").css("visibility", "hidden") : $("#JS_next").css("visibility", "visible"))
    }
    function n() {
        var t = o.css("left");
        return t = t.substring(0, t.length - 2),
        t = parseInt(t),
        s - r - 1 > -t
    }
    var o, a, s, r;
    $("#JS_browsing_record").on("click",
    function() {
        o = $("#JS_browsing"),
        a = $("#JS_browsing").find("li").eq(0).outerWidth(!0),
        s = $("#JS_browsing").find("li").length * a + 20,
        o.width(s),
        r = $(".bannner-div").width(),
        i()
    }),
    $("#JS_next").on("click",
    function() {
        if (n()) {
            var t = o.css("left");
            t = t.substring(0, t.length - 2),
            t = parseInt(t),
            e(t),
            i()
        }
    }),
    $("#JS_prev").click(function() {
        var e = o.css("left");
        e = e.substring(0, e.length - 2),
        e = parseInt(e),
        e < 0 && (t(e), i())
    })
} (),
Array.prototype.indexOfArry = function(t) {
    for (var e = 0; e < this.length; e++) if (this[e] == t) return e;
    return - 1
},
Array.prototype.removeArry = function(t) {
    var e = this.indexOfArry(t);
    e > -1 && this.splice(e, 1)
};



$(function () {
        //顶部导航
        $('.site-nav .drop-title').parent().on({
            'mouseenter': function () {
                jQuery(this).addClass('hover')
            },
            'mouseleave': function () {
                jQuery(this).removeClass('hover')
            }
        });
})
