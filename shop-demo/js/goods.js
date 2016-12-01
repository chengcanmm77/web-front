$(window).load(function() {
    $.lazyImg.start.apply($.lazyImg);
}); (function(a) {
    if (!a) {
        throw new Error("not found jQuery!");
    }
    a.fn.mllzoom = function(d) {
        var b = {
            xzoom: 200,
            yzoom: 200,
            offset: 10,
            position: "right",
            lens: 1,
            preload: 1,
            xsmall: 200,
            ysmall: 200
        };
        d && a.extend(b, d);
        var c = "";
        a(this).hover(function() {
            function q(e) {
                this.x = e.pageX,
                this.y = e.pageY;
            }
            var p = a(this);
            var u = p.offset().left,
            j = p.offset().top,
            i = p.find("img").get(0).offsetWidth,
            f = p.find("img").get(0).offsetHeight;
            c = p.find("img").attr("alt");
            var s = a(this).find("img").attr("limg");
            var g = $("<div class='zoomdiv'><img class='bigimg' src='http://image.meilele.com/images/blank.gif'/></div>");
            var l = false;
            var m = new Image();
            m.onerror = function() {
                m.onerror = null;
                m = null;
            };
            m.onload = function() {
                g.find("img.bigimg").prop("src", s);
                m.onload = null;
                l = true;
                a(document.body).trigger("triggermove");
            };
            m.src = s;
            m.complete && g.find("img.bigimg").prop("src", s) && (l = true) && a(document.body).trigger("triggermove");
            var v = $("<div class='jqZoomPup'>&nbsp;</div>");
            v.css({
                width: b.xsmall + "px",
                height: b.ysmall + "px"
            });
            a(this).find("img").attr("alt", ""),
            0 == a("div.zoomdiv").get().length && (a(this).after(g), a(this).append(v)),
            g.width(b.xzoom),
            g.height(b.yzoom),
            g.show(),
            b.lens || a(this).css("cursor", "crosshair"),
            a("#jqGalleryBox").on("mousemove triggermove",
            function(n) {
                mouse = new q(n);
                var o = g.find("img.bigimg");
                var x = o.get(0).offsetWidth,
                e = o.get(0).offsetHeight,
                w = "x",
                r = "y";
                if (isNaN(r) | isNaN(w)) {
                    var r = x / i,
                    w = e / f;
                    b.lens && v.css("visibility", "visible");
                }
                xpos = mouse.x - v.width() / 2 - u,
                ypos = mouse.y - v.height() / 2 - j,
                b.lens && (xpos = u > mouse.x - v.width() / 2 ? 0 : mouse.x + v.width() / 2 > i + u ? i - v.width() - 2 : xpos, ypos = j > mouse.y - v.height() / 2 ? 0 : mouse.y + v.height() / 2 > f + j ? f - v.height() - 2 : ypos),
                b.lens && v.css({
                    top: ypos,
                    left: xpos
                }),
                scrolly = ypos,
                g.get(0).scrollTop = scrolly * w,
                scrollx = xpos,
                g.get(0).scrollLeft = scrollx * r;
            });
        },
        function() {
            var e = $("div.jqZoomPup");
            a(this).children("img").attr("alt", c),
            a("#jqGalleryBox").unbind("mousemove"),
            b.lens && e.remove(),
            a("div.zoomdiv").remove();
        }),
        count = 0,
        b.preload && (a("body").append("<div style='display:none;' class='jqPreload" + count + "'></div>"), a(this).each(function() {
            var g = a(this).children("img").attr("limg"),
            f = jQuery("div.jqPreload" + count).html();
            jQuery("div.jqPreload" + count).html(f + '<img src="' + g + '">');
        }));
    };
})($, window); (function() {
    var b = 0;
    var c = ["webkit", "moz"];
    for (var a = 0; a < c.length && !window.requestAnimationFrame; ++a) {
        window.requestAnimationFrame = window[c[a] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[c[a] + "CancelAnimationFrame"] || window[c[a] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(i, e) {
            var d = new Date().getTime();
            var f = Math.max(0, 16.7 - (d - b));
            var g = window.setTimeout(function() {
                i(d + f);
            },
            f);
            b = d + f;
            return g;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(d) {
            clearTimeout(d);
        };
    }
} ());
var funParabola = function(d, w, g) {
    var j = {
        speed: 166.67,
        curvature: 0.0015,
        progress: function(a, c, b) {
            d.style.width = d.style.height = parseInt((b - a) / b * 30) + 20 + "px";
        },
        complete: function() {}
    };
    var r = {};
    g = g || {};
    for (var y in j) {
        r[y] = g[y] || j[y];
    }
    var x = {
        mark: function() {
            return this;
        },
        position: function() {
            return this;
        },
        move: function() {
            return this;
        },
        init: function() {
            return this;
        }
    };
    var e = "margin",
    u = document.createElement("div");
    if ("oninput" in u) { ["", "ms", "webkit"].forEach(function(b) {
            var a = b + (b ? "T": "t") + "ransform";
            if (a in u.style) {
                e = a;
            }
        });
    }
    var v = r.curvature,
    s = 0,
    q = 0;
    var m = true;
    if (d && w && d.nodeType == 1 && w.nodeType == 1) {
        var p = {},
        l = {};
        var i = {},
        o = {};
        var f = {},
        n = {};
        x.mark = function() {
            if (m == false) {
                return this;
            }
            if (typeof f.x == "undefined") {
                this.position();
            }
            return this;
        };
        x.position = function() {
            if (m == false) {
                return this;
            }
            var c = document.documentElement.scrollLeft || document.body.scrollLeft,
            b = document.documentElement.scrollTop || document.body.scrollTop;
            if (e == "margin") {
                d.style.marginLeft = d.style.marginTop = "0px";
            } else {
                d.style[e] = "translate(0, 0)";
            }
            p = d.getBoundingClientRect();
            l = w.getBoundingClientRect();
            i = {
                x: p.right + c,
                y: p.top + (p.bottom - p.top) / 2 + b
            };
            o = {
                x: l.right + c,
                y: l.bottom + b
            };
            f = {
                x: 0,
                y: 0
            };
            n = {
                x: -1 * (i.x - o.x),
                y: -1 * (i.y - o.y)
            };
            if (p.top <= 80) {
                v = r.curvature;
                s = (n.y - v * n.x * n.x) / n.x;
            } else {
                var a = {
                    x: parseInt(n.y > 0 ? (n.x / 3 * 2) : (n.x / 3)),
                    y: f.y - 80
                };
                v = (n.y * a.x - a.y * n.x) / (n.x * a.x * (n.x - a.x));
                s = (n.y - v * n.x * n.x) / n.x;
            }
            return this;
        };
        x.move = function() {
            if (m == false) {
                return this;
            }
            var a = 0,
            b = n.x > 0 ? 1 : -1;
            var c = function() {
                var A = 2 * v * a + s;
                a = a + b * Math.sqrt(r.speed / (A * A + 1));
                if ((b == 1 && a > n.x) || (b == -1 && a < n.x)) {
                    a = n.x;
                }
                var z = a,
                B = v * z * z + s * z;
                if (e == "margin") {
                    d.style.marginLeft = z + "px";
                    d.style.marginTop = B + "px";
                } else {
                    d.style[e] = "translate(" + [z + "px", B + "px"].join() + ")";
                }
                if (a !== n.x) {
                    r.progress(z, B, n.x);
                    window.requestAnimationFrame(c);
                } else {
                    r.complete();
                    m = true;
                }
            };
            window.requestAnimationFrame(c);
            m = false;
            return this;
        };
        x.init = function() {
            this.position().mark().move();
        };
    }
    return x;
};
window.mchat = window.mchat || {};
window._gaq = window._gaq || [];
window._ipad_from = window._ipad_from || /ipad/i.test(navigator.userAgent);
_DATA = window._DATA || {};
_DATA.cityList = {};
_DATA.districtList = {};
_DATA.customDistrictList = {};
_DATA.getExprList = true;
_DATA.number = 1;
_DATA.region = {};
var str_transfee = "goods_id=" + _DATA.goods_id + "&goods_number=" + _DATA.number + "&shop_id=" + (_DATA.shop_id || 1) + "&city_id=" + (_DATA.selectCityId || 0) + "&district_id=" + (_DATA.districtId || 0) + "&province_id=" + (_DATA.provinceId || 0) + "&custom_district=" + (_DATA.customDistrictId || 0);
var is_Quota_good = null;
$.ajax({
    url: "/mll_api/api/goods_transfee",
    cache: false,
    data: str_transfee,
    dataType: "json",
    success: function(a) {
        if (a.limit_sale > 0) {
            is_Quota_good = 1;
            $("#JS_goods_stock_notice").html("限购商品").show();
        }
    }
});
var Goods = {
    author: "leihao",
    createTime: "2014/12/15",
    version: "1.0",
    init: function() {
        this.timeObj = null;
        this.albumEvent();
        this.getExprZhanPinDataByAjax();
        this.collectEvent();
        if (_DATA.isXiaJia == 1) {
            this.saleOutGoodsSlide();
        } else {
            this.goodsInfoEvent();
        }
        if (_DATA.isSelfnonGroup) {
            this.breadNavEvent();
            this.getActinfoCartGoods(false);
        }
        this.recommendEvent();
        this.toggleBarScrollToFixed();
        this.toggleTabByClick();
        this.suitAndMatchEvent();
        this.slideTab($("#JS_faq_tab_head a"), $("#JS_faq_tab_body ul"), "current", "click");
        $.goodsComment(_DATA.goods_id, {
            callBackOne: function(a) {
                $("#JS_gd_tab_body_pingjia").show();
                $("#JS_goods_comment_number")[0] && $("#JS_goods_comment_number").html(a.comments_count);
                if (a.comments_count - 0 > 0) {
                    $("#JS_gd_tab_head_pingjia").html('评价<span class="red">(' + a.comments_count + ")</span>").css({
                        display: "inline-block"
                    });
                    if ($("#JS_goods_comment_num")[0]) {
                        $("#JS_goods_comment_num").html((a.comment_all_rank - 0).toFixed(1) || "5.0");
                    }
                } else {
                    $("#JS_gd_tab_head_pingjia").html('评价<span class="red">(0)</span>').css({
                        display: "inline-block"
                    });
                    if ($("#JS_goods_comment_num")[0]) {
                        $("#JS_goods_comment_num").html("5.0");
                    }
                }
            }
        });
        this.purchaseHistoryEvent();
        this.chatEvent();
        this.setViewHistory();
        $("#JS_scale_src").click(function() {
            return false;
        });
    },
    setViewHistory: function() {
        var c = _DATA.goods_id;
        if (c) {
            var e = new Date();
            var g = $.cookie("viewInfo");
            if (g) {
                var a = g.split("|");
                for (var f = 0; f < a.length; f++) {
                    a[f] = a[f].split(",");
                }
            } else {
                var a = [];
            }
            a.push([c, e.getTime()]);
            a = a.sort(function(j, i) {
                return (i[1] - 0) - (j[1] - 0);
            });
            if (a.length > 10) {
                a.length = 10;
            }
            var d = [];
            for (var b = 0; b < a.length; b++) {
                if (!a[b] || !a[b][0] || !a[b][1]) {
                    continue;
                }
                d[b] = (a[b][0] - 0) + "," + (a[b][1] - 0);
            }
            var d = d.join("|");
            $.cookie("viewInfo", d, 365, "meilele.com");
        }
    },
    albumEvent: function() {
        var e = this,
        c = $("#JS_goods_album_display"),
        a = $("#JS_goods_album_btn"),
        f = $("#JS_goods_album_stage"),
        g = f.find("li"),
        j = g.length,
        i = g.first(),
        d = (j % 4 > 0) ? parseInt(j / 4) + 1 : j / 4,
        b = a.attr("data-step") - 0;
        _DATA.slideCurrentIndex = 0;
        a.on("click", ".prev",
        function() {
            if (d > 1) {
                _DATA.slideCurrentIndex--;
                e.albumMove(f, d, b, g);
            }
            return false;
        }).on("click", ".next",
        function() {
            if (d > 1) {
                _DATA.slideCurrentIndex++;
                e.albumMove(f, d, b, g);
            }
            return false;
        });
        f.on("mouseover", ".album_item a",
        function() {
            var n = $(this).siblings("img");
            var m = n.parent();
            if (m.hasClass("current")) {
                return false;
            }
            m.siblings(".album_item").removeClass("current");
            m.addClass("current");
            e.updateImage(n);
            var l = this._gaq;
            if (!l) {
                _gaq.push(["_trackEvent", "新版商品详情页", "缩略图鼠标移入", _DATA.goods_id]);
                this._gaq = true;
            }
        });
        this.imgZoom();
    },
    updateImage: function(i) {
        var d = $.__IMG + "/images/blank.gif";
        var f = i;
        var c = f.attr("data-show_img") || d;
        var e = f.attr("data-zoom_img") || d;
        var b = $("#JS_scale_src").find("img");
        var a = $("#JS_goods_album_display");
        a.attr("src", i.attr("src"));
        var g = new Image();
        g.src = i.data("show_img");
        $(g).on("load",
        function() {
            a.attr("src", g.src);
        });
        b.attr("src", c).attr("limg", e);
    },
    albumMove: function(b, c, d, a) {
        if (!b.is(":animated")) {
            if (_DATA.slideCurrentIndex > a.length - 4) {
                _DATA.slideCurrentIndex = 0;
            }
            if (_DATA.slideCurrentIndex < 0) {
                _DATA.slideCurrentIndex = a.length - 4;
            }
            var e = _DATA.slideCurrentIndex * d;
            b.animate({
                "margin-left": 0 - e + "px"
            },
            300);
        }
    },
    imgZoom: function() {
        $(".jqzoom").mllzoom({
            xzoom: 400,
            yzoom: 400,
            offset: 10,
            preload: 0,
            lens: 1
        });
    },
    collectEvent: function() {
        var a = this;
        $("#JS_collect_this_goods").on("click",
        function() {
            a.collect();
            return false;
        });
    },
    collect: function() {
        if (_DATA.collected == 1) {
            this.collectDel();
        } else {
            this.collectAdd();
            if (_gaq) {
                _gaq.push(["_trackEvent", "goodsEvent", "collect", _DATA.goods_id]);
            }
            window._ana && window._ana.push(["setCustomer", "goods_shoucang", _DATA.goods_id + "::1"]);
            window._ana && window._ana.push(["trackEvent", "goodsCollect", _DATA.goods_id]);
        }
    },
    collectDialog: function(b, c) {
        c = c || false;
        if (b && b.error == 0) {
            var a = [];
            a.push('<div class="collect_box"><div class="collect_h r"><a href="javascript:void(0);" onclick="$.closeLightBox();return false;" class="close">&times;</a></div>');
            a.push('<div class="collect_c c">');
            a.push('<h3 class="collect_tip"><span class="success_icon"></span><span id="JS_collect_msg" class="success_msg">' + (c ? "已经取消收藏": "收藏成功") + "</span></h3>");
            a.push('<p class="colloct_link">您已收藏<span class="red bold">' + (b.number || b.num || 0) + '</span>个商品，<a href="/user/?act=collection_list" class="red" target="_blank" title="查看收藏夹">查看收藏夹&gt;&gt;</a></p>');
            a.push("</div></div>");
            var d = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            $.lightBox(a.join(""), {},
            true, 500, "position:absolute;top:" + (d + 300) + "px;", true);
        } else {
            $.alert(b.message || "操作失败");
        }
    },
    collectAdd: function() {
        var a = this;
        $.addGoodsToCollect(_DATA.goods_id,
        function(b) {
            _DATA.collected = 1;
            $("#JS_collect_this_goods").find("a").html("已收藏");
            a.collectDialog(b);
        });
    },
    collectDel: function() {
        var b = this,
        a = _DATA.goods_id;
        $.ajax({
            url: "/ajax_user/?act=collect&action=del_collect&id=" + a,
            dataType: "json",
            cache: false,
            success: function(c) {
                _DATA.collected = 0;
                $("#JS_collect_this_goods").find("a").html("收藏商品");
                cDom = dDom = null;
                b.collectDialog(c, true);
            },
            error: function() {
                $.alert("由于网络原因，收藏失败，请稍后再试。");
            }
        });
    },
    getExprZhanPinDataByAjax: function() {
        var a = this;
        $.ajax({
            url: "/mll_api/api/regionData?region_id=" + ($.cookie("region_id") || ""),
            type: "GET",
            cache: true,
            dataType: "json",
            success: function(b) {
                if (b) {
                    a.appendExprHtmlToPage(b);
                }
            }
        });
    },
    appendExprHtmlToPage: function(e) {
        var d = [];
        d.push('<div class="face"><div id="JS_expr_goods_text" class="bg" style="cursor:pointer;">全国<b>' + e.allNumber + '</b>家体验馆</div><a href="javascript:;" title="免费发送地址到手机" id="JS_expr_goods_img"><img src="' + e.image + '" alt="" /></a></div>');
        d.push('<div class="info">');
        d.push("<h4>体验馆展品：</h4>");
        if (e.mark == 1) {
            d.push('<p>您可以在<a href="' + e.url + '" target="_blank" title="">全国' + e.num + "家体验馆</a>查看展品！</p>");
            d.push('<div id="JS_expr_goods_select_list" class="panel">');
            d.push("<table><tr>");
            d.push("<td>");
            d.push('<div id="JS_expr_goods_select_province" class="select province">');
            d.push('<div class="selected"><span>请选择</span><em></em></div>');
            d.push('<div class="options">');
            var f = _DATA.exprProvince = e.city;
            for (k in f) {
                d.push('<a href="javascript:;">' + k + "</a>");
            }
            d.push("</div>");
            d.push("</div>");
            d.push("</td>");
            d.push("<td>");
            d.push('<div id="JS_expr_goods_select_city" class="select city">');
            d.push('<div class="selected"><span>请选择</span><em></em></div>');
            d.push('<div class="options"></div>');
            d.push("</div>");
            d.push("</td>");
            d.push("</tr></table>");
            d.push("</div>");
            d.push('<div class="panel-arrow"><span></span></div>');
            d.push('<a href="javascript:;" class="find" title="找到离我最近的体验馆" id="JS_expr_goods_find"></a>');
        } else {
            d.push('<p>您可以到<a href="' + e.url1 + '" target="_blank" title="">' + e.city + e.num + '家体验馆</a>看展品 <em class="map"></em><a href="javascript:;" target="_blank" id="JS_expr_goods_sms_2" title="查看地图">查看地图</a></p>');
            d.push('<div class="expr">');
            d.push("<table><tr>");
            d.push("<td>");
            d.push('<div class="list">');
            var c = e.data,
            a = c.length,
            g = "";
            for (var b = 0; b < a; b++) {
                g += '<a href="javascript:;" title="' + c[b].expr_alias + '" onclick="$.codeSms(' + c[b].expr_id + ", {click:'新版商品详情页_" + c[b].expr_alias + "点击', 'postionCode':'mll_gdetail1'});\">" + c[b].expr_alias.substr(0, 7) + "</a>";
            }
            d.push('<div id="JS_expr_goods_stage" class="stage">' + g + "</div>");
            d.push("</div>");
            d.push("</td>");
            if (a > 4) {
                d.push("<td>");
                d.push('<div id="JS_expr_goods_arrow" class="arrow"><a href="javascript::" class="up"></a><a href="javascript::" class="down current_down"></a></div>');
                d.push("</td>");
            }
            d.push("</tr></table>");
            d.push("</div>");
            d.push('<a href="javascript:;" class="sms" title="免费发送地址到手机" id="JS_expr_goods_sms"></a>');
        }
        d.push("</div>");
        if (window._DATA.can_direct_buy != 1) {
            jQuery("#JS_expr_goods_display").html(d.join("")).show();
        }
        this.exprZhanPinGoodsEvent();
    },
    exprZhanPinGoodsEvent: function() {
        _DATA.exprGoods = {};
        _DATA.exprGoods.currentPage = 0;
        _DATA.exprGoods.marqueeStage = $("#JS_expr_goods_stage");
        var d = this,
        c = _DATA.exprGoods.marqueeStage.find("a"),
        b = c.length,
        a = (b % 4 > 0) ? parseInt(b / 4) + 1 : parseInt(b / 4);
        $("#JS_expr_goods_arrow").on("click", ".up",
        function() {
            _DATA.exprGoods.currentPage--;
            if (_DATA.exprGoods.currentPage < 0) {
                _DATA.exprGoods.currentPage = 0;
            }
            d.exprGoodsListScroll(_DATA.exprGoods.currentPage, a);
            return false;
        }).on("click", ".down",
        function() {
            _DATA.exprGoods.currentPage++;
            if (_DATA.exprGoods.currentPage >= a) {
                _DATA.exprGoods.currentPage = a - 1;
            }
            d.exprGoodsListScroll(_DATA.exprGoods.currentPage, a);
            return false;
        });
        $("#JS_expr_goods_select_list").on("click", ".province .selected",
        function(f) {
            d.toggleExprGoodsSelect($(this).parent(".select"), f);
            return false;
        }).on("click", ".city .selected",
        function() {
            d.toggleExprGoodsSelect($(this).parent(".select"));
            return false;
        });
        $("#JS_expr_goods_select_province .options").on("click", "a",
        function() {
            d.hideExprGoodsOptions($("#JS_expr_goods_select_province"));
            d.getExprGoodsCityList($(this).html());
            $("#JS_expr_goods_select_province span").html($(this).text());
            $("#JS_expr_goods_select_city span").html("请选择");
            return false;
        });
        $("#JS_expr_goods_select_city .options").on("click", "a",
        function() {
            d.hideExprGoodsOptions($("#JS_expr_goods_select_city"));
            $("#JS_expr_goods_select_city span").html($(this).text());
            _DATA.exprGoods.cityId = $(this).data("region_id");
            return false;
        });
        $("#JS_expr_goods_find").click(function() {
            $.sendSms(false, {
                defaultCityId: _DATA.exprGoods.cityId,
                click: "新版商品详情页_找到离我最近的体验馆"
            });
            return false;
        });
        $("#JS_expr_goods_sms").click(function() {
            $.codeSms(false, {
                defaultCityId: _DATA.exprGoods.cityId,
                click: "新版商品详情页_体验馆模块按钮",
                postionCode: "mll_gdetail1"
            });
            return false;
        });
        $("#JS_expr_goods_sms_2").click(function() {
            $.codeSms(false, {
                defaultCityId: _DATA.exprGoods.cityId,
                click: "新版商品详情页_体验馆模块查看地图",
                postionCode: "mll_gdetail1"
            });
            return false;
        });
        $("#JS_expr_goods_img, #JS_expr_goods_text").click(function() {
            $.sendSms(false, {
                defaultCityId: _DATA.exprGoods.cityId,
                click: "新版商品详情页_体验馆模块图片"
            });
            return false;
        });
    },
    exprGoodsListScroll: function(b, a) {
        var d = 0 - 64 * _DATA.exprGoods.currentPage;
        var c = $("#JS_expr_goods_arrow a");
        _DATA.exprGoods.marqueeStage.stop(true).animate({
            "margin-top": d + "px"
        },
        200);
        if (b <= 0) {
            $(c[0]).removeClass("current_up");
        } else {
            $(c[0]).addClass("current_up");
        }
        if (b >= a - 1) {
            $(c[1]).removeClass("current_down");
        } else {
            $(c[1]).addClass("current_down");
        }
    },
    showExprGoodsOptions: function(a, d) {
        var b = this;
        a.find("em").addClass("open");
        a.find(".options").show();
        a.data("state", 1);
        cancelDefaultEvent(d);
        d = d || window.event;
        var c = d.target || d.srcElement;
        if (c.className != "selected") {
            document.onclick = function() {
                b.hideExprGoodsOptions(a);
            };
        }
    },
    hideExprGoodsOptions: function(a) {
        a.find("em").removeClass("open");
        a.find(".options").hide();
        a.data("state", 0);
    },
    toggleExprGoodsSelect: function(a, c) {
        var b = a.data("state");
        $("#JS_expr_goods_select_list").find("em").removeClass("open");
        $("#JS_expr_goods_select_list").find(".options").hide();
        if (b == 1) {
            this.hideExprGoodsOptions(a);
        } else {
            this.showExprGoodsOptions(a, c);
        }
    },
    getExprGoodsCityList: function(c) {
        if (!c) {
            return;
        }
        var b = [],
        e = _DATA.exprProvince[c];
        for (var a = 0,
        d = e.length; a < d; a++) {
            b.push('<a href="javascript:;" data-region_id="' + e[a].city_id + '">' + e[a].city + "</a>");
        }
        $("#JS_expr_goods_select_city .options").html(b.join(""));
    },
    goodsInfoEvent: function() {
        this.getGoodsInfoByAjax();
        var e = this;
        this.setGoodsInfoDom();
        var c = function(g, f) {
            if (!g) {
                return false;
            }
            if ((g.className + "").indexOf(f) >= 0) {
                return true;
            } else {
                if (g.tagName == "BODY") {
                    return false;
                } else {
                    return c(g.parentNode, f);
                }
            }
        };
        this.doc.on("click",
        function(f) {
            var g = f.target || f.srcElement;
            if (!c(g, "JS_area_select_list")) {
                e.regionList.hide();
            }
        });
        if (!window._ipad_from) {
            this.goodsPanelRoot.find(".JS_area_select_show").hover(function() {
                if (e.areaSelectTimer) {
                    clearTimeout(e.areaSelectTimer);
                }
                e.regionList.show();
            },
            function() {
                e.areaSelectTimer = setTimeout(function() {
                    e.regionList.hide();
                },
                500);
            });
            this.goodsPanelRoot.find(".JS_area_select_list").hover(function() {
                if (e.areaSelectTimer) {
                    clearTimeout(e.areaSelectTimer);
                }
            },
            function() {
                e.areaSelectTimer = setTimeout(function() {
                    e.regionList.hide();
                },
                500);
            });
        }
        this.goodsPanelRoot.on("click", ".JS_area_select_show",
        function() {
            e.regionList.show();
            return false;
        }).on("click", ".close",
        function() {
            e.regionList.hide();
            return false;
        }).on("click", ".JS_jump",
        function() {
            var f = $(this).data("key");
            $("#JS_gd_tab_head_" + f).click();
            e.setPosition("JS_gd_tab_head_" + f);
            return false;
        });
        this.listProvince.on("click", "a",
        function() {
            var i = $(this),
            f = i.text(),
            g = i.data("region_id");
            e.selectProvince(g, f);
            return false;
        });
        this.listCity.on("click", "a",
        function() {
            var i = $(this),
            f = i.text(),
            g = i.data("region_id");
            e.selectCity(g, f);
            return false;
        });
        this.listDistrict.on("click", "a",
        function() {
            var i = $(this),
            f = i.text(),
            g = i.data("region_id");
            e.selectDistrict(g, f);
            return false;
        });
        this.listCustomDistrict.on("click", "a",
        function() {
            var i = $(this),
            f = i.text(),
            g = i.data("region_id");
            e.selectCustomDistrict(g, f);
            return false;
        });
        var a = this.areaHead.find("li"),
        b = this.areaList.find("ul");
        this.areaHead.on("click", "li",
        function() {
            var f = $(this).index();
            a.removeClass("cur").eq(f).addClass("cur");
            b.addClass("none").eq(f).removeClass("none");
            return false;
        });
        $("#JS_goods_saled_number").html(_DATA.saledNumber);
        this.goodsPanelRoot.on("change", ".goodsNumber",
        function() {
            var f = $(this);
            this.dataMax = f[0].dataMax = f.attr("data-max");
            f[0]._id = this.id;
            this.value = e.formatNumber(this.value, this.dataMax);
            e.setNumber(this.value);
            e.getGoodsTransfee();
        }).on("click", ".JS_add",
        function() {
            e.setNumber(_DATA.number - 0 + 1);
            return false;
        }).on("click", ".JS_minus",
        function() {
            e.setNumber(_DATA.number - 1);
            return false;
        });
        $("#goods_kefu").click(function() {
            if (_DATA.isSelfSupp) {
                window.mchat && window.mchat.openui(false, {
                    click: "goods_1"
                });
            } else {
                window.mchat && window.mchat.openui(3, {
                    click: "goods_1",
                    shopName: _DATA.shop_name,
                    shopId: _DATA.shop_id
                });
            }
            _gaq.push(["_trackEvent", "chatClick", location.href, "goods_1"]);
            return false;
        });
        this.goodsPanelRoot.on("click", ".JS_pay_on",
        function() {
            e.goodsPanelRoot.find(".JS_pay_event").show();
            return false;
        }).on("click", ".JS_pay_off",
        function() {
            e.goodsPanelRoot.find(".JS_pay_event").hide();
            return false;
        });
        this.goodsPanelRoot.on("click", ".JS_prict_cut",
        function() {
            $.costDownTip(_DATA.goods_id, {
                price: _DATA.goods_price
            });
            return false;
        });
        this.goodsPanelRoot.on("click", ".JS_presell_bonus",
        function() {
            var f = this.getAttribute("data-key");
            f = f ? f.split("|") : [""];
            $.couponPresell(f[0] + "|" + _DATA.goods_id, {
                evtFrom: "商品详情页_" + (f.length > 2 ? f[1] : "")
            });
            return false;
        });
        var d = {
            "trans-fee": "",
            "limit-day": '<p class="tipP1">凡美乐乐配送商品（预售、定制、特卖、团购、秒杀、拍卖、赠品、补件商品除外），选择“体验馆配送安装”，要求尽快发货并在下单时付整单全款，在我方承诺区域内订单可享受“限时达”服务：限时达订单商品，未按期送达的，美乐乐将按该商品成交金额的1%每天进行赔偿。限时达订单以付款后生成“限时达标识”为准，标识分别为：“7日限时达”、“12日限时达”和“30日限时达”。<br /><strong class="red">咨询电话：400-0098-666</strong></p><p class="tipP2"><a href="/article_cat-23/article-10135.html" target="_blank" title="查看详情" class="orange">查看详情&gt;&gt;</a></p>',
            tuihuan: '<p class="tipP1">美乐乐承诺45天退换货，因质量问题退换，商家承担邮费；非质量问题退换，仅限正价商品，买家承担邮费。影响二次销售的产品不能退换货。定制类产品非质量问题不能退换货。已明确注明“不予退换”的商品不能退换货。<br /><strong class="red">咨询电话：400-0098666</strong></p><p class="tipP2"><a href="/article_cat-26/article-620.html" target="_blank" title="查看详情" class="orange">查看详情&gt;&gt;</a></p>',
            zhibao: '<p class="tipP1">美乐乐家具保修一年，一年内因质量问题免费维修。非质量问题或超过一年，维修只收取材料成本费。木地板产品、定制门产品、灯饰照明类、厨卫装修类、五金工具类和五金电器类产品保修一年；瓷砖和墙纸无质保期。<br /><strong class="red">咨询电话：400-0098666</strong></p><p class="tipP2"><a href="/article_cat-26/article-679.html" target="_blank" title="查看详情" class="orange">查看详情&gt;&gt;</a></p>',
            "mll-guijiupei": '<p class="tipP1">美乐乐承诺：已购商品未出库前，如果降价，返还差额，如果涨价，不用补差价。<br /><strong class="red">咨询电话：400-0098666</strong></p><p class="tipP2"><a href="/article_cat-26/article-1530.html" target="_blank" title="查看详情" class="orange">查看详情&gt;&gt;</a></p>',
            zhengpin: '<p class="tipP1">所售商品均为正品，为买家提供正品保障。<br /><br /><span class="red">咨询电话：400-0098666</span></p>',
            guijiupei: '<p class="tipP1">已购商品未出库前，如果降价，返还差额，如果涨价，不用补差价。<br /><br /><span class="red">咨询电话：400-0098666</span></p>',
            "install-service": '<h2 class="install-h2">上门安装说明：</h2><p class="install-p">1.层高3米以下的组装、安装及调试；<br />2.不含拆旧、额外配件；<br />3.安装范围体验馆服务范围内；<br />4.一次上门安装费用。<br />超出以上4点的附加费用由买家线下支付给安装人员</p>'
        };
        this.goodsPanelRoot.on("mouseover", ".JS_show_tip",
        function() {
            var m = $(this);
            var i = m.data("type");
            var j = m.data("direction") || "up";
            var g = (i == "trans-fee") ? _DATA.transFeeReturnHtml: d[i];
            var l = m.offset(),
            f = 250;
            if (i == "install-service") {
                l.left = window.LOAD ? l.left - 26 : l.left - 75;
                f = 310;
            }
            if (!g) {
                return;
            }
            f = i == "trans-fee" ? "auto": (f + "px");
            e.createTipBox(g, j, l);
            $("#JS_show_tip_box").css("width", f);
        }).on("mouseout", ".JS_show_tip",
        function() {
            $("#JS_show_tip_box").hide();
        });
        this.goodsPanelRoot.on("mouseover", ".JS_exclusive_tip",
        function() {
            var f = $(this);
            e.createTipBox(e.htmlNew, "up", f.offset());
            $("#JS_show_tip_box").css("width", "auto");
            $("#JS_show_tip_box").find(".in").eq(0).css({
                width: "257px",
                "max-height": "327px",
                overflow: "auto"
            });
        }).on("mouseout", ".JS_exclusive_tip",
        function() {
            $("#JS_show_tip_box").hide();
        });
        this.goodsPanelRoot.on("click", ".gift",
        function() {
            window.mchat && window.mchat.openui(false, {
                click: "goods_2"
            });
            _gaq.push(["_trackEvent", "chatClick", location.href, "goods_2"]);
            return false;
        }).on("click", ".JS_addToCart",
        function() {
            if ($(this).hasClass("goods-max")) {
                return false;
            }
            e.direct = $(this).attr("data-direct");
            e.buy(this);
            return false;
        });
        $("#JS_float_nav_buy").click(function() {
            e.direct = $(this).attr("data-direct");
            e.buy(this);
            window._gaq.push(["_trackEvent", "goodsEvent", "Buy_navs", goods_id]);
            return false;
        });
        $("#JS_float_nav_buy_direct").click(function() {
            if (window._DATA.can_direct_buy == 1) {
                e.direct = $(this).attr("data-direct");
                e.buy(this);
            }
            return false;
        });
        $("#JS_qrcode_hover").hover(function() {
            $("#JS_goods_qrcode").show();
            var f = document.getElementById("JS_qrcode_img");
            if (f._isReady) {
                return;
            }
            f.src = f.getAttribute("src1");
            f._isReady = true;
        },
        function() {
            $("#JS_goods_qrcode").hide();
        });
    },
    oneBuy: function(e) {
        window._gaq.push(["_trackEvent", "商品详情页", "一键购买", "click"]);
        var j = this;
        var a = {};
        a[_DATA.goods_id] = {
            number: _DATA.number,
            show_price: "",
            is_install: $("#JS_install_check").prop("checked")
        };
        var l = [];
        var c = [];
        if (a) {
            for (var d in a) {
                var f = a[d];
                if ($.isNumeric(f)) {
                    c.push(d + ":" + f);
                    l.push(d);
                } else {
                    var g = [];
                    g.push(d);
                    l.push(d);
                    g.push(f.number || 1);
                    g.push(f.show_price ? f.show_price: "");
                    g.push(f.act_id ? f.act_id: "");
                    g.push(f.is_install ? 1 : 0);
                    c.push(g.join(":"));
                }
            }
            c = c.join("|");
        } else {
            $.alert("无效商品!");
            return false;
        }
        var b = {
            is_logistics: _DATA.isLogistics || ""
        };
        $.ajax({
            url: "/ajax_flow/?step=add_to_cart_new&nolist=1&goods_id=" + _DATA.goods_id + "&goods=" + c,
            data: b,
            cache: false,
            dataType: "json",
            success: function(m) {
                if (m.error == 0) {
                    if (m.recGoods[_DATA.goods_id]) {
                        i(m.recGoods[_DATA.goods_id]);
                    }
                } else {
                    if (m.error == 1 && m.needLogin == 1) {
                        $.cookie("meilele_login", 0, {
                            expires: -1
                        });
                        $.cookie("ECS[username]", "", {
                            expires: -1
                        });
                        $.showLoginBox(function() {
                            j.buy(e);
                        });
                    } else {
                        $.alert("发生错误。请稍候再试。");
                    }
                }
            },
            error: function() {
                $.alert("数据连接失败，请重试！");
            }
        });
        function i(n) {
            var m = [];
            m.push(n);
            $.ajax({
                url: "/core_api/PushMem/apicheckCartGoods/",
                type: "post",
                data: {
                    rec_id: m
                },
                dataType: "json",
                success: function(o) {
                    if (!$.cookie("ECS[username]") || $.cookie("meilele_login") != 1) {
                        $.showLoginBox(function() {
                            j.buy(e);
                        });
                        return false;
                    }
                    var p = '<form action="/flow/?step=pre_checkout" method="post" id="JS_pre_check_form_one" target="_self"><input type="hidden" value="' + n + '" name="rec_id[]"/></form>';
                    $("body").append(p);
                    setTimeout(function() {
                        $("body").find("#JS_pre_check_form_one").submit();
                    },
                    10);
                },
                error: function() {
                    alert("数据连接失败，请重试！");
                }
            });
        }
    },
    setGoodsInfoDom: function() {
        this.goodsPanelRoot = $("#JS_goods_info_panel");
        this.areaHead = $("#JS_area_select_header");
        this.headProvince = this.areaHead.find(".province");
        this.headCity = this.areaHead.find(".city");
        this.headDistrict = this.areaHead.find(".district");
        this.headCustomDistrict = this.areaHead.find(".customDistrict");
        this.areaList = $("#JS_area_select_list");
        this.listProvince = this.areaList.find(".province");
        this.listCity = this.areaList.find(".city");
        this.listDistrict = this.areaList.find(".district");
        this.listCustomDistrict = this.areaList.find(".customDistrict");
        this.regionText = this.goodsPanelRoot.find(".JS_area_select_show .txt");
        this.regionList = this.goodsPanelRoot.find(".JS_area_select_list");
        this.doc = $(document);
        this.win = $(window);
    },
    getGoodsInfoByAjax: function() {
        var d = this;
        var b = _DATA.goods_id;
        var c = function(l) {
            $("#JS_effect_price_type").html(l[b].effect_price_type);
            $("#JS_effect_price").html(l[b].effect_price);
            _DATA.goods_price = l[b].effect_price;
        };
        var f = function(m) {
            if (m && m[b] && (window._page_create_time && m[b].last_update_1 && m[b].last_update_1 > window._page_create_time) || (window._mainGoodsPrice && _mainGoodsPrice != m[b].effect_price)) {
                var l = new Image;
                l.src = "/core_api/PushMem/apiPushGoodsPage/?goods_id=" + b + "&page_create_time=" + _page_create_time + "&last_update_time=" + m[b].last_update_1 + "&page_price=" + _mainGoodsPrice + "&effect_price=" + m[b].effect_price;
            }
        };
        var j = function(l) {
            if (l && l[b] && l[b].trans_level > 0) {
                $("#JS_trans_level_1").css("display", "inline-block");
                $("#JS_trans_level_2").width(l[b].trans_level == 3 ? 19 : (l[b].trans_level == 2 ? 10 : 0));
            }
        };
        var e = function(l) {
            var n = $("#JS_goods_sub_title"),
            m = "";
            l = l[_DATA.goods_id];
            if (l.goods_sub_title) {
                if (l.goods_sub_title_link) {
                    m = '<a href="' + l.goods_sub_title_link + '" target="_blank" class="red">' + l.goods_sub_title + "</a>";
                } else {
                    m = l.goods_sub_title;
                }
                n.html(m);
            }
        };
        var a = function(E) {
            Goods.activityMap = Goods.activityMap || [];
            var x = "";
            t = "";
            if (E.mainActivity && E.mainActivity.length) {
                for (var w = 0; w < E.mainActivity.length; w++) {
                    var D = E.mainActivity[w];
                    Goods.activityMap.push(D);
                    x += '<li><table><tr><td><span class="label">' + D.act_tag + "</span></td>";
                    if (D.act_url) {
                        if (D.act_type == "跨店满减") {
                            x += '<td><a href="' + D.act_url + '" target="_blank" class="red">' + D.act_desc + "</a></td>";
                        } else {
                            x += '<td><a href="' + D.act_url + '" target="_blank" class="red">' + D.act_desc + "</a></td>";
                        }
                        x += '<td><a href="' + D.act_url + '" class="orange link" target="_blank">详情&gt;&gt;</a></td>';
                    } else {
                        if (D.act_type == "跨店满减") {
                            x += '<td class="red">' + D.act_desc + "</td>";
                        } else {
                            x += '<td class="red">' + D.act_desc + "</td>";
                        }
                    }
                    if (D.act_tag == "手机专享" && D.region_name.length > 0) {
                        x += '<td>&nbsp;<a href="javascript:;" class="orange JS_exclusive_tip">[专享区域]</a></td>';
                        var y = "";
                        var z = Math.ceil(D.region_name.length / 4);
                        y += '<h3 class="head">商品享受手机专享价的配送区域</h3>';
                        y += "<ul>";
                        for (var s = 0; s < z; s++) {
                            y += "<li>";
                            var r = s * 4 + 4;
                            if (r > D.region_name.length) {
                                r = D.region_name.length;
                            }
                            for (var q = s * 4; q < r; q++) {
                                y += "<span>" + unescape(D.region_name[q]) + "</span>";
                            }
                            y += "</li>";
                        }
                        y += "</ul>";
                        d.htmlNew = y;
                    }
                    x += "</tr></table></li>";
                }
            }
            if (E.subActivity && E.subActivity.length) {
                for (var v = 0,
                q = E.subActivity.length; v < q && v < 3; v++) {
                    var A = E.subActivity[v];
                    Goods.activityMap.push(A);
                    if (A.act_type == "优惠券") {
                        t += "<li><table><tr>";
                        t += '<td><div class="coupon Left"><span class="sl"></span><span class="txt">' + A.act_tag + '</span><span class="sr"></span></div></td>';
                        t += '<td><a href="' + A.act_url + '" target="_blank" class="red">' + A.act_desc.substr(0, 26) + "</a></td>";
                        t += '<td><a href="' + A.act_url + '" target="_blank" class="orange link" style="display:inline-block;width:78px;">点击疯抢&gt;&gt;</a></td>';
                        t += "</tr></table></li>";
                    } else {
                        if (A.act_type == "赠品") {
                            var o = A.cat_num >= 1 ? " 任选其" + A.cat_num: "";
                            var q = '，<span class="gift-more red" style="cursor:pointer;position:relative;z-index:1;">更多' + o + '<ul style="background:#fff;"><div class="g-tr"></div>';
                            var l = "";
                            if (A.list.length > 1) {
                                for (var p = 0; p < A.list.length; p++) {
                                    var C = A.list[p].gift_name.length > 18 ? A.list[p].gift_name.substring(0, 17) + "...": A.list[p].gift_name;
                                    if (A.list[p].master_num > 1) {
                                        l += '<li class="clearfix"><a class="Left" target="_blank" href="' + A.list[p].gift_url + '" title="' + A.list[p].gift_name + '">' + C + '</a><span class="Right">买' + A.list[p].master_num + "赠" + A.list[p].gift_num + "</span></li>";
                                    } else {
                                        l += '<li class="clearfix"><a class="Left" target="_blank" href="' + A.list[p].gift_url + '" title="' + A.list[p].gift_name + '">' + C + '</a><span class="Right">x' + A.list[p].gift_num + "</span></li>";
                                    }
                                }
                                q += l + "</ul></span>";
                            } else {
                                q = '，<span class="gift-more red">买' + A.list[0].master_num + "赠" + A.list[0].gift_num + "</span>";
                            }
                            var u = A.list[0].gift_name;
                            if (u.length > 18) {
                                u = u.substring(0, 17) + "...";
                            }
                            t += "<li><table><tr>";
                            t += '<td><span class="label">' + A.act_tag + "</span></td>";
                            t += '<td><a title="' + A.list[0].gift_name + '" class="red" target="_blank" href="' + A.list[0].gift_url + '">' + u + "</a>" + q + "</td>";
                            t += "</tr></table></li>";
                            $(document).on("mouseenter", ".gift-more",
                            function() {
                                var m = $(this).find("ul");
                                m.show();
                            });
                            $(document).on("mouseleave", ".gift-more",
                            function() {
                                $(this).find("ul").hide();
                            });
                        } else {
                            if (A.act_tag == "促销") {
                                t += "<li><table><tr>";
                                t += '<td><span class="label">' + A.act_tag + "</span></td>";
                                t += '<td><span class="desc red">' + A.act_desc.substr(0, 26) + "</span></td>";
                                t += '<td><div class="count-down JS_count_down_tag" data-format="<span>$D</span>天<span>$H</span>时<span>$M</span>分<span>$S</span>秒" data-lefttime="' + A.act_time + '">--天--时--分--秒</div></td><td>后结束</td>';
                                t += "</tr></table></li>";
                            } else {
                                if (A.act_tag == "拍卖") {
                                    t += "<li><table><tr>";
                                    t += '<td><span class="label">' + A.act_tag + "</span></td>";
                                    t += '<td><span class="desc red">' + A.act_desc + "</span></td>";
                                    t += '<td><div class="count-down JS_count_down_tag" data-format="<span>$D</span>天<span>$H</span>时<span>$M</span>分<span class=\'orange\'>$S</span>秒" data-lefttime="' + A.act_time + '">--天--时--分<span class="orange">--</span>秒</div></td>';
                                    t += "<td>后开始</td>";
                                    t += '<td><a href="' + A.act_url + '" target="_blank" class="orange link">报名预定&gt;&gt;</a></td>';
                                    t += "</tr></table></li>";
                                } else {
                                    if (A.act_tag == "秒杀价") {
                                        t += "<li><table><tr>";
                                        t += '<td><span class="label">' + A.act_tag + "</span></td>";
                                        t += '<td><span class="desc red">' + A.act_desc + "</span></td>";
                                        t += '<td><div class="count-down JS_count_down_tag" data-format="<span>$D</span>天<span>$H</span>时<span>$M</span>分<span class=\'orange\'>$S</span>秒" data-lefttime="' + A.act_time + '">--天--时--分<span class="orange">--</span>秒</div></td>';
                                        t += "<td>后开始</td>";
                                        t += '<td><a href="' + A.act_url + '" target="_blank" class="orange link">报名预定&gt;&gt;</a></td>';
                                        t += "</tr></table></li>";
                                    } else {
                                        if (A.act_type == "标签") {
                                            t += "<li><table><tr>";
                                            t += '<td><span class="label">' + A.act_tag + "</span></td>";
                                            t += '<td><span class="desc red">' + A.act_desc + "</span></td>";
                                            t += "</tr></table></li>";
                                        } else {
                                            if (A.act_type == "三方红包") {
                                                t += "<li><table><tr>";
                                                t += '<td><span class="label">' + A.act_tag + "</span></td>";
                                                t += '<td><a href="' + A.act_url + '" target="_blank" class="red desc">' + A.act_desc + "</a></td>";
                                                t += '<td><a href="' + A.act_url + '" target="_blank" class="orange link" style="display:inline-block;width:78px;">点击疯抢&gt;&gt;</a></td>';
                                                t += "</tr></table></li>";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                for (var w = 0,
                B = E.subActivity.length; w < B; w++) {
                    if (E.subActivity[w].act_tag == "乐币抵扣") {
                        t += "<li><table><tr>";
                        t += '<td><span class="label">' + E.subActivity[w].act_tag + "</span></td>";
                        t += '<td><span class="desc red">' + E.subActivity[w].act_desc + "</span></td>";
                        t += "</tr></table></li>";
                    }
                }
            }
            $("#JS_goods_activity_container").prepend(x + t);
        };
        var g = function(E) {
            Goods.activityMap = Goods.activityMap || [];
            var y = (E.mainActivity && E.mainActivity.length) || 0,
            A = (E.subActivity && E.subActivity.length) || 0,
            w = "";
            if (y) {
                for (var v = 0; v < y; v++) {
                    var D = E.mainActivity[v];
                    Goods.activityMap.push(D);
                    if (v == 0) {
                        w += '<tr><td class="tit"><span>促销</span></td>';
                        w += "<td" + (y + A <= 1 ? ' colspan="2"': "") + ">";
                    } else {
                        w += '<tr><td></td><td colspan="2">';
                    }
                    w += '<span class="label">' + D.act_tag + "</span>";
                    if (D.act_url) {
                        w += '<a href="' + D.act_url + '" target="_blank" class="link">' + D.act_desc + "</a>";
                        w += '<a href="' + D.act_url + '" class="link" target="_blank">详情&gt;&gt;</a>';
                    } else {
                        w += '<span class="desc">' + D.act_desc + "</span>";
                    }
                    if (D.act_tag == "手机专享" && D.region_name.length > 0) {
                        w += '&nbsp;<a href="javascript:;" class="orange JS_exclusive_tip">[专享区域]</a>';
                        var x = "";
                        var z = Math.ceil(D.region_name.length / 4);
                        x += '<h3 class="head">商品享受手机专享价的配送区域</h3>';
                        x += "<ul>";
                        for (var s = 0; s < z; s++) {
                            x += "<li>";
                            var r = s * 4 + 4;
                            if (r > D.region_name.length) {
                                r = D.region_name.length;
                            }
                            for (var q = s * 4; q < r; q++) {
                                x += "<span>" + unescape(D.region_name[q]) + "</span>";
                            }
                            x += "</li>";
                        }
                        x += "</ul>";
                        d.htmlNew = x;
                    }
                    w += "</td>";
                    if (v == 0 && (y + A) > 1) {
                        w += '<td width="79"><span class="JS_upfold" style="cursor:pointer;">共<span class="red">' + (y + A) + '</span>项促销<i class="arrow-d"></i></span></td>';
                    }
                    w += "</tr>";
                }
            }
            if (A) {
                for (var u = 0; u < A; u++) {
                    var B = E.subActivity[u];
                    Goods.activityMap.push(B);
                    if (Goods.activityMap.length == 1) {
                        w += '<tr><td class="tit"><span>促销</span></td>';
                        w += "<td" + (A <= 1 ? ' colspan="2"': "") + ">";
                    } else {
                        w += '<tr><td></td><td colspan="2">';
                    }
                    if (B.act_type == "优惠券" || B.act_type == "三方红包") {
                        w += '<span class="label">' + B.act_tag + "</span>";
                        w += '<a href="' + B.act_url + '" target="_blank" class="link">' + B.act_desc.substr(0, 18) + "</a>";
                        w += '<a href="' + B.act_url + '" target="_blank" title="' + B.act_desc + '" class="orange">点击疯抢&gt;&gt;</a>';
                    } else {
                        if (B.act_type == "赠品") {
                            var o = B.cat_num >= 1 ? " 任选其" + B.cat_num: "";
                            var q = '&nbsp;<span class="gift-more red" style="cursor:pointer;position:relative;z-index:1;">更多' + o + '<ul style="background:#fff;"><div class="g-tr"></div>';
                            var l = "";
                            if (B.list.length > 1) {
                                for (var p = 0; p < B.list.length; p++) {
                                    var C = B.list[p].gift_name.length > 18 ? B.list[p].gift_name.substring(0, 17) + "...": B.list[p].gift_name;
                                    if (B.list[p].master_num > 1) {
                                        l += '<li class="clearfix"><a class="Left" target="_blank" href="' + B.list[p].gift_url + '" title="' + B.list[p].gift_name + '">' + C + '</a><span class="Right">买' + B.list[p].master_num + "赠" + B.list[p].gift_num + "</span></li>";
                                    } else {
                                        l += '<li class="clearfix"><a class="Left" target="_blank" href="' + B.list[p].gift_url + '" title="' + B.list[p].gift_name + '">' + C + '</a><span class="Right">x' + B.list[p].gift_num + "</span></li>";
                                    }
                                }
                                q += l + "</ul></span>";
                            } else {
                                q = "<span>(数量有限，赠完为止)</span>";
                            }
                            w += '<span class="label">' + B.act_tag + "</span>";
                            w += '<a class="gift-con" target="_blank" href="' + B.list[0].gift_url + '" title="' + B.list[0].gift_name + '"><img src="' + B.img + '" /></a>';
                            w += '<span class="red">&nbsp;×' + B.list[0].gift_num + "</span>";
                            w += q;
                            $(document).on("mouseenter", ".gift-more",
                            function() {
                                var m = $(this).find("ul");
                                m.show();
                            });
                            $(document).on("mouseleave", ".gift-more",
                            function() {
                                $(this).find("ul").hide();
                            });
                        } else {
                            if (B.act_tag == "促销") {
                                w += '<span class="label">' + B.act_tag + "</span>";
                                w += '<span class="red">' + B.act_desc.substr(0, 26) + "&nbsp;&nbsp;</span>";
                                w += '<span class="count-down"><span class="JS_count_down_tag" data-format="<span>$D</span>天<span>$H</span>时<span>$M</span>分<span>$S</span>秒" data-lefttime="' + B.act_time + '">--天--时--分--秒</span>后结束</span>';
                            } else {
                                if (B.act_tag == "拍卖" || B.act_tag == "秒杀价") {
                                    w += '<span class="label">' + B.act_tag + "</span>";
                                    w += '<span class="red">' + B.act_desc.substr(0, 26) + "&nbsp;&nbsp;</span>";
                                    w += '<span class="count-down"><span class="JS_count_down_tag" data-format="<span>$D</span>天<span>$H</span>时<span>$M</span>分<span>$S</span>秒" data-lefttime="' + B.act_time + '">--天--时--分--秒</span>后结束</span>';
                                    w += '<a href="' + B.act_url + '" target="_blank" class="orange">报名预定&gt;&gt;</a>';
                                } else {
                                    if (B.act_type == "标签" || B.act_tag == "乐币抵扣") {
                                        w += '<span class="label">' + B.act_tag + "</span>";
                                        w += '<span class="desc">' + B.act_desc + "</span>";
                                    }
                                }
                            }
                        }
                    }
                    w += "</td>";
                    if (Goods.activityMap.length == 1 && A > 1) {
                        w += '<td width="79"><span class="JS_upfold" style="cursor:pointer;">共<span class="red">' + A + '</span>项促销<i class="arrow-d"></i></span></td>';
                    }
                    w += "</tr>";
                }
            }
            $("#JS_goods_activity_container").prepend(w);
        };
        var i = $.cookie("region_id") ? $.cookie("region_id") : 0;
        $.ajax({
            url: "/mll_api/api/goods_tariff?goods_id=" + b + "&region_id=" + i,
            type: "GET",
            dataType: "json",
            cache: false,
            success: function(l) {
                if (l) {
                    if (l.goods) {
                        c(l.goods);
                        e(l.goods);
                        f(l.goods);
                        j(l.goods);
                    }
                    if ((_DATA.isSelfnonGroup && l.banner_ad2) || (!_DATA.isSelfnonGroup && l.banner_ad)) {
                        Goods.upDateAdByCity(_DATA.isSelfnonGroup ? l.banner_ad2: l.banner_ad);
                    }
                    if (_DATA.isSelfnonGroup) {
                        g(l);
                        Goods.activityMap.length && $("#JS_goods_activity_box").show();
                        if (window._ipad_from) {
                            $("#JS_goods_activity_box").click(function() {
                                $("#JS_goods_activity_box").addClass("act-block-hover");
                            });
                            $("#JS_goods_activity_box .JS_upfold").click(function() {
                                if ($("#JS_goods_activity_box").hasClass("act-block-hover")) {
                                    $("#JS_goods_activity_box").removeClass("act-block-hover");
                                    return false;
                                }
                            });
                        } else {
                            $("#JS_goods_activity_box").hover(function() {
                                $(this).addClass("act-block-hover");
                            },
                            function() {
                                $(this).removeClass("act-block-hover");
                            });
                        }
                    } else {
                        a(l);
                        Goods.activityMap.length && $("#JS_goods_activity_box").show();
                    }
                    _DATA.unixTime = l.now || parseInt(new Date / 1000);
                    tagInit();
                    countDown();
                }
            }
        });
    },
    upDateAdByCity: function(a) {
        var b = $("#JS_goods_ad");
        if (!a.src || !b[0]) {
            return;
        }
        b.attr("href", a.url).attr("title", a.desc).html('<img src="' + $.__IMG + "/" + a.src + '" width="100%" />').show();
    },
    createTipBox: function(c, g, i) {
        var b = $("#JS_show_tip_box");
        if (b.length == 0) {
            b = $('<div class="gdTipLayer" id="JS_show_tip_box"></div>');
            b.appendTo($("body"));
        }
        var a = "";
        if (g == "up") {
            a = '<div class="arrow"><i class="' + g + '" style="margin-top:1px;"></i></div><div class="in"><div class="content">' + c + "</div></div>";
        } else {
            if (g == "down") {
                a = '<div class="in"><div class="content">' + c + '</div></div><div class="arrow"><i class="' + g + '" style="margin-top:-1px;"></i></div>';
            }
        }
        b.html(a);
        var f = i.top + 16;
        var e = window.LOAD ? i.left - 20 : i.left - 200;
        if (g == "down") {
            var d = b.height();
            f = i.top - d;
        }
        b.css({
            top: f,
            left: e,
            display: "block"
        });
        b.hover(function() {
            $(this).show();
        },
        function() {
            $(this).hide();
        });
    },
    selectProvince: function(d, b) {
        this.setGoodsInfoDom();
        var a = this.headProvince.find(".text").eq(0);
        if (a.length && this.listProvince.length) {
            a.html(b);
            _DATA.provinceId = d;
            _DATA.provinceName = b;
            this.areaHead.find("li").addClass("none").eq(0).removeClass("none");
            if (_DATA.getExprList) {
                if (d == 2) {
                    this.selectCity(35, "北京");
                    return;
                } else {
                    if (d == 10) {
                        this.selectCity(110, "上海");
                        return;
                    } else {
                        if (d == 3) {
                            this.selectCity(36, "天津");
                            return;
                        } else {
                            if (d == 23) {
                                this.selectCity(271, "重庆");
                                return;
                            }
                        }
                    }
                }
            }
            if (!_DATA.cityList[d]) {
                var c = this;
                _DATA.getAreaAjax && _DATA.getAreaAjax.abort();
                _DATA.getAreaAjax = $.ajax({
                    url: "/cache_two/region-" + d + "/",
                    dataType: "json",
                    cache: false,
                    success: function(e) {
                        if (e && e.error == 0 && e.region_list && e.region_list.length) {
                            _DATA.cityList[d] = e.region_list;
                            c.fillCity(d);
                        }
                    }
                });
            } else {
                this.fillCity(d);
            }
        }
        a = null;
        return;
    },
    fillCity: function(j) {
        var d = _DATA.cityList[j];
        if (!this.listCity.length) {
            return;
        }
        var g = this,
        e = "",
        b = false;
        this.listCity.empty();
        for (var c = 0,
        a = d.length; c < a; c++) {
            var f = (d[c].is_long_str == 1) ? 'class="long"': "";
            e += "<li " + f + '><a data-region_id="' + d[c].region_id + '">' + jQuery.trim(d[c].region_name) + "</a></li>";
            if (!_DATA.getExprList && d[c].region_id == _DATA.selectCityId) {
                g.selectCity(_DATA.selectCityId, jQuery.trim(d[c].region_name));
                b = true;
            }
        }
        this.areaHead.find("li").removeClass("cur").eq(1).addClass("cur");
        this.areaList.find("ul").addClass("none");
        this.listCity.html(e).removeClass("none");
        if (!b && _DATA.getExprList) {
            this.headCity.find(".text").text("请选择").parent().removeClass("none");
        } else {
            g.selectCity(_DATA.selectCityId, _DATA.selectCityName);
            this.headCity.removeClass("none");
        }
    },
    selectCity: function(c, a) {
        _DATA.selectCityId = c;
        _DATA.selectCityName = a = a || "";
        this.headCity.find(".text").html(a.substr(0, 5));
        if (!_DATA.districtList[c]) {
            var b = this;
            _DATA.getAreaAjax && _DATA.getAreaAjax.abort();
            _DATA.getAreaAjax = $.ajax({
                url: "/cache_two/region-" + c + "/",
                dataType: "json",
                cache: false,
                success: function(d) {
                    if (d && d.error == 0 && d.region_list) {
                        if (d.region_list.length) {
                            _DATA.districtList[c] = d.region_list;
                            b.fillDistrict(c);
                            b.headDistrict.removeClass("none");
                        } else {
                            b.headDistrict.addClass("none");
                            b.selectDistrict(0, "");
                        }
                    }
                }
            });
        } else {
            this.fillDistrict(c);
        }
        return;
    },
    fillDistrict: function(g) {
        var d = _DATA.districtList[g];
        if (!this.listDistrict.length) {
            return;
        }
        this.listDistrict.empty();
        var e = "",
        b = 0;
        for (var c = 0,
        a = d.length; c < a; c++) {
            var f = (d[c].is_long_str == 1) ? 'class="long"': "";
            e += "<li " + f + '><a href="javascript:;" data-region_id="' + d[c].region_id + '">' + jQuery.trim(d[c].region_name) + "</a></li>";
            if (d[c].region_id == _DATA.districtId) {
                b = c;
            }
        }
        this.areaList.find("ul").addClass("none");
        this.areaHead.find("li").removeClass("cur").eq(2).addClass("cur");
        this.listDistrict.html(e).removeClass("none");
        if (_DATA.getExprList) {
            this.headDistrict.find(".text").text("请选择").parent().removeClass("none");
        } else {
            this.selectDistrict(d[b].region_id, d[b].region_name);
            this.headDistrict.removeClass("none");
        }
    },
    selectDistrict: function(c, a) {
        c = c || 0;
        a = a || "";
        _DATA.districtId = c;
        _DATA.districtName = a;
        a && this.headDistrict.find(".text").html(a.substr(0, 5));
        if (!_DATA.customDistrictList[c]) {
            if (c > 0) {
                var b = this;
                _DATA.getAreaAjax && _DATA.getAreaAjax.abort();
                $.ajax({
                    url: "/region/?act=get_selfedit_info&district_id=" + c,
                    dataType: "json",
                    cache: false,
                    success: function(d) {
                        if (d && d.diy) {
                            if (d.diy.length > 0) {
                                _DATA.customDistrictList[c] = d.diy;
                                b.fillCustomDistrict(c);
                                if (!_DATA.getExprList) {
                                    var e = d.diy[0];
                                    b.selectCustomDistrict(e.region_id, e.region_name);
                                }
                                b.headCustomDistrict.removeClass("none");
                                return true;
                            }
                        }
                        b.headCustomDistrict.addClass("none");
                        b.selectCustomDistrict(0, "");
                    }
                });
            } else {
                this.headCustomDistrict.addClass("none");
                this.selectCustomDistrict(0, "");
            }
        } else {
            this.fillCustomDistrict(c);
        }
    },
    fillCustomDistrict: function(g) {
        var d = _DATA.customDistrictList[g];
        if (!this.listCustomDistrict.length) {
            return;
        }
        var e = "",
        b = 0;
        this.listCustomDistrict.empty();
        for (var c = 0,
        a = d.length; c < a; c++) {
            var f = (d[c].is_long_str == 1) ? 'class="long"': "";
            e += "<li " + f + '><a data-region_id="' + d[c].region_id + '">' + jQuery.trim(d[c].region_name) + "</a></li>";
            if (!_DATA.getExprList && d[c].region_id == _DATA.customDistrictId) {
                b = c;
            }
        }
        this.areaHead.find("li").removeClass("cur").eq(3).addClass("cur");
        this.areaList.find("ul").addClass("none");
        this.listCustomDistrict.html(e).removeClass("none");
        if (_DATA.getExprList) {
            this.headCustomDistrict.removeClass("none");
            this.headCustomDistrict.find(".text").text("请选择");
        } else {
            this.selectCustomDistrict(d[b].region_id, d[b].region_name);
            this.headCustomDistrict.removeClass("none");
        }
    },
    selectCustomDistrict: function(b, a) {
        _DATA.customDistrictName = a || "";
        _DATA.customDistrictId = b || 0;
        saveLocalData([_DATA.provinceId, _DATA.selectCityId, _DATA.districtId, b]);
        a && this.headCustomDistrict.find(".text").html(a);
        this.calculateAfterSelectedArea();
    },
    calculateAfterSelectedArea: function() {
        this.hideAddressBox();
        this.exprRelativeGoodsChange();
        var a = "";
        a = (_DATA.provinceName == _DATA.selectCityName ? _DATA.provinceName: (_DATA.provinceName + _DATA.selectCityName)) + _DATA.districtName + (_DATA.customDistrictName || "");
        this.regionText.html(a);
        this.getGoodsTransfee();
    },
    hideAddressBox: function() {
        this.goodsPanelRoot.find(".JS_area_select_list").hide();
    },
    exprRelativeGoodsChange: function() {
        var a = _DATA.selectCityId || $.cookie("region_id");
        if (!a) {
            return;
        }
        if (!_DATA.getExprList) {
            _DATA.getExprList = true;
        }
        this.getExprRelativeGoods();
    },
    getExprRelativeGoods: function() {
        var b = this,
        d = _DATA.selectCityId || $.cookie("region_id") || 0,
        c = "&goods_id=" + _DATA.goods_id + "&city_id=" + d + "&district_id=" + _DATA.districtId + "&province_id=" + _DATA.provinceId;
        if (!_DATA.getExprList) {
            c += "&only_once=1";
            _DATA.getExprList = true;
        }
        b.couldSend = false;
        var a = $("#JS_show_trans_fee");
        a.hide();
        $.ajax({
            url: "/ajax_goods/?act=expr_relative_goods_list" + c + "&expr_city_id=" + $.cookie("region_id"),
            cache: true,
            dataType: "json",
            success: function(e) {
                if (e) {
                    if (e.if_could_send == 0 || !e.if_could_send) {
                        $("#JS_panel_btn_box").addClass("forbidden");
                        $("#JS_float_chat_box").css("display", "none");
                        $("#JS_float_nav_buy_direct").css("display", "none");
                        b.getGoodsStockInfo("no_goods");
                    } else {
                        b.couldSend = true;
                        b.isSupportInstall == 1 && $("#JS_panel_btn_box").removeClass("forbidden");
                        $("#JS_float_chat_box").show();
                        $("#JS_float_nav_buy_direct").show();
                        if (b.transfeeIsReady) {
                            a.show();
                        }
                        b.checkProvinceStock();
                    }
                    b.isCouldTrans = e.if_could_send;
                }
            },
            error: function() {}
        });
    },
    checkProvinceStock: function(b) {
        b = b || _DATA.selectCityId;
        if (!b) {
            return;
        }
        if (b && _DATA.shop_id > 1) {
            this.getGoodsStockInfo(1);
            return;
        }
        var a = this.stock_info;
        if (a && a.g) {
            if (this.id != a.g) {
                return;
            }
            if (inArray(a.nc, b)) {
                this.getGoodsStockInfo(1);
            } else {
                if (inArray(a.dc, b)) {
                    this.getGoodsStockInfo(2);
                } else {
                    this.getGoodsStockInfo(3);
                }
            }
        } else {
            if (a == "no data") {
                this.getGoodsStockInfo(3);
            } else {
                this.getGoodsStockInfo(0);
            }
        }
    },
    getGoodsTransfee: function() {
        var d = this;
        var c = "goods_id=" + _DATA.goods_id + "&goods_number=" + _DATA.number + "&shop_id=" + (_DATA.shop_id || 1) + "&city_id=" + (_DATA.selectCityId || 0) + "&district_id=" + (_DATA.districtId || 0) + "&province_id=" + (_DATA.provinceId || 0) + "&custom_district=" + (_DATA.customDistrictId || 0);
        _DATA.transType = {};
        var a = function(f) {
            if (f && f.error == 0) {
                var e = [],
                g;
                feeHtml1 = "&yen;$M，购满$N元自营商品即可免运费",
                feeHtml2 = "<del>&yen;$M</del>，商品金额已满$N元，免运费",
                size = f.transfee.length;
                if (f.is_free == 1) {
                    $("#JS_goods_trans_type .JS_show_tip").html("免运费");
                } else {
                    $("#JS_goods_trans_type .JS_show_tip").html("查看运费");
                }
                $.each(f.transfee,
                function(j, l) {
                    name = l.name.replace(/(&nbsp;|&emsp;)/g, "");
                    _DATA.transType[name] = {
                        name: l.name,
                        fee: l.fee
                    };
                });
                if (size > 1) {
                    $.each(f.transfee,
                    function(j, l) {
                        g = (_DATA.isSelfnonGroup && l.input_arrive && l.input_arrive - 0 > 0) ? (l.is_free && l.fee - 0 > 0 ? feeHtml2: (!l.is_fee && l.fee - 0 > 0 ? feeHtml1: "&yen;$M")) : "&yen;$M";
                        if (l.name == "物&emsp;流") {
                            e.push('<p class="feeP feeP1"><a href="/article_cat-23/article-618.html" target="_blank">物流点自提费：' + g.replace("$M", (l.fee - 0).toFixed(2)).replace("$N", l.input_arrive) + "</a></p>");
                        } else {
                            if (l.name == "体验馆服务") {
                                if (l.fee == "暂未纳入体验馆服务范围") {
                                    e.push('<p class="feeP feeP2"><span>或</span><a href="/article_cat-23/article-3206.html" target="_blank">' + l.fee + '</a> <a href="/article_cat-23/article-3206.html" target="_blank" class="q"></a></p>');
                                } else {
                                    g = (_DATA.isSelfnonGroup && l.is_free == "1" && l.fee - 0 > 0) ? (l.activity_transfee - 0 > 0 ? ("&yen;" + (l.activity_transfee - 0).toFixed(2)) : ("<del>&yen;" + l.fee + "</del>，商品金额已满" + l.input_arrive + "元，免体验馆服务费")) : ("&yen;" + l.fee);
                                    e.push('<p class="feeP feeP2"><span>或</span><a href="/article_cat-23/article-3206.html" target="_blank">体验馆服务费：' + g + '</a> <a href="/article_cat-23/article-3206.html" target="_blank" class="q"></a></p>');
                                }
                            } else {
                                if (l.name == "第三方配送") {
                                    e.push('<p class="feeP feeP2"><a href="/article_cat-23/article-618.html" target="_blank">' + l.name + "：&yen;" + (l.fee - 0).toFixed(2) + "</a></p>");
                                } else {
                                    e.push('<p class="feeP feeP1"><a href="/article_cat-23/article-618.html" target="_blank">' + l.name + "：" + g.replace("$M", (l.fee - 0).toFixed(2)).replace("$N", l.input_arrive) + "</a></p>");
                                }
                            }
                        }
                    });
                } else {
                    $.each(f.transfee,
                    function(j, l) {
                        g = (_DATA.isSelfnonGroup && l.input_arrive && l.input_arrive - 0 > 0) ? (l.is_free && l.fee - 0 > 0 ? feeHtml2: (!l.is_fee && l.fee - 0 > 0 ? feeHtml1: "&yen;$M")) : "&yen;$M";
                        if (l.name == "物&emsp;流") {
                            e.push('<p class="feeP feeP2"><a href="/article_cat-23/article-618.html" target="_blank">物流点自提费：' + g.replace("$M", (l.fee - 0).toFixed(2)).replace("$N", l.input_arrive) + "</a></p>");
                        } else {
                            if (l.name == "体验馆服务") {
                                if (l.fee == "暂未纳入体验馆服务范围") {
                                    e.push('<p class="feeP feeP2"><a href="/article_cat-23/article-618.html" target="_blank">' + l.fee + "</a></p>");
                                } else {
                                    g = (_DATA.isSelfnonGroup && l.is_free == "1" && l.fee - 0 > 0) ? (l.activity_transfee - 0 > 0 ? ("&yen;" + (l.activity_transfee - 0).toFixed(2)) : ("<del>&yen;" + l.fee + "</del>，商品金额已满" + l.input_arrive + "元，免体验馆服务费")) : ("&yen;" + l.fee);
                                    e.push('<p class="feeP feeP2"><a href="/article_cat-23/article-618.html" target="_blank">体验馆服务费：' + g + "</a></p>");
                                }
                            } else {
                                e.push('<p class="feeP feeP2"><a href="/article_cat-23/article-618.html" target="_blank">' + l.name + "：" + g.replace("$M", (l.fee - 0).toFixed(2)).replace("$N", l.input_arrive) + "</a></p>");
                            }
                        }
                    });
                }
                if (f.freeserve && is_show_banner_ad == 1) {
                    e.push('<p class="feeP feeP4">满' + f.freeserve.amount_more_than + "元免体验馆服务费</p>");
                }
                if (e != "" && (_DATA.shop_id == 1 || _DATA.delivery_type == "1")) {
                    if (_DATA.trans_act == "免运费") {
                        e.push('<p class="feeP feeP3">选择了‘物流’运输的商品由美乐乐按最高180元/立方、0.2元/公斤补贴运费，具体可咨询在线客服。 <a href="/article_cat-23/article-618.html" target="_blank" class="orange">立即咨询&gt;&gt;</a><br />选择了‘快递’配送的商品，西藏、澳门、台湾、香港、新疆、宁夏、青海、甘肃、内蒙古地区需要每公斤补加6元运费。 <a href="/article_cat-23/article-618.html" target="_blank" class="orange">立即咨询&gt;&gt;</a></p>');
                    } else {
                        e.push('<p class="feeP feeP3">请咨询 400-0098666 或 <a href="/article_cat-23/article-618.html" target="_blank" class="orange">查看详情&gt;&gt;</a></p>');
                    }
                }
                _DATA.transFeeReturnHtml = e.join("");
                if (size > 0) {
                    d.transfeeIsReady = true;
                    if (d.couldSend) {
                        b.show();
                    }
                }
                if (f.isSupportInstall == 1) {
                    $("#JS_goods_extend_serice").show();
                    _DATA.goods_attribute == 6 && $("#JS_install_check").prop("checked", true);
                    d.isCouldTrans == 1 && $("#JS_panel_btn_box").removeClass("forbidden");
                } else {
                    if (_DATA.goods_attribute == 6) {
                        $("#JS_panel_btn_box").addClass("forbidden");
                    } else {
                        d.isCouldTrans == 1 && $("#JS_panel_btn_box").removeClass("forbidden");
                        $("#JS_install_check").prop("checked", false);
                    }
                }
                if (f.install > 0) {
                    $("#JS_install_fee").html((f.install - 0).toFixed(2));
                }
                _DATA.isSupportInstall = f.isSupportInstall;
            }
        };
        d.transfeeIsReady = false;
        var b = $("#JS_show_trans_fee");
        b.hide();
        $.ajax({
            url: "/mll_api/api/goods_transfee",
            cache: false,
            data: c,
            dataType: "json",
            success: a
        });
    },
    setNumber: function(b) {
        b = this.formatNumber(b, this.dataMax);
        if (b == _DATA.number) {
            return false;
        }
        _DATA.number = b;
        var a = $("#JS_goods_number");
        a.val(b);
        a = null;
        this.getGoodsTransfee();
    },
    formatNumber: function(d, a) {
        var c = parseInt((d || 1)),
        e = parseInt($("#JS_goods_number").attr("data-max-buy")),
        g = e == 0 ? 1 : (e || 9999),
        a = a || 9999,
        f = Math.min(a, g),
        b = this;
        if (!c || c < 1) {
            c = 1;
        }
        if ($("#JS_goods_number").attr("data-max-buy") && c > g) {
            if (e == 0) {
                $("#JS_goods_max_tips").text("该区域不支持购买！").show();
                $("JS_float_nav_buy_direct").hide();
            } else {
                $("JS_float_nav_buy_direct").show();
                b.timeOBj && clearTimeout(b.timeObj);
                $("#JS_goods_max_tips").text("限购商品，您最多购买" + $("#JS_goods_number").attr("data-max-buy") + $("#JS_goods_number").attr("data-max-unit") + "！").show();
                b.timeObj = setTimeout(function() {
                    $("#JS_goods_max_tips").hide();
                },
                5000);
            }
        } else {
            $("#JS_goods_max_tips").hide();
        }
        if (c > f) {
            c = f;
        }
        if (c <= g && $("#JS_goods_number").attr("data-max-buy") != 0) {
            $("#JS_goods_panel_add").removeClass("goods-max");
        }
        return c;
    },
    getGoodsStockInfo: function(b) {
        var c = this,
        e = _DATA.selectCityId || $.cookie("region_id") || 0,
        d = "goods_id=" + _DATA.goods_id + "&city_id=" + e + "&district_id=" + _DATA.districtId + "&province_id=" + _DATA.provinceId;
        if (b == "no_goods") {
            a({
                Show_type: "该地区暂不支持配送",
                Show_content: "该地区暂不支持配送"
            });
        } else {
            $.ajax({
                url: "/mll_api/api/goods_stock",
                cache: false,
                data: d,
                dataType: "json",
                success: a
            });
        }
        function a(r) {
            var o = r && r.Show_type,
            n = $("#JS_goods_trans_type"),
            g = $("#JS_goods_no_peisong_text"),
            l = $("#JS_goods_attr_label_1"),
            j = $("#JS_goods_attr_label_2"),
            i = $("#JS_goods_extend_attr"),
            f = $("#JS_goods_limit_day"),
            p = $("#JS_goods_extend_attr_3 .JS_goods_extent_txt"),
            q = $("#JS_goods_stock_notice");
            goodsMaxBuy = $("#JS_goods_max_tips");
            addCar = $("#JS_panel_btn_box .JS_addToCart");
            goodsNumber = $("#JS_goods_number");
            g.hide();
            l.hide();
            j.hide();
            i.hide();
            f.hide();
            p.hide();
            q.html("").hide();
            if (r.limt_num == 0) {
                jQuery("#JS_float_nav_buy_direct").hide();
            }
            if (o == "现货") {
                if (r.Show_content) {
                    if (parseInt(r.limit_sale) >= 1 || is_Quota_good == 1) {
                        q.html("限购商品").show();
                    } else {
                        q.html(r.Show_content).show();
                    }
                } else {
                    if (parseInt(r.limit_sale) >= 1 || is_Quota_good == 1) {
                        q.html("限购商品").show();
                    } else {
                        q.html("").hide();
                    }
                }
            } else {
                if (parseInt(r.limit_sale) >= 1 || is_Quota_good == 1) {
                    q.html("限购商品").show();
                } else {
                    q.html("").hide();
                }
            }
            if (o == "该地区暂不支持配送") {
                n.hide();
                if (is_can_buy_no != 1) {
                    g.html(r.Show_content).show();
                }
                l.hide();
                j.html("").hide();
                $("#JS_float_chat_box").hide();
                $("#JS_panel_btn_box").addClass("forbidden");
                $("#JS_float_nav_buy_direct").hide();
            } else {
                n.show();
                g.hide();
                addCar.removeClass("direct-goods-max");
                $("#JS_goods_panel_add_direct").removeClass("direct-goods-max");
                if (r && r.Show_days_type && (r.Show_days_type).indexOf("限时达") != -1) {
                    f.find("span").html(r.Show_days_type);
                    f.show();
                    f.hover(function() {
                        $(this).addClass("hover");
                    },
                    function() {
                        $(this).removeClass("hover");
                    });
                    if (o) {
                        i.html(o).show();
                    }
                    l.show();
                } else {
                    f.hide();
                    if (r.Show_days_type && !_DATA.isSelfnonGroup) {
                        j.html((o ? ('<span class="label">' + o + "</span> ") : "") + '<span class="desc">' + r.Show_days_type + "</span>").show();
                    } else {
                        if (o) {
                            i.html(o).show();
                        }
                        l.show();
                        if (r.Show_days_type) {
                            p.html("，" + r.Show_days_type).show();
                        }
                    }
                }
            }
            if (is_can_buy_no != 1 && o != "该地区暂不支持配送") {
                if (r.limt_num) {
                    var m = r.limt_num - 0;
                    c.timeOBj && clearTimeout(c.timeObj);
                    if (m == 0) {
                        goodsMaxBuy.text("该区域不支持购买！").show();
                        addCar.addClass("goods-max");
                        if (window._DATA.can_direct_buy == 1) {
                            addCar.addClass("direct-goods-max");
                            $("#JS_goods_panel_add_direct").addClass("direct-goods-max");
                            $("#JS_float_nav_buy_direct").hide;
                        }
                        $("#JS_float_chat_box").hide();
                        $("#JS_float_nav_buy_direct").hide;
                        if (r.Show_content.indexOf("库存数") != -1) {
                            q.hide();
                        }
                    } else {
                        addCar.removeClass("direct-goods-max");
                        $("#JS_goods_panel_add_direct").removeClass("direct-goods-max");
                        goodsMaxBuy.text("").hide();
                        if (($("#JS_goods_number").val() - 0) > m) {
                            goodsMaxBuy.text("限购商品，您最多购买" + m + r.unit + "！").show();
                            c.timeObj = setTimeout(function() {
                                goodsMaxBuy.hide();
                            },
                            5000);
                        }
                        addCar.removeClass("goods-max");
                        $("#JS_goods_panel_add_direct").removeClass("direct-goods-max");
                        $("#JS_float_nav_buy_direct").show();
                        $("#JS_float_chat_box").show();
                    }
                    goodsNumber.attr("data-max-buy", m);
                    goodsNumber.attr("data-max-unit", r.unit);
                    if (goodsNumber.val() - 0 > m) {
                        goodsNumber.val(m == 0 ? 1 : m);
                        _DATA.number = (m == 0 ? 1 : m);
                    } else {}
                } else {
                    goodsMaxBuy.hide();
                    goodsNumber.removeAttr("data-max-buy");
                    addCar.removeClass("goods-max");
                    goodsMaxBuy.text("").hide();
                    if (goodsNumber.val(1)) {
                        _DATA.number = 1;
                    }
                }
            } else {
                addCar.removeClass("direct-goods-max");
                $("#JS_goods_panel_add_direct").removeClass("direct-goods-max");
                goodsMaxBuy.text("").hide();
            }
        }
    },
    buy: function(a, c) {
        if ($("#JS_goods_number").attr("data-max-buy") == 0) {
            $.alert("该地区不支持购买！");
            return false;
        }
        if ($("#JS_panel_btn_box").hasClass("forbiddenVirtual")) {
            $.alert("该商品暂不支持购买！");
            return false;
        }
        if ($("#JS_panel_btn_box").hasClass("forbidden")) {
            return false;
        }
        if ($("#JS_panel_btn_box").attr("is-can-buy") && $("#JS_panel_btn_box").hasClass("unselect-forbidden")) {
            $.alert("请选择商品样式！");
            return false;
        }
        if (_DATA.isGroupBuy && _DATA.isGroupBuy != "0") {
            location.href = "/tuangou/info-" + _DATA.goods_id + ".html";
        } else {
            if (_DATA.isDingZhi && _DATA.isDingZhi != "0") {
                location.href = "/custom-made/pre_checkout-" + _DATA.goods_id + "-" + _DATA.number + ".html";
            } else {
                if (window._DATA.can_direct_buy == 1 && this.direct == 1) {
                    this.oneBuy(a);
                } else {
                    var b = {};
                    b[_DATA.goods_id] = {
                        number: _DATA.number,
                        show_price: _DATA.show_price,
                        is_install: $("#JS_install_check").prop("checked")
                    };
                    if (_DATA.isSelfnonGroup) {
                        this.addToCart(_DATA.goods_id, b, {
                            is_logistics: _DATA.isLogistics || ""
                        },
                        "unset", a);
                    } else {
                        $.addToCart(_DATA.goods_id, b, null, {
                            is_logistics: _DATA.isLogistics || ""
                        },
                        null, c);
                    }
                }
            }
        }
    },
    addToCart: function(a, c, d, q, g) {
        if (!$("#JS_cart3").length) {
            $.addToCart(a, c, null, d, null, q);
            return;
        }
        var l = false,
        m = this,
        p = function() {
            var s = $(g).offset();
            var v = '<div id="JS_up_image" style="display:block;width:40px;height:40px;opacity:1;overflow:hidden;background:#333;border-radius:50%;position:absolute;top:' + s.top + "px;left:" + (s.left + 140) + 'px;opacity:1;"><img src="' + $("#JS_goods_album_stage li img").get(0).src + '" width="100%" height="100%" border-radius="50%" /></div>';
            $("body").append(v);
            var r = document.getElementById("JS_up_image");
            m.animateCompleted = false;
            var u = funParabola(r, document.getElementById("JS_cart3"), {
                complete: function() {
                    if (r.remove) {
                        r.remove();
                    } else {
                        r.removeNode();
                    }
                    m.animateCompleted = true;
                }
            }).mark();
            u.init();
        },
        b = function() {
            if (m.cartPanelShow) {
                $("#JS_back_to_top_tip_cart").animate({
                    width: 0,
                    opacity: 0
                },
                300,
                function() {
                    $("#JS_back_to_top_tip_cart").html("");
                });
                m.cartPanelShow = false;
            }
            return true;
        },
        n = function(r) {
            $.ajax({
                url: "/NewFrameEntrance?r=CartActHint/GetCartActHint",
                type: "GET",
                dataType: "json",
                success: function(v) {
                    if (v && v.error == 0 && v.data) {
                        var x = v.data,
                        u = "",
                        s = 100,
                        y = x.is_cart_overlay_show == "1" && (x.h_goods_total - 0 > 0),
                        z = y ? "560px": "317px";
                        $tipCart = $("#JS_back_to_top_tip_cart");
                        u += '<i class="arrow-r-out"></i><i class="arrow-r-in"></i>								<div class="in' + (y ? "": " min-in") + '"><div class="close"></div>									<div class="succ-txt' + (!y ? " succ-txt-nob": "") + ' clearfix">										<i class="icon-succ"></i>										<dl><dt>成功加入购物车</dt>';
                        if (y) {
                            u += '<dd>												<span class="label">满额送</span>												<span>活动商品已购满' + x.h_goods_total + "元" + (x.h_discount_could - 0 > 0 ? ",送" + x.h_discount_could + "元！": "") + "</span>";
                            if (x.h_add_price != 0) {
                                u += '&nbsp;<a href="' + x.link_url + '" target="_blank" class="red">再购' + x.h_add_price + "元," + (x.h_discount_could - 0 > 0 ? "共可": "") + "送" + x.h_discount_nextlevel + "元</a>";
                            }
                        }
                        u += "</dd>";
                        if (r) {
                            for (var w = 0; w < r.length; w++) {
                                u += "<dd " + (y ? 'style="text-indent:48px;"': "") + ">" + r[w] + "</dd>";
                            }
                        }
                        u += "</dl></div>";
                        if (y) {
                            u += '<table><tr><td width="60">';
                            if (x.h_discount_could - 0 > 0) {
                                u += "<span>满" + x.h_goods_total_curentlevel + '</span><br/>													<span class="strong">送' + x.h_discount_could + "</span>";
                            }
                            u += '</td>											<td class="proc-middle">												<div class="proc-bar">													<span class="label">已购：<span class="strong">&yen;' + x.h_goods_total + '</span></span>													<i class="arrow-d-out"></i>													<i class="arrow-d-in"></i>													<div class="proc-bar-bg"></div>													<div class="proc-bar-light"></div>												</div>											</td>';
                            if (x.h_goods_total_nextlevel != 0) {
                                u += '<td width="60">													<span class="orange">满' + x.h_goods_total_nextlevel + '</span><br/>													<span class="orange strong">送' + x.h_discount_nextlevel + "</span>												</td>";
                                s = parseInt(x.h_goods_total / x.h_goods_total_nextlevel * 100);
                            }
                            u += "</tr></table>";
                        }
                        u += "</div>";
                        $tipCart.html(u);
                        $tipCart.find(".proc-middle .proc-bar-light").css("width", s + "%");
                        if (m.animateCompleted) {
                            $tipCart.animate({
                                width: z,
                                opacity: 1
                            },
                            400);
                            m.cartPanelShow = true;
                            if (m.bindCartActinfoEventFlag) {
                                return;
                            }
                            setTimeout(function() {
                                m.bindCartActinfoEventFlag = true;
                                $("#JS_back_to_top_tip_cart").on("click", ".close", b);
                                $(document.body).on("click", b);
                                $(window).on("scroll", b);
                            },
                            1000);
                        } else {
                            if (n.timer) {
                                clearInterval(n.timer);
                            }
                            n.timer = setInterval(function() {
                                if (m.animateCompleted) {
                                    clearInterval(n.timer);
                                    $tipCart.animate({
                                        width: z,
                                        opacity: 1
                                    },
                                    400);
                                    m.cartPanelShow = true;
                                    if (m.bindCartActinfoEventFlag) {
                                        return;
                                    }
                                    setTimeout(function() {
                                        m.bindCartActinfoEventFlag = true;
                                        $("#JS_back_to_top_tip_cart").on("click", ".close", b);
                                        $(document.body).on("click", b);
                                        $(window).on("scroll", b);
                                    },
                                    1000);
                                }
                            },
                            1000);
                        }
                    }
                }
            });
        },
        o = function(r) {
            if (r && r.length) {
                $.alert("<p>" + r.join("<p></p>") + "</p>");
            }
        };
        if (c) {
            var f = [];
            for (var e in c) {
                var j = c[e];
                if ($.isNumeric(j)) {
                    f.push(e + ":" + j);
                } else {
                    var i = [];
                    i.push(e);
                    i.push(j.number || 1);
                    i.push(j.show_price ? j.show_price: "");
                    i.push(j.act_id ? j.act_id: "");
                    i.push(j.is_install ? 1 : 0);
                    f.push(i.join(":"));
                }
            }
            f = f.join("|");
        } else {
            $.alert("无效商品!");
            return false;
        }
        window._ana && window._ana.push(["trackEvent", "addToCart", f, q || "unset"]);
        window._gaq && window._gaq.push(["_trackEvent", "addToCart", f, q || "unset"]);
        $.ajax({
            url: "/ajax_flow/?step=add_to_cart_new&nolist=1&goods_id=" + a + "&goods=" + f,
            type: "GET",
            data: d,
            cache: false,
            dataType: "json",
            success: function(C) {
                if (C && C.error == 0) {
                    var z = [],
                    u = true;
                    if (C.cannotBuyInfo && C.cannotBuyInfo.detail && C.cannotBuyInfo.detail.length != 0) {
                        if (C.cannotBuyInfo.isPart == 1) {
                            var A = C.cannotBuyInfo.detail,
                            w = [],
                            v = [],
                            x = [];
                            for (var y = 0,
                            B = A.length; y < B; y++) {
                                if (A[y]["reason"] == 1) {
                                    w.push(1);
                                } else {
                                    if (A[y]["reason"] == 0) {
                                        x.push(0);
                                    } else {
                                        if (A[y]["reason"] == 3) {
                                            v.push(3);
                                        }
                                    }
                                }
                            }
                            if (w.length) {
                                u = false;
                                z.push("您购买的以下商品库存不足:");
                                for (var y = 0,
                                B = A.length; y < B; y++) {
                                    if (A[y]["reason"] == 1) {
                                        z.push(A[y]["goodsName"] + "&nbsp;" + A[y]["goodsSn"] + '&nbsp;库存数量<span class="red">' + A[y]["limitNum"] + "</span>件");
                                    } else {
                                        if (A[y]["reason"] == 3 || A[y]["reason"] == 0) {
                                            z.push(A[y]["goodsName"] + "&nbsp;" + A[y]["goodsSn"]);
                                        }
                                    }
                                }
                            } else {
                                if (x.length || v.length) {
                                    u = false;
                                    z.push("添加购物车失败");
                                    if (C.cannotBuyInfo.buyType == 0) {
                                        z.push("您选购的商品已下架或者停售");
                                        h += "您选购的商品已下架或者停售";
                                    } else {
                                        if (C.cannotBuyInfo.buyType == 1) {
                                            z.push("本款商品当前已售罄，感谢您的支持，请选择其他商品");
                                        }
                                    }
                                }
                            }
                        } else {
                            if (C.cannotBuyInfo.isPart == 0 && C.cannotBuyInfo.buyType == 1) {
                                z.push('本款商品为限购商品，当前剩余<span class="yen  bold red">' + C.cannotBuyInfo.detail[0]["limitNum"] + "</span>件");
                            } else {
                                if (C.cannotBuyInfo.isPart == 2) {
                                    var A = C.cannotBuyInfo.detail,
                                    x = [],
                                    w = [],
                                    v = [];
                                    for (var y = 0,
                                    B = A.length; y < B; y++) {
                                        if (A[y]["reason"] == 1) {
                                            w.push(1);
                                        } else {
                                            if (A[y]["reason"] == 0) {
                                                x.push(0);
                                            } else {
                                                if (A[y]["reason"] == 3) {
                                                    v.push(3);
                                                }
                                            }
                                        }
                                    }
                                    if (x.length || v.length) {
                                        u = false;
                                        z.push("您选择的商品中有已下架或停售商品，下架或停售商品不会被提交结算");
                                        z.push("以下为下架或停售商品：");
                                        for (var r = 0,
                                        s = C.cannotBuyInfo.detail.length; r < s; r++) {
                                            if (C.cannotBuyInfo.detail[r]["reason"] == 0 || C.cannotBuyInfo.detail[r]["reason"] == 3) {
                                                z.push(C.cannotBuyInfo.detail[r]["goodsName"] + "&emsp;" + C.cannotBuyInfo.detail[r]["goodsSn"]);
                                            }
                                        }
                                    } else {
                                        if (w.length || (v.length && w.length) || (x.length && w.length) || (x.length && w.length && v.length)) {
                                            u = false;
                                            z.push("您购买的以下商品库存不足");
                                            for (var r = 0,
                                            s = C.cannotBuyInfo.detail.length; r < s; r++) {
                                                if (C.cannotBuyInfo.detail[r]["reason"] == 1) {
                                                    z.push(C.cannotBuyInfo.detail[r]["goodsName"] + "&emsp;" + C.cannotBuyInfo.detail[r]["goodsSn"] + ' 库存数量<span class="red">' + C.cannotBuyInfo.detail[r]["limitNum"] + "</span>件");
                                                } else {
                                                    if (C.cannotBuyInfo.detail[r]["reason"] == 0 || C.cannotBuyInfo.detail[r]["reason"] == 3) {
                                                        z.push(C.cannotBuyInfo.detail[r]["goodsName"] + "&emsp;" + C.cannotBuyInfo.detail[r]["goodsSn"]);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (u) {
                        p();
                        if (C.moveToCollect) {
                            z.push("由于购物车内商品过多，已将" + C.moveToCollect.length + "件商品移入收藏夹");
                        }
                        n(z);
                    } else {
                        o(z);
                    }
                    $.cookie("cart_number", C.number);
                    Cart.number.html(C.number);
                } else {
                    $.alert(C.msg || C.message || "发生错误。请稍候再试。");
                    return false;
                }
            },
            error: function() {
                $.alert("发生错误。请稍候再试。");
            }
        });
    },
    getActinfoCartGoods: function() {
        var b = this,
        a = function(c) {
            if (c && c.is_cart_overlay_show == "1" && c.h_is_can == "1" && c.h_discount_could - 0 > 0) {
                $("#JS_cart_activity_box").html("<div><i></i>" + (c.h_goods_total - 0 > 0 ? ('满额送活动商品已购<span class="red">' + c.h_goods_total + "</span>元，") : "") + '购买此商品，共可送<span class="red">' + c.h_discount_could + "</span>元</div>");
                $("#JS_cart_activity_box").show();
            }
        };
        $.ajax({
            url: "/NewFrameEntrance?r=CartActHint/GetCartActHint&goods_id=" + _DATA.goods_id,
            type: "GET",
            dataType: "json",
            success: function(c) {
                if (c && c.error == 0) {
                    a(c.data);
                }
            }
        });
    },
    breadNavEvent: function() {
        $("#JS_cat_nav").on("mouseover", ".bitem",
        function() {
            $(this).addClass("hover");
        }).on("mouseout", ".bitem",
        function() {
            $(this).removeClass("hover");
        });
    },
    suitAndMatchEvent: function() {
        this.slideTab($("#JS_suit_match_tab_head li"), $("#JS_suit_match_tab_body .module"), "current", "click", true);
        this.slideTab($("#JS_tab_suit_head a"), $("#JS_tab_suit_body .sub-suit"), "this", "mouseover", true);
        this.slideTab($("#JS_tab_match_head a"), $("#JS_tab_match_body .scroll"), "this", "mouseover", true);
        this.slideTab($("#JS_tab_down_head a"), $("#JS_tab_down_body .sub-suit"), "this", "mouseover", true);
        var d = this;
        $("#JS_tab_down_body").on("click", ".JS_match_down_buy",
        function() {
            var i = $(this).data("index"),
            g = $("#JS_match_down_stage_" + i),
            l = g.find(".JS_item"),
            f = $(this).data("act_id"),
            j = {};
            l.each(function(n) {
                var m = $(this),
                p = m.data("goods_id"),
                q = m.data("goods_price"),
                o = m.data("goods_number");
                j[p] = {
                    number: o,
                    show_price: q,
                    act_id: f
                };
            });
            if (_DATA.isSelfnonGroup) {
                d.addToCart(1, j, "", "新版产品页搭配减价", this);
            } else {
                $.addToCart(1, j, null, "", null, "新版产品页搭配减价");
            }
        });
        var e = $("#JS_suit_match_tab_body .scroll");
        var c = window.LOAD ? 4 : 3;
        e.each(function(f) {
            var g = e.eq(f).find(".JS_item").length;
            if (g > 4) {
                $(this).data("type") == "detail" ? d.suitAndMatchScroll(this, g, c + 1, 150, true) : d.suitAndMatchScroll(this, g, c, window.LOAD ? 180 : 170);
            }
        });
        $("#JS_tab_suit_body").on("click", ".JS_suit_buy",
        function() {
            var g = $(this).data("master_id");
            if (!g) {
                return;
            }
            var f = {};
            f[g] = 1;
            if (_DATA.isSelfnonGroup) {
                d.addToCart(g, f, {
                    is_logistics: ""
                },
                "产品详情页", this);
            } else {
                $.addToCart(g, f, null, {
                    is_logistics: ""
                },
                null, "产品详情页");
            }
            return false;
        });
        var b = $("#JS_tab_match_body");
        matchData = {};
        matchData.item = b.find(".JS_item");
        matchData.checkbox = b.find(".checkbox");
        matchData.priceDom = b.find(".JS_match_total_price");
        matchData.numDom = b.find(".JS_goods_num");
        matchData.button = b.find(".JS_match_btn");
        matchData.goodsId = {};
        matchData.accountUl = b.find(".account ul");
        matchData.goodsNumber = (_DATA.isGroupBuy && _DATA.isGroupBuy != "0") ? 0 : 1;
        matchData.checkedPrice = [];
        matchData.totalPrice = (_DATA.isGroupBuy && _DATA.isGroupBuy != "0") ? 0 : parseFloat(_DATA.goods_price);
        var a = matchData.checkbox.length;
        matchData.checkbox.each(function() {
            if ($(this).hasClass("checked")) {
                matchData.goodsNumber++;
                matchData.totalPrice += parseFloat($(this).data("price"));
                matchData.goodsId[$(this).data("id")] = $(this).data("id");
            }
        });
        matchData.numDom.html(matchData.goodsNumber);
        matchData.priceDom.html("&yen" + matchData.totalPrice.toFixed(2));
        matchData.button.click(function() {
            var i = {};
            if (_DATA.isGroupBuy && _DATA.isGroupBuy != "0") {
                if (matchData.goodsNumber == 0) {
                    if (!matchData.accountUl.find(".JS_match_tips")[0]) {
                        matchData.accountUl.append('<li class="JS_match_tips" style="color:#c9033b">组合中有正在团购的商品</li>');
                    }
                } else {
                    var f = "",
                    g = 1;
                    for (k in matchData.goodsId) {
                        i[k] = 1;
                        if (g == 1) {
                            g++;
                            f = k;
                        }
                    }
                    if (_DATA.isSelfnonGroup) {
                        d.addToCart(f, i, "", "人气推荐", this);
                    } else {
                        $.addToCart(f, i, null, {},
                        null, "人气推荐");
                    }
                }
            } else {
                for (k in matchData.goodsId) {
                    i[k] = 1;
                }
                i[_DATA.goods_id] = 1;
                if (_DATA.isSelfnonGroup) {
                    d.addToCart(_DATA.goods_id, i, "", "人气推荐", this);
                } else {
                    $.addToCart(_DATA.goods_id, i, null, {},
                    null, "人气推荐");
                }
            }
        });
        matchData.checkbox.click(function() {
            d.getTotalPriceByCheck(matchData, $(this));
        });
        this.matchData = matchData;
    },
    suitAndMatchScroll: function(m, n, f, b, d) {
        var g = this,
        i = $(m).find("table"),
        a = $(m).find(".arrow"),
        j = i.find(".item"),
        o = n || j.length,
        l = j.first(),
        e = (o % f > 0) ? parseInt(o / f) + 1 : o / f;
        m.currentPage = 0;
        a.on("click", ".prev",
        function() {
            if (e > 1) {
                m.currentPage--;
                c();
            }
            return false;
        }).on("click", ".next",
        function() {
            if (e > 1) {
                m.currentPage++;
                c();
            }
            return false;
        });
        function c() {
            if (!i.is(":animated")) {
                if (m.currentPage >= e) {
                    m.currentPage = 0;
                }
                if (m.currentPage < 0) {
                    m.currentPage = e - 1;
                }
                var p = d ? m.currentPage * b * f + m.currentPage * f * 37 : m.currentPage * b * f;
                i.animate({
                    "margin-left": 0 - p + "px"
                },
                300);
            }
        }
    },
    getTotalPriceByCheck: function(a, b) {
        if (b.hasClass("cannot-check")) {
            return;
        }
        if (b.hasClass("checked")) {
            b.removeClass("checked");
            a.goodsNumber -= 1;
            a.totalPrice -= parseFloat(b.data("price"));
            delete a.goodsId[b.data("id")];
        } else {
            b.addClass("checked");
            a.goodsNumber += 1;
            a.totalPrice += parseFloat(b.data("price"));
            a.goodsId[b.data("id")] = b.data("id");
            a.accountUl.find(".JS_match_tips").remove();
        }
        a.numDom.html(a.goodsNumber);
        a.priceDom.html("&yen" + a.totalPrice.toFixed(2));
    },
    chatEvent: function() {
        $("#JS_float_nav_chat").click(function() {
            if (_DATA.shop_id == 1) {
                window.mchat && mchat.openui("", {
                    click: "chatClick"
                });
            } else {
                window.mchat && window.mchat.openui(3, {
                    click: "chatClick",
                    shopName: _DATA.shop_name,
                    shopId: _data.shop_id
                });
            }
            window._gaq.push(["_trackEvent", "chatClick", "详情页_吸顶菜单", location.href]);
            return false;
        });
        $("#JS_peisong_chat").click(function() {
            window.mchat && mchat.openui("", {
                click: "chatClick"
            });
            window._gaq.push(["_trackEvent", "chatClick", "详情页_配送服务", location.href]);
            return false;
        });
        $("#JS_faq_chat").click(function() {
            window.mchat && mchat.openui("", {
                click: "chatClick"
            });
            window._gaq.push(["_trackEvent", "chatClick", "详情页_常见问题解答", location.href]);
            return false;
        });
    },
    getExprListByAjax: function() {
        var a = this,
        c = _DATA.selectCityId || $.cookie("region_id") || 0,
        b = "&goods_id=" + this.id + "&city_id=" + c + "&district_id=" + _DATA.districtId + "&province_id=" + _DATA.provinceId;
        if (!_DATA.getExprList) {
            b += "&only_once=1";
        }
        $.ajax({
            url: "/mll_api/api/city_expr?city_id=" + _DATA.region.region_id,
            cache: true,
            dataType: "json",
            success: function(e) {
                if (e) {
                    a.formartExprData(e);
                    var d = $("#JS_gd_tab_body_tiyanguan:visible");
                    var f = $(window);
                    if (d && d.length) {
                        _DATA.exprGaTimer = setInterval(function() {
                            var g = d.offset().top;
                            if (f.scrollTop() + f.height() > g && g > 800) {
                                window._gaq.push(["_trackEvent", "新版商品详情页", "页面经过体验馆模块"]);
                                clearInterval(_DATA.exprGaTimer);
                            }
                        },
                        2000);
                    }
                }
            },
            error: function() {}
        });
    },
    formartExprData: function(q) {
        if (!_DATA.region) {
            return;
        }
        var g = [],
        l = _DATA.region.expr_count || q.list.length,
        e = 0,
        j = _DATA.selectCityId || $.cookie("region_id"),
        b = _DATA.region.pinyin ? _DATA.region.pinyin: "",
        n = $("#JS_gd_tab_head_tiyanguan"),
        a = $("#JS_gd_tab_body_tiyanguan");
        g.push('<div class="expr-head">');
        g.push('<div class="current-info">');
        g.push('<h2><a class="expr_chat" href="/' + _DATA.region.pinyin + '/expr.html?form=tab">' + _DATA.region.city + '<span class="red">' + l + "</span>家体验馆</h2>");
        g.push('<a id="JS_expr_chat" class="chat_btn" href="javascript:;"></a>');
        g.push("</div>");
        g.push('<div class="list">');
        g.push("<dl>");
        g.push('<dt class="icon1"></dt>');
        g.push("<dd>");
        g.push("<h4>安心</h4><p>试过再说买不买</p>");
        g.push("</dd>");
        g.push("</dl>");
        g.push("<dl>");
        g.push('<dt class="icon2"></dt>');
        g.push("<dd>");
        g.push("<h4>放心</h4><p>见面付款更安全</p>");
        g.push("</dd>");
        g.push("</dl>");
        g.push("<dl>");
        g.push('<dt class="icon3"></dt>');
        g.push("<dd>");
        g.push("<h4>省心</h4><p>送货到府还安装</p>");
        g.push("</dd>");
        g.push("</dl>");
        g.push("<dl>");
        g.push('<dt class="icon4"></dt>');
        g.push("<dd>");
        g.push("<h4>贴心</h4><p>退货换货包满意</p>");
        g.push("</dd>");
        g.push("</dl>");
        g.push("</div>");
        g.push("</div>");
        g.push('<ul class="expr-list clearfix">');
        for (var e = 0; e < l; e++) {
            var p = q.list[e],
            f = (e % 2 == 0) ? "first": "",
            m = (e > 1) ? "border-top": "";
            g.push('<li class="' + f + " " + m + '">');
            g.push("<dl>");
            g.push('<dt class="clearfix"><a class="Left name" href="/' + (p.city_pinyin ? p.city_pinyin: b) + "/visit-" + p.expr_id + '.html" target="_blank" title="' + p.expr_name + '">' + p.expr_name + '</a><a class="Right map" href="/' + (p.city_pinyin ? p.city_pinyin: b) + "/area-" + p.expr_id + '.html" target="_blank" class="map" title="查看展馆地图">查看地图</a></dt>');
            g.push('<dd class="clearfix">');
            g.push('<div class="expr-face"><a href="/' + (p.city_pinyin ? p.city_pinyin: b) + "/visit-" + p.expr_id + '.html" target="_blank" title="' + p.expr_name + '"><img src="' + $.__IMG + "/" + p.expr_img + '" width="170" height="107" alt="' + p.expr_name + '" /></a></div>');
            g.push('<div class="extend">');
            g.push("<table>");
            g.push('<tr><td width="60">服务电话：</td><td>' + p.phone + "</td></tr>");
            if (p.open_detail) {
                g.push('<tr><td>营业时间：</td><td class="red">' + p.open_detail + "</td></tr>");
            } else {
                g.push("<tr><td>营业时间：</td><td>" + p.sale_time + "</td></tr>");
            }
            g.push('<tr><td>展馆地址：</td><td><div class="address"><a href="/' + (p.city_pinyin ? p.city_pinyin: b) + '/area.html" target="_blank" title="' + p.addr + '">' + p.addr + "</a></div></td></tr>");
            g.push("</table>");
            g.push('<div class="click"><a href="javascript:;" class="sms" title="免费发送到手机" onclick="$.codeSms(' + p.expr_id + ",{click:'体验馆', 'postionCode':'mll_gdetail2'});return !1;\"></a></div>");
            g.push("</div>");
            g.push("</dd>");
            g.push("</dl>");
            g.push("</li>");
        }
        if (l % 2 == 1) {
            var c = l > 1 ? "border-top": "",
            d = q.tempExpr;
            g.push('<li class="whole-epxr ' + m + '"><dl>');
            g.push('<dt><a href="/expr.html" target="_blank" title="全国' + d.all_expr_num + '家体验馆">全国<span class="red">' + d.all_expr_num + "</span>家体验馆</a></dt>");
            g.push('<dd class="clearfix">');
            g.push('<div class="face"><a href="/expr.html" target="_blank" title="全国体验馆"><img src="' + d.map + '" width="156" height="112" alt="全国体验馆分布图" /></a></div>');
            g.push('<div class="info">');
            g.push('<div class="marquee"><ul id="JS_scroll_out_box">');
            for (var e = 0,
            o = d.topic.length; e < o; e++) {
                g.push('<li><a href="' + d.topic[e].url + '" target="_blank" title="' + d.topic[e].title + '">' + d.topic[e].title + "</a></li>");
            }
            g.push("</ul></div>");
            g.push('<a href="/expr.html" target="_blank" title="查看全国体验馆地图" class="link"></a>');
            g.push("</div>");
            g.push("</dd>");
            g.push("</dl></li>");
        }
        g.push("</ul>");
        if (n.length > 0 && l > 0) {
            n.html(_DATA.region.city + '体验馆<span class="red">(' + _DATA.region.expr_count + ")</span>").css({
                display: "inline-block"
            });
        }
        if (a) {
            a.html(g.join("")).show();
            if (l % 2 == 1) {
                this.exprInfoListMarquee();
            }
        }
        $("#JS_expr_chat").click(function() {
            window.mchat && mchat.openui("", {
                click: "chatClick"
            });
            return false;
        });
    },
    exprInfoListMarquee: function() {
        window._JS_ZZ_LOCK_ = false;
        var d = $("#JS_scroll_out_box");
        if (d.length <= 0) {
            return;
        }
        var b = d.find("li"),
        a = b.length;
        if (a >= 5) {
            d.hover(function() {
                window._JS_ZZ_LOCK_ = true;
            },
            function() {
                window._JS_ZZ_LOCK_ = false;
            });
            var c = d.html();
            c += c;
            d.html(c);
            setInterval(e, 2000);
        }
        function e() {
            if (window._JS_ZZ_LOCK_) {
                return;
            }
            var f = parseInt(d.css("margin-top")) || 0;
            if (f <= (a) * ( - 18)) {
                d.css({
                    "margin-top": "0px"
                });
                f = 0;
            }
            f -= 18;
            d.animate({
                "margin-top": f + "px"
            },
            200);
        }
    },
    slideTab: function(e, b, a, c, d) {
        if (e.length <= 0 || b.length <= 0) {
            return;
        }
        e.on(c,
        function() {
            var f = $(this),
            g = f.index();
            e.removeClass(a);
            f.addClass(a);
            b.removeClass(a);
            b.eq(g).addClass(a);
            if (d) {
                var j = b.eq(g).find("img");
                var i;
                j.each(function(l) {
                    i = j.eq(l).attr("lazy-src");
                    if (i) {
                        j.eq(l).attr("src", i);
                    }
                });
            }
        });
    },
    setPosition: function(b, a) {
        a = a || 0;
        this.win.scrollTop($("#" + b).offset().top + a);
    },
    purchaseHistoryEvent: function() {
        var a = this;
        this.getPurchaseHistoryByAjax(0);
        $("#JS_goods_sale_records_pager").on("click", ".record_url",
        function() {
            var b = parseInt($(this).data("page")) - 1;
            a.getPurchaseHistoryByAjax(b);
        }).on("click", ".go",
        function() {
            var b = parseInt($("#JS_sale_record_page_input").val());
            a.getPurchaseHistoryByAjax(b - 1);
        });
    },
    getPurchaseHistoryByAjax: function(b) {
        var a = this,
        c = _DATA.goods_id;
        b = b || 0;
        $.ajax({
            url: "/mll_api/api/buyRecoder?goods_id=" + c + "&page=" + b,
            dataType: "json",
            success: function(d) {
                if (d) {
                    if (d.list && d.list.length > 0) {
                        a.formartPurchaseHistory(d, b);
                    } else {
                        d = {
                            count_num: 0,
                            sale_num: 0
                        };
                        $("#JS_goods_sale_records_list").html('<div style="text-align:center;padding-top:15px;color:#787878;">暂时还没有买家购买此商品。</div>');
                    }
                    $("#JS_gd_tab_head_jilu").html('已售<span class="red">(' + d.sale_num + ")").css({
                        display: "inline-block"
                    });
                    _DATA.saledNumber = d.sale_num;
                    $("#JS_goods_saled_number").html(d.sale_num);
                }
            }
        });
    },
    formartPurchaseHistory: function(b, g) {
        var d = [],
        a = [],
        f = b.list;
        d.push('<table class="records-list">');
        d.push("<tr>");
        d.push('<th class="nick" width="175">会员名</th>');
        d.push('<th width="328">商品名称</th>');
        d.push('<th width="200">地址</th>');
        d.push('<th class="align-c">件数</th>');
        d.push('<th width="185" class="align-c">成交时间</th>');
        d.push("</tr>");
        for (var c = 0,
        e = f.length; c < e; c++) {
            f[c].address = (f[c].address + "").split(" ");
            var j = f[c].address[0];
            f[c].address.shift();
            d.push("<tr>");
            d.push('<td class="nick">' + f[c].user + "</td>");
            d.push('<td><div class="goods-name">' + f[c].goodsname + "</div></td>");
            d.push("<td><strong>" + j + "</strong> " + f[c].address.join(" ") + "</td>");
            d.push('<td class="align-c">' + f[c].goodsnumber + "</td>");
            d.push('<td class="align-c">' + f[c].timer + "</td>");
            d.push("</tr>");
        }
        d.push("</table>");
        $("#JS_goods_sale_records_list").html(d.join(""));
        $("#JS_goods_sale_records_pager").html(this.formartBuyHistoryPager(b, g));
        $("#JS_gd_tab_body_jilu").show();
        if (arguments.callee._isInit) {
            if (this.navsIsFloat) {
                this.setPosition("JS_gd_tab_body_jilu", (_DATA.currentTab == "xiangqing" || !_DATA.currentTab) ? -45 : -10);
            } else {
                this.setPosition("JS_float_navs", 0);
            }
        }
        arguments.callee._isInit = true;
    },
    formartBuyHistoryPager: function(d, e) {
        var c = [];
        totalRecords = d.count_num,
        totalPage = (totalRecords % 10 > 0) ? parseInt(totalRecords / 10) + 1 : totalRecords / 10,
        currentPage = parseInt(e + 1),
        prevPage = currentPage - 1,
        nextPage = currentPage + 1;
        c.push("<table><tr>");
        if (currentPage > 1) {
            c.push('<td><a class="prev record_url" href="javascript:;" data-page="' + prevPage + '"><span class="arrow"><span class="char">◆</span></span>上一页</a></td>');
        }
        if (currentPage > 5) {
            c.push('<td><a href="javascript:;" class="record_url" data-page="1">1</a></td>');
            c.push("<td>&nbsp;...&nbsp;</td>");
        } else {
            if (currentPage > 4) {
                c.push('<td><a href="javascript:;" class="record_url" data-page="1">1</a></td>');
            }
        }
        if (totalPage) {
            for (var b = 0; b < totalPage; b++) {
                var a = b + 1;
                if (a == currentPage) {
                    c.push('<td><span class="current">' + a + "</span></td>");
                } else {
                    if (a + 3 >= currentPage && a - 3 <= currentPage) {
                        c.push('<td><a href="javascript:;" class="record_url" data-page="' + a + '">' + a + "</a></td>");
                    }
                }
            }
        }
        if (currentPage + 4 < totalPage) {
            c.push("<td>&nbsp;...&nbsp;</td>");
            c.push('<td><a href="javascript:;" class="record_url" data-page="' + totalPage + '">' + totalPage + "</a></td>");
        } else {
            if (d.current + 4 == d.totalpage) {
                c.push('<td><a href="javascript:;" class="record_url" data-page="' + totalPage + '">' + totalPage + "</a></td>");
            }
        }
        if (currentPage < totalPage) {
            c.push('<td><a class="next record_url" href="javascript:;" data-page="' + nextPage + '">下一页<span class="arrow"><span class="char">◆</span></span></a></td>');
        }
        c.push("<td>到第</td>");
        c.push('<td><input class="go-num" value="' + currentPage + '" id="JS_sale_record_page_input"></td>');
        c.push("<td>页</td>");
        c.push('<td><a class="go" href="javascript:;" data-page="input">确定</a></td>');
        c.push("</tr></table>");
        return c.join("");
    },
    saleOutGoodsSlide: function() {
        var g = $("#JS_slide_hot_sale_nav"),
        d = $("#JS_slide_hot_sale_body");
        if (g.length <= 0 || d.length <= 0) {
            return;
        }
        var f = window.LOAD ? 205 : 189,
        c = 0,
        a = g.find("a").length,
        e = null;
        function b(i) {
            var j = 0 - (f * i * 2 + i * 40);
            g.find("a").removeClass("current").eq(i).addClass("current");
            d.stop(true).animate({
                "margin-left": j + "px"
            });
        }
        g.on("mouseover", "a",
        function() {
            c = $(this).index();
            b(c);
        }).on("mouseout", "a",
        function() {
            c = $(this).index();
            b(c);
        });
        d.hover(function() {
            clearInterval(e);
        },
        function() {
            e = setInterval(function() {
                b(c);
                c++;
                if (c == a) {
                    c = 0;
                }
            },
            5000);
        }).trigger("mouseleave");
    },
    toggleBarScrollToFixed: function() {
        var b = this;
        this.floatNavs = $("#JS_float_navs");
        var a = $("#JS_float_navs_position");
        if (!a || !a.length) {
            return;
        }
        $(window).scroll(function() {
            var d = b.floatNavs;
            var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            var c = b.navsOffsetTop = a.offset().top;
            if (e > c) {
                d.addClass("fixed-top");
                _DATA.navsIsFloat = b.navsIsFloat = true;
            } else {
                d.removeClass("fixed-top");
                _DATA.navsIsFloat = b.navsIsFloat = false;
            }
        });
    },
    toggleTabByClick: function() {
        var d = this,
        c = ["xiangqing", "guige", "pingjia", "jilu", "tiyanguan", "baozhang", "pinpai"],
        b = [],
        a = [];
        jQuery.each(c,
        function(e) {
            a = jQuery.merge(a, $("#JS_gd_tab_body_" + c[e]));
            var f = $("#JS_gd_tab_head_" + c[e]);
            f.attr("data-key", c[e]);
            b = jQuery.merge(b, f);
        });
        b = $(b);
        a = $(a);
        b.click(function(f) {
            if (d.navsIsFloat) {
                window.scroll(0, d.navsOffsetTop - 1);
            }
            var f = b.index(this),
            g = b.eq(f),
            e = g.attr("data-key");
            b.removeClass("current").eq(f).addClass("current");
            switch (e) {
            case "xiangqing":
                a.show();
                $("#JS_gd_tab_body_guige").hide();
                $("#JS_gd_tab_body_pinpai").show();
                break;
            case "baozhang":
                a.hide().eq(f).show();
                break;
            default:
                a.hide().eq(f).show();
                $("#JS_gd_tab_body_baozhang").show();
                break;
            }
            a.removeClass("current").eq(f).addClass("current");
            clearInterval(_DATA.exprGaTimer);
            _DATA.currentTab = e;
            window._gaq.push(["_trackEvent", "新版商品详情页", "导航Tab点击", $(this).data("value")]);
        });
    },
    recommendEvent: function() {
        var f = this,
        a = $("#JS_recommend_scroll_stage"),
        e = a.find("li"),
        c = e.length,
        b = (c % 4 > 0) ? parseInt(c / 4) + 1 : c / 4,
        d = 624;
        _DATA.recommendCurrentPage = 0,
        $("#JS_recommend_scroll_btn").on("click", ".prev",
        function() {
            _DATA.recommendCurrentPage--;
            f.recommendMove(a, b, d, e);
        }).on("click", ".next",
        function() {
            _DATA.recommendCurrentPage++;
            f.recommendMove(a, b, d, e);
        });
    },
    recommendMove: function(b, c, e, d) {
        if (!b.is(":animated")) {
            if (_DATA.recommendCurrentPage < 0) {
                _DATA.recommendCurrentPage = c - 1;
            }
            if (_DATA.recommendCurrentPage > c - 1) {
                _DATA.recommendCurrentPage = 0;
            }
            var i = _DATA.recommendCurrentPage * e;
            b.animate({
                "margin-top": 0 - i + "px"
            },
            300);
            var a = (_DATA.recommendCurrentPage + 1) * 4,
            g = a - 4;
            var f = d.slice(g, a);
            f.each(function(l) {
                var j = $(this).find("img");
                if (j.attr("lazy-src")) {
                    j.attr("src", j.attr("lazy-src"));
                }
            });
        }
    }
};
Goods.init();
var _tag = [];
var __ = 0;
function TIMER(a) {
    this.id = a;
    this.obj = $("#" + a);
    this.html = this.obj.attr("data-format");
    this.leftTime = this.obj.attr("data-lefttime") - _DATA.unixTime;
    this.parentObj = this.obj.attr("data-hideme") ? this.obj: this.obj.parents("li");
}
TIMER.prototype = {
    fill: function() {
        var g = this;
        var f = (g.leftTime - __) || 0;
        if (f <= 0) {
            f = 0;
            if (this.parentObj) {
                this.parentObj.hide();
            }
            return;
        }
        var e = f % 60;
        if (e < 10) {
            e = "0" + e;
        }
        var a = parseInt(f % 3600 / 60);
        if (a < 10) {
            a = "0" + a;
        }
        var c = parseInt(f % (3600 * 24) / 3600);
        if (c < 10) {
            c = "0" + c;
        }
        var i = parseInt(f / (3600 * 24));
        if (g.html.indexOf("$D") < 0) {
            c = (i * 24) - 0 + (c - 0);
        }
        var b = g.html.replace("$D", i).replace("$H", c).replace("$M", a).replace("$S", e);
        g.obj.html(b);
    }
};
function countDown() {
    for (var a = 0; a < _tag.length; a++) {
        _tag[a].fill();
    }
    __++;
    setTimeout(function() {
        countDown();
    },
    1000);
}
function tagInit(d) {
    d = d || "";
    _tag = [];
    var a = $(".JS_count_down_tag");
    for (var b = 0,
    c = a.length; b < c; b++) {
        a.eq(b).attr("id", "count_down_OoO_" + d + b);
        _tag[b] = new TIMER("count_down_OoO_" + d + b);
    }
}
function cancelDefaultEvent(a) {
    a = a || window.event;
    if (document.all) {
        a.cancelBubble = true;
    } else {
        a.stopPropagation();
    }
}
if (exprCallBackNum && exprCallBackNum.callFnArr) {
    exprCallBackNum.callFnArr.push(function(a) {
        _DATA.region = a.html_content;
        Goods.getExprListByAjax();
    });
}
function _GOODS_STATIC_REGION_INFO(n) {
    if (n) {
        var a = _DATA.goods_id,
        e = n.html_content;
        if (a) {
            var d = $("#JS_peisong_address_nav");
            if (d.length) {
                var b = getLocalData("stockArea");
                if (b) {
                    var g = b.split(",");
                    var j = g[0];
                    var i = g[1];
                    var f = g[2];
                    var m = g[3];
                } else {
                    var m = getLocalData("stockCusDisId") || 0;
                    var f = getLocalData("stockDisId");
                    var i = getLocalData("stockCityId");
                    var j = getLocalData("stockProvinceId");
                }
                _DATA.getExprList = false;
                if (i > 0 && j > 0) {
                    _DATA.districtId = f;
                    _DATA.selectCityId = i;
                    _DATA.customDistrictId = m;
                    var c = $("#JS_area_select_list .prov");
                    var l = "";
                    c.each(function(p, o) {
                        var r = $(this);
                        var q = r.data("region_id");
                        if (q == j) {
                            l = r.html();
                            return false;
                        }
                    });
                    Goods.selectProvince(j, l);
                } else {
                    if (e) {
                        _DATA.districtId = 0;
                        _DATA.selectCityId = e.region_id;
                        _DATA.selectCityName = e.cname;
                        Goods.selectProvince(e.pid, e.pname);
                    } else {
                        _DATA.getExprList = true;
                        Goods.getGoodsTransfee();
                    }
                }
            }
        }
    }
}
function _Collect_Goods(a) {
    if (a && a.html_content == 1) {
        $("#JS_collect_this_goods").find("a").html("已收藏");
        _DATA.collected = 1;
    }
}
function getLocalData(a) {
    var b = "";
    if (a) {
        b = $.cookie(a);
    }
    return b;
}
function saveLocalData(a, b) {
    if ($.type(a) == "object") {
        $.each(a,
        function(c) {
            saveLocalData(c, a[c]);
        });
    } else {
        if ($.type(a) == "array") {
            saveLocalData("stockArea", a.join(","));
        } else {
            if (a && b) {
                $.cookie(a, b);
            }
        }
    }
}
window._gaq = window._gaq || [];
$("#JS_panel_btn_box").on("click", ".JS_pack_tx",
function() {
    $.ajax({
        url: "/mll_api/api/goods_actbonus?goods_id=" + window._DATA.goods_id,
        type: "get",
        success: function(a) {
            if (a && a.data.act_id) {
                $.sendSmsGoods(null, {
                    type: "get_pack_tx",
                    unique: a.data.act_id,
                    checkPhone: true,
                    click: "开抢提醒",
                    prize_id: a.data.act_id + "_" + window._DATA.goods_id
                });
            }
        },
        error: function() {
            alert("数据连接失败，请重试！");
        }
    });
}).on("click", ".JS_pack_now",
function() {
    $.ajax({
        url: "/mll_api/api/goods_actbonus?goods_id=" + window._DATA.goods_id,
        type: "get",
        success: function(a) {
            if (a && a.data.act_id) {
                $.sendSmsGoods(null, {
                    type: "get_limited_prize_goods",
                    notice: warmPrompt,
                    unique: a.data.act_id,
                    checkPhone: true,
                    click: "立马抢红包",
                    prize_id: a.data.act_id + "_" + window._DATA.goods_id
                });
            }
        },
        error: function() {
            alert("数据连接失败，请重试！");
        }
    });
});
function _COMMON_UNIX_TIME_GOODS(a) {
    if (!a) {
        return;
    }
    window.originalState;
    window.qmStatus = false;
    window.txStatus = false;
    window.hqmTimer = null;
    window.qmTimer = null;
    var d = a.data.act;
    var e = new Date().getTime();
    end = d.start;
    window.leftTimeTopic = parseInt(end - e / 1000);
    if (window.leftTimeTopic <= 0) {
        window.originalState = false;
        var c = parseInt(d.end - e / 1000);
    } else {
        window.originalState = true;
        var c = parseInt(d.end - d.start);
    }
    if (!d.gid && !d.end && !d.start) {
        if (lianximeimei) {
            var b = '<a href="javascript:;" title="找美美，要红包" class="gift" style="width:' + lianximeimei.width + "px;height:" + lianximeimei.height + 'px;"><img src="' + $.__IMG + "/" + lianximeimei.src + '" width="' + lianximeimei.width + '" height="' + lianximeimei.height + '" /></a>';
            $("#JS_panel_btn_box").find("#JS_change_btn").empty().html(b);
            if ($("#JS_panel_text_error").length > 0 && window._DATA.can_direct_buy != 1) {
                $("#JS_panel_text_error").hide();
            }
        }
        return;
    }
    if (window._DATA.can_direct_buy != 1) {
        hqmTimer = setInterval(function() {
            coutSec('<span>红包发送倒计时：</span><span style="display:inline-block;text-align:right;"> $H <span class="danwei"> : </span></span><span> $M <span class="danwei"> : </span></span><span> $S </span>', "JS_panel_text_error");
            if (qmStatus) {
                clearInterval(hqmTimer);
                qmFn(c, a);
            }
        },
        1000);
    }
}
function coutSec(f, a, i, c) {
    if (!originalState) {
        qmStatus = true;
        return;
    }
    if (window.leftTimeTopic < 0) {
        qmStatus = true;
        return;
    }
    var g = window.leftTimeTopic;
    if (i) {
        g = i(g);
    }
    if (g <= 0) {
        g = 0;
        if (c) {
            c();
        }
    }
    var j = g % 60;
    if (j < 10) {
        j = "0" + j;
    }
    var b = parseInt(g % 3600 / 60);
    if (b < 10) {
        b = "0" + b;
    }
    var e = parseInt(g / 3600);
    if (e < 10) {
        e = "0" + e;
    }
    var d = f.replace("$H", e).replace("$M", b).replace("$S", j);
    document.getElementById(a).innerHTML = d;
    var e = '<a id="JS_pack_hold" href="javascript:;" title="开抢提醒我" data-type="normal" class="add tixing JS_pack_tx">';
    $("#JS_panel_btn_box").find("#JS_change_btn").empty().html(e);
    if ($("#JS_panel_text_error").length > 0 && window._DATA.can_direct_buy != 1) {
        $("#JS_panel_text_error").show();
    }
    window.leftTimeTopic--;
}
function qmFn(d, a) {
    if ($("#JS_panel_text_error").length > 0 && window._DATA.can_direct_buy != 1) {
        $("#JS_panel_text_error").hide();
    }
    var b = '<a id="JS_pack_hold" href="javascript:;" title="立马抢红包" data-type="normal" class="add nowq JS_pack_now"></a>';
    $("#JS_panel_btn_box").find("#JS_change_btn").empty().html(b);
    var c = d;
    qmTimer = setInterval(function() {
        c--;
        if (c <= 0) {
            txStatus = true;
            if (txStatus) {
                clearInterval(qmTimer);
                qmStatus = false;
                originalState = true;
                $.ajax({
                    url: "/mll_api/api/goods_actbonus?goods_id=" + window._DATA.goods_id,
                    type: "get",
                    success: function(e) {
                        if (e && e.error == 0) {
                            _COMMON_UNIX_TIME_GOODS(e);
                        }
                    }
                });
            }
        }
    },
    1000);
} (function() {
    $.ajax({
        url: "/mll_api/api/goods_actbonus?goods_id=" + window._DATA.goods_id,
        type: "get",
        success: function(a) {
            if (a && a.error == 0) {
                _COMMON_UNIX_TIME_GOODS(a);
            }
        }
    });
})();
if ($("#JS_goods_ad").length > 0) {
    $("#JS_goods_ad").click(function() {
        window._gaq.push(["_trackEvent", "详情页活动", '点击"活动banner"', window._DATA.goods_id]);
    });
} (function() {
    var c = [];
    var a = $.cookie("grecd");
    if (a) {
        c = a.split(",");
    }
    if (!c.length) {
        c = [];
    }
    var b = c || [];
    if ($.inArray(_DATA.goods_id, b) == -1) {
        b.push(_DATA.goods_id);
        if (b.length > 30) {
            b = b.reverse();
            b.pop(b[b.length - 1]);
            b = b.reverse();
        }
        $.cookie("grecd", b, {
            path: "/",
            expires: 30
        });
    }
})();
/*dengyun*242987:2016-11-28 16:33:30*/
