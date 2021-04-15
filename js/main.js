$(window).width() > 1050 && (jQuery(document).ready(function (a) {
    var once1 = !1;
    $("body").on("click", ".s-item a, .s-item2 a, .s-img img", function () {
        $(window).off('DOMMouseScroll mousewheel', D)
    });
    $("body").on("click", ".modal", function () {
        $(window).on('DOMMouseScroll mousewheel', D)
    });
    var e = a("body").data("hijacking")
        , t = a("body").data("animation")
        , i = 0
        , n = 1
        , o = 1
        , s = !1
        , l = a(".cd-section")
        , c = a(".cd-vertical-nav")
        , r = c.find("a.cd-prev")
        , d = c.find("a.cd-next")
        , f = E()
        , u = !1;

    function v(i, n) {
        var o, s, c, f, u, v, m;
        "desktop" == i && n ? ("on" == e ? (o = l.filter(".visible"),
            s = o.prevAll(".cd-section"),
            c = o.nextAll(".cd-section"),
            f = R(t, !1),
            u = f[0],
            v = f[1],
            m = f[2],
            o.children("div").velocity(u, 1, function () {
                o.css("opacity", 1),
                    s.css("opacity", 1),
                    c.css("opacity", 1)
            }),
            s.children("div").velocity(v, 0),
            c.children("div").velocity(m, 0),
            a(window).on("DOMMouseScroll mousewheel", D)) : (p(),
            a(window).on("scroll", p)),
            r.on("click", k),
            d.on("click", I),
            a(document).on("keydown", function (e) {
                "40" != e.which || d.hasClass("inactive") ? "38" == e.which && (!r.hasClass("inactive") || r.hasClass("inactive") && a(window).scrollTop() != l.eq(0).offset().top) && (e.preventDefault(),
                    k()) : (e.preventDefault(),
                    I())
            }),
            S()) : "mobile" == i && (l.children("div").each(function () {
            a(this).attr("style", "")
        }),
            a(window).off("DOMMouseScroll mousewheel", D),
            a(window).off("scroll", p),
            r.off("click", k),
            d.off("click", I),
            a(document).off("keydown"))
    }

    function p() {
        window.requestAnimationFrame ? window.requestAnimationFrame(x) : x()
    }

    v(f, !0),
        a(window).on("resize", function () {
            v(f = E(), u),
            "mobile" == f && (u = !0),
            "desktop" == f && (u = !1)
        });
    var m = 0
        , h = window.location.hash;
    if ("" != h) {
        !function (e) {
            var i = l.index(a(e));
            if (i + 1 == o)
                return;
            var n = o > i + 1 ? 2 : 1
                , c = l.filter(".visible")
                , r = R(t, !1, "next");
            c.removeClass("visible").children("div").velocity(r[n], r[3], r[4]),
                l.eq(i).addClass("visible").children("div").velocity(r[0], r[3], r[4], function () {
                    s = !1
                }),
                o = i + 1
        }(h)
    }

    function z() {
        a('.title_second').addClass('animated fadeIn opac');
        a("#service .first-b .sb_txt").addClass("animated bounceInUp opac").animate({
            opacity: 1
        }, 300, function () {
            a("#service .second-b .sb_txt").addClass("animated bounceInUp opac").animate({
                opacity: 1
            }, 300, function () {
                a("#service .third-b .sb_txt").addClass("animated bounceInUp opac").animate({
                    opacity: 1
                }, 300)
            })
        })
    }

    function w() {
        a("#equipment .bk").addClass("animated fadeIn opac"),
            a("#equipment .eq_left").addClass("animated fadeInLeft opac"),
            a("#equipment .eq_right").addClass("animated fadeInRight opac");
    }

    function y() {
        a("#about .bk").addClass("animated fadeIn opac"),
            a("#about .la_left").addClass("animated fadeInLeft opac"),
            a("#about .la_right").addClass("animated fadeInRight opac");
        setTimeout(function () {
            a(".img_anim1 img").addClass("animated zoomIn opac").animate({
                opacity: 1
            }, 1e3, function () {
                a(".txt_anim1").addClass("animated fadeInRight opac").animate({
                    opacity: 1
                }, 1e3)
            }),
                a(".img_anim2 img").addClass("animated zoomIn opac").animate({
                    opacity: 1
                }, 1e3, function () {
                    a(".txt_anim2").addClass("animated fadeInLeft opac").animate({
                        opacity: 1
                    }, 1e3)
                })
        }, 800)
    }


    function cd() {
        a("#license .bk").addClass("animated fadeIn opac"),
            a("#license .order_license").addClass("animated bounceInUp opac")
    }


    function pos() {
        a(".contact_title").addClass("animated fadeIn opac"),
            a("#contacts .cw1").addClass("animated bounceInLeft opac"),
            a("#contacts .cw2").addClass("animated bounceInRight opac")
    }

    function b() {
        a("#advantages .bk").addClass("animated fadeIn opac"),
            a("#advantages .info-block").addClass("animated fadeIn"),
            a("#advantages .left-line").addClass("animated fadeInLeft"),
            a("#advantages .right-line").addClass("animated fadeInRight"),
            a("#advantages .info-block-text").addClass("animated fadeIn"),
            a("#advantages .pp").addClass("animated fadeIn"),
            a("#advantages .i-1").addClass("animated fadeIn"),
            a("#advantages .t-1").addClass("animated fadeIn").animate({
                opacity: 1
            }, 1e3, function () {
                a("#advantages .i-2").addClass("animated fadeIn"),
                    a("#advantages .t-2").addClass("animated fadeIn").animate({
                        opacity: 1
                    }, 1e3, function () {
                        a("#advantages .i-3").addClass("animated fadeIn"),
                            a("#advantages .t-3").addClass("animated fadeIn").animate({
                                opacity: 1
                            }, 1e3, function () {
                                a("#advantages .i-4").addClass("animated fadeIn"),
                                    a("#advantages .t-4").addClass("animated fadeIn").animate({
                                        opacity: 1
                                    }, 1e3)
                            })
                    })
            })
        setTimeout(function () {
            if (!once1) {
                once1 = !0;
                var once = !1;
                function ggg() {
                    animateOn(1);
                    once = !0
                }
                ggg();
                function animateOn(activeTxt) {
                    if (activeTxt == 1) {
                        activeTxt = 2
                    }
                    if (activeTxt == 6) {
                        activeTxt = 1;
                        animateOn(activeTxt + 1)
                    }
                    if (once && activeTxt == 1) {
                        return
                    }
                    if (activeTxt == 2) {
                        $('.item_img[data-id=' + activeTxt + '] img').addClass('animated wobble')
                    } else if (activeTxt == 3) {
                        $('.item_img[data-id=' + activeTxt + '] img').addClass('animated tada')
                    } else if (activeTxt == 4) {
                        $('.item_img[data-id=' + activeTxt + '] img').addClass('animated rubberBand')
                    } else if (activeTxt == 5) {
                        $('.item_img[data-id=' + activeTxt + '] img').addClass('animated bounce')
                    }
                    setTimeout(function () {
                        $('.item_img[data-id=' + activeTxt + '] img').removeClass('animated bounce tada rubberBand wobble');
                        if (!once && activeTxt == 1) {
                            return
                        }
                        animateOn(activeTxt + 1)
                    }, 1500)
                }
            }
        }, 4000)
    }

    function g() {
        a("#clients .bk").addClass("animated fadeIn opac"),
            a("#clients .list_clients").addClass("animated bounceInUp opac")
    }


    function x() {
        var e = a(window).scrollTop()
            , i = a(window).height();
        a(window).width();
        l.each(function () {
            var n, o, s, l, c, r, d = a(this), f = e - d.offset().top, u = function (a, e, t) {
                var i = 1
                    , n = 100
                    , o = "0deg"
                    , s = 1
                    , l = 0;
                if (a >= -e && a <= 0)
                    switch (n = 100 * -a / e,
                        t) {
                        case "scaleDown":
                            i = 1,
                                s = 1;
                            break;
                        case "rotate":
                            n = 0;
                            break;
                        case "gallery":
                            a >= -e && a < -.9 * e ? (i = -a / e,
                                n = 100 * -a / e,
                                l = 400 * (1 + a / e)) : a >= -.9 * e && a < -.1 * e ? (i = .9,
                                n = -9 / 8 * (a + .1 * e) * 100 / e,
                                l = 40) : (i = 1 + a / e,
                                n = 0,
                                l = -400 * a / e);
                            break;
                        case "catch":
                            a >= -e && a < -.75 * e ? (n = 100,
                                l = 160 * (1 + a / e)) : (n = -10 / 7.5 * a * 100 / e,
                                l = -160 * a / (3 * e));
                            break;
                        case "opacity":
                            n = 0,
                                i = .2 * (a + 5 * e) / e,
                                s = (a + e) / e
                    }
                else if (a > 0 && a <= e)
                    switch (n = 100 * -a / e,
                        t) {
                        case "scaleDown":
                            i = (1 - .3 * a / e).toFixed(5),
                                s = (1 - a / e).toFixed(5),
                                n = 0,
                                l = a / e * 40;
                            break;
                        case "rotate":
                            s = (1 - a / e).toFixed(5),
                                o = 90 * a / e + "deg",
                                n = 0;
                            break;
                        case "gallery":
                            a >= 0 && a < .1 * e ? (i = (e - a) / e,
                                n = -a / e * 100,
                                l = 400 * a / e) : a >= .1 * e && a < .9 * e ? (i = .9,
                                n = -9 / 8 * (a - .1 * e / 9) * 100 / e,
                                l = 40) : (i = a / e,
                                n = -100,
                                l = 400 * (1 - a / e));
                            break;
                        case "catch":
                            l = a >= 0 && a < e / 2 ? 80 * a / e : 80 * (1 - a / e);
                            break;
                        case "opacity":
                            n = 0,
                                i = .2 * (a + 5 * e) / e,
                                s = (e - a) / e;
                            break;
                        case "fixed":
                            n = 0;
                            break;
                        case "parallax":
                            n = 50 * -a / e
                    }
                else if (a < -e)
                    switch (n = 100,
                        t) {
                        case "scaleDown":
                            i = 1,
                                s = 1;
                            break;
                        case "gallery":
                            i = 1;
                            break;
                        case "opacity":
                            n = 0,
                                i = .8,
                                s = 0
                    }
                else
                    switch (n = -100,
                        t) {
                        case "scaleDown":
                            i = 0,
                                s = .7,
                                n = 0;
                            break;
                        case "rotate":
                            n = 0,
                                o = "90deg";
                            break;
                        case "gallery":
                            i = 1;
                            break;
                        case "opacity":
                            n = 0,
                                i = 1.2,
                                s = 0;
                            break;
                        case "fixed":
                            n = 0;
                            break;
                        case "parallax":
                            n = -50
                    }
                return [n, i, o, s, l]
            }(f, i, t);
            n = d.children("div"),
                o = u[0],
                s = u[1],
                l = u[2],
                c = u[3],
                r = u[4],
                n.velocity({
                    translateY: o + "vh",
                    scale: s,
                    rotateX: l,
                    opacity: c,
                    boxShadowBlur: r + "px",
                    translateZ: 0
                }, 0),
                f >= 0 && f < i ? d.addClass("visible") : d.removeClass("visible")
        }),
            S()
    }

    function D(a) {
        return a.originalEvent.detail < 0 || a.originalEvent.wheelDelta > 0 ? (i--,
        Math.abs(i) >= n && k()) : ++i >= n && I(),
            !1
    }

    function k(i) {
        void 0 !== i && i.preventDefault();
        var n = l.filter(".visible")
            , c = "off" == e && a(window).scrollTop() != n.offset().top;
        n = c ? n.next(".cd-section") : n;
        var r = R(t, c, "prev");
        Y(n.prev(".cd-section"), r[3]),
        s || n.is(":nth-child(2)") || (s = !0,
            n.removeClass("visible").children("div").velocity(r[2], r[3], r[4]).end().prev(".cd-section").addClass("visible").children("div").velocity(r[0], r[3], r[4], function () {
                s = !1,
                1 == --m && z(), 2 == m && w(), 3 == m ? y() : 4 == m ? b() : 5 == m ? cd() : 6 == m ? g() : 7 == m && pos()
                "off" == e && a(window).on("scroll", p)
            }),
            o -= 1),
            U()
    }


    function I(i) {
        void 0 !== i && i.preventDefault();
        var n = l.filter(".visible")
            , c = "off" == e && a(window).scrollTop() != n.offset().top
            , r = R(t, c, "next");
        Y(n.next(".cd-section"), r[3]),
        s || n.is(":last-of-type") || (s = !0,
            n.removeClass("visible").children("div").velocity(r[1], r[3], r[4]).end().next(".cd-section").addClass("visible").children("div").velocity(r[0], r[3], r[4], function () {
                1 == ++m && z(), 2 == m && w(), 3 == m ? y() : 4 == m ? b() : 5 == m ? cd() : 6 == m ? g() : 7 == m && pos(),
                    s = !1,
                "off" == e && a(window).on("scroll", p)
            }),
            o += 1),
            U()
    }

    function Y(i, n) {
        "off" == e && (a(window).off("scroll", p),
            "catch" == t ? a("body, html").scrollTop(i.offset().top) : i.velocity("scroll", {
                duration: n
            }))
    }

    function U() {
        i = 0,
            S()
    }

    function S() {
        l.filter(".visible").is(":first-of-type") ? r.addClass("inactive") : r.removeClass("inactive"),
            l.filter(".visible").is(":last-of-type") ? d.addClass("inactive") : d.removeClass("inactive")
    }

    function E() {
        return window.getComputedStyle(document.querySelector("body"), "::before").getPropertyValue("content").replace(/"/g, "").replace(/'/g, "")
    }

    function R(a, t, i) {
        var n = "translateNone"
            , o = "translateUp"
            , s = "translateDown"
            , l = "ease"
            , c = 800;
        switch (a) {
            case "scaleDown":
                o = "scaleDown",
                    l = "easeInCubic";
                break;
            case "rotate":
                "off" == e ? (o = "rotation.scroll",
                    s = "translateNone") : (o = "rotation",
                    l = "easeInCubic");
                break;
            case "gallery":
                c = 1500,
                    t ? (o = "scaleDown.moveUp.scroll",
                        n = "scaleUp.moveUp.scroll",
                        s = "scaleDown.moveDown.scroll") : (n = "next" == i ? "scaleUp.moveUp" : "scaleUp.moveDown",
                        o = "scaleDown.moveUp",
                        s = "scaleDown.moveDown");
                break;
            case "catch":
                n = "translateUp.delay";
                break;
            case "opacity":
                c = 700,
                    o = "hide.scaleUp",
                    s = "hide.scaleDown";
                break;
            case "fixed":
                o = "translateNone",
                    l = "easeInCubic";
                break;
            case "parallax":
                o = "translateUp.half",
                    l = "easeInCubic"
        }
        return [n, o, s, c, l]
    }

    a(".menu-nav a").click(function (e) {
        e.preventDefault(),
            a(".menu").removeClass("animated fadeInLeft").addClass("animated fadeOutLeft").fadeOut(),
            function (e) {
                var i = l.index(a(e));
                if (i + 1 == o)
                    return;
                var n = o > i + 1 ? 2 : 1
                    , c = l.filter(".visible")
                    , r = R(t, !1, "prev");
                c.removeClass("visible").children("div").velocity(r[n], r[3], r[4]),
                    l.eq(i).addClass("visible").children("div").velocity(r[0], r[3], r[4], function () {
                        s = !1
                    }),
                    o = i + 1
            }(a(this).attr("href"));
        var i = a(this).attr("href");
        "#service" == i && (z(),
            m = 1),
        "#equipment" == i && (w(),
            m = 2),
        "#about" == i && (y(),
            m = 3),
        "#advantages" == i && (b(),
            m = 4),
        "#license" == i && (cd(),
            m = 5),
        "#clients" == i && (g(),
            m = 6),
        "#contacts" == i && (pos(),
            m = 7)
    }),
    "#service" == h && (z(),
        m = 1),
    "#equipment" == h && (w(),
        m = 2),
    "#about" == h && (y(),
        m = 3),
    "#advantages" == h && (b(),
        m = 4),
    "#license" == h && (cd(),
        m = 5),
    "#clients" == h && (g(),
        m = 6),
    "#contacts" == i && (pos(),
        m = 7)
}),
    $.Velocity.RegisterEffect("translateUp", {
        defaultDuration: 1,
        calls: [[{
            translateY: "-100%"
        }, 1]]
    }),
    $.Velocity.RegisterEffect("translateDown", {
        defaultDuration: 1,
        calls: [[{
            translateY: "100%"
        }, 1]]
    }),
    $.Velocity.RegisterEffect("translateNone", {
        defaultDuration: 1,
        calls: [[{
            translateY: "0",
            opacity: "1",
            scale: "1",
            rotateX: "0",
            boxShadowBlur: "0"
        }, 1]]
    }),
    $.Velocity.RegisterEffect("scaleDown", {
        defaultDuration: 1,
        calls: [[{
            opacity: "0",
            scale: "0.7",
            boxShadowBlur: "40px"
        }, 1]]
    }),
    $.Velocity.RegisterEffect("rotation", {
        defaultDuration: 1,
        calls: [[{
            opacity: "0",
            rotateX: "90",
            translateY: "-100%"
        }, 1]]
    }),
    $.Velocity.RegisterEffect("rotation.scroll", {
        defaultDuration: 1,
        calls: [[{
            opacity: "0",
            rotateX: "90",
            translateY: "0"
        }, 1]]
    }),
    $.Velocity.RegisterEffect("scaleDown.moveUp", {
        defaultDuration: 1,
        calls: [[{
            translateY: "-10%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .2], [{
            translateY: "-100%"
        }, .6], [{
            translateY: "-100%",
            scale: "1",
            boxShadowBlur: "0"
        }, .2]]
    }),
    $.Velocity.RegisterEffect("scaleDown.moveUp.scroll", {
        defaultDuration: 1,
        calls: [[{
            translateY: "-100%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .6], [{
            translateY: "-100%",
            scale: "1",
            boxShadowBlur: "0"
        }, .4]]
    }),
    $.Velocity.RegisterEffect("scaleUp.moveUp", {
        defaultDuration: 1,
        calls: [[{
            translateY: "90%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .2], [{
            translateY: "0%"
        }, .6], [{
            translateY: "0%",
            scale: "1",
            boxShadowBlur: "0"
        }, .2]]
    }),
    $.Velocity.RegisterEffect("scaleUp.moveUp.scroll", {
        defaultDuration: 1,
        calls: [[{
            translateY: "0%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .6], [{
            translateY: "0%",
            scale: "1",
            boxShadowBlur: "0"
        }, .4]]
    }),
    $.Velocity.RegisterEffect("scaleDown.moveDown", {
        defaultDuration: 1,
        calls: [[{
            translateY: "10%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .2], [{
            translateY: "100%"
        }, .6], [{
            translateY: "100%",
            scale: "1",
            boxShadowBlur: "0"
        }, .2]]
    }),
    $.Velocity.RegisterEffect("scaleDown.moveDown.scroll", {
        defaultDuration: 1,
        calls: [[{
            translateY: "100%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .6], [{
            translateY: "100%",
            scale: "1",
            boxShadowBlur: "0"
        }, .4]]
    }),
    $.Velocity.RegisterEffect("scaleUp.moveDown", {
        defaultDuration: 1,
        calls: [[{
            translateY: "-90%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .2], [{
            translateY: "0%"
        }, .6], [{
            translateY: "0%",
            scale: "1",
            boxShadowBlur: "0"
        }, .2]]
    }),
    $.Velocity.RegisterEffect("translateUp.delay", {
        defaultDuration: 1,
        calls: [[{
            translateY: "0%"
        }, .8, {
            delay: 100
        }]]
    }),
    $.Velocity.RegisterEffect("hide.scaleUp", {
        defaultDuration: 1,
        calls: [[{
            opacity: "0",
            scale: "1.2"
        }, 1]]
    }),
    $.Velocity.RegisterEffect("hide.scaleDown", {
        defaultDuration: 1,
        calls: [[{
            opacity: "0",
            scale: "0.8"
        }, 1]]
    }),
    $.Velocity.RegisterEffect("translateUp.half", {
        defaultDuration: 1,
        calls: [[{
            translateY: "-50%"
        }, 1]]
    }));