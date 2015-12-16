!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
     : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = c.slice
      , e = c.concat
      , f = c.push
      , g = c.indexOf
      , h = {}
      , i = h.toString
      , j = h.hasOwnProperty
      , k = {}
      , l = "1.11.2"
      , m = function(a, b) {
        return new m.fn.init(a,b)
    }
      , n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , o = /^-ms-/
      , p = /-([\da-z])/gi
      , q = function(a, b) {
        return b.toUpperCase()
    }
    ;
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null  != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    },
    m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || m.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null  != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                    c = e[d],
                    g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1,
                    f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {},
                    g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        }
        ,
        isWindow: function(a) {
            return null  != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))
                return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a)
                    return j.call(a, b);
            for (b in a)
                ;
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null  == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null  == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null  != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g)
                    return g.call(b, a, c);
                for (d = b.length,
                c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length
              , d = 0
              , e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c),
                    null  != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c),
                    null  != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b],
            b = a,
            a = f),
            m.isFunction(a) ? (c = d.call(arguments, 2),
            e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }
            ,
            e.guid = a.guid = a.guid || m.guid++,
            e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }),
    m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function r(a) {
        var b = a.length
          , c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = hb(), z = hb(), A = hb(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }
        , C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }
        , K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+","g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }
        , eb = function() {
            m()
        }
        ;
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch (fb) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                 : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            d = d || [],
            k = b.nodeType,
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)
                return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j),
                            !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h),
                                d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h),
                            d
                    } else {
                        if (f[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((j = f[3]) && c.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(j)),
                            d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u,
                    w = b,
                    x = 1 !== k && a,
                    1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a),
                        (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s),
                        s = "[id='" + s + "'] ",
                        l = o.length;
                        while (l--)
                            o[l] = s + rb(o[l]);
                        w = ab.test(a) && pb(b.parentNode) || b,
                        x = o.join(",")
                    }
                    if (x)
                        try {
                            return H.apply(d, w.querySelectorAll(x)),
                            d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function hb() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ib(a) {
            return a[u] = !0,
            a
        }
        function jb(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function kb(a, b) {
            var c = a.split("|")
              , e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function lb(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function nb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function ob(a) {
            return ib(function(b) {
                return b = +b,
                ib(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function pb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = gb.support = {},
        f = gb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = gb.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = g.documentElement,
            e = g.defaultView,
            e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)),
            p = !f(g),
            c.attributes = jb(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = jb(function(a) {
                return a.appendChild(g.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = $.test(g.getElementsByClassName),
            c.getById = jb(function(a) {
                return o.appendChild(a).id = u,
                !g.getElementsByName || !g.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
             : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = $.test(g.querySelectorAll)) && (jb(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            jb(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", P)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = $.test(o.compareDocumentPosition),
            t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
             : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }
             : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f)
                    return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return lb(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }
            ,
            g) : n
        }
        ,
        gb.matches = function(a, b) {
            return gb(a, null , null , b)
        }
        ,
        gb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(U, "='$1']"),
            !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return gb(b, n, null , [a]).length > 0
        }
        ,
        gb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        gb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        gb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        gb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null ,
            a
        }
        ,
        e = gb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null  : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                     : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = gb.attr(d, a);
                        return null  == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                     : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                k = q[u] || (q[u] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                m = j[0] === w && j[2],
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                    l === b))
                                        break;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ib(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(R, "$1"));
                    return d[u] ? ib(function(a, b, c, e) {
                        var f, g = d(a, null , e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null , f, c),
                        b[0] = null ,
                        !c.pop()
                    }
                }),
                has: ib(function(a) {
                    return function(b) {
                        return gb(a, b).length > 0
                    }
                }),
                contains: ib(function(a) {
                    return a = a.replace(cb, db),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ib(function(a) {
                    return W.test(a || "") || gb.error("unsupported lang: " + a),
                    a = a.replace(cb, db).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null  == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: ob(function() {
                    return [0]
                }),
                last: ob(function(a, b) {
                    return [b - 1]
                }),
                eq: ob(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: ob(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: ob(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = mb(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = nb(b);
        function qb() {}
        qb.prototype = d.filters = d.pseudos,
        d.setFilters = new qb,
        g = gb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = T.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0)
        }
        ;
        function rb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function sb(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
             : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function tb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
             : a[0]
        }
        function ub(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                gb(a, b[d], c);
            return c
        }
        function vb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null  != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)),
            e && !e[u] && (e = wb(e, f)),
            ib(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ub(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : vb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = vb(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null , r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = vb(r === g ? r.splice(o, r.length) : r),
                    e ? e(null , g, r, i) : H.apply(g, r)
            })
        }
        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function(a) {
                return a === b
            }, h, !0), l = sb(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null ,
                e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [sb(tb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null , a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a))
                    }
                    m.push(c)
                }
            return tb(m)
        }
        function yb(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null  == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null  != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--,
                    f && r.push(l))
                }
                if (p += q,
                c && q !== p) {
                    m = 0;
                    while (o = b[m++])
                        o(r, s, g, h);
                    if (f) {
                        if (p > 0)
                            while (q--)
                                r[q] || s[q] || (s[q] = F.call(i));
                        s = vb(s)
                    }
                    H.apply(i, s),
                    k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i)
                }
                return k && (w = v,
                j = t),
                r
            }
            ;
            return c ? ib(f) : f
        }
        return h = gb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = xb(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, yb(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = gb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && rb(j),
                        !a)
                            return H.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = jb(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        jb(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || kb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && jb(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || kb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        jb(function(a) {
            return null  == a.getAttribute("disabled")
        }) || kb(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        gb
    }(a);
    m.find = s,
    m.expr = s.selectors,
    m.expr[":"] = m.expr.pseudos,
    m.unique = s.uniqueSort,
    m.text = s.getText,
    m.isXMLDoc = s.isXML,
    m.contains = s.contains;
    var t = m.expr.match.needsContext
      , u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , v = /^.[^:#\[\.,]*$/;
    function w(a, b, c) {
        if (m.isFunction(b))
            return m.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return m.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (v.test(b))
                return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    m.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(m(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (m.contains(d[b], this))
                            return !0
                }));
            for (b = 0; e > b; b++)
                m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null , a, null ] : z.exec(a),
            !c || !c[1] && b)
                return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b,
                m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)),
                u.test(c[1]) && m.isPlainObject(b))
                    for (c in b)
                        m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = y.getElementById(c[2]),
            d && d.parentNode) {
                if (d.id !== c[2])
                    return x.find(a);
                this.length = 1,
                this[0] = d
            }
            return this.context = y,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        m.makeArray(a, this))
    }
    ;
    A.prototype = m.fn,
    x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/
      , C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    m.extend({
        dir: function(a, b, c) {
            var d = []
              , e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))
                1 === e.nodeType && d.push(e),
                e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    m.fn.extend({
        has: function(a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null  == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = m.filter(d, e)),
            this.length > 1 && (C[a] || (e = m.unique(e)),
            B.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    });
    var E = /\S+/g
      , F = {};
    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (c = a.memory && l,
            d = !0,
            f = g || 0,
            g = 0,
            e = h.length,
            b = !0; h && e > f; f++)
                if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            b = !1,
            h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }
        , k = {
            add: function() {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function(b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments),
                    b ? e = h.length : c && (g = d,
                    j(c))
                }
                return this
            },
            remove: function() {
                return h && m.each(arguments, function(a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1)
                        h.splice(d, 1),
                        b && (e >= d && e--,
                        f >= d && f--)
                }),
                this
            },
            has: function(a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
            },
            empty: function() {
                return h = [],
                e = 0,
                this
            },
            disable: function() {
                return h = i = c = void 0,
                this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return i = void 0,
                c || k.disable(),
                this
            },
            locked: function() {
                return !i
            },
            fireWith: function(a, c) {
                return !h || d && !i || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                b ? i.push(c) : j(c)),
                this
            },
            fire: function() {
                return k.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return k
    }
    ,
    m.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return m.Deferred(function(c) {
                        m.each(b, function(b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null  != a ? m.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            m.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? d.call(arguments) : e,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }
            , i, j, k;
            if (e > 1)
                for (i = new Array(e),
                j = new Array(e),
                k = new Array(e); e > b; b++)
                    c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a),
        this
    }
    ,
    m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body)
                    return setTimeout(m.ready);
                m.isReady = !0,
                a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]),
                m.fn.triggerHandler && (m(y).triggerHandler("ready"),
                m(y).off("ready")))
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1),
        a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J),
        a.detachEvent("onload", J))
    }
    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(),
        m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(),
            "complete" === y.readyState)
                setTimeout(m.ready);
            else if (y.addEventListener)
                y.addEventListener("DOMContentLoaded", J, !1),
                a.addEventListener("load", J, !1);
            else {
                y.attachEvent("onreadystatechange", J),
                a.attachEvent("onload", J);
                var c = !1;
                try {
                    c = null  == a.frameElement && y.documentElement
                } catch (d) {}
                c && c.doScroll && !function e() {
                    if (!m.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        I(),
                        m.ready()
                    }
                }()
            }
        return H.promise(b)
    }
    ;
    var K = "undefined", L;
    for (L in m(k))
        break;
    k.ownLast = "0" !== L,
    k.inlineBlockNeedsLayout = !1,
    m(function() {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0],
        c && c.style && (b = y.createElement("div"),
        d = y.createElement("div"),
        d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        c.appendChild(d).appendChild(b),
        typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
        a && (c.style.zoom = 1)),
        c.removeChild(d))
    }),
    function() {
        var a = y.createElement("div");
        if (null  == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                k.deleteExpando = !1
            }
        }
        a = null
    }(),
    m.acceptData = function(a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()]
          , c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    }
    ;
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , N = /([A-Z])/g;
    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null  : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else
                c = void 0
        }
        return c
    }
    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || m.guid++ : h),
                j[k] || (j[k] = i ? {} : {
                    toJSON: m.noop
                }),
                ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)),
                g = j[k],
                e || (g.data || (g.data = {}),
                g = g.data),
                void 0 !== d && (g[m.camelCase(b)] = d),
                "string" == typeof b ? (f = g[b],
                null  == f && (f = g[m.camelCase(b)])) : f = g,
                f
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b),
                    b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null )
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando],
            !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }),
    m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f),
                1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)),
                        O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }),
    m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = m._data(a, b),
            c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = m._queueHooks(a, b)
              , g = function() {
                m.dequeue(a, b)
            }
            ;
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"),
                    m._removeData(a, c)
                })
            })
        }
    }),
    m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            }
            ;
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = m._data(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , T = ["Top", "Right", "Bottom", "Left"]
      , U = function(a, b) {
        return a = b || a,
        "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }
      , V = m.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null  == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c)
                m.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        m.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null ) : (j = b,
        b = function(a, b, c) {
            return j.call(m(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , W = /^(?:checkbox|radio)$/i;
    !function() {
        var a = y.createElement("input")
          , b = y.createElement("div")
          , c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        k.leadingWhitespace = 3 === b.firstChild.nodeType,
        k.tbody = !b.getElementsByTagName("tbody").length,
        k.htmlSerialize = !!b.getElementsByTagName("link").length,
        k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML,
        a.type = "checkbox",
        a.checked = !0,
        c.appendChild(a),
        k.appendChecked = a.checked,
        b.innerHTML = "<textarea>x</textarea>",
        k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue,
        c.appendChild(b),
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        k.noCloneEvent = !0,
        b.attachEvent && (b.attachEvent("onclick", function() {
            k.noCloneEvent = !1
        }),
        b.cloneNode(!0).click()),
        null  == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
            (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"),
            k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i
      , Y = /^key/
      , Z = /^(?:mouse|pointer|contextmenu)|click/
      , $ = /^(?:focusinfocus|focusoutblur)$/
      , _ = /^([^.]*)(?:\.(.+)|)$/;
    function ab() {
        return !0
    }
    function bb() {
        return !1
    }
    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c,
                c = i.handler,
                e = i.selector),
                c.guid || (c.guid = m.guid++),
                (g = r.events) || (g = r.events = {}),
                (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }
                ,
                k.elem = a),
                b = (b || "").match(E) || [""],
                h = b.length;
                while (h--)
                    f = _.exec(b[h]) || [],
                    o = q = f[1],
                    p = (f[2] || "").split(".").sort(),
                    o && (j = m.event.special[o] || {},
                    o = (e ? j.delegateType : j.bindType) || o,
                    j = m.event.special[o] || {},
                    l = m.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && m.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i),
                    (n = g[o]) || (n = g[o] = [],
                    n.delegateCount = 0,
                    j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                    e ? n.splice(n.delegateCount++, 0, l) : n.push(l),
                    m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""],
                j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = m.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        n = k[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        i = f = n.length;
                        while (f--)
                            g = n[f],
                            !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1),
                            g.selector && n.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle),
                        delete k[o])
                    } else
                        for (o in k)
                            m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle,
                m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y,
            3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."),
            p = q.shift(),
            q.sort()),
            g = p.indexOf(":") < 0 && "on" + p,
            b = b[m.expando] ? b : new m.Event(p,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = q.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            b.result = void 0,
            b.target || (b.target = d),
            c = null  == c ? [b] : m.makeArray(c, [b]),
            k = m.event.special[p] || {},
            e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p,
                    $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)
                        o.push(h),
                        l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped())
                    b.type = n > 1 ? i : k.bindType || p,
                    f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"),
                    f && f.apply(h, c),
                    f = g && h[g],
                    f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c),
                    b.result === !1 && b.preventDefault());
                if (b.type = p,
                !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g],
                    l && (d[g] = null ),
                    m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0,
                    l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e,
                        a.data = e.data,
                        c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i),
                        void 0 !== c && (a.result = c) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [],
                        f = 0; h > f; f++)
                            d = b[f],
                            c = d.selector + " ",
                            void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null , [i]).length),
                            e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[m.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new m.Event(f),
            b = d.length;
            while (b--)
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = f.srcElement || y),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null  == a.which && (a.which = null  != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null  == a.pageX && null  != b.clientX && (d = a.target.ownerDocument || y,
                e = d.documentElement,
                c = d.body,
                a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0),
                a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cb() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cb() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null , b) : m.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
     : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null ),
        a.detachEvent(d, c))
    }
    ,
    m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a,
        b && m.extend(this, b),
        this.timeStamp = a && a.timeStamp || m.now(),
        void (this[m.expando] = !0)) : new m.Event(a,b)
    }
    ,
    m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab,
            a && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                  , c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }),
                m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }),
    k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }),
            m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                m.event.simulate("change", this, a, !0)
            })),
            !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }),
                m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"),
            !X.test(this.nodeName)
        }
    }),
    k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        }
        ;
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = m._data(d, b);
                e || d.addEventListener(a, c, !0),
                m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0),
                m._removeData(d, b))
            }
        }
    }),
    m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (f in a)
                    this.on(f, b, c, a[f], e);
                return this
            }
            if (null  == c && null  == d ? (d = b,
            c = b = void 0) : null  == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            d === !1)
                d = bb;
            else if (!d)
                return this;
            return 1 === e && (g = d,
            d = function(a) {
                return m().off(a),
                g.apply(this, arguments)
            }
            ,
            d.guid = g.guid || (g.guid = m.guid++)),
            this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b,
            b = void 0),
            c === !1 && (c = bb),
            this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });
    function db(a) {
        var b = eb.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , fb = / jQuery\d+="(?:null|\d+)"/g
      , gb = new RegExp("<(?:" + eb + ")[\\s/>]","i")
      , hb = /^\s+/
      , ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , jb = /<([\w:]+)/
      , kb = /<tbody/i
      , lb = /<|&#?\w+;/
      , mb = /<(?:script|style|link)/i
      , nb = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ob = /^$|\/(?:java|ecma)script/i
      , pb = /^true\/(.*)/
      , qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , rb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , sb = db(y)
      , tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option,
    rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead,
    rb.th = rb.td;
    function ub(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
            c = a.childNodes || a; null  != (d = c[e]); e++)
                !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }
    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }
    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function xb(a) {
        return a.type = (null  !== m.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function zb(a, b) {
        for (var c, d = 0; null  != (c = a[d]); d++)
            m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }
    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; e > d; d++)
                        m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }
    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
            !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events)
                    m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text,
            yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML,
            tb.removeChild(f = tb.firstChild)),
            !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f),
                h = ub(a),
                g = 0; null  != (e = h[g]); ++g)
                    d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a),
                    d = d || ub(f),
                    g = 0; null  != (e = h[g]); g++)
                        Ab(e, d[g]);
                else
                    Ab(a, f);
            return d = ub(f, "script"),
            d.length > 0 && zb(d, !i && ub(a, "script")),
            d = h = e = null ,
            f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q],
                f || 0 === f)
                    if ("object" === m.type(f))
                        m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                        h = h || o.appendChild(b.createElement("div")),
                        i = (jb.exec(f) || ["", ""])[1].toLowerCase(),
                        l = rb[i] || rb._default,
                        h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2],
                        e = l[0];
                        while (e--)
                            h = h.lastChild;
                        if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])),
                        !k.tbody) {
                            f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild,
                            e = f && f.childNodes.length;
                            while (e--)
                                m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                        }
                        m.merge(p, h.childNodes),
                        h.textContent = "";
                        while (h.firstChild)
                            h.removeChild(h.firstChild);
                        h = o.lastChild
                    } else
                        p.push(b.createTextNode(f));
            h && o.removeChild(h),
            k.appendChecked || m.grep(ub(p, "input"), vb),
            q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f),
                h = ub(o.appendChild(f), "script"),
                g && zb(h),
                c)) {
                    e = 0;
                    while (f = h[e++])
                        ob.test(f.type || "") && c.push(f)
                }
            return h = null ,
            o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null  != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i],
                g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f],
                    l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null ,
                    c.push(f))
                }
        }
    }),
    m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null , a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null  != (c = d[e]); e++)
                b || 1 !== c.nodeType || m.cleanData(ub(c)),
                c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null  != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null  == a ? !1 : a,
            b = null  == b ? a : b,
            this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (m.cleanData(ub(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null , a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                m.cleanData(ub(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p))
                return this.each(function(c) {
                    var d = n.eq(c);
                    q && (a[0] = p.call(this, c, d.html())),
                    d.domManip(a, b)
                });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this),
            c = i.firstChild,
            1 === i.childNodes.length && (i = c),
            c)) {
                for (g = m.map(ub(i, "script"), xb),
                f = g.length; l > j; j++)
                    d = i,
                    j !== o && (d = m.clone(d, !0, !0),
                    f && m.merge(g, ub(d, "script"))),
                    b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument,
                    m.map(g, yb),
                    j = 0; f > j; j++)
                        d = g[j],
                        ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }),
    m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0),
                m(g[d])[b](c),
                f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};
    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(),
        f
    }
    function Fb(a) {
        var b = y
          , c = Db[a];
        return c || (c = Eb(a, b),
        "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = (Cb[0].contentWindow || Cb[0].contentDocument).document,
        b.write(),
        b.close(),
        c = Eb(a, b),
        Cb.detach()),
        Db[a] = c),
        c
    }
    !function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null  != a)
                return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0],
            c && c.style ? (b = y.createElement("div"),
            d = y.createElement("div"),
            d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            b.appendChild(y.createElement("div")).style.width = "5px",
            a = 3 !== b.offsetWidth),
            c.removeChild(d),
            a) : void 0
        }
    }();
    var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$","i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null ) : a.getComputedStyle(b, null )
    }
    ,
    Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)),
        Hb.test(g) && Gb.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 === g ? g : g + ""
    }
    ) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
    }
    ,
    Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a),
        g = c ? c[b] : void 0,
        null  == g && h && h[b] && (g = h[b]),
        Hb.test(g) && !Kb.test(b) && (d = h.left,
        e = a.runtimeStyle,
        f = e && e.left,
        f && (e.left = a.currentStyle.left),
        h.left = "fontSize" === b ? "1em" : g,
        g = h.pixelLeft + "px",
        h.left = d,
        f && (e.left = f)),
        void 0 === g ? g : g + "" || "auto"
    }
    );
    function Lb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null  != c)
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    !function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        d = b.getElementsByTagName("a")[0],
        c = d && d.style) {
            c.cssText = "float:left;opacity:.5",
            k.opacity = "0.5" === c.opacity,
            k.cssFloat = !!c.cssFloat,
            b.style.backgroundClip = "content-box",
            b.cloneNode(!0).style.backgroundClip = "",
            k.clearCloneStyle = "content-box" === b.style.backgroundClip,
            k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing,
            m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null  == g && i(),
                    g
                },
                boxSizingReliable: function() {
                    return null  == f && i(),
                    f
                },
                pixelPosition: function() {
                    return null  == e && i(),
                    e
                },
                reliableMarginRight: function() {
                    return null  == h && i(),
                    h
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0],
                c && c.style && (b = y.createElement("div"),
                d = y.createElement("div"),
                d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                c.appendChild(d).appendChild(b),
                b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                e = f = !1,
                h = !0,
                a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null ) || {}).top,
                f = "4px" === (a.getComputedStyle(b, null ) || {
                    width: "4px"
                }).width,
                i = b.appendChild(y.createElement("div")),
                i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                i.style.marginRight = i.style.width = "0",
                b.style.width = "1px",
                h = !parseFloat((a.getComputedStyle(i, null ) || {}).marginRight),
                b.removeChild(i)),
                b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                i = b.getElementsByTagName("td"),
                i[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                g = 0 === i[0].offsetHeight,
                g && (i[0].style.display = "",
                i[1].style.display = "none",
                g = 0 === i[0].offsetHeight),
                c.removeChild(d))
            }
        }
    }(),
    m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var Mb = /alpha\([^)]*\)/i
      , Nb = /opacity\s*=\s*([^)]*)/
      , Ob = /^(none|table(?!-c[ea]).+)/
      , Pb = new RegExp("^(" + S + ")(.*)$","i")
      , Qb = new RegExp("^([+-])=(" + S + ")","i")
      , Rb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Sb = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Tb = ["Webkit", "O", "Moz", "ms"];
    function Ub(a, b) {
        if (b in a)
            return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1)
          , d = b
          , e = Tb.length;
        while (e--)
            if (b = Tb[e] + c,
            b in a)
                return b;
        return d
    }
    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = m._data(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d),
            (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += m.css(a, c + T[f], !0, e)),
            d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)),
            "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e),
            "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }
    function Yb(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Ib(a)
          , g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null  == e) {
            if (e = Jb(a, b, f),
            (0 > e || null  == e) && (e = a.style[b]),
            Hb.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)),
                g = m.cssHooks[b] || m.cssHooks[h],
                void 0 === c)
                    return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)),
                f = "number"),
                null  != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"),
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)),
            g = m.cssHooks[b] || m.cssHooks[h],
            g && "get" in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = Jb(a, b, d)),
            "normal" === f && b in Sb && (f = Sb[b]),
            "" === c || c ? (e = parseFloat(f),
            c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }),
    m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }),
    m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }),
    m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }),
    m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Vb(this, !0)
        },
        hide: function() {
            return Vb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });
    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a,b,c,d,e)
    }
    m.Tween = Zb,
    Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Zb.propHooks._default.set(this),
            this
        }
    },
    Zb.prototype.init.prototype = Zb.prototype,
    Zb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null  == a.elem[a.prop] || a.elem.style && null  != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null  != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    m.fx = Zb.prototype.init,
    m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$","i"), cc = /queueHooks$/, dc = [ic], ec = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = bc.exec(b)
              , f = e && e[3] || (m.cssNumber[a] ? "" : "px")
              , g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do
                    h = h || ".5",
                    g /= h,
                    m.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    function fc() {
        return setTimeout(function() {
            $b = void 0
        }),
        $b = m.now()
    }
    function gc(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = T[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"),
        null  == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        n.always(function() {
            n.always(function() {
                h.unqueued--,
                m.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY],
        j = m.css(a, "display"),
        l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j,
        "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        c.overflow && (p.overflow = "hidden",
        k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0],
            p.overflowX = c.overflow[1],
            p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            ac.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else
                j = void 0;
        if (m.isEmptyObject(o))
            "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}),
            f && (r.hidden = !q),
            q ? m(a).show() : n.done(function() {
                m(a).hide()
            }),
            n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o)
                    m.style(a, b, o[b])
            });
            for (d in o)
                g = hc(q ? r[d] : 0, d, n),
                d in r || (r[d] = g.start,
                q && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c),
            e = b[d],
            f = a[c],
            m.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = m.cssHooks[d],
            g && "expand" in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function kc(a, b, c) {
        var d, e, f = 0, g = dc.length, h = m.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }
        , j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $b || fc(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts))
                return d;
        return m.map(k, hc, j),
        m.isFunction(j.opts.start) && j.opts.start.call(a, j),
        m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
        tweener: function(a, b) {
            m.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                ec[c] = ec[c] || [],
                ec[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? dc.unshift(a) : dc.push(a)
        }
    }),
    m.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default,
        (null  == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            m.isFunction(d.old) && d.old.call(this),
            d.queue && m.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    m.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = m.isEmptyObject(a)
              , f = m.speed(b, c, d)
              , g = function() {
                var b = kc(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0)
            }
            ;
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            }
            ;
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null  != a && a + "queueHooks"
                  , f = m.timers
                  , g = m._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && cc.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null  != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && m.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                m.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    m.each(["toggle", "show", "hide"], function(a, b) {
        var c = m.fn[b];
        m.fn[b] = function(a, d, e) {
            return null  == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
        }
    }),
    m.each({
        slideDown: gc("show"),
        slideUp: gc("hide"),
        slideToggle: gc("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        m.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    m.timers = [],
    m.fx.tick = function() {
        var a, b = m.timers, c = 0;
        for ($b = m.now(); c < b.length; c++)
            a = b[c],
            a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(),
        $b = void 0
    }
    ,
    m.fx.timer = function(a) {
        m.timers.push(a),
        a() ? m.fx.start() : m.timers.pop()
    }
    ,
    m.fx.interval = 13,
    m.fx.start = function() {
        _b || (_b = setInterval(m.fx.tick, m.fx.interval))
    }
    ,
    m.fx.stop = function() {
        clearInterval(_b),
        _b = null
    }
    ,
    m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    m.fn.delay = function(a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ,
    function() {
        var a, b, c, d, e;
        b = y.createElement("div"),
        b.setAttribute("className", "t"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        d = b.getElementsByTagName("a")[0],
        c = y.createElement("select"),
        e = c.appendChild(y.createElement("option")),
        a = b.getElementsByTagName("input")[0],
        d.style.cssText = "top:1px",
        k.getSetAttribute = "t" !== b.className,
        k.style = /top/.test(d.getAttribute("style")),
        k.hrefNormalized = "/a" === d.getAttribute("href"),
        k.checkOn = !!a.value,
        k.optSelected = e.selected,
        k.enctype = !!y.createElement("form").enctype,
        c.disabled = !0,
        k.optDisabled = !e.disabled,
        a = y.createElement("input"),
        a.setAttribute("value", ""),
        k.input = "" === a.getAttribute("value"),
        a.value = "t",
        a.setAttribute("type", "radio"),
        k.radioValue = "t" === a.value
    }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = m.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a,
                        null  == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                            return null  == a ? "" : a + ""
                        })),
                        b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()],
                        b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()],
                    b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(lc, "") : null  == c ? "" : c)
            }
        }
    }),
    m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null  != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null  : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null  !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--)
                        if (d = e[g],
                        m.inArray(m.valHooks.option.get(d), f) >= 0)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        },
        k.checkOn || (m.valHooks[this].get = function(a) {
            return null  === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }),
    m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(),
                d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)),
                void 0 === c ? d && "get" in d && null  !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b),
                null  == e ? void 0 : e) : null  !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = m.propFix[c] || c,
                    m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""),
                    a.removeAttribute(qc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    nc = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = oc[b],
            oc[b] = e,
            e = null  != c(a, b, d) ? b.toLowerCase() : null ,
            oc[b] = f),
            e
        }
         : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }),
    rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }),
    qc || (mc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    },
    oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }
    ,
    m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    },
    m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    },
    m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        }
    })),
    k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i
      , tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (b) {}
            })
        }
    }),
    m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !m.isXMLDoc(a),
                f && (b = m.propFix[b] || b,
                e = m.propHooks[b]),
                void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null  !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }),
    k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        }
    }),
    m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }),
    k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).addClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).removeClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            }
             : function() {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    }),
    m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null , a, c) : this.trigger(b)
        }
    }),
    m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null , b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null , b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now()
      , wc = /\?/
      , xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null , e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a : (c = e || b,
            d += !f - !e,
            "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }
    ,
    m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null ;
        try {
            a.DOMParser ? (d = new DOMParser,
            c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
            c.async = "false",
            c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b),
        c
    }
    ;
    var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"),
        zc.href = "",
        zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];
    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Mc(a, b, c, d) {
        var e = {}
          , f = a === Ic;
        function g(h) {
            var i;
            return e[h] = !0,
            m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c),
        a
    }
    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cc.exec(f))
                                j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null  == b ? null  : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b),
                    x(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"),
            k.type = b.method || b.type || k.method || k.type,
            k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""],
            null  == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()),
            k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))),
            k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)),
            Mc(Hc, k, b, v),
            2 === t)
                return v;
            h = m.event && k.global,
            h && 0 === m.active++ && m.event.trigger("ajaxStart"),
            k.type = k.type.toUpperCase(),
            k.hasContent = !Ec.test(k.type),
            e = k.url,
            k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data,
            delete k.data),
            k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)),
            k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]),
            m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])),
            (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers)
                v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1,
                h && n.trigger("ajaxSend", [v, k]),
                k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1,
                    i.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w)
                }
            } else
                x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2,
                g && clearTimeout(g),
                i = void 0,
                f = d || "",
                v.readyState = a > 0 ? 4 : 0,
                j = a >= 200 && 300 > a || 304 === a,
                c && (u = Oc(k, v, c)),
                u = Pc(k, u, v, j),
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"),
                w && (m.lastModified[e] = w),
                w = v.getResponseHeader("etag"),
                w && (m.etag[e] = w)),
                204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state,
                r = u.data,
                s = u.error,
                j = !s)) : (s = x,
                (a || !x) && (x = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || x) + "",
                j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                v.statusCode(q),
                q = void 0,
                h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                p.fireWith(l, [v, x]),
                h && (n.trigger("ajaxComplete", [v, k]),
                --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }),
    m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            }
             : function() {
                var b = m(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }
    ,
    m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    }
    ;
    var Qc = /%20/g
      , Rc = /\[\]$/
      , Sc = /\r?\n/g
      , Tc = /^(?:submit|button|image|reset|file)$/i
      , Uc = /^(?:input|select|textarea|keygen)/i;
    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b))
            m.each(b, function(b, e) {
                c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== m.type(b))
            d(a, b);
        else
            for (e in b)
                Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = m.isFunction(b) ? b() : null  == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        }
        ;
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional),
        m.isArray(a) || a.jquery && !m.isPlainObject(a))
            m.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }
    ,
    m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null  == c ? null  : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }).get()
        }
    }),
    m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    }
     : Zc;
    var Wc = 0
      , Xc = {}
      , Yc = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Xc)
            Xc[a](void 0, !0)
    }),
    k.cors = !!Yc && "withCredentials" in Yc,
    Yc = k.ajax = !!Yc,
    Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password),
                    a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null ),
                    b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g],
                            b = void 0,
                            f.onreadystatechange = m.noop,
                            e)
                                4 !== f.readyState && f.abort();
                            else {
                                j = {},
                                h = f.status,
                                "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }
                    ,
                    a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });
    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a),
                a
            }
        }
    }),
    m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null ,
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null ,
                        c || e(200, "success"))
                    }
                    ,
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = []
      , ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0,
            a
        }
    }),
    m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || m.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            _c.push(e)),
            g && m.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null ;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || y;
        var d = u.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e),
        e && e.length && m(e).remove(),
        m.merge([], d.childNodes))
    }
    ;
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd)
            return bd.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)),
        a = a.slice(0, h)),
        m.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (f = "POST"),
        g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments,
            g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    var cd = a.document.documentElement;
    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = m.css(a, "top"),
            i = m.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            m.isFunction(b) && (b = b.call(a, c, h)),
            null  != b.top && (n.top = b.top - h.top + g),
            null  != b.left && (n.left = b.left - h.left + e),
            "using" in b ? b.using.call(a, n) : l.css(n)
        }
    },
    m.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    m.offset.setOffset(this, a, b)
                });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement,
                m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()),
                c = dd(f),
                {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                m.nodeName(a[0], "html") || (c = a.offset()),
                c.top += m.css(a[0], "borderTopWidth", !0),
                c.left += m.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))
                    a = a.offsetParent;
                return a || cd
            })
        }
    }),
    m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null )
        }
    }),
    m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
            return c ? (c = Jb(a, b),
            Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }),
    m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null )
            }
        })
    }),
    m.fn.size = function() {
        return this.length
    }
    ,
    m.fn.andSelf = m.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ed = a.jQuery
      , fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd),
        b && a.jQuery === m && (a.jQuery = ed),
        m
    }
    ,
    typeof b === K && (a.jQuery = a.$ = m),
    m
});
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
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
        a(this).one(a.support.transition.end, function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        }
        ;
        return setTimeout(e, b),
        this
    }
    ,
    a(function() {
        a.support.transition = b()
    })
}(jQuery),
+function(a) {
    "use strict";
    var b = '[data-dismiss="alert"]'
      , c = function(c) {
        a(c).on("click", b, this.close)
    }
    ;
    c.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove()
        }
        var d = a(this)
          , e = d.attr("data-target");
        e || (e = d.attr("href"),
        e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(),
        f.length || (f = d.hasClass("alert") ? d : d.parent()),
        f.trigger(b = a.Event("close.bs.alert")),
        b.isDefaultPrevented() || (f.removeClass("in"),
        a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    }
    ;
    var d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)),
            "string" == typeof b && e[b].call(d)
        })
    }
    ,
    a.fn.alert.Constructor = c,
    a.fn.alert.noConflict = function() {
        return a.fn.alert = d,
        this
    }
    ,
    a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(jQuery),
+function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c),
        this.options = a.extend({}, b.DEFAULTS, d),
        this.isLoading = !1
    }
    ;
    b.DEFAULTS = {
        loadingText: "loading..."
    },
    b.prototype.setState = function(b) {
        var c = "disabled"
          , d = this.$element
          , e = d.is("input") ? "val" : "html"
          , f = d.data();
        b += "Text",
        f.resetText || d.data("resetText", d[e]()),
        d[e](f[b] || this.options[b]),
        setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0,
            d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1,
            d.removeClass(c).removeAttr(c))
        }, this), 0)
    }
    ,
    b.prototype.toggle = function() {
        var a = !0
          , b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")),
            a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    }
    ;
    var c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.button")
              , f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this,f)),
            "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    }
    ,
    a.fn.button.Constructor = b,
    a.fn.button.noConflict = function() {
        return a.fn.button = c,
        this
    }
    ,
    a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")),
        c.button("toggle"),
        b.preventDefault()
    })
}(jQuery),
+function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = c,
        this.paused = this.sliding = this.interval = this.$active = this.$items = null ,
        "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    }
    ;
    b.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    },
    b.prototype.cycle = function(b) {
        return b || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    b.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"),
        this.$items = this.$active.parent().children(),
        this.$items.index(this.$active)
    }
    ,
    b.prototype.to = function(b) {
        var c = this
          , d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }
    ,
    b.prototype.pause = function(b) {
        return b || (this.paused = !0),
        this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    b.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }
    ,
    b.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }
    ,
    b.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active")
          , e = c || d[b]()
          , f = this.interval
          , g = "next" == b ? "left" : "right"
          , h = "next" == b ? "first" : "last"
          , i = this;
        if (!e.length) {
            if (!this.options.wrap)
                return;
            e = this.$element.find(".item")[h]()
        }
        if (e.hasClass("active"))
            return this.sliding = !1;
        var j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        });
        return this.$element.trigger(j),
        j.isDefaultPrevented() ? void 0 : (this.sliding = !0,
        f && this.pause(),
        this.$indicators.length && (this.$indicators.find(".active").removeClass("active"),
        this.$element.one("slid.bs.carousel", function() {
            var b = a(i.$indicators.children()[i.getActiveIndex()]);
            b && b.addClass("active")
        })),
        a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b),
        e[0].offsetWidth,
        d.addClass(g),
        e.addClass(g),
        d.one(a.support.transition.end, function() {
            e.removeClass([b, g].join(" ")).addClass("active"),
            d.removeClass(["active", g].join(" ")),
            i.sliding = !1,
            setTimeout(function() {
                i.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"),
        e.addClass("active"),
        this.sliding = !1,
        this.$element.trigger("slid.bs.carousel")),
        f && this.cycle(),
        this)
    }
    ;
    var c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.carousel")
              , f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c)
              , g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this,f)),
            "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    ,
    a.fn.carousel.Constructor = b,
    a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c,
        this
    }
    ,
    a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
        var c, d = a(this), e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")), f = a.extend({}, e.data(), d.data()), g = d.attr("data-slide-to");
        g && (f.interval = !1),
        e.carousel(f),
        (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g),
        b.preventDefault()
    }),
    a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var b = a(this);
            b.carousel(b.data())
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c),
        this.options = a.extend({}, b.DEFAULTS, d),
        this.transitioning = null ,
        this.options.parent && (this.$parent = a(this.options.parent)),
        this.options.toggle && this.toggle()
    }
    ;
    b.DEFAULTS = {
        toggle: !0
    },
    b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }
    ,
    b.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b),
            !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning)
                        return;
                    c.collapse("hide"),
                    d || c.data("bs.collapse", null )
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0),
                this.transitioning = 1;
                var f = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),
                    this.transitioning = 0,
                    this.$element.trigger("shown.bs.collapse")
                }
                ;
                if (!a.support.transition)
                    return f.call(this);
                var g = a.camelCase(["scroll", e].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
            }
        }
    }
    ,
    b.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b),
            !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),
                this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0,
                    this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                }
                ;
                return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }
    ,
    b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ;
    var c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.collapse")
              , f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            !e && f.toggle && "show" == c && (c = !c),
            e || d.data("bs.collapse", e = new b(this,f)),
            "string" == typeof c && e[c]()
        })
    }
    ,
    a.fn.collapse.Constructor = b,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c,
        this
    }
    ,
    a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
        var c, d = a(this), e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a(e), g = f.data("bs.collapse"), h = g ? "toggle" : d.data(), i = d.attr("data-parent"), j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"),
        d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")),
        f.collapse(h)
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        a(d).remove(),
        a(e).each(function() {
            var d = c(a(this))
              , e = {
                relatedTarget: this
            };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)),
            b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        })
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"),
        c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    var d = ".dropdown-backdrop"
      , e = "[data-toggle=dropdown]"
      , f = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    }
    ;
    f.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e)
              , g = f.hasClass("open");
            if (b(),
            !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)),
                d.isDefaultPrevented())
                    return;
                f.toggleClass("open").trigger("shown.bs.dropdown", h),
                e.focus()
            }
            return !1
        }
    }
    ,
    f.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(),
            b.stopPropagation(),
            !d.is(".disabled, :disabled")) {
                var f = c(d)
                  , g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode)
                    return 27 == b.which && f.find(e).focus(),
                    d.click();
                var h = " li:not(.divider):visible a"
                  , i = f.find("[role=menu]" + h + ", [role=listbox]" + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--,
                    40 == b.keyCode && j < i.length - 1 && j++,
                    ~j || (j = 0),
                    i.eq(j).focus()
                }
            }
        }
    }
    ;
    var g = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this)
              , d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new f(this)),
            "string" == typeof b && d[b].call(c)
        })
    }
    ,
    a.fn.dropdown.Constructor = f,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = g,
        this
    }
    ,
    a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu], [role=listbox]", f.prototype.keydown)
}(jQuery),
+function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c,
        this.$element = a(b),
        this.$backdrop = this.isShown = null ,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    }
    ;
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    b.prototype.toggle = function(a) {
        return this[this.isShown ? "hide" : "show"](a)
    }
    ,
    b.prototype.show = function(b) {
        var c = this
          , d = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(d),
        this.isShown || d.isDefaultPrevented() || (this.isShown = !0,
        this.escape(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
        this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body),
            c.$element.show().scrollTop(0),
            d && c.$element[0].offsetWidth,
            c.$element.addClass("in").attr("aria-hidden", !1),
            c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
                c.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
        }))
    }
    ,
    b.prototype.hide = function(b) {
        b && b.preventDefault(),
        b = a.Event("hide.bs.modal"),
        this.$element.trigger(b),
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        a(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"),
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }
    ,
    b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
        }, this))
    }
    ,
    b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }
    ,
    b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
        this.backdrop(function() {
            a.removeBackdrop(),
            a.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    b.prototype.backdrop = function(b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body),
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)),
            d && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
                return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else
            !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    }
    ;
    var c = a.fn.modal;
    a.fn.modal = function(c, d) {
        return this.each(function() {
            var e = a(this)
              , f = e.data("bs.modal")
              , g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this,g)),
            "string" == typeof c ? f[c](d) : g.show && f.show(d)
        })
    }
    ,
    a.fn.modal.Constructor = b,
    a.fn.modal.noConflict = function() {
        return a.fn.modal = c,
        this
    }
    ,
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this)
          , d = c.attr("href")
          , e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, ""))
          , f = e.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(d) && d
        }, e.data(), c.data());
        c.is("a") && b.preventDefault(),
        e.modal(f, this).one("hide", function() {
            c.is(":visible") && c.focus()
        })
    }),
    a(document).on("show.bs.modal", ".modal", function() {
        a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        a(document.body).removeClass("modal-open")
    })
}(jQuery),
+function(a) {
    "use strict";
    var b = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null ,
        this.init("tooltip", a, b)
    }
    ;
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    },
    b.prototype.init = function(b, c, d) {
        this.enabled = !0,
        this.type = b,
        this.$element = a(c),
        this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g)
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin"
                  , i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }
    ,
    b.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b),
        b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }),
        b
    }
    ,
    b.prototype.getDelegateOptions = function() {
        var b = {}
          , c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }),
        b
    }
    ,
    b.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout),
        c.hoverState = "in",
        c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show()
    }
    ,
    b.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout),
        c.hoverState = "out",
        c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }
    ,
    b.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b),
            b.isDefaultPrevented())
                return;
            var c = this
              , d = this.tip();
            this.setContent(),
            this.options.animation && d.addClass("fade");
            var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement
              , f = /\s?auto?\s?/i
              , g = f.test(e);
            g && (e = e.replace(f, "") || "top"),
            d.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(e),
            this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
            var h = this.getPosition()
              , i = d[0].offsetWidth
              , j = d[0].offsetHeight;
            if (g) {
                var k = this.$element.parent()
                  , l = e
                  , m = document.documentElement.scrollTop || document.body.scrollTop
                  , n = "body" == this.options.container ? window.innerWidth : k.outerWidth()
                  , o = "body" == this.options.container ? window.innerHeight : k.outerHeight()
                  , p = "body" == this.options.container ? 0 : k.offset().left;
                e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e,
                d.removeClass(l).addClass(e)
            }
            var q = this.getCalculatedOffset(e, h, i, j);
            this.applyPlacement(q, e),
            this.hoverState = null ;
            var r = function() {
                c.$element.trigger("shown.bs." + c.type)
            }
            ;
            a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r()
        }
    }
    ,
    b.prototype.applyPlacement = function(b, c) {
        var d, e = this.tip(), f = e[0].offsetWidth, g = e[0].offsetHeight, h = parseInt(e.css("margin-top"), 10), i = parseInt(e.css("margin-left"), 10);
        isNaN(h) && (h = 0),
        isNaN(i) && (i = 0),
        b.top = b.top + h,
        b.left = b.left + i,
        a.offset.setOffset(e[0], a.extend({
            using: function(a) {
                e.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0),
        e.addClass("in");
        var j = e[0].offsetWidth
          , k = e[0].offsetHeight;
        if ("top" == c && k != g && (d = !0,
        b.top = b.top + g - k),
        /bottom|top/.test(c)) {
            var l = 0;
            b.left < 0 && (l = -2 * b.left,
            b.left = 0,
            e.offset(b),
            j = e[0].offsetWidth,
            k = e[0].offsetHeight),
            this.replaceArrow(l - f + j, j, "left")
        } else
            this.replaceArrow(k - g, k, "top");
        d && e.offset(b)
    }
    ,
    b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }
    ,
    b.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
        a.removeClass("fade in top bottom left right")
    }
    ,
    b.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(),
            c.$element.trigger("hidden.bs." + c.type)
        }
        var c = this
          , d = this.tip()
          , e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e),
        e.isDefaultPrevented() ? void 0 : (d.removeClass("in"),
        a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(),
        this.hoverState = null ,
        this)
    }
    ,
    b.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }
    ,
    b.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    b.prototype.getPosition = function() {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset())
    }
    ,
    b.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }
    ,
    b.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }
    ,
    b.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }
    ,
    b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    b.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(),
        this.$element = null ,
        this.options = null )
    }
    ,
    b.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    b.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    b.prototype.toggle = function(b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }
    ,
    b.prototype.destroy = function() {
        clearTimeout(this.timeout),
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    }
    ;
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tooltip")
              , f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.tooltip", e = new b(this,f)),
            "string" == typeof c && e[c]())
        })
    }
    ,
    a.fn.tooltip.Constructor = b,
    a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c,
        this
    }
}(jQuery),
+function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b)
    }
    ;
    if (!a.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype),
    b.prototype.constructor = b,
    b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }
    ,
    b.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle()
          , c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
        a.find(".popover-content")[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c),
        a.removeClass("fade top bottom left right in"),
        a.find(".popover-title").html() || a.find(".popover-title").hide()
    }
    ,
    b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    b.prototype.getContent = function() {
        var a = this.$element
          , b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }
    ,
    b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ,
    b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)),
        this.$tip
    }
    ;
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.popover")
              , f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.popover", e = new b(this,f)),
            "string" == typeof c && e[c]())
        })
    }
    ,
    a.fn.popover.Constructor = b,
    a.fn.popover.noConflict = function() {
        return a.fn.popover = c,
        this
    }
}(jQuery),
+function(a) {
    "use strict";
    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(a(c).is("body") ? window : c),
        this.$body = a("body"),
        this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f),
        this.options = a.extend({}, b.DEFAULTS, d),
        this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a",
        this.offsets = a([]),
        this.targets = a([]),
        this.activeTarget = null ,
        this.refresh(),
        this.process()
    }
    b.DEFAULTS = {
        offset: 10
    },
    b.prototype.refresh = function() {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]),
        this.targets = a([]);
        {
            var c = this;
            this.$body.find(this.selector).map(function() {
                var d = a(this)
                  , e = d.data("target") || d.attr("href")
                  , f = /^#./.test(e) && a(e);
                return f && f.length && f.is(":visible") && [[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]] || null
            }).sort(function(a, b) {
                return a[0] - b[0]
            }).each(function() {
                c.offsets.push(this[0]),
                c.targets.push(this[1])
            })
        }
    }
    ,
    b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, d = c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (b >= d)
            return g != (a = f.last()[0]) && this.activate(a);
        if (g && b <= e[0])
            return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--; )
            g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }
    ,
    b.prototype.activate = function(b) {
        this.activeTarget = b,
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]'
          , d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
        d.trigger("activate.bs.scrollspy")
    }
    ;
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.scrollspy")
              , f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this,f)),
            "string" == typeof c && e[c]()
        })
    }
    ,
    a.fn.scrollspy.Constructor = b,
    a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c,
        this
    }
    ,
    a(window).on("load", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b)
    }
    ;
    b.prototype.show = function() {
        var b = this.element
          , c = b.closest("ul:not(.dropdown-menu)")
          , d = b.data("target");
        if (d || (d = b.attr("href"),
        d = d && d.replace(/.*(?=#[^\s]*$)/, "")),
        !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0]
              , f = a.Event("show.bs.tab", {
                relatedTarget: e
            });
            if (b.trigger(f),
            !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c),
                this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    }
    ,
    b.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
            b.addClass("active"),
            g ? (b[0].offsetWidth,
            b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"),
            d && d()
        }
        var f = c.find("> .active")
          , g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(),
        f.removeClass("in")
    }
    ;
    var c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)),
            "string" == typeof c && e[c]()
        })
    }
    ,
    a.fn.tab.Constructor = b,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = c,
        this
    }
    ,
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault(),
        a(this).tab("show")
    })
}(jQuery),
+function(a) {
    "use strict";
    var b = function(c, d) {
        this.options = a.extend({}, b.DEFAULTS, d),
        this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = a(c),
        this.affixed = this.unpin = this.pinnedOffset = null ,
        this.checkPosition()
    }
    ;
    b.RESET = "affix affix-top affix-bottom",
    b.DEFAULTS = {
        offset: 0
    },
    b.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(b.RESET).addClass("affix");
        var a = this.$window.scrollTop()
          , c = this.$element.offset();
        return this.pinnedOffset = c.top - a
    }
    ,
    b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }
    ,
    b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var c = a(document).height()
              , d = this.$window.scrollTop()
              , e = this.$element.offset()
              , f = this.options.offset
              , g = f.top
              , h = f.bottom;
            "top" == this.affixed && (e.top += d),
            "object" != typeof f && (h = g = f),
            "function" == typeof g && (g = f.top(this.$element)),
            "function" == typeof h && (h = f.bottom(this.$element));
            var i = null  != this.unpin && d + this.unpin <= e.top ? !1 : null  != h && e.top + this.$element.height() >= c - h ? "bottom" : null  != g && g >= d ? "top" : !1;
            if (this.affixed !== i) {
                this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i : "")
                  , k = a.Event(j + ".bs.affix");
                this.$element.trigger(k),
                k.isDefaultPrevented() || (this.affixed = i,
                this.unpin = "bottom" == i ? this.getPinnedOffset() : null ,
                this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))),
                "bottom" == i && this.$element.offset({
                    top: c - h - this.$element.height()
                }))
            }
        }
    }
    ;
    var c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.affix")
              , f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this,f)),
            "string" == typeof c && e[c]()
        })
    }
    ,
    a.fn.affix.Constructor = b,
    a.fn.affix.noConflict = function() {
        return a.fn.affix = c,
        this
    }
    ,
    a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this)
              , c = b.data();
            c.offset = c.offset || {},
            c.offsetBottom && (c.offset.bottom = c.offsetBottom),
            c.offsetTop && (c.offset.top = c.offsetTop),
            b.affix(c)
        })
    })
}(jQuery);
var retina = window.devicePixelRatio
  , PI = Math.PI
  , sqrt = Math.sqrt
  , round = Math.round
  , random = Math.random
  , cos = Math.cos
  , sin = Math.sin
  , rAF = window.requestAnimationFrame
  , cAF = window.cancelAnimationFrame || window.cancelRequestAnimationFrame;
!function(i) {
    function t(i) {
        var t = _now()
          , n = Math.max(0, 16 - (t - s))
          , o = setTimeout(i, n);
        return s = t,
        o
    }
    var s = (new Date).getTime()
      , n = i.cancelAnimationFrame || i.webkitCancelAnimationFrame || i.clearTimeout;
    rAF = i.requestAnimationFrame || i.webkitRequestAnimationFrame || t,
    cAF = function(t) {
        n.call(i, t)
    }
}(window),
$(document).ready(function() {
    function i(t, s) {
        this.x = t,
        this.y = s,
        this.Length = function() {
            return sqrt(this.SqrLength())
        }
        ,
        this.SqrLength = function() {
            return this.x * this.x + this.y * this.y
        }
        ,
        this.Add = function(i) {
            this.x += i.x,
            this.y += i.y
        }
        ,
        this.Sub = function(i) {
            this.x -= i.x,
            this.y -= i.y
        }
        ,
        this.Div = function(i) {
            this.x /= i,
            this.y /= i
        }
        ,
        this.Mul = function(i) {
            this.x *= i,
            this.y *= i
        }
        ,
        this.Normalize = function() {
            var i = this.SqrLength();
            if (0 != i) {
                var t = 1 / sqrt(i);
                this.x *= t,
                this.y *= t
            }
        }
        ,
        this.Normalized = function() {
            var t = this.SqrLength();
            if (0 != t) {
                var s = 1 / sqrt(t);
                return new i(this.x * s,this.y * s)
            }
            return new i(0,0)
        }
    }
    function t(t, s, n, o) {
        this.position = new i(t,s),
        this.mass = n,
        this.drag = o,
        this.force = new i(0,0),
        this.velocity = new i(0,0),
        this.AddForce = function(i) {
            this.force.Add(i)
        }
        ,
        this.Integrate = function(t) {
            var s = this.CurrentForce(this.position);
            s.Div(this.mass);
            var n = new i(this.velocity.x,this.velocity.y);
            n.Mul(t),
            this.position.Add(n),
            s.Mul(t),
            this.velocity.Add(s),
            this.force = new i(0,0)
        }
        ,
        this.CurrentForce = function() {
            var t = new i(this.force.x,this.force.y)
              , s = this.velocity.Length()
              , n = new i(this.velocity.x,this.velocity.y);
            return n.Mul(this.drag * this.mass * s),
            t.Sub(n),
            t
        }
    }
    function s(t, n) {
        this.pos = new i(t,n),
        this.rotationSpeed = 600 * random() + 800,
        this.angle = p * random() * 360,
        this.rotation = p * random() * 360,
        this.cosA = 1,
        this.size = 5,
        this.oscillationSpeed = 1.5 * random() + .5,
        this.xSpeed = 40,
        this.ySpeed = 60 * random() + 50,
        this.corners = new Array,
        this.time = random();
        var o = round(random() * (d.length - 1));
        this.frontColor = d[o][0],
        this.backColor = d[o][1];
        for (var e = 0; 4 > e; e++) {
            var r = cos(this.angle + p * (90 * e + 45))
              , a = sin(this.angle + p * (90 * e + 45));
            this.corners[e] = new i(r,a)
        }
        this.Update = function(i) {
            this.time += i,
            this.rotation += this.rotationSpeed * i,
            this.cosA = cos(p * this.rotation),
            this.pos.x += cos(this.time * this.oscillationSpeed) * this.xSpeed * i,
            this.pos.y += this.ySpeed * i,
            this.pos.y > s.bounds.y && (this.pos.x = random() * s.bounds.x,
            this.pos.y = 0)
        }
        ,
        this.Draw = function(i) {
            i.fillStyle = this.cosA > 0 ? this.frontColor : this.backColor,
            i.beginPath(),
            i.moveTo((this.pos.x + this.corners[0].x * this.size) * retina, (this.pos.y + this.corners[0].y * this.size * this.cosA) * retina);
            for (var t = 1; 4 > t; t++)
                i.lineTo((this.pos.x + this.corners[t].x * this.size) * retina, (this.pos.y + this.corners[t].y * this.size * this.cosA) * retina);
            i.closePath(),
            i.fill()
        }
    }
    function n(s, o, e, r, a, h, c, l) {
        this.particleDist = r,
        this.particleCount = e,
        this.particleMass = c,
        this.particleDrag = l,
        this.particles = new Array;
        var u = round(random() * (d.length - 1));
        this.frontColor = d[u][0],
        this.backColor = d[u][1],
        this.xOff = cos(p * h) * a,
        this.yOff = sin(p * h) * a,
        this.position = new i(s,o),
        this.prevPosition = new i(s,o),
        this.velocityInherit = 2 * random() + 4,
        this.time = 100 * random(),
        this.oscillationSpeed = 2 * random() + 2,
        this.oscillationDistance = 40 * random() + 40,
        this.ySpeed = 40 * random() + 80;
        for (var y = 0; y < this.particleCount; y++)
            this.particles[y] = new t(s,o - y * this.particleDist,this.particleMass,this.particleDrag);
        this.Update = function(t) {
            var s = 0;
            this.time += t * this.oscillationSpeed,
            this.position.y += this.ySpeed * t,
            this.position.x += cos(this.time) * this.oscillationDistance * t,
            this.particles[0].position = this.position;
            var o = this.prevPosition.x - this.position.x
              , e = this.prevPosition.y - this.position.y
              , r = sqrt(o * o + e * e);
            for (this.prevPosition = new i(this.position.x,this.position.y),
            s = 1; s < this.particleCount; s++) {
                var a = i.Sub(this.particles[s - 1].position, this.particles[s].position);
                a.Normalize(),
                a.Mul(r / t * this.velocityInherit),
                this.particles[s].AddForce(a)
            }
            for (s = 1; s < this.particleCount; s++)
                this.particles[s].Integrate(t);
            for (s = 1; s < this.particleCount; s++) {
                var h = new i(this.particles[s].position.x,this.particles[s].position.y);
                h.Sub(this.particles[s - 1].position),
                h.Normalize(),
                h.Mul(this.particleDist),
                h.Add(this.particles[s - 1].position),
                this.particles[s].position = h
            }
            this.position.y > n.bounds.y + this.particleDist * this.particleCount && this.Reset()
        }
        ,
        this.Reset = function() {
            this.position.y = -random() * n.bounds.y,
            this.position.x = random() * n.bounds.x,
            this.prevPosition = new i(this.position.x,this.position.y),
            this.velocityInherit = 2 * random() + 4,
            this.time = 100 * random(),
            this.oscillationSpeed = 2 * random() + 1.5,
            this.oscillationDistance = 40 * random() + 40,
            this.ySpeed = 40 * random() + 80;
            var s = round(random() * (d.length - 1));
            this.frontColor = d[s][0],
            this.backColor = d[s][1],
            this.particles = new Array;
            for (var o = 0; o < this.particleCount; o++)
                this.particles[o] = new t(this.position.x,this.position.y - o * this.particleDist,this.particleMass,this.particleDrag)
        }
        ,
        this.Draw = function(t) {
            for (var s = 0; s < this.particleCount - 1; s++) {
                var n = new i(this.particles[s].position.x + this.xOff,this.particles[s].position.y + this.yOff)
                  , o = new i(this.particles[s + 1].position.x + this.xOff,this.particles[s + 1].position.y + this.yOff);
                this.Side(this.particles[s].position.x, this.particles[s].position.y, this.particles[s + 1].position.x, this.particles[s + 1].position.y, o.x, o.y) < 0 ? (t.fillStyle = this.frontColor,
                t.strokeStyle = this.frontColor) : (t.fillStyle = this.backColor,
                t.strokeStyle = this.backColor),
                0 == s ? (t.beginPath(),
                t.moveTo(this.particles[s].position.x * retina, this.particles[s].position.y * retina),
                t.lineTo(this.particles[s + 1].position.x * retina, this.particles[s + 1].position.y * retina),
                t.lineTo(.5 * (this.particles[s + 1].position.x + o.x) * retina, .5 * (this.particles[s + 1].position.y + o.y) * retina),
                t.closePath(),
                t.stroke(),
                t.fill(),
                t.beginPath(),
                t.moveTo(o.x * retina, o.y * retina),
                t.lineTo(n.x * retina, n.y * retina),
                t.lineTo(.5 * (this.particles[s + 1].position.x + o.x) * retina, .5 * (this.particles[s + 1].position.y + o.y) * retina),
                t.closePath(),
                t.stroke(),
                t.fill()) : s == this.particleCount - 2 ? (t.beginPath(),
                t.moveTo(this.particles[s].position.x * retina, this.particles[s].position.y * retina),
                t.lineTo(this.particles[s + 1].position.x * retina, this.particles[s + 1].position.y * retina),
                t.lineTo(.5 * (this.particles[s].position.x + n.x) * retina, .5 * (this.particles[s].position.y + n.y) * retina),
                t.closePath(),
                t.stroke(),
                t.fill(),
                t.beginPath(),
                t.moveTo(o.x * retina, o.y * retina),
                t.lineTo(n.x * retina, n.y * retina),
                t.lineTo(.5 * (this.particles[s].position.x + n.x) * retina, .5 * (this.particles[s].position.y + n.y) * retina),
                t.closePath(),
                t.stroke(),
                t.fill()) : (t.beginPath(),
                t.moveTo(this.particles[s].position.x * retina, this.particles[s].position.y * retina),
                t.lineTo(this.particles[s + 1].position.x * retina, this.particles[s + 1].position.y * retina),
                t.lineTo(o.x * retina, o.y * retina),
                t.lineTo(n.x * retina, n.y * retina),
                t.closePath(),
                t.stroke(),
                t.fill())
            }
        }
        ,
        this.Side = function(i, t, s, n, o, e) {
            return (i - s) * (e - n) - (t - n) * (o - s)
        }
    }
    var o = 50
      , e = 1 / o
      , r = 11
      , a = 30
      , h = 8
      , c = 8
      , l = 400
      , p = PI / 180
      , d = [["#df0049", "#660671"], ["#00e857", "#005291"], ["#2bebbc", "#05798a"], ["#ffd200", "#b06c00"]];
    i.Lerp = function(t, s, n) {
        return new i((s.x - t.x) * n + t.x,(s.y - t.y) * n + t.y)
    }
    ,
    i.Distance = function(t, s) {
        return sqrt(i.SqrDistance(t, s))
    }
    ,
    i.SqrDistance = function(i, t) {
        var s = i.x - t.x
          , n = i.y - t.y;
        return s * s + n * n + z * z
    }
    ,
    i.Scale = function(t, s) {
        return new i(t.x * s.x,t.y * s.y)
    }
    ,
    i.Min = function(t, s) {
        return new i(Math.min(t.x, s.x),Math.min(t.y, s.y))
    }
    ,
    i.Max = function(t, s) {
        return new i(Math.max(t.x, s.x),Math.max(t.y, s.y))
    }
    ,
    i.ClampMagnitude = function(t, s) {
        var n = t.Normalized;
        return new i(n.x * s,n.y * s)
    }
    ,
    i.Sub = function(t, s) {
        return new i(t.x - s.x,t.y - s.y,t.z - s.z)
    }
    ,
    s.bounds = new i(0,0),
    n.bounds = new i(0,0),
    u = {},
    u.Context = function(t) {
        var o = 0
          , p = document.getElementById(t)
          , d = p.parentNode
          , y = d.offsetWidth
          , f = d.offsetHeight;
        p.width = y * retina,
        p.height = f * retina;
        var x = p.getContext("2d")
          , m = new Array;
        for (n.bounds = new i(y,f),
        o = 0; r > o; o++)
            m[o] = new n(random() * y,-random() * f * 2,a,h,c,45,1,.05);
        var w = new Array;
        for (s.bounds = new i(y,f),
        o = 0; l > o; o++)
            w[o] = new s(random() * y,random() * f);
        this.resize = function() {
            y = d.offsetWidth,
            f = d.offsetHeight,
            p.width = y * retina,
            p.height = f * retina,
            s.bounds = new i(y,f),
            n.bounds = new i(y,f)
        }
        ,
        this.start = function() {
            this.stop();
            this.update()
        }
        ,
        this.stop = function() {
            cAF(this.interval)
        }
        ,
        this.update = function() {
            var i = 0;
            for (x.clearRect(0, 0, p.width, p.height),
            i = 0; l > i; i++)
                w[i].Update(e),
                w[i].Draw(x);
            for (i = 0; r > i; i++)
                m[i].Update(e),
                m[i].Draw(x);
            this.interval = rAF(function() {
                u.update()
            })
        }
    }
    ;
    var u = window.confettiLib = new u.Context("confetti");
    window.addEventListener("resize", function() {
        u.resize()
    })
});
!function(t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.Handlebars = t.Handlebars || e()
}(this, function() {
    var t = function() {
        "use strict";
        function t(t) {
            this.string = t
        }
        var e;
        return t.prototype.toString = function() {
            return "" + this.string
        }
        ,
        e = t
    }()
      , e = function(t) {
        "use strict";
        function e(t) {
            return h[t]
        }
        function s(t) {
            for (var e = 1; e < arguments.length; e++)
                for (var s in arguments[e])
                    Object.prototype.hasOwnProperty.call(arguments[e], s) && (t[s] = arguments[e][s]);
            return t
        }
        function i(t) {
            return t instanceof o ? t.toString() : null  == t ? "" : t ? (t = "" + t,
            l.test(t) ? t.replace(p, e) : t) : t + ""
        }
        function n(t) {
            return t || 0 === t ? f(t) && 0 === t.length ? !0 : !1 : !0
        }
        function r(t, e) {
            return (t ? t + "." : "") + e
        }
        var a = {}
          , o = t
          , h = {
            "&": "&",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }
          , p = /[&<>"'`]/g
          , l = /[&<>"'`]/;
        a.extend = s;
        var c = Object.prototype.toString;
        a.toString = c;
        var u = function(t) {
            return "function" == typeof t
        }
        ;
        u(/x/) && (u = function(t) {
            return "function" == typeof t && "[object Function]" === c.call(t)
        }
        );
        var u;
        a.isFunction = u;
        var f = Array.isArray || function(t) {
            return t && "object" == typeof t ? "[object Array]" === c.call(t) : !1
        }
        ;
        return a.isArray = f,
        a.escapeExpression = i,
        a.isEmpty = n,
        a.appendContextPath = r,
        a
    }(t)
      , s = function() {
        "use strict";
        function t(t, e) {
            var i;
            e && e.firstLine && (i = e.firstLine,
            t += " - " + i + ":" + e.firstColumn);
            for (var n = Error.prototype.constructor.call(this, t), r = 0; r < s.length; r++)
                this[s[r]] = n[s[r]];
            i && (this.lineNumber = i,
            this.column = e.firstColumn)
        }
        var e, s = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        return t.prototype = new Error,
        e = t
    }()
      , i = function(t, e) {
        "use strict";
        function s(t, e) {
            this.helpers = t || {},
            this.partials = e || {},
            i(this)
        }
        function i(t) {
            t.registerHelper("helperMissing", function() {
                if (1 === arguments.length)
                    return void 0;
                throw new a("Missing helper: '" + arguments[arguments.length - 1].name + "'")
            }),
            t.registerHelper("blockHelperMissing", function(e, s) {
                var i = s.inverse
                  , n = s.fn;
                if (e === !0)
                    return n(this);
                if (e === !1 || null  == e)
                    return i(this);
                if (l(e))
                    return e.length > 0 ? (s.ids && (s.ids = [s.name]),
                    t.helpers.each(e, s)) : i(this);
                if (s.data && s.ids) {
                    var a = g(s.data);
                    a.contextPath = r.appendContextPath(s.data.contextPath, s.name),
                    s = {
                        data: a
                    }
                }
                return n(e, s)
            }),
            t.registerHelper("each", function(t, e) {
                if (!e)
                    throw new a("Must pass iterator to #each");
                var s, i, n = e.fn, o = e.inverse, h = 0, p = "";
                if (e.data && e.ids && (i = r.appendContextPath(e.data.contextPath, e.ids[0]) + "."),
                c(t) && (t = t.call(this)),
                e.data && (s = g(e.data)),
                t && "object" == typeof t)
                    if (l(t))
                        for (var u = t.length; u > h; h++)
                            s && (s.index = h,
                            s.first = 0 === h,
                            s.last = h === t.length - 1,
                            i && (s.contextPath = i + h)),
                            p += n(t[h], {
                                data: s
                            });
                    else
                        for (var f in t)
                            t.hasOwnProperty(f) && (s && (s.key = f,
                            s.index = h,
                            s.first = 0 === h,
                            i && (s.contextPath = i + f)),
                            p += n(t[f], {
                                data: s
                            }),
                            h++);
                return 0 === h && (p = o(this)),
                p
            }),
            t.registerHelper("if", function(t, e) {
                return c(t) && (t = t.call(this)),
                !e.hash.includeZero && !t || r.isEmpty(t) ? e.inverse(this) : e.fn(this)
            }),
            t.registerHelper("unless", function(e, s) {
                return t.helpers["if"].call(this, e, {
                    fn: s.inverse,
                    inverse: s.fn,
                    hash: s.hash
                })
            }),
            t.registerHelper("with", function(t, e) {
                c(t) && (t = t.call(this));
                var s = e.fn;
                if (r.isEmpty(t))
                    return e.inverse(this);
                if (e.data && e.ids) {
                    var i = g(e.data);
                    i.contextPath = r.appendContextPath(e.data.contextPath, e.ids[0]),
                    e = {
                        data: i
                    }
                }
                return s(t, e)
            }),
            t.registerHelper("log", function(e, s) {
                var i = s.data && null  != s.data.level ? parseInt(s.data.level, 10) : 1;
                t.log(i, e)
            }),
            t.registerHelper("lookup", function(t, e) {
                return t && t[e]
            })
        }
        var n = {}
          , r = t
          , a = e
          , o = "2.0.0";
        n.VERSION = o;
        var h = 6;
        n.COMPILER_REVISION = h;
        var p = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1"
        };
        n.REVISION_CHANGES = p;
        var l = r.isArray
          , c = r.isFunction
          , u = r.toString
          , f = "[object Object]";
        n.HandlebarsEnvironment = s,
        s.prototype = {
            constructor: s,
            logger: d,
            log: m,
            registerHelper: function(t, e) {
                if (u.call(t) === f) {
                    if (e)
                        throw new a("Arg not supported with multiple helpers");
                    r.extend(this.helpers, t)
                } else
                    this.helpers[t] = e
            },
            unregisterHelper: function(t) {
                delete this.helpers[t]
            },
            registerPartial: function(t, e) {
                u.call(t) === f ? r.extend(this.partials, t) : this.partials[t] = e
            },
            unregisterPartial: function(t) {
                delete this.partials[t]
            }
        };
        var d = {
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,
            log: function(t, e) {
                if (d.level <= t) {
                    var s = d.methodMap[t];
                    "undefined" != typeof console && console[s] && console[s].call(console, e)
                }
            }
        };
        n.logger = d;
        var m = d.log;
        n.log = m;
        var g = function(t) {
            var e = r.extend({}, t);
            return e._parent = t,
            e
        }
        ;
        return n.createFrame = g,
        n
    }(e, s)
      , n = function(t, e, s) {
        "use strict";
        function i(t) {
            var e = t && t[0] || 1
              , s = u;
            if (e !== s) {
                if (s > e) {
                    var i = f[s]
                      , n = f[e];
                    throw new c("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + n + ").")
                }
                throw new c("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
            }
        }
        function n(t, e) {
            if (!e)
                throw new c("No environment passed to template");
            if (!t || !t.main)
                throw new c("Unknown template object: " + typeof t);
            e.VM.checkRevision(t.compiler);
            var s = function(s, i, n, r, a, o, h, p, u) {
                a && (r = l.extend({}, r, a));
                var f = e.VM.invokePartial.call(this, s, n, r, o, h, p, u);
                if (null  == f && e.compile) {
                    var d = {
                        helpers: o,
                        partials: h,
                        data: p,
                        depths: u
                    };
                    h[n] = e.compile(s, {
                        data: void 0 !== p,
                        compat: t.compat
                    }, e),
                    f = h[n](r, d)
                }
                if (null  != f) {
                    if (i) {
                        for (var m = f.split("\n"), g = 0, v = m.length; v > g && (m[g] || g + 1 !== v); g++)
                            m[g] = i + m[g];
                        f = m.join("\n")
                    }
                    return f
                }
                throw new c("The partial " + n + " could not be compiled when running in runtime-only mode")
            }
              , i = {
                lookup: function(t, e) {
                    for (var s = t.length, i = 0; s > i; i++)
                        if (t[i] && null  != t[i][e])
                            return t[i][e]
                },
                lambda: function(t, e) {
                    return "function" == typeof t ? t.call(e) : t
                },
                escapeExpression: l.escapeExpression,
                invokePartial: s,
                fn: function(e) {
                    return t[e]
                },
                programs: [],
                program: function(t, e, s) {
                    var i = this.programs[t]
                      , n = this.fn(t);
                    return e || s ? i = r(this, t, n, e, s) : i || (i = this.programs[t] = r(this, t, n)),
                    i
                },
                data: function(t, e) {
                    for (; t && e--; )
                        t = t._parent;
                    return t
                },
                merge: function(t, e) {
                    var s = t || e;
                    return t && e && t !== e && (s = l.extend({}, e, t)),
                    s
                },
                noop: e.VM.noop,
                compilerInfo: t.compiler
            }
              , n = function(e, s) {
                s = s || {};
                var r = s.data;
                n._setup(s),
                !s.partial && t.useData && (r = h(e, r));
                var a;
                return t.useDepths && (a = s.depths ? [e].concat(s.depths) : [e]),
                t.main.call(i, e, i.helpers, i.partials, r, a)
            }
            ;
            return n.isTop = !0,
            n._setup = function(s) {
                s.partial ? (i.helpers = s.helpers,
                i.partials = s.partials) : (i.helpers = i.merge(s.helpers, e.helpers),
                t.usePartial && (i.partials = i.merge(s.partials, e.partials)))
            }
            ,
            n._child = function(e, s, n) {
                if (t.useDepths && !n)
                    throw new c("must pass parent depths");
                return r(i, e, t[e], s, n)
            }
            ,
            n
        }
        function r(t, e, s, i, n) {
            var r = function(e, r) {
                return r = r || {},
                s.call(t, e, t.helpers, t.partials, r.data || i, n && [e].concat(n))
            }
            ;
            return r.program = e,
            r.depth = n ? n.length : 0,
            r
        }
        function a(t, e, s, i, n, r, a) {
            var o = {
                partial: !0,
                helpers: i,
                partials: n,
                data: r,
                depths: a
            };
            if (void 0 === t)
                throw new c("The partial " + e + " could not be found");
            return t instanceof Function ? t(s, o) : void 0
        }
        function o() {
            return ""
        }
        function h(t, e) {
            return e && "root" in e || (e = e ? d(e) : {},
            e.root = t),
            e
        }
        var p = {}
          , l = t
          , c = e
          , u = s.COMPILER_REVISION
          , f = s.REVISION_CHANGES
          , d = s.createFrame;
        return p.checkRevision = i,
        p.template = n,
        p.program = r,
        p.invokePartial = a,
        p.noop = o,
        p
    }(e, s, i)
      , r = function(t, e, s, i, n) {
        "use strict";
        var r, a = t, o = e, h = s, p = i, l = n, c = function() {
            var t = new a.HandlebarsEnvironment;
            return p.extend(t, a),
            t.SafeString = o,
            t.Exception = h,
            t.Utils = p,
            t.escapeExpression = p.escapeExpression,
            t.VM = l,
            t.template = function(e) {
                return l.template(e, t)
            }
            ,
            t
        }
        , u = c();
        return u.create = c,
        u["default"] = u,
        r = u
    }(i, t, s, e, n)
      , a = function(t) {
        "use strict";
        function e(t) {
            t = t || {},
            this.firstLine = t.first_line,
            this.firstColumn = t.first_column,
            this.lastColumn = t.last_column,
            this.lastLine = t.last_line
        }
        var s, i = t, n = {
            ProgramNode: function(t, s, i) {
                e.call(this, i),
                this.type = "program",
                this.statements = t,
                this.strip = s
            },
            MustacheNode: function(t, s, i, r, a) {
                if (e.call(this, a),
                this.type = "mustache",
                this.strip = r,
                null  != i && i.charAt) {
                    var o = i.charAt(3) || i.charAt(2);
                    this.escaped = "{" !== o && "&" !== o
                } else
                    this.escaped = !!i;
                this.sexpr = t instanceof n.SexprNode ? t : new n.SexprNode(t,s),
                this.id = this.sexpr.id,
                this.params = this.sexpr.params,
                this.hash = this.sexpr.hash,
                this.eligibleHelper = this.sexpr.eligibleHelper,
                this.isHelper = this.sexpr.isHelper
            },
            SexprNode: function(t, s, i) {
                e.call(this, i),
                this.type = "sexpr",
                this.hash = s;
                var n = this.id = t[0]
                  , r = this.params = t.slice(1);
                this.isHelper = !(!r.length && !s),
                this.eligibleHelper = this.isHelper || n.isSimple
            },
            PartialNode: function(t, s, i, n, r) {
                e.call(this, r),
                this.type = "partial",
                this.partialName = t,
                this.context = s,
                this.hash = i,
                this.strip = n,
                this.strip.inlineStandalone = !0
            },
            BlockNode: function(t, s, i, n, r) {
                e.call(this, r),
                this.type = "block",
                this.mustache = t,
                this.program = s,
                this.inverse = i,
                this.strip = n,
                i && !s && (this.isInverse = !0)
            },
            RawBlockNode: function(t, s, r, a) {
                if (e.call(this, a),
                t.sexpr.id.original !== r)
                    throw new i(t.sexpr.id.original + " doesn't match " + r,this);
                s = new n.ContentNode(s,a),
                this.type = "block",
                this.mustache = t,
                this.program = new n.ProgramNode([s],{},a)
            },
            ContentNode: function(t, s) {
                e.call(this, s),
                this.type = "content",
                this.original = this.string = t
            },
            HashNode: function(t, s) {
                e.call(this, s),
                this.type = "hash",
                this.pairs = t
            },
            IdNode: function(t, s) {
                e.call(this, s),
                this.type = "ID";
                for (var n = "", r = [], a = 0, o = "", h = 0, p = t.length; p > h; h++) {
                    var l = t[h].part;
                    if (n += (t[h].separator || "") + l,
                    ".." === l || "." === l || "this" === l) {
                        if (r.length > 0)
                            throw new i("Invalid path: " + n,this);
                        ".." === l ? (a++,
                        o += "../") : this.isScoped = !0
                    } else
                        r.push(l)
                }
                this.original = n,
                this.parts = r,
                this.string = r.join("."),
                this.depth = a,
                this.idName = o + this.string,
                this.isSimple = 1 === t.length && !this.isScoped && 0 === a,
                this.stringModeValue = this.string
            },
            PartialNameNode: function(t, s) {
                e.call(this, s),
                this.type = "PARTIAL_NAME",
                this.name = t.original
            },
            DataNode: function(t, s) {
                e.call(this, s),
                this.type = "DATA",
                this.id = t,
                this.stringModeValue = t.stringModeValue,
                this.idName = "@" + t.stringModeValue
            },
            StringNode: function(t, s) {
                e.call(this, s),
                this.type = "STRING",
                this.original = this.string = this.stringModeValue = t
            },
            NumberNode: function(t, s) {
                e.call(this, s),
                this.type = "NUMBER",
                this.original = this.number = t,
                this.stringModeValue = Number(t)
            },
            BooleanNode: function(t, s) {
                e.call(this, s),
                this.type = "BOOLEAN",
                this.bool = t,
                this.stringModeValue = "true" === t
            },
            CommentNode: function(t, s) {
                e.call(this, s),
                this.type = "comment",
                this.comment = t,
                this.strip = {
                    inlineStandalone: !0
                }
            }
        };
        return s = n
    }(s)
      , o = function() {
        "use strict";
        var t, e = function() {
            function t() {
                this.yy = {}
            }
            var e = {
                trace: function() {},
                yy: {},
                symbols_: {
                    error: 2,
                    root: 3,
                    program: 4,
                    EOF: 5,
                    program_repetition0: 6,
                    statement: 7,
                    mustache: 8,
                    block: 9,
                    rawBlock: 10,
                    partial: 11,
                    CONTENT: 12,
                    COMMENT: 13,
                    openRawBlock: 14,
                    END_RAW_BLOCK: 15,
                    OPEN_RAW_BLOCK: 16,
                    sexpr: 17,
                    CLOSE_RAW_BLOCK: 18,
                    openBlock: 19,
                    block_option0: 20,
                    closeBlock: 21,
                    openInverse: 22,
                    block_option1: 23,
                    OPEN_BLOCK: 24,
                    CLOSE: 25,
                    OPEN_INVERSE: 26,
                    inverseAndProgram: 27,
                    INVERSE: 28,
                    OPEN_ENDBLOCK: 29,
                    path: 30,
                    OPEN: 31,
                    OPEN_UNESCAPED: 32,
                    CLOSE_UNESCAPED: 33,
                    OPEN_PARTIAL: 34,
                    partialName: 35,
                    param: 36,
                    partial_option0: 37,
                    partial_option1: 38,
                    sexpr_repetition0: 39,
                    sexpr_option0: 40,
                    dataName: 41,
                    STRING: 42,
                    NUMBER: 43,
                    BOOLEAN: 44,
                    OPEN_SEXPR: 45,
                    CLOSE_SEXPR: 46,
                    hash: 47,
                    hash_repetition_plus0: 48,
                    hashSegment: 49,
                    ID: 50,
                    EQUALS: 51,
                    DATA: 52,
                    pathSegments: 53,
                    SEP: 54,
                    $accept: 0,
                    $end: 1
                },
                terminals_: {
                    2: "error",
                    5: "EOF",
                    12: "CONTENT",
                    13: "COMMENT",
                    15: "END_RAW_BLOCK",
                    16: "OPEN_RAW_BLOCK",
                    18: "CLOSE_RAW_BLOCK",
                    24: "OPEN_BLOCK",
                    25: "CLOSE",
                    26: "OPEN_INVERSE",
                    28: "INVERSE",
                    29: "OPEN_ENDBLOCK",
                    31: "OPEN",
                    32: "OPEN_UNESCAPED",
                    33: "CLOSE_UNESCAPED",
                    34: "OPEN_PARTIAL",
                    42: "STRING",
                    43: "NUMBER",
                    44: "BOOLEAN",
                    45: "OPEN_SEXPR",
                    46: "CLOSE_SEXPR",
                    50: "ID",
                    51: "EQUALS",
                    52: "DATA",
                    54: "SEP"
                },
                productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [10, 3], [14, 3], [9, 4], [9, 4], [19, 3], [22, 3], [27, 2], [21, 3], [8, 3], [8, 3], [11, 5], [11, 4], [17, 3], [17, 1], [36, 1], [36, 1], [36, 1], [36, 1], [36, 1], [36, 3], [47, 1], [49, 3], [35, 1], [35, 1], [35, 1], [41, 2], [30, 1], [53, 3], [53, 1], [6, 0], [6, 2], [20, 0], [20, 1], [23, 0], [23, 1], [37, 0], [37, 1], [38, 0], [38, 1], [39, 0], [39, 2], [40, 0], [40, 1], [48, 1], [48, 2]],
                performAction: function(t, e, s, i, n, r) {
                    var a = r.length - 1;
                    switch (n) {
                    case 1:
                        return i.prepareProgram(r[a - 1].statements, !0),
                        r[a - 1];
                    case 2:
                        this.$ = new i.ProgramNode(i.prepareProgram(r[a]),{},this._$);
                        break;
                    case 3:
                        this.$ = r[a];
                        break;
                    case 4:
                        this.$ = r[a];
                        break;
                    case 5:
                        this.$ = r[a];
                        break;
                    case 6:
                        this.$ = r[a];
                        break;
                    case 7:
                        this.$ = new i.ContentNode(r[a],this._$);
                        break;
                    case 8:
                        this.$ = new i.CommentNode(r[a],this._$);
                        break;
                    case 9:
                        this.$ = new i.RawBlockNode(r[a - 2],r[a - 1],r[a],this._$);
                        break;
                    case 10:
                        this.$ = new i.MustacheNode(r[a - 1],null ,"","",this._$);
                        break;
                    case 11:
                        this.$ = i.prepareBlock(r[a - 3], r[a - 2], r[a - 1], r[a], !1, this._$);
                        break;
                    case 12:
                        this.$ = i.prepareBlock(r[a - 3], r[a - 2], r[a - 1], r[a], !0, this._$);
                        break;
                    case 13:
                        this.$ = new i.MustacheNode(r[a - 1],null ,r[a - 2],i.stripFlags(r[a - 2], r[a]),this._$);
                        break;
                    case 14:
                        this.$ = new i.MustacheNode(r[a - 1],null ,r[a - 2],i.stripFlags(r[a - 2], r[a]),this._$);
                        break;
                    case 15:
                        this.$ = {
                            strip: i.stripFlags(r[a - 1], r[a - 1]),
                            program: r[a]
                        };
                        break;
                    case 16:
                        this.$ = {
                            path: r[a - 1],
                            strip: i.stripFlags(r[a - 2], r[a])
                        };
                        break;
                    case 17:
                        this.$ = new i.MustacheNode(r[a - 1],null ,r[a - 2],i.stripFlags(r[a - 2], r[a]),this._$);
                        break;
                    case 18:
                        this.$ = new i.MustacheNode(r[a - 1],null ,r[a - 2],i.stripFlags(r[a - 2], r[a]),this._$);
                        break;
                    case 19:
                        this.$ = new i.PartialNode(r[a - 3],r[a - 2],r[a - 1],i.stripFlags(r[a - 4], r[a]),this._$);
                        break;
                    case 20:
                        this.$ = new i.PartialNode(r[a - 2],void 0,r[a - 1],i.stripFlags(r[a - 3], r[a]),this._$);
                        break;
                    case 21:
                        this.$ = new i.SexprNode([r[a - 2]].concat(r[a - 1]),r[a],this._$);
                        break;
                    case 22:
                        this.$ = new i.SexprNode([r[a]],null ,this._$);
                        break;
                    case 23:
                        this.$ = r[a];
                        break;
                    case 24:
                        this.$ = new i.StringNode(r[a],this._$);
                        break;
                    case 25:
                        this.$ = new i.NumberNode(r[a],this._$);
                        break;
                    case 26:
                        this.$ = new i.BooleanNode(r[a],this._$);
                        break;
                    case 27:
                        this.$ = r[a];
                        break;
                    case 28:
                        r[a - 1].isHelper = !0,
                        this.$ = r[a - 1];
                        break;
                    case 29:
                        this.$ = new i.HashNode(r[a],this._$);
                        break;
                    case 30:
                        this.$ = [r[a - 2], r[a]];
                        break;
                    case 31:
                        this.$ = new i.PartialNameNode(r[a],this._$);
                        break;
                    case 32:
                        this.$ = new i.PartialNameNode(new i.StringNode(r[a],this._$),this._$);
                        break;
                    case 33:
                        this.$ = new i.PartialNameNode(new i.NumberNode(r[a],this._$));
                        break;
                    case 34:
                        this.$ = new i.DataNode(r[a],this._$);
                        break;
                    case 35:
                        this.$ = new i.IdNode(r[a],this._$);
                        break;
                    case 36:
                        r[a - 2].push({
                            part: r[a],
                            separator: r[a - 1]
                        }),
                        this.$ = r[a - 2];
                        break;
                    case 37:
                        this.$ = [{
                            part: r[a]
                        }];
                        break;
                    case 38:
                        this.$ = [];
                        break;
                    case 39:
                        r[a - 1].push(r[a]);
                        break;
                    case 48:
                        this.$ = [];
                        break;
                    case 49:
                        r[a - 1].push(r[a]);
                        break;
                    case 52:
                        this.$ = [r[a]];
                        break;
                    case 53:
                        r[a - 1].push(r[a])
                    }
                },
                table: [{
                    3: 1,
                    4: 2,
                    5: [2, 38],
                    6: 3,
                    12: [2, 38],
                    13: [2, 38],
                    16: [2, 38],
                    24: [2, 38],
                    26: [2, 38],
                    31: [2, 38],
                    32: [2, 38],
                    34: [2, 38]
                }, {
                    1: [3]
                }, {
                    5: [1, 4]
                }, {
                    5: [2, 2],
                    7: 5,
                    8: 6,
                    9: 7,
                    10: 8,
                    11: 9,
                    12: [1, 10],
                    13: [1, 11],
                    14: 16,
                    16: [1, 20],
                    19: 14,
                    22: 15,
                    24: [1, 18],
                    26: [1, 19],
                    28: [2, 2],
                    29: [2, 2],
                    31: [1, 12],
                    32: [1, 13],
                    34: [1, 17]
                }, {
                    1: [2, 1]
                }, {
                    5: [2, 39],
                    12: [2, 39],
                    13: [2, 39],
                    16: [2, 39],
                    24: [2, 39],
                    26: [2, 39],
                    28: [2, 39],
                    29: [2, 39],
                    31: [2, 39],
                    32: [2, 39],
                    34: [2, 39]
                }, {
                    5: [2, 3],
                    12: [2, 3],
                    13: [2, 3],
                    16: [2, 3],
                    24: [2, 3],
                    26: [2, 3],
                    28: [2, 3],
                    29: [2, 3],
                    31: [2, 3],
                    32: [2, 3],
                    34: [2, 3]
                }, {
                    5: [2, 4],
                    12: [2, 4],
                    13: [2, 4],
                    16: [2, 4],
                    24: [2, 4],
                    26: [2, 4],
                    28: [2, 4],
                    29: [2, 4],
                    31: [2, 4],
                    32: [2, 4],
                    34: [2, 4]
                }, {
                    5: [2, 5],
                    12: [2, 5],
                    13: [2, 5],
                    16: [2, 5],
                    24: [2, 5],
                    26: [2, 5],
                    28: [2, 5],
                    29: [2, 5],
                    31: [2, 5],
                    32: [2, 5],
                    34: [2, 5]
                }, {
                    5: [2, 6],
                    12: [2, 6],
                    13: [2, 6],
                    16: [2, 6],
                    24: [2, 6],
                    26: [2, 6],
                    28: [2, 6],
                    29: [2, 6],
                    31: [2, 6],
                    32: [2, 6],
                    34: [2, 6]
                }, {
                    5: [2, 7],
                    12: [2, 7],
                    13: [2, 7],
                    16: [2, 7],
                    24: [2, 7],
                    26: [2, 7],
                    28: [2, 7],
                    29: [2, 7],
                    31: [2, 7],
                    32: [2, 7],
                    34: [2, 7]
                }, {
                    5: [2, 8],
                    12: [2, 8],
                    13: [2, 8],
                    16: [2, 8],
                    24: [2, 8],
                    26: [2, 8],
                    28: [2, 8],
                    29: [2, 8],
                    31: [2, 8],
                    32: [2, 8],
                    34: [2, 8]
                }, {
                    17: 21,
                    30: 22,
                    41: 23,
                    50: [1, 26],
                    52: [1, 25],
                    53: 24
                }, {
                    17: 27,
                    30: 22,
                    41: 23,
                    50: [1, 26],
                    52: [1, 25],
                    53: 24
                }, {
                    4: 28,
                    6: 3,
                    12: [2, 38],
                    13: [2, 38],
                    16: [2, 38],
                    24: [2, 38],
                    26: [2, 38],
                    28: [2, 38],
                    29: [2, 38],
                    31: [2, 38],
                    32: [2, 38],
                    34: [2, 38]
                }, {
                    4: 29,
                    6: 3,
                    12: [2, 38],
                    13: [2, 38],
                    16: [2, 38],
                    24: [2, 38],
                    26: [2, 38],
                    28: [2, 38],
                    29: [2, 38],
                    31: [2, 38],
                    32: [2, 38],
                    34: [2, 38]
                }, {
                    12: [1, 30]
                }, {
                    30: 32,
                    35: 31,
                    42: [1, 33],
                    43: [1, 34],
                    50: [1, 26],
                    53: 24
                }, {
                    17: 35,
                    30: 22,
                    41: 23,
                    50: [1, 26],
                    52: [1, 25],
                    53: 24
                }, {
                    17: 36,
                    30: 22,
                    41: 23,
                    50: [1, 26],
                    52: [1, 25],
                    53: 24
                }, {
                    17: 37,
                    30: 22,
                    41: 23,
                    50: [1, 26],
                    52: [1, 25],
                    53: 24
                }, {
                    25: [1, 38]
                }, {
                    18: [2, 48],
                    25: [2, 48],
                    33: [2, 48],
                    39: 39,
                    42: [2, 48],
                    43: [2, 48],
                    44: [2, 48],
                    45: [2, 48],
                    46: [2, 48],
                    50: [2, 48],
                    52: [2, 48]
                }, {
                    18: [2, 22],
                    25: [2, 22],
                    33: [2, 22],
                    46: [2, 22]
                }, {
                    18: [2, 35],
                    25: [2, 35],
                    33: [2, 35],
                    42: [2, 35],
                    43: [2, 35],
                    44: [2, 35],
                    45: [2, 35],
                    46: [2, 35],
                    50: [2, 35],
                    52: [2, 35],
                    54: [1, 40]
                }, {
                    30: 41,
                    50: [1, 26],
                    53: 24
                }, {
                    18: [2, 37],
                    25: [2, 37],
                    33: [2, 37],
                    42: [2, 37],
                    43: [2, 37],
                    44: [2, 37],
                    45: [2, 37],
                    46: [2, 37],
                    50: [2, 37],
                    52: [2, 37],
                    54: [2, 37]
                }, {
                    33: [1, 42]
                }, {
                    20: 43,
                    27: 44,
                    28: [1, 45],
                    29: [2, 40]
                }, {
                    23: 46,
                    27: 47,
                    28: [1, 45],
                    29: [2, 42]
                }, {
                    15: [1, 48]
                }, {
                    25: [2, 46],
                    30: 51,
                    36: 49,
                    38: 50,
                    41: 55,
                    42: [1, 52],
                    43: [1, 53],
                    44: [1, 54],
                    45: [1, 56],
                    47: 57,
                    48: 58,
                    49: 60,
                    50: [1, 59],
                    52: [1, 25],
                    53: 24
                }, {
                    25: [2, 31],
                    42: [2, 31],
                    43: [2, 31],
                    44: [2, 31],
                    45: [2, 31],
                    50: [2, 31],
                    52: [2, 31]
                }, {
                    25: [2, 32],
                    42: [2, 32],
                    43: [2, 32],
                    44: [2, 32],
                    45: [2, 32],
                    50: [2, 32],
                    52: [2, 32]
                }, {
                    25: [2, 33],
                    42: [2, 33],
                    43: [2, 33],
                    44: [2, 33],
                    45: [2, 33],
                    50: [2, 33],
                    52: [2, 33]
                }, {
                    25: [1, 61]
                }, {
                    25: [1, 62]
                }, {
                    18: [1, 63]
                }, {
                    5: [2, 17],
                    12: [2, 17],
                    13: [2, 17],
                    16: [2, 17],
                    24: [2, 17],
                    26: [2, 17],
                    28: [2, 17],
                    29: [2, 17],
                    31: [2, 17],
                    32: [2, 17],
                    34: [2, 17]
                }, {
                    18: [2, 50],
                    25: [2, 50],
                    30: 51,
                    33: [2, 50],
                    36: 65,
                    40: 64,
                    41: 55,
                    42: [1, 52],
                    43: [1, 53],
                    44: [1, 54],
                    45: [1, 56],
                    46: [2, 50],
                    47: 66,
                    48: 58,
                    49: 60,
                    50: [1, 59],
                    52: [1, 25],
                    53: 24
                }, {
                    50: [1, 67]
                }, {
                    18: [2, 34],
                    25: [2, 34],
                    33: [2, 34],
                    42: [2, 34],
                    43: [2, 34],
                    44: [2, 34],
                    45: [2, 34],
                    46: [2, 34],
                    50: [2, 34],
                    52: [2, 34]
                }, {
                    5: [2, 18],
                    12: [2, 18],
                    13: [2, 18],
                    16: [2, 18],
                    24: [2, 18],
                    26: [2, 18],
                    28: [2, 18],
                    29: [2, 18],
                    31: [2, 18],
                    32: [2, 18],
                    34: [2, 18]
                }, {
                    21: 68,
                    29: [1, 69]
                }, {
                    29: [2, 41]
                }, {
                    4: 70,
                    6: 3,
                    12: [2, 38],
                    13: [2, 38],
                    16: [2, 38],
                    24: [2, 38],
                    26: [2, 38],
                    29: [2, 38],
                    31: [2, 38],
                    32: [2, 38],
                    34: [2, 38]
                }, {
                    21: 71,
                    29: [1, 69]
                }, {
                    29: [2, 43]
                }, {
                    5: [2, 9],
                    12: [2, 9],
                    13: [2, 9],
                    16: [2, 9],
                    24: [2, 9],
                    26: [2, 9],
                    28: [2, 9],
                    29: [2, 9],
                    31: [2, 9],
                    32: [2, 9],
                    34: [2, 9]
                }, {
                    25: [2, 44],
                    37: 72,
                    47: 73,
                    48: 58,
                    49: 60,
                    50: [1, 74]
                }, {
                    25: [1, 75]
                }, {
                    18: [2, 23],
                    25: [2, 23],
                    33: [2, 23],
                    42: [2, 23],
                    43: [2, 23],
                    44: [2, 23],
                    45: [2, 23],
                    46: [2, 23],
                    50: [2, 23],
                    52: [2, 23]
                }, {
                    18: [2, 24],
                    25: [2, 24],
                    33: [2, 24],
                    42: [2, 24],
                    43: [2, 24],
                    44: [2, 24],
                    45: [2, 24],
                    46: [2, 24],
                    50: [2, 24],
                    52: [2, 24]
                }, {
                    18: [2, 25],
                    25: [2, 25],
                    33: [2, 25],
                    42: [2, 25],
                    43: [2, 25],
                    44: [2, 25],
                    45: [2, 25],
                    46: [2, 25],
                    50: [2, 25],
                    52: [2, 25]
                }, {
                    18: [2, 26],
                    25: [2, 26],
                    33: [2, 26],
                    42: [2, 26],
                    43: [2, 26],
                    44: [2, 26],
                    45: [2, 26],
                    46: [2, 26],
                    50: [2, 26],
                    52: [2, 26]
                }, {
                    18: [2, 27],
                    25: [2, 27],
                    33: [2, 27],
                    42: [2, 27],
                    43: [2, 27],
                    44: [2, 27],
                    45: [2, 27],
                    46: [2, 27],
                    50: [2, 27],
                    52: [2, 27]
                }, {
                    17: 76,
                    30: 22,
                    41: 23,
                    50: [1, 26],
                    52: [1, 25],
                    53: 24
                }, {
                    25: [2, 47]
                }, {
                    18: [2, 29],
                    25: [2, 29],
                    33: [2, 29],
                    46: [2, 29],
                    49: 77,
                    50: [1, 74]
                }, {
                    18: [2, 37],
                    25: [2, 37],
                    33: [2, 37],
                    42: [2, 37],
                    43: [2, 37],
                    44: [2, 37],
                    45: [2, 37],
                    46: [2, 37],
                    50: [2, 37],
                    51: [1, 78],
                    52: [2, 37],
                    54: [2, 37]
                }, {
                    18: [2, 52],
                    25: [2, 52],
                    33: [2, 52],
                    46: [2, 52],
                    50: [2, 52]
                }, {
                    12: [2, 13],
                    13: [2, 13],
                    16: [2, 13],
                    24: [2, 13],
                    26: [2, 13],
                    28: [2, 13],
                    29: [2, 13],
                    31: [2, 13],
                    32: [2, 13],
                    34: [2, 13]
                }, {
                    12: [2, 14],
                    13: [2, 14],
                    16: [2, 14],
                    24: [2, 14],
                    26: [2, 14],
                    28: [2, 14],
                    29: [2, 14],
                    31: [2, 14],
                    32: [2, 14],
                    34: [2, 14]
                }, {
                    12: [2, 10]
                }, {
                    18: [2, 21],
                    25: [2, 21],
                    33: [2, 21],
                    46: [2, 21]
                }, {
                    18: [2, 49],
                    25: [2, 49],
                    33: [2, 49],
                    42: [2, 49],
                    43: [2, 49],
                    44: [2, 49],
                    45: [2, 49],
                    46: [2, 49],
                    50: [2, 49],
                    52: [2, 49]
                }, {
                    18: [2, 51],
                    25: [2, 51],
                    33: [2, 51],
                    46: [2, 51]
                }, {
                    18: [2, 36],
                    25: [2, 36],
                    33: [2, 36],
                    42: [2, 36],
                    43: [2, 36],
                    44: [2, 36],
                    45: [2, 36],
                    46: [2, 36],
                    50: [2, 36],
                    52: [2, 36],
                    54: [2, 36]
                }, {
                    5: [2, 11],
                    12: [2, 11],
                    13: [2, 11],
                    16: [2, 11],
                    24: [2, 11],
                    26: [2, 11],
                    28: [2, 11],
                    29: [2, 11],
                    31: [2, 11],
                    32: [2, 11],
                    34: [2, 11]
                }, {
                    30: 79,
                    50: [1, 26],
                    53: 24
                }, {
                    29: [2, 15]
                }, {
                    5: [2, 12],
                    12: [2, 12],
                    13: [2, 12],
                    16: [2, 12],
                    24: [2, 12],
                    26: [2, 12],
                    28: [2, 12],
                    29: [2, 12],
                    31: [2, 12],
                    32: [2, 12],
                    34: [2, 12]
                }, {
                    25: [1, 80]
                }, {
                    25: [2, 45]
                }, {
                    51: [1, 78]
                }, {
                    5: [2, 20],
                    12: [2, 20],
                    13: [2, 20],
                    16: [2, 20],
                    24: [2, 20],
                    26: [2, 20],
                    28: [2, 20],
                    29: [2, 20],
                    31: [2, 20],
                    32: [2, 20],
                    34: [2, 20]
                }, {
                    46: [1, 81]
                }, {
                    18: [2, 53],
                    25: [2, 53],
                    33: [2, 53],
                    46: [2, 53],
                    50: [2, 53]
                }, {
                    30: 51,
                    36: 82,
                    41: 55,
                    42: [1, 52],
                    43: [1, 53],
                    44: [1, 54],
                    45: [1, 56],
                    50: [1, 26],
                    52: [1, 25],
                    53: 24
                }, {
                    25: [1, 83]
                }, {
                    5: [2, 19],
                    12: [2, 19],
                    13: [2, 19],
                    16: [2, 19],
                    24: [2, 19],
                    26: [2, 19],
                    28: [2, 19],
                    29: [2, 19],
                    31: [2, 19],
                    32: [2, 19],
                    34: [2, 19]
                }, {
                    18: [2, 28],
                    25: [2, 28],
                    33: [2, 28],
                    42: [2, 28],
                    43: [2, 28],
                    44: [2, 28],
                    45: [2, 28],
                    46: [2, 28],
                    50: [2, 28],
                    52: [2, 28]
                }, {
                    18: [2, 30],
                    25: [2, 30],
                    33: [2, 30],
                    46: [2, 30],
                    50: [2, 30]
                }, {
                    5: [2, 16],
                    12: [2, 16],
                    13: [2, 16],
                    16: [2, 16],
                    24: [2, 16],
                    26: [2, 16],
                    28: [2, 16],
                    29: [2, 16],
                    31: [2, 16],
                    32: [2, 16],
                    34: [2, 16]
                }],
                defaultActions: {
                    4: [2, 1],
                    44: [2, 41],
                    47: [2, 43],
                    57: [2, 47],
                    63: [2, 10],
                    70: [2, 15],
                    73: [2, 45]
                },
                parseError: function(t) {
                    throw new Error(t)
                },
                parse: function(t) {
                    function e() {
                        var t;
                        return t = s.lexer.lex() || 1,
                        "number" != typeof t && (t = s.symbols_[t] || t),
                        t
                    }
                    var s = this
                      , i = [0]
                      , n = [null ]
                      , r = []
                      , a = this.table
                      , o = ""
                      , h = 0
                      , p = 0
                      , l = 0;
                    this.lexer.setInput(t),
                    this.lexer.yy = this.yy,
                    this.yy.lexer = this.lexer,
                    this.yy.parser = this,
                    "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                    var c = this.lexer.yylloc;
                    r.push(c);
                    var u = this.lexer.options && this.lexer.options.ranges;
                    "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                    for (var f, d, m, g, v, y, k, S, x, b = {}; ; ) {
                        if (m = i[i.length - 1],
                        this.defaultActions[m] ? g = this.defaultActions[m] : ((null  === f || "undefined" == typeof f) && (f = e()),
                        g = a[m] && a[m][f]),
                        "undefined" == typeof g || !g.length || !g[0]) {
                            var _ = "";
                            if (!l) {
                                x = [];
                                for (y in a[m])
                                    this.terminals_[y] && y > 2 && x.push("'" + this.terminals_[y] + "'");
                                _ = this.lexer.showPosition ? "Parse error on line " + (h + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + x.join(", ") + ", got '" + (this.terminals_[f] || f) + "'" : "Parse error on line " + (h + 1) + ": Unexpected " + (1 == f ? "end of input" : "'" + (this.terminals_[f] || f) + "'"),
                                this.parseError(_, {
                                    text: this.lexer.match,
                                    token: this.terminals_[f] || f,
                                    line: this.lexer.yylineno,
                                    loc: c,
                                    expected: x
                                })
                            }
                        }
                        if (g[0] instanceof Array && g.length > 1)
                            throw new Error("Parse Error: multiple actions possible at state: " + m + ", token: " + f);
                        switch (g[0]) {
                        case 1:
                            i.push(f),
                            n.push(this.lexer.yytext),
                            r.push(this.lexer.yylloc),
                            i.push(g[1]),
                            f = null ,
                            d ? (f = d,
                            d = null ) : (p = this.lexer.yyleng,
                            o = this.lexer.yytext,
                            h = this.lexer.yylineno,
                            c = this.lexer.yylloc,
                            l > 0 && l--);
                            break;
                        case 2:
                            if (k = this.productions_[g[1]][1],
                            b.$ = n[n.length - k],
                            b._$ = {
                                first_line: r[r.length - (k || 1)].first_line,
                                last_line: r[r.length - 1].last_line,
                                first_column: r[r.length - (k || 1)].first_column,
                                last_column: r[r.length - 1].last_column
                            },
                            u && (b._$.range = [r[r.length - (k || 1)].range[0], r[r.length - 1].range[1]]),
                            v = this.performAction.call(b, o, p, h, this.yy, g[1], n, r),
                            "undefined" != typeof v)
                                return v;
                            k && (i = i.slice(0, -1 * k * 2),
                            n = n.slice(0, -1 * k),
                            r = r.slice(0, -1 * k)),
                            i.push(this.productions_[g[1]][0]),
                            n.push(b.$),
                            r.push(b._$),
                            S = a[i[i.length - 2]][i[i.length - 1]],
                            i.push(S);
                            break;
                        case 3:
                            return !0
                        }
                    }
                    return !0
                }
            }
              , s = function() {
                var t = {
                    EOF: 1,
                    parseError: function(t, e) {
                        if (!this.yy.parser)
                            throw new Error(t);
                        this.yy.parser.parseError(t, e)
                    },
                    setInput: function(t) {
                        return this._input = t,
                        this._more = this._less = this.done = !1,
                        this.yylineno = this.yyleng = 0,
                        this.yytext = this.matched = this.match = "",
                        this.conditionStack = ["INITIAL"],
                        this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        },
                        this.options.ranges && (this.yylloc.range = [0, 0]),
                        this.offset = 0,
                        this
                    },
                    input: function() {
                        var t = this._input[0];
                        this.yytext += t,
                        this.yyleng++,
                        this.offset++,
                        this.match += t,
                        this.matched += t;
                        var e = t.match(/(?:\r\n?|\n).*/g);
                        return e ? (this.yylineno++,
                        this.yylloc.last_line++) : this.yylloc.last_column++,
                        this.options.ranges && this.yylloc.range[1]++,
                        this._input = this._input.slice(1),
                        t
                    },
                    unput: function(t) {
                        var e = t.length
                          , s = t.split(/(?:\r\n?|\n)/g);
                        this._input = t + this._input,
                        this.yytext = this.yytext.substr(0, this.yytext.length - e - 1),
                        this.offset -= e;
                        var i = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1),
                        this.matched = this.matched.substr(0, this.matched.length - 1),
                        s.length - 1 && (this.yylineno -= s.length - 1);
                        var n = this.yylloc.range;
                        return this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: s ? (s.length === i.length ? this.yylloc.first_column : 0) + i[i.length - s.length].length - s[0].length : this.yylloc.first_column - e
                        },
                        this.options.ranges && (this.yylloc.range = [n[0], n[0] + this.yyleng - e]),
                        this
                    },
                    more: function() {
                        return this._more = !0,
                        this
                    },
                    less: function(t) {
                        this.unput(this.match.slice(t))
                    },
                    pastInput: function() {
                        var t = this.matched.substr(0, this.matched.length - this.match.length);
                        return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "")
                    },
                    upcomingInput: function() {
                        var t = this.match;
                        return t.length < 20 && (t += this._input.substr(0, 20 - t.length)),
                        (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "")
                    },
                    showPosition: function() {
                        var t = this.pastInput()
                          , e = new Array(t.length + 1).join("-");
                        return t + this.upcomingInput() + "\n" + e + "^"
                    },
                    next: function() {
                        if (this.done)
                            return this.EOF;
                        this._input || (this.done = !0);
                        var t, e, s, i, n;
                        this._more || (this.yytext = "",
                        this.match = "");
                        for (var r = this._currentRules(), a = 0; a < r.length && (s = this._input.match(this.rules[r[a]]),
                        !s || e && !(s[0].length > e[0].length) || (e = s,
                        i = a,
                        this.options.flex)); a++)
                            ;
                        return e ? (n = e[0].match(/(?:\r\n?|\n).*/g),
                        n && (this.yylineno += n.length),
                        this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: n ? n[n.length - 1].length - n[n.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
                        },
                        this.yytext += e[0],
                        this.match += e[0],
                        this.matches = e,
                        this.yyleng = this.yytext.length,
                        this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]),
                        this._more = !1,
                        this._input = this._input.slice(e[0].length),
                        this.matched += e[0],
                        t = this.performAction.call(this, this.yy, this, r[i], this.conditionStack[this.conditionStack.length - 1]),
                        this.done && this._input && (this.done = !1),
                        t ? t : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                            text: "",
                            token: null ,
                            line: this.yylineno
                        })
                    },
                    lex: function() {
                        var t = this.next();
                        return "undefined" != typeof t ? t : this.lex()
                    },
                    begin: function(t) {
                        this.conditionStack.push(t)
                    },
                    popState: function() {
                        return this.conditionStack.pop()
                    },
                    _currentRules: function() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                    },
                    topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2]
                    },
                    pushState: function(t) {
                        this.begin(t)
                    }
                };
                return t.options = {},
                t.performAction = function(t, e, s, i) {
                    function n(t, s) {
                        return e.yytext = e.yytext.substr(t, e.yyleng - s)
                    }
                    switch (s) {
                    case 0:
                        if ("\\\\" === e.yytext.slice(-2) ? (n(0, 1),
                        this.begin("mu")) : "\\" === e.yytext.slice(-1) ? (n(0, 1),
                        this.begin("emu")) : this.begin("mu"),
                        e.yytext)
                            return 12;
                        break;
                    case 1:
                        return 12;
                    case 2:
                        return this.popState(),
                        12;
                    case 3:
                        return e.yytext = e.yytext.substr(5, e.yyleng - 9),
                        this.popState(),
                        15;
                    case 4:
                        return 12;
                    case 5:
                        return n(0, 4),
                        this.popState(),
                        13;
                    case 6:
                        return 45;
                    case 7:
                        return 46;
                    case 8:
                        return 16;
                    case 9:
                        return this.popState(),
                        this.begin("raw"),
                        18;
                    case 10:
                        return 34;
                    case 11:
                        return 24;
                    case 12:
                        return 29;
                    case 13:
                        return this.popState(),
                        28;
                    case 14:
                        return this.popState(),
                        28;
                    case 15:
                        return 26;
                    case 16:
                        return 26;
                    case 17:
                        return 32;
                    case 18:
                        return 31;
                    case 19:
                        this.popState(),
                        this.begin("com");
                        break;
                    case 20:
                        return n(3, 5),
                        this.popState(),
                        13;
                    case 21:
                        return 31;
                    case 22:
                        return 51;
                    case 23:
                        return 50;
                    case 24:
                        return 50;
                    case 25:
                        return 54;
                    case 26:
                        break;
                    case 27:
                        return this.popState(),
                        33;
                    case 28:
                        return this.popState(),
                        25;
                    case 29:
                        return e.yytext = n(1, 2).replace(/\\"/g, '"'),
                        42;
                    case 30:
                        return e.yytext = n(1, 2).replace(/\\'/g, "'"),
                        42;
                    case 31:
                        return 52;
                    case 32:
                        return 44;
                    case 33:
                        return 44;
                    case 34:
                        return 43;
                    case 35:
                        return 50;
                    case 36:
                        return e.yytext = n(1, 2),
                        50;
                    case 37:
                        return "INVALID";
                    case 38:
                        return 5
                    }
                }
                ,
                t.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/],
                t.conditions = {
                    mu: {
                        rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
                        inclusive: !1
                    },
                    emu: {
                        rules: [2],
                        inclusive: !1
                    },
                    com: {
                        rules: [5],
                        inclusive: !1
                    },
                    raw: {
                        rules: [3, 4],
                        inclusive: !1
                    },
                    INITIAL: {
                        rules: [0, 1, 38],
                        inclusive: !0
                    }
                },
                t
            }();
            return e.lexer = s,
            t.prototype = e,
            e.Parser = t,
            new t
        }();
        return t = e
    }()
      , h = function(t) {
        "use strict";
        function e(t, e) {
            return {
                left: "~" === t.charAt(2),
                right: "~" === e.charAt(e.length - 3)
            }
        }
        function s(t, e, s, i, h, l) {
            if (t.sexpr.id.original !== i.path.original)
                throw new p(t.sexpr.id.original + " doesn't match " + i.path.original,t);
            var c = s && s.program
              , u = {
                left: t.strip.left,
                right: i.strip.right,
                openStandalone: r(e.statements),
                closeStandalone: n((c || e).statements)
            };
            if (t.strip.right && a(e.statements, null , !0),
            c) {
                var f = s.strip;
                f.left && o(e.statements, null , !0),
                f.right && a(c.statements, null , !0),
                i.strip.left && o(c.statements, null , !0),
                n(e.statements) && r(c.statements) && (o(e.statements),
                a(c.statements))
            } else
                i.strip.left && o(e.statements, null , !0);
            return h ? new this.BlockNode(t,c,e,u,l) : new this.BlockNode(t,e,c,u,l)
        }
        function i(t, e) {
            for (var s = 0, i = t.length; i > s; s++) {
                var h = t[s]
                  , p = h.strip;
                if (p) {
                    var l = n(t, s, e, "partial" === h.type)
                      , c = r(t, s, e)
                      , u = p.openStandalone && l
                      , f = p.closeStandalone && c
                      , d = p.inlineStandalone && l && c;
                    p.right && a(t, s, !0),
                    p.left && o(t, s, !0),
                    d && (a(t, s),
                    o(t, s) && "partial" === h.type && (h.indent = /([ \t]+$)/.exec(t[s - 1].original) ? RegExp.$1 : "")),
                    u && (a((h.program || h.inverse).statements),
                    o(t, s)),
                    f && (a(t, s),
                    o((h.inverse || h.program).statements))
                }
            }
            return t
        }
        function n(t, e, s) {
            void 0 === e && (e = t.length);
            var i = t[e - 1]
              , n = t[e - 2];
            return i ? "content" === i.type ? (n || !s ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(i.original) : void 0 : s
        }
        function r(t, e, s) {
            void 0 === e && (e = -1);
            var i = t[e + 1]
              , n = t[e + 2];
            return i ? "content" === i.type ? (n || !s ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(i.original) : void 0 : s
        }
        function a(t, e, s) {
            var i = t[null  == e ? 0 : e + 1];
            if (i && "content" === i.type && (s || !i.rightStripped)) {
                var n = i.string;
                i.string = i.string.replace(s ? /^\s+/ : /^[ \t]*\r?\n?/, ""),
                i.rightStripped = i.string !== n
            }
        }
        function o(t, e, s) {
            var i = t[null  == e ? t.length - 1 : e - 1];
            if (i && "content" === i.type && (s || !i.leftStripped)) {
                var n = i.string;
                return i.string = i.string.replace(s ? /\s+$/ : /[ \t]+$/, ""),
                i.leftStripped = i.string !== n,
                i.leftStripped
            }
        }
        var h = {}
          , p = t;
        return h.stripFlags = e,
        h.prepareBlock = s,
        h.prepareProgram = i,
        h
    }(s)
      , p = function(t, e, s, i) {
        "use strict";
        function n(t) {
            return t.constructor === o.ProgramNode ? t : (a.yy = l,
            a.parse(t))
        }
        var r = {}
          , a = t
          , o = e
          , h = s
          , p = i.extend;
        r.parser = a;
        var l = {};
        return p(l, h, o),
        r.parse = n,
        r
    }(o, a, h, e)
      , l = function(t, e) {
        "use strict";
        function s() {}
        function i(t, e, s) {
            if (null  == t || "string" != typeof t && t.constructor !== s.AST.ProgramNode)
                throw new o("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + t);
            e = e || {},
            "data" in e || (e.data = !0),
            e.compat && (e.useDepths = !0);
            var i = s.parse(t)
              , n = (new s.Compiler).compile(i, e);
            return (new s.JavaScriptCompiler).compile(n, e)
        }
        function n(t, e, s) {
            function i() {
                var i = s.parse(t)
                  , n = (new s.Compiler).compile(i, e)
                  , r = (new s.JavaScriptCompiler).compile(n, e, void 0, !0);
                return s.template(r)
            }
            if (null  == t || "string" != typeof t && t.constructor !== s.AST.ProgramNode)
                throw new o("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + t);
            e = e || {},
            "data" in e || (e.data = !0),
            e.compat && (e.useDepths = !0);
            var n, r = function(t, e) {
                return n || (n = i()),
                n.call(this, t, e)
            }
            ;
            return r._setup = function(t) {
                return n || (n = i()),
                n._setup(t)
            }
            ,
            r._child = function(t, e, s) {
                return n || (n = i()),
                n._child(t, e, s)
            }
            ,
            r
        }
        function r(t, e) {
            if (t === e)
                return !0;
            if (h(t) && h(e) && t.length === e.length) {
                for (var s = 0; s < t.length; s++)
                    if (!r(t[s], e[s]))
                        return !1;
                return !0
            }
        }
        var a = {}
          , o = t
          , h = e.isArray
          , p = [].slice;
        return a.Compiler = s,
        s.prototype = {
            compiler: s,
            equals: function(t) {
                var e = this.opcodes.length;
                if (t.opcodes.length !== e)
                    return !1;
                for (var s = 0; e > s; s++) {
                    var i = this.opcodes[s]
                      , n = t.opcodes[s];
                    if (i.opcode !== n.opcode || !r(i.args, n.args))
                        return !1
                }
                for (e = this.children.length,
                s = 0; e > s; s++)
                    if (!this.children[s].equals(t.children[s]))
                        return !1;
                return !0
            },
            guid: 0,
            compile: function(t, e) {
                this.opcodes = [],
                this.children = [],
                this.depths = {
                    list: []
                },
                this.options = e,
                this.stringParams = e.stringParams,
                this.trackIds = e.trackIds;
                var s = this.options.knownHelpers;
                if (this.options.knownHelpers = {
                    helperMissing: !0,
                    blockHelperMissing: !0,
                    each: !0,
                    "if": !0,
                    unless: !0,
                    "with": !0,
                    log: !0,
                    lookup: !0
                },
                s)
                    for (var i in s)
                        this.options.knownHelpers[i] = s[i];
                return this.accept(t)
            },
            accept: function(t) {
                return this[t.type](t)
            },
            program: function(t) {
                for (var e = t.statements, s = 0, i = e.length; i > s; s++)
                    this.accept(e[s]);
                return this.isSimple = 1 === i,
                this.depths.list = this.depths.list.sort(function(t, e) {
                    return t - e
                }),
                this
            },
            compileProgram: function(t) {
                var e, s = (new this.compiler).compile(t, this.options), i = this.guid++;
                this.usePartial = this.usePartial || s.usePartial,
                this.children[i] = s;
                for (var n = 0, r = s.depths.list.length; r > n; n++)
                    e = s.depths.list[n],
                    2 > e || this.addDepth(e - 1);
                return i
            },
            block: function(t) {
                var e = t.mustache
                  , s = t.program
                  , i = t.inverse;
                s && (s = this.compileProgram(s)),
                i && (i = this.compileProgram(i));
                var n = e.sexpr
                  , r = this.classifySexpr(n);
                "helper" === r ? this.helperSexpr(n, s, i) : "simple" === r ? (this.simpleSexpr(n),
                this.opcode("pushProgram", s),
                this.opcode("pushProgram", i),
                this.opcode("emptyHash"),
                this.opcode("blockValue", n.id.original)) : (this.ambiguousSexpr(n, s, i),
                this.opcode("pushProgram", s),
                this.opcode("pushProgram", i),
                this.opcode("emptyHash"),
                this.opcode("ambiguousBlockValue")),
                this.opcode("append")
            },
            hash: function(t) {
                var e, s, i = t.pairs;
                for (this.opcode("pushHash"),
                e = 0,
                s = i.length; s > e; e++)
                    this.pushParam(i[e][1]);
                for (; e--; )
                    this.opcode("assignToHash", i[e][0]);
                this.opcode("popHash")
            },
            partial: function(t) {
                var e = t.partialName;
                this.usePartial = !0,
                t.hash ? this.accept(t.hash) : this.opcode("push", "undefined"),
                t.context ? this.accept(t.context) : (this.opcode("getContext", 0),
                this.opcode("pushContext")),
                this.opcode("invokePartial", e.name, t.indent || ""),
                this.opcode("append")
            },
            content: function(t) {
                t.string && this.opcode("appendContent", t.string)
            },
            mustache: function(t) {
                this.sexpr(t.sexpr),
                this.opcode(t.escaped && !this.options.noEscape ? "appendEscaped" : "append")
            },
            ambiguousSexpr: function(t, e, s) {
                var i = t.id
                  , n = i.parts[0]
                  , r = null  != e || null  != s;
                this.opcode("getContext", i.depth),
                this.opcode("pushProgram", e),
                this.opcode("pushProgram", s),
                this.ID(i),
                this.opcode("invokeAmbiguous", n, r)
            },
            simpleSexpr: function(t) {
                var e = t.id;
                "DATA" === e.type ? this.DATA(e) : e.parts.length ? this.ID(e) : (this.addDepth(e.depth),
                this.opcode("getContext", e.depth),
                this.opcode("pushContext")),
                this.opcode("resolvePossibleLambda")
            },
            helperSexpr: function(t, e, s) {
                var i = this.setupFullMustacheParams(t, e, s)
                  , n = t.id
                  , r = n.parts[0];
                if (this.options.knownHelpers[r])
                    this.opcode("invokeKnownHelper", i.length, r);
                else {
                    if (this.options.knownHelpersOnly)
                        throw new o("You specified knownHelpersOnly, but used the unknown helper " + r,t);
                    n.falsy = !0,
                    this.ID(n),
                    this.opcode("invokeHelper", i.length, n.original, n.isSimple)
                }
            },
            sexpr: function(t) {
                var e = this.classifySexpr(t);
                "simple" === e ? this.simpleSexpr(t) : "helper" === e ? this.helperSexpr(t) : this.ambiguousSexpr(t)
            },
            ID: function(t) {
                this.addDepth(t.depth),
                this.opcode("getContext", t.depth);
                var e = t.parts[0];
                e ? this.opcode("lookupOnContext", t.parts, t.falsy, t.isScoped) : this.opcode("pushContext")
            },
            DATA: function(t) {
                this.options.data = !0,
                this.opcode("lookupData", t.id.depth, t.id.parts)
            },
            STRING: function(t) {
                this.opcode("pushString", t.string)
            },
            NUMBER: function(t) {
                this.opcode("pushLiteral", t.number)
            },
            BOOLEAN: function(t) {
                this.opcode("pushLiteral", t.bool)
            },
            comment: function() {},
            opcode: function(t) {
                this.opcodes.push({
                    opcode: t,
                    args: p.call(arguments, 1)
                })
            },
            addDepth: function(t) {
                0 !== t && (this.depths[t] || (this.depths[t] = !0,
                this.depths.list.push(t)))
            },
            classifySexpr: function(t) {
                var e = t.isHelper
                  , s = t.eligibleHelper
                  , i = this.options;
                if (s && !e) {
                    var n = t.id.parts[0];
                    i.knownHelpers[n] ? e = !0 : i.knownHelpersOnly && (s = !1)
                }
                return e ? "helper" : s ? "ambiguous" : "simple"
            },
            pushParams: function(t) {
                for (var e = 0, s = t.length; s > e; e++)
                    this.pushParam(t[e])
            },
            pushParam: function(t) {
                this.stringParams ? (t.depth && this.addDepth(t.depth),
                this.opcode("getContext", t.depth || 0),
                this.opcode("pushStringParam", t.stringModeValue, t.type),
                "sexpr" === t.type && this.sexpr(t)) : (this.trackIds && this.opcode("pushId", t.type, t.idName || t.stringModeValue),
                this.accept(t))
            },
            setupFullMustacheParams: function(t, e, s) {
                var i = t.params;
                return this.pushParams(i),
                this.opcode("pushProgram", e),
                this.opcode("pushProgram", s),
                t.hash ? this.hash(t.hash) : this.opcode("emptyHash"),
                i
            }
        },
        a.precompile = i,
        a.compile = n,
        a
    }(s, e)
      , c = function(t, e) {
        "use strict";
        function s(t) {
            this.value = t
        }
        function i() {}
        var n, r = t.COMPILER_REVISION, a = t.REVISION_CHANGES, o = e;
        i.prototype = {
            nameLookup: function(t, e) {
                return i.isValidJavaScriptVariableName(e) ? t + "." + e : t + "['" + e + "']"
            },
            depthedLookup: function(t) {
                return this.aliases.lookup = "this.lookup",
                'lookup(depths, "' + t + '")'
            },
            compilerInfo: function() {
                var t = r
                  , e = a[t];
                return [t, e]
            },
            appendToBuffer: function(t) {
                return this.environment.isSimple ? "return " + t + ";" : {
                    appendToBuffer: !0,
                    content: t,
                    toString: function() {
                        return "buffer += " + t + ";"
                    }
                }
            },
            initializeBuffer: function() {
                return this.quotedString("")
            },
            namespace: "Handlebars",
            compile: function(t, e, s, i) {
                this.environment = t,
                this.options = e,
                this.stringParams = this.options.stringParams,
                this.trackIds = this.options.trackIds,
                this.precompile = !i,
                this.name = this.environment.name,
                this.isChild = !!s,
                this.context = s || {
                    programs: [],
                    environments: []
                },
                this.preamble(),
                this.stackSlot = 0,
                this.stackVars = [],
                this.aliases = {},
                this.registers = {
                    list: []
                },
                this.hashes = [],
                this.compileStack = [],
                this.inlineStack = [],
                this.compileChildren(t, e),
                this.useDepths = this.useDepths || t.depths.list.length || this.options.compat;
                var n, r, a, h = t.opcodes;
                for (r = 0,
                a = h.length; a > r; r++)
                    n = h[r],
                    this[n.opcode].apply(this, n.args);
                if (this.pushSource(""),
                this.stackSlot || this.inlineStack.length || this.compileStack.length)
                    throw new o("Compile completed with content left on stack");
                var p = this.createFunctionContext(i);
                if (this.isChild)
                    return p;
                var l = {
                    compiler: this.compilerInfo(),
                    main: p
                }
                  , c = this.context.programs;
                for (r = 0,
                a = c.length; a > r; r++)
                    c[r] && (l[r] = c[r]);
                return this.environment.usePartial && (l.usePartial = !0),
                this.options.data && (l.useData = !0),
                this.useDepths && (l.useDepths = !0),
                this.options.compat && (l.compat = !0),
                i || (l.compiler = JSON.stringify(l.compiler),
                l = this.objectLiteral(l)),
                l
            },
            preamble: function() {
                this.lastContext = 0,
                this.source = []
            },
            createFunctionContext: function(t) {
                var e = ""
                  , s = this.stackVars.concat(this.registers.list);
                s.length > 0 && (e += ", " + s.join(", "));
                for (var i in this.aliases)
                    this.aliases.hasOwnProperty(i) && (e += ", " + i + "=" + this.aliases[i]);
                var n = ["depth0", "helpers", "partials", "data"];
                this.useDepths && n.push("depths");
                var r = this.mergeSource(e);
                return t ? (n.push(r),
                Function.apply(this, n)) : "function(" + n.join(",") + ") {\n  " + r + "}"
            },
            mergeSource: function(t) {
                for (var e, s, i = "", n = !this.forceBuffer, r = 0, a = this.source.length; a > r; r++) {
                    var o = this.source[r];
                    o.appendToBuffer ? e = e ? e + "\n    + " + o.content : o.content : (e && (i ? i += "buffer += " + e + ";\n  " : (s = !0,
                    i = e + ";\n  "),
                    e = void 0),
                    i += o + "\n  ",
                    this.environment.isSimple || (n = !1))
                }
                return n ? (e || !i) && (i += "return " + (e || '""') + ";\n") : (t += ", buffer = " + (s ? "" : this.initializeBuffer()),
                i += e ? "return buffer + " + e + ";\n" : "return buffer;\n"),
                t && (i = "var " + t.substring(2) + (s ? "" : ";\n  ") + i),
                i
            },
            blockValue: function(t) {
                this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var e = [this.contextName(0)];
                this.setupParams(t, 0, e);
                var s = this.popStack();
                e.splice(1, 0, s),
                this.push("blockHelperMissing.call(" + e.join(", ") + ")")
            },
            ambiguousBlockValue: function() {
                this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var t = [this.contextName(0)];
                this.setupParams("", 0, t, !0),
                this.flushInline();
                var e = this.topStack();
                t.splice(1, 0, e),
                this.pushSource("if (!" + this.lastHelper + ") { " + e + " = blockHelperMissing.call(" + t.join(", ") + "); }")
            },
            appendContent: function(t) {
                this.pendingContent && (t = this.pendingContent + t),
                this.pendingContent = t
            },
            append: function() {
                this.flushInline();
                var t = this.popStack();
                this.pushSource("if (" + t + " != null) { " + this.appendToBuffer(t) + " }"),
                this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
            },
            appendEscaped: function() {
                this.aliases.escapeExpression = "this.escapeExpression",
                this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
            },
            getContext: function(t) {
                this.lastContext = t
            },
            pushContext: function() {
                this.pushStackLiteral(this.contextName(this.lastContext))
            },
            lookupOnContext: function(t, e, s) {
                var i = 0
                  , n = t.length;
                for (s || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(t[i++])); n > i; i++)
                    this.replaceStack(function(s) {
                        var n = this.nameLookup(s, t[i], "context");
                        return e ? " && " + n : " != null ? " + n + " : " + s
                    })
            },
            lookupData: function(t, e) {
                this.pushStackLiteral(t ? "this.data(data, " + t + ")" : "data");
                for (var s = e.length, i = 0; s > i; i++)
                    this.replaceStack(function(t) {
                        return " && " + this.nameLookup(t, e[i], "data")
                    })
            },
            resolvePossibleLambda: function() {
                this.aliases.lambda = "this.lambda",
                this.push("lambda(" + this.popStack() + ", " + this.contextName(0) + ")")
            },
            pushStringParam: function(t, e) {
                this.pushContext(),
                this.pushString(e),
                "sexpr" !== e && ("string" == typeof t ? this.pushString(t) : this.pushStackLiteral(t))
            },
            emptyHash: function() {
                this.pushStackLiteral("{}"),
                this.trackIds && this.push("{}"),
                this.stringParams && (this.push("{}"),
                this.push("{}"))
            },
            pushHash: function() {
                this.hash && this.hashes.push(this.hash),
                this.hash = {
                    values: [],
                    types: [],
                    contexts: [],
                    ids: []
                }
            },
            popHash: function() {
                var t = this.hash;
                this.hash = this.hashes.pop(),
                this.trackIds && this.push("{" + t.ids.join(",") + "}"),
                this.stringParams && (this.push("{" + t.contexts.join(",") + "}"),
                this.push("{" + t.types.join(",") + "}")),
                this.push("{\n    " + t.values.join(",\n    ") + "\n  }")
            },
            pushString: function(t) {
                this.pushStackLiteral(this.quotedString(t))
            },
            push: function(t) {
                return this.inlineStack.push(t),
                t
            },
            pushLiteral: function(t) {
                this.pushStackLiteral(t)
            },
            pushProgram: function(t) {
                this.pushStackLiteral(null  != t ? this.programExpression(t) : null )
            },
            invokeHelper: function(t, e, s) {
                this.aliases.helperMissing = "helpers.helperMissing";
                var i = this.popStack()
                  , n = this.setupHelper(t, e)
                  , r = (s ? n.name + " || " : "") + i + " || helperMissing";
                this.push("((" + r + ").call(" + n.callParams + "))")
            },
            invokeKnownHelper: function(t, e) {
                var s = this.setupHelper(t, e);
                this.push(s.name + ".call(" + s.callParams + ")")
            },
            invokeAmbiguous: function(t, e) {
                this.aliases.functionType = '"function"',
                this.aliases.helperMissing = "helpers.helperMissing",
                this.useRegister("helper");
                var s = this.popStack();
                this.emptyHash();
                var i = this.setupHelper(0, t, e)
                  , n = this.lastHelper = this.nameLookup("helpers", t, "helper");
                this.push("((helper = (helper = " + n + " || " + s + ") != null ? helper : helperMissing" + (i.paramsInit ? "),(" + i.paramsInit : "") + "),(typeof helper === functionType ? helper.call(" + i.callParams + ") : helper))")
            },
            invokePartial: function(t, e) {
                var s = [this.nameLookup("partials", t, "partial"), "'" + e + "'", "'" + t + "'", this.popStack(), this.popStack(), "helpers", "partials"];
                this.options.data ? s.push("data") : this.options.compat && s.push("undefined"),
                this.options.compat && s.push("depths"),
                this.push("this.invokePartial(" + s.join(", ") + ")")
            },
            assignToHash: function(t) {
                var e, s, i, n = this.popStack();
                this.trackIds && (i = this.popStack()),
                this.stringParams && (s = this.popStack(),
                e = this.popStack());
                var r = this.hash;
                e && r.contexts.push("'" + t + "': " + e),
                s && r.types.push("'" + t + "': " + s),
                i && r.ids.push("'" + t + "': " + i),
                r.values.push("'" + t + "': (" + n + ")")
            },
            pushId: function(t, e) {
                "ID" === t || "DATA" === t ? this.pushString(e) : this.pushStackLiteral("sexpr" === t ? "true" : "null")
            },
            compiler: i,
            compileChildren: function(t, e) {
                for (var s, i, n = t.children, r = 0, a = n.length; a > r; r++) {
                    s = n[r],
                    i = new this.compiler;
                    var o = this.matchExistingProgram(s);
                    null  == o ? (this.context.programs.push(""),
                    o = this.context.programs.length,
                    s.index = o,
                    s.name = "program" + o,
                    this.context.programs[o] = i.compile(s, e, this.context, !this.precompile),
                    this.context.environments[o] = s,
                    this.useDepths = this.useDepths || i.useDepths) : (s.index = o,
                    s.name = "program" + o)
                }
            },
            matchExistingProgram: function(t) {
                for (var e = 0, s = this.context.environments.length; s > e; e++) {
                    var i = this.context.environments[e];
                    if (i && i.equals(t))
                        return e
                }
            },
            programExpression: function(t) {
                var e = this.environment.children[t]
                  , s = (e.depths.list,
                this.useDepths)
                  , i = [e.index, "data"];
                return s && i.push("depths"),
                "this.program(" + i.join(", ") + ")"
            },
            useRegister: function(t) {
                this.registers[t] || (this.registers[t] = !0,
                this.registers.list.push(t))
            },
            pushStackLiteral: function(t) {
                return this.push(new s(t))
            },
            pushSource: function(t) {
                this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),
                this.pendingContent = void 0),
                t && this.source.push(t)
            },
            pushStack: function(t) {
                this.flushInline();
                var e = this.incrStack();
                return this.pushSource(e + " = " + t + ";"),
                this.compileStack.push(e),
                e
            },
            replaceStack: function(t) {
                {
                    var e, i, n, r = "";
                    this.isInline()
                }
                if (!this.isInline())
                    throw new o("replaceStack on non-inline");
                var a = this.popStack(!0);
                if (a instanceof s)
                    r = e = a.value,
                    n = !0;
                else {
                    i = !this.stackSlot;
                    var h = i ? this.incrStack() : this.topStackName();
                    r = "(" + this.push(h) + " = " + a + ")",
                    e = this.topStack()
                }
                var p = t.call(this, e);
                n || this.popStack(),
                i && this.stackSlot--,
                this.push("(" + r + p + ")")
            },
            incrStack: function() {
                return this.stackSlot++,
                this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot),
                this.topStackName()
            },
            topStackName: function() {
                return "stack" + this.stackSlot
            },
            flushInline: function() {
                var t = this.inlineStack;
                if (t.length) {
                    this.inlineStack = [];
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        n instanceof s ? this.compileStack.push(n) : this.pushStack(n)
                    }
                }
            },
            isInline: function() {
                return this.inlineStack.length
            },
            popStack: function(t) {
                var e = this.isInline()
                  , i = (e ? this.inlineStack : this.compileStack).pop();
                if (!t && i instanceof s)
                    return i.value;
                if (!e) {
                    if (!this.stackSlot)
                        throw new o("Invalid stack pop");
                    this.stackSlot--
                }
                return i
            },
            topStack: function() {
                var t = this.isInline() ? this.inlineStack : this.compileStack
                  , e = t[t.length - 1];
                return e instanceof s ? e.value : e
            },
            contextName: function(t) {
                return this.useDepths && t ? "depths[" + t + "]" : "depth" + t
            },
            quotedString: function(t) {
                return '"' + t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
            },
            objectLiteral: function(t) {
                var e = [];
                for (var s in t)
                    t.hasOwnProperty(s) && e.push(this.quotedString(s) + ":" + t[s]);
                return "{" + e.join(",") + "}"
            },
            setupHelper: function(t, e, s) {
                var i = []
                  , n = this.setupParams(e, t, i, s)
                  , r = this.nameLookup("helpers", e, "helper");
                return {
                    params: i,
                    paramsInit: n,
                    name: r,
                    callParams: [this.contextName(0)].concat(i).join(", ")
                }
            },
            setupOptions: function(t, e, s) {
                var i, n, r, a = {}, o = [], h = [], p = [];
                a.name = this.quotedString(t),
                a.hash = this.popStack(),
                this.trackIds && (a.hashIds = this.popStack()),
                this.stringParams && (a.hashTypes = this.popStack(),
                a.hashContexts = this.popStack()),
                n = this.popStack(),
                r = this.popStack(),
                (r || n) && (r || (r = "this.noop"),
                n || (n = "this.noop"),
                a.fn = r,
                a.inverse = n);
                for (var l = e; l--; )
                    i = this.popStack(),
                    s[l] = i,
                    this.trackIds && (p[l] = this.popStack()),
                    this.stringParams && (h[l] = this.popStack(),
                    o[l] = this.popStack());
                return this.trackIds && (a.ids = "[" + p.join(",") + "]"),
                this.stringParams && (a.types = "[" + h.join(",") + "]",
                a.contexts = "[" + o.join(",") + "]"),
                this.options.data && (a.data = "data"),
                a
            },
            setupParams: function(t, e, s, i) {
                var n = this.objectLiteral(this.setupOptions(t, e, s));
                return i ? (this.useRegister("options"),
                s.push("options"),
                "options=" + n) : (s.push(n),
                "")
            }
        };
        for (var h = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), p = i.RESERVED_WORDS = {}, l = 0, c = h.length; c > l; l++)
            p[h[l]] = !0;
        return i.isValidJavaScriptVariableName = function(t) {
            return !i.RESERVED_WORDS[t] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)
        }
        ,
        n = i
    }(i, s)
      , u = function(t, e, s, i, n) {
        "use strict";
        var r, a = t, o = e, h = s.parser, p = s.parse, l = i.Compiler, c = i.compile, u = i.precompile, f = n, d = a.create, m = function() {
            var t = d();
            return t.compile = function(e, s) {
                return c(e, s, t)
            }
            ,
            t.precompile = function(e, s) {
                return u(e, s, t)
            }
            ,
            t.AST = o,
            t.Compiler = l,
            t.JavaScriptCompiler = f,
            t.Parser = h,
            t.parse = p,
            t
        }
        ;
        return a = m(),
        a.create = m,
        a["default"] = a,
        r = a
    }(r, a, p, l, c);
    return u
});
!function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function(a) {
    "function" != typeof Object.create && (Object.create = function(a) {
        function b() {}
        return b.prototype = a,
        new b
    }
    );
    var b = {
        init: function(b) {
            return this.options = a.extend({}, a.noty.defaults, b),
            this.options.layout = this.options.custom ? a.noty.layouts.inline : a.noty.layouts[this.options.layout],
            a.noty.themes[this.options.theme] ? this.options.theme = a.noty.themes[this.options.theme] : b.themeClassName = this.options.theme,
            delete b.layout,
            delete b.theme,
            this.options = a.extend({}, this.options, this.options.layout.options),
            this.options.id = "noty_" + (new Date).getTime() * Math.floor(1e6 * Math.random()),
            this.options = a.extend({}, this.options, b),
            this._build(),
            this
        },
        _build: function() {
            var b = a('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr("id", this.options.id);
            if (b.append(this.options.template).find(".noty_text").html(this.options.text),
            this.$bar = null  !== this.options.layout.parent.object ? a(this.options.layout.parent.object).css(this.options.layout.parent.css).append(b) : b,
            this.options.themeClassName && this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_" + this.options.type),
            this.options.buttons) {
                this.options.closeWith = [],
                this.options.timeout = !1;
                var c = a("<div/>").addClass("noty_buttons");
                null  !== this.options.layout.parent.object ? this.$bar.find(".noty_bar").append(c) : this.$bar.append(c);
                var d = this;
                a.each(this.options.buttons, function(b, c) {
                    var e = a("<button/>").addClass(c.addClass ? c.addClass : "gray").html(c.text).attr("id", c.id ? c.id : "button-" + b).attr("title", c.title).appendTo(d.$bar.find(".noty_buttons")).on("click", function(b) {
                        a.isFunction(c.onClick) && c.onClick.call(e, d, b)
                    })
                })
            }
            this.$message = this.$bar.find(".noty_message"),
            this.$closeButton = this.$bar.find(".noty_close"),
            this.$buttons = this.$bar.find(".noty_buttons"),
            a.noty.store[this.options.id] = this
        },
        show: function() {
            var b = this;
            return b.options.custom ? b.options.custom.find(b.options.layout.container.selector).append(b.$bar) : a(b.options.layout.container.selector).append(b.$bar),
            b.options.theme && b.options.theme.style && b.options.theme.style.apply(b),
            "function" === a.type(b.options.layout.css) ? this.options.layout.css.apply(b.$bar) : b.$bar.css(this.options.layout.css || {}),
            b.$bar.addClass(b.options.layout.addClass),
            b.options.layout.container.style.apply(a(b.options.layout.container.selector), [b.options.within]),
            b.showing = !0,
            b.options.theme && b.options.theme.style && b.options.theme.callback.onShow.apply(this),
            a.inArray("click", b.options.closeWith) > -1 && b.$bar.css("cursor", "pointer").one("click", function(a) {
                b.stopPropagation(a),
                b.options.callback.onCloseClick && b.options.callback.onCloseClick.apply(b),
                b.close()
            }),
            a.inArray("hover", b.options.closeWith) > -1 && b.$bar.one("mouseenter", function() {
                b.close()
            }),
            a.inArray("button", b.options.closeWith) > -1 && b.$closeButton.one("click", function(a) {
                b.stopPropagation(a),
                b.close()
            }),
            -1 == a.inArray("button", b.options.closeWith) && b.$closeButton.remove(),
            b.options.callback.onShow && b.options.callback.onShow.apply(b),
            "string" == typeof b.options.animation.open ? (b.$bar.css("height", b.$bar.innerHeight()),
            b.$bar.on("click", function(a) {
                b.wasClicked = !0
            }),
            b.$bar.show().addClass(b.options.animation.open).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                b.options.callback.afterShow && b.options.callback.afterShow.apply(b),
                b.showing = !1,
                b.shown = !0,
                b.hasOwnProperty("wasClicked") && (b.$bar.off("click", function(a) {
                    b.wasClicked = !0
                }),
                b.close())
            })) : b.$bar.animate(b.options.animation.open, b.options.animation.speed, b.options.animation.easing, function() {
                b.options.callback.afterShow && b.options.callback.afterShow.apply(b),
                b.showing = !1,
                b.shown = !0
            }),
            b.options.timeout && b.$bar.delay(b.options.timeout).promise().done(function() {
                b.close()
            }),
            this
        },
        close: function() {
            if (!(this.closed || this.$bar && this.$bar.hasClass("i-am-closing-now"))) {
                var b = this;
                if (this.showing)
                    return void b.$bar.queue(function() {
                        b.close.apply(b)
                    });
                if (!this.shown && !this.showing) {
                    var c = [];
                    return a.each(a.noty.queue, function(a, d) {
                        d.options.id != b.options.id && c.push(d)
                    }),
                    void (a.noty.queue = c)
                }
                b.$bar.addClass("i-am-closing-now"),
                b.options.callback.onClose && b.options.callback.onClose.apply(b),
                "string" == typeof b.options.animation.close ? b.$bar.addClass(b.options.animation.close).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    b.options.callback.afterClose && b.options.callback.afterClose.apply(b),
                    b.closeCleanUp()
                }) : b.$bar.clearQueue().stop().animate(b.options.animation.close, b.options.animation.speed, b.options.animation.easing, function() {
                    b.options.callback.afterClose && b.options.callback.afterClose.apply(b)
                }).promise().done(function() {
                    b.closeCleanUp()
                })
            }
        },
        closeCleanUp: function() {
            var b = this;
            b.options.modal && (a.notyRenderer.setModalCount(-1),
            0 == a.notyRenderer.getModalCount() && a(".noty_modal").fadeOut(b.options.animation.fadeSpeed, function() {
                a(this).remove()
            })),
            a.notyRenderer.setLayoutCountFor(b, -1),
            0 == a.notyRenderer.getLayoutCountFor(b) && a(b.options.layout.container.selector).remove(),
            "undefined" != typeof b.$bar && null  !== b.$bar && ("string" == typeof b.options.animation.close ? (b.$bar.css("transition", "all 100ms ease").css("border", 0).css("margin", 0).height(0),
            b.$bar.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                b.$bar.remove(),
                b.$bar = null ,
                b.closed = !0,
                b.options.theme.callback && b.options.theme.callback.onClose && b.options.theme.callback.onClose.apply(b)
            })) : (b.$bar.remove(),
            b.$bar = null ,
            b.closed = !0)),
            delete a.noty.store[b.options.id],
            b.options.theme.callback && b.options.theme.callback.onClose && b.options.theme.callback.onClose.apply(b),
            b.options.dismissQueue || (a.noty.ontap = !0,
            a.notyRenderer.render()),
            b.options.maxVisible > 0 && b.options.dismissQueue && a.notyRenderer.render()
        },
        setText: function(a) {
            return this.closed || (this.options.text = a,
            this.$bar.find(".noty_text").html(a)),
            this
        },
        setType: function(a) {
            return this.closed || (this.options.type = a,
            this.options.theme.style.apply(this),
            this.options.theme.callback.onShow.apply(this)),
            this
        },
        setTimeout: function(a) {
            if (!this.closed) {
                var b = this;
                this.options.timeout = a,
                b.$bar.delay(b.options.timeout).promise().done(function() {
                    b.close()
                })
            }
            return this
        },
        stopPropagation: function(a) {
            a = a || window.event,
            "undefined" != typeof a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
        },
        closed: !1,
        showing: !1,
        shown: !1
    };
    a.notyRenderer = {},
    a.notyRenderer.init = function(c) {
        var d = Object.create(b).init(c);
        return d.options.killer && a.noty.closeAll(),
        d.options.force ? a.noty.queue.unshift(d) : a.noty.queue.push(d),
        a.notyRenderer.render(),
        "object" == a.noty.returns ? d : d.options.id
    }
    ,
    a.notyRenderer.render = function() {
        var b = a.noty.queue[0];
        "object" === a.type(b) ? b.options.dismissQueue ? b.options.maxVisible > 0 ? a(b.options.layout.container.selector + " > li").length < b.options.maxVisible && a.notyRenderer.show(a.noty.queue.shift()) : a.notyRenderer.show(a.noty.queue.shift()) : a.noty.ontap && (a.notyRenderer.show(a.noty.queue.shift()),
        a.noty.ontap = !1) : a.noty.ontap = !0
    }
    ,
    a.notyRenderer.show = function(b) {
        b.options.modal && (a.notyRenderer.createModalFor(b),
        a.notyRenderer.setModalCount(1)),
        b.options.custom ? 0 == b.options.custom.find(b.options.layout.container.selector).length ? b.options.custom.append(a(b.options.layout.container.object).addClass("i-am-new")) : b.options.custom.find(b.options.layout.container.selector).removeClass("i-am-new") : 0 == a(b.options.layout.container.selector).length ? a("body").append(a(b.options.layout.container.object).addClass("i-am-new")) : a(b.options.layout.container.selector).removeClass("i-am-new"),
        a.notyRenderer.setLayoutCountFor(b, 1),
        b.show()
    }
    ,
    a.notyRenderer.createModalFor = function(b) {
        if (0 == a(".noty_modal").length) {
            var c = a("<div/>").addClass("noty_modal").addClass(b.options.theme).data("noty_modal_count", 0);
            b.options.theme.modal && b.options.theme.modal.css && c.css(b.options.theme.modal.css),
            c.prependTo(a("body")).fadeIn(b.options.animation.fadeSpeed),
            a.inArray("backdrop", b.options.closeWith) > -1 && c.on("click", function(b) {
                a.noty.closeAll()
            })
        }
    }
    ,
    a.notyRenderer.getLayoutCountFor = function(b) {
        return a(b.options.layout.container.selector).data("noty_layout_count") || 0
    }
    ,
    a.notyRenderer.setLayoutCountFor = function(b, c) {
        return a(b.options.layout.container.selector).data("noty_layout_count", a.notyRenderer.getLayoutCountFor(b) + c)
    }
    ,
    a.notyRenderer.getModalCount = function() {
        return a(".noty_modal").data("noty_modal_count") || 0
    }
    ,
    a.notyRenderer.setModalCount = function(b) {
        return a(".noty_modal").data("noty_modal_count", a.notyRenderer.getModalCount() + b)
    }
    ,
    a.fn.noty = function(b) {
        return b.custom = a(this),
        a.notyRenderer.init(b)
    }
    ,
    a.noty = {},
    a.noty.queue = [],
    a.noty.ontap = !0,
    a.noty.layouts = {},
    a.noty.themes = {},
    a.noty.returns = "object",
    a.noty.store = {},
    a.noty.get = function(b) {
        return a.noty.store.hasOwnProperty(b) ? a.noty.store[b] : !1
    }
    ,
    a.noty.close = function(b) {
        return a.noty.get(b) ? a.noty.get(b).close() : !1
    }
    ,
    a.noty.setText = function(b, c) {
        return a.noty.get(b) ? a.noty.get(b).setText(c) : !1
    }
    ,
    a.noty.setType = function(b, c) {
        return a.noty.get(b) ? a.noty.get(b).setType(c) : !1
    }
    ,
    a.noty.clearQueue = function() {
        a.noty.queue = []
    }
    ,
    a.noty.closeAll = function() {
        a.noty.clearQueue(),
        a.each(a.noty.store, function(a, b) {
            b.close()
        })
    }
    ;
    var c = window.alert;
    return a.noty.consumeAlert = function(b) {
        window.alert = function(c) {
            b ? b.text = c : b = {
                text: c
            },
            a.notyRenderer.init(b)
        }
    }
    ,
    a.noty.stopConsumeAlert = function() {
        window.alert = c
    }
    ,
    a.noty.defaults = {
        layout: "top",
        theme: "defaultTheme",
        type: "alert",
        text: "",
        dismissQueue: !0,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
            open: {
                height: "toggle"
            },
            close: {
                height: "toggle"
            },
            easing: "swing",
            speed: 500,
            fadeSpeed: "fast"
        },
        timeout: !1,
        force: !1,
        modal: !1,
        maxVisible: 5,
        killer: !1,
        closeWith: ["click"],
        callback: {
            onShow: function() {},
            afterShow: function() {},
            onClose: function() {},
            afterClose: function() {},
            onCloseClick: function() {}
        },
        buttons: !1
    },
    a(window).on("resize", function() {
        a.each(a.noty.layouts, function(b, c) {
            c.container.style.apply(a(c.container.selector))
        })
    }),
    window.noty = function(b) {
        return a.notyRenderer.init(b)
    }
    ,
    a.noty.layouts.bottom = {
        name: "bottom",
        options: {},
        container: {
            object: '<ul id="noty_bottom_layout_container" />',
            selector: "ul#noty_bottom_layout_container",
            style: function() {
                a(this).css({
                    bottom: 0,
                    left: "5%",
                    position: "fixed",
                    width: "90%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    },
    a.noty.layouts.bottomCenter = {
        name: "bottomCenter",
        options: {},
        container: {
            object: '<ul id="noty_bottomCenter_layout_container" />',
            selector: "ul#noty_bottomCenter_layout_container",
            style: function() {
                a(this).css({
                    bottom: 20,
                    left: 0,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }),
                a(this).css({
                    left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px"
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    a.noty.layouts.bottomLeft = {
        name: "bottomLeft",
        options: {},
        container: {
            object: '<ul id="noty_bottomLeft_layout_container" />',
            selector: "ul#noty_bottomLeft_layout_container",
            style: function() {
                a(this).css({
                    bottom: 20,
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }),
                window.innerWidth < 600 && a(this).css({
                    left: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    a.noty.layouts.bottomRight = {
        name: "bottomRight",
        options: {},
        container: {
            object: '<ul id="noty_bottomRight_layout_container" />',
            selector: "ul#noty_bottomRight_layout_container",
            style: function() {
                a(this).css({
                    bottom: 20,
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }),
                window.innerWidth < 600 && a(this).css({
                    right: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    a.noty.layouts.center = {
        name: "center",
        options: {},
        container: {
            object: '<ul id="noty_center_layout_container" />',
            selector: "ul#noty_center_layout_container",
            style: function() {
                a(this).css({
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var b = a(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                a("body").append(b),
                b.find(".i-am-closing-now").remove(),
                b.find("li").css("display", "block");
                var c = b.height();
                b.remove(),
                a(this).hasClass("i-am-new") ? a(this).css({
                    left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px",
                    top: (a(window).height() - c) / 2 + "px"
                }) : a(this).animate({
                    left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px",
                    top: (a(window).height() - c) / 2 + "px"
                }, 500)
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    a.noty.layouts.centerLeft = {
        name: "centerLeft",
        options: {},
        container: {
            object: '<ul id="noty_centerLeft_layout_container" />',
            selector: "ul#noty_centerLeft_layout_container",
            style: function() {
                a(this).css({
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var b = a(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                a("body").append(b),
                b.find(".i-am-closing-now").remove(),
                b.find("li").css("display", "block");
                var c = b.height();
                b.remove(),
                a(this).hasClass("i-am-new") ? a(this).css({
                    top: (a(window).height() - c) / 2 + "px"
                }) : a(this).animate({
                    top: (a(window).height() - c) / 2 + "px"
                }, 500),
                window.innerWidth < 600 && a(this).css({
                    left: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    a.noty.layouts.centerRight = {
        name: "centerRight",
        options: {},
        container: {
            object: '<ul id="noty_centerRight_layout_container" />',
            selector: "ul#noty_centerRight_layout_container",
            style: function() {
                a(this).css({
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var b = a(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                a("body").append(b),
                b.find(".i-am-closing-now").remove(),
                b.find("li").css("display", "block");
                var c = b.height();
                b.remove(),
                a(this).hasClass("i-am-new") ? a(this).css({
                    top: (a(window).height() - c) / 2 + "px"
                }) : a(this).animate({
                    top: (a(window).height() - c) / 2 + "px"
                }, 500),
                window.innerWidth < 600 && a(this).css({
                    right: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    a.noty.layouts.inline = {
        name: "inline",
        options: {},
        container: {
            object: '<ul class="noty_inline_layout_container" />',
            selector: "ul.noty_inline_layout_container",
            style: function() {
                a(this).css({
                    width: "100%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    },
    a.noty.layouts.top = {
        name: "top",
        options: {},
        container: {
            object: '<ul id="noty_top_layout_container" />',
            selector: "ul#noty_top_layout_container",
            style: function() {
                a(this).css({
                    top: 0,
                    left: "5%",
                    position: "fixed",
                    width: "90%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    },
    a.noty.layouts.topCenter = {
        name: "topCenter",
        options: {},
        container: {
            object: '<ul id="noty_topCenter_layout_container" />',
            selector: "ul#noty_topCenter_layout_container",
            style: function() {
                a(this).css({
                    top: 20,
                    left: 0,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }),
                a(this).css({
                    left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px"
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    a.noty.layouts.topLeft = {
        name: "topLeft",
        options: {},
        container: {
            object: '<ul id="noty_topLeft_layout_container" />',
            selector: "ul#noty_topLeft_layout_container",
            style: function() {
                a(this).css({
                    top: 20,
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }),
                window.innerWidth < 600 && a(this).css({
                    left: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    a.noty.layouts.topRight = {
        name: "topRight",
        options: {},
        container: {
            object: '<ul id="noty_topRight_layout_container" />',
            selector: "ul#noty_topRight_layout_container",
            style: function() {
                a(this).css({
                    top: 20,
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }),
                window.innerWidth < 600 && a(this).css({
                    right: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    },
    a.noty.themes.bootstrapTheme = {
        name: "bootstrapTheme",
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function() {
            var b = this.options.layout.container.selector;
            switch (a(b).addClass("list-group"),
            this.$closeButton.append('<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>'),
            this.$closeButton.addClass("close"),
            this.$bar.addClass("list-group-item").css("padding", "0px"),
            this.options.type) {
            case "alert":
            case "notification":
                this.$bar.addClass("list-group-item-info");
                break;
            case "warning":
                this.$bar.addClass("list-group-item-warning");
                break;
            case "error":
                this.$bar.addClass("list-group-item-danger");
                break;
            case "information":
                this.$bar.addClass("list-group-item-info");
                break;
            case "success":
                this.$bar.addClass("list-group-item-success")
            }
            this.$message.css({
                fontSize: "13px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "8px 10px 9px",
                width: "auto",
                position: "relative"
            })
        },
        callback: {
            onShow: function() {},
            onClose: function() {}
        }
    },
    a.noty.themes.defaultTheme = {
        name: "defaultTheme",
        helpers: {
            borderFix: function() {
                if (this.options.dismissQueue) {
                    var b = this.options.layout.container.selector + " " + this.options.layout.parent.selector;
                    switch (this.options.layout.name) {
                    case "top":
                        a(b).css({
                            borderRadius: "0px 0px 0px 0px"
                        }),
                        a(b).last().css({
                            borderRadius: "0px 0px 5px 5px"
                        });
                        break;
                    case "topCenter":
                    case "topLeft":
                    case "topRight":
                    case "bottomCenter":
                    case "bottomLeft":
                    case "bottomRight":
                    case "center":
                    case "centerLeft":
                    case "centerRight":
                    case "inline":
                        a(b).css({
                            borderRadius: "0px 0px 0px 0px"
                        }),
                        a(b).first().css({
                            "border-top-left-radius": "5px",
                            "border-top-right-radius": "5px"
                        }),
                        a(b).last().css({
                            "border-bottom-left-radius": "5px",
                            "border-bottom-right-radius": "5px"
                        });
                        break;
                    case "bottom":
                        a(b).css({
                            borderRadius: "0px 0px 0px 0px"
                        }),
                        a(b).first().css({
                            borderRadius: "5px 5px 0px 0px"
                        })
                    }
                }
            }
        },
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function() {
            switch (this.$bar.css({
                overflow: "hidden",
                background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAQAAAClM0ndAAAAhklEQVR4AdXO0QrCMBBE0bttkk38/w8WRERpdyjzVOc+HxhIHqJGMQcFFkpYRQotLLSw0IJ5aBdovruMYDA/kT8plF9ZKLFQcgF18hDj1SbQOMlCA4kao0iiXmah7qBWPdxpohsgVZyj7e5I9KcID+EhiDI5gxBYKLBQYKHAQoGFAoEks/YEGHYKB7hFxf0AAAAASUVORK5CYII=') repeat-x scroll left top #fff"
            }),
            this.$message.css({
                fontSize: "13px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "8px 10px 9px",
                width: "auto",
                position: "relative"
            }),
            this.$closeButton.css({
                position: "absolute",
                top: 4,
                right: 4,
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: "none",
                cursor: "pointer"
            }),
            this.$buttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            }),
            this.$buttons.find("button").css({
                marginLeft: 5
            }),
            this.$buttons.find("button:first").css({
                marginLeft: 0
            }),
            this.$bar.on({
                mouseenter: function() {
                    a(this).find(".noty_close").stop().fadeTo("normal", 1)
                },
                mouseleave: function() {
                    a(this).find(".noty_close").stop().fadeTo("normal", 0)
                }
            }),
            this.options.layout.name) {
            case "top":
                this.$bar.css({
                    borderRadius: "0px 0px 5px 5px",
                    borderBottom: "2px solid #eee",
                    borderLeft: "2px solid #eee",
                    borderRight: "2px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
            case "topCenter":
            case "center":
            case "bottomCenter":
            case "inline":
                this.$bar.css({
                    borderRadius: "5px",
                    border: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }),
                this.$message.css({
                    fontSize: "13px",
                    textAlign: "center"
                });
                break;
            case "topLeft":
            case "topRight":
            case "bottomLeft":
            case "bottomRight":
            case "centerLeft":
            case "centerRight":
                this.$bar.css({
                    borderRadius: "5px",
                    border: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }),
                this.$message.css({
                    fontSize: "13px",
                    textAlign: "left"
                });
                break;
            case "bottom":
                this.$bar.css({
                    borderRadius: "5px 5px 0px 0px",
                    borderTop: "2px solid #eee",
                    borderLeft: "2px solid #eee",
                    borderRight: "2px solid #eee",
                    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
            default:
                this.$bar.css({
                    border: "2px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                })
            }
            switch (this.options.type) {
            case "alert":
            case "notification":
                this.$bar.css({
                    backgroundColor: "#FFF",
                    borderColor: "#CCC",
                    color: "#444"
                });
                break;
            case "warning":
                this.$bar.css({
                    backgroundColor: "#FFEAA8",
                    borderColor: "#FFC237",
                    color: "#826200"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #FFC237"
                });
                break;
            case "error":
                this.$bar.css({
                    backgroundColor: "red",
                    borderColor: "darkred",
                    color: "#FFF"
                }),
                this.$message.css({
                    fontWeight: "bold"
                }),
                this.$buttons.css({
                    borderTop: "1px solid darkred"
                });
                break;
            case "information":
                this.$bar.css({
                    backgroundColor: "#57B7E2",
                    borderColor: "#0B90C4",
                    color: "#FFF"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #0B90C4"
                });
                break;
            case "success":
                this.$bar.css({
                    backgroundColor: "lightgreen",
                    borderColor: "#50C24E",
                    color: "darkgreen"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #50C24E"
                });
                break;
            default:
                this.$bar.css({
                    backgroundColor: "#FFF",
                    borderColor: "#CCC",
                    color: "#444"
                })
            }
        },
        callback: {
            onShow: function() {
                a.noty.themes.defaultTheme.helpers.borderFix.apply(this)
            },
            onClose: function() {
                a.noty.themes.defaultTheme.helpers.borderFix.apply(this)
            }
        }
    },
    a.noty.themes.relax = {
        name: "relax",
        helpers: {},
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function() {
            switch (this.$bar.css({
                overflow: "hidden",
                margin: "4px 0",
                borderRadius: "2px"
            }),
            this.$message.css({
                fontSize: "14px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "10px",
                width: "auto",
                position: "relative"
            }),
            this.$closeButton.css({
                position: "absolute",
                top: 4,
                right: 4,
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: "none",
                cursor: "pointer"
            }),
            this.$buttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            }),
            this.$buttons.find("button").css({
                marginLeft: 5
            }),
            this.$buttons.find("button:first").css({
                marginLeft: 0
            }),
            this.$bar.on({
                mouseenter: function() {
                    a(this).find(".noty_close").stop().fadeTo("normal", 1)
                },
                mouseleave: function() {
                    a(this).find(".noty_close").stop().fadeTo("normal", 0)
                }
            }),
            this.options.layout.name) {
            case "top":
                this.$bar.css({
                    borderBottom: "2px solid #eee",
                    borderLeft: "2px solid #eee",
                    borderRight: "2px solid #eee",
                    borderTop: "2px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
            case "topCenter":
            case "center":
            case "bottomCenter":
            case "inline":
                this.$bar.css({
                    border: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }),
                this.$message.css({
                    fontSize: "13px",
                    textAlign: "center"
                });
                break;
            case "topLeft":
            case "topRight":
            case "bottomLeft":
            case "bottomRight":
            case "centerLeft":
            case "centerRight":
                this.$bar.css({
                    border: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }),
                this.$message.css({
                    fontSize: "13px",
                    textAlign: "left"
                });
                break;
            case "bottom":
                this.$bar.css({
                    borderTop: "2px solid #eee",
                    borderLeft: "2px solid #eee",
                    borderRight: "2px solid #eee",
                    borderBottom: "2px solid #eee",
                    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
            default:
                this.$bar.css({
                    border: "2px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                })
            }
            switch (this.options.type) {
            case "alert":
            case "notification":
                this.$bar.css({
                    backgroundColor: "#FFF",
                    borderColor: "#dedede",
                    color: "#444"
                });
                break;
            case "warning":
                this.$bar.css({
                    backgroundColor: "#FFEAA8",
                    borderColor: "#FFC237",
                    color: "#826200"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #FFC237"
                });
                break;
            case "error":
                this.$bar.css({
                    backgroundColor: "#FF8181",
                    borderColor: "#e25353",
                    color: "#FFF"
                }),
                this.$message.css({
                    fontWeight: "bold"
                }),
                this.$buttons.css({
                    borderTop: "1px solid darkred"
                });
                break;
            case "information":
                this.$bar.css({
                    backgroundColor: "#78C5E7",
                    borderColor: "#3badd6",
                    color: "#FFF"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #0B90C4"
                });
                break;
            case "success":
                this.$bar.css({
                    backgroundColor: "#BCF5BC",
                    borderColor: "#7cdd77",
                    color: "darkgreen"
                }),
                this.$buttons.css({
                    borderTop: "1px solid #50C24E"
                });
                break;
            default:
                this.$bar.css({
                    backgroundColor: "#FFF",
                    borderColor: "#CCC",
                    color: "#444"
                })
            }
        },
        callback: {
            onShow: function() {},
            onClose: function() {}
        }
    },
    window.noty
});
!function(e) {
    var t = (0,
    eval)("this")
      , n = t.jQuery;
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = n ? e(n) : function(t) {
        if (t && !t.fn)
            throw "Provide jQuery or null";
        return e(t)
    }
     : e(!1)
}(function(e) {
    "use strict";
    function t(e, t) {
        return function() {
            var n, r = this, i = r.base;
            return r.base = e,
            n = t.apply(r, arguments),
            r.base = i,
            n
        }
    }
    function n(e, n) {
        return z(n) && (n = t(e ? e._d ? e : t(a, e) : a, n),
        n._d = 1),
        n
    }
    function r(e, t) {
        for (var r in t.props)
            xe.test(r) && (e[r] = n(e[r], t.props[r]))
    }
    function i(e) {
        return e
    }
    function a() {
        return ""
    }
    function s(e) {
        try {
            throw "dbg breakpoint"
        } catch (t) {}
        return this.base ? this.baseApply(arguments) : e
    }
    function o(e) {
        ne._dbgMode = e !== !1
    }
    function d(t) {
        this.name = (e.link ? "JsViews" : "JsRender") + " Error",
        this.message = t || this.name
    }
    function p(e, t) {
        var n;
        for (n in t)
            e[n] = t[n];
        return e
    }
    function l(e, t, n) {
        return (0 !== this || e) && (ae = e ? e.charAt(0) : ae,
        se = e ? e.charAt(1) : se,
        oe = t ? t.charAt(0) : oe,
        de = t ? t.charAt(1) : de,
        pe = n || pe,
        e = "\\" + ae + "(\\" + pe + ")?\\" + se,
        t = "\\" + oe + "\\" + de,
        H = "(?:(?:(\\w+(?=[\\/\\s\\" + oe + "]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))\\s*((?:[^\\" + oe + "]|\\" + oe + "(?!\\" + de + "))*?)",
        te.rTag = H + ")",
        H = new RegExp(e + H + "(\\/)?|(?:\\/(\\w+)))" + t,"g"),
        D = new RegExp("<.*>|([^\\\\]|^)[{}]|" + e + ".*" + t)),
        [ae, se, oe, de, pe]
    }
    function u(e, t) {
        t || (t = e,
        e = void 0);
        var n, r, i, a, s = this, o = !t || "root" === t;
        if (e) {
            if (a = s.type === t ? s : void 0,
            !a)
                if (n = s.views,
                s._.useKey) {
                    for (r in n)
                        if (a = n[r].get(e, t))
                            break
                } else
                    for (r = 0,
                    i = n.length; !a && i > r; r++)
                        a = n[r].get(e, t)
        } else if (o)
            for (; s.parent.parent; )
                a = s = s.parent;
        else
            for (; s && !a; )
                a = s.type === t ? s : void 0,
                s = s.parent;
        return a
    }
    function c() {
        var e = this.get("item");
        return e ? e.index : void 0
    }
    function f() {
        return this.index
    }
    function g(e) {
        var t, n = this, r = n.linkCtx, i = (n.ctx || {})[e];
        return void 0 === i && r && r.ctx && (i = r.ctx[e]),
        void 0 === i && (i = Y[e]),
        i && z(i) && !i._wrp && (t = function() {
            return i.apply(this && this !== B ? this : n, arguments)
        }
        ,
        t._wrp = !0,
        p(t, i)),
        t || i
    }
    function v(e, t, n, i) {
        var a, s, o = "number" == typeof n && t.tmpl.bnds[n - 1], d = t.linkCtx;
        return void 0 !== i ? n = i = {
            props: {},
            args: [i]
        } : o && (n = o(t.data, t, Z)),
        s = n.args[0],
        (e || o) && (a = d && d.tag,
        a || (a = p(new te._tg, {
            _: {
                inline: !d,
                bnd: o,
                unlinked: !0
            },
            tagName: ":",
            cvt: e,
            flow: !0,
            tagCtx: n
        }),
        d && (d.tag = a,
        a.linkCtx = d),
        n.ctx = U(n.ctx, (d ? d.view : t).ctx)),
        a._er = i && s,
        r(a, n),
        n.view = t,
        a.ctx = n.ctx || {},
        n.ctx = void 0,
        t._.tag = a,
        s = a.cvtArgs(a.convert || "true" !== e && e)[0],
        s = o && t._.onRender ? t._.onRender(s, t, o) : s,
        t._.tag = void 0),
        void 0 != s ? s : ""
    }
    function m(e) {
        var t = this
          , n = t.tagCtx
          , r = n.view
          , i = n.args;
        return e = t.convert || e,
        e = e && ("" + e === e ? r.getRsc("converters", e) || V("Unknown converter: '" + e + "'") : e),
        i = i.length || n.index ? e ? i.slice() : i : [r.data],
        e && (e.depends && (t.depends = te.getDeps(t.depends, t, e.depends, e)),
        i[0] = e.apply(t, i)),
        i
    }
    function h(e, t) {
        for (var n, r, i = this; void 0 === n && i; )
            r = i.tmpl && i.tmpl[e],
            n = r && r[t],
            i = i.parent;
        return n || Z[e][t]
    }
    function w(e, t, n, i, a, s) {
        t = t || P;
        var o, d, p, l, u, c, f, g, v, m, h, w, b, x, _, y, k, j, C, A = "", R = t.linkCtx || 0, M = t.ctx, $ = n || t.tmpl, N = "number" == typeof i && t.tmpl.bnds[i - 1];
        for ("tag" === e._is ? (o = e,
        e = o.tagName,
        i = o.tagCtxs,
        p = o.template) : (d = t.getRsc("tags", e) || V("Unknown tag: {{" + e + "}} "),
        p = d.template),
        void 0 !== s ? (A += s,
        i = s = [{
            props: {},
            args: []
        }]) : N && (i = N(t.data, t, Z)),
        g = i.length,
        f = 0; g > f; f++)
            m = i[f],
            (!R || !R.tag || f && !R.tag._.inline || o._er) && ((w = m.tmpl) && (w = m.content = $.tmpls[w - 1]),
            m.index = f,
            m.tmpl = p || w,
            m.render = T,
            m.view = t,
            m.ctx = U(m.ctx, M)),
            (n = m.props.tmpl) && (n = "" + n === n ? t.getRsc("templates", n) || W(n) : n,
            m.tmpl = n),
            o || (o = new d._ctr,
            b = !!o.init,
            o.parent = c = M && M.tag,
            o.tagCtxs = i,
            C = o.dataMap,
            R && (o._.inline = !1,
            R.tag = o,
            o.linkCtx = R),
            (o._.bnd = N || R.fn) ? o._.arrVws = {} : o.dataBoundOnly && V("{^{" + e + "}} tag must be data-bound")),
            i = o.tagCtxs,
            C = o.dataMap,
            m.tag = o,
            C && i && (m.map = i[f].map),
            o.flow || (h = m.ctx = m.ctx || {},
            l = o.parents = h.parentTags = M && U(h.parentTags, M.parentTags) || {},
            c && (l[c.tagName] = c),
            l[o.tagName] = h.tag = o);
        if ((N || R) && (t._.tag = o),
        !(o._er = s)) {
            for (r(o, i[0]),
            o.rendering = {},
            f = 0; g > f; f++)
                m = o.tagCtx = i[f],
                k = m.props,
                y = o.cvtArgs(),
                (x = k.dataMap || C) && (y.length || k.dataMap) && (_ = m.map,
                (!_ || _.src !== y[0] || a) && (_ && _.src && _.unmap(),
                _ = m.map = x.map(y[0], k, void 0, !o._.bnd)),
                y = [_.tgt]),
                o.ctx = m.ctx,
                f || (b && (j = o.template,
                o.init(m, R, o.ctx),
                b = void 0,
                o.template !== j && (o._.tmpl = o.template)),
                R && (R.attr = o.attr = R.attr || o.attr),
                u = o.attr,
                o._.noVws = u && u !== je),
                v = void 0,
                o.render && (v = o.render.apply(o, y)),
                y.length || (y = [t]),
                void 0 === v && (v = m.render(y.length ? y[0] : t, !0) || (a ? void 0 : "")),
                A = A ? A + (v || "") : v;
            o.rendering = void 0
        }
        return o.tagCtx = i[0],
        o.ctx = o.tagCtx.ctx,
        o._.noVws && o._.inline && (A = "text" === u ? X.html(A) : ""),
        N && t._.onRender ? t._.onRender(A, t, N) : A
    }
    function b(e, t, n, r, i, a, s, o) {
        var d, p, l, u, f = this, g = "array" === t;
        f.content = s,
        f.views = g ? [] : {},
        f.parent = n,
        f.type = t || "top",
        f.data = r,
        f.tmpl = i,
        u = f._ = {
            key: 0,
            useKey: g ? 0 : 1,
            id: "" + ye++,
            onRender: o,
            bnds: {}
        },
        f.linked = !!o,
        n ? (d = n.views,
        p = n._,
        p.useKey ? (d[u.key = "_" + p.useKey++] = f,
        f.index = Re,
        f.getIndex = c,
        l = p.tag,
        u.bnd = g && (!l || !!l._.bnd && l)) : d.length === (u.key = f.index = a) ? d.push(f) : d.splice(a, 0, f),
        f.ctx = e || n.ctx) : f.ctx = e
    }
    function x(e) {
        var t, n, r, i, a, s, o;
        for (t in Ne)
            if (a = Ne[t],
            (s = a.compile) && (n = e[t + "s"]))
                for (r in n)
                    i = n[r] = s(r, n[r], e, 0),
                    i._is = t,
                    i && (o = te.onStore[t]) && o(r, i, s)
    }
    function _(e, t, r) {
        function i() {
            var t = this;
            t._ = {
                inline: !0,
                unlinked: !0
            },
            t.tagName = e
        }
        var a, s, o, d = new te._tg;
        if (z(t) ? t = {
            depends: t.depends,
            render: t
        } : "" + t === t && (t = {
            template: t
        }),
        s = t.baseTag) {
            t.flow = !!t.flow,
            t.baseTag = s = "" + s === s ? r && r.tags[s] || ee[s] : s,
            d = p(d, s);
            for (o in t)
                d[o] = n(s[o], t[o])
        } else
            d = p(d, t);
        return void 0 !== (a = d.template) && (d.template = "" + a === a ? W[a] || W(a) : a),
        d.init !== !1 && ((i.prototype = d).constructor = d._ctr = i),
        r && (d._parentTmpl = r),
        d
    }
    function y(e) {
        return this.base.apply(this, e)
    }
    function k(t, n, r, i) {
        function a(n) {
            var a, o;
            if ("" + n === n || n.nodeType > 0 && (s = n)) {
                if (!s)
                    if (/^\.\/[^\\:*?"<>]*$/.test(n))
                        (o = W[t = t || n]) ? n = o : s = document.getElementById(n);
                    else if (e.fn && !D.test(n))
                        try {
                            s = e(document).find(n)[0]
                        } catch (d) {}
                s && (i ? n = s.innerHTML : (a = s.getAttribute(Ae),
                a ? a !== Te ? (n = W[a],
                delete W[a]) : e.fn && (n = e.data(s)[Te]) : (t = t || (e.fn ? Te : n),
                n = k(t, s.innerHTML, r, i)),
                n.tmplName = t = t || a,
                t !== Te && (W[t] = n),
                s.setAttribute(Ae, t),
                e.fn && e.data(s, Te, n))),
                s = void 0
            } else
                n.fn || (n = void 0);
            return n
        }
        var s, o, d = n = n || "";
        return 0 === i && (i = void 0,
        d = a(d)),
        i = i || (n.markup ? n : {}),
        i.tmplName = t,
        r && (i._parentTmpl = r),
        !d && n.markup && (d = a(n.markup)) && d.fn && (d = d.markup),
        void 0 !== d ? (d.fn || n.fn ? d.fn && (o = d) : (n = C(d, i),
        $(d.replace(ge, "\\$&"), n)),
        o || (x(i),
        o = p(function() {
            return n.render.apply(n, arguments)
        }, n)),
        t && !r && t !== Te && (Ve[t] = o),
        o) : void 0
    }
    function j(e) {
        function t(t, n) {
            this.tgt = e.getTgt(t, n)
        }
        return z(e) && (e = {
            getTgt: e
        }),
        e.baseMap && (e = p(p({}, e.baseMap), e)),
        e.map = function(e, n) {
            return new t(e,n)
        }
        ,
        e
    }
    function C(t, n) {
        var r, i = ne.wrapMap || {}, a = p({
            tmpls: [],
            links: {},
            bnds: [],
            _is: "template",
            render: T
        }, n);
        return a.markup = t,
        n.htmlTag || (r = he.exec(t),
        a.htmlTag = r ? r[1].toLowerCase() : ""),
        r = i[a.htmlTag],
        r && r !== i.div && (a.markup = e.trim(a.markup)),
        a
    }
    function A(e, t) {
        function n(i, a, s) {
            var o, d, p, l;
            if (i && typeof i === Ce && !i.nodeType && !i.markup && !i.getTgt) {
                for (p in i)
                    n(p, i[p], a);
                return Z
            }
            return void 0 === a && (a = i,
            i = void 0),
            i && "" + i !== i && (s = a,
            a = i,
            i = void 0),
            l = s ? s[r] = s[r] || {} : n,
            d = t.compile,
            null  === a ? i && delete l[i] : (a = d ? d(i, a, s, 0) : a,
            i && (l[i] = a)),
            d && a && (a._is = e),
            a && (o = te.onStore[e]) && o(i, a, d),
            a
        }
        var r = e + "s";
        Z[r] = n
    }
    function T(e, t, n, r, i, a) {
        var s, o, d, p, l, u, c, f, g = r, v = "";
        if (t === !0 ? (n = t,
        t = void 0) : typeof t !== Ce && (t = void 0),
        (d = this.tag) ? (l = this,
        p = d._.tmpl || l.tmpl,
        g = g || l.view,
        arguments.length || (e = g)) : p = this,
        p) {
            if (!g && e && "view" === e._is && (g = e),
            g && e === g && (e = g.data),
            p.fn || (p = d._.tmpl = W[p] || W(p)),
            u = !g,
            re = re || u,
            g || ((t = t || {}).root = e),
            !re || ne.useViews || p.useViews || g && g !== P)
                v = R(p, e, t, n, g, i, a, d);
            else {
                if (g ? (c = g.data,
                f = g.index,
                g.index = Re) : (g = P,
                g.data = e,
                g.ctx = t),
                G(e) && !n)
                    for (s = 0,
                    o = e.length; o > s; s++)
                        g.index = s,
                        g.data = e[s],
                        v += p.fn(e[s], g, Z);
                else
                    v += p.fn(e, g, Z);
                g.data = c,
                g.index = f
            }
            u && (re = void 0)
        }
        return v
    }
    function R(e, t, n, r, i, a, s, o) {
        function d(e) {
            _ = p({}, n),
            _[x] = e
        }
        var l, u, c, f, g, v, m, h, w, x, _, y, k = "";
        if (o && (w = o.tagName,
        y = o.tagCtx,
        n = n ? U(n, o.ctx) : o.ctx,
        m = y.content,
        y.props.link === !1 && (n = n || {},
        n.link = !1),
        (x = y.props.itemVar) && ("~" !== x.charAt(0) && M("Use itemVar='~myItem'"),
        x = x.slice(1))),
        i && (m = m || i.content,
        s = s || i._.onRender,
        n = U(n, i.ctx)),
        a === !0 && (v = !0,
        a = 0),
        s && (n && n.link === !1 || o && o._.noVws) && (s = void 0),
        h = s,
        s === !0 && (h = void 0,
        s = i._.onRender),
        n = e.helpers ? U(e.helpers, n) : n,
        _ = n,
        G(t) && !r)
            for (c = v ? i : void 0 !== a && i || new b(n,"array",i,t,e,a,m,s),
            x && (c.it = x),
            x = c.it,
            l = 0,
            u = t.length; u > l; l++)
                x && d(t[l]),
                f = new b(_,"item",c,t[l],e,(a || 0) + l,m,s),
                g = e.fn(t[l], f, Z),
                k += c._.onRender ? c._.onRender(g, f) : g;
        else
            x && d(t),
            c = v ? i : new b(_,w || "data",i,t,e,a,m,s),
            o && !o.flow && (c.tag = o),
            k += e.fn(t, c, Z);
        return h ? h(k, c) : k
    }
    function V(e, t, n) {
        var r = ne.onError(e, t, n);
        if ("" + e === e)
            throw new te.Err(r);
        return !t.linkCtx && t.linked ? X.html(r) : r
    }
    function M(e) {
        V("Syntax error\n" + e)
    }
    function $(e, t, n, r, i) {
        function a(t) {
            t -= f,
            t && v.push(e.substr(f, t).replace(ce, "\\n"))
        }
        function s(t, n) {
            t && (t += "}}",
            M((n ? "{{" + n + "}} block has {{/" + t + " without {{" + t : "Unmatched or missing {{/" + t) + ", in template:\n" + e))
        }
        function o(o, d, c, h, w, b, x, _, y, k, j, C) {
            b && (w = ":",
            h = je),
            k = k || n && !i;
            var A = (d || n) && [[]]
              , T = ""
              , R = ""
              , V = ""
              , $ = ""
              , N = ""
              , F = ""
              , I = ""
              , U = ""
              , J = !k && !w && !x;
            c = c || (y = y || "#data",
            w),
            a(C),
            f = C + o.length,
            _ ? u && v.push(["*", "\n" + y.replace(/^:/, "ret+= ").replace(fe, "$1") + ";\n"]) : c ? ("else" === c && (me.test(y) && M('for "{{else if expr}}" use "{{else expr}}"'),
            A = m[7] && [[]],
            m[8] = e.substring(m[8], C),
            m = g.pop(),
            v = m[2],
            J = !0),
            y && S(y.replace(ce, " "), A, t).replace(ve, function(e, t, n, r, i, a, s, o) {
                return r = "'" + i + "':",
                s ? (R += a + ",",
                $ += "'" + o + "',") : n ? (V += r + a + ",",
                F += r + "'" + o + "',") : t ? I += a : ("trigger" === i && (U += a),
                T += r + a + ",",
                N += r + "'" + o + "',",
                l = l || xe.test(i)),
                ""
            }).slice(0, -1),
            A && A[0] && A.pop(),
            p = [c, h || !!r || l || "", J && [], E($, N, F), E(R, T, V), I, U, A || 0],
            v.push(p),
            J && (g.push(m),
            m = p,
            m[8] = f)) : j && (s(j !== m[0] && "else" !== m[0] && j, m[0]),
            m[8] = e.substring(m[8], C),
            m = g.pop()),
            s(!m && j),
            v = m[2]
        }
        var d, p, l, u = ne.allowCode || t && t.allowCode, c = [], f = 0, g = [], v = c, m = [, , c];
        return u && (t.allowCode = u),
        n && (e = ae + e + de),
        s(g[0] && g[0][2].pop()[0]),
        e.replace(H, o),
        a(e.length),
        (f = c[c.length - 1]) && s("" + f !== f && +f[8] === f[8] && f[0]),
        n ? (d = I(c, e, n),
        N(d, [c[0][7]])) : d = I(c, t),
        d
    }
    function N(e, t) {
        var n, r, i = 0, a = t.length;
        for (e.deps = []; a > i; i++) {
            r = t[i];
            for (n in r)
                "_jsvto" !== n && r[n].length && (e.deps = e.deps.concat(r[n]))
        }
        e.paths = r
    }
    function E(e, t, n) {
        return [e.slice(0, -1), t.slice(0, -1), n.slice(0, -1)]
    }
    function F(e, t) {
        return "\n	" + (t ? t + ":{" : "") + "args:[" + e[0] + "]" + (e[1] || !t ? ",\n	props:{" + e[1] + "}" : "") + (e[2] ? ",\n	ctx:{" + e[2] + "}" : "")
    }
    function S(e, t, n) {
        function r(r, h, w, b, x, _, y, k, j, C, A, T, R, V, N, E, F, S, I, U) {
            function J(e, n, r, s, o, d, u, c) {
                var f = "." === r;
                if (r && (x = x.slice(n.length),
                f || (e = (s ? 'view.hlp("' + s + '")' : o ? "view" : "data") + (c ? (d ? "." + d : s ? "" : o ? "" : "." + r) + (u || "") : (c = s ? "" : o ? d || "" : r,
                "")),
                e += c ? "." + c : "",
                e = n + ("view.data" === e.slice(0, 9) ? e.slice(5) : e)),
                p)) {
                    if (q = "linkTo" === i ? a = t._jsvto = t._jsvto || [] : l.bd,
                    B = f && q[q.length - 1]) {
                        if (B._jsv) {
                            for (; B.sb; )
                                B = B.sb;
                            B.bnd && (x = "^" + x.slice(1)),
                            B.sb = x,
                            B.bnd = B.bnd || "^" === x.charAt(0)
                        }
                    } else
                        q.push(x);
                    m[g] = I + (f ? 1 : 0)
                }
                return e
            }
            b = p && b,
            b && !k && (x = b + x),
            _ = _ || "",
            w = w || h || T,
            x = x || j,
            C = C || F || "";
            var K, O, q, B, L;
            if (!y || d || o) {
                if (p && E && !d && !o && (!i || s || a) && (K = m[g - 1],
                U.length - 1 > I - (K || 0))) {
                    if (K = U.slice(K, I + r.length),
                    O !== !0)
                        if (q = a || u[g - 1].bd,
                        B = q[q.length - 1],
                        B && B.prm) {
                            for (; B.sb && B.sb.prm; )
                                B = B.sb;
                            L = B.sb = {
                                path: B.sb,
                                bnd: B.bnd
                            }
                        } else
                            q.push(L = {
                                path: q.pop()
                            });
                    E = se + ":" + K + " onerror=''" + oe,
                    O = f[E],
                    O || (f[E] = !0,
                    f[E] = O = $(E, n, !0)),
                    O !== !0 && L && (L._jsv = O,
                    L.prm = l.bd,
                    L.bnd = L.bnd || L.path && L.path.indexOf("^") >= 0)
                }
                return d ? (d = !R,
                d ? r : T + '"') : o ? (o = !V,
                o ? r : T + '"') : (w ? (m[g] = I++,
                l = u[++g] = {
                    bd: []
                },
                w) : "") + (S ? g ? "" : (c = U.slice(c, I),
                (i ? (i = s = a = !1,
                "\b") : "\b,") + c + (c = I + r.length,
                p && t.push(l.bd = []),
                "\b")) : k ? (g && M(e),
                p && t.pop(),
                i = x,
                s = b,
                c = I + r.length,
                b && (p = l.bd = t[i] = []),
                x + ":") : x ? x.split("^").join(".").replace(le, J) + (C ? (l = u[++g] = {
                    bd: []
                },
                v[g] = !0,
                C) : _) : _ ? _ : N ? (v[g] = !1,
                l = u[--g],
                N + (C ? (l = u[++g],
                v[g] = !0,
                C) : "")) : A ? (v[g] || M(e),
                ",") : h ? "" : (d = R,
                o = V,
                '"'))
            }
            M(e)
        }
        var i, a, s, o, d, p = t && t[0], l = {
            bd: p
        }, u = {
            0: l
        }, c = 0, f = n ? n.links : p && (p.links = p.links || {}), g = 0, v = {}, m = {}, h = (e + (n ? " " : "")).replace(ue, r);
        return !g && h || M(e)
    }
    function I(e, t, n) {
        var r, i, a, s, o, d, p, l, u, c, f, g, v, m, h, w, b, x, _, y, k, j, A, T, R, V, $, E, S, U, J = 0, K = ne.useViews || t.useViews || t.tags || t.templates || t.helpers || t.converters, O = "", q = {}, B = e.length;
        for ("" + t === t ? (x = n ? 'data-link="' + t.replace(ce, " ").slice(1, -1) + '"' : t,
        t = 0) : (x = t.tmplName || "unnamed",
        t.allowCode && (q.allowCode = !0),
        t.debug && (q.debug = !0),
        f = t.bnds,
        b = t.tmpls),
        r = 0; B > r; r++)
            if (i = e[r],
            "" + i === i)
                O += '\n+"' + i + '"';
            else if (a = i[0],
            "*" === a)
                O += ";\n" + i[1] + "\nret=ret";
            else {
                if (s = i[1],
                k = !n && i[2],
                o = F(i[3], "params") + "}," + F(v = i[4]),
                E = i[5],
                U = i[6],
                j = i[8] && i[8].replace(fe, "$1"),
                (R = "else" === a) ? g && g.push(i[7]) : (J = 0,
                f && (g = i[7]) && (g = [g],
                J = f.push(1))),
                K = K || v[1] || v[2] || g || /view.(?!index)/.test(v[0]),
                (V = ":" === a) ? s && (a = s === je ? ">" : s + a) : (k && (_ = C(j, q),
                _.tmplName = x + "/" + a,
                _.useViews = _.useViews || K,
                I(k, _),
                K = _.useViews,
                b.push(_)),
                R || (y = a,
                K = K || a && (!ee[a] || !ee[a].flow),
                T = O,
                O = ""),
                A = e[r + 1],
                A = A && "else" === A[0]),
                S = E ? ";\ntry{\nret+=" : "\n+",
                m = "",
                h = "",
                V && (g || U || s && s !== je)) {
                    if ($ = "return {" + o + "};",
                    w = 'c("' + s + '",view,',
                    $ = new Function("data,view,j,u"," // " + x + " " + J + " " + a + "\n" + $),
                    $._er = E,
                    m = w + J + ",",
                    h = ")",
                    $._tag = a,
                    n)
                        return $;
                    N($, g),
                    c = !0
                }
                if (O += V ? (n ? (E ? "\ntry{\n" : "") + "return " : S) + (c ? (c = void 0,
                K = u = !0,
                w + (g ? (f[J - 1] = $,
                J) : "{" + o + "}") + ")") : ">" === a ? (p = !0,
                "h(" + v[0] + ")") : (l = !0,
                "((v=" + (v[0] || "data") + ')!=null?v:"")')) : (d = !0,
                "\n{view:view,tmpl:" + (k ? b.length : "0") + "," + o + "},"),
                y && !A) {
                    if (O = "[" + O.slice(0, -1) + "]",
                    w = 't("' + y + '",view,this,',
                    n || g) {
                        if (O = new Function("data,view,j,u"," // " + x + " " + J + " " + y + "\nreturn " + O + ";"),
                        O._er = E,
                        O._tag = y,
                        g && N(f[J - 1] = O, g),
                        n)
                            return O;
                        m = w + J + ",undefined,",
                        h = ")"
                    }
                    O = T + S + w + (J || O) + ")",
                    g = 0,
                    y = 0
                }
                E && (K = !0,
                O += ";\n}catch(e){ret" + (n ? "urn " : "+=") + m + "j._err(e,view," + E + ")" + h + ";}\n" + (n ? "" : "ret=ret"))
            }
        O = "// " + x + "\nvar v" + (d ? ",t=j._tag" : "") + (u ? ",c=j._cnvt" : "") + (p ? ",h=j.converters.html" : "") + (n ? ";\n" : ',ret=""\n') + (q.debug ? "debugger;" : "") + O + (n ? "\n" : ";\nreturn ret;"),
        ne._dbgMode && (O = "try {\n" + O + "\n}catch(e){\nreturn j._err(e, view);\n}");
        try {
            O = new Function("data,view,j,u",O)
        } catch (L) {
            M("Compiled template code:\n\n" + O + '\n: "' + L.message + '"')
        }
        return t && (t.fn = O,
        t.useViews = !!K),
        O
    }
    function U(e, t) {
        return e && e !== t ? t ? p(p({}, t), e) : e : t && p({}, t)
    }
    function J(e) {
        return ke[e] || (ke[e] = "&#" + e.charCodeAt(0) + ";")
    }
    function K(e) {
        var t, n, r = [];
        if (typeof e === Ce)
            for (t in e)
                n = e[t],
                n && n.toJSON && !n.toJSON() || z(n) || r.push({
                    key: t,
                    prop: n
                });
        return r
    }
    function O(t, n, r) {
        var i = this.jquery && (this[0] || V('Unknown template: "' + this.selector + '"'))
          , a = i.getAttribute(Ae);
        return T.call(a ? e.data(i)[Te] : W(i), t, n, r)
    }
    function q(e) {
        return void 0 != e ? be.test(e) && ("" + e).replace(_e, J) || e : ""
    }
    var B = (0,
    eval)("this")
      , L = e === !1;
    e = e && e.fn ? e : B.jQuery;
    var Q, H, D, P, Z, z, G, W, X, Y, ee, te, ne, re, ie = "v1.0.0-beta", ae = "{", se = "{", oe = "}", de = "}", pe = "^", le = /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g, ue = /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^\(\[])|[)\]])([([]?))|(\s+)/g, ce = /[ \t]*(\r\n|\n|\r)/g, fe = /\\(['"])/g, ge = /['"\\]/g, ve = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi, me = /^if\s/, he = /<(\w+)[>\s]/, we = /[\x00`><"'&]/g, be = /[\x00`><\"'&]/, xe = /^on[A-Z]|^convert(Back)?$/, _e = we, ye = 0, ke = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\x00": "&#0;",
        "'": "&#39;",
        '"': "&#34;",
        "`": "&#96;"
    }, je = "html", Ce = "object", Ae = "data-jsv-tmpl", Te = "jsvTmpl", Re = "For #index in nested block use #getIndex().", Ve = {}, Me = B.jsrender, $e = Me && e && !e.render, Ne = {
        template: {
            compile: k
        },
        tag: {
            compile: _
        },
        helper: {},
        converter: {}
    };
    if (Z = {
        jsviews: ie,
        settings: function(e) {
            p(ne, e),
            o(ne._dbgMode),
            ne.jsv && ne.jsv()
        },
        sub: {
            View: b,
            Err: d,
            tmplFn: $,
            parse: S,
            extend: p,
            extendCtx: U,
            syntaxErr: M,
            onStore: {},
            _ths: r,
            _tg: function() {}
        },
        map: j,
        _cnvt: v,
        _tag: w,
        _err: V
    },
    (d.prototype = new Error).constructor = d,
    c.depends = function() {
        return [this.get("item"), "index"]
    }
    ,
    f.depends = "index",
    b.prototype = {
        get: u,
        getIndex: f,
        getRsc: h,
        hlp: g,
        _is: "view"
    },
    !(Me || e && e.render)) {
        for (Q in Ne)
            A(Q, Ne[Q]);
        W = Z.templates,
        X = Z.converters,
        Y = Z.helpers,
        ee = Z.tags,
        te = Z.sub,
        ne = Z.settings,
        te._tg.prototype = {
            baseApply: y,
            cvtArgs: m
        },
        P = te.topView = new b,
        e ? (e.fn.render = O,
        e.observable && (p(te, e.views.sub),
        Z.map = e.views.map)) : (e = {},
        L && (B.jsrender = e),
        e.renderFile = e.__express = e.compile = function() {
            throw "Node.js: use npm jsrender, or jsrender-node.js"
        }
        ,
        e.isFunction = function(e) {
            return "function" == typeof e
        }
        ,
        e.isArray = Array.isArray || function(e) {
            return "[object Array]" === {}.toString.call(e)
        }
        ,
        te._jq = function(t) {
            t !== e && (p(t, e),
            e = t,
            e.fn.render = O,
            delete e.jsrender)
        }
        ,
        e.jsrender = ie),
        z = e.isFunction,
        G = e.isArray,
        e.render = Ve,
        e.views = Z,
        e.templates = W = Z.templates,
        ne({
            debugMode: o,
            delimiters: l,
            onError: function(e, t, n) {
                return t && (e = void 0 === n ? "{Error: " + (e.message || e) + "}" : z(n) ? n(e, t) : n),
                void 0 == e ? "" : e
            },
            _dbgMode: !1
        }),
        ee({
            "if": {
                render: function(e) {
                    var t = this
                      , n = t.tagCtx
                      , r = t.rendering.done || !e && (arguments.length || !n.index) ? "" : (t.rendering.done = !0,
                    t.selected = n.index,
                    n.render(n.view, !0));
                    return r
                },
                flow: !0
            },
            "for": {
                render: function(e) {
                    var t, n = !arguments.length, r = this, i = r.tagCtx, a = "", s = 0;
                    return r.rendering.done || (t = n ? i.view.data : e,
                    void 0 !== t && (a += i.render(t, n),
                    s += G(t) ? t.length : 1),
                    (r.rendering.done = s) && (r.selected = i.index)),
                    a
                },
                flow: !0
            },
            props: {
                baseTag: "for",
                dataMap: j(K),
                flow: !0
            },
            include: {
                flow: !0
            },
            "*": {
                render: i,
                flow: !0
            },
            ":*": {
                render: i,
                flow: !0
            },
            dbg: Y.dbg = X.dbg = s
        }),
        X({
            html: q,
            attr: q,
            url: function(e) {
                return void 0 != e ? encodeURI("" + e) : null  === e ? e : ""
            }
        }),
        l()
    }
    return $e && Me.views.sub._jq(e),
    e || Me
});
!function(t) {
    "object" == typeof exports ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    "use strict";
    var i = {}
      , s = Math.max
      , h = Math.min;
    i.c = {},
    i.c.d = t(document),
    i.c.t = function(t) {
        return t.originalEvent.touches.length - 1
    }
    ,
    i.o = function() {
        var s = this;
        this.o = null ,
        this.$ = null ,
        this.i = null ,
        this.g = null ,
        this.v = null ,
        this.cv = null ,
        this.x = 0,
        this.y = 0,
        this.w = 0,
        this.h = 0,
        this.$c = null ,
        this.c = null ,
        this.t = 0,
        this.isInit = !1,
        this.fgColor = null ,
        this.pColor = null ,
        this.dH = null ,
        this.cH = null ,
        this.eH = null ,
        this.rH = null ,
        this.scale = 1,
        this.relative = !1,
        this.relativeWidth = !1,
        this.relativeHeight = !1,
        this.$div = null ,
        this.run = function() {
            var i = function(t, i) {
                var h;
                for (h in i)
                    s.o[h] = i[h];
                s._carve().init(),
                s._configure()._draw()
            }
            ;
            if (!this.$.data("kontroled")) {
                if (this.$.data("kontroled", !0),
                this.extend(),
                this.o = t.extend({
                    min: void 0 !== this.$.data("min") ? this.$.data("min") : 0,
                    max: void 0 !== this.$.data("max") ? this.$.data("max") : 100,
                    stopper: !0,
                    readOnly: this.$.data("readonly") || "readonly" === this.$.attr("readonly"),
                    cursor: this.$.data("cursor") === !0 && 30 || this.$.data("cursor") || 0,
                    thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35,
                    lineCap: this.$.data("linecap") || "butt",
                    width: this.$.data("width") || 200,
                    height: this.$.data("height") || 200,
                    displayInput: null  == this.$.data("displayinput") || this.$.data("displayinput"),
                    displayPrevious: this.$.data("displayprevious"),
                    fgColor: this.$.data("fgcolor") || "#87CEEB",
                    inputColor: this.$.data("inputcolor"),
                    font: this.$.data("font") || "Arial",
                    fontWeight: this.$.data("font-weight") || "bold",
                    inline: !1,
                    step: this.$.data("step") || 1,
                    rotation: this.$.data("rotation"),
                    draw: null ,
                    change: null ,
                    cancel: null ,
                    release: null ,
                    format: function(t) {
                        return t
                    },
                    parse: function(t) {
                        return parseFloat(t)
                    }
                }, this.o),
                this.o.flip = "anticlockwise" === this.o.rotation || "acw" === this.o.rotation,
                this.o.inputColor || (this.o.inputColor = this.o.fgColor),
                this.$.is("fieldset") ? (this.v = {},
                this.i = this.$.find("input"),
                this.i.each(function(i) {
                    var h = t(this);
                    s.i[i] = h,
                    s.v[i] = s.o.parse(h.val()),
                    h.bind("change blur", function() {
                        var t = {};
                        t[i] = h.val(),
                        s.val(s._validate(t))
                    })
                }),
                this.$.find("legend").remove()) : (this.i = this.$,
                this.v = this.o.parse(this.$.val()),
                "" === this.v && (this.v = this.o.min),
                this.$.bind("change blur", function() {
                    s.val(s._validate(s.o.parse(s.$.val())))
                })),
                !this.o.displayInput && this.$.hide(),
                this.$c = t(document.createElement("canvas")).attr({
                    width: this.o.width,
                    height: this.o.height
                }),
                this.$div = t('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + 'px;"></div>'),
                this.$.wrap(this.$div).before(this.$c),
                this.$div = this.$.parent(),
                "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(this.$c[0]),
                this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null ,
                !this.c)
                    throw {
                        name: "CanvasNotSupportedException",
                        message: "Canvas not supported. Please use excanvas on IE8.0.",
                        toString: function() {
                            return this.name + ": " + this.message
                        }
                    };
                return this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1),
                this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%"),
                this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%"),
                this.relative = this.relativeWidth || this.relativeHeight,
                this._carve(),
                this.v instanceof Object ? (this.cv = {},
                this.copy(this.v, this.cv)) : this.cv = this.v,
                this.$.bind("configure", i).parent().bind("configure", i),
                this._listen()._configure()._xy().init(),
                this.isInit = !0,
                this.$.val(this.o.format(this.v)),
                this._draw(),
                this
            }
        }
        ,
        this._carve = function() {
            if (this.relative) {
                var t = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width()
                  , i = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
                this.w = this.h = Math.min(t, i)
            } else
                this.w = this.o.width,
                this.h = this.o.height;
            return this.$div.css({
                width: this.w + "px",
                height: this.h + "px"
            }),
            this.$c.attr({
                width: this.w,
                height: this.h
            }),
            1 !== this.scale && (this.$c[0].width = this.$c[0].width * this.scale,
            this.$c[0].height = this.$c[0].height * this.scale,
            this.$c.width(this.w),
            this.$c.height(this.h)),
            this
        }
        ,
        this._draw = function() {
            var t = !0;
            s.g = s.c,
            s.clear(),
            s.dH && (t = s.dH()),
            t !== !1 && s.draw()
        }
        ,
        this._touch = function(t) {
            var h = function(t) {
                var i = s.xy2val(t.originalEvent.touches[s.t].pageX, t.originalEvent.touches[s.t].pageY);
                i != s.cv && (s.cH && s.cH(i) === !1 || (s.change(s._validate(i)),
                s._draw()))
            }
            ;
            return this.t = i.c.t(t),
            h(t),
            i.c.d.bind("touchmove.k", h).bind("touchend.k", function() {
                i.c.d.unbind("touchmove.k touchend.k"),
                s.val(s.cv)
            }),
            this
        }
        ,
        this._mouse = function(t) {
            var h = function(t) {
                var i = s.xy2val(t.pageX, t.pageY);
                i != s.cv && (s.cH && s.cH(i) === !1 || (s.change(s._validate(i)),
                s._draw()))
            }
            ;
            return h(t),
            i.c.d.bind("mousemove.k", h).bind("keyup.k", function(t) {
                if (27 === t.keyCode) {
                    if (i.c.d.unbind("mouseup.k mousemove.k keyup.k"),
                    s.eH && s.eH() === !1)
                        return;
                    s.cancel()
                }
            }).bind("mouseup.k", function() {
                i.c.d.unbind("mousemove.k mouseup.k keyup.k"),
                s.val(s.cv)
            }),
            this
        }
        ,
        this._xy = function() {
            var t = this.$c.offset();
            return this.x = t.left,
            this.y = t.top,
            this
        }
        ,
        this._listen = function() {
            return this.o.readOnly ? this.$.attr("readonly", "readonly") : (this.$c.bind("mousedown", function(t) {
                t.preventDefault(),
                s._xy()._mouse(t)
            }).bind("touchstart", function(t) {
                t.preventDefault(),
                s._xy()._touch(t)
            }),
            this.listen()),
            this.relative && t(window).resize(function() {
                s._carve().init(),
                s._draw()
            }),
            this
        }
        ,
        this._configure = function() {
            return this.o.draw && (this.dH = this.o.draw),
            this.o.change && (this.cH = this.o.change),
            this.o.cancel && (this.eH = this.o.cancel),
            this.o.release && (this.rH = this.o.release),
            this.o.displayPrevious ? (this.pColor = this.h2rgba(this.o.fgColor, "0.4"),
            this.fgColor = this.h2rgba(this.o.fgColor, "0.6")) : this.fgColor = this.o.fgColor,
            this
        }
        ,
        this._clear = function() {
            this.$c[0].width = this.$c[0].width
        }
        ,
        this._validate = function(t) {
            var i = ~~((0 > t ? -.5 : .5) + t / this.o.step) * this.o.step;
            return Math.round(100 * i) / 100
        }
        ,
        this.listen = function() {}
        ,
        this.extend = function() {}
        ,
        this.init = function() {}
        ,
        this.change = function() {}
        ,
        this.val = function() {}
        ,
        this.xy2val = function() {}
        ,
        this.draw = function() {}
        ,
        this.clear = function() {
            this._clear()
        }
        ,
        this.h2rgba = function(t, i) {
            var s;
            return t = t.substring(1, 7),
            s = [parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16)],
            "rgba(" + s[0] + "," + s[1] + "," + s[2] + "," + i + ")"
        }
        ,
        this.copy = function(t, i) {
            for (var s in t)
                i[s] = t[s]
        }
    }
    ,
    i.Dial = function() {
        i.o.call(this),
        this.startAngle = null ,
        this.xy = null ,
        this.radius = null ,
        this.lineWidth = null ,
        this.cursorExt = null ,
        this.w2 = null ,
        this.PI2 = 2 * Math.PI,
        this.extend = function() {
            this.o = t.extend({
                bgColor: this.$.data("bgcolor") || "#EEEEEE",
                angleOffset: this.$.data("angleoffset") || 0,
                angleArc: this.$.data("anglearc") || 360,
                inline: !0
            }, this.o)
        }
        ,
        this.val = function(t, i) {
            return null  == t ? this.v : (t = this.o.parse(t),
            void (i !== !1 && t != this.v && this.rH && this.rH(t) === !1 || (this.cv = this.o.stopper ? s(h(t, this.o.max), this.o.min) : t,
            this.v = this.cv,
            this.$.val(this.o.format(this.v)),
            this._draw())))
        }
        ,
        this.xy2val = function(t, i) {
            var e, n;
            return e = Math.atan2(t - (this.x + this.w2), -(i - this.y - this.w2)) - this.angleOffset,
            this.o.flip && (e = this.angleArc - e - this.PI2),
            this.angleArc != this.PI2 && 0 > e && e > -.5 ? e = 0 : 0 > e && (e += this.PI2),
            n = e * (this.o.max - this.o.min) / this.angleArc + this.o.min,
            this.o.stopper && (n = s(h(n, this.o.max), this.o.min)),
            n
        }
        ,
        this.listen = function() {
            var i, e, n, a, o = this, r = function(t) {
                t.preventDefault();
                var n = t.originalEvent
                  , a = n.detail || n.wheelDeltaX
                  , r = n.detail || n.wheelDeltaY
                  , l = o._validate(o.o.parse(o.$.val())) + (a > 0 || r > 0 ? o.o.step : 0 > a || 0 > r ? -o.o.step : 0);
                l = s(h(l, o.o.max), o.o.min),
                o.val(l, !1),
                o.rH && (clearTimeout(i),
                i = setTimeout(function() {
                    o.rH(l),
                    i = null
                }, 100),
                e || (e = setTimeout(function() {
                    i && o.rH(l),
                    e = null
                }, 200)))
            }
            , l = 1, c = {
                37: -o.o.step,
                38: o.o.step,
                39: o.o.step,
                40: -o.o.step
            };
            this.$.bind("keydown", function(i) {
                var e = i.keyCode;
                if (e >= 96 && 105 >= e && (e = i.keyCode = e - 48),
                n = parseInt(String.fromCharCode(e)),
                isNaN(n) && (13 !== e && 8 !== e && 9 !== e && 189 !== e && (190 !== e || o.$.val().match(/\./)) && i.preventDefault(),
                t.inArray(e, [37, 38, 39, 40]) > -1)) {
                    i.preventDefault();
                    var r = o.o.parse(o.$.val()) + c[e] * l;
                    o.o.stopper && (r = s(h(r, o.o.max), o.o.min)),
                    o.change(o._validate(r)),
                    o._draw(),
                    a = window.setTimeout(function() {
                        l *= 2
                    }, 30)
                }
            }).bind("keyup", function() {
                isNaN(n) ? a && (window.clearTimeout(a),
                a = null ,
                l = 1,
                o.val(o.$.val())) : o.$.val() > o.o.max && o.$.val(o.o.max) || o.$.val() < o.o.min && o.$.val(o.o.min)
            }),
            this.$c.bind("mousewheel DOMMouseScroll", r),
            this.$.bind("mousewheel DOMMouseScroll", r)
        }
        ,
        this.init = function() {
            (this.v < this.o.min || this.v > this.o.max) && (this.v = this.o.min),
            this.$.val(this.v),
            this.w2 = this.w / 2,
            this.cursorExt = this.o.cursor / 100,
            this.xy = this.w2 * this.scale,
            this.lineWidth = this.xy * this.o.thickness,
            this.lineCap = this.o.lineCap,
            this.radius = this.xy - this.lineWidth / 2,
            this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset),
            this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc),
            this.angleOffset = this.o.angleOffset * Math.PI / 180,
            this.angleArc = this.o.angleArc * Math.PI / 180,
            this.startAngle = 1.5 * Math.PI + this.angleOffset,
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
            var t = s(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
            this.o.displayInput && this.i.css({
                width: (this.w / 2 + 4 >> 0) + "px",
                height: (this.w / 3 >> 0) + "px",
                position: "absolute",
                "vertical-align": "middle",
                "margin-top": (this.w / 3 >> 0) + "px",
                "margin-left": "-" + (3 * this.w / 4 + 2 >> 0) + "px",
                border: 0,
                background: "none",
                font: this.o.fontWeight + " " + (this.w / t >> 0) + "px " + this.o.font,
                "text-align": "center",
                color: this.o.inputColor || this.o.fgColor,
                padding: "0px",
                "-webkit-appearance": "none"
            }) || this.i.css({
                width: "0px",
                visibility: "hidden"
            })
        }
        ,
        this.change = function(t) {
            this.cv = t,
            this.$.val(this.o.format(t))
        }
        ,
        this.angle = function(t) {
            return (t - this.o.min) * this.angleArc / (this.o.max - this.o.min)
        }
        ,
        this.arc = function(t) {
            var i, s;
            return t = this.angle(t),
            this.o.flip ? (i = this.endAngle + 1e-5,
            s = i - t - 1e-5) : (i = this.startAngle - 1e-5,
            s = i + t + 1e-5),
            this.o.cursor && (i = s - this.cursorExt) && (s += this.cursorExt),
            {
                s: i,
                e: s,
                d: this.o.flip && !this.o.cursor
            }
        }
        ,
        this.draw = function() {
            var t, i = this.g, s = this.arc(this.cv), h = 1;
            i.lineWidth = this.lineWidth,
            i.lineCap = this.lineCap,
            "none" !== this.o.bgColor && (i.beginPath(),
            i.strokeStyle = this.o.bgColor,
            i.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, !0),
            i.stroke()),
            this.o.displayPrevious && (t = this.arc(this.v),
            i.beginPath(),
            i.strokeStyle = this.pColor,
            i.arc(this.xy, this.xy, this.radius, t.s, t.e, t.d),
            i.stroke(),
            h = this.cv == this.v),
            i.beginPath(),
            i.strokeStyle = h ? this.o.fgColor : this.fgColor,
            i.arc(this.xy, this.xy, this.radius, s.s, s.e, s.d),
            i.stroke()
        }
        ,
        this.cancel = function() {
            this.val(this.v)
        }
    }
    ,
    t.fn.dial = t.fn.knob = function(s) {
        return this.each(function() {
            var h = new i.Dial;
            h.o = s,
            h.$ = t(this),
            h.run()
        }).parent()
    }
});
!function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var e;
        "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self),
        e.io = t()
    }
}(function() {
    var t;
    return function e(t, n, r) {
        function o(s, a) {
            if (!n[s]) {
                if (!t[s]) {
                    var c = "function" == typeof require && require;
                    if (!a && c)
                        return c(s, !0);
                    if (i)
                        return i(s, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                var p = n[s] = {
                    exports: {}
                };
                t[s][0].call(p.exports, function(e) {
                    var n = t[s][1][e];
                    return o(n ? n : e)
                }, p, p.exports, e, t, n, r)
            }
            return n[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < r.length; s++)
            o(r[s]);
        return o
    }({
        1: [function(t, e) {
            e.exports = t("./lib/")
        }
        , {
            "./lib/": 2
        }],
        2: [function(t, e, n) {
            function r(t, e) {
                "object" == typeof t && (e = t,
                t = void 0),
                e = e || {};
                var n, r = o(t), i = r.source, p = r.id, u = r.path, f = c[p] && c[p].nsps[u] && u == c[p].nsps[u].nsp, h = e.forceNew || e["force new connection"] || !1 === e.multiplex || f;
                return h ? (a("ignoring socket cache for %s", i),
                n = s(i, e)) : (c[p] || (a("new io instance for %s", i),
                c[p] = s(i, e)),
                n = c[p]),
                n.socket(r.path)
            }
            var o = t("./url")
              , i = t("socket.io-parser")
              , s = t("./manager")
              , a = t("debug")("socket.io-client");
            e.exports = n = r;
            var c = n.managers = {};
            n.protocol = i.protocol,
            n.connect = r,
            n.Manager = t("./manager"),
            n.Socket = t("./socket")
        }
        , {
            "./manager": 3,
            "./socket": 5,
            "./url": 6,
            debug: 10,
            "socket.io-parser": 46
        }],
        3: [function(t, e) {
            function n(t, e) {
                return this instanceof n ? (t && "object" == typeof t && (e = t,
                t = void 0),
                e = e || {},
                e.path = e.path || "/socket.io",
                this.nsps = {},
                this.subs = [],
                this.opts = e,
                this.reconnection(e.reconnection !== !1),
                this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
                this.reconnectionDelay(e.reconnectionDelay || 1e3),
                this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
                this.randomizationFactor(e.randomizationFactor || .5),
                this.backoff = new f({
                    min: this.reconnectionDelay(),
                    max: this.reconnectionDelayMax(),
                    jitter: this.randomizationFactor()
                }),
                this.timeout(null  == e.timeout ? 2e4 : e.timeout),
                this.readyState = "closed",
                this.uri = t,
                this.connected = [],
                this.encoding = !1,
                this.packetBuffer = [],
                this.encoder = new s.Encoder,
                this.decoder = new s.Decoder,
                this.autoConnect = e.autoConnect !== !1,
                void (this.autoConnect && this.open())) : new n(t,e)
            }
            var r = (t("./url"),
            t("engine.io-client"))
              , o = t("./socket")
              , i = t("component-emitter")
              , s = t("socket.io-parser")
              , a = t("./on")
              , c = t("component-bind")
              , p = (t("object-component"),
            t("debug")("socket.io-client:manager"))
              , u = t("indexof")
              , f = t("backo2");
            e.exports = n,
            n.prototype.emitAll = function() {
                this.emit.apply(this, arguments);
                for (var t in this.nsps)
                    this.nsps[t].emit.apply(this.nsps[t], arguments)
            }
            ,
            n.prototype.updateSocketIds = function() {
                for (var t in this.nsps)
                    this.nsps[t].id = this.engine.id
            }
            ,
            i(n.prototype),
            n.prototype.reconnection = function(t) {
                return arguments.length ? (this._reconnection = !!t,
                this) : this._reconnection
            }
            ,
            n.prototype.reconnectionAttempts = function(t) {
                return arguments.length ? (this._reconnectionAttempts = t,
                this) : this._reconnectionAttempts
            }
            ,
            n.prototype.reconnectionDelay = function(t) {
                return arguments.length ? (this._reconnectionDelay = t,
                this.backoff && this.backoff.setMin(t),
                this) : this._reconnectionDelay
            }
            ,
            n.prototype.randomizationFactor = function(t) {
                return arguments.length ? (this._randomizationFactor = t,
                this.backoff && this.backoff.setJitter(t),
                this) : this._randomizationFactor
            }
            ,
            n.prototype.reconnectionDelayMax = function(t) {
                return arguments.length ? (this._reconnectionDelayMax = t,
                this.backoff && this.backoff.setMax(t),
                this) : this._reconnectionDelayMax
            }
            ,
            n.prototype.timeout = function(t) {
                return arguments.length ? (this._timeout = t,
                this) : this._timeout
            }
            ,
            n.prototype.maybeReconnectOnOpen = function() {
                !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
            }
            ,
            n.prototype.open = n.prototype.connect = function(t) {
                if (p("readyState %s", this.readyState),
                ~this.readyState.indexOf("open"))
                    return this;
                p("opening %s", this.uri),
                this.engine = r(this.uri, this.opts);
                var e = this.engine
                  , n = this;
                this.readyState = "opening",
                this.skipReconnect = !1;
                var o = a(e, "open", function() {
                    n.onopen(),
                    t && t()
                })
                  , i = a(e, "error", function(e) {
                    if (p("connect_error"),
                    n.cleanup(),
                    n.readyState = "closed",
                    n.emitAll("connect_error", e),
                    t) {
                        var r = new Error("Connection error");
                        r.data = e,
                        t(r)
                    } else
                        n.maybeReconnectOnOpen()
                });
                if (!1 !== this._timeout) {
                    var s = this._timeout;
                    p("connect attempt will timeout after %d", s);
                    var c = setTimeout(function() {
                        p("connect attempt timed out after %d", s),
                        o.destroy(),
                        e.close(),
                        e.emit("error", "timeout"),
                        n.emitAll("connect_timeout", s)
                    }, s);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(c)
                        }
                    })
                }
                return this.subs.push(o),
                this.subs.push(i),
                this
            }
            ,
            n.prototype.onopen = function() {
                p("open"),
                this.cleanup(),
                this.readyState = "open",
                this.emit("open");
                var t = this.engine;
                this.subs.push(a(t, "data", c(this, "ondata"))),
                this.subs.push(a(this.decoder, "decoded", c(this, "ondecoded"))),
                this.subs.push(a(t, "error", c(this, "onerror"))),
                this.subs.push(a(t, "close", c(this, "onclose")))
            }
            ,
            n.prototype.ondata = function(t) {
                this.decoder.add(t)
            }
            ,
            n.prototype.ondecoded = function(t) {
                this.emit("packet", t)
            }
            ,
            n.prototype.onerror = function(t) {
                p("error", t),
                this.emitAll("error", t)
            }
            ,
            n.prototype.socket = function(t) {
                var e = this.nsps[t];
                if (!e) {
                    e = new o(this,t),
                    this.nsps[t] = e;
                    var n = this;
                    e.on("connect", function() {
                        e.id = n.engine.id,
                        ~u(n.connected, e) || n.connected.push(e)
                    })
                }
                return e
            }
            ,
            n.prototype.destroy = function(t) {
                var e = u(this.connected, t);
                ~e && this.connected.splice(e, 1),
                this.connected.length || this.close()
            }
            ,
            n.prototype.packet = function(t) {
                p("writing packet %j", t);
                var e = this;
                e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0,
                this.encoder.encode(t, function(t) {
                    for (var n = 0; n < t.length; n++)
                        e.engine.write(t[n]);
                    e.encoding = !1,
                    e.processPacketQueue()
                }))
            }
            ,
            n.prototype.processPacketQueue = function() {
                if (this.packetBuffer.length > 0 && !this.encoding) {
                    var t = this.packetBuffer.shift();
                    this.packet(t)
                }
            }
            ,
            n.prototype.cleanup = function() {
                for (var t; t = this.subs.shift(); )
                    t.destroy();
                this.packetBuffer = [],
                this.encoding = !1,
                this.decoder.destroy()
            }
            ,
            n.prototype.close = n.prototype.disconnect = function() {
                this.skipReconnect = !0,
                this.backoff.reset(),
                this.readyState = "closed",
                this.engine && this.engine.close()
            }
            ,
            n.prototype.onclose = function(t) {
                p("close"),
                this.cleanup(),
                this.backoff.reset(),
                this.readyState = "closed",
                this.emit("close", t),
                this._reconnection && !this.skipReconnect && this.reconnect()
            }
            ,
            n.prototype.reconnect = function() {
                if (this.reconnecting || this.skipReconnect)
                    return this;
                var t = this;
                if (this.backoff.attempts >= this._reconnectionAttempts)
                    p("reconnect failed"),
                    this.backoff.reset(),
                    this.emitAll("reconnect_failed"),
                    this.reconnecting = !1;
                else {
                    var e = this.backoff.duration();
                    p("will wait %dms before reconnect attempt", e),
                    this.reconnecting = !0;
                    var n = setTimeout(function() {
                        t.skipReconnect || (p("attempting reconnect"),
                        t.emitAll("reconnect_attempt", t.backoff.attempts),
                        t.emitAll("reconnecting", t.backoff.attempts),
                        t.skipReconnect || t.open(function(e) {
                            e ? (p("reconnect attempt error"),
                            t.reconnecting = !1,
                            t.reconnect(),
                            t.emitAll("reconnect_error", e.data)) : (p("reconnect success"),
                            t.onreconnect())
                        }))
                    }, e);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(n)
                        }
                    })
                }
            }
            ,
            n.prototype.onreconnect = function() {
                var t = this.backoff.attempts;
                this.reconnecting = !1,
                this.backoff.reset(),
                this.updateSocketIds(),
                this.emitAll("reconnect", t)
            }
        }
        , {
            "./on": 4,
            "./socket": 5,
            "./url": 6,
            backo2: 7,
            "component-bind": 8,
            "component-emitter": 9,
            debug: 10,
            "engine.io-client": 11,
            indexof: 42,
            "object-component": 43,
            "socket.io-parser": 46
        }],
        4: [function(t, e) {
            function n(t, e, n) {
                return t.on(e, n),
                {
                    destroy: function() {
                        t.removeListener(e, n)
                    }
                }
            }
            e.exports = n
        }
        , {}],
        5: [function(t, e, n) {
            function r(t, e) {
                this.io = t,
                this.nsp = e,
                this.json = this,
                this.ids = 0,
                this.acks = {},
                this.io.autoConnect && this.open(),
                this.receiveBuffer = [],
                this.sendBuffer = [],
                this.connected = !1,
                this.disconnected = !0
            }
            var o = t("socket.io-parser")
              , i = t("component-emitter")
              , s = t("to-array")
              , a = t("./on")
              , c = t("component-bind")
              , p = t("debug")("socket.io-client:socket")
              , u = t("has-binary");
            e.exports = n = r;
            var f = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1
            }
              , h = i.prototype.emit;
            i(r.prototype),
            r.prototype.subEvents = function() {
                if (!this.subs) {
                    var t = this.io;
                    this.subs = [a(t, "open", c(this, "onopen")), a(t, "packet", c(this, "onpacket")), a(t, "close", c(this, "onclose"))]
                }
            }
            ,
            r.prototype.open = r.prototype.connect = function() {
                return this.connected ? this : (this.subEvents(),
                this.io.open(),
                "open" == this.io.readyState && this.onopen(),
                this)
            }
            ,
            r.prototype.send = function() {
                var t = s(arguments);
                return t.unshift("message"),
                this.emit.apply(this, t),
                this
            }
            ,
            r.prototype.emit = function(t) {
                if (f.hasOwnProperty(t))
                    return h.apply(this, arguments),
                    this;
                var e = s(arguments)
                  , n = o.EVENT;
                u(e) && (n = o.BINARY_EVENT);
                var r = {
                    type: n,
                    data: e
                };
                return "function" == typeof e[e.length - 1] && (p("emitting packet with ack id %d", this.ids),
                this.acks[this.ids] = e.pop(),
                r.id = this.ids++),
                this.connected ? this.packet(r) : this.sendBuffer.push(r),
                this
            }
            ,
            r.prototype.packet = function(t) {
                t.nsp = this.nsp,
                this.io.packet(t)
            }
            ,
            r.prototype.onopen = function() {
                p("transport is open - connecting"),
                "/" != this.nsp && this.packet({
                    type: o.CONNECT
                })
            }
            ,
            r.prototype.onclose = function(t) {
                p("close (%s)", t),
                this.connected = !1,
                this.disconnected = !0,
                delete this.id,
                this.emit("disconnect", t)
            }
            ,
            r.prototype.onpacket = function(t) {
                if (t.nsp == this.nsp)
                    switch (t.type) {
                    case o.CONNECT:
                        this.onconnect();
                        break;
                    case o.EVENT:
                        this.onevent(t);
                        break;
                    case o.BINARY_EVENT:
                        this.onevent(t);
                        break;
                    case o.ACK:
                        this.onack(t);
                        break;
                    case o.BINARY_ACK:
                        this.onack(t);
                        break;
                    case o.DISCONNECT:
                        this.ondisconnect();
                        break;
                    case o.ERROR:
                        this.emit("error", t.data)
                    }
            }
            ,
            r.prototype.onevent = function(t) {
                var e = t.data || [];
                p("emitting event %j", e),
                null  != t.id && (p("attaching ack callback to event"),
                e.push(this.ack(t.id))),
                this.connected ? h.apply(this, e) : this.receiveBuffer.push(e)
            }
            ,
            r.prototype.ack = function(t) {
                var e = this
                  , n = !1;
                return function() {
                    if (!n) {
                        n = !0;
                        var r = s(arguments);
                        p("sending ack %j", r);
                        var i = u(r) ? o.BINARY_ACK : o.ACK;
                        e.packet({
                            type: i,
                            id: t,
                            data: r
                        })
                    }
                }
            }
            ,
            r.prototype.onack = function(t) {
                p("calling ack %s with %j", t.id, t.data);
                var e = this.acks[t.id];
                e.apply(this, t.data),
                delete this.acks[t.id]
            }
            ,
            r.prototype.onconnect = function() {
                this.connected = !0,
                this.disconnected = !1,
                this.emit("connect"),
                this.emitBuffered()
            }
            ,
            r.prototype.emitBuffered = function() {
                var t;
                for (t = 0; t < this.receiveBuffer.length; t++)
                    h.apply(this, this.receiveBuffer[t]);
                for (this.receiveBuffer = [],
                t = 0; t < this.sendBuffer.length; t++)
                    this.packet(this.sendBuffer[t]);
                this.sendBuffer = []
            }
            ,
            r.prototype.ondisconnect = function() {
                p("server disconnect (%s)", this.nsp),
                this.destroy(),
                this.onclose("io server disconnect")
            }
            ,
            r.prototype.destroy = function() {
                if (this.subs) {
                    for (var t = 0; t < this.subs.length; t++)
                        this.subs[t].destroy();
                    this.subs = null
                }
                this.io.destroy(this)
            }
            ,
            r.prototype.close = r.prototype.disconnect = function() {
                return this.connected && (p("performing disconnect (%s)", this.nsp),
                this.packet({
                    type: o.DISCONNECT
                })),
                this.destroy(),
                this.connected && this.onclose("io client disconnect"),
                this
            }
        }
        , {
            "./on": 4,
            "component-bind": 8,
            "component-emitter": 9,
            debug: 10,
            "has-binary": 38,
            "socket.io-parser": 46,
            "to-array": 50
        }],
        6: [function(t, e) {
            (function(n) {
                function r(t, e) {
                    var r = t
                      , e = e || n.location;
                    return null  == t && (t = e.protocol + "//" + e.host),
                    "string" == typeof t && ("/" == t.charAt(0) && (t = "/" == t.charAt(1) ? e.protocol + t : e.hostname + t),
                    /^(https?|wss?):\/\//.test(t) || (i("protocol-less url %s", t),
                    t = "undefined" != typeof e ? e.protocol + "//" + t : "https://" + t),
                    i("parse %s", t),
                    r = o(t)),
                    r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
                    r.path = r.path || "/",
                    r.id = r.protocol + "://" + r.host + ":" + r.port,
                    r.href = r.protocol + "://" + r.host + (e && e.port == r.port ? "" : ":" + r.port),
                    r
                }
                var o = t("parseuri")
                  , i = t("debug")("socket.io-client:url");
                e.exports = r
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            debug: 10,
            parseuri: 44
        }],
        7: [function(t, e) {
            function n(t) {
                t = t || {},
                this.ms = t.min || 100,
                this.max = t.max || 1e4,
                this.factor = t.factor || 2,
                this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
                this.attempts = 0
            }
            e.exports = n,
            n.prototype.duration = function() {
                var t = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var e = Math.random()
                      , n = Math.floor(e * this.jitter * t);
                    t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
                }
                return 0 | Math.min(t, this.max)
            }
            ,
            n.prototype.reset = function() {
                this.attempts = 0
            }
            ,
            n.prototype.setMin = function(t) {
                this.ms = t
            }
            ,
            n.prototype.setMax = function(t) {
                this.max = t
            }
            ,
            n.prototype.setJitter = function(t) {
                this.jitter = t
            }
        }
        , {}],
        8: [function(t, e) {
            var n = [].slice;
            e.exports = function(t, e) {
                if ("string" == typeof e && (e = t[e]),
                "function" != typeof e)
                    throw new Error("bind() requires a function");
                var r = n.call(arguments, 2);
                return function() {
                    return e.apply(t, r.concat(n.call(arguments)))
                }
            }
        }
        , {}],
        9: [function(t, e) {
            function n(t) {
                return t ? r(t) : void 0
            }
            function r(t) {
                for (var e in n.prototype)
                    t[e] = n.prototype[e];
                return t
            }
            e.exports = n,
            n.prototype.on = n.prototype.addEventListener = function(t, e) {
                return this._callbacks = this._callbacks || {},
                (this._callbacks[t] = this._callbacks[t] || []).push(e),
                this
            }
            ,
            n.prototype.once = function(t, e) {
                function n() {
                    r.off(t, n),
                    e.apply(this, arguments)
                }
                var r = this;
                return this._callbacks = this._callbacks || {},
                n.fn = e,
                this.on(t, n),
                this
            }
            ,
            n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t, e) {
                if (this._callbacks = this._callbacks || {},
                0 == arguments.length)
                    return this._callbacks = {},
                    this;
                var n = this._callbacks[t];
                if (!n)
                    return this;
                if (1 == arguments.length)
                    return delete this._callbacks[t],
                    this;
                for (var r, o = 0; o < n.length; o++)
                    if (r = n[o],
                    r === e || r.fn === e) {
                        n.splice(o, 1);
                        break
                    }
                return this
            }
            ,
            n.prototype.emit = function(t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1)
                  , n = this._callbacks[t];
                if (n) {
                    n = n.slice(0);
                    for (var r = 0, o = n.length; o > r; ++r)
                        n[r].apply(this, e)
                }
                return this
            }
            ,
            n.prototype.listeners = function(t) {
                return this._callbacks = this._callbacks || {},
                this._callbacks[t] || []
            }
            ,
            n.prototype.hasListeners = function(t) {
                return !!this.listeners(t).length
            }
        }
        , {}],
        10: [function(t, e) {
            function n(t) {
                return n.enabled(t) ? function(e) {
                    e = r(e);
                    var o = new Date
                      , i = o - (n[t] || o);
                    n[t] = o,
                    e = t + " " + e + " +" + n.humanize(i),
                    window.console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }
                 : function() {}
            }
            function r(t) {
                return t instanceof Error ? t.stack || t.message : t
            }
            e.exports = n,
            n.names = [],
            n.skips = [],
            n.enable = function(t) {
                try {
                    localStorage.debug = t
                } catch (e) {}
                for (var r = (t || "").split(/[\s,]+/), o = r.length, i = 0; o > i; i++)
                    t = r[i].replace("*", ".*?"),
                    "-" === t[0] ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$"))
            }
            ,
            n.disable = function() {
                n.enable("")
            }
            ,
            n.humanize = function(t) {
                var e = 1e3
                  , n = 6e4
                  , r = 60 * n;
                return t >= r ? (t / r).toFixed(1) + "h" : t >= n ? (t / n).toFixed(1) + "m" : t >= e ? (t / e | 0) + "s" : t + "ms"
            }
            ,
            n.enabled = function(t) {
                for (var e = 0, r = n.skips.length; r > e; e++)
                    if (n.skips[e].test(t))
                        return !1;
                for (var e = 0, r = n.names.length; r > e; e++)
                    if (n.names[e].test(t))
                        return !0;
                return !1
            }
            ;
            try {
                window.localStorage && n.enable(localStorage.debug)
            } catch (o) {}
        }
        , {}],
        11: [function(t, e) {
            e.exports = t("./lib/")
        }
        , {
            "./lib/": 12
        }],
        12: [function(t, e) {
            e.exports = t("./socket"),
            e.exports.parser = t("engine.io-parser")
        }
        , {
            "./socket": 13,
            "engine.io-parser": 25
        }],
        13: [function(t, e) {
            (function(n) {
                function r(t, e) {
                    if (!(this instanceof r))
                        return new r(t,e);
                    if (e = e || {},
                    t && "object" == typeof t && (e = t,
                    t = null ),
                    t && (t = u(t),
                    e.host = t.host,
                    e.secure = "https" == t.protocol || "wss" == t.protocol,
                    e.port = t.port,
                    t.query && (e.query = t.query)),
                    this.secure = null  != e.secure ? e.secure : n.location && "https:" == location.protocol,
                    e.host) {
                        var o = e.host.split(":");
                        e.hostname = o.shift(),
                        o.length ? e.port = o.pop() : e.port || (e.port = this.secure ? "443" : "80")
                    }
                    this.agent = e.agent || !1,
                    this.hostname = e.hostname || (n.location ? location.hostname : "localhost"),
                    this.port = e.port || (n.location && location.port ? location.port : this.secure ? 443 : 80),
                    this.query = e.query || {},
                    "string" == typeof this.query && (this.query = h.decode(this.query)),
                    this.upgrade = !1 !== e.upgrade,
                    this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/",
                    this.forceJSONP = !!e.forceJSONP,
                    this.jsonp = !1 !== e.jsonp,
                    this.forceBase64 = !!e.forceBase64,
                    this.enablesXDR = !!e.enablesXDR,
                    this.timestampParam = e.timestampParam || "t",
                    this.timestampRequests = e.timestampRequests,
                    this.transports = e.transports || ["polling", "websocket"],
                    this.readyState = "",
                    this.writeBuffer = [],
                    this.callbackBuffer = [],
                    this.policyPort = e.policyPort || 843,
                    this.rememberUpgrade = e.rememberUpgrade || !1,
                    this.binaryType = null ,
                    this.onlyBinaryUpgrades = e.onlyBinaryUpgrades,
                    this.pfx = e.pfx || null ,
                    this.key = e.key || null ,
                    this.passphrase = e.passphrase || null ,
                    this.cert = e.cert || null ,
                    this.ca = e.ca || null ,
                    this.ciphers = e.ciphers || null ,
                    this.rejectUnauthorized = e.rejectUnauthorized || null ,
                    this.open()
                }
                function o(t) {
                    var e = {};
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                }
                var i = t("./transports")
                  , s = t("component-emitter")
                  , a = t("debug")("engine.io-client:socket")
                  , c = t("indexof")
                  , p = t("engine.io-parser")
                  , u = t("parseuri")
                  , f = t("parsejson")
                  , h = t("parseqs");
                e.exports = r,
                r.priorWebsocketSuccess = !1,
                s(r.prototype),
                r.protocol = p.protocol,
                r.Socket = r,
                r.Transport = t("./transport"),
                r.transports = t("./transports"),
                r.parser = t("engine.io-parser"),
                r.prototype.createTransport = function(t) {
                    a('creating transport "%s"', t);
                    var e = o(this.query);
                    e.EIO = p.protocol,
                    e.transport = t,
                    this.id && (e.sid = this.id);
                    var n = new i[t]({
                        agent: this.agent,
                        hostname: this.hostname,
                        port: this.port,
                        secure: this.secure,
                        path: this.path,
                        query: e,
                        forceJSONP: this.forceJSONP,
                        jsonp: this.jsonp,
                        forceBase64: this.forceBase64,
                        enablesXDR: this.enablesXDR,
                        timestampRequests: this.timestampRequests,
                        timestampParam: this.timestampParam,
                        policyPort: this.policyPort,
                        socket: this,
                        pfx: this.pfx,
                        key: this.key,
                        passphrase: this.passphrase,
                        cert: this.cert,
                        ca: this.ca,
                        ciphers: this.ciphers,
                        rejectUnauthorized: this.rejectUnauthorized
                    });
                    return n
                }
                ,
                r.prototype.open = function() {
                    var t;
                    if (this.rememberUpgrade && r.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket"))
                        t = "websocket";
                    else {
                        if (0 == this.transports.length) {
                            var e = this;
                            return void setTimeout(function() {
                                e.emit("error", "No transports available")
                            }, 0)
                        }
                        t = this.transports[0]
                    }
                    this.readyState = "opening";
                    var t;
                    try {
                        t = this.createTransport(t)
                    } catch (n) {
                        return this.transports.shift(),
                        void this.open()
                    }
                    t.open(),
                    this.setTransport(t)
                }
                ,
                r.prototype.setTransport = function(t) {
                    a("setting transport %s", t.name);
                    var e = this;
                    this.transport && (a("clearing existing transport %s", this.transport.name),
                    this.transport.removeAllListeners()),
                    this.transport = t,
                    t.on("drain", function() {
                        e.onDrain()
                    }).on("packet", function(t) {
                        e.onPacket(t)
                    }).on("error", function(t) {
                        e.onError(t)
                    }).on("close", function() {
                        e.onClose("transport close")
                    })
                }
                ,
                r.prototype.probe = function(t) {
                    function e() {
                        if (h.onlyBinaryUpgrades) {
                            var e = !this.supportsBinary && h.transport.supportsBinary;
                            f = f || e
                        }
                        f || (a('probe transport "%s" opened', t),
                        u.send([{
                            type: "ping",
                            data: "probe"
                        }]),
                        u.once("packet", function(e) {
                            if (!f)
                                if ("pong" == e.type && "probe" == e.data) {
                                    if (a('probe transport "%s" pong', t),
                                    h.upgrading = !0,
                                    h.emit("upgrading", u),
                                    !u)
                                        return;
                                    r.priorWebsocketSuccess = "websocket" == u.name,
                                    a('pausing current transport "%s"', h.transport.name),
                                    h.transport.pause(function() {
                                        f || "closed" != h.readyState && (a("changing transport and sending upgrade packet"),
                                        p(),
                                        h.setTransport(u),
                                        u.send([{
                                            type: "upgrade"
                                        }]),
                                        h.emit("upgrade", u),
                                        u = null ,
                                        h.upgrading = !1,
                                        h.flush())
                                    })
                                } else {
                                    a('probe transport "%s" failed', t);
                                    var n = new Error("probe error");
                                    n.transport = u.name,
                                    h.emit("upgradeError", n)
                                }
                        }))
                    }
                    function n() {
                        f || (f = !0,
                        p(),
                        u.close(),
                        u = null )
                    }
                    function o(e) {
                        var r = new Error("probe error: " + e);
                        r.transport = u.name,
                        n(),
                        a('probe transport "%s" failed because of error: %s', t, e),
                        h.emit("upgradeError", r)
                    }
                    function i() {
                        o("transport closed")
                    }
                    function s() {
                        o("socket closed")
                    }
                    function c(t) {
                        u && t.name != u.name && (a('"%s" works - aborting "%s"', t.name, u.name),
                        n())
                    }
                    function p() {
                        u.removeListener("open", e),
                        u.removeListener("error", o),
                        u.removeListener("close", i),
                        h.removeListener("close", s),
                        h.removeListener("upgrading", c)
                    }
                    a('probing transport "%s"', t);
                    var u = this.createTransport(t, {
                        probe: 1
                    })
                      , f = !1
                      , h = this;
                    r.priorWebsocketSuccess = !1,
                    u.once("open", e),
                    u.once("error", o),
                    u.once("close", i),
                    this.once("close", s),
                    this.once("upgrading", c),
                    u.open()
                }
                ,
                r.prototype.onOpen = function() {
                    if (a("socket open"),
                    this.readyState = "open",
                    r.priorWebsocketSuccess = "websocket" == this.transport.name,
                    this.emit("open"),
                    this.flush(),
                    "open" == this.readyState && this.upgrade && this.transport.pause) {
                        a("starting upgrade probes");
                        for (var t = 0, e = this.upgrades.length; e > t; t++)
                            this.probe(this.upgrades[t])
                    }
                }
                ,
                r.prototype.onPacket = function(t) {
                    if ("opening" == this.readyState || "open" == this.readyState)
                        switch (a('socket receive: type "%s", data "%s"', t.type, t.data),
                        this.emit("packet", t),
                        this.emit("heartbeat"),
                        t.type) {
                        case "open":
                            this.onHandshake(f(t.data));
                            break;
                        case "pong":
                            this.setPing();
                            break;
                        case "error":
                            var e = new Error("server error");
                            e.code = t.data,
                            this.emit("error", e);
                            break;
                        case "message":
                            this.emit("data", t.data),
                            this.emit("message", t.data)
                        }
                    else
                        a('packet received with socket readyState "%s"', this.readyState)
                }
                ,
                r.prototype.onHandshake = function(t) {
                    this.emit("handshake", t),
                    this.id = t.sid,
                    this.transport.query.sid = t.sid,
                    this.upgrades = this.filterUpgrades(t.upgrades),
                    this.pingInterval = t.pingInterval,
                    this.pingTimeout = t.pingTimeout,
                    this.onOpen(),
                    "closed" != this.readyState && (this.setPing(),
                    this.removeListener("heartbeat", this.onHeartbeat),
                    this.on("heartbeat", this.onHeartbeat))
                }
                ,
                r.prototype.onHeartbeat = function(t) {
                    clearTimeout(this.pingTimeoutTimer);
                    var e = this;
                    e.pingTimeoutTimer = setTimeout(function() {
                        "closed" != e.readyState && e.onClose("ping timeout")
                    }, t || e.pingInterval + e.pingTimeout)
                }
                ,
                r.prototype.setPing = function() {
                    var t = this;
                    clearTimeout(t.pingIntervalTimer),
                    t.pingIntervalTimer = setTimeout(function() {
                        a("writing ping packet - expecting pong within %sms", t.pingTimeout),
                        t.ping(),
                        t.onHeartbeat(t.pingTimeout)
                    }, t.pingInterval)
                }
                ,
                r.prototype.ping = function() {
                    this.sendPacket("ping")
                }
                ,
                r.prototype.onDrain = function() {
                    for (var t = 0; t < this.prevBufferLen; t++)
                        this.callbackBuffer[t] && this.callbackBuffer[t]();
                    this.writeBuffer.splice(0, this.prevBufferLen),
                    this.callbackBuffer.splice(0, this.prevBufferLen),
                    this.prevBufferLen = 0,
                    0 == this.writeBuffer.length ? this.emit("drain") : this.flush()
                }
                ,
                r.prototype.flush = function() {
                    "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length),
                    this.transport.send(this.writeBuffer),
                    this.prevBufferLen = this.writeBuffer.length,
                    this.emit("flush"))
                }
                ,
                r.prototype.write = r.prototype.send = function(t, e) {
                    return this.sendPacket("message", t, e),
                    this
                }
                ,
                r.prototype.sendPacket = function(t, e, n) {
                    if ("closing" != this.readyState && "closed" != this.readyState) {
                        var r = {
                            type: t,
                            data: e
                        };
                        this.emit("packetCreate", r),
                        this.writeBuffer.push(r),
                        this.callbackBuffer.push(n),
                        this.flush()
                    }
                }
                ,
                r.prototype.close = function() {
                    function t() {
                        r.onClose("forced close"),
                        a("socket closing - telling transport to close"),
                        r.transport.close()
                    }
                    function e() {
                        r.removeListener("upgrade", e),
                        r.removeListener("upgradeError", e),
                        t()
                    }
                    function n() {
                        r.once("upgrade", e),
                        r.once("upgradeError", e)
                    }
                    if ("opening" == this.readyState || "open" == this.readyState) {
                        this.readyState = "closing";
                        var r = this;
                        this.writeBuffer.length ? this.once("drain", function() {
                            this.upgrading ? n() : t()
                        }) : this.upgrading ? n() : t()
                    }
                    return this
                }
                ,
                r.prototype.onError = function(t) {
                    a("socket error %j", t),
                    r.priorWebsocketSuccess = !1,
                    this.emit("error", t),
                    this.onClose("transport error", t)
                }
                ,
                r.prototype.onClose = function(t, e) {
                    if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
                        a('socket close with reason: "%s"', t);
                        var n = this;
                        clearTimeout(this.pingIntervalTimer),
                        clearTimeout(this.pingTimeoutTimer),
                        setTimeout(function() {
                            n.writeBuffer = [],
                            n.callbackBuffer = [],
                            n.prevBufferLen = 0
                        }, 0),
                        this.transport.removeAllListeners("close"),
                        this.transport.close(),
                        this.transport.removeAllListeners(),
                        this.readyState = "closed",
                        this.id = null ,
                        this.emit("close", t, e)
                    }
                }
                ,
                r.prototype.filterUpgrades = function(t) {
                    for (var e = [], n = 0, r = t.length; r > n; n++)
                        ~c(this.transports, t[n]) && e.push(t[n]);
                    return e
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./transport": 14,
            "./transports": 15,
            "component-emitter": 9,
            debug: 22,
            "engine.io-parser": 25,
            indexof: 42,
            parsejson: 34,
            parseqs: 35,
            parseuri: 36
        }],
        14: [function(t, e) {
            function n(t) {
                this.path = t.path,
                this.hostname = t.hostname,
                this.port = t.port,
                this.secure = t.secure,
                this.query = t.query,
                this.timestampParam = t.timestampParam,
                this.timestampRequests = t.timestampRequests,
                this.readyState = "",
                this.agent = t.agent || !1,
                this.socket = t.socket,
                this.enablesXDR = t.enablesXDR,
                this.pfx = t.pfx,
                this.key = t.key,
                this.passphrase = t.passphrase,
                this.cert = t.cert,
                this.ca = t.ca,
                this.ciphers = t.ciphers,
                this.rejectUnauthorized = t.rejectUnauthorized
            }
            var r = t("engine.io-parser")
              , o = t("component-emitter");
            e.exports = n,
            o(n.prototype),
            n.timestamps = 0,
            n.prototype.onError = function(t, e) {
                var n = new Error(t);
                return n.type = "TransportError",
                n.description = e,
                this.emit("error", n),
                this
            }
            ,
            n.prototype.open = function() {
                return ("closed" == this.readyState || "" == this.readyState) && (this.readyState = "opening",
                this.doOpen()),
                this
            }
            ,
            n.prototype.close = function() {
                return ("opening" == this.readyState || "open" == this.readyState) && (this.doClose(),
                this.onClose()),
                this
            }
            ,
            n.prototype.send = function(t) {
                if ("open" != this.readyState)
                    throw new Error("Transport not open");
                this.write(t)
            }
            ,
            n.prototype.onOpen = function() {
                this.readyState = "open",
                this.writable = !0,
                this.emit("open")
            }
            ,
            n.prototype.onData = function(t) {
                var e = r.decodePacket(t, this.socket.binaryType);
                this.onPacket(e)
            }
            ,
            n.prototype.onPacket = function(t) {
                this.emit("packet", t)
            }
            ,
            n.prototype.onClose = function() {
                this.readyState = "closed",
                this.emit("close")
            }
        }
        , {
            "component-emitter": 9,
            "engine.io-parser": 25
        }],
        15: [function(t, e, n) {
            (function(e) {
                function r(t) {
                    var n, r = !1, a = !1, c = !1 !== t.jsonp;
                    if (e.location) {
                        var p = "https:" == location.protocol
                          , u = location.port;
                        u || (u = p ? 443 : 80),
                        r = t.hostname != location.hostname || u != t.port,
                        a = t.secure != p
                    }
                    if (t.xdomain = r,
                    t.xscheme = a,
                    n = new o(t),
                    "open" in n && !t.forceJSONP)
                        return new i(t);
                    if (!c)
                        throw new Error("JSONP disabled");
                    return new s(t)
                }
                var o = t("xmlhttprequest")
                  , i = t("./polling-xhr")
                  , s = t("./polling-jsonp")
                  , a = t("./websocket");
                n.polling = r,
                n.websocket = a
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./polling-jsonp": 16,
            "./polling-xhr": 17,
            "./websocket": 19,
            xmlhttprequest: 20
        }],
        16: [function(t, e) {
            (function(n) {
                function r() {}
                function o(t) {
                    i.call(this, t),
                    this.query = this.query || {},
                    a || (n.___eio || (n.___eio = []),
                    a = n.___eio),
                    this.index = a.length;
                    var e = this;
                    a.push(function(t) {
                        e.onData(t)
                    }),
                    this.query.j = this.index,
                    n.document && n.addEventListener && n.addEventListener("beforeunload", function() {
                        e.script && (e.script.onerror = r)
                    }, !1)
                }
                var i = t("./polling")
                  , s = t("component-inherit");
                e.exports = o;
                var a, c = /\n/g, p = /\\n/g;
                s(o, i),
                o.prototype.supportsBinary = !1,
                o.prototype.doClose = function() {
                    this.script && (this.script.parentNode.removeChild(this.script),
                    this.script = null ),
                    this.form && (this.form.parentNode.removeChild(this.form),
                    this.form = null ,
                    this.iframe = null ),
                    i.prototype.doClose.call(this)
                }
                ,
                o.prototype.doPoll = function() {
                    var t = this
                      , e = document.createElement("script");
                    this.script && (this.script.parentNode.removeChild(this.script),
                    this.script = null ),
                    e.async = !0,
                    e.src = this.uri(),
                    e.onerror = function(e) {
                        t.onError("jsonp poll error", e)
                    }
                    ;
                    var n = document.getElementsByTagName("script")[0];
                    n.parentNode.insertBefore(e, n),
                    this.script = e;
                    var r = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                    r && setTimeout(function() {
                        var t = document.createElement("iframe");
                        document.body.appendChild(t),
                        document.body.removeChild(t)
                    }, 100)
                }
                ,
                o.prototype.doWrite = function(t, e) {
                    function n() {
                        r(),
                        e()
                    }
                    function r() {
                        if (o.iframe)
                            try {
                                o.form.removeChild(o.iframe)
                            } catch (t) {
                                o.onError("jsonp polling iframe removal error", t)
                            }
                        try {
                            var e = '<iframe src="javascript:0" name="' + o.iframeId + '">';
                            i = document.createElement(e)
                        } catch (t) {
                            i = document.createElement("iframe"),
                            i.name = o.iframeId,
                            i.src = "javascript:0"
                        }
                        i.id = o.iframeId,
                        o.form.appendChild(i),
                        o.iframe = i
                    }
                    var o = this;
                    if (!this.form) {
                        var i, s = document.createElement("form"), a = document.createElement("textarea"), u = this.iframeId = "eio_iframe_" + this.index;
                        s.className = "socketio",
                        s.style.position = "absolute",
                        s.style.top = "-1000px",
                        s.style.left = "-1000px",
                        s.target = u,
                        s.method = "POST",
                        s.setAttribute("accept-charset", "utf-8"),
                        a.name = "d",
                        s.appendChild(a),
                        document.body.appendChild(s),
                        this.form = s,
                        this.area = a
                    }
                    this.form.action = this.uri(),
                    r(),
                    t = t.replace(p, "\\\n"),
                    this.area.value = t.replace(c, "\\n");
                    try {
                        this.form.submit()
                    } catch (f) {}
                    this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                        "complete" == o.iframe.readyState && n()
                    }
                     : this.iframe.onload = n
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./polling": 18,
            "component-inherit": 21
        }],
        17: [function(t, e) {
            (function(n) {
                function r() {}
                function o(t) {
                    if (c.call(this, t),
                    n.location) {
                        var e = "https:" == location.protocol
                          , r = location.port;
                        r || (r = e ? 443 : 80),
                        this.xd = t.hostname != n.location.hostname || r != t.port,
                        this.xs = t.secure != e
                    }
                }
                function i(t) {
                    this.method = t.method || "GET",
                    this.uri = t.uri,
                    this.xd = !!t.xd,
                    this.xs = !!t.xs,
                    this.async = !1 !== t.async,
                    this.data = void 0 != t.data ? t.data : null ,
                    this.agent = t.agent,
                    this.isBinary = t.isBinary,
                    this.supportsBinary = t.supportsBinary,
                    this.enablesXDR = t.enablesXDR,
                    this.pfx = t.pfx,
                    this.key = t.key,
                    this.passphrase = t.passphrase,
                    this.cert = t.cert,
                    this.ca = t.ca,
                    this.ciphers = t.ciphers,
                    this.rejectUnauthorized = t.rejectUnauthorized,
                    this.create()
                }
                function s() {
                    for (var t in i.requests)
                        i.requests.hasOwnProperty(t) && i.requests[t].abort()
                }
                var a = t("xmlhttprequest")
                  , c = t("./polling")
                  , p = t("component-emitter")
                  , u = t("component-inherit")
                  , f = t("debug")("engine.io-client:polling-xhr");
                e.exports = o,
                e.exports.Request = i,
                u(o, c),
                o.prototype.supportsBinary = !0,
                o.prototype.request = function(t) {
                    return t = t || {},
                    t.uri = this.uri(),
                    t.xd = this.xd,
                    t.xs = this.xs,
                    t.agent = this.agent || !1,
                    t.supportsBinary = this.supportsBinary,
                    t.enablesXDR = this.enablesXDR,
                    t.pfx = this.pfx,
                    t.key = this.key,
                    t.passphrase = this.passphrase,
                    t.cert = this.cert,
                    t.ca = this.ca,
                    t.ciphers = this.ciphers,
                    t.rejectUnauthorized = this.rejectUnauthorized,
                    new i(t)
                }
                ,
                o.prototype.doWrite = function(t, e) {
                    var n = "string" != typeof t && void 0 !== t
                      , r = this.request({
                        method: "POST",
                        data: t,
                        isBinary: n
                    })
                      , o = this;
                    r.on("success", e),
                    r.on("error", function(t) {
                        o.onError("xhr post error", t)
                    }),
                    this.sendXhr = r
                }
                ,
                o.prototype.doPoll = function() {
                    f("xhr poll");
                    var t = this.request()
                      , e = this;
                    t.on("data", function(t) {
                        e.onData(t)
                    }),
                    t.on("error", function(t) {
                        e.onError("xhr poll error", t)
                    }),
                    this.pollXhr = t
                }
                ,
                p(i.prototype),
                i.prototype.create = function() {
                    var t = {
                        agent: this.agent,
                        xdomain: this.xd,
                        xscheme: this.xs,
                        enablesXDR: this.enablesXDR
                    };
                    t.pfx = this.pfx,
                    t.key = this.key,
                    t.passphrase = this.passphrase,
                    t.cert = this.cert,
                    t.ca = this.ca,
                    t.ciphers = this.ciphers,
                    t.rejectUnauthorized = this.rejectUnauthorized;
                    var e = this.xhr = new a(t)
                      , r = this;
                    try {
                        if (f("xhr open %s: %s", this.method, this.uri),
                        e.open(this.method, this.uri, this.async),
                        this.supportsBinary && (e.responseType = "arraybuffer"),
                        "POST" == this.method)
                            try {
                                this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                            } catch (o) {}
                        "withCredentials" in e && (e.withCredentials = !0),
                        this.hasXDR() ? (e.onload = function() {
                            r.onLoad()
                        }
                        ,
                        e.onerror = function() {
                            r.onError(e.responseText)
                        }
                        ) : e.onreadystatechange = function() {
                            4 == e.readyState && (200 == e.status || 1223 == e.status ? r.onLoad() : setTimeout(function() {
                                r.onError(e.status)
                            }, 0))
                        }
                        ,
                        f("xhr data %s", this.data),
                        e.send(this.data)
                    } catch (o) {
                        return void setTimeout(function() {
                            r.onError(o)
                        }, 0)
                    }
                    n.document && (this.index = i.requestsCount++,
                    i.requests[this.index] = this)
                }
                ,
                i.prototype.onSuccess = function() {
                    this.emit("success"),
                    this.cleanup()
                }
                ,
                i.prototype.onData = function(t) {
                    this.emit("data", t),
                    this.onSuccess()
                }
                ,
                i.prototype.onError = function(t) {
                    this.emit("error", t),
                    this.cleanup(!0)
                }
                ,
                i.prototype.cleanup = function(t) {
                    if ("undefined" != typeof this.xhr && null  !== this.xhr) {
                        if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r,
                        t)
                            try {
                                this.xhr.abort()
                            } catch (e) {}
                        n.document && delete i.requests[this.index],
                        this.xhr = null
                    }
                }
                ,
                i.prototype.onLoad = function() {
                    var t;
                    try {
                        var e;
                        try {
                            e = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                        } catch (n) {}
                        t = "application/octet-stream" === e ? this.xhr.response : this.supportsBinary ? "ok" : this.xhr.responseText
                    } catch (n) {
                        this.onError(n)
                    }
                    null  != t && this.onData(t)
                }
                ,
                i.prototype.hasXDR = function() {
                    return "undefined" != typeof n.XDomainRequest && !this.xs && this.enablesXDR
                }
                ,
                i.prototype.abort = function() {
                    this.cleanup()
                }
                ,
                n.document && (i.requestsCount = 0,
                i.requests = {},
                n.attachEvent ? n.attachEvent("onunload", s) : n.addEventListener && n.addEventListener("beforeunload", s, !1))
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./polling": 18,
            "component-emitter": 9,
            "component-inherit": 21,
            debug: 22,
            xmlhttprequest: 20
        }],
        18: [function(t, e) {
            function n(t) {
                var e = t && t.forceBase64;
                (!c || e) && (this.supportsBinary = !1),
                r.call(this, t)
            }
            var r = t("../transport")
              , o = t("parseqs")
              , i = t("engine.io-parser")
              , s = t("component-inherit")
              , a = t("debug")("engine.io-client:polling");
            e.exports = n;
            var c = function() {
                var e = t("xmlhttprequest")
                  , n = new e({
                    xdomain: !1
                });
                return null  != n.responseType
            }();
            s(n, r),
            n.prototype.name = "polling",
            n.prototype.doOpen = function() {
                this.poll()
            }
            ,
            n.prototype.pause = function(t) {
                function e() {
                    a("paused"),
                    n.readyState = "paused",
                    t()
                }
                var n = this;
                if (this.readyState = "pausing",
                this.polling || !this.writable) {
                    var r = 0;
                    this.polling && (a("we are currently polling - waiting to pause"),
                    r++,
                    this.once("pollComplete", function() {
                        a("pre-pause polling complete"),
                        --r || e()
                    })),
                    this.writable || (a("we are currently writing - waiting to pause"),
                    r++,
                    this.once("drain", function() {
                        a("pre-pause writing complete"),
                        --r || e()
                    }))
                } else
                    e()
            }
            ,
            n.prototype.poll = function() {
                a("polling"),
                this.polling = !0,
                this.doPoll(),
                this.emit("poll")
            }
            ,
            n.prototype.onData = function(t) {
                var e = this;
                a("polling got data %s", t);
                var n = function(t) {
                    return "opening" == e.readyState && e.onOpen(),
                    "close" == t.type ? (e.onClose(),
                    !1) : void e.onPacket(t)
                }
                ;
                i.decodePayload(t, this.socket.binaryType, n),
                "closed" != this.readyState && (this.polling = !1,
                this.emit("pollComplete"),
                "open" == this.readyState ? this.poll() : a('ignoring poll - transport state "%s"', this.readyState))
            }
            ,
            n.prototype.doClose = function() {
                function t() {
                    a("writing close packet"),
                    e.write([{
                        type: "close"
                    }])
                }
                var e = this;
                "open" == this.readyState ? (a("transport open - closing"),
                t()) : (a("transport not open - deferring close"),
                this.once("open", t))
            }
            ,
            n.prototype.write = function(t) {
                var e = this;
                this.writable = !1;
                var n = function() {
                    e.writable = !0,
                    e.emit("drain")
                }
                  , e = this;
                i.encodePayload(t, this.supportsBinary, function(t) {
                    e.doWrite(t, n)
                })
            }
            ,
            n.prototype.uri = function() {
                var t = this.query || {}
                  , e = this.secure ? "https" : "http"
                  , n = "";
                return !1 !== this.timestampRequests && (t[this.timestampParam] = +new Date + "-" + r.timestamps++),
                this.supportsBinary || t.sid || (t.b64 = 1),
                t = o.encode(t),
                this.port && ("https" == e && 443 != this.port || "http" == e && 80 != this.port) && (n = ":" + this.port),
                t.length && (t = "?" + t),
                e + "://" + this.hostname + n + this.path + t
            }
        }
        , {
            "../transport": 14,
            "component-inherit": 21,
            debug: 22,
            "engine.io-parser": 25,
            parseqs: 35,
            xmlhttprequest: 20
        }],
        19: [function(t, e) {
            function n(t) {
                var e = t && t.forceBase64;
                e && (this.supportsBinary = !1),
                r.call(this, t)
            }
            var r = t("../transport")
              , o = t("engine.io-parser")
              , i = t("parseqs")
              , s = t("component-inherit")
              , a = t("debug")("engine.io-client:websocket")
              , c = t("ws");
            e.exports = n,
            s(n, r),
            n.prototype.name = "websocket",
            n.prototype.supportsBinary = !0,
            n.prototype.doOpen = function() {
                if (this.check()) {
                    var t = this.uri()
                      , e = void 0
                      , n = {
                        agent: this.agent
                    };
                    n.pfx = this.pfx,
                    n.key = this.key,
                    n.passphrase = this.passphrase,
                    n.cert = this.cert,
                    n.ca = this.ca,
                    n.ciphers = this.ciphers,
                    n.rejectUnauthorized = this.rejectUnauthorized,
                    this.ws = new c(t,e,n),
                    void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                    this.ws.binaryType = "arraybuffer",
                    this.addEventListeners()
                }
            }
            ,
            n.prototype.addEventListeners = function() {
                var t = this;
                this.ws.onopen = function() {
                    t.onOpen()
                }
                ,
                this.ws.onclose = function() {
                    t.onClose()
                }
                ,
                this.ws.onmessage = function(e) {
                    t.onData(e.data)
                }
                ,
                this.ws.onerror = function(e) {
                    t.onError("websocket error", e)
                }
            }
            ,
            "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (n.prototype.onData = function(t) {
                var e = this;
                setTimeout(function() {
                    r.prototype.onData.call(e, t)
                }, 0)
            }
            ),
            n.prototype.write = function(t) {
                function e() {
                    n.writable = !0,
                    n.emit("drain")
                }
                var n = this;
                this.writable = !1;
                for (var r = 0, i = t.length; i > r; r++)
                    o.encodePacket(t[r], this.supportsBinary, function(t) {
                        try {
                            n.ws.send(t)
                        } catch (e) {
                            a("websocket closed before onclose event")
                        }
                    });
                setTimeout(e, 0)
            }
            ,
            n.prototype.onClose = function() {
                r.prototype.onClose.call(this)
            }
            ,
            n.prototype.doClose = function() {
                "undefined" != typeof this.ws && this.ws.close()
            }
            ,
            n.prototype.uri = function() {
                var t = this.query || {}
                  , e = this.secure ? "wss" : "ws"
                  , n = "";
                return this.port && ("wss" == e && 443 != this.port || "ws" == e && 80 != this.port) && (n = ":" + this.port),
                this.timestampRequests && (t[this.timestampParam] = +new Date),
                this.supportsBinary || (t.b64 = 1),
                t = i.encode(t),
                t.length && (t = "?" + t),
                e + "://" + this.hostname + n + this.path + t
            }
            ,
            n.prototype.check = function() {
                return !(!c || "__initialize" in c && this.name === n.prototype.name)
            }
        }
        , {
            "../transport": 14,
            "component-inherit": 21,
            debug: 22,
            "engine.io-parser": 25,
            parseqs: 35,
            ws: 37
        }],
        20: [function(t, e) {
            var n = t("has-cors");
            e.exports = function(t) {
                var e = t.xdomain
                  , r = t.xscheme
                  , o = t.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!e || n))
                        return new XMLHttpRequest
                } catch (i) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !r && o)
                        return new XDomainRequest
                } catch (i) {}
                if (!e)
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (i) {}
            }
        }
        , {
            "has-cors": 40
        }],
        21: [function(t, e) {
            e.exports = function(t, e) {
                var n = function() {}
                ;
                n.prototype = e.prototype,
                t.prototype = new n,
                t.prototype.constructor = t
            }
        }
        , {}],
        22: [function(t, e, n) {
            function r() {
                return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }
            function o() {
                var t = arguments
                  , e = this.useColors;
                if (t[0] = (e ? "%c" : "") + this.namespace + (e ? " %c" : " ") + t[0] + (e ? "%c " : " ") + "+" + n.humanize(this.diff),
                !e)
                    return t;
                var r = "color: " + this.color;
                t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
                var o = 0
                  , i = 0;
                return t[0].replace(/%[a-z%]/g, function(t) {
                    "%" !== t && (o++,
                    "%c" === t && (i = o))
                }),
                t.splice(i, 0, r),
                t
            }
            function i() {
                return "object" == typeof console && "function" == typeof console.log && Function.prototype.apply.call(console.log, console, arguments)
            }
            function s(t) {
                try {
                    null  == t ? localStorage.removeItem("debug") : localStorage.debug = t
                } catch (e) {}
            }
            function a() {
                var t;
                try {
                    t = localStorage.debug
                } catch (e) {}
                return t
            }
            n = e.exports = t("./debug"),
            n.log = i,
            n.formatArgs = o,
            n.save = s,
            n.load = a,
            n.useColors = r,
            n.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
            n.formatters.j = function(t) {
                return JSON.stringify(t)
            }
            ,
            n.enable(a())
        }
        , {
            "./debug": 23
        }],
        23: [function(t, e, n) {
            function r() {
                return n.colors[u++ % n.colors.length]
            }
            function o(t) {
                function e() {}
                function o() {
                    var t = o
                      , e = +new Date
                      , i = e - (p || e);
                    t.diff = i,
                    t.prev = p,
                    t.curr = e,
                    p = e,
                    null  == t.useColors && (t.useColors = n.useColors()),
                    null  == t.color && t.useColors && (t.color = r());
                    var s = Array.prototype.slice.call(arguments);
                    s[0] = n.coerce(s[0]),
                    "string" != typeof s[0] && (s = ["%o"].concat(s));
                    var a = 0;
                    s[0] = s[0].replace(/%([a-z%])/g, function(e, r) {
                        if ("%" === e)
                            return e;
                        a++;
                        var o = n.formatters[r];
                        if ("function" == typeof o) {
                            var i = s[a];
                            e = o.call(t, i),
                            s.splice(a, 1),
                            a--
                        }
                        return e
                    }),
                    "function" == typeof n.formatArgs && (s = n.formatArgs.apply(t, s));
                    var c = o.log || n.log || console.log.bind(console);
                    c.apply(t, s)
                }
                e.enabled = !1,
                o.enabled = !0;
                var i = n.enabled(t) ? o : e;
                return i.namespace = t,
                i
            }
            function i(t) {
                n.save(t);
                for (var e = (t || "").split(/[\s,]+/), r = e.length, o = 0; r > o; o++)
                    e[o] && (t = e[o].replace(/\*/g, ".*?"),
                    "-" === t[0] ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")))
            }
            function s() {
                n.enable("")
            }
            function a(t) {
                var e, r;
                for (e = 0,
                r = n.skips.length; r > e; e++)
                    if (n.skips[e].test(t))
                        return !1;
                for (e = 0,
                r = n.names.length; r > e; e++)
                    if (n.names[e].test(t))
                        return !0;
                return !1
            }
            function c(t) {
                return t instanceof Error ? t.stack || t.message : t
            }
            n = e.exports = o,
            n.coerce = c,
            n.disable = s,
            n.enable = i,
            n.enabled = a,
            n.humanize = t("ms"),
            n.names = [],
            n.skips = [],
            n.formatters = {};
            var p, u = 0
        }
        , {
            ms: 24
        }],
        24: [function(t, e) {
            function n(t) {
                var e = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(t);
                if (e) {
                    var n = parseFloat(e[1])
                      , r = (e[2] || "ms").toLowerCase();
                    switch (r) {
                    case "years":
                    case "year":
                    case "y":
                        return n * u;
                    case "days":
                    case "day":
                    case "d":
                        return n * p;
                    case "hours":
                    case "hour":
                    case "h":
                        return n * c;
                    case "minutes":
                    case "minute":
                    case "m":
                        return n * a;
                    case "seconds":
                    case "second":
                    case "s":
                        return n * s;
                    case "ms":
                        return n
                    }
                }
            }
            function r(t) {
                return t >= p ? Math.round(t / p) + "d" : t >= c ? Math.round(t / c) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
            }
            function o(t) {
                return i(t, p, "day") || i(t, c, "hour") || i(t, a, "minute") || i(t, s, "second") || t + " ms"
            }
            function i(t, e, n) {
                return e > t ? void 0 : 1.5 * e > t ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
            }
            var s = 1e3
              , a = 60 * s
              , c = 60 * a
              , p = 24 * c
              , u = 365.25 * p;
            e.exports = function(t, e) {
                return e = e || {},
                "string" == typeof t ? n(t) : e["long"] ? o(t) : r(t)
            }
        }
        , {}],
        25: [function(t, e, n) {
            (function(e) {
                function r(t, e) {
                    var r = "b" + n.packets[t.type] + t.data.data;
                    return e(r)
                }
                function o(t, e, r) {
                    if (!e)
                        return n.encodeBase64Packet(t, r);
                    var o = t.data
                      , i = new Uint8Array(o)
                      , s = new Uint8Array(1 + o.byteLength);
                    s[0] = m[t.type];
                    for (var a = 0; a < i.length; a++)
                        s[a + 1] = i[a];
                    return r(s.buffer)
                }
                function i(t, e, r) {
                    if (!e)
                        return n.encodeBase64Packet(t, r);
                    var o = new FileReader;
                    return o.onload = function() {
                        t.data = o.result,
                        n.encodePacket(t, e, !0, r)
                    }
                    ,
                    o.readAsArrayBuffer(t.data)
                }
                function s(t, e, r) {
                    if (!e)
                        return n.encodeBase64Packet(t, r);
                    if (g)
                        return i(t, e, r);
                    var o = new Uint8Array(1);
                    o[0] = m[t.type];
                    var s = new w([o.buffer, t.data]);
                    return r(s)
                }
                function a(t, e, n) {
                    for (var r = new Array(t.length), o = h(t.length, n), i = function(t, n, o) {
                        e(n, function(e, n) {
                            r[t] = n,
                            o(e, r)
                        })
                    }
                    , s = 0; s < t.length; s++)
                        i(s, t[s], o)
                }
                var c = t("./keys")
                  , p = t("has-binary")
                  , u = t("arraybuffer.slice")
                  , f = t("base64-arraybuffer")
                  , h = t("after")
                  , l = t("utf8")
                  , d = navigator.userAgent.match(/Android/i)
                  , y = /PhantomJS/i.test(navigator.userAgent)
                  , g = d || y;
                n.protocol = 3;
                var m = n.packets = {
                    open: 0,
                    close: 1,
                    ping: 2,
                    pong: 3,
                    message: 4,
                    upgrade: 5,
                    noop: 6
                }
                  , v = c(m)
                  , b = {
                    type: "error",
                    data: "parser error"
                }
                  , w = t("blob");
                n.encodePacket = function(t, n, i, a) {
                    "function" == typeof n && (a = n,
                    n = !1),
                    "function" == typeof i && (a = i,
                    i = null );
                    var c = void 0 === t.data ? void 0 : t.data.buffer || t.data;
                    if (e.ArrayBuffer && c instanceof ArrayBuffer)
                        return o(t, n, a);
                    if (w && c instanceof e.Blob)
                        return s(t, n, a);
                    if (c && c.base64)
                        return r(t, a);
                    var p = m[t.type];
                    return void 0 !== t.data && (p += i ? l.encode(String(t.data)) : String(t.data)),
                    a("" + p)
                }
                ,
                n.encodeBase64Packet = function(t, r) {
                    var o = "b" + n.packets[t.type];
                    if (w && t.data instanceof w) {
                        var i = new FileReader;
                        return i.onload = function() {
                            var t = i.result.split(",")[1];
                            r(o + t)
                        }
                        ,
                        i.readAsDataURL(t.data)
                    }
                    var s;
                    try {
                        s = String.fromCharCode.apply(null , new Uint8Array(t.data))
                    } catch (a) {
                        for (var c = new Uint8Array(t.data), p = new Array(c.length), u = 0; u < c.length; u++)
                            p[u] = c[u];
                        s = String.fromCharCode.apply(null , p)
                    }
                    return o += e.btoa(s),
                    r(o)
                }
                ,
                n.decodePacket = function(t, e, r) {
                    if ("string" == typeof t || void 0 === t) {
                        if ("b" == t.charAt(0))
                            return n.decodeBase64Packet(t.substr(1), e);
                        if (r)
                            try {
                                t = l.decode(t)
                            } catch (o) {
                                return b
                            }
                        var i = t.charAt(0);
                        return Number(i) == i && v[i] ? t.length > 1 ? {
                            type: v[i],
                            data: t.substring(1)
                        } : {
                            type: v[i]
                        } : b
                    }
                    var s = new Uint8Array(t)
                      , i = s[0]
                      , a = u(t, 1);
                    return w && "blob" === e && (a = new w([a])),
                    {
                        type: v[i],
                        data: a
                    }
                }
                ,
                n.decodeBase64Packet = function(t, n) {
                    var r = v[t.charAt(0)];
                    if (!e.ArrayBuffer)
                        return {
                            type: r,
                            data: {
                                base64: !0,
                                data: t.substr(1)
                            }
                        };
                    var o = f.decode(t.substr(1));
                    return "blob" === n && w && (o = new w([o])),
                    {
                        type: r,
                        data: o
                    }
                }
                ,
                n.encodePayload = function(t, e, r) {
                    function o(t) {
                        return t.length + ":" + t
                    }
                    function i(t, r) {
                        n.encodePacket(t, s ? e : !1, !0, function(t) {
                            r(null , o(t))
                        })
                    }
                    "function" == typeof e && (r = e,
                    e = null );
                    var s = p(t);
                    return e && s ? w && !g ? n.encodePayloadAsBlob(t, r) : n.encodePayloadAsArrayBuffer(t, r) : t.length ? void a(t, i, function(t, e) {
                        return r(e.join(""))
                    }) : r("0:")
                }
                ,
                n.decodePayload = function(t, e, r) {
                    if ("string" != typeof t)
                        return n.decodePayloadAsBinary(t, e, r);
                    "function" == typeof e && (r = e,
                    e = null );
                    var o;
                    if ("" == t)
                        return r(b, 0, 1);
                    for (var i, s, a = "", c = 0, p = t.length; p > c; c++) {
                        var u = t.charAt(c);
                        if (":" != u)
                            a += u;
                        else {
                            if ("" == a || a != (i = Number(a)))
                                return r(b, 0, 1);
                            if (s = t.substr(c + 1, i),
                            a != s.length)
                                return r(b, 0, 1);
                            if (s.length) {
                                if (o = n.decodePacket(s, e, !0),
                                b.type == o.type && b.data == o.data)
                                    return r(b, 0, 1);
                                var f = r(o, c + i, p);
                                if (!1 === f)
                                    return
                            }
                            c += i,
                            a = ""
                        }
                    }
                    return "" != a ? r(b, 0, 1) : void 0
                }
                ,
                n.encodePayloadAsArrayBuffer = function(t, e) {
                    function r(t, e) {
                        n.encodePacket(t, !0, !0, function(t) {
                            return e(null , t)
                        })
                    }
                    return t.length ? void a(t, r, function(t, n) {
                        var r = n.reduce(function(t, e) {
                            var n;
                            return n = "string" == typeof e ? e.length : e.byteLength,
                            t + n.toString().length + n + 2
                        }, 0)
                          , o = new Uint8Array(r)
                          , i = 0;
                        return n.forEach(function(t) {
                            var e = "string" == typeof t
                              , n = t;
                            if (e) {
                                for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++)
                                    r[s] = t.charCodeAt(s);
                                n = r.buffer
                            }
                            o[i++] = e ? 0 : 1;
                            for (var a = n.byteLength.toString(), s = 0; s < a.length; s++)
                                o[i++] = parseInt(a[s]);
                            o[i++] = 255;
                            for (var r = new Uint8Array(n), s = 0; s < r.length; s++)
                                o[i++] = r[s]
                        }),
                        e(o.buffer)
                    }) : e(new ArrayBuffer(0))
                }
                ,
                n.encodePayloadAsBlob = function(t, e) {
                    function r(t, e) {
                        n.encodePacket(t, !0, !0, function(t) {
                            var n = new Uint8Array(1);
                            if (n[0] = 1,
                            "string" == typeof t) {
                                for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++)
                                    r[o] = t.charCodeAt(o);
                                t = r.buffer,
                                n[0] = 0
                            }
                            for (var i = t instanceof ArrayBuffer ? t.byteLength : t.size, s = i.toString(), a = new Uint8Array(s.length + 1), o = 0; o < s.length; o++)
                                a[o] = parseInt(s[o]);
                            if (a[s.length] = 255,
                            w) {
                                var c = new w([n.buffer, a.buffer, t]);
                                e(null , c)
                            }
                        })
                    }
                    a(t, r, function(t, n) {
                        return e(new w(n))
                    })
                }
                ,
                n.decodePayloadAsBinary = function(t, e, r) {
                    "function" == typeof e && (r = e,
                    e = null );
                    for (var o = t, i = [], s = !1; o.byteLength > 0; ) {
                        for (var a = new Uint8Array(o), c = 0 === a[0], p = "", f = 1; 255 != a[f]; f++) {
                            if (p.length > 310) {
                                s = !0;
                                break
                            }
                            p += a[f]
                        }
                        if (s)
                            return r(b, 0, 1);
                        o = u(o, 2 + p.length),
                        p = parseInt(p);
                        var h = u(o, 0, p);
                        if (c)
                            try {
                                h = String.fromCharCode.apply(null , new Uint8Array(h))
                            } catch (l) {
                                var d = new Uint8Array(h);
                                h = "";
                                for (var f = 0; f < d.length; f++)
                                    h += String.fromCharCode(d[f])
                            }
                        i.push(h),
                        o = u(o, p)
                    }
                    var y = i.length;
                    i.forEach(function(t, o) {
                        r(n.decodePacket(t, e, !0), o, y)
                    })
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./keys": 26,
            after: 27,
            "arraybuffer.slice": 28,
            "base64-arraybuffer": 29,
            blob: 30,
            "has-binary": 31,
            utf8: 33
        }],
        26: [function(t, e) {
            e.exports = Object.keys || function(t) {
                var e = []
                  , n = Object.prototype.hasOwnProperty;
                for (var r in t)
                    n.call(t, r) && e.push(r);
                return e
            }
        }
        , {}],
        27: [function(t, e) {
            function n(t, e, n) {
                function o(t, r) {
                    if (o.count <= 0)
                        throw new Error("after called too many times");
                    --o.count,
                    t ? (i = !0,
                    e(t),
                    e = n) : 0 !== o.count || i || e(null , r)
                }
                var i = !1;
                return n = n || r,
                o.count = t,
                0 === t ? e() : o
            }
            function r() {}
            e.exports = n
        }
        , {}],
        28: [function(t, e) {
            e.exports = function(t, e, n) {
                var r = t.byteLength;
                if (e = e || 0,
                n = n || r,
                t.slice)
                    return t.slice(e, n);
                if (0 > e && (e += r),
                0 > n && (n += r),
                n > r && (n = r),
                e >= r || e >= n || 0 === r)
                    return new ArrayBuffer(0);
                for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; n > s; s++,
                a++)
                    i[a] = o[s];
                return i.buffer
            }
        }
        , {}],
        29: [function(t, e, n) {
            !function(t) {
                "use strict";
                n.encode = function(e) {
                    var n, r = new Uint8Array(e), o = r.length, i = "";
                    for (n = 0; o > n; n += 3)
                        i += t[r[n] >> 2],
                        i += t[(3 & r[n]) << 4 | r[n + 1] >> 4],
                        i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6],
                        i += t[63 & r[n + 2]];
                    return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="),
                    i
                }
                ,
                n.decode = function(e) {
                    var n, r, o, i, s, a = .75 * e.length, c = e.length, p = 0;
                    "=" === e[e.length - 1] && (a--,
                    "=" === e[e.length - 2] && a--);
                    var u = new ArrayBuffer(a)
                      , f = new Uint8Array(u);
                    for (n = 0; c > n; n += 4)
                        r = t.indexOf(e[n]),
                        o = t.indexOf(e[n + 1]),
                        i = t.indexOf(e[n + 2]),
                        s = t.indexOf(e[n + 3]),
                        f[p++] = r << 2 | o >> 4,
                        f[p++] = (15 & o) << 4 | i >> 2,
                        f[p++] = (3 & i) << 6 | 63 & s;
                    return u
                }
            }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
        }
        , {}],
        30: [function(t, e) {
            (function(t) {
                function n(t, e) {
                    e = e || {};
                    for (var n = new r, o = 0; o < t.length; o++)
                        n.append(t[o]);
                    return e.type ? n.getBlob(e.type) : n.getBlob()
                }
                var r = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder
                  , o = function() {
                    try {
                        var t = new Blob(["hi"]);
                        return 2 == t.size
                    } catch (e) {
                        return !1
                    }
                }()
                  , i = r && r.prototype.append && r.prototype.getBlob;
                e.exports = function() {
                    return o ? t.Blob : i ? n : void 0
                }()
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        31: [function(t, e) {
            (function(n) {
                function r(t) {
                    function e(t) {
                        if (!t)
                            return !1;
                        if (n.Buffer && n.Buffer.isBuffer(t) || n.ArrayBuffer && t instanceof ArrayBuffer || n.Blob && t instanceof Blob || n.File && t instanceof File)
                            return !0;
                        if (o(t)) {
                            for (var r = 0; r < t.length; r++)
                                if (e(t[r]))
                                    return !0
                        } else if (t && "object" == typeof t) {
                            t.toJSON && (t = t.toJSON());
                            for (var i in t)
                                if (t.hasOwnProperty(i) && e(t[i]))
                                    return !0
                        }
                        return !1
                    }
                    return e(t)
                }
                var o = t("isarray");
                e.exports = r
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            isarray: 32
        }],
        32: [function(t, e) {
            e.exports = Array.isArray || function(t) {
                return "[object Array]" == Object.prototype.toString.call(t)
            }
        }
        , {}],
        33: [function(e, n, r) {
            (function(e) {
                !function(o) {
                    function i(t) {
                        for (var e, n, r = [], o = 0, i = t.length; i > o; )
                            e = t.charCodeAt(o++),
                            e >= 55296 && 56319 >= e && i > o ? (n = t.charCodeAt(o++),
                            56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e),
                            o--)) : r.push(e);
                        return r
                    }
                    function s(t) {
                        for (var e, n = t.length, r = -1, o = ""; ++r < n; )
                            e = t[r],
                            e > 65535 && (e -= 65536,
                            o += b(e >>> 10 & 1023 | 55296),
                            e = 56320 | 1023 & e),
                            o += b(e);
                        return o
                    }
                    function a(t, e) {
                        return b(t >> e & 63 | 128)
                    }
                    function c(t) {
                        if (0 == (4294967168 & t))
                            return b(t);
                        var e = "";
                        return 0 == (4294965248 & t) ? e = b(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (e = b(t >> 12 & 15 | 224),
                        e += a(t, 6)) : 0 == (4292870144 & t) && (e = b(t >> 18 & 7 | 240),
                        e += a(t, 12),
                        e += a(t, 6)),
                        e += b(63 & t | 128)
                    }
                    function p(t) {
                        for (var e, n = i(t), r = n.length, o = -1, s = ""; ++o < r; )
                            e = n[o],
                            s += c(e);
                        return s
                    }
                    function u() {
                        if (v >= m)
                            throw Error("Invalid byte index");
                        var t = 255 & g[v];
                        if (v++,
                        128 == (192 & t))
                            return 63 & t;
                        throw Error("Invalid continuation byte")
                    }
                    function f() {
                        var t, e, n, r, o;
                        if (v > m)
                            throw Error("Invalid byte index");
                        if (v == m)
                            return !1;
                        if (t = 255 & g[v],
                        v++,
                        0 == (128 & t))
                            return t;
                        if (192 == (224 & t)) {
                            var e = u();
                            if (o = (31 & t) << 6 | e,
                            o >= 128)
                                return o;
                            throw Error("Invalid continuation byte")
                        }
                        if (224 == (240 & t)) {
                            if (e = u(),
                            n = u(),
                            o = (15 & t) << 12 | e << 6 | n,
                            o >= 2048)
                                return o;
                            throw Error("Invalid continuation byte")
                        }
                        if (240 == (248 & t) && (e = u(),
                        n = u(),
                        r = u(),
                        o = (15 & t) << 18 | e << 12 | n << 6 | r,
                        o >= 65536 && 1114111 >= o))
                            return o;
                        throw Error("Invalid UTF-8 detected")
                    }
                    function h(t) {
                        g = i(t),
                        m = g.length,
                        v = 0;
                        for (var e, n = []; (e = f()) !== !1; )
                            n.push(e);
                        return s(n)
                    }
                    var l = "object" == typeof r && r
                      , d = "object" == typeof n && n && n.exports == l && n
                      , y = "object" == typeof e && e;
                    (y.global === y || y.window === y) && (o = y);
                    var g, m, v, b = String.fromCharCode, w = {
                        version: "2.0.0",
                        encode: p,
                        decode: h
                    };
                    if ("function" == typeof t && "object" == typeof t.amd && t.amd)
                        t(function() {
                            return w
                        });
                    else if (l && !l.nodeType)
                        if (d)
                            d.exports = w;
                        else {
                            var k = {}
                              , x = k.hasOwnProperty;
                            for (var A in w)
                                x.call(w, A) && (l[A] = w[A])
                        }
                    else
                        o.utf8 = w
                }(this)
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        34: [function(t, e) {
            (function(t) {
                var n = /^[\],:{}\s]*$/
                  , r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
                  , o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
                  , i = /(?:^|:|,)(?:\s*\[)+/g
                  , s = /^\s+/
                  , a = /\s+$/;
                e.exports = function(e) {
                    return "string" == typeof e && e ? (e = e.replace(s, "").replace(a, ""),
                    t.JSON && JSON.parse ? JSON.parse(e) : n.test(e.replace(r, "@").replace(o, "]").replace(i, "")) ? new Function("return " + e)() : void 0) : null
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        35: [function(t, e, n) {
            n.encode = function(t) {
                var e = "";
                for (var n in t)
                    t.hasOwnProperty(n) && (e.length && (e += "&"),
                    e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                return e
            }
            ,
            n.decode = function(t) {
                for (var e = {}, n = t.split("&"), r = 0, o = n.length; o > r; r++) {
                    var i = n[r].split("=");
                    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                }
                return e
            }
        }
        , {}],
        36: [function(t, e) {
            var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
              , r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            e.exports = function(t) {
                var e = t
                  , o = t.indexOf("[")
                  , i = t.indexOf("]");
                -1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
                for (var s = n.exec(t || ""), a = {}, c = 14; c--; )
                    a[r[c]] = s[c] || "";
                return -1 != o && -1 != i && (a.source = e,
                a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"),
                a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
                a.ipv6uri = !0),
                a
            }
        }
        , {}],
        37: [function(t, e) {
            function n(t, e) {
                var n;
                return n = e ? new o(t,e) : new o(t)
            }
            var r = function() {
                return this
            }()
              , o = r.WebSocket || r.MozWebSocket;
            e.exports = o ? n : null ,
            o && (n.prototype = o.prototype)
        }
        , {}],
        38: [function(t, e) {
            (function(n) {
                function r(t) {
                    function e(t) {
                        if (!t)
                            return !1;
                        if (n.Buffer && n.Buffer.isBuffer(t) || n.ArrayBuffer && t instanceof ArrayBuffer || n.Blob && t instanceof Blob || n.File && t instanceof File)
                            return !0;
                        if (o(t)) {
                            for (var r = 0; r < t.length; r++)
                                if (e(t[r]))
                                    return !0
                        } else if (t && "object" == typeof t) {
                            t.toJSON && (t = t.toJSON());
                            for (var i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i) && e(t[i]))
                                    return !0
                        }
                        return !1
                    }
                    return e(t)
                }
                var o = t("isarray");
                e.exports = r
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            isarray: 39
        }],
        39: [function(t, e) {
            e.exports = t(32)
        }
        , {}],
        40: [function(t, e) {
            var n = t("global");
            try {
                e.exports = "XMLHttpRequest" in n && "withCredentials" in new n.XMLHttpRequest
            } catch (r) {
                e.exports = !1
            }
        }
        , {
            global: 41
        }],
        41: [function(t, e) {
            e.exports = function() {
                return this
            }()
        }
        , {}],
        42: [function(t, e) {
            var n = [].indexOf;
            e.exports = function(t, e) {
                if (n)
                    return t.indexOf(e);
                for (var r = 0; r < t.length; ++r)
                    if (t[r] === e)
                        return r;
                return -1
            }
        }
        , {}],
        43: [function(t, e, n) {
            var r = Object.prototype.hasOwnProperty;
            n.keys = Object.keys || function(t) {
                var e = [];
                for (var n in t)
                    r.call(t, n) && e.push(n);
                return e
            }
            ,
            n.values = function(t) {
                var e = [];
                for (var n in t)
                    r.call(t, n) && e.push(t[n]);
                return e
            }
            ,
            n.merge = function(t, e) {
                for (var n in e)
                    r.call(e, n) && (t[n] = e[n]);
                return t
            }
            ,
            n.length = function(t) {
                return n.keys(t).length
            }
            ,
            n.isEmpty = function(t) {
                return 0 == n.length(t)
            }
        }
        , {}],
        44: [function(t, e) {
            var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
              , r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            e.exports = function(t) {
                for (var e = n.exec(t || ""), o = {}, i = 14; i--; )
                    o[r[i]] = e[i] || "";
                return o
            }
        }
        , {}],
        45: [function(t, e, n) {
            (function(e) {
                var r = t("isarray")
                  , o = t("./is-buffer");
                n.deconstructPacket = function(t) {
                    function e(t) {
                        if (!t)
                            return t;
                        if (o(t)) {
                            var i = {
                                _placeholder: !0,
                                num: n.length
                            };
                            return n.push(t),
                            i
                        }
                        if (r(t)) {
                            for (var s = new Array(t.length), a = 0; a < t.length; a++)
                                s[a] = e(t[a]);
                            return s
                        }
                        if ("object" == typeof t && !(t instanceof Date)) {
                            var s = {};
                            for (var c in t)
                                s[c] = e(t[c]);
                            return s
                        }
                        return t
                    }
                    var n = []
                      , i = t.data
                      , s = t;
                    return s.data = e(i),
                    s.attachments = n.length,
                    {
                        packet: s,
                        buffers: n
                    }
                }
                ,
                n.reconstructPacket = function(t, e) {
                    function n(t) {
                        if (t && t._placeholder) {
                            var o = e[t.num];
                            return o
                        }
                        if (r(t)) {
                            for (var i = 0; i < t.length; i++)
                                t[i] = n(t[i]);
                            return t
                        }
                        if (t && "object" == typeof t) {
                            for (var s in t)
                                t[s] = n(t[s]);
                            return t
                        }
                        return t
                    }
                    return t.data = n(t.data),
                    t.attachments = void 0,
                    t
                }
                ,
                n.removeBlobs = function(t, n) {
                    function i(t, c, p) {
                        if (!t)
                            return t;
                        if (e.Blob && t instanceof Blob || e.File && t instanceof File) {
                            s++;
                            var u = new FileReader;
                            u.onload = function() {
                                p ? p[c] = this.result : a = this.result,
                                --s || n(a)
                            }
                            ,
                            u.readAsArrayBuffer(t)
                        } else if (r(t))
                            for (var f = 0; f < t.length; f++)
                                i(t[f], f, t);
                        else if (t && "object" == typeof t && !o(t))
                            for (var h in t)
                                i(t[h], h, t)
                    }
                    var s = 0
                      , a = t;
                    i(a),
                    s || n(a)
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./is-buffer": 47,
            isarray: 48
        }],
        46: [function(t, e, n) {
            function r() {}
            function o(t) {
                var e = ""
                  , r = !1;
                return e += t.type,
                (n.BINARY_EVENT == t.type || n.BINARY_ACK == t.type) && (e += t.attachments,
                e += "-"),
                t.nsp && "/" != t.nsp && (r = !0,
                e += t.nsp),
                null  != t.id && (r && (e += ",",
                r = !1),
                e += t.id),
                null  != t.data && (r && (e += ","),
                e += f.stringify(t.data)),
                u("encoded %j as %s", t, e),
                e
            }
            function i(t, e) {
                function n(t) {
                    var n = l.deconstructPacket(t)
                      , r = o(n.packet)
                      , i = n.buffers;
                    i.unshift(r),
                    e(i)
                }
                l.removeBlobs(t, n)
            }
            function s() {
                this.reconstructor = null
            }
            function a(t) {
                var e = {}
                  , r = 0;
                if (e.type = Number(t.charAt(0)),
                null  == n.types[e.type])
                    return p();
                if (n.BINARY_EVENT == e.type || n.BINARY_ACK == e.type) {
                    for (var o = ""; "-" != t.charAt(++r) && (o += t.charAt(r),
                    r != t.length); )
                        ;
                    if (o != Number(o) || "-" != t.charAt(r))
                        throw new Error("Illegal attachments");
                    e.attachments = Number(o)
                }
                if ("/" == t.charAt(r + 1))
                    for (e.nsp = ""; ++r; ) {
                        var i = t.charAt(r);
                        if ("," == i)
                            break;
                        if (e.nsp += i,
                        r == t.length)
                            break
                    }
                else
                    e.nsp = "/";
                var s = t.charAt(r + 1);
                if ("" !== s && Number(s) == s) {
                    for (e.id = ""; ++r; ) {
                        var i = t.charAt(r);
                        if (null  == i || Number(i) != i) {
                            --r;
                            break
                        }
                        if (e.id += t.charAt(r),
                        r == t.length)
                            break
                    }
                    e.id = Number(e.id)
                }
                if (t.charAt(++r))
                    try {
                        e.data = f.parse(t.substr(r))
                    } catch (a) {
                        return p()
                    }
                return u("decoded %s as %j", t, e),
                e
            }
            function c(t) {
                this.reconPack = t,
                this.buffers = []
            }
            function p() {
                return {
                    type: n.ERROR,
                    data: "parser error"
                }
            }
            var u = t("debug")("socket.io-parser")
              , f = t("json3")
              , h = (t("isarray"),
            t("component-emitter"))
              , l = t("./binary")
              , d = t("./is-buffer");
            n.protocol = 4,
            n.types = ["CONNECT", "DISCONNECT", "EVENT", "BINARY_EVENT", "ACK", "BINARY_ACK", "ERROR"],
            n.CONNECT = 0,
            n.DISCONNECT = 1,
            n.EVENT = 2,
            n.ACK = 3,
            n.ERROR = 4,
            n.BINARY_EVENT = 5,
            n.BINARY_ACK = 6,
            n.Encoder = r,
            n.Decoder = s,
            r.prototype.encode = function(t, e) {
                if (u("encoding packet %j", t),
                n.BINARY_EVENT == t.type || n.BINARY_ACK == t.type)
                    i(t, e);
                else {
                    var r = o(t);
                    e([r])
                }
            }
            ,
            h(s.prototype),
            s.prototype.add = function(t) {
                var e;
                if ("string" == typeof t)
                    e = a(t),
                    n.BINARY_EVENT == e.type || n.BINARY_ACK == e.type ? (this.reconstructor = new c(e),
                    0 === this.reconstructor.reconPack.attachments && this.emit("decoded", e)) : this.emit("decoded", e);
                else {
                    if (!d(t) && !t.base64)
                        throw new Error("Unknown type: " + t);
                    if (!this.reconstructor)
                        throw new Error("got binary data when not reconstructing a packet");
                    e = this.reconstructor.takeBinaryData(t),
                    e && (this.reconstructor = null ,
                    this.emit("decoded", e))
                }
            }
            ,
            s.prototype.destroy = function() {
                this.reconstructor && this.reconstructor.finishedReconstruction()
            }
            ,
            c.prototype.takeBinaryData = function(t) {
                if (this.buffers.push(t),
                this.buffers.length == this.reconPack.attachments) {
                    var e = l.reconstructPacket(this.reconPack, this.buffers);
                    return this.finishedReconstruction(),
                    e
                }
                return null
            }
            ,
            c.prototype.finishedReconstruction = function() {
                this.reconPack = null ,
                this.buffers = []
            }
        }
        , {
            "./binary": 45,
            "./is-buffer": 47,
            "component-emitter": 9,
            debug: 10,
            isarray: 48,
            json3: 49
        }],
        47: [function(t, e) {
            (function(t) {
                function n(e) {
                    return t.Buffer && t.Buffer.isBuffer(e) || t.ArrayBuffer && e instanceof ArrayBuffer
                }
                e.exports = n
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        48: [function(t, e) {
            e.exports = t(32)
        }
        , {}],
        49: [function(e, n, r) {
            !function(e) {
                function n(t) {
                    if (n[t] !== s)
                        return n[t];
                    var e;
                    if ("bug-string-char-index" == t)
                        e = "a" != "a"[0];
                    else if ("json" == t)
                        e = n("json-stringify") && n("json-parse");
                    else {
                        var r, o = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if ("json-stringify" == t) {
                            var i = u.stringify
                              , c = "function" == typeof i && f;
                            if (c) {
                                (r = function() {
                                    return 1
                                }
                                ).toJSON = r;
                                try {
                                    c = "0" === i(0) && "0" === i(new Number) && '""' == i(new String) && i(a) === s && i(s) === s && i() === s && "1" === i(r) && "[1]" == i([r]) && "[null]" == i([s]) && "null" == i(null ) && "[null,null,null]" == i([s, a, null ]) && i({
                                        a: [r, !0, !1, null , "\x00\b\n\f\r  "]
                                    }) == o && "1" === i(null , r) && "[\n 1,\n 2\n]" == i([1, 2], null , 1) && '"-271821-04-20T00:00:00.000Z"' == i(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == i(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == i(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == i(new Date(-1))
                                } catch (p) {
                                    c = !1
                                }
                            }
                            e = c
                        }
                        if ("json-parse" == t) {
                            var h = u.parse;
                            if ("function" == typeof h)
                                try {
                                    if (0 === h("0") && !h(!1)) {
                                        r = h(o);
                                        var l = 5 == r.a.length && 1 === r.a[0];
                                        if (l) {
                                            try {
                                                l = !h('" "')
                                            } catch (p) {}
                                            if (l)
                                                try {
                                                    l = 1 !== h("01")
                                                } catch (p) {}
                                            if (l)
                                                try {
                                                    l = 1 !== h("1.")
                                                } catch (p) {}
                                        }
                                    }
                                } catch (p) {
                                    l = !1
                                }
                            e = l
                        }
                    }
                    return n[t] = !!e
                }
                var o, i, s, a = {}.toString, c = "function" == typeof t && t.amd, p = "object" == typeof JSON && JSON, u = "object" == typeof r && r && !r.nodeType && r;
                u && p ? (u.stringify = p.stringify,
                u.parse = p.parse) : u = e.JSON = p || {};
                var f = new Date(-0xc782b5b800cec);
                try {
                    f = -109252 == f.getUTCFullYear() && 0 === f.getUTCMonth() && 1 === f.getUTCDate() && 10 == f.getUTCHours() && 37 == f.getUTCMinutes() && 6 == f.getUTCSeconds() && 708 == f.getUTCMilliseconds()
                } catch (h) {}
                if (!n("json")) {
                    var l = "[object Function]"
                      , d = "[object Date]"
                      , y = "[object Number]"
                      , g = "[object String]"
                      , m = "[object Array]"
                      , v = "[object Boolean]"
                      , b = n("bug-string-char-index");
                    if (!f)
                        var w = Math.floor
                          , k = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                          , x = function(t, e) {
                            return k[e] + 365 * (t - 1970) + w((t - 1969 + (e = +(e > 1))) / 4) - w((t - 1901 + e) / 100) + w((t - 1601 + e) / 400)
                        }
                        ;
                    (o = {}.hasOwnProperty) || (o = function(t) {
                        var e, n = {};
                        return (n.__proto__ = null ,
                        n.__proto__ = {
                            toString: 1
                        },
                        n).toString != a ? o = function(t) {
                            var e = this.__proto__
                              , n = t in (this.__proto__ = null ,
                            this);
                            return this.__proto__ = e,
                            n
                        }
                         : (e = n.constructor,
                        o = function(t) {
                            var n = (this.constructor || e).prototype;
                            return t in this && !(t in n && this[t] === n[t])
                        }
                        ),
                        n = null ,
                        o.call(this, t)
                    }
                    );
                    var A = {
                        "boolean": 1,
                        number: 1,
                        string: 1,
                        undefined: 1
                    }
                      , B = function(t, e) {
                        var n = typeof t[e];
                        return "object" == n ? !!t[e] : !A[n]
                    }
                    ;
                    if (i = function(t, e) {
                        var n, r, s, c = 0;
                        (n = function() {
                            this.valueOf = 0
                        }
                        ).prototype.valueOf = 0,
                        r = new n;
                        for (s in r)
                            o.call(r, s) && c++;
                        return n = r = null ,
                        c ? i = 2 == c ? function(t, e) {
                            var n, r = {}, i = a.call(t) == l;
                            for (n in t)
                                i && "prototype" == n || o.call(r, n) || !(r[n] = 1) || !o.call(t, n) || e(n)
                        }
                         : function(t, e) {
                            var n, r, i = a.call(t) == l;
                            for (n in t)
                                i && "prototype" == n || !o.call(t, n) || (r = "constructor" === n) || e(n);
                            (r || o.call(t, n = "constructor")) && e(n)
                        }
                         : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
                        i = function(t, e) {
                            var n, i, s = a.call(t) == l, c = !s && "function" != typeof t.constructor && B(t, "hasOwnProperty") ? t.hasOwnProperty : o;
                            for (n in t)
                                s && "prototype" == n || !c.call(t, n) || e(n);
                            for (i = r.length; n = r[--i]; c.call(t, n) && e(n))
                                ;
                        }
                        ),
                        i(t, e)
                    }
                    ,
                    !n("json-stringify")) {
                        var C = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        }
                          , S = "000000"
                          , E = function(t, e) {
                            return (S + (e || 0)).slice(-t)
                        }
                          , T = "\\u00"
                          , j = function(t) {
                            var e, n = '"', r = 0, o = t.length, i = o > 10 && b;
                            for (i && (e = t.split("")); o > r; r++) {
                                var s = t.charCodeAt(r);
                                switch (s) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    n += C[s];
                                    break;
                                default:
                                    if (32 > s) {
                                        n += T + E(2, s.toString(16));
                                        break
                                    }
                                    n += i ? e[r] : b ? t.charAt(r) : t[r]
                                }
                            }
                            return n + '"'
                        }
                          , _ = function(t, e, n, r, c, p, u) {
                            var f, h, l, b, k, A, B, C, S, T, P, R, N, O, q, D;
                            try {
                                f = e[t]
                            } catch (U) {}
                            if ("object" == typeof f && f)
                                if (h = a.call(f),
                                h != d || o.call(f, "toJSON"))
                                    "function" == typeof f.toJSON && (h != y && h != g && h != m || o.call(f, "toJSON")) && (f = f.toJSON(t));
                                else if (f > -1 / 0 && 1 / 0 > f) {
                                    if (x) {
                                        for (k = w(f / 864e5),
                                        l = w(k / 365.2425) + 1970 - 1; x(l + 1, 0) <= k; l++)
                                            ;
                                        for (b = w((k - x(l, 0)) / 30.42); x(l, b + 1) <= k; b++)
                                            ;
                                        k = 1 + k - x(l, b),
                                        A = (f % 864e5 + 864e5) % 864e5,
                                        B = w(A / 36e5) % 24,
                                        C = w(A / 6e4) % 60,
                                        S = w(A / 1e3) % 60,
                                        T = A % 1e3
                                    } else
                                        l = f.getUTCFullYear(),
                                        b = f.getUTCMonth(),
                                        k = f.getUTCDate(),
                                        B = f.getUTCHours(),
                                        C = f.getUTCMinutes(),
                                        S = f.getUTCSeconds(),
                                        T = f.getUTCMilliseconds();
                                    f = (0 >= l || l >= 1e4 ? (0 > l ? "-" : "+") + E(6, 0 > l ? -l : l) : E(4, l)) + "-" + E(2, b + 1) + "-" + E(2, k) + "T" + E(2, B) + ":" + E(2, C) + ":" + E(2, S) + "." + E(3, T) + "Z"
                                } else
                                    f = null ;
                            if (n && (f = n.call(e, t, f)),
                            null  === f)
                                return "null";
                            if (h = a.call(f),
                            h == v)
                                return "" + f;
                            if (h == y)
                                return f > -1 / 0 && 1 / 0 > f ? "" + f : "null";
                            if (h == g)
                                return j("" + f);
                            if ("object" == typeof f) {
                                for (O = u.length; O--; )
                                    if (u[O] === f)
                                        throw TypeError();
                                if (u.push(f),
                                P = [],
                                q = p,
                                p += c,
                                h == m) {
                                    for (N = 0,
                                    O = f.length; O > N; N++)
                                        R = _(N, f, n, r, c, p, u),
                                        P.push(R === s ? "null" : R);
                                    D = P.length ? c ? "[\n" + p + P.join(",\n" + p) + "\n" + q + "]" : "[" + P.join(",") + "]" : "[]"
                                } else
                                    i(r || f, function(t) {
                                        var e = _(t, f, n, r, c, p, u);
                                        e !== s && P.push(j(t) + ":" + (c ? " " : "") + e)
                                    }),
                                    D = P.length ? c ? "{\n" + p + P.join(",\n" + p) + "\n" + q + "}" : "{" + P.join(",") + "}" : "{}";
                                return u.pop(),
                                D
                            }
                        }
                        ;
                        u.stringify = function(t, e, n) {
                            var r, o, i, s;
                            if ("function" == typeof e || "object" == typeof e && e)
                                if ((s = a.call(e)) == l)
                                    o = e;
                                else if (s == m) {
                                    i = {};
                                    for (var c, p = 0, u = e.length; u > p; c = e[p++],
                                    s = a.call(c),
                                    (s == g || s == y) && (i[c] = 1))
                                        ;
                                }
                            if (n)
                                if ((s = a.call(n)) == y) {
                                    if ((n -= n % 1) > 0)
                                        for (r = "",
                                        n > 10 && (n = 10); r.length < n; r += " ")
                                            ;
                                } else
                                    s == g && (r = n.length <= 10 ? n : n.slice(0, 10));
                            return _("", (c = {},
                            c[""] = t,
                            c), o, i, r, "", [])
                        }
                    }
                    if (!n("json-parse")) {
                        var P, R, N = String.fromCharCode, O = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: " ",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        }, q = function() {
                            throw P = R = null ,
                            SyntaxError()
                        }
                        , D = function() {
                            for (var t, e, n, r, o, i = R, s = i.length; s > P; )
                                switch (o = i.charCodeAt(P)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    P++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return t = b ? i.charAt(P) : i[P],
                                    P++,
                                    t;
                                case 34:
                                    for (t = "@",
                                    P++; s > P; )
                                        if (o = i.charCodeAt(P),
                                        32 > o)
                                            q();
                                        else if (92 == o)
                                            switch (o = i.charCodeAt(++P)) {
                                            case 92:
                                            case 34:
                                            case 47:
                                            case 98:
                                            case 116:
                                            case 110:
                                            case 102:
                                            case 114:
                                                t += O[o],
                                                P++;
                                                break;
                                            case 117:
                                                for (e = ++P,
                                                n = P + 4; n > P; P++)
                                                    o = i.charCodeAt(P),
                                                    o >= 48 && 57 >= o || o >= 97 && 102 >= o || o >= 65 && 70 >= o || q();
                                                t += N("0x" + i.slice(e, P));
                                                break;
                                            default:
                                                q()
                                            }
                                        else {
                                            if (34 == o)
                                                break;
                                            for (o = i.charCodeAt(P),
                                            e = P; o >= 32 && 92 != o && 34 != o; )
                                                o = i.charCodeAt(++P);
                                            t += i.slice(e, P)
                                        }
                                    if (34 == i.charCodeAt(P))
                                        return P++,
                                        t;
                                    q();
                                default:
                                    if (e = P,
                                    45 == o && (r = !0,
                                    o = i.charCodeAt(++P)),
                                    o >= 48 && 57 >= o) {
                                        for (48 == o && (o = i.charCodeAt(P + 1),
                                        o >= 48 && 57 >= o) && q(),
                                        r = !1; s > P && (o = i.charCodeAt(P),
                                        o >= 48 && 57 >= o); P++)
                                            ;
                                        if (46 == i.charCodeAt(P)) {
                                            for (n = ++P; s > n && (o = i.charCodeAt(n),
                                            o >= 48 && 57 >= o); n++)
                                                ;
                                            n == P && q(),
                                            P = n
                                        }
                                        if (o = i.charCodeAt(P),
                                        101 == o || 69 == o) {
                                            for (o = i.charCodeAt(++P),
                                            (43 == o || 45 == o) && P++,
                                            n = P; s > n && (o = i.charCodeAt(n),
                                            o >= 48 && 57 >= o); n++)
                                                ;
                                            n == P && q(),
                                            P = n
                                        }
                                        return +i.slice(e, P)
                                    }
                                    if (r && q(),
                                    "true" == i.slice(P, P + 4))
                                        return P += 4,
                                        !0;
                                    if ("false" == i.slice(P, P + 5))
                                        return P += 5,
                                        !1;
                                    if ("null" == i.slice(P, P + 4))
                                        return P += 4,
                                        null ;
                                    q()
                                }
                            return "$"
                        }
                        , U = function(t) {
                            var e, n;
                            if ("$" == t && q(),
                            "string" == typeof t) {
                                if ("@" == (b ? t.charAt(0) : t[0]))
                                    return t.slice(1);
                                if ("[" == t) {
                                    for (e = []; t = D(),
                                    "]" != t; n || (n = !0))
                                        n && ("," == t ? (t = D(),
                                        "]" == t && q()) : q()),
                                        "," == t && q(),
                                        e.push(U(t));
                                    return e
                                }
                                if ("{" == t) {
                                    for (e = {}; t = D(),
                                    "}" != t; n || (n = !0))
                                        n && ("," == t ? (t = D(),
                                        "}" == t && q()) : q()),
                                        ("," == t || "string" != typeof t || "@" != (b ? t.charAt(0) : t[0]) || ":" != D()) && q(),
                                        e[t.slice(1)] = U(D());
                                    return e
                                }
                                q()
                            }
                            return t
                        }
                        , I = function(t, e, n) {
                            var r = L(t, e, n);
                            r === s ? delete t[e] : t[e] = r
                        }
                        , L = function(t, e, n) {
                            var r, o = t[e];
                            if ("object" == typeof o && o)
                                if (a.call(o) == m)
                                    for (r = o.length; r--; )
                                        I(o, r, n);
                                else
                                    i(o, function(t) {
                                        I(o, t, n)
                                    });
                            return n.call(t, e, o)
                        }
                        ;
                        u.parse = function(t, e) {
                            var n, r;
                            return P = 0,
                            R = "" + t,
                            n = U(D()),
                            "$" != D() && q(),
                            P = R = null ,
                            e && a.call(e) == l ? L((r = {},
                            r[""] = n,
                            r), "", e) : n
                        }
                    }
                }
                c && t(function() {
                    return u
                })
            }(this)
        }
        , {}],
        50: [function(t, e) {
            function n(t, e) {
                var n = [];
                e = e || 0;
                for (var r = e || 0; r < t.length; r++)
                    n[r - e] = t[r];
                return n
            }
            e.exports = n
        }
        , {}]
    }, {}, [1])(1)
});
function showStream(e) {
    if (e.channel) {
        if (currenttwitch != e.channel) {
            if (!streamCachedTemplate) {
                var t = $("#twitch-stream-template").html();
                try {
                    streamCachedTemplate = Handlebars.compile(t)
                } catch (n) {}
            }
            var i = $("#stream-container");
            i.html(""),
            currenttwitch = e.channel;
            var o = $("<div style='display:none;'>" + streamCachedTemplate(e) + "</div>");
            i.html(o),
            o.animate({
                height: "toggle"
            }, 250).fadeTo(100, 1)
        }
    } else {
        currenttwitch = "";
        var i = $("#stream-container");
        i.html("")
    }
}
function showGoingLive(e) {
    var t = 5
      , n = $(".modal-going-live");
    n.find(".seconds").text(t);
    var i = setInterval(function() {
        t--,
        0 >= t && (n.modal("hide"),
        clearInterval(i)),
        n.find(".seconds").text(t)
    }, 1e3);
    n.modal({
        keyboard: !1,
        backdrop: "static"
    })
}
function modalStream() {
    var e = $(".modal-stream");
    e.modal({
        keyboard: !1,
        backdrop: "static"
    })
}
function modalApp() {
    var e = $(".modal-stream-app");
    e.modal({
        keyboard: !1,
        backdrop: "static"
    })
}
function modalChatRules() {
    var e = $(".modal-chat-rules");
    e.modal({
        keyboard: !1,
        backdrop: "static"
    })
}
function loginModal() {
    var e = $(".login_modal");
    e.modal({
        keyboard: !1,
        backdrop: "static"
    })
}
function withdrawBatch(e) {
    for (var t = $(e).siblings(".batch_id").text(), n = $(".item_" + t), i = [], o = 0; o < n.length; o++) {
        var r = $(n[o]).text();
        i.push(r)
    }
    var a = t.replace("batch_", "status_");
    $("." + t).prop("disabled", !0),
    withdrawBatchSubscribed || (withdrawBatchSubscribed = !0,
    userChannel.bind("make_offer", function(e) {
        "success" === e.type ? ($("." + t).text("Withdrawn").removeClass("btn-warning").removeClass("btn-default").addClass("btn-success"),
        $("." + a).text("Success")) : "error" === e.type && ($("." + t).text("Withdraw Batch").removeClass("btn-warning").addClass("btn-default").prop("disabled", !1),
        $("." + a).text("Failed"))
    }),
    userChannel.bind),
    $.ajax({
        url: "/api/v1/inventory/withdrawassetid",
        type: "post",
        data: {
            item_ids: i
        },
        dataType: "json"
    }).done(function(e, t, n) {
        "success" === t && showTradeQueued()
    }).fail(function(e, n, i) {
        if ("success" == e.responseText)
            showTradeQueued();
        else {
            var o = e.responseJSON.message;
            $("." + t).text("Withdraw Batch").removeClass("btn-warning").addClass("btn-default").prop("disabled", !1),
            $("." + a).text("Failed"),
            noty({
                text: o,
                type: "error"
            })
        }
    }),
    $("." + t).removeClass("btn-default").addClass("btn-warning").text("In Progress"),
    $("." + a).text("Pending")
}
function isPusherOnline() {
    return $("#pusherStatus").length && $("#pusherStatus").hasClass("pusher_online")
}
function showTradeQueued() {
    isPusherOnline() ? noty({
        text: "Trade queued. Waiting for bot...",
        type: "info"
    }) : (noty({
        text: "Trade queued. Go to Steam to accept it.",
        type: "info"
    }),
    noty({
        text: "Unable to get live trade updates in browser.",
        type: "warning"
    }))
}
$.views.settings.delimiters("!|", "|!");
var publicChannel, userChannel, pusher;
$.ajaxSetup({
    headers: {
        "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content")
    }
}),
$.sanitize = function(e) {
    var t = e.replace(/<script[^>]*?>.*?<\/script>/gi, "").replace(/<[\/\!]*?[^<>]*?>/gi, "").replace(/<style[^>]*?>.*?<\/style>/gi, "").replace(/<![\s\S]*?--[ \t\n\r]*>/gi, "");
    return t
}
,
$(document).ready(function() {
    $(".knob").knob(),
    $(".switch-mode").click(function() {
        var e = $(this).data("mode")
          , t = !0;
        try {
            localStorage.test = 2
        } catch (n) {
            var t = !1
        }
        if (window.localStorage && t) {
            window.localStorage.setItem("mode", e);
            var i = window.localStorage.getItem("oiInfoModal");
            i || ($(".oi_info-modal").modal(),
            window.localStorage.setItem("oiInfoModal", !0))
        }
        "night" == e ? $("body").removeClass("vl-white") : $("body").addClass("vl-white"),
        $(".vl-theme-mode .current-mode").removeClass("current-mode"),
        $(this).addClass("current-mode")
    });
    var e = window.localStorage.getItem("mode");
    e || (e = "day"),
    e && $(".switch-mode[data-mode='" + e + "']").trigger("click"),
    $(window).on("resize", function() {
        $(".knob-holder").css("width", $(".knob-holder").parent().width());
        var e = ($(window).height() - $(".navbar").outerHeight(!0) - $("footer").outerHeight(!0),
        Math.min($(".knob-holder").width()));
        e = Math.max(e, 100),
        $(".knob").trigger("configure", {
            value: 0,
            min: 0,
            max: window.config.roundLimit,
            fgColor: "#db1c1d ",
            bgColor: "transparent",
            thickness: ".15",
            inputColor: "#db1c1d ",
            width: e,
            height: e,
            readOnly: !0,
            dynamicDraw: !0
        })
    }).trigger("resize"),
    $(".withdraw_batch_button").click(function() {
        withdrawBatch(this)
    })
}),
$(window).load(function() {
    function e() {
        Pusher.host = "pusher.csgojackpot.com",
        Pusher.ws_port = 8443,
        Pusher.wss_port = 8443,
        pusher = new Pusher($("#pusherApiKey").text(),{
            encrypted: !0,
            enabledTransports: ["ws", "flash"],
            disableStats: !0
        }),
        pusher.connection.bind("connected", function() {
            $("#pusherStatus").removeClass("text-danger").addClass("text-success").addClass("pusher_online").removeClass("pusher_offline"),
            $("#pusherStatus").tooltip("hide").attr("data-original-title", "Receiving real-time updates from bots.").tooltip("fixTitle"),
            window.config.homepage && !function(e, t, n) {
                var i, o = e.getElementsByTagName(t)[0];
                e.getElementById(n) || (i = e.createElement(t),
                i.id = n,
                i.src = "/assets/js/dist/chat.js?v=0.02",
                o.parentNode.insertBefore(i, o))
            }(document, "script", "vulcun-chat")
        }),
        pusher.connection.bind("disconnected", function() {
            $("#pusherStatus").removeClass("text-success").addClass("text-danger").addClass("pusher_offline").removeClass("pusher_online"),
            $("#pusherStatus").tooltip("hide").attr("data-original-title", "Not receiving real-time trade updates.").tooltip("fixTitle")
        }),
        publicChannel = pusher.subscribe("public"),
        userChannel = pusher.subscribe(pushersecretchannel),
        userChannel.bind("make_offer", function(e) {
            if (!e.error_recovery_failed) {
                var t = 5e3;
                "info" === e.type && (t = 1e4),
                noty({
                    text: "<strong>Bot #" + e.bot_id + "</strong>: " + e.text,
                    type: e.type,
                    timeout: t
                }),
                l(),
                n()
            }
        }),
        userChannel.bind("accept_offer", function(e) {
            noty({
                text: "<strong>Bot #" + e.bot_id + "</strong>: " + e.text,
                type: e.type
            })
        }),
        userChannel.bind("refund_user", function(e) {
            var e = JSON.parse(e);
            noty({
                text: "You've been refunded " + e.number + " skins valued at $" + e.value.toFixed(2),
                type: "success",
                timeout: 5e3
            }),
            l(),
            n()
        })
    }
    function t() {
        $("#account-button").on("click", function(e) {
            e.preventDefault();
            var t = location.pathname
              , n = $("form.edit-account");
            $.ajax({
                type: "POST",
                url: "account",
                data: n.serialize(),
                success: function(e) {
                    noty({
                        text: "Account Information Saved",
                        type: "success"
                    }),
                    "/" == t && setTimeout(function() {
                        window.location.reload()
                    }, 1e3)
                }
            })
        })
    }
    function n() {
        $(".noty_bar").off("click").on("click", "a", function() {
            $(this).remove()
        }
        .bind(this))
    }
    function i(e) {
        var t = "prizes";
        M[t] || (M[t] = $.templates("#action-template-" + t));
        var n = $(".current-round-skins");
        n.html("");
        var i = []
          , o = e;
        for (skin in o)
            if (i[o[skin].classid])
                i[o[skin].classid].count++,
                i[o[skin].classid].count > 1 && (i[o[skin].classid].multiple = !0);
            else {
                var r = I(o[skin].market_price)
                  , a = r >= 1e3 ? "skin-tier-6" : r >= 750 ? "skin-tier-5" : r >= 400 ? "skin-tier-4" : r >= 200 ? "skin-tier-3" : r >= 75 ? "skin-tier-2" : r >= 0 ? "skin-tier-1" : "";
                i[o[skin].classid] = {
                    extraClass: a,
                    skin: "https://steamcommunity-a.akamaihd.net/economy/image/class/730/" + o[skin].classid + "/111fx57f",
                    numberPrice: r,
                    price: r.toFixed(2),
                    description: o[skin].market_hash_name || "",
                    count: 1,
                    multiple: !1
                }
            }
        var s = [];
        for (var l in i)
            s.push(i[l]);
        delete i,
        s = s.sort(function(e, t) {
            return e.numberPrice - t.numberPrice
        });
        for (var c = $("<li></li>"), d = function(e) {
            (2 == c.children().length || 0 != c.children().length && e) && (n.append(c),
            c = $("<li></li>"))
        }
        , l = s.length - 1; l >= 0; l--)
            d(),
            c.append(M[t].render(s[l]));
        d(!0),
        window.vulcunInterface && window.vulcunInterface.scrollbars.refresh()
    }
    function o() {
        publicChannel.bind("prizes", function(e) {
            i(e)
        })
    }
    function r() {
        $("#confetti").show(),
        window.confettiLib.start(),
        $(".modal-safe-winner").modal({
            keyboard: !1,
            backdrop: "static"
        })
    }
    function a(e, t) {
        try {
            if (e && e.created_at && (e.dateGMT = new Date(e.created_at).getSeconds()),
            e.number && "" != e.number) {
                e.numberElements = "";
                for (var n = 0; n < parseInt(e.number); n++)
                    e.numberElements += "<li class='light'></li>";
                for (var n = parseInt(e.number); 10 > n; n++)
                    e.numberElements += "<li></li>"
            }
            e && e.price && "" != e.price && (e.price = I(e.price).toFixed(2)),
            M[e.type] || (M[e.type] = $.templates("#action-template-" + e.type)),
            e && e.type && "won" == e.type && ($(".user-deposited-total-skins").html("0 skins"),
            $(".user-winning-percentage").html("0"));
            try {
                e && e.user && e.user.personaname && -1 === e.user.personaname.toLowerCase().indexOf("csgojackpot.com") && -1 === e.user.personaname.toLowerCase().indexOf("twitch.com") && -1 === e.user.personaname.toLowerCase().indexOf("twitch.tv") && (e.user.personaname = e.user.personaname.replace(/(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6} ?/gi, "✪"))
            } catch (i) {}
            var o = $("<div style='display:none;'>" + M[e.type].render(e) + "</div>");
            if (e && e.user && e.user.id && window.config && window.config.userId && e.user.id == window.config.userId && (t && "won" == e.type ? setTimeout(function() {
                r(),
                o.find(".activity:last-child").addClass("self-action")
            }, 5e3) : "won" == e.type && o.find(".activity:last-child").addClass("self-action")),
            $(".activity-status").prepend(o),
            o.animate({
                height: "toggle"
            }, 250).fadeTo(100, .25).fadeTo(100, 1).fadeTo(100, .25).fadeTo(100, 1),
            "won" == e.type) {
                var a = function() {
                    o.find(".show-on-end").fadeTo(1, 1);
                    var t = o.find(".round-teaser .roullete")
                      , n = o.find(".winner-image");
                    t.append(n),
                    n.css("display", "block"),
                    o.find(".full-show-on-end").show(0),
                    window.vulcunInterface.wheel.newRate(null , null , null , e.user.avatar, $.sanitize(e.user.personaname))
                }
                ;
                if (t) {
                    if (window.vulcunInterface) {
                        var s = [e.user.avatar]
                          , l = '<a><div class="vl-progress-lost__avatar"><img src="' + e.user.avatar + '"></div></a>'
                          , c = $($(".vl-title.new-round")[1]).parents(".round-separator").parent().prevAll().find("img");
                        c.each(function() {
                            var e = $(this).attr("src");
                            -1 === s.indexOf(e) && (l += '<a><div class="vl-progress-lost__avatar"><img src="' + e + '"></div></a>',
                            s.push(e))
                        }),
                        $(".winner-animator-load .roulette").html(l),
                        window.vulcunInterface.wheel.reel(function() {
                            a(),
                            $(".user-deposited-total-skins").html("0"),
                            $(".user-winning-percentage").html("0")
                        })
                    }
                } else
                    a()
            }
        } catch (i) {}
        t || (A && clearTimeout(A),
        A = setTimeout(function() {
            $(window).trigger("resize")
        }, 500))
    }
    function s() {
        publicChannel.bind("action", function(e) {
            a(e, !0)
        })
    }
    function l() {
        $.get("/api/v1/inventory", function(e) {
            var t = "oiitem";
            M[t] || (M[t] = $.templates("#item-template-oi"));
            for (var n = $(".oi_list"), i = n.children("label"), o = 0; o < i.length; o++)
                i[o].remove();
            for (var r in e.response) {
                var a = e.response[r]
                  , s = I(a.price);
                a.extraClass = s >= 1e3 ? "skin-tier-6" : s >= 750 ? "skin-tier-5" : s >= 400 ? "skin-tier-4" : s >= 200 ? "skin-tier-3" : s >= 75 ? "skin-tier-2" : s >= 0 ? "skin-tier-1" : "",
                a.price = s.toFixed(2),
                $(".oi_list").append(M[t].render(a))
            }
            c(),
            p(),
            d(),
            h()
        })
    }
    function c() {
        var e = $($("#onsite-inventory-form").find(".oi_list"))
          , t = e.children("label");
        t.sort(function(e, t) {
            return e = 0 == $(e).find(".oi_value").length ? 999999999 : parseFloat($(e).find(".oi_value").html()),
            t = 0 == $(t).find(".oi_value").length ? 999999999 : parseFloat($(t).find(".oi_value").html()),
            t - e
        }),
        e.append(t)
    }
    function d() {
        $("#withdraw-inventory").off("click").on("click", function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            u();
            var t = $("#onsite-inventory-form")
              , n = t.find("label :checkbox:checked");
            $.ajax({
                type: "POST",
                url: "/api/v1/inventory/withdraw",
                data: t.serialize(),
                error: function(e) {
                    var t = e.responseJSON.message;
                    f(),
                    noty({
                        text: t,
                        type: "error"
                    }),
                    l()
                },
                success: function(e) {
                    f(),
                    noty({
                        text: "Your trades have been added to the queue...",
                        type: "info"
                    })
                }
            });
            for (var i = 0; i < n.length; i++)
                $(n[i]).parent().fadeOut(300, function() {
                    $(this).remove(),
                    $("#selection-number").html("0"),
                    $("#selection-price").html("0.00")
                });
            noty({
                timeout: !1,
                text: "Building your trade offers...",
                type: "info"
            })
        })
    }
    function u() {
        $("#withdraw-inventory").prop("disabled", !0),
        $("#enter-jackpot").prop("disabled", !0),
        $("#submit-inventory").prop("disabled", !0)
    }
    function f() {
        $("#withdraw-inventory").prop("disabled", !1),
        $("#enter-jackpot").prop("disabled", !1),
        $("#submit-inventory").prop("disabled", !1)
    }
    function p() {
        var e = $($("#onsite-inventory-form").find(".oi_list"));
        e.off("click").on("click", "label", function(t) {
            t.stopPropagation();
            for (var n = 0, i = e.find("label :checkbox:checked").parent().find(".oi_value"), o = 0; o < i.length; o++)
                n += I(i[o].innerHTML);
            $("#selection-number").html(i.length),
            $("#selection-price").html(I(n).toFixed(2)),
            $(".number-skins").html(i.length),
            $(".evaluation-skins").html(I(n).toFixed(2)),
            0 == i.length ? ($("#withdraw-inventory").prop("disabled", !0),
            $("#enter-jackpot").prop("disabled", !0),
            $("#enter-jackpot").html("Select Skins")) : i.length > 10 ? ($("#withdraw-inventory").prop("disabled", !1),
            $("#enter-jackpot").prop("disabled", !0),
            $("#enter-jackpot").html("Max 10 skins")) : ($("#withdraw-inventory").prop("disabled", !1),
            10 > n ? ($("#enter-jackpot").prop("disabled", !0),
            $("#enter-jackpot").html("Min Bet $10")) : ($("#enter-jackpot").html("Deposit"),
            $("#enter-jackpot").prop("disabled", !1)))
        })
    }
    function h() {
        $("#enter-jackpot").off("click").on("click", function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            u();
            var t = $("#onsite-inventory-form")
              , n = t.find("label :checkbox:checked");
            m(t.serialize());
            for (var i = 0; i < n.length; i++)
                $(n[i]).parent().fadeOut(300, function() {
                    $(this).remove(),
                    $("#selection-number").html("0"),
                    $("#selection-price").html("0.00")
                })
        })
    }
    function m(e) {
        var t = $(".modal-confirm-deposit");
        t.modal({
            keyboard: !1,
            backdrop: "static"
        }),
        v(e)
    }
    function v(e) {
        $("#cancel-enter").off("click").on("click", function() {
            l()
        }),
        $("#confirm-enter").off("click").on("click", function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            $.ajax({
                type: "POST",
                url: "/api/v1/action/store",
                data: e,
                error: function(e) {
                    f(),
                    l()
                },
                success: function(e) {
                    f()
                }
            }),
            $(".modal-confirm-deposit").modal("hide")
        })
    }
    function g() {
        $(".pie").show();
        var e = $(".modal_oi-steam");
        e.modal({
            keyboard: !1,
            backdrop: "static"
        }),
        w()
    }
    function w() {
        $("#inventory-modal").html("");
        var e = "item";
        M[e] || (M[e] = $.templates("#item-template")),
        $.get("/api/v1/inventory/steam", function(t) {
            for (var n in t.response) {
                var i = t.response[n]
                  , o = I(i.price);
                i.extraClass = o >= 1e3 ? "skin-tier-6" : o >= 750 ? "skin-tier-5" : o >= 400 ? "skin-tier-4" : o >= 200 ? "skin-tier-3" : o >= 75 ? "skin-tier-2" : o >= 0 ? "skin-tier-1" : "",
                i.price = o.toFixed(2),
                $("#inventory-modal").append(M[e].render(i))
            }
            b(),
            y(),
            $(".radial-progress-el").hide(),
            k()
        })
    }
    function b() {
        var e = $("#inventory-modal")
          , t = e.children("label");
        t.sort(function(e, t) {
            return e = 0 == $(e).find(".oi_value").length ? 999999999 : parseFloat($(e).find(".oi_value").html()),
            t = 0 == $(t).find(".oi_value").length ? 999999999 : parseFloat($(t).find(".oi_value").html()),
            t - e
        }),
        e.html(t)
    }
    function y() {
        var e = $("#inventory-modal");
        e.off("click").on("click", "label", function(t) {
            t.stopPropagation();
            for (var n = 0, i = e.find("label :checkbox:checked").parent().find(".oi_value"), o = 0; o < i.length; o++)
                n += I(i[o].innerHTML);
            $("#steam-selection-number").html(i.length),
            $("#steam-selection-price").html(I(n).toFixed(2)),
            0 == i.length ? ($("#submit-inventory").prop("disabled", !0),
            $("#submit-inventory").html("Add from Steam")) : i.length > 50 ? ($("#submit-inventory").prop("disabled", !0),
            $("#submit-inventory").html("Max 50 Skins per Trade")) : ($("#submit-inventory").prop("disabled", !1),
            $("#submit-inventory").html("Add from Steam"))
        })
    }
    function k() {
        $("#submit-inventory").off("click").on("click", function(e) {
            $("#onsite-inventory-form").find("input[type=checkbox]:checked").removeAttr("checked"),
            $("#steam-selection-number").html("0"),
            $("#steam-selection-price").html("0.00"),
            e.preventDefault(),
            e.stopPropagation(),
            u();
            var t = $("#deposit-modal");
            t.find("label :checkbox:checked");
            $.ajax({
                type: "POST",
                url: t.attr("action"),
                data: t.serialize(),
                error: function(e) {
                    var t = e.responseJSON.message;
                    noty({
                        text: t,
                        type: "error"
                    }),
                    l()
                },
                success: function(e) {
                    f(),
                    noty({
                        text: "Your trade has been added to the queue...",
                        type: "info"
                    })
                }
            }),
            $(".modal_oi-steam").modal("hide"),
            noty({
                text: "Building your trade offer...",
                type: "info"
            })
        })
    }
    function C(e, t, n) {
        if ("" == e.message)
            $(".sticky").html("");
        else {
            try {
                P || (P = $.templates("#sticky-template"));
                var i = $("<div style='display:none;'>" + P.render(e) + "</div>");
                $(".sticky").html(i),
                i.animate({
                    height: "toggle"
                }, 250).fadeTo(100, .25).fadeTo(100, 1).fadeTo(100, .25).fadeTo(100, 1)
            } catch (o) {}
            t || (A && clearTimeout(A),
            A = setTimeout(function() {
                $(window).trigger("resize")
            }, 500))
        }
        n()
    }
    function x() {
        $("#updates-arrow").unbind("click"),
        $("#updates-arrow").click(function(e) {
            e.preventDefault(),
            $("#updates-arrow").toggleClass("rotate-45")
        }),
        $("#updatesText").unbind("click"),
        $("#updatesText").click(function(e) {
            e.preventDefault(),
            $("#updates-arrow").toggleClass("rotate-45")
        })
    }
    function _() {
        publicChannel.bind("sticky", function(e) {
            C(JSON.parse(e), !0, function() {
                x()
            })
        })
    }
    function T(e) {
        window.currentPotPrice = e.price,
        $.when($(".knob").animate({
            value: e.current
        }, {
            duration: 1e3,
            easing: "swing",
            progress: function() {
                $(this).val(I(this.value)).trigger("change")
            }
        })),
        window.vulcunInterface && (0 == e.current ? (window.vulcunInterface.wheel.renderProgress(0),
        window.vulcunInterface.wheel.clearProgress()) : window.vulcunInterface.wheel.renderProgress(Math.min(50, e.current)),
        e && e.price && window.vulcunInterface.wheel.newRate(e.price.toFixed(2)))
    }
    function S() {
        pusher.bind("total", function(e) {
            T(e)
        })
    }
    function I(e) {
        return void 0 === e ? 0 : Math.floor(100 * parseFloat(e)) / 100
    }
    e(),
    $.noty.defaults = {
        layout: "topCenter",
        theme: "defaultTheme",
        type: "alert",
        text: "",
        dismissQueue: !0,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
            open: {
                height: "toggle"
            },
            close: {
                height: "toggle"
            },
            easing: "swing",
            speed: 500
        },
        timeout: 1e4,
        force: !1,
        modal: !1,
        maxVisible: 1,
        killer: !0,
        closeWith: ["button"],
        callback: {
            onShow: function() {},
            afterShow: function() {},
            onClose: function() {},
            afterClose: function() {},
            onCloseClick: function() {}
        },
        buttons: !1
    },
    t(),
    $(window).on("resize scroll", function() {
        var e = $(".vl-popular-items-in-round-container, .vl-frame-container");
        if (e.length > 0) {
            var t = Math.max($(window).scrollTop() + $(window).height() - $(".vl-footer").offset().top, 0)
              , n = $(window).height() - (e.offset().top - $(window).scrollTop()) - t;
            e.height(n);
            var i = $(".vlch-chat");
            if (i.length > 0) {
                i.height(Math.min($(window).height() - 135 - 80, $(".vl-footer").offset().top - i.offset().top - 135));
                $(".activity-status")
            }
            $(".vlch-chat--public").css("bottom", t),
            $(".vl-popular-items-in-round-container,.current-round-skins").css("width", "");
            var o = $(".vl-popular-item-round").outerWidth();
            $(".vl-popular-items-in-round-container,.current-round-skins").width(Math.floor($(".vl-popular-items-in-round-container").outerWidth() / o) * o + 25),
            window.vulcunInterface && window.vulcunInterface.scrollbars.refresh(),
            $(".current-round-skins").height("")
        }
        if ($(".vl-progress-lost-container.vl-animation").length > 0) {
            var r = $(".vl-progress-lost-container.vl-animation").outerWidth(!0) - $(".vl-progress-lost-container.vl-animation").outerWidth();
            r /= 2,
            $(".vl-progress-lost-container.vl-winner-animation").css("left", $(".vl-progress-lost-container.vl-animation").position().left + $(".vl-progress-lost-container.vl-animation .vl-loader").position().left + r)
        }
    }).trigger("resize");
    var P, M = [];
    publicChannel.bind("going_live", function(e) {
        showGoingLive(e)
    }),
    publicChannel.bind("stream", function(e) {
        showStream(e)
    }),
    userChannel.bind("accept_offer", function(e) {
        noty({
            text: "<strong>Bot #" + e.bot_id + "</strong>: " + e.text + ":: ACCEPT OFFER",
            type: e.type,
            timeout: 5e3
        }),
        l()
    }),
    $.get("/api/v1/round/init", function(e) {
        i(e.response.prize),
        T(e.response),
        o(),
        S()
    }),
    $(".modal-safe-winner").off("hidden.bs.modal").on("hidden.bs.modal", function(e) {
        setTimeout(function() {
            $("#confetti").fadeOut(1500, function() {
                window.confettiLib.stop()
            })
        }, 2500)
    }),
    window.triggerWin = r;
    var A = null ;
    $.get("/api/v1/action/init", function(e) {
        for (var t in e.response)
            a(e.response[t], !1);
        s()
    }),
    l(),
    $("#show-steam-inventory").on("click", g),
    $.get("/api/v1/sticky", function(e) {
        C(e.Sticky, !1, function() {
            _(),
            x()
        })
    }),
    publicChannel.bind("resetConnetion", function(e) {
        $(".activity-status").html("")
    }),
    userChannel.bind("userStatistics", function(e) {
        var t = e.skins ? e.skins : 0
          , n = e.percentage ? e.percentage : 0;
        t && $(".user-deposited-total-skins").html(t),
        n && $(".user-winning-percentage").html(n.toFixed(2))
    });
    var L = window.showMessage = function(e, t) {
        var n = $(".modal-message");
        n.find(".modal-title").html(e),
        n.find(".modal-body").html(t),
        n.modal()
    }
      , R = window.getTemplate = function(e, t) {
        if (!M[e]) {
            var n = $("#modals-template-" + e).html();
            M[e] = Handlebars.compile(n)
        }
        return M[e](t)
    }
    ;
    userChannel.bind("errorWinner", function(e) {
        L(window.LANG_ERROR, R("error-winner"))
    }),
    userChannel.bind("canceledTrade", function(e) {
        L(window.LANG_DEPOSIT, R("error-accepting-offer"))
    }),
    userChannel.bind("winnerTradeSuccessFull", function(e) {
        L(window.LANG_CONGRATULATIONS, R("trade-sent", {
            code: e.securityCode,
            value: e.value.toFixed(2),
            valueNotZero: 0 != e.value || e.winnerBot,
            botNumber: e.botNumber,
            winnerBot: e.winnerBot
        }))
    }),
    publicChannel.bind("enteringMaintenance", function(e) {
        L(window.LANG_MAINTENANCE, R("maintenance"))
    }),
    userChannel.bind("checksumTradeOffer", function(e) {
        $(".checksumTradeOfferContainer").html(e)
    }),
    userChannel.bind("youWon", function() {
        l()
    }),
    userChannel.bind("queuePosition", function(e) {
        e ? $(".queue-message").html("#" + e).css("color", "") : $(".queue-message").html("No").css("color", "#db1c1d")
    });
    var F = null
      , O = 0;
    userChannel.bind("deposit", function(e) {
        var t = !1
          , n = !1;
        F && clearInterval(F);
        var i = $(".modal-confirm-deposit");
        O = 60,
        F = setInterval(function() {
            0 >= O && (t || (n || (n = !0),
            i.modal("hide")),
            clearInterval(F),
            i.find(".missing-seconds").text("0")),
            O >= 0 && i.find(".missing-seconds").text(O),
            O--
        }, 1e3),
        i.find(".missing-seconds").text("60"),
        i.find(".number-skins").text(e.data.items_to_receive.length),
        i.find(".evaluation-skins").text(I(e.price)),
        i.find(".accept-terms").val(""),
        i.modal({
            keyboard: !1,
            backdrop: "static"
        }),
        i.off("hidden.bs.modal").on("hidden.bs.modal", function(e) {
            t || n || (n = !0)
        }),
        i.find(".accept-trade").off("click").on("click", function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            i.find(".accept-terms").is(":checked") ? (t = !0,
            clearInterval(F),
            n || (n = !0),
            i.modal("hide")) : alert(window.LANG_PLEASE)
        })
    }),
    window.onLoaded && window.onLoaded()
});
var streamCachedTemplate, currenttwitch = "";
$("#show-stream-application").on("click", modalApp),
$("#show-chat-rules").on("click", modalChatRules),
$("#show-alt-login").on("click", loginModal),
$("#faq-nav ul li a[href^='#']").on("click", function(e) {
    e.preventDefault();
    var t = this.hash;
    $("html, body").animate({
        scrollTop: $(t).offset().top
    }, 300, function() {
        window.location.hash = t
    })
}),
function() {
    var e, t, n = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    ;
    t = function() {
        function e() {
            this.render = n(this.render, this),
            this.getElements(),
            this.setup(),
            this.render()
        }
        return e.prototype.elements = [],
        e.prototype.render = function() {
            var e, t, n, i, o;
            for (requestAnimationFrame(this.render),
            i = this.elements,
            o = [],
            t = 0,
            n = i.length; n > t; t++)
                e = i[t],
                "true" === e.rendering || e.rendering ? o.push(this.draw(e)) : o.push(void 0);
            return o
        }
        ,
        e.prototype.getElements = function() {
            var e, t, n, i, o;
            for (e = document.getElementsByClassName("radial-progress-el"),
            o = [],
            n = 0,
            i = e.length; i > n; n++)
                t = e[n],
                o.push(this.elements.push({
                    dom: t
                }));
            return o
        }
        ,
        e.prototype.setup = function() {
            var e, t, n, i, o, r, a, s, l, c, d, u;
            for (d = this.elements,
            u = [],
            n = 0,
            r = d.length; r > n; n++) {
                for (e = d[n],
                c = ["rendering", "direction", "innerRadius", "outerRadius", "fillColor", "fillPercent", "canvasWidth", "canvasHeight"],
                t = ["innerRadius", "outerRadius", "fillPercent", "canvasWidth", "canvasHeight"],
                i = 0,
                a = c.length; a > i; i++)
                    l = c[i],
                    e[l] = e.dom.getAttribute("data-" + l);
                for (o = 0,
                s = t.length; s > o; o++)
                    l = t[o],
                    e[l] = parseFloat(e[l]);
                e.ctx = e.dom.getContext("2d"),
                e.dom.holder = e,
                u.push(e.dom.update = function(e, t) {
                    return this.holder[e] = t
                }
                )
            }
            return u
        }
        ,
        e.prototype.draw = function(e) {
            var t, n, i, o, r, a, s, l;
            return o = e,
            n = o.ctx,
            n.clearRect(0, 0, o.canvasWidth, o.canvasHeight),
            i = "counterclockwise" === o.direction ? !0 : !1,
            s = o.canvasWidth / 2,
            l = o.canvasHeight / 2,
            t = 360 * o.fillPercent * (Math.PI / 180),
            r = -90 * (Math.PI / 180),
            a = o.outerRadius - o.innerRadius,
            n.strokeStyle = o.fillColor,
            n.lineWidth = a,
            n.beginPath(),
            n.arc(s, l, o.innerRadius + .5 * a, 0 + r, t + r, i),
            n.stroke(),
            n.closePath()
        }
        ,
        e
    }(),
    e = function() {
        function e() {
            this.loop = n(this.loop, this),
            this.getElements(),
            this.loop()
        }
        return e.prototype.state = "starting",
        e.prototype.fillPercent = 0,
        e.prototype.rate = .005,
        e.prototype.getElements = function() {
            return this.element = document.querySelector(".radial-progress-el")
        }
        ,
        e.prototype.loop = function() {
            return requestAnimationFrame(this.loop),
            this.fillPercent += this.rate,
            this.fillPercent > 1 && (this.fillPercent = 0),
            this.element.update("fillPercent", this.fillPercent)
        }
        ,
        e
    }(),
    new t,
    new e
}
.call(this);
var withdrawBatchSubscribed = !1;
!function() {
    $.fn.exists = function() {
        return 0 !== this.length
    }
    ,
    window.vl = {};
    var e = {
        newRoundContainer: "vl-new-round-container",
        newRoundItem: "vl-new-round__item",
        itemUserChance: "vl-new-round__item-user-chance",
        loader: "vl-loader",
        countRatesContainer: "vl-count-rates-container",
        frameContainer: "vl-frame-container",
        scrollbar: "vl-scrollbar",
        animation: "vl-animation",
        shadowAnimateContainer: "vl-shadow-animate-container",
        progressLostInfoContainer: "vl-progress-lost__info-container",
        progressLostInfoImage: "vl-progress-lost__info-image",
        progressLostInfoBet: "vl-progress-lost__info-bet",
        progressLostInfoSkins: "vl-progress-lost__info-skins",
        progressLostInfoTotal: "vl-progress-lost__info-total",
        progressLostContainer: "vl-progress-lost-container",
        cloneContainer: "vl-clone-container",
        displayNone: "_display_none",
        light: "light"
    }
      , t = {}
      , n = function(e, t, n) {
        $.each(t, function(t, i) {
            e[t] = n + i
        })
    }
    ;
    vl.buildSelectors = function(e, t) {
        var i = {};
        return e && n(i, e, "."),
        t && n(i, t, "#"),
        i
    }
    ;
    var i, o, r, a, s, l, c, d, u, f, p, h, m, v, g = vl.buildSelectors(e, t), w = 0;
    $(function() {
        i = $(g.itemUserChance),
        o = $(g.newRoundItem),
        r = $(g.newRoundContainer),
        a = $(g.loader),
        s = $(g.countRatesContainer),
        l = $(g.frameContainer),
        c = $(g.scrollbar),
        d = $(g.progressLostInfoContainer),
        u = $(g.progressLostInfoImage),
        f = $(g.progressLostInfoBet),
        p = $(g.progressLostInfoSkins),
        h = $(g.progressLostInfoTotal),
        m = $(g.shadowAnimateContainer),
        v = $(g.progressLostContainer),
        i.exists() && i.each(k),
        o.exists() && r.exists(),
        l.exists() && $(".vl-scrollbar").remove()
    });
    var b = function(e, t, n, i, o) {
        i && y(u, i, o),
        n && y(f, n + "%"),
        t && y(p, t),
        e && y(h, "" + e)
    }
      , y = function(e, t, n) {
        var i = e.find(g.cloneContainer).clone();
        i.css({
            marginTop: "-81px",
            opacity: 0
        }),
        i.find("h1").length > 0 ? i.find("h1").text(t) : i.find(".winner-avatar").length > 0 && (i.find(".winner-avatar").attr("src", t),
        i.find(".winner-name").text(n)),
        e.prepend(i),
        i.animate({
            marginTop: 0,
            opacity: 1
        }, {
            duration: 0
        }),
        e.find(g.cloneContainer).last().animate({
            opacity: 0
        }, {
            duration: 0,
            complete: function() {
                e.find(g.cloneContainer).not(":first").remove()
            }
        })
    }
      , k = function() {
        var t = $(this)
          , n = t.data("count-chance");
        t.find("li").removeClass(e.light);
        for (var i = 0; n > i; i++)
            t.find("li").eq(i).addClass(e.light)
    }
      , C = function() {
        $(".vl-animate-75-100-b, .vl-animate-50-75-b, .vl-animate-25-50-b, .vl-animate-0-25-b").removeAttr("style"),
        w = 0
    }
      , x = function(e) {
        e *= 2;
        var t = $("<span/>", {
            text: e / 2
        }).css({
            marginTop: "-115px",
            opacity: 0
        });
        s.prepend(t),
        t.animate({
            marginTop: 0,
            opacity: 1
        }, {
            duration: 200,
            step: function(e, t) {},
            complete: function() {
                s.find("span").last().remove()
            }
        })
    }
    ;
    vl.reel = function(e) {
        var t = $(".vl-progress-lost-container.vl-winner-animation .roulette a")
          , n = 360 / t.length
          , i = 270
          , o = []
          , r = "12em";
        window.innerWidth > 1279 ? r = "12em" : window.innerWidth > 1023 ? r = "9.2em" : window.innerWidth > 767 ? r = "7em" : window.innerWidth > 539 ? r = "5.5em" : window.innerWidth > 319 && (r = "3.2em"),
        t.each(function() {
            $(this).attr("style", "transform: rotate(" + Math.floor(i) + "deg) translate(" + r + ") rotate(90deg); -ms-transform: rotate(" + Math.floor(i) + "deg) translate(" + r + ") rotate(90deg); -webkit-transform: rotate(" + Math.floor(i) + "deg) translate(" + r + ") rotate(90deg); -moz-transform: rotate(" + Math.floor(i) + "deg) translate(" + r + ") rotate(90deg); -o-transform: rotate(" + Math.floor(i) + "deg) translate(" + r + ") rotate(90deg);"),
            i += n,
            o.push({
                description: $(this).find("img").attr("src")
            })
        }),
        $(".vl-progress-lost-container.vl-winner-animation").fadeIn(1e3),
        $(".vl-progress-lost-container.vl-animation").fadeTo(1e3, .01);
        var a = $(".winner-animator-load").fortune(t.length);
        a.spin(0).done(function() {
            setTimeout(function() {
                $(".vl-progress-lost-container.vl-winner-animation").fadeOut(1e3),
                $(".vl-progress-lost-container.vl-animation").fadeTo(1e3, 1, e)
            }, 1e3)
        })
    }
    ,
    vl.stopReel = function() {}
    ,
    window.vulcunInterface = {
        wheel: {
            clearProgress: C,
            renderProgress: x,
            newRate: b,
            reel: vl.reel,
            stopReel: vl.stopReel
        },
        scrollbars: {
            refresh: function() {}
        }
    }
}(),
function(e) {
    var t = function(t) {
        if (void 0 === t)
            throw new Error("You must define the options.prices");
        var n = e.extend({}, {
            prices: t,
            duration: 6e3,
            separation: 2,
            min_spins: 5,
            max_spins: 15,
            onSpinBounce: function() {}
        }, t)
          , i = this
          , o = Array.isArray(n.prices) ? n.prices.length : n.prices
          , r = 360 / o
          , a = !1;
        i.spin = function(t) {
            t = "number" == typeof t ? t : Math.floor(Math.random() * o);
            var c = e.Deferred()
              , d = Math.floor(r * t)
              , u = l(n.min_spins, n.max_spins)
              , f = 360 * u + d
              , p = 0
              , h = !1;
            a = !0,
            i.css({
                transform: "rotate(" + f + "deg)",
                "-webkit-transform": "rotate(" + f + "deg)",
                transition: "transform " + n.duration + "ms cubic-bezier(.17,.67,.12,.99)",
                "-webkit-transition": "-webkit-transform " + n.duration + "ms cubic-bezier(.17,.67,.12,.99)"
            }).siblings(".spin").removeClass("bounce");
            var m = function() {
                var e, t = Math.floor(s(i)), o = Math.floor((t + .5 * r) % r), l = r / 5, c = r / 10;
                p = Math.floor(p > t ? p - 360 : p),
                e = t - p,
                l > o && c > e || 3 * l > o && e >= c ? h || (i.siblings(".spin").addClass("bounce"),
                n.onSpinBounce(i.siblings(".spin")),
                h = !0) : (i.siblings(".spin").removeClass("bounce"),
                h = !1),
                a && (p = t,
                requestAnimationFrame(m))
            }
              , v = requestAnimationFrame(m);
            return setTimeout(function() {
                i.css({
                    transform: "rotate(" + d + "deg)",
                    "-webkit-transform": "rotate(" + d + "deg)",
                    transition: "",
                    "-webkit-transition": ""
                }).siblings(".spin").removeClass("bounce"),
                cancelAnimationFrame(v),
                c.resolve(Array.isArray(n.prices) ? n.prices[t] : t),
                a = !1
            }, n.duration),
            c.promise()
        }
        ;
        var s = function(e) {
            var t = 0
              , n = e.css("-webkit-transform") || e.css("-moz-transform") || e.css("-ms-transform") || e.css("-o-transform") || e.css("transform");
            if ("none" !== n) {
                var i = n.split("(")[1].split(")")[0].split(",")
                  , o = i[0]
                  , r = i[1]
                  , a = Math.atan2(r, o);
                0 > a && (a += 2 * Math.PI),
                t = Math.round(a * (180 / Math.PI))
            }
            return t
        }
          , l = function(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e
        }
        ;
        return i
    }
    ;
    e.extend(e.fn, {
        fortune: t
    })
}(jQuery);
