"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [736],
  {
    66323: (t, e, i) => {
      i.d(e, { t: () => s });
      let s = new Set(["opacity", "clipPath", "filter", "transform"]);
    },
    11298: (t, e, i) => {
      i.d(e, { v: () => tR });
      var s = i(80557),
        r = i(26019);
      let n = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        o = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: "keyframes", duration: 0.8 },
        l = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        h = (t, { keyframes: e }) =>
          e.length > 2
            ? a
            : r.G.has(t)
            ? t.startsWith("scale")
              ? o(e[1])
              : n
            : l;
      var u = i(69792),
        d = i(565);
      let c = { current: !1 },
        p = (t) => null !== t;
      function m(t, { repeat: e, repeatType: i = "loop" }, s) {
        let r = t.filter(p),
          n = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return n && void 0 !== s ? s : r[n];
      }
      var f = i(86219),
        v = i(63078);
      function g(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      var y = i(69276),
        x = i(59993),
        P = i(23653),
        w = i(19047),
        T = i(83646);
      let b = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (T.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class S {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: s = 0,
          repeatDelay: r = 0,
          repeatType: n = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = x.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: s,
              repeatDelay: r,
              repeatType: n,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, P.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = x.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: s,
            velocity: r,
            delay: n,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, s) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let n = t[t.length - 1],
                o = b(r, e),
                a = b(n, e);
              return (
                (0, w.K)(
                  o === a,
                  `You are trying to animate ${e} from "${r}" to "${n}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${n} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && s))
              );
            })(t, i, s, r)
          ) {
            if (c.current || !n) {
              null == a || a(m(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let h = this.initPlayback(t, e);
          !1 !== h &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...h }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var A = i(83476);
      function V(t, e, i) {
        let s = Math.max(e - 5, 0);
        return (0, A.R)(i - t(s), e - s);
      }
      var C = i(51506);
      function D(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let E = ["duration", "bounce"],
        M = ["stiffness", "damping", "mass"];
      function R(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function k({ keyframes: t, restDelta: e, restSpeed: i, ...r }) {
        let n;
        let o = t[0],
          a = t[t.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: h,
            damping: u,
            mass: d,
            duration: c,
            velocity: p,
            isResolvedFromDuration: m,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!R(t, M) && R(t, E)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: r = 1,
              }) {
                let n, o;
                (0, w.K)(
                  t <= (0, s.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let a = 1 - e;
                (a = (0, C.u)(0.05, 1, a)),
                  (t = (0, C.u)(0.01, 10, (0, s.X)(t))),
                  a < 1
                    ? ((n = (e) => {
                        let s = e * a,
                          r = s * t;
                        return 0.001 - ((s - i) / D(e, a)) * Math.exp(-r);
                      }),
                      (o = (e) => {
                        let s = e * a * t,
                          r = Math.pow(a, 2) * Math.pow(e, 2) * t,
                          o = Math.exp(-s),
                          l = D(Math.pow(e, 2), a);
                        return (
                          ((s * i + i - r) * o * (-n(e) + 0.001 > 0 ? -1 : 1)) /
                          l
                        );
                      }))
                    : ((n = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (o = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let l = (function (t, e, i) {
                  let s = i;
                  for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                  return s;
                })(n, o, 5 / t);
                if (((t = (0, s.w)(t)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(l, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * a * Math.sqrt(r * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...r, velocity: -(0, s.X)(r.velocity || 0) }),
          f = p || 0,
          v = u / (2 * Math.sqrt(h * d)),
          g = a - o,
          y = (0, s.X)(Math.sqrt(h / d)),
          x = 5 > Math.abs(g);
        if ((i || (i = x ? 0.01 : 2), e || (e = x ? 0.005 : 0.5), v < 1)) {
          let t = D(y, v);
          n = (e) =>
            a -
            Math.exp(-v * y * e) *
              (((f + v * y * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
        } else if (1 === v)
          n = (t) => a - Math.exp(-y * t) * (g + (f + y * g) * t);
        else {
          let t = y * Math.sqrt(v * v - 1);
          n = (e) => {
            let i = Math.exp(-v * y * e),
              s = Math.min(t * e, 300);
            return (
              a -
              (i * ((f + v * y * g) * Math.sinh(s) + t * g * Math.cosh(s))) / t
            );
          };
        }
        return {
          calculatedDuration: (m && c) || null,
          next: (t) => {
            let r = n(t);
            if (m) l.done = t >= c;
            else {
              let o = 0;
              v < 1 && (o = 0 === t ? (0, s.w)(f) : V(n, t, r));
              let h = Math.abs(o) <= i,
                u = Math.abs(a - r) <= e;
              l.done = h && u;
            }
            return (l.value = l.done ? a : r), l;
          },
        };
      }
      function j({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: s = 325,
        bounceDamping: r = 10,
        bounceStiffness: n = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: h = 0.5,
        restSpeed: u,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let P = (t) => -g * Math.exp(-t / s),
          w = (t) => x + P(t),
          T = (t) => {
            let e = P(t),
              i = w(t);
            (m.done = Math.abs(e) <= h), (m.value = m.done ? x : i);
          },
          b = (t) => {
            f(m.value) &&
              ((d = t),
              (c = k({
                keyframes: [m.value, v(m.value)],
                velocity: V(w, t, m.value),
                damping: r,
                stiffness: n,
                restDelta: h,
                restSpeed: u,
              })));
          };
        return (
          b(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), T(t), b(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || T(t), m);
            },
          }
        );
      }
      let L = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function F(t, e, i, s) {
        if (t === e && i === s) return y.Z;
        let r = (e) =>
          (function (t, e, i, s, r) {
            let n, o;
            let a = 0;
            do (n = L((o = e + (i - e) / 2), s, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(n) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : L(r(t), e, s));
      }
      let B = F(0.42, 0, 1, 1),
        O = F(0, 0, 0.58, 1),
        W = F(0.42, 0, 0.58, 1),
        $ = (t) => Array.isArray(t) && "number" != typeof t[0];
      var I = i(68536),
        U = i(73108),
        N = i(62718);
      let X = F(0.33, 1.53, 0.69, 0.99),
        z = (0, N.M)(X),
        H = (0, U.o)(z),
        Y = {
          linear: y.Z,
          easeIn: B,
          easeInOut: W,
          easeOut: O,
          circIn: I.Z7,
          circInOut: I.X7,
          circOut: I.Bn,
          backIn: z,
          backInOut: H,
          backOut: X,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * z(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        K = (t) => {
          if (Array.isArray(t)) {
            (0, w.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, s, r] = t;
            return F(e, i, s, r);
          }
          return "string" == typeof t
            ? ((0, w.k)(void 0 !== Y[t], `Invalid easing type '${t}'`), Y[t])
            : t;
        };
      var G = i(89654),
        Z = i(33217),
        q = i(75004);
      function _(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var J = i(45778),
        Q = i(91583),
        tt = i(598);
      function te(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let ti = (t, e, i) => {
          let s = t * t,
            r = i * (e * e - s) + s;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        ts = [J.$, Q.m, tt.J],
        tr = (t) => ts.find((e) => e.test(t));
      function tn(t) {
        let e = tr(t);
        if (
          ((0, w.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tt.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: s }) {
              (t /= 360), (i /= 100);
              let r = 0,
                n = 0,
                o = 0;
              if ((e /= 100)) {
                let s = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - s;
                (r = _(a, s, t + 1 / 3)),
                  (n = _(a, s, t)),
                  (o = _(a, s, t - 1 / 3));
              } else r = n = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * n),
                blue: Math.round(255 * o),
                alpha: s,
              };
            })(i)),
          i
        );
      }
      let to = (t, e) => {
        let i = tn(t),
          s = tn(e);
        if (!i || !s) return te(t, e);
        let r = { ...i };
        return (t) => (
          (r.red = ti(i.red, s.red, t)),
          (r.green = ti(i.green, s.green, t)),
          (r.blue = ti(i.blue, s.blue, t)),
          (r.alpha = (0, q.t)(i.alpha, s.alpha, t)),
          Q.m.transform(r)
        );
      };
      var ta = i(50146),
        tl = i(61534);
      let th = new Set(["none", "hidden"]);
      function tu(t, e) {
        return (i) => (0, q.t)(t, e, i);
      }
      function td(t) {
        return "number" == typeof t
          ? tu
          : "string" == typeof t
          ? (0, tl.t)(t)
            ? te
            : ta.$.test(t)
            ? to
            : tm
          : Array.isArray(t)
          ? tc
          : "object" == typeof t
          ? ta.$.test(t)
            ? to
            : tp
          : te;
      }
      function tc(t, e) {
        let i = [...t],
          s = i.length,
          r = t.map((t, i) => td(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < s; e++) i[e] = r[e](t);
          return i;
        };
      }
      function tp(t, e) {
        let i = { ...t, ...e },
          s = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (s[r] = td(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in s) i[e] = s[e](t);
          return i;
        };
      }
      let tm = (t, e) => {
        let i = T.P.createTransformer(e),
          s = (0, T.V)(t),
          r = (0, T.V)(e);
        return s.indexes.var.length === r.indexes.var.length &&
          s.indexes.color.length === r.indexes.color.length &&
          s.indexes.number.length >= r.indexes.number.length
          ? (th.has(t) && !r.values.length) || (th.has(e) && !s.values.length)
            ? (function (t, e) {
                return th.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : (0, G.z)(
                tc(
                  (function (t, e) {
                    var i;
                    let s = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let n = 0; n < e.values.length; n++) {
                      let o = e.types[n],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (s[n] = l), r[o]++;
                    }
                    return s;
                  })(s, r),
                  r.values
                ),
                i
              )
          : ((0, w.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            te(t, e));
      };
      function tf(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, q.t)(t, e, i)
          : td(t)(t, e);
      }
      function tv({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: s = "easeInOut",
      }) {
        let r = $(s) ? s.map(K) : K(s),
          n = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: s, mixer: r } = {}) {
            let n = t.length;
            if (
              ((0, w.k)(
                n === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === n)
            )
              return () => e[0];
            if (2 === n && t[0] === t[1]) return () => e[1];
            t[0] > t[n - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let s = [],
                  r = i || tf,
                  n = t.length - 1;
                for (let i = 0; i < n; i++) {
                  let n = r(t[i], t[i + 1]);
                  if (e) {
                    let t = Array.isArray(e) ? e[i] || y.Z : e;
                    n = (0, G.z)(t, n);
                  }
                  s.push(n);
                }
                return s;
              })(e, s, r),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let s = (0, Z.Y)(t[i], t[i + 1], e);
                return o[i](s);
              };
            return i ? (e) => l((0, C.u)(t[0], t[n - 1], e)) : l;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let s = 1; s <= e; s++) {
                        let r = (0, Z.Y)(0, e, s);
                        t.push((0, q.t)(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(r)
                ? r
                : e.map(() => r || W).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((n.value = o(e)), (n.done = e >= t), n),
        };
      }
      let tg = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => f.Wi.update(e, !0),
            stop: () => (0, f.Pn)(e),
            now: () =>
              f.frameData.isProcessing ? f.frameData.timestamp : x.X.now(),
          };
        },
        ty = { decay: j, inertia: j, tween: tv, keyframes: tv, spring: k },
        tx = (t) => t / 100;
      class tP extends S {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              let { onStop: t } = this.options;
              t && t(),
                this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" !== this.state && this.teardown();
            });
          let {
              name: e,
              motionValue: i,
              element: s,
              keyframes: r,
            } = this.options,
            n = (null == s ? void 0 : s.KeyframeResolver) || P.e;
          (this.resolver = new n(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            s
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: s = "keyframes",
              repeat: r = 0,
              repeatDelay: n = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = ty[s] || tv;
          l !== tv &&
            "number" != typeof t[0] &&
            ((e = (0, G.z)(tx, tf(t[0], t[1]))), (t = [0, 100]));
          let h = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === h.calculatedDuration &&
              (h.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(h));
          let { calculatedDuration: u } = h,
            d = u + n;
          return {
            generator: h,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: u,
            resolvedDuration: d,
            totalDuration: d * (r + 1) - n,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: s,
            generator: r,
            mirroredGenerator: n,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: h,
            resolvedDuration: u,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: f,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - h / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > h;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = h);
          let x = this.currentTime,
            P = r;
          if (c) {
            let t = Math.min(this.currentTime, h) / u,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), f && (i -= f / u))
                  : "mirror" === p && (P = n)),
              (x = (0, C.u)(0, 1, i) * u);
          }
          let w = y ? { done: !1, value: a[0] } : P.next(x);
          o && (w.value = o(w.value));
          let { done: T } = w;
          y ||
            null === l ||
            (T =
              this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
          let b =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && T));
          return (
            b && void 0 !== s && (w.value = m(a, this.options, s)),
            v && v(w.value),
            b && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, s.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, s.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, s.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, s.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = tg, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let s = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = s - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = s)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      var tw = i(66323);
      let tT = (t) => Array.isArray(t) && "number" == typeof t[0],
        tb = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
        tS = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tb([0, 0.65, 0.55, 1]),
          circOut: tb([0.55, 0, 1, 0.45]),
          backIn: tb([0.31, 0.01, 0.66, -0.59]),
          backOut: tb([0.33, 1.53, 0.69, 0.99]),
        };
      function tA(t) {
        return tV(t) || tS.easeOut;
      }
      function tV(t) {
        if (t) return tT(t) ? tb(t) : Array.isArray(t) ? t.map(tA) : tS[t];
      }
      let tC = g(() =>
        Object.hasOwnProperty.call(Element.prototype, "animate")
      );
      class tD extends S {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: s,
            keyframes: r,
          } = this.options;
          (this.resolver = new v.s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            s
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, s;
          let {
            duration: r = 300,
            times: n,
            ease: o,
            type: a,
            motionValue: l,
            name: h,
            startTime: u,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (s = this.options).type ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in tS) ||
                tT(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(s.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: s,
                element: l,
                ...h
              } = this.options,
              u = (function (t, e) {
                let i = new tP({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  s = { done: !1, value: t[0] },
                  r = [],
                  n = 0;
                for (; !s.done && n < 2e4; )
                  r.push((s = i.sample(n)).value), (n += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: n - 10,
                  ease: "linear",
                };
              })(t, h);
            1 === (t = u.keyframes).length && (t[1] = t[0]),
              (r = u.duration),
              (n = u.times),
              (o = u.ease),
              (a = "keyframes");
          }
          let d = (function (
            t,
            e,
            i,
            {
              delay: s = 0,
              duration: r = 300,
              repeat: n = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let h = { [e]: i };
            l && (h.offset = l);
            let u = tV(a);
            return (
              Array.isArray(u) && (h.easing = u),
              t.animate(h, {
                delay: s,
                duration: r,
                easing: Array.isArray(u) ? "linear" : u,
                fill: "both",
                iterations: n + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, h, t, {
            ...this.options,
            duration: r,
            times: n,
            ease: o,
          });
          return (
            (d.startTime = null != u ? u : this.calcStartTime()),
            this.pendingTimeline
              ? ((d.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(m(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: r,
              times: n,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, s.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, s.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, s.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return y.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return y.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: r,
            type: n,
            ease: o,
            times: a,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: h,
                ...u
              } = this.options,
              d = new tP({
                ...u,
                keyframes: i,
                duration: r,
                type: n,
                ease: o,
                times: a,
                isGenerator: !0,
              }),
              c = (0, s.w)(this.time);
            t.setWithVelocity(d.sample(c - 10).value, d.sample(c).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: s,
            repeatType: r,
            damping: n,
            type: o,
          } = t;
          return (
            tC() &&
            i &&
            tw.t.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !s &&
            "mirror" !== r &&
            0 !== n &&
            "inertia" !== o
          );
        }
      }
      let tE = g(() => void 0 !== window.ScrollTimeline);
      class tM {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!tE() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let i;
                  let s = () => {
                    let { currentTime: s } = e,
                      r = (null === s ? 0 : s.value) / 100;
                    i !== r && t(r), (i = r);
                  };
                  return f.Wi.update(s, !0), () => (0, f.Pn)(s);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let tR =
        (t, e, i, r = {}, n, o, a) =>
        (l) => {
          let p = (0, u.e)(r, t) || {},
            v = p.delay || r.delay || 0,
            { elapsed: g = 0 } = r;
          g -= (0, s.w)(v);
          let y = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...p,
            delay: -g,
            onUpdate: (t) => {
              e.set(t), p.onUpdate && p.onUpdate(t);
            },
            onComplete: () => {
              l(), p.onComplete && p.onComplete(), a && a();
            },
            onStop: a,
            name: t,
            motionValue: e,
            element: o ? void 0 : n,
          };
          (0, u.r)(p) || (y = { ...y, ...h(t, y) }),
            y.duration && (y.duration = (0, s.w)(y.duration)),
            y.repeatDelay && (y.repeatDelay = (0, s.w)(y.repeatDelay)),
            void 0 !== y.from && (y.keyframes[0] = y.from);
          let x = !1;
          if (
            ((!1 !== y.type && (0 !== y.duration || y.repeatDelay)) ||
              ((y.duration = 0), 0 !== y.delay || (x = !0)),
            (c.current || d.c.skipAnimations) &&
              ((x = !0), (y.duration = 0), (y.delay = 0)),
            x && !o && void 0 !== e.get())
          ) {
            let t = m(y.keyframes, p);
            if (void 0 !== t)
              return (
                f.Wi.update(() => {
                  y.onUpdate(t), y.onComplete();
                }),
                new tM([])
              );
          }
          return !o && tD.supports(y) ? new tD(y) : new tP(y);
        };
    },
    65908: (t, e, i) => {
      i.d(e, { M: () => s });
      let s = "data-" + (0, i(51580).D)("framerAppearId");
    },
    2087: (t, e, i) => {
      i.d(e, { s: () => r });
      var s = i(65908);
      function r(t) {
        return t.props[s.M];
      }
    },
    64572: (t, e, i) => {
      i.d(e, { H: () => s });
      function s(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
    },
    66925: (t, e, i) => {
      i.d(e, { C: () => s });
      let s = (t) => Array.isArray(t);
    },
    69792: (t, e, i) => {
      function s({
        when: t,
        delay: e,
        delayChildren: i,
        staggerChildren: s,
        staggerDirection: r,
        repeat: n,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: h,
        ...u
      }) {
        return !!Object.keys(u).length;
      }
      function r(t, e) {
        return t[e] || t.default || t;
      }
      i.d(e, { e: () => r, r: () => s });
    },
    5050: (t, e, i) => {
      i.d(e, { p: () => s });
      let s = (0, i(2265).createContext)({});
    },
    36539: (t, e, i) => {
      i.d(e, { u: () => s });
      let s = (0, i(2265).createContext)({ strict: !1 });
    },
    29791: (t, e, i) => {
      i.d(e, { _: () => s });
      let s = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    67797: (t, e, i) => {
      i.d(e, { O: () => s });
      let s = (0, i(2265).createContext)(null);
    },
    86094: (t, e, i) => {
      i.d(e, { g: () => s });
      let s = (0, i(2265).createContext)({});
    },
    68536: (t, e, i) => {
      i.d(e, { Bn: () => o, X7: () => a, Z7: () => n });
      var s = i(73108),
        r = i(62718);
      let n = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(n),
        a = (0, s.o)(n);
    },
    73108: (t, e, i) => {
      i.d(e, { o: () => s });
      let s = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    62718: (t, e, i) => {
      i.d(e, { M: () => s });
      let s = (t) => (e) => 1 - t(1 - e);
    },
    23731: (t, e, i) => {
      i.d(e, { E: () => s });
      function s(t, e, i, r = { passive: !0 }) {
        return t.addEventListener(e, i, r), () => t.removeEventListener(e, i);
      }
    },
    33787: (t, e, i) => {
      i.d(e, { a: () => n });
      var s = i(23731),
        r = i(63280);
      function n(t, e, i, n) {
        return (0, s.E)(t, e, (0, r.s)(i), n);
      }
    },
    63280: (t, e, i) => {
      i.d(e, { Q: () => r, s: () => n });
      var s = i(83414);
      function r(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let n = (t) => (e) => (0, s.D)(e) && t(e, r(e));
    },
    83414: (t, e, i) => {
      i.d(e, { D: () => s });
      let s = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
    },
    2981: (t, e, i) => {
      i.d(e, { Z: () => n });
      var s = i(565);
      let r = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function n(t, e) {
        let i = !1,
          n = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = r.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  s = !1,
                  r = !1,
                  n = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  n.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, r = !1, o = !1) => {
                    let a = o && s ? e : i;
                    return r && n.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), n.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), s)) {
                      r = !0;
                      return;
                    }
                    (s = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(a),
                      (s = !1),
                      r && ((r = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {}
          ),
          {
            read: h,
            resolveKeyframes: u,
            update: d,
            preRender: c,
            render: p,
            postRender: m,
          } = l,
          f = () => {
            let r = s.c.useManualTiming ? o.timestamp : performance.now();
            (i = !1),
              (o.delta = n
                ? 1e3 / 60
                : Math.max(Math.min(r - o.timestamp, 40), 1)),
              (o.timestamp = r),
              (o.isProcessing = !0),
              h.process(o),
              u.process(o),
              d.process(o),
              c.process(o),
              p.process(o),
              m.process(o),
              (o.isProcessing = !1),
              i && e && ((n = !1), t(f));
          },
          v = () => {
            (i = !0), (n = !0), o.isProcessing || t(f);
          };
        return {
          schedule: r.reduce((t, e) => {
            let s = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || v(), s.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < r.length; e++) l[r[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    86219: (t, e, i) => {
      i.d(e, { Pn: () => n, S6: () => a, Wi: () => r, frameData: () => o });
      var s = i(69276);
      let {
        schedule: r,
        cancel: n,
        state: o,
        steps: a,
      } = (0, i(2981).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : s.Z,
        !0
      );
    },
    78172: (t, e, i) => {
      i.d(e, { g: () => s });
      let { schedule: s, cancel: r } = (0, i(2981).Z)(queueMicrotask, !1);
    },
    59993: (t, e, i) => {
      let s;
      i.d(e, { X: () => a });
      var r = i(565),
        n = i(86219);
      function o() {
        s = void 0;
      }
      let a = {
        now: () => (
          void 0 === s &&
            a.set(
              n.frameData.isProcessing || r.c.useManualTiming
                ? n.frameData.timestamp
                : performance.now()
            ),
          s
        ),
        set: (t) => {
          (s = t), queueMicrotask(o);
        },
      };
    },
    75153: (t, e, i) => {
      function s(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      i.d(e, { fJ: () => o, gD: () => a });
      let r = s("dragHorizontal"),
        n = s("dragVertical");
      function o(t) {
        let e = !1;
        if ("y" === t) e = n();
        else if ("x" === t) e = r();
        else {
          let t = r(),
            i = n();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function a() {
        let t = o(!0);
        return !t || (t(), !1);
      }
    },
    20847: (t, e, i) => {
      i.d(e, { L: () => s });
      class s {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
    },
    63063: (t, e, i) => {
      i.d(e, { s: () => E });
      var s = i(64572),
        r = i(66925);
      function n(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }
      var o = i(56859),
        a = i(28595);
      function l(t, e, i) {
        let s = t.getProps();
        return (0, a.o)(s, e, void 0 !== i ? i : s.custom, t);
      }
      var h = i(53552),
        u = i(26019),
        d = i(11298),
        c = i(99155),
        p = i(20804),
        m = i(69792),
        f = i(2087),
        v = i(3944),
        g = i(86219);
      function y(t, e, { delay: i = 0, transitionOverride: s, type: r } = {}) {
        var n;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...h
        } = e;
        s && (o = s);
        let x = [],
          P = r && t.animationState && t.animationState.getState()[r];
        for (let e in h) {
          let s = t.getValue(
              e,
              null !== (n = t.latestValues[e]) && void 0 !== n ? n : null
            ),
            r = h[e];
          if (
            void 0 === r ||
            (P &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let s = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), s;
              })(P, e))
          )
            continue;
          let a = { delay: i, ...(0, m.e)(o || {}, e) },
            l = !1;
          if (window.MotionHandoffAnimation) {
            let i = (0, f.s)(t);
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, g.Wi);
              null !== t && ((a.startTime = t), (l = !0));
            }
          }
          s.start(
            (0, d.v)(
              e,
              s,
              r,
              t.shouldReduceMotion && u.G.has(e) ? { type: !1 } : a,
              t,
              l,
              (0, v.K)(t, e)
            )
          );
          let c = s.animation;
          c && x.push(c);
        }
        return (
          a &&
            Promise.all(x).then(() => {
              g.Wi.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: s = {},
                      ...r
                    } = l(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      let i = (0, c.Y)(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, p.BX)(i));
                    }
                  })(t, a);
              });
            }),
          x
        );
      }
      function x(t, e, i = {}) {
        var s;
        let r = l(
            t,
            e,
            "exit" === i.type
              ? null === (s = t.presenceContext) || void 0 === s
                ? void 0
                : s.custom
              : void 0
          ),
          { transition: n = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (n = i.transitionOverride);
        let o = r ? () => Promise.all(y(t, r, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (s = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = n;
                  return (function (t, e, i = 0, s = 0, r = 1, n) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * s,
                      l = 1 === r ? (t = 0) => t * s : (t = 0) => a - t * s;
                    return (
                      Array.from(t.variantChildren)
                        .sort(P)
                        .forEach((t, s) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              x(t, e, { ...n, delay: i + l(s) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + s, o, a, i);
                }
              : () => Promise.resolve(),
          { when: h } = n;
        if (!h) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === h ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function P(t, e) {
        return t.sortNodePosition(e);
      }
      let w = [...h.e].reverse(),
        T = h.e.length;
      function b(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function S() {
        return {
          animate: b(!0),
          whileInView: b(),
          whileHover: b(),
          whileTap: b(),
          whileDrag: b(),
          whileFocus: b(),
          exit: b(),
        };
      }
      var A = i(20847);
      class V extends A.L {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let s;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            s = Promise.all(e.map((e) => x(t, e, i)));
                          else if ("string" == typeof e) s = x(t, e, i);
                          else {
                            let r =
                              "function" == typeof e ? l(t, e, i.custom) : e;
                            s = Promise.all(y(t, r, i));
                          }
                          return s.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = S(),
                  a = !0,
                  h = (e) => (i, s) => {
                    var r;
                    let n = l(
                      t,
                      s,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (n) {
                      let { transition: t, transitionEnd: e, ...s } = n;
                      i = { ...i, ...s, ...e };
                    }
                    return i;
                  };
                function u(l) {
                  let u = t.getProps(),
                    d = t.getVariantContext(!0) || {},
                    c = [],
                    p = new Set(),
                    m = {},
                    f = 1 / 0;
                  for (let e = 0; e < T; e++) {
                    var v;
                    let g = w[e],
                      y = i[g],
                      x = void 0 !== u[g] ? u[g] : d[g],
                      P = (0, o.$)(x),
                      T = g === l ? y.isActive : null;
                    !1 === T && (f = e);
                    let b = x === d[g] && x !== u[g] && P;
                    if (
                      (b && a && t.manuallyAnimateOnMount && (b = !1),
                      (y.protectedKeys = { ...m }),
                      (!y.isActive && null === T) ||
                        (!x && !y.prevProp) ||
                        (0, s.H)(x) ||
                        "boolean" == typeof x)
                    )
                      continue;
                    let S =
                        ((v = y.prevProp),
                        ("string" == typeof x
                          ? x !== v
                          : !!Array.isArray(x) && !n(x, v)) ||
                          (g === l && y.isActive && !b && P) ||
                          (e > f && P)),
                      A = !1,
                      V = Array.isArray(x) ? x : [x],
                      C = V.reduce(h(g), {});
                    !1 === T && (C = {});
                    let { prevResolvedValues: D = {} } = y,
                      E = { ...D, ...C },
                      M = (e) => {
                        (S = !0),
                          p.has(e) && ((A = !0), p.delete(e)),
                          (y.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in E) {
                      let e = C[t],
                        i = D[t];
                      if (!m.hasOwnProperty(t))
                        ((0, r.C)(e) && (0, r.C)(i) ? n(e, i) : e === i)
                          ? void 0 !== e && p.has(t)
                            ? M(t)
                            : (y.protectedKeys[t] = !0)
                          : null != e
                          ? M(t)
                          : p.add(t);
                    }
                    (y.prevProp = x),
                      (y.prevResolvedValues = C),
                      y.isActive && (m = { ...m, ...C }),
                      a && t.blockInitialAnimation && (S = !1),
                      S &&
                        (!b || A) &&
                        c.push(
                          ...V.map((t) => ({
                            animation: t,
                            options: { type: g },
                          }))
                        );
                  }
                  if (p.size) {
                    let e = {};
                    p.forEach((i) => {
                      let s = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != s ? s : null);
                    }),
                      c.push({ animation: e });
                  }
                  let g = !!c.length;
                  return (
                    a &&
                      (!1 === u.initial || u.initial === u.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (g = !1),
                    (a = !1),
                    g ? e(c) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: u,
                  setActive: function (e, s) {
                    var r;
                    if (i[e].isActive === s) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, s);
                      }),
                      (i[e].isActive = s);
                    let n = u(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return n;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = S()), (a = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          (0, s.H)(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let C = 0;
      class D extends A.L {
        constructor() {
          super(...arguments), (this.id = C++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let s = this.node.animationState.setActive("exit", !t);
          e && !t && s.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let E = { animation: { Feature: V }, exit: { Feature: D } };
    },
    96317: (t, e, i) => {
      i.d(e, { featureDefinitions: () => r });
      let s = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        r = {};
      for (let t in s) r[t] = { isEnabled: (e) => s[t].some((t) => !!e[t]) };
    },
    45859: (t, e, i) => {
      i.d(e, { E: () => b });
      var s = i(33787),
        r = i(89654),
        n = i(75153),
        o = i(20847),
        a = i(86219);
      function l(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return (0, s.a)(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (s, r) => {
            if ("touch" === s.pointerType || (0, n.gD)()) return;
            let o = t.getProps();
            t.animationState &&
              o.whileHover &&
              t.animationState.setActive("whileHover", e);
            let l = o[i];
            l && a.Wi.postRender(() => l(s, r));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class h extends o.L {
        mount() {
          this.unmount = (0, r.z)(l(this.node, !0), l(this.node, !1));
        }
        unmount() {}
      }
      var u = i(23731);
      class d extends o.L {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, r.z)(
            (0, u.E)(this.node.current, "focus", () => this.onFocus()),
            (0, u.E)(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      var c = i(63280);
      let p = (t, e) => !!e && (t === e || p(t, e.parentElement));
      var m = i(69276);
      function f(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, (0, c.Q)(i));
      }
      class v extends o.L {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = m.Z),
            (this.removeEndListeners = m.Z),
            (this.removeAccessibleListeners = m.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                n = (0, s.a)(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: s,
                        globalTapTarget: r,
                      } = this.node.getProps(),
                      n = r || p(this.node.current, t.target) ? i : s;
                    n && a.Wi.update(() => n(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                o = (0, s.a)(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = (0, r.z)(n, o)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = (0, u.E)(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = (0, u.E)(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          f("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && a.Wi.postRender(() => i(t, e));
                          });
                      }
                    )),
                    f("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = (0, u.E)(this.node.current, "blur", () => {
                  this.isPressing &&
                    f("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, r.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: s } = this.node.getProps();
          s &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && a.Wi.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !(0, n.gD)()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && a.Wi.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = (0, s.a)(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = (0, u.E)(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, r.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let g = new WeakMap(),
        y = new WeakMap(),
        x = (t) => {
          let e = g.get(t.target);
          e && e(t);
        },
        P = (t) => {
          t.forEach(x);
        },
        w = { some: 0, all: 1 };
      class T extends o.L {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: s = "some", once: r } = t,
            n = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof s ? s : w[s],
            };
          return (function (t, e, i) {
            let s = (function ({ root: t, ...e }) {
              let i = t || document;
              y.has(i) || y.set(i, {});
              let s = y.get(i),
                r = JSON.stringify(e);
              return (
                s[r] || (s[r] = new IntersectionObserver(P, { root: t, ...e })),
                s[r]
              );
            })(e);
            return (
              g.set(t, i),
              s.observe(t),
              () => {
                g.delete(t), s.unobserve(t);
              }
            );
          })(this.node.current, n, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: s } =
                this.node.getProps(),
              n = e ? i : s;
            n && n(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let b = {
        inView: { Feature: T },
        tap: { Feature: v },
        focus: { Feature: d },
        hover: { Feature: h },
      };
    },
    344: (t, e, i) => {
      i.d(e, { K: () => r });
      var s = i(96317);
      function r(t) {
        for (let e in t)
          s.featureDefinitions[e] = { ...s.featureDefinitions[e], ...t[e] };
      }
    },
    42020: (t, e, i) => {
      i.d(e, { j: () => n });
      var s = i(57290),
        r = i(26019);
      function n(t, { layout: e, layoutId: i }) {
        return (
          r.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!s.P[t] || "opacity" === t))
        );
      }
    },
    33005: (t, e, i) => {
      function s({ top: t, left: e, right: i, bottom: s }) {
        return { x: { min: e, max: i }, y: { min: t, max: s } };
      }
      function r({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function n(t, e) {
        if (!e) return t;
        let i = e({ x: t.left, y: t.top }),
          s = e({ x: t.right, y: t.bottom });
        return { top: i.y, left: i.x, bottom: s.y, right: s.x };
      }
      i.d(e, { d7: () => n, i8: () => s, z2: () => r });
    },
    46711: (t, e, i) => {
      i.d(e, {
        D2: () => c,
        YY: () => h,
        am: () => u,
        o2: () => l,
        q2: () => n,
      });
      var s = i(75004),
        r = i(98107);
      function n(t, e, i) {
        return i + e * (t - i);
      }
      function o(t, e, i, s, r) {
        return void 0 !== r && (t = s + r * (t - s)), s + i * (t - s) + e;
      }
      function a(t, e = 0, i = 1, s, r) {
        (t.min = o(t.min, e, i, s, r)), (t.max = o(t.max, e, i, s, r));
      }
      function l(t, { x: e, y: i }) {
        a(t.x, e.translate, e.scale, e.originPoint),
          a(t.y, i.translate, i.scale, i.originPoint);
      }
      function h(t, e, i, s = !1) {
        let n, o;
        let a = i.length;
        if (a) {
          e.x = e.y = 1;
          for (let h = 0; h < a; h++) {
            o = (n = i[h]).projectionDelta;
            let { visualElement: a } = n.options;
            (!a || !a.props.style || "contents" !== a.props.style.display) &&
              (s &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                c(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
              o && ((e.x *= o.x.scale), (e.y *= o.y.scale), l(t, o)),
              s && (0, r.ud)(n.latestValues) && c(t, n.latestValues));
          }
          e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
            e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
        }
      }
      function u(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function d(t, e, i, r, n = 0.5) {
        let o = (0, s.t)(t.min, t.max, n);
        a(t, e, i, o, r);
      }
      function c(t, e) {
        d(t.x, e.x, e.scaleX, e.scale, e.originX),
          d(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
    },
    58250: (t, e, i) => {
      i.d(e, { dO: () => o, wc: () => r });
      let s = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r = () => ({ x: s(), y: s() }),
        n = () => ({ min: 0, max: 0 }),
        o = () => ({ x: n(), y: n() });
    },
    57290: (t, e, i) => {
      i.d(e, { B: () => r, P: () => s });
      let s = {};
      function r(t) {
        Object.assign(s, t);
      }
    },
    98107: (t, e, i) => {
      function s(t) {
        return void 0 === t || 1 === t;
      }
      function r({ scale: t, scaleX: e, scaleY: i }) {
        return !s(t) || !s(e) || !s(i);
      }
      function n(t) {
        return (
          r(t) ||
          o(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function o(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      i.d(e, { D_: () => o, Lj: () => r, ud: () => n });
    },
    77684: (t, e, i) => {
      i.d(e, { J: () => n, z: () => o });
      var s = i(33005),
        r = i(46711);
      function n(t, e) {
        return (0, s.i8)((0, s.d7)(t.getBoundingClientRect(), e));
      }
      function o(t, e, i) {
        let s = n(t, i),
          { scroll: o } = e;
        return o && ((0, r.am)(s.x, o.offset.x), (0, r.am)(s.y, o.offset.y)), s;
      }
    },
    81292: (t, e, i) => {
      i.d(e, { x: () => Z });
      var s = i(57437),
        r = i(2265),
        n = i(29791);
      let o = (0, r.createContext)({});
      var a = i(67797),
        l = i(9033),
        h = i(36539),
        u = i(65908),
        d = i(78172),
        c = i(17576),
        p = i(86094);
      let m = !1;
      function f() {
        window.MotionHandoffIsComplete = !0;
      }
      var v = i(56859),
        g = i(83795);
      function y(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var x = i(344),
        P = i(77282),
        w = i(5050);
      let T = Symbol.for("motionComponentSymbol");
      var b = i(96317),
        S = i(42860),
        A = i(70545),
        V = i(875),
        C = i(64572),
        D = i(28595),
        E = i(30458),
        M = i(30622),
        R = i(35674),
        k = i(28746);
      let j = (t) => (e, i) => {
        let s = (0, r.useContext)(o),
          n = (0, r.useContext)(a.O),
          l = () =>
            (function (
              {
                applyWillChange: t = !1,
                scrapeMotionValuesFromProps: e,
                createRenderState: i,
                onMount: s,
              },
              r,
              n,
              o,
              a
            ) {
              let l = {
                latestValues: (function (t, e, i, s, r) {
                  var n;
                  let o = {},
                    a = [],
                    l =
                      s &&
                      (null === (n = t.style) || void 0 === n
                        ? void 0
                        : n.willChange) === void 0,
                    h = r(t, {});
                  for (let t in h) o[t] = (0, M.b)(h[t]);
                  let { initial: u, animate: d } = t,
                    c = (0, g.G)(t),
                    p = (0, g.M)(t);
                  e &&
                    p &&
                    !c &&
                    !1 !== t.inherit &&
                    (void 0 === u && (u = e.initial),
                    void 0 === d && (d = e.animate));
                  let m = !!i && !1 === i.initial,
                    f = (m = m || !1 === u) ? d : u;
                  return (
                    f &&
                      "boolean" != typeof f &&
                      !(0, C.H)(f) &&
                      L(t, f, (t, e) => {
                        for (let e in t) {
                          let i = t[e];
                          if (Array.isArray(i)) {
                            let t = m ? i.length - 1 : 0;
                            i = i[t];
                          }
                          null !== i && (o[e] = i);
                        }
                        for (let t in e) o[t] = e[t];
                      }),
                    l &&
                      (d &&
                        !1 !== u &&
                        !(0, C.H)(d) &&
                        L(t, d, (t) => {
                          for (let e in t)
                            !(function (t, e) {
                              let i = (0, R.p)(e);
                              i && (0, k.y4)(t, i);
                            })(a, e);
                        }),
                      a.length && (o.willChange = a.join(","))),
                    o
                  );
                })(r, n, o, !a && t, e),
                renderState: i(),
              };
              return s && (l.mount = (t) => s(r, t, l)), l;
            })(t, e, s, n, i);
        return i ? l() : (0, E.h)(l);
      };
      function L(t, e, i) {
        let s = Array.isArray(e) ? e : [e];
        for (let e = 0; e < s.length; e++) {
          let r = (0, D.o)(t, s[e]);
          if (r) {
            let { transitionEnd: t, transition: e, ...s } = r;
            i(s, t);
          }
        }
      }
      let F = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        B = () => ({ ...F(), attrs: {} });
      var O = i(92622),
        W = i(75969),
        $ = i(86219);
      let I = {
          useVisualState: j({
            scrapeMotionValuesFromProps: V.U,
            createRenderState: B,
            onMount: (t, e, { renderState: i, latestValues: s }) => {
              $.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                $.Wi.render(() => {
                  (0, O.i)(i, s, (0, W.a)(e.tagName), t.transformTemplate),
                    (0, A.K)(e, i);
                });
            },
          }),
        },
        U = {
          useVisualState: j({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: i(11315).U,
            createRenderState: F,
          }),
        };
      var N = i(42020),
        X = i(77599),
        z = i(14651);
      function H(t, e, i) {
        for (let s in e) (0, X.i)(e[s]) || (0, N.j)(s, i) || (t[s] = e[s]);
      }
      let Y = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function K(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          Y.has(t)
        );
      }
      let G = (t) => !K(t);
      try {
        !(function (t) {
          t && (G = (e) => (e.startsWith("on") ? !K(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      function Z(t, e) {
        return function (
          i,
          { forwardMotionProps: A } = { forwardMotionProps: !1 }
        ) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: i,
              useRender: S,
              useVisualState: A,
              Component: V,
            } = t;
            e && (0, x.K)(e);
            let C = (0, r.forwardRef)(function (t, e) {
              var x;
              let T;
              let C = {
                  ...(0, r.useContext)(n._),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, r.useContext)(w.p).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: D } = C,
                E = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if ((0, g.G)(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || (0, v.$)(e) ? e : void 0,
                        animate: (0, v.$)(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, r.useContext)(o));
                  return (0, r.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [y(e), y(i)]
                  );
                })(t),
                M = A(t, D);
              if (!D && P.j) {
                (0, r.useContext)(h.u).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = b.featureDefinitions;
                  if (!e && !i) return {};
                  let s = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? s.MeasureLayout
                        : void 0,
                    ProjectionNode: s.ProjectionNode,
                  };
                })(C);
                (T = t.MeasureLayout),
                  (E.visualElement = (function (t, e, i, s, v) {
                    var g;
                    let { visualElement: y } = (0, r.useContext)(o),
                      x = (0, r.useContext)(h.u),
                      P = (0, r.useContext)(a.O),
                      w = (0, r.useContext)(n._).reducedMotion,
                      T = (0, r.useRef)(void 0);
                    (s = s || x.renderer),
                      !T.current &&
                        s &&
                        (T.current = s(t, {
                          visualState: e,
                          parent: y,
                          props: i,
                          presenceContext: P,
                          blockInitialAnimation: !!P && !1 === P.initial,
                          reducedMotionConfig: w,
                        }));
                    let b = T.current,
                      S = (0, r.useContext)(p.g);
                    b &&
                      !b.projection &&
                      v &&
                      ("html" === b.type || "svg" === b.type) &&
                      (function (t, e, i, s) {
                        let {
                          layoutId: r,
                          layout: n,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: h,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: r,
                            layout: n,
                            alwaysMeasureLayout: !!o || (a && (0, c.I)(a)),
                            visualElement: t,
                            animationType: "string" == typeof n ? n : "both",
                            initialPromotionConfig: s,
                            layoutScroll: l,
                            layoutRoot: h,
                          });
                      })(T.current, i, v, S),
                      (0, r.useInsertionEffect)(() => {
                        b && b.update(i, P);
                      });
                    let A = i[u.M],
                      V = (0, r.useRef)(
                        !!A &&
                          !window.MotionHandoffIsComplete &&
                          (null === (g = window.MotionHasOptimisedAnimation) ||
                          void 0 === g
                            ? void 0
                            : g.call(window, A))
                      );
                    return (
                      (0, l.L)(() => {
                        b &&
                          (b.updateFeatures(),
                          d.g.render(b.render),
                          V.current &&
                            b.animationState &&
                            b.animationState.animateChanges());
                      }),
                      (0, r.useEffect)(() => {
                        b &&
                          (!V.current &&
                            b.animationState &&
                            b.animationState.animateChanges(),
                          (V.current = !1),
                          m || ((m = !0), queueMicrotask(f)));
                      }),
                      b
                    );
                  })(V, M, C, i, t.ProjectionNode));
              }
              return (0, s.jsxs)(o.Provider, {
                value: E,
                children: [
                  T && E.visualElement
                    ? (0, s.jsx)(T, { visualElement: E.visualElement, ...C })
                    : null,
                  S(
                    V,
                    t,
                    ((x = E.visualElement),
                    (0, r.useCallback)(
                      (t) => {
                        t && M.mount && M.mount(t),
                          x && (t ? x.mount(t) : x.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : (0, c.I)(e) && (e.current = t));
                      },
                      [x]
                    )),
                    M,
                    D,
                    E.visualElement
                  ),
                ],
              });
            });
            return (C[T] = V), C;
          })({
            ...((0, S.q)(i) ? I : U),
            preloadedFeatures: t,
            useRender: (function (t = !1) {
              return (e, i, s, { latestValues: n }, o) => {
                let a = (
                    (0, S.q)(e)
                      ? function (t, e, i, s) {
                          let n = (0, r.useMemo)(() => {
                            let i = B();
                            return (
                              (0, O.i)(i, e, (0, W.a)(s), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            H(e, t.style, t), (n.style = { ...e, ...n.style });
                          }
                          return n;
                        }
                      : function (t, e) {
                          let i = {},
                            s = (function (t, e) {
                              let i = t.style || {},
                                s = {};
                              return (
                                H(s, i, t),
                                Object.assign(
                                  s,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, r.useMemo)(() => {
                                      let i = F();
                                      return (
                                        (0, z.r)(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                s
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (s.userSelect =
                                s.WebkitUserSelect =
                                s.WebkitTouchCallout =
                                  "none"),
                              (s.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = s),
                            i
                          );
                        }
                  )(i, n, o, e),
                  l = (function (t, e, i) {
                    let s = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (G(r) ||
                          (!0 === i && K(r)) ||
                          (!e && !K(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (s[r] = t[r]);
                    return s;
                  })(i, "string" == typeof e, t),
                  h = e !== r.Fragment ? { ...l, ...a, ref: s } : {},
                  { children: u } = i,
                  d = (0, r.useMemo)(() => ((0, X.i)(u) ? u.get() : u), [u]);
                return (0, r.createElement)(e, { ...h, children: d });
              };
            })(A),
            createVisualElement: e,
            Component: i,
          });
        };
      }
    },
    56863: (t, e, i) => {
      i.d(e, { c: () => s });
      function s(t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, s) =>
            "create" === s ? t : (e.has(s) || e.set(s, t(s)), e.get(s)),
        });
      }
    },
    78179: (t, e, i) => {
      i.d(e, { E: () => ex });
      var s = i(56863),
        r = i(63063),
        n = i(20847),
        o = i(69276),
        a = i(19047),
        l = i(63280),
        h = i(80557),
        u = i(33787),
        d = i(89654);
      let c = (t, e) => Math.abs(t - e);
      var p = i(83414),
        m = i(86219);
      class f {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = y(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(c(t.x, e.x) ** 2 + c(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: s } = t,
                { timestamp: r } = m.frameData;
              this.history.push({ ...s, timestamp: r });
              let { onStart: n, onMove: o } = this.handlers;
              e ||
                (n && n(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = v(e, this.transformPagePoint)),
                m.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let n = y(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : v(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, n), s && s(t, n);
            }),
            !(0, p.D)(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = s || window);
          let n = v((0, l.Q)(t), this.transformPagePoint),
            { point: o } = n,
            { timestamp: a } = m.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: h } = e;
          h && h(t, y(n, this.history)),
            (this.removeListeners = (0, d.z)(
              (0, u.a)(
                this.contextWindow,
                "pointermove",
                this.handlePointerMove
              ),
              (0, u.a)(this.contextWindow, "pointerup", this.handlePointerUp),
              (0, u.a)(
                this.contextWindow,
                "pointercancel",
                this.handlePointerUp
              )
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, m.Pn)(this.updatePoint);
        }
      }
      function v(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function g(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function y({ point: t }, e) {
        return {
          point: t,
          delta: g(t, x(e)),
          offset: g(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              r = x(t);
            for (
              ;
              i >= 0 &&
              ((s = t[i]), !(r.timestamp - s.timestamp > (0, h.w)(0.1)));

            )
              i--;
            if (!s) return { x: 0, y: 0 };
            let n = (0, h.X)(r.timestamp - s.timestamp);
            if (0 === n) return { x: 0, y: 0 };
            let o = { x: (r.x - s.x) / n, y: (r.y - s.y) / n };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function x(t) {
        return t[t.length - 1];
      }
      var P = i(75153),
        w = i(17576),
        T = i(33217),
        b = i(75004);
      function S(t) {
        return t.max - t.min;
      }
      function A(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = (0, b.t)(e.min, e.max, t.origin)),
          (t.scale = S(i) / S(e)),
          (t.translate = (0, b.t)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function V(t, e, i, s) {
        A(t.x, e.x, i.x, s ? s.originX : void 0),
          A(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function C(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + S(e));
      }
      function D(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + S(e));
      }
      function E(t, e, i) {
        D(t.x, e.x, i.x), D(t.y, e.y, i.y);
      }
      var M = i(51506);
      function R(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function k(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
        );
      }
      function j(t, e, i) {
        return { min: L(t, e), max: L(t, i) };
      }
      function L(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      var F = i(58250);
      function B(t) {
        return [t("x"), t("y")];
      }
      var O = i(77684),
        W = i(33005),
        $ = i(23731),
        I = i(75480),
        U = i(11298);
      let N = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var X = i(3944);
      let z = new WeakMap();
      class H {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, F.dO)()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new f(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor((0, l.Q)(t, "page").point);
              },
              onStart: (t, e) => {
                var i;
                let {
                  drag: s,
                  dragPropagation: r,
                  onDragStart: n,
                } = this.getProps();
                if (
                  s &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = (0, P.fJ)(s)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  B((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (I.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let s = i.layout.layoutBox[t];
                        s && (e = S(s) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  n && m.Wi.postRender(() => n(t, e)),
                  null === (i = this.removeWillChange) ||
                    void 0 === i ||
                    i.call(this),
                  (this.removeWillChange = (0, X.K)(
                    this.visualElement,
                    "transform"
                  ));
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: s,
                  onDirectionLock: r,
                  onDrag: n,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (s && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  n && n(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                B((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              contextWindow: N(this.visualElement),
            }
          );
        }
        stop(t, e) {
          var i;
          null === (i = this.removeWillChange) || void 0 === i || i.call(this);
          let s = this.isDragging;
          if ((this.cancel(), !s)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: n } = this.getProps();
          n && m.Wi.postRender(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !Y(t, s, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            n = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (n = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? (0, b.t)(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = s ? (0, b.t)(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(n, this.constraints[t], this.elastic[t])),
            r.set(n);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            s =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && (0, w.I)(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && s
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: s, right: r }
              ) {
                return { x: R(t.x, i, r), y: R(t.y, e, s) };
              })(s.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: j(t, "left", "right"), y: j(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              s &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              B((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(s.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !(0, w.I)(e)) return !1;
          let s = e.current;
          (0, a.k)(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let n = (0, O.z)(
              s,
              r.root,
              this.visualElement.getTransformPagePoint()
            ),
            o = { x: k((t = r.layout.layoutBox).x, n.x), y: k(t.y, n.y) };
          if (i) {
            let t = i((0, W.z2)(o));
            (this.hasMutatedConstraints = !!t), t && (o = (0, W.i8)(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: r,
              dragSnapToOrigin: n,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            B((o) => {
              if (!Y(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              n && (l = { min: 0, max: 0 });
              let h = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, h);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(
            (0, U.v)(
              t,
              i,
              0,
              e,
              this.visualElement,
              !1,
              (0, X.K)(this.visualElement, t)
            )
          );
        }
        stopAnimation() {
          B((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          B((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          B((e) => {
            let { drag: i } = this.getProps();
            if (!Y(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: i, max: n } = s.layout.layoutBox[e];
              r.set(t[e] - (0, b.t)(i, n, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!(0, w.I)(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          B((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = S(t),
                  r = S(e);
                return (
                  r > s
                    ? (i = (0, T.Y)(e.min, e.max - s, t.min))
                    : s > r && (i = (0, T.Y)(t.min, t.max - r, e.min)),
                  (0, M.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            B((e) => {
              if (!Y(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: n } = this.constraints[e];
              i.set((0, b.t)(r, n, s[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          z.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = (0, u.a)(t, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              (0, w.I)(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: s } = this.visualElement,
            r = s.addEventListener("measure", i);
          s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
            m.Wi.read(i);
          let n = (0, $.E)(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = s.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (B((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), e(), r(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: r = !1,
              dragElastic: n = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: r,
            dragElastic: n,
            dragMomentum: o,
          };
        }
      }
      function Y(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class K extends n.L {
        constructor(t) {
          super(t),
            (this.removeGroupControls = o.Z),
            (this.removeListeners = o.Z),
            (this.controls = new H(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || o.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let G = (t) => (e, i) => {
        t && m.Wi.postRender(() => t(e, i));
      };
      class Z extends n.L {
        constructor() {
          super(...arguments), (this.removePointerDownListener = o.Z);
        }
        onPointerDown(t) {
          this.session = new f(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: N(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: s,
          } = this.node.getProps();
          return {
            onSessionStart: G(t),
            onStart: G(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, s && m.Wi.postRender(() => s(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = (0, u.a)(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var q = i(57437),
        _ = i(2265),
        J = i(67797),
        Q = i(5050),
        tt = i(86094);
      let te = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ti(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let ts = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!I.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = ti(t, e.target.x),
            s = ti(t, e.target.y);
          return `${i}% ${s}%`;
        },
      };
      var tr = i(83646),
        tn = i(57290),
        to = i(78172);
      class ta extends _.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: r } = t;
          (0, tn.B)(th),
            r &&
              (e.group && e.group.add(r),
              i && i.register && s && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (te.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: r,
            } = this.props,
            n = i.projection;
          return (
            n &&
              ((n.isPresent = r),
              s || t.layoutDependency !== e || void 0 === e
                ? n.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? n.promote()
                  : n.relegate() ||
                    m.Wi.postRender(() => {
                      let t = n.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            to.g.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function tl(t) {
        let [e, i] = (function () {
            let t = (0, _.useContext)(J.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: s } = t,
              r = (0, _.useId)();
            (0, _.useEffect)(() => s(r), []);
            let n = (0, _.useCallback)(() => i && i(r), [r, i]);
            return !e && i ? [!1, n] : [!0];
          })(),
          s = (0, _.useContext)(Q.p);
        return (0, q.jsx)(ta, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, _.useContext)(tt.g),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let th = {
        borderRadius: {
          ...ts,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: ts,
        borderTopRightRadius: ts,
        borderBottomLeftRadius: ts,
        borderBottomRightRadius: ts,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let s = tr.P.parse(t);
            if (s.length > 5) return t;
            let r = tr.P.createTransformer(t),
              n = "number" != typeof s[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (s[0 + n] /= o), (s[1 + n] /= a);
            let l = (0, b.t)(o, a, 0.5);
            return (
              "number" == typeof s[2 + n] && (s[2 + n] /= l),
              "number" == typeof s[3 + n] && (s[3 + n] /= l),
              r(s)
            );
          },
        },
      };
      var tu = i(72428),
        td = i(68536);
      let tc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tp = tc.length,
        tm = (t) => ("string" == typeof t ? parseFloat(t) : t),
        tf = (t) => "number" == typeof t || I.px.test(t);
      function tv(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let tg = tx(0, 0.5, td.Bn),
        ty = tx(0.5, 0.95, o.Z);
      function tx(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i((0, T.Y)(t, e, s)));
      }
      function tP(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function tw(t, e) {
        tP(t.x, e.x), tP(t.y, e.y);
      }
      function tT(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      var tb = i(46711);
      function tS(t, e, i, s, r) {
        return (
          (t -= e),
          (t = (0, tb.q2)(t, 1 / i, s)),
          void 0 !== r && (t = (0, tb.q2)(t, 1 / r, s)),
          t
        );
      }
      function tA(t, e, [i, s, r], n, o) {
        !(function (t, e = 0, i = 1, s = 0.5, r, n = t, o = t) {
          if (
            (I.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, b.t)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, b.t)(n.min, n.max, s);
          t === n && (a -= e),
            (t.min = tS(t.min, e, i, a, r)),
            (t.max = tS(t.max, e, i, a, r));
        })(t, e[i], e[s], e[r], e.scale, n, o);
      }
      let tV = ["x", "scaleX", "originX"],
        tC = ["y", "scaleY", "originY"];
      function tD(t, e, i, s) {
        tA(t.x, e, tV, i ? i.x : void 0, s ? s.x : void 0),
          tA(t.y, e, tC, i ? i.y : void 0, s ? s.y : void 0);
      }
      var tE = i(69792);
      function tM(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function tR(t) {
        return tM(t.x) && tM(t.y);
      }
      function tk(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function tj(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function tL(t, e) {
        return tj(t.x, e.x) && tj(t.y, e.y);
      }
      function tF(t) {
        return S(t.x) / S(t.y);
      }
      function tB(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      var tO = i(28746);
      class tW {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, tO.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, tO.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      var t$ = i(98107);
      let tI = (t, e) => t.depth - e.depth;
      class tU {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, tO.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, tO.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(tI),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var tN = i(30622),
        tX = i(59993),
        tz = i(20804),
        tH = i(77599),
        tY = i(2087);
      let tK = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        tG = "undefined" != typeof window && void 0 !== window.MotionDebug,
        tZ = ["", "X", "Y", "Z"],
        tq = { visibility: "hidden" },
        t_ = 0;
      function tJ(t, e, i, s) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
      }
      function tQ({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = t_++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  tG &&
                    (tK.totalNodes =
                      tK.resolvedTargetDeltas =
                      tK.recalculatedProjection =
                        0),
                  this.nodes.forEach(t5),
                  this.nodes.forEach(t4),
                  this.nodes.forEach(et),
                  this.nodes.forEach(t2),
                  tG && window.MotionDebug.record(tK);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new tU());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new tu.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: s, layout: r, visualElement: n } = this.options;
            if (
              (n && !n.current && n.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || s) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let s = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = tX.X.now(),
                      s = ({ timestamp: e }) => {
                        let r = e - i;
                        r >= 250 && ((0, m.Pn)(s), t(r - 250));
                      };
                    return m.Wi.read(s, !0), () => (0, m.Pn)(s);
                  })(s, 0)),
                  te.hasAnimatedSinceResize &&
                    ((te.hasAnimatedSinceResize = !1), this.nodes.forEach(t8));
              });
            }
            s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                n &&
                (s || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: s,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        n.getDefaultTransition() ||
                        eo,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = n.getProps(),
                      l = !this.targetLayout || !tL(this.targetLayout, s) || i,
                      h = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      h ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, h);
                      let e = {
                        ...(0, tE.e)(r, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (n.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || t8(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, m.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(ee),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let s = (0, tY.s)(i);
                  if (window.MotionHasOptimisedAnimation(s, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      s,
                      "transform",
                      m.Wi,
                      !(t || i)
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s
              ? s(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(t9);
              return;
            }
            this.isUpdating || this.nodes.forEach(t6),
              (this.isUpdating = !1),
              this.nodes.forEach(t7),
              this.nodes.forEach(t0),
              this.nodes.forEach(t1),
              this.clearAllSnapshots();
            let t = tX.X.now();
            (m.frameData.delta = (0, M.u)(
              0,
              1e3 / 60,
              t - m.frameData.timestamp
            )),
              (m.frameData.timestamp = t),
              (m.frameData.isProcessing = !0),
              m.S6.update.process(m.frameData),
              m.S6.preRender.process(m.frameData),
              m.S6.render.process(m.frameData),
              (m.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), to.g.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(t3), this.sharedNodes.forEach(ei);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              m.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            m.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, F.dO)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = s(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !tR(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, "") : void 0,
              n = s !== this.prevTransformTemplateValue;
            t &&
              (e || (0, t$.ud)(this.latestValues) || n) &&
              (r(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              eh((e = s).x),
              eh(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return (0, F.dO)();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(ed)
              )
            ) {
              let { scroll: t } = this.root;
              t && ((0, tb.am)(i.x, t.offset.x), (0, tb.am)(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = (0, F.dO)();
            if (
              (tw(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let s = this.path[e],
                { scroll: r, options: n } = s;
              s !== this.root &&
                r &&
                n.layoutScroll &&
                (r.wasRoot && tw(i, t),
                (0, tb.am)(i.x, r.offset.x),
                (0, tb.am)(i.y, r.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = (0, F.dO)();
            tw(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let s = this.path[t];
              !e &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                (0, tb.D2)(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                (0, t$.ud)(s.latestValues) && (0, tb.D2)(i, s.latestValues);
            }
            return (
              (0, t$.ud)(this.latestValues) && (0, tb.D2)(i, this.latestValues),
              i
            );
          }
          removeTransform(t) {
            let e = (0, F.dO)();
            tw(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !(0, t$.ud)(i.latestValues)) continue;
              (0, t$.Lj)(i.latestValues) && i.updateSnapshot();
              let s = (0, F.dO)();
              tw(s, i.measurePageBox()),
                tD(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  s
                );
            }
            return (0, t$.ud)(this.latestValues) && tD(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                m.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, s, r;
            let n = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = n.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = n.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== n;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = m.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, F.dO)()),
                    (this.relativeTargetOrigin = (0, F.dO)()),
                    E(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    tw(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, F.dO)()),
                    (this.targetWithTransforms = (0, F.dO)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (s = this.relativeTarget),
                      (r = this.relativeParent.target),
                      C(i.x, s.x, r.x),
                      C(i.y, s.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : tw(this.target, this.layout.layoutBox),
                      (0, tb.o2)(this.target, this.targetDelta))
                    : tw(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, F.dO)()),
                      (this.relativeTargetOrigin = (0, F.dO)()),
                      E(this.relativeTargetOrigin, this.target, t.target),
                      tw(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                tG && tK.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, t$.Lj)(this.parent.latestValues) ||
              (0, t$.D_)(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              s = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (s = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (s = !1),
              this.resolvedRelativeTargetAt === m.frameData.timestamp &&
                (s = !1),
              s)
            )
              return;
            let { layout: r, layoutId: n } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || n))
            )
              return;
            tw(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            (0, tb.YY)(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = (0, F.dO)()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (tT(this.prevProjectionDelta.x, this.projectionDelta.x),
                tT(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              V(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                tB(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                tB(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              tG && tK.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = (0, F.wc)()),
              (this.projectionDelta = (0, F.wc)()),
              (this.projectionDeltaWithTransform = (0, F.wc)());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let s = this.snapshot,
              r = s ? s.latestValues : {},
              n = { ...this.latestValues },
              o = (0, F.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = (0, F.dO)(),
              l =
                (s ? s.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              h = this.getStack(),
              u = !h || h.members.length <= 1,
              d = !!(
                l &&
                !u &&
                !0 === this.options.crossfade &&
                !this.path.some(en)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let s = e / 1e3;
                if (
                  (es(o.x, t.x, s),
                  es(o.y, t.y, s),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var h, c, p, m;
                  E(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    er(p.x, m.x, a.x, s),
                    er(p.y, m.y, a.y, s),
                    i &&
                      ((h = this.relativeTarget),
                      (c = i),
                      tk(h.x, c.x) && tk(h.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = (0, F.dO)()),
                    tw(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = n),
                  (function (t, e, i, s, r, n) {
                    r
                      ? ((t.opacity = (0, b.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          tg(s)
                        )),
                        (t.opacityExit = (0, b.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          ty(s)
                        )))
                      : n &&
                        (t.opacity = (0, b.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s
                        ));
                    for (let r = 0; r < tp; r++) {
                      let n = `border${tc[r]}Radius`,
                        o = tv(e, n),
                        a = tv(i, n);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || tf(o) === tf(a)
                          ? ((t[n] = Math.max((0, b.t)(tm(o), tm(a), s), 0)),
                            (I.aQ.test(a) || I.aQ.test(o)) && (t[n] += "%"))
                          : (t[n] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, b.t)(e.rotate || 0, i.rotate || 0, s));
                  })(n, r, this.latestValues, s, d, u)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, m.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = m.Wi.update(() => {
                (te.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let s = (0, tH.i)(0) ? 0 : (0, tz.BX)(0);
                    return s.start((0, U.v)("", s, 1e3, i)), s.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: s,
                latestValues: r,
              } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                eu(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox
                )
              ) {
                i = this.target || (0, F.dO)();
                let e = S(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let s = S(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              tw(e, i),
                (0, tb.D2)(e, r),
                V(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new tW()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let s = this.getStack();
            s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let s = {};
            i.z && tJ("z", t, s, this.animationValues);
            for (let e = 0; e < tZ.length; e++)
              tJ(`rotate${tZ[e]}`, t, s, this.animationValues),
                tJ(`skew${tZ[e]}`, t, s, this.animationValues);
            for (let e in (t.render(), s))
              t.setStaticValue(e, s[e]),
                this.animationValues && (this.animationValues[e] = s[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return tq;
            let s = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (s.opacity = ""),
                (s.pointerEvents =
                  (0, tN.b)(null == t ? void 0 : t.pointerEvents) || ""),
                (s.transform = r ? r(this.latestValues, "") : "none"),
                s
              );
            let n = this.getLead();
            if (!this.projectionDelta || !this.layout || !n.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    (0, tN.b)(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, t$.ud)(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = n.animationValues || n.latestValues;
            this.applyTransformsToTarget(),
              (s.transform = (function (t, e, i) {
                let s = "",
                  r = t.x.translate / e.x,
                  n = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || n || o) &&
                    (s = `translate3d(${r}px, ${n}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: n,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (s = `perspective(${t}px) ${s}`),
                    e && (s += `rotate(${e}deg) `),
                    r && (s += `rotateX(${r}deg) `),
                    n && (s += `rotateY(${n}deg) `),
                    o && (s += `skewX(${o}deg) `),
                    a && (s += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`),
                  s || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (s.transform = r(o, s.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((s.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            n.animationValues
              ? (s.opacity =
                  n === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (s.opacity =
                  n === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            tn.P)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = tn.P[t],
                r = "none" === s.transform ? o[t] : e(o[t], n);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) s[i[e]] = r;
              } else s[t] = r;
            }
            return (
              this.options.layoutId &&
                (s.pointerEvents =
                  n === this
                    ? (0, tN.b)(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              s
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(t9),
              this.root.sharedNodes.clear();
          }
        };
      }
      function t0(t) {
        t.updateLayout();
      }
      function t1(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: s } = t.layout,
            { animationType: r } = t.options,
            n = i.source !== t.layout.source;
          "size" === r
            ? B((t) => {
                let s = n ? i.measuredBox[t] : i.layoutBox[t],
                  r = S(s);
                (s.min = e[t].min), (s.max = s.min + r);
              })
            : eu(r, i.layoutBox, e) &&
              B((s) => {
                let r = n ? i.measuredBox[s] : i.layoutBox[s],
                  o = S(e[s]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + o));
              });
          let o = (0, F.wc)();
          V(o, e, i.layoutBox);
          let a = (0, F.wc)();
          n
            ? V(a, t.applyTransform(s, !0), i.measuredBox)
            : V(a, e, i.layoutBox);
          let l = !tR(o),
            h = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: r, layout: n } = s;
              if (r && n) {
                let o = (0, F.dO)();
                E(o, i.layoutBox, r.layoutBox);
                let a = (0, F.dO)();
                E(a, e, n.layoutBox),
                  tL(o, a) || (h = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = s));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function t5(t) {
        tG && tK.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function t2(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function t3(t) {
        t.clearSnapshot();
      }
      function t9(t) {
        t.clearMeasurements();
      }
      function t6(t) {
        t.isLayoutDirty = !1;
      }
      function t7(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function t8(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function t4(t) {
        t.resolveTargetDelta();
      }
      function et(t) {
        t.calcProjection();
      }
      function ee(t) {
        t.resetSkewAndRotation();
      }
      function ei(t) {
        t.removeLeadSnapshot();
      }
      function es(t, e, i) {
        (t.translate = (0, b.t)(e.translate, 0, i)),
          (t.scale = (0, b.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function er(t, e, i, s) {
        (t.min = (0, b.t)(e.min, i.min, s)),
          (t.max = (0, b.t)(e.max, i.max, s));
      }
      function en(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let eo = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ea = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        el = ea("applewebkit/") && !ea("chrome/") ? Math.round : o.Z;
      function eh(t) {
        (t.min = el(t.min)), (t.max = el(t.max));
      }
      function eu(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(tF(e) - tF(i))))
        );
      }
      function ed(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let ec = tQ({
          attachResizeListener: (t, e) => (0, $.E)(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ep = { current: void 0 },
        em = tQ({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!ep.current) {
              let t = new ec({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ep.current = t);
            }
            return ep.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var ef = i(45859),
        ev = i(81292),
        eg = i(33302);
      let ey = (0, ev.x)(
          {
            ...r.s,
            ...ef.E,
            pan: { Feature: Z },
            drag: { Feature: K, ProjectionNode: em, MeasureLayout: tl },
            layout: { ProjectionNode: em, MeasureLayout: tl },
          },
          eg.b
        ),
        ex = (0, s.c)(ey);
    },
    63078: (t, e, i) => {
      i.d(e, { s: () => m });
      var s = i(99102),
        r = i(19047),
        n = i(84386),
        o = i(61534);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = i(35014),
        h = i(23769),
        u = i(23653),
        d = i(83646),
        c = i(66450);
      let p = new Set(["auto", "none", "0"]);
      class m extends u.e {
        constructor(t, e, i, s, r) {
          super(t, e, i, s, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let s = t[i];
            if ("string" == typeof s && ((s = s.trim()), (0, o.t)(s))) {
              let l = (function t(e, i, s = 1) {
                (0, r.k)(
                  s <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [l, h] = (function (t) {
                  let e = a.exec(t);
                  if (!e) return [,];
                  let [, i, s, r] = e;
                  return [`--${null != i ? i : s}`, r];
                })(e);
                if (!l) return;
                let u = window.getComputedStyle(i).getPropertyValue(l);
                if (u) {
                  let t = u.trim();
                  return (0, n.P)(t) ? parseFloat(t) : t;
                }
                return (0, o.t)(h) ? t(h, i, s + 1) : h;
              })(s, e.current);
              void 0 !== l && (t[i] = l),
                i === t.length - 1 && (this.finalKeyframe = s);
            }
          }
          if ((this.resolveNoneKeyframes(), !l.z2.has(i) || 2 !== t.length))
            return;
          let [s, u] = t,
            d = (0, h.C)(s),
            c = (0, h.C)(u);
          if (d !== c) {
            if ((0, l.mP)(d) && (0, l.mP)(c))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            ("number" == typeof (r = t[e])
              ? 0 === r
              : null === r || "none" === r || "0" === r || (0, s.W)(r)) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let s,
                r = 0;
              for (; r < t.length && !s; ) {
                let e = t[r];
                "string" == typeof e &&
                  !p.has(e) &&
                  (0, d.V)(e).values.length &&
                  (s = t[r]),
                  r++;
              }
              if (s && i) for (let r of e) t[r] = (0, c.T)(i, s);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = l.lw[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let s = e[e.length - 1];
          void 0 !== s && t.getValue(i, s).jump(s, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: s } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let n = s.length - 1,
            o = s[n];
          (s[n] = l.lw[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    33302: (t, e, i) => {
      i.d(e, { b: () => Z });
      var s = i(2265),
        r = i(14651),
        n = i(61534),
        o = i(26019),
        a = i(11315),
        l = i(39979),
        h = i(40781),
        u = i(77684),
        d = i(77282);
      let c = { current: null },
        p = { current: !1 };
      var m = i(72428),
        f = i(20804),
        v = i(77599),
        g = i(83795),
        y = i(56859),
        x = i(28595),
        P = i(96317),
        w = i(53552);
      let T = new WeakMap();
      var b = i(23653),
        S = i(84386),
        A = i(99102),
        V = i(50146),
        C = i(83646),
        D = i(23769),
        E = i(12649);
      let M = [...D.$, V.$, C.P],
        R = (t) => M.find((0, E.l)(t));
      var k = i(66450),
        j = i(58250),
        L = i(86219);
      let F = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        B = w.V.length;
      class O {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: s,
            blockInitialAnimation: r,
            visualState: n,
          },
          o = {}
        ) {
          (this.applyWillChange = !1),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = b.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              (this.isRenderScheduled = !1),
                this.current &&
                  (this.triggerBuild(),
                  this.renderInstance(
                    this.current,
                    this.renderState,
                    this.props.style,
                    this.projection
                  ));
            }),
            (this.isRenderScheduled = !1),
            (this.scheduleRender = () => {
              this.isRenderScheduled ||
                ((this.isRenderScheduled = !0),
                L.Wi.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = n;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = (0, g.G)(e)),
            (this.isVariantNode = (0, g.M)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: h, ...u } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in u) {
            let e = u[t];
            void 0 !== a[t] && (0, v.i)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            T.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            p.current ||
              (function () {
                if (((p.current = !0), d.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (c.current = t.matches);
                    t.addListener(e), e();
                  } else c.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || c.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (T.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, L.Pn)(this.notifyUpdate),
          (0, L.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let s = o.G.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && L.Wi.preRender(this.notifyUpdate),
                s && this.projection && (this.projection.isTransformDirty = !0);
            }),
            n = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), n(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in P.featureDefinitions) {
            let e = P.featureDefinitions[t];
            if (!e) continue;
            let { isEnabled: i, Feature: s } = e;
            if (
              (!this.features[t] &&
                s &&
                i(this.props) &&
                (this.features[t] = new s(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, j.dO)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < F.length; e++) {
            let i = F[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let s in e) {
              let r = e[s],
                n = i[s];
              if ((0, v.i)(r)) t.addValue(s, r);
              else if ((0, v.i)(n)) t.addValue(s, (0, f.BX)(r, { owner: t }));
              else if (n !== r) {
                if (t.hasValue(s)) {
                  let e = t.getValue(s);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(s);
                  t.addValue(s, (0, f.BX)(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let s in i) void 0 === e[s] && t.removeValue(s);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < B; t++) {
            let i = w.V[t],
              s = this.props[i];
            ((0, y.$)(s) || !1 === s) && (e[i] = s);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, f.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let s =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != s &&
              ("string" == typeof s && ((0, S.P)(s) || (0, A.W)(s))
                ? (s = parseFloat(s))
                : !R(s) && C.P.test(e) && (s = (0, k.T)(t, e)),
              this.setBaseTarget(t, (0, v.i)(s) ? s.get() : s)),
            (0, v.i)(s) ? s.get() : s
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: s } = this.props;
          if ("string" == typeof s || "object" == typeof s) {
            let r = (0, x.o)(
              this.props,
              s,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (i = r[t]);
          }
          if (s && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, v.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new m.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var W = i(63078);
      class $ extends O {
        constructor() {
          super(...arguments), (this.KeyframeResolver = W.s);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class I extends $ {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.applyWillChange = !0),
            (this.renderInstance = l.N);
        }
        readValueFromInstance(t, e) {
          if (o.G.has(e)) {
            let t = (0, h.A)(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              s = ((0, n.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, u.J)(t, e);
        }
        build(t, e, i) {
          (0, r.r)(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, a.U)(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, v.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      var U = i(875),
        N = i(92622),
        X = i(51580),
        z = i(82394),
        H = i(70545),
        Y = i(75969);
      class K extends $ {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = j.dO);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (o.G.has(e)) {
            let t = (0, h.A)(e);
            return (t && t.default) || 0;
          }
          return (e = z.s.has(e) ? e : (0, X.D)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, U.U)(t, e, i);
        }
        build(t, e, i) {
          (0, N.i)(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, s) {
          (0, H.K)(t, e, i, s);
        }
        mount(t) {
          (this.isSVGTag = (0, Y.a)(t.tagName)), super.mount(t);
        }
      }
      var G = i(42860);
      let Z = (t, e) =>
        (0, G.q)(t)
          ? new K(e)
          : new I(e, { allowProjection: t !== s.Fragment });
    },
    51580: (t, e, i) => {
      i.d(e, { D: () => s });
      let s = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    61534: (t, e, i) => {
      i.d(e, { f: () => r, t: () => o });
      let s = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = s("--"),
        n = s("var(--"),
        o = (t) => !!n(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    42860: (t, e, i) => {
      i.d(e, { q: () => r });
      let s = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function r(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (s.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
    },
    35014: (t, e, i) => {
      i.d(e, { Ei: () => c, lw: () => p, mP: () => a, z2: () => o });
      var s = i(26019),
        r = i(40783),
        n = i(75480);
      let o = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        a = (t) => t === r.Rx || t === n.px,
        l = (t, e) => parseFloat(t.split(", ")[e]),
        h =
          (t, e) =>
          (i, { transform: s }) => {
            if ("none" === s || !s) return 0;
            let r = s.match(/^matrix3d\((.+)\)$/u);
            if (r) return l(r[1], e);
            {
              let e = s.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        u = new Set(["x", "y", "z"]),
        d = s._.filter((t) => !u.has(t));
      function c(t) {
        let e = [];
        return (
          d.forEach((i) => {
            let s = t.getValue(i);
            void 0 !== s &&
              (e.push([i, s.get()]), s.set(i.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let p = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: h(4, 13),
        y: h(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    66450: (t, e, i) => {
      i.d(e, { T: () => o });
      var s = i(83646),
        r = i(24913),
        n = i(40781);
      function o(t, e) {
        let i = (0, n.A)(t);
        return (
          i !== r.h && (i = s.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
    },
    40781: (t, e, i) => {
      i.d(e, { A: () => o });
      var s = i(50146),
        r = i(24913);
      let n = {
          ...i(37755).j,
          color: s.$,
          backgroundColor: s.$,
          outlineColor: s.$,
          fill: s.$,
          stroke: s.$,
          borderColor: s.$,
          borderTopColor: s.$,
          borderRightColor: s.$,
          borderBottomColor: s.$,
          borderLeftColor: s.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        o = (t) => n[t];
    },
    23769: (t, e, i) => {
      i.d(e, { $: () => o, C: () => a });
      var s = i(40783),
        r = i(75480),
        n = i(12649);
      let o = [
          s.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, n.l)(t));
    },
    37755: (t, e, i) => {
      i.d(e, { j: () => o });
      var s = i(40783),
        r = i(75480);
      let n = { ...s.Rx, transform: Math.round },
        o = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: s.bA,
          scaleX: s.bA,
          scaleY: s.bA,
          scaleZ: s.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: s.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: n,
          backgroundPositionX: r.px,
          backgroundPositionY: r.px,
          fillOpacity: s.Fq,
          strokeOpacity: s.Fq,
          numOctaves: n,
        };
    },
    12649: (t, e, i) => {
      i.d(e, { l: () => s });
      let s = (t) => (e) => e.test(t);
    },
    14651: (t, e, i) => {
      i.d(e, { r: () => h });
      var s = i(26019);
      let r = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var n = i(37755);
      let o = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        a = s._.length;
      var l = i(61534);
      function h(t, e, i) {
        let { style: h, vars: u, transformOrigin: d } = t,
          c = !1,
          p = !1;
        for (let t in e) {
          let i = e[t];
          if (s.G.has(t)) {
            c = !0;
            continue;
          }
          if ((0, l.f)(t)) {
            u[t] = i;
            continue;
          }
          {
            let e = r(i, n.j[t]);
            t.startsWith("origin") ? ((p = !0), (d[t] = e)) : (h[t] = e);
          }
        }
        if (
          (!e.transform &&
            (c || i
              ? (h.transform = (function (t, e, i) {
                  let l = "",
                    h = !0;
                  for (let u = 0; u < a; u++) {
                    let a = s._[u],
                      d = t[a];
                    if (void 0 === d) continue;
                    let c = !0;
                    if (
                      !(c =
                        "number" == typeof d
                          ? d === (a.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(d)) ||
                      i
                    ) {
                      let t = r(d, n.j[a]);
                      if (!c) {
                        h = !1;
                        let e = o[a] || a;
                        l += `${e}(${t}) `;
                      }
                      i && (e[a] = t);
                    }
                  }
                  return (
                    (l = l.trim()),
                    i ? (l = i(e, h ? "" : l)) : h && (l = "none"),
                    l
                  );
                })(e, t.transform, i))
              : h.transform && (h.transform = "none")),
          p)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = d;
          h.transformOrigin = `${t} ${e} ${i}`;
        }
      }
    },
    39979: (t, e, i) => {
      i.d(e, { N: () => s });
      function s(t, { style: e, vars: i }, s, r) {
        for (let n in (Object.assign(t.style, e, r && r.getProjectionStyles(s)),
        i))
          t.style.setProperty(n, i[n]);
      }
    },
    11315: (t, e, i) => {
      i.d(e, { U: () => n });
      var s = i(42020),
        r = i(77599);
      function n(t, e, i) {
        var n;
        let { style: o } = t,
          a = {};
        for (let l in o)
          ((0, r.i)(o[l]) ||
            (e.style && (0, r.i)(e.style[l])) ||
            (0, s.j)(l, t) ||
            (null === (n = null == i ? void 0 : i.getValue(l)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (a[l] = o[l]);
        return (
          i && o && "string" == typeof o.willChange && (i.applyWillChange = !1),
          a
        );
      }
    },
    26019: (t, e, i) => {
      i.d(e, { G: () => r, _: () => s });
      let s = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        r = new Set(s);
    },
    92622: (t, e, i) => {
      i.d(e, { i: () => l });
      var s = i(14651),
        r = i(75480);
      function n(t, e, i) {
        return "string" == typeof t ? t : r.px.transform(e + i * t);
      }
      let o = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        a = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function l(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: l,
          originX: h,
          originY: u,
          pathLength: d,
          pathSpacing: c = 1,
          pathOffset: p = 0,
          ...m
        },
        f,
        v
      ) {
        if (((0, s.r)(t, m, v), f)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: g, style: y, dimensions: x } = t;
        g.transform && (x && (y.transform = g.transform), delete g.transform),
          x &&
            (void 0 !== h || void 0 !== u || y.transform) &&
            (y.transformOrigin = (function (t, e, i) {
              let s = n(e, t.x, t.width),
                r = n(i, t.y, t.height);
              return `${s} ${r}`;
            })(x, void 0 !== h ? h : 0.5, void 0 !== u ? u : 0.5)),
          void 0 !== e && (g.x = e),
          void 0 !== i && (g.y = i),
          void 0 !== l && (g.scale = l),
          void 0 !== d &&
            (function (t, e, i = 1, s = 0, n = !0) {
              t.pathLength = 1;
              let l = n ? o : a;
              t[l.offset] = r.px.transform(-s);
              let h = r.px.transform(e),
                u = r.px.transform(i);
              t[l.array] = `${h} ${u}`;
            })(g, d, c, p, !1);
      }
    },
    82394: (t, e, i) => {
      i.d(e, { s: () => s });
      let s = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    75969: (t, e, i) => {
      i.d(e, { a: () => s });
      let s = (t) => "string" == typeof t && "svg" === t.toLowerCase();
    },
    70545: (t, e, i) => {
      i.d(e, { K: () => o });
      var s = i(51580),
        r = i(39979),
        n = i(82394);
      function o(t, e, i, o) {
        for (let i in ((0, r.N)(t, e, void 0, o), e.attrs))
          t.setAttribute(n.s.has(i) ? i : (0, s.D)(i), e.attrs[i]);
      }
    },
    875: (t, e, i) => {
      i.d(e, { U: () => o });
      var s = i(77599),
        r = i(11315),
        n = i(26019);
      function o(t, e, i) {
        let o = (0, r.U)(t, e, i);
        for (let i in t)
          ((0, s.i)(t[i]) || (0, s.i)(e[i])) &&
            (o[
              -1 !== n._.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return o;
      }
    },
    23653: (t, e, i) => {
      i.d(e, { e: () => d, m: () => u });
      var s = i(35014),
        r = i(86219);
      let n = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(n).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (0, s.Ei)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var s;
                  null === (s = t.getValue(e)) || void 0 === s || s.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), n.forEach((t) => t.complete()), n.clear();
      }
      function h() {
        n.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function u() {
        h(), l();
      }
      class d {
        constructor(t, e, i, s, r, n = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = s),
            (this.element = r),
            (this.isAsync = n);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (n.add(this),
                o || ((o = !0), r.Wi.read(h), r.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: s,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == s ? void 0 : s.get(),
                  n = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let s = i.readValue(e, n);
                  null != s && (t[0] = s);
                }
                void 0 === t[0] && (t[0] = n), s && void 0 === r && s.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            n.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), n.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    83795: (t, e, i) => {
      i.d(e, { G: () => o, M: () => a });
      var s = i(64572),
        r = i(56859),
        n = i(53552);
      function o(t) {
        return (0, s.H)(t.animate) || n.V.some((e) => (0, r.$)(t[e]));
      }
      function a(t) {
        return !!(o(t) || t.variants);
      }
    },
    56859: (t, e, i) => {
      i.d(e, { $: () => s });
      function s(t) {
        return "string" == typeof t || Array.isArray(t);
      }
    },
    28595: (t, e, i) => {
      function s(t, e, i, s) {
        if (
          "function" == typeof e ||
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [r, n] = (function (t) {
            let e = [{}, {}];
            return (
              null == t ||
                t.values.forEach((t, i) => {
                  (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
                }),
              e
            );
          })(s);
          e = e(void 0 !== i ? i : t.custom, r, n);
        }
        return e;
      }
      i.d(e, { o: () => s });
    },
    53552: (t, e, i) => {
      i.d(e, { V: () => r, e: () => s });
      let s = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        r = ["initial", ...s];
    },
    565: (t, e, i) => {
      i.d(e, { c: () => s });
      let s = { skipAnimations: !1, useManualTiming: !1 };
    },
    28746: (t, e, i) => {
      function s(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, { cl: () => r, y4: () => s });
    },
    51506: (t, e, i) => {
      i.d(e, { u: () => s });
      let s = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    19047: (t, e, i) => {
      i.d(e, { K: () => r, k: () => n });
      var s = i(69276);
      let r = s.Z,
        n = s.Z;
    },
    77282: (t, e, i) => {
      i.d(e, { j: () => s });
      let s = "undefined" != typeof window;
    },
    84386: (t, e, i) => {
      i.d(e, { P: () => s });
      let s = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    17576: (t, e, i) => {
      i.d(e, { I: () => s });
      function s(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
    },
    99102: (t, e, i) => {
      i.d(e, { W: () => s });
      let s = (t) => /^0[^.\s]+$/u.test(t);
    },
    75004: (t, e, i) => {
      i.d(e, { t: () => s });
      let s = (t, e, i) => t + (e - t) * i;
    },
    69276: (t, e, i) => {
      i.d(e, { Z: () => s });
      let s = (t) => t;
    },
    89654: (t, e, i) => {
      i.d(e, { z: () => r });
      let s = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(s);
    },
    33217: (t, e, i) => {
      i.d(e, { Y: () => s });
      let s = (t, e, i) => {
        let s = e - t;
        return 0 === s ? 1 : (i - t) / s;
      };
    },
    99155: (t, e, i) => {
      i.d(e, { Y: () => n, p: () => r });
      var s = i(66925);
      let r = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        n = (t) => ((0, s.C)(t) ? t[t.length - 1] || 0 : t);
    },
    72428: (t, e, i) => {
      i.d(e, { L: () => r });
      var s = i(28746);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, s.y4)(this.subscriptions, t),
            () => (0, s.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let s = this.subscriptions.length;
          if (s) {
            if (1 === s) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < s; r++) {
                let s = this.subscriptions[r];
                s && s(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    80557: (t, e, i) => {
      i.d(e, { X: () => r, w: () => s });
      let s = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    30458: (t, e, i) => {
      i.d(e, { h: () => r });
      var s = i(2265);
      function r(t) {
        let e = (0, s.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    28733: (t, e, i) => {
      i.d(e, { Y: () => n });
      var s = i(2265);
      i(19047);
      let r = { some: 0, all: 1 };
      function n(t, { root: e, margin: i, amount: o, once: a = !1 } = {}) {
        let [l, h] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            if (!t.current || (a && l)) return;
            let s = { root: (e && e.current) || void 0, margin: i, amount: o };
            return (function (
              t,
              e,
              { root: i, margin: s, amount: n = "some" } = {}
            ) {
              var o;
              let a =
                  ("string" == typeof (o = t)
                    ? (o = document.querySelectorAll(o))
                    : o instanceof Element && (o = [o]),
                  Array.from(o || [])),
                l = new WeakMap(),
                h = new IntersectionObserver(
                  (t) => {
                    t.forEach((t) => {
                      let i = l.get(t.target);
                      if (!!i !== t.isIntersecting) {
                        if (t.isIntersecting) {
                          let i = e(t);
                          "function" == typeof i
                            ? l.set(t.target, i)
                            : h.unobserve(t.target);
                        } else i && (i(t), l.delete(t.target));
                      }
                    });
                  },
                  {
                    root: i,
                    rootMargin: s,
                    threshold: "number" == typeof n ? n : r[n],
                  }
                );
              return a.forEach((t) => h.observe(t)), () => h.disconnect();
            })(t.current, () => (h(!0), a ? void 0 : () => h(!1)), s);
          }, [e, t, i, a, o]),
          l
        );
      }
    },
    9033: (t, e, i) => {
      i.d(e, { L: () => r });
      var s = i(2265);
      let r = i(77282).j ? s.useLayoutEffect : s.useEffect;
    },
    83476: (t, e, i) => {
      i.d(e, { R: () => s });
      function s(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    20804: (t, e, i) => {
      i.d(e, { BX: () => u, Hg: () => h });
      var s = i(72428),
        r = i(83476),
        n = i(59993),
        o = i(86219);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class h {
        constructor(t, e = {}) {
          (this.version = "12.0.0-alpha.1"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = n.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = n.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new s.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = n.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function u(t, e) {
        return new h(t, e);
      }
    },
    45778: (t, e, i) => {
      i.d(e, { $: () => r });
      var s = i(91583);
      let r = {
        test: (0, i(93338).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            s = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (s = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (s = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (s += s),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(s, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: s.m.transform,
      };
    },
    598: (t, e, i) => {
      i.d(e, { J: () => a });
      var s = i(40783),
        r = i(75480),
        n = i(47292),
        o = i(93338);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, n.Nw)(e)) +
          ", " +
          r.aQ.transform((0, n.Nw)(i)) +
          ", " +
          (0, n.Nw)(s.Fq.transform(o)) +
          ")",
      };
    },
    50146: (t, e, i) => {
      i.d(e, { $: () => a });
      var s = i(47292),
        r = i(45778),
        n = i(598),
        o = i(91583);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || n.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : n.J.test(t)
            ? n.J.parse(t)
            : r.$.parse(t),
        transform: (t) =>
          (0, s.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : n.J.transform(t),
      };
    },
    91583: (t, e, i) => {
      i.d(e, { m: () => h });
      var s = i(51506),
        r = i(40783),
        n = i(47292),
        o = i(93338);
      let a = (t) => (0, s.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        h = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, n.Nw)(r.Fq.transform(s)) +
            ")",
        };
    },
    93338: (t, e, i) => {
      i.d(e, { d: () => n, i: () => r });
      var s = i(47292);
      let r = (t, e) => (i) =>
          !!(
            ((0, s.HD)(i) && s.mj.test(i) && i.startsWith(t)) ||
            (e && !(0, s.Rw)(i) && Object.prototype.hasOwnProperty.call(i, e))
          ),
        n = (t, e, i) => (r) => {
          if (!(0, s.HD)(r)) return r;
          let [n, o, a, l] = r.match(s.KP);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    24913: (t, e, i) => {
      i.d(e, { h: () => l });
      var s = i(83646),
        r = i(47292);
      let n = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [s] = i.match(r.KP) || [];
        if (!s) return t;
        let o = i.replace(s, ""),
          a = n.has(e) ? 1 : 0;
        return s !== i && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...s.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    83646: (t, e, i) => {
      i.d(e, { P: () => c, V: () => l });
      var s = i(50146),
        r = i(47292);
      let n = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          l = [],
          h = 0,
          u = e
            .replace(
              a,
              (t) => (
                s.$.test(t)
                  ? (r.color.push(h), l.push(o), i.push(s.$.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(h), l.push("var"), i.push(t))
                  : (r.number.push(h), l.push(n), i.push(parseFloat(t))),
                ++h,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: u, indexes: r, types: l };
      }
      function h(t) {
        return l(t).values;
      }
      function u(t) {
        let { split: e, types: i } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let h = 0; h < a; h++)
            if (((l += e[h]), void 0 !== t[h])) {
              let e = i[h];
              e === n
                ? (l += (0, r.Nw)(t[h]))
                : e === o
                ? (l += s.$.transform(t[h]))
                : (l += t[h]);
            }
          return l;
        };
      }
      let d = (t) => ("number" == typeof t ? 0 : t),
        c = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, r.HD)(t) &&
              ((null === (e = t.match(r.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(r.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: h,
          createTransformer: u,
          getAnimatableNone: function (t) {
            let e = h(t);
            return u(t)(e.map(d));
          },
        };
    },
    40783: (t, e, i) => {
      i.d(e, { Fq: () => n, Rx: () => r, bA: () => o });
      var s = i(51506);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        n = { ...r, transform: (t) => (0, s.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    75480: (t, e, i) => {
      i.d(e, {
        $C: () => u,
        RW: () => n,
        aQ: () => o,
        px: () => a,
        vh: () => l,
        vw: () => h,
      });
      var s = i(47292);
      let r = (t) => ({
          test: (e) =>
            (0, s.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        n = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        h = r("vw"),
        u = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    47292: (t, e, i) => {
      i.d(e, {
        HD: () => a,
        KP: () => r,
        Nw: () => s,
        Rw: () => l,
        dA: () => n,
        mj: () => o,
      });
      let s = (t) => Math.round(1e5 * t) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        n =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return "string" == typeof t;
      }
      function l(t) {
        return null == t;
      }
    },
    3944: (t, e, i) => {
      i.d(e, { K: () => l });
      var s = i(20804),
        r = i(35674),
        n = i(28746);
      class o extends s.Hg {
        constructor() {
          super(...arguments), (this.output = []), (this.counts = new Map());
        }
        add(t) {
          let e = (0, r.p)(t);
          if (!e) return;
          let i = this.counts.get(e) || 0;
          this.counts.set(e, i + 1),
            0 === i && (this.output.push(e), this.update());
          let s = !1;
          return () => {
            if (s) return;
            s = !0;
            let t = this.counts.get(e) - 1;
            this.counts.set(e, t),
              0 === t && ((0, n.cl)(this.output, e), this.update());
          };
        }
        update() {
          this.set(this.output.length ? this.output.join(", ") : "auto");
        }
      }
      var a = i(77599);
      function l(t, e) {
        var i, s;
        if (!t.applyWillChange) return;
        let r = t.getValue("willChange");
        if (
          (r ||
            (null === (i = t.props.style) || void 0 === i
              ? void 0
              : i.willChange) ||
            ((r = new o("auto")), t.addValue("willChange", r)),
          (s = r),
          (0, a.i)(s) && s.add)
        )
          return r.add(e);
      }
    },
    35674: (t, e, i) => {
      i.d(e, { p: () => o });
      var s = i(66323),
        r = i(51580),
        n = i(26019);
      function o(t) {
        return n.G.has(t) ? "transform" : s.t.has(t) ? (0, r.D)(t) : void 0;
      }
    },
    77599: (t, e, i) => {
      i.d(e, { i: () => s });
      let s = (t) => !!(t && t.getVelocity);
    },
    30622: (t, e, i) => {
      i.d(e, { b: () => n });
      var s = i(99155),
        r = i(77599);
      function n(t) {
        let e = (0, r.i)(t) ? t.get() : t;
        return (0, s.p)(e) ? e.toValue() : e;
      }
    },
  },
]);
