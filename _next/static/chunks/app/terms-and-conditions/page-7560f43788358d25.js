(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [905],
  {
    69062: (e, a, i) => {
      Promise.resolve().then(i.bind(i, 23451));
    },
    23451: (e, a, i) => {
      "use strict";
      i.d(a, { default: () => r });
      var n = i(57437),
        s = i(2265),
        l = i(28733),
        t = i(78179);
      let r = (e) => {
        let {
            children: a,
            motionProps: i,
            margin: r,
            className: u,
            rootClassName: c,
          } = e,
          d = (0, s.useRef)(null),
          o = (0, l.Y)(d, {
            margin: null != r ? r : "-200px 100px -40% 0px",
            once: !0,
          });
        return (0, n.jsx)(t.E.div, {
          initial: { y: -30, opacity: 0 },
          transition: { duration: 0.6, ease: "easeInOut" },
          className: c,
          ...i,
          animate: o
            ? (null == i ? void 0 : i.animate)
              ? i.animate
              : { y: 0, opacity: 1 }
            : {},
          children: (0, n.jsx)("div", { className: u, ref: d, children: a }),
        });
      };
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [736, 130, 215, 744], () => a(69062)), (_N_E = e.O());
  },
]);
