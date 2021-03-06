(()=>{
    "use strict";
    var t = {
        d: (e,n)=>{
            for (var i in n)
                t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: n[i]
                })
        }
        ,
        o: (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
        r: t=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
    }
      , e = {};
    t.r(e),
    t.d(e, {
        afterMain: ()=>w,
        afterRead: ()=>_,
        afterWrite: ()=>T,
        applyStyles: ()=>D,
        arrow: ()=>Y,
        auto: ()=>r,
        basePlacements: ()=>a,
        beforeMain: ()=>b,
        beforeRead: ()=>g,
        beforeWrite: ()=>E,
        bottom: ()=>i,
        clippingParents: ()=>u,
        computeStyles: ()=>Z,
        createPopper: ()=>kt,
        createPopperBase: ()=>Lt,
        createPopperLite: ()=>St,
        detectOverflow: ()=>mt,
        end: ()=>c,
        eventListeners: ()=>et,
        flip: ()=>gt,
        hide: ()=>bt,
        left: ()=>s,
        main: ()=>y,
        modifierPhases: ()=>C,
        offset: ()=>yt,
        placements: ()=>m,
        popper: ()=>h,
        popperGenerator: ()=>Ot,
        popperOffsets: ()=>wt,
        preventOverflow: ()=>Et,
        read: ()=>v,
        reference: ()=>f,
        right: ()=>o,
        start: ()=>l,
        top: ()=>n,
        variationPlacements: ()=>p,
        viewport: ()=>d,
        write: ()=>x
    });
    var n = "top"
      , i = "bottom"
      , o = "right"
      , s = "left"
      , r = "auto"
      , a = [n, i, o, s]
      , l = "start"
      , c = "end"
      , u = "clippingParents"
      , d = "viewport"
      , h = "popper"
      , f = "reference"
      , p = a.reduce((function(t, e) {
        return t.concat([e + "-" + l, e + "-" + c])
    }
    ), [])
      , m = [].concat(a, [r]).reduce((function(t, e) {
        return t.concat([e, e + "-" + l, e + "-" + c])
    }
    ), [])
      , g = "beforeRead"
      , v = "read"
      , _ = "afterRead"
      , b = "beforeMain"
      , y = "main"
      , w = "afterMain"
      , E = "beforeWrite"
      , x = "write"
      , T = "afterWrite"
      , C = [g, v, _, b, y, w, E, x, T];
    function A(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }
    function O(t) {
        if (null == t)
            return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }
    function L(t) {
        return t instanceof O(t).Element || t instanceof Element
    }
    function k(t) {
        return t instanceof O(t).HTMLElement || t instanceof HTMLElement
    }
    function S(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof O(t).ShadowRoot || t instanceof ShadowRoot)
    }
    const D = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var n = e.styles[t] || {}
                  , i = e.attributes[t] || {}
                  , o = e.elements[t];
                k(o) && A(o) && (Object.assign(o.style, n),
                Object.keys(i).forEach((function(t) {
                    var e = i[t];
                    !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e)
                }
                )))
            }
            ))
        },
        effect: function(t) {
            var e = t.state
              , n = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e.elements.popper.style, n.popper),
            e.styles = n,
            e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
            function() {
                Object.keys(e.elements).forEach((function(t) {
                    var i = e.elements[t]
                      , o = e.attributes[t] || {}
                      , s = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function(t, e) {
                        return t[e] = "",
                        t
                    }
                    ), {});
                    k(i) && A(i) && (Object.assign(i.style, s),
                    Object.keys(o).forEach((function(t) {
                        i.removeAttribute(t)
                    }
                    )))
                }
                ))
            }
        },
        requires: ["computeStyles"]
    };
    function N(t) {
        return t.split("-")[0]
    }
    function M(t, e) {
        void 0 === e && (e = !1);
        var n = t.getBoundingClientRect();
        return {
            width: n.width / 1,
            height: n.height / 1,
            top: n.top / 1,
            right: n.right / 1,
            bottom: n.bottom / 1,
            left: n.left / 1,
            x: n.left / 1,
            y: n.top / 1
        }
    }
    function I(t) {
        var e = M(t)
          , n = t.offsetWidth
          , i = t.offsetHeight;
        return Math.abs(e.width - n) <= 1 && (n = e.width),
        Math.abs(e.height - i) <= 1 && (i = e.height),
        {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: n,
            height: i
        }
    }
    function P(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e))
            return !0;
        if (n && S(n)) {
            var i = e;
            do {
                if (i && t.isSameNode(i))
                    return !0;
                i = i.parentNode || i.host
            } while (i)
        }
        return !1
    }
    function j(t) {
        return O(t).getComputedStyle(t)
    }
    function H(t) {
        return ["table", "td", "th"].indexOf(A(t)) >= 0
    }
    function B(t) {
        return ((L(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }
    function R(t) {
        return "html" === A(t) ? t : t.assignedSlot || t.parentNode || (S(t) ? t.host : null) || B(t)
    }
    function W(t) {
        return k(t) && "fixed" !== j(t).position ? t.offsetParent : null
    }
    function q(t) {
        for (var e = O(t), n = W(t); n && H(n) && "static" === j(n).position; )
            n = W(n);
        return n && ("html" === A(n) || "body" === A(n) && "static" === j(n).position) ? e : n || function(t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && k(t) && "fixed" === j(t).position)
                return null;
            for (var n = R(t); k(n) && ["html", "body"].indexOf(A(n)) < 0; ) {
                var i = j(n);
                if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || e && "filter" === i.willChange || e && i.filter && "none" !== i.filter)
                    return n;
                n = n.parentNode
            }
            return null
        }(t) || e
    }
    function z(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    var F = Math.max
      , $ = Math.min
      , U = Math.round;
    function V(t, e, n) {
        return F(t, $(e, n))
    }
    function K(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }
    function X(t, e) {
        return e.reduce((function(e, n) {
            return e[n] = t,
            e
        }
        ), {})
    }
    const Y = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, r = t.state, l = t.name, c = t.options, u = r.elements.arrow, d = r.modifiersData.popperOffsets, h = N(r.placement), f = z(h), p = [s, o].indexOf(h) >= 0 ? "height" : "width";
            if (u && d) {
                var m = function(t, e) {
                    return K("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : X(t, a))
                }(c.padding, r)
                  , g = I(u)
                  , v = "y" === f ? n : s
                  , _ = "y" === f ? i : o
                  , b = r.rects.reference[p] + r.rects.reference[f] - d[f] - r.rects.popper[p]
                  , y = d[f] - r.rects.reference[f]
                  , w = q(u)
                  , E = w ? "y" === f ? w.clientHeight || 0 : w.clientWidth || 0 : 0
                  , x = b / 2 - y / 2
                  , T = m[v]
                  , C = E - g[p] - m[_]
                  , A = E / 2 - g[p] / 2 + x
                  , O = V(T, A, C)
                  , L = f;
                r.modifiersData[l] = ((e = {})[L] = O,
                e.centerOffset = O - A,
                e)
            }
        },
        effect: function(t) {
            var e = t.state
              , n = t.options.element
              , i = void 0 === n ? "[data-popper-arrow]" : n;
            null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && P(e.elements.popper, i) && (e.elements.arrow = i)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };
    function Q(t) {
        return t.split("-")[1]
    }
    var G = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function J(t) {
        var e, r = t.popper, a = t.popperRect, l = t.placement, u = t.variation, d = t.offsets, h = t.position, f = t.gpuAcceleration, p = t.adaptive, m = t.roundOffsets, g = !0 === m ? function(t) {
            var e = t.x
              , n = t.y
              , i = window.devicePixelRatio || 1;
            return {
                x: U(U(e * i) / i) || 0,
                y: U(U(n * i) / i) || 0
            }
        }(d) : "function" == typeof m ? m(d) : d, v = g.x, _ = void 0 === v ? 0 : v, b = g.y, y = void 0 === b ? 0 : b, w = d.hasOwnProperty("x"), E = d.hasOwnProperty("y"), x = s, T = n, C = window;
        if (p) {
            var A = q(r)
              , L = "clientHeight"
              , k = "clientWidth";
            A === O(r) && "static" !== j(A = B(r)).position && "absolute" === h && (L = "scrollHeight",
            k = "scrollWidth"),
            A = A,
            l !== n && (l !== s && l !== o || u !== c) || (T = i,
            y -= A[L] - a.height,
            y *= f ? 1 : -1),
            l !== s && (l !== n && l !== i || u !== c) || (x = o,
            _ -= A[k] - a.width,
            _ *= f ? 1 : -1)
        }
        var S, D = Object.assign({
            position: h
        }, p && G);
        return f ? Object.assign({}, D, ((S = {})[T] = E ? "0" : "",
        S[x] = w ? "0" : "",
        S.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + _ + "px, " + y + "px)" : "translate3d(" + _ + "px, " + y + "px, 0)",
        S)) : Object.assign({}, D, ((e = {})[T] = E ? y + "px" : "",
        e[x] = w ? _ + "px" : "",
        e.transform = "",
        e))
    }
    const Z = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = n.gpuAcceleration
              , o = void 0 === i || i
              , s = n.adaptive
              , r = void 0 === s || s
              , a = n.roundOffsets
              , l = void 0 === a || a
              , c = {
                placement: N(e.placement),
                variation: Q(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: o
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, J(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))),
            null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, J(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))),
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    };
    var tt = {
        passive: !0
    };
    const et = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state
              , n = t.instance
              , i = t.options
              , o = i.scroll
              , s = void 0 === o || o
              , r = i.resize
              , a = void 0 === r || r
              , l = O(e.elements.popper)
              , c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return s && c.forEach((function(t) {
                t.addEventListener("scroll", n.update, tt)
            }
            )),
            a && l.addEventListener("resize", n.update, tt),
            function() {
                s && c.forEach((function(t) {
                    t.removeEventListener("scroll", n.update, tt)
                }
                )),
                a && l.removeEventListener("resize", n.update, tt)
            }
        },
        data: {}
    };
    var nt = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function it(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return nt[t]
        }
        ))
    }
    var ot = {
        start: "end",
        end: "start"
    };
    function st(t) {
        return t.replace(/start|end/g, (function(t) {
            return ot[t]
        }
        ))
    }
    function rt(t) {
        var e = O(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function at(t) {
        return M(B(t)).left + rt(t).scrollLeft
    }
    function lt(t) {
        var e = j(t)
          , n = e.overflow
          , i = e.overflowX
          , o = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + i)
    }
    function ct(t) {
        return ["html", "body", "#document"].indexOf(A(t)) >= 0 ? t.ownerDocument.body : k(t) && lt(t) ? t : ct(R(t))
    }
    function ut(t, e) {
        var n;
        void 0 === e && (e = []);
        var i = ct(t)
          , o = i === (null == (n = t.ownerDocument) ? void 0 : n.body)
          , s = O(i)
          , r = o ? [s].concat(s.visualViewport || [], lt(i) ? i : []) : i
          , a = e.concat(r);
        return o ? a : a.concat(ut(R(r)))
    }
    function dt(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }
    function ht(t, e) {
        return e === d ? dt(function(t) {
            var e = O(t)
              , n = B(t)
              , i = e.visualViewport
              , o = n.clientWidth
              , s = n.clientHeight
              , r = 0
              , a = 0;
            return i && (o = i.width,
            s = i.height,
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = i.offsetLeft,
            a = i.offsetTop)),
            {
                width: o,
                height: s,
                x: r + at(t),
                y: a
            }
        }(t)) : k(e) ? function(t) {
            var e = M(t);
            return e.top = e.top + t.clientTop,
            e.left = e.left + t.clientLeft,
            e.bottom = e.top + t.clientHeight,
            e.right = e.left + t.clientWidth,
            e.width = t.clientWidth,
            e.height = t.clientHeight,
            e.x = e.left,
            e.y = e.top,
            e
        }(e) : dt(function(t) {
            var e, n = B(t), i = rt(t), o = null == (e = t.ownerDocument) ? void 0 : e.body, s = F(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), r = F(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -i.scrollLeft + at(t), l = -i.scrollTop;
            return "rtl" === j(o || n).direction && (a += F(n.clientWidth, o ? o.clientWidth : 0) - s),
            {
                width: s,
                height: r,
                x: a,
                y: l
            }
        }(B(t)))
    }
    function ft(t, e, n) {
        var i = "clippingParents" === e ? function(t) {
            var e = ut(R(t))
              , n = ["absolute", "fixed"].indexOf(j(t).position) >= 0 && k(t) ? q(t) : t;
            return L(n) ? e.filter((function(t) {
                return L(t) && P(t, n) && "body" !== A(t)
            }
            )) : []
        }(t) : [].concat(e)
          , o = [].concat(i, [n])
          , s = o[0]
          , r = o.reduce((function(e, n) {
            var i = ht(t, n);
            return e.top = F(i.top, e.top),
            e.right = $(i.right, e.right),
            e.bottom = $(i.bottom, e.bottom),
            e.left = F(i.left, e.left),
            e
        }
        ), ht(t, s));
        return r.width = r.right - r.left,
        r.height = r.bottom - r.top,
        r.x = r.left,
        r.y = r.top,
        r
    }
    function pt(t) {
        var e, r = t.reference, a = t.element, u = t.placement, d = u ? N(u) : null, h = u ? Q(u) : null, f = r.x + r.width / 2 - a.width / 2, p = r.y + r.height / 2 - a.height / 2;
        switch (d) {
        case n:
            e = {
                x: f,
                y: r.y - a.height
            };
            break;
        case i:
            e = {
                x: f,
                y: r.y + r.height
            };
            break;
        case o:
            e = {
                x: r.x + r.width,
                y: p
            };
            break;
        case s:
            e = {
                x: r.x - a.width,
                y: p
            };
            break;
        default:
            e = {
                x: r.x,
                y: r.y
            }
        }
        var m = d ? z(d) : null;
        if (null != m) {
            var g = "y" === m ? "height" : "width";
            switch (h) {
            case l:
                e[m] = e[m] - (r[g] / 2 - a[g] / 2);
                break;
            case c:
                e[m] = e[m] + (r[g] / 2 - a[g] / 2)
            }
        }
        return e
    }
    function mt(t, e) {
        void 0 === e && (e = {});
        var s = e
          , r = s.placement
          , l = void 0 === r ? t.placement : r
          , c = s.boundary
          , p = void 0 === c ? u : c
          , m = s.rootBoundary
          , g = void 0 === m ? d : m
          , v = s.elementContext
          , _ = void 0 === v ? h : v
          , b = s.altBoundary
          , y = void 0 !== b && b
          , w = s.padding
          , E = void 0 === w ? 0 : w
          , x = K("number" != typeof E ? E : X(E, a))
          , T = _ === h ? f : h
          , C = t.rects.popper
          , A = t.elements[y ? T : _]
          , O = ft(L(A) ? A : A.contextElement || B(t.elements.popper), p, g)
          , k = M(t.elements.reference)
          , S = pt({
            reference: k,
            element: C,
            strategy: "absolute",
            placement: l
        })
          , D = dt(Object.assign({}, C, S))
          , N = _ === h ? D : k
          , I = {
            top: O.top - N.top + x.top,
            bottom: N.bottom - O.bottom + x.bottom,
            left: O.left - N.left + x.left,
            right: N.right - O.right + x.right
        }
          , P = t.modifiersData.offset;
        if (_ === h && P) {
            var j = P[l];
            Object.keys(I).forEach((function(t) {
                var e = [o, i].indexOf(t) >= 0 ? 1 : -1
                  , s = [n, i].indexOf(t) >= 0 ? "y" : "x";
                I[t] += j[s] * e
            }
            ))
        }
        return I
    }
    const gt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , c = t.options
              , u = t.name;
            if (!e.modifiersData[u]._skip) {
                for (var d = c.mainAxis, h = void 0 === d || d, f = c.altAxis, g = void 0 === f || f, v = c.fallbackPlacements, _ = c.padding, b = c.boundary, y = c.rootBoundary, w = c.altBoundary, E = c.flipVariations, x = void 0 === E || E, T = c.allowedAutoPlacements, C = e.options.placement, A = N(C), O = v || (A === C || !x ? [it(C)] : function(t) {
                    if (N(t) === r)
                        return [];
                    var e = it(t);
                    return [st(t), e, st(e)]
                }(C)), L = [C].concat(O).reduce((function(t, n) {
                    return t.concat(N(n) === r ? function(t, e) {
                        void 0 === e && (e = {});
                        var n = e
                          , i = n.placement
                          , o = n.boundary
                          , s = n.rootBoundary
                          , r = n.padding
                          , l = n.flipVariations
                          , c = n.allowedAutoPlacements
                          , u = void 0 === c ? m : c
                          , d = Q(i)
                          , h = d ? l ? p : p.filter((function(t) {
                            return Q(t) === d
                        }
                        )) : a
                          , f = h.filter((function(t) {
                            return u.indexOf(t) >= 0
                        }
                        ));
                        0 === f.length && (f = h);
                        var g = f.reduce((function(e, n) {
                            return e[n] = mt(t, {
                                placement: n,
                                boundary: o,
                                rootBoundary: s,
                                padding: r
                            })[N(n)],
                            e
                        }
                        ), {});
                        return Object.keys(g).sort((function(t, e) {
                            return g[t] - g[e]
                        }
                        ))
                    }(e, {
                        placement: n,
                        boundary: b,
                        rootBoundary: y,
                        padding: _,
                        flipVariations: x,
                        allowedAutoPlacements: T
                    }) : n)
                }
                ), []), k = e.rects.reference, S = e.rects.popper, D = new Map, M = !0, I = L[0], P = 0; P < L.length; P++) {
                    var j = L[P]
                      , H = N(j)
                      , B = Q(j) === l
                      , R = [n, i].indexOf(H) >= 0
                      , W = R ? "width" : "height"
                      , q = mt(e, {
                        placement: j,
                        boundary: b,
                        rootBoundary: y,
                        altBoundary: w,
                        padding: _
                    })
                      , z = R ? B ? o : s : B ? i : n;
                    k[W] > S[W] && (z = it(z));
                    var F = it(z)
                      , $ = [];
                    if (h && $.push(q[H] <= 0),
                    g && $.push(q[z] <= 0, q[F] <= 0),
                    $.every((function(t) {
                        return t
                    }
                    ))) {
                        I = j,
                        M = !1;
                        break
                    }
                    D.set(j, $)
                }
                if (M)
                    for (var U = function(t) {
                        var e = L.find((function(e) {
                            var n = D.get(e);
                            if (n)
                                return n.slice(0, t).every((function(t) {
                                    return t
                                }
                                ))
                        }
                        ));
                        if (e)
                            return I = e,
                            "break"
                    }, V = x ? 3 : 1; V > 0; V--) {
                        if ("break" === U(V))
                            break
                    }
                e.placement !== I && (e.modifiersData[u]._skip = !0,
                e.placement = I,
                e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function vt(t, e, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }),
        {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x
        }
    }
    function _t(t) {
        return [n, o, i, s].some((function(e) {
            return t[e] >= 0
        }
        ))
    }
    const bt = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(t) {
            var e = t.state
              , n = t.name
              , i = e.rects.reference
              , o = e.rects.popper
              , s = e.modifiersData.preventOverflow
              , r = mt(e, {
                elementContext: "reference"
            })
              , a = mt(e, {
                altBoundary: !0
            })
              , l = vt(r, i)
              , c = vt(a, o, s)
              , u = _t(l)
              , d = _t(c);
            e.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: u,
                hasPopperEscaped: d
            },
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": u,
                "data-popper-escaped": d
            })
        }
    };
    const yt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(t) {
            var e = t.state
              , i = t.options
              , r = t.name
              , a = i.offset
              , l = void 0 === a ? [0, 0] : a
              , c = m.reduce((function(t, i) {
                return t[i] = function(t, e, i) {
                    var r = N(t)
                      , a = [s, n].indexOf(r) >= 0 ? -1 : 1
                      , l = "function" == typeof i ? i(Object.assign({}, e, {
                        placement: t
                    })) : i
                      , c = l[0]
                      , u = l[1];
                    return c = c || 0,
                    u = (u || 0) * a,
                    [s, o].indexOf(r) >= 0 ? {
                        x: u,
                        y: c
                    } : {
                        x: c,
                        y: u
                    }
                }(i, e.rects, l),
                t
            }
            ), {})
              , u = c[e.placement]
              , d = u.x
              , h = u.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += d,
            e.modifiersData.popperOffsets.y += h),
            e.modifiersData[r] = c
        }
    };
    const wt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state
              , n = t.name;
            e.modifiersData[n] = pt({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    };
    const Et = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , r = t.options
              , a = t.name
              , c = r.mainAxis
              , u = void 0 === c || c
              , d = r.altAxis
              , h = void 0 !== d && d
              , f = r.boundary
              , p = r.rootBoundary
              , m = r.altBoundary
              , g = r.padding
              , v = r.tether
              , _ = void 0 === v || v
              , b = r.tetherOffset
              , y = void 0 === b ? 0 : b
              , w = mt(e, {
                boundary: f,
                rootBoundary: p,
                padding: g,
                altBoundary: m
            })
              , E = N(e.placement)
              , x = Q(e.placement)
              , T = !x
              , C = z(E)
              , A = "x" === C ? "y" : "x"
              , O = e.modifiersData.popperOffsets
              , L = e.rects.reference
              , k = e.rects.popper
              , S = "function" == typeof y ? y(Object.assign({}, e.rects, {
                placement: e.placement
            })) : y
              , D = {
                x: 0,
                y: 0
            };
            if (O) {
                if (u || h) {
                    var M = "y" === C ? n : s
                      , P = "y" === C ? i : o
                      , j = "y" === C ? "height" : "width"
                      , H = O[C]
                      , B = O[C] + w[M]
                      , R = O[C] - w[P]
                      , W = _ ? -k[j] / 2 : 0
                      , U = x === l ? L[j] : k[j]
                      , K = x === l ? -k[j] : -L[j]
                      , X = e.elements.arrow
                      , Y = _ && X ? I(X) : {
                        width: 0,
                        height: 0
                    }
                      , G = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                      , J = G[M]
                      , Z = G[P]
                      , tt = V(0, L[j], Y[j])
                      , et = T ? L[j] / 2 - W - tt - J - S : U - tt - J - S
                      , nt = T ? -L[j] / 2 + W + tt + Z + S : K + tt + Z + S
                      , it = e.elements.arrow && q(e.elements.arrow)
                      , ot = it ? "y" === C ? it.clientTop || 0 : it.clientLeft || 0 : 0
                      , st = e.modifiersData.offset ? e.modifiersData.offset[e.placement][C] : 0
                      , rt = O[C] + et - st - ot
                      , at = O[C] + nt - st;
                    if (u) {
                        var lt = V(_ ? $(B, rt) : B, H, _ ? F(R, at) : R);
                        O[C] = lt,
                        D[C] = lt - H
                    }
                    if (h) {
                        var ct = "x" === C ? n : s
                          , ut = "x" === C ? i : o
                          , dt = O[A]
                          , ht = dt + w[ct]
                          , ft = dt - w[ut]
                          , pt = V(_ ? $(ht, rt) : ht, dt, _ ? F(ft, at) : ft);
                        O[A] = pt,
                        D[A] = pt - dt
                    }
                }
                e.modifiersData[a] = D
            }
        },
        requiresIfExists: ["offset"]
    };
    function xt(t, e, n) {
        void 0 === n && (n = !1);
        var i, o, s = k(e), r = k(e) && function(t) {
            var e = t.getBoundingClientRect()
              , n = e.width / t.offsetWidth || 1
              , i = e.height / t.offsetHeight || 1;
            return 1 !== n || 1 !== i
        }(e), a = B(e), l = M(t, r), c = {
            scrollLeft: 0,
            scrollTop: 0
        }, u = {
            x: 0,
            y: 0
        };
        return (s || !s && !n) && (("body" !== A(e) || lt(a)) && (c = (i = e) !== O(i) && k(i) ? {
            scrollLeft: (o = i).scrollLeft,
            scrollTop: o.scrollTop
        } : rt(i)),
        k(e) ? ((u = M(e, !0)).x += e.clientLeft,
        u.y += e.clientTop) : a && (u.x = at(a))),
        {
            x: l.left + c.scrollLeft - u.x,
            y: l.top + c.scrollTop - u.y,
            width: l.width,
            height: l.height
        }
    }
    function Tt(t) {
        var e = new Map
          , n = new Set
          , i = [];
        function o(t) {
            n.add(t.name),
            [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                if (!n.has(t)) {
                    var i = e.get(t);
                    i && o(i)
                }
            }
            )),
            i.push(t)
        }
        return t.forEach((function(t) {
            e.set(t.name, t)
        }
        )),
        t.forEach((function(t) {
            n.has(t.name) || o(t)
        }
        )),
        i
    }
    var Ct = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function At() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }
        ))
    }
    function Ot(t) {
        void 0 === t && (t = {});
        var e = t
          , n = e.defaultModifiers
          , i = void 0 === n ? [] : n
          , o = e.defaultOptions
          , s = void 0 === o ? Ct : o;
        return function(t, e, n) {
            void 0 === n && (n = s);
            var o, r, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Ct, s),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }, l = [], c = !1, u = {
                state: a,
                setOptions: function(n) {
                    var o = "function" == typeof n ? n(a.options) : n;
                    d(),
                    a.options = Object.assign({}, s, a.options, o),
                    a.scrollParents = {
                        reference: L(t) ? ut(t) : t.contextElement ? ut(t.contextElement) : [],
                        popper: ut(e)
                    };
                    var r = function(t) {
                        var e = Tt(t);
                        return C.reduce((function(t, n) {
                            return t.concat(e.filter((function(t) {
                                return t.phase === n
                            }
                            )))
                        }
                        ), [])
                    }(function(t) {
                        var e = t.reduce((function(t, e) {
                            var n = t[e.name];
                            return t[e.name] = n ? Object.assign({}, n, e, {
                                options: Object.assign({}, n.options, e.options),
                                data: Object.assign({}, n.data, e.data)
                            }) : e,
                            t
                        }
                        ), {});
                        return Object.keys(e).map((function(t) {
                            return e[t]
                        }
                        ))
                    }([].concat(i, a.options.modifiers)));
                    return a.orderedModifiers = r.filter((function(t) {
                        return t.enabled
                    }
                    )),
                    a.orderedModifiers.forEach((function(t) {
                        var e = t.name
                          , n = t.options
                          , i = void 0 === n ? {} : n
                          , o = t.effect;
                        if ("function" == typeof o) {
                            var s = o({
                                state: a,
                                name: e,
                                instance: u,
                                options: i
                            })
                              , r = function() {};
                            l.push(s || r)
                        }
                    }
                    )),
                    u.update()
                },
                forceUpdate: function() {
                    if (!c) {
                        var t = a.elements
                          , e = t.reference
                          , n = t.popper;
                        if (At(e, n)) {
                            a.rects = {
                                reference: xt(e, q(n), "fixed" === a.options.strategy),
                                popper: I(n)
                            },
                            a.reset = !1,
                            a.placement = a.options.placement,
                            a.orderedModifiers.forEach((function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                            }
                            ));
                            for (var i = 0; i < a.orderedModifiers.length; i++)
                                if (!0 !== a.reset) {
                                    var o = a.orderedModifiers[i]
                                      , s = o.fn
                                      , r = o.options
                                      , l = void 0 === r ? {} : r
                                      , d = o.name;
                                    "function" == typeof s && (a = s({
                                        state: a,
                                        options: l,
                                        name: d,
                                        instance: u
                                    }) || a)
                                } else
                                    a.reset = !1,
                                    i = -1
                        }
                    }
                },
                update: (o = function() {
                    return new Promise((function(t) {
                        u.forceUpdate(),
                        t(a)
                    }
                    ))
                }
                ,
                function() {
                    return r || (r = new Promise((function(t) {
                        Promise.resolve().then((function() {
                            r = void 0,
                            t(o())
                        }
                        ))
                    }
                    ))),
                    r
                }
                ),
                destroy: function() {
                    d(),
                    c = !0
                }
            };
            if (!At(t, e))
                return u;
            function d() {
                l.forEach((function(t) {
                    return t()
                }
                )),
                l = []
            }
            return u.setOptions(n).then((function(t) {
                !c && n.onFirstUpdate && n.onFirstUpdate(t)
            }
            )),
            u
        }
    }
    var Lt = Ot()
      , kt = Ot({
        defaultModifiers: [et, wt, Z, D, yt, gt, Et, Y, bt]
    })
      , St = Ot({
        defaultModifiers: [et, wt, Z, D]
    });
    /*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
    const Dt = "transitionend"
      , Nt = t=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let n = t.getAttribute("href");
            if (!n || !n.includes("#") && !n.startsWith("."))
                return null;
            n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
            e = n && "#" !== n ? n.trim() : null
        }
        return e
    }
      , Mt = t=>{
        const e = Nt(t);
        return e && document.querySelector(e) ? e : null
    }
      , It = t=>{
        const e = Nt(t);
        return e ? document.querySelector(e) : null
    }
      , Pt = t=>{
        t.dispatchEvent(new Event(Dt))
    }
      , jt = t=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
    void 0 !== t.nodeType)
      , Ht = t=>jt(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null
      , Bt = (t,e,n)=>{
        Object.keys(n).forEach((i=>{
            const o = n[i]
              , s = e[i]
              , r = s && jt(s) ? "element" : null == (a = s) ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
            var a;
            if (!new RegExp(o).test(r))
                throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${o}".`)
        }
        ))
    }
      , Rt = t=>!(!jt(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility")
      , Wt = t=>!t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")))
      , qt = t=>{
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? qt(t.parentNode) : null
    }
      , zt = ()=>{}
      , Ft = t=>{
        t.offsetHeight
    }
      , $t = ()=>{
        const {jQuery: t} = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    }
      , Ut = []
      , Vt = ()=>"rtl" === document.documentElement.dir
      , Kt = t=>{
        var e;
        e = ()=>{
            const e = $t();
            if (e) {
                const n = t.NAME
                  , i = e.fn[n];
                e.fn[n] = t.jQueryInterface,
                e.fn[n].Constructor = t,
                e.fn[n].noConflict = ()=>(e.fn[n] = i,
                t.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? (Ut.length || document.addEventListener("DOMContentLoaded", (()=>{
            Ut.forEach((t=>t()))
        }
        )),
        Ut.push(e)) : e()
    }
      , Xt = t=>{
        "function" == typeof t && t()
    }
      , Yt = (t,e,n=!0)=>{
        if (!n)
            return void Xt(t);
        const i = (t=>{
            if (!t)
                return 0;
            let {transitionDuration: e, transitionDelay: n} = window.getComputedStyle(t);
            const i = Number.parseFloat(e)
              , o = Number.parseFloat(n);
            return i || o ? (e = e.split(",")[0],
            n = n.split(",")[0],
            1e3 * (Number.parseFloat(e) + Number.parseFloat(n))) : 0
        }
        )(e) + 5;
        let o = !1;
        const s = ({target: n})=>{
            n === e && (o = !0,
            e.removeEventListener(Dt, s),
            Xt(t))
        }
        ;
        e.addEventListener(Dt, s),
        setTimeout((()=>{
            o || Pt(e)
        }
        ), i)
    }
      , Qt = (t,e,n,i)=>{
        let o = t.indexOf(e);
        if (-1 === o)
            return t[!n && i ? t.length - 1 : 0];
        const s = t.length;
        return o += n ? 1 : -1,
        i && (o = (o + s) % s),
        t[Math.max(0, Math.min(o, s - 1))]
    }
      , Gt = /[^.]*(?=\..*)\.|.*/
      , Jt = /\..*/
      , Zt = /::\d+$/
      , te = {};
    let ee = 1;
    const ne = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , ie = /^(mouseenter|mouseleave)/i
      , oe = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function se(t, e) {
        return e && `${e}::${ee++}` || t.uidEvent || ee++
    }
    function re(t) {
        const e = se(t);
        return t.uidEvent = e,
        te[e] = te[e] || {},
        te[e]
    }
    function ae(t, e, n=null) {
        const i = Object.keys(t);
        for (let o = 0, s = i.length; o < s; o++) {
            const s = t[i[o]];
            if (s.originalHandler === e && s.delegationSelector === n)
                return s
        }
        return null
    }
    function le(t, e, n) {
        const i = "string" == typeof e
          , o = i ? n : e;
        let s = de(t);
        return oe.has(s) || (s = t),
        [i, o, s]
    }
    function ce(t, e, n, i, o) {
        if ("string" != typeof e || !t)
            return;
        if (n || (n = i,
        i = null),
        ie.test(e)) {
            const t = t=>function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                    return t.call(this, e)
            }
            ;
            i ? i = t(i) : n = t(n)
        }
        const [s,r,a] = le(e, n, i)
          , l = re(t)
          , c = l[a] || (l[a] = {})
          , u = ae(c, r, s ? n : null);
        if (u)
            return void (u.oneOff = u.oneOff && o);
        const d = se(r, e.replace(Gt, ""))
          , h = s ? function(t, e, n) {
            return function i(o) {
                const s = t.querySelectorAll(e);
                for (let {target: r} = o; r && r !== this; r = r.parentNode)
                    for (let a = s.length; a--; )
                        if (s[a] === r)
                            return o.delegateTarget = r,
                            i.oneOff && he.off(t, o.type, e, n),
                            n.apply(r, [o]);
                return null
            }
        }(t, n, i) : function(t, e) {
            return function n(i) {
                return i.delegateTarget = t,
                n.oneOff && he.off(t, i.type, e),
                e.apply(t, [i])
            }
        }(t, n);
        h.delegationSelector = s ? n : null,
        h.originalHandler = r,
        h.oneOff = o,
        h.uidEvent = d,
        c[d] = h,
        t.addEventListener(a, h, s)
    }
    function ue(t, e, n, i, o) {
        const s = ae(e[n], i, o);
        s && (t.removeEventListener(n, s, Boolean(o)),
        delete e[n][s.uidEvent])
    }
    function de(t) {
        return t = t.replace(Jt, ""),
        ne[t] || t
    }
    const he = {
        on(t, e, n, i) {
            ce(t, e, n, i, !1)
        },
        one(t, e, n, i) {
            ce(t, e, n, i, !0)
        },
        off(t, e, n, i) {
            if ("string" != typeof e || !t)
                return;
            const [o,s,r] = le(e, n, i)
              , a = r !== e
              , l = re(t)
              , c = e.startsWith(".");
            if (void 0 !== s) {
                if (!l || !l[r])
                    return;
                return void ue(t, l, r, s, o ? n : null)
            }
            c && Object.keys(l).forEach((n=>{
                !function(t, e, n, i) {
                    const o = e[n] || {};
                    Object.keys(o).forEach((s=>{
                        if (s.includes(i)) {
                            const i = o[s];
                            ue(t, e, n, i.originalHandler, i.delegationSelector)
                        }
                    }
                    ))
                }(t, l, n, e.slice(1))
            }
            ));
            const u = l[r] || {};
            Object.keys(u).forEach((n=>{
                const i = n.replace(Zt, "");
                if (!a || e.includes(i)) {
                    const e = u[n];
                    ue(t, l, r, e.originalHandler, e.delegationSelector)
                }
            }
            ))
        },
        trigger(t, e, n) {
            if ("string" != typeof e || !t)
                return null;
            const i = $t()
              , o = de(e)
              , s = e !== o
              , r = oe.has(o);
            let a, l = !0, c = !0, u = !1, d = null;
            return s && i && (a = i.Event(e, n),
            i(t).trigger(a),
            l = !a.isPropagationStopped(),
            c = !a.isImmediatePropagationStopped(),
            u = a.isDefaultPrevented()),
            r ? (d = document.createEvent("HTMLEvents"),
            d.initEvent(o, l, !0)) : d = new CustomEvent(e,{
                bubbles: l,
                cancelable: !0
            }),
            void 0 !== n && Object.keys(n).forEach((t=>{
                Object.defineProperty(d, t, {
                    get: ()=>n[t]
                })
            }
            )),
            u && d.preventDefault(),
            c && t.dispatchEvent(d),
            d.defaultPrevented && void 0 !== a && a.preventDefault(),
            d
        }
    }
      , fe = new Map
      , pe = {
        set(t, e, n) {
            fe.has(t) || fe.set(t, new Map);
            const i = fe.get(t);
            i.has(e) || 0 === i.size ? i.set(e, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
        },
        get: (t,e)=>fe.has(t) && fe.get(t).get(e) || null,
        remove(t, e) {
            if (!fe.has(t))
                return;
            const n = fe.get(t);
            n.delete(e),
            0 === n.size && fe.delete(t)
        }
    };
    class me {
        constructor(t) {
            (t = Ht(t)) && (this._element = t,
            pe.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            pe.remove(this._element, this.constructor.DATA_KEY),
            he.off(this._element, this.constructor.EVENT_KEY),
            Object.getOwnPropertyNames(this).forEach((t=>{
                this[t] = null
            }
            ))
        }
        _queueCallback(t, e, n=!0) {
            Yt(t, e, n)
        }
        static getInstance(t) {
            return pe.get(Ht(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e={}) {
            return this.getInstance(t) || new this(t,"object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.1.3"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
    }
    const ge = (t,e="hide")=>{
        const n = `click.dismiss${t.EVENT_KEY}`
          , i = t.NAME;
        he.on(document, n, `[data-bs-dismiss="${i}"]`, (function(n) {
            if (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
            Wt(this))
                return;
            const o = It(this) || this.closest(`.${i}`);
            t.getOrCreateInstance(o)[e]()
        }
        ))
    }
    ;
    class ve extends me {
        static get NAME() {
            return "alert"
        }
        close() {
            if (he.trigger(this._element, "close.bs.alert").defaultPrevented)
                return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((()=>this._destroyElement()), this._element, t)
        }
        _destroyElement() {
            this._element.remove(),
            he.trigger(this._element, "closed.bs.alert"),
            this.dispose()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = ve.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    ge(ve, "close"),
    Kt(ve);
    const _e = '[data-bs-toggle="button"]';
    class be extends me {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = be.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }
            ))
        }
    }
    function ye(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }
    function we(t) {
        return t.replace(/[A-Z]/g, (t=>`-${t.toLowerCase()}`))
    }
    he.on(document, "click.bs.button.data-api", _e, (t=>{
        t.preventDefault();
        const e = t.target.closest(_e);
        be.getOrCreateInstance(e).toggle()
    }
    )),
    Kt(be);
    const Ee = {
        setDataAttribute(t, e, n) {
            t.setAttribute(`data-bs-${we(e)}`, n)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${we(e)}`)
        },
        getDataAttributes(t) {
            if (!t)
                return {};
            const e = {};
            return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((n=>{
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length),
                e[i] = ye(t.dataset[n])
            }
            )),
            e
        },
        getDataAttribute: (t,e)=>ye(t.getAttribute(`data-bs-${we(e)}`)),
        offset(t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + window.pageYOffset,
                left: e.left + window.pageXOffset
            }
        },
        position: t=>({
            top: t.offsetTop,
            left: t.offsetLeft
        })
    }
      , xe = {
        find: (t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t,e=document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),
        parents(t, e) {
            const n = [];
            let i = t.parentNode;
            for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
                i.matches(e) && n.push(i),
                i = i.parentNode;
            return n
        },
        prev(t, e) {
            let n = t.previousElementSibling;
            for (; n; ) {
                if (n.matches(e))
                    return [n];
                n = n.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let n = t.nextElementSibling;
            for (; n; ) {
                if (n.matches(e))
                    return [n];
                n = n.nextElementSibling
            }
            return []
        },
        focusableChildren(t) {
            const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");
            return this.find(e, t).filter((t=>!Wt(t) && Rt(t)))
        }
    }
      , Te = "carousel"
      , Ce = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , Ae = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , Oe = "next"
      , Le = "prev"
      , ke = "left"
      , Se = "right"
      , De = {
        ArrowLeft: Se,
        ArrowRight: ke
    }
      , Ne = "slid.bs.carousel"
      , Me = "active"
      , Ie = ".active.carousel-item";
    class Pe extends me {
        constructor(t, e) {
            super(t),
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._indicatorsElement = xe.findOne(".carousel-indicators", this._element),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent),
            this._addEventListeners()
        }
        static get Default() {
            return Ce
        }
        static get NAME() {
            return Te
        }
        next() {
            this._slide(Oe)
        }
        nextWhenVisible() {
            !document.hidden && Rt(this._element) && this.next()
        }
        prev() {
            this._slide(Le)
        }
        pause(t) {
            t || (this._isPaused = !0),
            xe.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (Pt(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(t) {
            this._activeElement = xe.findOne(Ie, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void he.one(this._element, Ne, (()=>this.to(t)));
            if (e === t)
                return this.pause(),
                void this.cycle();
            const n = t > e ? Oe : Le;
            this._slide(n, this._items[t])
        }
        _getConfig(t) {
            return t = {
                ...Ce,
                ...Ee.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            Bt(Te, t, Ae),
            t
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40)
                return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0,
            e && this._slide(e > 0 ? Se : ke)
        }
        _addEventListeners() {
            this._config.keyboard && he.on(this._element, "keydown.bs.carousel", (t=>this._keydown(t))),
            "hover" === this._config.pause && (he.on(this._element, "mouseenter.bs.carousel", (t=>this.pause(t))),
            he.on(this._element, "mouseleave.bs.carousel", (t=>this.cycle(t)))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const t = t=>this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType)
              , e = e=>{
                t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
            }
              , n = t=>{
                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
            }
              , i = e=>{
                t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
                this._handleSwipe(),
                "hover" === this._config.pause && (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                this.touchTimeout = setTimeout((t=>this.cycle(t)), 500 + this._config.interval))
            }
            ;
            xe.find(".carousel-item img", this._element).forEach((t=>{
                he.on(t, "dragstart.bs.carousel", (t=>t.preventDefault()))
            }
            )),
            this._pointerEvent ? (he.on(this._element, "pointerdown.bs.carousel", (t=>e(t))),
            he.on(this._element, "pointerup.bs.carousel", (t=>i(t))),
            this._element.classList.add("pointer-event")) : (he.on(this._element, "touchstart.bs.carousel", (t=>e(t))),
            he.on(this._element, "touchmove.bs.carousel", (t=>n(t))),
            he.on(this._element, "touchend.bs.carousel", (t=>i(t))))
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName))
                return;
            const e = De[t.key];
            e && (t.preventDefault(),
            this._slide(e))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? xe.find(".carousel-item", t.parentNode) : [],
            this._items.indexOf(t)
        }
        _getItemByOrder(t, e) {
            const n = t === Oe;
            return Qt(this._items, e, n, this._config.wrap)
        }
        _triggerSlideEvent(t, e) {
            const n = this._getItemIndex(t)
              , i = this._getItemIndex(xe.findOne(Ie, this._element));
            return he.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = xe.findOne(".active", this._indicatorsElement);
                e.classList.remove(Me),
                e.removeAttribute("aria-current");
                const n = xe.find("[data-bs-target]", this._indicatorsElement);
                for (let e = 0; e < n.length; e++)
                    if (Number.parseInt(n[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        n[e].classList.add(Me),
                        n[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || xe.findOne(Ie, this._element);
            if (!t)
                return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(t, e) {
            const n = this._directionToOrder(t)
              , i = xe.findOne(Ie, this._element)
              , o = this._getItemIndex(i)
              , s = e || this._getItemByOrder(n, i)
              , r = this._getItemIndex(s)
              , a = Boolean(this._interval)
              , l = n === Oe
              , c = l ? "carousel-item-start" : "carousel-item-end"
              , u = l ? "carousel-item-next" : "carousel-item-prev"
              , d = this._orderToDirection(n);
            if (s && s.classList.contains(Me))
                return void (this._isSliding = !1);
            if (this._isSliding)
                return;
            if (this._triggerSlideEvent(s, d).defaultPrevented)
                return;
            if (!i || !s)
                return;
            this._isSliding = !0,
            a && this.pause(),
            this._setActiveIndicatorElement(s),
            this._activeElement = s;
            const h = ()=>{
                he.trigger(this._element, Ne, {
                    relatedTarget: s,
                    direction: d,
                    from: o,
                    to: r
                })
            }
            ;
            if (this._element.classList.contains("slide")) {
                s.classList.add(u),
                Ft(s),
                i.classList.add(c),
                s.classList.add(c);
                const t = ()=>{
                    s.classList.remove(c, u),
                    s.classList.add(Me),
                    i.classList.remove(Me, u, c),
                    this._isSliding = !1,
                    setTimeout(h, 0)
                }
                ;
                this._queueCallback(t, i, !0)
            } else
                i.classList.remove(Me),
                s.classList.add(Me),
                this._isSliding = !1,
                h();
            a && this.cycle()
        }
        _directionToOrder(t) {
            return [Se, ke].includes(t) ? Vt() ? t === ke ? Le : Oe : t === ke ? Oe : Le : t
        }
        _orderToDirection(t) {
            return [Oe, Le].includes(t) ? Vt() ? t === Le ? ke : Se : t === Le ? Se : ke : t
        }
        static carouselInterface(t, e) {
            const n = Pe.getOrCreateInstance(t, e);
            let {_config: i} = n;
            "object" == typeof e && (i = {
                ...i,
                ...e
            });
            const o = "string" == typeof e ? e : i.slide;
            if ("number" == typeof e)
                n.to(e);
            else if ("string" == typeof o) {
                if (void 0 === n[o])
                    throw new TypeError(`No method named "${o}"`);
                n[o]()
            } else
                i.interval && i.ride && (n.pause(),
                n.cycle())
        }
        static jQueryInterface(t) {
            return this.each((function() {
                Pe.carouselInterface(this, t)
            }
            ))
        }
        static dataApiClickHandler(t) {
            const e = It(this);
            if (!e || !e.classList.contains("carousel"))
                return;
            const n = {
                ...Ee.getDataAttributes(e),
                ...Ee.getDataAttributes(this)
            }
              , i = this.getAttribute("data-bs-slide-to");
            i && (n.interval = !1),
            Pe.carouselInterface(e, n),
            i && Pe.getInstance(e).to(i),
            t.preventDefault()
        }
    }
    he.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Pe.dataApiClickHandler),
    he.on(window, "load.bs.carousel.data-api", (()=>{
        const t = xe.find('[data-bs-ride="carousel"]');
        for (let e = 0, n = t.length; e < n; e++)
            Pe.carouselInterface(t[e], Pe.getInstance(t[e]))
    }
    )),
    Kt(Pe);
    const je = "collapse"
      , He = "bs.collapse"
      , Be = {
        toggle: !0,
        parent: null
    }
      , Re = {
        toggle: "boolean",
        parent: "(null|element)"
    }
      , We = "show"
      , qe = "collapse"
      , ze = "collapsing"
      , Fe = "collapsed"
      , $e = ":scope .collapse .collapse"
      , Ue = '[data-bs-toggle="collapse"]';
    class Ve extends me {
        constructor(t, e) {
            super(t),
            this._isTransitioning = !1,
            this._config = this._getConfig(e),
            this._triggerArray = [];
            const n = xe.find(Ue);
            for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t]
                  , i = Mt(e)
                  , o = xe.find(i).filter((t=>t === this._element));
                null !== i && o.length && (this._selector = i,
                this._triggerArray.push(e))
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return Be
        }
        static get NAME() {
            return je
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown())
                return;
            let t, e = [];
            if (this._config.parent) {
                const t = xe.find($e, this._config.parent);
                e = xe.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e=>!t.includes(e)))
            }
            const n = xe.findOne(this._selector);
            if (e.length) {
                const i = e.find((t=>n !== t));
                if (t = i ? Ve.getInstance(i) : null,
                t && t._isTransitioning)
                    return
            }
            if (he.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            e.forEach((e=>{
                n !== e && Ve.getOrCreateInstance(e, {
                    toggle: !1
                }).hide(),
                t || pe.set(e, He, null)
            }
            ));
            const i = this._getDimension();
            this._element.classList.remove(qe),
            this._element.classList.add(ze),
            this._element.style[i] = 0,
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            this._isTransitioning = !0;
            const o = `scroll${i[0].toUpperCase() + i.slice(1)}`;
            this._queueCallback((()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(ze),
                this._element.classList.add(qe, We),
                this._element.style[i] = "",
                he.trigger(this._element, "shown.bs.collapse")
            }
            ), this._element, !0),
            this._element.style[i] = `${this._element[o]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown())
                return;
            if (he.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
            Ft(this._element),
            this._element.classList.add(ze),
            this._element.classList.remove(qe, We);
            const e = this._triggerArray.length;
            for (let t = 0; t < e; t++) {
                const e = this._triggerArray[t]
                  , n = It(e);
                n && !this._isShown(n) && this._addAriaAndCollapsedClass([e], !1)
            }
            this._isTransitioning = !0;
            this._element.style[t] = "",
            this._queueCallback((()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(ze),
                this._element.classList.add(qe),
                he.trigger(this._element, "hidden.bs.collapse")
            }
            ), this._element, !0)
        }
        _isShown(t=this._element) {
            return t.classList.contains(We)
        }
        _getConfig(t) {
            return (t = {
                ...Be,
                ...Ee.getDataAttributes(this._element),
                ...t
            }).toggle = Boolean(t.toggle),
            t.parent = Ht(t.parent),
            Bt(je, t, Re),
            t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent)
                return;
            const t = xe.find($e, this._config.parent);
            xe.find(Ue, this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{
                const e = It(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e))
            }
            ))
        }
        _addAriaAndCollapsedClass(t, e) {
            t.length && t.forEach((t=>{
                e ? t.classList.remove(Fe) : t.classList.add(Fe),
                t.setAttribute("aria-expanded", e)
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = {};
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                const n = Ve.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === n[t])
                        throw new TypeError(`No method named "${t}"`);
                    n[t]()
                }
            }
            ))
        }
    }
    he.on(document, "click.bs.collapse.data-api", Ue, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = Mt(this);
        xe.find(e).forEach((t=>{
            Ve.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
        }
        ))
    }
    )),
    Kt(Ve);
    const Ke = "dropdown"
      , Xe = "Escape"
      , Ye = "Space"
      , Qe = "ArrowUp"
      , Ge = "ArrowDown"
      , Je = new RegExp("ArrowUp|ArrowDown|Escape")
      , Ze = "click.bs.dropdown.data-api"
      , tn = "keydown.bs.dropdown.data-api"
      , en = "show"
      , nn = '[data-bs-toggle="dropdown"]'
      , on = ".dropdown-menu"
      , sn = Vt() ? "top-end" : "top-start"
      , rn = Vt() ? "top-start" : "top-end"
      , an = Vt() ? "bottom-end" : "bottom-start"
      , ln = Vt() ? "bottom-start" : "bottom-end"
      , cn = Vt() ? "left-start" : "right-start"
      , un = Vt() ? "right-start" : "left-start"
      , dn = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
    }
      , hn = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
    };
    class fn extends me {
        constructor(t, e) {
            super(t),
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return dn
        }
        static get DefaultType() {
            return hn
        }
        static get NAME() {
            return Ke
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (Wt(this._element) || this._isShown(this._menu))
                return;
            const t = {
                relatedTarget: this._element
            };
            if (he.trigger(this._element, "show.bs.dropdown", t).defaultPrevented)
                return;
            const e = fn.getParentFromElement(this._element);
            this._inNavbar ? Ee.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e),
            "ontouchstart"in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t=>he.on(t, "mouseover", zt))),
            this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(en),
            this._element.classList.add(en),
            he.trigger(this._element, "shown.bs.dropdown", t)
        }
        hide() {
            if (Wt(this._element) || !this._isShown(this._menu))
                return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(t) {
            he.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>he.off(t, "mouseover", zt))),
            this._popper && this._popper.destroy(),
            this._menu.classList.remove(en),
            this._element.classList.remove(en),
            this._element.setAttribute("aria-expanded", "false"),
            Ee.removeDataAttribute(this._menu, "popper"),
            he.trigger(this._element, "hidden.bs.dropdown", t))
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...Ee.getDataAttributes(this._element),
                ...t
            },
            Bt(Ke, t, this.constructor.DefaultType),
            "object" == typeof t.reference && !jt(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${Ke.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper(t) {
            if (void 0 === e)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let n = this._element;
            "parent" === this._config.reference ? n = t : jt(this._config.reference) ? n = Ht(this._config.reference) : "object" == typeof this._config.reference && (n = this._config.reference);
            const i = this._getPopperConfig()
              , o = i.modifiers.find((t=>"applyStyles" === t.name && !1 === t.enabled));
            this._popper = kt(n, this._menu, i),
            o && Ee.setDataAttribute(this._menu, "popper", "static")
        }
        _isShown(t=this._element) {
            return t.classList.contains(en)
        }
        _getMenuElement() {
            return xe.next(this._element, on)[0]
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend"))
                return cn;
            if (t.classList.contains("dropstart"))
                return un;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? rn : sn : e ? ln : an
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({key: t, target: e}) {
            const n = xe.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(Rt);
            n.length && Qt(n, e, t === Ge, !n.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = fn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
        static clearMenus(t) {
            if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key))
                return;
            const e = xe.find(nn);
            for (let n = 0, i = e.length; n < i; n++) {
                const i = fn.getInstance(e[n]);
                if (!i || !1 === i._config.autoClose)
                    continue;
                if (!i._isShown())
                    continue;
                const o = {
                    relatedTarget: i._element
                };
                if (t) {
                    const e = t.composedPath()
                      , n = e.includes(i._menu);
                    if (e.includes(i._element) || "inside" === i._config.autoClose && !n || "outside" === i._config.autoClose && n)
                        continue;
                    if (i._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
                        continue;
                    "click" === t.type && (o.clickEvent = t)
                }
                i._completeHide(o)
            }
        }
        static getParentFromElement(t) {
            return It(t) || t.parentNode
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? t.key === Ye || t.key !== Xe && (t.key !== Ge && t.key !== Qe || t.target.closest(on)) : !Je.test(t.key))
                return;
            const e = this.classList.contains(en);
            if (!e && t.key === Xe)
                return;
            if (t.preventDefault(),
            t.stopPropagation(),
            Wt(this))
                return;
            const n = this.matches(nn) ? this : xe.prev(this, nn)[0]
              , i = fn.getOrCreateInstance(n);
            if (t.key !== Xe)
                return t.key === Qe || t.key === Ge ? (e || i.show(),
                void i._selectMenuItem(t)) : void (e && t.key !== Ye || fn.clearMenus());
            i.hide()
        }
    }
    he.on(document, tn, nn, fn.dataApiKeydownHandler),
    he.on(document, tn, on, fn.dataApiKeydownHandler),
    he.on(document, Ze, fn.clearMenus),
    he.on(document, "keyup.bs.dropdown.data-api", fn.clearMenus),
    he.on(document, Ze, nn, (function(t) {
        t.preventDefault(),
        fn.getOrCreateInstance(this).toggle()
    }
    )),
    Kt(fn);
    const pn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , mn = ".sticky-top";
    class gn {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, "paddingRight", (e=>e + t)),
            this._setElementAttributes(pn, "paddingRight", (e=>e + t)),
            this._setElementAttributes(mn, "marginRight", (e=>e - t))
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, n) {
            const i = this.getWidth();
            this._applyManipulationCallback(t, (t=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + i)
                    return;
                this._saveInitialAttribute(t, e);
                const o = window.getComputedStyle(t)[e];
                t.style[e] = `${n(Number.parseFloat(o))}px`
            }
            ))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, "paddingRight"),
            this._resetElementAttributes(pn, "paddingRight"),
            this._resetElementAttributes(mn, "marginRight")
        }
        _saveInitialAttribute(t, e) {
            const n = t.style[e];
            n && Ee.setDataAttribute(t, e, n)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t=>{
                const n = Ee.getDataAttribute(t, e);
                void 0 === n ? t.style.removeProperty(e) : (Ee.removeDataAttribute(t, e),
                t.style[e] = n)
            }
            ))
        }
        _applyManipulationCallback(t, e) {
            jt(t) ? e(t) : xe.find(t, this._element).forEach(e)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
    }
    const vn = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    }
      , _n = {
        className: "string",
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)"
    }
      , bn = "backdrop"
      , yn = "show"
      , wn = "mousedown.bs.backdrop";
    class En {
        constructor(t) {
            this._config = this._getConfig(t),
            this._isAppended = !1,
            this._element = null
        }
        show(t) {
            this._config.isVisible ? (this._append(),
            this._config.isAnimated && Ft(this._getElement()),
            this._getElement().classList.add(yn),
            this._emulateAnimation((()=>{
                Xt(t)
            }
            ))) : Xt(t)
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(yn),
            this._emulateAnimation((()=>{
                this.dispose(),
                Xt(t)
            }
            ))) : Xt(t)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className,
                this._config.isAnimated && t.classList.add("fade"),
                this._element = t
            }
            return this._element
        }
        _getConfig(t) {
            return (t = {
                ...vn,
                ..."object" == typeof t ? t : {}
            }).rootElement = Ht(t.rootElement),
            Bt(bn, t, _n),
            t
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()),
            he.on(this._getElement(), wn, (()=>{
                Xt(this._config.clickCallback)
            }
            )),
            this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (he.off(this._element, wn),
            this._element.remove(),
            this._isAppended = !1)
        }
        _emulateAnimation(t) {
            Yt(t, this._getElement(), this._config.isAnimated)
        }
    }
    const xn = {
        trapElement: null,
        autofocus: !0
    }
      , Tn = {
        trapElement: "element",
        autofocus: "boolean"
    }
      , Cn = ".bs.focustrap"
      , An = "backward";
    class On {
        constructor(t) {
            this._config = this._getConfig(t),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        activate() {
            const {trapElement: t, autofocus: e} = this._config;
            this._isActive || (e && t.focus(),
            he.off(document, Cn),
            he.on(document, "focusin.bs.focustrap", (t=>this._handleFocusin(t))),
            he.on(document, "keydown.tab.bs.focustrap", (t=>this._handleKeydown(t))),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            he.off(document, Cn))
        }
        _handleFocusin(t) {
            const {target: e} = t
              , {trapElement: n} = this._config;
            if (e === document || e === n || n.contains(e))
                return;
            const i = xe.focusableChildren(n);
            0 === i.length ? n.focus() : this._lastTabNavDirection === An ? i[i.length - 1].focus() : i[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? An : "forward")
        }
        _getConfig(t) {
            return t = {
                ...xn,
                ..."object" == typeof t ? t : {}
            },
            Bt("focustrap", t, Tn),
            t
        }
    }
    const Ln = "modal"
      , kn = ".bs.modal"
      , Sn = "Escape"
      , Dn = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }
      , Nn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }
      , Mn = "hidden.bs.modal"
      , In = "show.bs.modal"
      , Pn = "resize.bs.modal"
      , jn = "click.dismiss.bs.modal"
      , Hn = "keydown.dismiss.bs.modal"
      , Bn = "mousedown.dismiss.bs.modal"
      , Rn = "modal-open"
      , Wn = "show"
      , qn = "modal-static";
    class zn extends me {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._dialog = xe.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollBar = new gn
        }
        static get Default() {
            return Dn
        }
        static get NAME() {
            return Ln
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown || this._isTransitioning)
                return;
            he.trigger(this._element, In, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._isAnimated() && (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(Rn),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            he.on(this._dialog, Bn, (()=>{
                he.one(this._element, "mouseup.dismiss.bs.modal", (t=>{
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                }
                ))
            }
            )),
            this._showBackdrop((()=>this._showElement(t))))
        }
        hide() {
            if (!this._isShown || this._isTransitioning)
                return;
            if (he.trigger(this._element, "hide.bs.modal").defaultPrevented)
                return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            this._focustrap.deactivate(),
            this._element.classList.remove(Wn),
            he.off(this._element, jn),
            he.off(this._dialog, Bn),
            this._queueCallback((()=>this._hideModal()), this._element, t)
        }
        dispose() {
            [window, this._dialog].forEach((t=>he.off(t, kn))),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new En({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new On({
                trapElement: this._element
            })
        }
        _getConfig(t) {
            return t = {
                ...Dn,
                ...Ee.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            Bt(Ln, t, Nn),
            t
        }
        _showElement(t) {
            const e = this._isAnimated()
              , n = xe.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0,
            n && (n.scrollTop = 0),
            e && Ft(this._element),
            this._element.classList.add(Wn);
            this._queueCallback((()=>{
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                he.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }
            ), this._dialog, e)
        }
        _setEscapeEvent() {
            this._isShown ? he.on(this._element, Hn, (t=>{
                this._config.keyboard && t.key === Sn ? (t.preventDefault(),
                this.hide()) : this._config.keyboard || t.key !== Sn || this._triggerBackdropTransition()
            }
            )) : he.off(this._element, Hn)
        }
        _setResizeEvent() {
            this._isShown ? he.on(window, Pn, (()=>this._adjustDialog())) : he.off(window, Pn)
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide((()=>{
                document.body.classList.remove(Rn),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                he.trigger(this._element, Mn)
            }
            ))
        }
        _showBackdrop(t) {
            he.on(this._element, jn, (t=>{
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }
            )),
            this._backdrop.show(t)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (he.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
                return;
            const {classList: t, scrollHeight: e, style: n} = this._element
              , i = e > document.documentElement.clientHeight;
            !i && "hidden" === n.overflowY || t.contains(qn) || (i || (n.overflowY = "hidden"),
            t.add(qn),
            this._queueCallback((()=>{
                t.remove(qn),
                i || this._queueCallback((()=>{
                    n.overflowY = ""
                }
                ), this._dialog)
            }
            ), this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._scrollBar.getWidth()
              , n = e > 0;
            (!n && t && !Vt() || n && !t && Vt()) && (this._element.style.paddingLeft = `${e}px`),
            (n && !t && !Vt() || !n && t && Vt()) && (this._element.style.paddingRight = `${e}px`)
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const n = zn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === n[t])
                        throw new TypeError(`No method named "${t}"`);
                    n[t](e)
                }
            }
            ))
        }
    }
    he.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = It(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        he.one(e, In, (t=>{
            t.defaultPrevented || he.one(e, Mn, (()=>{
                Rt(this) && this.focus()
            }
            ))
        }
        ));
        const n = xe.findOne(".modal.show");
        n && zn.getInstance(n).hide();
        zn.getOrCreateInstance(e).toggle(this)
    }
    )),
    ge(zn),
    Kt(zn);
    const Fn = "offcanvas"
      , $n = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , Un = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    }
      , Vn = "show"
      , Kn = ".offcanvas.show"
      , Xn = "hidden.bs.offcanvas";
    class Yn extends me {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get NAME() {
            return Fn
        }
        static get Default() {
            return $n
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown)
                return;
            if (he.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented)
                return;
            this._isShown = !0,
            this._element.style.visibility = "visible",
            this._backdrop.show(),
            this._config.scroll || (new gn).hide(),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(Vn);
            this._queueCallback((()=>{
                this._config.scroll || this._focustrap.activate(),
                he.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }
            ), this._element, !0)
        }
        hide() {
            if (!this._isShown)
                return;
            if (he.trigger(this._element, "hide.bs.offcanvas").defaultPrevented)
                return;
            this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.remove(Vn),
            this._backdrop.hide();
            this._queueCallback((()=>{
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._element.style.visibility = "hidden",
                this._config.scroll || (new gn).reset(),
                he.trigger(this._element, Xn)
            }
            ), this._element, !0)
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...$n,
                ...Ee.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            Bt(Fn, t, Un),
            t
        }
        _initializeBackDrop() {
            return new En({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: ()=>this.hide()
            })
        }
        _initializeFocusTrap() {
            return new On({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            he.on(this._element, "keydown.dismiss.bs.offcanvas", (t=>{
                this._config.keyboard && "Escape" === t.key && this.hide()
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Yn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    he.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = It(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        Wt(this))
            return;
        he.one(e, Xn, (()=>{
            Rt(this) && this.focus()
        }
        ));
        const n = xe.findOne(Kn);
        n && n !== e && Yn.getInstance(n).hide();
        Yn.getOrCreateInstance(e).toggle(this)
    }
    )),
    he.on(window, "load.bs.offcanvas.data-api", (()=>xe.find(Kn).forEach((t=>Yn.getOrCreateInstance(t).show())))),
    ge(Yn),
    Kt(Yn);
    const Qn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , Gn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , Jn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , Zn = (t,e)=>{
        const n = t.nodeName.toLowerCase();
        if (e.includes(n))
            return !Qn.has(n) || Boolean(Gn.test(t.nodeValue) || Jn.test(t.nodeValue));
        const i = e.filter((t=>t instanceof RegExp));
        for (let t = 0, e = i.length; t < e; t++)
            if (i[t].test(n))
                return !0;
        return !1
    }
      , ti = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };
    function ei(t, e, n) {
        if (!t.length)
            return t;
        if (n && "function" == typeof n)
            return n(t);
        const i = (new window.DOMParser).parseFromString(t, "text/html")
          , o = [].concat(...i.body.querySelectorAll("*"));
        for (let t = 0, n = o.length; t < n; t++) {
            const n = o[t]
              , i = n.nodeName.toLowerCase();
            if (!Object.keys(e).includes(i)) {
                n.remove();
                continue
            }
            const s = [].concat(...n.attributes)
              , r = [].concat(e["*"] || [], e[i] || []);
            s.forEach((t=>{
                Zn(t, r) || n.removeAttribute(t.nodeName)
            }
            ))
        }
        return i.body.innerHTML
    }
    const ni = "tooltip"
      , ii = new Set(["sanitize", "allowList", "sanitizeFn"])
      , oi = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }
      , si = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: Vt() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: Vt() ? "right" : "left"
    }
      , ri = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: ti,
        popperConfig: null
    }
      , ai = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , li = "fade"
      , ci = "show"
      , ui = "show"
      , di = "out"
      , hi = ".tooltip-inner"
      , fi = ".modal"
      , pi = "hide.bs.modal"
      , mi = "hover"
      , gi = "focus";
    class vi extends me {
        constructor(t, n) {
            if (void 0 === e)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t),
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this._config = this._getConfig(n),
            this.tip = null,
            this._setListeners()
        }
        static get Default() {
            return ri
        }
        static get NAME() {
            return ni
        }
        static get Event() {
            return ai
        }
        static get DefaultType() {
            return oi
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click,
                    e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains(ci))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout),
            he.off(this._element.closest(fi), pi, this._hideModalHandler),
            this.tip && this.tip.remove(),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled)
                return;
            const t = he.trigger(this._element, this.constructor.Event.SHOW)
              , e = qt(this._element)
              , n = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t.defaultPrevented || !n)
                return;
            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(hi).innerHTML && (this._disposePopper(),
            this.tip.remove(),
            this.tip = null);
            const i = this.getTipElement()
              , o = (t=>{
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }
            )(this.constructor.NAME);
            i.setAttribute("id", o),
            this._element.setAttribute("aria-describedby", o),
            this._config.animation && i.classList.add(li);
            const s = "function" == typeof this._config.placement ? this._config.placement.call(this, i, this._element) : this._config.placement
              , r = this._getAttachment(s);
            this._addAttachmentClass(r);
            const {container: a} = this._config;
            pe.set(i, this.constructor.DATA_KEY, this),
            this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(i),
            he.trigger(this._element, this.constructor.Event.INSERTED)),
            this._popper ? this._popper.update() : this._popper = kt(this._element, i, this._getPopperConfig(r)),
            i.classList.add(ci);
            const l = this._resolvePossibleFunction(this._config.customClass);
            l && i.classList.add(...l.split(" ")),
            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>{
                he.on(t, "mouseover", zt)
            }
            ));
            const c = this.tip.classList.contains(li);
            this._queueCallback((()=>{
                const t = this._hoverState;
                this._hoverState = null,
                he.trigger(this._element, this.constructor.Event.SHOWN),
                t === di && this._leave(null, this)
            }
            ), this.tip, c)
        }
        hide() {
            if (!this._popper)
                return;
            const t = this.getTipElement();
            if (he.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
                return;
            t.classList.remove(ci),
            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>he.off(t, "mouseover", zt))),
            this._activeTrigger.click = !1,
            this._activeTrigger.focus = !1,
            this._activeTrigger.hover = !1;
            const e = this.tip.classList.contains(li);
            this._queueCallback((()=>{
                this._isWithActiveTrigger() || (this._hoverState !== ui && t.remove(),
                this._cleanTipClass(),
                this._element.removeAttribute("aria-describedby"),
                he.trigger(this._element, this.constructor.Event.HIDDEN),
                this._disposePopper())
            }
            ), this.tip, e),
            this._hoverState = ""
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip)
                return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return this.setContent(e),
            e.classList.remove(li, ci),
            this.tip = e,
            this.tip
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), hi)
        }
        _sanitizeAndSetContent(t, e, n) {
            const i = xe.findOne(n, t);
            e || !i ? this.setElementContent(i, e) : i.remove()
        }
        setElementContent(t, e) {
            if (null !== t)
                return jt(e) ? (e = Ht(e),
                void (this._config.html ? e.parentNode !== t && (t.innerHTML = "",
                t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = ei(e, this._config.allowList, this._config.sanitizeFn)),
                t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
            const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t)
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
            return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t=>this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t=>{
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)
        }
        _getAttachment(t) {
            return si[t.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t=>{
                if ("click" === t)
                    he.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t=>this.toggle(t)));
                else if ("manual" !== t) {
                    const e = t === mi ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN
                      , n = t === mi ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    he.on(this._element, e, this._config.selector, (t=>this._enter(t))),
                    he.on(this._element, n, this._config.selector, (t=>this._leave(t)))
                }
            }
            )),
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            he.on(this._element.closest(fi), pi, this._hideModalHandler),
            this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._element.getAttribute("title")
              , e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""),
            !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusin" === t.type ? gi : mi] = !0),
            e.getTipElement().classList.contains(ci) || e._hoverState === ui ? e._hoverState = ui : (clearTimeout(e._timeout),
            e._hoverState = ui,
            e._config.delay && e._config.delay.show ? e._timeout = setTimeout((()=>{
                e._hoverState === ui && e.show()
            }
            ), e._config.delay.show) : e.show())
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusout" === t.type ? gi : mi] = e._element.contains(t.relatedTarget)),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = di,
            e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((()=>{
                e._hoverState === di && e.hide()
            }
            ), e._config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        _getConfig(t) {
            const e = Ee.getDataAttributes(this._element);
            return Object.keys(e).forEach((t=>{
                ii.has(t) && delete e[t]
            }
            )),
            (t = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).container = !1 === t.container ? document.body : Ht(t.container),
            "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            Bt(ni, t, this.constructor.DefaultType),
            t.sanitize && (t.template = ei(t.template, t.allowList, t.sanitizeFn)),
            t
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config)
                this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }
        _cleanTipClass() {
            const t = this.getTipElement()
              , e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g")
              , n = t.getAttribute("class").match(e);
            null !== n && n.length > 0 && n.map((t=>t.trim())).forEach((e=>t.classList.remove(e)))
        }
        _getBasicClassPrefix() {
            return "bs-tooltip"
        }
        _handlePopperPlacementChange(t) {
            const {state: e} = t;
            e && (this.tip = e.elements.popper,
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = vi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    Kt(vi);
    const _i = {
        ...vi.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }
      , bi = {
        ...vi.DefaultType,
        content: "(string|element|function)"
    }
      , yi = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    };
    class wi extends vi {
        static get Default() {
            return _i
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return yi
        }
        static get DefaultType() {
            return bi
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
            this._sanitizeAndSetContent(t, this._getContent(), ".popover-body")
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        _getBasicClassPrefix() {
            return "bs-popover"
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = wi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    Kt(wi);
    const Ei = "scrollspy"
      , xi = ".bs.scrollspy"
      , Ti = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , Ci = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , Ai = "dropdown-item"
      , Oi = "active"
      , Li = ".nav-link"
      , ki = ".nav-link, .list-group-item, .dropdown-item"
      , Si = "position";
    class Di extends me {
        constructor(t, e) {
            super(t),
            this._scrollElement = "BODY" === this._element.tagName ? window : this._element,
            this._config = this._getConfig(e),
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            he.on(this._scrollElement, "scroll.bs.scrollspy", (()=>this._process())),
            this.refresh(),
            this._process()
        }
        static get Default() {
            return Ti
        }
        static get NAME() {
            return Ei
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? "offset" : Si
              , e = "auto" === this._config.method ? t : this._config.method
              , n = e === Si ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight();
            xe.find(ki, this._config.target).map((t=>{
                const i = Mt(t)
                  , o = i ? xe.findOne(i) : null;
                if (o) {
                    const t = o.getBoundingClientRect();
                    if (t.width || t.height)
                        return [Ee[e](o).top + n, i]
                }
                return null
            }
            )).filter((t=>t)).sort(((t,e)=>t[0] - e[0])).forEach((t=>{
                this._offsets.push(t[0]),
                this._targets.push(t[1])
            }
            ))
        }
        dispose() {
            he.off(this._scrollElement, xi),
            super.dispose()
        }
        _getConfig(t) {
            return (t = {
                ...Ti,
                ...Ee.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }).target = Ht(t.target) || document.documentElement,
            Bt(Ei, t, Ci),
            t
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            t >= n) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (let e = this._offsets.length; e--; ) {
                    this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
                }
            }
        }
        _activate(t) {
            this._activeTarget = t,
            this._clear();
            const e = ki.split(",").map((e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`))
              , n = xe.findOne(e.join(","), this._config.target);
            n.classList.add(Oi),
            n.classList.contains(Ai) ? xe.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(Oi) : xe.parents(n, ".nav, .list-group").forEach((t=>{
                xe.prev(t, ".nav-link, .list-group-item").forEach((t=>t.classList.add(Oi))),
                xe.prev(t, ".nav-item").forEach((t=>{
                    xe.children(t, Li).forEach((t=>t.classList.add(Oi)))
                }
                ))
            }
            )),
            he.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        _clear() {
            xe.find(ki, this._config.target).filter((t=>t.classList.contains(Oi))).forEach((t=>t.classList.remove(Oi)))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Di.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    he.on(window, "load.bs.scrollspy.data-api", (()=>{
        xe.find('[data-bs-spy="scroll"]').forEach((t=>new Di(t)))
    }
    )),
    Kt(Di);
    const Ni = "active"
      , Mi = "fade"
      , Ii = "show"
      , Pi = ".active"
      , ji = ":scope > li > .active";
    class Hi extends me {
        static get NAME() {
            return "tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Ni))
                return;
            let t;
            const e = It(this._element)
              , n = this._element.closest(".nav, .list-group");
            if (n) {
                const e = "UL" === n.nodeName || "OL" === n.nodeName ? ji : Pi;
                t = xe.find(e, n),
                t = t[t.length - 1]
            }
            const i = t ? he.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (he.trigger(this._element, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented || null !== i && i.defaultPrevented)
                return;
            this._activate(this._element, n);
            const o = ()=>{
                he.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }),
                he.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                })
            }
            ;
            e ? this._activate(e, e.parentNode, o) : o()
        }
        _activate(t, e, n) {
            const i = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? xe.children(e, Pi) : xe.find(ji, e))[0]
              , o = n && i && i.classList.contains(Mi)
              , s = ()=>this._transitionComplete(t, i, n);
            i && o ? (i.classList.remove(Ii),
            this._queueCallback(s, t, !0)) : s()
        }
        _transitionComplete(t, e, n) {
            if (e) {
                e.classList.remove(Ni);
                const t = xe.findOne(":scope > .dropdown-menu .active", e.parentNode);
                t && t.classList.remove(Ni),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add(Ni),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            Ft(t),
            t.classList.contains(Mi) && t.classList.add(Ii);
            let i = t.parentNode;
            if (i && "LI" === i.nodeName && (i = i.parentNode),
            i && i.classList.contains("dropdown-menu")) {
                const e = t.closest(".dropdown");
                e && xe.find(".dropdown-toggle", e).forEach((t=>t.classList.add(Ni))),
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Hi.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    he.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        Wt(this))
            return;
        Hi.getOrCreateInstance(this).show()
    }
    )),
    Kt(Hi);
    const Bi = "toast"
      , Ri = "hide"
      , Wi = "show"
      , qi = "showing"
      , zi = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Fi = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class $i extends me {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get DefaultType() {
            return zi
        }
        static get Default() {
            return Fi
        }
        static get NAME() {
            return Bi
        }
        show() {
            if (he.trigger(this._element, "show.bs.toast").defaultPrevented)
                return;
            this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade");
            this._element.classList.remove(Ri),
            Ft(this._element),
            this._element.classList.add(Wi),
            this._element.classList.add(qi),
            this._queueCallback((()=>{
                this._element.classList.remove(qi),
                he.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide()
            }
            ), this._element, this._config.animation)
        }
        hide() {
            if (!this._element.classList.contains(Wi))
                return;
            if (he.trigger(this._element, "hide.bs.toast").defaultPrevented)
                return;
            this._element.classList.add(qi),
            this._queueCallback((()=>{
                this._element.classList.add(Ri),
                this._element.classList.remove(qi),
                this._element.classList.remove(Wi),
                he.trigger(this._element, "hidden.bs.toast")
            }
            ), this._element, this._config.animation)
        }
        dispose() {
            this._clearTimeout(),
            this._element.classList.contains(Wi) && this._element.classList.remove(Wi),
            super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...Fi,
                ...Ee.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            },
            Bt(Bi, t, this.constructor.DefaultType),
            t
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((()=>{
                this.hide()
            }
            ), this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = e;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = e
            }
            if (e)
                return void this._clearTimeout();
            const n = t.relatedTarget;
            this._element === n || this._element.contains(n) || this._maybeScheduleHide()
        }
        _setListeners() {
            he.on(this._element, "mouseover.bs.toast", (t=>this._onInteraction(t, !0))),
            he.on(this._element, "mouseout.bs.toast", (t=>this._onInteraction(t, !1))),
            he.on(this._element, "focusin.bs.toast", (t=>this._onInteraction(t, !0))),
            he.on(this._element, "focusout.bs.toast", (t=>this._onInteraction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = $i.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    ge($i),
    Kt($i);
    const Ui = function() {
        var t = document.querySelectorAll(".accordion-trigger")
          , e = document.querySelectorAll(".accordion-wrapper")
          , n = document.querySelectorAll(".accordion-trigger_icon");
        t.forEach((function(t, i) {
            t.addEventListener("click", (function(t) {
                t.preventDefault(),
                e[i].classList.toggle("expanded"),
                e.forEach((function(t, e) {
                    t.classList.contains("expanded") ? (n[e].classList.remove("icon-plus"),
                    n[e].classList.add("icon-minus")) : (n[e].classList.add("icon-plus"),
                    n[e].classList.remove("icon-minus"))
                }
                ))
            }
            ))
        }
        ))
    };
    var Vi = window
      , Ki = Vi.requestAnimationFrame || Vi.webkitRequestAnimationFrame || Vi.mozRequestAnimationFrame || Vi.msRequestAnimationFrame || function(t) {
        return setTimeout(t, 16)
    }
      , Xi = window
      , Yi = Xi.cancelAnimationFrame || Xi.mozCancelAnimationFrame || function(t) {
        clearTimeout(t)
    }
    ;
    function Qi() {
        for (var t, e, n, i = arguments[0] || {}, o = 1, s = arguments.length; o < s; o++)
            if (null !== (t = arguments[o]))
                for (e in t)
                    i !== (n = t[e]) && void 0 !== n && (i[e] = n);
        return i
    }
    function Gi(t) {
        return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t
    }
    function Ji(t, e, n, i) {
        if (i)
            try {
                t.setItem(e, n)
            } catch (t) {}
        return n
    }
    function Zi() {
        var t = document
          , e = t.body;
        return e || ((e = t.createElement("body")).fake = !0),
        e
    }
    var to = document.documentElement;
    function eo(t) {
        var e = "";
        return t.fake && (e = to.style.overflow,
        t.style.background = "",
        t.style.overflow = to.style.overflow = "hidden",
        to.appendChild(t)),
        e
    }
    function no(t, e) {
        t.fake && (t.remove(),
        to.style.overflow = e,
        to.offsetHeight)
    }
    function io(t, e, n, i) {
        "insertRule"in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i)
    }
    function oo(t) {
        return ("insertRule"in t ? t.cssRules : t.rules).length
    }
    function so(t, e, n) {
        for (var i = 0, o = t.length; i < o; i++)
            e.call(n, t[i], i)
    }
    var ro = "classList"in document.createElement("_")
      , ao = ro ? function(t, e) {
        return t.classList.contains(e)
    }
    : function(t, e) {
        return t.className.indexOf(e) >= 0
    }
      , lo = ro ? function(t, e) {
        ao(t, e) || t.classList.add(e)
    }
    : function(t, e) {
        ao(t, e) || (t.className += " " + e)
    }
      , co = ro ? function(t, e) {
        ao(t, e) && t.classList.remove(e)
    }
    : function(t, e) {
        ao(t, e) && (t.className = t.className.replace(e, ""))
    }
    ;
    function uo(t, e) {
        return t.hasAttribute(e)
    }
    function ho(t, e) {
        return t.getAttribute(e)
    }
    function fo(t) {
        return void 0 !== t.item
    }
    function po(t, e) {
        if (t = fo(t) || t instanceof Array ? t : [t],
        "[object Object]" === Object.prototype.toString.call(e))
            for (var n = t.length; n--; )
                for (var i in e)
                    t[n].setAttribute(i, e[i])
    }
    function mo(t, e) {
        t = fo(t) || t instanceof Array ? t : [t];
        for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--; )
            for (var o = n; o--; )
                t[i].removeAttribute(e[o])
    }
    function go(t) {
        for (var e = [], n = 0, i = t.length; n < i; n++)
            e.push(t[n]);
        return e
    }
    function vo(t, e) {
        "none" !== t.style.display && (t.style.display = "none")
    }
    function _o(t, e) {
        "none" === t.style.display && (t.style.display = "")
    }
    function bo(t) {
        return "none" !== window.getComputedStyle(t).display
    }
    function yo(t) {
        if ("string" == typeof t) {
            var e = [t]
              , n = t.charAt(0).toUpperCase() + t.substr(1);
            ["Webkit", "Moz", "ms", "O"].forEach((function(i) {
                "ms" === i && "transform" !== t || e.push(i + n)
            }
            )),
            t = e
        }
        for (var i = document.createElement("fakeelement"), o = (t.length,
        0); o < t.length; o++) {
            var s = t[o];
            if (void 0 !== i.style[s])
                return s
        }
        return !1
    }
    function wo(t, e) {
        var n = !1;
        return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"),
        n
    }
    var Eo = !1;
    try {
        var xo = Object.defineProperty({}, "passive", {
            get: function() {
                Eo = !0
            }
        });
        window.addEventListener("test", null, xo)
    } catch (t) {}
    var To = !!Eo && {
        passive: !0
    };
    function Co(t, e, n) {
        for (var i in e) {
            var o = ["touchstart", "touchmove"].indexOf(i) >= 0 && !n && To;
            t.addEventListener(i, e[i], o)
        }
    }
    function Ao(t, e) {
        for (var n in e) {
            var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && To;
            t.removeEventListener(n, e[n], i)
        }
    }
    function Oo() {
        return {
            topics: {},
            on: function(t, e) {
                this.topics[t] = this.topics[t] || [],
                this.topics[t].push(e)
            },
            off: function(t, e) {
                if (this.topics[t])
                    for (var n = 0; n < this.topics[t].length; n++)
                        if (this.topics[t][n] === e) {
                            this.topics[t].splice(n, 1);
                            break
                        }
            },
            emit: function(t, e) {
                e.type = t,
                this.topics[t] && this.topics[t].forEach((function(n) {
                    n(e, t)
                }
                ))
            }
        }
    }
    Object.keys || (Object.keys = function(t) {
        var e = [];
        for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
        return e
    }
    ),
    "remove"in Element.prototype || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    }
    );
    var Lo = function(t) {
        t = Qi({
            container: ".slider",
            mode: "carousel",
            axis: "horizontal",
            items: 1,
            gutter: 0,
            edgePadding: 0,
            fixedWidth: !1,
            autoWidth: !1,
            viewportMax: !1,
            slideBy: 1,
            center: !1,
            controls: !0,
            controlsPosition: "top",
            controlsText: ["prev", "next"],
            controlsContainer: !1,
            prevButton: !1,
            nextButton: !1,
            nav: !0,
            navPosition: "top",
            navContainer: !1,
            navAsThumbnails: !1,
            arrowKeys: !1,
            speed: 300,
            autoplay: !1,
            autoplayPosition: "top",
            autoplayTimeout: 5e3,
            autoplayDirection: "forward",
            autoplayText: ["start", "stop"],
            autoplayHoverPause: !1,
            autoplayButton: !1,
            autoplayButtonOutput: !0,
            autoplayResetOnVisibility: !0,
            animateIn: "tns-fadeIn",
            animateOut: "tns-fadeOut",
            animateNormal: "tns-normal",
            animateDelay: !1,
            loop: !0,
            rewind: !1,
            autoHeight: !1,
            responsive: !1,
            lazyload: !1,
            lazyloadSelector: ".tns-lazy-img",
            touch: !0,
            mouseDrag: !1,
            swipeAngle: 15,
            nested: !1,
            preventActionWhenRunning: !1,
            preventScrollOnTouch: !1,
            freezable: !0,
            onInit: !1,
            useLocalStorage: !0,
            nonce: !1
        }, t || {});
        var e = document
          , n = window
          , i = {
            ENTER: 13,
            SPACE: 32,
            LEFT: 37,
            RIGHT: 39
        }
          , o = {}
          , s = t.useLocalStorage;
        if (s) {
            var r = navigator.userAgent
              , a = new Date;
            try {
                (o = n.localStorage) ? (o.setItem(a, a),
                s = o.getItem(a) == a,
                o.removeItem(a)) : s = !1,
                s || (o = {})
            } catch (t) {
                s = !1
            }
            s && (o.tnsApp && o.tnsApp !== r && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach((function(t) {
                o.removeItem(t)
            }
            )),
            localStorage.tnsApp = r)
        }
        var l = o.tC ? Gi(o.tC) : Ji(o, "tC", function() {
            var t = document
              , e = Zi()
              , n = eo(e)
              , i = t.createElement("div")
              , o = !1;
            e.appendChild(i);
            try {
                for (var s, r = "(10px * 10)", a = ["calc" + r, "-moz-calc" + r, "-webkit-calc" + r], l = 0; l < 3; l++)
                    if (s = a[l],
                    i.style.width = s,
                    100 === i.offsetWidth) {
                        o = s.replace(r, "");
                        break
                    }
            } catch (t) {}
            return e.fake ? no(e, n) : i.remove(),
            o
        }(), s)
          , c = o.tPL ? Gi(o.tPL) : Ji(o, "tPL", function() {
            var t, e = document, n = Zi(), i = eo(n), o = e.createElement("div"), s = e.createElement("div"), r = "";
            o.className = "tns-t-subp2",
            s.className = "tns-t-ct";
            for (var a = 0; a < 70; a++)
                r += "<div></div>";
            return s.innerHTML = r,
            o.appendChild(s),
            n.appendChild(o),
            t = Math.abs(o.getBoundingClientRect().left - s.children[67].getBoundingClientRect().left) < 2,
            n.fake ? no(n, i) : o.remove(),
            t
        }(), s)
          , u = o.tMQ ? Gi(o.tMQ) : Ji(o, "tMQ", function() {
            if (window.matchMedia || window.msMatchMedia)
                return !0;
            var t, e = document, n = Zi(), i = eo(n), o = e.createElement("div"), s = e.createElement("style"), r = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
            return s.type = "text/css",
            o.className = "tns-mq-test",
            n.appendChild(s),
            n.appendChild(o),
            s.styleSheet ? s.styleSheet.cssText = r : s.appendChild(e.createTextNode(r)),
            t = window.getComputedStyle ? window.getComputedStyle(o).position : o.currentStyle.position,
            n.fake ? no(n, i) : o.remove(),
            "absolute" === t
        }(), s)
          , d = o.tTf ? Gi(o.tTf) : Ji(o, "tTf", yo("transform"), s)
          , h = o.t3D ? Gi(o.t3D) : Ji(o, "t3D", function(t) {
            if (!t)
                return !1;
            if (!window.getComputedStyle)
                return !1;
            var e, n = document, i = Zi(), o = eo(i), s = n.createElement("p"), r = t.length > 9 ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
            return r += "transform",
            i.insertBefore(s, null),
            s.style[t] = "translate3d(1px,1px,1px)",
            e = window.getComputedStyle(s).getPropertyValue(r),
            i.fake ? no(i, o) : s.remove(),
            void 0 !== e && e.length > 0 && "none" !== e
        }(d), s)
          , f = o.tTDu ? Gi(o.tTDu) : Ji(o, "tTDu", yo("transitionDuration"), s)
          , p = o.tTDe ? Gi(o.tTDe) : Ji(o, "tTDe", yo("transitionDelay"), s)
          , m = o.tADu ? Gi(o.tADu) : Ji(o, "tADu", yo("animationDuration"), s)
          , g = o.tADe ? Gi(o.tADe) : Ji(o, "tADe", yo("animationDelay"), s)
          , v = o.tTE ? Gi(o.tTE) : Ji(o, "tTE", wo(f, "Transition"), s)
          , _ = o.tAE ? Gi(o.tAE) : Ji(o, "tAE", wo(m, "Animation"), s)
          , b = n.console && "function" == typeof n.console.warn
          , y = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"]
          , w = {};
        if (y.forEach((function(n) {
            if ("string" == typeof t[n]) {
                var i = t[n]
                  , o = e.querySelector(i);
                if (w[n] = i,
                !o || !o.nodeName)
                    return void (b && console.warn("Can't find", t[n]));
                t[n] = o
            }
        }
        )),
        !(t.container.children.length < 1)) {
            var E = t.responsive
              , x = t.nested
              , T = "carousel" === t.mode;
            if (E) {
                0 in E && (t = Qi(t, E[0]),
                delete E[0]);
                var C = {};
                for (var A in E) {
                    var O = E[A];
                    O = "number" == typeof O ? {
                        items: O
                    } : O,
                    C[A] = O
                }
                E = C,
                C = null
            }
            if (T || function t(e) {
                for (var n in e)
                    T || ("slideBy" === n && (e[n] = "page"),
                    "edgePadding" === n && (e[n] = !1),
                    "autoHeight" === n && (e[n] = !1)),
                    "responsive" === n && t(e[n])
            }(t),
            !T) {
                t.axis = "horizontal",
                t.slideBy = "page",
                t.edgePadding = !1;
                var L = t.animateIn
                  , k = t.animateOut
                  , S = t.animateDelay
                  , D = t.animateNormal
            }
            var N, M, I = "horizontal" === t.axis, P = e.createElement("div"), j = e.createElement("div"), H = t.container, B = H.parentNode, R = H.outerHTML, W = H.children, q = W.length, z = sn(), F = !1;
            E && An(),
            T && (H.className += " tns-vpfix");
            var $, U, V, K, X, Y, Q, G, J, Z = t.autoWidth, tt = un("fixedWidth"), et = un("edgePadding"), nt = un("gutter"), it = ln(), ot = un("center"), st = Z ? 1 : Math.floor(un("items")), rt = un("slideBy"), at = t.viewportMax || t.fixedWidthViewportWidth, lt = un("arrowKeys"), ct = un("speed"), ut = t.rewind, dt = !ut && t.loop, ht = un("autoHeight"), ft = un("controls"), pt = un("controlsText"), mt = un("nav"), gt = un("touch"), vt = un("mouseDrag"), _t = un("autoplay"), bt = un("autoplayTimeout"), yt = un("autoplayText"), wt = un("autoplayHoverPause"), Et = un("autoplayResetOnVisibility"), xt = (Q = null,
            G = un("nonce"),
            J = document.createElement("style"),
            Q && J.setAttribute("media", Q),
            G && J.setAttribute("nonce", G),
            document.querySelector("head").appendChild(J),
            J.sheet ? J.sheet : J.styleSheet), Tt = t.lazyload, Ct = t.lazyloadSelector, At = [], Ot = dt ? (X = function() {
                if (Z || tt && !at)
                    return q - 1;
                var e = tt ? "fixedWidth" : "items"
                  , n = [];
                if ((tt || t[e] < q) && n.push(t[e]),
                E)
                    for (var i in E) {
                        var o = E[i][e];
                        o && (tt || o < q) && n.push(o)
                    }
                return n.length || n.push(0),
                Math.ceil(tt ? at / Math.min.apply(null, n) : Math.max.apply(null, n))
            }(),
            Y = T ? Math.ceil((5 * X - q) / 2) : 4 * X - q,
            Y = Math.max(X, Y),
            cn("edgePadding") ? Y + 1 : Y) : 0, Lt = T ? q + 2 * Ot : q + Ot, kt = !(!tt && !Z || dt), St = tt ? Jn() : null, Dt = !T || !dt, Nt = I ? "left" : "top", Mt = "", It = "", Pt = tt ? function() {
                return ot && !dt ? q - 1 : Math.ceil(-St / (tt + nt))
            }
            : Z ? function() {
                for (var t = 0; t < Lt; t++)
                    if ($[t] >= -St)
                        return t
            }
            : function() {
                return ot && T && !dt ? q - 1 : dt || T ? Math.max(0, Lt - Math.ceil(st)) : Lt - 1
            }
            , jt = en(un("startIndex")), Ht = jt, Bt = (tn(),
            0), Rt = Z ? null : Pt(), Wt = t.preventActionWhenRunning, qt = t.swipeAngle, zt = !qt || "?", Ft = !1, $t = t.onInit, Ut = new Oo, Vt = " tns-slider tns-" + t.mode, Kt = H.id || (K = window.tnsId,
            window.tnsId = K ? K + 1 : 1,
            "tns" + window.tnsId), Xt = un("disable"), Yt = !1, Qt = t.freezable, Gt = !(!Qt || Z) && Cn(), Jt = !1, Zt = {
                click: ai,
                keydown: function(t) {
                    t = mi(t);
                    var e = [i.LEFT, i.RIGHT].indexOf(t.keyCode);
                    e >= 0 && (0 === e ? we.disabled || ai(t, -1) : Ee.disabled || ai(t, 1))
                }
            }, te = {
                click: function(t) {
                    if (Ft) {
                        if (Wt)
                            return;
                        si()
                    }
                    var e = gi(t = mi(t));
                    for (; e !== Ae && !uo(e, "data-nav"); )
                        e = e.parentNode;
                    if (uo(e, "data-nav")) {
                        var n = Se = Number(ho(e, "data-nav"))
                          , i = tt || Z ? n * q / Le : n * st;
                        ri(le ? n : Math.min(Math.ceil(i), q - 1), t),
                        De === n && (He && hi(),
                        Se = -1)
                    }
                },
                keydown: function(t) {
                    t = mi(t);
                    var n = e.activeElement;
                    if (!uo(n, "data-nav"))
                        return;
                    var o = [i.LEFT, i.RIGHT, i.ENTER, i.SPACE].indexOf(t.keyCode)
                      , s = Number(ho(n, "data-nav"));
                    o >= 0 && (0 === o ? s > 0 && pi(Ce[s - 1]) : 1 === o ? s < Le - 1 && pi(Ce[s + 1]) : (Se = s,
                    ri(s, t)))
                }
            }, ee = {
                mouseover: function() {
                    He && (ci(),
                    Be = !0)
                },
                mouseout: function() {
                    Be && (li(),
                    Be = !1)
                }
            }, ne = {
                visibilitychange: function() {
                    e.hidden ? He && (ci(),
                    We = !0) : We && (li(),
                    We = !1)
                }
            }, ie = {
                keydown: function(t) {
                    t = mi(t);
                    var e = [i.LEFT, i.RIGHT].indexOf(t.keyCode);
                    e >= 0 && ai(t, 0 === e ? -1 : 1)
                }
            }, oe = {
                touchstart: yi,
                touchmove: wi,
                touchend: xi,
                touchcancel: xi
            }, se = {
                mousedown: yi,
                mousemove: wi,
                mouseup: xi,
                mouseleave: xi
            }, re = cn("controls"), ae = cn("nav"), le = !!Z || t.navAsThumbnails, ce = cn("autoplay"), ue = cn("touch"), de = cn("mouseDrag"), he = "tns-slide-active", fe = "tns-slide-cloned", pe = "tns-complete", me = {
                load: function(t) {
                    Pn(gi(t))
                },
                error: function(t) {
                    e = gi(t),
                    lo(e, "failed"),
                    jn(e);
                    var e
                }
            }, ge = "force" === t.preventScrollOnTouch;
            if (re)
                var ve, _e, be = t.controlsContainer, ye = t.controlsContainer ? t.controlsContainer.outerHTML : "", we = t.prevButton, Ee = t.nextButton, xe = t.prevButton ? t.prevButton.outerHTML : "", Te = t.nextButton ? t.nextButton.outerHTML : "";
            if (ae)
                var Ce, Ae = t.navContainer, Oe = t.navContainer ? t.navContainer.outerHTML : "", Le = Z ? q : Ci(), ke = 0, Se = -1, De = on(), Ne = De, Me = "tns-nav-active", Ie = "Carousel Page ", Pe = " (Current Slide)";
            if (ce)
                var je, He, Be, Re, We, qe = "forward" === t.autoplayDirection ? 1 : -1, ze = t.autoplayButton, Fe = t.autoplayButton ? t.autoplayButton.outerHTML : "", $e = ["<span class='tns-visually-hidden'>", " animation</span>"];
            if (ue || de)
                var Ue, Ve, Ke = {}, Xe = {}, Ye = !1, Qe = I ? function(t, e) {
                    return t.x - e.x
                }
                : function(t, e) {
                    return t.y - e.y
                }
                ;
            Z || Ze(Xt || Gt),
            d && (Nt = d,
            Mt = "translate",
            h ? (Mt += I ? "3d(" : "3d(0px, ",
            It = I ? ", 0px, 0px)" : ", 0px)") : (Mt += I ? "X(" : "Y(",
            It = ")")),
            T && (H.className = H.className.replace("tns-vpfix", "")),
            function() {
                cn("gutter");
                P.className = "tns-outer",
                j.className = "tns-inner",
                P.id = Kt + "-ow",
                j.id = Kt + "-iw",
                "" === H.id && (H.id = Kt);
                Vt += c || Z ? " tns-subpixel" : " tns-no-subpixel",
                Vt += l ? " tns-calc" : " tns-no-calc",
                Z && (Vt += " tns-autowidth");
                Vt += " tns-" + t.axis,
                H.className += Vt,
                T ? ((N = e.createElement("div")).id = Kt + "-mw",
                N.className = "tns-ovh",
                P.appendChild(N),
                N.appendChild(j)) : P.appendChild(j);
                if (ht) {
                    (N || j).className += " tns-ah"
                }
                if (B.insertBefore(P, H),
                j.appendChild(H),
                so(W, (function(t, e) {
                    lo(t, "tns-item"),
                    t.id || (t.id = Kt + "-item" + e),
                    !T && D && lo(t, D),
                    po(t, {
                        "aria-hidden": "true",
                        tabindex: "-1"
                    })
                }
                )),
                Ot) {
                    for (var n = e.createDocumentFragment(), i = e.createDocumentFragment(), o = Ot; o--; ) {
                        var s = o % q
                          , r = W[s].cloneNode(!0);
                        if (lo(r, fe),
                        mo(r, "id"),
                        i.insertBefore(r, i.firstChild),
                        T) {
                            var a = W[q - 1 - s].cloneNode(!0);
                            lo(a, fe),
                            mo(a, "id"),
                            n.appendChild(a)
                        }
                    }
                    H.insertBefore(n, H.firstChild),
                    H.appendChild(i),
                    W = H.children
                }
            }(),
            function() {
                if (!T)
                    for (var e = jt, i = jt + Math.min(q, st); e < i; e++) {
                        var o = W[e];
                        o.style.left = 100 * (e - jt) / st + "%",
                        lo(o, L),
                        co(o, D)
                    }
                I && (c || Z ? (io(xt, "#" + Kt + " > .tns-item", "font-size:" + n.getComputedStyle(W[0]).fontSize + ";", oo(xt)),
                io(xt, "#" + Kt, "font-size:0;", oo(xt))) : T && so(W, (function(t, e) {
                    t.style.marginLeft = function(t) {
                        return l ? l + "(" + 100 * t + "% / " + Lt + ")" : 100 * t / Lt + "%"
                    }(e)
                }
                )));
                if (u) {
                    if (f) {
                        var s = N && t.autoHeight ? gn(t.speed) : "";
                        io(xt, "#" + Kt + "-mw", s, oo(xt))
                    }
                    s = dn(t.edgePadding, t.gutter, t.fixedWidth, t.speed, t.autoHeight),
                    io(xt, "#" + Kt + "-iw", s, oo(xt)),
                    T && (s = I && !Z ? "width:" + hn(t.fixedWidth, t.gutter, t.items) + ";" : "",
                    f && (s += gn(ct)),
                    io(xt, "#" + Kt, s, oo(xt))),
                    s = I && !Z ? fn(t.fixedWidth, t.gutter, t.items) : "",
                    t.gutter && (s += pn(t.gutter)),
                    T || (f && (s += gn(ct)),
                    m && (s += vn(ct))),
                    s && io(xt, "#" + Kt + " > .tns-item", s, oo(xt))
                } else {
                    T && ht && (N.style[f] = ct / 1e3 + "s"),
                    j.style.cssText = dn(et, nt, tt, ht),
                    T && I && !Z && (H.style.width = hn(tt, nt, st));
                    s = I && !Z ? fn(tt, nt, st) : "";
                    nt && (s += pn(nt)),
                    s && io(xt, "#" + Kt + " > .tns-item", s, oo(xt))
                }
                if (E && u)
                    for (var r in E) {
                        r = parseInt(r);
                        var a = E[r]
                          , d = (s = "",
                        "")
                          , h = ""
                          , p = ""
                          , g = ""
                          , v = Z ? null : un("items", r)
                          , _ = un("fixedWidth", r)
                          , b = un("speed", r)
                          , y = un("edgePadding", r)
                          , w = un("autoHeight", r)
                          , x = un("gutter", r);
                        f && N && un("autoHeight", r) && "speed"in a && (d = "#" + Kt + "-mw{" + gn(b) + "}"),
                        ("edgePadding"in a || "gutter"in a) && (h = "#" + Kt + "-iw{" + dn(y, x, _, b, w) + "}"),
                        T && I && !Z && ("fixedWidth"in a || "items"in a || tt && "gutter"in a) && (p = "width:" + hn(_, x, v) + ";"),
                        f && "speed"in a && (p += gn(b)),
                        p && (p = "#" + Kt + "{" + p + "}"),
                        ("fixedWidth"in a || tt && "gutter"in a || !T && "items"in a) && (g += fn(_, x, v)),
                        "gutter"in a && (g += pn(x)),
                        !T && "speed"in a && (f && (g += gn(b)),
                        m && (g += vn(b))),
                        g && (g = "#" + Kt + " > .tns-item{" + g + "}"),
                        (s = d + h + p + g) && xt.insertRule("@media (min-width: " + r / 16 + "em) {" + s + "}", xt.cssRules.length)
                    }
            }(),
            _n();
            var Ge = dt ? T ? function() {
                var t = Bt
                  , e = Rt;
                t += rt,
                e -= rt,
                et ? (t += 1,
                e -= 1) : tt && (it + nt) % (tt + nt) && (e -= 1),
                Ot && (jt > e ? jt -= q : jt < t && (jt += q))
            }
            : function() {
                if (jt > Rt)
                    for (; jt >= Bt + q; )
                        jt -= q;
                else if (jt < Bt)
                    for (; jt <= Rt - q; )
                        jt += q
            }
            : function() {
                jt = Math.max(Bt, Math.min(Rt, jt))
            }
              , Je = T ? function() {
                var t, e, n, i, o, s, r, a, l, c, u;
                Qn(H, ""),
                f || !ct ? (ei(),
                ct && bo(H) || si()) : (t = H,
                e = Nt,
                n = Mt,
                i = It,
                o = Zn(),
                s = ct,
                r = si,
                a = Math.min(s, 10),
                l = o.indexOf("%") >= 0 ? "%" : "px",
                o = o.replace(l, ""),
                c = Number(t.style[e].replace(n, "").replace(i, "").replace(l, "")),
                u = (o - c) / s * a,
                setTimeout((function o() {
                    s -= a,
                    c += u,
                    t.style[e] = n + c + l + i,
                    s > 0 ? setTimeout(o, a) : r()
                }
                ), a)),
                I || Ti()
            }
            : function() {
                At = [];
                var t = {};
                t[v] = t[_] = si,
                Ao(W[Ht], t),
                Co(W[jt], t),
                ni(Ht, L, k, !0),
                ni(jt, D, L),
                v && _ && ct && bo(H) || si()
            }
            ;
            return {
                version: "2.9.4",
                getInfo: Oi,
                events: Ut,
                goTo: ri,
                play: function() {
                    _t && !He && (di(),
                    Re = !1)
                },
                pause: function() {
                    He && (hi(),
                    Re = !0)
                },
                isOn: F,
                updateSliderHeight: zn,
                refresh: _n,
                destroy: function() {
                    if (xt.disabled = !0,
                    xt.ownerNode && xt.ownerNode.remove(),
                    Ao(n, {
                        resize: xn
                    }),
                    lt && Ao(e, ie),
                    be && Ao(be, Zt),
                    Ae && Ao(Ae, te),
                    Ao(H, ee),
                    Ao(H, ne),
                    ze && Ao(ze, {
                        click: fi
                    }),
                    _t && clearInterval(je),
                    T && v) {
                        var i = {};
                        i[v] = si,
                        Ao(H, i)
                    }
                    gt && Ao(H, oe),
                    vt && Ao(H, se);
                    var o = [R, ye, xe, Te, Oe, Fe];
                    for (var s in y.forEach((function(e, n) {
                        var i = "container" === e ? P : t[e];
                        if ("object" == typeof i && i) {
                            var s = !!i.previousElementSibling && i.previousElementSibling
                              , r = i.parentNode;
                            i.outerHTML = o[n],
                            t[e] = s ? s.nextElementSibling : r.firstElementChild
                        }
                    }
                    )),
                    y = L = k = S = D = I = P = j = H = B = R = W = q = M = z = Z = tt = et = nt = it = st = rt = at = lt = ct = ut = dt = ht = xt = Tt = $ = At = Ot = Lt = kt = St = Dt = Nt = Mt = It = Pt = jt = Ht = Bt = Rt = qt = zt = Ft = $t = Ut = Vt = Kt = Xt = Yt = Qt = Gt = Jt = Zt = te = ee = ne = ie = oe = se = re = ae = le = ce = ue = de = he = pe = me = U = ft = pt = be = ye = we = Ee = ve = _e = mt = Ae = Oe = Ce = Le = ke = Se = De = Ne = Me = Ie = Pe = _t = bt = qe = yt = wt = ze = Fe = Et = $e = je = He = Be = Re = We = Ke = Xe = Ue = Ye = Ve = Qe = gt = vt = null,
                    this)
                        "rebuild" !== s && (this[s] = null);
                    F = !1
                },
                rebuild: function() {
                    return Lo(Qi(t, w))
                }
            }
        }
        function Ze(t) {
            t && (ft = mt = gt = vt = lt = _t = wt = Et = !1)
        }
        function tn() {
            for (var t = T ? jt - Ot : jt; t < 0; )
                t += q;
            return t % q + 1
        }
        function en(t) {
            return t = t ? Math.max(0, Math.min(dt ? q - 1 : q - st, t)) : 0,
            T ? t + Ot : t
        }
        function nn(t) {
            for (null == t && (t = jt),
            T && (t -= Ot); t < 0; )
                t += q;
            return Math.floor(t % q)
        }
        function on() {
            var t, e = nn();
            return t = le ? e : tt || Z ? Math.ceil((e + 1) * Le / q - 1) : Math.floor(e / st),
            !dt && T && jt === Rt && (t = Le - 1),
            t
        }
        function sn() {
            return n.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
        }
        function rn(t) {
            return "top" === t ? "afterbegin" : "beforeend"
        }
        function an(t) {
            if (null != t) {
                var n, i, o = e.createElement("div");
                return t.appendChild(o),
                i = (n = o.getBoundingClientRect()).right - n.left,
                o.remove(),
                i || an(t.parentNode)
            }
        }
        function ln() {
            var t = et ? 2 * et - nt : 0;
            return an(B) - t
        }
        function cn(e) {
            if (t[e])
                return !0;
            if (E)
                for (var n in E)
                    if (E[n][e])
                        return !0;
            return !1
        }
        function un(e, n) {
            if (null == n && (n = z),
            "items" === e && tt)
                return Math.floor((it + nt) / (tt + nt)) || 1;
            var i = t[e];
            if (E)
                for (var o in E)
                    n >= parseInt(o) && e in E[o] && (i = E[o][e]);
            return "slideBy" === e && "page" === i && (i = un("items")),
            T || "slideBy" !== e && "items" !== e || (i = Math.floor(i)),
            i
        }
        function dn(t, e, n, i, o) {
            var s = "";
            if (void 0 !== t) {
                var r = t;
                e && (r -= e),
                s = I ? "margin: 0 " + r + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + r + "px 0;"
            } else if (e && !n) {
                var a = "-" + e + "px";
                s = "margin: 0 " + (I ? a + " 0 0" : "0 " + a + " 0") + ";"
            }
            return !T && o && f && i && (s += gn(i)),
            s
        }
        function hn(t, e, n) {
            return t ? (t + e) * Lt + "px" : l ? l + "(" + 100 * Lt + "% / " + n + ")" : 100 * Lt / n + "%"
        }
        function fn(t, e, n) {
            var i;
            if (t)
                i = t + e + "px";
            else {
                T || (n = Math.floor(n));
                var o = T ? Lt : n;
                i = l ? l + "(100% / " + o + ")" : 100 / o + "%"
            }
            return i = "width:" + i,
            "inner" !== x ? i + ";" : i + " !important;"
        }
        function pn(t) {
            var e = "";
            !1 !== t && (e = (I ? "padding-" : "margin-") + (I ? "right" : "bottom") + ": " + t + "px;");
            return e
        }
        function mn(t, e) {
            var n = t.substring(0, t.length - e).toLowerCase();
            return n && (n = "-" + n + "-"),
            n
        }
        function gn(t) {
            return mn(f, 18) + "transition-duration:" + t / 1e3 + "s;"
        }
        function vn(t) {
            return mn(m, 17) + "animation-duration:" + t / 1e3 + "s;"
        }
        function _n() {
            if (cn("autoHeight") || Z || !I) {
                var t = H.querySelectorAll("img");
                so(t, (function(t) {
                    var e = t.src;
                    Tt || (e && e.indexOf("data:image") < 0 ? (t.src = "",
                    Co(t, me),
                    lo(t, "loading"),
                    t.src = e) : Pn(t))
                }
                )),
                Ki((function() {
                    Rn(go(t), (function() {
                        U = !0
                    }
                    ))
                }
                )),
                cn("autoHeight") && (t = Hn(jt, Math.min(jt + st - 1, Lt - 1))),
                Tt ? bn() : Ki((function() {
                    Rn(go(t), bn)
                }
                ))
            } else
                T && ti(),
                wn(),
                En()
        }
        function bn() {
            if (Z && q > 1) {
                var t = dt ? jt : q - 1;
                !function e() {
                    var n = W[t].getBoundingClientRect().left
                      , i = W[t - 1].getBoundingClientRect().right;
                    Math.abs(n - i) <= 1 ? yn() : setTimeout((function() {
                        e()
                    }
                    ), 16)
                }()
            } else
                yn()
        }
        function yn() {
            I && !Z || (Fn(),
            Z ? (St = Jn(),
            Qt && (Gt = Cn()),
            Rt = Pt(),
            Ze(Xt || Gt)) : Ti()),
            T && ti(),
            wn(),
            En()
        }
        function wn() {
            if ($n(),
            P.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + Nn() + "</span>  of " + q + "</div>"),
            V = P.querySelector(".tns-liveregion .current"),
            ce) {
                var e = _t ? "stop" : "start";
                ze ? po(ze, {
                    "data-action": e
                }) : t.autoplayButtonOutput && (P.insertAdjacentHTML(rn(t.autoplayPosition), '<button type="button" data-action="' + e + '">' + $e[0] + e + $e[1] + yt[0] + "</button>"),
                ze = P.querySelector("[data-action]")),
                ze && Co(ze, {
                    click: fi
                }),
                _t && (di(),
                wt && Co(H, ee),
                Et && Co(H, ne))
            }
            if (ae) {
                if (Ae)
                    po(Ae, {
                        "aria-label": "Carousel Pagination"
                    }),
                    so(Ce = Ae.children, (function(t, e) {
                        po(t, {
                            "data-nav": e,
                            tabindex: "-1",
                            "aria-label": Ie + (e + 1),
                            "aria-controls": Kt
                        })
                    }
                    ));
                else {
                    for (var n = "", i = le ? "" : 'style="display:none"', o = 0; o < q; o++)
                        n += '<button type="button" data-nav="' + o + '" tabindex="-1" aria-controls="' + Kt + '" ' + i + ' aria-label="' + Ie + (o + 1) + '"></button>';
                    n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>",
                    P.insertAdjacentHTML(rn(t.navPosition), n),
                    Ae = P.querySelector(".tns-nav"),
                    Ce = Ae.children
                }
                if (Ai(),
                f) {
                    var s = f.substring(0, f.length - 18).toLowerCase()
                      , r = "transition: all " + ct / 1e3 + "s";
                    s && (r = "-" + s + "-" + r),
                    io(xt, "[aria-controls^=" + Kt + "-item]", r, oo(xt))
                }
                po(Ce[De], {
                    "aria-label": Ie + (De + 1) + Pe
                }),
                mo(Ce[De], "tabindex"),
                lo(Ce[De], Me),
                Co(Ae, te)
            }
            re && (be || we && Ee || (P.insertAdjacentHTML(rn(t.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + Kt + '">' + pt[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + Kt + '">' + pt[1] + "</button></div>"),
            be = P.querySelector(".tns-controls")),
            we && Ee || (we = be.children[0],
            Ee = be.children[1]),
            t.controlsContainer && po(be, {
                "aria-label": "Carousel Navigation",
                tabindex: "0"
            }),
            (t.controlsContainer || t.prevButton && t.nextButton) && po([we, Ee], {
                "aria-controls": Kt,
                tabindex: "-1"
            }),
            (t.controlsContainer || t.prevButton && t.nextButton) && (po(we, {
                "data-controls": "prev"
            }),
            po(Ee, {
                "data-controls": "next"
            })),
            ve = Vn(we),
            _e = Vn(Ee),
            Yn(),
            be ? Co(be, Zt) : (Co(we, Zt),
            Co(Ee, Zt))),
            On()
        }
        function En() {
            if (T && v) {
                var i = {};
                i[v] = si,
                Co(H, i)
            }
            gt && Co(H, oe, t.preventScrollOnTouch),
            vt && Co(H, se),
            lt && Co(e, ie),
            "inner" === x ? Ut.on("outerResized", (function() {
                Tn(),
                Ut.emit("innerLoaded", Oi())
            }
            )) : (E || tt || Z || ht || !I) && Co(n, {
                resize: xn
            }),
            ht && ("outer" === x ? Ut.on("innerLoaded", Bn) : Xt || Bn()),
            In(),
            Xt ? Sn() : Gt && kn(),
            Ut.on("indexChanged", Wn),
            "inner" === x && Ut.emit("innerLoaded", Oi()),
            "function" == typeof $t && $t(Oi()),
            F = !0
        }
        function xn(t) {
            Ki((function() {
                Tn(mi(t))
            }
            ))
        }
        function Tn(n) {
            if (F) {
                "outer" === x && Ut.emit("outerResized", Oi(n)),
                z = sn();
                var i, o = M, s = !1;
                E && (An(),
                (i = o !== M) && Ut.emit("newBreakpointStart", Oi(n)));
                var r, a, l = st, c = Xt, d = Gt, h = lt, f = ft, p = mt, m = gt, g = vt, v = _t, _ = wt, b = Et, y = jt;
                if (i) {
                    var w = tt
                      , C = ht
                      , A = pt
                      , O = ot
                      , S = yt;
                    if (!u)
                        var N = nt
                          , P = et
                }
                if (lt = un("arrowKeys"),
                ft = un("controls"),
                mt = un("nav"),
                gt = un("touch"),
                ot = un("center"),
                vt = un("mouseDrag"),
                _t = un("autoplay"),
                wt = un("autoplayHoverPause"),
                Et = un("autoplayResetOnVisibility"),
                i && (Xt = un("disable"),
                tt = un("fixedWidth"),
                ct = un("speed"),
                ht = un("autoHeight"),
                pt = un("controlsText"),
                yt = un("autoplayText"),
                bt = un("autoplayTimeout"),
                u || (et = un("edgePadding"),
                nt = un("gutter"))),
                Ze(Xt),
                it = ln(),
                I && !Z || Xt || (Fn(),
                I || (Ti(),
                s = !0)),
                (tt || Z) && (St = Jn(),
                Rt = Pt()),
                (i || tt) && (st = un("items"),
                rt = un("slideBy"),
                (a = st !== l) && (tt || Z || (Rt = Pt()),
                Ge())),
                i && Xt !== c && (Xt ? Sn() : function() {
                    if (!Yt)
                        return;
                    if (xt.disabled = !1,
                    H.className += Vt,
                    ti(),
                    dt)
                        for (var t = Ot; t--; )
                            T && _o(W[t]),
                            _o(W[Lt - t - 1]);
                    if (!T)
                        for (var e = jt, n = jt + q; e < n; e++) {
                            var i = W[e]
                              , o = e < jt + st ? L : D;
                            i.style.left = 100 * (e - jt) / st + "%",
                            lo(i, o)
                        }
                    Ln(),
                    Yt = !1
                }()),
                Qt && (i || tt || Z) && (Gt = Cn()) !== d && (Gt ? (ei(Zn(en(0))),
                kn()) : (!function() {
                    if (!Jt)
                        return;
                    et && u && (j.style.margin = "");
                    if (Ot)
                        for (var t = "tns-transparent", e = Ot; e--; )
                            T && co(W[e], t),
                            co(W[Lt - e - 1], t);
                    Ln(),
                    Jt = !1
                }(),
                s = !0)),
                Ze(Xt || Gt),
                _t || (wt = Et = !1),
                lt !== h && (lt ? Co(e, ie) : Ao(e, ie)),
                ft !== f && (ft ? be ? _o(be) : (we && _o(we),
                Ee && _o(Ee)) : be ? vo(be) : (we && vo(we),
                Ee && vo(Ee))),
                mt !== p && (mt ? (_o(Ae),
                Ai()) : vo(Ae)),
                gt !== m && (gt ? Co(H, oe, t.preventScrollOnTouch) : Ao(H, oe)),
                vt !== g && (vt ? Co(H, se) : Ao(H, se)),
                _t !== v && (_t ? (ze && _o(ze),
                He || Re || di()) : (ze && vo(ze),
                He && hi())),
                wt !== _ && (wt ? Co(H, ee) : Ao(H, ee)),
                Et !== b && (Et ? Co(e, ne) : Ao(e, ne)),
                i) {
                    if (tt === w && ot === O || (s = !0),
                    ht !== C && (ht || (j.style.height = "")),
                    ft && pt !== A && (we.innerHTML = pt[0],
                    Ee.innerHTML = pt[1]),
                    ze && yt !== S) {
                        var B = _t ? 1 : 0
                          , R = ze.innerHTML
                          , $ = R.length - S[B].length;
                        R.substring($) === S[B] && (ze.innerHTML = R.substring(0, $) + yt[B])
                    }
                } else
                    ot && (tt || Z) && (s = !0);
                if ((a || tt && !Z) && (Le = Ci(),
                Ai()),
                (r = jt !== y) ? (Ut.emit("indexChanged", Oi()),
                s = !0) : a ? r || Wn() : (tt || Z) && (In(),
                $n(),
                Dn()),
                a && !T && function() {
                    for (var t = jt + Math.min(q, st), e = Lt; e--; ) {
                        var n = W[e];
                        e >= jt && e < t ? (lo(n, "tns-moving"),
                        n.style.left = 100 * (e - jt) / st + "%",
                        lo(n, L),
                        co(n, D)) : n.style.left && (n.style.left = "",
                        lo(n, D),
                        co(n, L)),
                        co(n, k)
                    }
                    setTimeout((function() {
                        so(W, (function(t) {
                            co(t, "tns-moving")
                        }
                        ))
                    }
                    ), 300)
                }(),
                !Xt && !Gt) {
                    if (i && !u && (et === P && nt === N || (j.style.cssText = dn(et, nt, tt, ct, ht)),
                    I)) {
                        T && (H.style.width = hn(tt, nt, st));
                        var U = fn(tt, nt, st) + pn(nt);
                        !function(t, e) {
                            "deleteRule"in t ? t.deleteRule(e) : t.removeRule(e)
                        }(xt, oo(xt) - 1),
                        io(xt, "#" + Kt + " > .tns-item", U, oo(xt))
                    }
                    ht && Bn(),
                    s && (ti(),
                    Ht = jt)
                }
                i && Ut.emit("newBreakpointEnd", Oi(n))
            }
        }
        function Cn() {
            if (!tt && !Z)
                return q <= (ot ? st - (st - 1) / 2 : st);
            var t = tt ? (tt + nt) * q : $[q]
              , e = et ? it + 2 * et : it + nt;
            return ot && (e -= tt ? (it - tt) / 2 : (it - ($[jt + 1] - $[jt] - nt)) / 2),
            t <= e
        }
        function An() {
            for (var t in M = 0,
            E)
                t = parseInt(t),
                z >= t && (M = t)
        }
        function On() {
            !_t && ze && vo(ze),
            !mt && Ae && vo(Ae),
            ft || (be ? vo(be) : (we && vo(we),
            Ee && vo(Ee)))
        }
        function Ln() {
            _t && ze && _o(ze),
            mt && Ae && _o(Ae),
            ft && (be ? _o(be) : (we && _o(we),
            Ee && _o(Ee)))
        }
        function kn() {
            if (!Jt) {
                if (et && (j.style.margin = "0px"),
                Ot)
                    for (var t = "tns-transparent", e = Ot; e--; )
                        T && lo(W[e], t),
                        lo(W[Lt - e - 1], t);
                On(),
                Jt = !0
            }
        }
        function Sn() {
            if (!Yt) {
                if (xt.disabled = !0,
                H.className = H.className.replace(Vt.substring(1), ""),
                mo(H, ["style"]),
                dt)
                    for (var t = Ot; t--; )
                        T && vo(W[t]),
                        vo(W[Lt - t - 1]);
                if (I && T || mo(j, ["style"]),
                !T)
                    for (var e = jt, n = jt + q; e < n; e++) {
                        var i = W[e];
                        mo(i, ["style"]),
                        co(i, L),
                        co(i, D)
                    }
                On(),
                Yt = !0
            }
        }
        function Dn() {
            var t = Nn();
            V.innerHTML !== t && (V.innerHTML = t)
        }
        function Nn() {
            var t = Mn()
              , e = t[0] + 1
              , n = t[1] + 1;
            return e === n ? e + "" : e + " to " + n
        }
        function Mn(t) {
            null == t && (t = Zn());
            var e, n, i, o = jt;
            if (ot || et ? (Z || tt) && (n = -(parseFloat(t) + et),
            i = n + it + 2 * et) : Z && (n = $[jt],
            i = n + it),
            Z)
                $.forEach((function(t, s) {
                    s < Lt && ((ot || et) && t <= n + .5 && (o = s),
                    i - t >= .5 && (e = s))
                }
                ));
            else {
                if (tt) {
                    var s = tt + nt;
                    ot || et ? (o = Math.floor(n / s),
                    e = Math.ceil(i / s - 1)) : e = o + Math.ceil(it / s) - 1
                } else if (ot || et) {
                    var r = st - 1;
                    if (ot ? (o -= r / 2,
                    e = jt + r / 2) : e = jt + r,
                    et) {
                        var a = et * st / it;
                        o -= a,
                        e += a
                    }
                    o = Math.floor(o),
                    e = Math.ceil(e)
                } else
                    e = o + st - 1;
                o = Math.max(o, 0),
                e = Math.min(e, Lt - 1)
            }
            return [o, e]
        }
        function In() {
            if (Tt && !Xt) {
                var t = Mn();
                t.push(Ct),
                Hn.apply(null, t).forEach((function(t) {
                    if (!ao(t, pe)) {
                        var e = {};
                        e[v] = function(t) {
                            t.stopPropagation()
                        }
                        ,
                        Co(t, e),
                        Co(t, me),
                        t.src = ho(t, "data-src");
                        var n = ho(t, "data-srcset");
                        n && (t.srcset = n),
                        lo(t, "loading")
                    }
                }
                ))
            }
        }
        function Pn(t) {
            lo(t, "loaded"),
            jn(t)
        }
        function jn(t) {
            lo(t, pe),
            co(t, "loading"),
            Ao(t, me)
        }
        function Hn(t, e, n) {
            var i = [];
            for (n || (n = "img"); t <= e; )
                so(W[t].querySelectorAll(n), (function(t) {
                    i.push(t)
                }
                )),
                t++;
            return i
        }
        function Bn() {
            var t = Hn.apply(null, Mn());
            Ki((function() {
                Rn(t, zn)
            }
            ))
        }
        function Rn(t, e) {
            return U ? e() : (t.forEach((function(e, n) {
                !Tt && e.complete && jn(e),
                ao(e, pe) && t.splice(n, 1)
            }
            )),
            t.length ? void Ki((function() {
                Rn(t, e)
            }
            )) : e())
        }
        function Wn() {
            In(),
            $n(),
            Dn(),
            Yn(),
            function() {
                if (mt && (De = Se >= 0 ? Se : on(),
                Se = -1,
                De !== Ne)) {
                    var t = Ce[Ne]
                      , e = Ce[De];
                    po(t, {
                        tabindex: "-1",
                        "aria-label": Ie + (Ne + 1)
                    }),
                    co(t, Me),
                    po(e, {
                        "aria-label": Ie + (De + 1) + Pe
                    }),
                    mo(e, "tabindex"),
                    lo(e, Me),
                    Ne = De
                }
            }()
        }
        function qn(t, e) {
            for (var n = [], i = t, o = Math.min(t + e, Lt); i < o; i++)
                n.push(W[i].offsetHeight);
            return Math.max.apply(null, n)
        }
        function zn() {
            var t = ht ? qn(jt, st) : qn(Ot, q)
              , e = N || j;
            e.style.height !== t && (e.style.height = t + "px")
        }
        function Fn() {
            $ = [0];
            var t = I ? "left" : "top"
              , e = I ? "right" : "bottom"
              , n = W[0].getBoundingClientRect()[t];
            so(W, (function(i, o) {
                o && $.push(i.getBoundingClientRect()[t] - n),
                o === Lt - 1 && $.push(i.getBoundingClientRect()[e] - n)
            }
            ))
        }
        function $n() {
            var t = Mn()
              , e = t[0]
              , n = t[1];
            so(W, (function(t, i) {
                i >= e && i <= n ? uo(t, "aria-hidden") && (mo(t, ["aria-hidden", "tabindex"]),
                lo(t, he)) : uo(t, "aria-hidden") || (po(t, {
                    "aria-hidden": "true",
                    tabindex: "-1"
                }),
                co(t, he))
            }
            ))
        }
        function Un(t) {
            return t.nodeName.toLowerCase()
        }
        function Vn(t) {
            return "button" === Un(t)
        }
        function Kn(t) {
            return "true" === t.getAttribute("aria-disabled")
        }
        function Xn(t, e, n) {
            t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString())
        }
        function Yn() {
            if (ft && !ut && !dt) {
                var t = ve ? we.disabled : Kn(we)
                  , e = _e ? Ee.disabled : Kn(Ee)
                  , n = jt <= Bt
                  , i = !ut && jt >= Rt;
                n && !t && Xn(ve, we, !0),
                !n && t && Xn(ve, we, !1),
                i && !e && Xn(_e, Ee, !0),
                !i && e && Xn(_e, Ee, !1)
            }
        }
        function Qn(t, e) {
            f && (t.style[f] = e)
        }
        function Gn(t) {
            return null == t && (t = jt),
            Z ? (it - (et ? nt : 0) - ($[t + 1] - $[t] - nt)) / 2 : tt ? (it - tt) / 2 : (st - 1) / 2
        }
        function Jn() {
            var t = it + (et ? nt : 0) - (tt ? (tt + nt) * Lt : $[Lt]);
            return ot && !dt && (t = tt ? -(tt + nt) * (Lt - 1) - Gn() : Gn(Lt - 1) - $[Lt - 1]),
            t > 0 && (t = 0),
            t
        }
        function Zn(t) {
            var e;
            if (null == t && (t = jt),
            I && !Z)
                if (tt)
                    e = -(tt + nt) * t,
                    ot && (e += Gn());
                else {
                    var n = d ? Lt : st;
                    ot && (t -= Gn()),
                    e = 100 * -t / n
                }
            else
                e = -$[t],
                ot && Z && (e += Gn());
            return kt && (e = Math.max(e, St)),
            e += !I || Z || tt ? "px" : "%"
        }
        function ti(t) {
            Qn(H, "0s"),
            ei(t)
        }
        function ei(t) {
            null == t && (t = Zn()),
            H.style[Nt] = Mt + t + It
        }
        function ni(t, e, n, i) {
            var o = t + st;
            dt || (o = Math.min(o, Lt));
            for (var s = t; s < o; s++) {
                var r = W[s];
                i || (r.style.left = 100 * (s - jt) / st + "%"),
                S && p && (r.style[p] = r.style[g] = S * (s - t) / 1e3 + "s"),
                co(r, e),
                lo(r, n),
                i && At.push(r)
            }
        }
        function ii(t, e) {
            Dt && Ge(),
            (jt !== Ht || e) && (Ut.emit("indexChanged", Oi()),
            Ut.emit("transitionStart", Oi()),
            ht && Bn(),
            He && t && ["click", "keydown"].indexOf(t.type) >= 0 && hi(),
            Ft = !0,
            Je())
        }
        function oi(t) {
            return t.toLowerCase().replace(/-/g, "")
        }
        function si(t) {
            if (T || Ft) {
                if (Ut.emit("transitionEnd", Oi(t)),
                !T && At.length > 0)
                    for (var e = 0; e < At.length; e++) {
                        var n = At[e];
                        n.style.left = "",
                        g && p && (n.style[g] = "",
                        n.style[p] = ""),
                        co(n, k),
                        lo(n, D)
                    }
                if (!t || !T && t.target.parentNode === H || t.target === H && oi(t.propertyName) === oi(Nt)) {
                    if (!Dt) {
                        var i = jt;
                        Ge(),
                        jt !== i && (Ut.emit("indexChanged", Oi()),
                        ti())
                    }
                    "inner" === x && Ut.emit("innerLoaded", Oi()),
                    Ft = !1,
                    Ht = jt
                }
            }
        }
        function ri(t, e) {
            if (!Gt)
                if ("prev" === t)
                    ai(e, -1);
                else if ("next" === t)
                    ai(e, 1);
                else {
                    if (Ft) {
                        if (Wt)
                            return;
                        si()
                    }
                    var n = nn()
                      , i = 0;
                    if ("first" === t ? i = -n : "last" === t ? i = T ? q - st - n : q - 1 - n : ("number" != typeof t && (t = parseInt(t)),
                    isNaN(t) || (e || (t = Math.max(0, Math.min(q - 1, t))),
                    i = t - n)),
                    !T && i && Math.abs(i) < st) {
                        var o = i > 0 ? 1 : -1;
                        i += jt + i - q >= Bt ? q * o : 2 * q * o * -1
                    }
                    jt += i,
                    T && dt && (jt < Bt && (jt += q),
                    jt > Rt && (jt -= q)),
                    nn(jt) !== nn(Ht) && ii(e)
                }
        }
        function ai(t, e) {
            if (Ft) {
                if (Wt)
                    return;
                si()
            }
            var n;
            if (!e) {
                for (var i = gi(t = mi(t)); i !== be && [we, Ee].indexOf(i) < 0; )
                    i = i.parentNode;
                var o = [we, Ee].indexOf(i);
                o >= 0 && (n = !0,
                e = 0 === o ? -1 : 1)
            }
            if (ut) {
                if (jt === Bt && -1 === e)
                    return void ri("last", t);
                if (jt === Rt && 1 === e)
                    return void ri("first", t)
            }
            e && (jt += rt * e,
            Z && (jt = Math.floor(jt)),
            ii(n || t && "keydown" === t.type ? t : null))
        }
        function li() {
            je = setInterval((function() {
                ai(null, qe)
            }
            ), bt),
            He = !0
        }
        function ci() {
            clearInterval(je),
            He = !1
        }
        function ui(t, e) {
            po(ze, {
                "data-action": t
            }),
            ze.innerHTML = $e[0] + t + $e[1] + e
        }
        function di() {
            li(),
            ze && ui("stop", yt[1])
        }
        function hi() {
            ci(),
            ze && ui("start", yt[0])
        }
        function fi() {
            He ? (hi(),
            Re = !0) : (di(),
            Re = !1)
        }
        function pi(t) {
            t.focus()
        }
        function mi(t) {
            return vi(t = t || n.event) ? t.changedTouches[0] : t
        }
        function gi(t) {
            return t.target || n.event.srcElement
        }
        function vi(t) {
            return t.type.indexOf("touch") >= 0
        }
        function _i(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }
        function bi() {
            return s = Xe.y - Ke.y,
            r = Xe.x - Ke.x,
            e = Math.atan2(s, r) * (180 / Math.PI),
            n = qt,
            i = !1,
            (o = Math.abs(90 - Math.abs(e))) >= 90 - n ? i = "horizontal" : o <= n && (i = "vertical"),
            i === t.axis;
            var e, n, i, o, s, r
        }
        function yi(t) {
            if (Ft) {
                if (Wt)
                    return;
                si()
            }
            _t && He && ci(),
            Ye = !0,
            Ve && (Yi(Ve),
            Ve = null);
            var e = mi(t);
            Ut.emit(vi(t) ? "touchStart" : "dragStart", Oi(t)),
            !vi(t) && ["img", "a"].indexOf(Un(gi(t))) >= 0 && _i(t),
            Xe.x = Ke.x = e.clientX,
            Xe.y = Ke.y = e.clientY,
            T && (Ue = parseFloat(H.style[Nt].replace(Mt, "")),
            Qn(H, "0s"))
        }
        function wi(t) {
            if (Ye) {
                var e = mi(t);
                Xe.x = e.clientX,
                Xe.y = e.clientY,
                T ? Ve || (Ve = Ki((function() {
                    Ei(t)
                }
                ))) : ("?" === zt && (zt = bi()),
                zt && (ge = !0)),
                ("boolean" != typeof t.cancelable || t.cancelable) && ge && t.preventDefault()
            }
        }
        function Ei(t) {
            if (zt) {
                if (Yi(Ve),
                Ye && (Ve = Ki((function() {
                    Ei(t)
                }
                ))),
                "?" === zt && (zt = bi()),
                zt) {
                    !ge && vi(t) && (ge = !0);
                    try {
                        t.type && Ut.emit(vi(t) ? "touchMove" : "dragMove", Oi(t))
                    } catch (t) {}
                    var e = Ue
                      , n = Qe(Xe, Ke);
                    if (!I || tt || Z)
                        e += n,
                        e += "px";
                    else
                        e += d ? n * st * 100 / ((it + nt) * Lt) : 100 * n / (it + nt),
                        e += "%";
                    H.style[Nt] = Mt + e + It
                }
            } else
                Ye = !1
        }
        function xi(e) {
            if (Ye) {
                Ve && (Yi(Ve),
                Ve = null),
                T && Qn(H, ""),
                Ye = !1;
                var n = mi(e);
                Xe.x = n.clientX,
                Xe.y = n.clientY;
                var i = Qe(Xe, Ke);
                if (Math.abs(i)) {
                    if (!vi(e)) {
                        var o = gi(e);
                        Co(o, {
                            click: function t(e) {
                                _i(e),
                                Ao(o, {
                                    click: t
                                })
                            }
                        })
                    }
                    T ? Ve = Ki((function() {
                        if (I && !Z) {
                            var t = -i * st / (it + nt);
                            t = i > 0 ? Math.floor(t) : Math.ceil(t),
                            jt += t
                        } else {
                            var n = -(Ue + i);
                            if (n <= 0)
                                jt = Bt;
                            else if (n >= $[Lt - 1])
                                jt = Rt;
                            else
                                for (var o = 0; o < Lt && n >= $[o]; )
                                    jt = o,
                                    n > $[o] && i < 0 && (jt += 1),
                                    o++
                        }
                        ii(e, i),
                        Ut.emit(vi(e) ? "touchEnd" : "dragEnd", Oi(e))
                    }
                    )) : zt && ai(e, i > 0 ? -1 : 1)
                }
            }
            "auto" === t.preventScrollOnTouch && (ge = !1),
            qt && (zt = "?"),
            _t && !He && li()
        }
        function Ti() {
            (N || j).style.height = $[jt + st] - $[jt] + "px"
        }
        function Ci() {
            var t = tt ? (tt + nt) * q / it : q / st;
            return Math.min(Math.ceil(t), q)
        }
        function Ai() {
            if (mt && !le && Le !== ke) {
                var t = ke
                  , e = Le
                  , n = _o;
                for (ke > Le && (t = Le,
                e = ke,
                n = vo); t < e; )
                    n(Ce[t]),
                    t++;
                ke = Le
            }
        }
        function Oi(t) {
            return {
                container: H,
                slideItems: W,
                navContainer: Ae,
                navItems: Ce,
                controlsContainer: be,
                hasControls: re,
                prevButton: we,
                nextButton: Ee,
                items: st,
                slideBy: rt,
                cloneCount: Ot,
                slideCount: q,
                slideCountNew: Lt,
                index: jt,
                indexCached: Ht,
                displayIndex: tn(),
                navCurrentIndex: De,
                navCurrentIndexCached: Ne,
                pages: Le,
                pagesCached: ke,
                sheet: xt,
                isOn: F,
                event: t || {}
            }
        }
        b && console.warn("No slides found in", t.container)
    };
    function ko(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function So(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ko(Object(n), !0).forEach((function(e) {
                Do(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ko(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    function Do(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    const No = function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".content"
          , i = document.querySelector(t)
          , o = document.querySelectorAll(e)
          , s = document.querySelectorAll(n);
        i.addEventListener("click", (function(t) {
            var e = t.target.dataset.id;
            e && (o.forEach((function(t) {
                t.classList.remove("active")
            }
            )),
            t.target.classList.add("active"),
            s.forEach((function(t) {
                t.classList.remove("active")
            }
            )),
            document.getElementById(e).classList.add("active"))
        }
        ))
    };
    const Mo = function() {
        var t = document.querySelectorAll(".progress-step")
          , e = document.querySelectorAll(".progress-marker_spot--underlay")
          , n = document.querySelector(".process_steps")
          , i = "progress-tracker--vertical";
        function o() {
            window.innerWidth >= 992 ? n.classList.remove(i) : n.classList.add(i)
        }
        function s() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
            t[0].classList.add("is-complete"),
            t.forEach((function(t, i) {
                e[i].style.animationDelay = "".concat(n, "ms");
                t.children;
                setTimeout((function() {
                    null !== t.nextElementSibling && r(t.nextElementSibling, "is-complete")
                }
                ), n * i)
            }
            ))
        }
        function r(t, e) {
            if (t.classList)
                t.classList.toggle(e);
            else {
                var n = t.className.split(" ")
                  , i = n.indexOf(e);
                i >= 0 ? n.splice(i, 1) : n.push(e),
                t.className = n.join(" ")
            }
        }
        window.addEventListener("load", o),
        window.addEventListener("resize", o),
        window.addEventListener("load", (function() {
            var t = {
                root: document.querySelector(".process"),
                rootMargin: "0px",
                threshold: .5
            };
            new IntersectionObserver(s,t).observe(n)
        }
        ))
    };
    document.addEventListener("DOMContentLoaded", (function() {
        No(".tabs_services", ".tabs_services-triggers_trigger"),
        Mo(),
        function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".tns-arrows_arrow"
              , n = Lo(So({}, t));
            document.querySelectorAll(e).forEach((function(t) {
                t.addEventListener("click", (function(t) {
                    t.preventDefault()
                }
                ))
            }
            ));
            var i = function(t) {
                t.container.classList.contains("hero_thumbs") && document.querySelectorAll(".hero_thumbs-thumb")[t.index].click()
            }
              , o = function(t) {
                if (console.log(t.index),
                t.container.classList.contains("hero_thumbs")) {
                    var e = document.querySelectorAll(".hero_thumbs-thumb");
                    document.querySelector(".hero").style.backgroundImage = "url(".concat(e[t.index].dataset.bg, ")")
                }
            };
            n.events.on("indexChanged", i),
            n.events.on("indexChanged", o),
            window.addEventListener("resize", n.refresh)
        }({
            container: ".reviews_slider",
            controlsContainer: ".reviews_slider-controls",
            items: 1,
            mode: "carousel",
            controls: !0,
            nav: !1,
            loop: !1,
            responsive: {
                768: {
                    gutter: 10,
                    items: 2
                },
                1200: {
                    gutter: 30
                }
            }
        }),
        Ui()
    }
    ))
}
)();
