/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = a.document, e = c.slice, f = c.concat, g = c.push, h = c.indexOf, i = {}, j = i.toString, k = i.hasOwnProperty, l = {}, m = "2.2.4", n = function (a, b) { return new n.fn.init(a, b) }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) { return b.toUpperCase() }; n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function () { return e.call(this) }, get: function (a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this) }, pushStack: function (a) { var b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function (a) { return n.each(this, a) }, map: function (a) { return this.pushStack(n.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(e.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d)); return g }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === n.type(a) }, isArray: Array.isArray, isWindow: function (a) { return null != a && a === a.window }, isNumeric: function (a) { var b = a && a.toString(); return !n.isArray(a) && b - parseFloat(b) + 1 >= 0 }, isPlainObject: function (a) { var b; if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1; if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1; for (b in a); return void 0 === b || k.call(a, b) }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a }, globalEval: function (a) { var b, c = eval; a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a)) }, camelCase: function (a) { return a.replace(p, "ms-").replace(q, r) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b) { var c, d = 0; if (s(a)) { for (c = a.length; c > d; d++)if (b.call(a[d], d, a[d]) === !1) break } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break; return a }, trim: function (a) { return null == a ? "" : (a + "").replace(o, "") }, makeArray: function (a, b) { var c = b || []; return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c }, inArray: function (a, b, c) { return null == b ? -1 : h.call(b, a, c) }, merge: function (a, b) { for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, e, g = 0, h = []; if (s(a)) for (d = a.length; d > g; g++)e = b(a[g], g, c), null != e && h.push(e); else for (g in a) e = b(a[g], g, c), null != e && h.push(e); return f.apply([], h) }, guid: 1, proxy: function (a, b) { var c, d, f; return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function () { return a.apply(b || this, d.concat(e.call(arguments))) }, f.guid = a.guid = a.guid || n.guid++ , f) : void 0 }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) { i["[object " + b + "]"] = b.toLowerCase() }); function s(a) { var b = !!a && "length" in a && a.length, c = n.type(a); return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a } var t = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function (a, b) { return a === b && (l = !0), 0 }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) { for (var c = 0, d = a.length; d > c; c++)if (a[c] === b) return c; return -1 }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ca = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }, da = function () { m() }; try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (ea) { H = { apply: E.length ? function (a, b) { G.apply(a, I.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function fa(a, b, d, e) { var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) { if (11 !== x && (o = $.exec(a))) if (f = o[1]) { if (9 === x) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) { if (1 !== x) w = b, s = a; else if ("object" !== b.nodeName.toLowerCase()) { (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']"; while (h--) r[h] = l + " " + qa(r[h]); s = r.join(","), w = _.test(a) && oa(b.parentNode) || b } if (s) try { return H.apply(d, w.querySelectorAll(s)), d } catch (y) { } finally { k === u && b.removeAttribute("id") } } } return i(a.replace(Q, "$1"), b, d, e) } function ga() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function ha(a) { return a[u] = !0, a } function ia(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function ja(a, b) { var c = a.split("|"), e = c.length; while (e--) d.attrHandle[c[e]] = b } function ka(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C); if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function la(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function ma(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function na(a) { return ha(function (b) { return b = +b, ha(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function oa(a) { return a && "undefined" != typeof a.getElementsByTagName && a } c = fa.support = {}, f = fa.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = fa.setDocument = function (a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ia(function (a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }, d.filter.ID = function (a) { var b = a.replace(ba, ca); return function (a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function (a) { var b = a.replace(ba, ca); return function (a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ia(function (a) { var b = n.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, B = b ? function (a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return l = !0, 0; var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b]; if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0; if (e === f) return ka(a, b); c = a; while (c = c.parentNode) g.unshift(c); c = b; while (c = c.parentNode) h.unshift(c); while (g[d] === h[d]) d++; return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, fa.matches = function (a, b) { return fa(a, null, null, b) }, fa.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return fa(b, n, null, [a]).length > 0 }, fa.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, fa.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, fa.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, fa.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = fa.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling)c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(ba, ca).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = fa.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1; if (q) { if (f) { while (p) { m = b; while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break; return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: ha(function (a) { var b = [], c = [], d = h(a.replace(Q, "$1")); return d[u] ? ha(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ha(function (a) { return function (b) { return fa(a, b).length > 0 } }), contains: ha(function (a) { return a = a.replace(ba, ca), function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ha(function (a) { return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) { var c; do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === o }, focus: function (a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function (a) { return a.disabled === !1 }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return Y.test(a.nodeName) }, input: function (a) { return X.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: na(function () { return [0] }), last: na(function (a, b) { return [b - 1] }), eq: na(function (a, b, c) { return [0 > c ? c + b : c] }), even: na(function (a, b) { for (var c = 0; b > c; c += 2)a.push(c); return a }), odd: na(function (a, b) { for (var c = 1; b > c; c += 2)a.push(c); return a }), lt: na(function (a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d); return a }), gt: na(function (a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = la(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b); function pa() { } pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? fa.error(a) : z(a, i).slice(0) }; function qa(a) { for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value; return d } function ra(a, b, c) { var d = b.dir, e = c && "parentNode" === d, f = x++; return b.first ? function (b, c, f) { while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f) } : function (b, c, g) { var h, i, j, k = [w, f]; if (g) { while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else while (b = b[d]) if (1 === b.nodeType || e) { if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2]; if (i[d] = k, k[2] = a(b, c, g)) return !0 } } } function sa(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function ta(a, b, c) { for (var d = 0, e = b.length; e > d; d++)fa(a, b[d], c); return c } function ua(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g } function va(a, b, c, d, e, f) { return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = ua(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r) }) } function wa(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) { return a === b }, h, !0), l = ra(function (a) { return J(b, a) > -1 }, h, !0), m = [function (a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; f > i; i++)if (c = d.relative[a[i].type]) m = [ra(sa(m), c)]; else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; f > e; e++)if (d.relative[a[e].type]) break; return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a)) } m.push(c) } return sa(m) } function xa(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) { var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length; for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) { if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p); while (q = a[o++]) if (q(l, g || n, h)) { i.push(l); break } k && (w = y) } c && ((l = !q && l) && r-- , f && t.push(l)) } if (r += s, c && s !== r) { o = 0; while (q = b[o++]) q(t, u, g, h); if (f) { if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i)); u = ua(u) } H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i) } return k && (w = y, j = v), t }; return c ? ha(f) : f } return h = fa.compile = function (a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f); f = A(a, xa(e, d)), f.selector = a } return f }, i = fa.select = function (a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e; n && (b = b.parentNode), a = a.slice(j.shift().value.length) } i = W.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ia(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ja("type|href|height|width", function (a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ia(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ja("value", function (a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ia(function (a) { return null == a.getAttribute("disabled") }) || ja(K, function (a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), fa }(a); n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains; var u = function (a, b, c) { var d = [], e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) { if (e && n(a).is(c)) break; d.push(a) } return d }, v = function (a, b) { for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a); return c }, w = n.expr.match.needsContext, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, y = /^.[^:#\[\.,]*$/; function z(a, b, c) { if (n.isFunction(b)) return n.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return n.grep(a, function (a) { return a === b !== c }); if ("string" == typeof b) { if (y.test(b)) return n.filter(b, a, c); b = n.filter(b, a) } return n.grep(a, function (a) { return h.call(b, a) > -1 !== c }) } n.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) { return 1 === a.nodeType })) }, n.fn.extend({ find: function (a) { var b, c = this.length, d = [], e = this; if ("string" != typeof a) return this.pushStack(n(a).filter(function () { for (b = 0; c > b; b++)if (n.contains(e[b], this)) return !0 })); for (b = 0; c > b; b++)n.find(a, e[b], d); return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d }, filter: function (a) { return this.pushStack(z(this, a || [], !1)) }, not: function (a) { return this.pushStack(z(this, a || [], !0)) }, is: function (a) { return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length } }); var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function (a, b, c) { var e, f; if (!a) return this; if (c = c || A, "string" == typeof a) { if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) { if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this } return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)) }; C.prototype = n.fn, A = n(d); var D = /^(?:parents|prev(?:Until|All))/, E = { children: !0, contents: !0, next: !0, prev: !0 }; n.fn.extend({ has: function (a) { var b = n(a, this), c = b.length; return this.filter(function () { for (var a = 0; c > a; a++)if (n.contains(this, b[a])) return !0 }) }, closest: function (a, b) { for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f) }, index: function (a) { return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function F(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a } n.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return u(a, "parentNode") }, parentsUntil: function (a, b, c) { return u(a, "parentNode", c) }, next: function (a) { return F(a, "nextSibling") }, prev: function (a) { return F(a, "previousSibling") }, nextAll: function (a) { return u(a, "nextSibling") }, prevAll: function (a) { return u(a, "previousSibling") }, nextUntil: function (a, b, c) { return u(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return u(a, "previousSibling", c) }, siblings: function (a) { return v((a.parentNode || {}).firstChild, a) }, children: function (a) { return v(a.firstChild) }, contents: function (a) { return a.contentDocument || n.merge([], a.childNodes) } }, function (a, b) { n.fn[a] = function (c, d) { var e = n.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e) } }); var G = /\S+/g; function H(a) { var b = {}; return n.each(a.match(G) || [], function (a, c) { b[c] = !0 }), b } n.Callbacks = function (a) { a = "string" == typeof a ? H(a) : n.extend({}, a); var b, c, d, e, f = [], g = [], h = -1, i = function () { for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) } a.memory || (c = !1), b = !1, e && (f = c ? [] : "") }, j = { add: function () { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { n.each(b, function (b, c) { n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function () { return n.each(arguments, function (a, b) { var c; while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h-- }), this }, has: function (a) { return a ? n.inArray(a, f) > -1 : f.length > 0 }, empty: function () { return f && (f = []), this }, disable: function () { return e = g = [], f = c = "", this }, disabled: function () { return !f }, lock: function () { return e = g = [], c || (f = c = ""), this }, locked: function () { return !!e }, fireWith: function (a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function () { return j.fireWith(this, arguments), this }, fired: function () { return !!d } }; return j }, n.extend({ Deferred: function (a) { var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = { state: function () { return c }, always: function () { return e.done(arguments).fail(arguments), this }, then: function () { var a = arguments; return n.Deferred(function (c) { n.each(b, function (b, f) { var g = n.isFunction(a[b]) && a[b]; e[f[1]](function () { var a = g && g.apply(this, arguments); a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function (a) { return null != a ? n.extend(a, d) : d } }, e = {}; return d.pipe = d.then, n.each(b, function (a, f) { var g = f[2], h = f[3]; d[f[1]] = g.add, h && g.add(function () { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function (a) { var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) { return function (d) { b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } }, i, j, k; if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f; return f || g.resolveWith(k, c), g.promise() } }); var I; n.fn.ready = function (a) { return n.ready.promise().done(a), this }, n.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? n.readyWait++ : n.ready(!0) }, ready: function (a) { (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready")))) } }); function J() { d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready() } n.ready.promise = function (b) { return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b) }, n.ready.promise(); var K = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === n.type(c)) { e = !0; for (h in c) K(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(n(a), c) })), b)) for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }, L = function (a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }; function M() { this.expando = n.expando + M.uid++ } M.uid = 1, M.prototype = { register: function (a, b) { var c = b || {}; return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando] }, cache: function (a) { if (!L(a)) return {}; var b = a[this.expando]; return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b }, set: function (a, b, c) { var d, e = this.cache(a); if ("string" == typeof b) e[b] = c; else for (d in b) e[d] = b[d]; return e }, get: function (a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b] }, access: function (a, b, c) { var d; return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function (a, b) { var c, d, e, f = a[this.expando]; if (void 0 !== f) { if (void 0 === b) this.register(a); else { n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length; while (c--) delete f[d[c]] } (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } }, hasData: function (a) { var b = a[this.expando]; return void 0 !== b && !n.isEmptyObject(b) } }; var N = new M, O = new M, P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Q = /[A-Z]/g; function R(a, b, c) {
        var d; if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
            } catch (e) { } O.set(a, b, c)
        } else c = void 0; return c
    } n.extend({ hasData: function (a) { return O.hasData(a) || N.hasData(a) }, data: function (a, b, c) { return O.access(a, b, c) }, removeData: function (a, b) { O.remove(a, b) }, _data: function (a, b, c) { return N.access(a, b, c) }, _removeData: function (a, b) { N.remove(a, b) } }), n.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d]))); N.set(f, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { O.set(this, a) }) : K(this, function (b) { var c, d; if (f && void 0 === b) { if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c; if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c; if (c = R(f, d, void 0), void 0 !== c) return c } else d = n.camelCase(a), this.each(function () { var c = O.get(this, d); O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function (a) { return this.each(function () { O.remove(this, a) }) } }), n.extend({ queue: function (a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function (a, b) { b = b || "fx"; var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () { n.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function () { N.remove(a, [b + "queue", c]) }) }) } }), n.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = n.queue(this, a, b); n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { n.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++ , c.empty.add(h)); return h(), e.promise(b) } }); var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), U = ["Top", "Right", "Bottom", "Left"], V = function (a, b) { return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) }; function W(a, b, c, d) { var e, f = 1, g = 20, h = d ? function () { return d.cur() } : function () { return n.css(a, b, "") }, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1; do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e } var X = /^(?:checkbox|radio)$/i, Y = /<([\w:-]+)/, Z = /^$|\/(?:java|ecma)script/i, $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td; function _(a, b) { var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c } function aa(a, b) { for (var c = 0, d = a.length; d > c; c++)N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval")) } var ba = /<|&#?\w+;/; function ca(a, b, c, d, e) { for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f); else if (ba.test(f)) { g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0]; while (k--) g = g.lastChild; n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "" } else m.push(b.createTextNode(f)); l.textContent = "", o = 0; while (f = m[o++]) if (d && n.inArray(f, d) > -1) e && e.push(f); else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) { k = 0; while (f = g[k++]) Z.test(f.type || "") && c.push(f) } return l } !function () { var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input"); c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }(); var da = /^key/, ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, fa = /^([^.]*)(?:\.(.+)|)/; function ga() { return !0 } function ha() { return !1 } function ia() { try { return d.activeElement } catch (a) { } } function ja(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) ja(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha; else if (!e) return a; return 1 === f && (g = e, e = function (a) { return n().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () { n.event.add(this, b, e, d, c) }) } n.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a); if (r) { c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) { return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(G) || [""], j = b.length; while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0) } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a); if (r && (i = r.events)) { b = (b || "").match(G) || [""], j = b.length; while (j--) if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount-- , l.remove && l.remove.call(a, k)); g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]) } else for (o in i) n.event.remove(a, o + b[j], c, d, !0); n.isEmptyObject(i) && N.remove(a, "handle events") } }, dispatch: function (a) { a = n.event.fix(a); var b, c, d, f, g, h = [], i = e.call(arguments), j = (N.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, c = 0; while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function (a, b) { var c, d, e, f, g = [], h = b.delegateCount, i = a.target; if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f); d.length && g.push({ elem: i, handlers: d }) } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) { var c, e, f, g = b.button; return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a } }, fix: function (a) { if (a[n.expando]) return a; var b, c, e, f = a.type, g = a, h = this.fixHooks[f]; h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length; while (b--) c = e[b], a[c] = g[c]; return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a }, special: { load: { noBubble: !0 }, focus: { trigger: function () { return this !== ia() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function () { return this === ia() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function () { return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function (a) { return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } } }, n.removeEvent = function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, n.Event = function (a, b) { return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b) }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, isSimulated: !1, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault() }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function () { var a = this.originalEvent; this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation() } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { n.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), n.fn.extend({ on: function (a, b, c, d) { return ja(this, a, b, c, d) }, one: function (a, b, c, d) { return ja(this, a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function () { n.event.remove(this, a, c, b) }) } }); var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, la = /<script|<style|<link/i, ma = /checked\s*(?:[^=]|=\s*.checked.)/i, na = /^true\/(.*)/, oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function pa(a, b) { return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a } function qa(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a } function ra(a) { var b = na.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function sa(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j) for (c = 0, d = j[e].length; d > c; c++)n.event.add(b, e, j[e][c]) } O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i)) } } function ta(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) } function ua(a, b, c, d) { b = f.apply([], b); var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q); if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) { var f = a.eq(e); r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d) }); if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) { for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++)j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m); if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++)j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, ""))) } return a } function va(a, b, c) { for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d)); return a } n.extend({ htmlPrefilter: function (a) { return a.replace(ka, "<$1></$2>") }, clone: function (a, b, c) { var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a); if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++)ta(f[d], g[d]); if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++)sa(f[d], g[d]); else sa(a, h); return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h }, cleanData: function (a) { for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)if (L(c)) { if (b = c[N.expando]) { if (b.events) for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle); c[N.expando] = void 0 } c[O.expando] && (c[O.expando] = void 0) } } }), n.fn.extend({ domManip: ua, detach: function (a) { return va(this, a, !0) }, remove: function (a) { return va(this, a) }, text: function (a) { return K(this, function (a) { return void 0 === a ? n.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) }, append: function () { return ua(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = pa(this, a); b.appendChild(a) } }) }, prepend: function () { return ua(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = pa(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return ua(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return ua(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function () { for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = ""); return this }, clone: function (a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () { return n.clone(this, a, b) }) }, html: function (a) { return K(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) { a = n.htmlPrefilter(a); try { for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = []; return ua(this, arguments, function (b) { var c = this.parentNode; n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this)) }, a) } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { n.fn[a] = function (a) { for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++)c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get()); return this.pushStack(d) } }); var wa, xa = { HTML: "block", BODY: "block" }; function ya(a, b) { var c = n(b.createElement(a)).appendTo(b.body), d = n.css(c[0], "display"); return c.detach(), d } function za(a) { var b = d, c = xa[a]; return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c } var Aa = /^margin/, Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ca = function (b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) }, Da = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }, Ea = d.documentElement; !function () { var b, c, e, f, g = d.createElement("div"), h = d.createElement("div"); if (h.style) { h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h); function i() { h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g); var d = a.getComputedStyle(h); b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g) } n.extend(l, { pixelPosition: function () { return i(), b }, boxSizingReliable: function () { return null == c && i(), c }, pixelMarginRight: function () { return null == c && i(), e }, reliableMarginLeft: function () { return null == c && i(), f }, reliableMarginRight: function () { var b, c = h.appendChild(d.createElement("div")); return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b } }) } }(); function Fa(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g } function Ga(a, b) { return { get: function () { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } } var Ha = /^(none|table(?!-c[ea]).+)/, Ia = { position: "absolute", visibility: "hidden", display: "block" }, Ja = { letterSpacing: "0", fontWeight: "400" }, Ka = ["Webkit", "O", "Moz", "ms"], La = d.createElement("div").style; function Ma(a) { if (a in La) return a; var b = a[0].toUpperCase() + a.slice(1), c = Ka.length; while (c--) if (a = Ka[c] + b, a in La) return a } function Na(a, b, c) { var d = T.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b } function Oa(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e))); return g } function Pa(a, b, c) { var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ca(a), g = "border-box" === n.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e; d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px" } function Qa(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display")))); for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a } n.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = Fa(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = n.camelCase(b), i = a.style; return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0) } }, css: function (a, b, c, d) { var e, f, g, h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e } }), n.each(["height", "width"], function (a, b) { n.cssHooks[b] = { get: function (a, c, d) { return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () { return Pa(a, b, d) }) : Pa(a, b, d) : void 0 }, set: function (a, c, d) { var e, f = d && Ca(a), g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f); return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g) } } }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) { return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function () { return a.getBoundingClientRect().left })) + "px" : void 0 }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) { return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0 }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) { n.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + U[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Aa.test(a) || (n.cssHooks[a + b].set = Na) }), n.fn.extend({ css: function (a, b) { return K(this, function (a, b, c) { var d, e, f = {}, g = 0; if (n.isArray(b)) { for (d = Ca(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d); return f } return void 0 !== c ? n.style(a, b, c) : n.css(a, b) }, a, b, arguments.length > 1) }, show: function () { return Qa(this, !0) }, hide: function () { return Qa(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { V(this) ? n(this).show() : n(this).hide() }) } }); function Ra(a, b, c, d, e) { return new Ra.prototype.init(a, b, c, d, e) } n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function () { var a = Ra.propHooks[this.prop]; return a && a.get ? a.get(this) : Ra.propHooks._default.get(this) }, run: function (a) { var b, c = Ra.propHooks[this.prop]; return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function (a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function (a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit) } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {}; var Sa, Ta, Ua = /^(?:toggle|show|hide)$/, Va = /queueHooks$/; function Wa() { return a.setTimeout(function () { Sa = void 0 }), Sa = n.now() } function Xa(a, b) { var c, d = 0, e = { height: a }; for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = U[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e } function Ya(a, b, c) { for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a)) return d } function Za(a, b, c) { var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && V(a), q = N.get(a, "fxshow"); c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () { h.unqueued || i() }), h.unqueued++ , l.always(function () { l.always(function () { h.unqueued-- , n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })); for (d in b) if (e = b[d], Ua.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) { if ("show" !== e || !q || void 0 === q[d]) continue; p = !0 } m[d] = q && q[d] || n.style(a, d) } else j = void 0; if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j); else { q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () { n(a).hide() }), l.done(function () { var b; N.remove(a, "fxshow"); for (b in m) n.style(a, b, m[b]) }); for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } } function $a(a, b) { var c, d, e, f, g; for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function _a(a, b, c) { var d, e, f = 0, g = _a.prefilters.length, h = n.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++)j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }), k = j.props; for ($a(k, j.opts.specialEasing); g > f; f++)if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d; return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) } n.Animation = n.extend(_a, { tweeners: { "*": [function (a, b) { var c = this.createTween(a, b); return W(c.elem, a, T.exec(b), c), c }] }, tweener: function (a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G); for (var c, d = 0, e = a.length; e > d; d++)c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b) }, prefilters: [Za], prefilter: function (a, b) { b ? _a.prefilters.unshift(a) : _a.prefilters.push(a) } }), n.speed = function (a, b, c) { var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b }; return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () { var b = _a(this, n.extend({}, a), f); (e || N.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = N.get(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]); for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); !b && c || n.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = N.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0; for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), n.each(["toggle", "show", "hide"], function (a, b) { var c = n.fn[b]; n.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e) } }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { n.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function () { var a, b = 0, c = n.timers; for (Sa = n.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1); c.length || n.fx.stop(), Sa = void 0 }, n.fx.timer = function (a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function () { Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function () { a.clearInterval(Ta), Ta = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) { return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) { var e = a.setTimeout(c, b); d.stop = function () { a.clearTimeout(e) } }) }, function () { var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option")); a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value }(); var ab, bb = n.expr.attrHandle; n.fn.extend({ attr: function (a, b) { return K(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { n.removeAttr(this, a) }) } }), n.extend({ attr: function (a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d)) }, attrHooks: { type: { set: function (a, b) { if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function (a, b) { var c, d, e = 0, f = b && b.match(G); if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c) } }), ab = { set: function (a, b, c) { return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = bb[b] || n.find.attr; bb[b] = function (a, b, d) { var e, f; return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e } }); var cb = /^(?:input|select|textarea|button)$/i, db = /^(?:a|area)$/i; n.fn.extend({ prop: function (a, b) { return K(this, n.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return this.each(function () { delete this[n.propFix[a] || a] }) } }), n.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]),
                void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: { tabIndex: { get: function (a) { var b = n.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" }
    }), l.optSelected || (n.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null }, set: function (a) { var b = a.parentNode; b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { n.propFix[this.toLowerCase()] = this }); var eb = /[\t\r\n\f]/g; function fb(a) { return a.getAttribute && a.getAttribute("class") || "" } n.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h, i = 0; if (n.isFunction(a)) return this.each(function (b) { n(this).addClass(a.call(this, b, fb(this))) }); if ("string" == typeof a && a) { b = a.match(G) || []; while (c = this[i++]) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) { g = 0; while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " "); h = n.trim(d), e !== h && c.setAttribute("class", h) } } return this }, removeClass: function (a) { var b, c, d, e, f, g, h, i = 0; if (n.isFunction(a)) return this.each(function (b) { n(this).removeClass(a.call(this, b, fb(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a) { b = a.match(G) || []; while (c = this[i++]) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) { g = 0; while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " "); h = n.trim(d), e !== h && c.setAttribute("class", h) } } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) { n(this).toggleClass(a.call(this, c, fb(this), b), b) }) : this.each(function () { var b, d, e, f; if ("string" === c) { d = 0, e = n(this), f = a.match(G) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || "")) }) }, hasClass: function (a) { var b, c, d = 0; b = " " + a + " "; while (c = this[d++]) if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0; return !1 } }); var gb = /\r/g, hb = /[\x20\t\r\n\f]+/g; n.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = n.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) { return null == a ? "" : a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c) } } }), n.extend({ valHooks: { option: { get: function (a) { var b = n.find.attr(a, "value"); return null != b ? b : n.trim(n.text(a)).replace(hb, " ") } }, select: { get: function (a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) { if (b = n(c).val(), f) return b; g.push(b) } return g }, set: function (a, b) { var c, d, e = a.options, f = n.makeArray(b), g = e.length; while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), n.each(["radio", "checkbox"], function () { n.valHooks[this] = { set: function (a, b) { return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0 } }, l.checkOn || (n.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var ib = /^(?:focusinfocus|focusoutblur)$/; n.extend(n.event, { trigger: function (b, c, e, f) { var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : []; if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) { if (!f && !o.noBubble && !n.isWindow(e)) { for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode)p.push(h), i = h; i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a) } g = 0; while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault()); return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result } }, simulate: function (a, b, c) { var d = n.extend(new n.Event, c, { type: a, isSimulated: !0 }); n.event.trigger(d, null, b) } }), n.fn.extend({ trigger: function (a, b) { return this.each(function () { n.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; return c ? n.event.trigger(a, b, c, !0) : void 0 } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) { n.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { n.event.simulate(b, a.target, n.event.fix(a)) }; n.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = N.access(d, b); e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = N.access(d, b) - 1; e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b)) } } }); var jb = a.location, kb = n.now(), lb = /\?/; n.parseJSON = function (a) { return JSON.parse(a + "") }, n.parseXML = function (b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c }; var mb = /#.*$/, nb = /([?&])_=[^&]*/, ob = /^(.*?):[ \t]*([^\r\n]*)$/gm, pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, qb = /^(?:GET|HEAD)$/, rb = /^\/\//, sb = {}, tb = {}, ub = "*/".concat("*"), vb = d.createElement("a"); vb.href = jb.href; function wb(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(G) || []; if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function xb(a, b, c, d) { var e = {}, f = a === tb; function g(h) { var i; return e[h] = !0, n.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function yb(a, b) { var c, d, e = n.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && n.extend(!0, a, d), a } function zb(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d) for (e in h) if (h[e] && h[e].test(d)) { i.unshift(e); break } if (i[0] in c) f = i[0]; else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break } g || (g = e) } f = f || g } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 } function Ab(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: jb.href, type: "GET", isLocal: pb.test(jb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a) }, ajaxPrefilter: wb(sb), ajaxTransport: wb(tb), ajax: function (b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c), o = m.context || m, p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event, q = n.Deferred(), r = n.Callbacks("once memory"), s = m.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = { readyState: 0, getResponseHeader: function (a) { var b; if (2 === v) { if (!h) { h = {}; while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2] } b = h[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return 2 === v ? g : null }, setRequestHeader: function (a, b) { var c = a.toLowerCase(); return v || (a = u[c] = u[c] || a, t[a] = b), this }, overrideMimeType: function (a) { return v || (m.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (2 > v) for (b in a) s[b] = [s[b], a[b]]; else x.always(a[x.status]); return this }, abort: function (a) { var b = a || w; return e && e.abort(b), z(0, b), this } }; if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) { j = d.createElement("a"); try { j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host } catch (y) { m.crossDomain = !0 } } if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x; k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]); for (l in m.headers) x.setRequestHeader(l, m.headers[l]); if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort(); w = "abort"; for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]); if (e = xb(tb, m, c, x)) { if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x; m.async && m.timeout > 0 && (i = a.setTimeout(function () { x.abort("timeout") }, m.timeout)); try { v = 1, e.send(t, z) } catch (y) { if (!(2 > v)) throw y; z(-1, y) } } else z(-1, "No Transport"); function z(b, c, d, h) { var j, l, t, u, w, y = c; 2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop"))) } return x }, getJSON: function (a, b, c) { return n.get(a, b, c, "json") }, getScript: function (a, b) { return n.get(a, void 0, b, "script") } }), n.each(["get", "post"], function (a, b) { n[b] = function (a, c, d, e) { return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a)) } }), n._evalUrl = function (a) { return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, n.fn.extend({ wrapAll: function (a) { var b; return n.isFunction(a) ? this.each(function (b) { n(this).wrapAll(a.call(this, b)) }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this) }, wrapInner: function (a) { return n.isFunction(a) ? this.each(function (b) { n(this).wrapInner(a.call(this, b)) }) : this.each(function () { var b = n(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = n.isFunction(a); return this.each(function (c) { n(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function () { return this.parent().each(function () { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() } }), n.expr.filters.hidden = function (a) { return !n.expr.filters.visible(a) }, n.expr.filters.visible = function (a) { return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0 }; var Bb = /%20/g, Cb = /\[\]$/, Db = /\r?\n/g, Eb = /^(?:submit|button|image|reset|file)$/i, Fb = /^(?:input|select|textarea|keygen)/i; function Gb(a, b, c, d) { var e; if (n.isArray(b)) n.each(b, function (b, e) { c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Gb(a + "[" + e + "]", b[e], c, d) } n.param = function (a, b) { var c, d = [], e = function (a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () { e(this.name, this.value) }); else for (c in a) Gb(c, a[c], b, e); return d.join("&").replace(Bb, "+") }, n.fn.extend({ serialize: function () { return n.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = n.prop(this, "elements"); return a ? n.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a)) }).map(function (a, b) { var c = n(this).val(); return null == c ? null : n.isArray(c) ? n.map(c, function (a) { return { name: b.name, value: a.replace(Db, "\r\n") } }) : { name: b.name, value: c.replace(Db, "\r\n") } }).get() } }), n.ajaxSettings.xhr = function () { try { return new a.XMLHttpRequest } catch (b) { } }; var Hb = { 0: 200, 1223: 204 }, Ib = n.ajaxSettings.xhr(); l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function (b) { var c, d; return l.cors || Ib && !b.crossDomain ? { send: function (e, f) { var g, h = b.xhr(); if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g]; b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"); for (g in e) h.setRequestHeader(g, e[g]); c = function (a) { return function () { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () { 4 === h.readyState && a.setTimeout(function () { c && d() }) }, c = c("abort"); try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i } }, abort: function () { c && c() } } : void 0 }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (a) { return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), n.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c; return { send: function (e, f) { b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function () { c && c() } } } }); var Jb = [], Kb = /(=)\?(?=&|$)|\?\?/; n.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = Jb.pop() || n.expando + "_" + kb++; return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), n.parseHTML = function (a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || d; var e = x.exec(a), f = !c && []; return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes)) }; var Lb = n.fn.load; n.fn.load = function (a, b, c) { if ("string" != typeof a && Lb) return Lb.apply(this, arguments); var d, e, f, g = this, h = a.indexOf(" "); return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) { f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).always(c && function (a, b) { g.each(function () { c.apply(this, f || [a.responseText, b, a]) }) }), this }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { n.fn[b] = function (a) { return this.on(b, a) } }), n.expr.filters.animated = function (a) { return n.grep(n.timers, function (b) { return a === b.elem }).length }; function Mb(a) { return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView } n.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, n.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { n.offset.setOffset(this, a, b) }); var b, c, d = this[0], e = { top: 0, left: 0 }, f = d && d.ownerDocument; if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e }, position: function () { if (this[0]) { var a, b, c = this[0], d = { top: 0, left: 0 }; return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent; while (a && "static" === n.css(a, "position")) a = a.offsetParent; return a || Ea }) } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = "pageYOffset" === b; n.fn[a] = function (d) { return K(this, function (a, d, e) { var f = Mb(a); return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) } }), n.each(["top", "left"], function (a, b) { n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) { return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0 }) }), n.each({ Height: "height", Width: "width" }, function (a, b) { n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { n.fn[d] = function (d, e) { var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border"); return K(this, function (b, c, d) { var e; return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), n.fn.extend({ bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) }, size: function () { return this.length } }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () { return n }); var Nb = a.jQuery, Ob = a.$; return n.noConflict = function (b) { return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n }, b || (a.jQuery = a.$ = n), n
});
//! moment.js
//! version : 2.17.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(n,t){typeof exports=="object"&&typeof module!="undefined"?module.exports=t():typeof define=="function"&&define.amd?define(t):n.moment=t()})(this,function(){"use strict";function t(){return ff.apply(null,arguments)}function bs(n){ff=n}function at(n){return n instanceof Array||Object.prototype.toString.call(n)==="[object Array]"}function pi(n){return n!=null&&Object.prototype.toString.call(n)==="[object Object]"}function ks(n){for(var t in n)return!1;return!0}function dt(n){return typeof n=="number"||Object.prototype.toString.call(n)==="[object Number]"}function wi(n){return n instanceof Date||Object.prototype.toString.call(n)==="[object Date]"}function ef(n,t){for(var r=[],i=0;i<n.length;++i)r.push(t(n[i],i));return r}function l(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function vt(n,t){for(var i in t)l(t,i)&&(n[i]=t[i]);return l(t,"toString")&&(n.toString=t.toString),l(t,"valueOf")&&(n.valueOf=t.valueOf),n}function rt(n,t,i,r){return lo(n,t,i,r,!0).utc()}function ds(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function u(n){return n._pf==null&&(n._pf=ds()),n._pf}function wr(n){if(n._isValid==null){var t=u(n),r=sf.call(t.parsedDateParts,function(n){return n!=null}),i=!isNaN(n._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r);if(n._strict&&(i=i&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===undefined),Object.isFrozen!=null&&Object.isFrozen(n))return i;n._isValid=i}return n._isValid}function bi(n){var t=rt(NaN);return n!=null?vt(u(t),n):u(t).userInvalidated=!0,t}function b(n){return n===void 0}function br(n,t){var f,i,r;if(b(t._isAMomentObject)||(n._isAMomentObject=t._isAMomentObject),b(t._i)||(n._i=t._i),b(t._f)||(n._f=t._f),b(t._l)||(n._l=t._l),b(t._strict)||(n._strict=t._strict),b(t._tzm)||(n._tzm=t._tzm),b(t._isUTC)||(n._isUTC=t._isUTC),b(t._offset)||(n._offset=t._offset),b(t._pf)||(n._pf=u(t)),b(t._locale)||(n._locale=t._locale),ki.length>0)for(f in ki)i=ki[f],r=t[i],b(r)||(n[i]=r);return n}function hi(n){br(this,n);this._d=new Date(n._d!=null?n._d.getTime():NaN);this.isValid()||(this._d=new Date(NaN));di===!1&&(di=!0,t.updateOffset(this),di=!1)}function yt(n){return n instanceof hi||n!=null&&n._isAMomentObject!=null}function k(n){return n<0?Math.ceil(n)||0:Math.floor(n)}function f(n){var t=+n,i=0;return t!==0&&isFinite(t)&&(i=k(t)),i}function hf(n,t,i){for(var e=Math.min(n.length,t.length),o=Math.abs(n.length-t.length),u=0,r=0;r<e;r++)(i&&n[r]!==t[r]||!i&&f(n[r])!==f(t[r]))&&u++;return u+o}function cf(n){t.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+n)}function d(n,i){var r=!0;return vt(function(){var e,u,f,o;if(t.deprecationHandler!=null&&t.deprecationHandler(null,n),r){for(e=[],f=0;f<arguments.length;f++){if(u="",typeof arguments[f]=="object"){u+="\n["+f+"] ";for(o in arguments[0])u+=o+": "+arguments[0][o]+", ";u=u.slice(0,-2)}else u=arguments[f];e.push(u)}cf(n+"\nArguments: "+Array.prototype.slice.call(e).join("")+"\n"+(new Error).stack);r=!1}return i.apply(this,arguments)},i)}function lf(n,i){t.deprecationHandler!=null&&t.deprecationHandler(n,i);kr[n]||(cf(i),kr[n]=!0)}function et(n){return n instanceof Function||Object.prototype.toString.call(n)==="[object Function]"}function gs(n){var t;for(var i in n)t=n[i],et(t)?this[i]=t:this["_"+i]=t;this._config=n;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function af(n,t){var r=vt({},n);for(var i in t)l(t,i)&&(pi(n[i])&&pi(t[i])?(r[i]={},vt(r[i],n[i]),vt(r[i],t[i])):t[i]!=null?r[i]=t[i]:delete r[i]);for(i in n)l(n,i)&&!l(t,i)&&pi(n[i])&&(r[i]=vt({},r[i]));return r}function dr(n){n!=null&&this.set(n)}function nh(n,t,i){var r=this._calendar[n]||this._calendar.sameElse;return et(r)?r.call(t,i):r}function th(n){var t=this._longDateFormat[n],i=this._longDateFormat[n.toUpperCase()];return t||!i?t:(this._longDateFormat[n]=i.replace(/MMMM|MM|DD|dddd/g,function(n){return n.slice(1)}),this._longDateFormat[n])}function ih(){return this._invalidDate}function rh(n){return this._ordinal.replace("%d",n)}function uh(n,t,i,r){var u=this._relativeTime[i];return et(u)?u(n,t,i,r):u.replace(/%d/i,n)}function fh(n,t){var i=this._relativeTime[n>0?"future":"past"];return et(i)?i(t):i.replace(/%s/i,t)}function p(n,t){var i=n.toLowerCase();ui[i]=ui[i+"s"]=ui[t]=n}function g(n){return typeof n=="string"?ui[n]||ui[n.toLowerCase()]:undefined}function gr(n){var r={},t;for(var i in n)l(n,i)&&(t=g(i),t&&(r[t]=n[i]));return r}function w(n,t){nu[n]=t}function eh(n){var t=[];for(var i in n)t.push({unit:i,priority:nu[i]});return t.sort(function(n,t){return n.priority-t.priority}),t}function fi(n,i){return function(r){return r!=null?(ne(this,n,r),t.updateOffset(this,i),this):gi(this,n)}}function gi(n,t){return n.isValid()?n._d["get"+(n._isUTC?"UTC":"")+t]():NaN}function ne(n,t,i){n.isValid()&&n._d["set"+(n._isUTC?"UTC":"")+t](i)}function oh(n){return(n=g(n),et(this[n]))?this[n]():this}function sh(n,t){var r,i;if(typeof n=="object")for(n=gr(n),r=eh(n),i=0;i<r.length;i++)this[r[i].unit](n[r[i].unit]);else if(n=g(n),et(this[n]))return this[n](t);return this}function ot(n,t,i){var r=""+Math.abs(n),u=t-r.length,f=n>=0;return(f?i?"+":"":"-")+Math.pow(10,Math.max(0,u)).toString().substr(1)+r}function r(n,t,i,r){var u=r;typeof r=="string"&&(u=function(){return this[r]()});n&&(ei[n]=u);t&&(ei[t[0]]=function(){return ot(u.apply(this,arguments),t[1],t[2])});i&&(ei[i]=function(){return this.localeData().ordinal(u.apply(this,arguments),n)})}function hh(n){return n.match(/\[[\s\S]/)?n.replace(/^\[|\]$/g,""):n.replace(/\\/g,"")}function ch(n){for(var t=n.match(te),i=0,r=t.length;i<r;i++)t[i]=ei[t[i]]?ei[t[i]]:hh(t[i]);return function(i){for(var f="",u=0;u<r;u++)f+=t[u]instanceof Function?t[u].call(i,n):t[u];return f}}function iu(n,t){return n.isValid()?(t=ie(t,n.localeData()),tu[t]=tu[t]||ch(t),tu[t](n)):n.localeData().invalidDate()}function ie(n,t){function r(n){return t.longDateFormat(n)||n}var i=5;for(nr.lastIndex=0;i>=0&&nr.test(n);)n=n.replace(nr,r),nr.lastIndex=0,i-=1;return n}function i(n,t,i){fu[n]=et(t)?t:function(n){return n&&i?i:t}}function ah(n,t){return l(fu,n)?fu[n](t._strict,t._locale):new RegExp(vh(n))}function vh(n){return gt(n.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,t,i,r,u){return t||i||r||u}))}function gt(n){return n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function s(n,t){var i,r=t;for(typeof n=="string"&&(n=[n]),dt(t)&&(r=function(n,i){i[t]=f(n)}),i=0;i<n.length;i++)er[n[i]]=r}function li(n,t){s(n,function(n,i,r,u){r._w=r._w||{};t(n,r._w,r,u)})}function yh(n,t,i){t!=null&&l(er,n)&&er[n](t,i._a,i,n)}function eu(n,t){return new Date(Date.UTC(n,t+1,0)).getUTCDate()}function bh(n,t){return n?at(this._months)?this._months[n.month()]:this._months[(this._months.isFormat||ou).test(t)?"format":"standalone"][n.month()]:this._months}function kh(n,t){return n?at(this._monthsShort)?this._monthsShort[n.month()]:this._monthsShort[ou.test(t)?"format":"standalone"][n.month()]:this._monthsShort}function dh(n,t,i){var u,r,e,f=n.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],u=0;u<12;++u)e=rt([2e3,u]),this._shortMonthsParse[u]=this.monthsShort(e,"").toLocaleLowerCase(),this._longMonthsParse[u]=this.months(e,"").toLocaleLowerCase();return i?t==="MMM"?(r=v.call(this._shortMonthsParse,f),r!==-1?r:null):(r=v.call(this._longMonthsParse,f),r!==-1?r:null):t==="MMM"?(r=v.call(this._shortMonthsParse,f),r!==-1)?r:(r=v.call(this._longMonthsParse,f),r!==-1?r:null):(r=v.call(this._longMonthsParse,f),r!==-1)?r:(r=v.call(this._shortMonthsParse,f),r!==-1?r:null)}function gh(n,t,i){var r,u,f;if(this._monthsParseExact)return dh.call(this,n,t,i);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++)if((u=rt([2e3,r]),i&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(u,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(u,"").replace(".","")+"$","i")),i||this._monthsParse[r]||(f="^"+this.months(u,"")+"|^"+this.monthsShort(u,""),this._monthsParse[r]=new RegExp(f.replace(".",""),"i")),i&&t==="MMMM"&&this._longMonthsParse[r].test(n))||i&&t==="MMM"&&this._shortMonthsParse[r].test(n)||!i&&this._monthsParse[r].test(n))return r}function ce(n,t){var i;if(!n.isValid())return n;if(typeof t=="string")if(/^\d+$/.test(t))t=f(t);else if(t=n.localeData().monthsParse(t),!dt(t))return n;return i=Math.min(n.date(),eu(n.year(),t)),n._d["set"+(n._isUTC?"UTC":"")+"Month"](t,i),n}function le(n){return n!=null?(ce(this,n),t.updateOffset(this,!0),this):gi(this,"Month")}function nc(){return eu(this.year(),this.month())}function tc(n){return this._monthsParseExact?(l(this,"_monthsRegex")||ye.call(this),n?this._monthsShortStrictRegex:this._monthsShortRegex):(l(this,"_monthsShortRegex")||(this._monthsShortRegex=ae),this._monthsShortStrictRegex&&n?this._monthsShortStrictRegex:this._monthsShortRegex)}function ic(n){return this._monthsParseExact?(l(this,"_monthsRegex")||ye.call(this),n?this._monthsStrictRegex:this._monthsRegex):(l(this,"_monthsRegex")||(this._monthsRegex=ve),this._monthsStrictRegex&&n?this._monthsStrictRegex:this._monthsRegex)}function ye(){function f(n,t){return t.length-n.length}for(var i=[],r=[],t=[],u,n=0;n<12;n++)u=rt([2e3,n]),i.push(this.monthsShort(u,"")),r.push(this.months(u,"")),t.push(this.months(u,"")),t.push(this.monthsShort(u,""));for(i.sort(f),r.sort(f),t.sort(f),n=0;n<12;n++)i[n]=gt(i[n]),r[n]=gt(r[n]);for(n=0;n<24;n++)t[n]=gt(t[n]);this._monthsRegex=new RegExp("^("+t.join("|")+")","i");this._monthsShortRegex=this._monthsRegex;this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i");this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function ai(n){return pe(n)?366:365}function pe(n){return n%4==0&&n%100!=0||n%400==0}function rc(){return pe(this.year())}function uc(n,t,i,r,u,f,e){var o=new Date(n,t,i,r,u,f,e);return n<100&&n>=0&&isFinite(o.getFullYear())&&o.setFullYear(n),o}function or(n){var t=new Date(Date.UTC.apply(null,arguments));return n<100&&n>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(n),t}function sr(n,t,i){var r=7+t-i,u=(7+or(n,0,r).getUTCDay()-t)%7;return-u+r-1}function we(n,t,i,r,u){var s=(7+i-r)%7,h=sr(n,r,u),f=1+7*(t-1)+s+h,e,o;return f<=0?(e=n-1,o=ai(e)+f):f>ai(n)?(e=n+1,o=f-ai(n)):(e=n,o=f),{year:e,dayOfYear:o}}function vi(n,t,i){var e=sr(n.year(),t,i),r=Math.floor((n.dayOfYear()-e-1)/7)+1,f,u;return r<1?(u=n.year()-1,f=r+ti(u,t,i)):r>ti(n.year(),t,i)?(f=r-ti(n.year(),t,i),u=n.year()+1):(u=n.year(),f=r),{week:f,year:u}}function ti(n,t,i){var r=sr(n,t,i),u=sr(n+1,t,i);return(ai(n)-r+u)/7}function fc(n){return vi(n,this._week.dow,this._week.doy).week}function ec(){return this._week.dow}function oc(){return this._week.doy}function sc(n){var t=this.localeData().week(this);return n==null?t:this.add((n-t)*7,"d")}function hc(n){var t=vi(this,1,4).week;return n==null?t:this.add((n-t)*7,"d")}function cc(n,t){return typeof n!="string"?n:isNaN(n)?(n=t.weekdaysParse(n),typeof n=="number")?n:null:parseInt(n,10)}function lc(n,t){return typeof n=="string"?t.weekdaysParse(n)%7||7:isNaN(n)?null:n}function ac(n,t){return n?at(this._weekdays)?this._weekdays[n.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][n.day()]:this._weekdays}function vc(n){return n?this._weekdaysShort[n.day()]:this._weekdaysShort}function yc(n){return n?this._weekdaysMin[n.day()]:this._weekdaysMin}function pc(n,t,i){var f,r,e,u=n.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],f=0;f<7;++f)e=rt([2e3,1]).day(f),this._minWeekdaysParse[f]=this.weekdaysMin(e,"").toLocaleLowerCase(),this._shortWeekdaysParse[f]=this.weekdaysShort(e,"").toLocaleLowerCase(),this._weekdaysParse[f]=this.weekdays(e,"").toLocaleLowerCase();return i?t==="dddd"?(r=v.call(this._weekdaysParse,u),r!==-1?r:null):t==="ddd"?(r=v.call(this._shortWeekdaysParse,u),r!==-1?r:null):(r=v.call(this._minWeekdaysParse,u),r!==-1?r:null):t==="dddd"?(r=v.call(this._weekdaysParse,u),r!==-1)?r:(r=v.call(this._shortWeekdaysParse,u),r!==-1)?r:(r=v.call(this._minWeekdaysParse,u),r!==-1?r:null):t==="ddd"?(r=v.call(this._shortWeekdaysParse,u),r!==-1)?r:(r=v.call(this._weekdaysParse,u),r!==-1)?r:(r=v.call(this._minWeekdaysParse,u),r!==-1?r:null):(r=v.call(this._minWeekdaysParse,u),r!==-1)?r:(r=v.call(this._weekdaysParse,u),r!==-1)?r:(r=v.call(this._shortWeekdaysParse,u),r!==-1?r:null)}function wc(n,t,i){var r,u,f;if(this._weekdaysParseExact)return pc.call(this,n,t,i);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++)if((u=rt([2e3,1]).day(r),i&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(u,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(u,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(u,"").replace(".",".?")+"$","i")),this._weekdaysParse[r]||(f="^"+this.weekdays(u,"")+"|^"+this.weekdaysShort(u,"")+"|^"+this.weekdaysMin(u,""),this._weekdaysParse[r]=new RegExp(f.replace(".",""),"i")),i&&t==="dddd"&&this._fullWeekdaysParse[r].test(n))||i&&t==="ddd"&&this._shortWeekdaysParse[r].test(n)||i&&t==="dd"&&this._minWeekdaysParse[r].test(n)||!i&&this._weekdaysParse[r].test(n))return r}function bc(n){if(!this.isValid())return n!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return n!=null?(n=cc(n,this.localeData()),this.add(n-t,"d")):t}function kc(n){if(!this.isValid())return n!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return n==null?t:this.add(n-t,"d")}function dc(n){if(!this.isValid())return n!=null?this:NaN;if(n!=null){var t=lc(n,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}function gc(n){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||hu.call(this),n?this._weekdaysStrictRegex:this._weekdaysRegex):(l(this,"_weekdaysRegex")||(this._weekdaysRegex=no),this._weekdaysStrictRegex&&n?this._weekdaysStrictRegex:this._weekdaysRegex)}function nl(n){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||hu.call(this),n?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(l(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=to),this._weekdaysShortStrictRegex&&n?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function tl(n){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||hu.call(this),n?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(l(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=io),this._weekdaysMinStrictRegex&&n?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function hu(){function u(n,t){return t.length-n.length}for(var e=[],i=[],r=[],t=[],f,o,s,h,n=0;n<7;n++)f=rt([2e3,1]).day(n),o=this.weekdaysMin(f,""),s=this.weekdaysShort(f,""),h=this.weekdays(f,""),e.push(o),i.push(s),r.push(h),t.push(o),t.push(s),t.push(h);for(e.sort(u),i.sort(u),r.sort(u),t.sort(u),n=0;n<7;n++)i[n]=gt(i[n]),r[n]=gt(r[n]),t[n]=gt(t[n]);this._weekdaysRegex=new RegExp("^("+t.join("|")+")","i");this._weekdaysShortRegex=this._weekdaysRegex;this._weekdaysMinRegex=this._weekdaysRegex;this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i");this._weekdaysShortStrictRegex=new RegExp("^("+i.join("|")+")","i");this._weekdaysMinStrictRegex=new RegExp("^("+e.join("|")+")","i")}function cu(){return this.hours()%12||12}function il(){return this.hours()||24}function ro(n,t){r(n,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function uo(n,t){return t._meridiemParse}function rl(n){return(n+"").toLowerCase().charAt(0)==="p"}function ul(n,t,i){return n>11?i?"pm":"PM":i?"am":"AM"}function oo(n){return n?n.toLowerCase().replace("_","-"):n}function el(n){for(var r=0,i,t,f,u;r<n.length;){for(u=oo(n[r]).split("-"),i=u.length,t=oo(n[r+1]),t=t?t.split("-"):null;i>0;){if(f=so(u.slice(0,i).join("-")),f)return f;if(t&&t.length>=i&&hf(u,t,!0)>=i-1)break;i--}r++}return null}function so(n){var t=null;if(!a[n]&&typeof module!="undefined"&&module&&module.exports)try{t=hr._abbr;require("./locale/"+n);oi(t)}catch(i){}return a[n]}function oi(n,t){var i;return n&&(i=b(t)?pt(n):lu(n,t),i&&(hr=i)),hr._abbr}function lu(n,t){if(t!==null){var i=eo;if(t.abbr=n,a[n]!=null)lf("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=a[n]._config;else if(t.parentLocale!=null)if(a[t.parentLocale]!=null)i=a[t.parentLocale]._config;else return yi[t.parentLocale]||(yi[t.parentLocale]=[]),yi[t.parentLocale].push({name:n,config:t}),null;return a[n]=new dr(af(i,t)),yi[n]&&yi[n].forEach(function(n){lu(n.name,n.config)}),oi(n),a[n]}return delete a[n],null}function ol(n,t){if(t!=null){var i,r=eo;a[n]!=null&&(r=a[n]._config);t=af(r,t);i=new dr(t);i.parentLocale=a[n];a[n]=i;oi(n)}else a[n]!=null&&(a[n].parentLocale!=null?a[n]=a[n].parentLocale:a[n]!=null&&delete a[n]);return a[n]}function pt(n){var t;if(n&&n._locale&&n._locale._abbr&&(n=n._locale._abbr),!n)return hr;if(!at(n)){if(t=so(n),t)return t;n=[n]}return el(n)}function sl(){return yf(a)}function au(n){var i,t=n._a;return t&&u(n).overflow===-2&&(i=t[st]<0||t[st]>11?st:t[ut]<1||t[ut]>eu(t[tt],t[st])?ut:t[y]<0||t[y]>24||t[y]===24&&(t[it]!==0||t[ht]!==0||t[ni]!==0)?y:t[it]<0||t[it]>59?it:t[ht]<0||t[ht]>59?ht:t[ni]<0||t[ni]>999?ni:-1,u(n)._overflowDayOfYear&&(i<tt||i>ut)&&(i=ut),u(n)._overflowWeeks&&i===-1&&(i=ph),u(n)._overflowWeekday&&i===-1&&(i=wh),u(n).overflow=i),n}function ho(n){var t,r,o=n._i,i=hl.exec(o)||cl.exec(o),s,e,f,h;if(i){for(u(n).iso=!0,t=0,r=cr.length;t<r;t++)if(cr[t][1].exec(i[1])){e=cr[t][0];s=cr[t][2]!==!1;break}if(e==null){n._isValid=!1;return}if(i[3]){for(t=0,r=vu.length;t<r;t++)if(vu[t][1].exec(i[3])){f=(i[2]||" ")+vu[t][0];break}if(f==null){n._isValid=!1;return}}if(!s&&f!=null){n._isValid=!1;return}if(i[4])if(ll.exec(i[4]))h="Z";else{n._isValid=!1;return}n._f=e+(f||"")+(h||"");pu(n)}else n._isValid=!1}function vl(n){var i=al.exec(n._i);if(i!==null){n._d=new Date(+i[1]);return}ho(n);n._isValid===!1&&(delete n._isValid,t.createFromInputFallback(n))}function si(n,t,i){return n!=null?n:t!=null?t:i}function yl(n){var i=new Date(t.now());return n._useUTC?[i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()]:[i.getFullYear(),i.getMonth(),i.getDate()]}function yu(n){var t,i,r=[],f,e;if(!n._d){for(f=yl(n),n._w&&n._a[ut]==null&&n._a[st]==null&&pl(n),n._dayOfYear&&(e=si(n._a[tt],f[tt]),n._dayOfYear>ai(e)&&(u(n)._overflowDayOfYear=!0),i=or(e,0,n._dayOfYear),n._a[st]=i.getUTCMonth(),n._a[ut]=i.getUTCDate()),t=0;t<3&&n._a[t]==null;++t)n._a[t]=r[t]=f[t];for(;t<7;t++)n._a[t]=r[t]=n._a[t]==null?t===2?1:0:n._a[t];n._a[y]===24&&n._a[it]===0&&n._a[ht]===0&&n._a[ni]===0&&(n._nextDay=!0,n._a[y]=0);n._d=(n._useUTC?or:uc).apply(null,r);n._tzm!=null&&n._d.setUTCMinutes(n._d.getUTCMinutes()-n._tzm);n._nextDay&&(n._a[y]=24)}}function pl(n){var t,o,f,i,r,e,h,s,l;t=n._w;t.GG!=null||t.W!=null||t.E!=null?(r=1,e=4,o=si(t.GG,n._a[tt],vi(c(),1,4).year),f=si(t.W,1),i=si(t.E,1),(i<1||i>7)&&(s=!0)):(r=n._locale._week.dow,e=n._locale._week.doy,l=vi(c(),r,e),o=si(t.gg,n._a[tt],l.year),f=si(t.w,l.week),t.d!=null?(i=t.d,(i<0||i>6)&&(s=!0)):t.e!=null?(i=t.e+r,(t.e<0||t.e>6)&&(s=!0)):i=r);f<1||f>ti(o,r,e)?u(n)._overflowWeeks=!0:s!=null?u(n)._overflowWeekday=!0:(h=we(o,f,i,r,e),n._a[tt]=h.year,n._dayOfYear=h.dayOfYear)}function pu(n){if(n._f===t.ISO_8601){ho(n);return}n._a=[];u(n).empty=!0;for(var i=""+n._i,r,f,s,c=i.length,h=0,o=ie(n._f,n._locale).match(te)||[],e=0;e<o.length;e++)f=o[e],r=(i.match(ah(f,n))||[])[0],r&&(s=i.substr(0,i.indexOf(r)),s.length>0&&u(n).unusedInput.push(s),i=i.slice(i.indexOf(r)+r.length),h+=r.length),ei[f]?(r?u(n).empty=!1:u(n).unusedTokens.push(f),yh(f,r,n)):n._strict&&!r&&u(n).unusedTokens.push(f);u(n).charsLeftOver=c-h;i.length>0&&u(n).unusedInput.push(i);n._a[y]<=12&&u(n).bigHour===!0&&n._a[y]>0&&(u(n).bigHour=undefined);u(n).parsedDateParts=n._a.slice(0);u(n).meridiem=n._meridiem;n._a[y]=wl(n._locale,n._a[y],n._meridiem);yu(n);au(n)}function wl(n,t,i){var r;return i==null?t:n.meridiemHour!=null?n.meridiemHour(t,i):n.isPM!=null?(r=n.isPM(i),r&&t<12&&(t+=12),r||t!==12||(t=0),t):t}function bl(n){var t,e,f,r,i;if(n._f.length===0){u(n).invalidFormat=!0;n._d=new Date(NaN);return}for(r=0;r<n._f.length;r++)(i=0,t=br({},n),n._useUTC!=null&&(t._useUTC=n._useUTC),t._f=n._f[r],pu(t),wr(t))&&(i+=u(t).charsLeftOver,i+=u(t).unusedTokens.length*10,u(t).score=i,(f==null||i<f)&&(f=i,e=t));vt(n,e||t)}function kl(n){if(!n._d){var t=gr(n._i);n._a=ef([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(n){return n&&parseInt(n,10)});yu(n)}}function dl(n){var t=new hi(au(co(n)));return t._nextDay&&(t.add(1,"d"),t._nextDay=undefined),t}function co(n){var t=n._i,i=n._f;return(n._locale=n._locale||pt(n._l),t===null||i===undefined&&t==="")?bi({nullInput:!0}):(typeof t=="string"&&(n._i=t=n._locale.preparse(t)),yt(t))?new hi(au(t)):(wi(t)?n._d=t:at(i)?bl(n):i?pu(n):gl(n),wr(n)||(n._d=null),n)}function gl(n){var i=n._i;i===undefined?n._d=new Date(t.now()):wi(i)?n._d=new Date(i.valueOf()):typeof i=="string"?vl(n):at(i)?(n._a=ef(i.slice(0),function(n){return parseInt(n,10)}),yu(n)):typeof i=="object"?kl(n):dt(i)?n._d=new Date(i):t.createFromInputFallback(n)}function lo(n,t,i,r,u){var f={};return(i===!0||i===!1)&&(r=i,i=undefined),(pi(n)&&ks(n)||at(n)&&n.length===0)&&(n=undefined),f._isAMomentObject=!0,f._useUTC=f._isUTC=u,f._l=i,f._i=n,f._f=t,f._strict=r,dl(f)}function c(n,t,i,r){return lo(n,t,i,r,!1)}function yo(n,t){var r,i;if(t.length===1&&at(t[0])&&(t=t[0]),!t.length)return c();for(r=t[0],i=1;i<t.length;++i)(!t[i].isValid()||t[i][n](r))&&(r=t[i]);return r}function na(){var n=[].slice.call(arguments,0);return yo("isBefore",n)}function ta(){var n=[].slice.call(arguments,0);return yo("isAfter",n)}function lr(n){var t=gr(n),i=t.year||0,r=t.quarter||0,u=t.month||0,f=t.week||0,e=t.day||0,o=t.hour||0,s=t.minute||0,h=t.second||0,c=t.millisecond||0;this._milliseconds=+c+h*1e3+s*6e4+o*36e5;this._days=+e+f*7;this._months=+u+r*3+i*12;this._data={};this._locale=pt();this._bubble()}function wu(n){return n instanceof lr}function bu(n){return n<0?Math.round(-1*n)*-1:Math.round(n)}function wo(n,t){r(n,0,0,function(){var n=this.utcOffset(),i="+";return n<0&&(n=-n,i="-"),i+ot(~~(n/60),2)+t+ot(~~n%60,2)})}function ku(n,t){var i=(t||"").match(n);if(i===null)return null;var e=i[i.length-1]||[],r=(e+"").match(bo)||["-",0,0],u=+(r[1]*60)+f(r[2]);return u===0?0:r[0]==="+"?u:-u}function du(n,i){var r,u;return i._isUTC?(r=i.clone(),u=(yt(n)||wi(n)?n.valueOf():c(n).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+u),t.updateOffset(r,!1),r):c(n).local()}function gu(n){return-Math.round(n._d.getTimezoneOffset()/15)*15}function ia(n,i){var r=this._offset||0,u;if(!this.isValid())return n!=null?this:NaN;if(n!=null){if(typeof n=="string"){if(n=ku(fr,n),n===null)return this}else Math.abs(n)<16&&(n=n*60);return!this._isUTC&&i&&(u=gu(this)),this._offset=n,this._isUTC=!0,u!=null&&this.add(u,"m"),r!==n&&(!i||this._changeInProgress?rs(this,wt(n-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,t.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:gu(this)}function ra(n,t){return n!=null?(typeof n!="string"&&(n=-n),this.utcOffset(n,t),this):-this.utcOffset()}function ua(n){return this.utcOffset(0,n)}function fa(n){return this._isUTC&&(this.utcOffset(0,n),this._isUTC=!1,n&&this.subtract(gu(this),"m")),this}function ea(){if(this._tzm!=null)this.utcOffset(this._tzm);else if(typeof this._i=="string"){var n=ku(lh,this._i);n!=null?this.utcOffset(n):this.utcOffset(0,!0)}return this}function oa(n){return this.isValid()?(n=n?c(n).utcOffset():0,(this.utcOffset()-n)%60==0):!1}function sa(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function ha(){var n,t;return b(this._isDSTShifted)?(n={},br(n,this),n=co(n),n._a?(t=n._isUTC?rt(n._a):c(n._a),this._isDSTShifted=this.isValid()&&hf(n._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted):this._isDSTShifted}function ca(){return this.isValid()?!this._isUTC:!1}function la(){return this.isValid()?this._isUTC:!1}function ko(){return this.isValid()?this._isUTC&&this._offset===0:!1}function wt(n,t){var i=n,r=null,u,e,o;return wu(n)?i={ms:n._milliseconds,d:n._days,M:n._months}:dt(n)?(i={},t?i[t]=n:i.milliseconds=n):(r=go.exec(n))?(u=r[1]==="-"?-1:1,i={y:0,d:f(r[ut])*u,h:f(r[y])*u,m:f(r[it])*u,s:f(r[ht])*u,ms:f(bu(r[ni]*1e3))*u}):(r=ns.exec(n))?(u=r[1]==="-"?-1:1,i={y:ii(r[2],u),M:ii(r[3],u),w:ii(r[4],u),d:ii(r[5],u),h:ii(r[6],u),m:ii(r[7],u),s:ii(r[8],u)}):i==null?i={}:typeof i=="object"&&("from"in i||"to"in i)&&(o=aa(c(i.from),c(i.to)),i={},i.ms=o.milliseconds,i.M=o.months),e=new lr(i),wu(n)&&l(n,"_locale")&&(e._locale=n._locale),e}function ii(n,t){var i=n&&parseFloat(n.replace(",","."));return(isNaN(i)?0:i)*t}function ts(n,t){var i={milliseconds:0,months:0};return i.months=t.month()-n.month()+(t.year()-n.year())*12,n.clone().add(i.months,"M").isAfter(t)&&--i.months,i.milliseconds=+t-+n.clone().add(i.months,"M"),i}function aa(n,t){var i;return(n.isValid()&&t.isValid())?(t=du(t,n),n.isBefore(t)?i=ts(n,t):(i=ts(t,n),i.milliseconds=-i.milliseconds,i.months=-i.months),i):{milliseconds:0,months:0}}function is(n,t){return function(i,r){var u,f;return r===null||isNaN(+r)||(lf(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=i,i=r,r=f),i=typeof i=="string"?+i:i,u=wt(i,r),rs(this,u,n),this}}function rs(n,i,r,u){var o=i._milliseconds,f=bu(i._days),e=bu(i._months);n.isValid()&&(u=u==null?!0:u,o&&n._d.setTime(n._d.valueOf()+o*r),f&&ne(n,"Date",gi(n,"Date")+f*r),e&&ce(n,gi(n,"Month")+e*r),u&&t.updateOffset(n,f||e))}function va(n,t){var i=n.diff(t,"days",!0);return i<-6?"sameElse":i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":"sameElse"}function ya(n,i){var u=n||c(),f=du(u,this).startOf("day"),r=t.calendarFormat(this,f)||"sameElse",e=i&&(et(i[r])?i[r].call(this,u):i[r]);return this.format(e||this.localeData().calendar(r,this,c(u)))}function pa(){return new hi(this)}function wa(n,t){var i=yt(n)?n:c(n);return(this.isValid()&&i.isValid())?(t=g(b(t)?"millisecond":t),t==="millisecond"?this.valueOf()>i.valueOf():i.valueOf()<this.clone().startOf(t).valueOf()):!1}function ba(n,t){var i=yt(n)?n:c(n);return(this.isValid()&&i.isValid())?(t=g(b(t)?"millisecond":t),t==="millisecond"?this.valueOf()<i.valueOf():this.clone().endOf(t).valueOf()<i.valueOf()):!1}function ka(n,t,i,r){return r=r||"()",(r[0]==="("?this.isAfter(n,i):!this.isBefore(n,i))&&(r[1]===")"?this.isBefore(t,i):!this.isAfter(t,i))}function da(n,t){var i=yt(n)?n:c(n),r;return(this.isValid()&&i.isValid())?(t=g(t||"millisecond"),t==="millisecond"?this.valueOf()===i.valueOf():(r=i.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function ga(n,t){return this.isSame(n,t)||this.isAfter(n,t)}function nv(n,t){return this.isSame(n,t)||this.isBefore(n,t)}function tv(n,t,i){var f,e,u,r;return this.isValid()?(f=du(n,this),!f.isValid())?NaN:(e=(f.utcOffset()-this.utcOffset())*6e4,t=g(t),t==="year"||t==="month"||t==="quarter"?(r=iv(this,f),t==="quarter"?r=r/3:t==="year"&&(r=r/12)):(u=this-f,r=t==="second"?u/1e3:t==="minute"?u/6e4:t==="hour"?u/36e5:t==="day"?(u-e)/864e5:t==="week"?(u-e)/6048e5:u),i?r:k(r)):NaN}function iv(n,t){var r=(t.year()-n.year())*12+(t.month()-n.month()),i=n.clone().add(r,"months"),u,f;return t-i<0?(u=n.clone().add(r-1,"months"),f=(t-i)/(i-u)):(u=n.clone().add(r+1,"months"),f=(t-i)/(u-i)),-(r+f)||0}function rv(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function uv(){var n=this.clone().utc();return 0<n.year()&&n.year()<=9999?et(Date.prototype.toISOString)?this.toDate().toISOString():iu(n,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):iu(n,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function fv(){var n,t;if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";n="moment";t="";this.isLocal()||(n=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z");var i="["+n+'("]',r=0<this.year()&&this.year()<=9999?"YYYY":"YYYYYY",u=t+'[")]';return this.format(i+r+"-MM-DD[T]HH:mm:ss.SSS"+u)}function ev(n){n||(n=this.isUtc()?t.defaultFormatUtc:t.defaultFormat);var i=iu(this,n);return this.localeData().postformat(i)}function ov(n,t){return this.isValid()&&(yt(n)&&n.isValid()||c(n).isValid())?wt({to:this,from:n}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function sv(n){return this.from(c(),n)}function hv(n,t){return this.isValid()&&(yt(n)&&n.isValid()||c(n).isValid())?wt({from:this,to:n}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function cv(n){return this.to(c(),n)}function es(n){var t;return n===undefined?this._locale._abbr:(t=pt(n),t!=null&&(this._locale=t),this)}function os(){return this._locale}function lv(n){n=g(n);switch(n){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return n==="week"&&this.weekday(0),n==="isoWeek"&&this.isoWeekday(1),n==="quarter"&&this.month(Math.floor(this.month()/3)*3),this}function av(n){return(n=g(n),n===undefined||n==="millisecond")?this:(n==="date"&&(n="day"),this.startOf(n).add(1,n==="isoWeek"?"week":n).subtract(1,"ms"))}function vv(){return this._d.valueOf()-(this._offset||0)*6e4}function yv(){return Math.floor(this.valueOf()/1e3)}function pv(){return new Date(this.valueOf())}function wv(){var n=this;return[n.year(),n.month(),n.date(),n.hour(),n.minute(),n.second(),n.millisecond()]}function bv(){var n=this;return{years:n.year(),months:n.month(),date:n.date(),hours:n.hours(),minutes:n.minutes(),seconds:n.seconds(),milliseconds:n.milliseconds()}}function kv(){return this.isValid()?this.toISOString():null}function dv(){return wr(this)}function gv(){return vt({},u(this))}function ny(){return u(this).overflow}function ty(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function ar(n,t){r(0,[n,n.length],0,t)}function iy(n){return ss.call(this,n,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function ry(n){return ss.call(this,n,this.isoWeek(),this.isoWeekday(),1,4)}function uy(){return ti(this.year(),1,4)}function fy(){var n=this.localeData()._week;return ti(this.year(),n.dow,n.doy)}function ss(n,t,i,r,u){var f;return n==null?vi(this,r,u).year:(f=ti(n,r,u),t>f&&(t=f),ey.call(this,n,t,i,r,u))}function ey(n,t,i,r,u){var e=we(n,t,i,r,u),f=or(e.year,0,e.dayOfYear);return this.year(f.getUTCFullYear()),this.month(f.getUTCMonth()),this.date(f.getUTCDate()),this}function oy(n){return n==null?Math.ceil((this.month()+1)/3):this.month((n-1)*3+this.month()%3)}function sy(n){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return n==null?t:this.add(n-t,"d")}function hy(n,t){t[ni]=f(("0."+n)*1e3)}function cy(){return this._isUTC?"UTC":""}function ly(){return this._isUTC?"Coordinated Universal Time":""}function ay(n){return c(n*1e3)}function vy(){return c.apply(null,arguments).parseZone()}function as(n){return n}function vr(n,t,i,r){var u=pt(),f=rt().set(r,t);return u[i](f,n)}function vs(n,t,i){if(dt(n)&&(t=n,n=undefined),n=n||"",t!=null)return vr(n,t,i,"month");for(var u=[],r=0;r<12;r++)u[r]=vr(n,r,i,"month");return u}function rf(n,t,i,r){var o,f,u,e;if(typeof n=="boolean"?(dt(t)&&(i=t,t=undefined),t=t||""):(t=n,i=t,n=!1,dt(t)&&(i=t,t=undefined),t=t||""),o=pt(),f=n?o._week.dow:0,i!=null)return vr(t,(i+f)%7,r,"day");for(e=[],u=0;u<7;u++)e[u]=vr(t,(u+f)%7,r,"day");return e}function yy(n,t){return vs(n,t,"months")}function py(n,t){return vs(n,t,"monthsShort")}function wy(n,t,i){return rf(n,t,i,"weekdays")}function by(n,t,i){return rf(n,t,i,"weekdaysShort")}function ky(n,t,i){return rf(n,t,i,"weekdaysMin")}function dy(){var n=this._data;return this._milliseconds=ft(this._milliseconds),this._days=ft(this._days),this._months=ft(this._months),n.milliseconds=ft(n.milliseconds),n.seconds=ft(n.seconds),n.minutes=ft(n.minutes),n.hours=ft(n.hours),n.months=ft(n.months),n.years=ft(n.years),this}function ys(n,t,i,r){var u=wt(t,i);return n._milliseconds+=r*u._milliseconds,n._days+=r*u._days,n._months+=r*u._months,n._bubble()}function gy(n,t){return ys(this,n,t,1)}function np(n,t){return ys(this,n,t,-1)}function ps(n){return n<0?Math.floor(n):Math.ceil(n)}function tp(){var r=this._milliseconds,n=this._days,t=this._months,i=this._data,u,f,e,s,o;return r>=0&&n>=0&&t>=0||r<=0&&n<=0&&t<=0||(r+=ps(uf(t)+n)*864e5,n=0,t=0),i.milliseconds=r%1e3,u=k(r/1e3),i.seconds=u%60,f=k(u/60),i.minutes=f%60,e=k(f/60),i.hours=e%24,n+=k(e/24),o=k(ws(n)),t+=o,n-=ps(uf(o)),s=k(t/12),t%=12,i.days=n,i.months=t,i.years=s,this}function ws(n){return n*4800/146097}function uf(n){return n*146097/4800}function ip(n){var t,r,i=this._milliseconds;if(n=g(n),n==="month"||n==="year")return t=this._days+i/864e5,r=this._months+ws(t),n==="month"?r:r/12;t=this._days+Math.round(uf(this._months));switch(n){case"week":return t/7+i/6048e5;case"day":return t+i/864e5;case"hour":return t*24+i/36e5;case"minute":return t*1440+i/6e4;case"second":return t*86400+i/1e3;case"millisecond":return Math.floor(t*864e5)+i;default:throw new Error("Unknown unit "+n);}}function rp(){return this._milliseconds+this._days*864e5+this._months%12*2592e6+f(this._months/12)*31536e6}function kt(n){return function(){return this.as(n)}}function ap(n){return n=g(n),this[n+"s"]()}function ri(n){return function(){return this._data[n]}}function gp(){return k(this.days()/7)}function nw(n,t,i,r,u){return u.relativeTime(t||1,!!i,n,r)}function tw(n,t,i){var r=wt(n).abs(),h=ct(r.as("s")),f=ct(r.as("m")),e=ct(r.as("h")),o=ct(r.as("d")),s=ct(r.as("M")),c=ct(r.as("y")),u=h<lt.s&&["s",h]||f<=1&&["m"]||f<lt.m&&["mm",f]||e<=1&&["h"]||e<lt.h&&["hh",e]||o<=1&&["d"]||o<lt.d&&["dd",o]||s<=1&&["M"]||s<lt.M&&["MM",s]||c<=1&&["y"]||["yy",c];return u[2]=t,u[3]=+n>0,u[4]=i,nw.apply(null,u)}function iw(n){return n===undefined?ct:typeof n=="function"?(ct=n,!0):!1}function rw(n,t){return lt[n]===undefined?!1:t===undefined?lt[n]:(lt[n]=t,!0)}function uw(n){var t=this.localeData(),i=tw(this,!n,t);return n&&(i=t.pastFuture(+this,i)),t.postformat(i)}function pr(){var t=yr(this._milliseconds)/1e3,a=yr(this._days),i=yr(this._months),n,e,o;n=k(t/60);e=k(n/60);t%=60;n%=60;o=k(i/12);i%=12;var s=o,h=i,c=a,r=e,u=n,f=t,l=this.asSeconds();return l?(l<0?"-":"")+"P"+(s?s+"Y":"")+(h?h+"M":"")+(c?c+"D":"")+(r||u||f?"T":"")+(r?r+"H":"")+(u?u+"M":"")+(f?f+"S":""):"P0D"}var ff,of,sf,ki,di,kr,vf,yf,pf,wf,bf,kf,df,gf,ui,nu,er,v,ou,se,he,ae,ve,su,be,ke,de,ge,no,to,io,fo,ao,vo,po,bo,go,ns,us,fs,nf,tf,hs,cs,bt,ls,n,o,ft,ct,lt,yr,e;of=Array.prototype.some?Array.prototype.some:function(n){for(var i=Object(this),r=i.length>>>0,t=0;t<r;t++)if(t in i&&n.call(this,i[t],t,i))return!0;return!1};sf=of;ki=t.momentProperties=[];di=!1;kr={};t.suppressDeprecationWarnings=!1;t.deprecationHandler=null;vf=Object.keys?Object.keys:function(n){var t,i=[];for(t in n)l(n,t)&&i.push(t);return i};yf=vf;pf={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};wf={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};bf="Invalid date";kf="%d";df=/\d{1,2}/;gf={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};ui={};nu={};var te=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,nr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,tu={},ei={};var re=/\d/,nt=/\d\d/,ue=/\d{3}/,ru=/\d{4}/,tr=/[+-]?\d{6}/,h=/\d\d?/,fe=/\d\d\d\d?/,ee=/\d\d\d\d\d\d?/,ir=/\d{1,3}/,uu=/\d{1,4}/,rr=/[+-]?\d{1,6}/,ur=/[+-]?\d+/,lh=/Z|[+-]\d\d:?\d\d/gi,fr=/Z|[+-]\d\d(?::?\d\d)?/gi,ci=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,fu={};er={};var tt=0,st=1,ut=2,y=3,it=4,ht=5,ni=6,ph=7,wh=8,oe;oe=Array.prototype.indexOf?Array.prototype.indexOf:function(n){for(var t=0;t<this.length;++t)if(this[t]===n)return t;return-1};v=oe;r("M",["MM",2],"Mo",function(){return this.month()+1});r("MMM",0,0,function(n){return this.localeData().monthsShort(this,n)});r("MMMM",0,0,function(n){return this.localeData().months(this,n)});p("month","M");w("month",8);i("M",h);i("MM",h,nt);i("MMM",function(n,t){return t.monthsShortRegex(n)});i("MMMM",function(n,t){return t.monthsRegex(n)});s(["M","MM"],function(n,t){t[st]=f(n)-1});s(["MMM","MMMM"],function(n,t,i,r){var f=i._locale.monthsParse(n,r,i._strict);f!=null?t[st]=f:u(i).invalidMonth=n});ou=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;se="January_February_March_April_May_June_July_August_September_October_November_December".split("_");he="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");ae=ci;ve=ci;r("Y",0,0,function(){var n=this.year();return n<=9999?""+n:"+"+n});r(0,["YY",2],0,function(){return this.year()%100});r(0,["YYYY",4],0,"year");r(0,["YYYYY",5],0,"year");r(0,["YYYYYY",6,!0],0,"year");p("year","y");w("year",1);i("Y",ur);i("YY",h,nt);i("YYYY",uu,ru);i("YYYYY",rr,tr);i("YYYYYY",rr,tr);s(["YYYYY","YYYYYY"],tt);s("YYYY",function(n,i){i[tt]=n.length===2?t.parseTwoDigitYear(n):f(n)});s("YY",function(n,i){i[tt]=t.parseTwoDigitYear(n)});s("Y",function(n,t){t[tt]=parseInt(n,10)});t.parseTwoDigitYear=function(n){return f(n)+(f(n)>68?1900:2e3)};su=fi("FullYear",!0);r("w",["ww",2],"wo","week");r("W",["WW",2],"Wo","isoWeek");p("week","w");p("isoWeek","W");w("week",5);w("isoWeek",5);i("w",h);i("ww",h,nt);i("W",h);i("WW",h,nt);li(["w","ww","W","WW"],function(n,t,i,r){t[r.substr(0,1)]=f(n)});be={dow:0,doy:6};r("d",0,"do","day");r("dd",0,0,function(n){return this.localeData().weekdaysMin(this,n)});r("ddd",0,0,function(n){return this.localeData().weekdaysShort(this,n)});r("dddd",0,0,function(n){return this.localeData().weekdays(this,n)});r("e",0,0,"weekday");r("E",0,0,"isoWeekday");p("day","d");p("weekday","e");p("isoWeekday","E");w("day",11);w("weekday",11);w("isoWeekday",11);i("d",h);i("e",h);i("E",h);i("dd",function(n,t){return t.weekdaysMinRegex(n)});i("ddd",function(n,t){return t.weekdaysShortRegex(n)});i("dddd",function(n,t){return t.weekdaysRegex(n)});li(["dd","ddd","dddd"],function(n,t,i,r){var f=i._locale.weekdaysParse(n,r,i._strict);f!=null?t.d=f:u(i).invalidWeekday=n});li(["d","e","E"],function(n,t,i,r){t[r]=f(n)});ke="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");de="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");ge="Su_Mo_Tu_We_Th_Fr_Sa".split("_");no=ci;to=ci;io=ci;r("H",["HH",2],0,"hour");r("h",["hh",2],0,cu);r("k",["kk",2],0,il);r("hmm",0,0,function(){return""+cu.apply(this)+ot(this.minutes(),2)});r("hmmss",0,0,function(){return""+cu.apply(this)+ot(this.minutes(),2)+ot(this.seconds(),2)});r("Hmm",0,0,function(){return""+this.hours()+ot(this.minutes(),2)});r("Hmmss",0,0,function(){return""+this.hours()+ot(this.minutes(),2)+ot(this.seconds(),2)});ro("a",!0);ro("A",!1);p("hour","h");w("hour",13);i("a",uo);i("A",uo);i("H",h);i("h",h);i("HH",h,nt);i("hh",h,nt);i("hmm",fe);i("hmmss",ee);i("Hmm",fe);i("Hmmss",ee);s(["H","HH"],y);s(["a","A"],function(n,t,i){i._isPm=i._locale.isPM(n);i._meridiem=n});s(["h","hh"],function(n,t,i){t[y]=f(n);u(i).bigHour=!0});s("hmm",function(n,t,i){var r=n.length-2;t[y]=f(n.substr(0,r));t[it]=f(n.substr(r));u(i).bigHour=!0});s("hmmss",function(n,t,i){var r=n.length-4,e=n.length-2;t[y]=f(n.substr(0,r));t[it]=f(n.substr(r,2));t[ht]=f(n.substr(e));u(i).bigHour=!0});s("Hmm",function(n,t){var i=n.length-2;t[y]=f(n.substr(0,i));t[it]=f(n.substr(i))});s("Hmmss",function(n,t){var i=n.length-4,r=n.length-2;t[y]=f(n.substr(0,i));t[it]=f(n.substr(i,2));t[ht]=f(n.substr(r))});fo=/[ap]\.?m?\.?/i;var fl=fi("Hours",!0),eo={calendar:pf,longDateFormat:wf,invalidDate:bf,ordinal:kf,ordinalParse:df,relativeTime:gf,months:se,monthsShort:he,week:be,weekdays:ke,weekdaysMin:ge,weekdaysShort:de,meridiemParse:fo},a={},yi={},hr;var hl=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,cl=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ll=/Z|[+-]\d\d(?::?\d\d)?/,cr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],vu=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],al=/^\/?Date\((\-?\d+)/i;for(t.createFromInputFallback=d("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(n){n._d=new Date(n._i+(n._useUTC?" UTC":""))}),t.ISO_8601=function(){},ao=d("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var n=c.apply(null,arguments);return this.isValid()&&n.isValid()?n<this?this:n:bi()}),vo=d("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var n=c.apply(null,arguments);return this.isValid()&&n.isValid()?n>this?this:n:bi()}),po=function(){return Date.now?Date.now():+new Date},wo("Z",":"),wo("ZZ",""),i("Z",fr),i("ZZ",fr),s(["Z","ZZ"],function(n,t,i){i._useUTC=!0;i._tzm=ku(fr,n)}),bo=/([\+\-]|\d\d)/gi,t.updateOffset=function(){},go=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,ns=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/,wt.fn=lr.prototype,us=is(1,"add"),fs=is(-1,"subtract"),t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",t.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]",nf=d("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(n){return n===undefined?this.localeData():this.locale(n)}),r(0,["gg",2],0,function(){return this.weekYear()%100}),r(0,["GG",2],0,function(){return this.isoWeekYear()%100}),ar("gggg","weekYear"),ar("ggggg","weekYear"),ar("GGGG","isoWeekYear"),ar("GGGGG","isoWeekYear"),p("weekYear","gg"),p("isoWeekYear","GG"),w("weekYear",1),w("isoWeekYear",1),i("G",ur),i("g",ur),i("GG",h,nt),i("gg",h,nt),i("GGGG",uu,ru),i("gggg",uu,ru),i("GGGGG",rr,tr),i("ggggg",rr,tr),li(["gggg","ggggg","GGGG","GGGGG"],function(n,t,i,r){t[r.substr(0,2)]=f(n)}),li(["gg","GG"],function(n,i,r,u){i[u]=t.parseTwoDigitYear(n)}),r("Q",0,"Qo","quarter"),p("quarter","Q"),w("quarter",7),i("Q",re),s("Q",function(n,t){t[st]=(f(n)-1)*3}),r("D",["DD",2],"Do","date"),p("date","D"),w("date",9),i("D",h),i("DD",h,nt),i("Do",function(n,t){return n?t._ordinalParse:t._ordinalParseLenient}),s(["D","DD"],ut),s("Do",function(n,t){t[ut]=f(n.match(h)[0],10)}),tf=fi("Date",!0),r("DDD",["DDDD",3],"DDDo","dayOfYear"),p("dayOfYear","DDD"),w("dayOfYear",4),i("DDD",ir),i("DDDD",ue),s(["DDD","DDDD"],function(n,t,i){i._dayOfYear=f(n)}),r("m",["mm",2],0,"minute"),p("minute","m"),w("minute",14),i("m",h),i("mm",h,nt),s(["m","mm"],it),hs=fi("Minutes",!1),r("s",["ss",2],0,"second"),p("second","s"),w("second",15),i("s",h),i("ss",h,nt),s(["s","ss"],ht),cs=fi("Seconds",!1),r("S",0,0,function(){return~~(this.millisecond()/100)}),r(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),r(0,["SSS",3],0,"millisecond"),r(0,["SSSS",4],0,function(){return this.millisecond()*10}),r(0,["SSSSS",5],0,function(){return this.millisecond()*100}),r(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),r(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),r(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),r(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),p("millisecond","ms"),w("millisecond",16),i("S",ir,re),i("SS",ir,nt),i("SSS",ir,ue),bt="SSSS";bt.length<=9;bt+="S")i(bt,/\d+/);for(bt="S";bt.length<=9;bt+="S")s(bt,hy);ls=fi("Milliseconds",!1);r("z",0,0,"zoneAbbr");r("zz",0,0,"zoneName");n=hi.prototype;n.add=us;n.calendar=ya;n.clone=pa;n.diff=tv;n.endOf=av;n.format=ev;n.from=ov;n.fromNow=sv;n.to=hv;n.toNow=cv;n.get=oh;n.invalidAt=ny;n.isAfter=wa;n.isBefore=ba;n.isBetween=ka;n.isSame=da;n.isSameOrAfter=ga;n.isSameOrBefore=nv;n.isValid=dv;n.lang=nf;n.locale=es;n.localeData=os;n.max=vo;n.min=ao;n.parsingFlags=gv;n.set=sh;n.startOf=lv;n.subtract=fs;n.toArray=wv;n.toObject=bv;n.toDate=pv;n.toISOString=uv;n.inspect=fv;n.toJSON=kv;n.toString=rv;n.unix=yv;n.valueOf=vv;n.creationData=ty;n.year=su;n.isLeapYear=rc;n.weekYear=iy;n.isoWeekYear=ry;n.quarter=n.quarters=oy;n.month=le;n.daysInMonth=nc;n.week=n.weeks=sc;n.isoWeek=n.isoWeeks=hc;n.weeksInYear=fy;n.isoWeeksInYear=uy;n.date=tf;n.day=n.days=bc;n.weekday=kc;n.isoWeekday=dc;n.dayOfYear=sy;n.hour=n.hours=fl;n.minute=n.minutes=hs;n.second=n.seconds=cs;n.millisecond=n.milliseconds=ls;n.utcOffset=ia;n.utc=ua;n.local=fa;n.parseZone=ea;n.hasAlignedHourOffset=oa;n.isDST=sa;n.isLocal=ca;n.isUtcOffset=la;n.isUtc=ko;n.isUTC=ko;n.zoneAbbr=cy;n.zoneName=ly;n.dates=d("dates accessor is deprecated. Use date instead.",tf);n.months=d("months accessor is deprecated. Use month instead",le);n.years=d("years accessor is deprecated. Use year instead",su);n.zone=d("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",ra);n.isDSTShifted=d("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",ha);o=dr.prototype;o.calendar=nh;o.longDateFormat=th;o.invalidDate=ih;o.ordinal=rh;o.preparse=as;o.postformat=as;o.relativeTime=uh;o.pastFuture=fh;o.set=gs;o.months=bh;o.monthsShort=kh;o.monthsParse=gh;o.monthsRegex=ic;o.monthsShortRegex=tc;o.week=fc;o.firstDayOfYear=oc;o.firstDayOfWeek=ec;o.weekdays=ac;o.weekdaysMin=yc;o.weekdaysShort=vc;o.weekdaysParse=wc;o.weekdaysRegex=gc;o.weekdaysShortRegex=nl;o.weekdaysMinRegex=tl;o.isPM=rl;o.meridiem=ul;oi("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(n){var t=n%10,i=f(n%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return n+i}});t.lang=d("moment.lang is deprecated. Use moment.locale instead.",oi);t.langData=d("moment.langData is deprecated. Use moment.localeData instead.",pt);ft=Math.abs;var up=kt("ms"),fp=kt("s"),ep=kt("m"),op=kt("h"),sp=kt("d"),hp=kt("w"),cp=kt("M"),lp=kt("y");var vp=ri("milliseconds"),yp=ri("seconds"),pp=ri("minutes"),wp=ri("hours"),bp=ri("days"),kp=ri("months"),dp=ri("years");return ct=Math.round,lt={s:45,m:45,h:22,d:26,M:11},yr=Math.abs,e=lr.prototype,e.abs=dy,e.add=gy,e.subtract=np,e.as=ip,e.asMilliseconds=up,e.asSeconds=fp,e.asMinutes=ep,e.asHours=op,e.asDays=sp,e.asWeeks=hp,e.asMonths=cp,e.asYears=lp,e.valueOf=rp,e._bubble=tp,e.get=ap,e.milliseconds=vp,e.seconds=yp,e.minutes=pp,e.hours=wp,e.days=bp,e.weeks=gp,e.months=kp,e.years=dp,e.humanize=uw,e.toISOString=pr,e.toString=pr,e.toJSON=pr,e.locale=es,e.localeData=os,e.toIsoString=d("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",pr),e.lang=nf,r("X",0,0,"unix"),r("x",0,0,"valueOf"),i("x",ur),i("X",/[+-]?\d+(\.\d{1,3})?/),s("X",function(n,t,i){i._d=new Date(parseFloat(n,10)*1e3)}),s("x",function(n,t,i){i._d=new Date(f(n))}),t.version="2.17.1",bs(c),t.fn=n,t.min=na,t.max=ta,t.now=po,t.utc=rt,t.unix=ay,t.months=yy,t.isDate=wi,t.locale=oi,t.invalid=bi,t.duration=wt,t.isMoment=yt,t.weekdays=wy,t.parseZone=vy,t.localeData=pt,t.isDuration=wu,t.monthsShort=py,t.weekdaysMin=ky,t.defineLocale=lu,t.updateLocale=ol,t.locales=sl,t.weekdaysShort=by,t.normalizeUnits=g,t.relativeTimeRounding=iw,t.relativeTimeThreshold=rw,t.calendarFormat=va,t.prototype=n,t});
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(){function ph(n,t){return n.set(t[0],t[1]),n}function wh(n,t){return n.add(t),n}function f(n,t,i){switch(i.length){case 0:return n.call(t);case 1:return n.call(t,i[0]);case 2:return n.call(t,i[0],i[1]);case 3:return n.call(t,i[0],i[1],i[2])}return n.apply(t,i)}function bh(n,t,i,r){for(var f=-1,e=n==null?0:n.length,u;++f<e;)u=n[f],t(r,u,i(u),n);return r}function c(n,t){for(var i=-1,r=n==null?0:n.length;++i<r;)if(t(n[i],i,n)===!1)break;return n}function kh(n,t){for(var i=n==null?0:n.length;i--;)if(t(n[i],i,n)===!1)break;return n}function ie(n,t){for(var i=-1,r=n==null?0:n.length;++i<r;)if(!t(n[i],i,n))return!1;return!0}function tt(n,t){for(var i=-1,f=n==null?0:n.length,e=0,u=[],r;++i<f;)r=n[i],t(r,i,n)&&(u[e++]=r);return u}function ki(n,t){var i=n==null?0:n.length;return!!i&&vt(n,t,0)>-1}function dr(n,t,i){for(var r=-1,u=n==null?0:n.length;++r<u;)if(i(t,n[r]))return!0;return!1}function r(n,t){for(var i=-1,r=n==null?0:n.length,u=Array(r);++i<r;)u[i]=t(n[i],i,n);return u}function it(n,t){for(var i=-1,r=t.length,u=n.length;++i<r;)n[u+i]=t[i];return n}function ui(n,t,i,r){var u=-1,f=n==null?0:n.length;for(r&&f&&(i=n[++u]);++u<f;)i=t(i,n[u],u,n);return i}function dh(n,t,i,r){var u=n==null?0:n.length;for(r&&u&&(i=n[--u]);u--;)i=t(i,n[u],u,n);return i}function gr(n,t){for(var i=-1,r=n==null?0:n.length;++i<r;)if(t(n[i],i,n))return!0;return!1}function gh(n){return n.split("")}function nc(n){return n.match(ss)||[]}function ue(n,t,i){var r;return i(n,function(n,i,u){if(t(n,i,u))return r=i,!1}),r}function di(n,t,i,r){for(var f=n.length,u=i+(r?1:-1);r?u--:++u<f;)if(t(n[u],u,n))return u;return-1}function vt(n,t,i){return t===t?cc(n,t,i):di(n,fe,i)}function tc(n,t,i,r){for(var u=i-1,f=n.length;++u<f;)if(r(n[u],t))return u;return-1}function fe(n){return n!==n}function ee(n,t){var i=n==null?0:n.length;return i?iu(n,t)/i:hi}function nu(t){return function(i){return i==null?n:i[t]}}function tu(t){return function(i){return t==null?n:t[i]}}function oe(n,t,i,r,u){return u(n,function(n,u,f){i=r?(r=!1,n):t(i,n,u,f)}),i}function ic(n,t){var i=n.length;for(n.sort(t);i--;)n[i]=n[i].value;return n}function iu(t,i){for(var r,f=-1,e=t.length,u;++f<e;)u=i(t[f]),u!==n&&(r=r===n?u:r+u);return r}function ru(n,t){for(var i=-1,r=Array(n);++i<n;)r[i]=t(i);return r}function rc(n,t){return r(t,function(t){return[t,n[t]]})}function e(n){return function(t){return n(t)}}function uu(n,t){return r(t,function(t){return n[t]})}function fi(n,t){return n.has(t)}function se(n,t){for(var i=-1,r=n.length;++i<r&&vt(t,n[i],0)>-1;);return i}function he(n,t){for(var i=n.length;i--&&vt(t,n[i],0)>-1;);return i}function uc(n,t){for(var i=n.length,r=0;i--;)n[i]===t&&++r;return r}function fc(n){return"\\"+lh[n]}function ec(t,i){return t==null?n:t[i]}function yt(n){return oh.test(n)}function oc(n){return sh.test(n)}function sc(n){for(var t,i=[];!(t=n.next()).done;)i.push(t.value);return i}function ei(n){var i=-1,t=Array(n.size);return n.forEach(function(n,r){t[++i]=[r,n]}),t}function ae(n,t){return function(i){return n(t(i))}}function rt(n,t){for(var i=-1,f=n.length,e=0,u=[],r;++i<f;)r=n[i],(r===t||r===oi)&&(n[i]=oi,u[e++]=i);return u}function pt(n){var i=-1,t=Array(n.size);return n.forEach(function(n){t[++i]=n}),t}function hc(n){var i=-1,t=Array(n.size);return n.forEach(function(n){t[++i]=[n,n]}),t}function cc(n,t,i){for(var r=i-1,u=n.length;++r<u;)if(n[r]===t)return r;return-1}function lc(n,t,i){for(var r=i+1;r--;)if(n[r]===t)return r;return r}function wt(n){return yt(n)?ac(n):re(n)}function v(n){return yt(n)?vc(n):gh(n)}function ac(n){for(var t=wr.lastIndex=0;wr.test(n);)++t;return t}function vc(n){return n.match(wr)||[]}function yc(n){return n.match(eh)||[]}var n,ye="4.17.4",gi=200,pe="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",o="Expected a function",nr="__lodash_hash_undefined__",we=500,oi="__lodash_placeholder__",y=1,eu=2,et=4,ot=1,si=2,s=1,ut=2,ou=4,p=8,st=16,w=32,ht=64,k=128,bt=256,tr=512,be=30,ke="...",de=800,ge=16,su=1,no=2,to=3,ft=1/0,nt=9007199254740991,io=17976931348623157e292,hi=NaN,b=4294967295,ro=b-1,uo=b>>>1,fo=[["ary",k],["bind",s],["bindKey",ut],["curry",p],["curryRight",st],["flip",tr],["partial",w],["partialRight",ht],["rearg",bt]],ct="[object Arguments]",ci="[object Array]",eo="[object AsyncFunction]",kt="[object Boolean]",dt="[object Date]",oo="[object DOMException]",li="[object Error]",ai="[object Function]",hu="[object GeneratorFunction]",l="[object Map]",gt="[object Number]",so="[object Null]",d="[object Object]",cu="[object Promise]",ho="[object Proxy]",ni="[object RegExp]",a="[object Set]",ti="[object String]",vi="[object Symbol]",co="[object Undefined]",ii="[object WeakMap]",lo="[object WeakSet]",ri="[object ArrayBuffer]",lt="[object DataView]",ir="[object Float32Array]",rr="[object Float64Array]",ur="[object Int8Array]",fr="[object Int16Array]",er="[object Int32Array]",or="[object Uint8Array]",sr="[object Uint8ClampedArray]",hr="[object Uint16Array]",cr="[object Uint32Array]",ao=/\b__p \+= '';/g,vo=/\b(__p \+=) '' \+/g,yo=/(__e\(.*?\)|\b__t\)) \+\n'';/g,lu=/&(?:amp|lt|gt|quot|#39);/g,au=/[&<>"']/g,po=RegExp(lu.source),wo=RegExp(au.source),bo=/<%-([\s\S]+?)%>/g,ko=/<%([\s\S]+?)%>/g,vu=/<%=([\s\S]+?)%>/g,go=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ns=/^\w*$/,ts=/^\./,is=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lr=/[\\^$.*+?()[\]{}|]/g,rs=RegExp(lr.source),yu=/^\s+|\s+$/g,pu=/^\s+/,us=/\s+$/,fs=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,es=/\{\n\/\* \[wrapped with (.+)\] \*/,os=/,? & /,ss=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hs=/\\(\\)?/g,cs=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,wu=/\w*$/,ls=/^[-+]0x[0-9a-f]+$/i,as=/^0b[01]+$/i,vs=/^\[object .+?Constructor\]$/,ys=/^0o[0-7]+$/i,ps=/^(?:0|[1-9]\d*)$/,ws=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,yi=/($^)/,bs=/['\n\r\u2028\u2029\\]/g,pi="\\ud800-\\udfff",bu="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",ku="\\u2700-\\u27bf",du="a-z\\xdf-\\xf6\\xf8-\\xff",gu="A-Z\\xc0-\\xd6\\xd8-\\xde",nf="\\ufe0e\\ufe0f",tf="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ar="['’]",ks="["+pi+"]",rf="["+tf+"]",wi="["+bu+"]",uf="\\d+",ds="["+ku+"]",ff="["+du+"]",ef="[^"+pi+tf+uf+ku+du+gu+"]",vr="\\ud83c[\\udffb-\\udfff]",gs="(?:"+wi+"|"+vr+")",of="[^"+pi+"]",yr="(?:\\ud83c[\\udde6-\\uddff]){2}",pr="[\\ud800-\\udbff][\\udc00-\\udfff]",at="["+gu+"]",sf="\\u200d",hf="(?:"+ff+"|"+ef+")",nh="(?:"+at+"|"+ef+")",cf="(?:"+ar+"(?:d|ll|m|re|s|t|ve))?",lf="(?:"+ar+"(?:D|LL|M|RE|S|T|VE))?",af=gs+"?",vf="["+nf+"]?",th="(?:"+sf+"(?:"+[of,yr,pr].join("|")+")"+vf+af+")*",yf=vf+af+th,ih="(?:"+[ds,yr,pr].join("|")+")"+yf,rh="(?:"+[of+wi+"?",wi,yr,pr,ks].join("|")+")",uh=RegExp(ar,"g"),fh=RegExp(wi,"g"),wr=RegExp(vr+"(?="+vr+")|"+rh+yf,"g"),eh=RegExp([at+"?"+ff+"+"+cf+"(?="+[rf,at,"$"].join("|")+")",nh+"+"+lf+"(?="+[rf,at+hf,"$"].join("|")+")",at+"?"+hf+"+"+cf,at+"+"+lf,"\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)","\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",uf,ih].join("|"),"g"),oh=RegExp("["+sf+pi+bu+nf+"]"),sh=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,hh=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ch=-1,i={},t,re,ce,le,ve,fu,g;i[ir]=i[rr]=i[ur]=i[fr]=i[er]=i[or]=i[sr]=i[hr]=i[cr]=!0;i[ct]=i[ci]=i[ri]=i[kt]=i[lt]=i[dt]=i[li]=i[ai]=i[l]=i[gt]=i[d]=i[ni]=i[a]=i[ti]=i[ii]=!1;t={};t[ct]=t[ci]=t[ri]=t[lt]=t[kt]=t[dt]=t[ir]=t[rr]=t[ur]=t[fr]=t[er]=t[l]=t[gt]=t[d]=t[ni]=t[a]=t[ti]=t[vi]=t[or]=t[sr]=t[hr]=t[cr]=!0;t[li]=t[ai]=t[ii]=!1;var lh={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ah=parseFloat,vh=parseInt,pf=typeof global=="object"&&global&&global.Object===Object&&global,yh=typeof self=="object"&&self&&self.Object===Object&&self,u=pf||yh||Function("return this")(),br=typeof exports=="object"&&exports&&!exports.nodeType&&exports,bi=br&&typeof module=="object"&&module&&!module.nodeType&&module,wf=bi&&bi.exports===br,kr=wf&&pf.process,h=function(){try{return kr&&kr.binding&&kr.binding("util")}catch(n){}}(),bf=h&&h.isArrayBuffer,kf=h&&h.isDate,df=h&&h.isMap,gf=h&&h.isRegExp,ne=h&&h.isSet,te=h&&h.isTypedArray;re=nu("length");ce=tu({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});le=tu({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});ve=tu({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});fu=function fu(h){function at(n){if(kr(n)&&!wi(n)&&!(n instanceof vr)){if(n instanceof af)return n;if(pr.call(n,"__wrapped__"))return pd(n)}return new af(n)}function tv(){}function af(t,i){this.__wrapped__=t;this.__actions__=[];this.__chain__=!!i;this.__index__=0;this.__values__=n}function vr(n){this.__wrapped__=n;this.__actions__=[];this.__dir__=1;this.__filtered__=!1;this.__iteratees__=[];this.__takeCount__=b;this.__views__=[]}function yit(){var n=new vr(this.__wrapped__);return n.__actions__=uf(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=uf(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=uf(this.__views__),n}function pit(){if(this.__filtered__){var n=new vr(this);n.__dir__=-1;n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function wit(){var n=this.__wrapped__.value(),f=this.__dir__,e=wi(n),o=f<0,s=e?n.length:0,h=kft(0,s,this.__views__),c=h.start,l=h.end,t=l-c,a=o?l:c-1,v=this.__iteratees__,d=v.length,y=0,p=nf(t,this.__takeCount__),r,u,i;if(!e||!o&&s==t&&p==t)return uk(n,this.__actions__);r=[];n:while(t--&&y<p){for(a+=f,u=-1,i=n[a];++u<d;){var w=v[u],g=w.iteratee,b=w.type,k=g(i);if(b==no)i=k;else if(!k)if(b==su)continue n;else break n}r[y++]=i}return r}function dc(n){var i=-1,r=n==null?0:n.length,t;for(this.clear();++i<r;)t=n[i],this.set(t[0],t[1])}function bit(){this.__data__=wl?wl(null):{};this.size=0}function kit(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function dit(t){var i=this.__data__,r;return wl?(r=i[t],r===nr?n:r):pr.call(i,t)?i[t]:n}function git(t){var i=this.__data__;return wl?i[t]!==n:pr.call(i,t)}function nrt(t,i){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=wl&&i===n?nr:i,this}function th(n){var i=-1,r=n==null?0:n.length,t;for(this.clear();++i<r;)t=n[i],this.set(t[0],t[1])}function trt(){this.__data__=[];this.size=0}function irt(n){var t=this.__data__,i=iv(t,n),r;return i<0?!1:(r=t.length-1,i==r?t.pop():wa.call(t,i,1),--this.size,!0)}function rrt(t){var i=this.__data__,r=iv(i,t);return r<0?n:i[r][1]}function urt(n){return iv(this.__data__,n)>-1}function frt(n,t){var i=this.__data__,r=iv(i,n);return r<0?(++this.size,i.push([n,t])):i[r][1]=t,this}function ih(n){var i=-1,r=n==null?0:n.length,t;for(this.clear();++i<r;)t=n[i],this.set(t[0],t[1])}function ert(){this.size=0;this.__data__={hash:new dc,map:new(yl||th),string:new dc}}function ort(n){var t=wv(this,n)["delete"](n);return this.size-=t?1:0,t}function srt(n){return wv(this,n).get(n)}function hrt(n){return wv(this,n).has(n)}function crt(n,t){var i=wv(this,n),r=i.size;return i.set(n,t),this.size+=i.size==r?0:1,this}function gc(n){var t=-1,i=n==null?0:n.length;for(this.__data__=new ih;++t<i;)this.add(n[t])}function lrt(n){return this.__data__.set(n,nr),this}function art(n){return this.__data__.has(n)}function re(n){var t=this.__data__=new th(n);this.size=t.size}function vrt(){this.__data__=new th;this.size=0}function yrt(n){var t=this.__data__,i=t["delete"](n);return this.size=t.size,i}function prt(n){return this.__data__.get(n)}function wrt(n){return this.__data__.has(n)}function brt(n,t){var i=this.__data__,r;if(i instanceof th){if(r=i.__data__,!yl||r.length<gi-1)return r.push([n,t]),this.size=++i.size,this;i=this.__data__=new ih(r)}return i.set(n,t),this.size=i.size,this}function ub(n,t){var r=wi(n),u=!r&&rl(n),f=!r&&!u&&yh(n),o=!r&&!u&&!f&&ul(n),s=r||u||f||o,e=s?ru(n.length,ytt):[],h=e.length;for(var i in n)!(t||pr.call(n,i))||s&&(i=="length"||f&&(i=="offset"||i=="parent")||o&&(i=="buffer"||i=="byteLength"||i=="byteOffset")||lh(i,h))||e.push(i);return e}function fb(t){var i=t.length;return i?t[np(0,i-1)]:n}function krt(n,t){return bv(uf(n),nl(t,0,n.length))}function drt(n){return bv(uf(n))}function cy(t,i,r){(r===n||nh(t[i],r))&&(r!==n||i in t)||rh(t,i,r)}function dl(t,i,r){var u=t[i];pr.call(t,i)&&nh(u,r)&&(r!==n||i in t)||rh(t,i,r)}function iv(n,t){for(var i=n.length;i--;)if(nh(n[i][0],t))return i;return-1}function grt(n,t,i,r){return eh(n,function(n,u,f){t(r,n,i(n),f)}),r}function eb(n,t){return n&&ds(t,du(t),n)}function nut(n,t){return n&&ds(t,cf(t),n)}function rh(n,t,i){t=="__proto__"&&ba?ba(n,t,{configurable:!0,enumerable:!0,value:i,writable:!0}):n[t]=i}function ly(t,i){for(var r=-1,u=i.length,f=bu(u),e=t==null;++r<u;)f[r]=e?n:uw(t,i[r]);return f}function nl(t,i,r){return t===t&&(r!==n&&(t=t<=r?t:r),i!==n&&(t=t>=i?t:i)),t}function ss(i,r,u,f,e,o){var s,l=r&y,a=r&eu,g=r&et,v,h,p,w,k,b;if(u&&(s=e?u(i,f,e,o):u(i)),s!==n)return s;if(!br(i))return i;if(v=wi(i),v){if(s=gft(i),!l)return uf(i,s)}else{if(h=tf(i),p=h==ai||h==hu,yh(i))return sk(i,l);if(h==d||h==ct||p&&!e){if(s=a||p?{}:ed(i),!l)return a?cft(i,nut(s,i)):hft(i,eb(s,i))}else{if(!t[h])return e?i:{};s=net(i,h,ss,l)}}return(o||(o=new re),w=o.get(i),w)?w:(o.set(i,s),k=g?a?vp:ap:a?cf:du,b=v?n:k(i),c(b||i,function(n,t){b&&(t=n,n=i[t]);dl(s,t,ss(n,r,u,t,i,o))}),s)}function tut(n){var t=du(n);return function(i){return ob(i,n,t)}}function ob(t,i,r){var u=r.length;if(t==null)return!u;for(t=wr(t);u--;){var f=r[u],o=i[f],e=t[f];if(e===n&&!(f in t)||!o(e))return!1}return!0}function sb(t,i,r){if(typeof t!="function")throw new lf(o);return fa(function(){t.apply(n,r)},i)}function gl(n,t,i,u){var a=-1,h=ki,c=!0,v=n.length,s=[],y=t.length,f,o,l;if(!v)return s;i&&(t=r(t,e(i)));u?(h=dr,c=!1):t.length>=gi&&(h=fi,c=!1,t=new gc(t));n:while(++a<v)if(f=n[a],o=i==null?f:i(f),f=u||f!==0?f:0,c&&o===o){for(l=y;l--;)if(t[l]===o)continue n;s.push(f)}else h(t,o,u)||s.push(f);return s}function iut(n,t){var i=!0;return eh(n,function(n,r,u){return i=!!t(n,r,u)}),i}function rv(t,i,r){for(var o=-1,h=t.length,f,u,e,s;++o<h;)f=t[o],u=i(f),u!=null&&(e===n?u===u&&!hf(u):r(u,e))&&(e=u,s=f);return s}function rut(t,i,r,u){var f=t.length;for(r=bi(r),r<0&&(r=-r>f?0:f+r),u=u===n||u>f?f:bi(u),u<0&&(u+=f),u=r>u?0:an(u);r<u;)t[r++]=i;return t}function hb(n,t){var i=[];return eh(n,function(n,r,u){t(n,r,u)&&i.push(n)}),i}function gu(n,t,i,r,u){var e=-1,o=n.length,f;for(i||(i=iet),u||(u=[]);++e<o;)f=n[e],t>0&&i(f)?t>1?gu(f,t-1,i,r,u):it(u,f):r||(u[u.length]=f);return u}function ks(n,t){return n&&uv(n,t,du)}function yy(n,t){return n&&vy(n,t,du)}function fv(n,t){return tt(t,function(t){return gh(n[t])})}function ol(t,i){i=pc(i,t);for(var r=0,u=i.length;t!=null&&r<u;)t=t[gs(i[r++])];return r&&r==u?t:n}function cb(n,t,i){var r=t(n);return wi(n)?r:it(r,i(n))}function rf(t){return t==null?t===n?co:so:bc&&bc in wr(t)?bft(t):set(t)}function py(n,t){return n>t}function uut(n,t){return n!=null&&pr.call(n,t)}function fut(n,t){return n!=null&&t in wr(n)}function eut(n,t,i){return n>=nf(t,i)&&n<ku(t,i)}function wy(t,i,u){for(var b=u?dr:ki,k=t[0].length,a=t.length,f=a,v=bu(a),y=Infinity,l=[],o,p,c,s,h,w;f--;)o=t[f],f&&i&&(o=r(o,e(i))),y=nf(o.length,y),v[f]=!u&&(i||k>=120&&o.length>=120)?new gc(f&&o):n;o=t[0];p=-1;c=v[0];n:while(++p<k&&l.length<y)if(s=o[p],h=i?i(s):s,s=u||s!==0?s:0,!(c?fi(c,h):b(l,h,u))){for(f=a;--f;)if(w=v[f],!(w?fi(w,h):b(t[f],h,u)))continue n;c&&c.push(h);l.push(s)}return l}function out(n,t,i,r){return ks(n,function(n,u,f){t(r,i(n),u,f)}),r}function na(t,i,r){i=pc(i,t);t=ld(t,i);var u=t==null?t:t[gs(yf(i))];return u==null?n:f(u,t,r)}function lb(n){return kr(n)&&rf(n)==ct}function sut(n){return kr(n)&&rf(n)==ri}function hut(n){return kr(n)&&rf(n)==dt}function ta(n,t,i,r,u){return n===t?!0:n==null||t==null||!kr(n)&&!kr(t)?n!==n&&t!==t:cut(n,t,i,r,ta,u)}function cut(n,t,i,r,u,f){var s=wi(n),p=wi(t),e=s?ci:tf(n),o=p?ci:tf(t),l,a,v,y;e=e==ct?d:e;o=o==ct?d:o;var h=e==d,w=o==d,c=e==o;if(c&&yh(n)){if(!yh(t))return!1;s=!0;h=!1}return c&&!h?(f||(f=new re),s||ul(n)?rd(n,t,i,r,u,f):pft(n,t,e,i,r,u,f)):!(i&ot)&&(l=h&&pr.call(n,"__wrapped__"),a=w&&pr.call(t,"__wrapped__"),l||a)?(v=l?n.value():n,y=a?t.value():t,f||(f=new re),u(v,y,i,r,f)):c?(f||(f=new re),wft(n,t,i,r,u,f)):!1}function lut(n){return kr(n)&&tf(n)==l}function by(t,i,r,u){var e=r.length,l=e,a=!u,f,h,c;if(t==null)return!l;for(t=wr(t);e--;)if(f=r[e],a&&f[2]?f[1]!==t[f[0]]:!(f[0]in t))return!1;while(++e<l){f=r[e];var o=f[0],s=t[o],v=f[1];if(a&&f[2]){if(s===n&&!(o in t))return!1}else if(h=new re,u&&(c=u(s,v,o,t,i,h)),!(c===n?ta(v,s,ot|si,u,h):c))return!1}return!0}function ab(n){if(!br(n)||uet(n))return!1;var t=gh(n)?dtt:vs;return t.test(il(n))}function aut(n){return kr(n)&&rf(n)==ni}function vut(n){return kr(n)&&tf(n)==a}function yut(n){return kr(n)&&iy(n.length)&&!!i[rf(n)]}function vb(n){return typeof n=="function"?n:n==null?of:typeof n=="object"?wi(n)?wb(n[0],n[1]):pb(n):ltt(n)}function ky(n){var i,t;if(!ua(n))return fit(n);i=[];for(t in wr(n))pr.call(n,t)&&t!="constructor"&&i.push(t);return i}function put(n){var r,i,t;if(!br(n))return oet(n);r=ua(n);i=[];for(t in n)t=="constructor"&&(r||!pr.call(n,t))||i.push(t);return i}function dy(n,t){return n<t}function yb(n,t){var r=-1,i=ef(n)?bu(n.length):[];return eh(n,function(n,u,f){i[++r]=t(n,u,f)}),i}function pb(n){var t=yp(n);return t.length==1&&t[0][2]?hd(t[0][0],t[0][1]):function(i){return i===n||by(i,n,t)}}function wb(t,i){return wp(t)&&sd(i)?hd(gs(t),i):function(r){var u=uw(r,t);return u===n&&u===i?fw(r,t):ta(i,u,ot|si)}}function ev(t,i,r,u,f){t!==i&&uv(i,function(e,o){if(br(e))f||(f=new re),wut(t,i,o,r,ev,u,f);else{var s=u?u(t[o],e,o+"",t,i,f):n;s===n&&(s=e);cy(t,o,s)}},cf)}function wut(t,i,r,u,f,e,o){var c=t[r],s=i[r],y=o.get(s),h,l;if(y){cy(t,r,y);return}if(h=e?e(c,s,r+"",t,i,o):n,l=h===n,l){var a=wi(s),v=!a&&yh(s),p=!a&&!v&&ul(s);h=s;a||v||p?wi(c)?h=c:tu(c)?h=uf(c):v?(l=!1,h=sk(s,!0)):p?(l=!1,h=hk(s,!0)):h=[]:oa(s)||rl(s)?(h=c,rl(c)?h=vn(c):(!br(c)||u&&gh(c))&&(h=ed(s))):l=!1}l&&(o.set(s,h),f(h,s,u,e,o),o["delete"](s));cy(t,r,h)}function bb(t,i){var r=t.length;if(r)return i+=i<0?r:0,lh(i,r)?t[i]:n}function kb(n,t,i){var f=-1,u;return t=r(t.length?t:[of],e(pi())),u=yb(n,function(n){var i=r(t,function(t){return t(n)});return{criteria:i,index:++f,value:n}}),ic(u,function(n,t){return sft(n,t,i)})}function but(n,t){return db(n,t,function(t,i){return fw(n,i)})}function db(n,t,i){for(var f=-1,o=t.length,e={},r,u;++f<o;)r=t[f],u=ol(n,r),i(u,r)&&ia(e,pc(r,n),u);return e}function kut(n){return function(t){return ol(t,n)}}function gy(n,t,i,u){var c=u?tc:vt,s=-1,l=t.length,f=n;for(n===t&&(t=uf(t)),i&&(f=r(n,e(i)));++s<l;)for(var o=0,h=t[s],a=i?i(h):h;(o=c(f,a,o,u))>-1;)f!==n&&wa.call(f,o,1),wa.call(n,o,1);return n}function gb(n,t){for(var r=n?t.length:0,f=r-1,i,u;r--;)i=t[r],(r==f||i!==u)&&(u=i,lh(i)?wa.call(n,i,1):up(n,i));return n}function np(n,t){return n+da(ib()*(t-n+1))}function dut(n,t,i,r){for(var e=-1,u=ku(ka((t-n)/(i||1)),0),f=bu(u);u--;)f[r?u:++e]=n,n+=i;return f}function tp(n,t){var i="";if(!n||t<1||t>nt)return i;do t%2&&(i+=n),t=da(t/2),t&&(n+=n);while(t);return i}function ar(n,t){return kp(cd(n,t,of),n+"")}function gut(n){return fb(ll(n))}function nft(n,t){var i=ll(n);return bv(i,nl(t,0,i.length))}function ia(t,i,r,u){var e,o,h;if(!br(t))return t;i=pc(i,t);for(var s=-1,c=i.length,l=c-1,f=t;f!=null&&++s<c;)e=gs(i[s]),o=r,s!=l&&(h=f[e],o=u?u(h,e,f):n,o===n&&(o=br(h)?h:lh(i[s+1])?[]:{})),dl(f,e,o),f=f[e];return t}function tft(n){return bv(ll(n))}function vf(n,t,i){var u=-1,r=n.length,f;for(t<0&&(t=-t>r?0:r+t),i=i>r?r:i,i<0&&(i+=r),r=t>i?0:i-t>>>0,t>>>=0,f=bu(r);++u<r;)f[u]=n[u+t];return f}function ift(n,t){var i;return eh(n,function(n,r,u){return i=t(n,r,u),!i}),!!i}function ov(n,t,i){var f=0,r=n==null?f:n.length,e,u;if(typeof t=="number"&&t===t&&r<=uo){while(f<r)e=f+r>>>1,u=n[e],u!==null&&!hf(u)&&(i?u<=t:u<t)?f=e+1:r=e;return r}return rp(n,t,of,i)}function rp(t,i,r,u){var v;i=r(i);for(var s=0,e=t==null?0:t.length,y=i!==i,p=i===null,w=hf(i),b=i===n;s<e;){var h=da((s+e)/2),f=r(t[h]),c=f!==n,l=f===null,o=f===f,a=hf(f);v=y?u||o:b?o&&(u||c):p?o&&c&&(u||!l):w?o&&c&&!l&&(u||!a):l||a?!1:u?f<=i:f<i;v?s=h+1:e=h}return nf(e,ro)}function tk(n,t){for(var r=-1,o=n.length,s=0,f=[],i,u,e;++r<o;)i=n[r],u=t?t(i):i,r&&nh(u,e)||(e=u,f[s++]=i===0?0:i);return f}function ik(n){return typeof n=="number"?n:hf(n)?hi:+n}function sf(n){if(typeof n=="string")return n;if(wi(n))return r(n,sf)+"";if(hf(n))return rb?rb.call(n):"";var t=n+"";return t=="0"&&1/n==-ft?"-0":t}function vc(n,t,i){var l=-1,o=ki,a=n.length,s=!0,e=[],r=e,h,u,f,c;if(i)s=!1,o=dr;else if(a>=gi){if(h=t?null:nd(n),h)return pt(h);s=!1;o=fi;r=new gc}else r=t?[]:e;n:while(++l<a)if(u=n[l],f=t?t(u):u,u=i||u!==0?u:0,s&&f===f){for(c=r.length;c--;)if(r[c]===f)continue n;t&&r.push(f);e.push(u)}else o(r,f,i)||(r!==e&&r.push(f),e.push(u));return e}function up(n,t){return t=pc(t,n),n=ld(n,t),n==null||delete n[gs(yf(t))]}function rk(n,t,i,r){return ia(n,t,i(ol(n,t)),r)}function sv(n,t,i,r){for(var f=n.length,u=r?f:-1;(r?u--:++u<f)&&t(n[u],u,n););return i?vf(n,r?0:u,r?u+1:f):vf(n,r?u+1:0,r?f:u)}function uk(n,t){var i=n;return i instanceof vr&&(i=i.value()),ui(t,function(n,t){return t.func.apply(t.thisArg,it([n],t.args))},i)}function fp(n,t,i){var u=n.length,r,f,o,e;if(u<2)return u?vc(n[0]):[];for(r=-1,f=bu(u);++r<u;)for(o=n[r],e=-1;++e<u;)e!=r&&(f[r]=gl(f[r]||o,n[e],t,i));return vc(gu(f,1),t,i)}function fk(t,i,r){for(var u=-1,o=t.length,s=i.length,f={},e;++u<o;)e=u<s?i[u]:n,r(f,t[u],e);return f}function ep(n){return tu(n)?n:[]}function op(n){return typeof n=="function"?n:of}function pc(n,t){return wi(n)?n:wp(n,t)?[n]:dp(yr(n))}function wc(t,i,r){var u=t.length;return r=r===n?u:r,!i&&r>=u?t:vf(t,i,r)}function sk(n,t){if(t)return n.slice();var i=n.length,r=dw?dw(i):new n.constructor(i);return n.copy(r),r}function sp(n){var t=new n.constructor(n.byteLength);return new ya(t).set(new ya(n)),t}function rft(n,t){var i=t?sp(n.buffer):n.buffer;return new n.constructor(i,n.byteOffset,n.byteLength)}function uft(n,t,i){var r=t?i(ei(n),y):ei(n);return ui(r,ph,new n.constructor)}function fft(n){var t=new n.constructor(n.source,wu.exec(n));return t.lastIndex=n.lastIndex,t}function eft(n,t,i){var r=t?i(pt(n),y):pt(n);return ui(r,wh,new n.constructor)}function oft(n){return kl?wr(kl.call(n)):{}}function hk(n,t){var i=t?sp(n.buffer):n.buffer;return new n.constructor(i,n.byteOffset,n.length)}function ck(t,i){if(t!==i){var o=t!==n,s=t===null,r=t===t,u=hf(t),h=i!==n,c=i===null,f=i===i,e=hf(i);if(!c&&!e&&!u&&t>i||u&&h&&f&&!c&&!e||s&&h&&f||!o&&f||!r)return 1;if(!s&&!u&&!e&&t<i||e&&o&&r&&!s&&!u||c&&o&&r||!h&&r||!f)return-1}return 0}function sft(n,t,i){for(var r=-1,f=n.criteria,o=t.criteria,s=f.length,h=i.length,u,e;++r<s;)if(u=ck(f[r],o[r]),u)return r>=h?u:(e=i[r],u*(e=="desc"?-1:1));return n.index-t.index}function lk(n,t,i,r){for(var u=-1,o=n.length,s=i.length,f=-1,h=t.length,c=ku(o-s,0),e=bu(h+c),l=!r;++f<h;)e[f]=t[f];while(++u<s)(l||u<o)&&(e[i[u]]=n[u]);while(c--)e[f++]=n[u++];return e}function ak(n,t,i,r){for(var u=-1,s=n.length,h=-1,c=i.length,e=-1,l=t.length,a=ku(s-c,0),f=bu(a+l),v=!r,o;++u<a;)f[u]=n[u];for(o=u;++e<l;)f[o+e]=t[e];while(++h<c)(v||u<s)&&(f[o+i[h]]=n[u++]);return f}function uf(n,t){var i=-1,r=n.length;for(t||(t=bu(r));++i<r;)t[i]=n[i];return t}function ds(t,i,r,u){var h=!r,o,s,f,e;for(r||(r={}),o=-1,s=i.length;++o<s;)f=i[o],e=u?u(r[f],t[f],f,r,t):n,e===n&&(e=t[f]),h?rh(r,f,e):dl(r,f,e);return r}function hft(n,t){return ds(n,pp(n),t)}function cft(n,t){return ds(n,ud(n),t)}function hv(n,t){return function(i,r){var u=wi(i)?bh:grt,f=t?t():{};return u(i,n,pi(r,2),f)}}function sl(t){return ar(function(i,r){var e=-1,u=r.length,f=u>1?r[u-1]:n,s=u>2?r[2]:n,o;for(f=t.length>3&&typeof f=="function"?(u--,f):n,s&&ff(r[0],r[1],s)&&(f=u<3?n:f,u=1),i=wr(i);++e<u;)o=r[e],o&&t(i,o,e,f);return i})}function vk(n,t){return function(i,r){if(i==null)return i;if(!ef(i))return n(i,r);for(var f=i.length,u=t?f:-1,e=wr(i);t?u--:++u<f;)if(r(e[u],u,e)===!1)break;return i}}function yk(n){return function(t,i,r){for(var s=-1,f=wr(t),e=r(t),o=e.length,u;o--;)if(u=e[n?o:++s],i(f[u],u,f)===!1)break;return t}}function lft(n,t,i){function r(){var t=this&&this!==u&&this instanceof r?e:n;return t.apply(f?i:this,arguments)}var f=t&s,e=ra(n);return r}function pk(t){return function(i){i=yr(i);var r=yt(i)?v(i):n,u=r?r[0]:i.charAt(0),f=r?wc(r,1).join(""):i.slice(1);return u[t]()+f}}function hl(n){return function(t){return ui(ftt(ttt(t).replace(uh,"")),n,"")}}function ra(n){return function(){var t=arguments,i,r;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}return i=kc(n.prototype),r=n.apply(i,t),br(r)?r:i}}function aft(t,i,r){function e(){for(var s=arguments.length,h=bu(s),c=s,l=cl(e),a,v;c--;)h[c]=arguments[c];return(a=s<3&&h[0]!==l&&h[s-1]!==l?[]:rt(h,l),s-=a.length,s<r)?gk(t,i,cv,e.placeholder,n,h,a,n,n,r-s):(v=this&&this!==u&&this instanceof e?o:t,f(v,this,h))}var o=ra(t);return e}function wk(t){return function(i,r,u){var e=wr(i),o,f;return ef(i)||(o=pi(r,3),i=du(i),r=function(n){return o(e[n],n,e)}),f=t(i,r,u),f>-1?e[o?i[f]:f]:n}}function bk(t){return sh(function(i){var s=i.length,e=s,c=af.prototype.thru,u,r,h,f;for(t&&i.reverse();e--;){if(u=i[e],typeof u!="function")throw new lf(o);c&&!r&&pv(u)=="wrapper"&&(r=new af([],!0))}for(e=r?e:s;++e<s;)u=i[e],h=pv(u),f=h=="wrapper"?yv(u):n,r=f&&bp(f[0])&&f[1]==(k|p|w|bt)&&!f[4].length&&f[9]==1?r[pv(f[0])].apply(r,f[3]):u.length==1&&bp(u)?r[h]():r.thru(u);return function(){var u=arguments,f=u[0],n,t;if(r&&u.length==1&&wi(f))return r.plant(f).value();for(n=0,t=s?i[n].apply(this,u):f;++n<s;)t=i[n].call(this,t);return t}})}function cv(t,i,r,f,e,o,h,c,l,a){function y(){for(var s=arguments.length,n=bu(s),k=s,tt,ut,ft,it,p;k--;)n[k]=arguments[k];return(v&&(tt=cl(y),ut=uc(n,tt)),f&&(n=lk(n,f,e,v)),o&&(n=ak(n,o,h,v)),s-=ut,v&&s<a)?(ft=rt(n,tt),gk(t,i,cv,y.placeholder,r,n,ft,c,l,a-s)):(it=d?r:this,p=w?it[t]:t,s=n.length,c?n=het(n,c):g&&s>1&&n.reverse(),b&&l<s&&(n.length=l),this&&this!==u&&this instanceof y&&(p=nt||ra(p)),p.apply(it,n))}var b=i&k,d=i&s,w=i&ut,v=i&(p|st),g=i&tr,nt=w?n:ra(t);return y}function kk(n,t){return function(i,r){return out(i,n,t(r),{})}}function lv(t,i){return function(r,u){var f;if(r===n&&u===n)return i;if(r!==n&&(f=r),u!==n){if(f===n)return u;typeof r=="string"||typeof u=="string"?(r=sf(r),u=sf(u)):(r=ik(r),u=ik(u));f=t(r,u)}return f}}function hp(n){return sh(function(t){return t=r(t,e(pi())),ar(function(i){var r=this;return n(t,function(n){return f(n,r,i)})})})}function av(t,i){var r,u;return(i=i===n?" ":sf(i),r=i.length,r<2)?r?tp(i,t):i:(u=tp(i,ka(t/wt(i))),yt(i)?wc(v(u),0,t).join(""):u.slice(0,t))}function vft(n,t,i,r){function e(){for(var a=-1,c=arguments.length,t=-1,l=r.length,s=bu(l+c),v=this&&this!==u&&this instanceof e?h:n;++t<l;)s[t]=r[t];while(c--)s[t++]=arguments[++a];return f(v,o?i:this,s)}var o=t&s,h=ra(n);return e}function dk(t){return function(i,r,u){return u&&typeof u!="number"&&ff(i,r,u)&&(r=u=n),i=cc(i),r===n?(r=i,i=0):r=cc(r),u=u===n?i<r?1:-1:cc(u),dut(i,r,u,t)}}function vv(n){return function(t,i){return typeof t=="string"&&typeof i=="string"||(t=pf(t),i=pf(i)),n(t,i)}}function gk(t,i,r,u,f,e,o,h,c,l){var a=i&p,b=a?o:n,k=a?n:o,d=a?e:n,g=a?n:e,y,v;return i|=a?w:ht,i&=~(a?ht:w),i&ou||(i&=~(s|ut)),y=[t,i,f,d,b,g,k,h,c,l],v=r.apply(n,y),bp(t)&&ad(v,y),v.placeholder=u,vd(v,t,i)}function cp(n){var t=fl[n];return function(n,i){if(n=pf(n),i=i==null?0:nf(bi(i),292),i){var r=(yr(n)+"e").split("e"),u=t(r[0]+"e"+(+r[1]+i));return r=(yr(u)+"e").split("e"),+(r[0]+"e"+(+r[1]-i))}return t(n)}}function td(n){return function(t){var i=tf(t);return i==l?ei(t):i==a?hc(t):rc(t,n(t))}}function oh(t,i,r,u,f,e,h,c){var y=i&ut,a,b,k,v,l,d,g;if(!y&&typeof t!="function")throw new lf(o);return a=u?u.length:0,a||(i&=~(w|ht),u=f=n),h=h===n?h:ku(bi(h),0),c=c===n?c:bi(c),a-=f?f.length:0,i&ht&&(b=u,k=f,u=f=n),v=y?n:yv(t),l=[t,i,r,u,f,b,k,e,h,c],v&&eet(l,v),t=l[0],i=l[1],r=l[2],u=l[3],f=l[4],c=l[9]=l[9]===n?y?0:t.length:ku(l[9]-a,0),!c&&i&(p|st)&&(i&=~(p|st)),d=i&&i!=s?i==p||i==st?aft(t,i,c):i!=w&&i!=(s|w)||f.length?cv.apply(n,l):vft(t,i,r,u):lft(t,i,r),g=v?ip:ad,vd(g(d,l),t,i)}function lp(t,i,r,u){return t===n||nh(t,al[r])&&!pr.call(u,r)?i:t}function id(t,i,r,u,f,e){return br(t)&&br(i)&&(e.set(i,t),ev(t,i,n,id,e),e["delete"](i)),t}function yft(t){return oa(t)?n:t}function rd(t,i,r,u,f,e){var p=r&ot,l=t.length,w=i.length,a,o,h,y;if(l!=w&&!(p&&w>l))return!1;if(a=e.get(t),a&&e.get(i))return a==i;var s=-1,c=!0,v=r&si?new gc:n;for(e.set(t,i),e.set(i,t);++s<l;){if(o=t[s],h=i[s],u&&(y=p?u(h,o,s,i,t,e):u(o,h,s,t,i,e)),y!==n){if(y)continue;c=!1;break}if(v){if(!gr(i,function(n,t){if(!fi(v,t)&&(o===n||f(o,n,r,u,e)))return v.push(t)})){c=!1;break}}else if(!(o===h||f(o,h,r,u,e))){c=!1;break}}return e["delete"](t),e["delete"](i),c}function pft(n,t,i,r,u,f,e){var o,h,s,c;switch(i){case lt:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer;t=t.buffer;case ri:return n.byteLength!=t.byteLength||!f(new ya(n),new ya(t))?!1:!0;case kt:case dt:case gt:return nh(+n,+t);case li:return n.name==t.name&&n.message==t.message;case ni:case ti:return n==t+"";case l:o=ei;case a:return(h=r&ot,o||(o=pt),n.size!=t.size&&!h)?!1:(s=e.get(n),s)?s==t:(r|=si,e.set(n,t),c=rd(o(n),o(t),r,u,f,e),e["delete"](n),c);case vi:if(kl)return kl.call(n)==kl.call(t)}return!1}function wft(t,i,r,u,f,e){var y=r&ot,w=ap(t),b=w.length,g=ap(i),nt=g.length,s,o,k,h,p,c,l,d,a,v;if(b!=nt&&!y)return!1;for(s=b;s--;)if(o=w[s],!(y?o in i:pr.call(i,o)))return!1;if(k=e.get(t),k&&e.get(i))return k==i;for(h=!0,e.set(t,i),e.set(i,t),p=y;++s<b;){if(o=w[s],c=t[o],l=i[o],u&&(d=y?u(l,c,o,i,t,e):u(c,l,o,t,i,e)),!(d===n?c===l||f(c,l,r,u,e):d)){h=!1;break}p||(p=o=="constructor")}return h&&!p&&(a=t.constructor,v=i.constructor,a!=v&&"constructor"in t&&"constructor"in i&&!(typeof a=="function"&&a instanceof a&&typeof v=="function"&&v instanceof v)&&(h=!1)),e["delete"](t),e["delete"](i),h}function sh(t){return kp(cd(t,n,kd),t+"")}function ap(n){return cb(n,du,pp)}function vp(n){return cb(n,cf,ud)}function pv(n){for(var t=n.name+"",u=bl[t],f=pr.call(bl,t)?u.length:0,i,r;f--;)if(i=u[f],r=i.func,r==null||r==n)return i.name;return t}function cl(n){var t=pr.call(at,"placeholder")?at:n;return t.placeholder}function pi(){var n=at.iteratee||cw;return n=n===cw?vb:n,arguments.length?n(arguments[0],arguments[1]):n}function wv(n,t){var i=n.__data__;return ret(t)?i[typeof t=="string"?"string":"hash"]:i.map}function yp(n){for(var t=du(n),i=t.length,r,u;i--;)r=t[i],u=n[r],t[i]=[r,u,sd(u)];return t}function tl(t,i){var r=ec(t,i);return ab(r)?r:n}function bft(t){var u=pr.call(t,bc),f=t[bc],i,r;try{t[bc]=n;i=!0}catch(e){}return r=kw.call(t),i&&(u?t[bc]=f:delete t[bc]),r}function kft(n,t,i){for(var f=-1,e=i.length,u,r;++f<e;){u=i[f];r=u.size;switch(u.type){case"drop":n+=r;break;case"dropRight":t-=r;break;case"take":t=nf(t,n+r);break;case"takeRight":n=ku(n,t-r)}}return{start:n,end:t}}function dft(n){var t=n.match(es);return t?t[1].split(os):[]}function fd(n,t,i){var u;t=pc(t,n);for(var f=-1,r=t.length,e=!1;++f<r;){if(u=gs(t[f]),!(e=n!=null&&i(n,u)))break;n=n[u]}return e||++f!=r?e:(r=n==null?0:n.length,!!r&&iy(r)&&lh(u,r)&&(wi(n)||rl(n)))}function gft(n){var i=n.length,t=n.constructor(i);return i&&typeof n[0]=="string"&&pr.call(n,"index")&&(t.index=n.index,t.input=n.input),t}function ed(n){return typeof n.constructor=="function"&&!ua(n)?kc(pa(n)):{}}function net(n,t,i,r){var u=n.constructor;switch(t){case ri:return sp(n);case kt:case dt:return new u(+n);case lt:return rft(n,r);case ir:case rr:case ur:case fr:case er:case or:case sr:case hr:case cr:return hk(n,r);case l:return uft(n,r,i);case gt:case ti:return new u(n);case ni:return fft(n);case a:return eft(n,r,i);case vi:return oft(n)}}function tet(n,t){var i=t.length,r;return i?(r=i-1,t[r]=(i>1?"& ":"")+t[r],t=t.join(i>2?", ":" "),n.replace(fs,"{\n/* [wrapped with "+t+"] */\n")):n}function iet(n){return wi(n)||rl(n)||!!(tb&&n&&n[tb])}function lh(n,t){return t=t==null?nt:t,!!t&&(typeof n=="number"||ps.test(n))&&n>-1&&n%1==0&&n<t}function ff(n,t,i){if(!br(i))return!1;var r=typeof t;return(r=="number"?ef(i)&&lh(t,i.length):r=="string"&&t in i)?nh(i[t],n):!1}function wp(n,t){if(wi(n))return!1;var i=typeof n;return i=="number"||i=="symbol"||i=="boolean"||n==null||hf(n)?!0:ns.test(n)||!go.test(n)||t!=null&&n in wr(t)}function ret(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}function bp(n){var r=pv(n),t=at[r],i;return typeof t!="function"||!(r in vr.prototype)?!1:n===t?!0:(i=yv(t),!!i&&n===i[0])}function uet(n){return!!bw&&bw in n}function ua(n){var t=n&&n.constructor,i=typeof t=="function"&&t.prototype||al;return n===i}function sd(n){return n===n&&!br(n)}function hd(t,i){return function(r){return r==null?!1:r[t]===i&&(i!==n||t in wr(r))}}function fet(n){var t=ny(n,function(n){return i.size===we&&i.clear(),n}),i=t.cache;return t}function eet(n,t){var f=n[1],u=t[1],e=f|u,o=e<(s|ut|k),h=u==k&&f==p||u==k&&f==bt&&n[7].length<=t[8]||u==(k|bt)&&t[7].length<=t[8]&&f==p,i,r;return(o||h)?(u&s&&(n[2]=t[2],e|=f&s?0:ou),i=t[3],i&&(r=n[3],n[3]=r?lk(r,i,t[4]):i,n[4]=r?rt(n[3],oi):t[4]),i=t[5],i&&(r=n[5],n[5]=r?ak(r,i,t[6]):i,n[6]=r?rt(n[5],oi):t[6]),i=t[7],i&&(n[7]=i),u&k&&(n[8]=n[8]==null?t[8]:nf(n[8],t[8])),n[9]==null&&(n[9]=t[9]),n[0]=t[0],n[1]=e,n):n}function oet(n){var t=[],i;if(n!=null)for(i in wr(n))t.push(i);return t}function set(n){return kw.call(n)}function cd(t,i,r){return i=ku(i===n?t.length-1:i,0),function(){for(var e=arguments,n=-1,o=ku(e.length-i,0),s=bu(o),u;++n<o;)s[n]=e[i+n];for(n=-1,u=bu(i+1);++n<i;)u[n]=e[n];return u[i]=r(s),f(t,this,u)}}function ld(n,t){return t.length<2?n:ol(n,vf(t,0,-1))}function het(t,i){for(var f=t.length,r=nf(i.length,f),e=uf(t),u;r--;)u=i[r],t[r]=lh(u,f)?e[u]:n;return t}function vd(n,t,i){var r=t+"";return kp(n,tet(r,cet(dft(r),i)))}function yd(t){var i=0,r=0;return function(){var u=eit(),f=ge-(u-r);if(r=u,f>0){if(++i>=de)return arguments[0]}else i=0;return t.apply(n,arguments)}}function bv(t,i){var r=-1,f=t.length,o=f-1,u,e;for(i=i===n?f:i;++r<i;)u=np(r,o),e=t[u],t[u]=t[r],t[r]=e;return t.length=i,t}function gs(n){if(typeof n=="string"||hf(n))return n;var t=n+"";return t=="0"&&1/n==-ft?"-0":t}function il(n){if(n!=null){try{return aa.call(n)}catch(t){}try{return n+""}catch(t){}}return""}function cet(n,t){return c(fo,function(i){var r="_."+i[0];t&i[1]&&!ki(n,r)&&n.push(r)}),n.sort()}function pd(n){if(n instanceof vr)return n.clone();var t=new af(n.__wrapped__,n.__chain__);return t.__actions__=uf(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function aet(t,i,r){var u;if(i=(r?ff(t,i,r):i===n)?1:ku(bi(i),0),u=t==null?0:t.length,!u||i<1)return[];for(var f=0,o=0,e=bu(ka(u/i));f<u;)e[o++]=vf(t,f,f+=i);return e}function vet(n){for(var i=-1,u=n==null?0:n.length,f=0,r=[],t;++i<u;)t=n[i],t&&(r[f++]=t);return r}function yet(){var n=arguments.length;if(!n)return[];for(var r=bu(n-1),t=arguments[0],i=n;i--;)r[i-1]=arguments[i];return it(wi(t)?uf(t):[t],gu(r,1))}function ket(t,i,r){var u=t==null?0:t.length;return u?(i=r||i===n?1:bi(i),vf(t,i<0?0:i,u)):[]}function det(t,i,r){var u=t==null?0:t.length;return u?(i=r||i===n?1:bi(i),i=u-i,vf(t,0,i<0?0:i)):[]}function get(n,t){return n&&n.length?sv(n,pi(t,3),!0,!0):[]}function not(n,t){return n&&n.length?sv(n,pi(t,3),!0):[]}function tot(n,t,i,r){var u=n==null?0:n.length;return u?(i&&typeof i!="number"&&ff(n,t,i)&&(i=0,r=u),rut(n,t,i,r)):[]}function wd(n,t,i){var u=n==null?0:n.length,r;return u?(r=i==null?0:bi(i),r<0&&(r=ku(u+r,0)),di(n,pi(t,3),r)):-1}function bd(t,i,r){var f=t==null?0:t.length,u;return f?(u=f-1,r!==n&&(u=bi(r),u=r<0?ku(f+u,0):nf(u,f-1)),di(t,pi(i,3),u,!0)):-1}function kd(n){var t=n==null?0:n.length;return t?gu(n,1):[]}function iot(n){var t=n==null?0:n.length;return t?gu(n,ft):[]}function rot(t,i){var r=t==null?0:t.length;return r?(i=i===n?1:bi(i),gu(t,i)):[]}function uot(n){for(var i=-1,u=n==null?0:n.length,r={},t;++i<u;)t=n[i],r[t[0]]=t[1];return r}function dd(t){return t&&t.length?t[0]:n}function fot(n,t,i){var u=n==null?0:n.length,r;return u?(r=i==null?0:bi(i),r<0&&(r=ku(u+r,0)),vt(n,t,r)):-1}function eot(n){var t=n==null?0:n.length;return t?vf(n,0,-1):[]}function cot(n,t){return n==null?"":uit.call(n,t)}function yf(t){var i=t==null?0:t.length;return i?t[i-1]:n}function lot(t,i,r){var f=t==null?0:t.length,u;return f?(u=f,r!==n&&(u=bi(r),u=u<0?ku(f+u,0):nf(u,f-1)),i===i?lc(t,i,u):di(t,fe,u,!0)):-1}function aot(t,i){return t&&t.length?bb(t,bi(i)):n}function ng(n,t){return n&&n.length&&t&&t.length?gy(n,t):n}function vot(n,t,i){return n&&n.length&&t&&t.length?gy(n,t,pi(i,2)):n}function yot(t,i,r){return t&&t.length&&i&&i.length?gy(t,i,n,r):t}function pot(n,t){var r=[],u;if(!(n&&n.length))return r;var i=-1,f=[],e=n.length;for(t=pi(t,3);++i<e;)u=n[i],t(u,i,n)&&(r.push(u),f.push(i));return gb(n,f),r}function gp(n){return n==null?n:sit.call(n)}function wot(t,i,r){var u=t==null?0:t.length;return u?(r&&typeof r!="number"&&ff(t,i,r)?(i=0,r=u):(i=i==null?0:bi(i),r=r===n?u:bi(r)),vf(t,i,r)):[]}function bot(n,t){return ov(n,t)}function kot(n,t,i){return rp(n,t,pi(i,2))}function dot(n,t){var r=n==null?0:n.length,i;return r&&(i=ov(n,t),i<r&&nh(n[i],t))?i:-1}function got(n,t){return ov(n,t,!0)}function nst(n,t,i){return rp(n,t,pi(i,2),!0)}function tst(n,t){var r=n==null?0:n.length,i;return r&&(i=ov(n,t,!0)-1,nh(n[i],t))?i:-1}function ist(n){return n&&n.length?tk(n):[]}function rst(n,t){return n&&n.length?tk(n,pi(t,2)):[]}function ust(n){var t=n==null?0:n.length;return t?vf(n,1,t):[]}function fst(t,i,r){return(t&&t.length)?(i=r||i===n?1:bi(i),vf(t,0,i<0?0:i)):[]}function est(t,i,r){var u=t==null?0:t.length;return u?(i=r||i===n?1:bi(i),i=u-i,vf(t,i<0?0:i,u)):[]}function ost(n,t){return n&&n.length?sv(n,pi(t,3),!1,!0):[]}function sst(n,t){return n&&n.length?sv(n,pi(t,3)):[]}function ast(n){return n&&n.length?vc(n):[]}function vst(n,t){return n&&n.length?vc(n,pi(t,2)):[]}function yst(t,i){return i=typeof i=="function"?i:n,t&&t.length?vc(t,n,i):[]}function nw(n){if(!(n&&n.length))return[];var t=0;return n=tt(n,function(n){if(tu(n))return t=ku(n.length,t),!0}),ru(t,function(t){return r(n,nu(t))})}function ig(t,i){if(!(t&&t.length))return[];var u=nw(t);return i==null?u:r(u,function(t){return f(i,n,t)})}function gst(n,t){return fk(n||[],t||[],dl)}function nht(n,t){return fk(n||[],t||[],ia)}function ug(n){var t=at(n);return t.__chain__=!0,t}function tht(n,t){return t(n),n}function kv(n,t){return t(n)}function iht(){return ug(this)}function rht(){return new af(this.value(),this.__chain__)}function uht(){this.__values__===n&&(this.__values__=ln(this.value()));var t=this.__index__>=this.__values__.length,i=t?n:this.__values__[this.__index__++];return{done:t,value:i}}function fht(){return this}function eht(t){for(var u,r=this,i,f;r instanceof tv;)i=pd(r),i.__index__=0,i.__values__=n,u?f.__wrapped__=i:u=i,f=i,r=r.__wrapped__;return f.__wrapped__=t,u}function oht(){var i=this.__wrapped__,t;return i instanceof vr?(t=i,this.__actions__.length&&(t=new vr(this)),t=t.reverse(),t.__actions__.push({func:kv,args:[gp],thisArg:n}),new af(t,this.__chain__)):this.thru(gp)}function sht(){return uk(this.__wrapped__,this.__actions__)}function hht(t,i,r){var u=wi(t)?ie:iut;return r&&ff(t,i,r)&&(i=n),u(t,pi(i,3))}function cht(n,t){var i=wi(n)?tt:hb;return i(n,pi(t,3))}function lht(n,t){return gu(dv(n,t),1)}function aht(n,t){return gu(dv(n,t),ft)}function vht(t,i,r){return r=r===n?1:bi(r),gu(dv(t,i),r)}function hg(n,t){var i=wi(n)?c:eh;return i(n,pi(t,3))}function cg(n,t){var i=wi(n)?kh:ay;return i(n,pi(t,3))}function yht(n,t,i,r){n=ef(n)?n:ll(n);i=i&&!r?bi(i):0;var u=n.length;return i<0&&(i=ku(u+i,0)),uy(n)?i<=u&&n.indexOf(t,i)>-1:!!u&&vt(n,t,i)>-1}function dv(n,t){var i=wi(n)?r:yb;return i(n,pi(t,3))}function pht(t,i,r,u){return t==null?[]:(wi(i)||(i=i==null?[]:[i]),r=u?n:r,wi(r)||(r=r==null?[]:[r]),kb(t,i,r))}function wht(n,t,i){var r=wi(n)?ui:oe,u=arguments.length<3;return r(n,pi(t,4),i,u,eh)}function bht(n,t,i){var r=wi(n)?dh:oe,u=arguments.length<3;return r(n,pi(t,4),i,u,ay)}function kht(n,t){var i=wi(n)?tt:hb;return i(n,ty(pi(t,3)))}function dht(n){var t=wi(n)?fb:gut;return t(n)}function ght(t,i,r){i=(r?ff(t,i,r):i===n)?1:bi(i);var u=wi(t)?krt:nft;return u(t,i)}function nct(n){var t=wi(n)?drt:tft;return t(n)}function tct(n){if(n==null)return 0;if(ef(n))return uy(n)?wt(n):n.length;var t=tf(n);return t==l||t==a?n.size:ky(n).length}function ict(t,i,r){var u=wi(t)?gr:ift;return r&&ff(t,i,r)&&(i=n),u(t,pi(i,3))}function rct(n,t){if(typeof t!="function")throw new lf(o);return n=bi(n),function(){if(--n<1)return t.apply(this,arguments)}}function wg(t,i,r){return i=r?n:i,i=t&&i==null?t.length:i,oh(t,k,n,n,n,n,i)}function bg(t,i){var r;if(typeof i!="function")throw new lf(o);return t=bi(t),function(){return--t>0&&(r=i.apply(this,arguments)),t<=1&&(i=n),r}}function kg(t,i,r){i=r?n:i;var u=oh(t,p,n,n,n,n,n,i);return u.placeholder=kg.placeholder,u}function dg(t,i,r){i=r?n:i;var u=oh(t,st,n,n,n,n,n,i);return u.placeholder=dg.placeholder,u}function gg(t,i,r){function p(i){var r=e,u=h;return e=h=n,c=i,s=t.apply(u,r)}function g(n){return c=n,u=fa(v,i),b?p(n):s}function nt(n){var r=n-f,u=n-c,t=i-r;return l?nf(t,a-u):t}function k(t){var r=t-f,u=t-c;return f===n||r>=i||r<0||l&&u>=a}function v(){var n=ea();if(k(n))return d(n);u=fa(v,nt(n))}function d(t){return(u=n,y&&e)?p(t):(e=h=n,s)}function tt(){u!==n&&ok(u);c=0;e=f=h=u=n}function it(){return u===n?s:d(ea())}function w(){var t=ea(),r=k(t);if(e=arguments,h=this,f=t,r){if(u===n)return g(f);if(l)return u=fa(v,i),p(f)}return u===n&&(u=fa(v,i)),s}var e,h,a,s,u,f,c=0,b=!1,l=!1,y=!0;if(typeof t!="function")throw new lf(o);return i=pf(i)||0,br(r)&&(b=!!r.leading,l="maxWait"in r,a=l?ku(pf(r.maxWait)||0,i):a,y="trailing"in r?!!r.trailing:y),w.cancel=tt,w.flush=it,w}function uct(n){return oh(n,tr)}function ny(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new lf(o);var i=function(){var u=arguments,f=t?t.apply(this,u):u[0],r=i.cache,e;return r.has(f)?r.get(f):(e=n.apply(this,u),i.cache=r.set(f,e)||r,e)};return i.cache=new(ny.Cache||ih),i}function ty(n){if(typeof n!="function")throw new lf(o);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function fct(n){return bg(2,n)}function sct(t,i){if(typeof t!="function")throw new lf(o);return i=i===n?i:bi(i),ar(t,i)}function hct(n,t){if(typeof n!="function")throw new lf(o);return t=t==null?0:ku(bi(t),0),ar(function(i){var r=i[t],u=wc(i,0,t);return r&&it(u,r),f(n,this,u)})}function cct(n,t,i){var r=!0,u=!0;if(typeof n!="function")throw new lf(o);return br(i)&&(r="leading"in i?!!i.leading:r,u="trailing"in i?!!i.trailing:u),gg(n,t,{leading:r,maxWait:t,trailing:u})}function lct(n){return wg(n,1)}function act(n,t){return iw(op(t),n)}function vct(){if(!arguments.length)return[];var n=arguments[0];return wi(n)?n:[n]}function yct(n){return ss(n,et)}function pct(t,i){return i=typeof i=="function"?i:n,ss(t,et,i)}function wct(n){return ss(n,y|et)}function bct(t,i){return i=typeof i=="function"?i:n,ss(t,y|et,i)}function kct(n,t){return t==null||ob(n,t,du(t))}function nh(n,t){return n===t||n!==n&&t!==t}function ef(n){return n!=null&&iy(n.length)&&!gh(n)}function tu(n){return kr(n)&&ef(n)}function tlt(n){return n===!0||n===!1||kr(n)&&rf(n)==kt}function ilt(n){return kr(n)&&n.nodeType===1&&!oa(n)}function rlt(n){var t,i;if(n==null)return!0;if(ef(n)&&(wi(n)||typeof n=="string"||typeof n.splice=="function"||yh(n)||ul(n)||rl(n)))return!n.length;if(t=tf(n),t==l||t==a)return!n.size;if(ua(n))return!ky(n).length;for(i in n)if(pr.call(n,i))return!1;return!0}function ult(n,t){return ta(n,t)}function flt(t,i,r){r=typeof r=="function"?r:n;var u=r?r(t,i):n;return u===n?ta(t,i,n,r):!!u}function rw(n){if(!kr(n))return!1;var t=rf(n);return t==li||t==oo||typeof n.message=="string"&&typeof n.name=="string"&&!oa(n)}function elt(n){return typeof n=="number"&&rit(n)}function gh(n){if(!br(n))return!1;var t=rf(n);return t==ai||t==hu||t==eo||t==ho}function fn(n){return typeof n=="number"&&n==bi(n)}function iy(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=nt}function br(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}function kr(n){return n!=null&&typeof n=="object"}function olt(n,t){return n===t||by(n,t,yp(t))}function slt(t,i,r){return r=typeof r=="function"?r:n,by(t,i,yp(i),r)}function hlt(n){return on(n)&&n!=+n}function clt(n){if(od(n))throw new pw(pe);return ab(n)}function llt(n){return n===null}function alt(n){return n==null}function on(n){return typeof n=="number"||kr(n)&&rf(n)==gt}function oa(n){var i,t;return!kr(n)||rf(n)!=d?!1:(i=pa(n),i===null)?!0:(t=pr.call(i,"constructor")&&i.constructor,typeof t=="function"&&t instanceof t&&aa.call(t)==btt)}function vlt(n){return fn(n)&&n>=-nt&&n<=nt}function uy(n){return typeof n=="string"||!wi(n)&&kr(n)&&rf(n)==ti}function hf(n){return typeof n=="symbol"||kr(n)&&rf(n)==vi}function ylt(t){return t===n}function plt(n){return kr(n)&&tf(n)==ii}function wlt(n){return kr(n)&&rf(n)==lo}function ln(n){if(!n)return[];if(ef(n))return uy(n)?v(n):uf(n);if(vl&&n[vl])return sc(n[vl]());var t=tf(n),i=t==l?ei:t==a?pt:ll;return i(n)}function cc(n){if(!n)return n===0?n:0;if(n=pf(n),n===ft||n===-ft){var t=n<0?-1:1;return t*io}return n===n?n:0}function bi(n){var t=cc(n),i=t%1;return t===t?i?t-i:t:0}function an(n){return n?nl(bi(n),0,b):0}function pf(n){var t,i;return typeof n=="number"?n:hf(n)?hi:(br(n)&&(t=typeof n.valueOf=="function"?n.valueOf():n,n=br(t)?t+"":t),typeof n!="string")?n===0?n:+n:(n=n.replace(yu,""),i=as.test(n),i||ys.test(n)?vh(n.slice(2),i?2:8):ls.test(n)?hi:+n)}function vn(n){return ds(n,cf(n))}function blt(n){return n?nl(bi(n),-nt,nt):n===0?n:0}function yr(n){return n==null?"":sf(n)}function nat(n,t){var i=kc(n);return t==null?i:eb(i,t)}function tat(n,t){return ue(n,pi(t,3),ks)}function iat(n,t){return ue(n,pi(t,3),yy)}function rat(n,t){return n==null?n:uv(n,pi(t,3),cf)}function uat(n,t){return n==null?n:vy(n,pi(t,3),cf)}function fat(n,t){return n&&ks(n,pi(t,3))}function eat(n,t){return n&&yy(n,pi(t,3))}function oat(n){return n==null?[]:fv(n,du(n))}function sat(n){return n==null?[]:fv(n,cf(n))}function uw(t,i,r){var u=t==null?n:ol(t,i);return u===n?r:u}function hat(n,t){return n!=null&&fd(n,t,uut)}function fw(n,t){return n!=null&&fd(n,t,fut)}function du(n){return ef(n)?ub(n):ky(n)}function cf(n){return ef(n)?ub(n,!0):put(n)}function vat(n,t){var i={};return t=pi(t,3),ks(n,function(n,r,u){rh(i,t(n,r,u),n)}),i}function yat(n,t){var i={};return t=pi(t,3),ks(n,function(n,r,u){rh(i,r,t(n,r,u))}),i}function bat(n,t){return dn(n,ty(pi(t)))}function dn(n,t){if(n==null)return{};var i=r(vp(n),function(n){return[n]});return t=pi(t),db(n,i,function(n,i){return t(n,i[0])})}function kat(t,i,r){var e,f,u;for(i=pc(i,t),e=-1,f=i.length,f||(f=1,t=n);++e<f;)u=t==null?n:t[gs(i[e])],u===n&&(e=f,u=r),t=gh(u)?u.call(t):u;return t}function dat(n,t,i){return n==null?n:ia(n,t,i)}function gat(t,i,r,u){return u=typeof u=="function"?u:n,t==null?t:ia(t,i,r,u)}function nvt(n,t,i){var u=wi(n),f=u||yh(n)||ul(n),r;return t=pi(t,4),i==null&&(r=n&&n.constructor,i=f?u?new r:[]:br(n)?gh(r)?kc(pa(n)):{}:{}),(f?c:ks)(n,function(n,r,u){return t(i,n,r,u)}),i}function tvt(n,t){return n==null?!0:up(n,t)}function ivt(n,t,i){return n==null?n:rk(n,t,op(i))}function rvt(t,i,r,u){return u=typeof u=="function"?u:n,t==null?t:rk(t,i,op(r),u)}function ll(n){return n==null?[]:uu(n,du(n))}function uvt(n){return n==null?[]:uu(n,cf(n))}function fvt(t,i,r){return r===n&&(r=i,i=n),r!==n&&(r=pf(r),r=r===r?r:0),i!==n&&(i=pf(i),i=i===i?i:0),nl(pf(t),i,r)}function evt(t,i,r){return i=cc(i),r===n?(r=i,i=0):r=cc(r),t=pf(t),eut(t,i,r)}function ovt(t,i,r){var f,u;return(r&&typeof r!="boolean"&&ff(t,i,r)&&(i=r=n),r===n&&(typeof i=="boolean"?(r=i,i=n):typeof t=="boolean"&&(r=t,t=n)),t===n&&i===n?(t=0,i=1):(t=cc(t),i===n?(i=t,t=0):i=cc(i)),t>i&&(f=t,t=i,i=f),r||t%1||i%1)?(u=ib(),nf(t+u*(i-t+ah("1e-"+((u+"").length-1))),i)):np(t,i)}function ntt(n){return fy(yr(n).toLowerCase())}function ttt(n){return n=yr(n),n&&n.replace(ws,ce).replace(fh,"")}function svt(t,i,r){var u,f;return t=yr(t),i=sf(i),u=t.length,r=r===n?u:nl(bi(r),0,u),f=r,r-=i.length,r>=0&&t.slice(r,f)==i}function hvt(n){return n=yr(n),n&&wo.test(n)?n.replace(au,le):n}function cvt(n){return n=yr(n),n&&rs.test(n)?n.replace(lr,"\\$&"):n}function yvt(n,t,i){var r,u;return(n=yr(n),t=bi(t),r=t?wt(n):0,!t||r>=t)?n:(u=(t-r)/2,av(da(u),i)+n+av(ka(u),i))}function pvt(n,t,i){n=yr(n);t=bi(t);var r=t?wt(n):0;return t&&r<t?n+av(t-r,i):n}function wvt(n,t,i){n=yr(n);t=bi(t);var r=t?wt(n):0;return t&&r<t?av(t-r,i)+n:n}function bvt(n,t,i){return i||t==null?t=0:t&&(t=+t),oit(yr(n).replace(pu,""),t||0)}function kvt(t,i,r){return i=(r?ff(t,i,r):i===n)?1:bi(i),tp(yr(t),i)}function dvt(){var n=arguments,t=yr(n[0]);return n.length<3?t:t.replace(n[1],n[2])}function gvt(t,i,r){return(r&&typeof r!="number"&&ff(t,i,r)&&(i=r=n),r=r===n?b:r>>>0,!r)?[]:(t=yr(t),t&&(typeof i=="string"||i!=null&&!ry(i))&&(i=sf(i),!i&&yt(t)))?wc(v(t),0,r):t.split(i,r)}function nyt(n,t,i){return n=yr(n),i=i==null?0:nl(bi(i),0,n.length),t=sf(t),n.slice(i,i+t.length)==t}function tyt(t,i,r){var s=at.templateSettings,e,f;r&&ff(t,i,r)&&(i=n);t=yr(t);i=sa({},i,s,lp);var h=sa({},i.imports,s.imports,lp),c=du(h),y=uu(h,c),l,o,a=0,v=i.interpolate||yi,u="__p += '",p=ey((i.escape||yi).source+"|"+v.source+"|"+(v===vu?cs:yi).source+"|"+(i.evaluate||yi).source+"|$","g"),w="//# sourceURL="+("sourceURL"in i?i.sourceURL:"lodash.templateSources["+ ++ch+"]")+"\n";if(t.replace(p,function(n,i,r,f,e,s){return r||(r=f),u+=t.slice(a,s).replace(bs,fc),i&&(l=!0,u+="' +\n__e("+i+") +\n'"),e&&(o=!0,u+="';\n"+e+";\n__p += '"),r&&(u+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),a=s+n.length,n}),u+="';\n",e=i.variable,e||(u="with (obj) {\n"+u+"\n}\n"),u=(o?u.replace(ao,""):u).replace(vo,"$1").replace(yo,"$1;"),u="function("+(e||"obj")+") {\n"+(e?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(l?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+u+"return __p\n}",f=sw(function(){return ww(c,w+"return "+u).apply(n,y)}),f.source=u,rw(f))throw f;return f}function iyt(n){return yr(n).toLowerCase()}function ryt(n){return yr(n).toUpperCase()}function uyt(t,i,r){if(t=yr(t),t&&(r||i===n))return t.replace(yu,"");if(!t||!(i=sf(i)))return t;var u=v(t),f=v(i),e=se(u,f),o=he(u,f)+1;return wc(u,e,o).join("")}function fyt(t,i,r){if(t=yr(t),t&&(r||i===n))return t.replace(us,"");if(!t||!(i=sf(i)))return t;var u=v(t),f=he(u,v(i))+1;return wc(u,0,f).join("")}function eyt(t,i,r){if(t=yr(t),t&&(r||i===n))return t.replace(pu,"");if(!t||!(i=sf(i)))return t;var u=v(t),f=se(u,v(i));return wc(u,f).join("")}function oyt(t,i){var s=be,e=ke,r,h,o,u,f,a,y,c,l;if(br(i)&&(r="separator"in i?i.separator:r,s="length"in i?bi(i.length):s,e="omission"in i?sf(i.omission):e),t=yr(t),h=t.length,yt(t)&&(o=v(t),h=o.length),s>=h)return t;if(u=s-wt(e),u<1)return e;if(f=o?wc(o,0,u).join(""):t.slice(0,u),r===n)return f+e;if(o&&(u+=f.length-u),ry(r)){if(t.slice(u).search(r)){for(y=f,r.global||(r=ey(r.source,yr(wu.exec(r))+"g")),r.lastIndex=0;a=r.exec(y);)c=a.index;f=f.slice(0,c===n?u:c)}}else t.indexOf(sf(r),u)!=u&&(l=f.lastIndexOf(r),l>-1&&(f=f.slice(0,l)));return f+e}function syt(n){return n=yr(n),n&&po.test(n)?n.replace(lu,ve):n}function ftt(t,i,r){return(t=yr(t),i=r?n:i,i===n)?oc(t)?yc(t):nc(t):t.match(i)||[]}function hyt(n){var t=n==null?0:n.length,i=pi();return n=t?r(n,function(n){if(typeof n[1]!="function")throw new lf(o);return[i(n[0]),n[1]]}):[],ar(function(i){for(var u=-1,r;++u<t;)if(r=n[u],f(r[0],this,i))return f(r[1],this,i)})}function cyt(n){return tut(ss(n,y))}function hw(n){return function(){return n}}function lyt(n,t){return n==null||n!==n?t:n}function of(n){return n}function cw(n){return vb(typeof n=="function"?n:ss(n,y))}function ayt(n){return pb(ss(n,y))}function vyt(n,t){return wb(n,ss(t,y))}function lw(n,t,i){var u=du(t),r=fv(t,u),f,e;return i!=null||br(t)&&(r.length||!u.length)||(i=t,t=n,n=this,r=fv(t,du(t))),f=!(br(i)&&"chain"in i)||!!i.chain,e=gh(n),c(r,function(i){var r=t[i];n[i]=r;e&&(n.prototype[i]=function(){var i=this.__chain__,t,u;return f||i?(t=n(this.__wrapped__),u=t.__actions__=uf(this.__actions__),u.push({func:r,args:arguments,thisArg:n}),t.__chain__=i,t):r.apply(n,it([this.value()],arguments))})}),n}function yyt(){return u._===this&&(u._=ktt),this}function aw(){}function pyt(n){return n=bi(n),ar(function(t){return bb(t,n)})}function ltt(n){return wp(n)?nu(gs(n)):kut(n)}function dyt(t){return function(i){return t==null?n:ol(t,i)}}function vw(){return[]}function yw(){return!1}function gyt(){return{}}function npt(){return""}function tpt(){return!0}function ipt(n,t){var i,r,u;if(n=bi(n),n<1||n>nt)return[];for(i=b,r=nf(n,b),t=pi(t),n-=b,u=ru(r,t);++i<n;)t(i);return u}function rpt(n){return wi(n)?r(n,gs):hf(n)?[n]:uf(dp(yr(n)))}function upt(n){var t=++wtt;return yr(n)+t}function hpt(t){return t&&t.length?rv(t,of,py):n}function cpt(t,i){return t&&t.length?rv(t,pi(i,2),py):n}function lpt(n){return ee(n,of)}function apt(n,t){return ee(n,pi(t,2))}function vpt(t){return t&&t.length?rv(t,of,dy):n}function ypt(t,i){return t&&t.length?rv(t,pi(i,2),dy):n}function kpt(n){return n&&n.length?iu(n,of):0}function dpt(n,t){return n&&n.length?iu(n,pi(t,2)):0}var kc,eh,ay,uv,vy,ip,nk,ek,ok,nd,yv,od,dp,gd,tg,rg,fg,eg,og,sg,lg,ag,vg,yg,pg,ea,gv,tw,nn,tn,yh,un,en,ry,sn,ul,hn,cn,pn,wn,kn,ew,ow,gn,itt,rtt,utt,fy,sw,ett,ott,stt,htt,ctt,att,vtt;h=h==null?u:g.defaults(u.Object(),h,g.pick(u,hh));var bu=h.Array,ha=h.Date,pw=h.Error,ww=h.Function,fl=h.Math,wr=h.Object,ey=h.RegExp,ytt=h.String,lf=h.TypeError,ca=bu.prototype,ptt=ww.prototype,al=wr.prototype,la=h["__core-js_shared__"],aa=ptt.toString,pr=al.hasOwnProperty,wtt=0,bw=function(){var n=/[^.]+$/.exec(la&&la.keys&&la.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),kw=al.toString,btt=aa.call(wr),ktt=u._,dtt=ey("^"+aa.call(pr).replace(lr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),va=wf?h.Buffer:n,ac=h.Symbol,ya=h.Uint8Array,dw=va?va.allocUnsafe:n,pa=ae(wr.getPrototypeOf,wr),gw=wr.create,nb=al.propertyIsEnumerable,wa=ca.splice,tb=ac?ac.isConcatSpreadable:n,vl=ac?ac.iterator:n,bc=ac?ac.toStringTag:n,ba=function(){try{var n=tl(wr,"defineProperty");return n({},"",{}),n}catch(t){}}(),gtt=h.clearTimeout!==u.clearTimeout&&h.clearTimeout,nit=ha&&ha.now!==u.Date.now&&ha.now,tit=h.setTimeout!==u.setTimeout&&h.setTimeout,ka=fl.ceil,da=fl.floor,oy=wr.getOwnPropertySymbols,iit=va?va.isBuffer:n,rit=h.isFinite,uit=ca.join,fit=ae(wr.keys,wr),ku=fl.max,nf=fl.min,eit=ha.now,oit=h.parseInt,ib=fl.random,sit=ca.reverse,sy=tl(h,"DataView"),yl=tl(h,"Map"),hy=tl(h,"Promise"),el=tl(h,"Set"),pl=tl(h,"WeakMap"),wl=tl(wr,"create"),ga=pl&&new pl,bl={},hit=il(sy),cit=il(yl),lit=il(hy),ait=il(el),vit=il(pl),nv=ac?ac.prototype:n,kl=nv?nv.valueOf:n,rb=nv?nv.toString:n;kc=function(){function t(){}return function(i){if(!br(i))return{};if(gw)return gw(i);t.prototype=i;var r=new t;return t.prototype=n,r}}();at.templateSettings={escape:bo,evaluate:ko,interpolate:vu,variable:"",imports:{_:at}};at.prototype=tv.prototype;at.prototype.constructor=at;af.prototype=kc(tv.prototype);af.prototype.constructor=af;vr.prototype=kc(tv.prototype);vr.prototype.constructor=vr;dc.prototype.clear=bit;dc.prototype["delete"]=kit;dc.prototype.get=dit;dc.prototype.has=git;dc.prototype.set=nrt;th.prototype.clear=trt;th.prototype["delete"]=irt;th.prototype.get=rrt;th.prototype.has=urt;th.prototype.set=frt;ih.prototype.clear=ert;ih.prototype["delete"]=ort;ih.prototype.get=srt;ih.prototype.has=hrt;ih.prototype.set=crt;gc.prototype.add=gc.prototype.push=lrt;gc.prototype.has=art;re.prototype.clear=vrt;re.prototype["delete"]=yrt;re.prototype.get=prt;re.prototype.has=wrt;re.prototype.set=brt;eh=vk(ks);ay=vk(yy,!0);uv=yk();vy=yk(!0);ip=ga?function(n,t){return ga.set(n,t),n}:of;nk=ba?function(n,t){return ba(n,"toString",{configurable:!0,enumerable:!1,value:hw(t),writable:!0})}:of;ek=ar;ok=gtt||function(n){return u.clearTimeout(n)};nd=(el&&1/pt(new el([,-0]))[1]==ft)?function(n){return new el(n)}:aw;yv=ga?function(n){return ga.get(n)}:aw;var pp=oy?function(n){return n==null?[]:(n=wr(n),tt(oy(n),function(t){return nb.call(n,t)}))}:vw,ud=oy?function(n){for(var t=[];n;)it(t,pp(n)),n=pa(n);return t}:vw,tf=rf;(sy&&tf(new sy(new ArrayBuffer(1)))!=lt||yl&&tf(new yl)!=l||hy&&tf(hy.resolve())!=cu||el&&tf(new el)!=a||pl&&tf(new pl)!=ii)&&(tf=function(t){var i=rf(t),r=i==d?t.constructor:n,u=r?il(r):"";if(u)switch(u){case hit:return lt;case cit:return l;case lit:return cu;case ait:return a;case vit:return ii}return i});od=la?gh:yw;var ad=yd(ip),fa=tit||function(n,t){return u.setTimeout(n,t)},kp=yd(nk);dp=fet(function(n){var t=[];return ts.test(n)&&t.push(""),n.replace(is,function(n,i,r,u){t.push(r?u.replace(hs,"$1"):i||n)}),t});var pet=ar(function(n,t){return tu(n)?gl(n,gu(t,1,tu,!0)):[]}),wet=ar(function(t,i){var r=yf(i);return tu(r)&&(r=n),tu(t)?gl(t,gu(i,1,tu,!0),pi(r,2)):[]}),bet=ar(function(t,i){var r=yf(i);return tu(r)&&(r=n),tu(t)?gl(t,gu(i,1,tu,!0),n,r):[]});var oot=ar(function(n){var t=r(n,ep);return t.length&&t[0]===n[0]?wy(t):[]}),sot=ar(function(t){var u=yf(t),i=r(t,ep);return u===yf(i)?u=n:i.pop(),i.length&&i[0]===t[0]?wy(i,pi(u,2)):[]}),hot=ar(function(t){var i=yf(t),u=r(t,ep);return i=typeof i=="function"?i:n,i&&u.pop(),u.length&&u[0]===t[0]?wy(u,n,i):[]});gd=ar(ng);tg=sh(function(n,t){var i=n==null?0:n.length,u=ly(n,t);return gb(n,r(t,function(n){return lh(n,i)?+n:n}).sort(ck)),u});var hst=ar(function(n){return vc(gu(n,1,tu,!0))}),cst=ar(function(t){var i=yf(t);return tu(i)&&(i=n),vc(gu(t,1,tu,!0),pi(i,2))}),lst=ar(function(t){var i=yf(t);return i=typeof i=="function"?i:n,vc(gu(t,1,tu,!0),n,i)});var pst=ar(function(n,t){return tu(n)?gl(n,t):[]}),wst=ar(function(n){return fp(tt(n,tu))}),bst=ar(function(t){var i=yf(t);return tu(i)&&(i=n),fp(tt(t,tu),pi(i,2))}),kst=ar(function(t){var i=yf(t);return i=typeof i=="function"?i:n,fp(tt(t,tu),n,i)}),dst=ar(nw);rg=ar(function(t){var r=t.length,i=r>1?t[r-1]:n;return i=typeof i=="function"?(t.pop(),i):n,ig(t,i)});fg=sh(function(t){var r=t.length,u=r?t[0]:0,i=this.__wrapped__,f=function(n){return ly(n,t)};return r>1||this.__actions__.length||!(i instanceof vr)||!lh(u)?this.thru(f):(i=i.slice(u,+u+(r?1:0)),i.__actions__.push({func:kv,args:[f],thisArg:n}),new af(i,this.__chain__).thru(function(t){return r&&!t.length&&t.push(n),t}))});eg=hv(function(n,t,i){pr.call(n,i)?++n[i]:rh(n,i,1)});og=wk(wd);sg=wk(bd);lg=hv(function(n,t,i){pr.call(n,i)?n[i].push(t):rh(n,i,[t])});ag=ar(function(n,t,i){var u=-1,e=typeof t=="function",r=ef(n)?bu(n.length):[];return eh(n,function(n){r[++u]=e?f(t,n,i):na(n,t,i)}),r});vg=hv(function(n,t,i){rh(n,i,t)});yg=hv(function(n,t,i){n[i?0:1].push(t)},function(){return[[],[]]});pg=ar(function(n,t){if(n==null)return[];var i=t.length;return i>1&&ff(n,t[0],t[1])?t=[]:i>2&&ff(t[0],t[1],t[2])&&(t=[t[0]]),kb(n,gu(t,1),[])});ea=nit||function(){return u.Date.now()};gv=ar(function(n,t,i){var r=s,u;return i.length&&(u=rt(i,cl(gv)),r|=w),oh(n,r,t,i,u)});tw=ar(function(n,t,i){var r=s|ut,u;return i.length&&(u=rt(i,cl(tw)),r|=w),oh(t,r,n,i,u)});nn=ar(function(n,t){return sb(n,1,t)});tn=ar(function(n,t,i){return sb(n,pf(t)||0,i)});ny.Cache=ih;var ect=ek(function(n,t){t=t.length==1&&wi(t[0])?r(t[0],e(pi())):r(gu(t,1),e(pi()));var i=t.length;return ar(function(r){for(var u=-1,e=nf(r.length,i);++u<e;)r[u]=t[u].call(this,r[u]);return f(n,this,r)})}),iw=ar(function(t,i){var r=rt(i,cl(iw));return oh(t,w,n,i,r)}),rn=ar(function(t,i){var r=rt(i,cl(rn));return oh(t,ht,n,i,r)}),oct=sh(function(t,i){return oh(t,bt,n,n,n,i)});var dct=vv(py),gct=vv(function(n,t){return n>=t}),rl=lb(function(){return arguments}())?lb:function(n){return kr(n)&&pr.call(n,"callee")&&!nb.call(n,"callee")},wi=bu.isArray,nlt=bf?e(bf):sut;yh=iit||yw;un=kf?e(kf):hut;en=df?e(df):lut;ry=gf?e(gf):aut;sn=ne?e(ne):vut;ul=te?e(te):yut;hn=vv(dy);cn=vv(function(n,t){return n<=t});var klt=sl(function(n,t){if(ua(t)||ef(t)){ds(t,du(t),n);return}for(var i in t)pr.call(t,i)&&dl(n,i,t[i])}),yn=sl(function(n,t){ds(t,cf(t),n)}),sa=sl(function(n,t,i,r){ds(t,cf(t),n,r)}),dlt=sl(function(n,t,i,r){ds(t,du(t),n,r)}),glt=sh(ly);pn=ar(function(t){return t.push(n,lp),f(sa,n,t)});wn=ar(function(t){return t.push(n,id),f(bn,n,t)});var cat=kk(function(n,t,i){n[t]=i},hw(of)),lat=kk(function(n,t,i){pr.call(n,t)?n[t].push(i):n[t]=[i]},pi),aat=ar(na);var pat=sl(function(n,t,i){ev(n,t,i)}),bn=sl(function(n,t,i,r){ev(n,t,i,r)}),wat=sh(function(n,t){var i={},u,f;if(n==null)return i;for(u=!1,t=r(t,function(t){return t=pc(t,n),u||(u=t.length>1),t}),ds(n,vp(n),i),u&&(i=ss(i,y|eu|et,yft)),f=t.length;f--;)up(i,t[f]);return i});kn=sh(function(n,t){return n==null?{}:but(n,t)});ew=td(du);ow=td(cf);gn=hl(function(n,t,i){return t=t.toLowerCase(),n+(i?ntt(t):t)});var lvt=hl(function(n,t,i){return n+(i?"-":"")+t.toLowerCase()}),avt=hl(function(n,t,i){return n+(i?" ":"")+t.toLowerCase()}),vvt=pk("toLowerCase");itt=hl(function(n,t,i){return n+(i?"_":"")+t.toLowerCase()});rtt=hl(function(n,t,i){return n+(i?" ":"")+fy(t)});utt=hl(function(n,t,i){return n+(i?" ":"")+t.toUpperCase()});fy=pk("toUpperCase");sw=ar(function(t,i){try{return f(t,n,i)}catch(r){return rw(r)?r:new pw(r)}});ett=sh(function(n,t){return c(t,function(t){t=gs(t);rh(n,t,gv(n[t],n))}),n});ott=bk();stt=bk(!0);htt=ar(function(n,t){return function(i){return na(i,n,t)}});ctt=ar(function(n,t){return function(i){return na(n,i,t)}});var wyt=hp(r),byt=hp(ie),kyt=hp(gr);att=dk();vtt=dk(!0);var fpt=lv(function(n,t){return n+t},0),ept=cp("ceil"),opt=lv(function(n,t){return n/t},1),spt=cp("floor");var ppt=lv(function(n,t){return n*t},1),wpt=cp("round"),bpt=lv(function(n,t){return n-t},0);return at.after=rct,at.ary=wg,at.assign=klt,at.assignIn=yn,at.assignInWith=sa,at.assignWith=dlt,at.at=glt,at.before=bg,at.bind=gv,at.bindAll=ett,at.bindKey=tw,at.castArray=vct,at.chain=ug,at.chunk=aet,at.compact=vet,at.concat=yet,at.cond=hyt,at.conforms=cyt,at.constant=hw,at.countBy=eg,at.create=nat,at.curry=kg,at.curryRight=dg,at.debounce=gg,at.defaults=pn,at.defaultsDeep=wn,at.defer=nn,at.delay=tn,at.difference=pet,at.differenceBy=wet,at.differenceWith=bet,at.drop=ket,at.dropRight=det,at.dropRightWhile=get,at.dropWhile=not,at.fill=tot,at.filter=cht,at.flatMap=lht,at.flatMapDeep=aht,at.flatMapDepth=vht,at.flatten=kd,at.flattenDeep=iot,at.flattenDepth=rot,at.flip=uct,at.flow=ott,at.flowRight=stt,at.fromPairs=uot,at.functions=oat,at.functionsIn=sat,at.groupBy=lg,at.initial=eot,at.intersection=oot,at.intersectionBy=sot,at.intersectionWith=hot,at.invert=cat,at.invertBy=lat,at.invokeMap=ag,at.iteratee=cw,at.keyBy=vg,at.keys=du,at.keysIn=cf,at.map=dv,at.mapKeys=vat,at.mapValues=yat,at.matches=ayt,at.matchesProperty=vyt,at.memoize=ny,at.merge=pat,at.mergeWith=bn,at.method=htt,at.methodOf=ctt,at.mixin=lw,at.negate=ty,at.nthArg=pyt,at.omit=wat,at.omitBy=bat,at.once=fct,at.orderBy=pht,at.over=wyt,at.overArgs=ect,at.overEvery=byt,at.overSome=kyt,at.partial=iw,at.partialRight=rn,at.partition=yg,at.pick=kn,at.pickBy=dn,at.property=ltt,at.propertyOf=dyt,at.pull=gd,at.pullAll=ng,at.pullAllBy=vot,at.pullAllWith=yot,at.pullAt=tg,at.range=att,at.rangeRight=vtt,at.rearg=oct,at.reject=kht,at.remove=pot,at.rest=sct,at.reverse=gp,at.sampleSize=ght,at.set=dat,at.setWith=gat,at.shuffle=nct,at.slice=wot,at.sortBy=pg,at.sortedUniq=ist,at.sortedUniqBy=rst,at.split=gvt,at.spread=hct,at.tail=ust,at.take=fst,at.takeRight=est,at.takeRightWhile=ost,at.takeWhile=sst,at.tap=tht,at.throttle=cct,at.thru=kv,at.toArray=ln,at.toPairs=ew,at.toPairsIn=ow,at.toPath=rpt,at.toPlainObject=vn,at.transform=nvt,at.unary=lct,at.union=hst,at.unionBy=cst,at.unionWith=lst,at.uniq=ast,at.uniqBy=vst,at.uniqWith=yst,at.unset=tvt,at.unzip=nw,at.unzipWith=ig,at.update=ivt,at.updateWith=rvt,at.values=ll,at.valuesIn=uvt,at.without=pst,at.words=ftt,at.wrap=act,at.xor=wst,at.xorBy=bst,at.xorWith=kst,at.zip=dst,at.zipObject=gst,at.zipObjectDeep=nht,at.zipWith=rg,at.entries=ew,at.entriesIn=ow,at.extend=yn,at.extendWith=sa,lw(at,at),at.add=fpt,at.attempt=sw,at.camelCase=gn,at.capitalize=ntt,at.ceil=ept,at.clamp=fvt,at.clone=yct,at.cloneDeep=wct,at.cloneDeepWith=bct,at.cloneWith=pct,at.conformsTo=kct,at.deburr=ttt,at.defaultTo=lyt,at.divide=opt,at.endsWith=svt,at.eq=nh,at.escape=hvt,at.escapeRegExp=cvt,at.every=hht,at.find=og,at.findIndex=wd,at.findKey=tat,at.findLast=sg,at.findLastIndex=bd,at.findLastKey=iat,at.floor=spt,at.forEach=hg,at.forEachRight=cg,at.forIn=rat,at.forInRight=uat,at.forOwn=fat,at.forOwnRight=eat,at.get=uw,at.gt=dct,at.gte=gct,at.has=hat,at.hasIn=fw,at.head=dd,at.identity=of,at.includes=yht,at.indexOf=fot,at.inRange=evt,at.invoke=aat,at.isArguments=rl,at.isArray=wi,at.isArrayBuffer=nlt,at.isArrayLike=ef,at.isArrayLikeObject=tu,at.isBoolean=tlt,at.isBuffer=yh,at.isDate=un,at.isElement=ilt,at.isEmpty=rlt,at.isEqual=ult,at.isEqualWith=flt,at.isError=rw,at.isFinite=elt,at.isFunction=gh,at.isInteger=fn,at.isLength=iy,at.isMap=en,at.isMatch=olt,at.isMatchWith=slt,at.isNaN=hlt,at.isNative=clt,at.isNil=alt,at.isNull=llt,at.isNumber=on,at.isObject=br,at.isObjectLike=kr,at.isPlainObject=oa,at.isRegExp=ry,at.isSafeInteger=vlt,at.isSet=sn,at.isString=uy,at.isSymbol=hf,at.isTypedArray=ul,at.isUndefined=ylt,at.isWeakMap=plt,at.isWeakSet=wlt,at.join=cot,at.kebabCase=lvt,at.last=yf,at.lastIndexOf=lot,at.lowerCase=avt,at.lowerFirst=vvt,at.lt=hn,at.lte=cn,at.max=hpt,at.maxBy=cpt,at.mean=lpt,at.meanBy=apt,at.min=vpt,at.minBy=ypt,at.stubArray=vw,at.stubFalse=yw,at.stubObject=gyt,at.stubString=npt,at.stubTrue=tpt,at.multiply=ppt,at.nth=aot,at.noConflict=yyt,at.noop=aw,at.now=ea,at.pad=yvt,at.padEnd=pvt,at.padStart=wvt,at.parseInt=bvt,at.random=ovt,at.reduce=wht,at.reduceRight=bht,at.repeat=kvt,at.replace=dvt,at.result=kat,at.round=wpt,at.runInContext=fu,at.sample=dht,at.size=tct,at.snakeCase=itt,at.some=ict,at.sortedIndex=bot,at.sortedIndexBy=kot,at.sortedIndexOf=dot,at.sortedLastIndex=got,at.sortedLastIndexBy=nst,at.sortedLastIndexOf=tst,at.startCase=rtt,at.startsWith=nyt,at.subtract=bpt,at.sum=kpt,at.sumBy=dpt,at.template=tyt,at.times=ipt,at.toFinite=cc,at.toInteger=bi,at.toLength=an,at.toLower=iyt,at.toNumber=pf,at.toSafeInteger=blt,at.toString=yr,at.toUpper=ryt,at.trim=uyt,at.trimEnd=fyt,at.trimStart=eyt,at.truncate=oyt,at.unescape=syt,at.uniqueId=upt,at.upperCase=utt,at.upperFirst=fy,at.each=hg,at.eachRight=cg,at.first=dd,lw(at,function(){var n={};return ks(at,function(t,i){pr.call(at.prototype,i)||(n[i]=t)}),n}(),{chain:!1}),at.VERSION=ye,c(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){at[n].placeholder=at}),c(["drop","take"],function(t,i){vr.prototype[t]=function(r){r=r===n?1:ku(bi(r),0);var u=this.__filtered__&&!i?new vr(this):this.clone();return u.__filtered__?u.__takeCount__=nf(r,u.__takeCount__):u.__views__.push({size:nf(r,b),type:t+(u.__dir__<0?"Right":"")}),u};vr.prototype[t+"Right"]=function(n){return this.reverse()[t](n).reverse()}}),c(["filter","map","takeWhile"],function(n,t){var i=t+1,r=i==su||i==to;vr.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:pi(n,3),type:i}),t.__filtered__=t.__filtered__||r,t}}),c(["head","last"],function(n,t){var i="take"+(t?"Right":"");vr.prototype[n]=function(){return this[i](1).value()[0]}}),c(["initial","tail"],function(n,t){var i="drop"+(t?"":"Right");vr.prototype[n]=function(){return this.__filtered__?new vr(this):this[i](1)}}),vr.prototype.compact=function(){return this.filter(of)},vr.prototype.find=function(n){return this.filter(n).head()},vr.prototype.findLast=function(n){return this.reverse().find(n)},vr.prototype.invokeMap=ar(function(n,t){return typeof n=="function"?new vr(this):this.map(function(i){return na(i,n,t)})}),vr.prototype.reject=function(n){return this.filter(ty(pi(n)))},vr.prototype.slice=function(t,i){t=bi(t);var r=this;return r.__filtered__&&(t>0||i<0)?new vr(r):(t<0?r=r.takeRight(-t):t&&(r=r.drop(t)),i!==n&&(i=bi(i),r=i<0?r.dropRight(-i):r.take(i-t)),r)},vr.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},vr.prototype.toArray=function(){return this.take(b)},ks(vr.prototype,function(t,i){var e=/^(?:filter|find|map|reject)|While$/.test(i),r=/^(?:head|last)$/.test(i),u=at[r?"take"+(i=="last"?"Right":""):i],f=r||/^find/.test(i);u&&(at.prototype[i]=function(){var o=this.__wrapped__,s=r?[1]:arguments,h=o instanceof vr,a=s[0],c=h||wi(o),v=function(n){var t=u.apply(at,it([n],s));return r&&l?t[0]:t},i;c&&e&&typeof a=="function"&&a.length!=1&&(h=c=!1);var l=this.__chain__,w=!!this.__actions__.length,y=f&&!l,p=h&&!w;return!f&&c?(o=p?o:new vr(this),i=t.apply(o,s),i.__actions__.push({func:kv,args:[v],thisArg:n}),new af(i,l)):y&&p?t.apply(this,s):(i=this.thru(v),y?r?i.value()[0]:i.value():i)})}),c(["pop","push","shift","sort","splice","unshift"],function(n){var t=ca[n],i=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",r=/^(?:pop|shift)$/.test(n);at.prototype[n]=function(){var u=arguments,n;return r&&!this.__chain__?(n=this.value(),t.apply(wi(n)?n:[],u)):this[i](function(n){return t.apply(wi(n)?n:[],u)})}}),ks(vr.prototype,function(n,t){var i=at[t],r,u;i&&(r=i.name+"",u=bl[r]||(bl[r]=[]),u.push({name:t,func:i}))}),bl[cv(n,ut).name]=[{name:"wrapper",func:n}],vr.prototype.clone=yit,vr.prototype.reverse=pit,vr.prototype.value=wit,at.prototype.at=fg,at.prototype.chain=iht,at.prototype.commit=rht,at.prototype.next=uht,at.prototype.plant=eht,at.prototype.reverse=oht,at.prototype.toJSON=at.prototype.valueOf=at.prototype.value=sht,at.prototype.first=at.prototype.head,vl&&(at.prototype[vl]=fht),at};g=fu();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(u._=g,define(function(){return g})):bi?((bi.exports=g)._=g,br._=g):u._=g}).call(this);
var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        "use strict";
        class Attributes {
            constructor(page) {
                Validation.ensureNotNullOrUndefined(page, "page");
                this.page = page;
            }
            get(attributeName, required = true) {
                let attribute = this.page.getAttribute(attributeName);
                if (attribute) {
                    return attribute;
                }
                let msg = "The specified attribute could not be found: " + attributeName;
                if (required) {
                    throw new Error(msg);
                }
                Crm.Diagnostics.log.Message(msg);
                return null;
            }
            // requirement level
            setOptional(attributeNames) {
                this.setRequiredLevel(attributeNames, Crm.AttributeRequiredLevels.None);
            }
            setRequired(attributeNames) {
                this.setRequiredLevel(attributeNames, Crm.AttributeRequiredLevels.Required);
            }
            setRecommended(attributeNames) {
                this.setRequiredLevel(attributeNames, Crm.AttributeRequiredLevels.Recommended);
            }
            setRequiredLevel(attributeNames, requirementLevel) {
                if (Crm.Diagnostics.trace) {
                    Crm.Diagnostics.printArguments("setRequirementLevel", attributeNames, requirementLevel);
                }
                if (Array.isArray(attributeNames)) {
                    for (let i = 0; i < attributeNames.length; i++) {
                        let attribute = this.get(attributeNames[i], false);
                        if (attribute) {
                            attribute.setRequiredLevel(requirementLevel);
                        }
                    }
                }
                else {
                    Crm.Diagnostics.log.Warning("Attributes.setRequirementLevel: Invalid argument. An array was expected.");
                }
            }
            setRequiredOrOptional(attributeName, required, attributeRequired = false) {
                let attribute = this.get(attributeName, attributeRequired);
                if (attribute) {
                    attribute.setRequiredLevel(required ? Crm.AttributeRequiredLevels.Required : Crm.AttributeRequiredLevels.None);
                }
            }
            // options
            hideOptions(attribute, hide) {
                let options = attribute.getOptions();
                attribute
                    .controls
                    .forEach((control) => {
                    for (let i = 0; i < options.length; i++) {
                        let option = options[i];
                        let value = option.value;
                        if (hide === undefined || hide(value)) {
                            control.removeOption(value);
                        }
                    }
                });
            }
            // lookup
            getLookupValue(attributeName, required = true) {
                let attribute = this.get(attributeName, required);
                if (!attribute) {
                    return null;
                }
                let lookup = attribute.getValue();
                if (!lookup || !lookup.length) {
                    return null;
                }
                return lookup[0];
            }
            setLookupValue(attributeName, entityType, name, id, required = true) {
                let attribute = this.get(attributeName, required);
                if (!attribute) {
                    return;
                }
                let value = !id ? null : [{
                        id: `{${Crm.Core.parseIdentifier(id)}}`,
                        name: name,
                        entityType: entityType
                    }];
                attribute.setValue(value);
            }
            // notifications
            showNotification(attribute, message, messageId) {
                Validation.ensureNotNullOrUndefined(attribute, "attribute");
                attribute
                    .controls
                    .forEach((c) => {
                    c.setNotification(message, messageId);
                });
            }
            hideNotification(attribute, messageId) {
                Validation.ensureNotNullOrUndefined(attribute, "attribute");
                attribute
                    .controls
                    .forEach((c) => {
                    c.clearNotification(messageId);
                });
            }
        }
        Crm.Attributes = Attributes;
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        "use strict";
        Crm.componentName = (prefix, name) => `${prefix}_${name}`;
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var Publishers;
        (function (Publishers) {
            "use strict";
            Publishers.logEntry = "cc";
        })(Publishers = Crm.Publishers || (Crm.Publishers = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        "use strict";
        class FormNotificationTypes {
        }
        FormNotificationTypes.Error = "ERROR";
        FormNotificationTypes.Warning = "WARNING";
        FormNotificationTypes.Information = "INFO";
        Crm.FormNotificationTypes = FormNotificationTypes;
        class ClientType {
        }
        ClientType.Browser = "Web";
        ClientType.Outlook = "Outlook";
        ClientType.Mobile = "Mobile";
        Crm.ClientType = ClientType;
        class AttributeRequiredLevels {
        }
        AttributeRequiredLevels.None = "none";
        AttributeRequiredLevels.Required = "required";
        AttributeRequiredLevels.Recommended = "recommended";
        Crm.AttributeRequiredLevels = AttributeRequiredLevels;
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        "use strict";
        class Controls {
            constructor(page) {
                Validation.ensureNotNullOrUndefined(page, "page");
                this.page = page;
                this.attributes = new Crm.Attributes(page);
            }
            get(controlName, required = true) {
                let control = this.page.getControl(controlName);
                if (control) {
                    return control;
                }
                let msg = `The specified control could not be found: ${controlName}`;
                if (required) {
                    throw new Error(msg);
                }
                Crm.Diagnostics.log.Message(msg);
                return null;
            }
            // enable, disable
            disable(attributeNames, applyToAll = true) {
                this.setDisabled(attributeNames, true, applyToAll);
            }
            enable(attributeNames, applyToAll = true) {
                this.setDisabled(attributeNames, false, applyToAll);
            }
            setDisabled(attributeNames, disabled, applyToAll = true) {
                if (Crm.Diagnostics.trace) {
                    Crm.Diagnostics.printArguments("setDisabled", attributeNames, disabled);
                }
                if (Array.isArray(attributeNames)) {
                    for (let i = 0; i < attributeNames.length; i++) {
                        if (applyToAll) {
                            let attribute = this.attributes.get(attributeNames[i], false);
                            if (attribute) {
                                attribute.controls.forEach((c) => c.setDisabled(disabled));
                            }
                        }
                        else {
                            let control = this.get(attributeNames[i], false);
                            if (control) {
                                control.setDisabled(disabled);
                            }
                        }
                    }
                }
                else {
                    Crm.Diagnostics.log.Warning("Controls.setDisabled: Invalid argument. An array was expected.");
                }
            }
            // show, hide
            show(attributeNames, condition = true, applyToAll = true) {
                if (condition) {
                    this.setVisible(attributeNames, true, applyToAll);
                }
            }
            hide(attributeNames, condition = true, applyToAll = true) {
                if (condition) {
                    this.setVisible(attributeNames, false, applyToAll);
                }
            }
            setVisible(attributeNames, value, applyToAll = true) {
                if (Crm.Diagnostics.trace) {
                    Crm.Diagnostics.printArguments("setVisible", attributeNames, value);
                }
                if (Array.isArray(attributeNames)) {
                    for (let i = 0; i < attributeNames.length; i++) {
                        let attribute = this.attributes.get(attributeNames[i], false);
                        if (applyToAll && attribute) {
                            attribute.controls.forEach((c) => c.setVisible(value));
                        }
                        else {
                            let control = this.get(attributeNames[i], false);
                            if (control) {
                                control.setVisible(value);
                            }
                        }
                    }
                }
                else {
                    Crm.Diagnostics.log.Warning("Invalid argument. An array was expected.");
                }
            }
        }
        Crm.Controls = Controls;
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var Diagnostics;
        (function (Diagnostics) {
            "use strict";
            Diagnostics.debug = true;
            Diagnostics.trace = true;
            class ConsoleLogger {
                constructor(prefix) {
                    this._prefix = prefix;
                }
                Error(message, error) {
                    if (Diagnostics.debug) {
                        debugger;
                    }
                    let entry = createLogEntry(this._prefix, message, error);
                    console.error(entry);
                }
                Message(message) {
                    console.log(message);
                }
                Warning(message) {
                    console.warn(message);
                }
            }
            class LogEntryLogger {
                constructor(prefix) {
                    this._prefix = prefix;
                }
                Error(message, error) {
                    if (Diagnostics.debug) {
                        debugger;
                    }
                    let entry = createLogEntry(this._prefix, message, error);
                    console.error(entry);
                    Dynamics.Crm.Data.unitOfWork
                        .GetLogEntryRepository(this._prefix)
                        .Create(entry);
                }
                Message(message) {
                    console.log(message);
                }
                Warning(message) {
                    console.warn(message);
                }
            }
            // public functions
            function useLogEntryLogger(prefix) {
                Diagnostics.log = new LogEntryLogger(prefix || Crm.Publishers.logEntry);
            }
            Diagnostics.useLogEntryLogger = useLogEntryLogger;
            function useConsoleLogger(prefix) {
                Diagnostics.log = new ConsoleLogger(prefix || Crm.Publishers.logEntry);
            }
            Diagnostics.useConsoleLogger = useConsoleLogger;
            function printArguments(...args) {
                console.log(`Function ${arguments[0]} called with arguments: {`);
                for (let i = 1; i < arguments.length; i++) {
                    console.log(arguments[i]);
                }
                console.log("}");
            }
            Diagnostics.printArguments = printArguments;
            // private function
            function createLogEntry(prefix, message, error) {
                let entityName = getEntityName();
                let entityId = getEntityId();
                let formType = getFormType();
                let clientType = getClientType();
                let formFactor = getFormFactor();
                let stack = error.stack || error.stacktrace || "<none>";
                let desc = error.description || "<none>";
                let source = `JavaScript::${clientType},${formFactor},${formType}:${entityName}(${entityId})`;
                let description = `Stack: ${stack}\nDescription: ${desc}`;
                let entry = {
                    type: Crm.Data.Schema.LogEntryEntity.type(prefix)
                };
                let name = error.type ? `${error.type}:${message}` : message;
                let msg = message === error.message ? message : (`${message}. ${error.message}`.trim());
                entry[Crm.Data.Schema.LogEntryEntity.nameField(prefix)]
                    = Validation.Strings.left(name, 300);
                entry[Crm.Data.Schema.LogEntryEntity.messageField(prefix)]
                    = Validation.Strings.left(msg, 5000);
                entry[Crm.Data.Schema.LogEntryEntity.descriptionField(prefix)]
                    = Validation.Strings.right(description, 1048576);
                entry[Crm.Data.Schema.LogEntryEntity.sourceField(prefix)]
                    = Validation.Strings.left(source, 500);
                entry[Crm.Data.Schema.LogEntryEntity.typeField(prefix)]
                    = Dynamics.Crm.Core.LogEntryType.Error;
                return entry;
            }
            function getEntityName() {
                try {
                    return Xrm["Page"].data.entity.getEntityName();
                }
                catch (e) {
                    if (Diagnostics.trace && Diagnostics.log) {
                        Diagnostics.log.Warning(e);
                    }
                    return "UnknownEntity";
                }
            }
            function getEntityId() {
                try {
                    return Xrm["Page"].data.entity.getId();
                }
                catch (e) {
                    if (Diagnostics.trace && Diagnostics.log) {
                        Diagnostics.log.Warning(e);
                    }
                    return "";
                }
            }
            function getFormType() {
                try {
                    return Xrm["Page"].ui.getFormType().toString();
                }
                catch (e) {
                    if (Diagnostics.trace && Diagnostics.log) {
                        Diagnostics.log.Warning(e);
                    }
                    return "";
                }
            }
            function getFormFactor() {
                try {
                    return Xrm.Utility.getGlobalContext().client.getFormFactor();
                }
                catch (e) {
                    if (Diagnostics.trace && Diagnostics.log) {
                        Diagnostics.log.Warning(e);
                    }
                    return -1;
                }
            }
            function getClientType() {
                try {
                    return Xrm.Utility.getGlobalContext().client.getClient();
                }
                catch (e) {
                    if (Diagnostics.trace && Diagnostics.log) {
                        Diagnostics.log.Warning(e);
                    }
                    return "unknown";
                }
            }
            // variables
            useLogEntryLogger();
        })(Diagnostics = Crm.Diagnostics || (Crm.Diagnostics = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var Core;
        (function (Core) {
            "use strict";
            function parseIdentifier(idStr) {
                if (idStr === undefined || idStr === null) {
                    return "";
                }
                return idStr.replace("{", "").replace("}", "").toUpperCase();
            }
            Core.parseIdentifier = parseIdentifier;
            function identifiersAreEqual(id, otherId) {
                if (!id || !otherId) {
                    return false;
                }
                return parseIdentifier(id) === parseIdentifier(otherId);
            }
            Core.identifiersAreEqual = identifiersAreEqual;
        })(Core = Crm.Core || (Crm.Core = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        "use strict";
        let FormType;
        (function (FormType) {
            FormType[FormType["Undefined"] = 0] = "Undefined";
            FormType[FormType["Create"] = 1] = "Create";
            FormType[FormType["Update"] = 2] = "Update";
            FormType[FormType["ReadOnly"] = 3] = "ReadOnly";
            FormType[FormType["Disabled"] = 4] = "Disabled";
            FormType[FormType["QuickCreate"] = 5] = "QuickCreate";
            FormType[FormType["BulkEdit"] = 6] = "BulkEdit";
            FormType[FormType["ReadOptimized"] = 11] = "ReadOptimized";
        })(FormType = Crm.FormType || (Crm.FormType = {}));
        let FormFactor;
        (function (FormFactor) {
            FormFactor[FormFactor["Unknown"] = 0] = "Unknown";
            FormFactor[FormFactor["Desktop"] = 1] = "Desktop";
            FormFactor[FormFactor["Tablet"] = 2] = "Tablet";
            FormFactor[FormFactor["Phone"] = 3] = "Phone";
        })(FormFactor = Crm.FormFactor || (Crm.FormFactor = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var Core;
        (function (Core) {
            "use strict";
            let AutoNumberingRuleType;
            (function (AutoNumberingRuleType) {
                AutoNumberingRuleType[AutoNumberingRuleType["Global"] = 0] = "Global";
                AutoNumberingRuleType[AutoNumberingRuleType["GlobalPerDay"] = 3] = "GlobalPerDay";
                AutoNumberingRuleType[AutoNumberingRuleType["GlobalPerYear"] = 1] = "GlobalPerYear";
                AutoNumberingRuleType[AutoNumberingRuleType["Parented"] = 2] = "Parented";
                AutoNumberingRuleType[AutoNumberingRuleType["ParentedPerDay"] = 5] = "ParentedPerDay";
                AutoNumberingRuleType[AutoNumberingRuleType["ParentedPerYear"] = 4] = "ParentedPerYear";
            })(AutoNumberingRuleType = Core.AutoNumberingRuleType || (Core.AutoNumberingRuleType = {}));
            let GlobalSettingType;
            (function (GlobalSettingType) {
                GlobalSettingType[GlobalSettingType["String"] = 0] = "String";
                GlobalSettingType[GlobalSettingType["Int"] = 1] = "Int";
                GlobalSettingType[GlobalSettingType["Decimal"] = 2] = "Decimal";
                GlobalSettingType[GlobalSettingType["Boolean"] = 3] = "Boolean";
                GlobalSettingType[GlobalSettingType["Reference"] = 4] = "Reference";
            })(GlobalSettingType = Core.GlobalSettingType || (Core.GlobalSettingType = {}));
            let LogEntryType;
            (function (LogEntryType) {
                LogEntryType[LogEntryType["Trace"] = 0] = "Trace";
                LogEntryType[LogEntryType["Warning"] = 1] = "Warning";
                LogEntryType[LogEntryType["Error"] = 2] = "Error";
                LogEntryType[LogEntryType["Info"] = 3] = "Info";
            })(LogEntryType = Core.LogEntryType || (Core.LogEntryType = {}));
        })(Core = Crm.Core || (Crm.Core = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        "use strict";
        class Forms {
            constructor(page) {
                Validation.ensureNotNullOrUndefined(page, "page");
                this.page = page;
                this.attributes = new Crm.Attributes(page);
                this.controls = new Crm.Controls(page);
                this.nav = new Crm.Navigation(page);
                this.notify = new Crm.Notifications(page);
                this.tabs = new Crm.Tabs(page);
                this.sections = new Crm.Sections(page);
                this.tasks = new Crm.Tasks(page);
            }
            getClientType() {
                return Xrm.Utility.getGlobalContext().client.getClient();
            }
            getEntityId() {
                try {
                    return Crm.Core.parseIdentifier(this.page.data.entity.getId());
                }
                catch (e) {
                    throw new Error("Unable to retrieve entity id");
                }
            }
            getEntityName() {
                try {
                    return this.page.data.entity.getEntityName();
                }
                catch (e) {
                    throw new Error("Unable to retrieve entity name");
                }
            }
            getEntitySetName() {
                try {
                    return Xrm.Utility.getEntitySetName(this.getEntityName());
                }
                catch (e) {
                    throw new Error("Unable to retrieve entity set name");
                }
            }
            getFormType() {
                return this.page.ui.getFormType();
            }
            getFormFactor() {
                if (!Xrm.Utility.getGlobalContext().client.getFormFactor) {
                    return Crm.FormFactor.Unknown;
                }
                return Xrm.Utility.getGlobalContext().client.getFormFactor();
            }
            getIsDesktop() {
                let formFactor = this.getFormFactor();
                if (formFactor !== Crm.FormFactor.Unknown) {
                    return formFactor === Crm.FormFactor.Desktop;
                }
                return this.getClientType() !== Crm.ClientType.Mobile;
            }
            getIsDirty() {
                return this.page.data.entity.getIsDirty();
            }
            isCreateForm() {
                return this.getFormType() === Crm.FormType.Create;
            }
            isUpdateForm() {
                return this.getFormType() === Crm.FormType.Update;
            }
            isBulkEditForm() {
                return this.getFormType() === Crm.FormType.BulkEdit;
            }
            supportsIFrames() {
                return this.getIsDesktop();
            }
            current() {
                // The formSelectoritems collection does not exist and the formSelector.getCurrentItem method isn't supported for Dynamics 365 mobile clients (phones and tablets) and the interactive service hub.
                // https://msdn.microsoft.com/en-in/library/gg327828.aspx#formSelector
                if (!this.page.ui ||
                    !this.page.ui.formSelector ||
                    !this.page.ui.formSelector.items) {
                    return null;
                }
                // When only one form is available this method will return null.
                return this.page.ui.formSelector.getCurrentItem()
                    || this.page.ui.formSelector.items.get(0)
                    || null;
            }
            find(label) {
                if (!this.page.ui ||
                    !this.page.ui.formSelector ||
                    !this.page.ui.formSelector.items) {
                    return null;
                }
                let filter = this.page.ui.formSelector.items
                    .get()
                    .filter((f) => f.getLabel() === label);
                return filter[0] || null;
            }
        }
        Crm.Forms = Forms;
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));


var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        "use strict";
        class Navigation {
            constructor(page) {
                Validation.ensureNotNullOrUndefined(page, "page");
                this.page = page;
            }
            get(itemName, required = false) {
                // This collection does not exist with Microsoft Dynamics 365 for tablets.
                // https://msdn.microsoft.com/en-in/library/gg327828.aspx#BKMK_navigation
                if (!this.page.ui ||
                    !this.page.ui.navigation ||
                    !this.page.ui.navigation.items) {
                    return null;
                }
                let item = this.page.ui.navigation.items.get(itemName);
                if (item) {
                    return item;
                }
                let msg = "The specified navigation item could not be found: " + itemName;
                if (required) {
                    throw new Error(msg);
                }
                Crm.Diagnostics.log.Message(msg);
                return null;
            }
            show(items) {
                this.setVisible(items, true);
            }
            hide(items) {
                this.setVisible(items, false);
            }
            setVisible(items, visible) {
                if (Crm.Diagnostics.trace) {
                    Crm.Diagnostics.printArguments("Navigation.setVisible", items);
                }
                if (Array.isArray(items)) {
                    let value = !!visible;
                    for (let i = 0; i < items.length; i++) {
                        let item = this.get(items[i]);
                        if (!item) {
                            continue;
                        }
                        if (item.getVisible() !== value) {
                            item.setVisible(value);
                        }
                    }
                }
                else {
                    Crm.Diagnostics.log.Warning("Navigation.setVisible: Invalid argument. An array was expected.");
                }
            }
        }
        Crm.Navigation = Navigation;
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        "use strict";
        let undefinedstr = "undefined";
        class Notifications {
            constructor(page) {
                Validation.ensureNotNullOrUndefined(page, "page");
                this.page = page;
            }
            show(message, id, level = Dynamics.Crm.FormNotificationTypes.Information) {
                this.page.ui.setFormNotification(message, level, id);
            }
            showHtml(message, id, level = Dynamics.Crm.FormNotificationTypes.Information) {
                if (typeof this.page.ui.setFormHtmlNotification === "function") {
                    this.page.ui.setFormHtmlNotification(message, level, id);
                }
                else {
                    this.page.ui.setFormNotification(Crm.Utility.htmlToText(message), level, id);
                }
            }
            hide(id, afterSeconds = null) {
                if (_.isNumber(afterSeconds) && afterSeconds > 0) {
                    setTimeout(() => this.page.ui.clearFormNotification(id), afterSeconds * 1000);
                }
                else {
                    this.page.ui.clearFormNotification(id);
                }
            }
            htmlSupported() {
                if (typeof Xrm !== undefinedstr &&
                    typeof this.page !== undefinedstr &&
                    typeof this.page.ui !== undefinedstr &&
                    typeof this.page.ui.setFormHtmlNotification !== undefinedstr) {
                    return true;
                }
                return false;
            }
            supported() {
                if (typeof Xrm !== undefinedstr &&
                    typeof this.page !== undefinedstr &&
                    typeof this.page.ui !== undefinedstr &&
                    typeof this.page.ui.setFormNotification !== undefinedstr &&
                    typeof this.page.ui.clearFormNotification !== undefinedstr) {
                    return true;
                }
                return false;
            }
        }
        Crm.Notifications = Notifications;
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var Reports;
        (function (Reports) {
            "use strict";
            function getUrl(reportName, reportId, entityId = null, entityCode = null, action = "run") {
                let url = Xrm.Utility.getGlobalContext().getClientUrl();
                let reportUrl = url + "/crmreports/viewer/viewer.aspx?action={action}&helpID={name}&id={{id}}"
                    .replace("{action}", encodeURIComponent(action))
                    .replace("{name}", encodeURIComponent(reportName))
                    .replace("{id}", encodeURIComponent(reportId));
                if (entityId && entityCode) {
                    reportUrl += "&context=records&records={{entityId}}&recordstype={entityCode}"
                        .replace("{entityId}", entityId)
                        .replace("{entityCode}", entityCode);
                }
                return reportUrl;
            }
            Reports.getUrl = getUrl;
        })(Reports = Crm.Reports || (Crm.Reports = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var ScriptManager;
        (function (ScriptManager) {
            "use strict";
            let _scripts = {};
            let _stylesheets = [];
            function loadScripts(scripts, win) {
                let promises = scripts.map((s) => loadScript(s, win));
                return Promise.all(promises);
            }
            ScriptManager.loadScripts = loadScripts;
            function loadScript(script, win) {
                console.log("Dynamics.Crm.ScriptManager.loadScript: " + script);
                let promise = _scripts[script];
                if (!!promise) {
                    return promise;
                }
                _scripts[script] = promise = new Promise((resolve, reject) => {
                    let element = win.document.createElement("script");
                    element.defer = true;
                    element.type = "text/javascript";
                    element.src = script;
                    element.addEventListener("load", function onLoaded() {
                        resolve();
                    });
                    win.document.body.appendChild(element);
                });
                return promise;
            }
            ScriptManager.loadScript = loadScript;
            function loadStylesheets(stylesheets, win) {
                stylesheets.forEach((s) => loadStylesheet(s, win));
            }
            ScriptManager.loadStylesheets = loadStylesheets;
            function loadStylesheet(stylesheet, win) {
                console.log("Dynamics.Crm.ScriptManager.loadStylesheet: " + stylesheet);
                let filter = _stylesheets.filter((s) => s === stylesheet);
                if (filter.length > 0) {
                    return;
                }
                win.$("head", win.document).append(`<link rel='stylesheet' href='${stylesheet}' />`);
                _stylesheets.push(stylesheet);
            }
            ScriptManager.loadStylesheet = loadStylesheet;
        })(ScriptManager = Crm.ScriptManager || (Crm.ScriptManager = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        "use strict";
        class Sections {
            constructor(page) {
                Validation.ensureNotNullOrUndefined(page, "page");
                this.page = page;
                this.tabs = new Crm.Tabs(page);
            }
            get(tabName, sectionName, required = true) {
                let tab = this.tabs.get(tabName, required);
                if (!tab) {
                    return null;
                }
                let section = tab.sections.get(sectionName);
                if (section) {
                    return section;
                }
                let msg = "The specified section could not be found: " + tabName + " - " + sectionName;
                if (required) {
                    throw new Error(msg);
                }
                Crm.Diagnostics.log.Message(msg);
                return null;
            }
            show(names, condition = true) {
                if (condition) {
                    this.setVisible(names, true);
                }
            }
            hide(names, condition = true) {
                if (condition) {
                    this.setVisible(names, false);
                }
            }
            setVisible(names, value) {
                if (Crm.Diagnostics.trace) {
                    Crm.Diagnostics.printArguments("Sections.setVisible", names, value);
                }
                if (Array.isArray(names)) {
                    for (let i = 0; i < names.length; i++) {
                        let name = names[i];
                        let pair = name.split("|");
                        let section;
                        if (pair && pair.length === 2) {
                            section = this.get(pair[0], pair[1], false);
                        }
                        if (section) {
                            section.setVisible(value);
                        }
                    }
                }
                else {
                    Crm.Diagnostics.log.Warning("Sections.setVisible: Invalid argument. An array was expected.");
                }
            }
        }
        Crm.Sections = Sections;
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        "use strict";
        class Tabs {
            constructor(page) {
                Validation.ensureNotNullOrUndefined(page, "page");
                this.page = page;
            }
            get(tabName, required = true) {
                let tab = this.page.ui.tabs.get(tabName);
                if (tab) {
                    return tab;
                }
                let msg = "The specified tab could not be found: " + tabName;
                if (required) {
                    throw new Error(msg);
                }
                Crm.Diagnostics.log.Message(msg);
                return null;
            }
            // show / hide
            show(tabNames, condition = true) {
                if (condition) {
                    this.setVisible(tabNames, true);
                }
            }
            hide(tabNames, condition = true) {
                if (condition) {
                    this.setVisible(tabNames, false);
                }
            }
            setVisible(tabNames, value) {
                if (Crm.Diagnostics.trace) {
                    Crm.Diagnostics.printArguments("Tabs.setVisible", tabNames, value);
                }
                if (Array.isArray(tabNames)) {
                    for (let i = 0; i < tabNames.length; i++) {
                        let tab = this.get(tabNames[i], false);
                        if (tab) {
                            tab.setVisible(value);
                        }
                    }
                }
                else {
                    Crm.Diagnostics.log.Warning("Tabs.setVisible: Invalid argument. An array was expected.");
                }
            }
            // expand / collapse
            expand(tabNames, condition = true) {
                if (condition) {
                    this.expandCollapse(tabNames, true);
                }
            }
            collpase(tabNames, condition = true) {
                if (condition) {
                    this.expandCollapse(tabNames, false);
                }
            }
            expandCollapse(tabNames, value) {
                if (Crm.Diagnostics.trace) {
                    Crm.Diagnostics.printArguments("Tabs.expandCollapse", tabNames, value);
                }
                if (Array.isArray(tabNames)) {
                    for (let i = 0; i < tabNames.length; i++) {
                        let tab = this.get(tabNames[i], false);
                        if (tab) {
                            tab.setDisplayState(value ? "expanded" : "collapsed");
                        }
                    }
                }
                else {
                    Crm.Diagnostics.log.Warning("Tabs.expandCollapse: Invalid argument. An array was expected.");
                }
            }
        }
        Crm.Tabs = Tabs;
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        "use strict";
        let executeTaskError = {
            htmlMessage: `Something went wrong.<br />
Clearing your browser's cache <u>(using Ctrl + F5)</u> may help solve the problem.`,
            errorMessage: `Something went wrong. Clearing your browser's cache (using Ctrl + F5) may help solve the problem.`,
            notificationId: "ExecuteTaskErrorNotification"
        };
        class Tasks {
            constructor(page) {
                Validation.ensureNotNullOrUndefined(page, "page");
                this.page = page;
                this.notity = new Crm.Notifications(page);
            }
            execute(tasks, config = {
                displayGenericMessageOnError: true
            }) {
                if (this.notity.supported()) {
                    this.notity.hide(executeTaskError.notificationId);
                }
                if (Crm.Diagnostics.trace) {
                    Crm.Diagnostics.printArguments("Tasks.execute", tasks, config);
                }
                let results = [];
                let errors = [];
                if (!Array.isArray(tasks)) {
                    Crm.Diagnostics.log.Warning("Tasks.execute: Invalid argument. An array was expected.");
                }
                else {
                    for (let i = 0; i < tasks.length; i++) {
                        let task = tasks[i];
                        try {
                            let result = task();
                            results.push(result);
                            if (!config.executeAll && !!result) {
                                break;
                            }
                        }
                        catch (e) {
                            Crm.Diagnostics.log.Error(`Tasks.execute: An error has occurred in ${typeof task} ${this.getTaskName(task)}`.trim(), e);
                            errors.push(e);
                            results.push(e);
                            if (!config.continueOnError) {
                                break;
                            }
                        }
                    }
                }
                if (errors.length > 0) {
                    this.displayErrors(config, errors);
                }
                return results;
            }
            displayErrors(config, errors) {
                if (!errors || !errors.length) {
                    return;
                }
                if (!config || !config.displayGenericMessageOnError) {
                    return;
                }
                if (this.notity.htmlSupported()) {
                    this.notity.showHtml(executeTaskError.htmlMessage, executeTaskError.notificationId, Crm.FormNotificationTypes.Warning);
                }
                else if (this.notity.supported()) {
                    this.notity.show(executeTaskError.errorMessage, executeTaskError.notificationId, Crm.FormNotificationTypes.Warning);
                }
            }
            getTaskName(task) {
                if (typeof task !== "function") {
                    return "";
                }
                let result = /^function\s+([\w\$]+)\s*\(/.exec(task.toString());
                return result ? result[1] : "";
            }
        }
        Crm.Tasks = Tasks;
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var User;
        (function (User) {
            "use strict";
            function getId() {
                let userId = Xrm.Utility.getGlobalContext().userSettings.userId;
                return Crm.Core.parseIdentifier(userId);
            }
            User.getId = getId;
            function hasRole(roleId) {
                let roles = Xrm.Utility.getGlobalContext().userSettings.securityRoles;
                return roles.filter((r) => Crm.Core.identifiersAreEqual(r, roleId)).length > 0;
            }
            User.hasRole = hasRole;
        })(User = Crm.User || (Crm.User = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var Utility;
        (function (Utility) {
            "use strict";
            function htmlToText(html) {
                if (!html) {
                    return html;
                }
                let elem = document.createElement("span");
                elem.innerHTML = html;
                return elem.innerText;
            }
            Utility.htmlToText = htmlToText;
            function isUci() {
                try {
                    if (typeof Xrm !== "undefined" &&
                        typeof Xrm.Internal !== "undefined" && "isUci" in Xrm.Internal) {
                        return Xrm.Internal.isUci();
                    }
                    let context = Xrm.Utility.getGlobalContext();
                    let appUrl = context.getCurrentAppUrl();
                    let clientUrl = context.getClientUrl();
                    return appUrl !== clientUrl;
                }
                catch (e) {
                    console.warn("Utility.isUci", e);
                    return false;
                }
            }
            Utility.isUci = isUci;
        })(Utility = Crm.Utility || (Crm.Utility = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Validation;
(function (Validation) {
    "use strict";
    function ensureNotNullOrUndefined(value, label) {
        if (value === undefined || value === null) {
            throw new Error(Resources.Strings.NullArgumentMessageFormat(label));
        }
    }
    Validation.ensureNotNullOrUndefined = ensureNotNullOrUndefined;
    function ensureNotNullOrEmpty(str, label) {
        if (str === undefined || str === null) {
            throw new Error(Resources.Strings.NullArgumentMessageFormat(label));
        }
        if (!_.isString(str)) {
            throw new Error(Resources.Strings.InvalidTypeMessageFormat("string", typeof str));
        }
        if (str === "") {
            throw new Error(Resources.Strings.NullArgumentMessageFormat(label));
        }
    }
    Validation.ensureNotNullOrEmpty = ensureNotNullOrEmpty;
    function ensureNumberInRange(value, min = null, max = null, paramName = null) {
        if (!_.isNumber(value)) {
            throw new Error(Resources.Strings.InvalidTypeMessageFormat("number", typeof value));
        }
        if (_.isNumber(min) && value < min) {
            throw new Error(Resources.Strings.OutOfRangeMessageFormat(paramName));
        }
        if (_.isNumber(max) && value > max) {
            throw new Error(Resources.Strings.OutOfRangeMessageFormat(paramName));
        }
    }
    Validation.ensureNumberInRange = ensureNumberInRange;
})(Validation || (Validation = {}));
(function (Validation) {
    var Strings;
    (function (Strings) {
        "use strict";
        function left(str, length) {
            Validation.ensureNumberInRange(length, 0);
            if (str === null || str === undefined) {
                return str;
            }
            if (str.length <= length) {
                return str;
            }
            return str.substr(0, length);
        }
        Strings.left = left;
        function right(str, length) {
            Validation.ensureNumberInRange(length, 0);
            if (str === null || str === undefined) {
                return str;
            }
            if (str.length <= length) {
                return str;
            }
            return str.substr(str.length - length, length);
        }
        Strings.right = right;
    })(Strings = Validation.Strings || (Validation.Strings = {}));
})(Validation || (Validation = {}));

var Caching;
(function (Caching) {
    "use strict";
    class CacheService {
        constructor(storage = localStorage) {
            Validation.ensureNotNullOrUndefined(storage, "storage");
            this._storage = storage;
        }
        clear() {
            this._storage.clear();
        }
        get(key, factory = null, expiration = 5 * 60) {
            Validation.ensureNotNullOrEmpty(key, "key");
            let str = this._storage.getItem(key);
            let entry;
            if (str) {
                entry = this.parse(str);
            }
            let now = new Date();
            if (entry && moment(entry.expiration).local().toDate() >= now) {
                return entry.value;
            }
            if (!_.isFunction(factory)) {
                return null;
            }
            let value = factory();
            this.set(key, value, expiration);
            return value;
        }
        set(key, value, expiration = 5 * 60) {
            Validation.ensureNotNullOrEmpty(key, "key");
            Validation.ensureNumberInRange(expiration, 0);
            let entry = {
                expiration: moment()
                    .add({
                    seconds: expiration
                })
                    .utc()
                    .toDate(),
                value: value
            };
            let json = JSON.stringify(entry);
            this._storage.setItem(key, json);
        }
        parse(str) {
            try {
                return JSON.parse(str);
            }
            catch (e) {
                console.warn(e);
                return null;
            }
        }
    }
    Caching.CacheService = CacheService;
    Caching.cache = new CacheService();
})(Caching || (Caching = {}));

var Caching;
(function (Caching) {
    "use strict";
})(Caching || (Caching = {}));

var Caching;
(function (Caching) {
    "use strict";
})(Caching || (Caching = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var Data;
        (function (Data) {
            "use strict";
        })(Data = Crm.Data || (Crm.Data = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var OData;
        (function (OData) {
            "use strict";
            let FilterType;
            (function (FilterType) {
                FilterType[FilterType["And"] = 1] = "And";
                FilterType[FilterType["Or"] = 2] = "Or";
            })(FilterType = OData.FilterType || (OData.FilterType = {}));
            function getContext() {
                let context;
                if (typeof Xrm !== "undefined" &&
                    typeof Xrm.Utility !== "undefined" &&
                    typeof Xrm.Utility.getGlobalContext === "function") {
                    context = Xrm.Utility.getGlobalContext();
                }
                else if (typeof GetGlobalContext === "function") {
                    context = GetGlobalContext();
                }
                if (!context) {
                    throw new Error("Unable to resolve CRM Global Context.");
                }
                return context;
            }
            function getVersion() {
                let version = getContext().getVersion(); // 8.2.0.780
                if (version === undefined) {
                    Crm.Diagnostics.log.Warning("getContext().getVersion() is undefined");
                    return "v9.0";
                }
                if (version >= "9.0") {
                    return "v9.0";
                }
                if (version >= "8.2") {
                    return "v8.2";
                }
                if (version >= "8.1") {
                    return "v8.1";
                }
                if (version >= "8.0") {
                    return "v8.0";
                }
                throw new Error("Version not supported: {version}.".replace("{version}", version));
            }
            function entityIdFieldName(entityName) {
                return `${entityName}id`;
            }
            function toEntity(entityName, attributes, obj) {
                if (!obj) {
                    return null;
                }
                let idFieldName = entityIdFieldName(entityName);
                let entity = {
                    id: obj[idFieldName],
                    type: entityName
                };
                attributes.forEach((key) => {
                    if (key === idFieldName) {
                        return;
                    }
                    let value = obj[key];
                    if (value !== undefined) {
                        entity[key] = value;
                    }
                });
                return entity;
            }
            function sanitizeEntity(entity) {
                let data = {};
                Object
                    .keys(entity)
                    .forEach((k) => {
                    if (k === "id" || k === "type") {
                        return;
                    }
                    data[k] = entity[k];
                });
                return data;
            }
            // entities CRUD
            function retrieve(entityName, entitySetName, entityId, attributes, expand) {
                Validation.ensureNotNullOrEmpty(entityName, "entityName");
                Validation.ensureNotNullOrEmpty(entitySetName, "entitySetName");
                Validation.ensureNotNullOrEmpty(entityId, "entityId");
                let query = `?$select=${attributes.join(",")}`;
                if (expand && expand.length) {
                    query += `&$expand=${expand.join(",")}`;
                }
                return new Promise((resolve, reject) => {
                    Xrm.WebApi.retrieveRecord(entityName, entityId, query)
                        .then((entity) => {
                        resolve(toEntity(entityName, attributes, entity));
                    }, (error) => {
                        Crm.Diagnostics.log.Error(`${error.message} retrieve ${entityName}:${entityId}:${query}`, {
                            message: error.message,
                            description: `Code: ${error.errorCode}`,
                            name: "WebApiError"
                        });
                        reject(error);
                    });
                });
            }
            OData.retrieve = retrieve;
            function retrieveMultiple(entityName, entitySetName, attributes, filters, filterType = null, orderBy = null, expand = null, pageSize = 1000) {
                Validation.ensureNotNullOrEmpty(entityName, "entityName");
                Validation.ensureNotNullOrEmpty(entitySetName, "entitySetName");
                let filterJoin = !filterType || filterType === FilterType.And ? " and " : " or ";
                let query = `?$select=${attributes.join(",")}&$filter=${filters.join(filterJoin)}`;
                if (orderBy) {
                    query += `&$orderby=${orderBy.join(",")}`;
                }
                if (expand) {
                    query += `&$expand=${expand.join(",")}`;
                }
                return new Promise((resolve, reject) => {
                    Xrm.WebApi.retrieveMultipleRecords(entityName, query, pageSize)
                        .then(response => {
                        resolve(response.entities.map(entity => toEntity(entityName, attributes, entity)));
                    }, (error) => {
                        Crm.Diagnostics.log.Error(`${error.message} retrieve multiple ${entityName}:${query}`, {
                            message: error.message,
                            description: `Code: ${error.errorCode}`,
                            name: "WebApiError"
                        });
                        reject(error);
                    });
                });
            }
            OData.retrieveMultiple = retrieveMultiple;
            function deleteEntity(entityName, entitySetName, entityId) {
                Validation.ensureNotNullOrEmpty(entityName, "entityName");
                Validation.ensureNotNullOrEmpty(entitySetName, "entitySetName");
                Validation.ensureNotNullOrEmpty(entityId, "entityId");
                return new Promise((resolve, reject) => {
                    Xrm.WebApi.deleteRecord(entityName, entityId)
                        .then((entity) => {
                        let result = {
                            type: entity.entityType,
                            id: entity.id,
                            name: entity.name
                        };
                        resolve(result);
                    }, (error) => {
                        Crm.Diagnostics.log.Error(`${error.message} delete ${entityName}`, {
                            message: error.message,
                            description: `Code: ${error.errorCode}`,
                            name: "WebApiError"
                        });
                        reject(error);
                    });
                });
            }
            OData.deleteEntity = deleteEntity;
            function createEntity(entity, entitySetName, attributes = null, logError = true) {
                Validation.ensureNotNullOrUndefined(entity, "entity");
                Validation.ensureNotNullOrEmpty(entitySetName, "entitySetName");
                let idFieldName = entityIdFieldName(entity.type);
                attributes = attributes || [];
                if (attributes.indexOf(idFieldName) < 0) {
                    attributes.push(idFieldName);
                }
                let query = `?$select=${attributes.join(",")}`;
                let data = sanitizeEntity(entity);
                return new Promise((resolve, reject) => {
                    Xrm.WebApi.createRecord(entity.type, data)
                        .then((entity) => {
                        resolve({
                            type: entity.entityType,
                            id: entity.id
                        });
                    }, (error) => {
                        if (logError) {
                            Crm.Diagnostics.log.Error(`${error.message} create ${entity.type}`, {
                                message: error.message,
                                description: `Code: ${error.errorCode}`,
                                name: "WebApiError"
                            });
                        }
                        reject(error);
                    });
                });
            }
            OData.createEntity = createEntity;
            function updateEntity(entity, entitySetName) {
                Validation.ensureNotNullOrUndefined(entity, "entity");
                Validation.ensureNotNullOrEmpty(entitySetName, "entitySetName");
                let data = sanitizeEntity(entity);
                return new Promise((resolve, reject) => {
                    Xrm.WebApi.updateRecord(entity.type, entity.id, data)
                        .then((entity) => {
                        resolve({
                            type: entity.entityType,
                            id: entity.id
                        });
                    }, (error) => {
                        Crm.Diagnostics.log.Error(`${error.message} update ${entity.type}:${entity.id}`, {
                            message: error.message,
                            description: `Code: ${error.errorCode}`,
                            name: "WebApiError"
                        });
                        reject(error);
                    });
                });
            }
            OData.updateEntity = updateEntity;
            // fetch
            function fetch(entityName, entitySetName, fetchXml, pageSize = 500) {
                let query = `?fetchXml=${encodeURIComponent(fetchXml)}`;
                return new Promise((resolve, reject) => {
                    Xrm.WebApi.retrieveMultipleRecords(entityName, query, pageSize)
                        .then(response => {
                        resolve(response);
                    }, (error) => {
                        Crm.Diagnostics.log.Error(`${error.message} fetch ${entityName}:${query}`, {
                            message: error.message,
                            description: `Code: ${error.errorCode}`,
                            name: "WebApiError"
                        });
                        reject(error);
                    });
                });
            }
            OData.fetch = fetch;
            // meta-data
            let entityDefinitionAttributes = [
                "MetadataId",
                "DisplayName",
                "LogicalName",
                "ObjectTypeCode",
                "SchemaName",
                "EntitySetName",
                "PrimaryIdAttribute",
                "ExternalName"
            ];
            let entityAttributeDefinitionAttributes = [
                "MetadataId",
                "DisplayName",
                "LogicalName",
                "AttributeType",
                "Description"
            ];
            function entityDefinitions(attributes = entityDefinitionAttributes) {
                let baseUrl = getContext().getClientUrl();
                let url = `${baseUrl}/api/data/${getVersion()}/EntityDefinitions?$select=${attributes.join(",")}`;
                return new Promise((resolve, reject) => {
                    return $
                        .ajax({
                        url: url,
                        dataType: "json"
                    })
                        .then((data) => {
                        resolve(!data ? [] : data.value);
                    })
                        .fail((error) => reject(error));
                });
            }
            OData.entityDefinitions = entityDefinitions;
            function entityAttributesDefinition(metadataId, attributes = entityAttributeDefinitionAttributes) {
                Validation.ensureNotNullOrEmpty(metadataId, "metadataId");
                let baseUrl = getContext().getClientUrl();
                let url = `${baseUrl}/api/data/${getVersion()}/EntityDefinitions(${metadataId})/Attributes?$select=${attributes.join(",")}`;
                return new Promise((resolve, reject) => {
                    return $
                        .ajax({
                        url: url,
                        dataType: "json"
                    })
                        .then((data) => {
                        resolve(data.value);
                    })
                        .fail((error) => reject(error));
                });
            }
            OData.entityAttributesDefinition = entityAttributesDefinition;
            function entityAttributeOptionSetDefinition(metadataId, attributeMetadataId) {
                Validation.ensureNotNullOrEmpty(metadataId, "metadataId");
                Validation.ensureNotNullOrEmpty(attributeMetadataId, "attributeMetadataId");
                let baseUrl = getContext().getClientUrl();
                let url = `${baseUrl}/api/data/v8.0/EntityDefinitions(${metadataId})/Attributes(${attributeMetadataId})/Microsoft.Dynamics.CRM.PicklistAttributeMetadata/OptionSet?$select=Options`;
                return new Promise((resolve, reject) => {
                    return $
                        .ajax({
                        url: url,
                        dataType: "json"
                    })
                        .then((data) => {
                        resolve(data ? data.Options : []);
                    })
                        .fail((error) => reject(error));
                });
            }
            OData.entityAttributeOptionSetDefinition = entityAttributeOptionSetDefinition;
        })(OData = Crm.OData || (Crm.OData = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var Data;
        (function (Data) {
            "use strict";
            class LogEntryRepository {
                constructor(prefix) {
                    this._prefix = prefix;
                }
                Create(entry) {
                    Crm.OData.createEntity(entry, Data.Schema.LogEntryEntity.setName(this._prefix), [], false);
                }
            }
            Data.LogEntryRepository = LogEntryRepository;
            class UnitOfWork {
                GetLogEntryRepository(prefix) {
                    return new LogEntryRepository(prefix);
                }
            }
            Data.UnitOfWork = UnitOfWork;
            Data.unitOfWork = new UnitOfWork();
        })(Data = Crm.Data || (Crm.Data = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var Data;
        (function (Data) {
            var Schema;
            (function (Schema) {
                "use strict";
                class LogEntryEntity {
                }
                LogEntryEntity.type = (prefix) => Crm.componentName(prefix, "logentry");
                LogEntryEntity.setName = (prefix) => Crm.componentName(prefix, "logentries");
                LogEntryEntity.idField = (prefix) => Crm.componentName(prefix, "logentryid");
                LogEntryEntity.nameField = (prefix) => Crm.componentName(prefix, "name");
                LogEntryEntity.messageField = (prefix) => Crm.componentName(prefix, "message");
                LogEntryEntity.descriptionField = (prefix) => Crm.componentName(prefix, "description");
                LogEntryEntity.sourceField = (prefix) => Crm.componentName(prefix, "source");
                LogEntryEntity.typeField = (prefix) => Crm.componentName(prefix, "type");
                Schema.LogEntryEntity = LogEntryEntity;
            })(Schema = Data.Schema || (Data.Schema = {}));
        })(Data = Crm.Data || (Crm.Data = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Resources;
(function (Resources) {
    "use strict";
    var nullArgumentMessageFormat = "Argument cannot be null or undefined '{paramName}'.";
    var nullOrEmptyArgumentMessageFormat = "Argument cannot be null or empty string '{paramName}'.";
    var invalidTypeMessageFormat = "Invalid argument type '{actualType}' expecting type '{expectedType}'.";
    var outOfRangeMessageFormat = "Argument '{paramName}' was out of the range of valid values.";
    class Strings {
    }
    Strings.NullArgumentMessageFormat = (paramName) => nullArgumentMessageFormat
        .replace("{paramName}", paramName || "");
    Strings.NullOrEmptyArgumentMessageFormat = (paramName) => nullOrEmptyArgumentMessageFormat
        .replace("{paramName}", paramName || "");
    Strings.InvalidTypeMessageFormat = (expectedType, actualType) => invalidTypeMessageFormat
        .replace("{expectedType}", expectedType || "")
        .replace("{actualType}", actualType || "");
    Strings.OutOfRangeMessageFormat = (paramName) => outOfRangeMessageFormat
        .replace("{paramName}", paramName || "");
    Strings.NotSupportedMessage = "Not supported.";
    Strings.No = "No";
    Strings.Yes = "Yes";
    Resources.Strings = Strings;
})(Resources || (Resources = {}));
