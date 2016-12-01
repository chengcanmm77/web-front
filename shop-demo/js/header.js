(function(f, e) {
    var c = e.cookie("meilele_login") == "1" && e.cookie("ECS[username]");
    if (c) {
        e.ajax({
            type: "POST",
            url: "/dubbo_api/mll/stationMsg/getMsgCount",
            dataType: "json",
            success: function(d) {
                if (d && d.error == 0) {
                    e(".JS_mes_num").text(d.count).show();
                } else {
                    e(".JS_mes_num").hide();
                }
            },
            error: function() {
                e(".JS_mes_num").hide();
            }
        });
        var g = e(".JS_login");
        e(".JS_login:eq(0)").after('<li class="fl banner"><a target="_blank" class="login-name" href="/user/" title="' + c + '">' + b(c, 16) + '</a><a target="_blank" class="u-message" href="/user/?act=news">消息&nbsp;<i class="i-cyc JS_mes_num">' + 0 + '</i></a><a href="javascript:;" class="login-out" id="JS_login_out">[退出]</a></li>');
        e(".JS_login").remove();
    }
    var a = new Image();
    if (!/ECS_ID\=/.test(document.cookie) || (/autoLogin\=/.test(document.cookie) && !/meilele_login=1/.test(document.cookie))) {
        a.src = "/ecsid_maker/?_=" + (new Date()).getTime();
    }
    function b(m, h) {
        if (!m) {
            return "";
        }
        var j = 0,
        d = [];
        for (var k = 0,
        l = m.length; k < l; k++) {
            var n = m.charAt(k);
            if (n.charCodeAt(0) > 255) {
                j += 2;
            } else {
                j++;
            }
            if (j <= h) {
                d.push(n);
            } else {
                return d.join("");
            }
        }
        return d.join("");
    }
    e("#JS_login_out").on("click",
    function() {
        jQuery.ajax({
            url: "/user/?act=logout",
            type: "get",
            cache: false,
            dataType: "json",
            success: function(d) {
                if (d.error == 0) {
                    window.location.reload();
                    return false;
                } else {
                    jQuery.alert("注销失败，请重试！");
                }
            },
            error: function() {
                jQuery.alert("网络异常，请重试！");
            }
        });
    });
})(document, jQuery);
function shoucang() {
    window._gaq = window._gaq || [];
    _gaq.push(["_trackEvent", "headerAddFavorite", location.href]);
    var b = window.location.href;
    var a = document.title;
    try {
        window.external.addFavorite(b, a);
    } catch(c) {
        try {
            window.sidebar.addPanel(a, b, "");
        } catch(c) {
            alert("对不起，您的浏览器不支持此操作！n请您使用菜单栏或Ctrl+D收藏本站。");
        }
    }
}
function exprCallBackNum(json) {
    if (json && json.html_content) {
        try {
            eval("json.html_content=" + json.html_content);
        } catch(e) {
            jQuery("#JS_head_scoll_phone_527").siblings("span.blank").remove();
            return;
        }
        if (!json) {
            return;
        }
        var o1 = $("#JS_mll_head_menu_expr");
        var o3 = $("#JS_Header_Home_Link");
        var o4 = $("#JS_Header_Logo_link_home");
        if (json.html_content && json.html_content.expr_count > 0 && json.html_content.pinyin) {
            o1.attr("href", "/" + json.html_content.pinyin + "/expr.html").html('体验馆<img src="' + $.__IMG + '/images/common/site/hot.gif">');
            o3.attr("href", "/" + json.html_content.pinyin + "/");
            o4.attr("href", "/" + json.html_content.pinyin + "/");
        } else {
            jQuery("#JS_head_scoll_phone_527").siblings("span.blank").remove();
        }
        var len = exprCallBackNum.callFnArr.length;
        for (var i = 0; i < len; i++) {
            exprCallBackNum.callFnArr[i] && exprCallBackNum.callFnArr[i](json);
        }
    } else {
        jQuery("#JS_head_scoll_phone_527").siblings("span.blank").remove();
    }
}
exprCallBackNum.callFnArr = [];
window._headPhoneScroll527Now = 0;
function Head_scroll_phone_527_fn() {
    if (window._headPhoneScroll527Lock) {
        return;
    }
    var c = window._headPhoneScroll527Dom;
    var a = window._headPhoneScroll527Length;
    var b = window._headPhoneScroll527Now;
    if (c && a) {
        jQuery(c).animate({
            marginTop: (b + 1) * -26 + "px"
        },
        300, "linear",
        function() {
            window._headPhoneScroll527Now++;
            if (window._headPhoneScroll527Now >= window._headPhoneScroll527Length / 2) {
                window._headPhoneScroll527Dom.css("margin-top", "0px");
                window._headPhoneScroll527Now = 0;
            }
        });
    }
}
var car_number = 0;
function DY_cart_detail_nav_cb(b) {
    Cart.goodsList = 1;
    Cart.saleLimit = b.saleLimit || 100;
    var a = b.goods_list.length;
    if (a > 0) {
        Cart.formatData(b) || {};
        Cart.info.goodsData = b.goods_list;
    }
    Cart.update();
}
var Cart = {};
Cart.init = function() {
    Cart.handdler = $("#JS_cart,#JS_cart2,#JS_cart3");
    Cart.Dom = Cart.handdler.find("#JS_cart_list,#JS_cart_list2");
    Cart.number = Cart.handdler.find("#JS_cart_num,#JS_cart_num2,#JS_cart_num3");
    Cart.countArea = Cart.handdler.find("#JS_count_area,#JS_count_area2");
    Cart.countNum = Cart.handdler.find("#JS_cart_count,#JS_cart_count2");
    Cart.sum = Cart.handdler.find("#JS_count_total,#JS_count_total2");
    Cart._isIE = !-[1, ];
    Cart.info = {
        goodsData: [],
        sum: 0,
        goodsNumber: 0,
        giftsNumber: 0,
        kindsNumber: 0
    };
    Cart.number.html($.cookie("cart_number") || 0);
};
Cart.isLogin = function() {
    return ($.cookie("meilele_login") == "1" || $.cookie("ECS[username]"));
};
Cart.show = function(b) {
    if (Cart.isLogin() && !Cart.moveToCollect.moved) {
        Cart.moveToCollect(a);
    } else {
        a();
    }
    function a(c) {
        if (!Cart.goodsList) {
            Cart.Dom.html("")[0].className = "cart-list";
            Cart.countArea.addClass("none");
            Cart.getCartInfo(null, c);
        }
    }
    $(b).addClass("hover");
    if (Cart._isIE) {
        Cart.handdler.find(".cart-arrow").addClass("cart-arrow-ie");
    }
};
Cart.getCartInfo = function(b, a) {
    Cart.info = {
        goodsData: [],
        sum: 0,
        goodsNumber: 0,
        giftsNumber: 0,
        kindsNumber: 0
    };
    var c = {};
    if (a && a.length) {
        c.filterGoodsIds = a.join("!");
    }
    jQuery.ajax({
        url: "/mll_api/api/cart_info",
        dataType: "json",
        cache: false,
        data: c,
        success: function(d) {
            DY_cart_detail_nav_cb(d);
            b && b(d);
        }
    });
};
Cart.setCartNum = function(a) {
    jQuery.cookie("cart_number", a || 0);
};
Cart.hide = function() {
    Cart.handdler.removeClass("hover");
    if (Cart._isIE) {
        Cart.handdler.find(".cart-arrow").removeClass("cart-arrow-ie");
    }
};
Cart.del = function(l, d) {
    var o = l || window.event,
    m = o.target || o.srcElement;
    if (d) {
        m = d;
    }
    var a = $(m);
    if (!a.hasClass("Cart_del")) {
        return false;
    }
    var j = a.attr("data-index"),
    b = a.attr("data-rec_id"),
    h = a.attr("data-num"),
    i = a.attr("data-goods_price"),
    n = a.attr("data-act_id");
    var g = [];
    var f = {};
    if (n > 0) {
        var k = Cart.Dom.find(".JS_cart_list_act_" + n);
        k.each(function(r, s) {
            var t = $(this);
            var q = t.data("rec_id");
            var p = t.data("index");
            var e = t.data("num");
            g.push(q);
            f[q] = {
                index: p,
                num: e,
                price: 0
            };
        });
    } else {
        g.push(b);
        f[b] = {
            index: j,
            num: h,
            price: i
        };
    }
    if (!Cart.inDelAjax && g.length > 0) {
        Cart.inDelAjax = true;
        $.ajax({
            url: "/add_cart/?step=dropGoods&ajax=1&goods=" + g.join("|"),
            type: "GET",
            dataType: "json",
            success: function(e) {
                if (e.error == 0) {
                    c(g, f);
                } else {
                    this.error();
                }
            },
            error: function() {
                alert("删除失败，请稍后再试！");
            },
            complete: function() {
                Cart.inDelAjax = false;
            }
        });
    }
    function c(q, p) {
        var e = Cart.info;
        for (var r = 0; r < q.length; r++) {
            var t = q[r];
            var v = p[t].index;
            var s = p[t].num || 0;
            var u = p[t].price || 0;
            var x = s * u;
            var w = $(".JS_cart_list_gift_" + t);
            w.each(function(y) {
                var z = parseInt(w.eq(y).attr("data-num"));
                e.giftsNumber -= z;
            });
            $(".JS_cart_list_index_" + v).remove();
            w.remove();
            e.goodsNumber -= s;
            e.kindsNumber--;
            e.sum -= x;
        }
        Cart.update();
    }
};
Cart.formatData = function(c) {
    var b = Cart.info;
    var f = c.goods_list;
    var h = 0;
    var d = 0;
    var g = [];
    for (var i = 0,
    a = f.length; i < a; i++) {
        var e = (f[i].goods_thumb_1) ? f[i].goods_thumb_1: f[i].goods_thumb;
        g.push('<li class="JS_cart_list_index_' + i + '" class="' + (f[i].goods_activity_type != "newgift" ? "": "JS_cart_list_gift_" + f[i].activity_par_id) + (f[i].price_activity_id > 0 ? " JS_cart_list_act_" + f[i].price_activity_id: "") + 'clearfix cart-item" data-num="' + f[i].goods_number + '" data-rec_id="' + f[i].rec_id + '" data-index="' + i + '">');
        g.push('<a class="cart-img" href="' + f[i].url + '" target="_blank" title="' + f[i].goods_name + '"><img class="fl" src="http://image.meilele.com/' + e + '" alt="' + f[i].goods_name + '" width="86" height="57" ></a>');
        g.push('<a target="_blank" class="cart-link" title="' + f[i].goods_name + '" href="' + f[i].url + '">' + f[i].goods_name + "</a>");
        if (f[i].goods_activity_type != "newgift") {
            g.push('<p class="cart-cal clearfix"><a data-goods_id="' + f[i].goods_id + '" class="fr black Cart_del" href="javascript:void(0)" data-index="' + i + '" data-rec_id="' + f[i].rec_id + '" data-num="' + f[i].goods_number + '" data-goods_price="' + f[i].goods_price + '" data-act_id="' + (f[i].price_activity_id || 0) + '">删除</a><span class="red" id="JS_danjia' + i + '">&yen;' + f[i].goods_price + '</span>×<span class="black">' + f[i].goods_number + "</span></p>");
            b.goodsNumber += f[i].goods_number - 0;
            b.kindsNumber++;
            b.sum += (f[i].goods_number || 0) * (f[i].goods_price || 0);
        } else {
            g.push('<p class="cart-cal clearfix"><strong style="margin-left:12px"><span class="cl red">赠品</span>&times;' + f[i].goods_number + "</strong></p>");
            d += parseInt(f[i].goods_number) || 0;
            b.giftsNumber += f[i].goods_number - 0;
        }
        g.push("</li>");
        h += parseInt(f[i].goods_number) || 0;
    }
    Cart.Dom.html(g.join(""));
    Cart.update();
    return b;
};
Cart.goPreCheckOut = function() {
    jQuery.showLoginBox(function() {
        location.href = "/flow/?step=pre_checkout&rel=header";
    });
};
Cart.moveToCollect = function(a) {
    Cart.countArea.find(".cart-tip").remove();
    jQuery.ajax({
        url: "/add_cart/?step=insertCollect",
        type: "GET",
        dataType: "JSON",
        cache: false,
        success: function(g) {
            if (g && g.error == "0" && g.moveToCollect && g.moveToCollect.length) {
                var c = g.moveToCollect;
                var d = [];
                var f = [];
                f.push('<div class="cart-tip"><span class="red"><b>提示：</b>购物车里有' + c.length + '件商品被移入收藏夹</span><p class="tip-content">');
                for (var e = 0,
                b = c.length; e < b; e++) {
                    if (e < 3) {
                        f.push('<a target="_blank" class="tip-link" href="' + c[e].goodsLink + '">' + c[e].goodsName + "</a>");
                    }
                    d.push(c[e].goodsId);
                }
                f.push('</p><a href="/user/?act=collection_list" target="_blank" class="red">查看收藏夹&gt;&gt;</a></div>');
                Cart.countArea.append(f.join(""));
                a && a(d);
            } else {
                this.error();
            }
            Cart.moveToCollect.moved = true;
        },
        error: function() {
            a && a([]);
            Cart.moveToCollect.moved = false;
        }
    });
};
Cart.update = function(b) {
    var b = b || Cart.info;
    var a = Number(b.goodsNumber || 0) + Number(b.giftsNumber || 0);
    if (a == 0) {
        Cart.setCartNum(0);
        Cart.number.html(0);
        Cart.Dom.html('<li class="nothing"><b class="common-bg nothing-icon"></b>&nbsp;购物车中还没有商品，赶紧选购吧！</li>');
        Cart.countArea.addClass("none");
        Cart.Dom.removeClass("cart-full");
        return;
    }
    Cart.number.html(a);
    Cart.countNum.html(a);
    Cart.sum.html("&yen;" + Number(b.sum || 0).toFixed(2));
    Cart.Dom.addClass("cart-full");
    Cart.countArea.removeClass("none");
    Cart.setCartNum(a);
    var c = Cart.Dom.find(".cart-item").length;
    Cart.Dom.addClass("cart-full" + (c > 2 ? 3 : c));
    if (c == 0) {
        Cart.Dom[0].className = "cart-list";
    }
};
function _show_(j, d) {
    if (!j) {
        return;
    }
    if (d && d.source && d.target) {
        var b = typeof d.source === "string" ? $("#" + d.source) : $(d.source);
        var l = typeof d.target === "string" ? $("#" + d.target) : $(d.target);
        var f = typeof d.data === "string" ? $("#" + d.data) : $(d.data);
        if (b.length && l.length && !l.isDone) {
            var h = $(b.val() || sourse.html());
            if (f.length && typeof d.templateFunction == "function") {
                var i = f.val() || f.html();
                i = $.parseJSON(i);
                h = d.templateFunction(h, i);
                f.remove();
            }
            l.empty().append(h);
            b.remove();
            if (typeof d.callback == "function") {
                d.callback();
            }
            l.isDone = true;
        }
    }
    $(j).addClass("hover");
    if (d && d.isLazyLoad && j.isDone) {
        var g = j.find("img");
        for (var e = 0,
        c = g.length; e < c; e++) {
            var a = g[e].getAttribute("data-src_index_menu");
            if (a) {
                g[e].setAttribute("src", a);
                g[e].removeAttribute("data-src_index_menu");
            }
        }
        j.isDone = true;
    }
}
function _hide_(b) {
    if (!b) {
        return;
    }
    var a = $(b);
    if (a.hasClass("hover")) {
        a.removeClass("hover");
    }
}
function shoucang() {
    window._gaq = window._gaq || [];
    _gaq.push(["_trackEvent", "headerAddFavorite", location.href]);
    var b = window.location.href;
    var a = document.title;
    try {
        window.external.addFavorite(b, a);
    } catch(c) {
        try {
            window.sidebar.addPanel(a, b, "");
        } catch(c) {
            alert("对不起，您的浏览器不支持此操作！n请您使用菜单栏或Ctrl+D收藏本站。");
        }
    }
} (function(a) {
    jQuery.fn.menu = function(c) {
        this.each(function() {
            b.call(this, c);
        });
        return this;
    };
    function b(o) {
        var h = a(this),
        k = null,
        f = [],
        j = null,
        i = null,
        r = null,
        e = a.extend({
            rowSelector: "> li",
            submenuSelector: "*",
            submenuDirection: "right",
            tolerance: 75,
            enter: a.noop,
            exit: a.noop,
            activate: a.noop,
            deactivate: a.noop,
            exitMenu: a.noop,
            firstDelay: 0
        },
        o);
        var c = 3,
        m = 300,
        l = 0;
        var g = function(w) {
            f.push({
                x: w.pageX,
                y: w.pageY
            });
            if (f.length > c) {
                f.shift();
            }
        };
        var n = function() {
            clearTimeout(r);
            if (i) {
                clearTimeout(i);
            }
            if (e.exitMenu(this)) {
                if (k) {
                    e.deactivate(k);
                }
            }
            k = null;
        };
        var q = function() { (!k) && clearTimeout(r);
        };
        var t = function(w) {
            if (i) {
                clearTimeout(i);
            }
            e.enter(this);
            s(this);
        },
        p = function(w) {
            e.exit(this);
        };
        var u = function(w) {
            d(this);
            w.stopPropagation();
        };
        var d = function(x) {
            clearTimeout(r);
            if (k) {
                e.deactivate(k);
            }
            if (!k && e.firstDelay) {
                r = setTimeout(function() {
                    w(x);
                },
                e.firstDelay);
            } else {
                w(x);
            }
            function w(y) {
                e.activate(y);
                k = y;
            }
        };
        var s = function(x) {
            var w = v();
            if (w) {
                i = setTimeout(function() {
                    s(x);
                },
                w);
            } else {
                d(x);
            }
        };
        var v = function() {
            if (!k || !a(k).is(e.submenuSelector)) {
                return 0;
            }
            var A = h.offset(),
            w = {
                x: A.left,
                y: A.top - e.tolerance
            },
            H = {
                x: A.left + h.outerWidth(),
                y: w.y
            },
            J = {
                x: A.left,
                y: A.top + h.outerHeight() + e.tolerance
            },
            B = {
                x: A.left + h.outerWidth(),
                y: J.y
            },
            C = f[f.length - 1],
            G = f[0];
            if (!C) {
                return 0;
            }
            if (!G) {
                G = C;
            }
            if (G.x < A.left || G.x > B.x || G.y < A.top || G.y > B.y) {
                return 0;
            }
            if (j && C.x == j.x && C.y == j.y) {
                return 0;
            }
            function D(L, K) {
                return (K.y - L.y) / (K.x - L.x);
            }
            var F = H,
            x = B;
            if (e.submenuDirection == "left") {
                F = J;
                x = w;
            } else {
                if (e.submenuDirection == "below") {
                    F = B;
                    x = J;
                } else {
                    if (e.submenuDirection == "above") {
                        F = w;
                        x = H;
                    }
                }
            }
            var y = D(C, F),
            E = D(C, x),
            I = D(G, F),
            z = D(G, x);
            if (y < I && E > z) {
                j = C;
                return m;
            }
            j = null;
            return 0;
        };
        h.on("mouseleave", n).on("enter", q).find(e.rowSelector).on("mouseenter", t).on("mouseleave", p).on("click", u);
        a(document).mousemove(g);
    }
})(jQuery); (function(a) {
    if (!a) {
        return;
    }
    a.fn.placeholder = function(j) {
        var d = {
            txt: "",
            cssStr: "",
            focusClsName: undefined,
            focusFun: undefined,
            blurFun: undefined,
            clsName: undefined
        };
        var c = a.extend({},
        d, j || {});
        var b = a(this);
        var f = b.prop("type");
        f = f ? (f != "password" && f != "text" ? "text": f) : "text";
        if (f == "text") {
            b.val(c.txt);
            b.focus(function(k) {
                h(b, c.focusFun);
            }).blur(function() {
                i(b, c.blurFun);
            });
        } else {
            var e;
            if (!b.next("input").length) {
                e = a("<input />").addClass(c.clsName && c.clsName.join ? c.clsName.join(" ") : "");
            } else {
                e = b.next("input").eq(0);
            }
            var g = {
                show: {
                    display: ""
                },
                hide: {
                    display: "none"
                }
            };
            e.focus(function(k) {
                e.css(g.hide);
                b.css(g.show).focus();
                c.focusFun && c.focusFun();
            }).val(c.txt);
            b.css(g.hide).after(e).blur(function() {
                b.val() ? void(0) : (e.css(g.show) && b.css(g.hide));
                c.blurFun && c.blurFun();
            });
        }
        function h(l, k) {
            l.val() == c.txt && l.val("").addClass(c.focusClsName && c.focusClsName.join ? c.focusClsName.join(" ") : "");
            k && k();
        }
        function i(l, k) {
            l.val() == "" ? l.val(c.txt).removeClass(c.focusClsName && c.focusClsName.join ? c.focusClsName.join(" ") : "") : k && k();
        }
        b.setTxt = function(k) {
            if (!b.next("input").length) {
                b.val() == c.txt && b.val(k);
            } else {
                b.next("input").eq(0).val(k);
            }
            c.txt = k;
            return b;
        };
        b.getText = function() {
            return c.txt;
        };
        b.setParam = function(m, l) {
            c[m] = l;
            return b;
        };
        b.getParam = function(l) {
            return c[l];
        };
        return b;
    };
})($);
function initInput(b, a) {
    return b.placeholder ? b.placeholder(a) : null;
}
function _INIT_HEAD_SEARCH(data) {
    var json;
    try {
        json = eval(data.html_content);
    } catch(e) {}
    if (json && json.length) {
        var url = location.pathname;
        var wordIndex = -1;
        var tmpFilter;
        window.__HEAD_SEARCH_WORDS_ARR = [];
        window.__HEAD_SEARCH_WORDS_OBJ = {};
        if (/\/jiaju\//.test(url)) {
            wordIndex = 0;
        } else {
            if (/\/jiancai\//.test(url)) {
                wordIndex = 1;
            } else {
                if (/\/shipin\//.test(url)) {
                    wordIndex = 2;
                }
            }
        }
        for (var k = 0,
        kk = json.length; k < kk; k++) {
            tmpFilter = json[k].type.split("");
            if (wordIndex == -1 || tmpFilter[wordIndex] == 1) {
                __HEAD_SEARCH_WORDS_ARR.push(json[k]);
                __HEAD_SEARCH_WORDS_OBJ[json[k].text] = json[k];
            }
        }
        var inpt = $("#JS_MLL_search_header_input")[0];
        if (__HEAD_SEARCH_WORDS_ARR.length && inpt && inpt.value == "") {
            inpt.value = MLL_Header_search_words();
            inpt.setAttribute("data-sug", "none");
            inpt.onfocus = function() {
                this.value = "";
                this.onfocus = function() {};
            };
            inpt.onblur = function() {
                if (this.value == "") {
                    inpt.setAttribute("data-sug", "none");
                    this.value = MLL_Header_search_words();
                    this.onfocus = function() {
                        this.value = "";
                        this.onfocus = function() {};
                    };
                }
            };
        }
    }
}
function MLL_Header_search_words() {
    var b = __HEAD_SEARCH_WORDS_ARR,
    a = Math.floor(Math.random() * b.length);
    return b[a].text;
}
function MLL_header_search_submit() {
    var b = $("#JS_MLL_search_header_input")[0];
    var d = $("#JS_search_form")[0];
    var f = b.value + "";
    f = $.trim(f || "");
    var c = f;
    if (f && c.replace(/[^\x00-\xff]/g, "**").length < 31) {
        var e = $.cookie("search_h");
        if (e) {
            e = unescape(e);
            e = e.split("*#");
            e = a(e, f);
            if (e.length > 9) {
                e.shift();
            }
            e = e.join("*#");
            e += "*#" + f;
        } else {
            e = f + "*#";
        }
        e = escape(e);
        $.cookie("search_h", e, {
            path: "/",
            expires: 365
        });
    }
    function a(g, k) {
        var j = [];
        for (var h = 0; h < g.length; h++) {
            if (g[h] != k) {
                j.push(g[h]);
            }
        }
        return j;
    }
    if (!f) {
        return false;
    }
    if (window.__HEAD_SEARCH_WORDS_OBJ && __HEAD_SEARCH_WORDS_OBJ[f]) {
        location.href = __HEAD_SEARCH_WORDS_OBJ[f].href + (__HEAD_SEARCH_WORDS_OBJ[f].href.indexOf("#") >= 0 ? "&": "#") + "kw=" + encodeURIComponent(f);
        return false;
    } else {
        b.value = f;
        return true;
    }
}