!function(a) {
    function b() {
        mkd.scroll = a(window).scrollTop(),
        mkd.body.hasClass("mkd-dark-header") && (mkd.defaultHeaderStyle = "mkd-dark-header"),
        mkd.body.hasClass("mkd-light-header") && (mkd.defaultHeaderStyle = "mkd-light-header")
    }
    function c() {}
    function d() {
        mkd.windowWidth = a(window).width(),
        mkd.windowHeight = a(window).height()
    }
    function e() {
        mkd.scroll = a(window).scrollTop()
    }
    switch (window.mkd = {},
    mkd.modules = {},
    mkd.scroll = 0,
    mkd.window = a(window),
    mkd.document = a(document),
    mkd.windowWidth = a(window).width(),
    mkd.windowHeight = a(window).height(),
    mkd.body = a("body"),
    mkd.html = a("html, body"),
    mkd.htmlEl = a("html"),
    mkd.menuDropdownHeightSet = !1,
    mkd.defaultHeaderStyle = "",
    mkd.minVideoWidth = 1500,
    mkd.videoWidthOriginal = 1280,
    mkd.videoHeightOriginal = 720,
    mkd.videoRatio = 1280 / 720,
    mkd.mkdOnDocumentReady = b,
    mkd.mkdOnWindowLoad = c,
    mkd.mkdOnWindowResize = d,
    mkd.mkdOnWindowScroll = e,
    a(document).ready(b),
    a(window).load(c),
    a(window).resize(d),
    a(window).scroll(e),
    !0) {
    case mkd.body.hasClass("mkd-grid-1300"):
        mkd.boxedLayoutWidth = 1350;
        break;
    case mkd.body.hasClass("mkd-grid-1200"):
        mkd.boxedLayoutWidth = 1250;
        break;
    case mkd.body.hasClass("mkd-grid-1000"):
        mkd.boxedLayoutWidth = 1050;
        break;
    case mkd.body.hasClass("mkd-grid-800"):
        mkd.boxedLayoutWidth = 850;
        break;
    default:
        mkd.boxedLayoutWidth = 1150
    }
}(jQuery),




function(a) {
    "use strict";
    function b() {
        f(),
        g(),
        k(),
        oa().init(),
        i(),
        j(),
        l(),
        m(),
        o(),
        q(),
        r(),
        s(),
        qa().init(),
        ra().init(),
        t(),
        ea(),
        fa(),
        u(),
        z(),
        n(),
        T(),
        S(),
        U(),
        V(),
        Y(),
        y(),
        v(),
        C(),
        F(),
        A(),
        H(),
        I(),
        sa().init(),
        pa().init(),
        O().init(),
        P().init(),
        Q().init(),
        R().init(),
        $().init(),
        Z().init(),
        _(),
        ba(),
        ca(),
        da(),
        W(),
        X(),
        ja(),
        ta().init(),
        ua(),
        ka()
    }
    function c() {
        ma(),
        N(),
        la(),
        ta().load()
    }
    function d() {
        u(),
        F()
    }
    function e() {}
    function f() {
        var b = a(".mkd-counter");
        b.length && b.each(function() {
            var b = a(this);
            b.appear(function() {
                if (b.parent().css({
                    opacity: 1
                }),
                b.hasClass("zero")) {
                    var a = parseFloat(b.text());
                    b.countTo({
                        from: 0,
                        to: a,
                        speed: 1500,
                        refreshInterval: 100
                    })
                } else
                    b.absoluteCounter({
                        speed: 2e3,
                        fadeInDelay: 1e3
                    })
            }, {
                accX: 0,
                accY: mkdGlobalVars.vars.mkdElementAppearAmount
            })
        })
    }
    function g() {
        var b = a(".mkd-progress-bar");
        b.length && b.each(function() {
            var b = a(this);
            b.appear(function() {
                if (h(b),
                0 !== b.find(".mkd-floating.mkd-floating-inside")) {
                    var a = b.find(".mkd-progress-content").height();
                    a += parseFloat(b.find(".mkd-progress-title-holder").css("padding-bottom")),
                    a += parseFloat(b.find(".mkd-progress-title-holder").css("margin-bottom")),
                    b.find(".mkd-floating-inside").css("margin-bottom", -a + "px")
                }
                var c = b.find(".mkd-progress-content").data("percentage")
                  , d = b.find(".mkd-progress-content")
                  , e = b.find(".mkd-progress-number");
                d.css("width", "0%"),
                d.animate({
                    width: c + "%"
                }, 1500),
                e.css("left", "0%"),
                e.animate({
                    left: c + "%"
                }, 1500)
            })
        })
    }
    function h(b) {
        var c = parseFloat(b.find(".mkd-progress-content").data("percentage"))
          , d = b.find(".mkd-progress-number .mkd-percent");
        d.length && d.each(function() {
            var b = a(this);
            b.parents(".mkd-progress-number-wrapper").css("opacity", "1"),
            b.countTo({
                from: 0,
                to: c,
                speed: 1500,
                refreshInterval: 50
            })
        })
    }
    function i() {
        var b = a(".mkd-message");
        b.length && b.each(function() {
            var b = a(this);
            b.find(".mkd-close").click(function(b) {
                b.preventDefault(),
                a(this).parent().parent().fadeOut(500)
            })
        })
    }
    function j() {
        var b = a(".mkd-message.mkd-with-icon");
        b.length && b.each(function() {
            var b = a(this)
              , c = b.find(".mkd-message-text-holder").height()
              , d = b.find(".mkd-message-icon-holder").height();
            c > d ? b.find(".mkd-message-icon-holder").height(c) : b.find(".mkd-message-text-holder").height(d)
        })
    }
    function k() {
        var b, c, d, e, f, g, h, i, j, k, l, m = a(".mkd-countdown");
        m.length && m.each(function() {
            function m() {
                s.find(".countdown-amount").css({
                    "font-size": n + "px",
                    "line-height": n + "px",
                    color: o
                }),
                s.find(".countdown-period").css({
                    "font-size": p + "px",
                    color: q
                })
            }
            var n, o, p, q, r = a(this).attr("id"), s = a("#" + r);
            b = s.data("year"),
            c = s.data("month"),
            d = s.data("day"),
            e = s.data("hour"),
            f = s.data("minute"),
            g = s.data("timezone"),
            h = s.data("month-label"),
            i = s.data("day-label"),
            j = s.data("hour-label"),
            k = s.data("minute-label"),
            l = s.data("second-label"),
            n = s.data("digit-size"),
            o = s.data("digit-color"),
            p = s.data("label-size"),
            q = s.data("label-color");
            var t = s.hasClass("type-two");
            s.countdown({
                until: new Date(b,c - 1,d,e,f,44),
                labels: ["Years", h, "Weeks", i, j, k, l],
                format: "yodHMS",
                timezone: g,
                padZeroes: !t,
                onTick: m
            })
        })
    }
    function l() {
        var b = a(".mkd-testimonials.testimonials-slider");
        b.length && b.each(function() {
            var b = a(this);
            b.appear(function() {
                b.css("visibility", "visible")
            }, {
                accX: 0,
                accY: mkdGlobalVars.vars.mkdElementAppearAmount
            });
            var c = 1e3;
            "undefined" != typeof b.data("animation-speed") && b.data("animation-speed") !== !1 && (c = b.data("animation-speed"));
            var d = function() {
                var c = b.find(".slick-slide");
                c.removeClass("mkd-slide-fade-in mkd-slide-fade-out"),
                c.find(".slick-cloned").addClass("mkd-slide-fade-out"),
                c.each(function() {
                    var c = a(this)
                      , d = b.find(".slick-list").offset().left
                      , e = b.find(".slick-list").outerWidth()
                      , f = c.offset().left
                      , g = c.outerWidth();
                    f >= d && f + g <= d + e && (c.addClass("mkd-slide-fade-out"),
                    c.next().addClass("mkd-slide-fade-in"),
                    c.prev().addClass("mkd-slide-fade-in"))
                })
            };
            b.on("beforeChange", function() {
                d()
            }),
            b.on("init", function() {
                b.css({
                    opacity: "1"
                }),
                b.find(".slick-slide").not(".slick-active").addClass("mkd-slide-fade-out"),
                b.find(".slick-slide").filter(".slick-active").addClass("mkd-slide-fade-in")
            }).slick({
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 3e3,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: !1,
                cssEase: "cubic-bezier(.38,.76,0,.87)",
                arrows: !0,
                dots: !1,
                speed: c
            })
        });
        var c = a(".mkd-testimonials.testimonials-slider-boxed");
        c.length && c.each(function() {
            var b = a(this);
            b.addClass("slick-dots");
            var c = 800;
            "undefined" != typeof b.data("animation-speed") && b.data("animation-speed") !== !1 && (c = b.data("animation-speed")),
            b.appear(function() {
                b.css("visibility", "visible")
            }, {
                accX: 0,
                accY: mkdGlobalVars.vars.mkdElementAppearAmount
            }),
            b.on("init", function() {
                b.css({
                    opacity: "1"
                })
            }).slick({
                dots: !0,
                arrows: !1,
                autoplay: !0,
                autoplaySpeed: 3e3,
                slidesToScroll: 3,
                slidesToShow: 3,
                speed: c,
                cssEase: "cubic-bezier(.38,.76,0,.87)",
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            }),
            b.on("beforeChange", function(a, c, d, e) {
                d < e ? b.removeClass("mkd-backward-animation").addClass("mkd-forward-animation") : b.removeClass("mkd-forward-animation").addClass("mkd-backward-animation")
            })
        })
    }
    function m() {
        var b, c, d = a(".mkd-carousel-holder");
        d.length && d.each(function() {
            b = a(this).children(".mkd-carousel"),
            c = b.data("items");
            var d = b.data("navigation");
            d = "undefined" != typeof d && "yes" === d,
            b.on("init", function() {
                b.addClass("appeared")
            }).slick({
                slidesToScroll: 1,
                slidesToShow: c,
                autoplay: !0,
                autoplaySpeed: 2e3,
                arrows: d,
                speed: 600,
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
            var e = b.find(".mkd-has-hover-image");
            e.length && e.each(function() {
                var b, c, d = a(this).parent(), e = !1;
                d.on("mouseenter", function() {
                    d.addClass("mkd-hovered"),
                    clearTimeout(c),
                    b = setTimeout(function() {
                        e = !0
                    }, 400)
                }),
                d.on("mouseleave", function() {
                    e ? (d.removeClass("mkd-hovered"),
                    e = !1) : (clearTimeout(b),
                    c = setTimeout(function() {
                        d.removeClass("mkd-hovered"),
                        e = !1
                    }, 400))
                })
            })
        })
    }
    function n() {
        var b = a(".mkd-twitter-slider-inner");
        b.length && b.each(function() {
            var b = a(this);
            b.on("init", function() {
                b.css({
                    opacity: "1"
                })
            }).slick({
                slidesToShow: 1,
                arrows: !1,
                dots: !1,
                speed: 750,
                autoplay: !0,
                cssEase: "cubic-bezier(.19,1,.22,1)",
                swipeToSlide: !0
            })
        })
    }
    function o() {
        var b = a(".mkd-pie-chart-holder, .mkd-pie-chart-with-icon-holder");
        b.length && b.each(function() {
            var b, c, d = a(this), e = d.children(".mkd-percentage, .mkd-percentage-with-icon"), f = 8, g = 194;
            "undefined" != typeof e.data("size") && "" !== e.data("size") && (g = e.data("size")),
            "undefined" != typeof d.data("bar-color") && "" !== d.data("bar-color") && (b = d.data("bar-color")),
            "undefined" != typeof d.data("track-color") && "" !== d.data("track-color") && (c = d.data("track-color")),
            e.appear(function() {
                p(d),
                e.css("opacity", "1"),
                e.easyPieChart({
                    barColor: b,
                    trackColor: c,
                    scaleColor: !1,
                    lineCap: "butt",
                    lineWidth: f,
                    animate: 1500,
                    size: g
                })
            }, {
                accX: 0,
                accY: mkdGlobalVars.vars.mkdElementAppearAmount
            })
        })
    }
    function p(a) {
        a.css("opacity", "1");
        var b = a.find(".mkd-to-counter")
          , c = parseFloat(b.text());
        b.countTo({
            from: 0,
            to: c,
            speed: 1500,
            refreshInterval: 50
        })
    }
    function q() {
        var b = a(".mkd-pie-chart-doughnut-holder, .mkd-pie-chart-pie-holder");
        b.each(function() {
            for (var b = a(this), c = b.find("canvas"), d = c.attr("id"), e = document.getElementById(d).getContext("2d"), f = [], g = a(e.canvas), h = 1; h <= 10; h++) {
                var i, j = g.data("value-" + h), k = g.data("color-" + h);
                "undefined" != typeof j && "undefined" != typeof k && (i = {
                    value: j,
                    color: k
                },
                f.push(i))
            }
            c.hasClass("mkd-pie") ? new Chart(e).Pie(f, {
                segmentStrokeColor: "transparent"
            }) : new Chart(e).Doughnut(f, {
                segmentStrokeColor: "transparent"
            })
        })
    }
    function r() {
        var b = a(".mkd-tabs");
        b.length && b.each(function() {
            var b = a(this);
            b.children(".mkd-tab-container").each(function(b) {
                b += 1;
                var c = a(this)
                  , d = c.attr("id")
                  , e = c.parent().find(".mkd-tabs-nav li:nth-child(" + b + ") a")
                  , f = e.attr("href");
                d = "#" + d,
                d.indexOf(f) > -1 && e.attr("href", d)
            }),
            b.hasClass("mkd-horizontal") ? b.tabs() : b.hasClass("mkd-vertical") && (b.tabs().addClass("ui-tabs-vertical ui-helper-clearfix"),
            b.find(".mkd-tabs-nav > ul >li").removeClass("ui-corner-top").addClass("ui-corner-left"))
        })
    }
    function s() {
        var b = a(".mkd-tab-container");
        b.length && b.each(function() {
            var b = a(this)
              , c = b.attr("id")
              , d = "";
            "undefined" == typeof b.data("icon-html") && "false" === b.data("icon-html") || (d = b.data("icon-html"));
            var e = b.parents(".mkd-tabs").find('.mkd-tabs-nav > li > a[href="#' + c + '"]');
            "undefined" != typeof e && e.children(".mkd-icon-frame").append(d)
        })
    }
    function t() {
        var b = a(".mkd-blog-list-holder.mkd-masonry");
        b.length && b.each(function() {
            var b = a(this);
            b.waitForImages(function() {
                b.isotope({
                    itemSelector: "article",
                    masonry: {
                        columnWidth: ".mkd-blog-masonry-grid-sizer"
                    }
                })
            })
        })
    }
    function u() {
        var b = a(".mkd-custom-font-holder");
        b.length && b.each(function() {
            var b, c, d = a(this), e = 1, f = 1;
            mkd.windowWidth < 1200 && (e = .8),
            mkd.windowWidth < 1e3 && (e = .7),
            mkd.windowWidth < 768 && (e = .6,
            f = .7),
            mkd.windowWidth < 600 && (e = .5,
            f = .6),
            mkd.windowWidth < 480 && (e = .4,
            f = .5),
            "undefined" != typeof d.data("font-size") && d.data("font-size") !== !1 && (b = parseInt(d.data("font-size")),
            b > 70 ? b = Math.round(b * e) : b > 35 && (b = Math.round(b * f)),
            d.css("font-size", b + "px")),
            "undefined" != typeof d.data("line-height") && d.data("line-height") !== !1 && (c = parseInt(d.data("line-height")),
            c > 70 && mkd.windowWidth < 1200 ? c = "1.2em" : c > 35 && mkd.windowWidth < 768 ? c = "1.2em" : c += "px",
            d.css("line-height", c))
        })
    }
    function v() {
        a(".mkd-google-map").length && a(".mkd-google-map").each(function() {
            var b, c = a(this);
            "undefined" != typeof c.data("custom-map-style") && (b = c.data("custom-map-style"));
            var d;
            "undefined" != typeof c.data("color-overlay") && c.data("color-overlay") !== !1 && (d = c.data("color-overlay"));
            var e;
            "undefined" != typeof c.data("saturation") && c.data("saturation") !== !1 && (e = c.data("saturation"));
            var f;
            "undefined" != typeof c.data("lightness") && c.data("lightness") !== !1 && (f = c.data("lightness"));
            var g;
            "undefined" != typeof c.data("zoom") && c.data("zoom") !== !1 && (g = c.data("zoom"));
            var h;
            "undefined" != typeof c.data("pin") && c.data("pin") !== !1 && (h = c.data("pin"));
            var i;
            "undefined" != typeof c.data("height") && c.data("height") !== !1 && (i = c.data("height"));
            var j;
            "undefined" != typeof c.data("unique-id") && c.data("unique-id") !== !1 && (j = c.data("unique-id"));
            var k;
            "undefined" != typeof c.data("scroll-wheel") && (k = c.data("scroll-wheel"));
            var l;
            "undefined" != typeof c.data("addresses") && c.data("addresses") !== !1 && (l = c.data("addresses"));
            var m = "map_" + j
              , n = "geocoder_" + j
              , o = "mkd-map-" + j;
            w(b, d, e, f, k, g, o, i, h, m, n, l)
        })
    }
    function w(a, b, c, d, e, f, g, h, i, j, k, l) {
        var m, n = [{
            stylers: [{
                hue: b
            }, {
                saturation: c
            }, {
                lightness: d
            }, {
                gamma: 1
            }]
        }];
        m = a ? "mkd-style" : google.maps.MapTypeId.ROADMAP;
        var o = new google.maps.StyledMapType(n,{
            name: "Mikado Google Map"
        });
        k = new google.maps.Geocoder;
        var p = new google.maps.LatLng(-34.397,150.644);
        isNaN(h) || (h += "px");
        var q = {
            zoom: f,
            scrollwheel: e,
            center: p,
            zoomControl: !0,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            scaleControl: !1,
            scaleControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            streetViewControl: !1,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            panControl: !1,
            panControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            mapTypeControl: !1,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mkd-style"],
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            mapTypeId: m
        };
        j = new google.maps.Map(document.getElementById(g),q),
        j.mapTypes.set("mkd-style", o);
        var r;
        for (r = 0; r < l.length; ++r)
            x(l[r], i, j, k);
        var s = document.getElementById(g);
        s.style.height = h
    }
    function x(a, b, c, d) {
        if ("" !== a) {
            var e = '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' + a + "</p></div></div>"
              , f = new google.maps.InfoWindow({
                content: e
            });
            d.geocode({
                address: a
            }, function(d, e) {
                if (e === google.maps.GeocoderStatus.OK) {
                    c.setCenter(d[0].geometry.location);
                    var g = new google.maps.Marker({
                        map: c,
                        position: d[0].geometry.location,
                        icon: b,
                        title: a.store_title
                    });
                    google.maps.event.addListener(g, "click", function() {
                        f.open(c, g)
                    }),
                    google.maps.event.addDomListener(window, "resize", function() {
                        c.setCenter(d[0].geometry.location)
                    })
                }
            })
        }
    }
    function y() {
        var b = a(".mkd-accordion-holder");
        b.length && b.each(function() {
            var b = a(this);
            if (b.hasClass("mkd-accordion") && b.accordion({
                animate: "swing",
                collapsible: !1,
                active: 0,
                icons: "",
                heightStyle: "content"
            }),
            b.hasClass("mkd-toggle")) {
                var c = a(this)
                  , d = c.find(".mkd-title-holder")
                  , e = d.next();
                c.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"),
                d.addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom"),
                e.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),
                d.each(function() {
                    var b = a(this);
                    b.hover(function() {
                        b.toggleClass("ui-state-hover")
                    }),
                    b.on("click", function() {
                        b.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"),
                        b.next().toggleClass("ui-accordion-content-active").slideToggle(400)
                    })
                })
            }
        })
    }
    function z() {
        var b = a(".mkd-image-gallery");
        b.length && b.each(function() {
            var b = a(this).children(".mkd-image-gallery-slider")
              , c = b.data("autoplay")
              , d = "yes" == b.data("arrows")
              , e = "yes" == b.data("dots");
            e && b.addClass("slick-dots"),
            b.on("init", function() {
                b.css({
                    opacity: "1"
                })
            }).slick({
                singleItem: !0,
                autoplay: "disable" !== c,
                autoplaySpeed: 1e3 * c,
                arrows: d,
                dots: e,
                slideSpeed: 600
            })
        })
    }
    function A() {
        var b = a(".mkd-portfolio-list-holder-outer.mkd-ptf-standard, .mkd-portfolio-list-holder-outer.mkd-ptf-gallery, .mkd-portfolio-list-holder-outer.mkd-ptf-simple");
        b.length && b.each(function() {
            var b = a(this);
            B(b)
        })
    }
    function B(a) {
        var b = "";
        a.hasClass("mkd-ptf-has-filter") && (b = a.find(".mkd-portfolio-filter-holder-inner ul li").data("class"),
        b = "." + b);
        var c = a.find(".mkd-portfolio-list-holder");
        c.mixItUp({
            callbacks: {
                onMixLoad: function() {
                    c.find("article").css("visibility", "visible"),
                    mkd.modules.common.mkdInitParallax()
                },
                onMixStart: function() {
                    c.find("article").css("visibility", "visible"),
                    a.find(".mkd-ptf-list-load-more").css("visibility", "hidden")
                },
                onMixBusy: function() {
                    c.find("article").css("visibility", "visible")
                },
                onMixEnd: function() {
                    ka(),
                    a.find(".mkd-ptf-list-load-more").css("visibility", "visible")
                }
            },
            selectors: {
                filter: b
            },
            animation: {
                duration: 290,
                effects: "fade",
                easing: "cubic-bezier(0.215, 0.61, 0.355, 1)"
            }
        })
    }
    function C() {
        var b = a(".mkd-portfolio-list-holder-outer.mkd-ptf-masonry");
        b.length && b.each(function() {
            var b = a(this).children(".mkd-portfolio-list-holder");
            E(b),
            D(b),
            a(window).resize(function() {
                E(b),
                D(b)
            })
        })
    }
    function D(a) {
        a.animate({
            opacity: 1
        }),
        a.waitForImages(function() {
            a.isotope({
                itemSelector: ".mkd-portfolio-item",
                resizable: !1,
                layoutMode: "packery",
                packery: {
                    columnWidth: ".mkd-portfolio-list-masonry-grid-sizer"
                }
            }),
            a.parent().find(".mkd-ptf-list-load-more").css("visibility", "visible"),
            a.addClass("mkd-appeared")
        })
    }
    function E(a) {
        var b = .75 * a.find(".mkd-portfolio-list-masonry-grid-sizer").width()
          , c = a.find(".mkd-default-masonry-item")
          , d = a.find(".mkd-large-width-masonry-item")
          , e = a.find(".mkd-large-height-masonry-item")
          , f = a.find(".mkd-large-width-height-masonry-item");
        c.css("height", b),
        e.css("height", Math.round(2 * b)),
        mkd.windowWidth > 600 ? (f.css("height", Math.round(2 * b)),
        e.css("height", Math.round(2 * b)),
        d.css("height", b)) : (f.css("height", b),
        e.css("height", b))
    }
    function F() {
        var b = a(".mkd-portfolio-list-holder-outer.mkd-ptf-pinterest");
        b.length && b.each(function() {
            var b = a(this).children(".mkd-portfolio-list-holder");
            G(b),
            a(window).resize(function() {
                G(b)
            })
        })
    }
    function G(a) {
        a.animate({
            opacity: 1
        }),
        a.waitForImages(function() {
            a.isotope({
                layoutMode: "packery",
                itemSelector: ".mkd-portfolio-item",
                packery: {
                    columnWidth: ".mkd-portfolio-list-masonry-grid-sizer"
                }
            }),
            a.parent().find(".mkd-ptf-list-load-more").css("visibility", "visible")
        })
    }
    function H() {
        var b = a(".mkd-portfolio-filter-holder.mkd-masonry-filter");
        b.length && b.each(function() {
            var b = a(this)
              , c = null;
            b.find("ul li").data("class");
            b.find(".filter:first").addClass("current"),
            b.find(".filter").click(function() {
                var d = a(this);
                clearTimeout(c),
                a(".isotope, .isotope .isotope-item").css("transition-duration", "0.8s"),
                c = setTimeout(function() {
                    a(".isotope, .isotope .isotope-item").css("transition-duration", "0s")
                }, 700);
                var e = a(this).attr("data-filter");
                return b.siblings(".mkd-portfolio-list-holder-outer").find(".mkd-portfolio-list-holder").isotope({
                    filter: e
                }),
                b.find(".filter").removeClass("current"),
                d.addClass("current"),
                !1
            })
        })
    }
    function I() {
        var b = a(".mkd-portfolio-list-holder-outer.mkd-ptf-load-more");
        b.length && b.each(function() {
            var b, c, d = a(this), e = d.find(".mkd-portfolio-list-holder"), f = d.find(".mkd-ptf-list-load-more a"), g = f.text(), h = mkdGlobalVars.vars.mkdPtfLoadMoreMessage;
            "undefined" != typeof d.data("max-num-pages") && d.data("max-num-pages") !== !1 && (c = d.data("max-num-pages")),
            f.on("click", function(i) {
                var j = K(d);
                if (b = j.nextPage,
                f.text(h),
                i.preventDefault(),
                i.stopPropagation(),
                b <= c) {
                    var k = L(j);
                    a.ajax({
                        type: "POST",
                        data: k,
                        url: mkdCoreAjaxUrl,
                        success: function(c) {
                            b++,
                            d.data("next-page", b);
                            var h = a.parseJSON(c)
                              , i = J(h.html);
                            d.waitForImages(function() {
                                setTimeout(function() {
                                    d.hasClass("mkd-ptf-masonry") || d.hasClass("mkd-ptf-pinterest") ? (e.isotope().append(i).isotope("appended", i).isotope("reloadItems"),
                                    d.hasClass("mkd-ptf-masonry") && (E(d),
                                    ka())) : e.mixItUp("append", i),
                                    f.text(g)
                                }, 400)
                            })
                        }
                    })
                }
                b === c && f.hide()
            })
        })
    }
    function J(b) {
        var c = a.trim(b)
          , d = a(c)
          , e = a();
        return d.each(function(a, b) {
            1 === b.nodeType && (e = e.add(this))
        }),
        e
    }
    function K(a) {
        var b = {};
        return b.type = "",
        b.columns = "",
        b.gridSize = "",
        b.orderBy = "",
        b.order = "",
        b.number = "",
        b.imageSize = "",
        b.customImageDimensions = "",
        b.filter = "",
        b.filterOrderBy = "",
        b.category = "",
        b.selectedProjects = "",
        b.showLoadMore = "",
        b.titleTag = "",
        b.textLength = "",
        b.showCategories = "",
        b.nextPage = "",
        b.maxNumPages = "",
        b.showExcerpt = "",
        b.shaderBackgroundStyle = "",
        b.shaderBackgroundColor = "",
        "undefined" != typeof a.data("type") && a.data("type") !== !1 && (b.type = a.data("type")),
        "undefined" != typeof a.data("grid-size") && a.data("grid-size") !== !1 && (b.gridSize = a.data("grid-size")),
        "undefined" != typeof a.data("columns") && a.data("columns") !== !1 && (b.columns = a.data("columns")),
        "undefined" != typeof a.data("order-by") && a.data("order-by") !== !1 && (b.orderBy = a.data("order-by")),
        "undefined" != typeof a.data("order") && a.data("order") !== !1 && (b.order = a.data("order")),
        "undefined" != typeof a.data("number") && a.data("number") !== !1 && (b.number = a.data("number")),
        "undefined" != typeof a.data("image-size") && a.data("image-size") !== !1 && (b.imageSize = a.data("image-size")),
        "undefined" != typeof a.data("custom-image-dimensions") && a.data("custom-image-dimensions") !== !1 && (b.customImageDimensions = a.data("custom-image-dimensions")),
        "undefined" != typeof a.data("filter") && a.data("filter") !== !1 && (b.filter = a.data("filter")),
        "undefined" != typeof a.data("filter-order-by") && a.data("filter-order-by") !== !1 && (b.filterOrderBy = a.data("filter-order-by")),
        "undefined" != typeof a.data("category") && a.data("category") !== !1 && (b.category = a.data("category")),
        "undefined" != typeof a.data("selected-projects") && a.data("selected-projects") !== !1 && (b.selectedProjects = a.data("selected-projects")),
        "undefined" != typeof a.data("show-load-more") && a.data("show-load-more") !== !1 && (b.showLoadMore = a.data("show-load-more")),
        "undefined" != typeof a.data("title-tag") && a.data("title-tag") !== !1 && (b.titleTag = a.data("title-tag")),
        "undefined" != typeof a.data("text-length") && a.data("text-length") !== !1 && (b.textLength = a.data("text-length")),
        "undefined" != typeof a.data("show-categories") && a.data("show-categories") !== !1 && (b.showCategories = a.data("show-categories")),
        "undefined" != typeof a.data("next-page") && a.data("next-page") !== !1 && (b.nextPage = a.data("next-page")),
        "undefined" != typeof a.data("max-num-pages") && a.data("max-num-pages") !== !1 && (b.maxNumPages = a.data("max-num-pages")),
        "undefined" != typeof a.data("show-excerpt") && a.data("show-excerpt") !== !1 && (b.showExcerpt = a.data("show-excerpt")),
        "undefined" != typeof a.data("shader-background-style") && a.data("shader-background-style") !== !1 && (b.shaderBackgroundStyle = a.data("shader-background-style")),
        "undefined" != typeof a.data("shader-background-color") && a.data("shader-background-color") !== !1 && (b.shaderBackgroundColor = a.data("shader-background-color")),
        b
    }
    function L(a) {
        var b = {
            action: "mkd_core_portfolio_ajax_load_more",
            type: a.type,
            columns: a.columns,
            gridSize: a.gridSize,
            orderBy: a.orderBy,
            order: a.order,
            number: a.number,
            imageSize: a.imageSize,
            customImageDimensions: a.customImageDimensions,
            filter: a.filter,
            filterOrderBy: a.filterOrderBy,
            category: a.category,
            selectedProjectes: a.selectedProjectes,
            showLoadMore: a.showLoadMore,
            titleTag: a.titleTag,
            textLength: a.textLength,
            showCategories: a.showCategories,
            nextPage: a.nextPage,
            showExcerpt: a.showExcerpt,
            shaderBackgroundStyle: a.shaderBackgroundStyle,
            shaderBackgroundColor: a.shaderBackgroundColor
        };
        return b
    }
    function M(b, c) {
        if (a(".mkd-slider .carousel").not(".mkd-disable-slider-header-style-changing").length > 0) {
            var d = "";
            b.hasClass("light") && (d = "mkd-light-header"),
            b.hasClass("dark") && (d = "mkd-dark-header"),
            "" !== d ? c && mkd.body.removeClass("mkd-dark-header mkd-light-header").addClass(d) : c && mkd.body.removeClass("mkd-dark-header mkd-light-header").addClass(mkd.defaultHeaderStyle)
        }
    }
    function N() {
        var b = a(".mkd-info-box-holder")
          , c = function(a) {
            return !!a.length && a.height()
        }
          , d = function() {
            if (b.length) {
                var d, e = 0;
                b.each(function() {
                    var b = a(this).find(".mkd-ib-bottom-holder")
                      , f = a(this).find(".mkd-ib-top-holder")
                      , g = c(b) + f.height();
                    e = Math.max(e, g),
                    e <= g && (d = a(this),
                    e = g)
                }),
                b.height(e)
            }
        }
          , e = function(a) {
            var b = new TimelineLite({
                paused: !0
            })
              , d = a.find(".mkd-ib-top-holder")
              , e = a.find(".mkd-ib-bottom-holder")
              , f = c(e);
            b.to(d, .6, {
                y: -(f / 2),
                ease: Back.easeInOut.config(2)
            }),
            b.to(e, .4, {
                y: -(f / 2),
                opacity: 1,
                ease: Back.easeOut
            }, "-=0.3"),
            a.hover(function() {
                b.restart()
            }, function() {
                b.reverse()
            })
        };
        b.length && (d(),
        a(mkd.window).resize(function() {
            d()
        }),
        b.each(function() {
            var b = a(this);
            e(b),
            a(mkd.window).resize(function() {
                e(b)
            })
        }))
    }
    function O() {
        var b = a(".mkd-process-holder")
          , c = function(a) {
            var b = a.find(".mkd-process-item-holder")
              , c = b.filter(".mkd-pi-highlighted");
            if (c.length)
                if (1 === c.length) {
                    var d = c.nextAll();
                    d.length && d.addClass("mkd-pi-push-right")
                } else
                    a.addClass("mkd-process-multiple-highlights")
        }
          , d = function(b) {
            var c = b.find(".mkd-process-item-holder")
              , d = b.find(".mkd-process-bg-holder");
            b.appear(function() {
                var b = new TimelineLite;
                b.fromTo(d, .2, {
                    y: 50,
                    opacity: 0,
                    delay: .1
                }, {
                    opacity: 1,
                    y: 0,
                    delay: .1
                }),
                b.staggerFromTo(c, .3, {
                    opacity: 0,
                    y: 50,
                    ease: Back.easeOut.config(2)
                }, {
                    opacity: 1,
                    y: 0,
                    ease: Back.easeOut.config(2)
                }, .2),
                a(this).addClass("appeared")
            }, {
                accX: 0,
                accY: mkdGlobalVars.vars.mkdElementAppearAmount
            })
        };
        return {
            init: function() {
                b.length && b.each(function() {
                    c(a(this)),
                    d(a(this))
                })
            }
        }
    }
    function P() {
        var b = a(".mkd-comparision-pricing-tables-holder")
          , c = function(b) {
            var c = b.find(".mkd-cpt-features-item")
              , d = b.find(".mkd-comparision-table-holder");
            d.length && d.each(function() {
                var b = a(this)
                  , d = b.find(".mkd-cpt-table-content li");
                d.length && d.each(function(b) {
                    var d = c[b]
                      , e = this
                      , f = e.innerHTML;
                    "undefined" != typeof d && (e.innerHTML = '<span class="mkd-cpt-table-item-feature">' + a(d).text() + ": </span>" + f)
                })
            })
        };
        return {
            init: function() {
                b.length && b.each(function() {
                    c(a(this))
                })
            }
        }
    }
    function Q() {
        var b = a(".mkd-vertical-progress-bar-holder")
          , c = function(a) {
            a.appear(function() {
                var b = a.find(".mkd-vpb-bar")
                  , c = a.find(".mkd-vpb-active-bar")
                  , d = b.data("percent");
                c.animate({
                    height: d + "%"
                }, 1500)
            }, {
                accX: 0,
                accY: mkdGlobalVars.vars.mkdElementAppearAmount
            })
        }
          , d = function(a) {
            a.appear(function() {
                var b = a.find(".mkd-vpb-bar")
                  , c = b.data("percent")
                  , d = a.find(".mkd-vpb-percent-number");
                d.countTo({
                    from: 0,
                    to: c,
                    speed: 1500,
                    refreshInterval: 50
                })
            })
        };
        return {
            init: function() {
                b.length && b.each(function() {
                    c(a(this)),
                    d(a(this))
                })
            }
        }
    }
    function R() {
        var b = a(".mkd-icon-progress-bar")
          , c = function(b) {
            var c = [];
            b.appear(function() {
                var e = parseInt(b.data("number-of-active-icons"))
                  , f = b.find(".mkd-ipb-icon")
                  , g = b.data("icon-active-color");
                "undefined" != typeof e && f.each(function(b) {
                    if (b < e) {
                        var h = 150 * (b + 1)
                          , i = a(this);
                        c[b] = setTimeout(function() {
                            d(i, g),
                            a(f[b]).addClass("active")
                        }, h)
                    }
                })
            }, {
                accX: 0,
                accY: mkdGlobalVars.vars.mkdElementAppearAmount
            })
        }
          , d = function(a, b) {
            a.addClass("mkd-ipb-active"),
            "undefined" != typeof b && "" !== b && a.find(".mkd-ipb-icon-elem").css("color", b)
        };
        return {
            init: function() {
                b.length && b.each(function() {
                    c(a(this))
                })
            }
        }
    }
    function S(b) {
        if (void 0 !== b && b.hasClass("masonry")) {
            var c = b.find("article")
              , d = b.find(".slick-track").height();
            c.length && (c.each(function() {
                var b = a(this)
                  , c = d - a(this).find(".mkd-post-info").outerHeight();
                b.hasClass("format-link") || b.hasClass("format-quote") ? b.find(".mkd-post-text-inner").css("height", c) : b.find(".mkd-post-text-inner").css("height", c - a(this).find(".mkd-post-image").outerHeight())
            }),
            a(window).resize(function() {
                this.resizeTO && clearTimeout(this.resizeTO),
                this.resizeTO = setTimeout(function() {
                    a(this).trigger("resizeEnd")
                }, 500)
            }),
            a(window).bind("resizeEnd", function() {
                c.each(function() {
                    a(this).find(".mkd-post-text-inner").css("height", "auto")
                }),
                d = b.find(".slick-track").height(),
                c.each(function() {
                    var b = a(this)
                      , c = d - a(this).find(".mkd-post-info").outerHeight();
                    b.hasClass("format-link") || b.hasClass("format-quote") ? b.find(".mkd-post-text-inner").css("height", c) : b.find(".mkd-post-text-inner").css("height", c - a(this).find(".mkd-post-image").outerHeight())
                })
            }))
        }
    }
    function T() {
        var b = a(".mkd-blog-slider-holder");
        b.length && b.each(function() {
            var b, c = a(this);
            (b = "undefined" != typeof c.data("dots") && "yes" === c.data("dots")) && c.addClass("slick-dots"),
            c.on("init", function() {
                c.waitForImages(function() {
                    setTimeout(S(c), 400)
                }),
                c.addClass("appeared")
            }).slick({
                dots: b,
                arrows: !1,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: !1,
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            }),
            c.on("beforeChange", function(a, b, d, e) {
                d < e ? c.removeClass("mkd-backward-animation").addClass("mkd-forward-animation") : c.removeClass("mkd-forward-animation").addClass("mkd-backward-animation")
            })
        })
    }
    function U() {
        var b = a(".mkd-team-slider");
        b.length && b.each(function() {
            var b = a(this)
              , c = "yes" == b.data("dots");
            c && b.addClass("slick-dots");
            var d = b.data("number_of_items");
            b.on("init", function() {
                b.addClass("appeared")
            }).slick({
                dots: c,
                arrows: !1,
                slidesToScroll: d,
                slidesToShow: d,
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })
        })
    }
    function V() {
        var b = a(".mkd-card-slider");
        b.length && b.each(function() {
            var b = a(this)
              , c = "yes" == b.data("dots");
            c && b.addClass("slick-dots");
            var d = b.data("number_of_items");
            b.on("init", function() {
                b.addClass("appeared")
            }).slick({
                dots: c,
                arrows: !1,
                slidesToScroll: d,
                slidesToShow: d,
                responsive: [{
                    breakpoint: 1281,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })
        })
    }
    function W() {
        var b = a(".mkd-device-slider");
        b.length && b.each(function() {
            var b = a(this);
            b.on("init", function() {
                b.addClass("appeared")
            }).slick({
                autoplay: !0,
                autoplaySpeed: 3e3
            })
        })
    }
    function X() {
        var b = a(".mkd-mobile-slider");
        b.length && b.each(function() {
            var b = a(this);
            b.on("init", function() {
                b.addClass("appeared")
            }).slick({
                infinite: !0,
                centerMode: !0,
                centerPadding: "20%",
                autoplay: !0,
                autoplaySpeed: 3e3,
                slidesToShow: 3,
                slidesToScroll: 1,
                swipeToSlide: !0,
                touchThreshold: 30,
                speed: 400,
                fade: !1,
                cssEase: "cubic-bezier(.38,.76,0,.87)",
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        centerMode: !0,
                        centerPadding: "12%",
                        autoplay: !0,
                        autoplaySpeed: 3e3,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        swipeToSlide: !0,
                        touchThreshold: 30
                    }
                }, {
                    breakpoint: 769,
                    settings: {
                        centerMode: !0,
                        centerPadding: "25%",
                        autoplay: !0,
                        autoplaySpeed: 3e3,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        swipeToSlide: !0,
                        touchThreshold: 30
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        centerMode: !0,
                        centerPadding: "22%",
                        autoplay: !0,
                        autoplaySpeed: 3e3,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        swipeToSlide: !0,
                        touchThreshold: 30
                    }
                }]
            })
        })
    }
    function Y() {
        var b = a(".mkd-centered-slider")
          , c = mkd.windowWidth / 3 + "px";
        b.length && b.each(function() {
            var b = a(this);
            b.width() >= mkd.windowWidth ? (b.on("init", function() {
                a(this).addClass("full-width"),
                b.css({
                    opacity: "1"
                })
            }).slick({
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 3e3,
                dots: !1,
                arrows: !1,
                centerMode: !0,
                centerPadding: c,
                slidesToShow: 1,
                speed: 800,
                fade: !1,
                cssEase: "cubic-bezier(.38,.76,0,.87)",
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        centerMode: !1,
                        slidesToShow: 1,
                        autoplay: !0
                    }
                }, {
                    breakpoint: 769,
                    settings: {
                        centerMode: !1,
                        slidesToShow: 1,
                        autoplay: !0
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        centerMode: !1,
                        slidesToShow: 1,
                        autoplay: !0
                    }
                }]
            }),
            b.find(".slick-center").css({
                transform: "scale(1.2)",
                "z-index": "11"
            }),
            b.on("beforeChange", function() {
                a(this).find(".slick-center").css({
                    transform: "scale(1)",
                    "z-index": "10"
                })
            }),
            b.on("afterChange", function() {
                a(this).find(".slick-center").css({
                    transform: "scale(1.2)",
                    "z-index": "11"
                })
            })) : b.on("init", function() {
                b.css({
                    opacity: "1"
                })
            }).slick({
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 3e3,
                dots: !1,
                arrows: !1,
                centerMode: !1,
                centerPadding: c,
                slidesToShow: 1,
                speed: 800,
                fade: !1,
                cssEase: "cubic-bezier(.38,.76,0,.87)"
            })
        })
    }
    function Z() {
        function b(b) {
            b.each(function() {
                var b = a(this)
                  , e = {};
                r = b.data("distance"),
                e.timelineWrapper = b.find(".mkd-horizontal-timeline-events-wrapper"),
                e.eventsWrapper = e.timelineWrapper.children(".mkd-horizontal-timeline-events"),
                e.fillingLine = e.eventsWrapper.children(".mkd-horizontal-timeline-filling-line"),
                e.timelineEvents = e.eventsWrapper.find("a"),
                e.timelineDates = n(e.timelineEvents),
                e.eventsMinLapse = p(e.timelineDates),
                e.timelineNavigation = b.find(".mkd-timeline-navigation"),
                e.eventsContent = b.children(".mkd-horizontal-timeline-events-content"),
                e.timelineEvents.first().addClass("selected"),
                e.eventsContent.find("li").first().addClass("selected"),
                h(e, r);
                var f = i(e, r);
                b.addClass("loaded"),
                a(window).resize(function() {
                    h(e, r),
                    i(e, r)
                }),
                e.timelineNavigation.on("click", ".next", function(a) {
                    a.preventDefault(),
                    c(e, f, "next")
                }),
                e.timelineNavigation.on("click", ".prev", function(a) {
                    a.preventDefault(),
                    c(e, f, "prev")
                }),
                e.eventsWrapper.on("click", "a", function(b) {
                    b.preventDefault(),
                    e.timelineEvents.removeClass("selected"),
                    a(this).addClass("selected"),
                    k(a(this)),
                    g(a(this), e.fillingLine, f),
                    j(a(this), e.eventsContent)
                }),
                e.eventsContent.on("swipeleft", function() {
                    d(e, f, "next")
                }),
                e.eventsContent.on("swiperight", function() {
                    d(e, f, "prev")
                }),
                a(document).keyup(function(a) {
                    "37" == a.which && q(b.get(0)) ? d(e, f, "prev") : "39" == a.which && q(b.get(0)) && d(e, f, "next")
                })
            })
        }
        function c(a, b, c) {
            var d = l(a.eventsWrapper)
              , e = Number(a.timelineWrapper.css("width").replace("px", ""));
            "next" == c ? f(a, d - e + r, e - b) : f(a, d + e - r)
        }
        function d(a, b, c) {
            var d = a.eventsContent.find(".selected")
              , f = "next" == c ? d.next() : d.prev();
            if (f.length > 0) {
                var h = a.eventsWrapper.find(".selected")
                  , i = "next" == c ? h.parent("li").next("li").children("a") : h.parent("li").prev("li").children("a");
                g(i, a.fillingLine, b),
                j(i, a.eventsContent),
                i.addClass("selected"),
                h.removeClass("selected"),
                k(i),
                e(c, i, a)
            }
        }
        function e(a, b, c) {
            var d = window.getComputedStyle(b.get(0), null)
              , e = Number(d.getPropertyValue("left").replace("px", ""))
              , g = Number(c.timelineWrapper.css("width").replace("px", ""))
              , h = Number(c.eventsWrapper.css("width").replace("px", ""))
              , i = l(c.eventsWrapper);
            ("next" == a && e > g - i || "prev" == a && e < -i) && f(c, -e + g / 2, g - h)
        }
        function f(a, b, c) {
            var d = a.eventsWrapper.get(0);
            b = b > 0 ? 0 : b,
            b = "undefined" != typeof c && b < c ? c : b,
            m(d, "translateX", b + "px"),
            0 === b ? a.timelineNavigation.find(".prev").addClass("inactive") : a.timelineNavigation.find(".prev").removeClass("inactive"),
            b == c ? a.timelineNavigation.find(".next").addClass("inactive") : a.timelineNavigation.find(".next").removeClass("inactive")
        }
        function g(a, b, c) {
            var d = window.getComputedStyle(a.get(0), null)
              , e = d.getPropertyValue("left")
              , f = d.getPropertyValue("width");
            e = Number(e.replace("px", "")) + Number(f.replace("px", "")) / 2;
            var g = e / c;
            m(b.get(0), "scaleX", g)
        }
        function h(a, b) {
            var c = 1;
            mkd.windowWidth < 600 && (c = .5);
            for (var d = 0; d < a.timelineDates.length; d++) {
                var e = o(a.timelineDates[0], a.timelineDates[d])
                  , f = Math.round(e / a.eventsMinLapse) + 2;
                a.timelineEvents.eq(d).css("left", c * f * b + "px")
            }
        }
        function i(a, b) {
            var c = 1;
            mkd.windowWidth < 600 && (c = .5);
            var d = o(a.timelineDates[0], a.timelineDates[a.timelineDates.length - 1])
              , f = d / a.eventsMinLapse
              , f = Math.round(f) + 4
              , h = f * b * c;
            return a.eventsWrapper.css("width", h + "px"),
            g(a.eventsWrapper.find("a.selected"), a.fillingLine, h),
            e("next", a.eventsWrapper.find("a.selected"), a),
            h
        }
        function j(a, b) {
            var c = a.data("date")
              , d = b.find(".selected")
              , e = b.find('[data-date="' + c + '"]')
              , f = e.height();
            if (e.index() > d.index())
                var g = "selected enter-right"
                  , h = "leave-left";
            else
                var g = "selected enter-left"
                  , h = "leave-right";
            e.attr("class", g),
            d.attr("class", h).one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
                d.removeClass("leave-right leave-left"),
                e.removeClass("enter-left enter-right")
            }),
            b.css("height", f + "px")
        }
        function k(a) {
            a.parent("li").prevAll("li").children("a").addClass("older-event").end().end().nextAll("li").children("a").removeClass("older-event")
        }
        function l(a) {
            var b = window.getComputedStyle(a.get(0), null)
              , c = b.getPropertyValue("-webkit-transform") || b.getPropertyValue("-moz-transform") || b.getPropertyValue("-ms-transform") || b.getPropertyValue("-o-transform") || b.getPropertyValue("transform");
            if (c.indexOf("(") >= 0) {
                var c = c.split("(")[1];
                c = c.split(")")[0],
                c = c.split(",");
                var d = c[4]
            } else
                var d = 0;
            return Number(d)
        }
        function m(a, b, c) {
            a.style["-webkit-transform"] = b + "(" + c + ")",
            a.style["-moz-transform"] = b + "(" + c + ")",
            a.style["-ms-transform"] = b + "(" + c + ")",
            a.style["-o-transform"] = b + "(" + c + ")",
            a.style.transform = b + "(" + c + ")"
        }
        function n(b) {
            var c = [];
            return b.each(function() {
                var b = a(this)
                  , d = new String(b.data("date"))
                  , e = d.split("T");
                if (e.length > 1)
                    var f = e[0].split("/")
                      , g = e[1].split(":");
                else if (e[0].indexOf(":") >= 0)
                    var f = ["2000", "0", "0"]
                      , g = e[0].split(":");
                else
                    var f = e[0].split("/")
                      , g = ["0", "0"];
                var h = new Date(f[2],f[1] - 1,f[0],g[0],g[1]);
                c.push(h)
            }),
            c
        }
        function o(a, b) {
            return Math.round(b - a)
        }
        function p(a) {
            for (var b = [], c = 1; c < a.length; c++) {
                var d = o(a[c - 1], a[c]);
                b.push(d)
            }
            return Math.min.apply(null, b)
        }
        function q(a) {
            for (var b = a.offsetTop, c = a.offsetLeft, d = a.offsetWidth, e = a.offsetHeight; a.offsetParent; )
                a = a.offsetParent,
                b += a.offsetTop,
                c += a.offsetLeft;
            return b < window.pageYOffset + window.innerHeight && c < window.pageXOffset + window.innerWidth && b + e > window.pageYOffset && c + d > window.pageXOffset
        }
        var r, s = a(".mkd-horizontal-timeline");
        return {
            init: function() {
                s.length > 0 && b(s)
            }
        }
    }
    function $() {
        var b = a(".vc_empty_space")
          , c = {
            large_laptop: 1559,
            laptop: 1279,
            tablet_landscape: 1023,
            tablet_portrait: 767,
            phone_landscape: 599,
            phone_portrait: 479
        }
          , d = (function() {
            var a = [];
            for (var b in c)
                a.push(c[b]);
            return a
        }(),
        function(a) {
            var b = {};
            for (var d in c) {
                var e = a.data(d);
                "undefined" != typeof e && "" !== e && (b[d] = e)
            }
            return b
        }
        )
          , e = function(a) {
            var b = [];
            for (var d in c) {
                var e = a.data(d);
                "undefined" != typeof e && "" !== e && b.push(c[d])
            }
            return b
        }
          , f = function(a, b) {
            if ("undefined" != typeof a) {
                var d = b.data("original-height")
                  , f = e(b)
                  , g = Math.max.apply(null, f);
                for (var h in c)
                    mkd.windowWidth <= c[h] ? b.height(a[h]) : mkd.windowWidth > g && b.height(d)
            }
        };
        return {
            init: function() {
                b.length && b.each(function() {
                    var b = d(a(this));
                    f(b, a(this));
                    var c = a(this);
                    a(window).resize(function() {
                        f(b, c)
                    })
                })
            }
        }
    }
    function _() {
        mkd.body.hasClass("mkd-vertical-split-screen-initialized") && (mkd.body.removeClass("mkd-vertical-split-screen-initialized"),
        a.fn.multiscroll.destroy());
        var b = "";
        if (mkd.body.hasClass("mkd-light-header") ? b = "light" : mkd.body.hasClass("mkd-dark-header") && (b = "dark"),
        a(".mkd-vertical-split-slider").length) {
            var c = a(".mkd-vertical-split-slider");
            c.height(mkd.windowHeight).animate({
                opacity: 1
            }, 300),
            c.multiscroll({
                scrollingSpeed: 700,
                easing: "easeInOutQuart",
                navigation: !0,
                useAnchorsOnLoad: !1,
                sectionSelector: ".mkd-vss-ms-section",
                leftSelector: ".mkd-vss-ms-left",
                rightSelector: ".mkd-vss-ms-right",
                afterRender: function() {
                    aa(a(".mkd-vss-ms-right .mkd-vss-ms-section:last-child").data("header-style"), b),
                    mkd.body.addClass("mkd-vertical-split-screen-initialized"),
                    a("div.wpcf7 > form").length && (_wpcf7.supportHtml5 = a.wpcf7SupportHtml5(),
                    a("div.wpcf7 > form").wpcf7InitForm());
                    var d = a("<div class='mkd-vertical-split-slider-responsive' />");
                    c.after(d);
                    for (var e = a(".mkd-vertical-split-slider .mkd-vss-ms-left > div"), f = a(".mkd-vertical-split-slider .mkd-vss-ms-right > div"), h = 0; h < e.length; h++)
                        d.append(a(e[h]).clone(!0)),
                        d.append(a(f[e.length - 1 - h]).clone(!0));
                    a(".mkd-vertical-split-slider-responsive .mkd-google-map").length && a(".mkd-vertical-split-slider-responsive .mkd-google-map").each(function() {
                        var b = a(this);
                        b.empty();
                        var c = Math.floor(1e5 * Math.random() + 1);
                        b.attr("id", "mkd-map-" + c),
                        b.data("unique-id", c)
                    }),
                    qa().init(),
                    l(),
                    C(),
                    F(),
                    A(),
                    v(),
                    g()
                },
                onLeave: function(c, d, e) {
                    aa(a(a(".mkd-vss-ms-right .mkd-vss-ms-section")[a(".mkd-vss-ms-right .mkd-vss-ms-section").length - d]).data("header-style"), b)
                }
            }),
            mkd.windowWidth <= 1024 ? a.fn.multiscroll.destroy() : a.fn.multiscroll.build(),
            a(window).resize(function() {
                mkd.windowWidth <= 1024 ? a.fn.multiscroll.destroy() : a.fn.multiscroll.build()
            })
        }
    }
    function aa(a, b) {
        void 0 != a && "" != a ? mkd.body.removeClass("mkd-light-header mkd-dark-header").addClass("mkd-" + a + "-header") : "" != b ? mkd.body.removeClass("mkd-light-header mkd-dark-header").addClass("mkd-" + b + "-header") : mkd.body.removeClass("mkd-light-header mkd-dark-header")
    }
    function ba() {
        var b = a(".mkd-mini-text-slider");
        b.length && b.each(function() {
            var b = a(this).find(".mkd-mts-inner");
            b.owlCarousel({
                singleItem: !0,
                autoPlay: 4e3,
                navigation: !0,
                autoHeight: !1,
                pagination: !1,
                slideSpeed: 450,
                stopOnHover: !0,
                transitionStyle: "backSlide",
                navigationText: ['<span class="mkd-next-icon"><span class="fas fa-angle-right"></span></span>', '<span class="mkd-prev-icon"><span class="fas fa-angle-left"></span></span>'],
                afterInit: function() {
                    b.css("visibility", "visible")
                }
            })
        })
    }
    function ca() {
        var b = a(".mkd-tab-slider-container");
        b.length && b.each(function() {
            a(this).flexslider({
                animation: "slide",
                manualControls: ".mkd-tab-slider-nav .mkd-tab-slider-nav-item",
                selector: ".mkd-tab-slider-container-inner li",
                directionNav: !1
            })
        })
    }
    function da() {
        var b = a(".mkd-playlist");
        b.length && b.each(function() {
            var b = a(this).find(".mkd-playlist-control")
              , c = a(this).find(".mkd-playlist-item")
              , d = c.find("audio");
            b.each(function() {
                var b = a(this)
                  , e = b.parent()
                  , f = b.find("audio").get(0);
                b.on("click", function() {
                    e.hasClass("in-progress") ? (f.pause(),
                    e.addClass("paused").removeClass("in-progress")) : e.hasClass("paused") ? (f.play(),
                    e.addClass("playing in-progress").removeClass("paused")) : (d.each(function() {
                        this.pause(),
                        this.currentTime = 0
                    }),
                    c.removeClass("playing in-progress paused"),
                    f.play(),
                    e.addClass("playing in-progress"))
                }),
                b.find("audio").bind("ended", function() {
                    e.removeClass("playing in-progress")
                })
            })
        })
    }
    function ea() {
        var b = a(".mkd-pl-holder.woocommerce.masonry");
        b.length && b.each(function() {
            var b = a(this).children(".mkd-pl-outer");
            ha(b),
            ga(b),
            a(window).resize(function() {
                ha(b),
                ga(b)
            })
        })
    }
    function fa() {
        var b = a(".mkd-pl-holder.woocommerce.lookbook-masonry");
        b.length && b.each(function() {
            var b = a(this).children(".mkd-pl-outer");
            ha(b),
            ga(b),
            a(window).resize(function() {
                ha(b),
                ga(b)
            })
        })
    }
    function ga(a) {
        a.animate({
            opacity: 1
        }),
        a.waitForImages(function() {
            a.isotope({
                itemSelector: ".mkd-pl-item",
                resizable: !1,
                layoutMode: "packery",
                packery: {
                    columnWidth: ".mkd-product-list-masonry-grid-sizer"
                }
            }),
            a.addClass("mkd-appeared")
        })
    }
    function ha(a) {
        var b = 1.25 * a.find(".mkd-product-list-masonry-grid-sizer").width()
          , c = a.find(".cornerstone_mikado_square")
          , d = a.find(".cornerstone_mikado_large_width")
          , e = a.find(".cornerstone_mikado_large_height")
          , f = a.find(".cornerstone_mikado_large_width_height");
        c.css("height", b),
        mkd.windowWidth > 600 ? (f.css("height", Math.round(2 * b)),
        e.css("height", Math.round(2 * b)),
        d.css("height", b)) : (f.css("height", b),
        e.css("height", b))
    }
    function ia(a, b) {
        if (b.hasClass("mkd-bundle-animation")) {
            var c = !1
              , d = a.find(".mkd-bundle-item");
            d.css("top", d.data("bundle-move-top"));
            var e = function() {
                var e = 100 * (mkd.windowHeight - a[0].getBoundingClientRect().top) / (mkd.windowHeight / 2);
                !c && a[0].getBoundingClientRect().top <= mkd.windowHeight && a[0].getBoundingClientRect().top >= mkd.windowHeight / 2 ? d.css("top", (100 - e) / 100 * d.data("bundle-move-top")) : a[0].getBoundingClientRect().top < mkd.windowHeight / 2 && (d.css("top", 0),
                c = !0,
                b.removeClass("mkd-no-events"))
            };
            mkd.window.bind("scroll", e).resize(e),
            e()
        }
    }
    function ja() {
        var b = a(".mkd-cards-gallery-holder");
        b.length && b.each(function() {
            var b = a(this)
              , c = b.height();
            b.children(".mkd-cards-gallery").css("height", c),
            a(window).resize(function() {
                c = b.height(),
                b.children(".mkd-cards-gallery").css("height", c)
            });
            var d = b.find(".card")
              , e = b.find(".fake_card");
            e.css("display", "none"),
            d.each(function() {
                var c = a(this);
                ia(c, b),
                c.click(function() {
                    if (!d.last().is(c))
                        return c.fadeOut(0, function() {
                            c.addClass("mkd-transform-y"),
                            c.insertAfter(d.last()).fadeIn(200, "easeInOutQuint", function() {
                                c.removeClass("mkd-transform-y")
                            }),
                            d = b.find(".card")
                        }),
                        !1
                })
            })
        })
    }
    function ka() {
        var b = a(".mkd-hover-tilt");
        b.length && !a("html").hasClass("touch") && b.each(function() {
            var b, c, d, e, f, g, h, i, j, k = a(this), l = k.find(".mkd-ptf-item-image-holder"), m = 10, n = 0, o = !0;
            l.mouseenter(function() {
                var k = a(this);
                b = k.outerWidth(),
                c = k.outerHeight(),
                d = k.offset().top,
                e = k.offset().left,
                f = 0,
                g = 0,
                k.css("transform", "translate3d(0,0,0) scale(1.03)"),
                j = setTimeout(function() {
                    o = !1
                }, 200),
                k.mousemove(function(a) {
                    if (o)
                        a.stopPropagation();
                    else {
                        k.css("transition", "none"),
                        f = a.pageX - e,
                        g = a.pageY - d,
                        h = (b / 2 - f) / b * 2 * n,
                        i = (c / 2 - g) / c * 2 * n;
                        var j = "translate3d(" + h + "px, " + i + "px, 0) scale(1.03)";
                        k.css("transform", j),
                        n < m && (n += .3)
                    }
                })
            }),
            l.mouseleave(function() {
                clearTimeout(j),
                n = 0,
                o = !0;
                var b = a(this);
                b.css("transition", "all .2s"),
                b.css("transform", "translate3d(0,0,0) scale(1)")
            })
        })
    }
    function la() {
        var b = a(".comparison-slider");
        b.length && b.each(function(b) {
            var c = a(this)
              , d = c.data("orientation")
              , e = c.data("offset") / 100;
            c.waitForImages(function() {
                c.css("visibility", "visible"),
                c.twentytwenty({
                    default_offset_pct: 1.1,
                    orientation: d
                })
            }),
            c.appear(function() {
                setTimeout(function() {
                    var b = c.height()
                      , f = c.width()
                      , g = b * e
                      , h = f * e
                      , i = c.find(".twentytwenty-handle")
                      , j = c.find("img:first-of-type")
                      , k = 700
                      , l = "cubic-bezier(0.645, 0.045, 0.355, 1)"
                      , m = 100
                      , n = function() {
                        "horizontal" == d ? (i.css({
                            left: +h + 1 + "px"
                        }),
                        j.css({
                            clip: "rect(0px " + h + "px " + b + "px 0px)"
                        })) : (i.css({
                            top: +g + 1 + "px"
                        }),
                        j.css({
                            clip: "rect(0px " + f + "px " + g + "px 0px)"
                        }))
                    };
                    j.css("transition", "all " + k + "ms " + l + " " + m + "ms"),
                    i.css("transition", "all " + k + "ms " + l + " " + m + "ms"),
                    n(),
                    setTimeout(function() {
                        j.css("transition", "none"),
                        i.css("transition", "none")
                    }, k),
                    a(window).resize(function() {
                        b = c.height(),
                        f = c.width(),
                        g = b * e,
                        h = f * e,
                        n()
                    })
                }, 100)
            }, {
                accX: 0,
                accY: mkdGlobalVars.vars.mkdElementAppearAmount
            })
        })
    }
    function ma() {
        var b = a(".mkd-elements-holder");
        b.length && b.each(function() {
            var b = a(this)
              , c = b.children(".mkd-elements-holder-item")
              , d = ""
              , e = "";
            c.each(function() {
                var b = a(this)
                  , c = ""
                  , d = ""
                  , f = ""
                  , g = ""
                  , h = ""
                  , i = ""
                  , j = "";
                "undefined" != typeof b.data("item-class") && b.data("item-class") !== !1 && (c = b.data("item-class")),
                "undefined" != typeof b.data("1280-1440") && b.data("1280-1440") !== !1 && (d = b.data("1280-1440")),
                "undefined" != typeof b.data("1024-1280") && b.data("1024-1280") !== !1 && (f = b.data("1024-1280")),
                "undefined" != typeof b.data("768-1024") && b.data("768-1024") !== !1 && (g = b.data("768-1024")),
                "undefined" != typeof b.data("600-768") && b.data("600-768") !== !1 && (h = b.data("600-768")),
                "undefined" != typeof b.data("480-600") && b.data("480-600") !== !1 && (i = b.data("480-600")),
                "undefined" != typeof b.data("480") && b.data("480") !== !1 && (j = b.data("480")),
                (d.length || f.length || g.length || h.length || i.length || j.length) && (d.length && (e += "@media only screen and (min-width: 1280px) and (max-width: 1440px) {.mkd-elements-holder-item-content." + c + " { padding: " + d + " !important; } }"),
                f.length && (e += "@media only screen and (min-width: 1024px) and (max-width: 1280px) {.mkd-elements-holder-item-content." + c + " { padding: " + f + " !important; } }"),
                g.length && (e += "@media only screen and (min-width: 768px) and (max-width: 1024px) {.mkd-elements-holder-item-content." + c + " { padding: " + g + " !important; } }"),
                h.length && (e += "@media only screen and (min-width: 600px) and (max-width: 768px) {.mkd-elements-holder-item-content." + c + " { padding: " + h + " !important; } }"),
                i.length && (e += "@media only screen and (min-width: 480px) and (max-width: 600px) {.mkd-elements-holder-item-content." + c + " { padding: " + i + " !important; } }"),
                j.length && (e += "@media only screen and (max-width: 480px) {.mkd-elements-holder-item-content." + c + " { padding: " + j + " !important; } }"))
            }),
            e.length && (d = '<style type="text/css" data-type="hotspot_mikado_modules_shortcodes_eh_custom_css">' + e + "</style>"),
            d.length && a("head").append(d)
        })
    }
    var na = {};
    mkd.modules.shortcodes = na,
    na.mkdInitCounter = f,
    na.mkdInitProgressBars = g,
    na.mkdInitCountdown = k,
    na.mkdInitMessages = i,
    na.mkdInitMessageHeight = j,
    na.mkdInitTestimonials = l,
    na.mkdInitCarousels = m,
    na.mkdInitPieChart = o,
    na.mkdInitPieChartDoughnut = q,
    na.mkdInitTabs = r,
    na.mkdInitTabIcons = s,
    na.mkdInitBlogListMasonry = t,
    na.mkdCustomFontResize = u,
    na.mkdInitImageGallery = z,
    na.mkdInitAccordions = y,
    na.mkdShowGoogleMap = v,
    na.mkdInitPortfolioListMasonry = C,
    na.mkdInitProductListMasonry = ea,
    na.mkdInitProductListLookbookMasonry = fa,
    na.mkdInitPortfolioListPinterest = F,
    na.mkdInitPortfolio = A,
    na.mkdInitPortfolioMasonryFilter = H,
    na.mkdInitPortfolioLoadMore = I,
    na.mkdCheckSliderForHeaderStyle = M,
    na.mkdInfoBox = N,
    na.mkdProcess = O,
    na.mkdTwitterSlider = n,
    na.mkdComparisonPricingTables = P,
    na.mkdProgressBarVertical = Q,
    na.mkdIconProgressBar = R,
    na.mkdBlogSlider = T,
    na.mkdResizeBlogSlider = S,
    na.mkdTeamSlider = U,
    na.mkdCardSlider = V,
    na.mkdCenteredSlider = Y,
    na.mkdOnDocumentReady = b,
    na.mkdOnWindowLoad = c,
    na.mkdOnWindowResize = d,
    na.mkdOnWindowScroll = e,
    na.emptySpaceResponsive = $,
    na.horizontalTimeline = Z,
    na.mkdInitVerticalSplitSlider = _,
    na.mkdDeviceSlider = W,
    na.mkdInitMobileSlide = X,
    na.mkdTiltHoverEffect = ka,
    na.mkdComparisonSlider = la,
    a(document).ready(b),
    a(window).load(c),
    a(window).resize(d),
    a(window).scroll(e);
    var oa = mkd.modules.shortcodes.mkdIcon = function() {
        var b = a(".mkd-icon-shortcode")
          , c = function(a) {
            a.hasClass("mkd-icon-animation") && a.appear(function() {
                a.parent(".mkd-icon-animation-holder").addClass("mkd-icon-animation-show")
            }, {
                accX: 0,
                accY: mkdGlobalVars.vars.mkdElementAppearAmount
            })
        }
          , d = function(a) {
            if ("undefined" != typeof a.data("hover-color")) {
                var b = function(a) {
                    a.data.icon.css("color", a.data.color)
                }
                  , c = a.find(".mkd-icon-element")
                  , d = a.data("hover-color")
                  , e = c.css("color");
                "" !== d && (a.on("mouseenter", {
                    icon: c,
                    color: d
                }, b),
                a.on("mouseleave", {
                    icon: c,
                    color: e
                }, b))
            }
        }
          , e = function(a) {
            if ("undefined" != typeof a.data("hover-background-color")) {
                var b = function(a) {
                    a.data.icon.css("background-color", a.data.color)
                }
                  , c = a.data("hover-background-color")
                  , d = a.css("background-color");
                "" !== c && (a.on("mouseenter", {
                    icon: a,
                    color: c
                }, b),
                a.on("mouseleave", {
                    icon: a,
                    color: d
                }, b))
            }
        }
          , f = function(a) {
            if ("undefined" != typeof a.data("hover-border-color")) {
                var b = function(a) {
                    a.data.icon.css("border-color", a.data.color)
                }
                  , c = a.data("hover-border-color")
                  , d = a.css("border-color");
                "" !== c && (a.on("mouseenter", {
                    icon: a,
                    color: c
                }, b),
                a.on("mouseleave", {
                    icon: a,
                    color: d
                }, b))
            }
        };
        return {
            init: function() {
                b.length && b.each(function() {
                    c(a(this)),
                    d(a(this)),
                    e(a(this)),
                    f(a(this))
                })
            }
        }
    }
      , pa = mkd.modules.shortcodes.mkdSocialIconWidget = function() {
        var b = a(".mkd-social-icon-widget-holder")
          , c = function(a) {
            if ("undefined" != typeof a.data("hover-color")) {
                var b = function(a) {
                    a.data.icon.css("color", a.data.color)
                }
                  , c = a
                  , d = a.data("hover-color")
                  , e = c.css("color");
                "" !== d && (a.on("mouseenter", {
                    icon: c,
                    color: d
                }, b),
                a.on("mouseleave", {
                    icon: c,
                    color: e
                }, b))
            }
        };
        return {
            init: function() {
                b.length && b.each(function() {
                    c(a(this))
                })
            }
        }
    }
      , qa = mkd.modules.shortcodes.mkdButton = function() {
        var b = a(".mkd-btn")
          , c = function(a) {
            if ("undefined" != typeof a.data("hover-color")) {
                var b = function(a) {
                    a.data.button.css("color", a.data.color)
                }
                  , c = a.css("color")
                  , d = a.data("hover-color");
                a.on("mouseenter", {
                    button: a,
                    color: d
                }, b),
                a.on("mouseleave", {
                    button: a,
                    color: c
                }, b)
            }
        }
          , d = function(a) {
            if ("undefined" != typeof a.data("hover-bg-color")) {
                var b = function(a) {
                    a.data.button.css("background-color", a.data.color)
                }
                  , c = a.css("background-color")
                  , d = a.data("hover-bg-color");
                a.on("mouseenter", {
                    button: a,
                    color: d
                }, b),
                a.on("mouseleave", {
                    button: a,
                    color: c
                }, b)
            }
        }
          , e = function(a) {
            if ("undefined" != typeof a.data("hover-border-color")) {
                var b = function(a) {
                    a.data.button.css("border-color", a.data.color)
                }
                  , c = a.css("borderTopColor")
                  , d = a.data("hover-border-color");
                a.on("mouseenter", {
                    button: a,
                    color: d
                }, b),
                a.on("mouseleave", {
                    button: a,
                    color: c
                }, b)
            }
        };
        return {
            init: function() {
                b.length && b.each(function() {
                    c(a(this)),
                    d(a(this)),
                    e(a(this))
                })
            }
        }
    }
      , ra = mkd.modules.shortcodes.mkdPricingTableWithIcon = function() {
        var b = a(".mkd-pricing-table-wi")
          , c = function(a) {
            if ("undefined" != typeof a.data("hover-bg-color")) {
                var b = function(a) {
                    a.data.pricingTable.css("background-color", a.data.color)
                }
                  , c = a.css("background-color")
                  , d = a.data("hover-bg-color");
                a.on("mouseenter", {
                    pricingTable: a,
                    color: d
                }, b),
                a.on("mouseleave", {
                    pricingTable: a,
                    color: c
                }, b)
            }
        };
        return {
            init: function() {
                b.length && b.each(function() {
                    c(a(this))
                })
            }
        }
    }
      , sa = mkd.modules.shortcodes.mkdSlider = function() {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o = a(".mkd-slider .carousel"), p = /url\(["']?([^'")]+)['"]?\)/, q = [1600, 1200, 900, 650, 500, 320], r = {
            zoom_center: "1.2, 0, 0, 1.2, 0, 0",
            zoom_top_left: "1.2, 0, 0, 1.2, -150, -150",
            zoom_top_right: "1.2, 0, 0, 1.2, 150, -150",
            zoom_bottom_left: "1.2, 0, 0, 1.2, -150, 150",
            zoom_bottom_right: "1.2, 0, 0, 1.2, 150, 150"
        }, s = /\([0-9epx\.\, \t\-]+/gi, t = function(a) {
            return a.match(s)[0].substr(1).split(",").map(function(a) {
                return parseFloat(a)
            })
        }, u = ["transform", "-webkit-transform"], v = function(a) {
            var b = null;
            return u.some(function(c) {
                return b = a.css(c),
                null !== b && "" !== b
            }),
            b = b && "none" !== b ? b : "matrix(1,0,0,1,0,0)",
            t(b)
        }, w = function(a, b) {
            for (var c = "matrix(" + b.join(",") + ")", d = u.length - 1; d >= 0; --d)
                a.css(u[d], c + " rotate(0.01deg)")
        }, x = function(a, b, c) {
            return a + (b - a) * (c / 100)
        };
        a.fn.transformAnimate = function(b) {
            var c = {
                transform: "matrix(1,0,0,1,0,0)"
            };
            a.extend(c, b),
            this.css("percentAnim", 0);
            var d = v(this)
              , e = t(c.transform);
            return c.step = function(c, f) {
                var g = a(this)
                  , h = d.map(function(a, b) {
                    return x(a, e[b], c)
                });
                w(g, h),
                b.step && b.step.apply(this, [h, f])
            }
            ,
            this.stop().animate({
                percentAnim: 100
            }, c)
        }
        ;
        var y = function(a, b, c, d) {
            var e = b;
            d || (mkd.windowWidth > c[0] ? e = b : mkd.windowWidth > c[1] ? e = .75 * b : mkd.windowWidth > c[2] ? e = .6 * b : mkd.windowWidth > c[3] ? e = .55 * b : mkd.windowWidth <= c[3] && (e = .45 * b)),
            a.css({
                height: e + "px"
            }),
            a.find(".mkd-slider-preloader").css({
                height: e + "px"
            }),
            a.find(".mkd-slider-preloader .mkd-ajax-loader").css({
                display: "block"
            }),
            a.find(".item").css({
                height: e + "px"
            })
        }
          , z = function(b) {
            var c = mkd.windowWidth < 1e3 ? mkdGlobalVars.vars.mkdMobileHeaderHeight + a(".mkd-top-bar").height() : 0;
            b.css({
                height: mkd.windowHeight - c + "px"
            }),
            b.find(".mkd-slider-preloader").css({
                height: mkd.windowHeight + "px"
            }),
            b.find(".mkd-slider-preloader .mkd-ajax-loader").css({
                display: "block"
            }),
            b.find(".item").css({
                height: mkd.windowHeight + "px"
            })
        }
          , A = function(a, b) {
            window["slider_graphic_width_" + b] = [],
            window["slider_graphic_height_" + b] = [],
            window["slider_title_" + b] = [],
            window["slider_subtitle_" + b] = [],
            window["slider_text_" + b] = [],
            window["slider_button1_" + b] = [],
            window["slider_button2_" + b] = [],
            window["slider_graphic_width_" + b].push(parseFloat(a.find(".mkd-thumb img").data("width"))),
            window["slider_graphic_height_" + b].push(parseFloat(a.find(".mkd-thumb img").data("height"))),
            window["slider_title_" + b].push(parseFloat(a.find(".mkd-slide-title").css("font-size"))),
            window["slider_subtitle_" + b].push(parseFloat(a.find(".mkd-slide-subtitle").css("font-size"))),
            window["slider_text_" + b].push(parseFloat(a.find(".mkd-slide-text").css("font-size"))),
            window["slider_button1_" + b].push(parseFloat(a.find(".mkd-btn:eq(0)").css("font-size"))),
            window["slider_button2_" + b].push(parseFloat(a.find(".mkd-btn:eq(1)").css("font-size"))),
            window["slider_title_" + b].push(parseFloat(a.find(".mkd-slide-title").css("line-height"))),
            window["slider_subtitle_" + b].push(parseFloat(a.find(".mkd-slide-subtitle").css("line-height"))),
            window["slider_text_" + b].push(parseFloat(a.find(".mkd-slide-text").css("line-height"))),
            window["slider_button1_" + b].push(parseFloat(a.find(".mkd-btn:eq(0)").css("line-height"))),
            window["slider_button2_" + b].push(parseFloat(a.find(".mkd-btn:eq(1)").css("line-height"))),
            window["slider_title_" + b].push(parseFloat(a.find(".mkd-slide-title").css("letter-spacing"))),
            window["slider_subtitle_" + b].push(parseFloat(a.find(".mkd-slide-subtitle").css("letter-spacing"))),
            window["slider_text_" + b].push(parseFloat(a.find(".mkd-slide-text").css("letter-spacing"))),
            window["slider_button1_" + b].push(parseFloat(a.find(".mkd-btn:eq(0)").css("letter-spacing"))),
            window["slider_button2_" + b].push(parseFloat(a.find(".mkd-btn:eq(1)").css("letter-spacing"))),
            window["slider_title_" + b].push(parseFloat(a.find(".mkd-slide-title").css("margin-bottom"))),
            window["slider_subtitle_" + b].push(parseFloat(a.find(".mkd-slide-subtitle").css("margin-bottom"))),
            window["slider_button1_" + b].push(parseFloat(a.find(".mkd-btn:eq(0)").css("padding-top"))),
            window["slider_button2_" + b].push(parseFloat(a.find(".mkd-btn:eq(1)").css("padding-top"))),
            window["slider_button1_" + b].push(parseFloat(a.find(".mkd-btn:eq(0)").css("padding-left"))),
            window["slider_button2_" + b].push(parseFloat(a.find(".mkd-btn:eq(1)").css("padding-left")))
        }
          , B = function(a, b, c, d, e, f) {
            function o(a, b, c, d, e) {
                g = a,
                h = b,
                i = c,
                j = d,
                k = e
            }
            mkd.windowWidth > a[0] ? o(b[0], c[0], d[0], e[0], f[0]) : mkd.windowWidth > a[1] ? o(b[1], c[1], d[1], e[1], f[1]) : mkd.windowWidth > a[2] ? o(b[2], c[2], d[2], e[2], f[2]) : mkd.windowWidth > a[3] ? o(b[3], c[3], d[3], e[3], f[3]) : mkd.windowWidth > a[4] ? o(b[4], c[4], d[4], e[4], f[4]) : mkd.windowWidth > a[5] ? o(b[5], c[5], d[5], e[5], f[5]) : o(b[6], c[6], d[6], e[6], f[6]),
            l = h,
            m = i,
            n = j,
            mkd.windowWidth <= a[0] && (l = h / 2,
            m = i / 2,
            n = j / 2)
        }
          , C = function(a, b, c) {
            c && (g = h = i = j = k = l = m = n = 1),
            a.find(".mkd-thumb").css({
                width: Math.round(window["slider_graphic_width_" + b][0] * g) + "px",
                height: Math.round(window["slider_graphic_height_" + b][0] * g) + "px"
            }),
            a.find(".mkd-slide-title").css({
                "font-size": Math.round(window["slider_title_" + b][0] * h) + "px",
                "line-height": Math.round(window["slider_title_" + b][1] * h) + "px",
                "letter-spacing": Math.round(window["slider_title_" + b][2] * h) + "px",
                "margin-bottom": Math.round(window["slider_title_" + b][3] * h) + "px"
            }),
            a.find(".mkd-slide-subtitle").css({
                "font-size": Math.round(window["slider_subtitle_" + b][0] * i) + "px",
                "line-height": Math.round(window["slider_subtitle_" + b][1] * i) + "px",
                "margin-bottom": Math.round(window["slider_subtitle_" + b][3] * i) + "px",
                "letter-spacing": Math.round(window["slider_subtitle_" + b][2] * m) + "px"
            }),
            a.find(".mkd-slide-text").css({
                "font-size": Math.round(window["slider_text_" + b][0] * j) + "px",
                "line-height": Math.round(window["slider_text_" + b][1] * j) + "px",
                "letter-spacing": Math.round(window["slider_text_" + b][2] * n) + "px"
            }),
            a.find(".mkd-btn:eq(0)").css({
                "font-size": Math.round(window["slider_button1_" + b][0] * k) + "px",
                "line-height": Math.round(window["slider_button1_" + b][1] * k) + "px",
                "letter-spacing": Math.round(window["slider_button1_" + b][2] * k) + "px",
                "padding-top": Math.round(window["slider_button1_" + b][3] * k) + "px",
                "padding-bottom": Math.round(window["slider_button1_" + b][3] * k) + "px",
                "padding-left": Math.round(window["slider_button1_" + b][4] * k) + "px",
                "padding-right": Math.round(window["slider_button1_" + b][4] * k) + "px"
            }),
            a.find(".mkd-btn:eq(1)").css({
                "font-size": Math.round(window["slider_button2_" + b][0] * k) + "px",
                "line-height": Math.round(window["slider_button2_" + b][1] * k) + "px",
                "letter-spacing": Math.round(window["slider_button2_" + b][2] * k) + "px",
                "padding-top": Math.round(window["slider_button2_" + b][3] * k) + "px",
                "padding-bottom": Math.round(window["slider_button2_" + b][3] * k) + "px",
                "padding-left": Math.round(window["slider_button2_" + b][4] * k) + "px",
                "padding-right": Math.round(window["slider_button2_" + b][4] * k) + "px"
            })
        }
          , D = function(g) {
            if (g.find(".item").each(function(b) {
                A(a(this), b),
                C(a(this), b, !1)
            }),
            g.hasClass("mkd-full-screen"))
                z(g),
                a(window).resize(function() {
                    B(q, b, c, d, e, f),
                    z(g),
                    g.find(".item").each(function(b) {
                        C(a(this), b, !1)
                    })
                });
            else if (g.hasClass("mkd-responsive-height")) {
                var h = g.data("height");
                y(g, h, q, !1),
                a(window).resize(function() {
                    B(q, b, c, d, e, f),
                    y(g, h, q, !1),
                    g.find(".item").each(function(b) {
                        C(a(this), b, !1)
                    })
                })
            } else {
                var h = g.data("height");
                g.find(".mkd-slider-preloader").css({
                    height: g.height() + "px"
                }),
                g.find(".mkd-slider-preloader .mkd-ajax-loader").css({
                    display: "block"
                }),
                mkd.windowWidth < 1e3 ? y(g, h, q, !1) : y(g, h, q, !0),
                a(window).resize(function() {
                    B(q, b, c, d, e, f),
                    mkd.windowWidth < 1e3 ? (y(g, h, q, !1),
                    g.find(".item").each(function(b) {
                        C(a(this), b, !1)
                    })) : (y(g, h, q, !0),
                    g.find(".item").each(function(b) {
                        C(a(this), b, !0)
                    }))
                })
            }
        }
          , E = function(a, b, c) {
            1 == b ? (a.find(".left.carousel-control .prev").html(c),
            a.find(".right.carousel-control .next").html(b + 1)) : b == c ? (a.find(".left.carousel-control .prev").html(b - 1),
            a.find(".right.carousel-control .next").html(1)) : (a.find(".left.carousel-control .prev").html(b - 1),
            a.find(".right.carousel-control .next").html(b + 1))
        }
          , F = function(b) {
            var c = 1500
              , d = 1920
              , e = 1080
              , f = 1920 / 1080;
            b.find(".item .mkd-video .mkd-video-wrap").each(function() {
                var b = mkd.windowWidth
                  , g = a(this).closest(".carousel").height();
                a(this).width(b),
                c = f * (g + 20),
                a(this).height(g);
                var h = b / d
                  , i = (g - mkdGlobalVars.vars.mkdMenuAreaHeight) / e
                  , j = i;
                h > i && (j = h),
                j * d < c && (j = c / d),
                a(this).find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(j * d + 2)),
                a(this).find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(j * e + 2)),
                a(this).scrollLeft((a(this).find("video").width() - b) / 2),
                a(this).find(".mejs-overlay, .mejs-poster").scrollTop((a(this).find("video").height() - g) / 2),
                a(this).scrollTop((a(this).find("video").height() - g) / 2)
            })
        }
          , G = function(b) {
            a(".item .mkd-video-wrap .video").mediaelementplayer({
                enableKeyboard: !1,
                iPadUseNativeControls: !1,
                pauseOtherPlayers: !1,
                iPhoneUseNativeControls: !1,
                AndroidUseNativeControls: !1
            }),
            a(window).resize(function() {
                F(b)
            }),
            navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (a(".mkd-slider .mkd-mobile-video-image").show(),
            a(".mkd-slider .mkd-video-wrap").remove())
        }
          , H = function(b, c, d) {
            b.find(".carousel-inner .item:first-child").addClass("active"),
            M(a(".carousel .active"), b.hasClass("mkd-header-effect")),
            b.hasClass("mkd-slider-numbers") && E(b, 1, c),
            b.find(".item video").length && (F(b),
            G(b)),
            b.hasClass("mkd-auto-start") ? (b.carousel({
                interval: d,
                pause: !1
            }),
            b.find(".slide_buttons_holder .qbutton").mouseenter(function() {
                b.carousel("pause")
            }).mouseleave(function() {
                b.carousel("cycle")
            })) : b.carousel({
                interval: 0,
                pause: !1
            }),
            a(".carousel-inner .item:first-child").hasClass("mkd-animate-image") && mkd.windowWidth > 1e3 && b.find(".carousel-inner .item.mkd-animate-image:first-child .mkd-image").transformAnimate({
                transform: "matrix(" + r[a(".carousel-inner .item:first-child").data("mkd_animate_image")] + ")",
                duration: 3e4
            })
        };
        return {
            init: function() {
                if (o.length) {
                    if (o.each(function() {
                        var g = a(this)
                          , h = g.data("slide_animation_timeout")
                          , i = g.find(".item").length;
                        if (g.data("mkd_responsive_breakpoints") && "set2" == g.data("mkd_responsive_breakpoints") && (q = [1600, 1300, 1e3, 768, 567, 320]),
                        b = g.data("mkd_responsive_graphic_coefficients").split(","),
                        c = g.data("mkd_responsive_title_coefficients").split(","),
                        d = g.data("mkd_responsive_subtitle_coefficients").split(","),
                        e = g.data("mkd_responsive_text_coefficients").split(","),
                        f = g.data("mkd_responsive_button_coefficients").split(","),
                        B(q, b, c, d, e, f),
                        D(g),
                        mkd.htmlEl.hasClass("touch")) {
                            if (g.find(".item:first-child .mkd-mobile-video-image").length > 0)
                                var j = p.exec(g.find(".item:first-child .mkd-mobile-video-image").attr("style"));
                            else
                                var j = p.exec(g.find(".item:first-child .mkd-image").attr("style"));
                            if (j) {
                                var k = new Image;
                                k.src = j[1],
                                a(k).load(function() {
                                    a(".mkd-slider-preloader").fadeOut(500),
                                    H(g, i, h)
                                })
                            }
                        } else if (g.find(".item:first-child video").length > 0)
                            g.find(".item:first-child video").get(0).addEventListener("loadeddata", function() {
                                a(".mkd-slider-preloader").fadeOut(500),
                                H(g, i, h)
                            });
                        else {
                            var j = p.exec(g.find(".item:first-child .mkd-image").attr("style"));
                            if (j) {
                                var k = new Image;
                                k.src = j[1],
                                a(k).load(function() {
                                    a(".mkd-slider-preloader").fadeOut(500),
                                    H(g, i, h)
                                })
                            }
                        }
                        g.on("slide.bs.carousel", function() {
                            g.addClass("mkd-in-progress"),
                            g.find(".active .mkd-slider-content-outer").fadeTo(250, 0)
                        }),
                        g.on("slid.bs.carousel", function() {
                            if (g.removeClass("mkd-in-progress"),
                            g.find(".active .mkd-slider-content-outer").fadeTo(0, 1),
                            g.hasClass("mkd-slider-numbers")) {
                                var b = a(".item").index(a(".item.active")[0]) + 1;
                                E(g, b, i)
                            }
                            a(".item.mkd-animate-image .mkd-image").stop().css({
                                transform: "",
                                "-webkit-transform": ""
                            }),
                            a(".item.active").hasClass("mkd-animate-image") && mkd.windowWidth > 1e3 && a(".item.mkd-animate-image.active .mkd-image").transformAnimate({
                                transform: "matrix(" + r[a(".item.mkd-animate-image.active").data("mkd_animate_image")] + ")",
                                duration: 3e4
                            })
                        }),
                        g.swipe({
                            swipeLeft: function() {
                                g.carousel("next")
                            },
                            swipeRight: function() {
                                g.carousel("prev")
                            },
                            threshold: 20
                        })
                    }),
                    a(".no-touch .carousel").length) {
                        var g = skrollr.init({
                            smoothScrolling: !1,
                            forceHeight: !1
                        });
                        g.refresh()
                    }
                    a(window).scroll(function() {
                        a(".mkd-slider .carousel").height() < mkd.scroll ? a(".mkd-slider .carousel").addClass("mkd-disable-slider-header-style-changing") : (a(".mkd-slider .carousel").removeClass("mkd-disable-slider-header-style-changing"),
                        M(a(".mkd-slider .carousel .active"), a(".mkd-slider .carousel").hasClass("mkd-header-effect"))),
                        a(".mkd-slider .carousel").hasClass("mkd-full-screen") && mkd.scroll > mkd.windowHeight && mkd.windowWidth > 1e3 ? a(".mkd-slider .carousel").find(".carousel-inner, .carousel-indicators").hide() : !a(".mkd-slider .carousel").hasClass("mkd-full-screen") && mkd.scroll > a(".mkd-slider .carousel").height() && mkd.windowWidth > 1e3 ? a(".mkd-slider .carousel").find(".carousel-inner, .carousel-indicators").hide() : a(".mkd-slider .carousel").find(".carousel-inner, .carousel-indicators").show()
                    })
                }
            }
        }
    }
      , ta = mkd.modules.shortcodes.mkdAdvancedSlider = function() {
        var b = function(b, c, d, e, f, g) {
            c.data("slide", e).attr("data-slide", e),
            c.find(".mkd-advanced-slider").css("margin-left", g ? -f.position().left + a(c).outerWidth() / 2 - f.outerWidth() / 2 : -f.position().left),
            setTimeout(function() {
                mkd.modules.common.mkdLazyImages()
            }, 500);
            var h = d < e ? 1 : -1;
            h > 0 && e == b.length ? c.find('.button[data-direction="next"]').addClass("hidden") : c.find('.button[data-direction="next"]').removeClass("hidden"),
            h < 0 && 1 == e ? c.find('.button[data-direction="prev"]').addClass("hidden") : c.find('.button[data-direction="prev"]').removeClass("hidden")
        }
          , c = function(c, d, e) {
            c.each(function(c, f) {
                var g = a(f).find(".mkd-advanced-slider > .slide")
                  , h = a(f).find(".dot")
                  , i = Math.round(g.length / 2) - 1;
                d ? (h.length > 0 ? a(h[i]).click() : b(g, a(f), 1, i, a(g[i]), e),
                a(f).data("slide", i + 1).attr("data-slide", i + 1),
                a(f).find(".button").removeClass("hidden")) : h.length > 0 ? a(h[0]).click() : b(g, a(f), 1, 1, a(g[0]), e)
            })
        }
          , d = function(b, c, d) {
            c.find(".mkd-advanced-slider").width(99999),
            b.each(function() {
                a(this).css("max-width", c.outerWidth())
            })
        }
          , e = function() {
            var b = a(".cards");
            b.each(function() {
                var b = a(this)
                  , c = b.find(".card");
                c.each(function() {
                    var d = a(this);
                    d.click(function() {
                        return c.last().is(d) || (d.detach(),
                        d.insertAfter(c.last()),
                        c = b.find(".card")),
                        !1
                    })
                })
            })
        }
          , f = function() {
            var b = a(".cards");
            b.each(function() {
                var b = a(this)
                  , c = b.find(".card").get().reverse();
                b.appear(function() {
                    a(c).each(function(b) {
                        var c = a(this);
                        setTimeout(function() {
                            c.addClass("hovered"),
                            setTimeout(function() {
                                c.removeClass("hovered")
                            }, 600)
                        }, 200 * b)
                    })
                }, {
                    accX: 0,
                    accY: -(mkd.windowHeight / 3)
                })
            })
        }
          , g = function() {
            a(".mkd-advanced-holder .card").each(function(b, c) {
                a(c).click(function() {
                    var b = a("." + a(c).data("value"));
                    return b.closest(".mkd-advanced-panes").find(".pane").removeClass("active"),
                    b.addClass("active"),
                    mkd.modules.common.mkdLazyImages(),
                    !1
                })
            }),
            a(".mkd-advanced-holder").each(function(b, c) {
                a(c).find(".mkd-advanced-panes .pane").last().addClass("active"),
                a(c).find(".mkd-advanced-panes .pane .card").length ? a(c).find(".mkd-advanced-panes .pane .card").each(function(b, d) {
                    a(d).detach(),
                    a(c).find(".mkd-advanced-header").append(a(d))
                }) : a(c).find(".mkd-advanced-header").remove()
            })
        }
          , h = function() {
            a(".mkd-advanced-panes").each(function() {
                var b = a(this)
                  , c = -1
                  , d = b.find(".pane").height();
                c = c > d ? c : d,
                b.height(c)
            })
        }
          , i = function(a) {
            a.swipe({
                swipeLeft: function() {
                    a.find('.button[data-direction="next"]').click()
                },
                swipeRight: function() {
                    a.find('.button[data-direction="prev"]').click()
                },
                threshold: 20
            })
        }
          , j = function() {
            a(".mkd-advanced-slider-holder").each(function(e, f) {
                var g = a(f).find(".mkd-advanced-slider > .slide")
                  , j = a(f).data("active-middle-slide")
                  , k = a(f).data("center");
                a(f).find(".button").each(function(c, d) {
                    a(d).click(function() {
                        var c = "prev" == a(d).data("direction") ? -1 : 1
                          , e = a(f).data("slide")
                          , h = a(f).data("slide") + c
                          , i = a(f).find('.slide[data-slide="' + h + '"]');
                        return i.length && (b(g, a(f), e, h, i, k),
                        a(f).find(".dot").removeClass("active").filter('[data-slide="' + h + '"]').addClass("active")),
                        !1
                    })
                }),
                a(f).find(".dot").each(function(c, d) {
                    a(d).click(function() {
                        a(f).find(".dot").removeClass("active"),
                        a(d).addClass("active");
                        var c = a(f).data("slide")
                          , e = a(d).data("slide")
                          , h = a(f).find('.slide[data-slide="' + e + '"]');
                        return h.length && b(g, a(f), c, e, h, k),
                        !1
                    })
                }),
                d(g, a(f), !1),
                c(a(f), j, k),
                i(a(f)),
                a(window).resize(function() {
                    d(g, a(f), !0),
                    c(a(f), j, k),
                    h()
                })
            })
        };
        return {
            init: function() {
                a(".mkd-advanced-slider-holder").length && (j(),
                h(),
                g(),
                e())
            },
            load: function() {
                a(".mkd-advanced-slider-holder").length && (h(),
                f())
            }
        }
    }
      , ua = function() {
        var b = a(".mkd-ot-date");
        b.length && b.each(function() {
            a(this).datepicker({
                prevText: '<span class="arrow_carrot-left"></span>',
                nextText: '<span class="arrow_carrot-right"></span>'
            })
        })
    }
}(jQuery)

