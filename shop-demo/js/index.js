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
    //stairs_move(),
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
	   siteHoverEvent();
	   searchBarEvent();
});