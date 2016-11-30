function _show_(t, e) {
    if (t) {
        if (e && e.source && e.target) {
            var i = "string" == typeof e.source ? $("#" + e.source) : $(e.source),
            a = "string" == typeof e.target ? $("#" + e.target) : $(e.target),
            n = "string" == typeof e.data ? $("#" + e.data) : $(e.data);
            if (i.length && a.length && !a.isDone) {
                var o = $(i.val() || sourse.html());
                if (n.length && "function" == typeof e.templateFunction) {
                    var s = n.val() || n.html();
                    s = $.parseJSON(s),
                    o = e.templateFunction(o, s),
                    n.remove()
                }
                a.empty().append(o),
                i.remove(),
                "function" == typeof e.callback && e.callback(),
                a.isDone = !0
            }
        }
        if ($(t).addClass("hover"), e && e.isLazyLoad && t.isDone) {
            for (var r = t.find("img"), c = 0, l = r.length; c < l; c++) {
                var d = r[c].getAttribute("data-src_index_menu");
                d && (r[c].setAttribute("src", d), r[c].removeAttribute("data-src_index_menu"))
            }
            t.isDone = !0
        }
    }
}
function _hide_(t) {
    if (t) {
        var e = $(t);
        e.hasClass("hover") && e.removeClass("hover")
    }
}
function switchCityEvent() {
    $("#JS_hide_city_menu_11").hover(function() {
        _show_(this, {
            source: "JS_choose_city_source",
            target: "JS_header_city_bar_box",
            data: "JS_city_data",
            templateFunction: function(t, e) {
                if (t = t.jquery ? t: $(t), e) {
                    var i = "",
                    a = "<a href=\"/\" class=\"site_all Left\" onclick=\"$.goExpr('index.html','','','全国');window._gaq.push(['_trackEvent','2016版首页','成功切换城市','click']);return !1;\"><strong>全国</strong></a>&nbsp;",
                    n = "";
                    return $.each(e.city_list,
                    function(t, e) {
                        n += '<a href="javascript:;">' + t + "</a>",
                        i += "<tr><th><div>" + t + "</div></th><td>",
                        $.each(e,
                        function(t, e) {
                            if (!e.v && !e.is_virtual) {
                                var a = e.p || e.pinyin,
                                n = e.i || e.region_id,
                                o = e.n || e.region_name;
                                i += '<a href="/' + a + '/" data-region_id="' + n + '" data-pinyin="' + a + '" onclick="$.goExpr(\'' + a + "','" + n + "','','" + o + "');window._gaq.push(['_trackEvent','2016版首页','成功切换城市','click']);return !1;\">" + o + "</a>"
                            }
                        }),
                        i += "</td></tr>"
                    }),
                    $.each(e.host_city_list,
                    function(t, e) {
                        var i = e.p || e.pinyin,
                        n = e.i || e.region_id,
                        o = e.n || e.region_name;
                        a += '<a href="/' + i + '/" data-region_id="' + n + '" data-pinyin="' + i + '" onclick="$.goExpr(\'' + i + "','" + n + "','','" + o + "');window._gaq.push(['_trackEvent','2016版首页','成功切换城市','click']);return !1;\">" + o + "</a>"
                    }),
                    t.find("#JS_header_city_hot").html(a),
                    t.find("#JS_header_city_char").html(n),
                    t.find("#JS_header_city_list").html(i),
                    t
                }
            }
        }),
        City.init()
    },
    function() {
        _hide_(this)
    })
}
function siteHoverEvent() {
    $(".site-nav .drop-title").parent().on({
        mouseenter: function() {
            jQuery(this).addClass("hover")
        },
        mouseleave: function() {
            jQuery(this).removeClass("hover")
        }
    })
}
function addFavorite() {
    window._gaq = window._gaq || [],
    _gaq.push(["_trackEvent", "headerAddFavorite", location.href]);
    var t = window.location.href,
    e = document.title;
    try {
        window.external.addFavorite(t, e)
    } catch(i) {
        try {
            window.sidebar.addPanel(e, t, "")
        } catch(t) {
            alert("对不起，您的浏览器不支持此操作！\n请您使用菜单栏或Ctrl+D收藏本站。")
        }
    }
}
function exprCallBackNum(json) {
    if (json && json.html_content) {
        try {
            eval("json.html_content=" + json.html_content)
        } catch(t) {
            return void jQuery("#JS_head_scoll_phone_527").siblings("span.blank").remove()
        }
        if (!json) return;
        var o1 = $("#JS_mll_head_menu_expr"),
        o3 = $("#JS_Header_Home_Link"),
        o4 = $("#JS_Header_Logo_link_home");
        json.html_content && json.html_content.expr_count > 0 && json.html_content.pinyin ? (o1.attr("href", "/" + json.html_content.pinyin + "/expr.html").html('体验馆<img src="' + $.__IMG + '/images/common/site/hot.gif">'), o3.attr("href", "/" + json.html_content.pinyin + "/"), o4.attr("href", "/" + json.html_content.pinyin + "/")) : jQuery("#JS_head_scoll_phone_527").siblings("span.blank").remove();
        for (var len = exprCallBackNum.callFnArr.length,
        i = 0; i < len; i++) exprCallBackNum.callFnArr[i] && exprCallBackNum.callFnArr[i](json)
    } else jQuery("#JS_head_scoll_phone_527").siblings("span.blank").remove()
}
function searchBarEvent() {
    function t(t, e) {
        function i(t) {
            if (s += '<div data-target="search" class="Left hot-search"><h6 data-target="search">正在热搜中</h6><div data-target="search">', t) for (var e = 0; e < t.length; e++) if (t[e].name.length > 7) {
                var i = t[e].name.substring(0, 6) + "...";
                s += "<a onclick=\"window._gaq.push(['_trackEvent','2016美乐乐搜索','热门搜索','click']);\" target=\"_blank\" title=\"" + t[e].name + '" class="hot-product" href="' + t[e].url + '">' + i + "</a>"
            } else s += "<a onclick=\"window._gaq.push(['_trackEvent','2016美乐乐搜索','热门搜索','click']);\" target=\"_blank\" title=\"" + t[e].name + '" class="hot-product" href="' + t[e].url + '">' + t[e].name + "</a>";
            s += "</div></div>"
        }
        var a = $("#" + t),
        n = $("#" + e);
        if (!a.val()) {
            var o = $.cookie("search_h"),
            s = '<div data-target="search" class="Left h-search"><h6 data-target="search">最近搜过</h6>';
            if (o) {
                o = unescape(o);
                var r = o.split("*#");
                r = r.reverse();
                for (var c = 0; c < r.length; c++) s += "<a onclick=\"window._gaq.push(['_trackEvent','2016美乐乐搜索','搜索历史记录','click']);\" target=\"_blank\" href=\"/category-9999/?keywords=" + r[c] + '">' + r[c] + "</a>"
            } else s += "<h1>还没有搜索记录！</h1>";
            s += "</div>",
            window.HOTSearchWordDATA ? i(window.HOTSearchWordDATA) : $.ajax({
                url: "/solr_api/hotSearchWord/",
                type: "GET",
                dataType: "json",
                async: !1,
                success: function(t) {
                    HOTSearchWordDATA = t.hotSearchWordList,
                    i(t.hotSearchWordList)
                },
                error: function() {}
            }),
            n.append(s),
            n.show()
        }
    }
    $("#JS_MLL_search_header_input").click(function() {
        return t("JS_MLL_search_header_input", "JS_search_history"),
        jQuery.searchKey("JS_MLL_search_header_input", "JS_search_suggest", "JS_search_history"),
        $("#JS_MLL_search_header_input").unbind("click"),
        $(this).addClass("search-input-focus"),
        !1
    }),
    $("#JS_MLL_search_fixed_input").click(function() {
        t("JS_MLL_search_fixed_input", "JS_search_history2"),
        jQuery.searchKey("JS_MLL_search_fixed_input", "JS_search_fixed_suggest", "JS_search_history2"),
        $("#JS_MLL_search_fixed_input").unbind("click"),
        $(this).addClass("search-input-focus")
    }),
    $("body").on("click",
    function(t) {
        t = t || window.event;
        var e = t.target || t.srcElement;
        "search" != $(e).attr("data-target") && ($("#JS_search_history").hide(), $("#JS_search_history2").hide())
    }),
    jQuery(window).on("scroll",
    function() {
        var t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        t >= 658 ? (jQuery("#JS_search_fixed_bar").css("top", t + 41 + "px"), jQuery("#JS_menu_map_fix_box").css("top", t + 50 + "px"), jQuery("#Js_aSTotalContainer").addClass("show")) : (jQuery("#Js_aSTotalContainer").removeClass("show"), jQuery("#JS_search_history2").hide(), jQuery("#JS_MLL_search_fixed_input").blur()),
        jQuery("#JS_mll_menu_map_fix").removeClass("menu-map-hover")
    })
}
function _clickHotSearch(t) {
    return window._gaq && window._gaq.push(["_trackEvent", "热门搜索", "" + t.innerHTML, "" + t.href]),
    !0
}
function _clickSearchAd() {
    return window._gaq && window._gaq.push(["_trackEvent", "ad_click_gaca", "ad_click_gaco", "ad_click_搜索框左侧广告图_1"]),
    !0
}
function _INIT_HEAD_SEARCH(data) {
    var json;
    try {
        json = eval(data.html_content)
    } catch(t) {}
    if (json && json.length) {
        var url = location.pathname,
        wordIndex = -1,
        tmpFilter;
        window.__HEAD_SEARCH_WORDS_ARR = [],
        window.__HEAD_SEARCH_WORDS_OBJ = {},
        /\/jiaju\//.test(url) ? wordIndex = 0 : /\/jiancai\//.test(url) ? wordIndex = 1 : /\/shipin\//.test(url) && (wordIndex = 2);
        for (var k = 0,
        kk = json.length; k < kk; k++) tmpFilter = json[k].type.split(""),
        wordIndex != -1 && 1 != tmpFilter[wordIndex] || (__HEAD_SEARCH_WORDS_ARR.push(json[k]), __HEAD_SEARCH_WORDS_OBJ[json[k].text] = json[k]);
        var inpt = $("#JS_MLL_search_header_input")[0],
        inpt2 = $("#JS_MLL_search_fixed_input")[0];
        __HEAD_SEARCH_WORDS_ARR.length && inpt && "" == inpt.value && (inpt.value = MLL_Header_search_words(), inpt.setAttribute("data-sug", "none"), inpt.onfocus = function() {
            this.value = "",
            this.onfocus = function() {}
        },
        inpt.onblur = function() {
            "" == this.value && (inpt.setAttribute("data-sug", "none"), this.value = MLL_Header_search_words(), this.onfocus = function() {
                this.value = "",
                this.onfocus = function() {}
            })
        }),
        __HEAD_SEARCH_WORDS_ARR.length && inpt2 && "" == inpt2.value && (inpt2.value = MLL_Header_search_words(), inpt2.setAttribute("data-sug", "none"), inpt2.onfocus = function() {
            this.value = "",
            this.onfocus = function() {}
        },
        inpt2.onblur = function() {
            "" == this.value && (inpt2.setAttribute("data-sug", "none"), this.value = MLL_Header_search_words(), this.onfocus = function() {
                this.value = "",
                this.onfocus = function() {}
            })
        })
    }
}
function MLL_Header_search_words() {
    var t = __HEAD_SEARCH_WORDS_ARR,
    e = Math.floor(Math.random() * t.length);
    return t[e].text
}
function MLL_header_search_submit(t) {
    function e(t, e) {
        for (var i = [], a = 0; a < t.length; a++) t[a] != e && i.push(t[a]);
        return i
    }
    var i = "",
    a = $("#JS_MLL_search_header_input")[0],
    n = ($("#JS_search_form")[0], $("#JS_MLL_search_fixed_input")[0]);
    i = t ? n.value + "": a.value + "",
    i = $.trim(i || "");
    var o = i;
    if (i && o.replace(/[^\x00-\xff]/g, "**").length < 31) {
        var s = $.cookie("search_h");
        s ? (s = unescape(s), s = s.split("*#"), s = e(s, i), s.length > 9 && s.shift(), s = s.join("*#"), s += "*#" + i) : s = i + "*#",
        s = escape(s),
        $.cookie("search_h", s, {
            path: "/",
            expires: 30
        })
    }
    return !! i && (t && window._ana && window._ana.push(["trackEvent", "jjc_xfss", "click", "点击悬浮搜索框"]), window.__HEAD_SEARCH_WORDS_OBJ && __HEAD_SEARCH_WORDS_OBJ[i] ? (window.open(__HEAD_SEARCH_WORDS_OBJ[i].href + (__HEAD_SEARCH_WORDS_OBJ[i].href.indexOf("#") >= 0 ? "&": "#") + "kw=" + encodeURIComponent(i)), !1) : (t ? n.value = i: a.value = i, !0))
}
function DY_cart_detail_nav_cb(t) {
    Cart.goodsList = 1,
    Cart.saleLimit = t.saleLimit || 100;
    var e = t.goods_list.length;
    e > 0 && (Cart.formatData(t) || {},
    Cart.info.goodsData = t.goods_list),
    Cart.update()
}
function menuEvent() {
    var t = $("#JS_mll_menu_map"),
    e = $("#JS_mll_menu_map_fix"),
    i = {
        activate: function(e) {
            var i = $(e);
            if (!i.data("imgLoaded")) {
                var a = i.find(".sub img");
                a.prop("src", a.attr("menu-lazy-src")).removeAttr("menu-lazy-src"),
                i.data("imgLoaded", 1)
            }
            i.addClass("hover").find(".sub").stop().animate({
                "padding-left": "10px",
                opacity: "1"
            },
            200),
            window._ana && window._ana.push(["trackEvent", "jjc_zcdhnew", "mouseover", "新家具城菜单鼠标移入"]),
            window._gaq && window._gaq.push(["_trackEvent", "jjc_zcdhnew", "mouseover", "新家具城菜单鼠标移入"]);
            var n = !-[1] && !window.XMLHttpRequest;
            n && (i.hasClass("large-class") ? t.css("width", "975px") : t.css("width", "845px"))
        },
        deactivate: function(t) {
            var e = $(t);
            e.removeClass("hover").find(".sub").stop().animate({
                "padding-left": 0,
                opacity: ".8"
            },
            200)
        },
        rowSelector: "li.map-item",
        exitMenu: function(e) {
            var e = $(e),
            i = e.find(".hover");
            i.find(".sub");
            i.find("em").stop().animate({
                "padding-left": 0,
                opacity: 0
            },
            200),
            i.removeClass("hover");
            var a = !-[1] && !window.XMLHttpRequest;
            a && t.css("width", "200px")
        },
        firstDelay: 100
    };
    t.menu(i),
    e.menu(i),
  /*  _ipad_from ? $("#JS_menu_fix_btn").click(function() {
        e.hasClass("menu-map-hover") ? e.removeClass("menu-map-hover") : e.addClass("menu-map-hover")
    }) : */
    ($("#JS_menu_fix_btn").hover(function() {
        e.addClass("menu-map-hover")
    },
    function() {
        window._fixMenuTimer = setTimeout(function() {
            e.removeClass("menu-map-hover")
        },
        1500)
    }), e.hover(function() {
        _fixMenuTimer && clearTimeout(window._fixMenuTimer),
        e.hasClass("menu-map-hover") || e.addClass("menu-map-hover")
    },
    function() {
        e.removeClass("menu-map-hover")
    }))
}
function actFloor() {
    function t(t) {
        var e = $(".activity-floor .JS_act_bk"),
        a = [],
        n = {};
        e.each(function() {
            a.push($(this).data("goodsid")),
            n[$(this).data("goodsid")] = $(this)
        }),
        a.length && $.ajax({
            url: "/mll_api/api/goods_actbonus?goods_id=" + a.join("*"),
            dataType: "json",
            cache: !1,
            success: function(t) {
                if (t) if (a.length > 1) for (var o in t)"function" != typeof o && (i[o] = {
                    type: "bk"
                },
                i[o].obj = new ActItem(n[o], t[o] && 0 == t[o].error ? {
                    start: t[o].data.act.start,
                    end: t[o].data.act.end
                }: null));
                else 0 == t.error && (i[a[0]] = {
                    type: "bk"
                },
                i[a[0]].obj = new ActItem(e, 0 == t.error ? {
                    start: t.data.act.start,
                    end: t.data.act.end
                }: null))
            }
        })
    }
    function e() {
        var t, e, a = {},
        n = [],
        o = [];
        $(".activity-floor .JS_act_item").each(function() {
            t = $(this).data("acttype"),
            e = $(this).data("actid"),
            e = e && "0" != e ? e: $(this).data("goodsid"),
            "bk" != t && (a[t] = a[t] || [], a[t].push(e), o.push({
                id: e,
                type: t,
                dom: $(this)
            }))
        });
        for (var s in a)"function" != typeof s && n.push('"' + s + '":"' + a[s].join("*") + '"');
        if (n.length) {
            n = encodeURIComponent("{" + n.join(",") + "}");
            $.ajax({
                url: "/mll_api/api/act_goods_info?goods_act=" + n,
                dataType: "json",
                cache: !1,
                success: function(t) {
                    if (t) for (var e in o) {
                        var a = o[e];
                        i[a.id] = {
                            type: a.type
                        },
                        i[a.id].obj = new ActItem(a.dom, t[a.type] && t[a.type][a.id] ? t[a.type][a.id] : null)
                    }
                }
            })
        }
    }
    var i = {};
    t(),
    e(),
    setInterval(function() {
        for (var t in i)"function" != typeof t && (i[t].obj.actTimer && clearInterval(i[t].obj.actTimer), i[t].obj[i[t].type + "UnixtimeGoods"] ? i[t].obj[i[t].type + "UnixtimeGoods"].call(i[t].obj) : i[t].obj.usualUnixtimeGoods())
    },
    6e4)
}
function initFloors() {
    $(".JS_floor_banner").each(function(t) {
        var e = new floor_slide({
            content: $(this).find(".content"),
            li: $(this).find(".JS_ul_banner li"),
            nav: $(this).find(".JS_list_banner a"),
            prev: $(this).find(".prev"),
            next: $(this).find(".next"),
            divbox: $(this),
            img: $(this).find(".JS_ul_banner li img")
        });
        e.init(0)
    })
}
function floor_slide(t) {
    this.main = t.main,
    this.content = t.content,
    this.Li = t.li,
    this.num = this.Li.length,
    this.nav = t.nav,
    this.prev = t.prev,
    this.next = t.next,
    this.banCont = t.divbox,
    this.timer = null,
    this.imgs = t.img,
    this.init = function(t) {
        this.column(t),
        this.addEve(),
        this.clickNavE()
    },
    this.column = function(t) {
        var e = this;
        e.focusImg(t),
        e.navE(t),
        e.timer = setInterval(function() {
            e.floorSlideLock || (t++, t > e.num - 1 && (t = 0), e.focusImg(t), e.navE(t), e.lazyImg(t))
        },
        4e3)
    },
    this.focusImg = function(t) {
        var e = !-[1],
        i = this;
        i.main && jQuery("#JS_mll_scroll_bar").css("background", "#" + i.Li.eq(t).data("bgcolor"));
        for (var a = 0,
        n = i.num; a < n; a++) e ? i.Li.eq(a).css({
            opacity: 0,
            zIndex: 0
        }).addClass("none") : i.Li.eq(a).animate({
            opacity: 0
        },
        200,
        function() {
            jQuery(this).css("zIndex", 0).addClass("none")
        }),
        i.content && (e ? i.content.eq(a).css("opacity", 0).addClass("none") : i.content.eq(a).animate({
            opacity: 0
        },
        200,
        function() {
            jQuery(this).addClass("none")
        }));
        i.Li.eq(t).removeClass("none"),
        i.Li.eq(t).css("zIndex", 2),
        i.content && (i.content.eq(t).removeClass("none"), e ? i.content.eq(t).css("opacity", 1) : i.content.eq(t).stop(!0).animate({
            opacity: 1
        },
        200)),
        e ? i.Li.eq(t).css("opacity", 1) : i.Li.eq(t).stop(!0).animate({
            opacity: 1
        },
        200)
    },
    this.navE = function(t) {
        this.nav.each(function() {
            jQuery(this).removeClass("hover")
        }),
        this.nav.eq(t).addClass("hover")
    },
    this.clickNavE = function() {
        var t = this;
        this.prev.length && this.banCont.hover(function() {
            t.prev.show(),
            t.next.show()
        },
        function() {
            t.prev.hide(),
            t.next.hide()
        }),
        this.prev.click(function() {
            var e = 0;
            return t.nav.each(function() {
                jQuery(this).hasClass("hover") && (e = jQuery(this).index())
            }),
            0 == e ? e = t.num - 1 : e -= 1,
            t.focusImg(e),
            t.navE(e),
            window._ana && window._ana.push(["trackEvent", "jjc_fglc", "click", "家具城楼层大图切换"]),
            window._gaq && window._gaq.push(["_trackEvent", "jjc_fglc", "click", "家具城楼层大图切换"]),
            !1
        }),
        this.next.click(function() {
            var e = 0;
            return t.nav.each(function() {
                jQuery(this).hasClass("hover") && (e = jQuery(this).index())
            }),
            e == t.num - 1 ? e = 0 : e += 1,
            t.focusImg(e),
            t.navE(e),
            window._ana && window._ana.push(["trackEvent", "jjc_fglc", "click", "家具城楼层大图切换"]),
            window._gaq && window._gaq.push(["_trackEvent", "jjc_fglc", "click", "家具城楼层大图切换"]),
            !1
        })
    },
    this.delay = function(t, e) {
        var i = 0,
        a = 10,
        t = 1e3 * t / a,
        n = this,
        o = setInterval(function() {
            i++,
            i == a && (clearInterval(o), e.apply(n))
        },
        t);
        n.onmouseout = function() {
            clearInterval(o)
        }
    },
    this.lazyImg = function(t) {
        var e = this.imgs.eq(t).attr("lazy-src");
        if (this.main) {
            var i = this.imgs.eq(t).next().attr("lazy-src");
            this.imgs.next().eq(t).attr("src", i).removeAttr("lazy-src")
        }
        e && this.imgs.eq(t).attr("src", e).removeAttr("lazy-src")
    },
    this.addEve = function() {
        var t = this;
        t.nav.each(function(e) {
            jQuery(this).on("mouseover",
            function() {
                window.VBArray ? (t.navE(), $(this).addClass("hover"), $(this).hasClass("hover") && (t.focusImg(e), t.lazyImg(e))) : t.delay.apply(this, [.18,
                function() {
                    t.navE(),
                    $(this).addClass("hover"),
                    $(this).hasClass("hover") && (t.focusImg(e), t.lazyImg(e))
                }])
            })
        }),
        t.banCont.on({
            mouseover: function() {
                t.floorSlideLock = !0
            },
            mouseout: function() {
                t.floorSlideLock = !1
            }
        })
    }
}
function arrayFilter(t, e) {
    var i;
    for (var a in t) if ("function" != typeof a && e < t[a]) {
        i = a;
        break
    }
    return i || 99
}
function stairs_show() {
    var t = document.body.clientWidth,
    e = window.LOAD ? 1460 : 1190,
    i = t - e,
    a = jQuery(window).height();
    i < 160 ? jQuery("#JS_default_stairs").addClass("none") : jQuery("#JS_default_stairs").removeClass("none"),
    a > 550 && jQuery(".default_stairs_w").css("top", (a - 500) / 2 + "px")
}
function stairs_move() {
    var t = $("#JS_default_stairs"),
    e = t.find("a"),
    i = [];
    $(".JS_floor").each(function(t) {
        i.push(Math.ceil($(this).offset().top - 200))
    }),
    i.push(i[i.length - 1] + 500),
    $(window).on("scroll",
    function() {
        var a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        t.removeClass("out"),
        a >= 600 ? ( - [1] ? t.css({
            transform: "scale(1)",
            opacity: 1
        }) : t.show(), t.find(".stairs-cover").addClass("none"), stairs_show()) : ( - [1] ? t.css({
            transform: "scale(1.2)",
            opacity: 0
        }) : t.hide(), t.find(".stairs-cover").removeClass("none"));
        var n = arrayFilter(i, a);
        void 0 == n && ( - [1] ? t.css({
            transform: "scale(1.2)",
            opacity: 0
        }) : t.hide(), t.find(".stairs-cover").removeClass("none")),
        e.each(function() {
            jQuery(this).removeClass("current")
        }),
        n < 1 ? e.eq(0).addClass("current") : e.eq(n - 1).addClass("current")
    }),
    t.on("mouseover", "a",
    function() {
        jQuery(this).addClass("hover")
    }).on("mouseout", "a",
    function() {
        jQuery(this).removeClass("hover")
    }).on("click", "a",
    function() {
        if (window._ana && window._ana.push(["trackEvent", "jjc_zclcdh", "click", "家具城左导航点击"]), window._gaq && window._gaq.push(["_trackEvent", "jjc_zclcdh", "click", "家具城左导航鼠标点击"]), !$(this).hasClass("floor-link")) {
            var t = $(this).index();
            window.scroll(0, i[t])
        }
    })
}
function getGuessLike() {
    if (0 != $("#JS_maylike_ul").length) {
        var t = $.cookie("utag") || "",
        e = "/jiaju/";
        $.ajax({
            url: "/solr_api/recommend/listpage/?userTags=" + t + "&pageUrl=" + e + "&pageSize=20",
            type: "GET",
            dataType: "json",
            success: function(t) {
                if (t && t.goods && t.goods.length) {
                    for (var e, i = $("#JS_maylike_ul li"), a = [], n = 0; n < t.goods.length; n++) e = t.goods[n],
                    a = '<a href="' + e.goods_uri + '?from=cnxh" target="_blank" title="' + e.new_goods_name + '"><img class="d-img" src="' + $.__IMG + "/" + (e.goods_thumb_2 || e.goods_thumb_1) + '" alt="' + e.new_goods_name + '"></a><div class="maylike-item-name"><a href="' + e.goods_uri + '?from=cnxh" target="_blank" title="' + e.new_goods_name + '" class="d-name">' + e.new_goods_name + '</a></div><div class="red maylike-item-prize">&yen;<span data-goods_id="' + e.id + '">' + e.show_price + "</span></div>",
                    i.get(n).innerHTML = a;
                    i.each(function(t) {
                        var e = ""; (t + 1) % 4 == 0 && (e = "last4"),
                        (t + 1) % 5 == 0 && (e += " last5"),
                        $(this).attr("class", e)
                    })
                }
            },
            complete: function() {
                $("#JS_maylike_change").click(function() {
                    var t = $("#JS_maylike_ul").height(),
                    e = $("#JS_maylike_ul li").height();
                    marginTop = parseInt($("#JS_maylike_ul").css("marginTop")),
                    t + marginTop - e > 0 ? $("#JS_maylike_ul").css("marginTop", marginTop - e + "px") : $("#JS_maylike_ul").css("marginTop", 0),
                    window._ana && window._ana.push(["trackEvent", "jjc_cnxh", "click", "家具城猜你喜欢切换"]),
                    window._gaq && window._gaq.push(["_trackEvent", "jjc_cnxh", "click", "家具城猜你喜欢切换"])
                })
            }
        })
    }
} !
function(t, e) {/*
    function i(t, e) {
        if (!t) return "";
        for (var i = 0,
        a = [], n = 0, o = t.length; n < o; n++) {
            var s = t.charAt(n);
            if (s.charCodeAt(0) > 255 ? i += 2 : i++, !(i <= e)) return a.join("");
            a.push(s)
        }
        return a.join("")
    }
    var a = e.cookie("region_name");
    a && (e("#DY_site_name").html(a.slice(0, 4) + "站"), "广州" == a.slice(0, 4) && jQuery("#JS_mll_head_menu_dz").html('<a target="_blank" title="定制家居" href="http://dz.meilele.com/">定制家居<img src="http://image.meilele.com/images/new2015.gif" /></a>').show());
    var n = "1" == e.cookie("meilele_login") && e.cookie("ECS[username]");
    n && (e.ajax({
        type: "POST",
        url: "/dubbo_api/mll/stationMsg/getMsgCount",
        dataType: "json",
        success: function(t) {
            t && 0 == t.error ? e(".JS_mes_num").text(t.count).show() : e(".JS_mes_num").hide()
        },
        error: function() {
            e(".JS_mes_num").hide()
        }
    }), e("#JS_head_login").html('<li class="fl banner"><a target="_blank" class="login-name" href="/user/" title="' + n + '">' + i(n, 16) + '</a><a target="_blank" class="u-message" href="/user/?act=news">消息&nbsp;<i class="i-cyc JS_mes_num">0</i></a><a href="javascript:;" class="login-out" id="JS_login_out">[退出]</a></li>'));
    var o = new Image; (!/ECS_ID\=/.test(t.cookie) || /autoLogin\=/.test(t.cookie) && !/meilele_login=1/.test(t.cookie)) && (o.src = "/ecsid_maker/?_=" + (new Date).getTime()),
    e("#JS_login_out").on("click",
    function() {
        e.ajax({
            url: "/user/?act=logout",
            type: "get",
            cache: !1,
            dataType: "json",
            success: function(t) {
                return 0 == t.error ? (window.location.reload(), !1) : void e.alert("注销失败，请重试！")
            },
            error: function() {
                e.alert("网络异常，请重试！")
            }
        })
    })
*/} (document, jQuery),
function(t) {
    function e(e) {
        var i = t(this),
        a = null,
        n = [],
        o = null,
        s = null,
        r = null,
        c = t.extend({
            rowSelector: "> li",
            submenuSelector: "*",
            submenuDirection: "right",
            tolerance: 75,
            enter: t.noop,
            exit: t.noop,
            activate: t.noop,
            deactivate: t.noop,
            exitMenu: t.noop,
            firstDelay: 0
        },
        e),
        l = 3,
        d = 300,
        h = function(t) {
            n.push({
                x: t.pageX,
                y: t.pageY
            }),
            n.length > l && n.shift()
        },
        u = function() {
            clearTimeout(r),
            s && clearTimeout(s),
            c.exitMenu(this) && a && c.deactivate(a),
            a = null
        },
        _ = function() { ! a && clearTimeout(r)
        },
        m = function(t) {
            s && clearTimeout(s),
            c.enter(this),
            g(this)
        },
        f = function(t) {
            c.exit(this)
        },
        p = function(t) {
            v(this),
            t.stopPropagation()
        },
        v = function(t) {
            function e(t) {
                c.activate(t),
                a = t
            }
            clearTimeout(r),
            a && c.deactivate(a),
            !a && c.firstDelay ? r = setTimeout(function() {
                e(t)
            },
            c.firstDelay) : e(t)
        },
        g = function(t) {
            var e = y();
            e ? s = setTimeout(function() {
                g(t)
            },
            e) : v(t)
        },
        y = function() {
            function e(t, e) {
                return (e.y - t.y) / (e.x - t.x)
            }
            if (!a || !t(a).is(c.submenuSelector)) return 0;
            var s = i.offset(),
            r = {
                x: s.left,
                y: s.top - c.tolerance
            },
            l = {
                x: s.left + i.outerWidth(),
                y: r.y
            },
            h = {
                x: s.left,
                y: s.top + i.outerHeight() + c.tolerance
            },
            u = {
                x: s.left + i.outerWidth(),
                y: h.y
            },
            _ = n[n.length - 1],
            m = n[0];
            if (!_) return 0;
            if (m || (m = _), m.x < s.left || m.x > u.x || m.y < s.top || m.y > u.y) return 0;
            if (o && _.x == o.x && _.y == o.y) return 0;
            var f = l,
            p = u;
            "left" == c.submenuDirection ? (f = h, p = r) : "below" == c.submenuDirection ? (f = u, p = h) : "above" == c.submenuDirection && (f = r, p = l);
            var v = e(_, f),
            g = e(_, p),
            y = e(m, f),
            b = e(m, p);
            return v < y && g > b ? (o = _, d) : (o = null, 0)
        };
        i.on("mouseleave", u).on("enter", _).find(c.rowSelector).on("mouseenter", m).on("mouseleave", f).on("click", p),
        t(document).mousemove(h)
    }
    jQuery.fn.menu = function(t) {
        return this.each(function() {
            e.call(this, t)
        }),
        this
    }
} (jQuery),
exprCallBackNum.callFnArr = [],
window.HOTSearchWordDATA = null;
var car_number = 0,
Cart = {};
Cart.init = function() {
    Cart.handdler = $("#JS_cart"),
    Cart.Dom = Cart.handdler.find("#JS_cart_list"),
    Cart.number = Cart.handdler.find("#JS_cart_num"),
    Cart.countArea = Cart.handdler.find("#JS_count_area"),
    Cart.countNum = Cart.handdler.find("#JS_cart_count"),
    Cart.sum = Cart.handdler.find("#JS_count_total"),
    Cart._isIE = !-[1],
    Cart.info = {
        goodsData: [],
        sum: 0,
        goodsNumber: 0,
        giftsNumber: 0,
        kindsNumber: 0
    },
    Cart.number.html($.cookie("cart_number") || 0)
},
Cart.isLogin = function() {
    return "1" == $.cookie("meilele_login") || $.cookie("ECS[username]")
},
Cart.show = function() {
    function t(t) {
        Cart.goodsList || (Cart.Dom.html("")[0].className = "cart-list", Cart.countArea.addClass("none"), Cart.getCartInfo(null, t))
    }
    Cart.isLogin() && !Cart.moveToCollect.moved ? Cart.moveToCollect(t) : t(),
    Cart.handdler.addClass("hover"),
    Cart._isIE && Cart.handdler.find(".cart-arrow").addClass("cart-arrow-ie")
},
Cart.getCartInfo = function(t, e) {
    Cart.info = {
        goodsData: [],
        sum: 0,
        goodsNumber: 0,
        giftsNumber: 0,
        kindsNumber: 0
    };
    var i = {};
    e && e.length && (i.filterGoodsIds = e.join("!")),
    jQuery.ajax({
        url: "/mll_api/api/cart_info",
        dataType: "json",
        cache: !1,
        data: i,
        success: function(e) {
            DY_cart_detail_nav_cb(e),
            t && t(e)
        }
    })
},
Cart.setCartNum = function(t) {
    jQuery.cookie("cart_number", t || 0)
},
Cart.hide = function() {
    Cart.handdler.removeClass("hover"),
    Cart._isIE && Cart.handdler.find(".cart-arrow").removeClass("cart-arrow-ie")
},
Cart.del = function(t, e) {
    function i(t, e) {
        for (var i = Cart.info,
        a = 0; a < t.length; a++) {
            var n = t[a],
            o = e[n].index,
            s = e[n].num || 0,
            r = e[n].price || 0,
            c = s * r,
            l = $(".JS_cart_list_gift_" + n);
            l.each(function(t) {
                var e = parseInt(l.eq(t).attr("data-num"));
                i.giftsNumber -= e
            }),
            $("#JS_cart_list_index_" + o).remove(),
            l.remove(),
            i.goodsNumber -= s,
            i.kindsNumber--,
            i.sum -= c
        }
        Cart.update()
    }
    var a = t || window.event,
    n = a.target || a.srcElement;
    e && (n = e);
    var o = $(n);
    if (!o.hasClass("Cart_del")) return ! 1;
    var s = o.attr("data-index"),
    r = o.attr("data-rec_id"),
    c = o.attr("data-num"),
    l = o.attr("data-goods_price"),
    d = o.attr("data-act_id"),
    h = [],
    u = {};
    if (d > 0) {
        var _ = Cart.Dom.find(".JS_cart_list_act_" + d);
        _.each(function(t, e) {
            var i = $(this),
            a = i.data("rec_id"),
            n = i.data("index"),
            o = i.data("num");
            h.push(a),
            u[a] = {
                index: n,
                num: o,
                price: 0
            }
        })
    } else h.push(r),
    u[r] = {
        index: s,
        num: c,
        price: l
    }; ! Cart.inDelAjax && h.length > 0 && (Cart.inDelAjax = !0, $.ajax({
        url: "/add_cart/?step=dropGoods&ajax=1&goods=" + h.join("|"),
        type: "GET",
        dataType: "json",
        success: function(t) {
            0 == t.error ? i(h, u) : this.error()
        },
        error: function() {
            alert("删除失败，请稍后再试！")
        },
        complete: function() {
            Cart.inDelAjax = !1
        }
    }))
},
Cart.formatData = function(t) {
    for (var e = Cart.info,
    i = t.goods_list,
    a = 0,
    n = 0,
    o = [], s = 0, r = i.length; s < r; s++) {
        var c = i[s].goods_thumb_1 ? i[s].goods_thumb_1: i[s].goods_thumb;
        o.push('<li id="JS_cart_list_index_' + s + '" class="' + ("newgift" != i[s].goods_activity_type ? "": "JS_cart_list_gift_" + i[s].activity_par_id) + (i[s].price_activity_id > 0 ? " JS_cart_list_act_" + i[s].price_activity_id: "") + 'clearfix cart-item" data-num="' + i[s].goods_number + '" data-rec_id="' + i[s].rec_id + '" data-index="' + s + '">'),
        o.push('<a class="cart-img" href="' + i[s].url + '" target="_blank" title="' + i[s].goods_name + '"><img class="fl" src="http://image.meilele.com/' + c + '" alt="' + i[s].goods_name + '" width="86" height="57" ></a>'),
        o.push('<a target="_blank" class="cart-link" title="' + i[s].goods_name + '" href="' + i[s].url + '">' + i[s].goods_name + "</a>"),
        "newgift" != i[s].goods_activity_type ? (o.push('<p class="cart-cal clearfix"><a data-goods_id="' + i[s].goods_id + '" class="fr black Cart_del" href="javascript:void(0)" data-index="' + s + '" data-rec_id="' + i[s].rec_id + '" data-num="' + i[s].goods_number + '" data-goods_price="' + i[s].goods_price + '" data-act_id="' + (i[s].price_activity_id || 0) + '">删除</a><span class="red" id="JS_danjia' + s + '">&yen;' + i[s].goods_price + '</span>×<span class="black">' + i[s].goods_number + "</span></p>"), e.goodsNumber += i[s].goods_number - 0, e.kindsNumber++, e.sum += (i[s].goods_number || 0) * (i[s].goods_price || 0)) : (o.push('<p class="cart-cal clearfix"><strong style="margin-left:12px"><span class="cl red">赠品</span>&times;' + i[s].goods_number + "</strong></p>"), n += parseInt(i[s].goods_number) || 0, e.giftsNumber += i[s].goods_number - 0),
        o.push("</li>"),
        a += parseInt(i[s].goods_number) || 0
    }
    return Cart.Dom.html(o.join("")),
    Cart.update(),
    e
},
Cart.goPreCheckOut = function() {
    jQuery.showLoginBox(function() {
        location.href = "/flow/?step=pre_checkout&rel=header"
    })
},
Cart.moveToCollect = function(t) {
    Cart.countArea.find(".cart-tip").remove(),
    jQuery.ajax({
        url: "/add_cart/?step=insertCollect",
        type: "GET",
        dataType: "JSON",
        cache: !1,
        success: function(e) {
            if (e && "0" == e.error && e.moveToCollect && e.moveToCollect.length) {
                var i = e.moveToCollect,
                a = [],
                n = [];
                n.push('<div class="cart-tip"><span class="red"><b>提示：</b>购物车里有' + i.length + '件商品被移入收藏夹</span><p class="tip-content">');
                for (var o = 0,
                s = i.length; o < s; o++) o < 3 && n.push('<a target="_blank" class="tip-link" href="' + i[o].goodsLink + '">' + i[o].goodsName + "</a>"),
                a.push(i[o].goodsId);
                n.push('</p><a href="/user/?act=collection_list" target="_blank" class="red">查看收藏夹&gt;&gt;</a></div>'),
                Cart.countArea.append(n.join("")),
                t && t(a)
            } else this.error();
            Cart.moveToCollect.moved = !0
        },
        error: function() {
            t && t([]),
            Cart.moveToCollect.moved = !1
        }
    })
},
Cart.update = function(t) {
    var t = t || Cart.info,
    e = Number(t.goodsNumber || 0) + Number(t.giftsNumber || 0);
    if (0 == e) return Cart.setCartNum(0),
    Cart.number.html(0),
    Cart.Dom.html('<li class="nothing"><b class="common-bg nothing-icon"></b>&nbsp;购物车中还没有商品，赶紧选购吧！</li>'),
    Cart.countArea.addClass("none"),
    void Cart.Dom.removeClass("cart-full");
    Cart.number.html(e),
    Cart.countNum.html(e),
    Cart.sum.html("&yen;" + Number(t.sum || 0).toFixed(2)),
    Cart.Dom.addClass("cart-full"),
    Cart.countArea.removeClass("none"),
    Cart.setCartNum(e);
    var i = Cart.Dom.find(".cart-item").length;
    Cart.Dom.addClass("cart-full" + (i > 2 ? 3 : i)),
    0 == i && (Cart.Dom[0].className = "cart-list")
};
var AutoPlay = function() {
    this.initialize()
};
AutoPlay.prototype = {
    initialize: function() {
        var t = this;
        this.oBox = $("#JS_mll_scroll_bar"),
        this.oUl = $("#JS_mll_scroll_bar .scroll-content"),
        this.oLi = $("#JS_mll_scroll_bar .scroll-item"),
        this.timer = null,
        this.autoTimer = null,
        this.iNow = 0,
        this.aBtn = $("#JS_mll_scroll_bar .scroll-btn span"),
        this.autoTimer = setInterval(function() {
            t.next()
        },
        4e3),
        this.oBox.mouseenter(function() {
            clearInterval(t.autoTimer)
        }),
        this.oBox.mouseleave(function() {
            t.autoTimer = setInterval(function() {
                t.next()
            },
            4e3)
        });
        for (var e = 0; e < this.aBtn.length; e++) this.aBtn[e].index = e,
        this.aBtn[e].onmouseover = function() {
            this.index != t.iNow && (t.iNow = this.index, t.toggle())
        }
    },
    toggle: function() {
        for (var t = 0; t < this.aBtn.length; t++) this.aBtn[t].className = "";
        this.aBtn[this.iNow].className = "current",
        this.lazy(this.iNow),
        this.doShow(this.iNow)
    },
    next: function() {
        this.iNow++,
        this.iNow == this.aBtn.length && (this.iNow = 0),
        this.toggle()
    },
    lazy: function(t) {
        var e = this.oLi.eq(t);
        e.data("imgLoaded") || (e.find("img").each(function() {
            jQuery(this).prop("src", $(this).attr("lazy-src")).removeAttr("lazy-src")
        }), e.data("imgLoaded", 1))
    },
    doShow: function(t) {
        var e = this;
        e.oLi.addClass("none"),
        e.oLi.fadeOut(500),
        e.oLi.eq(t).fadeIn(500)
    }
};
var ActItem = function(t, e) {
    this.actDom = t,
    this.info = e,
    this.actType = t.data("acttype"),
    this.goodsId = t.data("goodsid"),
    this.actBtn = t.find(".JS_act_btn"),
    this.effpriceDom = t.find(".JS_effect_price"),
    this.delpriceDom = t.find(".JS_del_price"),
    this.actDescDom = t.find(".JS_act_desc"),
    this.timeDescDom = t.find(".JS_time_desc"),
    this.timeCountDom = t.find(".JS_time_count"),
    this.actid = t.data("actid"),
    this.actid = this.actid && "0" != this.actid ? this.actid: this.goodsId,
    this.timeHtml = '<span class="time">$H</span>:<span class="time">$M</span>:<span class="time">$S</span>',
    this.initAct()
};
ActItem.prototype = {
    constructor: ActItem,
    initAct: function() {
        this.info ? (this.info.current_time = this.info.current_time || parseInt(new Date / 1e3), this.info.diffTime = parseInt((new Date).getTime() / 1e3) - parseInt(this.info.current_time), this[this.actType + "BtnEvent"] ? (this[this.actType + "BtnEvent"].call(this), this[this.actType + "UnixtimeGoods"].call(this)) : (this.usualBtnEvent.call(this), this.usualUnixtimeGoods.call(this))) : (this[this.actType + "BtnEvent"] || this.usualBtnEvent.call(this), this.info = {},
        this.timeDescDom.text("距结束"), this.actBtn.text("已结束").attr("class", "act-btn act-disable JS_act_btn").prev().addClass("disable"), this.timeCountDom.html(this.timeHtml.replace("$H", "00").replace("$M", "00").replace("$S", "00")))
    },
    refresh: function() {
        var t = this.actType,
        e = this.actid,
        i = '{"' + t + '":"' + e + '"}',
        a = this;
        $.ajax({
            url: "/mll_api/api/act_goods_info?goods_act=" + encodeURIComponent(i),
            dataType: "json",
            cache: !1,
            success: function(i) {
                if (i && i[t] && i[t][e]) {
                    var n = i[t][e];
                    a.actTimer && clearInterval(a.actTimer),
                    n ? (a.info = n, a.info.diffTime = parseInt((new Date).getTime() / 1e3) - parseInt(a.info.current_time) - 1, a[a.actType + "UnixtimeGoods"] ? a[a.actType + "UnixtimeGoods"].call(a) : a.usualUnixtimeGoods.call(a)) : (a.actBtn.text("已结束").attr("class", "act-btn act-disable JS_act_btn").prev().addClass("disable"), a.timeCountDom.html(a.timeHtml.replace("$H", "00").replace("$M", "00").replace("$S", "00")))
                }
            }
        })
    },
    usualBtnEvent: function() {
        this.actDom.on("click", ".JS_act_btn",
        function() {
            return window.open($(this).data("url")),
            !1
        })
    },
    bkBtnEvent: function() {
        var t = this;
        this.actDom.on("click", ".JS_bk_tx",
        function() {
            $.ajax({
                url: "/mll_api/api/goods_actbonus?goods_id=" + t.goodsId,
                type: "get",
                success: function(e) {
                    e && e.data.act_id && $.sendActGoods(null, {
                        chooseExpr: !1,
                        isNeedImgChap: "1",
                        type: "get_bk_tx",
                        unique: e.data.act_id,
                        click: "家具城爆款特惠订阅",
                        prize_id: e.data.act_id + "_" + t.goodsId
                    })
                },
                error: function() {
                    alert("数据连接失败，请重试！")
                }
            })
        }).on("click", ".JS_bk_kq",
        function() {
            $.ajax({
                url: "/mll_api/api/goods_actbonus?goods_id=" + t.goodsId,
                type: "get",
                success: function(e) {
                    if (e && e.data.act_id) {
                        var i = new Date(1e3 * e.data.start),
                        a = new Date(1e3 * e.data.end);
                        i = i.getFullYear() + "." + (i.getMonth() + 1) + "." + i.getDate(),
                        a = a.getFullYear() + "." + (a.getMonth() + 1) + "." + a.getDate(),
                        $.sendActGoods(null, {
                            type: "get_limited_prize",
                            unique: e.data.act_id,
                            checkPhone: !0,
                            click: "家具城爆款特惠领取",
                            gaEvent: "jjc_bk_yhq",
                            prize_id: e.data.act_id + "_" + t.goodsId,
                            title: "领取红包",
                            qm_time: i + "-" + a,
                            use_time: i + "-" + a
                        })
                    }
                },
                error: function() {
                    alert("数据连接失败，请重试！")
                }
            })
        })
    },
    pmBtnEvent: function() {
        var t = this;
        this.actDom.on("click", ".JS_pm_now",
        function() {
            var t = $(this).data("url");
            return window.open(t),
            !1
        }).on("click", ".JS_pm_bm",
        function() {
            $.sendActGoods(null, {
                type: "get_pm_bm",
                prize_id: t.actid,
                click: "家具城拍卖订阅",
                extSendSucCB: function() {
                    t.refresh()
                }
            })
        })
    },
    tgBtnEvent: function() {
        var t = this;
        this.actDom.on("click", ".JS_tg_bm",
        function() {
            $.sendActGoods(null, {
                chooseExpr: !1,
                checkPhone: !0,
                notice: "<b>温馨提示：</b>最终团购价以活动开始后的价格为准，该价格不能享受满减和红包优惠。",
                type: "get_tg_bm",
                captcha_type: "tg_baoming",
                prize_id: t.actid,
                click: "家具城团购订阅",
                extSendSucCB: function() {
                    t.refresh()
                }
            })
        }).on("click", ".JS_tg_tx",
        function() {
            $.sendActGoods(null, {
                chooseExpr: !1,
                checkPhone: !0,
                notice: "<b>温馨提示：</b>团购开始时，我们将会通过短信或电话的方式通知您。",
                type: "get_tg_tx",
                captcha_type: "tg_baoming",
                prize_id: t.actid,
                click: "家具城团购订阅",
                extSendSucCB: function() {
                    t.refresh()
                }
            })
        }).on("click", ".JS_tg_now",
        function() {
            var t = $(this).data("url");
            return window.open(t),
            !1
        })
    },
    msBtnEvent: function() {
        var t = this;
        this.actDom.on("click", ".JS_ms_todetail",
        function() {
            return window.open($(this).data("url")),
            !1
        }).on("click", ".JS_ms_bm",
        function() {
            $.cookie("ECS[username]") && "1" == $.cookie("meilele_login") ? $.sendActGoods(null, {
                chooseExpr: !1,
                checkPhone: !0,
                type: "get_ms_tx",
                act_id: t.actid,
                click: "家具城秒杀开抢提醒",
                extSendSucCB: function() {
                    t.refresh()
                }
            }) : $.showLoginBox(function() {
                location.reload()
            })
        }).on("click", ".JS_ms_now",
        function() {
            var e = $(this);
            e.hasClass("click-submit") || (e.addClass("click-submit"), $.cookie("ECS[username]") && "1" == $.cookie("meilele_login") ? $.ajax({
                url: "/dispose/?act=start_buy&id=" + t.actid,
                type: "GET",
                dataType: "json",
                success: function(e) {
                    if (e) if (0 === e.error) {
                        var i = $('<form action="/action-sec_buy-' + t.actid + '.html" method="post" target="_self"><input type="hidden" name="check_key" value="' + e.msg + '"></form>');
                        i.appendTo($("body")),
                        i[0].submit(),
                        i.remove()
                    } else 2 == e.error ? $.alert(e.msg + '<br/>点击参与<a href="' + e.url + '" class="orange">下期秒杀</a>吧', {
                        onOk: function() {
                            window.location.href = e.url
                        }
                    }) : 1 == e.error && e.flag ? "waiting" == e.flag ? $.alert(e.msg) : $.cookie("meilele_login", "") : 1 == e.future ? $.alert(e.msg + '<br/>点击参与<a href="/miaosha/future.html" class="orange">下期秒杀</a>吧') : $.alert(e.msg)
                },
                complete: function() {
                    e.removeClass("click-submit")
                }
            }) : $.showLoginBox(function() {
                location.reload()
            }))
        })
    },
    usualUnixtimeGoods: function() {
        this.info.current_time = parseInt(new Date / 1e3) - this.info.diffTime,
        this.info.leftTimeTopic = this.info.start_time - this.info.current_time,
        !this.info.start_time || this.info.leftTimeTopic <= 0 ? (this.timeDescDom.text("距结束"), this.info.leftTimeTopic = this.info.end_time - this.info.current_time, this.interval.call(this)) : (this.info.leftTimeTopic--, this.interval.call(this, this.usualUnixtimeGoods))
    },
    bkUnixtimeGoods: function() {
        var t = (new Date).getTime(),
        e = this;
        this.info.leftTimeTopic = parseInt(this.info.start - t / 1e3),
        this.info.leftTimeTopic <= 0 ? (this.timeDescDom.text("距结束"), this.actBtn.text("立即领取").removeClass("JS_bk_tx").addClass("JS_bk_kq"), this.info.leftTimeTopic = parseInt(this.info.end - t / 1e3), this.interval.call(this)) : (this.actBtn.text("开抢提醒").addClass("JS_bk_tx"), this.info.leftTimeTopic--, this.interval.call(this,
        function() {
            e.timeDescDom.text("距结束"),
            e.actBtn.text("立即领取").removeClass("JS_bk_tx").addClass("JS_bk_kq"),
            e.info.leftTimeTopic = parseInt(e.info.end - e.info.start) - 1,
            e.interval.call(e)
        }))
    },
    pmUnixtimeGoods: function() {
        var t = this;
        this.effpriceDom.html("&yen;" + this.info.current_price),
        this.delpriceDom.html("&yen;" + this.info.shop_price),
        this.info.current_time = parseInt((new Date).getTime() / 1e3) - this.info.diffTime,
        "1" == this.info.h_is_Forbid || "3" == this.info.auction_status ? (this.timeDescDom.text("距结束"), this.actDescDom.text("已竞价" + this.info.h_auction_log_num + "次"), this.actBtn.text("已结束").addClass("act-disable").prev().addClass("disable")) : 2 == this.info.auction_status ? (this.info.leftTimeTopic = parseInt(this.info.start_time) - this.info.current_time - 1, this.effpriceDom.html("&yen;" + this.info.start_price + '<span class="gray">(起拍价)</span>'), this.actBtn.text("我要报名").addClass("JS_pm_bm"), this.actDescDom.text("已报名" + this.info.h_auction_user_num + "人"), this.interval.call(this,
        function() {
            t.info.leftTimeTopic = parseInt(t.info.end_time) - parseInt(t.info.start_time),
            t.timeDescDom.text("距结束"),
            t.actDescDom.text("已竞价" + t.info.h_auction_log_num + "次"),
            t.actBtn.text("竞价中").attr("class", "act-btn JS_pm_now"),
            t.interval.call(t)
        })) : 1 == this.info.auction_status && (this.info.leftTimeTopic = parseInt(this.info.end_time) - this.info.current_time - 1, this.timeDescDom.text("距结束"), this.actDescDom.text("已竞价" + this.info.h_auction_log_num + "次"), this.actBtn.text("竞价中").attr("class", "act-btn JS_pm_now"), this.interval.call(this))
    },
    tgUnixtimeGoods: function() {
        var t = this;
        this.effpriceDom.html("&yen;" + this.info.min_price),
        this.delpriceDom.html("&yen;" + this.info.h_shop_price),
        this.info.current_time = parseInt((new Date).getTime() / 1e3) - this.info.diffTime,
        this.info.leftTimeTopic = parseInt(this.info.start_time) - this.info.current_time,
        1 == this.info.h_is_Forbid || "1" != this.info.h_is_on_sale ? (this.timeDescDom.text("距结束"), this.actBtn.text("已结束").attr("class", "act-btn act-disable JS_act_btn").prev().addClass("disable")) : this.info.left_number <= 0 ? (this.timeDescDom.text("距结束"), this.actBtn.text("已售完").attr("class", "act-btn act-disable").prev().addClass("disable")) : this.info.leftTimeTopic > 0 ? (1 == this.info.is_need_apply ? this.actBtn.text("我要报名").addClass("JS_tg_bm") : this.actBtn.text("开团通知").addClass("JS_tg_tx"), this.interval.call(this,
        function() {
            t.timeDescDom.text("距结束"),
            t.actBtn.text("立即参团").attr("class", "act-btn JS_tg_now"),
            t.info.leftTimeTopic = parseInt(t.info.end_time) - parseInt(t.info.start_time),
            t.interval.call(t)
        })) : (this.info.leftTimeTopic = parseInt(this.info.end_time) - this.info.current_time - 1, this.info.leftTimeTopic <= 0 ? (this.actBtn.text("已结束").attr("class", "act-btn act-disable JS_act_btn").prev().addClass("disable"), this.timeCountDom.html(this.timeHtml.replace("$H", "00").replace("$M", "00").replace("$S", "00"))) : (this.timeDescDom.text("距结束"), this.actBtn.text("立即参团").attr("class", "act-btn JS_tg_now"), this.interval.call(this)))
    },
    msUnixtimeGoods: function() {
        var t = this;
        this.effpriceDom.html("&yen;" + this.info.max_price),
        this.delpriceDom.html("&yen;" + this.info.shop_price),
        this.actDescDom.html("已报名" + this.info.join_count + "人"),
        this.info.current_time = parseInt((new Date).getTime() / 1e3) - this.info.diffTime;
        var e = this.info.bstatus;
        6 == e || 5 == e || 1 == this.info.h_is_Forbid ? (this.timeDescDom.text("距结束"), this.actBtn.text("已结束").addClass("act-disable").prev().addClass("disable")) : 2 == e ? (this.actBtn.text("未开始").addClass("JS_ms_todetail").removeClass("JS_ms_bm"), this.info.leftTimeTopic = parseInt(this.info.starttime) - this.info.current_time - 1, this.interval.call(this,
        function() {
            t.info.leftTimeTopic = parseInt(t.info.endtime) - parseInt(t.info.starttime),
            t.timeDescDom.text("距结束"),
            t.actBtn.text("马上秒杀").removeClass("JS_ms_todetail").addClass("JS_ms_now"),
            t.interval.call(t)
        })) : 1 == e ? (this.actBtn.text("报名参与").addClass("JS_ms_bm"), this.info.leftTimeTopic = parseInt(this.info.starttime) - this.info.current_time - 1, this.info.leftTimeTopic <= 0 ? (this.timeDescDom.text("距结束"), this.info.leftTimeTopic = +this.info.remain_time, this.interval.call(this)) : this.interval.call(this,
        function() {
            t.info.leftTimeTopic = parseInt(t.info.endtime) - parseInt(t.info.starttime),
            t.timeDescDom.text("距结束"),
            3 == t.info.bstatus && t.actBtn.text("马上秒杀").removeClass("JS_ms_bm").addClass("JS_ms_now"),
            t.interval.call(t)
        })) : 3 != e && 4 != e || (this.timeDescDom.text("距结束"), this.info.leftTimeTopic = parseInt(this.info.endtime) - this.info.current_time - 1, this.actBtn.text("马上秒杀").addClass("JS_ms_now"), this.interval.call(this))
    },
    interval: function(t) {
        var e = this;
        return this.actTimer && clearInterval(this.actTimer),
        isNaN(e.info.leftTimeTopic) ? (this.actBtn.text("已结束").attr("class", "act-btn act-disable JS_act_btn").prev().addClass("disable"), void this.timeCountDom.html(this.timeHtml.replace("$H", "00").replace("$M", "00").replace("$S", "00"))) : void(this.actTimer = setInterval(function() {
            if (e.info.leftTimeTopic <= 0) return clearInterval(e.actTimer),
            void(t && "function" == typeof t ? t.call(e) : (e.actBtn.text("已结束").attr("class", "act-btn act-disable JS_act_btn").prev().addClass("disable"), e.timeCountDom.html(e.timeHtml.replace("$H", "00").replace("$M", "00").replace("$S", "00"))));
            var i = e.info.leftTimeTopic,
            a = i % 60;
            a < 10 && (a = "0" + a);
            var n = parseInt(i % 3600 / 60);
            n < 10 && (n = "0" + n);
            var o = parseInt(i / 3600);
            e.timeCountDom.html(e.timeHtml.replace("$H", o).replace("$M", n).replace("$S", a)),
            e.info.leftTimeTopic--
        },
        1e3))
    }
},
/*$(window).load(function() {
    $.lazyImg.start("both"),
    getGuessLike()
}),*/
$(document).ready(function() {
    $("img").load(function() {
        $(this).animate({
            opacity: "1"
        },
        200)
    }),
    $(window).resize(function() {
        var t = document.body.clientWidth;
        t < 1460 ? $("body").removeClass("root-body") : $("body").hasClass("root-body") || $("body").addClass("root-body")
    }),
    stairs_move(),
    $.saleNumUpdate && $.saleNumUpdate([{
        selector: ".JS_async_price",
        type: "price",
        param: "id",
        key: "show_price",
        isInt: !0
    }],
    function() {
        $(".JS_suit_main").each(function() {
            var t = $(this).data("goods_id"),
            e = this.innerHTML - 0;
            suitGPrice = 0,
            $(".JS_suit_sub_" + t).each(function(t) {
                var e = +$(this).data("goods_num") || 1;
                suitGPrice += Number(this.innerHTML) * e
            }),
            0 == (suitGPrice - e).toFixed(0) && $(".JS_suit_discount_" + t).parent().hide().parents(".suit-prize").addClass("suit-prize-nodis"),
            $(".JS_suit_discount_" + t).html((suitGPrice - e).toFixed(0))
        })
    }),
    new AutoPlay,
    menuEvent(),
    siteHoverEvent(),
    //$("#JS_cart").hover(Cart.show, Cart.hide),
    //Cart.init(),
    //switchCityEvent(),
    searchBarEvent(),
    //actFloor(),
    //initFloors(),
   /* $.tab($("#JS_tab_nav_colloc li"), $("#JS_tab_body_colloc .tBody"), {
        lazy: !1
    }),*/
    $("#JS_tab_nav_colloc li").each(function() {
        $(this).on("mouseover",
        function() {
            window._ana && window._ana.push(["trackEvent", "jjc_dpzn", "click", "家具城搭配指南切换"]),
            window._gaq && window._gaq.push(["_trackEvent", "jjc_dpzn", "click", "家具城搭配指南切换"])
        })
    });
    var t = $("#link_fri"),
    e = $("#more_fri");
    e.length && e.click(function() {
        e.hide(),
        t.find(".link-hide").removeClass("link-hide")
    })
});

