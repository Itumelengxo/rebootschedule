var tv = e => {
    throw TypeError(e)
};
var lf = (e, t, n) => t.has(e) || tv("Cannot " + n);
var M = (e, t, n) => (lf(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    be = (e, t, n) => t.has(e) ? tv("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    se = (e, t, n, s) => (lf(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n),
    Ne = (e, t, n) => (lf(e, t, "access private method"), n);
var Kl = (e, t, n, s) => ({
    set _(i) {
        se(e, t, i, n)
    },
    get _() {
        return M(e, t, s)
    }
});

function QT(e, t) {
    for (var n = 0; n < t.length; n++) {
        const s = t[n];
        if (typeof s != "string" && !Array.isArray(s)) {
            for (const i in s)
                if (i !== "default" && !(i in e)) {
                    const l = Object.getOwnPropertyDescriptor(s, i);
                    l && Object.defineProperty(e, i, l.get ? l : {
                        enumerable: !0,
                        get: () => s[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
    new MutationObserver(i => {
        for (const l of i)
            if (l.type === "childList")
                for (const u of l.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && s(u)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const l = {};
        return i.integrity && (l.integrity = i.integrity), i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? l.credentials = "include" : i.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
    }

    function s(i) {
        if (i.ep) return;
        i.ep = !0;
        const l = n(i);
        fetch(i.href, l)
    }
})();

function Jh(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var uf = {
        exports: {}
    },
    Vi = {},
    cf = {
        exports: {}
    },
    _e = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nv;

function YT() {
    if (nv) return _e;
    nv = 1;
    var e = Symbol.for("react.element"),
        t = Symbol.for("react.portal"),
        n = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        i = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        c = Symbol.for("react.forward_ref"),
        f = Symbol.for("react.suspense"),
        h = Symbol.for("react.memo"),
        m = Symbol.for("react.lazy"),
        y = Symbol.iterator;

    function w(D) {
        return D === null || typeof D != "object" ? null : (D = y && D[y] || D["@@iterator"], typeof D == "function" ? D : null)
    }
    var C = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        b = Object.assign,
        v = {};

    function S(D, H, we) {
        this.props = D, this.context = H, this.refs = v, this.updater = we || C
    }
    S.prototype.isReactComponent = {}, S.prototype.setState = function(D, H) {
        if (typeof D != "object" && typeof D != "function" && D != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, D, H, "setState")
    }, S.prototype.forceUpdate = function(D) {
        this.updater.enqueueForceUpdate(this, D, "forceUpdate")
    };

    function k() {}
    k.prototype = S.prototype;

    function P(D, H, we) {
        this.props = D, this.context = H, this.refs = v, this.updater = we || C
    }
    var R = P.prototype = new k;
    R.constructor = P, b(R, S.prototype), R.isPureReactComponent = !0;
    var _ = Array.isArray,
        N = Object.prototype.hasOwnProperty,
        B = {
            current: null
        },
        U = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function j(D, H, we) {
        var ve, pe = {},
            ye = null,
            ne = null;
        if (H != null)
            for (ve in H.ref !== void 0 && (ne = H.ref), H.key !== void 0 && (ye = "" + H.key), H) N.call(H, ve) && !U.hasOwnProperty(ve) && (pe[ve] = H[ve]);
        var me = arguments.length - 2;
        if (me === 1) pe.children = we;
        else if (1 < me) {
            for (var fe = Array(me), Re = 0; Re < me; Re++) fe[Re] = arguments[Re + 2];
            pe.children = fe
        }
        if (D && D.defaultProps)
            for (ve in me = D.defaultProps, me) pe[ve] === void 0 && (pe[ve] = me[ve]);
        return {
            $$typeof: e,
            type: D,
            key: ye,
            ref: ne,
            props: pe,
            _owner: B.current
        }
    }

    function G(D, H) {
        return {
            $$typeof: e,
            type: D.type,
            key: H,
            ref: D.ref,
            props: D.props,
            _owner: D._owner
        }
    }

    function J(D) {
        return typeof D == "object" && D !== null && D.$$typeof === e
    }

    function ee(D) {
        var H = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + D.replace(/[=:]/g, function(we) {
            return H[we]
        })
    }
    var de = /\/+/g;

    function ge(D, H) {
        return typeof D == "object" && D !== null && D.key != null ? ee("" + D.key) : H.toString(36)
    }

    function le(D, H, we, ve, pe) {
        var ye = typeof D;
        (ye === "undefined" || ye === "boolean") && (D = null);
        var ne = !1;
        if (D === null) ne = !0;
        else switch (ye) {
            case "string":
            case "number":
                ne = !0;
                break;
            case "object":
                switch (D.$$typeof) {
                    case e:
                    case t:
                        ne = !0
                }
        }
        if (ne) return ne = D, pe = pe(ne), D = ve === "" ? "." + ge(ne, 0) : ve, _(pe) ? (we = "", D != null && (we = D.replace(de, "$&/") + "/"), le(pe, H, we, "", function(Re) {
            return Re
        })) : pe != null && (J(pe) && (pe = G(pe, we + (!pe.key || ne && ne.key === pe.key ? "" : ("" + pe.key).replace(de, "$&/") + "/") + D)), H.push(pe)), 1;
        if (ne = 0, ve = ve === "" ? "." : ve + ":", _(D))
            for (var me = 0; me < D.length; me++) {
                ye = D[me];
                var fe = ve + ge(ye, me);
                ne += le(ye, H, we, fe, pe)
            } else if (fe = w(D), typeof fe == "function")
                for (D = fe.call(D), me = 0; !(ye = D.next()).done;) ye = ye.value, fe = ve + ge(ye, me++), ne += le(ye, H, we, fe, pe);
            else if (ye === "object") throw H = String(D), Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.");
        return ne
    }

    function Ce(D, H, we) {
        if (D == null) return D;
        var ve = [],
            pe = 0;
        return le(D, ve, "", "", function(ye) {
            return H.call(we, ye, pe++)
        }), ve
    }

    function te(D) {
        if (D._status === -1) {
            var H = D._result;
            H = H(), H.then(function(we) {
                (D._status === 0 || D._status === -1) && (D._status = 1, D._result = we)
            }, function(we) {
                (D._status === 0 || D._status === -1) && (D._status = 2, D._result = we)
            }), D._status === -1 && (D._status = 0, D._result = H)
        }
        if (D._status === 1) return D._result.default;
        throw D._result
    }
    var Z = {
            current: null
        },
        $ = {
            transition: null
        },
        X = {
            ReactCurrentDispatcher: Z,
            ReactCurrentBatchConfig: $,
            ReactCurrentOwner: B
        };

    function W() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return _e.Children = {
        map: Ce,
        forEach: function(D, H, we) {
            Ce(D, function() {
                H.apply(this, arguments)
            }, we)
        },
        count: function(D) {
            var H = 0;
            return Ce(D, function() {
                H++
            }), H
        },
        toArray: function(D) {
            return Ce(D, function(H) {
                return H
            }) || []
        },
        only: function(D) {
            if (!J(D)) throw Error("React.Children.only expected to receive a single React element child.");
            return D
        }
    }, _e.Component = S, _e.Fragment = n, _e.Profiler = i, _e.PureComponent = P, _e.StrictMode = s, _e.Suspense = f, _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, _e.act = W, _e.cloneElement = function(D, H, we) {
        if (D == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
        var ve = b({}, D.props),
            pe = D.key,
            ye = D.ref,
            ne = D._owner;
        if (H != null) {
            if (H.ref !== void 0 && (ye = H.ref, ne = B.current), H.key !== void 0 && (pe = "" + H.key), D.type && D.type.defaultProps) var me = D.type.defaultProps;
            for (fe in H) N.call(H, fe) && !U.hasOwnProperty(fe) && (ve[fe] = H[fe] === void 0 && me !== void 0 ? me[fe] : H[fe])
        }
        var fe = arguments.length - 2;
        if (fe === 1) ve.children = we;
        else if (1 < fe) {
            me = Array(fe);
            for (var Re = 0; Re < fe; Re++) me[Re] = arguments[Re + 2];
            ve.children = me
        }
        return {
            $$typeof: e,
            type: D.type,
            key: pe,
            ref: ye,
            props: ve,
            _owner: ne
        }
    }, _e.createContext = function(D) {
        return D = {
            $$typeof: u,
            _currentValue: D,
            _currentValue2: D,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, D.Provider = {
            $$typeof: l,
            _context: D
        }, D.Consumer = D
    }, _e.createElement = j, _e.createFactory = function(D) {
        var H = j.bind(null, D);
        return H.type = D, H
    }, _e.createRef = function() {
        return {
            current: null
        }
    }, _e.forwardRef = function(D) {
        return {
            $$typeof: c,
            render: D
        }
    }, _e.isValidElement = J, _e.lazy = function(D) {
        return {
            $$typeof: m,
            _payload: {
                _status: -1,
                _result: D
            },
            _init: te
        }
    }, _e.memo = function(D, H) {
        return {
            $$typeof: h,
            type: D,
            compare: H === void 0 ? null : H
        }
    }, _e.startTransition = function(D) {
        var H = $.transition;
        $.transition = {};
        try {
            D()
        } finally {
            $.transition = H
        }
    }, _e.unstable_act = W, _e.useCallback = function(D, H) {
        return Z.current.useCallback(D, H)
    }, _e.useContext = function(D) {
        return Z.current.useContext(D)
    }, _e.useDebugValue = function() {}, _e.useDeferredValue = function(D) {
        return Z.current.useDeferredValue(D)
    }, _e.useEffect = function(D, H) {
        return Z.current.useEffect(D, H)
    }, _e.useId = function() {
        return Z.current.useId()
    }, _e.useImperativeHandle = function(D, H, we) {
        return Z.current.useImperativeHandle(D, H, we)
    }, _e.useInsertionEffect = function(D, H) {
        return Z.current.useInsertionEffect(D, H)
    }, _e.useLayoutEffect = function(D, H) {
        return Z.current.useLayoutEffect(D, H)
    }, _e.useMemo = function(D, H) {
        return Z.current.useMemo(D, H)
    }, _e.useReducer = function(D, H, we) {
        return Z.current.useReducer(D, H, we)
    }, _e.useRef = function(D) {
        return Z.current.useRef(D)
    }, _e.useState = function(D) {
        return Z.current.useState(D)
    }, _e.useSyncExternalStore = function(D, H, we) {
        return Z.current.useSyncExternalStore(D, H, we)
    }, _e.useTransition = function() {
        return Z.current.useTransition()
    }, _e.version = "18.3.1", _e
}
var rv;

function Zh() {
    return rv || (rv = 1, cf.exports = YT()), cf.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sv;

function XT() {
    if (sv) return Vi;
    sv = 1;
    var e = Zh(),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function u(c, f, h) {
        var m, y = {},
            w = null,
            C = null;
        h !== void 0 && (w = "" + h), f.key !== void 0 && (w = "" + f.key), f.ref !== void 0 && (C = f.ref);
        for (m in f) s.call(f, m) && !l.hasOwnProperty(m) && (y[m] = f[m]);
        if (c && c.defaultProps)
            for (m in f = c.defaultProps, f) y[m] === void 0 && (y[m] = f[m]);
        return {
            $$typeof: t,
            type: c,
            key: w,
            ref: C,
            props: y,
            _owner: i.current
        }
    }
    return Vi.Fragment = n, Vi.jsx = u, Vi.jsxs = u, Vi
}
var ov;

function JT() {
    return ov || (ov = 1, uf.exports = XT()), uf.exports
}
var T = JT(),
    x = Zh();
const Mr = Jh(x),
    Gu = QT({
        __proto__: null,
        default: Mr
    }, [x]);
var Gl = {},
    df = {
        exports: {}
    },
    Bt = {},
    ff = {
        exports: {}
    },
    hf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iv;

function ZT() {
    return iv || (iv = 1, (function(e) {
        function t($, X) {
            var W = $.length;
            $.push(X);
            e: for (; 0 < W;) {
                var D = W - 1 >>> 1,
                    H = $[D];
                if (0 < i(H, X)) $[D] = X, $[W] = H, W = D;
                else break e
            }
        }

        function n($) {
            return $.length === 0 ? null : $[0]
        }

        function s($) {
            if ($.length === 0) return null;
            var X = $[0],
                W = $.pop();
            if (W !== X) {
                $[0] = W;
                e: for (var D = 0, H = $.length, we = H >>> 1; D < we;) {
                    var ve = 2 * (D + 1) - 1,
                        pe = $[ve],
                        ye = ve + 1,
                        ne = $[ye];
                    if (0 > i(pe, W)) ye < H && 0 > i(ne, pe) ? ($[D] = ne, $[ye] = W, D = ye) : ($[D] = pe, $[ve] = W, D = ve);
                    else if (ye < H && 0 > i(ne, W)) $[D] = ne, $[ye] = W, D = ye;
                    else break e
                }
            }
            return X
        }

        function i($, X) {
            var W = $.sortIndex - X.sortIndex;
            return W !== 0 ? W : $.id - X.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var l = performance;
            e.unstable_now = function() {
                return l.now()
            }
        } else {
            var u = Date,
                c = u.now();
            e.unstable_now = function() {
                return u.now() - c
            }
        }
        var f = [],
            h = [],
            m = 1,
            y = null,
            w = 3,
            C = !1,
            b = !1,
            v = !1,
            S = typeof setTimeout == "function" ? setTimeout : null,
            k = typeof clearTimeout == "function" ? clearTimeout : null,
            P = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function R($) {
            for (var X = n(h); X !== null;) {
                if (X.callback === null) s(h);
                else if (X.startTime <= $) s(h), X.sortIndex = X.expirationTime, t(f, X);
                else break;
                X = n(h)
            }
        }

        function _($) {
            if (v = !1, R($), !b)
                if (n(f) !== null) b = !0, te(N);
                else {
                    var X = n(h);
                    X !== null && Z(_, X.startTime - $)
                }
        }

        function N($, X) {
            b = !1, v && (v = !1, k(j), j = -1), C = !0;
            var W = w;
            try {
                for (R(X), y = n(f); y !== null && (!(y.expirationTime > X) || $ && !ee());) {
                    var D = y.callback;
                    if (typeof D == "function") {
                        y.callback = null, w = y.priorityLevel;
                        var H = D(y.expirationTime <= X);
                        X = e.unstable_now(), typeof H == "function" ? y.callback = H : y === n(f) && s(f), R(X)
                    } else s(f);
                    y = n(f)
                }
                if (y !== null) var we = !0;
                else {
                    var ve = n(h);
                    ve !== null && Z(_, ve.startTime - X), we = !1
                }
                return we
            } finally {
                y = null, w = W, C = !1
            }
        }
        var B = !1,
            U = null,
            j = -1,
            G = 5,
            J = -1;

        function ee() {
            return !(e.unstable_now() - J < G)
        }

        function de() {
            if (U !== null) {
                var $ = e.unstable_now();
                J = $;
                var X = !0;
                try {
                    X = U(!0, $)
                } finally {
                    X ? ge() : (B = !1, U = null)
                }
            } else B = !1
        }
        var ge;
        if (typeof P == "function") ge = function() {
            P(de)
        };
        else if (typeof MessageChannel < "u") {
            var le = new MessageChannel,
                Ce = le.port2;
            le.port1.onmessage = de, ge = function() {
                Ce.postMessage(null)
            }
        } else ge = function() {
            S(de, 0)
        };

        function te($) {
            U = $, B || (B = !0, ge())
        }

        function Z($, X) {
            j = S(function() {
                $(e.unstable_now())
            }, X)
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
            $.callback = null
        }, e.unstable_continueExecution = function() {
            b || C || (b = !0, te(N))
        }, e.unstable_forceFrameRate = function($) {
            0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < $ ? Math.floor(1e3 / $) : 5
        }, e.unstable_getCurrentPriorityLevel = function() {
            return w
        }, e.unstable_getFirstCallbackNode = function() {
            return n(f)
        }, e.unstable_next = function($) {
            switch (w) {
                case 1:
                case 2:
                case 3:
                    var X = 3;
                    break;
                default:
                    X = w
            }
            var W = w;
            w = X;
            try {
                return $()
            } finally {
                w = W
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function($, X) {
            switch ($) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    $ = 3
            }
            var W = w;
            w = $;
            try {
                return X()
            } finally {
                w = W
            }
        }, e.unstable_scheduleCallback = function($, X, W) {
            var D = e.unstable_now();
            switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? D + W : D) : W = D, $) {
                case 1:
                    var H = -1;
                    break;
                case 2:
                    H = 250;
                    break;
                case 5:
                    H = 1073741823;
                    break;
                case 4:
                    H = 1e4;
                    break;
                default:
                    H = 5e3
            }
            return H = W + H, $ = {
                id: m++,
                callback: X,
                priorityLevel: $,
                startTime: W,
                expirationTime: H,
                sortIndex: -1
            }, W > D ? ($.sortIndex = W, t(h, $), n(f) === null && $ === n(h) && (v ? (k(j), j = -1) : v = !0, Z(_, W - D))) : ($.sortIndex = H, t(f, $), b || C || (b = !0, te(N))), $
        }, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function($) {
            var X = w;
            return function() {
                var W = w;
                w = X;
                try {
                    return $.apply(this, arguments)
                } finally {
                    w = W
                }
            }
        }
    })(hf)), hf
}
var av;

function ek() {
    return av || (av = 1, ff.exports = ZT()), ff.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lv;

function tk() {
    if (lv) return Bt;
    lv = 1;
    var e = Zh(),
        t = ek();

    function n(r) {
        for (var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, a = 1; a < arguments.length; a++) o += "&args[]=" + encodeURIComponent(arguments[a]);
        return "Minified React error #" + r + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var s = new Set,
        i = {};

    function l(r, o) {
        u(r, o), u(r + "Capture", o)
    }

    function u(r, o) {
        for (i[r] = o, r = 0; r < o.length; r++) s.add(o[r])
    }
    var c = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        f = Object.prototype.hasOwnProperty,
        h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        m = {},
        y = {};

    function w(r) {
        return f.call(y, r) ? !0 : f.call(m, r) ? !1 : h.test(r) ? y[r] = !0 : (m[r] = !0, !1)
    }

    function C(r, o, a, d) {
        if (a !== null && a.type === 0) return !1;
        switch (typeof o) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return d ? !1 : a !== null ? !a.acceptsBooleans : (r = r.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-");
            default:
                return !1
        }
    }

    function b(r, o, a, d) {
        if (o === null || typeof o > "u" || C(r, o, a, d)) return !0;
        if (d) return !1;
        if (a !== null) switch (a.type) {
            case 3:
                return !o;
            case 4:
                return o === !1;
            case 5:
                return isNaN(o);
            case 6:
                return isNaN(o) || 1 > o
        }
        return !1
    }

    function v(r, o, a, d, p, g, E) {
        this.acceptsBooleans = o === 2 || o === 3 || o === 4, this.attributeName = d, this.attributeNamespace = p, this.mustUseProperty = a, this.propertyName = r, this.type = o, this.sanitizeURL = g, this.removeEmptyString = E
    }
    var S = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
        S[r] = new v(r, 0, !1, r, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(r) {
        var o = r[0];
        S[o] = new v(o, 1, !1, r[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
        S[r] = new v(r, 2, !1, r.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
        S[r] = new v(r, 2, !1, r, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
        S[r] = new v(r, 3, !1, r.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
        S[r] = new v(r, 3, !0, r, null, !1, !1)
    }), ["capture", "download"].forEach(function(r) {
        S[r] = new v(r, 4, !1, r, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(r) {
        S[r] = new v(r, 6, !1, r, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(r) {
        S[r] = new v(r, 5, !1, r.toLowerCase(), null, !1, !1)
    });
    var k = /[\-:]([a-z])/g;

    function P(r) {
        return r[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
        var o = r.replace(k, P);
        S[o] = new v(o, 1, !1, r, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
        var o = r.replace(k, P);
        S[o] = new v(o, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
        var o = r.replace(k, P);
        S[o] = new v(o, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(r) {
        S[r] = new v(r, 1, !1, r.toLowerCase(), null, !1, !1)
    }), S.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
        S[r] = new v(r, 1, !1, r.toLowerCase(), null, !0, !0)
    });

    function R(r, o, a, d) {
        var p = S.hasOwnProperty(o) ? S[o] : null;
        (p !== null ? p.type !== 0 : d || !(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (b(o, a, p, d) && (a = null), d || p === null ? w(o) && (a === null ? r.removeAttribute(o) : r.setAttribute(o, "" + a)) : p.mustUseProperty ? r[p.propertyName] = a === null ? p.type === 3 ? !1 : "" : a : (o = p.attributeName, d = p.attributeNamespace, a === null ? r.removeAttribute(o) : (p = p.type, a = p === 3 || p === 4 && a === !0 ? "" : "" + a, d ? r.setAttributeNS(d, o, a) : r.setAttribute(o, a))))
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        N = Symbol.for("react.element"),
        B = Symbol.for("react.portal"),
        U = Symbol.for("react.fragment"),
        j = Symbol.for("react.strict_mode"),
        G = Symbol.for("react.profiler"),
        J = Symbol.for("react.provider"),
        ee = Symbol.for("react.context"),
        de = Symbol.for("react.forward_ref"),
        ge = Symbol.for("react.suspense"),
        le = Symbol.for("react.suspense_list"),
        Ce = Symbol.for("react.memo"),
        te = Symbol.for("react.lazy"),
        Z = Symbol.for("react.offscreen"),
        $ = Symbol.iterator;

    function X(r) {
        return r === null || typeof r != "object" ? null : (r = $ && r[$] || r["@@iterator"], typeof r == "function" ? r : null)
    }
    var W = Object.assign,
        D;

    function H(r) {
        if (D === void 0) try {
            throw Error()
        } catch (a) {
            var o = a.stack.trim().match(/\n( *(at )?)/);
            D = o && o[1] || ""
        }
        return `
` + D + r
    }
    var we = !1;

    function ve(r, o) {
        if (!r || we) return "";
        we = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (o)
                if (o = function() {
                        throw Error()
                    }, Object.defineProperty(o.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(o, [])
                    } catch (V) {
                        var d = V
                    }
                    Reflect.construct(r, [], o)
                } else {
                    try {
                        o.call()
                    } catch (V) {
                        d = V
                    }
                    r.call(o.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (V) {
                    d = V
                }
                r()
            }
        } catch (V) {
            if (V && d && typeof V.stack == "string") {
                for (var p = V.stack.split(`
`), g = d.stack.split(`
`), E = p.length - 1, A = g.length - 1; 1 <= E && 0 <= A && p[E] !== g[A];) A--;
                for (; 1 <= E && 0 <= A; E--, A--)
                    if (p[E] !== g[A]) {
                        if (E !== 1 || A !== 1)
                            do
                                if (E--, A--, 0 > A || p[E] !== g[A]) {
                                    var O = `
` + p[E].replace(" at new ", " at ");
                                    return r.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", r.displayName)), O
                                }
                        while (1 <= E && 0 <= A);
                        break
                    }
            }
        } finally {
            we = !1, Error.prepareStackTrace = a
        }
        return (r = r ? r.displayName || r.name : "") ? H(r) : ""
    }

    function pe(r) {
        switch (r.tag) {
            case 5:
                return H(r.type);
            case 16:
                return H("Lazy");
            case 13:
                return H("Suspense");
            case 19:
                return H("SuspenseList");
            case 0:
            case 2:
            case 15:
                return r = ve(r.type, !1), r;
            case 11:
                return r = ve(r.type.render, !1), r;
            case 1:
                return r = ve(r.type, !0), r;
            default:
                return ""
        }
    }

    function ye(r) {
        if (r == null) return null;
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
        switch (r) {
            case U:
                return "Fragment";
            case B:
                return "Portal";
            case G:
                return "Profiler";
            case j:
                return "StrictMode";
            case ge:
                return "Suspense";
            case le:
                return "SuspenseList"
        }
        if (typeof r == "object") switch (r.$$typeof) {
            case ee:
                return (r.displayName || "Context") + ".Consumer";
            case J:
                return (r._context.displayName || "Context") + ".Provider";
            case de:
                var o = r.render;
                return r = r.displayName, r || (r = o.displayName || o.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
            case Ce:
                return o = r.displayName || null, o !== null ? o : ye(r.type) || "Memo";
            case te:
                o = r._payload, r = r._init;
                try {
                    return ye(r(o))
                } catch {}
        }
        return null
    }

    function ne(r) {
        var o = r.type;
        switch (r.tag) {
            case 24:
                return "Cache";
            case 9:
                return (o.displayName || "Context") + ".Consumer";
            case 10:
                return (o._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return r = o.render, r = r.displayName || r.name || "", o.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return o;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return ye(o);
            case 8:
                return o === j ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof o == "function") return o.displayName || o.name || null;
                if (typeof o == "string") return o
        }
        return null
    }

    function me(r) {
        switch (typeof r) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return r;
            case "object":
                return r;
            default:
                return ""
        }
    }

    function fe(r) {
        var o = r.type;
        return (r = r.nodeName) && r.toLowerCase() === "input" && (o === "checkbox" || o === "radio")
    }

    function Re(r) {
        var o = fe(r) ? "checked" : "value",
            a = Object.getOwnPropertyDescriptor(r.constructor.prototype, o),
            d = "" + r[o];
        if (!r.hasOwnProperty(o) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var p = a.get,
                g = a.set;
            return Object.defineProperty(r, o, {
                configurable: !0,
                get: function() {
                    return p.call(this)
                },
                set: function(E) {
                    d = "" + E, g.call(this, E)
                }
            }), Object.defineProperty(r, o, {
                enumerable: a.enumerable
            }), {
                getValue: function() {
                    return d
                },
                setValue: function(E) {
                    d = "" + E
                },
                stopTracking: function() {
                    r._valueTracker = null, delete r[o]
                }
            }
        }
    }

    function Ae(r) {
        r._valueTracker || (r._valueTracker = Re(r))
    }

    function Oe(r) {
        if (!r) return !1;
        var o = r._valueTracker;
        if (!o) return !0;
        var a = o.getValue(),
            d = "";
        return r && (d = fe(r) ? r.checked ? "true" : "false" : r.value), r = d, r !== a ? (o.setValue(r), !0) : !1
    }

    function Ge(r) {
        if (r = r || (typeof document < "u" ? document : void 0), typeof r > "u") return null;
        try {
            return r.activeElement || r.body
        } catch {
            return r.body
        }
    }

    function at(r, o) {
        var a = o.checked;
        return W({}, o, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: a ? ? r._wrapperState.initialChecked
        })
    }

    function ur(r, o) {
        var a = o.defaultValue == null ? "" : o.defaultValue,
            d = o.checked != null ? o.checked : o.defaultChecked;
        a = me(o.value != null ? o.value : a), r._wrapperState = {
            initialChecked: d,
            initialValue: a,
            controlled: o.type === "checkbox" || o.type === "radio" ? o.checked != null : o.value != null
        }
    }

    function cr(r, o) {
        o = o.checked, o != null && R(r, "checked", o, !1)
    }

    function Wn(r, o) {
        cr(r, o);
        var a = me(o.value),
            d = o.type;
        if (a != null) d === "number" ? (a === 0 && r.value === "" || r.value != a) && (r.value = "" + a) : r.value !== "" + a && (r.value = "" + a);
        else if (d === "submit" || d === "reset") {
            r.removeAttribute("value");
            return
        }
        o.hasOwnProperty("value") ? dr(r, o.type, a) : o.hasOwnProperty("defaultValue") && dr(r, o.type, me(o.defaultValue)), o.checked == null && o.defaultChecked != null && (r.defaultChecked = !!o.defaultChecked)
    }

    function Fa(r, o, a) {
        if (o.hasOwnProperty("value") || o.hasOwnProperty("defaultValue")) {
            var d = o.type;
            if (!(d !== "submit" && d !== "reset" || o.value !== void 0 && o.value !== null)) return;
            o = "" + r._wrapperState.initialValue, a || o === r.value || (r.value = o), r.defaultValue = o
        }
        a = r.name, a !== "" && (r.name = ""), r.defaultChecked = !!r._wrapperState.initialChecked, a !== "" && (r.name = a)
    }

    function dr(r, o, a) {
        (o !== "number" || Ge(r.ownerDocument) !== r) && (a == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + a && (r.defaultValue = "" + a))
    }
    var ti = Array.isArray;

    function qs(r, o, a, d) {
        if (r = r.options, o) {
            o = {};
            for (var p = 0; p < a.length; p++) o["$" + a[p]] = !0;
            for (a = 0; a < r.length; a++) p = o.hasOwnProperty("$" + r[a].value), r[a].selected !== p && (r[a].selected = p), p && d && (r[a].defaultSelected = !0)
        } else {
            for (a = "" + me(a), o = null, p = 0; p < r.length; p++) {
                if (r[p].value === a) {
                    r[p].selected = !0, d && (r[p].defaultSelected = !0);
                    return
                }
                o !== null || r[p].disabled || (o = r[p])
            }
            o !== null && (o.selected = !0)
        }
    }

    function yc(r, o) {
        if (o.dangerouslySetInnerHTML != null) throw Error(n(91));
        return W({}, o, {
            value: void 0,
            defaultValue: void 0,
            children: "" + r._wrapperState.initialValue
        })
    }

    function dm(r, o) {
        var a = o.value;
        if (a == null) {
            if (a = o.children, o = o.defaultValue, a != null) {
                if (o != null) throw Error(n(92));
                if (ti(a)) {
                    if (1 < a.length) throw Error(n(93));
                    a = a[0]
                }
                o = a
            }
            o == null && (o = ""), a = o
        }
        r._wrapperState = {
            initialValue: me(a)
        }
    }

    function fm(r, o) {
        var a = me(o.value),
            d = me(o.defaultValue);
        a != null && (a = "" + a, a !== r.value && (r.value = a), o.defaultValue == null && r.defaultValue !== a && (r.defaultValue = a)), d != null && (r.defaultValue = "" + d)
    }

    function hm(r) {
        var o = r.textContent;
        o === r._wrapperState.initialValue && o !== "" && o !== null && (r.value = o)
    }

    function pm(r) {
        switch (r) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function vc(r, o) {
        return r == null || r === "http://www.w3.org/1999/xhtml" ? pm(o) : r === "http://www.w3.org/2000/svg" && o === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r
    }
    var Ba, mm = (function(r) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(o, a, d, p) {
            MSApp.execUnsafeLocalFunction(function() {
                return r(o, a, d, p)
            })
        } : r
    })(function(r, o) {
        if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r) r.innerHTML = o;
        else {
            for (Ba = Ba || document.createElement("div"), Ba.innerHTML = "<svg>" + o.valueOf().toString() + "</svg>", o = Ba.firstChild; r.firstChild;) r.removeChild(r.firstChild);
            for (; o.firstChild;) r.appendChild(o.firstChild)
        }
    });

    function ni(r, o) {
        if (o) {
            var a = r.firstChild;
            if (a && a === r.lastChild && a.nodeType === 3) {
                a.nodeValue = o;
                return
            }
        }
        r.textContent = o
    }
    var ri = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        ZC = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ri).forEach(function(r) {
        ZC.forEach(function(o) {
            o = o + r.charAt(0).toUpperCase() + r.substring(1), ri[o] = ri[r]
        })
    });

    function gm(r, o, a) {
        return o == null || typeof o == "boolean" || o === "" ? "" : a || typeof o != "number" || o === 0 || ri.hasOwnProperty(r) && ri[r] ? ("" + o).trim() : o + "px"
    }

    function ym(r, o) {
        r = r.style;
        for (var a in o)
            if (o.hasOwnProperty(a)) {
                var d = a.indexOf("--") === 0,
                    p = gm(a, o[a], d);
                a === "float" && (a = "cssFloat"), d ? r.setProperty(a, p) : r[a] = p
            }
    }
    var eE = W({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function wc(r, o) {
        if (o) {
            if (eE[r] && (o.children != null || o.dangerouslySetInnerHTML != null)) throw Error(n(137, r));
            if (o.dangerouslySetInnerHTML != null) {
                if (o.children != null) throw Error(n(60));
                if (typeof o.dangerouslySetInnerHTML != "object" || !("__html" in o.dangerouslySetInnerHTML)) throw Error(n(61))
            }
            if (o.style != null && typeof o.style != "object") throw Error(n(62))
        }
    }

    function xc(r, o) {
        if (r.indexOf("-") === -1) return typeof o.is == "string";
        switch (r) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var Sc = null;

    function bc(r) {
        return r = r.target || r.srcElement || window, r.correspondingUseElement && (r = r.correspondingUseElement), r.nodeType === 3 ? r.parentNode : r
    }
    var Cc = null,
        Ks = null,
        Gs = null;

    function vm(r) {
        if (r = Ti(r)) {
            if (typeof Cc != "function") throw Error(n(280));
            var o = r.stateNode;
            o && (o = ll(o), Cc(r.stateNode, r.type, o))
        }
    }

    function wm(r) {
        Ks ? Gs ? Gs.push(r) : Gs = [r] : Ks = r
    }

    function xm() {
        if (Ks) {
            var r = Ks,
                o = Gs;
            if (Gs = Ks = null, vm(r), o)
                for (r = 0; r < o.length; r++) vm(o[r])
        }
    }

    function Sm(r, o) {
        return r(o)
    }

    function bm() {}
    var Ec = !1;

    function Cm(r, o, a) {
        if (Ec) return r(o, a);
        Ec = !0;
        try {
            return Sm(r, o, a)
        } finally {
            Ec = !1, (Ks !== null || Gs !== null) && (bm(), xm())
        }
    }

    function si(r, o) {
        var a = r.stateNode;
        if (a === null) return null;
        var d = ll(a);
        if (d === null) return null;
        a = d[o];
        e: switch (o) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (d = !d.disabled) || (r = r.type, d = !(r === "button" || r === "input" || r === "select" || r === "textarea")), r = !d;
                break e;
            default:
                r = !1
        }
        if (r) return null;
        if (a && typeof a != "function") throw Error(n(231, o, typeof a));
        return a
    }
    var Tc = !1;
    if (c) try {
        var oi = {};
        Object.defineProperty(oi, "passive", {
            get: function() {
                Tc = !0
            }
        }), window.addEventListener("test", oi, oi), window.removeEventListener("test", oi, oi)
    } catch {
        Tc = !1
    }

    function tE(r, o, a, d, p, g, E, A, O) {
        var V = Array.prototype.slice.call(arguments, 3);
        try {
            o.apply(a, V)
        } catch (K) {
            this.onError(K)
        }
    }
    var ii = !1,
        Va = null,
        Ua = !1,
        kc = null,
        nE = {
            onError: function(r) {
                ii = !0, Va = r
            }
        };

    function rE(r, o, a, d, p, g, E, A, O) {
        ii = !1, Va = null, tE.apply(nE, arguments)
    }

    function sE(r, o, a, d, p, g, E, A, O) {
        if (rE.apply(this, arguments), ii) {
            if (ii) {
                var V = Va;
                ii = !1, Va = null
            } else throw Error(n(198));
            Ua || (Ua = !0, kc = V)
        }
    }

    function ss(r) {
        var o = r,
            a = r;
        if (r.alternate)
            for (; o.return;) o = o.return;
        else {
            r = o;
            do o = r, (o.flags & 4098) !== 0 && (a = o.return), r = o.return; while (r)
        }
        return o.tag === 3 ? a : null
    }

    function Em(r) {
        if (r.tag === 13) {
            var o = r.memoizedState;
            if (o === null && (r = r.alternate, r !== null && (o = r.memoizedState)), o !== null) return o.dehydrated
        }
        return null
    }

    function Tm(r) {
        if (ss(r) !== r) throw Error(n(188))
    }

    function oE(r) {
        var o = r.alternate;
        if (!o) {
            if (o = ss(r), o === null) throw Error(n(188));
            return o !== r ? null : r
        }
        for (var a = r, d = o;;) {
            var p = a.return;
            if (p === null) break;
            var g = p.alternate;
            if (g === null) {
                if (d = p.return, d !== null) {
                    a = d;
                    continue
                }
                break
            }
            if (p.child === g.child) {
                for (g = p.child; g;) {
                    if (g === a) return Tm(p), r;
                    if (g === d) return Tm(p), o;
                    g = g.sibling
                }
                throw Error(n(188))
            }
            if (a.return !== d.return) a = p, d = g;
            else {
                for (var E = !1, A = p.child; A;) {
                    if (A === a) {
                        E = !0, a = p, d = g;
                        break
                    }
                    if (A === d) {
                        E = !0, d = p, a = g;
                        break
                    }
                    A = A.sibling
                }
                if (!E) {
                    for (A = g.child; A;) {
                        if (A === a) {
                            E = !0, a = g, d = p;
                            break
                        }
                        if (A === d) {
                            E = !0, d = g, a = p;
                            break
                        }
                        A = A.sibling
                    }
                    if (!E) throw Error(n(189))
                }
            }
            if (a.alternate !== d) throw Error(n(190))
        }
        if (a.tag !== 3) throw Error(n(188));
        return a.stateNode.current === a ? r : o
    }

    function km(r) {
        return r = oE(r), r !== null ? Rm(r) : null
    }

    function Rm(r) {
        if (r.tag === 5 || r.tag === 6) return r;
        for (r = r.child; r !== null;) {
            var o = Rm(r);
            if (o !== null) return o;
            r = r.sibling
        }
        return null
    }
    var Pm = t.unstable_scheduleCallback,
        Am = t.unstable_cancelCallback,
        iE = t.unstable_shouldYield,
        aE = t.unstable_requestPaint,
        Je = t.unstable_now,
        lE = t.unstable_getCurrentPriorityLevel,
        Rc = t.unstable_ImmediatePriority,
        _m = t.unstable_UserBlockingPriority,
        za = t.unstable_NormalPriority,
        uE = t.unstable_LowPriority,
        Om = t.unstable_IdlePriority,
        $a = null,
        Rn = null;

    function cE(r) {
        if (Rn && typeof Rn.onCommitFiberRoot == "function") try {
            Rn.onCommitFiberRoot($a, r, void 0, (r.current.flags & 128) === 128)
        } catch {}
    }
    var fn = Math.clz32 ? Math.clz32 : hE,
        dE = Math.log,
        fE = Math.LN2;

    function hE(r) {
        return r >>>= 0, r === 0 ? 32 : 31 - (dE(r) / fE | 0) | 0
    }
    var Wa = 64,
        Ha = 4194304;

    function ai(r) {
        switch (r & -r) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return r & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return r & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return r
        }
    }

    function qa(r, o) {
        var a = r.pendingLanes;
        if (a === 0) return 0;
        var d = 0,
            p = r.suspendedLanes,
            g = r.pingedLanes,
            E = a & 268435455;
        if (E !== 0) {
            var A = E & ~p;
            A !== 0 ? d = ai(A) : (g &= E, g !== 0 && (d = ai(g)))
        } else E = a & ~p, E !== 0 ? d = ai(E) : g !== 0 && (d = ai(g));
        if (d === 0) return 0;
        if (o !== 0 && o !== d && (o & p) === 0 && (p = d & -d, g = o & -o, p >= g || p === 16 && (g & 4194240) !== 0)) return o;
        if ((d & 4) !== 0 && (d |= a & 16), o = r.entangledLanes, o !== 0)
            for (r = r.entanglements, o &= d; 0 < o;) a = 31 - fn(o), p = 1 << a, d |= r[a], o &= ~p;
        return d
    }

    function pE(r, o) {
        switch (r) {
            case 1:
            case 2:
            case 4:
                return o + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return o + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function mE(r, o) {
        for (var a = r.suspendedLanes, d = r.pingedLanes, p = r.expirationTimes, g = r.pendingLanes; 0 < g;) {
            var E = 31 - fn(g),
                A = 1 << E,
                O = p[E];
            O === -1 ? ((A & a) === 0 || (A & d) !== 0) && (p[E] = pE(A, o)) : O <= o && (r.expiredLanes |= A), g &= ~A
        }
    }

    function Pc(r) {
        return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0
    }

    function Nm() {
        var r = Wa;
        return Wa <<= 1, (Wa & 4194240) === 0 && (Wa = 64), r
    }

    function Ac(r) {
        for (var o = [], a = 0; 31 > a; a++) o.push(r);
        return o
    }

    function li(r, o, a) {
        r.pendingLanes |= o, o !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, o = 31 - fn(o), r[o] = a
    }

    function gE(r, o) {
        var a = r.pendingLanes & ~o;
        r.pendingLanes = o, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= o, r.mutableReadLanes &= o, r.entangledLanes &= o, o = r.entanglements;
        var d = r.eventTimes;
        for (r = r.expirationTimes; 0 < a;) {
            var p = 31 - fn(a),
                g = 1 << p;
            o[p] = 0, d[p] = -1, r[p] = -1, a &= ~g
        }
    }

    function _c(r, o) {
        var a = r.entangledLanes |= o;
        for (r = r.entanglements; a;) {
            var d = 31 - fn(a),
                p = 1 << d;
            p & o | r[d] & o && (r[d] |= o), a &= ~p
        }
    }
    var Fe = 0;

    function Mm(r) {
        return r &= -r, 1 < r ? 4 < r ? (r & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Lm, Oc, Dm, jm, Im, Nc = !1,
        Ka = [],
        fr = null,
        hr = null,
        pr = null,
        ui = new Map,
        ci = new Map,
        mr = [],
        yE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function Fm(r, o) {
        switch (r) {
            case "focusin":
            case "focusout":
                fr = null;
                break;
            case "dragenter":
            case "dragleave":
                hr = null;
                break;
            case "mouseover":
            case "mouseout":
                pr = null;
                break;
            case "pointerover":
            case "pointerout":
                ui.delete(o.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ci.delete(o.pointerId)
        }
    }

    function di(r, o, a, d, p, g) {
        return r === null || r.nativeEvent !== g ? (r = {
            blockedOn: o,
            domEventName: a,
            eventSystemFlags: d,
            nativeEvent: g,
            targetContainers: [p]
        }, o !== null && (o = Ti(o), o !== null && Oc(o)), r) : (r.eventSystemFlags |= d, o = r.targetContainers, p !== null && o.indexOf(p) === -1 && o.push(p), r)
    }

    function vE(r, o, a, d, p) {
        switch (o) {
            case "focusin":
                return fr = di(fr, r, o, a, d, p), !0;
            case "dragenter":
                return hr = di(hr, r, o, a, d, p), !0;
            case "mouseover":
                return pr = di(pr, r, o, a, d, p), !0;
            case "pointerover":
                var g = p.pointerId;
                return ui.set(g, di(ui.get(g) || null, r, o, a, d, p)), !0;
            case "gotpointercapture":
                return g = p.pointerId, ci.set(g, di(ci.get(g) || null, r, o, a, d, p)), !0
        }
        return !1
    }

    function Bm(r) {
        var o = os(r.target);
        if (o !== null) {
            var a = ss(o);
            if (a !== null) {
                if (o = a.tag, o === 13) {
                    if (o = Em(a), o !== null) {
                        r.blockedOn = o, Im(r.priority, function() {
                            Dm(a)
                        });
                        return
                    }
                } else if (o === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    r.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        r.blockedOn = null
    }

    function Ga(r) {
        if (r.blockedOn !== null) return !1;
        for (var o = r.targetContainers; 0 < o.length;) {
            var a = Lc(r.domEventName, r.eventSystemFlags, o[0], r.nativeEvent);
            if (a === null) {
                a = r.nativeEvent;
                var d = new a.constructor(a.type, a);
                Sc = d, a.target.dispatchEvent(d), Sc = null
            } else return o = Ti(a), o !== null && Oc(o), r.blockedOn = a, !1;
            o.shift()
        }
        return !0
    }

    function Vm(r, o, a) {
        Ga(r) && a.delete(o)
    }

    function wE() {
        Nc = !1, fr !== null && Ga(fr) && (fr = null), hr !== null && Ga(hr) && (hr = null), pr !== null && Ga(pr) && (pr = null), ui.forEach(Vm), ci.forEach(Vm)
    }

    function fi(r, o) {
        r.blockedOn === o && (r.blockedOn = null, Nc || (Nc = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, wE)))
    }

    function hi(r) {
        function o(p) {
            return fi(p, r)
        }
        if (0 < Ka.length) {
            fi(Ka[0], r);
            for (var a = 1; a < Ka.length; a++) {
                var d = Ka[a];
                d.blockedOn === r && (d.blockedOn = null)
            }
        }
        for (fr !== null && fi(fr, r), hr !== null && fi(hr, r), pr !== null && fi(pr, r), ui.forEach(o), ci.forEach(o), a = 0; a < mr.length; a++) d = mr[a], d.blockedOn === r && (d.blockedOn = null);
        for (; 0 < mr.length && (a = mr[0], a.blockedOn === null);) Bm(a), a.blockedOn === null && mr.shift()
    }
    var Qs = _.ReactCurrentBatchConfig,
        Qa = !0;

    function xE(r, o, a, d) {
        var p = Fe,
            g = Qs.transition;
        Qs.transition = null;
        try {
            Fe = 1, Mc(r, o, a, d)
        } finally {
            Fe = p, Qs.transition = g
        }
    }

    function SE(r, o, a, d) {
        var p = Fe,
            g = Qs.transition;
        Qs.transition = null;
        try {
            Fe = 4, Mc(r, o, a, d)
        } finally {
            Fe = p, Qs.transition = g
        }
    }

    function Mc(r, o, a, d) {
        if (Qa) {
            var p = Lc(r, o, a, d);
            if (p === null) Xc(r, o, d, Ya, a), Fm(r, d);
            else if (vE(p, r, o, a, d)) d.stopPropagation();
            else if (Fm(r, d), o & 4 && -1 < yE.indexOf(r)) {
                for (; p !== null;) {
                    var g = Ti(p);
                    if (g !== null && Lm(g), g = Lc(r, o, a, d), g === null && Xc(r, o, d, Ya, a), g === p) break;
                    p = g
                }
                p !== null && d.stopPropagation()
            } else Xc(r, o, d, null, a)
        }
    }
    var Ya = null;

    function Lc(r, o, a, d) {
        if (Ya = null, r = bc(d), r = os(r), r !== null)
            if (o = ss(r), o === null) r = null;
            else if (a = o.tag, a === 13) {
            if (r = Em(o), r !== null) return r;
            r = null
        } else if (a === 3) {
            if (o.stateNode.current.memoizedState.isDehydrated) return o.tag === 3 ? o.stateNode.containerInfo : null;
            r = null
        } else o !== r && (r = null);
        return Ya = r, null
    }

    function Um(r) {
        switch (r) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (lE()) {
                    case Rc:
                        return 1;
                    case _m:
                        return 4;
                    case za:
                    case uE:
                        return 16;
                    case Om:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var gr = null,
        Dc = null,
        Xa = null;

    function zm() {
        if (Xa) return Xa;
        var r, o = Dc,
            a = o.length,
            d, p = "value" in gr ? gr.value : gr.textContent,
            g = p.length;
        for (r = 0; r < a && o[r] === p[r]; r++);
        var E = a - r;
        for (d = 1; d <= E && o[a - d] === p[g - d]; d++);
        return Xa = p.slice(r, 1 < d ? 1 - d : void 0)
    }

    function Ja(r) {
        var o = r.keyCode;
        return "charCode" in r ? (r = r.charCode, r === 0 && o === 13 && (r = 13)) : r = o, r === 10 && (r = 13), 32 <= r || r === 13 ? r : 0
    }

    function Za() {
        return !0
    }

    function $m() {
        return !1
    }

    function Ht(r) {
        function o(a, d, p, g, E) {
            this._reactName = a, this._targetInst = p, this.type = d, this.nativeEvent = g, this.target = E, this.currentTarget = null;
            for (var A in r) r.hasOwnProperty(A) && (a = r[A], this[A] = a ? a(g) : g[A]);
            return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? Za : $m, this.isPropagationStopped = $m, this
        }
        return W(o.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Za)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Za)
            },
            persist: function() {},
            isPersistent: Za
        }), o
    }
    var Ys = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(r) {
                return r.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        jc = Ht(Ys),
        pi = W({}, Ys, {
            view: 0,
            detail: 0
        }),
        bE = Ht(pi),
        Ic, Fc, mi, el = W({}, pi, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Vc,
            button: 0,
            buttons: 0,
            relatedTarget: function(r) {
                return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget
            },
            movementX: function(r) {
                return "movementX" in r ? r.movementX : (r !== mi && (mi && r.type === "mousemove" ? (Ic = r.screenX - mi.screenX, Fc = r.screenY - mi.screenY) : Fc = Ic = 0, mi = r), Ic)
            },
            movementY: function(r) {
                return "movementY" in r ? r.movementY : Fc
            }
        }),
        Wm = Ht(el),
        CE = W({}, el, {
            dataTransfer: 0
        }),
        EE = Ht(CE),
        TE = W({}, pi, {
            relatedTarget: 0
        }),
        Bc = Ht(TE),
        kE = W({}, Ys, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        RE = Ht(kE),
        PE = W({}, Ys, {
            clipboardData: function(r) {
                return "clipboardData" in r ? r.clipboardData : window.clipboardData
            }
        }),
        AE = Ht(PE),
        _E = W({}, Ys, {
            data: 0
        }),
        Hm = Ht(_E),
        OE = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        NE = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        ME = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function LE(r) {
        var o = this.nativeEvent;
        return o.getModifierState ? o.getModifierState(r) : (r = ME[r]) ? !!o[r] : !1
    }

    function Vc() {
        return LE
    }
    var DE = W({}, pi, {
            key: function(r) {
                if (r.key) {
                    var o = OE[r.key] || r.key;
                    if (o !== "Unidentified") return o
                }
                return r.type === "keypress" ? (r = Ja(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? NE[r.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Vc,
            charCode: function(r) {
                return r.type === "keypress" ? Ja(r) : 0
            },
            keyCode: function(r) {
                return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0
            },
            which: function(r) {
                return r.type === "keypress" ? Ja(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0
            }
        }),
        jE = Ht(DE),
        IE = W({}, el, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        qm = Ht(IE),
        FE = W({}, pi, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Vc
        }),
        BE = Ht(FE),
        VE = W({}, Ys, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        UE = Ht(VE),
        zE = W({}, el, {
            deltaX: function(r) {
                return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0
            },
            deltaY: function(r) {
                return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        $E = Ht(zE),
        WE = [9, 13, 27, 32],
        Uc = c && "CompositionEvent" in window,
        gi = null;
    c && "documentMode" in document && (gi = document.documentMode);
    var HE = c && "TextEvent" in window && !gi,
        Km = c && (!Uc || gi && 8 < gi && 11 >= gi),
        Gm = " ",
        Qm = !1;

    function Ym(r, o) {
        switch (r) {
            case "keyup":
                return WE.indexOf(o.keyCode) !== -1;
            case "keydown":
                return o.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Xm(r) {
        return r = r.detail, typeof r == "object" && "data" in r ? r.data : null
    }
    var Xs = !1;

    function qE(r, o) {
        switch (r) {
            case "compositionend":
                return Xm(o);
            case "keypress":
                return o.which !== 32 ? null : (Qm = !0, Gm);
            case "textInput":
                return r = o.data, r === Gm && Qm ? null : r;
            default:
                return null
        }
    }

    function KE(r, o) {
        if (Xs) return r === "compositionend" || !Uc && Ym(r, o) ? (r = zm(), Xa = Dc = gr = null, Xs = !1, r) : null;
        switch (r) {
            case "paste":
                return null;
            case "keypress":
                if (!(o.ctrlKey || o.altKey || o.metaKey) || o.ctrlKey && o.altKey) {
                    if (o.char && 1 < o.char.length) return o.char;
                    if (o.which) return String.fromCharCode(o.which)
                }
                return null;
            case "compositionend":
                return Km && o.locale !== "ko" ? null : o.data;
            default:
                return null
        }
    }
    var GE = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Jm(r) {
        var o = r && r.nodeName && r.nodeName.toLowerCase();
        return o === "input" ? !!GE[r.type] : o === "textarea"
    }

    function Zm(r, o, a, d) {
        wm(d), o = ol(o, "onChange"), 0 < o.length && (a = new jc("onChange", "change", null, a, d), r.push({
            event: a,
            listeners: o
        }))
    }
    var yi = null,
        vi = null;

    function QE(r) {
        yg(r, 0)
    }

    function tl(r) {
        var o = no(r);
        if (Oe(o)) return r
    }

    function YE(r, o) {
        if (r === "change") return o
    }
    var eg = !1;
    if (c) {
        var zc;
        if (c) {
            var $c = "oninput" in document;
            if (!$c) {
                var tg = document.createElement("div");
                tg.setAttribute("oninput", "return;"), $c = typeof tg.oninput == "function"
            }
            zc = $c
        } else zc = !1;
        eg = zc && (!document.documentMode || 9 < document.documentMode)
    }

    function ng() {
        yi && (yi.detachEvent("onpropertychange", rg), vi = yi = null)
    }

    function rg(r) {
        if (r.propertyName === "value" && tl(vi)) {
            var o = [];
            Zm(o, vi, r, bc(r)), Cm(QE, o)
        }
    }

    function XE(r, o, a) {
        r === "focusin" ? (ng(), yi = o, vi = a, yi.attachEvent("onpropertychange", rg)) : r === "focusout" && ng()
    }

    function JE(r) {
        if (r === "selectionchange" || r === "keyup" || r === "keydown") return tl(vi)
    }

    function ZE(r, o) {
        if (r === "click") return tl(o)
    }

    function eT(r, o) {
        if (r === "input" || r === "change") return tl(o)
    }

    function tT(r, o) {
        return r === o && (r !== 0 || 1 / r === 1 / o) || r !== r && o !== o
    }
    var hn = typeof Object.is == "function" ? Object.is : tT;

    function wi(r, o) {
        if (hn(r, o)) return !0;
        if (typeof r != "object" || r === null || typeof o != "object" || o === null) return !1;
        var a = Object.keys(r),
            d = Object.keys(o);
        if (a.length !== d.length) return !1;
        for (d = 0; d < a.length; d++) {
            var p = a[d];
            if (!f.call(o, p) || !hn(r[p], o[p])) return !1
        }
        return !0
    }

    function sg(r) {
        for (; r && r.firstChild;) r = r.firstChild;
        return r
    }

    function og(r, o) {
        var a = sg(r);
        r = 0;
        for (var d; a;) {
            if (a.nodeType === 3) {
                if (d = r + a.textContent.length, r <= o && d >= o) return {
                    node: a,
                    offset: o - r
                };
                r = d
            }
            e: {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = sg(a)
        }
    }

    function ig(r, o) {
        return r && o ? r === o ? !0 : r && r.nodeType === 3 ? !1 : o && o.nodeType === 3 ? ig(r, o.parentNode) : "contains" in r ? r.contains(o) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(o) & 16) : !1 : !1
    }

    function ag() {
        for (var r = window, o = Ge(); o instanceof r.HTMLIFrameElement;) {
            try {
                var a = typeof o.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a) r = o.contentWindow;
            else break;
            o = Ge(r.document)
        }
        return o
    }

    function Wc(r) {
        var o = r && r.nodeName && r.nodeName.toLowerCase();
        return o && (o === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || o === "textarea" || r.contentEditable === "true")
    }

    function nT(r) {
        var o = ag(),
            a = r.focusedElem,
            d = r.selectionRange;
        if (o !== a && a && a.ownerDocument && ig(a.ownerDocument.documentElement, a)) {
            if (d !== null && Wc(a)) {
                if (o = d.start, r = d.end, r === void 0 && (r = o), "selectionStart" in a) a.selectionStart = o, a.selectionEnd = Math.min(r, a.value.length);
                else if (r = (o = a.ownerDocument || document) && o.defaultView || window, r.getSelection) {
                    r = r.getSelection();
                    var p = a.textContent.length,
                        g = Math.min(d.start, p);
                    d = d.end === void 0 ? g : Math.min(d.end, p), !r.extend && g > d && (p = d, d = g, g = p), p = og(a, g);
                    var E = og(a, d);
                    p && E && (r.rangeCount !== 1 || r.anchorNode !== p.node || r.anchorOffset !== p.offset || r.focusNode !== E.node || r.focusOffset !== E.offset) && (o = o.createRange(), o.setStart(p.node, p.offset), r.removeAllRanges(), g > d ? (r.addRange(o), r.extend(E.node, E.offset)) : (o.setEnd(E.node, E.offset), r.addRange(o)))
                }
            }
            for (o = [], r = a; r = r.parentNode;) r.nodeType === 1 && o.push({
                element: r,
                left: r.scrollLeft,
                top: r.scrollTop
            });
            for (typeof a.focus == "function" && a.focus(), a = 0; a < o.length; a++) r = o[a], r.element.scrollLeft = r.left, r.element.scrollTop = r.top
        }
    }
    var rT = c && "documentMode" in document && 11 >= document.documentMode,
        Js = null,
        Hc = null,
        xi = null,
        qc = !1;

    function lg(r, o, a) {
        var d = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        qc || Js == null || Js !== Ge(d) || (d = Js, "selectionStart" in d && Wc(d) ? d = {
            start: d.selectionStart,
            end: d.selectionEnd
        } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
            anchorNode: d.anchorNode,
            anchorOffset: d.anchorOffset,
            focusNode: d.focusNode,
            focusOffset: d.focusOffset
        }), xi && wi(xi, d) || (xi = d, d = ol(Hc, "onSelect"), 0 < d.length && (o = new jc("onSelect", "select", null, o, a), r.push({
            event: o,
            listeners: d
        }), o.target = Js)))
    }

    function nl(r, o) {
        var a = {};
        return a[r.toLowerCase()] = o.toLowerCase(), a["Webkit" + r] = "webkit" + o, a["Moz" + r] = "moz" + o, a
    }
    var Zs = {
            animationend: nl("Animation", "AnimationEnd"),
            animationiteration: nl("Animation", "AnimationIteration"),
            animationstart: nl("Animation", "AnimationStart"),
            transitionend: nl("Transition", "TransitionEnd")
        },
        Kc = {},
        ug = {};
    c && (ug = document.createElement("div").style, "AnimationEvent" in window || (delete Zs.animationend.animation, delete Zs.animationiteration.animation, delete Zs.animationstart.animation), "TransitionEvent" in window || delete Zs.transitionend.transition);

    function rl(r) {
        if (Kc[r]) return Kc[r];
        if (!Zs[r]) return r;
        var o = Zs[r],
            a;
        for (a in o)
            if (o.hasOwnProperty(a) && a in ug) return Kc[r] = o[a];
        return r
    }
    var cg = rl("animationend"),
        dg = rl("animationiteration"),
        fg = rl("animationstart"),
        hg = rl("transitionend"),
        pg = new Map,
        mg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function yr(r, o) {
        pg.set(r, o), l(o, [r])
    }
    for (var Gc = 0; Gc < mg.length; Gc++) {
        var Qc = mg[Gc],
            sT = Qc.toLowerCase(),
            oT = Qc[0].toUpperCase() + Qc.slice(1);
        yr(sT, "on" + oT)
    }
    yr(cg, "onAnimationEnd"), yr(dg, "onAnimationIteration"), yr(fg, "onAnimationStart"), yr("dblclick", "onDoubleClick"), yr("focusin", "onFocus"), yr("focusout", "onBlur"), yr(hg, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Si = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        iT = new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));

    function gg(r, o, a) {
        var d = r.type || "unknown-event";
        r.currentTarget = a, sE(d, o, void 0, r), r.currentTarget = null
    }

    function yg(r, o) {
        o = (o & 4) !== 0;
        for (var a = 0; a < r.length; a++) {
            var d = r[a],
                p = d.event;
            d = d.listeners;
            e: {
                var g = void 0;
                if (o)
                    for (var E = d.length - 1; 0 <= E; E--) {
                        var A = d[E],
                            O = A.instance,
                            V = A.currentTarget;
                        if (A = A.listener, O !== g && p.isPropagationStopped()) break e;
                        gg(p, A, V), g = O
                    } else
                        for (E = 0; E < d.length; E++) {
                            if (A = d[E], O = A.instance, V = A.currentTarget, A = A.listener, O !== g && p.isPropagationStopped()) break e;
                            gg(p, A, V), g = O
                        }
            }
        }
        if (Ua) throw r = kc, Ua = !1, kc = null, r
    }

    function Ue(r, o) {
        var a = o[rd];
        a === void 0 && (a = o[rd] = new Set);
        var d = r + "__bubble";
        a.has(d) || (vg(o, r, 2, !1), a.add(d))
    }

    function Yc(r, o, a) {
        var d = 0;
        o && (d |= 4), vg(a, r, d, o)
    }
    var sl = "_reactListening" + Math.random().toString(36).slice(2);

    function bi(r) {
        if (!r[sl]) {
            r[sl] = !0, s.forEach(function(a) {
                a !== "selectionchange" && (iT.has(a) || Yc(a, !1, r), Yc(a, !0, r))
            });
            var o = r.nodeType === 9 ? r : r.ownerDocument;
            o === null || o[sl] || (o[sl] = !0, Yc("selectionchange", !1, o))
        }
    }

    function vg(r, o, a, d) {
        switch (Um(o)) {
            case 1:
                var p = xE;
                break;
            case 4:
                p = SE;
                break;
            default:
                p = Mc
        }
        a = p.bind(null, o, a, r), p = void 0, !Tc || o !== "touchstart" && o !== "touchmove" && o !== "wheel" || (p = !0), d ? p !== void 0 ? r.addEventListener(o, a, {
            capture: !0,
            passive: p
        }) : r.addEventListener(o, a, !0) : p !== void 0 ? r.addEventListener(o, a, {
            passive: p
        }) : r.addEventListener(o, a, !1)
    }

    function Xc(r, o, a, d, p) {
        var g = d;
        if ((o & 1) === 0 && (o & 2) === 0 && d !== null) e: for (;;) {
            if (d === null) return;
            var E = d.tag;
            if (E === 3 || E === 4) {
                var A = d.stateNode.containerInfo;
                if (A === p || A.nodeType === 8 && A.parentNode === p) break;
                if (E === 4)
                    for (E = d.return; E !== null;) {
                        var O = E.tag;
                        if ((O === 3 || O === 4) && (O = E.stateNode.containerInfo, O === p || O.nodeType === 8 && O.parentNode === p)) return;
                        E = E.return
                    }
                for (; A !== null;) {
                    if (E = os(A), E === null) return;
                    if (O = E.tag, O === 5 || O === 6) {
                        d = g = E;
                        continue e
                    }
                    A = A.parentNode
                }
            }
            d = d.return
        }
        Cm(function() {
            var V = g,
                K = bc(a),
                Q = [];
            e: {
                var q = pg.get(r);
                if (q !== void 0) {
                    var re = jc,
                        ie = r;
                    switch (r) {
                        case "keypress":
                            if (Ja(a) === 0) break e;
                        case "keydown":
                        case "keyup":
                            re = jE;
                            break;
                        case "focusin":
                            ie = "focus", re = Bc;
                            break;
                        case "focusout":
                            ie = "blur", re = Bc;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            re = Bc;
                            break;
                        case "click":
                            if (a.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            re = Wm;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            re = EE;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            re = BE;
                            break;
                        case cg:
                        case dg:
                        case fg:
                            re = RE;
                            break;
                        case hg:
                            re = UE;
                            break;
                        case "scroll":
                            re = bE;
                            break;
                        case "wheel":
                            re = $E;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            re = AE;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            re = qm
                    }
                    var ce = (o & 4) !== 0,
                        Ze = !ce && r === "scroll",
                        I = ce ? q !== null ? q + "Capture" : null : q;
                    ce = [];
                    for (var L = V, F; L !== null;) {
                        F = L;
                        var Y = F.stateNode;
                        if (F.tag === 5 && Y !== null && (F = Y, I !== null && (Y = si(L, I), Y != null && ce.push(Ci(L, Y, F)))), Ze) break;
                        L = L.return
                    }
                    0 < ce.length && (q = new re(q, ie, null, a, K), Q.push({
                        event: q,
                        listeners: ce
                    }))
                }
            }
            if ((o & 7) === 0) {
                e: {
                    if (q = r === "mouseover" || r === "pointerover", re = r === "mouseout" || r === "pointerout", q && a !== Sc && (ie = a.relatedTarget || a.fromElement) && (os(ie) || ie[Hn])) break e;
                    if ((re || q) && (q = K.window === K ? K : (q = K.ownerDocument) ? q.defaultView || q.parentWindow : window, re ? (ie = a.relatedTarget || a.toElement, re = V, ie = ie ? os(ie) : null, ie !== null && (Ze = ss(ie), ie !== Ze || ie.tag !== 5 && ie.tag !== 6) && (ie = null)) : (re = null, ie = V), re !== ie)) {
                        if (ce = Wm, Y = "onMouseLeave", I = "onMouseEnter", L = "mouse", (r === "pointerout" || r === "pointerover") && (ce = qm, Y = "onPointerLeave", I = "onPointerEnter", L = "pointer"), Ze = re == null ? q : no(re), F = ie == null ? q : no(ie), q = new ce(Y, L + "leave", re, a, K), q.target = Ze, q.relatedTarget = F, Y = null, os(K) === V && (ce = new ce(I, L + "enter", ie, a, K), ce.target = F, ce.relatedTarget = Ze, Y = ce), Ze = Y, re && ie) t: {
                            for (ce = re, I = ie, L = 0, F = ce; F; F = eo(F)) L++;
                            for (F = 0, Y = I; Y; Y = eo(Y)) F++;
                            for (; 0 < L - F;) ce = eo(ce),
                            L--;
                            for (; 0 < F - L;) I = eo(I),
                            F--;
                            for (; L--;) {
                                if (ce === I || I !== null && ce === I.alternate) break t;
                                ce = eo(ce), I = eo(I)
                            }
                            ce = null
                        }
                        else ce = null;
                        re !== null && wg(Q, q, re, ce, !1), ie !== null && Ze !== null && wg(Q, Ze, ie, ce, !0)
                    }
                }
                e: {
                    if (q = V ? no(V) : window, re = q.nodeName && q.nodeName.toLowerCase(), re === "select" || re === "input" && q.type === "file") var he = YE;
                    else if (Jm(q))
                        if (eg) he = eT;
                        else {
                            he = JE;
                            var xe = XE
                        }
                    else(re = q.nodeName) && re.toLowerCase() === "input" && (q.type === "checkbox" || q.type === "radio") && (he = ZE);
                    if (he && (he = he(r, V))) {
                        Zm(Q, he, a, K);
                        break e
                    }
                    xe && xe(r, q, V),
                    r === "focusout" && (xe = q._wrapperState) && xe.controlled && q.type === "number" && dr(q, "number", q.value)
                }
                switch (xe = V ? no(V) : window, r) {
                    case "focusin":
                        (Jm(xe) || xe.contentEditable === "true") && (Js = xe, Hc = V, xi = null);
                        break;
                    case "focusout":
                        xi = Hc = Js = null;
                        break;
                    case "mousedown":
                        qc = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        qc = !1, lg(Q, a, K);
                        break;
                    case "selectionchange":
                        if (rT) break;
                    case "keydown":
                    case "keyup":
                        lg(Q, a, K)
                }
                var Se;
                if (Uc) e: {
                    switch (r) {
                        case "compositionstart":
                            var ke = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ke = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ke = "onCompositionUpdate";
                            break e
                    }
                    ke = void 0
                }
                else Xs ? Ym(r, a) && (ke = "onCompositionEnd") : r === "keydown" && a.keyCode === 229 && (ke = "onCompositionStart");ke && (Km && a.locale !== "ko" && (Xs || ke !== "onCompositionStart" ? ke === "onCompositionEnd" && Xs && (Se = zm()) : (gr = K, Dc = "value" in gr ? gr.value : gr.textContent, Xs = !0)), xe = ol(V, ke), 0 < xe.length && (ke = new Hm(ke, r, null, a, K), Q.push({
                    event: ke,
                    listeners: xe
                }), Se ? ke.data = Se : (Se = Xm(a), Se !== null && (ke.data = Se)))),
                (Se = HE ? qE(r, a) : KE(r, a)) && (V = ol(V, "onBeforeInput"), 0 < V.length && (K = new Hm("onBeforeInput", "beforeinput", null, a, K), Q.push({
                    event: K,
                    listeners: V
                }), K.data = Se))
            }
            yg(Q, o)
        })
    }

    function Ci(r, o, a) {
        return {
            instance: r,
            listener: o,
            currentTarget: a
        }
    }

    function ol(r, o) {
        for (var a = o + "Capture", d = []; r !== null;) {
            var p = r,
                g = p.stateNode;
            p.tag === 5 && g !== null && (p = g, g = si(r, a), g != null && d.unshift(Ci(r, g, p)), g = si(r, o), g != null && d.push(Ci(r, g, p))), r = r.return
        }
        return d
    }

    function eo(r) {
        if (r === null) return null;
        do r = r.return; while (r && r.tag !== 5);
        return r || null
    }

    function wg(r, o, a, d, p) {
        for (var g = o._reactName, E = []; a !== null && a !== d;) {
            var A = a,
                O = A.alternate,
                V = A.stateNode;
            if (O !== null && O === d) break;
            A.tag === 5 && V !== null && (A = V, p ? (O = si(a, g), O != null && E.unshift(Ci(a, O, A))) : p || (O = si(a, g), O != null && E.push(Ci(a, O, A)))), a = a.return
        }
        E.length !== 0 && r.push({
            event: o,
            listeners: E
        })
    }
    var aT = /\r\n?/g,
        lT = /\u0000|\uFFFD/g;

    function xg(r) {
        return (typeof r == "string" ? r : "" + r).replace(aT, `
`).replace(lT, "")
    }

    function il(r, o, a) {
        if (o = xg(o), xg(r) !== o && a) throw Error(n(425))
    }

    function al() {}
    var Jc = null,
        Zc = null;

    function ed(r, o) {
        return r === "textarea" || r === "noscript" || typeof o.children == "string" || typeof o.children == "number" || typeof o.dangerouslySetInnerHTML == "object" && o.dangerouslySetInnerHTML !== null && o.dangerouslySetInnerHTML.__html != null
    }
    var td = typeof setTimeout == "function" ? setTimeout : void 0,
        uT = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Sg = typeof Promise == "function" ? Promise : void 0,
        cT = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sg < "u" ? function(r) {
            return Sg.resolve(null).then(r).catch(dT)
        } : td;

    function dT(r) {
        setTimeout(function() {
            throw r
        })
    }

    function nd(r, o) {
        var a = o,
            d = 0;
        do {
            var p = a.nextSibling;
            if (r.removeChild(a), p && p.nodeType === 8)
                if (a = p.data, a === "/$") {
                    if (d === 0) {
                        r.removeChild(p), hi(o);
                        return
                    }
                    d--
                } else a !== "$" && a !== "$?" && a !== "$!" || d++;
            a = p
        } while (a);
        hi(o)
    }

    function vr(r) {
        for (; r != null; r = r.nextSibling) {
            var o = r.nodeType;
            if (o === 1 || o === 3) break;
            if (o === 8) {
                if (o = r.data, o === "$" || o === "$!" || o === "$?") break;
                if (o === "/$") return null
            }
        }
        return r
    }

    function bg(r) {
        r = r.previousSibling;
        for (var o = 0; r;) {
            if (r.nodeType === 8) {
                var a = r.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (o === 0) return r;
                    o--
                } else a === "/$" && o++
            }
            r = r.previousSibling
        }
        return null
    }
    var to = Math.random().toString(36).slice(2),
        Pn = "__reactFiber$" + to,
        Ei = "__reactProps$" + to,
        Hn = "__reactContainer$" + to,
        rd = "__reactEvents$" + to,
        fT = "__reactListeners$" + to,
        hT = "__reactHandles$" + to;

    function os(r) {
        var o = r[Pn];
        if (o) return o;
        for (var a = r.parentNode; a;) {
            if (o = a[Hn] || a[Pn]) {
                if (a = o.alternate, o.child !== null || a !== null && a.child !== null)
                    for (r = bg(r); r !== null;) {
                        if (a = r[Pn]) return a;
                        r = bg(r)
                    }
                return o
            }
            r = a, a = r.parentNode
        }
        return null
    }

    function Ti(r) {
        return r = r[Pn] || r[Hn], !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r
    }

    function no(r) {
        if (r.tag === 5 || r.tag === 6) return r.stateNode;
        throw Error(n(33))
    }

    function ll(r) {
        return r[Ei] || null
    }
    var sd = [],
        ro = -1;

    function wr(r) {
        return {
            current: r
        }
    }

    function ze(r) {
        0 > ro || (r.current = sd[ro], sd[ro] = null, ro--)
    }

    function Ve(r, o) {
        ro++, sd[ro] = r.current, r.current = o
    }
    var xr = {},
        St = wr(xr),
        Lt = wr(!1),
        is = xr;

    function so(r, o) {
        var a = r.type.contextTypes;
        if (!a) return xr;
        var d = r.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === o) return d.__reactInternalMemoizedMaskedChildContext;
        var p = {},
            g;
        for (g in a) p[g] = o[g];
        return d && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = o, r.__reactInternalMemoizedMaskedChildContext = p), p
    }

    function Dt(r) {
        return r = r.childContextTypes, r != null
    }

    function ul() {
        ze(Lt), ze(St)
    }

    function Cg(r, o, a) {
        if (St.current !== xr) throw Error(n(168));
        Ve(St, o), Ve(Lt, a)
    }

    function Eg(r, o, a) {
        var d = r.stateNode;
        if (o = o.childContextTypes, typeof d.getChildContext != "function") return a;
        d = d.getChildContext();
        for (var p in d)
            if (!(p in o)) throw Error(n(108, ne(r) || "Unknown", p));
        return W({}, a, d)
    }

    function cl(r) {
        return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || xr, is = St.current, Ve(St, r), Ve(Lt, Lt.current), !0
    }

    function Tg(r, o, a) {
        var d = r.stateNode;
        if (!d) throw Error(n(169));
        a ? (r = Eg(r, o, is), d.__reactInternalMemoizedMergedChildContext = r, ze(Lt), ze(St), Ve(St, r)) : ze(Lt), Ve(Lt, a)
    }
    var qn = null,
        dl = !1,
        od = !1;

    function kg(r) {
        qn === null ? qn = [r] : qn.push(r)
    }

    function pT(r) {
        dl = !0, kg(r)
    }

    function Sr() {
        if (!od && qn !== null) {
            od = !0;
            var r = 0,
                o = Fe;
            try {
                var a = qn;
                for (Fe = 1; r < a.length; r++) {
                    var d = a[r];
                    do d = d(!0); while (d !== null)
                }
                qn = null, dl = !1
            } catch (p) {
                throw qn !== null && (qn = qn.slice(r + 1)), Pm(Rc, Sr), p
            } finally {
                Fe = o, od = !1
            }
        }
        return null
    }
    var oo = [],
        io = 0,
        fl = null,
        hl = 0,
        Zt = [],
        en = 0,
        as = null,
        Kn = 1,
        Gn = "";

    function ls(r, o) {
        oo[io++] = hl, oo[io++] = fl, fl = r, hl = o
    }

    function Rg(r, o, a) {
        Zt[en++] = Kn, Zt[en++] = Gn, Zt[en++] = as, as = r;
        var d = Kn;
        r = Gn;
        var p = 32 - fn(d) - 1;
        d &= ~(1 << p), a += 1;
        var g = 32 - fn(o) + p;
        if (30 < g) {
            var E = p - p % 5;
            g = (d & (1 << E) - 1).toString(32), d >>= E, p -= E, Kn = 1 << 32 - fn(o) + p | a << p | d, Gn = g + r
        } else Kn = 1 << g | a << p | d, Gn = r
    }

    function id(r) {
        r.return !== null && (ls(r, 1), Rg(r, 1, 0))
    }

    function ad(r) {
        for (; r === fl;) fl = oo[--io], oo[io] = null, hl = oo[--io], oo[io] = null;
        for (; r === as;) as = Zt[--en], Zt[en] = null, Gn = Zt[--en], Zt[en] = null, Kn = Zt[--en], Zt[en] = null
    }
    var qt = null,
        Kt = null,
        We = !1,
        pn = null;

    function Pg(r, o) {
        var a = sn(5, null, null, 0);
        a.elementType = "DELETED", a.stateNode = o, a.return = r, o = r.deletions, o === null ? (r.deletions = [a], r.flags |= 16) : o.push(a)
    }

    function Ag(r, o) {
        switch (r.tag) {
            case 5:
                var a = r.type;
                return o = o.nodeType !== 1 || a.toLowerCase() !== o.nodeName.toLowerCase() ? null : o, o !== null ? (r.stateNode = o, qt = r, Kt = vr(o.firstChild), !0) : !1;
            case 6:
                return o = r.pendingProps === "" || o.nodeType !== 3 ? null : o, o !== null ? (r.stateNode = o, qt = r, Kt = null, !0) : !1;
            case 13:
                return o = o.nodeType !== 8 ? null : o, o !== null ? (a = as !== null ? {
                    id: Kn,
                    overflow: Gn
                } : null, r.memoizedState = {
                    dehydrated: o,
                    treeContext: a,
                    retryLane: 1073741824
                }, a = sn(18, null, null, 0), a.stateNode = o, a.return = r, r.child = a, qt = r, Kt = null, !0) : !1;
            default:
                return !1
        }
    }

    function ld(r) {
        return (r.mode & 1) !== 0 && (r.flags & 128) === 0
    }

    function ud(r) {
        if (We) {
            var o = Kt;
            if (o) {
                var a = o;
                if (!Ag(r, o)) {
                    if (ld(r)) throw Error(n(418));
                    o = vr(a.nextSibling);
                    var d = qt;
                    o && Ag(r, o) ? Pg(d, a) : (r.flags = r.flags & -4097 | 2, We = !1, qt = r)
                }
            } else {
                if (ld(r)) throw Error(n(418));
                r.flags = r.flags & -4097 | 2, We = !1, qt = r
            }
        }
    }

    function _g(r) {
        for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13;) r = r.return;
        qt = r
    }

    function pl(r) {
        if (r !== qt) return !1;
        if (!We) return _g(r), We = !0, !1;
        var o;
        if ((o = r.tag !== 3) && !(o = r.tag !== 5) && (o = r.type, o = o !== "head" && o !== "body" && !ed(r.type, r.memoizedProps)), o && (o = Kt)) {
            if (ld(r)) throw Og(), Error(n(418));
            for (; o;) Pg(r, o), o = vr(o.nextSibling)
        }
        if (_g(r), r.tag === 13) {
            if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(n(317));
            e: {
                for (r = r.nextSibling, o = 0; r;) {
                    if (r.nodeType === 8) {
                        var a = r.data;
                        if (a === "/$") {
                            if (o === 0) {
                                Kt = vr(r.nextSibling);
                                break e
                            }
                            o--
                        } else a !== "$" && a !== "$!" && a !== "$?" || o++
                    }
                    r = r.nextSibling
                }
                Kt = null
            }
        } else Kt = qt ? vr(r.stateNode.nextSibling) : null;
        return !0
    }

    function Og() {
        for (var r = Kt; r;) r = vr(r.nextSibling)
    }

    function ao() {
        Kt = qt = null, We = !1
    }

    function cd(r) {
        pn === null ? pn = [r] : pn.push(r)
    }
    var mT = _.ReactCurrentBatchConfig;

    function ki(r, o, a) {
        if (r = a.ref, r !== null && typeof r != "function" && typeof r != "object") {
            if (a._owner) {
                if (a = a._owner, a) {
                    if (a.tag !== 1) throw Error(n(309));
                    var d = a.stateNode
                }
                if (!d) throw Error(n(147, r));
                var p = d,
                    g = "" + r;
                return o !== null && o.ref !== null && typeof o.ref == "function" && o.ref._stringRef === g ? o.ref : (o = function(E) {
                    var A = p.refs;
                    E === null ? delete A[g] : A[g] = E
                }, o._stringRef = g, o)
            }
            if (typeof r != "string") throw Error(n(284));
            if (!a._owner) throw Error(n(290, r))
        }
        return r
    }

    function ml(r, o) {
        throw r = Object.prototype.toString.call(o), Error(n(31, r === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : r))
    }

    function Ng(r) {
        var o = r._init;
        return o(r._payload)
    }

    function Mg(r) {
        function o(I, L) {
            if (r) {
                var F = I.deletions;
                F === null ? (I.deletions = [L], I.flags |= 16) : F.push(L)
            }
        }

        function a(I, L) {
            if (!r) return null;
            for (; L !== null;) o(I, L), L = L.sibling;
            return null
        }

        function d(I, L) {
            for (I = new Map; L !== null;) L.key !== null ? I.set(L.key, L) : I.set(L.index, L), L = L.sibling;
            return I
        }

        function p(I, L) {
            return I = Ar(I, L), I.index = 0, I.sibling = null, I
        }

        function g(I, L, F) {
            return I.index = F, r ? (F = I.alternate, F !== null ? (F = F.index, F < L ? (I.flags |= 2, L) : F) : (I.flags |= 2, L)) : (I.flags |= 1048576, L)
        }

        function E(I) {
            return r && I.alternate === null && (I.flags |= 2), I
        }

        function A(I, L, F, Y) {
            return L === null || L.tag !== 6 ? (L = tf(F, I.mode, Y), L.return = I, L) : (L = p(L, F), L.return = I, L)
        }

        function O(I, L, F, Y) {
            var he = F.type;
            return he === U ? K(I, L, F.props.children, Y, F.key) : L !== null && (L.elementType === he || typeof he == "object" && he !== null && he.$$typeof === te && Ng(he) === L.type) ? (Y = p(L, F.props), Y.ref = ki(I, L, F), Y.return = I, Y) : (Y = Bl(F.type, F.key, F.props, null, I.mode, Y), Y.ref = ki(I, L, F), Y.return = I, Y)
        }

        function V(I, L, F, Y) {
            return L === null || L.tag !== 4 || L.stateNode.containerInfo !== F.containerInfo || L.stateNode.implementation !== F.implementation ? (L = nf(F, I.mode, Y), L.return = I, L) : (L = p(L, F.children || []), L.return = I, L)
        }

        function K(I, L, F, Y, he) {
            return L === null || L.tag !== 7 ? (L = gs(F, I.mode, Y, he), L.return = I, L) : (L = p(L, F), L.return = I, L)
        }

        function Q(I, L, F) {
            if (typeof L == "string" && L !== "" || typeof L == "number") return L = tf("" + L, I.mode, F), L.return = I, L;
            if (typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                    case N:
                        return F = Bl(L.type, L.key, L.props, null, I.mode, F), F.ref = ki(I, null, L), F.return = I, F;
                    case B:
                        return L = nf(L, I.mode, F), L.return = I, L;
                    case te:
                        var Y = L._init;
                        return Q(I, Y(L._payload), F)
                }
                if (ti(L) || X(L)) return L = gs(L, I.mode, F, null), L.return = I, L;
                ml(I, L)
            }
            return null
        }

        function q(I, L, F, Y) {
            var he = L !== null ? L.key : null;
            if (typeof F == "string" && F !== "" || typeof F == "number") return he !== null ? null : A(I, L, "" + F, Y);
            if (typeof F == "object" && F !== null) {
                switch (F.$$typeof) {
                    case N:
                        return F.key === he ? O(I, L, F, Y) : null;
                    case B:
                        return F.key === he ? V(I, L, F, Y) : null;
                    case te:
                        return he = F._init, q(I, L, he(F._payload), Y)
                }
                if (ti(F) || X(F)) return he !== null ? null : K(I, L, F, Y, null);
                ml(I, F)
            }
            return null
        }

        function re(I, L, F, Y, he) {
            if (typeof Y == "string" && Y !== "" || typeof Y == "number") return I = I.get(F) || null, A(L, I, "" + Y, he);
            if (typeof Y == "object" && Y !== null) {
                switch (Y.$$typeof) {
                    case N:
                        return I = I.get(Y.key === null ? F : Y.key) || null, O(L, I, Y, he);
                    case B:
                        return I = I.get(Y.key === null ? F : Y.key) || null, V(L, I, Y, he);
                    case te:
                        var xe = Y._init;
                        return re(I, L, F, xe(Y._payload), he)
                }
                if (ti(Y) || X(Y)) return I = I.get(F) || null, K(L, I, Y, he, null);
                ml(L, Y)
            }
            return null
        }

        function ie(I, L, F, Y) {
            for (var he = null, xe = null, Se = L, ke = L = 0, ht = null; Se !== null && ke < F.length; ke++) {
                Se.index > ke ? (ht = Se, Se = null) : ht = Se.sibling;
                var je = q(I, Se, F[ke], Y);
                if (je === null) {
                    Se === null && (Se = ht);
                    break
                }
                r && Se && je.alternate === null && o(I, Se), L = g(je, L, ke), xe === null ? he = je : xe.sibling = je, xe = je, Se = ht
            }
            if (ke === F.length) return a(I, Se), We && ls(I, ke), he;
            if (Se === null) {
                for (; ke < F.length; ke++) Se = Q(I, F[ke], Y), Se !== null && (L = g(Se, L, ke), xe === null ? he = Se : xe.sibling = Se, xe = Se);
                return We && ls(I, ke), he
            }
            for (Se = d(I, Se); ke < F.length; ke++) ht = re(Se, I, ke, F[ke], Y), ht !== null && (r && ht.alternate !== null && Se.delete(ht.key === null ? ke : ht.key), L = g(ht, L, ke), xe === null ? he = ht : xe.sibling = ht, xe = ht);
            return r && Se.forEach(function(_r) {
                return o(I, _r)
            }), We && ls(I, ke), he
        }

        function ce(I, L, F, Y) {
            var he = X(F);
            if (typeof he != "function") throw Error(n(150));
            if (F = he.call(F), F == null) throw Error(n(151));
            for (var xe = he = null, Se = L, ke = L = 0, ht = null, je = F.next(); Se !== null && !je.done; ke++, je = F.next()) {
                Se.index > ke ? (ht = Se, Se = null) : ht = Se.sibling;
                var _r = q(I, Se, je.value, Y);
                if (_r === null) {
                    Se === null && (Se = ht);
                    break
                }
                r && Se && _r.alternate === null && o(I, Se), L = g(_r, L, ke), xe === null ? he = _r : xe.sibling = _r, xe = _r, Se = ht
            }
            if (je.done) return a(I, Se), We && ls(I, ke), he;
            if (Se === null) {
                for (; !je.done; ke++, je = F.next()) je = Q(I, je.value, Y), je !== null && (L = g(je, L, ke), xe === null ? he = je : xe.sibling = je, xe = je);
                return We && ls(I, ke), he
            }
            for (Se = d(I, Se); !je.done; ke++, je = F.next()) je = re(Se, I, ke, je.value, Y), je !== null && (r && je.alternate !== null && Se.delete(je.key === null ? ke : je.key), L = g(je, L, ke), xe === null ? he = je : xe.sibling = je, xe = je);
            return r && Se.forEach(function(GT) {
                return o(I, GT)
            }), We && ls(I, ke), he
        }

        function Ze(I, L, F, Y) {
            if (typeof F == "object" && F !== null && F.type === U && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
                switch (F.$$typeof) {
                    case N:
                        e: {
                            for (var he = F.key, xe = L; xe !== null;) {
                                if (xe.key === he) {
                                    if (he = F.type, he === U) {
                                        if (xe.tag === 7) {
                                            a(I, xe.sibling), L = p(xe, F.props.children), L.return = I, I = L;
                                            break e
                                        }
                                    } else if (xe.elementType === he || typeof he == "object" && he !== null && he.$$typeof === te && Ng(he) === xe.type) {
                                        a(I, xe.sibling), L = p(xe, F.props), L.ref = ki(I, xe, F), L.return = I, I = L;
                                        break e
                                    }
                                    a(I, xe);
                                    break
                                } else o(I, xe);
                                xe = xe.sibling
                            }
                            F.type === U ? (L = gs(F.props.children, I.mode, Y, F.key), L.return = I, I = L) : (Y = Bl(F.type, F.key, F.props, null, I.mode, Y), Y.ref = ki(I, L, F), Y.return = I, I = Y)
                        }
                        return E(I);
                    case B:
                        e: {
                            for (xe = F.key; L !== null;) {
                                if (L.key === xe)
                                    if (L.tag === 4 && L.stateNode.containerInfo === F.containerInfo && L.stateNode.implementation === F.implementation) {
                                        a(I, L.sibling), L = p(L, F.children || []), L.return = I, I = L;
                                        break e
                                    } else {
                                        a(I, L);
                                        break
                                    }
                                else o(I, L);
                                L = L.sibling
                            }
                            L = nf(F, I.mode, Y),
                            L.return = I,
                            I = L
                        }
                        return E(I);
                    case te:
                        return xe = F._init, Ze(I, L, xe(F._payload), Y)
                }
                if (ti(F)) return ie(I, L, F, Y);
                if (X(F)) return ce(I, L, F, Y);
                ml(I, F)
            }
            return typeof F == "string" && F !== "" || typeof F == "number" ? (F = "" + F, L !== null && L.tag === 6 ? (a(I, L.sibling), L = p(L, F), L.return = I, I = L) : (a(I, L), L = tf(F, I.mode, Y), L.return = I, I = L), E(I)) : a(I, L)
        }
        return Ze
    }
    var lo = Mg(!0),
        Lg = Mg(!1),
        gl = wr(null),
        yl = null,
        uo = null,
        dd = null;

    function fd() {
        dd = uo = yl = null
    }

    function hd(r) {
        var o = gl.current;
        ze(gl), r._currentValue = o
    }

    function pd(r, o, a) {
        for (; r !== null;) {
            var d = r.alternate;
            if ((r.childLanes & o) !== o ? (r.childLanes |= o, d !== null && (d.childLanes |= o)) : d !== null && (d.childLanes & o) !== o && (d.childLanes |= o), r === a) break;
            r = r.return
        }
    }

    function co(r, o) {
        yl = r, dd = uo = null, r = r.dependencies, r !== null && r.firstContext !== null && ((r.lanes & o) !== 0 && (jt = !0), r.firstContext = null)
    }

    function tn(r) {
        var o = r._currentValue;
        if (dd !== r)
            if (r = {
                    context: r,
                    memoizedValue: o,
                    next: null
                }, uo === null) {
                if (yl === null) throw Error(n(308));
                uo = r, yl.dependencies = {
                    lanes: 0,
                    firstContext: r
                }
            } else uo = uo.next = r;
        return o
    }
    var us = null;

    function md(r) {
        us === null ? us = [r] : us.push(r)
    }

    function Dg(r, o, a, d) {
        var p = o.interleaved;
        return p === null ? (a.next = a, md(o)) : (a.next = p.next, p.next = a), o.interleaved = a, Qn(r, d)
    }

    function Qn(r, o) {
        r.lanes |= o;
        var a = r.alternate;
        for (a !== null && (a.lanes |= o), a = r, r = r.return; r !== null;) r.childLanes |= o, a = r.alternate, a !== null && (a.childLanes |= o), a = r, r = r.return;
        return a.tag === 3 ? a.stateNode : null
    }
    var br = !1;

    function gd(r) {
        r.updateQueue = {
            baseState: r.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function jg(r, o) {
        r = r.updateQueue, o.updateQueue === r && (o.updateQueue = {
            baseState: r.baseState,
            firstBaseUpdate: r.firstBaseUpdate,
            lastBaseUpdate: r.lastBaseUpdate,
            shared: r.shared,
            effects: r.effects
        })
    }

    function Yn(r, o) {
        return {
            eventTime: r,
            lane: o,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Cr(r, o, a) {
        var d = r.updateQueue;
        if (d === null) return null;
        if (d = d.shared, (De & 2) !== 0) {
            var p = d.pending;
            return p === null ? o.next = o : (o.next = p.next, p.next = o), d.pending = o, Qn(r, a)
        }
        return p = d.interleaved, p === null ? (o.next = o, md(d)) : (o.next = p.next, p.next = o), d.interleaved = o, Qn(r, a)
    }

    function vl(r, o, a) {
        if (o = o.updateQueue, o !== null && (o = o.shared, (a & 4194240) !== 0)) {
            var d = o.lanes;
            d &= r.pendingLanes, a |= d, o.lanes = a, _c(r, a)
        }
    }

    function Ig(r, o) {
        var a = r.updateQueue,
            d = r.alternate;
        if (d !== null && (d = d.updateQueue, a === d)) {
            var p = null,
                g = null;
            if (a = a.firstBaseUpdate, a !== null) {
                do {
                    var E = {
                        eventTime: a.eventTime,
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: a.callback,
                        next: null
                    };
                    g === null ? p = g = E : g = g.next = E, a = a.next
                } while (a !== null);
                g === null ? p = g = o : g = g.next = o
            } else p = g = o;
            a = {
                baseState: d.baseState,
                firstBaseUpdate: p,
                lastBaseUpdate: g,
                shared: d.shared,
                effects: d.effects
            }, r.updateQueue = a;
            return
        }
        r = a.lastBaseUpdate, r === null ? a.firstBaseUpdate = o : r.next = o, a.lastBaseUpdate = o
    }

    function wl(r, o, a, d) {
        var p = r.updateQueue;
        br = !1;
        var g = p.firstBaseUpdate,
            E = p.lastBaseUpdate,
            A = p.shared.pending;
        if (A !== null) {
            p.shared.pending = null;
            var O = A,
                V = O.next;
            O.next = null, E === null ? g = V : E.next = V, E = O;
            var K = r.alternate;
            K !== null && (K = K.updateQueue, A = K.lastBaseUpdate, A !== E && (A === null ? K.firstBaseUpdate = V : A.next = V, K.lastBaseUpdate = O))
        }
        if (g !== null) {
            var Q = p.baseState;
            E = 0, K = V = O = null, A = g;
            do {
                var q = A.lane,
                    re = A.eventTime;
                if ((d & q) === q) {
                    K !== null && (K = K.next = {
                        eventTime: re,
                        lane: 0,
                        tag: A.tag,
                        payload: A.payload,
                        callback: A.callback,
                        next: null
                    });
                    e: {
                        var ie = r,
                            ce = A;
                        switch (q = o, re = a, ce.tag) {
                            case 1:
                                if (ie = ce.payload, typeof ie == "function") {
                                    Q = ie.call(re, Q, q);
                                    break e
                                }
                                Q = ie;
                                break e;
                            case 3:
                                ie.flags = ie.flags & -65537 | 128;
                            case 0:
                                if (ie = ce.payload, q = typeof ie == "function" ? ie.call(re, Q, q) : ie, q == null) break e;
                                Q = W({}, Q, q);
                                break e;
                            case 2:
                                br = !0
                        }
                    }
                    A.callback !== null && A.lane !== 0 && (r.flags |= 64, q = p.effects, q === null ? p.effects = [A] : q.push(A))
                } else re = {
                    eventTime: re,
                    lane: q,
                    tag: A.tag,
                    payload: A.payload,
                    callback: A.callback,
                    next: null
                }, K === null ? (V = K = re, O = Q) : K = K.next = re, E |= q;
                if (A = A.next, A === null) {
                    if (A = p.shared.pending, A === null) break;
                    q = A, A = q.next, q.next = null, p.lastBaseUpdate = q, p.shared.pending = null
                }
            } while (!0);
            if (K === null && (O = Q), p.baseState = O, p.firstBaseUpdate = V, p.lastBaseUpdate = K, o = p.shared.interleaved, o !== null) {
                p = o;
                do E |= p.lane, p = p.next; while (p !== o)
            } else g === null && (p.shared.lanes = 0);
            fs |= E, r.lanes = E, r.memoizedState = Q
        }
    }

    function Fg(r, o, a) {
        if (r = o.effects, o.effects = null, r !== null)
            for (o = 0; o < r.length; o++) {
                var d = r[o],
                    p = d.callback;
                if (p !== null) {
                    if (d.callback = null, d = a, typeof p != "function") throw Error(n(191, p));
                    p.call(d)
                }
            }
    }
    var Ri = {},
        An = wr(Ri),
        Pi = wr(Ri),
        Ai = wr(Ri);

    function cs(r) {
        if (r === Ri) throw Error(n(174));
        return r
    }

    function yd(r, o) {
        switch (Ve(Ai, o), Ve(Pi, r), Ve(An, Ri), r = o.nodeType, r) {
            case 9:
            case 11:
                o = (o = o.documentElement) ? o.namespaceURI : vc(null, "");
                break;
            default:
                r = r === 8 ? o.parentNode : o, o = r.namespaceURI || null, r = r.tagName, o = vc(o, r)
        }
        ze(An), Ve(An, o)
    }

    function fo() {
        ze(An), ze(Pi), ze(Ai)
    }

    function Bg(r) {
        cs(Ai.current);
        var o = cs(An.current),
            a = vc(o, r.type);
        o !== a && (Ve(Pi, r), Ve(An, a))
    }

    function vd(r) {
        Pi.current === r && (ze(An), ze(Pi))
    }
    var He = wr(0);

    function xl(r) {
        for (var o = r; o !== null;) {
            if (o.tag === 13) {
                var a = o.memoizedState;
                if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || a.data === "$!")) return o
            } else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
                if ((o.flags & 128) !== 0) return o
            } else if (o.child !== null) {
                o.child.return = o, o = o.child;
                continue
            }
            if (o === r) break;
            for (; o.sibling === null;) {
                if (o.return === null || o.return === r) return null;
                o = o.return
            }
            o.sibling.return = o.return, o = o.sibling
        }
        return null
    }
    var wd = [];

    function xd() {
        for (var r = 0; r < wd.length; r++) wd[r]._workInProgressVersionPrimary = null;
        wd.length = 0
    }
    var Sl = _.ReactCurrentDispatcher,
        Sd = _.ReactCurrentBatchConfig,
        ds = 0,
        qe = null,
        lt = null,
        dt = null,
        bl = !1,
        _i = !1,
        Oi = 0,
        gT = 0;

    function bt() {
        throw Error(n(321))
    }

    function bd(r, o) {
        if (o === null) return !1;
        for (var a = 0; a < o.length && a < r.length; a++)
            if (!hn(r[a], o[a])) return !1;
        return !0
    }

    function Cd(r, o, a, d, p, g) {
        if (ds = g, qe = o, o.memoizedState = null, o.updateQueue = null, o.lanes = 0, Sl.current = r === null || r.memoizedState === null ? xT : ST, r = a(d, p), _i) {
            g = 0;
            do {
                if (_i = !1, Oi = 0, 25 <= g) throw Error(n(301));
                g += 1, dt = lt = null, o.updateQueue = null, Sl.current = bT, r = a(d, p)
            } while (_i)
        }
        if (Sl.current = Tl, o = lt !== null && lt.next !== null, ds = 0, dt = lt = qe = null, bl = !1, o) throw Error(n(300));
        return r
    }

    function Ed() {
        var r = Oi !== 0;
        return Oi = 0, r
    }

    function _n() {
        var r = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return dt === null ? qe.memoizedState = dt = r : dt = dt.next = r, dt
    }

    function nn() {
        if (lt === null) {
            var r = qe.alternate;
            r = r !== null ? r.memoizedState : null
        } else r = lt.next;
        var o = dt === null ? qe.memoizedState : dt.next;
        if (o !== null) dt = o, lt = r;
        else {
            if (r === null) throw Error(n(310));
            lt = r, r = {
                memoizedState: lt.memoizedState,
                baseState: lt.baseState,
                baseQueue: lt.baseQueue,
                queue: lt.queue,
                next: null
            }, dt === null ? qe.memoizedState = dt = r : dt = dt.next = r
        }
        return dt
    }

    function Ni(r, o) {
        return typeof o == "function" ? o(r) : o
    }

    function Td(r) {
        var o = nn(),
            a = o.queue;
        if (a === null) throw Error(n(311));
        a.lastRenderedReducer = r;
        var d = lt,
            p = d.baseQueue,
            g = a.pending;
        if (g !== null) {
            if (p !== null) {
                var E = p.next;
                p.next = g.next, g.next = E
            }
            d.baseQueue = p = g, a.pending = null
        }
        if (p !== null) {
            g = p.next, d = d.baseState;
            var A = E = null,
                O = null,
                V = g;
            do {
                var K = V.lane;
                if ((ds & K) === K) O !== null && (O = O.next = {
                    lane: 0,
                    action: V.action,
                    hasEagerState: V.hasEagerState,
                    eagerState: V.eagerState,
                    next: null
                }), d = V.hasEagerState ? V.eagerState : r(d, V.action);
                else {
                    var Q = {
                        lane: K,
                        action: V.action,
                        hasEagerState: V.hasEagerState,
                        eagerState: V.eagerState,
                        next: null
                    };
                    O === null ? (A = O = Q, E = d) : O = O.next = Q, qe.lanes |= K, fs |= K
                }
                V = V.next
            } while (V !== null && V !== g);
            O === null ? E = d : O.next = A, hn(d, o.memoizedState) || (jt = !0), o.memoizedState = d, o.baseState = E, o.baseQueue = O, a.lastRenderedState = d
        }
        if (r = a.interleaved, r !== null) {
            p = r;
            do g = p.lane, qe.lanes |= g, fs |= g, p = p.next; while (p !== r)
        } else p === null && (a.lanes = 0);
        return [o.memoizedState, a.dispatch]
    }

    function kd(r) {
        var o = nn(),
            a = o.queue;
        if (a === null) throw Error(n(311));
        a.lastRenderedReducer = r;
        var d = a.dispatch,
            p = a.pending,
            g = o.memoizedState;
        if (p !== null) {
            a.pending = null;
            var E = p = p.next;
            do g = r(g, E.action), E = E.next; while (E !== p);
            hn(g, o.memoizedState) || (jt = !0), o.memoizedState = g, o.baseQueue === null && (o.baseState = g), a.lastRenderedState = g
        }
        return [g, d]
    }

    function Vg() {}

    function Ug(r, o) {
        var a = qe,
            d = nn(),
            p = o(),
            g = !hn(d.memoizedState, p);
        if (g && (d.memoizedState = p, jt = !0), d = d.queue, Rd(Wg.bind(null, a, d, r), [r]), d.getSnapshot !== o || g || dt !== null && dt.memoizedState.tag & 1) {
            if (a.flags |= 2048, Mi(9, $g.bind(null, a, d, p, o), void 0, null), ft === null) throw Error(n(349));
            (ds & 30) !== 0 || zg(a, o, p)
        }
        return p
    }

    function zg(r, o, a) {
        r.flags |= 16384, r = {
            getSnapshot: o,
            value: a
        }, o = qe.updateQueue, o === null ? (o = {
            lastEffect: null,
            stores: null
        }, qe.updateQueue = o, o.stores = [r]) : (a = o.stores, a === null ? o.stores = [r] : a.push(r))
    }

    function $g(r, o, a, d) {
        o.value = a, o.getSnapshot = d, Hg(o) && qg(r)
    }

    function Wg(r, o, a) {
        return a(function() {
            Hg(o) && qg(r)
        })
    }

    function Hg(r) {
        var o = r.getSnapshot;
        r = r.value;
        try {
            var a = o();
            return !hn(r, a)
        } catch {
            return !0
        }
    }

    function qg(r) {
        var o = Qn(r, 1);
        o !== null && vn(o, r, 1, -1)
    }

    function Kg(r) {
        var o = _n();
        return typeof r == "function" && (r = r()), o.memoizedState = o.baseState = r, r = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ni,
            lastRenderedState: r
        }, o.queue = r, r = r.dispatch = wT.bind(null, qe, r), [o.memoizedState, r]
    }

    function Mi(r, o, a, d) {
        return r = {
            tag: r,
            create: o,
            destroy: a,
            deps: d,
            next: null
        }, o = qe.updateQueue, o === null ? (o = {
            lastEffect: null,
            stores: null
        }, qe.updateQueue = o, o.lastEffect = r.next = r) : (a = o.lastEffect, a === null ? o.lastEffect = r.next = r : (d = a.next, a.next = r, r.next = d, o.lastEffect = r)), r
    }

    function Gg() {
        return nn().memoizedState
    }

    function Cl(r, o, a, d) {
        var p = _n();
        qe.flags |= r, p.memoizedState = Mi(1 | o, a, void 0, d === void 0 ? null : d)
    }

    function El(r, o, a, d) {
        var p = nn();
        d = d === void 0 ? null : d;
        var g = void 0;
        if (lt !== null) {
            var E = lt.memoizedState;
            if (g = E.destroy, d !== null && bd(d, E.deps)) {
                p.memoizedState = Mi(o, a, g, d);
                return
            }
        }
        qe.flags |= r, p.memoizedState = Mi(1 | o, a, g, d)
    }

    function Qg(r, o) {
        return Cl(8390656, 8, r, o)
    }

    function Rd(r, o) {
        return El(2048, 8, r, o)
    }

    function Yg(r, o) {
        return El(4, 2, r, o)
    }

    function Xg(r, o) {
        return El(4, 4, r, o)
    }

    function Jg(r, o) {
        if (typeof o == "function") return r = r(), o(r),
            function() {
                o(null)
            };
        if (o != null) return r = r(), o.current = r,
            function() {
                o.current = null
            }
    }

    function Zg(r, o, a) {
        return a = a != null ? a.concat([r]) : null, El(4, 4, Jg.bind(null, o, r), a)
    }

    function Pd() {}

    function ey(r, o) {
        var a = nn();
        o = o === void 0 ? null : o;
        var d = a.memoizedState;
        return d !== null && o !== null && bd(o, d[1]) ? d[0] : (a.memoizedState = [r, o], r)
    }

    function ty(r, o) {
        var a = nn();
        o = o === void 0 ? null : o;
        var d = a.memoizedState;
        return d !== null && o !== null && bd(o, d[1]) ? d[0] : (r = r(), a.memoizedState = [r, o], r)
    }

    function ny(r, o, a) {
        return (ds & 21) === 0 ? (r.baseState && (r.baseState = !1, jt = !0), r.memoizedState = a) : (hn(a, o) || (a = Nm(), qe.lanes |= a, fs |= a, r.baseState = !0), o)
    }

    function yT(r, o) {
        var a = Fe;
        Fe = a !== 0 && 4 > a ? a : 4, r(!0);
        var d = Sd.transition;
        Sd.transition = {};
        try {
            r(!1), o()
        } finally {
            Fe = a, Sd.transition = d
        }
    }

    function ry() {
        return nn().memoizedState
    }

    function vT(r, o, a) {
        var d = Rr(r);
        if (a = {
                lane: d,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, sy(r)) oy(o, a);
        else if (a = Dg(r, o, a, d), a !== null) {
            var p = Nt();
            vn(a, r, d, p), iy(a, o, d)
        }
    }

    function wT(r, o, a) {
        var d = Rr(r),
            p = {
                lane: d,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (sy(r)) oy(o, p);
        else {
            var g = r.alternate;
            if (r.lanes === 0 && (g === null || g.lanes === 0) && (g = o.lastRenderedReducer, g !== null)) try {
                var E = o.lastRenderedState,
                    A = g(E, a);
                if (p.hasEagerState = !0, p.eagerState = A, hn(A, E)) {
                    var O = o.interleaved;
                    O === null ? (p.next = p, md(o)) : (p.next = O.next, O.next = p), o.interleaved = p;
                    return
                }
            } catch {} finally {}
            a = Dg(r, o, p, d), a !== null && (p = Nt(), vn(a, r, d, p), iy(a, o, d))
        }
    }

    function sy(r) {
        var o = r.alternate;
        return r === qe || o !== null && o === qe
    }

    function oy(r, o) {
        _i = bl = !0;
        var a = r.pending;
        a === null ? o.next = o : (o.next = a.next, a.next = o), r.pending = o
    }

    function iy(r, o, a) {
        if ((a & 4194240) !== 0) {
            var d = o.lanes;
            d &= r.pendingLanes, a |= d, o.lanes = a, _c(r, a)
        }
    }
    var Tl = {
            readContext: tn,
            useCallback: bt,
            useContext: bt,
            useEffect: bt,
            useImperativeHandle: bt,
            useInsertionEffect: bt,
            useLayoutEffect: bt,
            useMemo: bt,
            useReducer: bt,
            useRef: bt,
            useState: bt,
            useDebugValue: bt,
            useDeferredValue: bt,
            useTransition: bt,
            useMutableSource: bt,
            useSyncExternalStore: bt,
            useId: bt,
            unstable_isNewReconciler: !1
        },
        xT = {
            readContext: tn,
            useCallback: function(r, o) {
                return _n().memoizedState = [r, o === void 0 ? null : o], r
            },
            useContext: tn,
            useEffect: Qg,
            useImperativeHandle: function(r, o, a) {
                return a = a != null ? a.concat([r]) : null, Cl(4194308, 4, Jg.bind(null, o, r), a)
            },
            useLayoutEffect: function(r, o) {
                return Cl(4194308, 4, r, o)
            },
            useInsertionEffect: function(r, o) {
                return Cl(4, 2, r, o)
            },
            useMemo: function(r, o) {
                var a = _n();
                return o = o === void 0 ? null : o, r = r(), a.memoizedState = [r, o], r
            },
            useReducer: function(r, o, a) {
                var d = _n();
                return o = a !== void 0 ? a(o) : o, d.memoizedState = d.baseState = o, r = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: r,
                    lastRenderedState: o
                }, d.queue = r, r = r.dispatch = vT.bind(null, qe, r), [d.memoizedState, r]
            },
            useRef: function(r) {
                var o = _n();
                return r = {
                    current: r
                }, o.memoizedState = r
            },
            useState: Kg,
            useDebugValue: Pd,
            useDeferredValue: function(r) {
                return _n().memoizedState = r
            },
            useTransition: function() {
                var r = Kg(!1),
                    o = r[0];
                return r = yT.bind(null, r[1]), _n().memoizedState = r, [o, r]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(r, o, a) {
                var d = qe,
                    p = _n();
                if (We) {
                    if (a === void 0) throw Error(n(407));
                    a = a()
                } else {
                    if (a = o(), ft === null) throw Error(n(349));
                    (ds & 30) !== 0 || zg(d, o, a)
                }
                p.memoizedState = a;
                var g = {
                    value: a,
                    getSnapshot: o
                };
                return p.queue = g, Qg(Wg.bind(null, d, g, r), [r]), d.flags |= 2048, Mi(9, $g.bind(null, d, g, a, o), void 0, null), a
            },
            useId: function() {
                var r = _n(),
                    o = ft.identifierPrefix;
                if (We) {
                    var a = Gn,
                        d = Kn;
                    a = (d & ~(1 << 32 - fn(d) - 1)).toString(32) + a, o = ":" + o + "R" + a, a = Oi++, 0 < a && (o += "H" + a.toString(32)), o += ":"
                } else a = gT++, o = ":" + o + "r" + a.toString(32) + ":";
                return r.memoizedState = o
            },
            unstable_isNewReconciler: !1
        },
        ST = {
            readContext: tn,
            useCallback: ey,
            useContext: tn,
            useEffect: Rd,
            useImperativeHandle: Zg,
            useInsertionEffect: Yg,
            useLayoutEffect: Xg,
            useMemo: ty,
            useReducer: Td,
            useRef: Gg,
            useState: function() {
                return Td(Ni)
            },
            useDebugValue: Pd,
            useDeferredValue: function(r) {
                var o = nn();
                return ny(o, lt.memoizedState, r)
            },
            useTransition: function() {
                var r = Td(Ni)[0],
                    o = nn().memoizedState;
                return [r, o]
            },
            useMutableSource: Vg,
            useSyncExternalStore: Ug,
            useId: ry,
            unstable_isNewReconciler: !1
        },
        bT = {
            readContext: tn,
            useCallback: ey,
            useContext: tn,
            useEffect: Rd,
            useImperativeHandle: Zg,
            useInsertionEffect: Yg,
            useLayoutEffect: Xg,
            useMemo: ty,
            useReducer: kd,
            useRef: Gg,
            useState: function() {
                return kd(Ni)
            },
            useDebugValue: Pd,
            useDeferredValue: function(r) {
                var o = nn();
                return lt === null ? o.memoizedState = r : ny(o, lt.memoizedState, r)
            },
            useTransition: function() {
                var r = kd(Ni)[0],
                    o = nn().memoizedState;
                return [r, o]
            },
            useMutableSource: Vg,
            useSyncExternalStore: Ug,
            useId: ry,
            unstable_isNewReconciler: !1
        };

    function mn(r, o) {
        if (r && r.defaultProps) {
            o = W({}, o), r = r.defaultProps;
            for (var a in r) o[a] === void 0 && (o[a] = r[a]);
            return o
        }
        return o
    }

    function Ad(r, o, a, d) {
        o = r.memoizedState, a = a(d, o), a = a == null ? o : W({}, o, a), r.memoizedState = a, r.lanes === 0 && (r.updateQueue.baseState = a)
    }
    var kl = {
        isMounted: function(r) {
            return (r = r._reactInternals) ? ss(r) === r : !1
        },
        enqueueSetState: function(r, o, a) {
            r = r._reactInternals;
            var d = Nt(),
                p = Rr(r),
                g = Yn(d, p);
            g.payload = o, a != null && (g.callback = a), o = Cr(r, g, p), o !== null && (vn(o, r, p, d), vl(o, r, p))
        },
        enqueueReplaceState: function(r, o, a) {
            r = r._reactInternals;
            var d = Nt(),
                p = Rr(r),
                g = Yn(d, p);
            g.tag = 1, g.payload = o, a != null && (g.callback = a), o = Cr(r, g, p), o !== null && (vn(o, r, p, d), vl(o, r, p))
        },
        enqueueForceUpdate: function(r, o) {
            r = r._reactInternals;
            var a = Nt(),
                d = Rr(r),
                p = Yn(a, d);
            p.tag = 2, o != null && (p.callback = o), o = Cr(r, p, d), o !== null && (vn(o, r, d, a), vl(o, r, d))
        }
    };

    function ay(r, o, a, d, p, g, E) {
        return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(d, g, E) : o.prototype && o.prototype.isPureReactComponent ? !wi(a, d) || !wi(p, g) : !0
    }

    function ly(r, o, a) {
        var d = !1,
            p = xr,
            g = o.contextType;
        return typeof g == "object" && g !== null ? g = tn(g) : (p = Dt(o) ? is : St.current, d = o.contextTypes, g = (d = d != null) ? so(r, p) : xr), o = new o(a, g), r.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = kl, r.stateNode = o, o._reactInternals = r, d && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = p, r.__reactInternalMemoizedMaskedChildContext = g), o
    }

    function uy(r, o, a, d) {
        r = o.state, typeof o.componentWillReceiveProps == "function" && o.componentWillReceiveProps(a, d), typeof o.UNSAFE_componentWillReceiveProps == "function" && o.UNSAFE_componentWillReceiveProps(a, d), o.state !== r && kl.enqueueReplaceState(o, o.state, null)
    }

    function _d(r, o, a, d) {
        var p = r.stateNode;
        p.props = a, p.state = r.memoizedState, p.refs = {}, gd(r);
        var g = o.contextType;
        typeof g == "object" && g !== null ? p.context = tn(g) : (g = Dt(o) ? is : St.current, p.context = so(r, g)), p.state = r.memoizedState, g = o.getDerivedStateFromProps, typeof g == "function" && (Ad(r, o, g, a), p.state = r.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (o = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), o !== p.state && kl.enqueueReplaceState(p, p.state, null), wl(r, a, p, d), p.state = r.memoizedState), typeof p.componentDidMount == "function" && (r.flags |= 4194308)
    }

    function ho(r, o) {
        try {
            var a = "",
                d = o;
            do a += pe(d), d = d.return; while (d);
            var p = a
        } catch (g) {
            p = `
Error generating stack: ` + g.message + `
` + g.stack
        }
        return {
            value: r,
            source: o,
            stack: p,
            digest: null
        }
    }

    function Od(r, o, a) {
        return {
            value: r,
            source: null,
            stack: a ? ? null,
            digest: o ? ? null
        }
    }

    function Nd(r, o) {
        try {
            console.error(o.value)
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    var CT = typeof WeakMap == "function" ? WeakMap : Map;

    function cy(r, o, a) {
        a = Yn(-1, a), a.tag = 3, a.payload = {
            element: null
        };
        var d = o.value;
        return a.callback = function() {
            Ml || (Ml = !0, Kd = d), Nd(r, o)
        }, a
    }

    function dy(r, o, a) {
        a = Yn(-1, a), a.tag = 3;
        var d = r.type.getDerivedStateFromError;
        if (typeof d == "function") {
            var p = o.value;
            a.payload = function() {
                return d(p)
            }, a.callback = function() {
                Nd(r, o)
            }
        }
        var g = r.stateNode;
        return g !== null && typeof g.componentDidCatch == "function" && (a.callback = function() {
            Nd(r, o), typeof d != "function" && (Tr === null ? Tr = new Set([this]) : Tr.add(this));
            var E = o.stack;
            this.componentDidCatch(o.value, {
                componentStack: E !== null ? E : ""
            })
        }), a
    }

    function fy(r, o, a) {
        var d = r.pingCache;
        if (d === null) {
            d = r.pingCache = new CT;
            var p = new Set;
            d.set(o, p)
        } else p = d.get(o), p === void 0 && (p = new Set, d.set(o, p));
        p.has(a) || (p.add(a), r = IT.bind(null, r, o, a), o.then(r, r))
    }

    function hy(r) {
        do {
            var o;
            if ((o = r.tag === 13) && (o = r.memoizedState, o = o !== null ? o.dehydrated !== null : !0), o) return r;
            r = r.return
        } while (r !== null);
        return null
    }

    function py(r, o, a, d, p) {
        return (r.mode & 1) === 0 ? (r === o ? r.flags |= 65536 : (r.flags |= 128, a.flags |= 131072, a.flags &= -52805, a.tag === 1 && (a.alternate === null ? a.tag = 17 : (o = Yn(-1, 1), o.tag = 2, Cr(a, o, 1))), a.lanes |= 1), r) : (r.flags |= 65536, r.lanes = p, r)
    }
    var ET = _.ReactCurrentOwner,
        jt = !1;

    function Ot(r, o, a, d) {
        o.child = r === null ? Lg(o, null, a, d) : lo(o, r.child, a, d)
    }

    function my(r, o, a, d, p) {
        a = a.render;
        var g = o.ref;
        return co(o, p), d = Cd(r, o, a, d, g, p), a = Ed(), r !== null && !jt ? (o.updateQueue = r.updateQueue, o.flags &= -2053, r.lanes &= ~p, Xn(r, o, p)) : (We && a && id(o), o.flags |= 1, Ot(r, o, d, p), o.child)
    }

    function gy(r, o, a, d, p) {
        if (r === null) {
            var g = a.type;
            return typeof g == "function" && !ef(g) && g.defaultProps === void 0 && a.compare === null && a.defaultProps === void 0 ? (o.tag = 15, o.type = g, yy(r, o, g, d, p)) : (r = Bl(a.type, null, d, o, o.mode, p), r.ref = o.ref, r.return = o, o.child = r)
        }
        if (g = r.child, (r.lanes & p) === 0) {
            var E = g.memoizedProps;
            if (a = a.compare, a = a !== null ? a : wi, a(E, d) && r.ref === o.ref) return Xn(r, o, p)
        }
        return o.flags |= 1, r = Ar(g, d), r.ref = o.ref, r.return = o, o.child = r
    }

    function yy(r, o, a, d, p) {
        if (r !== null) {
            var g = r.memoizedProps;
            if (wi(g, d) && r.ref === o.ref)
                if (jt = !1, o.pendingProps = d = g, (r.lanes & p) !== 0)(r.flags & 131072) !== 0 && (jt = !0);
                else return o.lanes = r.lanes, Xn(r, o, p)
        }
        return Md(r, o, a, d, p)
    }

    function vy(r, o, a) {
        var d = o.pendingProps,
            p = d.children,
            g = r !== null ? r.memoizedState : null;
        if (d.mode === "hidden")
            if ((o.mode & 1) === 0) o.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, Ve(mo, Gt), Gt |= a;
            else {
                if ((a & 1073741824) === 0) return r = g !== null ? g.baseLanes | a : a, o.lanes = o.childLanes = 1073741824, o.memoizedState = {
                    baseLanes: r,
                    cachePool: null,
                    transitions: null
                }, o.updateQueue = null, Ve(mo, Gt), Gt |= r, null;
                o.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, d = g !== null ? g.baseLanes : a, Ve(mo, Gt), Gt |= d
            }
        else g !== null ? (d = g.baseLanes | a, o.memoizedState = null) : d = a, Ve(mo, Gt), Gt |= d;
        return Ot(r, o, p, a), o.child
    }

    function wy(r, o) {
        var a = o.ref;
        (r === null && a !== null || r !== null && r.ref !== a) && (o.flags |= 512, o.flags |= 2097152)
    }

    function Md(r, o, a, d, p) {
        var g = Dt(a) ? is : St.current;
        return g = so(o, g), co(o, p), a = Cd(r, o, a, d, g, p), d = Ed(), r !== null && !jt ? (o.updateQueue = r.updateQueue, o.flags &= -2053, r.lanes &= ~p, Xn(r, o, p)) : (We && d && id(o), o.flags |= 1, Ot(r, o, a, p), o.child)
    }

    function xy(r, o, a, d, p) {
        if (Dt(a)) {
            var g = !0;
            cl(o)
        } else g = !1;
        if (co(o, p), o.stateNode === null) Pl(r, o), ly(o, a, d), _d(o, a, d, p), d = !0;
        else if (r === null) {
            var E = o.stateNode,
                A = o.memoizedProps;
            E.props = A;
            var O = E.context,
                V = a.contextType;
            typeof V == "object" && V !== null ? V = tn(V) : (V = Dt(a) ? is : St.current, V = so(o, V));
            var K = a.getDerivedStateFromProps,
                Q = typeof K == "function" || typeof E.getSnapshotBeforeUpdate == "function";
            Q || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (A !== d || O !== V) && uy(o, E, d, V), br = !1;
            var q = o.memoizedState;
            E.state = q, wl(o, d, E, p), O = o.memoizedState, A !== d || q !== O || Lt.current || br ? (typeof K == "function" && (Ad(o, a, K, d), O = o.memoizedState), (A = br || ay(o, a, A, d, q, O, V)) ? (Q || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (o.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (o.flags |= 4194308), o.memoizedProps = d, o.memoizedState = O), E.props = d, E.state = O, E.context = V, d = A) : (typeof E.componentDidMount == "function" && (o.flags |= 4194308), d = !1)
        } else {
            E = o.stateNode, jg(r, o), A = o.memoizedProps, V = o.type === o.elementType ? A : mn(o.type, A), E.props = V, Q = o.pendingProps, q = E.context, O = a.contextType, typeof O == "object" && O !== null ? O = tn(O) : (O = Dt(a) ? is : St.current, O = so(o, O));
            var re = a.getDerivedStateFromProps;
            (K = typeof re == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (A !== Q || q !== O) && uy(o, E, d, O), br = !1, q = o.memoizedState, E.state = q, wl(o, d, E, p);
            var ie = o.memoizedState;
            A !== Q || q !== ie || Lt.current || br ? (typeof re == "function" && (Ad(o, a, re, d), ie = o.memoizedState), (V = br || ay(o, a, V, d, q, ie, O) || !1) ? (K || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(d, ie, O), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(d, ie, O)), typeof E.componentDidUpdate == "function" && (o.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (o.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || A === r.memoizedProps && q === r.memoizedState || (o.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || A === r.memoizedProps && q === r.memoizedState || (o.flags |= 1024), o.memoizedProps = d, o.memoizedState = ie), E.props = d, E.state = ie, E.context = O, d = V) : (typeof E.componentDidUpdate != "function" || A === r.memoizedProps && q === r.memoizedState || (o.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || A === r.memoizedProps && q === r.memoizedState || (o.flags |= 1024), d = !1)
        }
        return Ld(r, o, a, d, g, p)
    }

    function Ld(r, o, a, d, p, g) {
        wy(r, o);
        var E = (o.flags & 128) !== 0;
        if (!d && !E) return p && Tg(o, a, !1), Xn(r, o, g);
        d = o.stateNode, ET.current = o;
        var A = E && typeof a.getDerivedStateFromError != "function" ? null : d.render();
        return o.flags |= 1, r !== null && E ? (o.child = lo(o, r.child, null, g), o.child = lo(o, null, A, g)) : Ot(r, o, A, g), o.memoizedState = d.state, p && Tg(o, a, !0), o.child
    }

    function Sy(r) {
        var o = r.stateNode;
        o.pendingContext ? Cg(r, o.pendingContext, o.pendingContext !== o.context) : o.context && Cg(r, o.context, !1), yd(r, o.containerInfo)
    }

    function by(r, o, a, d, p) {
        return ao(), cd(p), o.flags |= 256, Ot(r, o, a, d), o.child
    }
    var Dd = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function jd(r) {
        return {
            baseLanes: r,
            cachePool: null,
            transitions: null
        }
    }

    function Cy(r, o, a) {
        var d = o.pendingProps,
            p = He.current,
            g = !1,
            E = (o.flags & 128) !== 0,
            A;
        if ((A = E) || (A = r !== null && r.memoizedState === null ? !1 : (p & 2) !== 0), A ? (g = !0, o.flags &= -129) : (r === null || r.memoizedState !== null) && (p |= 1), Ve(He, p & 1), r === null) return ud(o), r = o.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? ((o.mode & 1) === 0 ? o.lanes = 1 : r.data === "$!" ? o.lanes = 8 : o.lanes = 1073741824, null) : (E = d.children, r = d.fallback, g ? (d = o.mode, g = o.child, E = {
            mode: "hidden",
            children: E
        }, (d & 1) === 0 && g !== null ? (g.childLanes = 0, g.pendingProps = E) : g = Vl(E, d, 0, null), r = gs(r, d, a, null), g.return = o, r.return = o, g.sibling = r, o.child = g, o.child.memoizedState = jd(a), o.memoizedState = Dd, r) : Id(o, E));
        if (p = r.memoizedState, p !== null && (A = p.dehydrated, A !== null)) return TT(r, o, E, d, A, p, a);
        if (g) {
            g = d.fallback, E = o.mode, p = r.child, A = p.sibling;
            var O = {
                mode: "hidden",
                children: d.children
            };
            return (E & 1) === 0 && o.child !== p ? (d = o.child, d.childLanes = 0, d.pendingProps = O, o.deletions = null) : (d = Ar(p, O), d.subtreeFlags = p.subtreeFlags & 14680064), A !== null ? g = Ar(A, g) : (g = gs(g, E, a, null), g.flags |= 2), g.return = o, d.return = o, d.sibling = g, o.child = d, d = g, g = o.child, E = r.child.memoizedState, E = E === null ? jd(a) : {
                baseLanes: E.baseLanes | a,
                cachePool: null,
                transitions: E.transitions
            }, g.memoizedState = E, g.childLanes = r.childLanes & ~a, o.memoizedState = Dd, d
        }
        return g = r.child, r = g.sibling, d = Ar(g, {
            mode: "visible",
            children: d.children
        }), (o.mode & 1) === 0 && (d.lanes = a), d.return = o, d.sibling = null, r !== null && (a = o.deletions, a === null ? (o.deletions = [r], o.flags |= 16) : a.push(r)), o.child = d, o.memoizedState = null, d
    }

    function Id(r, o) {
        return o = Vl({
            mode: "visible",
            children: o
        }, r.mode, 0, null), o.return = r, r.child = o
    }

    function Rl(r, o, a, d) {
        return d !== null && cd(d), lo(o, r.child, null, a), r = Id(o, o.pendingProps.children), r.flags |= 2, o.memoizedState = null, r
    }

    function TT(r, o, a, d, p, g, E) {
        if (a) return o.flags & 256 ? (o.flags &= -257, d = Od(Error(n(422))), Rl(r, o, E, d)) : o.memoizedState !== null ? (o.child = r.child, o.flags |= 128, null) : (g = d.fallback, p = o.mode, d = Vl({
            mode: "visible",
            children: d.children
        }, p, 0, null), g = gs(g, p, E, null), g.flags |= 2, d.return = o, g.return = o, d.sibling = g, o.child = d, (o.mode & 1) !== 0 && lo(o, r.child, null, E), o.child.memoizedState = jd(E), o.memoizedState = Dd, g);
        if ((o.mode & 1) === 0) return Rl(r, o, E, null);
        if (p.data === "$!") {
            if (d = p.nextSibling && p.nextSibling.dataset, d) var A = d.dgst;
            return d = A, g = Error(n(419)), d = Od(g, d, void 0), Rl(r, o, E, d)
        }
        if (A = (E & r.childLanes) !== 0, jt || A) {
            if (d = ft, d !== null) {
                switch (E & -E) {
                    case 4:
                        p = 2;
                        break;
                    case 16:
                        p = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        p = 32;
                        break;
                    case 536870912:
                        p = 268435456;
                        break;
                    default:
                        p = 0
                }
                p = (p & (d.suspendedLanes | E)) !== 0 ? 0 : p, p !== 0 && p !== g.retryLane && (g.retryLane = p, Qn(r, p), vn(d, r, p, -1))
            }
            return Zd(), d = Od(Error(n(421))), Rl(r, o, E, d)
        }
        return p.data === "$?" ? (o.flags |= 128, o.child = r.child, o = FT.bind(null, r), p._reactRetry = o, null) : (r = g.treeContext, Kt = vr(p.nextSibling), qt = o, We = !0, pn = null, r !== null && (Zt[en++] = Kn, Zt[en++] = Gn, Zt[en++] = as, Kn = r.id, Gn = r.overflow, as = o), o = Id(o, d.children), o.flags |= 4096, o)
    }

    function Ey(r, o, a) {
        r.lanes |= o;
        var d = r.alternate;
        d !== null && (d.lanes |= o), pd(r.return, o, a)
    }

    function Fd(r, o, a, d, p) {
        var g = r.memoizedState;
        g === null ? r.memoizedState = {
            isBackwards: o,
            rendering: null,
            renderingStartTime: 0,
            last: d,
            tail: a,
            tailMode: p
        } : (g.isBackwards = o, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = a, g.tailMode = p)
    }

    function Ty(r, o, a) {
        var d = o.pendingProps,
            p = d.revealOrder,
            g = d.tail;
        if (Ot(r, o, d.children, a), d = He.current, (d & 2) !== 0) d = d & 1 | 2, o.flags |= 128;
        else {
            if (r !== null && (r.flags & 128) !== 0) e: for (r = o.child; r !== null;) {
                if (r.tag === 13) r.memoizedState !== null && Ey(r, a, o);
                else if (r.tag === 19) Ey(r, a, o);
                else if (r.child !== null) {
                    r.child.return = r, r = r.child;
                    continue
                }
                if (r === o) break e;
                for (; r.sibling === null;) {
                    if (r.return === null || r.return === o) break e;
                    r = r.return
                }
                r.sibling.return = r.return, r = r.sibling
            }
            d &= 1
        }
        if (Ve(He, d), (o.mode & 1) === 0) o.memoizedState = null;
        else switch (p) {
            case "forwards":
                for (a = o.child, p = null; a !== null;) r = a.alternate, r !== null && xl(r) === null && (p = a), a = a.sibling;
                a = p, a === null ? (p = o.child, o.child = null) : (p = a.sibling, a.sibling = null), Fd(o, !1, p, a, g);
                break;
            case "backwards":
                for (a = null, p = o.child, o.child = null; p !== null;) {
                    if (r = p.alternate, r !== null && xl(r) === null) {
                        o.child = p;
                        break
                    }
                    r = p.sibling, p.sibling = a, a = p, p = r
                }
                Fd(o, !0, a, null, g);
                break;
            case "together":
                Fd(o, !1, null, null, void 0);
                break;
            default:
                o.memoizedState = null
        }
        return o.child
    }

    function Pl(r, o) {
        (o.mode & 1) === 0 && r !== null && (r.alternate = null, o.alternate = null, o.flags |= 2)
    }

    function Xn(r, o, a) {
        if (r !== null && (o.dependencies = r.dependencies), fs |= o.lanes, (a & o.childLanes) === 0) return null;
        if (r !== null && o.child !== r.child) throw Error(n(153));
        if (o.child !== null) {
            for (r = o.child, a = Ar(r, r.pendingProps), o.child = a, a.return = o; r.sibling !== null;) r = r.sibling, a = a.sibling = Ar(r, r.pendingProps), a.return = o;
            a.sibling = null
        }
        return o.child
    }

    function kT(r, o, a) {
        switch (o.tag) {
            case 3:
                Sy(o), ao();
                break;
            case 5:
                Bg(o);
                break;
            case 1:
                Dt(o.type) && cl(o);
                break;
            case 4:
                yd(o, o.stateNode.containerInfo);
                break;
            case 10:
                var d = o.type._context,
                    p = o.memoizedProps.value;
                Ve(gl, d._currentValue), d._currentValue = p;
                break;
            case 13:
                if (d = o.memoizedState, d !== null) return d.dehydrated !== null ? (Ve(He, He.current & 1), o.flags |= 128, null) : (a & o.child.childLanes) !== 0 ? Cy(r, o, a) : (Ve(He, He.current & 1), r = Xn(r, o, a), r !== null ? r.sibling : null);
                Ve(He, He.current & 1);
                break;
            case 19:
                if (d = (a & o.childLanes) !== 0, (r.flags & 128) !== 0) {
                    if (d) return Ty(r, o, a);
                    o.flags |= 128
                }
                if (p = o.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), Ve(He, He.current), d) break;
                return null;
            case 22:
            case 23:
                return o.lanes = 0, vy(r, o, a)
        }
        return Xn(r, o, a)
    }
    var ky, Bd, Ry, Py;
    ky = function(r, o) {
        for (var a = o.child; a !== null;) {
            if (a.tag === 5 || a.tag === 6) r.appendChild(a.stateNode);
            else if (a.tag !== 4 && a.child !== null) {
                a.child.return = a, a = a.child;
                continue
            }
            if (a === o) break;
            for (; a.sibling === null;) {
                if (a.return === null || a.return === o) return;
                a = a.return
            }
            a.sibling.return = a.return, a = a.sibling
        }
    }, Bd = function() {}, Ry = function(r, o, a, d) {
        var p = r.memoizedProps;
        if (p !== d) {
            r = o.stateNode, cs(An.current);
            var g = null;
            switch (a) {
                case "input":
                    p = at(r, p), d = at(r, d), g = [];
                    break;
                case "select":
                    p = W({}, p, {
                        value: void 0
                    }), d = W({}, d, {
                        value: void 0
                    }), g = [];
                    break;
                case "textarea":
                    p = yc(r, p), d = yc(r, d), g = [];
                    break;
                default:
                    typeof p.onClick != "function" && typeof d.onClick == "function" && (r.onclick = al)
            }
            wc(a, d);
            var E;
            a = null;
            for (V in p)
                if (!d.hasOwnProperty(V) && p.hasOwnProperty(V) && p[V] != null)
                    if (V === "style") {
                        var A = p[V];
                        for (E in A) A.hasOwnProperty(E) && (a || (a = {}), a[E] = "")
                    } else V !== "dangerouslySetInnerHTML" && V !== "children" && V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && V !== "autoFocus" && (i.hasOwnProperty(V) ? g || (g = []) : (g = g || []).push(V, null));
            for (V in d) {
                var O = d[V];
                if (A = p != null ? p[V] : void 0, d.hasOwnProperty(V) && O !== A && (O != null || A != null))
                    if (V === "style")
                        if (A) {
                            for (E in A) !A.hasOwnProperty(E) || O && O.hasOwnProperty(E) || (a || (a = {}), a[E] = "");
                            for (E in O) O.hasOwnProperty(E) && A[E] !== O[E] && (a || (a = {}), a[E] = O[E])
                        } else a || (g || (g = []), g.push(V, a)), a = O;
                else V === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, A = A ? A.__html : void 0, O != null && A !== O && (g = g || []).push(V, O)) : V === "children" ? typeof O != "string" && typeof O != "number" || (g = g || []).push(V, "" + O) : V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && (i.hasOwnProperty(V) ? (O != null && V === "onScroll" && Ue("scroll", r), g || A === O || (g = [])) : (g = g || []).push(V, O))
            }
            a && (g = g || []).push("style", a);
            var V = g;
            (o.updateQueue = V) && (o.flags |= 4)
        }
    }, Py = function(r, o, a, d) {
        a !== d && (o.flags |= 4)
    };

    function Li(r, o) {
        if (!We) switch (r.tailMode) {
            case "hidden":
                o = r.tail;
                for (var a = null; o !== null;) o.alternate !== null && (a = o), o = o.sibling;
                a === null ? r.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = r.tail;
                for (var d = null; a !== null;) a.alternate !== null && (d = a), a = a.sibling;
                d === null ? o || r.tail === null ? r.tail = null : r.tail.sibling = null : d.sibling = null
        }
    }

    function Ct(r) {
        var o = r.alternate !== null && r.alternate.child === r.child,
            a = 0,
            d = 0;
        if (o)
            for (var p = r.child; p !== null;) a |= p.lanes | p.childLanes, d |= p.subtreeFlags & 14680064, d |= p.flags & 14680064, p.return = r, p = p.sibling;
        else
            for (p = r.child; p !== null;) a |= p.lanes | p.childLanes, d |= p.subtreeFlags, d |= p.flags, p.return = r, p = p.sibling;
        return r.subtreeFlags |= d, r.childLanes = a, o
    }

    function RT(r, o, a) {
        var d = o.pendingProps;
        switch (ad(o), o.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Ct(o), null;
            case 1:
                return Dt(o.type) && ul(), Ct(o), null;
            case 3:
                return d = o.stateNode, fo(), ze(Lt), ze(St), xd(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), (r === null || r.child === null) && (pl(o) ? o.flags |= 4 : r === null || r.memoizedState.isDehydrated && (o.flags & 256) === 0 || (o.flags |= 1024, pn !== null && (Yd(pn), pn = null))), Bd(r, o), Ct(o), null;
            case 5:
                vd(o);
                var p = cs(Ai.current);
                if (a = o.type, r !== null && o.stateNode != null) Ry(r, o, a, d, p), r.ref !== o.ref && (o.flags |= 512, o.flags |= 2097152);
                else {
                    if (!d) {
                        if (o.stateNode === null) throw Error(n(166));
                        return Ct(o), null
                    }
                    if (r = cs(An.current), pl(o)) {
                        d = o.stateNode, a = o.type;
                        var g = o.memoizedProps;
                        switch (d[Pn] = o, d[Ei] = g, r = (o.mode & 1) !== 0, a) {
                            case "dialog":
                                Ue("cancel", d), Ue("close", d);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ue("load", d);
                                break;
                            case "video":
                            case "audio":
                                for (p = 0; p < Si.length; p++) Ue(Si[p], d);
                                break;
                            case "source":
                                Ue("error", d);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ue("error", d), Ue("load", d);
                                break;
                            case "details":
                                Ue("toggle", d);
                                break;
                            case "input":
                                ur(d, g), Ue("invalid", d);
                                break;
                            case "select":
                                d._wrapperState = {
                                    wasMultiple: !!g.multiple
                                }, Ue("invalid", d);
                                break;
                            case "textarea":
                                dm(d, g), Ue("invalid", d)
                        }
                        wc(a, g), p = null;
                        for (var E in g)
                            if (g.hasOwnProperty(E)) {
                                var A = g[E];
                                E === "children" ? typeof A == "string" ? d.textContent !== A && (g.suppressHydrationWarning !== !0 && il(d.textContent, A, r), p = ["children", A]) : typeof A == "number" && d.textContent !== "" + A && (g.suppressHydrationWarning !== !0 && il(d.textContent, A, r), p = ["children", "" + A]) : i.hasOwnProperty(E) && A != null && E === "onScroll" && Ue("scroll", d)
                            }
                        switch (a) {
                            case "input":
                                Ae(d), Fa(d, g, !0);
                                break;
                            case "textarea":
                                Ae(d), hm(d);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof g.onClick == "function" && (d.onclick = al)
                        }
                        d = p, o.updateQueue = d, d !== null && (o.flags |= 4)
                    } else {
                        E = p.nodeType === 9 ? p : p.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = pm(a)), r === "http://www.w3.org/1999/xhtml" ? a === "script" ? (r = E.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof d.is == "string" ? r = E.createElement(a, {
                            is: d.is
                        }) : (r = E.createElement(a), a === "select" && (E = r, d.multiple ? E.multiple = !0 : d.size && (E.size = d.size))) : r = E.createElementNS(r, a), r[Pn] = o, r[Ei] = d, ky(r, o, !1, !1), o.stateNode = r;
                        e: {
                            switch (E = xc(a, d), a) {
                                case "dialog":
                                    Ue("cancel", r), Ue("close", r), p = d;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Ue("load", r), p = d;
                                    break;
                                case "video":
                                case "audio":
                                    for (p = 0; p < Si.length; p++) Ue(Si[p], r);
                                    p = d;
                                    break;
                                case "source":
                                    Ue("error", r), p = d;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Ue("error", r), Ue("load", r), p = d;
                                    break;
                                case "details":
                                    Ue("toggle", r), p = d;
                                    break;
                                case "input":
                                    ur(r, d), p = at(r, d), Ue("invalid", r);
                                    break;
                                case "option":
                                    p = d;
                                    break;
                                case "select":
                                    r._wrapperState = {
                                        wasMultiple: !!d.multiple
                                    }, p = W({}, d, {
                                        value: void 0
                                    }), Ue("invalid", r);
                                    break;
                                case "textarea":
                                    dm(r, d), p = yc(r, d), Ue("invalid", r);
                                    break;
                                default:
                                    p = d
                            }
                            wc(a, p),
                            A = p;
                            for (g in A)
                                if (A.hasOwnProperty(g)) {
                                    var O = A[g];
                                    g === "style" ? ym(r, O) : g === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, O != null && mm(r, O)) : g === "children" ? typeof O == "string" ? (a !== "textarea" || O !== "") && ni(r, O) : typeof O == "number" && ni(r, "" + O) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (i.hasOwnProperty(g) ? O != null && g === "onScroll" && Ue("scroll", r) : O != null && R(r, g, O, E))
                                }
                            switch (a) {
                                case "input":
                                    Ae(r), Fa(r, d, !1);
                                    break;
                                case "textarea":
                                    Ae(r), hm(r);
                                    break;
                                case "option":
                                    d.value != null && r.setAttribute("value", "" + me(d.value));
                                    break;
                                case "select":
                                    r.multiple = !!d.multiple, g = d.value, g != null ? qs(r, !!d.multiple, g, !1) : d.defaultValue != null && qs(r, !!d.multiple, d.defaultValue, !0);
                                    break;
                                default:
                                    typeof p.onClick == "function" && (r.onclick = al)
                            }
                            switch (a) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    d = !!d.autoFocus;
                                    break e;
                                case "img":
                                    d = !0;
                                    break e;
                                default:
                                    d = !1
                            }
                        }
                        d && (o.flags |= 4)
                    }
                    o.ref !== null && (o.flags |= 512, o.flags |= 2097152)
                }
                return Ct(o), null;
            case 6:
                if (r && o.stateNode != null) Py(r, o, r.memoizedProps, d);
                else {
                    if (typeof d != "string" && o.stateNode === null) throw Error(n(166));
                    if (a = cs(Ai.current), cs(An.current), pl(o)) {
                        if (d = o.stateNode, a = o.memoizedProps, d[Pn] = o, (g = d.nodeValue !== a) && (r = qt, r !== null)) switch (r.tag) {
                            case 3:
                                il(d.nodeValue, a, (r.mode & 1) !== 0);
                                break;
                            case 5:
                                r.memoizedProps.suppressHydrationWarning !== !0 && il(d.nodeValue, a, (r.mode & 1) !== 0)
                        }
                        g && (o.flags |= 4)
                    } else d = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(d), d[Pn] = o, o.stateNode = d
                }
                return Ct(o), null;
            case 13:
                if (ze(He), d = o.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
                    if (We && Kt !== null && (o.mode & 1) !== 0 && (o.flags & 128) === 0) Og(), ao(), o.flags |= 98560, g = !1;
                    else if (g = pl(o), d !== null && d.dehydrated !== null) {
                        if (r === null) {
                            if (!g) throw Error(n(318));
                            if (g = o.memoizedState, g = g !== null ? g.dehydrated : null, !g) throw Error(n(317));
                            g[Pn] = o
                        } else ao(), (o.flags & 128) === 0 && (o.memoizedState = null), o.flags |= 4;
                        Ct(o), g = !1
                    } else pn !== null && (Yd(pn), pn = null), g = !0;
                    if (!g) return o.flags & 65536 ? o : null
                }
                return (o.flags & 128) !== 0 ? (o.lanes = a, o) : (d = d !== null, d !== (r !== null && r.memoizedState !== null) && d && (o.child.flags |= 8192, (o.mode & 1) !== 0 && (r === null || (He.current & 1) !== 0 ? ut === 0 && (ut = 3) : Zd())), o.updateQueue !== null && (o.flags |= 4), Ct(o), null);
            case 4:
                return fo(), Bd(r, o), r === null && bi(o.stateNode.containerInfo), Ct(o), null;
            case 10:
                return hd(o.type._context), Ct(o), null;
            case 17:
                return Dt(o.type) && ul(), Ct(o), null;
            case 19:
                if (ze(He), g = o.memoizedState, g === null) return Ct(o), null;
                if (d = (o.flags & 128) !== 0, E = g.rendering, E === null)
                    if (d) Li(g, !1);
                    else {
                        if (ut !== 0 || r !== null && (r.flags & 128) !== 0)
                            for (r = o.child; r !== null;) {
                                if (E = xl(r), E !== null) {
                                    for (o.flags |= 128, Li(g, !1), d = E.updateQueue, d !== null && (o.updateQueue = d, o.flags |= 4), o.subtreeFlags = 0, d = a, a = o.child; a !== null;) g = a, r = d, g.flags &= 14680066, E = g.alternate, E === null ? (g.childLanes = 0, g.lanes = r, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = E.childLanes, g.lanes = E.lanes, g.child = E.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = E.memoizedProps, g.memoizedState = E.memoizedState, g.updateQueue = E.updateQueue, g.type = E.type, r = E.dependencies, g.dependencies = r === null ? null : {
                                        lanes: r.lanes,
                                        firstContext: r.firstContext
                                    }), a = a.sibling;
                                    return Ve(He, He.current & 1 | 2), o.child
                                }
                                r = r.sibling
                            }
                        g.tail !== null && Je() > go && (o.flags |= 128, d = !0, Li(g, !1), o.lanes = 4194304)
                    }
                else {
                    if (!d)
                        if (r = xl(E), r !== null) {
                            if (o.flags |= 128, d = !0, a = r.updateQueue, a !== null && (o.updateQueue = a, o.flags |= 4), Li(g, !0), g.tail === null && g.tailMode === "hidden" && !E.alternate && !We) return Ct(o), null
                        } else 2 * Je() - g.renderingStartTime > go && a !== 1073741824 && (o.flags |= 128, d = !0, Li(g, !1), o.lanes = 4194304);
                    g.isBackwards ? (E.sibling = o.child, o.child = E) : (a = g.last, a !== null ? a.sibling = E : o.child = E, g.last = E)
                }
                return g.tail !== null ? (o = g.tail, g.rendering = o, g.tail = o.sibling, g.renderingStartTime = Je(), o.sibling = null, a = He.current, Ve(He, d ? a & 1 | 2 : a & 1), o) : (Ct(o), null);
            case 22:
            case 23:
                return Jd(), d = o.memoizedState !== null, r !== null && r.memoizedState !== null !== d && (o.flags |= 8192), d && (o.mode & 1) !== 0 ? (Gt & 1073741824) !== 0 && (Ct(o), o.subtreeFlags & 6 && (o.flags |= 8192)) : Ct(o), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(n(156, o.tag))
    }

    function PT(r, o) {
        switch (ad(o), o.tag) {
            case 1:
                return Dt(o.type) && ul(), r = o.flags, r & 65536 ? (o.flags = r & -65537 | 128, o) : null;
            case 3:
                return fo(), ze(Lt), ze(St), xd(), r = o.flags, (r & 65536) !== 0 && (r & 128) === 0 ? (o.flags = r & -65537 | 128, o) : null;
            case 5:
                return vd(o), null;
            case 13:
                if (ze(He), r = o.memoizedState, r !== null && r.dehydrated !== null) {
                    if (o.alternate === null) throw Error(n(340));
                    ao()
                }
                return r = o.flags, r & 65536 ? (o.flags = r & -65537 | 128, o) : null;
            case 19:
                return ze(He), null;
            case 4:
                return fo(), null;
            case 10:
                return hd(o.type._context), null;
            case 22:
            case 23:
                return Jd(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var Al = !1,
        Et = !1,
        AT = typeof WeakSet == "function" ? WeakSet : Set,
        oe = null;

    function po(r, o) {
        var a = r.ref;
        if (a !== null)
            if (typeof a == "function") try {
                a(null)
            } catch (d) {
                Qe(r, o, d)
            } else a.current = null
    }

    function Vd(r, o, a) {
        try {
            a()
        } catch (d) {
            Qe(r, o, d)
        }
    }
    var Ay = !1;

    function _T(r, o) {
        if (Jc = Qa, r = ag(), Wc(r)) {
            if ("selectionStart" in r) var a = {
                start: r.selectionStart,
                end: r.selectionEnd
            };
            else e: {
                a = (a = r.ownerDocument) && a.defaultView || window;
                var d = a.getSelection && a.getSelection();
                if (d && d.rangeCount !== 0) {
                    a = d.anchorNode;
                    var p = d.anchorOffset,
                        g = d.focusNode;
                    d = d.focusOffset;
                    try {
                        a.nodeType, g.nodeType
                    } catch {
                        a = null;
                        break e
                    }
                    var E = 0,
                        A = -1,
                        O = -1,
                        V = 0,
                        K = 0,
                        Q = r,
                        q = null;
                    t: for (;;) {
                        for (var re; Q !== a || p !== 0 && Q.nodeType !== 3 || (A = E + p), Q !== g || d !== 0 && Q.nodeType !== 3 || (O = E + d), Q.nodeType === 3 && (E += Q.nodeValue.length), (re = Q.firstChild) !== null;) q = Q, Q = re;
                        for (;;) {
                            if (Q === r) break t;
                            if (q === a && ++V === p && (A = E), q === g && ++K === d && (O = E), (re = Q.nextSibling) !== null) break;
                            Q = q, q = Q.parentNode
                        }
                        Q = re
                    }
                    a = A === -1 || O === -1 ? null : {
                        start: A,
                        end: O
                    }
                } else a = null
            }
            a = a || {
                start: 0,
                end: 0
            }
        } else a = null;
        for (Zc = {
                focusedElem: r,
                selectionRange: a
            }, Qa = !1, oe = o; oe !== null;)
            if (o = oe, r = o.child, (o.subtreeFlags & 1028) !== 0 && r !== null) r.return = o, oe = r;
            else
                for (; oe !== null;) {
                    o = oe;
                    try {
                        var ie = o.alternate;
                        if ((o.flags & 1024) !== 0) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (ie !== null) {
                                    var ce = ie.memoizedProps,
                                        Ze = ie.memoizedState,
                                        I = o.stateNode,
                                        L = I.getSnapshotBeforeUpdate(o.elementType === o.type ? ce : mn(o.type, ce), Ze);
                                    I.__reactInternalSnapshotBeforeUpdate = L
                                }
                                break;
                            case 3:
                                var F = o.stateNode.containerInfo;
                                F.nodeType === 1 ? F.textContent = "" : F.nodeType === 9 && F.documentElement && F.removeChild(F.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(n(163))
                        }
                    } catch (Y) {
                        Qe(o, o.return, Y)
                    }
                    if (r = o.sibling, r !== null) {
                        r.return = o.return, oe = r;
                        break
                    }
                    oe = o.return
                }
        return ie = Ay, Ay = !1, ie
    }

    function Di(r, o, a) {
        var d = o.updateQueue;
        if (d = d !== null ? d.lastEffect : null, d !== null) {
            var p = d = d.next;
            do {
                if ((p.tag & r) === r) {
                    var g = p.destroy;
                    p.destroy = void 0, g !== void 0 && Vd(o, a, g)
                }
                p = p.next
            } while (p !== d)
        }
    }

    function _l(r, o) {
        if (o = o.updateQueue, o = o !== null ? o.lastEffect : null, o !== null) {
            var a = o = o.next;
            do {
                if ((a.tag & r) === r) {
                    var d = a.create;
                    a.destroy = d()
                }
                a = a.next
            } while (a !== o)
        }
    }

    function Ud(r) {
        var o = r.ref;
        if (o !== null) {
            var a = r.stateNode;
            switch (r.tag) {
                case 5:
                    r = a;
                    break;
                default:
                    r = a
            }
            typeof o == "function" ? o(r) : o.current = r
        }
    }

    function _y(r) {
        var o = r.alternate;
        o !== null && (r.alternate = null, _y(o)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (o = r.stateNode, o !== null && (delete o[Pn], delete o[Ei], delete o[rd], delete o[fT], delete o[hT])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null
    }

    function Oy(r) {
        return r.tag === 5 || r.tag === 3 || r.tag === 4
    }

    function Ny(r) {
        e: for (;;) {
            for (; r.sibling === null;) {
                if (r.return === null || Oy(r.return)) return null;
                r = r.return
            }
            for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18;) {
                if (r.flags & 2 || r.child === null || r.tag === 4) continue e;
                r.child.return = r, r = r.child
            }
            if (!(r.flags & 2)) return r.stateNode
        }
    }

    function zd(r, o, a) {
        var d = r.tag;
        if (d === 5 || d === 6) r = r.stateNode, o ? a.nodeType === 8 ? a.parentNode.insertBefore(r, o) : a.insertBefore(r, o) : (a.nodeType === 8 ? (o = a.parentNode, o.insertBefore(r, a)) : (o = a, o.appendChild(r)), a = a._reactRootContainer, a != null || o.onclick !== null || (o.onclick = al));
        else if (d !== 4 && (r = r.child, r !== null))
            for (zd(r, o, a), r = r.sibling; r !== null;) zd(r, o, a), r = r.sibling
    }

    function $d(r, o, a) {
        var d = r.tag;
        if (d === 5 || d === 6) r = r.stateNode, o ? a.insertBefore(r, o) : a.appendChild(r);
        else if (d !== 4 && (r = r.child, r !== null))
            for ($d(r, o, a), r = r.sibling; r !== null;) $d(r, o, a), r = r.sibling
    }
    var mt = null,
        gn = !1;

    function Er(r, o, a) {
        for (a = a.child; a !== null;) My(r, o, a), a = a.sibling
    }

    function My(r, o, a) {
        if (Rn && typeof Rn.onCommitFiberUnmount == "function") try {
            Rn.onCommitFiberUnmount($a, a)
        } catch {}
        switch (a.tag) {
            case 5:
                Et || po(a, o);
            case 6:
                var d = mt,
                    p = gn;
                mt = null, Er(r, o, a), mt = d, gn = p, mt !== null && (gn ? (r = mt, a = a.stateNode, r.nodeType === 8 ? r.parentNode.removeChild(a) : r.removeChild(a)) : mt.removeChild(a.stateNode));
                break;
            case 18:
                mt !== null && (gn ? (r = mt, a = a.stateNode, r.nodeType === 8 ? nd(r.parentNode, a) : r.nodeType === 1 && nd(r, a), hi(r)) : nd(mt, a.stateNode));
                break;
            case 4:
                d = mt, p = gn, mt = a.stateNode.containerInfo, gn = !0, Er(r, o, a), mt = d, gn = p;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Et && (d = a.updateQueue, d !== null && (d = d.lastEffect, d !== null))) {
                    p = d = d.next;
                    do {
                        var g = p,
                            E = g.destroy;
                        g = g.tag, E !== void 0 && ((g & 2) !== 0 || (g & 4) !== 0) && Vd(a, o, E), p = p.next
                    } while (p !== d)
                }
                Er(r, o, a);
                break;
            case 1:
                if (!Et && (po(a, o), d = a.stateNode, typeof d.componentWillUnmount == "function")) try {
                    d.props = a.memoizedProps, d.state = a.memoizedState, d.componentWillUnmount()
                } catch (A) {
                    Qe(a, o, A)
                }
                Er(r, o, a);
                break;
            case 21:
                Er(r, o, a);
                break;
            case 22:
                a.mode & 1 ? (Et = (d = Et) || a.memoizedState !== null, Er(r, o, a), Et = d) : Er(r, o, a);
                break;
            default:
                Er(r, o, a)
        }
    }

    function Ly(r) {
        var o = r.updateQueue;
        if (o !== null) {
            r.updateQueue = null;
            var a = r.stateNode;
            a === null && (a = r.stateNode = new AT), o.forEach(function(d) {
                var p = BT.bind(null, r, d);
                a.has(d) || (a.add(d), d.then(p, p))
            })
        }
    }

    function yn(r, o) {
        var a = o.deletions;
        if (a !== null)
            for (var d = 0; d < a.length; d++) {
                var p = a[d];
                try {
                    var g = r,
                        E = o,
                        A = E;
                    e: for (; A !== null;) {
                        switch (A.tag) {
                            case 5:
                                mt = A.stateNode, gn = !1;
                                break e;
                            case 3:
                                mt = A.stateNode.containerInfo, gn = !0;
                                break e;
                            case 4:
                                mt = A.stateNode.containerInfo, gn = !0;
                                break e
                        }
                        A = A.return
                    }
                    if (mt === null) throw Error(n(160));
                    My(g, E, p), mt = null, gn = !1;
                    var O = p.alternate;
                    O !== null && (O.return = null), p.return = null
                } catch (V) {
                    Qe(p, o, V)
                }
            }
        if (o.subtreeFlags & 12854)
            for (o = o.child; o !== null;) Dy(o, r), o = o.sibling
    }

    function Dy(r, o) {
        var a = r.alternate,
            d = r.flags;
        switch (r.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (yn(o, r), On(r), d & 4) {
                    try {
                        Di(3, r, r.return), _l(3, r)
                    } catch (ce) {
                        Qe(r, r.return, ce)
                    }
                    try {
                        Di(5, r, r.return)
                    } catch (ce) {
                        Qe(r, r.return, ce)
                    }
                }
                break;
            case 1:
                yn(o, r), On(r), d & 512 && a !== null && po(a, a.return);
                break;
            case 5:
                if (yn(o, r), On(r), d & 512 && a !== null && po(a, a.return), r.flags & 32) {
                    var p = r.stateNode;
                    try {
                        ni(p, "")
                    } catch (ce) {
                        Qe(r, r.return, ce)
                    }
                }
                if (d & 4 && (p = r.stateNode, p != null)) {
                    var g = r.memoizedProps,
                        E = a !== null ? a.memoizedProps : g,
                        A = r.type,
                        O = r.updateQueue;
                    if (r.updateQueue = null, O !== null) try {
                        A === "input" && g.type === "radio" && g.name != null && cr(p, g), xc(A, E);
                        var V = xc(A, g);
                        for (E = 0; E < O.length; E += 2) {
                            var K = O[E],
                                Q = O[E + 1];
                            K === "style" ? ym(p, Q) : K === "dangerouslySetInnerHTML" ? mm(p, Q) : K === "children" ? ni(p, Q) : R(p, K, Q, V)
                        }
                        switch (A) {
                            case "input":
                                Wn(p, g);
                                break;
                            case "textarea":
                                fm(p, g);
                                break;
                            case "select":
                                var q = p._wrapperState.wasMultiple;
                                p._wrapperState.wasMultiple = !!g.multiple;
                                var re = g.value;
                                re != null ? qs(p, !!g.multiple, re, !1) : q !== !!g.multiple && (g.defaultValue != null ? qs(p, !!g.multiple, g.defaultValue, !0) : qs(p, !!g.multiple, g.multiple ? [] : "", !1))
                        }
                        p[Ei] = g
                    } catch (ce) {
                        Qe(r, r.return, ce)
                    }
                }
                break;
            case 6:
                if (yn(o, r), On(r), d & 4) {
                    if (r.stateNode === null) throw Error(n(162));
                    p = r.stateNode, g = r.memoizedProps;
                    try {
                        p.nodeValue = g
                    } catch (ce) {
                        Qe(r, r.return, ce)
                    }
                }
                break;
            case 3:
                if (yn(o, r), On(r), d & 4 && a !== null && a.memoizedState.isDehydrated) try {
                    hi(o.containerInfo)
                } catch (ce) {
                    Qe(r, r.return, ce)
                }
                break;
            case 4:
                yn(o, r), On(r);
                break;
            case 13:
                yn(o, r), On(r), p = r.child, p.flags & 8192 && (g = p.memoizedState !== null, p.stateNode.isHidden = g, !g || p.alternate !== null && p.alternate.memoizedState !== null || (qd = Je())), d & 4 && Ly(r);
                break;
            case 22:
                if (K = a !== null && a.memoizedState !== null, r.mode & 1 ? (Et = (V = Et) || K, yn(o, r), Et = V) : yn(o, r), On(r), d & 8192) {
                    if (V = r.memoizedState !== null, (r.stateNode.isHidden = V) && !K && (r.mode & 1) !== 0)
                        for (oe = r, K = r.child; K !== null;) {
                            for (Q = oe = K; oe !== null;) {
                                switch (q = oe, re = q.child, q.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        Di(4, q, q.return);
                                        break;
                                    case 1:
                                        po(q, q.return);
                                        var ie = q.stateNode;
                                        if (typeof ie.componentWillUnmount == "function") {
                                            d = q, a = q.return;
                                            try {
                                                o = d, ie.props = o.memoizedProps, ie.state = o.memoizedState, ie.componentWillUnmount()
                                            } catch (ce) {
                                                Qe(d, a, ce)
                                            }
                                        }
                                        break;
                                    case 5:
                                        po(q, q.return);
                                        break;
                                    case 22:
                                        if (q.memoizedState !== null) {
                                            Fy(Q);
                                            continue
                                        }
                                }
                                re !== null ? (re.return = q, oe = re) : Fy(Q)
                            }
                            K = K.sibling
                        }
                    e: for (K = null, Q = r;;) {
                        if (Q.tag === 5) {
                            if (K === null) {
                                K = Q;
                                try {
                                    p = Q.stateNode, V ? (g = p.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (A = Q.stateNode, O = Q.memoizedProps.style, E = O != null && O.hasOwnProperty("display") ? O.display : null, A.style.display = gm("display", E))
                                } catch (ce) {
                                    Qe(r, r.return, ce)
                                }
                            }
                        } else if (Q.tag === 6) {
                            if (K === null) try {
                                Q.stateNode.nodeValue = V ? "" : Q.memoizedProps
                            } catch (ce) {
                                Qe(r, r.return, ce)
                            }
                        } else if ((Q.tag !== 22 && Q.tag !== 23 || Q.memoizedState === null || Q === r) && Q.child !== null) {
                            Q.child.return = Q, Q = Q.child;
                            continue
                        }
                        if (Q === r) break e;
                        for (; Q.sibling === null;) {
                            if (Q.return === null || Q.return === r) break e;
                            K === Q && (K = null), Q = Q.return
                        }
                        K === Q && (K = null), Q.sibling.return = Q.return, Q = Q.sibling
                    }
                }
                break;
            case 19:
                yn(o, r), On(r), d & 4 && Ly(r);
                break;
            case 21:
                break;
            default:
                yn(o, r), On(r)
        }
    }

    function On(r) {
        var o = r.flags;
        if (o & 2) {
            try {
                e: {
                    for (var a = r.return; a !== null;) {
                        if (Oy(a)) {
                            var d = a;
                            break e
                        }
                        a = a.return
                    }
                    throw Error(n(160))
                }
                switch (d.tag) {
                    case 5:
                        var p = d.stateNode;
                        d.flags & 32 && (ni(p, ""), d.flags &= -33);
                        var g = Ny(r);
                        $d(r, g, p);
                        break;
                    case 3:
                    case 4:
                        var E = d.stateNode.containerInfo,
                            A = Ny(r);
                        zd(r, A, E);
                        break;
                    default:
                        throw Error(n(161))
                }
            }
            catch (O) {
                Qe(r, r.return, O)
            }
            r.flags &= -3
        }
        o & 4096 && (r.flags &= -4097)
    }

    function OT(r, o, a) {
        oe = r, jy(r)
    }

    function jy(r, o, a) {
        for (var d = (r.mode & 1) !== 0; oe !== null;) {
            var p = oe,
                g = p.child;
            if (p.tag === 22 && d) {
                var E = p.memoizedState !== null || Al;
                if (!E) {
                    var A = p.alternate,
                        O = A !== null && A.memoizedState !== null || Et;
                    A = Al;
                    var V = Et;
                    if (Al = E, (Et = O) && !V)
                        for (oe = p; oe !== null;) E = oe, O = E.child, E.tag === 22 && E.memoizedState !== null ? By(p) : O !== null ? (O.return = E, oe = O) : By(p);
                    for (; g !== null;) oe = g, jy(g), g = g.sibling;
                    oe = p, Al = A, Et = V
                }
                Iy(r)
            } else(p.subtreeFlags & 8772) !== 0 && g !== null ? (g.return = p, oe = g) : Iy(r)
        }
    }

    function Iy(r) {
        for (; oe !== null;) {
            var o = oe;
            if ((o.flags & 8772) !== 0) {
                var a = o.alternate;
                try {
                    if ((o.flags & 8772) !== 0) switch (o.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Et || _l(5, o);
                            break;
                        case 1:
                            var d = o.stateNode;
                            if (o.flags & 4 && !Et)
                                if (a === null) d.componentDidMount();
                                else {
                                    var p = o.elementType === o.type ? a.memoizedProps : mn(o.type, a.memoizedProps);
                                    d.componentDidUpdate(p, a.memoizedState, d.__reactInternalSnapshotBeforeUpdate)
                                }
                            var g = o.updateQueue;
                            g !== null && Fg(o, g, d);
                            break;
                        case 3:
                            var E = o.updateQueue;
                            if (E !== null) {
                                if (a = null, o.child !== null) switch (o.child.tag) {
                                    case 5:
                                        a = o.child.stateNode;
                                        break;
                                    case 1:
                                        a = o.child.stateNode
                                }
                                Fg(o, E, a)
                            }
                            break;
                        case 5:
                            var A = o.stateNode;
                            if (a === null && o.flags & 4) {
                                a = A;
                                var O = o.memoizedProps;
                                switch (o.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        O.autoFocus && a.focus();
                                        break;
                                    case "img":
                                        O.src && (a.src = O.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (o.memoizedState === null) {
                                var V = o.alternate;
                                if (V !== null) {
                                    var K = V.memoizedState;
                                    if (K !== null) {
                                        var Q = K.dehydrated;
                                        Q !== null && hi(Q)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(n(163))
                    }
                    Et || o.flags & 512 && Ud(o)
                } catch (q) {
                    Qe(o, o.return, q)
                }
            }
            if (o === r) {
                oe = null;
                break
            }
            if (a = o.sibling, a !== null) {
                a.return = o.return, oe = a;
                break
            }
            oe = o.return
        }
    }

    function Fy(r) {
        for (; oe !== null;) {
            var o = oe;
            if (o === r) {
                oe = null;
                break
            }
            var a = o.sibling;
            if (a !== null) {
                a.return = o.return, oe = a;
                break
            }
            oe = o.return
        }
    }

    function By(r) {
        for (; oe !== null;) {
            var o = oe;
            try {
                switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var a = o.return;
                        try {
                            _l(4, o)
                        } catch (O) {
                            Qe(o, a, O)
                        }
                        break;
                    case 1:
                        var d = o.stateNode;
                        if (typeof d.componentDidMount == "function") {
                            var p = o.return;
                            try {
                                d.componentDidMount()
                            } catch (O) {
                                Qe(o, p, O)
                            }
                        }
                        var g = o.return;
                        try {
                            Ud(o)
                        } catch (O) {
                            Qe(o, g, O)
                        }
                        break;
                    case 5:
                        var E = o.return;
                        try {
                            Ud(o)
                        } catch (O) {
                            Qe(o, E, O)
                        }
                }
            } catch (O) {
                Qe(o, o.return, O)
            }
            if (o === r) {
                oe = null;
                break
            }
            var A = o.sibling;
            if (A !== null) {
                A.return = o.return, oe = A;
                break
            }
            oe = o.return
        }
    }
    var NT = Math.ceil,
        Ol = _.ReactCurrentDispatcher,
        Wd = _.ReactCurrentOwner,
        rn = _.ReactCurrentBatchConfig,
        De = 0,
        ft = null,
        rt = null,
        gt = 0,
        Gt = 0,
        mo = wr(0),
        ut = 0,
        ji = null,
        fs = 0,
        Nl = 0,
        Hd = 0,
        Ii = null,
        It = null,
        qd = 0,
        go = 1 / 0,
        Jn = null,
        Ml = !1,
        Kd = null,
        Tr = null,
        Ll = !1,
        kr = null,
        Dl = 0,
        Fi = 0,
        Gd = null,
        jl = -1,
        Il = 0;

    function Nt() {
        return (De & 6) !== 0 ? Je() : jl !== -1 ? jl : jl = Je()
    }

    function Rr(r) {
        return (r.mode & 1) === 0 ? 1 : (De & 2) !== 0 && gt !== 0 ? gt & -gt : mT.transition !== null ? (Il === 0 && (Il = Nm()), Il) : (r = Fe, r !== 0 || (r = window.event, r = r === void 0 ? 16 : Um(r.type)), r)
    }

    function vn(r, o, a, d) {
        if (50 < Fi) throw Fi = 0, Gd = null, Error(n(185));
        li(r, a, d), ((De & 2) === 0 || r !== ft) && (r === ft && ((De & 2) === 0 && (Nl |= a), ut === 4 && Pr(r, gt)), Ft(r, d), a === 1 && De === 0 && (o.mode & 1) === 0 && (go = Je() + 500, dl && Sr()))
    }

    function Ft(r, o) {
        var a = r.callbackNode;
        mE(r, o);
        var d = qa(r, r === ft ? gt : 0);
        if (d === 0) a !== null && Am(a), r.callbackNode = null, r.callbackPriority = 0;
        else if (o = d & -d, r.callbackPriority !== o) {
            if (a != null && Am(a), o === 1) r.tag === 0 ? pT(Uy.bind(null, r)) : kg(Uy.bind(null, r)), cT(function() {
                (De & 6) === 0 && Sr()
            }), a = null;
            else {
                switch (Mm(d)) {
                    case 1:
                        a = Rc;
                        break;
                    case 4:
                        a = _m;
                        break;
                    case 16:
                        a = za;
                        break;
                    case 536870912:
                        a = Om;
                        break;
                    default:
                        a = za
                }
                a = Qy(a, Vy.bind(null, r))
            }
            r.callbackPriority = o, r.callbackNode = a
        }
    }

    function Vy(r, o) {
        if (jl = -1, Il = 0, (De & 6) !== 0) throw Error(n(327));
        var a = r.callbackNode;
        if (yo() && r.callbackNode !== a) return null;
        var d = qa(r, r === ft ? gt : 0);
        if (d === 0) return null;
        if ((d & 30) !== 0 || (d & r.expiredLanes) !== 0 || o) o = Fl(r, d);
        else {
            o = d;
            var p = De;
            De |= 2;
            var g = $y();
            (ft !== r || gt !== o) && (Jn = null, go = Je() + 500, ps(r, o));
            do try {
                DT();
                break
            } catch (A) {
                zy(r, A)
            }
            while (!0);
            fd(), Ol.current = g, De = p, rt !== null ? o = 0 : (ft = null, gt = 0, o = ut)
        }
        if (o !== 0) {
            if (o === 2 && (p = Pc(r), p !== 0 && (d = p, o = Qd(r, p))), o === 1) throw a = ji, ps(r, 0), Pr(r, d), Ft(r, Je()), a;
            if (o === 6) Pr(r, d);
            else {
                if (p = r.current.alternate, (d & 30) === 0 && !MT(p) && (o = Fl(r, d), o === 2 && (g = Pc(r), g !== 0 && (d = g, o = Qd(r, g))), o === 1)) throw a = ji, ps(r, 0), Pr(r, d), Ft(r, Je()), a;
                switch (r.finishedWork = p, r.finishedLanes = d, o) {
                    case 0:
                    case 1:
                        throw Error(n(345));
                    case 2:
                        ms(r, It, Jn);
                        break;
                    case 3:
                        if (Pr(r, d), (d & 130023424) === d && (o = qd + 500 - Je(), 10 < o)) {
                            if (qa(r, 0) !== 0) break;
                            if (p = r.suspendedLanes, (p & d) !== d) {
                                Nt(), r.pingedLanes |= r.suspendedLanes & p;
                                break
                            }
                            r.timeoutHandle = td(ms.bind(null, r, It, Jn), o);
                            break
                        }
                        ms(r, It, Jn);
                        break;
                    case 4:
                        if (Pr(r, d), (d & 4194240) === d) break;
                        for (o = r.eventTimes, p = -1; 0 < d;) {
                            var E = 31 - fn(d);
                            g = 1 << E, E = o[E], E > p && (p = E), d &= ~g
                        }
                        if (d = p, d = Je() - d, d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * NT(d / 1960)) - d, 10 < d) {
                            r.timeoutHandle = td(ms.bind(null, r, It, Jn), d);
                            break
                        }
                        ms(r, It, Jn);
                        break;
                    case 5:
                        ms(r, It, Jn);
                        break;
                    default:
                        throw Error(n(329))
                }
            }
        }
        return Ft(r, Je()), r.callbackNode === a ? Vy.bind(null, r) : null
    }

    function Qd(r, o) {
        var a = Ii;
        return r.current.memoizedState.isDehydrated && (ps(r, o).flags |= 256), r = Fl(r, o), r !== 2 && (o = It, It = a, o !== null && Yd(o)), r
    }

    function Yd(r) {
        It === null ? It = r : It.push.apply(It, r)
    }

    function MT(r) {
        for (var o = r;;) {
            if (o.flags & 16384) {
                var a = o.updateQueue;
                if (a !== null && (a = a.stores, a !== null))
                    for (var d = 0; d < a.length; d++) {
                        var p = a[d],
                            g = p.getSnapshot;
                        p = p.value;
                        try {
                            if (!hn(g(), p)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (a = o.child, o.subtreeFlags & 16384 && a !== null) a.return = o, o = a;
            else {
                if (o === r) break;
                for (; o.sibling === null;) {
                    if (o.return === null || o.return === r) return !0;
                    o = o.return
                }
                o.sibling.return = o.return, o = o.sibling
            }
        }
        return !0
    }

    function Pr(r, o) {
        for (o &= ~Hd, o &= ~Nl, r.suspendedLanes |= o, r.pingedLanes &= ~o, r = r.expirationTimes; 0 < o;) {
            var a = 31 - fn(o),
                d = 1 << a;
            r[a] = -1, o &= ~d
        }
    }

    function Uy(r) {
        if ((De & 6) !== 0) throw Error(n(327));
        yo();
        var o = qa(r, 0);
        if ((o & 1) === 0) return Ft(r, Je()), null;
        var a = Fl(r, o);
        if (r.tag !== 0 && a === 2) {
            var d = Pc(r);
            d !== 0 && (o = d, a = Qd(r, d))
        }
        if (a === 1) throw a = ji, ps(r, 0), Pr(r, o), Ft(r, Je()), a;
        if (a === 6) throw Error(n(345));
        return r.finishedWork = r.current.alternate, r.finishedLanes = o, ms(r, It, Jn), Ft(r, Je()), null
    }

    function Xd(r, o) {
        var a = De;
        De |= 1;
        try {
            return r(o)
        } finally {
            De = a, De === 0 && (go = Je() + 500, dl && Sr())
        }
    }

    function hs(r) {
        kr !== null && kr.tag === 0 && (De & 6) === 0 && yo();
        var o = De;
        De |= 1;
        var a = rn.transition,
            d = Fe;
        try {
            if (rn.transition = null, Fe = 1, r) return r()
        } finally {
            Fe = d, rn.transition = a, De = o, (De & 6) === 0 && Sr()
        }
    }

    function Jd() {
        Gt = mo.current, ze(mo)
    }

    function ps(r, o) {
        r.finishedWork = null, r.finishedLanes = 0;
        var a = r.timeoutHandle;
        if (a !== -1 && (r.timeoutHandle = -1, uT(a)), rt !== null)
            for (a = rt.return; a !== null;) {
                var d = a;
                switch (ad(d), d.tag) {
                    case 1:
                        d = d.type.childContextTypes, d != null && ul();
                        break;
                    case 3:
                        fo(), ze(Lt), ze(St), xd();
                        break;
                    case 5:
                        vd(d);
                        break;
                    case 4:
                        fo();
                        break;
                    case 13:
                        ze(He);
                        break;
                    case 19:
                        ze(He);
                        break;
                    case 10:
                        hd(d.type._context);
                        break;
                    case 22:
                    case 23:
                        Jd()
                }
                a = a.return
            }
        if (ft = r, rt = r = Ar(r.current, null), gt = Gt = o, ut = 0, ji = null, Hd = Nl = fs = 0, It = Ii = null, us !== null) {
            for (o = 0; o < us.length; o++)
                if (a = us[o], d = a.interleaved, d !== null) {
                    a.interleaved = null;
                    var p = d.next,
                        g = a.pending;
                    if (g !== null) {
                        var E = g.next;
                        g.next = p, d.next = E
                    }
                    a.pending = d
                }
            us = null
        }
        return r
    }

    function zy(r, o) {
        do {
            var a = rt;
            try {
                if (fd(), Sl.current = Tl, bl) {
                    for (var d = qe.memoizedState; d !== null;) {
                        var p = d.queue;
                        p !== null && (p.pending = null), d = d.next
                    }
                    bl = !1
                }
                if (ds = 0, dt = lt = qe = null, _i = !1, Oi = 0, Wd.current = null, a === null || a.return === null) {
                    ut = 1, ji = o, rt = null;
                    break
                }
                e: {
                    var g = r,
                        E = a.return,
                        A = a,
                        O = o;
                    if (o = gt, A.flags |= 32768, O !== null && typeof O == "object" && typeof O.then == "function") {
                        var V = O,
                            K = A,
                            Q = K.tag;
                        if ((K.mode & 1) === 0 && (Q === 0 || Q === 11 || Q === 15)) {
                            var q = K.alternate;
                            q ? (K.updateQueue = q.updateQueue, K.memoizedState = q.memoizedState, K.lanes = q.lanes) : (K.updateQueue = null, K.memoizedState = null)
                        }
                        var re = hy(E);
                        if (re !== null) {
                            re.flags &= -257, py(re, E, A, g, o), re.mode & 1 && fy(g, V, o), o = re, O = V;
                            var ie = o.updateQueue;
                            if (ie === null) {
                                var ce = new Set;
                                ce.add(O), o.updateQueue = ce
                            } else ie.add(O);
                            break e
                        } else {
                            if ((o & 1) === 0) {
                                fy(g, V, o), Zd();
                                break e
                            }
                            O = Error(n(426))
                        }
                    } else if (We && A.mode & 1) {
                        var Ze = hy(E);
                        if (Ze !== null) {
                            (Ze.flags & 65536) === 0 && (Ze.flags |= 256), py(Ze, E, A, g, o), cd(ho(O, A));
                            break e
                        }
                    }
                    g = O = ho(O, A),
                    ut !== 4 && (ut = 2),
                    Ii === null ? Ii = [g] : Ii.push(g),
                    g = E;do {
                        switch (g.tag) {
                            case 3:
                                g.flags |= 65536, o &= -o, g.lanes |= o;
                                var I = cy(g, O, o);
                                Ig(g, I);
                                break e;
                            case 1:
                                A = O;
                                var L = g.type,
                                    F = g.stateNode;
                                if ((g.flags & 128) === 0 && (typeof L.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && (Tr === null || !Tr.has(F)))) {
                                    g.flags |= 65536, o &= -o, g.lanes |= o;
                                    var Y = dy(g, A, o);
                                    Ig(g, Y);
                                    break e
                                }
                        }
                        g = g.return
                    } while (g !== null)
                }
                Hy(a)
            } catch (he) {
                o = he, rt === a && a !== null && (rt = a = a.return);
                continue
            }
            break
        } while (!0)
    }

    function $y() {
        var r = Ol.current;
        return Ol.current = Tl, r === null ? Tl : r
    }

    function Zd() {
        (ut === 0 || ut === 3 || ut === 2) && (ut = 4), ft === null || (fs & 268435455) === 0 && (Nl & 268435455) === 0 || Pr(ft, gt)
    }

    function Fl(r, o) {
        var a = De;
        De |= 2;
        var d = $y();
        (ft !== r || gt !== o) && (Jn = null, ps(r, o));
        do try {
            LT();
            break
        } catch (p) {
            zy(r, p)
        }
        while (!0);
        if (fd(), De = a, Ol.current = d, rt !== null) throw Error(n(261));
        return ft = null, gt = 0, ut
    }

    function LT() {
        for (; rt !== null;) Wy(rt)
    }

    function DT() {
        for (; rt !== null && !iE();) Wy(rt)
    }

    function Wy(r) {
        var o = Gy(r.alternate, r, Gt);
        r.memoizedProps = r.pendingProps, o === null ? Hy(r) : rt = o, Wd.current = null
    }

    function Hy(r) {
        var o = r;
        do {
            var a = o.alternate;
            if (r = o.return, (o.flags & 32768) === 0) {
                if (a = RT(a, o, Gt), a !== null) {
                    rt = a;
                    return
                }
            } else {
                if (a = PT(a, o), a !== null) {
                    a.flags &= 32767, rt = a;
                    return
                }
                if (r !== null) r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
                else {
                    ut = 6, rt = null;
                    return
                }
            }
            if (o = o.sibling, o !== null) {
                rt = o;
                return
            }
            rt = o = r
        } while (o !== null);
        ut === 0 && (ut = 5)
    }

    function ms(r, o, a) {
        var d = Fe,
            p = rn.transition;
        try {
            rn.transition = null, Fe = 1, jT(r, o, a, d)
        } finally {
            rn.transition = p, Fe = d
        }
        return null
    }

    function jT(r, o, a, d) {
        do yo(); while (kr !== null);
        if ((De & 6) !== 0) throw Error(n(327));
        a = r.finishedWork;
        var p = r.finishedLanes;
        if (a === null) return null;
        if (r.finishedWork = null, r.finishedLanes = 0, a === r.current) throw Error(n(177));
        r.callbackNode = null, r.callbackPriority = 0;
        var g = a.lanes | a.childLanes;
        if (gE(r, g), r === ft && (rt = ft = null, gt = 0), (a.subtreeFlags & 2064) === 0 && (a.flags & 2064) === 0 || Ll || (Ll = !0, Qy(za, function() {
                return yo(), null
            })), g = (a.flags & 15990) !== 0, (a.subtreeFlags & 15990) !== 0 || g) {
            g = rn.transition, rn.transition = null;
            var E = Fe;
            Fe = 1;
            var A = De;
            De |= 4, Wd.current = null, _T(r, a), Dy(a, r), nT(Zc), Qa = !!Jc, Zc = Jc = null, r.current = a, OT(a), aE(), De = A, Fe = E, rn.transition = g
        } else r.current = a;
        if (Ll && (Ll = !1, kr = r, Dl = p), g = r.pendingLanes, g === 0 && (Tr = null), cE(a.stateNode), Ft(r, Je()), o !== null)
            for (d = r.onRecoverableError, a = 0; a < o.length; a++) p = o[a], d(p.value, {
                componentStack: p.stack,
                digest: p.digest
            });
        if (Ml) throw Ml = !1, r = Kd, Kd = null, r;
        return (Dl & 1) !== 0 && r.tag !== 0 && yo(), g = r.pendingLanes, (g & 1) !== 0 ? r === Gd ? Fi++ : (Fi = 0, Gd = r) : Fi = 0, Sr(), null
    }

    function yo() {
        if (kr !== null) {
            var r = Mm(Dl),
                o = rn.transition,
                a = Fe;
            try {
                if (rn.transition = null, Fe = 16 > r ? 16 : r, kr === null) var d = !1;
                else {
                    if (r = kr, kr = null, Dl = 0, (De & 6) !== 0) throw Error(n(331));
                    var p = De;
                    for (De |= 4, oe = r.current; oe !== null;) {
                        var g = oe,
                            E = g.child;
                        if ((oe.flags & 16) !== 0) {
                            var A = g.deletions;
                            if (A !== null) {
                                for (var O = 0; O < A.length; O++) {
                                    var V = A[O];
                                    for (oe = V; oe !== null;) {
                                        var K = oe;
                                        switch (K.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Di(8, K, g)
                                        }
                                        var Q = K.child;
                                        if (Q !== null) Q.return = K, oe = Q;
                                        else
                                            for (; oe !== null;) {
                                                K = oe;
                                                var q = K.sibling,
                                                    re = K.return;
                                                if (_y(K), K === V) {
                                                    oe = null;
                                                    break
                                                }
                                                if (q !== null) {
                                                    q.return = re, oe = q;
                                                    break
                                                }
                                                oe = re
                                            }
                                    }
                                }
                                var ie = g.alternate;
                                if (ie !== null) {
                                    var ce = ie.child;
                                    if (ce !== null) {
                                        ie.child = null;
                                        do {
                                            var Ze = ce.sibling;
                                            ce.sibling = null, ce = Ze
                                        } while (ce !== null)
                                    }
                                }
                                oe = g
                            }
                        }
                        if ((g.subtreeFlags & 2064) !== 0 && E !== null) E.return = g, oe = E;
                        else e: for (; oe !== null;) {
                            if (g = oe, (g.flags & 2048) !== 0) switch (g.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Di(9, g, g.return)
                            }
                            var I = g.sibling;
                            if (I !== null) {
                                I.return = g.return, oe = I;
                                break e
                            }
                            oe = g.return
                        }
                    }
                    var L = r.current;
                    for (oe = L; oe !== null;) {
                        E = oe;
                        var F = E.child;
                        if ((E.subtreeFlags & 2064) !== 0 && F !== null) F.return = E, oe = F;
                        else e: for (E = L; oe !== null;) {
                            if (A = oe, (A.flags & 2048) !== 0) try {
                                switch (A.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        _l(9, A)
                                }
                            } catch (he) {
                                Qe(A, A.return, he)
                            }
                            if (A === E) {
                                oe = null;
                                break e
                            }
                            var Y = A.sibling;
                            if (Y !== null) {
                                Y.return = A.return, oe = Y;
                                break e
                            }
                            oe = A.return
                        }
                    }
                    if (De = p, Sr(), Rn && typeof Rn.onPostCommitFiberRoot == "function") try {
                        Rn.onPostCommitFiberRoot($a, r)
                    } catch {}
                    d = !0
                }
                return d
            } finally {
                Fe = a, rn.transition = o
            }
        }
        return !1
    }

    function qy(r, o, a) {
        o = ho(a, o), o = cy(r, o, 1), r = Cr(r, o, 1), o = Nt(), r !== null && (li(r, 1, o), Ft(r, o))
    }

    function Qe(r, o, a) {
        if (r.tag === 3) qy(r, r, a);
        else
            for (; o !== null;) {
                if (o.tag === 3) {
                    qy(o, r, a);
                    break
                } else if (o.tag === 1) {
                    var d = o.stateNode;
                    if (typeof o.type.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && (Tr === null || !Tr.has(d))) {
                        r = ho(a, r), r = dy(o, r, 1), o = Cr(o, r, 1), r = Nt(), o !== null && (li(o, 1, r), Ft(o, r));
                        break
                    }
                }
                o = o.return
            }
    }

    function IT(r, o, a) {
        var d = r.pingCache;
        d !== null && d.delete(o), o = Nt(), r.pingedLanes |= r.suspendedLanes & a, ft === r && (gt & a) === a && (ut === 4 || ut === 3 && (gt & 130023424) === gt && 500 > Je() - qd ? ps(r, 0) : Hd |= a), Ft(r, o)
    }

    function Ky(r, o) {
        o === 0 && ((r.mode & 1) === 0 ? o = 1 : (o = Ha, Ha <<= 1, (Ha & 130023424) === 0 && (Ha = 4194304)));
        var a = Nt();
        r = Qn(r, o), r !== null && (li(r, o, a), Ft(r, a))
    }

    function FT(r) {
        var o = r.memoizedState,
            a = 0;
        o !== null && (a = o.retryLane), Ky(r, a)
    }

    function BT(r, o) {
        var a = 0;
        switch (r.tag) {
            case 13:
                var d = r.stateNode,
                    p = r.memoizedState;
                p !== null && (a = p.retryLane);
                break;
            case 19:
                d = r.stateNode;
                break;
            default:
                throw Error(n(314))
        }
        d !== null && d.delete(o), Ky(r, a)
    }
    var Gy;
    Gy = function(r, o, a) {
        if (r !== null)
            if (r.memoizedProps !== o.pendingProps || Lt.current) jt = !0;
            else {
                if ((r.lanes & a) === 0 && (o.flags & 128) === 0) return jt = !1, kT(r, o, a);
                jt = (r.flags & 131072) !== 0
            }
        else jt = !1, We && (o.flags & 1048576) !== 0 && Rg(o, hl, o.index);
        switch (o.lanes = 0, o.tag) {
            case 2:
                var d = o.type;
                Pl(r, o), r = o.pendingProps;
                var p = so(o, St.current);
                co(o, a), p = Cd(null, o, d, r, p, a);
                var g = Ed();
                return o.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (o.tag = 1, o.memoizedState = null, o.updateQueue = null, Dt(d) ? (g = !0, cl(o)) : g = !1, o.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, gd(o), p.updater = kl, o.stateNode = p, p._reactInternals = o, _d(o, d, r, a), o = Ld(null, o, d, !0, g, a)) : (o.tag = 0, We && g && id(o), Ot(null, o, p, a), o = o.child), o;
            case 16:
                d = o.elementType;
                e: {
                    switch (Pl(r, o), r = o.pendingProps, p = d._init, d = p(d._payload), o.type = d, p = o.tag = UT(d), r = mn(d, r), p) {
                        case 0:
                            o = Md(null, o, d, r, a);
                            break e;
                        case 1:
                            o = xy(null, o, d, r, a);
                            break e;
                        case 11:
                            o = my(null, o, d, r, a);
                            break e;
                        case 14:
                            o = gy(null, o, d, mn(d.type, r), a);
                            break e
                    }
                    throw Error(n(306, d, ""))
                }
                return o;
            case 0:
                return d = o.type, p = o.pendingProps, p = o.elementType === d ? p : mn(d, p), Md(r, o, d, p, a);
            case 1:
                return d = o.type, p = o.pendingProps, p = o.elementType === d ? p : mn(d, p), xy(r, o, d, p, a);
            case 3:
                e: {
                    if (Sy(o), r === null) throw Error(n(387));d = o.pendingProps,
                    g = o.memoizedState,
                    p = g.element,
                    jg(r, o),
                    wl(o, d, null, a);
                    var E = o.memoizedState;
                    if (d = E.element, g.isDehydrated)
                        if (g = {
                                element: d,
                                isDehydrated: !1,
                                cache: E.cache,
                                pendingSuspenseBoundaries: E.pendingSuspenseBoundaries,
                                transitions: E.transitions
                            }, o.updateQueue.baseState = g, o.memoizedState = g, o.flags & 256) {
                            p = ho(Error(n(423)), o), o = by(r, o, d, a, p);
                            break e
                        } else if (d !== p) {
                        p = ho(Error(n(424)), o), o = by(r, o, d, a, p);
                        break e
                    } else
                        for (Kt = vr(o.stateNode.containerInfo.firstChild), qt = o, We = !0, pn = null, a = Lg(o, null, d, a), o.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling;
                    else {
                        if (ao(), d === p) {
                            o = Xn(r, o, a);
                            break e
                        }
                        Ot(r, o, d, a)
                    }
                    o = o.child
                }
                return o;
            case 5:
                return Bg(o), r === null && ud(o), d = o.type, p = o.pendingProps, g = r !== null ? r.memoizedProps : null, E = p.children, ed(d, p) ? E = null : g !== null && ed(d, g) && (o.flags |= 32), wy(r, o), Ot(r, o, E, a), o.child;
            case 6:
                return r === null && ud(o), null;
            case 13:
                return Cy(r, o, a);
            case 4:
                return yd(o, o.stateNode.containerInfo), d = o.pendingProps, r === null ? o.child = lo(o, null, d, a) : Ot(r, o, d, a), o.child;
            case 11:
                return d = o.type, p = o.pendingProps, p = o.elementType === d ? p : mn(d, p), my(r, o, d, p, a);
            case 7:
                return Ot(r, o, o.pendingProps, a), o.child;
            case 8:
                return Ot(r, o, o.pendingProps.children, a), o.child;
            case 12:
                return Ot(r, o, o.pendingProps.children, a), o.child;
            case 10:
                e: {
                    if (d = o.type._context, p = o.pendingProps, g = o.memoizedProps, E = p.value, Ve(gl, d._currentValue), d._currentValue = E, g !== null)
                        if (hn(g.value, E)) {
                            if (g.children === p.children && !Lt.current) {
                                o = Xn(r, o, a);
                                break e
                            }
                        } else
                            for (g = o.child, g !== null && (g.return = o); g !== null;) {
                                var A = g.dependencies;
                                if (A !== null) {
                                    E = g.child;
                                    for (var O = A.firstContext; O !== null;) {
                                        if (O.context === d) {
                                            if (g.tag === 1) {
                                                O = Yn(-1, a & -a), O.tag = 2;
                                                var V = g.updateQueue;
                                                if (V !== null) {
                                                    V = V.shared;
                                                    var K = V.pending;
                                                    K === null ? O.next = O : (O.next = K.next, K.next = O), V.pending = O
                                                }
                                            }
                                            g.lanes |= a, O = g.alternate, O !== null && (O.lanes |= a), pd(g.return, a, o), A.lanes |= a;
                                            break
                                        }
                                        O = O.next
                                    }
                                } else if (g.tag === 10) E = g.type === o.type ? null : g.child;
                                else if (g.tag === 18) {
                                    if (E = g.return, E === null) throw Error(n(341));
                                    E.lanes |= a, A = E.alternate, A !== null && (A.lanes |= a), pd(E, a, o), E = g.sibling
                                } else E = g.child;
                                if (E !== null) E.return = g;
                                else
                                    for (E = g; E !== null;) {
                                        if (E === o) {
                                            E = null;
                                            break
                                        }
                                        if (g = E.sibling, g !== null) {
                                            g.return = E.return, E = g;
                                            break
                                        }
                                        E = E.return
                                    }
                                g = E
                            }
                    Ot(r, o, p.children, a),
                    o = o.child
                }
                return o;
            case 9:
                return p = o.type, d = o.pendingProps.children, co(o, a), p = tn(p), d = d(p), o.flags |= 1, Ot(r, o, d, a), o.child;
            case 14:
                return d = o.type, p = mn(d, o.pendingProps), p = mn(d.type, p), gy(r, o, d, p, a);
            case 15:
                return yy(r, o, o.type, o.pendingProps, a);
            case 17:
                return d = o.type, p = o.pendingProps, p = o.elementType === d ? p : mn(d, p), Pl(r, o), o.tag = 1, Dt(d) ? (r = !0, cl(o)) : r = !1, co(o, a), ly(o, d, p), _d(o, d, p, a), Ld(null, o, d, !0, r, a);
            case 19:
                return Ty(r, o, a);
            case 22:
                return vy(r, o, a)
        }
        throw Error(n(156, o.tag))
    };

    function Qy(r, o) {
        return Pm(r, o)
    }

    function VT(r, o, a, d) {
        this.tag = r, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = o, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = d, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function sn(r, o, a, d) {
        return new VT(r, o, a, d)
    }

    function ef(r) {
        return r = r.prototype, !(!r || !r.isReactComponent)
    }

    function UT(r) {
        if (typeof r == "function") return ef(r) ? 1 : 0;
        if (r != null) {
            if (r = r.$$typeof, r === de) return 11;
            if (r === Ce) return 14
        }
        return 2
    }

    function Ar(r, o) {
        var a = r.alternate;
        return a === null ? (a = sn(r.tag, o, r.key, r.mode), a.elementType = r.elementType, a.type = r.type, a.stateNode = r.stateNode, a.alternate = r, r.alternate = a) : (a.pendingProps = o, a.type = r.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = r.flags & 14680064, a.childLanes = r.childLanes, a.lanes = r.lanes, a.child = r.child, a.memoizedProps = r.memoizedProps, a.memoizedState = r.memoizedState, a.updateQueue = r.updateQueue, o = r.dependencies, a.dependencies = o === null ? null : {
            lanes: o.lanes,
            firstContext: o.firstContext
        }, a.sibling = r.sibling, a.index = r.index, a.ref = r.ref, a
    }

    function Bl(r, o, a, d, p, g) {
        var E = 2;
        if (d = r, typeof r == "function") ef(r) && (E = 1);
        else if (typeof r == "string") E = 5;
        else e: switch (r) {
            case U:
                return gs(a.children, p, g, o);
            case j:
                E = 8, p |= 8;
                break;
            case G:
                return r = sn(12, a, o, p | 2), r.elementType = G, r.lanes = g, r;
            case ge:
                return r = sn(13, a, o, p), r.elementType = ge, r.lanes = g, r;
            case le:
                return r = sn(19, a, o, p), r.elementType = le, r.lanes = g, r;
            case Z:
                return Vl(a, p, g, o);
            default:
                if (typeof r == "object" && r !== null) switch (r.$$typeof) {
                    case J:
                        E = 10;
                        break e;
                    case ee:
                        E = 9;
                        break e;
                    case de:
                        E = 11;
                        break e;
                    case Ce:
                        E = 14;
                        break e;
                    case te:
                        E = 16, d = null;
                        break e
                }
                throw Error(n(130, r == null ? r : typeof r, ""))
        }
        return o = sn(E, a, o, p), o.elementType = r, o.type = d, o.lanes = g, o
    }

    function gs(r, o, a, d) {
        return r = sn(7, r, d, o), r.lanes = a, r
    }

    function Vl(r, o, a, d) {
        return r = sn(22, r, d, o), r.elementType = Z, r.lanes = a, r.stateNode = {
            isHidden: !1
        }, r
    }

    function tf(r, o, a) {
        return r = sn(6, r, null, o), r.lanes = a, r
    }

    function nf(r, o, a) {
        return o = sn(4, r.children !== null ? r.children : [], r.key, o), o.lanes = a, o.stateNode = {
            containerInfo: r.containerInfo,
            pendingChildren: null,
            implementation: r.implementation
        }, o
    }

    function zT(r, o, a, d, p) {
        this.tag = o, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ac(0), this.expirationTimes = Ac(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ac(0), this.identifierPrefix = d, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null
    }

    function rf(r, o, a, d, p, g, E, A, O) {
        return r = new zT(r, o, a, A, O), o === 1 ? (o = 1, g === !0 && (o |= 8)) : o = 0, g = sn(3, null, null, o), r.current = g, g.stateNode = r, g.memoizedState = {
            element: d,
            isDehydrated: a,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, gd(g), r
    }

    function $T(r, o, a) {
        var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: B,
            key: d == null ? null : "" + d,
            children: r,
            containerInfo: o,
            implementation: a
        }
    }

    function Yy(r) {
        if (!r) return xr;
        r = r._reactInternals;
        e: {
            if (ss(r) !== r || r.tag !== 1) throw Error(n(170));
            var o = r;do {
                switch (o.tag) {
                    case 3:
                        o = o.stateNode.context;
                        break e;
                    case 1:
                        if (Dt(o.type)) {
                            o = o.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                o = o.return
            } while (o !== null);
            throw Error(n(171))
        }
        if (r.tag === 1) {
            var a = r.type;
            if (Dt(a)) return Eg(r, a, o)
        }
        return o
    }

    function Xy(r, o, a, d, p, g, E, A, O) {
        return r = rf(a, d, !0, r, p, g, E, A, O), r.context = Yy(null), a = r.current, d = Nt(), p = Rr(a), g = Yn(d, p), g.callback = o ? ? null, Cr(a, g, p), r.current.lanes = p, li(r, p, d), Ft(r, d), r
    }

    function Ul(r, o, a, d) {
        var p = o.current,
            g = Nt(),
            E = Rr(p);
        return a = Yy(a), o.context === null ? o.context = a : o.pendingContext = a, o = Yn(g, E), o.payload = {
            element: r
        }, d = d === void 0 ? null : d, d !== null && (o.callback = d), r = Cr(p, o, E), r !== null && (vn(r, p, E, g), vl(r, p, E)), E
    }

    function zl(r) {
        if (r = r.current, !r.child) return null;
        switch (r.child.tag) {
            case 5:
                return r.child.stateNode;
            default:
                return r.child.stateNode
        }
    }

    function Jy(r, o) {
        if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
            var a = r.retryLane;
            r.retryLane = a !== 0 && a < o ? a : o
        }
    }

    function sf(r, o) {
        Jy(r, o), (r = r.alternate) && Jy(r, o)
    }

    function WT() {
        return null
    }
    var Zy = typeof reportError == "function" ? reportError : function(r) {
        console.error(r)
    };

    function of (r) {
        this._internalRoot = r
    }
    $l.prototype.render = of .prototype.render = function(r) {
        var o = this._internalRoot;
        if (o === null) throw Error(n(409));
        Ul(r, o, null, null)
    }, $l.prototype.unmount = of .prototype.unmount = function() {
        var r = this._internalRoot;
        if (r !== null) {
            this._internalRoot = null;
            var o = r.containerInfo;
            hs(function() {
                Ul(null, r, null, null)
            }), o[Hn] = null
        }
    };

    function $l(r) {
        this._internalRoot = r
    }
    $l.prototype.unstable_scheduleHydration = function(r) {
        if (r) {
            var o = jm();
            r = {
                blockedOn: null,
                target: r,
                priority: o
            };
            for (var a = 0; a < mr.length && o !== 0 && o < mr[a].priority; a++);
            mr.splice(a, 0, r), a === 0 && Bm(r)
        }
    };

    function af(r) {
        return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11)
    }

    function Wl(r) {
        return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "))
    }

    function ev() {}

    function HT(r, o, a, d, p) {
        if (p) {
            if (typeof d == "function") {
                var g = d;
                d = function() {
                    var V = zl(E);
                    g.call(V)
                }
            }
            var E = Xy(o, d, r, 0, null, !1, !1, "", ev);
            return r._reactRootContainer = E, r[Hn] = E.current, bi(r.nodeType === 8 ? r.parentNode : r), hs(), E
        }
        for (; p = r.lastChild;) r.removeChild(p);
        if (typeof d == "function") {
            var A = d;
            d = function() {
                var V = zl(O);
                A.call(V)
            }
        }
        var O = rf(r, 0, !1, null, null, !1, !1, "", ev);
        return r._reactRootContainer = O, r[Hn] = O.current, bi(r.nodeType === 8 ? r.parentNode : r), hs(function() {
            Ul(o, O, a, d)
        }), O
    }

    function Hl(r, o, a, d, p) {
        var g = a._reactRootContainer;
        if (g) {
            var E = g;
            if (typeof p == "function") {
                var A = p;
                p = function() {
                    var O = zl(E);
                    A.call(O)
                }
            }
            Ul(o, E, r, p)
        } else E = HT(a, o, r, p, d);
        return zl(E)
    }
    Lm = function(r) {
        switch (r.tag) {
            case 3:
                var o = r.stateNode;
                if (o.current.memoizedState.isDehydrated) {
                    var a = ai(o.pendingLanes);
                    a !== 0 && (_c(o, a | 1), Ft(o, Je()), (De & 6) === 0 && (go = Je() + 500, Sr()))
                }
                break;
            case 13:
                hs(function() {
                    var d = Qn(r, 1);
                    if (d !== null) {
                        var p = Nt();
                        vn(d, r, 1, p)
                    }
                }), sf(r, 1)
        }
    }, Oc = function(r) {
        if (r.tag === 13) {
            var o = Qn(r, 134217728);
            if (o !== null) {
                var a = Nt();
                vn(o, r, 134217728, a)
            }
            sf(r, 134217728)
        }
    }, Dm = function(r) {
        if (r.tag === 13) {
            var o = Rr(r),
                a = Qn(r, o);
            if (a !== null) {
                var d = Nt();
                vn(a, r, o, d)
            }
            sf(r, o)
        }
    }, jm = function() {
        return Fe
    }, Im = function(r, o) {
        var a = Fe;
        try {
            return Fe = r, o()
        } finally {
            Fe = a
        }
    }, Cc = function(r, o, a) {
        switch (o) {
            case "input":
                if (Wn(r, a), o = a.name, a.type === "radio" && o != null) {
                    for (a = r; a.parentNode;) a = a.parentNode;
                    for (a = a.querySelectorAll("input[name=" + JSON.stringify("" + o) + '][type="radio"]'), o = 0; o < a.length; o++) {
                        var d = a[o];
                        if (d !== r && d.form === r.form) {
                            var p = ll(d);
                            if (!p) throw Error(n(90));
                            Oe(d), Wn(d, p)
                        }
                    }
                }
                break;
            case "textarea":
                fm(r, a);
                break;
            case "select":
                o = a.value, o != null && qs(r, !!a.multiple, o, !1)
        }
    }, Sm = Xd, bm = hs;
    var qT = {
            usingClientEntryPoint: !1,
            Events: [Ti, no, ll, wm, xm, Xd]
        },
        Bi = {
            findFiberByHostInstance: os,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        KT = {
            bundleType: Bi.bundleType,
            version: Bi.version,
            rendererPackageName: Bi.rendererPackageName,
            rendererConfig: Bi.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: _.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(r) {
                return r = km(r), r === null ? null : r.stateNode
            },
            findFiberByHostInstance: Bi.findFiberByHostInstance || WT,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ql.isDisabled && ql.supportsFiber) try {
            $a = ql.inject(KT), Rn = ql
        } catch {}
    }
    return Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qT, Bt.createPortal = function(r, o) {
        var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!af(o)) throw Error(n(200));
        return $T(r, o, null, a)
    }, Bt.createRoot = function(r, o) {
        if (!af(r)) throw Error(n(299));
        var a = !1,
            d = "",
            p = Zy;
        return o != null && (o.unstable_strictMode === !0 && (a = !0), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onRecoverableError !== void 0 && (p = o.onRecoverableError)), o = rf(r, 1, !1, null, null, a, !1, d, p), r[Hn] = o.current, bi(r.nodeType === 8 ? r.parentNode : r), new of (o)
    }, Bt.findDOMNode = function(r) {
        if (r == null) return null;
        if (r.nodeType === 1) return r;
        var o = r._reactInternals;
        if (o === void 0) throw typeof r.render == "function" ? Error(n(188)) : (r = Object.keys(r).join(","), Error(n(268, r)));
        return r = km(o), r = r === null ? null : r.stateNode, r
    }, Bt.flushSync = function(r) {
        return hs(r)
    }, Bt.hydrate = function(r, o, a) {
        if (!Wl(o)) throw Error(n(200));
        return Hl(null, r, o, !0, a)
    }, Bt.hydrateRoot = function(r, o, a) {
        if (!af(r)) throw Error(n(405));
        var d = a != null && a.hydratedSources || null,
            p = !1,
            g = "",
            E = Zy;
        if (a != null && (a.unstable_strictMode === !0 && (p = !0), a.identifierPrefix !== void 0 && (g = a.identifierPrefix), a.onRecoverableError !== void 0 && (E = a.onRecoverableError)), o = Xy(o, null, r, 1, a ? ? null, p, !1, g, E), r[Hn] = o.current, bi(r), d)
            for (r = 0; r < d.length; r++) a = d[r], p = a._getVersion, p = p(a._source), o.mutableSourceEagerHydrationData == null ? o.mutableSourceEagerHydrationData = [a, p] : o.mutableSourceEagerHydrationData.push(a, p);
        return new $l(o)
    }, Bt.render = function(r, o, a) {
        if (!Wl(o)) throw Error(n(200));
        return Hl(null, r, o, !1, a)
    }, Bt.unmountComponentAtNode = function(r) {
        if (!Wl(r)) throw Error(n(40));
        return r._reactRootContainer ? (hs(function() {
            Hl(null, null, r, !1, function() {
                r._reactRootContainer = null, r[Hn] = null
            })
        }), !0) : !1
    }, Bt.unstable_batchedUpdates = Xd, Bt.unstable_renderSubtreeIntoContainer = function(r, o, a, d) {
        if (!Wl(a)) throw Error(n(200));
        if (r == null || r._reactInternals === void 0) throw Error(n(38));
        return Hl(r, o, a, !1, d)
    }, Bt.version = "18.3.1-next-f1338f8080-20240426", Bt
}
var uv;

function wx() {
    if (uv) return df.exports;
    uv = 1;

    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (t) {
            console.error(t)
        }
    }
    return e(), df.exports = tk(), df.exports
}
var cv;

function nk() {
    if (cv) return Gl;
    cv = 1;
    var e = wx();
    return Gl.createRoot = e.createRoot, Gl.hydrateRoot = e.hydrateRoot, Gl
}
var rk = nk();
const sk = Jh(rk),
    ok = 20,
    ik = 1e6,
    rr = {
        ADD_TOAST: "ADD_TOAST",
        UPDATE_TOAST: "UPDATE_TOAST",
        DISMISS_TOAST: "DISMISS_TOAST",
        REMOVE_TOAST: "REMOVE_TOAST"
    };
let pf = 0;

function ak() {
    return pf = (pf + 1) % Number.MAX_VALUE, pf.toString()
}
const mf = new Map,
    dv = e => {
        if (mf.has(e)) return;
        const t = setTimeout(() => {
            mf.delete(e), ta({
                type: rr.REMOVE_TOAST,
                toastId: e
            })
        }, ik);
        mf.set(e, t)
    },
    lk = (e, t) => {
        switch (t.type) {
            case rr.ADD_TOAST:
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, ok)
                };
            case rr.UPDATE_TOAST:
                return { ...e,
                    toasts: e.toasts.map(n => n.id === t.toast.id ? { ...n,
                        ...t.toast
                    } : n)
                };
            case rr.DISMISS_TOAST:
                {
                    const {
                        toastId: n
                    } = t;
                    return n ? dv(n) : e.toasts.forEach(s => {
                        dv(s.id)
                    }),
                    { ...e,
                        toasts: e.toasts.map(s => s.id === n || n === void 0 ? { ...s,
                            open: !1
                        } : s)
                    }
                }
            case rr.REMOVE_TOAST:
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(n => n.id !== t.toastId)
                }
        }
    },
    du = [];
let fu = {
    toasts: []
};

function ta(e) {
    fu = lk(fu, e), du.forEach(t => {
        t(fu)
    })
}

function uk({ ...e
}) {
    const t = ak(),
        n = i => ta({
            type: rr.UPDATE_TOAST,
            toast: { ...i,
                id: t
            }
        }),
        s = () => ta({
            type: rr.DISMISS_TOAST,
            toastId: t
        });
    return ta({
        type: rr.ADD_TOAST,
        toast: { ...e,
            id: t,
            open: !0,
            onOpenChange: i => {
                i || s()
            }
        }
    }), {
        id: t,
        dismiss: s,
        update: n
    }
}

function ck() {
    const [e, t] = x.useState(fu);
    return x.useEffect(() => (du.push(t), () => {
        const n = du.indexOf(t);
        n > -1 && du.splice(n, 1)
    }), [e]), { ...e,
        toast: uk,
        dismiss: n => ta({
            type: rr.DISMISS_TOAST,
            toastId: n
        })
    }
}

function xx(e) {
    var t, n, s = "";
    if (typeof e == "string" || typeof e == "number") s += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++) e[t] && (n = xx(e[t])) && (s && (s += " "), s += n)
        } else
            for (n in e) e[n] && (s && (s += " "), s += n);
    return s
}

function Sx() {
    for (var e, t, n = 0, s = "", i = arguments.length; n < i; n++)(e = arguments[n]) && (t = xx(e)) && (s && (s += " "), s += t);
    return s
}
const fv = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    hv = Sx,
    ep = (e, t) => n => {
        var s;
        if ((t == null ? void 0 : t.variants) == null) return hv(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: i,
            defaultVariants: l
        } = t, u = Object.keys(i).map(h => {
            const m = n == null ? void 0 : n[h],
                y = l == null ? void 0 : l[h];
            if (m === null) return null;
            const w = fv(m) || fv(y);
            return i[h][w]
        }), c = n && Object.entries(n).reduce((h, m) => {
            let [y, w] = m;
            return w === void 0 || (h[y] = w), h
        }, {}), f = t == null || (s = t.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((h, m) => {
            let {
                class: y,
                className: w,
                ...C
            } = m;
            return Object.entries(C).every(b => {
                let [v, S] = b;
                return Array.isArray(S) ? S.includes({ ...l,
                    ...c
                }[v]) : { ...l,
                    ...c
                }[v] === S
            }) ? [...h, y, w] : h
        }, []);
        return hv(e, u, f, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dk = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    bx = (...e) => e.filter((t, n, s) => !!t && t.trim() !== "" && s.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var fk = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hk = x.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: s,
    className: i = "",
    children: l,
    iconNode: u,
    ...c
}, f) => x.createElement("svg", {
    ref: f,
    ...fk,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: s ? Number(n) * 24 / Number(t) : n,
    className: bx("lucide", i),
    ...c
}, [...u.map(([h, m]) => x.createElement(h, m)), ...Array.isArray(l) ? l : [l]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _t = (e, t) => {
    const n = x.forwardRef(({
        className: s,
        ...i
    }, l) => x.createElement(hk, {
        ref: l,
        iconNode: t,
        className: bx(`lucide-${dk(e)}`, s),
        ...i
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pk = [
        ["path", {
            d: "M10.268 21a2 2 0 0 0 3.464 0",
            key: "vwvbt9"
        }],
        ["path", {
            d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",
            key: "178tsu"
        }],
        ["path", {
            d: "m2 2 20 20",
            key: "1ooewy"
        }],
        ["path", {
            d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",
            key: "1hqiys"
        }]
    ],
    mk = _t("BellOff", pk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gk = [
        ["path", {
            d: "M10.268 21a2 2 0 0 0 3.464 0",
            key: "vwvbt9"
        }],
        ["path", {
            d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
            key: "11g9vi"
        }]
    ],
    Cx = _t("Bell", gk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yk = [
        ["path", {
            d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
            key: "1b4qmf"
        }],
        ["path", {
            d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
            key: "i71pzd"
        }],
        ["path", {
            d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
            key: "10jefs"
        }],
        ["path", {
            d: "M10 6h4",
            key: "1itunk"
        }],
        ["path", {
            d: "M10 10h4",
            key: "tcdvrf"
        }],
        ["path", {
            d: "M10 14h4",
            key: "kelpxr"
        }],
        ["path", {
            d: "M10 18h4",
            key: "1ulq68"
        }]
    ],
    vk = _t("Building2", yk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wk = [
        ["path", {
            d: "M8 2v4",
            key: "1cmpym"
        }],
        ["path", {
            d: "M16 2v4",
            key: "4m81vk"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }],
        ["path", {
            d: "M3 10h18",
            key: "8toen8"
        }],
        ["path", {
            d: "M8 14h.01",
            key: "6423bh"
        }],
        ["path", {
            d: "M12 14h.01",
            key: "1etili"
        }],
        ["path", {
            d: "M16 14h.01",
            key: "1gbofw"
        }],
        ["path", {
            d: "M8 18h.01",
            key: "lrp35t"
        }],
        ["path", {
            d: "M12 18h.01",
            key: "mhygvu"
        }],
        ["path", {
            d: "M16 18h.01",
            key: "kzsmim"
        }]
    ],
    xk = _t("CalendarDays", wk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sk = [
        ["path", {
            d: "M8 2v4",
            key: "1cmpym"
        }],
        ["path", {
            d: "M16 2v4",
            key: "4m81vk"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }],
        ["path", {
            d: "M3 10h18",
            key: "8toen8"
        }]
    ],
    bk = _t("Calendar", Sk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ck = [
        ["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]
    ],
    Ek = _t("Check", Ck);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tk = [
        ["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]
    ],
    Ex = _t("ChevronDown", Tk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kk = [
        ["path", {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }]
    ],
    Rk = _t("ChevronUp", kk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pk = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["polyline", {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }]
    ],
    Au = _t("Clock", Pk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ak = [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ],
    Tx = _t("MapPin", Ak);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _k = [
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }],
        ["path", {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }]
    ],
    Ok = _t("Search", _k);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nk = [
        ["rect", {
            width: "20",
            height: "8",
            x: "2",
            y: "2",
            rx: "2",
            ry: "2",
            key: "ngkwjq"
        }],
        ["rect", {
            width: "20",
            height: "8",
            x: "2",
            y: "14",
            rx: "2",
            ry: "2",
            key: "iecqi9"
        }],
        ["line", {
            x1: "6",
            x2: "6.01",
            y1: "6",
            y2: "6",
            key: "16zg32"
        }],
        ["line", {
            x1: "6",
            x2: "6.01",
            y1: "18",
            y2: "18",
            key: "nzw8ys"
        }]
    ],
    Mk = _t("Server", Nk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lk = [
        ["path", {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }]
    ],
    Dk = _t("Shield", Lk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jk = [
        ["line", {
            x1: "21",
            x2: "14",
            y1: "4",
            y2: "4",
            key: "obuewd"
        }],
        ["line", {
            x1: "10",
            x2: "3",
            y1: "4",
            y2: "4",
            key: "1q6298"
        }],
        ["line", {
            x1: "21",
            x2: "12",
            y1: "12",
            y2: "12",
            key: "1iu8h1"
        }],
        ["line", {
            x1: "8",
            x2: "3",
            y1: "12",
            y2: "12",
            key: "ntss68"
        }],
        ["line", {
            x1: "21",
            x2: "16",
            y1: "20",
            y2: "20",
            key: "14d8ph"
        }],
        ["line", {
            x1: "12",
            x2: "3",
            y1: "20",
            y2: "20",
            key: "m0wm8r"
        }],
        ["line", {
            x1: "14",
            x2: "14",
            y1: "2",
            y2: "6",
            key: "14e1ph"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "10",
            y2: "14",
            key: "1i6ji0"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "18",
            y2: "22",
            key: "1lctlv"
        }]
    ],
    Ik = _t("SlidersHorizontal", jk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fk = [
        ["path", {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }],
        ["path", {
            d: "M12 9v4",
            key: "juzpu7"
        }],
        ["path", {
            d: "M12 17h.01",
            key: "p32p05"
        }]
    ],
    Bk = _t("TriangleAlert", Fk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vk = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    bs = _t("X", Vk),
    Uk = (e, t) => {
        const n = new Array(e.length + t.length);
        for (let s = 0; s < e.length; s++) n[s] = e[s];
        for (let s = 0; s < t.length; s++) n[e.length + s] = t[s];
        return n
    },
    zk = (e, t) => ({
        classGroupId: e,
        validator: t
    }),
    kx = (e = new Map, t = null, n) => ({
        nextPart: e,
        validators: t,
        classGroupId: n
    }),
    _u = "-",
    pv = [],
    $k = "arbitrary..",
    Wk = e => {
        const t = qk(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: s
            } = e;
        return {
            getClassGroupId: u => {
                if (u.startsWith("[") && u.endsWith("]")) return Hk(u);
                const c = u.split(_u),
                    f = c[0] === "" && c.length > 1 ? 1 : 0;
                return Rx(c, f, t)
            },
            getConflictingClassGroupIds: (u, c) => {
                if (c) {
                    const f = s[u],
                        h = n[u];
                    return f ? h ? Uk(h, f) : f : h || pv
                }
                return n[u] || pv
            }
        }
    },
    Rx = (e, t, n) => {
        if (e.length - t === 0) return n.classGroupId;
        const i = e[t],
            l = n.nextPart.get(i);
        if (l) {
            const h = Rx(e, t + 1, l);
            if (h) return h
        }
        const u = n.validators;
        if (u === null) return;
        const c = t === 0 ? e.join(_u) : e.slice(t).join(_u),
            f = u.length;
        for (let h = 0; h < f; h++) {
            const m = u[h];
            if (m.validator(c)) return m.classGroupId
        }
    },
    Hk = e => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
        const t = e.slice(1, -1),
            n = t.indexOf(":"),
            s = t.slice(0, n);
        return s ? $k + s : void 0
    })(),
    qk = e => {
        const {
            theme: t,
            classGroups: n
        } = e;
        return Kk(n, t)
    },
    Kk = (e, t) => {
        const n = kx();
        for (const s in e) {
            const i = e[s];
            tp(i, n, s, t)
        }
        return n
    },
    tp = (e, t, n, s) => {
        const i = e.length;
        for (let l = 0; l < i; l++) {
            const u = e[l];
            Gk(u, t, n, s)
        }
    },
    Gk = (e, t, n, s) => {
        if (typeof e == "string") {
            Qk(e, t, n);
            return
        }
        if (typeof e == "function") {
            Yk(e, t, n, s);
            return
        }
        Xk(e, t, n, s)
    },
    Qk = (e, t, n) => {
        const s = e === "" ? t : Px(t, e);
        s.classGroupId = n
    },
    Yk = (e, t, n, s) => {
        if (Jk(e)) {
            tp(e(s), t, n, s);
            return
        }
        t.validators === null && (t.validators = []), t.validators.push(zk(n, e))
    },
    Xk = (e, t, n, s) => {
        const i = Object.entries(e),
            l = i.length;
        for (let u = 0; u < l; u++) {
            const [c, f] = i[u];
            tp(f, Px(t, c), n, s)
        }
    },
    Px = (e, t) => {
        let n = e;
        const s = t.split(_u),
            i = s.length;
        for (let l = 0; l < i; l++) {
            const u = s[l];
            let c = n.nextPart.get(u);
            c || (c = kx(), n.nextPart.set(u, c)), n = c
        }
        return n
    },
    Jk = e => "isThemeGetter" in e && e.isThemeGetter === !0,
    Zk = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            n = Object.create(null),
            s = Object.create(null);
        const i = (l, u) => {
            n[l] = u, t++, t > e && (t = 0, s = n, n = Object.create(null))
        };
        return {
            get(l) {
                let u = n[l];
                if (u !== void 0) return u;
                if ((u = s[l]) !== void 0) return i(l, u), u
            },
            set(l, u) {
                l in n ? n[l] = u : i(l, u)
            }
        }
    },
    Xf = "!",
    mv = ":",
    eR = [],
    gv = (e, t, n, s, i) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: n,
        maybePostfixModifierPosition: s,
        isExternal: i
    }),
    tR = e => {
        const {
            prefix: t,
            experimentalParseClassName: n
        } = e;
        let s = i => {
            const l = [];
            let u = 0,
                c = 0,
                f = 0,
                h;
            const m = i.length;
            for (let v = 0; v < m; v++) {
                const S = i[v];
                if (u === 0 && c === 0) {
                    if (S === mv) {
                        l.push(i.slice(f, v)), f = v + 1;
                        continue
                    }
                    if (S === "/") {
                        h = v;
                        continue
                    }
                }
                S === "[" ? u++ : S === "]" ? u-- : S === "(" ? c++ : S === ")" && c--
            }
            const y = l.length === 0 ? i : i.slice(f);
            let w = y,
                C = !1;
            y.endsWith(Xf) ? (w = y.slice(0, -1), C = !0) : y.startsWith(Xf) && (w = y.slice(1), C = !0);
            const b = h && h > f ? h - f : void 0;
            return gv(l, C, w, b)
        };
        if (t) {
            const i = t + mv,
                l = s;
            s = u => u.startsWith(i) ? l(u.slice(i.length)) : gv(eR, !1, u, void 0, !0)
        }
        if (n) {
            const i = s;
            s = l => n({
                className: l,
                parseClassName: i
            })
        }
        return s
    },
    nR = e => {
        const t = new Map;
        return e.orderSensitiveModifiers.forEach((n, s) => {
            t.set(n, 1e6 + s)
        }), n => {
            const s = [];
            let i = [];
            for (let l = 0; l < n.length; l++) {
                const u = n[l],
                    c = u[0] === "[",
                    f = t.has(u);
                c || f ? (i.length > 0 && (i.sort(), s.push(...i), i = []), s.push(u)) : i.push(u)
            }
            return i.length > 0 && (i.sort(), s.push(...i)), s
        }
    },
    rR = e => ({
        cache: Zk(e.cacheSize),
        parseClassName: tR(e),
        sortModifiers: nR(e),
        ...Wk(e)
    }),
    sR = /\s+/,
    oR = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: s,
            getConflictingClassGroupIds: i,
            sortModifiers: l
        } = t, u = [], c = e.trim().split(sR);
        let f = "";
        for (let h = c.length - 1; h >= 0; h -= 1) {
            const m = c[h],
                {
                    isExternal: y,
                    modifiers: w,
                    hasImportantModifier: C,
                    baseClassName: b,
                    maybePostfixModifierPosition: v
                } = n(m);
            if (y) {
                f = m + (f.length > 0 ? " " + f : f);
                continue
            }
            let S = !!v,
                k = s(S ? b.substring(0, v) : b);
            if (!k) {
                if (!S) {
                    f = m + (f.length > 0 ? " " + f : f);
                    continue
                }
                if (k = s(b), !k) {
                    f = m + (f.length > 0 ? " " + f : f);
                    continue
                }
                S = !1
            }
            const P = w.length === 0 ? "" : w.length === 1 ? w[0] : l(w).join(":"),
                R = C ? P + Xf : P,
                _ = R + k;
            if (u.indexOf(_) > -1) continue;
            u.push(_);
            const N = i(k, S);
            for (let B = 0; B < N.length; ++B) {
                const U = N[B];
                u.push(R + U)
            }
            f = m + (f.length > 0 ? " " + f : f)
        }
        return f
    },
    iR = (...e) => {
        let t = 0,
            n, s, i = "";
        for (; t < e.length;)(n = e[t++]) && (s = Ax(n)) && (i && (i += " "), i += s);
        return i
    },
    Ax = e => {
        if (typeof e == "string") return e;
        let t, n = "";
        for (let s = 0; s < e.length; s++) e[s] && (t = Ax(e[s])) && (n && (n += " "), n += t);
        return n
    },
    aR = (e, ...t) => {
        let n, s, i, l;
        const u = f => {
                const h = t.reduce((m, y) => y(m), e());
                return n = rR(h), s = n.cache.get, i = n.cache.set, l = c, c(f)
            },
            c = f => {
                const h = s(f);
                if (h) return h;
                const m = oR(f, n);
                return i(f, m), m
            };
        return l = u, (...f) => l(iR(...f))
    },
    lR = [],
    ct = e => {
        const t = n => n[e] || lR;
        return t.isThemeGetter = !0, t
    },
    _x = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    Ox = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    uR = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    cR = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    dR = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    fR = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    hR = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    pR = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Or = e => uR.test(e),
    Pe = e => !!e && !Number.isNaN(Number(e)),
    Nr = e => !!e && Number.isInteger(Number(e)),
    gf = e => e.endsWith("%") && Pe(e.slice(0, -1)),
    Zn = e => cR.test(e),
    Nx = () => !0,
    mR = e => dR.test(e) && !fR.test(e),
    np = () => !1,
    gR = e => hR.test(e),
    yR = e => pR.test(e),
    vR = e => !ae(e) && !ue(e),
    wR = e => Zr(e, Dx, np),
    ae = e => _x.test(e),
    ys = e => Zr(e, jx, mR),
    yv = e => Zr(e, RR, Pe),
    xR = e => Zr(e, Fx, Nx),
    SR = e => Zr(e, Ix, np),
    vv = e => Zr(e, Mx, np),
    bR = e => Zr(e, Lx, yR),
    Ql = e => Zr(e, Bx, gR),
    ue = e => Ox.test(e),
    Ui = e => $s(e, jx),
    CR = e => $s(e, Ix),
    wv = e => $s(e, Mx),
    ER = e => $s(e, Dx),
    TR = e => $s(e, Lx),
    Yl = e => $s(e, Bx, !0),
    kR = e => $s(e, Fx, !0),
    Zr = (e, t, n) => {
        const s = _x.exec(e);
        return s ? s[1] ? t(s[1]) : n(s[2]) : !1
    },
    $s = (e, t, n = !1) => {
        const s = Ox.exec(e);
        return s ? s[1] ? t(s[1]) : n : !1
    },
    Mx = e => e === "position" || e === "percentage",
    Lx = e => e === "image" || e === "url",
    Dx = e => e === "length" || e === "size" || e === "bg-size",
    jx = e => e === "length",
    RR = e => e === "number",
    Ix = e => e === "family-name",
    Fx = e => e === "number" || e === "weight",
    Bx = e => e === "shadow",
    PR = () => {
        const e = ct("color"),
            t = ct("font"),
            n = ct("text"),
            s = ct("font-weight"),
            i = ct("tracking"),
            l = ct("leading"),
            u = ct("breakpoint"),
            c = ct("container"),
            f = ct("spacing"),
            h = ct("radius"),
            m = ct("shadow"),
            y = ct("inset-shadow"),
            w = ct("text-shadow"),
            C = ct("drop-shadow"),
            b = ct("blur"),
            v = ct("perspective"),
            S = ct("aspect"),
            k = ct("ease"),
            P = ct("animate"),
            R = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            _ = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            N = () => [..._(), ue, ae],
            B = () => ["auto", "hidden", "clip", "visible", "scroll"],
            U = () => ["auto", "contain", "none"],
            j = () => [ue, ae, f],
            G = () => [Or, "full", "auto", ...j()],
            J = () => [Nr, "none", "subgrid", ue, ae],
            ee = () => ["auto", {
                span: ["full", Nr, ue, ae]
            }, Nr, ue, ae],
            de = () => [Nr, "auto", ue, ae],
            ge = () => ["auto", "min", "max", "fr", ue, ae],
            le = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            Ce = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            te = () => ["auto", ...j()],
            Z = () => [Or, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()],
            $ = () => [Or, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...j()],
            X = () => [Or, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...j()],
            W = () => [e, ue, ae],
            D = () => [..._(), wv, vv, {
                position: [ue, ae]
            }],
            H = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            we = () => ["auto", "cover", "contain", ER, wR, {
                size: [ue, ae]
            }],
            ve = () => [gf, Ui, ys],
            pe = () => ["", "none", "full", h, ue, ae],
            ye = () => ["", Pe, Ui, ys],
            ne = () => ["solid", "dashed", "dotted", "double"],
            me = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            fe = () => [Pe, gf, wv, vv],
            Re = () => ["", "none", b, ue, ae],
            Ae = () => ["none", Pe, ue, ae],
            Oe = () => ["none", Pe, ue, ae],
            Ge = () => [Pe, ue, ae],
            at = () => [Or, "full", ...j()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [Zn],
                breakpoint: [Zn],
                color: [Nx],
                container: [Zn],
                "drop-shadow": [Zn],
                ease: ["in", "out", "in-out"],
                font: [vR],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [Zn],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [Zn],
                shadow: [Zn],
                spacing: ["px", Pe],
                text: [Zn],
                "text-shadow": [Zn],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", Or, ae, ue, S]
                }],
                container: ["container"],
                columns: [{
                    columns: [Pe, ae, ue, c]
                }],
                "break-after": [{
                    "break-after": R()
                }],
                "break-before": [{
                    "break-before": R()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: N()
                }],
                overflow: [{
                    overflow: B()
                }],
                "overflow-x": [{
                    "overflow-x": B()
                }],
                "overflow-y": [{
                    "overflow-y": B()
                }],
                overscroll: [{
                    overscroll: U()
                }],
                "overscroll-x": [{
                    "overscroll-x": U()
                }],
                "overscroll-y": [{
                    "overscroll-y": U()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: G()
                }],
                "inset-x": [{
                    "inset-x": G()
                }],
                "inset-y": [{
                    "inset-y": G()
                }],
                start: [{
                    "inset-s": G(),
                    start: G()
                }],
                end: [{
                    "inset-e": G(),
                    end: G()
                }],
                "inset-bs": [{
                    "inset-bs": G()
                }],
                "inset-be": [{
                    "inset-be": G()
                }],
                top: [{
                    top: G()
                }],
                right: [{
                    right: G()
                }],
                bottom: [{
                    bottom: G()
                }],
                left: [{
                    left: G()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [Nr, "auto", ue, ae]
                }],
                basis: [{
                    basis: [Or, "full", "auto", c, ...j()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [Pe, Or, "auto", "initial", "none", ae]
                }],
                grow: [{
                    grow: ["", Pe, ue, ae]
                }],
                shrink: [{
                    shrink: ["", Pe, ue, ae]
                }],
                order: [{
                    order: [Nr, "first", "last", "none", ue, ae]
                }],
                "grid-cols": [{
                    "grid-cols": J()
                }],
                "col-start-end": [{
                    col: ee()
                }],
                "col-start": [{
                    "col-start": de()
                }],
                "col-end": [{
                    "col-end": de()
                }],
                "grid-rows": [{
                    "grid-rows": J()
                }],
                "row-start-end": [{
                    row: ee()
                }],
                "row-start": [{
                    "row-start": de()
                }],
                "row-end": [{
                    "row-end": de()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ge()
                }],
                "auto-rows": [{
                    "auto-rows": ge()
                }],
                gap: [{
                    gap: j()
                }],
                "gap-x": [{
                    "gap-x": j()
                }],
                "gap-y": [{
                    "gap-y": j()
                }],
                "justify-content": [{
                    justify: [...le(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...Ce(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...Ce()]
                }],
                "align-content": [{
                    content: ["normal", ...le()]
                }],
                "align-items": [{
                    items: [...Ce(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...Ce(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": le()
                }],
                "place-items": [{
                    "place-items": [...Ce(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...Ce()]
                }],
                p: [{
                    p: j()
                }],
                px: [{
                    px: j()
                }],
                py: [{
                    py: j()
                }],
                ps: [{
                    ps: j()
                }],
                pe: [{
                    pe: j()
                }],
                pbs: [{
                    pbs: j()
                }],
                pbe: [{
                    pbe: j()
                }],
                pt: [{
                    pt: j()
                }],
                pr: [{
                    pr: j()
                }],
                pb: [{
                    pb: j()
                }],
                pl: [{
                    pl: j()
                }],
                m: [{
                    m: te()
                }],
                mx: [{
                    mx: te()
                }],
                my: [{
                    my: te()
                }],
                ms: [{
                    ms: te()
                }],
                me: [{
                    me: te()
                }],
                mbs: [{
                    mbs: te()
                }],
                mbe: [{
                    mbe: te()
                }],
                mt: [{
                    mt: te()
                }],
                mr: [{
                    mr: te()
                }],
                mb: [{
                    mb: te()
                }],
                ml: [{
                    ml: te()
                }],
                "space-x": [{
                    "space-x": j()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": j()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: Z()
                }],
                "inline-size": [{
                    inline: ["auto", ...$()]
                }],
                "min-inline-size": [{
                    "min-inline": ["auto", ...$()]
                }],
                "max-inline-size": [{
                    "max-inline": ["none", ...$()]
                }],
                "block-size": [{
                    block: ["auto", ...X()]
                }],
                "min-block-size": [{
                    "min-block": ["auto", ...X()]
                }],
                "max-block-size": [{
                    "max-block": ["none", ...X()]
                }],
                w: [{
                    w: [c, "screen", ...Z()]
                }],
                "min-w": [{
                    "min-w": [c, "screen", "none", ...Z()]
                }],
                "max-w": [{
                    "max-w": [c, "screen", "none", "prose", {
                        screen: [u]
                    }, ...Z()]
                }],
                h: [{
                    h: ["screen", "lh", ...Z()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...Z()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...Z()]
                }],
                "font-size": [{
                    text: ["base", n, Ui, ys]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [s, kR, xR]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", gf, ae]
                }],
                "font-family": [{
                    font: [CR, SR, t]
                }],
                "font-features": [{
                    "font-features": [ae]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [i, ue, ae]
                }],
                "line-clamp": [{
                    "line-clamp": [Pe, "none", ue, yv]
                }],
                leading: [{
                    leading: [l, ...j()]
                }],
                "list-image": [{
                    "list-image": ["none", ue, ae]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", ue, ae]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: W()
                }],
                "text-color": [{
                    text: W()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...ne(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [Pe, "from-font", "auto", ue, ys]
                }],
                "text-decoration-color": [{
                    decoration: W()
                }],
                "underline-offset": [{
                    "underline-offset": [Pe, "auto", ue, ae]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: j()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ue, ae]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", ue, ae]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: D()
                }],
                "bg-repeat": [{
                    bg: H()
                }],
                "bg-size": [{
                    bg: we()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, Nr, ue, ae],
                        radial: ["", ue, ae],
                        conic: [Nr, ue, ae]
                    }, TR, bR]
                }],
                "bg-color": [{
                    bg: W()
                }],
                "gradient-from-pos": [{
                    from: ve()
                }],
                "gradient-via-pos": [{
                    via: ve()
                }],
                "gradient-to-pos": [{
                    to: ve()
                }],
                "gradient-from": [{
                    from: W()
                }],
                "gradient-via": [{
                    via: W()
                }],
                "gradient-to": [{
                    to: W()
                }],
                rounded: [{
                    rounded: pe()
                }],
                "rounded-s": [{
                    "rounded-s": pe()
                }],
                "rounded-e": [{
                    "rounded-e": pe()
                }],
                "rounded-t": [{
                    "rounded-t": pe()
                }],
                "rounded-r": [{
                    "rounded-r": pe()
                }],
                "rounded-b": [{
                    "rounded-b": pe()
                }],
                "rounded-l": [{
                    "rounded-l": pe()
                }],
                "rounded-ss": [{
                    "rounded-ss": pe()
                }],
                "rounded-se": [{
                    "rounded-se": pe()
                }],
                "rounded-ee": [{
                    "rounded-ee": pe()
                }],
                "rounded-es": [{
                    "rounded-es": pe()
                }],
                "rounded-tl": [{
                    "rounded-tl": pe()
                }],
                "rounded-tr": [{
                    "rounded-tr": pe()
                }],
                "rounded-br": [{
                    "rounded-br": pe()
                }],
                "rounded-bl": [{
                    "rounded-bl": pe()
                }],
                "border-w": [{
                    border: ye()
                }],
                "border-w-x": [{
                    "border-x": ye()
                }],
                "border-w-y": [{
                    "border-y": ye()
                }],
                "border-w-s": [{
                    "border-s": ye()
                }],
                "border-w-e": [{
                    "border-e": ye()
                }],
                "border-w-bs": [{
                    "border-bs": ye()
                }],
                "border-w-be": [{
                    "border-be": ye()
                }],
                "border-w-t": [{
                    "border-t": ye()
                }],
                "border-w-r": [{
                    "border-r": ye()
                }],
                "border-w-b": [{
                    "border-b": ye()
                }],
                "border-w-l": [{
                    "border-l": ye()
                }],
                "divide-x": [{
                    "divide-x": ye()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": ye()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...ne(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...ne(), "hidden", "none"]
                }],
                "border-color": [{
                    border: W()
                }],
                "border-color-x": [{
                    "border-x": W()
                }],
                "border-color-y": [{
                    "border-y": W()
                }],
                "border-color-s": [{
                    "border-s": W()
                }],
                "border-color-e": [{
                    "border-e": W()
                }],
                "border-color-bs": [{
                    "border-bs": W()
                }],
                "border-color-be": [{
                    "border-be": W()
                }],
                "border-color-t": [{
                    "border-t": W()
                }],
                "border-color-r": [{
                    "border-r": W()
                }],
                "border-color-b": [{
                    "border-b": W()
                }],
                "border-color-l": [{
                    "border-l": W()
                }],
                "divide-color": [{
                    divide: W()
                }],
                "outline-style": [{
                    outline: [...ne(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [Pe, ue, ae]
                }],
                "outline-w": [{
                    outline: ["", Pe, Ui, ys]
                }],
                "outline-color": [{
                    outline: W()
                }],
                shadow: [{
                    shadow: ["", "none", m, Yl, Ql]
                }],
                "shadow-color": [{
                    shadow: W()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", y, Yl, Ql]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": W()
                }],
                "ring-w": [{
                    ring: ye()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: W()
                }],
                "ring-offset-w": [{
                    "ring-offset": [Pe, ys]
                }],
                "ring-offset-color": [{
                    "ring-offset": W()
                }],
                "inset-ring-w": [{
                    "inset-ring": ye()
                }],
                "inset-ring-color": [{
                    "inset-ring": W()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", w, Yl, Ql]
                }],
                "text-shadow-color": [{
                    "text-shadow": W()
                }],
                opacity: [{
                    opacity: [Pe, ue, ae]
                }],
                "mix-blend": [{
                    "mix-blend": [...me(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": me()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [Pe]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": fe()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": fe()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": W()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": W()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": fe()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": fe()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": W()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": W()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": fe()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": fe()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": W()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": W()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": fe()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": fe()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": W()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": W()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": fe()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": fe()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": W()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": W()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": fe()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": fe()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": W()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": W()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": fe()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": fe()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": W()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": W()
                }],
                "mask-image-radial": [{
                    "mask-radial": [ue, ae]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": fe()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": fe()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": W()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": W()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": _()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [Pe]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": fe()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": fe()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": W()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": W()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: D()
                }],
                "mask-repeat": [{
                    mask: H()
                }],
                "mask-size": [{
                    mask: we()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", ue, ae]
                }],
                filter: [{
                    filter: ["", "none", ue, ae]
                }],
                blur: [{
                    blur: Re()
                }],
                brightness: [{
                    brightness: [Pe, ue, ae]
                }],
                contrast: [{
                    contrast: [Pe, ue, ae]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", C, Yl, Ql]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": W()
                }],
                grayscale: [{
                    grayscale: ["", Pe, ue, ae]
                }],
                "hue-rotate": [{
                    "hue-rotate": [Pe, ue, ae]
                }],
                invert: [{
                    invert: ["", Pe, ue, ae]
                }],
                saturate: [{
                    saturate: [Pe, ue, ae]
                }],
                sepia: [{
                    sepia: ["", Pe, ue, ae]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", ue, ae]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": Re()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [Pe, ue, ae]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [Pe, ue, ae]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", Pe, ue, ae]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [Pe, ue, ae]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", Pe, ue, ae]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [Pe, ue, ae]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [Pe, ue, ae]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", Pe, ue, ae]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": j()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": j()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": j()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ue, ae]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [Pe, "initial", ue, ae]
                }],
                ease: [{
                    ease: ["linear", "initial", k, ue, ae]
                }],
                delay: [{
                    delay: [Pe, ue, ae]
                }],
                animate: [{
                    animate: ["none", P, ue, ae]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [v, ue, ae]
                }],
                "perspective-origin": [{
                    "perspective-origin": N()
                }],
                rotate: [{
                    rotate: Ae()
                }],
                "rotate-x": [{
                    "rotate-x": Ae()
                }],
                "rotate-y": [{
                    "rotate-y": Ae()
                }],
                "rotate-z": [{
                    "rotate-z": Ae()
                }],
                scale: [{
                    scale: Oe()
                }],
                "scale-x": [{
                    "scale-x": Oe()
                }],
                "scale-y": [{
                    "scale-y": Oe()
                }],
                "scale-z": [{
                    "scale-z": Oe()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: Ge()
                }],
                "skew-x": [{
                    "skew-x": Ge()
                }],
                "skew-y": [{
                    "skew-y": Ge()
                }],
                transform: [{
                    transform: [ue, ae, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: N()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: at()
                }],
                "translate-x": [{
                    "translate-x": at()
                }],
                "translate-y": [{
                    "translate-y": at()
                }],
                "translate-z": [{
                    "translate-z": at()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: W()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: W()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ue, ae]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": j()
                }],
                "scroll-mx": [{
                    "scroll-mx": j()
                }],
                "scroll-my": [{
                    "scroll-my": j()
                }],
                "scroll-ms": [{
                    "scroll-ms": j()
                }],
                "scroll-me": [{
                    "scroll-me": j()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": j()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": j()
                }],
                "scroll-mt": [{
                    "scroll-mt": j()
                }],
                "scroll-mr": [{
                    "scroll-mr": j()
                }],
                "scroll-mb": [{
                    "scroll-mb": j()
                }],
                "scroll-ml": [{
                    "scroll-ml": j()
                }],
                "scroll-p": [{
                    "scroll-p": j()
                }],
                "scroll-px": [{
                    "scroll-px": j()
                }],
                "scroll-py": [{
                    "scroll-py": j()
                }],
                "scroll-ps": [{
                    "scroll-ps": j()
                }],
                "scroll-pe": [{
                    "scroll-pe": j()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": j()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": j()
                }],
                "scroll-pt": [{
                    "scroll-pt": j()
                }],
                "scroll-pr": [{
                    "scroll-pr": j()
                }],
                "scroll-pb": [{
                    "scroll-pb": j()
                }],
                "scroll-pl": [{
                    "scroll-pl": j()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", ue, ae]
                }],
                fill: [{
                    fill: ["none", ...W()]
                }],
                "stroke-w": [{
                    stroke: [Pe, Ui, ys, yv]
                }],
                stroke: [{
                    stroke: ["none", ...W()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    AR = aR(PR);

function At(...e) {
    return AR(Sx(e))
}
const Vx = x.forwardRef(({ ...e
}, t) => T.jsx("div", {
    ref: t,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...e
}));
Vx.displayName = "ToastProvider";
const Ux = x.forwardRef(({ ...e
}, t) => T.jsx("div", {
    ref: t,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...e
}));
Ux.displayName = "ToastViewport";
const _R = ep("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    zx = x.forwardRef(({
        className: e,
        variant: t,
        ...n
    }, s) => T.jsx("div", {
        ref: s,
        className: At(_R({
            variant: t
        }), e),
        ...n
    }));
zx.displayName = "Toast";
const OR = x.forwardRef(({
    className: e,
    ...t
}, n) => T.jsx("div", {
    ref: n,
    className: At("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
OR.displayName = "ToastAction";
const $x = x.forwardRef(({
    className: e,
    ...t
}, n) => T.jsx("button", {
    ref: n,
    className: At("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: T.jsx(bs, {
        className: "h-4 w-4"
    })
}));
$x.displayName = "ToastClose";
const Wx = x.forwardRef(({
    className: e,
    ...t
}, n) => T.jsx("div", {
    ref: n,
    className: At("text-sm font-semibold", e),
    ...t
}));
Wx.displayName = "ToastTitle";
const Hx = x.forwardRef(({
    className: e,
    ...t
}, n) => T.jsx("div", {
    ref: n,
    className: At("text-sm opacity-90", e),
    ...t
}));
Hx.displayName = "ToastDescription";

function NR() {
    const {
        toasts: e
    } = ck();
    return T.jsxs(Vx, {
        children: [e.map(function({
            id: t,
            title: n,
            description: s,
            action: i,
            ...l
        }) {
            return T.jsxs(zx, { ...l,
                children: [T.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && T.jsx(Wx, {
                        children: n
                    }), s && T.jsx(Hx, {
                        children: s
                    })]
                }), i, T.jsx($x, {})]
            }, t)
        }), T.jsx(Ux, {})]
    })
}
var Ea = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    MR = {
        setTimeout: (e, t) => setTimeout(e, t),
        clearTimeout: e => clearTimeout(e),
        setInterval: (e, t) => setInterval(e, t),
        clearInterval: e => clearInterval(e)
    },
    Ir, Xh, ux, LR = (ux = class {
        constructor() {
            be(this, Ir, MR);
            be(this, Xh, !1)
        }
        setTimeoutProvider(e) {
            se(this, Ir, e)
        }
        setTimeout(e, t) {
            return M(this, Ir).setTimeout(e, t)
        }
        clearTimeout(e) {
            M(this, Ir).clearTimeout(e)
        }
        setInterval(e, t) {
            return M(this, Ir).setInterval(e, t)
        }
        clearInterval(e) {
            M(this, Ir).clearInterval(e)
        }
    }, Ir = new WeakMap, Xh = new WeakMap, ux),
    Cs = new LR;

function DR(e) {
    setTimeout(e, 0)
}
var Is = typeof window > "u" || "Deno" in globalThis;

function Ut() {}

function jR(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Jf(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function qx(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function qr(e, t) {
    return typeof e == "function" ? e(t) : e
}

function cn(e, t) {
    return typeof e == "function" ? e(t) : e
}

function xv(e, t) {
    const {
        type: n = "all",
        exact: s,
        fetchStatus: i,
        predicate: l,
        queryKey: u,
        stale: c
    } = e;
    if (u) {
        if (s) {
            if (t.queryHash !== rp(u, t.options)) return !1
        } else if (!la(t.queryKey, u)) return !1
    }
    if (n !== "all") {
        const f = t.isActive();
        if (n === "active" && !f || n === "inactive" && f) return !1
    }
    return !(typeof c == "boolean" && t.isStale() !== c || i && i !== t.state.fetchStatus || l && !l(t))
}

function Sv(e, t) {
    const {
        exact: n,
        status: s,
        predicate: i,
        mutationKey: l
    } = e;
    if (l) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (aa(t.options.mutationKey) !== aa(l)) return !1
        } else if (!la(t.options.mutationKey, l)) return !1
    }
    return !(s && t.state.status !== s || i && !i(t))
}

function rp(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || aa)(e)
}

function aa(e) {
    return JSON.stringify(e, (t, n) => eh(n) ? Object.keys(n).sort().reduce((s, i) => (s[i] = n[i], s), {}) : n)
}

function la(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => la(e[n], t[n])) : !1
}
var IR = Object.prototype.hasOwnProperty;

function Kx(e, t, n = 0) {
    if (e === t) return e;
    if (n > 500) return t;
    const s = bv(e) && bv(t);
    if (!s && !(eh(e) && eh(t))) return t;
    const l = (s ? e : Object.keys(e)).length,
        u = s ? t : Object.keys(t),
        c = u.length,
        f = s ? new Array(c) : {};
    let h = 0;
    for (let m = 0; m < c; m++) {
        const y = s ? m : u[m],
            w = e[y],
            C = t[y];
        if (w === C) {
            f[y] = w, (s ? m < l : IR.call(e, y)) && h++;
            continue
        }
        if (w === null || C === null || typeof w != "object" || typeof C != "object") {
            f[y] = C;
            continue
        }
        const b = Kx(w, C, n + 1);
        f[y] = b, b === w && h++
    }
    return l === c && h === l ? e : f
}

function Zf(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (e[n] !== t[n]) return !1;
    return !0
}

function bv(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function eh(e) {
    if (!Cv(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!Cv(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function Cv(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function FR(e) {
    return new Promise(t => {
        Cs.setTimeout(t, e)
    })
}

function th(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Kx(e, t) : t
}

function BR(e, t, n = 0) {
    const s = [...e, t];
    return n && s.length > n ? s.slice(1) : s
}

function VR(e, t, n = 0) {
    const s = [t, ...e];
    return n && s.length > n ? s.slice(0, -1) : s
}
var sp = Symbol();

function Gx(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === sp ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}

function Qx(e, t) {
    return typeof e == "function" ? e(...t) : !!e
}

function UR(e, t, n) {
    let s = !1,
        i;
    return Object.defineProperty(e, "signal", {
        enumerable: !0,
        get: () => (i ? ? (i = t()), s || (s = !0, i.aborted ? n() : i.addEventListener("abort", n, {
            once: !0
        })), i)
    }), e
}
var ks, Fr, Ao, cx, zR = (cx = class extends Ea {
        constructor() {
            super();
            be(this, ks);
            be(this, Fr);
            be(this, Ao);
            se(this, Ao, t => {
                if (!Is && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            M(this, Fr) || this.setEventListener(M(this, Ao))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = M(this, Fr)) == null || t.call(this), se(this, Fr, void 0))
        }
        setEventListener(t) {
            var n;
            se(this, Ao, t), (n = M(this, Fr)) == null || n.call(this), se(this, Fr, t(s => {
                typeof s == "boolean" ? this.setFocused(s) : this.onFocus()
            }))
        }
        setFocused(t) {
            M(this, ks) !== t && (se(this, ks, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n => {
                n(t)
            })
        }
        isFocused() {
            var t;
            return typeof M(this, ks) == "boolean" ? M(this, ks) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, ks = new WeakMap, Fr = new WeakMap, Ao = new WeakMap, cx),
    op = new zR;

function nh() {
    let e, t;
    const n = new Promise((i, l) => {
        e = i, t = l
    });
    n.status = "pending", n.catch(() => {});

    function s(i) {
        Object.assign(n, i), delete n.resolve, delete n.reject
    }
    return n.resolve = i => {
        s({
            status: "fulfilled",
            value: i
        }), e(i)
    }, n.reject = i => {
        s({
            status: "rejected",
            reason: i
        }), t(i)
    }, n
}
var $R = DR;

function WR() {
    let e = [],
        t = 0,
        n = c => {
            c()
        },
        s = c => {
            c()
        },
        i = $R;
    const l = c => {
            t ? e.push(c) : i(() => {
                n(c)
            })
        },
        u = () => {
            const c = e;
            e = [], c.length && i(() => {
                s(() => {
                    c.forEach(f => {
                        n(f)
                    })
                })
            })
        };
    return {
        batch: c => {
            let f;
            t++;
            try {
                f = c()
            } finally {
                t--, t || u()
            }
            return f
        },
        batchCalls: c => (...f) => {
            l(() => {
                c(...f)
            })
        },
        schedule: l,
        setNotifyFunction: c => {
            n = c
        },
        setBatchNotifyFunction: c => {
            s = c
        },
        setScheduler: c => {
            i = c
        }
    }
}
var wt = WR(),
    _o, Br, Oo, dx, HR = (dx = class extends Ea {
        constructor() {
            super();
            be(this, _o, !0);
            be(this, Br);
            be(this, Oo);
            se(this, Oo, t => {
                if (!Is && window.addEventListener) {
                    const n = () => t(!0),
                        s = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", s, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", s)
                    }
                }
            })
        }
        onSubscribe() {
            M(this, Br) || this.setEventListener(M(this, Oo))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = M(this, Br)) == null || t.call(this), se(this, Br, void 0))
        }
        setEventListener(t) {
            var n;
            se(this, Oo, t), (n = M(this, Br)) == null || n.call(this), se(this, Br, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            M(this, _o) !== t && (se(this, _o, t), this.listeners.forEach(s => {
                s(t)
            }))
        }
        isOnline() {
            return M(this, _o)
        }
    }, _o = new WeakMap, Br = new WeakMap, Oo = new WeakMap, dx),
    Ou = new HR;

function qR(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function Yx(e) {
    return (e ? ? "online") === "online" ? Ou.isOnline() : !0
}
var rh = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function Xx(e) {
    let t = !1,
        n = 0,
        s;
    const i = nh(),
        l = () => i.status !== "pending",
        u = v => {
            var S;
            if (!l()) {
                const k = new rh(v);
                w(k), (S = e.onCancel) == null || S.call(e, k)
            }
        },
        c = () => {
            t = !0
        },
        f = () => {
            t = !1
        },
        h = () => op.isFocused() && (e.networkMode === "always" || Ou.isOnline()) && e.canRun(),
        m = () => Yx(e.networkMode) && e.canRun(),
        y = v => {
            l() || (s == null || s(), i.resolve(v))
        },
        w = v => {
            l() || (s == null || s(), i.reject(v))
        },
        C = () => new Promise(v => {
            var S;
            s = k => {
                (l() || h()) && v(k)
            }, (S = e.onPause) == null || S.call(e)
        }).then(() => {
            var v;
            s = void 0, l() || (v = e.onContinue) == null || v.call(e)
        }),
        b = () => {
            if (l()) return;
            let v;
            const S = n === 0 ? e.initialPromise : void 0;
            try {
                v = S ? ? e.fn()
            } catch (k) {
                v = Promise.reject(k)
            }
            Promise.resolve(v).then(y).catch(k => {
                var B;
                if (l()) return;
                const P = e.retry ? ? (Is ? 0 : 3),
                    R = e.retryDelay ? ? qR,
                    _ = typeof R == "function" ? R(n, k) : R,
                    N = P === !0 || typeof P == "number" && n < P || typeof P == "function" && P(n, k);
                if (t || !N) {
                    w(k);
                    return
                }
                n++, (B = e.onFail) == null || B.call(e, n, k), FR(_).then(() => h() ? void 0 : C()).then(() => {
                    t ? w(k) : b()
                })
            })
        };
    return {
        promise: i,
        status: () => i.status,
        cancel: u,
        continue: () => (s == null || s(), i),
        cancelRetry: c,
        continueRetry: f,
        canStart: m,
        start: () => (m() ? b() : C().then(b), i)
    }
}
var Rs, fx, Jx = (fx = class {
        constructor() {
            be(this, Rs)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), Jf(this.gcTime) && se(this, Rs, Cs.setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ? ? (Is ? 1 / 0 : 300 * 1e3))
        }
        clearGcTimeout() {
            M(this, Rs) && (Cs.clearTimeout(M(this, Rs)), se(this, Rs, void 0))
        }
    }, Rs = new WeakMap, fx),
    Ps, No, un, As, pt, wa, _s, Sn, er, hx, KR = (hx = class extends Jx {
        constructor(t) {
            super();
            be(this, Sn);
            be(this, Ps);
            be(this, No);
            be(this, un);
            be(this, As);
            be(this, pt);
            be(this, wa);
            be(this, _s);
            se(this, _s, !1), se(this, wa, t.defaultOptions), this.setOptions(t.options), this.observers = [], se(this, As, t.client), se(this, un, M(this, As).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, se(this, Ps, Tv(this.options)), this.state = t.state ? ? M(this, Ps), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = M(this, pt)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            if (this.options = { ...M(this, wa),
                    ...t
                }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
                const n = Tv(this.options);
                n.data !== void 0 && (this.setState(Ev(n.data, n.dataUpdatedAt)), se(this, Ps, n))
            }
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && M(this, un).remove(this)
        }
        setData(t, n) {
            const s = th(this.state.data, t, this.options);
            return Ne(this, Sn, er).call(this, {
                data: s,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), s
        }
        setState(t, n) {
            Ne(this, Sn, er).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var s, i;
            const n = (s = M(this, pt)) == null ? void 0 : s.promise;
            return (i = M(this, pt)) == null || i.cancel(t), n ? n.then(Ut).catch(Ut) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(M(this, Ps))
        }
        isActive() {
            return this.observers.some(t => cn(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === sp || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(t => qr(t.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(t = 0) {
            return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !qx(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(s => s.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = M(this, pt)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(s => s.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = M(this, pt)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), M(this, un).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (M(this, pt) && (M(this, _s) ? M(this, pt).cancel({
                revert: !0
            }) : M(this, pt).cancelRetry()), this.scheduleGc()), M(this, un).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Ne(this, Sn, er).call(this, {
                type: "invalidate"
            })
        }
        async fetch(t, n) {
            var f, h, m, y, w, C, b, v, S, k, P, R;
            if (this.state.fetchStatus !== "idle" && ((f = M(this, pt)) == null ? void 0 : f.status()) !== "rejected") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (M(this, pt)) return M(this, pt).continueRetry(), M(this, pt).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const _ = this.observers.find(N => N.options.queryFn);
                _ && this.setOptions(_.options)
            }
            const s = new AbortController,
                i = _ => {
                    Object.defineProperty(_, "signal", {
                        enumerable: !0,
                        get: () => (se(this, _s, !0), s.signal)
                    })
                },
                l = () => {
                    const _ = Gx(this.options, n),
                        B = (() => {
                            const U = {
                                client: M(this, As),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return i(U), U
                        })();
                    return se(this, _s, !1), this.options.persister ? this.options.persister(_, B, this) : _(B)
                },
                c = (() => {
                    const _ = {
                        fetchOptions: n,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: M(this, As),
                        state: this.state,
                        fetchFn: l
                    };
                    return i(_), _
                })();
            (h = this.options.behavior) == null || h.onFetch(c, this), se(this, No, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((m = c.fetchOptions) == null ? void 0 : m.meta)) && Ne(this, Sn, er).call(this, {
                type: "fetch",
                meta: (y = c.fetchOptions) == null ? void 0 : y.meta
            }), se(this, pt, Xx({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: c.fetchFn,
                onCancel: _ => {
                    _ instanceof rh && _.revert && this.setState({ ...M(this, No),
                        fetchStatus: "idle"
                    }), s.abort()
                },
                onFail: (_, N) => {
                    Ne(this, Sn, er).call(this, {
                        type: "failed",
                        failureCount: _,
                        error: N
                    })
                },
                onPause: () => {
                    Ne(this, Sn, er).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Ne(this, Sn, er).call(this, {
                        type: "continue"
                    })
                },
                retry: c.options.retry,
                retryDelay: c.options.retryDelay,
                networkMode: c.options.networkMode,
                canRun: () => !0
            }));
            try {
                const _ = await M(this, pt).start();
                if (_ === void 0) throw new Error(`${this.queryHash} data is undefined`);
                return this.setData(_), (C = (w = M(this, un).config).onSuccess) == null || C.call(w, _, this), (v = (b = M(this, un).config).onSettled) == null || v.call(b, _, this.state.error, this), _
            } catch (_) {
                if (_ instanceof rh) {
                    if (_.silent) return M(this, pt).promise;
                    if (_.revert) {
                        if (this.state.data === void 0) throw _;
                        return this.state.data
                    }
                }
                throw Ne(this, Sn, er).call(this, {
                    type: "error",
                    error: _
                }), (k = (S = M(this, un).config).onError) == null || k.call(S, _, this), (R = (P = M(this, un).config).onSettled) == null || R.call(P, this.state.data, _, this), _
            } finally {
                this.scheduleGc()
            }
        }
    }, Ps = new WeakMap, No = new WeakMap, un = new WeakMap, As = new WeakMap, pt = new WeakMap, wa = new WeakMap, _s = new WeakMap, Sn = new WeakSet, er = function(t) {
        const n = s => {
            switch (t.type) {
                case "failed":
                    return { ...s,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...s,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...s,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...s,
                        ...Zx(s.data, this.options),
                        fetchMeta: t.meta ? ? null
                    };
                case "success":
                    const i = { ...s,
                        ...Ev(t.data, t.dataUpdatedAt),
                        dataUpdateCount: s.dataUpdateCount + 1,
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return se(this, No, t.manual ? i : void 0), i;
                case "error":
                    const l = t.error;
                    return { ...s,
                        error: l,
                        errorUpdateCount: s.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: s.fetchFailureCount + 1,
                        fetchFailureReason: l,
                        fetchStatus: "idle",
                        status: "error",
                        isInvalidated: !0
                    };
                case "invalidate":
                    return { ...s,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...s,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), wt.batch(() => {
            this.observers.forEach(s => {
                s.onQueryUpdate()
            }), M(this, un).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, hx);

function Zx(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Yx(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function Ev(e, t) {
    return {
        data: e,
        dataUpdatedAt: t ? ? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}

function Tv(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        s = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? s ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Vt, Me, xa, Mt, Os, Mo, tr, Vr, Sa, Lo, Do, Ns, Ms, Ur, jo, Ie, qi, sh, oh, ih, ah, lh, uh, ch, eS, px, GR = (px = class extends Ea {
    constructor(t, n) {
        super();
        be(this, Ie);
        be(this, Vt);
        be(this, Me);
        be(this, xa);
        be(this, Mt);
        be(this, Os);
        be(this, Mo);
        be(this, tr);
        be(this, Vr);
        be(this, Sa);
        be(this, Lo);
        be(this, Do);
        be(this, Ns);
        be(this, Ms);
        be(this, Ur);
        be(this, jo, new Set);
        this.options = n, se(this, Vt, t), se(this, Vr, null), se(this, tr, nh()), this.bindMethods(), this.setOptions(n)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (M(this, Me).addObserver(this), kv(M(this, Me), this.options) ? Ne(this, Ie, qi).call(this) : this.updateResult(), Ne(this, Ie, ah).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return dh(M(this, Me), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return dh(M(this, Me), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, Ne(this, Ie, lh).call(this), Ne(this, Ie, uh).call(this), M(this, Me).removeObserver(this)
    }
    setOptions(t) {
        const n = this.options,
            s = M(this, Me);
        if (this.options = M(this, Vt).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof cn(this.options.enabled, M(this, Me)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        Ne(this, Ie, ch).call(this), M(this, Me).setOptions(this.options), n._defaulted && !Zf(this.options, n) && M(this, Vt).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: M(this, Me),
            observer: this
        });
        const i = this.hasListeners();
        i && Rv(M(this, Me), s, this.options, n) && Ne(this, Ie, qi).call(this), this.updateResult(), i && (M(this, Me) !== s || cn(this.options.enabled, M(this, Me)) !== cn(n.enabled, M(this, Me)) || qr(this.options.staleTime, M(this, Me)) !== qr(n.staleTime, M(this, Me))) && Ne(this, Ie, sh).call(this);
        const l = Ne(this, Ie, oh).call(this);
        i && (M(this, Me) !== s || cn(this.options.enabled, M(this, Me)) !== cn(n.enabled, M(this, Me)) || l !== M(this, Ur)) && Ne(this, Ie, ih).call(this, l)
    }
    getOptimisticResult(t) {
        const n = M(this, Vt).getQueryCache().build(M(this, Vt), t),
            s = this.createResult(n, t);
        return YR(this, s) && (se(this, Mt, s), se(this, Mo, this.options), se(this, Os, M(this, Me).state)), s
    }
    getCurrentResult() {
        return M(this, Mt)
    }
    trackResult(t, n) {
        return new Proxy(t, {
            get: (s, i) => (this.trackProp(i), n == null || n(i), i === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && M(this, tr).status === "pending" && M(this, tr).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(s, i))
        })
    }
    trackProp(t) {
        M(this, jo).add(t)
    }
    getCurrentQuery() {
        return M(this, Me)
    }
    refetch({ ...t
    } = {}) {
        return this.fetch({ ...t
        })
    }
    fetchOptimistic(t) {
        const n = M(this, Vt).defaultQueryOptions(t),
            s = M(this, Vt).getQueryCache().build(M(this, Vt), n);
        return s.fetch().then(() => this.createResult(s, n))
    }
    fetch(t) {
        return Ne(this, Ie, qi).call(this, { ...t,
            cancelRefetch: t.cancelRefetch ? ? !0
        }).then(() => (this.updateResult(), M(this, Mt)))
    }
    createResult(t, n) {
        var G;
        const s = M(this, Me),
            i = this.options,
            l = M(this, Mt),
            u = M(this, Os),
            c = M(this, Mo),
            h = t !== s ? t.state : M(this, xa),
            {
                state: m
            } = t;
        let y = { ...m
            },
            w = !1,
            C;
        if (n._optimisticResults) {
            const J = this.hasListeners(),
                ee = !J && kv(t, n),
                de = J && Rv(t, s, n, i);
            (ee || de) && (y = { ...y,
                ...Zx(m.data, t.options)
            }), n._optimisticResults === "isRestoring" && (y.fetchStatus = "idle")
        }
        let {
            error: b,
            errorUpdatedAt: v,
            status: S
        } = y;
        C = y.data;
        let k = !1;
        if (n.placeholderData !== void 0 && C === void 0 && S === "pending") {
            let J;
            l != null && l.isPlaceholderData && n.placeholderData === (c == null ? void 0 : c.placeholderData) ? (J = l.data, k = !0) : J = typeof n.placeholderData == "function" ? n.placeholderData((G = M(this, Do)) == null ? void 0 : G.state.data, M(this, Do)) : n.placeholderData, J !== void 0 && (S = "success", C = th(l == null ? void 0 : l.data, J, n), w = !0)
        }
        if (n.select && C !== void 0 && !k)
            if (l && C === (u == null ? void 0 : u.data) && n.select === M(this, Sa)) C = M(this, Lo);
            else try {
                se(this, Sa, n.select), C = n.select(C), C = th(l == null ? void 0 : l.data, C, n), se(this, Lo, C), se(this, Vr, null)
            } catch (J) {
                se(this, Vr, J)
            }
        M(this, Vr) && (b = M(this, Vr), C = M(this, Lo), v = Date.now(), S = "error");
        const P = y.fetchStatus === "fetching",
            R = S === "pending",
            _ = S === "error",
            N = R && P,
            B = C !== void 0,
            j = {
                status: S,
                fetchStatus: y.fetchStatus,
                isPending: R,
                isSuccess: S === "success",
                isError: _,
                isInitialLoading: N,
                isLoading: N,
                data: C,
                dataUpdatedAt: y.dataUpdatedAt,
                error: b,
                errorUpdatedAt: v,
                failureCount: y.fetchFailureCount,
                failureReason: y.fetchFailureReason,
                errorUpdateCount: y.errorUpdateCount,
                isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                isFetchedAfterMount: y.dataUpdateCount > h.dataUpdateCount || y.errorUpdateCount > h.errorUpdateCount,
                isFetching: P,
                isRefetching: P && !R,
                isLoadingError: _ && !B,
                isPaused: y.fetchStatus === "paused",
                isPlaceholderData: w,
                isRefetchError: _ && B,
                isStale: ip(t, n),
                refetch: this.refetch,
                promise: M(this, tr),
                isEnabled: cn(n.enabled, t) !== !1
            };
        if (this.options.experimental_prefetchInRender) {
            const J = j.data !== void 0,
                ee = j.status === "error" && !J,
                de = Ce => {
                    ee ? Ce.reject(j.error) : J && Ce.resolve(j.data)
                },
                ge = () => {
                    const Ce = se(this, tr, j.promise = nh());
                    de(Ce)
                },
                le = M(this, tr);
            switch (le.status) {
                case "pending":
                    t.queryHash === s.queryHash && de(le);
                    break;
                case "fulfilled":
                    (ee || j.data !== le.value) && ge();
                    break;
                case "rejected":
                    (!ee || j.error !== le.reason) && ge();
                    break
            }
        }
        return j
    }
    updateResult() {
        const t = M(this, Mt),
            n = this.createResult(M(this, Me), this.options);
        if (se(this, Os, M(this, Me).state), se(this, Mo, this.options), M(this, Os).data !== void 0 && se(this, Do, M(this, Me)), Zf(n, t)) return;
        se(this, Mt, n);
        const s = () => {
            if (!t) return !0;
            const {
                notifyOnChangeProps: i
            } = this.options, l = typeof i == "function" ? i() : i;
            if (l === "all" || !l && !M(this, jo).size) return !0;
            const u = new Set(l ? ? M(this, jo));
            return this.options.throwOnError && u.add("error"), Object.keys(M(this, Mt)).some(c => {
                const f = c;
                return M(this, Mt)[f] !== t[f] && u.has(f)
            })
        };
        Ne(this, Ie, eS).call(this, {
            listeners: s()
        })
    }
    onQueryUpdate() {
        this.updateResult(), this.hasListeners() && Ne(this, Ie, ah).call(this)
    }
}, Vt = new WeakMap, Me = new WeakMap, xa = new WeakMap, Mt = new WeakMap, Os = new WeakMap, Mo = new WeakMap, tr = new WeakMap, Vr = new WeakMap, Sa = new WeakMap, Lo = new WeakMap, Do = new WeakMap, Ns = new WeakMap, Ms = new WeakMap, Ur = new WeakMap, jo = new WeakMap, Ie = new WeakSet, qi = function(t) {
    Ne(this, Ie, ch).call(this);
    let n = M(this, Me).fetch(this.options, t);
    return t != null && t.throwOnError || (n = n.catch(Ut)), n
}, sh = function() {
    Ne(this, Ie, lh).call(this);
    const t = qr(this.options.staleTime, M(this, Me));
    if (Is || M(this, Mt).isStale || !Jf(t)) return;
    const s = qx(M(this, Mt).dataUpdatedAt, t) + 1;
    se(this, Ns, Cs.setTimeout(() => {
        M(this, Mt).isStale || this.updateResult()
    }, s))
}, oh = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(M(this, Me)) : this.options.refetchInterval) ? ? !1
}, ih = function(t) {
    Ne(this, Ie, uh).call(this), se(this, Ur, t), !(Is || cn(this.options.enabled, M(this, Me)) === !1 || !Jf(M(this, Ur)) || M(this, Ur) === 0) && se(this, Ms, Cs.setInterval(() => {
        (this.options.refetchIntervalInBackground || op.isFocused()) && Ne(this, Ie, qi).call(this)
    }, M(this, Ur)))
}, ah = function() {
    Ne(this, Ie, sh).call(this), Ne(this, Ie, ih).call(this, Ne(this, Ie, oh).call(this))
}, lh = function() {
    M(this, Ns) && (Cs.clearTimeout(M(this, Ns)), se(this, Ns, void 0))
}, uh = function() {
    M(this, Ms) && (Cs.clearInterval(M(this, Ms)), se(this, Ms, void 0))
}, ch = function() {
    const t = M(this, Vt).getQueryCache().build(M(this, Vt), this.options);
    if (t === M(this, Me)) return;
    const n = M(this, Me);
    se(this, Me, t), se(this, xa, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this))
}, eS = function(t) {
    wt.batch(() => {
        t.listeners && this.listeners.forEach(n => {
            n(M(this, Mt))
        }), M(this, Vt).getQueryCache().notify({
            query: M(this, Me),
            type: "observerResultsUpdated"
        })
    })
}, px);

function QR(e, t) {
    return cn(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1)
}

function kv(e, t) {
    return QR(e, t) || e.state.data !== void 0 && dh(e, t, t.refetchOnMount)
}

function dh(e, t, n) {
    if (cn(t.enabled, e) !== !1 && qr(t.staleTime, e) !== "static") {
        const s = typeof n == "function" ? n(e) : n;
        return s === "always" || s !== !1 && ip(e, t)
    }
    return !1
}

function Rv(e, t, n, s) {
    return (e !== t || cn(s.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && ip(e, n)
}

function ip(e, t) {
    return cn(t.enabled, e) !== !1 && e.isStaleByTime(qr(t.staleTime, e))
}

function YR(e, t) {
    return !Zf(e.getCurrentResult(), t)
}

function Pv(e) {
    return {
        onFetch: (t, n) => {
            var m, y, w, C, b;
            const s = t.options,
                i = (w = (y = (m = t.fetchOptions) == null ? void 0 : m.meta) == null ? void 0 : y.fetchMore) == null ? void 0 : w.direction,
                l = ((C = t.state.data) == null ? void 0 : C.pages) || [],
                u = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
            let c = {
                    pages: [],
                    pageParams: []
                },
                f = 0;
            const h = async () => {
                let v = !1;
                const S = R => {
                        UR(R, () => t.signal, () => v = !0)
                    },
                    k = Gx(t.options, t.fetchOptions),
                    P = async (R, _, N) => {
                        if (v) return Promise.reject();
                        if (_ == null && R.pages.length) return Promise.resolve(R);
                        const U = (() => {
                                const ee = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: _,
                                    direction: N ? "backward" : "forward",
                                    meta: t.options.meta
                                };
                                return S(ee), ee
                            })(),
                            j = await k(U),
                            {
                                maxPages: G
                            } = t.options,
                            J = N ? VR : BR;
                        return {
                            pages: J(R.pages, j, G),
                            pageParams: J(R.pageParams, _, G)
                        }
                    };
                if (i && l.length) {
                    const R = i === "backward",
                        _ = R ? XR : Av,
                        N = {
                            pages: l,
                            pageParams: u
                        },
                        B = _(s, N);
                    c = await P(N, B, R)
                } else {
                    const R = e ? ? l.length;
                    do {
                        const _ = f === 0 ? u[0] ? ? s.initialPageParam : Av(s, c);
                        if (f > 0 && _ == null) break;
                        c = await P(c, _), f++
                    } while (f < R)
                }
                return c
            };
            t.options.persister ? t.fetchFn = () => {
                var v, S;
                return (S = (v = t.options).persister) == null ? void 0 : S.call(v, h, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = h
        }
    }
}

function Av(e, {
    pages: t,
    pageParams: n
}) {
    const s = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[s], t, n[s], n) : void 0
}

function XR(e, {
    pages: t,
    pageParams: n
}) {
    var s;
    return t.length > 0 ? (s = e.getPreviousPageParam) == null ? void 0 : s.call(e, t[0], t, n[0], n) : void 0
}
var ba, Nn, Tt, Ls, Mn, Lr, mx, JR = (mx = class extends Jx {
    constructor(t) {
        super();
        be(this, Mn);
        be(this, ba);
        be(this, Nn);
        be(this, Tt);
        be(this, Ls);
        se(this, ba, t.client), this.mutationId = t.mutationId, se(this, Tt, t.mutationCache), se(this, Nn, []), this.state = t.state || ZR(), this.setOptions(t.options), this.scheduleGc()
    }
    setOptions(t) {
        this.options = t, this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        M(this, Nn).includes(t) || (M(this, Nn).push(t), this.clearGcTimeout(), M(this, Tt).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        se(this, Nn, M(this, Nn).filter(n => n !== t)), this.scheduleGc(), M(this, Tt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        M(this, Nn).length || (this.state.status === "pending" ? this.scheduleGc() : M(this, Tt).remove(this))
    }
    continue () {
        var t;
        return ((t = M(this, Ls)) == null ? void 0 : t.continue()) ? ? this.execute(this.state.variables)
    }
    async execute(t) {
        var u, c, f, h, m, y, w, C, b, v, S, k, P, R, _, N, B, U;
        const n = () => {
                Ne(this, Mn, Lr).call(this, {
                    type: "continue"
                })
            },
            s = {
                client: M(this, ba),
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
        se(this, Ls, Xx({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t, s) : Promise.reject(new Error("No mutationFn found")),
            onFail: (j, G) => {
                Ne(this, Mn, Lr).call(this, {
                    type: "failed",
                    failureCount: j,
                    error: G
                })
            },
            onPause: () => {
                Ne(this, Mn, Lr).call(this, {
                    type: "pause"
                })
            },
            onContinue: n,
            retry: this.options.retry ? ? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => M(this, Tt).canRun(this)
        }));
        const i = this.state.status === "pending",
            l = !M(this, Ls).canStart();
        try {
            if (i) n();
            else {
                Ne(this, Mn, Lr).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: l
                }), M(this, Tt).config.onMutate && await M(this, Tt).config.onMutate(t, this, s);
                const G = await ((c = (u = this.options).onMutate) == null ? void 0 : c.call(u, t, s));
                G !== this.state.context && Ne(this, Mn, Lr).call(this, {
                    type: "pending",
                    context: G,
                    variables: t,
                    isPaused: l
                })
            }
            const j = await M(this, Ls).start();
            return await ((h = (f = M(this, Tt).config).onSuccess) == null ? void 0 : h.call(f, j, t, this.state.context, this, s)), await ((y = (m = this.options).onSuccess) == null ? void 0 : y.call(m, j, t, this.state.context, s)), await ((C = (w = M(this, Tt).config).onSettled) == null ? void 0 : C.call(w, j, null, this.state.variables, this.state.context, this, s)), await ((v = (b = this.options).onSettled) == null ? void 0 : v.call(b, j, null, t, this.state.context, s)), Ne(this, Mn, Lr).call(this, {
                type: "success",
                data: j
            }), j
        } catch (j) {
            try {
                await ((k = (S = M(this, Tt).config).onError) == null ? void 0 : k.call(S, j, t, this.state.context, this, s))
            } catch (G) {
                Promise.reject(G)
            }
            try {
                await ((R = (P = this.options).onError) == null ? void 0 : R.call(P, j, t, this.state.context, s))
            } catch (G) {
                Promise.reject(G)
            }
            try {
                await ((N = (_ = M(this, Tt).config).onSettled) == null ? void 0 : N.call(_, void 0, j, this.state.variables, this.state.context, this, s))
            } catch (G) {
                Promise.reject(G)
            }
            try {
                await ((U = (B = this.options).onSettled) == null ? void 0 : U.call(B, void 0, j, t, this.state.context, s))
            } catch (G) {
                Promise.reject(G)
            }
            throw Ne(this, Mn, Lr).call(this, {
                type: "error",
                error: j
            }), j
        } finally {
            M(this, Tt).runNext(this)
        }
    }
}, ba = new WeakMap, Nn = new WeakMap, Tt = new WeakMap, Ls = new WeakMap, Mn = new WeakSet, Lr = function(t) {
    const n = s => {
        switch (t.type) {
            case "failed":
                return { ...s,
                    failureCount: t.failureCount,
                    failureReason: t.error
                };
            case "pause":
                return { ...s,
                    isPaused: !0
                };
            case "continue":
                return { ...s,
                    isPaused: !1
                };
            case "pending":
                return { ...s,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: "pending",
                    variables: t.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return { ...s,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return { ...s,
                    data: void 0,
                    error: t.error,
                    failureCount: s.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error"
                }
        }
    };
    this.state = n(this.state), wt.batch(() => {
        M(this, Nn).forEach(s => {
            s.onMutationUpdate(t)
        }), M(this, Tt).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    })
}, mx);

function ZR() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var nr, bn, Ca, gx, eP = (gx = class extends Ea {
    constructor(t = {}) {
        super();
        be(this, nr);
        be(this, bn);
        be(this, Ca);
        this.config = t, se(this, nr, new Set), se(this, bn, new Map), se(this, Ca, 0)
    }
    build(t, n, s) {
        const i = new JR({
            client: t,
            mutationCache: this,
            mutationId: ++Kl(this, Ca)._,
            options: t.defaultMutationOptions(n),
            state: s
        });
        return this.add(i), i
    }
    add(t) {
        M(this, nr).add(t);
        const n = Xl(t);
        if (typeof n == "string") {
            const s = M(this, bn).get(n);
            s ? s.push(t) : M(this, bn).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (M(this, nr).delete(t)) {
            const n = Xl(t);
            if (typeof n == "string") {
                const s = M(this, bn).get(n);
                if (s)
                    if (s.length > 1) {
                        const i = s.indexOf(t);
                        i !== -1 && s.splice(i, 1)
                    } else s[0] === t && M(this, bn).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = Xl(t);
        if (typeof n == "string") {
            const s = M(this, bn).get(n),
                i = s == null ? void 0 : s.find(l => l.state.status === "pending");
            return !i || i === t
        } else return !0
    }
    runNext(t) {
        var s;
        const n = Xl(t);
        if (typeof n == "string") {
            const i = (s = M(this, bn).get(n)) == null ? void 0 : s.find(l => l !== t && l.state.isPaused);
            return (i == null ? void 0 : i.continue()) ? ? Promise.resolve()
        } else return Promise.resolve()
    }
    clear() {
        wt.batch(() => {
            M(this, nr).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }), M(this, nr).clear(), M(this, bn).clear()
        })
    }
    getAll() {
        return Array.from(M(this, nr))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(s => Sv(n, s))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => Sv(t, n))
    }
    notify(t) {
        wt.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return wt.batch(() => Promise.all(t.map(n => n.continue().catch(Ut))))
    }
}, nr = new WeakMap, bn = new WeakMap, Ca = new WeakMap, gx);

function Xl(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
var Ln, yx, tP = (yx = class extends Ea {
        constructor(t = {}) {
            super();
            be(this, Ln);
            this.config = t, se(this, Ln, new Map)
        }
        build(t, n, s) {
            const i = n.queryKey,
                l = n.queryHash ? ? rp(i, n);
            let u = this.get(l);
            return u || (u = new KR({
                client: t,
                queryKey: i,
                queryHash: l,
                options: t.defaultQueryOptions(n),
                state: s,
                defaultOptions: t.getQueryDefaults(i)
            }), this.add(u)), u
        }
        add(t) {
            M(this, Ln).has(t.queryHash) || (M(this, Ln).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = M(this, Ln).get(t.queryHash);
            n && (t.destroy(), n === t && M(this, Ln).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            wt.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return M(this, Ln).get(t)
        }
        getAll() {
            return [...M(this, Ln).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(s => xv(n, s))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(s => xv(t, s)) : n
        }
        notify(t) {
            wt.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            wt.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            wt.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, Ln = new WeakMap, yx),
    Ye, zr, $r, Io, Fo, Wr, Bo, Vo, vx, nP = (vx = class {
        constructor(e = {}) {
            be(this, Ye);
            be(this, zr);
            be(this, $r);
            be(this, Io);
            be(this, Fo);
            be(this, Wr);
            be(this, Bo);
            be(this, Vo);
            se(this, Ye, e.queryCache || new tP), se(this, zr, e.mutationCache || new eP), se(this, $r, e.defaultOptions || {}), se(this, Io, new Map), se(this, Fo, new Map), se(this, Wr, 0)
        }
        mount() {
            Kl(this, Wr)._++, M(this, Wr) === 1 && (se(this, Bo, op.subscribe(async e => {
                e && (await this.resumePausedMutations(), M(this, Ye).onFocus())
            })), se(this, Vo, Ou.subscribe(async e => {
                e && (await this.resumePausedMutations(), M(this, Ye).onOnline())
            })))
        }
        unmount() {
            var e, t;
            Kl(this, Wr)._--, M(this, Wr) === 0 && ((e = M(this, Bo)) == null || e.call(this), se(this, Bo, void 0), (t = M(this, Vo)) == null || t.call(this), se(this, Vo, void 0))
        }
        isFetching(e) {
            return M(this, Ye).findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return M(this, zr).findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = M(this, Ye).get(t.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e) {
            const t = this.defaultQueryOptions(e),
                n = M(this, Ye).build(this, t),
                s = n.state.data;
            return s === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(qr(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(s))
        }
        getQueriesData(e) {
            return M(this, Ye).findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const s = n.data;
                return [t, s]
            })
        }
        setQueryData(e, t, n) {
            const s = this.defaultQueryOptions({
                    queryKey: e
                }),
                i = M(this, Ye).get(s.queryHash),
                l = i == null ? void 0 : i.state.data,
                u = jR(t, l);
            if (u !== void 0) return M(this, Ye).build(this, s).setData(u, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return wt.batch(() => M(this, Ye).findAll(e).map(({
                queryKey: s
            }) => [s, this.setQueryData(s, t, n)]))
        }
        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = M(this, Ye).get(t.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(e) {
            const t = M(this, Ye);
            wt.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = M(this, Ye);
            return wt.batch(() => (n.findAll(e).forEach(s => {
                s.reset()
            }), this.refetchQueries({
                type: "active",
                ...e
            }, t)))
        }
        cancelQueries(e, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                s = wt.batch(() => M(this, Ye).findAll(e).map(i => i.cancel(n)));
            return Promise.all(s).then(Ut).catch(Ut)
        }
        invalidateQueries(e, t = {}) {
            return wt.batch(() => (M(this, Ye).findAll(e).forEach(n => {
                n.invalidate()
            }), (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...e,
                type: (e == null ? void 0 : e.refetchType) ? ? (e == null ? void 0 : e.type) ? ? "active"
            }, t)))
        }
        refetchQueries(e, t = {}) {
            const n = { ...t,
                    cancelRefetch: t.cancelRefetch ? ? !0
                },
                s = wt.batch(() => M(this, Ye).findAll(e).filter(i => !i.isDisabled() && !i.isStatic()).map(i => {
                    let l = i.fetch(void 0, n);
                    return n.throwOnError || (l = l.catch(Ut)), i.state.fetchStatus === "paused" ? Promise.resolve() : l
                }));
            return Promise.all(s).then(Ut)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = M(this, Ye).build(this, t);
            return n.isStaleByTime(qr(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(Ut).catch(Ut)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = Pv(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(Ut).catch(Ut)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = Pv(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return Ou.isOnline() ? M(this, zr).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return M(this, Ye)
        }
        getMutationCache() {
            return M(this, zr)
        }
        getDefaultOptions() {
            return M(this, $r)
        }
        setDefaultOptions(e) {
            se(this, $r, e)
        }
        setQueryDefaults(e, t) {
            M(this, Io).set(aa(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...M(this, Io).values()],
                n = {};
            return t.forEach(s => {
                la(e, s.queryKey) && Object.assign(n, s.defaultOptions)
            }), n
        }
        setMutationDefaults(e, t) {
            M(this, Fo).set(aa(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...M(this, Fo).values()],
                n = {};
            return t.forEach(s => {
                la(e, s.mutationKey) && Object.assign(n, s.defaultOptions)
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...M(this, $r).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = rp(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === sp && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : { ...M(this, $r).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            M(this, Ye).clear(), M(this, zr).clear()
        }
    }, Ye = new WeakMap, zr = new WeakMap, $r = new WeakMap, Io = new WeakMap, Fo = new WeakMap, Wr = new WeakMap, Bo = new WeakMap, Vo = new WeakMap, vx),
    tS = x.createContext(void 0),
    rP = e => {
        const t = x.useContext(tS);
        if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return t
    },
    sP = ({
        client: e,
        children: t
    }) => (x.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), T.jsx(tS.Provider, {
        value: e,
        children: t
    })),
    nS = x.createContext(!1),
    oP = () => x.useContext(nS);
nS.Provider;

function iP() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        },
        reset: () => {
            e = !0
        },
        isReset: () => e
    }
}
var aP = x.createContext(iP()),
    lP = () => x.useContext(aP),
    uP = (e, t, n) => {
        const s = n != null && n.state.error && typeof e.throwOnError == "function" ? Qx(e.throwOnError, [n.state.error, n]) : e.throwOnError;
        (e.suspense || e.experimental_prefetchInRender || s) && (t.isReset() || (e.retryOnMount = !1))
    },
    cP = e => {
        x.useEffect(() => {
            e.clearReset()
        }, [e])
    },
    dP = ({
        result: e,
        errorResetBoundary: t,
        throwOnError: n,
        query: s,
        suspense: i
    }) => e.isError && !t.isReset() && !e.isFetching && s && (i && e.data === void 0 || Qx(n, [e.error, s])),
    fP = e => {
        if (e.suspense) {
            const n = i => i === "static" ? i : Math.max(i ? ? 1e3, 1e3),
                s = e.staleTime;
            e.staleTime = typeof s == "function" ? (...i) => n(s(...i)) : n(s), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3))
        }
    },
    hP = (e, t) => e.isLoading && e.isFetching && !t,
    pP = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
    _v = (e, t, n) => t.fetchOptimistic(e).catch(() => {
        n.clearReset()
    });

function mP(e, t, n) {
    var w, C, b, v;
    const s = oP(),
        i = lP(),
        l = rP(),
        u = l.defaultQueryOptions(e);
    (C = (w = l.getDefaultOptions().queries) == null ? void 0 : w._experimental_beforeQuery) == null || C.call(w, u);
    const c = l.getQueryCache().get(u.queryHash);
    u._optimisticResults = s ? "isRestoring" : "optimistic", fP(u), uP(u, i, c), cP(i);
    const f = !l.getQueryCache().get(u.queryHash),
        [h] = x.useState(() => new t(l, u)),
        m = h.getOptimisticResult(u),
        y = !s && e.subscribed !== !1;
    if (x.useSyncExternalStore(x.useCallback(S => {
            const k = y ? h.subscribe(wt.batchCalls(S)) : Ut;
            return h.updateResult(), k
        }, [h, y]), () => h.getCurrentResult(), () => h.getCurrentResult()), x.useEffect(() => {
            h.setOptions(u)
        }, [u, h]), pP(u, m)) throw _v(u, h, i);
    if (dP({
            result: m,
            errorResetBoundary: i,
            throwOnError: u.throwOnError,
            query: c,
            suspense: u.suspense
        })) throw m.error;
    if ((v = (b = l.getDefaultOptions().queries) == null ? void 0 : b._experimental_afterQuery) == null || v.call(b, u, m), u.experimental_prefetchInRender && !Is && hP(m, s)) {
        const S = f ? _v(u, h, i) : c == null ? void 0 : c.promise;
        S == null || S.catch(Ut).finally(() => {
            h.updateResult()
        })
    }
    return u.notifyOnChangeProps ? m : h.trackResult(m)
}

function gP(e, t) {
    return mP(e, GR)
}
const yP = new nP({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});
var Ta = wx();
const vP = Jh(Ta);
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ua() {
    return ua = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
        }
        return e
    }, ua.apply(this, arguments)
}
var Hr;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Hr || (Hr = {}));
const Ov = "popstate";

function wP(e) {
    e === void 0 && (e = {});

    function t(s, i) {
        let {
            pathname: l,
            search: u,
            hash: c
        } = s.location;
        return fh("", {
            pathname: l,
            search: u,
            hash: c
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function n(s, i) {
        return typeof i == "string" ? i : Nu(i)
    }
    return SP(t, n, null, e)
}

function it(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function ap(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function xP() {
    return Math.random().toString(36).substr(2, 8)
}

function Nv(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function fh(e, t, n, s) {
    return n === void 0 && (n = null), ua({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? qo(t) : t, {
        state: n,
        key: t && t.key || s || xP()
    })
}

function Nu(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: s = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), s && s !== "#" && (t += s.charAt(0) === "#" ? s : "#" + s), t
}

function qo(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let s = e.indexOf("?");
        s >= 0 && (t.search = e.substr(s), e = e.substr(0, s)), e && (t.pathname = e)
    }
    return t
}

function SP(e, t, n, s) {
    s === void 0 && (s = {});
    let {
        window: i = document.defaultView,
        v5Compat: l = !1
    } = s, u = i.history, c = Hr.Pop, f = null, h = m();
    h == null && (h = 0, u.replaceState(ua({}, u.state, {
        idx: h
    }), ""));

    function m() {
        return (u.state || {
            idx: null
        }).idx
    }

    function y() {
        c = Hr.Pop;
        let S = m(),
            k = S == null ? null : S - h;
        h = S, f && f({
            action: c,
            location: v.location,
            delta: k
        })
    }

    function w(S, k) {
        c = Hr.Push;
        let P = fh(v.location, S, k);
        h = m() + 1;
        let R = Nv(P, h),
            _ = v.createHref(P);
        try {
            u.pushState(R, "", _)
        } catch (N) {
            if (N instanceof DOMException && N.name === "DataCloneError") throw N;
            i.location.assign(_)
        }
        l && f && f({
            action: c,
            location: v.location,
            delta: 1
        })
    }

    function C(S, k) {
        c = Hr.Replace;
        let P = fh(v.location, S, k);
        h = m();
        let R = Nv(P, h),
            _ = v.createHref(P);
        u.replaceState(R, "", _), l && f && f({
            action: c,
            location: v.location,
            delta: 0
        })
    }

    function b(S) {
        let k = i.location.origin !== "null" ? i.location.origin : i.location.href,
            P = typeof S == "string" ? S : Nu(S);
        return P = P.replace(/ $/, "%20"), it(k, "No window.location.(origin|href) available to create URL for href: " + P), new URL(P, k)
    }
    let v = {
        get action() {
            return c
        },
        get location() {
            return e(i, u)
        },
        listen(S) {
            if (f) throw new Error("A history only accepts one active listener");
            return i.addEventListener(Ov, y), f = S, () => {
                i.removeEventListener(Ov, y), f = null
            }
        },
        createHref(S) {
            return t(i, S)
        },
        createURL: b,
        encodeLocation(S) {
            let k = b(S);
            return {
                pathname: k.pathname,
                search: k.search,
                hash: k.hash
            }
        },
        push: w,
        replace: C,
        go(S) {
            return u.go(S)
        }
    };
    return v
}
var Mv;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Mv || (Mv = {}));

function bP(e, t, n) {
    return n === void 0 && (n = "/"), CP(e, t, n)
}

function CP(e, t, n, s) {
    let i = typeof t == "string" ? qo(t) : t,
        l = lp(i.pathname || "/", n);
    if (l == null) return null;
    let u = rS(e);
    EP(u);
    let c = null;
    for (let f = 0; c == null && f < u.length; ++f) {
        let h = jP(l);
        c = MP(u[f], h)
    }
    return c
}

function rS(e, t, n, s) {
    t === void 0 && (t = []), n === void 0 && (n = []), s === void 0 && (s = "");
    let i = (l, u, c) => {
        let f = {
            relativePath: c === void 0 ? l.path || "" : c,
            caseSensitive: l.caseSensitive === !0,
            childrenIndex: u,
            route: l
        };
        f.relativePath.startsWith("/") && (it(f.relativePath.startsWith(s), 'Absolute route path "' + f.relativePath + '" nested under path ' + ('"' + s + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), f.relativePath = f.relativePath.slice(s.length));
        let h = Kr([s, f.relativePath]),
            m = n.concat(f);
        l.children && l.children.length > 0 && (it(l.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + h + '".')), rS(l.children, t, m, h)), !(l.path == null && !l.index) && t.push({
            path: h,
            score: OP(h, l.index),
            routesMeta: m
        })
    };
    return e.forEach((l, u) => {
        var c;
        if (l.path === "" || !((c = l.path) != null && c.includes("?"))) i(l, u);
        else
            for (let f of sS(l.path)) i(l, u, f)
    }), t
}

function sS(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...s] = t, i = n.endsWith("?"), l = n.replace(/\?$/, "");
    if (s.length === 0) return i ? [l, ""] : [l];
    let u = sS(s.join("/")),
        c = [];
    return c.push(...u.map(f => f === "" ? l : [l, f].join("/"))), i && c.push(...u), c.map(f => e.startsWith("/") && f === "" ? "/" : f)
}

function EP(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : NP(t.routesMeta.map(s => s.childrenIndex), n.routesMeta.map(s => s.childrenIndex)))
}
const TP = /^:[\w-]+$/,
    kP = 3,
    RP = 2,
    PP = 1,
    AP = 10,
    _P = -2,
    Lv = e => e === "*";

function OP(e, t) {
    let n = e.split("/"),
        s = n.length;
    return n.some(Lv) && (s += _P), t && (s += RP), n.filter(i => !Lv(i)).reduce((i, l) => i + (TP.test(l) ? kP : l === "" ? PP : AP), s)
}

function NP(e, t) {
    return e.length === t.length && e.slice(0, -1).every((s, i) => s === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function MP(e, t, n) {
    let {
        routesMeta: s
    } = e, i = {}, l = "/", u = [];
    for (let c = 0; c < s.length; ++c) {
        let f = s[c],
            h = c === s.length - 1,
            m = l === "/" ? t : t.slice(l.length) || "/",
            y = LP({
                path: f.relativePath,
                caseSensitive: f.caseSensitive,
                end: h
            }, m),
            w = f.route;
        if (!y) return null;
        Object.assign(i, y.params), u.push({
            params: i,
            pathname: Kr([l, y.pathname]),
            pathnameBase: UP(Kr([l, y.pathnameBase])),
            route: w
        }), y.pathnameBase !== "/" && (l = Kr([l, y.pathnameBase]))
    }
    return u
}

function LP(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, s] = DP(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let l = i[0],
        u = l.replace(/(.)\/+$/, "$1"),
        c = i.slice(1);
    return {
        params: s.reduce((h, m, y) => {
            let {
                paramName: w,
                isOptional: C
            } = m;
            if (w === "*") {
                let v = c[y] || "";
                u = l.slice(0, l.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const b = c[y];
            return C && !b ? h[w] = void 0 : h[w] = (b || "").replace(/%2F/g, "/"), h
        }, {}),
        pathname: l,
        pathnameBase: u,
        pattern: e
    }
}

function DP(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), ap(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let s = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (u, c, f) => (s.push({
            paramName: c,
            isOptional: f != null
        }), f ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (s.push({
        paramName: "*"
    }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), s]
}

function jP(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return ap(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function lp(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        s = e.charAt(n);
    return s && s !== "/" ? null : e.slice(n) || "/"
}
const IP = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    FP = e => IP.test(e);

function BP(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: s = "",
        hash: i = ""
    } = typeof e == "string" ? qo(e) : e, l;
    if (n)
        if (FP(n)) l = n;
        else {
            if (n.includes("//")) {
                let u = n;
                n = n.replace(/\/\/+/g, "/"), ap(!1, "Pathnames cannot have embedded double slashes - normalizing " + (u + " -> " + n))
            }
            n.startsWith("/") ? l = Dv(n.substring(1), "/") : l = Dv(n, t)
        }
    else l = t;
    return {
        pathname: l,
        search: zP(s),
        hash: $P(i)
    }
}

function Dv(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }), n.length > 1 ? n.join("/") : "/"
}

function yf(e, t, n, s) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(s) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function VP(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function oS(e, t) {
    let n = VP(e);
    return t ? n.map((s, i) => i === n.length - 1 ? s.pathname : s.pathnameBase) : n.map(s => s.pathnameBase)
}

function iS(e, t, n, s) {
    s === void 0 && (s = !1);
    let i;
    typeof e == "string" ? i = qo(e) : (i = ua({}, e), it(!i.pathname || !i.pathname.includes("?"), yf("?", "pathname", "search", i)), it(!i.pathname || !i.pathname.includes("#"), yf("#", "pathname", "hash", i)), it(!i.search || !i.search.includes("#"), yf("#", "search", "hash", i)));
    let l = e === "" || i.pathname === "",
        u = l ? "/" : i.pathname,
        c;
    if (u == null) c = n;
    else {
        let y = t.length - 1;
        if (!s && u.startsWith("..")) {
            let w = u.split("/");
            for (; w[0] === "..";) w.shift(), y -= 1;
            i.pathname = w.join("/")
        }
        c = y >= 0 ? t[y] : "/"
    }
    let f = BP(i, c),
        h = u && u !== "/" && u.endsWith("/"),
        m = (l || u === ".") && n.endsWith("/");
    return !f.pathname.endsWith("/") && (h || m) && (f.pathname += "/"), f
}
const Kr = e => e.join("/").replace(/\/\/+/g, "/"),
    UP = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    zP = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    $P = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function WP(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const aS = ["post", "put", "patch", "delete"];
new Set(aS);
const HP = ["get", ...aS];
new Set(HP);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ca() {
    return ca = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
        }
        return e
    }, ca.apply(this, arguments)
}
const up = x.createContext(null),
    qP = x.createContext(null),
    Ws = x.createContext(null),
    Qu = x.createContext(null),
    es = x.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    lS = x.createContext(null);

function KP(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    ka() || it(!1);
    let {
        basename: s,
        navigator: i
    } = x.useContext(Ws), {
        hash: l,
        pathname: u,
        search: c
    } = cS(e, {
        relative: n
    }), f = u;
    return s !== "/" && (f = u === "/" ? s : Kr([s, u])), i.createHref({
        pathname: f,
        search: c,
        hash: l
    })
}

function ka() {
    return x.useContext(Qu) != null
}

function Ko() {
    return ka() || it(!1), x.useContext(Qu).location
}

function uS(e) {
    x.useContext(Ws).static || x.useLayoutEffect(e)
}

function GP() {
    let {
        isDataRoute: e
    } = x.useContext(es);
    return e ? uA() : QP()
}

function QP() {
    ka() || it(!1);
    let e = x.useContext(up),
        {
            basename: t,
            future: n,
            navigator: s
        } = x.useContext(Ws),
        {
            matches: i
        } = x.useContext(es),
        {
            pathname: l
        } = Ko(),
        u = JSON.stringify(oS(i, n.v7_relativeSplatPath)),
        c = x.useRef(!1);
    return uS(() => {
        c.current = !0
    }), x.useCallback(function(h, m) {
        if (m === void 0 && (m = {}), !c.current) return;
        if (typeof h == "number") {
            s.go(h);
            return
        }
        let y = iS(h, JSON.parse(u), l, m.relative === "path");
        e == null && t !== "/" && (y.pathname = y.pathname === "/" ? t : Kr([t, y.pathname])), (m.replace ? s.replace : s.push)(y, m.state, m)
    }, [t, s, u, l, e])
}
const YP = x.createContext(null);

function XP(e) {
    let t = x.useContext(es).outlet;
    return t && x.createElement(YP.Provider, {
        value: e
    }, t)
}

function cS(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: s
    } = x.useContext(Ws), {
        matches: i
    } = x.useContext(es), {
        pathname: l
    } = Ko(), u = JSON.stringify(oS(i, s.v7_relativeSplatPath));
    return x.useMemo(() => iS(e, JSON.parse(u), l, n === "path"), [e, u, l, n])
}

function JP(e, t) {
    return ZP(e, t)
}

function ZP(e, t, n, s) {
    ka() || it(!1);
    let {
        navigator: i
    } = x.useContext(Ws), {
        matches: l
    } = x.useContext(es), u = l[l.length - 1], c = u ? u.params : {};
    u && u.pathname;
    let f = u ? u.pathnameBase : "/";
    u && u.route;
    let h = Ko(),
        m;
    if (t) {
        var y;
        let S = typeof t == "string" ? qo(t) : t;
        f === "/" || (y = S.pathname) != null && y.startsWith(f) || it(!1), m = S
    } else m = h;
    let w = m.pathname || "/",
        C = w;
    if (f !== "/") {
        let S = f.replace(/^\//, "").split("/");
        C = "/" + w.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let b = bP(e, {
            pathname: C
        }),
        v = sA(b && b.map(S => Object.assign({}, S, {
            params: Object.assign({}, c, S.params),
            pathname: Kr([f, i.encodeLocation ? i.encodeLocation(S.pathname).pathname : S.pathname]),
            pathnameBase: S.pathnameBase === "/" ? f : Kr([f, i.encodeLocation ? i.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
        })), l, n, s);
    return t && v ? x.createElement(Qu.Provider, {
        value: {
            location: ca({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, m),
            navigationType: Hr.Pop
        }
    }, v) : v
}

function eA() {
    let e = lA(),
        t = WP(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: i
    }, n) : null, null)
}
const tA = x.createElement(eA, null);
class nA extends x.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(es.Provider, {
            value: this.props.routeContext
        }, x.createElement(lS.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function rA(e) {
    let {
        routeContext: t,
        match: n,
        children: s
    } = e, i = x.useContext(up);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), x.createElement(es.Provider, {
        value: t
    }, s)
}

function sA(e, t, n, s) {
    var i;
    if (t === void 0 && (t = []), n === void 0 && (n = null), s === void 0 && (s = null), e == null) {
        var l;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((l = s) != null && l.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let u = e,
        c = (i = n) == null ? void 0 : i.errors;
    if (c != null) {
        let m = u.findIndex(y => y.route.id && (c == null ? void 0 : c[y.route.id]) !== void 0);
        m >= 0 || it(!1), u = u.slice(0, Math.min(u.length, m + 1))
    }
    let f = !1,
        h = -1;
    if (n && s && s.v7_partialHydration)
        for (let m = 0; m < u.length; m++) {
            let y = u[m];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (h = m), y.route.id) {
                let {
                    loaderData: w,
                    errors: C
                } = n, b = y.route.loader && w[y.route.id] === void 0 && (!C || C[y.route.id] === void 0);
                if (y.route.lazy || b) {
                    f = !0, h >= 0 ? u = u.slice(0, h + 1) : u = [u[0]];
                    break
                }
            }
        }
    return u.reduceRight((m, y, w) => {
        let C, b = !1,
            v = null,
            S = null;
        n && (C = c && y.route.id ? c[y.route.id] : void 0, v = y.route.errorElement || tA, f && (h < 0 && w === 0 ? (cA("route-fallback"), b = !0, S = null) : h === w && (b = !0, S = y.route.hydrateFallbackElement || null)));
        let k = t.concat(u.slice(0, w + 1)),
            P = () => {
                let R;
                return C ? R = v : b ? R = S : y.route.Component ? R = x.createElement(y.route.Component, null) : y.route.element ? R = y.route.element : R = m, x.createElement(rA, {
                    match: y,
                    routeContext: {
                        outlet: m,
                        matches: k,
                        isDataRoute: n != null
                    },
                    children: R
                })
            };
        return n && (y.route.ErrorBoundary || y.route.errorElement || w === 0) ? x.createElement(nA, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: C,
            children: P(),
            routeContext: {
                outlet: null,
                matches: k,
                isDataRoute: !0
            }
        }) : P()
    }, null)
}
var dS = (function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    })(dS || {}),
    fS = (function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    })(fS || {});

function oA(e) {
    let t = x.useContext(up);
    return t || it(!1), t
}

function iA(e) {
    let t = x.useContext(qP);
    return t || it(!1), t
}

function aA(e) {
    let t = x.useContext(es);
    return t || it(!1), t
}

function hS(e) {
    let t = aA(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || it(!1), n.route.id
}

function lA() {
    var e;
    let t = x.useContext(lS),
        n = iA(),
        s = hS();
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[s]
}

function uA() {
    let {
        router: e
    } = oA(dS.UseNavigateStable), t = hS(fS.UseNavigateStable), n = x.useRef(!1);
    return uS(() => {
        n.current = !0
    }), x.useCallback(function(i, l) {
        l === void 0 && (l = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, ca({
            fromRouteId: t
        }, l)))
    }, [e, t])
}
const jv = {};

function cA(e, t, n) {
    jv[e] || (jv[e] = !0)
}

function dA(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function fA(e) {
    return XP(e.context)
}

function hu(e) {
    it(!1)
}

function hA(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: s,
        navigationType: i = Hr.Pop,
        navigator: l,
        static: u = !1,
        future: c
    } = e;
    ka() && it(!1);
    let f = t.replace(/^\/*/, "/"),
        h = x.useMemo(() => ({
            basename: f,
            navigator: l,
            static: u,
            future: ca({
                v7_relativeSplatPath: !1
            }, c)
        }), [f, c, l, u]);
    typeof s == "string" && (s = qo(s));
    let {
        pathname: m = "/",
        search: y = "",
        hash: w = "",
        state: C = null,
        key: b = "default"
    } = s, v = x.useMemo(() => {
        let S = lp(m, f);
        return S == null ? null : {
            location: {
                pathname: S,
                search: y,
                hash: w,
                state: C,
                key: b
            },
            navigationType: i
        }
    }, [f, m, y, w, C, b, i]);
    return v == null ? null : x.createElement(Ws.Provider, {
        value: h
    }, x.createElement(Qu.Provider, {
        children: n,
        value: v
    }))
}

function pA(e) {
    let {
        children: t,
        location: n
    } = e;
    return JP(hh(t), n)
}
new Promise(() => {});

function hh(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return x.Children.forEach(e, (s, i) => {
        if (!x.isValidElement(s)) return;
        let l = [...t, i];
        if (s.type === x.Fragment) {
            n.push.apply(n, hh(s.props.children, l));
            return
        }
        s.type !== hu && it(!1), !s.props.index || !s.props.children || it(!1);
        let u = {
            id: s.props.id || l.join("-"),
            caseSensitive: s.props.caseSensitive,
            element: s.props.element,
            Component: s.props.Component,
            index: s.props.index,
            path: s.props.path,
            loader: s.props.loader,
            action: s.props.action,
            errorElement: s.props.errorElement,
            ErrorBoundary: s.props.ErrorBoundary,
            hasErrorBoundary: s.props.ErrorBoundary != null || s.props.errorElement != null,
            shouldRevalidate: s.props.shouldRevalidate,
            handle: s.props.handle,
            lazy: s.props.lazy
        };
        s.props.children && (u.children = hh(s.props.children, l)), n.push(u)
    }), n
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ph() {
    return ph = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
        }
        return e
    }, ph.apply(this, arguments)
}

function mA(e, t) {
    if (e == null) return {};
    var n = {},
        s = Object.keys(e),
        i, l;
    for (l = 0; l < s.length; l++) i = s[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function gA(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function yA(e, t) {
    return e.button === 0 && (!t || t === "_self") && !gA(e)
}
const vA = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
    wA = "6";
try {
    window.__reactRouterVersion = wA
} catch {}
const xA = "startTransition",
    Iv = Gu[xA];

function SA(e) {
    let {
        basename: t,
        children: n,
        future: s,
        window: i
    } = e, l = x.useRef();
    l.current == null && (l.current = wP({
        window: i,
        v5Compat: !0
    }));
    let u = l.current,
        [c, f] = x.useState({
            action: u.action,
            location: u.location
        }),
        {
            v7_startTransition: h
        } = s || {},
        m = x.useCallback(y => {
            h && Iv ? Iv(() => f(y)) : f(y)
        }, [f, h]);
    return x.useLayoutEffect(() => u.listen(m), [u, m]), x.useEffect(() => dA(s), [s]), x.createElement(hA, {
        basename: t,
        children: n,
        location: c.location,
        navigationType: c.action,
        navigator: u,
        future: s
    })
}
const bA = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    CA = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    EA = x.forwardRef(function(t, n) {
        let {
            onClick: s,
            relative: i,
            reloadDocument: l,
            replace: u,
            state: c,
            target: f,
            to: h,
            preventScrollReset: m,
            viewTransition: y
        } = t, w = mA(t, vA), {
            basename: C
        } = x.useContext(Ws), b, v = !1;
        if (typeof h == "string" && CA.test(h) && (b = h, bA)) try {
            let R = new URL(window.location.href),
                _ = h.startsWith("//") ? new URL(R.protocol + h) : new URL(h),
                N = lp(_.pathname, C);
            _.origin === R.origin && N != null ? h = N + _.search + _.hash : v = !0
        } catch {}
        let S = KP(h, {
                relative: i
            }),
            k = TA(h, {
                replace: u,
                state: c,
                target: f,
                preventScrollReset: m,
                relative: i,
                viewTransition: y
            });

        function P(R) {
            s && s(R), R.defaultPrevented || k(R)
        }
        return x.createElement("a", ph({}, w, {
            href: b || S,
            onClick: v || l ? s : P,
            ref: n,
            target: f
        }))
    });
var Fv;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(Fv || (Fv = {}));
var Bv;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Bv || (Bv = {}));

function TA(e, t) {
    let {
        target: n,
        replace: s,
        state: i,
        preventScrollReset: l,
        relative: u,
        viewTransition: c
    } = t === void 0 ? {} : t, f = GP(), h = Ko(), m = cS(e, {
        relative: u
    });
    return x.useCallback(y => {
        if (yA(y, n)) {
            y.preventDefault();
            let w = s !== void 0 ? s : Nu(h) === Nu(m);
            f(e, {
                replace: w,
                state: i,
                preventScrollReset: l,
                relative: u,
                viewTransition: c
            })
        }
    }, [h, f, m, s, i, n, e, l, u, c])
}

function pS(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: kA
} = Object.prototype, {
    getPrototypeOf: cp
} = Object, {
    iterator: Yu,
    toStringTag: mS
} = Symbol, Xu = (e => t => {
    const n = kA.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), kn = e => (e = e.toLowerCase(), t => Xu(t) === e), Ju = e => t => typeof t === e, {
    isArray: Go
} = Array, Uo = Ju("undefined");

function Ra(e) {
    return e !== null && !Uo(e) && e.constructor !== null && !Uo(e.constructor) && zt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const gS = kn("ArrayBuffer");

function RA(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && gS(e.buffer), t
}
const PA = Ju("string"),
    zt = Ju("function"),
    yS = Ju("number"),
    Pa = e => e !== null && typeof e == "object",
    AA = e => e === !0 || e === !1,
    pu = e => {
        if (Xu(e) !== "object") return !1;
        const t = cp(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(mS in e) && !(Yu in e)
    },
    _A = e => {
        if (!Pa(e) || Ra(e)) return !1;
        try {
            return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype
        } catch {
            return !1
        }
    },
    OA = kn("Date"),
    NA = kn("File"),
    MA = kn("Blob"),
    LA = kn("FileList"),
    DA = e => Pa(e) && zt(e.pipe),
    jA = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || zt(e.append) && ((t = Xu(e)) === "formdata" || t === "object" && zt(e.toString) && e.toString() === "[object FormData]"))
    },
    IA = kn("URLSearchParams"),
    [FA, BA, VA, UA] = ["ReadableStream", "Request", "Response", "Headers"].map(kn),
    zA = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Aa(e, t, {
    allOwnKeys: n = !1
} = {}) {
    if (e === null || typeof e > "u") return;
    let s, i;
    if (typeof e != "object" && (e = [e]), Go(e))
        for (s = 0, i = e.length; s < i; s++) t.call(null, e[s], s, e);
    else {
        if (Ra(e)) return;
        const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            u = l.length;
        let c;
        for (s = 0; s < u; s++) c = l[s], t.call(null, e[c], c, e)
    }
}

function vS(e, t) {
    if (Ra(e)) return null;
    t = t.toLowerCase();
    const n = Object.keys(e);
    let s = n.length,
        i;
    for (; s-- > 0;)
        if (i = n[s], t === i.toLowerCase()) return i;
    return null
}
const Es = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    wS = e => !Uo(e) && e !== Es;

function mh() {
    const {
        caseless: e,
        skipUndefined: t
    } = wS(this) && this || {}, n = {}, s = (i, l) => {
        if (l === "__proto__" || l === "constructor" || l === "prototype") return;
        const u = e && vS(n, l) || l;
        pu(n[u]) && pu(i) ? n[u] = mh(n[u], i) : pu(i) ? n[u] = mh({}, i) : Go(i) ? n[u] = i.slice() : (!t || !Uo(i)) && (n[u] = i)
    };
    for (let i = 0, l = arguments.length; i < l; i++) arguments[i] && Aa(arguments[i], s);
    return n
}
const $A = (e, t, n, {
        allOwnKeys: s
    } = {}) => (Aa(t, (i, l) => {
        n && zt(i) ? Object.defineProperty(e, l, {
            value: pS(i, n),
            writable: !0,
            enumerable: !0,
            configurable: !0
        }) : Object.defineProperty(e, l, {
            value: i,
            writable: !0,
            enumerable: !0,
            configurable: !0
        })
    }, {
        allOwnKeys: s
    }), e),
    WA = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    HA = (e, t, n, s) => {
        e.prototype = Object.create(t.prototype, s), Object.defineProperty(e.prototype, "constructor", {
            value: e,
            writable: !0,
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e, "super", {
            value: t.prototype
        }), n && Object.assign(e.prototype, n)
    },
    qA = (e, t, n, s) => {
        let i, l, u;
        const c = {};
        if (t = t || {}, e == null) return t;
        do {
            for (i = Object.getOwnPropertyNames(e), l = i.length; l-- > 0;) u = i[l], (!s || s(u, e, t)) && !c[u] && (t[u] = e[u], c[u] = !0);
            e = n !== !1 && cp(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    },
    KA = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const s = e.indexOf(t, n);
        return s !== -1 && s === n
    },
    GA = e => {
        if (!e) return null;
        if (Go(e)) return e;
        let t = e.length;
        if (!yS(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    },
    QA = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && cp(Uint8Array)),
    YA = (e, t) => {
        const s = (e && e[Yu]).call(e);
        let i;
        for (;
            (i = s.next()) && !i.done;) {
            const l = i.value;
            t.call(e, l[0], l[1])
        }
    },
    XA = (e, t) => {
        let n;
        const s = [];
        for (;
            (n = e.exec(t)) !== null;) s.push(n);
        return s
    },
    JA = kn("HTMLFormElement"),
    ZA = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, s, i) {
        return s.toUpperCase() + i
    }),
    Vv = (({
        hasOwnProperty: e
    }) => (t, n) => e.call(t, n))(Object.prototype),
    e_ = kn("RegExp"),
    xS = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            s = {};
        Aa(n, (i, l) => {
            let u;
            (u = t(i, l, e)) !== !1 && (s[l] = u || i)
        }), Object.defineProperties(e, s)
    },
    t_ = e => {
        xS(e, (t, n) => {
            if (zt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const s = e[n];
            if (zt(s)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    },
    n_ = (e, t) => {
        const n = {},
            s = i => {
                i.forEach(l => {
                    n[l] = !0
                })
            };
        return Go(e) ? s(e) : s(String(e).split(t)), n
    },
    r_ = () => {},
    s_ = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;

function o_(e) {
    return !!(e && zt(e.append) && e[mS] === "FormData" && e[Yu])
}
const i_ = e => {
        const t = new Array(10),
            n = (s, i) => {
                if (Pa(s)) {
                    if (t.indexOf(s) >= 0) return;
                    if (Ra(s)) return s;
                    if (!("toJSON" in s)) {
                        t[i] = s;
                        const l = Go(s) ? [] : {};
                        return Aa(s, (u, c) => {
                            const f = n(u, i + 1);
                            !Uo(f) && (l[c] = f)
                        }), t[i] = void 0, l
                    }
                }
                return s
            };
        return n(e, 0)
    },
    a_ = kn("AsyncFunction"),
    l_ = e => e && (Pa(e) || zt(e)) && zt(e.then) && zt(e.catch),
    SS = ((e, t) => e ? setImmediate : t ? ((n, s) => (Es.addEventListener("message", ({
        source: i,
        data: l
    }) => {
        i === Es && l === n && s.length && s.shift()()
    }, !1), i => {
        s.push(i), Es.postMessage(n, "*")
    }))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", zt(Es.postMessage)),
    u_ = typeof queueMicrotask < "u" ? queueMicrotask.bind(Es) : typeof process < "u" && process.nextTick || SS,
    c_ = e => e != null && zt(e[Yu]),
    z = {
        isArray: Go,
        isArrayBuffer: gS,
        isBuffer: Ra,
        isFormData: jA,
        isArrayBufferView: RA,
        isString: PA,
        isNumber: yS,
        isBoolean: AA,
        isObject: Pa,
        isPlainObject: pu,
        isEmptyObject: _A,
        isReadableStream: FA,
        isRequest: BA,
        isResponse: VA,
        isHeaders: UA,
        isUndefined: Uo,
        isDate: OA,
        isFile: NA,
        isBlob: MA,
        isRegExp: e_,
        isFunction: zt,
        isStream: DA,
        isURLSearchParams: IA,
        isTypedArray: QA,
        isFileList: LA,
        forEach: Aa,
        merge: mh,
        extend: $A,
        trim: zA,
        stripBOM: WA,
        inherits: HA,
        toFlatObject: qA,
        kindOf: Xu,
        kindOfTest: kn,
        endsWith: KA,
        toArray: GA,
        forEachEntry: YA,
        matchAll: XA,
        isHTMLForm: JA,
        hasOwnProperty: Vv,
        hasOwnProp: Vv,
        reduceDescriptors: xS,
        freezeMethods: t_,
        toObjectSet: n_,
        toCamelCase: ZA,
        noop: r_,
        toFiniteNumber: s_,
        findKey: vS,
        global: Es,
        isContextDefined: wS,
        isSpecCompliantForm: o_,
        toJSONObject: i_,
        isAsyncFn: a_,
        isThenable: l_,
        setImmediate: SS,
        asap: u_,
        isIterable: c_
    };
let Te = class bS extends Error {
    static from(t, n, s, i, l, u) {
        const c = new bS(t.message, n || t.code, s, i, l);
        return c.cause = t, c.name = t.name, u && Object.assign(c, u), c
    }
    constructor(t, n, s, i, l) {
        super(t), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), s && (this.config = s), i && (this.request = i), l && (this.response = l, this.status = l.status)
    }
    toJSON() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: z.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
};
Te.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
Te.ERR_BAD_OPTION = "ERR_BAD_OPTION";
Te.ECONNABORTED = "ECONNABORTED";
Te.ETIMEDOUT = "ETIMEDOUT";
Te.ERR_NETWORK = "ERR_NETWORK";
Te.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
Te.ERR_DEPRECATED = "ERR_DEPRECATED";
Te.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
Te.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
Te.ERR_CANCELED = "ERR_CANCELED";
Te.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
Te.ERR_INVALID_URL = "ERR_INVALID_URL";
const d_ = null;

function gh(e) {
    return z.isPlainObject(e) || z.isArray(e)
}

function CS(e) {
    return z.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function Uv(e, t, n) {
    return e ? e.concat(t).map(function(i, l) {
        return i = CS(i), !n && l ? "[" + i + "]" : i
    }).join(n ? "." : "") : t
}

function f_(e) {
    return z.isArray(e) && !e.some(gh)
}
const h_ = z.toFlatObject(z, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});

function Zu(e, t, n) {
    if (!z.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = z.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(v, S) {
        return !z.isUndefined(S[v])
    });
    const s = n.metaTokens,
        i = n.visitor || m,
        l = n.dots,
        u = n.indexes,
        f = (n.Blob || typeof Blob < "u" && Blob) && z.isSpecCompliantForm(t);
    if (!z.isFunction(i)) throw new TypeError("visitor must be a function");

    function h(b) {
        if (b === null) return "";
        if (z.isDate(b)) return b.toISOString();
        if (z.isBoolean(b)) return b.toString();
        if (!f && z.isBlob(b)) throw new Te("Blob is not supported. Use a Buffer instead.");
        return z.isArrayBuffer(b) || z.isTypedArray(b) ? f && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b
    }

    function m(b, v, S) {
        let k = b;
        if (b && !S && typeof b == "object") {
            if (z.endsWith(v, "{}")) v = s ? v : v.slice(0, -2), b = JSON.stringify(b);
            else if (z.isArray(b) && f_(b) || (z.isFileList(b) || z.endsWith(v, "[]")) && (k = z.toArray(b))) return v = CS(v), k.forEach(function(R, _) {
                !(z.isUndefined(R) || R === null) && t.append(u === !0 ? Uv([v], _, l) : u === null ? v : v + "[]", h(R))
            }), !1
        }
        return gh(b) ? !0 : (t.append(Uv(S, v, l), h(b)), !1)
    }
    const y = [],
        w = Object.assign(h_, {
            defaultVisitor: m,
            convertValue: h,
            isVisitable: gh
        });

    function C(b, v) {
        if (!z.isUndefined(b)) {
            if (y.indexOf(b) !== -1) throw Error("Circular reference detected in " + v.join("."));
            y.push(b), z.forEach(b, function(k, P) {
                (!(z.isUndefined(k) || k === null) && i.call(t, k, z.isString(P) ? P.trim() : P, v, w)) === !0 && C(k, v ? v.concat(P) : [P])
            }), y.pop()
        }
    }
    if (!z.isObject(e)) throw new TypeError("data must be an object");
    return C(e), t
}

function zv(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
        return t[s]
    })
}

function dp(e, t) {
    this._pairs = [], e && Zu(e, this, t)
}
const ES = dp.prototype;
ES.append = function(t, n) {
    this._pairs.push([t, n])
};
ES.toString = function(t) {
    const n = t ? function(s) {
        return t.call(this, s, zv)
    } : zv;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
};

function p_(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}

function TS(e, t, n) {
    if (!t) return e;
    const s = n && n.encode || p_,
        i = z.isFunction(n) ? {
            serialize: n
        } : n,
        l = i && i.serialize;
    let u;
    if (l ? u = l(t, i) : u = z.isURLSearchParams(t) ? t.toString() : new dp(t, i).toString(s), u) {
        const c = e.indexOf("#");
        c !== -1 && (e = e.slice(0, c)), e += (e.indexOf("?") === -1 ? "?" : "&") + u
    }
    return e
}
class $v {
    constructor() {
        this.handlers = []
    }
    use(t, n, s) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: s ? s.synchronous : !1,
            runWhen: s ? s.runWhen : null
        }), this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        z.forEach(this.handlers, function(s) {
            s !== null && t(s)
        })
    }
}
const fp = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
        legacyInterceptorReqResOrdering: !0
    },
    m_ = typeof URLSearchParams < "u" ? URLSearchParams : dp,
    g_ = typeof FormData < "u" ? FormData : null,
    y_ = typeof Blob < "u" ? Blob : null,
    v_ = {
        isBrowser: !0,
        classes: {
            URLSearchParams: m_,
            FormData: g_,
            Blob: y_
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    hp = typeof window < "u" && typeof document < "u",
    yh = typeof navigator == "object" && navigator || void 0,
    w_ = hp && (!yh || ["ReactNative", "NativeScript", "NS"].indexOf(yh.product) < 0),
    x_ = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    S_ = hp && window.location.href || "http://localhost",
    b_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: hp,
        hasStandardBrowserEnv: w_,
        hasStandardBrowserWebWorkerEnv: x_,
        navigator: yh,
        origin: S_
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Rt = { ...b_,
        ...v_
    };

function C_(e, t) {
    return Zu(e, new Rt.classes.URLSearchParams, {
        visitor: function(n, s, i, l) {
            return Rt.isNode && z.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : l.defaultVisitor.apply(this, arguments)
        },
        ...t
    })
}

function E_(e) {
    return z.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function T_(e) {
    const t = {},
        n = Object.keys(e);
    let s;
    const i = n.length;
    let l;
    for (s = 0; s < i; s++) l = n[s], t[l] = e[l];
    return t
}

function kS(e) {
    function t(n, s, i, l) {
        let u = n[l++];
        if (u === "__proto__") return !0;
        const c = Number.isFinite(+u),
            f = l >= n.length;
        return u = !u && z.isArray(i) ? i.length : u, f ? (z.hasOwnProp(i, u) ? i[u] = [i[u], s] : i[u] = s, !c) : ((!i[u] || !z.isObject(i[u])) && (i[u] = []), t(n, s, i[u], l) && z.isArray(i[u]) && (i[u] = T_(i[u])), !c)
    }
    if (z.isFormData(e) && z.isFunction(e.entries)) {
        const n = {};
        return z.forEachEntry(e, (s, i) => {
            t(E_(s), i, n, 0)
        }), n
    }
    return null
}

function k_(e, t, n) {
    if (z.isString(e)) try {
        return (t || JSON.parse)(e), z.trim(e)
    } catch (s) {
        if (s.name !== "SyntaxError") throw s
    }
    return (n || JSON.stringify)(e)
}
const _a = {
    transitional: fp,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const s = n.getContentType() || "",
            i = s.indexOf("application/json") > -1,
            l = z.isObject(t);
        if (l && z.isHTMLForm(t) && (t = new FormData(t)), z.isFormData(t)) return i ? JSON.stringify(kS(t)) : t;
        if (z.isArrayBuffer(t) || z.isBuffer(t) || z.isStream(t) || z.isFile(t) || z.isBlob(t) || z.isReadableStream(t)) return t;
        if (z.isArrayBufferView(t)) return t.buffer;
        if (z.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let c;
        if (l) {
            if (s.indexOf("application/x-www-form-urlencoded") > -1) return C_(t, this.formSerializer).toString();
            if ((c = z.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
                const f = this.env && this.env.FormData;
                return Zu(c ? {
                    "files[]": t
                } : t, f && new f, this.formSerializer)
            }
        }
        return l || i ? (n.setContentType("application/json", !1), k_(t)) : t
    }],
    transformResponse: [function(t) {
        const n = this.transitional || _a.transitional,
            s = n && n.forcedJSONParsing,
            i = this.responseType === "json";
        if (z.isResponse(t) || z.isReadableStream(t)) return t;
        if (t && z.isString(t) && (s && !this.responseType || i)) {
            const u = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(t, this.parseReviver)
            } catch (c) {
                if (u) throw c.name === "SyntaxError" ? Te.from(c, Te.ERR_BAD_RESPONSE, this, null, this.response) : c
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Rt.classes.FormData,
        Blob: Rt.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
z.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    _a.headers[e] = {}
});
const R_ = z.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    P_ = e => {
        const t = {};
        let n, s, i;
        return e && e.split(`
`).forEach(function(u) {
            i = u.indexOf(":"), n = u.substring(0, i).trim().toLowerCase(), s = u.substring(i + 1).trim(), !(!n || t[n] && R_[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s)
        }), t
    },
    Wv = Symbol("internals");

function zi(e) {
    return e && String(e).trim().toLowerCase()
}

function mu(e) {
    return e === !1 || e == null ? e : z.isArray(e) ? e.map(mu) : String(e)
}

function A_(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let s;
    for (; s = n.exec(e);) t[s[1]] = s[2];
    return t
}
const __ = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function vf(e, t, n, s, i) {
    if (z.isFunction(s)) return s.call(this, t, n);
    if (i && (t = n), !!z.isString(t)) {
        if (z.isString(s)) return t.indexOf(s) !== -1;
        if (z.isRegExp(s)) return s.test(t)
    }
}

function O_(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s)
}

function N_(e, t) {
    const n = z.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(s => {
        Object.defineProperty(e, s + n, {
            value: function(i, l, u) {
                return this[s].call(this, t, i, l, u)
            },
            configurable: !0
        })
    })
}
let $t = class {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, s) {
        const i = this;

        function l(c, f, h) {
            const m = zi(f);
            if (!m) throw new Error("header name must be a non-empty string");
            const y = z.findKey(i, m);
            (!y || i[y] === void 0 || h === !0 || h === void 0 && i[y] !== !1) && (i[y || f] = mu(c))
        }
        const u = (c, f) => z.forEach(c, (h, m) => l(h, m, f));
        if (z.isPlainObject(t) || t instanceof this.constructor) u(t, n);
        else if (z.isString(t) && (t = t.trim()) && !__(t)) u(P_(t), n);
        else if (z.isObject(t) && z.isIterable(t)) {
            let c = {},
                f, h;
            for (const m of t) {
                if (!z.isArray(m)) throw TypeError("Object iterator must return a key-value pair");
                c[h = m[0]] = (f = c[h]) ? z.isArray(f) ? [...f, m[1]] : [f, m[1]] : m[1]
            }
            u(c, n)
        } else t != null && l(n, t, s);
        return this
    }
    get(t, n) {
        if (t = zi(t), t) {
            const s = z.findKey(this, t);
            if (s) {
                const i = this[s];
                if (!n) return i;
                if (n === !0) return A_(i);
                if (z.isFunction(n)) return n.call(this, i, s);
                if (z.isRegExp(n)) return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = zi(t), t) {
            const s = z.findKey(this, t);
            return !!(s && this[s] !== void 0 && (!n || vf(this, this[s], s, n)))
        }
        return !1
    }
    delete(t, n) {
        const s = this;
        let i = !1;

        function l(u) {
            if (u = zi(u), u) {
                const c = z.findKey(s, u);
                c && (!n || vf(s, s[c], c, n)) && (delete s[c], i = !0)
            }
        }
        return z.isArray(t) ? t.forEach(l) : l(t), i
    }
    clear(t) {
        const n = Object.keys(this);
        let s = n.length,
            i = !1;
        for (; s--;) {
            const l = n[s];
            (!t || vf(this, this[l], l, t, !0)) && (delete this[l], i = !0)
        }
        return i
    }
    normalize(t) {
        const n = this,
            s = {};
        return z.forEach(this, (i, l) => {
            const u = z.findKey(s, l);
            if (u) {
                n[u] = mu(i), delete n[l];
                return
            }
            const c = t ? O_(l) : String(l).trim();
            c !== l && delete n[l], n[c] = mu(i), s[c] = !0
        }), this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return z.forEach(this, (s, i) => {
            s != null && s !== !1 && (n[i] = t && z.isArray(s) ? s.join(", ") : s)
        }), n
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const s = new this(t);
        return n.forEach(i => s.set(i)), s
    }
    static accessor(t) {
        const s = (this[Wv] = this[Wv] = {
                accessors: {}
            }).accessors,
            i = this.prototype;

        function l(u) {
            const c = zi(u);
            s[c] || (N_(i, u), s[c] = !0)
        }
        return z.isArray(t) ? t.forEach(l) : l(t), this
    }
};
$t.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
z.reduceDescriptors($t.prototype, ({
    value: e
}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(s) {
            this[n] = s
        }
    }
});
z.freezeMethods($t);

function wf(e, t) {
    const n = this || _a,
        s = t || n,
        i = $t.from(s.headers);
    let l = s.data;
    return z.forEach(e, function(c) {
        l = c.call(n, l, i.normalize(), t ? t.status : void 0)
    }), i.normalize(), l
}

function RS(e) {
    return !!(e && e.__CANCEL__)
}
let Oa = class extends Te {
    constructor(t, n, s) {
        super(t ? ? "canceled", Te.ERR_CANCELED, n, s), this.name = "CanceledError", this.__CANCEL__ = !0
    }
};

function PS(e, t, n) {
    const s = n.config.validateStatus;
    !n.status || !s || s(n.status) ? e(n) : t(new Te("Request failed with status code " + n.status, [Te.ERR_BAD_REQUEST, Te.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}

function M_(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function L_(e, t) {
    e = e || 10;
    const n = new Array(e),
        s = new Array(e);
    let i = 0,
        l = 0,
        u;
    return t = t !== void 0 ? t : 1e3,
        function(f) {
            const h = Date.now(),
                m = s[l];
            u || (u = h), n[i] = f, s[i] = h;
            let y = l,
                w = 0;
            for (; y !== i;) w += n[y++], y = y % e;
            if (i = (i + 1) % e, i === l && (l = (l + 1) % e), h - u < t) return;
            const C = m && h - m;
            return C ? Math.round(w * 1e3 / C) : void 0
        }
}

function D_(e, t) {
    let n = 0,
        s = 1e3 / t,
        i, l;
    const u = (h, m = Date.now()) => {
        n = m, i = null, l && (clearTimeout(l), l = null), e(...h)
    };
    return [(...h) => {
        const m = Date.now(),
            y = m - n;
        y >= s ? u(h, m) : (i = h, l || (l = setTimeout(() => {
            l = null, u(i)
        }, s - y)))
    }, () => i && u(i)]
}
const Mu = (e, t, n = 3) => {
        let s = 0;
        const i = L_(50, 250);
        return D_(l => {
            const u = l.loaded,
                c = l.lengthComputable ? l.total : void 0,
                f = u - s,
                h = i(f),
                m = u <= c;
            s = u;
            const y = {
                loaded: u,
                total: c,
                progress: c ? u / c : void 0,
                bytes: f,
                rate: h || void 0,
                estimated: h && c && m ? (c - u) / h : void 0,
                event: l,
                lengthComputable: c != null,
                [t ? "download" : "upload"]: !0
            };
            e(y)
        }, n)
    },
    Hv = (e, t) => {
        const n = e != null;
        return [s => t[0]({
            lengthComputable: n,
            total: e,
            loaded: s
        }), t[1]]
    },
    qv = e => (...t) => z.asap(() => e(...t)),
    j_ = Rt.hasStandardBrowserEnv ? ((e, t) => n => (n = new URL(n, Rt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(Rt.origin), Rt.navigator && /(msie|trident)/i.test(Rt.navigator.userAgent)) : () => !0,
    I_ = Rt.hasStandardBrowserEnv ? {
        write(e, t, n, s, i, l, u) {
            if (typeof document > "u") return;
            const c = [`${e}=${encodeURIComponent(t)}`];
            z.isNumber(n) && c.push(`expires=${new Date(n).toUTCString()}`), z.isString(s) && c.push(`path=${s}`), z.isString(i) && c.push(`domain=${i}`), l === !0 && c.push("secure"), z.isString(u) && c.push(`SameSite=${u}`), document.cookie = c.join("; ")
        },
        read(e) {
            if (typeof document > "u") return null;
            const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
            return t ? decodeURIComponent(t[1]) : null
        },
        remove(e) {
            this.write(e, "", Date.now() - 864e5, "/")
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };

function F_(e) {
    return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function B_(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function AS(e, t, n) {
    let s = !F_(t);
    return e && (s || n == !1) ? B_(e, t) : t
}
const Kv = e => e instanceof $t ? { ...e
} : e;

function Fs(e, t) {
    t = t || {};
    const n = {};

    function s(h, m, y, w) {
        return z.isPlainObject(h) && z.isPlainObject(m) ? z.merge.call({
            caseless: w
        }, h, m) : z.isPlainObject(m) ? z.merge({}, m) : z.isArray(m) ? m.slice() : m
    }

    function i(h, m, y, w) {
        if (z.isUndefined(m)) {
            if (!z.isUndefined(h)) return s(void 0, h, y, w)
        } else return s(h, m, y, w)
    }

    function l(h, m) {
        if (!z.isUndefined(m)) return s(void 0, m)
    }

    function u(h, m) {
        if (z.isUndefined(m)) {
            if (!z.isUndefined(h)) return s(void 0, h)
        } else return s(void 0, m)
    }

    function c(h, m, y) {
        if (y in t) return s(h, m);
        if (y in e) return s(void 0, h)
    }
    const f = {
        url: l,
        method: l,
        data: l,
        baseURL: u,
        transformRequest: u,
        transformResponse: u,
        paramsSerializer: u,
        timeout: u,
        timeoutMessage: u,
        withCredentials: u,
        withXSRFToken: u,
        adapter: u,
        responseType: u,
        xsrfCookieName: u,
        xsrfHeaderName: u,
        onUploadProgress: u,
        onDownloadProgress: u,
        decompress: u,
        maxContentLength: u,
        maxBodyLength: u,
        beforeRedirect: u,
        transport: u,
        httpAgent: u,
        httpsAgent: u,
        cancelToken: u,
        socketPath: u,
        responseEncoding: u,
        validateStatus: c,
        headers: (h, m, y) => i(Kv(h), Kv(m), y, !0)
    };
    return z.forEach(Object.keys({ ...e,
        ...t
    }), function(m) {
        if (m === "__proto__" || m === "constructor" || m === "prototype") return;
        const y = z.hasOwnProp(f, m) ? f[m] : i,
            w = y(e[m], t[m], m);
        z.isUndefined(w) && y !== c || (n[m] = w)
    }), n
}
const _S = e => {
        const t = Fs({}, e);
        let {
            data: n,
            withXSRFToken: s,
            xsrfHeaderName: i,
            xsrfCookieName: l,
            headers: u,
            auth: c
        } = t;
        if (t.headers = u = $t.from(u), t.url = TS(AS(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && u.set("Authorization", "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))), z.isFormData(n)) {
            if (Rt.hasStandardBrowserEnv || Rt.hasStandardBrowserWebWorkerEnv) u.setContentType(void 0);
            else if (z.isFunction(n.getHeaders)) {
                const f = n.getHeaders(),
                    h = ["content-type", "content-length"];
                Object.entries(f).forEach(([m, y]) => {
                    h.includes(m.toLowerCase()) && u.set(m, y)
                })
            }
        }
        if (Rt.hasStandardBrowserEnv && (s && z.isFunction(s) && (s = s(t)), s || s !== !1 && j_(t.url))) {
            const f = i && l && I_.read(l);
            f && u.set(i, f)
        }
        return t
    },
    V_ = typeof XMLHttpRequest < "u",
    U_ = V_ && function(e) {
        return new Promise(function(n, s) {
            const i = _S(e);
            let l = i.data;
            const u = $t.from(i.headers).normalize();
            let {
                responseType: c,
                onUploadProgress: f,
                onDownloadProgress: h
            } = i, m, y, w, C, b;

            function v() {
                C && C(), b && b(), i.cancelToken && i.cancelToken.unsubscribe(m), i.signal && i.signal.removeEventListener("abort", m)
            }
            let S = new XMLHttpRequest;
            S.open(i.method.toUpperCase(), i.url, !0), S.timeout = i.timeout;

            function k() {
                if (!S) return;
                const R = $t.from("getAllResponseHeaders" in S && S.getAllResponseHeaders()),
                    N = {
                        data: !c || c === "text" || c === "json" ? S.responseText : S.response,
                        status: S.status,
                        statusText: S.statusText,
                        headers: R,
                        config: e,
                        request: S
                    };
                PS(function(U) {
                    n(U), v()
                }, function(U) {
                    s(U), v()
                }, N), S = null
            }
            "onloadend" in S ? S.onloadend = k : S.onreadystatechange = function() {
                !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(k)
            }, S.onabort = function() {
                S && (s(new Te("Request aborted", Te.ECONNABORTED, e, S)), S = null)
            }, S.onerror = function(_) {
                const N = _ && _.message ? _.message : "Network Error",
                    B = new Te(N, Te.ERR_NETWORK, e, S);
                B.event = _ || null, s(B), S = null
            }, S.ontimeout = function() {
                let _ = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
                const N = i.transitional || fp;
                i.timeoutErrorMessage && (_ = i.timeoutErrorMessage), s(new Te(_, N.clarifyTimeoutError ? Te.ETIMEDOUT : Te.ECONNABORTED, e, S)), S = null
            }, l === void 0 && u.setContentType(null), "setRequestHeader" in S && z.forEach(u.toJSON(), function(_, N) {
                S.setRequestHeader(N, _)
            }), z.isUndefined(i.withCredentials) || (S.withCredentials = !!i.withCredentials), c && c !== "json" && (S.responseType = i.responseType), h && ([w, b] = Mu(h, !0), S.addEventListener("progress", w)), f && S.upload && ([y, C] = Mu(f), S.upload.addEventListener("progress", y), S.upload.addEventListener("loadend", C)), (i.cancelToken || i.signal) && (m = R => {
                S && (s(!R || R.type ? new Oa(null, e, S) : R), S.abort(), S = null)
            }, i.cancelToken && i.cancelToken.subscribe(m), i.signal && (i.signal.aborted ? m() : i.signal.addEventListener("abort", m)));
            const P = M_(i.url);
            if (P && Rt.protocols.indexOf(P) === -1) {
                s(new Te("Unsupported protocol " + P + ":", Te.ERR_BAD_REQUEST, e));
                return
            }
            S.send(l || null)
        })
    },
    z_ = (e, t) => {
        const {
            length: n
        } = e = e ? e.filter(Boolean) : [];
        if (t || n) {
            let s = new AbortController,
                i;
            const l = function(h) {
                if (!i) {
                    i = !0, c();
                    const m = h instanceof Error ? h : this.reason;
                    s.abort(m instanceof Te ? m : new Oa(m instanceof Error ? m.message : m))
                }
            };
            let u = t && setTimeout(() => {
                u = null, l(new Te(`timeout of ${t}ms exceeded`, Te.ETIMEDOUT))
            }, t);
            const c = () => {
                e && (u && clearTimeout(u), u = null, e.forEach(h => {
                    h.unsubscribe ? h.unsubscribe(l) : h.removeEventListener("abort", l)
                }), e = null)
            };
            e.forEach(h => h.addEventListener("abort", l));
            const {
                signal: f
            } = s;
            return f.unsubscribe = () => z.asap(c), f
        }
    },
    $_ = function*(e, t) {
        let n = e.byteLength;
        if (n < t) {
            yield e;
            return
        }
        let s = 0,
            i;
        for (; s < n;) i = s + t, yield e.slice(s, i), s = i
    },
    W_ = async function*(e, t) {
        for await (const n of H_(e)) yield* $_(n, t)
    },
    H_ = async function*(e) {
        if (e[Symbol.asyncIterator]) {
            yield* e;
            return
        }
        const t = e.getReader();
        try {
            for (;;) {
                const {
                    done: n,
                    value: s
                } = await t.read();
                if (n) break;
                yield s
            }
        } finally {
            await t.cancel()
        }
    },
    Gv = (e, t, n, s) => {
        const i = W_(e, t);
        let l = 0,
            u, c = f => {
                u || (u = !0, s && s(f))
            };
        return new ReadableStream({
            async pull(f) {
                try {
                    const {
                        done: h,
                        value: m
                    } = await i.next();
                    if (h) {
                        c(), f.close();
                        return
                    }
                    let y = m.byteLength;
                    if (n) {
                        let w = l += y;
                        n(w)
                    }
                    f.enqueue(new Uint8Array(m))
                } catch (h) {
                    throw c(h), h
                }
            },
            cancel(f) {
                return c(f), i.return()
            }
        }, {
            highWaterMark: 2
        })
    },
    Qv = 64 * 1024,
    {
        isFunction: Jl
    } = z,
    q_ = (({
        Request: e,
        Response: t
    }) => ({
        Request: e,
        Response: t
    }))(z.global),
    {
        ReadableStream: Yv,
        TextEncoder: Xv
    } = z.global,
    Jv = (e, ...t) => {
        try {
            return !!e(...t)
        } catch {
            return !1
        }
    },
    K_ = e => {
        e = z.merge.call({
            skipUndefined: !0
        }, q_, e);
        const {
            fetch: t,
            Request: n,
            Response: s
        } = e, i = t ? Jl(t) : typeof fetch == "function", l = Jl(n), u = Jl(s);
        if (!i) return !1;
        const c = i && Jl(Yv),
            f = i && (typeof Xv == "function" ? (b => v => b.encode(v))(new Xv) : async b => new Uint8Array(await new n(b).arrayBuffer())),
            h = l && c && Jv(() => {
                let b = !1;
                const v = new n(Rt.origin, {
                    body: new Yv,
                    method: "POST",
                    get duplex() {
                        return b = !0, "half"
                    }
                }).headers.has("Content-Type");
                return b && !v
            }),
            m = u && c && Jv(() => z.isReadableStream(new s("").body)),
            y = {
                stream: m && (b => b.body)
            };
        i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(b => {
            !y[b] && (y[b] = (v, S) => {
                let k = v && v[b];
                if (k) return k.call(v);
                throw new Te(`Response type '${b}' is not supported`, Te.ERR_NOT_SUPPORT, S)
            })
        });
        const w = async b => {
                if (b == null) return 0;
                if (z.isBlob(b)) return b.size;
                if (z.isSpecCompliantForm(b)) return (await new n(Rt.origin, {
                    method: "POST",
                    body: b
                }).arrayBuffer()).byteLength;
                if (z.isArrayBufferView(b) || z.isArrayBuffer(b)) return b.byteLength;
                if (z.isURLSearchParams(b) && (b = b + ""), z.isString(b)) return (await f(b)).byteLength
            },
            C = async (b, v) => {
                const S = z.toFiniteNumber(b.getContentLength());
                return S ? ? w(v)
            };
        return async b => {
            let {
                url: v,
                method: S,
                data: k,
                signal: P,
                cancelToken: R,
                timeout: _,
                onDownloadProgress: N,
                onUploadProgress: B,
                responseType: U,
                headers: j,
                withCredentials: G = "same-origin",
                fetchOptions: J
            } = _S(b), ee = t || fetch;
            U = U ? (U + "").toLowerCase() : "text";
            let de = z_([P, R && R.toAbortSignal()], _),
                ge = null;
            const le = de && de.unsubscribe && (() => {
                de.unsubscribe()
            });
            let Ce;
            try {
                if (B && h && S !== "get" && S !== "head" && (Ce = await C(j, k)) !== 0) {
                    let D = new n(v, {
                            method: "POST",
                            body: k,
                            duplex: "half"
                        }),
                        H;
                    if (z.isFormData(k) && (H = D.headers.get("content-type")) && j.setContentType(H), D.body) {
                        const [we, ve] = Hv(Ce, Mu(qv(B)));
                        k = Gv(D.body, Qv, we, ve)
                    }
                }
                z.isString(G) || (G = G ? "include" : "omit");
                const te = l && "credentials" in n.prototype,
                    Z = { ...J,
                        signal: de,
                        method: S.toUpperCase(),
                        headers: j.normalize().toJSON(),
                        body: k,
                        duplex: "half",
                        credentials: te ? G : void 0
                    };
                ge = l && new n(v, Z);
                let $ = await (l ? ee(ge, J) : ee(v, Z));
                const X = m && (U === "stream" || U === "response");
                if (m && (N || X && le)) {
                    const D = {};
                    ["status", "statusText", "headers"].forEach(pe => {
                        D[pe] = $[pe]
                    });
                    const H = z.toFiniteNumber($.headers.get("content-length")),
                        [we, ve] = N && Hv(H, Mu(qv(N), !0)) || [];
                    $ = new s(Gv($.body, Qv, we, () => {
                        ve && ve(), le && le()
                    }), D)
                }
                U = U || "text";
                let W = await y[z.findKey(y, U) || "text"]($, b);
                return !X && le && le(), await new Promise((D, H) => {
                    PS(D, H, {
                        data: W,
                        headers: $t.from($.headers),
                        status: $.status,
                        statusText: $.statusText,
                        config: b,
                        request: ge
                    })
                })
            } catch (te) {
                throw le && le(), te && te.name === "TypeError" && /Load failed|fetch/i.test(te.message) ? Object.assign(new Te("Network Error", Te.ERR_NETWORK, b, ge, te && te.response), {
                    cause: te.cause || te
                }) : Te.from(te, te && te.code, b, ge, te && te.response)
            }
        }
    },
    G_ = new Map,
    OS = e => {
        let t = e && e.env || {};
        const {
            fetch: n,
            Request: s,
            Response: i
        } = t, l = [s, i, n];
        let u = l.length,
            c = u,
            f, h, m = G_;
        for (; c--;) f = l[c], h = m.get(f), h === void 0 && m.set(f, h = c ? new Map : K_(t)), m = h;
        return h
    };
OS();
const pp = {
    http: d_,
    xhr: U_,
    fetch: {
        get: OS
    }
};
z.forEach(pp, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
});
const Zv = e => `- ${e}`,
    Q_ = e => z.isFunction(e) || e === null || e === !1;

function Y_(e, t) {
    e = z.isArray(e) ? e : [e];
    const {
        length: n
    } = e;
    let s, i;
    const l = {};
    for (let u = 0; u < n; u++) {
        s = e[u];
        let c;
        if (i = s, !Q_(s) && (i = pp[(c = String(s)).toLowerCase()], i === void 0)) throw new Te(`Unknown adapter '${c}'`);
        if (i && (z.isFunction(i) || (i = i.get(t)))) break;
        l[c || "#" + u] = i
    }
    if (!i) {
        const u = Object.entries(l).map(([f, h]) => `adapter ${f} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build"));
        let c = n ? u.length > 1 ? `since :
` + u.map(Zv).join(`
`) : " " + Zv(u[0]) : "as no adapter specified";
        throw new Te("There is no suitable adapter to dispatch the request " + c, "ERR_NOT_SUPPORT")
    }
    return i
}
const NS = {
    getAdapter: Y_,
    adapters: pp
};

function xf(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Oa(null, e)
}

function e0(e) {
    return xf(e), e.headers = $t.from(e.headers), e.data = wf.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), NS.getAdapter(e.adapter || _a.adapter, e)(e).then(function(s) {
        return xf(e), s.data = wf.call(e, e.transformResponse, s), s.headers = $t.from(s.headers), s
    }, function(s) {
        return RS(s) || (xf(e), s && s.response && (s.response.data = wf.call(e, e.transformResponse, s.response), s.response.headers = $t.from(s.response.headers))), Promise.reject(s)
    })
}
const MS = "1.13.5",
    ec = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    ec[e] = function(s) {
        return typeof s === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const t0 = {};
ec.transitional = function(t, n, s) {
    function i(l, u) {
        return "[Axios v" + MS + "] Transitional option '" + l + "'" + u + (s ? ". " + s : "")
    }
    return (l, u, c) => {
        if (t === !1) throw new Te(i(u, " has been removed" + (n ? " in " + n : "")), Te.ERR_DEPRECATED);
        return n && !t0[u] && (t0[u] = !0, console.warn(i(u, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(l, u, c) : !0
    }
};
ec.spelling = function(t) {
    return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0)
};

function X_(e, t, n) {
    if (typeof e != "object") throw new Te("options must be an object", Te.ERR_BAD_OPTION_VALUE);
    const s = Object.keys(e);
    let i = s.length;
    for (; i-- > 0;) {
        const l = s[i],
            u = t[l];
        if (u) {
            const c = e[l],
                f = c === void 0 || u(c, l, e);
            if (f !== !0) throw new Te("option " + l + " must be " + f, Te.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new Te("Unknown option " + l, Te.ERR_BAD_OPTION)
    }
}
const gu = {
        assertOptions: X_,
        validators: ec
    },
    on = gu.validators;
let Ds = class {
    constructor(t) {
        this.defaults = t || {}, this.interceptors = {
            request: new $v,
            response: new $v
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (s) {
            if (s instanceof Error) {
                let i = {};
                Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error;
                const l = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                try {
                    s.stack ? l && !String(s.stack).endsWith(l.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + l) : s.stack = l
                } catch {}
            }
            throw s
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Fs(this.defaults, n);
        const {
            transitional: s,
            paramsSerializer: i,
            headers: l
        } = n;
        s !== void 0 && gu.assertOptions(s, {
            silentJSONParsing: on.transitional(on.boolean),
            forcedJSONParsing: on.transitional(on.boolean),
            clarifyTimeoutError: on.transitional(on.boolean),
            legacyInterceptorReqResOrdering: on.transitional(on.boolean)
        }, !1), i != null && (z.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : gu.assertOptions(i, {
            encode: on.function,
            serialize: on.function
        }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), gu.assertOptions(n, {
            baseUrl: on.spelling("baseURL"),
            withXsrfToken: on.spelling("withXSRFToken")
        }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let u = l && z.merge(l.common, l[n.method]);
        l && z.forEach(["delete", "get", "head", "post", "put", "patch", "common"], b => {
            delete l[b]
        }), n.headers = $t.concat(u, l);
        const c = [];
        let f = !0;
        this.interceptors.request.forEach(function(v) {
            if (typeof v.runWhen == "function" && v.runWhen(n) === !1) return;
            f = f && v.synchronous;
            const S = n.transitional || fp;
            S && S.legacyInterceptorReqResOrdering ? c.unshift(v.fulfilled, v.rejected) : c.push(v.fulfilled, v.rejected)
        });
        const h = [];
        this.interceptors.response.forEach(function(v) {
            h.push(v.fulfilled, v.rejected)
        });
        let m, y = 0,
            w;
        if (!f) {
            const b = [e0.bind(this), void 0];
            for (b.unshift(...c), b.push(...h), w = b.length, m = Promise.resolve(n); y < w;) m = m.then(b[y++], b[y++]);
            return m
        }
        w = c.length;
        let C = n;
        for (; y < w;) {
            const b = c[y++],
                v = c[y++];
            try {
                C = b(C)
            } catch (S) {
                v.call(this, S);
                break
            }
        }
        try {
            m = e0.call(this, C)
        } catch (b) {
            return Promise.reject(b)
        }
        for (y = 0, w = h.length; y < w;) m = m.then(h[y++], h[y++]);
        return m
    }
    getUri(t) {
        t = Fs(this.defaults, t);
        const n = AS(t.baseURL, t.url, t.allowAbsoluteUrls);
        return TS(n, t.params, t.paramsSerializer)
    }
};
z.forEach(["delete", "get", "head", "options"], function(t) {
    Ds.prototype[t] = function(n, s) {
        return this.request(Fs(s || {}, {
            method: t,
            url: n,
            data: (s || {}).data
        }))
    }
});
z.forEach(["post", "put", "patch"], function(t) {
    function n(s) {
        return function(l, u, c) {
            return this.request(Fs(c || {}, {
                method: t,
                headers: s ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: l,
                data: u
            }))
        }
    }
    Ds.prototype[t] = n(), Ds.prototype[t + "Form"] = n(!0)
});
let J_ = class LS {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(l) {
            n = l
        });
        const s = this;
        this.promise.then(i => {
            if (!s._listeners) return;
            let l = s._listeners.length;
            for (; l-- > 0;) s._listeners[l](i);
            s._listeners = null
        }), this.promise.then = i => {
            let l;
            const u = new Promise(c => {
                s.subscribe(c), l = c
            }).then(i);
            return u.cancel = function() {
                s.unsubscribe(l)
            }, u
        }, t(function(l, u, c) {
            s.reason || (s.reason = new Oa(l, u, c), n(s.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController,
            n = s => {
                t.abort(s)
            };
        return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal
    }
    static source() {
        let t;
        return {
            token: new LS(function(i) {
                t = i
            }),
            cancel: t
        }
    }
};

function Z_(e) {
    return function(n) {
        return e.apply(null, n)
    }
}

function eO(e) {
    return z.isObject(e) && e.isAxiosError === !0
}
const vh = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(vh).forEach(([e, t]) => {
    vh[t] = e
});

function DS(e) {
    const t = new Ds(e),
        n = pS(Ds.prototype.request, t);
    return z.extend(n, Ds.prototype, t, {
        allOwnKeys: !0
    }), z.extend(n, t, null, {
        allOwnKeys: !0
    }), n.create = function(i) {
        return DS(Fs(e, i))
    }, n
}
const tt = DS(_a);
tt.Axios = Ds;
tt.CanceledError = Oa;
tt.CancelToken = J_;
tt.isCancel = RS;
tt.VERSION = MS;
tt.toFormData = Zu;
tt.AxiosError = Te;
tt.Cancel = tt.CanceledError;
tt.all = function(t) {
    return Promise.all(t)
};
tt.spread = Z_;
tt.isAxiosError = eO;
tt.mergeConfig = Fs;
tt.AxiosHeaders = $t;
tt.formToJSON = e => kS(z.isHTMLForm(e) ? new FormData(e) : e);
tt.getAdapter = NS.getAdapter;
tt.HttpStatusCode = vh;
tt.default = tt;
const {
    Axios: E3,
    AxiosError: T3,
    CanceledError: k3,
    isCancel: R3,
    CancelToken: P3,
    VERSION: A3,
    all: _3,
    Cancel: O3,
    isAxiosError: N3,
    spread: M3,
    toFormData: L3,
    AxiosHeaders: D3,
    HttpStatusCode: j3,
    formToJSON: I3,
    getAdapter: F3,
    mergeConfig: B3
} = tt, tO = typeof window > "u", n0 = !tO && window.self !== window.top, Sf = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), yt = [];
for (let e = 0; e < 256; ++e) yt.push((e + 256).toString(16).slice(1));

function nO(e, t = 0) {
    return (yt[e[t + 0]] + yt[e[t + 1]] + yt[e[t + 2]] + yt[e[t + 3]] + "-" + yt[e[t + 4]] + yt[e[t + 5]] + "-" + yt[e[t + 6]] + yt[e[t + 7]] + "-" + yt[e[t + 8]] + yt[e[t + 9]] + "-" + yt[e[t + 10]] + yt[e[t + 11]] + yt[e[t + 12]] + yt[e[t + 13]] + yt[e[t + 14]] + yt[e[t + 15]]).toLowerCase()
}
let bf;
const rO = new Uint8Array(16);

function sO() {
    if (!bf) {
        if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        bf = crypto.getRandomValues.bind(crypto)
    }
    return bf(rO)
}
const oO = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    r0 = {
        randomUUID: oO
    };

function iO(e, t, n) {
    var i;
    e = e || {};
    const s = e.random ? ? ((i = e.rng) == null ? void 0 : i.call(e)) ? ? sO();
    if (s.length < 16) throw new Error("Random bytes length must be >= 16");
    return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, nO(s)
}

function aO(e, t, n) {
    return r0.randomUUID && !e ? r0.randomUUID() : iO(e)
}
class lO extends Error {
    constructor(t, n, s, i, l) {
        super(t), this.name = "Base44Error", this.status = n, this.code = s, this.data = i, this.originalError = l
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}

function Ki({
    baseURL: e,
    headers: t = {},
    token: n,
    interceptResponses: s = !0,
    onError: i
}) {
    const l = tt.create({
        baseURL: e,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...t
        }
    });
    return n && (l.defaults.headers.common.Authorization = `Bearer ${n}`), l.interceptors.request.use(u => {
        typeof window < "u" && u.headers.set("X-Origin-URL", window.location.href);
        const c = aO();
        if (u.requestId = c, n0) try {
            window.parent.postMessage({
                type: "api-request-start",
                requestId: c,
                data: {
                    url: e + u.url,
                    method: u.method,
                    body: u.data instanceof FormData ? "[FormData object]" : u.data
                }
            }, "*")
        } catch {}
        return u
    }), s && l.interceptors.response.use(u => {
        var c;
        const f = (c = u.config) === null || c === void 0 ? void 0 : c.requestId;
        try {
            n0 && f && window.parent.postMessage({
                type: "api-request-end",
                requestId: f,
                data: {
                    statusCode: u.status,
                    response: u.data
                }
            }, "*")
        } catch {}
        return u.data
    }, u => {
        var c, f, h, m, y, w, C, b;
        const v = ((f = (c = u.response) === null || c === void 0 ? void 0 : c.data) === null || f === void 0 ? void 0 : f.message) || ((m = (h = u.response) === null || h === void 0 ? void 0 : h.data) === null || m === void 0 ? void 0 : m.detail) || u.message,
            S = new lO(v, (y = u.response) === null || y === void 0 ? void 0 : y.status, (C = (w = u.response) === null || w === void 0 ? void 0 : w.data) === null || C === void 0 ? void 0 : C.code, (b = u.response) === null || b === void 0 ? void 0 : b.data, u);
        return i == null || i(S), Promise.reject(S)
    }), l
}

function s0(e) {
    const {
        axios: t,
        appId: n,
        getSocket: s
    } = e;
    return new Proxy({}, {
        get(i, l) {
            if (!(typeof l != "string" || l === "then" || l.startsWith("_"))) return cO(t, n, l, s)
        }
    })
}

function uO(e) {
    var t;
    try {
        const n = JSON.parse(e);
        return {
            type: n.type,
            data: n.data,
            id: n.id || ((t = n.data) === null || t === void 0 ? void 0 : t.id),
            timestamp: n.timestamp || new Date().toISOString()
        }
    } catch (n) {
        return console.warn("[Base44 SDK] Failed to parse realtime message:", n), null
    }
}

function cO(e, t, n, s) {
    const i = `/apps/${t}/entities/${n}`;
    return {
        async list(l, u, c, f) {
            const h = {};
            return l && (h.sort = l), u && (h.limit = u), c && (h.skip = c), f && (h.fields = Array.isArray(f) ? f.join(",") : f), e.get(i, {
                params: h
            })
        },
        async filter(l, u, c, f, h) {
            const m = {
                q: JSON.stringify(l)
            };
            return u && (m.sort = u), c && (m.limit = c), f && (m.skip = f), h && (m.fields = Array.isArray(h) ? h.join(",") : h), e.get(i, {
                params: m
            })
        },
        async get(l) {
            return e.get(`${i}/${l}`)
        },
        async create(l) {
            return e.post(i, l)
        },
        async update(l, u) {
            return e.put(`${i}/${l}`, u)
        },
        async delete(l) {
            return e.delete(`${i}/${l}`)
        },
        async deleteMany(l) {
            return e.delete(i, {
                data: l
            })
        },
        async bulkCreate(l) {
            return e.post(`${i}/bulk`, l)
        },
        async updateMany(l, u) {
            return e.patch(`${i}/update-many`, {
                query: l,
                data: u
            })
        },
        async bulkUpdate(l) {
            return e.put(`${i}/bulk`, l)
        },
        async importEntities(l) {
            const u = new FormData;
            return u.append("file", l, l.name), e.post(`${i}/import`, u, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        },
        subscribe(l) {
            const u = `entities:${t}:${n}`;
            return s().subscribeToRoom(u, {
                update_model: h => {
                    const m = uO(h.data);
                    if (m) try {
                        l(m)
                    } catch (y) {
                        console.error("[Base44 SDK] Subscription callback error:", y)
                    }
                }
            })
        }
    }
}

function dO(e, t) {
    return {
        async call(n, s, i) {
            if (!(n != null && n.trim())) throw new Error("Integration slug is required and cannot be empty");
            if (!(s != null && s.trim())) throw new Error("Operation ID is required and cannot be empty");
            const {
                pathParams: l,
                queryParams: u,
                ...c
            } = i ? ? {}, f = { ...c,
                ...l && {
                    path_params: l
                },
                ...u && {
                    query_params: u
                }
            };
            return await e.post(`/apps/${t}/integrations/custom/${n}/${s}`, f)
        }
    }
}

function o0(e, t) {
    const n = dO(e, t);
    return new Proxy({}, {
        get(s, i) {
            if (!(typeof i != "string" || i === "then" || i.startsWith("_"))) return i === "custom" ? n : new Proxy({}, {
                get(l, u) {
                    if (!(typeof u != "string" || u === "then" || u.startsWith("_"))) return async c => {
                        if (typeof c == "string") throw new Error(`Integration ${u} must receive an object with named parameters, received: ${c}`);
                        let f, h;
                        return c instanceof FormData || c && Object.values(c).some(m => m instanceof File) ? (f = new FormData, Object.keys(c).forEach(m => {
                            c[m] instanceof File ? f.append(m, c[m], c[m].name) : typeof c[m] == "object" && c[m] !== null ? f.append(m, JSON.stringify(c[m])) : f.append(m, c[m])
                        }), h = "multipart/form-data") : (f = c, h = "application/json"), i === "Core" ? e.post(`/apps/${t}/integration-endpoints/Core/${u}`, f || c, {
                            headers: {
                                "Content-Type": h
                            }
                        }) : e.post(`/apps/${t}/integration-endpoints/installable/${i}/integration-endpoints/${u}`, f || c, {
                            headers: {
                                "Content-Type": h
                            }
                        })
                    }
                }
            })
        }
    })
}

function fO(e, t, n, s) {
    return {
        async me() {
            return e.get(`/apps/${n}/entities/User/me`)
        },
        async updateMe(i) {
            return e.put(`/apps/${n}/entities/User/me`, i)
        },
        redirectToLogin(i) {
            if (typeof window > "u") throw new Error("Login method can only be used in a browser environment");
            const l = i ? new URL(i, window.location.origin).toString() : window.location.href,
                u = `${s.appBaseUrl}/login?from_url=${encodeURIComponent(l)}`;
            window.location.href = u
        },
        loginWithProvider(i, l = "/") {
            const u = new URL(l, window.location.origin).toString(),
                c = `app_id=${n}&from_url=${encodeURIComponent(u)}`;
            let f;
            i === "sso" ? f = `/apps/${n}/auth/sso/login` : f = `/apps/auth${i==="google"?"":`/${i}`}/login`;
            const h = `${s.appBaseUrl}/api${f}?${c}`;
            window.location.href = h
        },
        logout(i) {
            if (delete e.defaults.headers.common.Authorization, typeof window < "u") {
                if (window.localStorage) try {
                    window.localStorage.removeItem("base44_access_token"), window.localStorage.removeItem("token")
                } catch (c) {
                    console.error("Failed to remove token from localStorage:", c)
                }
                const l = i || window.location.href,
                    u = `${s.appBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(l)}`;
                window.location.href = u
            }
        },
        setToken(i, l = !0) {
            if (i && (e.defaults.headers.common.Authorization = `Bearer ${i}`, t.defaults.headers.common.Authorization = `Bearer ${i}`, l && typeof window < "u" && window.localStorage)) try {
                window.localStorage.setItem("base44_access_token", i), window.localStorage.setItem("token", i)
            } catch (u) {
                console.error("Failed to save token to localStorage:", u)
            }
        },
        async loginViaEmailPassword(i, l, u) {
            var c;
            try {
                const f = await e.post(`/apps/${n}/auth/login`, {
                        email: i,
                        password: l,
                        ...u && {
                            turnstile_token: u
                        }
                    }),
                    {
                        access_token: h,
                        user: m
                    } = f;
                return h && this.setToken(h), {
                    access_token: h,
                    user: m
                }
            } catch (f) {
                throw ((c = f.response) === null || c === void 0 ? void 0 : c.status) === 401 && await this.logout(), f
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(), !0
            } catch {
                return !1
            }
        },
        inviteUser(i, l) {
            return e.post(`/apps/${n}/users/invite-user`, {
                user_email: i,
                role: l
            })
        },
        register(i) {
            return e.post(`/apps/${n}/auth/register`, i)
        },
        verifyOtp({
            email: i,
            otpCode: l
        }) {
            return e.post(`/apps/${n}/auth/verify-otp`, {
                email: i,
                otp_code: l
            })
        },
        resendOtp(i) {
            return e.post(`/apps/${n}/auth/resend-otp`, {
                email: i
            })
        },
        resetPasswordRequest(i) {
            return e.post(`/apps/${n}/auth/reset-password-request`, {
                email: i
            })
        },
        resetPassword({
            resetToken: i,
            newPassword: l
        }) {
            return e.post(`/apps/${n}/auth/reset-password`, {
                reset_token: i,
                new_password: l
            })
        },
        changePassword({
            userId: i,
            currentPassword: l,
            newPassword: u
        }) {
            return e.post(`/apps/${n}/auth/change-password`, {
                user_id: i,
                current_password: l,
                new_password: u
            })
        }
    }
}

function hO(e, t) {
    return {
        async getAccessToken(n) {
            const s = `/apps/${t}/auth/sso/accesstoken/${n}`;
            return e.get(s)
        }
    }
}

function pO(e, t) {
    return {
        async getAccessToken(n) {
            if (!n || typeof n != "string") throw new Error("Integration type is required and must be a string");
            return (await e.get(`/apps/${t}/external-auth/tokens/${n}`)).access_token
        },
        async getConnection(n) {
            var s;
            if (!n || typeof n != "string") throw new Error("Integration type is required and must be a string");
            const l = await e.get(`/apps/${t}/external-auth/tokens/${n}`);
            return {
                accessToken: l.access_token,
                connectionConfig: (s = l.connection_config) !== null && s !== void 0 ? s : null
            }
        },
        async getCurrentAppUserAccessToken(n) {
            if (!n || typeof n != "string") throw new Error("Connector ID is required and must be a string");
            return (await e.get(`/apps/${t}/app-user-auth/connectors/${n}/token`)).access_token
        }
    }
}

function mO(e, t) {
    return {
        async connectAppUser(n) {
            if (!n || typeof n != "string") throw new Error("Connector ID is required and must be a string");
            return (await e.post(`/apps/${t}/app-user-auth/connectors/${n}/initiate`)).redirect_url
        },
        async disconnectAppUser(n) {
            if (!n || typeof n != "string") throw new Error("Connector ID is required and must be a string");
            await e.delete(`/apps/${t}/app-user-auth/connectors/${n}`)
        }
    }
}

function Lu(e = {}) {
    const {
        storageKey: t = "base44_access_token",
        paramName: n = "access_token",
        saveToStorage: s = !0,
        removeFromUrl: i = !0
    } = e;
    let l = null;
    if (typeof window < "u" && window.location) try {
        const u = new URLSearchParams(window.location.search);
        if (l = u.get(n), l) {
            if (s && gO(l, {
                    storageKey: t
                }), i) {
                u.delete(n);
                const c = `${window.location.pathname}${u.toString()?`?${u.toString()}`:""}${window.location.hash}`;
                window.history.replaceState({}, document.title, c)
            }
            return l
        }
    } catch (u) {
        console.error("Error retrieving token from URL:", u)
    }
    if (typeof window < "u" && window.localStorage) try {
        return l = window.localStorage.getItem(t), l
    } catch (u) {
        console.error("Error retrieving token from local storage:", u)
    }
    return null
}

function gO(e, t) {
    const {
        storageKey: n = "base44_access_token"
    } = t;
    if (typeof window > "u" || !window.localStorage || !e) return !1;
    try {
        return window.localStorage.setItem(n, e), window.localStorage.setItem("token", e), !0
    } catch (s) {
        return console.error("Error saving token to local storage:", s), !1
    }
}

function i0(e, t, n) {
    const s = (l, u) => l ? `${String(l).replace(/\/$/,"")}${u}` : u,
        i = l => {
            const u = new Headers;
            if (n != null && n.getAuthHeaders) {
                const c = n.getAuthHeaders();
                Object.entries(c).forEach(([f, h]) => {
                    h != null && u.set(f, String(h))
                })
            }
            return l && new Headers(l).forEach((c, f) => {
                u.set(f, c)
            }), u
        };
    return {
        async invoke(l, u) {
            if (typeof u == "string") throw new Error(`Function ${l} must receive an object with named parameters, received: ${u}`);
            let c, f;
            return u instanceof FormData || u && Object.values(u).some(h => h instanceof File) ? (c = new FormData, Object.keys(u).forEach(h => {
                u[h] instanceof File ? c.append(h, u[h], u[h].name) : typeof u[h] == "object" && u[h] !== null ? c.append(h, JSON.stringify(u[h])) : c.append(h, u[h])
            }), f = "multipart/form-data") : (c = u, f = "application/json"), e.post(`/apps/${t}/functions/${l}`, c || u, {
                headers: {
                    "Content-Type": f
                }
            })
        },
        async fetch(l, u = {}) {
            const f = `/functions${l.startsWith("/")?l:`/${l}`}`,
                h = i(u.headers),
                m = { ...u,
                    headers: h
                };
            return await fetch(s(n == null ? void 0 : n.baseURL, f), m)
        }
    }
}

function a0({
    axios: e,
    getSocket: t,
    appId: n,
    serverUrl: s,
    token: i
}) {
    const l = `/apps/${n}/agents`,
        u = {},
        c = () => e.get(`${l}/conversations`),
        f = b => e.get(`${l}/conversations/${b}`);
    return {
        getConversations: c,
        getConversation: f,
        listConversations: b => e.get(`${l}/conversations`, {
            params: b
        }),
        createConversation: b => e.post(`${l}/conversations`, b),
        addMessage: async (b, v) => e.post(`${l}/conversations/v2/${b.id}/messages`, v),
        subscribeToConversation: (b, v) => {
            const S = `/agent-conversations/${b}`,
                k = t(),
                P = f(b).then(R => (u[b] = R, R));
            return k.subscribeToRoom(S, {
                connect: () => {},
                update_model: async ({
                    data: R
                }) => {
                    const _ = JSON.parse(R);
                    if (_._message) {
                        await P;
                        const N = _._message,
                            B = u[b];
                        if (B) {
                            const U = B.messages || [],
                                j = U.findIndex(J => J.id === N.id),
                                G = j !== -1 ? U.map((J, ee) => ee === j ? N : J) : [...U, N];
                            u[b] = { ...B,
                                messages: G
                            }, v == null || v(u[b])
                        }
                    }
                }
            })
        },
        getWhatsAppConnectURL: b => {
            const v = `${s}/api/apps/${n}/agents/${encodeURIComponent(b)}/whatsapp`,
                S = i ? ? Lu();
            return S ? `${v}?token=${S}` : v
        }
    }
}

function l0(e, t) {
    const n = `/app-logs/${t}`;
    return {
        async logUserInApp(s) {
            await e.post(`${n}/log-user-in-app/${s}`)
        },
        async fetchLogs(s = {}) {
            return await e.get(n, {
                params: s
            })
        },
        async getStats(s = {}) {
            return await e.get(`${n}/stats`, {
                params: s
            })
        }
    }
}

function yO(e, t) {
    return {
        async inviteUser(n, s) {
            if (s !== "user" && s !== "admin") throw new Error(`Invalid role: "${s}". Role must be either "user" or "admin".`);
            return await e.post(`/apps/${t}/runtime/users/invite-user`, {
                user_email: n,
                role: s
            })
        }
    }
}
const Un = Object.create(null);
Un.open = "0";
Un.close = "1";
Un.ping = "2";
Un.pong = "3";
Un.message = "4";
Un.upgrade = "5";
Un.noop = "6";
const yu = Object.create(null);
Object.keys(Un).forEach(e => {
    yu[Un[e]] = e
});
const wh = {
        type: "error",
        data: "parser error"
    },
    jS = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
    IS = typeof ArrayBuffer == "function",
    FS = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer,
    mp = ({
        type: e,
        data: t
    }, n, s) => jS && t instanceof Blob ? n ? s(t) : u0(t, s) : IS && (t instanceof ArrayBuffer || FS(t)) ? n ? s(t) : u0(new Blob([t]), s) : s(Un[e] + (t || "")),
    u0 = (e, t) => {
        const n = new FileReader;
        return n.onload = function() {
            const s = n.result.split(",")[1];
            t("b" + (s || ""))
        }, n.readAsDataURL(e)
    };

function c0(e) {
    return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
}
let Cf;

function vO(e, t) {
    if (jS && e.data instanceof Blob) return e.data.arrayBuffer().then(c0).then(t);
    if (IS && (e.data instanceof ArrayBuffer || FS(e.data))) return t(c0(e.data));
    mp(e, !1, n => {
        Cf || (Cf = new TextEncoder), t(Cf.encode(n))
    })
}
const d0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    Gi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < d0.length; e++) Gi[d0.charCodeAt(e)] = e;
const wO = e => {
        let t = e.length * .75,
            n = e.length,
            s, i = 0,
            l, u, c, f;
        e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
        const h = new ArrayBuffer(t),
            m = new Uint8Array(h);
        for (s = 0; s < n; s += 4) l = Gi[e.charCodeAt(s)], u = Gi[e.charCodeAt(s + 1)], c = Gi[e.charCodeAt(s + 2)], f = Gi[e.charCodeAt(s + 3)], m[i++] = l << 2 | u >> 4, m[i++] = (u & 15) << 4 | c >> 2, m[i++] = (c & 3) << 6 | f & 63;
        return h
    },
    xO = typeof ArrayBuffer == "function",
    gp = (e, t) => {
        if (typeof e != "string") return {
            type: "message",
            data: BS(e, t)
        };
        const n = e.charAt(0);
        return n === "b" ? {
            type: "message",
            data: SO(e.substring(1), t)
        } : yu[n] ? e.length > 1 ? {
            type: yu[n],
            data: e.substring(1)
        } : {
            type: yu[n]
        } : wh
    },
    SO = (e, t) => {
        if (xO) {
            const n = wO(e);
            return BS(n, t)
        } else return {
            base64: !0,
            data: e
        }
    },
    BS = (e, t) => {
        switch (t) {
            case "blob":
                return e instanceof Blob ? e : new Blob([e]);
            case "arraybuffer":
            default:
                return e instanceof ArrayBuffer ? e : e.buffer
        }
    },
    VS = "",
    bO = (e, t) => {
        const n = e.length,
            s = new Array(n);
        let i = 0;
        e.forEach((l, u) => {
            mp(l, !1, c => {
                s[u] = c, ++i === n && t(s.join(VS))
            })
        })
    },
    CO = (e, t) => {
        const n = e.split(VS),
            s = [];
        for (let i = 0; i < n.length; i++) {
            const l = gp(n[i], t);
            if (s.push(l), l.type === "error") break
        }
        return s
    };

function EO() {
    return new TransformStream({
        transform(e, t) {
            vO(e, n => {
                const s = n.length;
                let i;
                if (s < 126) i = new Uint8Array(1), new DataView(i.buffer).setUint8(0, s);
                else if (s < 65536) {
                    i = new Uint8Array(3);
                    const l = new DataView(i.buffer);
                    l.setUint8(0, 126), l.setUint16(1, s)
                } else {
                    i = new Uint8Array(9);
                    const l = new DataView(i.buffer);
                    l.setUint8(0, 127), l.setBigUint64(1, BigInt(s))
                }
                e.data && typeof e.data != "string" && (i[0] |= 128), t.enqueue(i), t.enqueue(n)
            })
        }
    })
}
let Ef;

function Zl(e) {
    return e.reduce((t, n) => t + n.length, 0)
}

function eu(e, t) {
    if (e[0].length === t) return e.shift();
    const n = new Uint8Array(t);
    let s = 0;
    for (let i = 0; i < t; i++) n[i] = e[0][s++], s === e[0].length && (e.shift(), s = 0);
    return e.length && s < e[0].length && (e[0] = e[0].slice(s)), n
}

function TO(e, t) {
    Ef || (Ef = new TextDecoder);
    const n = [];
    let s = 0,
        i = -1,
        l = !1;
    return new TransformStream({
        transform(u, c) {
            for (n.push(u);;) {
                if (s === 0) {
                    if (Zl(n) < 1) break;
                    const f = eu(n, 1);
                    l = (f[0] & 128) === 128, i = f[0] & 127, i < 126 ? s = 3 : i === 126 ? s = 1 : s = 2
                } else if (s === 1) {
                    if (Zl(n) < 2) break;
                    const f = eu(n, 2);
                    i = new DataView(f.buffer, f.byteOffset, f.length).getUint16(0), s = 3
                } else if (s === 2) {
                    if (Zl(n) < 8) break;
                    const f = eu(n, 8),
                        h = new DataView(f.buffer, f.byteOffset, f.length),
                        m = h.getUint32(0);
                    if (m > Math.pow(2, 21) - 1) {
                        c.enqueue(wh);
                        break
                    }
                    i = m * Math.pow(2, 32) + h.getUint32(4), s = 3
                } else {
                    if (Zl(n) < i) break;
                    const f = eu(n, i);
                    c.enqueue(gp(l ? f : Ef.decode(f), t)), s = 0
                }
                if (i === 0 || i > e) {
                    c.enqueue(wh);
                    break
                }
            }
        }
    })
}
const US = 4;

function ot(e) {
    if (e) return kO(e)
}

function kO(e) {
    for (var t in ot.prototype) e[t] = ot.prototype[t];
    return e
}
ot.prototype.on = ot.prototype.addEventListener = function(e, t) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
};
ot.prototype.once = function(e, t) {
    function n() {
        this.off(e, n), t.apply(this, arguments)
    }
    return n.fn = t, this.on(e, n), this
};
ot.prototype.off = ot.prototype.removeListener = ot.prototype.removeAllListeners = ot.prototype.removeEventListener = function(e, t) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
    var n = this._callbacks["$" + e];
    if (!n) return this;
    if (arguments.length == 1) return delete this._callbacks["$" + e], this;
    for (var s, i = 0; i < n.length; i++)
        if (s = n[i], s === t || s.fn === t) {
            n.splice(i, 1);
            break
        }
    return n.length === 0 && delete this._callbacks["$" + e], this
};
ot.prototype.emit = function(e) {
    this._callbacks = this._callbacks || {};
    for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], s = 1; s < arguments.length; s++) t[s - 1] = arguments[s];
    if (n) {
        n = n.slice(0);
        for (var s = 0, i = n.length; s < i; ++s) n[s].apply(this, t)
    }
    return this
};
ot.prototype.emitReserved = ot.prototype.emit;
ot.prototype.listeners = function(e) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
};
ot.prototype.hasListeners = function(e) {
    return !!this.listeners(e).length
};
const tc = typeof Promise == "function" && typeof Promise.resolve == "function" ? t => Promise.resolve().then(t) : (t, n) => n(t, 0),
    dn = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(),
    RO = "arraybuffer";

function zS(e, ...t) {
    return t.reduce((n, s) => (e.hasOwnProperty(s) && (n[s] = e[s]), n), {})
}
const PO = dn.setTimeout,
    AO = dn.clearTimeout;

function nc(e, t) {
    t.useNativeTimers ? (e.setTimeoutFn = PO.bind(dn), e.clearTimeoutFn = AO.bind(dn)) : (e.setTimeoutFn = dn.setTimeout.bind(dn), e.clearTimeoutFn = dn.clearTimeout.bind(dn))
}
const _O = 1.33;

function OO(e) {
    return typeof e == "string" ? NO(e) : Math.ceil((e.byteLength || e.size) * _O)
}

function NO(e) {
    let t = 0,
        n = 0;
    for (let s = 0, i = e.length; s < i; s++) t = e.charCodeAt(s), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (s++, n += 4);
    return n
}

function $S() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}

function MO(e) {
    let t = "";
    for (let n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t
}

function LO(e) {
    let t = {},
        n = e.split("&");
    for (let s = 0, i = n.length; s < i; s++) {
        let l = n[s].split("=");
        t[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
    }
    return t
}
class DO extends Error {
    constructor(t, n, s) {
        super(t), this.description = n, this.context = s, this.type = "TransportError"
    }
}
class yp extends ot {
    constructor(t) {
        super(), this.writable = !1, nc(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64
    }
    onError(t, n, s) {
        return super.emitReserved("error", new DO(t, n, s)), this
    }
    open() {
        return this.readyState = "opening", this.doOpen(), this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }
    send(t) {
        this.readyState === "open" && this.write(t)
    }
    onOpen() {
        this.readyState = "open", this.writable = !0, super.emitReserved("open")
    }
    onData(t) {
        const n = gp(t, this.socket.binaryType);
        this.onPacket(n)
    }
    onPacket(t) {
        super.emitReserved("packet", t)
    }
    onClose(t) {
        this.readyState = "closed", super.emitReserved("close", t)
    }
    pause(t) {}
    createUri(t, n = {}) {
        return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(n)
    }
    _hostname() {
        const t = this.opts.hostname;
        return t.indexOf(":") === -1 ? t : "[" + t + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(t) {
        const n = MO(t);
        return n.length ? "?" + n : ""
    }
}
class jO extends yp {
    constructor() {
        super(...arguments), this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(t) {
        this.readyState = "pausing";
        const n = () => {
            this.readyState = "paused", t()
        };
        if (this._polling || !this.writable) {
            let s = 0;
            this._polling && (s++, this.once("pollComplete", function() {
                --s || n()
            })), this.writable || (s++, this.once("drain", function() {
                --s || n()
            }))
        } else n()
    }
    _poll() {
        this._polling = !0, this.doPoll(), this.emitReserved("poll")
    }
    onData(t) {
        const n = s => {
            if (this.readyState === "opening" && s.type === "open" && this.onOpen(), s.type === "close") return this.onClose({
                description: "transport closed by the server"
            }), !1;
            this.onPacket(s)
        };
        CO(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll())
    }
    doClose() {
        const t = () => {
            this.write([{
                type: "close"
            }])
        };
        this.readyState === "open" ? t() : this.once("open", t)
    }
    write(t) {
        this.writable = !1, bO(t, n => {
            this.doWrite(n, () => {
                this.writable = !0, this.emitReserved("drain")
            })
        })
    }
    uri() {
        const t = this.opts.secure ? "https" : "http",
            n = this.query || {};
        return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = $S()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n)
    }
}
let WS = !1;
try {
    WS = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch {}
const IO = WS;

function FO() {}
class BO extends jO {
    constructor(t) {
        if (super(t), typeof location < "u") {
            const n = location.protocol === "https:";
            let s = location.port;
            s || (s = n ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || s !== t.port
        }
    }
    doWrite(t, n) {
        const s = this.request({
            method: "POST",
            data: t
        });
        s.on("success", n), s.on("error", (i, l) => {
            this.onError("xhr post error", i, l)
        })
    }
    doPoll() {
        const t = this.request();
        t.on("data", this.onData.bind(this)), t.on("error", (n, s) => {
            this.onError("xhr poll error", n, s)
        }), this.pollXhr = t
    }
}
class In extends ot {
    constructor(t, n, s) {
        super(), this.createRequest = t, nc(this, s), this._opts = s, this._method = s.method || "GET", this._uri = n, this._data = s.data !== void 0 ? s.data : null, this._create()
    }
    _create() {
        var t;
        const n = zS(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        n.xdomain = !!this._opts.xd;
        const s = this._xhr = this.createRequest(n);
        try {
            s.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    s.setDisableHeaderCheck && s.setDisableHeaderCheck(!0);
                    for (let i in this._opts.extraHeaders) this._opts.extraHeaders.hasOwnProperty(i) && s.setRequestHeader(i, this._opts.extraHeaders[i])
                }
            } catch {}
            if (this._method === "POST") try {
                s.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
            } catch {}
            try {
                s.setRequestHeader("Accept", "*/*")
            } catch {}(t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(s), "withCredentials" in s && (s.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (s.timeout = this._opts.requestTimeout), s.onreadystatechange = () => {
                var i;
                s.readyState === 3 && ((i = this._opts.cookieJar) === null || i === void 0 || i.parseCookies(s.getResponseHeader("set-cookie"))), s.readyState === 4 && (s.status === 200 || s.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
                    this._onError(typeof s.status == "number" ? s.status : 0)
                }, 0))
            }, s.send(this._data)
        } catch (i) {
            this.setTimeoutFn(() => {
                this._onError(i)
            }, 0);
            return
        }
        typeof document < "u" && (this._index = In.requestsCount++, In.requests[this._index] = this)
    }
    _onError(t) {
        this.emitReserved("error", t, this._xhr), this._cleanup(!0)
    }
    _cleanup(t) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = FO, t) try {
                this._xhr.abort()
            } catch {}
            typeof document < "u" && delete In.requests[this._index], this._xhr = null
        }
    }
    _onLoad() {
        const t = this._xhr.responseText;
        t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
In.requestsCount = 0;
In.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", f0);
    else if (typeof addEventListener == "function") {
        const e = "onpagehide" in dn ? "pagehide" : "unload";
        addEventListener(e, f0, !1)
    }
}

function f0() {
    for (let e in In.requests) In.requests.hasOwnProperty(e) && In.requests[e].abort()
}
const VO = (function() {
    const e = HS({
        xdomain: !1
    });
    return e && e.responseType !== null
})();
class UO extends BO {
    constructor(t) {
        super(t);
        const n = t && t.forceBase64;
        this.supportsBinary = VO && !n
    }
    request(t = {}) {
        return Object.assign(t, {
            xd: this.xd
        }, this.opts), new In(HS, this.uri(), t)
    }
}

function HS(e) {
    const t = e.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!t || IO)) return new XMLHttpRequest
    } catch {}
    if (!t) try {
        return new dn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
    } catch {}
}
const qS = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class zO extends yp {
    get name() {
        return "websocket"
    }
    doOpen() {
        const t = this.uri(),
            n = this.opts.protocols,
            s = qS ? {} : zS(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (s.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(t, n, s)
        } catch (i) {
            return this.emitReserved("error", i)
        }
        this.ws.binaryType = this.socket.binaryType, this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
        }, this.ws.onclose = t => this.onClose({
            description: "websocket connection closed",
            context: t
        }), this.ws.onmessage = t => this.onData(t.data), this.ws.onerror = t => this.onError("websocket error", t)
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const s = t[n],
                i = n === t.length - 1;
            mp(s, this.supportsBinary, l => {
                try {
                    this.doWrite(s, l)
                } catch {}
                i && tc(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}, this.ws.close(), this.ws = null)
    }
    uri() {
        const t = this.opts.secure ? "wss" : "ws",
            n = this.query || {};
        return this.opts.timestampRequests && (n[this.opts.timestampParam] = $S()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n)
    }
}
const Tf = dn.WebSocket || dn.MozWebSocket;
class $O extends zO {
    createSocket(t, n, s) {
        return qS ? new Tf(t, n, s) : n ? new Tf(t, n) : new Tf(t)
    }
    doWrite(t, n) {
        this.ws.send(n)
    }
}
class WO extends yp {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name])
        } catch (t) {
            return this.emitReserved("error", t)
        }
        this._transport.closed.then(() => {
            this.onClose()
        }).catch(t => {
            this.onError("webtransport error", t)
        }), this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then(t => {
                const n = TO(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                    s = t.readable.pipeThrough(n).getReader(),
                    i = EO();
                i.readable.pipeTo(t.writable), this._writer = i.writable.getWriter();
                const l = () => {
                    s.read().then(({
                        done: c,
                        value: f
                    }) => {
                        c || (this.onPacket(f), l())
                    }).catch(c => {})
                };
                l();
                const u = {
                    type: "open"
                };
                this.query.sid && (u.data = `{"sid":"${this.query.sid}"}`), this._writer.write(u).then(() => this.onOpen())
            })
        })
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const s = t[n],
                i = n === t.length - 1;
            this._writer.write(s).then(() => {
                i && tc(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        var t;
        (t = this._transport) === null || t === void 0 || t.close()
    }
}
const HO = {
        websocket: $O,
        webtransport: WO,
        polling: UO
    },
    qO = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    KO = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

function xh(e) {
    if (e.length > 8e3) throw "URI too long";
    const t = e,
        n = e.indexOf("["),
        s = e.indexOf("]");
    n != -1 && s != -1 && (e = e.substring(0, n) + e.substring(n, s).replace(/:/g, ";") + e.substring(s, e.length));
    let i = qO.exec(e || ""),
        l = {},
        u = 14;
    for (; u--;) l[KO[u]] = i[u] || "";
    return n != -1 && s != -1 && (l.source = t, l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"), l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), l.ipv6uri = !0), l.pathNames = GO(l, l.path), l.queryKey = QO(l, l.query), l
}

function GO(e, t) {
    const n = /\/{2,9}/g,
        s = t.replace(n, "/").split("/");
    return (t.slice(0, 1) == "/" || t.length === 0) && s.splice(0, 1), t.slice(-1) == "/" && s.splice(s.length - 1, 1), s
}

function QO(e, t) {
    const n = {};
    return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(s, i, l) {
        i && (n[i] = l)
    }), n
}
const Sh = typeof addEventListener == "function" && typeof removeEventListener == "function",
    vu = [];
Sh && addEventListener("offline", () => {
    vu.forEach(e => e())
}, !1);
class Gr extends ot {
    constructor(t, n) {
        if (super(), this.binaryType = RO, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (n = t, t = null), t) {
            const s = xh(t);
            n.hostname = s.host, n.secure = s.protocol === "https" || s.protocol === "wss", n.port = s.port, s.query && (n.query = s.query)
        } else n.host && (n.hostname = xh(n.host).host);
        nc(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach(s => {
            const i = s.prototype.name;
            this.transports.push(i), this._transportsByName[i] = s
        }), this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = LO(this.opts.query)), Sh && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close())
        }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }, vu.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open()
    }
    createTransport(t) {
        const n = Object.assign({}, this.opts.query);
        n.EIO = US, n.transport = t, this.id && (n.sid = this.id);
        const s = Object.assign({}, this.opts, {
            query: n,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[t]);
        return new this._transportsByName[t](s)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available")
            }, 0);
            return
        }
        const t = this.opts.rememberUpgrade && Gr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const n = this.createTransport(t);
        n.open(), this.setTransport(n)
    }
    setTransport(t) {
        this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", n => this._onClose("transport close", n))
    }
    onOpen() {
        this.readyState = "open", Gr.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush()
    }
    _onPacket(t) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
            case "open":
                this.onHandshake(JSON.parse(t.data));
                break;
            case "ping":
                this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
                break;
            case "error":
                const n = new Error("server error");
                n.code = t.data, this._onError(n);
                break;
            case "message":
                this.emitReserved("data", t.data), this.emitReserved("message", t.data);
                break
        }
    }
    onHandshake(t) {
        this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this._pingInterval = t.pingInterval, this._pingTimeout = t.pingTimeout, this._maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const t = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + t, this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout")
        }, t), this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const t = this._getWritablePackets();
            this.transport.send(t), this._prevBufferLen = t.length, this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
        let n = 1;
        for (let s = 0; s < this.writeBuffer.length; s++) {
            const i = this.writeBuffer[s].data;
            if (i && (n += OO(i)), s > 0 && n > this._maxPayload) return this.writeBuffer.slice(0, s);
            n += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime) return !0;
        const t = Date.now() > this._pingTimeoutTime;
        return t && (this._pingTimeoutTime = 0, tc(() => {
            this._onClose("ping timeout")
        }, this.setTimeoutFn)), t
    }
    write(t, n, s) {
        return this._sendPacket("message", t, n, s), this
    }
    send(t, n, s) {
        return this._sendPacket("message", t, n, s), this
    }
    _sendPacket(t, n, s, i) {
        if (typeof n == "function" && (i = n, n = void 0), typeof s == "function" && (i = s, s = null), this.readyState === "closing" || this.readyState === "closed") return;
        s = s || {}, s.compress = s.compress !== !1;
        const l = {
            type: t,
            data: n,
            options: s
        };
        this.emitReserved("packetCreate", l), this.writeBuffer.push(l), i && this.once("flush", i), this.flush()
    }
    close() {
        const t = () => {
                this._onClose("forced close"), this.transport.close()
            },
            n = () => {
                this.off("upgrade", n), this.off("upgradeError", n), t()
            },
            s = () => {
                this.once("upgrade", n), this.once("upgradeError", n)
            };
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? s() : t()
        }) : this.upgrading ? s() : t()), this
    }
    _onError(t) {
        if (Gr.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") return this.transports.shift(), this._open();
        this.emitReserved("error", t), this._onClose("transport error", t)
    }
    _onClose(t, n) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Sh && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
                const s = vu.indexOf(this._offlineEventListener);
                s !== -1 && vu.splice(s, 1)
            }
            this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0
        }
    }
}
Gr.protocol = US;
class YO extends Gr {
    constructor() {
        super(...arguments), this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
            for (let t = 0; t < this._upgrades.length; t++) this._probe(this._upgrades[t])
    }
    _probe(t) {
        let n = this.createTransport(t),
            s = !1;
        Gr.priorWebsocketSuccess = !1;
        const i = () => {
            s || (n.send([{
                type: "ping",
                data: "probe"
            }]), n.once("packet", y => {
                if (!s)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0, this.emitReserved("upgrading", n), !n) return;
                        Gr.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
                            s || this.readyState !== "closed" && (m(), this.setTransport(n), n.send([{
                                type: "upgrade"
                            }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush())
                        })
                    } else {
                        const w = new Error("probe error");
                        w.transport = n.name, this.emitReserved("upgradeError", w)
                    }
            }))
        };

        function l() {
            s || (s = !0, m(), n.close(), n = null)
        }
        const u = y => {
            const w = new Error("probe error: " + y);
            w.transport = n.name, l(), this.emitReserved("upgradeError", w)
        };

        function c() {
            u("transport closed")
        }

        function f() {
            u("socket closed")
        }

        function h(y) {
            n && y.name !== n.name && l()
        }
        const m = () => {
            n.removeListener("open", i), n.removeListener("error", u), n.removeListener("close", c), this.off("close", f), this.off("upgrading", h)
        };
        n.once("open", i), n.once("error", u), n.once("close", c), this.once("close", f), this.once("upgrading", h), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
            s || n.open()
        }, 200) : n.open()
    }
    onHandshake(t) {
        this._upgrades = this._filterUpgrades(t.upgrades), super.onHandshake(t)
    }
    _filterUpgrades(t) {
        const n = [];
        for (let s = 0; s < t.length; s++) ~this.transports.indexOf(t[s]) && n.push(t[s]);
        return n
    }
}
let XO = class extends YO {
    constructor(t, n = {}) {
        const s = typeof t == "object" ? t : n;
        (!s.transports || s.transports && typeof s.transports[0] == "string") && (s.transports = (s.transports || ["polling", "websocket", "webtransport"]).map(i => HO[i]).filter(i => !!i)), super(t, s)
    }
};

function JO(e, t = "", n) {
    let s = e;
    n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), s = xh(e)), s.port || (/^(http|ws)$/.test(s.protocol) ? s.port = "80" : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")), s.path = s.path || "/";
    const l = s.host.indexOf(":") !== -1 ? "[" + s.host + "]" : s.host;
    return s.id = s.protocol + "://" + l + ":" + s.port + t, s.href = s.protocol + "://" + l + (n && n.port === s.port ? "" : ":" + s.port), s
}
const ZO = typeof ArrayBuffer == "function",
    eN = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer,
    KS = Object.prototype.toString,
    tN = typeof Blob == "function" || typeof Blob < "u" && KS.call(Blob) === "[object BlobConstructor]",
    nN = typeof File == "function" || typeof File < "u" && KS.call(File) === "[object FileConstructor]";

function vp(e) {
    return ZO && (e instanceof ArrayBuffer || eN(e)) || tN && e instanceof Blob || nN && e instanceof File
}

function wu(e, t) {
    if (!e || typeof e != "object") return !1;
    if (Array.isArray(e)) {
        for (let n = 0, s = e.length; n < s; n++)
            if (wu(e[n])) return !0;
        return !1
    }
    if (vp(e)) return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1) return wu(e.toJSON(), !0);
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && wu(e[n])) return !0;
    return !1
}

function rN(e) {
    const t = [],
        n = e.data,
        s = e;
    return s.data = bh(n, t), s.attachments = t.length, {
        packet: s,
        buffers: t
    }
}

function bh(e, t) {
    if (!e) return e;
    if (vp(e)) {
        const n = {
            _placeholder: !0,
            num: t.length
        };
        return t.push(e), n
    } else if (Array.isArray(e)) {
        const n = new Array(e.length);
        for (let s = 0; s < e.length; s++) n[s] = bh(e[s], t);
        return n
    } else if (typeof e == "object" && !(e instanceof Date)) {
        const n = {};
        for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && (n[s] = bh(e[s], t));
        return n
    }
    return e
}

function sN(e, t) {
    return e.data = Ch(e.data, t), delete e.attachments, e
}

function Ch(e, t) {
    if (!e) return e;
    if (e && e._placeholder === !0) {
        if (typeof e.num == "number" && e.num >= 0 && e.num < t.length) return t[e.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(e))
        for (let n = 0; n < e.length; n++) e[n] = Ch(e[n], t);
    else if (typeof e == "object")
        for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Ch(e[n], t));
    return e
}
const oN = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var Le;
(function(e) {
    e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK"
})(Le || (Le = {}));
class iN {
    constructor(t) {
        this.replacer = t
    }
    encode(t) {
        return (t.type === Le.EVENT || t.type === Le.ACK) && wu(t) ? this.encodeAsBinary({
            type: t.type === Le.EVENT ? Le.BINARY_EVENT : Le.BINARY_ACK,
            nsp: t.nsp,
            data: t.data,
            id: t.id
        }) : [this.encodeAsString(t)]
    }
    encodeAsString(t) {
        let n = "" + t.type;
        return (t.type === Le.BINARY_EVENT || t.type === Le.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n
    }
    encodeAsBinary(t) {
        const n = rN(t),
            s = this.encodeAsString(n.packet),
            i = n.buffers;
        return i.unshift(s), i
    }
}
class wp extends ot {
    constructor(t) {
        super(), this.reviver = t
    }
    add(t) {
        let n;
        if (typeof t == "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            n = this.decodeString(t);
            const s = n.type === Le.BINARY_EVENT;
            s || n.type === Le.BINARY_ACK ? (n.type = s ? Le.EVENT : Le.ACK, this.reconstructor = new aN(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n)
        } else if (vp(t) || t.base64)
            if (this.reconstructor) n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, super.emitReserved("decoded", n));
            else throw new Error("got binary data when not reconstructing a packet");
        else throw new Error("Unknown type: " + t)
    }
    decodeString(t) {
        let n = 0;
        const s = {
            type: Number(t.charAt(0))
        };
        if (Le[s.type] === void 0) throw new Error("unknown packet type " + s.type);
        if (s.type === Le.BINARY_EVENT || s.type === Le.BINARY_ACK) {
            const l = n + 1;
            for (; t.charAt(++n) !== "-" && n != t.length;);
            const u = t.substring(l, n);
            if (u != Number(u) || t.charAt(n) !== "-") throw new Error("Illegal attachments");
            s.attachments = Number(u)
        }
        if (t.charAt(n + 1) === "/") {
            const l = n + 1;
            for (; ++n && !(t.charAt(n) === "," || n === t.length););
            s.nsp = t.substring(l, n)
        } else s.nsp = "/";
        const i = t.charAt(n + 1);
        if (i !== "" && Number(i) == i) {
            const l = n + 1;
            for (; ++n;) {
                const u = t.charAt(n);
                if (u == null || Number(u) != u) {
                    --n;
                    break
                }
                if (n === t.length) break
            }
            s.id = Number(t.substring(l, n + 1))
        }
        if (t.charAt(++n)) {
            const l = this.tryParse(t.substr(n));
            if (wp.isPayloadValid(s.type, l)) s.data = l;
            else throw new Error("invalid payload")
        }
        return s
    }
    tryParse(t) {
        try {
            return JSON.parse(t, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(t, n) {
        switch (t) {
            case Le.CONNECT:
                return h0(n);
            case Le.DISCONNECT:
                return n === void 0;
            case Le.CONNECT_ERROR:
                return typeof n == "string" || h0(n);
            case Le.EVENT:
            case Le.BINARY_EVENT:
                return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && oN.indexOf(n[0]) === -1);
            case Le.ACK:
            case Le.BINARY_ACK:
                return Array.isArray(n)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
    }
}
class aN {
    constructor(t) {
        this.packet = t, this.buffers = [], this.reconPack = t
    }
    takeBinaryData(t) {
        if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
            const n = sN(this.reconPack, this.buffers);
            return this.finishedReconstruction(), n
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null, this.buffers = []
    }
}

function h0(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
const lN = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: wp,
    Encoder: iN,
    get PacketType() {
        return Le
    }
}, Symbol.toStringTag, {
    value: "Module"
}));

function Cn(e, t, n) {
    return e.on(t, n),
        function() {
            e.off(t, n)
        }
}
const uN = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class GS extends ot {
    constructor(t, n, s) {
        super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = n, s && s.auth && (this.auth = s.auth), this._opts = Object.assign({}, s), this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs) return;
        const t = this.io;
        this.subs = [Cn(t, "open", this.onopen.bind(this)), Cn(t, "packet", this.onpacket.bind(this)), Cn(t, "error", this.onerror.bind(this)), Cn(t, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this)
    }
    open() {
        return this.connect()
    }
    send(...t) {
        return t.unshift("message"), this.emit.apply(this, t), this
    }
    emit(t, ...n) {
        var s, i, l;
        if (uN.hasOwnProperty(t)) throw new Error('"' + t.toString() + '" is a reserved event name');
        if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(n), this;
        const u = {
            type: Le.EVENT,
            data: n
        };
        if (u.options = {}, u.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
            const m = this.ids++,
                y = n.pop();
            this._registerAckCallback(m, y), u.id = m
        }
        const c = (i = (s = this.io.engine) === null || s === void 0 ? void 0 : s.transport) === null || i === void 0 ? void 0 : i.writable,
            f = this.connected && !(!((l = this.io.engine) === null || l === void 0) && l._hasPingExpired());
        return this.flags.volatile && !c || (f ? (this.notifyOutgoingListeners(u), this.packet(u)) : this.sendBuffer.push(u)), this.flags = {}, this
    }
    _registerAckCallback(t, n) {
        var s;
        const i = (s = this.flags.timeout) !== null && s !== void 0 ? s : this._opts.ackTimeout;
        if (i === void 0) {
            this.acks[t] = n;
            return
        }
        const l = this.io.setTimeoutFn(() => {
                delete this.acks[t];
                for (let c = 0; c < this.sendBuffer.length; c++) this.sendBuffer[c].id === t && this.sendBuffer.splice(c, 1);
                n.call(this, new Error("operation has timed out"))
            }, i),
            u = (...c) => {
                this.io.clearTimeoutFn(l), n.apply(this, c)
            };
        u.withError = !0, this.acks[t] = u
    }
    emitWithAck(t, ...n) {
        return new Promise((s, i) => {
            const l = (u, c) => u ? i(u) : s(c);
            l.withError = !0, n.push(l), this.emit(t, ...n)
        })
    }
    _addToQueue(t) {
        let n;
        typeof t[t.length - 1] == "function" && (n = t.pop());
        const s = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: t,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        t.push((i, ...l) => (this._queue[0], i !== null ? s.tryCount > this._opts.retries && (this._queue.shift(), n && n(i)) : (this._queue.shift(), n && n(null, ...l)), s.pending = !1, this._drainQueue())), this._queue.push(s), this._drainQueue()
    }
    _drainQueue(t = !1) {
        if (!this.connected || this._queue.length === 0) return;
        const n = this._queue[0];
        n.pending && !t || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args))
    }
    packet(t) {
        t.nsp = this.nsp, this.io._packet(t)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(t => {
            this._sendConnectPacket(t)
        }) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(t) {
        this.packet({
            type: Le.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, t) : t
        })
    }
    onerror(t) {
        this.connected || this.emitReserved("connect_error", t)
    }
    onclose(t, n) {
        this.connected = !1, delete this.id, this.emitReserved("disconnect", t, n), this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(t => {
            if (!this.sendBuffer.some(s => String(s.id) === t)) {
                const s = this.acks[t];
                delete this.acks[t], s.withError && s.call(this, new Error("socket has been disconnected"))
            }
        })
    }
    onpacket(t) {
        if (t.nsp === this.nsp) switch (t.type) {
            case Le.CONNECT:
                t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case Le.EVENT:
            case Le.BINARY_EVENT:
                this.onevent(t);
                break;
            case Le.ACK:
            case Le.BINARY_ACK:
                this.onack(t);
                break;
            case Le.DISCONNECT:
                this.ondisconnect();
                break;
            case Le.CONNECT_ERROR:
                this.destroy();
                const s = new Error(t.data.message);
                s.data = t.data.data, this.emitReserved("connect_error", s);
                break
        }
    }
    onevent(t) {
        const n = t.data || [];
        t.id != null && n.push(this.ack(t.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n))
    }
    emitEvent(t) {
        if (this._anyListeners && this._anyListeners.length) {
            const n = this._anyListeners.slice();
            for (const s of n) s.apply(this, t)
        }
        super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1])
    }
    ack(t) {
        const n = this;
        let s = !1;
        return function(...i) {
            s || (s = !0, n.packet({
                type: Le.ACK,
                id: t,
                data: i
            }))
        }
    }
    onack(t) {
        const n = this.acks[t.id];
        typeof n == "function" && (delete this.acks[t.id], n.withError && t.data.unshift(null), n.apply(this, t.data))
    }
    onconnect(t, n) {
        this.id = t, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this._drainQueue(!0), this.emitReserved("connect")
    }
    emitBuffered() {
        this.receiveBuffer.forEach(t => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach(t => {
            this.notifyOutgoingListeners(t), this.packet(t)
        }), this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(t => t()), this.subs = void 0), this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: Le.DISCONNECT
        }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }
    close() {
        return this.disconnect()
    }
    compress(t) {
        return this.flags.compress = t, this
    }
    get volatile() {
        return this.flags.volatile = !0, this
    }
    timeout(t) {
        return this.flags.timeout = t, this
    }
    onAny(t) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this
    }
    prependAny(t) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this
    }
    offAny(t) {
        if (!this._anyListeners) return this;
        if (t) {
            const n = this._anyListeners;
            for (let s = 0; s < n.length; s++)
                if (t === n[s]) return n.splice(s, 1), this
        } else this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(t) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this
    }
    prependAnyOutgoing(t) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this
    }
    offAnyOutgoing(t) {
        if (!this._anyOutgoingListeners) return this;
        if (t) {
            const n = this._anyOutgoingListeners;
            for (let s = 0; s < n.length; s++)
                if (t === n[s]) return n.splice(s, 1), this
        } else this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(t) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const n = this._anyOutgoingListeners.slice();
            for (const s of n) s.apply(this, t.data)
        }
    }
}

function Qo(e) {
    e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
}
Qo.prototype.duration = function() {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
        e = (Math.floor(t * 10) & 1) == 0 ? e - n : e + n
    }
    return Math.min(e, this.max) | 0
};
Qo.prototype.reset = function() {
    this.attempts = 0
};
Qo.prototype.setMin = function(e) {
    this.ms = e
};
Qo.prototype.setMax = function(e) {
    this.max = e
};
Qo.prototype.setJitter = function(e) {
    this.jitter = e
};
class Eh extends ot {
    constructor(t, n) {
        var s;
        super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, nc(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((s = n.randomizationFactor) !== null && s !== void 0 ? s : .5), this.backoff = new Qo({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
        const i = n.parser || lN;
        this.encoder = new i.Encoder, this.decoder = new i.Decoder, this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open()
    }
    reconnection(t) {
        return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection
    }
    reconnectionAttempts(t) {
        return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this)
    }
    reconnectionDelay(t) {
        var n;
        return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (n = this.backoff) === null || n === void 0 || n.setMin(t), this)
    }
    randomizationFactor(t) {
        var n;
        return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (n = this.backoff) === null || n === void 0 || n.setJitter(t), this)
    }
    reconnectionDelayMax(t) {
        var n;
        return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (n = this.backoff) === null || n === void 0 || n.setMax(t), this)
    }
    timeout(t) {
        return arguments.length ? (this._timeout = t, this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(t) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new XO(this.uri, this.opts);
        const n = this.engine,
            s = this;
        this._readyState = "opening", this.skipReconnect = !1;
        const i = Cn(n, "open", function() {
                s.onopen(), t && t()
            }),
            l = c => {
                this.cleanup(), this._readyState = "closed", this.emitReserved("error", c), t ? t(c) : this.maybeReconnectOnOpen()
            },
            u = Cn(n, "error", l);
        if (this._timeout !== !1) {
            const c = this._timeout,
                f = this.setTimeoutFn(() => {
                    i(), l(new Error("timeout")), n.close()
                }, c);
            this.opts.autoUnref && f.unref(), this.subs.push(() => {
                this.clearTimeoutFn(f)
            })
        }
        return this.subs.push(i), this.subs.push(u), this
    }
    connect(t) {
        return this.open(t)
    }
    onopen() {
        this.cleanup(), this._readyState = "open", this.emitReserved("open");
        const t = this.engine;
        this.subs.push(Cn(t, "ping", this.onping.bind(this)), Cn(t, "data", this.ondata.bind(this)), Cn(t, "error", this.onerror.bind(this)), Cn(t, "close", this.onclose.bind(this)), Cn(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(t) {
        try {
            this.decoder.add(t)
        } catch (n) {
            this.onclose("parse error", n)
        }
    }
    ondecoded(t) {
        tc(() => {
            this.emitReserved("packet", t)
        }, this.setTimeoutFn)
    }
    onerror(t) {
        this.emitReserved("error", t)
    }
    socket(t, n) {
        let s = this.nsps[t];
        return s ? this._autoConnect && !s.active && s.connect() : (s = new GS(this, t, n), this.nsps[t] = s), s
    }
    _destroy(t) {
        const n = Object.keys(this.nsps);
        for (const s of n)
            if (this.nsps[s].active) return;
        this._close()
    }
    _packet(t) {
        const n = this.encoder.encode(t);
        for (let s = 0; s < n.length; s++) this.engine.write(n[s], t.options)
    }
    cleanup() {
        this.subs.forEach(t => t()), this.subs.length = 0, this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(t, n) {
        var s;
        this.cleanup(), (s = this.engine) === null || s === void 0 || s.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, n), this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
        else {
            const n = this.backoff.duration();
            this._reconnecting = !0;
            const s = this.setTimeoutFn(() => {
                t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open(i => {
                    i ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", i)) : t.onreconnect()
                }))
            }, n);
            this.opts.autoUnref && s.unref(), this.subs.push(() => {
                this.clearTimeoutFn(s)
            })
        }
    }
    onreconnect() {
        const t = this.backoff.attempts;
        this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t)
    }
}
const $i = {};

function xu(e, t) {
    typeof e == "object" && (t = e, e = void 0), t = t || {};
    const n = JO(e, t.path || "/socket.io"),
        s = n.source,
        i = n.id,
        l = n.path,
        u = $i[i] && l in $i[i].nsps,
        c = t.forceNew || t["force new connection"] || t.multiplex === !1 || u;
    let f;
    return c ? f = new Eh(s, t) : ($i[i] || ($i[i] = new Eh(s, t)), f = $i[i]), n.query && !t.query && (t.query = n.queryKey), f.socket(n.path, t)
}
Object.assign(xu, {
    Manager: Eh,
    Socket: GS,
    io: xu,
    connect: xu
});

function p0(e, t) {
    var n;
    const s = xu(e.serverUrl, {
        path: e.mountPath,
        transports: e.transports,
        query: {
            app_id: e.appId,
            token: (n = e.token) !== null && n !== void 0 ? n : Lu()
        }
    });
    return s.on("connect", async () => {
        var i;
        return console.log("connect", s.id), (i = t.connect) === null || i === void 0 ? void 0 : i.call(t)
    }), s.on("update_model", async i => {
        var l;
        return (l = t.update_model) === null || l === void 0 ? void 0 : l.call(t, i)
    }), s.on("error", async i => {
        var l;
        return (l = t.error) === null || l === void 0 ? void 0 : l.call(t, i)
    }), s.on("connect_error", async i => {
        var l;
        return console.error("connect_error", i), (l = t.error) === null || l === void 0 ? void 0 : l.call(t, i)
    }), s
}

function cN({
    config: e
}) {
    let t = { ...e
    };
    const n = {},
        s = {
            connect: async () => {
                const C = [];
                Object.keys(n).forEach(b => {
                    f(b);
                    const v = y(b);
                    v == null || v.forEach(({
                        connect: S
                    }) => {
                        const k = async () => S == null ? void 0 : S();
                        C.push(k())
                    })
                }), await Promise.all(C)
            },
            update_model: async C => {
                const v = y(C.room).map(S => {
                    var k;
                    return (k = S.update_model) === null || k === void 0 ? void 0 : k.call(S, C)
                });
                await Promise.all(v)
            },
            error: async C => {
                console.error("error", C);
                const b = Object.values(n).flat().map(v => {
                    var S;
                    return (S = v.error) === null || S === void 0 ? void 0 : S.call(v, C)
                });
                await Promise.all(b)
            }
        };
    let i = p0(e, s);

    function l() {
        u()
    }

    function u() {
        i && i.disconnect()
    }

    function c(C) {
        l(), t = { ...t,
            ...C
        }, i = p0(t, s)
    }

    function f(C) {
        i.emit("join", C)
    }

    function h(C) {
        i.emit("leave", C)
    }
    async function m(C, b) {
        var v;
        const S = JSON.stringify(b);
        return (v = s.update_model) === null || v === void 0 ? void 0 : v.call(s, {
            room: C,
            data: S
        })
    }

    function y(C) {
        return n[C]
    }
    return {
        socket: i,
        subscribeToRoom: (C, b) => (n[C] || (f(C), n[C] = []), n[C].push(b), () => {
            var v, S;
            n[C] = (S = (v = n[C]) === null || v === void 0 ? void 0 : v.filter(k => k !== b)) !== null && S !== void 0 ? S : [], n[C].length === 0 && h(C)
        }),
        updateConfig: c,
        updateModel: m,
        disconnect: u
    }
}
const Wi = typeof window < "u" ? window : {
    base44SharedInstances: {}
};

function dN(e, t) {
    return Wi.base44SharedInstances || (Wi.base44SharedInstances = {}), Wi.base44SharedInstances[e] || (Wi.base44SharedInstances[e] = {
        instance: t()
    }), Wi.base44SharedInstances[e].instance
}
const fN = "__user_heartbeat_event__",
    hN = "__initialization_event__",
    pN = "__session_duration_event__",
    m0 = "analytics-enable",
    g0 = "base44_analytics_session_id",
    mN = {
        enabled: !0,
        maxQueueSize: 1e3,
        throttleTime: 1e3,
        batchSize: 30,
        heartBeatInterval: 60 * 1e3
    },
    gN = "analytics",
    Be = dN(gN, () => ({
        requestsQueue: [],
        isProcessing: !1,
        isHeartBeatProcessing: !1,
        wasInitializationTracked: !1,
        sessionContext: null,
        sessionStartTime: null,
        config: { ...mN,
            ...EN()
        }
    })),
    yN = ({
        axiosClient: e,
        serverUrl: t,
        appId: n,
        userAuthModule: s
    }) => {
        var i;
        const {
            maxQueueSize: l,
            throttleTime: u,
            batchSize: c
        } = Be.config;
        if (!(!((i = Be.config) === null || i === void 0) && i.enabled)) return {
            track: () => {},
            cleanup: () => {}
        };
        let f;
        const h = `${t}/api/apps/${n}/analytics/track/batch`,
            m = async R => {
                await e.request({
                    method: "POST",
                    url: `/apps/${n}/analytics/track/batch`,
                    data: {
                        events: R
                    }
                })
            },
            y = R => {
                try {
                    const _ = JSON.stringify({
                            events: R
                        }),
                        N = new Blob([_], {
                            type: "application/json"
                        });
                    return typeof navigator > "u" || _.length > 6e4 || !navigator.sendBeacon(h, N)
                } catch {
                    return !1
                }
            },
            w = async (R, _ = {}) => {
                if (R.length === 0) return;
                const N = await CN(s),
                    B = R.map(bN(N));
                try {
                    (!_.isBeacon || !y(B)) && await m(B)
                } catch {}
            },
            C = () => {
                v0(w, {
                    throttleTime: u,
                    batchSize: c
                })
            },
            b = R => {
                if (Be.requestsQueue.length >= l) return;
                const _ = SN();
                Be.requestsQueue.push({ ...R,
                    ..._
                }), C()
            },
            v = () => {
                v0(w, {
                    throttleTime: u,
                    batchSize: c
                }), f = w0(b), wN()
            },
            S = () => {
                y0(), f == null || f(), xN(b);
                const R = Be.requestsQueue.splice(0);
                w(R, {
                    isBeacon: !0
                })
            },
            k = () => {
                typeof window > "u" || (document.visibilityState === "hidden" ? S() : document.visibilityState === "visible" && v())
            },
            P = () => {
                y0(), f == null || f(), typeof window < "u" && window.removeEventListener("visibilitychange", k)
            };
        return C(), f = w0(b), vN(b), typeof window < "u" && window.addEventListener("visibilitychange", k), {
            track: b,
            cleanup: P
        }
    };

function y0() {
    Be.isProcessing = !1
}
async function v0(e, t) {
    if (Be.isProcessing) return;
    Be.isProcessing = !0;
    const {
        throttleTime: n = 1e3,
        batchSize: s = 30
    } = t ? ? {};
    for (; Be.isProcessing && Be.requestsQueue.length > 0;) {
        const i = Be.requestsQueue.splice(0, s);
        i.length && await e(i), await new Promise(l => setTimeout(l, n))
    }
    Be.isProcessing = !1
}

function w0(e) {
    var t;
    if (Be.isHeartBeatProcessing || ((t = Be.config.heartBeatInterval) !== null && t !== void 0 ? t : 0) < 10) return () => {};
    Be.isHeartBeatProcessing = !0;
    const n = setInterval(() => {
        e({
            eventName: fN
        })
    }, Be.config.heartBeatInterval);
    return () => {
        clearInterval(n), Be.isHeartBeatProcessing = !1
    }
}

function vN(e) {
    typeof window > "u" || Be.wasInitializationTracked || (Be.wasInitializationTracked = !0, e({
        eventName: hN,
        properties: {
            referrer: document == null ? void 0 : document.referrer
        }
    }))
}

function wN() {
    typeof window > "u" || Be.sessionStartTime !== null || (Be.sessionStartTime = new Date().toISOString())
}

function xN(e) {
    if (typeof window > "u" || Be.sessionStartTime === null) return;
    const t = new Date().getTime() - new Date(Be.sessionStartTime).getTime();
    Be.sessionStartTime = null, e({
        eventName: pN,
        properties: {
            sessionDuration: t
        }
    })
}

function SN() {
    return {
        timestamp: new Date().toISOString(),
        pageUrl: typeof window < "u" ? window.location.pathname : null
    }
}

function bN(e) {
    return t => ({
        event_name: t.eventName,
        properties: t.properties,
        timestamp: t.timestamp,
        page_url: t.pageUrl,
        ...e
    })
}
let kf = null;
async function CN(e) {
    if (!Be.sessionContext) {
        if (!kf) {
            const t = TN();
            kf = e.me().then(n => ({
                user_id: n.id,
                session_id: t
            })).catch(() => ({
                user_id: null,
                session_id: t
            }))
        }
        Be.sessionContext = await kf
    }
    return Be.sessionContext
}

function EN() {
    if (typeof window > "u") return;
    const t = new URLSearchParams(window.location.search).get(m0);
    if (t == null || !t.length) return;
    const n = new URLSearchParams(window.location.search);
    n.delete(m0);
    const s = window.location.pathname + (n.toString() ? "?" + n.toString() : "");
    return window.history.replaceState({}, "", s), {
        enabled: t === "true"
    }
}

function TN() {
    if (typeof window > "u") return Sf();
    try {
        const e = localStorage.getItem(g0);
        if (!e) {
            const t = Sf();
            return localStorage.setItem(g0, t), t
        }
        return e
    } catch {
        return Sf()
    }
}

function kN(e) {
    var t, n;
    const {
        serverUrl: s = "https://base44.app",
        appId: i,
        token: l,
        serviceToken: u,
        requiresAuth: c = !1,
        appBaseUrl: f,
        options: h,
        functionsVersion: m,
        headers: y
    } = e, w = typeof f == "string" ? f : "", C = {
        serverUrl: s,
        mountPath: "/ws-user-apps/socket.io/",
        transports: ["websocket"],
        appId: i,
        token: l
    };
    let b = null;
    const v = () => (b || (b = cN({
            config: C
        })), b),
        S = { ...y,
            "X-App-Id": String(i)
        },
        k = m ? { ...S,
            "Base44-Functions-Version": m
        } : S,
        P = Ki({
            baseURL: `${s}/api`,
            headers: S,
            token: l,
            onError: h == null ? void 0 : h.onError
        }),
        R = Ki({
            baseURL: `${s}/api`,
            headers: k,
            token: l,
            interceptResponses: !1,
            onError: h == null ? void 0 : h.onError
        }),
        _ = { ...S,
            ...l ? {
                "on-behalf-of": `Bearer ${l}`
            } : {}
        },
        N = Ki({
            baseURL: `${s}/api`,
            headers: _,
            token: u,
            onError: h == null ? void 0 : h.onError
        }),
        B = Ki({
            baseURL: `${s}/api`,
            headers: k,
            token: u,
            interceptResponses: !1
        }),
        U = fO(P, R, i, {
            appBaseUrl: w
        }),
        j = {
            entities: s0({
                axios: P,
                appId: i,
                getSocket: v
            }),
            integrations: o0(P, i),
            connectors: mO(P, i),
            auth: U,
            functions: i0(R, i, {
                getAuthHeaders: () => {
                    const ee = {},
                        de = l || Lu();
                    return de && (ee.Authorization = `Bearer ${de}`), ee
                },
                baseURL: (t = R.defaults) === null || t === void 0 ? void 0 : t.baseURL
            }),
            agents: a0({
                axios: P,
                getSocket: v,
                appId: i,
                serverUrl: s,
                token: l
            }),
            appLogs: l0(P, i),
            users: yO(P, i),
            analytics: yN({
                axiosClient: P,
                serverUrl: s,
                appId: i,
                userAuthModule: U
            }),
            cleanup: () => {
                j.analytics.cleanup(), b && b.disconnect()
            }
        },
        G = {
            entities: s0({
                axios: N,
                appId: i,
                getSocket: v
            }),
            integrations: o0(N, i),
            sso: hO(N, i),
            connectors: pO(N, i),
            functions: i0(B, i, {
                getAuthHeaders: () => {
                    const ee = {};
                    return u && (ee.Authorization = `Bearer ${u}`), ee
                },
                baseURL: (n = B.defaults) === null || n === void 0 ? void 0 : n.baseURL
            }),
            agents: a0({
                axios: N,
                getSocket: v,
                appId: i,
                serverUrl: s,
                token: l
            }),
            appLogs: l0(N, i),
            cleanup: () => {
                b && b.disconnect()
            }
        };
    if (typeof window < "u") {
        const ee = l || Lu();
        ee && j.auth.setToken(ee)
    }
    return c && typeof window < "u" && setTimeout(async () => {
        try {
            await j.auth.isAuthenticated() || j.auth.redirectToLogin(window.location.href)
        } catch (ee) {
            console.error("Authentication check failed:", ee), j.auth.redirectToLogin(window.location.href)
        }
    }, 0), { ...j,
        setToken(ee) {
            j.auth.setToken(ee), b && b.updateConfig({
                token: ee
            }), C.token = ee
        },
        getConfig() {
            return {
                serverUrl: s,
                appId: i,
                requiresAuth: c
            }
        },
        get asServiceRole() {
            if (!u) throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return G
        }
    }
}
const QS = typeof window > "u",
    RN = QS ? {
        localStorage: new Map
    } : window,
    na = RN.localStorage,
    PN = e => e.replace(/([A-Z])/g, "_$1").toLowerCase(),
    vo = (e, {
        defaultValue: t = void 0,
        removeFromUrl: n = !1
    } = {}) => {
        if (QS) return t;
        const s = `base44_${PN(e)}`,
            i = new URLSearchParams(window.location.search),
            l = i.get(e);
        if (n) {
            i.delete(e);
            const c = `${window.location.pathname}${i.toString()?`?${i.toString()}`:""}${window.location.hash}`;
            window.history.replaceState({}, document.title, c)
        }
        if (l) return na.setItem(s, l), l;
        if (t) return na.setItem(s, t), t;
        const u = na.getItem(s);
        return u || null
    },
    AN = () => (vo("clear_access_token") === "true" && (na.removeItem("base44_access_token"), na.removeItem("token")), {
        appId: vo("app_id", {
            defaultValue: "69ca4104bd70a49118e463d7"
        }),
        token: vo("access_token", {
            removeFromUrl: !0
        }),
        fromUrl: vo("from_url", {
            defaultValue: window.location.href
        }),
        functionsVersion: vo("functions_version", {
            defaultValue: "prod"
        }),
        appBaseUrl: vo("app_base_url", {
            defaultValue: void 0
        })
    }),
    Qi = { ...AN()
    },
    {
        appId: _N,
        token: ON,
        functionsVersion: NN,
        appBaseUrl: MN
    } = Qi,
    Yi = kN({
        appId: _N,
        token: ON,
        functionsVersion: NN,
        serverUrl: "",
        requiresAuth: !1,
        appBaseUrl: MN
    });

function LN({}) {
    var i;
    const t = Ko().pathname.substring(1),
        {
            data: n,
            isFetched: s
        } = gP({
            queryKey: ["user"],
            queryFn: async () => {
                try {
                    return {
                        user: await Yi.auth.me(),
                        isAuthenticated: !0
                    }
                } catch {
                    return {
                        user: null,
                        isAuthenticated: !1
                    }
                }
            }
        });
    return T.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: T.jsx("div", {
            className: "max-w-md w-full",
            children: T.jsxs("div", {
                className: "text-center space-y-6",
                children: [T.jsxs("div", {
                    className: "space-y-2",
                    children: [T.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), T.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), T.jsxs("div", {
                    className: "space-y-3",
                    children: [T.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), T.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", T.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', t, '"']
                        }), " could not be found in this application."]
                    })]
                }), s && n.isAuthenticated && ((i = n.user) == null ? void 0 : i.role) === "admin" && T.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: T.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [T.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: T.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), T.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [T.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), T.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), T.jsx("div", {
                    className: "pt-6",
                    children: T.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [T.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: T.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const YS = x.createContext(),
    DN = ({
        children: e
    }) => {
        const [t, n] = x.useState(null), [s, i] = x.useState(!1), [l, u] = x.useState(!0), [c, f] = x.useState(!0), [h, m] = x.useState(null), [y, w] = x.useState(null);
        x.useEffect(() => {
            C()
        }, []);
        const C = async () => {
                var k, P;
                try {
                    f(!0), m(null);
                    const R = Ki({
                        baseURL: "/api/apps/public",
                        headers: {
                            "X-App-Id": Qi.appId
                        },
                        token: Qi.token,
                        interceptResponses: !0
                    });
                    try {
                        const _ = await R.get(`/prod/public-settings/by-id/${Qi.appId}`);
                        w(_), Qi.token ? await b() : (u(!1), i(!1)), f(!1)
                    } catch (_) {
                        if (console.error("App state check failed:", _), _.status === 403 && ((P = (k = _.data) == null ? void 0 : k.extra_data) != null && P.reason)) {
                            const N = _.data.extra_data.reason;
                            m(N === "auth_required" ? {
                                type: "auth_required",
                                message: "Authentication required"
                            } : N === "user_not_registered" ? {
                                type: "user_not_registered",
                                message: "User not registered for this app"
                            } : {
                                type: N,
                                message: _.message
                            })
                        } else m({
                            type: "unknown",
                            message: _.message || "Failed to load app"
                        });
                        f(!1), u(!1)
                    }
                } catch (R) {
                    console.error("Unexpected error:", R), m({
                        type: "unknown",
                        message: R.message || "An unexpected error occurred"
                    }), f(!1), u(!1)
                }
            },
            b = async () => {
                try {
                    u(!0);
                    const k = await Yi.auth.me();
                    n(k), i(!0), u(!1)
                } catch (k) {
                    console.error("User auth check failed:", k), u(!1), i(!1), (k.status === 401 || k.status === 403) && m({
                        type: "auth_required",
                        message: "Authentication required"
                    })
                }
            },
            v = (k = !0) => {
                n(null), i(!1), k ? Yi.auth.logout(window.location.href) : Yi.auth.logout()
            },
            S = () => {
                Yi.auth.redirectToLogin(window.location.href)
            };
        return T.jsx(YS.Provider, {
            value: {
                user: t,
                isAuthenticated: s,
                isLoadingAuth: l,
                isLoadingPublicSettings: c,
                authError: h,
                appPublicSettings: y,
                logout: v,
                navigateToLogin: S,
                checkAppState: C
            },
            children: e
        })
    },
    jN = () => {
        const e = x.useContext(YS);
        if (!e) throw new Error("useAuth must be used within an AuthProvider");
        return e
    },
    IN = () => T.jsx("div", {
        className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
        children: T.jsx("div", {
            className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
            children: T.jsxs("div", {
                className: "text-center",
                children: [T.jsx("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                    children: T.jsx("svg", {
                        className: "w-8 h-8 text-orange-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: T.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        })
                    })
                }), T.jsx("h1", {
                    className: "text-3xl font-bold text-slate-900 mb-4",
                    children: "Access Restricted"
                }), T.jsx("p", {
                    className: "text-slate-600 mb-8",
                    children: "You are not registered to use this application. Please contact the app administrator to request access."
                }), T.jsxs("div", {
                    className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                    children: [T.jsx("p", {
                        children: "If you believe this is an error, you can:"
                    }), T.jsxs("ul", {
                        className: "list-disc list-inside mt-2 space-y-1",
                        children: [T.jsx("li", {
                            children: "Verify you are logged in with the correct account"
                        }), T.jsx("li", {
                            children: "Contact the app administrator for access"
                        }), T.jsx("li", {
                            children: "Try logging out and back in again"
                        })]
                    })]
                })]
            })
        })
    }),
    FN = [{
        path: "/",
        label: "Reboot Schedule",
        icon: bk
    }];

function BN() {
    const e = Ko();
    return T.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [T.jsx("header", {
            className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl",
            children: T.jsx("div", {
                className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8",
                children: T.jsxs("div", {
                    className: "flex items-center justify-between h-16",
                    children: [T.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [T.jsx("div", {
                            className: "h-9 w-9 rounded-lg bg-primary flex items-center justify-center",
                            children: T.jsx(Mk, {
                                className: "h-5 w-5 text-primary-foreground"
                            })
                        }), T.jsxs("div", {
                            className: "hidden sm:block",
                            children: [T.jsx("h1", {
                                className: "text-base font-semibold tracking-tight text-foreground",
                                children: "Service Desk"
                            }), T.jsx("p", {
                                className: "text-[11px] text-muted-foreground -mt-0.5 font-medium tracking-wide uppercase",
                                children: "Infrastructure Operations"
                            })]
                        })]
                    }), T.jsx("nav", {
                        className: "flex items-center gap-1",
                        children: FN.map(t => {
                            const n = e.pathname === t.path,
                                s = t.icon;
                            return T.jsxs(EA, {
                                to: t.path,
                                className: `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${n?"bg-primary/10 text-primary":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                                children: [T.jsx(s, {
                                    className: "h-4 w-4"
                                }), T.jsx("span", {
                                    className: "hidden sm:inline",
                                    children: t.label
                                })]
                            }, t.path)
                        })
                    }), T.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [T.jsxs("div", {
                            className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200",
                            children: [T.jsx("div", {
                                className: "h-2 w-2 rounded-full bg-emerald-500 animate-pulse"
                            }), T.jsx("span", {
                                className: "text-xs font-medium text-emerald-700",
                                children: "Systems Online"
                            })]
                        }), T.jsxs("div", {
                            className: "hidden md:flex items-center gap-2 text-xs text-muted-foreground",
                            children: [T.jsx(Dk, {
                                className: "h-3.5 w-3.5"
                            }), T.jsx("span", {
                                children: "Week 2 Patch Cycle"
                            })]
                        })]
                    })]
                })
            })
        }), T.jsx("main", {
            className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6",
            children: T.jsx(fA, {})
        })]
    })
}
const da = [{
        week: 2,
        day: "Monday",
        property: "GC East London",
        brand: "Garden Court",
        province: "Eastern Cape",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Monday",
        property: "GC Hatfield",
        brand: "Garden Court",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Monday",
        property: "GC OR Tambo",
        brand: "Garden Court",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Monday",
        property: "GC Ulundi",
        brand: "Garden Court",
        province: "Kwazulu Natal",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Monday",
        property: "Beacon Island",
        brand: "Lifestyle Resorts",
        province: "Western Cape",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Monday",
        property: "SE Pretoria",
        brand: "StayEasy",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Monday",
        property: "Monte Node (JHB-PMS-DB1)",
        brand: "SS Monte, Sunsquare, Palazzo, Reservations",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Tuesday",
        property: "GC De Waal",
        brand: "Garden Court",
        province: "Western Cape",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Tuesday",
        property: "GC Eastern Boulevard",
        brand: "Garden Court",
        province: "Western Cape",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Tuesday",
        property: "GC Victoria Junction",
        brand: "Garden Court",
        province: "Western Cape",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Tuesday",
        property: "SE Century City",
        brand: "StayEasy",
        province: "Western Cape",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Tuesday",
        property: "SS Newlands",
        brand: "Southern Sun",
        province: "Western Cape",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Tuesday",
        property: "SS The Cullinan",
        brand: "Southern Sun",
        province: "Western Cape",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Tuesday",
        property: "SS Waterfront",
        brand: "Southern Sun",
        province: "Western Cape",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Tuesday",
        property: "SS Cape Sun",
        brand: "Southern Sun",
        province: "Western Cape",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Tuesday",
        property: "Cape Town City Bowl",
        brand: "Southern Sun",
        province: "Western Cape",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Tuesday",
        property: "Arabella Hotel & Spa",
        brand: "Deluxe Hotels",
        province: "Western Cape",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Wednesday",
        property: "Timeshare Regional Finance Office",
        brand: "",
        province: "Kwazulu Natal",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Wednesday",
        property: "GC King's Beach",
        brand: "Garden Court KBE",
        province: "Eastern Cape",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Wednesday",
        property: "GC Sandton City",
        brand: "Garden Court",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Wednesday",
        property: "IC Sandton Towers",
        brand: "Deluxe Hotels",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Wednesday",
        property: "Sandton Sun",
        brand: "Deluxe Hotels",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Wednesday",
        property: "Sandton Convention Center",
        brand: "",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Wednesday",
        property: "Drakensburg Sun",
        brand: "Lifestyle Resorts",
        province: "Kwazulu Natal",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Wednesday",
        property: "Umhlanga Sands",
        brand: "Lifestyle Resorts",
        province: "Kwazulu Natal",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Wednesday",
        property: "SS Katherine Street",
        brand: "Southern Sun Hotels and Resorts",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Wednesday",
        property: "Pine Lake",
        brand: "Lifestyle Resorts",
        province: "Mpumalanga",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Thursday",
        property: "GC Mthatha",
        brand: "Garden Court",
        province: "Eastern Cape",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Thursday",
        property: "IC OR Tambo",
        brand: "InterContinental Hotels",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Thursday",
        property: "Riverside Hotel and Conference Center",
        brand: "Lifestyle Resorts",
        province: "Vanderbijl Park",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Thursday",
        property: "SS Pretoria",
        brand: "Southern Sun Hotels and Resorts",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Thursday",
        property: "SS Emnotweni",
        brand: "Southern Sun Hotels and Resorts",
        province: "Mpumalanga",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Thursday",
        property: "Cabana Beach",
        brand: "Lifestyle Resorts",
        province: "Kwazulu Natal",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Thursday",
        property: "SE Emnotweni",
        brand: "StayEasy by Southern Sun",
        province: "Mpumalanga",
        downTime: "11h30"
    }, {
        week: 2,
        day: "Thursday",
        property: "Mount Grace Hotel & Spa",
        brand: "Lifestyle Resorts",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Monday",
        property: "Sabi River Sun",
        brand: "Lifestyle Resorts",
        province: "Mpumalanga",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Monday",
        property: "Hazyview Sun",
        brand: "Lifestyle Resorts",
        province: "Mpumalanga",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Monday",
        property: "Hemingways Hotel",
        brand: "Southern Sun Hotels and Resorts",
        province: "Eastern Cape",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Monday",
        property: "SS The Marine",
        brand: "Southern Sun Hotels and Resorts",
        province: "Eastern Cape",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Monday",
        property: "SS Bloemfontein",
        brand: "Southern Sun Hotels and Resorts",
        province: "Freestate",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Monday",
        property: "SS OR Tambo",
        brand: "Southern Sun Hotels and Resorts",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Monday",
        property: "GC Eastgate",
        brand: "Garden Court",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Tuesday",
        property: "Beverley Hills",
        brand: "Deluxe Hotels",
        province: "Kwazulu Natal",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Tuesday",
        property: "The Edward",
        brand: "Deluxe Hotels",
        province: "Kwazulu Natal",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Tuesday",
        property: "Suncoast Hotel and Towers",
        brand: "Southern Sun Hotels and Resorts",
        province: "Kwazulu Natal",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Tuesday",
        property: "GC Marine Parade",
        brand: "Garden Court",
        province: "Kwazulu Natal",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Tuesday",
        property: "GC South Beach",
        brand: "Garden Court",
        province: "Kwazulu Natal",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Tuesday",
        property: "GC Umhlanga",
        brand: "Garden Court",
        province: "Kwazulu Natal",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Tuesday",
        property: "SS Elangeni & Maharani",
        brand: "Southern Sun Hotels and Resorts",
        province: "Kwazulu Natal",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Tuesday",
        property: "SS Rosebank",
        brand: "Deluxe Hotels",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Tuesday",
        property: "SS Sandton",
        brand: "Deluxe Hotels",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Wednesday",
        property: "GC Polokwane",
        brand: "Garden Court",
        province: "Limpopo",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Wednesday",
        property: "GC Kimberley",
        brand: "Garden Court",
        province: "Northern Province",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Wednesday",
        property: "SE Eastgate",
        brand: "StayEasy by Southern Sun",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Wednesday",
        property: "SE Rustenburg",
        brand: "StayEasy by Southern Sun",
        province: "North West Province",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Thursday",
        property: "GC Morningside",
        brand: "Garden Court",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Thursday",
        property: "SS Hyde Park",
        brand: "Southern Sun Hotels and Resorts",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Thursday",
        property: "The Ridge / SE Emalahleni",
        brand: "Southern Sun Hotels and Resorts",
        province: "Mpumalanga",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Thursday",
        property: "SE Pietermaritzburg",
        brand: "StayEasy by Southern Sun",
        province: "Kwazulu Natal",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Thursday",
        property: "GC Milpark",
        brand: "Garden Court",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Thursday",
        property: "54 on Bath",
        brand: "Deluxe",
        province: "Gauteng",
        downTime: "11h30"
    }, {
        week: 3,
        day: "Friday",
        property: "OCIS",
        brand: "Central",
        province: "Gauteng",
        downTime: "11h30"
    }],
    XS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    JS = [...new Set(da.map(e => e.brand).filter(Boolean))],
    ZS = [...new Set(da.map(e => e.province))],
    VN = {
        Monday: {
            bg: "bg-blue-50",
            text: "text-blue-700",
            border: "border-blue-200",
            dot: "bg-blue-500"
        },
        Tuesday: {
            bg: "bg-emerald-50",
            text: "text-emerald-700",
            border: "border-emerald-200",
            dot: "bg-emerald-500"
        },
        Wednesday: {
            bg: "bg-amber-50",
            text: "text-amber-700",
            border: "border-amber-200",
            dot: "bg-amber-500"
        },
        Thursday: {
            bg: "bg-violet-50",
            text: "text-violet-700",
            border: "border-violet-200",
            dot: "bg-violet-500"
        },
        Friday: {
            bg: "bg-rose-50",
            text: "text-rose-700",
            border: "border-rose-200",
            dot: "bg-rose-500"
        }
    },
    UN = [{
        label: "Total Properties",
        value: da.length,
        icon: vk,
        color: "text-primary",
        bgColor: "bg-primary/10"
    }, {
        label: "Brands",
        value: JS.length,
        icon: xk,
        color: "text-violet-600",
        bgColor: "bg-violet-50"
    }, {
        label: "Provinces",
        value: ZS.length,
        icon: Tx,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50"
    }, {
        label: "Patch Days",
        value: XS.length,
        icon: Au,
        color: "text-amber-600",
        bgColor: "bg-amber-50"
    }];

function zN() {
    return T.jsx("div", {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
        children: UN.map(e => {
            const t = e.icon;
            return T.jsxs("div", {
                className: "bg-card rounded-xl border border-border p-4 flex items-center gap-4 transition-all hover:shadow-sm",
                children: [T.jsx("div", {
                    className: `h-10 w-10 rounded-lg ${e.bgColor} flex items-center justify-center flex-shrink-0`,
                    children: T.jsx(t, {
                        className: `h-5 w-5 ${e.color}`
                    })
                }), T.jsxs("div", {
                    children: [T.jsx("p", {
                        className: "text-2xl font-bold tracking-tight text-foreground",
                        children: e.value
                    }), T.jsx("p", {
                        className: "text-xs text-muted-foreground font-medium",
                        children: e.label
                    })]
                })]
            }, e.label)
        })
    })
}
const eb = x.forwardRef(({
    className: e,
    type: t,
    ...n
}, s) => T.jsx("input", {
    type: t,
    className: At("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: s,
    ...n
}));
eb.displayName = "Input";

function x0(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function Na(...e) {
    return t => {
        let n = !1;
        const s = e.map(i => {
            const l = x0(i, t);
            return !n && typeof l == "function" && (n = !0), l
        });
        if (n) return () => {
            for (let i = 0; i < s.length; i++) {
                const l = s[i];
                typeof l == "function" ? l() : x0(e[i], null)
            }
        }
    }
}

function xt(...e) {
    return x.useCallback(Na(...e), e)
}
var $N = Symbol.for("react.lazy"),
    Du = Gu[" use ".trim().toString()];

function WN(e) {
    return typeof e == "object" && e !== null && "then" in e
}

function tb(e) {
    return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === $N && "_payload" in e && WN(e._payload)
}

function HN(e) {
    const t = KN(e),
        n = x.forwardRef((s, i) => {
            let {
                children: l,
                ...u
            } = s;
            tb(l) && typeof Du == "function" && (l = Du(l._payload));
            const c = x.Children.toArray(l),
                f = c.find(QN);
            if (f) {
                const h = f.props.children,
                    m = c.map(y => y === f ? x.Children.count(h) > 1 ? x.Children.only(null) : x.isValidElement(h) ? h.props.children : null : y);
                return T.jsx(t, { ...u,
                    ref: i,
                    children: x.isValidElement(h) ? x.cloneElement(h, void 0, m) : null
                })
            }
            return T.jsx(t, { ...u,
                ref: i,
                children: l
            })
        });
    return n.displayName = `${e}.Slot`, n
}
var qN = HN("Slot");

function KN(e) {
    const t = x.forwardRef((n, s) => {
        let {
            children: i,
            ...l
        } = n;
        if (tb(i) && typeof Du == "function" && (i = Du(i._payload)), x.isValidElement(i)) {
            const u = XN(i),
                c = YN(l, i.props);
            return i.type !== x.Fragment && (c.ref = s ? Na(s, u) : u), x.cloneElement(i, c)
        }
        return x.Children.count(i) > 1 ? x.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var GN = Symbol("radix.slottable");

function QN(e) {
    return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === GN
}

function YN(e, t) {
    const n = { ...t
    };
    for (const s in t) {
        const i = e[s],
            l = t[s];
        /^on[A-Z]/.test(s) ? i && l ? n[s] = (...c) => {
            const f = l(...c);
            return i(...c), f
        } : i && (n[s] = i) : s === "style" ? n[s] = { ...i,
            ...l
        } : s === "className" && (n[s] = [i, l].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function XN(e) {
    var s, i;
    let t = (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : s.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
const JN = ep("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    fa = x.forwardRef(({
        className: e,
        variant: t,
        size: n,
        asChild: s = !1,
        ...i
    }, l) => {
        const u = s ? qN : "button";
        return T.jsx(u, {
            className: At(JN({
                variant: t,
                size: n,
                className: e
            })),
            ref: l,
            ...i
        })
    });
fa.displayName = "Button";

function S0(e, [t, n]) {
    return Math.min(n, Math.max(t, e))
}

function st(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(i) {
        if (e == null || e(i), n === !1 || !i.defaultPrevented) return t == null ? void 0 : t(i)
    }
}

function xp(e, t = []) {
    let n = [];

    function s(l, u) {
        const c = x.createContext(u),
            f = n.length;
        n = [...n, u];
        const h = y => {
            var k;
            const {
                scope: w,
                children: C,
                ...b
            } = y, v = ((k = w == null ? void 0 : w[e]) == null ? void 0 : k[f]) || c, S = x.useMemo(() => b, Object.values(b));
            return T.jsx(v.Provider, {
                value: S,
                children: C
            })
        };
        h.displayName = l + "Provider";

        function m(y, w) {
            var v;
            const C = ((v = w == null ? void 0 : w[e]) == null ? void 0 : v[f]) || c,
                b = x.useContext(C);
            if (b) return b;
            if (u !== void 0) return u;
            throw new Error(`\`${y}\` must be used within \`${l}\``)
        }
        return [h, m]
    }
    const i = () => {
        const l = n.map(u => x.createContext(u));
        return function(c) {
            const f = (c == null ? void 0 : c[e]) || l;
            return x.useMemo(() => ({
                [`__scope${e}`]: { ...c,
                    [e]: f
                }
            }), [c, f])
        }
    };
    return i.scopeName = e, [s, ZN(i, ...t)]
}

function ZN(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const s = e.map(i => ({
            useScope: i(),
            scopeName: i.scopeName
        }));
        return function(l) {
            const u = s.reduce((c, {
                useScope: f,
                scopeName: h
            }) => {
                const y = f(l)[`__scope${h}`];
                return { ...c,
                    ...y
                }
            }, {});
            return x.useMemo(() => ({
                [`__scope${t.scopeName}`]: u
            }), [u])
        }
    };
    return n.scopeName = t.scopeName, n
}

function b0(e) {
    const t = eM(e),
        n = x.forwardRef((s, i) => {
            const {
                children: l,
                ...u
            } = s, c = x.Children.toArray(l), f = c.find(nM);
            if (f) {
                const h = f.props.children,
                    m = c.map(y => y === f ? x.Children.count(h) > 1 ? x.Children.only(null) : x.isValidElement(h) ? h.props.children : null : y);
                return T.jsx(t, { ...u,
                    ref: i,
                    children: x.isValidElement(h) ? x.cloneElement(h, void 0, m) : null
                })
            }
            return T.jsx(t, { ...u,
                ref: i,
                children: l
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function eM(e) {
    const t = x.forwardRef((n, s) => {
        const {
            children: i,
            ...l
        } = n;
        if (x.isValidElement(i)) {
            const u = sM(i),
                c = rM(l, i.props);
            return i.type !== x.Fragment && (c.ref = s ? Na(s, u) : u), x.cloneElement(i, c)
        }
        return x.Children.count(i) > 1 ? x.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var tM = Symbol("radix.slottable");

function nM(e) {
    return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === tM
}

function rM(e, t) {
    const n = { ...t
    };
    for (const s in t) {
        const i = e[s],
            l = t[s];
        /^on[A-Z]/.test(s) ? i && l ? n[s] = (...c) => {
            const f = l(...c);
            return i(...c), f
        } : i && (n[s] = i) : s === "style" ? n[s] = { ...i,
            ...l
        } : s === "className" && (n[s] = [i, l].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function sM(e) {
    var s, i;
    let t = (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : s.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function oM(e) {
    const t = e + "CollectionProvider",
        [n, s] = xp(t),
        [i, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        u = v => {
            const {
                scope: S,
                children: k
            } = v, P = Mr.useRef(null), R = Mr.useRef(new Map).current;
            return T.jsx(i, {
                scope: S,
                itemMap: R,
                collectionRef: P,
                children: k
            })
        };
    u.displayName = t;
    const c = e + "CollectionSlot",
        f = b0(c),
        h = Mr.forwardRef((v, S) => {
            const {
                scope: k,
                children: P
            } = v, R = l(c, k), _ = xt(S, R.collectionRef);
            return T.jsx(f, {
                ref: _,
                children: P
            })
        });
    h.displayName = c;
    const m = e + "CollectionItemSlot",
        y = "data-radix-collection-item",
        w = b0(m),
        C = Mr.forwardRef((v, S) => {
            const {
                scope: k,
                children: P,
                ...R
            } = v, _ = Mr.useRef(null), N = xt(S, _), B = l(m, k);
            return Mr.useEffect(() => (B.itemMap.set(_, {
                ref: _,
                ...R
            }), () => void B.itemMap.delete(_))), T.jsx(w, {
                [y]: "",
                ref: N,
                children: P
            })
        });
    C.displayName = m;

    function b(v) {
        const S = l(e + "CollectionConsumer", v);
        return Mr.useCallback(() => {
            const P = S.collectionRef.current;
            if (!P) return [];
            const R = Array.from(P.querySelectorAll(`[${y}]`));
            return Array.from(S.itemMap.values()).sort((B, U) => R.indexOf(B.ref.current) - R.indexOf(U.ref.current))
        }, [S.collectionRef, S.itemMap])
    }
    return [{
        Provider: u,
        Slot: h,
        ItemSlot: C
    }, b, s]
}
var iM = x.createContext(void 0);

function aM(e) {
    const t = x.useContext(iM);
    return e || t || "ltr"
}

function lM(e) {
    const t = uM(e),
        n = x.forwardRef((s, i) => {
            const {
                children: l,
                ...u
            } = s, c = x.Children.toArray(l), f = c.find(dM);
            if (f) {
                const h = f.props.children,
                    m = c.map(y => y === f ? x.Children.count(h) > 1 ? x.Children.only(null) : x.isValidElement(h) ? h.props.children : null : y);
                return T.jsx(t, { ...u,
                    ref: i,
                    children: x.isValidElement(h) ? x.cloneElement(h, void 0, m) : null
                })
            }
            return T.jsx(t, { ...u,
                ref: i,
                children: l
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function uM(e) {
    const t = x.forwardRef((n, s) => {
        const {
            children: i,
            ...l
        } = n;
        if (x.isValidElement(i)) {
            const u = hM(i),
                c = fM(l, i.props);
            return i.type !== x.Fragment && (c.ref = s ? Na(s, u) : u), x.cloneElement(i, c)
        }
        return x.Children.count(i) > 1 ? x.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var cM = Symbol("radix.slottable");

function dM(e) {
    return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === cM
}

function fM(e, t) {
    const n = { ...t
    };
    for (const s in t) {
        const i = e[s],
            l = t[s];
        /^on[A-Z]/.test(s) ? i && l ? n[s] = (...c) => {
            const f = l(...c);
            return i(...c), f
        } : i && (n[s] = i) : s === "style" ? n[s] = { ...i,
            ...l
        } : s === "className" && (n[s] = [i, l].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function hM(e) {
    var s, i;
    let t = (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : s.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var pM = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    nt = pM.reduce((e, t) => {
        const n = lM(`Primitive.${t}`),
            s = x.forwardRef((i, l) => {
                const {
                    asChild: u,
                    ...c
                } = i, f = u ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), T.jsx(f, { ...c,
                    ref: l
                })
            });
        return s.displayName = `Primitive.${t}`, { ...e,
            [t]: s
        }
    }, {});

function mM(e, t) {
    e && Ta.flushSync(() => e.dispatchEvent(t))
}

function Bs(e) {
    const t = x.useRef(e);
    return x.useEffect(() => {
        t.current = e
    }), x.useMemo(() => (...n) => {
        var s;
        return (s = t.current) == null ? void 0 : s.call(t, ...n)
    }, [])
}

function gM(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Bs(e);
    x.useEffect(() => {
        const s = i => {
            i.key === "Escape" && n(i)
        };
        return t.addEventListener("keydown", s, {
            capture: !0
        }), () => t.removeEventListener("keydown", s, {
            capture: !0
        })
    }, [n, t])
}
var yM = "DismissableLayer",
    Th = "dismissableLayer.update",
    vM = "dismissableLayer.pointerDownOutside",
    wM = "dismissableLayer.focusOutside",
    C0, nb = x.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    rb = x.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            onFocusOutside: l,
            onInteractOutside: u,
            onDismiss: c,
            ...f
        } = e, h = x.useContext(nb), [m, y] = x.useState(null), w = (m == null ? void 0 : m.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, C] = x.useState({}), b = xt(t, U => y(U)), v = Array.from(h.layers), [S] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), k = v.indexOf(S), P = m ? v.indexOf(m) : -1, R = h.layersWithOutsidePointerEventsDisabled.size > 0, _ = P >= k, N = bM(U => {
            const j = U.target,
                G = [...h.branches].some(J => J.contains(j));
            !_ || G || (i == null || i(U), u == null || u(U), U.defaultPrevented || c == null || c())
        }, w), B = CM(U => {
            const j = U.target;
            [...h.branches].some(J => J.contains(j)) || (l == null || l(U), u == null || u(U), U.defaultPrevented || c == null || c())
        }, w);
        return gM(U => {
            P === h.layers.size - 1 && (s == null || s(U), !U.defaultPrevented && c && (U.preventDefault(), c()))
        }, w), x.useEffect(() => {
            if (m) return n && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (C0 = w.body.style.pointerEvents, w.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(m)), h.layers.add(m), E0(), () => {
                n && h.layersWithOutsidePointerEventsDisabled.size === 1 && (w.body.style.pointerEvents = C0)
            }
        }, [m, w, n, h]), x.useEffect(() => () => {
            m && (h.layers.delete(m), h.layersWithOutsidePointerEventsDisabled.delete(m), E0())
        }, [m, h]), x.useEffect(() => {
            const U = () => C({});
            return document.addEventListener(Th, U), () => document.removeEventListener(Th, U)
        }, []), T.jsx(nt.div, { ...f,
            ref: b,
            style: {
                pointerEvents: R ? _ ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: st(e.onFocusCapture, B.onFocusCapture),
            onBlurCapture: st(e.onBlurCapture, B.onBlurCapture),
            onPointerDownCapture: st(e.onPointerDownCapture, N.onPointerDownCapture)
        })
    });
rb.displayName = yM;
var xM = "DismissableLayerBranch",
    SM = x.forwardRef((e, t) => {
        const n = x.useContext(nb),
            s = x.useRef(null),
            i = xt(t, s);
        return x.useEffect(() => {
            const l = s.current;
            if (l) return n.branches.add(l), () => {
                n.branches.delete(l)
            }
        }, [n.branches]), T.jsx(nt.div, { ...e,
            ref: i
        })
    });
SM.displayName = xM;

function bM(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Bs(e),
        s = x.useRef(!1),
        i = x.useRef(() => {});
    return x.useEffect(() => {
        const l = c => {
                if (c.target && !s.current) {
                    let f = function() {
                        sb(vM, n, h, {
                            discrete: !0
                        })
                    };
                    const h = {
                        originalEvent: c
                    };
                    c.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = f, t.addEventListener("click", i.current, {
                        once: !0
                    })) : f()
                } else t.removeEventListener("click", i.current);
                s.current = !1
            },
            u = window.setTimeout(() => {
                t.addEventListener("pointerdown", l)
            }, 0);
        return () => {
            window.clearTimeout(u), t.removeEventListener("pointerdown", l), t.removeEventListener("click", i.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => s.current = !0
    }
}

function CM(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Bs(e),
        s = x.useRef(!1);
    return x.useEffect(() => {
        const i = l => {
            l.target && !s.current && sb(wM, n, {
                originalEvent: l
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i)
    }, [t, n]), {
        onFocusCapture: () => s.current = !0,
        onBlurCapture: () => s.current = !1
    }
}

function E0() {
    const e = new CustomEvent(Th);
    document.dispatchEvent(e)
}

function sb(e, t, n, {
    discrete: s
}) {
    const i = n.originalEvent.target,
        l = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && i.addEventListener(e, t, {
        once: !0
    }), s ? mM(i, l) : i.dispatchEvent(l)
}
var Rf = 0;

function EM() {
    x.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? T0()), document.body.insertAdjacentElement("beforeend", e[1] ? ? T0()), Rf++, () => {
            Rf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Rf--
        }
    }, [])
}

function T0() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}
var Pf = "focusScope.autoFocusOnMount",
    Af = "focusScope.autoFocusOnUnmount",
    k0 = {
        bubbles: !1,
        cancelable: !0
    },
    TM = "FocusScope",
    ob = x.forwardRef((e, t) => {
        const {
            loop: n = !1,
            trapped: s = !1,
            onMountAutoFocus: i,
            onUnmountAutoFocus: l,
            ...u
        } = e, [c, f] = x.useState(null), h = Bs(i), m = Bs(l), y = x.useRef(null), w = xt(t, v => f(v)), C = x.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        x.useEffect(() => {
            if (s) {
                let v = function(R) {
                        if (C.paused || !c) return;
                        const _ = R.target;
                        c.contains(_) ? y.current = _ : Dr(y.current, {
                            select: !0
                        })
                    },
                    S = function(R) {
                        if (C.paused || !c) return;
                        const _ = R.relatedTarget;
                        _ !== null && (c.contains(_) || Dr(y.current, {
                            select: !0
                        }))
                    },
                    k = function(R) {
                        if (document.activeElement === document.body)
                            for (const N of R) N.removedNodes.length > 0 && Dr(c)
                    };
                document.addEventListener("focusin", v), document.addEventListener("focusout", S);
                const P = new MutationObserver(k);
                return c && P.observe(c, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", v), document.removeEventListener("focusout", S), P.disconnect()
                }
            }
        }, [s, c, C.paused]), x.useEffect(() => {
            if (c) {
                P0.add(C);
                const v = document.activeElement;
                if (!c.contains(v)) {
                    const k = new CustomEvent(Pf, k0);
                    c.addEventListener(Pf, h), c.dispatchEvent(k), k.defaultPrevented || (kM(OM(ib(c)), {
                        select: !0
                    }), document.activeElement === v && Dr(c))
                }
                return () => {
                    c.removeEventListener(Pf, h), setTimeout(() => {
                        const k = new CustomEvent(Af, k0);
                        c.addEventListener(Af, m), c.dispatchEvent(k), k.defaultPrevented || Dr(v ? ? document.body, {
                            select: !0
                        }), c.removeEventListener(Af, m), P0.remove(C)
                    }, 0)
                }
            }
        }, [c, h, m, C]);
        const b = x.useCallback(v => {
            if (!n && !s || C.paused) return;
            const S = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
                k = document.activeElement;
            if (S && k) {
                const P = v.currentTarget,
                    [R, _] = RM(P);
                R && _ ? !v.shiftKey && k === _ ? (v.preventDefault(), n && Dr(R, {
                    select: !0
                })) : v.shiftKey && k === R && (v.preventDefault(), n && Dr(_, {
                    select: !0
                })) : k === P && v.preventDefault()
            }
        }, [n, s, C.paused]);
        return T.jsx(nt.div, {
            tabIndex: -1,
            ...u,
            ref: w,
            onKeyDown: b
        })
    });
ob.displayName = TM;

function kM(e, {
    select: t = !1
} = {}) {
    const n = document.activeElement;
    for (const s of e)
        if (Dr(s, {
                select: t
            }), document.activeElement !== n) return
}

function RM(e) {
    const t = ib(e),
        n = R0(t, e),
        s = R0(t.reverse(), e);
    return [n, s]
}

function ib(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: s => {
                const i = s.tagName === "INPUT" && s.type === "hidden";
                return s.disabled || s.hidden || i ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function R0(e, t) {
    for (const n of e)
        if (!PM(n, {
                upTo: t
            })) return n
}

function PM(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function AM(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function Dr(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && AM(e) && t && e.select()
    }
}
var P0 = _M();

function _M() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()), e = A0(e, t), e.unshift(t)
        },
        remove(t) {
            var n;
            e = A0(e, t), (n = e[0]) == null || n.resume()
        }
    }
}

function A0(e, t) {
    const n = [...e],
        s = n.indexOf(t);
    return s !== -1 && n.splice(s, 1), n
}

function OM(e) {
    return e.filter(t => t.tagName !== "A")
}
var Wt = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
    NM = Gu[" useId ".trim().toString()] || (() => {}),
    MM = 0;

function Sp(e) {
    const [t, n] = x.useState(NM());
    return Wt(() => {
        n(s => s ? ? String(MM++))
    }, [e]), t ? `radix-${t}` : ""
}
const LM = ["top", "right", "bottom", "left"],
    Qr = Math.min,
    Qt = Math.max,
    ju = Math.round,
    tu = Math.floor,
    Fn = e => ({
        x: e,
        y: e
    }),
    DM = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    jM = {
        start: "end",
        end: "start"
    };

function kh(e, t, n) {
    return Qt(e, Qr(t, n))
}

function ir(e, t) {
    return typeof e == "function" ? e(t) : e
}

function ar(e) {
    return e.split("-")[0]
}

function Yo(e) {
    return e.split("-")[1]
}

function bp(e) {
    return e === "x" ? "y" : "x"
}

function Cp(e) {
    return e === "y" ? "height" : "width"
}
const IM = new Set(["top", "bottom"]);

function jn(e) {
    return IM.has(ar(e)) ? "y" : "x"
}

function Ep(e) {
    return bp(jn(e))
}

function FM(e, t, n) {
    n === void 0 && (n = !1);
    const s = Yo(e),
        i = Ep(e),
        l = Cp(i);
    let u = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
    return t.reference[l] > t.floating[l] && (u = Iu(u)), [u, Iu(u)]
}

function BM(e) {
    const t = Iu(e);
    return [Rh(e), t, Rh(t)]
}

function Rh(e) {
    return e.replace(/start|end/g, t => jM[t])
}
const _0 = ["left", "right"],
    O0 = ["right", "left"],
    VM = ["top", "bottom"],
    UM = ["bottom", "top"];

function zM(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? O0 : _0 : t ? _0 : O0;
        case "left":
        case "right":
            return t ? VM : UM;
        default:
            return []
    }
}

function $M(e, t, n, s) {
    const i = Yo(e);
    let l = zM(ar(e), n === "start", s);
    return i && (l = l.map(u => u + "-" + i), t && (l = l.concat(l.map(Rh)))), l
}

function Iu(e) {
    return e.replace(/left|right|bottom|top/g, t => DM[t])
}

function WM(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function ab(e) {
    return typeof e != "number" ? WM(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function Fu(e) {
    const {
        x: t,
        y: n,
        width: s,
        height: i
    } = e;
    return {
        width: s,
        height: i,
        top: n,
        left: t,
        right: t + s,
        bottom: n + i,
        x: t,
        y: n
    }
}

function N0(e, t, n) {
    let {
        reference: s,
        floating: i
    } = e;
    const l = jn(t),
        u = Ep(t),
        c = Cp(u),
        f = ar(t),
        h = l === "y",
        m = s.x + s.width / 2 - i.width / 2,
        y = s.y + s.height / 2 - i.height / 2,
        w = s[c] / 2 - i[c] / 2;
    let C;
    switch (f) {
        case "top":
            C = {
                x: m,
                y: s.y - i.height
            };
            break;
        case "bottom":
            C = {
                x: m,
                y: s.y + s.height
            };
            break;
        case "right":
            C = {
                x: s.x + s.width,
                y
            };
            break;
        case "left":
            C = {
                x: s.x - i.width,
                y
            };
            break;
        default:
            C = {
                x: s.x,
                y: s.y
            }
    }
    switch (Yo(t)) {
        case "start":
            C[u] -= w * (n && h ? -1 : 1);
            break;
        case "end":
            C[u] += w * (n && h ? -1 : 1);
            break
    }
    return C
}
async function HM(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: s,
        y: i,
        platform: l,
        rects: u,
        elements: c,
        strategy: f
    } = e, {
        boundary: h = "clippingAncestors",
        rootBoundary: m = "viewport",
        elementContext: y = "floating",
        altBoundary: w = !1,
        padding: C = 0
    } = ir(t, e), b = ab(C), S = c[w ? y === "floating" ? "reference" : "floating" : y], k = Fu(await l.getClippingRect({
        element: (n = await (l.isElement == null ? void 0 : l.isElement(S))) == null || n ? S : S.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(c.floating)),
        boundary: h,
        rootBoundary: m,
        strategy: f
    })), P = y === "floating" ? {
        x: s,
        y: i,
        width: u.floating.width,
        height: u.floating.height
    } : u.reference, R = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(c.floating)), _ = await (l.isElement == null ? void 0 : l.isElement(R)) ? await (l.getScale == null ? void 0 : l.getScale(R)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, N = Fu(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: c,
        rect: P,
        offsetParent: R,
        strategy: f
    }) : P);
    return {
        top: (k.top - N.top + b.top) / _.y,
        bottom: (N.bottom - k.bottom + b.bottom) / _.y,
        left: (k.left - N.left + b.left) / _.x,
        right: (N.right - k.right + b.right) / _.x
    }
}
const qM = async (e, t, n) => {
        const {
            placement: s = "bottom",
            strategy: i = "absolute",
            middleware: l = [],
            platform: u
        } = n, c = l.filter(Boolean), f = await (u.isRTL == null ? void 0 : u.isRTL(t));
        let h = await u.getElementRects({
                reference: e,
                floating: t,
                strategy: i
            }),
            {
                x: m,
                y
            } = N0(h, s, f),
            w = s,
            C = {},
            b = 0;
        for (let S = 0; S < c.length; S++) {
            var v;
            const {
                name: k,
                fn: P
            } = c[S], {
                x: R,
                y: _,
                data: N,
                reset: B
            } = await P({
                x: m,
                y,
                initialPlacement: s,
                placement: w,
                strategy: i,
                middlewareData: C,
                rects: h,
                platform: { ...u,
                    detectOverflow: (v = u.detectOverflow) != null ? v : HM
                },
                elements: {
                    reference: e,
                    floating: t
                }
            });
            m = R ? ? m, y = _ ? ? y, C = { ...C,
                [k]: { ...C[k],
                    ...N
                }
            }, B && b <= 50 && (b++, typeof B == "object" && (B.placement && (w = B.placement), B.rects && (h = B.rects === !0 ? await u.getElementRects({
                reference: e,
                floating: t,
                strategy: i
            }) : B.rects), {
                x: m,
                y
            } = N0(h, w, f)), S = -1)
        }
        return {
            x: m,
            y,
            placement: w,
            strategy: i,
            middlewareData: C
        }
    },
    KM = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: s,
                placement: i,
                rects: l,
                platform: u,
                elements: c,
                middlewareData: f
            } = t, {
                element: h,
                padding: m = 0
            } = ir(e, t) || {};
            if (h == null) return {};
            const y = ab(m),
                w = {
                    x: n,
                    y: s
                },
                C = Ep(i),
                b = Cp(C),
                v = await u.getDimensions(h),
                S = C === "y",
                k = S ? "top" : "left",
                P = S ? "bottom" : "right",
                R = S ? "clientHeight" : "clientWidth",
                _ = l.reference[b] + l.reference[C] - w[C] - l.floating[b],
                N = w[C] - l.reference[C],
                B = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(h));
            let U = B ? B[R] : 0;
            (!U || !await (u.isElement == null ? void 0 : u.isElement(B))) && (U = c.floating[R] || l.floating[b]);
            const j = _ / 2 - N / 2,
                G = U / 2 - v[b] / 2 - 1,
                J = Qr(y[k], G),
                ee = Qr(y[P], G),
                de = J,
                ge = U - v[b] - ee,
                le = U / 2 - v[b] / 2 + j,
                Ce = kh(de, le, ge),
                te = !f.arrow && Yo(i) != null && le !== Ce && l.reference[b] / 2 - (le < de ? J : ee) - v[b] / 2 < 0,
                Z = te ? le < de ? le - de : le - ge : 0;
            return {
                [C]: w[C] + Z,
                data: {
                    [C]: Ce,
                    centerOffset: le - Ce - Z,
                    ...te && {
                        alignmentOffset: Z
                    }
                },
                reset: te
            }
        }
    }),
    GM = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, s;
                const {
                    placement: i,
                    middlewareData: l,
                    rects: u,
                    initialPlacement: c,
                    platform: f,
                    elements: h
                } = t, {
                    mainAxis: m = !0,
                    crossAxis: y = !0,
                    fallbackPlacements: w,
                    fallbackStrategy: C = "bestFit",
                    fallbackAxisSideDirection: b = "none",
                    flipAlignment: v = !0,
                    ...S
                } = ir(e, t);
                if ((n = l.arrow) != null && n.alignmentOffset) return {};
                const k = ar(i),
                    P = jn(c),
                    R = ar(c) === c,
                    _ = await (f.isRTL == null ? void 0 : f.isRTL(h.floating)),
                    N = w || (R || !v ? [Iu(c)] : BM(c)),
                    B = b !== "none";
                !w && B && N.push(...$M(c, v, b, _));
                const U = [c, ...N],
                    j = await f.detectOverflow(t, S),
                    G = [];
                let J = ((s = l.flip) == null ? void 0 : s.overflows) || [];
                if (m && G.push(j[k]), y) {
                    const le = FM(i, u, _);
                    G.push(j[le[0]], j[le[1]])
                }
                if (J = [...J, {
                        placement: i,
                        overflows: G
                    }], !G.every(le => le <= 0)) {
                    var ee, de;
                    const le = (((ee = l.flip) == null ? void 0 : ee.index) || 0) + 1,
                        Ce = U[le];
                    if (Ce && (!(y === "alignment" ? P !== jn(Ce) : !1) || J.every($ => jn($.placement) === P ? $.overflows[0] > 0 : !0))) return {
                        data: {
                            index: le,
                            overflows: J
                        },
                        reset: {
                            placement: Ce
                        }
                    };
                    let te = (de = J.filter(Z => Z.overflows[0] <= 0).sort((Z, $) => Z.overflows[1] - $.overflows[1])[0]) == null ? void 0 : de.placement;
                    if (!te) switch (C) {
                        case "bestFit":
                            {
                                var ge;
                                const Z = (ge = J.filter($ => {
                                    if (B) {
                                        const X = jn($.placement);
                                        return X === P || X === "y"
                                    }
                                    return !0
                                }).map($ => [$.placement, $.overflows.filter(X => X > 0).reduce((X, W) => X + W, 0)]).sort(($, X) => $[1] - X[1])[0]) == null ? void 0 : ge[0];Z && (te = Z);
                                break
                            }
                        case "initialPlacement":
                            te = c;
                            break
                    }
                    if (i !== te) return {
                        reset: {
                            placement: te
                        }
                    }
                }
                return {}
            }
        }
    };

function M0(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function L0(e) {
    return LM.some(t => e[t] >= 0)
}
const QM = function(e) {
        return e === void 0 && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
                const {
                    rects: n,
                    platform: s
                } = t, {
                    strategy: i = "referenceHidden",
                    ...l
                } = ir(e, t);
                switch (i) {
                    case "referenceHidden":
                        {
                            const u = await s.detectOverflow(t, { ...l,
                                    elementContext: "reference"
                                }),
                                c = M0(u, n.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: c,
                                    referenceHidden: L0(c)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const u = await s.detectOverflow(t, { ...l,
                                    altBoundary: !0
                                }),
                                c = M0(u, n.floating);
                            return {
                                data: {
                                    escapedOffsets: c,
                                    escaped: L0(c)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    },
    lb = new Set(["left", "top"]);
async function YM(e, t) {
    const {
        placement: n,
        platform: s,
        elements: i
    } = e, l = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), u = ar(n), c = Yo(n), f = jn(n) === "y", h = lb.has(u) ? -1 : 1, m = l && f ? -1 : 1, y = ir(t, e);
    let {
        mainAxis: w,
        crossAxis: C,
        alignmentAxis: b
    } = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: y.mainAxis || 0,
        crossAxis: y.crossAxis || 0,
        alignmentAxis: y.alignmentAxis
    };
    return c && typeof b == "number" && (C = c === "end" ? b * -1 : b), f ? {
        x: C * m,
        y: w * h
    } : {
        x: w * h,
        y: C * m
    }
}
const XM = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, s;
                const {
                    x: i,
                    y: l,
                    placement: u,
                    middlewareData: c
                } = t, f = await YM(t, e);
                return u === ((n = c.offset) == null ? void 0 : n.placement) && (s = c.arrow) != null && s.alignmentOffset ? {} : {
                    x: i + f.x,
                    y: l + f.y,
                    data: { ...f,
                        placement: u
                    }
                }
            }
        }
    },
    JM = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: s,
                    placement: i,
                    platform: l
                } = t, {
                    mainAxis: u = !0,
                    crossAxis: c = !1,
                    limiter: f = {
                        fn: k => {
                            let {
                                x: P,
                                y: R
                            } = k;
                            return {
                                x: P,
                                y: R
                            }
                        }
                    },
                    ...h
                } = ir(e, t), m = {
                    x: n,
                    y: s
                }, y = await l.detectOverflow(t, h), w = jn(ar(i)), C = bp(w);
                let b = m[C],
                    v = m[w];
                if (u) {
                    const k = C === "y" ? "top" : "left",
                        P = C === "y" ? "bottom" : "right",
                        R = b + y[k],
                        _ = b - y[P];
                    b = kh(R, b, _)
                }
                if (c) {
                    const k = w === "y" ? "top" : "left",
                        P = w === "y" ? "bottom" : "right",
                        R = v + y[k],
                        _ = v - y[P];
                    v = kh(R, v, _)
                }
                const S = f.fn({ ...t,
                    [C]: b,
                    [w]: v
                });
                return { ...S,
                    data: {
                        x: S.x - n,
                        y: S.y - s,
                        enabled: {
                            [C]: u,
                            [w]: c
                        }
                    }
                }
            }
        }
    },
    ZM = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: s,
                    placement: i,
                    rects: l,
                    middlewareData: u
                } = t, {
                    offset: c = 0,
                    mainAxis: f = !0,
                    crossAxis: h = !0
                } = ir(e, t), m = {
                    x: n,
                    y: s
                }, y = jn(i), w = bp(y);
                let C = m[w],
                    b = m[y];
                const v = ir(c, t),
                    S = typeof v == "number" ? {
                        mainAxis: v,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...v
                    };
                if (f) {
                    const R = w === "y" ? "height" : "width",
                        _ = l.reference[w] - l.floating[R] + S.mainAxis,
                        N = l.reference[w] + l.reference[R] - S.mainAxis;
                    C < _ ? C = _ : C > N && (C = N)
                }
                if (h) {
                    var k, P;
                    const R = w === "y" ? "width" : "height",
                        _ = lb.has(ar(i)),
                        N = l.reference[y] - l.floating[R] + (_ && ((k = u.offset) == null ? void 0 : k[y]) || 0) + (_ ? 0 : S.crossAxis),
                        B = l.reference[y] + l.reference[R] + (_ ? 0 : ((P = u.offset) == null ? void 0 : P[y]) || 0) - (_ ? S.crossAxis : 0);
                    b < N ? b = N : b > B && (b = B)
                }
                return {
                    [w]: C,
                    [y]: b
                }
            }
        }
    },
    eL = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, s;
                const {
                    placement: i,
                    rects: l,
                    platform: u,
                    elements: c
                } = t, {
                    apply: f = () => {},
                    ...h
                } = ir(e, t), m = await u.detectOverflow(t, h), y = ar(i), w = Yo(i), C = jn(i) === "y", {
                    width: b,
                    height: v
                } = l.floating;
                let S, k;
                y === "top" || y === "bottom" ? (S = y, k = w === (await (u.isRTL == null ? void 0 : u.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (k = y, S = w === "end" ? "top" : "bottom");
                const P = v - m.top - m.bottom,
                    R = b - m.left - m.right,
                    _ = Qr(v - m[S], P),
                    N = Qr(b - m[k], R),
                    B = !t.middlewareData.shift;
                let U = _,
                    j = N;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (j = R), (s = t.middlewareData.shift) != null && s.enabled.y && (U = P), B && !w) {
                    const J = Qt(m.left, 0),
                        ee = Qt(m.right, 0),
                        de = Qt(m.top, 0),
                        ge = Qt(m.bottom, 0);
                    C ? j = b - 2 * (J !== 0 || ee !== 0 ? J + ee : Qt(m.left, m.right)) : U = v - 2 * (de !== 0 || ge !== 0 ? de + ge : Qt(m.top, m.bottom))
                }
                await f({ ...t,
                    availableWidth: j,
                    availableHeight: U
                });
                const G = await u.getDimensions(c.floating);
                return b !== G.width || v !== G.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function rc() {
    return typeof window < "u"
}

function Xo(e) {
    return ub(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function Yt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function $n(e) {
    var t;
    return (t = (ub(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function ub(e) {
    return rc() ? e instanceof Node || e instanceof Yt(e).Node : !1
}

function En(e) {
    return rc() ? e instanceof Element || e instanceof Yt(e).Element : !1
}

function zn(e) {
    return rc() ? e instanceof HTMLElement || e instanceof Yt(e).HTMLElement : !1
}

function D0(e) {
    return !rc() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Yt(e).ShadowRoot
}
const tL = new Set(["inline", "contents"]);

function Ma(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: s,
        display: i
    } = Tn(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !tL.has(i)
}
const nL = new Set(["table", "td", "th"]);

function rL(e) {
    return nL.has(Xo(e))
}
const sL = [":popover-open", ":modal"];

function sc(e) {
    return sL.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}
const oL = ["transform", "translate", "scale", "rotate", "perspective"],
    iL = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    aL = ["paint", "layout", "strict", "content"];

function Tp(e) {
    const t = kp(),
        n = En(e) ? Tn(e) : e;
    return oL.some(s => n[s] ? n[s] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || iL.some(s => (n.willChange || "").includes(s)) || aL.some(s => (n.contain || "").includes(s))
}

function lL(e) {
    let t = Yr(e);
    for (; zn(t) && !zo(t);) {
        if (Tp(t)) return t;
        if (sc(t)) return null;
        t = Yr(t)
    }
    return null
}

function kp() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const uL = new Set(["html", "body", "#document"]);

function zo(e) {
    return uL.has(Xo(e))
}

function Tn(e) {
    return Yt(e).getComputedStyle(e)
}

function oc(e) {
    return En(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function Yr(e) {
    if (Xo(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || D0(e) && e.host || $n(e);
    return D0(t) ? t.host : t
}

function cb(e) {
    const t = Yr(e);
    return zo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : zn(t) && Ma(t) ? t : cb(t)
}

function ha(e, t, n) {
    var s;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const i = cb(e),
        l = i === ((s = e.ownerDocument) == null ? void 0 : s.body),
        u = Yt(i);
    if (l) {
        const c = Ph(u);
        return t.concat(u, u.visualViewport || [], Ma(i) ? i : [], c && n ? ha(c) : [])
    }
    return t.concat(i, ha(i, [], n))
}

function Ph(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function db(e) {
    const t = Tn(e);
    let n = parseFloat(t.width) || 0,
        s = parseFloat(t.height) || 0;
    const i = zn(e),
        l = i ? e.offsetWidth : n,
        u = i ? e.offsetHeight : s,
        c = ju(n) !== l || ju(s) !== u;
    return c && (n = l, s = u), {
        width: n,
        height: s,
        $: c
    }
}

function Rp(e) {
    return En(e) ? e : e.contextElement
}

function Ro(e) {
    const t = Rp(e);
    if (!zn(t)) return Fn(1);
    const n = t.getBoundingClientRect(),
        {
            width: s,
            height: i,
            $: l
        } = db(t);
    let u = (l ? ju(n.width) : n.width) / s,
        c = (l ? ju(n.height) : n.height) / i;
    return (!u || !Number.isFinite(u)) && (u = 1), (!c || !Number.isFinite(c)) && (c = 1), {
        x: u,
        y: c
    }
}
const cL = Fn(0);

function fb(e) {
    const t = Yt(e);
    return !kp() || !t.visualViewport ? cL : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function dL(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== Yt(e) ? !1 : t
}

function Vs(e, t, n, s) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const i = e.getBoundingClientRect(),
        l = Rp(e);
    let u = Fn(1);
    t && (s ? En(s) && (u = Ro(s)) : u = Ro(e));
    const c = dL(l, n, s) ? fb(l) : Fn(0);
    let f = (i.left + c.x) / u.x,
        h = (i.top + c.y) / u.y,
        m = i.width / u.x,
        y = i.height / u.y;
    if (l) {
        const w = Yt(l),
            C = s && En(s) ? Yt(s) : s;
        let b = w,
            v = Ph(b);
        for (; v && s && C !== b;) {
            const S = Ro(v),
                k = v.getBoundingClientRect(),
                P = Tn(v),
                R = k.left + (v.clientLeft + parseFloat(P.paddingLeft)) * S.x,
                _ = k.top + (v.clientTop + parseFloat(P.paddingTop)) * S.y;
            f *= S.x, h *= S.y, m *= S.x, y *= S.y, f += R, h += _, b = Yt(v), v = Ph(b)
        }
    }
    return Fu({
        width: m,
        height: y,
        x: f,
        y: h
    })
}

function ic(e, t) {
    const n = oc(e).scrollLeft;
    return t ? t.left + n : Vs($n(e)).left + n
}

function hb(e, t) {
    const n = e.getBoundingClientRect(),
        s = n.left + t.scrollLeft - ic(e, n),
        i = n.top + t.scrollTop;
    return {
        x: s,
        y: i
    }
}

function fL(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: s,
        strategy: i
    } = e;
    const l = i === "fixed",
        u = $n(s),
        c = t ? sc(t.floating) : !1;
    if (s === u || c && l) return n;
    let f = {
            scrollLeft: 0,
            scrollTop: 0
        },
        h = Fn(1);
    const m = Fn(0),
        y = zn(s);
    if ((y || !y && !l) && ((Xo(s) !== "body" || Ma(u)) && (f = oc(s)), zn(s))) {
        const C = Vs(s);
        h = Ro(s), m.x = C.x + s.clientLeft, m.y = C.y + s.clientTop
    }
    const w = u && !y && !l ? hb(u, f) : Fn(0);
    return {
        width: n.width * h.x,
        height: n.height * h.y,
        x: n.x * h.x - f.scrollLeft * h.x + m.x + w.x,
        y: n.y * h.y - f.scrollTop * h.y + m.y + w.y
    }
}

function hL(e) {
    return Array.from(e.getClientRects())
}

function pL(e) {
    const t = $n(e),
        n = oc(e),
        s = e.ownerDocument.body,
        i = Qt(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth),
        l = Qt(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
    let u = -n.scrollLeft + ic(e);
    const c = -n.scrollTop;
    return Tn(s).direction === "rtl" && (u += Qt(t.clientWidth, s.clientWidth) - i), {
        width: i,
        height: l,
        x: u,
        y: c
    }
}
const j0 = 25;

function mL(e, t) {
    const n = Yt(e),
        s = $n(e),
        i = n.visualViewport;
    let l = s.clientWidth,
        u = s.clientHeight,
        c = 0,
        f = 0;
    if (i) {
        l = i.width, u = i.height;
        const m = kp();
        (!m || m && t === "fixed") && (c = i.offsetLeft, f = i.offsetTop)
    }
    const h = ic(s);
    if (h <= 0) {
        const m = s.ownerDocument,
            y = m.body,
            w = getComputedStyle(y),
            C = m.compatMode === "CSS1Compat" && parseFloat(w.marginLeft) + parseFloat(w.marginRight) || 0,
            b = Math.abs(s.clientWidth - y.clientWidth - C);
        b <= j0 && (l -= b)
    } else h <= j0 && (l += h);
    return {
        width: l,
        height: u,
        x: c,
        y: f
    }
}
const gL = new Set(["absolute", "fixed"]);

function yL(e, t) {
    const n = Vs(e, !0, t === "fixed"),
        s = n.top + e.clientTop,
        i = n.left + e.clientLeft,
        l = zn(e) ? Ro(e) : Fn(1),
        u = e.clientWidth * l.x,
        c = e.clientHeight * l.y,
        f = i * l.x,
        h = s * l.y;
    return {
        width: u,
        height: c,
        x: f,
        y: h
    }
}

function I0(e, t, n) {
    let s;
    if (t === "viewport") s = mL(e, n);
    else if (t === "document") s = pL($n(e));
    else if (En(t)) s = yL(t, n);
    else {
        const i = fb(e);
        s = {
            x: t.x - i.x,
            y: t.y - i.y,
            width: t.width,
            height: t.height
        }
    }
    return Fu(s)
}

function pb(e, t) {
    const n = Yr(e);
    return n === t || !En(n) || zo(n) ? !1 : Tn(n).position === "fixed" || pb(n, t)
}

function vL(e, t) {
    const n = t.get(e);
    if (n) return n;
    let s = ha(e, [], !1).filter(c => En(c) && Xo(c) !== "body"),
        i = null;
    const l = Tn(e).position === "fixed";
    let u = l ? Yr(e) : e;
    for (; En(u) && !zo(u);) {
        const c = Tn(u),
            f = Tp(u);
        !f && c.position === "fixed" && (i = null), (l ? !f && !i : !f && c.position === "static" && !!i && gL.has(i.position) || Ma(u) && !f && pb(e, u)) ? s = s.filter(m => m !== u) : i = c, u = Yr(u)
    }
    return t.set(e, s), s
}

function wL(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: s,
        strategy: i
    } = e;
    const u = [...n === "clippingAncestors" ? sc(t) ? [] : vL(t, this._c) : [].concat(n), s],
        c = u[0],
        f = u.reduce((h, m) => {
            const y = I0(t, m, i);
            return h.top = Qt(y.top, h.top), h.right = Qr(y.right, h.right), h.bottom = Qr(y.bottom, h.bottom), h.left = Qt(y.left, h.left), h
        }, I0(t, c, i));
    return {
        width: f.right - f.left,
        height: f.bottom - f.top,
        x: f.left,
        y: f.top
    }
}

function xL(e) {
    const {
        width: t,
        height: n
    } = db(e);
    return {
        width: t,
        height: n
    }
}

function SL(e, t, n) {
    const s = zn(t),
        i = $n(t),
        l = n === "fixed",
        u = Vs(e, !0, l, t);
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const f = Fn(0);

    function h() {
        f.x = ic(i)
    }
    if (s || !s && !l)
        if ((Xo(t) !== "body" || Ma(i)) && (c = oc(t)), s) {
            const C = Vs(t, !0, l, t);
            f.x = C.x + t.clientLeft, f.y = C.y + t.clientTop
        } else i && h();
    l && !s && i && h();
    const m = i && !s && !l ? hb(i, c) : Fn(0),
        y = u.left + c.scrollLeft - f.x - m.x,
        w = u.top + c.scrollTop - f.y - m.y;
    return {
        x: y,
        y: w,
        width: u.width,
        height: u.height
    }
}

function _f(e) {
    return Tn(e).position === "static"
}

function F0(e, t) {
    if (!zn(e) || Tn(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return $n(e) === n && (n = n.ownerDocument.body), n
}

function mb(e, t) {
    const n = Yt(e);
    if (sc(e)) return n;
    if (!zn(e)) {
        let i = Yr(e);
        for (; i && !zo(i);) {
            if (En(i) && !_f(i)) return i;
            i = Yr(i)
        }
        return n
    }
    let s = F0(e, t);
    for (; s && rL(s) && _f(s);) s = F0(s, t);
    return s && zo(s) && _f(s) && !Tp(s) ? n : s || lL(e) || n
}
const bL = async function(e) {
    const t = this.getOffsetParent || mb,
        n = this.getDimensions,
        s = await n(e.floating);
    return {
        reference: SL(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: s.width,
            height: s.height
        }
    }
};

function CL(e) {
    return Tn(e).direction === "rtl"
}
const EL = {
    convertOffsetParentRelativeRectToViewportRelativeRect: fL,
    getDocumentElement: $n,
    getClippingRect: wL,
    getOffsetParent: mb,
    getElementRects: bL,
    getClientRects: hL,
    getDimensions: xL,
    getScale: Ro,
    isElement: En,
    isRTL: CL
};

function gb(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function TL(e, t) {
    let n = null,
        s;
    const i = $n(e);

    function l() {
        var c;
        clearTimeout(s), (c = n) == null || c.disconnect(), n = null
    }

    function u(c, f) {
        c === void 0 && (c = !1), f === void 0 && (f = 1), l();
        const h = e.getBoundingClientRect(),
            {
                left: m,
                top: y,
                width: w,
                height: C
            } = h;
        if (c || t(), !w || !C) return;
        const b = tu(y),
            v = tu(i.clientWidth - (m + w)),
            S = tu(i.clientHeight - (y + C)),
            k = tu(m),
            R = {
                rootMargin: -b + "px " + -v + "px " + -S + "px " + -k + "px",
                threshold: Qt(0, Qr(1, f)) || 1
            };
        let _ = !0;

        function N(B) {
            const U = B[0].intersectionRatio;
            if (U !== f) {
                if (!_) return u();
                U ? u(!1, U) : s = setTimeout(() => {
                    u(!1, 1e-7)
                }, 1e3)
            }
            U === 1 && !gb(h, e.getBoundingClientRect()) && u(), _ = !1
        }
        try {
            n = new IntersectionObserver(N, { ...R,
                root: i.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(N, R)
        }
        n.observe(e)
    }
    return u(!0), l
}

function kL(e, t, n, s) {
    s === void 0 && (s = {});
    const {
        ancestorScroll: i = !0,
        ancestorResize: l = !0,
        elementResize: u = typeof ResizeObserver == "function",
        layoutShift: c = typeof IntersectionObserver == "function",
        animationFrame: f = !1
    } = s, h = Rp(e), m = i || l ? [...h ? ha(h) : [], ...ha(t)] : [];
    m.forEach(k => {
        i && k.addEventListener("scroll", n, {
            passive: !0
        }), l && k.addEventListener("resize", n)
    });
    const y = h && c ? TL(h, n) : null;
    let w = -1,
        C = null;
    u && (C = new ResizeObserver(k => {
        let [P] = k;
        P && P.target === h && C && (C.unobserve(t), cancelAnimationFrame(w), w = requestAnimationFrame(() => {
            var R;
            (R = C) == null || R.observe(t)
        })), n()
    }), h && !f && C.observe(h), C.observe(t));
    let b, v = f ? Vs(e) : null;
    f && S();

    function S() {
        const k = Vs(e);
        v && !gb(v, k) && n(), v = k, b = requestAnimationFrame(S)
    }
    return n(), () => {
        var k;
        m.forEach(P => {
            i && P.removeEventListener("scroll", n), l && P.removeEventListener("resize", n)
        }), y == null || y(), (k = C) == null || k.disconnect(), C = null, f && cancelAnimationFrame(b)
    }
}
const RL = XM,
    PL = JM,
    AL = GM,
    _L = eL,
    OL = QM,
    B0 = KM,
    NL = ZM,
    ML = (e, t, n) => {
        const s = new Map,
            i = {
                platform: EL,
                ...n
            },
            l = { ...i.platform,
                _c: s
            };
        return qM(e, t, { ...i,
            platform: l
        })
    };
var LL = typeof document < "u",
    DL = function() {},
    Su = LL ? x.useLayoutEffect : DL;

function Bu(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, s, i;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (s = n; s-- !== 0;)
                if (!Bu(e[s], t[s])) return !1;
            return !0
        }
        if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
        for (s = n; s-- !== 0;)
            if (!{}.hasOwnProperty.call(t, i[s])) return !1;
        for (s = n; s-- !== 0;) {
            const l = i[s];
            if (!(l === "_owner" && e.$$typeof) && !Bu(e[l], t[l])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function yb(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function V0(e, t) {
    const n = yb(e);
    return Math.round(t * n) / n
}

function Of(e) {
    const t = x.useRef(e);
    return Su(() => {
        t.current = e
    }), t
}

function jL(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: s = [],
        platform: i,
        elements: {
            reference: l,
            floating: u
        } = {},
        transform: c = !0,
        whileElementsMounted: f,
        open: h
    } = e, [m, y] = x.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [w, C] = x.useState(s);
    Bu(w, s) || C(s);
    const [b, v] = x.useState(null), [S, k] = x.useState(null), P = x.useCallback($ => {
        $ !== B.current && (B.current = $, v($))
    }, []), R = x.useCallback($ => {
        $ !== U.current && (U.current = $, k($))
    }, []), _ = l || b, N = u || S, B = x.useRef(null), U = x.useRef(null), j = x.useRef(m), G = f != null, J = Of(f), ee = Of(i), de = Of(h), ge = x.useCallback(() => {
        if (!B.current || !U.current) return;
        const $ = {
            placement: t,
            strategy: n,
            middleware: w
        };
        ee.current && ($.platform = ee.current), ML(B.current, U.current, $).then(X => {
            const W = { ...X,
                isPositioned: de.current !== !1
            };
            le.current && !Bu(j.current, W) && (j.current = W, Ta.flushSync(() => {
                y(W)
            }))
        })
    }, [w, t, n, ee, de]);
    Su(() => {
        h === !1 && j.current.isPositioned && (j.current.isPositioned = !1, y($ => ({ ...$,
            isPositioned: !1
        })))
    }, [h]);
    const le = x.useRef(!1);
    Su(() => (le.current = !0, () => {
        le.current = !1
    }), []), Su(() => {
        if (_ && (B.current = _), N && (U.current = N), _ && N) {
            if (J.current) return J.current(_, N, ge);
            ge()
        }
    }, [_, N, ge, J, G]);
    const Ce = x.useMemo(() => ({
            reference: B,
            floating: U,
            setReference: P,
            setFloating: R
        }), [P, R]),
        te = x.useMemo(() => ({
            reference: _,
            floating: N
        }), [_, N]),
        Z = x.useMemo(() => {
            const $ = {
                position: n,
                left: 0,
                top: 0
            };
            if (!te.floating) return $;
            const X = V0(te.floating, m.x),
                W = V0(te.floating, m.y);
            return c ? { ...$,
                transform: "translate(" + X + "px, " + W + "px)",
                ...yb(te.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: X,
                top: W
            }
        }, [n, c, te.floating, m.x, m.y]);
    return x.useMemo(() => ({ ...m,
        update: ge,
        refs: Ce,
        elements: te,
        floatingStyles: Z
    }), [m, ge, Ce, te, Z])
}
const IL = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: s,
                    padding: i
                } = typeof e == "function" ? e(n) : e;
                return s && t(s) ? s.current != null ? B0({
                    element: s.current,
                    padding: i
                }).fn(n) : {} : s ? B0({
                    element: s,
                    padding: i
                }).fn(n) : {}
            }
        }
    },
    FL = (e, t) => ({ ...RL(e),
        options: [e, t]
    }),
    BL = (e, t) => ({ ...PL(e),
        options: [e, t]
    }),
    VL = (e, t) => ({ ...NL(e),
        options: [e, t]
    }),
    UL = (e, t) => ({ ...AL(e),
        options: [e, t]
    }),
    zL = (e, t) => ({ ..._L(e),
        options: [e, t]
    }),
    $L = (e, t) => ({ ...OL(e),
        options: [e, t]
    }),
    WL = (e, t) => ({ ...IL(e),
        options: [e, t]
    });
var HL = "Arrow",
    vb = x.forwardRef((e, t) => {
        const {
            children: n,
            width: s = 10,
            height: i = 5,
            ...l
        } = e;
        return T.jsx(nt.svg, { ...l,
            ref: t,
            width: s,
            height: i,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : T.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
vb.displayName = HL;
var qL = vb;

function KL(e) {
    const [t, n] = x.useState(void 0);
    return Wt(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const s = new ResizeObserver(i => {
                if (!Array.isArray(i) || !i.length) return;
                const l = i[0];
                let u, c;
                if ("borderBoxSize" in l) {
                    const f = l.borderBoxSize,
                        h = Array.isArray(f) ? f[0] : f;
                    u = h.inlineSize, c = h.blockSize
                } else u = e.offsetWidth, c = e.offsetHeight;
                n({
                    width: u,
                    height: c
                })
            });
            return s.observe(e, {
                box: "border-box"
            }), () => s.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var Pp = "Popper",
    [wb, xb] = xp(Pp),
    [GL, Sb] = wb(Pp),
    bb = e => {
        const {
            __scopePopper: t,
            children: n
        } = e, [s, i] = x.useState(null);
        return T.jsx(GL, {
            scope: t,
            anchor: s,
            onAnchorChange: i,
            children: n
        })
    };
bb.displayName = Pp;
var Cb = "PopperAnchor",
    Eb = x.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: s,
            ...i
        } = e, l = Sb(Cb, n), u = x.useRef(null), c = xt(t, u), f = x.useRef(null);
        return x.useEffect(() => {
            const h = f.current;
            f.current = (s == null ? void 0 : s.current) || u.current, h !== f.current && l.onAnchorChange(f.current)
        }), s ? null : T.jsx(nt.div, { ...i,
            ref: c
        })
    });
Eb.displayName = Cb;
var Ap = "PopperContent",
    [QL, YL] = wb(Ap),
    Tb = x.forwardRef((e, t) => {
        var ne, me, fe, Re, Ae, Oe;
        const {
            __scopePopper: n,
            side: s = "bottom",
            sideOffset: i = 0,
            align: l = "center",
            alignOffset: u = 0,
            arrowPadding: c = 0,
            avoidCollisions: f = !0,
            collisionBoundary: h = [],
            collisionPadding: m = 0,
            sticky: y = "partial",
            hideWhenDetached: w = !1,
            updatePositionStrategy: C = "optimized",
            onPlaced: b,
            ...v
        } = e, S = Sb(Ap, n), [k, P] = x.useState(null), R = xt(t, Ge => P(Ge)), [_, N] = x.useState(null), B = KL(_), U = (B == null ? void 0 : B.width) ? ? 0, j = (B == null ? void 0 : B.height) ? ? 0, G = s + (l !== "center" ? "-" + l : ""), J = typeof m == "number" ? m : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...m
        }, ee = Array.isArray(h) ? h : [h], de = ee.length > 0, ge = {
            padding: J,
            boundary: ee.filter(JL),
            altBoundary: de
        }, {
            refs: le,
            floatingStyles: Ce,
            placement: te,
            isPositioned: Z,
            middlewareData: $
        } = jL({
            strategy: "fixed",
            placement: G,
            whileElementsMounted: (...Ge) => kL(...Ge, {
                animationFrame: C === "always"
            }),
            elements: {
                reference: S.anchor
            },
            middleware: [FL({
                mainAxis: i + j,
                alignmentAxis: u
            }), f && BL({
                mainAxis: !0,
                crossAxis: !1,
                limiter: y === "partial" ? VL() : void 0,
                ...ge
            }), f && UL({ ...ge
            }), zL({ ...ge,
                apply: ({
                    elements: Ge,
                    rects: at,
                    availableWidth: ur,
                    availableHeight: cr
                }) => {
                    const {
                        width: Wn,
                        height: Fa
                    } = at.reference, dr = Ge.floating.style;
                    dr.setProperty("--radix-popper-available-width", `${ur}px`), dr.setProperty("--radix-popper-available-height", `${cr}px`), dr.setProperty("--radix-popper-anchor-width", `${Wn}px`), dr.setProperty("--radix-popper-anchor-height", `${Fa}px`)
                }
            }), _ && WL({
                element: _,
                padding: c
            }), ZL({
                arrowWidth: U,
                arrowHeight: j
            }), w && $L({
                strategy: "referenceHidden",
                ...ge
            })]
        }), [X, W] = Pb(te), D = Bs(b);
        Wt(() => {
            Z && (D == null || D())
        }, [Z, D]);
        const H = (ne = $.arrow) == null ? void 0 : ne.x,
            we = (me = $.arrow) == null ? void 0 : me.y,
            ve = ((fe = $.arrow) == null ? void 0 : fe.centerOffset) !== 0,
            [pe, ye] = x.useState();
        return Wt(() => {
            k && ye(window.getComputedStyle(k).zIndex)
        }, [k]), T.jsx("div", {
            ref: le.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...Ce,
                transform: Z ? Ce.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: pe,
                "--radix-popper-transform-origin": [(Re = $.transformOrigin) == null ? void 0 : Re.x, (Ae = $.transformOrigin) == null ? void 0 : Ae.y].join(" "),
                ...((Oe = $.hide) == null ? void 0 : Oe.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: T.jsx(QL, {
                scope: n,
                placedSide: X,
                onArrowChange: N,
                arrowX: H,
                arrowY: we,
                shouldHideArrow: ve,
                children: T.jsx(nt.div, {
                    "data-side": X,
                    "data-align": W,
                    ...v,
                    ref: R,
                    style: { ...v.style,
                        animation: Z ? void 0 : "none"
                    }
                })
            })
        })
    });
Tb.displayName = Ap;
var kb = "PopperArrow",
    XL = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Rb = x.forwardRef(function(t, n) {
        const {
            __scopePopper: s,
            ...i
        } = t, l = YL(kb, s), u = XL[l.placedSide];
        return T.jsx("span", {
            ref: l.onArrowChange,
            style: {
                position: "absolute",
                left: l.arrowX,
                top: l.arrowY,
                [u]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[l.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[l.placedSide],
                visibility: l.shouldHideArrow ? "hidden" : void 0
            },
            children: T.jsx(qL, { ...i,
                ref: n,
                style: { ...i.style,
                    display: "block"
                }
            })
        })
    });
Rb.displayName = kb;

function JL(e) {
    return e !== null
}
var ZL = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var S, k, P;
        const {
            placement: n,
            rects: s,
            middlewareData: i
        } = t, u = ((S = i.arrow) == null ? void 0 : S.centerOffset) !== 0, c = u ? 0 : e.arrowWidth, f = u ? 0 : e.arrowHeight, [h, m] = Pb(n), y = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[m], w = (((k = i.arrow) == null ? void 0 : k.x) ? ? 0) + c / 2, C = (((P = i.arrow) == null ? void 0 : P.y) ? ? 0) + f / 2;
        let b = "",
            v = "";
        return h === "bottom" ? (b = u ? y : `${w}px`, v = `${-f}px`) : h === "top" ? (b = u ? y : `${w}px`, v = `${s.floating.height+f}px`) : h === "right" ? (b = `${-f}px`, v = u ? y : `${C}px`) : h === "left" && (b = `${s.floating.width+f}px`, v = u ? y : `${C}px`), {
            data: {
                x: b,
                y: v
            }
        }
    }
});

function Pb(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var e2 = bb,
    t2 = Eb,
    n2 = Tb,
    r2 = Rb,
    s2 = "Portal",
    Ab = x.forwardRef((e, t) => {
        var c;
        const {
            container: n,
            ...s
        } = e, [i, l] = x.useState(!1);
        Wt(() => l(!0), []);
        const u = n || i && ((c = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : c.body);
        return u ? vP.createPortal(T.jsx(nt.div, { ...s,
            ref: t
        }), u) : null
    });
Ab.displayName = s2;

function o2(e) {
    const t = i2(e),
        n = x.forwardRef((s, i) => {
            const {
                children: l,
                ...u
            } = s, c = x.Children.toArray(l), f = c.find(l2);
            if (f) {
                const h = f.props.children,
                    m = c.map(y => y === f ? x.Children.count(h) > 1 ? x.Children.only(null) : x.isValidElement(h) ? h.props.children : null : y);
                return T.jsx(t, { ...u,
                    ref: i,
                    children: x.isValidElement(h) ? x.cloneElement(h, void 0, m) : null
                })
            }
            return T.jsx(t, { ...u,
                ref: i,
                children: l
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function i2(e) {
    const t = x.forwardRef((n, s) => {
        const {
            children: i,
            ...l
        } = n;
        if (x.isValidElement(i)) {
            const u = c2(i),
                c = u2(l, i.props);
            return i.type !== x.Fragment && (c.ref = s ? Na(s, u) : u), x.cloneElement(i, c)
        }
        return x.Children.count(i) > 1 ? x.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var a2 = Symbol("radix.slottable");

function l2(e) {
    return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === a2
}

function u2(e, t) {
    const n = { ...t
    };
    for (const s in t) {
        const i = e[s],
            l = t[s];
        /^on[A-Z]/.test(s) ? i && l ? n[s] = (...c) => {
            const f = l(...c);
            return i(...c), f
        } : i && (n[s] = i) : s === "style" ? n[s] = { ...i,
            ...l
        } : s === "className" && (n[s] = [i, l].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function c2(e) {
    var s, i;
    let t = (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : s.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var d2 = Gu[" useInsertionEffect ".trim().toString()] || Wt;

function U0({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: s
}) {
    const [i, l, u] = f2({
        defaultProp: t,
        onChange: n
    }), c = e !== void 0, f = c ? e : i; {
        const m = x.useRef(e !== void 0);
        x.useEffect(() => {
            const y = m.current;
            y !== c && console.warn(`${s} is changing from ${y?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), m.current = c
        }, [c, s])
    }
    const h = x.useCallback(m => {
        var y;
        if (c) {
            const w = h2(m) ? m(e) : m;
            w !== e && ((y = u.current) == null || y.call(u, w))
        } else l(m)
    }, [c, e, l, u]);
    return [f, h]
}

function f2({
    defaultProp: e,
    onChange: t
}) {
    const [n, s] = x.useState(e), i = x.useRef(n), l = x.useRef(t);
    return d2(() => {
        l.current = t
    }, [t]), x.useEffect(() => {
        var u;
        i.current !== n && ((u = l.current) == null || u.call(l, n), i.current = n)
    }, [n, i]), [n, s, l]
}

function h2(e) {
    return typeof e == "function"
}

function p2(e) {
    const t = x.useRef({
        value: e,
        previous: e
    });
    return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
}
var _b = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    m2 = "VisuallyHidden",
    g2 = x.forwardRef((e, t) => T.jsx(nt.span, { ...e,
        ref: t,
        style: { ..._b,
            ...e.style
        }
    }));
g2.displayName = m2;
var y2 = function(e) {
        if (typeof document > "u") return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body
    },
    wo = new WeakMap,
    nu = new WeakMap,
    ru = {},
    Nf = 0,
    Ob = function(e) {
        return e && (e.host || Ob(e.parentNode))
    },
    v2 = function(e, t) {
        return t.map(function(n) {
            if (e.contains(n)) return n;
            var s = Ob(n);
            return s && e.contains(s) ? s : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(n) {
            return !!n
        })
    },
    w2 = function(e, t, n, s) {
        var i = v2(t, Array.isArray(e) ? e : [e]);
        ru[n] || (ru[n] = new WeakMap);
        var l = ru[n],
            u = [],
            c = new Set,
            f = new Set(i),
            h = function(y) {
                !y || c.has(y) || (c.add(y), h(y.parentNode))
            };
        i.forEach(h);
        var m = function(y) {
            !y || f.has(y) || Array.prototype.forEach.call(y.children, function(w) {
                if (c.has(w)) m(w);
                else try {
                    var C = w.getAttribute(s),
                        b = C !== null && C !== "false",
                        v = (wo.get(w) || 0) + 1,
                        S = (l.get(w) || 0) + 1;
                    wo.set(w, v), l.set(w, S), u.push(w), v === 1 && b && nu.set(w, !0), S === 1 && w.setAttribute(n, "true"), b || w.setAttribute(s, "true")
                } catch (k) {
                    console.error("aria-hidden: cannot operate on ", w, k)
                }
            })
        };
        return m(t), c.clear(), Nf++,
            function() {
                u.forEach(function(y) {
                    var w = wo.get(y) - 1,
                        C = l.get(y) - 1;
                    wo.set(y, w), l.set(y, C), w || (nu.has(y) || y.removeAttribute(s), nu.delete(y)), C || y.removeAttribute(n)
                }), Nf--, Nf || (wo = new WeakMap, wo = new WeakMap, nu = new WeakMap, ru = {})
            }
    },
    x2 = function(e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var s = Array.from(Array.isArray(e) ? e : [e]),
            i = y2(e);
        return i ? (s.push.apply(s, Array.from(i.querySelectorAll("[aria-live], script"))), w2(s, i, n, "aria-hidden")) : function() {
            return null
        }
    },
    Dn = function() {
        return Dn = Object.assign || function(t) {
            for (var n, s = 1, i = arguments.length; s < i; s++) {
                n = arguments[s];
                for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l])
            }
            return t
        }, Dn.apply(this, arguments)
    };

function Nb(e, t) {
    var n = {};
    for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, s = Object.getOwnPropertySymbols(e); i < s.length; i++) t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[i]) && (n[s[i]] = e[s[i]]);
    return n
}

function S2(e, t, n) {
    if (n || arguments.length === 2)
        for (var s = 0, i = t.length, l; s < i; s++)(l || !(s in t)) && (l || (l = Array.prototype.slice.call(t, 0, s)), l[s] = t[s]);
    return e.concat(l || Array.prototype.slice.call(t))
}
var bu = "right-scroll-bar-position",
    Cu = "width-before-scroll-bar",
    b2 = "with-scroll-bars-hidden",
    C2 = "--removed-body-scroll-bar-size";

function Mf(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function E2(e, t) {
    var n = x.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(s) {
                    var i = n.value;
                    i !== s && (n.value = s, n.callback(s, i))
                }
            }
        }
    })[0];
    return n.callback = t, n.facade
}
var T2 = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
    z0 = new WeakMap;

function k2(e, t) {
    var n = E2(null, function(s) {
        return e.forEach(function(i) {
            return Mf(i, s)
        })
    });
    return T2(function() {
        var s = z0.get(n);
        if (s) {
            var i = new Set(s),
                l = new Set(e),
                u = n.current;
            i.forEach(function(c) {
                l.has(c) || Mf(c, null)
            }), l.forEach(function(c) {
                i.has(c) || Mf(c, u)
            })
        }
        z0.set(n, e)
    }, [e]), n
}

function R2(e) {
    return e
}

function P2(e, t) {
    t === void 0 && (t = R2);
    var n = [],
        s = !1,
        i = {
            read: function() {
                if (s) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function(l) {
                var u = t(l, s);
                return n.push(u),
                    function() {
                        n = n.filter(function(c) {
                            return c !== u
                        })
                    }
            },
            assignSyncMedium: function(l) {
                for (s = !0; n.length;) {
                    var u = n;
                    n = [], u.forEach(l)
                }
                n = {
                    push: function(c) {
                        return l(c)
                    },
                    filter: function() {
                        return n
                    }
                }
            },
            assignMedium: function(l) {
                s = !0;
                var u = [];
                if (n.length) {
                    var c = n;
                    n = [], c.forEach(l), u = n
                }
                var f = function() {
                        var m = u;
                        u = [], m.forEach(l)
                    },
                    h = function() {
                        return Promise.resolve().then(f)
                    };
                h(), n = {
                    push: function(m) {
                        u.push(m), h()
                    },
                    filter: function(m) {
                        return u = u.filter(m), n
                    }
                }
            }
        };
    return i
}

function A2(e) {
    e === void 0 && (e = {});
    var t = P2(null);
    return t.options = Dn({
        async: !0,
        ssr: !1
    }, e), t
}
var Mb = function(e) {
    var t = e.sideCar,
        n = Nb(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var s = t.read();
    if (!s) throw new Error("Sidecar medium not found");
    return x.createElement(s, Dn({}, n))
};
Mb.isSideCarExport = !0;

function _2(e, t) {
    return e.useMedium(t), Mb
}
var Lb = A2(),
    Lf = function() {},
    ac = x.forwardRef(function(e, t) {
        var n = x.useRef(null),
            s = x.useState({
                onScrollCapture: Lf,
                onWheelCapture: Lf,
                onTouchMoveCapture: Lf
            }),
            i = s[0],
            l = s[1],
            u = e.forwardProps,
            c = e.children,
            f = e.className,
            h = e.removeScrollBar,
            m = e.enabled,
            y = e.shards,
            w = e.sideCar,
            C = e.noRelative,
            b = e.noIsolation,
            v = e.inert,
            S = e.allowPinchZoom,
            k = e.as,
            P = k === void 0 ? "div" : k,
            R = e.gapMode,
            _ = Nb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            N = w,
            B = k2([n, t]),
            U = Dn(Dn({}, _), i);
        return x.createElement(x.Fragment, null, m && x.createElement(N, {
            sideCar: Lb,
            removeScrollBar: h,
            shards: y,
            noRelative: C,
            noIsolation: b,
            inert: v,
            setCallbacks: l,
            allowPinchZoom: !!S,
            lockRef: n,
            gapMode: R
        }), u ? x.cloneElement(x.Children.only(c), Dn(Dn({}, U), {
            ref: B
        })) : x.createElement(P, Dn({}, U, {
            className: f,
            ref: B
        }), c))
    });
ac.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
ac.classNames = {
    fullWidth: Cu,
    zeroRight: bu
};
var O2 = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function N2() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = O2();
    return t && e.setAttribute("nonce", t), e
}

function M2(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function L2(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var D2 = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                e == 0 && (t = N2()) && (M2(t, n), L2(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    j2 = function() {
        var e = D2();
        return function(t, n) {
            x.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    Db = function() {
        var e = j2(),
            t = function(n) {
                var s = n.styles,
                    i = n.dynamic;
                return e(s, i), null
            };
        return t
    },
    I2 = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    Df = function(e) {
        return parseInt(e || "", 10) || 0
    },
    F2 = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            s = t[e === "padding" ? "paddingTop" : "marginTop"],
            i = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [Df(n), Df(s), Df(i)]
    },
    B2 = function(e) {
        if (e === void 0 && (e = "margin"), typeof window > "u") return I2;
        var t = F2(e),
            n = document.documentElement.clientWidth,
            s = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, s - n + t[2] - t[0])
        }
    },
    V2 = Db(),
    Po = "data-scroll-locked",
    U2 = function(e, t, n, s) {
        var i = e.left,
            l = e.top,
            u = e.right,
            c = e.gap;
        return n === void 0 && (n = "margin"), `
  .`.concat(b2, ` {
   overflow: hidden `).concat(s, `;
   padding-right: `).concat(c, "px ").concat(s, `;
  }
  body[`).concat(Po, `] {
    overflow: hidden `).concat(s, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(s, ";"), n === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(l, `px;
    padding-right: `).concat(u, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(s, `;
    `), n === "padding" && "padding-right: ".concat(c, "px ").concat(s, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(bu, ` {
    right: `).concat(c, "px ").concat(s, `;
  }
  
  .`).concat(Cu, ` {
    margin-right: `).concat(c, "px ").concat(s, `;
  }
  
  .`).concat(bu, " .").concat(bu, ` {
    right: 0 `).concat(s, `;
  }
  
  .`).concat(Cu, " .").concat(Cu, ` {
    margin-right: 0 `).concat(s, `;
  }
  
  body[`).concat(Po, `] {
    `).concat(C2, ": ").concat(c, `px;
  }
`)
    },
    $0 = function() {
        var e = parseInt(document.body.getAttribute(Po) || "0", 10);
        return isFinite(e) ? e : 0
    },
    z2 = function() {
        x.useEffect(function() {
            return document.body.setAttribute(Po, ($0() + 1).toString()),
                function() {
                    var e = $0() - 1;
                    e <= 0 ? document.body.removeAttribute(Po) : document.body.setAttribute(Po, e.toString())
                }
        }, [])
    },
    $2 = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            s = e.gapMode,
            i = s === void 0 ? "margin" : s;
        z2();
        var l = x.useMemo(function() {
            return B2(i)
        }, [i]);
        return x.createElement(V2, {
            styles: U2(l, !t, i, n ? "" : "!important")
        })
    },
    Ah = !1;
if (typeof window < "u") try {
    var su = Object.defineProperty({}, "passive", {
        get: function() {
            return Ah = !0, !0
        }
    });
    window.addEventListener("test", su, su), window.removeEventListener("test", su, su)
} catch {
    Ah = !1
}
var xo = Ah ? {
        passive: !1
    } : !1,
    W2 = function(e) {
        return e.tagName === "TEXTAREA"
    },
    jb = function(e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !W2(e) && n[t] === "visible")
    },
    H2 = function(e) {
        return jb(e, "overflowY")
    },
    q2 = function(e) {
        return jb(e, "overflowX")
    },
    W0 = function(e, t) {
        var n = t.ownerDocument,
            s = t;
        do {
            typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
            var i = Ib(e, s);
            if (i) {
                var l = Fb(e, s),
                    u = l[1],
                    c = l[2];
                if (u > c) return !0
            }
            s = s.parentNode
        } while (s && s !== n.body);
        return !1
    },
    K2 = function(e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            s = e.clientHeight;
        return [t, n, s]
    },
    G2 = function(e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            s = e.clientWidth;
        return [t, n, s]
    },
    Ib = function(e, t) {
        return e === "v" ? H2(t) : q2(t)
    },
    Fb = function(e, t) {
        return e === "v" ? K2(t) : G2(t)
    },
    Q2 = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    Y2 = function(e, t, n, s, i) {
        var l = Q2(e, window.getComputedStyle(t).direction),
            u = l * s,
            c = n.target,
            f = t.contains(c),
            h = !1,
            m = u > 0,
            y = 0,
            w = 0;
        do {
            if (!c) break;
            var C = Fb(e, c),
                b = C[0],
                v = C[1],
                S = C[2],
                k = v - S - l * b;
            (b || k) && Ib(e, c) && (y += k, w += b);
            var P = c.parentNode;
            c = P && P.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? P.host : P
        } while (!f && c !== document.body || f && (t.contains(c) || t === c));
        return (m && Math.abs(y) < 1 || !m && Math.abs(w) < 1) && (h = !0), h
    },
    ou = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    H0 = function(e) {
        return [e.deltaX, e.deltaY]
    },
    q0 = function(e) {
        return e && "current" in e ? e.current : e
    },
    X2 = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    J2 = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    Z2 = 0,
    So = [];

function eD(e) {
    var t = x.useRef([]),
        n = x.useRef([0, 0]),
        s = x.useRef(),
        i = x.useState(Z2++)[0],
        l = x.useState(Db)[0],
        u = x.useRef(e);
    x.useEffect(function() {
        u.current = e
    }, [e]), x.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(i));
            var v = S2([e.lockRef.current], (e.shards || []).map(q0), !0).filter(Boolean);
            return v.forEach(function(S) {
                    return S.classList.add("allow-interactivity-".concat(i))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(i)), v.forEach(function(S) {
                        return S.classList.remove("allow-interactivity-".concat(i))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var c = x.useCallback(function(v, S) {
            if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey) return !u.current.allowPinchZoom;
            var k = ou(v),
                P = n.current,
                R = "deltaX" in v ? v.deltaX : P[0] - k[0],
                _ = "deltaY" in v ? v.deltaY : P[1] - k[1],
                N, B = v.target,
                U = Math.abs(R) > Math.abs(_) ? "h" : "v";
            if ("touches" in v && U === "h" && B.type === "range") return !1;
            var j = window.getSelection(),
                G = j && j.anchorNode,
                J = G ? G === B || G.contains(B) : !1;
            if (J) return !1;
            var ee = W0(U, B);
            if (!ee) return !0;
            if (ee ? N = U : (N = U === "v" ? "h" : "v", ee = W0(U, B)), !ee) return !1;
            if (!s.current && "changedTouches" in v && (R || _) && (s.current = N), !N) return !0;
            var de = s.current || N;
            return Y2(de, S, v, de === "h" ? R : _)
        }, []),
        f = x.useCallback(function(v) {
            var S = v;
            if (!(!So.length || So[So.length - 1] !== l)) {
                var k = "deltaY" in S ? H0(S) : ou(S),
                    P = t.current.filter(function(N) {
                        return N.name === S.type && (N.target === S.target || S.target === N.shadowParent) && X2(N.delta, k)
                    })[0];
                if (P && P.should) {
                    S.cancelable && S.preventDefault();
                    return
                }
                if (!P) {
                    var R = (u.current.shards || []).map(q0).filter(Boolean).filter(function(N) {
                            return N.contains(S.target)
                        }),
                        _ = R.length > 0 ? c(S, R[0]) : !u.current.noIsolation;
                    _ && S.cancelable && S.preventDefault()
                }
            }
        }, []),
        h = x.useCallback(function(v, S, k, P) {
            var R = {
                name: v,
                delta: S,
                target: k,
                should: P,
                shadowParent: tD(k)
            };
            t.current.push(R), setTimeout(function() {
                t.current = t.current.filter(function(_) {
                    return _ !== R
                })
            }, 1)
        }, []),
        m = x.useCallback(function(v) {
            n.current = ou(v), s.current = void 0
        }, []),
        y = x.useCallback(function(v) {
            h(v.type, H0(v), v.target, c(v, e.lockRef.current))
        }, []),
        w = x.useCallback(function(v) {
            h(v.type, ou(v), v.target, c(v, e.lockRef.current))
        }, []);
    x.useEffect(function() {
        return So.push(l), e.setCallbacks({
                onScrollCapture: y,
                onWheelCapture: y,
                onTouchMoveCapture: w
            }), document.addEventListener("wheel", f, xo), document.addEventListener("touchmove", f, xo), document.addEventListener("touchstart", m, xo),
            function() {
                So = So.filter(function(v) {
                    return v !== l
                }), document.removeEventListener("wheel", f, xo), document.removeEventListener("touchmove", f, xo), document.removeEventListener("touchstart", m, xo)
            }
    }, []);
    var C = e.removeScrollBar,
        b = e.inert;
    return x.createElement(x.Fragment, null, b ? x.createElement(l, {
        styles: J2(i)
    }) : null, C ? x.createElement($2, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}

function tD(e) {
    for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
const nD = _2(Lb, eD);
var Bb = x.forwardRef(function(e, t) {
    return x.createElement(ac, Dn({}, e, {
        ref: t,
        sideCar: nD
    }))
});
Bb.classNames = ac.classNames;
var rD = [" ", "Enter", "ArrowUp", "ArrowDown"],
    sD = [" ", "Enter"],
    Us = "Select",
    [lc, uc, oD] = oM(Us),
    [Jo] = xp(Us, [oD, xb]),
    cc = xb(),
    [iD, ts] = Jo(Us),
    [aD, lD] = Jo(Us),
    Vb = e => {
        const {
            __scopeSelect: t,
            children: n,
            open: s,
            defaultOpen: i,
            onOpenChange: l,
            value: u,
            defaultValue: c,
            onValueChange: f,
            dir: h,
            name: m,
            autoComplete: y,
            disabled: w,
            required: C,
            form: b
        } = e, v = cc(t), [S, k] = x.useState(null), [P, R] = x.useState(null), [_, N] = x.useState(!1), B = aM(h), [U, j] = U0({
            prop: s,
            defaultProp: i ? ? !1,
            onChange: l,
            caller: Us
        }), [G, J] = U0({
            prop: u,
            defaultProp: c,
            onChange: f,
            caller: Us
        }), ee = x.useRef(null), de = S ? b || !!S.closest("form") : !0, [ge, le] = x.useState(new Set), Ce = Array.from(ge).map(te => te.props.value).join(";");
        return T.jsx(e2, { ...v,
            children: T.jsxs(iD, {
                required: C,
                scope: t,
                trigger: S,
                onTriggerChange: k,
                valueNode: P,
                onValueNodeChange: R,
                valueNodeHasChildren: _,
                onValueNodeHasChildrenChange: N,
                contentId: Sp(),
                value: G,
                onValueChange: J,
                open: U,
                onOpenChange: j,
                dir: B,
                triggerPointerDownPosRef: ee,
                disabled: w,
                children: [T.jsx(lc.Provider, {
                    scope: t,
                    children: T.jsx(aD, {
                        scope: e.__scopeSelect,
                        onNativeOptionAdd: x.useCallback(te => {
                            le(Z => new Set(Z).add(te))
                        }, []),
                        onNativeOptionRemove: x.useCallback(te => {
                            le(Z => {
                                const $ = new Set(Z);
                                return $.delete(te), $
                            })
                        }, []),
                        children: n
                    })
                }), de ? T.jsxs(c1, {
                    "aria-hidden": !0,
                    required: C,
                    tabIndex: -1,
                    name: m,
                    autoComplete: y,
                    value: G,
                    onChange: te => J(te.target.value),
                    disabled: w,
                    form: b,
                    children: [G === void 0 ? T.jsx("option", {
                        value: ""
                    }) : null, Array.from(ge)]
                }, Ce) : null]
            })
        })
    };
Vb.displayName = Us;
var Ub = "SelectTrigger",
    zb = x.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            disabled: s = !1,
            ...i
        } = e, l = cc(n), u = ts(Ub, n), c = u.disabled || s, f = xt(t, u.onTriggerChange), h = uc(n), m = x.useRef("touch"), [y, w, C] = f1(v => {
            const S = h().filter(R => !R.disabled),
                k = S.find(R => R.value === u.value),
                P = h1(S, v, k);
            P !== void 0 && u.onValueChange(P.value)
        }), b = v => {
            c || (u.onOpenChange(!0), C()), v && (u.triggerPointerDownPosRef.current = {
                x: Math.round(v.pageX),
                y: Math.round(v.pageY)
            })
        };
        return T.jsx(t2, {
            asChild: !0,
            ...l,
            children: T.jsx(nt.button, {
                type: "button",
                role: "combobox",
                "aria-controls": u.contentId,
                "aria-expanded": u.open,
                "aria-required": u.required,
                "aria-autocomplete": "none",
                dir: u.dir,
                "data-state": u.open ? "open" : "closed",
                disabled: c,
                "data-disabled": c ? "" : void 0,
                "data-placeholder": d1(u.value) ? "" : void 0,
                ...i,
                ref: f,
                onClick: st(i.onClick, v => {
                    v.currentTarget.focus(), m.current !== "mouse" && b(v)
                }),
                onPointerDown: st(i.onPointerDown, v => {
                    m.current = v.pointerType;
                    const S = v.target;
                    S.hasPointerCapture(v.pointerId) && S.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (b(v), v.preventDefault())
                }),
                onKeyDown: st(i.onKeyDown, v => {
                    const S = y.current !== "";
                    !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && w(v.key), !(S && v.key === " ") && rD.includes(v.key) && (b(), v.preventDefault())
                })
            })
        })
    });
zb.displayName = Ub;
var $b = "SelectValue",
    Wb = x.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            className: s,
            style: i,
            children: l,
            placeholder: u = "",
            ...c
        } = e, f = ts($b, n), {
            onValueNodeHasChildrenChange: h
        } = f, m = l !== void 0, y = xt(t, f.onValueNodeChange);
        return Wt(() => {
            h(m)
        }, [h, m]), T.jsx(nt.span, { ...c,
            ref: y,
            style: {
                pointerEvents: "none"
            },
            children: d1(f.value) ? T.jsx(T.Fragment, {
                children: u
            }) : l
        })
    });
Wb.displayName = $b;
var uD = "SelectIcon",
    Hb = x.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            children: s,
            ...i
        } = e;
        return T.jsx(nt.span, {
            "aria-hidden": !0,
            ...i,
            ref: t,
            children: s || "▼"
        })
    });
Hb.displayName = uD;
var cD = "SelectPortal",
    qb = e => T.jsx(Ab, {
        asChild: !0,
        ...e
    });
qb.displayName = cD;
var zs = "SelectContent",
    Kb = x.forwardRef((e, t) => {
        const n = ts(zs, e.__scopeSelect),
            [s, i] = x.useState();
        if (Wt(() => {
                i(new DocumentFragment)
            }, []), !n.open) {
            const l = s;
            return l ? Ta.createPortal(T.jsx(Gb, {
                scope: e.__scopeSelect,
                children: T.jsx(lc.Slot, {
                    scope: e.__scopeSelect,
                    children: T.jsx("div", {
                        children: e.children
                    })
                })
            }), l) : null
        }
        return T.jsx(Qb, { ...e,
            ref: t
        })
    });
Kb.displayName = zs;
var wn = 10,
    [Gb, ns] = Jo(zs),
    dD = "SelectContentImpl",
    fD = o2("SelectContent.RemoveScroll"),
    Qb = x.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            position: s = "item-aligned",
            onCloseAutoFocus: i,
            onEscapeKeyDown: l,
            onPointerDownOutside: u,
            side: c,
            sideOffset: f,
            align: h,
            alignOffset: m,
            arrowPadding: y,
            collisionBoundary: w,
            collisionPadding: C,
            sticky: b,
            hideWhenDetached: v,
            avoidCollisions: S,
            ...k
        } = e, P = ts(zs, n), [R, _] = x.useState(null), [N, B] = x.useState(null), U = xt(t, ne => _(ne)), [j, G] = x.useState(null), [J, ee] = x.useState(null), de = uc(n), [ge, le] = x.useState(!1), Ce = x.useRef(!1);
        x.useEffect(() => {
            if (R) return x2(R)
        }, [R]), EM();
        const te = x.useCallback(ne => {
                const [me, ...fe] = de().map(Oe => Oe.ref.current), [Re] = fe.slice(-1), Ae = document.activeElement;
                for (const Oe of ne)
                    if (Oe === Ae || (Oe == null || Oe.scrollIntoView({
                            block: "nearest"
                        }), Oe === me && N && (N.scrollTop = 0), Oe === Re && N && (N.scrollTop = N.scrollHeight), Oe == null || Oe.focus(), document.activeElement !== Ae)) return
            }, [de, N]),
            Z = x.useCallback(() => te([j, R]), [te, j, R]);
        x.useEffect(() => {
            ge && Z()
        }, [ge, Z]);
        const {
            onOpenChange: $,
            triggerPointerDownPosRef: X
        } = P;
        x.useEffect(() => {
            if (R) {
                let ne = {
                    x: 0,
                    y: 0
                };
                const me = Re => {
                        var Ae, Oe;
                        ne = {
                            x: Math.abs(Math.round(Re.pageX) - (((Ae = X.current) == null ? void 0 : Ae.x) ? ? 0)),
                            y: Math.abs(Math.round(Re.pageY) - (((Oe = X.current) == null ? void 0 : Oe.y) ? ? 0))
                        }
                    },
                    fe = Re => {
                        ne.x <= 10 && ne.y <= 10 ? Re.preventDefault() : R.contains(Re.target) || $(!1), document.removeEventListener("pointermove", me), X.current = null
                    };
                return X.current !== null && (document.addEventListener("pointermove", me), document.addEventListener("pointerup", fe, {
                    capture: !0,
                    once: !0
                })), () => {
                    document.removeEventListener("pointermove", me), document.removeEventListener("pointerup", fe, {
                        capture: !0
                    })
                }
            }
        }, [R, $, X]), x.useEffect(() => {
            const ne = () => $(!1);
            return window.addEventListener("blur", ne), window.addEventListener("resize", ne), () => {
                window.removeEventListener("blur", ne), window.removeEventListener("resize", ne)
            }
        }, [$]);
        const [W, D] = f1(ne => {
            const me = de().filter(Ae => !Ae.disabled),
                fe = me.find(Ae => Ae.ref.current === document.activeElement),
                Re = h1(me, ne, fe);
            Re && setTimeout(() => Re.ref.current.focus())
        }), H = x.useCallback((ne, me, fe) => {
            const Re = !Ce.current && !fe;
            (P.value !== void 0 && P.value === me || Re) && (G(ne), Re && (Ce.current = !0))
        }, [P.value]), we = x.useCallback(() => R == null ? void 0 : R.focus(), [R]), ve = x.useCallback((ne, me, fe) => {
            const Re = !Ce.current && !fe;
            (P.value !== void 0 && P.value === me || Re) && ee(ne)
        }, [P.value]), pe = s === "popper" ? _h : Yb, ye = pe === _h ? {
            side: c,
            sideOffset: f,
            align: h,
            alignOffset: m,
            arrowPadding: y,
            collisionBoundary: w,
            collisionPadding: C,
            sticky: b,
            hideWhenDetached: v,
            avoidCollisions: S
        } : {};
        return T.jsx(Gb, {
            scope: n,
            content: R,
            viewport: N,
            onViewportChange: B,
            itemRefCallback: H,
            selectedItem: j,
            onItemLeave: we,
            itemTextRefCallback: ve,
            focusSelectedItem: Z,
            selectedItemText: J,
            position: s,
            isPositioned: ge,
            searchRef: W,
            children: T.jsx(Bb, {
                as: fD,
                allowPinchZoom: !0,
                children: T.jsx(ob, {
                    asChild: !0,
                    trapped: P.open,
                    onMountAutoFocus: ne => {
                        ne.preventDefault()
                    },
                    onUnmountAutoFocus: st(i, ne => {
                        var me;
                        (me = P.trigger) == null || me.focus({
                            preventScroll: !0
                        }), ne.preventDefault()
                    }),
                    children: T.jsx(rb, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: l,
                        onPointerDownOutside: u,
                        onFocusOutside: ne => ne.preventDefault(),
                        onDismiss: () => P.onOpenChange(!1),
                        children: T.jsx(pe, {
                            role: "listbox",
                            id: P.contentId,
                            "data-state": P.open ? "open" : "closed",
                            dir: P.dir,
                            onContextMenu: ne => ne.preventDefault(),
                            ...k,
                            ...ye,
                            onPlaced: () => le(!0),
                            ref: U,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                outline: "none",
                                ...k.style
                            },
                            onKeyDown: st(k.onKeyDown, ne => {
                                const me = ne.ctrlKey || ne.altKey || ne.metaKey;
                                if (ne.key === "Tab" && ne.preventDefault(), !me && ne.key.length === 1 && D(ne.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(ne.key)) {
                                    let Re = de().filter(Ae => !Ae.disabled).map(Ae => Ae.ref.current);
                                    if (["ArrowUp", "End"].includes(ne.key) && (Re = Re.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(ne.key)) {
                                        const Ae = ne.target,
                                            Oe = Re.indexOf(Ae);
                                        Re = Re.slice(Oe + 1)
                                    }
                                    setTimeout(() => te(Re)), ne.preventDefault()
                                }
                            })
                        })
                    })
                })
            })
        })
    });
Qb.displayName = dD;
var hD = "SelectItemAlignedPosition",
    Yb = x.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            onPlaced: s,
            ...i
        } = e, l = ts(zs, n), u = ns(zs, n), [c, f] = x.useState(null), [h, m] = x.useState(null), y = xt(t, U => m(U)), w = uc(n), C = x.useRef(!1), b = x.useRef(!0), {
            viewport: v,
            selectedItem: S,
            selectedItemText: k,
            focusSelectedItem: P
        } = u, R = x.useCallback(() => {
            if (l.trigger && l.valueNode && c && h && v && S && k) {
                const U = l.trigger.getBoundingClientRect(),
                    j = h.getBoundingClientRect(),
                    G = l.valueNode.getBoundingClientRect(),
                    J = k.getBoundingClientRect();
                if (l.dir !== "rtl") {
                    const Ae = J.left - j.left,
                        Oe = G.left - Ae,
                        Ge = U.left - Oe,
                        at = U.width + Ge,
                        ur = Math.max(at, j.width),
                        cr = window.innerWidth - wn,
                        Wn = S0(Oe, [wn, Math.max(wn, cr - ur)]);
                    c.style.minWidth = at + "px", c.style.left = Wn + "px"
                } else {
                    const Ae = j.right - J.right,
                        Oe = window.innerWidth - G.right - Ae,
                        Ge = window.innerWidth - U.right - Oe,
                        at = U.width + Ge,
                        ur = Math.max(at, j.width),
                        cr = window.innerWidth - wn,
                        Wn = S0(Oe, [wn, Math.max(wn, cr - ur)]);
                    c.style.minWidth = at + "px", c.style.right = Wn + "px"
                }
                const ee = w(),
                    de = window.innerHeight - wn * 2,
                    ge = v.scrollHeight,
                    le = window.getComputedStyle(h),
                    Ce = parseInt(le.borderTopWidth, 10),
                    te = parseInt(le.paddingTop, 10),
                    Z = parseInt(le.borderBottomWidth, 10),
                    $ = parseInt(le.paddingBottom, 10),
                    X = Ce + te + ge + $ + Z,
                    W = Math.min(S.offsetHeight * 5, X),
                    D = window.getComputedStyle(v),
                    H = parseInt(D.paddingTop, 10),
                    we = parseInt(D.paddingBottom, 10),
                    ve = U.top + U.height / 2 - wn,
                    pe = de - ve,
                    ye = S.offsetHeight / 2,
                    ne = S.offsetTop + ye,
                    me = Ce + te + ne,
                    fe = X - me;
                if (me <= ve) {
                    const Ae = ee.length > 0 && S === ee[ee.length - 1].ref.current;
                    c.style.bottom = "0px";
                    const Oe = h.clientHeight - v.offsetTop - v.offsetHeight,
                        Ge = Math.max(pe, ye + (Ae ? we : 0) + Oe + Z),
                        at = me + Ge;
                    c.style.height = at + "px"
                } else {
                    const Ae = ee.length > 0 && S === ee[0].ref.current;
                    c.style.top = "0px";
                    const Ge = Math.max(ve, Ce + v.offsetTop + (Ae ? H : 0) + ye) + fe;
                    c.style.height = Ge + "px", v.scrollTop = me - ve + v.offsetTop
                }
                c.style.margin = `${wn}px 0`, c.style.minHeight = W + "px", c.style.maxHeight = de + "px", s == null || s(), requestAnimationFrame(() => C.current = !0)
            }
        }, [w, l.trigger, l.valueNode, c, h, v, S, k, l.dir, s]);
        Wt(() => R(), [R]);
        const [_, N] = x.useState();
        Wt(() => {
            h && N(window.getComputedStyle(h).zIndex)
        }, [h]);
        const B = x.useCallback(U => {
            U && b.current === !0 && (R(), P == null || P(), b.current = !1)
        }, [R, P]);
        return T.jsx(mD, {
            scope: n,
            contentWrapper: c,
            shouldExpandOnScrollRef: C,
            onScrollButtonChange: B,
            children: T.jsx("div", {
                ref: f,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    zIndex: _
                },
                children: T.jsx(nt.div, { ...i,
                    ref: y,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: "100%",
                        ...i.style
                    }
                })
            })
        })
    });
Yb.displayName = hD;
var pD = "SelectPopperPosition",
    _h = x.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            align: s = "start",
            collisionPadding: i = wn,
            ...l
        } = e, u = cc(n);
        return T.jsx(n2, { ...u,
            ...l,
            ref: t,
            align: s,
            collisionPadding: i,
            style: {
                boxSizing: "border-box",
                ...l.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
_h.displayName = pD;
var [mD, _p] = Jo(zs, {}), Oh = "SelectViewport", Xb = x.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        nonce: s,
        ...i
    } = e, l = ns(Oh, n), u = _p(Oh, n), c = xt(t, l.onViewportChange), f = x.useRef(0);
    return T.jsxs(T.Fragment, {
        children: [T.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: s
        }), T.jsx(lc.Slot, {
            scope: n,
            children: T.jsx(nt.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...i,
                ref: c,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...i.style
                },
                onScroll: st(i.onScroll, h => {
                    const m = h.currentTarget,
                        {
                            contentWrapper: y,
                            shouldExpandOnScrollRef: w
                        } = u;
                    if (w != null && w.current && y) {
                        const C = Math.abs(f.current - m.scrollTop);
                        if (C > 0) {
                            const b = window.innerHeight - wn * 2,
                                v = parseFloat(y.style.minHeight),
                                S = parseFloat(y.style.height),
                                k = Math.max(v, S);
                            if (k < b) {
                                const P = k + C,
                                    R = Math.min(b, P),
                                    _ = P - R;
                                y.style.height = R + "px", y.style.bottom === "0px" && (m.scrollTop = _ > 0 ? _ : 0, y.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    f.current = m.scrollTop
                })
            })
        })]
    })
});
Xb.displayName = Oh;
var Jb = "SelectGroup",
    [gD, yD] = Jo(Jb),
    vD = x.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...s
        } = e, i = Sp();
        return T.jsx(gD, {
            scope: n,
            id: i,
            children: T.jsx(nt.div, {
                role: "group",
                "aria-labelledby": i,
                ...s,
                ref: t
            })
        })
    });
vD.displayName = Jb;
var Zb = "SelectLabel",
    e1 = x.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...s
        } = e, i = yD(Zb, n);
        return T.jsx(nt.div, {
            id: i.id,
            ...s,
            ref: t
        })
    });
e1.displayName = Zb;
var Vu = "SelectItem",
    [wD, t1] = Jo(Vu),
    n1 = x.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            value: s,
            disabled: i = !1,
            textValue: l,
            ...u
        } = e, c = ts(Vu, n), f = ns(Vu, n), h = c.value === s, [m, y] = x.useState(l ? ? ""), [w, C] = x.useState(!1), b = xt(t, P => {
            var R;
            return (R = f.itemRefCallback) == null ? void 0 : R.call(f, P, s, i)
        }), v = Sp(), S = x.useRef("touch"), k = () => {
            i || (c.onValueChange(s), c.onOpenChange(!1))
        };
        if (s === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
        return T.jsx(wD, {
            scope: n,
            value: s,
            disabled: i,
            textId: v,
            isSelected: h,
            onItemTextChange: x.useCallback(P => {
                y(R => R || ((P == null ? void 0 : P.textContent) ? ? "").trim())
            }, []),
            children: T.jsx(lc.ItemSlot, {
                scope: n,
                value: s,
                disabled: i,
                textValue: m,
                children: T.jsx(nt.div, {
                    role: "option",
                    "aria-labelledby": v,
                    "data-highlighted": w ? "" : void 0,
                    "aria-selected": h && w,
                    "data-state": h ? "checked" : "unchecked",
                    "aria-disabled": i || void 0,
                    "data-disabled": i ? "" : void 0,
                    tabIndex: i ? void 0 : -1,
                    ...u,
                    ref: b,
                    onFocus: st(u.onFocus, () => C(!0)),
                    onBlur: st(u.onBlur, () => C(!1)),
                    onClick: st(u.onClick, () => {
                        S.current !== "mouse" && k()
                    }),
                    onPointerUp: st(u.onPointerUp, () => {
                        S.current === "mouse" && k()
                    }),
                    onPointerDown: st(u.onPointerDown, P => {
                        S.current = P.pointerType
                    }),
                    onPointerMove: st(u.onPointerMove, P => {
                        var R;
                        S.current = P.pointerType, i ? (R = f.onItemLeave) == null || R.call(f) : S.current === "mouse" && P.currentTarget.focus({
                            preventScroll: !0
                        })
                    }),
                    onPointerLeave: st(u.onPointerLeave, P => {
                        var R;
                        P.currentTarget === document.activeElement && ((R = f.onItemLeave) == null || R.call(f))
                    }),
                    onKeyDown: st(u.onKeyDown, P => {
                        var _;
                        ((_ = f.searchRef) == null ? void 0 : _.current) !== "" && P.key === " " || (sD.includes(P.key) && k(), P.key === " " && P.preventDefault())
                    })
                })
            })
        })
    });
n1.displayName = Vu;
var Xi = "SelectItemText",
    r1 = x.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            className: s,
            style: i,
            ...l
        } = e, u = ts(Xi, n), c = ns(Xi, n), f = t1(Xi, n), h = lD(Xi, n), [m, y] = x.useState(null), w = xt(t, k => y(k), f.onItemTextChange, k => {
            var P;
            return (P = c.itemTextRefCallback) == null ? void 0 : P.call(c, k, f.value, f.disabled)
        }), C = m == null ? void 0 : m.textContent, b = x.useMemo(() => T.jsx("option", {
            value: f.value,
            disabled: f.disabled,
            children: C
        }, f.value), [f.disabled, f.value, C]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: S
        } = h;
        return Wt(() => (v(b), () => S(b)), [v, S, b]), T.jsxs(T.Fragment, {
            children: [T.jsx(nt.span, {
                id: f.textId,
                ...l,
                ref: w
            }), f.isSelected && u.valueNode && !u.valueNodeHasChildren ? Ta.createPortal(l.children, u.valueNode) : null]
        })
    });
r1.displayName = Xi;
var s1 = "SelectItemIndicator",
    o1 = x.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...s
        } = e;
        return t1(s1, n).isSelected ? T.jsx(nt.span, {
            "aria-hidden": !0,
            ...s,
            ref: t
        }) : null
    });
o1.displayName = s1;
var Nh = "SelectScrollUpButton",
    i1 = x.forwardRef((e, t) => {
        const n = ns(Nh, e.__scopeSelect),
            s = _p(Nh, e.__scopeSelect),
            [i, l] = x.useState(!1),
            u = xt(t, s.onScrollButtonChange);
        return Wt(() => {
            if (n.viewport && n.isPositioned) {
                let c = function() {
                    const h = f.scrollTop > 0;
                    l(h)
                };
                const f = n.viewport;
                return c(), f.addEventListener("scroll", c), () => f.removeEventListener("scroll", c)
            }
        }, [n.viewport, n.isPositioned]), i ? T.jsx(l1, { ...e,
            ref: u,
            onAutoScroll: () => {
                const {
                    viewport: c,
                    selectedItem: f
                } = n;
                c && f && (c.scrollTop = c.scrollTop - f.offsetHeight)
            }
        }) : null
    });
i1.displayName = Nh;
var Mh = "SelectScrollDownButton",
    a1 = x.forwardRef((e, t) => {
        const n = ns(Mh, e.__scopeSelect),
            s = _p(Mh, e.__scopeSelect),
            [i, l] = x.useState(!1),
            u = xt(t, s.onScrollButtonChange);
        return Wt(() => {
            if (n.viewport && n.isPositioned) {
                let c = function() {
                    const h = f.scrollHeight - f.clientHeight,
                        m = Math.ceil(f.scrollTop) < h;
                    l(m)
                };
                const f = n.viewport;
                return c(), f.addEventListener("scroll", c), () => f.removeEventListener("scroll", c)
            }
        }, [n.viewport, n.isPositioned]), i ? T.jsx(l1, { ...e,
            ref: u,
            onAutoScroll: () => {
                const {
                    viewport: c,
                    selectedItem: f
                } = n;
                c && f && (c.scrollTop = c.scrollTop + f.offsetHeight)
            }
        }) : null
    });
a1.displayName = Mh;
var l1 = x.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            onAutoScroll: s,
            ...i
        } = e, l = ns("SelectScrollButton", n), u = x.useRef(null), c = uc(n), f = x.useCallback(() => {
            u.current !== null && (window.clearInterval(u.current), u.current = null)
        }, []);
        return x.useEffect(() => () => f(), [f]), Wt(() => {
            var m;
            const h = c().find(y => y.ref.current === document.activeElement);
            (m = h == null ? void 0 : h.ref.current) == null || m.scrollIntoView({
                block: "nearest"
            })
        }, [c]), T.jsx(nt.div, {
            "aria-hidden": !0,
            ...i,
            ref: t,
            style: {
                flexShrink: 0,
                ...i.style
            },
            onPointerDown: st(i.onPointerDown, () => {
                u.current === null && (u.current = window.setInterval(s, 50))
            }),
            onPointerMove: st(i.onPointerMove, () => {
                var h;
                (h = l.onItemLeave) == null || h.call(l), u.current === null && (u.current = window.setInterval(s, 50))
            }),
            onPointerLeave: st(i.onPointerLeave, () => {
                f()
            })
        })
    }),
    xD = "SelectSeparator",
    u1 = x.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...s
        } = e;
        return T.jsx(nt.div, {
            "aria-hidden": !0,
            ...s,
            ref: t
        })
    });
u1.displayName = xD;
var Lh = "SelectArrow",
    SD = x.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...s
        } = e, i = cc(n), l = ts(Lh, n), u = ns(Lh, n);
        return l.open && u.position === "popper" ? T.jsx(r2, { ...i,
            ...s,
            ref: t
        }) : null
    });
SD.displayName = Lh;
var bD = "SelectBubbleInput",
    c1 = x.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...n
    }, s) => {
        const i = x.useRef(null),
            l = xt(s, i),
            u = p2(t);
        return x.useEffect(() => {
            const c = i.current;
            if (!c) return;
            const f = window.HTMLSelectElement.prototype,
                m = Object.getOwnPropertyDescriptor(f, "value").set;
            if (u !== t && m) {
                const y = new Event("change", {
                    bubbles: !0
                });
                m.call(c, t), c.dispatchEvent(y)
            }
        }, [u, t]), T.jsx(nt.select, { ...n,
            style: { ..._b,
                ...n.style
            },
            ref: l,
            defaultValue: t
        })
    });
c1.displayName = bD;

function d1(e) {
    return e === "" || e === void 0
}

function f1(e) {
    const t = Bs(e),
        n = x.useRef(""),
        s = x.useRef(0),
        i = x.useCallback(u => {
            const c = n.current + u;
            t(c), (function f(h) {
                n.current = h, window.clearTimeout(s.current), h !== "" && (s.current = window.setTimeout(() => f(""), 1e3))
            })(c)
        }, [t]),
        l = x.useCallback(() => {
            n.current = "", window.clearTimeout(s.current)
        }, []);
    return x.useEffect(() => () => window.clearTimeout(s.current), []), [n, i, l]
}

function h1(e, t, n) {
    const i = t.length > 1 && Array.from(t).every(h => h === t[0]) ? t[0] : t,
        l = n ? e.indexOf(n) : -1;
    let u = CD(e, Math.max(l, 0));
    i.length === 1 && (u = u.filter(h => h !== n));
    const f = u.find(h => h.textValue.toLowerCase().startsWith(i.toLowerCase()));
    return f !== n ? f : void 0
}

function CD(e, t) {
    return e.map((n, s) => e[(t + s) % e.length])
}
var ED = Vb,
    p1 = zb,
    TD = Wb,
    kD = Hb,
    RD = qb,
    m1 = Kb,
    PD = Xb,
    g1 = e1,
    y1 = n1,
    AD = r1,
    _D = o1,
    v1 = i1,
    w1 = a1,
    x1 = u1;
const jf = ED,
    If = TD,
    Eu = x.forwardRef(({
        className: e,
        children: t,
        ...n
    }, s) => T.jsxs(p1, {
        ref: s,
        className: At("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
        ...n,
        children: [t, T.jsx(kD, {
            asChild: !0,
            children: T.jsx(Ex, {
                className: "h-4 w-4 opacity-50"
            })
        })]
    }));
Eu.displayName = p1.displayName;
const S1 = x.forwardRef(({
    className: e,
    ...t
}, n) => T.jsx(v1, {
    ref: n,
    className: At("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: T.jsx(Rk, {
        className: "h-4 w-4"
    })
}));
S1.displayName = v1.displayName;
const b1 = x.forwardRef(({
    className: e,
    ...t
}, n) => T.jsx(w1, {
    ref: n,
    className: At("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: T.jsx(Ex, {
        className: "h-4 w-4"
    })
}));
b1.displayName = w1.displayName;
const Tu = x.forwardRef(({
    className: e,
    children: t,
    position: n = "popper",
    ...s
}, i) => T.jsx(RD, {
    children: T.jsxs(m1, {
        ref: i,
        className: At("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: n,
        ...s,
        children: [T.jsx(S1, {}), T.jsx(PD, {
            className: At("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: t
        }), T.jsx(b1, {})]
    })
}));
Tu.displayName = m1.displayName;
const OD = x.forwardRef(({
    className: e,
    ...t
}, n) => T.jsx(g1, {
    ref: n,
    className: At("px-2 py-1.5 text-sm font-semibold", e),
    ...t
}));
OD.displayName = g1.displayName;
const ws = x.forwardRef(({
    className: e,
    children: t,
    ...n
}, s) => T.jsxs(y1, {
    ref: s,
    className: At("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...n,
    children: [T.jsx("span", {
        className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        children: T.jsx(_D, {
            children: T.jsx(Ek, {
                className: "h-4 w-4"
            })
        })
    }), T.jsx(AD, {
        children: t
    })]
}));
ws.displayName = y1.displayName;
const ND = x.forwardRef(({
    className: e,
    ...t
}, n) => T.jsx(x1, {
    ref: n,
    className: At("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
ND.displayName = x1.displayName;
const MD = ep("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});

function iu({
    className: e,
    variant: t,
    ...n
}) {
    return T.jsx("div", {
        className: At(MD({
            variant: t
        }), e),
        ...n
    })
}

function LD({
    search: e,
    setSearch: t,
    dayFilter: n,
    setDayFilter: s,
    brandFilter: i,
    setBrandFilter: l,
    provinceFilter: u,
    setProvinceFilter: c
}) {
    const f = e || n || i || u,
        h = () => {
            t(""), s(""), l(""), c("")
        };
    return T.jsxs("div", {
        className: "bg-card rounded-xl border border-border p-4 space-y-3",
        children: [T.jsxs("div", {
            className: "flex items-center justify-between",
            children: [T.jsxs("div", {
                className: "flex items-center gap-2",
                children: [T.jsx(Ik, {
                    className: "h-4 w-4 text-muted-foreground"
                }), T.jsx("span", {
                    className: "text-sm font-semibold text-foreground",
                    children: "Filters"
                })]
            }), f && T.jsxs(fa, {
                variant: "ghost",
                size: "sm",
                onClick: h,
                className: "h-7 text-xs text-muted-foreground hover:text-foreground",
                children: [T.jsx(bs, {
                    className: "h-3 w-3 mr-1"
                }), "Clear all"]
            })]
        }), T.jsxs("div", {
            className: "flex flex-col sm:flex-row gap-3",
            children: [T.jsxs("div", {
                className: "relative flex-1",
                children: [T.jsx(Ok, {
                    className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                }), T.jsx(eb, {
                    placeholder: "Search properties...",
                    value: e,
                    onChange: m => t(m.target.value),
                    className: "pl-9 h-9 bg-background"
                })]
            }), T.jsxs(jf, {
                value: n,
                onValueChange: s,
                children: [T.jsx(Eu, {
                    className: "w-full sm:w-[150px] h-9 bg-background",
                    children: T.jsx(If, {
                        placeholder: "All Days"
                    })
                }), T.jsxs(Tu, {
                    children: [T.jsx(ws, {
                        value: "all",
                        children: "All Days"
                    }), XS.map(m => T.jsx(ws, {
                        value: m,
                        children: m
                    }, m))]
                })]
            }), T.jsxs(jf, {
                value: i,
                onValueChange: l,
                children: [T.jsx(Eu, {
                    className: "w-full sm:w-[180px] h-9 bg-background",
                    children: T.jsx(If, {
                        placeholder: "All Brands"
                    })
                }), T.jsxs(Tu, {
                    children: [T.jsx(ws, {
                        value: "all",
                        children: "All Brands"
                    }), JS.sort().map(m => T.jsx(ws, {
                        value: m,
                        children: m
                    }, m))]
                })]
            }), T.jsxs(jf, {
                value: u,
                onValueChange: c,
                children: [T.jsx(Eu, {
                    className: "w-full sm:w-[170px] h-9 bg-background",
                    children: T.jsx(If, {
                        placeholder: "All Provinces"
                    })
                }), T.jsxs(Tu, {
                    children: [T.jsx(ws, {
                        value: "all",
                        children: "All Provinces"
                    }), ZS.sort().map(m => T.jsx(ws, {
                        value: m,
                        children: m
                    }, m))]
                })]
            })]
        }), f && T.jsxs("div", {
            className: "flex flex-wrap gap-2 pt-1",
            children: [e && T.jsxs(iu, {
                variant: "secondary",
                className: "text-xs font-medium gap-1",
                children: ['Search: "', e, '"', T.jsx(bs, {
                    className: "h-3 w-3 cursor-pointer",
                    onClick: () => t("")
                })]
            }), n && n !== "all" && T.jsxs(iu, {
                variant: "secondary",
                className: "text-xs font-medium gap-1",
                children: [n, T.jsx(bs, {
                    className: "h-3 w-3 cursor-pointer",
                    onClick: () => s("")
                })]
            }), i && i !== "all" && T.jsxs(iu, {
                variant: "secondary",
                className: "text-xs font-medium gap-1",
                children: [i, T.jsx(bs, {
                    className: "h-3 w-3 cursor-pointer",
                    onClick: () => l("")
                })]
            }), u && u !== "all" && T.jsxs(iu, {
                variant: "secondary",
                className: "text-xs font-medium gap-1",
                children: [u, T.jsx(bs, {
                    className: "h-3 w-3 cursor-pointer",
                    onClick: () => c("")
                })]
            })]
        })]
    })
}
const DD = {
        "Garden Court": {
            bg: "bg-green-50",
            text: "text-green-700",
            border: "border-green-200"
        },
        "Garden Court KBE": {
            bg: "bg-green-50",
            text: "text-green-700",
            border: "border-green-200"
        },
        "Lifestyle Resorts": {
            bg: "bg-sky-50",
            text: "text-sky-700",
            border: "border-sky-200"
        },
        StayEasy: {
            bg: "bg-orange-50",
            text: "text-orange-700",
            border: "border-orange-200"
        },
        "StayEasy by Southern Sun": {
            bg: "bg-orange-50",
            text: "text-orange-700",
            border: "border-orange-200"
        },
        "Southern Sun": {
            bg: "bg-yellow-50",
            text: "text-yellow-700",
            border: "border-yellow-200"
        },
        "Southern Sun Hotels and Resorts": {
            bg: "bg-yellow-50",
            text: "text-yellow-700",
            border: "border-yellow-200"
        },
        "Deluxe Hotels": {
            bg: "bg-purple-50",
            text: "text-purple-700",
            border: "border-purple-200"
        },
        "InterContinental Hotels": {
            bg: "bg-rose-50",
            text: "text-rose-700",
            border: "border-rose-200"
        },
        "SS Monte, Sunsquare, Palazzo, Reservations": {
            bg: "bg-indigo-50",
            text: "text-indigo-700",
            border: "border-indigo-200"
        }
    },
    jD = {
        bg: "bg-slate-50",
        text: "text-slate-600",
        border: "border-slate-200"
    };

function K0({
    brand: e
}) {
    if (!e) return T.jsx("span", {
        className: "text-xs text-muted-foreground italic",
        children: "—"
    });
    const t = DD[e] || jD;
    return T.jsx("span", {
        className: `inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium border ${t.bg} ${t.text} ${t.border} whitespace-nowrap`,
        children: e
    })
}

function ID({
    property: e,
    isReminded: t,
    onAdd: n,
    onRemove: s,
    item: i
}) {
    return t ? T.jsxs(fa, {
        size: "sm",
        variant: "ghost",
        onClick: () => s(e),
        className: "h-7 px-2 text-xs gap-1.5 text-amber-600 hover:text-red-600 hover:bg-red-50",
        title: "Cancel reminder",
        children: [T.jsx(mk, {
            className: "h-3.5 w-3.5"
        }), T.jsx("span", {
            className: "hidden sm:inline",
            children: "Cancel"
        })]
    }) : T.jsxs(fa, {
        size: "sm",
        variant: "ghost",
        onClick: () => n(i),
        className: "h-7 px-2 text-xs gap-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10",
        title: "Remind me 30 min before reboot",
        children: [T.jsx(Cx, {
            className: "h-3.5 w-3.5"
        }), T.jsx("span", {
            className: "hidden sm:inline",
            children: "Remind Me"
        })]
    })
}

function FD({
    data: e,
    isReminded: t,
    onAddReminder: n,
    onRemoveReminder: s
}) {
    if (e.length === 0) return T.jsxs("div", {
        className: "bg-card rounded-xl border border-border p-12 text-center",
        children: [T.jsx("div", {
            className: "h-12 w-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3",
            children: T.jsx(Au, {
                className: "h-6 w-6 text-muted-foreground"
            })
        }), T.jsx("p", {
            className: "text-sm font-medium text-foreground",
            children: "No properties found"
        }), T.jsx("p", {
            className: "text-xs text-muted-foreground mt-1",
            children: "Try adjusting your filters"
        })]
    });
    const i = {};
    e.forEach(c => {
        const f = c.week;
        i[f] || (i[f] = {}), i[f][c.day] || (i[f][c.day] = []), i[f][c.day].push(c)
    });
    const l = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        u = Object.keys(i).sort((c, f) => Number(c) - Number(f));
    return T.jsx("div", {
        className: "space-y-8",
        children: u.map(c => {
            const f = i[c],
                h = l.filter(y => f[y]),
                m = h.reduce((y, w) => y + f[w].length, 0);
            return T.jsxs("div", {
                children: [T.jsxs("div", {
                    className: "flex items-center gap-3 mb-3",
                    children: [T.jsx("div", {
                        className: "flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20",
                        children: T.jsxs("span", {
                            className: "text-sm font-bold text-primary",
                            children: ["Week #", c]
                        })
                    }), T.jsx("div", {
                        className: "h-px flex-1 bg-border"
                    }), T.jsxs("span", {
                        className: "text-xs text-muted-foreground font-medium",
                        children: [m, " properties"]
                    })]
                }), T.jsx("div", {
                    className: "space-y-4",
                    children: h.map(y => {
                        const w = f[y],
                            C = VN[y];
                        return T.jsxs("div", {
                            className: "bg-card rounded-xl border border-border overflow-hidden",
                            children: [T.jsxs("div", {
                                className: `px-5 py-3 border-b border-border flex items-center justify-between ${C.bg}`,
                                children: [T.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [T.jsx("div", {
                                        className: `h-2.5 w-2.5 rounded-full ${C.dot}`
                                    }), T.jsx("h3", {
                                        className: `text-sm font-semibold ${C.text}`,
                                        children: y
                                    })]
                                }), T.jsxs("span", {
                                    className: `text-xs font-medium ${C.text} opacity-70`,
                                    children: [w.length, " ", w.length === 1 ? "property" : "properties"]
                                })]
                            }), T.jsx("div", {
                                className: "overflow-x-auto",
                                children: T.jsxs("table", {
                                    className: "w-full",
                                    children: [T.jsx("thead", {
                                        children: T.jsxs("tr", {
                                            className: "border-b border-border",
                                            children: [T.jsx("th", {
                                                className: "text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-5 py-2.5",
                                                children: "Property"
                                            }), T.jsx("th", {
                                                className: "text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-5 py-2.5 hidden sm:table-cell",
                                                children: "Brand"
                                            }), T.jsx("th", {
                                                className: "text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-5 py-2.5 hidden md:table-cell",
                                                children: "Province"
                                            }), T.jsx("th", {
                                                className: "text-right text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-5 py-2.5",
                                                children: "Down Time"
                                            }), T.jsx("th", {
                                                className: "text-right text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-5 py-2.5",
                                                children: "Remind"
                                            })]
                                        })
                                    }), T.jsx("tbody", {
                                        children: w.map((b, v) => T.jsxs("tr", {
                                            className: `border-b border-border/50 last:border-0 transition-colors ${t(b.property)?"bg-amber-50/60 hover:bg-amber-50":"hover:bg-muted/40"}`,
                                            children: [T.jsxs("td", {
                                                className: "px-5 py-3",
                                                children: [T.jsxs("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [t(b.property) && T.jsx("span", {
                                                        className: "h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0 animate-pulse"
                                                    }), T.jsx("span", {
                                                        className: "text-sm font-medium text-foreground",
                                                        children: b.property
                                                    })]
                                                }), T.jsx("span", {
                                                    className: "sm:hidden block mt-1",
                                                    children: T.jsx(K0, {
                                                        brand: b.brand
                                                    })
                                                })]
                                            }), T.jsx("td", {
                                                className: "px-5 py-3 hidden sm:table-cell",
                                                children: T.jsx(K0, {
                                                    brand: b.brand
                                                })
                                            }), T.jsx("td", {
                                                className: "px-5 py-3 hidden md:table-cell",
                                                children: T.jsxs("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [T.jsx(Tx, {
                                                        className: "h-3 w-3 text-muted-foreground flex-shrink-0"
                                                    }), T.jsx("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: b.province
                                                    })]
                                                })
                                            }), T.jsx("td", {
                                                className: "px-5 py-3 text-right",
                                                children: T.jsxs("span", {
                                                    className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-50 border border-red-100",
                                                    children: [T.jsx(Au, {
                                                        className: "h-3 w-3 text-red-500"
                                                    }), T.jsx("span", {
                                                        className: "text-xs font-semibold text-red-700 font-mono",
                                                        children: b.downTime
                                                    })]
                                                })
                                            }), T.jsx("td", {
                                                className: "px-5 py-3 text-right",
                                                children: T.jsx(ID, {
                                                    property: b.property,
                                                    item: b,
                                                    isReminded: t(b.property),
                                                    onAdd: n,
                                                    onRemove: s
                                                })
                                            })]
                                        }, v))
                                    })]
                                })
                            })]
                        }, y)
                    })
                })]
            }, c)
        })
    })
}
const Op = x.createContext({});

function Np(e) {
    const t = x.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const dc = x.createContext(null),
    Mp = x.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });
class BD extends x.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const s = this.props.sizeRef.current;
            s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function VD({
    children: e,
    isPresent: t
}) {
    const n = x.useId(),
        s = x.useRef(null),
        i = x.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }),
        {
            nonce: l
        } = x.useContext(Mp);
    return x.useInsertionEffect(() => {
        const {
            width: u,
            height: c,
            top: f,
            left: h
        } = i.current;
        if (t || !s.current || !u || !c) return;
        s.current.dataset.motionPopId = n;
        const m = document.createElement("style");
        return l && (m.nonce = l), document.head.appendChild(m), m.sheet && m.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `), () => {
            document.head.removeChild(m)
        }
    }, [t]), T.jsx(BD, {
        isPresent: t,
        childRef: s,
        sizeRef: i,
        children: x.cloneElement(e, {
            ref: s
        })
    })
}
const UD = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: s,
    custom: i,
    presenceAffectsLayout: l,
    mode: u
}) => {
    const c = Np(zD),
        f = x.useId(),
        h = x.useCallback(y => {
            c.set(y, !0);
            for (const w of c.values())
                if (!w) return;
            s && s()
        }, [c, s]),
        m = x.useMemo(() => ({
            id: f,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: h,
            register: y => (c.set(y, !1), () => c.delete(y))
        }), l ? [Math.random(), h] : [n, h]);
    return x.useMemo(() => {
        c.forEach((y, w) => c.set(w, !1))
    }, [n]), x.useEffect(() => {
        !n && !c.size && s && s()
    }, [n]), u === "popLayout" && (e = T.jsx(VD, {
        isPresent: n,
        children: e
    })), T.jsx(dc.Provider, {
        value: m,
        children: e
    })
};

function zD() {
    return new Map
}

function C1(e = !0) {
    const t = x.useContext(dc);
    if (t === null) return [!0, null];
    const {
        isPresent: n,
        onExitComplete: s,
        register: i
    } = t, l = x.useId();
    x.useEffect(() => {
        e && i(l)
    }, [e]);
    const u = x.useCallback(() => e && s && s(l), [l, s, e]);
    return !n && s ? [!1, u] : [!0]
}
const au = e => e.key || "";

function G0(e) {
    const t = [];
    return x.Children.forEach(e, n => {
        x.isValidElement(n) && t.push(n)
    }), t
}
const Lp = typeof window < "u",
    E1 = Lp ? x.useLayoutEffect : x.useEffect,
    $D = ({
        children: e,
        custom: t,
        initial: n = !0,
        onExitComplete: s,
        presenceAffectsLayout: i = !0,
        mode: l = "sync",
        propagate: u = !1
    }) => {
        const [c, f] = C1(u), h = x.useMemo(() => G0(e), [e]), m = u && !c ? [] : h.map(au), y = x.useRef(!0), w = x.useRef(h), C = Np(() => new Map), [b, v] = x.useState(h), [S, k] = x.useState(h);
        E1(() => {
            y.current = !1, w.current = h;
            for (let _ = 0; _ < S.length; _++) {
                const N = au(S[_]);
                m.includes(N) ? C.delete(N) : C.get(N) !== !0 && C.set(N, !1)
            }
        }, [S, m.length, m.join("-")]);
        const P = [];
        if (h !== b) {
            let _ = [...h];
            for (let N = 0; N < S.length; N++) {
                const B = S[N],
                    U = au(B);
                m.includes(U) || (_.splice(N, 0, B), P.push(B))
            }
            l === "wait" && P.length && (_ = P), k(G0(_)), v(h);
            return
        }
        const {
            forceRender: R
        } = x.useContext(Op);
        return T.jsx(T.Fragment, {
            children: S.map(_ => {
                const N = au(_),
                    B = u && !c ? !1 : h === S || m.includes(N),
                    U = () => {
                        if (C.has(N)) C.set(N, !0);
                        else return;
                        let j = !0;
                        C.forEach(G => {
                            G || (j = !1)
                        }), j && (R == null || R(), k(w.current), u && (f == null || f()), s && s())
                    };
                return T.jsx(UD, {
                    isPresent: B,
                    initial: !y.current || n ? void 0 : !1,
                    custom: B ? void 0 : t,
                    presenceAffectsLayout: i,
                    mode: l,
                    onExitComplete: B ? void 0 : U,
                    children: _
                }, N)
            })
        })
    },
    Xt = e => e;
let T1 = Xt;

function Dp(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const $o = (e, t, n) => {
        const s = t - e;
        return s === 0 ? 1 : (n - e) / s
    },
    sr = e => e * 1e3,
    or = e => e / 1e3,
    WD = {
        useManualTiming: !1
    };

function HD(e) {
    let t = new Set,
        n = new Set,
        s = !1,
        i = !1;
    const l = new WeakSet;
    let u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function c(h) {
        l.has(h) && (f.schedule(h), e()), h(u)
    }
    const f = {
        schedule: (h, m = !1, y = !1) => {
            const C = y && s ? t : n;
            return m && l.add(h), C.has(h) || C.add(h), h
        },
        cancel: h => {
            n.delete(h), l.delete(h)
        },
        process: h => {
            if (u = h, s) {
                i = !0;
                return
            }
            s = !0, [t, n] = [n, t], t.forEach(c), t.clear(), s = !1, i && (i = !1, f.process(h))
        }
    };
    return f
}
const lu = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    qD = 40;

function k1(e, t) {
    let n = !1,
        s = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        l = () => n = !0,
        u = lu.reduce((k, P) => (k[P] = HD(l), k), {}),
        {
            read: c,
            resolveKeyframes: f,
            update: h,
            preRender: m,
            render: y,
            postRender: w
        } = u,
        C = () => {
            const k = performance.now();
            n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(k - i.timestamp, qD), 1), i.timestamp = k, i.isProcessing = !0, c.process(i), f.process(i), h.process(i), m.process(i), y.process(i), w.process(i), i.isProcessing = !1, n && t && (s = !1, e(C))
        },
        b = () => {
            n = !0, s = !0, i.isProcessing || e(C)
        };
    return {
        schedule: lu.reduce((k, P) => {
            const R = u[P];
            return k[P] = (_, N = !1, B = !1) => (n || b(), R.schedule(_, N, B)), k
        }, {}),
        cancel: k => {
            for (let P = 0; P < lu.length; P++) u[lu[P]].cancel(k)
        },
        state: i,
        steps: u
    }
}
const {
    schedule: $e,
    cancel: Xr,
    state: vt,
    steps: Ff
} = k1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Xt, !0), R1 = x.createContext({
    strict: !1
}), Q0 = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}, Wo = {};
for (const e in Q0) Wo[e] = {
    isEnabled: t => Q0[e].some(n => !!t[n])
};

function KD(e) {
    for (const t in e) Wo[t] = { ...Wo[t],
        ...e[t]
    }
}
const GD = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Uu(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || GD.has(e)
}
let P1 = e => !Uu(e);

function QD(e) {
    e && (P1 = t => t.startsWith("on") ? !Uu(t) : e(t))
}
try {
    QD(require("@emotion/is-prop-valid").default)
} catch {}

function YD(e, t, n) {
    const s = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (P1(i) || n === !0 && Uu(i) || !t && !Uu(i) || e.draggable && i.startsWith("onDrag")) && (s[i] = e[i]);
    return s
}

function XD(e) {
    if (typeof Proxy > "u") return e;
    const t = new Map,
        n = (...s) => e(...s);
    return new Proxy(n, {
        get: (s, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
    })
}
const fc = x.createContext({});

function pa(e) {
    return typeof e == "string" || Array.isArray(e)
}

function hc(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const jp = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Ip = ["initial", ...jp];

function pc(e) {
    return hc(e.animate) || Ip.some(t => pa(e[t]))
}

function A1(e) {
    return !!(pc(e) || e.variants)
}

function JD(e, t) {
    if (pc(e)) {
        const {
            initial: n,
            animate: s
        } = e;
        return {
            initial: n === !1 || pa(n) ? n : void 0,
            animate: pa(s) ? s : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function ZD(e) {
    const {
        initial: t,
        animate: n
    } = JD(e, x.useContext(fc));
    return x.useMemo(() => ({
        initial: t,
        animate: n
    }), [Y0(t), Y0(n)])
}

function Y0(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const ej = Symbol.for("motionComponentSymbol");

function bo(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function tj(e, t, n) {
    return x.useCallback(s => {
        s && e.onMount && e.onMount(s), t && (s ? t.mount(s) : t.unmount()), n && (typeof n == "function" ? n(s) : bo(n) && (n.current = s))
    }, [t])
}
const Fp = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    nj = "framerAppearId",
    _1 = "data-" + Fp(nj),
    {
        schedule: Bp
    } = k1(queueMicrotask, !1),
    O1 = x.createContext({});

function rj(e, t, n, s, i) {
    var l, u;
    const {
        visualElement: c
    } = x.useContext(fc), f = x.useContext(R1), h = x.useContext(dc), m = x.useContext(Mp).reducedMotion, y = x.useRef(null);
    s = s || f.renderer, !y.current && s && (y.current = s(e, {
        visualState: t,
        parent: c,
        props: n,
        presenceContext: h,
        blockInitialAnimation: h ? h.initial === !1 : !1,
        reducedMotionConfig: m
    }));
    const w = y.current,
        C = x.useContext(O1);
    w && !w.projection && i && (w.type === "html" || w.type === "svg") && sj(y.current, n, i, C);
    const b = x.useRef(!1);
    x.useInsertionEffect(() => {
        w && b.current && w.update(n, h)
    });
    const v = n[_1],
        S = x.useRef(!!v && !(!((l = window.MotionHandoffIsComplete) === null || l === void 0) && l.call(window, v)) && ((u = window.MotionHasOptimisedAnimation) === null || u === void 0 ? void 0 : u.call(window, v)));
    return E1(() => {
        w && (b.current = !0, window.MotionIsMounted = !0, w.updateFeatures(), Bp.render(w.render), S.current && w.animationState && w.animationState.animateChanges())
    }), x.useEffect(() => {
        w && (!S.current && w.animationState && w.animationState.animateChanges(), S.current && (queueMicrotask(() => {
            var k;
            (k = window.MotionHandoffMarkAsComplete) === null || k === void 0 || k.call(window, v)
        }), S.current = !1))
    }), w
}

function sj(e, t, n, s) {
    const {
        layoutId: i,
        layout: l,
        drag: u,
        dragConstraints: c,
        layoutScroll: f,
        layoutRoot: h
    } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : N1(e.parent)), e.projection.setOptions({
        layoutId: i,
        layout: l,
        alwaysMeasureLayout: !!u || c && bo(c),
        visualElement: e,
        animationType: typeof l == "string" ? l : "both",
        initialPromotionConfig: s,
        layoutScroll: f,
        layoutRoot: h
    })
}

function N1(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : N1(e.parent)
}

function oj({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: s,
    Component: i
}) {
    var l, u;
    e && KD(e);

    function c(h, m) {
        let y;
        const w = { ...x.useContext(Mp),
                ...h,
                layoutId: ij(h)
            },
            {
                isStatic: C
            } = w,
            b = ZD(h),
            v = s(h, C);
        if (!C && Lp) {
            aj();
            const S = lj(w);
            y = S.MeasureLayout, b.visualElement = rj(i, v, w, t, S.ProjectionNode)
        }
        return T.jsxs(fc.Provider, {
            value: b,
            children: [y && b.visualElement ? T.jsx(y, {
                visualElement: b.visualElement,
                ...w
            }) : null, n(i, h, tj(v, b.visualElement, m), v, C, b.visualElement)]
        })
    }
    c.displayName = `motion.${typeof i=="string"?i:`create(${(u=(l=i.displayName)!==null&&l!==void 0?l:i.name)!==null&&u!==void 0?u:""})`}`;
    const f = x.forwardRef(c);
    return f[ej] = i, f
}

function ij({
    layoutId: e
}) {
    const t = x.useContext(Op).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function aj(e, t) {
    x.useContext(R1).strict
}

function lj(e) {
    const {
        drag: t,
        layout: n
    } = Wo;
    if (!t && !n) return {};
    const s = { ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? s.MeasureLayout : void 0,
        ProjectionNode: s.ProjectionNode
    }
}
const uj = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Vp(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(uj.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function X0(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, s) => {
        t[0][s] = n.get(), t[1][s] = n.getVelocity()
    }), t
}

function Up(e, t, n, s) {
    if (typeof t == "function") {
        const [i, l] = X0(s);
        t = t(n !== void 0 ? n : e.custom, i, l)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        const [i, l] = X0(s);
        t = t(n !== void 0 ? n : e.custom, i, l)
    }
    return t
}
const Dh = e => Array.isArray(e),
    cj = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    dj = e => Dh(e) ? e[e.length - 1] || 0 : e,
    Pt = e => !!(e && e.getVelocity);

function ku(e) {
    const t = Pt(e) ? e.get() : e;
    return cj(t) ? t.toValue() : t
}

function fj({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onUpdate: n
}, s, i, l) {
    const u = {
        latestValues: hj(s, i, l, e),
        renderState: t()
    };
    return n && (u.onMount = c => n({
        props: s,
        current: c,
        ...u
    }), u.onUpdate = c => n(c)), u
}
const M1 = e => (t, n) => {
    const s = x.useContext(fc),
        i = x.useContext(dc),
        l = () => fj(e, t, s, i);
    return n ? l() : Np(l)
};

function hj(e, t, n, s) {
    const i = {},
        l = s(e, {});
    for (const w in l) i[w] = ku(l[w]);
    let {
        initial: u,
        animate: c
    } = e;
    const f = pc(e),
        h = A1(e);
    t && h && !f && e.inherit !== !1 && (u === void 0 && (u = t.initial), c === void 0 && (c = t.animate));
    let m = n ? n.initial === !1 : !1;
    m = m || u === !1;
    const y = m ? c : u;
    if (y && typeof y != "boolean" && !hc(y)) {
        const w = Array.isArray(y) ? y : [y];
        for (let C = 0; C < w.length; C++) {
            const b = Up(e, w[C]);
            if (b) {
                const {
                    transitionEnd: v,
                    transition: S,
                    ...k
                } = b;
                for (const P in k) {
                    let R = k[P];
                    if (Array.isArray(R)) {
                        const _ = m ? R.length - 1 : 0;
                        R = R[_]
                    }
                    R !== null && (i[P] = R)
                }
                for (const P in v) i[P] = v[P]
            }
        }
    }
    return i
}
const Zo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Hs = new Set(Zo),
    L1 = e => t => typeof t == "string" && t.startsWith(e),
    D1 = L1("--"),
    pj = L1("var(--"),
    zp = e => pj(e) ? mj.test(e.split("/*")[0].trim()) : !1,
    mj = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    j1 = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    lr = (e, t, n) => n > t ? t : n < e ? e : n,
    ei = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    ma = { ...ei,
        transform: e => lr(0, 1, e)
    },
    uu = { ...ei,
        default: 1
    },
    La = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    jr = La("deg"),
    Bn = La("%"),
    Ee = La("px"),
    gj = La("vh"),
    yj = La("vw"),
    J0 = { ...Bn,
        parse: e => Bn.parse(e) / 100,
        transform: e => Bn.transform(e * 100)
    },
    vj = {
        borderWidth: Ee,
        borderTopWidth: Ee,
        borderRightWidth: Ee,
        borderBottomWidth: Ee,
        borderLeftWidth: Ee,
        borderRadius: Ee,
        radius: Ee,
        borderTopLeftRadius: Ee,
        borderTopRightRadius: Ee,
        borderBottomRightRadius: Ee,
        borderBottomLeftRadius: Ee,
        width: Ee,
        maxWidth: Ee,
        height: Ee,
        maxHeight: Ee,
        top: Ee,
        right: Ee,
        bottom: Ee,
        left: Ee,
        padding: Ee,
        paddingTop: Ee,
        paddingRight: Ee,
        paddingBottom: Ee,
        paddingLeft: Ee,
        margin: Ee,
        marginTop: Ee,
        marginRight: Ee,
        marginBottom: Ee,
        marginLeft: Ee,
        backgroundPositionX: Ee,
        backgroundPositionY: Ee
    },
    wj = {
        rotate: jr,
        rotateX: jr,
        rotateY: jr,
        rotateZ: jr,
        scale: uu,
        scaleX: uu,
        scaleY: uu,
        scaleZ: uu,
        skew: jr,
        skewX: jr,
        skewY: jr,
        distance: Ee,
        translateX: Ee,
        translateY: Ee,
        translateZ: Ee,
        x: Ee,
        y: Ee,
        z: Ee,
        perspective: Ee,
        transformPerspective: Ee,
        opacity: ma,
        originX: J0,
        originY: J0,
        originZ: Ee
    },
    Z0 = { ...ei,
        transform: Math.round
    },
    $p = { ...vj,
        ...wj,
        zIndex: Z0,
        size: Ee,
        fillOpacity: ma,
        strokeOpacity: ma,
        numOctaves: Z0
    },
    xj = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    Sj = Zo.length;

function bj(e, t, n) {
    let s = "",
        i = !0;
    for (let l = 0; l < Sj; l++) {
        const u = Zo[l],
            c = e[u];
        if (c === void 0) continue;
        let f = !0;
        if (typeof c == "number" ? f = c === (u.startsWith("scale") ? 1 : 0) : f = parseFloat(c) === 0, !f || n) {
            const h = j1(c, $p[u]);
            if (!f) {
                i = !1;
                const m = xj[u] || u;
                s += `${m}(${h}) `
            }
            n && (t[u] = h)
        }
    }
    return s = s.trim(), n ? s = n(t, i ? "" : s) : i && (s = "none"), s
}

function Wp(e, t, n) {
    const {
        style: s,
        vars: i,
        transformOrigin: l
    } = e;
    let u = !1,
        c = !1;
    for (const f in t) {
        const h = t[f];
        if (Hs.has(f)) {
            u = !0;
            continue
        } else if (D1(f)) {
            i[f] = h;
            continue
        } else {
            const m = j1(h, $p[f]);
            f.startsWith("origin") ? (c = !0, l[f] = m) : s[f] = m
        }
    }
    if (t.transform || (u || n ? s.transform = bj(t, e.transform, n) : s.transform && (s.transform = "none")), c) {
        const {
            originX: f = "50%",
            originY: h = "50%",
            originZ: m = 0
        } = l;
        s.transformOrigin = `${f} ${h} ${m}`
    }
}
const Cj = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Ej = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function Tj(e, t, n = 1, s = 0, i = !0) {
    e.pathLength = 1;
    const l = i ? Cj : Ej;
    e[l.offset] = Ee.transform(-s);
    const u = Ee.transform(t),
        c = Ee.transform(n);
    e[l.array] = `${u} ${c}`
}

function ew(e, t, n) {
    return typeof e == "string" ? e : Ee.transform(t + n * e)
}

function kj(e, t, n) {
    const s = ew(t, e.x, e.width),
        i = ew(n, e.y, e.height);
    return `${s} ${i}`
}

function Hp(e, {
    attrX: t,
    attrY: n,
    attrScale: s,
    originX: i,
    originY: l,
    pathLength: u,
    pathSpacing: c = 1,
    pathOffset: f = 0,
    ...h
}, m, y) {
    if (Wp(e, h, y), m) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: w,
        style: C,
        dimensions: b
    } = e;
    w.transform && (b && (C.transform = w.transform), delete w.transform), b && (i !== void 0 || l !== void 0 || C.transform) && (C.transformOrigin = kj(b, i !== void 0 ? i : .5, l !== void 0 ? l : .5)), t !== void 0 && (w.x = t), n !== void 0 && (w.y = n), s !== void 0 && (w.scale = s), u !== void 0 && Tj(w, u, c, f, !1)
}
const qp = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    I1 = () => ({ ...qp(),
        attrs: {}
    }),
    Kp = e => typeof e == "string" && e.toLowerCase() === "svg";

function F1(e, {
    style: t,
    vars: n
}, s, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(s));
    for (const l in n) e.style.setProperty(l, n[l])
}
const B1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function V1(e, t, n, s) {
    F1(e, t, void 0, s);
    for (const i in t.attrs) e.setAttribute(B1.has(i) ? i : Fp(i), t.attrs[i])
}
const zu = {};

function Rj(e) {
    Object.assign(zu, e)
}

function U1(e, {
    layout: t,
    layoutId: n
}) {
    return Hs.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!zu[e] || e === "opacity")
}

function Gp(e, t, n) {
    var s;
    const {
        style: i
    } = e, l = {};
    for (const u in i)(Pt(i[u]) || t.style && Pt(t.style[u]) || U1(u, e) || ((s = n == null ? void 0 : n.getValue(u)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (l[u] = i[u]);
    return l
}

function z1(e, t, n) {
    const s = Gp(e, t, n);
    for (const i in e)
        if (Pt(e[i]) || Pt(t[i])) {
            const l = Zo.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            s[l] = e[i]
        }
    return s
}

function Pj(e, t) {
    try {
        t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
    } catch {
        t.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const tw = ["x", "y", "width", "height", "cx", "cy", "r"],
    Aj = {
        useVisualState: M1({
            scrapeMotionValuesFromProps: z1,
            createRenderState: I1,
            onUpdate: ({
                props: e,
                prevProps: t,
                current: n,
                renderState: s,
                latestValues: i
            }) => {
                if (!n) return;
                let l = !!e.drag;
                if (!l) {
                    for (const c in i)
                        if (Hs.has(c)) {
                            l = !0;
                            break
                        }
                }
                if (!l) return;
                let u = !t;
                if (t)
                    for (let c = 0; c < tw.length; c++) {
                        const f = tw[c];
                        e[f] !== t[f] && (u = !0)
                    }
                u && $e.read(() => {
                    Pj(n, s), $e.render(() => {
                        Hp(s, i, Kp(n.tagName), e.transformTemplate), V1(n, s)
                    })
                })
            }
        })
    },
    _j = {
        useVisualState: M1({
            scrapeMotionValuesFromProps: Gp,
            createRenderState: qp
        })
    };

function $1(e, t, n) {
    for (const s in t) !Pt(t[s]) && !U1(s, n) && (e[s] = t[s])
}

function Oj({
    transformTemplate: e
}, t) {
    return x.useMemo(() => {
        const n = qp();
        return Wp(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}

function Nj(e, t) {
    const n = e.style || {},
        s = {};
    return $1(s, n, e), Object.assign(s, Oj(e, t)), s
}

function Mj(e, t) {
    const n = {},
        s = Nj(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = s, n
}

function Lj(e, t, n, s) {
    const i = x.useMemo(() => {
        const l = I1();
        return Hp(l, t, Kp(s), e.transformTemplate), { ...l.attrs,
            style: { ...l.style
            }
        }
    }, [t]);
    if (e.style) {
        const l = {};
        $1(l, e.style, e), i.style = { ...l,
            ...i.style
        }
    }
    return i
}

function Dj(e = !1) {
    return (n, s, i, {
        latestValues: l
    }, u) => {
        const f = (Vp(n) ? Lj : Mj)(s, l, u, n),
            h = YD(s, typeof n == "string", e),
            m = n !== x.Fragment ? { ...h,
                ...f,
                ref: i
            } : {},
            {
                children: y
            } = s,
            w = x.useMemo(() => Pt(y) ? y.get() : y, [y]);
        return x.createElement(n, { ...m,
            children: w
        })
    }
}

function jj(e, t) {
    return function(s, {
        forwardMotionProps: i
    } = {
        forwardMotionProps: !1
    }) {
        const u = { ...Vp(s) ? Aj : _j,
            preloadedFeatures: e,
            useRender: Dj(i),
            createVisualElement: t,
            Component: s
        };
        return oj(u)
    }
}

function W1(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let s = 0; s < n; s++)
        if (t[s] !== e[s]) return !1;
    return !0
}

function mc(e, t, n) {
    const s = e.getProps();
    return Up(s, t, n !== void 0 ? n : s.custom, e)
}
const Ij = Dp(() => window.ScrollTimeline !== void 0);
class Fj {
    constructor(t) {
        this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(t => "finished" in t ? t.finished : t))
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let s = 0; s < this.animations.length; s++) this.animations[s][t] = n
    }
    attachTimeline(t, n) {
        const s = this.animations.map(i => {
            if (Ij() && i.attachTimeline) return i.attachTimeline(t);
            if (typeof n == "function") return n(i)
        });
        return () => {
            s.forEach((i, l) => {
                i && i(), this.animations[l].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class Bj extends Fj {
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
}

function Qp(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const jh = 2e4;

function H1(e) {
    let t = 0;
    const n = 50;
    let s = e.next(t);
    for (; !s.done && t < jh;) t += n, s = e.next(t);
    return t >= jh ? 1 / 0 : t
}

function Yp(e) {
    return typeof e == "function"
}

function nw(e, t) {
    e.timeline = t, e.onfinish = null
}
const Xp = e => Array.isArray(e) && typeof e[0] == "number",
    Vj = {
        linearEasing: void 0
    };

function Uj(e, t) {
    const n = Dp(e);
    return () => {
        var s;
        return (s = Vj[t]) !== null && s !== void 0 ? s : n()
    }
}
const $u = Uj(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    q1 = (e, t, n = 10) => {
        let s = "";
        const i = Math.max(Math.round(t / n), 2);
        for (let l = 0; l < i; l++) s += e($o(0, i - 1, l)) + ", ";
        return `linear(${s.substring(0,s.length-2)})`
    };

function K1(e) {
    return !!(typeof e == "function" && $u() || !e || typeof e == "string" && (e in Ih || $u()) || Xp(e) || Array.isArray(e) && e.every(K1))
}
const Ji = ([e, t, n, s]) => `cubic-bezier(${e}, ${t}, ${n}, ${s})`,
    Ih = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Ji([0, .65, .55, 1]),
        circOut: Ji([.55, 0, 1, .45]),
        backIn: Ji([.31, .01, .66, -.59]),
        backOut: Ji([.33, 1.53, .69, .99])
    };

function G1(e, t) {
    if (e) return typeof e == "function" && $u() ? q1(e, t) : Xp(e) ? Ji(e) : Array.isArray(e) ? e.map(n => G1(n, t) || Ih.easeOut) : Ih[e]
}
const xn = {
    x: !1,
    y: !1
};

function Q1() {
    return xn.x || xn.y
}

function zj(e, t, n) {
    var s;
    if (e instanceof Element) return [e];
    if (typeof e == "string") {
        let i = document;
        const l = (s = void 0) !== null && s !== void 0 ? s : i.querySelectorAll(e);
        return l ? Array.from(l) : []
    }
    return Array.from(e)
}

function Y1(e, t) {
    const n = zj(e),
        s = new AbortController,
        i = {
            passive: !0,
            ...t,
            signal: s.signal
        };
    return [n, i, () => s.abort()]
}

function rw(e) {
    return t => {
        t.pointerType === "touch" || Q1() || e(t)
    }
}

function $j(e, t, n = {}) {
    const [s, i, l] = Y1(e, n), u = rw(c => {
        const {
            target: f
        } = c, h = t(c);
        if (typeof h != "function" || !f) return;
        const m = rw(y => {
            h(y), f.removeEventListener("pointerleave", m)
        });
        f.addEventListener("pointerleave", m, i)
    });
    return s.forEach(c => {
        c.addEventListener("pointerenter", u, i)
    }), l
}
const X1 = (e, t) => t ? e === t ? !0 : X1(e, t.parentElement) : !1,
    Jp = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
    Wj = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function Hj(e) {
    return Wj.has(e.tagName) || e.tabIndex !== -1
}
const Zi = new WeakSet;

function sw(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}

function Bf(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const qj = (e, t) => {
    const n = e.currentTarget;
    if (!n) return;
    const s = sw(() => {
        if (Zi.has(n)) return;
        Bf(n, "down");
        const i = sw(() => {
                Bf(n, "up")
            }),
            l = () => Bf(n, "cancel");
        n.addEventListener("keyup", i, t), n.addEventListener("blur", l, t)
    });
    n.addEventListener("keydown", s, t), n.addEventListener("blur", () => n.removeEventListener("keydown", s), t)
};

function ow(e) {
    return Jp(e) && !Q1()
}

function Kj(e, t, n = {}) {
    const [s, i, l] = Y1(e, n), u = c => {
        const f = c.currentTarget;
        if (!ow(c) || Zi.has(f)) return;
        Zi.add(f);
        const h = t(c),
            m = (C, b) => {
                window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", w), !(!ow(C) || !Zi.has(f)) && (Zi.delete(f), typeof h == "function" && h(C, {
                    success: b
                }))
            },
            y = C => {
                m(C, n.useGlobalTarget || X1(f, C.target))
            },
            w = C => {
                m(C, !1)
            };
        window.addEventListener("pointerup", y, i), window.addEventListener("pointercancel", w, i)
    };
    return s.forEach(c => {
        !Hj(c) && c.getAttribute("tabindex") === null && (c.tabIndex = 0), (n.useGlobalTarget ? window : c).addEventListener("pointerdown", u, i), c.addEventListener("focus", h => qj(h, i), i)
    }), l
}

function Gj(e) {
    return e === "x" || e === "y" ? xn[e] ? null : (xn[e] = !0, () => {
        xn[e] = !1
    }) : xn.x || xn.y ? null : (xn.x = xn.y = !0, () => {
        xn.x = xn.y = !1
    })
}
const J1 = new Set(["width", "height", "top", "left", "right", "bottom", ...Zo]);
let Ru;

function Qj() {
    Ru = void 0
}
const Vn = {
    now: () => (Ru === void 0 && Vn.set(vt.isProcessing || WD.useManualTiming ? vt.timestamp : performance.now()), Ru),
    set: e => {
        Ru = e, queueMicrotask(Qj)
    }
};

function Zp(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function em(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class tm {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Zp(this.subscriptions, t), () => em(this.subscriptions, t)
    }
    notify(t, n, s) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, s);
            else
                for (let l = 0; l < i; l++) {
                    const u = this.subscriptions[l];
                    u && u(t, n, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}

function Z1(e, t) {
    return t ? e * (1e3 / t) : 0
}
const iw = 30,
    Yj = e => !isNaN(parseFloat(e));
class Xj {
    constructor(t, n = {}) {
        this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s, i = !0) => {
            const l = Vn.now();
            this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = Vn.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Yj(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new tm);
        const s = this.events[t].add(n);
        return t === "change" ? () => {
            s(), $e.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : s
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, s) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - s
    }
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = Vn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > iw) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, iw);
        return Z1(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function ga(e, t) {
    return new Xj(e, t)
}

function Jj(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ga(n))
}

function Zj(e, t) {
    const n = mc(e, t);
    let {
        transitionEnd: s = {},
        transition: i = {},
        ...l
    } = n || {};
    l = { ...l,
        ...s
    };
    for (const u in l) {
        const c = dj(l[u]);
        Jj(e, u, c)
    }
}

function eI(e) {
    return !!(Pt(e) && e.add)
}

function Fh(e, t) {
    const n = e.getValue("willChange");
    if (eI(n)) return n.add(t)
}

function eC(e) {
    return e.props[_1]
}
const tC = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    tI = 1e-7,
    nI = 12;

function rI(e, t, n, s, i) {
    let l, u, c = 0;
    do u = t + (n - t) / 2, l = tC(u, s, i) - e, l > 0 ? n = u : t = u; while (Math.abs(l) > tI && ++c < nI);
    return u
}

function Da(e, t, n, s) {
    if (e === t && n === s) return Xt;
    const i = l => rI(l, 0, 1, e, n);
    return l => l === 0 || l === 1 ? l : tC(i(l), t, s)
}
const nC = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    rC = e => t => 1 - e(1 - t),
    sC = Da(.33, 1.53, .69, .99),
    nm = rC(sC),
    oC = nC(nm),
    iC = e => (e *= 2) < 1 ? .5 * nm(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    rm = e => 1 - Math.sin(Math.acos(e)),
    aC = rC(rm),
    lC = nC(rm),
    uC = e => /^0[^.\s]+$/u.test(e);

function sI(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || uC(e) : !0
}
const ra = e => Math.round(e * 1e5) / 1e5,
    sm = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function oI(e) {
    return e == null
}
const iI = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    om = (e, t) => n => !!(typeof n == "string" && iI.test(n) && n.startsWith(e) || t && !oI(n) && Object.prototype.hasOwnProperty.call(n, t)),
    cC = (e, t, n) => s => {
        if (typeof s != "string") return s;
        const [i, l, u, c] = s.match(sm);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(l),
            [n]: parseFloat(u),
            alpha: c !== void 0 ? parseFloat(c) : 1
        }
    },
    aI = e => lr(0, 255, e),
    Vf = { ...ei,
        transform: e => Math.round(aI(e))
    },
    Ts = {
        test: om("rgb", "red"),
        parse: cC("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: s = 1
        }) => "rgba(" + Vf.transform(e) + ", " + Vf.transform(t) + ", " + Vf.transform(n) + ", " + ra(ma.transform(s)) + ")"
    };

function lI(e) {
    let t = "",
        n = "",
        s = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), s = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), s = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, s += s, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(s, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Bh = {
        test: om("#"),
        parse: lI,
        transform: Ts.transform
    },
    Co = {
        test: om("hsl", "hue"),
        parse: cC("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: s = 1
        }) => "hsla(" + Math.round(e) + ", " + Bn.transform(ra(t)) + ", " + Bn.transform(ra(n)) + ", " + ra(ma.transform(s)) + ")"
    },
    kt = {
        test: e => Ts.test(e) || Bh.test(e) || Co.test(e),
        parse: e => Ts.test(e) ? Ts.parse(e) : Co.test(e) ? Co.parse(e) : Bh.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Ts.transform(e) : Co.transform(e)
    },
    uI = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function cI(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(sm)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(uI)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const dC = "number",
    fC = "color",
    dI = "var",
    fI = "var(",
    aw = "${}",
    hI = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function ya(e) {
    const t = e.toString(),
        n = [],
        s = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let l = 0;
    const c = t.replace(hI, f => (kt.test(f) ? (s.color.push(l), i.push(fC), n.push(kt.parse(f))) : f.startsWith(fI) ? (s.var.push(l), i.push(dI), n.push(f)) : (s.number.push(l), i.push(dC), n.push(parseFloat(f))), ++l, aw)).split(aw);
    return {
        values: n,
        split: c,
        indexes: s,
        types: i
    }
}

function hC(e) {
    return ya(e).values
}

function pC(e) {
    const {
        split: t,
        types: n
    } = ya(e), s = t.length;
    return i => {
        let l = "";
        for (let u = 0; u < s; u++)
            if (l += t[u], i[u] !== void 0) {
                const c = n[u];
                c === dC ? l += ra(i[u]) : c === fC ? l += kt.transform(i[u]) : l += i[u]
            }
        return l
    }
}
const pI = e => typeof e == "number" ? 0 : e;

function mI(e) {
    const t = hC(e);
    return pC(e)(t.map(pI))
}
const Jr = {
        test: cI,
        parse: hC,
        createTransformer: pC,
        getAnimatableNone: mI
    },
    gI = new Set(["brightness", "contrast", "saturate", "opacity"]);

function yI(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [s] = n.match(sm) || [];
    if (!s) return e;
    const i = n.replace(s, "");
    let l = gI.has(t) ? 1 : 0;
    return s !== n && (l *= 100), t + "(" + l + i + ")"
}
const vI = /\b([a-z-]*)\(.*?\)/gu,
    Vh = { ...Jr,
        getAnimatableNone: e => {
            const t = e.match(vI);
            return t ? t.map(yI).join(" ") : e
        }
    },
    wI = { ...$p,
        color: kt,
        backgroundColor: kt,
        outlineColor: kt,
        fill: kt,
        stroke: kt,
        borderColor: kt,
        borderTopColor: kt,
        borderRightColor: kt,
        borderBottomColor: kt,
        borderLeftColor: kt,
        filter: Vh,
        WebkitFilter: Vh
    },
    im = e => wI[e];

function mC(e, t) {
    let n = im(e);
    return n !== Vh && (n = Jr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const xI = new Set(["auto", "none", "0"]);

function SI(e, t, n) {
    let s = 0,
        i;
    for (; s < e.length && !i;) {
        const l = e[s];
        typeof l == "string" && !xI.has(l) && ya(l).values.length && (i = e[s]), s++
    }
    if (i && n)
        for (const l of t) e[l] = mC(n, i)
}
const lw = e => e === ei || e === Ee,
    uw = (e, t) => parseFloat(e.split(", ")[t]),
    cw = (e, t) => (n, {
        transform: s
    }) => {
        if (s === "none" || !s) return 0;
        const i = s.match(/^matrix3d\((.+)\)$/u);
        if (i) return uw(i[1], t); {
            const l = s.match(/^matrix\((.+)\)$/u);
            return l ? uw(l[1], e) : 0
        }
    },
    bI = new Set(["x", "y", "z"]),
    CI = Zo.filter(e => !bI.has(e));

function EI(e) {
    const t = [];
    return CI.forEach(n => {
        const s = e.getValue(n);
        s !== void 0 && (t.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0))
    }), t
}
const Ho = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: cw(4, 13),
    y: cw(5, 14)
};
Ho.translateX = Ho.x;
Ho.translateY = Ho.y;
const js = new Set;
let Uh = !1,
    zh = !1;

function gC() {
    if (zh) {
        const e = Array.from(js).filter(s => s.needsMeasurement),
            t = new Set(e.map(s => s.element)),
            n = new Map;
        t.forEach(s => {
            const i = EI(s);
            i.length && (n.set(s, i), s.render())
        }), e.forEach(s => s.measureInitialState()), t.forEach(s => {
            s.render();
            const i = n.get(s);
            i && i.forEach(([l, u]) => {
                var c;
                (c = s.getValue(l)) === null || c === void 0 || c.set(u)
            })
        }), e.forEach(s => s.measureEndState()), e.forEach(s => {
            s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY)
        })
    }
    zh = !1, Uh = !1, js.forEach(e => e.complete()), js.clear()
}

function yC() {
    js.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (zh = !0)
    })
}

function TI() {
    yC(), gC()
}
class am {
    constructor(t, n, s, i, l, u = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = s, this.motionValue = i, this.element = l, this.isAsync = u
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (js.add(this), Uh || (Uh = !0, $e.read(yC), $e.resolveKeyframes(gC))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: s,
            motionValue: i
        } = this;
        for (let l = 0; l < t.length; l++)
            if (t[l] === null)
                if (l === 0) {
                    const u = i == null ? void 0 : i.get(),
                        c = t[t.length - 1];
                    if (u !== void 0) t[0] = u;
                    else if (s && n) {
                        const f = s.readValue(n, c);
                        f != null && (t[0] = f)
                    }
                    t[0] === void 0 && (t[0] = c), i && u === void 0 && i.set(t[0])
                } else t[l] = t[l - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), js.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, js.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const vC = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    kI = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function RI(e) {
    const t = kI.exec(e);
    if (!t) return [, ];
    const [, n, s, i] = t;
    return [`--${n??s}`, i]
}

function wC(e, t, n = 1) {
    const [s, i] = RI(e);
    if (!s) return;
    const l = window.getComputedStyle(t).getPropertyValue(s);
    if (l) {
        const u = l.trim();
        return vC(u) ? parseFloat(u) : u
    }
    return zp(i) ? wC(i, t, n + 1) : i
}
const xC = e => t => t.test(e),
    PI = {
        test: e => e === "auto",
        parse: e => e
    },
    SC = [ei, Ee, Bn, jr, yj, gj, PI],
    dw = e => SC.find(xC(e));
class bC extends am {
    constructor(t, n, s, i, l) {
        super(t, n, s, i, l, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: s
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let f = 0; f < t.length; f++) {
            let h = t[f];
            if (typeof h == "string" && (h = h.trim(), zp(h))) {
                const m = wC(h, n.current);
                m !== void 0 && (t[f] = m), f === t.length - 1 && (this.finalKeyframe = h)
            }
        }
        if (this.resolveNoneKeyframes(), !J1.has(s) || t.length !== 2) return;
        const [i, l] = t, u = dw(i), c = dw(l);
        if (u !== c)
            if (lw(u) && lw(c))
                for (let f = 0; f < t.length; f++) {
                    const h = t[f];
                    typeof h == "string" && (t[f] = parseFloat(h))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, s = [];
        for (let i = 0; i < t.length; i++) sI(t[i]) && s.push(i);
        s.length && SI(t, s, n)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: s
        } = this;
        if (!t || !t.current) return;
        s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ho[s](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(s, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {
            element: n,
            name: s,
            unresolvedKeyframes: i
        } = this;
        if (!n || !n.current) return;
        const l = n.getValue(s);
        l && l.jump(this.measuredOrigin, !1);
        const u = i.length - 1,
            c = i[u];
        i[u] = Ho[s](n.measureViewportBox(), window.getComputedStyle(n.current)), c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([f, h]) => {
            n.getValue(f).set(h)
        }), this.resolveNoneKeyframes()
    }
}
const fw = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Jr.test(e) || e === "0") && !e.startsWith("url("));

function AI(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function _I(e, t, n, s) {
    const i = e[0];
    if (i === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const l = e[e.length - 1],
        u = fw(i, t),
        c = fw(l, t);
    return !u || !c ? !1 : AI(e) || (n === "spring" || Yp(n)) && s
}
const OI = e => e !== null;

function gc(e, {
    repeat: t,
    repeatType: n = "loop"
}, s) {
    const i = e.filter(OI),
        l = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !l || s === void 0 ? i[l] : s
}
const NI = 40;
class CC {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: s = "keyframes",
        repeat: i = 0,
        repeatDelay: l = 0,
        repeatType: u = "loop",
        ...c
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Vn.now(), this.options = {
            autoplay: t,
            delay: n,
            type: s,
            repeat: i,
            repeatDelay: l,
            repeatType: u,
            ...c
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > NI ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && TI(), this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = Vn.now(), this.hasAttemptedResolve = !0;
        const {
            name: s,
            type: i,
            velocity: l,
            delay: u,
            onComplete: c,
            onUpdate: f,
            isGenerator: h
        } = this.options;
        if (!h && !_I(t, s, i, l))
            if (u) this.options.duration = 0;
            else {
                f && f(gc(t, this.options, n)), c && c(), this.resolveFinishedPromise();
                return
            }
        const m = this.initPlayback(t, n);
        m !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...m
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        })
    }
}
const Ke = (e, t, n) => e + (t - e) * n;

function Uf(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function MI({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: s
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        l = 0,
        u = 0;
    if (!t) i = l = u = n;
    else {
        const c = n < .5 ? n * (1 + t) : n + t - n * t,
            f = 2 * n - c;
        i = Uf(f, c, e + 1 / 3), l = Uf(f, c, e), u = Uf(f, c, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(l * 255),
        blue: Math.round(u * 255),
        alpha: s
    }
}

function Wu(e, t) {
    return n => n > 0 ? t : e
}
const zf = (e, t, n) => {
        const s = e * e,
            i = n * (t * t - s) + s;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    LI = [Bh, Ts, Co],
    DI = e => LI.find(t => t.test(e));

function hw(e) {
    const t = DI(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === Co && (n = MI(n)), n
}
const pw = (e, t) => {
        const n = hw(e),
            s = hw(t);
        if (!n || !s) return Wu(e, t);
        const i = { ...n
        };
        return l => (i.red = zf(n.red, s.red, l), i.green = zf(n.green, s.green, l), i.blue = zf(n.blue, s.blue, l), i.alpha = Ke(n.alpha, s.alpha, l), Ts.transform(i))
    },
    jI = (e, t) => n => t(e(n)),
    ja = (...e) => e.reduce(jI),
    $h = new Set(["none", "hidden"]);

function II(e, t) {
    return $h.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function FI(e, t) {
    return n => Ke(e, t, n)
}

function lm(e) {
    return typeof e == "number" ? FI : typeof e == "string" ? zp(e) ? Wu : kt.test(e) ? pw : UI : Array.isArray(e) ? EC : typeof e == "object" ? kt.test(e) ? pw : BI : Wu
}

function EC(e, t) {
    const n = [...e],
        s = n.length,
        i = e.map((l, u) => lm(l)(l, t[u]));
    return l => {
        for (let u = 0; u < s; u++) n[u] = i[u](l);
        return n
    }
}

function BI(e, t) {
    const n = { ...e,
            ...t
        },
        s = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (s[i] = lm(e[i])(e[i], t[i]));
    return i => {
        for (const l in s) n[l] = s[l](i);
        return n
    }
}

function VI(e, t) {
    var n;
    const s = [],
        i = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let l = 0; l < t.values.length; l++) {
        const u = t.types[l],
            c = e.indexes[u][i[u]],
            f = (n = e.values[c]) !== null && n !== void 0 ? n : 0;
        s[l] = f, i[u]++
    }
    return s
}
const UI = (e, t) => {
    const n = Jr.createTransformer(t),
        s = ya(e),
        i = ya(t);
    return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? $h.has(e) && !i.values.length || $h.has(t) && !s.values.length ? II(e, t) : ja(EC(VI(s, i), i.values), n) : Wu(e, t)
};

function TC(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Ke(e, t, n) : lm(e)(e, t)
}
const zI = 5;

function kC(e, t, n) {
    const s = Math.max(t - zI, 0);
    return Z1(n - e(s), t - s)
}
const Xe = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    $f = .001;

function $I({
    duration: e = Xe.duration,
    bounce: t = Xe.bounce,
    velocity: n = Xe.velocity,
    mass: s = Xe.mass
}) {
    let i, l, u = 1 - t;
    u = lr(Xe.minDamping, Xe.maxDamping, u), e = lr(Xe.minDuration, Xe.maxDuration, or(e)), u < 1 ? (i = h => {
        const m = h * u,
            y = m * e,
            w = m - n,
            C = Wh(h, u),
            b = Math.exp(-y);
        return $f - w / C * b
    }, l = h => {
        const y = h * u * e,
            w = y * n + n,
            C = Math.pow(u, 2) * Math.pow(h, 2) * e,
            b = Math.exp(-y),
            v = Wh(Math.pow(h, 2), u);
        return (-i(h) + $f > 0 ? -1 : 1) * ((w - C) * b) / v
    }) : (i = h => {
        const m = Math.exp(-h * e),
            y = (h - n) * e + 1;
        return -$f + m * y
    }, l = h => {
        const m = Math.exp(-h * e),
            y = (n - h) * (e * e);
        return m * y
    });
    const c = 5 / e,
        f = HI(i, l, c);
    if (e = sr(e), isNaN(f)) return {
        stiffness: Xe.stiffness,
        damping: Xe.damping,
        duration: e
    }; {
        const h = Math.pow(f, 2) * s;
        return {
            stiffness: h,
            damping: u * 2 * Math.sqrt(s * h),
            duration: e
        }
    }
}
const WI = 12;

function HI(e, t, n) {
    let s = n;
    for (let i = 1; i < WI; i++) s = s - e(s) / t(s);
    return s
}

function Wh(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const qI = ["duration", "bounce"],
    KI = ["stiffness", "damping", "mass"];

function mw(e, t) {
    return t.some(n => e[n] !== void 0)
}

function GI(e) {
    let t = {
        velocity: Xe.velocity,
        stiffness: Xe.stiffness,
        damping: Xe.damping,
        mass: Xe.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!mw(e, KI) && mw(e, qI))
        if (e.visualDuration) {
            const n = e.visualDuration,
                s = 2 * Math.PI / (n * 1.2),
                i = s * s,
                l = 2 * lr(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = { ...t,
                mass: Xe.mass,
                stiffness: i,
                damping: l
            }
        } else {
            const n = $I(e);
            t = { ...t,
                ...n,
                mass: Xe.mass
            }, t.isResolvedFromDuration = !0
        }
    return t
}

function RC(e = Xe.visualDuration, t = Xe.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {
        restSpeed: s,
        restDelta: i
    } = n;
    const l = n.keyframes[0],
        u = n.keyframes[n.keyframes.length - 1],
        c = {
            done: !1,
            value: l
        },
        {
            stiffness: f,
            damping: h,
            mass: m,
            duration: y,
            velocity: w,
            isResolvedFromDuration: C
        } = GI({ ...n,
            velocity: -or(n.velocity || 0)
        }),
        b = w || 0,
        v = h / (2 * Math.sqrt(f * m)),
        S = u - l,
        k = or(Math.sqrt(f / m)),
        P = Math.abs(S) < 5;
    s || (s = P ? Xe.restSpeed.granular : Xe.restSpeed.default), i || (i = P ? Xe.restDelta.granular : Xe.restDelta.default);
    let R;
    if (v < 1) {
        const N = Wh(k, v);
        R = B => {
            const U = Math.exp(-v * k * B);
            return u - U * ((b + v * k * S) / N * Math.sin(N * B) + S * Math.cos(N * B))
        }
    } else if (v === 1) R = N => u - Math.exp(-k * N) * (S + (b + k * S) * N);
    else {
        const N = k * Math.sqrt(v * v - 1);
        R = B => {
            const U = Math.exp(-v * k * B),
                j = Math.min(N * B, 300);
            return u - U * ((b + v * k * S) * Math.sinh(j) + N * S * Math.cosh(j)) / N
        }
    }
    const _ = {
        calculatedDuration: C && y || null,
        next: N => {
            const B = R(N);
            if (C) c.done = N >= y;
            else {
                let U = 0;
                v < 1 && (U = N === 0 ? sr(b) : kC(R, N, B));
                const j = Math.abs(U) <= s,
                    G = Math.abs(u - B) <= i;
                c.done = j && G
            }
            return c.value = c.done ? u : B, c
        },
        toString: () => {
            const N = Math.min(H1(_), jh),
                B = q1(U => _.next(N * U).value, N, 30);
            return N + "ms " + B
        }
    };
    return _
}

function gw({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: s = 325,
    bounceDamping: i = 10,
    bounceStiffness: l = 500,
    modifyTarget: u,
    min: c,
    max: f,
    restDelta: h = .5,
    restSpeed: m
}) {
    const y = e[0],
        w = {
            done: !1,
            value: y
        },
        C = j => c !== void 0 && j < c || f !== void 0 && j > f,
        b = j => c === void 0 ? f : f === void 0 || Math.abs(c - j) < Math.abs(f - j) ? c : f;
    let v = n * t;
    const S = y + v,
        k = u === void 0 ? S : u(S);
    k !== S && (v = k - y);
    const P = j => -v * Math.exp(-j / s),
        R = j => k + P(j),
        _ = j => {
            const G = P(j),
                J = R(j);
            w.done = Math.abs(G) <= h, w.value = w.done ? k : J
        };
    let N, B;
    const U = j => {
        C(w.value) && (N = j, B = RC({
            keyframes: [w.value, b(w.value)],
            velocity: kC(R, j, w.value),
            damping: i,
            stiffness: l,
            restDelta: h,
            restSpeed: m
        }))
    };
    return U(0), {
        calculatedDuration: null,
        next: j => {
            let G = !1;
            return !B && N === void 0 && (G = !0, _(j), U(j)), N !== void 0 && j >= N ? B.next(j - N) : (!G && _(j), w)
        }
    }
}
const QI = Da(.42, 0, 1, 1),
    YI = Da(0, 0, .58, 1),
    PC = Da(.42, 0, .58, 1),
    XI = e => Array.isArray(e) && typeof e[0] != "number",
    JI = {
        linear: Xt,
        easeIn: QI,
        easeInOut: PC,
        easeOut: YI,
        circIn: rm,
        circInOut: lC,
        circOut: aC,
        backIn: nm,
        backInOut: oC,
        backOut: sC,
        anticipate: iC
    },
    yw = e => {
        if (Xp(e)) {
            T1(e.length === 4);
            const [t, n, s, i] = e;
            return Da(t, n, s, i)
        } else if (typeof e == "string") return JI[e];
        return e
    };

function ZI(e, t, n) {
    const s = [],
        i = n || TC,
        l = e.length - 1;
    for (let u = 0; u < l; u++) {
        let c = i(e[u], e[u + 1]);
        if (t) {
            const f = Array.isArray(t) ? t[u] || Xt : t;
            c = ja(f, c)
        }
        s.push(c)
    }
    return s
}

function eF(e, t, {
    clamp: n = !0,
    ease: s,
    mixer: i
} = {}) {
    const l = e.length;
    if (T1(l === t.length), l === 1) return () => t[0];
    if (l === 2 && t[0] === t[1]) return () => t[1];
    const u = e[0] === e[1];
    e[0] > e[l - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const c = ZI(t, s, i),
        f = c.length,
        h = m => {
            if (u && m < e[0]) return t[0];
            let y = 0;
            if (f > 1)
                for (; y < e.length - 2 && !(m < e[y + 1]); y++);
            const w = $o(e[y], e[y + 1], m);
            return c[y](w)
        };
    return n ? m => h(lr(e[0], e[l - 1], m)) : h
}

function tF(e, t) {
    const n = e[e.length - 1];
    for (let s = 1; s <= t; s++) {
        const i = $o(0, t, s);
        e.push(Ke(n, 1, i))
    }
}

function nF(e) {
    const t = [0];
    return tF(t, e.length - 1), t
}

function rF(e, t) {
    return e.map(n => n * t)
}

function sF(e, t) {
    return e.map(() => t || PC).splice(0, e.length - 1)
}

function Hu({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: s = "easeInOut"
}) {
    const i = XI(s) ? s.map(yw) : yw(s),
        l = {
            done: !1,
            value: t[0]
        },
        u = rF(n && n.length === t.length ? n : nF(t), e),
        c = eF(u, t, {
            ease: Array.isArray(i) ? i : sF(t, i)
        });
    return {
        calculatedDuration: e,
        next: f => (l.value = c(f), l.done = f >= e, l)
    }
}
const oF = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: () => $e.update(t, !0),
            stop: () => Xr(t),
            now: () => vt.isProcessing ? vt.timestamp : Vn.now()
        }
    },
    iF = {
        decay: gw,
        inertia: gw,
        tween: Hu,
        keyframes: Hu,
        spring: RC
    },
    aF = e => e / 100;
class um extends CC {
    constructor(t) {
        super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: f
            } = this.options;
            f && f()
        };
        const {
            name: n,
            motionValue: s,
            element: i,
            keyframes: l
        } = this.options, u = (i == null ? void 0 : i.KeyframeResolver) || am, c = (f, h) => this.onKeyframesResolved(f, h);
        this.resolver = new u(l, c, n, s, i), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {
            type: n = "keyframes",
            repeat: s = 0,
            repeatDelay: i = 0,
            repeatType: l,
            velocity: u = 0
        } = this.options, c = Yp(n) ? n : iF[n] || Hu;
        let f, h;
        c !== Hu && typeof t[0] != "number" && (f = ja(aF, TC(t[0], t[1])), t = [0, 100]);
        const m = c({ ...this.options,
            keyframes: t
        });
        l === "mirror" && (h = c({ ...this.options,
            keyframes: [...t].reverse(),
            velocity: -u
        })), m.calculatedDuration === null && (m.calculatedDuration = H1(m));
        const {
            calculatedDuration: y
        } = m, w = y + i, C = w * (s + 1) - i;
        return {
            generator: m,
            mirroredGenerator: h,
            mapPercentToKeyframes: f,
            calculatedDuration: y,
            resolvedDuration: w,
            totalDuration: C
        }
    }
    onPostResolved() {
        const {
            autoplay: t = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n = !1) {
        const {
            resolved: s
        } = this;
        if (!s) {
            const {
                keyframes: j
            } = this.options;
            return {
                done: !0,
                value: j[j.length - 1]
            }
        }
        const {
            finalKeyframe: i,
            generator: l,
            mirroredGenerator: u,
            mapPercentToKeyframes: c,
            keyframes: f,
            calculatedDuration: h,
            totalDuration: m,
            resolvedDuration: y
        } = s;
        if (this.startTime === null) return l.next(0);
        const {
            delay: w,
            repeat: C,
            repeatType: b,
            repeatDelay: v,
            onUpdate: S
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - m / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const k = this.currentTime - w * (this.speed >= 0 ? 1 : -1),
            P = this.speed >= 0 ? k < 0 : k > m;
        this.currentTime = Math.max(k, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = m);
        let R = this.currentTime,
            _ = l;
        if (C) {
            const j = Math.min(this.currentTime, m) / y;
            let G = Math.floor(j),
                J = j % 1;
            !J && j >= 1 && (J = 1), J === 1 && G--, G = Math.min(G, C + 1), !!(G % 2) && (b === "reverse" ? (J = 1 - J, v && (J -= v / y)) : b === "mirror" && (_ = u)), R = lr(0, 1, J) * y
        }
        const N = P ? {
            done: !1,
            value: f[0]
        } : _.next(R);
        c && (N.value = c(N.value));
        let {
            done: B
        } = N;
        !P && h !== null && (B = this.speed >= 0 ? this.currentTime >= m : this.currentTime <= 0);
        const U = this.holdTime === null && (this.state === "finished" || this.state === "running" && B);
        return U && i !== void 0 && (N.value = gc(f, this.options, i)), S && S(N.value), U && this.finish(), N
    }
    get duration() {
        const {
            resolved: t
        } = this;
        return t ? or(t.calculatedDuration) : 0
    }
    get time() {
        return or(this.currentTime)
    }
    set time(t) {
        t = sr(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t, n && (this.time = or(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: t = oF,
            onPlay: n,
            startTime: s
        } = this.options;
        this.driver || (this.driver = t(l => this.tick(l))), n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = s ? ? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: t
        } = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
}
const lF = new Set(["opacity", "clipPath", "filter", "transform"]);

function uF(e, t, n, {
    delay: s = 0,
    duration: i = 300,
    repeat: l = 0,
    repeatType: u = "loop",
    ease: c = "easeInOut",
    times: f
} = {}) {
    const h = {
        [t]: n
    };
    f && (h.offset = f);
    const m = G1(c, i);
    return Array.isArray(m) && (h.easing = m), e.animate(h, {
        delay: s,
        duration: i,
        easing: Array.isArray(m) ? "linear" : m,
        fill: "both",
        iterations: l + 1,
        direction: u === "reverse" ? "alternate" : "normal"
    })
}
const cF = Dp(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    qu = 10,
    dF = 2e4;

function fF(e) {
    return Yp(e.type) || e.type === "spring" || !K1(e.ease)
}

function hF(e, t) {
    const n = new um({ ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let s = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let l = 0;
    for (; !s.done && l < dF;) s = n.sample(l), i.push(s.value), l += qu;
    return {
        times: void 0,
        keyframes: i,
        duration: l - qu,
        ease: "linear"
    }
}
const AC = {
    anticipate: iC,
    backInOut: oC,
    circInOut: lC
};

function pF(e) {
    return e in AC
}
class vw extends CC {
    constructor(t) {
        super(t);
        const {
            name: n,
            motionValue: s,
            element: i,
            keyframes: l
        } = this.options;
        this.resolver = new bC(l, (u, c) => this.onKeyframesResolved(u, c), n, s, i), this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        let {
            duration: s = 300,
            times: i,
            ease: l,
            type: u,
            motionValue: c,
            name: f,
            startTime: h
        } = this.options;
        if (!c.owner || !c.owner.current) return !1;
        if (typeof l == "string" && $u() && pF(l) && (l = AC[l]), fF(this.options)) {
            const {
                onComplete: y,
                onUpdate: w,
                motionValue: C,
                element: b,
                ...v
            } = this.options, S = hF(t, v);
            t = S.keyframes, t.length === 1 && (t[1] = t[0]), s = S.duration, i = S.times, l = S.ease, u = "keyframes"
        }
        const m = uF(c.owner.current, f, t, { ...this.options,
            duration: s,
            times: i,
            ease: l
        });
        return m.startTime = h ? ? this.calcStartTime(), this.pendingTimeline ? (nw(m, this.pendingTimeline), this.pendingTimeline = void 0) : m.onfinish = () => {
            const {
                onComplete: y
            } = this.options;
            c.set(gc(t, this.options, n)), y && y(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: m,
            duration: s,
            times: i,
            type: u,
            ease: l,
            keyframes: t
        }
    }
    get duration() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            duration: n
        } = t;
        return or(n)
    }
    get time() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            animation: n
        } = t;
        return or(n.currentTime || 0)
    }
    set time(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: s
        } = n;
        s.currentTime = sr(t)
    }
    get speed() {
        const {
            resolved: t
        } = this;
        if (!t) return 1;
        const {
            animation: n
        } = t;
        return n.playbackRate
    }
    set speed(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: s
        } = n;
        s.playbackRate = t
    }
    get state() {
        const {
            resolved: t
        } = this;
        if (!t) return "idle";
        const {
            animation: n
        } = t;
        return n.playState
    }
    get startTime() {
        const {
            resolved: t
        } = this;
        if (!t) return null;
        const {
            animation: n
        } = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved) this.pendingTimeline = t;
        else {
            const {
                resolved: n
            } = this;
            if (!n) return Xt;
            const {
                animation: s
            } = n;
            nw(s, t)
        }
        return Xt
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.playState === "finished" && this.updateFinishedPromise(), n.play()
    }
    pause() {
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n,
            keyframes: s,
            duration: i,
            type: l,
            ease: u,
            times: c
        } = t;
        if (n.playState === "idle" || n.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: h,
                onUpdate: m,
                onComplete: y,
                element: w,
                ...C
            } = this.options, b = new um({ ...C,
                keyframes: s,
                duration: i,
                type: l,
                ease: u,
                times: c,
                isGenerator: !0
            }), v = sr(this.time);
            h.setWithVelocity(b.sample(v - qu).value, b.sample(v).value, qu)
        }
        const {
            onStop: f
        } = this.options;
        f && f(), this.cancel()
    }
    complete() {
        const {
            resolved: t
        } = this;
        t && t.animation.finish()
    }
    cancel() {
        const {
            resolved: t
        } = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {
            motionValue: n,
            name: s,
            repeatDelay: i,
            repeatType: l,
            damping: u,
            type: c
        } = t;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
        const {
            onUpdate: f,
            transformTemplate: h
        } = n.owner.getProps();
        return cF() && s && lF.has(s) && !f && !h && !i && l !== "mirror" && u !== 0 && c !== "inertia"
    }
}
const mF = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    gF = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    yF = {
        type: "keyframes",
        duration: .8
    },
    vF = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    wF = (e, {
        keyframes: t
    }) => t.length > 2 ? yF : Hs.has(e) ? e.startsWith("scale") ? gF(t[1]) : mF : vF;

function xF({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: s,
    staggerDirection: i,
    repeat: l,
    repeatType: u,
    repeatDelay: c,
    from: f,
    elapsed: h,
    ...m
}) {
    return !!Object.keys(m).length
}
const cm = (e, t, n, s = {}, i, l) => u => {
    const c = Qp(s, e) || {},
        f = c.delay || s.delay || 0;
    let {
        elapsed: h = 0
    } = s;
    h = h - sr(f);
    let m = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...c,
        delay: -h,
        onUpdate: w => {
            t.set(w), c.onUpdate && c.onUpdate(w)
        },
        onComplete: () => {
            u(), c.onComplete && c.onComplete()
        },
        name: e,
        motionValue: t,
        element: l ? void 0 : i
    };
    xF(c) || (m = { ...m,
        ...wF(e, m)
    }), m.duration && (m.duration = sr(m.duration)), m.repeatDelay && (m.repeatDelay = sr(m.repeatDelay)), m.from !== void 0 && (m.keyframes[0] = m.from);
    let y = !1;
    if ((m.type === !1 || m.duration === 0 && !m.repeatDelay) && (m.duration = 0, m.delay === 0 && (y = !0)), y && !l && t.get() !== void 0) {
        const w = gc(m.keyframes, c);
        if (w !== void 0) return $e.update(() => {
            m.onUpdate(w), m.onComplete()
        }), new Bj([])
    }
    return !l && vw.supports(m) ? new vw(m) : new um(m)
};

function SF({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const s = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, s
}

function _C(e, t, {
    delay: n = 0,
    transitionOverride: s,
    type: i
} = {}) {
    var l;
    let {
        transition: u = e.getDefaultTransition(),
        transitionEnd: c,
        ...f
    } = t;
    s && (u = s);
    const h = [],
        m = i && e.animationState && e.animationState.getState()[i];
    for (const y in f) {
        const w = e.getValue(y, (l = e.latestValues[y]) !== null && l !== void 0 ? l : null),
            C = f[y];
        if (C === void 0 || m && SF(m, y)) continue;
        const b = {
            delay: n,
            ...Qp(u || {}, y)
        };
        let v = !1;
        if (window.MotionHandoffAnimation) {
            const k = eC(e);
            if (k) {
                const P = window.MotionHandoffAnimation(k, y, $e);
                P !== null && (b.startTime = P, v = !0)
            }
        }
        Fh(e, y), w.start(cm(y, w, C, e.shouldReduceMotion && J1.has(y) ? {
            type: !1
        } : b, e, v));
        const S = w.animation;
        S && h.push(S)
    }
    return c && Promise.all(h).then(() => {
        $e.update(() => {
            c && Zj(e, c)
        })
    }), h
}

function Hh(e, t, n = {}) {
    var s;
    const i = mc(e, t, n.type === "exit" ? (s = e.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
    let {
        transition: l = e.getDefaultTransition() || {}
    } = i || {};
    n.transitionOverride && (l = n.transitionOverride);
    const u = i ? () => Promise.all(_C(e, i, n)) : () => Promise.resolve(),
        c = e.variantChildren && e.variantChildren.size ? (h = 0) => {
            const {
                delayChildren: m = 0,
                staggerChildren: y,
                staggerDirection: w
            } = l;
            return bF(e, t, m + h, y, w, n)
        } : () => Promise.resolve(),
        {
            when: f
        } = l;
    if (f) {
        const [h, m] = f === "beforeChildren" ? [u, c] : [c, u];
        return h().then(() => m())
    } else return Promise.all([u(), c(n.delay)])
}

function bF(e, t, n = 0, s = 0, i = 1, l) {
    const u = [],
        c = (e.variantChildren.size - 1) * s,
        f = i === 1 ? (h = 0) => h * s : (h = 0) => c - h * s;
    return Array.from(e.variantChildren).sort(CF).forEach((h, m) => {
        h.notify("AnimationStart", t), u.push(Hh(h, t, { ...l,
            delay: n + f(m)
        }).then(() => h.notify("AnimationComplete", t)))
    }), Promise.all(u)
}

function CF(e, t) {
    return e.sortNodePosition(t)
}

function EF(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let s;
    if (Array.isArray(t)) {
        const i = t.map(l => Hh(e, l, n));
        s = Promise.all(i)
    } else if (typeof t == "string") s = Hh(e, t, n);
    else {
        const i = typeof t == "function" ? mc(e, t, n.custom) : t;
        s = Promise.all(_C(e, i, n))
    }
    return s.then(() => {
        e.notify("AnimationComplete", t)
    })
}
const TF = Ip.length;

function OC(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const n = e.parent ? OC(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n
    }
    const t = {};
    for (let n = 0; n < TF; n++) {
        const s = Ip[n],
            i = e.props[s];
        (pa(i) || i === !1) && (t[s] = i)
    }
    return t
}
const kF = [...jp].reverse(),
    RF = jp.length;

function PF(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: s
    }) => EF(e, n, s)))
}

function AF(e) {
    let t = PF(e),
        n = ww(),
        s = !0;
    const i = f => (h, m) => {
        var y;
        const w = mc(e, m, f === "exit" ? (y = e.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (w) {
            const {
                transition: C,
                transitionEnd: b,
                ...v
            } = w;
            h = { ...h,
                ...v,
                ...b
            }
        }
        return h
    };

    function l(f) {
        t = f(e)
    }

    function u(f) {
        const {
            props: h
        } = e, m = OC(e.parent) || {}, y = [], w = new Set;
        let C = {},
            b = 1 / 0;
        for (let S = 0; S < RF; S++) {
            const k = kF[S],
                P = n[k],
                R = h[k] !== void 0 ? h[k] : m[k],
                _ = pa(R),
                N = k === f ? P.isActive : null;
            N === !1 && (b = S);
            let B = R === m[k] && R !== h[k] && _;
            if (B && s && e.manuallyAnimateOnMount && (B = !1), P.protectedKeys = { ...C
                }, !P.isActive && N === null || !R && !P.prevProp || hc(R) || typeof R == "boolean") continue;
            const U = _F(P.prevProp, R);
            let j = U || k === f && P.isActive && !B && _ || S > b && _,
                G = !1;
            const J = Array.isArray(R) ? R : [R];
            let ee = J.reduce(i(k), {});
            N === !1 && (ee = {});
            const {
                prevResolvedValues: de = {}
            } = P, ge = { ...de,
                ...ee
            }, le = Z => {
                j = !0, w.has(Z) && (G = !0, w.delete(Z)), P.needsAnimating[Z] = !0;
                const $ = e.getValue(Z);
                $ && ($.liveStyle = !1)
            };
            for (const Z in ge) {
                const $ = ee[Z],
                    X = de[Z];
                if (C.hasOwnProperty(Z)) continue;
                let W = !1;
                Dh($) && Dh(X) ? W = !W1($, X) : W = $ !== X, W ? $ != null ? le(Z) : w.add(Z) : $ !== void 0 && w.has(Z) ? le(Z) : P.protectedKeys[Z] = !0
            }
            P.prevProp = R, P.prevResolvedValues = ee, P.isActive && (C = { ...C,
                ...ee
            }), s && e.blockInitialAnimation && (j = !1), j && (!(B && U) || G) && y.push(...J.map(Z => ({
                animation: Z,
                options: {
                    type: k
                }
            })))
        }
        if (w.size) {
            const S = {};
            w.forEach(k => {
                const P = e.getBaseTarget(k),
                    R = e.getValue(k);
                R && (R.liveStyle = !0), S[k] = P ? ? null
            }), y.push({
                animation: S
            })
        }
        let v = !!y.length;
        return s && (h.initial === !1 || h.initial === h.animate) && !e.manuallyAnimateOnMount && (v = !1), s = !1, v ? t(y) : Promise.resolve()
    }

    function c(f, h) {
        var m;
        if (n[f].isActive === h) return Promise.resolve();
        (m = e.variantChildren) === null || m === void 0 || m.forEach(w => {
            var C;
            return (C = w.animationState) === null || C === void 0 ? void 0 : C.setActive(f, h)
        }), n[f].isActive = h;
        const y = u(f);
        for (const w in n) n[w].protectedKeys = {};
        return y
    }
    return {
        animateChanges: u,
        setActive: c,
        setAnimateFunction: l,
        getState: () => n,
        reset: () => {
            n = ww(), s = !0
        }
    }
}

function _F(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !W1(t, e) : !1
}

function vs(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function ww() {
    return {
        animate: vs(!0),
        whileInView: vs(),
        whileHover: vs(),
        whileTap: vs(),
        whileDrag: vs(),
        whileFocus: vs(),
        exit: vs()
    }
}
class rs {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}
class OF extends rs {
    constructor(t) {
        super(t), t.animationState || (t.animationState = AF(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        hc(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let NF = 0;
class MF extends rs {
    constructor() {
        super(...arguments), this.id = NF++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: s
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === s) return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(() => n(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const LF = {
    animation: {
        Feature: OF
    },
    exit: {
        Feature: MF
    }
};

function va(e, t, n, s = {
    passive: !0
}) {
    return e.addEventListener(t, n, s), () => e.removeEventListener(t, n)
}

function Ia(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const DF = e => t => Jp(t) && e(t, Ia(t));

function sa(e, t, n, s) {
    return va(e, t, DF(n), s)
}
const xw = (e, t) => Math.abs(e - t);

function jF(e, t) {
    const n = xw(e.x, t.x),
        s = xw(e.y, t.y);
    return Math.sqrt(n ** 2 + s ** 2)
}
class NC {
    constructor(t, n, {
        transformPagePoint: s,
        contextWindow: i,
        dragSnapToOrigin: l = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const y = Hf(this.lastMoveEventInfo, this.history),
                    w = this.startEvent !== null,
                    C = jF(y.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!w && !C) return;
                const {
                    point: b
                } = y, {
                    timestamp: v
                } = vt;
                this.history.push({ ...b,
                    timestamp: v
                });
                const {
                    onStart: S,
                    onMove: k
                } = this.handlers;
                w || (S && S(this.lastMoveEvent, y), this.startEvent = this.lastMoveEvent), k && k(this.lastMoveEvent, y)
            }, this.handlePointerMove = (y, w) => {
                this.lastMoveEvent = y, this.lastMoveEventInfo = Wf(w, this.transformPagePoint), $e.update(this.updatePoint, !0)
            }, this.handlePointerUp = (y, w) => {
                this.end();
                const {
                    onEnd: C,
                    onSessionEnd: b,
                    resumeAnimation: v
                } = this.handlers;
                if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const S = Hf(y.type === "pointercancel" ? this.lastMoveEventInfo : Wf(w, this.transformPagePoint), this.history);
                this.startEvent && C && C(y, S), b && b(y, S)
            }, !Jp(t)) return;
        this.dragSnapToOrigin = l, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
        const u = Ia(t),
            c = Wf(u, this.transformPagePoint),
            {
                point: f
            } = c,
            {
                timestamp: h
            } = vt;
        this.history = [{ ...f,
            timestamp: h
        }];
        const {
            onSessionStart: m
        } = n;
        m && m(t, Hf(c, this.history)), this.removeListeners = ja(sa(this.contextWindow, "pointermove", this.handlePointerMove), sa(this.contextWindow, "pointerup", this.handlePointerUp), sa(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), Xr(this.updatePoint)
    }
}

function Wf(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function Sw(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Hf({
    point: e
}, t) {
    return {
        point: e,
        delta: Sw(e, MC(t)),
        offset: Sw(e, IF(t)),
        velocity: FF(t, .1)
    }
}

function IF(e) {
    return e[0]
}

function MC(e) {
    return e[e.length - 1]
}

function FF(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        s = null;
    const i = MC(e);
    for (; n >= 0 && (s = e[n], !(i.timestamp - s.timestamp > sr(t)));) n--;
    if (!s) return {
        x: 0,
        y: 0
    };
    const l = or(i.timestamp - s.timestamp);
    if (l === 0) return {
        x: 0,
        y: 0
    };
    const u = {
        x: (i.x - s.x) / l,
        y: (i.y - s.y) / l
    };
    return u.x === 1 / 0 && (u.x = 0), u.y === 1 / 0 && (u.y = 0), u
}
const LC = 1e-4,
    BF = 1 - LC,
    VF = 1 + LC,
    DC = .01,
    UF = 0 - DC,
    zF = 0 + DC;

function Jt(e) {
    return e.max - e.min
}

function $F(e, t, n) {
    return Math.abs(e - t) <= n
}

function bw(e, t, n, s = .5) {
    e.origin = s, e.originPoint = Ke(t.min, t.max, e.origin), e.scale = Jt(n) / Jt(t), e.translate = Ke(n.min, n.max, e.origin) - e.originPoint, (e.scale >= BF && e.scale <= VF || isNaN(e.scale)) && (e.scale = 1), (e.translate >= UF && e.translate <= zF || isNaN(e.translate)) && (e.translate = 0)
}

function oa(e, t, n, s) {
    bw(e.x, t.x, n.x, s ? s.originX : void 0), bw(e.y, t.y, n.y, s ? s.originY : void 0)
}

function Cw(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Jt(t)
}

function WF(e, t, n) {
    Cw(e.x, t.x, n.x), Cw(e.y, t.y, n.y)
}

function Ew(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Jt(t)
}

function ia(e, t, n) {
    Ew(e.x, t.x, n.x), Ew(e.y, t.y, n.y)
}

function HF(e, {
    min: t,
    max: n
}, s) {
    return t !== void 0 && e < t ? e = s ? Ke(t, e, s.min) : Math.max(e, t) : n !== void 0 && e > n && (e = s ? Ke(n, e, s.max) : Math.min(e, n)), e
}

function Tw(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function qF(e, {
    top: t,
    left: n,
    bottom: s,
    right: i
}) {
    return {
        x: Tw(e.x, n, i),
        y: Tw(e.y, t, s)
    }
}

function kw(e, t) {
    let n = t.min - e.min,
        s = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, s] = [s, n]), {
        min: n,
        max: s
    }
}

function KF(e, t) {
    return {
        x: kw(e.x, t.x),
        y: kw(e.y, t.y)
    }
}

function GF(e, t) {
    let n = .5;
    const s = Jt(e),
        i = Jt(t);
    return i > s ? n = $o(t.min, t.max - s, e.min) : s > i && (n = $o(e.min, e.max - i, t.min)), lr(0, 1, n)
}

function QF(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const qh = .35;

function YF(e = qh) {
    return e === !1 ? e = 0 : e === !0 && (e = qh), {
        x: Rw(e, "left", "right"),
        y: Rw(e, "top", "bottom")
    }
}

function Rw(e, t, n) {
    return {
        min: Pw(e, t),
        max: Pw(e, n)
    }
}

function Pw(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Aw = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Eo = () => ({
        x: Aw(),
        y: Aw()
    }),
    _w = () => ({
        min: 0,
        max: 0
    }),
    et = () => ({
        x: _w(),
        y: _w()
    });

function ln(e) {
    return [e("x"), e("y")]
}

function jC({
    top: e,
    left: t,
    right: n,
    bottom: s
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: s
        }
    }
}

function XF({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function JF(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        s = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: s.y,
        right: s.x
    }
}

function qf(e) {
    return e === void 0 || e === 1
}

function Kh({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !qf(e) || !qf(t) || !qf(n)
}

function xs(e) {
    return Kh(e) || IC(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function IC(e) {
    return Ow(e.x) || Ow(e.y)
}

function Ow(e) {
    return e && e !== "0%"
}

function Ku(e, t, n) {
    const s = e - n,
        i = t * s;
    return n + i
}

function Nw(e, t, n, s, i) {
    return i !== void 0 && (e = Ku(e, i, s)), Ku(e, n, s) + t
}

function Gh(e, t = 0, n = 1, s, i) {
    e.min = Nw(e.min, t, n, s, i), e.max = Nw(e.max, t, n, s, i)
}

function FC(e, {
    x: t,
    y: n
}) {
    Gh(e.x, t.translate, t.scale, t.originPoint), Gh(e.y, n.translate, n.scale, n.originPoint)
}
const Mw = .999999999999,
    Lw = 1.0000000000001;

function ZF(e, t, n, s = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let l, u;
    for (let c = 0; c < i; c++) {
        l = n[c], u = l.projectionDelta;
        const {
            visualElement: f
        } = l.options;
        f && f.props.style && f.props.style.display === "contents" || (s && l.options.layoutScroll && l.scroll && l !== l.root && ko(e, {
            x: -l.scroll.offset.x,
            y: -l.scroll.offset.y
        }), u && (t.x *= u.x.scale, t.y *= u.y.scale, FC(e, u)), s && xs(l.latestValues) && ko(e, l.latestValues))
    }
    t.x < Lw && t.x > Mw && (t.x = 1), t.y < Lw && t.y > Mw && (t.y = 1)
}

function To(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function Dw(e, t, n, s, i = .5) {
    const l = Ke(e.min, e.max, i);
    Gh(e, t, n, l, s)
}

function ko(e, t) {
    Dw(e.x, t.x, t.scaleX, t.scale, t.originX), Dw(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function BC(e, t) {
    return jC(JF(e.getBoundingClientRect(), t))
}

function eB(e, t, n) {
    const s = BC(e, n),
        {
            scroll: i
        } = t;
    return i && (To(s.x, i.offset.x), To(s.y, i.offset.y)), s
}
const VC = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    tB = new WeakMap;
class nB {
    constructor(t) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = et(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: s
        } = this.visualElement;
        if (s && s.isPresent === !1) return;
        const i = m => {
                const {
                    dragSnapToOrigin: y
                } = this.getProps();
                y ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ia(m).point)
            },
            l = (m, y) => {
                const {
                    drag: w,
                    dragPropagation: C,
                    onDragStart: b
                } = this.getProps();
                if (w && !C && (this.openDragLock && this.openDragLock(), this.openDragLock = Gj(w), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ln(S => {
                    let k = this.getAxisMotionValue(S).get() || 0;
                    if (Bn.test(k)) {
                        const {
                            projection: P
                        } = this.visualElement;
                        if (P && P.layout) {
                            const R = P.layout.layoutBox[S];
                            R && (k = Jt(R) * (parseFloat(k) / 100))
                        }
                    }
                    this.originPoint[S] = k
                }), b && $e.postRender(() => b(m, y)), Fh(this.visualElement, "transform");
                const {
                    animationState: v
                } = this.visualElement;
                v && v.setActive("whileDrag", !0)
            },
            u = (m, y) => {
                const {
                    dragPropagation: w,
                    dragDirectionLock: C,
                    onDirectionLock: b,
                    onDrag: v
                } = this.getProps();
                if (!w && !this.openDragLock) return;
                const {
                    offset: S
                } = y;
                if (C && this.currentDirection === null) {
                    this.currentDirection = rB(S), this.currentDirection !== null && b && b(this.currentDirection);
                    return
                }
                this.updateAxis("x", y.point, S), this.updateAxis("y", y.point, S), this.visualElement.render(), v && v(m, y)
            },
            c = (m, y) => this.stop(m, y),
            f = () => ln(m => {
                var y;
                return this.getAnimationState(m) === "paused" && ((y = this.getAxisMotionValue(m).animation) === null || y === void 0 ? void 0 : y.play())
            }),
            {
                dragSnapToOrigin: h
            } = this.getProps();
        this.panSession = new NC(t, {
            onSessionStart: i,
            onStart: l,
            onMove: u,
            onSessionEnd: c,
            resumeAnimation: f
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: h,
            contextWindow: VC(this.visualElement)
        })
    }
    stop(t, n) {
        const s = this.isDragging;
        if (this.cancel(), !s) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: l
        } = this.getProps();
        l && $e.postRender(() => l(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: s
        } = this.getProps();
        !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, s) {
        const {
            drag: i
        } = this.getProps();
        if (!s || !cu(t, i, this.currentDirection)) return;
        const l = this.getAxisMotionValue(t);
        let u = this.originPoint[t] + s[t];
        this.constraints && this.constraints[t] && (u = HF(u, this.constraints[t], this.elastic[t])), l.set(u)
    }
    resolveConstraints() {
        var t;
        const {
            dragConstraints: n,
            dragElastic: s
        } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, l = this.constraints;
        n && bo(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = qF(i.layoutBox, n) : this.constraints = !1, this.elastic = YF(s), l !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && ln(u => {
            this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = QF(i.layoutBox[u], this.constraints[u]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !bo(t)) return !1;
        const s = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const l = eB(s, i.root, this.visualElement.getTransformPagePoint());
        let u = KF(i.layout.layoutBox, l);
        if (n) {
            const c = n(XF(u));
            this.hasMutatedConstraints = !!c, c && (u = jC(c))
        }
        return u
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: s,
            dragElastic: i,
            dragTransition: l,
            dragSnapToOrigin: u,
            onDragTransitionEnd: c
        } = this.getProps(), f = this.constraints || {}, h = ln(m => {
            if (!cu(m, n, this.currentDirection)) return;
            let y = f && f[m] || {};
            u && (y = {
                min: 0,
                max: 0
            });
            const w = i ? 200 : 1e6,
                C = i ? 40 : 1e7,
                b = {
                    type: "inertia",
                    velocity: s ? t[m] : 0,
                    bounceStiffness: w,
                    bounceDamping: C,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...l,
                    ...y
                };
            return this.startAxisValueAnimation(m, b)
        });
        return Promise.all(h).then(c)
    }
    startAxisValueAnimation(t, n) {
        const s = this.getAxisMotionValue(t);
        return Fh(this.visualElement, t), s.start(cm(t, s, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        ln(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        ln(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            s = this.visualElement.getProps(),
            i = s[n];
        return i || this.visualElement.getValue(t, (s.initial ? s.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        ln(n => {
            const {
                drag: s
            } = this.getProps();
            if (!cu(n, s, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, l = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: u,
                    max: c
                } = i.layout.layoutBox[n];
                l.set(t[n] - Ke(u, c, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: s
        } = this.visualElement;
        if (!bo(n) || !s || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        ln(u => {
            const c = this.getAxisMotionValue(u);
            if (c && this.constraints !== !1) {
                const f = c.get();
                i[u] = GF({
                    min: f,
                    max: f
                }, this.constraints[u])
            }
        });
        const {
            transformTemplate: l
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = l ? l({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), ln(u => {
            if (!cu(u, t, null)) return;
            const c = this.getAxisMotionValue(u),
                {
                    min: f,
                    max: h
                } = this.constraints[u];
            c.set(Ke(f, h, i[u]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        tB.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = sa(t, "pointerdown", f => {
                const {
                    drag: h,
                    dragListener: m = !0
                } = this.getProps();
                h && m && this.start(f)
            }),
            s = () => {
                const {
                    dragConstraints: f
                } = this.getProps();
                bo(f) && f.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            l = i.addEventListener("measure", s);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), $e.read(s);
        const u = va(window, "resize", () => this.scalePositionWithinConstraints()),
            c = i.addEventListener("didUpdate", (({
                delta: f,
                hasLayoutChanged: h
            }) => {
                this.isDragging && h && (ln(m => {
                    const y = this.getAxisMotionValue(m);
                    y && (this.originPoint[m] += f[m].translate, y.set(y.get() + f[m].translate))
                }), this.visualElement.render())
            }));
        return () => {
            u(), n(), l(), c && c()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: s = !1,
                dragPropagation: i = !1,
                dragConstraints: l = !1,
                dragElastic: u = qh,
                dragMomentum: c = !0
            } = t;
        return { ...t,
            drag: n,
            dragDirectionLock: s,
            dragPropagation: i,
            dragConstraints: l,
            dragElastic: u,
            dragMomentum: c
        }
    }
}

function cu(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function rB(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class sB extends rs {
    constructor(t) {
        super(t), this.removeGroupControls = Xt, this.removeListeners = Xt, this.controls = new nB(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Xt
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const jw = e => (t, n) => {
    e && $e.postRender(() => e(t, n))
};
class oB extends rs {
    constructor() {
        super(...arguments), this.removePointerDownListener = Xt
    }
    onPointerDown(t) {
        this.session = new NC(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: VC(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: s,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: jw(t),
            onStart: jw(n),
            onMove: s,
            onEnd: (l, u) => {
                delete this.session, i && $e.postRender(() => i(l, u))
            }
        }
    }
    mount() {
        this.removePointerDownListener = sa(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const Pu = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function Iw(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Hi = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (Ee.test(e)) e = parseFloat(e);
                else return e;
            const n = Iw(e, t.target.x),
                s = Iw(e, t.target.y);
            return `${n}% ${s}%`
        }
    },
    iB = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const s = e,
                i = Jr.parse(e);
            if (i.length > 5) return s;
            const l = Jr.createTransformer(e),
                u = typeof i[0] != "number" ? 1 : 0,
                c = n.x.scale * t.x,
                f = n.y.scale * t.y;
            i[0 + u] /= c, i[1 + u] /= f;
            const h = Ke(c, f, .5);
            return typeof i[2 + u] == "number" && (i[2 + u] /= h), typeof i[3 + u] == "number" && (i[3 + u] /= h), l(i)
        }
    };
class aB extends x.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: s,
            layoutId: i
        } = this.props, {
            projection: l
        } = t;
        Rj(lB), l && (n.group && n.group.add(l), s && s.register && i && s.register(l), l.root.didUpdate(), l.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), l.setOptions({ ...l.options,
            onExitComplete: () => this.safeToRemove()
        })), Pu.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: s,
            drag: i,
            isPresent: l
        } = this.props, u = s.projection;
        return u && (u.isPresent = l, i || t.layoutDependency !== n || n === void 0 ? u.willUpdate() : this.safeToRemove(), t.isPresent !== l && (l ? u.promote() : u.relegate() || $e.postRender(() => {
            const c = u.getStack();
            (!c || !c.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), Bp.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: s
        } = this.props, {
            projection: i
        } = t;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function UC(e) {
    const [t, n] = C1(), s = x.useContext(Op);
    return T.jsx(aB, { ...e,
        layoutGroup: s,
        switchLayoutGroup: x.useContext(O1),
        isPresent: t,
        safeToRemove: n
    })
}
const lB = {
    borderRadius: { ...Hi,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Hi,
    borderTopRightRadius: Hi,
    borderBottomLeftRadius: Hi,
    borderBottomRightRadius: Hi,
    boxShadow: iB
};

function uB(e, t, n) {
    const s = Pt(e) ? e : ga(e);
    return s.start(cm("", s, t, n)), s.animation
}

function cB(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
const dB = (e, t) => e.depth - t.depth;
class fB {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        Zp(this.children, t), this.isDirty = !0
    }
    remove(t) {
        em(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(dB), this.isDirty = !1, this.children.forEach(t)
    }
}

function hB(e, t) {
    const n = Vn.now(),
        s = ({
            timestamp: i
        }) => {
            const l = i - n;
            l >= t && (Xr(s), e(l - t))
        };
    return $e.read(s, !0), () => Xr(s)
}
const zC = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    pB = zC.length,
    Fw = e => typeof e == "string" ? parseFloat(e) : e,
    Bw = e => typeof e == "number" || Ee.test(e);

function mB(e, t, n, s, i, l) {
    i ? (e.opacity = Ke(0, n.opacity !== void 0 ? n.opacity : 1, gB(s)), e.opacityExit = Ke(t.opacity !== void 0 ? t.opacity : 1, 0, yB(s))) : l && (e.opacity = Ke(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
    for (let u = 0; u < pB; u++) {
        const c = `border${zC[u]}Radius`;
        let f = Vw(t, c),
            h = Vw(n, c);
        if (f === void 0 && h === void 0) continue;
        f || (f = 0), h || (h = 0), f === 0 || h === 0 || Bw(f) === Bw(h) ? (e[c] = Math.max(Ke(Fw(f), Fw(h), s), 0), (Bn.test(h) || Bn.test(f)) && (e[c] += "%")) : e[c] = h
    }(t.rotate || n.rotate) && (e.rotate = Ke(t.rotate || 0, n.rotate || 0, s))
}

function Vw(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const gB = $C(0, .5, aC),
    yB = $C(.5, .95, Xt);

function $C(e, t, n) {
    return s => s < e ? 0 : s > t ? 1 : n($o(e, t, s))
}

function Uw(e, t) {
    e.min = t.min, e.max = t.max
}

function an(e, t) {
    Uw(e.x, t.x), Uw(e.y, t.y)
}

function zw(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function $w(e, t, n, s, i) {
    return e -= t, e = Ku(e, 1 / n, s), i !== void 0 && (e = Ku(e, 1 / i, s)), e
}

function vB(e, t = 0, n = 1, s = .5, i, l = e, u = e) {
    if (Bn.test(t) && (t = parseFloat(t), t = Ke(u.min, u.max, t / 100) - u.min), typeof t != "number") return;
    let c = Ke(l.min, l.max, s);
    e === l && (c -= t), e.min = $w(e.min, t, n, c, i), e.max = $w(e.max, t, n, c, i)
}

function Ww(e, t, [n, s, i], l, u) {
    vB(e, t[n], t[s], t[i], t.scale, l, u)
}
const wB = ["x", "scaleX", "originX"],
    xB = ["y", "scaleY", "originY"];

function Hw(e, t, n, s) {
    Ww(e.x, t, wB, n ? n.x : void 0, s ? s.x : void 0), Ww(e.y, t, xB, n ? n.y : void 0, s ? s.y : void 0)
}

function qw(e) {
    return e.translate === 0 && e.scale === 1
}

function WC(e) {
    return qw(e.x) && qw(e.y)
}

function Kw(e, t) {
    return e.min === t.min && e.max === t.max
}

function SB(e, t) {
    return Kw(e.x, t.x) && Kw(e.y, t.y)
}

function Gw(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function HC(e, t) {
    return Gw(e.x, t.x) && Gw(e.y, t.y)
}

function Qw(e) {
    return Jt(e.x) / Jt(e.y)
}

function Yw(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class bB {
    constructor() {
        this.members = []
    }
    add(t) {
        Zp(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (em(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let s;
        for (let i = n; i >= 0; i--) {
            const l = this.members[i];
            if (l.isPresent !== !1) {
                s = l;
                break
            }
        }
        return s ? (this.promote(s), !0) : !1
    }
    promote(t, n) {
        const s = this.lead;
        if (t !== s && (this.prevLead = s, this.lead = t, t.show(), s)) {
            s.instance && s.scheduleRender(), t.scheduleRender(), t.resumeFrom = s, n && (t.resumeFrom.preserveOpacity = !0), s.snapshot && (t.snapshot = s.snapshot, t.snapshot.latestValues = s.animationValues || s.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: s
            } = t;
            n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function CB(e, t, n) {
    let s = "";
    const i = e.x.translate / t.x,
        l = e.y.translate / t.y,
        u = (n == null ? void 0 : n.z) || 0;
    if ((i || l || u) && (s = `translate3d(${i}px, ${l}px, ${u}px) `), (t.x !== 1 || t.y !== 1) && (s += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            transformPerspective: h,
            rotate: m,
            rotateX: y,
            rotateY: w,
            skewX: C,
            skewY: b
        } = n;
        h && (s = `perspective(${h}px) ${s}`), m && (s += `rotate(${m}deg) `), y && (s += `rotateX(${y}deg) `), w && (s += `rotateY(${w}deg) `), C && (s += `skewX(${C}deg) `), b && (s += `skewY(${b}deg) `)
    }
    const c = e.x.scale * t.x,
        f = e.y.scale * t.y;
    return (c !== 1 || f !== 1) && (s += `scale(${c}, ${f})`), s || "none"
}
const Ss = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    ea = typeof window < "u" && window.MotionDebug !== void 0,
    Kf = ["", "X", "Y", "Z"],
    EB = {
        visibility: "hidden"
    },
    Xw = 1e3;
let TB = 0;

function Gf(e, t, n, s) {
    const {
        latestValues: i
    } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), s && (s[e] = 0))
}

function qC(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: t
    } = e.options;
    if (!t) return;
    const n = eC(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: i,
            layoutId: l
        } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", $e, !(i || l))
    }
    const {
        parent: s
    } = e;
    s && !s.hasCheckedOptimisedAppear && qC(s)
}

function KC({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: s,
    resetTransform: i
}) {
    return class {
        constructor(u = {}, c = t == null ? void 0 : t()) {
            this.id = TB++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, ea && (Ss.totalNodes = Ss.resolvedTargetDeltas = Ss.recalculatedProjection = 0), this.nodes.forEach(PB), this.nodes.forEach(MB), this.nodes.forEach(LB), this.nodes.forEach(AB), ea && window.MotionDebug.record(Ss)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = u, this.root = c ? c.root || c : this, this.path = c ? [...c.path, c] : [], this.parent = c, this.depth = c ? c.depth + 1 : 0;
            for (let f = 0; f < this.path.length; f++) this.path[f].shouldResetTransform = !0;
            this.root === this && (this.nodes = new fB)
        }
        addEventListener(u, c) {
            return this.eventHandlers.has(u) || this.eventHandlers.set(u, new tm), this.eventHandlers.get(u).add(c)
        }
        notifyListeners(u, ...c) {
            const f = this.eventHandlers.get(u);
            f && f.notify(...c)
        }
        hasListeners(u) {
            return this.eventHandlers.has(u)
        }
        mount(u, c = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = cB(u), this.instance = u;
            const {
                layoutId: f,
                layout: h,
                visualElement: m
            } = this.options;
            if (m && !m.current && m.mount(u), this.root.nodes.add(this), this.parent && this.parent.children.add(this), c && (h || f) && (this.isLayoutDirty = !0), e) {
                let y;
                const w = () => this.root.updateBlockedByResize = !1;
                e(u, () => {
                    this.root.updateBlockedByResize = !0, y && y(), y = hB(w, 250), Pu.hasAnimatedSinceResize && (Pu.hasAnimatedSinceResize = !1, this.nodes.forEach(Zw))
                })
            }
            f && this.root.registerSharedNode(f, this), this.options.animate !== !1 && m && (f || h) && this.addEventListener("didUpdate", ({
                delta: y,
                hasLayoutChanged: w,
                hasRelativeTargetChanged: C,
                layout: b
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || m.getDefaultTransition() || BB,
                    {
                        onLayoutAnimationStart: S,
                        onLayoutAnimationComplete: k
                    } = m.getProps(),
                    P = !this.targetLayout || !HC(this.targetLayout, b) || C,
                    R = !w && C;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || R || w && (P || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(y, R);
                    const _ = { ...Qp(v, "layout"),
                        onPlay: S,
                        onComplete: k
                    };
                    (m.shouldReduceMotion || this.options.layoutRoot) && (_.delay = 0, _.type = !1), this.startAnimation(_)
                } else w || Zw(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = b
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const u = this.getStack();
            u && u.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Xr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(DB), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: u
            } = this.options;
            return u && u.getProps().transformTemplate
        }
        willUpdate(u = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && qC(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m];
                y.shouldResetTransform = !0, y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1)
            }
            const {
                layoutId: c,
                layout: f
            } = this.options;
            if (c === void 0 && !f) return;
            const h = this.getTransformTemplate();
            this.prevTransformTemplateValue = h ? h(this.latestValues, "") : void 0, this.updateSnapshot(), u && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Jw);
                return
            }
            this.isUpdating || this.nodes.forEach(OB), this.isUpdating = !1, this.nodes.forEach(NB), this.nodes.forEach(kB), this.nodes.forEach(RB), this.clearAllSnapshots();
            const c = Vn.now();
            vt.delta = lr(0, 1e3 / 60, c - vt.timestamp), vt.timestamp = c, vt.isProcessing = !0, Ff.update.process(vt), Ff.preRender.process(vt), Ff.render.process(vt), vt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Bp.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(_B), this.sharedNodes.forEach(jB)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, $e.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            $e.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let f = 0; f < this.path.length; f++) this.path[f].updateScroll();
            const u = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = et(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: c
            } = this.options;
            c && c.notify("LayoutMeasure", this.layout.layoutBox, u ? u.layoutBox : void 0)
        }
        updateScroll(u = "measure") {
            let c = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === u && (c = !1), c) {
                const f = s(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: u,
                    isRoot: f,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : f
                }
            }
        }
        resetTransform() {
            if (!i) return;
            const u = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                c = this.projectionDelta && !WC(this.projectionDelta),
                f = this.getTransformTemplate(),
                h = f ? f(this.latestValues, "") : void 0,
                m = h !== this.prevTransformTemplateValue;
            u && (c || xs(this.latestValues) || m) && (i(this.instance, h), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(u = !0) {
            const c = this.measurePageBox();
            let f = this.removeElementScroll(c);
            return u && (f = this.removeTransform(f)), VB(f), {
                animationId: this.root.animationId,
                measuredBox: c,
                layoutBox: f,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {
                visualElement: c
            } = this.options;
            if (!c) return et();
            const f = c.measureViewportBox();
            if (!(((u = this.scroll) === null || u === void 0 ? void 0 : u.wasRoot) || this.path.some(UB))) {
                const {
                    scroll: m
                } = this.root;
                m && (To(f.x, m.offset.x), To(f.y, m.offset.y))
            }
            return f
        }
        removeElementScroll(u) {
            var c;
            const f = et();
            if (an(f, u), !((c = this.scroll) === null || c === void 0) && c.wasRoot) return f;
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h],
                    {
                        scroll: y,
                        options: w
                    } = m;
                m !== this.root && y && w.layoutScroll && (y.wasRoot && an(f, u), To(f.x, y.offset.x), To(f.y, y.offset.y))
            }
            return f
        }
        applyTransform(u, c = !1) {
            const f = et();
            an(f, u);
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h];
                !c && m.options.layoutScroll && m.scroll && m !== m.root && ko(f, {
                    x: -m.scroll.offset.x,
                    y: -m.scroll.offset.y
                }), xs(m.latestValues) && ko(f, m.latestValues)
            }
            return xs(this.latestValues) && ko(f, this.latestValues), f
        }
        removeTransform(u) {
            const c = et();
            an(c, u);
            for (let f = 0; f < this.path.length; f++) {
                const h = this.path[f];
                if (!h.instance || !xs(h.latestValues)) continue;
                Kh(h.latestValues) && h.updateSnapshot();
                const m = et(),
                    y = h.measurePageBox();
                an(m, y), Hw(c, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, m)
            }
            return xs(this.latestValues) && Hw(c, this.latestValues), c
        }
        setTargetDelta(u) {
            this.targetDelta = u, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(u) {
            this.options = { ...this.options,
                ...u,
                crossfade: u.crossfade !== void 0 ? u.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== vt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(u = !1) {
            var c;
            const f = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = f.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = f.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = f.isSharedProjectionDirty);
            const h = !!this.resumingFrom || this !== f;
            if (!(u || h && this.isSharedProjectionDirty || this.isProjectionDirty || !((c = this.parent) === null || c === void 0) && c.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: y,
                layoutId: w
            } = this.options;
            if (!(!this.layout || !(y || w))) {
                if (this.resolvedRelativeTargetAt = vt.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const C = this.getClosestProjectingParent();
                    C && C.layout && this.animationProgress !== 1 ? (this.relativeParent = C, this.forceRelativeParentToResolveTarget(), this.relativeTarget = et(), this.relativeTargetOrigin = et(), ia(this.relativeTargetOrigin, this.layout.layoutBox, C.layout.layoutBox), an(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = et(), this.targetWithTransforms = et()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), WF(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : an(this.target, this.layout.layoutBox), FC(this.target, this.targetDelta)) : an(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const C = this.getClosestProjectingParent();
                        C && !!C.resumingFrom == !!this.resumingFrom && !C.options.layoutScroll && C.target && this.animationProgress !== 1 ? (this.relativeParent = C, this.forceRelativeParentToResolveTarget(), this.relativeTarget = et(), this.relativeTargetOrigin = et(), ia(this.relativeTargetOrigin, this.target, C.target), an(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    ea && Ss.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Kh(this.parent.latestValues) || IC(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var u;
            const c = this.getLead(),
                f = !!this.resumingFrom || this !== c;
            let h = !0;
            if ((this.isProjectionDirty || !((u = this.parent) === null || u === void 0) && u.isProjectionDirty) && (h = !1), f && (this.isSharedProjectionDirty || this.isTransformDirty) && (h = !1), this.resolvedRelativeTargetAt === vt.timestamp && (h = !1), h) return;
            const {
                layout: m,
                layoutId: y
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(m || y)) return;
            an(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x,
                C = this.treeScale.y;
            ZF(this.layoutCorrected, this.treeScale, this.path, f), c.layout && !c.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (c.target = c.layout.layoutBox, c.targetWithTransforms = et());
            const {
                target: b
            } = c;
            if (!b) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (zw(this.prevProjectionDelta.x, this.projectionDelta.x), zw(this.prevProjectionDelta.y, this.projectionDelta.y)), oa(this.projectionDelta, this.layoutCorrected, b, this.latestValues), (this.treeScale.x !== w || this.treeScale.y !== C || !Yw(this.projectionDelta.x, this.prevProjectionDelta.x) || !Yw(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", b)), ea && Ss.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(u = !0) {
            var c;
            if ((c = this.options.visualElement) === null || c === void 0 || c.scheduleRender(), u) {
                const f = this.getStack();
                f && f.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Eo(), this.projectionDelta = Eo(), this.projectionDeltaWithTransform = Eo()
        }
        setAnimationOrigin(u, c = !1) {
            const f = this.snapshot,
                h = f ? f.latestValues : {},
                m = { ...this.latestValues
                },
                y = Eo();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !c;
            const w = et(),
                C = f ? f.source : void 0,
                b = this.layout ? this.layout.source : void 0,
                v = C !== b,
                S = this.getStack(),
                k = !S || S.members.length <= 1,
                P = !!(v && !k && this.options.crossfade === !0 && !this.path.some(FB));
            this.animationProgress = 0;
            let R;
            this.mixTargetDelta = _ => {
                const N = _ / 1e3;
                ex(y.x, u.x, N), ex(y.y, u.y, N), this.setTargetDelta(y), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ia(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox), IB(this.relativeTarget, this.relativeTargetOrigin, w, N), R && SB(this.relativeTarget, R) && (this.isProjectionDirty = !1), R || (R = et()), an(R, this.relativeTarget)), v && (this.animationValues = m, mB(m, h, this.latestValues, N, P, k)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = N
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(u) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Xr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = $e.update(() => {
                Pu.hasAnimatedSinceResize = !0, this.currentAnimation = uB(0, Xw, { ...u,
                    onUpdate: c => {
                        this.mixTargetDelta(c), u.onUpdate && u.onUpdate(c)
                    },
                    onComplete: () => {
                        u.onComplete && u.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const u = this.getStack();
            u && u.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Xw), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const u = this.getLead();
            let {
                targetWithTransforms: c,
                target: f,
                layout: h,
                latestValues: m
            } = u;
            if (!(!c || !f || !h)) {
                if (this !== u && this.layout && h && GC(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
                    f = this.target || et();
                    const y = Jt(this.layout.layoutBox.x);
                    f.x.min = u.target.x.min, f.x.max = f.x.min + y;
                    const w = Jt(this.layout.layoutBox.y);
                    f.y.min = u.target.y.min, f.y.max = f.y.min + w
                }
                an(c, f), ko(c, m), oa(this.projectionDeltaWithTransform, this.layoutCorrected, c, m)
            }
        }
        registerSharedNode(u, c) {
            this.sharedNodes.has(u) || this.sharedNodes.set(u, new bB), this.sharedNodes.get(u).add(c);
            const h = c.options.initialPromotionConfig;
            c.promote({
                transition: h ? h.transition : void 0,
                preserveFollowOpacity: h && h.shouldPreserveFollowOpacity ? h.shouldPreserveFollowOpacity(c) : void 0
            })
        }
        isLead() {
            const u = this.getStack();
            return u ? u.lead === this : !0
        }
        getLead() {
            var u;
            const {
                layoutId: c
            } = this.options;
            return c ? ((u = this.getStack()) === null || u === void 0 ? void 0 : u.lead) || this : this
        }
        getPrevLead() {
            var u;
            const {
                layoutId: c
            } = this.options;
            return c ? (u = this.getStack()) === null || u === void 0 ? void 0 : u.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: u
            } = this.options;
            if (u) return this.root.sharedNodes.get(u)
        }
        promote({
            needsReset: u,
            transition: c,
            preserveFollowOpacity: f
        } = {}) {
            const h = this.getStack();
            h && h.promote(this, f), u && (this.projectionDelta = void 0, this.needsReset = !0), c && this.setOptions({
                transition: c
            })
        }
        relegate() {
            const u = this.getStack();
            return u ? u.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: u
            } = this.options;
            if (!u) return;
            let c = !1;
            const {
                latestValues: f
            } = u;
            if ((f.z || f.rotate || f.rotateX || f.rotateY || f.rotateZ || f.skewX || f.skewY) && (c = !0), !c) return;
            const h = {};
            f.z && Gf("z", u, h, this.animationValues);
            for (let m = 0; m < Kf.length; m++) Gf(`rotate${Kf[m]}`, u, h, this.animationValues), Gf(`skew${Kf[m]}`, u, h, this.animationValues);
            u.render();
            for (const m in h) u.setStaticValue(m, h[m]), this.animationValues && (this.animationValues[m] = h[m]);
            u.scheduleRender()
        }
        getProjectionStyles(u) {
            var c, f;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return EB;
            const h = {
                    visibility: ""
                },
                m = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, h.opacity = "", h.pointerEvents = ku(u == null ? void 0 : u.pointerEvents) || "", h.transform = m ? m(this.latestValues, "") : "none", h;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const v = {};
                return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = ku(u == null ? void 0 : u.pointerEvents) || ""), this.hasProjected && !xs(this.latestValues) && (v.transform = m ? m({}, "") : "none", this.hasProjected = !1), v
            }
            const w = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(), h.transform = CB(this.projectionDeltaWithTransform, this.treeScale, w), m && (h.transform = m(w, h.transform));
            const {
                x: C,
                y: b
            } = this.projectionDelta;
            h.transformOrigin = `${C.origin*100}% ${b.origin*100}% 0`, y.animationValues ? h.opacity = y === this ? (f = (c = w.opacity) !== null && c !== void 0 ? c : this.latestValues.opacity) !== null && f !== void 0 ? f : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : h.opacity = y === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
            for (const v in zu) {
                if (w[v] === void 0) continue;
                const {
                    correct: S,
                    applyTo: k
                } = zu[v], P = h.transform === "none" ? w[v] : S(w[v], y);
                if (k) {
                    const R = k.length;
                    for (let _ = 0; _ < R; _++) h[k[_]] = P
                } else h[v] = P
            }
            return this.options.layoutId && (h.pointerEvents = y === this ? ku(u == null ? void 0 : u.pointerEvents) || "" : "none"), h
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(u => {
                var c;
                return (c = u.currentAnimation) === null || c === void 0 ? void 0 : c.stop()
            }), this.root.nodes.forEach(Jw), this.root.sharedNodes.clear()
        }
    }
}

function kB(e) {
    e.updateLayout()
}

function RB(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: s,
            measuredBox: i
        } = e.layout, {
            animationType: l
        } = e.options, u = n.source !== e.layout.source;
        l === "size" ? ln(y => {
            const w = u ? n.measuredBox[y] : n.layoutBox[y],
                C = Jt(w);
            w.min = s[y].min, w.max = w.min + C
        }) : GC(l, n.layoutBox, s) && ln(y => {
            const w = u ? n.measuredBox[y] : n.layoutBox[y],
                C = Jt(s[y]);
            w.max = w.min + C, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[y].max = e.relativeTarget[y].min + C)
        });
        const c = Eo();
        oa(c, s, n.layoutBox);
        const f = Eo();
        u ? oa(f, e.applyTransform(i, !0), n.measuredBox) : oa(f, s, n.layoutBox);
        const h = !WC(c);
        let m = !1;
        if (!e.resumeFrom) {
            const y = e.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {
                    snapshot: w,
                    layout: C
                } = y;
                if (w && C) {
                    const b = et();
                    ia(b, n.layoutBox, w.layoutBox);
                    const v = et();
                    ia(v, s, C.layoutBox), HC(b, v) || (m = !0), y.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = b, e.relativeParent = y)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: s,
            snapshot: n,
            delta: f,
            layoutDelta: c,
            hasLayoutChanged: h,
            hasRelativeTargetChanged: m
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: s
        } = e.options;
        s && s()
    }
    e.options.transition = void 0
}

function PB(e) {
    ea && Ss.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function AB(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function _B(e) {
    e.clearSnapshot()
}

function Jw(e) {
    e.clearMeasurements()
}

function OB(e) {
    e.isLayoutDirty = !1
}

function NB(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Zw(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function MB(e) {
    e.resolveTargetDelta()
}

function LB(e) {
    e.calcProjection()
}

function DB(e) {
    e.resetSkewAndRotation()
}

function jB(e) {
    e.removeLeadSnapshot()
}

function ex(e, t, n) {
    e.translate = Ke(t.translate, 0, n), e.scale = Ke(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function tx(e, t, n, s) {
    e.min = Ke(t.min, n.min, s), e.max = Ke(t.max, n.max, s)
}

function IB(e, t, n, s) {
    tx(e.x, t.x, n.x, s), tx(e.y, t.y, n.y, s)
}

function FB(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const BB = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    nx = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    rx = nx("applewebkit/") && !nx("chrome/") ? Math.round : Xt;

function sx(e) {
    e.min = rx(e.min), e.max = rx(e.max)
}

function VB(e) {
    sx(e.x), sx(e.y)
}

function GC(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !$F(Qw(t), Qw(n), .2)
}

function UB(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const zB = KC({
        attachResizeListener: (e, t) => va(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Qf = {
        current: void 0
    },
    QC = KC({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Qf.current) {
                const e = new zB({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Qf.current = e
            }
            return Qf.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    $B = {
        pan: {
            Feature: oB
        },
        drag: {
            Feature: sB,
            ProjectionNode: QC,
            MeasureLayout: UC
        }
    };

function ox(e, t, n) {
    const {
        props: s
    } = e;
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n,
        l = s[i];
    l && $e.postRender(() => l(t, Ia(t)))
}
class WB extends rs {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = $j(t, n => (ox(this.node, n, "Start"), s => ox(this.node, s, "End"))))
    }
    unmount() {}
}
class HB extends rs {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = ja(va(this.node.current, "focus", () => this.onFocus()), va(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function ix(e, t, n) {
    const {
        props: s
    } = e;
    e.animationState && s.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n),
        l = s[i];
    l && $e.postRender(() => l(t, Ia(t)))
}
class qB extends rs {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = Kj(t, n => (ix(this.node, n, "Start"), (s, {
            success: i
        }) => ix(this.node, s, i ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Qh = new WeakMap,
    Yf = new WeakMap,
    KB = e => {
        const t = Qh.get(e.target);
        t && t(e)
    },
    GB = e => {
        e.forEach(KB)
    };

function QB({
    root: e,
    ...t
}) {
    const n = e || document;
    Yf.has(n) || Yf.set(n, {});
    const s = Yf.get(n),
        i = JSON.stringify(t);
    return s[i] || (s[i] = new IntersectionObserver(GB, {
        root: e,
        ...t
    })), s[i]
}

function YB(e, t, n) {
    const s = QB(t);
    return Qh.set(e, n), s.observe(e), () => {
        Qh.delete(e), s.unobserve(e)
    }
}
const XB = {
    some: 0,
    all: 1
};
class JB extends rs {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: s,
            amount: i = "some",
            once: l
        } = t, u = {
            root: n ? n.current : void 0,
            rootMargin: s,
            threshold: typeof i == "number" ? i : XB[i]
        }, c = f => {
            const {
                isIntersecting: h
            } = f;
            if (this.isInView === h || (this.isInView = h, l && !h && this.hasEnteredView)) return;
            h && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", h);
            const {
                onViewportEnter: m,
                onViewportLeave: y
            } = this.node.getProps(), w = h ? m : y;
            w && w(f)
        };
        return YB(this.node.current, u, c)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(ZB(t, n)) && this.startObserver()
    }
    unmount() {}
}

function ZB({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const e3 = {
        inView: {
            Feature: JB
        },
        tap: {
            Feature: qB
        },
        focus: {
            Feature: HB
        },
        hover: {
            Feature: WB
        }
    },
    t3 = {
        layout: {
            ProjectionNode: QC,
            MeasureLayout: UC
        }
    },
    Yh = {
        current: null
    },
    YC = {
        current: !1
    };

function n3() {
    if (YC.current = !0, !!Lp)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => Yh.current = e.matches;
            e.addListener(t), t()
        } else Yh.current = !1
}
const r3 = [...SC, kt, Jr],
    s3 = e => r3.find(xC(e)),
    ax = new WeakMap;

function o3(e, t, n) {
    for (const s in t) {
        const i = t[s],
            l = n[s];
        if (Pt(i)) e.addValue(s, i);
        else if (Pt(l)) e.addValue(s, ga(i, {
            owner: e
        }));
        else if (l !== i)
            if (e.hasValue(s)) {
                const u = e.getValue(s);
                u.liveStyle === !0 ? u.jump(i) : u.hasAnimated || u.set(i)
            } else {
                const u = e.getStaticValue(s);
                e.addValue(s, ga(u !== void 0 ? u : i, {
                    owner: e
                }))
            }
    }
    for (const s in n) t[s] === void 0 && e.removeValue(s);
    return t
}
const lx = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class i3 {
    scrapeMotionValuesFromProps(t, n, s) {
        return {}
    }
    constructor({
        parent: t,
        props: n,
        presenceContext: s,
        reducedMotionConfig: i,
        blockInitialAnimation: l,
        visualState: u
    }, c = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = am, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const C = Vn.now();
            this.renderScheduledAt < C && (this.renderScheduledAt = C, $e.render(this.render, !1, !0))
        };
        const {
            latestValues: f,
            renderState: h,
            onUpdate: m
        } = u;
        this.onUpdate = m, this.latestValues = f, this.baseTarget = { ...f
        }, this.initialValues = n.initial ? { ...f
        } : {}, this.renderState = h, this.parent = t, this.props = n, this.presenceContext = s, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = c, this.blockInitialAnimation = !!l, this.isControllingVariants = pc(n), this.isVariantNode = A1(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: y,
            ...w
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const C in w) {
            const b = w[C];
            f[C] !== void 0 && Pt(b) && b.set(f[C], !1)
        }
    }
    mount(t) {
        this.current = t, ax.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), YC.current || n3(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Yh.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        ax.delete(this.current), this.projection && this.projection.unmount(), Xr(this.notifyUpdate), Xr(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(), n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const s = Hs.has(t),
            i = n.on("change", c => {
                this.latestValues[t] = c, this.props.onUpdate && $e.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0)
            }),
            l = n.on("renderRequest", this.scheduleRender);
        let u;
        window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
            i(), l(), u && u(), n.owner && n.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Wo) {
            const n = Wo[t];
            if (!n) continue;
            const {
                isEnabled: s,
                Feature: i
            } = n;
            if (!this.features[t] && i && s(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                const l = this.features[t];
                l.isMounted ? l.update() : (l.mount(), l.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : et()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let s = 0; s < lx.length; s++) {
            const i = lx[s];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const l = "on" + i,
                u = t[l];
            u && (this.propEventSubscriptions[i] = this.on(i, u))
        }
        this.prevMotionValues = o3(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const s = this.values.get(t);
        n !== s && (s && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let s = this.values.get(t);
        return s === void 0 && n !== void 0 && (s = ga(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, s)), s
    }
    readValue(t, n) {
        var s;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (s = this.getBaseTargetFromProps(this.props, t)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (vC(i) || uC(i)) ? i = parseFloat(i) : !s3(i) && Jr.test(n) && (i = mC(t, n)), this.setBaseTarget(t, Pt(i) ? i.get() : i)), Pt(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {
            initial: s
        } = this.props;
        let i;
        if (typeof s == "string" || typeof s == "object") {
            const u = Up(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            u && (i = u[t])
        }
        if (s && i !== void 0) return i;
        const l = this.getBaseTargetFromProps(this.props, t);
        return l !== void 0 && !Pt(l) ? l : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new tm), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class XC extends i3 {
    constructor() {
        super(...arguments), this.KeyframeResolver = bC
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: s
    }) {
        delete n[t], delete s[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        Pt(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}

function a3(e) {
    return window.getComputedStyle(e)
}
class l3 extends XC {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = F1
    }
    readValueFromInstance(t, n) {
        if (Hs.has(n)) {
            const s = im(n);
            return s && s.default || 0
        } else {
            const s = a3(t),
                i = (D1(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return BC(t, n)
    }
    build(t, n, s) {
        Wp(t, n, s.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, s) {
        return Gp(t, n, s)
    }
}
class u3 extends XC {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = et
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Hs.has(n)) {
            const s = im(n);
            return s && s.default || 0
        }
        return n = B1.has(n) ? n : Fp(n), t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, s) {
        return z1(t, n, s)
    }
    build(t, n, s) {
        Hp(t, n, this.isSVGTag, s.transformTemplate)
    }
    renderInstance(t, n, s, i) {
        V1(t, n, s, i)
    }
    mount(t) {
        this.isSVGTag = Kp(t.tagName), super.mount(t)
    }
}
const c3 = (e, t) => Vp(e) ? new u3(t) : new l3(t, {
        allowProjection: e !== x.Fragment
    }),
    d3 = jj({ ...LF,
        ...e3,
        ...$B,
        ...t3
    }, c3),
    f3 = XD(d3);

function h3({
    activeReminders: e,
    onRemove: t
}) {
    const n = e.filter(s => !s.isExpired);
    return n.length === 0 ? null : T.jsx("div", {
        className: "fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full",
        children: T.jsx($D, {
            children: n.map(s => T.jsx(f3.div, {
                initial: {
                    opacity: 0,
                    y: 20,
                    scale: .95
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    y: 10,
                    scale: .95
                },
                transition: {
                    duration: .2
                },
                className: `rounded-xl border shadow-lg p-4 ${s.isFiring?"bg-amber-50 border-amber-300 shadow-amber-100":"bg-card border-border"}`,
                children: T.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [T.jsx("div", {
                        className: `h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 ${s.isFiring?"bg-amber-200":"bg-primary/10"}`,
                        children: s.isFiring ? T.jsx(Bk, {
                            className: "h-4 w-4 text-amber-600 animate-bounce"
                        }) : T.jsx(Cx, {
                            className: "h-4 w-4 text-primary"
                        })
                    }), T.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [T.jsx("p", {
                            className: `text-sm font-semibold truncate ${s.isFiring?"text-amber-800":"text-foreground"}`,
                            children: s.isFiring ? "⚠️ Reboot in 30 minutes!" : "Reminder Set"
                        }), T.jsx("p", {
                            className: "text-xs text-muted-foreground truncate mt-0.5",
                            children: s.property
                        }), T.jsxs("div", {
                            className: "mt-2 flex items-center gap-2",
                            children: [T.jsx(Au, {
                                className: `h-3 w-3 flex-shrink-0 ${s.isFiring?"text-amber-600":"text-muted-foreground"}`
                            }), s.countdownToReminder ? T.jsxs("span", {
                                className: "text-xs text-muted-foreground",
                                children: ["Reminder in", " ", T.jsx("span", {
                                    className: "font-mono font-semibold text-foreground",
                                    children: s.countdownToReminder
                                })]
                            }) : T.jsxs("span", {
                                className: "text-xs text-amber-700",
                                children: ["Reboot in", " ", T.jsx("span", {
                                    className: "font-mono font-bold",
                                    children: s.countdownToReboot
                                })]
                            })]
                        }), T.jsxs("div", {
                            className: "mt-1 text-[11px] text-muted-foreground",
                            children: ["Reboot at ", T.jsx("span", {
                                className: "font-semibold",
                                children: s.downTime
                            }), " — ", s.day]
                        })]
                    }), T.jsx(fa, {
                        variant: "ghost",
                        size: "icon",
                        className: "h-6 w-6 flex-shrink-0 -mt-1 -mr-1",
                        onClick: () => t(s.property),
                        children: T.jsx(bs, {
                            className: "h-3.5 w-3.5"
                        })
                    })]
                })
            }, s.property))
        })
    })
}
const p3 = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 0
};

function JC(e, t) {
    const [n, s] = t.split("h").map(Number), i = new Date, l = p3[e];
    for (let u = 0; u < 7; u++) {
        const c = new Date(i);
        if (c.setDate(i.getDate() + u), c.setHours(n, s, 0, 0), c.getDay() === l && c > i) return c
    }
    return null
}

function m3(e, t) {
    const n = JC(t, e);
    return n ? new Date(n.getTime() - 1800 * 1e3) : null
}

function g3() {
    const [e, t] = x.useState({}), [n, s] = x.useState(new Date);
    x.useEffect(() => {
        const f = setInterval(() => s(new Date), 1e3);
        return () => clearInterval(f)
    }, []);
    const i = x.useCallback(f => {
            const h = m3(f.downTime, f.day);
            h && t(m => ({ ...m,
                [f.property]: {
                    property: f.property,
                    brand: f.brand,
                    day: f.day,
                    downTime: f.downTime,
                    reminderTime: h,
                    rebootTime: JC(f.day, f.downTime),
                    fired: !1
                }
            }))
        }, []),
        l = x.useCallback(f => {
            t(h => {
                const m = { ...h
                };
                return delete m[f], m
            })
        }, []),
        u = x.useCallback(f => !!e[f], [e]),
        c = Object.values(e).map(f => {
            const h = f.reminderTime - n,
                m = f.rebootTime - n,
                y = h <= 0 && m > 0,
                w = m <= 0,
                C = b => {
                    if (b <= 0) return "00:00:00";
                    const v = Math.floor(b / 1e3),
                        S = Math.floor(v / 3600),
                        k = Math.floor(v % 3600 / 60),
                        P = v % 60;
                    return [S, k, P].map(R => String(R).padStart(2, "0")).join(":")
                };
            return { ...f,
                isFiring: y,
                isExpired: w,
                countdownToReminder: h > 0 ? C(h) : null,
                countdownToReboot: C(m)
            }
        });
    return {
        reminders: e,
        activeReminders: c,
        addReminder: i,
        removeReminder: l,
        isReminded: u
    }
}

function y3() {
    const [e, t] = x.useState(""), [n, s] = x.useState(""), [i, l] = x.useState(""), [u, c] = x.useState(""), {
        activeReminders: f,
        addReminder: h,
        removeReminder: m,
        isReminded: y
    } = g3(), w = x.useMemo(() => da.filter(C => {
        const b = !e || C.property.toLowerCase().includes(e.toLowerCase()) || C.brand.toLowerCase().includes(e.toLowerCase()) || C.province.toLowerCase().includes(e.toLowerCase()),
            v = !n || n === "all" || C.day === n,
            S = !i || i === "all" || C.brand === i,
            k = !u || u === "all" || C.province === u;
        return b && v && S && k
    }), [e, n, i, u]);
    return T.jsxs("div", {
        className: "space-y-6",
        children: [T.jsxs("div", {
            children: [T.jsx("h2", {
                className: "text-2xl font-bold tracking-tight text-foreground",
                children: "Regional Server Reboot Schedule"
            }), T.jsx("p", {
                className: "text-sm text-muted-foreground mt-1",
                children: "Week 2 patch cycle — All scheduled maintenance windows for property server reboots"
            })]
        }), T.jsx(zN, {}), T.jsx(LD, {
            search: e,
            setSearch: t,
            dayFilter: n,
            setDayFilter: s,
            brandFilter: i,
            setBrandFilter: l,
            provinceFilter: u,
            setProvinceFilter: c
        }), T.jsxs("div", {
            className: "flex items-center justify-between",
            children: [T.jsxs("p", {
                className: "text-xs text-muted-foreground font-medium",
                children: ["Showing ", T.jsx("span", {
                    className: "text-foreground font-semibold",
                    children: w.length
                }), " of", " ", T.jsx("span", {
                    className: "text-foreground font-semibold",
                    children: da.length
                }), " properties"]
            }), f.filter(C => !C.isExpired).length > 0 && T.jsxs("div", {
                className: "flex items-center gap-1.5 text-xs text-amber-600 font-medium",
                children: [T.jsx("span", {
                    className: "h-2 w-2 rounded-full bg-amber-500 animate-pulse"
                }), f.filter(C => !C.isExpired).length, " active reminder(s)"]
            })]
        }), T.jsx(FD, {
            data: w,
            isReminded: y,
            onAddReminder: h,
            onRemoveReminder: m
        }), T.jsx(h3, {
            activeReminders: f,
            onRemove: m
        })]
    })
}
const v3 = () => {
    const {
        isLoadingAuth: e,
        isLoadingPublicSettings: t,
        authError: n,
        navigateToLogin: s
    } = jN();
    if (t || e) return T.jsx("div", {
        className: "fixed inset-0 flex items-center justify-center",
        children: T.jsx("div", {
            className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
        })
    });
    if (n) {
        if (n.type === "user_not_registered") return T.jsx(IN, {});
        if (n.type === "auth_required") return s(), null
    }
    return T.jsx(pA, {
        children: T.jsxs(hu, {
            element: T.jsx(BN, {}),
            children: [T.jsx(hu, {
                path: "/",
                element: T.jsx(y3, {})
            }), T.jsx(hu, {
                path: "*",
                element: T.jsx(LN, {})
            })]
        })
    })
};

function w3() {
    return T.jsx(DN, {
        children: T.jsxs(sP, {
            client: yP,
            children: [T.jsx(SA, {
                children: T.jsx(v3, {})
            }), T.jsx(NR, {})]
        })
    })
}
sk.createRoot(document.getElementById("root")).render(T.jsx(w3, {}));