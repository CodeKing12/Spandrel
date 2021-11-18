
window.Modernizr = function(a, b, c) {
    function d(a) {
        t.cssText = a
    }
    function e(a, b) {
        return d(x.join(a + ";") + (b || ""))
    }
    function f(a, b) {
        return typeof a === b
    }
    function g(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function h(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!g(e, "-") && t[e] !== c)
                return "pfx" != b || e
        }
        return !1
    }
    function i(a, b, d) {
        for (var e in a) {
            var g = b[a[e]];
            if (g !== c)
                return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
        }
        return !1
    }
    function j(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1)
          , e = (a + " " + z.join(d + " ") + d).split(" ");
        return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + A.join(d + " ") + d).split(" "),
        i(e, b, c))
    }
    function k() {
        o.input = function(c) {
            for (var d = 0, e = c.length; d < e; d++)
                E[c[d]] = c[d]in u;
            return E.list && (E.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
            E
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        o.inputtypes = function(a) {
            for (var d, e, f, g = 0, h = a.length; g < h; g++)
                u.setAttribute("type", e = a[g]),
                d = "text" !== u.type,
                d && (u.value = v,
                u.style.cssText = "position:absolute;visibility:hidden;",
                /^range$/.test(e) && u.style.WebkitAppearance !== c ? (q.appendChild(u),
                f = b.defaultView,
                d = f.getComputedStyle && "textfield" !== f.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight,
                q.removeChild(u)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? u.checkValidity && u.checkValidity() === !1 : u.value != v)),
                D[a[g]] = !!d;
            return D
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var l, m, n = "2.8.3", o = {}, p = !0, q = b.documentElement, r = "modernizr", s = b.createElement(r), t = s.style, u = b.createElement("input"), v = ":)", w = {}.toString, x = " -webkit- -moz- -o- -ms- ".split(" "), y = "Webkit Moz O ms", z = y.split(" "), A = y.toLowerCase().split(" "), B = {
        svg: "http://www.w3.org/2000/svg"
    }, C = {}, D = {}, E = {}, F = [], G = F.slice, H = function(a, c, d, e) {
        var f, g, h, i, j = b.createElement("div"), k = b.body, l = k || b.createElement("body");
        if (parseInt(d, 10))
            for (; d--; )
                h = b.createElement("div"),
                h.id = e ? e[d] : r + (d + 1),
                j.appendChild(h);
        return f = ["&#173;", '<style id="s', r, '">', a, "</style>"].join(""),
        j.id = r,
        (k ? j : l).innerHTML += f,
        l.appendChild(j),
        k || (l.style.background = "",
        l.style.overflow = "hidden",
        i = q.style.overflow,
        q.style.overflow = "hidden",
        q.appendChild(l)),
        g = c(j, a),
        k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l),
        q.style.overflow = i),
        !!g
    }, I = function() {
        function a(a, e) {
            e = e || b.createElement(d[a] || "div"),
            a = "on" + a;
            var g = a in e;
            return g || (e.setAttribute || (e = b.createElement("div")),
            e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""),
            g = f(e[a], "function"),
            f(e[a], "undefined") || (e[a] = c),
            e.removeAttribute(a))),
            e = null,
            g
        }
        var d = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return a
    }(), J = {}.hasOwnProperty;
    m = f(J, "undefined") || f(J.call, "undefined") ? function(a, b) {
        return b in a && f(a.constructor.prototype[b], "undefined")
    }
    : function(a, b) {
        return J.call(a, b)
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b)
            throw new TypeError;
        var c = G.call(arguments, 1)
          , d = function() {
            if (this instanceof d) {
                var e = function() {};
                e.prototype = b.prototype;
                var f = new e
                  , g = b.apply(f, c.concat(G.call(arguments)));
                return Object(g) === g ? g : f
            }
            return b.apply(a, c.concat(G.call(arguments)))
        };
        return d
    }
    ),
    C.flexbox = function() {
        return j("flexWrap")
    }
    ,
    C.flexboxlegacy = function() {
        return j("boxDirection")
    }
    ,
    C.canvas = function() {
        var a = b.createElement("canvas");
        return !!a.getContext && !!a.getContext("2d")
    }
    ,
    C.canvastext = function() {
        return !!o.canvas && !!f(b.createElement("canvas").getContext("2d").fillText, "function")
    }
    ,
    C.touch = function() {
        var c;
        return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : H(["@media (", x.join("touch-enabled),("), r, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = 9 === a.offsetTop
        }),
        c
    }
    ,
    C.hashchange = function() {
        return I("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }
    ,
    C.history = function() {
        return !!a.history && !!history.pushState
    }
    ,
    C.draganddrop = function() {
        var a = b.createElement("div");
        return "draggable"in a || "ondragstart"in a && "ondrop"in a
    }
    ,
    C.rgba = function() {
        return d("background-color:rgba(150,255,150,.5)"),
        g(t.backgroundColor, "rgba")
    }
    ,
    C.hsla = function() {
        return d("background-color:hsla(120,40%,100%,.5)"),
        g(t.backgroundColor, "rgba") || g(t.backgroundColor, "hsla")
    }
    ,
    C.multiplebgs = function() {
        return d("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(t.background)
    }
    ,
    C.backgroundsize = function() {
        return j("backgroundSize")
    }
    ,
    C.borderimage = function() {
        return j("borderImage")
    }
    ,
    C.borderradius = function() {
        return j("borderRadius")
    }
    ,
    C.boxshadow = function() {
        return j("boxShadow")
    }
    ,
    C.textshadow = function() {
        return "" === b.createElement("div").style.textShadow
    }
    ,
    C.opacity = function() {
        return e("opacity:.55"),
        /^0.55$/.test(t.opacity)
    }
    ,
    C.cssanimations = function() {
        return j("animationName")
    }
    ,
    C.csscolumns = function() {
        return j("columnCount")
    }
    ,
    C.cssgradients = function() {
        var a = "background-image:"
          , b = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
          , c = "linear-gradient(left top,#9f9, white);";
        return d((a + "-webkit- ".split(" ").join(b + a) + x.join(c + a)).slice(0, -a.length)),
        g(t.backgroundImage, "gradient")
    }
    ,
    C.cssreflections = function() {
        return j("boxReflect")
    }
    ,
    C.csstransforms = function() {
        return !!j("transform")
    }
    ,
    C.csstransforms3d = function() {
        var a = !!j("perspective");
        return a && "webkitPerspective"in q.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }),
        a
    }
    ,
    C.csstransitions = function() {
        return j("transition")
    }
    ,
    C.fontface = function() {
        var a;
        return H('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
            var e = b.getElementById("smodernizr")
              , f = e.sheet || e.styleSheet
              , g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
        }),
        a
    }
    ,
    C.generatedcontent = function() {
        var a;
        return H(["#", r, "{font:0/0 a}#", r, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
            a = b.offsetHeight >= 3
        }),
        a
    }
    ,
    C.video = function() {
        var a = b.createElement("video")
          , c = !1;
        try {
            (c = !!a.canPlayType) && (c = new Boolean(c),
            c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
            c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
            c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (d) {}
        return c
    }
    ,
    C.audio = function() {
        var a = b.createElement("audio")
          , c = !1;
        try {
            (c = !!a.canPlayType) && (c = new Boolean(c),
            c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (d) {}
        return c
    }
    ,
    C.svg = function() {
        return !!b.createElementNS && !!b.createElementNS(B.svg, "svg").createSVGRect
    }
    ,
    C.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>",
        (a.firstChild && a.firstChild.namespaceURI) == B.svg
    }
    ,
    C.svgclippaths = function() {
        return !!b.createElementNS && /SVGClipPath/.test(w.call(b.createElementNS(B.svg, "clipPath")))
    }
    ;
    for (var K in C)
        m(C, K) && (l = K.toLowerCase(),
        o[l] = C[K](),
        F.push((o[l] ? "" : "no-") + l));
    return o.input || k(),
    o.addTest = function(a, b) {
        if ("object" == typeof a)
            for (var d in a)
                m(a, d) && o.addTest(d, a[d]);
        else {
            if (a = a.toLowerCase(),
            o[a] !== c)
                return o;
            b = "function" == typeof b ? b() : b,
            "undefined" != typeof p && p && (q.className += " " + (b ? "" : "no-") + a),
            o[a] = b
        }
        return o
    }
    ,
    d(""),
    s = u = null,
    function(a, b) {
        function c(a, b) {
            var c = a.createElement("p")
              , d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>",
            d.insertBefore(c.lastChild, d.firstChild)
        }
        function d() {
            var a = s.elements;
            return "string" == typeof a ? a.split(" ") : a
        }
        function e(a) {
            var b = r[a[p]];
            return b || (b = {},
            q++,
            a[p] = q,
            r[q] = b),
            b
        }
        function f(a, c, d) {
            if (c || (c = b),
            k)
                return c.createElement(a);
            d || (d = e(c));
            var f;
            return f = d.cache[a] ? d.cache[a].cloneNode() : o.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a),
            !f.canHaveChildren || n.test(a) || f.tagUrn ? f : d.frag.appendChild(f)
        }
        function g(a, c) {
            if (a || (a = b),
            k)
                return a.createDocumentFragment();
            c = c || e(a);
            for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; g < i; g++)
                f.createElement(h[g]);
            return f
        }
        function h(a, b) {
            b.cache || (b.cache = {},
            b.createElem = a.createElement,
            b.createFrag = a.createDocumentFragment,
            b.frag = b.createFrag()),
            a.createElement = function(c) {
                return s.shivMethods ? f(c, a, b) : b.createElem(c)
            }
            ,
            a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(a) {
                return b.createElem(a),
                b.frag.createElement(a),
                'c("' + a + '")'
            }) + ");return n}")(s, b.frag)
        }
        function i(a) {
            a || (a = b);
            var d = e(a);
            return s.shivCSS && !j && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            k || h(a, d),
            a
        }
        var j, k, l = "3.7.0", m = a.html5 || {}, n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, p = "_html5shiv", q = 0, r = {};
        !function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>",
                j = "hidden"in a,
                k = 1 == a.childNodes.length || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                }()
            } catch (c) {
                j = !0,
                k = !0
            }
        }();
        var s = {
            elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: l,
            shivCSS: m.shivCSS !== !1,
            supportsUnknownElements: k,
            shivMethods: m.shivMethods !== !1,
            type: "default",
            shivDocument: i,
            createElement: f,
            createDocumentFragment: g
        };
        a.html5 = s,
        i(b)
    }(this, b),
    o._version = n,
    o._prefixes = x,
    o._domPrefixes = A,
    o._cssomPrefixes = z,
    o.hasEvent = I,
    o.testProp = function(a) {
        return h([a])
    }
    ,
    o.testAllProps = j,
    o.testStyles = H,
    q.className = q.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + F.join(" ") : ""),
    o
}(this, this.document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == q.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {}
    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = r.shift();
        s = 1,
        a ? a.t ? o(function() {
            ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(),
        h()) : s = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!n && g(l.readyState) && (t.r = n = 1,
            !s && h(),
            l.onload = l.onreadystatechange = null,
            b)) {
                "img" != a && o(function() {
                    v.removeChild(l)
                }, 50);
                for (var d in A[c])
                    A[c].hasOwnProperty(d) && A[c][d].onload()
            }
        }
        var j = j || m.errorTimeout
          , l = b.createElement(a)
          , n = 0
          , q = 0
          , t = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === A[c] && (q = 1,
        A[c] = []),
        "object" == a ? l.data = c : (l.src = c,
        l.type = a),
        l.width = l.height = "0",
        l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, q)
        }
        ,
        r.splice(e, 0, t),
        "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p),
        o(k, j)) : A[c].push(l))
    }
    function j(a, b, c, d, f) {
        return s = 0,
        b = b || "j",
        e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a),
        1 == r.length && h()),
        this
    }
    function k() {
        var a = m;
        return a.loader = {
            load: j,
            i: 0
        },
        a
    }
    var l, m, n = b.documentElement, o = a.setTimeout, p = b.getElementsByTagName("script")[0], q = {}.toString, r = [], s = 0, t = "MozAppearance"in n.style, u = t && !!b.createRange().compareNode, v = u ? n : p.parentNode, n = a.opera && "[object Opera]" == q.call(a.opera), n = !!b.attachEvent && !n, w = t ? "object" : n ? "script" : "img", x = n ? "script" : w, y = Array.isArray || function(a) {
        return "[object Array]" == q.call(a)
    }
    , z = [], A = {}, B = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]),
            a
        }
    };
    m = function(a) {
        function b(a) {
            var b, c, d, a = a.split("!"), e = z.length, f = a.pop(), g = a.length, f = {
                url: f,
                origUrl: f,
                prefixes: a
            };
            for (c = 0; c < g; c++)
                d = a[c].split("="),
                (b = B[d.shift()]) && (f = b(f, d));
            for (c = 0; c < e; c++)
                f = z[c](f);
            return f
        }
        function g(a, e, f, g, h) {
            var i = b(a)
              , j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(),
            i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1,
            f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout),
            (d(e) || d(j)) && f.load(function() {
                k(),
                e && e(i.origUrl, h, g),
                j && j(i.origUrl, h, g),
                A[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))
                        c || (l = function() {
                            var a = [].slice.call(arguments);
                            m.apply(this, a),
                            n()
                        }
                        ),
                        g(a, l, b, 0, j);
                    else if (Object(a) === a)
                        for (i in h = function() {
                            var b, c = 0;
                            for (b in a)
                                a.hasOwnProperty(b) && c++;
                            return c
                        }(),
                        a)
                            a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
                                var a = [].slice.call(arguments);
                                m.apply(this, a),
                                n()
                            }
                            : l[i] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b),
                                    n()
                                }
                            }(m[i])),
                            g(a[i], l, b, i, j))
                } else
                    !c && n()
            }
            var h, i, j = !!a.test, k = a.load || a.both, l = a.callback || f, m = l, n = a.complete || f;
            c(j ? a.yep : a.nope, !!k),
            k && c(k)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a))
            g(a, 0, l, 0);
        else if (y(a))
            for (i = 0; i < a.length; i++)
                j = a[i],
                e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l);
        else
            Object(a) === a && h(a, l)
    }
    ,
    m.addPrefix = function(a, b) {
        B[a] = b
    }
    ,
    m.addFilter = function(a) {
        z.push(a)
    }
    ,
    m.errorTimeout = 1e4,
    null == b.readyState && b.addEventListener && (b.readyState = "loading",
    b.addEventListener("DOMContentLoaded", l = function() {
        b.removeEventListener("DOMContentLoaded", l, 0),
        b.readyState = "complete"
    }
    , 0)),
    a.yepnope = k(),
    a.yepnope.executeStack = h,
    a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k, l, n = b.createElement("script"), e = e || m.errorTimeout;
        n.src = a;
        for (l in d)
            n.setAttribute(l, d[l]);
        c = j ? h : c || f,
        n.onreadystatechange = n.onload = function() {
            !k && g(n.readyState) && (k = 1,
            c(),
            n.onload = n.onreadystatechange = null)
        }
        ,
        o(function() {
            k || (k = 1,
            c(1))
        }, e),
        i ? n.onload() : p.parentNode.insertBefore(n, p)
    }
    ,
    a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var j, e = b.createElement("link"), c = i ? h : c || f;
        e.href = a,
        e.rel = "stylesheet",
        e.type = "text/css";
        for (j in d)
            e.setAttribute(j, d[j]);
        g || (p.parentNode.insertBefore(e, p),
        o(c, 0))
    }
}(this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}
,
function(a) {
    a.fn.hoverIntent = function(b, c, d) {
        var e = {
            interval: 100,
            sensitivity: 6,
            timeout: 0
        };
        e = "object" == typeof b ? a.extend(e, b) : a.isFunction(c) ? a.extend(e, {
            over: b,
            out: c,
            selector: d
        }) : a.extend(e, {
            over: b,
            out: b,
            selector: c
        });
        var f, g, h, i, j = function(a) {
            f = a.pageX,
            g = a.pageY
        }, k = function(b, c) {
            return c.hoverIntent_t = clearTimeout(c.hoverIntent_t),
            Math.sqrt((h - f) * (h - f) + (i - g) * (i - g)) < e.sensitivity ? (a(c).off("mousemove.hoverIntent", j),
            c.hoverIntent_s = !0,
            e.over.apply(c, [b])) : (h = f,
            i = g,
            c.hoverIntent_t = setTimeout(function() {
                k(b, c)
            }, e.interval),
            void 0)
        }, l = function(a, b) {
            return b.hoverIntent_t = clearTimeout(b.hoverIntent_t),
            b.hoverIntent_s = !1,
            e.out.apply(b, [a])
        }, m = function(b) {
            var c = a.extend({}, b)
              , d = this;
            d.hoverIntent_t && (d.hoverIntent_t = clearTimeout(d.hoverIntent_t)),
            "mouseenter" === b.type ? (h = c.pageX,
            i = c.pageY,
            a(d).on("mousemove.hoverIntent", j),
            d.hoverIntent_s || (d.hoverIntent_t = setTimeout(function() {
                k(c, d)
            }, e.interval))) : (a(d).off("mousemove.hoverIntent", j),
            d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
                l(c, d)
            }, e.timeout)))
        };
        return this.on({
            "mouseenter.hoverIntent": m,
            "mouseleave.hoverIntent": m
        }, e.selector)
    }
}(jQuery),
function() {
    var a = !1;
    window.JQClass = function() {}
    ,
    JQClass.classes = {},
    JQClass.extend = function b(c) {
        function d() {
            !a && this._init && this._init.apply(this, arguments)
        }
        var e = this.prototype;
        a = !0;
        var f = new this;
        a = !1;
        for (var g in c)
            f[g] = "function" == typeof c[g] && "function" == typeof e[g] ? function(a, b) {
                return function() {
                    var c = this._super;
                    this._super = function(b) {
                        return e[a].apply(this, b || [])
                    }
                    ;
                    var d = b.apply(this, arguments);
                    return this._super = c,
                    d
                }
            }(g, c[g]) : c[g];
        return d.prototype = f,
        d.prototype.constructor = d,
        d.extend = b,
        d
    }
}(),
function($) {
    function camelCase(a) {
        return a.replace(/-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }
    JQClass.classes.JQPlugin = JQClass.extend({
        name: "plugin",
        defaultOptions: {},
        regionalOptions: {},
        _getters: [],
        _getMarker: function() {
            return "is-" + this.name
        },
        _init: function() {
            $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
            var a = camelCase(this.name);
            $[a] = this,
            $.fn[a] = function(b) {
                var c = Array.prototype.slice.call(arguments, 1);
                return $[a]._isNotChained(b, c) ? $[a][b].apply($[a], [this[0]].concat(c)) : this.each(function() {
                    if ("string" == typeof b) {
                        if ("_" === b[0] || !$[a][b])
                            throw "Unknown method: " + b;
                        $[a][b].apply($[a], [this].concat(c))
                    } else
                        $[a]._attach(this, b)
                })
            }
        },
        setDefaults: function(a) {
            $.extend(this.defaultOptions, a || {})
        },
        _isNotChained: function(a, b) {
            return "option" === a && (0 === b.length || 1 === b.length && "string" == typeof b[0]) || $.inArray(a, this._getters) > -1
        },
        _attach: function(a, b) {
            if (a = $(a),
            !a.hasClass(this._getMarker())) {
                a.addClass(this._getMarker()),
                b = $.extend({}, this.defaultOptions, this._getMetadata(a), b || {});
                var c = $.extend({
                    name: this.name,
                    elem: a,
                    options: b
                }, this._instSettings(a, b));
                a.data(this.name, c),
                this._postAttach(a, c),
                this.option(a, b)
            }
        },
        _instSettings: function(a, b) {
            return {}
        },
        _postAttach: function(a, b) {},
        _getMetadata: function(elem) {
            try {
                var data = elem.data(this.name.toLowerCase()) || "";
                data = data.replace(/'/g, '"'),
                data = data.replace(/([a-zA-Z0-9]+):/g, function(a, b, c) {
                    var d = data.substring(0, c).match(/"/g);
                    return d && d.length % 2 !== 0 ? b + ":" : '"' + b + '":'
                }),
                data = $.parseJSON("{" + data + "}");
                for (var name in data) {
                    var value = data[name];
                    "string" == typeof value && value.match(/^new Date\((.*)\)$/) && (data[name] = eval(value))
                }
                return data
            } catch (e) {
                return {}
            }
        },
        _getInst: function(a) {
            return $(a).data(this.name) || {}
        },
        option: function(a, b, c) {
            a = $(a);
            var d = a.data(this.name);
            if (!b || "string" == typeof b && null == c) {
                var e = (d || {}).options;
                return e && b ? e[b] : e
            }
            if (a.hasClass(this._getMarker())) {
                var e = b || {};
                "string" == typeof b && (e = {},
                e[b] = c),
                this._optionsChanged(a, d, e),
                $.extend(d.options, e)
            }
        },
        _optionsChanged: function(a, b, c) {},
        destroy: function(a) {
            a = $(a),
            a.hasClass(this._getMarker()) && (this._preDestroy(a, this._getInst(a)),
            a.removeData(this.name).removeClass(this._getMarker()))
        },
        _preDestroy: function(a, b) {}
    }),
    $.JQPlugin = {
        createPlugin: function(a, b) {
            "object" == typeof a && (b = a,
            a = "JQPlugin"),
            a = camelCase(a);
            var c = camelCase(b.name);
            JQClass.classes[c] = JQClass.classes[a].extend(b),
            new JQClass.classes[c]
        }
    }
}(jQuery),
function(a) {
    var b = "countdown"
      , c = 0
      , d = 1
      , e = 2
      , f = 3
      , g = 4
      , h = 5
      , i = 6;
    a.JQPlugin.createPlugin({
        name: b,
        defaultOptions: {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: "dHMS",
            layout: "",
            compact: !1,
            padZeroes: !1,
            significant: 0,
            description: "",
            expiryUrl: "",
            expiryText: "",
            alwaysExpire: !1,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        },
        regionalOptions: {
            "": {
                labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                compactLabels: ["y", "m", "w", "d"],
                whichLabels: null,
                digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                timeSeparator: ":",
                isRTL: !1
            }
        },
        _getters: ["getTimes"],
        _rtlClass: b + "-rtl",
        _sectionClass: b + "-section",
        _amountClass: b + "-amount",
        _periodClass: b + "-period",
        _rowClass: b + "-row",
        _holdingClass: b + "-holding",
        _showClass: b + "-show",
        _descrClass: b + "-descr",
        _timerElems: [],
        _init: function() {
            function b(a) {
                var h = a < 1e12 ? e ? performance.now() + performance.timing.navigationStart : d() : a || d();
                h - g >= 1e3 && (c._updateElems(),
                g = h),
                f(b)
            }
            var c = this;
            this._super(),
            this._serverSyncs = [];
            var d = "function" == typeof Date.now ? Date.now : function() {
                return (new Date).getTime()
            }
              , e = window.performance && "function" == typeof window.performance.now
              , f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null
              , g = 0;
            !f || a.noRequestAnimationFrame ? (a.noRequestAnimationFrame = null,
            setInterval(function() {
                c._updateElems()
            }, 980)) : (g = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || d(),
            f(b))
        },
        UTCDate: function(a, b, c, d, e, f, g, h) {
            "object" == typeof b && b.constructor == Date && (h = b.getMilliseconds(),
            g = b.getSeconds(),
            f = b.getMinutes(),
            e = b.getHours(),
            d = b.getDate(),
            c = b.getMonth(),
            b = b.getFullYear());
            var i = new Date;
            return i.setUTCFullYear(b),
            i.setUTCDate(1),
            i.setUTCMonth(c || 0),
            i.setUTCDate(d || 1),
            i.setUTCHours(e || 0),
            i.setUTCMinutes((f || 0) - (Math.abs(a) < 30 ? 60 * a : a)),
            i.setUTCSeconds(g || 0),
            i.setUTCMilliseconds(h || 0),
            i
        },
        periodsToSeconds: function(a) {
            return 31557600 * a[0] + 2629800 * a[1] + 604800 * a[2] + 86400 * a[3] + 3600 * a[4] + 60 * a[5] + a[6]
        },
        resync: function() {
            var b = this;
            a("." + this._getMarker()).each(function() {
                var c = a.data(this, b.name);
                if (c.options.serverSync) {
                    for (var d = null, e = 0; e < b._serverSyncs.length; e++)
                        if (b._serverSyncs[e][0] == c.options.serverSync) {
                            d = b._serverSyncs[e];
                            break
                        }
                    if (null == d[2]) {
                        var f = a.isFunction(c.options.serverSync) ? c.options.serverSync.apply(this, []) : null;
                        d[2] = (f ? (new Date).getTime() - f.getTime() : 0) - d[1]
                    }
                    c._since && c._since.setMilliseconds(c._since.getMilliseconds() + d[2]),
                    c._until.setMilliseconds(c._until.getMilliseconds() + d[2])
                }
            });
            for (var c = 0; c < b._serverSyncs.length; c++)
                null != b._serverSyncs[c][2] && (b._serverSyncs[c][1] += b._serverSyncs[c][2],
                delete b._serverSyncs[c][2])
        },
        _instSettings: function(a, b) {
            return {
                _periods: [0, 0, 0, 0, 0, 0, 0]
            }
        },
        _addElem: function(a) {
            this._hasElem(a) || this._timerElems.push(a)
        },
        _hasElem: function(b) {
            return a.inArray(b, this._timerElems) > -1
        },
        _removeElem: function(b) {
            this._timerElems = a.map(this._timerElems, function(a) {
                return a == b ? null : a
            })
        },
        _updateElems: function() {
            for (var a = this._timerElems.length - 1; a >= 0; a--)
                this._updateCountdown(this._timerElems[a])
        },
        _optionsChanged: function(b, c, d) {
            d.layout && (d.layout = d.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")),
            this._resetExtraLabels(c.options, d);
            var e = c.options.timezone != d.timezone;
            a.extend(c.options, d),
            this._adjustSettings(b, c, null != d.until || null != d.since || e);
            var f = new Date;
            (c._since && c._since < f || c._until && c._until > f) && this._addElem(b[0]),
            this._updateCountdown(b, c)
        },
        _updateCountdown: function(b, c) {
            if (b = b.jquery ? b : a(b),
            c = c || this._getInst(b)) {
                if (b.html(this._generateHTML(c)).toggleClass(this._rtlClass, c.options.isRTL),
                a.isFunction(c.options.onTick)) {
                    var d = "lap" != c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date);
                    1 != c.options.tickInterval && this.periodsToSeconds(d) % c.options.tickInterval != 0 || c.options.onTick.apply(b[0], [d])
                }
                var e = "pause" != c._hold && (c._since ? c._now.getTime() < c._since.getTime() : c._now.getTime() >= c._until.getTime());
                if (e && !c._expiring) {
                    if (c._expiring = !0,
                    this._hasElem(b[0]) || c.options.alwaysExpire) {
                        if (this._removeElem(b[0]),
                        a.isFunction(c.options.onExpiry) && c.options.onExpiry.apply(b[0], []),
                        c.options.expiryText) {
                            var f = c.options.layout;
                            c.options.layout = c.options.expiryText,
                            this._updateCountdown(b[0], c),
                            c.options.layout = f
                        }
                        c.options.expiryUrl && (window.location = c.options.expiryUrl)
                    }
                    c._expiring = !1
                } else
                    "pause" == c._hold && this._removeElem(b[0])
            }
        },
        _resetExtraLabels: function(a, b) {
            for (var c in b)
                c.match(/[Ll]abels[02-9]|compactLabels1/) && (a[c] = b[c]);
            for (var c in a)
                c.match(/[Ll]abels[02-9]|compactLabels1/) && "undefined" == typeof b[c] && (a[c] = null)
        },
        _adjustSettings: function(b, c, d) {
            for (var e = null, f = 0; f < this._serverSyncs.length; f++)
                if (this._serverSyncs[f][0] == c.options.serverSync) {
                    e = this._serverSyncs[f][1];
                    break
                }
            if (null != e)
                var g = c.options.serverSync ? e : 0
                  , h = new Date;
            else {
                var i = a.isFunction(c.options.serverSync) ? c.options.serverSync.apply(b[0], []) : null
                  , h = new Date
                  , g = i ? h.getTime() - i.getTime() : 0;
                this._serverSyncs.push([c.options.serverSync, g])
            }
            var j = c.options.timezone;
            j = null == j ? -h.getTimezoneOffset() : j,
            (d || !d && null == c._until && null == c._since) && (c._since = c.options.since,
            null != c._since && (c._since = this.UTCDate(j, this._determineTime(c._since, null)),
            c._since && g && c._since.setMilliseconds(c._since.getMilliseconds() + g)),
            c._until = this.UTCDate(j, this._determineTime(c.options.until, h)),
            g && c._until.setMilliseconds(c._until.getMilliseconds() + g)),
            c._show = this._determineShow(c)
        },
        _preDestroy: function(a, b) {
            this._removeElem(a[0]),
            a.empty()
        },
        pause: function(a) {
            this._hold(a, "pause")
        },
        lap: function(a) {
            this._hold(a, "lap")
        },
        resume: function(a) {
            this._hold(a, null)
        },
        toggle: function(b) {
            var c = a.data(b, this.name) || {};
            this[c._hold ? "resume" : "pause"](b)
        },
        toggleLap: function(b) {
            var c = a.data(b, this.name) || {};
            this[c._hold ? "resume" : "lap"](b)
        },
        _hold: function(b, c) {
            var d = a.data(b, this.name);
            if (d) {
                if ("pause" == d._hold && !c) {
                    d._periods = d._savePeriods;
                    var e = d._since ? "-" : "+";
                    d[d._since ? "_since" : "_until"] = this._determineTime(e + d._periods[0] + "y" + e + d._periods[1] + "o" + e + d._periods[2] + "w" + e + d._periods[3] + "d" + e + d._periods[4] + "h" + e + d._periods[5] + "m" + e + d._periods[6] + "s"),
                    this._addElem(b)
                }
                d._hold = c,
                d._savePeriods = "pause" == c ? d._periods : null,
                a.data(b, this.name, d),
                this._updateCountdown(b, d)
            }
        },
        getTimes: function(b) {
            var c = a.data(b, this.name);
            return c ? "pause" == c._hold ? c._savePeriods : c._hold ? this._calculatePeriods(c, c._show, c.options.significant, new Date) : c._periods : null
        },
        _determineTime: function(a, b) {
            var c = this
              , d = function(a) {
                var b = new Date;
                return b.setTime(b.getTime() + 1e3 * a),
                b
            }
              , e = function(a) {
                a = a.toLowerCase();
                for (var b = new Date, d = b.getFullYear(), e = b.getMonth(), f = b.getDate(), g = b.getHours(), h = b.getMinutes(), i = b.getSeconds(), j = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, k = j.exec(a); k; ) {
                    switch (k[2] || "s") {
                    case "s":
                        i += parseInt(k[1], 10);
                        break;
                    case "m":
                        h += parseInt(k[1], 10);
                        break;
                    case "h":
                        g += parseInt(k[1], 10);
                        break;
                    case "d":
                        f += parseInt(k[1], 10);
                        break;
                    case "w":
                        f += 7 * parseInt(k[1], 10);
                        break;
                    case "o":
                        e += parseInt(k[1], 10),
                        f = Math.min(f, c._getDaysInMonth(d, e));
                        break;
                    case "y":
                        d += parseInt(k[1], 10),
                        f = Math.min(f, c._getDaysInMonth(d, e))
                    }
                    k = j.exec(a)
                }
                return new Date(d,e,f,g,h,i,0)
            }
              , f = null == a ? b : "string" == typeof a ? e(a) : "number" == typeof a ? d(a) : a;
            return f && f.setMilliseconds(0),
            f
        },
        _getDaysInMonth: function(a, b) {
            return 32 - new Date(a,b,32).getDate()
        },
        _normalLabels: function(a) {
            return a
        },
        _generateHTML: function(b) {
            var j = this;
            b._periods = b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date);
            for (var k = !1, l = 0, m = b.options.significant, n = a.extend({}, b._show), o = c; o <= i; o++)
                k |= "?" == b._show[o] && b._periods[o] > 0,
                n[o] = "?" != b._show[o] || k ? b._show[o] : null,
                l += n[o] ? 1 : 0,
                m -= b._periods[o] > 0 ? 1 : 0;
            for (var p = [!1, !1, !1, !1, !1, !1, !1], o = i; o >= c; o--)
                b._show[o] && (b._periods[o] ? p[o] = !0 : (p[o] = m > 0,
                m--));
            var q = b.options.compact ? b.options.compactLabels : b.options.labels
              , r = b.options.whichLabels || this._normalLabels
              , s = function(a) {
                var c = b.options["compactLabels" + r(b._periods[a])];
                return n[a] ? j._translateDigits(b, b._periods[a]) + (c ? c[a] : q[a]) + " " : ""
            }
              , t = b.options.padZeroes ? 2 : 1
              , u = function(a) {
                var c = b.options["labels" + r(b._periods[a])];
                return !b.options.significant && n[a] || b.options.significant && p[a] ? '<span class="' + j._sectionClass + '"><span class="' + j._amountClass + '">' + j._minDigits(b, b._periods[a], t) + '</span><span class="' + j._periodClass + '">' + (c ? c[a] : q[a]) + "</span></span>" : ""
            };
            return b.options.layout ? this._buildLayout(b, n, b.options.layout, b.options.compact, b.options.significant, p) : (b.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (b._hold ? " " + this._holdingClass : "") + '">' + s(c) + s(d) + s(e) + s(f) + (n[g] ? this._minDigits(b, b._periods[g], 2) : "") + (n[h] ? (n[g] ? b.options.timeSeparator : "") + this._minDigits(b, b._periods[h], 2) : "") + (n[i] ? (n[g] || n[h] ? b.options.timeSeparator : "") + this._minDigits(b, b._periods[i], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (b.options.significant || l) + (b._hold ? " " + this._holdingClass : "") + '">' + u(c) + u(d) + u(e) + u(f) + u(g) + u(h) + u(i)) + "</span>" + (b.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + b.options.description + "</span>" : "")
        },
        _buildLayout: function(b, j, k, l, m, n) {
            for (var o = b.options[l ? "compactLabels" : "labels"], p = b.options.whichLabels || this._normalLabels, q = function(a) {
                return (b.options[(l ? "compactLabels" : "labels") + p(b._periods[a])] || o)[a]
            }, r = function(a, c) {
                return b.options.digits[Math.floor(a / c) % 10]
            }, s = {
                desc: b.options.description,
                sep: b.options.timeSeparator,
                yl: q(c),
                yn: this._minDigits(b, b._periods[c], 1),
                ynn: this._minDigits(b, b._periods[c], 2),
                ynnn: this._minDigits(b, b._periods[c], 3),
                y1: r(b._periods[c], 1),
                y10: r(b._periods[c], 10),
                y100: r(b._periods[c], 100),
                y1000: r(b._periods[c], 1e3),
                ol: q(d),
                on: this._minDigits(b, b._periods[d], 1),
                onn: this._minDigits(b, b._periods[d], 2),
                onnn: this._minDigits(b, b._periods[d], 3),
                o1: r(b._periods[d], 1),
                o10: r(b._periods[d], 10),
                o100: r(b._periods[d], 100),
                o1000: r(b._periods[d], 1e3),
                wl: q(e),
                wn: this._minDigits(b, b._periods[e], 1),
                wnn: this._minDigits(b, b._periods[e], 2),
                wnnn: this._minDigits(b, b._periods[e], 3),
                w1: r(b._periods[e], 1),
                w10: r(b._periods[e], 10),
                w100: r(b._periods[e], 100),
                w1000: r(b._periods[e], 1e3),
                dl: q(f),
                dn: this._minDigits(b, b._periods[f], 1),
                dnn: this._minDigits(b, b._periods[f], 2),
                dnnn: this._minDigits(b, b._periods[f], 3),
                d1: r(b._periods[f], 1),
                d10: r(b._periods[f], 10),
                d100: r(b._periods[f], 100),
                d1000: r(b._periods[f], 1e3),
                hl: q(g),
                hn: this._minDigits(b, b._periods[g], 1),
                hnn: this._minDigits(b, b._periods[g], 2),
                hnnn: this._minDigits(b, b._periods[g], 3),
                h1: r(b._periods[g], 1),
                h10: r(b._periods[g], 10),
                h100: r(b._periods[g], 100),
                h1000: r(b._periods[g], 1e3),
                ml: q(h),
                mn: this._minDigits(b, b._periods[h], 1),
                mnn: this._minDigits(b, b._periods[h], 2),
                mnnn: this._minDigits(b, b._periods[h], 3),
                m1: r(b._periods[h], 1),
                m10: r(b._periods[h], 10),
                m100: r(b._periods[h], 100),
                m1000: r(b._periods[h], 1e3),
                sl: q(i),
                sn: this._minDigits(b, b._periods[i], 1),
                snn: this._minDigits(b, b._periods[i], 2),
                snnn: this._minDigits(b, b._periods[i], 3),
                s1: r(b._periods[i], 1),
                s10: r(b._periods[i], 10),
                s100: r(b._periods[i], 100),
                s1000: r(b._periods[i], 1e3)
            }, t = k, u = c; u <= i; u++) {
                var v = "yowdhms".charAt(u)
                  , w = new RegExp("\\{" + v + "<\\}([\\s\\S]*)\\{" + v + ">\\}","g");
                t = t.replace(w, !m && j[u] || m && n[u] ? "$1" : "")
            }
            return a.each(s, function(a, b) {
                var c = new RegExp("\\{" + a + "\\}","g");
                t = t.replace(c, b)
            }),
            t
        },
        _minDigits: function(a, b, c) {
            return b = "" + b,
            b.length >= c ? this._translateDigits(a, b) : (b = "0000000000" + b,
            this._translateDigits(a, b.substr(b.length - c)))
        },
        _translateDigits: function(a, b) {
            return ("" + b).replace(/[0-9]/g, function(b) {
                return a.options.digits[b]
            })
        },
        _determineShow: function(a) {
            var b = a.options.format
              , j = [];
            return j[c] = b.match("y") ? "?" : b.match("Y") ? "!" : null,
            j[d] = b.match("o") ? "?" : b.match("O") ? "!" : null,
            j[e] = b.match("w") ? "?" : b.match("W") ? "!" : null,
            j[f] = b.match("d") ? "?" : b.match("D") ? "!" : null,
            j[g] = b.match("h") ? "?" : b.match("H") ? "!" : null,
            j[h] = b.match("m") ? "?" : b.match("M") ? "!" : null,
            j[i] = b.match("s") ? "?" : b.match("S") ? "!" : null,
            j
        },
        _calculatePeriods: function(a, b, j, k) {
            a._now = k,
            a._now.setMilliseconds(0);
            var l = new Date(a._now.getTime());
            a._since ? k.getTime() < a._since.getTime() ? a._now = k = l : k = a._since : (l.setTime(a._until.getTime()),
            k.getTime() > a._until.getTime() && (a._now = k = l));
            var m = [0, 0, 0, 0, 0, 0, 0];
            if (b[c] || b[d]) {
                var n = this._getDaysInMonth(k.getFullYear(), k.getMonth())
                  , o = this._getDaysInMonth(l.getFullYear(), l.getMonth())
                  , p = l.getDate() == k.getDate() || l.getDate() >= Math.min(n, o) && k.getDate() >= Math.min(n, o)
                  , q = function(a) {
                    return 60 * (60 * a.getHours() + a.getMinutes()) + a.getSeconds()
                }
                  , r = Math.max(0, 12 * (l.getFullYear() - k.getFullYear()) + l.getMonth() - k.getMonth() + (l.getDate() < k.getDate() && !p || p && q(l) < q(k) ? -1 : 0));
                m[c] = b[c] ? Math.floor(r / 12) : 0,
                m[d] = b[d] ? r - 12 * m[c] : 0,
                k = new Date(k.getTime());
                var s = k.getDate() == n
                  , t = this._getDaysInMonth(k.getFullYear() + m[c], k.getMonth() + m[d]);
                k.getDate() > t && k.setDate(t),
                k.setFullYear(k.getFullYear() + m[c]),
                k.setMonth(k.getMonth() + m[d]),
                s && k.setDate(t)
            }
            var u = Math.floor((l.getTime() - k.getTime()) / 1e3)
              , v = function(a, c) {
                m[a] = b[a] ? Math.floor(u / c) : 0,
                u -= m[a] * c
            };
            if (v(e, 604800),
            v(f, 86400),
            v(g, 3600),
            v(h, 60),
            v(i, 1),
            u > 0 && !a._since)
                for (var w = [1, 12, 4.3482, 7, 24, 60, 60], x = i, y = 1, z = i; z >= c; z--)
                    b[z] && (m[x] >= y && (m[x] = 0,
                    u = 1),
                    u > 0 && (m[z]++,
                    u = 0,
                    x = z,
                    y = 1)),
                    y *= w[z];
            if (j)
                for (var z = c; z <= i; z++)
                    j && m[z] ? j-- : j || (m[z] = 0);
            return m
        }
    })
}(jQuery),
"function" != typeof Object.create && (Object.create = function(a) {
    function b() {}
    return b.prototype = a,
    new b
}
),
function(a, b, c) {
    var d = {
        init: function(b, c) {
            this.$elem = a(c),
            this.options = a.extend({}, a.fn.owlCarousel.options, this.$elem.data(), b),
            this.userOptions = b,
            this.loadContent()
        },
        loadContent: function() {
            function b(a) {
                var b, c = "";
                if ("function" == typeof d.options.jsonSuccess)
                    d.options.jsonSuccess.apply(this, [a]);
                else {
                    for (b in a.owl)
                        a.owl.hasOwnProperty(b) && (c += a.owl[b].item);
                    d.$elem.html(c)
                }
                d.logIn()
            }
            var c, d = this;
            "function" == typeof d.options.beforeInit && d.options.beforeInit.apply(this, [d.$elem]),
            "string" == typeof d.options.jsonPath ? (c = d.options.jsonPath,
            a.getJSON(c, b)) : d.logIn()
        },
        logIn: function() {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style")),
            this.$elem.data("owl-originalClasses", this.$elem.attr("class")),
            this.$elem.css({
                opacity: 0
            }),
            this.orignalItems = this.options.items,
            this.checkBrowser(),
            this.wrapperWidth = 0,
            this.checkVisible = null,
            this.setVars()
        },
        setVars: function() {
            return 0 !== this.$elem.children().length && (this.baseClass(),
            this.eventTypes(),
            this.$userItems = this.$elem.children(),
            this.itemsAmount = this.$userItems.length,
            this.wrapItems(),
            this.$owlItems = this.$elem.find(".owl-item"),
            this.$owlWrapper = this.$elem.find(".owl-wrapper"),
            this.playDirection = "next",
            this.prevItem = 0,
            this.prevArr = [0],
            this.currentItem = 0,
            this.customEvents(),
            void this.onStartup())
        },
        onStartup: function() {
            this.updateItems(),
            this.calculateAll(),
            this.buildControls(),
            this.updateControls(),
            this.response(),
            this.moveEvents(),
            this.stopOnHover(),
            this.owlStatus(),
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle),
            !0 === this.options.autoPlay && (this.options.autoPlay = 5e3),
            this.play(),
            this.$elem.find(".owl-wrapper").css("display", "block"),
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility(),
            this.onstartup = !1,
            this.eachMoveUpdate(),
            "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        },
        eachMoveUpdate: function() {
            !0 === this.options.lazyLoad && this.lazyLoad(),
            !0 === this.options.autoHeight && this.autoHeight(),
            this.onVisibleItems(),
            "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        },
        updateVars: function() {
            "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]),
            this.watchVisibility(),
            this.updateItems(),
            this.calculateAll(),
            this.updatePosition(),
            this.updateControls(),
            this.eachMoveUpdate(),
            "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function() {
            var a = this;
            b.setTimeout(function() {
                a.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var a = this;
            return !1 === a.$elem.is(":visible") && (a.$elem.css({
                opacity: 0
            }),
            b.clearInterval(a.autoPlayInterval),
            b.clearInterval(a.checkVisible),
            void (a.checkVisible = b.setInterval(function() {
                a.$elem.is(":visible") && (a.reload(),
                a.$elem.animate({
                    opacity: 1
                }, 200),
                b.clearInterval(a.checkVisible))
            }, 500)))
        },
        wrapItems: function() {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer"),
            this.$elem.css("display", "block")
        },
        baseClass: function() {
            var a = this.$elem.hasClass(this.options.baseClass)
              , b = this.$elem.hasClass(this.options.theme);
            a || this.$elem.addClass(this.options.baseClass),
            b || this.$elem.addClass(this.options.theme)
        },
        updateItems: function() {
            var b, c;
            if (!1 === this.options.responsive)
                return !1;
            if (!0 === this.options.singleItem)
                return this.options.items = this.orignalItems = 1,
                this.options.itemsCustom = !1,
                this.options.itemsDesktop = !1,
                this.options.itemsDesktopSmall = !1,
                this.options.itemsTablet = !1,
                this.options.itemsTabletSmall = !1,
                this.options.itemsMobile = !1;
            if (b = a(this.options.responsiveBaseWidth).width(),
            b > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems),
            !1 !== this.options.itemsCustom)
                for (this.options.itemsCustom.sort(function(a, b) {
                    return a[0] - b[0]
                }),
                c = 0; c < this.options.itemsCustom.length; c += 1)
                    this.options.itemsCustom[c][0] <= b && (this.options.items = this.options.itemsCustom[c][1]);
            else
                b <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
                b <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]),
                b <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]),
                b <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]),
                b <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function() {
            var c, d, e = this;
            return !0 === e.options.responsive && (d = a(b).width(),
            e.resizer = function() {
                a(b).width() !== d && (!1 !== e.options.autoPlay && b.clearInterval(e.autoPlayInterval),
                b.clearTimeout(c),
                c = b.setTimeout(function() {
                    d = a(b).width(),
                    e.updateVars()
                }, e.options.responsiveRefreshRate))
            }
            ,
            void a(b).resize(e.resizer))
        },
        updatePosition: function() {
            this.jumpTo(this.currentItem),
            !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function() {
            var b = this
              , c = 0
              , d = b.itemsAmount - b.options.items;
            b.$owlItems.each(function(e) {
                var f = a(this);
                f.css({
                    width: b.itemWidth
                }).data("owl-item", Number(e)),
                0 !== e % b.options.items && e !== d || e > d || (c += 1),
                f.data("owl-roundPages", c)
            })
        },
        appendWrapperSizes: function() {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            }),
            this.appendItemsSizes()
        },
        calculateAll: function() {
            this.calculateWidth(),
            this.appendWrapperSizes(),
            this.loops(),
            this.max()
        },
        calculateWidth: function() {
            this.itemWidth = Math.round(this.$elem.width() / this.options.items)
        },
        max: function() {
            var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            return this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items,
            this.maximumPixels = a),
            a
        },
        min: function() {
            return 0
        },
        loops: function() {
            var b, c, d = 0, e = 0;
            for (this.positionsInArray = [0],
            this.pagesInArray = [],
            b = 0; b < this.itemsAmount; b += 1)
                e += this.itemWidth,
                this.positionsInArray.push(-e),
                !0 === this.options.scrollPerPage && (c = a(this.$owlItems[b]),
                c = c.data("owl-roundPages"),
                c !== d && (this.pagesInArray[d] = this.positionsInArray[b],
                d = c))
        },
        buildControls: function() {
            !0 !== this.options.navigation && !0 !== this.options.pagination || (this.owlControls = a('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)),
            !0 === this.options.pagination && this.buildPagination(),
            !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function() {
            var b = this
              , c = a('<div class="owl-buttons"/>');
            b.owlControls.append(c),
            b.buttonPrev = a("<div/>", {
                class: "owl-prev",
                html: b.options.navigationText[0] || ""
            }),
            b.buttonNext = a("<div/>", {
                class: "owl-next",
                html: b.options.navigationText[1] || ""
            }),
            c.append(b.buttonPrev).append(b.buttonNext),
            c.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
                a.preventDefault()
            }),
            c.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(c) {
                c.preventDefault(),
                a(this).hasClass("owl-next") ? b.next() : b.prev()
            })
        },
        buildPagination: function() {
            var b = this;
            b.paginationWrapper = a('<div class="owl-pagination"/>'),
            b.owlControls.append(b.paginationWrapper),
            b.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(c) {
                c.preventDefault(),
                Number(a(this).data("owl-page")) !== b.currentItem && b.goTo(Number(a(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var b, c, d, e, f, g;
            if (!1 === this.options.pagination)
                return !1;
            for (this.paginationWrapper.html(""),
            b = 0,
            c = this.itemsAmount - this.itemsAmount % this.options.items,
            e = 0; e < this.itemsAmount; e += 1)
                0 === e % this.options.items && (b += 1,
                c === e && (d = this.itemsAmount - this.options.items),
                f = a("<div/>", {
                    class: "owl-page"
                }),
                g = a("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? b : "",
                    class: !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }),
                f.append(g),
                f.data("owl-page", c === e ? d : e),
                f.data("owl-roundPages", b),
                this.paginationWrapper.append(f));
            this.checkPagination()
        },
        checkPagination: function() {
            var b = this;
            return !1 !== b.options.pagination && void b.paginationWrapper.find(".owl-page").each(function() {
                a(this).data("owl-roundPages") === a(b.$owlItems[b.currentItem]).data("owl-roundPages") && (b.paginationWrapper.find(".owl-page").removeClass("active"),
                a(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            return !1 !== this.options.navigation && void (!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"),
            this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"),
            this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"),
            this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"),
            this.buttonNext.removeClass("disabled"))))
        },
        updateControls: function() {
            this.updatePagination(),
            this.checkNavigation(),
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function() {
            this.owlControls && this.owlControls.remove()
        },
        next: function(a) {
            if (this.isTransition)
                return !1;
            if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1,
            this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
                if (!0 !== this.options.rewindNav)
                    return this.currentItem = this.maximumItem,
                    !1;
                this.currentItem = 0,
                a = "rewind"
            }
            this.goTo(this.currentItem, a)
        },
        prev: function(a) {
            if (this.isTransition)
                return !1;
            if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1),
            0 > this.currentItem) {
                if (!0 !== this.options.rewindNav)
                    return this.currentItem = 0,
                    !1;
                this.currentItem = this.maximumItem,
                a = "rewind"
            }
            this.goTo(this.currentItem, a)
        },
        goTo: function(a, c, d) {
            var e = this;
            return !e.isTransition && ("function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]),
            a >= e.maximumItem ? a = e.maximumItem : 0 >= a && (a = 0),
            e.currentItem = e.owl.currentItem = a,
            !1 !== e.options.transitionStyle && "drag" !== d && 1 === e.options.items && !0 === e.browser.support3d ? (e.swapSpeed(0),
            !0 === e.browser.support3d ? e.transition3d(e.positionsInArray[a]) : e.css2slide(e.positionsInArray[a], 1),
            e.afterGo(),
            e.singleItemTransition(),
            !1) : (a = e.positionsInArray[a],
            !0 === e.browser.support3d ? (e.isCss3Finish = !1,
            !0 === c ? (e.swapSpeed("paginationSpeed"),
            b.setTimeout(function() {
                e.isCss3Finish = !0
            }, e.options.paginationSpeed)) : "rewind" === c ? (e.swapSpeed(e.options.rewindSpeed),
            b.setTimeout(function() {
                e.isCss3Finish = !0
            }, e.options.rewindSpeed)) : (e.swapSpeed("slideSpeed"),
            b.setTimeout(function() {
                e.isCss3Finish = !0
            }, e.options.slideSpeed)),
            e.transition3d(a)) : !0 === c ? e.css2slide(a, e.options.paginationSpeed) : "rewind" === c ? e.css2slide(a, e.options.rewindSpeed) : e.css2slide(a, e.options.slideSpeed),
            void e.afterGo()))
        },
        jumpTo: function(a) {
            "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]),
            a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0),
            this.swapSpeed(0),
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1),
            this.currentItem = this.owl.currentItem = a,
            this.afterGo()
        },
        afterGo: function() {
            this.prevArr.push(this.currentItem),
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2],
            this.prevArr.shift(0),
            this.prevItem !== this.currentItem && (this.checkPagination(),
            this.checkNavigation(),
            this.eachMoveUpdate(),
            !1 !== this.options.autoPlay && this.checkAp()),
            "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function() {
            this.apStatus = "stop",
            b.clearInterval(this.autoPlayInterval)
        },
        checkAp: function() {
            "stop" !== this.apStatus && this.play()
        },
        play: function() {
            var a = this;
            return a.apStatus = "play",
            !1 !== a.options.autoPlay && (b.clearInterval(a.autoPlayInterval),
            void (a.autoPlayInterval = b.setInterval(function() {
                a.next(!0)
            }, a.options.autoPlay)))
        },
        swapSpeed: function(a) {
            "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
        },
        addCssSpeed: function(a) {
            return {
                "-webkit-transition": "all " + a + "ms ease",
                "-moz-transition": "all " + a + "ms ease",
                "-o-transition": "all " + a + "ms ease",
                transition: "all " + a + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(a) {
            return {
                "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
                transform: "translate3d(" + a + "px, 0px,0px)"
            }
        },
        transition3d: function(a) {
            this.$owlWrapper.css(this.doTranslate(a))
        },
        css2move: function(a) {
            this.$owlWrapper.css({
                left: a
            })
        },
        css2slide: function(a, b) {
            var c = this;
            c.isCssFinish = !1,
            c.$owlWrapper.stop(!0, !0).animate({
                left: a
            }, {
                duration: b || c.options.slideSpeed,
                complete: function() {
                    c.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var a = c.createElement("div");
            a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)",
            a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g),
            this.browser = {
                support3d: null !== a && 1 === a.length,
                isTouch: "ontouchstart"in b || b.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function() {
            !1 === this.options.mouseDrag && !1 === this.options.touchDrag || (this.gestures(),
            this.disabledEvents())
        },
        eventTypes: function() {
            var a = ["s", "e", "x"];
            this.ev_types = {},
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]),
            this.ev_types.start = a[0],
            this.ev_types.move = a[1],
            this.ev_types.end = a[2]
        },
        disabledEvents: function() {
            this.$elem.on("dragstart.owl", function(a) {
                a.preventDefault()
            }),
            this.$elem.on("mousedown.disableTextSelect", function(b) {
                return a(b.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function d(a) {
                if (void 0 !== a.touches)
                    return {
                        x: a.touches[0].pageX,
                        y: a.touches[0].pageY
                    };
                if (void 0 === a.touches) {
                    if (void 0 !== a.pageX)
                        return {
                            x: a.pageX,
                            y: a.pageY
                        };
                    if (void 0 === a.pageX)
                        return {
                            x: a.clientX,
                            y: a.clientY
                        }
                }
            }
            function e(b) {
                "on" === b ? (a(c).on(h.ev_types.move, f),
                a(c).on(h.ev_types.end, g)) : "off" === b && (a(c).off(h.ev_types.move),
                a(c).off(h.ev_types.end))
            }
            function f(e) {
                e = e.originalEvent || e || b.event,
                h.newPosX = d(e).x - i.offsetX,
                h.newPosY = d(e).y - i.offsetY,
                h.newRelativeX = h.newPosX - i.relativePos,
                "function" == typeof h.options.startDragging && !0 !== i.dragging && 0 !== h.newRelativeX && (i.dragging = !0,
                h.options.startDragging.apply(h, [h.$elem])),
                (8 < h.newRelativeX || -8 > h.newRelativeX) && !0 === h.browser.isTouch && (void 0 !== e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                i.sliding = !0),
                (10 < h.newPosY || -10 > h.newPosY) && !1 === i.sliding && a(c).off("touchmove.owl"),
                h.newPosX = Math.max(Math.min(h.newPosX, h.newRelativeX / 5), h.maximumPixels + h.newRelativeX / 5),
                !0 === h.browser.support3d ? h.transition3d(h.newPosX) : h.css2move(h.newPosX)
            }
            function g(c) {
                c = c.originalEvent || c || b.event;
                var d;
                c.target = c.target || c.srcElement,
                i.dragging = !1,
                !0 !== h.browser.isTouch && h.$owlWrapper.removeClass("grabbing"),
                h.dragDirection = 0 > h.newRelativeX ? h.owl.dragDirection = "left" : h.owl.dragDirection = "right",
                0 !== h.newRelativeX && (d = h.getNewPosition(),
                h.goTo(d, !1, "drag"),
                i.targetElement === c.target && !0 !== h.browser.isTouch && (a(c.target).on("click.disable", function(b) {
                    b.stopImmediatePropagation(),
                    b.stopPropagation(),
                    b.preventDefault(),
                    a(b.target).off("click.disable")
                }),
                c = a._data(c.target, "events").click,
                d = c.pop(),
                c.splice(0, 0, d))),
                e("off")
            }
            var h = this
              , i = {
                offsetX: 0,
                offsetY: 0,
                baseElWidth: 0,
                relativePos: 0,
                position: null,
                minSwipe: null,
                maxSwipe: null,
                sliding: null,
                dargging: null,
                targetElement: null
            };
            h.isCssFinish = !0,
            h.$elem.on(h.ev_types.start, ".owl-wrapper", function(c) {
                c = c.originalEvent || c || b.event;
                var f;
                if (3 === c.which)
                    return !1;
                if (!(h.itemsAmount <= h.options.items)) {
                    if (!1 === h.isCssFinish && !h.options.dragBeforeAnimFinish || !1 === h.isCss3Finish && !h.options.dragBeforeAnimFinish)
                        return !1;
                    !1 !== h.options.autoPlay && b.clearInterval(h.autoPlayInterval),
                    !0 === h.browser.isTouch || h.$owlWrapper.hasClass("grabbing") || h.$owlWrapper.addClass("grabbing"),
                    h.newPosX = 0,
                    h.newRelativeX = 0,
                    a(this).css(h.removeTransition()),
                    f = a(this).position(),
                    i.relativePos = f.left,
                    i.offsetX = d(c).x - f.left,
                    i.offsetY = d(c).y - f.top,
                    e("on"),
                    i.sliding = !1,
                    i.targetElement = c.target || c.srcElement
                }
            })
        },
        getNewPosition: function() {
            var a = this.closestItem();
            return a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = a = 0),
            a
        },
        closestItem: function() {
            var b = this
              , c = !0 === b.options.scrollPerPage ? b.pagesInArray : b.positionsInArray
              , d = b.newPosX
              , e = null;
            return a.each(c, function(f, g) {
                d - b.itemWidth / 20 > c[f + 1] && d - b.itemWidth / 20 < g && "left" === b.moveDirection() ? (e = g,
                b.currentItem = !0 === b.options.scrollPerPage ? a.inArray(e, b.positionsInArray) : f) : d + b.itemWidth / 20 < g && d + b.itemWidth / 20 > (c[f + 1] || c[f] - b.itemWidth) && "right" === b.moveDirection() && (!0 === b.options.scrollPerPage ? (e = c[f + 1] || c[c.length - 1],
                b.currentItem = a.inArray(e, b.positionsInArray)) : (e = c[f + 1],
                b.currentItem = f + 1))
            }),
            b.currentItem
        },
        moveDirection: function() {
            var a;
            return 0 > this.newRelativeX ? (a = "right",
            this.playDirection = "next") : (a = "left",
            this.playDirection = "prev"),
            a
        },
        customEvents: function() {
            var a = this;
            a.$elem.on("owl.next", function() {
                a.next()
            }),
            a.$elem.on("owl.prev", function() {
                a.prev()
            }),
            a.$elem.on("owl.play", function(b, c) {
                a.options.autoPlay = c,
                a.play(),
                a.hoverStatus = "play"
            }),
            a.$elem.on("owl.stop", function() {
                a.stop(),
                a.hoverStatus = "stop"
            }),
            a.$elem.on("owl.goTo", function(b, c) {
                a.goTo(c)
            }),
            a.$elem.on("owl.jumpTo", function(b, c) {
                a.jumpTo(c)
            })
        },
        stopOnHover: function() {
            var a = this;
            !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
                a.stop()
            }),
            a.$elem.on("mouseout", function() {
                "stop" !== a.hoverStatus && a.play()
            }))
        },
        lazyLoad: function() {
            var b, c, d, e, f;
            if (!1 === this.options.lazyLoad)
                return !1;
            for (b = 0; b < this.itemsAmount; b += 1)
                c = a(this.$owlItems[b]),
                "loaded" !== c.data("owl-loaded") && (d = c.data("owl-item"),
                e = c.find(".lazyOwl"),
                "string" != typeof e.data("src") ? c.data("owl-loaded", "loaded") : (void 0 === c.data("owl-loaded") && (e.hide(),
                c.addClass("loading").data("owl-loaded", "checked")),
                (f = !0 !== this.options.lazyFollow || d >= this.currentItem) && d < this.currentItem + this.options.items && e.length && this.lazyPreload(c, e)))
        },
        lazyPreload: function(a, c) {
            function d() {
                a.data("owl-loaded", "loaded").removeClass("loading"),
                c.removeAttr("data-src"),
                "fade" === g.options.lazyEffect ? c.fadeIn(400) : c.show(),
                "function" == typeof g.options.afterLazyLoad && g.options.afterLazyLoad.apply(this, [g.$elem])
            }
            function e() {
                h += 1,
                g.completeImg(c.get(0)) || !0 === f ? d() : 100 >= h ? b.setTimeout(e, 100) : d()
            }
            var f, g = this, h = 0;
            "DIV" === c.prop("tagName") ? (c.css("background-image", "url(" + c.data("src") + ")"),
            f = !0) : c[0].src = c.data("src"),
            e()
        },
        autoHeight: function() {
            function c() {
                var c = a(f.$owlItems[f.currentItem]).height();
                f.wrapperOuter.css("height", c + "px"),
                f.wrapperOuter.hasClass("autoHeight") || b.setTimeout(function() {
                    f.wrapperOuter.addClass("autoHeight")
                }, 0)
            }
            function d() {
                e += 1,
                f.completeImg(g.get(0)) ? c() : 100 >= e ? b.setTimeout(d, 100) : f.wrapperOuter.css("height", "")
            }
            var e, f = this, g = a(f.$owlItems[f.currentItem]).find("img");
            void 0 !== g.get(0) ? (e = 0,
            d()) : c()
        },
        completeImg: function(a) {
            return !(!a.complete || "undefined" != typeof a.naturalWidth && 0 === a.naturalWidth)
        },
        onVisibleItems: function() {
            var b;
            for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"),
            this.visibleItems = [],
            b = this.currentItem; b < this.currentItem + this.options.items; b += 1)
                this.visibleItems.push(b),
                !0 === this.options.addClassActive && a(this.$owlItems[b]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function(a) {
            this.outClass = "owl-" + a + "-out",
            this.inClass = "owl-" + a + "-in"
        },
        singleItemTransition: function() {
            var a = this
              , b = a.outClass
              , c = a.inClass
              , d = a.$owlItems.eq(a.currentItem)
              , e = a.$owlItems.eq(a.prevItem)
              , f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem]
              , g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
            a.isTransition = !0,
            a.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": g + "px",
                "-moz-perspective-origin": g + "px",
                "perspective-origin": g + "px"
            }),
            e.css({
                position: "relative",
                left: f + "px"
            }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endPrev = !0,
                e.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"),
                a.clearTransStyle(e, b)
            }),
            d.addClass(c).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endCurrent = !0,
                d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"),
                a.clearTransStyle(d, c)
            })
        },
        clearTransStyle: function(a, b) {
            a.css({
                position: "",
                left: ""
            }).removeClass(b),
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"),
            this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function() {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function() {
            this.$elem.off(".owl owl mousedown.disableTextSelect"),
            a(c).off(".owl owl"),
            a(b).off("resize", this.resizer)
        },
        unWrap: function() {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(),
            this.$userItems.unwrap().unwrap(),
            this.owlControls && this.owlControls.remove()),
            this.clearEvents(),
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            this.stop(),
            b.clearInterval(this.checkVisible),
            this.unWrap(),
            this.$elem.removeData()
        },
        reinit: function(b) {
            b = a.extend({}, this.userOptions, b),
            this.unWrap(),
            this.init(b, this.$elem)
        },
        addItem: function(a, b) {
            var c;
            return !!a && (0 === this.$elem.children().length ? (this.$elem.append(a),
            this.setVars(),
            !1) : (this.unWrap(),
            c = void 0 === b || -1 === b ? -1 : b,
            c >= this.$userItems.length || -1 === c ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(c).before(a),
            void this.setVars()))
        },
        removeItem: function(a) {
            return 0 !== this.$elem.children().length && (a = void 0 === a || -1 === a ? -1 : a,
            this.unWrap(),
            this.$userItems.eq(a).remove(),
            void this.setVars())
        }
    };
    a.fn.owlCarousel = function(b) {
        return this.each(function() {
            if (!0 === a(this).data("owl-init"))
                return !1;
            a(this).data("owl-init", !0);
            var c = Object.create(d);
            c.init(b, this),
            a.data(this, "owlCarousel", c)
        })
    }
    ,
    a.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: b,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
}(jQuery, window, document),
function(a) {
    "use strict";
    var b = a(window)
      , c = b.height();
    b.resize(function() {
        c = b.height()
    }),
    a.fn.parallax = function(d, e, f) {
        function g() {
            var f = b.scrollTop();
            j.each(function() {
                var b = a(this)
                  , g = b.offset().top
                  , k = h(b);
                g + k < f || g > f + c || j.css("backgroundPosition", d + " " + Math.round((i - f) * e) + "px")
            })
        }
        var h, i, j = a(this);
        j.each(function() {
            i = j.offset().top
        }),
        h = f ? function(a) {
            return a.outerHeight(!0)
        }
        : function(a) {
            return a.height()
        }
        ,
        (arguments.length < 1 || null === d) && (d = "50%"),
        (arguments.length < 2 || null === e) && (e = .1),
        (arguments.length < 3 || null === f) && (f = !0),
        b.bind("scroll", g).resize(g),
        g()
    }
}(jQuery),
!function(a) {
    "undefined" == typeof a.fn.each2 && a.extend(a.fn, {
        each2: function(b) {
            for (var c = a([0]), d = -1, e = this.length; ++d < e && (c.context = c[0] = this[d]) && b.call(c[0], d, c) !== !1; )
                ;
            return this
        }
    })
}(jQuery),
function(a, b) {
    "use strict";
    function c(b) {
        var c = a(document.createTextNode(""));
        b.before(c),
        c.before(b),
        c.remove()
    }
    function d(a) {
        function b(a) {
            return O[a] || a
        }
        return a.replace(/[^\u0000-\u007E]/g, b)
    }
    function e(a, b) {
        for (var c = 0, d = b.length; d > c; c += 1)
            if (g(a, b[c]))
                return c;
        return -1
    }
    function f() {
        var b = a(N);
        b.appendTo(document.body);
        var c = {
            width: b.width() - b[0].clientWidth,
            height: b.height() - b[0].clientHeight
        };
        return b.remove(),
        c
    }
    function g(a, c) {
        return a === c || a !== b && c !== b && (null !== a && null !== c && (a.constructor === String ? a + "" == c + "" : c.constructor === String && c + "" == a + ""))
    }
    function h(a, b, c) {
        var d, e, f;
        if (null === a || a.length < 1)
            return [];
        for (d = a.split(b),
        e = 0,
        f = d.length; f > e; e += 1)
            d[e] = c(d[e]);
        return d
    }
    function i(a) {
        return a.outerWidth(!1) - a.width()
    }
    function j(c) {
        var d = "keyup-change-value";
        c.on("keydown", function() {
            a.data(c, d) === b && a.data(c, d, c.val())
        }),
        c.on("keyup", function() {
            var e = a.data(c, d);
            e !== b && c.val() !== e && (a.removeData(c, d),
            c.trigger("keyup-change"))
        })
    }
    function k(c) {
        c.on("mousemove", function(c) {
            var d = L;
            (d === b || d.x !== c.pageX || d.y !== c.pageY) && a(c.target).trigger("mousemove-filtered", c)
        })
    }
    function l(a, c, d) {
        d = d || b;
        var e;
        return function() {
            var b = arguments;
            window.clearTimeout(e),
            e = window.setTimeout(function() {
                c.apply(d, b)
            }, a)
        }
    }
    function m(a, b) {
        var c = l(a, function(a) {
            b.trigger("scroll-debounced", a)
        });
        b.on("scroll", function(a) {
            e(a.target, b.get()) >= 0 && c(a)
        })
    }
    function n(a) {
        a[0] !== document.activeElement && window.setTimeout(function() {
            var b, c = a[0], d = a.val().length;
            a.focus();
            var e = c.offsetWidth > 0 || c.offsetHeight > 0;
            e && c === document.activeElement && (c.setSelectionRange ? c.setSelectionRange(d, d) : c.createTextRange && (b = c.createTextRange(),
            b.collapse(!1),
            b.select()))
        }, 0)
    }
    function o(b) {
        b = a(b)[0];
        var c = 0
          , d = 0;
        if ("selectionStart"in b)
            c = b.selectionStart,
            d = b.selectionEnd - c;
        else if ("selection"in document) {
            b.focus();
            var e = document.selection.createRange();
            d = document.selection.createRange().text.length,
            e.moveStart("character", -b.value.length),
            c = e.text.length - d
        }
        return {
            offset: c,
            length: d
        }
    }
    function p(a) {
        a.preventDefault(),
        a.stopPropagation()
    }
    function q(a) {
        a.preventDefault(),
        a.stopImmediatePropagation()
    }
    function r(b) {
        if (!I) {
            var c = b[0].currentStyle || window.getComputedStyle(b[0], null);
            I = a(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: c.fontSize,
                fontFamily: c.fontFamily,
                fontStyle: c.fontStyle,
                fontWeight: c.fontWeight,
                letterSpacing: c.letterSpacing,
                textTransform: c.textTransform,
                whiteSpace: "nowrap"
            }),
            I.attr("class", "select2-sizer"),
            a(document.body).append(I)
        }
        return I.text(b.val()),
        I.width()
    }
    function s(b, c, d) {
        var e, f, g = [];
        e = a.trim(b.attr("class")),
        e && (e = "" + e,
        a(e.split(/\s+/)).each2(function() {
            0 === this.indexOf("select2-") && g.push(this)
        })),
        e = a.trim(c.attr("class")),
        e && (e = "" + e,
        a(e.split(/\s+/)).each2(function() {
            0 !== this.indexOf("select2-") && (f = d(this),
            f && g.push(f))
        })),
        b.attr("class", g.join(" "))
    }
    function t(a, b, c, e) {
        var f = d(a.toUpperCase()).indexOf(d(b.toUpperCase()))
          , g = b.length;
        return 0 > f ? void c.push(e(a)) : (c.push(e(a.substring(0, f))),
        c.push("<span class='select2-match'>"),
        c.push(e(a.substring(f, f + g))),
        c.push("</span>"),
        void c.push(e(a.substring(f + g, a.length))))
    }
    function u(a) {
        var b = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
        };
        return String(a).replace(/[&<>"'\/\\]/g, function(a) {
            return b[a]
        })
    }
    function v(c) {
        var d, e = null, f = c.quietMillis || 100, g = c.url, h = this;
        return function(i) {
            window.clearTimeout(d),
            d = window.setTimeout(function() {
                var d = c.data
                  , f = g
                  , j = c.transport || a.fn.select2.ajaxDefaults.transport
                  , k = {
                    type: c.type || "GET",
                    cache: c.cache || !1,
                    jsonpCallback: c.jsonpCallback || b,
                    dataType: c.dataType || "json"
                }
                  , l = a.extend({}, a.fn.select2.ajaxDefaults.params, k);
                d = d ? d.call(h, i.term, i.page, i.context) : null,
                f = "function" == typeof f ? f.call(h, i.term, i.page, i.context) : f,
                e && "function" == typeof e.abort && e.abort(),
                c.params && (a.isFunction(c.params) ? a.extend(l, c.params.call(h)) : a.extend(l, c.params)),
                a.extend(l, {
                    url: f,
                    dataType: c.dataType,
                    data: d,
                    success: function(a) {
                        var b = c.results(a, i.page, i);
                        i.callback(b)
                    },
                    error: function(a, b, c) {
                        var d = {
                            hasError: !0,
                            jqXHR: a,
                            textStatus: b,
                            errorThrown: c
                        };
                        i.callback(d)
                    }
                }),
                e = j.call(h, l)
            }, f)
        }
    }
    function w(b) {
        var c, d, e = b, f = function(a) {
            return "" + a.text
        };
        a.isArray(e) && (d = e,
        e = {
            results: d
        }),
        a.isFunction(e) === !1 && (d = e,
        e = function() {
            return d
        }
        );
        var g = e();
        return g.text && (f = g.text,
        a.isFunction(f) || (c = g.text,
        f = function(a) {
            return a[c]
        }
        )),
        function(b) {
            var c, d = b.term, g = {
                results: []
            };
            return "" === d ? void b.callback(e()) : (c = function(e, g) {
                var h, i;
                if (e = e[0],
                e.children) {
                    h = {};
                    for (i in e)
                        e.hasOwnProperty(i) && (h[i] = e[i]);
                    h.children = [],
                    a(e.children).each2(function(a, b) {
                        c(b, h.children)
                    }),
                    (h.children.length || b.matcher(d, f(h), e)) && g.push(h)
                } else
                    b.matcher(d, f(e), e) && g.push(e)
            }
            ,
            a(e().results).each2(function(a, b) {
                c(b, g.results)
            }),
            void b.callback(g))
        }
    }
    function x(c) {
        var d = a.isFunction(c);
        return function(e) {
            var f = e.term
              , g = {
                results: []
            }
              , h = d ? c(e) : c;
            a.isArray(h) && (a(h).each(function() {
                var a = this.text !== b
                  , c = a ? this.text : this;
                ("" === f || e.matcher(f, c)) && g.results.push(a ? this : {
                    id: this,
                    text: this
                })
            }),
            e.callback(g))
        }
    }
    function y(b, c) {
        if (a.isFunction(b))
            return !0;
        if (!b)
            return !1;
        if ("string" == typeof b)
            return !0;
        throw new Error(c + " must be a string, function, or falsy value")
    }
    function z(b, c) {
        if (a.isFunction(b)) {
            var d = Array.prototype.slice.call(arguments, 2);
            return b.apply(c, d)
        }
        return b
    }
    function A(b) {
        var c = 0;
        return a.each(b, function(a, b) {
            b.children ? c += A(b.children) : c++
        }),
        c
    }
    function B(a, c, d, e) {
        var f, h, i, j, k, l = a, m = !1;
        if (!e.createSearchChoice || !e.tokenSeparators || e.tokenSeparators.length < 1)
            return b;
        for (; ; ) {
            for (h = -1,
            i = 0,
            j = e.tokenSeparators.length; j > i && (k = e.tokenSeparators[i],
            h = a.indexOf(k),
            !(h >= 0)); i++)
                ;
            if (0 > h)
                break;
            if (f = a.substring(0, h),
            a = a.substring(h + k.length),
            f.length > 0 && (f = e.createSearchChoice.call(this, f, c),
            f !== b && null !== f && e.id(f) !== b && null !== e.id(f))) {
                for (m = !1,
                i = 0,
                j = c.length; j > i; i++)
                    if (g(e.id(f), e.id(c[i]))) {
                        m = !0;
                        break
                    }
                m || d(f)
            }
        }
        return l !== a ? a : void 0
    }
    function C() {
        var b = this;
        a.each(arguments, function(a, c) {
            b[c].remove(),
            b[c] = null
        })
    }
    function D(b, c) {
        var d = function() {};
        return d.prototype = new b,
        d.prototype.constructor = d,
        d.prototype.parent = b.prototype,
        d.prototype = a.extend(d.prototype, c),
        d
    }
    if (window.Select2 === b) {
        var E, F, G, H, I, J, K, L = {
            x: 0,
            y: 0
        }, M = {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            HOME: 36,
            END: 35,
            BACKSPACE: 8,
            DELETE: 46,
            isArrow: function(a) {
                switch (a = a.which ? a.which : a) {
                case M.LEFT:
                case M.RIGHT:
                case M.UP:
                case M.DOWN:
                    return !0
                }
                return !1
            },
            isControl: function(a) {
                var b = a.which;
                switch (b) {
                case M.SHIFT:
                case M.CTRL:
                case M.ALT:
                    return !0
                }
                return !!a.metaKey
            },
            isFunctionKey: function(a) {
                return a = a.which ? a.which : a,
                a >= 112 && 123 >= a
            }
        }, N = "<div class='select2-measure-scrollbar'></div>", O = {
            "Ⓐ": "A",
            "Ａ": "A",
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ầ": "A",
            "Ấ": "A",
            "Ẫ": "A",
            "Ẩ": "A",
            "Ã": "A",
            "Ā": "A",
            "Ă": "A",
            "Ằ": "A",
            "Ắ": "A",
            "Ẵ": "A",
            "Ẳ": "A",
            "Ȧ": "A",
            "Ǡ": "A",
            "Ä": "A",
            "Ǟ": "A",
            "Ả": "A",
            "Å": "A",
            "Ǻ": "A",
            "Ǎ": "A",
            "Ȁ": "A",
            "Ȃ": "A",
            "Ạ": "A",
            "Ậ": "A",
            "Ặ": "A",
            "Ḁ": "A",
            "Ą": "A",
            "Ⱥ": "A",
            "Ɐ": "A",
            "Ꜳ": "AA",
            "Æ": "AE",
            "Ǽ": "AE",
            "Ǣ": "AE",
            "Ꜵ": "AO",
            "Ꜷ": "AU",
            "Ꜹ": "AV",
            "Ꜻ": "AV",
            "Ꜽ": "AY",
            "Ⓑ": "B",
            "Ｂ": "B",
            "Ḃ": "B",
            "Ḅ": "B",
            "Ḇ": "B",
            "Ƀ": "B",
            "Ƃ": "B",
            "Ɓ": "B",
            "Ⓒ": "C",
            "Ｃ": "C",
            "Ć": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Č": "C",
            "Ç": "C",
            "Ḉ": "C",
            "Ƈ": "C",
            "Ȼ": "C",
            "Ꜿ": "C",
            "Ⓓ": "D",
            "Ｄ": "D",
            "Ḋ": "D",
            "Ď": "D",
            "Ḍ": "D",
            "Ḑ": "D",
            "Ḓ": "D",
            "Ḏ": "D",
            "Đ": "D",
            "Ƌ": "D",
            "Ɗ": "D",
            "Ɖ": "D",
            "Ꝺ": "D",
            "Ǳ": "DZ",
            "Ǆ": "DZ",
            "ǲ": "Dz",
            "ǅ": "Dz",
            "Ⓔ": "E",
            "Ｅ": "E",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ề": "E",
            "Ế": "E",
            "Ễ": "E",
            "Ể": "E",
            "Ẽ": "E",
            "Ē": "E",
            "Ḕ": "E",
            "Ḗ": "E",
            "Ĕ": "E",
            "Ė": "E",
            "Ë": "E",
            "Ẻ": "E",
            "Ě": "E",
            "Ȅ": "E",
            "Ȇ": "E",
            "Ẹ": "E",
            "Ệ": "E",
            "Ȩ": "E",
            "Ḝ": "E",
            "Ę": "E",
            "Ḙ": "E",
            "Ḛ": "E",
            "Ɛ": "E",
            "Ǝ": "E",
            "Ⓕ": "F",
            "Ｆ": "F",
            "Ḟ": "F",
            "Ƒ": "F",
            "Ꝼ": "F",
            "Ⓖ": "G",
            "Ｇ": "G",
            "Ǵ": "G",
            "Ĝ": "G",
            "Ḡ": "G",
            "Ğ": "G",
            "Ġ": "G",
            "Ǧ": "G",
            "Ģ": "G",
            "Ǥ": "G",
            "Ɠ": "G",
            "Ꞡ": "G",
            "Ᵹ": "G",
            "Ꝿ": "G",
            "Ⓗ": "H",
            "Ｈ": "H",
            "Ĥ": "H",
            "Ḣ": "H",
            "Ḧ": "H",
            "Ȟ": "H",
            "Ḥ": "H",
            "Ḩ": "H",
            "Ḫ": "H",
            "Ħ": "H",
            "Ⱨ": "H",
            "Ⱶ": "H",
            "Ɥ": "H",
            "Ⓘ": "I",
            "Ｉ": "I",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ĩ": "I",
            "Ī": "I",
            "Ĭ": "I",
            "İ": "I",
            "Ï": "I",
            "Ḯ": "I",
            "Ỉ": "I",
            "Ǐ": "I",
            "Ȉ": "I",
            "Ȋ": "I",
            "Ị": "I",
            "Į": "I",
            "Ḭ": "I",
            "Ɨ": "I",
            "Ⓙ": "J",
            "Ｊ": "J",
            "Ĵ": "J",
            "Ɉ": "J",
            "Ⓚ": "K",
            "Ｋ": "K",
            "Ḱ": "K",
            "Ǩ": "K",
            "Ḳ": "K",
            "Ķ": "K",
            "Ḵ": "K",
            "Ƙ": "K",
            "Ⱪ": "K",
            "Ꝁ": "K",
            "Ꝃ": "K",
            "Ꝅ": "K",
            "Ꞣ": "K",
            "Ⓛ": "L",
            "Ｌ": "L",
            "Ŀ": "L",
            "Ĺ": "L",
            "Ľ": "L",
            "Ḷ": "L",
            "Ḹ": "L",
            "Ļ": "L",
            "Ḽ": "L",
            "Ḻ": "L",
            "Ł": "L",
            "Ƚ": "L",
            "Ɫ": "L",
            "Ⱡ": "L",
            "Ꝉ": "L",
            "Ꝇ": "L",
            "Ꞁ": "L",
            "Ǉ": "LJ",
            "ǈ": "Lj",
            "Ⓜ": "M",
            "Ｍ": "M",
            "Ḿ": "M",
            "Ṁ": "M",
            "Ṃ": "M",
            "Ɱ": "M",
            "Ɯ": "M",
            "Ⓝ": "N",
            "Ｎ": "N",
            "Ǹ": "N",
            "Ń": "N",
            "Ñ": "N",
            "Ṅ": "N",
            "Ň": "N",
            "Ṇ": "N",
            "Ņ": "N",
            "Ṋ": "N",
            "Ṉ": "N",
            "Ƞ": "N",
            "Ɲ": "N",
            "Ꞑ": "N",
            "Ꞥ": "N",
            "Ǌ": "NJ",
            "ǋ": "Nj",
            "Ⓞ": "O",
            "Ｏ": "O",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Ồ": "O",
            "Ố": "O",
            "Ỗ": "O",
            "Ổ": "O",
            "Õ": "O",
            "Ṍ": "O",
            "Ȭ": "O",
            "Ṏ": "O",
            "Ō": "O",
            "Ṑ": "O",
            "Ṓ": "O",
            "Ŏ": "O",
            "Ȯ": "O",
            "Ȱ": "O",
            "Ö": "O",
            "Ȫ": "O",
            "Ỏ": "O",
            "Ő": "O",
            "Ǒ": "O",
            "Ȍ": "O",
            "Ȏ": "O",
            "Ơ": "O",
            "Ờ": "O",
            "Ớ": "O",
            "Ỡ": "O",
            "Ở": "O",
            "Ợ": "O",
            "Ọ": "O",
            "Ộ": "O",
            "Ǫ": "O",
            "Ǭ": "O",
            "Ø": "O",
            "Ǿ": "O",
            "Ɔ": "O",
            "Ɵ": "O",
            "Ꝋ": "O",
            "Ꝍ": "O",
            "Ƣ": "OI",
            "Ꝏ": "OO",
            "Ȣ": "OU",
            "Ⓟ": "P",
            "Ｐ": "P",
            "Ṕ": "P",
            "Ṗ": "P",
            "Ƥ": "P",
            "Ᵽ": "P",
            "Ꝑ": "P",
            "Ꝓ": "P",
            "Ꝕ": "P",
            "Ⓠ": "Q",
            "Ｑ": "Q",
            "Ꝗ": "Q",
            "Ꝙ": "Q",
            "Ɋ": "Q",
            "Ⓡ": "R",
            "Ｒ": "R",
            "Ŕ": "R",
            "Ṙ": "R",
            "Ř": "R",
            "Ȑ": "R",
            "Ȓ": "R",
            "Ṛ": "R",
            "Ṝ": "R",
            "Ŗ": "R",
            "Ṟ": "R",
            "Ɍ": "R",
            "Ɽ": "R",
            "Ꝛ": "R",
            "Ꞧ": "R",
            "Ꞃ": "R",
            "Ⓢ": "S",
            "Ｓ": "S",
            "ẞ": "S",
            "Ś": "S",
            "Ṥ": "S",
            "Ŝ": "S",
            "Ṡ": "S",
            "Š": "S",
            "Ṧ": "S",
            "Ṣ": "S",
            "Ṩ": "S",
            "Ș": "S",
            "Ş": "S",
            "Ȿ": "S",
            "Ꞩ": "S",
            "Ꞅ": "S",
            "Ⓣ": "T",
            "Ｔ": "T",
            "Ṫ": "T",
            "Ť": "T",
            "Ṭ": "T",
            "Ț": "T",
            "Ţ": "T",
            "Ṱ": "T",
            "Ṯ": "T",
            "Ŧ": "T",
            "Ƭ": "T",
            "Ʈ": "T",
            "Ⱦ": "T",
            "Ꞇ": "T",
            "Ꜩ": "TZ",
            "Ⓤ": "U",
            "Ｕ": "U",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ũ": "U",
            "Ṹ": "U",
            "Ū": "U",
            "Ṻ": "U",
            "Ŭ": "U",
            "Ü": "U",
            "Ǜ": "U",
            "Ǘ": "U",
            "Ǖ": "U",
            "Ǚ": "U",
            "Ủ": "U",
            "Ů": "U",
            "Ű": "U",
            "Ǔ": "U",
            "Ȕ": "U",
            "Ȗ": "U",
            "Ư": "U",
            "Ừ": "U",
            "Ứ": "U",
            "Ữ": "U",
            "Ử": "U",
            "Ự": "U",
            "Ụ": "U",
            "Ṳ": "U",
            "Ų": "U",
            "Ṷ": "U",
            "Ṵ": "U",
            "Ʉ": "U",
            "Ⓥ": "V",
            "Ｖ": "V",
            "Ṽ": "V",
            "Ṿ": "V",
            "Ʋ": "V",
            "Ꝟ": "V",
            "Ʌ": "V",
            "Ꝡ": "VY",
            "Ⓦ": "W",
            "Ｗ": "W",
            "Ẁ": "W",
            "Ẃ": "W",
            "Ŵ": "W",
            "Ẇ": "W",
            "Ẅ": "W",
            "Ẉ": "W",
            "Ⱳ": "W",
            "Ⓧ": "X",
            "Ｘ": "X",
            "Ẋ": "X",
            "Ẍ": "X",
            "Ⓨ": "Y",
            "Ｙ": "Y",
            "Ỳ": "Y",
            "Ý": "Y",
            "Ŷ": "Y",
            "Ỹ": "Y",
            "Ȳ": "Y",
            "Ẏ": "Y",
            "Ÿ": "Y",
            "Ỷ": "Y",
            "Ỵ": "Y",
            "Ƴ": "Y",
            "Ɏ": "Y",
            "Ỿ": "Y",
            "Ⓩ": "Z",
            "Ｚ": "Z",
            "Ź": "Z",
            "Ẑ": "Z",
            "Ż": "Z",
            "Ž": "Z",
            "Ẓ": "Z",
            "Ẕ": "Z",
            "Ƶ": "Z",
            "Ȥ": "Z",
            "Ɀ": "Z",
            "Ⱬ": "Z",
            "Ꝣ": "Z",
            "ⓐ": "a",
            "ａ": "a",
            "ẚ": "a",
            "à": "a",
            "á": "a",
            "â": "a",
            "ầ": "a",
            "ấ": "a",
            "ẫ": "a",
            "ẩ": "a",
            "ã": "a",
            "ā": "a",
            "ă": "a",
            "ằ": "a",
            "ắ": "a",
            "ẵ": "a",
            "ẳ": "a",
            "ȧ": "a",
            "ǡ": "a",
            "ä": "a",
            "ǟ": "a",
            "ả": "a",
            "å": "a",
            "ǻ": "a",
            "ǎ": "a",
            "ȁ": "a",
            "ȃ": "a",
            "ạ": "a",
            "ậ": "a",
            "ặ": "a",
            "ḁ": "a",
            "ą": "a",
            "ⱥ": "a",
            "ɐ": "a",
            "ꜳ": "aa",
            "æ": "ae",
            "ǽ": "ae",
            "ǣ": "ae",
            "ꜵ": "ao",
            "ꜷ": "au",
            "ꜹ": "av",
            "ꜻ": "av",
            "ꜽ": "ay",
            "ⓑ": "b",
            "ｂ": "b",
            "ḃ": "b",
            "ḅ": "b",
            "ḇ": "b",
            "ƀ": "b",
            "ƃ": "b",
            "ɓ": "b",
            "ⓒ": "c",
            "ｃ": "c",
            "ć": "c",
            "ĉ": "c",
            "ċ": "c",
            "č": "c",
            "ç": "c",
            "ḉ": "c",
            "ƈ": "c",
            "ȼ": "c",
            "ꜿ": "c",
            "ↄ": "c",
            "ⓓ": "d",
            "ｄ": "d",
            "ḋ": "d",
            "ď": "d",
            "ḍ": "d",
            "ḑ": "d",
            "ḓ": "d",
            "ḏ": "d",
            "đ": "d",
            "ƌ": "d",
            "ɖ": "d",
            "ɗ": "d",
            "ꝺ": "d",
            "ǳ": "dz",
            "ǆ": "dz",
            "ⓔ": "e",
            "ｅ": "e",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ề": "e",
            "ế": "e",
            "ễ": "e",
            "ể": "e",
            "ẽ": "e",
            "ē": "e",
            "ḕ": "e",
            "ḗ": "e",
            "ĕ": "e",
            "ė": "e",
            "ë": "e",
            "ẻ": "e",
            "ě": "e",
            "ȅ": "e",
            "ȇ": "e",
            "ẹ": "e",
            "ệ": "e",
            "ȩ": "e",
            "ḝ": "e",
            "ę": "e",
            "ḙ": "e",
            "ḛ": "e",
            "ɇ": "e",
            "ɛ": "e",
            "ǝ": "e",
            "ⓕ": "f",
            "ｆ": "f",
            "ḟ": "f",
            "ƒ": "f",
            "ꝼ": "f",
            "ⓖ": "g",
            "ｇ": "g",
            "ǵ": "g",
            "ĝ": "g",
            "ḡ": "g",
            "ğ": "g",
            "ġ": "g",
            "ǧ": "g",
            "ģ": "g",
            "ǥ": "g",
            "ɠ": "g",
            "ꞡ": "g",
            "ᵹ": "g",
            "ꝿ": "g",
            "ⓗ": "h",
            "ｈ": "h",
            "ĥ": "h",
            "ḣ": "h",
            "ḧ": "h",
            "ȟ": "h",
            "ḥ": "h",
            "ḩ": "h",
            "ḫ": "h",
            "ẖ": "h",
            "ħ": "h",
            "ⱨ": "h",
            "ⱶ": "h",
            "ɥ": "h",
            "ƕ": "hv",
            "ⓘ": "i",
            "ｉ": "i",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ĩ": "i",
            "ī": "i",
            "ĭ": "i",
            "ï": "i",
            "ḯ": "i",
            "ỉ": "i",
            "ǐ": "i",
            "ȉ": "i",
            "ȋ": "i",
            "ị": "i",
            "į": "i",
            "ḭ": "i",
            "ɨ": "i",
            "ı": "i",
            "ⓙ": "j",
            "ｊ": "j",
            "ĵ": "j",
            "ǰ": "j",
            "ɉ": "j",
            "ⓚ": "k",
            "ｋ": "k",
            "ḱ": "k",
            "ǩ": "k",
            "ḳ": "k",
            "ķ": "k",
            "ḵ": "k",
            "ƙ": "k",
            "ⱪ": "k",
            "ꝁ": "k",
            "ꝃ": "k",
            "ꝅ": "k",
            "ꞣ": "k",
            "ⓛ": "l",
            "ｌ": "l",
            "ŀ": "l",
            "ĺ": "l",
            "ľ": "l",
            "ḷ": "l",
            "ḹ": "l",
            "ļ": "l",
            "ḽ": "l",
            "ḻ": "l",
            "ſ": "l",
            "ł": "l",
            "ƚ": "l",
            "ɫ": "l",
            "ⱡ": "l",
            "ꝉ": "l",
            "ꞁ": "l",
            "ꝇ": "l",
            "ǉ": "lj",
            "ⓜ": "m",
            "ｍ": "m",
            "ḿ": "m",
            "ṁ": "m",
            "ṃ": "m",
            "ɱ": "m",
            "ɯ": "m",
            "ⓝ": "n",
            "ｎ": "n",
            "ǹ": "n",
            "ń": "n",
            "ñ": "n",
            "ṅ": "n",
            "ň": "n",
            "ṇ": "n",
            "ņ": "n",
            "ṋ": "n",
            "ṉ": "n",
            "ƞ": "n",
            "ɲ": "n",
            "ŉ": "n",
            "ꞑ": "n",
            "ꞥ": "n",
            "ǌ": "nj",
            "ⓞ": "o",
            "ｏ": "o",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "ồ": "o",
            "ố": "o",
            "ỗ": "o",
            "ổ": "o",
            "õ": "o",
            "ṍ": "o",
            "ȭ": "o",
            "ṏ": "o",
            "ō": "o",
            "ṑ": "o",
            "ṓ": "o",
            "ŏ": "o",
            "ȯ": "o",
            "ȱ": "o",
            "ö": "o",
            "ȫ": "o",
            "ỏ": "o",
            "ő": "o",
            "ǒ": "o",
            "ȍ": "o",
            "ȏ": "o",
            "ơ": "o",
            "ờ": "o",
            "ớ": "o",
            "ỡ": "o",
            "ở": "o",
            "ợ": "o",
            "ọ": "o",
            "ộ": "o",
            "ǫ": "o",
            "ǭ": "o",
            "ø": "o",
            "ǿ": "o",
            "ɔ": "o",
            "ꝋ": "o",
            "ꝍ": "o",
            "ɵ": "o",
            "ƣ": "oi",
            "ȣ": "ou",
            "ꝏ": "oo",
            "ⓟ": "p",
            "ｐ": "p",
            "ṕ": "p",
            "ṗ": "p",
            "ƥ": "p",
            "ᵽ": "p",
            "ꝑ": "p",
            "ꝓ": "p",
            "ꝕ": "p",
            "ⓠ": "q",
            "ｑ": "q",
            "ɋ": "q",
            "ꝗ": "q",
            "ꝙ": "q",
            "ⓡ": "r",
            "ｒ": "r",
            "ŕ": "r",
            "ṙ": "r",
            "ř": "r",
            "ȑ": "r",
            "ȓ": "r",
            "ṛ": "r",
            "ṝ": "r",
            "ŗ": "r",
            "ṟ": "r",
            "ɍ": "r",
            "ɽ": "r",
            "ꝛ": "r",
            "ꞧ": "r",
            "ꞃ": "r",
            "ⓢ": "s",
            "ｓ": "s",
            "ß": "s",
            "ś": "s",
            "ṥ": "s",
            "ŝ": "s",
            "ṡ": "s",
            "š": "s",
            "ṧ": "s",
            "ṣ": "s",
            "ṩ": "s",
            "ș": "s",
            "ş": "s",
            "ȿ": "s",
            "ꞩ": "s",
            "ꞅ": "s",
            "ẛ": "s",
            "ⓣ": "t",
            "ｔ": "t",
            "ṫ": "t",
            "ẗ": "t",
            "ť": "t",
            "ṭ": "t",
            "ț": "t",
            "ţ": "t",
            "ṱ": "t",
            "ṯ": "t",
            "ŧ": "t",
            "ƭ": "t",
            "ʈ": "t",
            "ⱦ": "t",
            "ꞇ": "t",
            "ꜩ": "tz",
            "ⓤ": "u",
            "ｕ": "u",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ũ": "u",
            "ṹ": "u",
            "ū": "u",
            "ṻ": "u",
            "ŭ": "u",
            "ü": "u",
            "ǜ": "u",
            "ǘ": "u",
            "ǖ": "u",
            "ǚ": "u",
            "ủ": "u",
            "ů": "u",
            "ű": "u",
            "ǔ": "u",
            "ȕ": "u",
            "ȗ": "u",
            "ư": "u",
            "ừ": "u",
            "ứ": "u",
            "ữ": "u",
            "ử": "u",
            "ự": "u",
            "ụ": "u",
            "ṳ": "u",
            "ų": "u",
            "ṷ": "u",
            "ṵ": "u",
            "ʉ": "u",
            "ⓥ": "v",
            "ｖ": "v",
            "ṽ": "v",
            "ṿ": "v",
            "ʋ": "v",
            "ꝟ": "v",
            "ʌ": "v",
            "ꝡ": "vy",
            "ⓦ": "w",
            "ｗ": "w",
            "ẁ": "w",
            "ẃ": "w",
            "ŵ": "w",
            "ẇ": "w",
            "ẅ": "w",
            "ẘ": "w",
            "ẉ": "w",
            "ⱳ": "w",
            "ⓧ": "x",
            "ｘ": "x",
            "ẋ": "x",
            "ẍ": "x",
            "ⓨ": "y",
            "ｙ": "y",
            "ỳ": "y",
            "ý": "y",
            "ŷ": "y",
            "ỹ": "y",
            "ȳ": "y",
            "ẏ": "y",
            "ÿ": "y",
            "ỷ": "y",
            "ẙ": "y",
            "ỵ": "y",
            "ƴ": "y",
            "ɏ": "y",
            "ỿ": "y",
            "ⓩ": "z",
            "ｚ": "z",
            "ź": "z",
            "ẑ": "z",
            "ż": "z",
            "ž": "z",
            "ẓ": "z",
            "ẕ": "z",
            "ƶ": "z",
            "ȥ": "z",
            "ɀ": "z",
            "ⱬ": "z",
            "ꝣ": "z",
            "Ά": "Α",
            "Έ": "Ε",
            "Ή": "Η",
            "Ί": "Ι",
            "Ϊ": "Ι",
            "Ό": "Ο",
            "Ύ": "Υ",
            "Ϋ": "Υ",
            "Ώ": "Ω",
            "ά": "α",
            "έ": "ε",
            "ή": "η",
            "ί": "ι",
            "ϊ": "ι",
            "ΐ": "ι",
            "ό": "ο",
            "ύ": "υ",
            "ϋ": "υ",
            "ΰ": "υ",
            "ω": "ω",
            "ς": "σ"
        };
        J = a(document),
        H = function() {
            var a = 1;
            return function() {
                return a++
            }
        }(),
        E = D(Object, {
            bind: function(a) {
                var b = this;
                return function() {
                    a.apply(b, arguments)
                }
            },
            init: function(c) {
                var d, e, g = ".select2-results";
                this.opts = c = this.prepareOpts(c),
                this.id = c.id,
                c.element.data("select2") !== b && null !== c.element.data("select2") && c.element.data("select2").destroy(),
                this.container = this.createContainer(),
                this.liveRegion = a(".select2-hidden-accessible"),
                0 == this.liveRegion.length && (this.liveRegion = a("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("select2-hidden-accessible").appendTo(document.body)),
                this.containerId = "s2id_" + (c.element.attr("id") || "autogen" + H()),
                this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"),
                this.container.attr("id", this.containerId),
                this.container.attr("title", c.element.attr("title")),
                this.body = a(document.body),
                s(this.container, this.opts.element, this.opts.adaptContainerCssClass),
                this.container.attr("style", c.element.attr("style")),
                this.container.css(z(c.containerCss, this.opts.element)),
                this.container.addClass(z(c.containerCssClass, this.opts.element)),
                this.elementTabIndex = this.opts.element.attr("tabindex"),
                this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", p),
                this.container.data("select2", this),
                this.dropdown = this.container.find(".select2-drop"),
                s(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass),
                this.dropdown.addClass(z(c.dropdownCssClass, this.opts.element)),
                this.dropdown.data("select2", this),
                this.dropdown.on("click", p),
                this.results = d = this.container.find(g),
                this.search = e = this.container.find("input.select2-input"),
                this.queryCount = 0,
                this.resultsPage = 0,
                this.context = null,
                this.initContainer(),
                this.container.on("click", p),
                k(this.results),
                this.dropdown.on("mousemove-filtered", g, this.bind(this.highlightUnderEvent)),
                this.dropdown.on("touchstart touchmove touchend", g, this.bind(function(a) {
                    this._touchEvent = !0,
                    this.highlightUnderEvent(a)
                })),
                this.dropdown.on("touchmove", g, this.bind(this.touchMoved)),
                this.dropdown.on("touchstart touchend", g, this.bind(this.clearTouchMoved)),
                this.dropdown.on("click", this.bind(function(a) {
                    this._touchEvent && (this._touchEvent = !1,
                    this.selectHighlighted())
                })),
                m(80, this.results),
                this.dropdown.on("scroll-debounced", g, this.bind(this.loadMoreIfNeeded)),
                a(this.container).on("change", ".select2-input", function(a) {
                    a.stopPropagation()
                }),
                a(this.dropdown).on("change", ".select2-input", function(a) {
                    a.stopPropagation()
                }),
                a.fn.mousewheel && d.mousewheel(function(a, b, c, e) {
                    var f = d.scrollTop();
                    e > 0 && 0 >= f - e ? (d.scrollTop(0),
                    p(a)) : 0 > e && d.get(0).scrollHeight - d.scrollTop() + e <= d.height() && (d.scrollTop(d.get(0).scrollHeight - d.height()),
                    p(a))
                }),
                j(e),
                e.on("keyup-change input paste", this.bind(this.updateResults)),
                e.on("focus", function() {
                    e.addClass("select2-focused")
                }),
                e.on("blur", function() {
                    e.removeClass("select2-focused")
                }),
                this.dropdown.on("mouseup", g, this.bind(function(b) {
                    a(b.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(b),
                    this.selectHighlighted(b))
                })),
                this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(a) {
                    a.stopPropagation()
                }),
                this.lastSearchTerm = b,
                a.isFunction(this.opts.initSelection) && (this.initSelection(),
                this.monitorSource()),
                null !== c.maximumInputLength && this.search.attr("maxlength", c.maximumInputLength);
                var h = c.element.prop("disabled");
                h === b && (h = !1),
                this.enable(!h);
                var i = c.element.prop("readonly");
                i === b && (i = !1),
                this.readonly(i),
                K = K || f(),
                this.autofocus = c.element.prop("autofocus"),
                c.element.prop("autofocus", !1),
                this.autofocus && this.focus(),
                this.search.attr("placeholder", c.searchInputPlaceholder)
            },
            destroy: function() {
                var a = this.opts.element
                  , c = a.data("select2")
                  , d = this;
                this.close(),
                a.length && a[0].detachEvent && d._sync && a.each(function() {
                    d._sync && this.detachEvent("onpropertychange", d._sync)
                }),
                this.propertyObserver && (this.propertyObserver.disconnect(),
                this.propertyObserver = null),
                this._sync = null,
                c !== b && (c.container.remove(),
                c.liveRegion.remove(),
                c.dropdown.remove(),
                a.removeData("select2").off(".select2"),
                a.is("input[type='hidden']") ? a.css("display", "") : (a.show().prop("autofocus", this.autofocus || !1),
                this.elementTabIndex ? a.attr({
                    tabindex: this.elementTabIndex
                }) : a.removeAttr("tabindex"),
                a.show())),
                C.call(this, "container", "liveRegion", "dropdown", "results", "search")
            },
            optionToData: function(a) {
                return a.is("option") ? {
                    id: a.prop("value"),
                    text: a.text(),
                    element: a.get(),
                    css: a.attr("class"),
                    disabled: a.prop("disabled"),
                    locked: g(a.attr("locked"), "locked") || g(a.data("locked"), !0)
                } : a.is("optgroup") ? {
                    text: a.attr("label"),
                    children: [],
                    element: a.get(),
                    css: a.attr("class")
                } : void 0
            },
            prepareOpts: function(c) {
                var d, e, f, i, j = this;
                if (d = c.element,
                "select" === d.get(0).tagName.toLowerCase() && (this.select = e = c.element),
                e && a.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                    if (this in c)
                        throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                }),
                c.debug = c.debug || a.fn.select2.defaults.debug,
                c.debug && console && console.warn && (null != c.id && console.warn("Select2: The `id` option has been removed in Select2 4.0.0, consider renaming your `id` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"),
                null != c.text && console.warn("Select2: The `text` option has been removed in Select2 4.0.0, consider renaming your `text` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"),
                null != c.sortResults && console.warn("Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. "),
                null != c.selectOnBlur && console.warn("Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0."),
                null != c.ajax && null != c.ajax.results && console.warn("Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0."),
                null != c.formatNoResults && console.warn("Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0."),
                null != c.formatSearching && console.warn("Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0."),
                null != c.formatInputTooShort && console.warn("Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0."),
                null != c.formatInputTooLong && console.warn("Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0."),
                null != c.formatLoading && console.warn("Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0."),
                null != c.formatSelectionTooBig && console.warn("Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0."),
                c.element.data("select2Tags") && console.warn("Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.")),
                null != c.element.data("tags")) {
                    var k = c.element.data("tags");
                    a.isArray(k) || (k = []),
                    c.element.data("select2Tags", k)
                }
                if (null != c.sorter && (c.sortResults = c.sorter),
                null != c.selectOnClose && (c.selectOnBlur = c.selectOnClose),
                null != c.ajax && a.isFunction(c.ajax.processResults) && (c.ajax.results = c.ajax.processResults),
                null != c.language) {
                    var l = c.language;
                    a.isFunction(l.noMatches) && (c.formatNoMatches = l.noMatches),
                    a.isFunction(l.searching) && (c.formatSearching = l.searching),
                    a.isFunction(l.inputTooShort) && (c.formatInputTooShort = l.inputTooShort),
                    a.isFunction(l.inputTooLong) && (c.formatInputTooLong = l.inputTooLong),
                    a.isFunction(l.loadingMore) && (c.formatLoading = l.loadingMore),
                    a.isFunction(l.maximumSelected) && (c.formatSelectionTooBig = l.maximumSelected)
                }
                if (c = a.extend({}, {
                    populateResults: function(d, e, f) {
                        var g, h = this.opts.id, i = this.liveRegion;
                        (g = function(d, e, k) {
                            var l, m, n, o, p, q, r, s, t, u;
                            d = c.sortResults(d, e, f);
                            var v = [];
                            for (l = 0,
                            m = d.length; m > l; l += 1)
                                n = d[l],
                                p = n.disabled === !0,
                                o = !p && h(n) !== b,
                                q = n.children && n.children.length > 0,
                                r = a("<li></li>"),
                                r.addClass("select2-results-dept-" + k),
                                r.addClass("select2-result"),
                                r.addClass(o ? "select2-result-selectable" : "select2-result-unselectable"),
                                p && r.addClass("select2-disabled"),
                                q && r.addClass("select2-result-with-children"),
                                r.addClass(j.opts.formatResultCssClass(n)),
                                r.attr("role", "presentation"),
                                s = a(document.createElement("div")),
                                s.addClass("select2-result-label"),
                                s.attr("id", "select2-result-label-" + H()),
                                s.attr("role", "option"),
                                u = c.formatResult(n, s, f, j.opts.escapeMarkup),
                                u !== b && (s.html(u),
                                r.append(s)),
                                q && (t = a("<ul></ul>"),
                                t.addClass("select2-result-sub"),
                                g(n.children, t, k + 1),
                                r.append(t)),
                                r.data("select2-data", n),
                                v.push(r[0]);
                            e.append(v),
                            i.text(c.formatMatches(d.length))
                        }
                        )(e, d, 0)
                    }
                }, a.fn.select2.defaults, c),
                "function" != typeof c.id && (f = c.id,
                c.id = function(a) {
                    return a[f]
                }
                ),
                a.isArray(c.element.data("select2Tags"))) {
                    if ("tags"in c)
                        throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + c.element.attr("id");
                    c.tags = c.element.data("select2Tags")
                }
                if (e ? (c.query = this.bind(function(a) {
                    var c, e, f, g = {
                        results: [],
                        more: !1
                    }, h = a.term;
                    f = function(b, c) {
                        var d;
                        b.is("option") ? a.matcher(h, b.text(), b) && c.push(j.optionToData(b)) : b.is("optgroup") && (d = j.optionToData(b),
                        b.children().each2(function(a, b) {
                            f(b, d.children)
                        }),
                        d.children.length > 0 && c.push(d))
                    }
                    ,
                    c = d.children(),
                    this.getPlaceholder() !== b && c.length > 0 && (e = this.getPlaceholderOption(),
                    e && (c = c.not(e))),
                    c.each2(function(a, b) {
                        f(b, g.results)
                    }),
                    a.callback(g)
                }),
                c.id = function(a) {
                    return a.id
                }
                ) : "query"in c || ("ajax"in c ? (i = c.element.data("ajax-url"),
                i && i.length > 0 && (c.ajax.url = i),
                c.query = v.call(c.element, c.ajax)) : "data"in c ? c.query = w(c.data) : "tags"in c && (c.query = x(c.tags),
                c.createSearchChoice === b && (c.createSearchChoice = function(b) {
                    return {
                        id: a.trim(b),
                        text: a.trim(b)
                    }
                }
                ),
                c.initSelection === b && (c.initSelection = function(b, d) {
                    var e = [];
                    a(h(b.val(), c.separator, c.transformVal)).each(function() {
                        var b = {
                            id: this,
                            text: this
                        }
                          , d = c.tags;
                        a.isFunction(d) && (d = d()),
                        a(d).each(function() {
                            return g(this.id, b.id) ? (b = this,
                            !1) : void 0
                        }),
                        e.push(b)
                    }),
                    d(e)
                }
                ))),
                "function" != typeof c.query)
                    throw "query function not defined for Select2 " + c.element.attr("id");
                if ("top" === c.createSearchChoicePosition)
                    c.createSearchChoicePosition = function(a, b) {
                        a.unshift(b)
                    }
                    ;
                else if ("bottom" === c.createSearchChoicePosition)
                    c.createSearchChoicePosition = function(a, b) {
                        a.push(b)
                    }
                    ;
                else if ("function" != typeof c.createSearchChoicePosition)
                    throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
                return c
            },
            monitorSource: function() {
                var c, d = this.opts.element, e = this;
                d.on("change.select2", this.bind(function(a) {
                    this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                })),
                this._sync = this.bind(function() {
                    var a = d.prop("disabled");
                    a === b && (a = !1),
                    this.enable(!a);
                    var c = d.prop("readonly");
                    c === b && (c = !1),
                    this.readonly(c),
                    this.container && (s(this.container, this.opts.element, this.opts.adaptContainerCssClass),
                    this.container.addClass(z(this.opts.containerCssClass, this.opts.element))),
                    this.dropdown && (s(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass),
                    this.dropdown.addClass(z(this.opts.dropdownCssClass, this.opts.element)))
                }),
                d.length && d[0].attachEvent && d.each(function() {
                    this.attachEvent("onpropertychange", e._sync)
                }),
                c = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                c !== b && (this.propertyObserver && (delete this.propertyObserver,
                this.propertyObserver = null),
                this.propertyObserver = new c(function(b) {
                    a.each(b, e._sync)
                }
                ),
                this.propertyObserver.observe(d.get(0), {
                    attributes: !0,
                    subtree: !1
                }))
            },
            triggerSelect: function(b) {
                var c = a.Event("select2-selecting", {
                    val: this.id(b),
                    object: b,
                    choice: b
                });
                return this.opts.element.trigger(c),
                !c.isDefaultPrevented()
            },
            triggerChange: function(b) {
                b = b || {},
                b = a.extend({}, b, {
                    type: "change",
                    val: this.val()
                }),
                this.opts.element.data("select2-change-triggered", !0),
                this.opts.element.trigger(b),
                this.opts.element.data("select2-change-triggered", !1),
                this.opts.element.click(),
                this.opts.blurOnChange && this.opts.element.blur()
            },
            isInterfaceEnabled: function() {
                return this.enabledInterface === !0
            },
            enableInterface: function() {
                var a = this._enabled && !this._readonly
                  , b = !a;
                return a !== this.enabledInterface && (this.container.toggleClass("select2-container-disabled", b),
                this.close(),
                this.enabledInterface = a,
                !0)
            },
            enable: function(a) {
                a === b && (a = !0),
                this._enabled !== a && (this._enabled = a,
                this.opts.element.prop("disabled", !a),
                this.enableInterface())
            },
            disable: function() {
                this.enable(!1)
            },
            readonly: function(a) {
                a === b && (a = !1),
                this._readonly !== a && (this._readonly = a,
                this.opts.element.prop("readonly", a),
                this.enableInterface())
            },
            opened: function() {
                return !!this.container && this.container.hasClass("select2-dropdown-open")
            },
            positionDropdown: function() {
                var b, c, d, e, f, g = this.dropdown, h = this.container, i = h.offset(), j = h.outerHeight(!1), k = h.outerWidth(!1), l = g.outerHeight(!1), m = a(window), n = m.width(), o = m.height(), p = m.scrollLeft() + n, q = m.scrollTop() + o, r = i.top + j, s = i.left, t = q >= r + l, u = i.top - l >= m.scrollTop(), v = g.outerWidth(!1), w = function() {
                    return p >= s + v
                }, x = function() {
                    return i.left + p + h.outerWidth(!1) > v
                }, y = g.hasClass("select2-drop-above");
                y ? (c = !0,
                !u && t && (d = !0,
                c = !1)) : (c = !1,
                !t && u && (d = !0,
                c = !0)),
                d && (g.hide(),
                i = this.container.offset(),
                j = this.container.outerHeight(!1),
                k = this.container.outerWidth(!1),
                l = g.outerHeight(!1),
                p = m.scrollLeft() + n,
                q = m.scrollTop() + o,
                r = i.top + j,
                s = i.left,
                v = g.outerWidth(!1),
                g.show(),
                this.focusSearch()),
                this.opts.dropdownAutoWidth ? (f = a(".select2-results", g)[0],
                g.addClass("select2-drop-auto-width"),
                g.css("width", ""),
                v = g.outerWidth(!1) + (f.scrollHeight === f.clientHeight ? 0 : K.width),
                v > k ? k = v : v = k,
                l = g.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width"),
                "static" !== this.body.css("position") && (b = this.body.offset(),
                r -= b.top,
                s -= b.left),
                !w() && x() && (s = i.left + this.container.outerWidth(!1) - v),
                e = {
                    left: s,
                    width: k
                },
                c ? (this.container.addClass("select2-drop-above"),
                g.addClass("select2-drop-above"),
                l = g.outerHeight(!1),
                e.top = i.top - l,
                e.bottom = "auto") : (e.top = r,
                e.bottom = "auto",
                this.container.removeClass("select2-drop-above"),
                g.removeClass("select2-drop-above")),
                e = a.extend(e, z(this.opts.dropdownCss, this.opts.element)),
                g.css(e)
            },
            shouldOpen: function() {
                var b;
                return !this.opened() && (this._enabled !== !1 && this._readonly !== !0 && (b = a.Event("select2-opening"),
                this.opts.element.trigger(b),
                !b.isDefaultPrevented()))
            },
            clearDropdownAlignmentPreference: function() {
                this.container.removeClass("select2-drop-above"),
                this.dropdown.removeClass("select2-drop-above")
            },
            open: function() {
                return !!this.shouldOpen() && (this.opening(),
                J.on("mousemove.select2Event", function(a) {
                    L.x = a.pageX,
                    L.y = a.pageY
                }),
                !0)
            },
            opening: function() {
                var b, d = this.containerEventName, e = "scroll." + d, f = "resize." + d, g = "orientationchange." + d;
                this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),
                this.clearDropdownAlignmentPreference(),
                this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body),
                b = a("#select2-drop-mask"),
                0 === b.length && (b = a(document.createElement("div")),
                b.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"),
                b.hide(),
                b.appendTo(this.body),
                b.on("mousedown touchstart click", function(d) {
                    c(b);
                    var e, f = a("#select2-drop");
                    f.length > 0 && (e = f.data("select2"),
                    e.opts.selectOnBlur && e.selectHighlighted({
                        noFocus: !0
                    }),
                    e.close(),
                    d.preventDefault(),
                    d.stopPropagation())
                })),
                this.dropdown.prev()[0] !== b[0] && this.dropdown.before(b),
                a("#select2-drop").removeAttr("id"),
                this.dropdown.attr("id", "select2-drop"),
                b.show(),
                this.positionDropdown(),
                this.dropdown.show(),
                this.positionDropdown(),
                this.dropdown.addClass("select2-drop-active");
                var h = this;
                this.container.parents().add(window).each(function() {
                    a(this).on(f + " " + e + " " + g, function(a) {
                        h.opened() && h.positionDropdown()
                    })
                })
            },
            close: function() {
                if (this.opened()) {
                    var b = this.containerEventName
                      , c = "scroll." + b
                      , d = "resize." + b
                      , e = "orientationchange." + b;
                    this.container.parents().add(window).each(function() {
                        a(this).off(c).off(d).off(e)
                    }),
                    this.clearDropdownAlignmentPreference(),
                    a("#select2-drop-mask").hide(),
                    this.dropdown.removeAttr("id"),
                    this.dropdown.hide(),
                    this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),
                    this.results.empty(),
                    J.off("mousemove.select2Event"),
                    this.clearSearch(),
                    this.search.removeClass("select2-active"),
                    this.search.removeAttr("aria-activedescendant"),
                    this.opts.element.trigger(a.Event("select2-close"))
                }
            },
            externalSearch: function(a) {
                this.open(),
                this.search.val(a),
                this.updateResults(!1)
            },
            clearSearch: function() {},
            prefillNextSearchTerm: function() {
                if ("" !== this.search.val())
                    return !1;
                var a = this.opts.nextSearchTerm(this.data(), this.lastSearchTerm);
                return a !== b && (this.search.val(a),
                this.search.select(),
                !0)
            },
            getMaximumSelectionSize: function() {
                return z(this.opts.maximumSelectionSize, this.opts.element)
            },
            ensureHighlightVisible: function() {
                var b, c, d, e, f, g, h, i, j = this.results;
                if (c = this.highlight(),
                !(0 > c)) {
                    if (0 == c)
                        return void j.scrollTop(0);
                    b = this.findHighlightableChoices().find(".select2-result-label"),
                    d = a(b[c]),
                    i = (d.offset() || {}).top || 0,
                    e = i + d.outerHeight(!0),
                    c === b.length - 1 && (h = j.find("li.select2-more-results"),
                    h.length > 0 && (e = h.offset().top + h.outerHeight(!0))),
                    f = j.offset().top + j.outerHeight(!1),
                    e > f && j.scrollTop(j.scrollTop() + (e - f)),
                    g = i - j.offset().top,
                    0 > g && "none" != d.css("display") && j.scrollTop(j.scrollTop() + g)
                }
            },
            findHighlightableChoices: function() {
                return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
            },
            moveHighlight: function(b) {
                for (var c = this.findHighlightableChoices(), d = this.highlight(); d > -1 && d < c.length; ) {
                    d += b;
                    var e = a(c[d]);
                    if (e.hasClass("select2-result-selectable") && !e.hasClass("select2-disabled") && !e.hasClass("select2-selected")) {
                        this.highlight(d);
                        break
                    }
                }
            },
            highlight: function(b) {
                var c, d, f = this.findHighlightableChoices();
                return 0 === arguments.length ? e(f.filter(".select2-highlighted")[0], f.get()) : (b >= f.length && (b = f.length - 1),
                0 > b && (b = 0),
                this.removeHighlight(),
                c = a(f[b]),
                c.addClass("select2-highlighted"),
                this.search.attr("aria-activedescendant", c.find(".select2-result-label").attr("id")),
                this.ensureHighlightVisible(),
                this.liveRegion.text(c.text()),
                d = c.data("select2-data"),
                void (d && this.opts.element.trigger({
                    type: "select2-highlight",
                    val: this.id(d),
                    choice: d
                })))
            },
            removeHighlight: function() {
                this.results.find(".select2-highlighted").removeClass("select2-highlighted")
            },
            touchMoved: function() {
                this._touchMoved = !0
            },
            clearTouchMoved: function() {
                this._touchMoved = !1
            },
            countSelectableResults: function() {
                return this.findHighlightableChoices().length
            },
            highlightUnderEvent: function(b) {
                var c = a(b.target).closest(".select2-result-selectable");
                if (c.length > 0 && !c.is(".select2-highlighted")) {
                    var d = this.findHighlightableChoices();
                    this.highlight(d.index(c))
                } else
                    0 == c.length && this.removeHighlight()
            },
            loadMoreIfNeeded: function() {
                var a, b = this.results, c = b.find("li.select2-more-results"), d = this.resultsPage + 1, e = this, f = this.search.val(), g = this.context;
                0 !== c.length && (a = c.offset().top - b.offset().top - b.height(),
                a <= this.opts.loadMorePadding && (c.addClass("select2-active"),
                this.opts.query({
                    element: this.opts.element,
                    term: f,
                    page: d,
                    context: g,
                    matcher: this.opts.matcher,
                    callback: this.bind(function(a) {
                        e.opened() && (e.opts.populateResults.call(this, b, a.results, {
                            term: f,
                            page: d,
                            context: g
                        }),
                        e.postprocessResults(a, !1, !1),
                        a.more === !0 ? (c.detach().appendTo(b).html(e.opts.escapeMarkup(z(e.opts.formatLoadMore, e.opts.element, d + 1))),
                        window.setTimeout(function() {
                            e.loadMoreIfNeeded()
                        }, 10)) : c.remove(),
                        e.positionDropdown(),
                        e.resultsPage = d,
                        e.context = a.context,
                        this.opts.element.trigger({
                            type: "select2-loaded",
                            items: a
                        }))
                    })
                })))
            },
            tokenize: function() {},
            updateResults: function(c) {
                function d() {
                    j.removeClass("select2-active"),
                    m.positionDropdown(),
                    k.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? m.liveRegion.text(k.text()) : m.liveRegion.text(m.opts.formatMatches(k.find('.select2-result-selectable:not(".select2-selected")').length))
                }
                function e(a) {
                    k.html(a),
                    d()
                }
                var f, h, i, j = this.search, k = this.results, l = this.opts, m = this, n = j.val(), o = a.data(this.container, "select2-last-term");
                if ((c === !0 || !o || !g(n, o)) && (a.data(this.container, "select2-last-term", n),
                c === !0 || this.showSearchInput !== !1 && this.opened())) {
                    i = ++this.queryCount;
                    var p = this.getMaximumSelectionSize();
                    if (p >= 1 && (f = this.data(),
                    a.isArray(f) && f.length >= p && y(l.formatSelectionTooBig, "formatSelectionTooBig")))
                        return void e("<li class='select2-selection-limit'>" + z(l.formatSelectionTooBig, l.element, p) + "</li>");
                    if (j.val().length < l.minimumInputLength)
                        return e(y(l.formatInputTooShort, "formatInputTooShort") ? "<li class='select2-no-results'>" + z(l.formatInputTooShort, l.element, j.val(), l.minimumInputLength) + "</li>" : ""),
                        void (c && this.showSearch && this.showSearch(!0));
                    if (l.maximumInputLength && j.val().length > l.maximumInputLength)
                        return void e(y(l.formatInputTooLong, "formatInputTooLong") ? "<li class='select2-no-results'>" + z(l.formatInputTooLong, l.element, j.val(), l.maximumInputLength) + "</li>" : "");
                    l.formatSearching && 0 === this.findHighlightableChoices().length && e("<li class='select2-searching'>" + z(l.formatSearching, l.element) + "</li>"),
                    j.addClass("select2-active"),
                    this.removeHighlight(),
                    h = this.tokenize(),
                    h != b && null != h && j.val(h),
                    this.resultsPage = 1,
                    l.query({
                        element: l.element,
                        term: j.val(),
                        page: this.resultsPage,
                        context: null,
                        matcher: l.matcher,
                        callback: this.bind(function(f) {
                            var h;
                            if (i == this.queryCount) {
                                if (!this.opened())
                                    return void this.search.removeClass("select2-active");
                                if (f.hasError !== b && y(l.formatAjaxError, "formatAjaxError"))
                                    return void e("<li class='select2-ajax-error'>" + z(l.formatAjaxError, l.element, f.jqXHR, f.textStatus, f.errorThrown) + "</li>");
                                if (this.context = f.context === b ? null : f.context,
                                this.opts.createSearchChoice && "" !== j.val() && (h = this.opts.createSearchChoice.call(m, j.val(), f.results),
                                h !== b && null !== h && m.id(h) !== b && null !== m.id(h) && 0 === a(f.results).filter(function() {
                                    return g(m.id(this), m.id(h))
                                }).length && this.opts.createSearchChoicePosition(f.results, h)),
                                0 === f.results.length && y(l.formatNoMatches, "formatNoMatches"))
                                    return e("<li class='select2-no-results'>" + z(l.formatNoMatches, l.element, j.val()) + "</li>"),
                                    void (this.showSearch && this.showSearch(j.val()));
                                k.empty(),
                                m.opts.populateResults.call(this, k, f.results, {
                                    term: j.val(),
                                    page: this.resultsPage,
                                    context: null
                                }),
                                f.more === !0 && y(l.formatLoadMore, "formatLoadMore") && (k.append("<li class='select2-more-results'>" + l.escapeMarkup(z(l.formatLoadMore, l.element, this.resultsPage)) + "</li>"),
                                window.setTimeout(function() {
                                    m.loadMoreIfNeeded()
                                }, 10)),
                                this.postprocessResults(f, c),
                                d(),
                                this.opts.element.trigger({
                                    type: "select2-loaded",
                                    items: f
                                })
                            }
                        })
                    })
                }
            },
            cancel: function() {
                this.close()
            },
            blur: function() {
                this.opts.selectOnBlur && this.selectHighlighted({
                    noFocus: !0
                }),
                this.close(),
                this.container.removeClass("select2-container-active"),
                this.search[0] === document.activeElement && this.search.blur(),
                this.clearSearch(),
                this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
            },
            focusSearch: function() {
                n(this.search)
            },
            selectHighlighted: function(a) {
                if (this._touchMoved)
                    return void this.clearTouchMoved();
                var b = this.highlight()
                  , c = this.results.find(".select2-highlighted")
                  , d = c.closest(".select2-result").data("select2-data");
                d ? (this.highlight(b),
                this.onSelect(d, a)) : a && a.noFocus && this.close()
            },
            getPlaceholder: function() {
                var a;
                return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((a = this.getPlaceholderOption()) !== b ? a.text() : b)
            },
            getPlaceholderOption: function() {
                if (this.select) {
                    var c = this.select.children("option").first();
                    if (this.opts.placeholderOption !== b)
                        return "first" === this.opts.placeholderOption && c || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                    if ("" === a.trim(c.text()) && "" === c.val())
                        return c
                }
            },
            initContainerWidth: function() {
                function b() {
                    var b, c, d, e, f, g;
                    if ("off" === this.opts.width)
                        return null;
                    if ("element" === this.opts.width)
                        return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                    if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                        if (b = this.opts.element.attr("style"),
                        "string" == typeof b)
                            for (c = b.split(";"),
                            e = 0,
                            f = c.length; f > e; e += 1)
                                if (g = c[e].replace(/\s/g, ""),
                                d = g.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),
                                null !== d && d.length >= 1)
                                    return d[1];
                        return "resolve" === this.opts.width ? (b = this.opts.element.css("width"),
                        b.indexOf("%") > 0 ? b : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                    }
                    return a.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                }
                var c = b.call(this);
                null !== c && this.container.css("width", c)
            }
        }),
        F = D(E, {
            createContainer: function() {
                var b = a(document.createElement("div")).attr({
                    class: "select2-container"
                }).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""));
                return b
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
            },
            opening: function() {
                var b, c, d;
                this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0),
                this.parent.opening.apply(this, arguments),
                this.showSearchInput !== !1 && this.search.val(this.focusser.val()),
                this.opts.shouldFocusInput(this) && (this.search.focus(),
                b = this.search.get(0),
                b.createTextRange ? (c = b.createTextRange(),
                c.collapse(!1),
                c.select()) : b.setSelectionRange && (d = this.search.val().length,
                b.setSelectionRange(d, d))),
                this.prefillNextSearchTerm(),
                this.focusser.prop("disabled", !0).val(""),
                this.updateResults(!0),
                this.opts.element.trigger(a.Event("select2-open"))
            },
            close: function() {
                this.opened() && (this.parent.close.apply(this, arguments),
                this.focusser.prop("disabled", !1),
                this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            focus: function() {
                this.opened() ? this.close() : (this.focusser.prop("disabled", !1),
                this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            isFocused: function() {
                return this.container.hasClass("select2-container-active")
            },
            cancel: function() {
                this.parent.cancel.apply(this, arguments),
                this.focusser.prop("disabled", !1),
                this.opts.shouldFocusInput(this) && this.focusser.focus()
            },
            destroy: function() {
                a("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")),
                this.parent.destroy.apply(this, arguments),
                C.call(this, "selection", "focusser")
            },
            initContainer: function() {
                var b, d, e = this.container, f = this.dropdown, g = H();
                this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0),
                this.selection = b = e.find(".select2-choice"),
                this.focusser = e.find(".select2-focusser"),
                b.find(".select2-chosen").attr("id", "select2-chosen-" + g),
                this.focusser.attr("aria-labelledby", "select2-chosen-" + g),
                this.results.attr("id", "select2-results-" + g),
                this.search.attr("aria-owns", "select2-results-" + g),
                this.focusser.attr("id", "s2id_autogen" + g),
                d = a("label[for='" + this.opts.element.attr("id") + "']"),
                this.opts.element.on("focus.select2", this.bind(function() {
                    this.focus()
                })),
                this.focusser.prev().text(d.text()).attr("for", this.focusser.attr("id"));
                var h = this.opts.element.attr("title");
                this.opts.element.attr("title", h || d.text()),
                this.focusser.attr("tabindex", this.elementTabIndex),
                this.search.attr("id", this.focusser.attr("id") + "_search"),
                this.search.prev().text(a("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")),
                this.search.on("keydown", this.bind(function(a) {
                    if (this.isInterfaceEnabled() && 229 != a.keyCode) {
                        if (a.which === M.PAGE_UP || a.which === M.PAGE_DOWN)
                            return void p(a);
                        switch (a.which) {
                        case M.UP:
                        case M.DOWN:
                            return this.moveHighlight(a.which === M.UP ? -1 : 1),
                            void p(a);
                        case M.ENTER:
                            return this.selectHighlighted(),
                            void p(a);
                        case M.TAB:
                            return void this.selectHighlighted({
                                noFocus: !0
                            });
                        case M.ESC:
                            return this.cancel(a),
                            void p(a)
                        }
                    }
                })),
                this.search.on("blur", this.bind(function(a) {
                    document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function() {
                        this.opened() && this.results && this.results.length > 1 && this.search.focus()
                    }), 0)
                })),
                this.focusser.on("keydown", this.bind(function(a) {
                    if (this.isInterfaceEnabled() && a.which !== M.TAB && !M.isControl(a) && !M.isFunctionKey(a) && a.which !== M.ESC) {
                        if (this.opts.openOnEnter === !1 && a.which === M.ENTER)
                            return void p(a);
                        if (a.which == M.DOWN || a.which == M.UP || a.which == M.ENTER && this.opts.openOnEnter) {
                            if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey)
                                return;
                            return this.open(),
                            void p(a)
                        }
                        return a.which == M.DELETE || a.which == M.BACKSPACE ? (this.opts.allowClear && this.clear(),
                        void p(a)) : void 0
                    }
                })),
                j(this.focusser),
                this.focusser.on("keyup-change input", this.bind(function(a) {
                    if (this.opts.minimumResultsForSearch >= 0) {
                        if (a.stopPropagation(),
                        this.opened())
                            return;
                        this.open()
                    }
                })),
                b.on("mousedown touchstart", "abbr", this.bind(function(a) {
                    this.isInterfaceEnabled() && (this.clear(),
                    q(a),
                    this.close(),
                    this.selection && this.selection.focus())
                })),
                b.on("mousedown touchstart", this.bind(function(d) {
                    c(b),
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")),
                    this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(),
                    p(d)
                })),
                f.on("mousedown touchstart", this.bind(function() {
                    this.opts.shouldFocusInput(this) && this.search.focus()
                })),
                b.on("focus", this.bind(function(a) {
                    p(a)
                })),
                this.focusser.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")),
                    this.container.addClass("select2-container-active")
                })).on("blur", this.bind(function() {
                    this.opened() || (this.container.removeClass("select2-container-active"),
                    this.opts.element.trigger(a.Event("select2-blur")))
                })),
                this.search.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")),
                    this.container.addClass("select2-container-active")
                })),
                this.initContainerWidth(),
                this.opts.element.hide(),
                this.setPlaceholder()
            },
            clear: function(b) {
                var c = this.selection.data("select2-data");
                if (c) {
                    var d = a.Event("select2-clearing");
                    if (this.opts.element.trigger(d),
                    d.isDefaultPrevented())
                        return;
                    var e = this.getPlaceholderOption();
                    this.opts.element.val(e ? e.val() : ""),
                    this.selection.find(".select2-chosen").empty(),
                    this.selection.removeData("select2-data"),
                    this.setPlaceholder(),
                    b !== !1 && (this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(c),
                        choice: c
                    }),
                    this.triggerChange({
                        removed: c
                    }))
                }
            },
            initSelection: function() {
                if (this.isPlaceholderOptionSelected())
                    this.updateSelection(null),
                    this.close(),
                    this.setPlaceholder();
                else {
                    var a = this;
                    this.opts.initSelection.call(null, this.opts.element, function(c) {
                        c !== b && null !== c && (a.updateSelection(c),
                        a.close(),
                        a.setPlaceholder(),
                        a.lastSearchTerm = a.search.val())
                    })
                }
            },
            isPlaceholderOptionSelected: function() {
                var a;
                return this.getPlaceholder() !== b && ((a = this.getPlaceholderOption()) !== b && a.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === b || null === this.opts.element.val())
            },
            prepareOpts: function() {
                var b = this.parent.prepareOpts.apply(this, arguments)
                  , c = this;
                return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                    var d = a.find("option").filter(function() {
                        return this.selected && !this.disabled
                    });
                    b(c.optionToData(d))
                }
                : "data"in b && (b.initSelection = b.initSelection || function(c, d) {
                    var e = c.val()
                      , f = null;
                    b.query({
                        matcher: function(a, c, d) {
                            var h = g(e, b.id(d));
                            return h && (f = d),
                            h
                        },
                        callback: a.isFunction(d) ? function() {
                            d(f)
                        }
                        : a.noop
                    })
                }
                ),
                b
            },
            getPlaceholder: function() {
                return this.select && this.getPlaceholderOption() === b ? b : this.parent.getPlaceholder.apply(this, arguments)
            },
            setPlaceholder: function() {
                var a = this.getPlaceholder();
                if (this.isPlaceholderOptionSelected() && a !== b) {
                    if (this.select && this.getPlaceholderOption() === b)
                        return;
                    this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)),
                    this.selection.addClass("select2-default"),
                    this.container.removeClass("select2-allowclear")
                }
            },
            postprocessResults: function(a, b, c) {
                var d = 0
                  , e = this;
                if (this.findHighlightableChoices().each2(function(a, b) {
                    return g(e.id(b.data("select2-data")), e.opts.element.val()) ? (d = a,
                    !1) : void 0
                }),
                c !== !1 && (b === !0 && d >= 0 ? this.highlight(d) : this.highlight(0)),
                b === !0) {
                    var f = this.opts.minimumResultsForSearch;
                    f >= 0 && this.showSearch(A(a.results) >= f)
                }
            },
            showSearch: function(b) {
                this.showSearchInput !== b && (this.showSearchInput = b,
                this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !b),
                this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !b),
                a(this.dropdown, this.container).toggleClass("select2-with-searchbox", b))
            },
            onSelect: function(a, b) {
                if (this.triggerSelect(a)) {
                    var c = this.opts.element.val()
                      , d = this.data();
                    this.opts.element.val(this.id(a)),
                    this.updateSelection(a),
                    this.opts.element.trigger({
                        type: "select2-selected",
                        val: this.id(a),
                        choice: a
                    }),
                    this.lastSearchTerm = this.search.val(),
                    this.close(),
                    b && b.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(),
                    g(c, this.id(a)) || this.triggerChange({
                        added: a,
                        removed: d
                    })
                }
            },
            updateSelection: function(a) {
                var c, d, e = this.selection.find(".select2-chosen");
                this.selection.data("select2-data", a),
                e.empty(),
                null !== a && (c = this.opts.formatSelection(a, e, this.opts.escapeMarkup)),
                c !== b && e.append(c),
                d = this.opts.formatSelectionCssClass(a, e),
                d !== b && e.addClass(d),
                this.selection.removeClass("select2-default"),
                this.opts.allowClear && this.getPlaceholder() !== b && this.container.addClass("select2-allowclear")
            },
            val: function() {
                var a, c = !1, d = null, e = this, f = this.data();
                if (0 === arguments.length)
                    return this.opts.element.val();
                if (a = arguments[0],
                arguments.length > 1 && (c = arguments[1],
                this.opts.debug && console && console.warn && console.warn('Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. The `change` event will always be triggered in 4.0.0.')),
                this.select)
                    this.opts.debug && console && console.warn && console.warn('Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.'),
                    this.select.val(a).find("option").filter(function() {
                        return this.selected
                    }).each2(function(a, b) {
                        return d = e.optionToData(b),
                        !1
                    }),
                    this.updateSelection(d),
                    this.setPlaceholder(),
                    c && this.triggerChange({
                        added: d,
                        removed: f
                    });
                else {
                    if (!a && 0 !== a)
                        return void this.clear(c);
                    if (this.opts.initSelection === b)
                        throw new Error("cannot call val() if initSelection() is not defined");
                    this.opts.element.val(a),
                    this.opts.initSelection(this.opts.element, function(a) {
                        e.opts.element.val(a ? e.id(a) : ""),
                        e.updateSelection(a),
                        e.setPlaceholder(),
                        c && e.triggerChange({
                            added: a,
                            removed: f
                        })
                    })
                }
            },
            clearSearch: function() {
                this.search.val(""),
                this.focusser.val("")
            },
            data: function(a) {
                var c, d = !1;
                return 0 === arguments.length ? (c = this.selection.data("select2-data"),
                c == b && (c = null),
                c) : (this.opts.debug && console && console.warn && console.warn('Select2: The `select2("data")` method can no longer set selected values in 4.0.0, consider using the `.val()` method instead.'),
                arguments.length > 1 && (d = arguments[1]),
                void (a ? (c = this.data(),
                this.opts.element.val(a ? this.id(a) : ""),
                this.updateSelection(a),
                d && this.triggerChange({
                    added: a,
                    removed: c
                })) : this.clear(d)))
            }
        }),
        G = D(E, {
            createContainer: function() {
                var b = a(document.createElement("div")).attr({
                    class: "select2-container select2-container-multi"
                }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                return b
            },
            prepareOpts: function() {
                var b = this.parent.prepareOpts.apply(this, arguments)
                  , c = this;
                return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                    var d = [];
                    a.find("option").filter(function() {
                        return this.selected && !this.disabled
                    }).each2(function(a, b) {
                        d.push(c.optionToData(b))
                    }),
                    b(d)
                }
                : "data"in b && (b.initSelection = b.initSelection || function(c, d) {
                    var e = h(c.val(), b.separator, b.transformVal)
                      , f = [];
                    b.query({
                        matcher: function(c, d, h) {
                            var i = a.grep(e, function(a) {
                                return g(a, b.id(h))
                            }).length;
                            return i && f.push(h),
                            i
                        },
                        callback: a.isFunction(d) ? function() {
                            for (var a = [], c = 0; c < e.length; c++)
                                for (var h = e[c], i = 0; i < f.length; i++) {
                                    var j = f[i];
                                    if (g(h, b.id(j))) {
                                        a.push(j),
                                        f.splice(i, 1);
                                        break
                                    }
                                }
                            d(a)
                        }
                        : a.noop
                    })
                }
                ),
                b
            },
            selectChoice: function(a) {
                var b = this.container.find(".select2-search-choice-focus");
                b.length && a && a[0] == b[0] || (b.length && this.opts.element.trigger("choice-deselected", b),
                b.removeClass("select2-search-choice-focus"),
                a && a.length && (this.close(),
                a.addClass("select2-search-choice-focus"),
                this.opts.element.trigger("choice-selected", a)))
            },
            destroy: function() {
                a("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")),
                this.parent.destroy.apply(this, arguments),
                C.call(this, "searchContainer", "selection")
            },
            initContainer: function() {
                var b, c = ".select2-choices";
                this.searchContainer = this.container.find(".select2-search-field"),
                this.selection = b = this.container.find(c);
                var d = this;
                this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function(b) {
                    d.search[0].focus(),
                    d.selectChoice(a(this))
                }),
                this.search.attr("id", "s2id_autogen" + H()),
                this.search.prev().text(a("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")),
                this.opts.element.on("focus.select2", this.bind(function() {
                    this.focus()
                })),
                this.search.on("input paste", this.bind(function() {
                    this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
                })),
                this.search.attr("tabindex", this.elementTabIndex),
                this.keydowns = 0,
                this.search.on("keydown", this.bind(function(a) {
                    if (this.isInterfaceEnabled()) {
                        ++this.keydowns;
                        var c = b.find(".select2-search-choice-focus")
                          , d = c.prev(".select2-search-choice:not(.select2-locked)")
                          , e = c.next(".select2-search-choice:not(.select2-locked)")
                          , f = o(this.search);
                        if (c.length && (a.which == M.LEFT || a.which == M.RIGHT || a.which == M.BACKSPACE || a.which == M.DELETE || a.which == M.ENTER)) {
                            var g = c;
                            return a.which == M.LEFT && d.length ? g = d : a.which == M.RIGHT ? g = e.length ? e : null : a.which === M.BACKSPACE ? this.unselect(c.first()) && (this.search.width(10),
                            g = d.length ? d : e) : a.which == M.DELETE ? this.unselect(c.first()) && (this.search.width(10),
                            g = e.length ? e : null) : a.which == M.ENTER && (g = null),
                            this.selectChoice(g),
                            p(a),
                            void (g && g.length || this.open())
                        }
                        if ((a.which === M.BACKSPACE && 1 == this.keydowns || a.which == M.LEFT) && 0 == f.offset && !f.length)
                            return this.selectChoice(b.find(".select2-search-choice:not(.select2-locked)").last()),
                            void p(a);
                        if (this.selectChoice(null),
                        this.opened())
                            switch (a.which) {
                            case M.UP:
                            case M.DOWN:
                                return this.moveHighlight(a.which === M.UP ? -1 : 1),
                                void p(a);
                            case M.ENTER:
                                return this.selectHighlighted(),
                                void p(a);
                            case M.TAB:
                                return this.selectHighlighted({
                                    noFocus: !0
                                }),
                                void this.close();
                            case M.ESC:
                                return this.cancel(a),
                                void p(a)
                            }
                        if (a.which !== M.TAB && !M.isControl(a) && !M.isFunctionKey(a) && a.which !== M.BACKSPACE && a.which !== M.ESC) {
                            if (a.which === M.ENTER) {
                                if (this.opts.openOnEnter === !1)
                                    return;
                                if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey)
                                    return
                            }
                            this.open(),
                            (a.which === M.PAGE_UP || a.which === M.PAGE_DOWN) && p(a),
                            a.which === M.ENTER && p(a)
                        }
                    }
                })),
                this.search.on("keyup", this.bind(function(a) {
                    this.keydowns = 0,
                    this.resizeSearch()
                })),
                this.search.on("blur", this.bind(function(b) {
                    this.container.removeClass("select2-container-active"),
                    this.search.removeClass("select2-focused"),
                    this.selectChoice(null),
                    this.opened() || this.clearSearch(),
                    b.stopImmediatePropagation(),
                    this.opts.element.trigger(a.Event("select2-blur"))
                })),
                this.container.on("click", c, this.bind(function(b) {
                    this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null),
                    this.clearPlaceholder(),
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")),
                    this.open(),
                    this.focusSearch(),
                    b.preventDefault()))
                })),
                this.container.on("focus", c, this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")),
                    this.container.addClass("select2-container-active"),
                    this.dropdown.addClass("select2-drop-active"),
                    this.clearPlaceholder())
                })),
                this.initContainerWidth(),
                this.opts.element.hide(),
                this.clearSearch()
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
            },
            initSelection: function() {
                if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]),
                this.close(),
                this.clearSearch()),
                this.select || "" !== this.opts.element.val()) {
                    var a = this;
                    this.opts.initSelection.call(null, this.opts.element, function(c) {
                        c !== b && null !== c && (a.updateSelection(c),
                        a.close(),
                        a.clearSearch())
                    })
                }
            },
            clearSearch: function() {
                var a = this.getPlaceholder()
                  , c = this.getMaxSearchWidth();
                a !== b && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(a).addClass("select2-default"),
                this.search.width(c > 0 ? c : this.container.css("width"))) : this.search.val("").width(10)
            },
            clearPlaceholder: function() {
                this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
            },
            opening: function() {
                this.clearPlaceholder(),
                this.resizeSearch(),
                this.parent.opening.apply(this, arguments),
                this.focusSearch(),
                this.prefillNextSearchTerm(),
                this.updateResults(!0),
                this.opts.shouldFocusInput(this) && this.search.focus(),
                this.opts.element.trigger(a.Event("select2-open"))
            },
            close: function() {
                this.opened() && this.parent.close.apply(this, arguments)
            },
            focus: function() {
                this.close(),
                this.search.focus()
            },
            isFocused: function() {
                return this.search.hasClass("select2-focused")
            },
            updateSelection: function(b) {
                var c = {}
                  , d = []
                  , e = this;
                a(b).each(function() {
                    e.id(this)in c || (c[e.id(this)] = 0,
                    d.push(this))
                }),
                this.selection.find(".select2-search-choice").remove(),
                this.addSelectedChoice(d),
                e.postprocessResults()
            },
            tokenize: function() {
                var a = this.search.val();
                a = this.opts.tokenizer.call(this, a, this.data(), this.bind(this.onSelect), this.opts),
                null != a && a != b && (this.search.val(a),
                a.length > 0 && this.open())
            },
            onSelect: function(a, b) {
                this.triggerSelect(a) && "" !== a.text && (this.addSelectedChoice(a),
                this.opts.element.trigger({
                    type: "selected",
                    val: this.id(a),
                    choice: a
                }),
                this.lastSearchTerm = this.search.val(),
                this.clearSearch(),
                this.updateResults(),
                (this.select || !this.opts.closeOnSelect) && this.postprocessResults(a, !1, this.opts.closeOnSelect === !0),
                this.opts.closeOnSelect ? (this.close(),
                this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10),
                this.resizeSearch(),
                this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.prefillNextSearchTerm() && this.updateResults(),
                this.positionDropdown()) : (this.close(),
                this.search.width(10)),
                this.triggerChange({
                    added: a
                }),
                b && b.noFocus || this.focusSearch())
            },
            cancel: function() {
                this.close(),
                this.focusSearch()
            },
            addSelectedChoice: function(b) {
                var c = this.getVal()
                  , d = this;
                a(b).each(function() {
                    c.push(d.createChoice(this))
                }),
                this.setVal(c)
            },
            createChoice: function(c) {
                var d, e, f = !c.locked, g = a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"), h = a("<li class='select2-search-choice select2-locked'><div></div></li>"), i = f ? g : h, j = this.id(c);
                return d = this.opts.formatSelection(c, i.find("div"), this.opts.escapeMarkup),
                d != b && i.find("div").replaceWith(a("<div></div>").html(d)),
                e = this.opts.formatSelectionCssClass(c, i.find("div")),
                e != b && i.addClass(e),
                f && i.find(".select2-search-choice-close").on("mousedown", p).on("click dblclick", this.bind(function(b) {
                    this.isInterfaceEnabled() && (this.unselect(a(b.target)),
                    this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),
                    p(b),
                    this.close(),
                    this.focusSearch())
                })).on("focus", this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"),
                    this.dropdown.addClass("select2-drop-active"))
                })),
                i.data("select2-data", c),
                i.insertBefore(this.searchContainer),
                j
            },
            unselect: function(b) {
                var c, d, f = this.getVal();
                if (b = b.closest(".select2-search-choice"),
                0 === b.length)
                    throw "Invalid argument: " + b + ". Must be .select2-search-choice";
                if (c = b.data("select2-data")) {
                    var g = a.Event("select2-removing");
                    if (g.val = this.id(c),
                    g.choice = c,
                    this.opts.element.trigger(g),
                    g.isDefaultPrevented())
                        return !1;
                    for (; (d = e(this.id(c), f)) >= 0; )
                        f.splice(d, 1),
                        this.setVal(f),
                        this.select && this.postprocessResults();
                    return b.remove(),
                    this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(c),
                        choice: c
                    }),
                    this.triggerChange({
                        removed: c
                    }),
                    !0
                }
            },
            postprocessResults: function(a, b, c) {
                var d = this.getVal()
                  , f = this.results.find(".select2-result")
                  , g = this.results.find(".select2-result-with-children")
                  , h = this;
                f.each2(function(a, b) {
                    var c = h.id(b.data("select2-data"));
                    e(c, d) >= 0 && (b.addClass("select2-selected"),
                    b.find(".select2-result-selectable").addClass("select2-selected"))
                }),
                g.each2(function(a, b) {
                    b.is(".select2-result-selectable") || 0 !== b.find(".select2-result-selectable:not(.select2-selected)").length || b.addClass("select2-selected")
                }),
                -1 == this.highlight() && c !== !1 && this.opts.closeOnSelect === !0 && h.highlight(0),
                !this.opts.createSearchChoice && !f.filter(".select2-result:not(.select2-selected)").length > 0 && (!a || a && !a.more && 0 === this.results.find(".select2-no-results").length) && y(h.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + z(h.opts.formatNoMatches, h.opts.element, h.search.val()) + "</li>")
            },
            getMaxSearchWidth: function() {
                return this.selection.width() - i(this.search)
            },
            resizeSearch: function() {
                var a, b, c, d, e, f = i(this.search);
                a = r(this.search) + 10,
                b = this.search.offset().left,
                c = this.selection.width(),
                d = this.selection.offset().left,
                e = c - (b - d) - f,
                a > e && (e = c - f),
                40 > e && (e = c - f),
                0 >= e && (e = a),
                this.search.width(Math.floor(e))
            },
            getVal: function() {
                var a;
                return this.select ? (a = this.select.val(),
                null === a ? [] : a) : (a = this.opts.element.val(),
                h(a, this.opts.separator, this.opts.transformVal))
            },
            setVal: function(b) {
                if (this.select)
                    this.select.val(b);
                else {
                    var c = []
                      , d = {};
                    a(b).each(function() {
                        this in d || (c.push(this),
                        d[this] = 0)
                    }),
                    this.opts.element.val(0 === c.length ? "" : c.join(this.opts.separator))
                }
            },
            buildChangeDetails: function(a, b) {
                for (var b = b.slice(0), a = a.slice(0), c = 0; c < b.length; c++)
                    for (var d = 0; d < a.length; d++)
                        if (g(this.opts.id(b[c]), this.opts.id(a[d]))) {
                            b.splice(c, 1),
                            c--,
                            a.splice(d, 1);
                            break
                        }
                return {
                    added: b,
                    removed: a
                }
            },
            val: function(c, d) {
                var e, f = this;
                if (0 === arguments.length)
                    return this.getVal();
                if (e = this.data(),
                e.length || (e = []),
                !c && 0 !== c)
                    return this.opts.element.val(""),
                    this.updateSelection([]),
                    this.clearSearch(),
                    void (d && this.triggerChange({
                        added: this.data(),
                        removed: e
                    }));
                if (this.setVal(c),
                this.select)
                    this.opts.initSelection(this.select, this.bind(this.updateSelection)),
                    d && this.triggerChange(this.buildChangeDetails(e, this.data()));
                else {
                    if (this.opts.initSelection === b)
                        throw new Error("val() cannot be called if initSelection() is not defined");
                    this.opts.initSelection(this.opts.element, function(b) {
                        var c = a.map(b, f.id);
                        f.setVal(c),
                        f.updateSelection(b),
                        f.clearSearch(),
                        d && f.triggerChange(f.buildChangeDetails(e, f.data()))
                    })
                }
                this.clearSearch()
            },
            onSortStart: function() {
                if (this.select)
                    throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                this.search.width(0),
                this.searchContainer.hide()
            },
            onSortEnd: function() {
                var b = []
                  , c = this;
                this.searchContainer.show(),
                this.searchContainer.appendTo(this.searchContainer.parent()),
                this.resizeSearch(),
                this.selection.find(".select2-search-choice").each(function() {
                    b.push(c.opts.id(a(this).data("select2-data")))
                }),
                this.setVal(b),
                this.triggerChange()
            },
            data: function(b, c) {
                var d, e, f = this;
                return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function() {
                    return a(this).data("select2-data")
                }).get() : (e = this.data(),
                b || (b = []),
                d = a.map(b, function(a) {
                    return f.opts.id(a)
                }),
                this.setVal(d),
                this.updateSelection(b),
                this.clearSearch(),
                void (c && this.triggerChange(this.buildChangeDetails(e, this.data()))))
            }
        }),
        a.fn.select2 = function() {
            var c, d, f, g, h, i = Array.prototype.slice.call(arguments, 0), j = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"], k = ["opened", "isFocused", "container", "dropdown"], l = ["val", "data"], m = {
                search: "externalSearch"
            };
            return this.each(function() {
                if (0 === i.length || "object" == typeof i[0])
                    c = 0 === i.length ? {} : a.extend({}, i[0]),
                    c.element = a(this),
                    "select" === c.element.get(0).tagName.toLowerCase() ? h = c.element.prop("multiple") : (h = c.multiple || !1,
                    "tags"in c && (c.multiple = h = !0)),
                    d = h ? new window.Select2.class.multi : new window.Select2.class.single,
                    d.init(c);
                else {
                    if ("string" != typeof i[0])
                        throw "Invalid arguments to select2 plugin: " + i;
                    if (e(i[0], j) < 0)
                        throw "Unknown method: " + i[0];
                    if (g = b,
                    d = a(this).data("select2"),
                    d === b)
                        return;
                    if (f = i[0],
                    "container" === f ? g = d.container : "dropdown" === f ? g = d.dropdown : (m[f] && (f = m[f]),
                    g = d[f].apply(d, i.slice(1))),
                    e(i[0], k) >= 0 || e(i[0], l) >= 0 && 1 == i.length)
                        return !1
                }
            }),
            g === b ? this : g
        }
        ,
        a.fn.select2.defaults = {
            debug: !1,
            width: "copy",
            loadMorePadding: 0,
            closeOnSelect: !0,
            openOnEnter: !0,
            containerCss: {},
            dropdownCss: {},
            containerCssClass: "",
            dropdownCssClass: "",
            formatResult: function(a, b, c, d) {
                var e = [];
                return t(this.text(a), c.term, e, d),
                e.join("")
            },
            transformVal: function(b) {
                return a.trim(b)
            },
            formatSelection: function(a, c, d) {
                return a ? d(this.text(a)) : b
            },
            sortResults: function(a, b, c) {
                return a
            },
            formatResultCssClass: function(a) {
                return a.css
            },
            formatSelectionCssClass: function(a, c) {
                return b
            },
            minimumResultsForSearch: 0,
            minimumInputLength: 0,
            maximumInputLength: null,
            maximumSelectionSize: 0,
            id: function(a) {
                return a == b ? null : a.id
            },
            text: function(b) {
                return b && this.data && this.data.text ? a.isFunction(this.data.text) ? this.data.text(b) : b[this.data.text] : b.text
            },
            matcher: function(a, b) {
                return d("" + b).toUpperCase().indexOf(d("" + a).toUpperCase()) >= 0
            },
            separator: ",",
            tokenSeparators: [],
            tokenizer: B,
            escapeMarkup: u,
            blurOnChange: !1,
            selectOnBlur: !1,
            adaptContainerCssClass: function(a) {
                return a
            },
            adaptDropdownCssClass: function(a) {
                return null
            },
            nextSearchTerm: function(a, c) {
                return b
            },
            searchInputPlaceholder: "",
            createSearchChoicePosition: "top",
            shouldFocusInput: function(a) {
                var b = "ontouchstart"in window || navigator.msMaxTouchPoints > 0;
                return !(b && a.opts.minimumResultsForSearch < 0)
            }
        },
        a.fn.select2.locales = [],
        a.fn.select2.locales.en = {
            formatMatches: function(a) {
                return 1 === a ? "One result is available, press enter to select it." : a + " results are available, use up and down arrow keys to navigate."
            },
            formatNoMatches: function() {
                return "No matches found"
            },
            formatAjaxError: function(a, b, c) {
                return "Loading failed"
            },
            formatInputTooShort: function(a, b) {
                var c = b - a.length;
                return "Please enter " + c + " or more character" + (1 == c ? "" : "s")
            },
            formatInputTooLong: function(a, b) {
                var c = a.length - b;
                return "Please delete " + c + " character" + (1 == c ? "" : "s")
            },
            formatSelectionTooBig: function(a) {
                return "You can only select " + a + " item" + (1 == a ? "" : "s")
            },
            formatLoadMore: function(a) {
                return "Loading more results…"
            },
            formatSearching: function() {
                return "Searching…"
            }
        },
        a.extend(a.fn.select2.defaults, a.fn.select2.locales.en),
        a.fn.select2.ajaxDefaults = {
            transport: a.ajax,
            params: {
                type: "GET",
                cache: !1,
                dataType: "json"
            }
        },
        window.Select2 = {
            query: {
                ajax: v,
                local: w,
                tags: x
            },
            util: {
                debounce: l,
                markMatch: t,
                escapeMarkup: u,
                stripDiacritics: d
            },
            class: {
                abstract: E,
                single: F,
                multi: G
            }
        }
    }
}(jQuery),
function() {
    !function(a) {
        a.easyPieChart = function(b, c) {
            var d, e, f, g, h, i, j, k = this;
            return this.el = b,
            this.$el = a(b),
            this.$el.data("easyPieChart", this),
            this.init = function() {
                var b;
                return k.options = a.extend({}, a.easyPieChart.defaultOptions, c),
                b = parseInt(k.$el.data("percent"), 10),
                k.percentage = 0,
                k.canvas = a("<canvas width='" + k.options.size + "' height='" + k.options.size + "'></canvas>").get(0),
                k.$el.append(k.canvas),
                "undefined" != typeof G_vmlCanvasManager && null !== G_vmlCanvasManager && G_vmlCanvasManager.initElement(k.canvas),
                k.ctx = k.canvas.getContext("2d"),
                window.devicePixelRatio > 1.5 && (a(k.canvas).css({
                    width: k.options.size,
                    height: k.options.size
                }),
                k.canvas.width *= 2,
                k.canvas.height *= 2,
                k.ctx.scale(2, 2)),
                k.ctx.translate(k.options.size / 2, k.options.size / 2),
                k.$el.addClass("easyPieChart"),
                k.$el.css({
                    width: k.options.size,
                    height: k.options.size,
                    lineHeight: "" + k.options.size + "px"
                }),
                k.update(b),
                k
            }
            ,
            this.update = function(a) {
                return k.options.animate === !1 ? f(a) : e(k.percentage, a)
            }
            ,
            i = function() {
                var a, b, c;
                for (k.ctx.fillStyle = k.options.scaleColor,
                k.ctx.lineWidth = 1,
                c = [],
                a = b = 0; b <= 24; a = ++b)
                    c.push(d(a));
                return c
            }
            ,
            d = function(a) {
                var b;
                return b = a % 6 === 0 ? 0 : .017 * k.options.size,
                k.ctx.save(),
                k.ctx.rotate(a * Math.PI / 12),
                k.ctx.fillRect(k.options.size / 2 - b, 0, .05 * -k.options.size + b, 1),
                k.ctx.restore()
            }
            ,
            j = function() {
                var a;
                return a = k.options.size / 2 - k.options.lineWidth / 2,
                k.options.scaleColor !== !1 && (a -= .08 * k.options.size),
                k.ctx.beginPath(),
                k.ctx.arc(0, 0, a, 0, 2 * Math.PI, !0),
                k.ctx.closePath(),
                k.ctx.strokeStyle = k.options.trackColor,
                k.ctx.lineWidth = k.options.lineWidth,
                k.ctx.stroke()
            }
            ,
            h = function() {
                if (k.options.scaleColor !== !1 && i(),
                k.options.trackColor !== !1)
                    return j()
            }
            ,
            f = function(b) {
                var c;
                return h(),
                k.ctx.strokeStyle = a.isFunction(k.options.barColor) ? k.options.barColor(b) : k.options.barColor,
                k.ctx.lineCap = k.options.lineCap,
                k.ctx.lineWidth = k.options.lineWidth,
                c = k.options.size / 2 - k.options.lineWidth / 2,
                k.options.scaleColor !== !1 && (c -= .08 * k.options.size),
                k.ctx.save(),
                k.ctx.rotate(-Math.PI / 2),
                k.ctx.beginPath(),
                k.ctx.arc(0, 0, c, 0, 2 * Math.PI * b / 100, !1),
                k.ctx.stroke(),
                k.ctx.restore()
            }
            ,
            e = function(a, b) {
                var c, d, e;
                return d = 30,
                e = d * k.options.animate / 1e3,
                c = 0,
                k.options.onStart.call(k),
                k.percentage = b,
                k.animation && (clearInterval(k.animation),
                k.animation = !1),
                k.animation = setInterval(function() {
                    if (k.ctx.clearRect(-k.options.size / 2, -k.options.size / 2, k.options.size, k.options.size),
                    h.call(k),
                    f.call(k, [g(c, a, b - a, e)]),
                    c++,
                    c / e > 1)
                        return clearInterval(k.animation),
                        k.animation = !1,
                        k.options.onStop.call(k)
                }, 1e3 / d)
            }
            ,
            g = function(a, b, c, d) {
                var e, f;
                return e = function(a) {
                    return Math.pow(a, 2)
                }
                ,
                f = function(a) {
                    return a < 1 ? e(a) : 2 - e(a / 2 * -2 + 2)
                }
                ,
                a /= d / 2,
                c / 2 * f(a) + b
            }
            ,
            this.init()
        }
        ,
        a.easyPieChart.defaultOptions = {
            barColor: "#ef1e25",
            trackColor: "#f2f2f2",
            scaleColor: "#dfe0e0",
            lineCap: "round",
            size: 110,
            lineWidth: 3,
            animate: !1,
            onStart: a.noop,
            onStop: a.noop
        },
        a.fn.easyPieChart = function(b) {
            return a.each(this, function(c, d) {
                var e;
                if (e = a(d),
                !e.data("easyPieChart"))
                    return e.data("easyPieChart", new a.easyPieChart(d,b))
            })
        }
    }(jQuery)
}
.call(this),
!function() {
    "use strict";
    function a(d) {
        if (!d)
            throw new Error("No options passed to Waypoint constructor");
        if (!d.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!d.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + b,
        this.options = a.Adapter.extend({}, a.defaults, d),
        this.element = this.options.element,
        this.adapter = new a.Adapter(this.element),
        this.callback = d.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = a.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = a.Context.findOrCreateByElement(this.options.context),
        a.offsetAliases[this.options.offset] && (this.options.offset = a.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        c[this.key] = this,
        b += 1
    }
    var b = 0
      , c = {};
    a.prototype.queueTrigger = function(a) {
        this.group.queueTrigger(this, a)
    }
    ,
    a.prototype.trigger = function(a) {
        this.enabled && this.callback && this.callback.apply(this, a)
    }
    ,
    a.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete c[this.key]
    }
    ,
    a.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    a.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    a.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    a.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    a.invokeAll = function(a) {
        var b = [];
        for (var d in c)
            b.push(c[d]);
        for (var e = 0, f = b.length; f > e; e++)
            b[e][a]()
    }
    ,
    a.destroyAll = function() {
        a.invokeAll("destroy")
    }
    ,
    a.disableAll = function() {
        a.invokeAll("disable")
    }
    ,
    a.enableAll = function() {
        a.invokeAll("enable")
    }
    ,
    a.refreshAll = function() {
        a.Context.refreshAll()
    }
    ,
    a.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    a.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    a.adapters = [],
    a.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    a.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = a
}(),
function() {
    "use strict";
    function a(a) {
        window.setTimeout(a, 1e3 / 60)
    }
    function b(a) {
        this.element = a,
        this.Adapter = e.Adapter,
        this.adapter = new this.Adapter(a),
        this.key = "waypoint-context-" + c,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        a.waypointContextKey = this.key,
        d[a.waypointContextKey] = this,
        c += 1,
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var c = 0
      , d = {}
      , e = window.Waypoint
      , f = window.onload;
    b.prototype.add = function(a) {
        var b = a.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[b][a.key] = a,
        this.refresh()
    }
    ,
    b.prototype.checkEmpty = function() {
        var a = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , b = this.Adapter.isEmptyObject(this.waypoints.vertical);
        a && b && (this.adapter.off(".waypoints"),
        delete d[this.key])
    }
    ,
    b.prototype.createThrottledResizeHandler = function() {
        function a() {
            b.handleResize(),
            b.didResize = !1
        }
        var b = this;
        this.adapter.on("resize.waypoints", function() {
            b.didResize || (b.didResize = !0,
            e.requestAnimationFrame(a))
        })
    }
    ,
    b.prototype.createThrottledScrollHandler = function() {
        function a() {
            b.handleScroll(),
            b.didScroll = !1
        }
        var b = this;
        this.adapter.on("scroll.waypoints", function() {
            (!b.didScroll || e.isTouch) && (b.didScroll = !0,
            e.requestAnimationFrame(a))
        })
    }
    ,
    b.prototype.handleResize = function() {
        e.Context.refreshAll();
    }
    ,
    b.prototype.handleScroll = function() {
        var a = {}
          , b = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var c in b) {
            var d = b[c]
              , e = d.newScroll > d.oldScroll
              , f = e ? d.forward : d.backward;
            for (var g in this.waypoints[c]) {
                var h = this.waypoints[c][g]
                  , i = d.oldScroll < h.triggerPoint
                  , j = d.newScroll >= h.triggerPoint
                  , k = i && j
                  , l = !i && !j;
                (k || l) && (h.queueTrigger(f),
                a[h.group.id] = h.group)
            }
        }
        for (var m in a)
            a[m].flushTriggers();
        this.oldScroll = {
            x: b.horizontal.newScroll,
            y: b.vertical.newScroll
        }
    }
    ,
    b.prototype.innerHeight = function() {
        return this.element == this.element.window ? e.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    b.prototype.remove = function(a) {
        delete this.waypoints[a.axis][a.key],
        this.checkEmpty()
    }
    ,
    b.prototype.innerWidth = function() {
        return this.element == this.element.window ? e.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    b.prototype.destroy = function() {
        var a = [];
        for (var b in this.waypoints)
            for (var c in this.waypoints[b])
                a.push(this.waypoints[b][c]);
        for (var d = 0, e = a.length; e > d; d++)
            a[d].destroy()
    }
    ,
    b.prototype.refresh = function() {
        var a, b = this.element == this.element.window, c = b ? void 0 : this.adapter.offset(), d = {};
        this.handleScroll(),
        a = {
            horizontal: {
                contextOffset: b ? 0 : c.left,
                contextScroll: b ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: b ? 0 : c.top,
                contextScroll: b ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var f in a) {
            var g = a[f];
            for (var h in this.waypoints[f]) {
                var i, j, k, l, m, n = this.waypoints[f][h], o = n.options.offset, p = n.triggerPoint, q = 0, r = null == p;
                n.element !== n.element.window && (q = n.adapter.offset()[g.offsetProp]),
                "function" == typeof o ? o = o.apply(n) : "string" == typeof o && (o = parseFloat(o),
                n.options.offset.indexOf("%") > -1 && (o = Math.ceil(g.contextDimension * o / 100))),
                i = g.contextScroll - g.contextOffset,
                n.triggerPoint = q + i - o,
                j = p < g.oldScroll,
                k = n.triggerPoint >= g.oldScroll,
                l = j && k,
                m = !j && !k,
                !r && l ? (n.queueTrigger(g.backward),
                d[n.group.id] = n.group) : !r && m ? (n.queueTrigger(g.forward),
                d[n.group.id] = n.group) : r && g.oldScroll >= n.triggerPoint && (n.queueTrigger(g.forward),
                d[n.group.id] = n.group)
            }
        }
        return e.requestAnimationFrame(function() {
            for (var a in d)
                d[a].flushTriggers()
        }),
        this
    }
    ,
    b.findOrCreateByElement = function(a) {
        return b.findByElement(a) || new b(a)
    }
    ,
    b.refreshAll = function() {
        for (var a in d)
            d[a].refresh()
    }
    ,
    b.findByElement = function(a) {
        return d[a.waypointContextKey]
    }
    ,
    window.onload = function() {
        f && f(),
        b.refreshAll()
    }
    ,
    e.requestAnimationFrame = function(b) {
        var c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || a;
        c.call(window, b)
    }
    ,
    e.Context = b
}(),
function() {
    "use strict";
    function a(a, b) {
        return a.triggerPoint - b.triggerPoint
    }
    function b(a, b) {
        return b.triggerPoint - a.triggerPoint
    }
    function c(a) {
        this.name = a.name,
        this.axis = a.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        d[this.axis][this.name] = this
    }
    var d = {
        vertical: {},
        horizontal: {}
    }
      , e = window.Waypoint;
    c.prototype.add = function(a) {
        this.waypoints.push(a)
    }
    ,
    c.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    c.prototype.flushTriggers = function() {
        for (var c in this.triggerQueues) {
            var d = this.triggerQueues[c]
              , e = "up" === c || "left" === c;
            d.sort(e ? b : a);
            for (var f = 0, g = d.length; g > f; f += 1) {
                var h = d[f];
                (h.options.continuous || f === d.length - 1) && h.trigger([c])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    c.prototype.next = function(b) {
        this.waypoints.sort(a);
        var c = e.Adapter.inArray(b, this.waypoints)
          , d = c === this.waypoints.length - 1;
        return d ? null : this.waypoints[c + 1]
    }
    ,
    c.prototype.previous = function(b) {
        this.waypoints.sort(a);
        var c = e.Adapter.inArray(b, this.waypoints);
        return c ? this.waypoints[c - 1] : null
    }
    ,
    c.prototype.queueTrigger = function(a, b) {
        this.triggerQueues[b].push(a)
    }
    ,
    c.prototype.remove = function(a) {
        var b = e.Adapter.inArray(a, this.waypoints);
        b > -1 && this.waypoints.splice(b, 1)
    }
    ,
    c.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    c.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    c.findOrCreate = function(a) {
        return d[a.axis][a.name] || new c(a)
    }
    ,
    e.Group = c
}(),
function() {
    "use strict";
    function a(a) {
        this.$element = b(a)
    }
    var b = window.jQuery
      , c = window.Waypoint;
    b.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(b, c) {
        a.prototype[c] = function() {
            var a = Array.prototype.slice.call(arguments);
            return this.$element[c].apply(this.$element, a)
        }
    }),
    b.each(["extend", "inArray", "isEmptyObject"], function(c, d) {
        a[d] = b[d]
    }),
    c.adapters.push({
        name: "jquery",
        Adapter: a
    }),
    c.Adapter = a
}(),
function() {
    "use strict";
    function a(a) {
        return function() {
            var c = []
              , d = arguments[0];
            return a.isFunction(arguments[0]) && (d = a.extend({}, arguments[1]),
            d.handler = arguments[0]),
            this.each(function() {
                var e = a.extend({}, d, {
                    element: this
                });
                "string" == typeof e.context && (e.context = a(this).closest(e.context)[0]),
                c.push(new b(e))
            }),
            c
        }
    }
    var b = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = a(window.jQuery)),
    window.Zepto && (window.Zepto.fn.waypoint = a(window.Zepto))
}(),
function() {
    "use strict";
    var a = this
      , b = a.Chart
      , c = function(a) {
        this.canvas = a.canvas,
        this.ctx = a;
        var b = function(a, b) {
            return a["offset" + b] ? a["offset" + b] : document.defaultView.getComputedStyle(a).getPropertyValue(b)
        }
          , c = this.width = b(a.canvas, "Width")
          , e = this.height = b(a.canvas, "Height");
        a.canvas.width = c,
        a.canvas.height = e;
        var c = this.width = a.canvas.width
          , e = this.height = a.canvas.height;
        return this.aspectRatio = this.width / this.height,
        d.retinaScale(this),
        this
    };
    c.defaults = {
        global: {
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            customTooltips: !1,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            onAnimationProgress: function() {},
            onAnimationComplete: function() {}
        }
    },
    c.types = {};
    var d = c.helpers = {}
      , e = d.each = function(a, b, c) {
        var d = Array.prototype.slice.call(arguments, 3);
        if (a)
            if (a.length === +a.length) {
                var e;
                for (e = 0; e < a.length; e++)
                    b.apply(c, [a[e], e].concat(d))
            } else
                for (var f in a)
                    b.apply(c, [a[f], f].concat(d))
    }
      , f = d.clone = function(a) {
        var b = {};
        return e(a, function(c, d) {
            a.hasOwnProperty(d) && (b[d] = c)
        }),
        b
    }
      , g = d.extend = function(a) {
        return e(Array.prototype.slice.call(arguments, 1), function(b) {
            e(b, function(c, d) {
                b.hasOwnProperty(d) && (a[d] = c)
            })
        }),
        a
    }
      , h = d.merge = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return a.unshift({}),
        g.apply(null, a)
    }
      , i = d.indexOf = function(a, b) {
        if (Array.prototype.indexOf)
            return a.indexOf(b);
        for (var c = 0; c < a.length; c++)
            if (a[c] === b)
                return c;
        return -1
    }
      , j = (d.where = function(a, b) {
        var c = [];
        return d.each(a, function(a) {
            b(a) && c.push(a)
        }),
        c
    }
    ,
    d.findNextWhere = function(a, b, c) {
        c || (c = -1);
        for (var d = c + 1; d < a.length; d++) {
            var e = a[d];
            if (b(e))
                return e
        }
    }
    ,
    d.findPreviousWhere = function(a, b, c) {
        c || (c = a.length);
        for (var d = c - 1; d >= 0; d--) {
            var e = a[d];
            if (b(e))
                return e
        }
    }
    ,
    d.inherits = function(a) {
        var b = this
          , c = a && a.hasOwnProperty("constructor") ? a.constructor : function() {
            return b.apply(this, arguments)
        }
          , d = function() {
            this.constructor = c
        };
        return d.prototype = b.prototype,
        c.prototype = new d,
        c.extend = j,
        a && g(c.prototype, a),
        c.__super__ = b.prototype,
        c
    }
    )
      , k = d.noop = function() {}
      , l = d.uid = function() {
        var a = 0;
        return function() {
            return "chart-" + a++
        }
    }()
      , m = d.warn = function(a) {
        window.console && "function" == typeof window.console.warn && console.warn(a)
    }
      , n = d.amd = "function" == typeof define && define.amd
      , o = d.isNumber = function(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    }
      , p = d.max = function(a) {
        return Math.max.apply(Math, a)
    }
      , q = d.min = function(a) {
        return Math.min.apply(Math, a)
    }
      , r = (d.cap = function(a, b, c) {
        if (o(b)) {
            if (a > b)
                return b
        } else if (o(c) && c > a)
            return c;
        return a
    }
    ,
    d.getDecimalPlaces = function(a) {
        return a % 1 !== 0 && o(a) ? a.toString().split(".")[1].length : 0
    }
    )
      , s = d.radians = function(a) {
        return a * (Math.PI / 180)
    }
      , t = (d.getAngleFromPoint = function(a, b) {
        var c = b.x - a.x
          , d = b.y - a.y
          , e = Math.sqrt(c * c + d * d)
          , f = 2 * Math.PI + Math.atan2(d, c);
        return 0 > c && 0 > d && (f += 2 * Math.PI),
        {
            angle: f,
            distance: e
        }
    }
    ,
    d.aliasPixel = function(a) {
        return a % 2 === 0 ? 0 : .5
    }
    )
      , u = (d.splineCurve = function(a, b, c, d) {
        var e = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
          , f = Math.sqrt(Math.pow(c.x - b.x, 2) + Math.pow(c.y - b.y, 2))
          , g = d * e / (e + f)
          , h = d * f / (e + f);
        return {
            inner: {
                x: b.x - g * (c.x - a.x),
                y: b.y - g * (c.y - a.y)
            },
            outer: {
                x: b.x + h * (c.x - a.x),
                y: b.y + h * (c.y - a.y)
            }
        }
    }
    ,
    d.calculateOrderOfMagnitude = function(a) {
        return Math.floor(Math.log(a) / Math.LN10)
    }
    )
      , v = (d.calculateScaleRange = function(a, b, c, d, e) {
        var f = 2
          , g = Math.floor(b / (1.5 * c))
          , h = f >= g
          , i = p(a)
          , j = q(a);
        i === j && (i += .5,
        j >= .5 && !d ? j -= .5 : i += .5);
        for (var k = Math.abs(i - j), l = u(k), m = Math.ceil(i / (1 * Math.pow(10, l))) * Math.pow(10, l), n = d ? 0 : Math.floor(j / (1 * Math.pow(10, l))) * Math.pow(10, l), o = m - n, r = Math.pow(10, l), s = Math.round(o / r); (s > g || g > 2 * s) && !h; )
            if (s > g)
                r *= 2,
                s = Math.round(o / r),
                s % 1 !== 0 && (h = !0);
            else if (e && l >= 0) {
                if (r / 2 % 1 !== 0)
                    break;
                r /= 2,
                s = Math.round(o / r)
            } else
                r /= 2,
                s = Math.round(o / r);
        return h && (s = f,
        r = o / s),
        {
            steps: s,
            stepValue: r,
            min: n,
            max: n + s * r
        }
    }
    ,
    d.template = function(a, b) {
        function c(a, b) {
            var c = /\W/.test(a) ? new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : d[a] = d[a];
            return b ? c(b) : c
        }
        if (a instanceof Function)
            return a(b);
        var d = {};
        return c(a, b)
    }
    )
      , w = (d.generateLabels = function(a, b, c, d) {
        var f = new Array(b);
        return labelTemplateString && e(f, function(b, e) {
            f[e] = v(a, {
                value: c + d * (e + 1)
            })
        }),
        f
    }
    ,
    d.easingEffects = {
        linear: function(a) {
            return a
        },
        easeInQuad: function(a) {
            return a * a
        },
        easeOutQuad: function(a) {
            return -1 * a * (a - 2)
        },
        easeInOutQuad: function(a) {
            return (a /= .5) < 1 ? .5 * a * a : -.5 * (--a * (a - 2) - 1)
        },
        easeInCubic: function(a) {
            return a * a * a
        },
        easeOutCubic: function(a) {
            return 1 * ((a = a / 1 - 1) * a * a + 1)
        },
        easeInOutCubic: function(a) {
            return (a /= .5) < 1 ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2)
        },
        easeInQuart: function(a) {
            return a * a * a * a
        },
        easeOutQuart: function(a) {
            return -1 * ((a = a / 1 - 1) * a * a * a - 1)
        },
        easeInOutQuart: function(a) {
            return (a /= .5) < 1 ? .5 * a * a * a * a : -.5 * ((a -= 2) * a * a * a - 2)
        },
        easeInQuint: function(a) {
            return 1 * (a /= 1) * a * a * a * a
        },
        easeOutQuint: function(a) {
            return 1 * ((a = a / 1 - 1) * a * a * a * a + 1)
        },
        easeInOutQuint: function(a) {
            return (a /= .5) < 1 ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2)
        },
        easeInSine: function(a) {
            return -1 * Math.cos(a / 1 * (Math.PI / 2)) + 1
        },
        easeOutSine: function(a) {
            return 1 * Math.sin(a / 1 * (Math.PI / 2))
        },
        easeInOutSine: function(a) {
            return -.5 * (Math.cos(Math.PI * a / 1) - 1)
        },
        easeInExpo: function(a) {
            return 0 === a ? 1 : 1 * Math.pow(2, 10 * (a / 1 - 1))
        },
        easeOutExpo: function(a) {
            return 1 === a ? 1 : 1 * (-Math.pow(2, -10 * a / 1) + 1)
        },
        easeInOutExpo: function(a) {
            return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2)
        },
        easeInCirc: function(a) {
            return a >= 1 ? a : -1 * (Math.sqrt(1 - (a /= 1) * a) - 1)
        },
        easeOutCirc: function(a) {
            return 1 * Math.sqrt(1 - (a = a / 1 - 1) * a)
        },
        easeInOutCirc: function(a) {
            return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        },
        easeInElastic: function(a) {
            var b = 1.70158
              , c = 0
              , d = 1;
            return 0 === a ? 0 : 1 == (a /= 1) ? 1 : (c || (c = .3),
            d < Math.abs(1) ? (d = 1,
            b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d),
            -(d * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c)))
        },
        easeOutElastic: function(a) {
            var b = 1.70158
              , c = 0
              , d = 1;
            return 0 === a ? 0 : 1 == (a /= 1) ? 1 : (c || (c = .3),
            d < Math.abs(1) ? (d = 1,
            b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d),
            d * Math.pow(2, -10 * a) * Math.sin(2 * (1 * a - b) * Math.PI / c) + 1)
        },
        easeInOutElastic: function(a) {
            var b = 1.70158
              , c = 0
              , d = 1;
            return 0 === a ? 0 : 2 == (a /= .5) ? 1 : (c || (c = .3 * 1.5),
            d < Math.abs(1) ? (d = 1,
            b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d),
            1 > a ? -.5 * d * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c) : d * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c) * .5 + 1)
        },
        easeInBack: function(a) {
            var b = 1.70158;
            return 1 * (a /= 1) * a * ((b + 1) * a - b)
        },
        easeOutBack: function(a) {
            var b = 1.70158;
            return 1 * ((a = a / 1 - 1) * a * ((b + 1) * a + b) + 1)
        },
        easeInOutBack: function(a) {
            var b = 1.70158;
            return (a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        },
        easeInBounce: function(a) {
            return 1 - w.easeOutBounce(1 - a)
        },
        easeOutBounce: function(a) {
            return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : 2 / 2.75 > a ? 1 * (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 * (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
        },
        easeInOutBounce: function(a) {
            return .5 > a ? .5 * w.easeInBounce(2 * a) : .5 * w.easeOutBounce(2 * a - 1) + .5
        }
    })
      , x = d.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            return window.setTimeout(a, 1e3 / 60)
        }
    }()
      , y = d.cancelAnimFrame = function() {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(a) {
            return window.clearTimeout(a, 1e3 / 60)
        }
    }()
      , z = (d.animationLoop = function(a, b, c, d, e, f) {
        var g = 0
          , h = w[c] || w.linear
          , i = function() {
            g++;
            var c = g / b
              , j = h(c);
            a.call(f, j, c, g),
            d.call(f, j, c),
            b > g ? f.animationFrame = x(i) : e.apply(f)
        };
        x(i)
    }
    ,
    d.getRelativePosition = function(a) {
        var b, c, d = a.originalEvent || a, e = a.currentTarget || a.srcElement, f = e.getBoundingClientRect();
        return d.touches ? (b = d.touches[0].clientX - f.left,
        c = d.touches[0].clientY - f.top) : (b = d.clientX - f.left,
        c = d.clientY - f.top),
        {
            x: b,
            y: c
        }
    }
    ,
    d.addEvent = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
    }
    )
      , A = d.removeEvent = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent ? a.detachEvent("on" + b, c) : a["on" + b] = k
    }
      , B = (d.bindEvents = function(a, b, c) {
        a.events || (a.events = {}),
        e(b, function(b) {
            a.events[b] = function() {
                c.apply(a, arguments)
            }
            ,
            z(a.chart.canvas, b, a.events[b])
        })
    }
    ,
    d.unbindEvents = function(a, b) {
        e(b, function(b, c) {
            A(a.chart.canvas, c, b)
        })
    }
    )
      , C = d.getMaximumWidth = function(a) {
        var b = a.parentNode;
        return b.clientWidth
    }
      , D = d.getMaximumHeight = function(a) {
        var b = a.parentNode;
        return b.clientHeight
    }
      , E = (d.getMaximumSize = d.getMaximumWidth,
    d.retinaScale = function(a) {
        var b = a.ctx
          , c = a.canvas.width
          , d = a.canvas.height;
        window.devicePixelRatio && (b.canvas.style.width = c + "px",
        b.canvas.style.height = d + "px",
        b.canvas.height = d * window.devicePixelRatio,
        b.canvas.width = c * window.devicePixelRatio,
        b.scale(window.devicePixelRatio, window.devicePixelRatio))
    }
    )
      , F = d.clear = function(a) {
        a.ctx.clearRect(0, 0, a.width, a.height)
    }
      , G = d.fontString = function(a, b, c) {
        return b + " " + a + "px " + c
    }
      , H = d.longestText = function(a, b, c) {
        a.font = b;
        var d = 0;
        return e(c, function(b) {
            var c = a.measureText(b).width;
            d = c > d ? c : d
        }),
        d
    }
      , I = d.drawRoundedRectangle = function(a, b, c, d, e, f) {
        a.beginPath(),
        a.moveTo(b + f, c),
        a.lineTo(b + d - f, c),
        a.quadraticCurveTo(b + d, c, b + d, c + f),
        a.lineTo(b + d, c + e - f),
        a.quadraticCurveTo(b + d, c + e, b + d - f, c + e),
        a.lineTo(b + f, c + e),
        a.quadraticCurveTo(b, c + e, b, c + e - f),
        a.lineTo(b, c + f),
        a.quadraticCurveTo(b, c, b + f, c),
        a.closePath()
    }
    ;
    c.instances = {},
    c.Type = function(a, b, d) {
        this.options = b,
        this.chart = d,
        this.id = l(),
        c.instances[this.id] = this,
        b.responsive && this.resize(),
        this.initialize.call(this, a)
    }
    ,
    g(c.Type.prototype, {
        initialize: function() {
            return this
        },
        clear: function() {
            return F(this.chart),
            this
        },
        stop: function() {
            return y(this.animationFrame),
            this
        },
        resize: function(a) {
            this.stop();
            var b = this.chart.canvas
              , c = C(this.chart.canvas)
              , d = this.options.maintainAspectRatio ? c / this.chart.aspectRatio : D(this.chart.canvas);
            return b.width = this.chart.width = c,
            b.height = this.chart.height = d,
            E(this.chart),
            "function" == typeof a && a.apply(this, Array.prototype.slice.call(arguments, 1)),
            this
        },
        reflow: k,
        render: function(a) {
            return a && this.reflow(),
            this.options.animation && !a ? d.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(),
            this.options.onAnimationComplete.call(this)),
            this
        },
        generateLegend: function() {
            return v(this.options.legendTemplate, this)
        },
        destroy: function() {
            this.clear(),
            B(this, this.events);
            var a = this.chart.canvas;
            a.width = this.chart.width,
            a.height = this.chart.height,
            a.style.removeProperty ? (a.style.removeProperty("width"),
            a.style.removeProperty("height")) : (a.style.removeAttribute("width"),
            a.style.removeAttribute("height")),
            delete c.instances[this.id]
        },
        showTooltip: function(a, b) {
            "undefined" == typeof this.activeElements && (this.activeElements = []);
            var f = function(a) {
                var b = !1;
                return a.length !== this.activeElements.length ? b = !0 : (e(a, function(a, c) {
                    a !== this.activeElements[c] && (b = !0)
                }, this),
                b)
            }
            .call(this, a);
            if (f || b) {
                if (this.activeElements = a,
                this.draw(),
                this.options.customTooltips && this.options.customTooltips(!1),
                a.length > 0)
                    if (this.datasets && this.datasets.length > 1) {
                        for (var g, h, j = this.datasets.length - 1; j >= 0 && (g = this.datasets[j].points || this.datasets[j].bars || this.datasets[j].segments,
                        h = i(g, a[0]),
                        -1 === h); j--)
                            ;
                        var k = []
                          , l = []
                          , m = function() {
                            var a, b, c, e, f, g = [], i = [], j = [];
                            return d.each(this.datasets, function(b) {
                                a = b.points || b.bars || b.segments,
                                a[h] && a[h].hasValue() && g.push(a[h])
                            }),
                            d.each(g, function(a) {
                                i.push(a.x),
                                j.push(a.y),
                                k.push(d.template(this.options.multiTooltipTemplate, a)),
                                l.push({
                                    fill: a._saved.fillColor || a.fillColor,
                                    stroke: a._saved.strokeColor || a.strokeColor
                                })
                            }, this),
                            f = q(j),
                            c = p(j),
                            e = q(i),
                            b = p(i),
                            {
                                x: e > this.chart.width / 2 ? e : b,
                                y: (f + c) / 2
                            }
                        }
                        .call(this, h);
                        new c.MultiTooltip({
                            x: m.x,
                            y: m.y,
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            xOffset: this.options.tooltipXOffset,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            titleTextColor: this.options.tooltipTitleFontColor,
                            titleFontFamily: this.options.tooltipTitleFontFamily,
                            titleFontStyle: this.options.tooltipTitleFontStyle,
                            titleFontSize: this.options.tooltipTitleFontSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            labels: k,
                            legendColors: l,
                            legendColorBackground: this.options.multiTooltipKeyBackground,
                            title: a[0].label,
                            chart: this.chart,
                            ctx: this.chart.ctx,
                            custom: this.options.customTooltips
                        }).draw()
                    } else
                        e(a, function(a) {
                            var b = a.tooltipPosition();
                            new c.Tooltip({
                                x: Math.round(b.x),
                                y: Math.round(b.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: v(this.options.tooltipTemplate, a),
                                chart: this.chart,
                                custom: this.options.customTooltips
                            }).draw()
                        }, this);
                return this
            }
        },
        toBase64Image: function() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    }),
    c.Type.extend = function(a) {
        var b = this
          , d = function() {
            return b.apply(this, arguments)
        };
        if (d.prototype = f(b.prototype),
        g(d.prototype, a),
        d.extend = c.Type.extend,
        a.name || b.prototype.name) {
            var e = a.name || b.prototype.name
              , i = c.defaults[b.prototype.name] ? f(c.defaults[b.prototype.name]) : {};
            c.defaults[e] = g(i, a.defaults),
            c.types[e] = d,
            c.prototype[e] = function(a, b) {
                var f = h(c.defaults.global, c.defaults[e], b || {});
                return new d(a,f,this)
            }
        } else
            m("Name not provided for this chart, so it hasn't been registered");
        return b
    }
    ,
    c.Element = function(a) {
        g(this, a),
        this.initialize.apply(this, arguments),
        this.save()
    }
    ,
    g(c.Element.prototype, {
        initialize: function() {},
        restore: function(a) {
            return a ? e(a, function(a) {
                this[a] = this._saved[a]
            }, this) : g(this, this._saved),
            this
        },
        save: function() {
            return this._saved = f(this),
            delete this._saved._saved,
            this
        },
        update: function(a) {
            return e(a, function(a, b) {
                this._saved[b] = this[b],
                this[b] = a
            }, this),
            this
        },
        transition: function(a, b) {
            return e(a, function(a, c) {
                this[c] = (a - this._saved[c]) * b + this._saved[c]
            }, this),
            this
        },
        tooltipPosition: function() {
            return {
                x: this.x,
                y: this.y
            }
        },
        hasValue: function() {
            return o(this.value)
        }
    }),
    c.Element.extend = j,
    c.Point = c.Element.extend({
        display: !0,
        inRange: function(a, b) {
            var c = this.hitDetectionRadius + this.radius;
            return Math.pow(a - this.x, 2) + Math.pow(b - this.y, 2) < Math.pow(c, 2)
        },
        draw: function() {
            if (this.display) {
                var a = this.ctx;
                a.beginPath(),
                a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI),
                a.closePath(),
                a.strokeStyle = this.strokeColor,
                a.lineWidth = this.strokeWidth,
                a.fillStyle = this.fillColor,
                a.fill(),
                a.stroke()
            }
        }
    }),
    c.Arc = c.Element.extend({
        inRange: function(a, b) {
            var c = d.getAngleFromPoint(this, {
                x: a,
                y: b
            })
              , e = c.angle >= this.startAngle && c.angle <= this.endAngle
              , f = c.distance >= this.innerRadius && c.distance <= this.outerRadius;
            return e && f
        },
        tooltipPosition: function() {
            var a = this.startAngle + (this.endAngle - this.startAngle) / 2
              , b = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {
                x: this.x + Math.cos(a) * b,
                y: this.y + Math.sin(a) * b
            }
        },
        draw: function(a) {
            var b = this.ctx;
            b.beginPath(),
            b.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle),
            b.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0),
            b.closePath(),
            b.strokeStyle = this.strokeColor,
            b.lineWidth = this.strokeWidth,
            b.fillStyle = this.fillColor,
            b.fill(),
            b.lineJoin = "bevel",
            this.showStroke && b.stroke()
        }
    }),
    c.Rectangle = c.Element.extend({
        draw: function() {
            var a = this.ctx
              , b = this.width / 2
              , c = this.x - b
              , d = this.x + b
              , e = this.base - (this.base - this.y)
              , f = this.strokeWidth / 2;
            this.showStroke && (c += f,
            d -= f,
            e += f),
            a.beginPath(),
            a.fillStyle = this.fillColor,
            a.strokeStyle = this.strokeColor,
            a.lineWidth = this.strokeWidth,
            a.moveTo(c, this.base),
            a.lineTo(c, e),
            a.lineTo(d, e),
            a.lineTo(d, this.base),
            a.fill(),
            this.showStroke && a.stroke()
        },
        height: function() {
            return this.base - this.y
        },
        inRange: function(a, b) {
            return a >= this.x - this.width / 2 && a <= this.x + this.width / 2 && b >= this.y && b <= this.base
        }
    }),
    c.Tooltip = c.Element.extend({
        draw: function() {
            var a = this.chart.ctx;
            a.font = G(this.fontSize, this.fontStyle, this.fontFamily),
            this.xAlign = "center",
            this.yAlign = "above";
            var b = this.caretPadding = 2
              , c = a.measureText(this.text).width + 2 * this.xPadding
              , d = this.fontSize + 2 * this.yPadding
              , e = d + this.caretHeight + b;
            this.x + c / 2 > this.chart.width ? this.xAlign = "left" : this.x - c / 2 < 0 && (this.xAlign = "right"),
            this.y - e < 0 && (this.yAlign = "below");
            var f = this.x - c / 2
              , g = this.y - e;
            if (a.fillStyle = this.fillColor,
            this.custom)
                this.custom(this);
            else {
                switch (this.yAlign) {
                case "above":
                    a.beginPath(),
                    a.moveTo(this.x, this.y - b),
                    a.lineTo(this.x + this.caretHeight, this.y - (b + this.caretHeight)),
                    a.lineTo(this.x - this.caretHeight, this.y - (b + this.caretHeight)),
                    a.closePath(),
                    a.fill();
                    break;
                case "below":
                    g = this.y + b + this.caretHeight,
                    a.beginPath(),
                    a.moveTo(this.x, this.y + b),
                    a.lineTo(this.x + this.caretHeight, this.y + b + this.caretHeight),
                    a.lineTo(this.x - this.caretHeight, this.y + b + this.caretHeight),
                    a.closePath(),
                    a.fill()
                }
                switch (this.xAlign) {
                case "left":
                    f = this.x - c + (this.cornerRadius + this.caretHeight);
                    break;
                case "right":
                    f = this.x - (this.cornerRadius + this.caretHeight)
                }
                I(a, f, g, c, d, this.cornerRadius),
                a.fill(),
                a.fillStyle = this.textColor,
                a.textAlign = "center",
                a.textBaseline = "middle",
                a.fillText(this.text, f + c / 2, g + d / 2)
            }
        }
    }),
    c.MultiTooltip = c.Element.extend({
        initialize: function() {
            this.font = G(this.fontSize, this.fontStyle, this.fontFamily),
            this.titleFont = G(this.titleFontSize, this.titleFontStyle, this.titleFontFamily),
            this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize,
            this.ctx.font = this.titleFont;
            var a = this.ctx.measureText(this.title).width
              , b = H(this.ctx, this.font, this.labels) + this.fontSize + 3
              , c = p([b, a]);
            this.width = c + 2 * this.xPadding;
            var d = this.height / 2;
            this.y - d < 0 ? this.y = d : this.y + d > this.chart.height && (this.y = this.chart.height - d),
            this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
        },
        getLineHeight: function(a) {
            var b = this.y - this.height / 2 + this.yPadding
              , c = a - 1;
            return 0 === a ? b + this.titleFontSize / 2 : b + (1.5 * this.fontSize * c + this.fontSize / 2) + 1.5 * this.titleFontSize
        },
        draw: function() {
            if (this.custom)
                this.custom(this);
            else {
                I(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var a = this.ctx;
                a.fillStyle = this.fillColor,
                a.fill(),
                a.closePath(),
                a.textAlign = "left",
                a.textBaseline = "middle",
                a.fillStyle = this.titleTextColor,
                a.font = this.titleFont,
                a.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)),
                a.font = this.font,
                d.each(this.labels, function(b, c) {
                    a.fillStyle = this.textColor,
                    a.fillText(b, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(c + 1)),
                    a.fillStyle = this.legendColorBackground,
                    a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize),
                    a.fillStyle = this.legendColors[c].fill,
                    a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                }, this)
            }
        }
    }),
    c.Scale = c.Element.extend({
        initialize: function() {
            this.fit()
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var a = r(this.stepValue), b = 0; b <= this.steps; b++)
                this.yLabels.push(v(this.templateString, {
                    value: (this.min + b * this.stepValue).toFixed(a)
                }));
            this.yLabelWidth = this.display && this.showLabels ? H(this.ctx, this.font, this.yLabels) : 0
        },
        addXLabel: function(a) {
            this.xLabels.push(a),
            this.valuesCount++,
            this.fit()
        },
        removeXLabel: function() {
            this.xLabels.shift(),
            this.valuesCount--,
            this.fit()
        },
        fit: function() {
            this.startPoint = this.display ? this.fontSize : 0,
            this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height,
            this.startPoint += this.padding,
            this.endPoint -= this.padding;
            var a, b = this.endPoint - this.startPoint;
            for (this.calculateYRange(b),
            this.buildYLabels(),
            this.calculateXLabelRotation(); b > this.endPoint - this.startPoint; )
                b = this.endPoint - this.startPoint,
                a = this.yLabelWidth,
                this.calculateYRange(b),
                this.buildYLabels(),
                a < this.yLabelWidth && this.calculateXLabelRotation()
        },
        calculateXLabelRotation: function() {
            this.ctx.font = this.font;
            var a, b, c = this.ctx.measureText(this.xLabels[0]).width, d = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = d / 2 + 3,
            this.xScalePaddingLeft = c / 2 > this.yLabelWidth + 10 ? c / 2 : this.yLabelWidth + 10,
            this.xLabelRotation = 0,
            this.display) {
                var e, f = H(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = f;
                for (var g = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > g && 0 === this.xLabelRotation || this.xLabelWidth > g && this.xLabelRotation <= 90 && this.xLabelRotation > 0; )
                    e = Math.cos(s(this.xLabelRotation)),
                    a = e * c,
                    b = e * d,
                    a + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = a + this.fontSize / 2),
                    this.xScalePaddingRight = this.fontSize / 2,
                    this.xLabelRotation++,
                    this.xLabelWidth = e * f;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(s(this.xLabelRotation)) * f + 3)
            } else
                this.xLabelWidth = 0,
                this.xScalePaddingRight = this.padding,
                this.xScalePaddingLeft = this.padding
        },
        calculateYRange: k,
        drawingArea: function() {
            return this.startPoint - this.endPoint
        },
        calculateY: function(a) {
            var b = this.drawingArea() / (this.min - this.max);
            return this.endPoint - b * (a - this.min)
        },
        calculateX: function(a) {
            var b = (this.xLabelRotation > 0,
            this.width - (this.xScalePaddingLeft + this.xScalePaddingRight))
              , c = b / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1)
              , d = c * a + this.xScalePaddingLeft;
            return this.offsetGridLines && (d += c / 2),
            Math.round(d)
        },
        update: function(a) {
            d.extend(this, a),
            this.fit()
        },
        draw: function() {
            var a = this.ctx
              , b = (this.endPoint - this.startPoint) / this.steps
              , c = Math.round(this.xScalePaddingLeft);
            this.display && (a.fillStyle = this.textColor,
            a.font = this.font,
            e(this.yLabels, function(e, f) {
                var g = this.endPoint - b * f
                  , h = Math.round(g)
                  , i = this.showHorizontalLines;
                a.textAlign = "right",
                a.textBaseline = "middle",
                this.showLabels && a.fillText(e, c - 10, g),
                0 !== f || i || (i = !0),
                i && a.beginPath(),
                f > 0 ? (a.lineWidth = this.gridLineWidth,
                a.strokeStyle = this.gridLineColor) : (a.lineWidth = this.lineWidth,
                a.strokeStyle = this.lineColor),
                h += d.aliasPixel(a.lineWidth),
                i && (a.moveTo(c, h),
                a.lineTo(this.width, h),
                a.stroke(),
                a.closePath()),
                a.lineWidth = this.lineWidth,
                a.strokeStyle = this.lineColor,
                a.beginPath(),
                a.moveTo(c - 5, h),
                a.lineTo(c, h),
                a.stroke(),
                a.closePath()
            }, this),
            e(this.xLabels, function(b, c) {
                var d = this.calculateX(c) + t(this.lineWidth)
                  , e = this.calculateX(c - (this.offsetGridLines ? .5 : 0)) + t(this.lineWidth)
                  , f = this.xLabelRotation > 0
                  , g = this.showVerticalLines;
                0 !== c || g || (g = !0),
                g && a.beginPath(),
                c > 0 ? (a.lineWidth = this.gridLineWidth,
                a.strokeStyle = this.gridLineColor) : (a.lineWidth = this.lineWidth,
                a.strokeStyle = this.lineColor),
                g && (a.moveTo(e, this.endPoint),
                a.lineTo(e, this.startPoint - 3),
                a.stroke(),
                a.closePath()),
                a.lineWidth = this.lineWidth,
                a.strokeStyle = this.lineColor,
                a.beginPath(),
                a.moveTo(e, this.endPoint),
                a.lineTo(e, this.endPoint + 5),
                a.stroke(),
                a.closePath(),
                a.save(),
                a.translate(d, f ? this.endPoint + 12 : this.endPoint + 8),
                a.rotate(-1 * s(this.xLabelRotation)),
                a.font = this.font,
                a.textAlign = f ? "right" : "center",
                a.textBaseline = f ? "middle" : "top",
                a.fillText(b, 0, 0),
                a.restore()
            }, this))
        }
    }),
    c.RadialScale = c.Element.extend({
        initialize: function() {
            this.size = q([this.height, this.width]),
            this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
        },
        calculateCenterOffset: function(a) {
            var b = this.drawingArea / (this.max - this.min);
            return (a - this.min) * b
        },
        update: function() {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(),
            this.buildYLabels()
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var a = r(this.stepValue), b = 0; b <= this.steps; b++)
                this.yLabels.push(v(this.templateString, {
                    value: (this.min + b * this.stepValue).toFixed(a)
                }))
        },
        getCircumference: function() {
            return 2 * Math.PI / this.valuesCount
        },
        setScaleSize: function() {
            var a, b, c, d, e, f, g, h, i, j, k, l, m = q([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]), n = this.width, p = 0;
            for (this.ctx.font = G(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily),
            b = 0; b < this.valuesCount; b++)
                a = this.getPointPosition(b, m),
                c = this.ctx.measureText(v(this.templateString, {
                    value: this.labels[b]
                })).width + 5,
                0 === b || b === this.valuesCount / 2 ? (d = c / 2,
                a.x + d > n && (n = a.x + d,
                e = b),
                a.x - d < p && (p = a.x - d,
                g = b)) : b < this.valuesCount / 2 ? a.x + c > n && (n = a.x + c,
                e = b) : b > this.valuesCount / 2 && a.x - c < p && (p = a.x - c,
                g = b);
            i = p,
            j = Math.ceil(n - this.width),
            f = this.getIndexAngle(e),
            h = this.getIndexAngle(g),
            k = j / Math.sin(f + Math.PI / 2),
            l = i / Math.sin(h + Math.PI / 2),
            k = o(k) ? k : 0,
            l = o(l) ? l : 0,
            this.drawingArea = m - (l + k) / 2,
            this.setCenterPoint(l, k)
        },
        setCenterPoint: function(a, b) {
            var c = this.width - b - this.drawingArea
              , d = a + this.drawingArea;
            this.xCenter = (d + c) / 2,
            this.yCenter = this.height / 2
        },
        getIndexAngle: function(a) {
            var b = 2 * Math.PI / this.valuesCount;
            return a * b - Math.PI / 2
        },
        getPointPosition: function(a, b) {
            var c = this.getIndexAngle(a);
            return {
                x: Math.cos(c) * b + this.xCenter,
                y: Math.sin(c) * b + this.yCenter
            }
        },
        draw: function() {
            if (this.display) {
                var a = this.ctx;
                if (e(this.yLabels, function(b, c) {
                    if (c > 0) {
                        var d, e = c * (this.drawingArea / this.steps), f = this.yCenter - e;
                        if (this.lineWidth > 0)
                            if (a.strokeStyle = this.lineColor,
                            a.lineWidth = this.lineWidth,
                            this.lineArc)
                                a.beginPath(),
                                a.arc(this.xCenter, this.yCenter, e, 0, 2 * Math.PI),
                                a.closePath(),
                                a.stroke();
                            else {
                                a.beginPath();
                                for (var g = 0; g < this.valuesCount; g++)
                                    d = this.getPointPosition(g, this.calculateCenterOffset(this.min + c * this.stepValue)),
                                    0 === g ? a.moveTo(d.x, d.y) : a.lineTo(d.x, d.y);
                                a.closePath(),
                                a.stroke()
                            }
                        if (this.showLabels) {
                            if (a.font = G(this.fontSize, this.fontStyle, this.fontFamily),
                            this.showLabelBackdrop) {
                                var h = a.measureText(b).width;
                                a.fillStyle = this.backdropColor,
                                a.fillRect(this.xCenter - h / 2 - this.backdropPaddingX, f - this.fontSize / 2 - this.backdropPaddingY, h + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                            }
                            a.textAlign = "center",
                            a.textBaseline = "middle",
                            a.fillStyle = this.fontColor,
                            a.fillText(b, this.xCenter, f)
                        }
                    }
                }, this),
                !this.lineArc) {
                    a.lineWidth = this.angleLineWidth,
                    a.strokeStyle = this.angleLineColor;
                    for (var b = this.valuesCount - 1; b >= 0; b--) {
                        if (this.angleLineWidth > 0) {
                            var c = this.getPointPosition(b, this.calculateCenterOffset(this.max));
                            a.beginPath(),
                            a.moveTo(this.xCenter, this.yCenter),
                            a.lineTo(c.x, c.y),
                            a.stroke(),
                            a.closePath()
                        }
                        var d = this.getPointPosition(b, this.calculateCenterOffset(this.max) + 5);
                        a.font = G(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily),
                        a.fillStyle = this.pointLabelFontColor;
                        var f = this.labels.length
                          , g = this.labels.length / 2
                          , h = g / 2
                          , i = h > b || b > f - h
                          , j = b === h || b === f - h;
                        a.textAlign = 0 === b ? "center" : b === g ? "center" : g > b ? "left" : "right",
                        a.textBaseline = j ? "middle" : i ? "bottom" : "top",
                        a.fillText(this.labels[b], d.x, d.y)
                    }
                }
            }
        }
    }),
    d.addEvent(window, "resize", function() {
        var a;
        return function() {
            clearTimeout(a),
            a = setTimeout(function() {
                e(c.instances, function(a) {
                    a.options.responsive && a.resize(a.render, !0)
                })
            }, 50)
        }
    }()),
    n ? define(function() {
        return c
    }) : "object" == typeof module && module.exports && (module.exports = c),
    a.Chart = c,
    c.noConflict = function() {
        return a.Chart = b,
        c
    }
}
.call(this),
function() {
    "use strict";
    var a = this
      , b = a.Chart
      , c = b.helpers
      , d = {
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        barShowStroke: !0,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    b.Type.extend({
        name: "Bar",
        defaults: d,
        initialize: function(a) {
            var d = this.options;
            this.ScaleClass = b.Scale.extend({
                offsetGridLines: !0,
                calculateBarX: function(a, b, c) {
                    var e = this.calculateBaseWidth()
                      , f = this.calculateX(c) - e / 2
                      , g = this.calculateBarWidth(a);
                    return f + g * b + b * d.barDatasetSpacing + g / 2
                },
                calculateBaseWidth: function() {
                    return this.calculateX(1) - this.calculateX(0) - 2 * d.barValueSpacing
                },
                calculateBarWidth: function(a) {
                    var b = this.calculateBaseWidth() - (a - 1) * d.barDatasetSpacing;
                    return b / a
                }
            }),
            this.datasets = [],
            this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                var b = "mouseout" !== a.type ? this.getBarsAtEvent(a) : [];
                this.eachBars(function(a) {
                    a.restore(["fillColor", "strokeColor"])
                }),
                c.each(b, function(a) {
                    a.fillColor = a.highlightFill,
                    a.strokeColor = a.highlightStroke
                }),
                this.showTooltip(b)
            }),
            this.BarClass = b.Rectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            }),
            c.each(a.datasets, function(b) {
                var d = {
                    label: b.label || null,
                    fillColor: b.fillColor,
                    strokeColor: b.strokeColor,
                    bars: []
                };
                this.datasets.push(d),
                c.each(b.data, function(c, e) {
                    d.bars.push(new this.BarClass({
                        value: c,
                        label: a.labels[e],
                        datasetLabel: b.label,
                        strokeColor: b.strokeColor,
                        fillColor: b.fillColor,
                        highlightFill: b.highlightFill || b.fillColor,
                        highlightStroke: b.highlightStroke || b.strokeColor
                    }))
                }, this)
            }, this),
            this.buildScale(a.labels),
            this.BarClass.prototype.base = this.scale.endPoint,
            this.eachBars(function(a, b, d) {
                c.extend(a, {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, d, b),
                    y: this.scale.endPoint
                }),
                a.save()
            }, this),
            this.render()
        },
        update: function() {
            this.scale.update(),
            c.each(this.activeElements, function(a) {
                a.restore(["fillColor", "strokeColor"])
            }),
            this.eachBars(function(a) {
                a.save()
            }),
            this.render()
        },
        eachBars: function(a) {
            c.each(this.datasets, function(b, d) {
                c.each(b.bars, a, this, d)
            }, this)
        },
        getBarsAtEvent: function(a) {
            for (var b, d = [], e = c.getRelativePosition(a), f = function(a) {
                d.push(a.bars[b])
            }, g = 0; g < this.datasets.length; g++)
                for (b = 0; b < this.datasets[g].bars.length; b++)
                    if (this.datasets[g].bars[b].inRange(e.x, e.y))
                        return c.each(this.datasets, f),
                        d;
            return d
        },
        buildScale: function(a) {
            var b = this
              , d = function() {
                var a = [];
                return b.eachBars(function(b) {
                    a.push(b.value)
                }),
                a
            }
              , e = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: a.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(a) {
                    var b = c.calculateScaleRange(d(), a, this.fontSize, this.beginAtZero, this.integersOnly);
                    c.extend(this, b)
                },
                xLabels: a,
                font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && c.extend(e, {
                calculateYRange: c.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }),
            this.scale = new this.ScaleClass(e)
        },
        addData: function(a, b) {
            c.each(a, function(a, c) {
                this.datasets[c].bars.push(new this.BarClass({
                    value: a,
                    label: b,
                    x: this.scale.calculateBarX(this.datasets.length, c, this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[c].strokeColor,
                    fillColor: this.datasets[c].fillColor
                }))
            }, this),
            this.scale.addXLabel(b),
            this.update()
        },
        removeData: function() {
            this.scale.removeXLabel(),
            c.each(this.datasets, function(a) {
                a.bars.shift()
            }, this),
            this.update()
        },
        reflow: function() {
            c.extend(this.BarClass.prototype, {
                y: this.scale.endPoint,
                base: this.scale.endPoint
            });
            var a = c.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(a)
        },
        draw: function(a) {
            var b = a || 1;
            this.clear(),
            this.chart.ctx,
            this.scale.draw(b),
            c.each(this.datasets, function(a, d) {
                c.each(a.bars, function(a, c) {
                    a.hasValue() && (a.base = this.scale.endPoint,
                    a.transition({
                        x: this.scale.calculateBarX(this.datasets.length, d, c),
                        y: this.scale.calculateY(a.value),
                        width: this.scale.calculateBarWidth(this.datasets.length)
                    }, b).draw())
                }, this)
            }, this)
        }
    })
}
.call(this),
function() {
    "use strict";
    var a = this
      , b = a.Chart
      , c = b.helpers
      , d = {
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    b.Type.extend({
        name: "Doughnut",
        defaults: d,
        initialize: function(a) {
            this.segments = [],
            this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2,
            this.SegmentArc = b.Arc.extend({
                ctx: this.chart.ctx,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }),
            this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                var b = "mouseout" !== a.type ? this.getSegmentsAtEvent(a) : [];
                c.each(this.segments, function(a) {
                    a.restore(["fillColor"])
                }),
                c.each(b, function(a) {
                    a.fillColor = a.highlightColor
                }),
                this.showTooltip(b)
            }),
            this.calculateTotal(a),
            c.each(a, function(a, b) {
                this.addData(a, b, !0)
            }, this),
            this.render()
        },
        getSegmentsAtEvent: function(a) {
            var b = []
              , d = c.getRelativePosition(a);
            return c.each(this.segments, function(a) {
                a.inRange(d.x, d.y) && b.push(a)
            }, this),
            b
        },
        addData: function(a, b, c) {
            var d = b || this.segments.length;
            this.segments.splice(d, 0, new this.SegmentArc({
                value: a.value,
                outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                fillColor: a.color,
                highlightColor: a.highlight || a.color,
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                startAngle: 1.5 * Math.PI,
                circumference: this.options.animateRotate ? 0 : this.calculateCircumference(a.value),
                label: a.label
            })),
            c || (this.reflow(),
            this.update())
        },
        calculateCircumference: function(a) {
            return 2 * Math.PI * (Math.abs(a) / this.total)
        },
        calculateTotal: function(a) {
            this.total = 0,
            c.each(a, function(a) {
                this.total += Math.abs(a.value)
            }, this)
        },
        update: function() {
            this.calculateTotal(this.segments),
            c.each(this.activeElements, function(a) {
                a.restore(["fillColor"])
            }),
            c.each(this.segments, function(a) {
                a.save()
            }),
            this.render()
        },
        removeData: function(a) {
            var b = c.isNumber(a) ? a : this.segments.length - 1;
            this.segments.splice(b, 1),
            this.reflow(),
            this.update()
        },
        reflow: function() {
            c.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }),
            this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2,
            c.each(this.segments, function(a) {
                a.update({
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                })
            }, this)
        },
        draw: function(a) {
            var b = a ? a : 1;
            this.clear(),
            c.each(this.segments, function(a, c) {
                a.transition({
                    circumference: this.calculateCircumference(a.value),
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                }, b),
                a.endAngle = a.startAngle + a.circumference,
                a.draw(),
                0 === c && (a.startAngle = 1.5 * Math.PI),
                c < this.segments.length - 1 && (this.segments[c + 1].startAngle = a.endAngle)
            }, this)
        }
    }),
    b.types.Doughnut.extend({
        name: "Pie",
        defaults: c.merge(d, {
            percentageInnerCutout: 0
        })
    })
}
.call(this),
function() {
    "use strict";
    var a = this
      , b = a.Chart
      , c = b.helpers
      , d = {
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        bezierCurve: !0,
        bezierCurveTension: .4,
        pointDot: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 2,
        datasetFill: !0,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    b.Type.extend({
        name: "Line",
        defaults: d,
        initialize: function(a) {
            this.PointClass = b.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx,
                inRange: function(a) {
                    return Math.pow(a - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                }
            }),
            this.datasets = [],
            this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                var b = "mouseout" !== a.type ? this.getPointsAtEvent(a) : [];
                this.eachPoints(function(a) {
                    a.restore(["fillColor", "strokeColor"])
                }),
                c.each(b, function(a) {
                    a.fillColor = a.highlightFill,
                    a.strokeColor = a.highlightStroke
                }),
                this.showTooltip(b)
            }),
            c.each(a.datasets, function(b) {
                var d = {
                    label: b.label || null,
                    fillColor: b.fillColor,
                    strokeColor: b.strokeColor,
                    pointColor: b.pointColor,
                    pointStrokeColor: b.pointStrokeColor,
                    points: []
                };
                this.datasets.push(d),
                c.each(b.data, function(c, e) {
                    d.points.push(new this.PointClass({
                        value: c,
                        label: a.labels[e],
                        datasetLabel: b.label,
                        strokeColor: b.pointStrokeColor,
                        fillColor: b.pointColor,
                        highlightFill: b.pointHighlightFill || b.pointColor,
                        highlightStroke: b.pointHighlightStroke || b.pointStrokeColor
                    }))
                }, this),
                this.buildScale(a.labels),
                this.eachPoints(function(a, b) {
                    c.extend(a, {
                        x: this.scale.calculateX(b),
                        y: this.scale.endPoint
                    }),
                    a.save()
                }, this)
            }, this),
            this.render()
        },
        update: function() {
            this.scale.update(),
            c.each(this.activeElements, function(a) {
                a.restore(["fillColor", "strokeColor"])
            }),
            this.eachPoints(function(a) {
                a.save()
            }),
            this.render()
        },
        eachPoints: function(a) {
            c.each(this.datasets, function(b) {
                c.each(b.points, a, this)
            }, this)
        },
        getPointsAtEvent: function(a) {
            var b = []
              , d = c.getRelativePosition(a);
            return c.each(this.datasets, function(a) {
                c.each(a.points, function(a) {
                    a.inRange(d.x, d.y) && b.push(a)
                })
            }, this),
            b
        },
        buildScale: function(a) {
            var d = this
              , e = function() {
                var a = [];
                return d.eachPoints(function(b) {
                    a.push(b.value)
                }),
                a
            }
              , f = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: a.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(a) {
                    var b = c.calculateScaleRange(e(), a, this.fontSize, this.beginAtZero, this.integersOnly);
                    c.extend(this, b)
                },
                xLabels: a,
                font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && c.extend(f, {
                calculateYRange: c.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }),
            this.scale = new b.Scale(f)
        },
        addData: function(a, b) {
            c.each(a, function(a, c) {
                this.datasets[c].points.push(new this.PointClass({
                    value: a,
                    label: b,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[c].pointStrokeColor,
                    fillColor: this.datasets[c].pointColor
                }))
            }, this),
            this.scale.addXLabel(b),
            this.update()
        },
        removeData: function() {
            this.scale.removeXLabel(),
            c.each(this.datasets, function(a) {
                a.points.shift()
            }, this),
            this.update()
        },
        reflow: function() {
            var a = c.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(a)
        },
        draw: function(a) {
            var b = a || 1;
            this.clear();
            var d = this.chart.ctx
              , e = function(a) {
                return null !== a.value
            }
              , f = function(a, b, d) {
                return c.findNextWhere(b, e, d) || a
            }
              , g = function(a, b, d) {
                return c.findPreviousWhere(b, e, d) || a
            };
            this.scale.draw(b),
            c.each(this.datasets, function(a) {
                var h = c.where(a.points, e);
                c.each(a.points, function(a, c) {
                    a.hasValue() && a.transition({
                        y: this.scale.calculateY(a.value),
                        x: this.scale.calculateX(c)
                    }, b)
                }, this),
                this.options.bezierCurve && c.each(h, function(a, b) {
                    var d = b > 0 && b < h.length - 1 ? this.options.bezierCurveTension : 0;
                    a.controlPoints = c.splineCurve(g(a, h, b), a, f(a, h, b), d),
                    a.controlPoints.outer.y > this.scale.endPoint ? a.controlPoints.outer.y = this.scale.endPoint : a.controlPoints.outer.y < this.scale.startPoint && (a.controlPoints.outer.y = this.scale.startPoint),
                    a.controlPoints.inner.y > this.scale.endPoint ? a.controlPoints.inner.y = this.scale.endPoint : a.controlPoints.inner.y < this.scale.startPoint && (a.controlPoints.inner.y = this.scale.startPoint)
                }, this),
                d.lineWidth = this.options.datasetStrokeWidth,
                d.strokeStyle = a.strokeColor,
                d.beginPath(),
                c.each(h, function(a, b) {
                    if (0 === b)
                        d.moveTo(a.x, a.y);
                    else if (this.options.bezierCurve) {
                        var c = g(a, h, b);
                        d.bezierCurveTo(c.controlPoints.outer.x, c.controlPoints.outer.y, a.controlPoints.inner.x, a.controlPoints.inner.y, a.x, a.y)
                    } else
                        d.lineTo(a.x, a.y)
                }, this),
                d.stroke(),
                this.options.datasetFill && h.length > 0 && (d.lineTo(h[h.length - 1].x, this.scale.endPoint),
                d.lineTo(h[0].x, this.scale.endPoint),
                d.fillStyle = a.fillColor,
                d.closePath(),
                d.fill()),
                c.each(h, function(a) {
                    a.draw()
                })
            }, this)
        }
    })
}
.call(this),
function() {
    "use strict";
    var a = this
      , b = a.Chart
      , c = b.helpers
      , d = {
        scaleShowLabelBackdrop: !0,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBeginAtZero: !0,
        scaleBackdropPaddingY: 2,
        scaleBackdropPaddingX: 2,
        scaleShowLine: !0,
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    b.Type.extend({
        name: "PolarArea",
        defaults: d,
        initialize: function(a) {
            this.segments = [],
            this.SegmentArc = b.Arc.extend({
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                ctx: this.chart.ctx,
                innerRadius: 0,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }),
            this.scale = new b.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                lineArc: !0,
                width: this.chart.width,
                height: this.chart.height,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                valuesCount: a.length
            }),
            this.updateScaleRange(a),
            this.scale.update(),
            c.each(a, function(a, b) {
                this.addData(a, b, !0)
            }, this),
            this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                var b = "mouseout" !== a.type ? this.getSegmentsAtEvent(a) : [];
                c.each(this.segments, function(a) {
                    a.restore(["fillColor"])
                }),
                c.each(b, function(a) {
                    a.fillColor = a.highlightColor
                }),
                this.showTooltip(b)
            }),
            this.render()
        },
        getSegmentsAtEvent: function(a) {
            var b = []
              , d = c.getRelativePosition(a);
            return c.each(this.segments, function(a) {
                a.inRange(d.x, d.y) && b.push(a)
            }, this),
            b
        },
        addData: function(a, b, c) {
            var d = b || this.segments.length;
            this.segments.splice(d, 0, new this.SegmentArc({
                fillColor: a.color,
                highlightColor: a.highlight || a.color,
                label: a.label,
                value: a.value,
                outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(a.value),
                circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                startAngle: 1.5 * Math.PI
            })),
            c || (this.reflow(),
            this.update())
        },
        removeData: function(a) {
            var b = c.isNumber(a) ? a : this.segments.length - 1;
            this.segments.splice(b, 1),
            this.reflow(),
            this.update()
        },
        calculateTotal: function(a) {
            this.total = 0,
            c.each(a, function(a) {
                this.total += a.value
            }, this),
            this.scale.valuesCount = this.segments.length
        },
        updateScaleRange: function(a) {
            var b = [];
            c.each(a, function(a) {
                b.push(a.value)
            });
            var d = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : c.calculateScaleRange(b, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            c.extend(this.scale, d, {
                size: c.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            })
        },
        update: function() {
            this.calculateTotal(this.segments),
            c.each(this.segments, function(a) {
                a.save()
            }),
            this.reflow(),
            this.render()
        },
        reflow: function() {
            c.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }),
            this.updateScaleRange(this.segments),
            this.scale.update(),
            c.extend(this.scale, {
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }),
            c.each(this.segments, function(a) {
                a.update({
                    outerRadius: this.scale.calculateCenterOffset(a.value)
                })
            }, this)
        },
        draw: function(a) {
            var b = a || 1;
            this.clear(),
            c.each(this.segments, function(a, c) {
                a.transition({
                    circumference: this.scale.getCircumference(),
                    outerRadius: this.scale.calculateCenterOffset(a.value)
                }, b),
                a.endAngle = a.startAngle + a.circumference,
                0 === c && (a.startAngle = 1.5 * Math.PI),
                c < this.segments.length - 1 && (this.segments[c + 1].startAngle = a.endAngle),
                a.draw()
            }, this),
            this.scale.draw()
        }
    })
}
.call(this),
function() {
    "use strict";
    var a = this
      , b = a.Chart
      , c = b.helpers;
    b.Type.extend({
        name: "Radar",
        defaults: {
            scaleShowLine: !0,
            angleShowLineOut: !0,
            scaleShowLabels: !1,
            scaleBeginAtZero: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 10,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
        },
        initialize: function(a) {
            this.PointClass = b.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx
            }),
            this.datasets = [],
            this.buildScale(a),
            this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                var b = "mouseout" !== a.type ? this.getPointsAtEvent(a) : [];
                this.eachPoints(function(a) {
                    a.restore(["fillColor", "strokeColor"])
                }),
                c.each(b, function(a) {
                    a.fillColor = a.highlightFill,
                    a.strokeColor = a.highlightStroke
                }),
                this.showTooltip(b)
            }),
            c.each(a.datasets, function(b) {
                var d = {
                    label: b.label || null,
                    fillColor: b.fillColor,
                    strokeColor: b.strokeColor,
                    pointColor: b.pointColor,
                    pointStrokeColor: b.pointStrokeColor,
                    points: []
                };
                this.datasets.push(d),
                c.each(b.data, function(c, e) {
                    var f;
                    this.scale.animation || (f = this.scale.getPointPosition(e, this.scale.calculateCenterOffset(c))),
                    d.points.push(new this.PointClass({
                        value: c,
                        label: a.labels[e],
                        datasetLabel: b.label,
                        x: this.options.animation ? this.scale.xCenter : f.x,
                        y: this.options.animation ? this.scale.yCenter : f.y,
                        strokeColor: b.pointStrokeColor,
                        fillColor: b.pointColor,
                        highlightFill: b.pointHighlightFill || b.pointColor,
                        highlightStroke: b.pointHighlightStroke || b.pointStrokeColor
                    }))
                }, this)
            }, this),
            this.render()
        },
        eachPoints: function(a) {
            c.each(this.datasets, function(b) {
                c.each(b.points, a, this)
            }, this)
        },
        getPointsAtEvent: function(a) {
            var b = c.getRelativePosition(a)
              , d = c.getAngleFromPoint({
                x: this.scale.xCenter,
                y: this.scale.yCenter
            }, b)
              , e = 2 * Math.PI / this.scale.valuesCount
              , f = Math.round((d.angle - 1.5 * Math.PI) / e)
              , g = [];
            return (f >= this.scale.valuesCount || 0 > f) && (f = 0),
            d.distance <= this.scale.drawingArea && c.each(this.datasets, function(a) {
                g.push(a.points[f])
            }),
            g
        },
        buildScale: function(a) {
            this.scale = new b.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                angleLineColor: this.options.angleLineColor,
                angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                pointLabelFontColor: this.options.pointLabelFontColor,
                pointLabelFontSize: this.options.pointLabelFontSize,
                pointLabelFontFamily: this.options.pointLabelFontFamily,
                pointLabelFontStyle: this.options.pointLabelFontStyle,
                height: this.chart.height,
                width: this.chart.width,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                labels: a.labels,
                valuesCount: a.datasets[0].data.length
            }),
            this.scale.setScaleSize(),
            this.updateScaleRange(a.datasets),
            this.scale.buildYLabels()
        },
        updateScaleRange: function(a) {
            var b = function() {
                var b = [];
                return c.each(a, function(a) {
                    a.data ? b = b.concat(a.data) : c.each(a.points, function(a) {
                        b.push(a.value)
                    })
                }),
                b
            }()
              , d = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : c.calculateScaleRange(b, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            c.extend(this.scale, d)
        },
        addData: function(a, b) {
            this.scale.valuesCount++,
            c.each(a, function(a, c) {
                var d = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(a));
                this.datasets[c].points.push(new this.PointClass({
                    value: a,
                    label: b,
                    x: d.x,
                    y: d.y,
                    strokeColor: this.datasets[c].pointStrokeColor,
                    fillColor: this.datasets[c].pointColor
                }))
            }, this),
            this.scale.labels.push(b),
            this.reflow(),
            this.update()
        },
        removeData: function() {
            this.scale.valuesCount--,
            this.scale.labels.shift(),
            c.each(this.datasets, function(a) {
                a.points.shift()
            }, this),
            this.reflow(),
            this.update()
        },
        update: function() {
            this.eachPoints(function(a) {
                a.save()
            }),
            this.reflow(),
            this.render()
        },
        reflow: function() {
            c.extend(this.scale, {
                width: this.chart.width,
                height: this.chart.height,
                size: c.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }),
            this.updateScaleRange(this.datasets),
            this.scale.setScaleSize(),
            this.scale.buildYLabels()
        },
        draw: function(a) {
            var b = a || 1
              , d = this.chart.ctx;
            this.clear(),
            this.scale.draw(),
            c.each(this.datasets, function(a) {
                c.each(a.points, function(a, c) {
                    a.hasValue() && a.transition(this.scale.getPointPosition(c, this.scale.calculateCenterOffset(a.value)), b)
                }, this),
                d.lineWidth = this.options.datasetStrokeWidth,
                d.strokeStyle = a.strokeColor,
                d.beginPath(),
                c.each(a.points, function(a, b) {
                    0 === b ? d.moveTo(a.x, a.y) : d.lineTo(a.x, a.y)
                }, this),
                d.closePath(),
                d.stroke(),
                d.fillStyle = a.fillColor,
                d.fill(),
                c.each(a.points, function(a) {
                    a.hasValue() && a.draw()
                })
            }, this)
        }
    })
}
.call(this),
function(a) {
    "use strict";
    a.fn.countTo = function(b) {
        b = a.extend({}, a.fn.countTo.defaults, b || {});
        var c = Math.ceil(b.speed / b.refreshInterval)
          , d = (b.to - b.from) / c;
        return a(this).each(function() {
            function e() {
                h += d,
                g++,
                a(f).html(h.toFixed(b.decimals)),
                "function" == typeof b.onUpdate && b.onUpdate.call(f, h),
                g >= c && (clearInterval(i),
                h = b.to,
                "function" == typeof b.onComplete && b.onComplete.call(f, h))
            }
            var f = this
              , g = 0
              , h = b.from
              , i = setInterval(e, b.refreshInterval)
        })
    }
    ,
    a.fn.countTo.defaults = {
        from: 0,
        to: 100,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        onUpdate: null,
        onComplete: null
    }
}(jQuery),
function(a) {
    "use strict";
    a.fn.absoluteCounter = function(b) {
        return b = a.extend({}, a.fn.absoluteCounter.defaults, b || {}),
        a(this).each(function() {
            var c = this
              , d = b.speed
              , e = b.setStyles
              , f = b.delayedStart
              , g = b.fadeInDelay;
            e && a(c).css({
                display: "block",
                position: "relative",
                overflow: "hidden"
            }).addClass("animated"),
            a(c).css("opacity", "0"),
            a(c).animate({
                opacity: 0
            }, f, function() {
                var f = a(c).text();
                a(c).text("");
                for (var h = 0; h < f.length; h++) {
                    var i = f.charAt(h)
                      , j = "";
                    if (parseInt(i, 10) >= 0) {
                        j = '<span class="onedigit p' + (f.length - h) + " d" + i + '">';
                        for (var k = 0; k <= parseInt(i, 10); k++)
                            j += '<span class="n' + k % 10 + '">' + k % 10 + "</span>";
                        j += "</span>"
                    } else
                        j = '<span class="onedigit p' + (f.length - h) + ' char"><span class="c">' + i + "</span></span>";
                    a(c).append(j)
                }
                a(c).animate({
                    opacity: 1
                }, g),
                a("span.onedigit", c).each(function(f, g) {
                    e && (a(g).css({
                        float: "left",
                        position: "relative"
                    }),
                    a("span", a(g)).css({
                        display: "block"
                    }));
                    var h = a("span", a(g)).length
                      , i = a(c).height();
                    a(g).css({
                        height: h * i + "px",
                        top: "0"
                    }),
                    a("span", a(g)).css({
                        height: i + "px"
                    }),
                    a(g).animate({
                        top: -1 * ((h - 1) * i) + "px"
                    }, d, function() {
                        "function" == typeof b.onComplete && b.onComplete.call(c)
                    })
                })
            })
        })
    }
    ,
    a.fn.absoluteCounter.defaults = {
        speed: 2e3,
        setStyles: !0,
        onComplete: null,
        delayedStart: 0,
        fadeInDelay: 0
    }
}(jQuery),
!function(a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b : a.fluidvids = b()
}(this, function() {
    "use strict";
    function a(a) {
        return new RegExp("^(https?:)?//(?:" + e.players.join("|") + ").*$","i").test(a)
    }
    function b(a, b) {
        return parseInt(a, 10) / parseInt(b, 10) * 100 + "%"
    }
    function c(c) {
        if ((a(c.src) || a(c.data)) && !c.getAttribute("data-fluidvids")) {
            var d = document.createElement("div");
            c.parentNode.insertBefore(d, c),
            c.className += (c.className ? " " : "") + "fluidvids-item",
            c.setAttribute("data-fluidvids", "loaded"),
            d.className += "fluidvids",
            d.style.paddingTop = b(c.height, c.width),
            d.appendChild(c)
        }
    }
    function d() {
        var a = document.createElement("div");
        a.innerHTML = "<p>x</p><style>" + f + "</style>",
        g.appendChild(a.childNodes[1])
    }
    var e = {
        selector: ["iframe", "object"],
        players: ["www.youtube.com", "player.vimeo.com"]
    }
      , f = [".fluidvids {", "width: 100%; max-width: 100%; position: relative;", "}", ".fluidvids-item {", "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;", "}"].join("")
      , g = document.head || document.getElementsByTagName("head")[0];
    return e.render = function() {
        for (var a = document.querySelectorAll(e.selector.join()), b = a.length; b--; )
            c(a[b])
    }
    ,
    e.init = function(a) {
        for (var b in a)
            e[b] = a[b];
        e.render(),
        d()
    }
    ,
    e
}),
!function(a) {
    function b() {
        var a = location.href;
        return hashtag = -1 !== a.indexOf("#prettyPhoto") && decodeURI(a.substring(a.indexOf("#prettyPhoto") + 1, a.length)),
        hashtag && (hashtag = hashtag.replace(/<|>/g, "")),
        hashtag
    }
    function c() {
        "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
    }
    function d() {
        -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
    }
    function e(a, b) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var c = "[\\?&]" + a + "=([^&#]*)"
          , d = new RegExp(c)
          , e = d.exec(b);
        return null == e ? "" : e[1]
    }
    a.prettyPhoto = {
        version: "3.1.6"
    },
    a.fn.prettyPhoto = function(f) {
        function g() {
            a(".pp_loaderIcon").hide(),
            projectedTop = scroll_pos.scrollTop + (A / 2 - r.containerHeight / 2),
            projectedTop < 0 && (projectedTop = 0),
            $ppt.fadeTo(settings.animation_speed, 1),
            $pp_pic_holder.find(".pp_content").animate({
                height: r.contentHeight,
                width: r.contentWidth
            }, settings.animation_speed),
            $pp_pic_holder.animate({
                top: projectedTop,
                left: B / 2 - r.containerWidth / 2 < 0 ? 0 : B / 2 - r.containerWidth / 2,
                width: r.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(r.height).width(r.width),
                $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed),
                isSet && "image" == l(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(),
                settings.allow_expand && (r.resized ? a("a.pp_expand,a.pp_contract").show() : a("a.pp_expand").hide()),
                !settings.autoplay_slideshow || x || s || a.prettyPhoto.startSlideshow(),
                settings.changepicturecallback(),
                s = !0
            }),
            p(),
            f.ajaxcallback()
        }
        function h(b) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"),
            $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                a(".pp_loaderIcon").show(),
                b()
            })
        }
        function i(b) {
            b > 1 ? a(".pp_nav").show() : a(".pp_nav").hide()
        }
        function j(a, b) {
            if (resized = !1,
            k(a, b),
            imageWidth = a,
            imageHeight = b,
            (w > B || v > A) && doresize && settings.allow_resize && !z) {
                for (resized = !0,
                fitting = !1; !fitting; )
                    w > B ? (imageWidth = B - 200,
                    imageHeight = b / a * imageWidth) : v > A ? (imageHeight = A - 200,
                    imageWidth = a / b * imageHeight) : fitting = !0,
                    v = imageHeight,
                    w = imageWidth;
                (w > B || v > A) && j(w, v),
                k(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(v),
                containerWidth: Math.floor(w) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(t),
                contentWidth: Math.floor(u),
                resized: resized
            }
        }
        function k(b, c) {
            b = parseFloat(b),
            c = parseFloat(c),
            $pp_details = $pp_pic_holder.find(".pp_details"),
            $pp_details.width(b),
            detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")),
            $pp_details = $pp_details.clone().addClass(settings.theme).width(b).appendTo(a("body")).css({
                position: "absolute",
                top: -1e4
            }),
            detailsHeight += $pp_details.height(),
            detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight,
            $pp_details.remove(),
            $pp_title = $pp_pic_holder.find(".ppt"),
            $pp_title.width(b),
            titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")),
            $pp_title = $pp_title.clone().appendTo(a("body")).css({
                position: "absolute",
                top: -1e4
            }),
            titleHeight += $pp_title.height(),
            $pp_title.remove(),
            t = c + detailsHeight,
            u = b,
            v = t + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(),
            w = b
        }
        function l(a) {
            return a.match(/youtube\.com\/watch/i) || a.match(/youtu\.be/i) ? "youtube" : a.match(/vimeo\.com/i) ? "vimeo" : a.match(/\b.mov\b/i) ? "quicktime" : a.match(/\b.swf\b/i) ? "flash" : a.match(/\biframe=true\b/i) ? "iframe" : a.match(/\bajax=true\b/i) ? "ajax" : a.match(/\bcustom=true\b/i) ? "custom" : "#" == a.substr(0, 1) ? "inline" : "image"
        }
        function m() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = n(),
                contentHeight = $pp_pic_holder.height(),
                contentwidth = $pp_pic_holder.width(),
                projectedTop = A / 2 + scroll_pos.scrollTop - contentHeight / 2,
                projectedTop < 0 && (projectedTop = 0),
                contentHeight > A)
                    return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: B / 2 + scroll_pos.scrollLeft - contentwidth / 2
                })
            }
        }
        function n() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0
        }
        function o() {
            A = a(window).height(),
            B = a(window).width(),
            "undefined" != typeof $pp_overlay && $pp_overlay.height(a(document).height()).width(B)
        }
        function p() {
            isSet && settings.overlay_gallery && "image" == l(pp_images[set_position]) ? (itemWidth = 57,
            navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30,
            itemsPerPage = Math.floor((r.containerWidth - 100 - navWidth) / itemWidth),
            itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length,
            totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1,
            0 == totalPage ? (navWidth = 0,
            $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),
            galleryWidth = itemsPerPage * itemWidth,
            fullGalleryWidth = pp_images.length * itemWidth,
            $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"),
            goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage,
            a.prettyPhoto.changeGalleryPage(goToPage),
            $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
        }
        function q() {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))),
            settings.markup = settings.markup.replace("{pp_social}", ""),
            a("body").append(settings.markup),
            $pp_pic_holder = a(".pp_pic_holder"),
            $ppt = a(".ppt"),
            $pp_overlay = a("div.pp_overlay"),
            isSet && settings.overlay_gallery) {
                currentGalleryPage = 0,
                toInject = "";
                for (var b = 0; b < pp_images.length; b++)
                    pp_images[b].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "",
                    img_src = pp_images[b]) : (classname = "default",
                    img_src = ""),
                    toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject),
                $pp_pic_holder.find("#pp_full_res").after(toInject),
                $pp_gallery = a(".pp_pic_holder .pp_gallery"),
                $pp_gallery_li = $pp_gallery.find("li"),
                $pp_gallery.find(".pp_arrow_next").click(function() {
                    return a.prettyPhoto.changeGalleryPage("next"),
                    a.prettyPhoto.stopSlideshow(),
                    !1
                }),
                $pp_gallery.find(".pp_arrow_previous").click(function() {
                    return a.prettyPhoto.changeGalleryPage("previous"),
                    a.prettyPhoto.stopSlideshow(),
                    !1
                }),
                $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }),
                itemWidth = 57,
                $pp_gallery_li.each(function(b) {
                    a(this).find("a").click(function() {
                        return a.prettyPhoto.changePage(b),
                        a.prettyPhoto.stopSlideshow(),
                        !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'),
            $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                return a.prettyPhoto.startSlideshow(),
                !1
            })),
            $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme),
            $pp_overlay.css({
                opacity: 0,
                height: a(document).height(),
                width: a(window).width()
            }).bind("click", function() {
                settings.modal || a.prettyPhoto.close()
            }),
            a("a.pp_close").bind("click", function() {
                return a.prettyPhoto.close(),
                !1
            }),
            settings.allow_expand && a("a.pp_expand").bind("click", function() {
                return a(this).hasClass("pp_expand") ? (a(this).removeClass("pp_expand").addClass("pp_contract"),
                doresize = !1) : (a(this).removeClass("pp_contract").addClass("pp_expand"),
                doresize = !0),
                h(function() {
                    a.prettyPhoto.open()
                }),
                !1
            }),
            $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                return a.prettyPhoto.changePage("previous"),
                a.prettyPhoto.stopSlideshow(),
                !1
            }),
            $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                return a.prettyPhoto.changePage("next"),
                a.prettyPhoto.stopSlideshow(),
                !1
            }),
            m()
        }
        f = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, f);
        var r, s, t, u, v, w, x, y = this, z = !1, A = a(window).height(), B = a(window).width();
        return doresize = !0,
        scroll_pos = n(),
        a(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            m(),
            o()
        }),
        f.keyboard_shortcuts && a(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(b) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible"))
                switch (b.keyCode) {
                case 37:
                    a.prettyPhoto.changePage("previous"),
                    b.preventDefault();
                    break;
                case 39:
                    a.prettyPhoto.changePage("next"),
                    b.preventDefault();
                    break;
                case 27:
                    settings.modal || a.prettyPhoto.close(),
                    b.preventDefault()
                }
        }),
        a.prettyPhoto.initialize = function() {
            return settings = f,
            "pp_default" == settings.theme && (settings.horizontal_padding = 16),
            theRel = a(this).attr(settings.hook),
            galleryRegExp = /\[(?:.*)\]/,
            isSet = !!galleryRegExp.exec(theRel),
            pp_images = isSet ? jQuery.map(y, function(b) {
                return -1 != a(b).attr(settings.hook).indexOf(theRel) ? a(b).attr("href") : void 0
            }) : a.makeArray(a(this).attr("href")),
            pp_titles = isSet ? jQuery.map(y, function(b) {
                return -1 != a(b).attr(settings.hook).indexOf(theRel) ? a(b).find("img").attr("alt") ? a(b).find("img").attr("alt") : "" : void 0
            }) : a.makeArray(a(this).find("img").attr("alt")),
            pp_descriptions = isSet ? jQuery.map(y, function(b) {
                return -1 != a(b).attr(settings.hook).indexOf(theRel) ? a(b).attr("title") ? a(b).attr("title") : "" : void 0
            }) : a.makeArray(a(this).attr("title")),
            pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1),
            set_position = jQuery.inArray(a(this).attr("href"), pp_images),
            rel_index = isSet ? set_position : a("a[" + settings.hook + "^='" + theRel + "']").index(a(this)),
            q(this),
            settings.allow_resize && a(window).bind("scroll.prettyphoto", function() {
                m()
            }),
            a.prettyPhoto.open(),
            !1
        }
        ,
        a.prettyPhoto.open = function(b) {
            return "undefined" == typeof settings && (settings = f,
            pp_images = a.makeArray(arguments[0]),
            pp_titles = a.makeArray(arguments[1] ? arguments[1] : ""),
            pp_descriptions = a.makeArray(arguments[2] ? arguments[2] : ""),
            isSet = pp_images.length > 1,
            set_position = arguments[3] ? arguments[3] : 0,
            q(b.target)),
            settings.hideflash && a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"),
            i(a(pp_images).size()),
            a(".pp_loaderIcon").show(),
            settings.deeplinking && c(),
            settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)),
            $pp_pic_holder.find(".pp_social").html(facebook_like_link)),
            $ppt.is(":hidden") && $ppt.css("opacity", 0).show(),
            $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity),
            $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + a(pp_images).size()),
            "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(),
            movie_width = parseFloat(e("width", pp_images[set_position])) ? e("width", pp_images[set_position]) : settings.default_width.toString(),
            movie_height = parseFloat(e("height", pp_images[set_position])) ? e("height", pp_images[set_position]) : settings.default_height.toString(),
            z = !1,
            -1 != movie_height.indexOf("%") && (movie_height = parseFloat(a(window).height() * parseFloat(movie_height) / 100 - 150),
            z = !0),
            -1 != movie_width.indexOf("%") && (movie_width = parseFloat(a(window).width() * parseFloat(movie_width) / 100 - 150),
            z = !0),
            $pp_pic_holder.fadeIn(function() {
                switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"),
                imgPreloader = "",
                skipInjection = !1,
                l(pp_images[set_position])) {
                case "image":
                    imgPreloader = new Image,
                    nextImage = new Image,
                    isSet && set_position < a(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]),
                    prevImage = new Image,
                    isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]),
                    $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]),
                    imgPreloader.onload = function() {
                        r = j(imgPreloader.width, imgPreloader.height),
                        g()
                    }
                    ,
                    imgPreloader.onerror = function() {
                        alert("Image cannot be loaded. Make sure the path is correct and image exist."),
                        a.prettyPhoto.close()
                    }
                    ,
                    imgPreloader.src = pp_images[set_position];
                    break;
                case "youtube":
                    r = j(movie_width, movie_height),
                    movie_id = e("v", pp_images[set_position]),
                    "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"),
                    movie_id = movie_id[1],
                    movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))),
                    movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))),
                    movie = "https://www.youtube.com/embed/" + movie_id,
                    movie += e("rel", pp_images[set_position]) ? "?rel=" + e("rel", pp_images[set_position]) : "?rel=1",
                    settings.autoplay && (movie += "&autoplay=1"),
                    toInject = settings.iframe_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                    break;
                case "vimeo":
                    r = j(movie_width, movie_height),
                    movie_id = pp_images[set_position];
                    var b = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/
                      , c = movie_id.match(b);
                    movie = "https://player.vimeo.com/video/" + c[3] + "?title=0&byline=0&portrait=0",
                    settings.autoplay && (movie += "&autoplay=1;"),
                    vimeo_width = r.width + "/embed/?moog_width=" + r.width,
                    toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, r.height).replace(/{path}/g, movie);
                    break;
                case "quicktime":
                    r = j(movie_width, movie_height),
                    r.height += 15,
                    r.contentHeight += 15,
                    r.containerHeight += 15,
                    toInject = settings.quicktime_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                    break;
                case "flash":
                    r = j(movie_width, movie_height),
                    flash_vars = pp_images[set_position],
                    flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length),
                    filename = pp_images[set_position],
                    filename = filename.substring(0, filename.indexOf("?")),
                    toInject = settings.flash_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                    break;
                case "iframe":
                    r = j(movie_width, movie_height),
                    frame_url = pp_images[set_position],
                    frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1),
                    toInject = settings.iframe_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{path}/g, frame_url);
                    break;
                case "ajax":
                    doresize = !1,
                    r = j(movie_width, movie_height),
                    doresize = !0,
                    skipInjection = !0,
                    a.get(pp_images[set_position], function(a) {
                        toInject = settings.inline_markup.replace(/{content}/g, a),
                        $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject,
                        g()
                    });
                    break;
                case "custom":
                    r = j(movie_width, movie_height),
                    toInject = settings.custom_markup;
                    break;
                case "inline":
                    myClone = a(pp_images[set_position]).clone().append('<br clear="all" />').css({
                        width: settings.default_width
                    }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(a("body")).show(),
                    doresize = !1,
                    r = j(a(myClone).width(), a(myClone).height()),
                    doresize = !0,
                    a(myClone).remove(),
                    toInject = settings.inline_markup.replace(/{content}/g, a(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject,
                g())
            }),
            !1
        }
        ,
        a.prettyPhoto.changePage = function(b) {
            currentGalleryPage = 0,
            "previous" == b ? (set_position--,
            set_position < 0 && (set_position = a(pp_images).size() - 1)) : "next" == b ? (set_position++,
            set_position > a(pp_images).size() - 1 && (set_position = 0)) : set_position = b,
            rel_index = set_position,
            doresize || (doresize = !0),
            settings.allow_expand && a(".pp_contract").removeClass("pp_contract").addClass("pp_expand"),
            h(function() {
                a.prettyPhoto.open()
            })
        }
        ,
        a.prettyPhoto.changeGalleryPage = function(a) {
            "next" == a ? (currentGalleryPage++,
            currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == a ? (currentGalleryPage--,
            currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = a,
            slide_speed = "next" == a || "previous" == a ? settings.animation_speed : 0,
            slide_to = currentGalleryPage * itemsPerPage * itemWidth,
            $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        }
        ,
        a.prettyPhoto.startSlideshow = function() {
            "undefined" == typeof x ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                return a.prettyPhoto.stopSlideshow(),
                !1
            }),
            x = setInterval(a.prettyPhoto.startSlideshow, settings.slideshow)) : a.prettyPhoto.changePage("next")
        }
        ,
        a.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                return a.prettyPhoto.startSlideshow(),
                !1
            }),
            clearInterval(x),
            x = void 0
        }
        ,
        a.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || (a.prettyPhoto.stopSlideshow(),
            $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"),
            a("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                a(this).remove()
            }),
            $pp_overlay.fadeOut(settings.animation_speed, function() {
                settings.hideflash && a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"),
                a(this).remove(),
                a(window).unbind("scroll.prettyphoto"),
                d(),
                settings.callback(),
                doresize = !0,
                s = !1,
                delete settings
            }))
        }
        ,
        !pp_alreadyInitialized && b() && (pp_alreadyInitialized = !0,
        hashIndex = b(),
        hashRel = hashIndex,
        hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1),
        hashRel = hashRel.substring(0, hashRel.indexOf("/")),
        setTimeout(function() {
            a("a[" + f.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)),
        this.unbind("click.prettyphoto").bind("click.prettyphoto", a.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    var b = !1
      , c = !1
      , d = 0
      , e = 2e3
      , f = 0
      , g = ["webkit", "ms", "moz", "o"]
      , h = window.requestAnimationFrame || !1
      , i = window.cancelAnimationFrame || !1;
    if (!h)
        for (var j in g) {
            var k = g[j];
            h || (h = window[k + "RequestAnimationFrame"]),
            i || (i = window[k + "CancelAnimationFrame"] || window[k + "CancelRequestAnimationFrame"])
        }
    var l = window.MutationObserver || window.WebKitMutationObserver || !1
      , m = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "5px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 60,
        mousescrollstep: 24,
        touchbehavior: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        railhoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: .3,
        rtlmode: "auto",
        cursordragontouch: !1,
        oneaxismousemode: "auto",
        scriptpath: function() {
            var a = document.getElementsByTagName("script")
              , a = a[a.length - 1].src.split("?")[0];
            return 0 < a.split("/").length ? a.split("/").slice(0, -1).join("/") + "/" : ""
        }(),
        preventmultitouchscrolling: !0
    }
      , n = !1
      , o = function() {
        if (n)
            return n;
        var a = document.createElement("DIV")
          , b = a.style
          , c = navigator.userAgent
          , d = navigator.platform
          , e = {
            haspointerlock: "pointerLockElement"in document || "webkitPointerLockElement"in document || "mozPointerLockElement"in document
        };
        e.isopera = "opera"in window,
        e.isopera12 = e.isopera && "getUserMedia"in navigator,
        e.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
        e.isie = "all"in document && "attachEvent"in a && !e.isopera,
        e.isieold = e.isie && !("msInterpolationMode"in b),
        e.isie7 = e.isie && !e.isieold && (!("documentMode"in document) || 7 == document.documentMode),
        e.isie8 = e.isie && "documentMode"in document && 8 == document.documentMode,
        e.isie9 = e.isie && "performance"in window && 9 <= document.documentMode,
        e.isie10 = e.isie && "performance"in window && 10 == document.documentMode,
        e.isie11 = "msRequestFullscreen"in a && 11 <= document.documentMode,
        e.isie9mobile = /iemobile.9/i.test(c),
        e.isie9mobile && (e.isie9 = !1),
        e.isie7mobile = !e.isie9mobile && e.isie7 && /iemobile/i.test(c),
        e.ismozilla = "MozAppearance"in b,
        e.iswebkit = "WebkitAppearance"in b,
        e.ischrome = "chrome"in window,
        e.ischrome22 = e.ischrome && e.haspointerlock,
        e.ischrome26 = e.ischrome && "transition"in b,
        e.cantouch = "ontouchstart"in document.documentElement || "ontouchstart"in window,
        e.hasmstouch = window.MSPointerEvent || !1,
        e.hasw3ctouch = window.PointerEvent || !1,
        e.ismac = /^mac$/i.test(d),
        e.isios = e.cantouch && /iphone|ipad|ipod/i.test(d),
        e.isios4 = e.isios && !("seal"in Object),
        e.isios7 = e.isios && "webkitHidden"in document,
        e.isandroid = /android/i.test(c),
        e.haseventlistener = "addEventListener"in a,
        e.trstyle = !1,
        e.hastransform = !1,
        e.hastranslate3d = !1,
        e.transitionstyle = !1,
        e.hastransition = !1,
        e.transitionend = !1,
        d = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
        for (c = 0; c < d.length; c++)
            if ("undefined" != typeof b[d[c]]) {
                e.trstyle = d[c];
                break
            }
        e.hastransform = !!e.trstyle,
        e.hastransform && (b[e.trstyle] = "translate3d(1px,2px,3px)",
        e.hastranslate3d = /translate3d/.test(b[e.trstyle])),
        e.transitionstyle = !1,
        e.prefixstyle = "",
        e.transitionend = !1;
        for (var d = "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "), f = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "), g = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "), c = 0; c < d.length; c++)
            if (d[c]in b) {
                e.transitionstyle = d[c],
                e.prefixstyle = f[c],
                e.transitionend = g[c];
                break
            }
        e.ischrome26 && (e.prefixstyle = f[1]),
        e.hastransition = e.transitionstyle;
        a: {
            for (c = ["-webkit-grab", "-moz-grab", "grab"],
            (e.ischrome && !e.ischrome22 || e.isie) && (c = []),
            d = 0; d < c.length; d++)
                if (f = c[d],
                b.cursor = f,
                b.cursor == f) {
                    b = f;
                    break a
                }
            b = "url(//mail.google.com/mail/images/2/openhand.cur),n-resize"
        }
        return e.cursorgrabvalue = b,
        e.hasmousecapture = "setCapture"in a,
        e.hasMutationObserver = !1 !== l,
        n = e
    }
      , p = function(g, j) {
        function k() {
            var a = t.doc.css(v.trstyle);
            return !(!a || "matrix" != a.substr(0, 6)) && a.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
        }
        function n() {
            var a = t.win;
            if ("zIndex"in a)
                return a.zIndex();
            for (; 0 < a.length && 9 != a[0].nodeType; ) {
                var b = a.css("zIndex");
                if (!isNaN(b) && 0 != b)
                    return parseInt(b);
                a = a.parent()
            }
            return !1
        }
        function p(a, b, c) {
            return b = a.css(b),
            a = parseFloat(b),
            isNaN(a) ? (a = z[b] || 0,
            c = 3 == a ? c ? t.win.outerHeight() - t.win.innerHeight() : t.win.outerWidth() - t.win.innerWidth() : 1,
            t.isie8 && a && (a += 1),
            c ? a : 0) : a
        }
        function r(a, b, c, d) {
            t._bind(a, b, function(d) {
                d = d ? d : window.event;
                var e = {
                    original: d,
                    target: d.target || d.srcElement,
                    type: "wheel",
                    deltaMode: "MozMousePixelScroll" == d.type ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function() {
                        return d.preventDefault ? d.preventDefault() : d.returnValue = !1,
                        !1
                    },
                    stopImmediatePropagation: function() {
                        d.stopImmediatePropagation ? d.stopImmediatePropagation() : d.cancelBubble = !0
                    }
                };
                return "mousewheel" == b ? (e.deltaY = -.025 * d.wheelDelta,
                d.wheelDeltaX && (e.deltaX = -.025 * d.wheelDeltaX)) : e.deltaY = d.detail,
                c.call(a, e)
            }, d)
        }
        function s(a, b, c) {
            var d, e;
            if (0 == a.deltaMode ? (d = -Math.floor(t.opt.mousescrollstep / 54 * a.deltaX),
            e = -Math.floor(t.opt.mousescrollstep / 54 * a.deltaY)) : 1 == a.deltaMode && (d = -Math.floor(a.deltaX * t.opt.mousescrollstep),
            e = -Math.floor(a.deltaY * t.opt.mousescrollstep)),
            b && t.opt.oneaxismousemode && 0 == d && e && (d = e,
            e = 0,
            c && (0 > d ? t.getScrollLeft() >= t.page.maxw : 0 >= t.getScrollLeft()) && (e = d,
            d = 0)),
            d && (t.scrollmom && t.scrollmom.stop(),
            t.lastdeltax += d,
            t.debounced("mousewheelx", function() {
                var a = t.lastdeltax;
                t.lastdeltax = 0,
                t.rail.drag || t.doScrollLeftBy(a)
            }, 15)),
            e) {
                if (t.opt.nativeparentscrolling && c && !t.ispage && !t.zoomactive)
                    if (0 > e) {
                        if (t.getScrollTop() >= t.page.maxh)
                            return !0
                    } else if (0 >= t.getScrollTop())
                        return !0;
                t.scrollmom && t.scrollmom.stop(),
                t.lastdeltay += e,
                t.debounced("mousewheely", function() {
                    var a = t.lastdeltay;
                    t.lastdeltay = 0,
                    t.rail.drag || t.doScrollBy(a)
                }, 15)
            }
            return a.stopImmediatePropagation(),
            a.preventDefault()
        }
        var t = this;
        if (this.version = "3.6.0",
        this.name = "nicescroll",
        this.me = j,
        this.opt = {
            doc: a("body"),
            win: !1
        },
        a.extend(this.opt, m),
        this.opt.snapbackspeed = 80,
        g)
            for (var u in t.opt)
                "undefined" != typeof g[u] && (t.opt[u] = g[u]);
        this.iddoc = (this.doc = t.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "",
        this.ispage = /^BODY|HTML/.test(t.opt.win ? t.opt.win[0].nodeName : this.doc[0].nodeName),
        this.haswrapper = !1 !== t.opt.win,
        this.win = t.opt.win || (this.ispage ? a(window) : this.doc),
        this.docscroll = this.ispage && !this.haswrapper ? a(window) : this.win,
        this.body = a("body"),
        this.iframe = this.isfixed = this.viewport = !1,
        this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName,
        this.istextarea = "TEXTAREA" == this.win[0].nodeName,
        this.forcescreen = !1,
        this.canshowonmouseevent = "scroll" != t.opt.autohidemode,
        this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1,
        this.scroll = {
            x: 0,
            y: 0
        },
        this.scrollratio = {
            x: 0,
            y: 0
        },
        this.cursorheight = 20,
        this.scrollvaluemax = 0,
        this.isrtlmode = "auto" == this.opt.rtlmode ? "rtl" == (this.win[0] == window ? this.body : this.win).css("direction") : !0 === this.opt.rtlmode,
        this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1;
        do
            this.id = "ascrail" + e++;
        while (document.getElementById(this.id));
        this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1,
        this.visibility = !0,
        this.hidden = this.locked = this.railslocked = !1,
        this.cursoractive = !0,
        this.wheelprevented = !1,
        this.overflowx = t.opt.overflowx,
        this.overflowy = t.opt.overflowy,
        this.nativescrollingarea = !1,
        this.checkarea = 0,
        this.events = [],
        this.saved = {},
        this.delaylist = {},
        this.synclist = {},
        this.lastdeltay = this.lastdeltax = 0,
        this.detected = o();
        var v = a.extend({}, this.detected);
        this.ishwscroll = (this.canhwscroll = v.hastransform && t.opt.hwacceleration) && t.haswrapper,
        this.hasreversehr = this.isrtlmode && !v.iswebkit,
        this.istouchcapable = !1,
        !v.cantouch || v.isios || v.isandroid || !v.iswebkit && !v.ismozilla || (this.istouchcapable = !0,
        v.cantouch = !1),
        t.opt.enablemouselockapi || (v.hasmousecapture = !1,
        v.haspointerlock = !1),
        this.debounced = function(a, b, c) {
            var d = t.delaylist[a];
            t.delaylist[a] = b,
            d || setTimeout(function() {
                var b = t.delaylist[a];
                t.delaylist[a] = !1,
                b.call(t)
            }, c)
        }
        ;
        var w = !1;
        this.synched = function(a, b) {
            return t.synclist[a] = b,
            function() {
                w || (h(function() {
                    w = !1;
                    for (var a in t.synclist) {
                        var b = t.synclist[a];
                        b && b.call(t),
                        t.synclist[a] = !1
                    }
                }),
                w = !0)
            }(),
            a
        }
        ,
        this.unsynched = function(a) {
            t.synclist[a] && (t.synclist[a] = !1)
        }
        ,
        this.css = function(a, b) {
            for (var c in b)
                t.saved.css.push([a, c, a.css(c)]),
                a.css(c, b[c])
        }
        ,
        this.scrollTop = function(a) {
            return "undefined" == typeof a ? t.getScrollTop() : t.setScrollTop(a)
        }
        ,
        this.scrollLeft = function(a) {
            return "undefined" == typeof a ? t.getScrollLeft() : t.setScrollLeft(a)
        }
        ;
        var x = function(a, b, c, d, e, f, g) {
            this.st = a,
            this.ed = b,
            this.spd = c,
            this.p1 = d || 0,
            this.p2 = e || 1,
            this.p3 = f || 0,
            this.p4 = g || 1,
            this.ts = (new Date).getTime(),
            this.df = this.ed - this.st
        };
        if (x.prototype = {
            B2: function(a) {
                return 3 * a * a * (1 - a)
            },
            B3: function(a) {
                return 3 * a * (1 - a) * (1 - a)
            },
            B4: function(a) {
                return (1 - a) * (1 - a) * (1 - a)
            },
            getNow: function() {
                var a = 1 - ((new Date).getTime() - this.ts) / this.spd
                  , b = this.B2(a) + this.B3(a) + this.B4(a);
                return 0 > a ? this.ed : this.st + Math.round(this.df * b)
            },
            update: function(a, b) {
                return this.st = this.getNow(),
                this.ed = a,
                this.spd = b,
                this.ts = (new Date).getTime(),
                this.df = this.ed - this.st,
                this
            }
        },
        this.ishwscroll) {
            this.doc.translate = {
                x: 0,
                y: 0,
                tx: "0px",
                ty: "0px"
            },
            v.hastranslate3d && v.isios && this.doc.css("-webkit-backface-visibility", "hidden"),
            this.getScrollTop = function(a) {
                if (!a) {
                    if (a = k())
                        return 16 == a.length ? -a[13] : -a[5];
                    if (t.timerscroll && t.timerscroll.bz)
                        return t.timerscroll.bz.getNow()
                }
                return t.doc.translate.y
            }
            ,
            this.getScrollLeft = function(a) {
                if (!a) {
                    if (a = k())
                        return 16 == a.length ? -a[12] : -a[4];
                    if (t.timerscroll && t.timerscroll.bh)
                        return t.timerscroll.bh.getNow()
                }
                return t.doc.translate.x
            }
            ,
            this.notifyScrollEvent = function(a) {
                var b = document.createEvent("UIEvents");
                b.initUIEvent("scroll", !1, !0, window, 1),
                b.niceevent = !0,
                a.dispatchEvent(b)
            }
            ;
            var y = this.isrtlmode ? 1 : -1;
            v.hastranslate3d && t.opt.enabletranslate3d ? (this.setScrollTop = function(a, b) {
                t.doc.translate.y = a,
                t.doc.translate.ty = -1 * a + "px",
                t.doc.css(v.trstyle, "translate3d(" + t.doc.translate.tx + "," + t.doc.translate.ty + ",0px)"),
                b || t.notifyScrollEvent(t.win[0])
            }
            ,
            this.setScrollLeft = function(a, b) {
                t.doc.translate.x = a,
                t.doc.translate.tx = a * y + "px",
                t.doc.css(v.trstyle, "translate3d(" + t.doc.translate.tx + "," + t.doc.translate.ty + ",0px)"),
                b || t.notifyScrollEvent(t.win[0])
            }
            ) : (this.setScrollTop = function(a, b) {
                t.doc.translate.y = a,
                t.doc.translate.ty = -1 * a + "px",
                t.doc.css(v.trstyle, "translate(" + t.doc.translate.tx + "," + t.doc.translate.ty + ")"),
                b || t.notifyScrollEvent(t.win[0])
            }
            ,
            this.setScrollLeft = function(a, b) {
                t.doc.translate.x = a,
                t.doc.translate.tx = a * y + "px",
                t.doc.css(v.trstyle, "translate(" + t.doc.translate.tx + "," + t.doc.translate.ty + ")"),
                b || t.notifyScrollEvent(t.win[0])
            }
            )
        } else
            this.getScrollTop = function() {
                return t.docscroll.scrollTop()
            }
            ,
            this.setScrollTop = function(a) {
                return t.docscroll.scrollTop(a)
            }
            ,
            this.getScrollLeft = function() {
                return t.detected.ismozilla && t.isrtlmode ? Math.abs(t.docscroll.scrollLeft()) : t.docscroll.scrollLeft()
            }
            ,
            this.setScrollLeft = function(a) {
                return t.docscroll.scrollLeft(t.detected.ismozilla && t.isrtlmode ? -a : a)
            }
            ;
        this.getTarget = function(a) {
            return !!a && (a.target ? a.target : !!a.srcElement && a.srcElement)
        }
        ,
        this.hasParent = function(a, b) {
            if (!a)
                return !1;
            for (var c = a.target || a.srcElement || a || !1; c && c.id != b; )
                c = c.parentNode || !1;
            return !1 !== c
        }
        ;
        var z = {
            thin: 1,
            medium: 3,
            thick: 5
        };
        this.getDocumentScrollOffset = function() {
            return {
                top: window.pageYOffset || document.documentElement.scrollTop,
                left: window.pageXOffset || document.documentElement.scrollLeft
            }
        }
        ,
        this.getOffset = function() {
            if (t.isfixed) {
                var a = t.win.offset()
                  , b = t.getDocumentScrollOffset();
                return a.top -= b.top,
                a.left -= b.left,
                a
            }
            return a = t.win.offset(),
            t.viewport ? (b = t.viewport.offset(),
            {
                top: a.top - b.top,
                left: a.left - b.left
            }) : a
        }
        ,
        this.updateScrollBar = function(a) {
            if (t.ishwscroll)
                t.rail.css({
                    height: t.win.innerHeight() - (t.opt.railpadding.top + t.opt.railpadding.bottom)
                }),
                t.railh && t.railh.css({
                    width: t.win.innerWidth() - (t.opt.railpadding.left + t.opt.railpadding.right)
                });
            else {
                var b = t.getOffset()
                  , c = b.top
                  , d = b.left - (t.opt.railpadding.left + t.opt.railpadding.right)
                  , c = c + p(t.win, "border-top-width", !0)
                  , d = d + (t.rail.align ? t.win.outerWidth() - p(t.win, "border-right-width") - t.rail.width : p(t.win, "border-left-width"))
                  , e = t.opt.railoffset;
                e && (e.top && (c += e.top),
                t.rail.align && e.left && (d += e.left)),
                t.railslocked || t.rail.css({
                    top: c,
                    left: d,
                    height: (a ? a.h : t.win.innerHeight()) - (t.opt.railpadding.top + t.opt.railpadding.bottom)
                }),
                t.zoom && t.zoom.css({
                    top: c + 1,
                    left: 1 == t.rail.align ? d - 20 : d + t.rail.width + 4
                }),
                t.railh && !t.railslocked && (c = b.top,
                d = b.left,
                (e = t.opt.railhoffset) && (e.top && (c += e.top),
                e.left && (d += e.left)),
                a = t.railh.align ? c + p(t.win, "border-top-width", !0) + t.win.innerHeight() - t.railh.height : c + p(t.win, "border-top-width", !0),
                d += p(t.win, "border-left-width"),
                t.railh.css({
                    top: a - (t.opt.railpadding.top + t.opt.railpadding.bottom),
                    left: d,
                    width: t.railh.width
                }))
            }
        }
        ,
        this.doRailClick = function(a, b, c) {
            var d;
            t.railslocked || (t.cancelEvent(a),
            b ? (b = c ? t.doScrollLeft : t.doScrollTop,
            d = c ? (a.pageX - t.railh.offset().left - t.cursorwidth / 2) * t.scrollratio.x : (a.pageY - t.rail.offset().top - t.cursorheight / 2) * t.scrollratio.y,
            b(d)) : (b = c ? t.doScrollLeftBy : t.doScrollBy,
            d = c ? t.scroll.x : t.scroll.y,
            a = c ? a.pageX - t.railh.offset().left : a.pageY - t.rail.offset().top,
            c = c ? t.view.w : t.view.h,
            b(d >= a ? c : -c)))
        }
        ,
        t.hasanimationframe = h,
        t.hascancelanimationframe = i,
        t.hasanimationframe ? t.hascancelanimationframe || (i = function() {
            t.cancelAnimationFrame = !0
        }
        ) : (h = function(a) {
            return setTimeout(a, 15 - Math.floor(+new Date / 1e3) % 16)
        }
        ,
        i = clearInterval),
        this.init = function() {
            if (t.saved.css = [],
            v.isie7mobile || v.isoperamini)
                return !0;
            if (v.hasmstouch && t.css(t.ispage ? a("html") : t.win, {
                "-ms-touch-action": "none"
            }),
            t.zindex = "auto",
            t.zindex = t.ispage || "auto" != t.opt.zindex ? t.opt.zindex : n() || "auto",
            !t.ispage && "auto" != t.zindex && t.zindex > f && (f = t.zindex),
            t.isie && 0 == t.zindex && "auto" == t.opt.zindex && (t.zindex = "auto"),
            !t.ispage || !v.cantouch && !v.isieold && !v.isie9mobile) {
                var e = t.docscroll;
                t.ispage && (e = t.haswrapper ? t.win : t.doc),
                v.isie9mobile || t.css(e, {
                    "overflow-y": "hidden"
                }),
                t.ispage && v.isie7 && ("BODY" == t.doc[0].nodeName ? t.css(a("html"), {
                    "overflow-y": "hidden"
                }) : "HTML" == t.doc[0].nodeName && t.css(a("body"), {
                    "overflow-y": "hidden"
                })),
                !v.isios || t.ispage || t.haswrapper || t.css(a("body"), {
                    "-webkit-overflow-scrolling": "touch"
                });
                var g = a(document.createElement("div"));
                g.css({
                    position: "relative",
                    top: 0,
                    float: "right",
                    width: t.opt.cursorwidth,
                    height: "0px",
                    "background-color": t.opt.cursorcolor,
                    border: t.opt.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": t.opt.cursorborderradius,
                    "-moz-border-radius": t.opt.cursorborderradius,
                    "border-radius": t.opt.cursorborderradius
                }),
                g.hborder = parseFloat(g.outerHeight() - g.innerHeight()),
                g.addClass("nicescroll-cursors"),
                t.cursor = g;
                var h = a(document.createElement("div"));
                h.attr("id", t.id),
                h.addClass("nicescroll-rails nicescroll-rails-vr");
                var i, j, k, m = ["left", "right", "top", "bottom"];
                for (k in m)
                    j = m[k],
                    (i = t.opt.railpadding[j]) ? h.css("padding-" + j, i + "px") : t.opt.railpadding[j] = 0;
                h.append(g),
                h.width = Math.max(parseFloat(t.opt.cursorwidth), g.outerWidth()),
                h.css({
                    width: h.width + "px",
                    zIndex: t.zindex,
                    background: t.opt.background,
                    cursor: "default"
                }),
                h.visibility = !0,
                h.scrollable = !0,
                h.align = "left" == t.opt.railalign ? 0 : 1,
                t.rail = h,
                g = t.rail.drag = !1,
                !t.opt.boxzoom || t.ispage || v.isieold || (g = document.createElement("div"),
                t.bind(g, "click", t.doZoom),
                t.bind(g, "mouseenter", function() {
                    t.zoom.css("opacity", t.opt.cursoropacitymax)
                }),
                t.bind(g, "mouseleave", function() {
                    t.zoom.css("opacity", t.opt.cursoropacitymin)
                }),
                t.zoom = a(g),
                t.zoom.css({
                    cursor: "pointer",
                    "z-index": t.zindex,
                    backgroundImage: "url(" + t.opt.scriptpath + "zoomico.png)",
                    height: 18,
                    width: 18,
                    backgroundPosition: "0px 0px"
                }),
                t.opt.dblclickzoom && t.bind(t.win, "dblclick", t.doZoom),
                v.cantouch && t.opt.gesturezoom && (t.ongesturezoom = function(a) {
                    return 1.5 < a.scale && t.doZoomIn(a),
                    .8 > a.scale && t.doZoomOut(a),
                    t.cancelEvent(a)
                }
                ,
                t.bind(t.win, "gestureend", t.ongesturezoom))),
                t.railh = !1;
                var o;
                if (t.opt.horizrailenabled && (t.css(e, {
                    "overflow-x": "hidden"
                }),
                g = a(document.createElement("div")),
                g.css({
                    position: "absolute",
                    top: 0,
                    height: t.opt.cursorwidth,
                    width: "0px",
                    "background-color": t.opt.cursorcolor,
                    border: t.opt.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": t.opt.cursorborderradius,
                    "-moz-border-radius": t.opt.cursorborderradius,
                    "border-radius": t.opt.cursorborderradius
                }),
                v.isieold && g.css({
                    overflow: "hidden"
                }),
                g.wborder = parseFloat(g.outerWidth() - g.innerWidth()),
                g.addClass("nicescroll-cursors"),
                t.cursorh = g,
                o = a(document.createElement("div")),
                o.attr("id", t.id + "-hr"),
                o.addClass("nicescroll-rails nicescroll-rails-hr"),
                o.height = Math.max(parseFloat(t.opt.cursorwidth), g.outerHeight()),
                o.css({
                    height: o.height + "px",
                    zIndex: t.zindex,
                    background: t.opt.background
                }),
                o.append(g),
                o.visibility = !0,
                o.scrollable = !0,
                o.align = "top" == t.opt.railvalign ? 0 : 1,
                t.railh = o,
                t.railh.drag = !1),
                t.ispage ? (h.css({
                    position: "fixed",
                    top: "0px",
                    height: "100%"
                }),
                h.align ? h.css({
                    right: "0px"
                }) : h.css({
                    left: "0px"
                }),
                t.body.append(h),
                t.railh && (o.css({
                    position: "fixed",
                    left: "0px",
                    width: "100%"
                }),
                o.align ? o.css({
                    bottom: "0px"
                }) : o.css({
                    top: "0px"
                }),
                t.body.append(o))) : (t.ishwscroll ? ("static" == t.win.css("position") && t.css(t.win, {
                    position: "relative"
                }),
                e = "HTML" == t.win[0].nodeName ? t.body : t.win,
                a(e).scrollTop(0).scrollLeft(0),
                t.zoom && (t.zoom.css({
                    position: "absolute",
                    top: 1,
                    right: 0,
                    "margin-right": h.width + 4
                }),
                e.append(t.zoom)),
                h.css({
                    position: "absolute",
                    top: 0
                }),
                h.align ? h.css({
                    right: 0
                }) : h.css({
                    left: 0
                }),
                e.append(h),
                o && (o.css({
                    position: "absolute",
                    left: 0,
                    bottom: 0
                }),
                o.align ? o.css({
                    bottom: 0
                }) : o.css({
                    top: 0
                }),
                e.append(o))) : (t.isfixed = "fixed" == t.win.css("position"),
                e = t.isfixed ? "fixed" : "absolute",
                t.isfixed || (t.viewport = t.getViewport(t.win[0])),
                t.viewport && (t.body = t.viewport,
                0 == /fixed|absolute/.test(t.viewport.css("position")) && t.css(t.viewport, {
                    position: "relative"
                })),
                h.css({
                    position: e
                }),
                t.zoom && t.zoom.css({
                    position: e
                }),
                t.updateScrollBar(),
                t.body.append(h),
                t.zoom && t.body.append(t.zoom),
                t.railh && (o.css({
                    position: e
                }),
                t.body.append(o))),
                v.isios && t.css(t.win, {
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                    "-webkit-touch-callout": "none"
                }),
                v.isie && t.opt.disableoutline && t.win.attr("hideFocus", "true"),
                v.iswebkit && t.opt.disableoutline && t.win.css({
                    outline: "none"
                })),
                !1 === t.opt.autohidemode ? (t.autohidedom = !1,
                t.rail.css({
                    opacity: t.opt.cursoropacitymax
                }),
                t.railh && t.railh.css({
                    opacity: t.opt.cursoropacitymax
                })) : !0 === t.opt.autohidemode || "leave" === t.opt.autohidemode ? (t.autohidedom = a().add(t.rail),
                v.isie8 && (t.autohidedom = t.autohidedom.add(t.cursor)),
                t.railh && (t.autohidedom = t.autohidedom.add(t.railh)),
                t.railh && v.isie8 && (t.autohidedom = t.autohidedom.add(t.cursorh))) : "scroll" == t.opt.autohidemode ? (t.autohidedom = a().add(t.rail),
                t.railh && (t.autohidedom = t.autohidedom.add(t.railh))) : "cursor" == t.opt.autohidemode ? (t.autohidedom = a().add(t.cursor),
                t.railh && (t.autohidedom = t.autohidedom.add(t.cursorh))) : "hidden" == t.opt.autohidemode && (t.autohidedom = !1,
                t.hide(),
                t.railslocked = !1),
                v.isie9mobile)
                    t.scrollmom = new q(t),
                    t.onmangotouch = function() {
                        var a = t.getScrollTop()
                          , b = t.getScrollLeft();
                        if (a == t.scrollmom.lastscrolly && b == t.scrollmom.lastscrollx)
                            return !0;
                        var c = a - t.mangotouch.sy
                          , d = b - t.mangotouch.sx;
                        if (0 != Math.round(Math.sqrt(Math.pow(d, 2) + Math.pow(c, 2)))) {
                            var e = 0 > c ? -1 : 1
                              , f = 0 > d ? -1 : 1
                              , g = +new Date;
                            t.mangotouch.lazy && clearTimeout(t.mangotouch.lazy),
                            80 < g - t.mangotouch.tm || t.mangotouch.dry != e || t.mangotouch.drx != f ? (t.scrollmom.stop(),
                            t.scrollmom.reset(b, a),
                            t.mangotouch.sy = a,
                            t.mangotouch.ly = a,
                            t.mangotouch.sx = b,
                            t.mangotouch.lx = b,
                            t.mangotouch.dry = e,
                            t.mangotouch.drx = f,
                            t.mangotouch.tm = g) : (t.scrollmom.stop(),
                            t.scrollmom.update(t.mangotouch.sx - d, t.mangotouch.sy - c),
                            t.mangotouch.tm = g,
                            c = Math.max(Math.abs(t.mangotouch.ly - a), Math.abs(t.mangotouch.lx - b)),
                            t.mangotouch.ly = a,
                            t.mangotouch.lx = b,
                            2 < c && (t.mangotouch.lazy = setTimeout(function() {
                                t.mangotouch.lazy = !1,
                                t.mangotouch.dry = 0,
                                t.mangotouch.drx = 0,
                                t.mangotouch.tm = 0,
                                t.scrollmom.doMomentum(30)
                            }, 100)))
                        }
                    }
                    ,
                    h = t.getScrollTop(),
                    o = t.getScrollLeft(),
                    t.mangotouch = {
                        sy: h,
                        ly: h,
                        dry: 0,
                        sx: o,
                        lx: o,
                        drx: 0,
                        lazy: !1,
                        tm: 0
                    },
                    t.bind(t.docscroll, "scroll", t.onmangotouch);
                else {
                    if (v.cantouch || t.istouchcapable || t.opt.touchbehavior || v.hasmstouch) {
                        t.scrollmom = new q(t),
                        t.ontouchstart = function(b) {
                            if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType)
                                return !1;
                            if (t.hasmoving = !1,
                            !t.railslocked) {
                                var c;
                                if (v.hasmstouch)
                                    for (c = !!b.target && b.target; c; ) {
                                        var d = a(c).getNiceScroll();
                                        if (0 < d.length && d[0].me == t.me)
                                            break;
                                        if (0 < d.length)
                                            return !1;
                                        if ("DIV" == c.nodeName && c.id == t.id)
                                            break;
                                        c = !!c.parentNode && c.parentNode
                                    }
                                if (t.cancelScroll(),
                                (c = t.getTarget(b)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type))
                                    return t.stopPropagation(b);
                                if (!("clientX"in b) && "changedTouches"in b && (b.clientX = b.changedTouches[0].clientX,
                                b.clientY = b.changedTouches[0].clientY),
                                t.forcescreen && (d = b,
                                b = {
                                    original: b.original ? b.original : b
                                },
                                b.clientX = d.screenX,
                                b.clientY = d.screenY),
                                t.rail.drag = {
                                    x: b.clientX,
                                    y: b.clientY,
                                    sx: t.scroll.x,
                                    sy: t.scroll.y,
                                    st: t.getScrollTop(),
                                    sl: t.getScrollLeft(),
                                    pt: 2,
                                    dl: !1
                                },
                                t.ispage || !t.opt.directionlockdeadzone)
                                    t.rail.drag.dl = "f";
                                else {
                                    var d = a(window).width()
                                      , e = a(window).height()
                                      , f = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth)
                                      , g = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                                      , e = Math.max(0, g - e)
                                      , d = Math.max(0, f - d);
                                    t.rail.drag.ck = !t.rail.scrollable && t.railh.scrollable ? 0 < e && "v" : !(!t.rail.scrollable || t.railh.scrollable) && (0 < d && "h"),
                                    t.rail.drag.ck || (t.rail.drag.dl = "f")
                                }
                                if (t.opt.touchbehavior && t.isiframe && v.isie && (d = t.win.position(),
                                t.rail.drag.x += d.left,
                                t.rail.drag.y += d.top),
                                t.hasmoving = !1,
                                t.lastmouseup = !1,
                                t.scrollmom.reset(b.clientX, b.clientY),
                                !v.cantouch && !this.istouchcapable && !b.pointerType) {
                                    if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))
                                        return !t.ispage && v.hasmousecapture && c.setCapture(),
                                        t.opt.touchbehavior ? (c.onclick && !c._onclick && (c._onclick = c.onclick,
                                        c.onclick = function(a) {
                                            return !t.hasmoving && void c._onclick.call(this, a)
                                        }
                                        ),
                                        t.cancelEvent(b)) : t.stopPropagation(b);
                                    /SUBMIT|CANCEL|BUTTON/i.test(a(c).attr("type")) && (pc = {
                                        tg: c,
                                        click: !1
                                    },
                                    t.preventclick = pc)
                                }
                            }
                        }
                        ,
                        t.ontouchend = function(a) {
                            if (!t.rail.drag)
                                return !0;
                            if (2 == t.rail.drag.pt) {
                                if (a.pointerType && 2 != a.pointerType && "touch" != a.pointerType)
                                    return !1;
                                if (t.scrollmom.doMomentum(),
                                t.rail.drag = !1,
                                t.hasmoving && (t.lastmouseup = !0,
                                t.hideCursor(),
                                v.hasmousecapture && document.releaseCapture(),
                                !v.cantouch))
                                    return t.cancelEvent(a)
                            } else if (1 == t.rail.drag.pt)
                                return t.onmouseup(a)
                        }
                        ;
                        var p = t.opt.touchbehavior && t.isiframe && !v.hasmousecapture;
                        t.ontouchmove = function(b, c) {
                            if (!t.rail.drag || b.targetTouches && t.opt.preventmultitouchscrolling && 1 < b.targetTouches.length || b.pointerType && 2 != b.pointerType && "touch" != b.pointerType)
                                return !1;
                            if (2 == t.rail.drag.pt) {
                                if (v.cantouch && v.isios && "undefined" == typeof b.original)
                                    return !0;
                                if (t.hasmoving = !0,
                                t.preventclick && !t.preventclick.click && (t.preventclick.click = t.preventclick.tg.onclick || !1,
                                t.preventclick.tg.onclick = t.onpreventclick),
                                b = a.extend({
                                    original: b
                                }, b),
                                "changedTouches"in b && (b.clientX = b.changedTouches[0].clientX,
                                b.clientY = b.changedTouches[0].clientY),
                                t.forcescreen) {
                                    var d = b;
                                    b = {
                                        original: b.original ? b.original : b
                                    },
                                    b.clientX = d.screenX,
                                    b.clientY = d.screenY
                                }
                                var e, d = e = 0;
                                p && !c && (e = t.win.position(),
                                d = -e.left,
                                e = -e.top);
                                var f = b.clientY + e;
                                e = f - t.rail.drag.y;
                                var g = b.clientX + d
                                  , h = g - t.rail.drag.x
                                  , i = t.rail.drag.st - e;
                                t.ishwscroll && t.opt.bouncescroll ? 0 > i ? i = Math.round(i / 2) : i > t.page.maxh && (i = t.page.maxh + Math.round((i - t.page.maxh) / 2)) : (0 > i && (f = i = 0),
                                i > t.page.maxh && (i = t.page.maxh,
                                f = 0));
                                var j;
                                if (t.railh && t.railh.scrollable && (j = t.isrtlmode ? h - t.rail.drag.sl : t.rail.drag.sl - h,
                                t.ishwscroll && t.opt.bouncescroll ? 0 > j ? j = Math.round(j / 2) : j > t.page.maxw && (j = t.page.maxw + Math.round((j - t.page.maxw) / 2)) : (0 > j && (g = j = 0),
                                j > t.page.maxw && (j = t.page.maxw,
                                g = 0))),
                                d = !1,
                                t.rail.drag.dl)
                                    d = !0,
                                    "v" == t.rail.drag.dl ? j = t.rail.drag.sl : "h" == t.rail.drag.dl && (i = t.rail.drag.st);
                                else {
                                    e = Math.abs(e);
                                    var h = Math.abs(h)
                                      , k = t.opt.directionlockdeadzone;
                                    if ("v" == t.rail.drag.ck) {
                                        if (e > k && h <= .3 * e)
                                            return t.rail.drag = !1,
                                            !0;
                                        h > k && (t.rail.drag.dl = "f",
                                        a("body").scrollTop(a("body").scrollTop()))
                                    } else if ("h" == t.rail.drag.ck) {
                                        if (h > k && e <= .3 * h)
                                            return t.rail.drag = !1,
                                            !0;
                                        e > k && (t.rail.drag.dl = "f",
                                        a("body").scrollLeft(a("body").scrollLeft()))
                                    }
                                }
                                if (t.synched("touchmove", function() {
                                    t.rail.drag && 2 == t.rail.drag.pt && (t.prepareTransition && t.prepareTransition(0),
                                    t.rail.scrollable && t.setScrollTop(i),
                                    t.scrollmom.update(g, f),
                                    t.railh && t.railh.scrollable ? (t.setScrollLeft(j),
                                    t.showCursor(i, j)) : t.showCursor(i),
                                    v.isie10 && document.selection.clear())
                                }),
                                v.ischrome && t.istouchcapable && (d = !1),
                                d)
                                    return t.cancelEvent(b)
                            } else if (1 == t.rail.drag.pt)
                                return t.onmousemove(b)
                        }
                    }
                    if (t.onmousedown = function(a, b) {
                        if (!t.rail.drag || 1 == t.rail.drag.pt) {
                            if (t.railslocked)
                                return t.cancelEvent(a);
                            t.cancelScroll(),
                            t.rail.drag = {
                                x: a.clientX,
                                y: a.clientY,
                                sx: t.scroll.x,
                                sy: t.scroll.y,
                                pt: 1,
                                hr: !!b
                            };
                            var c = t.getTarget(a);
                            return !t.ispage && v.hasmousecapture && c.setCapture(),
                            t.isiframe && !v.hasmousecapture && (t.saved.csspointerevents = t.doc.css("pointer-events"),
                            t.css(t.doc, {
                                "pointer-events": "none"
                            })),
                            t.hasmoving = !1,
                            t.cancelEvent(a)
                        }
                    }
                    ,
                    t.onmouseup = function(a) {
                        if (t.rail.drag)
                            return 1 != t.rail.drag.pt || (v.hasmousecapture && document.releaseCapture(),
                            t.isiframe && !v.hasmousecapture && t.doc.css("pointer-events", t.saved.csspointerevents),
                            t.rail.drag = !1,
                            t.hasmoving && t.triggerScrollEnd(),
                            t.cancelEvent(a))
                    }
                    ,
                    t.onmousemove = function(a) {
                        if (t.rail.drag && 1 == t.rail.drag.pt) {
                            if (v.ischrome && 0 == a.which)
                                return t.onmouseup(a);
                            if (t.cursorfreezed = !0,
                            t.hasmoving = !0,
                            t.rail.drag.hr) {
                                t.scroll.x = t.rail.drag.sx + (a.clientX - t.rail.drag.x),
                                0 > t.scroll.x && (t.scroll.x = 0);
                                var b = t.scrollvaluemaxw;
                                t.scroll.x > b && (t.scroll.x = b)
                            } else
                                t.scroll.y = t.rail.drag.sy + (a.clientY - t.rail.drag.y),
                                0 > t.scroll.y && (t.scroll.y = 0),
                                b = t.scrollvaluemax,
                                t.scroll.y > b && (t.scroll.y = b);
                            return t.synched("mousemove", function() {
                                t.rail.drag && 1 == t.rail.drag.pt && (t.showCursor(),
                                t.rail.drag.hr ? t.hasreversehr ? t.doScrollLeft(t.scrollvaluemaxw - Math.round(t.scroll.x * t.scrollratio.x), t.opt.cursordragspeed) : t.doScrollLeft(Math.round(t.scroll.x * t.scrollratio.x), t.opt.cursordragspeed) : t.doScrollTop(Math.round(t.scroll.y * t.scrollratio.y), t.opt.cursordragspeed))
                            }),
                            t.cancelEvent(a)
                        }
                    }
                    ,
                    v.cantouch || t.opt.touchbehavior)
                        t.onpreventclick = function(a) {
                            if (t.preventclick)
                                return t.preventclick.tg.onclick = t.preventclick.click,
                                t.preventclick = !1,
                                t.cancelEvent(a)
                        }
                        ,
                        t.bind(t.win, "mousedown", t.ontouchstart),
                        t.onclick = !v.isios && function(a) {
                            return !t.lastmouseup || (t.lastmouseup = !1,
                            t.cancelEvent(a))
                        }
                        ,
                        t.opt.grabcursorenabled && v.cursorgrabvalue && (t.css(t.ispage ? t.doc : t.win, {
                            cursor: v.cursorgrabvalue
                        }),
                        t.css(t.rail, {
                            cursor: v.cursorgrabvalue
                        }));
                    else {
                        var r = function(a) {
                            if (t.selectiondrag) {
                                if (a) {
                                    var b = t.win.outerHeight();
                                    a = a.pageY - t.selectiondrag.top,
                                    0 < a && a < b && (a = 0),
                                    a >= b && (a -= b),
                                    t.selectiondrag.df = a
                                }
                                0 != t.selectiondrag.df && (t.doScrollBy(2 * -Math.floor(t.selectiondrag.df / 6)),
                                t.debounced("doselectionscroll", function() {
                                    r()
                                }, 50))
                            }
                        };
                        t.hasTextSelected = "getSelection"in document ? function() {
                            return 0 < document.getSelection().rangeCount
                        }
                        : "selection"in document ? function() {
                            return "None" != document.selection.type
                        }
                        : function() {
                            return !1
                        }
                        ,
                        t.onselectionstart = function(a) {
                            t.ispage || (t.selectiondrag = t.win.offset())
                        }
                        ,
                        t.onselectionend = function(a) {
                            t.selectiondrag = !1
                        }
                        ,
                        t.onselectiondrag = function(a) {
                            t.selectiondrag && t.hasTextSelected() && t.debounced("selectionscroll", function() {
                                r(a)
                            }, 250)
                        }
                    }
                    v.hasw3ctouch ? (t.css(t.rail, {
                        "touch-action": "none"
                    }),
                    t.css(t.cursor, {
                        "touch-action": "none"
                    }),
                    t.bind(t.win, "pointerdown", t.ontouchstart),
                    t.bind(document, "pointerup", t.ontouchend),
                    t.bind(document, "pointermove", t.ontouchmove)) : v.hasmstouch ? (t.css(t.rail, {
                        "-ms-touch-action": "none"
                    }),
                    t.css(t.cursor, {
                        "-ms-touch-action": "none"
                    }),
                    t.bind(t.win, "MSPointerDown", t.ontouchstart),
                    t.bind(document, "MSPointerUp", t.ontouchend),
                    t.bind(document, "MSPointerMove", t.ontouchmove),
                    t.bind(t.cursor, "MSGestureHold", function(a) {
                        a.preventDefault()
                    }),
                    t.bind(t.cursor, "contextmenu", function(a) {
                        a.preventDefault()
                    })) : this.istouchcapable && (t.bind(t.win, "touchstart", t.ontouchstart),
                    t.bind(document, "touchend", t.ontouchend),
                    t.bind(document, "touchcancel", t.ontouchend),
                    t.bind(document, "touchmove", t.ontouchmove)),
                    (t.opt.cursordragontouch || !v.cantouch && !t.opt.touchbehavior) && (t.rail.css({
                        cursor: "default"
                    }),
                    t.railh && t.railh.css({
                        cursor: "default"
                    }),
                    t.jqbind(t.rail, "mouseenter", function() {
                        return !(!t.ispage && !t.win.is(":visible")) && (t.canshowonmouseevent && t.showCursor(),
                        void (t.rail.active = !0))
                    }),
                    t.jqbind(t.rail, "mouseleave", function() {
                        t.rail.active = !1,
                        t.rail.drag || t.hideCursor()
                    }),
                    t.opt.sensitiverail && (t.bind(t.rail, "click", function(a) {
                        t.doRailClick(a, !1, !1)
                    }),
                    t.bind(t.rail, "dblclick", function(a) {
                        t.doRailClick(a, !0, !1)
                    }),
                    t.bind(t.cursor, "click", function(a) {
                        t.cancelEvent(a)
                    }),
                    t.bind(t.cursor, "dblclick", function(a) {
                        t.cancelEvent(a)
                    })),
                    t.railh && (t.jqbind(t.railh, "mouseenter", function() {
                        return !(!t.ispage && !t.win.is(":visible")) && (t.canshowonmouseevent && t.showCursor(),
                        void (t.rail.active = !0))
                    }),
                    t.jqbind(t.railh, "mouseleave", function() {
                        t.rail.active = !1,
                        t.rail.drag || t.hideCursor()
                    }),
                    t.opt.sensitiverail && (t.bind(t.railh, "click", function(a) {
                        t.doRailClick(a, !1, !0)
                    }),
                    t.bind(t.railh, "dblclick", function(a) {
                        t.doRailClick(a, !0, !0)
                    }),
                    t.bind(t.cursorh, "click", function(a) {
                        t.cancelEvent(a)
                    }),
                    t.bind(t.cursorh, "dblclick", function(a) {
                        t.cancelEvent(a)
                    })))),
                    v.cantouch || t.opt.touchbehavior ? (t.bind(v.hasmousecapture ? t.win : document, "mouseup", t.ontouchend),
                    t.bind(document, "mousemove", t.ontouchmove),
                    t.onclick && t.bind(document, "click", t.onclick),
                    t.opt.cursordragontouch && (t.bind(t.cursor, "mousedown", t.onmousedown),
                    t.bind(t.cursor, "mouseup", t.onmouseup),
                    t.cursorh && t.bind(t.cursorh, "mousedown", function(a) {
                        t.onmousedown(a, !0)
                    }),
                    t.cursorh && t.bind(t.cursorh, "mouseup", t.onmouseup))) : (t.bind(v.hasmousecapture ? t.win : document, "mouseup", t.onmouseup),
                    t.bind(document, "mousemove", t.onmousemove),
                    t.onclick && t.bind(document, "click", t.onclick),
                    t.bind(t.cursor, "mousedown", t.onmousedown),
                    t.bind(t.cursor, "mouseup", t.onmouseup),
                    t.railh && (t.bind(t.cursorh, "mousedown", function(a) {
                        t.onmousedown(a, !0)
                    }),
                    t.bind(t.cursorh, "mouseup", t.onmouseup)),
                    !t.ispage && t.opt.enablescrollonselection && (t.bind(t.win[0], "mousedown", t.onselectionstart),
                    t.bind(document, "mouseup", t.onselectionend),
                    t.bind(t.cursor, "mouseup", t.onselectionend),
                    t.cursorh && t.bind(t.cursorh, "mouseup", t.onselectionend),
                    t.bind(document, "mousemove", t.onselectiondrag)),
                    t.zoom && (t.jqbind(t.zoom, "mouseenter", function() {
                        t.canshowonmouseevent && t.showCursor(),
                        t.rail.active = !0
                    }),
                    t.jqbind(t.zoom, "mouseleave", function() {
                        t.rail.active = !1,
                        t.rail.drag || t.hideCursor()
                    }))),
                    t.opt.enablemousewheel && (t.isiframe || t.bind(v.isie && t.ispage ? document : t.win, "mousewheel", t.onmousewheel),
                    t.bind(t.rail, "mousewheel", t.onmousewheel),
                    t.railh && t.bind(t.railh, "mousewheel", t.onmousewheelhr)),
                    t.ispage || v.cantouch || /HTML|^BODY/.test(t.win[0].nodeName) || (t.win.attr("tabindex") || t.win.attr({
                        tabindex: d++
                    }),
                    t.jqbind(t.win, "focus", function(a) {
                        b = t.getTarget(a).id || !0,
                        t.hasfocus = !0,
                        t.canshowonmouseevent && t.noticeCursor()
                    }),
                    t.jqbind(t.win, "blur", function(a) {
                        b = !1,
                        t.hasfocus = !1
                    }),
                    t.jqbind(t.win, "mouseenter", function(a) {
                        c = t.getTarget(a).id || !0,
                        t.hasmousefocus = !0,
                        t.canshowonmouseevent && t.noticeCursor()
                    }),
                    t.jqbind(t.win, "mouseleave", function() {
                        c = !1,
                        t.hasmousefocus = !1,
                        t.rail.drag || t.hideCursor()
                    }))
                }
                if (t.onkeypress = function(d) {
                    if (t.railslocked && 0 == t.page.maxh)
                        return !0;
                    d = d ? d : window.e;
                    var e = t.getTarget(d);
                    if (e && /INPUT|TEXTAREA|SELECT|OPTION/.test(e.nodeName) && (!e.getAttribute("type") && !e.type || !/submit|button|cancel/i.tp) || a(e).attr("contenteditable"))
                        return !0;
                    if (t.hasfocus || t.hasmousefocus && !b || t.ispage && !b && !c) {
                        if (e = d.keyCode,
                        t.railslocked && 27 != e)
                            return t.cancelEvent(d);
                        var f = d.ctrlKey || !1
                          , g = d.shiftKey || !1
                          , h = !1;
                        switch (e) {
                        case 38:
                        case 63233:
                            t.doScrollBy(72),
                            h = !0;
                            break;
                        case 40:
                        case 63235:
                            t.doScrollBy(-72),
                            h = !0;
                            break;
                        case 37:
                        case 63232:
                            t.railh && (f ? t.doScrollLeft(0) : t.doScrollLeftBy(72),
                            h = !0);
                            break;
                        case 39:
                        case 63234:
                            t.railh && (f ? t.doScrollLeft(t.page.maxw) : t.doScrollLeftBy(-72),
                            h = !0);
                            break;
                        case 33:
                        case 63276:
                            t.doScrollBy(t.view.h),
                            h = !0;
                            break;
                        case 34:
                        case 63277:
                            t.doScrollBy(-t.view.h),
                            h = !0;
                            break;
                        case 36:
                        case 63273:
                            t.railh && f ? t.doScrollPos(0, 0) : t.doScrollTo(0),
                            h = !0;
                            break;
                        case 35:
                        case 63275:
                            t.railh && f ? t.doScrollPos(t.page.maxw, t.page.maxh) : t.doScrollTo(t.page.maxh),
                            h = !0;
                            break;
                        case 32:
                            t.opt.spacebarenabled && (g ? t.doScrollBy(t.view.h) : t.doScrollBy(-t.view.h),
                            h = !0);
                            break;
                        case 27:
                            t.zoomactive && (t.doZoom(),
                            h = !0)
                        }
                        if (h)
                            return t.cancelEvent(d)
                    }
                }
                ,
                t.opt.enablekeyboard && t.bind(document, v.isopera && !v.isopera12 ? "keypress" : "keydown", t.onkeypress),
                t.bind(document, "keydown", function(a) {
                    a.ctrlKey && (t.wheelprevented = !0)
                }),
                t.bind(document, "keyup", function(a) {
                    a.ctrlKey || (t.wheelprevented = !1)
                }),
                t.bind(window, "blur", function(a) {
                    t.wheelprevented = !1
                }),
                t.bind(window, "resize", t.lazyResize),
                t.bind(window, "orientationchange", t.lazyResize),
                t.bind(window, "load", t.lazyResize),
                v.ischrome && !t.ispage && !t.haswrapper) {
                    var s = t.win.attr("style")
                      , h = parseFloat(t.win.css("width")) + 1;
                    t.win.css("width", h),
                    t.synched("chromefix", function() {
                        t.win.attr("style", s)
                    })
                }
                t.onAttributeChange = function(a) {
                    t.lazyResize(t.isieold ? 250 : 30)
                }
                ,
                !1 !== l && (t.observerbody = new l(function(b) {
                    if (b.forEach(function(b) {
                        if ("attributes" == b.type)
                            return a("body").hasClass("modal-open") ? t.hide() : t.show()
                    }),
                    document.body.scrollHeight != t.page.maxh)
                        return t.lazyResize(30)
                }
                ),
                t.observerbody.observe(document.body, {
                    childList: !0,
                    subtree: !0,
                    characterData: !1,
                    attributes: !0,
                    attributeFilter: ["class"]
                })),
                t.ispage || t.haswrapper || (!1 !== l ? (t.observer = new l(function(a) {
                    a.forEach(t.onAttributeChange)
                }
                ),
                t.observer.observe(t.win[0], {
                    childList: !0,
                    characterData: !1,
                    attributes: !0,
                    subtree: !1
                }),
                t.observerremover = new l(function(a) {
                    a.forEach(function(a) {
                        if (0 < a.removedNodes.length)
                            for (var b in a.removedNodes)
                                if (t && a.removedNodes[b] == t.win[0])
                                    return t.remove()
                    })
                }
                ),
                t.observerremover.observe(t.win[0].parentNode, {
                    childList: !0,
                    characterData: !1,
                    attributes: !1,
                    subtree: !1
                })) : (t.bind(t.win, v.isie && !v.isie9 ? "propertychange" : "DOMAttrModified", t.onAttributeChange),
                v.isie9 && t.win[0].attachEvent("onpropertychange", t.onAttributeChange),
                t.bind(t.win, "DOMNodeRemoved", function(a) {
                    a.target == t.win[0] && t.remove()
                }))),
                !t.ispage && t.opt.boxzoom && t.bind(window, "resize", t.resizeZoom),
                t.istextarea && t.bind(t.win, "mouseup", t.lazyResize),
                t.lazyResize(30)
            }
            if ("IFRAME" == this.doc[0].nodeName) {
                var u = function() {
                    t.iframexd = !1;
                    var b;
                    try {
                        b = "contentDocument"in this ? this.contentDocument : this.contentWindow.document
                    } catch (c) {
                        t.iframexd = !0,
                        b = !1
                    }
                    if (t.iframexd)
                        return "console"in window && console.log("NiceScroll error: policy restriced iframe"),
                        !0;
                    if (t.forcescreen = !0,
                    t.isiframe && (t.iframe = {
                        doc: a(b),
                        html: t.doc.contents().find("html")[0],
                        body: t.doc.contents().find("body")[0]
                    },
                    t.getContentSize = function() {
                        return {
                            w: Math.max(t.iframe.html.scrollWidth, t.iframe.body.scrollWidth),
                            h: Math.max(t.iframe.html.scrollHeight, t.iframe.body.scrollHeight)
                        }
                    }
                    ,
                    t.docscroll = a(t.iframe.body)),
                    !v.isios && t.opt.iframeautoresize && !t.isiframe) {
                        t.win.scrollTop(0),
                        t.doc.height("");
                        var d = Math.max(b.getElementsByTagName("html")[0].scrollHeight, b.body.scrollHeight);
                        t.doc.height(d)
                    }
                    t.lazyResize(30),
                    v.isie7 && t.css(a(t.iframe.html), {
                        "overflow-y": "hidden"
                    }),
                    t.css(a(t.iframe.body), {
                        "overflow-y": "hidden"
                    }),
                    v.isios && t.haswrapper && t.css(a(b.body), {
                        "-webkit-transform": "translate3d(0,0,0)"
                    }),
                    "contentWindow"in this ? t.bind(this.contentWindow, "scroll", t.onscroll) : t.bind(b, "scroll", t.onscroll),
                    t.opt.enablemousewheel && t.bind(b, "mousewheel", t.onmousewheel),
                    t.opt.enablekeyboard && t.bind(b, v.isopera ? "keypress" : "keydown", t.onkeypress),
                    (v.cantouch || t.opt.touchbehavior) && (t.bind(b, "mousedown", t.ontouchstart),
                    t.bind(b, "mousemove", function(a) {
                        return t.ontouchmove(a, !0)
                    }),
                    t.opt.grabcursorenabled && v.cursorgrabvalue && t.css(a(b.body), {
                        cursor: v.cursorgrabvalue
                    })),
                    t.bind(b, "mouseup", t.ontouchend),
                    t.zoom && (t.opt.dblclickzoom && t.bind(b, "dblclick", t.doZoom),
                    t.ongesturezoom && t.bind(b, "gestureend", t.ongesturezoom))
                };
                this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
                    u.call(t.doc[0], !1)
                }, 500),
                t.bind(this.doc, "load", u)
            }
        }
        ,
        this.showCursor = function(a, b) {
            if (t.cursortimeout && (clearTimeout(t.cursortimeout),
            t.cursortimeout = 0),
            t.rail) {
                if (t.autohidedom && (t.autohidedom.stop().css({
                    opacity: t.opt.cursoropacitymax
                }),
                t.cursoractive = !0),
                t.rail.drag && 1 == t.rail.drag.pt || ("undefined" != typeof a && !1 !== a && (t.scroll.y = Math.round(1 * a / t.scrollratio.y)),
                "undefined" != typeof b && (t.scroll.x = Math.round(1 * b / t.scrollratio.x))),
                t.cursor.css({
                    height: t.cursorheight,
                    top: t.scroll.y
                }),
                t.cursorh) {
                    var c = t.hasreversehr ? t.scrollvaluemaxw - t.scroll.x : t.scroll.x;
                    !t.rail.align && t.rail.visibility ? t.cursorh.css({
                        width: t.cursorwidth,
                        left: c + t.rail.width
                    }) : t.cursorh.css({
                        width: t.cursorwidth,
                        left: c
                    }),
                    t.cursoractive = !0
                }
                t.zoom && t.zoom.stop().css({
                    opacity: t.opt.cursoropacitymax
                })
            }
        }
        ,
        this.hideCursor = function(a) {
            t.cursortimeout || !t.rail || !t.autohidedom || t.hasmousefocus && "leave" == t.opt.autohidemode || (t.cursortimeout = setTimeout(function() {
                t.rail.active && t.showonmouseevent || (t.autohidedom.stop().animate({
                    opacity: t.opt.cursoropacitymin
                }),
                t.zoom && t.zoom.stop().animate({
                    opacity: t.opt.cursoropacitymin
                }),
                t.cursoractive = !1),
                t.cursortimeout = 0
            }, a || t.opt.hidecursordelay))
        }
        ,
        this.noticeCursor = function(a, b, c) {
            t.showCursor(b, c),
            t.rail.active || t.hideCursor(a)
        }
        ,
        this.getContentSize = t.ispage ? function() {
            return {
                w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
        }
        : t.haswrapper ? function() {
            return {
                w: t.doc.outerWidth() + parseInt(t.win.css("paddingLeft")) + parseInt(t.win.css("paddingRight")),
                h: t.doc.outerHeight() + parseInt(t.win.css("paddingTop")) + parseInt(t.win.css("paddingBottom"))
            }
        }
        : function() {
            return {
                w: t.docscroll[0].scrollWidth,
                h: t.docscroll[0].scrollHeight
            }
        }
        ,
        this.onResize = function(a, b) {
            if (!t || !t.win)
                return !1;
            if (!t.haswrapper && !t.ispage) {
                if ("none" == t.win.css("display"))
                    return t.visibility && t.hideRail().hideRailHr(),
                    !1;
                t.hidden || t.visibility || t.showRail().showRailHr()
            }
            var c = t.page.maxh
              , d = t.page.maxw
              , e = t.view.h
              , f = t.view.w;
            if (t.view = {
                w: t.ispage ? t.win.width() : parseInt(t.win[0].clientWidth),
                h: t.ispage ? t.win.height() : parseInt(t.win[0].clientHeight)
            },
            t.page = b ? b : t.getContentSize(),
            t.page.maxh = Math.max(0, t.page.h - t.view.h),
            t.page.maxw = Math.max(0, t.page.w - t.view.w),
            t.page.maxh == c && t.page.maxw == d && t.view.w == f && t.view.h == e) {
                if (t.ispage)
                    return t;
                if (c = t.win.offset(),
                t.lastposition && (d = t.lastposition,
                d.top == c.top && d.left == c.left))
                    return t;
                t.lastposition = c
            }
            return 0 == t.page.maxh ? (t.hideRail(),
            t.scrollvaluemax = 0,
            t.scroll.y = 0,
            t.scrollratio.y = 0,
            t.cursorheight = 0,
            t.setScrollTop(0),
            t.rail.scrollable = !1) : (t.page.maxh -= t.opt.railpadding.top + t.opt.railpadding.bottom,
            t.rail.scrollable = !0),
            0 == t.page.maxw ? (t.hideRailHr(),
            t.scrollvaluemaxw = 0,
            t.scroll.x = 0,
            t.scrollratio.x = 0,
            t.cursorwidth = 0,
            t.setScrollLeft(0),
            t.railh.scrollable = !1) : (t.page.maxw -= t.opt.railpadding.left + t.opt.railpadding.right,
            t.railh.scrollable = !0),
            t.railslocked = t.locked || 0 == t.page.maxh && 0 == t.page.maxw,
            t.railslocked ? (t.ispage || t.updateScrollBar(t.view),
            !1) : (t.hidden || t.visibility ? t.hidden || t.railh.visibility || t.showRailHr() : t.showRail().showRailHr(),
            t.istextarea && t.win.css("resize") && "none" != t.win.css("resize") && (t.view.h -= 20),
            t.cursorheight = Math.min(t.view.h, Math.round(t.view.h / t.page.h * t.view.h)),
            t.cursorheight = t.opt.cursorfixedheight ? t.opt.cursorfixedheight : Math.max(t.opt.cursorminheight, t.cursorheight),
            t.cursorwidth = Math.min(t.view.w, Math.round(t.view.w / t.page.w * t.view.w)),
            t.cursorwidth = t.opt.cursorfixedheight ? t.opt.cursorfixedheight : Math.max(t.opt.cursorminheight, t.cursorwidth),
            t.scrollvaluemax = t.view.h - t.cursorheight - t.cursor.hborder - (t.opt.railpadding.top + t.opt.railpadding.bottom),
            t.railh && (t.railh.width = 0 < t.page.maxh ? t.view.w - t.rail.width : t.view.w,
            t.scrollvaluemaxw = t.railh.width - t.cursorwidth - t.cursorh.wborder - (t.opt.railpadding.left + t.opt.railpadding.right)),
            t.ispage || t.updateScrollBar(t.view),
            t.scrollratio = {
                x: t.page.maxw / t.scrollvaluemaxw,
                y: t.page.maxh / t.scrollvaluemax
            },
            t.getScrollTop() > t.page.maxh ? t.doScrollTop(t.page.maxh) : (t.scroll.y = Math.round(t.getScrollTop() * (1 / t.scrollratio.y)),
            t.scroll.x = Math.round(t.getScrollLeft() * (1 / t.scrollratio.x)),
            t.cursoractive && t.noticeCursor()),
            t.scroll.y && 0 == t.getScrollTop() && t.doScrollTo(Math.floor(t.scroll.y * t.scrollratio.y)),
            t)
        }
        ,
        this.resize = t.onResize,
        this.lazyResize = function(a) {
            return a = isNaN(a) ? 30 : a,
            t.debounced("resize", t.resize, a),
            t
        }
        ,
        this.jqbind = function(b, c, d) {
            t.events.push({
                e: b,
                n: c,
                f: d,
                q: !0
            }),
            a(b).bind(c, d)
        }
        ,
        this.bind = function(a, b, c, d) {
            var e = "jquery"in a ? a[0] : a;
            "mousewheel" == b ? window.addEventListener || "onwheel"in document ? t._bind(e, "wheel", c, d || !1) : (a = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll",
            r(e, a, c, d || !1),
            "DOMMouseScroll" == a && r(e, "MozMousePixelScroll", c, d || !1)) : e.addEventListener ? (v.cantouch && /mouseup|mousedown|mousemove/.test(b) && t._bind(e, "mousedown" == b ? "touchstart" : "mouseup" == b ? "touchend" : "touchmove", function(a) {
                if (a.touches) {
                    if (2 > a.touches.length) {
                        var b = a.touches.length ? a.touches[0] : a;
                        b.original = a,
                        c.call(this, b)
                    }
                } else
                    a.changedTouches && (b = a.changedTouches[0],
                    b.original = a,
                    c.call(this, b))
            }, d || !1),
            t._bind(e, b, c, d || !1),
            v.cantouch && "mouseup" == b && t._bind(e, "touchcancel", c, d || !1)) : t._bind(e, b, function(a) {
                return (a = a || window.event || !1) && a.srcElement && (a.target = a.srcElement),
                "pageY"in a || (a.pageX = a.clientX + document.documentElement.scrollLeft,
                a.pageY = a.clientY + document.documentElement.scrollTop),
                !1 !== c.call(e, a) && !1 !== d || t.cancelEvent(a)
            })
        }
        ,
        v.haseventlistener ? (this._bind = function(a, b, c, d) {
            t.events.push({
                e: a,
                n: b,
                f: c,
                b: d,
                q: !1
            }),
            a.addEventListener(b, c, d || !1)
        }
        ,
        this.cancelEvent = function(a) {
            return !!a && (a = a.original ? a.original : a,
            a.preventDefault(),
            a.stopPropagation(),
            a.preventManipulation && a.preventManipulation(),
            !1)
        }
        ,
        this.stopPropagation = function(a) {
            return !!a && (a = a.original ? a.original : a,
            a.stopPropagation(),
            !1)
        }
        ,
        this._unbind = function(a, b, c, d) {
            a.removeEventListener(b, c, d)
        }
        ) : (this._bind = function(a, b, c, d) {
            t.events.push({
                e: a,
                n: b,
                f: c,
                b: d,
                q: !1
            }),
            a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
        }
        ,
        this.cancelEvent = function(a) {
            return !!(a = window.event || !1) && (a.cancelBubble = !0,
            a.cancel = !0,
            a.returnValue = !1)
        }
        ,
        this.stopPropagation = function(a) {
            return !!(a = window.event || !1) && (a.cancelBubble = !0,
            !1)
        }
        ,
        this._unbind = function(a, b, c, d) {
            a.detachEvent ? a.detachEvent("on" + b, c) : a["on" + b] = !1
        }
        ),
        this.unbindAll = function() {
            for (var a = 0; a < t.events.length; a++) {
                var b = t.events[a];
                b.q ? b.e.unbind(b.n, b.f) : t._unbind(b.e, b.n, b.f, b.b)
            }
        }
        ,
        this.showRail = function() {
            return 0 == t.page.maxh || !t.ispage && "none" == t.win.css("display") || (t.visibility = !0,
            t.rail.visibility = !0,
            t.rail.css("display", "block")),
            t
        }
        ,
        this.showRailHr = function() {
            return t.railh ? (0 == t.page.maxw || !t.ispage && "none" == t.win.css("display") || (t.railh.visibility = !0,
            t.railh.css("display", "block")),
            t) : t
        }
        ,
        this.hideRail = function() {
            return t.visibility = !1,
            t.rail.visibility = !1,
            t.rail.css("display", "none"),
            t
        }
        ,
        this.hideRailHr = function() {
            return t.railh ? (t.railh.visibility = !1,
            t.railh.css("display", "none"),
            t) : t
        }
        ,
        this.show = function() {
            return t.hidden = !1,
            t.railslocked = !1,
            t.showRail().showRailHr()
        }
        ,
        this.hide = function() {
            return t.hidden = !0,
            t.railslocked = !0,
            t.hideRail().hideRailHr()
        }
        ,
        this.toggle = function() {
            return t.hidden ? t.show() : t.hide()
        }
        ,
        this.remove = function() {
            t.stop(),
            t.cursortimeout && clearTimeout(t.cursortimeout),
            t.doZoomOut(),
            t.unbindAll(),
            v.isie9 && t.win[0].detachEvent("onpropertychange", t.onAttributeChange),
            !1 !== t.observer && t.observer.disconnect(),
            !1 !== t.observerremover && t.observerremover.disconnect(),
            !1 !== t.observerbody && t.observerbody.disconnect(),
            t.events = null,
            t.cursor && t.cursor.remove(),
            t.cursorh && t.cursorh.remove(),
            t.rail && t.rail.remove(),
            t.railh && t.railh.remove(),
            t.zoom && t.zoom.remove();
            for (var b = 0; b < t.saved.css.length; b++) {
                var c = t.saved.css[b];
                c[0].css(c[1], "undefined" == typeof c[2] ? "" : c[2])
            }
            t.saved = !1,
            t.me.data("__nicescroll", "");
            var d = a.nicescroll;
            d.each(function(a) {
                if (this && this.id === t.id) {
                    delete d[a];
                    for (var b = ++a; b < d.length; b++,
                    a++)
                        d[a] = d[b];
                    d.length--,
                    d.length && delete d[d.length]
                }
            });
            for (var e in t)
                t[e] = null,
                delete t[e];
            t = null
        }
        ,
        this.scrollstart = function(a) {
            return this.onscrollstart = a,
            t
        }
        ,
        this.scrollend = function(a) {
            return this.onscrollend = a,
            t
        }
        ,
        this.scrollcancel = function(a) {
            return this.onscrollcancel = a,
            t
        }
        ,
        this.zoomin = function(a) {
            return this.onzoomin = a,
            t
        }
        ,
        this.zoomout = function(a) {
            return this.onzoomout = a,
            t
        }
        ,
        this.isScrollable = function(b) {
            if (b = b.target ? b.target : b,
            "OPTION" == b.nodeName)
                return !0;
            for (; b && 1 == b.nodeType && !/^BODY|HTML/.test(b.nodeName); ) {
                var c = a(b)
                  , c = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
                if (/scroll|auto/.test(c))
                    return b.clientHeight != b.scrollHeight;
                b = !!b.parentNode && b.parentNode
            }
            return !1
        }
        ,
        this.getViewport = function(b) {
            for (b = !(!b || !b.parentNode) && b.parentNode; b && 1 == b.nodeType && !/^BODY|HTML/.test(b.nodeName); ) {
                var c = a(b);
                if (/fixed|absolute/.test(c.css("position")))
                    return c;
                var d = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
                if (/scroll|auto/.test(d) && b.clientHeight != b.scrollHeight || 0 < c.getNiceScroll().length)
                    return c;
                b = !!b.parentNode && b.parentNode
            }
            return !1
        }
        ,
        this.triggerScrollEnd = function() {
            if (t.onscrollend) {
                var a = t.getScrollLeft()
                  , b = t.getScrollTop();
                t.onscrollend.call(t, {
                    type: "scrollend",
                    current: {
                        x: a,
                        y: b
                    },
                    end: {
                        x: a,
                        y: b
                    }
                })
            }
        }
        ,
        this.onmousewheel = function(a) {
            if (!t.wheelprevented) {
                if (t.railslocked)
                    return t.debounced("checkunlock", t.resize, 250),
                    !0;
                if (t.rail.drag)
                    return t.cancelEvent(a);
                if ("auto" == t.opt.oneaxismousemode && 0 != a.deltaX && (t.opt.oneaxismousemode = !1),
                t.opt.oneaxismousemode && 0 == a.deltaX && !t.rail.scrollable)
                    return !t.railh || !t.railh.scrollable || t.onmousewheelhr(a);
                var b = +new Date
                  , c = !1;
                return t.opt.preservenativescrolling && t.checkarea + 600 < b && (t.nativescrollingarea = t.isScrollable(a),
                c = !0),
                t.checkarea = b,
                !!t.nativescrollingarea || ((a = s(a, !1, c)) && (t.checkarea = 0),
                a)
            }
        }
        ,
        this.onmousewheelhr = function(a) {
            if (!t.wheelprevented) {
                if (t.railslocked || !t.railh.scrollable)
                    return !0;
                if (t.rail.drag)
                    return t.cancelEvent(a);
                var b = +new Date
                  , c = !1;
                return t.opt.preservenativescrolling && t.checkarea + 600 < b && (t.nativescrollingarea = t.isScrollable(a),
                c = !0),
                t.checkarea = b,
                !!t.nativescrollingarea || (t.railslocked ? t.cancelEvent(a) : s(a, !0, c))
            }
        }
        ,
        this.stop = function() {
            return t.cancelScroll(),
            t.scrollmon && t.scrollmon.stop(),
            t.cursorfreezed = !1,
            t.scroll.y = Math.round(t.getScrollTop() * (1 / t.scrollratio.y)),
            t.noticeCursor(),
            t
        }
        ,
        this.getTransitionSpeed = function(a) {
            var b = Math.round(10 * t.opt.scrollspeed);
            return a = Math.min(b, Math.round(a / 20 * t.opt.scrollspeed)),
            20 < a ? a : 0
        }
        ,
        t.opt.smoothscroll ? t.ishwscroll && v.hastransition && t.opt.usetransition && t.opt.smoothscroll ? (this.prepareTransition = function(a, b) {
            var c = b ? 20 < a ? a : 0 : t.getTransitionSpeed(a)
              , d = c ? v.prefixstyle + "transform " + c + "ms ease-out" : "";
            return t.lasttransitionstyle && t.lasttransitionstyle == d || (t.lasttransitionstyle = d,
            t.doc.css(v.transitionstyle, d)),
            c
        }
        ,
        this.doScrollLeft = function(a, b) {
            var c = t.scrollrunning ? t.newscrolly : t.getScrollTop();
            t.doScrollPos(a, c, b)
        }
        ,
        this.doScrollTop = function(a, b) {
            var c = t.scrollrunning ? t.newscrollx : t.getScrollLeft();
            t.doScrollPos(c, a, b)
        }
        ,
        this.doScrollPos = function(a, b, c) {
            var d = t.getScrollTop()
              , e = t.getScrollLeft();
            return (0 > (t.newscrolly - d) * (b - d) || 0 > (t.newscrollx - e) * (a - e)) && t.cancelScroll(),
            0 == t.opt.bouncescroll && (0 > b ? b = 0 : b > t.page.maxh && (b = t.page.maxh),
            0 > a ? a = 0 : a > t.page.maxw && (a = t.page.maxw)),
            (!t.scrollrunning || a != t.newscrollx || b != t.newscrolly) && (t.newscrolly = b,
            t.newscrollx = a,
            t.newscrollspeed = c || !1,
            !t.timer && void (t.timer = setTimeout(function() {
                var c, d, e = t.getScrollTop(), f = t.getScrollLeft();
                c = a - f,
                d = b - e,
                c = Math.round(Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2))),
                c = t.newscrollspeed && 1 < t.newscrollspeed ? t.newscrollspeed : t.getTransitionSpeed(c),
                t.newscrollspeed && 1 >= t.newscrollspeed && (c *= t.newscrollspeed),
                t.prepareTransition(c, !0),
                t.timerscroll && t.timerscroll.tm && clearInterval(t.timerscroll.tm),
                0 < c && (!t.scrollrunning && t.onscrollstart && t.onscrollstart.call(t, {
                    type: "scrollstart",
                    current: {
                        x: f,
                        y: e
                    },
                    request: {
                        x: a,
                        y: b
                    },
                    end: {
                        x: t.newscrollx,
                        y: t.newscrolly
                    },
                    speed: c
                }),
                v.transitionend ? t.scrollendtrapped || (t.scrollendtrapped = !0,
                t.bind(t.doc, v.transitionend, t.onScrollTransitionEnd, !1)) : (t.scrollendtrapped && clearTimeout(t.scrollendtrapped),
                t.scrollendtrapped = setTimeout(t.onScrollTransitionEnd, c)),
                t.timerscroll = {
                    bz: new x(e,t.newscrolly,c,0,0,.58,1),
                    bh: new x(f,t.newscrollx,c,0,0,.58,1)
                },
                t.cursorfreezed || (t.timerscroll.tm = setInterval(function() {
                    t.showCursor(t.getScrollTop(), t.getScrollLeft())
                }, 60))),
                t.synched("doScroll-set", function() {
                    t.timer = 0,
                    t.scrollendtrapped && (t.scrollrunning = !0),
                    t.setScrollTop(t.newscrolly),
                    t.setScrollLeft(t.newscrollx),
                    t.scrollendtrapped || t.onScrollTransitionEnd()
                })
            }, 50)))
        }
        ,
        this.cancelScroll = function() {
            if (!t.scrollendtrapped)
                return !0;
            var a = t.getScrollTop()
              , b = t.getScrollLeft();
            return t.scrollrunning = !1,
            v.transitionend || clearTimeout(v.transitionend),
            t.scrollendtrapped = !1,
            t._unbind(t.doc[0], v.transitionend, t.onScrollTransitionEnd),
            t.prepareTransition(0),
            t.setScrollTop(a),
            t.railh && t.setScrollLeft(b),
            t.timerscroll && t.timerscroll.tm && clearInterval(t.timerscroll.tm),
            t.timerscroll = !1,
            t.cursorfreezed = !1,
            t.showCursor(a, b),
            t
        }
        ,
        this.onScrollTransitionEnd = function() {
            t.scrollendtrapped && t._unbind(t.doc[0], v.transitionend, t.onScrollTransitionEnd),
            t.scrollendtrapped = !1,
            t.prepareTransition(0),
            t.timerscroll && t.timerscroll.tm && clearInterval(t.timerscroll.tm),
            t.timerscroll = !1;
            var a = t.getScrollTop()
              , b = t.getScrollLeft();
            return t.setScrollTop(a),
            t.railh && t.setScrollLeft(b),
            t.noticeCursor(!1, a, b),
            t.cursorfreezed = !1,
            0 > a ? a = 0 : a > t.page.maxh && (a = t.page.maxh),
            0 > b ? b = 0 : b > t.page.maxw && (b = t.page.maxw),
            a != t.newscrolly || b != t.newscrollx ? t.doScrollPos(b, a, t.opt.snapbackspeed) : (t.onscrollend && t.scrollrunning && t.triggerScrollEnd(),
            void (t.scrollrunning = !1))
        }
        ) : (this.doScrollLeft = function(a, b) {
            var c = t.scrollrunning ? t.newscrolly : t.getScrollTop();
            t.doScrollPos(a, c, b)
        }
        ,
        this.doScrollTop = function(a, b) {
            var c = t.scrollrunning ? t.newscrollx : t.getScrollLeft();
            t.doScrollPos(c, a, b)
        }
        ,
        this.doScrollPos = function(a, b, c) {
            function d() {
                if (t.cancelAnimationFrame)
                    return !0;
                if (t.scrollrunning = !0,
                l = 1 - l)
                    return t.timer = h(d) || 1;
                var a, b, c = 0, e = b = t.getScrollTop();
                t.dst.ay ? (e = t.bzscroll ? t.dst.py + t.bzscroll.getNow() * t.dst.ay : t.newscrolly,
                a = e - b,
                (0 > a && e < t.newscrolly || 0 < a && e > t.newscrolly) && (e = t.newscrolly),
                t.setScrollTop(e),
                e == t.newscrolly && (c = 1)) : c = 1,
                b = a = t.getScrollLeft(),
                t.dst.ax ? (b = t.bzscroll ? t.dst.px + t.bzscroll.getNow() * t.dst.ax : t.newscrollx,
                a = b - a,
                (0 > a && b < t.newscrollx || 0 < a && b > t.newscrollx) && (b = t.newscrollx),
                t.setScrollLeft(b),
                b == t.newscrollx && (c += 1)) : c += 1,
                2 == c ? (t.timer = 0,
                t.cursorfreezed = !1,
                t.bzscroll = !1,
                t.scrollrunning = !1,
                0 > e ? e = 0 : e > t.page.maxh && (e = t.page.maxh),
                0 > b ? b = 0 : b > t.page.maxw && (b = t.page.maxw),
                b != t.newscrollx || e != t.newscrolly ? t.doScrollPos(b, e) : t.onscrollend && t.triggerScrollEnd()) : t.timer = h(d) || 1
            }
            if (b = "undefined" == typeof b || !1 === b ? t.getScrollTop(!0) : b,
            t.timer && t.newscrolly == b && t.newscrollx == a)
                return !0;
            t.timer && i(t.timer),
            t.timer = 0;
            var e = t.getScrollTop()
              , f = t.getScrollLeft();
            (0 > (t.newscrolly - e) * (b - e) || 0 > (t.newscrollx - f) * (a - f)) && t.cancelScroll(),
            t.newscrolly = b,
            t.newscrollx = a,
            t.bouncescroll && t.rail.visibility || (0 > t.newscrolly ? t.newscrolly = 0 : t.newscrolly > t.page.maxh && (t.newscrolly = t.page.maxh)),
            t.bouncescroll && t.railh.visibility || (0 > t.newscrollx ? t.newscrollx = 0 : t.newscrollx > t.page.maxw && (t.newscrollx = t.page.maxw)),
            t.dst = {},
            t.dst.x = a - f,
            t.dst.y = b - e,
            t.dst.px = f,
            t.dst.py = e;
            var g = Math.round(Math.sqrt(Math.pow(t.dst.x, 2) + Math.pow(t.dst.y, 2)));
            t.dst.ax = t.dst.x / g,
            t.dst.ay = t.dst.y / g;
            var j = 0
              , k = g;
            if (0 == t.dst.x ? (j = e,
            k = b,
            t.dst.ay = 1,
            t.dst.py = 0) : 0 == t.dst.y && (j = f,
            k = a,
            t.dst.ax = 1,
            t.dst.px = 0),
            g = t.getTransitionSpeed(g),
            c && 1 >= c && (g *= c),
            t.bzscroll = 0 < g && (t.bzscroll ? t.bzscroll.update(k, g) : new x(j,k,g,0,1,0,1)),
            !t.timer) {
                (e == t.page.maxh && b >= t.page.maxh || f == t.page.maxw && a >= t.page.maxw) && t.checkContentSize();
                var l = 1;
                t.cancelAnimationFrame = !1,
                t.timer = 1,
                t.onscrollstart && !t.scrollrunning && t.onscrollstart.call(t, {
                    type: "scrollstart",
                    current: {
                        x: f,
                        y: e
                    },
                    request: {
                        x: a,
                        y: b
                    },
                    end: {
                        x: t.newscrollx,
                        y: t.newscrolly
                    },
                    speed: g
                }),
                d(),
                (e == t.page.maxh && b >= e || f == t.page.maxw && a >= f) && t.checkContentSize(),
                t.noticeCursor()
            }
        }
        ,
        this.cancelScroll = function() {
            return t.timer && i(t.timer),
            t.timer = 0,
            t.bzscroll = !1,
            t.scrollrunning = !1,
            t
        }
        ) : (this.doScrollLeft = function(a, b) {
            var c = t.getScrollTop();
            t.doScrollPos(a, c, b)
        }
        ,
        this.doScrollTop = function(a, b) {
            var c = t.getScrollLeft();
            t.doScrollPos(c, a, b)
        }
        ,
        this.doScrollPos = function(a, b, c) {
            var d = a > t.page.maxw ? t.page.maxw : a;
            0 > d && (d = 0);
            var e = b > t.page.maxh ? t.page.maxh : b;
            0 > e && (e = 0),
            t.synched("scroll", function() {
                t.setScrollTop(e),
                t.setScrollLeft(d)
            })
        }
        ,
        this.cancelScroll = function() {}
        ),
        this.doScrollBy = function(a, b) {
            var c = 0
              , c = b ? Math.floor((t.scroll.y - a) * t.scrollratio.y) : (t.timer ? t.newscrolly : t.getScrollTop(!0)) - a;
            if (t.bouncescroll) {
                var d = Math.round(t.view.h / 2);
                c < -d ? c = -d : c > t.page.maxh + d && (c = t.page.maxh + d)
            }
            return t.cursorfreezed = !1,
            d = t.getScrollTop(!0),
            0 > c && 0 >= d ? t.noticeCursor() : c > t.page.maxh && d >= t.page.maxh ? (t.checkContentSize(),
            t.noticeCursor()) : void t.doScrollTop(c)
        }
        ,
        this.doScrollLeftBy = function(a, b) {
            var c = 0
              , c = b ? Math.floor((t.scroll.x - a) * t.scrollratio.x) : (t.timer ? t.newscrollx : t.getScrollLeft(!0)) - a;
            if (t.bouncescroll) {
                var d = Math.round(t.view.w / 2);
                c < -d ? c = -d : c > t.page.maxw + d && (c = t.page.maxw + d)
            }
            return t.cursorfreezed = !1,
            d = t.getScrollLeft(!0),
            0 > c && 0 >= d || c > t.page.maxw && d >= t.page.maxw ? t.noticeCursor() : void t.doScrollLeft(c)
        }
        ,
        this.doScrollTo = function(a, b) {
            b && Math.round(a * t.scrollratio.y),
            t.cursorfreezed = !1,
            t.doScrollTop(a)
        }
        ,
        this.checkContentSize = function() {
            var a = t.getContentSize();
            a.h == t.page.h && a.w == t.page.w || t.resize(!1, a)
        }
        ,
        t.onscroll = function(a) {
            t.rail.drag || t.cursorfreezed || t.synched("scroll", function() {
                t.scroll.y = Math.round(t.getScrollTop() * (1 / t.scrollratio.y)),
                t.railh && (t.scroll.x = Math.round(t.getScrollLeft() * (1 / t.scrollratio.x))),
                t.noticeCursor()
            })
        }
        ,
        t.bind(t.docscroll, "scroll", t.onscroll),
        this.doZoomIn = function(b) {
            if (!t.zoomactive) {
                t.zoomactive = !0,
                t.zoomrestore = {
                    style: {}
                };
                var c, d = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "), e = t.win[0].style;
                for (c in d) {
                    var g = d[c];
                    t.zoomrestore.style[g] = "undefined" != typeof e[g] ? e[g] : ""
                }
                return t.zoomrestore.style.width = t.win.css("width"),
                t.zoomrestore.style.height = t.win.css("height"),
                t.zoomrestore.padding = {
                    w: t.win.outerWidth() - t.win.width(),
                    h: t.win.outerHeight() - t.win.height()
                },
                v.isios4 && (t.zoomrestore.scrollTop = a(window).scrollTop(),
                a(window).scrollTop(0)),
                t.win.css({
                    position: v.isios4 ? "absolute" : "fixed",
                    top: 0,
                    left: 0,
                    "z-index": f + 100,
                    margin: "0px"
                }),
                d = t.win.css("backgroundColor"),
                ("" == d || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(d)) && t.win.css("backgroundColor", "#fff"),
                t.rail.css({
                    "z-index": f + 101
                }),
                t.zoom.css({
                    "z-index": f + 102
                }),
                t.zoom.css("backgroundPosition", "0px -18px"),
                t.resizeZoom(),
                t.onzoomin && t.onzoomin.call(t),
                t.cancelEvent(b)
            }
        }
        ,
        this.doZoomOut = function(b) {
            if (t.zoomactive)
                return t.zoomactive = !1,
                t.win.css("margin", ""),
                t.win.css(t.zoomrestore.style),
                v.isios4 && a(window).scrollTop(t.zoomrestore.scrollTop),
                t.rail.css({
                    "z-index": t.zindex
                }),
                t.zoom.css({
                    "z-index": t.zindex
                }),
                t.zoomrestore = !1,
                t.zoom.css("backgroundPosition", "0px 0px"),
                t.onResize(),
                t.onzoomout && t.onzoomout.call(t),
                t.cancelEvent(b)
        }
        ,
        this.doZoom = function(a) {
            return t.zoomactive ? t.doZoomOut(a) : t.doZoomIn(a)
        }
        ,
        this.resizeZoom = function() {
            if (t.zoomactive) {
                var b = t.getScrollTop();
                t.win.css({
                    width: a(window).width() - t.zoomrestore.padding.w + "px",
                    height: a(window).height() - t.zoomrestore.padding.h + "px"
                }),
                t.onResize(),
                t.setScrollTop(Math.min(t.page.maxh, b))
            }
        }
        ,
        this.init(),
        a.nicescroll.push(this)
    }
      , q = function(a) {
        var b = this;
        this.nc = a,
        this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0,
        this.snapy = this.snapx = !1,
        this.demuly = this.demulx = 0,
        this.lastscrolly = this.lastscrollx = -1,
        this.timer = this.chky = this.chkx = 0,
        this.time = function() {
            return +new Date
        }
        ,
        this.reset = function(a, c) {
            b.stop();
            var d = b.time();
            b.steptime = 0,
            b.lasttime = d,
            b.speedx = 0,
            b.speedy = 0,
            b.lastx = a,
            b.lasty = c,
            b.lastscrollx = -1,
            b.lastscrolly = -1
        }
        ,
        this.update = function(a, c) {
            var d = b.time();
            b.steptime = d - b.lasttime,
            b.lasttime = d;
            var d = c - b.lasty
              , e = a - b.lastx
              , f = b.nc.getScrollTop()
              , g = b.nc.getScrollLeft()
              , f = f + d
              , g = g + e;
            b.snapx = 0 > g || g > b.nc.page.maxw,
            b.snapy = 0 > f || f > b.nc.page.maxh,
            b.speedx = e,
            b.speedy = d,
            b.lastx = a,
            b.lasty = c
        }
        ,
        this.stop = function() {
            b.nc.unsynched("domomentum2d"),
            b.timer && clearTimeout(b.timer),
            b.timer = 0,
            b.lastscrollx = -1,
            b.lastscrolly = -1
        }
        ,
        this.doSnapy = function(a, c) {
            var d = !1;
            0 > c ? (c = 0,
            d = !0) : c > b.nc.page.maxh && (c = b.nc.page.maxh,
            d = !0),
            0 > a ? (a = 0,
            d = !0) : a > b.nc.page.maxw && (a = b.nc.page.maxw,
            d = !0),
            d ? b.nc.doScrollPos(a, c, b.nc.opt.snapbackspeed) : b.nc.triggerScrollEnd()
        }
        ,
        this.doMomentum = function(a) {
            var c = b.time()
              , d = a ? c + a : b.lasttime;
            a = b.nc.getScrollLeft();
            var e = b.nc.getScrollTop()
              , f = b.nc.page.maxh
              , g = b.nc.page.maxw;
            if (b.speedx = 0 < g ? Math.min(60, b.speedx) : 0,
            b.speedy = 0 < f ? Math.min(60, b.speedy) : 0,
            d = d && 60 >= c - d,
            (0 > e || e > f || 0 > a || a > g) && (d = !1),
            a = !(!b.speedx || !d) && b.speedx,
            b.speedy && d && b.speedy || a) {
                var h = Math.max(16, b.steptime);
                50 < h && (a = h / 50,
                b.speedx *= a,
                b.speedy *= a,
                h = 50),
                b.demulxy = 0,
                b.lastscrollx = b.nc.getScrollLeft(),
                b.chkx = b.lastscrollx,
                b.lastscrolly = b.nc.getScrollTop(),
                b.chky = b.lastscrolly;
                var i = b.lastscrollx
                  , j = b.lastscrolly
                  , k = function() {
                    var a = 600 < b.time() - c ? .04 : .02;
                    b.speedx && (i = Math.floor(b.lastscrollx - b.speedx * (1 - b.demulxy)),
                    b.lastscrollx = i,
                    0 > i || i > g) && (a = .1),
                    b.speedy && (j = Math.floor(b.lastscrolly - b.speedy * (1 - b.demulxy)),
                    b.lastscrolly = j,
                    0 > j || j > f) && (a = .1),
                    b.demulxy = Math.min(1, b.demulxy + a),
                    b.nc.synched("domomentum2d", function() {
                        b.speedx && (b.nc.getScrollLeft() != b.chkx && b.stop(),
                        b.chkx = i,
                        b.nc.setScrollLeft(i)),
                        b.speedy && (b.nc.getScrollTop() != b.chky && b.stop(),
                        b.chky = j,
                        b.nc.setScrollTop(j)),
                        b.timer || (b.nc.hideCursor(),
                        b.doSnapy(i, j))
                    }),
                    1 > b.demulxy ? b.timer = setTimeout(k, h) : (b.stop(),
                    b.nc.hideCursor(),
                    b.doSnapy(i, j))
                };
                k()
            } else
                b.doSnapy(b.nc.getScrollLeft(), b.nc.getScrollTop())
        }
    }
      , r = a.fn.scrollTop;
    a.cssHooks.pageYOffset = {
        get: function(b, c, d) {
            return (c = a.data(b, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollTop() : r.call(b)
        },
        set: function(b, c) {
            var d = a.data(b, "__nicescroll") || !1;
            return d && d.ishwscroll ? d.setScrollTop(parseInt(c)) : r.call(b, c),
            this
        }
    },
    a.fn.scrollTop = function(b) {
        if ("undefined" == typeof b) {
            var c = !!this[0] && (a.data(this[0], "__nicescroll") || !1);
            return c && c.ishwscroll ? c.getScrollTop() : r.call(this)
        }
        return this.each(function() {
            var c = a.data(this, "__nicescroll") || !1;
            c && c.ishwscroll ? c.setScrollTop(parseInt(b)) : r.call(a(this), b)
        })
    }
    ;
    var s = a.fn.scrollLeft;
    a.cssHooks.pageXOffset = {
        get: function(b, c, d) {
            return (c = a.data(b, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollLeft() : s.call(b)
        },
        set: function(b, c) {
            var d = a.data(b, "__nicescroll") || !1;
            return d && d.ishwscroll ? d.setScrollLeft(parseInt(c)) : s.call(b, c),
            this
        }
    },
    a.fn.scrollLeft = function(b) {
        if ("undefined" == typeof b) {
            var c = !!this[0] && (a.data(this[0], "__nicescroll") || !1);
            return c && c.ishwscroll ? c.getScrollLeft() : s.call(this)
        }
        return this.each(function() {
            var c = a.data(this, "__nicescroll") || !1;
            c && c.ishwscroll ? c.setScrollLeft(parseInt(b)) : s.call(a(this), b)
        })
    }
    ;
    var t = function(b) {
        var c = this;
        if (this.length = 0,
        this.name = "nicescrollarray",
        this.each = function(a) {
            for (var b = 0, d = 0; b < c.length; b++)
                a.call(c[b], d++);
            return c
        }
        ,
        this.push = function(a) {
            c[c.length] = a,
            c.length++
        }
        ,
        this.eq = function(a) {
            return c[a]
        }
        ,
        b)
            for (var d = 0; d < b.length; d++) {
                var e = a.data(b[d], "__nicescroll") || !1;
                e && (this[this.length] = e,
                this.length++)
            }
        return this
    };
    !function(a, b, c) {
        for (var d = 0; d < b.length; d++)
            c(a, b[d])
    }(t.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function(a, b) {
        a[b] = function() {
            var a = arguments;
            return this.each(function() {
                this[b].apply(this, a)
            })
        }
    }),
    a.fn.getNiceScroll = function(b) {
        return "undefined" == typeof b ? new t(this) : this[b] && a.data(this[b], "__nicescroll") || !1
    }
    ,
    a.extend(a.expr[":"], {
        nicescroll: function(b) {
            return !!a.data(b, "__nicescroll")
        }
    }),
    a.fn.niceScroll = function(b, c) {
        "undefined" != typeof c || "object" != typeof b || "jquery"in b || (c = b,
        b = !1),
        c = a.extend({}, c);
        var d = new t;
        "undefined" == typeof c && (c = {}),
        b && (c.doc = a(b),
        c.win = a(this));
        var e = !("doc"in c);
        return e || "win"in c || (c.win = a(this)),
        this.each(function() {
            var b = a(this).data("__nicescroll") || !1;
            b || (c.doc = e ? a(this) : c.doc,
            b = new p(c,a(this)),
            a(this).data("__nicescroll", b)),
            d.push(b)
        }),
        1 == d.length ? d[0] : d
    }
    ,
    window.NiceScroll = {
        getjQuery: function() {
            return a
        }
    },
    a.nicescroll || (a.nicescroll = new t,
    a.nicescroll.options = m)
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var a = document.documentElement
      , b = window
      , c = function(c, d) {
        var e = "x" === d ? "Width" : "Height"
          , f = "scroll" + e
          , g = "client" + e
          , h = document.body;
        return c === b || c === a || c === h ? Math.max(a[f], h[f]) - (b["inner" + e] || Math.max(a[g], h[g])) : c[f] - c["offset" + e]
    }
      , d = _gsScope._gsDefine.plugin({
        propName: "scrollTo",
        API: 2,
        version: "1.7.4",
        init: function(a, d, e) {
            return this._wdw = a === b,
            this._target = a,
            this._tween = e,
            "object" != typeof d && (d = {
                y: d
            }),
            this.vars = d,
            this._autoKill = d.autoKill !== !1,
            this.x = this.xPrev = this.getX(),
            this.y = this.yPrev = this.getY(),
            null != d.x ? (this._addTween(this, "x", this.x, "max" === d.x ? c(a, "x") : d.x, "scrollTo_x", !0),
            this._overwriteProps.push("scrollTo_x")) : this.skipX = !0,
            null != d.y ? (this._addTween(this, "y", this.y, "max" === d.y ? c(a, "y") : d.y, "scrollTo_y", !0),
            this._overwriteProps.push("scrollTo_y")) : this.skipY = !0,
            !0
        },
        set: function(a) {
            this._super.setRatio.call(this, a);
            var d = this._wdw || !this.skipX ? this.getX() : this.xPrev
              , e = this._wdw || !this.skipY ? this.getY() : this.yPrev
              , f = e - this.yPrev
              , g = d - this.xPrev;
            this._autoKill && (!this.skipX && (g > 7 || -7 > g) && c(this._target, "x") > d && (this.skipX = !0),
            !this.skipY && (f > 7 || -7 > f) && c(this._target, "y") > e && (this.skipY = !0),
            this.skipX && this.skipY && (this._tween.kill(),
            this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
            this._wdw ? b.scrollTo(this.skipX ? d : this.x, this.skipY ? e : this.y) : (this.skipY || (this._target.scrollTop = this.y),
            this.skipX || (this._target.scrollLeft = this.x)),
            this.xPrev = this.x,
            this.yPrev = this.y
        }
    })
      , e = d.prototype;
    d.max = c,
    e.getX = function() {
        return this._wdw ? null != b.pageXOffset ? b.pageXOffset : null != a.scrollLeft ? a.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }
    ,
    e.getY = function() {
        return this._wdw ? null != b.pageYOffset ? b.pageYOffset : null != a.scrollTop ? a.scrollTop : document.body.scrollTop : this._target.scrollTop
    }
    ,
    e._kill = function(a) {
        return a.scrollTo_x && (this.skipX = !0),
        a.scrollTo_y && (this.skipY = !0),
        this._super._kill.call(this, a)
    }
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(a, b) {
    "use strict";
    var c = a.GreenSockGlobals = a.GreenSockGlobals || a;
    if (!c.TweenLite) {
        var d, e, f, g, h, i = function(a) {
            var b, d = a.split("."), e = c;
            for (b = 0; d.length > b; b++)
                e[d[b]] = e = e[d[b]] || {};
            return e
        }, j = i("com.greensock"), k = 1e-10, l = function(a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++]))
                ;
            return c
        }, m = function() {}, n = function() {
            var a = Object.prototype.toString
              , b = a.call([]);
            return function(c) {
                return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
            }
        }(), o = {}, p = function(d, e, f, g) {
            this.sc = o[d] ? o[d].sc : [],
            o[d] = this,
            this.gsClass = null,
            this.func = f;
            var h = [];
            this.check = function(j) {
                for (var k, l, m, n, q = e.length, r = q; --q > -1; )
                    (k = o[e[q]] || new p(e[q],[])).gsClass ? (h[q] = k.gsClass,
                    r--) : j && k.sc.push(this);
                if (0 === r && f)
                    for (l = ("com.greensock." + d).split("."),
                    m = l.pop(),
                    n = i(l.join("."))[m] = this.gsClass = f.apply(f, h),
                    g && (c[m] = n,
                    "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                        return n
                    }) : d === b && "undefined" != typeof module && module.exports && (module.exports = n)),
                    q = 0; this.sc.length > q; q++)
                        this.sc[q].check()
            }
            ,
            this.check(!0)
        }, q = a._gsDefine = function(a, b, c, d) {
            return new p(a,b,c,d)
        }
        , r = j._class = function(a, b, c) {
            return b = b || function() {}
            ,
            q(a, [], function() {
                return b
            }, c),
            b
        }
        ;
        q.globals = c;
        var s = [0, 0, 1, 1]
          , t = []
          , u = r("easing.Ease", function(a, b, c, d) {
            this._func = a,
            this._type = c || 0,
            this._power = d || 0,
            this._params = b ? s.concat(b) : s
        }, !0)
          , v = u.map = {}
          , w = u.register = function(a, b, c, d) {
            for (var e, f, g, h, i = b.split(","), k = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1; )
                for (f = i[k],
                e = d ? r("easing." + f, null, !0) : j.easing[f] || {},
                g = l.length; --g > -1; )
                    h = l[g],
                    v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a
        }
        ;
        for (f = u.prototype,
        f._calcEnd = !1,
        f.getRatio = function(a) {
            if (this._func)
                return this._params[0] = a,
                this._func.apply(null, this._params);
            var b = this._type
              , c = this._power
              , d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
            return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d),
            1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
        }
        ,
        d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
        e = d.length; --e > -1; )
            f = d[e] + ",Power" + e,
            w(new u(null,null,1,e), f, "easeOut", !0),
            w(new u(null,null,2,e), f, "easeIn" + (0 === e ? ",easeNone" : "")),
            w(new u(null,null,3,e), f, "easeInOut");
        v.linear = j.easing.Linear.easeIn,
        v.swing = j.easing.Quad.easeInOut;
        var x = r("events.EventDispatcher", function(a) {
            this._listeners = {},
            this._eventTarget = a || this
        });
        f = x.prototype,
        f.addEventListener = function(a, b, c, d, e) {
            e = e || 0;
            var f, i, j = this._listeners[a], k = 0;
            for (null == j && (this._listeners[a] = j = []),
            i = j.length; --i > -1; )
                f = j[i],
                f.c === b && f.s === c ? j.splice(i, 1) : 0 === k && e > f.pr && (k = i + 1);
            j.splice(k, 0, {
                c: b,
                s: c,
                up: d,
                pr: e
            }),
            this !== g || h || g.wake()
        }
        ,
        f.removeEventListener = function(a, b) {
            var c, d = this._listeners[a];
            if (d)
                for (c = d.length; --c > -1; )
                    if (d[c].c === b)
                        return void d.splice(c, 1)
        }
        ,
        f.dispatchEvent = function(a) {
            var b, c, d, e = this._listeners[a];
            if (e)
                for (b = e.length,
                c = this._eventTarget; --b > -1; )
                    d = e[b],
                    d.up ? d.c.call(d.s || c, {
                        type: a,
                        target: c
                    }) : d.c.call(d.s || c)
        }
        ;
        var y = a.requestAnimationFrame
          , z = a.cancelAnimationFrame
          , A = Date.now || function() {
            return (new Date).getTime()
        }
          , B = A();
        for (d = ["ms", "moz", "webkit", "o"],
        e = d.length; --e > -1 && !y; )
            y = a[d[e] + "RequestAnimationFrame"],
            z = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];
        r("Ticker", function(a, b) {
            var c, d, e, f, i, j = this, l = A(), n = b !== !1 && y, o = 500, p = 33, q = function(a) {
                var b, g, h = A() - B;
                h > o && (l += h - p),
                B += h,
                j.time = (B - l) / 1e3,
                b = j.time - i,
                (!c || b > 0 || a === !0) && (j.frame++,
                i += b + (b >= f ? .004 : f - b),
                g = !0),
                a !== !0 && (e = d(q)),
                g && j.dispatchEvent("tick")
            };
            x.call(j),
            j.time = j.frame = 0,
            j.tick = function() {
                q(!0)
            }
            ,
            j.lagSmoothing = function(a, b) {
                o = a || 1 / k,
                p = Math.min(b, o, 0)
            }
            ,
            j.sleep = function() {
                null != e && (n && z ? z(e) : clearTimeout(e),
                d = m,
                e = null,
                j === g && (h = !1))
            }
            ,
            j.wake = function() {
                null !== e ? j.sleep() : j.frame > 10 && (B = A() - o + 5),
                d = 0 === c ? m : n && y ? y : function(a) {
                    return setTimeout(a, 0 | 1e3 * (i - j.time) + 1)
                }
                ,
                j === g && (h = !0),
                q(2)
            }
            ,
            j.fps = function(a) {
                return arguments.length ? (c = a,
                f = 1 / (c || 60),
                i = this.time + f,
                void j.wake()) : c
            }
            ,
            j.useRAF = function(a) {
                return arguments.length ? (j.sleep(),
                n = a,
                void j.fps(c)) : n
            }
            ,
            j.fps(a),
            setTimeout(function() {
                n && (!e || 5 > j.frame) && j.useRAF(!1)
            }, 1500)
        }),
        f = j.Ticker.prototype = new j.events.EventDispatcher,
        f.constructor = j.Ticker;
        var C = r("core.Animation", function(a, b) {
            if (this.vars = b = b || {},
            this._duration = this._totalDuration = a || 0,
            this._delay = Number(b.delay) || 0,
            this._timeScale = 1,
            this._active = b.immediateRender === !0,
            this.data = b.data,
            this._reversed = b.reversed === !0,
            R) {
                h || g.wake();
                var c = this.vars.useFrames ? Q : R;
                c.add(this, c._time),
                this.vars.paused && this.paused(!0)
            }
        });
        g = C.ticker = new j.Ticker,
        f = C.prototype,
        f._dirty = f._gc = f._initted = f._paused = !1,
        f._totalTime = f._time = 0,
        f._rawPrevTime = -1,
        f._next = f._last = f._onUpdate = f._timeline = f.timeline = null,
        f._paused = !1;
        var D = function() {
            h && A() - B > 2e3 && g.wake(),
            setTimeout(D, 2e3)
        };
        D(),
        f.play = function(a, b) {
            return null != a && this.seek(a, b),
            this.reversed(!1).paused(!1)
        }
        ,
        f.pause = function(a, b) {
            return null != a && this.seek(a, b),
            this.paused(!0)
        }
        ,
        f.resume = function(a, b) {
            return null != a && this.seek(a, b),
            this.paused(!1)
        }
        ,
        f.seek = function(a, b) {
            return this.totalTime(Number(a), b !== !1)
        }
        ,
        f.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }
        ,
        f.reverse = function(a, b) {
            return null != a && this.seek(a || this.totalDuration(), b),
            this.reversed(!0).paused(!1)
        }
        ,
        f.render = function() {}
        ,
        f.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        }
        ,
        f.isActive = function() {
            var a, b = this._timeline, c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && c + this.totalDuration() / this._timeScale > a
        }
        ,
        f._enabled = function(a, b) {
            return h || g.wake(),
            this._gc = !a,
            this._active = this.isActive(),
            b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        f._kill = function() {
            return this._enabled(!1, !1)
        }
        ,
        f.kill = function(a, b) {
            return this._kill(a, b),
            this
        }
        ,
        f._uncache = function(a) {
            for (var b = a ? this : this.timeline; b; )
                b._dirty = !0,
                b = b.timeline;
            return this
        }
        ,
        f._swapSelfInParams = function(a) {
            for (var b = a.length, c = a.concat(); --b > -1; )
                "{self}" === a[b] && (c[b] = this);
            return c
        }
        ,
        f.eventCallback = function(a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length)
                    return e[a];
                null == b ? delete e[a] : (e[a] = b,
                e[a + "Params"] = n(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c,
                e[a + "Scope"] = d),
                "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }
        ,
        f.delay = function(a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay),
            this._delay = a,
            this) : this._delay
        }
        ,
        f.duration = function(a) {
            return arguments.length ? (this._duration = this._totalDuration = a,
            this._uncache(!0),
            this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        f.totalDuration = function(a) {
            return this._dirty = !1,
            arguments.length ? this.duration(a) : this._totalDuration
        }
        ,
        f.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }
        ,
        f.totalTime = function(a, b, c) {
            if (h || g.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration
                      , e = this._timeline;
                    if (a > d && !c && (a = d),
                    this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale,
                    e._dirty || this._uncache(!1),
                    e._timeline)
                        for (; e._timeline; )
                            e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0),
                            e = e._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== a || 0 === this._duration) && (this.render(a, b, !1),
                I.length && S())
            }
            return this
        }
        ,
        f.progress = f.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
        }
        ,
        f.startTime = function(a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)),
            this) : this._startTime
        }
        ,
        f.timeScale = function(a) {
            if (!arguments.length)
                return this._timeScale;
            if (a = a || k,
            this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime
                  , c = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = c - (c - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a,
            this._uncache(!1)
        }
        ,
        f.reversed = function(a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        f.paused = function(a) {
            if (!arguments.length)
                return this._paused;
            if (a != this._paused && this._timeline) {
                h || a || g.wake();
                var b = this._timeline
                  , c = b.rawTime()
                  , d = c - this._pauseTime;
                !a && b.smoothChildTiming && (this._startTime += d,
                this._uncache(!1)),
                this._pauseTime = a ? c : null,
                this._paused = a,
                this._active = this.isActive(),
                !a && 0 !== d && this._initted && this.duration() && this.render(b.smoothChildTiming ? this._totalTime : (c - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !a && this._enabled(!0, !1),
            this
        }
        ;
        var E = r("core.SimpleTimeline", function(a) {
            C.call(this, 0, a),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        f = E.prototype = new C,
        f.constructor = E,
        f.kill()._gc = !1,
        f._first = f._last = null,
        f._sortChildren = !1,
        f.add = f.insert = function(a, b) {
            var c, d;
            if (a._startTime = Number(b || 0) + a._delay,
            a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale),
            a.timeline && a.timeline._remove(a, !0),
            a.timeline = a._timeline = this,
            a._gc && a._enabled(!0, !0),
            c = this._last,
            this._sortChildren)
                for (d = a._startTime; c && c._startTime > d; )
                    c = c._prev;
            return c ? (a._next = c._next,
            c._next = a) : (a._next = this._first,
            this._first = a),
            a._next ? a._next._prev = a : this._last = a,
            a._prev = c,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        f._remove = function(a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0),
            a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next),
            a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev),
            a._next = a._prev = a.timeline = null,
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        f.render = function(a, b, c) {
            var d, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; e; )
                d = e._next,
                (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)),
                e = d
        }
        ,
        f.rawTime = function() {
            return h || g.wake(),
            this._totalTime
        }
        ;
        var F = r("TweenLite", function(b, c, d) {
            if (C.call(this, c, d),
            this.render = F.prototype.render,
            null == b)
                throw "Cannot tween a null target.";
            this.target = b = "string" != typeof b ? b : F.selector(b) || b;
            var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType), i = this.vars.overwrite;
            if (this._overwrite = i = null == i ? P[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : P[i],
            (h || b instanceof Array || b.push && n(b)) && "number" != typeof b[0])
                for (this._targets = g = l(b),
                this._propLookup = [],
                this._siblings = [],
                e = 0; g.length > e; e++)
                    f = g[e],
                    f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1),
                    this._targets = g = g.concat(l(f))) : (this._siblings[e] = T(f, this, !1),
                    1 === i && this._siblings[e].length > 1 && U(f, this, null, 1, this._siblings[e])) : (f = g[e--] = F.selector(f),
                    "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
            else
                this._propLookup = {},
                this._siblings = T(b, this, !1),
                1 === i && this._siblings.length > 1 && U(b, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -k,
            this.render(-this._delay))
        }, !0)
          , G = function(b) {
            return b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
        }
          , H = function(a, b) {
            var c, d = {};
            for (c in a)
                O[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!L[c] || L[c] && L[c]._autoCSS) || (d[c] = a[c],
                delete a[c]);
            a.css = d
        };
        f = F.prototype = new C,
        f.constructor = F,
        f.kill()._gc = !1,
        f.ratio = 0,
        f._firstPT = f._targets = f._overwrittenProps = f._startAt = null,
        f._notifyPluginsOfEnabled = f._lazy = !1,
        F.version = "1.13.2",
        F.defaultEase = f._ease = new u(null,null,1,1),
        F.defaultOverwrite = "auto",
        F.ticker = g,
        F.autoSleep = !0,
        F.lagSmoothing = function(a, b) {
            g.lagSmoothing(a, b)
        }
        ,
        F.selector = a.$ || a.jQuery || function(b) {
            var c = a.$ || a.jQuery;
            return c ? (F.selector = c,
            c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
        }
        ;
        var I = []
          , J = {}
          , K = F._internals = {
            isArray: n,
            isSelector: G,
            lazyTweens: I
        }
          , L = F._plugins = {}
          , M = K.tweenLookup = {}
          , N = 0
          , O = K.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1
        }
          , P = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            true: 1,
            false: 0
        }
          , Q = C._rootFramesTimeline = new E
          , R = C._rootTimeline = new E
          , S = K.lazyRender = function() {
            var a = I.length;
            for (J = {}; --a > -1; )
                d = I[a],
                d && d._lazy !== !1 && (d.render(d._lazy[0], d._lazy[1], !0),
                d._lazy = !1);
            I.length = 0
        }
        ;
        R._startTime = g.time,
        Q._startTime = g.frame,
        R._active = Q._active = !0,
        setTimeout(S, 1),
        C._updateRoot = F.render = function() {
            var a, b, c;
            if (I.length && S(),
            R.render((g.time - R._startTime) * R._timeScale, !1, !1),
            Q.render((g.frame - Q._startTime) * Q._timeScale, !1, !1),
            I.length && S(),
            !(g.frame % 120)) {
                for (c in M) {
                    for (b = M[c].tweens,
                    a = b.length; --a > -1; )
                        b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete M[c]
                }
                if (c = R._first,
                (!c || c._paused) && F.autoSleep && !Q._first && 1 === g._listeners.tick.length) {
                    for (; c && c._paused; )
                        c = c._next;
                    c || g.sleep()
                }
            }
        }
        ,
        g.addEventListener("tick", C._updateRoot);
        var T = function(a, b, c) {
            var d, e, f = a._gsTweenID;
            if (M[f || (a._gsTweenID = f = "t" + N++)] || (M[f] = {
                target: a,
                tweens: []
            }),
            b && (d = M[f].tweens,
            d[e = d.length] = b,
            c))
                for (; --e > -1; )
                    d[e] === b && d.splice(e, 1);
            return M[f].tweens
        }
          , U = function(a, b, c, d, e) {
            var f, g, h, i;
            if (1 === d || d >= 4) {
                for (i = e.length,
                f = 0; i > f; f++)
                    if ((h = e[f]) !== b)
                        h._gc || h._enabled(!1, !1) && (g = !0);
                    else if (5 === d)
                        break;
                return g
            }
            var j, l = b._startTime + k, m = [], n = 0, o = 0 === b._duration;
            for (f = e.length; --f > -1; )
                (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || V(b, 0, o),
                0 === V(h, j, o) && (m[n++] = h)) : l >= h._startTime && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && 2e-10 >= l - h._startTime || (m[n++] = h)));
            for (f = n; --f > -1; )
                h = m[f],
                2 === d && h._kill(c, a) && (g = !0),
                (2 !== d || !h._firstPT && h._initted) && h._enabled(!1, !1) && (g = !0);
            return g
        }
          , V = function(a, b, c) {
            for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline; ) {
                if (f += d._startTime,
                e *= d._timeScale,
                d._paused)
                    return -100;
                d = d._timeline
            }
            return f /= e,
            f > b ? f - b : c && f === b || !a._initted && 2 * k > f - b ? k : (f += a.totalDuration() / a._timeScale / e) > b + k ? 0 : f - b - k
        };
        f._init = function() {
            var a, b, c, d, e, f = this.vars, g = this._overwrittenProps, h = this._duration, i = !!f.immediateRender, j = f.ease;
            if (f.startAt) {
                this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                e = {};
                for (d in f.startAt)
                    e[d] = f.startAt[d];
                if (e.overwrite = !1,
                e.immediateRender = !0,
                e.lazy = i && f.lazy !== !1,
                e.startAt = e.delay = null,
                this._startAt = F.to(this.target, 0, e),
                i)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== h)
                        return
            } else if (f.runBackwards && 0 !== h)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    this._startAt = null;
                else {
                    0 !== this._time && (i = !1),
                    c = {};
                    for (d in f)
                        O[d] && "autoCSS" !== d || (c[d] = f[d]);
                    if (c.overwrite = 0,
                    c.data = "isFromStart",
                    c.lazy = i && f.lazy !== !1,
                    c.immediateRender = i,
                    this._startAt = F.to(this.target, 0, c),
                    i) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                        this._startAt._enabled(!1),
                        this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = j = j ? j instanceof u ? j : "function" == typeof j ? new u(j,f.easeParams) : v[j] || F.defaultEase : F.defaultEase,
            f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, f.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null,
            this._targets)
                for (a = this._targets.length; --a > -1; )
                    this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null) && (b = !0);
            else
                b = this._initProps(this.target, this._propLookup, this._siblings, g);
            if (b && F._onPluginEvent("_onInitAllProps", this),
            g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            f.runBackwards)
                for (c = this._firstPT; c; )
                    c.s += c.c,
                    c.c = -c.c,
                    c = c._next;
            this._onUpdate = f.onUpdate,
            this._initted = !0
        }
        ,
        f._initProps = function(b, c, d, e) {
            var f, g, h, i, j, k;
            if (null == b)
                return !1;
            J[b._gsTweenID] && S(),
            this.vars.css || b.style && b !== a && b.nodeType && L.css && this.vars.autoCSS !== !1 && H(this.vars, b);
            for (f in this.vars) {
                if (k = this.vars[f],
                O[f])
                    k && (k instanceof Array || k.push && n(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
                else if (L[f] && (i = new L[f])._onInitTween(b, this.vars[f], this)) {
                    for (this._firstPT = j = {
                        _next: this._firstPT,
                        t: i,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: f,
                        pg: !0,
                        pr: i._priority
                    },
                    g = i._overwriteProps.length; --g > -1; )
                        c[i._overwriteProps[g]] = this._firstPT;
                    (i._priority || i._onInitAllProps) && (h = !0),
                    (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else
                    this._firstPT = c[f] = j = {
                        _next: this._firstPT,
                        t: b,
                        p: f,
                        f: "function" == typeof b[f],
                        n: f,
                        pg: !1,
                        pr: 0
                    },
                    j.s = j.f ? b[f.indexOf("set") || "function" != typeof b["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(b[f]),
                    j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
                j && j._next && (j._next._prev = j)
            }
            return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && U(b, this, c, this._overwrite, d) ? (this._kill(c, b),
            this._initProps(b, c, d, e)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0),
            h)
        }
        ,
        f.render = function(a, b, c) {
            var d, e, f, g, h = this._time, i = this._duration, j = this._rawPrevTime;
            if (a >= i)
                this._totalTime = this._time = i,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (d = !0,
                e = "onComplete"),
                0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0),
                (0 === a || 0 > j || j === k) && j !== a && (c = !0,
                j > k && (e = "onReverseComplete")),
                this._rawPrevTime = g = !b || a || j === a ? a : k);
            else if (1e-7 > a)
                this._totalTime = this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== h || 0 === i && j > 0 && j !== k) && (e = "onReverseComplete",
                d = this._reversed),
                0 > a && (this._active = !1,
                0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (c = !0),
                this._rawPrevTime = g = !b || a || j === a ? a : k)),
                this._initted || (c = !0);
            else if (this._totalTime = this._time = a,
            this._easeType) {
                var l = a / i
                  , m = this._easeType
                  , n = this._easePower;
                (1 === m || 3 === m && l >= .5) && (l = 1 - l),
                3 === m && (l *= 2),
                1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l),
                this.ratio = 1 === m ? 1 - l : 2 === m ? l : .5 > a / i ? l / 2 : 1 - l / 2
            } else
                this.ratio = this._ease.getRatio(a / i);
            if (this._time !== h || c) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = h,
                        this._rawPrevTime = j,
                        I.push(this),
                        void (this._lazy = [a, b]);
                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1),
                this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0),
                0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === i) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || t))),
                f = this._firstPT; f; )
                    f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s,
                    f = f._next;
                this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c),
                b || (this._time !== h || d) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || t)),
                e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c),
                d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || t),
                0 === i && this._rawPrevTime === k && g !== k && (this._rawPrevTime = 0))
            }
        }
        ,
        f._kill = function(a, b) {
            if ("all" === a && (a = null),
            null == a && (null == b || b === this.target))
                return this._lazy = !1,
                this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;
            var c, d, e, f, g, h, i, j;
            if ((n(b) || G(b)) && "number" != typeof b[0])
                for (c = b.length; --c > -1; )
                    this._kill(a, b[c]) && (h = !0);
            else {
                if (this._targets) {
                    for (c = this._targets.length; --c > -1; )
                        if (b === this._targets[c]) {
                            g = this._propLookup[c] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                            break
                        }
                } else {
                    if (b !== this.target)
                        return !1;
                    g = this._propLookup,
                    d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (g) {
                    i = a || g,
                    j = a !== d && "all" !== d && a !== g && ("object" != typeof a || !a._tempKill);
                    for (e in i)
                        (f = g[e]) && (f.pg && f.t._kill(i) && (h = !0),
                        f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next),
                        f._next && (f._next._prev = f._prev),
                        f._next = f._prev = null),
                        delete g[e]),
                        j && (d[e] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return h
        }
        ,
        f.invalidate = function() {
            return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            C.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -k,
            this.render(-this._delay)),
            this
        }
        ,
        f._enabled = function(a, b) {
            if (h || g.wake(),
            a && this._gc) {
                var c, d = this._targets;
                if (d)
                    for (c = d.length; --c > -1; )
                        this._siblings[c] = T(d[c], this, !0);
                else
                    this._siblings = T(this.target, this, !0)
            }
            return C.prototype._enabled.call(this, a, b),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) && F._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
        }
        ,
        F.to = function(a, b, c) {
            return new F(a,b,c)
        }
        ,
        F.from = function(a, b, c) {
            return c.runBackwards = !0,
            c.immediateRender = 0 != c.immediateRender,
            new F(a,b,c)
        }
        ,
        F.fromTo = function(a, b, c, d) {
            return d.startAt = c,
            d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,
            new F(a,b,d)
        }
        ,
        F.delayedCall = function(a, b, c, d, e) {
            return new F(b,0,{
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: d,
                immediateRender: !1,
                useFrames: e,
                overwrite: 0
            })
        }
        ,
        F.set = function(a, b) {
            return new F(a,0,b)
        }
        ,
        F.getTweensOf = function(a, b) {
            if (null == a)
                return [];
            a = "string" != typeof a ? a : F.selector(a) || a;
            var c, d, e, f;
            if ((n(a) || G(a)) && "number" != typeof a[0]) {
                for (c = a.length,
                d = []; --c > -1; )
                    d = d.concat(F.getTweensOf(a[c], b));
                for (c = d.length; --c > -1; )
                    for (f = d[c],
                    e = c; --e > -1; )
                        f === d[e] && d.splice(c, 1)
            } else
                for (d = T(a).concat(),
                c = d.length; --c > -1; )
                    (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d
        }
        ,
        F.killTweensOf = F.killDelayedCallsTo = function(a, b, c) {
            "object" == typeof b && (c = b,
            b = !1);
            for (var d = F.getTweensOf(a, b), e = d.length; --e > -1; )
                d[e]._kill(c, a)
        }
        ;
        var W = r("plugins.TweenPlugin", function(a, b) {
            this._overwriteProps = (a || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = b || 0,
            this._super = W.prototype
        }, !0);
        if (f = W.prototype,
        W.version = "1.10.1",
        W.API = 2,
        f._firstPT = null,
        f._addTween = function(a, b, c, d, e, f) {
            var g, h;
            return null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) ? (this._firstPT = h = {
                _next: this._firstPT,
                t: a,
                p: b,
                s: c,
                c: g,
                f: "function" == typeof a[b],
                n: e || b,
                r: f
            },
            h._next && (h._next._prev = h),
            h) : void 0
        }
        ,
        f.setRatio = function(a) {
            for (var b, c = this._firstPT, d = 1e-6; c; )
                b = c.c * a + c.s,
                c.r ? b = Math.round(b) : d > b && b > -d && (b = 0),
                c.f ? c.t[c.p](b) : c.t[c.p] = b,
                c = c._next
        }
        ,
        f._kill = function(a) {
            var b, c = this._overwriteProps, d = this._firstPT;
            if (null != a[this._propName])
                this._overwriteProps = [];
            else
                for (b = c.length; --b > -1; )
                    null != a[c[b]] && c.splice(b, 1);
            for (; d; )
                null != a[d.n] && (d._next && (d._next._prev = d._prev),
                d._prev ? (d._prev._next = d._next,
                d._prev = null) : this._firstPT === d && (this._firstPT = d._next)),
                d = d._next;
            return !1
        }
        ,
        f._roundProps = function(a, b) {
            for (var c = this._firstPT; c; )
                (a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b),
                c = c._next
        }
        ,
        F._onPluginEvent = function(a, b) {
            var c, d, e, f, g, h = b._firstPT;
            if ("_onInitAllProps" === a) {
                for (; h; ) {
                    for (g = h._next,
                    d = e; d && d.pr > h.pr; )
                        d = d._next;
                    (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h,
                    (h._next = d) ? d._prev = h : f = h,
                    h = g
                }
                h = b._firstPT = e
            }
            for (; h; )
                h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0),
                h = h._next;
            return c
        }
        ,
        W.activate = function(a) {
            for (var b = a.length; --b > -1; )
                a[b].API === W.API && (L[(new a[b])._propName] = a[b]);
            return !0
        }
        ,
        q.plugin = function(a) {
            if (!(a && a.propName && a.init && a.API))
                throw "illegal plugin definition.";
            var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, g = r("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                W.call(this, c, d),
                this._overwriteProps = e || []
            }, a.global === !0), h = g.prototype = new W(c);
            h.constructor = g,
            g.API = a.API;
            for (b in f)
                "function" == typeof a[b] && (h[f[b]] = a[b]);
            return g.version = a.version,
            W.activate([g]),
            g
        }
        ,
        d = a._gsQueue) {
            for (e = 0; d.length > e; e++)
                d[e]();
            for (f in o)
                o[f].func || a.console.log("GSAP encountered missing dependency: com.greensock." + f)
        }
        h = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
        var d = function(a) {
            b.call(this, a),
            this._labels = {},
            this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
            this.smoothChildTiming = this.vars.smoothChildTiming === !0,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var c, d, e = this.vars;
            for (d in e)
                c = e[d],
                i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
            i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
        }
          , e = 1e-10
          , f = c._internals
          , g = d._internals = {}
          , h = f.isSelector
          , i = f.isArray
          , j = f.lazyTweens
          , k = f.lazyRender
          , l = _gsScope._gsDefine.globals
          , m = function(a) {
            var b, c = {};
            for (b in a)
                c[b] = a[b];
            return c
        }
          , n = function(a, b, c) {
            var d, e, f = a.cycle;
            for (d in f)
                e = f[d],
                a[d] = "function" == typeof e ? e.call(b[c], c) : e[c % e.length];
            delete a.cycle
        }
          , o = g.pauseCallback = function() {}
          , p = function(a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++]))
                ;
            return c
        }
          , q = d.prototype = new b;
        return d.version = "1.18.2",
        q.constructor = d,
        q.kill()._gc = q._forcingPlayhead = q._hasPause = !1,
        q.to = function(a, b, d, e) {
            var f = d.repeat && l.TweenMax || c;
            return b ? this.add(new f(a,b,d), e) : this.set(a, d, e)
        }
        ,
        q.from = function(a, b, d, e) {
            return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e)
        }
        ,
        q.fromTo = function(a, b, d, e, f) {
            var g = e.repeat && l.TweenMax || c;
            return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
        }
        ,
        q.staggerTo = function(a, b, e, f, g, i, j, k) {
            var l, o, q = new d({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming
            }), r = e.cycle;
            for ("string" == typeof a && (a = c.selector(a) || a),
            a = a || [],
            h(a) && (a = p(a)),
            f = f || 0,
            0 > f && (a = p(a),
            a.reverse(),
            f *= -1),
            o = 0; o < a.length; o++)
                l = m(e),
                l.startAt && (l.startAt = m(l.startAt),
                l.startAt.cycle && n(l.startAt, a, o)),
                r && n(l, a, o),
                q.to(a[o], b, l, o * f);
            return this.add(q, g)
        }
        ,
        q.staggerFrom = function(a, b, c, d, e, f, g, h) {
            return c.immediateRender = 0 != c.immediateRender,
            c.runBackwards = !0,
            this.staggerTo(a, b, c, d, e, f, g, h)
        }
        ,
        q.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
            return d.startAt = c,
            d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,
            this.staggerTo(a, b, d, e, f, g, h, i)
        }
        ,
        q.call = function(a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e)
        }
        ,
        q.set = function(a, b, d) {
            return d = this._parseTimeOrLabel(d, 0, !0),
            null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused),
            this.add(new c(a,0,b), d)
        }
        ,
        d.exportRoot = function(a, b) {
            a = a || {},
            null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e, f, g = new d(a), h = g._timeline;
            for (null == b && (b = !0),
            h._remove(g, !0),
            g._startTime = 0,
            g._rawPrevTime = g._time = g._totalTime = h._time,
            e = h._first; e; )
                f = e._next,
                b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay),
                e = f;
            return h.add(g, 0),
            g
        }
        ,
        q.add = function(e, f, g, h) {
            var j, k, l, m, n, o;
            if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)),
            !(e instanceof a)) {
                if (e instanceof Array || e && e.push && i(e)) {
                    for (g = g || "normal",
                    h = h || 0,
                    j = f,
                    k = e.length,
                    l = 0; k > l; l++)
                        i(m = e[l]) && (m = new d({
                            tweens: m
                        })),
                        this.add(m, j),
                        "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())),
                        j += h;
                    return this._uncache(!0)
                }
                if ("string" == typeof e)
                    return this.addLabel(e, f);
                if ("function" != typeof e)
                    throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = c.delayedCall(0, e)
            }
            if (b.prototype.add.call(this, e, f),
            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (n = this,
                o = n.rawTime() > e._startTime; n._timeline; )
                    o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1),
                    n = n._timeline;
            return this
        }
        ,
        q.remove = function(b) {
            if (b instanceof a) {
                this._remove(b, !1);
                var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale,
                this
            }
            if (b instanceof Array || b && b.push && i(b)) {
                for (var d = b.length; --d > -1; )
                    this.remove(b[d]);
                return this
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
        }
        ,
        q._remove = function(a, c) {
            b.prototype._remove.call(this, a, c);
            var d = this._last;
            return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(),
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        q.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
        }
        ,
        q.insert = q.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d)
        }
        ,
        q.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
        }
        ,
        q.addLabel = function(a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b),
            this
        }
        ,
        q.addPause = function(a, b, d, e) {
            var f = c.delayedCall(0, o, d, e || this);
            return f.vars.onComplete = f.vars.onReverseComplete = b,
            f.data = "isPause",
            this._hasPause = !0,
            this.add(f, a)
        }
        ,
        q.removeLabel = function(a) {
            return delete this._labels[a],
            this
        }
        ,
        q.getLabelTime = function(a) {
            return null != this._labels[a] ? this._labels[a] : -1
        }
        ,
        q._parseTimeOrLabel = function(b, c, d, e) {
            var f;
            if (e instanceof a && e.timeline === this)
                this.remove(e);
            else if (e && (e instanceof Array || e.push && i(e)))
                for (f = e.length; --f > -1; )
                    e[f]instanceof a && e[f].timeline === this && this.remove(e[f]);
            if ("string" == typeof c)
                return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
            if (c = c || 0,
            "string" != typeof b || !isNaN(b) && null == this._labels[b])
                null == b && (b = this.duration());
            else {
                if (f = b.indexOf("="),
                -1 === f)
                    return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)),
                b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
            }
            return Number(b) + c
        }
        ,
        q.seek = function(a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
        }
        ,
        q.stop = function() {
            return this.paused(!0)
        }
        ,
        q.gotoAndPlay = function(a, b) {
            return this.play(a, b)
        }
        ,
        q.gotoAndStop = function(a, b) {
            return this.pause(a, b)
        }
        ,
        q.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, g, h, i, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration, o = this._time, p = this._startTime, q = this._timeScale, r = this._paused;
            if (a >= n - 1e-7)
                this._totalTime = this._time = n,
                this._reversed || this._hasPausedChild() || (f = !0,
                h = "onComplete",
                i = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0,
                this._rawPrevTime > e && (h = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e,
                a = n + 1e-4;
            else if (1e-7 > a)
                if (this._totalTime = this._time = 0,
                (0 !== o || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete",
                f = this._reversed),
                0 > a)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0,
                    h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0),
                    this._rawPrevTime = a;
                else {
                    if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e,
                    0 === a && f)
                        for (d = this._first; d && 0 === d._startTime; )
                            d._duration || (f = !1),
                            d = d._next;
                    a = 0,
                    this._initted || (i = !0)
                }
            else {
                if (this._hasPause && !this._forcingPlayhead && !b) {
                    if (a >= o)
                        for (d = this._first; d && d._startTime <= a && !l; )
                            d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d),
                            d = d._next;
                    else
                        for (d = this._last; d && d._startTime >= a && !l; )
                            d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d),
                            d = d._prev;
                    l && (this._time = a = l._startTime,
                    this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = a
            }
            if (this._time !== o && this._first || c || i || l) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._time !== o && a > 0 && (this._active = !0),
                0 === o && this.vars.onStart && 0 !== this._time && (b || this._callback("onStart")),
                m = this._time,
                m >= o)
                    for (d = this._first; d && (g = d._next,
                    m === this._time && (!this._paused || r)); )
                        (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(),
                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)),
                        d = g;
                else
                    for (d = this._last; d && (g = d._prev,
                    m === this._time && (!this._paused || r)); ) {
                        if (d._active || d._startTime <= o && !d._paused && !d._gc) {
                            if (l === d) {
                                for (l = d._prev; l && l.endTime() > this._time; )
                                    l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c),
                                    l = l._prev;
                                l = null,
                                this.pause()
                            }
                            d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                        }
                        d = g
                    }
                this._onUpdate && (b || (j.length && k(),
                this._callback("onUpdate"))),
                h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (f && (j.length && k(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !b && this.vars[h] && this._callback(h)))
            }
        }
        ,
        q._hasPausedChild = function() {
            for (var a = this._first; a; ) {
                if (a._paused || a instanceof d && a._hasPausedChild())
                    return !0;
                a = a._next
            }
            return !1
        }
        ,
        q.getChildren = function(a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g; )
                g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g),
                a !== !1 && (f = f.concat(g.getChildren(!0, b, d)),
                h = f.length))),
                g = g._next;
            return f
        }
        ,
        q.getTweensOf = function(a, b) {
            var d, e, f = this._gc, g = [], h = 0;
            for (f && this._enabled(!0, !0),
            d = c.getTweensOf(a),
            e = d.length; --e > -1; )
                (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
            return f && this._enabled(!1, !0),
            g
        }
        ,
        q.recent = function() {
            return this._recent
        }
        ,
        q._contains = function(a) {
            for (var b = a.timeline; b; ) {
                if (b === this)
                    return !0;
                b = b.timeline
            }
            return !1
        }
        ,
        q.shiftChildren = function(a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e; )
                e._startTime >= c && (e._startTime += a),
                e = e._next;
            if (b)
                for (d in f)
                    f[d] >= c && (f[d] += a);
            return this._uncache(!0)
        }
        ,
        q._kill = function(a, b) {
            if (!a && !b)
                return this._enabled(!1, !1);
            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1; )
                c[d]._kill(a, b) && (e = !0);
            return e
        }
        ,
        q.clear = function(a) {
            var b = this.getChildren(!1, !0, !0)
              , c = b.length;
            for (this._time = this._totalTime = 0; --c > -1; )
                b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        q.invalidate = function() {
            for (var b = this._first; b; )
                b.invalidate(),
                b = b._next;
            return a.prototype.invalidate.call(this)
        }
        ,
        q._enabled = function(a, c) {
            if (a === this._gc)
                for (var d = this._first; d; )
                    d._enabled(a, !0),
                    d = d._next;
            return b.prototype._enabled.call(this, a, c)
        }
        ,
        q.totalTime = function(b, c, d) {
            this._forcingPlayhead = !0;
            var e = a.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            e
        }
        ,
        q.duration = function(a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        q.totalDuration = function(a) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var b, c, d = 0, e = this._last, f = 999999999999; e; )
                        b = e._prev,
                        e._dirty && e.totalDuration(),
                        e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime,
                        e._startTime < 0 && !e._paused && (d -= e._startTime,
                        this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale),
                        this.shiftChildren(-e._startTime, !1, -9999999999),
                        f = 0),
                        c = e._startTime + e._totalDuration / e._timeScale,
                        c > d && (d = c),
                        e = b;
                    this._duration = this._totalDuration = d,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
        }
        ,
        q.paused = function(b) {
            if (!b)
                for (var c = this._first, d = this._time; c; )
                    c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0),
                    c = c._next;
            return a.prototype.paused.apply(this, arguments)
        }
        ,
        q.usesFrames = function() {
            for (var b = this._timeline; b._timeline; )
                b = b._timeline;
            return b === a._rootFramesTimeline
        }
        ,
        q.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }
        ,
        d
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(a) {
    "use strict";
    var b = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"),
    module.exports = b())
}("TimelineLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
        var c, d, e, f, g = function() {
            a.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = g.prototype.setRatio
        }, h = _gsScope._gsDefine.globals, i = {}, j = g.prototype = new a("css");
        j.constructor = g,
        g.version = "1.18.2",
        g.API = 2,
        g.defaultTransformPerspective = 0,
        g.defaultSkewType = "compensated",
        g.defaultSmoothOrigin = !0,
        j = "px",
        g.suffixMap = {
            top: j,
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: ""
        };
        var k, l, m, n, o, p, q = /(?:\d|\-\d|\.\d|\-\.\d)+/g, r = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, s = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, t = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, u = /(?:\d|\-|\+|=|#|\.)*/g, v = /opacity *= *([^)]*)/i, w = /opacity:([^;]*)/i, x = /alpha\(opacity *=.+?\)/i, y = /^(rgb|hsl)/, z = /([A-Z])/g, A = /-([a-z])/gi, B = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, C = function(a, b) {
            return b.toUpperCase()
        }, D = /(?:Left|Right|Width)/i, E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, G = /,(?=[^\)]*(?:\(|$))/gi, H = Math.PI / 180, I = 180 / Math.PI, J = {}, K = document, L = function(a) {
            return K.createElementNS ? K.createElementNS("http://www.w3.org/1999/xhtml", a) : K.createElement(a)
        }, M = L("div"), N = L("img"), O = g._internals = {
            _specialProps: i
        }, P = navigator.userAgent, Q = function() {
            var a = P.indexOf("Android")
              , b = L("a");
            return m = -1 !== P.indexOf("Safari") && -1 === P.indexOf("Chrome") && (-1 === a || Number(P.substr(a + 8, 1)) > 3),
            o = m && Number(P.substr(P.indexOf("Version/") + 8, 1)) < 6,
            n = -1 !== P.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(P) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(P)) && (p = parseFloat(RegExp.$1)),
            !!b && (b.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(b.style.opacity))
        }(), R = function(a) {
            return v.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, S = function(a) {
            window.console && console.log(a)
        }, T = "", U = "", V = function(a, b) {
            b = b || M;
            var c, d, e = b.style;
            if (void 0 !== e[a])
                return a;
            for (a = a.charAt(0).toUpperCase() + a.substr(1),
            c = ["O", "Moz", "ms", "Ms", "Webkit"],
            d = 5; --d > -1 && void 0 === e[c[d] + a]; )
                ;
            return d >= 0 ? (U = 3 === d ? "ms" : c[d],
            T = "-" + U.toLowerCase() + "-",
            U + a) : null
        }, W = K.defaultView ? K.defaultView.getComputedStyle : function() {}
        , X = g.getStyle = function(a, b, c, d, e) {
            var f;
            return Q || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || W(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(z, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]),
            null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : R(a)
        }
        , Y = O.convertToPixels = function(a, c, d, e, f) {
            if ("px" === e || !e)
                return d;
            if ("auto" === e || !d)
                return 0;
            var h, i, j, k = D.test(c), l = a, m = M.style, n = 0 > d;
            if (n && (d = -d),
            "%" === e && -1 !== c.indexOf("border"))
                h = d / 100 * (k ? a.clientWidth : a.clientHeight);
            else {
                if (m.cssText = "border:0 solid red;position:" + X(a, "position") + ";line-height:0;",
                "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e)
                    m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                else {
                    if (l = a.parentNode || K.body,
                    i = l._gsCache,
                    j = b.ticker.frame,
                    i && k && i.time === j)
                        return i.width * d / 100;
                    m[k ? "width" : "height"] = d + e
                }
                l.appendChild(M),
                h = parseFloat(M[k ? "offsetWidth" : "offsetHeight"]),
                l.removeChild(M),
                k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {},
                i.time = j,
                i.width = h / d * 100),
                0 !== h || f || (h = Y(a, c, d, e, !0))
            }
            return n ? -h : h
        }
        , Z = O.calculateOffset = function(a, b, c) {
            if ("absolute" !== X(a, "position", c))
                return 0;
            var d = "left" === b ? "Left" : "Top"
              , e = X(a, "margin" + d, c);
            return a["offset" + d] - (Y(a, b, parseFloat(e), e.replace(u, "")) || 0)
        }
        , $ = function(a, b) {
            var c, d, e, f = {};
            if (b = b || W(a, null))
                if (c = b.length)
                    for (; --c > -1; )
                        e = b[c],
                        (-1 === e.indexOf("-transform") || za === e) && (f[e.replace(A, C)] = b.getPropertyValue(e));
                else
                    for (c in b)
                        (-1 === c.indexOf("Transform") || ya === c) && (f[c] = b[c]);
            else if (b = a.currentStyle || a.style)
                for (c in b)
                    "string" == typeof c && void 0 === f[c] && (f[c.replace(A, C)] = b[c]);
            return Q || (f.opacity = R(a)),
            d = La(a, b, !1),
            f.rotation = d.rotation,
            f.skewX = d.skewX,
            f.scaleX = d.scaleX,
            f.scaleY = d.scaleY,
            f.x = d.x,
            f.y = d.y,
            Ba && (f.z = d.z,
            f.rotationX = d.rotationX,
            f.rotationY = d.rotationY,
            f.scaleZ = d.scaleZ),
            f.filters && delete f.filters,
            f
        }, _ = function(a, b, c, d, e) {
            var f, g, h, i = {}, j = a.style;
            for (g in c)
                "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(t, "") ? f : 0 : Z(a, g),
                void 0 !== j[g] && (h = new oa(j,g,j[g],h)));
            if (d)
                for (g in d)
                    "className" !== g && (i[g] = d[g]);
            return {
                difs: i,
                firstMPT: h
            }
        }, aa = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, ba = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ca = function(a, b, c) {
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight)
              , e = aa[b]
              , f = e.length;
            for (c = c || W(a, null); --f > -1; )
                d -= parseFloat(X(a, "padding" + e[f], c, !0)) || 0,
                d -= parseFloat(X(a, "border" + e[f] + "Width", c, !0)) || 0;
            return d
        }, da = function(a, b) {
            if ("contain" === a || "auto" === a || "auto auto" === a)
                return a + " ";
            (null == a || "" === a) && (a = "0 0");
            var c = a.split(" ")
              , d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0]
              , e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
            return null == e ? e = "center" === d ? "50%" : "0" : "center" === e && (e = "50%"),
            ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"),
            a = d + " " + e + (c.length > 2 ? " " + c[2] : ""),
            b && (b.oxp = -1 !== d.indexOf("%"),
            b.oyp = -1 !== e.indexOf("%"),
            b.oxr = "=" === d.charAt(1),
            b.oyr = "=" === e.charAt(1),
            b.ox = parseFloat(d.replace(t, "")),
            b.oy = parseFloat(e.replace(t, "")),
            b.v = a),
            b || a
        }, ea = function(a, b) {
            return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
        }, fa = function(a, b) {
            return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a)
        }, ga = function(a, b, c, d) {
            var e, f, g, h, i, j = 1e-6;
            return null == a ? h = b : "number" == typeof a ? h = a : (e = 360,
            f = a.split("_"),
            i = "=" === a.charAt(1),
            g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : I) - (i ? 0 : b),
            f.length && (d && (d[c] = b + g),
            -1 !== a.indexOf("short") && (g %= e,
            g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
            -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)),
            h = b + g),
            j > h && h > -j && (h = 0),
            h
        }, ha = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, ia = function(a, b, c) {
            return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a,
            255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
        }, ja = g.parseColor = function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (a)
                if ("number" == typeof a)
                    c = [a >> 16, a >> 8 & 255, 255 & a];
                else {
                    if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)),
                    ha[a])
                        c = ha[a];
                    else if ("#" === a.charAt(0))
                        4 === a.length && (d = a.charAt(1),
                        e = a.charAt(2),
                        f = a.charAt(3),
                        a = "#" + d + d + e + e + f + f),
                        a = parseInt(a.substr(1), 16),
                        c = [a >> 16, a >> 8 & 255, 255 & a];
                    else if ("hsl" === a.substr(0, 3))
                        if (c = m = a.match(q),
                        b) {
                            if (-1 !== a.indexOf("="))
                                return a.match(r)
                        } else
                            g = Number(c[0]) % 360 / 360,
                            h = Number(c[1]) / 100,
                            i = Number(c[2]) / 100,
                            e = .5 >= i ? i * (h + 1) : i + h - i * h,
                            d = 2 * i - e,
                            c.length > 3 && (c[3] = Number(a[3])),
                            c[0] = ia(g + 1 / 3, d, e),
                            c[1] = ia(g, d, e),
                            c[2] = ia(g - 1 / 3, d, e);
                    else
                        c = a.match(q) || ha.transparent;
                    c[0] = Number(c[0]),
                    c[1] = Number(c[1]),
                    c[2] = Number(c[2]),
                    c.length > 3 && (c[3] = Number(c[3]))
                }
            else
                c = ha.black;
            return b && !m && (d = c[0] / 255,
            e = c[1] / 255,
            f = c[2] / 255,
            j = Math.max(d, e, f),
            k = Math.min(d, e, f),
            i = (j + k) / 2,
            j === k ? g = h = 0 : (l = j - k,
            h = i > .5 ? l / (2 - j - k) : l / (j + k),
            g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4,
            g *= 60),
            c[0] = g + .5 | 0,
            c[1] = 100 * h + .5 | 0,
            c[2] = 100 * i + .5 | 0),
            c
        }
        , ka = function(a, b) {
            var c, d, e, f = a.match(la) || [], g = 0, h = f.length ? "" : a;
            for (c = 0; c < f.length; c++)
                d = f[c],
                e = a.substr(g, a.indexOf(d, g) - g),
                g += e.length + d.length,
                d = ja(d, b),
                3 === d.length && d.push(1),
                h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
            return h
        }, la = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in ha)
            la += "|" + j + "\\b";
        la = new RegExp(la + ")","gi"),
        g.colorStringFilter = function(a) {
            var b, c = a[0] + a[1];
            la.lastIndex = 0,
            la.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("),
            a[0] = ka(a[0], b),
            a[1] = ka(a[1], b))
        }
        ,
        b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
        var ma = function(a, b, c, d) {
            if (null == a)
                return function(a) {
                    return a
                }
                ;
            var e, f = b ? (a.match(la) || [""])[0] : "", g = a.split(f).join("").match(s) || [], h = a.substr(0, a.indexOf(g[0])), i = ")" === a.charAt(a.length - 1) ? ")" : "", j = -1 !== a.indexOf(" ") ? " " : ",", k = g.length, l = k > 0 ? g[0].replace(q, "") : "";
            return k ? e = b ? function(a) {
                var b, m, n, o;
                if ("number" == typeof a)
                    a += l;
                else if (d && G.test(a)) {
                    for (o = a.replace(G, "|").split("|"),
                    n = 0; n < o.length; n++)
                        o[n] = e(o[n]);
                    return o.join(",")
                }
                if (b = (a.match(la) || [f])[0],
                m = a.split(b).join("").match(s) || [],
                n = m.length,
                k > n--)
                    for (; ++n < k; )
                        m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
            }
            : function(a) {
                var b, f, m;
                if ("number" == typeof a)
                    a += l;
                else if (d && G.test(a)) {
                    for (f = a.replace(G, "|").split("|"),
                    m = 0; m < f.length; m++)
                        f[m] = e(f[m]);
                    return f.join(",")
                }
                if (b = a.match(s) || [],
                m = b.length,
                k > m--)
                    for (; ++m < k; )
                        b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                return h + b.join(j) + i
            }
            : function(a) {
                return a
            }
        }
          , na = function(a) {
            return a = a.split(","),
            function(b, c, d, e, f, g, h) {
                var i, j = (c + "").split(" ");
                for (h = {},
                i = 0; 4 > i; i++)
                    h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                return e.parse(b, h, f, g)
            }
        }
          , oa = (O._setPluginRatio = function(a) {
            this.plugin.setRatio(a);
            for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i; )
                b = h[i.v],
                i.r ? b = Math.round(b) : j > b && b > -j && (b = 0),
                i.t[i.p] = b,
                i = i._next;
            if (g.autoRotate && (g.autoRotate.rotation = h.rotation),
            1 === a || 0 === a)
                for (i = g.firstMPT,
                f = 1 === a ? "e" : "b"; i; ) {
                    if (c = i.t,
                    c.type) {
                        if (1 === c.type) {
                            for (e = c.xs0 + c.s + c.xs1,
                            d = 1; d < c.l; d++)
                                e += c["xn" + d] + c["xs" + (d + 1)];
                            c[f] = e
                        }
                    } else
                        c[f] = c.s + c.xs0;
                    i = i._next
                }
        }
        ,
        function(a, b, c, d, e) {
            this.t = a,
            this.p = b,
            this.v = c,
            this.r = e,
            d && (d._prev = this,
            this._next = d)
        }
        )
          , pa = (O._parseToProxy = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l = d, m = {}, n = {}, o = c._transform, p = J;
            for (c._transform = null,
            J = b,
            d = k = c.parse(a, b, d, e),
            J = p,
            f && (c._transform = o,
            l && (l._prev = null,
            l._prev && (l._prev._next = null))); d && d !== l; ) {
                if (d.type <= 1 && (h = d.p,
                n[h] = d.s + d.c,
                m[h] = d.s,
                f || (j = new oa(d,"s",h,j,d.r),
                d.c = 0),
                1 === d.type))
                    for (g = d.l; --g > 0; )
                        i = "xn" + g,
                        h = d.p + "_" + i,
                        n[h] = d.data[i],
                        m[h] = d[i],
                        f || (j = new oa(d,i,h,j,d.rxp[i]));
                d = d._next
            }
            return {
                proxy: m,
                end: n,
                firstMPT: j,
                pt: k
            }
        }
        ,
        O.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
            this.t = a,
            this.p = b,
            this.s = d,
            this.c = e,
            this.n = i || b,
            a instanceof pa || f.push(this.n),
            this.r = j,
            this.type = h || 0,
            k && (this.pr = k,
            c = !0),
            this.b = void 0 === l ? d : l,
            this.e = void 0 === m ? d + e : m,
            g && (this._next = g,
            g._prev = this)
        }
        )
          , qa = function(a, b, c, d, e, f) {
            var g = new pa(a,b,c,d - c,e,-1,f);
            return g.b = c,
            g.e = g.xs0 = d,
            g
        }
          , ra = g.parseComplex = function(a, b, c, d, e, f, g, h, i, j) {
            c = c || f || "",
            g = new pa(a,b,0,0,g,j ? 2 : 1,null,!1,h,c,d),
            d += "";
            var l, m, n, o, p, s, t, u, v, w, x, y, z, A = c.split(", ").join(",").split(" "), B = d.split(", ").join(",").split(" "), C = A.length, D = k !== !1;
            for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (A = A.join(" ").replace(G, ", ").split(" "),
            B = B.join(" ").replace(G, ", ").split(" "),
            C = A.length),
            C !== B.length && (A = (f || "").split(" "),
            C = A.length),
            g.plugin = i,
            g.setRatio = j,
            la.lastIndex = 0,
            l = 0; C > l; l++)
                if (o = A[l],
                p = B[l],
                u = parseFloat(o),
                u || 0 === u)
                    g.appendXtra("", u, ea(p, u), p.replace(r, ""), D && -1 !== p.indexOf("px"), !0);
                else if (e && la.test(o))
                    y = "," === p.charAt(p.length - 1) ? ")," : ")",
                    z = -1 !== p.indexOf("hsl") && Q,
                    o = ja(o, z),
                    p = ja(p, z),
                    v = o.length + p.length > 6,
                    v && !Q && 0 === p[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent",
                    g.e = g.e.split(B[l]).join("transparent")) : (Q || (v = !1),
                    z ? g.appendXtra(v ? "hsla(" : "hsl(", o[0], ea(p[0], o[0]), ",", !1, !0).appendXtra("", o[1], ea(p[1], o[1]), "%,", !1).appendXtra("", o[2], ea(p[2], o[2]), v ? "%," : "%" + y, !1) : g.appendXtra(v ? "rgba(" : "rgb(", o[0], p[0] - o[0], ",", !0, !0).appendXtra("", o[1], p[1] - o[1], ",", !0).appendXtra("", o[2], p[2] - o[2], v ? "," : y, !0),
                    v && (o = o.length < 4 ? 1 : o[3],
                    g.appendXtra("", o, (p.length < 4 ? 1 : p[3]) - o, y, !1))),
                    la.lastIndex = 0;
                else if (s = o.match(q)) {
                    if (t = p.match(r),
                    !t || t.length !== s.length)
                        return g;
                    for (n = 0,
                    m = 0; m < s.length; m++)
                        x = s[m],
                        w = o.indexOf(x, n),
                        g.appendXtra(o.substr(n, w - n), Number(x), ea(t[m], x), "", D && "px" === o.substr(w + x.length, 2), 0 === m),
                        n = w + x.length;
                    g["xs" + g.l] += o.substr(n)
                } else
                    g["xs" + g.l] += g.l ? " " + p : p;
            if (-1 !== d.indexOf("=") && g.data) {
                for (y = g.xs0 + g.data.s,
                l = 1; l < g.l; l++)
                    y += g["xs" + l] + g.data["xn" + l];
                g.e = y + g["xs" + l]
            }
            return g.l || (g.type = -1,
            g.xs0 = g.e),
            g.xfirst || g
        }
          , sa = 9;
        for (j = pa.prototype,
        j.l = j.pr = 0; --sa > 0; )
            j["xn" + sa] = 0,
            j["xs" + sa] = "";
        j.xs0 = "",
        j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null,
        j.appendXtra = function(a, b, c, d, e, f) {
            var g = this
              , h = g.l;
            return g["xs" + h] += f && h ? " " + a : a || "",
            c || 0 === h || g.plugin ? (g.l++,
            g.type = g.setRatio ? 2 : 1,
            g["xs" + g.l] = d || "",
            h > 0 ? (g.data["xn" + h] = b + c,
            g.rxp["xn" + h] = e,
            g["xn" + h] = b,
            g.plugin || (g.xfirst = new pa(g,"xn" + h,b,c,g.xfirst || g,0,g.n,e,g.pr),
            g.xfirst.xs0 = 0),
            g) : (g.data = {
                s: b + c
            },
            g.rxp = {},
            g.s = b,
            g.c = c,
            g.r = e,
            g)) : (g["xs" + h] += b + (d || ""),
            g)
        }
        ;
        var ta = function(a, b) {
            b = b || {},
            this.p = b.prefix ? V(a) || a : a,
            i[a] = i[this.p] = this,
            this.format = b.formatter || ma(b.defaultValue, b.color, b.collapsible, b.multi),
            b.parser && (this.parse = b.parser),
            this.clrs = b.color,
            this.multi = b.multi,
            this.keyword = b.keyword,
            this.dflt = b.defaultValue,
            this.pr = b.priority || 0
        }
          , ua = O._registerComplexSpecialProp = function(a, b, c) {
            "object" != typeof b && (b = {
                parser: c
            });
            var d, e, f = a.split(","), g = b.defaultValue;
            for (c = c || [g],
            d = 0; d < f.length; d++)
                b.prefix = 0 === d && b.prefix,
                b.defaultValue = c[d] || g,
                e = new ta(f[d],b)
        }
          , va = function(a) {
            if (!i[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                ua(a, {
                    parser: function(a, c, d, e, f, g, j) {
                        var k = h.com.greensock.plugins[b];
                        return k ? (k._cssRegister(),
                        i[d].parse(a, c, d, e, f, g, j)) : (S("Error: " + b + " js file not loaded."),
                        f)
                    }
                })
            }
        };
        j = ta.prototype,
        j.parseComplex = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m = this.keyword;
            if (this.multi && (G.test(c) || G.test(b) ? (h = b.replace(G, "|").split("|"),
            i = c.replace(G, "|").split("|")) : m && (h = [b],
            i = [c])),
            i) {
                for (j = i.length > h.length ? i.length : h.length,
                g = 0; j > g; g++)
                    b = h[g] = h[g] || this.dflt,
                    c = i[g] = i[g] || this.dflt,
                    m && (k = b.indexOf(m),
                    l = c.indexOf(m),
                    k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                b = h.join(", "),
                c = i.join(", ")
            }
            return ra(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
        }
        ,
        j.parse = function(a, b, c, d, f, g, h) {
            return this.parseComplex(a.style, this.format(X(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
        }
        ,
        g.registerSpecialProp = function(a, b, c) {
            ua(a, {
                parser: function(a, d, e, f, g, h, i) {
                    var j = new pa(a,e,0,0,g,2,e,!1,c);
                    return j.plugin = h,
                    j.setRatio = b(a, d, f._tween, e),
                    j
                },
                priority: c
            })
        }
        ,
        g.useSVGTransformAttr = m || n;
        var wa, xa = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), ya = V("transform"), za = T + "transform", Aa = V("transformOrigin"), Ba = null !== V("perspective"), Ca = O.Transform = function() {
            this.perspective = parseFloat(g.defaultTransformPerspective) || 0,
            this.force3D = !(g.defaultForce3D === !1 || !Ba) && (g.defaultForce3D || "auto")
        }
        , Da = window.SVGElement, Ea = function(a, b, c) {
            var d, e = K.createElementNS("http://www.w3.org/2000/svg", a), f = /([a-z])([A-Z])/g;
            for (d in c)
                e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
            return b.appendChild(e),
            e
        }, Fa = K.documentElement, Ga = function() {
            var a, b, c, d = p || /Android/i.test(P) && !window.chrome;
            return K.createElementNS && !d && (a = Ea("svg", Fa),
            b = Ea("rect", a, {
                width: 100,
                height: 50,
                x: 100
            }),
            c = b.getBoundingClientRect().width,
            b.style[Aa] = "50% 50%",
            b.style[ya] = "scaleX(0.5)",
            d = c === b.getBoundingClientRect().width && !(n && Ba),
            Fa.removeChild(a)),
            d
        }(), Ha = function(a, b, c, d, e) {
            var f, h, i, j, k, l, m, n, o, p, q, r, s, t, u = a._gsTransform, v = Ka(a, !0);
            u && (s = u.xOrigin,
            t = u.yOrigin),
            (!d || (f = d.split(" ")).length < 2) && (m = a.getBBox(),
            b = da(b).split(" "),
            f = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * m.width : parseFloat(b[0])) + m.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * m.height : parseFloat(b[1])) + m.y]),
            c.xOrigin = j = parseFloat(f[0]),
            c.yOrigin = k = parseFloat(f[1]),
            d && v !== Ja && (l = v[0],
            m = v[1],
            n = v[2],
            o = v[3],
            p = v[4],
            q = v[5],
            r = l * o - m * n,
            h = j * (o / r) + k * (-n / r) + (n * q - o * p) / r,
            i = j * (-m / r) + k * (l / r) - (l * q - m * p) / r,
            j = c.xOrigin = f[0] = h,
            k = c.yOrigin = f[1] = i),
            u && (e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (h = j - s,
            i = k - t,
            u.xOffset += h * v[0] + i * v[2] - h,
            u.yOffset += h * v[1] + i * v[3] - i) : u.xOffset = u.yOffset = 0),
            a.setAttribute("data-svg-origin", f.join(" "))
        }, Ia = function(a) {
            return !!(Da && "function" == typeof a.getBBox && a.getCTM && (!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM))
        }, Ja = [1, 0, 0, 1, 0, 0], Ka = function(a, b) {
            var c, d, e, f, g, h = a._gsTransform || new Ca, i = 1e5;
            if (ya ? d = X(a, za, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(E),
            d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), h.x || 0, h.y || 0].join(",") : ""),
            c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d,
            (h.svg || a.getBBox && Ia(a)) && (c && -1 !== (a.style[ya] + "").indexOf("matrix") && (d = a.style[ya],
            c = 0),
            e = a.getAttribute("transform"),
            c && e && (-1 !== e.indexOf("matrix") ? (d = e,
            c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
            c = 0))),
            c)
                return Ja;
            for (e = (d || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
            sa = e.length; --sa > -1; )
                f = Number(e[sa]),
                e[sa] = (g = f - (f |= 0)) ? (g * i + (0 > g ? -.5 : .5) | 0) / i + f : f;
            return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
        }, La = O.getTransform = function(a, c, d, f) {
            if (a._gsTransform && d && !f)
                return a._gsTransform;
            var h, i, j, k, l, m, n = d ? a._gsTransform || new Ca : new Ca, o = n.scaleX < 0, p = 2e-5, q = 1e5, r = Ba ? parseFloat(X(a, Aa, c, !1, "0 0 0").split(" ")[2]) || n.zOrigin || 0 : 0, s = parseFloat(g.defaultTransformPerspective) || 0;
            if (n.svg = !(!a.getBBox || !Ia(a)),
            n.svg && (Ha(a, X(a, Aa, e, !1, "50% 50%") + "", n, a.getAttribute("data-svg-origin")),
            wa = g.useSVGTransformAttr || Ga),
            h = Ka(a),
            h !== Ja) {
                if (16 === h.length) {
                    var t, u, v, w, x, y = h[0], z = h[1], A = h[2], B = h[3], C = h[4], D = h[5], E = h[6], F = h[7], G = h[8], H = h[9], J = h[10], K = h[12], L = h[13], M = h[14], N = h[11], O = Math.atan2(E, J);
                    n.zOrigin && (M = -n.zOrigin,
                    K = G * M - h[12],
                    L = H * M - h[13],
                    M = J * M + n.zOrigin - h[14]),
                    n.rotationX = O * I,
                    O && (w = Math.cos(-O),
                    x = Math.sin(-O),
                    t = C * w + G * x,
                    u = D * w + H * x,
                    v = E * w + J * x,
                    G = C * -x + G * w,
                    H = D * -x + H * w,
                    J = E * -x + J * w,
                    N = F * -x + N * w,
                    C = t,
                    D = u,
                    E = v),
                    O = Math.atan2(-A, J),
                    n.rotationY = O * I,
                    O && (w = Math.cos(-O),
                    x = Math.sin(-O),
                    t = y * w - G * x,
                    u = z * w - H * x,
                    v = A * w - J * x,
                    H = z * x + H * w,
                    J = A * x + J * w,
                    N = B * x + N * w,
                    y = t,
                    z = u,
                    A = v),
                    O = Math.atan2(z, y),
                    n.rotation = O * I,
                    O && (w = Math.cos(-O),
                    x = Math.sin(-O),
                    y = y * w + C * x,
                    u = z * w + D * x,
                    D = z * -x + D * w,
                    E = A * -x + E * w,
                    z = u),
                    n.rotationX && Math.abs(n.rotationX) + Math.abs(n.rotation) > 359.9 && (n.rotationX = n.rotation = 0,
                    n.rotationY = 180 - n.rotationY),
                    n.scaleX = (Math.sqrt(y * y + z * z) * q + .5 | 0) / q,
                    n.scaleY = (Math.sqrt(D * D + H * H) * q + .5 | 0) / q,
                    n.scaleZ = (Math.sqrt(E * E + J * J) * q + .5 | 0) / q,
                    n.skewX = 0,
                    n.perspective = N ? 1 / (0 > N ? -N : N) : 0,
                    n.x = K,
                    n.y = L,
                    n.z = M,
                    n.svg && (n.x -= n.xOrigin - (n.xOrigin * y - n.yOrigin * C),
                    n.y -= n.yOrigin - (n.yOrigin * z - n.xOrigin * D))
                } else if ((!Ba || f || !h.length || n.x !== h[4] || n.y !== h[5] || !n.rotationX && !n.rotationY) && (void 0 === n.x || "none" !== X(a, "display", c))) {
                    var P = h.length >= 6
                      , Q = P ? h[0] : 1
                      , R = h[1] || 0
                      , S = h[2] || 0
                      , T = P ? h[3] : 1;
                    n.x = h[4] || 0,
                    n.y = h[5] || 0,
                    j = Math.sqrt(Q * Q + R * R),
                    k = Math.sqrt(T * T + S * S),
                    l = Q || R ? Math.atan2(R, Q) * I : n.rotation || 0,
                    m = S || T ? Math.atan2(S, T) * I + l : n.skewX || 0,
                    Math.abs(m) > 90 && Math.abs(m) < 270 && (o ? (j *= -1,
                    m += 0 >= l ? 180 : -180,
                    l += 0 >= l ? 180 : -180) : (k *= -1,
                    m += 0 >= m ? 180 : -180)),
                    n.scaleX = j,
                    n.scaleY = k,
                    n.rotation = l,
                    n.skewX = m,
                    Ba && (n.rotationX = n.rotationY = n.z = 0,
                    n.perspective = s,
                    n.scaleZ = 1),
                    n.svg && (n.x -= n.xOrigin - (n.xOrigin * Q + n.yOrigin * S),
                    n.y -= n.yOrigin - (n.xOrigin * R + n.yOrigin * T))
                }
                n.zOrigin = r;
                for (i in n)
                    n[i] < p && n[i] > -p && (n[i] = 0)
            }
            return d && (a._gsTransform = n,
            n.svg && (wa && a.style[ya] ? b.delayedCall(.001, function() {
                Pa(a.style, ya)
            }) : !wa && a.getAttribute("transform") && b.delayedCall(.001, function() {
                a.removeAttribute("transform")
            }))),
            n
        }
        , Ma = function(a) {
            var b, c, d = this.data, e = -d.rotation * H, f = e + d.skewX * H, g = 1e5, h = (Math.cos(e) * d.scaleX * g | 0) / g, i = (Math.sin(e) * d.scaleX * g | 0) / g, j = (Math.sin(f) * -d.scaleY * g | 0) / g, k = (Math.cos(f) * d.scaleY * g | 0) / g, l = this.t.style, m = this.t.currentStyle;
            if (m) {
                c = i,
                i = -j,
                j = -c,
                b = m.filter,
                l.filter = "";
                var n, o, q = this.t.offsetWidth, r = this.t.offsetHeight, s = "absolute" !== m.position, t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k, w = d.x + q * d.xPercent / 100, x = d.y + r * d.yPercent / 100;
                if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2,
                o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2,
                w += n - (n * h + o * i),
                x += o - (n * j + o * k)),
                s ? (n = q / 2,
                o = r / 2,
                t += ", Dx=" + (n - (n * h + o * i) + w) + ", Dy=" + (o - (n * j + o * k) + x) + ")") : t += ", sizingMethod='auto expand')",
                -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(F, t) : l.filter = t + " " + b,
                (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || v.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")),
                !s) {
                    var y, z, A, B = 8 > p ? 1 : -1;
                    for (n = d.ieOffsetX || 0,
                    o = d.ieOffsetY || 0,
                    d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w),
                    d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x),
                    sa = 0; 4 > sa; sa++)
                        z = ba[sa],
                        y = m[z],
                        c = -1 !== y.indexOf("px") ? parseFloat(y) : Y(this.t, z, parseFloat(y), y.replace(u, "")) || 0,
                        A = c !== d[z] ? 2 > sa ? -d.ieOffsetX : -d.ieOffsetY : 2 > sa ? n - d.ieOffsetX : o - d.ieOffsetY,
                        l[z] = (d[z] = Math.round(c - A * (0 === sa || 2 === sa ? 1 : B))) + "px"
                }
            }
        }, Na = O.set3DTransformRatio = O.setTransformRatio = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data, A = this.t.style, B = z.rotation, C = z.rotationX, D = z.rotationY, E = z.scaleX, F = z.scaleY, G = z.scaleZ, I = z.x, J = z.y, K = z.z, L = z.svg, M = z.perspective, N = z.force3D;
            if (((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !K && !M && !D && !C && 1 === G || wa && L || !Ba)
                return void (B || z.skewX || L ? (B *= H,
                x = z.skewX * H,
                y = 1e5,
                b = Math.cos(B) * E,
                e = Math.sin(B) * E,
                c = Math.sin(B - x) * -F,
                f = Math.cos(B - x) * F,
                x && "simple" === z.skewType && (s = Math.tan(x),
                s = Math.sqrt(1 + s * s),
                c *= s,
                f *= s,
                z.skewY && (b *= s,
                e *= s)),
                L && (I += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset,
                J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset,
                wa && (z.xPercent || z.yPercent) && (p = this.t.getBBox(),
                I += .01 * z.xPercent * p.width,
                J += .01 * z.yPercent * p.height),
                p = 1e-6,
                p > I && I > -p && (I = 0),
                p > J && J > -p && (J = 0)),
                u = (b * y | 0) / y + "," + (e * y | 0) / y + "," + (c * y | 0) / y + "," + (f * y | 0) / y + "," + I + "," + J + ")",
                L && wa ? this.t.setAttribute("transform", "matrix(" + u) : A[ya] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[ya] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + I + "," + J + ")");
            if (n && (p = 1e-4,
            p > E && E > -p && (E = G = 2e-5),
            p > F && F > -p && (F = G = 2e-5),
            !M || z.z || z.rotationX || z.rotationY || (M = 0)),
            B || z.skewX)
                B *= H,
                q = b = Math.cos(B),
                r = e = Math.sin(B),
                z.skewX && (B -= z.skewX * H,
                q = Math.cos(B),
                r = Math.sin(B),
                "simple" === z.skewType && (s = Math.tan(z.skewX * H),
                s = Math.sqrt(1 + s * s),
                q *= s,
                r *= s,
                z.skewY && (b *= s,
                e *= s))),
                c = -r,
                f = q;
            else {
                if (!(D || C || 1 !== G || M || L))
                    return void (A[ya] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + J + "px," + K + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                b = f = 1,
                c = e = 0
            }
            j = 1,
            d = g = h = i = k = l = 0,
            m = M ? -1 / M : 0,
            o = z.zOrigin,
            p = 1e-6,
            v = ",",
            w = "0",
            B = D * H,
            B && (q = Math.cos(B),
            r = Math.sin(B),
            h = -r,
            k = m * -r,
            d = b * r,
            g = e * r,
            j = q,
            m *= q,
            b *= q,
            e *= q),
            B = C * H,
            B && (q = Math.cos(B),
            r = Math.sin(B),
            s = c * q + d * r,
            t = f * q + g * r,
            i = j * r,
            l = m * r,
            d = c * -r + d * q,
            g = f * -r + g * q,
            j *= q,
            m *= q,
            c = s,
            f = t),
            1 !== G && (d *= G,
            g *= G,
            j *= G,
            m *= G),
            1 !== F && (c *= F,
            f *= F,
            i *= F,
            l *= F),
            1 !== E && (b *= E,
            e *= E,
            h *= E,
            k *= E),
            (o || L) && (o && (I += d * -o,
            J += g * -o,
            K += j * -o + o),
            L && (I += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset,
            J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset),
            p > I && I > -p && (I = w),
            p > J && J > -p && (J = w),
            p > K && K > -p && (K = 0)),
            u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(",
            u += (p > b && b > -p ? w : b) + v + (p > e && e > -p ? w : e) + v + (p > h && h > -p ? w : h),
            u += v + (p > k && k > -p ? w : k) + v + (p > c && c > -p ? w : c) + v + (p > f && f > -p ? w : f),
            C || D || 1 !== G ? (u += v + (p > i && i > -p ? w : i) + v + (p > l && l > -p ? w : l) + v + (p > d && d > -p ? w : d),
            u += v + (p > g && g > -p ? w : g) + v + (p > j && j > -p ? w : j) + v + (p > m && m > -p ? w : m) + v) : u += ",0,0,0,0,1,0,",
            u += I + v + J + v + K + v + (M ? 1 + -K / M : 1) + ")",
            A[ya] = u
        }
        ;
        j = Ca.prototype,
        j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0,
        j.scaleX = j.scaleY = j.scaleZ = 1,
        ua("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i)
                    return f;
                d._lastParsedTransform = i;
                var j, k, l, m, n, o, p, q, r, s, t = a._gsTransform, u = a.style, v = 1e-6, w = xa.length, x = i, y = {}, z = "transformOrigin";
                if (i.display ? (m = X(a, "display"),
                u.display = "block",
                j = La(a, e, !0, i.parseTransform),
                u.display = m) : j = La(a, e, !0, i.parseTransform),
                d._transform = j,
                "string" == typeof x.transform && ya)
                    m = M.style,
                    m[ya] = x.transform,
                    m.display = "block",
                    m.position = "absolute",
                    K.body.appendChild(M),
                    k = La(M, null, !1),
                    K.body.removeChild(M),
                    k.perspective || (k.perspective = j.perspective),
                    null != x.xPercent && (k.xPercent = fa(x.xPercent, j.xPercent)),
                    null != x.yPercent && (k.yPercent = fa(x.yPercent, j.yPercent));
                else if ("object" == typeof x) {
                    if (k = {
                        scaleX: fa(null != x.scaleX ? x.scaleX : x.scale, j.scaleX),
                        scaleY: fa(null != x.scaleY ? x.scaleY : x.scale, j.scaleY),
                        scaleZ: fa(x.scaleZ, j.scaleZ),
                        x: fa(x.x, j.x),
                        y: fa(x.y, j.y),
                        z: fa(x.z, j.z),
                        xPercent: fa(x.xPercent, j.xPercent),
                        yPercent: fa(x.yPercent, j.yPercent),
                        perspective: fa(x.transformPerspective, j.perspective)
                    },
                    q = x.directionalRotation,
                    null != q)
                        if ("object" == typeof q)
                            for (m in q)
                                x[m] = q[m];
                        else
                            x.rotation = q;
                    "string" == typeof x.x && -1 !== x.x.indexOf("%") && (k.x = 0,
                    k.xPercent = fa(x.x, j.xPercent)),
                    "string" == typeof x.y && -1 !== x.y.indexOf("%") && (k.y = 0,
                    k.yPercent = fa(x.y, j.yPercent)),
                    k.rotation = ga("rotation"in x ? x.rotation : "shortRotation"in x ? x.shortRotation + "_short" : "rotationZ"in x ? x.rotationZ : j.rotation, j.rotation, "rotation", y),
                    Ba && (k.rotationX = ga("rotationX"in x ? x.rotationX : "shortRotationX"in x ? x.shortRotationX + "_short" : j.rotationX || 0, j.rotationX, "rotationX", y),
                    k.rotationY = ga("rotationY"in x ? x.rotationY : "shortRotationY"in x ? x.shortRotationY + "_short" : j.rotationY || 0, j.rotationY, "rotationY", y)),
                    k.skewX = null == x.skewX ? j.skewX : ga(x.skewX, j.skewX),
                    k.skewY = null == x.skewY ? j.skewY : ga(x.skewY, j.skewY),
                    (l = k.skewY - j.skewY) && (k.skewX += l,
                    k.rotation += l)
                }
                for (Ba && null != x.force3D && (j.force3D = x.force3D,
                p = !0),
                j.skewType = x.skewType || j.skewType || g.defaultSkewType,
                o = j.force3D || j.z || j.rotationX || j.rotationY || k.z || k.rotationX || k.rotationY || k.perspective,
                o || null == x.scale || (k.scaleZ = 1); --w > -1; )
                    c = xa[w],
                    n = k[c] - j[c],
                    (n > v || -v > n || null != x[c] || null != J[c]) && (p = !0,
                    f = new pa(j,c,j[c],n,f),
                    c in y && (f.e = y[c]),
                    f.xs0 = 0,
                    f.plugin = h,
                    d._overwriteProps.push(f.n));
                return n = x.transformOrigin,
                j.svg && (n || x.svgOrigin) && (r = j.xOffset,
                s = j.yOffset,
                Ha(a, da(n), k, x.svgOrigin, x.smoothOrigin),
                f = qa(j, "xOrigin", (t ? j : k).xOrigin, k.xOrigin, f, z),
                f = qa(j, "yOrigin", (t ? j : k).yOrigin, k.yOrigin, f, z),
                (r !== j.xOffset || s !== j.yOffset) && (f = qa(j, "xOffset", t ? r : j.xOffset, j.xOffset, f, z),
                f = qa(j, "yOffset", t ? s : j.yOffset, j.yOffset, f, z)),
                n = wa ? null : "0px 0px"),
                (n || Ba && o && j.zOrigin) && (ya ? (p = !0,
                c = Aa,
                n = (n || X(a, c, e, !1, "50% 50%")) + "",
                f = new pa(u,c,0,0,f,-1,z),
                f.b = u[c],
                f.plugin = h,
                Ba ? (m = j.zOrigin,
                n = n.split(" "),
                j.zOrigin = (n.length > 2 && (0 === m || "0px" !== n[2]) ? parseFloat(n[2]) : m) || 0,
                f.xs0 = f.e = n[0] + " " + (n[1] || "50%") + " 0px",
                f = new pa(j,"zOrigin",0,0,f,-1,f.n),
                f.b = m,
                f.xs0 = f.e = j.zOrigin) : f.xs0 = f.e = n) : da(n + "", j)),
                p && (d._transformType = j.svg && wa || !o && 3 !== this._transformType ? 2 : 3),
                f
            },
            prefix: !0
        }),
        ua("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        ua("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, f, g, h) {
                b = this.format(b);
                var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], z = a.style;
                for (q = parseFloat(a.offsetWidth),
                r = parseFloat(a.offsetHeight),
                i = b.split(" "),
                j = 0; j < y.length; j++)
                    this.p.indexOf("border") && (y[j] = V(y[j])),
                    m = l = X(a, y[j], e, !1, "0px"),
                    -1 !== m.indexOf(" ") && (l = m.split(" "),
                    m = l[0],
                    l = l[1]),
                    n = k = i[j],
                    o = parseFloat(m),
                    t = m.substr((o + "").length),
                    u = "=" === n.charAt(1),
                    u ? (p = parseInt(n.charAt(0) + "1", 10),
                    n = n.substr(2),
                    p *= parseFloat(n),
                    s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n),
                    s = n.substr((p + "").length)),
                    "" === s && (s = d[c] || t),
                    s !== t && (v = Y(a, "borderLeft", o, t),
                    w = Y(a, "borderTop", o, t),
                    "%" === s ? (m = v / q * 100 + "%",
                    l = w / r * 100 + "%") : "em" === s ? (x = Y(a, "borderLeft", 1, "em"),
                    m = v / x + "em",
                    l = w / x + "em") : (m = v + "px",
                    l = w + "px"),
                    u && (n = parseFloat(m) + p + s,
                    k = parseFloat(l) + p + s)),
                    g = ra(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                return g
            },
            prefix: !0,
            formatter: ma("0px 0px 0px 0px", !1, !0)
        }),
        ua("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, f, g) {
                var h, i, j, k, l, m, n = "background-position", o = e || W(a, null), q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"), r = this.format(b);
                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && (m = X(a, "backgroundImage").replace(B, ""),
                m && "none" !== m)) {
                    for (h = q.split(" "),
                    i = r.split(" "),
                    N.setAttribute("src", m),
                    j = 2; --j > -1; )
                        q = h[j],
                        k = -1 !== q.indexOf("%"),
                        k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - N.width : a.offsetHeight - N.height,
                        h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                    q = h.join(" ")
                }
                return this.parseComplex(a.style, q, r, f, g)
            },
            formatter: da
        }),
        ua("backgroundSize", {
            defaultValue: "0 0",
            formatter: da
        }),
        ua("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        ua("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        ua("transformStyle", {
            prefix: !0
        }),
        ua("backfaceVisibility", {
            prefix: !0
        }),
        ua("userSelect", {
            prefix: !0
        }),
        ua("margin", {
            parser: na("marginTop,marginRight,marginBottom,marginLeft")
        }),
        ua("padding", {
            parser: na("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        ua("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, f, g) {
                var h, i, j;
                return 9 > p ? (i = a.currentStyle,
                j = 8 > p ? " " : ",",
                h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")",
                b = this.format(b).split(",").join(j)) : (h = this.format(X(a, this.p, e, !1, this.dflt)),
                b = this.format(b)),
                this.parseComplex(a.style, h, b, f, g)
            }
        }),
        ua("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        ua("autoRound,strictUnits", {
            parser: function(a, b, c, d, e) {
                return e
            }
        }),
        ua("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, f, g) {
                return this.parseComplex(a.style, this.format(X(a, "borderTopWidth", e, !1, "0px") + " " + X(a, "borderTopStyle", e, !1, "solid") + " " + X(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g)
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(la) || ["#000"])[0]
            }
        }),
        ua("borderWidth", {
            parser: na("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        ua("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, e, f) {
                var g = a.style
                  , h = "cssFloat"in g ? "cssFloat" : "styleFloat";
                return new pa(g,h,0,0,e,-1,c,!1,0,g[h],b)
            }
        });
        var Oa = function(a) {
            var b, c = this.t, d = c.filter || X(this.data, "filter") || "", e = this.s + this.c * a | 0;
            100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"),
            b = !X(this.data, "filter")) : (c.filter = d.replace(x, ""),
            b = !0)),
            b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),
            -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(v, "opacity=" + e))
        };
        ua("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, f, g) {
                var h = parseFloat(X(a, "opacity", e, !1, "1"))
                  , i = a.style
                  , j = "autoAlpha" === c;
                return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
                j && 1 === h && "hidden" === X(a, "visibility", e) && 0 !== b && (h = 0),
                Q ? f = new pa(i,"opacity",h,b - h,f) : (f = new pa(i,"opacity",100 * h,100 * (b - h),f),
                f.xn1 = j ? 1 : 0,
                i.zoom = 1,
                f.type = 2,
                f.b = "alpha(opacity=" + f.s + ")",
                f.e = "alpha(opacity=" + (f.s + f.c) + ")",
                f.data = a,
                f.plugin = g,
                f.setRatio = Oa),
                j && (f = new pa(i,"visibility",0,0,f,-1,null,!1,0,0 !== h ? "inherit" : "hidden",0 === b ? "hidden" : "inherit"),
                f.xs0 = "inherit",
                d._overwriteProps.push(f.n),
                d._overwriteProps.push(c)),
                f
            }
        });
        var Pa = function(a, b) {
            b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b),
            a.removeProperty(b.replace(z, "-$1").toLowerCase())) : a.removeAttribute(b))
        }
          , Qa = function(a) {
            if (this.t._gsClassPT = this,
            1 === a || 0 === a) {
                this.t.setAttribute("class", 0 === a ? this.b : this.e);
                for (var b = this.data, c = this.t.style; b; )
                    b.v ? c[b.p] = b.v : Pa(c, b.p),
                    b = b._next;
                1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        ua("className", {
            parser: function(a, b, d, f, g, h, i) {
                var j, k, l, m, n, o = a.getAttribute("class") || "", p = a.style.cssText;
                if (g = f._classNamePT = new pa(a,d,0,0,g,2),
                g.setRatio = Qa,
                g.pr = -11,
                c = !0,
                g.b = o,
                k = $(a, e),
                l = a._gsClassPT) {
                    for (m = {},
                    n = l.data; n; )
                        m[n.p] = 1,
                        n = n._next;
                    l.setRatio(1)
                }
                return a._gsClassPT = g,
                g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""),
                a.setAttribute("class", g.e),
                j = _(a, k, $(a), i, m),
                a.setAttribute("class", o),
                g.data = j.firstMPT,
                a.style.cssText = p,
                g = g.xfirst = f.parse(a, j.difs, g, h)
            }
        });
        var Ra = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b, c, d, e, f, g = this.t.style, h = i.transform.parse;
                if ("all" === this.e)
                    g.cssText = "",
                    e = !0;
                else
                    for (b = this.e.split(" ").join("").split(","),
                    d = b.length; --d > -1; )
                        c = b[d],
                        i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Aa : i[c].p),
                        Pa(g, c);
                e && (Pa(g, ya),
                f = this.t._gsTransform,
                f && (f.svg && (this.t.removeAttribute("data-svg-origin"),
                this.t.removeAttribute("transform")),
                delete this.t._gsTransform))
            }
        };
        for (ua("clearProps", {
            parser: function(a, b, d, e, f) {
                return f = new pa(a,d,0,0,f,2),
                f.setRatio = Ra,
                f.e = b,
                f.pr = -10,
                f.data = e._tween,
                c = !0,
                f
            }
        }),
        j = "bezier,throwProps,physicsProps,physics2D".split(","),
        sa = j.length; sa--; )
            va(j[sa]);
        j = g.prototype,
        j._firstPT = j._lastParsedTransform = j._transform = null,
        j._onInitTween = function(a, b, h) {
            if (!a.nodeType)
                return !1;
            this._target = a,
            this._tween = h,
            this._vars = b,
            k = b.autoRound,
            c = !1,
            d = b.suffixMap || g.suffixMap,
            e = W(a, ""),
            f = this._overwriteProps;
            var j, n, p, q, r, s, t, u, v, x = a.style;
            if (l && "" === x.zIndex && (j = X(a, "zIndex", e),
            ("auto" === j || "" === j) && this._addLazySet(x, "zIndex", 0)),
            "string" == typeof b && (q = x.cssText,
            j = $(a, e),
            x.cssText = q + ";" + b,
            j = _(a, j, $(a)).difs,
            !Q && w.test(b) && (j.opacity = parseFloat(RegExp.$1)),
            b = j,
            x.cssText = q),
            b.className ? this._firstPT = n = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = n = this.parse(a, b, null),
            this._transformType) {
                for (v = 3 === this._transformType,
                ya ? m && (l = !0,
                "" === x.zIndex && (t = X(a, "zIndex", e),
                ("auto" === t || "" === t) && this._addLazySet(x, "zIndex", 0)),
                o && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (v ? "visible" : "hidden"))) : x.zoom = 1,
                p = n; p && p._next; )
                    p = p._next;
                u = new pa(a,"transform",0,0,null,2),
                this._linkCSSP(u, null, p),
                u.setRatio = ya ? Na : Ma,
                u.data = this._transform || La(a, e, !0),
                u.tween = h,
                u.pr = -1,
                f.pop()
            }
            if (c) {
                for (; n; ) {
                    for (s = n._next,
                    p = q; p && p.pr > n.pr; )
                        p = p._next;
                    (n._prev = p ? p._prev : r) ? n._prev._next = n : q = n,
                    (n._next = p) ? p._prev = n : r = n,
                    n = s
                }
                this._firstPT = q
            }
            return !0
        }
        ,
        j.parse = function(a, b, c, f) {
            var g, h, j, l, m, n, o, p, q, r, s = a.style;
            for (g in b)
                n = b[g],
                h = i[g],
                h ? c = h.parse(a, n, g, this, c, f, b) : (m = X(a, g, e) + "",
                q = "string" == typeof n,
                "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && y.test(n) ? (q || (n = ja(n),
                n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"),
                c = ra(s, g, m, n, !0, "transparent", c, 0, f)) : !q || -1 === n.indexOf(" ") && -1 === n.indexOf(",") ? (j = parseFloat(m),
                o = j || 0 === j ? m.substr((j + "").length) : "",
                ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ca(a, g, e),
                o = "px") : "left" === g || "top" === g ? (j = Z(a, g, e),
                o = "px") : (j = "opacity" !== g ? 0 : 1,
                o = "")),
                r = q && "=" === n.charAt(1),
                r ? (l = parseInt(n.charAt(0) + "1", 10),
                n = n.substr(2),
                l *= parseFloat(n),
                p = n.replace(u, "")) : (l = parseFloat(n),
                p = q ? n.replace(u, "") : ""),
                "" === p && (p = g in d ? d[g] : o),
                n = l || 0 === l ? (r ? l + j : l) + p : b[g],
                o !== p && "" !== p && (l || 0 === l) && j && (j = Y(a, g, j, o),
                "%" === p ? (j /= Y(a, g, 100, "%") / 100,
                b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= Y(a, g, 1, p) : "px" !== p && (l = Y(a, g, l, p),
                p = "px"),
                r && (l || 0 === l) && (n = l + j + p)),
                r && (l += j),
                !j && 0 !== j || !l && 0 !== l ? void 0 !== s[g] && (n || n + "" != "NaN" && null != n) ? (c = new pa(s,g,l || j || 0,0,c,-1,g,!1,0,m,n),
                c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : S("invalid " + g + " tween value: " + b[g]) : (c = new pa(s,g,j,l - j,c,0,g,k !== !1 && ("px" === p || "zIndex" === g),0,m,n),
                c.xs0 = p)) : c = ra(s, g, m, n, !0, null, c, 0, f)),
                f && c && !c.plugin && (c.plugin = f);
            return c
        }
        ,
        j.setRatio = function(a) {
            var b, c, d, e = this._firstPT, f = 1e-6;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; e; ) {
                        if (b = e.c * a + e.s,
                        e.r ? b = Math.round(b) : f > b && b > -f && (b = 0),
                        e.type)
                            if (1 === e.type)
                                if (d = e.l,
                                2 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                else if (3 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1,
                                    d = 1; d < e.l; d++)
                                        c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                }
                            else
                                -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                        else
                            e.t[e.p] = b + e.xs0;
                        e = e._next
                    }
                else
                    for (; e; )
                        2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a),
                        e = e._next;
            else
                for (; e; ) {
                    if (2 !== e.type)
                        if (e.r && -1 !== e.type)
                            if (b = Math.round(e.s + e.c),
                            e.type) {
                                if (1 === e.type) {
                                    for (d = e.l,
                                    c = e.xs0 + b + e.xs1,
                                    d = 1; d < e.l; d++)
                                        c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                }
                            } else
                                e.t[e.p] = b + e.xs0;
                        else
                            e.t[e.p] = e.e;
                    else
                        e.setRatio(a);
                    e = e._next
                }
        }
        ,
        j._enableTransforms = function(a) {
            this._transform = this._transform || La(this._target, e, !0),
            this._transformType = this._transform.svg && wa || !a && 3 !== this._transformType ? 2 : 3
        }
        ;
        var Sa = function(a) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        j._addLazySet = function(a, b, c) {
            var d = this._firstPT = new pa(a,b,0,0,this._firstPT,2);
            d.e = c,
            d.setRatio = Sa,
            d.data = this
        }
        ,
        j._linkCSSP = function(a, b, c, d) {
            return a && (b && (b._prev = a),
            a._next && (a._next._prev = a._prev),
            a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next,
            d = !0),
            c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a),
            a._next = b,
            a._prev = c),
            a
        }
        ,
        j._kill = function(b) {
            var c, d, e, f = b;
            if (b.autoAlpha || b.alpha) {
                f = {};
                for (d in b)
                    f[d] = b[d];
                f.opacity = 1,
                f.autoAlpha && (f.visibility = 1)
            }
            return b.className && (c = this._classNamePT) && (e = c.xfirst,
            e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next),
            c._next && this._linkCSSP(c._next, c._next._next, e._prev),
            this._classNamePT = null),
            a.prototype._kill.call(this, f)
        }
        ;
        var Ta = function(a, b, c) {
            var d, e, f, g;
            if (a.slice)
                for (e = a.length; --e > -1; )
                    Ta(a[e], b, c);
            else
                for (d = a.childNodes,
                e = d.length; --e > -1; )
                    f = d[e],
                    g = f.type,
                    f.style && (b.push($(f)),
                    c && c.push(f)),
                    1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Ta(f, b, c)
        };
        return g.cascadeTo = function(a, c, d) {
            var e, f, g, h, i = b.to(a, c, d), j = [i], k = [], l = [], m = [], n = b._internals.reservedProps;
            for (a = i._targets || i.target,
            Ta(a, k, m),
            i.render(c, !0, !0),
            Ta(a, l),
            i.render(0, !0, !0),
            i._enabled(!0),
            e = m.length; --e > -1; )
                if (f = _(m[e], k[e], l[e]),
                f.firstMPT) {
                    f = f.difs;
                    for (g in d)
                        n[g] && (f[g] = d[g]);
                    h = {};
                    for (g in f)
                        h[g] = k[e][g];
                    j.push(b.fromTo(m[e], c, h, f))
                }
            return j
        }
        ,
        a.activate([g]),
        g
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(a) {
    "use strict";
    var b = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"),
    module.exports = b())
}("CSSPlugin");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
        var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope, f = e.com.greensock, g = 2 * Math.PI, h = Math.PI / 2, i = f._class, j = function(b, c) {
            var d = i("easing." + b, function() {}, !0)
              , e = d.prototype = new a;
            return e.constructor = d,
            e.getRatio = c,
            d
        }, k = a.register || function() {}
        , l = function(a, b, c, d, e) {
            var f = i("easing." + a, {
                easeOut: new b,
                easeIn: new c,
                easeInOut: new d
            }, !0);
            return k(f, a),
            f
        }, m = function(a, b, c) {
            this.t = a,
            this.v = b,
            c && (this.next = c,
            c.prev = this,
            this.c = c.v - b,
            this.gap = c.t - a)
        }, n = function(b, c) {
            var d = i("easing." + b, function(a) {
                this._p1 = a || 0 === a ? a : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , e = d.prototype = new a;
            return e.constructor = d,
            e.getRatio = c,
            e.config = function(a) {
                return new d(a)
            }
            ,
            d
        }, o = l("Back", n("BackOut", function(a) {
            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
        }), n("BackIn", function(a) {
            return a * a * ((this._p1 + 1) * a - this._p1)
        }), n("BackInOut", function(a) {
            return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
        })), p = i("easing.SlowMo", function(a, b, c) {
            b = b || 0 === b ? b : .7,
            null == a ? a = .7 : a > 1 && (a = 1),
            this._p = 1 !== a ? b : 0,
            this._p1 = (1 - a) / 2,
            this._p2 = a,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = c === !0
        }, !0), q = p.prototype = new a;
        return q.constructor = p,
        q.getRatio = function(a) {
            var b = a + (.5 - a) * this._p;
            return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
        }
        ,
        p.ease = new p(.7,.7),
        q.config = p.config = function(a, b, c) {
            return new p(a,b,c)
        }
        ,
        b = i("easing.SteppedEase", function(a) {
            a = a || 1,
            this._p1 = 1 / a,
            this._p2 = a + 1
        }, !0),
        q = b.prototype = new a,
        q.constructor = b,
        q.getRatio = function(a) {
            return 0 > a ? a = 0 : a >= 1 && (a = .999999999),
            (this._p2 * a >> 0) * this._p1
        }
        ,
        q.config = b.config = function(a) {
            return new b(a)
        }
        ,
        c = i("easing.RoughEase", function(b) {
            b = b || {};
            for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1; )
                c = o ? Math.random() : 1 / l * n,
                d = q ? q.getRatio(c) : c,
                "none" === i ? e = r : "out" === i ? (f = 1 - c,
                e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c,
                e = f * f * .5 * r) : (f = 2 * (1 - c),
                e = f * f * .5 * r),
                o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e,
                p && (d > 1 ? d = 1 : 0 > d && (d = 0)),
                j[k++] = {
                    x: c,
                    y: d
                };
            for (j.sort(function(a, b) {
                return a.x - b.x
            }),
            h = new m(1,1,null),
            n = l; --n > -1; )
                g = j[n],
                h = new m(g.x,g.y,h);
            this._prev = new m(0,0,0 !== h.t ? h : h.next)
        }, !0),
        q = c.prototype = new a,
        q.constructor = c,
        q.getRatio = function(a) {
            var b = this._prev;
            if (a > b.t) {
                for (; b.next && a >= b.t; )
                    b = b.next;
                b = b.prev
            } else
                for (; b.prev && a <= b.t; )
                    b = b.prev;
            return this._prev = b,
            b.v + (a - b.t) / b.gap * b.c
        }
        ,
        q.config = function(a) {
            return new c(a)
        }
        ,
        c.ease = new c,
        l("Bounce", j("BounceOut", function(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }), j("BounceIn", function(a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
        }), j("BounceInOut", function(a) {
            var b = .5 > a;
            return a = b ? 1 - 2 * a : 2 * a - 1,
            a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375,
            b ? .5 * (1 - a) : .5 * a + .5
        })),
        l("Circ", j("CircOut", function(a) {
            return Math.sqrt(1 - (a -= 1) * a)
        }), j("CircIn", function(a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }), j("CircInOut", function(a) {
            return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        })),
        d = function(b, c, d) {
            var e = i("easing." + b, function(a, b) {
                this._p1 = a >= 1 ? a : 1,
                this._p2 = (b || d) / (1 > a ? a : 1),
                this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0),
                this._p2 = g / this._p2
            }, !0)
              , f = e.prototype = new a;
            return f.constructor = e,
            f.getRatio = c,
            f.config = function(a, b) {
                return new e(a,b)
            }
            ,
            e
        }
        ,
        l("Elastic", d("ElasticOut", function(a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
        }, .3), d("ElasticIn", function(a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
        }, .3), d("ElasticInOut", function(a) {
            return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
        }, .45)),
        l("Expo", j("ExpoOut", function(a) {
            return 1 - Math.pow(2, -10 * a)
        }), j("ExpoIn", function(a) {
            return Math.pow(2, 10 * (a - 1)) - .001
        }), j("ExpoInOut", function(a) {
            return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
        })),
        l("Sine", j("SineOut", function(a) {
            return Math.sin(a * h)
        }), j("SineIn", function(a) {
            return -Math.cos(a * h) + 1
        }), j("SineInOut", function(a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        })),
        i("easing.EaseLookup", {
            find: function(b) {
                return a.map[b]
            }
        }, !0),
        k(e.SlowMo, "SlowMo", "ease,"),
        k(c, "RoughEase", "ease,"),
        k(b, "SteppedEase", "ease,"),
        o
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function() {
    "use strict";
    var a = function() {
        return _gsScope.GreenSockGlobals || _gsScope
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], a) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"),
    module.exports = a())
}(),
!function(a, b) {
    "use strict";
    a.MixItUp = function() {
        var b = this;
        b._execAction("_constructor", 0),
        a.extend(b, {
            selectors: {
                target: ".mix",
                filter: ".filter",
                sort: ".sort"
            },
            animation: {
                enable: !0,
                effects: "fade scale",
                duration: 600,
                easing: "ease",
                perspectiveDistance: "3000",
                perspectiveOrigin: "50% 50%",
                queue: !0,
                queueLimit: 1,
                animateChangeLayout: !1,
                animateResizeContainer: !0,
                animateResizeTargets: !1,
                staggerSequence: !1,
                reverseOut: !1
            },
            callbacks: {
                onMixLoad: !1,
                onMixStart: !1,
                onMixBusy: !1,
                onMixEnd: !1,
                onMixFail: !1,
                _user: !1
            },
            controls: {
                enable: !0,
                live: !1,
                toggleFilterButtons: !1,
                toggleLogic: "or",
                activeClass: "active"
            },
            layout: {
                display: "inline-block",
                containerClass: "",
                containerClassFail: "fail"
            },
            load: {
                filter: "all",
                sort: !1
            },
            _$body: null,
            _$container: null,
            _$targets: null,
            _$parent: null,
            _$sortButtons: null,
            _$filterButtons: null,
            _suckMode: !1,
            _mixing: !1,
            _sorting: !1,
            _clicking: !1,
            _loading: !0,
            _changingLayout: !1,
            _changingClass: !1,
            _changingDisplay: !1,
            _origOrder: [],
            _startOrder: [],
            _newOrder: [],
            _activeFilter: null,
            _toggleArray: [],
            _toggleString: "",
            _activeSort: "default:asc",
            _newSort: null,
            _startHeight: null,
            _newHeight: null,
            _incPadding: !0,
            _newDisplay: null,
            _newClass: null,
            _targetsBound: 0,
            _targetsDone: 0,
            _queue: [],
            _$show: a(),
            _$hide: a()
        }),
        b._execAction("_constructor", 1)
    }
    ,
    a.MixItUp.prototype = {
        constructor: a.MixItUp,
        _instances: {},
        _handled: {
            _filter: {},
            _sort: {}
        },
        _bound: {
            _filter: {},
            _sort: {}
        },
        _actions: {},
        _filters: {},
        extend: function(b) {
            for (var c in b)
                a.MixItUp.prototype[c] = b[c]
        },
        addAction: function(b, c, d, e) {
            a.MixItUp.prototype._addHook("_actions", b, c, d, e)
        },
        addFilter: function(b, c, d, e) {
            a.MixItUp.prototype._addHook("_filters", b, c, d, e)
        },
        _addHook: function(b, c, d, e, f) {
            var g = a.MixItUp.prototype[b]
              , h = {};
            f = 1 === f || "post" === f ? "post" : "pre",
            h[c] = {},
            h[c][f] = {},
            h[c][f][d] = e,
            a.extend(!0, g, h)
        },
        _init: function(b, c) {
            var d = this;
            if (d._execAction("_init", 0, arguments),
            c && a.extend(!0, d, c),
            d._$body = a("body"),
            d._domNode = b,
            d._$container = a(b),
            d._$container.addClass(d.layout.containerClass),
            d._id = b.id,
            d._platformDetect(),
            d._brake = d._getPrefixedCSS("transition", "none"),
            d._refresh(!0),
            d._$parent = d._$targets.parent().length ? d._$targets.parent() : d._$container,
            d.load.sort && (d._newSort = d._parseSort(d.load.sort),
            d._newSortString = d.load.sort,
            d._activeSort = d.load.sort,
            d._sort(),
            d._printSort()),
            d._activeFilter = "all" === d.load.filter ? d.selectors.target : "none" === d.load.filter ? "" : d.load.filter,
            d.controls.enable && d._bindHandlers(),
            d.controls.toggleFilterButtons) {
                d._buildToggleArray();
                for (var e = 0; e < d._toggleArray.length; e++)
                    d._updateControls({
                        filter: d._toggleArray[e],
                        sort: d._activeSort
                    }, !0)
            } else
                d.controls.enable && d._updateControls({
                    filter: d._activeFilter,
                    sort: d._activeSort
                });
            d._filter(),
            d._init = !0,
            d._$container.data("mixItUp", d),
            d._execAction("_init", 1, arguments),
            d._buildState(),
            d._$targets.css(d._brake),
            d._goMix(d.animation.enable)
        },
        _platformDetect: function() {
            var a = this
              , c = ["Webkit", "Moz", "O", "ms"]
              , d = ["webkit", "moz"]
              , e = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || !1
              , f = "undefined" != typeof InstallTrigger
              , g = function(a) {
                for (var b = 0; b < c.length; b++)
                    if (c[b] + "Transition"in a.style)
                        return {
                            prefix: "-" + c[b].toLowerCase() + "-",
                            vendor: c[b]
                        };
                return "transition"in a.style && ""
            }
              , h = g(a._domNode);
            a._execAction("_platformDetect", 0),
            a._chrome = !!e && parseInt(e[1], 10),
            a._ff = !!f && parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]),
            a._prefix = h.prefix,
            a._vendor = h.vendor,
            a._suckMode = !window.atob || !a._prefix,
            a._suckMode && (a.animation.enable = !1),
            a._ff && a._ff <= 4 && (a.animation.enable = !1);
            for (var i = 0; i < d.length && !window.requestAnimationFrame; i++)
                window.requestAnimationFrame = window[d[i] + "RequestAnimationFrame"];
            "function" != typeof Object.getPrototypeOf && ("object" == typeof "test".__proto__ ? Object.getPrototypeOf = function(a) {
                return a.__proto__
            }
            : Object.getPrototypeOf = function(a) {
                return a.constructor.prototype
            }
            ),
            a._domNode.nextElementSibling === b && Object.defineProperty(Element.prototype, "nextElementSibling", {
                get: function() {
                    for (var a = this.nextSibling; a; ) {
                        if (1 === a.nodeType)
                            return a;
                        a = a.nextSibling
                    }
                    return null
                }
            }),
            a._execAction("_platformDetect", 1)
        },
        _refresh: function(a, c) {
            var d = this;
            d._execAction("_refresh", 0, arguments),
            d._$targets = d._$container.find(d.selectors.target);
            for (var e = 0; e < d._$targets.length; e++) {
                var f = d._$targets[e];
                if (f.dataset === b || c) {
                    f.dataset = {};
                    for (var g = 0; g < f.attributes.length; g++) {
                        var h = f.attributes[g]
                          , i = h.name
                          , j = h.value;
                        if (i.indexOf("data-") > -1) {
                            var k = d._helpers._camelCase(i.substring(5, i.length));
                            f.dataset[k] = j
                        }
                    }
                }
                f.mixParent === b && (f.mixParent = d._id)
            }
            if (d._$targets.length && a || !d._origOrder.length && d._$targets.length) {
                d._origOrder = [];
                for (var e = 0; e < d._$targets.length; e++) {
                    var f = d._$targets[e];
                    d._origOrder.push(f)
                }
            }
            d._execAction("_refresh", 1, arguments)
        },
        _bindHandlers: function() {
            var c = this
              , d = a.MixItUp.prototype._bound._filter
              , e = a.MixItUp.prototype._bound._sort;
            c._execAction("_bindHandlers", 0),
            c.controls.live ? c._$body.on("click.mixItUp." + c._id, c.selectors.sort, function() {
                c._processClick(a(this), "sort")
            }).on("click.mixItUp." + c._id, c.selectors.filter, function() {
                c._processClick(a(this), "filter")
            }) : (c._$sortButtons = a(c.selectors.sort),
            c._$filterButtons = a(c.selectors.filter),
            c._$sortButtons.on("click.mixItUp." + c._id, function() {
                c._processClick(a(this), "sort")
            }),
            c._$filterButtons.on("click.mixItUp." + c._id, function() {
                c._processClick(a(this), "filter")
            })),
            d[c.selectors.filter] = d[c.selectors.filter] === b ? 1 : d[c.selectors.filter] + 1,
            e[c.selectors.sort] = e[c.selectors.sort] === b ? 1 : e[c.selectors.sort] + 1,
            c._execAction("_bindHandlers", 1)
        },
        _processClick: function(c, d) {
            var e = this
              , f = function(c, d, f) {
                var g = a.MixItUp.prototype;
                g._handled["_" + d][e.selectors[d]] = g._handled["_" + d][e.selectors[d]] === b ? 1 : g._handled["_" + d][e.selectors[d]] + 1,
                g._handled["_" + d][e.selectors[d]] === g._bound["_" + d][e.selectors[d]] && (c[(f ? "remove" : "add") + "Class"](e.controls.activeClass),
                delete g._handled["_" + d][e.selectors[d]])
            };
            if (e._execAction("_processClick", 0, arguments),
            !e._mixing || e.animation.queue && e._queue.length < e.animation.queueLimit) {
                if (e._clicking = !0,
                "sort" === d) {
                    var g = c.attr("data-sort");
                    (!c.hasClass(e.controls.activeClass) || g.indexOf("random") > -1) && (a(e.selectors.sort).removeClass(e.controls.activeClass),
                    f(c, d),
                    e.sort(g))
                }
                if ("filter" === d) {
                    var h, i = c.attr("data-filter"), j = "or" === e.controls.toggleLogic ? "," : "";
                    e.controls.toggleFilterButtons ? (e._buildToggleArray(),
                    c.hasClass(e.controls.activeClass) ? (f(c, d, !0),
                    h = e._toggleArray.indexOf(i),
                    e._toggleArray.splice(h, 1)) : (f(c, d),
                    e._toggleArray.push(i)),
                    e._toggleArray = a.grep(e._toggleArray, function(a) {
                        return a
                    }),
                    e._toggleString = e._toggleArray.join(j),
                    e.filter(e._toggleString)) : c.hasClass(e.controls.activeClass) || (a(e.selectors.filter).removeClass(e.controls.activeClass),
                    f(c, d),
                    e.filter(i))
                }
                e._execAction("_processClick", 1, arguments)
            } else
                "function" == typeof e.callbacks.onMixBusy && e.callbacks.onMixBusy.call(e._domNode, e._state, e),
                e._execAction("_processClickBusy", 1, arguments)
        },
        _buildToggleArray: function() {
            var a = this
              , b = a._activeFilter.replace(/\s/g, "");
            if (a._execAction("_buildToggleArray", 0, arguments),
            "or" === a.controls.toggleLogic)
                a._toggleArray = b.split(",");
            else {
                a._toggleArray = b.split("."),
                !a._toggleArray[0] && a._toggleArray.shift();
                for (var c, d = 0; c = a._toggleArray[d]; d++)
                    a._toggleArray[d] = "." + c
            }
            a._execAction("_buildToggleArray", 1, arguments)
        },
        _updateControls: function(c, d) {
            var e = this
              , f = {
                filter: c.filter,
                sort: c.sort
            }
              , g = function(a, b) {
                try {
                    d && "filter" === h && "none" !== f.filter && "" !== f.filter ? a.filter(b).addClass(e.controls.activeClass) : a.removeClass(e.controls.activeClass).filter(b).addClass(e.controls.activeClass)
                } catch (c) {}
            }
              , h = "filter"
              , i = null;
            e._execAction("_updateControls", 0, arguments),
            c.filter === b && (f.filter = e._activeFilter),
            c.sort === b && (f.sort = e._activeSort),
            f.filter === e.selectors.target && (f.filter = "all");
            for (var j = 0; 2 > j; j++)
                i = e.controls.live ? a(e.selectors[h]) : e["_$" + h + "Buttons"],
                i && g(i, "[data-" + h + '="' + f[h] + '"]'),
                h = "sort";
            e._execAction("_updateControls", 1, arguments)
        },
        _filter: function() {
            var b = this;
            b._execAction("_filter", 0);
            for (var c = 0; c < b._$targets.length; c++) {
                var d = a(b._$targets[c]);
                d.is(b._activeFilter) ? b._$show = b._$show.add(d) : b._$hide = b._$hide.add(d)
            }
            b._execAction("_filter", 1)
        },
        _sort: function() {
            var a = this
              , b = function(a) {
                for (var b = a.slice(), c = b.length, d = c; d--; ) {
                    var e = parseInt(Math.random() * c)
                      , f = b[d];
                    b[d] = b[e],
                    b[e] = f
                }
                return b
            };
            a._execAction("_sort", 0),
            a._startOrder = [];
            for (var c = 0; c < a._$targets.length; c++) {
                var d = a._$targets[c];
                a._startOrder.push(d)
            }
            switch (a._newSort[0].sortBy) {
            case "default":
                a._newOrder = a._origOrder;
                break;
            case "random":
                a._newOrder = b(a._startOrder);
                break;
            case "custom":
                a._newOrder = a._newSort[0].order;
                break;
            default:
                a._newOrder = a._startOrder.concat().sort(function(b, c) {
                    return a._compare(b, c)
                })
            }
            a._execAction("_sort", 1)
        },
        _compare: function(a, b, c) {
            c = c ? c : 0;
            var d = this
              , e = d._newSort[c].order
              , f = function(a) {
                return a.dataset[d._newSort[c].sortBy] || 0
            }
              , g = isNaN(1 * f(a)) ? f(a).toLowerCase() : 1 * f(a)
              , h = isNaN(1 * f(b)) ? f(b).toLowerCase() : 1 * f(b);
            return h > g ? "asc" === e ? -1 : 1 : g > h ? "asc" === e ? 1 : -1 : g === h && d._newSort.length > c + 1 ? d._compare(a, b, c + 1) : 0
        },
        _printSort: function(a) {
            var b = this
              , c = a ? b._startOrder : b._newOrder
              , d = b._$parent[0].querySelectorAll(b.selectors.target)
              , e = d.length ? d[d.length - 1].nextElementSibling : null
              , f = document.createDocumentFragment();
            b._execAction("_printSort", 0, arguments);
            for (var g = 0; g < d.length; g++) {
                var h = d[g]
                  , i = h.nextSibling;
                "absolute" !== h.style.position && (i && "#text" === i.nodeName && b._$parent[0].removeChild(i),
                b._$parent[0].removeChild(h))
            }
            for (var g = 0; g < c.length; g++) {
                var j = c[g];
                if ("default" !== b._newSort[0].sortBy || "desc" !== b._newSort[0].order || a)
                    f.appendChild(j),
                    f.appendChild(document.createTextNode(" "));
                else {
                    var k = f.firstChild;
                    f.insertBefore(j, k),
                    f.insertBefore(document.createTextNode(" "), j)
                }
            }
            e ? b._$parent[0].insertBefore(f, e) : b._$parent[0].appendChild(f),
            b._execAction("_printSort", 1, arguments)
        },
        _parseSort: function(a) {
            for (var b = this, c = "string" == typeof a ? a.split(" ") : [a], d = [], e = 0; e < c.length; e++) {
                var f = "string" == typeof a ? c[e].split(":") : ["custom", c[e]]
                  , g = {
                    sortBy: b._helpers._camelCase(f[0]),
                    order: f[1] || "asc"
                };
                if (d.push(g),
                "default" === g.sortBy || "random" === g.sortBy)
                    break
            }
            return b._execFilter("_parseSort", d, arguments)
        },
        _parseEffects: function() {
            var a = this
              , b = {
                opacity: "",
                transformIn: "",
                transformOut: "",
                filter: ""
            }
              , c = function(b, c, d) {
                if (a.animation.effects.indexOf(b) > -1) {
                    if (c) {
                        var e = a.animation.effects.indexOf(b + "(");
                        if (e > -1) {
                            var f = a.animation.effects.substring(e)
                              , g = /\(([^)]+)\)/.exec(f)
                              , h = g[1];
                            return {
                                val: h
                            }
                        }
                    }
                    return !0
                }
                return !1
            }
              , d = function(a, b) {
                return b ? "-" === a.charAt(0) ? a.substr(1, a.length) : "-" + a : a
            }
              , e = function(a, e) {
                for (var f = [["scale", ".01"], ["translateX", "20px"], ["translateY", "20px"], ["translateZ", "20px"], ["rotateX", "90deg"], ["rotateY", "90deg"], ["rotateZ", "180deg"]], g = 0; g < f.length; g++) {
                    var h = f[g][0]
                      , i = f[g][1]
                      , j = e && "scale" !== h;
                    b[a] += c(h) ? h + "(" + d(c(h, !0).val || i, j) + ") " : ""
                }
            };
            return b.opacity = c("fade") ? c("fade", !0).val || "0" : "1",
            e("transformIn"),
            a.animation.reverseOut ? e("transformOut", !0) : b.transformOut = b.transformIn,
            b.transition = {},
            b.transition = a._getPrefixedCSS("transition", "all " + a.animation.duration + "ms " + a.animation.easing + ", opacity " + a.animation.duration + "ms linear"),
            a.animation.stagger = !!c("stagger"),
            a.animation.staggerDuration = parseInt(c("stagger") && c("stagger", !0).val ? c("stagger", !0).val : 100),
            a._execFilter("_parseEffects", b)
        },
        _buildState: function(a) {
            var b = this
              , c = {};
            return b._execAction("_buildState", 0),
            c = {
                activeFilter: "" === b._activeFilter ? "none" : b._activeFilter,
                activeSort: a && b._newSortString ? b._newSortString : b._activeSort,
                fail: !b._$show.length && "" !== b._activeFilter,
                $targets: b._$targets,
                $show: b._$show,
                $hide: b._$hide,
                totalTargets: b._$targets.length,
                totalShow: b._$show.length,
                totalHide: b._$hide.length,
                display: a && b._newDisplay ? b._newDisplay : b.layout.display
            },
            a ? b._execFilter("_buildState", c) : (b._state = c,
            void b._execAction("_buildState", 1))
        },
        _goMix: function(a) {
            var b = this
              , c = function() {
                b._chrome && 31 === b._chrome && f(b._$parent[0]),
                b._setInter(),
                d()
            }
              , d = function() {
                var a = window.pageYOffset
                  , c = window.pageXOffset;
                document.documentElement.scrollHeight,
                b._getInterMixData(),
                b._setFinal(),
                b._getFinalMixData(),
                window.pageYOffset !== a && window.scrollTo(c, a),
                b._prepTargets(),
                window.requestAnimationFrame ? requestAnimationFrame(e) : setTimeout(function() {
                    e()
                }, 20)
            }
              , e = function() {
                b._animateTargets(),
                0 === b._targetsBound && b._cleanUp()
            }
              , f = function(a) {
                var b = a.parentElement
                  , c = document.createElement("div")
                  , d = document.createDocumentFragment();
                b.insertBefore(c, a),
                d.appendChild(a),
                b.replaceChild(a, c)
            }
              , g = b._buildState(!0);
            b._execAction("_goMix", 0, arguments),
            !b.animation.duration && (a = !1),
            b._mixing = !0,
            b._$container.removeClass(b.layout.containerClassFail),
            "function" == typeof b.callbacks.onMixStart && b.callbacks.onMixStart.call(b._domNode, b._state, g, b),
            b._$container.trigger("mixStart", [b._state, g, b]),
            b._getOrigMixData(),
            a && !b._suckMode ? window.requestAnimationFrame ? requestAnimationFrame(c) : c() : b._cleanUp(),
            b._execAction("_goMix", 1, arguments)
        },
        _getTargetData: function(a, b) {
            var c, d = this;
            a.dataset[b + "PosX"] = a.offsetLeft,
            a.dataset[b + "PosY"] = a.offsetTop,
            d.animation.animateResizeTargets && (c = d._suckMode ? {
                marginBottom: "",
                marginRight: ""
            } : window.getComputedStyle(a),
            a.dataset[b + "MarginBottom"] = parseInt(c.marginBottom),
            a.dataset[b + "MarginRight"] = parseInt(c.marginRight),
            a.dataset[b + "Width"] = a.offsetWidth,
            a.dataset[b + "Height"] = a.offsetHeight)
        },
        _getOrigMixData: function() {
            var a = this
              , b = a._suckMode ? {
                boxSizing: ""
            } : window.getComputedStyle(a._$parent[0])
              , c = b.boxSizing || b[a._vendor + "BoxSizing"];
            a._incPadding = "border-box" === c,
            a._execAction("_getOrigMixData", 0),
            !a._suckMode && (a.effects = a._parseEffects()),
            a._$toHide = a._$hide.filter(":visible"),
            a._$toShow = a._$show.filter(":hidden"),
            a._$pre = a._$targets.filter(":visible"),
            a._startHeight = a._incPadding ? a._$parent.outerHeight() : a._$parent.height();
            for (var d = 0; d < a._$pre.length; d++) {
                var e = a._$pre[d];
                a._getTargetData(e, "orig")
            }
            a._execAction("_getOrigMixData", 1)
        },
        _setInter: function() {
            var a = this;
            a._execAction("_setInter", 0),
            a._changingLayout && a.animation.animateChangeLayout ? (a._$toShow.css("display", a._newDisplay),
            a._changingClass && a._$container.removeClass(a.layout.containerClass).addClass(a._newClass)) : a._$toShow.css("display", a.layout.display),
            a._execAction("_setInter", 1)
        },
        _getInterMixData: function() {
            var a = this;
            a._execAction("_getInterMixData", 0);
            for (var b = 0; b < a._$toShow.length; b++) {
                var c = a._$toShow[b];
                a._getTargetData(c, "inter")
            }
            for (var b = 0; b < a._$pre.length; b++) {
                var c = a._$pre[b];
                a._getTargetData(c, "inter")
            }
            a._execAction("_getInterMixData", 1)
        },
        _setFinal: function() {
            var a = this;
            a._execAction("_setFinal", 0),
            a._sorting && a._printSort(),
            a._$toHide.removeStyle("display"),
            a._changingLayout && a.animation.animateChangeLayout && a._$pre.css("display", a._newDisplay),
            a._execAction("_setFinal", 1)
        },
        _getFinalMixData: function() {
            var a = this;
            a._execAction("_getFinalMixData", 0);
            for (var b = 0; b < a._$toShow.length; b++) {
                var c = a._$toShow[b];
                a._getTargetData(c, "final")
            }
            for (var b = 0; b < a._$pre.length; b++) {
                var c = a._$pre[b];
                a._getTargetData(c, "final")
            }
            a._newHeight = a._incPadding ? a._$parent.outerHeight() : a._$parent.height(),
            a._sorting && a._printSort(!0),
            a._$toShow.removeStyle("display"),
            a._$pre.css("display", a.layout.display),
            a._changingClass && a.animation.animateChangeLayout && a._$container.removeClass(a._newClass).addClass(a.layout.containerClass),
            a._execAction("_getFinalMixData", 1)
        },
        _prepTargets: function() {
            var b = this
              , c = {
                _in: b._getPrefixedCSS("transform", b.effects.transformIn),
                _out: b._getPrefixedCSS("transform", b.effects.transformOut)
            };
            b._execAction("_prepTargets", 0),
            b.animation.animateResizeContainer && b._$parent.css("height", b._startHeight + "px");
            for (var d = 0; d < b._$toShow.length; d++) {
                var e = b._$toShow[d]
                  , f = a(e);
                e.style.opacity = b.effects.opacity,
                e.style.display = b._changingLayout && b.animation.animateChangeLayout ? b._newDisplay : b.layout.display,
                f.css(c._in),
                b.animation.animateResizeTargets && (e.style.width = e.dataset.finalWidth + "px",
                e.style.height = e.dataset.finalHeight + "px",
                e.style.marginRight = -(e.dataset.finalWidth - e.dataset.interWidth) + 1 * e.dataset.finalMarginRight + "px",
                e.style.marginBottom = -(e.dataset.finalHeight - e.dataset.interHeight) + 1 * e.dataset.finalMarginBottom + "px")
            }
            for (var d = 0; d < b._$pre.length; d++) {
                var e = b._$pre[d]
                  , f = a(e)
                  , g = {
                    x: e.dataset.origPosX - e.dataset.interPosX,
                    y: e.dataset.origPosY - e.dataset.interPosY
                }
                  , c = b._getPrefixedCSS("transform", "translate(" + g.x + "px," + g.y + "px)");
                f.css(c),
                b.animation.animateResizeTargets && (e.style.width = e.dataset.origWidth + "px",
                e.style.height = e.dataset.origHeight + "px",
                e.dataset.origWidth - e.dataset.finalWidth && (e.style.marginRight = -(e.dataset.origWidth - e.dataset.interWidth) + 1 * e.dataset.origMarginRight + "px"),
                e.dataset.origHeight - e.dataset.finalHeight && (e.style.marginBottom = -(e.dataset.origHeight - e.dataset.interHeight) + 1 * e.dataset.origMarginBottom + "px"))
            }
            b._execAction("_prepTargets", 1)
        },
        _animateTargets: function() {
            var b = this;
            b._execAction("_animateTargets", 0),
            b._targetsDone = 0,
            b._targetsBound = 0,
            b._$parent.css(b._getPrefixedCSS("perspective", b.animation.perspectiveDistance + "px")).css(b._getPrefixedCSS("perspective-origin", b.animation.perspectiveOrigin)),
            b.animation.animateResizeContainer && b._$parent.css(b._getPrefixedCSS("transition", "height " + b.animation.duration + "ms ease")).css("height", b._newHeight + "px");
            for (var c = 0; c < b._$toShow.length; c++) {
                var d = b._$toShow[c]
                  , e = a(d)
                  , f = {
                    x: d.dataset.finalPosX - d.dataset.interPosX,
                    y: d.dataset.finalPosY - d.dataset.interPosY
                }
                  , g = b._getDelay(c)
                  , h = {};
                d.style.opacity = "";
                for (var i = 0; 2 > i; i++) {
                    var j = 0 === i ? j = b._prefix : "";
                    b._ff && b._ff <= 20 && (h[j + "transition-property"] = "all",
                    h[j + "transition-timing-function"] = b.animation.easing + "ms",
                    h[j + "transition-duration"] = b.animation.duration + "ms"),
                    h[j + "transition-delay"] = g + "ms",
                    h[j + "transform"] = "translate(" + f.x + "px," + f.y + "px)"
                }
                (b.effects.transform || b.effects.opacity) && b._bindTargetDone(e),
                b._ff && b._ff <= 20 ? e.css(h) : e.css(b.effects.transition).css(h)
            }
            for (var c = 0; c < b._$pre.length; c++) {
                var d = b._$pre[c]
                  , e = a(d)
                  , f = {
                    x: d.dataset.finalPosX - d.dataset.interPosX,
                    y: d.dataset.finalPosY - d.dataset.interPosY
                }
                  , g = b._getDelay(c);
                (d.dataset.finalPosX !== d.dataset.origPosX || d.dataset.finalPosY !== d.dataset.origPosY) && b._bindTargetDone(e),
                e.css(b._getPrefixedCSS("transition", "all " + b.animation.duration + "ms " + b.animation.easing + " " + g + "ms")),
                e.css(b._getPrefixedCSS("transform", "translate(" + f.x + "px," + f.y + "px)")),
                b.animation.animateResizeTargets && (d.dataset.origWidth - d.dataset.finalWidth && 1 * d.dataset.finalWidth && (d.style.width = d.dataset.finalWidth + "px",
                d.style.marginRight = -(d.dataset.finalWidth - d.dataset.interWidth) + 1 * d.dataset.finalMarginRight + "px"),
                d.dataset.origHeight - d.dataset.finalHeight && 1 * d.dataset.finalHeight && (d.style.height = d.dataset.finalHeight + "px",
                d.style.marginBottom = -(d.dataset.finalHeight - d.dataset.interHeight) + 1 * d.dataset.finalMarginBottom + "px"))
            }
            b._changingClass && b._$container.removeClass(b.layout.containerClass).addClass(b._newClass);
            for (var c = 0; c < b._$toHide.length; c++) {
                for (var d = b._$toHide[c], e = a(d), g = b._getDelay(c), k = {}, i = 0; 2 > i; i++) {
                    var j = 0 === i ? j = b._prefix : "";
                    k[j + "transition-delay"] = g + "ms",
                    k[j + "transform"] = b.effects.transformOut,
                    k.opacity = b.effects.opacity
                }
                e.css(b.effects.transition).css(k),
                (b.effects.transform || b.effects.opacity) && b._bindTargetDone(e)
            }
            b._execAction("_animateTargets", 1)
        },
        _bindTargetDone: function(b) {
            var c = this
              , d = b[0];
            c._execAction("_bindTargetDone", 0, arguments),
            d.dataset.bound || (d.dataset.bound = !0,
            c._targetsBound++,
            b.on("webkitTransitionEnd.mixItUp transitionend.mixItUp", function(e) {
                (e.originalEvent.propertyName.indexOf("transform") > -1 || e.originalEvent.propertyName.indexOf("opacity") > -1) && a(e.originalEvent.target).is(c.selectors.target) && (b.off(".mixItUp"),
                delete d.dataset.bound,
                c._targetDone())
            })),
            c._execAction("_bindTargetDone", 1, arguments)
        },
        _targetDone: function() {
            var a = this;
            a._execAction("_targetDone", 0),
            a._targetsDone++,
            a._targetsDone === a._targetsBound && a._cleanUp(),
            a._execAction("_targetDone", 1)
        },
        _cleanUp: function() {
            var b = this
              , c = b.animation.animateResizeTargets ? "transform opacity width height margin-bottom margin-right" : "transform opacity"
              , d = function() {
                b._$targets.removeStyle("transition", b._prefix)
            };
            b._execAction("_cleanUp", 0),
            b._changingLayout ? b._$show.css("display", b._newDisplay) : b._$show.css("display", b.layout.display),
            b._$targets.css(b._brake),
            b._$targets.removeStyle(c, b._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"),
            b._$hide.removeStyle("display"),
            b._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin", b._prefix),
            b._sorting && (b._printSort(),
            b._activeSort = b._newSortString,
            b._sorting = !1),
            b._changingLayout && (b._changingDisplay && (b.layout.display = b._newDisplay,
            b._changingDisplay = !1),
            b._changingClass && (b._$parent.removeClass(b.layout.containerClass).addClass(b._newClass),
            b.layout.containerClass = b._newClass,
            b._changingClass = !1),
            b._changingLayout = !1),
            b._refresh(),
            b._buildState(),
            b._state.fail && b._$container.addClass(b.layout.containerClassFail),
            b._$show = a(),
            b._$hide = a(),
            window.requestAnimationFrame && requestAnimationFrame(d),
            b._mixing = !1,
            "function" == typeof b.callbacks._user && b.callbacks._user.call(b._domNode, b._state, b),
            "function" == typeof b.callbacks.onMixEnd && b.callbacks.onMixEnd.call(b._domNode, b._state, b),
            b._$container.trigger("mixEnd", [b._state, b]),
            b._state.fail && ("function" == typeof b.callbacks.onMixFail && b.callbacks.onMixFail.call(b._domNode, b._state, b),
            b._$container.trigger("mixFail", [b._state, b])),
            b._loading && ("function" == typeof b.callbacks.onMixLoad && b.callbacks.onMixLoad.call(b._domNode, b._state, b),
            b._$container.trigger("mixLoad", [b._state, b])),
            b._queue.length && (b._execAction("_queue", 0),
            b.multiMix(b._queue[0][0], b._queue[0][1], b._queue[0][2]),
            b._queue.splice(0, 1)),
            b._execAction("_cleanUp", 1),
            b._loading = !1
        },
        _getPrefixedCSS: function(a, b, c) {
            var d = this
              , e = {}
              , f = ""
              , g = -1;
            for (g = 0; 2 > g; g++)
                f = 0 === g ? d._prefix : "",
                c ? e[f + a] = f + b : e[f + a] = b;
            return d._execFilter("_getPrefixedCSS", e, arguments)
        },
        _getDelay: function(a) {
            var b = this
              , c = "function" == typeof b.animation.staggerSequence ? b.animation.staggerSequence.call(b._domNode, a, b._state) : a
              , d = b.animation.stagger ? c * b.animation.staggerDuration : 0;
            return b._execFilter("_getDelay", d, arguments)
        },
        _parseMultiMixArgs: function(a) {
            for (var b = this, c = {
                command: null,
                animate: b.animation.enable,
                callback: null
            }, d = 0; d < a.length; d++) {
                var e = a[d];
                null !== e && ("object" == typeof e || "string" == typeof e ? c.command = e : "boolean" == typeof e ? c.animate = e : "function" == typeof e && (c.callback = e))
            }
            return b._execFilter("_parseMultiMixArgs", c, arguments)
        },
        _parseInsertArgs: function(b) {
            for (var c = this, d = {
                index: 0,
                $object: a(),
                multiMix: {
                    filter: c._state.activeFilter
                },
                callback: null
            }, e = 0; e < b.length; e++) {
                var f = b[e];
                "number" == typeof f ? d.index = f : "object" == typeof f && f instanceof a ? d.$object = f : "object" == typeof f && c._helpers._isElement(f) ? d.$object = a(f) : "object" == typeof f && null !== f ? d.multiMix = f : "boolean" != typeof f || f ? "function" == typeof f && (d.callback = f) : d.multiMix = !1
            }
            return c._execFilter("_parseInsertArgs", d, arguments)
        },
        _execAction: function(a, b, c) {
            var d = this
              , e = b ? "post" : "pre";
            if (!d._actions.isEmptyObject && d._actions.hasOwnProperty(a))
                for (var f in d._actions[a][e])
                    d._actions[a][e][f].call(d, c)
        },
        _execFilter: function(a, b, c) {
            var d = this;
            if (d._filters.isEmptyObject || !d._filters.hasOwnProperty(a))
                return b;
            for (var e in d._filters[a])
                return d._filters[a][e].call(d, c)
        },
        _helpers: {
            _camelCase: function(a) {
                return a.replace(/-([a-z])/g, function(a) {
                    return a[1].toUpperCase()
                })
            },
            _isElement: function(a) {
                return window.HTMLElement ? a instanceof HTMLElement : null !== a && 1 === a.nodeType && "string" === a.nodeName
            }
        },
        isMixing: function() {
            var a = this;
            return a._execFilter("isMixing", a._mixing)
        },
        filter: function() {
            var a = this
              , b = a._parseMultiMixArgs(arguments);
            a._clicking && (a._toggleString = ""),
            a.multiMix({
                filter: b.command
            }, b.animate, b.callback)
        },
        sort: function() {
            var a = this
              , b = a._parseMultiMixArgs(arguments);
            a.multiMix({
                sort: b.command
            }, b.animate, b.callback)
        },
        changeLayout: function() {
            var a = this
              , b = a._parseMultiMixArgs(arguments);
            a.multiMix({
                changeLayout: b.command
            }, b.animate, b.callback)
        },
        multiMix: function() {
            var a = this
              , c = a._parseMultiMixArgs(arguments);
            if (a._execAction("multiMix", 0, arguments),
            a._mixing)
                a.animation.queue && a._queue.length < a.animation.queueLimit ? (a._queue.push(arguments),
                a.controls.enable && !a._clicking && a._updateControls(c.command),
                a._execAction("multiMixQueue", 1, arguments)) : ("function" == typeof a.callbacks.onMixBusy && a.callbacks.onMixBusy.call(a._domNode, a._state, a),
                a._$container.trigger("mixBusy", [a._state, a]),
                a._execAction("multiMixBusy", 1, arguments));
            else {
                a.controls.enable && !a._clicking && (a.controls.toggleFilterButtons && a._buildToggleArray(),
                a._updateControls(c.command, a.controls.toggleFilterButtons)),
                a._queue.length < 2 && (a._clicking = !1),
                delete a.callbacks._user,
                c.callback && (a.callbacks._user = c.callback);
                var d = c.command.sort
                  , e = c.command.filter
                  , f = c.command.changeLayout;
                a._refresh(),
                d && (a._newSort = a._parseSort(d),
                a._newSortString = d,
                a._sorting = !0,
                a._sort()),
                e !== b && (e = "all" === e ? a.selectors.target : e,
                a._activeFilter = e),
                a._filter(),
                f && (a._newDisplay = "string" == typeof f ? f : f.display || a.layout.display,
                a._newClass = f.containerClass || "",
                (a._newDisplay !== a.layout.display || a._newClass !== a.layout.containerClass) && (a._changingLayout = !0,
                a._changingClass = a._newClass !== a.layout.containerClass,
                a._changingDisplay = a._newDisplay !== a.layout.display)),
                a._$targets.css(a._brake),
                a._goMix(c.animate ^ a.animation.enable ? c.animate : a.animation.enable),
                a._execAction("multiMix", 1, arguments)
            }
        },
        insert: function() {
            var a = this
              , b = a._parseInsertArgs(arguments)
              , c = "function" == typeof b.callback ? b.callback : null
              , d = document.createDocumentFragment()
              , e = function() {
                return a._refresh(),
                a._$targets.length ? b.index < a._$targets.length || !a._$targets.length ? a._$targets[b.index] : a._$targets[a._$targets.length - 1].nextElementSibling : a._$parent[0].children[0]
            }();
            if (a._execAction("insert", 0, arguments),
            b.$object) {
                for (var f = 0; f < b.$object.length; f++) {
                    var g = b.$object[f];
                    d.appendChild(g),
                    d.appendChild(document.createTextNode(" "))
                }
                a._$parent[0].insertBefore(d, e)
            }
            a._execAction("insert", 1, arguments),
            "object" == typeof b.multiMix && a.multiMix(b.multiMix, c)
        },
        prepend: function() {
            var a = this
              , b = a._parseInsertArgs(arguments);
            a.insert(0, b.$object, b.multiMix, b.callback)
        },
        append: function() {
            var a = this
              , b = a._parseInsertArgs(arguments);
            a.insert(a._state.totalTargets, b.$object, b.multiMix, b.callback)
        },
        getOption: function(a) {
            var c = this
              , d = function(a, c) {
                for (var d = c.split("."), e = d.pop(), f = d.length, g = 1, h = d[0] || c; (a = a[h]) && f > g; )
                    h = d[g],
                    g++;
                return a !== b ? a[e] !== b ? a[e] : a : void 0
            };
            return a ? c._execFilter("getOption", d(c, a), arguments) : c
        },
        setOptions: function(b) {
            var c = this;
            c._execAction("setOptions", 0, arguments),
            "object" == typeof b && a.extend(!0, c, b),
            c._execAction("setOptions", 1, arguments)
        },
        getState: function() {
            var a = this;
            return a._execFilter("getState", a._state, a)
        },
        forceRefresh: function() {
            var a = this;
            a._refresh(!1, !0)
        },
        destroy: function(b) {
            var c = this
              , d = a.MixItUp.prototype._bound._filter
              , e = a.MixItUp.prototype._bound._sort;
            c._execAction("destroy", 0, arguments),
            c._$body.add(a(c.selectors.sort)).add(a(c.selectors.filter)).off(".mixItUp");
            for (var f = 0; f < c._$targets.length; f++) {
                var g = c._$targets[f];
                b && (g.style.display = ""),
                delete g.mixParent
            }
            c._execAction("destroy", 1, arguments),
            d[c.selectors.filter] && d[c.selectors.filter] > 1 ? d[c.selectors.filter]-- : 1 === d[c.selectors.filter] && delete d[c.selectors.filter],
            e[c.selectors.sort] && e[c.selectors.sort] > 1 ? e[c.selectors.sort]-- : 1 === e[c.selectors.sort] && delete e[c.selectors.sort],
            delete a.MixItUp.prototype._instances[c._id]
        }
    },
    a.fn.mixItUp = function() {
        var c, d = arguments, e = [], f = function(b, c) {
            var d = new a.MixItUp
              , e = function() {
                return ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase()
            };
            d._execAction("_instantiate", 0, arguments),
            b.id = b.id ? b.id : "MixItUp" + e(),
            d._instances[b.id] || (d._instances[b.id] = d,
            d._init(b, c)),
            d._execAction("_instantiate", 1, arguments)
        };
        return c = this.each(function() {
            if (d && "string" == typeof d[0]) {
                var c = a.MixItUp.prototype._instances[this.id];
                if ("isLoaded" === d[0])
                    e.push(!!c);
                else {
                    var g = c[d[0]](d[1], d[2], d[3]);
                    g !== b && e.push(g)
                }
            } else
                f(this, d[0])
        }),
        e.length ? e.length > 1 ? e : e[0] : c
    }
    ,
    a.fn.removeStyle = function(c, d) {
        return d = d ? d : "",
        this.each(function() {
            for (var e = this, f = c.split(" "), g = 0; g < f.length; g++)
                for (var h = 0; 4 > h; h++) {
                    switch (h) {
                    case 0:
                        var i = f[g];
                        break;
                    case 1:
                        var i = a.MixItUp.prototype._helpers._camelCase(i);
                        break;
                    case 2:
                        var i = d + f[g];
                        break;
                    case 3:
                        var i = a.MixItUp.prototype._helpers._camelCase(d + f[g])
                    }
                    if (e.style[i] !== b && "unknown" != typeof e.style[i] && e.style[i].length > 0 && (e.style[i] = ""),
                    !d && 1 === h)
                        break
                }
            e.attributes && e.attributes.style && e.attributes.style !== b && "" === e.attributes.style.value && e.attributes.removeNamedItem("style")
        })
    }
}(jQuery),
function(a) {
    a.fn.multiscroll = function(b) {
        function c() {
            var b = window.location.hash.replace("#", "")
              , c = b;
            if (c.length) {
                var d = a(".ms-left").find('[data-anchor="' + c + '"]')
                  , e = "undefined" == typeof lastScrolledDestiny;
                (e || c !== lastScrolledDestiny) && f(d)
            }
        }
        function d() {
            D = a(window).height(),
            a(".ms-tableCell").each(function() {
                a(this).css({
                    height: r(a(this).parent())
                })
            }),
            e(),
            a.isFunction(b.afterResize) && b.afterResize.call(this)
        }
        function e() {
            b.css3 ? (j(a(".ms-left"), "translate3d(0px, -" + a(".ms-left").find(".ms-section.active").position().top + "px, 0px)", !1),
            j(a(".ms-right"), "translate3d(0px, -" + a(".ms-right").find(".ms-section.active").position().top + "px, 0px)", !1)) : (a(".ms-left").css("top", -a(".ms-left").find(".ms-section.active").position().top),
            a(".ms-right").css("top", -a(".ms-right").find(".ms-section.active").position().top))
        }
        function f(c) {
            var d = c.index()
              , e = a(".ms-right").find(".ms-section").eq(B - 1 - d)
              , f = c.data("anchor")
              , g = a(".ms-left .ms-section.active")
              , h = g.index() + 1
              , i = n(c);
            C = !0,
            o(f);
            var k = {
                left: c.position().top,
                right: e.position().top
            };
            if (e.addClass("active").siblings().removeClass("active"),
            c.addClass("active").siblings().removeClass("active"),
            b.css3) {
                a.isFunction(b.onLeave) && b.onLeave.call(this, h, d + 1, i);
                var p = "translate3d(0px, -" + k.left + "px, 0px)"
                  , q = "translate3d(0px, -" + k.right + "px, 0px)";
                j(a(".ms-left"), p, !0),
                j(a(".ms-right"), q, !0),
                setTimeout(function() {
                    a.isFunction(b.afterLoad) && b.afterLoad.call(this, f, d + 1),
                    setTimeout(function() {
                        C = !1
                    }, y)
                }, b.scrollingSpeed)
            } else
                a.isFunction(b.onLeave) && b.onLeave.call(this, h, d + 1, i),
                a(".ms-left").animate({
                    top: -k.left
                }, b.scrollingSpeed, b.easing, function() {
                    a.isFunction(b.afterLoad) && b.afterLoad.call(this, f, d + 1),
                    setTimeout(function() {
                        C = !1
                    }, y)
                }),
                a(".ms-right").animate({
                    top: -k.right
                }, b.scrollingSpeed, b.easing);
            lastScrolledDestiny = f,
            m(f),
            l(f, d)
        }
        function g() {
            document.addEventListener ? (document.removeEventListener("mousewheel", i, !1),
            document.removeEventListener("wheel", i, !1)) : document.detachEvent("onmousewheel", i)
        }
        function h() {
            document.addEventListener ? (document.addEventListener("mousewheel", i, !1),
            document.addEventListener("wheel", i, !1)) : document.attachEvent("onmousewheel", i)
        }
        function i(b) {
            b = window.event || b;
            var c = Math.max(-1, Math.min(1, b.wheelDelta || -b.deltaY || -b.detail));
            return C || (c < 0 ? a.fn.multiscroll.moveSectionDown() : a.fn.multiscroll.moveSectionUp()),
            !1
        }
        function j(a, b, c) {
            a.toggleClass("ms-easing", c),
            a.css(k(b))
        }
        function k(a) {
            return {
                "-webkit-transform": a,
                "-moz-transform": a,
                "-ms-transform": a,
                transform: a
            }
        }
        function l(c, d) {
            b.navigation && (a("#multiscroll-nav").find(".active").removeClass("active"),
            c ? a("#multiscroll-nav").find('a[href="#' + c + '"]').addClass("active") : a("#multiscroll-nav").find("li").eq(d).find("a").addClass("active"))
        }
        function m(c) {
            b.menu && (a(b.menu).find(".active").removeClass("active"),
            a(b.menu).find('[data-menuanchor="' + c + '"]').addClass("active"))
        }
        function n(b) {
            var c = a(".ms-left .ms-section.active").index()
              , d = b.index();
            return c > d ? "up" : "down"
        }
        function o(a) {
            b.anchors.length && (location.hash = a)
        }
        function p() {
            var a, b = document.createElement("p"), c = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
            document.body.insertBefore(b, null);
            for (var d in c)
                void 0 !== b.style[d] && (b.style[d] = "translate3d(1px,1px,1px)",
                a = window.getComputedStyle(b).getPropertyValue(c[d]));
            return document.body.removeChild(b),
            void 0 !== a && a.length > 0 && "none" !== a
        }
        function q(a) {
            a.addClass("ms-table").wrapInner('<div class="ms-tableCell" style="height: ' + r(a) + 'px" />')
        }
        function r(a) {
            var c = D;
            if (b.paddingTop || b.paddingBottom) {
                var d = parseInt(a.css("padding-top")) + parseInt(a.css("padding-bottom"));
                c = D - d
            }
            return c
        }
        function s() {
            var b = window.location.hash.replace("#", "")
              , c = a('.ms-left .ms-section[data-anchor="' + b + '"]');
            b.length && f(c)
        }
        function t(c) {
            var d = c.originalEvent;
            c.preventDefault();
            a(".ms-left .ms-section.active");
            if (!C) {
                var e = x(d);
                G = e.y,
                H = e.x,
                Math.abs(E - G) > a(window).height() / 100 * b.touchSensitivity && (E > G ? a.fn.multiscroll.moveSectionDown() : G > E && a.fn.multiscroll.moveSectionUp())
            }
        }
        function u(a) {
            var b = a.originalEvent
              , c = x(b);
            E = c.y,
            F = c.x
        }
        function v() {
            z && (MSPointer = w(),
            a(document).off("touchstart " + MSPointer.down).on("touchstart " + MSPointer.down, u),
            a(document).off("touchmove " + MSPointer.move).on("touchmove " + MSPointer.move, t))
        }
        function w() {
            var a;
            return a = window.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }
        function x(a) {
            var b = new Array;
            return window.navigator.msPointerEnabled ? (b.y = a.pageY,
            b.x = a.pageX) : (b.y = a.touches[0].pageY,
            b.x = a.touches[0].pageX),
            b
        }
        b = a.extend({
            verticalCentered: !0,
            scrollingSpeed: 700,
            easing: "easeInQuart",
            menu: !1,
            sectionsColor: [],
            anchors: [],
            navigation: !1,
            navigationPosition: "right",
            navigationColor: "#000",
            navigationTooltips: [],
            loopBottom: !1,
            loopTop: !1,
            css3: !1,
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            normalScrollElements: null,
            keyboardScrolling: !0,
            touchSensitivity: 5,
            sectionSelector: ".ms-section",
            leftSelector: ".ms-left",
            rightSelector: ".ms-right",
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null
        }, b);
        var y = 600
          , z = "ontouchstart"in window || navigator.msMaxTouchPoints > 0;
        ".ms-right" !== b.rightSelector && a(b.rightSelector).addClass("ms-right"),
        ".ms-left" !== b.leftSelector && a(b.leftSelector).addClass("ms-left");
        var A, B = a(".ms-left").find(".ms-section").length, C = !1, D = a(window).height();
        h(),
        v(),
        b.css3 && (b.css3 = p()),
        a("html, body").css({
            overflow: "hidden",
            height: "100%"
        }),
        ".ms-section" !== b.sectionSelector && a(b.sectionSelector).each(function() {
            a(this).addClass("ms-section")
        }),
        b.navigation && (a("body").append('<div id="multiscroll-nav"><ul></ul></div>'),
        A = a("#multiscroll-nav"),
        A.css("color", b.navigationColor),
        A.addClass(b.navigationPosition)),
        a(".ms-right, .ms-left").css({
            width: "50%",
            position: "absolute",
            height: "100%",
            "-ms-touch-action": "none"
        }),
        a(".ms-right").css({
            right: "1px",
            top: "0",
            "-ms-touch-action": "none",
            "touch-action": "none"
        }),
        a(".ms-left").css({
            left: "0",
            top: "0",
            "-ms-touch-action": "none",
            "touch-action": "none"
        }),
        a(".ms-left .ms-section, .ms-right .ms-section").each(function() {
            var c = a(this).index();
            if ((b.paddingTop || b.paddingBottom) && a(this).css("padding", b.paddingTop + " 0 " + b.paddingBottom + " 0"),
            "undefined" != typeof b.sectionsColor[c] && a(this).css("background-color", b.sectionsColor[c]),
            "undefined" != typeof b.anchors[c] && a(this).attr("data-anchor", b.anchors[c]),
            b.verticalCentered && q(a(this)),
            a(this).closest(".ms-left").length && b.navigation) {
                var d = "";
                b.anchors.length && (d = b.anchors[c]);
                var e = b.navigationTooltips[c];
                "undefined" == typeof e && (e = ""),
                b.navigation && A.find("ul").append('<li data-tooltip="' + e + '"><a href="#' + d + '"><span></span></a></li>')
            }
        }),
        a(".ms-right").html(a(".ms-right").find(".ms-section").get().reverse()),
        a(".ms-left .ms-section, .ms-right .ms-section").each(function() {
            var c = a(this).index();
            a(this).css({
                height: "100%"
            }),
            !c && b.navigation && A.find("li").eq(c).find("a").addClass("active")
        }).promise().done(function() {
            a(".ms-left .ms-section.active").length || (a(".ms-right").find(".ms-section").last().addClass("active"),
            a(".ms-left").find(".ms-section").first().addClass("active")),
            a.isFunction(b.afterRender) && b.afterRender.call(this),
            e(),
            a(window).on("load", function() {
                s()
            })
        }),
        a(window).on("hashchange", c),
        a(document).keydown(function(c) {
            if (40 != c.which && 38 != c.which || c.preventDefault(),
            b.keyboardScrolling && !C)
                switch (c.which) {
                case 38:
                case 33:
                    a.fn.multiscroll.moveSectionUp();
                    break;
                case 40:
                case 34:
                    a.fn.multiscroll.moveSectionDown();
                    break;
                case 36:
                    a.fn.multiscroll.moveTo(1);
                    break;
                case 35:
                    a.fn.multiscroll.moveTo(a(".ms-left .ms-section").length);
                    break;
                default:
                    return
                }
        }),
        a(document).mousedown(function(a) {
            if (1 == a.button)
                return a.preventDefault(),
                !1
        }),
        a(document).on("click", "#multiscroll-nav a", function(b) {
            b.preventDefault();
            var c = a(this).parent().index();
            f(a(".ms-left .ms-section").eq(c))
        }),
        a(document).on({
            mouseenter: function() {
                var c = a(this).data("tooltip");
                a('<div class="multiscroll-tooltip ' + b.navigationPosition + '">' + c + "</div>").hide().appendTo(a(this)).fadeIn(200)
            },
            mouseleave: function() {
                a(this).find(".multiscroll-tooltip").fadeOut(200, function() {
                    a(this).remove()
                })
            }
        }, "#multiscroll-nav li"),
        b.normalScrollElements && (a(document).on("mouseenter", b.normalScrollElements, function() {
            a.fn.multiscroll.setMouseWheelScrolling(!1)
        }),
        a(document).on("mouseleave", b.normalScrollElements, function() {
            a.fn.multiscroll.setMouseWheelScrolling(!0)
        })),
        a(window).on("resize", d),
        a.fn.multiscroll.moveSectionUp = function() {
            var c = a(".ms-left .ms-section.active").prev(".ms-section");
            !c.length && b.loopTop && (c = a(".ms-left .ms-section").last()),
            c.length && f(c)
        }
        ,
        a.fn.multiscroll.moveSectionDown = function() {
            var c = a(".ms-left .ms-section.active").next(".ms-section");
            !c.length && b.loopBottom && (c = a(".ms-left .ms-section").first()),
            c.length && f(c)
        }
        ,
        a.fn.multiscroll.moveTo = function(b) {
            var c = "";
            c = isNaN(b) ? a('.ms-left [data-anchor="' + b + '"]') : a(".ms-left .ms-section").eq(b - 1),
            f(c)
        }
        ,
        a.fn.multiscroll.setKeyboardScrolling = function(a) {
            b.keyboardScrolling = a
        }
        ,
        a.fn.multiscroll.setMouseWheelScrolling = function(a) {
            a ? h() : g()
        }
        ,
        a.fn.multiscroll.setScrollingSpeed = function(a) {
            b.scrollingSpeed = a
        }
        ;
        var E = 0
          , F = 0
          , G = 0
          , H = 0;
        a.fn.multiscroll.destroy = function() {
            a.fn.multiscroll.setKeyboardScrolling(!1),
            a.fn.multiscroll.setMouseWheelScrolling(!1),
            a(window).off("hashchange", c).off("resize", d),
            a(document).off("touchstart").off("touchmove")
        }
        ,
        a.fn.multiscroll.build = function() {
            a.fn.multiscroll.setKeyboardScrolling(!0),
            a.fn.multiscroll.setMouseWheelScrolling(!0),
            a(window).on("hashchange", c).on("resize", d),
            a(document).on("touchstart", u).on("touchmove", t)
        }
    }
}(jQuery),
function(a) {
    var b = "waitForImages";
    a.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
    },
    a.expr[":"].uncached = function(b) {
        if (!a(b).is('img[src!=""]'))
            return !1;
        var c = new Image;
        return c.src = b.src,
        !c.complete
    }
    ,
    a.fn.waitForImages = function(c, d, e) {
        var f = 0
          , g = 0;
        if (a.isPlainObject(arguments[0]) && (e = arguments[0].waitForAll,
        d = arguments[0].each,
        c = arguments[0].finished),
        c = c || a.noop,
        d = d || a.noop,
        e = !!e,
        !a.isFunction(c) || !a.isFunction(d))
            throw new TypeError("An invalid callback was supplied.");
        return this.each(function() {
            var h = a(this)
              , i = []
              , j = a.waitForImages.hasImageProperties || []
              , k = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            e ? h.find("*").andSelf().each(function() {
                var b = a(this);
                b.is("img:uncached") && i.push({
                    src: b.attr("src"),
                    element: b[0]
                }),
                a.each(j, function(a, c) {
                    var d, e = b.css(c);
                    if (!e)
                        return !0;
                    for (; d = k.exec(e); )
                        i.push({
                            src: d[2],
                            element: b[0]
                        })
                })
            }) : h.find("img:uncached").each(function() {
                i.push({
                    src: this.src,
                    element: this
                })
            }),
            f = i.length,
            g = 0,
            0 === f && c.call(h[0]),
            a.each(i, function(e, i) {
                var j = new Image;
                a(j).bind("load." + b + " error." + b, function(a) {
                    if (g++,
                    d.call(i.element, g, f, "load" == a.type),
                    g == f)
                        return c.call(h[0]),
                        !1
                }),
                j.src = i.src
            })
        })
    }
}(jQuery),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a, b) {
    "use strict";
    a.infinitescroll = function(b, c, d) {
        this.element = a(d),
        this._create(b, c) || (this.failed = !0)
    }
    ,
    a.infinitescroll.defaults = {
        loading: {
            finished: b,
            finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
            img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
            msg: null,
            msgText: "<em>Loading the next set of posts...</em>",
            selector: null,
            speed: "fast",
            start: b
        },
        state: {
            isDuringAjax: !1,
            isInvalidPage: !1,
            isDestroyed: !1,
            isDone: !1,
            isPaused: !1,
            isBeyondMaxPage: !1,
            currPage: 1
        },
        debug: !1,
        behavior: b,
        binder: a(window),
        nextSelector: "div.navigation a:first",
        navSelector: "div.navigation",
        contentSelector: null,
        extraScrollPx: 150,
        itemSelector: "div.post",
        animate: !1,
        pathParse: b,
        dataType: "html",
        appendCallback: !0,
        bufferPx: 40,
        errorCallback: function() {},
        infid: 0,
        pixelsFromNavToBottom: b,
        path: b,
        prefill: !1,
        maxPage: b
    },
    a.infinitescroll.prototype = {
        _binding: function(a) {
            var c = this
              , d = c.options;
            return d.v = "2.0b2.120520",
            d.behavior && this["_binding_" + d.behavior] !== b ? void this["_binding_" + d.behavior].call(this) : "bind" !== a && "unbind" !== a ? (this._debug("Binding value  " + a + " not valid"),
            !1) : ("unbind" === a ? this.options.binder.unbind("smartscroll.infscr." + c.options.infid) : this.options.binder[a]("smartscroll.infscr." + c.options.infid, function() {
                c.scroll()
            }),
            void this._debug("Binding", a))
        },
        _create: function(c, d) {
            var e = a.extend(!0, {}, a.infinitescroll.defaults, c);
            this.options = e;
            var f = a(window)
              , g = this;
            if (!g._validate(c))
                return !1;
            var h = a(e.nextSelector).attr("href");
            if (!h)
                return this._debug("Navigation selector not found"),
                !1;
            e.path = e.path || this._determinepath(h),
            e.contentSelector = e.contentSelector || this.element,
            e.loading.selector = e.loading.selector || e.contentSelector,
            e.loading.msg = e.loading.msg || a('<div id="infscr-loading"><div>' + e.loading.msgText + "</div></div>"),
            e.pixelsFromNavToBottom === b && (e.pixelsFromNavToBottom = a(document).height() - a(e.navSelector).offset().top,
            this._debug("pixelsFromNavToBottom: " + e.pixelsFromNavToBottom));
            var i = this;
            return e.loading.start = e.loading.start || function() {
                a(e.navSelector).hide(),
                e.loading.msg.appendTo(e.loading.selector).show(e.loading.speed, a.proxy(function() {
                    this.beginAjax(e)
                }, i))
            }
            ,
            e.loading.finished = e.loading.finished || function() {
                e.state.isBeyondMaxPage || e.loading.msg.fadeOut(e.loading.speed)
            }
            ,
            e.callback = function(c, g, h) {
                e.behavior && c["_callback_" + e.behavior] !== b && c["_callback_" + e.behavior].call(a(e.contentSelector)[0], g, h),
                d && d.call(a(e.contentSelector)[0], g, e, h),
                e.prefill && f.bind("resize.infinite-scroll", c._prefill)
            }
            ,
            c.debug && (!Function.prototype.bind || "object" != typeof console && "function" != typeof console || "object" != typeof console.log || ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(a) {
                console[a] = this.call(console[a], console)
            }, Function.prototype.bind)),
            this._setup(),
            e.prefill && this._prefill(),
            !0
        },
        _prefill: function() {
            function b() {
                return a(c.options.contentSelector).height() <= d.height()
            }
            var c = this
              , d = a(window);
            this._prefill = function() {
                b() && c.scroll(),
                d.bind("resize.infinite-scroll", function() {
                    b() && (d.unbind("resize.infinite-scroll"),
                    c.scroll())
                })
            }
            ,
            this._prefill()
        },
        _debug: function() {
            !0 === this.options.debug && ("undefined" != typeof console && "function" == typeof console.log ? 1 === Array.prototype.slice.call(arguments).length && "string" == typeof Array.prototype.slice.call(arguments)[0] ? console.log(Array.prototype.slice.call(arguments).toString()) : console.log(Array.prototype.slice.call(arguments)) : Function.prototype.bind || "undefined" == typeof console || "object" != typeof console.log || Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)))
        },
        _determinepath: function(a) {
            var c = this.options;
            if (c.behavior && this["_determinepath_" + c.behavior] !== b)
                return this["_determinepath_" + c.behavior].call(this, a);
            if (c.pathParse)
                return this._debug("pathParse manual"),
                c.pathParse(a, this.options.state.currPage + 1);
            if (a.match(/^(.*?)\b2\b(.*?$)/))
                a = a.match(/^(.*?)\b2\b(.*?$)/).slice(1);
            else if (a.match(/^(.*?)2(.*?$)/)) {
                if (a.match(/^(.*?page=)2(\/.*|$)/))
                    return a = a.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                a = a.match(/^(.*?)2(.*?$)/).slice(1)
            } else {
                if (a.match(/^(.*?page=)1(\/.*|$)/))
                    return a = a.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."),
                c.state.isInvalidPage = !0
            }
            return this._debug("determinePath", a),
            a
        },
        _error: function(a) {
            var c = this.options;
            return c.behavior && this["_error_" + c.behavior] !== b ? void this["_error_" + c.behavior].call(this, a) : ("destroy" !== a && "end" !== a && (a = "unknown"),
            this._debug("Error", a),
            ("end" === a || c.state.isBeyondMaxPage) && this._showdonemsg(),
            c.state.isDone = !0,
            c.state.currPage = 1,
            c.state.isPaused = !1,
            c.state.isBeyondMaxPage = !1,
            void this._binding("unbind"))
        },
        _loadcallback: function(c, d, e) {
            var f, g = this.options, h = this.options.callback, i = g.state.isDone ? "done" : g.appendCallback ? "append" : "no-append";
            if (g.behavior && this["_loadcallback_" + g.behavior] !== b)
                return void this["_loadcallback_" + g.behavior].call(this, c, d);
            switch (i) {
            case "done":
                return this._showdonemsg(),
                !1;
            case "no-append":
                if ("html" === g.dataType && (d = "<div>" + d + "</div>",
                d = a(d).find(g.itemSelector)),
                0 === d.length)
                    return this._error("end");
                break;
            case "append":
                var j = c.children();
                if (0 === j.length)
                    return this._error("end");
                for (f = document.createDocumentFragment(); c[0].firstChild; )
                    f.appendChild(c[0].firstChild);
                this._debug("contentSelector", a(g.contentSelector)[0]),
                a(g.contentSelector)[0].appendChild(f),
                d = j.get()
            }
            if (g.loading.finished.call(a(g.contentSelector)[0], g),
            g.animate) {
                var k = a(window).scrollTop() + a(g.loading.msg).height() + g.extraScrollPx + "px";
                a("html,body").animate({
                    scrollTop: k
                }, 800, function() {
                    g.state.isDuringAjax = !1
                })
            }
            g.animate || (g.state.isDuringAjax = !1),
            h(this, d, e),
            g.prefill && this._prefill()
        },
        _nearbottom: function() {
            var c = this.options
              , d = 0 + a(document).height() - c.binder.scrollTop() - a(window).height();
            return c.behavior && this["_nearbottom_" + c.behavior] !== b ? this["_nearbottom_" + c.behavior].call(this) : (this._debug("math:", d, c.pixelsFromNavToBottom),
            d - c.bufferPx < c.pixelsFromNavToBottom)
        },
        _pausing: function(a) {
            var c = this.options;
            if (c.behavior && this["_pausing_" + c.behavior] !== b)
                return void this["_pausing_" + c.behavior].call(this, a);
            switch ("pause" !== a && "resume" !== a && null !== a && this._debug("Invalid argument. Toggling pause value instead"),
            a = !a || "pause" !== a && "resume" !== a ? "toggle" : a) {
            case "pause":
                c.state.isPaused = !0;
                break;
            case "resume":
                c.state.isPaused = !1;
                break;
            case "toggle":
                c.state.isPaused = !c.state.isPaused
            }
            return this._debug("Paused", c.state.isPaused),
            !1
        },
        _setup: function() {
            var a = this.options;
            return a.behavior && this["_setup_" + a.behavior] !== b ? void this["_setup_" + a.behavior].call(this) : (this._binding("bind"),
            !1)
        },
        _showdonemsg: function() {
            var c = this.options;
            return c.behavior && this["_showdonemsg_" + c.behavior] !== b ? void this["_showdonemsg_" + c.behavior].call(this) : (c.loading.msg.find("div").html(c.loading.finishedMsg).animate({
                opacity: 1
            }, 2e3, function() {
                a(this).parent().fadeOut(c.loading.speed)
            }),
            void c.errorCallback.call(a(c.contentSelector)[0], "done"))
        },
        _validate: function(b) {
            for (var c in b)
                if (c.indexOf && c.indexOf("Selector") > -1 && 0 === a(b[c]).length)
                    return this._debug("Your " + c + " found no elements."),
                    !1;
            return !0
        },
        bind: function() {
            this._binding("bind")
        },
        destroy: function() {
            return this.options.state.isDestroyed = !0,
            this.options.loading.finished(),
            this._error("destroy")
        },
        pause: function() {
            this._pausing("pause")
        },
        resume: function() {
            this._pausing("resume")
        },
        beginAjax: function(c) {
            var d, e, f, g, h = this, i = c.path;
            if (c.state.currPage++,
            c.maxPage !== b && c.state.currPage > c.maxPage)
                return c.state.isBeyondMaxPage = !0,
                void this.destroy();
            switch (d = a(a(c.contentSelector).is("table, tbody") ? "<tbody/>" : "<div/>"),
            e = "function" == typeof i ? i(c.state.currPage) : i.join(c.state.currPage),
            h._debug("heading into ajax", e),
            f = "html" === c.dataType || "json" === c.dataType ? c.dataType : "html+callback",
            c.appendCallback && "html" === c.dataType && (f += "+callback"),
            f) {
            case "html+callback":
                h._debug("Using HTML via .load() method"),
                d.load(e + " " + c.itemSelector, b, function(a) {
                    h._loadcallback(d, a, e)
                });
                break;
            case "html":
                h._debug("Using " + f.toUpperCase() + " via $.ajax() method"),
                a.ajax({
                    url: e,
                    dataType: c.dataType,
                    complete: function(a, b) {
                        g = "undefined" != typeof a.isResolved ? a.isResolved() : "success" === b || "notmodified" === b,
                        g ? h._loadcallback(d, a.responseText, e) : h._error("end")
                    }
                });
                break;
            case "json":
                h._debug("Using " + f.toUpperCase() + " via $.ajax() method"),
                a.ajax({
                    dataType: "json",
                    type: "GET",
                    url: e,
                    success: function(a, f, i) {
                        if (g = "undefined" != typeof i.isResolved ? i.isResolved() : "success" === f || "notmodified" === f,
                        c.appendCallback)
                            if (c.template !== b) {
                                var j = c.template(a);
                                d.append(j),
                                g ? h._loadcallback(d, j) : h._error("end")
                            } else
                                h._debug("template must be defined."),
                                h._error("end");
                        else
                            g ? h._loadcallback(d, a, e) : h._error("end")
                    },
                    error: function() {
                        h._debug("JSON ajax request failed."),
                        h._error("end")
                    }
                })
            }
        },
        retrieve: function(c) {
            c = c || null;
            var d = this
              , e = d.options;
            return e.behavior && this["retrieve_" + e.behavior] !== b ? void this["retrieve_" + e.behavior].call(this, c) : e.state.isDestroyed ? (this._debug("Instance is destroyed"),
            !1) : (e.state.isDuringAjax = !0,
            void e.loading.start.call(a(e.contentSelector)[0], e))
        },
        scroll: function() {
            var a = this.options
              , c = a.state;
            return a.behavior && this["scroll_" + a.behavior] !== b ? void this["scroll_" + a.behavior].call(this) : void (c.isDuringAjax || c.isInvalidPage || c.isDone || c.isDestroyed || c.isPaused || this._nearbottom() && this.retrieve())
        },
        toggle: function() {
            this._pausing()
        },
        unbind: function() {
            this._binding("unbind")
        },
        update: function(b) {
            a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
        }
    },
    a.fn.infinitescroll = function(b, c) {
        var d = typeof b;
        switch (d) {
        case "string":
            var e = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var c = a.data(this, "infinitescroll");
                return !!c && (!(!a.isFunction(c[b]) || "_" === b.charAt(0)) && void c[b].apply(c, e))
            });
            break;
        case "object":
            this.each(function() {
                var d = a.data(this, "infinitescroll");
                d ? d.update(b) : (d = new a.infinitescroll(b,c,this),
                d.failed || a.data(this, "infinitescroll", d))
            })
        }
        return this
    }
    ;
    var c, d = a.event;
    d.special.smartscroll = {
        setup: function() {
            a(this).bind("scroll", d.special.smartscroll.handler)
        },
        teardown: function() {
            a(this).unbind("scroll", d.special.smartscroll.handler)
        },
        handler: function(b, d) {
            var e = this
              , f = arguments;
            b.type = "smartscroll",
            c && clearTimeout(c),
            c = setTimeout(function() {
                a(e).trigger("smartscroll", f)
            }, "execAsap" === d ? 0 : 100)
        }
    },
    a.fn.smartscroll = function(a) {
        return a ? this.bind("smartscroll", a) : this.trigger("smartscroll", ["execAsap"])
    }
}),
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function(a, b, c, d, e) {
        return d * (b /= e) * b + c
    },
    easeOutQuad: function(a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function(a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    },
    easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function(a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function(a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function(a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function(a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    },
    easeInOutExpo: function(a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function(a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },
    easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function(a, b, c, d, e) {
        var f = 1.70158
          , g = 0
          , h = d;
        if (0 == b)
            return c;
        if (1 == (b /= e))
            return c + d;
        if (g || (g = .3 * e),
        h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c
    },
    easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158
          , g = 0
          , h = d;
        if (0 == b)
            return c;
        if (1 == (b /= e))
            return c + d;
        if (g || (g = .3 * e),
        h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
    },
    easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158
          , g = 0
          , h = d;
        if (0 == b)
            return c;
        if (2 == (b /= e / 2))
            return c + d;
        if (g || (g = e * (.3 * 1.5)),
        h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return b < 1 ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
    },
    easeInBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158),
        d * (b /= e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158),
        d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158),
        (b /= e / 2) < 1 ? d / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function(a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function(a, b, c, d, e) {
        return b < e / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }
}),
function(a, b, c) {
    "use strict";
    function d(c) {
        if (e = b.documentElement,
        f = b.body,
        R(),
        ea = this,
        c = c || {},
        ja = c.constants || {},
        c.easing)
            for (var d in c.easing)
                T[d] = c.easing[d];
        pa = c.edgeStrategy || "set",
        ha = {
            beforerender: c.beforerender,
            render: c.render
        },
        ia = c.forceHeight !== !1,
        ia && (Ba = c.scale || 1),
        la = c.smoothScrolling !== !1,
        ma = c.smoothScrollingDuration || z,
        na = {
            targetTop: ea.getScrollTop()
        },
        Ja = (c.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || a.opera)
        }
        )(),
        Ja ? (ga = b.getElementById("skrollr-body"),
        ga && da(),
        U(),
        va(e, [s, v], [t])) : va(e, [s, u], [t]),
        ea.refresh(),
        ra(a, "resize orientationchange", function() {
            var a = e.clientWidth
              , b = e.clientHeight;
            b === Ga && a === Fa || (Ga = b,
            Fa = a,
            Ha = !0)
        });
        var g = S();
        return function a() {
            X(),
            g(a)
        }(),
        ea
    }
    var e, f, g = a.skrollr = {
        get: function() {
            return ea
        },
        init: function(a) {
            return ea || new d(a)
        },
        VERSION: "0.6.10"
    }, h = Object.prototype.hasOwnProperty, i = a.Math, j = a.getComputedStyle, k = "touchstart", l = "touchmove", m = "touchcancel", n = "touchend", o = "skrollable", p = o + "-before", q = o + "-between", r = o + "-after", s = "skrollr", t = "no-" + s, u = s + "-desktop", v = s + "-mobile", w = "linear", x = 1e3, y = 6e-4, z = 200, A = "start", B = "end", C = "center", D = "bottom", E = "___skrollable_id", F = /^\s+|\s+$/g, G = /^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/, H = /\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, I = /^([a-z\-]+)\[(\w+)\]$/, J = /-([a-z])/g, K = function(a, b) {
        return b.toUpperCase()
    }, L = /[\-+]?[\d]*\.?[\d]+/g, M = /\{\?\}/g, N = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g, O = /[a-z\-]+-gradient/g, P = "", Q = "", R = function() {
        var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (j) {
            var b = j(f, null);
            for (var c in b)
                if (P = c.match(a) || +c == c && b[c].match(a))
                    break;
            if (!P)
                return void (P = Q = "");
            P = P[0],
            "-" === P.slice(0, 1) ? (Q = P,
            P = {
                "-webkit-": "webkit",
                "-moz-": "Moz",
                "-ms-": "ms",
                "-o-": "O"
            }[P]) : Q = "-" + P.toLowerCase() + "-"
        }
    }, S = function() {
        var b = a.requestAnimationFrame || a[P.toLowerCase() + "RequestAnimationFrame"]
          , c = ya();
        return !Ja && b || (b = function(b) {
            var d = ya() - c
              , e = i.max(0, 1e3 / 60 - d);
            a.setTimeout(function() {
                c = ya(),
                b()
            }, e)
        }
        ),
        b
    }, T = {
        begin: function() {
            return 0
        },
        end: function() {
            return 1
        },
        linear: function(a) {
            return a
        },
        quadratic: function(a) {
            return a * a
        },
        cubic: function(a) {
            return a * a * a
        },
        swing: function(a) {
            return -i.cos(a * i.PI) / 2 + .5
        },
        sqrt: function(a) {
            return i.sqrt(a)
        },
        outCubic: function(a) {
            return i.pow(a - 1, 3) + 1
        },
        bounce: function(a) {
            var b;
            if (a <= .5083)
                b = 3;
            else if (a <= .8489)
                b = 9;
            else if (a <= .96208)
                b = 27;
            else {
                if (!(a <= .99981))
                    return 1;
                b = 91
            }
            return 1 - i.abs(3 * i.cos(a * b * 1.028) / b)
        }
    };
    d.prototype.refresh = function(a) {
        var d, e, f = !1;
        for (a === c ? (f = !0,
        fa = [],
        Ia = 0,
        a = b.getElementsByTagName("*")) : a = [].concat(a),
        d = 0,
        e = a.length; d < e; d++) {
            var g = a[d]
              , h = g
              , i = []
              , j = la
              , k = pa;
            if (g.attributes) {
                for (var l = 0, m = g.attributes.length; l < m; l++) {
                    var n = g.attributes[l];
                    if ("data-anchor-target" !== n.name)
                        if ("data-smooth-scrolling" !== n.name)
                            if ("data-edge-strategy" !== n.name) {
                                var p = n.name.match(G);
                                if (null !== p) {
                                    var q = p[1];
                                    q = q && ja[q.substr(1)] || 0;
                                    var r = (0 | p[2]) + q
                                      , s = p[3]
                                      , t = p[4] || s
                                      , u = {
                                        offset: r,
                                        props: n.value,
                                        element: g
                                    };
                                    i.push(u),
                                    s && s !== A && s !== B ? (u.mode = "relative",
                                    u.anchors = [s, t]) : (u.mode = "absolute",
                                    s === B ? u.isEnd = !0 : (u.frame = r * Ba,
                                    delete u.offset))
                                }
                            } else
                                k = n.value;
                        else
                            j = "off" !== n.value;
                    else if (h = b.querySelector(n.value),
                    null === h)
                        throw 'Unable to find anchor target "' + n.value + '"'
                }
                if (i.length) {
                    var v, w, x;
                    !f && E in g ? (x = g[E],
                    v = fa[x].styleAttr,
                    w = fa[x].classAttr) : (x = g[E] = Ia++,
                    v = g.style.cssText,
                    w = ua(g)),
                    fa[x] = {
                        element: g,
                        styleAttr: v,
                        classAttr: w,
                        anchorTarget: h,
                        keyFrames: i,
                        smoothScrolling: j,
                        edgeStrategy: k
                    },
                    va(g, [o], [])
                }
            }
        }
        for (sa(),
        d = 0,
        e = a.length; d < e; d++) {
            var y = fa[a[d][E]];
            y !== c && (Y(y),
            $(y))
        }
        return ea
    }
    ,
    d.prototype.relativeToAbsolute = function(a, b, c) {
        var d = e.clientHeight
          , f = a.getBoundingClientRect()
          , g = f.top
          , h = f.bottom - f.top;
        return b === D ? g -= d : b === C && (g -= d / 2),
        c === D ? g += h : c === C && (g += h / 2),
        g += ea.getScrollTop(),
        g + .5 | 0
    }
    ,
    d.prototype.animateTo = function(a, b) {
        b = b || {};
        var d = ya()
          , e = ea.getScrollTop();
        return ka = {
            startTop: e,
            topDiff: a - e,
            targetTop: a,
            duration: b.duration || x,
            startTime: d,
            endTime: d + (b.duration || x),
            easing: T[b.easing || w],
            done: b.done
        },
        ka.topDiff || (ka.done && ka.done.call(ea, !1),
        ka = c),
        ea
    }
    ,
    d.prototype.stopAnimateTo = function() {
        ka && ka.done && ka.done.call(ea, !0),
        ka = c
    }
    ,
    d.prototype.isAnimatingTo = function() {
        return !!ka
    }
    ,
    d.prototype.setScrollTop = function(b, c) {
        return c === !0 && (Da = b,
        oa = !0),
        Ja ? Ka = i.min(i.max(b, 0), Aa) : a.scrollTo(0, b),
        ea
    }
    ,
    d.prototype.getScrollTop = function() {
        return Ja ? Ka : a.pageYOffset || e.scrollTop || f.scrollTop || 0
    }
    ,
    d.prototype.on = function(a, b) {
        return ha[a] = b,
        ea
    }
    ,
    d.prototype.off = function(a) {
        return delete ha[a],
        ea
    }
    ;
    var U = function() {
        var b, d, g, h, j, o, p, q, r, s, t;
        ra(e, [k, l, m, n].join(" "), function(a) {
            a.preventDefault();
            var e = a.changedTouches[0];
            switch (h = e.clientY,
            j = e.clientX,
            r = a.timeStamp,
            a.type) {
            case k:
                b && b.blur(),
                ea.stopAnimateTo(),
                b = a.target,
                d = o = h,
                g = j,
                q = r;
                break;
            case l:
                p = h - o,
                t = r - s,
                ea.setScrollTop(Ka - p, !0),
                o = h,
                s = r;
                break;
            default:
            case m:
            case n:
                var f = d - h
                  , u = g - j
                  , v = u * u + f * f;
                if (v < 49)
                    return b.focus(),
                    void b.click();
                b = c;
                var w = p / t;
                w = i.max(i.min(w, 3), -3);
                var x = i.abs(w / y)
                  , z = w * x + .5 * y * x * x
                  , A = ea.getScrollTop() - z
                  , B = 0;
                A > Aa ? (B = (Aa - A) / z,
                A = Aa) : A < 0 && (B = -A / z,
                A = 0),
                x *= 1 - B,
                ea.animateTo(A, {
                    easing: "outCubic",
                    duration: x
                })
            }
        }),
        a.scrollTo(0, 0),
        e.style.overflow = f.style.overflow = "hidden"
    }
      , V = function() {
        var a, b, c, d, e, f, g, h, j;
        for (h = 0,
        j = fa.length; h < j; h++)
            for (a = fa[h],
            b = a.element,
            c = a.anchorTarget,
            d = a.keyFrames,
            e = 0,
            f = d.length; e < f; e++)
                g = d[e],
                "relative" === g.mode && (ca(b),
                g.frame = ea.relativeToAbsolute(c, g.anchors[0], g.anchors[1]) - g.offset,
                ca(b, !0)),
                ia && !g.isEnd && g.frame > Aa && (Aa = g.frame);
        for (Aa = i.max(Aa, ta()),
        h = 0,
        j = fa.length; h < j; h++) {
            for (a = fa[h],
            d = a.keyFrames,
            e = 0,
            f = d.length; e < f; e++)
                g = d[e],
                g.isEnd && (g.frame = Aa - g.offset);
            a.keyFrames.sort(za)
        }
    }
      , W = function(a, b) {
        for (var c = 0, d = fa.length; c < d; c++) {
            var e, f, i = fa[c], j = i.element, k = i.smoothScrolling ? a : b, l = i.keyFrames, m = l[0].frame, n = l[l.length - 1].frame, s = k < m, t = k > n, u = l[s ? 0 : l.length - 1];
            if (s || t) {
                if (s && i.edge === -1 || t && 1 === i.edge)
                    continue;
                switch (va(j, [s ? p : r], [p, q, r]),
                i.edge = s ? -1 : 1,
                i.edgeStrategy) {
                case "reset":
                    ca(j);
                    continue;
                case "ease":
                    k = u.frame;
                    break;
                default:
                case "set":
                    var v = u.props;
                    for (e in v)
                        h.call(v, e) && (f = ba(v[e].value),
                        g.setStyle(j, e, f));
                    continue
                }
            } else
                0 !== i.edge && (va(j, [o, q], [p, r]),
                i.edge = 0);
            for (var w = 0, x = l.length - 1; w < x; w++)
                if (k >= l[w].frame && k <= l[w + 1].frame) {
                    var y = l[w]
                      , z = l[w + 1];
                    for (e in y.props)
                        if (h.call(y.props, e)) {
                            var A = (k - y.frame) / (z.frame - y.frame);
                            A = y.props[e].easing(A),
                            f = aa(y.props[e].value, z.props[e].value, A),
                            f = ba(f),
                            g.setStyle(j, e, f)
                        }
                    break
                }
        }
    }
      , X = function() {
        Ha && (Ha = !1,
        sa());
        var a, b, d = ea.getScrollTop(), e = ya();
        if (ka)
            e >= ka.endTime ? (d = ka.targetTop,
            a = ka.done,
            ka = c) : (b = ka.easing((e - ka.startTime) / ka.duration),
            d = ka.startTop + b * ka.topDiff | 0),
            ea.setScrollTop(d, !0);
        else if (!Ja) {
            var f = na.targetTop - d;
            f && (na = {
                startTop: Da,
                topDiff: d - Da,
                targetTop: d,
                startTime: Ea,
                endTime: Ea + ma
            }),
            e <= na.endTime && (b = T.sqrt((e - na.startTime) / ma),
            d = na.startTop + b * na.topDiff | 0)
        }
        if (Ja && ga && g.setStyle(ga, "transform", "translate(0, " + -Ka + "px) " + qa),
        oa || Da !== d) {
            Ca = d >= Da ? "down" : "up",
            oa = !1;
            var h = {
                curTop: d,
                lastTop: Da,
                maxTop: Aa,
                direction: Ca
            }
              , i = ha.beforerender && ha.beforerender.call(ea, h);
            i !== !1 && (W(d, ea.getScrollTop()),
            Da = d,
            ha.render && ha.render.call(ea, h)),
            a && a.call(ea, !1)
        }
        Ea = e
    }
      , Y = function(a) {
        for (var b = 0, c = a.keyFrames.length; b < c; b++) {
            for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = H.exec(h.props)); )
                f = g[1],
                e = g[2],
                d = f.match(I),
                null !== d ? (f = d[1],
                d = d[2]) : d = w,
                e = e.indexOf("!") ? Z(e) : [e.slice(1)],
                i[f] = {
                    value: e,
                    easing: T[d]
                };
            h.props = i
        }
    }
      , Z = function(a) {
        var b = [];
        return N.lastIndex = 0,
        a = a.replace(N, function(a) {
            return a.replace(L, function(a) {
                return a / 255 * 100 + "%"
            })
        }),
        Q && (O.lastIndex = 0,
        a = a.replace(O, function(a) {
            return Q + a
        })),
        a = a.replace(L, function(a) {
            return b.push(+a),
            "{?}"
        }),
        b.unshift(a),
        b
    }
      , $ = function(a) {
        var b, c, d = {};
        for (b = 0,
        c = a.keyFrames.length; b < c; b++)
            _(a.keyFrames[b], d);
        for (d = {},
        b = a.keyFrames.length - 1; b >= 0; b--)
            _(a.keyFrames[b], d)
    }
      , _ = function(a, b) {
        var c;
        for (c in b)
            h.call(a.props, c) || (a.props[c] = b[c]);
        for (c in a.props)
            b[c] = a.props[c]
    }
      , aa = function(a, b, c) {
        var d, e = a.length;
        if (e !== b.length)
            throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
        var f = [a[0]];
        for (d = 1; d < e; d++)
            f[d] = a[d] + (b[d] - a[d]) * c;
        return f
    }
      , ba = function(a) {
        var b = 1;
        return M.lastIndex = 0,
        a[0].replace(M, function() {
            return a[b++]
        })
    }
      , ca = function(a, b) {
        a = [].concat(a);
        for (var c, d, e = 0, f = a.length; e < f; e++)
            d = a[e],
            c = fa[d[E]],
            c && (b ? (d.style.cssText = c.dirtyStyleAttr,
            va(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText,
            c.dirtyClassAttr = ua(d),
            d.style.cssText = c.styleAttr,
            va(d, c.classAttr)))
    }
      , da = function() {
        qa = "translateZ(0)",
        g.setStyle(ga, "transform", qa);
        var a = j(ga)
          , b = a.getPropertyValue("transform")
          , c = a.getPropertyValue(Q + "transform")
          , d = b && "none" !== b || c && "none" !== c;
        d || (qa = "")
    };
    g.setStyle = function(a, b, c) {
        var d = a.style;
        if (b = b.replace(J, K).replace("-", ""),
        "zIndex" === b)
            d[b] = "" + (0 | c);
        else if ("float" === b)
            d.styleFloat = d.cssFloat = c;
        else
            try {
                P && (d[P + b.slice(0, 1).toUpperCase() + b.slice(1)] = c),
                d[b] = c
            } catch (e) {}
    }
    ;
    var ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra = g.addEvent = function(b, c, d) {
        var e = function(b) {
            return b = b || a.event,
            b.target || (b.target = b.srcElement),
            b.preventDefault || (b.preventDefault = function() {
                b.returnValue = !1
            }
            ),
            d.call(this, b)
        };
        c = c.split(" ");
        for (var f = 0, g = c.length; f < g; f++)
            b.addEventListener ? b.addEventListener(c[f], d, !1) : b.attachEvent("on" + c[f], e)
    }
    , sa = function() {
        var a = ea.getScrollTop();
        Aa = 0,
        ia && !Ja && (f.style.height = "auto"),
        V(),
        ia && !Ja && (f.style.height = Aa + e.clientHeight + "px"),
        Ja ? ea.setScrollTop(i.min(ea.getScrollTop(), Aa)) : ea.setScrollTop(a, !0),
        oa = !0
    }, ta = function() {
        var a = ga && ga.offsetHeight || 0
          , b = i.max(a, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight);
        return b - e.clientHeight
    }, ua = function(b) {
        var c = "className";
        return a.SVGElement && b instanceof a.SVGElement && (b = b[c],
        c = "baseVal"),
        b[c]
    }, va = function(b, d, e) {
        var f = "className";
        if (a.SVGElement && b instanceof a.SVGElement && (b = b[f],
        f = "baseVal"),
        e === c)
            return void (b[f] = d);
        for (var g = b[f], h = 0, i = e.length; h < i; h++)
            g = xa(g).replace(xa(e[h]), " ");
        g = wa(g);
        for (var j = 0, k = d.length; j < k; j++)
            xa(g).indexOf(xa(d[j])) === -1 && (g += " " + d[j]);
        b[f] = wa(g)
    }, wa = function(a) {
        return a.replace(F, "")
    }, xa = function(a) {
        return " " + a + " "
    }, ya = Date.now || function() {
        return +new Date
    }
    , za = function(a, b) {
        return a.frame - b.frame
    }, Aa = 0, Ba = 1, Ca = "down", Da = -1, Ea = ya(), Fa = 0, Ga = 0, Ha = !1, Ia = 0, Ja = !1, Ka = 0
}(window, document),
!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function b(b, d) {
            var e, f = this;
            f.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(b),
                appendDots: a(b),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(a, b) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            f.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            a.extend(f, f.initials),
            f.activeBreakpoint = null,
            f.animType = null,
            f.animProp = null,
            f.breakpoints = [],
            f.breakpointSettings = [],
            f.cssTransitions = !1,
            f.hidden = "hidden",
            f.paused = !1,
            f.positionProp = null,
            f.respondTo = null,
            f.rowCount = 1,
            f.shouldClick = !0,
            f.$slider = a(b),
            f.$slidesCache = null,
            f.transformType = null,
            f.transitionType = null,
            f.visibilityChange = "visibilitychange",
            f.windowWidth = 0,
            f.windowTimer = null,
            e = a(b).data("slick") || {},
            f.options = a.extend({}, f.defaults, e, d),
            f.currentSlide = f.options.initialSlide,
            f.originalSettings = f.options,
            "undefined" != typeof document.mozHidden ? (f.hidden = "mozHidden",
            f.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (f.hidden = "webkitHidden",
            f.visibilityChange = "webkitvisibilitychange"),
            f.autoPlay = a.proxy(f.autoPlay, f),
            f.autoPlayClear = a.proxy(f.autoPlayClear, f),
            f.changeSlide = a.proxy(f.changeSlide, f),
            f.clickHandler = a.proxy(f.clickHandler, f),
            f.selectHandler = a.proxy(f.selectHandler, f),
            f.setPosition = a.proxy(f.setPosition, f),
            f.swipeHandler = a.proxy(f.swipeHandler, f),
            f.dragHandler = a.proxy(f.dragHandler, f),
            f.keyHandler = a.proxy(f.keyHandler, f),
            f.autoPlayIterator = a.proxy(f.autoPlayIterator, f),
            f.instanceUid = c++,
            f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            f.registerBreakpoints(),
            f.init(!0),
            f.checkResponsive(!0)
        }
        var c = 0;
        return b
    }(),
    b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c)
            d = c,
            c = null;
        else if (0 > c || c >= e.slideCount)
            return !1;
        e.unload(),
        "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack),
        e.$slides = e.$slideTrack.children(this.options.slide),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slideTrack.append(e.$slides),
        e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }),
        e.$slidesCache = e.$slides,
        e.reinit()
    }
    ,
    b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }
    ,
    b.prototype.animateSlide = function(b, c) {
        var d = {}
          , e = this;
        e.animateHeight(),
        e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
        e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
        a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a),
                e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)",
                e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)",
                e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(),
        b = Math.ceil(b),
        d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)",
        e.$slideTrack.css(d),
        c && setTimeout(function() {
            e.disableTransition(),
            c.call()
        }, e.options.speed))
    }
    ,
    b.prototype.asNavFor = function(b) {
        var c = this
          , d = c.options.asNavFor;
        d && null !== d && (d = a(d).not(c.$slider)),
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }
    ,
    b.prototype.applyTransition = function(a) {
        var b = this
          , c = {};
        c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase,
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }
    ,
    b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer),
        a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }
    ,
    b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }
    ,
    b.prototype.autoPlayIterator = function() {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0),
        a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1),
        a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }
    ,
    b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"),
        b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"),
        b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows),
        b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows),
        b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    b.prototype.buildDots = function() {
        var b, c, d = this;
        if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
            for (c = '<ul class="' + d.options.dotsClass + '">',
            b = 0; b <= d.getDotCount(); b += 1)
                c += "<li>" + d.options.customPaging.call(this, d, b) + "</li>";
            c += "</ul>",
            d.$dots = a(c).appendTo(d.options.appendDots),
            d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }),
        b.$slidesCache = b.$slides,
        b.$slider.addClass("slick-slider"),
        b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(),
        b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        b.$slideTrack.css("opacity", 0),
        (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1),
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
        b.setupInfinite(),
        b.buildArrows(),
        b.buildDots(),
        b.updateDots(),
        b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
        b.options.draggable === !0 && b.$list.addClass("draggable")
    }
    ,
    b.prototype.buildRows = function() {
        var a, b, c, d, e, f, g, h = this;
        if (d = document.createDocumentFragment(),
        f = h.$slider.children(),
        h.options.rows > 1) {
            for (g = h.options.slidesPerRow * h.options.rows,
            e = Math.ceil(f.length / g),
            a = 0; e > a; a++) {
                var i = document.createElement("div");
                for (b = 0; b < h.options.rows; b++) {
                    var j = document.createElement("div");
                    for (c = 0; c < h.options.slidesPerRow; c++) {
                        var k = a * g + (b * h.options.slidesPerRow + c);
                        f.get(k) && j.appendChild(f.get(k))
                    }
                    i.appendChild(j)
                }
                d.appendChild(i)
            }
            h.$slider.html(d),
            h.$slider.children().children().children().css({
                width: 100 / h.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    b.prototype.checkResponsive = function(b, c) {
        var d, e, f, g = this, h = !1, i = g.$slider.width(), j = window.innerWidth || a(window).width();
        if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)),
        g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
            e = null;
            for (d in g.breakpoints)
                g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
            null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e,
            "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]),
            b === !0 && (g.currentSlide = g.options.initialSlide),
            g.refresh(b)),
            h = e) : (g.activeBreakpoint = e,
            "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]),
            b === !0 && (g.currentSlide = g.options.initialSlide),
            g.refresh(b)),
            h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null,
            g.options = g.originalSettings,
            b === !0 && (g.currentSlide = g.options.initialSlide),
            g.refresh(b),
            h = e),
            b || h === !1 || g.$slider.trigger("breakpoint", [g, h])
        }
    }
    ,
    b.prototype.changeSlide = function(b, c) {
        var d, e, f, g = this, h = a(b.target);
        switch (h.is("a") && b.preventDefault(),
        h.is("li") || (h = h.closest("li")),
        f = 0 !== g.slideCount % g.options.slidesToScroll,
        d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll,
        b.data.message) {
        case "previous":
            e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d,
            g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
            break;
        case "next":
            e = 0 === d ? g.options.slidesToScroll : d,
            g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
            break;
        case "index":
            var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
            g.slideHandler(g.checkNavigable(i), !1, c),
            h.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    b.prototype.checkNavigable = function(a) {
        var b, c, d = this;
        if (b = d.getNavigableIndexes(),
        c = 0,
        a > b[b.length - 1])
            a = b[b.length - 1];
        else
            for (var e in b) {
                if (a < b[e]) {
                    a = c;
                    break
                }
                c = b[e]
            }
        return a
    }
    ,
    b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide),
        b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))),
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
        b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
        b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
        b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
        b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
        b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
        b.$list.off("click.slick", b.clickHandler),
        a(document).off(b.visibilityChange, b.visibility),
        b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)),
        b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)),
        b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler),
        a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange),
        a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
        a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault),
        a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }
    ,
    b.prototype.cleanUpRows = function() {
        var a, b = this;
        b.options.rows > 1 && (a = b.$slides.children().children(),
        a.removeAttr("style"),
        b.$slider.html(a))
    }
    ,
    b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(),
        a.stopPropagation(),
        a.preventDefault())
    }
    ,
    b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(),
        c.touchObject = {},
        c.cleanUpEvents(),
        a(".slick-cloned", c.$slider).detach(),
        c.$dots && c.$dots.remove(),
        c.options.arrows === !0 && (c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
        c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove())),
        c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }),
        c.$slideTrack.children(this.options.slide).detach(),
        c.$slideTrack.detach(),
        c.$list.detach(),
        c.$slider.append(c.$slides)),
        c.cleanUpRows(),
        c.$slider.removeClass("slick-slider"),
        c.$slider.removeClass("slick-initialized"),
        c.unslicked = !0,
        b || c.$slider.trigger("destroy", [c])
    }
    ,
    b.prototype.disableTransition = function(a) {
        var b = this
          , c = {};
        c[b.transitionType] = "",
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }
    ,
    b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }),
        c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a),
        c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }),
        b && setTimeout(function() {
            c.disableTransition(a),
            b.call()
        }, c.options.speed))
    }
    ,
    b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a),
        b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }
    ,
    b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.unload(),
        b.$slideTrack.children(this.options.slide).detach(),
        b.$slidesCache.filter(a).appendTo(b.$slideTrack),
        b.reinit())
    }
    ,
    b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }
    ,
    b.prototype.getDotCount = function() {
        var a = this
          , b = 0
          , c = 0
          , d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount; )
                ++d,
                b = c + a.options.slidesToShow,
                c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0)
            d = a.slideCount;
        else
            for (; b < a.slideCount; )
                ++d,
                b = c + a.options.slidesToShow,
                c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d - 1
    }
    ,
    b.prototype.getLeft = function(a) {
        var b, c, d, e = this, f = 0;
        return e.slideOffset = 0,
        c = e.$slides.first().outerHeight(!0),
        e.options.infinite === !0 ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = -1 * e.slideWidth * e.options.slidesToShow,
        f = -1 * c * e.options.slidesToShow),
        0 !== e.slideCount % e.options.slidesToScroll && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = -1 * (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth,
        f = -1 * (e.options.slidesToShow - (a - e.slideCount)) * c) : (e.slideOffset = -1 * e.slideCount % e.options.slidesToScroll * e.slideWidth,
        f = -1 * e.slideCount % e.options.slidesToScroll * c))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth,
        f = (a + e.options.slidesToShow - e.slideCount) * c),
        e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0,
        f = 0),
        e.options.centerMode === !0 && e.options.infinite === !0 ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : e.options.centerMode === !0 && (e.slideOffset = 0,
        e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)),
        b = e.options.vertical === !1 ? -1 * a * e.slideWidth + e.slideOffset : -1 * a * c + f,
        e.options.variableWidth === !0 && (d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow),
        b = d[0] ? -1 * d[0].offsetLeft : 0,
        e.options.centerMode === !0 && (d = e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1),
        b = d[0] ? -1 * d[0].offsetLeft : 0,
        b += (e.$list.width() - d.outerWidth()) / 2)),
        b
    }
    ,
    b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }
    ,
    b.prototype.getNavigableIndexes = function() {
        var a, b = this, c = 0, d = 0, e = [];
        for (b.options.infinite === !1 ? a = b.slideCount : (c = -1 * b.options.slidesToScroll,
        d = -1 * b.options.slidesToScroll,
        a = 2 * b.slideCount); a > c; )
            e.push(c),
            c = d + b.options.slidesToScroll,
            d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
        return e
    }
    ,
    b.prototype.getSlick = function() {
        return this
    }
    ,
    b.prototype.getSlideCount = function() {
        var b, c, d, e = this;
        return d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0,
        e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function(b, f) {
            return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? (c = f,
            !1) : void 0
        }),
        b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll
    }
    ,
    b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }
    ,
    b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"),
        c.buildRows(),
        c.buildOut(),
        c.setProps(),
        c.startLoad(),
        c.loadSlider(),
        c.initializeEvents(),
        c.updateArrows(),
        c.updateDots()),
        b && c.$slider.trigger("init", [c]),
        c.options.accessibility === !0 && c.initADA()
    }
    ,
    b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
            message: "previous"
        }, a.changeSlide),
        a.$nextArrow.on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }
    ,
    b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide),
        b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
    }
    ,
    b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(),
        b.initDotEvents(),
        b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler),
        b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler),
        b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler),
        b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler),
        b.$list.on("click.slick", b.clickHandler),
        a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
        b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)),
        b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)),
        b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)),
        a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)),
        a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }
    ,
    b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(),
        a.$nextArrow.show()),
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(),
        a.options.autoplay === !0 && a.autoPlay()
    }
    ,
    b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: "next"
            }
        }))
    }
    ,
    b.prototype.lazyLoad = function() {
        function b(b) {
            a("img[data-lazy]", b).each(function() {
                var b = a(this)
                  , c = a(this).attr("data-lazy")
                  , d = document.createElement("img");
                d.onload = function() {
                    b.animate({
                        opacity: 0
                    }, 100, function() {
                        b.attr("src", c).animate({
                            opacity: 1
                        }, 200, function() {
                            b.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }
                ,
                d.src = c
            })
        }
        var c, d, e, f, g = this;
        g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1),
        f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)),
        f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide,
        f = e + g.options.slidesToShow,
        g.options.fade === !0 && (e > 0 && e--,
        f <= g.slideCount && f++)),
        c = g.$slider.find(".slick-slide").slice(e, f),
        b(c),
        g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"),
        b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow),
        b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow),
        b(d))
    }
    ,
    b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(),
        a.$slideTrack.css({
            opacity: 1
        }),
        a.$slider.removeClass("slick-loading"),
        a.initUI(),
        "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }
    ,
    b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(),
        a.setPosition()
    }
    ,
    b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(),
        a.paused = !0
    }
    ,
    b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.paused = !1,
        a.autoPlay()
    }
    ,
    b.prototype.postSlide = function(a) {
        var b = this;
        b.$slider.trigger("afterChange", [b, a]),
        b.animating = !1,
        b.setPosition(),
        b.swipeLeft = null,
        b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(),
        b.options.accessibility === !0 && b.initADA()
    }
    ,
    b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }
    ,
    b.prototype.progressiveLazyLoad = function() {
        var b, c, d = this;
        b = a("img[data-lazy]", d.$slider).length,
        b > 0 && (c = a("img[data-lazy]", d.$slider).first(),
        c.attr("src", c.attr("data-lazy")).removeClass("slick-loading").load(function() {
            c.removeAttr("data-lazy"),
            d.progressiveLazyLoad(),
            d.options.adaptiveHeight === !0 && d.setPosition()
        }).error(function() {
            c.removeAttr("data-lazy"),
            d.progressiveLazyLoad()
        }))
    }
    ,
    b.prototype.refresh = function(b) {
        var c = this
          , d = c.currentSlide;
        c.destroy(!0),
        a.extend(c, c.initials, {
            currentSlide: d
        }),
        c.init(),
        b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }
    ,
    b.prototype.registerBreakpoints = function() {
        var b, c, d, e = this, f = e.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            e.respondTo = e.options.respondTo || "window";
            for (b in f)
                if (d = e.breakpoints.length - 1,
                c = f[b].breakpoint,
                f.hasOwnProperty(b)) {
                    for (; d >= 0; )
                        e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1),
                        d--;
                    e.breakpoints.push(c),
                    e.breakpointSettings[c] = f[b].settings
                }
            e.breakpoints.sort(function(a, b) {
                return e.options.mobileFirst ? a - b : b - a
            })
        }
    }
    ,
    b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
        b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
        b.registerBreakpoints(),
        b.setProps(),
        b.setupInfinite(),
        b.buildArrows(),
        b.updateArrows(),
        b.initArrowEvents(),
        b.buildDots(),
        b.updateDots(),
        b.initDotEvents(),
        b.checkResponsive(!1, !0),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        b.setSlideClasses(0),
        b.setPosition(),
        b.$slider.trigger("reInit", [b]),
        b.options.autoplay === !0 && b.focusHandler()
    }
    ,
    b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay),
        b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(),
            b.checkResponsive(),
            b.unslicked || b.setPosition()
        }, 50))
    }
    ,
    b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a,
        a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a,
        !(d.slideCount < 1 || 0 > a || a > d.slideCount - 1) && (d.unload(),
        c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(),
        d.$slides = d.$slideTrack.children(this.options.slide),
        d.$slideTrack.children(this.options.slide).detach(),
        d.$slideTrack.append(d.$slides),
        d.$slidesCache = d.$slides,
        void d.reinit())
    }
    ,
    b.prototype.setCSS = function(a) {
        var b, c, d = this, e = {};
        d.options.rtl === !0 && (a = -a),
        b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px",
        c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px",
        e[d.positionProp] = a,
        d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {},
        d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")",
        d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)",
        d.$slideTrack.css(e)))
    }
    ,
    b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow),
        a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })),
        a.listWidth = a.$list.width(),
        a.listHeight = a.$list.height(),
        a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow),
        a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth),
        a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }
    ,
    b.prototype.setFade = function() {
        var b, c = this;
        c.$slides.each(function(d, e) {
            b = -1 * c.slideWidth * d,
            c.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: b,
                top: 0,
                zIndex: c.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: b,
                top: 0,
                zIndex: c.options.zIndex - 2,
                opacity: 0
            })
        }),
        c.$slides.eq(c.currentSlide).css({
            zIndex: c.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }
    ,
    b.prototype.setOption = b.prototype.slickSetOption = function(b, c, d) {
        var e, f, g = this;
        if ("responsive" === b && "array" === a.type(c))
            for (f in c)
                if ("array" !== a.type(g.options.responsive))
                    g.options.responsive = [c[f]];
                else {
                    for (e = g.options.responsive.length - 1; e >= 0; )
                        g.options.responsive[e].breakpoint === c[f].breakpoint && g.options.responsive.splice(e, 1),
                        e--;
                    g.options.responsive.push(c[f])
                }
        else
            g.options[b] = c;
        d === !0 && (g.unload(),
        g.reinit())
    }
    ,
    b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(),
        a.setHeight(),
        a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(),
        a.$slider.trigger("setPosition", [a])
    }
    ,
    b.prototype.setProps = function() {
        var a = this
          , b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left",
        "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"),
        (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0),
        a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex),
        void 0 !== b.OTransform && (a.animType = "OTransform",
        a.transformType = "-o-transform",
        a.transitionType = "OTransition",
        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
        void 0 !== b.MozTransform && (a.animType = "MozTransform",
        a.transformType = "-moz-transform",
        a.transitionType = "MozTransition",
        void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)),
        void 0 !== b.webkitTransform && (a.animType = "webkitTransform",
        a.transformType = "-webkit-transform",
        a.transitionType = "webkitTransition",
        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
        void 0 !== b.msTransform && (a.animType = "msTransform",
        a.transformType = "-ms-transform",
        a.transitionType = "msTransition",
        void 0 === b.msTransform && (a.animType = !1)),
        void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform",
        a.transformType = "transform",
        a.transitionType = "transition"),
        a.transformsEnabled = null !== a.animType && a.animType !== !1
    }
    ,
    b.prototype.setSlideClasses = function(a) {
        var b, c, d, e, f = this;
        c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        f.$slides.eq(a).addClass("slick-current"),
        f.options.centerMode === !0 ? (b = Math.floor(f.options.slidesToShow / 2),
        f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a,
        c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")),
        f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow,
        d = f.options.infinite === !0 ? f.options.slidesToShow + a : a,
        f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === f.options.lazyLoad && f.lazyLoad()
    }
    ,
    b.prototype.setupInfinite = function() {
        var b, c, d, e = this;
        if (e.options.fade === !0 && (e.options.centerMode = !1),
        e.options.infinite === !0 && e.options.fade === !1 && (c = null,
        e.slideCount > e.options.slidesToShow)) {
            for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow,
            b = e.slideCount; b > e.slideCount - d; b -= 1)
                c = b - 1,
                a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
            for (b = 0; d > b; b += 1)
                c = b,
                a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
            e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }
    ,
    b.prototype.setPaused = function(a) {
        var b = this;
        b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a,
        a ? b.autoPlayClear() : b.autoPlay())
    }
    ,
    b.prototype.selectHandler = function(b) {
        var c = this
          , d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide")
          , e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0),
        c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e),
        void c.asNavFor(e)) : void c.slideHandler(e)
    }
    ,
    b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, h = null, i = this;
        return b = b || !1,
        i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a),
        d = a,
        h = i.getLeft(d),
        g = i.getLeft(i.currentSlide),
        i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft,
        i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide,
        c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide,
        c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer),
        e = 0 > d ? 0 !== i.slideCount % i.options.slidesToScroll ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? 0 !== i.slideCount % i.options.slidesToScroll ? 0 : d - i.slideCount : d,
        i.animating = !0,
        i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
        f = i.currentSlide,
        i.currentSlide = e,
        i.setSlideClasses(i.currentSlide),
        i.updateDots(),
        i.updateArrows(),
        i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f),
        i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e),
        void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }
    ,
    b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(),
        a.$nextArrow.hide()),
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(),
        a.$slider.addClass("slick-loading")
    }
    ,
    b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX,
        b = e.touchObject.startY - e.touchObject.curY,
        c = Math.atan2(b, a),
        d = Math.round(180 * c / Math.PI),
        0 > d && (d = 360 - Math.abs(d)),
        45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
    }
    ,
    b.prototype.swipeEnd = function() {
        var a, b = this;
        if (b.dragging = !1,
        b.shouldClick = !(b.touchObject.swipeLength > 10),
        void 0 === b.touchObject.curX)
            return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]),
        b.touchObject.swipeLength >= b.touchObject.minSwipe)
            switch (b.swipeDirection()) {
            case "left":
                a = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(),
                b.slideHandler(a),
                b.currentDirection = 0,
                b.touchObject = {},
                b.$slider.trigger("swipe", [b, "left"]);
                break;
            case "right":
                a = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(),
                b.slideHandler(a),
                b.currentDirection = 1,
                b.touchObject = {},
                b.$slider.trigger("swipe", [b, "right"])
            }
        else
            b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide),
            b.touchObject = {})
    }
    ,
    b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend"in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse")))
            switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1,
            b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold,
            b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
            a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
            }
    }
    ,
    b.prototype.swipeMove = function(a) {
        var b, c, d, e, f, g = this;
        return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null,
        !(!g.dragging || f && 1 !== f.length) && (b = g.getLeft(g.currentSlide),
        g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX,
        g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY,
        g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))),
        g.options.verticalSwiping === !0 && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))),
        c = g.swipeDirection(),
        "vertical" !== c ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(),
        e = (g.options.rtl === !1 ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1),
        g.options.verticalSwiping === !0 && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1),
        d = g.touchObject.swipeLength,
        g.touchObject.edgeHit = !1,
        g.options.infinite === !1 && (0 === g.currentSlide && "right" === c || g.currentSlide >= g.getDotCount() && "left" === c) && (d = g.touchObject.swipeLength * g.options.edgeFriction,
        g.touchObject.edgeHit = !0),
        g.swipeLeft = g.options.vertical === !1 ? b + d * e : b + d * (g.$list.height() / g.listWidth) * e,
        g.options.verticalSwiping === !0 && (g.swipeLeft = b + d * e),
        g.options.fade !== !0 && g.options.touchMove !== !1 && (g.animating === !0 ? (g.swipeLeft = null,
        !1) : void g.setCSS(g.swipeLeft))) : void 0)
    }
    ,
    b.prototype.swipeStart = function(a) {
        var b, c = this;
        return 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {},
        !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]),
        c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX,
        c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY,
        void (c.dragging = !0))
    }
    ,
    b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(),
        a.$slideTrack.children(this.options.slide).detach(),
        a.$slidesCache.appendTo(a.$slideTrack),
        a.reinit())
    }
    ,
    b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(),
        b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(),
        b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]),
        b.destroy()
    }
    ,
    b.prototype.updateArrows = function() {
        var a, b = this;
        a = Math.floor(b.options.slidesToShow / 2),
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && !b.options.infinite && (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - 1 && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    b.prototype.visibility = function() {
        var a = this;
        document[a.hidden] ? (a.paused = !0,
        a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1,
        a.autoPlay())
    }
    ,
    b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        b.$slideTrack.attr("role", "listbox"),
        b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }),
        null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        b.activateADA()
    }
    ,
    b.prototype.activateADA = function() {
        var a = this
          , b = a.$slider.find("*").is(":focus");
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false",
            tabindex: "0"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        }),
        b && a.$slideTrack.find(".slick-active").focus()
    }
    ,
    b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.on("focus.slick blur.slick", "*", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.isPlay && (d.is(":focus") ? (b.autoPlayClear(),
                b.paused = !0) : (b.paused = !1,
                b.autoPlay()))
            }, 0)
        })
    }
    ,
    a.fn.slick = function() {
        var a, c = this, d = arguments[0], e = Array.prototype.slice.call(arguments, 1), f = c.length, g = 0;
        for (g; f > g; g++)
            if ("object" == typeof d || "undefined" == typeof d ? c[g].slick = new b(c[g],d) : a = c[g].slick[d].apply(c[g].slick, e),
            "undefined" != typeof a)
                return a;
        return c
    }
}),
+function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap")
          , b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)
            if (void 0 !== a.style[c])
                return {
                    end: b[c]
                };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1
          , d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b),
        this
    }
    ,
    a(function() {
        a.support.transition = b(),
        a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                if (a(b.target).is(this))
                    return b.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.carousel")
              , f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b)
              , g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this,f)),
            "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = c,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.5",
    c.TRANSITION_DURATION = 600,
    c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            a.preventDefault()
        }
    }
    ,
    c.prototype.cycle = function(b) {
        return b || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"),
        this.$items.index(a || this.$active)
    }
    ,
    c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b)
          , d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap)
            return b;
        var e = "prev" == a ? -1 : 1
          , f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }
    ,
    c.prototype.to = function(a) {
        var b = this
          , c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || a < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                b.to(a)
            }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }
    ,
    c.prototype.pause = function(b) {
        return b || (this.paused = !0),
        this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    c.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ,
    c.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ,
    c.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active")
          , e = c || this.getItemForDirection(b, d)
          , f = this.interval
          , g = "next" == b ? "left" : "right"
          , h = this;
        if (e.hasClass("active"))
            return this.sliding = !1;
        var i = e[0]
          , j = a.Event("slide.bs.carousel", {
            relatedTarget: i,
            direction: g
        });
        if (this.$element.trigger(j),
        !j.isDefaultPrevented()) {
            if (this.sliding = !0,
            f && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var k = a(this.$indicators.children()[this.getItemIndex(e)]);
                k && k.addClass("active")
            }
            var l = a.Event("slid.bs.carousel", {
                relatedTarget: i,
                direction: g
            })
              , m = this.$element.hasClass("mkd-header-effect");
            if (a.support.transition && this.$element.hasClass("slide")) {
                var n;
                n = setTimeout(function() {
                    mkd.modules.shortcodes.mkdCheckSliderForHeaderStyle(e, m),
                    e.addClass(b),
                    e[0].offsetWidth,
                    d.addClass(g),
                    e.addClass(g),
                    d.one("bsTransitionEnd", function() {
                        e.removeClass([b, g].join(" ")).addClass("active"),
                        d.removeClass(["active", g].join(" ")),
                        h.sliding = !1,
                        setTimeout(function() {
                            h.$element.trigger(l)
                        }, 0)
                    }).emulateTransitionEnd(600),
                    clearTimeout(n)
                }, 300)
            } else
                d.removeClass("active"),
                e.addClass("active"),
                this.sliding = !1,
                this.$element.trigger(l);
            return f && this.cycle(),
            this
        }
    }
    ;
    var d = a.fn.carousel;
    a.fn.carousel = b,
    a.fn.carousel.Constructor = c,
    a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d,
        this
    }
    ;
    var e = function(c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data())
              , h = e.attr("data-slide-to");
            h && (g.interval = !1),
            b.call(f, g),
            h && f.data("bs.carousel").to(h),
            c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
    a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery),
function(a) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    function b(b) {
        return !b || void 0 !== b.allowPageScroll || void 0 === b.swipe && void 0 === b.swipeStatus || (b.allowPageScroll = j),
        void 0 !== b.click && void 0 === b.tap && (b.tap = b.click),
        b || (b = {}),
        b = a.extend({}, a.fn.swipe.defaults, b),
        this.each(function() {
            var d = a(this)
              , e = d.data(B);
            e || (e = new c(this,b),
            d.data(B, e))
        })
    }
    function c(b, c) {
        function C(b) {
            if (!(ja() || a(b.target).closest(c.excludedElements, Sa).length > 0)) {
                var d, e = b.originalEvent ? b.originalEvent : b, f = y ? e.touches[0] : e;
                return Ta = u,
                y ? Ua = e.touches.length : b.preventDefault(),
                Ja = 0,
                Ka = null,
                Qa = null,
                La = 0,
                Ma = 0,
                Na = 0,
                Oa = 1,
                Pa = 0,
                Va = oa(),
                Ra = ra(),
                ha(),
                !y || Ua === c.fingers || c.fingers === s || R() ? (la(0, f),
                Wa = Aa(),
                2 == Ua && (la(1, e.touches[1]),
                Ma = Na = ua(Va[0].start, Va[1].start)),
                (c.swipeStatus || c.pinchStatus) && (d = J(e, Ta))) : d = !1,
                d === !1 ? (Ta = x,
                J(e, Ta),
                d) : (c.hold && (ab = setTimeout(a.proxy(function() {
                    Sa.trigger("hold", [e.target]),
                    c.hold && (d = c.hold.call(Sa, e, e.target))
                }, this), c.longTapThreshold)),
                ka(!0),
                null)
            }
        }
        function D(a) {
            var b = a.originalEvent ? a.originalEvent : a;
            if (Ta !== w && Ta !== x && !ia()) {
                var d, e = y ? b.touches[0] : b, f = ma(e);
                if (Xa = Aa(),
                y && (Ua = b.touches.length),
                c.hold && clearTimeout(ab),
                Ta = v,
                2 == Ua && (0 == Ma ? (la(1, b.touches[1]),
                Ma = Na = ua(Va[0].start, Va[1].start)) : (ma(b.touches[1]),
                Na = ua(Va[0].end, Va[1].end),
                Qa = wa(Va[0].end, Va[1].end)),
                Oa = va(Ma, Na),
                Pa = Math.abs(Ma - Na)),
                Ua === c.fingers || c.fingers === s || !y || R()) {
                    if (Ka = za(f.start, f.end),
                    P(a, Ka),
                    Ja = xa(f.start, f.end),
                    La = ta(),
                    pa(Ka, Ja),
                    (c.swipeStatus || c.pinchStatus) && (d = J(b, Ta)),
                    !c.triggerOnTouchEnd || c.triggerOnTouchLeave) {
                        var g = !0;
                        if (c.triggerOnTouchLeave) {
                            var h = Ba(this);
                            g = Ca(f.end, h)
                        }
                        !c.triggerOnTouchEnd && g ? Ta = I(v) : c.triggerOnTouchLeave && !g && (Ta = I(w)),
                        Ta != x && Ta != w || J(b, Ta)
                    }
                } else
                    Ta = x,
                    J(b, Ta);
                d === !1 && (Ta = x,
                J(b, Ta))
            }
        }
        function E(a) {
            var b = a.originalEvent;
            return y && b.touches.length > 0 ? (ga(),
            !0) : (ia() && (Ua = Za),
            Xa = Aa(),
            La = ta(),
            M() || !L() ? (Ta = x,
            J(b, Ta)) : c.triggerOnTouchEnd || 0 == c.triggerOnTouchEnd && Ta === v ? (a.preventDefault(),
            Ta = w,
            J(b, Ta)) : !c.triggerOnTouchEnd && Y() ? (Ta = w,
            K(b, Ta, n)) : Ta === v && (Ta = x,
            J(b, Ta)),
            ka(!1),
            null)
        }
        function F() {
            Ua = 0,
            Xa = 0,
            Wa = 0,
            Ma = 0,
            Na = 0,
            Oa = 1,
            ha(),
            ka(!1)
        }
        function G(a) {
            var b = a.originalEvent;
            c.triggerOnTouchLeave && (Ta = I(w),
            J(b, Ta))
        }
        function H() {
            Sa.unbind(Ea, C),
            Sa.unbind(Ia, F),
            Sa.unbind(Fa, D),
            Sa.unbind(Ga, E),
            Ha && Sa.unbind(Ha, G),
            ka(!1)
        }
        function I(a) {
            var b = a
              , d = O()
              , e = L()
              , f = M();
            return !d || f ? b = x : !e || a != v || c.triggerOnTouchEnd && !c.triggerOnTouchLeave ? !e && a == w && c.triggerOnTouchLeave && (b = x) : b = w,
            b
        }
        function J(a, b) {
            var c = void 0;
            return V() || U() ? c = K(a, b, l) : (S() || R()) && c !== !1 && (c = K(a, b, m)),
            ea() && c !== !1 ? c = K(a, b, o) : fa() && c !== !1 ? c = K(a, b, p) : da() && c !== !1 && (c = K(a, b, n)),
            b === x && F(a),
            b === w && (y ? 0 == a.touches.length && F(a) : F(a)),
            c
        }
        function K(b, j, k) {
            var q = void 0;
            if (k == l) {
                if (Sa.trigger("swipeStatus", [j, Ka || null, Ja || 0, La || 0, Ua, Va]),
                c.swipeStatus && (q = c.swipeStatus.call(Sa, b, j, Ka || null, Ja || 0, La || 0, Ua, Va),
                q === !1))
                    return !1;
                if (j == w && T()) {
                    if (Sa.trigger("swipe", [Ka, Ja, La, Ua, Va]),
                    c.swipe && (q = c.swipe.call(Sa, b, Ka, Ja, La, Ua, Va),
                    q === !1))
                        return !1;
                    switch (Ka) {
                    case d:
                        Sa.trigger("swipeLeft", [Ka, Ja, La, Ua, Va]),
                        c.swipeLeft && (q = c.swipeLeft.call(Sa, b, Ka, Ja, La, Ua, Va));
                        break;
                    case e:
                        Sa.trigger("swipeRight", [Ka, Ja, La, Ua, Va]),
                        c.swipeRight && (q = c.swipeRight.call(Sa, b, Ka, Ja, La, Ua, Va));
                        break;
                    case f:
                        Sa.trigger("swipeUp", [Ka, Ja, La, Ua, Va]),
                        c.swipeUp && (q = c.swipeUp.call(Sa, b, Ka, Ja, La, Ua, Va));
                        break;
                    case g:
                        Sa.trigger("swipeDown", [Ka, Ja, La, Ua, Va]),
                        c.swipeDown && (q = c.swipeDown.call(Sa, b, Ka, Ja, La, Ua, Va))
                    }
                }
            }
            if (k == m) {
                if (Sa.trigger("pinchStatus", [j, Qa || null, Pa || 0, La || 0, Ua, Oa, Va]),
                c.pinchStatus && (q = c.pinchStatus.call(Sa, b, j, Qa || null, Pa || 0, La || 0, Ua, Oa, Va),
                q === !1))
                    return !1;
                if (j == w && Q())
                    switch (Qa) {
                    case h:
                        Sa.trigger("pinchIn", [Qa || null, Pa || 0, La || 0, Ua, Oa, Va]),
                        c.pinchIn && (q = c.pinchIn.call(Sa, b, Qa || null, Pa || 0, La || 0, Ua, Oa, Va));
                        break;
                    case i:
                        Sa.trigger("pinchOut", [Qa || null, Pa || 0, La || 0, Ua, Oa, Va]),
                        c.pinchOut && (q = c.pinchOut.call(Sa, b, Qa || null, Pa || 0, La || 0, Ua, Oa, Va))
                    }
            }
            return k == n ? j !== x && j !== w || (clearTimeout(_a),
            clearTimeout(ab),
            Z() && !aa() ? ($a = Aa(),
            _a = setTimeout(a.proxy(function() {
                $a = null,
                Sa.trigger("tap", [b.target]),
                c.tap && (q = c.tap.call(Sa, b, b.target))
            }, this), c.doubleTapThreshold)) : ($a = null,
            Sa.trigger("tap", [b.target]),
            c.tap && (q = c.tap.call(Sa, b, b.target)))) : k == o ? j !== x && j !== w || (clearTimeout(_a),
            $a = null,
            Sa.trigger("doubletap", [b.target]),
            c.doubleTap && (q = c.doubleTap.call(Sa, b, b.target))) : k == p && (j !== x && j !== w || (clearTimeout(_a),
            $a = null,
            Sa.trigger("longtap", [b.target]),
            c.longTap && (q = c.longTap.call(Sa, b, b.target)))),
            q
        }
        function L() {
            var a = !0;
            return null !== c.threshold && (a = Ja >= c.threshold),
            a
        }
        function M() {
            var a = !1;
            return null !== c.cancelThreshold && null !== Ka && (a = qa(Ka) - Ja >= c.cancelThreshold),
            a
        }
        function N() {
            return null === c.pinchThreshold || Pa >= c.pinchThreshold
        }
        function O() {
            var a;
            return a = !c.maxTimeThreshold || !(La >= c.maxTimeThreshold)
        }
        function P(a, b) {
            if (c.allowPageScroll === j || R())
                a.preventDefault();
            else {
                var h = c.allowPageScroll === k;
                switch (b) {
                case d:
                    (c.swipeLeft && h || !h && c.allowPageScroll != q) && a.preventDefault();
                    break;
                case e:
                    (c.swipeRight && h || !h && c.allowPageScroll != q) && a.preventDefault();
                    break;
                case f:
                    (c.swipeUp && h || !h && c.allowPageScroll != r) && a.preventDefault();
                    break;
                case g:
                    (c.swipeDown && h || !h && c.allowPageScroll != r) && a.preventDefault()
                }
            }
        }
        function Q() {
            var a = W()
              , b = X()
              , c = N();
            return a && b && c
        }
        function R() {
            return !!(c.pinchStatus || c.pinchIn || c.pinchOut)
        }
        function S() {
            return !(!Q() || !R())
        }
        function T() {
            var a = O()
              , b = L()
              , c = W()
              , d = X()
              , e = M()
              , f = !e && d && c && b && a;
            return f
        }
        function U() {
            return !!(c.swipe || c.swipeStatus || c.swipeLeft || c.swipeRight || c.swipeUp || c.swipeDown)
        }
        function V() {
            return !(!T() || !U())
        }
        function W() {
            return Ua === c.fingers || c.fingers === s || !y
        }
        function X() {
            return 0 !== Va[0].end.x
        }
        function Y() {
            return !!c.tap
        }
        function Z() {
            return !!c.doubleTap
        }
        function $() {
            return !!c.longTap
        }
        function _() {
            if (null == $a)
                return !1;
            var a = Aa();
            return Z() && a - $a <= c.doubleTapThreshold
        }
        function aa() {
            return _()
        }
        function ba() {
            return (1 === Ua || !y) && (isNaN(Ja) || Ja < c.threshold)
        }
        function ca() {
            return La > c.longTapThreshold && Ja < t
        }
        function da() {
            return !(!ba() || !Y())
        }
        function ea() {
            return !(!_() || !Z())
        }
        function fa() {
            return !(!ca() || !$())
        }
        function ga() {
            Ya = Aa(),
            Za = event.touches.length + 1
        }
        function ha() {
            Ya = 0,
            Za = 0
        }
        function ia() {
            var a = !1;
            if (Ya) {
                var b = Aa() - Ya;
                b <= c.fingerReleaseThreshold && (a = !0)
            }
            return a
        }
        function ja() {
            return !(Sa.data(B + "_intouch") !== !0)
        }
        function ka(a) {
            a === !0 ? (Sa.bind(Fa, D),
            Sa.bind(Ga, E),
            Ha && Sa.bind(Ha, G)) : (Sa.unbind(Fa, D, !1),
            Sa.unbind(Ga, E, !1),
            Ha && Sa.unbind(Ha, G, !1)),
            Sa.data(B + "_intouch", a === !0)
        }
        function la(a, b) {
            var c = void 0 !== b.identifier ? b.identifier : 0;
            return Va[a].identifier = c,
            Va[a].start.x = Va[a].end.x = b.pageX || b.clientX,
            Va[a].start.y = Va[a].end.y = b.pageY || b.clientY,
            Va[a]
        }
        function ma(a) {
            var b = void 0 !== a.identifier ? a.identifier : 0
              , c = na(b);
            return c.end.x = a.pageX || a.clientX,
            c.end.y = a.pageY || a.clientY,
            c
        }
        function na(a) {
            for (var b = 0; b < Va.length; b++)
                if (Va[b].identifier == a)
                    return Va[b]
        }
        function oa() {
            for (var a = [], b = 0; b <= 5; b++)
                a.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
            return a
        }
        function pa(a, b) {
            b = Math.max(b, qa(a)),
            Ra[a].distance = b
        }
        function qa(a) {
            if (Ra[a])
                return Ra[a].distance
        }
        function ra() {
            var a = {};
            return a[d] = sa(d),
            a[e] = sa(e),
            a[f] = sa(f),
            a[g] = sa(g),
            a
        }
        function sa(a) {
            return {
                direction: a,
                distance: 0
            }
        }
        function ta() {
            return Xa - Wa
        }
        function ua(a, b) {
            var c = Math.abs(a.x - b.x)
              , d = Math.abs(a.y - b.y);
            return Math.round(Math.sqrt(c * c + d * d))
        }
        function va(a, b) {
            var c = b / a * 1;
            return c.toFixed(2)
        }
        function wa() {
            return Oa < 1 ? i : h
        }
        function xa(a, b) {
            return Math.round(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)))
        }
        function ya(a, b) {
            var c = a.x - b.x
              , d = b.y - a.y
              , e = Math.atan2(d, c)
              , f = Math.round(180 * e / Math.PI);
            return f < 0 && (f = 360 - Math.abs(f)),
            f
        }
        function za(a, b) {
            var c = ya(a, b);
            return c <= 45 && c >= 0 ? d : c <= 360 && c >= 315 ? d : c >= 135 && c <= 225 ? e : c > 45 && c < 135 ? g : f
        }
        function Aa() {
            var a = new Date;
            return a.getTime()
        }
        function Ba(b) {
            b = a(b);
            var c = b.offset()
              , d = {
                left: c.left,
                right: c.left + b.outerWidth(),
                top: c.top,
                bottom: c.top + b.outerHeight()
            };
            return d
        }
        function Ca(a, b) {
            return a.x > b.left && a.x < b.right && a.y > b.top && a.y < b.bottom
        }
        var Da = y || A || !c.fallbackToMouseEvents
          , Ea = Da ? A ? z ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown"
          , Fa = Da ? A ? z ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove"
          , Ga = Da ? A ? z ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup"
          , Ha = Da ? null : "mouseleave"
          , Ia = A ? z ? "MSPointerCancel" : "pointercancel" : "touchcancel"
          , Ja = 0
          , Ka = null
          , La = 0
          , Ma = 0
          , Na = 0
          , Oa = 1
          , Pa = 0
          , Qa = 0
          , Ra = null
          , Sa = a(b)
          , Ta = "start"
          , Ua = 0
          , Va = null
          , Wa = 0
          , Xa = 0
          , Ya = 0
          , Za = 0
          , $a = 0
          , _a = null
          , ab = null;
        try {
            Sa.bind(Ea, C),
            Sa.bind(Ia, F)
        } catch (bb) {
            a.error("events not supported " + Ea + "," + Ia + " on jQuery.swipe")
        }
        this.enable = function() {
            return Sa.bind(Ea, C),
            Sa.bind(Ia, F),
            Sa
        }
        ,
        this.disable = function() {
            return H(),
            Sa
        }
        ,
        this.destroy = function() {
            return H(),
            Sa.data(B, null),
            Sa
        }
        ,
        this.option = function(b, d) {
            if (void 0 !== c[b]) {
                if (void 0 === d)
                    return c[b];
                c[b] = d
            } else
                a.error("Option " + b + " does not exist on jQuery.swipe.options");
            return null
        }
    }
    var d = "left"
      , e = "right"
      , f = "up"
      , g = "down"
      , h = "in"
      , i = "out"
      , j = "none"
      , k = "auto"
      , l = "swipe"
      , m = "pinch"
      , n = "tap"
      , o = "doubletap"
      , p = "longtap"
      , q = "horizontal"
      , r = "vertical"
      , s = "all"
      , t = 10
      , u = "start"
      , v = "move"
      , w = "end"
      , x = "cancel"
      , y = "ontouchstart"in window
      , z = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled
      , A = window.navigator.pointerEnabled || window.navigator.msPointerEnabled
      , B = "TouchSwipe"
      , C = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe"
    };
    a.fn.swipe = function(c) {
        var d = a(this)
          , e = d.data(B);
        if (e && "string" == typeof c) {
            if (e[c])
                return e[c].apply(this, Array.prototype.slice.call(arguments, 1));
            a.error("Method " + c + " does not exist on jQuery.swipe")
        } else if (!(e || "object" != typeof c && c))
            return b.apply(this, arguments);
        return d
    }
    ,
    a.fn.swipe.defaults = C,
    a.fn.swipe.phases = {
        PHASE_START: u,
        PHASE_MOVE: v,
        PHASE_END: w,
        PHASE_CANCEL: x
    },
    a.fn.swipe.directions = {
        LEFT: d,
        RIGHT: e,
        UP: f,
        DOWN: g,
        IN: h,
        OUT: i
    },
    a.fn.swipe.pageScroll = {
        NONE: j,
        HORIZONTAL: q,
        VERTICAL: r,
        AUTO: k
    },
    a.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: s
    }
}),
!function(a) {
    a.flexslider = function(b, c) {
        var d = a(b);
        d.vars = a.extend({}, a.flexslider.defaults, c);
        var e, f = d.vars.namespace, g = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, h = ("ontouchstart"in window || g || window.DocumentTouch && document instanceof DocumentTouch) && d.vars.touch, i = "click touchend MSPointerUp keyup", j = "", k = "vertical" === d.vars.direction, l = d.vars.reverse, m = d.vars.itemWidth > 0, n = "fade" === d.vars.animation, o = "" !== d.vars.asNavFor, p = {}, q = !0;
        a.data(b, "flexslider", d),
        p = {
            init: function() {
                d.animating = !1,
                d.currentSlide = parseInt(d.vars.startAt ? d.vars.startAt : 0, 10),
                isNaN(d.currentSlide) && (d.currentSlide = 0),
                d.animatingTo = d.currentSlide,
                d.atEnd = 0 === d.currentSlide || d.currentSlide === d.last,
                d.containerSelector = d.vars.selector.substr(0, d.vars.selector.search(" ")),
                d.slides = a(d.vars.selector, d),
                d.container = a(d.containerSelector, d),
                d.count = d.slides.length,
                d.syncExists = a(d.vars.sync).length > 0,
                "slide" === d.vars.animation && (d.vars.animation = "swing"),
                d.prop = k ? "top" : "marginLeft",
                d.args = {},
                d.manualPause = !1,
                d.stopped = !1,
                d.started = !1,
                d.startTimeout = null,
                d.transitions = !d.vars.video && !n && d.vars.useCSS && function() {
                    var a = document.createElement("div")
                      , b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var c in b)
                        if (void 0 !== a.style[b[c]])
                            return d.pfx = b[c].replace("Perspective", "").toLowerCase(),
                            d.prop = "-" + d.pfx + "-transform",
                            !0;
                    return !1
                }(),
                d.ensureAnimationEnd = "",
                "" !== d.vars.controlsContainer && (d.controlsContainer = a(d.vars.controlsContainer).length > 0 && a(d.vars.controlsContainer)),
                "" !== d.vars.manualControls && (d.manualControls = a(d.vars.manualControls).length > 0 && a(d.vars.manualControls)),
                "" !== d.vars.customDirectionNav && (d.customDirectionNav = 2 === a(d.vars.customDirectionNav).length && a(d.vars.customDirectionNav)),
                d.vars.randomize && (d.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }),
                d.container.empty().append(d.slides)),
                d.doMath(),
                d.setup("init"),
                d.vars.controlNav && p.controlNav.setup(),
                d.vars.directionNav && p.directionNav.setup(),
                d.vars.keyboard && (1 === a(d.containerSelector).length || d.vars.multipleKeyboard) && a(document).bind("keyup", function(a) {
                    var b = a.keyCode;
                    if (!d.animating && (39 === b || 37 === b)) {
                        var c = 39 === b ? d.getTarget("next") : 37 === b && d.getTarget("prev");
                        d.flexAnimate(c, d.vars.pauseOnAction)
                    }
                }),
                d.vars.mousewheel && d.bind("mousewheel", function(a, b, c, e) {
                    a.preventDefault();
                    var f = d.getTarget(0 > b ? "next" : "prev");
                    d.flexAnimate(f, d.vars.pauseOnAction)
                }),
                d.vars.pausePlay && p.pausePlay.setup(),
                d.vars.slideshow && d.vars.pauseInvisible && p.pauseInvisible.init(),
                d.vars.slideshow && (d.vars.pauseOnHover && d.hover(function() {
                    d.manualPlay || d.manualPause || d.pause()
                }, function() {
                    d.manualPause || d.manualPlay || d.stopped || d.play()
                }),
                d.vars.pauseInvisible && p.pauseInvisible.isHidden() || (d.vars.initDelay > 0 ? d.startTimeout = setTimeout(d.play, d.vars.initDelay) : d.play())),
                o && p.asNav.setup(),
                h && d.vars.touch && p.touch(),
                (!n || n && d.vars.smoothHeight) && a(window).bind("resize orientationchange focus", p.resize),
                d.find("img").attr("draggable", "false"),
                setTimeout(function() {
                    d.vars.start(d)
                }, 200)
            },
            asNav: {
                setup: function() {
                    d.asNav = !0,
                    d.animatingTo = Math.floor(d.currentSlide / d.move),
                    d.currentItem = d.currentSlide,
                    d.slides.removeClass(f + "active-slide").eq(d.currentItem).addClass(f + "active-slide"),
                    g ? (b._slider = d,
                    d.slides.each(function() {
                        var b = this;
                        b._gesture = new MSGesture,
                        b._gesture.target = b,
                        b.addEventListener("MSPointerDown", function(a) {
                            a.preventDefault(),
                            a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
                        }, !1),
                        b.addEventListener("MSGestureTap", function(b) {
                            b.preventDefault();
                            var c = a(this)
                              , e = c.index();
                            a(d.vars.asNavFor).data("flexslider").animating || c.hasClass("active") || (d.direction = d.currentItem < e ? "next" : "prev",
                            d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : d.slides.on(i, function(b) {
                        b.preventDefault();
                        var c = a(this)
                          , e = c.index()
                          , g = c.offset().left - a(d).scrollLeft();
                        0 >= g && c.hasClass(f + "active-slide") ? d.flexAnimate(d.getTarget("prev"), !0) : a(d.vars.asNavFor).data("flexslider").animating || c.hasClass(f + "active-slide") || (d.direction = d.currentItem < e ? "next" : "prev",
                        d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    d.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var b, c, e = "thumbnails" === d.vars.controlNav ? "control-thumbs" : "control-paging", g = 1;
                    if (d.controlNavScaffold = a('<ol class="' + f + "control-nav " + f + e + '"></ol>'),
                    d.pagingCount > 1)
                        for (var h = 0; h < d.pagingCount; h++) {
                            if (c = d.slides.eq(h),
                            b = "thumbnails" === d.vars.controlNav ? '<img src="' + c.attr("data-thumb") + '"/>' : "<a>" + g + "</a>",
                            "thumbnails" === d.vars.controlNav && !0 === d.vars.thumbCaptions) {
                                var k = c.attr("data-thumbcaption");
                                "" !== k && void 0 !== k && (b += '<span class="' + f + 'caption">' + k + "</span>")
                            }
                            d.controlNavScaffold.append("<li>" + b + "</li>"),
                            g++
                        }
                    d.controlsContainer ? a(d.controlsContainer).append(d.controlNavScaffold) : d.append(d.controlNavScaffold),
                    p.controlNav.set(),
                    p.controlNav.active(),
                    d.controlNavScaffold.delegate("a, img", i, function(b) {
                        if (b.preventDefault(),
                        "" === j || j === b.type) {
                            var c = a(this)
                              , e = d.controlNav.index(c);
                            c.hasClass(f + "active") || (d.direction = e > d.currentSlide ? "next" : "prev",
                            d.flexAnimate(e, d.vars.pauseOnAction))
                        }
                        "" === j && (j = b.type),
                        p.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    d.controlNav = d.manualControls,
                    p.controlNav.active(),
                    d.controlNav.bind(i, function(b) {
                        if (b.preventDefault(),
                        "" === j || j === b.type) {
                            var c = a(this)
                              , e = d.controlNav.index(c);
                            c.hasClass(f + "active") || (d.direction = e > d.currentSlide ? "next" : "prev",
                            d.flexAnimate(e, d.vars.pauseOnAction))
                        }
                        "" === j && (j = b.type),
                        p.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var b = "thumbnails" === d.vars.controlNav ? "img" : "a";
                    d.controlNav = a("." + f + "control-nav li " + b, d.controlsContainer ? d.controlsContainer : d)
                },
                active: function() {
                    d.controlNav.removeClass(f + "active").eq(d.animatingTo).addClass(f + "active")
                },
                update: function(b, c) {
                    d.pagingCount > 1 && "add" === b ? d.controlNavScaffold.append(a("<li><a>" + d.count + "</a></li>")) : 1 === d.pagingCount ? d.controlNavScaffold.find("li").remove() : d.controlNav.eq(c).closest("li").remove(),
                    p.controlNav.set(),
                    d.pagingCount > 1 && d.pagingCount !== d.controlNav.length ? d.update(c, b) : p.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var b = a('<ul class="' + f + 'direction-nav"><li class="' + f + 'nav-prev"><a class="' + f + 'prev" href="#">' + d.vars.prevText + '</a></li><li class="' + f + 'nav-next"><a class="' + f + 'next" href="#">' + d.vars.nextText + "</a></li></ul>");
                    d.customDirectionNav ? d.directionNav = d.customDirectionNav : d.controlsContainer ? (a(d.controlsContainer).append(b),
                    d.directionNav = a("." + f + "direction-nav li a", d.controlsContainer)) : (d.append(b),
                    d.directionNav = a("." + f + "direction-nav li a", d)),
                    p.directionNav.update(),
                    d.directionNav.bind(i, function(b) {
                        b.preventDefault();
                        var c;
                        ("" === j || j === b.type) && (c = d.getTarget(a(this).hasClass(f + "next") ? "next" : "prev"),
                        d.flexAnimate(c, d.vars.pauseOnAction)),
                        "" === j && (j = b.type),
                        p.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var a = f + "disabled";
                    1 === d.pagingCount ? d.directionNav.addClass(a).attr("tabindex", "-1") : d.vars.animationLoop ? d.directionNav.removeClass(a).removeAttr("tabindex") : 0 === d.animatingTo ? d.directionNav.removeClass(a).filter("." + f + "prev").addClass(a).attr("tabindex", "-1") : d.animatingTo === d.last ? d.directionNav.removeClass(a).filter("." + f + "next").addClass(a).attr("tabindex", "-1") : d.directionNav.removeClass(a).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var b = a('<div class="' + f + 'pauseplay"><a></a></div>');
                    d.controlsContainer ? (d.controlsContainer.append(b),
                    d.pausePlay = a("." + f + "pauseplay a", d.controlsContainer)) : (d.append(b),
                    d.pausePlay = a("." + f + "pauseplay a", d)),
                    p.pausePlay.update(d.vars.slideshow ? f + "pause" : f + "play"),
                    d.pausePlay.bind(i, function(b) {
                        b.preventDefault(),
                        ("" === j || j === b.type) && (a(this).hasClass(f + "pause") ? (d.manualPause = !0,
                        d.manualPlay = !1,
                        d.pause()) : (d.manualPause = !1,
                        d.manualPlay = !0,
                        d.play())),
                        "" === j && (j = b.type),
                        p.setToClearWatchedEvent()
                    })
                },
                update: function(a) {
                    "play" === a ? d.pausePlay.removeClass(f + "pause").addClass(f + "play").html(d.vars.playText) : d.pausePlay.removeClass(f + "play").addClass(f + "pause").html(d.vars.pauseText)
                }
            },
            touch: function() {
                function a(a) {
                    a.stopPropagation(),
                    d.animating ? a.preventDefault() : (d.pause(),
                    b._gesture.addPointer(a.pointerId),
                    w = 0,
                    j = k ? d.h : d.w,
                    p = Number(new Date),
                    i = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * j : (d.currentSlide + d.cloneOffset) * j)
                }
                function c(a) {
                    a.stopPropagation();
                    var c = a.target._slider;
                    if (c) {
                        var d = -a.translationX
                          , e = -a.translationY;
                        return w += k ? e : d,
                        o = w,
                        t = k ? Math.abs(w) < Math.abs(-d) : Math.abs(w) < Math.abs(-e),
                        a.detail === a.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                            b._gesture.stop()
                        }) : void ((!t || Number(new Date) - p > 500) && (a.preventDefault(),
                        !n && c.transitions && (c.vars.animationLoop || (o = w / (0 === c.currentSlide && 0 > w || c.currentSlide === c.last && w > 0 ? Math.abs(w) / j + 2 : 1)),
                        c.setProps(i + o, "setTouch"))))
                    }
                }
                function e(a) {
                    a.stopPropagation();
                    var b = a.target._slider;
                    if (b) {
                        if (b.animatingTo === b.currentSlide && !t && null !== o) {
                            var c = l ? -o : o
                              , d = b.getTarget(c > 0 ? "next" : "prev");
                            b.canAdvance(d) && (Number(new Date) - p < 550 && Math.abs(c) > 50 || Math.abs(c) > j / 2) ? b.flexAnimate(d, b.vars.pauseOnAction) : n || b.flexAnimate(b.currentSlide, b.vars.pauseOnAction, !0)
                        }
                        f = null,
                        h = null,
                        o = null,
                        i = null,
                        w = 0
                    }
                }
                var f, h, i, j, o, p, q, r, s, t = !1, u = 0, v = 0, w = 0;
                g ? (b.style.msTouchAction = "none",
                b._gesture = new MSGesture,
                b._gesture.target = b,
                b.addEventListener("MSPointerDown", a, !1),
                b._slider = d,
                b.addEventListener("MSGestureChange", c, !1),
                b.addEventListener("MSGestureEnd", e, !1)) : (q = function(a) {
                    d.animating ? a.preventDefault() : (window.navigator.msPointerEnabled || 1 === a.touches.length) && (d.pause(),
                    j = k ? d.h : d.w,
                    p = Number(new Date),
                    u = a.touches[0].pageX,
                    v = a.touches[0].pageY,
                    i = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * j : (d.currentSlide + d.cloneOffset) * j,
                    f = k ? v : u,
                    h = k ? u : v,
                    b.addEventListener("touchmove", r, !1),
                    b.addEventListener("touchend", s, !1))
                }
                ,
                r = function(a) {
                    u = a.touches[0].pageX,
                    v = a.touches[0].pageY,
                    o = k ? f - v : f - u,
                    t = k ? Math.abs(o) < Math.abs(u - h) : Math.abs(o) < Math.abs(v - h);
                    var b = 500;
                    (!t || Number(new Date) - p > b) && (a.preventDefault(),
                    !n && d.transitions && (d.vars.animationLoop || (o /= 0 === d.currentSlide && 0 > o || d.currentSlide === d.last && o > 0 ? Math.abs(o) / j + 2 : 1),
                    d.setProps(i + o, "setTouch")))
                }
                ,
                s = function(a) {
                    if (b.removeEventListener("touchmove", r, !1),
                    d.animatingTo === d.currentSlide && !t && null !== o) {
                        var c = l ? -o : o
                          , e = d.getTarget(c > 0 ? "next" : "prev");
                        d.canAdvance(e) && (Number(new Date) - p < 550 && Math.abs(c) > 50 || Math.abs(c) > j / 2) ? d.flexAnimate(e, d.vars.pauseOnAction) : n || d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0)
                    }
                    b.removeEventListener("touchend", s, !1),
                    f = null,
                    h = null,
                    o = null,
                    i = null
                }
                ,
                b.addEventListener("touchstart", q, !1))
            },
            resize: function() {
                !d.animating && d.is(":visible") && (m || d.doMath(),
                n ? p.smoothHeight() : m ? (d.slides.width(d.computedW),
                d.update(d.pagingCount),
                d.setProps()) : k ? (d.viewport.height(d.h),
                d.setProps(d.h, "setTotal")) : (d.vars.smoothHeight && p.smoothHeight(),
                d.newSlides.width(d.computedW),
                d.setProps(d.computedW, "setTotal")))
            },
            smoothHeight: function(a) {
                if (!k || n) {
                    var b = n ? d : d.viewport;
                    a ? b.animate({
                        height: d.slides.eq(d.animatingTo).height()
                    }, a) : b.height(d.slides.eq(d.animatingTo).height())
                }
            },
            sync: function(b) {
                var c = a(d.vars.sync).data("flexslider")
                  , e = d.animatingTo;
                switch (b) {
                case "animate":
                    c.flexAnimate(e, d.vars.pauseOnAction, !1, !0);
                    break;
                case "play":
                    c.playing || c.asNav || c.play();
                    break;
                case "pause":
                    c.pause()
                }
            },
            uniqueID: function(b) {
                return b.filter("[id]").add(b.find("[id]")).each(function() {
                    var b = a(this);
                    b.attr("id", b.attr("id") + "_clone")
                }),
                b
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var a = p.pauseInvisible.getHiddenProp();
                    if (a) {
                        var b = a.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(b, function() {
                            p.pauseInvisible.isHidden() ? d.startTimeout ? clearTimeout(d.startTimeout) : d.pause() : d.started ? d.play() : d.vars.initDelay > 0 ? setTimeout(d.play, d.vars.initDelay) : d.play()
                        })
                    }
                },
                isHidden: function() {
                    var a = p.pauseInvisible.getHiddenProp();
                    return !!a && document[a]
                },
                getHiddenProp: function() {
                    var a = ["webkit", "moz", "ms", "o"];
                    if ("hidden"in document)
                        return "hidden";
                    for (var b = 0; b < a.length; b++)
                        if (a[b] + "Hidden"in document)
                            return a[b] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(e),
                e = setTimeout(function() {
                    j = ""
                }, 3e3)
            }
        },
        d.flexAnimate = function(b, c, e, g, i) {
            if (d.vars.animationLoop || b === d.currentSlide || (d.direction = b > d.currentSlide ? "next" : "prev"),
            o && 1 === d.pagingCount && (d.direction = d.currentItem < b ? "next" : "prev"),
            !d.animating && (d.canAdvance(b, i) || e) && d.is(":visible")) {
                if (o && g) {
                    var j = a(d.vars.asNavFor).data("flexslider");
                    if (d.atEnd = 0 === b || b === d.count - 1,
                    j.flexAnimate(b, !0, !1, !0, i),
                    d.direction = d.currentItem < b ? "next" : "prev",
                    j.direction = d.direction,
                    Math.ceil((b + 1) / d.visible) - 1 === d.currentSlide || 0 === b)
                        return d.currentItem = b,
                        d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"),
                        !1;
                    d.currentItem = b,
                    d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"),
                    b = Math.floor(b / d.visible)
                }
                if (d.animating = !0,
                d.animatingTo = b,
                c && d.pause(),
                d.vars.before(d),
                d.syncExists && !i && p.sync("animate"),
                d.vars.controlNav && p.controlNav.active(),
                m || d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"),
                d.atEnd = 0 === b || b === d.last,
                d.vars.directionNav && p.directionNav.update(),
                b === d.last && (d.vars.end(d),
                d.vars.animationLoop || d.pause()),
                n)
                    h ? (d.slides.eq(d.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }),
                    d.slides.eq(b).css({
                        opacity: 1,
                        zIndex: 2
                    }),
                    d.wrapup(t)) : (d.slides.eq(d.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, d.vars.animationSpeed, d.vars.easing),
                    d.slides.eq(b).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, d.vars.animationSpeed, d.vars.easing, d.wrapup));
                else {
                    var q, r, s, t = k ? d.slides.filter(":first").height() : d.computedW;
                    m ? (q = d.vars.itemMargin,
                    s = (d.itemW + q) * d.move * d.animatingTo,
                    r = s > d.limit && 1 !== d.visible ? d.limit : s) : r = 0 === d.currentSlide && b === d.count - 1 && d.vars.animationLoop && "next" !== d.direction ? l ? (d.count + d.cloneOffset) * t : 0 : d.currentSlide === d.last && 0 === b && d.vars.animationLoop && "prev" !== d.direction ? l ? 0 : (d.count + 1) * t : l ? (d.count - 1 - b + d.cloneOffset) * t : (b + d.cloneOffset) * t,
                    d.setProps(r, "", d.vars.animationSpeed),
                    d.transitions ? (d.vars.animationLoop && d.atEnd || (d.animating = !1,
                    d.currentSlide = d.animatingTo),
                    d.container.unbind("webkitTransitionEnd transitionend"),
                    d.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(d.ensureAnimationEnd),
                        d.wrapup(t)
                    }),
                    clearTimeout(d.ensureAnimationEnd),
                    d.ensureAnimationEnd = setTimeout(function() {
                        d.wrapup(t)
                    }, d.vars.animationSpeed + 100)) : d.container.animate(d.args, d.vars.animationSpeed, d.vars.easing, function() {
                        d.wrapup(t)
                    })
                }
                d.vars.smoothHeight && p.smoothHeight(d.vars.animationSpeed)
            }
        }
        ,
        d.wrapup = function(a) {
            n || m || (0 === d.currentSlide && d.animatingTo === d.last && d.vars.animationLoop ? d.setProps(a, "jumpEnd") : d.currentSlide === d.last && 0 === d.animatingTo && d.vars.animationLoop && d.setProps(a, "jumpStart")),
            d.animating = !1,
            d.currentSlide = d.animatingTo,
            d.vars.after(d)
        }
        ,
        d.animateSlides = function() {
            !d.animating && q && d.flexAnimate(d.getTarget("next"))
        }
        ,
        d.pause = function() {
            clearInterval(d.animatedSlides),
            d.animatedSlides = null,
            d.playing = !1,
            d.vars.pausePlay && p.pausePlay.update("play"),
            d.syncExists && p.sync("pause")
        }
        ,
        d.play = function() {
            d.playing && clearInterval(d.animatedSlides),
            d.animatedSlides = d.animatedSlides || setInterval(d.animateSlides, d.vars.slideshowSpeed),
            d.started = d.playing = !0,
            d.vars.pausePlay && p.pausePlay.update("pause"),
            d.syncExists && p.sync("play")
        }
        ,
        d.stop = function() {
            d.pause(),
            d.stopped = !0
        }
        ,
        d.canAdvance = function(a, b) {
            var c = o ? d.pagingCount - 1 : d.last;
            return !!b || (!(!o || d.currentItem !== d.count - 1 || 0 !== a || "prev" !== d.direction) || (!o || 0 !== d.currentItem || a !== d.pagingCount - 1 || "next" === d.direction) && (!(a === d.currentSlide && !o) && (!!d.vars.animationLoop || (!d.atEnd || 0 !== d.currentSlide || a !== c || "next" === d.direction) && (!d.atEnd || d.currentSlide !== c || 0 !== a || "next" !== d.direction))))
        }
        ,
        d.getTarget = function(a) {
            return d.direction = a,
            "next" === a ? d.currentSlide === d.last ? 0 : d.currentSlide + 1 : 0 === d.currentSlide ? d.last : d.currentSlide - 1
        }
        ,
        d.setProps = function(a, b, c) {
            var e = function() {
                var c = a ? a : (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo
                  , e = function() {
                    if (m)
                        return "setTouch" === b ? a : l && d.animatingTo === d.last ? 0 : l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : d.animatingTo === d.last ? d.limit : c;
                    switch (b) {
                    case "setTotal":
                        return l ? (d.count - 1 - d.currentSlide + d.cloneOffset) * a : (d.currentSlide + d.cloneOffset) * a;
                    case "setTouch":
                        return l ? a : a;
                    case "jumpEnd":
                        return l ? a : d.count * a;
                    case "jumpStart":
                        return l ? d.count * a : a;
                    default:
                        return a
                    }
                }();
                return -1 * e + "px"
            }();
            d.transitions && (e = k ? "translate3d(0," + e + ",0)" : "translate3d(" + e + ",0,0)",
            c = void 0 !== c ? c / 1e3 + "s" : "0s",
            d.container.css("-" + d.pfx + "-transition-duration", c),
            d.container.css("transition-duration", c)),
            d.args[d.prop] = e,
            (d.transitions || void 0 === c) && d.container.css(d.args),
            d.container.css("transform", e)
        }
        ,
        d.setup = function(b) {
            if (n)
                d.slides.css({
                    width: "100%",
                    float: "left",
                    marginRight: "-100%",
                    position: "relative"
                }),
                "init" === b && (h ? d.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + d.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(d.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == d.vars.fadeFirstSlide ? d.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(d.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : d.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(d.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, d.vars.animationSpeed, d.vars.easing)),
                d.vars.smoothHeight && p.smoothHeight();
            else {
                var c, e;
                "init" === b && (d.viewport = a('<div class="' + f + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(d).append(d.container),
                d.cloneCount = 0,
                d.cloneOffset = 0,
                l && (e = a.makeArray(d.slides).reverse(),
                d.slides = a(e),
                d.container.empty().append(d.slides))),
                d.vars.animationLoop && !m && (d.cloneCount = 2,
                d.cloneOffset = 1,
                "init" !== b && d.container.find(".clone").remove(),
                d.container.append(p.uniqueID(d.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(p.uniqueID(d.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))),
                d.newSlides = a(d.vars.selector, d),
                c = l ? d.count - 1 - d.currentSlide + d.cloneOffset : d.currentSlide + d.cloneOffset,
                k && !m ? (d.container.height(200 * (d.count + d.cloneCount) + "%").css("position", "absolute").width("100%"),
                setTimeout(function() {
                    d.newSlides.css({
                        display: "block"
                    }),
                    d.doMath(),
                    d.viewport.height(d.h),
                    d.setProps(c * d.h, "init")
                }, "init" === b ? 100 : 0)) : (d.container.width(200 * (d.count + d.cloneCount) + "%"),
                d.setProps(c * d.computedW, "init"),
                setTimeout(function() {
                    d.doMath(),
                    d.newSlides.css({
                        width: d.computedW,
                        float: "left",
                        display: "block"
                    }),
                    d.vars.smoothHeight && p.smoothHeight()
                }, "init" === b ? 100 : 0))
            }
            m || d.slides.removeClass(f + "active-slide").eq(d.currentSlide).addClass(f + "active-slide"),
            d.vars.init(d)
        }
        ,
        d.doMath = function() {
            var a = d.slides.first()
              , b = d.vars.itemMargin
              , c = d.vars.minItems
              , e = d.vars.maxItems;
            d.w = void 0 === d.viewport ? d.width() : d.viewport.width(),
            d.h = a.height(),
            d.boxPadding = a.outerWidth() - a.width(),
            m ? (d.itemT = d.vars.itemWidth + b,
            d.minW = c ? c * d.itemT : d.w,
            d.maxW = e ? e * d.itemT - b : d.w,
            d.itemW = d.minW > d.w ? (d.w - b * (c - 1)) / c : d.maxW < d.w ? (d.w - b * (e - 1)) / e : d.vars.itemWidth > d.w ? d.w : d.vars.itemWidth,
            d.visible = Math.floor(d.w / d.itemW),
            d.move = d.vars.move > 0 && d.vars.move < d.visible ? d.vars.move : d.visible,
            d.pagingCount = Math.ceil((d.count - d.visible) / d.move + 1),
            d.last = d.pagingCount - 1,
            d.limit = 1 === d.pagingCount ? 0 : d.vars.itemWidth > d.w ? d.itemW * (d.count - 1) + b * (d.count - 1) : (d.itemW + b) * d.count - d.w - b) : (d.itemW = d.w,
            d.pagingCount = d.count,
            d.last = d.count - 1),
            d.computedW = d.itemW - d.boxPadding
        }
        ,
        d.update = function(a, b) {
            d.doMath(),
            m || (a < d.currentSlide ? d.currentSlide += 1 : a <= d.currentSlide && 0 !== a && (d.currentSlide -= 1),
            d.animatingTo = d.currentSlide),
            d.vars.controlNav && !d.manualControls && ("add" === b && !m || d.pagingCount > d.controlNav.length ? p.controlNav.update("add") : ("remove" === b && !m || d.pagingCount < d.controlNav.length) && (m && d.currentSlide > d.last && (d.currentSlide -= 1,
            d.animatingTo -= 1),
            p.controlNav.update("remove", d.last))),
            d.vars.directionNav && p.directionNav.update()
        }
        ,
        d.addSlide = function(b, c) {
            var e = a(b);
            d.count += 1,
            d.last = d.count - 1,
            k && l ? void 0 !== c ? d.slides.eq(d.count - c).after(e) : d.container.prepend(e) : void 0 !== c ? d.slides.eq(c).before(e) : d.container.append(e),
            d.update(c, "add"),
            d.slides = a(d.vars.selector + ":not(.clone)", d),
            d.setup(),
            d.vars.added(d)
        }
        ,
        d.removeSlide = function(b) {
            var c = isNaN(b) ? d.slides.index(a(b)) : b;
            d.count -= 1,
            d.last = d.count - 1,
            isNaN(b) ? a(b, d.slides).remove() : k && l ? d.slides.eq(d.last).remove() : d.slides.eq(b).remove(),
            d.doMath(),
            d.update(c, "remove"),
            d.slides = a(d.vars.selector + ":not(.clone)", d),
            d.setup(),
            d.vars.removed(d)
        }
        ,
        p.init()
    }
    ,
    a(window).blur(function(a) {
        focused = !1
    }).focus(function(a) {
        focused = !0
    }),
    a.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    },
    a.fn.flexslider = function(b) {
        if (void 0 === b && (b = {}),
        "object" == typeof b)
            return this.each(function() {
                var c = a(this)
                  , d = b.selector ? b.selector : ".slides > li"
                  , e = c.find(d);
                1 === e.length && b.allowOneSlide === !0 || 0 === e.length ? (e.fadeIn(400),
                b.start && b.start(c)) : void 0 === c.data("flexslider") && new a.flexslider(this,b)
            });
        var c = a(this).data("flexslider");
        switch (b) {
        case "play":
            c.play();
            break;
        case "pause":
            c.pause();
            break;
        case "stop":
            c.stop();
            break;
        case "next":
            c.flexAnimate(c.getTarget("next"), !0);
            break;
        case "prev":
        case "previous":
            c.flexAnimate(c.getTarget("prev"), !0);
            break;
        default:
            "number" == typeof b && c.flexAnimate(b, !0)
        }
    }
}(jQuery),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a, b) {
    function c(a) {
        function b(a) {
            d ? (c(),
            M(b),
            e = !0,
            d = !1) : e = !1
        }
        var c = a
          , d = !1
          , e = !1;
        this.kick = function(a) {
            d = !0,
            e || b()
        }
        ,
        this.end = function(a) {
            var b = c;
            a && (e ? (c = d ? function() {
                b(),
                a()
            }
            : a,
            d = !0) : a())
        }
    }
    function d() {
        return !0
    }
    function e() {
        return !1
    }
    function f(a) {
        a.preventDefault()
    }
    function g(a) {
        N[a.target.tagName.toLowerCase()] || a.preventDefault()
    }
    function h(a) {
        return 1 === a.which && !a.ctrlKey && !a.altKey
    }
    function i(a, b) {
        var c, d;
        if (a.identifiedTouch)
            return a.identifiedTouch(b);
        for (c = -1,
        d = a.length; ++c < d; )
            if (a[c].identifier === b)
                return a[c]
    }
    function j(a, b) {
        var c = i(a.changedTouches, b.identifier);
        if (c && (c.pageX !== b.pageX || c.pageY !== b.pageY))
            return c
    }
    function k(a) {
        var b;
        h(a) && (b = {
            target: a.target,
            startX: a.pageX,
            startY: a.pageY,
            timeStamp: a.timeStamp
        },
        J(document, O.move, l, b),
        J(document, O.cancel, m, b))
    }
    function l(a) {
        var b = a.data;
        s(a, b, a, n)
    }
    function m(a) {
        n()
    }
    function n() {
        K(document, O.move, l),
        K(document, O.cancel, m)
    }
    function o(a) {
        var b, c;
        N[a.target.tagName.toLowerCase()] || (b = a.changedTouches[0],
        c = {
            target: b.target,
            startX: b.pageX,
            startY: b.pageY,
            timeStamp: a.timeStamp,
            identifier: b.identifier
        },
        J(document, P.move + "." + b.identifier, p, c),
        J(document, P.cancel + "." + b.identifier, q, c))
    }
    function p(a) {
        var b = a.data
          , c = j(a, b);
        c && s(a, b, c, r)
    }
    function q(a) {
        var b = a.data
          , c = i(a.changedTouches, b.identifier);
        c && r(b.identifier)
    }
    function r(a) {
        K(document, "." + a, p),
        K(document, "." + a, q)
    }
    function s(a, b, c, d) {
        var e = c.pageX - b.startX
          , f = c.pageY - b.startY;
        e * e + f * f < I * I || v(a, b, c, e, f, d)
    }
    function t() {
        return this._handled = d,
        !1
    }
    function u(a) {
        a._handled()
    }
    function v(a, b, c, d, e, f) {
        var g, h;
        b.target;
        g = a.targetTouches,
        h = a.timeStamp - b.timeStamp,
        b.type = "movestart",
        b.distX = d,
        b.distY = e,
        b.deltaX = d,
        b.deltaY = e,
        b.pageX = c.pageX,
        b.pageY = c.pageY,
        b.velocityX = d / h,
        b.velocityY = e / h,
        b.targetTouches = g,
        b.finger = g ? g.length : 1,
        b._handled = t,
        b._preventTouchmoveDefault = function() {
            a.preventDefault()
        }
        ,
        L(b.target, b),
        f(b.identifier)
    }
    function w(a) {
        var b = a.data.timer;
        a.data.touch = a,
        a.data.timeStamp = a.timeStamp,
        b.kick()
    }
    function x(a) {
        var b = a.data.event
          , c = a.data.timer;
        y(),
        D(b, c, function() {
            setTimeout(function() {
                K(b.target, "click", e)
            }, 0)
        })
    }
    function y(a) {
        K(document, O.move, w),
        K(document, O.end, x)
    }
    function z(a) {
        var b = a.data.event
          , c = a.data.timer
          , d = j(a, b);
        d && (a.preventDefault(),
        b.targetTouches = a.targetTouches,
        a.data.touch = d,
        a.data.timeStamp = a.timeStamp,
        c.kick())
    }
    function A(a) {
        var b = a.data.event
          , c = a.data.timer
          , d = i(a.changedTouches, b.identifier);
        d && (B(b),
        D(b, c))
    }
    function B(a) {
        K(document, "." + a.identifier, z),
        K(document, "." + a.identifier, A)
    }
    function C(a, b, c, d) {
        var e = c - a.timeStamp;
        a.type = "move",
        a.distX = b.pageX - a.startX,
        a.distY = b.pageY - a.startY,
        a.deltaX = b.pageX - a.pageX,
        a.deltaY = b.pageY - a.pageY,
        a.velocityX = .3 * a.velocityX + .7 * a.deltaX / e,
        a.velocityY = .3 * a.velocityY + .7 * a.deltaY / e,
        a.pageX = b.pageX,
        a.pageY = b.pageY
    }
    function D(a, b, c) {
        b.end(function() {
            return a.type = "moveend",
            L(a.target, a),
            c && c()
        })
    }
    function E(a, b, c) {
        return J(this, "movestart.move", u),
        !0
    }
    function F(a) {
        return K(this, "dragstart drag", f),
        K(this, "mousedown touchstart", g),
        K(this, "movestart", u),
        !0
    }
    function G(a) {
        "move" !== a.namespace && "moveend" !== a.namespace && (J(this, "dragstart." + a.guid + " drag." + a.guid, f, b, a.selector),
        J(this, "mousedown." + a.guid, g, b, a.selector))
    }
    function H(a) {
        "move" !== a.namespace && "moveend" !== a.namespace && (K(this, "dragstart." + a.guid + " drag." + a.guid),
        K(this, "mousedown." + a.guid))
    }
    var I = 6
      , J = a.event.add
      , K = a.event.remove
      , L = function(b, c, d) {
        a.event.trigger(c, d, b)
    }
      , M = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a, b) {
            return window.setTimeout(function() {
                a()
            }, 25)
        }
    }()
      , N = {
        textarea: !0,
        input: !0,
        select: !0,
        button: !0
    }
      , O = {
        move: "mousemove",
        cancel: "mouseup dragstart",
        end: "mouseup"
    }
      , P = {
        move: "touchmove",
        cancel: "touchend",
        end: "touchend"
    };
    a.event.special.movestart = {
        setup: E,
        teardown: F,
        add: G,
        remove: H,
        _default: function(a) {
            function d(b) {
                C(f, g.touch, g.timeStamp),
                L(a.target, f)
            }
            var f, g;
            a._handled() && (f = {
                target: a.target,
                startX: a.startX,
                startY: a.startY,
                pageX: a.pageX,
                pageY: a.pageY,
                distX: a.distX,
                distY: a.distY,
                deltaX: a.deltaX,
                deltaY: a.deltaY,
                velocityX: a.velocityX,
                velocityY: a.velocityY,
                timeStamp: a.timeStamp,
                identifier: a.identifier,
                targetTouches: a.targetTouches,
                finger: a.finger
            },
            g = {
                event: f,
                timer: new c(d),
                touch: b,
                timeStamp: b
            },
            a.identifier === b ? (J(a.target, "click", e),
            J(document, O.move, w, g),
            J(document, O.end, x, g)) : (a._preventTouchmoveDefault(),
            J(document, P.move + "." + a.identifier, z, g),
            J(document, P.end + "." + a.identifier, A, g)))
        }
    },
    a.event.special.move = {
        setup: function() {
            J(this, "movestart.move", a.noop)
        },
        teardown: function() {
            K(this, "movestart.move", a.noop)
        }
    },
    a.event.special.moveend = {
        setup: function() {
            J(this, "movestart.moveend", a.noop)
        },
        teardown: function() {
            K(this, "movestart.moveend", a.noop)
        }
    },
    J(document, "mousedown.move", k),
    J(document, "touchstart.move", o),
    "function" == typeof Array.prototype.indexOf && !function(a, b) {
        for (var c = ["changedTouches", "targetTouches"], d = c.length; d--; )
            a.event.props.indexOf(c[d]) === -1 && a.event.props.push(c[d])
    }(a)
}),
function(a) {
    a.fn.twentytwenty = function(b) {
        var b = a.extend({
            default_offset_pct: .5,
            orientation: "horizontal"
        }, b);
        return this.each(function() {
            var c = b.default_offset_pct
              , d = a(this)
              , e = b.orientation
              , f = "vertical" === e ? "down" : "left"
              , g = "vertical" === e ? "up" : "right";
            d.wrap("<div class='twentytwenty-wrapper twentytwenty-" + e + "'></div>"),
            d.append("<div class='twentytwenty-overlay'></div>");
            var h = d.find("img:first")
              , i = d.find("img:last");
            d.append("<div class='twentytwenty-handle'></div>");
            var j = d.find(".twentytwenty-handle");
            j.append("<span class='twentytwenty-" + f + "-arrow'></span>"),
            j.append("<span class='twentytwenty-" + g + "-arrow'></span>"),
            d.addClass("twentytwenty-container"),
            h.addClass("twentytwenty-before"),
            i.addClass("twentytwenty-after");
            var k = d.find(".twentytwenty-overlay");
            k.append("<div class='twentytwenty-before-label'></div>"),
            k.append("<div class='twentytwenty-after-label'></div>");
            var l = function(a) {
                var b = h.width()
                  , c = h.height();
                return {
                    w: b + "px",
                    h: c + "px",
                    cw: a * b + "px",
                    ch: a * c + "px"
                }
            }
              , m = function(a) {
                "vertical" === e ? h.css("clip", "rect(0," + a.w + "," + a.ch + ",0)") : h.css("clip", "rect(0," + a.cw + "," + a.h + ",0)"),
                d.css("height", a.h)
            }
              , n = function(a) {
                var b = l(a);
                j.css("vertical" === e ? "top" : "left", "vertical" === e ? b.ch : b.cw),
                m(b)
            };
            a(window).on("resize.twentytwenty", function(a) {
                n(c)
            });
            var o = 0
              , p = 0
              , q = 0
              , r = 0;
            j.on("movestart", function(a) {
                (a.distX > a.distY && a.distX < -a.distY || a.distX < a.distY && a.distX > -a.distY) && "vertical" !== e ? a.preventDefault() : (a.distX < a.distY && a.distX < -a.distY || a.distX > a.distY && a.distX > -a.distY) && "vertical" === e && a.preventDefault(),
                d.addClass("active"),
                o = d.offset().left,
                p = d.offset().top,
                q = h.width(),
                r = h.height()
            }),
            j.on("moveend", function(a) {
                d.removeClass("active")
            }),
            j.on("move", function(a) {
                d.hasClass("active") && (c = "vertical" === e ? (a.pageY - p) / r : (a.pageX - o) / q,
                c < 0 && (c = 0),
                c > 1 && (c = 1),
                n(c))
            }),
            d.find("img").on("mousedown", function(a) {
                a.preventDefault()
            }),
            a(window).trigger("resize.twentytwenty")
        })
    }
}(jQuery);
;/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

/*!
 * Isotope PACKAGED v3.0.5
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

!function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h)
                    return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0))
                    return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }),
            void 0 !== n ? n : t
        }
        function h(t, e) {
            t.each(function(t, o) {
                var n = a.data(o, i);
                n ? (n.option(e),
                n._init()) : (n = new s(o,e),
                a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery,
        a && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t),
            this
        }
        ,
        o(a))
    }
    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var n = Array.prototype.slice
      , s = t.console
      , r = "undefined" == typeof s ? function() {}
    : function(t) {
        s.error(t)
    }
    ;
    return o(e || t.jQuery),
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , o = i[t] = i[t] || {};
            return o[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n]
                  , r = o && o[s];
                r && (this.off(t, s),
                delete o[s]),
                s.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t)
          , i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }
    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
        e
    }
    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            s.isBoxSizeOuter = r = 200 == t(n.width),
            i.removeChild(e)
        }
    }
    function s(e) {
        if (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l]
                  , c = s[f]
                  , m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight
              , y = a.paddingTop + a.paddingBottom
              , g = a.marginLeft + a.marginRight
              , v = a.marginTop + a.marginBottom
              , _ = a.borderLeftWidth + a.borderRightWidth
              , I = a.borderTopWidth + a.borderBottomWidth
              , z = d && r
              , x = t(s.width);
            x !== !1 && (a.width = x + (z ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (z ? 0 : y + I)),
            a.innerWidth = a.width - (p + _),
            a.innerHeight = a.height - (y + I),
            a.outerWidth = a.width + g,
            a.outerHeight = a.height + v,
            a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
    }
    , u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i]
              , n = o + "MatchesSelector";
            if (t[n])
                return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    i.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ,
    i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t))
            e = t;
        else if (t && "object" == typeof t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }
    ,
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }
    ,
    i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            e(t, i))
                return t
    }
    ,
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!o)
                    return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                    n.push(i[s])
            }
        }),
        n
    }
    ,
    i.debounceMethod = function(t, e, i) {
        var o = t.prototype[e]
          , n = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[n];
            t && clearTimeout(t);
            var e = arguments
              , s = this;
            this[n] = setTimeout(function() {
                o.apply(s, e),
                delete s[n]
            }, i || 100)
        }
    }
    ,
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var o = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var s = i.toDashed(n)
              , r = "data-" + s
              , a = document.querySelectorAll("[" + r + "]")
              , u = document.querySelectorAll(".js-" + s)
              , h = i.makeArray(a).concat(i.makeArray(u))
              , d = r + "-options"
              , l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void (o && o.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t,i);
                l && l.data(t, n, u)
            })
        })
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        for (var e in t)
            return !1;
        return e = null,
        !0
    }
    function o(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function n(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style
      , r = "string" == typeof s.transition ? "transition" : "WebkitTransition"
      , a = "string" == typeof s.transform ? "transform" : "WebkitTransform"
      , u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[r]
      , h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay"
    }
      , d = o.prototype = Object.create(t.prototype);
    d.constructor = o,
    d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    d.getSize = function() {
        this.size = e(this.element)
    }
    ,
    d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }
    ,
    d.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , o = t[e ? "left" : "right"]
          , n = t[i ? "top" : "bottom"]
          , s = this.layout.size
          , r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10)
          , a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
        r = isNaN(r) ? 0 : r,
        a = isNaN(a) ? 0 : a,
        r -= e ? s.paddingLeft : s.paddingRight,
        a -= i ? s.paddingTop : s.paddingBottom,
        this.position.x = r,
        this.position.y = a
    }
    ,
    d.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , i = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop")
          , n = i ? "paddingLeft" : "paddingRight"
          , s = i ? "left" : "right"
          , r = i ? "right" : "left"
          , a = this.position.x + t[n];
        e[s] = this.getXValue(a),
        e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom"
          , h = o ? "top" : "bottom"
          , d = o ? "bottom" : "top"
          , l = this.position.y + t[u];
        e[h] = this.getYValue(l),
        e[d] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x
          , o = this.position.y
          , n = parseInt(t, 10)
          , s = parseInt(e, 10)
          , r = n === this.position.x && s === this.position.y;
        if (this.setPosition(t, e),
        r && !this.isTransitioning)
            return void this.layoutPosition();
        var a = t - i
          , u = e - o
          , h = {};
        h.transform = this.getTranslate(a, u),
        this.transition({
            to: h,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop");
        return t = i ? t : -t,
        e = o ? e : -e,
        "translate3d(" + t + "px, " + e + "px, 0)"
    }
    ,
    d.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    d.moveTo = d._transitionTo,
    d.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10),
        this.position.y = parseInt(e, 10)
    }
    ,
    d._nonTransition = function(t) {
        this.css(t.to),
        t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
            e.ingProperties[i] = !0,
            t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to),
        this.css(t.to),
        this.isTransitioning = !0
    }
    ;
    var l = "opacity," + n(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(u, this, !1)
        }
    }
    ,
    d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    d.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn
              , o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o],
            i(e.ingProperties) && this.disableTransition(),
            o in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[o]),
            o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this),
                delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    d.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(u, this, !1),
        this.isTransitioning = !1
    }
    ,
    d._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    }
    ;
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c)
    }
    ,
    d.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    d.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        void this.hide()) : void this.removeElem()
    }
    ,
    d.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }
    ,
    d.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
    "use strict";
    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i)
            return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        h && (this.$element = h(this.element)),
        this.options = o.extend({}, this.constructor.defaults),
        this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n,
        f[n] = this,
        this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }
    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e
    }
    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/)
          , i = e && e[1]
          , o = e && e[2];
        if (!i.length)
            return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }
    var u = t.console
      , h = t.jQuery
      , d = function() {}
      , l = 0
      , f = {};
    s.namespace = "outlayer",
    s.Item = n,
    s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    o.extend(c, e.prototype),
    c.option = function(t) {
        o.extend(this.options, t)
    }
    ,
    c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    c._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }
    ,
    c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n]
              , r = new i(s,this);
            o.push(r)
        }
        return o
    }
    ,
    c._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }
    ,
    c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }
    ,
    c.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    c._init = c.layout,
    c._resetLayout = function() {
        this.getSize()
    }
    ,
    c.getSize = function() {
        this.size = i(this.element)
    }
    ,
    c._getMeasurement = function(t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n),
        this[t] = o ? i(o)[e] : n) : this[t] = 0
    }
    ,
    c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }
    ,
    c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t,
                o.isInstant = e || t.isLayoutInstant,
                i.push(o)
            }, this),
            this._processLayoutQueue(i)
        }
    }
    ,
    c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    c._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }
    ,
    c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
        this.stagger)
    }
    ,
    c._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger),
        t.moveTo(e, i))
    }
    ,
    c._postLayout = function() {
        this.resizeContainer()
    }
    ,
    c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1))
        }
    }
    ,
    c._getContainerSize = d,
    c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    c._emitCompleteOnItems = function(t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }
        function o() {
            r++,
            r == s && i()
        }
        var n = this
          , s = e.length;
        if (!e || !s)
            return void i();
        var r = 0;
        e.forEach(function(e) {
            e.once(t, o)
        })
    }
    ,
    c.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o),
        h)
            if (this.$element = this.$element || h(this.element),
            e) {
                var n = h.Event(e);
                n.type = t,
                this.$element.trigger(n, i)
            } else
                this.$element.trigger(t, i)
    }
    ,
    c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    c.stamp = function(t) {
        t = this._find(t),
        t && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    c.unstamp = function(t) {
        t = this._find(t),
        t && t.forEach(function(t) {
            o.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    }
    ,
    c._find = function(t) {
        if (t)
            return "string" == typeof t && (t = this.element.querySelectorAll(t)),
            t = o.makeArray(t)
    }
    ,
    c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    c._manageStamp = d,
    c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , o = this._boundingRect
          , n = i(t)
          , s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom
        };
        return s
    }
    ,
    c.handleEvent = o.handleEvent,
    c.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    c.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    c.onresize = function() {
        this.resize()
    }
    ,
    o.debounceMethod(s, "onresize", 100),
    c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    c.needsResizeLayout = function() {
        var t = i(this.element)
          , e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }
    ,
    c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    }
    ,
    c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.reveal()
            })
        }
    }
    ,
    c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.hide()
            })
        }
    }
    ,
    c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    }
    ,
    c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this),
        e
    }
    ,
    c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach(function(t) {
            t.remove(),
            o.removeFrom(this.items, t)
        }, this)
    }
    ,
    c.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function(t) {
            t.destroy()
        }),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
        delete this.element.outlayerGUID,
        h && h.removeData(this.element, this.constructor.namespace)
    }
    ,
    s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }
    ,
    s.create = function(t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults),
        o.extend(i.defaults, e),
        i.compatOptions = o.extend({}, s.compatOptions),
        i.namespace = t,
        i.data = s.data,
        i.Item = r(n),
        o.htmlInit(i, t),
        h && h.bridget && h.bridget(t, i),
        i
    }
    ;
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = n,
    s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype)
      , o = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++,
        o.call(this),
        this.sortData = {}
    }
    ,
    i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var t = this.layout.options.getSortData
              , e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    }
    ;
    var n = i.destroy;
    return i.destroy = function() {
        n.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        this.isotope = t,
        t && (this.options = t.options[this.namespace],
        this.element = t.element,
        this.items = t.filteredItems,
        this.size = t.size)
    }
    var o = i.prototype
      , n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function(t) {
        o[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }),
    o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element)
          , i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }
    ,
    o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    o.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    o.getSegmentSize = function(t, e) {
        var i = t + e
          , o = "outer" + e;
        if (this._getMeasurement(i, o),
        !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }
    ,
    o.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }
    ,
    o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    o.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    i.modes = {},
    i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = Object.create(o),
        n.prototype.constructor = n,
        e && (n.options = e),
        n.prototype.namespace = t,
        i.modes[t] = n,
        n
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var t = 0; t < this.cols; t++)
            this.colYs.push(0);
        this.maxY = 0,
        this.horizontalColIndex = 0
    }
    ,
    o.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var t = this.items[0]
              , i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter
          , n = this.containerWidth + this.gutter
          , s = n / o
          , r = o - n % o
          , a = r && r < 1 ? "round" : "floor";
        s = Math[a](s),
        this.cols = Math.max(s, 1)
    }
    ,
    o.getContainerWidth = function() {
        var t = this._getOption("fitWidth")
          , i = t ? this.element.parentNode : this.element
          , o = e(i);
        this.containerWidth = o && o.innerWidth
    }
    ,
    o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth
          , i = e && e < 1 ? "round" : "ceil"
          , o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
            x: this.columnWidth * s.col,
            y: s.y
        }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++)
            this.colYs[h] = a;
        return r
    }
    ,
    o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t)
          , i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }
    ,
    o._getTopColGroup = function(t) {
        if (t < 2)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
            e[o] = this._getColGroupY(o, t);
        return e
    }
    ,
    o._getColGroupY = function(t, e) {
        if (e < 2)
            return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }
    ,
    o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols
          , o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex,
        {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }
    ,
    o._manageStamp = function(t) {
        var i = e(t)
          , o = this._getElementOffset(t)
          , n = this._getOption("originLeft")
          , s = n ? o.left : o.right
          , r = s + i.outerWidth
          , a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1,
        u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++)
            this.colYs[l] = Math.max(d, this.colYs[l])
    }
    ,
    o._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    o._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    o.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t != this.containerWidth
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry")
      , o = i.prototype
      , n = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (var s in e.prototype)
        n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        r.call(this)
    }
    ;
    var a = o._getOption;
    return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows")
      , i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter
          , i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0,
        this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
        this.x += e,
        o
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0
    })
      , i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
          , i = this.y;
        return this.y += t.size.outerHeight,
        {
            x: e,
            y: i
        }
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
    function a(t, e) {
        return function(i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n]
                  , r = i.sortData[s]
                  , a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e
                      , h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery
      , h = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
      , d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    d.Item = s,
    d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        e.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"];
        for (var t in r.modes)
            this._initLayoutMode(t)
    }
    ,
    l.reloadItems = function() {
        this.itemGUID = 0,
        e.prototype.reloadItems.call(this)
    }
    ,
    l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t),
        t
    }
    ,
    l._initLayoutMode = function(t) {
        var e = r.modes[t]
          , i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i,
        this.modes[t] = new e(this)
    }
    ,
    l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }
    ,
    l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, t),
        this._isLayoutInited = !0
    }
    ,
    l.arrange = function(t) {
        this.option(t),
        this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches,
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
        this._sort(),
        this._layout()
    }
    ,
    l._init = l.arrange,
    l._hideReveal = function(t) {
        this.reveal(t.needReveal),
        this.hide(t.needHide)
    }
    ,
    l._getIsInstant = function() {
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e,
        e
    }
    ,
    l._bindArrangeComplete = function() {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function() {
            e = !0,
            t()
        }),
        this.once("hideComplete", function() {
            i = !0,
            t()
        }),
        this.once("revealComplete", function() {
            o = !0,
            t()
        })
    }
    ,
    l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a),
                u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }
    ,
    l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t)
        }
        : "function" == typeof t ? function(e) {
            return t(e.element)
        }
        : function(e) {
            return o(e.element, t)
        }
    }
    ,
    l.updateSortData = function(t) {
        var e;
        t ? (t = n.makeArray(t),
        e = this.getItems(t)) : e = this.items,
        this._getSorters(),
        this._updateItemsSortData(e)
    }
    ,
    l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }
    ,
    l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    }
    ;
    var f = function() {
        function t(t) {
            if ("string" != typeof t)
                return t;
            var i = h(t).split(" ")
              , o = i[0]
              , n = o.match(/^\[(.+)\]$/)
              , s = n && n[1]
              , r = e(s, o)
              , a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            }
            : function(t) {
                return t && r(t)
            }
        }
        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            }
            : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    },
    l._sort = function() {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }
    ,
    l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e])
                return !1;
        return !0
    }
    ,
    l._mode = function() {
        var t = this.options.layoutMode
          , e = this.modes[t];
        if (!e)
            throw new Error("No layout mode: " + t);
        return e.options = this.options[t],
        e
    }
    ,
    l._resetLayout = function() {
        e.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }
    ,
    l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }
    ,
    l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }
    ,
    l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(),
            this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems),
            this.filteredItems = i.concat(this.filteredItems),
            this.items = e.concat(this.items)
        }
    }
    ,
    l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide),
        this.reveal(e.matches),
        this.layoutItems(e.matches, !0),
        e.matches
    }
    ,
    l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++)
                o = e[i],
                this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++)
                e[i].isLayoutInstant = !0;
            for (this.arrange(),
            i = 0; i < n; i++)
                delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    }
    ;
    var c = l.remove;
    return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }
    ,
    l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i,
        o
    }
    ,
    l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }
    ,
    d
});
;/*!
 * Packery layout mode PACKAGED v2.0.0
 * sub-classes Packery
 */

!function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof module && module.exports ? module.exports = b() : (a.Packery = a.Packery || {},
    a.Packery.Rect = b())
}(window, function() {
    function a(b) {
        for (var c in a.defaults)
            this[c] = a.defaults[c];
        for (c in b)
            this[c] = b[c]
    }
    a.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    var b = a.prototype;
    return b.contains = function(a) {
        var b = a.width || 0
          , c = a.height || 0;
        return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c
    }
    ,
    b.overlaps = function(a) {
        var b = this.x + this.width
          , c = this.y + this.height
          , d = a.x + a.width
          , e = a.y + a.height;
        return this.x < d && b > a.x && this.y < e && c > a.y
    }
    ,
    b.getMaximalFreeRects = function(b) {
        if (!this.overlaps(b))
            return !1;
        var c, d = [], e = this.x + this.width, f = this.y + this.height, g = b.x + b.width, h = b.y + b.height;
        return this.y < b.y && (c = new a({
            x: this.x,
            y: this.y,
            width: this.width,
            height: b.y - this.y
        }),
        d.push(c)),
        e > g && (c = new a({
            x: g,
            y: this.y,
            width: e - g,
            height: this.height
        }),
        d.push(c)),
        f > h && (c = new a({
            x: this.x,
            y: h,
            width: this.width,
            height: f - h
        }),
        d.push(c)),
        this.x < b.x && (c = new a({
            x: this.x,
            y: this.y,
            width: b.x - this.x,
            height: this.height
        }),
        d.push(c)),
        d
    }
    ,
    b.canFit = function(a) {
        return this.width >= a.width && this.height >= a.height
    }
    ,
    a
}),
function(a, b) {
    if ("function" == typeof define && define.amd)
        define("packery/js/packer", ["./rect"], b);
    else if ("object" == typeof module && module.exports)
        module.exports = b(require("./rect"));
    else {
        var c = a.Packery = a.Packery || {};
        c.Packer = b(c.Rect)
    }
}(window, function(a) {
    function b(a, b, c) {
        this.width = a || 0,
        this.height = b || 0,
        this.sortDirection = c || "downwardLeftToRight",
        this.reset()
    }
    var c = b.prototype;
    c.reset = function() {
        this.spaces = [];
        var b = new a({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.spaces.push(b),
        this.sorter = d[this.sortDirection] || d.downwardLeftToRight
    }
    ,
    c.pack = function(a) {
        for (var b = 0; b < this.spaces.length; b++) {
            var c = this.spaces[b];
            if (c.canFit(a)) {
                this.placeInSpace(a, c);
                break
            }
        }
    }
    ,
    c.columnPack = function(a) {
        for (var b = 0; b < this.spaces.length; b++) {
            var c = this.spaces[b]
              , d = c.x <= a.x && c.x + c.width >= a.x + a.width && c.height >= a.height - .01;
            if (d) {
                a.y = c.y,
                this.placed(a);
                break
            }
        }
    }
    ,
    c.rowPack = function(a) {
        for (var b = 0; b < this.spaces.length; b++) {
            var c = this.spaces[b]
              , d = c.y <= a.y && c.y + c.height >= a.y + a.height && c.width >= a.width - .01;
            if (d) {
                a.x = c.x,
                this.placed(a);
                break
            }
        }
    }
    ,
    c.placeInSpace = function(a, b) {
        a.x = b.x,
        a.y = b.y,
        this.placed(a)
    }
    ,
    c.placed = function(a) {
        for (var b = [], c = 0; c < this.spaces.length; c++) {
            var d = this.spaces[c]
              , e = d.getMaximalFreeRects(a);
            e ? b.push.apply(b, e) : b.push(d)
        }
        this.spaces = b,
        this.mergeSortSpaces()
    }
    ,
    c.mergeSortSpaces = function() {
        b.mergeRects(this.spaces),
        this.spaces.sort(this.sorter)
    }
    ,
    c.addSpace = function(a) {
        this.spaces.push(a),
        this.mergeSortSpaces()
    }
    ,
    b.mergeRects = function(a) {
        var b = 0
          , c = a[b];
        a: for (; c; ) {
            for (var d = 0, e = a[b + d]; e; ) {
                if (e == c)
                    d++;
                else {
                    if (e.contains(c)) {
                        a.splice(b, 1),
                        c = a[b];
                        continue a
                    }
                    c.contains(e) ? a.splice(b + d, 1) : d++
                }
                e = a[b + d]
            }
            b++,
            c = a[b]
        }
        return a
    }
    ;
    var d = {
        downwardLeftToRight: function(a, b) {
            return a.y - b.y || a.x - b.x
        },
        rightwardTopToBottom: function(a, b) {
            return a.x - b.x || a.y - b.y
        }
    };
    return b
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/item", ["outlayer/outlayer", "./rect"], b) : "object" == typeof module && module.exports ? module.exports = b(require("outlayer"), require("./rect")) : a.Packery.Item = b(a.Outlayer, a.Packery.Rect)
}(window, function(a, b) {
    var c = document.documentElement.style
      , d = "string" == typeof c.transform ? "transform" : "WebkitTransform"
      , e = function() {
        a.Item.apply(this, arguments)
    }
      , f = e.prototype = Object.create(a.Item.prototype)
      , g = f._create;
    f._create = function() {
        g.call(this),
        this.rect = new b
    }
    ;
    var h = f.moveTo;
    return f.moveTo = function(a, b) {
        var c = Math.abs(this.position.x - a)
          , d = Math.abs(this.position.y - b)
          , e = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > c && 1 > d;
        return e ? void this.goTo(a, b) : void h.apply(this, arguments)
    }
    ,
    f.enablePlacing = function() {
        this.removeTransitionStyles(),
        this.isTransitioning && d && (this.element.style[d] = "none"),
        this.isTransitioning = !1,
        this.getSize(),
        this.layout._setRectSize(this.element, this.rect),
        this.isPlacing = !0
    }
    ,
    f.disablePlacing = function() {
        this.isPlacing = !1
    }
    ,
    f.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.layout.packer.addSpace(this.rect),
        this.emitEvent("remove", [this])
    }
    ,
    f.showDropPlaceholder = function() {
        var a = this.dropPlaceholder;
        a || (a = this.dropPlaceholder = document.createElement("div"),
        a.className = "packery-drop-placeholder",
        a.style.position = "absolute"),
        a.style.width = this.size.width + "px",
        a.style.height = this.size.height + "px",
        this.positionDropPlaceholder(),
        this.layout.element.appendChild(a)
    }
    ,
    f.positionDropPlaceholder = function() {
        this.dropPlaceholder.style[d] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
    }
    ,
    f.hideDropPlaceholder = function() {
        this.layout.element.removeChild(this.dropPlaceholder)
    }
    ,
    e
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/packery", ["get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b) : "object" == typeof module && module.exports ? module.exports = b(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : a.Packery = b(a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item)
}(window, function(a, b, c, d, e) {
    function f(a, b) {
        return a.position.y - b.position.y || a.position.x - b.position.x
    }
    function g(a, b) {
        return a.position.x - b.position.x || a.position.y - b.position.y
    }
    function h(a, b) {
        var c = b.x - a.x
          , d = b.y - a.y;
        return Math.sqrt(c * c + d * d)
    }
    c.prototype.canFit = function(a) {
        return this.width >= a.width - 1 && this.height >= a.height - 1
    }
    ;
    var i = b.create("packery");
    i.Item = e;
    var j = i.prototype;
    j._create = function() {
        b.prototype._create.call(this),
        this.packer = new d,
        this.shiftPacker = new d,
        this.isEnabled = !0,
        this.dragItemCount = 0;
        var a = this;
        this.handleDraggabilly = {
            dragStart: function() {
                a.itemDragStart(this.element)
            },
            dragMove: function() {
                a.itemDragMove(this.element, this.position.x, this.position.y)
            },
            dragEnd: function() {
                a.itemDragEnd(this.element)
            }
        },
        this.handleUIDraggable = {
            start: function(b, c) {
                c && a.itemDragStart(b.currentTarget)
            },
            drag: function(b, c) {
                c && a.itemDragMove(b.currentTarget, c.position.left, c.position.top)
            },
            stop: function(b, c) {
                c && a.itemDragEnd(b.currentTarget)
            }
        }
    }
    ,
    j._resetLayout = function() {
        this.getSize(),
        this._getMeasurements();
        var a, b, c;
        this._getOption("horizontal") ? (a = 1 / 0,
        b = this.size.innerHeight + this.gutter,
        c = "rightwardTopToBottom") : (a = this.size.innerWidth + this.gutter,
        b = 1 / 0,
        c = "downwardLeftToRight"),
        this.packer.width = this.shiftPacker.width = a,
        this.packer.height = this.shiftPacker.height = b,
        this.packer.sortDirection = this.shiftPacker.sortDirection = c,
        this.packer.reset(),
        this.maxY = 0,
        this.maxX = 0
    }
    ,
    j._getMeasurements = function() {
        this._getMeasurement("columnWidth", "width"),
        this._getMeasurement("rowHeight", "height"),
        this._getMeasurement("gutter", "width")
    }
    ,
    j._getItemLayoutPosition = function(a) {
        if (this._setRectSize(a.element, a.rect),
        this.isShifting || this.dragItemCount > 0) {
            var b = this._getPackMethod();
            this.packer[b](a.rect)
        } else
            this.packer.pack(a.rect);
        return this._setMaxXY(a.rect),
        a.rect
    }
    ,
    j.shiftLayout = function() {
        this.isShifting = !0,
        this.layout(),
        delete this.isShifting
    }
    ,
    j._getPackMethod = function() {
        return this._getOption("horizontal") ? "rowPack" : "columnPack"
    }
    ,
    j._setMaxXY = function(a) {
        this.maxX = Math.max(a.x + a.width, this.maxX),
        this.maxY = Math.max(a.y + a.height, this.maxY)
    }
    ,
    j._setRectSize = function(b, c) {
        var d = a(b)
          , e = d.outerWidth
          , f = d.outerHeight;
        (e || f) && (e = this._applyGridGutter(e, this.columnWidth),
        f = this._applyGridGutter(f, this.rowHeight)),
        c.width = Math.min(e, this.packer.width),
        c.height = Math.min(f, this.packer.height)
    }
    ,
    j._applyGridGutter = function(a, b) {
        if (!b)
            return a + this.gutter;
        b += this.gutter;
        var c = a % b
          , d = c && 1 > c ? "round" : "ceil";
        return a = Math[d](a / b) * b
    }
    ,
    j._getContainerSize = function() {
        return this._getOption("horizontal") ? {
            width: this.maxX - this.gutter
        } : {
            height: this.maxY - this.gutter
        }
    }
    ,
    j._manageStamp = function(a) {
        var b, d = this.getItem(a);
        if (d && d.isPlacing)
            b = d.rect;
        else {
            var e = this._getElementOffset(a);
            b = new c({
                x: this._getOption("originLeft") ? e.left : e.right,
                y: this._getOption("originTop") ? e.top : e.bottom
            })
        }
        this._setRectSize(a, b),
        this.packer.placed(b),
        this._setMaxXY(b)
    }
    ,
    j.sortItemsByPosition = function() {
        var a = this._getOption("horizontal") ? g : f;
        this.items.sort(a)
    }
    ,
    j.fit = function(a, b, c) {
        var d = this.getItem(a);
        d && (this.stamp(d.element),
        d.enablePlacing(),
        this.updateShiftTargets(d),
        b = void 0 === b ? d.rect.x : b,
        c = void 0 === c ? d.rect.y : c,
        this.shift(d, b, c),
        this._bindFitEvents(d),
        d.moveTo(d.rect.x, d.rect.y),
        this.shiftLayout(),
        this.unstamp(d.element),
        this.sortItemsByPosition(),
        d.disablePlacing())
    }
    ,
    j._bindFitEvents = function(a) {
        function b() {
            d++,
            2 == d && c.dispatchEvent("fitComplete", null, [a])
        }
        var c = this
          , d = 0;
        a.once("layout", b),
        this.once("layoutComplete", b)
    }
    ,
    j.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
    }
    ,
    j.needsResizeLayout = function() {
        var b = a(this.element)
          , c = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return b[c] != this.size[c]
    }
    ,
    j.resizeShiftPercentLayout = function() {
        var b = this._getItemsForLayout(this.items)
          , c = this._getOption("horizontal")
          , d = c ? "y" : "x"
          , e = c ? "height" : "width"
          , f = c ? "rowHeight" : "columnWidth"
          , g = c ? "innerHeight" : "innerWidth"
          , h = this[f];
        if (h = h && h + this.gutter) {
            this._getMeasurements();
            var i = this[f] + this.gutter;
            b.forEach(function(a) {
                var b = Math.round(a.rect[d] / h);
                a.rect[d] = b * i
            })
        } else {
            var j = a(this.element)[g] + this.gutter
              , k = this.packer[e];
            b.forEach(function(a) {
                a.rect[d] = a.rect[d] / k * j
            })
        }
        this.shiftLayout()
    }
    ,
    j.itemDragStart = function(a) {
        if (this.isEnabled) {
            this.stamp(a);
            var b = this.getItem(a);
            b && (b.enablePlacing(),
            b.showDropPlaceholder(),
            this.dragItemCount++,
            this.updateShiftTargets(b))
        }
    }
    ,
    j.updateShiftTargets = function(a) {
        this.shiftPacker.reset(),
        this._getBoundingRect();
        var b = this._getOption("originLeft")
          , d = this._getOption("originTop");
        this.stamps.forEach(function(a) {
            var e = this.getItem(a);
            if (!e || !e.isPlacing) {
                var f = this._getElementOffset(a)
                  , g = new c({
                    x: b ? f.left : f.right,
                    y: d ? f.top : f.bottom
                });
                this._setRectSize(a, g),
                this.shiftPacker.placed(g)
            }
        }, this);
        var e = this._getOption("horizontal")
          , f = e ? "rowHeight" : "columnWidth"
          , g = e ? "height" : "width";
        this.shiftTargetKeys = [],
        this.shiftTargets = [];
        var h, i = this[f];
        if (i = i && i + this.gutter) {
            var j = Math.ceil(a.rect[g] / i)
              , k = Math.floor((this.shiftPacker[g] + this.gutter) / i);
            h = (k - j) * i;
            for (var l = 0; k > l; l++)
                this._addShiftTarget(l * i, 0, h)
        } else
            h = this.shiftPacker[g] + this.gutter - a.rect[g],
            this._addShiftTarget(0, 0, h);
        var m = this._getItemsForLayout(this.items)
          , n = this._getPackMethod();
        m.forEach(function(a) {
            var b = a.rect;
            this._setRectSize(a.element, b),
            this.shiftPacker[n](b),
            this._addShiftTarget(b.x, b.y, h);
            var c = e ? b.x + b.width : b.x
              , d = e ? b.y : b.y + b.height;
            if (this._addShiftTarget(c, d, h),
            i)
                for (var f = Math.round(b[g] / i), j = 1; f > j; j++) {
                    var k = e ? c : b.x + i * j
                      , l = e ? b.y + i * j : d;
                    this._addShiftTarget(k, l, h)
                }
        }, this)
    }
    ,
    j._addShiftTarget = function(a, b, c) {
        var d = this._getOption("horizontal") ? b : a;
        if (!(0 !== d && d > c)) {
            var e = a + "," + b
              , f = -1 != this.shiftTargetKeys.indexOf(e);
            f || (this.shiftTargetKeys.push(e),
            this.shiftTargets.push({
                x: a,
                y: b
            }))
        }
    }
    ,
    j.shift = function(a, b, c) {
        var d, e = 1 / 0, f = {
            x: b,
            y: c
        };
        this.shiftTargets.forEach(function(a) {
            var b = h(a, f);
            e > b && (d = a,
            e = b)
        }),
        a.rect.x = d.x,
        a.rect.y = d.y
    }
    ;
    var k = 120;
    j.itemDragMove = function(a, b, c) {
        function d() {
            f.shift(e, b, c),
            e.positionDropPlaceholder(),
            f.layout()
        }
        var e = this.isEnabled && this.getItem(a);
        if (e) {
            b -= this.size.paddingLeft,
            c -= this.size.paddingTop;
            var f = this
              , g = new Date;
            this._itemDragTime && g - this._itemDragTime < k ? (clearTimeout(this.dragTimeout),
            this.dragTimeout = setTimeout(d, k)) : (d(),
            this._itemDragTime = g)
        }
    }
    ,
    j.itemDragEnd = function(a) {
        function b() {
            d++,
            2 == d && (c.element.classList.remove("is-positioning-post-drag"),
            c.hideDropPlaceholder(),
            e.dispatchEvent("dragItemPositioned", null, [c]))
        }
        var c = this.isEnabled && this.getItem(a);
        if (c) {
            clearTimeout(this.dragTimeout),
            c.element.classList.add("is-positioning-post-drag");
            var d = 0
              , e = this;
            c.once("layout", b),
            this.once("layoutComplete", b),
            c.moveTo(c.rect.x, c.rect.y),
            this.layout(),
            this.dragItemCount = Math.max(0, this.dragItemCount - 1),
            this.sortItemsByPosition(),
            c.disablePlacing(),
            this.unstamp(c.element)
        }
    }
    ,
    j.bindDraggabillyEvents = function(a) {
        this._bindDraggabillyEvents(a, "on")
    }
    ,
    j.unbindDraggabillyEvents = function(a) {
        this._bindDraggabillyEvents(a, "off")
    }
    ,
    j._bindDraggabillyEvents = function(a, b) {
        var c = this.handleDraggabilly;
        a[b]("dragStart", c.dragStart),
        a[b]("dragMove", c.dragMove),
        a[b]("dragEnd", c.dragEnd)
    }
    ,
    j.bindUIDraggableEvents = function(a) {
        this._bindUIDraggableEvents(a, "on")
    }
    ,
    j.unbindUIDraggableEvents = function(a) {
        this._bindUIDraggableEvents(a, "off")
    }
    ,
    j._bindUIDraggableEvents = function(a, b) {
        var c = this.handleUIDraggable;
        a[b]("dragstart", c.start)[b]("drag", c.drag)[b]("dragstop", c.stop)
    }
    ;
    var l = j.destroy;
    return j.destroy = function() {
        l.apply(this, arguments),
        this.isEnabled = !1
    }
    ,
    i.Rect = c,
    i.Packer = d,
    i
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery"], b) : "object" == typeof module && module.exports ? module.exports = b(require("isotope-layout/js/layout-mode"), require("packery")) : b(a.Isotope.LayoutMode, a.Packery)
}(window, function(a, b) {
    var c = a.create("packery")
      , d = c.prototype
      , e = {
        _getElementOffset: !0,
        _getMeasurement: !0
    };
    for (var f in b.prototype)
        e[f] || (d[f] = b.prototype[f]);
    var g = d._resetLayout;
    d._resetLayout = function() {
        this.packer = this.packer || new b.Packer,
        this.shiftPacker = this.shiftPacker || new b.Packer,
        g.apply(this, arguments)
    }
    ;
    var h = d._getItemLayoutPosition;
    d._getItemLayoutPosition = function(a) {
        return a.rect = a.rect || new b.Rect,
        h.call(this, a)
    }
    ;
    var i = d.needsResizeLayout;
    d.needsResizeLayout = function() {
        return this._getOption("horizontal") ? this.needsVerticalResizeLayout() : i.call(this)
    }
    ;
    var j = d._getOption;
    return d._getOption = function(a) {
        return "horizontal" == a ? void 0 !== this.options.isHorizontal ? this.options.isHorizontal : this.options.horizontal : j.apply(this.isotope, arguments)
    }
    ,
    c
});
