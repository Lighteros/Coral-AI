(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    11836: (e, t, l) => {
      Promise.resolve().then(l.t.bind(l, 38173, 23)),
        Promise.resolve().then(l.t.bind(l, 231, 23)),
        Promise.resolve().then(l.bind(l, 17785)),
        Promise.resolve().then(l.bind(l, 76829)),
        Promise.resolve().then(l.bind(l, 14085)),
        Promise.resolve().then(l.bind(l, 24547)),
        Promise.resolve().then(l.bind(l, 19137)),
        Promise.resolve().then(l.bind(l, 10803)),
        Promise.resolve().then(l.bind(l, 93828)),
        Promise.resolve().then(l.bind(l, 44576)),
        Promise.resolve().then(l.bind(l, 95073)),
        Promise.resolve().then(l.bind(l, 91303)),
        Promise.resolve().then(l.bind(l, 65429)),
        Promise.resolve().then(l.bind(l, 98130)),
        Promise.resolve().then(l.bind(l, 35106)),
        Promise.resolve().then(l.bind(l, 72547)),
        Promise.resolve().then(l.bind(l, 84437)),
        Promise.resolve().then(l.bind(l, 51128)),
        Promise.resolve().then(l.bind(l, 49470)),
        Promise.resolve().then(l.bind(l, 75726)),
        Promise.resolve().then(l.bind(l, 12766)),
        Promise.resolve().then(l.bind(l, 22395)),
        Promise.resolve().then(l.bind(l, 6040)),
        Promise.resolve().then(l.bind(l, 21555)),
        Promise.resolve().then(l.bind(l, 21431)),
        Promise.resolve().then(l.bind(l, 60526)),
        Promise.resolve().then(l.bind(l, 42737)),
        Promise.resolve().then(l.bind(l, 75753)),
        Promise.resolve().then(l.t.bind(l, 71509, 23));
    },
    42737: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => w });
      var s = l(57437),
        i = l(33293),
        r = l(66648),
        n = l(87138),
        o = l(58275),
        a = l(18213),
        d = l(83854),
        c = l(2265),
        m = l(75077),
        h = l(85189),
        x = l(3259);
      let p = [
          {
            img: x.zB,
            title: "Marketr",
            subtitle: "Automate Your Marketing",
            link: "https://marketr.linqai.app",
          },
          {
            img: x.V,
            title: "Composr",
            subtitle: "Create Captivating Content",
            link: "https://hub.linqai.com/composr",
          },
          {
            img: x.u9,
            title: "Researchr",
            subtitle: "AI Powered Research",
            link: "https://hub.linqai.com/researchr",
          },
          {
            img: x.Wh,
            title: "Creatr",
            subtitle: "AI Powered Design",
            link: "https://hub.linqai.com/creatr",
          },
          {
            img: x.fP,
            title: "LinqHub",
            subtitle: "Web App for $CORAI Holders",
            link: "https://hub.linqai.com",
          },
          {
            img: x.W0,
            title: "All Products",
            subtitle: "Vote on Upcoming Products",
            link: "https://hub.linqai.com/all-apps",
          },
        ],
        u = (e) => {
          let { img: t, subtitle: l, title: i, link: o, mobile: a } = e,
            d = a ? 48 : 32;
          return (0, s.jsx)("div", {
            className: (0, h.cn)(
              "h-[70px] w-full cursor-pointer rounded-[6px] bg-transparent py-[11px]",
              { "max-w-[220px] pl-[13px] hover:bg-[#252733]": !a }
            ),
            children: (0, s.jsx)(n.default, {
              href: o,
              rel: "noopener noreferrer",
              target: "_blank",
              children: (0, s.jsxs)("div", {
                className: "flex h-full items-center gap-4",
                children: [
                  (0, s.jsx)(r.default, {
                    src: t,
                    alt: "product image",
                    width: d,
                    height: d,
                  }),
                  (0, s.jsxs)("div", {
                    className: "",
                    children: [
                      (0, s.jsx)("p", {
                        className: (0, h.cn)(a ? "text-lg" : "text-md-bold"),
                        children: i,
                      }),
                      (0, s.jsx)("p", {
                        className: (0, h.cn)(
                          "text-gray",
                          a ? "text-md" : "text-sm"
                        ),
                        children: l,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        f = "products",
        b = [
          {
            id: "Whitepaper",
            text: "Whitepaper",
            goTo: "",
            link: "https://docs.coralai.dev/project-summary/roadmap-2025",
          },
          { id: "roadmap", text: "Roadmap", goTo: "roadmap" },
          { id: "tokenomics", text: "Tokenomics", goTo: "tokenomics" },
          { id: "team", text: "Team", goTo: "team" },
        ],
        v = () => {
          let e = (0, c.useRef)(null),
            t = (0, c.useRef)(null),
            [l, r] = (0, c.useState)(!1);
          (0, m.Vd)({
            refs: [e, t],
            onClickAway: () => {
              r(!1);
            },
          });
          let o = (e) => {
              e === f && r(!0);
            },
            a = () => {
              r(!1);
            };
          return (0, s.jsxs)("div", {
            className: "relative",
            onMouseLeave: a,
            children: [
              (0, s.jsx)("div", {
                className: "",
                children: (0, s.jsx)("nav", {
                  className: (0, h.cn)(
                    "hidden h-[48px] items-center gap-4 rounded-[20px] px-5 outline outline-1 transition-all duration-150 ease-in-out md-plus:flex",
                    l
                      ? "outline-transparent"
                      : "bg-[#FFFFFF0A] outline-[#252733]"
                  ),
                  children: b.map((e) => {
                    let { id: r, text: a, link: d, goTo: c } = e;
                    return (0, s.jsx)(
                      "div",
                      {
                        className: "px-2 py-3",
                        children: d
                          ? (0, s.jsx)(n.default, {
                              href: d,
                              target: "_blank",
                              className:
                                "text-md text-light-gray duration-300 ease-in-out hover:text-pale",
                              rel: "noopener noreferrer",
                              children: a,
                            })
                          : (0, s.jsx)("div", {
                              ref: r === f ? t : null,
                              onMouseEnter: () => o(r),
                              children: (0, s.jsx)(i.rU, {
                                smooth: !0,
                                to: c,
                                offset: -100,
                                className: (0, h.cn)(
                                  "cursor-pointer text-md text-light-gray duration-300 ease-in-out hover:text-pale",
                                  { "text-pale": l && r === f }
                                ),
                                children: a,
                              }),
                            }),
                      },
                      r
                    );
                  }),
                }),
              }),
              (0, s.jsx)("div", {
                ref: e,
                className: (0, h.cn)(
                  "absolute left-0 top-0 z-[-1] h-fit w-full transition-all duration-500 ease-in-out",
                  l ? "opacity-100" : "opacity-0"
                ),
                onMouseLeave: a,
                children: (0, s.jsx)("div", {
                  className:
                    "w-full rounded-[20px] bg-lightblue-purple-grad-lr p-[1px]",
                  children: (0, s.jsx)("div", {
                    className: (0, h.cn)(
                      "w-full overflow-hidden rounded-[19px] bg-[#191A24] transition-all duration-500 ease-in-out",
                      l ? "h-[292px]" : "h-[50px]"
                    ),
                    children: (0, s.jsx)("div", {
                      className: "flex flex-wrap gap-x-5 gap-y-2 p-4 pt-[50px]",
                      children: p.map((e) =>
                        (0, s.jsx)(
                          u,
                          {
                            img: e.img,
                            subtitle: e.subtitle,
                            title: e.title,
                            link: e.link,
                          },
                          e.title
                        )
                      ),
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        g = () => {
          let [e, t] = (0, c.useState)(!1),
            l = () => t(!e),
            [a, m] = (0, c.useState)(!1),
            x = () => {
              m((e) => !e);
            };
          (0, c.useEffect)(() => {
            e
              ? ((document.body.style.overflow = "hidden"),
                (document.body.style.height = "100vh"))
              : (document.body.style.overflow = "auto");
          }, [e]);
          let f = (e, l) => {
            if (l) return window.open(l, "_blank");
            t(!1), i.OK.scrollTo(e, { smooth: !0, offset: -50 });
          };
          return (0, s.jsxs)("div", {
            className: "z-10 flex md-plus:hidden",
            children: [
              (0, s.jsx)("button", {
                onClick: l,
                children: (0, s.jsx)(o.Oq, { className: "h-[24px] w-[24px]" }),
              }),
              (0, s.jsx)("div", {
                className: "relative",
                children: (0, s.jsxs)("div", {
                  className: (0, h.cn)(
                    "fixed right-0 top-0 flex h-screen w-full transform flex-col items-start bg-[#000000] bg-opacity-70 p-5 backdrop-blur-md transition-transform duration-300 ease-in-out",
                    { "translate-x-0": e, "translate-x-full": !e }
                  ),
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "no-scrollbar mb-10 h-full w-full overflow-auto",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex w-full items-center justify-between gap-[20px]",
                          children: [
                            (0, s.jsx)(r.default, {
                              src: o.jY,
                              alt: "logo",
                              width: 40,
                              height: 40,
                              className: "md-plus:h-[46px] md-plus:w-[46px]",
                              onClick: () => f("home"),
                            }),
                            (0, s.jsx)("div", {
                              children: (0, s.jsx)("button", {
                                className: "text-2xl text-white",
                                onClick: l,
                                children: (0, s.jsx)(o.Tw, {}),
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: (0, h.cn)(
                            "relative mt-[56px] flex w-full flex-col gap-6 text-xl text-white"
                          ),
                          children: b.map((e, t) => {
                            let { text: l, id: i, goTo: r, link: n } = e;
                            return (0, s.jsxs)(
                              "div",
                              {
                                className: "flex-col",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-row items-center",
                                    children: [
                                      (0, s.jsx)(
                                        "button",
                                        {
                                          onClick: () => f(r, n),
                                          className:
                                            "menu-item relative mr-[30px] text-left",
                                          children: l,
                                        },
                                        i
                                      ),
                                      "products" === i &&
                                        (0, s.jsx)("div", {
                                          onClick: x,
                                          className: (0, h.cn)(
                                            "cursor-pointer transition-all duration-150 ease-in-out",
                                            { "rotate-90": a }
                                          ),
                                          children: (0, s.jsx)(o.sp, {}),
                                        }),
                                    ],
                                  }),
                                  "products" === i &&
                                    a &&
                                    (0, s.jsx)("div", {
                                      className:
                                        "mt-4 flex w-full flex-col gap-4",
                                      children: p.map((e) =>
                                        (0, s.jsx)(
                                          u,
                                          {
                                            img: e.img,
                                            link: e.link,
                                            subtitle: e.subtitle,
                                            title: e.title,
                                            mobile: !0,
                                          },
                                          "mobile-menu-item-".concat(e.title)
                                        )
                                      ),
                                    }),
                                  t !== b.length - 1 &&
                                    (0, s.jsx)("div", {
                                      className:
                                        "mt-6 h-[1px] w-full bg-white opacity-20",
                                    }),
                                ],
                              },
                              "nav-item-".concat(i)
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "mb-20 mt-auto flex w-full justify-center",
                      children: (0, s.jsx)(n.default, {
                        href: "https://app.coralai.dev/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "w-full",
                        children: (0, s.jsx)(d.z, {
                          rounded: !0,
                          borderGradient: "bg-lightblue-purple-grad-tl-br",
                          className: "h-[40px] md-plus:h-[46px]",
                          rootClassName: "ml-auto w-full",
                          children: "Go to App",
                        }),
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "absolute bottom-0 left-0 z-[-1] w-full",
                      children: (0, s.jsxs)("svg", {
                        width: "100%",
                        height: "429",
                        viewBox: "0 0 100% 429",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          (0, s.jsx)("rect", {
                            opacity: "0.8",
                            width: "100%",
                            height: "429",
                            fill: "url(#paint0_radial_1686_2356)",
                            fillOpacity: "0.7",
                          }),
                          (0, s.jsx)("defs", {
                            children: (0, s.jsxs)("radialGradient", {
                              id: "paint0_radial_1686_2356",
                              cx: "0",
                              cy: "0",
                              r: "1",
                              gradientUnits: "userSpaceOnUse",
                              gradientTransform:
                                "translate(211.957 456.601) rotate(-90) scale(268.914 380.947)",
                              children: [
                                (0, s.jsx)("stop", { stopColor: "#A53BD0" }),
                                (0, s.jsx)("stop", {
                                  offset: "0.5",
                                  stopColor: "#37289C",
                                }),
                                (0, s.jsx)("stop", {
                                  offset: "1",
                                  stopColor: "#080809",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      var j = l(30244);
      let w = () =>
        (0, s.jsx)("header", {
          className: "fixed left-0 top-0 z-50 h-[96px] w-full",
          style: {
            background:
              "linear-gradient(0deg, rgb(0 0 0 / 7%) 10%, #000000 100%)",
          },
          children: (0, s.jsx)(a.n, {
            margin: "0px 0px 0px 0px",
            children: (0, s.jsxs)(j.a, {
              className: "flex items-center justify-between gap-4 pt-6",
              children: [
                (0, s.jsx)("div", {
                  className: "w-[148px]",
                  children: (0, s.jsx)(n.default, {
                    href: "/",
                    children: (0, s.jsx)(r.default, {
                      src: o.jY,
                      alt: "logo",
                      width: 40,
                      height: 40,
                      unoptimized: !0,
                      className:
                        "min-w-[46px] md-plus:h-[46px] md-plus:w-[46px]",
                      onClick: () => i.OK.scrollTo("home", { smooth: !0 }),
                    }),
                  }),
                }),
                (0, s.jsx)(v, {}),
                (0, s.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    (0, s.jsx)(n.default, {
                      href: "https://app.coralai.dev/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: (0, s.jsx)(d.z, {
                        rounded: !0,
                        borderGradient: "bg-lightblue-purple-grad-tl-br",
                        rootClassName: "max-md-plus:h-[40px] h-[46px]",
                        children: "Go to App",
                      }),
                    }),
                    (0, s.jsx)(g, {}),
                  ],
                }),
              ],
            }),
          }),
        });
    },
    71509: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [567, 736, 11, 410, 130, 215, 744], () => t(11836)), (_N_E = e.O());
  },
]);
