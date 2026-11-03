// Scrubie-Hub storefront (reconstructed React source).
// Main application component, cart/wishlist providers, product data,
// and the built-in admin panel. Logic and markup mirror the production build.
import React from "react";
import * as n from "react/jsx-runtime";

const F = React;
const Zu = React;

const Xo = ["✨ FREE Delivery on Orders Above Rs. 2,999 — All Over Pakistan!", "🌸 100% Organic & Handcrafted Body Scrubs — Fresh Small Batches", "💝 Cash on Delivery Available — Order via WhatsApp in Seconds!", "⭐ 4.9 Star Rating — Trusted by 15,000+ Happy Pakistani Customers", "🌿 Zero Harsh Chemicals • Zero Parabens • Zero Sulfates", "🚀 Fast Nationwide Delivery — Lahore, Karachi, Islamabad & More!"],
  dx = () => {
    const e = [...Xo, ...Xo];
    return <div className="bg-brand-600 text-white text-[11px] sm:text-xs py-2.5 overflow-hidden select-none"><div className="marquee-track">{e.map((t, r) => <span key={r} className="flex items-center gap-2 px-6 sm:px-10 whitespace-nowrap font-medium tracking-wide">{t}<span className="opacity-30 text-[10px]">•</span></span>)}</div></div>;
  };
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ux = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ju = (...e) => e.filter((t, r, s) => !!t && t.trim() !== "" && s.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mx = {
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
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fx = F.forwardRef(({
  color: e = "currentColor",
  size: t = 24,
  strokeWidth: r = 2,
  absoluteStrokeWidth: s,
  className: l = "",
  children: a,
  iconNode: i,
  ...o
}, c) => F.createElement("svg", {
  ref: c,
  ...mx,
  width: t,
  height: t,
  stroke: e,
  strokeWidth: s ? Number(r) * 24 / Number(t) : r,
  className: ju("lucide", l),
  ...o
}, [...i.map(([u, g]) => F.createElement(u, g)), ...(Array.isArray(a) ? a : [a])]));
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z = (e, t) => {
  const r = F.forwardRef(({
    className: s,
    ...l
  }, a) => F.createElement(fx, {
    ref: a,
    iconNode: t,
    className: ju(`lucide-${ux(e)}`, s),
    ...l
  }));
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xx = z("ArrowLeft", [["path", {
  d: "m12 19-7-7 7-7",
  key: "1l729n"
}], ["path", {
  d: "M19 12H5",
  key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = z("ArrowRight", [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}], ["path", {
  d: "m12 5 7 7-7 7",
  key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nu = z("Award", [["path", {
  d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
  key: "1yiouv"
}], ["circle", {
  cx: "12",
  cy: "8",
  r: "6",
  key: "1vp47v"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hx = z("Check", [["path", {
  d: "M20 6 9 17l-5-5",
  key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const px = z("ChevronDown", [["path", {
  d: "m6 9 6 6 6-6",
  key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gx = z("ChevronLeft", [["path", {
  d: "m15 18-6-6 6-6",
  key: "1wnfg3"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yx = z("ChevronRight", [["path", {
  d: "m9 18 6-6-6-6",
  key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bx = z("ChevronUp", [["path", {
  d: "m18 15-6-6-6 6",
  key: "153udz"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = z("CircleCheckBig", [["path", {
  d: "M21.801 10A10 10 0 1 1 17 3.335",
  key: "yps3ct"
}], ["path", {
  d: "m9 11 3 3L22 4",
  key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ha = z("CircleCheck", [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m9 12 2 2 4-4",
  key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vx = z("CircleHelp", [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
  key: "1u773s"
}], ["path", {
  d: "M12 17h.01",
  key: "p32p05"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const on = z("CirclePlus", [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}], ["path", {
  d: "M12 8v8",
  key: "napkw2"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $a = z("Clock", [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 16 14",
  key: "68esgv"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wx = z("CreditCard", [["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "5",
  rx: "2",
  key: "ynyp8z"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "10",
  y2: "10",
  key: "1b3vmo"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jx = z("DollarSign", [["line", {
  x1: "12",
  x2: "12",
  y1: "2",
  y2: "22",
  key: "7eqyqh"
}], ["path", {
  d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  key: "1b0p4s"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nx = z("Droplets", [["path", {
  d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
  key: "1ptgy4"
}], ["path", {
  d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
  key: "1sl1rz"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kx = z("ExternalLink", [["path", {
  d: "M15 3h6v6",
  key: "1q9fwt"
}], ["path", {
  d: "M10 14 21 3",
  key: "gplh6r"
}], ["path", {
  d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
  key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sx = z("EyeOff", [["path", {
  d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
  key: "ct8e1f"
}], ["path", {
  d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
  key: "151rxh"
}], ["path", {
  d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
  key: "13bj9a"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = z("Eye", [["path", {
  d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
  key: "1nclc0"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cx = z("Facebook", [["path", {
  d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  key: "1jg4f8"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ku = z("FileText", [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M10 9H8",
  key: "b1mrlr"
}], ["path", {
  d: "M16 13H8",
  key: "t4e002"
}], ["path", {
  d: "M16 17H8",
  key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ex = z("Filter", [["polygon", {
  points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
  key: "1yg77f"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = z("Heart", [["path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
  key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Px = z("House", [["path", {
  d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
  key: "5wwlr5"
}], ["path", {
  d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  key: "1d0kgt"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fx = z("Info", [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M12 16v-4",
  key: "1dtifu"
}], ["path", {
  d: "M12 8h.01",
  key: "e9boi3"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ax = z("Instagram", [["rect", {
  width: "20",
  height: "20",
  x: "2",
  y: "2",
  rx: "5",
  ry: "5",
  key: "2e1cvw"
}], ["path", {
  d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
  key: "9exkf1"
}], ["line", {
  x1: "17.5",
  x2: "17.51",
  y1: "6.5",
  y2: "6.5",
  key: "r4j83e"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = z("LayoutDashboard", [["rect", {
  width: "7",
  height: "9",
  x: "3",
  y: "3",
  rx: "1",
  key: "10lvy0"
}], ["rect", {
  width: "7",
  height: "5",
  x: "14",
  y: "3",
  rx: "1",
  key: "16une8"
}], ["rect", {
  width: "7",
  height: "9",
  x: "14",
  y: "12",
  rx: "1",
  key: "1hutg5"
}], ["rect", {
  width: "7",
  height: "5",
  x: "3",
  y: "16",
  rx: "1",
  key: "ldoo1y"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = z("Leaf", [["path", {
  d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
  key: "nnexq3"
}], ["path", {
  d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
  key: "mt58a7"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Su = z("Lock", [["rect", {
  width: "18",
  height: "11",
  x: "3",
  y: "11",
  rx: "2",
  ry: "2",
  key: "1w4ew1"
}], ["path", {
  d: "M7 11V7a5 5 0 0 1 10 0v4",
  key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = z("LogOut", [["path", {
  d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
  key: "1uf3rs"
}], ["polyline", {
  points: "16 17 21 12 16 7",
  key: "1gabdz"
}], ["line", {
  x1: "21",
  x2: "9",
  y1: "12",
  y2: "12",
  key: "1uyos4"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = z("Mail", [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2",
  key: "18n3k1"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
  key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cu = z("MapPin", [["path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
  key: "1r0f0z"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3",
  key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eu = z("Menu", [["line", {
  x1: "4",
  x2: "20",
  y1: "12",
  y2: "12",
  key: "1e0a9i"
}], ["line", {
  x1: "4",
  x2: "20",
  y1: "6",
  y2: "6",
  key: "1owob3"
}], ["line", {
  x1: "4",
  x2: "20",
  y1: "18",
  y2: "18",
  key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mr = z("MessageCircle", [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
  key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tx = z("Minus", [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dx = z("MoveHorizontal", [["path", {
  d: "m18 8 4 4-4 4",
  key: "1ak13k"
}], ["path", {
  d: "M2 12h20",
  key: "9i4pu4"
}], ["path", {
  d: "m6 8-4 4 4 4",
  key: "15zrgr"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = z("Package", [["path", {
  d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
  key: "1a0edw"
}], ["path", {
  d: "M12 22V12",
  key: "d0xqtd"
}], ["path", {
  d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",
  key: "yx3hmr"
}], ["path", {
  d: "m7.5 4.27 9 5.15",
  key: "1c824w"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = z("PenLine", [["path", {
  d: "M12 20h9",
  key: "t2du7b"
}], ["path", {
  d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
  key: "1ykcvy"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pu = z("Phone", [["path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
  key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mx = z("Plus", [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}], ["path", {
  d: "M12 5v14",
  key: "s699le"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = z("RefreshCw", [["path", {
  d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
  key: "v9h5vc"
}], ["path", {
  d: "M21 3v5h-5",
  key: "1q7to0"
}], ["path", {
  d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
  key: "3uifl3"
}], ["path", {
  d: "M8 16H3v5",
  key: "1cv678"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fu = z("RotateCcw", [["path", {
  d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
  key: "1357e3"
}], ["path", {
  d: "M3 3v5h5",
  key: "1xhq8a"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bi = z("Search", [["circle", {
  cx: "11",
  cy: "11",
  r: "8",
  key: "4ej97u"
}], ["path", {
  d: "m21 21-4.3-4.3",
  key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tl = z("Send", [["path", {
  d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
  key: "1ffxy3"
}], ["path", {
  d: "m21.854 2.147-10.94 10.939",
  key: "12cjpa"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = z("Settings", [["path", {
  d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
  key: "1qme2f"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = z("ShieldCheck", [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}], ["path", {
  d: "m9 12 2 2 4-4",
  key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lx = z("Shield", [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = z("ShoppingBag", [["path", {
  d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
  key: "hou9p0"
}], ["path", {
  d: "M3 6h18",
  key: "d0wm0j"
}], ["path", {
  d: "M16 10a4 4 0 0 1-8 0",
  key: "1ltviw"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = z("ShoppingCart", [["circle", {
  cx: "8",
  cy: "21",
  r: "1",
  key: "jimo8o"
}], ["circle", {
  cx: "19",
  cy: "21",
  r: "1",
  key: "13723u"
}], ["path", {
  d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
  key: "9zh506"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ox = z("SlidersHorizontal", [["line", {
  x1: "21",
  x2: "14",
  y1: "4",
  y2: "4",
  key: "obuewd"
}], ["line", {
  x1: "10",
  x2: "3",
  y1: "4",
  y2: "4",
  key: "1q6298"
}], ["line", {
  x1: "21",
  x2: "12",
  y1: "12",
  y2: "12",
  key: "1iu8h1"
}], ["line", {
  x1: "8",
  x2: "3",
  y1: "12",
  y2: "12",
  key: "ntss68"
}], ["line", {
  x1: "21",
  x2: "16",
  y1: "20",
  y2: "20",
  key: "14d8ph"
}], ["line", {
  x1: "12",
  x2: "3",
  y1: "20",
  y2: "20",
  key: "m0wm8r"
}], ["line", {
  x1: "14",
  x2: "14",
  y1: "2",
  y2: "6",
  key: "14e1ph"
}], ["line", {
  x1: "8",
  x2: "8",
  y1: "10",
  y2: "14",
  key: "1i6ji0"
}], ["line", {
  x1: "16",
  x2: "16",
  y1: "18",
  y2: "22",
  key: "1lctlv"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rx = z("Smile", [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M8 14s1.5 2 4 2 4-2 4-2",
  key: "1y1vjs"
}], ["line", {
  x1: "9",
  x2: "9.01",
  y1: "9",
  y2: "9",
  key: "yxxnd0"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "9",
  y2: "9",
  key: "1p4y9e"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = z("Sparkles", [["path", {
  d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
  key: "4pj2yx"
}], ["path", {
  d: "M20 3v4",
  key: "1olli1"
}], ["path", {
  d: "M22 5h-4",
  key: "1gvqau"
}], ["path", {
  d: "M4 17v2",
  key: "vumght"
}], ["path", {
  d: "M5 18H3",
  key: "zchphs"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nt = z("Star", [["path", {
  d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
  key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = z("Tag", [["path", {
  d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
  key: "vktsd0"
}], ["circle", {
  cx: "7.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor",
  key: "kqv944"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = z("Trash2", [["path", {
  d: "M3 6h18",
  key: "d0wm0j"
}], ["path", {
  d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
  key: "4alrt4"
}], ["path", {
  d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
  key: "v07s0e"
}], ["line", {
  x1: "10",
  x2: "10",
  y1: "11",
  y2: "17",
  key: "1uufr5"
}], ["line", {
  x1: "14",
  x2: "14",
  y1: "11",
  y2: "17",
  key: "xtxkd"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = z("Truck", [["path", {
  d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
  key: "wrbu53"
}], ["path", {
  d: "M15 18H9",
  key: "1lyqi6"
}], ["path", {
  d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
  key: "lysw3i"
}], ["circle", {
  cx: "17",
  cy: "18",
  r: "2",
  key: "332jqn"
}], ["circle", {
  cx: "7",
  cy: "18",
  r: "2",
  key: "19iecd"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ix = z("User", [["path", {
  d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
  key: "975kel"
}], ["circle", {
  cx: "12",
  cy: "7",
  r: "4",
  key: "17ys0d"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zx = z("Users", [["path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
  key: "1yyitq"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4",
  key: "nufk8"
}], ["path", {
  d: "M22 21v-2a4 4 0 0 0-3-3.87",
  key: "kshegd"
}], ["path", {
  d: "M16 3.13a4 4 0 0 1 0 7.75",
  key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = z("X", [["path", {
  d: "M18 6 6 18",
  key: "1bl5f8"
}], ["path", {
  d: "m6 6 12 12",
  key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bx = z("Youtube", [["path", {
    d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
    key: "1q2vi4"
  }], ["path", {
    d: "m10 15 5-3-5-3z",
    key: "1jp15x"
  }]]),
  le = {
    brandName: "SCRUBIE_HUB.PK",
    whatsappNumber: "923182717949",
    whatsappDisplayNumber: "+923182717949",
    freeDeliveryThreshold: 2999,
    standardDeliveryFee: 200,
    email: "support@scrubiehub.pk",
    instagram: "scrubie_hub.pk",
    facebook: "scrubiehub.pk",
    location: "Lahore, Pakistan"
  },
  Au = F.createContext(void 0),
  lc = "scrubie_hub_cart_v1",
  CartProvider = ({
    children: e
  }) => {
    const [t, r] = F.useState(() => {
        try {
          const P = localStorage.getItem(lc);
          return P ? JSON.parse(P) : [];
        } catch {
          return [];
        }
      }),
      [s, l] = F.useState(false);
    F.useEffect(() => {
      try {
        localStorage.setItem(lc, JSON.stringify(t));
      } catch (P) {
        console.error("Failed to save cart to localStorage", P);
      }
    }, [t]);
    const a = (P, f = 1) => {
        r(d => d.find(w => w.product.id === P.id) ? d.map(w => w.product.id === P.id ? {
          ...w,
          quantity: w.quantity + f
        } : w) : [...d, {
          product: P,
          quantity: f
        }]), l(true), typeof window < "u" && window.dispatchEvent(new CustomEvent("scrubie_toast", {
          detail: `Added "${P.name}" to Shopping Bag! 🛍️`
        }));
      },
      i = P => {
        r(f => f.filter(d => d.product.id !== P)), typeof window < "u" && window.dispatchEvent(new CustomEvent("scrubie_toast", {
          detail: "Item removed from bag."
        }));
      },
      o = (P, f) => {
        if (f <= 0) {
          i(P);
          return;
        }
        r(d => d.map(h => h.product.id === P ? {
          ...h,
          quantity: f
        } : h));
      },
      c = () => {
        r([]);
      },
      u = t.reduce((P, f) => P + f.quantity, 0),
      g = t.reduce((P, f) => P + f.product.price * f.quantity, 0),
      b = g >= le.freeDeliveryThreshold,
      y = t.length === 0 || b ? 0 : le.standardDeliveryFee,
      j = g + y,
      C = Math.max(0, le.freeDeliveryThreshold - g),
      S = Math.min(100, g / le.freeDeliveryThreshold * 100);
    return <Au.Provider value={{
      cart: t,
      addToCart: a,
      removeFromCart: i,
      updateQuantity: o,
      clearCart: c,
      totalItems: u,
      subtotal: g,
      deliveryFee: y,
      total: j,
      amountNeededForFreeDelivery: C,
      freeDeliveryProgress: S,
      isCartOpen: s,
      setIsCartOpen: l
    }}>{e}</Au.Provider>;
  },
  Qr = () => {
    const e = F.useContext(Au);
    if (!e) throw new Error("useCart must be used within a CartProvider");
    return e;
  },
  Tu = F.createContext(void 0),
  ac = "scrubie_hub_wishlist_v1",
  WishlistProvider = ({
    children: e
  }) => {
    const [t, r] = F.useState(() => {
      try {
        const a = localStorage.getItem(ac);
        return a ? JSON.parse(a) : [];
      } catch {
        return [];
      }
    });
    F.useEffect(() => {
      try {
        localStorage.setItem(ac, JSON.stringify(t));
      } catch (a) {
        console.error("Failed to save wishlist to localStorage", a);
      }
    }, [t]);
    const s = a => {
        r(i => {
          const o = i.includes(a);
          return typeof window < "u" && window.dispatchEvent(new CustomEvent("scrubie_toast", {
            detail: o ? "Removed from Wishlist" : "Saved to Wishlist ♥"
          })), o ? i.filter(c => c !== a) : [...i, a];
        });
      },
      l = a => t.includes(a);
    return <Tu.Provider value={{
      wishlist: t,
      toggleWishlist: s,
      isInWishlist: l,
      wishlistCount: t.length
    }}>{e}</Tu.Provider>;
  },
  yl = () => {
    const e = F.useContext(Tu);
    if (!e) throw new Error("useWishlist must be used within a WishlistProvider");
    return e;
  };
function Du(e, t = le.whatsappNumber) {
  const r = t.replace(/[^0-9]/g, ""),
    s = encodeURIComponent(e);
  return `https://api.whatsapp.com/send/?phone=${r}&text=${s}`;
}
function $n(e, t = le.whatsappNumber) {
  const r = Du(e, t);
  window.open(r, "_blank", "noopener,noreferrer");
}
const Ux = ({
    currentView: e,
    setCurrentView: t,
    onOpenSearch: r,
    onOpenWishlist: s
  }) => {
    const {
        totalItems: l,
        setIsCartOpen: a
      } = Qr(),
      {
        wishlistCount: i
      } = yl(),
      [o, c] = F.useState(false);
    F.useEffect(() => (o ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
      document.body.style.overflow = "";
    }), [o]);
    const u = g => {
      t(g), c(false), window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
    return <n.Fragment><header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#F2EAE4] transition-all duration-300 shadow-sm"><div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8"><div className="flex items-center justify-between h-16 sm:h-20"><div onClick={() => u("home")} className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none min-w-0" title="SCRUBIE_HUB.PK"><div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-brand-300 shadow-sm transition-transform duration-300 group-hover:scale-105 flex-shrink-0"><img src="/assets/logo/logo.png" alt="Scrubie-Hub Logo" className="w-full h-full object-cover" /></div><div className="flex flex-col truncate"><span className="font-serif text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-[#2D1520] group-hover:text-brand-600 transition-colors truncate">SCRUBIE_HUB.PK</span><span className="text-[8px] sm:text-[10px] tracking-widest uppercase font-semibold text-brand-500 -mt-0.5">Glow Naturally</span></div></div><nav className="hidden md:flex items-center space-x-8 lg:space-x-10"><button onClick={() => u("home")} className={`text-sm tracking-wide font-medium transition-colors relative py-1 ${e === "home" ? "text-brand-600 font-semibold" : "text-gray-700 hover:text-brand-600"}`}>Home{e === "home" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full" />}</button><button onClick={() => u("shop")} className={`text-sm tracking-wide font-medium transition-colors relative py-1 ${e === "shop" ? "text-brand-600 font-semibold" : "text-gray-700 hover:text-brand-600"}`}>Shop{e === "shop" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full" />}</button><button onClick={() => u("about")} className={`text-sm tracking-wide font-medium transition-colors relative py-1 ${e === "about" ? "text-brand-600 font-semibold" : "text-gray-700 hover:text-brand-600"}`}>About{e === "about" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full" />}</button><button onClick={() => u("contact")} className={`text-sm tracking-wide font-medium transition-colors relative py-1 ${e === "contact" ? "text-brand-600 font-semibold" : "text-gray-700 hover:text-brand-600"}`}>Contact{e === "contact" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full" />}</button></nav><div className="flex items-center gap-1 sm:gap-2 flex-shrink-0"><button onClick={r} className="p-2 sm:p-2.5 text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-all tap-target" aria-label="Search products" title="Search products"><Bi className="w-4 h-4 sm:w-5 sm:h-5" /></button><button onClick={s} className="p-2 sm:p-2.5 text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-all relative tap-target" aria-label="View Wishlist" title="View Wishlist"><Qt className="w-4 h-4 sm:w-5 sm:h-5" />{i > 0 && <span className="absolute top-1 right-1 w-4 h-4 bg-brand-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow">{i}</span>}</button><button onClick={() => a(true)} className="p-2 sm:p-2.5 text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-all relative group tap-target" aria-label="View Shopping Cart" title="View Shopping Cart">{n.jsx(or, {
                  className: "w-4 h-4 sm:w-5 sm:h-5 text-gray-800 group-hover:text-brand-600 transition-colors"
                })}{l > 0 && <span className="absolute top-1 right-1 w-4 h-4 sm:w-5 sm:h-5 bg-brand-600 text-white text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center shadow-sm animate-soft-pulse">{l}</span>}</button><button onClick={() => c(true)} className="md:hidden p-2 text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors tap-target ml-0.5" aria-label="Open Navigation Menu"><Eu className="w-5 h-5 sm:w-6 sm:h-6" /></button></div></div></div></header>{o && <div className="fixed inset-0 z-50 md:hidden flex justify-end"><div className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200" onClick={() => c(false)} /><div className="relative z-10 w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"><div><div className="p-4 sm:p-5 border-b border-[#F2EAE4] flex items-center justify-between bg-gradient-to-r from-[#FAF0F2] to-white"><div onClick={() => u("home")} className="flex items-center gap-2.5 cursor-pointer"><img src="/assets/logo/logo.png" alt="Logo" className="w-8 h-8 rounded-full object-cover border border-brand-300" /><div className="flex flex-col"><span className="font-serif text-base font-bold text-[#2D1520]">SCRUBIE_HUB.PK</span><span className="text-[9px] text-brand-600 font-semibold tracking-wider uppercase">Glow Naturally</span></div></div><button onClick={() => c(false)} className="p-2 rounded-full hover:bg-white/80 text-gray-500 hover:text-gray-800 transition-colors tap-target" aria-label="Close Navigation"><Le className="w-5 h-5" /></button></div><div className="bg-brand-50 px-4 py-2.5 border-b border-brand-100 flex items-center gap-2 text-[11px] text-brand-800 font-medium">{n.jsx(ke, {
                className: "w-3.5 h-3.5 text-brand-600 flex-shrink-0"
              })}<span>Free delivery on orders above Rs. 2,999</span></div><div className="p-4 space-y-1.5">{[{
                label: "Home",
                icon: Px,
                view: "home"
              }, {
                label: "Shop All Products",
                icon: _x,
                view: "shop"
              }, {
                label: "About Our Brand",
                icon: Fx,
                view: "about"
              }, {
                label: "Contact & Support",
                icon: Pu,
                view: "contact"
              }].map(g => {
                const b = g.icon,
                  y = e === g.view;
                return <button key={g.label} onClick={() => u(g.view)} className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-sm font-semibold transition-all ${y ? "bg-brand-600 text-white shadow-md" : "text-gray-700 hover:bg-brand-50/70 hover:text-brand-700"}`}><div className="flex items-center gap-3">{n.jsx(b, {
                      className: `w-4 h-4 ${y ? "text-white" : "text-brand-600"}`
                    })}<span>{g.label}</span></div>{n.jsx(st, {
                    className: `w-3.5 h-3.5 ${y ? "text-white/80" : "text-gray-400"}`
                  })}</button>;
              })}</div><div className="px-4 pt-2 pb-4 border-t border-gray-100"><p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5 px-1">Popular Categories</p><div className="grid grid-cols-2 gap-2">{[{
                  name: "Body Scrubs",
                  img: "/assets/products/body-scrubs/coffee-scrub-podium.jpeg"
                }, {
                  name: "Brightening Nila",
                  img: "/assets/products/body-scrubs/moroccan-nila-banner.jpeg"
                }, {
                  name: "Turmeric Polish",
                  img: "/assets/products/body-scrubs/turmeric-scrub-podium.jpeg"
                }, {
                  name: "Damask Rose",
                  img: "/assets/products/body-scrubs/rosey-rose-satin.jpeg"
                }].map((g, b) => <div key={b} onClick={() => u("shop")} className="p-2 rounded-xl border border-gray-100 bg-[#FAF7F5] flex items-center gap-2 cursor-pointer hover:border-brand-200 transition-all"><img src={g.img} alt={g.name} className="w-8 h-8 rounded-lg object-cover flex-shrink-0" /><span className="text-[11px] font-medium text-gray-700 truncate">{g.name}</span></div>)}</div></div></div><div className="p-4 border-t border-gray-100 bg-gray-50/50 space-y-2.5"><a href={Du(`Hi Scrubie Hub Team! ✨
I am browsing scrubiehub.pk and have questions regarding your skincare items.`)} target="_blank" rel="noreferrer" className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow flex items-center justify-center gap-2 transition-colors"><Mr className="w-4 h-4" /><span>Chat on WhatsApp ({le.whatsappDisplayNumber})</span></a><p className="text-[10px] text-center text-gray-400">{"© "}{new Date().getFullYear()}{" "}{le.brandName}{" • 100% Organic & Handcrafted"}</p></div></div></div>}</n.Fragment>;
  },
  Wx = ({
    onShopClick: e
  }) => {
    const [t, r] = F.useState(0),
      s = ["/assets/products/body-scrubs/rosey-rose-banner.jpeg", "/assets/products/body-scrubs/turmeric-scrub-banner.jpeg", "/assets/products/body-scrubs/moroccan-nila-banner.jpeg", "/assets/products/body-scrubs/coffee-scrub-collage.jpeg"];
    return F.useEffect(() => {
      const l = setInterval(() => r(a => (a + 1) % s.length), 4e3);
      return () => clearInterval(l);
    }, []), <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF2F4] via-[#FDF8F7] to-[#FAF7F5] py-10 sm:py-14 lg:py-20 overflow-x-clip"><div className="absolute top-0 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" /><div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-rose-100/40 rounded-full blur-3xl pointer-events-none" /><div className="absolute top-1/2 left-0 w-32 h-32 bg-brand-200/20 rounded-full blur-2xl pointer-events-none" /><div className="absolute top-16 left-12 w-3 h-3 rounded-full bg-brand-300/40 animate-soft-float" style={{
        animationDelay: "0s"
      }} /><div className="absolute top-32 right-16 w-2 h-2 rounded-full bg-pink-300/50 animate-soft-float" style={{
        animationDelay: "1.5s"
      }} /><div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-rose-300/40 animate-soft-float" style={{
        animationDelay: "3s"
      }} /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"><div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left order-1"><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-200 text-brand-700 text-xs sm:text-sm font-semibold shadow-sm animate-badge-pop">{n.jsx(ke, {
                className: "w-3.5 h-3.5 text-brand-500 animate-sparkle flex-shrink-0"
              })}<span>{"100% Organic & Handcrafted in Pakistan"}</span></div><div><h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-tight text-[#2D1520] leading-[1.1]">{"Your Skin "}<br className="hidden sm:block" /><em className="not-italic gradient-text-rose">Deserves</em>{" "}the Best</h1></div><p className="text-gray-600 text-base sm:text-lg font-normal max-w-lg mx-auto lg:mx-0 leading-relaxed">Discover natural, effective and affordable skincare products for a healthier, brighter, more radiant you.</p><div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1"><button onClick={e} className="btn-luxury w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"><span>Shop Now</span>{n.jsx(st, {
                  className: "w-4 h-4"
                })}</button></div><div className="flex items-center justify-center lg:justify-start gap-3"><div className="flex -space-x-1">{[1, 2, 3, 4].map(l => <div key={l} className="w-8 h-8 rounded-full border-2 border-white shadow overflow-hidden bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center text-white text-[10px] font-bold">{["A", "Z", "M", "H"][l - 1]}</div>)}</div><div><div className="flex text-amber-400 gap-0.5">{[...Array(5)].map((l, a) => <Nt key={a} className="w-3.5 h-3.5 fill-current" />)}</div><p className="text-[11px] text-gray-500 font-medium mt-0.5">Loved by 15,000+ happy customers</p></div></div><div className="pt-5 border-t border-brand-200/60 grid grid-cols-3 gap-4 max-w-xs sm:max-w-sm mx-auto lg:mx-0 text-center lg:text-left">{[{
                value: "15k+",
                label: "Happy Clients"
              }, {
                value: "100%",
                label: "Natural Herbs"
              }, {
                value: "4.9★",
                label: "Top Rating"
              }].map((l, a) => <div key={a}><p className="text-xl sm:text-2xl font-bold text-[#2D1520] font-serif">{l.value}</p><p className="text-[11px] sm:text-xs text-gray-500 uppercase tracking-wider mt-0.5">{l.label}</p></div>)}</div></div><div className="lg:col-span-5 relative order-2"><div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none"><div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-brand-100">{s.map((l, a) => <img key={a} src={l} alt={`Scrubie-Hub Product ${a + 1}`} className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${t === a ? "opacity-100" : "opacity-0"}`} loading={a === 0 ? "eager" : "lazy"} />)}<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" /><div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">{s.map((l, a) => <button key={a} onClick={() => r(a)} className={`rounded-full transition-all ${t === a ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50"}`} />)}</div></div><div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-sm p-3 sm:p-3.5 rounded-xl shadow-xl border border-brand-100 flex items-center gap-2.5 sm:gap-3 max-w-[200px] sm:max-w-xs animate-bounce-slow"><img src="/assets/products/body-scrubs/coffee-scrub-podium.jpeg" alt="Coffee Scrub" className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-lg border border-brand-100 flex-shrink-0" /><div className="min-w-0"><span className="text-[9px] sm:text-[10px] font-bold text-brand-600 uppercase tracking-wider block">★ #1 Best Seller</span><p className="font-serif text-xs sm:text-sm font-bold text-[#2D1520] truncate">Coffee Body Scrub</p><p className="text-[11px] sm:text-xs font-semibold text-brand-700">Rs. 1,499</p></div></div><div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-white/95 backdrop-blur-sm px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full shadow-lg border border-brand-100 flex items-center gap-1.5 sm:gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /><span className="text-[10px] sm:text-xs font-semibold text-gray-800 whitespace-nowrap">Fresh Small Batches</span></div></div></div></div></div></section>;
  },
  Vx = () => {
    const e = [{
      icon: Hn,
      title: "100% Original",
      desc: "Pure & Organic Ingredients"
    }, {
      icon: Vr,
      title: "Fast & Reliable",
      desc: "Tracked Delivery Nationwide"
    }, {
      icon: Su,
      title: "Secure Payments",
      desc: "Cash on Delivery & Bank Transfer"
    }, {
      icon: Fu,
      title: "Easy Returns",
      desc: "7 Days Happiness Guarantee"
    }];
    return <div className="bg-white border-y border-[#F2EAE4] py-8 shadow-sm"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">{e.map((t, r) => {
            const s = t.icon;
            return <div key={r} className="flex items-center gap-4 group p-2 rounded-lg hover:bg-brand-50/50 transition-colors"><div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center flex-shrink-0 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">{n.jsx(s, {
                  className: "w-5 h-5"
                })}</div><div><h4 className="font-serif text-base sm:text-lg font-bold text-[#2D1520] tracking-tight">{t.title}</h4><p className="text-xs text-gray-500 mt-0.5">{t.desc}</p></div></div>;
          })}</div></div></div>;
  },
  Qx = ({
    categories: e,
    products: t,
    onSelectCategory: r
  }) => !e || e.length === 0 ? null : <section className="py-14 sm:py-16 bg-[#FAF7F5]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"><div><div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/70 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-2">{n.jsx(ke, {
              className: "w-3.5 h-3.5 text-brand-600"
            })}<span>Curated Formulations</span></div><h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1520] tracking-tight">Shop by Category</h2><p className="text-gray-500 text-sm mt-1">Explore pure organic collections crafted for your skin</p></div><button onClick={() => r("all")} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors group self-start sm:self-auto"><span>View All ({t.length})</span>{n.jsx(st, {
            className: "w-4 h-4 transition-transform group-hover:translate-x-1"
          })}</button></div><div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">{e.map(s => {
          var u, g;
          const l = s.id.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-"),
            a = s.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-"),
            i = b => {
              const y = (b.category || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-"),
                j = (b.categoryLabel || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
              return y === l || y === a || j === l || j === a;
            },
            o = t.filter(i).length,
            c = s.image || ((g = (u = t.find(i)) == null ? void 0 : u.images) == null ? void 0 : g[0]) || "/assets/products/body-scrubs/coffee-scrub-satin.jpeg";
          return <div key={s.id} onClick={() => r(s.id)} className="group cursor-pointer flex flex-col items-center text-center transition-all max-w-[170px]"><div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden p-1.5 border-2 border-brand-200/80 bg-white shadow-soft group-hover:border-brand-600 transition-all duration-300 group-hover:scale-105"><div className="w-full h-full rounded-full overflow-hidden bg-brand-50"><img src={c} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" /></div></div><h3 className="font-serif text-lg sm:text-xl font-bold text-[#2D1520] mt-3.5 group-hover:text-brand-600 transition-colors">{s.name}</h3><span className="text-xs text-gray-500 mt-0.5 font-medium">{o}{" "}{o === 1 ? "Product" : "Products"}</span></div>;
        })}</div></div></section>,
  Gx = ({
    onExplore: e
  }) => <section className="py-12 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#F7E7EB] via-[#FCEFF2] to-[#FAF1ED] border border-brand-200/60 shadow-card"><div className="grid grid-cols-1 lg:grid-cols-12 items-center"><div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6"><div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-brand-200 text-brand-700 text-xs font-semibold tracking-wider uppercase">{n.jsx(ke, {
                className: "w-3.5 h-3.5"
              })}<span>The Scrubie Ritual</span></div><h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1520] tracking-tight leading-tight">{"Glow Naturally with "}<br /><span className="italic text-brand-600">Scrubie-Hub</span></h2><p className="text-gray-600 text-base sm:text-lg max-w-lg font-normal leading-relaxed">Clean ingredients. Real results. Our handmade scrubs buff away dry, uneven skin and reveal your smoothest, most luminous radiance yet.</p><div className="pt-2"><button onClick={e} className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"><span>Explore Collection</span>{n.jsx(st, {
                  className: "w-4 h-4"
                })}</button></div></div><div className="lg:col-span-5 h-72 sm:h-96 lg:h-full min-h-[340px] relative overflow-hidden"><img src="/assets/products/body-scrubs/turmeric-scrub-banner.jpeg" alt="Glow Naturally with Scrubie-Hub" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" /><div className="absolute inset-0 bg-gradient-to-r from-[#F7E7EB]/40 via-transparent to-transparent lg:block hidden" /></div></div></div></div></section>,
  Mu = ({
    product: e,
    onOpenQuickView: t
  }) => {
    var j, C;
    const {
        addToCart: r
      } = Qr(),
      {
        isInWishlist: s,
        toggleWishlist: l
      } = yl(),
      [a, i] = F.useState(0),
      [o, c] = F.useState(false),
      u = s(e.id),
      g = S => {
        S.stopPropagation(), r(e, 1), c(true), setTimeout(() => c(false), 600);
      },
      b = S => {
        S.stopPropagation(), l(e.id);
      },
      y = e.originalPrice && e.originalPrice > e.price ? Math.round((e.originalPrice - e.price) / e.originalPrice * 100) : e.discountPercentage && e.discountPercentage > 0 ? e.discountPercentage : 0;
    return <div onClick={() => t(e)} onMouseEnter={() => e.images[1] && i(1)} onMouseLeave={() => i(0)} className="card-lift group bg-white rounded-2xl overflow-hidden border border-[#F0E6E0] shadow-sm flex flex-col cursor-pointer relative"><div className="relative aspect-[4/5] overflow-hidden bg-[#FAF6F4]"><img src={((j = e.images) == null ? void 0 : j[0]) || "/assets/products/body-scrubs/coffee-scrub-podium.jpeg"} alt={e.name} className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ${a === 0 ? "opacity-100 scale-100" : "opacity-0 scale-105"}`} loading="lazy" />{((C = e.images) == null ? void 0 : C[1]) && <img src={e.images[1]} alt={e.name + " 2"} className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ${a === 1 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} loading="lazy" />}<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /><div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">{y > 0 && <span className="badge-bestseller">-{y}% OFF</span>}{e.badges && e.badges[0] && <span className="text-[9px] sm:text-[10px] bg-white/90 backdrop-blur-sm text-brand-700 font-bold px-2 py-0.5 rounded-full border border-brand-100 shadow-sm flex items-center gap-1">{n.jsx(ke, {
              className: "w-2.5 h-2.5 text-brand-500 flex-shrink-0"
            })}{e.badges[0]}</span>}</div>{!e.inStock && <div className="absolute inset-0 bg-white/60 backdrop-blur-xs flex items-center justify-center z-10"><span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Out of Stock</span></div>}<button onClick={b} aria-label="Save to Wishlist" className={`absolute top-2.5 right-2.5 w-9 h-9 rounded-full flex items-center justify-center transition-all z-10 shadow-md border ${u ? "bg-rose-50 border-rose-200 text-brand-600 scale-105" : "bg-white/90 backdrop-blur-xs border-white/50 text-gray-400 hover:text-brand-600 hover:bg-white hover:scale-110"} ${u ? "animate-heart-beat" : ""}`}><Qt className={`w-4 h-4 transition-all ${u ? "fill-current" : ""}`} /></button><div className="absolute inset-x-0 bottom-0 px-3 pb-3 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0"><div className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold py-2 px-3 rounded-xl shadow-lg flex items-center justify-center gap-1.5"><Ps className="w-3.5 h-3.5 text-brand-600" />Quick View</div></div></div><div className="p-3.5 sm:p-4 flex flex-col flex-grow justify-between"><div><span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-500">{e.categoryLabel}</span><h3 className="font-serif text-base sm:text-lg font-bold text-[#2D1520] group-hover:text-brand-700 transition-colors line-clamp-1 mt-0.5 leading-snug">{e.name}</h3><div className="flex items-center gap-1.5 mt-1.5"><div className="flex text-amber-400">{[...Array(5)].map((S, P) => <Nt key={P} className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${P < Math.floor(e.rating) ? "fill-current" : "fill-amber-100 text-amber-200"}`} />)}</div><span className="text-[11px] sm:text-xs font-bold text-gray-700">{e.rating.toFixed(1)}</span><span className="text-[10px] sm:text-xs text-gray-400">({e.reviewCount})</span></div><div className="flex items-baseline gap-2 mt-2"><span className="text-sm sm:text-base font-bold price-tag">{"Rs. "}{e.price.toLocaleString()}</span>{e.originalPrice && <span className="text-[11px] sm:text-xs text-gray-400 line-through">{"Rs. "}{e.originalPrice.toLocaleString()}</span>}</div></div><div className="mt-3 pt-0.5"><button onClick={g} disabled={!e.inStock} className={`btn-luxury w-full py-2.5 sm:py-3 px-3 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all ${o ? "bg-emerald-600 scale-95" : e.inStock ? "bg-brand-600 hover:bg-brand-700 active:scale-[0.98]" : "bg-gray-300 cursor-not-allowed"}`}>{n.jsx(or, {
              className: `w-3.5 h-3.5 ${o ? "animate-bounce" : ""}`
            })}<span>{o ? "Added! ✓" : e.inStock ? "Add to Cart" : "Out of Stock"}</span></button></div></div></div>;
  },
  Kx = ({
    products: e,
    onOpenQuickView: t,
    title: r,
    subtitle: s,
    onViewAll: l,
    showViewAll: a = false
  }) => <section className="py-10 sm:py-14"><div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">{(r || s) && <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-3"><div>{r && <n.Fragment><p className="text-[11px] font-bold uppercase tracking-widest text-brand-500 mb-1">Scrubie-Hub</p><h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#2D1520] tracking-tight">{r}</h2><div className="w-12 h-0.5 bg-brand-600 rounded-full mt-2 sm:mt-3" /></n.Fragment>}{s && <p className="text-gray-500 text-xs sm:text-sm mt-2">{s}</p>}</div>{a && l && <button onClick={l} className="text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-800 transition-colors self-start sm:self-auto border border-brand-200 px-4 py-2 rounded-full hover:bg-brand-50">View All Products →</button>}</div>}<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">{e.map(i => <Mu key={i.id} product={i} onOpenQuickView={t} />)}</div></div></section>,
  Yx = ({
    products: e,
    categories: t,
    onOpenQuickView: r,
    selectedCategory: s,
    setSelectedCategory: l,
    onBackToHome: a
  }) => {
    var ge, ue;
    const i = A => A ? A.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-") : "",
      o = (A, Z) => {
        if (!Z || Z === "all") return true;
        const ee = i(Z),
          v = i(A.category),
          I = i(A.categoryLabel);
        if (v === ee || I === ee) return true;
        if (t && t.length > 0) {
          const x = t.find(m => i(m.id) === ee || i(m.name) === ee);
          if (x) {
            const m = i(x.id),
              D = i(x.name);
            if (v === m || v === D || I === m || I === D) return true;
          }
        }
        return false;
      },
      c = F.useMemo(() => {
        if (!e || e.length === 0) return 5e3;
        const A = Math.max(...e.map(Z => Number(Z.price) || 0));
        return Math.max(5e3, Math.ceil(A / 1e3) * 1e3);
      }, [e]),
      [u, g] = F.useState(() => c),
      [b, y] = F.useState([]),
      [j, C] = F.useState(false),
      [S, P] = F.useState("default"),
      [f, d] = F.useState(1),
      [h, w] = F.useState(false),
      k = 8,
      L = F.useMemo(() => [{
        id: "all",
        label: "All Categories"
      }, ...(t && t.length > 0 ? t.map(A => ({
        id: A.id,
        label: A.name
      })) : [{
        id: "body-scrubs",
        label: "Body Scrubs"
      }])], [t]),
      O = ["All Skin Types", "Oily Skin", "Dry Skin", "Combination Skin", "Sensitive Skin"],
      _ = A => {
        y(Z => Z.includes(A) ? Z.filter(ee => ee !== A) : [...Z, A]), d(1);
      },
      G = () => {
        l("all"), g(c), y([]), C(false), P("default"), d(1);
      },
      N = F.useMemo(() => e.filter(A => {
        if (s !== "all" && !o(A, s) || (Number(A.price) || 0) > u) return false;
        if (b.length > 0) {
          const ee = Array.isArray(A.skinType) ? A.skinType : ["All Skin Types"];
          if (!b.some(I => ee.includes(I))) return false;
        }
        return !(j && !A.isBestSeller);
      }).sort((A, Z) => {
        const ee = Number(A.price) || 0,
          v = Number(Z.price) || 0;
        return S === "price-low" ? ee - v : S === "price-high" ? v - ee : S === "rating" ? (Number(Z.rating) || 5) - (Number(A.rating) || 5) : 0;
      }), [e, s, u, b, j, S, t]),
      Q = Math.ceil(N.length / k) || 1,
      de = N.slice((f - 1) * k, f * k);
    return <div className="bg-[#FAF7F5] min-h-screen py-6 sm:py-8"><div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8"><div className="bg-gradient-to-r from-[#FBF0F2] via-[#FDF5F7] to-[#F5ECE4] rounded-2xl p-5 sm:p-8 lg:p-12 mb-6 sm:mb-10 border border-brand-200/50 shadow-soft relative overflow-hidden"><div className="max-w-2xl relative z-10"><div className="flex items-center gap-2 text-xs text-gray-500 mb-3"><button onClick={a} className="hover:text-brand-600 transition-colors flex items-center gap-1">{n.jsx(xx, {
                  className: "w-3 h-3"
                })}Home</button><span>/</span><span className="text-brand-700 font-semibold">Shop</span></div><h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2D1520] tracking-tight">Our Products</h1><p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-2">Natural skincare for every skin type. Handcrafted organic scrubs, potent serums, and pure botanical remedies.</p></div><div className="absolute right-4 -bottom-10 opacity-10 sm:opacity-20 pointer-events-none"><img src="/assets/logo/logo.png" alt="" className="w-40 sm:w-64 h-40 sm:h-64 rounded-full object-cover" /></div></div><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"><div className="lg:hidden flex items-center justify-between pb-3"><button onClick={() => w(true)} className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-brand-200 rounded-xl text-sm font-semibold text-[#2D1520] shadow-sm tap-target"><Ox className="w-4 h-4 text-brand-600" /><span>{"Filters & Sort"}</span></button><span className="text-xs text-gray-500 font-medium">{N.length}{" item"}{N.length !== 1 ? "s" : ""}</span></div><aside className="hidden lg:block lg:col-span-3 bg-white p-6 rounded-2xl border border-[#F0E6E0] shadow-sm space-y-7"><div className="flex items-center justify-between border-b border-gray-100 pb-4"><span className="font-serif text-lg font-bold text-[#2D1520]">Filters</span><button onClick={G} className="text-xs font-semibold text-brand-600 hover:text-brand-800 transition-colors">Reset All</button></div><div><h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">Categories</h3><div className="space-y-2">{L.map(A => {
                  const Z = A.id === "all" ? e.length : e.filter(ee => o(ee, A.id)).length;
                  return <button key={A.id} onClick={() => {
                    l(A.id), d(1);
                  }} className={`w-full flex items-center justify-between text-xs sm:text-sm py-1.5 px-2 rounded-md transition-colors text-left ${s === A.id ? "bg-brand-50 text-brand-700 font-bold" : "text-gray-600 hover:text-brand-600 hover:bg-gray-50"}`}><span>{A.label}</span><span className="text-xs text-gray-400 font-normal">({Z})</span></button>;
                })}</div></div><div><div className="flex items-center justify-between mb-2"><h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Price Range</h3><span className="text-xs font-bold text-brand-700">{"Up to Rs. "}{u.toLocaleString()}</span></div><input type="range" min="499" max={c} step="100" value={u} onChange={A => {
                g(Number(A.target.value)), d(1);
              }} className="w-full accent-brand-600 cursor-pointer" /><div className="flex justify-between text-[11px] text-gray-400 mt-1"><span>Rs. 499</span><span>{"Rs. "}{c.toLocaleString()}+</span></div></div><div><h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">Skin Type</h3><div className="space-y-2">{O.map(A => {
                  const Z = e.filter(v => (Array.isArray(v.skinType) ? v.skinType : ["All Skin Types"]).includes(A)).length,
                    ee = b.includes(A);
                  return <label key={A} className="flex items-center justify-between text-xs sm:text-sm text-gray-600 hover:text-gray-900 cursor-pointer select-none"><div className="flex items-center gap-2.5"><input type="checkbox" checked={ee} onChange={() => _(A)} className="rounded border-gray-300 text-brand-600 focus:ring-brand-500 w-4 h-4 accent-brand-600" /><span>{A}</span></div><span className="text-xs text-gray-400">({Z})</span></label>;
                })}</div></div><div className="pt-2 border-t border-gray-100"><label className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800 cursor-pointer select-none"><input type="checkbox" checked={j} onChange={A => {
                  C(A.target.checked), d(1);
                }} className="rounded border-gray-300 text-brand-600 focus:ring-brand-500 w-4 h-4 accent-brand-600" /><span>Show Only Best Sellers</span></label></div><div className="pt-2 border-t border-gray-100"><h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">Brand</h3><label className="flex items-center justify-between text-xs sm:text-sm text-gray-600"><div className="flex items-center gap-2.5"><input type="checkbox" checked={true} readOnly={true} className="rounded border-gray-300 text-brand-600 w-4 h-4 accent-brand-600" /><span>Scrubie-Hub.pk</span></div><span className="text-xs text-gray-400">({e.length})</span></label></div></aside><div className="lg:col-span-9 space-y-6"><div className="bg-white p-4 rounded-xl border border-[#F0E6E0] flex flex-col sm:flex-row sm:items-center justify-between gap-4"><span className="text-xs sm:text-sm text-gray-500">{"Showing "}<strong className="text-gray-900">{N.length > 0 ? (f - 1) * k + 1 : 0}</strong>{" - "}<strong className="text-gray-900">{Math.min(f * k, N.length)}</strong>{" of "}<strong className="text-gray-900">{N.length}</strong>{" results"}</span><div className="flex items-center gap-2 self-end sm:self-auto"><span className="text-xs text-gray-500 whitespace-nowrap">Sort by:</span><select value={S} onChange={A => P(A.target.value)} className="text-xs sm:text-sm bg-[#FAF7F5] border border-gray-200 rounded-md py-1.5 px-3 font-medium text-gray-700 focus:outline-none focus:border-brand-500"><option value="default">Default sorting</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option><option value="rating">Average Rating</option></select></div></div>{(s !== "all" || b.length > 0 || j || u < c) && <div className="flex items-center gap-2 flex-wrap text-xs"><span className="text-gray-400">Active filters:</span>{s !== "all" && <span className="inline-flex items-center gap-1 bg-brand-100 text-brand-800 px-2.5 py-1 rounded-full font-medium">{"Category: "}{((ge = L.find(A => A.id === s)) == null ? void 0 : ge.label) || s}<button onClick={() => l("all")}><Le className="w-3 h-3" /></button></span>}{b.map(A => <span key={A} className="inline-flex items-center gap-1 bg-brand-100 text-brand-800 px-2.5 py-1 rounded-full font-medium">{A}<button onClick={() => _(A)}><Le className="w-3 h-3" /></button></span>)}{j && <span className="inline-flex items-center gap-1 bg-brand-100 text-brand-800 px-2.5 py-1 rounded-full font-medium">Best Sellers Only<button onClick={() => C(false)}><Le className="w-3 h-3" /></button></span>}{u < c && <span className="inline-flex items-center gap-1 bg-brand-100 text-brand-800 px-2.5 py-1 rounded-full font-medium">{"Under Rs. "}{u.toLocaleString()}<button onClick={() => g(c)}><Le className="w-3 h-3" /></button></span>}</div>}{de.length > 0 ? <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">{de.map(A => <Mu key={A.id} product={A} onOpenQuickView={r} />)}</div> : <div className="bg-white rounded-2xl p-10 sm:p-14 text-center border border-gray-200 shadow-xs"><div className="w-14 h-14 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-3"><Ex className="w-6 h-6 opacity-60" /></div><p className="font-serif text-xl font-bold text-[#2D1520] mb-1.5">{s !== "all" ? `No products in "${((ue = L.find(A => A.id === s)) == null ? void 0 : ue.label) || s}" yet` : "No products matched your filters"}</p><p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto mb-5">{s !== "all" ? "New handcrafted skincare items will be added to this collection soon. Check back shortly!" : "Try clearing your active filters to explore our full handcrafted skincare catalog."}</p><div className="flex flex-wrap items-center justify-center gap-3"><button onClick={G} className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs">View All Products</button>{s !== "all" && <button onClick={() => l("all")} className="px-4 py-2.5 bg-[#FAF7F5] hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold transition-colors">Browse All Categories</button>}</div></div>}{Q > 1 && <div className="flex items-center justify-center gap-2 pt-6"><button onClick={() => d(A => Math.max(1, A - 1))} disabled={f === 1} className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center text-sm font-medium disabled:opacity-30 hover:bg-gray-100 transition-colors">{"<"}</button>{[...Array(Q)].map((A, Z) => <button key={Z + 1} onClick={() => d(Z + 1)} className={`w-9 h-9 rounded-md text-sm font-bold transition-all ${f === Z + 1 ? "bg-brand-600 text-white shadow-sm" : "border border-gray-200 text-gray-700 hover:bg-gray-100"}`}>{Z + 1}</button>)}<button onClick={() => d(A => Math.min(Q, A + 1))} disabled={f === Q} className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center text-sm font-medium disabled:opacity-30 hover:bg-gray-100 transition-colors">{">"}</button></div>}</div></div></div>{h && <div className="fixed inset-0 z-50 flex flex-col justify-end"><div className="absolute inset-0 bg-black/50 backdrop-blur-xs" onClick={() => w(false)} /><div className="relative z-10 w-full bg-white rounded-t-2xl max-h-[85vh] flex flex-col"><div className="flex justify-center pt-3 pb-1"><div className="w-10 h-1 rounded-full bg-gray-300" /></div><div className="flex items-center justify-between px-5 py-3 border-b"><span className="font-serif text-lg font-bold text-[#2D1520]">{"Filters & Sort"}</span><button onClick={() => w(false)} className="p-1.5 text-gray-500 hover:text-gray-800 tap-target"><Le className="w-5 h-5" /></button></div><div className="overflow-y-auto flex-1 p-5 space-y-5"><div><h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-2">Sort By</h3><div className="grid grid-cols-2 gap-2">{[{
                  value: "default",
                  label: "Default"
                }, {
                  value: "price-low",
                  label: "Price: Low to High"
                }, {
                  value: "price-high",
                  label: "Price: High to Low"
                }, {
                  value: "rating",
                  label: "Best Rated"
                }].map(A => <button key={A.value} onClick={() => P(A.value)} className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${S === A.value ? "border-brand-600 bg-brand-50 text-brand-700 font-bold" : "border-gray-200 text-gray-600"}`}>{A.label}</button>)}</div></div><div><h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-2">Category</h3><div className="flex flex-wrap gap-2">{L.map(A => <button key={A.id} onClick={() => {
                  l(A.id), d(1);
                }} className={`py-2 px-3.5 rounded-full text-xs font-semibold border transition-all ${s === A.id ? "bg-brand-600 text-white border-brand-600" : "border-gray-200 text-gray-600 hover:border-brand-300"}`}>{A.label}</button>)}</div></div><div><div className="flex justify-between mb-2"><h3 className="text-xs font-bold uppercase tracking-wider text-gray-800">Max Price</h3><span className="text-xs font-bold text-brand-700">{"Rs. "}{u.toLocaleString()}</span></div><input type="range" min="499" max={c} step="100" value={u} onChange={A => {
                g(Number(A.target.value)), d(1);
              }} className="w-full accent-brand-600" /></div><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" checked={j} onChange={A => {
                C(A.target.checked), d(1);
              }} className="w-4 h-4 accent-brand-600" /><span className="text-sm font-semibold text-gray-800">Best Sellers Only</span></label></div><div className="px-5 py-4 border-t flex gap-3 cart-drawer-safe"><button onClick={G} className="flex-shrink-0 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl text-sm font-semibold">Reset</button><button onClick={() => w(false)} className="flex-grow py-3 bg-brand-600 text-white rounded-xl text-sm font-bold shadow-sm">{"Show "}{N.length}{" Results"}</button></div></div></div>}</div>;
  },
  qx = () => {
    const e = [{
      icon: Fs,
      title: "Natural Ingredients",
      desc: "Safe for your skin"
    }, {
      icon: Qt,
      title: "Cruelty Free",
      desc: "No animal testing"
    }, {
      icon: Nu,
      title: "Skincare Experts",
      desc: "Trusted by thousands"
    }, {
      icon: Rx,
      title: "Satisfaction Guarantee",
      desc: "Your happiness matters"
    }];
    return <section className="py-16 bg-[#FAF7F5] border-t border-[#F2EAE4]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1520] tracking-tight mb-12">Why Choose Scrubie-Hub?</h2><div className="grid grid-cols-2 lg:grid-cols-4 gap-8">{e.map((t, r) => {
            const s = t.icon;
            return <div key={r} className="flex flex-col items-center group"><div className="w-16 h-16 rounded-2xl bg-white border border-brand-200 shadow-soft flex items-center justify-center text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 mb-4">{n.jsx(s, {
                  className: "w-7 h-7"
                })}</div><h3 className="font-serif text-lg sm:text-xl font-bold text-[#2D1520] mb-1">{t.title}</h3><p className="text-xs sm:text-sm text-gray-500">{t.desc}</p></div>;
          })}</div></div></section>;
  },
  Hr = [{
    id: "scrub-coffee-01",
    name: "Coffee Body Scrub",
    slug: "coffee-body-scrub",
    category: "body-scrubs",
    categoryLabel: "Body Scrubs",
    price: 1499,
    originalPrice: 1999,
    discountPercentage: 25,
    rating: 4.8,
    reviewCount: 124,
    shortDescription: "100% handmade exfoliating scrub with organic roasted coffee and nourishing botanicals.",
    description: "Our Coffee Body Scrub is specially formulated to gently exfoliate dead skin cells, boost circulation and deeply nourish your skin. Made with real organic coffee granules, cold-pressed coconut oil, and skin-loving vitamins, it helps buff away dry patches, minimizes the look of stretch marks, and leaves skin remarkably soft, toned, and radiantly glowing.",
    benefits: ["Removes dead skin cells and surface impurities", "Improves blood circulation and cellular renewal", "Helps diminish the appearance of cellulite & stretch marks", "Locks in deep moisture, leaving skin velvety smooth & glowing"],
    keyIngredients: ["Roasted Arabica Coffee Grounds", "Organic Cold-Pressed Coconut Oil", "Cane Sugar Granules", "Sweet Almond Oil", "Pure Vitamin E Oil"],
    howToUse: "Start by cleansing your skin with warm water. Apply a generous scoop of the coffee scrub and gently massage in circular motions for 30 to 50 seconds, focusing on dry areas like elbows and heels. Rinse thoroughly with lukewarm water, pat dry, and lock in hydration with a moisturizer.",
    skinType: ["All Skin Types", "Dry Skin", "Combination Skin"],
    badges: ["Best Seller", "100% Organic", "Handmade"],
    isBestSeller: true,
    inStock: true,
    images: ["/assets/products/body-scrubs/coffee-scrub-podium.jpeg", "/assets/products/body-scrubs/coffee-scrub-satin.jpeg", "/assets/products/body-scrubs/coffee-scrub-collage.jpeg"],
    weightOrVolume: "250g / 8.8 oz"
  }, {
    id: "scrub-turmeric-02",
    name: "Turmeric Body Scrub",
    slug: "turmeric-body-scrub",
    category: "body-scrubs",
    categoryLabel: "Body Scrubs",
    price: 1499,
    originalPrice: 1899,
    discountPercentage: 21,
    rating: 4.9,
    reviewCount: 98,
    shortDescription: "Skin-brightening organic wild turmeric polish for hyperpigmentation and sun-tan removal.",
    description: "Infused with potent wild kasturi turmeric and botanical oils, this handcrafted body scrub acts as an instant brightening treatment. It gently removes dead epidermal layers, fades sun tan, helps even out stubborn dark spots, and restores a warm, luminous natural glow without staining.",
    benefits: ["Deeply brightens dull skin and targets hyperpigmentation", "Gently buffs away tough sun tan and blemish marks", "Packed with potent natural antioxidants and curcumin", "Leaves skin silky-smooth with a golden, healthy radiance"],
    keyIngredients: ["Wild Kasturi Turmeric (Haldi)", "Raw Golden Cane Sugar", "Pure Jojoba & Sweet Almond Oil", "Unrefined Shea Butter", "Lemon Essential Oil & Vitamin C"],
    howToUse: "Apply on damp skin during bath or shower. Gently buff across the body in circular upward motions for 1 to 2 minutes. Rinse cleanly with water. For optimal brightening, use 2-3 times weekly.",
    skinType: ["All Skin Types", "Oily Skin", "Combination Skin"],
    badges: ["Trending", "Skin Brightening", "100% Organic"],
    isBestSeller: true,
    inStock: true,
    images: ["/assets/products/body-scrubs/turmeric-scrub-banner.jpeg", "/assets/products/body-scrubs/turmeric-scrub-podium.jpeg", "/assets/products/body-scrubs/turmeric-scrub-satin.jpeg", "/assets/products/body-scrubs/turmeric-scrub-collage.jpeg"],
    weightOrVolume: "250g / 8.8 oz"
  }, {
    id: "scrub-nila-03",
    name: "Moroccan Nila Body Scrub",
    slug: "moroccan-nila-scrub",
    category: "body-scrubs",
    categoryLabel: "Body Scrubs",
    price: 1599,
    originalPrice: 2099,
    discountPercentage: 24,
    rating: 4.9,
    reviewCount: 142,
    shortDescription: "Authentic Moroccan royal beauty secret for dark knees, elbows, and total body brightening.",
    description: "Experience the timeless Moroccan Hammam ritual with our Moroccan Nila Body Scrub. Royal blue Nila powder is renowned for its miraculous brightening power on stubborn areas such as knees, elbows, knuckles, and underarms. It purifies pores, sloughs off rough keratin buildup, and leaves skin touchably soft.",
    benefits: ["Targets stubborn dark patches on knees, elbows & underarms", "Detoxifies and smooths bumpy strawberry skin / keratosis pilaris", "Infused with Moroccan Argan oil for non-greasy luxury hydration", "Evens skin tone for a clear porcelain glow"],
    keyIngredients: ["Authentic Moroccan Blue Nila Powder", "Pure Argan Oil", "Ultra-fine Exfoliating Sugar Crystals", "Sweet Almond & Grapeseed Oil", "Blue Chamomile Extract"],
    howToUse: "Take a small amount and apply directly to damp skin, concentrating on pigmented areas. Massage gently for 1 minute before rinsing off with warm water. Follow with body lotion.",
    skinType: ["All Skin Types", "Dry Skin", "Combination Skin"],
    badges: ["TikTok Viral", "Moroccan Ritual", "Best Seller"],
    isBestSeller: true,
    inStock: true,
    images: ["/assets/products/body-scrubs/moroccan-nila-banner.jpeg", "/assets/products/body-scrubs/moroccan-nila-satin.jpeg", "/assets/products/body-scrubs/moroccan-nila-collage.jpeg"],
    weightOrVolume: "250g / 8.8 oz"
  }, {
    id: "scrub-rose-04",
    name: "Rosey Rose Body Scrub",
    slug: "rosey-rose-scrub",
    category: "body-scrubs",
    categoryLabel: "Body Scrubs",
    price: 1499,
    originalPrice: 1950,
    discountPercentage: 23,
    rating: 4.8,
    reviewCount: 86,
    shortDescription: "Gentle exfoliating rose polish infused with Damask rose water and pink mineral crystals.",
    description: "Immerse yourself in romance and indulgence. Our Rosey Rose Body Scrub combines delicate Damask rose petals, fine pink exfoliating crystals, and nutrient-dense botanical oils. It buffs away flakiness while wrapping your body in a cloud of velvety hydration and a subtle, intoxicating fragrance of fresh roses.",
    benefits: ["Soothes sensitive, stressed skin while gently polishing", "Restores natural moisture barrier and prevents dehydration", "Leaves skin feeling baby-soft with a romantic lingering scent", "Loaded with antioxidants from pure rosehip and rose extracts"],
    keyIngredients: ["Damask Rose Petal Extract & Rosewater", "Himalayan Pink Salt Crystals", "Virgin Rosehip Seed Oil", "Organic Apricot Kernel Oil", "Vegetable Glycerin & Vitamin E"],
    howToUse: "Smooth over wet body in the shower using circular hand strokes. Allow the therapeutic botanicals to absorb for 1 minute, then rinse clean.",
    skinType: ["All Skin Types", "Sensitive Skin", "Dry Skin"],
    badges: ["Aromatherapy", "Handmade", "100% Organic"],
    isBestSeller: true,
    inStock: true,
    images: ["/assets/products/body-scrubs/rosey-rose-banner.jpeg", "/assets/products/body-scrubs/rosey-rose-satin.jpeg", "/assets/products/body-scrubs/rosey-rose-collage.jpeg"],
    weightOrVolume: "250g / 8.8 oz"
  }];
Hr.length, Hr.filter(e => e.category === "body-scrubs").length;
const hs = [{
    id: "rev-1",
    userName: "Ayesha Khan",
    rating: 5,
    date: "14 Sep 2026",
    comment: "I absolutely love Scrubie-Hub! The Coffee Body Scrub smell is out of this world and my skin has never felt softer. Fast delivery to Lahore too!",
    verifiedPurchase: true,
    location: "Lahore"
  }, {
    id: "rev-2",
    userName: "Zainab Fatima",
    rating: 5,
    date: "08 Sep 2026",
    comment: "The Moroccan Nila scrub is magic! I was skeptical at first, but after just two uses my dark elbows and knees are noticeably brighter. Highly recommended!",
    verifiedPurchase: true,
    location: "Karachi"
  }, {
    id: "rev-3",
    userName: "Maryam Bilal",
    rating: 5,
    date: "02 Sep 2026",
    comment: "Rosey Rose scrub feels like a high-end luxury spa in a jar. The packaging is aesthetic and 100% organic ingredients don't irritate my sensitive skin at all.",
    verifiedPurchase: true,
    location: "Islamabad"
  }, {
    id: "rev-4",
    userName: "Hira Tariq",
    rating: 5,
    date: "28 Aug 2026",
    comment: "Ordering on WhatsApp was super seamless and the customer care was so polite. The Turmeric scrub cleared my beach sun tan within 4 days!",
    verifiedPurchase: true,
    location: "Faisalabad"
  }],
  Zx = () => {
    const [e, t] = F.useState(0),
      r = () => {
        t(a => a === 0 ? hs.length - 1 : a - 1);
      },
      s = () => {
        t(a => a === hs.length - 1 ? 0 : a + 1);
      },
      l = hs[e];
    return <section className="py-16 bg-white border-t border-[#F2EAE4]"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1520] tracking-tight">What Our Customers Say</h2><p className="text-gray-500 text-sm mt-1 mb-10">Real people. Real results.</p><div className="relative bg-[#FDFAF8] border border-brand-100 rounded-2xl p-6 sm:p-10 shadow-soft max-w-2xl mx-auto"><div className="flex flex-col sm:flex-row items-center gap-5 text-left"><div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-brand-300 shadow-sm flex-shrink-0 bg-brand-100"><img src={"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"} alt={l.userName} className="w-full h-full object-cover" /></div><div className="space-y-2 flex-grow text-center sm:text-left"><p className="italic text-gray-700 text-sm sm:text-base leading-relaxed">{'"'}{l.comment}{'"'}</p><div><h4 className="font-serif text-lg font-bold text-[#2D1520]">{l.userName}</h4>{l.location && <span className="text-xs text-gray-400">{l.location}, Pakistan</span>}</div><div className="flex justify-center sm:justify-start text-amber-400 pt-1">{[...Array(l.rating)].map((a, i) => <Nt key={i} className="w-4 h-4 fill-current" />)}</div></div></div><div className="flex items-center justify-center gap-3 mt-6 pt-4 border-t border-brand-100/60"><button onClick={r} className="p-2 rounded-full hover:bg-white text-gray-500 hover:text-brand-600 transition-colors" aria-label="Previous review">{n.jsx(gx, {
                className: "w-4 h-4"
              })}</button><div className="flex gap-1.5">{hs.map((a, i) => <button key={i} onClick={() => t(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${e === i ? "bg-brand-600 w-5" : "bg-brand-200"}`} aria-label={`Go to slide ${i + 1}`} />)}</div><button onClick={s} className="p-2 rounded-full hover:bg-white text-gray-500 hover:text-brand-600 transition-colors" aria-label="Next review">{n.jsx(yx, {
                className: "w-4 h-4"
              })}</button></div></div></div></section>;
  },
  Xx = ({
    onNavClick: e,
    onOpenAbout: t,
    onOpenContact: r,
    onOpenPolicy: s
  }) => {
    const [l, a] = F.useState(""),
      [i, o] = F.useState(false),
      c = u => {
        u.preventDefault(), l.trim() && (o(true), a(""), setTimeout(() => o(false), 4e3));
      };
    return <footer className="bg-[#2D1520] text-[#EFE8E4] pt-16 pb-12 border-t border-[#442232]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#4A2437]"><div className="lg:col-span-4 space-y-4"><div onClick={() => e("home")} className="flex items-center gap-3 cursor-pointer group"><div className="w-10 h-10 rounded-full overflow-hidden border border-brand-400/50 bg-white/10 p-0.5"><img src="/assets/logo/logo.png" alt="Scrubie-Hub Logo" className="w-full h-full object-cover rounded-full" /></div><span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-pink-300 transition-colors">Scrubie-Hub</span></div><p className="text-xs sm:text-sm text-[#D1B8C4] max-w-sm leading-relaxed">Your one stop shop for all things skincare. Pure botanical body scrubs and organic luxury treatments made with love in Pakistan.</p><div className="flex items-center space-x-3 pt-2"><a href={`https://instagram.com/${le.instagram}`} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-600 flex items-center justify-center text-white transition-colors" aria-label="Instagram"><Ax className="w-4 h-4" /></a><a href={`https://facebook.com/${le.facebook}`} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-600 flex items-center justify-center text-white transition-colors" aria-label="Facebook"><Cx className="w-4 h-4" /></a><a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-600 flex items-center justify-center text-white transition-colors" aria-label="YouTube"><Bx className="w-4 h-4" /></a></div></div><div className="lg:col-span-2 space-y-3"><h4 className="font-serif text-base font-bold text-white tracking-wide">Quick Links</h4><ul className="space-y-2 text-xs sm:text-sm text-[#D1B8C4]"><li><button onClick={() => e("home")} className="hover:text-white transition-colors">Home</button></li><li><button onClick={() => e("shop")} className="hover:text-white transition-colors">Shop</button></li><li><button onClick={() => e("about")} className="hover:text-white transition-colors">About</button></li><li><button onClick={() => e("contact")} className="hover:text-white transition-colors">Contact</button></li></ul></div><div className="lg:col-span-3 space-y-3"><h4 className="font-serif text-base font-bold text-white tracking-wide">Customer Care</h4><ul className="space-y-2 text-xs sm:text-sm text-[#D1B8C4]"><li><button onClick={() => s("shipping")} className="hover:text-white transition-colors text-left">Shipping Policy</button></li><li><button onClick={() => s("return")} className="hover:text-white transition-colors text-left">Return Policy</button></li><li><button onClick={() => s("privacy")} className="hover:text-white transition-colors text-left">Privacy Policy</button></li><li><button onClick={() => s("terms")} className="hover:text-white transition-colors text-left">{"Terms & Conditions"}</button></li></ul></div><div className="lg:col-span-3 space-y-3"><h4 className="font-serif text-base font-bold text-white tracking-wide">Newsletter</h4><p className="text-xs text-[#D1B8C4] leading-relaxed">Subscribe for the latest updates, exclusive discounts, and new small-batch releases.</p><form onSubmit={c} className="relative mt-2"><input type="email" required={true} placeholder="Your email address" value={l} onChange={u => a(u.target.value)} className="w-full py-2.5 pl-3 pr-10 bg-white/10 border border-white/20 rounded-md text-xs text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-400" /><button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 px-2.5 bg-brand-600 hover:bg-brand-500 text-white rounded text-xs flex items-center justify-center transition-colors" aria-label="Subscribe">{i ? n.jsx(hx, {
                  className: "w-3.5 h-3.5"
                }) : n.jsx(st, {
                  className: "w-3.5 h-3.5"
                })}</button></form>{i && <p className="text-[11px] text-pink-300 animate-in fade-in">🌸 Thank you for subscribing!</p>}</div></div><div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A88899] gap-4 text-center sm:text-left"><p>{"© "}{new Date().getFullYear()}{" Scrubie-Hub. All rights reserved."}</p><p className="flex items-center gap-1.5"><span>Handcrafted with</span><span className="text-pink-400">♥</span><span>in Pakistan</span></p></div></div></footer>;
  },
  Jx = ({
    product: e,
    onClose: t,
    onOpenQuickView: r,
    allProducts: s
  }) => {
    if (!e) return null;
    const {
        addToCart: l
      } = Qr(),
      {
        isInWishlist: a,
        toggleWishlist: i
      } = yl(),
      [o, c] = F.useState(0),
      [u, g] = F.useState(1),
      [b, y] = F.useState("desc"),
      [j, C] = F.useState(false),
      S = a(e.id),
      P = e.originalPrice && e.originalPrice > e.price ? Math.round((e.originalPrice - e.price) / e.originalPrice * 100) : e.discountPercentage && e.discountPercentage > 0 ? e.discountPercentage : 0,
      f = () => {
        l(e, u), C(true), setTimeout(() => C(false), 2e3);
      },
      d = () => {
        const w = e.price * u,
          k = w >= le.freeDeliveryThreshold,
          L = k ? 0 : le.standardDeliveryFee,
          O = w + L,
          _ = k ? "FREE (Standard Shipping)" : `Rs. ${L.toLocaleString()} (Standard Shipping)`,
          G = Math.floor(1e3 + Math.random() * 9e3),
          N = new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
          }),
          Q = `✨ *SCRUBIE HUB PK | INSTANT ORDER INQUIRY* ✨
Order ID: #SH-${G}
Date: ${N}

━━━━━━━━━━━━━━━━━━━━━
🛍️ *PRODUCT SELECTION*
1. ${e.name}
   ▫️ Qty: ${u} × Rs. ${e.price.toLocaleString()}

━━━━━━━━━━━━━━━━━━━━━
💳 *PAYMENT & BILLING*
• Items Subtotal: Rs. ${w.toLocaleString()}
• Delivery Charges: ${_}
• Payment Method: Cash on Delivery (COD)
• *Net Payable Amount:* *Rs. ${O.toLocaleString()}*
━━━━━━━━━━━━━━━━━━━━━
🌿 _Hi! I want to order this product. Please share confirmation & dispatch details._`;
        $n(Q);
      },
      h = s.filter(w => w.id !== e.id).slice(0, 3);
    return <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"><div className="fixed inset-0" onClick={t} /><div className="relative bg-white rounded-2xl shadow-2xl border border-brand-100 max-w-4xl w-full max-h-[92vh] overflow-y-auto z-10 p-5 sm:p-8"><button onClick={t} className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors z-20" aria-label="Close modal"><Le className="w-5 h-5" /></button><div className="text-xs text-gray-400 mb-6 flex items-center gap-1.5 flex-wrap"><span className="hover:text-brand-600 cursor-pointer">Home</span><span>{">"}</span><span className="hover:text-brand-600 cursor-pointer">Shop</span><span>{">"}</span><span className="hover:text-brand-600 cursor-pointer">{e.categoryLabel}</span><span>{">"}</span><span className="text-gray-700 font-medium">{e.name}</span></div><div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"><div className="md:col-span-6 flex flex-col-reverse sm:flex-row gap-3">{e.images.length > 1 && <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">{e.images.map((w, k) => <button key={k} onClick={() => c(k)} className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${o === k ? "border-brand-600 shadow-sm" : "border-gray-200 opacity-70 hover:opacity-100"}`}><img src={w} alt="" className="w-full h-full object-cover" /></button>)}</div>}<div className="relative flex-grow aspect-square rounded-xl overflow-hidden bg-[#FAF6F4] border border-gray-100"><img src={e.images[o] || e.images[0]} alt={e.name} className="w-full h-full object-cover object-center" />{P > 0 && <span className="absolute top-3 left-3 bg-brand-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm">-{P}% OFF</span>}</div></div><div className="md:col-span-6 space-y-4"><div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">{n.jsx(ke, {
                className: "w-3 h-3"
              })}<span>{e.categoryLabel}</span></div><h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D1520] tracking-tight">{e.name}</h1><div className="flex items-center gap-2"><div className="flex text-amber-400">{[...Array(5)].map((w, k) => <Nt key={k} className={`w-4 h-4 ${k < Math.floor(e.rating) ? "fill-current" : "fill-amber-100 text-amber-200"}`} />)}</div><span className="text-sm font-semibold text-gray-800">{e.rating.toFixed(1)}</span><span className="text-xs text-gray-500">({e.reviewCount}{" customer reviews)"}</span></div><div className="flex items-baseline gap-3 pt-1"><span className="text-2xl sm:text-3xl font-bold text-[#2D1520]">{"Rs. "}{e.price.toLocaleString()}</span>{e.originalPrice && <span className="text-base text-gray-400 line-through">{"Rs. "}{e.originalPrice.toLocaleString()}</span>}</div><p className="text-gray-600 text-sm leading-relaxed">{e.shortDescription}</p><div className="bg-[#FAF7F5] border border-pink-100/80 rounded-xl p-3.5 space-y-2"><div className="text-[11px] font-bold uppercase tracking-wider text-brand-700 flex items-center gap-1.5">{n.jsx(ke, {
                  className: "w-3.5 h-3.5"
                })}<span>{"Sensory & Texture Profile"}</span></div><div className="grid grid-cols-3 gap-2 text-center text-xs"><div className="bg-white p-2 rounded-lg border border-pink-50 shadow-2xs"><span className="text-[10px] text-gray-400 block uppercase font-medium">Texture</span><span className="font-semibold text-gray-800 text-[11px]">{e.category.includes("scrub") ? "Whipped Sugar" : "Silky Polish"}</span></div><div className="bg-white p-2 rounded-lg border border-pink-50 shadow-2xs"><span className="text-[10px] text-gray-400 block uppercase font-medium">Grit Level</span><span className="font-semibold text-brand-700 text-[11px]">●●○ Medium</span></div><div className="bg-white p-2 rounded-lg border border-pink-50 shadow-2xs"><span className="text-[10px] text-gray-400 block uppercase font-medium">Scent Notes</span><span className="font-semibold text-gray-800 text-[11px] truncate block">{e.name.includes("Coffee") ? "Arabica Bean" : "Warm Glow"}</span></div></div></div><div className="space-y-1.5 py-2 border-y border-gray-100">{e.benefits.map((w, k) => <div key={k} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700"><span className="w-4 h-4 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span><span>{w}</span></div>)}</div><div className="pt-2 space-y-3"><div className="flex items-center gap-4"><span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Quantity:</span><div className="inline-flex items-center border border-gray-300 rounded-md bg-white"><button onClick={() => g(Math.max(1, u - 1))} className="px-3 py-1.5 text-gray-600 hover:text-black font-semibold text-sm hover:bg-gray-50 transition-colors">-</button><span className="px-3 py-1.5 text-sm font-bold text-gray-900 min-w-[2.5rem] text-center">{u}</span><button onClick={() => g(u + 1)} className="px-3 py-1.5 text-gray-600 hover:text-black font-semibold text-sm hover:bg-gray-50 transition-colors">+</button></div></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1"><button onClick={f} className="py-3 px-4 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-medium text-sm rounded-md shadow-md flex items-center justify-center gap-2 transition-all">{n.jsx(or, {
                    className: "w-4 h-4"
                  })}<span>{j ? "Added to Bag! ✓" : "Add to Cart"}</span></button><button onClick={d} className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium text-sm rounded-md shadow-md flex items-center justify-center gap-2 transition-all"><Mr className="w-4 h-4" /><span>Order via WhatsApp</span></button></div><div className="pt-1"><button onClick={() => i(e.id)} className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-brand-600 transition-colors"><Qt className={`w-4 h-4 ${S ? "fill-brand-600 text-brand-600" : ""}`} /><span>{S ? "Saved in Wishlist" : "Add to Wishlist"}</span></button></div></div><div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 text-center"><div className="p-2 rounded-lg bg-[#FAF7F5]"><Lx className="w-4 h-4 text-brand-600 mx-auto mb-1" /><p className="text-[10px] sm:text-xs font-bold text-gray-800">100% Natural</p><p className="text-[9px] text-gray-500">{"Organic & Safe"}</p></div><div className="p-2 rounded-lg bg-[#FAF7F5]"><Vr className="w-4 h-4 text-brand-600 mx-auto mb-1" /><p className="text-[10px] sm:text-xs font-bold text-gray-800">Free Shipping</p><p className="text-[9px] text-gray-500">Over Rs. 2,999</p></div><div className="p-2 rounded-lg bg-[#FAF7F5]">{n.jsx(wx, {
                  className: "w-4 h-4 text-brand-600 mx-auto mb-1"
                })}<p className="text-[10px] sm:text-xs font-bold text-gray-800">Secure Payments</p><p className="text-[9px] text-gray-500">COD Available</p></div></div></div></div><div className="mt-10 pt-6 border-t border-gray-200"><div className="flex border-b border-gray-200 overflow-x-auto gap-4 sm:gap-8"><button onClick={() => y("desc")} className={`pb-3 text-sm font-semibold transition-colors relative whitespace-nowrap ${b === "desc" ? "text-brand-600 border-b-2 border-brand-600" : "text-gray-500 hover:text-gray-800"}`}>Description</button><button onClick={() => y("ingredients")} className={`pb-3 text-sm font-semibold transition-colors relative whitespace-nowrap ${b === "ingredients" ? "text-brand-600 border-b-2 border-brand-600" : "text-gray-500 hover:text-gray-800"}`}>Ingredients</button><button onClick={() => y("howTo")} className={`pb-3 text-sm font-semibold transition-colors relative whitespace-nowrap ${b === "howTo" ? "text-brand-600 border-b-2 border-brand-600" : "text-gray-500 hover:text-gray-800"}`}>How to Use</button><button onClick={() => y("reviews")} className={`pb-3 text-sm font-semibold transition-colors relative whitespace-nowrap ${b === "reviews" ? "text-brand-600 border-b-2 border-brand-600" : "text-gray-500 hover:text-gray-800"}`}>Customer Reviews ({e.reviewCount})</button></div><div className="py-5 text-sm text-gray-600 leading-relaxed">{b === "desc" && <div className="space-y-4"><p>{e.description}</p><div className="flex flex-wrap gap-2 pt-2">{(e.skinType || ["All Skin Types"]).map((w, k) => <span key={k} className="text-xs px-2.5 py-1 bg-brand-50 text-brand-700 rounded-md font-medium">{"Suitable for: "}{w}</span>)}{e.weightOrVolume && <span className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md font-medium">{"Net Weight: "}{e.weightOrVolume}</span>}</div></div>}{b === "ingredients" && <div><p className="font-semibold text-gray-800 mb-2">{"Key Ingredients & Botanical Actives:"}</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">{(e.keyIngredients || ["Natural Botanicals"]).map((w, k) => <div key={k} className="flex items-center gap-2 p-2 rounded bg-gray-50 border border-gray-100"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" /><span className="text-xs sm:text-sm font-medium text-gray-800">{w}</span></div>)}</div></div>}{b === "howTo" && <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200/60"><h4 className="font-semibold text-gray-900 mb-2">Recommended Application Guide:</h4><p className="text-sm leading-relaxed text-gray-700">{e.howToUse}</p></div>}{b === "reviews" && <div className="space-y-4"><div className="flex items-center gap-4 p-4 rounded-xl bg-brand-50/60 border border-brand-100"><div className="text-3xl font-bold font-serif text-[#2D1520]">{e.rating.toFixed(1)}</div><div><div className="flex text-amber-400">{[...Array(5)].map((w, k) => <Nt key={k} className="w-4 h-4 fill-current" />)}</div><p className="text-xs text-gray-500 mt-0.5">{"Based on "}{e.reviewCount}{" verified Pakistani customers"}</p></div></div><div className="space-y-3"><div className="p-3.5 rounded-lg border border-gray-100 bg-white"><div className="flex items-center justify-between text-xs mb-1"><span className="font-bold text-gray-900">Mahnoor A.</span><span className="text-gray-400">Verified Buyer • Lahore</span></div><div className="flex text-amber-400 mb-1.5">{[...Array(5)].map((w, k) => <Nt key={k} className="w-3 h-3 fill-current" />)}</div><p className="text-xs text-gray-600">{'"I bought this two weeks ago and the quality is stunning. Smells divine, feels silky and the packaging looks like an expensive luxury import."'}</p></div></div></div>}</div></div>{h.length > 0 && <div className="mt-8 pt-6 border-t border-gray-200"><h3 className="font-serif text-xl font-bold text-[#2D1520] mb-4">You May Also Like</h3><div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{h.map(w => <div key={w.id} onClick={() => {
              c(0), r(w);
            }} className="group flex items-center gap-3 p-2.5 rounded-lg border border-gray-100 hover:border-brand-300 hover:bg-brand-50/40 cursor-pointer transition-all"><img src={w.images[0]} alt={w.name} className="w-16 h-16 rounded-md object-cover flex-shrink-0" /><div className="min-w-0"><p className="font-serif text-sm font-bold text-[#2D1520] truncate group-hover:text-brand-600 transition-colors">{w.name}</p><p className="text-xs font-semibold text-brand-700 mt-0.5">{"Rs. "}{w.price.toLocaleString()}</p><div className="flex items-center gap-1 text-[10px] text-gray-400 mt-0.5"><span>{"★ "}{w.rating.toFixed(1)}</span></div></div></div>)}</div></div>}</div></div>;
  },
  eh = ({
    onOpenCheckout: e,
    onExploreShop: t
  }) => {
    const {
      cart: r,
      isCartOpen: s,
      setIsCartOpen: l,
      removeFromCart: a,
      updateQuantity: i,
      subtotal: o,
      deliveryFee: c,
      total: u,
      amountNeededForFreeDelivery: g,
      freeDeliveryProgress: b,
      totalItems: y
    } = Qr();
    return s ? <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"><div className="fixed inset-0" onClick={() => l(false)} /><div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300"><div className="p-5 border-b border-[#F2EAE4] flex items-center justify-between bg-[#FDFAF8]"><div className="flex items-center gap-2.5">{n.jsx(or, {
              className: "w-5 h-5 text-brand-600"
            })}<h2 className="font-serif text-xl font-bold text-[#2D1520]">Shopping Bag ({y})</h2></div><button onClick={() => l(false)} className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors" aria-label="Close cart"><Le className="w-5 h-5" /></button></div><div className="bg-gradient-to-r from-pink-50 via-rose-50/60 to-brand-50/50 border-b border-pink-100/70 p-4">{g > 0 ? <div className="space-y-2"><div className="flex items-center justify-between text-xs"><span className="font-semibold text-[#3D1A2B] flex items-center gap-1.5"><Vr className="w-3.5 h-3.5 text-brand-600 animate-pulse" />Free Delivery Progress</span><span className="font-bold text-brand-700 text-[11px] bg-brand-100/60 px-2 py-0.5 rounded-full">{Math.round(b)}%</span></div><p className="text-[12px] text-gray-600 leading-snug">{"Add "}<strong className="text-brand-800 font-bold underline decoration-pink-300">{"Rs. "}{g.toLocaleString()}</strong>{" more to unlock "}<span className="font-bold text-emerald-700">FREE Nationwide Delivery!</span></p><div className="relative w-full bg-gray-200/80 rounded-full h-2.5 overflow-hidden shadow-inner"><div className="bg-gradient-to-r from-brand-500 to-pink-500 h-2.5 rounded-full transition-all duration-700 shadow-sm relative" style={{
                width: `${Math.min(100, Math.max(5, b))}%`
              }}><div className="absolute inset-0 bg-white/20 animate-pulse" /></div></div></div> : <div className="bg-emerald-50 border border-emerald-200/70 rounded-lg p-2.5 flex items-center justify-center gap-2 text-xs font-bold text-emerald-800 shadow-xs animate-in zoom-in-95"><Ha className="w-4 h-4 text-emerald-600 shrink-0" /><span>🎉 You Unlocked FREE Nationwide Delivery!</span></div>}</div><div className="flex-grow overflow-y-auto p-5 space-y-4">{r.length === 0 ? <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4"><div className="w-20 h-20 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-400">{n.jsx(or, {
                className: "w-10 h-10"
              })}</div><h3 className="font-serif text-xl font-bold text-[#2D1520]">Your Bag is Empty</h3><p className="text-xs text-gray-500 max-w-xs">Looks like you haven't added any natural scrubs or skincare treats to your bag yet.</p><button onClick={() => {
              l(false), t();
            }} className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-md shadow transition-colors">Start Shopping</button></div> : r.map(({
            product: j,
            quantity: C
          }) => <div key={j.id} className="flex gap-3.5 p-3 rounded-xl border border-gray-100 bg-[#FDFAF8] hover:border-brand-200 transition-colors"><div className="w-18 h-18 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-white flex-shrink-0 border border-gray-100"><img src={j.images[0]} alt={j.name} className="w-full h-full object-cover" /></div><div className="flex-grow min-w-0 flex flex-col justify-between"><div className="flex items-start justify-between gap-2"><div><h4 className="font-serif text-sm sm:text-base font-bold text-[#2D1520] truncate">{j.name}</h4><p className="text-xs font-semibold text-brand-700 mt-0.5">{"Rs. "}{j.price.toLocaleString()}</p></div><button onClick={() => a(j.id)} className="p-1 text-gray-400 hover:text-rose-600 transition-colors" title="Remove item"><Nn className="w-4 h-4" /></button></div><div className="flex items-center justify-between pt-2"><div className="inline-flex items-center border border-gray-200 rounded-md bg-white"><button onClick={() => i(j.id, C - 1)} className="p-1 px-2 text-gray-600 hover:text-black transition-colors"><Tx className="w-3 h-3" /></button><span className="px-2 text-xs font-bold text-gray-800">{C}</span><button onClick={() => i(j.id, C + 1)} className="p-1 px-2 text-gray-600 hover:text-black transition-colors"><Mx className="w-3 h-3" /></button></div><span className="text-xs font-bold text-gray-900">{"Rs. "}{(j.price * C).toLocaleString()}</span></div></div></div>)}</div>{r.length > 0 && <div className="p-5 border-t border-[#F2EAE4] bg-white space-y-3.5 shadow-lg"><div className="space-y-1.5 text-xs text-gray-600"><div className="flex justify-between"><span>Subtotal</span><span className="font-semibold text-gray-900">{"Rs. "}{o.toLocaleString()}</span></div><div className="flex justify-between"><span>Delivery Charges</span><span className="font-semibold">{c === 0 ? <span className="text-emerald-600 font-bold">FREE</span> : <span>{"Rs. "}{c}</span>}</span></div><div className="border-t border-gray-100 pt-2 flex justify-between text-base font-bold text-[#2D1520]"><span>Total Payable</span><span className="text-brand-700">{"Rs. "}{u.toLocaleString()}</span></div></div><button onClick={() => {
            l(false), e();
          }} className="w-full py-3.5 px-4 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm rounded-md shadow-md flex items-center justify-center gap-2 transition-all"><span>Proceed to Checkout</span>{n.jsx(st, {
              className: "w-4 h-4"
            })}</button><p className="text-[11px] text-gray-400 text-center">🔒 Instant WhatsApp Order Verification • Cash on Delivery Available</p></div>}</div></div> : null;
  };
var Hi = {};
(function e(t, r, s, l) {
  var a = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL),
    i = typeof Path2D == "function" && typeof DOMMatrix == "function",
    o = function () {
      if (!t.OffscreenCanvas) return false;
      try {
        var x = new OffscreenCanvas(1, 1),
          m = x.getContext("2d");
        m.fillRect(0, 0, 1, 1);
        var D = x.transferToImageBitmap();
        m.createPattern(D, "no-repeat");
      } catch {
        return false;
      }
      return true;
    }();
  function c() {}
  function u(x) {
    var m = r.exports.Promise,
      D = m !== void 0 ? m : t.Promise;
    return typeof D == "function" ? new D(x) : (x(c, c), null);
  }
  var g = function (x, m) {
      return {
        transform: function (D) {
          if (x) return D;
          if (m.has(D)) return m.get(D);
          var H = new OffscreenCanvas(D.width, D.height),
            U = H.getContext("2d");
          return U.drawImage(D, 0, 0), m.set(D, H), H;
        },
        clear: function () {
          m.clear();
        }
      };
    }(o, new Map()),
    b = function () {
      var x = Math.floor(16.666666666666668),
        m,
        D,
        H = {},
        U = 0;
      return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (m = function (V) {
        var W = Math.random();
        return H[W] = requestAnimationFrame(function B(K) {
          U === K || U + x - 1 < K ? (U = K, delete H[W], V()) : H[W] = requestAnimationFrame(B);
        }), W;
      }, D = function (V) {
        H[V] && cancelAnimationFrame(H[V]);
      }) : (m = function (V) {
        return setTimeout(V, x);
      }, D = function (V) {
        return clearTimeout(V);
      }), {
        frame: m,
        cancel: D
      };
    }(),
    y = function () {
      var x,
        m,
        D = {};
      function H(U) {
        function V(W, B) {
          U.postMessage({
            options: W || {},
            callback: B
          });
        }
        U.init = function (B) {
          var K = B.transferControlToOffscreen();
          U.postMessage({
            canvas: K
          }, [K]);
        }, U.fire = function (B, K, te) {
          if (m) return V(B, null), m;
          var re = Math.random().toString(36).slice(2);
          return m = u(function (ne) {
            function ie(be) {
              be.data.callback === re && (delete D[re], U.removeEventListener("message", ie), m = null, g.clear(), te(), ne());
            }
            U.addEventListener("message", ie), V(B, re), D[re] = ie.bind(null, {
              data: {
                callback: re
              }
            });
          }), m;
        }, U.reset = function () {
          U.postMessage({
            reset: true
          });
          for (var B in D) D[B](), delete D[B];
        };
      }
      return function () {
        if (x) return x;
        if (!s && a) {
          var U = ["var CONFETTI, SIZE = {}, module = {};", "(" + e.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join(`
`);
          try {
            x = new Worker(URL.createObjectURL(new Blob([U])));
          } catch (V) {
            return typeof console < "u" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", V), null;
          }
          H(x);
        }
        return x;
      };
    }(),
    j = {
      particleCount: 50,
      angle: 90,
      spread: 45,
      startVelocity: 45,
      decay: 0.9,
      gravity: 1,
      drift: 0,
      ticks: 200,
      x: 0.5,
      y: 0.5,
      shapes: ["square", "circle"],
      zIndex: 100,
      colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
      disableForReducedMotion: false,
      scalar: 1
    };
  function C(x, m) {
    return m ? m(x) : x;
  }
  function S(x) {
    return x != null;
  }
  function P(x, m, D) {
    return C(x && S(x[m]) ? x[m] : j[m], D);
  }
  function f(x) {
    return x < 0 ? 0 : Math.floor(x);
  }
  function d(x, m) {
    return Math.floor(Math.random() * (m - x)) + x;
  }
  function h(x) {
    return parseInt(x, 16);
  }
  function w(x) {
    return x.map(k);
  }
  function k(x) {
    var m = String(x).replace(/[^0-9a-f]/gi, "");
    return m.length < 6 && (m = m[0] + m[0] + m[1] + m[1] + m[2] + m[2]), {
      r: h(m.substring(0, 2)),
      g: h(m.substring(2, 4)),
      b: h(m.substring(4, 6))
    };
  }
  function L(x) {
    var m = P(x, "origin", Object);
    return m.x = P(m, "x", Number), m.y = P(m, "y", Number), m;
  }
  function O(x) {
    x.width = document.documentElement.clientWidth, x.height = document.documentElement.clientHeight;
  }
  function _(x) {
    var m = x.getBoundingClientRect();
    x.width = m.width, x.height = m.height;
  }
  function G(x) {
    var m = document.createElement("canvas");
    return m.style.position = "fixed", m.style.top = "0px", m.style.left = "0px", m.style.pointerEvents = "none", m.style.zIndex = x, m;
  }
  function N(x, m, D, H, U, V, W, B, K) {
    x.save(), x.translate(m, D), x.rotate(V), x.scale(H, U), x.arc(0, 0, 1, W, B, K), x.restore();
  }
  function Q(x) {
    var m = x.angle * (Math.PI / 180),
      D = x.spread * (Math.PI / 180);
    return {
      x: x.x,
      y: x.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: x.startVelocity * 0.5 + Math.random() * x.startVelocity,
      angle2D: -m + (0.5 * D - Math.random() * D),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: x.color,
      shape: x.shape,
      tick: 0,
      totalTicks: x.ticks,
      decay: x.decay,
      drift: x.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: x.gravity * 3,
      ovalScalar: 0.6,
      scalar: x.scalar,
      flat: x.flat
    };
  }
  function de(x, m) {
    m.x += Math.cos(m.angle2D) * m.velocity + m.drift, m.y += Math.sin(m.angle2D) * m.velocity + m.gravity, m.velocity *= m.decay, m.flat ? (m.wobble = 0, m.wobbleX = m.x + 10 * m.scalar, m.wobbleY = m.y + 10 * m.scalar, m.tiltSin = 0, m.tiltCos = 0, m.random = 1) : (m.wobble += m.wobbleSpeed, m.wobbleX = m.x + 10 * m.scalar * Math.cos(m.wobble), m.wobbleY = m.y + 10 * m.scalar * Math.sin(m.wobble), m.tiltAngle += 0.1, m.tiltSin = Math.sin(m.tiltAngle), m.tiltCos = Math.cos(m.tiltAngle), m.random = Math.random() + 2);
    var D = m.tick++ / m.totalTicks,
      H = m.x + m.random * m.tiltCos,
      U = m.y + m.random * m.tiltSin,
      V = m.wobbleX + m.random * m.tiltCos,
      W = m.wobbleY + m.random * m.tiltSin;
    if (x.fillStyle = "rgba(" + m.color.r + ", " + m.color.g + ", " + m.color.b + ", " + (1 - D) + ")", x.beginPath(), i && m.shape.type === "path" && typeof m.shape.path == "string" && Array.isArray(m.shape.matrix)) x.fill(ee(m.shape.path, m.shape.matrix, m.x, m.y, Math.abs(V - H) * 0.1, Math.abs(W - U) * 0.1, Math.PI / 10 * m.wobble));else if (m.shape.type === "bitmap") {
      var B = Math.PI / 10 * m.wobble,
        K = Math.abs(V - H) * 0.1,
        te = Math.abs(W - U) * 0.1,
        re = m.shape.bitmap.width * m.scalar,
        ne = m.shape.bitmap.height * m.scalar,
        ie = new DOMMatrix([Math.cos(B) * K, Math.sin(B) * K, -Math.sin(B) * te, Math.cos(B) * te, m.x, m.y]);
      ie.multiplySelf(new DOMMatrix(m.shape.matrix));
      var be = x.createPattern(g.transform(m.shape.bitmap), "no-repeat");
      be.setTransform(ie), x.globalAlpha = 1 - D, x.fillStyle = be, x.fillRect(m.x - re / 2, m.y - ne / 2, re, ne), x.globalAlpha = 1;
    } else if (m.shape === "circle") x.ellipse ? x.ellipse(m.x, m.y, Math.abs(V - H) * m.ovalScalar, Math.abs(W - U) * m.ovalScalar, Math.PI / 10 * m.wobble, 0, 2 * Math.PI) : N(x, m.x, m.y, Math.abs(V - H) * m.ovalScalar, Math.abs(W - U) * m.ovalScalar, Math.PI / 10 * m.wobble, 0, 2 * Math.PI);else if (m.shape === "star") for (var Y = Math.PI / 2 * 3, Ce = 4 * m.scalar, p = 8 * m.scalar, T = m.x, M = m.y, $ = 5, se = Math.PI / $; $--;) T = m.x + Math.cos(Y) * p, M = m.y + Math.sin(Y) * p, x.lineTo(T, M), Y += se, T = m.x + Math.cos(Y) * Ce, M = m.y + Math.sin(Y) * Ce, x.lineTo(T, M), Y += se;else x.moveTo(Math.floor(m.x), Math.floor(m.y)), x.lineTo(Math.floor(m.wobbleX), Math.floor(U)), x.lineTo(Math.floor(V), Math.floor(W)), x.lineTo(Math.floor(H), Math.floor(m.wobbleY));
    return x.closePath(), x.fill(), m.tick < m.totalTicks;
  }
  function ge(x, m, D, H, U) {
    var V = m.slice(),
      W = x.getContext("2d"),
      B,
      K,
      te = u(function (re) {
        function ne() {
          B = K = null, W.clearRect(0, 0, H.width, H.height), g.clear(), U(), re();
        }
        function ie() {
          s && !(H.width === l.width && H.height === l.height) && (H.width = x.width = l.width, H.height = x.height = l.height), !H.width && !H.height && (D(x), H.width = x.width, H.height = x.height), W.clearRect(0, 0, H.width, H.height), V = V.filter(function (be) {
            return de(W, be);
          }), V.length ? B = b.frame(ie) : ne();
        }
        B = b.frame(ie), K = ne;
      });
    return {
      addFettis: function (re) {
        return V = V.concat(re), te;
      },
      canvas: x,
      promise: te,
      reset: function () {
        B && b.cancel(B), K && K();
      }
    };
  }
  function ue(x, m) {
    var D = !x,
      H = !!P(m || {}, "resize"),
      U = false,
      V = P(m, "disableForReducedMotion", Boolean),
      W = a && !!P(m || {}, "useWorker"),
      B = W ? y() : null,
      K = D ? O : _,
      te = x && B ? !!x.__confetti_initialized : false,
      re = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches,
      ne;
    function ie(Y, Ce, p) {
      for (var T = P(Y, "particleCount", f), M = P(Y, "angle", Number), $ = P(Y, "spread", Number), se = P(Y, "startVelocity", Number), Ae = P(Y, "decay", Number), Ze = P(Y, "gravity", Number), gt = P(Y, "drift", Number), Gr = P(Y, "colors", w), Kr = P(Y, "ticks", Number), Yr = P(Y, "shapes"), Yn = P(Y, "scalar"), qn = !!P(Y, "flat"), qr = L(Y), Zr = T, ur = [], Xr = x.width * qr.x, Lu = x.height * qr.y; Zr--;) ur.push(Q({
        x: Xr,
        y: Lu,
        angle: M,
        spread: $,
        startVelocity: se,
        color: Gr[Zr % Gr.length],
        shape: Yr[d(0, Yr.length)],
        ticks: Kr,
        decay: Ae,
        gravity: Ze,
        drift: gt,
        scalar: Yn,
        flat: qn
      }));
      return ne ? ne.addFettis(ur) : (ne = ge(x, ur, K, Ce, p), ne.promise);
    }
    function be(Y) {
      var Ce = V || P(Y, "disableForReducedMotion", Boolean),
        p = P(Y, "zIndex", Number);
      if (Ce && re) return u(function (se) {
        se();
      });
      D && ne ? x = ne.canvas : D && !x && (x = G(p), document.body.appendChild(x)), H && !te && K(x);
      var T = {
        width: x.width,
        height: x.height
      };
      B && !te && B.init(x), te = true, B && (x.__confetti_initialized = true);
      function M() {
        if (B) {
          var se = {
            getBoundingClientRect: function () {
              if (!D) return x.getBoundingClientRect();
            }
          };
          K(se), B.postMessage({
            resize: {
              width: se.width,
              height: se.height
            }
          });
          return;
        }
        T.width = T.height = null;
      }
      function $() {
        ne = null, H && (U = false, t.removeEventListener("resize", M)), D && x && (document.body.contains(x) && document.body.removeChild(x), x = null, te = false);
      }
      return H && !U && (U = true, t.addEventListener("resize", M, false)), B ? B.fire(Y, T, $) : ie(Y, T, $);
    }
    return be.reset = function () {
      B && B.reset(), ne && ne.reset();
    }, be;
  }
  var A;
  function Z() {
    return A || (A = ue(null, {
      useWorker: true,
      resize: true
    })), A;
  }
  function ee(x, m, D, H, U, V, W) {
    var B = new Path2D(x),
      K = new Path2D();
    K.addPath(B, new DOMMatrix(m));
    var te = new Path2D();
    return te.addPath(K, new DOMMatrix([Math.cos(W) * U, Math.sin(W) * U, -Math.sin(W) * V, Math.cos(W) * V, D, H])), te;
  }
  function v(x) {
    if (!i) throw new Error("path confetti are not supported in this browser");
    var m, D;
    typeof x == "string" ? m = x : (m = x.path, D = x.matrix);
    var H = new Path2D(m),
      U = document.createElement("canvas"),
      V = U.getContext("2d");
    if (!D) {
      for (var W = 1e3, B = W, K = W, te = 0, re = 0, ne, ie, be = 0; be < W; be += 2) for (var Y = 0; Y < W; Y += 2) V.isPointInPath(H, be, Y, "nonzero") && (B = Math.min(B, be), K = Math.min(K, Y), te = Math.max(te, be), re = Math.max(re, Y));
      ne = te - B, ie = re - K;
      var Ce = 10,
        p = Math.min(Ce / ne, Ce / ie);
      D = [p, 0, 0, p, -Math.round(ne / 2 + B) * p, -Math.round(ie / 2 + K) * p];
    }
    return {
      type: "path",
      path: m,
      matrix: D
    };
  }
  function I(x) {
    var m,
      D = 1,
      H = "#000000",
      U = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof x == "string" ? m = x : (m = x.text, D = "scalar" in x ? x.scalar : D, U = "fontFamily" in x ? x.fontFamily : U, H = "color" in x ? x.color : H);
    var V = 10 * D,
      W = "" + V + "px " + U,
      B = new OffscreenCanvas(V, V),
      K = B.getContext("2d");
    K.font = W;
    var te = K.measureText(m),
      re = Math.ceil(te.actualBoundingBoxRight + te.actualBoundingBoxLeft),
      ne = Math.ceil(te.actualBoundingBoxAscent + te.actualBoundingBoxDescent),
      ie = 2,
      be = te.actualBoundingBoxLeft + ie,
      Y = te.actualBoundingBoxAscent + ie;
    re += ie + ie, ne += ie + ie, B = new OffscreenCanvas(re, ne), K = B.getContext("2d"), K.font = W, K.fillStyle = H, K.fillText(m, be, Y);
    var Ce = 1 / D;
    return {
      type: "bitmap",
      bitmap: B.transferToImageBitmap(),
      matrix: [Ce, 0, 0, Ce, -re * Ce / 2, -ne * Ce / 2]
    };
  }
  r.exports = function () {
    return Z().apply(this, arguments);
  }, r.exports.reset = function () {
    Z().reset();
  }, r.exports.create = ue, r.exports.shapeFromPath = v, r.exports.shapeFromText = I;
})(function () {
  return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
}(), Hi, false);
const th = Hi.exports;
Hi.exports.create;
const rh = ({
    isOpen: e,
    onClose: t
  }) => {
    const {
        cart: r,
        subtotal: s,
        deliveryFee: l,
        total: a,
        clearCart: i
      } = Qr(),
      [o, c] = F.useState(""),
      [u, g] = F.useState(""),
      [b, y] = F.useState(""),
      [j, C] = F.useState(""),
      [S, P] = F.useState(""),
      [f, d] = F.useState(false),
      [h, w] = F.useState(false),
      [k, L] = F.useState("");
    if (!e) return null;
    const O = N => {
        if (N.preventDefault(), !o.trim() || !u.trim() || !j.trim() || !b.trim()) {
          alert("Please fill out all required delivery fields.");
          return;
        }
        d(true);
        const Q = Math.floor(1e3 + Math.random() * 9e3),
          de = new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
          }),
          ge = r.map((ee, v) => `${v + 1}. ${ee.product.name}
   ▫️ Qty: ${ee.quantity} × Rs. ${ee.product.price.toLocaleString()}`).join(`
`),
          ue = l === 0 ? "FREE (Standard Shipping)" : `Rs. ${l.toLocaleString()} (Standard Shipping)`,
          A = S.trim() ? `• "${S.trim()}"` : '• "None"',
          Z = `✨ *SCRUBIE HUB PK | ORDER CONFIRMATION* ✨
Order ID: #SH-${Q}
Date: ${de}

━━━━━━━━━━━━━━━━━━━━━
👤 *CUSTOMER PROFILE*
• Name: ${o.trim()}
• Contact: ${u.trim()}
• Shipping Address: ${j.trim()}
• Destination City: ${b.trim()}

🛍️ *ORDER BREAKDOWN*
${ge}

━━━━━━━━━━━━━━━━━━━━━
💳 *PAYMENT & BILLING*
• Items Subtotal: Rs. ${s.toLocaleString()}
• Delivery Charges: ${ue}
• Payment Method: Cash on Delivery (COD)
• *Net Payable Amount:* *Rs. ${a.toLocaleString()}*

📝 *SPECIAL INSTRUCTIONS*
${A}
━━━━━━━━━━━━━━━━━━━━━
🌿 _Thank you for choosing Scrubie Hub! Your order is being prepped with care._`;
        L(Z);
        try {
          th({
            particleCount: 80,
            spread: 70,
            origin: {
              y: 0.6
            },
            colors: ["#B45B6C", "#D4AF37", "#FAF7F5", "#EABEC5"]
          });
        } catch {}
        w(true), d(false), $n(Z), i();
      },
      _ = () => {
        navigator.clipboard.writeText(k), alert("Order details copied to clipboard!");
      },
      G = () => {
        $n(k);
      };
    return <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"><div className="fixed inset-0" onClick={t} /><div className="relative bg-white rounded-2xl shadow-2xl border border-brand-100 max-w-lg w-full z-10 overflow-hidden"><div className="p-6 bg-gradient-to-r from-brand-50 via-white to-pink-50 border-b border-brand-100 flex items-center justify-between"><div><h2 className="font-serif text-2xl font-bold text-[#2D1520]">{h ? "Order Generated!" : "Complete Your Order"}</h2><p className="text-xs text-gray-500 mt-0.5">{h ? "Redirecting to WhatsApp for confirmation" : "Quick delivery details for Cash on Delivery & verification"}</p></div><button onClick={t} className="p-1.5 rounded-full hover:bg-white text-gray-400 hover:text-gray-700 transition-colors"><Le className="w-5 h-5" /></button></div>{h ? <div className="p-6 sm:p-8 text-center space-y-5"><div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200 shadow-sm animate-bounce-slow">{n.jsx(el, {
              className: "w-9 h-9"
            })}</div><div className="space-y-1"><h3 className="font-serif text-2xl font-bold text-[#2D1520]">{"Thank You, "}{o}!</h3><p className="text-xs text-gray-600 max-w-xs mx-auto">Your order is ready! A WhatsApp chat has been opened with our team to confirm dispatch.</p></div><div className="bg-[#FAF7F5] border border-brand-100 rounded-xl p-4 text-left font-mono text-xs text-gray-700 max-h-48 overflow-y-auto whitespace-pre-wrap select-all">{k}</div><div className="space-y-2.5 pt-2"><button onClick={G} className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-md shadow flex items-center justify-center gap-2 transition-all">{n.jsx(tl, {
                className: "w-4 h-4"
              })}<span>Open WhatsApp Chat Again</span></button><button onClick={_} className="w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-xs rounded-md transition-colors">Copy Order Message to Clipboard</button><button onClick={t} className="w-full py-2 text-xs text-brand-600 hover:underline">Close and Continue Browsing</button></div></div> : <form onSubmit={O} className="p-6 space-y-4"><div className="p-3.5 rounded-xl bg-[#FAF7F5] border border-brand-100/70 flex items-center justify-between text-xs"><div className="flex items-center gap-2 text-gray-700">{n.jsx(or, {
                className: "w-4 h-4 text-brand-600"
              })}<span><strong>{r.length}{" items"}</strong>{" in your order"}</span></div><span className="font-bold text-brand-800 text-sm">{"Total: Rs. "}{a.toLocaleString()}</span></div><div><label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label><div className="relative"><Ix className="w-4 h-4 text-gray-400 absolute left-3 top-3" /><input type="text" required={true} placeholder="e.g. Ayesha Khan" value={o} onChange={N => c(N.target.value)} className="w-full pl-9 pr-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-brand-500" /></div></div><div><label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp / Contact Number *</label><div className="relative"><Pu className="w-4 h-4 text-gray-400 absolute left-3 top-3" /><input type="tel" required={true} placeholder="e.g. 0300 1234567" value={u} onChange={N => g(N.target.value)} className="w-full pl-9 pr-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-brand-500" /></div></div><div><label className="block text-xs font-semibold text-gray-700 mb-1">City *</label><div className="relative"><Cu className="w-4 h-4 text-gray-400 absolute left-3 top-3" /><input type="text" required={true} placeholder="e.g. Lahore, Karachi, Islamabad..." value={b} onChange={N => y(N.target.value)} className="w-full pl-9 pr-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-brand-500" /></div></div><div><label className="block text-xs font-semibold text-gray-700 mb-1">Complete Delivery Address *</label><textarea required={true} rows={2} placeholder="House / Flat No, Street, Sector / Area" value={j} onChange={N => C(N.target.value)} className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-brand-500 resize-none" /></div><div><label className="block text-xs font-semibold text-gray-500 mb-1">Special Delivery Instructions (Optional)</label><div className="relative">{n.jsx(ku, {
                className: "w-4 h-4 text-gray-400 absolute left-3 top-3"
              })}<input type="text" placeholder="e.g. Call before delivery, leave with guard..." value={S} onChange={N => P(N.target.value)} className="w-full pl-9 pr-3 py-2.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-800 focus:outline-none focus:border-brand-500" /></div></div><div className="pt-2"><button type="submit" disabled={f} className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm rounded-md shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50">{n.jsx(tl, {
                className: "w-4 h-4"
              })}<span>{f ? "Formatting Order..." : "Place Order on WhatsApp"}</span></button><div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 mt-2.5"><Hn className="w-3.5 h-3.5 text-emerald-600" /><span>No payment required right now • Pay Cash on Delivery</span></div></div></form>}</div></div>;
  },
  nh = () => {
    const [e, t] = F.useState(true),
      r = () => {
        $n(`Hi Scrubie Hub Team! ✨
I’m browsing your collection on scrubiehub.pk and have a few questions regarding your skincare items and delivery. 

Could you please assist me with personalized product recommendations? 🌿`);
      };
    return <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">{e && <div className="relative mb-2.5 bg-white border border-brand-100 shadow-xl rounded-xl p-3 max-w-[220px] text-left animate-in slide-in-from-bottom-2 duration-300"><button onClick={s => {
          s.stopPropagation(), t(false);
        }} className="absolute top-1.5 right-1.5 p-0.5 text-gray-400 hover:text-gray-600 rounded-full" aria-label="Dismiss tooltip"><Le className="w-3.5 h-3.5" /></button><p className="text-xs font-bold text-gray-900">Need help choosing?</p><p className="text-[11px] text-gray-600 mt-0.5">Chat directly with our skincare specialists on WhatsApp!</p></div>}<button onClick={r} className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" aria-label="Chat with us on WhatsApp" title="Chat on WhatsApp"><span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping -z-10" /><Mr className="w-7 h-7" /></button></div>;
  },
  sh = ({
    isOpen: e,
    onClose: t,
    products: r,
    onSelectProduct: s
  }) => {
    const [l, a] = F.useState(""),
      i = F.useMemo(() => {
        if (!l.trim()) return [];
        const o = l.toLowerCase();
        return r.filter(c => c.name.toLowerCase().includes(o) || c.categoryLabel.toLowerCase().includes(o) || c.description.toLowerCase().includes(o) || c.keyIngredients.some(u => u.toLowerCase().includes(o)));
      }, [l, r]);
    return e ? <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 sm:pt-20 animate-in fade-in duration-200"><div className="fixed inset-0" onClick={t} /><div className="relative bg-white rounded-2xl shadow-2xl border border-brand-100 max-w-2xl w-full z-10 overflow-hidden"><div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3 bg-[#FDFAF8]"><Bi className="w-5 h-5 text-brand-600 flex-shrink-0" /><input type="text" autoFocus={true} placeholder="Search scrubs, serums, ingredients (e.g. coffee, turmeric, nila)..." value={l} onChange={o => a(o.target.value)} className="w-full bg-transparent text-sm sm:text-base text-gray-800 focus:outline-none placeholder:text-gray-400" />{l && <button onClick={() => a("")} className="p-1 text-gray-400 hover:text-gray-600 rounded-full"><Le className="w-4 h-4" /></button>}<button onClick={t} className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100"><Le className="w-5 h-5" /></button></div><div className="p-4 sm:p-6 max-h-[65vh] overflow-y-auto space-y-3">{l.trim() === "" ? <div className="py-8 text-center text-gray-400 space-y-2"><p className="text-sm">Type to start searching all organic products</p><div className="flex justify-center gap-2 pt-2 flex-wrap">{["Coffee Body Scrub", "Turmeric", "Moroccan Nila", "Rosey Rose", "Vitamin C"].map(o => <button key={o} onClick={() => a(o)} className="text-xs px-2.5 py-1 bg-brand-50 text-brand-700 hover:bg-brand-100 rounded-full transition-colors">{o}</button>)}</div></div> : i.length === 0 ? <div className="py-8 text-center text-gray-500"><p className="font-serif text-lg text-gray-800">{'No results found for "'}{l}{'"'}</p><p className="text-xs text-gray-400 mt-1">Try checking for typos or searching by ingredient</p></div> : i.map(o => <div key={o.id} onClick={() => {
            s(o), t();
          }} className="group flex items-center justify-between p-3 rounded-xl hover:bg-brand-50/50 border border-transparent hover:border-brand-200 cursor-pointer transition-all"><div className="flex items-center gap-3.5 min-w-0"><img src={o.images[0]} alt={o.name} className="w-14 h-14 rounded-lg object-cover flex-shrink-0 border border-gray-100" /><div className="min-w-0"><span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">{o.categoryLabel}</span><h4 className="font-serif text-base font-bold text-[#2D1520] truncate group-hover:text-brand-600 transition-colors">{o.name}</h4><div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5"><span className="font-semibold text-brand-800">{"Rs. "}{o.price.toLocaleString()}</span><span>•</span><span className="flex items-center gap-0.5 text-amber-500"><Nt className="w-3 h-3 fill-current" />{o.rating}</span></div></div></div>{n.jsx(st, {
              className: "w-4 h-4 text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all flex-shrink-0"
            })}</div>)}</div></div></div> : null;
  },
  lh = ({
    isOpen: e,
    onClose: t,
    products: r,
    onOpenQuickView: s
  }) => {
    const {
        wishlist: l,
        toggleWishlist: a
      } = yl(),
      {
        addToCart: i
      } = Qr();
    if (!e) return null;
    const o = r.filter(c => l.includes(c.id));
    return <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"><div className="fixed inset-0" onClick={t} /><div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300"><div className="p-5 border-b border-[#F2EAE4] flex items-center justify-between bg-[#FDFAF8]"><div className="flex items-center gap-2.5"><Qt className="w-5 h-5 text-brand-600 fill-brand-600" /><h2 className="font-serif text-xl font-bold text-[#2D1520]">Your Wishlist ({o.length})</h2></div><button onClick={t} className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"><Le className="w-5 h-5" /></button></div><div className="flex-grow overflow-y-auto p-5 space-y-4">{o.length === 0 ? <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4"><div className="w-20 h-20 rounded-full bg-rose-50 border border-brand-200 flex items-center justify-center text-brand-400"><Qt className="w-10 h-10" /></div><h3 className="font-serif text-xl font-bold text-[#2D1520]">Your Wishlist is Empty</h3><p className="text-xs text-gray-500 max-w-xs">Tap the heart icon on any product you love to save it here for later!</p></div> : o.map(c => <div key={c.id} className="flex gap-3.5 p-3 rounded-xl border border-gray-100 bg-[#FDFAF8] hover:border-brand-200 transition-colors"><div onClick={() => {
              s(c), t();
            }} className="w-20 h-20 rounded-lg overflow-hidden bg-white flex-shrink-0 cursor-pointer border border-gray-100"><img src={c.images[0]} alt={c.name} className="w-full h-full object-cover" /></div><div className="flex-grow min-w-0 flex flex-col justify-between"><div className="flex items-start justify-between gap-2"><div><h4 onClick={() => {
                    s(c), t();
                  }} className="font-serif text-sm sm:text-base font-bold text-[#2D1520] truncate cursor-pointer hover:text-brand-600 transition-colors">{c.name}</h4><p className="text-xs font-semibold text-brand-700 mt-0.5">{"Rs. "}{c.price.toLocaleString()}</p></div><button onClick={() => a(c.id)} className="p-1 text-gray-400 hover:text-rose-600 transition-colors" title="Remove from wishlist"><Nn className="w-4 h-4" /></button></div><div className="pt-2"><button onClick={() => {
                  i(c, 1), a(c.id);
                }} className="w-full py-1.5 px-3 bg-brand-600 hover:bg-brand-700 text-white text-xs font-medium rounded-md shadow-xs flex items-center justify-center gap-1.5 transition-colors">{n.jsx(or, {
                    className: "w-3.5 h-3.5"
                  })}<span>Move to Bag</span></button></div></div></div>)}</div></div></div>;
  },
  ah = ({
    policyType: e,
    onClose: t
  }) => {
    if (!e) return null;
    const s = {
        shipping: {
          title: "Shipping & Delivery Policy",
          icon: Vr,
          content: <div className="space-y-3 text-sm text-gray-600 leading-relaxed"><p>{"At "}<strong>{le.brandName}</strong>, we offer reliable nationwide delivery across all major and remote cities of Pakistan through trusted courier partners (Trax, Call Courier, Leopard).</p><ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700"><li><strong>Standard Delivery:</strong>{" Rs. "}{le.standardDeliveryFee}{" flat rate nationwide."}</li><li><strong>FREE Delivery:</strong>{" Automatically applied to all orders over Rs. "}{le.freeDeliveryThreshold.toLocaleString()}.</li><li><strong>Delivery Timeline:</strong>{" Lahore orders arrive within 24-48 hours. Karachi, Islamabad, and other cities arrive within 2-4 business days."}</li><li><strong>Tracking:</strong>{" A tracking number will be provided via WhatsApp as soon as your parcel is dispatched."}</li></ul></div>
        },
        return: {
          title: "Return & Happiness Guarantee",
          icon: Fu,
          content: <div className="space-y-3 text-sm text-gray-600 leading-relaxed"><p>Your satisfaction is our utmost priority. We stand by the freshness and quality of our handcrafted skincare formulas.</p><ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700"><li>If your item arrives broken, leaking, or damaged during transit, notify us on WhatsApp within 48 hours with a photo, and we will issue an immediate free replacement.</li><li>Due to hygiene and cosmetic safety standards, opened or used skincare jars cannot be returned.</li><li>If you have any sensitivity or skin concerns, message our WhatsApp team before purchasing for personalized skin advice.</li></ul></div>
        },
        privacy: {
          title: "Privacy & Data Protection",
          icon: Hn,
          content: <div className="space-y-3 text-sm text-gray-600 leading-relaxed"><p>We take customer confidentiality and privacy seriously.</p><ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700"><li>Customer contact details and delivery addresses entered on this site are solely used to coordinate parcel dispatch and order verification on WhatsApp.</li><li>We NEVER sell, trade, or share your contact numbers or personal information with third-party telemarketers.</li><li>Your shopping cart and preferences are stored locally on your device for smooth browsing.</li></ul></div>
        },
        terms: {
          title: "Terms & Conditions",
          icon: ku,
          content: <div className="space-y-3 text-sm text-gray-600 leading-relaxed"><p>{"By using "}<strong>{le.brandName}</strong>{" and placing an order, you agree to our standard terms:"}</p><ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-700"><li>All prices listed on our website are in Pakistani Rupees (PKR) and include applicable product pricing.</li><li>Because all body scrubs are handmade with natural botanicals, slight seasonal variations in color and natural scent may occur between batches.</li><li>Always conduct a 24-hour patch test before using any new botanical scrub on sensitive or allergy-prone skin.</li></ul></div>
        }
      }[e],
      l = s.icon;
    return <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"><div className="fixed inset-0" onClick={t} /><div className="relative bg-white rounded-2xl shadow-2xl border border-brand-100 max-w-lg w-full z-10 overflow-hidden"><div className="p-6 bg-gradient-to-r from-[#FAF0F2] via-[#FDF5F7] to-[#FAF7F5] border-b border-brand-100 flex items-center justify-between"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center">{n.jsx(l, {
                className: "w-5 h-5"
              })}</div><h2 className="font-serif text-xl font-bold text-[#2D1520]">{s.title}</h2></div><button onClick={t} className="p-1.5 rounded-full hover:bg-white text-gray-400 hover:text-gray-700 transition-colors"><Le className="w-5 h-5" /></button></div><div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">{s.content}</div></div></div>;
  },
  Ua = "scrubie_hub_catalog_v2",
  ih = "scrubie_hub_admin_products_v1",
  Wa = "scrubie_catalog_updated";
function Ql(e) {
  const t = e.category ? String(e.category).trim() : "body-scrubs",
    r = e.categoryLabel || t.replace(/-/g, " ").replace(/\b\w/g, s => s.toUpperCase());
  return {
    id: e.id || `product-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    name: e.name || "Handcrafted Botanical Formulation",
    slug: e.slug || (e.name ? String(e.name).toLowerCase().replace(/[^a-z0-9]+/g, "-") : "product"),
    category: t,
    categoryLabel: r,
    price: Number(e.price) || 0,
    originalPrice: e.originalPrice ? Number(e.originalPrice) : void 0,
    discountPercentage: e.originalPrice && Number(e.originalPrice) > Number(e.price) ? Math.round((Number(e.originalPrice) - Number(e.price)) / Number(e.originalPrice) * 100) : e.discountPercentage ? Number(e.discountPercentage) : 0,
    rating: Number(e.rating) || 5,
    reviewCount: Number(e.reviewCount) || 1,
    shortDescription: e.shortDescription || "100% handcrafted botanical formulation.",
    description: e.description || e.shortDescription || "Natural organic formulation crafted for skin radiance.",
    benefits: Array.isArray(e.benefits) && e.benefits.length > 0 ? e.benefits : ["Removes dead skin", "Deeply hydrates"],
    keyIngredients: Array.isArray(e.keyIngredients) && e.keyIngredients.length > 0 ? e.keyIngredients : ["Natural Botanicals"],
    howToUse: e.howToUse || "Gently massage onto damp skin in circular motions. Rinse with lukewarm water.",
    skinType: Array.isArray(e.skinType) && e.skinType.length > 0 ? e.skinType : ["All Skin Types"],
    badges: Array.isArray(e.badges) ? e.badges : [],
    isBestSeller: !!e.isBestSeller,
    isNewArrival: !!e.isNewArrival,
    inStock: e.inStock !== false,
    images: Array.isArray(e.images) && e.images.length > 0 && e.images[0] ? e.images : ["/assets/products/body-scrubs/coffee-scrub-podium.jpeg"],
    weightOrVolume: e.weightOrVolume || "250g / 8.8 oz"
  };
}
function fn() {
  try {
    const e = localStorage.getItem(Ua);
    if (e) {
      const s = JSON.parse(e);
      if (Array.isArray(s) && s.length > 0) return s.map(Ql);
    }
    let t = [];
    try {
      const s = localStorage.getItem(ih);
      s && (t = JSON.parse(s));
    } catch {
      t = [];
    }
    const r = [...Hr, ...t].map(Ql);
    return localStorage.setItem(Ua, JSON.stringify(r)), r;
  } catch (e) {
    return console.error("Failed to load products from storage:", e), Hr.map(Ql);
  }
}
function fr(e) {
  try {
    localStorage.setItem(Ua, JSON.stringify(e)), typeof window < "u" && window.dispatchEvent(new CustomEvent(Wa, {
      detail: e
    }));
  } catch (t) {
    console.error("Failed to save products to storage:", t);
  }
}
function ic() {
  return fr(Hr), Hr;
}
const Va = "scrubie_hub_categories_v2",
  Un = "scrubie_categories_updated",
  Gl = [{
    id: "body-scrubs",
    name: "Body Scrubs",
    image: "/assets/products/body-scrubs/coffee-scrub-satin.jpeg",
    description: "100% handcrafted organic scrubs for silky smooth, luminous skin."
  }];
function Cr() {
  try {
    const e = localStorage.getItem(Va);
    if (e) {
      const t = JSON.parse(e);
      if (Array.isArray(t) && t.length > 0) return t;
    }
    return localStorage.setItem(Va, JSON.stringify(Gl)), Gl;
  } catch (e) {
    return console.error("Failed to load categories:", e), Gl;
  }
}
function oc(e) {
  try {
    localStorage.setItem(Va, JSON.stringify(e)), typeof window < "u" && window.dispatchEvent(new CustomEvent(Un, {
      detail: e
    }));
  } catch (t) {
    console.error("Failed to save categories:", t);
  }
}
const cc = ["All Skin Types", "Oily Skin", "Dry Skin", "Combination Skin", "Sensitive Skin"],
  oh = ({
    onClose: e,
    onProductsChange: t,
    categories: r,
    onCategoriesChange: s
  }) => {
    var Ce;
    const [l, a] = F.useState(() => sessionStorage.getItem("scrubie_admin_auth") === "true"),
      [i, o] = F.useState(""),
      [c, u] = F.useState(false),
      [g, b] = F.useState(false),
      [y, j] = F.useState("overview"),
      [C, S] = F.useState(false),
      [P, f] = F.useState(() => fn()),
      [d, h] = F.useState(() => r || Cr()),
      [w, k] = F.useState(""),
      [L, O] = F.useState("all"),
      [_, G] = F.useState(null),
      [N, Q] = F.useState(null),
      [de, ge] = F.useState(""),
      [ue, A] = F.useState(""),
      [Z, ee] = F.useState(""),
      [v, I] = F.useState({
        name: "",
        category: "body-scrubs",
        categoryLabel: "Body Scrubs",
        price: 1499,
        originalPrice: 1899,
        discountPercentage: 20,
        rating: 5,
        reviewCount: 1,
        shortDescription: "",
        description: "",
        benefits: ["100% Organic botanical ingredients", "Leaves skin radiant and velvety soft"],
        keyIngredients: ["Natural Cane Sugar", "Organic Botanical Oils", "Vitamin E"],
        howToUse: "Apply gently on wet skin in circular motions. Rinse with warm water.",
        skinType: ["All Skin Types"],
        badges: ["New Launch"],
        isBestSeller: false,
        inStock: true,
        images: ["/assets/products/body-scrubs/coffee-scrub-podium.jpeg"],
        weightOrVolume: "250g / 8.8 oz"
      });
    F.useEffect(() => {
      const p = T => {
        const M = T;
        M.detail && Array.isArray(M.detail) ? h(M.detail) : h(Cr());
      };
      return window.addEventListener(Un, p), () => window.removeEventListener(Un, p);
    }, []);
    const x = p => {
        G(p), setTimeout(() => G(null), 3500);
      },
      m = p => {
        p.preventDefault(), i === "1234" || i.toLowerCase() === "admin" ? (sessionStorage.setItem("scrubie_admin_auth", "true"), a(true), u(false), x("✓ Welcome back, Store Owner!")) : u(true);
      },
      D = () => {
        sessionStorage.removeItem("scrubie_admin_auth"), a(false), e();
      },
      H = (p, T) => {
        const M = P.map($ => $.id === p ? {
          ...$,
          inStock: !$.inStock
        } : $);
        f(M), fr(M), t(M), x(`✓ Stock status updated for "${T}".`);
      },
      U = (p, T) => {
        const M = P.map($ => $.id === p ? {
          ...$,
          isBestSeller: !$.isBestSeller
        } : $);
        f(M), fr(M), t(M), x(`✓ Best Seller status updated for "${T}".`);
      },
      V = (p, T) => {
        if (confirm(`Are you sure you want to permanently delete "${T}" from the catalog?`)) {
          const M = P.filter($ => $.id !== p);
          f(M), fr(M), t(M), x(`✓ Deleted "${T}" from Shop.`);
        }
      },
      W = p => {
        if (p.preventDefault(), !N) return;
        const T = Number(N.price) || 0,
          M = N.originalPrice ? Number(N.originalPrice) : void 0,
          $ = M && M > T ? Math.round((M - T) / M * 100) : 0,
          se = {
            ...N,
            price: T,
            originalPrice: M,
            discountPercentage: $
          },
          Ae = P.map(gt => gt.id === N.id ? se : gt);
        f(Ae), fr(Ae), t(Ae);
        const Ze = N.name;
        Q(null), x(`✓ Changes saved for "${Ze}"!`);
      },
      B = p => {
        var Yr, Yn, qn, qr, Zr, ur;
        if (p.preventDefault(), !v.name || !v.price) {
          alert("Please fill out the product name and price.");
          return;
        }
        const T = (v.category || ((Yr = d[0]) == null ? void 0 : Yr.id) || "body-scrubs").trim();
        let M = d.find(Xr => Xr.id.toLowerCase() === T.toLowerCase());
        M || (M = d.find(Xr => Xr.name.toLowerCase() === T.toLowerCase()));
        const $ = M ? M.id : T,
          se = M ? M.name : v.categoryLabel || T,
          Ae = Number(v.price) || 0,
          Ze = v.originalPrice ? Number(v.originalPrice) : void 0,
          gt = Ze && Ze > Ae ? Math.round((Ze - Ae) / Ze * 100) : 0,
          Gr = {
            id: `custom-${Date.now()}`,
            name: v.name.trim(),
            slug: v.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            category: $,
            categoryLabel: se,
            price: Ae,
            originalPrice: Ze,
            discountPercentage: gt,
            rating: 5,
            reviewCount: 1,
            shortDescription: ((Yn = v.shortDescription) == null ? void 0 : Yn.trim()) || "Handcrafted luxury botanical formulation.",
            description: ((qn = v.description) == null ? void 0 : qn.trim()) || ((qr = v.shortDescription) == null ? void 0 : qr.trim()) || "100% natural formulation crafted for skin radiance.",
            benefits: v.benefits && v.benefits.length > 0 ? v.benefits : ["Removes dead skin", "Locks in moisture"],
            keyIngredients: v.keyIngredients && v.keyIngredients.length > 0 ? v.keyIngredients : ["Natural Botanicals"],
            howToUse: ((Zr = v.howToUse) == null ? void 0 : Zr.trim()) || "Gently massage in circular motions.",
            skinType: v.skinType && v.skinType.length > 0 ? v.skinType : ["All Skin Types"],
            badges: v.badges && v.badges.length > 0 ? v.badges : ["New Launch"],
            isBestSeller: !!v.isBestSeller,
            inStock: true,
            images: v.images && v.images.length > 0 && v.images[0] ? v.images : ["/assets/products/body-scrubs/coffee-scrub-podium.jpeg"],
            weightOrVolume: ((ur = v.weightOrVolume) == null ? void 0 : ur.trim()) || "250g / 8.8 oz"
          },
          Kr = [Gr, ...P];
        f(Kr), fr(Kr), t(Kr), x(`✓ Published "${Gr.name}" in category "${se}" to Shop! 🛍️`), I({
          name: "",
          category: $,
          categoryLabel: se,
          price: 1499,
          originalPrice: 1899,
          discountPercentage: 21,
          rating: 5,
          reviewCount: 1,
          shortDescription: "",
          description: "",
          benefits: ["Removes dead skin", "Locks in moisture"],
          keyIngredients: ["Natural Botanicals"],
          howToUse: "Gently massage in circular motions.",
          skinType: ["All Skin Types"],
          badges: ["New Launch"],
          images: ["/assets/products/body-scrubs/coffee-scrub-podium.jpeg"],
          weightOrVolume: "250g / 8.8 oz",
          inStock: true
        }), j("products");
      },
      K = p => {
        if (p.preventDefault(), !de.trim()) {
          alert("Please enter a category name.");
          return;
        }
        const T = de.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
        if (d.find(Ae => Ae.id === T)) {
          alert(`Category "${de}" already exists!`);
          return;
        }
        const $ = {
            id: T,
            name: de.trim(),
            image: ue.trim() || "/assets/products/body-scrubs/coffee-scrub-satin.jpeg",
            description: Z.trim() || `Collection of ${de.trim()} by Scrubie-Hub.`
          },
          se = [...d, $];
        h(se), oc(se), s && s(se), I(Ae => ({
          ...Ae,
          category: $.id,
          categoryLabel: $.name
        })), ge(""), A(""), ee(""), x(`✓ Category "${$.name}" created and added to Shop! 🏷️`);
      },
      te = (p, T) => {
        if (d.length <= 1) {
          alert("You must have at least one active category in your store.");
          return;
        }
        if (confirm(`Are you sure you want to delete category "${T}"? Products in this category will need a new category assigned.`)) {
          const M = d.filter($ => $.id !== p);
          h(M), oc(M), s && s(M), x(`✓ Category "${T}" deleted.`);
        }
      },
      re = P.length,
      ne = P.filter(p => p.inStock).length,
      ie = re - ne;
    P.filter(p => p.isBestSeller).length;
    const be = P.reduce((p, T) => p + T.price, 0),
      Y = P.filter(p => {
        const T = p.name.toLowerCase().includes(w.toLowerCase()) || p.categoryLabel.toLowerCase().includes(w.toLowerCase()),
          M = L === "all" || p.category === L;
        return T && M;
      });
    return l ? <div className="fixed inset-0 z-50 bg-[#FAF7F5] flex overflow-hidden">{_ && <div className="fixed top-6 right-6 z-50 bg-[#2D1520] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-pink-500/40 flex items-center gap-3 animate-in slide-in-from-top-4"><Ha className="w-5 h-5 text-emerald-400 shrink-0" /><span className="text-xs sm:text-sm font-semibold">{_}</span></div>}{C && <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden animate-in fade-in duration-200" onClick={() => S(false)} />}<aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#2D1520] text-[#EFE8E4] flex flex-col shrink-0 border-r border-[#4A2437] transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:w-64 ${C ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"}`}><div className="p-5 sm:p-6 border-b border-[#4A2437] flex items-center justify-between"><div className="flex items-center gap-3"><img src="/assets/logo/logo.png" alt="Scrubie Hub Logo" className="w-10 h-10 object-contain rounded-xl bg-white/10 p-1 border border-white/20" /><div><h1 className="font-serif font-bold text-base tracking-wider text-white">SCRUBIE_HUB</h1><span className="text-[10px] text-pink-300 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />Owner Portal</span></div></div><button onClick={() => S(false)} className="p-1.5 rounded-lg text-pink-300/70 hover:text-white md:hidden" aria-label="Close menu"><Le className="w-5 h-5" /></button></div><nav className="p-4 space-y-1.5 flex-1 overflow-y-auto"><button onClick={() => {
            j("overview"), S(false);
          }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${y === "overview" ? "bg-brand-600 text-white shadow-md" : "text-pink-100/70 hover:bg-white/5 hover:text-white"}`}><Jo className="w-4 h-4" /><span>Dashboard Overview</span></button><button onClick={() => {
            j("products"), S(false);
          }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${y === "products" ? "bg-brand-600 text-white shadow-md" : "text-pink-100/70 hover:bg-white/5 hover:text-white"}`}><Vl className="w-4 h-4" /><span>{"Catalog & Inventory ("}{re})</span></button><button onClick={() => {
            j("add"), S(false);
          }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${y === "add" ? "bg-brand-600 text-white shadow-md" : "text-pink-100/70 hover:bg-white/5 hover:text-white"}`}>{n.jsx(on, {
              className: "w-4 h-4"
            })}<span>Add New Product</span></button><button onClick={() => {
            j("categories"), S(false);
          }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${y === "categories" ? "bg-brand-600 text-white shadow-md" : "text-pink-100/70 hover:bg-white/5 hover:text-white"}`}>{n.jsx(xs, {
              className: "w-4 h-4"
            })}<span>Categories Manager ({d.length})</span></button><button onClick={() => {
            j("settings"), S(false);
          }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${y === "settings" ? "bg-brand-600 text-white shadow-md" : "text-pink-100/70 hover:bg-white/5 hover:text-white"}`}>{n.jsx(sc, {
              className: "w-4 h-4"
            })}<span>Store Settings</span></button></nav><div className="p-4 border-t border-[#4A2437] space-y-2"><button onClick={e} className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-pink-100 font-medium transition-colors">{n.jsx(kx, {
              className: "w-4 h-4"
            })}<span>View Public Store</span></button><button onClick={D} className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs text-pink-300/60 hover:text-red-400 hover:bg-red-500/10 transition-colors">{n.jsx(ec, {
              className: "w-3.5 h-3.5"
            })}<span>{"Lock & Log Out"}</span></button></div></aside><main className="flex-1 flex flex-col overflow-y-auto bg-[#FAF7F5] min-w-0"><header className="bg-white border-b border-[#F0E6DF] px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sticky top-0 z-20 shadow-2xs"><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-2.5 min-w-0"><button onClick={() => S(true)} className="p-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 md:hidden flex items-center justify-center shrink-0" aria-label="Open navigation menu"><Eu className="w-5 h-5" /></button><div className="min-w-0"><h2 className="font-serif text-lg sm:text-2xl font-bold text-[#2D1520] capitalize truncate">{y === "overview" && "Store Performance"}{y === "products" && "Product Inventory"}{y === "add" && "Create New Product"}{y === "categories" && "Categories Manager"}{y === "settings" && "Store Settings"}</h2><p className="text-[11px] sm:text-xs text-gray-500 hidden sm:block truncate">Manage real formulas, categories, skin types, and pricing with instant live sync.</p></div></div><div className="flex items-center gap-1.5 sm:hidden shrink-0"><button onClick={e} className="px-2.5 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1 shadow-xs" title="View Live Storefront"><Ps className="w-3.5 h-3.5" /><span>Store</span></button><button onClick={D} className="p-1.5 rounded-xl border border-gray-200 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors" title={"Lock & Log Out"} aria-label="Log Out">{n.jsx(ec, {
                  className: "w-4 h-4"
                })}</button></div></div><div className="hidden sm:flex items-center gap-3 shrink-0"><button onClick={() => {
              if (confirm("Reset entire catalog to default Scrubie-Hub products?")) {
                const p = ic();
                f(p), t(p), x("✓ Catalog reset to official factory defaults.");
              }
            }} className="px-3 py-1.5 text-xs text-gray-500 hover:text-brand-700 border border-gray-200 hover:border-brand-300 rounded-lg flex items-center gap-1.5 transition-colors">{n.jsx(nc, {
                className: "w-3.5 h-3.5"
              })}{" Reset Default Catalog"}</button><button onClick={e} className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-2"><Ps className="w-4 h-4" />{" Live Website"}</button></div></header><div className="p-3 sm:p-6 lg:p-8 space-y-5 sm:space-y-8 flex-1 pb-28 md:pb-8">{y === "overview" && <div className="space-y-6 sm:space-y-8"><div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"><div className="bg-white rounded-2xl p-3.5 sm:p-6 border border-[#F2EAE4] shadow-xs flex flex-col justify-between sm:flex-row sm:items-center gap-2"><div><p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">Active Products</p><h3 className="font-serif text-xl sm:text-3xl font-bold text-[#2D1520] mt-0.5 sm:mt-1">{re}</h3><span className="text-[10px] sm:text-[11px] text-emerald-600 font-medium">All live in Shop</span></div><div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-pink-50 text-brand-600 flex items-center justify-center self-end sm:self-auto shrink-0"><Vl className="w-4 h-4 sm:w-6 sm:h-6" /></div></div><div className="bg-white rounded-2xl p-3.5 sm:p-6 border border-[#F2EAE4] shadow-xs flex flex-col justify-between sm:flex-row sm:items-center gap-2"><div><p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">In-Stock Items</p><h3 className="font-serif text-xl sm:text-3xl font-bold text-emerald-700 mt-0.5 sm:mt-1">{ne}</h3><span className="text-[10px] sm:text-[11px] text-gray-500">{ie > 0 ? `${ie} Out of Stock` : "100% available"}</span></div><div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center self-end sm:self-auto shrink-0"><Ha className="w-4 h-4 sm:w-6 sm:h-6" /></div></div><div className="bg-white rounded-2xl p-3.5 sm:p-6 border border-[#F2EAE4] shadow-xs flex flex-col justify-between sm:flex-row sm:items-center gap-2"><div><p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">Categories</p><h3 className="font-serif text-xl sm:text-3xl font-bold text-brand-700 mt-0.5 sm:mt-1">{d.length}</h3><span className="text-[10px] sm:text-[11px] text-brand-600 font-medium">{"Home & Shop"}</span></div><div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center self-end sm:self-auto shrink-0">{n.jsx(xs, {
                    className: "w-4 h-4 sm:w-6 sm:h-6"
                  })}</div></div><div className="bg-white rounded-2xl p-3.5 sm:p-6 border border-[#F2EAE4] shadow-xs flex flex-col justify-between sm:flex-row sm:items-center gap-2"><div><p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">Retail Value</p><h3 className="font-serif text-lg sm:text-3xl font-bold text-[#2D1520] mt-0.5 sm:mt-1 truncate">{"Rs. "}{be.toLocaleString()}</h3><span className="text-[10px] sm:text-[11px] text-gray-500 truncate block">{"Avg Rs. "}{Math.round(be / (re || 1))}</span></div><div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center self-end sm:self-auto shrink-0">{n.jsx(jx, {
                    className: "w-4 h-4 sm:w-6 sm:h-6"
                  })}</div></div></div><div className="grid grid-cols-1 lg:grid-cols-2 gap-6"><div className="bg-white rounded-2xl p-6 border border-[#F2EAE4] shadow-xs space-y-4"><div className="flex items-center justify-between"><h4 className="font-serif text-lg font-bold text-[#2D1520]">Best Selling Formulations</h4><button onClick={() => j("products")} className="text-xs text-brand-700 font-semibold hover:underline">Manage All →</button></div><div className="space-y-3">{P.filter(p => p.isBestSeller).map(p => <div key={p.id} className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7F5] border border-gray-100"><div className="flex items-center gap-3"><img src={p.images[0]} alt={p.name} className="w-10 h-10 rounded-lg object-cover bg-white" /><div><p className="text-xs font-bold text-[#2D1520]">{p.name}</p><p className="text-[11px] text-brand-700">{"Rs. "}{p.price.toLocaleString()}{" • "}{p.categoryLabel}</p></div></div><span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Best Seller</span></div>)}</div></div><div className="bg-white rounded-2xl p-6 border border-[#F2EAE4] shadow-xs space-y-4"><h4 className="font-serif text-lg font-bold text-[#2D1520]">{"Dynamic Architecture & Guidelines"}</h4><div className="space-y-3 text-xs text-gray-600 leading-relaxed"><div className="p-3 rounded-xl bg-pink-50/50 border border-pink-100"><strong className="text-brand-800 block mb-1">🏷️ Zero Dummy Categories</strong>No fake categories exist on the website. Whenever you add a new category in the Categories tab, it automatically becomes active in the Homepage and Shop sidebar.</div><div className="p-3 rounded-xl bg-pink-50/50 border border-pink-100"><strong className="text-brand-800 block mb-1">🌿 Skin Types Synced with Shop Filter</strong>{'Select suitable skin types when adding products. Customers filtering by "Dry Skin" or "Oily Skin" in the Shop will instantly find your newly created items.'}</div></div></div></div></div>}{y === "products" && <div className="bg-white rounded-2xl border border-[#F2EAE4] shadow-xs overflow-hidden"><div className="p-4 sm:p-6 border-b border-[#F2EAE4] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4"><div className="relative flex-1"><Bi className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" /><input type="text" value={w} onChange={p => k(p.target.value)} placeholder="Search product by name or category..." className="w-full pl-10 pr-4 py-2 bg-[#FAF7F5] border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-brand-500" /></div><div className="flex items-center gap-2 sm:gap-3"><select value={L} onChange={p => O(p.target.value)} className="flex-1 sm:flex-initial px-3 py-2 bg-[#FAF7F5] border border-gray-200 rounded-xl text-xs text-gray-700 focus:outline-none focus:border-brand-500"><option value="all">All Categories</option>{d.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}</select><button onClick={() => j("add")} className="px-3.5 sm:px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 shrink-0">{n.jsx(on, {
                    className: "w-3.5 h-3.5"
                  })}{" "}<span className="hidden xs:inline">Add Product</span><span className="xs:hidden">+ Add</span></button></div></div><div className="block md:hidden divide-y divide-gray-100">{Y.length === 0 ? <div className="p-8 text-center text-xs text-gray-400">No products found matching your filter.</div> : Y.map(p => <div key={p.id} className="p-4 space-y-3 hover:bg-pink-50/20 transition-colors"><div className="flex items-start gap-3"><img src={p.images[0]} alt={p.name} className="w-14 h-14 rounded-xl object-cover border border-gray-100 bg-white shrink-0 shadow-2xs" /><div className="flex-1 min-w-0"><div className="flex items-start justify-between gap-1"><h4 className="font-bold text-xs text-[#2D1520] truncate">{p.name}</h4><div className="flex items-center gap-1 shrink-0"><button onClick={() => Q({
                          ...p
                        })} className="p-1.5 text-gray-500 hover:text-brand-700 rounded-lg hover:bg-brand-50 transition-colors" title="Edit product">{n.jsx(rc, {
                            className: "w-3.5 h-3.5"
                          })}</button><button onClick={() => V(p.id, p.name)} className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors" title="Delete product"><Nn className="w-3.5 h-3.5" /></button></div></div><p className="text-[11px] text-gray-400 truncate">{p.weightOrVolume}</p><div className="flex items-center flex-wrap gap-2 mt-1"><span className="font-bold text-xs text-brand-800">{"Rs. "}{p.price.toLocaleString()}</span>{p.originalPrice && <span className="text-[10px] text-gray-400 line-through">{"Rs. "}{p.originalPrice.toLocaleString()}</span>}<span className="bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full font-semibold text-[10px]">{p.categoryLabel}</span></div></div></div><div className="flex items-center gap-2 pt-1 border-t border-gray-100"><button onClick={() => H(p.id, p.name)} className={`flex-1 py-1.5 rounded-lg font-bold text-[11px] transition-colors flex items-center justify-center gap-1 ${p.inStock ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-rose-50 text-rose-700 border border-rose-200"}`}>{p.inStock ? "✓ In Stock" : "✕ Out of Stock"}</button><button onClick={() => U(p.id, p.name)} className={`flex-1 py-1.5 rounded-lg font-bold text-[11px] transition-colors flex items-center justify-center gap-1 ${p.isBestSeller ? "bg-amber-50 text-amber-800 border border-amber-200" : "bg-gray-50 text-gray-500 border border-gray-200"}`}>{p.isBestSeller ? "★ Best Seller" : "☆ Standard"}</button></div></div>)}</div><div className="hidden md:block overflow-x-auto"><table className="w-full text-left text-xs"><thead className="bg-[#FAF7F5] border-b border-[#F2EAE4] text-gray-500 uppercase tracking-wider font-semibold"><tr><th className="py-3.5 px-6">Product</th><th className="py-3.5 px-4">Category</th><th className="py-3.5 px-4">Skin Types</th><th className="py-3.5 px-4">Price (PKR)</th><th className="py-3.5 px-4 text-center">In Stock?</th><th className="py-3.5 px-4 text-center">Best Seller?</th><th className="py-3.5 px-6 text-right">Actions</th></tr></thead><tbody className="divide-y divide-gray-100">{Y.map(p => <tr key={p.id} className="hover:bg-pink-50/20 transition-colors"><td className="py-4 px-6"><div className="flex items-center gap-3"><img src={p.images[0]} alt={p.name} className="w-12 h-12 rounded-xl object-cover border border-gray-100 bg-white shrink-0" /><div><p className="font-bold text-[#2D1520]">{p.name}</p><p className="text-[11px] text-gray-400 truncate max-w-xs">{p.weightOrVolume}</p></div></div></td><td className="py-4 px-4 font-medium text-gray-600"><span className="bg-brand-50 text-brand-800 px-2 py-0.5 rounded-full font-semibold text-[11px]">{p.categoryLabel}</span></td><td className="py-4 px-4"><div className="flex flex-wrap gap-1 max-w-[150px]">{p.skinType && p.skinType.slice(0, 2).map(T => <span key={T} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">{T}</span>)}{p.skinType && p.skinType.length > 2 && <span className="text-[10px] text-gray-400">+{p.skinType.length - 2}</span>}</div></td><td className="py-4 px-4"><div className="font-bold text-brand-800">{"Rs. "}{p.price.toLocaleString()}</div>{p.originalPrice && <div className="text-[10px] text-gray-400 line-through">{"Rs. "}{p.originalPrice.toLocaleString()}</div>}</td><td className="py-4 px-4 text-center"><button onClick={() => H(p.id, p.name)} className={`px-3 py-1 rounded-full font-bold text-[10px] transition-colors ${p.inStock ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200" : "bg-rose-100 text-rose-800 hover:bg-rose-200"}`}>{p.inStock ? "✓ In Stock" : "✕ Out of Stock"}</button></td><td className="py-4 px-4 text-center"><button onClick={() => U(p.id, p.name)} className={`px-2.5 py-1 rounded-full font-bold text-[10px] transition-colors ${p.isBestSeller ? "bg-amber-100 text-amber-800" : "bg-gray-100 text-gray-400 hover:bg-gray-200"}`}>{p.isBestSeller ? "★ Best Seller" : "Standard"}</button></td><td className="py-4 px-6 text-right space-x-2"><button onClick={() => Q({
                        ...p
                      })} className="p-1.5 rounded-lg text-gray-400 hover:text-brand-700 hover:bg-brand-50 transition-colors" title="Edit product">{n.jsx(rc, {
                          className: "w-4 h-4"
                        })}</button><button onClick={() => V(p.id, p.name)} className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors" title="Delete product"><Nn className="w-4 h-4" /></button></td></tr>)}</tbody></table></div></div>}{y === "add" && <div className="max-w-3xl bg-white rounded-2xl border border-[#F2EAE4] p-4 sm:p-8 shadow-xs"><form onSubmit={B} className="space-y-5 sm:space-y-6"><div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"><div className="sm:col-span-2"><label className="block text-xs font-bold text-gray-700 mb-1.5">Product Name *</label><input type="text" required={true} value={v.name} onChange={p => I({
                    ...v,
                    name: p.target.value
                  })} placeholder="e.g. Vanilla Whipped Sugar Scrub" className="w-full px-3.5 py-2.5 bg-[#FAF7F5] border border-gray-200 rounded-xl text-sm sm:text-xs focus:outline-none focus:border-brand-500" /></div><div><div className="flex items-center justify-between mb-1.5"><label className="block text-xs font-bold text-gray-700">Category *</label><button type="button" onClick={() => j("categories")} className="text-[11px] text-brand-600 hover:underline font-semibold">+ Manage Categories</button></div><select value={v.category || (d[0] ? d[0].id : "body-scrubs")} onChange={p => {
                    const T = p.target.value,
                      M = d.find($ => $.id === T);
                    I({
                      ...v,
                      category: T,
                      categoryLabel: M ? M.name : T
                    });
                  }} className="w-full px-3.5 py-2.5 bg-[#FAF7F5] border border-gray-200 rounded-xl text-sm sm:text-xs focus:outline-none focus:border-brand-500">{d.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}</select></div><div><label className="block text-xs font-bold text-gray-700 mb-1.5">Size / Weight</label><input type="text" value={v.weightOrVolume} onChange={p => I({
                    ...v,
                    weightOrVolume: p.target.value
                  })} placeholder="e.g. 250g / 8.8 oz" className="w-full px-3.5 py-2.5 bg-[#FAF7F5] border border-gray-200 rounded-xl text-sm sm:text-xs focus:outline-none focus:border-brand-500" /></div><div><label className="block text-xs font-bold text-gray-700 mb-1.5">Selling Price (PKR) *</label><input type="number" required={true} value={v.price || ""} onChange={p => {
                    const T = Number(p.target.value),
                      M = v.originalPrice ? Number(v.originalPrice) : 0,
                      $ = M > T && M > 0 ? Math.round((M - T) / M * 100) : 0;
                    I({
                      ...v,
                      price: T,
                      discountPercentage: $
                    });
                  }} placeholder="1499" className="w-full px-3.5 py-2.5 bg-[#FAF7F5] border border-gray-200 rounded-xl text-sm sm:text-xs focus:outline-none focus:border-brand-500 font-medium" /></div><div><label className="block text-xs font-bold text-gray-700 mb-1.5">Original / Strike-through Price (PKR)</label><input type="number" value={v.originalPrice || ""} onChange={p => {
                    const T = Number(p.target.value),
                      M = Number(v.price) || 0,
                      $ = T > M && T > 0 ? Math.round((T - M) / T * 100) : 0;
                    I({
                      ...v,
                      originalPrice: T,
                      discountPercentage: $
                    });
                  }} placeholder="1899" className="w-full px-3.5 py-2.5 bg-[#FAF7F5] border border-gray-200 rounded-xl text-sm sm:text-xs focus:outline-none focus:border-brand-500 font-medium" /></div><div className="sm:col-span-2"><div className="p-3 bg-pink-50/60 border border-pink-100 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs"><span className="text-gray-600 font-semibold">Dynamic Discount Badge Preview:</span>{v.originalPrice && Number(v.originalPrice) > Number(v.price) ? <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 shadow-xs self-start sm:self-auto">🔥 -{Math.round((Number(v.originalPrice) - Number(v.price)) / Number(v.originalPrice) * 100)}{"% OFF (Customer saves Rs. "}{(Number(v.originalPrice) - Number(v.price)).toLocaleString()})</span> : <span className="text-gray-400 font-medium">No discount (Selling price ≥ Original price)</span>}</div></div><div className="sm:col-span-2"><label className="block text-xs font-bold text-gray-700 mb-1.5">Suitable Skin Types * (Matches Shop filters)</label><div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">{cc.map(p => {
                      const T = (v.skinType || []).includes(p);
                      return <button key={p} type="button" onClick={() => {
                        const M = v.skinType || [],
                          $ = T ? M.filter(se => se !== p) : [...M, p];
                        I({
                          ...v,
                          skinType: $.length > 0 ? $ : ["All Skin Types"]
                        });
                      }} className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${T ? "bg-brand-600 text-white border-brand-600 shadow-xs" : "bg-[#FAF7F5] text-gray-600 border-gray-200 hover:border-brand-300"}`}>{T ? "✓ " : "+ "}{p}</button>;
                    })}</div></div><div className="sm:col-span-2"><label className="block text-xs font-bold text-gray-700 mb-1.5">Product Image URL</label><input type="text" value={((Ce = v.images) == null ? void 0 : Ce[0]) || ""} onChange={p => I({
                    ...v,
                    images: [p.target.value]
                  })} placeholder="/assets/products/body-scrubs/coffee-scrub-podium.jpeg" className="w-full px-3.5 py-2.5 bg-[#FAF7F5] border border-gray-200 rounded-xl text-sm sm:text-xs focus:outline-none focus:border-brand-500" /></div><div className="sm:col-span-2"><label className="block text-xs font-bold text-gray-700 mb-1.5">Short Description (1-2 sentences)</label><textarea rows={2} value={v.shortDescription} onChange={p => I({
                    ...v,
                    shortDescription: p.target.value
                  })} placeholder="Natural whipped sugar scrub crafted with botanical oils to buff away rough dry skin..." className="w-full px-3.5 py-2.5 bg-[#FAF7F5] border border-gray-200 rounded-xl text-sm sm:text-xs focus:outline-none focus:border-brand-500" /></div><div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={v.isBestSeller} onChange={p => I({
                      ...v,
                      isBestSeller: p.target.checked
                    })} className="rounded text-brand-600 focus:ring-brand-500" /><span className="text-xs font-semibold text-gray-700">Mark as Best Seller</span></label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={v.inStock} onChange={p => I({
                      ...v,
                      inStock: p.target.checked
                    })} className="rounded text-brand-600 focus:ring-brand-500" /><span className="text-xs font-semibold text-gray-700">In Stock for Immediate Delivery</span></label></div></div><div className="pt-4 border-t border-gray-100 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5"><button type="button" onClick={() => j("products")} className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-300 text-xs font-semibold text-gray-600 hover:bg-gray-50 text-center">Cancel</button><button type="submit" className="w-full sm:w-auto px-6 py-3 sm:py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-md text-center">{"Publish to Website & Shop"}</button></div></form></div>}{y === "categories" && <div className="space-y-5 sm:space-y-6 max-w-4xl"><div className="bg-white rounded-2xl border border-[#F2EAE4] p-4 sm:p-6 shadow-xs"><div className="flex items-center gap-2 pb-3 mb-3 border-b border-gray-100">{n.jsx(xs, {
                  className: "w-4 h-4 sm:w-5 sm:h-5 text-brand-600"
                })}<h3 className="font-serif text-base sm:text-lg font-bold text-[#2D1520]">Add New Category</h3></div><form onSubmit={K} className="space-y-4"><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"><div><label className="block text-xs font-bold text-gray-700 mb-1">Category Display Name *</label><input type="text" required={true} value={de} onChange={p => ge(p.target.value)} placeholder="e.g. Body Butters, Lip Care, Tools" className="w-full px-3.5 py-2 bg-[#FAF7F5] border border-gray-200 rounded-xl text-sm sm:text-xs focus:outline-none focus:border-brand-500" /></div><div><label className="block text-xs font-bold text-gray-700 mb-1">Category Cover Image URL</label><input type="text" value={ue} onChange={p => A(p.target.value)} placeholder="/assets/products/body-scrubs/coffee-scrub-satin.jpeg" className="w-full px-3.5 py-2 bg-[#FAF7F5] border border-gray-200 rounded-xl text-sm sm:text-xs focus:outline-none focus:border-brand-500" /></div><div className="sm:col-span-2"><label className="block text-xs font-bold text-gray-700 mb-1">Brief Category Description</label><input type="text" value={Z} onChange={p => ee(p.target.value)} placeholder="Rich handcrafted whipped body butters for deep winter moisture." className="w-full px-3.5 py-2 bg-[#FAF7F5] border border-gray-200 rounded-xl text-sm sm:text-xs focus:outline-none focus:border-brand-500" /></div></div><div className="flex justify-end pt-1"><button type="submit" className="w-full sm:w-auto px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5">{n.jsx(on, {
                      className: "w-4 h-4"
                    })}<span>{"Create & Publish Category"}</span></button></div></form></div><div className="bg-white rounded-2xl border border-[#F2EAE4] p-4 sm:p-6 shadow-xs space-y-3 sm:space-y-4"><h4 className="font-serif text-sm sm:text-base font-bold text-[#2D1520]">Active Store Categories ({d.length})</h4><div className="divide-y divide-gray-100">{d.map(p => {
                  const T = p.id.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-"),
                    M = p.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-"),
                    $ = Ae => {
                      const Ze = (Ae.category || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-"),
                        gt = (Ae.categoryLabel || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
                      return Ze === T || Ze === M || gt === T || gt === M;
                    },
                    se = P.filter($).length;
                  return <div key={p.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 last:border-0"><div className="flex items-center gap-3 min-w-0"><img src={p.image || "/assets/products/body-scrubs/coffee-scrub-satin.jpeg"} alt={p.name} className="w-12 h-12 rounded-xl object-cover border border-gray-100 bg-white shrink-0 shadow-2xs" /><div className="min-w-0 flex-1"><p className="font-bold text-sm text-[#2D1520] truncate">{p.name}</p><p className="text-[11px] text-gray-400 truncate">{"Slug: "}<code className="font-mono text-brand-700">{p.id}</code>{" • "}{se}{" "}{se === 1 ? "Product" : "Products"}</p></div></div><div className="flex items-center gap-2 self-stretch sm:self-auto justify-end flex-wrap"><button type="button" onClick={() => {
                        I({
                          name: "",
                          category: p.id,
                          categoryLabel: p.name,
                          price: 1499,
                          originalPrice: 1899,
                          discountPercentage: 20,
                          rating: 5,
                          reviewCount: 1,
                          shortDescription: "",
                          description: "",
                          benefits: ["Removes dead skin", "Locks in moisture"],
                          keyIngredients: ["Natural Botanicals"],
                          howToUse: "Gently massage in circular motions.",
                          skinType: ["All Skin Types"],
                          badges: ["New Launch"],
                          images: [p.image || "/assets/products/body-scrubs/coffee-scrub-podium.jpeg"],
                          weightOrVolume: "250g / 8.8 oz",
                          inStock: true
                        }), j("add");
                      }} className="flex-1 sm:flex-initial px-3 py-1.5 bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-semibold rounded-lg border border-brand-200 transition-colors flex items-center justify-center gap-1" title={`Add new product directly to ${p.name}`}>{n.jsx(on, {
                          className: "w-3.5 h-3.5"
                        })}<span>+ Add Item</span></button><button onClick={() => {
                        O(p.id), j("products");
                      }} className="px-3 py-1.5 bg-[#FAF7F5] hover:bg-pink-50 text-gray-700 text-xs font-semibold rounded-lg border border-gray-200">View ({se})</button><button onClick={() => te(p.id, p.name)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete category"><Nn className="w-4 h-4" /></button></div></div>;
                })}</div></div></div>}{y === "settings" && <div className="max-w-2xl bg-white rounded-2xl border border-[#F2EAE4] p-4 sm:p-8 shadow-xs space-y-5 sm:space-y-6"><h3 className="font-serif text-base sm:text-lg font-bold text-[#2D1520]">{"Brand & Delivery Rules"}</h3><div className="space-y-4 text-xs"><div><label className="block font-bold text-gray-700 mb-1">Free Nationwide Delivery Threshold (PKR)</label><input type="number" defaultValue={le.freeDeliveryThreshold} disabled={true} className="w-full px-3.5 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-gray-600 text-sm sm:text-xs" /><p className="text-[11px] text-gray-400 mt-1">{"Configured in site config: Free delivery is unlocked at Rs. "}{le.freeDeliveryThreshold.toLocaleString()}.</p></div><div><label className="block font-bold text-gray-700 mb-1">Official WhatsApp Ordering Hotline</label><input type="text" defaultValue={le.whatsappDisplayNumber} disabled={true} className="w-full px-3.5 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-gray-600 text-sm sm:text-xs" /><p className="text-[11px] text-gray-400 mt-1">Orders from checkout and WhatsApp buttons are automatically directed to this number.</p></div><div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800"><p className="font-bold">✓ Vercel Deployment Enabled</p><p className="text-[11px] mt-0.5">Your single-page app rewrite configuration (<code className="font-mono">vercel.json</code>{") is active. Direct access to "}<code className="font-mono">/admin</code>{" will always load this portal seamlessly."}</p></div><div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div><p className="font-bold text-gray-800">Factory Catalog Reset</p><p className="text-[11px] text-gray-500">Restore all products and categories back to official Scrubie-Hub default catalog.</p></div><button onClick={() => {
                  if (confirm("Reset entire catalog to default Scrubie-Hub products?")) {
                    const p = ic();
                    f(p), t(p), x("✓ Catalog reset to official factory defaults.");
                  }
                }} className="px-4 py-2 bg-white border border-gray-300 hover:border-red-300 hover:text-red-600 text-gray-700 rounded-xl text-xs font-semibold shrink-0 transition-colors flex items-center justify-center gap-1.5">{n.jsx(nc, {
                    className: "w-3.5 h-3.5"
                  })}<span>Reset Catalog</span></button></div></div></div>}</div><nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#F0E6DF] py-1.5 px-2 flex items-center justify-around shadow-[0_-4px_16px_rgba(0,0,0,0.06)] pb-[max(0.375rem,env(safe-area-inset-bottom))]"><button onClick={() => j("overview")} className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all ${y === "overview" ? "text-brand-700 font-bold bg-brand-50/80" : "text-gray-400 hover:text-gray-700"}`}><Jo className="w-4 h-4" /><span className="text-[10px]">Overview</span></button><button onClick={() => j("products")} className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all ${y === "products" ? "text-brand-700 font-bold bg-brand-50/80" : "text-gray-400 hover:text-gray-700"}`}><Vl className="w-4 h-4" /><span className="text-[10px]">Catalog ({re})</span></button><button onClick={() => j("add")} className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all ${y === "add" ? "text-brand-700 font-bold bg-brand-50/80" : "text-gray-400 hover:text-gray-700"}`}>{n.jsx(on, {
              className: "w-4 h-4"
            })}<span className="text-[10px]">+ Product</span></button><button onClick={() => j("categories")} className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all ${y === "categories" ? "text-brand-700 font-bold bg-brand-50/80" : "text-gray-400 hover:text-gray-700"}`}>{n.jsx(xs, {
              className: "w-4 h-4"
            })}<span className="text-[10px]">Categories</span></button><button onClick={() => j("settings")} className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all ${y === "settings" ? "text-brand-700 font-bold bg-brand-50/80" : "text-gray-400 hover:text-gray-700"}`}>{n.jsx(sc, {
              className: "w-4 h-4"
            })}<span className="text-[10px]">Settings</span></button></nav></main>{N && <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"><div className="bg-white w-full max-w-lg rounded-2xl p-4 sm:p-6 shadow-2xl space-y-4 border border-pink-100 max-h-[90vh] overflow-y-auto"><div className="flex items-center justify-between pb-3 border-b border-gray-100"><h3 className="font-serif text-lg font-bold text-[#2D1520]">{'Edit "'}{N.name}{'"'}</h3><button onClick={() => Q(null)} className="text-gray-400 hover:text-gray-600">✕</button></div><form onSubmit={W} className="space-y-4 text-xs"><div><label className="block font-bold text-gray-700 mb-1">Product Title</label><input type="text" value={N.name} onChange={p => Q({
                ...N,
                name: p.target.value
              })} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-brand-500" /></div><div><label className="block font-bold text-gray-700 mb-1">Category</label><select value={N.category} onChange={p => {
                const T = p.target.value,
                  M = d.find($ => $.id === T);
                Q({
                  ...N,
                  category: T,
                  categoryLabel: M ? M.name : T
                });
              }} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-brand-500">{d.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}</select></div><div className="grid grid-cols-2 gap-3"><div><label className="block font-bold text-gray-700 mb-1">Selling Price (PKR)</label><input type="number" value={N.price || ""} onChange={p => {
                  const T = Number(p.target.value),
                    M = N.originalPrice ? Number(N.originalPrice) : 0,
                    $ = M > T && M > 0 ? Math.round((M - T) / M * 100) : 0;
                  Q({
                    ...N,
                    price: T,
                    discountPercentage: $
                  });
                }} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-brand-500 font-medium" /></div><div><label className="block font-bold text-gray-700 mb-1">Original Price (PKR)</label><input type="number" value={N.originalPrice || ""} onChange={p => {
                  const T = Number(p.target.value),
                    M = Number(N.price) || 0,
                    $ = T > M && T > 0 ? Math.round((T - M) / T * 100) : 0;
                  Q({
                    ...N,
                    originalPrice: T,
                    discountPercentage: $
                  });
                }} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-brand-500 font-medium" /></div></div><div className="p-2.5 bg-pink-50/70 border border-pink-100 rounded-lg flex items-center justify-between text-xs"><span className="text-gray-600 font-medium">Calculated Discount:</span>{N.originalPrice && Number(N.originalPrice) > Number(N.price) ? <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">🔥 -{Math.round((Number(N.originalPrice) - Number(N.price)) / Number(N.originalPrice) * 100)}{"% OFF (Save Rs. "}{(Number(N.originalPrice) - Number(N.price)).toLocaleString()})</span> : <span className="text-gray-400">No discount (Selling price ≥ Original price)</span>}</div><div><label className="block font-bold text-gray-700 mb-1">Suitable Skin Types (Matches Shop filter)</label><div className="flex flex-wrap gap-1.5 pt-1">{cc.map(p => {
                  const T = (N.skinType || []).includes(p);
                  return <button key={p} type="button" onClick={() => {
                    const M = N.skinType || [],
                      $ = T ? M.filter(se => se !== p) : [...M, p];
                    Q({
                      ...N,
                      skinType: $.length > 0 ? $ : ["All Skin Types"]
                    });
                  }} className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-all ${T ? "bg-brand-600 text-white border-brand-600" : "bg-gray-50 text-gray-600 border-gray-200"}`}>{T ? "✓ " : "+ "}{p}</button>;
                })}</div></div><div><label className="block font-bold text-gray-700 mb-1">Short Description</label><textarea rows={3} value={N.shortDescription} onChange={p => Q({
                ...N,
                shortDescription: p.target.value
              })} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-brand-500" /></div><div className="flex items-center gap-4 pt-2"><label className="flex items-center gap-2"><input type="checkbox" checked={N.inStock} onChange={p => Q({
                  ...N,
                  inStock: p.target.checked
                })} className="rounded text-brand-600" /><span>In Stock</span></label><label className="flex items-center gap-2"><input type="checkbox" checked={N.isBestSeller} onChange={p => Q({
                  ...N,
                  isBestSeller: p.target.checked
                })} className="rounded text-brand-600" /><span>Best Seller Badge</span></label></div><div className="pt-3 flex justify-end gap-2 border-t"><button type="button" onClick={() => Q(null)} className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">Cancel</button><button type="submit" className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-bold">Save Changes</button></div></form></div></div>}</div> : <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3.5 sm:p-6 bg-gradient-to-br from-[#F5EDF4] via-[#FAF3F2] to-[#ECE3F0]"><div className="absolute top-[-10%] right-[-5%] w-[420px] h-[420px] rounded-full bg-purple-200/40 blur-[100px] pointer-events-none" /><div className="absolute bottom-[-10%] left-[-5%] w-[480px] h-[480px] rounded-full bg-pink-200/50 blur-[110px] pointer-events-none" /><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-amber-100/40 blur-[90px] pointer-events-none" /><div className="absolute top-10 left-10 text-amber-400/50 pointer-events-none animate-pulse">{n.jsx(ke, {
          className: "w-5 h-5"
        })}</div><div className="absolute bottom-12 right-12 text-pink-400/50 pointer-events-none animate-pulse">{n.jsx(ke, {
          className: "w-6 h-6"
        })}</div><div className="absolute top-1/3 right-8 text-purple-400/40 pointer-events-none animate-pulse">{n.jsx(ke, {
          className: "w-4 h-4"
        })}</div><div className="absolute bottom-1/4 left-10 text-amber-300/40 pointer-events-none animate-pulse">{n.jsx(ke, {
          className: "w-4 h-4"
        })}</div><div className="relative w-full max-w-[385px] mx-auto bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[32px] p-6 sm:p-9 shadow-[0_25px_60px_-15px_rgba(180,91,108,0.22),0_0_0_1px_rgba(212,175,55,0.38)] text-[#2D1520] z-10 transition-all duration-300 max-h-[96vh] overflow-y-auto"><button onClick={e} className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-400 hover:text-gray-700 hover:bg-black/5 p-2 rounded-full transition-colors" title="Close" aria-label="Close"><Le className="w-5 h-5" /></button><div className="relative w-24 h-24 mx-auto mb-3 flex items-center justify-center"><div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#F4B2C8] via-[#E8BBD5] to-[#FCE4EC] opacity-90 blur-md scale-110 animate-pulse" /><div className="relative w-20 h-20 rounded-full bg-white p-1.5 shadow-md border border-[#F2D0DF] flex items-center justify-center overflow-hidden"><img src="/assets/logo/logo.png" alt="Scrubie Hub Logo" className="w-full h-full object-cover rounded-full" /></div></div><h2 className="font-serif text-2xl sm:text-[27px] font-bold text-center text-[#8C6428] tracking-tight">Store Owner Portal</h2><p className="text-xs text-[#7A616E] text-center mt-1 mb-5 max-w-[270px] mx-auto leading-relaxed">Enter your secret Management PIN to access Scrubie-Hub controls</p><form onSubmit={m} className="space-y-4"><div><div className="flex items-center justify-between mb-1.5"><label className="text-xs font-bold text-[#3D202F] tracking-wide">Master Security PIN</label><button type="button" onClick={() => {
                o("1234"), u(false);
              }} className="text-[11px] font-semibold text-[#B99235] hover:text-[#967320] hover:underline transition-colors" title="Click to auto-fill default PIN">Quick Fill (1234)</button></div><div className="relative"><Su className="w-4 h-4 text-[#B99235] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" /><input type={g ? "text" : "password"} value={i} onChange={p => {
                o(p.target.value), c && u(false);
              }} placeholder="Enter PIN (Default: 1234)" autoFocus={true} className="w-full pl-10 pr-10 py-3.5 bg-white/95 border border-[#DFC9BA] rounded-xl text-[#2D1520] placeholder:text-gray-400 focus:outline-none focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/25 text-center tracking-widest text-base font-mono shadow-2xs transition-all" /><button type="button" onClick={() => b(!g)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-1" aria-label={g ? "Hide PIN" : "Show PIN"}>{g ? <Sx className="w-4 h-4" /> : <Ps className="w-4 h-4" />}</button></div>{c && <p className="text-xs text-rose-600 mt-2 text-center bg-rose-50/90 py-1.5 px-3 rounded-lg border border-rose-200 animate-in fade-in">{"Incorrect PIN. Please try again or use default: "}<strong>1234</strong></p>}</div><button type="submit" className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#B99235] via-[#DFB85C] to-[#AA8529] hover:from-[#AA8529] hover:via-[#C8A243] hover:to-[#967320] shadow-lg shadow-[#B99235]/35 hover:shadow-xl hover:shadow-[#B99235]/45 transition-all duration-300 transform active:scale-[0.99] tracking-wide flex items-center justify-center gap-2">{n.jsx(ke, {
              className: "w-4 h-4 text-amber-100 shrink-0"
            })}<span>Unlock Dashboard</span></button><div className="text-center pt-2"><button type="button" onClick={e} className="text-xs font-semibold text-[#7A616E] hover:text-[#B99235] transition-colors inline-flex items-center gap-1.5">← Return to Public Storefront</button></div></form></div></div>;
  },
  ch = ({
    onExploreShop: e,
    onContactClick: t
  }) => <div className="bg-[#FAF7F5] min-h-screen"><section className="relative overflow-hidden bg-gradient-to-b from-[#FBF0F2] via-[#FDF5F7] to-[#FAF7F5] py-14 sm:py-20 lg:py-24 border-b border-brand-200/50"><div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" /><div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl pointer-events-none" /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-3xl mx-auto text-center space-y-5"><div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-brand-200 text-brand-700 text-xs sm:text-sm font-semibold shadow-sm animate-badge-pop">{n.jsx(ke, {
              className: "w-4 h-4 text-brand-500 animate-sparkle"
            })}<span>{"Our Story & Philosophy"}</span></div><h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2D1520] leading-[1.15]">{"Pure Botanical Botanicals. "}<br /><span className="italic gradient-text-rose">Handcrafted Radiance.</span></h1><p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">{"Founded with love in Pakistan, "}<strong className="text-brand-800 font-bold">{le.brandName}</strong>{" is dedicated to bringing pure, chemical-free organic body treatments tailored specifically for radiant, glowing skin."}</p><div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2 font-medium"><span className="text-gray-400">Home</span><span>/</span><span className="text-brand-700 font-semibold">About Us</span></div></div><div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">{[{
            number: "15,000+",
            label: "Glowing Customers",
            icon: zx
          }, {
            number: "100%",
            label: "Organic Herbs & Oils",
            icon: Fs
          }, {
            number: "Weekly",
            label: "Fresh Small Batches",
            icon: $a
          }, {
            number: "4.9 ★",
            label: "Average Customer Rating",
            icon: Nt
          }].map((r, s) => {
            const l = r.icon;
            return <div key={s} className="bg-white/90 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-brand-100 shadow-sm text-center card-lift group hover:border-brand-300 transition-all"><div className="w-10 h-10 rounded-xl bg-brand-50 mx-auto mb-2 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all">{n.jsx(l, {
                  className: "w-5 h-5"
                })}</div><p className="font-serif text-xl sm:text-2xl font-bold text-[#2D1520]">{r.number}</p><p className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5">{r.label}</p></div>;
          })}</div></div></section><section className="py-14 sm:py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"><div className="lg:col-span-5 order-2 lg:order-1"><div className="relative mx-auto max-w-md"><div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-brand-50"><img src="/assets/products/body-scrubs/rosey-rose-banner.jpeg" alt="Scrubie-Hub Handcrafted Beauty" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" /><div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-brand-100 shadow-lg flex items-center gap-3"><div className="w-10 h-10 rounded-full overflow-hidden border border-brand-300 bg-white p-0.5 flex-shrink-0"><img src="/assets/logo/logo.png" alt="Logo" className="w-full h-full object-cover rounded-full" /></div><div><p className="font-serif text-xs sm:text-sm font-bold text-[#2D1520]">Handcrafted in Pakistan</p><p className="text-[11px] text-brand-600 font-medium">{"100% Female Founded & Owned"}</p></div></div></div><div className="absolute -bottom-6 -right-4 sm:-right-6 w-44 sm:w-52 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-brand-100 hidden sm:block"><div className="flex items-center gap-1.5 text-amber-400 mb-1">{[...Array(5)].map((r, s) => <Nt key={s} className="w-3.5 h-3.5 fill-current" />)}</div><p className="text-xs font-serif font-bold text-[#2D1520]">{'"Transformed my skin tone!"'}</p><p className="text-[10px] text-gray-500 mt-0.5">Over 1,200 verified 5-star reviews</p></div></div></div><div className="lg:col-span-7 order-1 lg:order-2 space-y-6"><div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider"><Qt className="w-3.5 h-3.5 text-brand-600" /><span>{"Our Heritage & Purpose"}</span></div><h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1520] tracking-tight leading-tight">{"Born From a Passion for "}<br /><span className="italic text-brand-600">Pure, Honest Skincare</span></h2><p className="text-gray-600 text-sm sm:text-base leading-relaxed">{"Welcome to "}<strong>SCRUBIE_HUB.PK</strong>. Our journey began with a simple yet uncompromising realization: modern women are constantly bombarded with skincare loaded with harsh chemical bleaches, parabens, and cheap fillers that damage the natural epidermal barrier over time.</p><p className="text-gray-600 text-sm sm:text-base leading-relaxed">{"As a female Pakistani entrepreneur passionate about natural holistic wellness, our founder set out to formulate something profoundly better: "}<strong>luxury organic body scrubs</strong>{" that combine age-old beauty rituals — from Moroccan Hammam secrets to royal Ayurvedic turmeric infusions — with modern dermatological care."}</p><blockquote className="border-l-4 border-brand-500 pl-4 py-2 bg-brand-50/50 rounded-r-xl italic text-sm text-[#4A2437] font-medium leading-relaxed">{`"We don't create products to mask your skin. We handcraft organic remedies that nourish, exfoliate, and reveal your skin's truest, healthiest, and most confident glow."`}</blockquote><div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"><button onClick={e} className="btn-luxury inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all"><span>Explore Our Catalog</span>{n.jsx(st, {
                  className: "w-4 h-4"
                })}</button><button onClick={t} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-brand-200 hover:bg-brand-50 text-brand-700 font-semibold text-sm rounded-xl transition-all"><span>Get in Touch</span></button></div></div></div></div></section><section className="py-14 sm:py-20 bg-[#FAF7F5] border-y border-[#F2EAE4]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center max-w-2xl mx-auto mb-12 space-y-3"><p className="text-xs font-bold uppercase tracking-widest text-brand-600">Why Scrubie-Hub Stands Apart</p><h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1520] tracking-tight">The Scrubie-Hub Standard</h2><p className="text-xs sm:text-sm text-gray-500">Every jar is handcrafted with high-grade active botanicals and absolute transparency.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{[{
            icon: Fs,
            title: "100% Organic Herbs",
            desc: "Zero parabens, zero phthalates, no toxic bleaches. Only food-grade cane sugars, cold-pressed seed oils, and botanical herbs.",
            badge: "Clean Beauty"
          }, {
            icon: $a,
            title: "Artisanal Small Batches",
            desc: "Never mass-produced in mega factories. Every scrub is freshly blended weekly to preserve botanical freshness and vitamin potency.",
            badge: "Fresh Crafted"
          }, {
            icon: Hn,
            title: "Tailored for Pakistan",
            desc: "Formulated specifically to target common local concerns: sun tan, stubborn elbow/knee pigmentation, and strawberry skin.",
            badge: "Proven Results"
          }, {
            icon: Nu,
            title: "Cruelty-Free & Ethical",
            desc: "100% cruelty-free, safe for sensitive skin types, and supporting women empowerment in Pakistan with every purchase.",
            badge: "Ethical Promise"
          }].map((r, s) => {
            const l = r.icon;
            return <div key={s} className="bg-white rounded-2xl p-6 sm:p-7 border border-[#F0E6E0] shadow-sm hover:shadow-card card-lift transition-all flex flex-col justify-between"><div><div className="flex items-center justify-between mb-4"><div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600">{n.jsx(l, {
                      className: "w-6 h-6"
                    })}</div><span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-100">{r.badge}</span></div><h3 className="font-serif text-lg font-bold text-[#2D1520] mb-2">{r.title}</h3><p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{r.desc}</p></div><div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-emerald-600 text-xs font-semibold">{n.jsx(el, {
                  className: "w-3.5 h-3.5"
                })}<span>Guaranteed Purity</span></div></div>;
          })}</div></div></section><section className="py-14 sm:py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center max-w-2xl mx-auto mb-12 space-y-3"><p className="text-xs font-bold uppercase tracking-widest text-brand-600">Nature's Most Potent Botanicals</p><h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1520] tracking-tight">The Ingredients Behind the Glow</h2><p className="text-xs sm:text-sm text-gray-500">We source only authentic, therapeutic-grade raw ingredients with proven skin benefits.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{[{
            name: "Moroccan Royal Blue Nila",
            role: "Hyperpigmentation & Brightening",
            desc: "Ancient Saharan secret known for fading stubborn darkness on knuckles, knees, elbows and underarms.",
            image: "/assets/products/body-scrubs/moroccan-nila-banner.jpeg",
            tag: "Royal Hammam"
          }, {
            name: "Wild Kasturi Haldi (Turmeric)",
            role: "Sun Tan Removal & Golden Glow",
            desc: "Non-staining aromatic turmeric loaded with curcumin to banish uneven dull skin without yellow stains.",
            image: "/assets/products/body-scrubs/turmeric-scrub-banner.jpeg",
            tag: "Ayurvedic Pure"
          }, {
            name: "Arabica Roasted Coffee Grounds",
            role: "Cellulite Smoothing & Firming",
            desc: "Rich in natural caffeine and antioxidants to stimulate blood flow, buff dead skin, and firm the skin.",
            image: "/assets/products/body-scrubs/coffee-scrub-podium.jpeg",
            tag: "Physical Buffing"
          }, {
            name: "Damask Rose & Sweet Almond",
            role: "Deep Hydration & Velvety Softness",
            desc: "Distilled pure rose extracts and cold-pressed botanical almond oils that lock in 48-hour moisture.",
            image: "/assets/products/body-scrubs/rosey-rose-satin.jpeg",
            tag: "Luxury Floral"
          }].map((r, s) => <div key={s} className="bg-[#FAF7F5] rounded-2xl overflow-hidden border border-brand-100 shadow-sm group hover:shadow-card transition-all flex flex-col"><div className="relative h-44 overflow-hidden bg-brand-100"><img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-brand-700 px-2.5 py-1 rounded-full shadow-sm">{r.tag}</div></div><div className="p-5 flex flex-col flex-grow justify-between space-y-2"><div><span className="text-[10px] uppercase font-bold text-brand-600 block">{r.role}</span><h4 className="font-serif text-base font-bold text-[#2D1520]">{r.name}</h4><p className="text-xs text-gray-600 mt-1 leading-relaxed">{r.desc}</p></div><div className="pt-3 border-t border-brand-200/60 flex items-center justify-between text-[11px] font-semibold text-brand-700"><span>100% Active Purity</span><span>✓ Tested</span></div></div></div>)}</div></div></section><section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF7F5] via-white to-[#FAF7F5] border-y border-[#F2EAE4]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center max-w-2xl mx-auto mb-12 space-y-3"><p className="text-xs font-bold uppercase tracking-widest text-brand-600">From Workshop to Your Doorstep</p><h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1520] tracking-tight">Our Artisanal Crafting Process</h2><p className="text-xs sm:text-sm text-gray-500">We uphold strict hygiene standards and meticulous care in every single jar we seal.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">{[{
            step: "01",
            title: "Organic Sourcing",
            desc: "We selectively procure pure herbs, unrefined cane sugars, and cold-pressed botanical oils from verified sources.",
            icon: Fs
          }, {
            step: "02",
            title: "Hygienic Small Batches",
            desc: "Every recipe is measured, mixed, and whipped by hand in sanitized small micro-batches for absolute consistency.",
            icon: Nx
          }, {
            step: "03",
            title: "Quality & Safety Check",
            desc: "Each batch undergoes texture, fragrance, and stability checks to ensure safe application on all skin types.",
            icon: Hn
          }, {
            step: "04",
            title: "Fresh Pack & Dispatch",
            desc: "Jars are tightly sealed, bubble-wrapped with love, and dispatched nationwide via fast tracked courier partners.",
            icon: Vr
          }].map((r, s) => {
            const l = r.icon;
            return <div key={s} className="bg-white rounded-2xl p-6 border border-brand-100 shadow-sm relative group hover:border-brand-400 transition-all card-lift"><div className="text-3xl font-serif font-black text-brand-200 group-hover:text-brand-400 transition-colors mb-2">{r.step}</div><div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-3">{n.jsx(l, {
                  className: "w-5 h-5"
                })}</div><h3 className="font-serif text-base font-bold text-[#2D1520] mb-1.5">{r.title}</h3><p className="text-xs text-gray-600 leading-relaxed">{r.desc}</p></div>;
          })}</div></div></section><section className="py-14 sm:py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#2D1520] via-[#3B1B2A] to-[#2D1520] text-white p-8 sm:p-14 shadow-2xl border border-brand-900"><div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" /><div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" /><div className="relative z-10 max-w-2xl space-y-5 text-center sm:text-left"><div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-pink-300 text-xs font-semibold uppercase tracking-wider">{n.jsx(ke, {
                className: "w-3.5 h-3.5"
              })}<span>Begin Your Skincare Ritual</span></div><h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">{"Ready to Experience the "}<br /><span className="italic text-pink-300">Natural Scrubie Glow?</span></h2><p className="text-sm sm:text-base text-gray-300 leading-relaxed">Join over 15,000 women across Pakistan who trust Scrubie-Hub for healthy, radiant, silky-soft skin. Fast nationwide delivery with Cash on Delivery available.</p><div className="pt-3 flex flex-col sm:flex-row items-center gap-4"><button onClick={e} className="btn-luxury w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"><span>Shop Handcrafted Scrubs</span>{n.jsx(st, {
                  className: "w-4 h-4"
                })}</button><button onClick={t} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all"><span>Have a Question? Chat With Us</span></button></div></div><div className="hidden lg:flex absolute right-12 bottom-8 top-8 items-center pointer-events-none"><div className="relative w-72 h-72"><img src="/assets/products/body-scrubs/coffee-scrub-podium.jpeg" alt="Coffee Scrub" className="w-44 h-44 object-cover rounded-2xl border-4 border-white/20 shadow-2xl absolute top-0 right-0 transform rotate-6" /><img src="/assets/products/body-scrubs/moroccan-nila-banner.jpeg" alt="Moroccan Nila Scrub" className="w-44 h-44 object-cover rounded-2xl border-4 border-white/20 shadow-2xl absolute bottom-0 left-0 transform -rotate-6 z-10" /></div></div></div></div></section></div>,
  dh = ({
    onExploreShop: e
  }) => {
    const [t, r] = F.useState({
        name: "",
        phone: "",
        email: "",
        inquiryType: "Product Recommendation",
        message: ""
      }),
      [s, l] = F.useState(false),
      [a, i] = F.useState(0),
      o = () => {
        let g = `Hi ${le.brandName} Support!`;
        t.name && (g += ` My name is ${t.name}.`), t.inquiryType && (g += ` I am inquiring about: ${t.inquiryType}.`), t.message && (g += `

Message: ${t.message}`), $n(g);
      },
      c = g => {
        if (g.preventDefault(), !t.name || !t.phone || !t.message) {
          alert("Please fill out your Name, Phone/WhatsApp number, and Message.");
          return;
        }
        l(true);
      },
      u = [{
        q: "How long does delivery take across Pakistan?",
        a: "We deliver nationwide within 2 to 4 business days. Major cities like Lahore, Karachi, Islamabad, and Rawalpindi typically receive their parcels within 48 hours via fast tracked courier partners."
      }, {
        q: "Do you offer Cash on Delivery (COD)?",
        a: "Yes! Cash on Delivery (COD) is available in all cities, towns, and postal areas across Pakistan. You only pay when your parcel arrives safely at your doorstep."
      }, {
        q: "Are your handcrafted scrubs safe for sensitive skin?",
        a: "Absolutely. All our body scrubs are 100% natural, formulated without artificial fragrance oils, harsh sulfates, parabens, or chemical bleaches. If you have extremely hypersensitive skin, we always recommend doing a quick patch test on your inner arm."
      }, {
        q: "How often should I use the body scrubs for best results?",
        a: "For best results, use your Scrubie-Hub scrub 2 to 3 times weekly on damp skin during bath or shower. Gently massage in upward circular motions for 60 to 90 seconds, then rinse with warm water."
      }, {
        q: "Can I order custom gift boxes or bulk/salon orders?",
        a: "Yes! We frequently prepare custom bridal gift hampers, personalized sets, and salon wholesale packages. Just message us directly on WhatsApp for custom bulk pricing."
      }];
    return <div className="bg-[#FAF7F5] min-h-screen"><section className="relative overflow-hidden bg-gradient-to-b from-[#FBF0F2] via-[#FDF5F7] to-[#FAF7F5] py-14 sm:py-20 border-b border-brand-200/50"><div className="absolute top-0 right-1/4 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" /><div className="absolute bottom-0 left-1/4 w-80 h-80 bg-rose-100/50 rounded-full blur-3xl pointer-events-none" /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-3xl mx-auto text-center space-y-4"><div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-brand-200 text-brand-700 text-xs sm:text-sm font-semibold shadow-sm animate-badge-pop">{n.jsx(ke, {
                className: "w-4 h-4 text-brand-500 animate-sparkle"
              })}<span>We're Here For You</span></div><h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2D1520] leading-[1.15]">{"Get in Touch with "}<br /><span className="italic gradient-text-rose">{le.brandName}</span></h1><p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">Have a question about which body scrub suits your skin, need help tracking your parcel, or just want to say hello? Our team is always delighted to assist you.</p><div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2 font-medium"><span className="text-gray-400">Home</span><span>/</span><span className="text-brand-700 font-semibold">{"Contact & Support"}</span></div></div></div></section><section className="py-12 sm:py-16"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"><div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-sm hover:shadow-card card-lift transition-all relative group flex flex-col justify-between"><div><div className="flex items-center justify-between mb-4"><div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600"><Mr className="w-6 h-6" /></div><span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />Online</span></div><h3 className="font-serif text-lg font-bold text-[#2D1520] mb-1">WhatsApp Support</h3><p className="text-xs text-gray-500 mb-3">{"Fastest response for instant advice & order updates."}</p><p className="font-mono font-bold text-gray-900 text-sm">{le.whatsappDisplayNumber}</p></div><div className="mt-5 pt-4 border-t border-gray-100"><button onClick={o} className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all">{n.jsx(tl, {
                    className: "w-3.5 h-3.5"
                  })}<span>Start WhatsApp Chat</span></button></div></div><div className="bg-white rounded-2xl p-6 border border-brand-100 shadow-sm hover:shadow-card card-lift transition-all flex flex-col justify-between"><div><div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 mb-4">{n.jsx(tc, {
                    className: "w-6 h-6"
                  })}</div><h3 className="font-serif text-lg font-bold text-[#2D1520] mb-1">Email Support</h3><p className="text-xs text-gray-500 mb-3">For business, collaborations, and formal inquiries.</p><p className="font-mono font-semibold text-brand-700 text-xs sm:text-sm truncate">{le.email}</p></div><div className="mt-5 pt-4 border-t border-gray-100"><a href={`mailto:${le.email}?subject=Customer Inquiry - Scrubie-Hub`} className="w-full py-2.5 bg-brand-50 hover:bg-brand-100 text-brand-700 font-semibold text-xs rounded-xl border border-brand-200 flex items-center justify-center gap-2 transition-all">{n.jsx(tc, {
                    className: "w-3.5 h-3.5"
                  })}<span>Send an Email</span></a></div></div><div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-card card-lift transition-all flex flex-col justify-between"><div><div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 mb-4">{n.jsx($a, {
                    className: "w-6 h-6"
                  })}</div><h3 className="font-serif text-lg font-bold text-[#2D1520] mb-1">Operating Hours</h3><p className="text-xs text-gray-500 mb-2">Our customer care desk is active daily:</p><div className="space-y-1 text-xs"><p className="font-semibold text-gray-800">{"Mon – Sat: "}<span className="font-normal text-gray-600">10:00 AM – 8:00 PM</span></p><p className="font-semibold text-gray-800">{"Sunday: "}<span className="font-normal text-gray-600">Limited WhatsApp Care</span></p></div></div><div className="mt-5 pt-4 border-t border-gray-100 text-[11px] text-gray-400">Timezone: Pakistan Standard Time (PKT)</div></div><div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-card card-lift transition-all flex flex-col justify-between"><div><div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 mb-4"><Cu className="w-6 h-6" /></div><h3 className="font-serif text-lg font-bold text-[#2D1520] mb-1">Dispatch Center</h3><p className="text-xs text-gray-500 mb-2">{"Artisanal Workshop & Logistics Hub:"}</p><p className="font-semibold text-gray-800 text-sm">{le.location}</p><p className="text-xs text-gray-500 mt-1">Dispatches to all 200+ cities across Pakistan.</p></div><div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs text-brand-700 font-semibold"><Vr className="w-3.5 h-3.5" /><span>Tracked Courier Delivery</span></div></div></div></div></section><section className="py-12 sm:py-16 bg-white border-y border-[#F2EAE4]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"><div className="lg:col-span-7 bg-[#FAF7F5] rounded-3xl p-6 sm:p-10 border border-brand-200/60 shadow-sm"><div className="space-y-2 mb-6"><span className="text-xs font-bold uppercase tracking-wider text-brand-600">Send a Message</span><h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D1520]">How Can We Help You Today?</h2><p className="text-xs sm:text-sm text-gray-500">Fill out the details below and choose whether to send via WhatsApp or submit online.</p></div>{s ? <div className="bg-white rounded-2xl p-8 border border-emerald-200 text-center space-y-4 animate-in fade-in"><div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">{n.jsx(el, {
                    className: "w-8 h-8"
                  })}</div><h3 className="font-serif text-xl font-bold text-[#2D1520]">{"Thank You, "}{t.name}!</h3><p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">{"Your inquiry has been received with reference "}<strong>#SH-{Math.floor(1e5 + Math.random() * 9e5)}</strong>. Our skincare advisor will reach out to your WhatsApp/phone shortly.</p><div className="pt-2 flex flex-col sm:flex-row justify-center gap-3"><button onClick={o} className="py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm flex items-center justify-center gap-2"><Mr className="w-4 h-4" /><span>Chat Immediately on WhatsApp</span></button><button onClick={() => {
                    l(false), r({
                      name: "",
                      phone: "",
                      email: "",
                      inquiryType: "Product Recommendation",
                      message: ""
                    });
                  }} className="py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl">Submit Another Message</button></div></div> : <form onSubmit={c} className="space-y-4"><div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name *</label><input type="text" required={true} value={t.name} onChange={g => r(b => ({
                      ...b,
                      name: g.target.value
                    }))} placeholder="e.g. Ayesha Khan" className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 shadow-xs" /></div><div><label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp / Phone Number *</label><input type="tel" required={true} value={t.phone} onChange={g => r(b => ({
                      ...b,
                      phone: g.target.value
                    }))} placeholder="0300 1234567" className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 shadow-xs" /></div></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label className="block text-xs font-semibold text-gray-700 mb-1">Email Address (Optional)</label><input type="email" value={t.email} onChange={g => r(b => ({
                      ...b,
                      email: g.target.value
                    }))} placeholder="ayesha@example.com" className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 shadow-xs" /></div><div><label className="block text-xs font-semibold text-gray-700 mb-1">Inquiry Topic</label><select value={t.inquiryType} onChange={g => r(b => ({
                      ...b,
                      inquiryType: g.target.value
                    }))} className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 shadow-xs"><option value="Product Recommendation">Product Recommendation</option><option value={"Order Tracking & Status"}>{"Order Tracking & Status"}</option><option value="Damaged / Exchange Parcel">Damaged / Exchange Parcel</option><option value="Wholesale / Bulk Inquiry">Wholesale / Bulk Inquiry</option><option value="Other Feedback">Other Feedback</option></select></div></div><div><label className="block text-xs font-semibold text-gray-700 mb-1">Your Message *</label><textarea rows={4} required={true} value={t.message} onChange={g => r(b => ({
                    ...b,
                    message: g.target.value
                  }))} placeholder="Tell us about your skin concern, order query, or question..." className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 shadow-xs resize-none" /></div><div className="pt-2 flex flex-col sm:flex-row gap-3"><button type="submit" className="flex-1 py-3.5 px-5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all">{n.jsx(tl, {
                      className: "w-4 h-4"
                    })}<span>Submit Message</span></button><button type="button" onClick={o} className="py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"><Mr className="w-4 h-4" /><span>Send via WhatsApp</span></button></div></form>}</div><div className="lg:col-span-5 space-y-6"><div className="bg-gradient-to-br from-[#FAF0F2] to-white rounded-3xl p-6 sm:p-8 border border-brand-200 shadow-sm relative overflow-hidden"><div className="w-12 h-12 rounded-full overflow-hidden border border-brand-300 bg-white p-0.5 mb-4 shadow-sm"><img src="/assets/logo/logo.png" alt="Logo" className="w-full h-full object-cover rounded-full" /></div><h3 className="font-serif text-xl font-bold text-[#2D1520] mb-2">Our Promise to You</h3><p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Every order is handcrafted with pure organic care. If you ever have questions regarding our ingredients or need customized beauty guidance, we are always just a WhatsApp message away.</p><div className="mt-4 pt-4 border-t border-brand-200/60 flex items-center gap-2 text-brand-700 text-xs font-bold"><Qt className="w-4 h-4 text-brand-600 fill-current" /><span>Handcrafted with love in Pakistan</span></div></div><div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4"><h4 className="font-serif text-base font-bold text-[#2D1520]">Order With Complete Confidence</h4>{[{
                  title: "Tracked Courier Nationwide",
                  desc: "SMS tracking link provided upon dispatch."
                }, {
                  title: "Cash on Delivery (COD)",
                  desc: "Pay securely only when parcel arrives at your door."
                }, {
                  title: "Happiness Guarantee",
                  desc: "Dedicated customer care for swaps or parcel assistance."
                }].map((g, b) => <div key={b} className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">{n.jsx(el, {
                      className: "w-3.5 h-3.5"
                    })}</div><div><p className="text-xs font-bold text-gray-900">{g.title}</p><p className="text-[11px] text-gray-500 mt-0.5">{g.desc}</p></div></div>)}</div></div></div></div></section><section className="py-14 sm:py-20 bg-[#FAF7F5]"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center space-y-3 mb-10"><div className="inline-flex items-center gap-1.5 text-brand-600 text-xs font-bold uppercase tracking-wider">{n.jsx(vx, {
                className: "w-4 h-4"
              })}<span>Quick Answers</span></div><h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1520]">Frequently Asked Questions</h2><p className="text-xs sm:text-sm text-gray-500">Find instant answers to common questions about our products and deliveries.</p></div><div className="space-y-3">{u.map((g, b) => {
              const y = a === b;
              return <div key={b} className="bg-white rounded-2xl border border-brand-100 shadow-sm overflow-hidden transition-all"><button type="button" onClick={() => i(y ? null : b)} className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-brand-50/30 transition-colors"><span className="font-serif text-base sm:text-lg font-bold text-[#2D1520]">{g.q}</span><span className="p-1 rounded-full text-brand-600 bg-brand-50 flex-shrink-0">{y ? n.jsx(bx, {
                      className: "w-4 h-4"
                    }) : n.jsx(px, {
                      className: "w-4 h-4"
                    })}</span></button>{y && <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 animate-in fade-in">{g.a}</div>}</div>;
            })}</div></div></section><section className="py-12 bg-white border-t border-[#F2EAE4]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"><h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D1520]">Ready to Find Your Perfect Scrub?</h3><p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">Explore our curated 100% organic body scrubs handcrafted for a radiant, luminous glow.</p><div className="pt-2"><button onClick={e} className="btn-luxury inline-flex items-center gap-2.5 px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl shadow-md transition-all"><span>Explore Collection</span>{n.jsx(st, {
                className: "w-4 h-4"
              })}</button></div></div></section></div>;
  },
  uh = ({
    onShopClick: e
  }) => {
    const [t, r] = F.useState(50),
      [s, l] = F.useState(false),
      a = F.useRef(null),
      i = F.useCallback(g => {
        if (!a.current) return;
        const b = a.current.getBoundingClientRect(),
          y = g - b.left,
          j = Math.max(5, Math.min(95, y / b.width * 100));
        r(j);
      }, []),
      o = F.useCallback(g => {
        s && i(g.touches[0].clientX);
      }, [s, i]),
      c = F.useCallback(g => {
        s && i(g.clientX);
      }, [s, i]),
      u = F.useCallback(() => {
        l(false);
      }, []);
    return F.useEffect(() => (s && (window.addEventListener("mousemove", c), window.addEventListener("mouseup", u), window.addEventListener("touchmove", o), window.addEventListener("touchend", u)), () => {
      window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", u), window.removeEventListener("touchmove", o), window.removeEventListener("touchend", u);
    }), [s, c, o, u]), <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF7F5] via-[#FFFDFB] to-[#FAF7F5] border-y border-[#F0E6DF] overflow-hidden"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center max-w-3xl mx-auto mb-12"><div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100/70 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-3">{n.jsx(ke, {
              className: "w-3.5 h-3.5 text-brand-600"
            })}<span>Visible Skin Transformation</span></div><h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1520] tracking-tight">See The Scrubie Glow Difference</h2><p className="mt-3 text-sm sm:text-base text-gray-600">Drag the interactive slider below to witness how our handcrafted organic scrubs buff away dullness and reveal silky, luminous skin in just one ritual.</p></div><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto"><div className="lg:col-span-7"><div ref={a} onMouseDown={() => l(true)} onTouchStart={() => l(true)} className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border-4 border-white cursor-ew-resize select-none bg-stone-900"><img src="/assets/before-after/after-face.jpg" alt="After: Radiant Dewy Glow" draggable={false} className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" /><div className="absolute bottom-4 right-4 z-10 bg-black/65 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-md flex items-center gap-1.5">{n.jsx(ke, {
                  className: "w-3.5 h-3.5 text-amber-300"
                })}<span>{"AFTER: Silky Dewy Glow & Hydrated"}</span></div><img src="/assets/before-after/before-face.jpg" alt={"Before: Dull Complexion & Dry Texture"} draggable={false} className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" style={{
                clipPath: `inset(0 ${100 - t}% 0 0)`
              }} /><div className="absolute bottom-4 left-4 z-10 bg-black/65 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-md whitespace-nowrap flex items-center gap-1.5 transition-opacity duration-200" style={{
                opacity: t > 20 ? 1 : 0
              }}><span>{"❄️ BEFORE: Dull & Dry Texture"}</span></div><div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] pointer-events-none z-20" style={{
                left: `${t}%`
              }}><div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-700 text-white border-2 border-white shadow-xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"><Dx className="w-5 h-5 animate-pulse" /></div></div><div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-3.5 py-1 rounded-full border border-white/15 pointer-events-none shadow-sm flex items-center gap-1"><span>↔ Drag to compare glow</span></div></div></div><div className="lg:col-span-5 space-y-6"><div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#F2EAE4] shadow-sm space-y-5"><h3 className="font-serif text-xl font-bold text-[#2D1520]">Proven Real Customer Results</h3><p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Based on a 4-week consumer perception study with 140+ Pakistani women using Scrubie-Hub body scrubs twice weekly:</p><div className="space-y-4 pt-1"><div className="flex items-start gap-3.5"><div className="w-8 h-8 rounded-full bg-pink-100 text-brand-700 flex items-center justify-center shrink-0 font-bold text-xs">97%</div><div><p className="text-xs sm:text-sm font-semibold text-gray-800">Reported Instant Softness</p><p className="text-xs text-gray-500">Felt rough dryness and dead skin vanish after the very first shower.</p></div></div><div className="flex items-start gap-3.5"><div className="w-8 h-8 rounded-full bg-pink-100 text-brand-700 flex items-center justify-center shrink-0 font-bold text-xs">92%</div><div><p className="text-xs sm:text-sm font-semibold text-gray-800">Visible Reduction in Strawberry Legs</p><p className="text-xs text-gray-500">Noticed visibly clearer pores and smoother skin along knees and shins.</p></div></div><div className="flex items-start gap-3.5"><div className="w-8 h-8 rounded-full bg-pink-100 text-brand-700 flex items-center justify-center shrink-0 font-bold text-xs">94%</div><div><p className="text-xs sm:text-sm font-semibold text-gray-800">Deep 24-Hour Hydration Lock</p><p className="text-xs text-gray-500">Natural botanical oils sealed in moisture without any greasy residue.</p></div></div></div><div className="pt-2"><button onClick={e} className="w-full py-3.5 px-6 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"><span>Experience The Transformation</span>{n.jsx(st, {
                    className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                  })}</button></div></div></div></div></div></section>;
  };
function App() {
  const [e, t] = F.useState("home"),
    [r, s] = F.useState("all"),
    [l, a] = F.useState(null),
    [i, o] = F.useState(false),
    [c, u] = F.useState(false),
    [g, b] = F.useState(false),
    [y, j] = F.useState(null),
    [C, S] = F.useState(false),
    [P, f] = F.useState(null),
    [d, h] = F.useState(() => fn()),
    [w, k] = F.useState(() => Cr());
  F.useEffect(() => {
    h(fn()), k(Cr());
    const N = ge => {
        const ue = ge;
        ue.detail && Array.isArray(ue.detail) ? h(ue.detail) : h(fn());
      },
      Q = ge => {
        const ue = ge;
        ue.detail && Array.isArray(ue.detail) ? k(ue.detail) : k(Cr());
      },
      de = ge => {
        const ue = ge;
        ue.detail && (f(ue.detail), setTimeout(() => f(null), 3200));
      };
    return window.addEventListener(Wa, N), window.addEventListener(Un, Q), window.addEventListener("scrubie_toast", de), () => {
      window.removeEventListener(Wa, N), window.removeEventListener(Un, Q), window.removeEventListener("scrubie_toast", de);
    };
  }, [C]), F.useEffect(() => {
    const N = () => {
      const Q = window.location.pathname === "/admin" || window.location.pathname === "/admin/",
        de = window.location.hash === "#admin";
      (Q || de) && S(true);
    };
    return N(), window.addEventListener("popstate", N), window.addEventListener("hashchange", N), () => {
      window.removeEventListener("popstate", N), window.removeEventListener("hashchange", N);
    };
  }, []);
  const L = d.filter(N => N.isBestSeller).slice(0, 4),
    O = N => {
      s(N), t("shop"), window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    _ = () => {
      s("all"), t("shop"), window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    G = N => {
      a(N);
    };
  return C ? n.jsx(oh, {
    categories: w,
    onCategoriesChange: N => k(N),
    onClose: () => {
      S(false), h(fn()), k(Cr()), window.location.pathname.startsWith("/admin") && window.history.replaceState(null, "", "/"), window.location.hash === "#admin" && window.history.replaceState(null, "", window.location.pathname + window.location.search);
    },
    onProductsChange: N => h(N)
  }) : <div className="min-h-screen flex flex-col bg-[#FAF7F5] selection:bg-brand-200 selection:text-brand-900 font-sans">{n.jsx(dx, {})}<Ux currentView={e} setCurrentView={t} onOpenSearch={() => u(true)} onOpenWishlist={() => b(true)} /><main className="flex-grow">{e === "home" ? <div><Wx onShopClick={_} /><Vx /><Qx categories={w} products={d} onSelectCategory={O} /><Gx onExplore={_} /><Kx products={L} onOpenQuickView={G} title="Best Sellers" subtitle="Most loved by our customers" showViewAll={true} onViewAll={_} />{n.jsx(uh, {
          onShopClick: _
        })}{n.jsx(qx, {})}<Zx /><section className="py-12 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#F7E7EB] via-[#FCEFF2] to-[#FAF1ED] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-200/50 shadow-soft"><div className="space-y-3 text-center md:text-left"><h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1520]">Healthy Skin, Happy You</h3><p className="text-gray-600 text-sm sm:text-base max-w-md">Because you deserve the best. Handcrafted organic skincare delivered straight to your doorstep anywhere in Pakistan.</p><div className="pt-2"><button onClick={_} className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm rounded-md shadow-md transition-all"><span>Shop Now</span>{n.jsx(st, {
                      className: "w-4 h-4"
                    })}</button></div></div><div className="flex -space-x-4 overflow-hidden py-2"><img src="/assets/products/body-scrubs/rosey-rose-satin.jpeg" alt="Rosey Rose" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-lg" /><img src="/assets/products/body-scrubs/coffee-scrub-podium.jpeg" alt="Coffee Scrub" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-lg z-10" /><img src="/assets/products/body-scrubs/turmeric-scrub-podium.jpeg" alt="Turmeric Scrub" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-lg" /></div></div></div></section></div> : e === "shop" ? <Yx products={d} categories={w} onOpenQuickView={G} selectedCategory={r} setSelectedCategory={s} onBackToHome={() => {
        t("home"), window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }} /> : e === "about" ? n.jsx(ch, {
        onExploreShop: _,
        onContactClick: () => {
          t("contact"), window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      }) : n.jsx(dh, {
        onExploreShop: _
      })}</main><Xx onNavClick={N => {
      t(N), window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }} onOpenAbout={() => {
      t("about"), window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }} onOpenContact={() => {
      t("contact"), window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }} onOpenPolicy={N => j(N)} />{n.jsx(eh, {
      onOpenCheckout: () => o(true),
      onExploreShop: _
    })}{n.jsx(rh, {
      isOpen: i,
      onClose: () => o(false)
    })}<Jx product={l} onClose={() => a(null)} onOpenQuickView={G} allProducts={d} />{n.jsx(sh, {
      isOpen: c,
      onClose: () => u(false),
      products: d,
      onSelectProduct: G
    })}{n.jsx(lh, {
      isOpen: g,
      onClose: () => b(false),
      products: d,
      onOpenQuickView: G
    })}{n.jsx(ah, {
      policyType: y,
      onClose: () => j(null)
    })}{n.jsx(nh, {})}{P && <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#2D1520] text-white px-5 py-3 rounded-full shadow-2xl border border-pink-400/40 flex items-center gap-2.5 animate-in slide-in-from-bottom-5 duration-200">{n.jsx(ke, {
        className: "w-4 h-4 text-pink-400 shrink-0 animate-pulse"
      })}<span className="text-xs sm:text-sm font-semibold">{P}</span></div>}</div>;
}

export { App, CartProvider, WishlistProvider };
export default App;
