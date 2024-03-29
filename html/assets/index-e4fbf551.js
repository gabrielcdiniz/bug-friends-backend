var Tx = Object.defineProperty;
var Ex = (t, n, r) =>
  n in t
    ? Tx(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (t[n] = r);
var Nr = (t, n, r) => (Ex(t, typeof n != 'symbol' ? n + '' : n, r), r);
(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) o(l);
  new MutationObserver((l) => {
    for (const u of l)
      if (u.type === 'childList')
        for (const f of u.addedNodes)
          f.tagName === 'LINK' && f.rel === 'modulepreload' && o(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(l) {
    const u = {};
    return (
      l.integrity && (u.integrity = l.integrity),
      l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (u.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (u.credentials = 'omit')
        : (u.credentials = 'same-origin'),
      u
    );
  }
  function o(l) {
    if (l.ep) return;
    l.ep = !0;
    const u = r(l);
    fetch(l.href, u);
  }
})();
function Gf(t, n) {
  const r = Object.create(null),
    o = t.split(',');
  for (let l = 0; l < o.length; l++) r[o[l]] = !0;
  return n ? (l) => !!r[l.toLowerCase()] : (l) => !!r[l];
}
function Cn(t) {
  if (Bt(t)) {
    const n = {};
    for (let r = 0; r < t.length; r++) {
      const o = t[r],
        l = ze(o) ? Nx(o) : Cn(o);
      if (l) for (const u in l) n[u] = l[u];
    }
    return n;
  } else {
    if (ze(t)) return t;
    if (_e(t)) return t;
  }
}
const Lx = /;(?![^(]*\))/g,
  Ax = /:([^]+)/,
  Mx = /\/\*.*?\*\//gs;
function Nx(t) {
  const n = {};
  return (
    t
      .replace(Mx, '')
      .split(Lx)
      .forEach((r) => {
        if (r) {
          const o = r.split(Ax);
          o.length > 1 && (n[o[0].trim()] = o[1].trim());
        }
      }),
    n
  );
}
function ve(t) {
  let n = '';
  if (ze(t)) n = t;
  else if (Bt(t))
    for (let r = 0; r < t.length; r++) {
      const o = ve(t[r]);
      o && (n += o + ' ');
    }
  else if (_e(t)) for (const r in t) t[r] && (n += r + ' ');
  return n.trim();
}
const Px =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Ox = Gf(Px);
function om(t) {
  return !!t || t === '';
}
const Jt = (t) =>
    ze(t)
      ? t
      : t == null
      ? ''
      : Bt(t) || (_e(t) && (t.toString === cm || !Wt(t.toString)))
      ? JSON.stringify(t, sm, 2)
      : String(t),
  sm = (t, n) =>
    n && n.__v_isRef
      ? sm(t, n.value)
      : Io(n)
      ? {
          [`Map(${n.size})`]: [...n.entries()].reduce(
            (r, [o, l]) => ((r[`${o} =>`] = l), r),
            {},
          ),
        }
      : am(n)
      ? { [`Set(${n.size})`]: [...n.values()] }
      : _e(n) && !Bt(n) && !um(n)
      ? String(n)
      : n,
  we = {},
  Fo = [],
  Qn = () => {},
  $x = () => !1,
  Dx = /^on[^a-z]/,
  fc = (t) => Dx.test(t),
  Vf = (t) => t.startsWith('onUpdate:'),
  Ze = Object.assign,
  Kf = (t, n) => {
    const r = t.indexOf(n);
    r > -1 && t.splice(r, 1);
  },
  Rx = Object.prototype.hasOwnProperty,
  oe = (t, n) => Rx.call(t, n),
  Bt = Array.isArray,
  Io = (t) => hc(t) === '[object Map]',
  am = (t) => hc(t) === '[object Set]',
  Wt = (t) => typeof t == 'function',
  ze = (t) => typeof t == 'string',
  Xf = (t) => typeof t == 'symbol',
  _e = (t) => t !== null && typeof t == 'object',
  lm = (t) => _e(t) && Wt(t.then) && Wt(t.catch),
  cm = Object.prototype.toString,
  hc = (t) => cm.call(t),
  zx = (t) => hc(t).slice(8, -1),
  um = (t) => hc(t) === '[object Object]',
  Yf = (t) =>
    ze(t) && t !== 'NaN' && t[0] !== '-' && '' + parseInt(t, 10) === t,
  Ll = Gf(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  dc = (t) => {
    const n = Object.create(null);
    return (r) => n[r] || (n[r] = t(r));
  },
  Fx = /-(\w)/g,
  mr = dc((t) => t.replace(Fx, (n, r) => (r ? r.toUpperCase() : ''))),
  Ix = /\B([A-Z])/g,
  so = dc((t) => t.replace(Ix, '-$1').toLowerCase()),
  pc = dc((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  $u = dc((t) => (t ? `on${pc(t)}` : '')),
  ia = (t, n) => !Object.is(t, n),
  Al = (t, n) => {
    for (let r = 0; r < t.length; r++) t[r](n);
  },
  ql = (t, n, r) => {
    Object.defineProperty(t, n, { configurable: !0, enumerable: !1, value: r });
  },
  nf = (t) => {
    const n = parseFloat(t);
    return isNaN(n) ? t : n;
  },
  fm = (t) => {
    const n = ze(t) ? Number(t) : NaN;
    return isNaN(n) ? t : n;
  };
let Up;
const qx = () =>
  Up ||
  (Up =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {});
let Pn;
class Hx {
  constructor(n = !1) {
    (this.detached = n),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Pn),
      !n && Pn && (this.index = (Pn.scopes || (Pn.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(n) {
    if (this._active) {
      const r = Pn;
      try {
        return (Pn = this), n();
      } finally {
        Pn = r;
      }
    }
  }
  on() {
    Pn = this;
  }
  off() {
    Pn = this.parent;
  }
  stop(n) {
    if (this._active) {
      let r, o;
      for (r = 0, o = this.effects.length; r < o; r++) this.effects[r].stop();
      for (r = 0, o = this.cleanups.length; r < o; r++) this.cleanups[r]();
      if (this.scopes)
        for (r = 0, o = this.scopes.length; r < o; r++) this.scopes[r].stop(!0);
      if (!this.detached && this.parent && !n) {
        const l = this.parent.scopes.pop();
        l &&
          l !== this &&
          ((this.parent.scopes[this.index] = l), (l.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Bx(t, n = Pn) {
  n && n.active && n.effects.push(t);
}
function hm() {
  return Pn;
}
function Wx(t) {
  Pn && Pn.cleanups.push(t);
}
const Zf = (t) => {
    const n = new Set(t);
    return (n.w = 0), (n.n = 0), n;
  },
  dm = (t) => (t.w & Si) > 0,
  pm = (t) => (t.n & Si) > 0,
  Ux = ({ deps: t }) => {
    if (t.length) for (let n = 0; n < t.length; n++) t[n].w |= Si;
  },
  jx = (t) => {
    const { deps: n } = t;
    if (n.length) {
      let r = 0;
      for (let o = 0; o < n.length; o++) {
        const l = n[o];
        dm(l) && !pm(l) ? l.delete(t) : (n[r++] = l),
          (l.w &= ~Si),
          (l.n &= ~Si);
      }
      n.length = r;
    }
  },
  Hl = new WeakMap();
let Ks = 0,
  Si = 1;
const rf = 30;
let Yn;
const Zi = Symbol(''),
  of = Symbol('');
class Jf {
  constructor(n, r = null, o) {
    (this.fn = n),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Bx(this, o);
  }
  run() {
    if (!this.active) return this.fn();
    let n = Yn,
      r = wi;
    for (; n; ) {
      if (n === this) return;
      n = n.parent;
    }
    try {
      return (
        (this.parent = Yn),
        (Yn = this),
        (wi = !0),
        (Si = 1 << ++Ks),
        Ks <= rf ? Ux(this) : jp(this),
        this.fn()
      );
    } finally {
      Ks <= rf && jx(this),
        (Si = 1 << --Ks),
        (Yn = this.parent),
        (wi = r),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Yn === this
      ? (this.deferStop = !0)
      : this.active &&
        (jp(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function jp(t) {
  const { deps: n } = t;
  if (n.length) {
    for (let r = 0; r < n.length; r++) n[r].delete(t);
    n.length = 0;
  }
}
let wi = !0;
const gm = [];
function os() {
  gm.push(wi), (wi = !1);
}
function ss() {
  const t = gm.pop();
  wi = t === void 0 ? !0 : t;
}
function Ln(t, n, r) {
  if (wi && Yn) {
    let o = Hl.get(t);
    o || Hl.set(t, (o = new Map()));
    let l = o.get(r);
    l || o.set(r, (l = Zf())), vm(l);
  }
}
function vm(t, n) {
  let r = !1;
  Ks <= rf ? pm(t) || ((t.n |= Si), (r = !dm(t))) : (r = !t.has(Yn)),
    r && (t.add(Yn), Yn.deps.push(t));
}
function qr(t, n, r, o, l, u) {
  const f = Hl.get(t);
  if (!f) return;
  let h = [];
  if (n === 'clear') h = [...f.values()];
  else if (r === 'length' && Bt(t)) {
    const d = Number(o);
    f.forEach((g, v) => {
      (v === 'length' || v >= d) && h.push(g);
    });
  } else
    switch ((r !== void 0 && h.push(f.get(r)), n)) {
      case 'add':
        Bt(t)
          ? Yf(r) && h.push(f.get('length'))
          : (h.push(f.get(Zi)), Io(t) && h.push(f.get(of)));
        break;
      case 'delete':
        Bt(t) || (h.push(f.get(Zi)), Io(t) && h.push(f.get(of)));
        break;
      case 'set':
        Io(t) && h.push(f.get(Zi));
        break;
    }
  if (h.length === 1) h[0] && sf(h[0]);
  else {
    const d = [];
    for (const g of h) g && d.push(...g);
    sf(Zf(d));
  }
}
function sf(t, n) {
  const r = Bt(t) ? t : [...t];
  for (const o of r) o.computed && Gp(o);
  for (const o of r) o.computed || Gp(o);
}
function Gp(t, n) {
  (t !== Yn || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
function Gx(t, n) {
  var r;
  return (r = Hl.get(t)) === null || r === void 0 ? void 0 : r.get(n);
}
const Vx = Gf('__proto__,__v_isRef,__isVue'),
  mm = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== 'arguments' && t !== 'caller')
      .map((t) => Symbol[t])
      .filter(Xf),
  ),
  Kx = Qf(),
  Xx = Qf(!1, !0),
  Yx = Qf(!0),
  Vp = Zx();
function Zx() {
  const t = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((n) => {
      t[n] = function (...r) {
        const o = se(this);
        for (let u = 0, f = this.length; u < f; u++) Ln(o, 'get', u + '');
        const l = o[n](...r);
        return l === -1 || l === !1 ? o[n](...r.map(se)) : l;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((n) => {
      t[n] = function (...r) {
        os();
        const o = se(this)[n].apply(this, r);
        return ss(), o;
      };
    }),
    t
  );
}
function Jx(t) {
  const n = se(this);
  return Ln(n, 'has', t), n.hasOwnProperty(t);
}
function Qf(t = !1, n = !1) {
  return function (o, l, u) {
    if (l === '__v_isReactive') return !t;
    if (l === '__v_isReadonly') return t;
    if (l === '__v_isShallow') return n;
    if (l === '__v_raw' && u === (t ? (n ? p1 : _m) : n ? xm : wm).get(o))
      return o;
    const f = Bt(o);
    if (!t) {
      if (f && oe(Vp, l)) return Reflect.get(Vp, l, u);
      if (l === 'hasOwnProperty') return Jx;
    }
    const h = Reflect.get(o, l, u);
    return (Xf(l) ? mm.has(l) : Vx(l)) || (t || Ln(o, 'get', l), n)
      ? h
      : Ae(h)
      ? f && Yf(l)
        ? h
        : h.value
      : _e(h)
      ? t
        ? vc(h)
        : Dn(h)
      : h;
  };
}
const Qx = ym(),
  t1 = ym(!0);
function ym(t = !1) {
  return function (r, o, l, u) {
    let f = r[o];
    if (Ko(f) && Ae(f) && !Ae(l)) return !1;
    if (
      !t &&
      (!Bl(l) && !Ko(l) && ((f = se(f)), (l = se(l))),
      !Bt(r) && Ae(f) && !Ae(l))
    )
      return (f.value = l), !0;
    const h = Bt(r) && Yf(o) ? Number(o) < r.length : oe(r, o),
      d = Reflect.set(r, o, l, u);
    return (
      r === se(u) && (h ? ia(l, f) && qr(r, 'set', o, l) : qr(r, 'add', o, l)),
      d
    );
  };
}
function e1(t, n) {
  const r = oe(t, n);
  t[n];
  const o = Reflect.deleteProperty(t, n);
  return o && r && qr(t, 'delete', n, void 0), o;
}
function n1(t, n) {
  const r = Reflect.has(t, n);
  return (!Xf(n) || !mm.has(n)) && Ln(t, 'has', n), r;
}
function r1(t) {
  return Ln(t, 'iterate', Bt(t) ? 'length' : Zi), Reflect.ownKeys(t);
}
const bm = { get: Kx, set: Qx, deleteProperty: e1, has: n1, ownKeys: r1 },
  i1 = {
    get: Yx,
    set(t, n) {
      return !0;
    },
    deleteProperty(t, n) {
      return !0;
    },
  },
  o1 = Ze({}, bm, { get: Xx, set: t1 }),
  th = (t) => t,
  gc = (t) => Reflect.getPrototypeOf(t);
function dl(t, n, r = !1, o = !1) {
  t = t.__v_raw;
  const l = se(t),
    u = se(n);
  r || (n !== u && Ln(l, 'get', n), Ln(l, 'get', u));
  const { has: f } = gc(l),
    h = o ? th : r ? ih : oa;
  if (f.call(l, n)) return h(t.get(n));
  if (f.call(l, u)) return h(t.get(u));
  t !== l && t.get(n);
}
function pl(t, n = !1) {
  const r = this.__v_raw,
    o = se(r),
    l = se(t);
  return (
    n || (t !== l && Ln(o, 'has', t), Ln(o, 'has', l)),
    t === l ? r.has(t) : r.has(t) || r.has(l)
  );
}
function gl(t, n = !1) {
  return (
    (t = t.__v_raw), !n && Ln(se(t), 'iterate', Zi), Reflect.get(t, 'size', t)
  );
}
function Kp(t) {
  t = se(t);
  const n = se(this);
  return gc(n).has.call(n, t) || (n.add(t), qr(n, 'add', t, t)), this;
}
function Xp(t, n) {
  n = se(n);
  const r = se(this),
    { has: o, get: l } = gc(r);
  let u = o.call(r, t);
  u || ((t = se(t)), (u = o.call(r, t)));
  const f = l.call(r, t);
  return (
    r.set(t, n), u ? ia(n, f) && qr(r, 'set', t, n) : qr(r, 'add', t, n), this
  );
}
function Yp(t) {
  const n = se(this),
    { has: r, get: o } = gc(n);
  let l = r.call(n, t);
  l || ((t = se(t)), (l = r.call(n, t))), o && o.call(n, t);
  const u = n.delete(t);
  return l && qr(n, 'delete', t, void 0), u;
}
function Zp() {
  const t = se(this),
    n = t.size !== 0,
    r = t.clear();
  return n && qr(t, 'clear', void 0, void 0), r;
}
function vl(t, n) {
  return function (o, l) {
    const u = this,
      f = u.__v_raw,
      h = se(f),
      d = n ? th : t ? ih : oa;
    return (
      !t && Ln(h, 'iterate', Zi), f.forEach((g, v) => o.call(l, d(g), d(v), u))
    );
  };
}
function ml(t, n, r) {
  return function (...o) {
    const l = this.__v_raw,
      u = se(l),
      f = Io(u),
      h = t === 'entries' || (t === Symbol.iterator && f),
      d = t === 'keys' && f,
      g = l[t](...o),
      v = r ? th : n ? ih : oa;
    return (
      !n && Ln(u, 'iterate', d ? of : Zi),
      {
        next() {
          const { value: b, done: x } = g.next();
          return x
            ? { value: b, done: x }
            : { value: h ? [v(b[0]), v(b[1])] : v(b), done: x };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function li(t) {
  return function (...n) {
    return t === 'delete' ? !1 : this;
  };
}
function s1() {
  const t = {
      get(u) {
        return dl(this, u);
      },
      get size() {
        return gl(this);
      },
      has: pl,
      add: Kp,
      set: Xp,
      delete: Yp,
      clear: Zp,
      forEach: vl(!1, !1),
    },
    n = {
      get(u) {
        return dl(this, u, !1, !0);
      },
      get size() {
        return gl(this);
      },
      has: pl,
      add: Kp,
      set: Xp,
      delete: Yp,
      clear: Zp,
      forEach: vl(!1, !0),
    },
    r = {
      get(u) {
        return dl(this, u, !0);
      },
      get size() {
        return gl(this, !0);
      },
      has(u) {
        return pl.call(this, u, !0);
      },
      add: li('add'),
      set: li('set'),
      delete: li('delete'),
      clear: li('clear'),
      forEach: vl(!0, !1),
    },
    o = {
      get(u) {
        return dl(this, u, !0, !0);
      },
      get size() {
        return gl(this, !0);
      },
      has(u) {
        return pl.call(this, u, !0);
      },
      add: li('add'),
      set: li('set'),
      delete: li('delete'),
      clear: li('clear'),
      forEach: vl(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((u) => {
      (t[u] = ml(u, !1, !1)),
        (r[u] = ml(u, !0, !1)),
        (n[u] = ml(u, !1, !0)),
        (o[u] = ml(u, !0, !0));
    }),
    [t, r, n, o]
  );
}
const [a1, l1, c1, u1] = s1();
function eh(t, n) {
  const r = n ? (t ? u1 : c1) : t ? l1 : a1;
  return (o, l, u) =>
    l === '__v_isReactive'
      ? !t
      : l === '__v_isReadonly'
      ? t
      : l === '__v_raw'
      ? o
      : Reflect.get(oe(r, l) && l in o ? r : o, l, u);
}
const f1 = { get: eh(!1, !1) },
  h1 = { get: eh(!1, !0) },
  d1 = { get: eh(!0, !1) },
  wm = new WeakMap(),
  xm = new WeakMap(),
  _m = new WeakMap(),
  p1 = new WeakMap();
function g1(t) {
  switch (t) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function v1(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : g1(zx(t));
}
function Dn(t) {
  return Ko(t) ? t : nh(t, !1, bm, f1, wm);
}
function m1(t) {
  return nh(t, !1, o1, h1, xm);
}
function vc(t) {
  return nh(t, !0, i1, d1, _m);
}
function nh(t, n, r, o, l) {
  if (!_e(t) || (t.__v_raw && !(n && t.__v_isReactive))) return t;
  const u = l.get(t);
  if (u) return u;
  const f = v1(t);
  if (f === 0) return t;
  const h = new Proxy(t, f === 2 ? o : r);
  return l.set(t, h), h;
}
function qo(t) {
  return Ko(t) ? qo(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Ko(t) {
  return !!(t && t.__v_isReadonly);
}
function Bl(t) {
  return !!(t && t.__v_isShallow);
}
function Sm(t) {
  return qo(t) || Ko(t);
}
function se(t) {
  const n = t && t.__v_raw;
  return n ? se(n) : t;
}
function rh(t) {
  return ql(t, '__v_skip', !0), t;
}
const oa = (t) => (_e(t) ? Dn(t) : t),
  ih = (t) => (_e(t) ? vc(t) : t);
function oh(t) {
  wi && Yn && ((t = se(t)), vm(t.dep || (t.dep = Zf())));
}
function sh(t, n) {
  t = se(t);
  const r = t.dep;
  r && sf(r);
}
function Ae(t) {
  return !!(t && t.__v_isRef === !0);
}
function Vt(t) {
  return km(t, !1);
}
function as(t) {
  return km(t, !0);
}
function km(t, n) {
  return Ae(t) ? t : new y1(t, n);
}
class y1 {
  constructor(n, r) {
    (this.__v_isShallow = r),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = r ? n : se(n)),
      (this._value = r ? n : oa(n));
  }
  get value() {
    return oh(this), this._value;
  }
  set value(n) {
    const r = this.__v_isShallow || Bl(n) || Ko(n);
    (n = r ? n : se(n)),
      ia(n, this._rawValue) &&
        ((this._rawValue = n), (this._value = r ? n : oa(n)), sh(this));
  }
}
function U(t) {
  return Ae(t) ? t.value : t;
}
const b1 = {
  get: (t, n, r) => U(Reflect.get(t, n, r)),
  set: (t, n, r, o) => {
    const l = t[n];
    return Ae(l) && !Ae(r) ? ((l.value = r), !0) : Reflect.set(t, n, r, o);
  },
};
function Cm(t) {
  return qo(t) ? t : new Proxy(t, b1);
}
class w1 {
  constructor(n) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: r, set: o } = n(
      () => oh(this),
      () => sh(this),
    );
    (this._get = r), (this._set = o);
  }
  get value() {
    return this._get();
  }
  set value(n) {
    this._set(n);
  }
}
function x1(t) {
  return new w1(t);
}
function _1(t) {
  const n = Bt(t) ? new Array(t.length) : {};
  for (const r in t) n[r] = mc(t, r);
  return n;
}
class S1 {
  constructor(n, r, o) {
    (this._object = n),
      (this._key = r),
      (this._defaultValue = o),
      (this.__v_isRef = !0);
  }
  get value() {
    const n = this._object[this._key];
    return n === void 0 ? this._defaultValue : n;
  }
  set value(n) {
    this._object[this._key] = n;
  }
  get dep() {
    return Gx(se(this._object), this._key);
  }
}
function mc(t, n, r) {
  const o = t[n];
  return Ae(o) ? o : new S1(t, n, r);
}
var Tm;
class k1 {
  constructor(n, r, o, l) {
    (this._setter = r),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Tm] = !1),
      (this._dirty = !0),
      (this.effect = new Jf(n, () => {
        this._dirty || ((this._dirty = !0), sh(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !l),
      (this.__v_isReadonly = o);
  }
  get value() {
    const n = se(this);
    return (
      oh(n),
      (n._dirty || !n._cacheable) &&
        ((n._dirty = !1), (n._value = n.effect.run())),
      n._value
    );
  }
  set value(n) {
    this._setter(n);
  }
}
Tm = '__v_isReadonly';
function C1(t, n, r = !1) {
  let o, l;
  const u = Wt(t);
  return (
    u ? ((o = t), (l = Qn)) : ((o = t.get), (l = t.set)),
    new k1(o, l, u || !l, r)
  );
}
function xi(t, n, r, o) {
  let l;
  try {
    l = o ? t(...o) : t();
  } catch (u) {
    xa(u, n, r);
  }
  return l;
}
function Bn(t, n, r, o) {
  if (Wt(t)) {
    const u = xi(t, n, r, o);
    return (
      u &&
        lm(u) &&
        u.catch((f) => {
          xa(f, n, r);
        }),
      u
    );
  }
  const l = [];
  for (let u = 0; u < t.length; u++) l.push(Bn(t[u], n, r, o));
  return l;
}
function xa(t, n, r, o = !0) {
  const l = n ? n.vnode : null;
  if (n) {
    let u = n.parent;
    const f = n.proxy,
      h = r;
    for (; u; ) {
      const g = u.ec;
      if (g) {
        for (let v = 0; v < g.length; v++) if (g[v](t, f, h) === !1) return;
      }
      u = u.parent;
    }
    const d = n.appContext.config.errorHandler;
    if (d) {
      xi(d, null, 10, [t, f, h]);
      return;
    }
  }
  T1(t, r, l, o);
}
function T1(t, n, r, o = !0) {
  console.error(t);
}
let sa = !1,
  af = !1;
const nn = [];
let hr = 0;
const Ho = [];
let $r = null,
  ji = 0;
const Em = Promise.resolve();
let ah = null;
function Hr(t) {
  const n = ah || Em;
  return t ? n.then(this ? t.bind(this) : t) : n;
}
function E1(t) {
  let n = hr + 1,
    r = nn.length;
  for (; n < r; ) {
    const o = (n + r) >>> 1;
    aa(nn[o]) < t ? (n = o + 1) : (r = o);
  }
  return n;
}
function lh(t) {
  (!nn.length || !nn.includes(t, sa && t.allowRecurse ? hr + 1 : hr)) &&
    (t.id == null ? nn.push(t) : nn.splice(E1(t.id), 0, t), Lm());
}
function Lm() {
  !sa && !af && ((af = !0), (ah = Em.then(Nm)));
}
function L1(t) {
  const n = nn.indexOf(t);
  n > hr && nn.splice(n, 1);
}
function Am(t) {
  Bt(t)
    ? Ho.push(...t)
    : (!$r || !$r.includes(t, t.allowRecurse ? ji + 1 : ji)) && Ho.push(t),
    Lm();
}
function Jp(t, n = sa ? hr + 1 : 0) {
  for (; n < nn.length; n++) {
    const r = nn[n];
    r && r.pre && (nn.splice(n, 1), n--, r());
  }
}
function Mm(t) {
  if (Ho.length) {
    const n = [...new Set(Ho)];
    if (((Ho.length = 0), $r)) {
      $r.push(...n);
      return;
    }
    for ($r = n, $r.sort((r, o) => aa(r) - aa(o)), ji = 0; ji < $r.length; ji++)
      $r[ji]();
    ($r = null), (ji = 0);
  }
}
const aa = (t) => (t.id == null ? 1 / 0 : t.id),
  A1 = (t, n) => {
    const r = aa(t) - aa(n);
    if (r === 0) {
      if (t.pre && !n.pre) return -1;
      if (n.pre && !t.pre) return 1;
    }
    return r;
  };
function Nm(t) {
  (af = !1), (sa = !0), nn.sort(A1);
  const n = Qn;
  try {
    for (hr = 0; hr < nn.length; hr++) {
      const r = nn[hr];
      r && r.active !== !1 && xi(r, null, 14);
    }
  } finally {
    (hr = 0),
      (nn.length = 0),
      Mm(),
      (sa = !1),
      (ah = null),
      (nn.length || Ho.length) && Nm();
  }
}
function M1(t, n, ...r) {
  if (t.isUnmounted) return;
  const o = t.vnode.props || we;
  let l = r;
  const u = n.startsWith('update:'),
    f = u && n.slice(7);
  if (f && f in o) {
    const v = `${f === 'modelValue' ? 'model' : f}Modifiers`,
      { number: b, trim: x } = o[v] || we;
    x && (l = r.map((S) => (ze(S) ? S.trim() : S))), b && (l = r.map(nf));
  }
  let h,
    d = o[(h = $u(n))] || o[(h = $u(mr(n)))];
  !d && u && (d = o[(h = $u(so(n)))]), d && Bn(d, t, 6, l);
  const g = o[h + 'Once'];
  if (g) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[h]) return;
    (t.emitted[h] = !0), Bn(g, t, 6, l);
  }
}
function Pm(t, n, r = !1) {
  const o = n.emitsCache,
    l = o.get(t);
  if (l !== void 0) return l;
  const u = t.emits;
  let f = {},
    h = !1;
  if (!Wt(t)) {
    const d = (g) => {
      const v = Pm(g, n, !0);
      v && ((h = !0), Ze(f, v));
    };
    !r && n.mixins.length && n.mixins.forEach(d),
      t.extends && d(t.extends),
      t.mixins && t.mixins.forEach(d);
  }
  return !u && !h
    ? (_e(t) && o.set(t, null), null)
    : (Bt(u) ? u.forEach((d) => (f[d] = null)) : Ze(f, u),
      _e(t) && o.set(t, f),
      f);
}
function yc(t, n) {
  return !t || !fc(n)
    ? !1
    : ((n = n.slice(2).replace(/Once$/, '')),
      oe(t, n[0].toLowerCase() + n.slice(1)) || oe(t, so(n)) || oe(t, n));
}
let Ye = null,
  bc = null;
function Wl(t) {
  const n = Ye;
  return (Ye = t), (bc = (t && t.type.__scopeId) || null), n;
}
function Om(t) {
  bc = t;
}
function $m() {
  bc = null;
}
const N1 = (t) => Xt;
function Xt(t, n = Ye, r) {
  if (!n || t._n) return t;
  const o = (...l) => {
    o._d && cg(-1);
    const u = Wl(n);
    let f;
    try {
      f = t(...l);
    } finally {
      Wl(u), o._d && cg(1);
    }
    return f;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function Du(t) {
  const {
    type: n,
    vnode: r,
    proxy: o,
    withProxy: l,
    props: u,
    propsOptions: [f],
    slots: h,
    attrs: d,
    emit: g,
    render: v,
    renderCache: b,
    data: x,
    setupState: S,
    ctx: A,
    inheritAttrs: L,
  } = t;
  let M, T;
  const E = Wl(t);
  try {
    if (r.shapeFlag & 4) {
      const O = l || o;
      (M = Xn(v.call(O, O, b, u, S, x, A))), (T = d);
    } else {
      const O = n;
      (M = Xn(
        O.length > 1 ? O(u, { attrs: d, slots: h, emit: g }) : O(u, null),
      )),
        (T = n.props ? d : O1(d));
    }
  } catch (O) {
    (Qs.length = 0), xa(O, t, 1), (M = It(Tn));
  }
  let $ = M;
  if (T && L !== !1) {
    const O = Object.keys(T),
      { shapeFlag: G } = $;
    O.length && G & 7 && (f && O.some(Vf) && (T = $1(T, f)), ($ = ki($, T)));
  }
  return (
    r.dirs && (($ = ki($)), ($.dirs = $.dirs ? $.dirs.concat(r.dirs) : r.dirs)),
    r.transition && ($.transition = r.transition),
    (M = $),
    Wl(E),
    M
  );
}
function P1(t) {
  let n;
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (ca(o)) {
      if (o.type !== Tn || o.children === 'v-if') {
        if (n) return;
        n = o;
      }
    } else return;
  }
  return n;
}
const O1 = (t) => {
    let n;
    for (const r in t)
      (r === 'class' || r === 'style' || fc(r)) && ((n || (n = {}))[r] = t[r]);
    return n;
  },
  $1 = (t, n) => {
    const r = {};
    for (const o in t) (!Vf(o) || !(o.slice(9) in n)) && (r[o] = t[o]);
    return r;
  };
function D1(t, n, r) {
  const { props: o, children: l, component: u } = t,
    { props: f, children: h, patchFlag: d } = n,
    g = u.emitsOptions;
  if (n.dirs || n.transition) return !0;
  if (r && d >= 0) {
    if (d & 1024) return !0;
    if (d & 16) return o ? Qp(o, f, g) : !!f;
    if (d & 8) {
      const v = n.dynamicProps;
      for (let b = 0; b < v.length; b++) {
        const x = v[b];
        if (f[x] !== o[x] && !yc(g, x)) return !0;
      }
    }
  } else
    return (l || h) && (!h || !h.$stable)
      ? !0
      : o === f
      ? !1
      : o
      ? f
        ? Qp(o, f, g)
        : !0
      : !!f;
  return !1;
}
function Qp(t, n, r) {
  const o = Object.keys(n);
  if (o.length !== Object.keys(t).length) return !0;
  for (let l = 0; l < o.length; l++) {
    const u = o[l];
    if (n[u] !== t[u] && !yc(r, u)) return !0;
  }
  return !1;
}
function ch({ vnode: t, parent: n }, r) {
  for (; n && n.subTree === t; ) ((t = n.vnode).el = r), (n = n.parent);
}
const R1 = (t) => t.__isSuspense,
  z1 = {
    name: 'Suspense',
    __isSuspense: !0,
    process(t, n, r, o, l, u, f, h, d, g) {
      t == null ? I1(n, r, o, l, u, f, h, d, g) : q1(t, n, r, o, l, f, h, d, g);
    },
    hydrate: H1,
    create: uh,
    normalize: B1,
  },
  F1 = z1;
function la(t, n) {
  const r = t.props && t.props[n];
  Wt(r) && r();
}
function I1(t, n, r, o, l, u, f, h, d) {
  const {
      p: g,
      o: { createElement: v },
    } = d,
    b = v('div'),
    x = (t.suspense = uh(t, l, o, n, b, r, u, f, h, d));
  g(null, (x.pendingBranch = t.ssContent), b, null, o, x, u, f),
    x.deps > 0
      ? (la(t, 'onPending'),
        la(t, 'onFallback'),
        g(null, t.ssFallback, n, r, o, null, u, f),
        Bo(x, t.ssFallback))
      : x.resolve();
}
function q1(t, n, r, o, l, u, f, h, { p: d, um: g, o: { createElement: v } }) {
  const b = (n.suspense = t.suspense);
  (b.vnode = n), (n.el = t.el);
  const x = n.ssContent,
    S = n.ssFallback,
    { activeBranch: A, pendingBranch: L, isInFallback: M, isHydrating: T } = b;
  if (L)
    (b.pendingBranch = x),
      dr(x, L)
        ? (d(L, x, b.hiddenContainer, null, l, b, u, f, h),
          b.deps <= 0
            ? b.resolve()
            : M && (d(A, S, r, o, l, null, u, f, h), Bo(b, S)))
        : (b.pendingId++,
          T ? ((b.isHydrating = !1), (b.activeBranch = L)) : g(L, l, b),
          (b.deps = 0),
          (b.effects.length = 0),
          (b.hiddenContainer = v('div')),
          M
            ? (d(null, x, b.hiddenContainer, null, l, b, u, f, h),
              b.deps <= 0
                ? b.resolve()
                : (d(A, S, r, o, l, null, u, f, h), Bo(b, S)))
            : A && dr(x, A)
            ? (d(A, x, r, o, l, b, u, f, h), b.resolve(!0))
            : (d(null, x, b.hiddenContainer, null, l, b, u, f, h),
              b.deps <= 0 && b.resolve()));
  else if (A && dr(x, A)) d(A, x, r, o, l, b, u, f, h), Bo(b, x);
  else if (
    (la(n, 'onPending'),
    (b.pendingBranch = x),
    b.pendingId++,
    d(null, x, b.hiddenContainer, null, l, b, u, f, h),
    b.deps <= 0)
  )
    b.resolve();
  else {
    const { timeout: E, pendingId: $ } = b;
    E > 0
      ? setTimeout(() => {
          b.pendingId === $ && b.fallback(S);
        }, E)
      : E === 0 && b.fallback(S);
  }
}
function uh(t, n, r, o, l, u, f, h, d, g, v = !1) {
  const {
      p: b,
      m: x,
      um: S,
      n: A,
      o: { parentNode: L, remove: M },
    } = g,
    T = t.props ? fm(t.props.timeout) : void 0,
    E = {
      vnode: t,
      parent: n,
      parentComponent: r,
      isSVG: f,
      container: o,
      hiddenContainer: l,
      anchor: u,
      deps: 0,
      pendingId: 0,
      timeout: typeof T == 'number' ? T : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: v,
      isUnmounted: !1,
      effects: [],
      resolve($ = !1) {
        const {
          vnode: O,
          activeBranch: G,
          pendingBranch: K,
          pendingId: ct,
          effects: V,
          parentComponent: ut,
          container: ft,
        } = E;
        if (E.isHydrating) E.isHydrating = !1;
        else if (!$) {
          const j = G && K.transition && K.transition.mode === 'out-in';
          j &&
            (G.transition.afterLeave = () => {
              ct === E.pendingId && x(K, ft, z, 0);
            });
          let { anchor: z } = E;
          G && ((z = A(G)), S(G, ut, E, !0)), j || x(K, ft, z, 0);
        }
        Bo(E, K), (E.pendingBranch = null), (E.isInFallback = !1);
        let kt = E.parent,
          dt = !1;
        for (; kt; ) {
          if (kt.pendingBranch) {
            kt.effects.push(...V), (dt = !0);
            break;
          }
          kt = kt.parent;
        }
        dt || Am(V), (E.effects = []), la(O, 'onResolve');
      },
      fallback($) {
        if (!E.pendingBranch) return;
        const {
          vnode: O,
          activeBranch: G,
          parentComponent: K,
          container: ct,
          isSVG: V,
        } = E;
        la(O, 'onFallback');
        const ut = A(G),
          ft = () => {
            E.isInFallback && (b(null, $, ct, ut, K, null, V, h, d), Bo(E, $));
          },
          kt = $.transition && $.transition.mode === 'out-in';
        kt && (G.transition.afterLeave = ft),
          (E.isInFallback = !0),
          S(G, K, null, !0),
          kt || ft();
      },
      move($, O, G) {
        E.activeBranch && x(E.activeBranch, $, O, G), (E.container = $);
      },
      next() {
        return E.activeBranch && A(E.activeBranch);
      },
      registerDep($, O) {
        const G = !!E.pendingBranch;
        G && E.deps++;
        const K = $.vnode.el;
        $.asyncDep
          .catch((ct) => {
            xa(ct, $, 0);
          })
          .then((ct) => {
            if ($.isUnmounted || E.isUnmounted || E.pendingId !== $.suspenseId)
              return;
            $.asyncResolved = !0;
            const { vnode: V } = $;
            gf($, ct, !1), K && (V.el = K);
            const ut = !K && $.subTree.el;
            O($, V, L(K || $.subTree.el), K ? null : A($.subTree), E, f, d),
              ut && M(ut),
              ch($, V.el),
              G && --E.deps === 0 && E.resolve();
          });
      },
      unmount($, O) {
        (E.isUnmounted = !0),
          E.activeBranch && S(E.activeBranch, r, $, O),
          E.pendingBranch && S(E.pendingBranch, r, $, O);
      },
    };
  return E;
}
function H1(t, n, r, o, l, u, f, h, d) {
  const g = (n.suspense = uh(
      n,
      o,
      r,
      t.parentNode,
      document.createElement('div'),
      null,
      l,
      u,
      f,
      h,
      !0,
    )),
    v = d(t, (g.pendingBranch = n.ssContent), r, g, u, f);
  return g.deps === 0 && g.resolve(), v;
}
function B1(t) {
  const { shapeFlag: n, children: r } = t,
    o = n & 32;
  (t.ssContent = tg(o ? r.default : r)),
    (t.ssFallback = o ? tg(r.fallback) : It(Tn));
}
function tg(t) {
  let n;
  if (Wt(t)) {
    const r = Xo && t._c;
    r && ((t._d = !1), at()), (t = t()), r && ((t._d = !0), (n = Hn), Jm());
  }
  return (
    Bt(t) && (t = P1(t)),
    (t = Xn(t)),
    n && !t.dynamicChildren && (t.dynamicChildren = n.filter((r) => r !== t)),
    t
  );
}
function W1(t, n) {
  n && n.pendingBranch
    ? Bt(t)
      ? n.effects.push(...t)
      : n.effects.push(t)
    : Am(t);
}
function Bo(t, n) {
  t.activeBranch = n;
  const { vnode: r, parentComponent: o } = t,
    l = (r.el = n.el);
  o && o.subTree === r && ((o.vnode.el = l), ch(o, l));
}
function Ml(t, n) {
  if (Oe) {
    let r = Oe.provides;
    const o = Oe.parent && Oe.parent.provides;
    o === r && (r = Oe.provides = Object.create(o)), (r[t] = n);
  }
}
function Fr(t, n, r = !1) {
  const o = Oe || Ye;
  if (o) {
    const l =
      o.parent == null
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides;
    if (l && t in l) return l[t];
    if (arguments.length > 1) return r && Wt(n) ? n.call(o.proxy) : n;
  }
}
function fh(t, n) {
  return hh(t, null, n);
}
const yl = {};
function Re(t, n, r) {
  return hh(t, n, r);
}
function hh(
  t,
  n,
  { immediate: r, deep: o, flush: l, onTrack: u, onTrigger: f } = we,
) {
  const h = hm() === (Oe == null ? void 0 : Oe.scope) ? Oe : null;
  let d,
    g = !1,
    v = !1;
  if (
    (Ae(t)
      ? ((d = () => t.value), (g = Bl(t)))
      : qo(t)
      ? ((d = () => t), (o = !0))
      : Bt(t)
      ? ((v = !0),
        (g = t.some(($) => qo($) || Bl($))),
        (d = () =>
          t.map(($) => {
            if (Ae($)) return $.value;
            if (qo($)) return Vi($);
            if (Wt($)) return xi($, h, 2);
          })))
      : Wt(t)
      ? n
        ? (d = () => xi(t, h, 2))
        : (d = () => {
            if (!(h && h.isUnmounted)) return b && b(), Bn(t, h, 3, [x]);
          })
      : (d = Qn),
    n && o)
  ) {
    const $ = d;
    d = () => Vi($());
  }
  let b,
    x = ($) => {
      b = T.onStop = () => {
        xi($, h, 4);
      };
    },
    S;
  if (ua)
    if (
      ((x = Qn),
      n ? r && Bn(n, h, 3, [d(), v ? [] : void 0, x]) : d(),
      l === 'sync')
    ) {
      const $ = D_();
      S = $.__watcherHandles || ($.__watcherHandles = []);
    } else return Qn;
  let A = v ? new Array(t.length).fill(yl) : yl;
  const L = () => {
    if (T.active)
      if (n) {
        const $ = T.run();
        (o || g || (v ? $.some((O, G) => ia(O, A[G])) : ia($, A))) &&
          (b && b(),
          Bn(n, h, 3, [$, A === yl ? void 0 : v && A[0] === yl ? [] : A, x]),
          (A = $));
      } else T.run();
  };
  L.allowRecurse = !!n;
  let M;
  l === 'sync'
    ? (M = L)
    : l === 'post'
    ? (M = () => _n(L, h && h.suspense))
    : ((L.pre = !0), h && (L.id = h.uid), (M = () => lh(L)));
  const T = new Jf(d, M);
  n
    ? r
      ? L()
      : (A = T.run())
    : l === 'post'
    ? _n(T.run.bind(T), h && h.suspense)
    : T.run();
  const E = () => {
    T.stop(), h && h.scope && Kf(h.scope.effects, T);
  };
  return S && S.push(E), E;
}
function U1(t, n, r) {
  const o = this.proxy,
    l = ze(t) ? (t.includes('.') ? Dm(o, t) : () => o[t]) : t.bind(o, o);
  let u;
  Wt(n) ? (u = n) : ((u = n.handler), (r = n));
  const f = Oe;
  Yo(this);
  const h = hh(l, u.bind(o), r);
  return f ? Yo(f) : Ji(), h;
}
function Dm(t, n) {
  const r = n.split('.');
  return () => {
    let o = t;
    for (let l = 0; l < r.length && o; l++) o = o[r[l]];
    return o;
  };
}
function Vi(t, n) {
  if (!_e(t) || t.__v_skip || ((n = n || new Set()), n.has(t))) return t;
  if ((n.add(t), Ae(t))) Vi(t.value, n);
  else if (Bt(t)) for (let r = 0; r < t.length; r++) Vi(t[r], n);
  else if (am(t) || Io(t))
    t.forEach((r) => {
      Vi(r, n);
    });
  else if (um(t)) for (const r in t) Vi(t[r], n);
  return t;
}
function j1() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    ls(() => {
      t.isMounted = !0;
    }),
    qm(() => {
      t.isUnmounting = !0;
    }),
    t
  );
}
const In = [Function, Array],
  G1 = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: In,
      onEnter: In,
      onAfterEnter: In,
      onEnterCancelled: In,
      onBeforeLeave: In,
      onLeave: In,
      onAfterLeave: In,
      onLeaveCancelled: In,
      onBeforeAppear: In,
      onAppear: In,
      onAfterAppear: In,
      onAppearCancelled: In,
    },
    setup(t, { slots: n }) {
      const r = _a(),
        o = j1();
      let l;
      return () => {
        const u = n.default && Fm(n.default(), !0);
        if (!u || !u.length) return;
        let f = u[0];
        if (u.length > 1) {
          for (const L of u)
            if (L.type !== Tn) {
              f = L;
              break;
            }
        }
        const h = se(t),
          { mode: d } = h;
        if (o.isLeaving) return Ru(f);
        const g = eg(f);
        if (!g) return Ru(f);
        const v = lf(g, h, o, r);
        cf(g, v);
        const b = r.subTree,
          x = b && eg(b);
        let S = !1;
        const { getTransitionKey: A } = g.type;
        if (A) {
          const L = A();
          l === void 0 ? (l = L) : L !== l && ((l = L), (S = !0));
        }
        if (x && x.type !== Tn && (!dr(g, x) || S)) {
          const L = lf(x, h, o, r);
          if ((cf(x, L), d === 'out-in'))
            return (
              (o.isLeaving = !0),
              (L.afterLeave = () => {
                (o.isLeaving = !1), r.update.active !== !1 && r.update();
              }),
              Ru(f)
            );
          d === 'in-out' &&
            g.type !== Tn &&
            (L.delayLeave = (M, T, E) => {
              const $ = zm(o, x);
              ($[String(x.key)] = x),
                (M._leaveCb = () => {
                  T(), (M._leaveCb = void 0), delete v.delayedLeave;
                }),
                (v.delayedLeave = E);
            });
        }
        return f;
      };
    },
  },
  Rm = G1;
function zm(t, n) {
  const { leavingVNodes: r } = t;
  let o = r.get(n.type);
  return o || ((o = Object.create(null)), r.set(n.type, o)), o;
}
function lf(t, n, r, o) {
  const {
      appear: l,
      mode: u,
      persisted: f = !1,
      onBeforeEnter: h,
      onEnter: d,
      onAfterEnter: g,
      onEnterCancelled: v,
      onBeforeLeave: b,
      onLeave: x,
      onAfterLeave: S,
      onLeaveCancelled: A,
      onBeforeAppear: L,
      onAppear: M,
      onAfterAppear: T,
      onAppearCancelled: E,
    } = n,
    $ = String(t.key),
    O = zm(r, t),
    G = (V, ut) => {
      V && Bn(V, o, 9, ut);
    },
    K = (V, ut) => {
      const ft = ut[1];
      G(V, ut),
        Bt(V) ? V.every((kt) => kt.length <= 1) && ft() : V.length <= 1 && ft();
    },
    ct = {
      mode: u,
      persisted: f,
      beforeEnter(V) {
        let ut = h;
        if (!r.isMounted)
          if (l) ut = L || h;
          else return;
        V._leaveCb && V._leaveCb(!0);
        const ft = O[$];
        ft && dr(t, ft) && ft.el._leaveCb && ft.el._leaveCb(), G(ut, [V]);
      },
      enter(V) {
        let ut = d,
          ft = g,
          kt = v;
        if (!r.isMounted)
          if (l) (ut = M || d), (ft = T || g), (kt = E || v);
          else return;
        let dt = !1;
        const j = (V._enterCb = (z) => {
          dt ||
            ((dt = !0),
            z ? G(kt, [V]) : G(ft, [V]),
            ct.delayedLeave && ct.delayedLeave(),
            (V._enterCb = void 0));
        });
        ut ? K(ut, [V, j]) : j();
      },
      leave(V, ut) {
        const ft = String(t.key);
        if ((V._enterCb && V._enterCb(!0), r.isUnmounting)) return ut();
        G(b, [V]);
        let kt = !1;
        const dt = (V._leaveCb = (j) => {
          kt ||
            ((kt = !0),
            ut(),
            j ? G(A, [V]) : G(S, [V]),
            (V._leaveCb = void 0),
            O[ft] === t && delete O[ft]);
        });
        (O[ft] = t), x ? K(x, [V, dt]) : dt();
      },
      clone(V) {
        return lf(V, n, r, o);
      },
    };
  return ct;
}
function Ru(t) {
  if (wc(t)) return (t = ki(t)), (t.children = null), t;
}
function eg(t) {
  return wc(t) ? (t.children ? t.children[0] : void 0) : t;
}
function cf(t, n) {
  t.shapeFlag & 6 && t.component
    ? cf(t.component.subTree, n)
    : t.shapeFlag & 128
    ? ((t.ssContent.transition = n.clone(t.ssContent)),
      (t.ssFallback.transition = n.clone(t.ssFallback)))
    : (t.transition = n);
}
function Fm(t, n = !1, r) {
  let o = [],
    l = 0;
  for (let u = 0; u < t.length; u++) {
    let f = t[u];
    const h = r == null ? f.key : String(r) + String(f.key != null ? f.key : u);
    f.type === ue
      ? (f.patchFlag & 128 && l++, (o = o.concat(Fm(f.children, n, h))))
      : (n || f.type !== Tn) && o.push(h != null ? ki(f, { key: h }) : f);
  }
  if (l > 1) for (let u = 0; u < o.length; u++) o[u].patchFlag = -2;
  return o;
}
function ne(t) {
  return Wt(t) ? { setup: t, name: t.name } : t;
}
const Zs = (t) => !!t.type.__asyncLoader,
  wc = (t) => t.type.__isKeepAlive;
function V1(t, n) {
  Im(t, 'a', n);
}
function K1(t, n) {
  Im(t, 'da', n);
}
function Im(t, n, r = Oe) {
  const o =
    t.__wdc ||
    (t.__wdc = () => {
      let l = r;
      for (; l; ) {
        if (l.isDeactivated) return;
        l = l.parent;
      }
      return t();
    });
  if ((xc(n, o, r), r)) {
    let l = r.parent;
    for (; l && l.parent; )
      wc(l.parent.vnode) && X1(o, n, r, l), (l = l.parent);
  }
}
function X1(t, n, r, o) {
  const l = xc(n, t, o, !0);
  dh(() => {
    Kf(o[n], l);
  }, r);
}
function xc(t, n, r = Oe, o = !1) {
  if (r) {
    const l = r[t] || (r[t] = []),
      u =
        n.__weh ||
        (n.__weh = (...f) => {
          if (r.isUnmounted) return;
          os(), Yo(r);
          const h = Bn(n, r, t, f);
          return Ji(), ss(), h;
        });
    return o ? l.unshift(u) : l.push(u), u;
  }
}
const Vr =
    (t) =>
    (n, r = Oe) =>
      (!ua || t === 'sp') && xc(t, (...o) => n(...o), r),
  Y1 = Vr('bm'),
  ls = Vr('m'),
  Z1 = Vr('bu'),
  J1 = Vr('u'),
  qm = Vr('bum'),
  dh = Vr('um'),
  Q1 = Vr('sp'),
  t_ = Vr('rtg'),
  e_ = Vr('rtc');
function n_(t, n = Oe) {
  xc('ec', t, n);
}
function rn(t, n) {
  const r = Ye;
  if (r === null) return t;
  const o = kc(r) || r.proxy,
    l = t.dirs || (t.dirs = []);
  for (let u = 0; u < n.length; u++) {
    let [f, h, d, g = we] = n[u];
    f &&
      (Wt(f) && (f = { mounted: f, updated: f }),
      f.deep && Vi(h),
      l.push({
        dir: f,
        instance: o,
        value: h,
        oldValue: void 0,
        arg: d,
        modifiers: g,
      }));
  }
  return t;
}
function Ii(t, n, r, o) {
  const l = t.dirs,
    u = n && n.dirs;
  for (let f = 0; f < l.length; f++) {
    const h = l[f];
    u && (h.oldValue = u[f].value);
    let d = h.dir[o];
    d && (os(), Bn(d, r, 8, [t.el, h, t, n]), ss());
  }
}
const Hm = 'components',
  r_ = 'directives';
function eo(t, n) {
  return Bm(Hm, t, !0, n) || t;
}
const i_ = Symbol();
function ao(t) {
  return Bm(r_, t);
}
function Bm(t, n, r = !0, o = !1) {
  const l = Ye || Oe;
  if (l) {
    const u = l.type;
    if (t === Hm) {
      const h = M_(u, !1);
      if (h && (h === n || h === mr(n) || h === pc(mr(n)))) return u;
    }
    const f = ng(l[t] || u[t], n) || ng(l.appContext[t], n);
    return !f && o ? u : f;
  }
}
function ng(t, n) {
  return t && (t[n] || t[mr(n)] || t[pc(mr(n))]);
}
function Zn(t, n, r, o) {
  let l;
  const u = r && r[o];
  if (Bt(t) || ze(t)) {
    l = new Array(t.length);
    for (let f = 0, h = t.length; f < h; f++)
      l[f] = n(t[f], f, void 0, u && u[f]);
  } else if (typeof t == 'number') {
    l = new Array(t);
    for (let f = 0; f < t; f++) l[f] = n(f + 1, f, void 0, u && u[f]);
  } else if (_e(t))
    if (t[Symbol.iterator])
      l = Array.from(t, (f, h) => n(f, h, void 0, u && u[h]));
    else {
      const f = Object.keys(t);
      l = new Array(f.length);
      for (let h = 0, d = f.length; h < d; h++) {
        const g = f[h];
        l[h] = n(t[g], g, h, u && u[h]);
      }
    }
  else l = [];
  return r && (r[o] = l), l;
}
function tr(t, n, r = {}, o, l) {
  if (Ye.isCE || (Ye.parent && Zs(Ye.parent) && Ye.parent.isCE))
    return n !== 'default' && (r.name = n), It('slot', r, o && o());
  let u = t[n];
  u && u._c && (u._d = !1), at();
  const f = u && Wm(u(r)),
    h = Yt(
      ue,
      { key: r.key || (f && f.key) || `_${n}` },
      f || (o ? o() : []),
      f && t._ === 1 ? 64 : -2,
    );
  return (
    !l && h.scopeId && (h.slotScopeIds = [h.scopeId + '-s']),
    u && u._c && (u._d = !0),
    h
  );
}
function Wm(t) {
  return t.some((n) =>
    ca(n) ? !(n.type === Tn || (n.type === ue && !Wm(n.children))) : !0,
  )
    ? t
    : null;
}
const uf = (t) => (t ? (e0(t) ? kc(t) || t.proxy : uf(t.parent)) : null),
  Js = Ze(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => uf(t.parent),
    $root: (t) => uf(t.root),
    $emit: (t) => t.emit,
    $options: (t) => ph(t),
    $forceUpdate: (t) => t.f || (t.f = () => lh(t.update)),
    $nextTick: (t) => t.n || (t.n = Hr.bind(t.proxy)),
    $watch: (t) => U1.bind(t),
  }),
  zu = (t, n) => t !== we && !t.__isScriptSetup && oe(t, n),
  o_ = {
    get({ _: t }, n) {
      const {
        ctx: r,
        setupState: o,
        data: l,
        props: u,
        accessCache: f,
        type: h,
        appContext: d,
      } = t;
      let g;
      if (n[0] !== '$') {
        const S = f[n];
        if (S !== void 0)
          switch (S) {
            case 1:
              return o[n];
            case 2:
              return l[n];
            case 4:
              return r[n];
            case 3:
              return u[n];
          }
        else {
          if (zu(o, n)) return (f[n] = 1), o[n];
          if (l !== we && oe(l, n)) return (f[n] = 2), l[n];
          if ((g = t.propsOptions[0]) && oe(g, n)) return (f[n] = 3), u[n];
          if (r !== we && oe(r, n)) return (f[n] = 4), r[n];
          ff && (f[n] = 0);
        }
      }
      const v = Js[n];
      let b, x;
      if (v) return n === '$attrs' && Ln(t, 'get', n), v(t);
      if ((b = h.__cssModules) && (b = b[n])) return b;
      if (r !== we && oe(r, n)) return (f[n] = 4), r[n];
      if (((x = d.config.globalProperties), oe(x, n))) return x[n];
    },
    set({ _: t }, n, r) {
      const { data: o, setupState: l, ctx: u } = t;
      return zu(l, n)
        ? ((l[n] = r), !0)
        : o !== we && oe(o, n)
        ? ((o[n] = r), !0)
        : oe(t.props, n) || (n[0] === '$' && n.slice(1) in t)
        ? !1
        : ((u[n] = r), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: n,
          accessCache: r,
          ctx: o,
          appContext: l,
          propsOptions: u,
        },
      },
      f,
    ) {
      let h;
      return (
        !!r[f] ||
        (t !== we && oe(t, f)) ||
        zu(n, f) ||
        ((h = u[0]) && oe(h, f)) ||
        oe(o, f) ||
        oe(Js, f) ||
        oe(l.config.globalProperties, f)
      );
    },
    defineProperty(t, n, r) {
      return (
        r.get != null
          ? (t._.accessCache[n] = 0)
          : oe(r, 'value') && this.set(t, n, r.value, null),
        Reflect.defineProperty(t, n, r)
      );
    },
  };
let ff = !0;
function s_(t) {
  const n = ph(t),
    r = t.proxy,
    o = t.ctx;
  (ff = !1), n.beforeCreate && rg(n.beforeCreate, t, 'bc');
  const {
    data: l,
    computed: u,
    methods: f,
    watch: h,
    provide: d,
    inject: g,
    created: v,
    beforeMount: b,
    mounted: x,
    beforeUpdate: S,
    updated: A,
    activated: L,
    deactivated: M,
    beforeDestroy: T,
    beforeUnmount: E,
    destroyed: $,
    unmounted: O,
    render: G,
    renderTracked: K,
    renderTriggered: ct,
    errorCaptured: V,
    serverPrefetch: ut,
    expose: ft,
    inheritAttrs: kt,
    components: dt,
    directives: j,
    filters: z,
  } = n;
  if ((g && a_(g, o, null, t.appContext.config.unwrapInjectedRef), f))
    for (const W in f) {
      const et = f[W];
      Wt(et) && (o[W] = et.bind(r));
    }
  if (l) {
    const W = l.call(r, r);
    _e(W) && (t.data = Dn(W));
  }
  if (((ff = !0), u))
    for (const W in u) {
      const et = u[W],
        mt = Wt(et) ? et.bind(r, r) : Wt(et.get) ? et.get.bind(r, r) : Qn,
        Ct = !Wt(et) && Wt(et.set) ? et.set.bind(r) : Qn,
        Rt = xt({ get: mt, set: Ct });
      Object.defineProperty(o, W, {
        enumerable: !0,
        configurable: !0,
        get: () => Rt.value,
        set: (Ft) => (Rt.value = Ft),
      });
    }
  if (h) for (const W in h) Um(h[W], o, r, W);
  if (d) {
    const W = Wt(d) ? d.call(r) : d;
    Reflect.ownKeys(W).forEach((et) => {
      Ml(et, W[et]);
    });
  }
  v && rg(v, t, 'c');
  function q(W, et) {
    Bt(et) ? et.forEach((mt) => W(mt.bind(r))) : et && W(et.bind(r));
  }
  if (
    (q(Y1, b),
    q(ls, x),
    q(Z1, S),
    q(J1, A),
    q(V1, L),
    q(K1, M),
    q(n_, V),
    q(e_, K),
    q(t_, ct),
    q(qm, E),
    q(dh, O),
    q(Q1, ut),
    Bt(ft))
  )
    if (ft.length) {
      const W = t.exposed || (t.exposed = {});
      ft.forEach((et) => {
        Object.defineProperty(W, et, {
          get: () => r[et],
          set: (mt) => (r[et] = mt),
        });
      });
    } else t.exposed || (t.exposed = {});
  G && t.render === Qn && (t.render = G),
    kt != null && (t.inheritAttrs = kt),
    dt && (t.components = dt),
    j && (t.directives = j);
}
function a_(t, n, r = Qn, o = !1) {
  Bt(t) && (t = hf(t));
  for (const l in t) {
    const u = t[l];
    let f;
    _e(u)
      ? 'default' in u
        ? (f = Fr(u.from || l, u.default, !0))
        : (f = Fr(u.from || l))
      : (f = Fr(u)),
      Ae(f) && o
        ? Object.defineProperty(n, l, {
            enumerable: !0,
            configurable: !0,
            get: () => f.value,
            set: (h) => (f.value = h),
          })
        : (n[l] = f);
  }
}
function rg(t, n, r) {
  Bn(Bt(t) ? t.map((o) => o.bind(n.proxy)) : t.bind(n.proxy), n, r);
}
function Um(t, n, r, o) {
  const l = o.includes('.') ? Dm(r, o) : () => r[o];
  if (ze(t)) {
    const u = n[t];
    Wt(u) && Re(l, u);
  } else if (Wt(t)) Re(l, t.bind(r));
  else if (_e(t))
    if (Bt(t)) t.forEach((u) => Um(u, n, r, o));
    else {
      const u = Wt(t.handler) ? t.handler.bind(r) : n[t.handler];
      Wt(u) && Re(l, u, t);
    }
}
function ph(t) {
  const n = t.type,
    { mixins: r, extends: o } = n,
    {
      mixins: l,
      optionsCache: u,
      config: { optionMergeStrategies: f },
    } = t.appContext,
    h = u.get(n);
  let d;
  return (
    h
      ? (d = h)
      : !l.length && !r && !o
      ? (d = n)
      : ((d = {}), l.length && l.forEach((g) => Ul(d, g, f, !0)), Ul(d, n, f)),
    _e(n) && u.set(n, d),
    d
  );
}
function Ul(t, n, r, o = !1) {
  const { mixins: l, extends: u } = n;
  u && Ul(t, u, r, !0), l && l.forEach((f) => Ul(t, f, r, !0));
  for (const f in n)
    if (!(o && f === 'expose')) {
      const h = l_[f] || (r && r[f]);
      t[f] = h ? h(t[f], n[f]) : n[f];
    }
  return t;
}
const l_ = {
  data: ig,
  props: Wi,
  emits: Wi,
  methods: Wi,
  computed: Wi,
  beforeCreate: hn,
  created: hn,
  beforeMount: hn,
  mounted: hn,
  beforeUpdate: hn,
  updated: hn,
  beforeDestroy: hn,
  beforeUnmount: hn,
  destroyed: hn,
  unmounted: hn,
  activated: hn,
  deactivated: hn,
  errorCaptured: hn,
  serverPrefetch: hn,
  components: Wi,
  directives: Wi,
  watch: u_,
  provide: ig,
  inject: c_,
};
function ig(t, n) {
  return n
    ? t
      ? function () {
          return Ze(
            Wt(t) ? t.call(this, this) : t,
            Wt(n) ? n.call(this, this) : n,
          );
        }
      : n
    : t;
}
function c_(t, n) {
  return Wi(hf(t), hf(n));
}
function hf(t) {
  if (Bt(t)) {
    const n = {};
    for (let r = 0; r < t.length; r++) n[t[r]] = t[r];
    return n;
  }
  return t;
}
function hn(t, n) {
  return t ? [...new Set([].concat(t, n))] : n;
}
function Wi(t, n) {
  return t ? Ze(Ze(Object.create(null), t), n) : n;
}
function u_(t, n) {
  if (!t) return n;
  if (!n) return t;
  const r = Ze(Object.create(null), t);
  for (const o in n) r[o] = hn(t[o], n[o]);
  return r;
}
function f_(t, n, r, o = !1) {
  const l = {},
    u = {};
  ql(u, Sc, 1), (t.propsDefaults = Object.create(null)), jm(t, n, l, u);
  for (const f in t.propsOptions[0]) f in l || (l[f] = void 0);
  r ? (t.props = o ? l : m1(l)) : t.type.props ? (t.props = l) : (t.props = u),
    (t.attrs = u);
}
function h_(t, n, r, o) {
  const {
      props: l,
      attrs: u,
      vnode: { patchFlag: f },
    } = t,
    h = se(l),
    [d] = t.propsOptions;
  let g = !1;
  if ((o || f > 0) && !(f & 16)) {
    if (f & 8) {
      const v = t.vnode.dynamicProps;
      for (let b = 0; b < v.length; b++) {
        let x = v[b];
        if (yc(t.emitsOptions, x)) continue;
        const S = n[x];
        if (d)
          if (oe(u, x)) S !== u[x] && ((u[x] = S), (g = !0));
          else {
            const A = mr(x);
            l[A] = df(d, h, A, S, t, !1);
          }
        else S !== u[x] && ((u[x] = S), (g = !0));
      }
    }
  } else {
    jm(t, n, l, u) && (g = !0);
    let v;
    for (const b in h)
      (!n || (!oe(n, b) && ((v = so(b)) === b || !oe(n, v)))) &&
        (d
          ? r &&
            (r[b] !== void 0 || r[v] !== void 0) &&
            (l[b] = df(d, h, b, void 0, t, !0))
          : delete l[b]);
    if (u !== h)
      for (const b in u) (!n || !oe(n, b)) && (delete u[b], (g = !0));
  }
  g && qr(t, 'set', '$attrs');
}
function jm(t, n, r, o) {
  const [l, u] = t.propsOptions;
  let f = !1,
    h;
  if (n)
    for (let d in n) {
      if (Ll(d)) continue;
      const g = n[d];
      let v;
      l && oe(l, (v = mr(d)))
        ? !u || !u.includes(v)
          ? (r[v] = g)
          : ((h || (h = {}))[v] = g)
        : yc(t.emitsOptions, d) ||
          ((!(d in o) || g !== o[d]) && ((o[d] = g), (f = !0)));
    }
  if (u) {
    const d = se(r),
      g = h || we;
    for (let v = 0; v < u.length; v++) {
      const b = u[v];
      r[b] = df(l, d, b, g[b], t, !oe(g, b));
    }
  }
  return f;
}
function df(t, n, r, o, l, u) {
  const f = t[r];
  if (f != null) {
    const h = oe(f, 'default');
    if (h && o === void 0) {
      const d = f.default;
      if (f.type !== Function && Wt(d)) {
        const { propsDefaults: g } = l;
        r in g ? (o = g[r]) : (Yo(l), (o = g[r] = d.call(null, n)), Ji());
      } else o = d;
    }
    f[0] &&
      (u && !h ? (o = !1) : f[1] && (o === '' || o === so(r)) && (o = !0));
  }
  return o;
}
function Gm(t, n, r = !1) {
  const o = n.propsCache,
    l = o.get(t);
  if (l) return l;
  const u = t.props,
    f = {},
    h = [];
  let d = !1;
  if (!Wt(t)) {
    const v = (b) => {
      d = !0;
      const [x, S] = Gm(b, n, !0);
      Ze(f, x), S && h.push(...S);
    };
    !r && n.mixins.length && n.mixins.forEach(v),
      t.extends && v(t.extends),
      t.mixins && t.mixins.forEach(v);
  }
  if (!u && !d) return _e(t) && o.set(t, Fo), Fo;
  if (Bt(u))
    for (let v = 0; v < u.length; v++) {
      const b = mr(u[v]);
      og(b) && (f[b] = we);
    }
  else if (u)
    for (const v in u) {
      const b = mr(v);
      if (og(b)) {
        const x = u[v],
          S = (f[b] = Bt(x) || Wt(x) ? { type: x } : Object.assign({}, x));
        if (S) {
          const A = lg(Boolean, S.type),
            L = lg(String, S.type);
          (S[0] = A > -1),
            (S[1] = L < 0 || A < L),
            (A > -1 || oe(S, 'default')) && h.push(b);
        }
      }
    }
  const g = [f, h];
  return _e(t) && o.set(t, g), g;
}
function og(t) {
  return t[0] !== '$';
}
function sg(t) {
  const n = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return n ? n[2] : t === null ? 'null' : '';
}
function ag(t, n) {
  return sg(t) === sg(n);
}
function lg(t, n) {
  return Bt(n) ? n.findIndex((r) => ag(r, t)) : Wt(n) && ag(n, t) ? 0 : -1;
}
const Vm = (t) => t[0] === '_' || t === '$stable',
  gh = (t) => (Bt(t) ? t.map(Xn) : [Xn(t)]),
  d_ = (t, n, r) => {
    if (n._n) return n;
    const o = Xt((...l) => gh(n(...l)), r);
    return (o._c = !1), o;
  },
  Km = (t, n, r) => {
    const o = t._ctx;
    for (const l in t) {
      if (Vm(l)) continue;
      const u = t[l];
      if (Wt(u)) n[l] = d_(l, u, o);
      else if (u != null) {
        const f = gh(u);
        n[l] = () => f;
      }
    }
  },
  Xm = (t, n) => {
    const r = gh(n);
    t.slots.default = () => r;
  },
  p_ = (t, n) => {
    if (t.vnode.shapeFlag & 32) {
      const r = n._;
      r ? ((t.slots = se(n)), ql(n, '_', r)) : Km(n, (t.slots = {}));
    } else (t.slots = {}), n && Xm(t, n);
    ql(t.slots, Sc, 1);
  },
  g_ = (t, n, r) => {
    const { vnode: o, slots: l } = t;
    let u = !0,
      f = we;
    if (o.shapeFlag & 32) {
      const h = n._;
      h
        ? r && h === 1
          ? (u = !1)
          : (Ze(l, n), !r && h === 1 && delete l._)
        : ((u = !n.$stable), Km(n, l)),
        (f = n);
    } else n && (Xm(t, n), (f = { default: 1 }));
    if (u) for (const h in l) !Vm(h) && !(h in f) && delete l[h];
  };
function Ym() {
  return {
    app: null,
    config: {
      isNativeTag: $x,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let v_ = 0;
function m_(t, n) {
  return function (o, l = null) {
    Wt(o) || (o = Object.assign({}, o)), l != null && !_e(l) && (l = null);
    const u = Ym(),
      f = new Set();
    let h = !1;
    const d = (u.app = {
      _uid: v_++,
      _component: o,
      _props: l,
      _container: null,
      _context: u,
      _instance: null,
      version: R_,
      get config() {
        return u.config;
      },
      set config(g) {},
      use(g, ...v) {
        return (
          f.has(g) ||
            (g && Wt(g.install)
              ? (f.add(g), g.install(d, ...v))
              : Wt(g) && (f.add(g), g(d, ...v))),
          d
        );
      },
      mixin(g) {
        return u.mixins.includes(g) || u.mixins.push(g), d;
      },
      component(g, v) {
        return v ? ((u.components[g] = v), d) : u.components[g];
      },
      directive(g, v) {
        return v ? ((u.directives[g] = v), d) : u.directives[g];
      },
      mount(g, v, b) {
        if (!h) {
          const x = It(o, l);
          return (
            (x.appContext = u),
            v && n ? n(x, g) : t(x, g, b),
            (h = !0),
            (d._container = g),
            (g.__vue_app__ = d),
            kc(x.component) || x.component.proxy
          );
        }
      },
      unmount() {
        h && (t(null, d._container), delete d._container.__vue_app__);
      },
      provide(g, v) {
        return (u.provides[g] = v), d;
      },
    });
    return d;
  };
}
function pf(t, n, r, o, l = !1) {
  if (Bt(t)) {
    t.forEach((x, S) => pf(x, n && (Bt(n) ? n[S] : n), r, o, l));
    return;
  }
  if (Zs(o) && !l) return;
  const u = o.shapeFlag & 4 ? kc(o.component) || o.component.proxy : o.el,
    f = l ? null : u,
    { i: h, r: d } = t,
    g = n && n.r,
    v = h.refs === we ? (h.refs = {}) : h.refs,
    b = h.setupState;
  if (
    (g != null &&
      g !== d &&
      (ze(g)
        ? ((v[g] = null), oe(b, g) && (b[g] = null))
        : Ae(g) && (g.value = null)),
    Wt(d))
  )
    xi(d, h, 12, [f, v]);
  else {
    const x = ze(d),
      S = Ae(d);
    if (x || S) {
      const A = () => {
        if (t.f) {
          const L = x ? (oe(b, d) ? b[d] : v[d]) : d.value;
          l
            ? Bt(L) && Kf(L, u)
            : Bt(L)
            ? L.includes(u) || L.push(u)
            : x
            ? ((v[d] = [u]), oe(b, d) && (b[d] = v[d]))
            : ((d.value = [u]), t.k && (v[t.k] = d.value));
        } else
          x
            ? ((v[d] = f), oe(b, d) && (b[d] = f))
            : S && ((d.value = f), t.k && (v[t.k] = f));
      };
      f ? ((A.id = -1), _n(A, r)) : A();
    }
  }
}
const _n = W1;
function y_(t) {
  return b_(t);
}
function b_(t, n) {
  const r = qx();
  r.__VUE__ = !0;
  const {
      insert: o,
      remove: l,
      patchProp: u,
      createElement: f,
      createText: h,
      createComment: d,
      setText: g,
      setElementText: v,
      parentNode: b,
      nextSibling: x,
      setScopeId: S = Qn,
      insertStaticContent: A,
    } = t,
    L = (
      P,
      I,
      J,
      nt = null,
      it = null,
      gt = null,
      st = !1,
      vt = null,
      _t = !!I.dynamicChildren,
    ) => {
      if (P === I) return;
      P && !dr(P, I) && ((nt = X(P)), Ft(P, it, gt, !0), (P = null)),
        I.patchFlag === -2 && ((_t = !1), (I.dynamicChildren = null));
      const { type: ht, ref: $t, shapeFlag: Nt } = I;
      switch (ht) {
        case _c:
          M(P, I, J, nt);
          break;
        case Tn:
          T(P, I, J, nt);
          break;
        case Fu:
          P == null && E(I, J, nt, st);
          break;
        case ue:
          dt(P, I, J, nt, it, gt, st, vt, _t);
          break;
        default:
          Nt & 1
            ? G(P, I, J, nt, it, gt, st, vt, _t)
            : Nt & 6
            ? j(P, I, J, nt, it, gt, st, vt, _t)
            : (Nt & 64 || Nt & 128) &&
              ht.process(P, I, J, nt, it, gt, st, vt, _t, Tt);
      }
      $t != null && it && pf($t, P && P.ref, gt, I || P, !I);
    },
    M = (P, I, J, nt) => {
      if (P == null) o((I.el = h(I.children)), J, nt);
      else {
        const it = (I.el = P.el);
        I.children !== P.children && g(it, I.children);
      }
    },
    T = (P, I, J, nt) => {
      P == null ? o((I.el = d(I.children || '')), J, nt) : (I.el = P.el);
    },
    E = (P, I, J, nt) => {
      [P.el, P.anchor] = A(P.children, I, J, nt, P.el, P.anchor);
    },
    $ = ({ el: P, anchor: I }, J, nt) => {
      let it;
      for (; P && P !== I; ) (it = x(P)), o(P, J, nt), (P = it);
      o(I, J, nt);
    },
    O = ({ el: P, anchor: I }) => {
      let J;
      for (; P && P !== I; ) (J = x(P)), l(P), (P = J);
      l(I);
    },
    G = (P, I, J, nt, it, gt, st, vt, _t) => {
      (st = st || I.type === 'svg'),
        P == null
          ? K(I, J, nt, it, gt, st, vt, _t)
          : ut(P, I, it, gt, st, vt, _t);
    },
    K = (P, I, J, nt, it, gt, st, vt) => {
      let _t, ht;
      const {
        type: $t,
        props: Nt,
        shapeFlag: Ot,
        transition: zt,
        dirs: Gt,
      } = P;
      if (
        ((_t = P.el = f(P.type, gt, Nt && Nt.is, Nt)),
        Ot & 8
          ? v(_t, P.children)
          : Ot & 16 &&
            V(
              P.children,
              _t,
              null,
              nt,
              it,
              gt && $t !== 'foreignObject',
              st,
              vt,
            ),
        Gt && Ii(P, null, nt, 'created'),
        ct(_t, P, P.scopeId, st, nt),
        Nt)
      ) {
        for (const te in Nt)
          te !== 'value' &&
            !Ll(te) &&
            u(_t, te, null, Nt[te], gt, P.children, nt, it, tt);
        'value' in Nt && u(_t, 'value', null, Nt.value),
          (ht = Nt.onVnodeBeforeMount) && ur(ht, nt, P);
      }
      Gt && Ii(P, null, nt, 'beforeMount');
      const re = (!it || (it && !it.pendingBranch)) && zt && !zt.persisted;
      re && zt.beforeEnter(_t),
        o(_t, I, J),
        ((ht = Nt && Nt.onVnodeMounted) || re || Gt) &&
          _n(() => {
            ht && ur(ht, nt, P),
              re && zt.enter(_t),
              Gt && Ii(P, null, nt, 'mounted');
          }, it);
    },
    ct = (P, I, J, nt, it) => {
      if ((J && S(P, J), nt))
        for (let gt = 0; gt < nt.length; gt++) S(P, nt[gt]);
      if (it) {
        let gt = it.subTree;
        if (I === gt) {
          const st = it.vnode;
          ct(P, st, st.scopeId, st.slotScopeIds, it.parent);
        }
      }
    },
    V = (P, I, J, nt, it, gt, st, vt, _t = 0) => {
      for (let ht = _t; ht < P.length; ht++) {
        const $t = (P[ht] = vt ? pi(P[ht]) : Xn(P[ht]));
        L(null, $t, I, J, nt, it, gt, st, vt);
      }
    },
    ut = (P, I, J, nt, it, gt, st) => {
      const vt = (I.el = P.el);
      let { patchFlag: _t, dynamicChildren: ht, dirs: $t } = I;
      _t |= P.patchFlag & 16;
      const Nt = P.props || we,
        Ot = I.props || we;
      let zt;
      J && qi(J, !1),
        (zt = Ot.onVnodeBeforeUpdate) && ur(zt, J, I, P),
        $t && Ii(I, P, J, 'beforeUpdate'),
        J && qi(J, !0);
      const Gt = it && I.type !== 'foreignObject';
      if (
        (ht
          ? ft(P.dynamicChildren, ht, vt, J, nt, Gt, gt)
          : st || et(P, I, vt, null, J, nt, Gt, gt, !1),
        _t > 0)
      ) {
        if (_t & 16) kt(vt, I, Nt, Ot, J, nt, it);
        else if (
          (_t & 2 &&
            Nt.class !== Ot.class &&
            u(vt, 'class', null, Ot.class, it),
          _t & 4 && u(vt, 'style', Nt.style, Ot.style, it),
          _t & 8)
        ) {
          const re = I.dynamicProps;
          for (let te = 0; te < re.length; te++) {
            const ce = re[te],
              Qt = Nt[ce],
              yn = Ot[ce];
            (yn !== Qt || ce === 'value') &&
              u(vt, ce, Qt, yn, it, P.children, J, nt, tt);
          }
        }
        _t & 1 && P.children !== I.children && v(vt, I.children);
      } else !st && ht == null && kt(vt, I, Nt, Ot, J, nt, it);
      ((zt = Ot.onVnodeUpdated) || $t) &&
        _n(() => {
          zt && ur(zt, J, I, P), $t && Ii(I, P, J, 'updated');
        }, nt);
    },
    ft = (P, I, J, nt, it, gt, st) => {
      for (let vt = 0; vt < I.length; vt++) {
        const _t = P[vt],
          ht = I[vt],
          $t =
            _t.el && (_t.type === ue || !dr(_t, ht) || _t.shapeFlag & 70)
              ? b(_t.el)
              : J;
        L(_t, ht, $t, null, nt, it, gt, st, !0);
      }
    },
    kt = (P, I, J, nt, it, gt, st) => {
      if (J !== nt) {
        if (J !== we)
          for (const vt in J)
            !Ll(vt) &&
              !(vt in nt) &&
              u(P, vt, J[vt], null, st, I.children, it, gt, tt);
        for (const vt in nt) {
          if (Ll(vt)) continue;
          const _t = nt[vt],
            ht = J[vt];
          _t !== ht &&
            vt !== 'value' &&
            u(P, vt, ht, _t, st, I.children, it, gt, tt);
        }
        'value' in nt && u(P, 'value', J.value, nt.value);
      }
    },
    dt = (P, I, J, nt, it, gt, st, vt, _t) => {
      const ht = (I.el = P ? P.el : h('')),
        $t = (I.anchor = P ? P.anchor : h(''));
      let { patchFlag: Nt, dynamicChildren: Ot, slotScopeIds: zt } = I;
      zt && (vt = vt ? vt.concat(zt) : zt),
        P == null
          ? (o(ht, J, nt),
            o($t, J, nt),
            V(I.children, J, $t, it, gt, st, vt, _t))
          : Nt > 0 && Nt & 64 && Ot && P.dynamicChildren
          ? (ft(P.dynamicChildren, Ot, J, it, gt, st, vt),
            (I.key != null || (it && I === it.subTree)) && Zm(P, I, !0))
          : et(P, I, J, $t, it, gt, st, vt, _t);
    },
    j = (P, I, J, nt, it, gt, st, vt, _t) => {
      (I.slotScopeIds = vt),
        P == null
          ? I.shapeFlag & 512
            ? it.ctx.activate(I, J, nt, st, _t)
            : z(I, J, nt, it, gt, st, _t)
          : k(P, I, _t);
    },
    z = (P, I, J, nt, it, gt, st) => {
      const vt = (P.component = T_(P, nt, it));
      if ((wc(P) && (vt.ctx.renderer = Tt), E_(vt), vt.asyncDep)) {
        if ((it && it.registerDep(vt, q), !P.el)) {
          const _t = (vt.subTree = It(Tn));
          T(null, _t, I, J);
        }
        return;
      }
      q(vt, P, I, J, it, gt, st);
    },
    k = (P, I, J) => {
      const nt = (I.component = P.component);
      if (D1(P, I, J))
        if (nt.asyncDep && !nt.asyncResolved) {
          W(nt, I, J);
          return;
        } else (nt.next = I), L1(nt.update), nt.update();
      else (I.el = P.el), (nt.vnode = I);
    },
    q = (P, I, J, nt, it, gt, st) => {
      const vt = () => {
          if (P.isMounted) {
            let { next: $t, bu: Nt, u: Ot, parent: zt, vnode: Gt } = P,
              re = $t,
              te;
            qi(P, !1),
              $t ? (($t.el = Gt.el), W(P, $t, st)) : ($t = Gt),
              Nt && Al(Nt),
              (te = $t.props && $t.props.onVnodeBeforeUpdate) &&
                ur(te, zt, $t, Gt),
              qi(P, !0);
            const ce = Du(P),
              Qt = P.subTree;
            (P.subTree = ce),
              L(Qt, ce, b(Qt.el), X(Qt), P, it, gt),
              ($t.el = ce.el),
              re === null && ch(P, ce.el),
              Ot && _n(Ot, it),
              (te = $t.props && $t.props.onVnodeUpdated) &&
                _n(() => ur(te, zt, $t, Gt), it);
          } else {
            let $t;
            const { el: Nt, props: Ot } = I,
              { bm: zt, m: Gt, parent: re } = P,
              te = Zs(I);
            if (
              (qi(P, !1),
              zt && Al(zt),
              !te && ($t = Ot && Ot.onVnodeBeforeMount) && ur($t, re, I),
              qi(P, !0),
              Nt && At)
            ) {
              const ce = () => {
                (P.subTree = Du(P)), At(Nt, P.subTree, P, it, null);
              };
              te
                ? I.type.__asyncLoader().then(() => !P.isUnmounted && ce())
                : ce();
            } else {
              const ce = (P.subTree = Du(P));
              L(null, ce, J, nt, P, it, gt), (I.el = ce.el);
            }
            if ((Gt && _n(Gt, it), !te && ($t = Ot && Ot.onVnodeMounted))) {
              const ce = I;
              _n(() => ur($t, re, ce), it);
            }
            (I.shapeFlag & 256 ||
              (re && Zs(re.vnode) && re.vnode.shapeFlag & 256)) &&
              P.a &&
              _n(P.a, it),
              (P.isMounted = !0),
              (I = J = nt = null);
          }
        },
        _t = (P.effect = new Jf(vt, () => lh(ht), P.scope)),
        ht = (P.update = () => _t.run());
      (ht.id = P.uid), qi(P, !0), ht();
    },
    W = (P, I, J) => {
      I.component = P;
      const nt = P.vnode.props;
      (P.vnode = I),
        (P.next = null),
        h_(P, I.props, nt, J),
        g_(P, I.children, J),
        os(),
        Jp(),
        ss();
    },
    et = (P, I, J, nt, it, gt, st, vt, _t = !1) => {
      const ht = P && P.children,
        $t = P ? P.shapeFlag : 0,
        Nt = I.children,
        { patchFlag: Ot, shapeFlag: zt } = I;
      if (Ot > 0) {
        if (Ot & 128) {
          Ct(ht, Nt, J, nt, it, gt, st, vt, _t);
          return;
        } else if (Ot & 256) {
          mt(ht, Nt, J, nt, it, gt, st, vt, _t);
          return;
        }
      }
      zt & 8
        ? ($t & 16 && tt(ht, it, gt), Nt !== ht && v(J, Nt))
        : $t & 16
        ? zt & 16
          ? Ct(ht, Nt, J, nt, it, gt, st, vt, _t)
          : tt(ht, it, gt, !0)
        : ($t & 8 && v(J, ''), zt & 16 && V(Nt, J, nt, it, gt, st, vt, _t));
    },
    mt = (P, I, J, nt, it, gt, st, vt, _t) => {
      (P = P || Fo), (I = I || Fo);
      const ht = P.length,
        $t = I.length,
        Nt = Math.min(ht, $t);
      let Ot;
      for (Ot = 0; Ot < Nt; Ot++) {
        const zt = (I[Ot] = _t ? pi(I[Ot]) : Xn(I[Ot]));
        L(P[Ot], zt, J, null, it, gt, st, vt, _t);
      }
      ht > $t ? tt(P, it, gt, !0, !1, Nt) : V(I, J, nt, it, gt, st, vt, _t, Nt);
    },
    Ct = (P, I, J, nt, it, gt, st, vt, _t) => {
      let ht = 0;
      const $t = I.length;
      let Nt = P.length - 1,
        Ot = $t - 1;
      for (; ht <= Nt && ht <= Ot; ) {
        const zt = P[ht],
          Gt = (I[ht] = _t ? pi(I[ht]) : Xn(I[ht]));
        if (dr(zt, Gt)) L(zt, Gt, J, null, it, gt, st, vt, _t);
        else break;
        ht++;
      }
      for (; ht <= Nt && ht <= Ot; ) {
        const zt = P[Nt],
          Gt = (I[Ot] = _t ? pi(I[Ot]) : Xn(I[Ot]));
        if (dr(zt, Gt)) L(zt, Gt, J, null, it, gt, st, vt, _t);
        else break;
        Nt--, Ot--;
      }
      if (ht > Nt) {
        if (ht <= Ot) {
          const zt = Ot + 1,
            Gt = zt < $t ? I[zt].el : nt;
          for (; ht <= Ot; )
            L(
              null,
              (I[ht] = _t ? pi(I[ht]) : Xn(I[ht])),
              J,
              Gt,
              it,
              gt,
              st,
              vt,
              _t,
            ),
              ht++;
        }
      } else if (ht > Ot) for (; ht <= Nt; ) Ft(P[ht], it, gt, !0), ht++;
      else {
        const zt = ht,
          Gt = ht,
          re = new Map();
        for (ht = Gt; ht <= Ot; ht++) {
          const ye = (I[ht] = _t ? pi(I[ht]) : Xn(I[ht]));
          ye.key != null && re.set(ye.key, ht);
        }
        let te,
          ce = 0;
        const Qt = Ot - Gt + 1;
        let yn = !1,
          An = 0;
        const We = new Array(Qt);
        for (ht = 0; ht < Qt; ht++) We[ht] = 0;
        for (ht = zt; ht <= Nt; ht++) {
          const ye = P[ht];
          if (ce >= Qt) {
            Ft(ye, it, gt, !0);
            continue;
          }
          let on;
          if (ye.key != null) on = re.get(ye.key);
          else
            for (te = Gt; te <= Ot; te++)
              if (We[te - Gt] === 0 && dr(ye, I[te])) {
                on = te;
                break;
              }
          on === void 0
            ? Ft(ye, it, gt, !0)
            : ((We[on - Gt] = ht + 1),
              on >= An ? (An = on) : (yn = !0),
              L(ye, I[on], J, null, it, gt, st, vt, _t),
              ce++);
        }
        const co = yn ? w_(We) : Fo;
        for (te = co.length - 1, ht = Qt - 1; ht >= 0; ht--) {
          const ye = Gt + ht,
            on = I[ye],
            wt = ye + 1 < $t ? I[ye + 1].el : nt;
          We[ht] === 0
            ? L(null, on, J, wt, it, gt, st, vt, _t)
            : yn && (te < 0 || ht !== co[te] ? Rt(on, J, wt, 2) : te--);
        }
      }
    },
    Rt = (P, I, J, nt, it = null) => {
      const {
        el: gt,
        type: st,
        transition: vt,
        children: _t,
        shapeFlag: ht,
      } = P;
      if (ht & 6) {
        Rt(P.component.subTree, I, J, nt);
        return;
      }
      if (ht & 128) {
        P.suspense.move(I, J, nt);
        return;
      }
      if (ht & 64) {
        st.move(P, I, J, Tt);
        return;
      }
      if (st === ue) {
        o(gt, I, J);
        for (let Nt = 0; Nt < _t.length; Nt++) Rt(_t[Nt], I, J, nt);
        o(P.anchor, I, J);
        return;
      }
      if (st === Fu) {
        $(P, I, J);
        return;
      }
      if (nt !== 2 && ht & 1 && vt)
        if (nt === 0)
          vt.beforeEnter(gt), o(gt, I, J), _n(() => vt.enter(gt), it);
        else {
          const { leave: Nt, delayLeave: Ot, afterLeave: zt } = vt,
            Gt = () => o(gt, I, J),
            re = () => {
              Nt(gt, () => {
                Gt(), zt && zt();
              });
            };
          Ot ? Ot(gt, Gt, re) : re();
        }
      else o(gt, I, J);
    },
    Ft = (P, I, J, nt = !1, it = !1) => {
      const {
        type: gt,
        props: st,
        ref: vt,
        children: _t,
        dynamicChildren: ht,
        shapeFlag: $t,
        patchFlag: Nt,
        dirs: Ot,
      } = P;
      if ((vt != null && pf(vt, null, J, P, !0), $t & 256)) {
        I.ctx.deactivate(P);
        return;
      }
      const zt = $t & 1 && Ot,
        Gt = !Zs(P);
      let re;
      if ((Gt && (re = st && st.onVnodeBeforeUnmount) && ur(re, I, P), $t & 6))
        Q(P.component, J, nt);
      else {
        if ($t & 128) {
          P.suspense.unmount(J, nt);
          return;
        }
        zt && Ii(P, null, I, 'beforeUnmount'),
          $t & 64
            ? P.type.remove(P, I, J, it, Tt, nt)
            : ht && (gt !== ue || (Nt > 0 && Nt & 64))
            ? tt(ht, I, J, !1, !0)
            : ((gt === ue && Nt & 384) || (!it && $t & 16)) && tt(_t, I, J),
          nt && jt(P);
      }
      ((Gt && (re = st && st.onVnodeUnmounted)) || zt) &&
        _n(() => {
          re && ur(re, I, P), zt && Ii(P, null, I, 'unmounted');
        }, J);
    },
    jt = (P) => {
      const { type: I, el: J, anchor: nt, transition: it } = P;
      if (I === ue) {
        Zt(J, nt);
        return;
      }
      if (I === Fu) {
        O(P);
        return;
      }
      const gt = () => {
        l(J), it && !it.persisted && it.afterLeave && it.afterLeave();
      };
      if (P.shapeFlag & 1 && it && !it.persisted) {
        const { leave: st, delayLeave: vt } = it,
          _t = () => st(J, gt);
        vt ? vt(P.el, gt, _t) : _t();
      } else gt();
    },
    Zt = (P, I) => {
      let J;
      for (; P !== I; ) (J = x(P)), l(P), (P = J);
      l(I);
    },
    Q = (P, I, J) => {
      const { bum: nt, scope: it, update: gt, subTree: st, um: vt } = P;
      nt && Al(nt),
        it.stop(),
        gt && ((gt.active = !1), Ft(st, P, I, J)),
        vt && _n(vt, I),
        _n(() => {
          P.isUnmounted = !0;
        }, I),
        I &&
          I.pendingBranch &&
          !I.isUnmounted &&
          P.asyncDep &&
          !P.asyncResolved &&
          P.suspenseId === I.pendingId &&
          (I.deps--, I.deps === 0 && I.resolve());
    },
    tt = (P, I, J, nt = !1, it = !1, gt = 0) => {
      for (let st = gt; st < P.length; st++) Ft(P[st], I, J, nt, it);
    },
    X = (P) =>
      P.shapeFlag & 6
        ? X(P.component.subTree)
        : P.shapeFlag & 128
        ? P.suspense.next()
        : x(P.anchor || P.el),
    ot = (P, I, J) => {
      P == null
        ? I._vnode && Ft(I._vnode, null, null, !0)
        : L(I._vnode || null, P, I, null, null, null, J),
        Jp(),
        Mm(),
        (I._vnode = P);
    },
    Tt = {
      p: L,
      um: Ft,
      m: Rt,
      r: jt,
      mt: z,
      mc: V,
      pc: et,
      pbc: ft,
      n: X,
      o: t,
    };
  let pe, At;
  return (
    n && ([pe, At] = n(Tt)), { render: ot, hydrate: pe, createApp: m_(ot, pe) }
  );
}
function qi({ effect: t, update: n }, r) {
  t.allowRecurse = n.allowRecurse = r;
}
function Zm(t, n, r = !1) {
  const o = t.children,
    l = n.children;
  if (Bt(o) && Bt(l))
    for (let u = 0; u < o.length; u++) {
      const f = o[u];
      let h = l[u];
      h.shapeFlag & 1 &&
        !h.dynamicChildren &&
        ((h.patchFlag <= 0 || h.patchFlag === 32) &&
          ((h = l[u] = pi(l[u])), (h.el = f.el)),
        r || Zm(f, h)),
        h.type === _c && (h.el = f.el);
    }
}
function w_(t) {
  const n = t.slice(),
    r = [0];
  let o, l, u, f, h;
  const d = t.length;
  for (o = 0; o < d; o++) {
    const g = t[o];
    if (g !== 0) {
      if (((l = r[r.length - 1]), t[l] < g)) {
        (n[o] = l), r.push(o);
        continue;
      }
      for (u = 0, f = r.length - 1; u < f; )
        (h = (u + f) >> 1), t[r[h]] < g ? (u = h + 1) : (f = h);
      g < t[r[u]] && (u > 0 && (n[o] = r[u - 1]), (r[u] = o));
    }
  }
  for (u = r.length, f = r[u - 1]; u-- > 0; ) (r[u] = f), (f = n[f]);
  return r;
}
const x_ = (t) => t.__isTeleport,
  ue = Symbol(void 0),
  _c = Symbol(void 0),
  Tn = Symbol(void 0),
  Fu = Symbol(void 0),
  Qs = [];
let Hn = null;
function at(t = !1) {
  Qs.push((Hn = t ? null : []));
}
function Jm() {
  Qs.pop(), (Hn = Qs[Qs.length - 1] || null);
}
let Xo = 1;
function cg(t) {
  Xo += t;
}
function Qm(t) {
  return (
    (t.dynamicChildren = Xo > 0 ? Hn || Fo : null),
    Jm(),
    Xo > 0 && Hn && Hn.push(t),
    t
  );
}
function Lt(t, n, r, o, l, u) {
  return Qm(lt(t, n, r, o, l, u, !0));
}
function Yt(t, n, r, o, l) {
  return Qm(It(t, n, r, o, l, !0));
}
function ca(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function dr(t, n) {
  return t.type === n.type && t.key === n.key;
}
const Sc = '__vInternal',
  t0 = ({ key: t }) => t ?? null,
  Nl = ({ ref: t, ref_key: n, ref_for: r }) =>
    t != null
      ? ze(t) || Ae(t) || Wt(t)
        ? { i: Ye, r: t, k: n, f: !!r }
        : t
      : null;
function lt(
  t,
  n = null,
  r = null,
  o = 0,
  l = null,
  u = t === ue ? 0 : 1,
  f = !1,
  h = !1,
) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: n,
    key: n && t0(n),
    ref: n && Nl(n),
    scopeId: bc,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: u,
    patchFlag: o,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Ye,
  };
  return (
    h
      ? (vh(d, r), u & 128 && t.normalize(d))
      : r && (d.shapeFlag |= ze(r) ? 8 : 16),
    Xo > 0 &&
      !f &&
      Hn &&
      (d.patchFlag > 0 || u & 6) &&
      d.patchFlag !== 32 &&
      Hn.push(d),
    d
  );
}
const It = __;
function __(t, n = null, r = null, o = 0, l = null, u = !1) {
  if (((!t || t === i_) && (t = Tn), ca(t))) {
    const h = ki(t, n, !0);
    return (
      r && vh(h, r),
      Xo > 0 &&
        !u &&
        Hn &&
        (h.shapeFlag & 6 ? (Hn[Hn.indexOf(t)] = h) : Hn.push(h)),
      (h.patchFlag |= -2),
      h
    );
  }
  if ((N_(t) && (t = t.__vccOpts), n)) {
    n = S_(n);
    let { class: h, style: d } = n;
    h && !ze(h) && (n.class = ve(h)),
      _e(d) && (Sm(d) && !Bt(d) && (d = Ze({}, d)), (n.style = Cn(d)));
  }
  const f = ze(t) ? 1 : R1(t) ? 128 : x_(t) ? 64 : _e(t) ? 4 : Wt(t) ? 2 : 0;
  return lt(t, n, r, o, l, f, u, !0);
}
function S_(t) {
  return t ? (Sm(t) || Sc in t ? Ze({}, t) : t) : null;
}
function ki(t, n, r = !1) {
  const { props: o, ref: l, patchFlag: u, children: f } = t,
    h = n ? _i(o || {}, n) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: h,
    key: h && t0(h),
    ref:
      n && n.ref
        ? r && l
          ? Bt(l)
            ? l.concat(Nl(n))
            : [l, Nl(n)]
          : Nl(n)
        : l,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: f,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: n && t.type !== ue ? (u === -1 ? 16 : u | 16) : u,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && ki(t.ssContent),
    ssFallback: t.ssFallback && ki(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce,
  };
}
function dn(t = ' ', n = 0) {
  return It(_c, null, t, n);
}
function ee(t = '', n = !1) {
  return n ? (at(), Yt(Tn, null, t)) : It(Tn, null, t);
}
function Xn(t) {
  return t == null || typeof t == 'boolean'
    ? It(Tn)
    : Bt(t)
    ? It(ue, null, t.slice())
    : typeof t == 'object'
    ? pi(t)
    : It(_c, null, String(t));
}
function pi(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : ki(t);
}
function vh(t, n) {
  let r = 0;
  const { shapeFlag: o } = t;
  if (n == null) n = null;
  else if (Bt(n)) r = 16;
  else if (typeof n == 'object')
    if (o & 65) {
      const l = n.default;
      l && (l._c && (l._d = !1), vh(t, l()), l._c && (l._d = !0));
      return;
    } else {
      r = 32;
      const l = n._;
      !l && !(Sc in n)
        ? (n._ctx = Ye)
        : l === 3 &&
          Ye &&
          (Ye.slots._ === 1 ? (n._ = 1) : ((n._ = 2), (t.patchFlag |= 1024)));
    }
  else
    Wt(n)
      ? ((n = { default: n, _ctx: Ye }), (r = 32))
      : ((n = String(n)), o & 64 ? ((r = 16), (n = [dn(n)])) : (r = 8));
  (t.children = n), (t.shapeFlag |= r);
}
function _i(...t) {
  const n = {};
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    for (const l in o)
      if (l === 'class')
        n.class !== o.class && (n.class = ve([n.class, o.class]));
      else if (l === 'style') n.style = Cn([n.style, o.style]);
      else if (fc(l)) {
        const u = n[l],
          f = o[l];
        f &&
          u !== f &&
          !(Bt(u) && u.includes(f)) &&
          (n[l] = u ? [].concat(u, f) : f);
      } else l !== '' && (n[l] = o[l]);
  }
  return n;
}
function ur(t, n, r, o = null) {
  Bn(t, n, 7, [r, o]);
}
const k_ = Ym();
let C_ = 0;
function T_(t, n, r) {
  const o = t.type,
    l = (n ? n.appContext : t.appContext) || k_,
    u = {
      uid: C_++,
      vnode: t,
      type: o,
      parent: n,
      appContext: l,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Hx(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: n ? n.provides : Object.create(l.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Gm(o, l),
      emitsOptions: Pm(o, l),
      emit: null,
      emitted: null,
      propsDefaults: we,
      inheritAttrs: o.inheritAttrs,
      ctx: we,
      data: we,
      props: we,
      attrs: we,
      slots: we,
      refs: we,
      setupState: we,
      setupContext: null,
      suspense: r,
      suspenseId: r ? r.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (u.ctx = { _: u }),
    (u.root = n ? n.root : u),
    (u.emit = M1.bind(null, u)),
    t.ce && t.ce(u),
    u
  );
}
let Oe = null;
const _a = () => Oe || Ye,
  Yo = (t) => {
    (Oe = t), t.scope.on();
  },
  Ji = () => {
    Oe && Oe.scope.off(), (Oe = null);
  };
function e0(t) {
  return t.vnode.shapeFlag & 4;
}
let ua = !1;
function E_(t, n = !1) {
  ua = n;
  const { props: r, children: o } = t.vnode,
    l = e0(t);
  f_(t, r, l, n), p_(t, o);
  const u = l ? L_(t, n) : void 0;
  return (ua = !1), u;
}
function L_(t, n) {
  const r = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = rh(new Proxy(t.ctx, o_)));
  const { setup: o } = r;
  if (o) {
    const l = (t.setupContext = o.length > 1 ? r0(t) : null);
    Yo(t), os();
    const u = xi(o, t, 0, [t.props, l]);
    if ((ss(), Ji(), lm(u))) {
      if ((u.then(Ji, Ji), n))
        return u
          .then((f) => {
            gf(t, f, n);
          })
          .catch((f) => {
            xa(f, t, 0);
          });
      t.asyncDep = u;
    } else gf(t, u, n);
  } else n0(t, n);
}
function gf(t, n, r) {
  Wt(n)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = n)
      : (t.render = n)
    : _e(n) && (t.setupState = Cm(n)),
    n0(t, r);
}
let ug;
function n0(t, n, r) {
  const o = t.type;
  if (!t.render) {
    if (!n && ug && !o.render) {
      const l = o.template || ph(t).template;
      if (l) {
        const { isCustomElement: u, compilerOptions: f } = t.appContext.config,
          { delimiters: h, compilerOptions: d } = o,
          g = Ze(Ze({ isCustomElement: u, delimiters: h }, f), d);
        o.render = ug(l, g);
      }
    }
    t.render = o.render || Qn;
  }
  Yo(t), os(), s_(t), ss(), Ji();
}
function A_(t) {
  return new Proxy(t.attrs, {
    get(n, r) {
      return Ln(t, 'get', '$attrs'), n[r];
    },
  });
}
function r0(t) {
  const n = (o) => {
    t.exposed = o || {};
  };
  let r;
  return {
    get attrs() {
      return r || (r = A_(t));
    },
    slots: t.slots,
    emit: t.emit,
    expose: n,
  };
}
function kc(t) {
  if (t.exposed)
    return (
      t.exposeProxy ||
      (t.exposeProxy = new Proxy(Cm(rh(t.exposed)), {
        get(n, r) {
          if (r in n) return n[r];
          if (r in Js) return Js[r](t);
        },
        has(n, r) {
          return r in n || r in Js;
        },
      }))
    );
}
function M_(t, n = !0) {
  return Wt(t) ? t.displayName || t.name : t.name || (n && t.__name);
}
function N_(t) {
  return Wt(t) && '__vccOpts' in t;
}
const xt = (t, n) => C1(t, n, ua);
function P_() {
  return O_().attrs;
}
function O_() {
  const t = _a();
  return t.setupContext || (t.setupContext = r0(t));
}
function Sa(t, n, r) {
  const o = arguments.length;
  return o === 2
    ? _e(n) && !Bt(n)
      ? ca(n)
        ? It(t, null, [n])
        : It(t, n)
      : It(t, null, n)
    : (o > 3
        ? (r = Array.prototype.slice.call(arguments, 2))
        : o === 3 && ca(r) && (r = [r]),
      It(t, n, r));
}
const $_ = Symbol(''),
  D_ = () => Fr($_),
  R_ = '3.2.47',
  z_ = 'http://www.w3.org/2000/svg',
  Gi = typeof document < 'u' ? document : null,
  fg = Gi && Gi.createElement('template'),
  F_ = {
    insert: (t, n, r) => {
      n.insertBefore(t, r || null);
    },
    remove: (t) => {
      const n = t.parentNode;
      n && n.removeChild(t);
    },
    createElement: (t, n, r, o) => {
      const l = n
        ? Gi.createElementNS(z_, t)
        : Gi.createElement(t, r ? { is: r } : void 0);
      return (
        t === 'select' &&
          o &&
          o.multiple != null &&
          l.setAttribute('multiple', o.multiple),
        l
      );
    },
    createText: (t) => Gi.createTextNode(t),
    createComment: (t) => Gi.createComment(t),
    setText: (t, n) => {
      t.nodeValue = n;
    },
    setElementText: (t, n) => {
      t.textContent = n;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => Gi.querySelector(t),
    setScopeId(t, n) {
      t.setAttribute(n, '');
    },
    insertStaticContent(t, n, r, o, l, u) {
      const f = r ? r.previousSibling : n.lastChild;
      if (l && (l === u || l.nextSibling))
        for (
          ;
          n.insertBefore(l.cloneNode(!0), r),
            !(l === u || !(l = l.nextSibling));

        );
      else {
        fg.innerHTML = o ? `<svg>${t}</svg>` : t;
        const h = fg.content;
        if (o) {
          const d = h.firstChild;
          for (; d.firstChild; ) h.appendChild(d.firstChild);
          h.removeChild(d);
        }
        n.insertBefore(h, r);
      }
      return [
        f ? f.nextSibling : n.firstChild,
        r ? r.previousSibling : n.lastChild,
      ];
    },
  };
function I_(t, n, r) {
  const o = t._vtc;
  o && (n = (n ? [n, ...o] : [...o]).join(' ')),
    n == null
      ? t.removeAttribute('class')
      : r
      ? t.setAttribute('class', n)
      : (t.className = n);
}
function q_(t, n, r) {
  const o = t.style,
    l = ze(r);
  if (r && !l) {
    if (n && !ze(n)) for (const u in n) r[u] == null && vf(o, u, '');
    for (const u in r) vf(o, u, r[u]);
  } else {
    const u = o.display;
    l ? n !== r && (o.cssText = r) : n && t.removeAttribute('style'),
      '_vod' in t && (o.display = u);
  }
}
const hg = /\s*!important$/;
function vf(t, n, r) {
  if (Bt(r)) r.forEach((o) => vf(t, n, o));
  else if ((r == null && (r = ''), n.startsWith('--'))) t.setProperty(n, r);
  else {
    const o = H_(t, n);
    hg.test(r)
      ? t.setProperty(so(o), r.replace(hg, ''), 'important')
      : (t[o] = r);
  }
}
const dg = ['Webkit', 'Moz', 'ms'],
  Iu = {};
function H_(t, n) {
  const r = Iu[n];
  if (r) return r;
  let o = mr(n);
  if (o !== 'filter' && o in t) return (Iu[n] = o);
  o = pc(o);
  for (let l = 0; l < dg.length; l++) {
    const u = dg[l] + o;
    if (u in t) return (Iu[n] = u);
  }
  return n;
}
const pg = 'http://www.w3.org/1999/xlink';
function B_(t, n, r, o, l) {
  if (o && n.startsWith('xlink:'))
    r == null
      ? t.removeAttributeNS(pg, n.slice(6, n.length))
      : t.setAttributeNS(pg, n, r);
  else {
    const u = Ox(n);
    r == null || (u && !om(r))
      ? t.removeAttribute(n)
      : t.setAttribute(n, u ? '' : r);
  }
}
function W_(t, n, r, o, l, u, f) {
  if (n === 'innerHTML' || n === 'textContent') {
    o && f(o, l, u), (t[n] = r ?? '');
    return;
  }
  if (n === 'value' && t.tagName !== 'PROGRESS' && !t.tagName.includes('-')) {
    t._value = r;
    const d = r ?? '';
    (t.value !== d || t.tagName === 'OPTION') && (t.value = d),
      r == null && t.removeAttribute(n);
    return;
  }
  let h = !1;
  if (r === '' || r == null) {
    const d = typeof t[n];
    d === 'boolean'
      ? (r = om(r))
      : r == null && d === 'string'
      ? ((r = ''), (h = !0))
      : d === 'number' && ((r = 0), (h = !0));
  }
  try {
    t[n] = r;
  } catch {}
  h && t.removeAttribute(n);
}
function Do(t, n, r, o) {
  t.addEventListener(n, r, o);
}
function U_(t, n, r, o) {
  t.removeEventListener(n, r, o);
}
function j_(t, n, r, o, l = null) {
  const u = t._vei || (t._vei = {}),
    f = u[n];
  if (o && f) f.value = o;
  else {
    const [h, d] = G_(n);
    if (o) {
      const g = (u[n] = X_(o, l));
      Do(t, h, g, d);
    } else f && (U_(t, h, f, d), (u[n] = void 0));
  }
}
const gg = /(?:Once|Passive|Capture)$/;
function G_(t) {
  let n;
  if (gg.test(t)) {
    n = {};
    let o;
    for (; (o = t.match(gg)); )
      (t = t.slice(0, t.length - o[0].length)), (n[o[0].toLowerCase()] = !0);
  }
  return [t[2] === ':' ? t.slice(3) : so(t.slice(2)), n];
}
let qu = 0;
const V_ = Promise.resolve(),
  K_ = () => qu || (V_.then(() => (qu = 0)), (qu = Date.now()));
function X_(t, n) {
  const r = (o) => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= r.attached) return;
    Bn(Y_(o, r.value), n, 5, [o]);
  };
  return (r.value = t), (r.attached = K_()), r;
}
function Y_(t, n) {
  if (Bt(n)) {
    const r = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        r.call(t), (t._stopped = !0);
      }),
      n.map((o) => (l) => !l._stopped && o && o(l))
    );
  } else return n;
}
const vg = /^on[a-z]/,
  Z_ = (t, n, r, o, l = !1, u, f, h, d) => {
    n === 'class'
      ? I_(t, o, l)
      : n === 'style'
      ? q_(t, r, o)
      : fc(n)
      ? Vf(n) || j_(t, n, r, o, f)
      : (
          n[0] === '.'
            ? ((n = n.slice(1)), !0)
            : n[0] === '^'
            ? ((n = n.slice(1)), !1)
            : J_(t, n, o, l)
        )
      ? W_(t, n, o, u, f, h, d)
      : (n === 'true-value'
          ? (t._trueValue = o)
          : n === 'false-value' && (t._falseValue = o),
        B_(t, n, o, l));
  };
function J_(t, n, r, o) {
  return o
    ? !!(
        n === 'innerHTML' ||
        n === 'textContent' ||
        (n in t && vg.test(n) && Wt(r))
      )
    : n === 'spellcheck' ||
      n === 'draggable' ||
      n === 'translate' ||
      n === 'form' ||
      (n === 'list' && t.tagName === 'INPUT') ||
      (n === 'type' && t.tagName === 'TEXTAREA') ||
      (vg.test(n) && ze(r))
    ? !1
    : n in t;
}
const ci = 'transition',
  Ws = 'animation',
  mh = (t, { slots: n }) => Sa(Rm, Q_(t), n);
mh.displayName = 'Transition';
const i0 = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
mh.props = Ze({}, Rm.props, i0);
const Hi = (t, n = []) => {
    Bt(t) ? t.forEach((r) => r(...n)) : t && t(...n);
  },
  mg = (t) => (t ? (Bt(t) ? t.some((n) => n.length > 1) : t.length > 1) : !1);
function Q_(t) {
  const n = {};
  for (const dt in t) dt in i0 || (n[dt] = t[dt]);
  if (t.css === !1) return n;
  const {
      name: r = 'v',
      type: o,
      duration: l,
      enterFromClass: u = `${r}-enter-from`,
      enterActiveClass: f = `${r}-enter-active`,
      enterToClass: h = `${r}-enter-to`,
      appearFromClass: d = u,
      appearActiveClass: g = f,
      appearToClass: v = h,
      leaveFromClass: b = `${r}-leave-from`,
      leaveActiveClass: x = `${r}-leave-active`,
      leaveToClass: S = `${r}-leave-to`,
    } = t,
    A = tS(l),
    L = A && A[0],
    M = A && A[1],
    {
      onBeforeEnter: T,
      onEnter: E,
      onEnterCancelled: $,
      onLeave: O,
      onLeaveCancelled: G,
      onBeforeAppear: K = T,
      onAppear: ct = E,
      onAppearCancelled: V = $,
    } = n,
    ut = (dt, j, z) => {
      Bi(dt, j ? v : h), Bi(dt, j ? g : f), z && z();
    },
    ft = (dt, j) => {
      (dt._isLeaving = !1), Bi(dt, b), Bi(dt, S), Bi(dt, x), j && j();
    },
    kt = (dt) => (j, z) => {
      const k = dt ? ct : E,
        q = () => ut(j, dt, z);
      Hi(k, [j, q]),
        yg(() => {
          Bi(j, dt ? d : u), ui(j, dt ? v : h), mg(k) || bg(j, o, L, q);
        });
    };
  return Ze(n, {
    onBeforeEnter(dt) {
      Hi(T, [dt]), ui(dt, u), ui(dt, f);
    },
    onBeforeAppear(dt) {
      Hi(K, [dt]), ui(dt, d), ui(dt, g);
    },
    onEnter: kt(!1),
    onAppear: kt(!0),
    onLeave(dt, j) {
      dt._isLeaving = !0;
      const z = () => ft(dt, j);
      ui(dt, b),
        rS(),
        ui(dt, x),
        yg(() => {
          dt._isLeaving && (Bi(dt, b), ui(dt, S), mg(O) || bg(dt, o, M, z));
        }),
        Hi(O, [dt, z]);
    },
    onEnterCancelled(dt) {
      ut(dt, !1), Hi($, [dt]);
    },
    onAppearCancelled(dt) {
      ut(dt, !0), Hi(V, [dt]);
    },
    onLeaveCancelled(dt) {
      ft(dt), Hi(G, [dt]);
    },
  });
}
function tS(t) {
  if (t == null) return null;
  if (_e(t)) return [Hu(t.enter), Hu(t.leave)];
  {
    const n = Hu(t);
    return [n, n];
  }
}
function Hu(t) {
  return fm(t);
}
function ui(t, n) {
  n.split(/\s+/).forEach((r) => r && t.classList.add(r)),
    (t._vtc || (t._vtc = new Set())).add(n);
}
function Bi(t, n) {
  n.split(/\s+/).forEach((o) => o && t.classList.remove(o));
  const { _vtc: r } = t;
  r && (r.delete(n), r.size || (t._vtc = void 0));
}
function yg(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let eS = 0;
function bg(t, n, r, o) {
  const l = (t._endId = ++eS),
    u = () => {
      l === t._endId && o();
    };
  if (r) return setTimeout(u, r);
  const { type: f, timeout: h, propCount: d } = nS(t, n);
  if (!f) return o();
  const g = f + 'end';
  let v = 0;
  const b = () => {
      t.removeEventListener(g, x), u();
    },
    x = (S) => {
      S.target === t && ++v >= d && b();
    };
  setTimeout(() => {
    v < d && b();
  }, h + 1),
    t.addEventListener(g, x);
}
function nS(t, n) {
  const r = window.getComputedStyle(t),
    o = (A) => (r[A] || '').split(', '),
    l = o(`${ci}Delay`),
    u = o(`${ci}Duration`),
    f = wg(l, u),
    h = o(`${Ws}Delay`),
    d = o(`${Ws}Duration`),
    g = wg(h, d);
  let v = null,
    b = 0,
    x = 0;
  n === ci
    ? f > 0 && ((v = ci), (b = f), (x = u.length))
    : n === Ws
    ? g > 0 && ((v = Ws), (b = g), (x = d.length))
    : ((b = Math.max(f, g)),
      (v = b > 0 ? (f > g ? ci : Ws) : null),
      (x = v ? (v === ci ? u.length : d.length) : 0));
  const S =
    v === ci && /\b(transform|all)(,|$)/.test(o(`${ci}Property`).toString());
  return { type: v, timeout: b, propCount: x, hasTransform: S };
}
function wg(t, n) {
  for (; t.length < n.length; ) t = t.concat(t);
  return Math.max(...n.map((r, o) => xg(r) + xg(t[o])));
}
function xg(t) {
  return Number(t.slice(0, -1).replace(',', '.')) * 1e3;
}
function rS() {
  return document.body.offsetHeight;
}
const _g = (t) => {
  const n = t.props['onUpdate:modelValue'] || !1;
  return Bt(n) ? (r) => Al(n, r) : n;
};
function iS(t) {
  t.target.composing = !0;
}
function Sg(t) {
  const n = t.target;
  n.composing && ((n.composing = !1), n.dispatchEvent(new Event('input')));
}
const oS = {
    created(t, { modifiers: { lazy: n, trim: r, number: o } }, l) {
      t._assign = _g(l);
      const u = o || (l.props && l.props.type === 'number');
      Do(t, n ? 'change' : 'input', (f) => {
        if (f.target.composing) return;
        let h = t.value;
        r && (h = h.trim()), u && (h = nf(h)), t._assign(h);
      }),
        r &&
          Do(t, 'change', () => {
            t.value = t.value.trim();
          }),
        n ||
          (Do(t, 'compositionstart', iS),
          Do(t, 'compositionend', Sg),
          Do(t, 'change', Sg));
    },
    mounted(t, { value: n }) {
      t.value = n ?? '';
    },
    beforeUpdate(
      t,
      { value: n, modifiers: { lazy: r, trim: o, number: l } },
      u,
    ) {
      if (
        ((t._assign = _g(u)),
        t.composing ||
          (document.activeElement === t &&
            t.type !== 'range' &&
            (r ||
              (o && t.value.trim() === n) ||
              ((l || t.type === 'number') && nf(t.value) === n))))
      )
        return;
      const f = n ?? '';
      t.value !== f && (t.value = f);
    },
  },
  sS = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  mf = (t, n) => (r) => {
    if (!('key' in r)) return;
    const o = so(r.key);
    if (n.some((l) => l === o || sS[l] === o)) return t(r);
  },
  yf = {
    beforeMount(t, { value: n }, { transition: r }) {
      (t._vod = t.style.display === 'none' ? '' : t.style.display),
        r && n ? r.beforeEnter(t) : Us(t, n);
    },
    mounted(t, { value: n }, { transition: r }) {
      r && n && r.enter(t);
    },
    updated(t, { value: n, oldValue: r }, { transition: o }) {
      !n != !r &&
        (o
          ? n
            ? (o.beforeEnter(t), Us(t, !0), o.enter(t))
            : o.leave(t, () => {
                Us(t, !1);
              })
          : Us(t, n));
    },
    beforeUnmount(t, { value: n }) {
      Us(t, n);
    },
  };
function Us(t, n) {
  t.style.display = n ? t._vod : 'none';
}
const aS = Ze({ patchProp: Z_ }, F_);
let kg;
function lS() {
  return kg || (kg = y_(aS));
}
const o0 = (...t) => {
  const n = lS().createApp(...t),
    { mount: r } = n;
  return (
    (n.mount = (o) => {
      const l = cS(o);
      if (!l) return;
      const u = n._component;
      !Wt(u) && !u.render && !u.template && (u.template = l.innerHTML),
        (l.innerHTML = '');
      const f = r(l, !1, l instanceof SVGElement);
      return (
        l instanceof Element &&
          (l.removeAttribute('v-cloak'), l.setAttribute('data-v-app', '')),
        f
      );
    }),
    n
  );
};
function cS(t) {
  return ze(t) ? document.querySelector(t) : t;
}
const lo = (t, n) => {
    const r = t.__vccOpts || t;
    for (const [o, l] of n) r[o] = l;
    return r;
  },
  uS = {};
function fS(t, n) {
  const r = eo('RouterView');
  return at(), Yt(r);
}
const hS = lo(uS, [['render', fS]]);
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Ro = typeof window < 'u';
function dS(t) {
  return t.__esModule || t[Symbol.toStringTag] === 'Module';
}
const de = Object.assign;
function Bu(t, n) {
  const r = {};
  for (const o in n) {
    const l = n[o];
    r[o] = er(l) ? l.map(t) : t(l);
  }
  return r;
}
const ta = () => {},
  er = Array.isArray,
  pS = /\/$/,
  gS = (t) => t.replace(pS, '');
function Wu(t, n, r = '/') {
  let o,
    l = {},
    u = '',
    f = '';
  const h = n.indexOf('#');
  let d = n.indexOf('?');
  return (
    h < d && h >= 0 && (d = -1),
    d > -1 &&
      ((o = n.slice(0, d)),
      (u = n.slice(d + 1, h > -1 ? h : n.length)),
      (l = t(u))),
    h > -1 && ((o = o || n.slice(0, h)), (f = n.slice(h, n.length))),
    (o = bS(o ?? n, r)),
    { fullPath: o + (u && '?') + u + f, path: o, query: l, hash: f }
  );
}
function vS(t, n) {
  const r = n.query ? t(n.query) : '';
  return n.path + (r && '?') + r + (n.hash || '');
}
function Cg(t, n) {
  return !n || !t.toLowerCase().startsWith(n.toLowerCase())
    ? t
    : t.slice(n.length) || '/';
}
function mS(t, n, r) {
  const o = n.matched.length - 1,
    l = r.matched.length - 1;
  return (
    o > -1 &&
    o === l &&
    Zo(n.matched[o], r.matched[l]) &&
    s0(n.params, r.params) &&
    t(n.query) === t(r.query) &&
    n.hash === r.hash
  );
}
function Zo(t, n) {
  return (t.aliasOf || t) === (n.aliasOf || n);
}
function s0(t, n) {
  if (Object.keys(t).length !== Object.keys(n).length) return !1;
  for (const r in t) if (!yS(t[r], n[r])) return !1;
  return !0;
}
function yS(t, n) {
  return er(t) ? Tg(t, n) : er(n) ? Tg(n, t) : t === n;
}
function Tg(t, n) {
  return er(n)
    ? t.length === n.length && t.every((r, o) => r === n[o])
    : t.length === 1 && t[0] === n;
}
function bS(t, n) {
  if (t.startsWith('/')) return t;
  if (!t) return n;
  const r = n.split('/'),
    o = t.split('/');
  let l = r.length - 1,
    u,
    f;
  for (u = 0; u < o.length; u++)
    if (((f = o[u]), f !== '.'))
      if (f === '..') l > 1 && l--;
      else break;
  return (
    r.slice(0, l).join('/') +
    '/' +
    o.slice(u - (u === o.length ? 1 : 0)).join('/')
  );
}
var fa;
(function (t) {
  (t.pop = 'pop'), (t.push = 'push');
})(fa || (fa = {}));
var ea;
(function (t) {
  (t.back = 'back'), (t.forward = 'forward'), (t.unknown = '');
})(ea || (ea = {}));
function wS(t) {
  if (!t)
    if (Ro) {
      const n = document.querySelector('base');
      (t = (n && n.getAttribute('href')) || '/'),
        (t = t.replace(/^\w+:\/\/[^\/]+/, ''));
    } else t = '/';
  return t[0] !== '/' && t[0] !== '#' && (t = '/' + t), gS(t);
}
const xS = /^[^#]+#/;
function _S(t, n) {
  return t.replace(xS, '#') + n;
}
function SS(t, n) {
  const r = document.documentElement.getBoundingClientRect(),
    o = t.getBoundingClientRect();
  return {
    behavior: n.behavior,
    left: o.left - r.left - (n.left || 0),
    top: o.top - r.top - (n.top || 0),
  };
}
const Cc = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function kS(t) {
  let n;
  if ('el' in t) {
    const r = t.el,
      o = typeof r == 'string' && r.startsWith('#'),
      l =
        typeof r == 'string'
          ? o
            ? document.getElementById(r.slice(1))
            : document.querySelector(r)
          : r;
    if (!l) return;
    n = SS(l, t);
  } else n = t;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(n)
    : window.scrollTo(
        n.left != null ? n.left : window.pageXOffset,
        n.top != null ? n.top : window.pageYOffset,
      );
}
function Eg(t, n) {
  return (history.state ? history.state.position - n : -1) + t;
}
const bf = new Map();
function CS(t, n) {
  bf.set(t, n);
}
function TS(t) {
  const n = bf.get(t);
  return bf.delete(t), n;
}
let ES = () => location.protocol + '//' + location.host;
function a0(t, n) {
  const { pathname: r, search: o, hash: l } = n,
    u = t.indexOf('#');
  if (u > -1) {
    let h = l.includes(t.slice(u)) ? t.slice(u).length : 1,
      d = l.slice(h);
    return d[0] !== '/' && (d = '/' + d), Cg(d, '');
  }
  return Cg(r, t) + o + l;
}
function LS(t, n, r, o) {
  let l = [],
    u = [],
    f = null;
  const h = ({ state: x }) => {
    const S = a0(t, location),
      A = r.value,
      L = n.value;
    let M = 0;
    if (x) {
      if (((r.value = S), (n.value = x), f && f === A)) {
        f = null;
        return;
      }
      M = L ? x.position - L.position : 0;
    } else o(S);
    l.forEach((T) => {
      T(r.value, A, {
        delta: M,
        type: fa.pop,
        direction: M ? (M > 0 ? ea.forward : ea.back) : ea.unknown,
      });
    });
  };
  function d() {
    f = r.value;
  }
  function g(x) {
    l.push(x);
    const S = () => {
      const A = l.indexOf(x);
      A > -1 && l.splice(A, 1);
    };
    return u.push(S), S;
  }
  function v() {
    const { history: x } = window;
    x.state && x.replaceState(de({}, x.state, { scroll: Cc() }), '');
  }
  function b() {
    for (const x of u) x();
    (u = []),
      window.removeEventListener('popstate', h),
      window.removeEventListener('beforeunload', v);
  }
  return (
    window.addEventListener('popstate', h),
    window.addEventListener('beforeunload', v),
    { pauseListeners: d, listen: g, destroy: b }
  );
}
function Lg(t, n, r, o = !1, l = !1) {
  return {
    back: t,
    current: n,
    forward: r,
    replaced: o,
    position: window.history.length,
    scroll: l ? Cc() : null,
  };
}
function AS(t) {
  const { history: n, location: r } = window,
    o = { value: a0(t, r) },
    l = { value: n.state };
  l.value ||
    u(
      o.value,
      {
        back: null,
        current: o.value,
        forward: null,
        position: n.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function u(d, g, v) {
    const b = t.indexOf('#'),
      x =
        b > -1
          ? (r.host && document.querySelector('base') ? t : t.slice(b)) + d
          : ES() + t + d;
    try {
      n[v ? 'replaceState' : 'pushState'](g, '', x), (l.value = g);
    } catch (S) {
      console.error(S), r[v ? 'replace' : 'assign'](x);
    }
  }
  function f(d, g) {
    const v = de({}, n.state, Lg(l.value.back, d, l.value.forward, !0), g, {
      position: l.value.position,
    });
    u(d, v, !0), (o.value = d);
  }
  function h(d, g) {
    const v = de({}, l.value, n.state, { forward: d, scroll: Cc() });
    u(v.current, v, !0);
    const b = de({}, Lg(o.value, d, null), { position: v.position + 1 }, g);
    u(d, b, !1), (o.value = d);
  }
  return { location: o, state: l, push: h, replace: f };
}
function MS(t) {
  t = wS(t);
  const n = AS(t),
    r = LS(t, n.state, n.location, n.replace);
  function o(u, f = !0) {
    f || r.pauseListeners(), history.go(u);
  }
  const l = de(
    { location: '', base: t, go: o, createHref: _S.bind(null, t) },
    n,
    r,
  );
  return (
    Object.defineProperty(l, 'location', {
      enumerable: !0,
      get: () => n.location.value,
    }),
    Object.defineProperty(l, 'state', {
      enumerable: !0,
      get: () => n.state.value,
    }),
    l
  );
}
function NS(t) {
  return typeof t == 'string' || (t && typeof t == 'object');
}
function l0(t) {
  return typeof t == 'string' || typeof t == 'symbol';
}
const fi = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  c0 = Symbol('');
var Ag;
(function (t) {
  (t[(t.aborted = 4)] = 'aborted'),
    (t[(t.cancelled = 8)] = 'cancelled'),
    (t[(t.duplicated = 16)] = 'duplicated');
})(Ag || (Ag = {}));
function Jo(t, n) {
  return de(new Error(), { type: t, [c0]: !0 }, n);
}
function Pr(t, n) {
  return t instanceof Error && c0 in t && (n == null || !!(t.type & n));
}
const Mg = '[^/]+?',
  PS = { sensitive: !1, strict: !1, start: !0, end: !0 },
  OS = /[.+*?^${}()[\]/\\]/g;
function $S(t, n) {
  const r = de({}, PS, n),
    o = [];
  let l = r.start ? '^' : '';
  const u = [];
  for (const g of t) {
    const v = g.length ? [] : [90];
    r.strict && !g.length && (l += '/');
    for (let b = 0; b < g.length; b++) {
      const x = g[b];
      let S = 40 + (r.sensitive ? 0.25 : 0);
      if (x.type === 0)
        b || (l += '/'), (l += x.value.replace(OS, '\\$&')), (S += 40);
      else if (x.type === 1) {
        const { value: A, repeatable: L, optional: M, regexp: T } = x;
        u.push({ name: A, repeatable: L, optional: M });
        const E = T || Mg;
        if (E !== Mg) {
          S += 10;
          try {
            new RegExp(`(${E})`);
          } catch (O) {
            throw new Error(
              `Invalid custom RegExp for param "${A}" (${E}): ` + O.message,
            );
          }
        }
        let $ = L ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
        b || ($ = M && g.length < 2 ? `(?:/${$})` : '/' + $),
          M && ($ += '?'),
          (l += $),
          (S += 20),
          M && (S += -8),
          L && (S += -20),
          E === '.*' && (S += -50);
      }
      v.push(S);
    }
    o.push(v);
  }
  if (r.strict && r.end) {
    const g = o.length - 1;
    o[g][o[g].length - 1] += 0.7000000000000001;
  }
  r.strict || (l += '/?'), r.end ? (l += '$') : r.strict && (l += '(?:/|$)');
  const f = new RegExp(l, r.sensitive ? '' : 'i');
  function h(g) {
    const v = g.match(f),
      b = {};
    if (!v) return null;
    for (let x = 1; x < v.length; x++) {
      const S = v[x] || '',
        A = u[x - 1];
      b[A.name] = S && A.repeatable ? S.split('/') : S;
    }
    return b;
  }
  function d(g) {
    let v = '',
      b = !1;
    for (const x of t) {
      (!b || !v.endsWith('/')) && (v += '/'), (b = !1);
      for (const S of x)
        if (S.type === 0) v += S.value;
        else if (S.type === 1) {
          const { value: A, repeatable: L, optional: M } = S,
            T = A in g ? g[A] : '';
          if (er(T) && !L)
            throw new Error(
              `Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const E = er(T) ? T.join('/') : T;
          if (!E)
            if (M)
              x.length < 2 &&
                (v.endsWith('/') ? (v = v.slice(0, -1)) : (b = !0));
            else throw new Error(`Missing required param "${A}"`);
          v += E;
        }
    }
    return v || '/';
  }
  return { re: f, score: o, keys: u, parse: h, stringify: d };
}
function DS(t, n) {
  let r = 0;
  for (; r < t.length && r < n.length; ) {
    const o = n[r] - t[r];
    if (o) return o;
    r++;
  }
  return t.length < n.length
    ? t.length === 1 && t[0] === 40 + 40
      ? -1
      : 1
    : t.length > n.length
    ? n.length === 1 && n[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function RS(t, n) {
  let r = 0;
  const o = t.score,
    l = n.score;
  for (; r < o.length && r < l.length; ) {
    const u = DS(o[r], l[r]);
    if (u) return u;
    r++;
  }
  if (Math.abs(l.length - o.length) === 1) {
    if (Ng(o)) return 1;
    if (Ng(l)) return -1;
  }
  return l.length - o.length;
}
function Ng(t) {
  const n = t[t.length - 1];
  return t.length > 0 && n[n.length - 1] < 0;
}
const zS = { type: 0, value: '' },
  FS = /[a-zA-Z0-9_]/;
function IS(t) {
  if (!t) return [[]];
  if (t === '/') return [[zS]];
  if (!t.startsWith('/')) throw new Error(`Invalid path "${t}"`);
  function n(S) {
    throw new Error(`ERR (${r})/"${g}": ${S}`);
  }
  let r = 0,
    o = r;
  const l = [];
  let u;
  function f() {
    u && l.push(u), (u = []);
  }
  let h = 0,
    d,
    g = '',
    v = '';
  function b() {
    g &&
      (r === 0
        ? u.push({ type: 0, value: g })
        : r === 1 || r === 2 || r === 3
        ? (u.length > 1 &&
            (d === '*' || d === '+') &&
            n(
              `A repeatable param (${g}) must be alone in its segment. eg: '/:ids+.`,
            ),
          u.push({
            type: 1,
            value: g,
            regexp: v,
            repeatable: d === '*' || d === '+',
            optional: d === '*' || d === '?',
          }))
        : n('Invalid state to consume buffer'),
      (g = ''));
  }
  function x() {
    g += d;
  }
  for (; h < t.length; ) {
    if (((d = t[h++]), d === '\\' && r !== 2)) {
      (o = r), (r = 4);
      continue;
    }
    switch (r) {
      case 0:
        d === '/' ? (g && b(), f()) : d === ':' ? (b(), (r = 1)) : x();
        break;
      case 4:
        x(), (r = o);
        break;
      case 1:
        d === '('
          ? (r = 2)
          : FS.test(d)
          ? x()
          : (b(), (r = 0), d !== '*' && d !== '?' && d !== '+' && h--);
        break;
      case 2:
        d === ')'
          ? v[v.length - 1] == '\\'
            ? (v = v.slice(0, -1) + d)
            : (r = 3)
          : (v += d);
        break;
      case 3:
        b(), (r = 0), d !== '*' && d !== '?' && d !== '+' && h--, (v = '');
        break;
      default:
        n('Unknown state');
        break;
    }
  }
  return r === 2 && n(`Unfinished custom RegExp for param "${g}"`), b(), f(), l;
}
function qS(t, n, r) {
  const o = $S(IS(t.path), r),
    l = de(o, { record: t, parent: n, children: [], alias: [] });
  return n && !l.record.aliasOf == !n.record.aliasOf && n.children.push(l), l;
}
function HS(t, n) {
  const r = [],
    o = new Map();
  n = $g({ strict: !1, end: !0, sensitive: !1 }, n);
  function l(v) {
    return o.get(v);
  }
  function u(v, b, x) {
    const S = !x,
      A = BS(v);
    A.aliasOf = x && x.record;
    const L = $g(n, v),
      M = [A];
    if ('alias' in v) {
      const $ = typeof v.alias == 'string' ? [v.alias] : v.alias;
      for (const O of $)
        M.push(
          de({}, A, {
            components: x ? x.record.components : A.components,
            path: O,
            aliasOf: x ? x.record : A,
          }),
        );
    }
    let T, E;
    for (const $ of M) {
      const { path: O } = $;
      if (b && O[0] !== '/') {
        const G = b.record.path,
          K = G[G.length - 1] === '/' ? '' : '/';
        $.path = b.record.path + (O && K + O);
      }
      if (
        ((T = qS($, b, L)),
        x
          ? x.alias.push(T)
          : ((E = E || T),
            E !== T && E.alias.push(T),
            S && v.name && !Og(T) && f(v.name)),
        A.children)
      ) {
        const G = A.children;
        for (let K = 0; K < G.length; K++) u(G[K], T, x && x.children[K]);
      }
      (x = x || T),
        ((T.record.components && Object.keys(T.record.components).length) ||
          T.record.name ||
          T.record.redirect) &&
          d(T);
    }
    return E
      ? () => {
          f(E);
        }
      : ta;
  }
  function f(v) {
    if (l0(v)) {
      const b = o.get(v);
      b &&
        (o.delete(v),
        r.splice(r.indexOf(b), 1),
        b.children.forEach(f),
        b.alias.forEach(f));
    } else {
      const b = r.indexOf(v);
      b > -1 &&
        (r.splice(b, 1),
        v.record.name && o.delete(v.record.name),
        v.children.forEach(f),
        v.alias.forEach(f));
    }
  }
  function h() {
    return r;
  }
  function d(v) {
    let b = 0;
    for (
      ;
      b < r.length &&
      RS(v, r[b]) >= 0 &&
      (v.record.path !== r[b].record.path || !u0(v, r[b]));

    )
      b++;
    r.splice(b, 0, v), v.record.name && !Og(v) && o.set(v.record.name, v);
  }
  function g(v, b) {
    let x,
      S = {},
      A,
      L;
    if ('name' in v && v.name) {
      if (((x = o.get(v.name)), !x)) throw Jo(1, { location: v });
      (L = x.record.name),
        (S = de(
          Pg(
            b.params,
            x.keys.filter((E) => !E.optional).map((E) => E.name),
          ),
          v.params &&
            Pg(
              v.params,
              x.keys.map((E) => E.name),
            ),
        )),
        (A = x.stringify(S));
    } else if ('path' in v)
      (A = v.path),
        (x = r.find((E) => E.re.test(A))),
        x && ((S = x.parse(A)), (L = x.record.name));
    else {
      if (((x = b.name ? o.get(b.name) : r.find((E) => E.re.test(b.path))), !x))
        throw Jo(1, { location: v, currentLocation: b });
      (L = x.record.name),
        (S = de({}, b.params, v.params)),
        (A = x.stringify(S));
    }
    const M = [];
    let T = x;
    for (; T; ) M.unshift(T.record), (T = T.parent);
    return { name: L, path: A, params: S, matched: M, meta: US(M) };
  }
  return (
    t.forEach((v) => u(v)),
    {
      addRoute: u,
      resolve: g,
      removeRoute: f,
      getRoutes: h,
      getRecordMatcher: l,
    }
  );
}
function Pg(t, n) {
  const r = {};
  for (const o of n) o in t && (r[o] = t[o]);
  return r;
}
function BS(t) {
  return {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: void 0,
    beforeEnter: t.beforeEnter,
    props: WS(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in t
        ? t.components || null
        : t.component && { default: t.component },
  };
}
function WS(t) {
  const n = {},
    r = t.props || !1;
  if ('component' in t) n.default = r;
  else for (const o in t.components) n[o] = typeof r == 'boolean' ? r : r[o];
  return n;
}
function Og(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function US(t) {
  return t.reduce((n, r) => de(n, r.meta), {});
}
function $g(t, n) {
  const r = {};
  for (const o in t) r[o] = o in n ? n[o] : t[o];
  return r;
}
function u0(t, n) {
  return n.children.some((r) => r === t || u0(t, r));
}
const f0 = /#/g,
  jS = /&/g,
  GS = /\//g,
  VS = /=/g,
  KS = /\?/g,
  h0 = /\+/g,
  XS = /%5B/g,
  YS = /%5D/g,
  d0 = /%5E/g,
  ZS = /%60/g,
  p0 = /%7B/g,
  JS = /%7C/g,
  g0 = /%7D/g,
  QS = /%20/g;
function yh(t) {
  return encodeURI('' + t)
    .replace(JS, '|')
    .replace(XS, '[')
    .replace(YS, ']');
}
function tk(t) {
  return yh(t).replace(p0, '{').replace(g0, '}').replace(d0, '^');
}
function wf(t) {
  return yh(t)
    .replace(h0, '%2B')
    .replace(QS, '+')
    .replace(f0, '%23')
    .replace(jS, '%26')
    .replace(ZS, '`')
    .replace(p0, '{')
    .replace(g0, '}')
    .replace(d0, '^');
}
function ek(t) {
  return wf(t).replace(VS, '%3D');
}
function nk(t) {
  return yh(t).replace(f0, '%23').replace(KS, '%3F');
}
function rk(t) {
  return t == null ? '' : nk(t).replace(GS, '%2F');
}
function jl(t) {
  try {
    return decodeURIComponent('' + t);
  } catch {}
  return '' + t;
}
function ik(t) {
  const n = {};
  if (t === '' || t === '?') return n;
  const o = (t[0] === '?' ? t.slice(1) : t).split('&');
  for (let l = 0; l < o.length; ++l) {
    const u = o[l].replace(h0, ' '),
      f = u.indexOf('='),
      h = jl(f < 0 ? u : u.slice(0, f)),
      d = f < 0 ? null : jl(u.slice(f + 1));
    if (h in n) {
      let g = n[h];
      er(g) || (g = n[h] = [g]), g.push(d);
    } else n[h] = d;
  }
  return n;
}
function Dg(t) {
  let n = '';
  for (let r in t) {
    const o = t[r];
    if (((r = ek(r)), o == null)) {
      o !== void 0 && (n += (n.length ? '&' : '') + r);
      continue;
    }
    (er(o) ? o.map((u) => u && wf(u)) : [o && wf(o)]).forEach((u) => {
      u !== void 0 &&
        ((n += (n.length ? '&' : '') + r), u != null && (n += '=' + u));
    });
  }
  return n;
}
function ok(t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    o !== void 0 &&
      (n[r] = er(o)
        ? o.map((l) => (l == null ? null : '' + l))
        : o == null
        ? o
        : '' + o);
  }
  return n;
}
const sk = Symbol(''),
  Rg = Symbol(''),
  bh = Symbol(''),
  v0 = Symbol(''),
  xf = Symbol('');
function js() {
  let t = [];
  function n(o) {
    return (
      t.push(o),
      () => {
        const l = t.indexOf(o);
        l > -1 && t.splice(l, 1);
      }
    );
  }
  function r() {
    t = [];
  }
  return { add: n, list: () => t, reset: r };
}
function gi(t, n, r, o, l) {
  const u = o && (o.enterCallbacks[l] = o.enterCallbacks[l] || []);
  return () =>
    new Promise((f, h) => {
      const d = (b) => {
          b === !1
            ? h(Jo(4, { from: r, to: n }))
            : b instanceof Error
            ? h(b)
            : NS(b)
            ? h(Jo(2, { from: n, to: b }))
            : (u &&
                o.enterCallbacks[l] === u &&
                typeof b == 'function' &&
                u.push(b),
              f());
        },
        g = t.call(o && o.instances[l], n, r, d);
      let v = Promise.resolve(g);
      t.length < 3 && (v = v.then(d)), v.catch((b) => h(b));
    });
}
function Uu(t, n, r, o) {
  const l = [];
  for (const u of t)
    for (const f in u.components) {
      let h = u.components[f];
      if (!(n !== 'beforeRouteEnter' && !u.instances[f]))
        if (ak(h)) {
          const g = (h.__vccOpts || h)[n];
          g && l.push(gi(g, r, o, u, f));
        } else {
          let d = h();
          l.push(() =>
            d.then((g) => {
              if (!g)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${f}" at "${u.path}"`),
                );
              const v = dS(g) ? g.default : g;
              u.components[f] = v;
              const x = (v.__vccOpts || v)[n];
              return x && gi(x, r, o, u, f)();
            }),
          );
        }
    }
  return l;
}
function ak(t) {
  return (
    typeof t == 'object' ||
    'displayName' in t ||
    'props' in t ||
    '__vccOpts' in t
  );
}
function zg(t) {
  const n = Fr(bh),
    r = Fr(v0),
    o = xt(() => n.resolve(U(t.to))),
    l = xt(() => {
      const { matched: d } = o.value,
        { length: g } = d,
        v = d[g - 1],
        b = r.matched;
      if (!v || !b.length) return -1;
      const x = b.findIndex(Zo.bind(null, v));
      if (x > -1) return x;
      const S = Fg(d[g - 2]);
      return g > 1 && Fg(v) === S && b[b.length - 1].path !== S
        ? b.findIndex(Zo.bind(null, d[g - 2]))
        : x;
    }),
    u = xt(() => l.value > -1 && fk(r.params, o.value.params)),
    f = xt(
      () =>
        l.value > -1 &&
        l.value === r.matched.length - 1 &&
        s0(r.params, o.value.params),
    );
  function h(d = {}) {
    return uk(d)
      ? n[U(t.replace) ? 'replace' : 'push'](U(t.to)).catch(ta)
      : Promise.resolve();
  }
  return {
    route: o,
    href: xt(() => o.value.href),
    isActive: u,
    isExactActive: f,
    navigate: h,
  };
}
const lk = ne({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: zg,
    setup(t, { slots: n }) {
      const r = Dn(zg(t)),
        { options: o } = Fr(bh),
        l = xt(() => ({
          [Ig(t.activeClass, o.linkActiveClass, 'router-link-active')]:
            r.isActive,
          [Ig(
            t.exactActiveClass,
            o.linkExactActiveClass,
            'router-link-exact-active',
          )]: r.isExactActive,
        }));
      return () => {
        const u = n.default && n.default(r);
        return t.custom
          ? u
          : Sa(
              'a',
              {
                'aria-current': r.isExactActive ? t.ariaCurrentValue : null,
                href: r.href,
                onClick: r.navigate,
                class: l.value,
              },
              u,
            );
      };
    },
  }),
  ck = lk;
function uk(t) {
  if (
    !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
    !t.defaultPrevented &&
    !(t.button !== void 0 && t.button !== 0)
  ) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const n = t.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(n)) return;
    }
    return t.preventDefault && t.preventDefault(), !0;
  }
}
function fk(t, n) {
  for (const r in n) {
    const o = n[r],
      l = t[r];
    if (typeof o == 'string') {
      if (o !== l) return !1;
    } else if (!er(l) || l.length !== o.length || o.some((u, f) => u !== l[f]))
      return !1;
  }
  return !0;
}
function Fg(t) {
  return t ? (t.aliasOf ? t.aliasOf.path : t.path) : '';
}
const Ig = (t, n, r) => t ?? n ?? r,
  hk = ne({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(t, { attrs: n, slots: r }) {
      const o = Fr(xf),
        l = xt(() => t.route || o.value),
        u = Fr(Rg, 0),
        f = xt(() => {
          let g = U(u);
          const { matched: v } = l.value;
          let b;
          for (; (b = v[g]) && !b.components; ) g++;
          return g;
        }),
        h = xt(() => l.value.matched[f.value]);
      Ml(
        Rg,
        xt(() => f.value + 1),
      ),
        Ml(sk, h),
        Ml(xf, l);
      const d = Vt();
      return (
        Re(
          () => [d.value, h.value, t.name],
          ([g, v, b], [x, S, A]) => {
            v &&
              ((v.instances[b] = g),
              S &&
                S !== v &&
                g &&
                g === x &&
                (v.leaveGuards.size || (v.leaveGuards = S.leaveGuards),
                v.updateGuards.size || (v.updateGuards = S.updateGuards))),
              g &&
                v &&
                (!S || !Zo(v, S) || !x) &&
                (v.enterCallbacks[b] || []).forEach((L) => L(g));
          },
          { flush: 'post' },
        ),
        () => {
          const g = l.value,
            v = t.name,
            b = h.value,
            x = b && b.components[v];
          if (!x) return qg(r.default, { Component: x, route: g });
          const S = b.props[v],
            A = S
              ? S === !0
                ? g.params
                : typeof S == 'function'
                ? S(g)
                : S
              : null,
            M = Sa(
              x,
              de({}, A, n, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (b.instances[v] = null);
                },
                ref: d,
              }),
            );
          return qg(r.default, { Component: M, route: g }) || M;
        }
      );
    },
  });
function qg(t, n) {
  if (!t) return null;
  const r = t(n);
  return r.length === 1 ? r[0] : r;
}
const dk = hk;
function pk(t) {
  const n = HS(t.routes, t),
    r = t.parseQuery || ik,
    o = t.stringifyQuery || Dg,
    l = t.history,
    u = js(),
    f = js(),
    h = js(),
    d = as(fi);
  let g = fi;
  Ro &&
    t.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const v = Bu.bind(null, (Q) => '' + Q),
    b = Bu.bind(null, rk),
    x = Bu.bind(null, jl);
  function S(Q, tt) {
    let X, ot;
    return (
      l0(Q) ? ((X = n.getRecordMatcher(Q)), (ot = tt)) : (ot = Q),
      n.addRoute(ot, X)
    );
  }
  function A(Q) {
    const tt = n.getRecordMatcher(Q);
    tt && n.removeRoute(tt);
  }
  function L() {
    return n.getRoutes().map((Q) => Q.record);
  }
  function M(Q) {
    return !!n.getRecordMatcher(Q);
  }
  function T(Q, tt) {
    if (((tt = de({}, tt || d.value)), typeof Q == 'string')) {
      const P = Wu(r, Q, tt.path),
        I = n.resolve({ path: P.path }, tt),
        J = l.createHref(P.fullPath);
      return de(P, I, {
        params: x(I.params),
        hash: jl(P.hash),
        redirectedFrom: void 0,
        href: J,
      });
    }
    let X;
    if ('path' in Q) X = de({}, Q, { path: Wu(r, Q.path, tt.path).path });
    else {
      const P = de({}, Q.params);
      for (const I in P) P[I] == null && delete P[I];
      (X = de({}, Q, { params: b(Q.params) })), (tt.params = b(tt.params));
    }
    const ot = n.resolve(X, tt),
      Tt = Q.hash || '';
    ot.params = v(x(ot.params));
    const pe = vS(o, de({}, Q, { hash: tk(Tt), path: ot.path })),
      At = l.createHref(pe);
    return de(
      { fullPath: pe, hash: Tt, query: o === Dg ? ok(Q.query) : Q.query || {} },
      ot,
      { redirectedFrom: void 0, href: At },
    );
  }
  function E(Q) {
    return typeof Q == 'string' ? Wu(r, Q, d.value.path) : de({}, Q);
  }
  function $(Q, tt) {
    if (g !== Q) return Jo(8, { from: tt, to: Q });
  }
  function O(Q) {
    return ct(Q);
  }
  function G(Q) {
    return O(de(E(Q), { replace: !0 }));
  }
  function K(Q) {
    const tt = Q.matched[Q.matched.length - 1];
    if (tt && tt.redirect) {
      const { redirect: X } = tt;
      let ot = typeof X == 'function' ? X(Q) : X;
      return (
        typeof ot == 'string' &&
          ((ot =
            ot.includes('?') || ot.includes('#') ? (ot = E(ot)) : { path: ot }),
          (ot.params = {})),
        de(
          {
            query: Q.query,
            hash: Q.hash,
            params: 'path' in ot ? {} : Q.params,
          },
          ot,
        )
      );
    }
  }
  function ct(Q, tt) {
    const X = (g = T(Q)),
      ot = d.value,
      Tt = Q.state,
      pe = Q.force,
      At = Q.replace === !0,
      P = K(X);
    if (P)
      return ct(
        de(E(P), {
          state: typeof P == 'object' ? de({}, Tt, P.state) : Tt,
          force: pe,
          replace: At,
        }),
        tt || X,
      );
    const I = X;
    I.redirectedFrom = tt;
    let J;
    return (
      !pe &&
        mS(o, ot, X) &&
        ((J = Jo(16, { to: I, from: ot })), Ct(ot, ot, !0, !1)),
      (J ? Promise.resolve(J) : ut(I, ot))
        .catch((nt) => (Pr(nt) ? (Pr(nt, 2) ? nt : mt(nt)) : W(nt, I, ot)))
        .then((nt) => {
          if (nt) {
            if (Pr(nt, 2))
              return ct(
                de({ replace: At }, E(nt.to), {
                  state:
                    typeof nt.to == 'object' ? de({}, Tt, nt.to.state) : Tt,
                  force: pe,
                }),
                tt || I,
              );
          } else nt = kt(I, ot, !0, At, Tt);
          return ft(I, ot, nt), nt;
        })
    );
  }
  function V(Q, tt) {
    const X = $(Q, tt);
    return X ? Promise.reject(X) : Promise.resolve();
  }
  function ut(Q, tt) {
    let X;
    const [ot, Tt, pe] = gk(Q, tt);
    X = Uu(ot.reverse(), 'beforeRouteLeave', Q, tt);
    for (const P of ot)
      P.leaveGuards.forEach((I) => {
        X.push(gi(I, Q, tt));
      });
    const At = V.bind(null, Q, tt);
    return (
      X.push(At),
      Oo(X)
        .then(() => {
          X = [];
          for (const P of u.list()) X.push(gi(P, Q, tt));
          return X.push(At), Oo(X);
        })
        .then(() => {
          X = Uu(Tt, 'beforeRouteUpdate', Q, tt);
          for (const P of Tt)
            P.updateGuards.forEach((I) => {
              X.push(gi(I, Q, tt));
            });
          return X.push(At), Oo(X);
        })
        .then(() => {
          X = [];
          for (const P of Q.matched)
            if (P.beforeEnter && !tt.matched.includes(P))
              if (er(P.beforeEnter))
                for (const I of P.beforeEnter) X.push(gi(I, Q, tt));
              else X.push(gi(P.beforeEnter, Q, tt));
          return X.push(At), Oo(X);
        })
        .then(
          () => (
            Q.matched.forEach((P) => (P.enterCallbacks = {})),
            (X = Uu(pe, 'beforeRouteEnter', Q, tt)),
            X.push(At),
            Oo(X)
          ),
        )
        .then(() => {
          X = [];
          for (const P of f.list()) X.push(gi(P, Q, tt));
          return X.push(At), Oo(X);
        })
        .catch((P) => (Pr(P, 8) ? P : Promise.reject(P)))
    );
  }
  function ft(Q, tt, X) {
    for (const ot of h.list()) ot(Q, tt, X);
  }
  function kt(Q, tt, X, ot, Tt) {
    const pe = $(Q, tt);
    if (pe) return pe;
    const At = tt === fi,
      P = Ro ? history.state : {};
    X &&
      (ot || At
        ? l.replace(Q.fullPath, de({ scroll: At && P && P.scroll }, Tt))
        : l.push(Q.fullPath, Tt)),
      (d.value = Q),
      Ct(Q, tt, X, At),
      mt();
  }
  let dt;
  function j() {
    dt ||
      (dt = l.listen((Q, tt, X) => {
        if (!Zt.listening) return;
        const ot = T(Q),
          Tt = K(ot);
        if (Tt) {
          ct(de(Tt, { replace: !0 }), ot).catch(ta);
          return;
        }
        g = ot;
        const pe = d.value;
        Ro && CS(Eg(pe.fullPath, X.delta), Cc()),
          ut(ot, pe)
            .catch((At) =>
              Pr(At, 12)
                ? At
                : Pr(At, 2)
                ? (ct(At.to, ot)
                    .then((P) => {
                      Pr(P, 20) &&
                        !X.delta &&
                        X.type === fa.pop &&
                        l.go(-1, !1);
                    })
                    .catch(ta),
                  Promise.reject())
                : (X.delta && l.go(-X.delta, !1), W(At, ot, pe)),
            )
            .then((At) => {
              (At = At || kt(ot, pe, !1)),
                At &&
                  (X.delta && !Pr(At, 8)
                    ? l.go(-X.delta, !1)
                    : X.type === fa.pop && Pr(At, 20) && l.go(-1, !1)),
                ft(ot, pe, At);
            })
            .catch(ta);
      }));
  }
  let z = js(),
    k = js(),
    q;
  function W(Q, tt, X) {
    mt(Q);
    const ot = k.list();
    return (
      ot.length ? ot.forEach((Tt) => Tt(Q, tt, X)) : console.error(Q),
      Promise.reject(Q)
    );
  }
  function et() {
    return q && d.value !== fi
      ? Promise.resolve()
      : new Promise((Q, tt) => {
          z.add([Q, tt]);
        });
  }
  function mt(Q) {
    return (
      q ||
        ((q = !Q),
        j(),
        z.list().forEach(([tt, X]) => (Q ? X(Q) : tt())),
        z.reset()),
      Q
    );
  }
  function Ct(Q, tt, X, ot) {
    const { scrollBehavior: Tt } = t;
    if (!Ro || !Tt) return Promise.resolve();
    const pe =
      (!X && TS(Eg(Q.fullPath, 0))) ||
      ((ot || !X) && history.state && history.state.scroll) ||
      null;
    return Hr()
      .then(() => Tt(Q, tt, pe))
      .then((At) => At && kS(At))
      .catch((At) => W(At, Q, tt));
  }
  const Rt = (Q) => l.go(Q);
  let Ft;
  const jt = new Set(),
    Zt = {
      currentRoute: d,
      listening: !0,
      addRoute: S,
      removeRoute: A,
      hasRoute: M,
      getRoutes: L,
      resolve: T,
      options: t,
      push: O,
      replace: G,
      go: Rt,
      back: () => Rt(-1),
      forward: () => Rt(1),
      beforeEach: u.add,
      beforeResolve: f.add,
      afterEach: h.add,
      onError: k.add,
      isReady: et,
      install(Q) {
        const tt = this;
        Q.component('RouterLink', ck),
          Q.component('RouterView', dk),
          (Q.config.globalProperties.$router = tt),
          Object.defineProperty(Q.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => U(d),
          }),
          Ro &&
            !Ft &&
            d.value === fi &&
            ((Ft = !0), O(l.location).catch((Tt) => {}));
        const X = {};
        for (const Tt in fi) X[Tt] = xt(() => d.value[Tt]);
        Q.provide(bh, tt), Q.provide(v0, Dn(X)), Q.provide(xf, d);
        const ot = Q.unmount;
        jt.add(Q),
          (Q.unmount = function () {
            jt.delete(Q),
              jt.size < 1 &&
                ((g = fi),
                dt && dt(),
                (dt = null),
                (d.value = fi),
                (Ft = !1),
                (q = !1)),
              ot();
          });
      },
    };
  return Zt;
}
function Oo(t) {
  return t.reduce((n, r) => n.then(() => r()), Promise.resolve());
}
function gk(t, n) {
  const r = [],
    o = [],
    l = [],
    u = Math.max(n.matched.length, t.matched.length);
  for (let f = 0; f < u; f++) {
    const h = n.matched[f];
    h && (t.matched.find((g) => Zo(g, h)) ? o.push(h) : r.push(h));
    const d = t.matched[f];
    d && (n.matched.find((g) => Zo(g, d)) || l.push(d));
  }
  return [r, o, l];
}
function Kr(t) {
  return t.split('-')[0];
}
function Wo(t) {
  return t.split('-')[1];
}
function ka(t) {
  return ['top', 'bottom'].includes(Kr(t)) ? 'x' : 'y';
}
function wh(t) {
  return t === 'y' ? 'height' : 'width';
}
function Hg(t) {
  let { reference: n, floating: r, placement: o } = t;
  const l = n.x + n.width / 2 - r.width / 2,
    u = n.y + n.height / 2 - r.height / 2;
  let f;
  switch (Kr(o)) {
    case 'top':
      f = { x: l, y: n.y - r.height };
      break;
    case 'bottom':
      f = { x: l, y: n.y + n.height };
      break;
    case 'right':
      f = { x: n.x + n.width, y: u };
      break;
    case 'left':
      f = { x: n.x - r.width, y: u };
      break;
    default:
      f = { x: n.x, y: n.y };
  }
  const h = ka(o),
    d = wh(h);
  switch (Wo(o)) {
    case 'start':
      f[h] = f[h] - (n[d] / 2 - r[d] / 2);
      break;
    case 'end':
      f[h] = f[h] + (n[d] / 2 - r[d] / 2);
      break;
  }
  return f;
}
const vk = async (t, n, r) => {
  const {
    placement: o = 'bottom',
    strategy: l = 'absolute',
    middleware: u = [],
    platform: f,
  } = r;
  let h = await f.getElementRects({ reference: t, floating: n, strategy: l }),
    { x: d, y: g } = Hg({ ...h, placement: o }),
    v = o,
    b = {};
  for (let x = 0; x < u.length; x++) {
    const { name: S, fn: A } = u[x],
      {
        x: L,
        y: M,
        data: T,
        reset: E,
      } = await A({
        x: d,
        y: g,
        initialPlacement: o,
        placement: v,
        strategy: l,
        middlewareData: b,
        rects: h,
        platform: f,
        elements: { reference: t, floating: n },
      });
    if (((d = L ?? d), (g = M ?? g), (b = { ...b, [S]: T ?? {} }), E)) {
      typeof E == 'object' &&
        (E.placement && (v = E.placement),
        E.rects &&
          (h =
            E.rects === !0
              ? await f.getElementRects({
                  reference: t,
                  floating: n,
                  strategy: l,
                })
              : E.rects),
        ({ x: d, y: g } = Hg({ ...h, placement: v }))),
        (x = -1);
      continue;
    }
  }
  return { x: d, y: g, placement: v, strategy: l, middlewareData: b };
};
function mk(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function m0(t) {
  return typeof t != 'number'
    ? mk(t)
    : { top: t, right: t, bottom: t, left: t };
}
function _f(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height,
  };
}
async function Tc(t, n) {
  n === void 0 && (n = {});
  const { x: r, y: o, platform: l, rects: u, elements: f, strategy: h } = t,
    {
      boundary: d = 'clippingParents',
      rootBoundary: g = 'viewport',
      elementContext: v = 'floating',
      altBoundary: b = !1,
      padding: x = 0,
    } = n,
    S = m0(x),
    L = f[b ? (v === 'floating' ? 'reference' : 'floating') : v],
    M = await l.getClippingClientRect({
      element: (await l.isElement(L))
        ? L
        : L.contextElement ||
          (await l.getDocumentElement({ element: f.floating })),
      boundary: d,
      rootBoundary: g,
    }),
    T = _f(
      await l.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: v === 'floating' ? { ...u.floating, x: r, y: o } : u.reference,
        offsetParent: await l.getOffsetParent({ element: f.floating }),
        strategy: h,
      }),
    );
  return {
    top: M.top - T.top + S.top,
    bottom: T.bottom - M.bottom + S.bottom,
    left: M.left - T.left + S.left,
    right: T.right - M.right + S.right,
  };
}
const yk = Math.min,
  Ui = Math.max;
function Sf(t, n, r) {
  return Ui(t, yk(n, r));
}
const bk = (t) => ({
    name: 'arrow',
    options: t,
    async fn(n) {
      const { element: r, padding: o = 0 } = t ?? {},
        { x: l, y: u, placement: f, rects: h, platform: d } = n;
      if (r == null) return {};
      const g = m0(o),
        v = { x: l, y: u },
        b = Kr(f),
        x = ka(b),
        S = wh(x),
        A = await d.getDimensions({ element: r }),
        L = x === 'y' ? 'top' : 'left',
        M = x === 'y' ? 'bottom' : 'right',
        T = h.reference[S] + h.reference[x] - v[x] - h.floating[S],
        E = v[x] - h.reference[x],
        $ = await d.getOffsetParent({ element: r }),
        O = $ ? (x === 'y' ? $.clientHeight || 0 : $.clientWidth || 0) : 0,
        G = T / 2 - E / 2,
        K = g[L],
        ct = O - A[S] - g[M],
        V = O / 2 - A[S] / 2 + G,
        ut = Sf(K, V, ct);
      return { data: { [x]: ut, centerOffset: V - ut } };
    },
  }),
  wk = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Gl(t) {
  return t.replace(/left|right|bottom|top/g, (n) => wk[n]);
}
function y0(t, n) {
  const r = Wo(t) === 'start',
    o = ka(t),
    l = wh(o);
  let u = o === 'x' ? (r ? 'right' : 'left') : r ? 'bottom' : 'top';
  return (
    n.reference[l] > n.floating[l] && (u = Gl(u)), { main: u, cross: Gl(u) }
  );
}
const xk = { start: 'end', end: 'start' };
function kf(t) {
  return t.replace(/start|end/g, (n) => xk[n]);
}
const _k = ['top', 'right', 'bottom', 'left'],
  Sk = _k.reduce((t, n) => t.concat(n, n + '-start', n + '-end'), []);
function kk(t, n, r) {
  return (
    t
      ? [...r.filter((l) => Wo(l) === t), ...r.filter((l) => Wo(l) !== t)]
      : r.filter((l) => Kr(l) === l)
  ).filter((l) => (t ? Wo(l) === t || (n ? kf(l) !== l : !1) : !0));
}
const Ck = function (t) {
  return (
    t === void 0 && (t = {}),
    {
      name: 'autoPlacement',
      options: t,
      async fn(n) {
        var r, o, l, u, f, h;
        const { x: d, y: g, rects: v, middlewareData: b, placement: x } = n,
          {
            alignment: S = null,
            allowedPlacements: A = Sk,
            autoAlignment: L = !0,
            ...M
          } = t;
        if ((r = b.autoPlacement) != null && r.skip) return {};
        const T = kk(S, L, A),
          E = await Tc(n, M),
          $ =
            (o = (l = b.autoPlacement) == null ? void 0 : l.index) != null
              ? o
              : 0,
          O = T[$],
          { main: G, cross: K } = y0(O, v);
        if (x !== O) return { x: d, y: g, reset: { placement: T[0] } };
        const ct = [E[Kr(O)], E[G], E[K]],
          V = [
            ...((u = (f = b.autoPlacement) == null ? void 0 : f.overflows) !=
            null
              ? u
              : []),
            { placement: O, overflows: ct },
          ],
          ut = T[$ + 1];
        if (ut)
          return {
            data: { index: $ + 1, overflows: V },
            reset: { placement: ut },
          };
        const ft = V.slice().sort((dt, j) => dt.overflows[0] - j.overflows[0]),
          kt =
            (h = ft.find((dt) => {
              let { overflows: j } = dt;
              return j.every((z) => z <= 0);
            })) == null
              ? void 0
              : h.placement;
        return {
          data: { skip: !0 },
          reset: { placement: kt ?? ft[0].placement },
        };
      },
    }
  );
};
function Tk(t) {
  const n = Gl(t);
  return [kf(t), n, kf(n)];
}
const Ek = function (t) {
  return (
    t === void 0 && (t = {}),
    {
      name: 'flip',
      options: t,
      async fn(n) {
        var r, o;
        const {
          placement: l,
          middlewareData: u,
          rects: f,
          initialPlacement: h,
        } = n;
        if ((r = u.flip) != null && r.skip) return {};
        const {
            mainAxis: d = !0,
            crossAxis: g = !0,
            fallbackPlacements: v,
            fallbackStrategy: b = 'bestFit',
            flipAlignment: x = !0,
            ...S
          } = t,
          A = Kr(l),
          M = v || (A === h || !x ? [Gl(h)] : Tk(h)),
          T = [h, ...M],
          E = await Tc(n, S),
          $ = [];
        let O = ((o = u.flip) == null ? void 0 : o.overflows) || [];
        if ((d && $.push(E[A]), g)) {
          const { main: V, cross: ut } = y0(l, f);
          $.push(E[V], E[ut]);
        }
        if (
          ((O = [...O, { placement: l, overflows: $ }]),
          !$.every((V) => V <= 0))
        ) {
          var G, K;
          const V =
              ((G = (K = u.flip) == null ? void 0 : K.index) != null ? G : 0) +
              1,
            ut = T[V];
          if (ut)
            return {
              data: { index: V, overflows: O },
              reset: { placement: ut },
            };
          let ft = 'bottom';
          switch (b) {
            case 'bestFit': {
              var ct;
              const kt =
                (ct = O.slice().sort(
                  (dt, j) =>
                    dt.overflows
                      .filter((z) => z > 0)
                      .reduce((z, k) => z + k, 0) -
                    j.overflows.filter((z) => z > 0).reduce((z, k) => z + k, 0),
                )[0]) == null
                  ? void 0
                  : ct.placement;
              kt && (ft = kt);
              break;
            }
            case 'initialPlacement':
              ft = h;
              break;
          }
          return { data: { skip: !0 }, reset: { placement: ft } };
        }
        return {};
      },
    }
  );
};
function Lk(t) {
  let { placement: n, rects: r, value: o } = t;
  const l = Kr(n),
    u = ['left', 'top'].includes(l) ? -1 : 1,
    f = typeof o == 'function' ? o({ ...r, placement: n }) : o,
    { mainAxis: h, crossAxis: d } =
      typeof f == 'number'
        ? { mainAxis: f, crossAxis: 0 }
        : { mainAxis: 0, crossAxis: 0, ...f };
  return ka(l) === 'x' ? { x: d, y: h * u } : { x: h * u, y: d };
}
const Ak = function (t) {
  return (
    t === void 0 && (t = 0),
    {
      name: 'offset',
      options: t,
      fn(n) {
        const { x: r, y: o, placement: l, rects: u } = n,
          f = Lk({ placement: l, rects: u, value: t });
        return { x: r + f.x, y: o + f.y, data: f };
      },
    }
  );
};
function Mk(t) {
  return t === 'x' ? 'y' : 'x';
}
const Nk = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: 'shift',
        options: t,
        async fn(n) {
          const { x: r, y: o, placement: l } = n,
            {
              mainAxis: u = !0,
              crossAxis: f = !1,
              limiter: h = {
                fn: (M) => {
                  let { x: T, y: E } = M;
                  return { x: T, y: E };
                },
              },
              ...d
            } = t,
            g = { x: r, y: o },
            v = await Tc(n, d),
            b = ka(Kr(l)),
            x = Mk(b);
          let S = g[b],
            A = g[x];
          if (u) {
            const M = b === 'y' ? 'top' : 'left',
              T = b === 'y' ? 'bottom' : 'right',
              E = S + v[M],
              $ = S - v[T];
            S = Sf(E, S, $);
          }
          if (f) {
            const M = x === 'y' ? 'top' : 'left',
              T = x === 'y' ? 'bottom' : 'right',
              E = A + v[M],
              $ = A - v[T];
            A = Sf(E, A, $);
          }
          const L = h.fn({ ...n, [b]: S, [x]: A });
          return { ...L, data: { x: L.x - r, y: L.y - o } };
        },
      }
    );
  },
  Pk = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: 'size',
        options: t,
        async fn(n) {
          var r;
          const { placement: o, rects: l, middlewareData: u } = n,
            { apply: f, ...h } = t;
          if ((r = u.size) != null && r.skip) return {};
          const d = await Tc(n, h),
            g = Kr(o),
            v = Wo(o) === 'end';
          let b, x;
          g === 'top' || g === 'bottom'
            ? ((b = g), (x = v ? 'left' : 'right'))
            : ((x = g), (b = v ? 'top' : 'bottom'));
          const S = Ui(d.left, 0),
            A = Ui(d.right, 0),
            L = Ui(d.top, 0),
            M = Ui(d.bottom, 0),
            T = {
              height:
                l.floating.height -
                (['left', 'right'].includes(o)
                  ? 2 * (L !== 0 || M !== 0 ? L + M : Ui(d.top, d.bottom))
                  : d[b]),
              width:
                l.floating.width -
                (['top', 'bottom'].includes(o)
                  ? 2 * (S !== 0 || A !== 0 ? S + A : Ui(d.left, d.right))
                  : d[x]),
            };
          return (
            f == null || f({ ...T, ...l }),
            { data: { skip: !0 }, reset: { rects: !0 } }
          );
        },
      }
    );
  };
function xh(t) {
  return (t == null ? void 0 : t.toString()) === '[object Window]';
}
function Ti(t) {
  if (t == null) return window;
  if (!xh(t)) {
    const n = t.ownerDocument;
    return (n && n.defaultView) || window;
  }
  return t;
}
function Ec(t) {
  return Ti(t).getComputedStyle(t);
}
function Br(t) {
  return xh(t) ? '' : t ? (t.nodeName || '').toLowerCase() : '';
}
function Wr(t) {
  return t instanceof Ti(t).HTMLElement;
}
function Vl(t) {
  return t instanceof Ti(t).Element;
}
function Ok(t) {
  return t instanceof Ti(t).Node;
}
function b0(t) {
  const n = Ti(t).ShadowRoot;
  return t instanceof n || t instanceof ShadowRoot;
}
function Lc(t) {
  const { overflow: n, overflowX: r, overflowY: o } = Ec(t);
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function $k(t) {
  return ['table', 'td', 'th'].includes(Br(t));
}
function w0(t) {
  const n = navigator.userAgent.toLowerCase().includes('firefox'),
    r = Ec(t);
  return (
    r.transform !== 'none' ||
    r.perspective !== 'none' ||
    r.contain === 'paint' ||
    ['transform', 'perspective'].includes(r.willChange) ||
    (n && r.willChange === 'filter') ||
    (n && (r.filter ? r.filter !== 'none' : !1))
  );
}
const Bg = Math.min,
  na = Math.max,
  Kl = Math.round;
function Qo(t, n) {
  n === void 0 && (n = !1);
  const r = t.getBoundingClientRect();
  let o = 1,
    l = 1;
  return (
    n &&
      Wr(t) &&
      ((o = (t.offsetWidth > 0 && Kl(r.width) / t.offsetWidth) || 1),
      (l = (t.offsetHeight > 0 && Kl(r.height) / t.offsetHeight) || 1)),
    {
      width: r.width / o,
      height: r.height / l,
      top: r.top / l,
      right: r.right / o,
      bottom: r.bottom / l,
      left: r.left / o,
      x: r.left / o,
      y: r.top / l,
    }
  );
}
function Ei(t) {
  return ((Ok(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement;
}
function Ac(t) {
  return xh(t)
    ? { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset }
    : { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function x0(t) {
  return Qo(Ei(t)).left + Ac(t).scrollLeft;
}
function Dk(t) {
  const n = Qo(t);
  return Kl(n.width) !== t.offsetWidth || Kl(n.height) !== t.offsetHeight;
}
function Rk(t, n, r) {
  const o = Wr(n),
    l = Ei(n),
    u = Qo(t, o && Dk(n));
  let f = { scrollLeft: 0, scrollTop: 0 };
  const h = { x: 0, y: 0 };
  if (o || (!o && r !== 'fixed'))
    if (((Br(n) !== 'body' || Lc(l)) && (f = Ac(n)), Wr(n))) {
      const d = Qo(n, !0);
      (h.x = d.x + n.clientLeft), (h.y = d.y + n.clientTop);
    } else l && (h.x = x0(l));
  return {
    x: u.left + f.scrollLeft - h.x,
    y: u.top + f.scrollTop - h.y,
    width: u.width,
    height: u.height,
  };
}
function Mc(t) {
  return Br(t) === 'html'
    ? t
    : t.assignedSlot || t.parentNode || (b0(t) ? t.host : null) || Ei(t);
}
function Wg(t) {
  return !Wr(t) || getComputedStyle(t).position === 'fixed'
    ? null
    : t.offsetParent;
}
function zk(t) {
  let n = Mc(t);
  for (; Wr(n) && !['html', 'body'].includes(Br(n)); ) {
    if (w0(n)) return n;
    n = n.parentNode;
  }
  return null;
}
function Cf(t) {
  const n = Ti(t);
  let r = Wg(t);
  for (; r && $k(r) && getComputedStyle(r).position === 'static'; ) r = Wg(r);
  return r &&
    (Br(r) === 'html' ||
      (Br(r) === 'body' && getComputedStyle(r).position === 'static' && !w0(r)))
    ? n
    : r || zk(t) || n;
}
function Ug(t) {
  return { width: t.offsetWidth, height: t.offsetHeight };
}
function Fk(t) {
  let { rect: n, offsetParent: r, strategy: o } = t;
  const l = Wr(r),
    u = Ei(r);
  if (r === u) return n;
  let f = { scrollLeft: 0, scrollTop: 0 };
  const h = { x: 0, y: 0 };
  if (
    (l || (!l && o !== 'fixed')) &&
    ((Br(r) !== 'body' || Lc(u)) && (f = Ac(r)), Wr(r))
  ) {
    const d = Qo(r, !0);
    (h.x = d.x + r.clientLeft), (h.y = d.y + r.clientTop);
  }
  return { ...n, x: n.x - f.scrollLeft + h.x, y: n.y - f.scrollTop + h.y };
}
function Ik(t) {
  const n = Ti(t),
    r = Ei(t),
    o = n.visualViewport;
  let l = r.clientWidth,
    u = r.clientHeight,
    f = 0,
    h = 0;
  return (
    o &&
      ((l = o.width),
      (u = o.height),
      Math.abs(n.innerWidth / o.scale - o.width) < 0.01 &&
        ((f = o.offsetLeft), (h = o.offsetTop))),
    { width: l, height: u, x: f, y: h }
  );
}
function qk(t) {
  var n;
  const r = Ei(t),
    o = Ac(t),
    l = (n = t.ownerDocument) == null ? void 0 : n.body,
    u = na(
      r.scrollWidth,
      r.clientWidth,
      l ? l.scrollWidth : 0,
      l ? l.clientWidth : 0,
    ),
    f = na(
      r.scrollHeight,
      r.clientHeight,
      l ? l.scrollHeight : 0,
      l ? l.clientHeight : 0,
    );
  let h = -o.scrollLeft + x0(t);
  const d = -o.scrollTop;
  return (
    Ec(l || r).direction === 'rtl' &&
      (h += na(r.clientWidth, l ? l.clientWidth : 0) - u),
    { width: u, height: f, x: h, y: d }
  );
}
function _0(t) {
  return ['html', 'body', '#document'].includes(Br(t))
    ? t.ownerDocument.body
    : Wr(t) && Lc(t)
    ? t
    : _0(Mc(t));
}
function Xl(t, n) {
  var r;
  n === void 0 && (n = []);
  const o = _0(t),
    l = o === ((r = t.ownerDocument) == null ? void 0 : r.body),
    u = Ti(o),
    f = l ? [u].concat(u.visualViewport || [], Lc(o) ? o : []) : o,
    h = n.concat(f);
  return l ? h : h.concat(Xl(Mc(f)));
}
function Hk(t, n) {
  const r = n.getRootNode == null ? void 0 : n.getRootNode();
  if (t.contains(n)) return !0;
  if (r && b0(r)) {
    let o = n;
    do {
      if (o && t === o) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Bk(t) {
  const n = Qo(t),
    r = n.top + t.clientTop,
    o = n.left + t.clientLeft;
  return {
    top: r,
    left: o,
    x: o,
    y: r,
    right: o + t.clientWidth,
    bottom: r + t.clientHeight,
    width: t.clientWidth,
    height: t.clientHeight,
  };
}
function jg(t, n) {
  return n === 'viewport' ? _f(Ik(t)) : Vl(n) ? Bk(n) : _f(qk(Ei(t)));
}
function Wk(t) {
  const n = Xl(Mc(t)),
    o = ['absolute', 'fixed'].includes(Ec(t).position) && Wr(t) ? Cf(t) : t;
  return Vl(o) ? n.filter((l) => Vl(l) && Hk(l, o) && Br(l) !== 'body') : [];
}
function Uk(t) {
  let { element: n, boundary: r, rootBoundary: o } = t;
  const u = [...(r === 'clippingParents' ? Wk(n) : [].concat(r)), o],
    f = u[0],
    h = u.reduce((d, g) => {
      const v = jg(n, g);
      return (
        (d.top = na(v.top, d.top)),
        (d.right = Bg(v.right, d.right)),
        (d.bottom = Bg(v.bottom, d.bottom)),
        (d.left = na(v.left, d.left)),
        d
      );
    }, jg(n, f));
  return (
    (h.width = h.right - h.left),
    (h.height = h.bottom - h.top),
    (h.x = h.left),
    (h.y = h.top),
    h
  );
}
const jk = {
    getElementRects: (t) => {
      let { reference: n, floating: r, strategy: o } = t;
      return { reference: Rk(n, Cf(r), o), floating: { ...Ug(r), x: 0, y: 0 } };
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: (t) => Fk(t),
    getOffsetParent: (t) => {
      let { element: n } = t;
      return Cf(n);
    },
    isElement: (t) => Vl(t),
    getDocumentElement: (t) => {
      let { element: n } = t;
      return Ei(n);
    },
    getClippingClientRect: (t) => Uk(t),
    getDimensions: (t) => {
      let { element: n } = t;
      return Ug(n);
    },
    getClientRects: (t) => {
      let { element: n } = t;
      return n.getClientRects();
    },
  },
  Gk = (t, n, r) => vk(t, n, { platform: jk, ...r });
var Vk = Object.defineProperty,
  Kk = Object.defineProperties,
  Xk = Object.getOwnPropertyDescriptors,
  Gg = Object.getOwnPropertySymbols,
  Yk = Object.prototype.hasOwnProperty,
  Zk = Object.prototype.propertyIsEnumerable,
  Vg = (t, n, r) =>
    n in t
      ? Vk(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[n] = r),
  Rr = (t, n) => {
    for (var r in n || (n = {})) Yk.call(n, r) && Vg(t, r, n[r]);
    if (Gg) for (var r of Gg(n)) Zk.call(n, r) && Vg(t, r, n[r]);
    return t;
  },
  Ca = (t, n) => Kk(t, Xk(n));
function S0(t, n) {
  for (const r in n)
    Object.prototype.hasOwnProperty.call(n, r) &&
      (typeof n[r] == 'object' && t[r] ? S0(t[r], n[r]) : (t[r] = n[r]));
}
const Qi = {
  disabled: !1,
  distance: 5,
  skidding: 0,
  container: 'body',
  boundary: void 0,
  instantMove: !1,
  disposeTimeout: 5e3,
  popperTriggers: [],
  strategy: 'absolute',
  preventOverflow: !0,
  flip: !0,
  shift: !0,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: !0,
  themes: {
    tooltip: {
      placement: 'top',
      triggers: ['hover', 'focus', 'touch'],
      hideTriggers: (t) => [...t, 'click'],
      delay: { show: 200, hide: 0 },
      handleResize: !1,
      html: !1,
      loadingContent: '...',
    },
    dropdown: {
      placement: 'bottom',
      triggers: ['click'],
      delay: 0,
      handleResize: !0,
      autoHide: !0,
    },
    menu: {
      $extend: 'dropdown',
      triggers: ['hover', 'focus'],
      popperTriggers: ['hover', 'focus'],
      delay: { show: 0, hide: 400 },
    },
  },
};
function ts(t, n) {
  let r = Qi.themes[t] || {},
    o;
  do
    (o = r[n]),
      typeof o > 'u'
        ? r.$extend
          ? (r = Qi.themes[r.$extend] || {})
          : ((r = null), (o = Qi[n]))
        : (r = null);
  while (r);
  return o;
}
function Jk(t) {
  const n = [t];
  let r = Qi.themes[t] || {};
  do
    r.$extend && !r.$resetCss
      ? (n.push(r.$extend), (r = Qi.themes[r.$extend] || {}))
      : (r = null);
  while (r);
  return n.map((o) => `v-popper--theme-${o}`);
}
let es = !1;
if (typeof window < 'u') {
  es = !1;
  try {
    const t = Object.defineProperty({}, 'passive', {
      get() {
        es = !0;
      },
    });
    window.addEventListener('test', null, t);
  } catch {}
}
let k0 = !1;
typeof window < 'u' &&
  typeof navigator < 'u' &&
  (k0 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const C0 = ['auto', 'top', 'bottom', 'left', 'right'].reduce(
    (t, n) => t.concat([n, `${n}-start`, `${n}-end`]),
    [],
  ),
  Kg = {
    hover: 'mouseenter',
    focus: 'focus',
    click: 'click',
    touch: 'touchstart',
  },
  Xg = {
    hover: 'mouseleave',
    focus: 'blur',
    click: 'click',
    touch: 'touchend',
  };
function Qk(t, n) {
  const r = t.indexOf(n);
  r !== -1 && t.splice(r, 1);
}
function ju() {
  return new Promise((t) =>
    requestAnimationFrame(() => {
      requestAnimationFrame(t);
    }),
  );
}
const gr = [];
let $o = null,
  Tf = function () {};
typeof window < 'u' && (Tf = window.Element);
function he(t) {
  return function (n) {
    return ts(n.theme, t);
  };
}
var T0 = () =>
  ne({
    name: 'VPopper',
    props: {
      theme: { type: String, required: !0 },
      targetNodes: { type: Function, required: !0 },
      referenceNode: { type: Function, required: !0 },
      popperNode: { type: Function, required: !0 },
      shown: { type: Boolean, default: !1 },
      showGroup: { type: String, default: null },
      ariaId: { default: null },
      disabled: { type: Boolean, default: he('disabled') },
      placement: {
        type: String,
        default: he('placement'),
        validator: (t) => C0.includes(t),
      },
      delay: { type: [String, Number, Object], default: he('delay') },
      distance: { type: [Number, String], default: he('distance') },
      skidding: { type: [Number, String], default: he('skidding') },
      triggers: { type: Array, default: he('triggers') },
      showTriggers: { type: [Array, Function], default: he('showTriggers') },
      hideTriggers: { type: [Array, Function], default: he('hideTriggers') },
      popperTriggers: { type: Array, default: he('popperTriggers') },
      popperShowTriggers: {
        type: [Array, Function],
        default: he('popperShowTriggers'),
      },
      popperHideTriggers: {
        type: [Array, Function],
        default: he('popperHideTriggers'),
      },
      container: {
        type: [String, Object, Tf, Boolean],
        default: he('container'),
      },
      boundary: { type: [String, Tf], default: he('boundary') },
      strategy: {
        type: String,
        validator: (t) => ['absolute', 'fixed'].includes(t),
        default: he('strategy'),
      },
      autoHide: { type: Boolean, default: he('autoHide') },
      handleResize: { type: Boolean, default: he('handleResize') },
      instantMove: { type: Boolean, default: he('instantMove') },
      eagerMount: { type: Boolean, default: he('eagerMount') },
      popperClass: {
        type: [String, Array, Object],
        default: he('popperClass'),
      },
      computeTransformOrigin: {
        type: Boolean,
        default: he('computeTransformOrigin'),
      },
      autoMinSize: { type: Boolean, default: he('autoMinSize') },
      autoMaxSize: { type: Boolean, default: he('autoMaxSize') },
      preventOverflow: { type: Boolean, default: he('preventOverflow') },
      overflowPadding: {
        type: [Number, String],
        default: he('overflowPadding'),
      },
      arrowPadding: { type: [Number, String], default: he('arrowPadding') },
      arrowOverflow: { type: Boolean, default: he('arrowOverflow') },
      flip: { type: Boolean, default: he('flip') },
      shift: { type: Boolean, default: he('shift') },
      shiftCrossAxis: { type: Boolean, default: he('shiftCrossAxis') },
    },
    emits: [
      'show',
      'hide',
      'update:shown',
      'apply-show',
      'apply-hide',
      'close-group',
      'close-directive',
      'auto-hide',
      'resize',
      'dispose',
    ],
    data() {
      return {
        isShown: !1,
        isMounted: !1,
        skipTransition: !1,
        classes: { showFrom: !1, showTo: !1, hideFrom: !1, hideTo: !0 },
        result: {
          x: 0,
          y: 0,
          placement: '',
          strategy: this.strategy,
          arrow: { x: 0, y: 0, centerOffset: 0 },
          transformOrigin: null,
        },
      };
    },
    computed: {
      popperId() {
        return this.ariaId != null ? this.ariaId : this.randomId;
      },
      shouldMountContent() {
        return this.eagerMount || this.isMounted;
      },
      slotData() {
        return {
          popperId: this.popperId,
          isShown: this.isShown,
          shouldMountContent: this.shouldMountContent,
          skipTransition: this.skipTransition,
          autoHide: this.autoHide,
          show: this.show,
          hide: this.hide,
          handleResize: this.handleResize,
          onResize: this.onResize,
          classes: Ca(Rr({}, this.classes), { popperClass: this.popperClass }),
          result: this.result,
        };
      },
    },
    watch: Rr(
      {
        shown: '$_autoShowHide',
        disabled(t) {
          t ? this.dispose() : this.init();
        },
        async container() {
          this.isShown &&
            (this.$_ensureTeleport(), await this.$_computePosition());
        },
        triggers() {
          this.$_isDisposed ||
            (this.$_removeEventListeners(), this.$_addEventListeners());
        },
      },
      [
        'placement',
        'distance',
        'skidding',
        'boundary',
        'strategy',
        'overflowPadding',
        'arrowPadding',
        'preventOverflow',
        'shift',
        'shiftCrossAxis',
        'flip',
      ].reduce((t, n) => ((t[n] = '$_computePosition'), t), {}),
    ),
    created() {
      (this.$_isDisposed = !0),
        (this.randomId = `popper_${[Math.random(), Date.now()]
          .map((t) => t.toString(36).substring(2, 10))
          .join('_')}`);
    },
    mounted() {
      this.init(), this.$_detachPopperNode();
    },
    activated() {
      this.$_autoShowHide();
    },
    deactivated() {
      this.hide();
    },
    beforeUnmount() {
      this.dispose();
    },
    methods: {
      show({ event: t = null, skipDelay: n = !1, force: r = !1 } = {}) {
        (r || !this.disabled) &&
          (this.$_scheduleShow(t, n),
          this.$emit('show'),
          (this.$_showFrameLocked = !0),
          requestAnimationFrame(() => {
            this.$_showFrameLocked = !1;
          })),
          this.$emit('update:shown', !0);
      },
      hide({ event: t = null, skipDelay: n = !1 } = {}) {
        this.$_scheduleHide(t, n),
          this.$emit('hide'),
          this.$emit('update:shown', !1);
      },
      init() {
        this.$_isDisposed &&
          ((this.$_isDisposed = !1),
          (this.isMounted = !1),
          (this.$_events = []),
          (this.$_preventShow = !1),
          (this.$_referenceNode = this.referenceNode()),
          (this.$_targetNodes = this.targetNodes().filter(
            (t) => t.nodeType === t.ELEMENT_NODE,
          )),
          (this.$_popperNode = this.popperNode()),
          (this.$_innerNode =
            this.$_popperNode.querySelector('.v-popper__inner')),
          (this.$_arrowNode = this.$_popperNode.querySelector(
            '.v-popper__arrow-container',
          )),
          this.$_swapTargetAttrs('title', 'data-original-title'),
          this.$_detachPopperNode(),
          this.triggers.length && this.$_addEventListeners(),
          this.shown && this.show());
      },
      dispose() {
        this.$_isDisposed ||
          ((this.$_isDisposed = !0),
          this.$_removeEventListeners(),
          this.hide({ skipDelay: !0 }),
          this.$_detachPopperNode(),
          (this.isMounted = !1),
          (this.isShown = !1),
          this.$_swapTargetAttrs('data-original-title', 'title'),
          this.$emit('dispose'));
      },
      async onResize() {
        this.isShown && (await this.$_computePosition(), this.$emit('resize'));
      },
      async $_computePosition() {
        var t;
        if (this.$_isDisposed) return;
        const n = { strategy: this.strategy, middleware: [] };
        (this.distance || this.skidding) &&
          n.middleware.push(
            Ak({ mainAxis: this.distance, crossAxis: this.skidding }),
          );
        const r = this.placement.startsWith('auto');
        r
          ? n.middleware.push(
              Ck({
                alignment: (t = this.placement.split('-')[1]) != null ? t : '',
              }),
            )
          : (n.placement = this.placement),
          this.preventOverflow &&
            (this.shift &&
              n.middleware.push(
                Nk({
                  padding: this.overflowPadding,
                  boundary: this.boundary,
                  crossAxis: this.shiftCrossAxis,
                }),
              ),
            !r &&
              this.flip &&
              n.middleware.push(
                Ek({ padding: this.overflowPadding, boundary: this.boundary }),
              )),
          n.middleware.push(
            bk({ element: this.$_arrowNode, padding: this.arrowPadding }),
          ),
          this.arrowOverflow &&
            n.middleware.push({
              name: 'arrowOverflow',
              fn: ({ placement: l, rects: u, middlewareData: f }) => {
                let h;
                const { centerOffset: d } = f.arrow;
                return (
                  l.startsWith('top') || l.startsWith('bottom')
                    ? (h = Math.abs(d) > u.reference.width / 2)
                    : (h = Math.abs(d) > u.reference.height / 2),
                  { data: { overflow: h } }
                );
              },
            }),
          this.autoMinSize &&
            n.middleware.push({
              name: 'autoMinSize',
              fn: ({ rects: l, placement: u, middlewareData: f }) => {
                var h;
                if ((h = f.autoMinSize) != null && h.skip) return {};
                let d, g;
                return (
                  u.startsWith('top') || u.startsWith('bottom')
                    ? (d = l.reference.width)
                    : (g = l.reference.height),
                  (this.$_innerNode.style.minWidth =
                    d != null ? `${d}px` : null),
                  (this.$_innerNode.style.minHeight =
                    g != null ? `${g}px` : null),
                  { data: { skip: !0 }, reset: { rects: !0 } }
                );
              },
            }),
          this.autoMaxSize &&
            n.middleware.push(
              Pk({
                boundary: this.boundary,
                padding: this.overflowPadding,
                apply: ({ width: l, height: u }) => {
                  (this.$_innerNode.style.maxWidth =
                    l != null ? `${l}px` : null),
                    (this.$_innerNode.style.maxHeight =
                      u != null ? `${u}px` : null);
                },
              }),
            );
        const o = await Gk(this.$_referenceNode, this.$_popperNode, n);
        Object.assign(this.result, {
          x: o.x,
          y: o.y,
          placement: o.placement,
          strategy: o.strategy,
          arrow: Rr(
            Rr({}, o.middlewareData.arrow),
            o.middlewareData.arrowOverflow,
          ),
        });
      },
      $_scheduleShow(t = null, n = !1) {
        if (
          ((this.$_hideInProgress = !1),
          clearTimeout(this.$_scheduleTimer),
          $o && this.instantMove && $o.instantMove)
        ) {
          $o.$_applyHide(!0), this.$_applyShow(!0);
          return;
        }
        n
          ? this.$_applyShow()
          : (this.$_scheduleTimer = setTimeout(
              this.$_applyShow.bind(this),
              this.$_computeDelay('show'),
            ));
      },
      $_scheduleHide(t = null, n = !1) {
        (this.$_hideInProgress = !0),
          clearTimeout(this.$_scheduleTimer),
          this.isShown && ($o = this),
          n
            ? this.$_applyHide()
            : (this.$_scheduleTimer = setTimeout(
                this.$_applyHide.bind(this),
                this.$_computeDelay('hide'),
              ));
      },
      $_computeDelay(t) {
        const n = this.delay;
        return parseInt((n && n[t]) || n || 0);
      },
      async $_applyShow(t = !1) {
        clearTimeout(this.$_disposeTimer),
          clearTimeout(this.$_scheduleTimer),
          (this.skipTransition = t),
          !this.isShown &&
            (this.$_ensureTeleport(),
            await ju(),
            await this.$_computePosition(),
            await this.$_applyShowEffect());
      },
      async $_applyShowEffect() {
        if (this.$_hideInProgress) return;
        if (this.computeTransformOrigin) {
          const n = this.$_referenceNode.getBoundingClientRect(),
            r = this.$_popperNode.querySelector('.v-popper__wrapper'),
            o = r.parentNode.getBoundingClientRect(),
            l = n.x + n.width / 2 - (o.left + r.offsetLeft),
            u = n.y + n.height / 2 - (o.top + r.offsetTop);
          this.result.transformOrigin = `${l}px ${u}px`;
        }
        (this.isShown = !0),
          this.$_applyAttrsToTarget({
            'aria-describedby': this.popperId,
            'data-popper-shown': '',
          });
        const t = this.showGroup;
        if (t) {
          let n;
          for (let r = 0; r < gr.length; r++)
            (n = gr[r]),
              n.showGroup !== t && (n.hide(), n.$emit('close-group'));
        }
        gr.push(this),
          this.$emit('apply-show'),
          (this.classes.showFrom = !0),
          (this.classes.showTo = !1),
          (this.classes.hideFrom = !1),
          (this.classes.hideTo = !1),
          await ju(),
          (this.classes.showFrom = !1),
          (this.classes.showTo = !0);
      },
      async $_applyHide(t = !1) {
        if ((clearTimeout(this.$_scheduleTimer), !this.isShown)) return;
        (this.skipTransition = t),
          Qk(gr, this),
          $o === this && ($o = null),
          (this.isShown = !1),
          this.$_applyAttrsToTarget({
            'aria-describedby': void 0,
            'data-popper-shown': void 0,
          }),
          clearTimeout(this.$_disposeTimer);
        const n = ts(this.theme, 'disposeTimeout');
        n !== null &&
          (this.$_disposeTimer = setTimeout(() => {
            this.$_popperNode &&
              (this.$_detachPopperNode(), (this.isMounted = !1));
          }, n)),
          this.$emit('apply-hide'),
          (this.classes.showFrom = !1),
          (this.classes.showTo = !1),
          (this.classes.hideFrom = !0),
          (this.classes.hideTo = !1),
          await ju(),
          (this.classes.hideFrom = !1),
          (this.classes.hideTo = !0);
      },
      $_autoShowHide() {
        this.shown ? this.show() : this.hide();
      },
      $_ensureTeleport() {
        if (this.$_isDisposed) return;
        let t = this.container;
        if (
          (typeof t == 'string'
            ? (t = window.document.querySelector(t))
            : t === !1 && (t = this.$_targetNodes[0].parentNode),
          !t)
        )
          throw new Error('No container for popover: ' + this.container);
        t.appendChild(this.$_popperNode), (this.isMounted = !0);
      },
      $_addEventListeners() {
        const t = (l, u, f) => {
            this.$_events.push({ targetNodes: l, eventType: u, handler: f }),
              l.forEach((h) =>
                h.addEventListener(u, f, es ? { passive: !0 } : void 0),
              );
          },
          n = (l, u, f, h, d) => {
            let g = f;
            h != null && (g = typeof h == 'function' ? h(g) : h),
              g.forEach((v) => {
                const b = u[v];
                b && t(l, b, d);
              });
          },
          r = (l) => {
            (this.isShown && !this.$_hideInProgress) ||
              ((l.usedByTooltip = !0),
              !this.$_preventShow && this.show({ event: l }));
          };
        n(this.$_targetNodes, Kg, this.triggers, this.showTriggers, r),
          n(
            [this.$_popperNode],
            Kg,
            this.popperTriggers,
            this.popperShowTriggers,
            r,
          );
        const o = (l) => {
          l.usedByTooltip || this.hide({ event: l });
        };
        n(this.$_targetNodes, Xg, this.triggers, this.hideTriggers, o),
          n(
            [this.$_popperNode],
            Xg,
            this.popperTriggers,
            this.popperHideTriggers,
            o,
          ),
          t(
            [...Xl(this.$_referenceNode), ...Xl(this.$_popperNode)],
            'scroll',
            () => {
              this.$_computePosition();
            },
          );
      },
      $_removeEventListeners() {
        this.$_events.forEach(
          ({ targetNodes: t, eventType: n, handler: r }) => {
            t.forEach((o) => o.removeEventListener(n, r));
          },
        ),
          (this.$_events = []);
      },
      $_handleGlobalClose(t, n = !1) {
        this.$_showFrameLocked ||
          (this.hide({ event: t }),
          t.closePopover
            ? this.$emit('close-directive')
            : this.$emit('auto-hide'),
          n &&
            ((this.$_preventShow = !0),
            setTimeout(() => {
              this.$_preventShow = !1;
            }, 300)));
      },
      $_detachPopperNode() {
        this.$_popperNode.parentNode &&
          this.$_popperNode.parentNode.removeChild(this.$_popperNode);
      },
      $_swapTargetAttrs(t, n) {
        for (const r of this.$_targetNodes) {
          const o = r.getAttribute(t);
          o && (r.removeAttribute(t), r.setAttribute(n, o));
        }
      },
      $_applyAttrsToTarget(t) {
        for (const n of this.$_targetNodes)
          for (const r in t) {
            const o = t[r];
            o == null ? n.removeAttribute(r) : n.setAttribute(r, o);
          }
      },
    },
    render() {
      return this.$slots.default(this.slotData);
    },
  });
typeof document < 'u' &&
  typeof window < 'u' &&
  (k0
    ? (document.addEventListener(
        'touchstart',
        Yg,
        es ? { passive: !0, capture: !0 } : !0,
      ),
      document.addEventListener(
        'touchend',
        eC,
        es ? { passive: !0, capture: !0 } : !0,
      ))
    : (window.addEventListener('mousedown', Yg, !0),
      window.addEventListener('click', tC, !0)),
  window.addEventListener('resize', nC));
function Yg(t) {
  for (let n = 0; n < gr.length; n++) {
    const r = gr[n],
      o = r.popperNode();
    r.$_mouseDownContains = o.contains(t.target);
  }
}
function tC(t) {
  E0(t);
}
function eC(t) {
  E0(t, !0);
}
function E0(t, n = !1) {
  for (let r = 0; r < gr.length; r++) {
    const o = gr[r],
      l = o.popperNode(),
      u = o.$_mouseDownContains || l.contains(t.target);
    requestAnimationFrame(() => {
      (t.closeAllPopover || (t.closePopover && u) || (o.autoHide && !u)) &&
        o.$_handleGlobalClose(t, n);
    });
  }
}
function nC(t) {
  for (let n = 0; n < gr.length; n++) gr[n].$_computePosition(t);
}
function rC() {
  var t = window.navigator.userAgent,
    n = t.indexOf('MSIE ');
  if (n > 0) return parseInt(t.substring(n + 5, t.indexOf('.', n)), 10);
  var r = t.indexOf('Trident/');
  if (r > 0) {
    var o = t.indexOf('rv:');
    return parseInt(t.substring(o + 3, t.indexOf('.', o)), 10);
  }
  var l = t.indexOf('Edge/');
  return l > 0 ? parseInt(t.substring(l + 5, t.indexOf('.', l)), 10) : -1;
}
let Pl;
function Ef() {
  Ef.init || ((Ef.init = !0), (Pl = rC() !== -1));
}
var Nc = {
  name: 'ResizeObserver',
  props: {
    emitOnMount: { type: Boolean, default: !1 },
    ignoreWidth: { type: Boolean, default: !1 },
    ignoreHeight: { type: Boolean, default: !1 },
  },
  emits: ['notify'],
  mounted() {
    Ef(),
      Hr(() => {
        (this._w = this.$el.offsetWidth),
          (this._h = this.$el.offsetHeight),
          this.emitOnMount && this.emitSize();
      });
    const t = document.createElement('object');
    (this._resizeObject = t),
      t.setAttribute('aria-hidden', 'true'),
      t.setAttribute('tabindex', -1),
      (t.onload = this.addResizeHandlers),
      (t.type = 'text/html'),
      Pl && this.$el.appendChild(t),
      (t.data = 'about:blank'),
      Pl || this.$el.appendChild(t);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      ((!this.ignoreWidth && this._w !== this.$el.offsetWidth) ||
        (!this.ignoreHeight && this._h !== this.$el.offsetHeight)) &&
        ((this._w = this.$el.offsetWidth),
        (this._h = this.$el.offsetHeight),
        this.emitSize());
    },
    emitSize() {
      this.$emit('notify', { width: this._w, height: this._h });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener(
        'resize',
        this.compareAndNotify,
      ),
        this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject &&
        this._resizeObject.onload &&
        (!Pl &&
          this._resizeObject.contentDocument &&
          this._resizeObject.contentDocument.defaultView.removeEventListener(
            'resize',
            this.compareAndNotify,
          ),
        this.$el.removeChild(this._resizeObject),
        (this._resizeObject.onload = null),
        (this._resizeObject = null));
    },
  },
};
const iC = N1();
Om('data-v-b329ee4c');
const oC = { class: 'resize-observer', tabindex: '-1' };
$m();
const sC = iC((t, n, r, o, l, u) => (at(), Yt('div', oC)));
Nc.render = sC;
Nc.__scopeId = 'data-v-b329ee4c';
Nc.__file = 'src/components/ResizeObserver.vue';
var L0 = {
    computed: {
      themeClass() {
        return Jk(this.theme);
      },
    },
  },
  _h = (t, n) => {
    const r = t.__vccOpts || t;
    for (const [o, l] of n) r[o] = l;
    return r;
  };
const aC = ne({
    name: 'VPopperContent',
    components: { ResizeObserver: Nc },
    mixins: [L0],
    props: {
      popperId: String,
      theme: String,
      shown: Boolean,
      mounted: Boolean,
      skipTransition: Boolean,
      autoHide: Boolean,
      handleResize: Boolean,
      classes: Object,
      result: Object,
    },
    emits: ['hide', 'resize'],
    methods: {
      toPx(t) {
        return t != null && !isNaN(t) ? `${t}px` : null;
      },
    },
  }),
  lC = ['id', 'aria-hidden', 'tabindex', 'data-popper-placement'],
  cC = { ref: 'inner', class: 'v-popper__inner' },
  uC = lt('div', { class: 'v-popper__arrow-outer' }, null, -1),
  fC = lt('div', { class: 'v-popper__arrow-inner' }, null, -1),
  hC = [uC, fC];
function dC(t, n, r, o, l, u) {
  const f = eo('ResizeObserver');
  return (
    at(),
    Lt(
      'div',
      {
        id: t.popperId,
        ref: 'popover',
        class: ve([
          'v-popper__popper',
          [
            t.themeClass,
            t.classes.popperClass,
            {
              'v-popper__popper--shown': t.shown,
              'v-popper__popper--hidden': !t.shown,
              'v-popper__popper--show-from': t.classes.showFrom,
              'v-popper__popper--show-to': t.classes.showTo,
              'v-popper__popper--hide-from': t.classes.hideFrom,
              'v-popper__popper--hide-to': t.classes.hideTo,
              'v-popper__popper--skip-transition': t.skipTransition,
              'v-popper__popper--arrow-overflow': t.result.arrow.overflow,
            },
          ],
        ]),
        style: Cn({
          position: t.result.strategy,
          transform: `translate3d(${Math.round(t.result.x)}px,${Math.round(
            t.result.y,
          )}px,0)`,
        }),
        'aria-hidden': t.shown ? 'false' : 'true',
        tabindex: t.autoHide ? 0 : void 0,
        'data-popper-placement': t.result.placement,
        onKeyup:
          n[1] || (n[1] = mf((h) => t.autoHide && t.$emit('hide'), ['esc'])),
      },
      [
        lt(
          'div',
          {
            class: 'v-popper__wrapper',
            style: Cn({ transformOrigin: t.result.transformOrigin }),
          },
          [
            lt(
              'div',
              cC,
              [
                t.mounted
                  ? (at(),
                    Lt(
                      ue,
                      { key: 0 },
                      [
                        lt('div', null, [tr(t.$slots, 'default')]),
                        t.handleResize
                          ? (at(),
                            Yt(f, {
                              key: 0,
                              onNotify:
                                n[0] || (n[0] = (h) => t.$emit('resize', h)),
                            }))
                          : ee('', !0),
                      ],
                      64,
                    ))
                  : ee('', !0),
              ],
              512,
            ),
            lt(
              'div',
              {
                ref: 'arrow',
                class: 'v-popper__arrow-container',
                style: Cn({
                  left: t.toPx(t.result.arrow.x),
                  top: t.toPx(t.result.arrow.y),
                }),
              },
              hC,
              4,
            ),
          ],
          4,
        ),
      ],
      46,
      lC,
    )
  );
}
var A0 = _h(aC, [['render', dC]]),
  M0 = {
    methods: {
      show(...t) {
        return this.$refs.popper.show(...t);
      },
      hide(...t) {
        return this.$refs.popper.hide(...t);
      },
      dispose(...t) {
        return this.$refs.popper.dispose(...t);
      },
      onResize(...t) {
        return this.$refs.popper.onResize(...t);
      },
    },
  };
const pC = ne({
  name: 'VPopperWrapper',
  components: { Popper: T0(), PopperContent: A0 },
  mixins: [M0, L0],
  inheritAttrs: !1,
  props: { theme: { type: String, default: null } },
  computed: {
    finalTheme() {
      var t;
      return (t = this.theme) != null ? t : this.$options.vPopperTheme;
    },
    popperAttrs() {
      const t = Rr({}, this.$attrs);
      return delete t.class, delete t.style, t;
    },
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$refs.reference.children).filter(
        (t) => t !== this.$refs.popperContent.$el,
      );
    },
  },
});
function gC(t, n, r, o, l, u) {
  const f = eo('PopperContent'),
    h = eo('Popper');
  return (
    at(),
    Yt(
      h,
      _i({ ref: 'popper' }, t.popperAttrs, {
        theme: t.finalTheme,
        'target-nodes': t.getTargetNodes,
        'reference-node': () => t.$refs.reference,
        'popper-node': () => t.$refs.popperContent.$el,
      }),
      {
        default: Xt(
          ({
            popperId: d,
            isShown: g,
            shouldMountContent: v,
            skipTransition: b,
            autoHide: x,
            show: S,
            hide: A,
            handleResize: L,
            onResize: M,
            classes: T,
            result: E,
          }) => [
            lt(
              'div',
              {
                ref: 'reference',
                class: ve([
                  'v-popper',
                  [t.$attrs.class, t.themeClass, { 'v-popper--shown': g }],
                ]),
                style: Cn(t.$attrs.style),
              },
              [
                tr(t.$slots, 'default', { shown: g, show: S, hide: A }),
                It(
                  f,
                  {
                    ref: 'popperContent',
                    'popper-id': d,
                    theme: t.finalTheme,
                    shown: g,
                    mounted: v,
                    'skip-transition': b,
                    'auto-hide': x,
                    'handle-resize': L,
                    classes: T,
                    result: E,
                    onHide: A,
                    onResize: M,
                  },
                  {
                    default: Xt(() => [
                      tr(t.$slots, 'popper', { shown: g, hide: A }),
                    ]),
                    _: 2,
                  },
                  1032,
                  [
                    'popper-id',
                    'theme',
                    'shown',
                    'mounted',
                    'skip-transition',
                    'auto-hide',
                    'handle-resize',
                    'classes',
                    'result',
                    'onHide',
                    'onResize',
                  ],
                ),
              ],
              6,
            ),
          ],
        ),
        _: 3,
      },
      16,
      ['theme', 'target-nodes', 'reference-node', 'popper-node'],
    )
  );
}
var Sh = _h(pC, [['render', gC]]);
const Zg = ne(Ca(Rr({}, Sh), { name: 'VDropdown', vPopperTheme: 'dropdown' })),
  Jg = ne(Ca(Rr({}, Sh), { name: 'VMenu', vPopperTheme: 'menu' })),
  Lf = ne(Ca(Rr({}, Sh), { name: 'VTooltip', vPopperTheme: 'tooltip' })),
  vC = ne({
    name: 'VTooltipDirective',
    components: { Popper: T0(), PopperContent: A0 },
    mixins: [M0],
    inheritAttrs: !1,
    props: {
      theme: { type: String, default: 'tooltip' },
      html: { type: Boolean, default: (t) => ts(t.theme, 'html') },
      content: { type: [String, Number, Function], default: null },
      loadingContent: {
        type: String,
        default: (t) => ts(t.theme, 'loadingContent'),
      },
    },
    data() {
      return { asyncContent: null };
    },
    computed: {
      isContentAsync() {
        return typeof this.content == 'function';
      },
      loading() {
        return this.isContentAsync && this.asyncContent == null;
      },
      finalContent() {
        return this.isContentAsync
          ? this.loading
            ? this.loadingContent
            : this.asyncContent
          : this.content;
      },
    },
    watch: {
      content: {
        handler() {
          this.fetchContent(!0);
        },
        immediate: !0,
      },
      async finalContent() {
        await this.$nextTick(), this.$refs.popper.onResize();
      },
    },
    created() {
      this.$_fetchId = 0;
    },
    methods: {
      fetchContent(t) {
        if (
          typeof this.content == 'function' &&
          this.$_isShown &&
          (t || (!this.$_loading && this.asyncContent == null))
        ) {
          (this.asyncContent = null), (this.$_loading = !0);
          const n = ++this.$_fetchId,
            r = this.content(this);
          r.then ? r.then((o) => this.onResult(n, o)) : this.onResult(n, r);
        }
      },
      onResult(t, n) {
        t === this.$_fetchId &&
          ((this.$_loading = !1), (this.asyncContent = n));
      },
      onShow() {
        (this.$_isShown = !0), this.fetchContent();
      },
      onHide() {
        this.$_isShown = !1;
      },
    },
  }),
  mC = ['innerHTML'],
  yC = ['textContent'];
function bC(t, n, r, o, l, u) {
  const f = eo('PopperContent'),
    h = eo('Popper');
  return (
    at(),
    Yt(
      h,
      _i({ ref: 'popper' }, t.$attrs, {
        theme: t.theme,
        'popper-node': () => t.$refs.popperContent.$el,
        onApplyShow: t.onShow,
        onApplyHide: t.onHide,
      }),
      {
        default: Xt(
          ({
            popperId: d,
            isShown: g,
            shouldMountContent: v,
            skipTransition: b,
            autoHide: x,
            hide: S,
            handleResize: A,
            onResize: L,
            classes: M,
            result: T,
          }) => [
            It(
              f,
              {
                ref: 'popperContent',
                class: ve({ 'v-popper--tooltip-loading': t.loading }),
                'popper-id': d,
                theme: t.theme,
                shown: g,
                mounted: v,
                'skip-transition': b,
                'auto-hide': x,
                'handle-resize': A,
                classes: M,
                result: T,
                onHide: S,
                onResize: L,
              },
              {
                default: Xt(() => [
                  t.html
                    ? (at(),
                      Lt(
                        'div',
                        { key: 0, innerHTML: t.finalContent },
                        null,
                        8,
                        mC,
                      ))
                    : (at(),
                      Lt(
                        'div',
                        { key: 1, textContent: Jt(t.finalContent) },
                        null,
                        8,
                        yC,
                      )),
                ]),
                _: 2,
              },
              1032,
              [
                'class',
                'popper-id',
                'theme',
                'shown',
                'mounted',
                'skip-transition',
                'auto-hide',
                'handle-resize',
                'classes',
                'result',
                'onHide',
                'onResize',
              ],
            ),
          ],
        ),
        _: 1,
      },
      16,
      ['theme', 'popper-node', 'onApplyShow', 'onApplyHide'],
    )
  );
}
var wC = _h(vC, [['render', bC]]);
const N0 = 'v-popper--has-tooltip';
function xC(t, n) {
  let r = t.placement;
  if (!r && n) for (const o of C0) n[o] && (r = o);
  return r || (r = ts(t.theme || 'tooltip', 'placement')), r;
}
function P0(t, n, r) {
  let o;
  const l = typeof n;
  return (
    l === 'string'
      ? (o = { content: n })
      : n && l === 'object'
      ? (o = n)
      : (o = { content: !1 }),
    (o.placement = xC(o, r)),
    (o.targetNodes = () => [t]),
    (o.referenceNode = () => t),
    o
  );
}
let Gu,
  ha,
  _C = 0;
function SC() {
  if (Gu) return;
  (ha = Vt([])),
    (Gu = o0({
      name: 'VTooltipDirectiveApp',
      setup() {
        return { directives: ha };
      },
      render() {
        return this.directives.map((n) =>
          Sa(
            wC,
            Ca(Rr({}, n.options), {
              shown: n.shown.value || n.options.shown,
              key: n.id,
            }),
          ),
        );
      },
      devtools: { hide: !0 },
    }));
  const t = document.createElement('div');
  document.body.appendChild(t), Gu.mount(t);
}
function O0(t, n, r) {
  SC();
  const o = Vt(P0(t, n, r)),
    l = Vt(!1),
    u = { id: _C++, options: o, shown: l };
  return (
    ha.value.push(u),
    t.classList && t.classList.add(N0),
    (t.$_popper = {
      options: o,
      item: u,
      show() {
        l.value = !0;
      },
      hide() {
        l.value = !1;
      },
    })
  );
}
function kh(t) {
  if (t.$_popper) {
    const n = ha.value.indexOf(t.$_popper.item);
    n !== -1 && ha.value.splice(n, 1),
      delete t.$_popper,
      delete t.$_popperOldShown,
      delete t.$_popperMountTarget;
  }
  t.classList && t.classList.remove(N0);
}
function Qg(t, { value: n, oldValue: r, modifiers: o }) {
  const l = P0(t, n, o);
  if (!l.content || ts(l.theme || 'tooltip', 'disabled')) kh(t);
  else {
    let u;
    t.$_popper ? ((u = t.$_popper), (u.options.value = l)) : (u = O0(t, n, o)),
      typeof n.shown < 'u' &&
        n.shown !== t.$_popperOldShown &&
        ((t.$_popperOldShown = n.shown), n.shown ? u.show() : u.hide());
  }
}
var $0 = {
  beforeMount: Qg,
  updated: Qg,
  beforeUnmount(t) {
    kh(t);
  },
};
function tv(t) {
  t.addEventListener('click', D0),
    t.addEventListener('touchstart', R0, es ? { passive: !0 } : !1);
}
function ev(t) {
  t.removeEventListener('click', D0),
    t.removeEventListener('touchstart', R0),
    t.removeEventListener('touchend', z0),
    t.removeEventListener('touchcancel', F0);
}
function D0(t) {
  const n = t.currentTarget;
  (t.closePopover = !n.$_vclosepopover_touch),
    (t.closeAllPopover =
      n.$_closePopoverModifiers && !!n.$_closePopoverModifiers.all);
}
function R0(t) {
  if (t.changedTouches.length === 1) {
    const n = t.currentTarget;
    n.$_vclosepopover_touch = !0;
    const r = t.changedTouches[0];
    (n.$_vclosepopover_touchPoint = r),
      n.addEventListener('touchend', z0),
      n.addEventListener('touchcancel', F0);
  }
}
function z0(t) {
  const n = t.currentTarget;
  if (((n.$_vclosepopover_touch = !1), t.changedTouches.length === 1)) {
    const r = t.changedTouches[0],
      o = n.$_vclosepopover_touchPoint;
    (t.closePopover =
      Math.abs(r.screenY - o.screenY) < 20 &&
      Math.abs(r.screenX - o.screenX) < 20),
      (t.closeAllPopover =
        n.$_closePopoverModifiers && !!n.$_closePopoverModifiers.all);
  }
}
function F0(t) {
  const n = t.currentTarget;
  n.$_vclosepopover_touch = !1;
}
var kC = {
  beforeMount(t, { value: n, modifiers: r }) {
    (t.$_closePopoverModifiers = r), (typeof n > 'u' || n) && tv(t);
  },
  updated(t, { value: n, oldValue: r, modifiers: o }) {
    (t.$_closePopoverModifiers = o),
      n !== r && (typeof n > 'u' || n ? tv(t) : ev(t));
  },
  beforeUnmount(t) {
    ev(t);
  },
};
const CC = $0,
  TC = Lf;
function EC(t, n = {}) {
  t.$_vTooltipInstalled ||
    ((t.$_vTooltipInstalled = !0),
    S0(Qi, n),
    t.directive('tooltip', $0),
    t.directive('close-popper', kC),
    t.component('v-tooltip', Lf),
    t.component('VTooltip', Lf),
    t.component('v-dropdown', Zg),
    t.component('VDropdown', Zg),
    t.component('v-menu', Jg),
    t.component('VMenu', Jg));
}
const I0 = { version: '2.0.0-y.0', install: EC, options: Qi },
  LC = 6e4;
function q0(t) {
  return t;
}
const AC = q0,
  { setTimeout: MC } = globalThis,
  NC = Math.random.bind(Math);
function PC(t, n) {
  const {
      post: r,
      on: o,
      eventNames: l = [],
      serialize: u = q0,
      deserialize: f = AC,
      resolver: h,
      timeout: d = LC,
    } = n,
    g = new Map();
  let v;
  const b = new Proxy(
    {},
    {
      get(x, S) {
        if (S === '$functions') return t;
        const A = (...M) => {
          r(u({ m: S, a: M, t: 'q' }));
        };
        if (l.includes(S)) return (A.asEvent = A), A;
        const L = async (...M) => (
          await v,
          new Promise((T, E) => {
            const $ = $C();
            g.set($, { resolve: T, reject: E }),
              r(u({ m: S, a: M, i: $, t: 'q' })),
              d >= 0 &&
                MC(() => {
                  E(new Error(`[birpc] timeout on calling "${S}"`)),
                    g.delete($);
                }, d);
          })
        );
        return (L.asEvent = A), L;
      },
    },
  );
  return (
    (v = o(async (x, ...S) => {
      const A = f(x);
      if (A.t === 'q') {
        const { m: L, a: M } = A;
        let T, E;
        const $ = h ? h(L, t[L]) : t[L];
        if (!$) E = new Error(`[birpc] function "${L}" not found`);
        else
          try {
            T = await $.apply(b, M);
          } catch (O) {
            E = O;
          }
        A.i &&
          (E && n.onError && n.onError(E, L, M),
          r(u({ t: 's', i: A.i, r: T, e: E }), ...S));
      } else {
        const { i: L, r: M, e: T } = A,
          E = g.get(L);
        E && (T ? E.reject(T) : E.resolve(M)), g.delete(L);
      }
    })),
    b
  );
}
const OC = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
function $C(t = 21) {
  let n = '',
    r = t;
  for (; r--; ) n += OC[(NC() * 64) | 0];
  return n;
}
/*! (c) 2020 Andrea Giammarchi */ const { parse: DC, stringify: RC } = JSON,
  { keys: zC } = Object,
  da = String,
  H0 = 'string',
  nv = {},
  Yl = 'object',
  B0 = (t, n) => n,
  FC = (t) => (t instanceof da ? da(t) : t),
  IC = (t, n) => (typeof n === H0 ? new da(n) : n),
  W0 = (t, n, r, o) => {
    const l = [];
    for (let u = zC(r), { length: f } = u, h = 0; h < f; h++) {
      const d = u[h],
        g = r[d];
      if (g instanceof da) {
        const v = t[g];
        typeof v === Yl && !n.has(v)
          ? (n.add(v), (r[d] = nv), l.push({ k: d, a: [t, n, v, o] }))
          : (r[d] = o.call(r, d, v));
      } else r[d] !== nv && (r[d] = o.call(r, d, g));
    }
    for (let { length: u } = l, f = 0; f < u; f++) {
      const { k: h, a: d } = l[f];
      r[h] = o.call(r, h, W0.apply(null, d));
    }
    return r;
  },
  rv = (t, n, r) => {
    const o = da(n.push(r) - 1);
    return t.set(r, o), o;
  },
  Af = (t, n) => {
    const r = DC(t, IC).map(FC),
      o = r[0],
      l = n || B0,
      u = typeof o === Yl && o ? W0(r, new Set(), o, l) : o;
    return l.call({ '': u }, '', u);
  },
  qC = (t, n, r) => {
    const o =
        n && typeof n === Yl
          ? (v, b) => (v === '' || -1 < n.indexOf(v) ? b : void 0)
          : n || B0,
      l = new Map(),
      u = [],
      f = [];
    let h = +rv(l, u, o.call({ '': t }, '', t)),
      d = !h;
    for (; h < u.length; ) (d = !0), (f[h] = RC(u[h++], g, r));
    return '[' + f.join(',') + ']';
    function g(v, b) {
      if (d) return (d = !d), b;
      const x = o.call(this, v, b);
      switch (typeof x) {
        case Yl:
          if (x === null) return x;
        case H0:
          return l.get(x) || rv(l, u, x);
      }
      return x;
    }
  };
function HC(t = '') {
  return !t || !t.includes('\\') ? t : t.replace(/\\/g, '/');
}
const BC = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function WC() {
  return typeof process < 'u' ? process.cwd().replace(/\\/g, '/') : '/';
}
const iv = function (...t) {
  t = t.map((o) => HC(o));
  let n = '',
    r = !1;
  for (let o = t.length - 1; o >= -1 && !r; o--) {
    const l = o >= 0 ? t[o] : WC();
    !l || l.length === 0 || ((n = `${l}/${n}`), (r = ov(l)));
  }
  return (n = UC(n, !r)), r && !ov(n) ? `/${n}` : n.length > 0 ? n : '.';
};
function UC(t, n) {
  let r = '',
    o = 0,
    l = -1,
    u = 0,
    f = null;
  for (let h = 0; h <= t.length; ++h) {
    if (h < t.length) f = t[h];
    else {
      if (f === '/') break;
      f = '/';
    }
    if (f === '/') {
      if (!(l === h - 1 || u === 1))
        if (u === 2) {
          if (
            r.length < 2 ||
            o !== 2 ||
            r[r.length - 1] !== '.' ||
            r[r.length - 2] !== '.'
          ) {
            if (r.length > 2) {
              const d = r.lastIndexOf('/');
              d === -1
                ? ((r = ''), (o = 0))
                : ((r = r.slice(0, d)),
                  (o = r.length - 1 - r.lastIndexOf('/'))),
                (l = h),
                (u = 0);
              continue;
            } else if (r.length > 0) {
              (r = ''), (o = 0), (l = h), (u = 0);
              continue;
            }
          }
          n && ((r += r.length > 0 ? '/..' : '..'), (o = 2));
        } else
          r.length > 0
            ? (r += `/${t.slice(l + 1, h)}`)
            : (r = t.slice(l + 1, h)),
            (o = h - l - 1);
      (l = h), (u = 0);
    } else f === '.' && u !== -1 ? ++u : (u = -1);
  }
  return r;
}
const ov = function (t) {
    return BC.test(t);
  },
  jC = function (t, n) {
    const r = iv(t).split('/'),
      o = iv(n).split('/'),
      l = [...r];
    for (const u of l) {
      if (o[0] !== u) break;
      r.shift(), o.shift();
    }
    return [...r.map(() => '..'), ...o].join('/');
  };
function GC(t) {
  return typeof AggregateError < 'u' && t instanceof AggregateError
    ? !0
    : t instanceof Error && 'errors' in t;
}
class U0 {
  constructor() {
    Nr(this, 'filesMap', new Map());
    Nr(this, 'pathsSet', new Set());
    Nr(this, 'collectingPromise');
    Nr(this, 'browserTestPromises', new Map());
    Nr(this, 'idMap', new Map());
    Nr(this, 'taskFileMap', new WeakMap());
    Nr(this, 'errorsSet', new Set());
    Nr(this, 'processTimeoutCauses', new Set());
  }
  catchError(n, r) {
    if (GC(n)) return n.errors.forEach((o) => this.catchError(o, r));
    n === Object(n) ? (n.type = r) : (n = { type: r, message: n }),
      this.errorsSet.add(n);
  }
  clearErrors() {
    this.errorsSet.clear();
  }
  getUnhandledErrors() {
    return Array.from(this.errorsSet.values());
  }
  addProcessTimeoutCause(n) {
    this.processTimeoutCauses.add(n);
  }
  getProcessTimeoutCauses() {
    return Array.from(this.processTimeoutCauses.values());
  }
  getPaths() {
    return Array.from(this.pathsSet);
  }
  getFiles(n) {
    return n
      ? n
          .map((r) => this.filesMap.get(r))
          .filter(Boolean)
          .flat()
      : Array.from(this.filesMap.values()).flat();
  }
  getFilepaths() {
    return Array.from(this.filesMap.keys());
  }
  getFailedFilepaths() {
    return this.getFiles()
      .filter((n) => {
        var r;
        return ((r = n.result) == null ? void 0 : r.state) === 'fail';
      })
      .map((n) => n.filepath);
  }
  collectPaths(n = []) {
    n.forEach((r) => {
      this.pathsSet.add(r);
    });
  }
  collectFiles(n = []) {
    n.forEach((r) => {
      const l = (this.filesMap.get(r.filepath) || []).filter(
        (u) => u.projectName !== r.projectName,
      );
      l.push(r), this.filesMap.set(r.filepath, l), this.updateId(r);
    });
  }
  clearFiles(n, r = []) {
    r.forEach((o) => {
      const l = this.filesMap.get(o);
      if (!l) return;
      const u = l.filter((f) => f.projectName !== n.config.name);
      u.length ? this.filesMap.set(o, u) : this.filesMap.delete(o);
    });
  }
  updateId(n) {
    this.idMap.get(n.id) !== n &&
      (this.idMap.set(n.id, n),
      n.type === 'suite' &&
        n.tasks.forEach((r) => {
          this.updateId(r);
        }));
  }
  updateTasks(n) {
    for (const [r, o, l] of n) {
      const u = this.idMap.get(r);
      u && ((u.result = o), (u.meta = l));
    }
  }
  updateUserLog(n) {
    const r = n.taskId && this.idMap.get(n.taskId);
    r && (r.logs || (r.logs = []), r.logs.push(n));
  }
  getCountOfFailedTests() {
    return Array.from(this.idMap.values()).filter((n) => {
      var r;
      return ((r = n.result) == null ? void 0 : r.state) === 'fail';
    }).length;
  }
  cancelFiles(n, r) {
    this.collectFiles(
      n.map((o) => ({
        filepath: o,
        name: jC(r, o),
        id: o,
        mode: 'skip',
        type: 'suite',
        result: { state: 'skip' },
        meta: {},
        tasks: [],
      })),
    );
  }
}
var no =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function j0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
    ? t.default
    : t;
}
function G0(t) {
  return t == null && (t = []), Array.isArray(t) ? t : [t];
}
function Mf(t) {
  return t.type === 'test' || t.type === 'custom';
}
function V0(t) {
  return G0(t).flatMap((n) =>
    Mf(n) ? [n] : n.tasks.flatMap((r) => (Mf(r) ? [r] : V0(r))),
  );
}
function Ch(t = []) {
  return G0(t).flatMap((n) => (Mf(n) ? [n] : [n, ...Ch(n.tasks)]));
}
function VC(t) {
  const n = [t.name];
  let r = t;
  for (; (r != null && r.suite) || (r != null && r.file); )
    (r = r.suite || r.file), r != null && r.name && n.unshift(r.name);
  return n;
}
function Pc(t) {
  return V0(t).some((n) => {
    var r, o;
    return (o = (r = n.result) == null ? void 0 : r.errors) == null
      ? void 0
      : o.some(
          (l) =>
            typeof (l == null ? void 0 : l.message) == 'string' &&
            l.message.match(/Snapshot .* mismatched/),
        );
  });
}
function KC(t, n = {}) {
  const {
    handlers: r = {},
    autoReconnect: o = !0,
    reconnectInterval: l = 2e3,
    reconnectTries: u = 10,
    reactive: f = (T) => T,
    WebSocketConstructor: h = globalThis.WebSocket,
  } = n;
  let d = u;
  const g = f({
    ws: new h(t),
    state: new U0(),
    waitForConnection: M,
    reconnect: A,
  });
  (g.state.filesMap = f(g.state.filesMap)), (g.state.idMap = f(g.state.idMap));
  let v;
  const b = {
      onPathsCollected(T) {
        var E;
        g.state.collectPaths(T),
          (E = r.onPathsCollected) == null || E.call(r, T);
      },
      onCollected(T) {
        var E;
        g.state.collectFiles(T), (E = r.onCollected) == null || E.call(r, T);
      },
      onTaskUpdate(T) {
        var E;
        g.state.updateTasks(T), (E = r.onTaskUpdate) == null || E.call(r, T);
      },
      onUserConsoleLog(T) {
        g.state.updateUserLog(T);
      },
      onFinished(T) {
        var E;
        (E = r.onFinished) == null || E.call(r, T);
      },
      onCancel(T) {
        var E;
        (E = r.onCancel) == null || E.call(r, T);
      },
    },
    x = {
      post: (T) => g.ws.send(T),
      on: (T) => (v = T),
      serialize: qC,
      deserialize: Af,
    };
  g.rpc = PC(b, x);
  let S;
  function A(T = !1) {
    T && (d = u), (g.ws = new h(t)), L();
  }
  function L() {
    (S = new Promise((T) => {
      g.ws.addEventListener('open', () => {
        (d = u), T();
      });
    })),
      g.ws.addEventListener('message', (T) => {
        v(T.data);
      }),
      g.ws.addEventListener('close', () => {
        (d -= 1), o && d > 0 && setTimeout(A, l);
      });
  }
  L();
  function M() {
    return S;
  }
  return g;
}
const XC = location.port,
  YC = [location.hostname, XC].filter(Boolean).join(':'),
  ZC = `${
    location.protocol === 'https:' ? 'wss:' : 'ws:'
  }//${YC}/__vitest_api__`,
  yr = !!window.METADATA_PATH,
  JC = yr ? './' : '/__vitest__/';
function Th(t) {
  return hm() ? (Wx(t), !0) : !1;
}
function Ur(t) {
  return typeof t == 'function' ? t() : U(t);
}
const QC = typeof window < 'u',
  tT = (t) => typeof t < 'u',
  ro = () => {};
function Eh(t, n) {
  function r(...o) {
    return new Promise((l, u) => {
      Promise.resolve(
        t(() => n.apply(this, o), { fn: n, thisArg: this, args: o }),
      )
        .then(l)
        .catch(u);
    });
  }
  return r;
}
const K0 = (t) => t();
function X0(t, n = {}) {
  let r,
    o,
    l = ro;
  const u = (h) => {
    clearTimeout(h), l(), (l = ro);
  };
  return (h) => {
    const d = Ur(t),
      g = Ur(n.maxWait);
    return (
      r && u(r),
      d <= 0 || (g !== void 0 && g <= 0)
        ? (o && (u(o), (o = null)), Promise.resolve(h()))
        : new Promise((v, b) => {
            (l = n.rejectOnCancel ? b : v),
              g &&
                !o &&
                (o = setTimeout(() => {
                  r && u(r), (o = null), v(h());
                }, g)),
              (r = setTimeout(() => {
                o && u(o), (o = null), v(h());
              }, d));
          })
    );
  };
}
function eT(t, n = !0, r = !0, o = !1) {
  let l = 0,
    u,
    f = !0,
    h = ro,
    d;
  const g = () => {
    u && (clearTimeout(u), (u = void 0), h(), (h = ro));
  };
  return (b) => {
    const x = Ur(t),
      S = Date.now() - l,
      A = () => (d = b());
    return (
      g(),
      x <= 0
        ? ((l = Date.now()), A())
        : (S > x && (r || !f)
            ? ((l = Date.now()), A())
            : n &&
              (d = new Promise((L, M) => {
                (h = o ? M : L),
                  (u = setTimeout(() => {
                    (l = Date.now()), (f = !0), L(A()), g();
                  }, Math.max(0, x - S)));
              })),
          !r && !u && (u = setTimeout(() => (f = !0), x)),
          (f = !1),
          d)
    );
  };
}
function nT(t = K0) {
  const n = Vt(!0);
  function r() {
    n.value = !1;
  }
  function o() {
    n.value = !0;
  }
  const l = (...u) => {
    n.value && t(...u);
  };
  return { isActive: vc(n), pause: r, resume: o, eventFilter: l };
}
function Y0(...t) {
  if (t.length !== 1) return mc(...t);
  const n = t[0];
  return typeof n == 'function' ? vc(x1(() => ({ get: n, set: ro }))) : Vt(n);
}
function sv(t, n = 200, r = {}) {
  return Eh(X0(n, r), t);
}
function rT(t, n = 200, r = !1, o = !0, l = !1) {
  return Eh(eT(n, r, o, l), t);
}
function iT(t, n = 200, r = !0, o = !0) {
  if (n <= 0) return t;
  const l = Vt(t.value),
    u = rT(
      () => {
        l.value = t.value;
      },
      n,
      r,
      o,
    );
  return Re(t, () => u()), l;
}
function Z0(t, n = !0) {
  _a() ? ls(t) : n ? t() : Hr(t);
}
function oT(t = !1, n = {}) {
  const { truthyValue: r = !0, falsyValue: o = !1 } = n,
    l = Ae(t),
    u = Vt(t);
  function f(h) {
    if (arguments.length) return (u.value = h), u.value;
    {
      const d = Ur(r);
      return (u.value = u.value === d ? Ur(o) : d), u.value;
    }
  }
  return l ? f : [u, f];
}
var av = Object.getOwnPropertySymbols,
  sT = Object.prototype.hasOwnProperty,
  aT = Object.prototype.propertyIsEnumerable,
  lT = (t, n) => {
    var r = {};
    for (var o in t) sT.call(t, o) && n.indexOf(o) < 0 && (r[o] = t[o]);
    if (t != null && av)
      for (var o of av(t)) n.indexOf(o) < 0 && aT.call(t, o) && (r[o] = t[o]);
    return r;
  };
function J0(t, n, r = {}) {
  const o = r,
    { eventFilter: l = K0 } = o,
    u = lT(o, ['eventFilter']);
  return Re(t, Eh(l, n), u);
}
var cT = Object.defineProperty,
  uT = Object.defineProperties,
  fT = Object.getOwnPropertyDescriptors,
  Zl = Object.getOwnPropertySymbols,
  Q0 = Object.prototype.hasOwnProperty,
  ty = Object.prototype.propertyIsEnumerable,
  lv = (t, n, r) =>
    n in t
      ? cT(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[n] = r),
  hT = (t, n) => {
    for (var r in n || (n = {})) Q0.call(n, r) && lv(t, r, n[r]);
    if (Zl) for (var r of Zl(n)) ty.call(n, r) && lv(t, r, n[r]);
    return t;
  },
  dT = (t, n) => uT(t, fT(n)),
  pT = (t, n) => {
    var r = {};
    for (var o in t) Q0.call(t, o) && n.indexOf(o) < 0 && (r[o] = t[o]);
    if (t != null && Zl)
      for (var o of Zl(t)) n.indexOf(o) < 0 && ty.call(t, o) && (r[o] = t[o]);
    return r;
  };
function gT(t, n, r = {}) {
  const o = r,
    { debounce: l = 0, maxWait: u = void 0 } = o,
    f = pT(o, ['debounce', 'maxWait']);
  return J0(t, n, dT(hT({}, f), { eventFilter: X0(l, { maxWait: u }) }));
}
function vT(t, n, r) {
  const o = Re(t, (...l) => (Hr(() => o()), n(...l)), r);
}
var mT = Object.defineProperty,
  yT = Object.defineProperties,
  bT = Object.getOwnPropertyDescriptors,
  Jl = Object.getOwnPropertySymbols,
  ey = Object.prototype.hasOwnProperty,
  ny = Object.prototype.propertyIsEnumerable,
  cv = (t, n, r) =>
    n in t
      ? mT(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[n] = r),
  wT = (t, n) => {
    for (var r in n || (n = {})) ey.call(n, r) && cv(t, r, n[r]);
    if (Jl) for (var r of Jl(n)) ny.call(n, r) && cv(t, r, n[r]);
    return t;
  },
  xT = (t, n) => yT(t, bT(n)),
  _T = (t, n) => {
    var r = {};
    for (var o in t) ey.call(t, o) && n.indexOf(o) < 0 && (r[o] = t[o]);
    if (t != null && Jl)
      for (var o of Jl(t)) n.indexOf(o) < 0 && ny.call(t, o) && (r[o] = t[o]);
    return r;
  };
function ry(t, n, r = {}) {
  const o = r,
    { eventFilter: l } = o,
    u = _T(o, ['eventFilter']),
    { eventFilter: f, pause: h, resume: d, isActive: g } = nT(l);
  return {
    stop: J0(t, n, xT(wT({}, u), { eventFilter: f })),
    pause: h,
    resume: d,
    isActive: g,
  };
}
function ST(t, n, r) {
  let o;
  Ae(r) ? (o = { evaluating: r }) : (o = r || {});
  const {
      lazy: l = !1,
      evaluating: u = void 0,
      shallow: f = !0,
      onError: h = ro,
    } = o,
    d = Vt(!l),
    g = f ? as(n) : Vt(n);
  let v = 0;
  return (
    fh(async (b) => {
      if (!d.value) return;
      v++;
      const x = v;
      let S = !1;
      u &&
        Promise.resolve().then(() => {
          u.value = !0;
        });
      try {
        const A = await t((L) => {
          b(() => {
            u && (u.value = !1), S || L();
          });
        });
        x === v && (g.value = A);
      } catch (A) {
        h(A);
      } finally {
        u && x === v && (u.value = !1), (S = !0);
      }
    }),
    l ? xt(() => ((d.value = !0), g.value)) : g
  );
}
function Ql(t) {
  var n;
  const r = Ur(t);
  return (n = r == null ? void 0 : r.$el) != null ? n : r;
}
const jr = QC ? window : void 0;
function ns(...t) {
  let n, r, o, l;
  if (
    (typeof t[0] == 'string' || Array.isArray(t[0])
      ? (([r, o, l] = t), (n = jr))
      : ([n, r, o, l] = t),
    !n)
  )
    return ro;
  Array.isArray(r) || (r = [r]), Array.isArray(o) || (o = [o]);
  const u = [],
    f = () => {
      u.forEach((v) => v()), (u.length = 0);
    },
    h = (v, b, x, S) => (
      v.addEventListener(b, x, S), () => v.removeEventListener(b, x, S)
    ),
    d = Re(
      () => [Ql(n), Ur(l)],
      ([v, b]) => {
        f(), v && u.push(...r.flatMap((x) => o.map((S) => h(v, x, S, b))));
      },
      { immediate: !0, flush: 'post' },
    ),
    g = () => {
      d(), f();
    };
  return Th(g), g;
}
function kT(t) {
  return typeof t == 'function'
    ? t
    : typeof t == 'string'
    ? (n) => n.key === t
    : Array.isArray(t)
    ? (n) => t.includes(n.key)
    : () => !0;
}
function CT(...t) {
  let n,
    r,
    o = {};
  t.length === 3
    ? ((n = t[0]), (r = t[1]), (o = t[2]))
    : t.length === 2
    ? typeof t[1] == 'object'
      ? ((n = !0), (r = t[0]), (o = t[1]))
      : ((n = t[0]), (r = t[1]))
    : ((n = !0), (r = t[0]));
  const {
      target: l = jr,
      eventName: u = 'keydown',
      passive: f = !1,
      dedupe: h = !1,
    } = o,
    d = kT(n);
  return ns(
    l,
    u,
    (v) => {
      (v.repeat && Ur(h)) || (d(v) && r(v));
    },
    f,
  );
}
function TT() {
  const t = Vt(!1);
  return (
    _a() &&
      ls(() => {
        t.value = !0;
      }),
    t
  );
}
function iy(t) {
  const n = TT();
  return xt(() => (n.value, !!t()));
}
function oy(t, n = {}) {
  const { window: r = jr } = n,
    o = iy(() => r && 'matchMedia' in r && typeof r.matchMedia == 'function');
  let l;
  const u = Vt(!1),
    f = () => {
      l &&
        ('removeEventListener' in l
          ? l.removeEventListener('change', h)
          : l.removeListener(h));
    },
    h = () => {
      o.value &&
        (f(),
        (l = r.matchMedia(Y0(t).value)),
        (u.value = !!(l != null && l.matches)),
        l &&
          ('addEventListener' in l
            ? l.addEventListener('change', h)
            : l.addListener(h)));
    };
  return fh(h), Th(() => f()), u;
}
function ET(t) {
  return JSON.parse(JSON.stringify(t));
}
const bl =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  wl = '__vueuse_ssr_handlers__',
  LT = AT();
function AT() {
  return wl in bl || (bl[wl] = bl[wl] || {}), bl[wl];
}
function sy(t, n) {
  return LT[t] || n;
}
function MT(t) {
  return t == null
    ? 'any'
    : t instanceof Set
    ? 'set'
    : t instanceof Map
    ? 'map'
    : t instanceof Date
    ? 'date'
    : typeof t == 'boolean'
    ? 'boolean'
    : typeof t == 'string'
    ? 'string'
    : typeof t == 'object'
    ? 'object'
    : Number.isNaN(t)
    ? 'any'
    : 'number';
}
var NT = Object.defineProperty,
  uv = Object.getOwnPropertySymbols,
  PT = Object.prototype.hasOwnProperty,
  OT = Object.prototype.propertyIsEnumerable,
  fv = (t, n, r) =>
    n in t
      ? NT(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[n] = r),
  hv = (t, n) => {
    for (var r in n || (n = {})) PT.call(n, r) && fv(t, r, n[r]);
    if (uv) for (var r of uv(n)) OT.call(n, r) && fv(t, r, n[r]);
    return t;
  };
const $T = {
    boolean: { read: (t) => t === 'true', write: (t) => String(t) },
    object: { read: (t) => JSON.parse(t), write: (t) => JSON.stringify(t) },
    number: { read: (t) => Number.parseFloat(t), write: (t) => String(t) },
    any: { read: (t) => t, write: (t) => String(t) },
    string: { read: (t) => t, write: (t) => String(t) },
    map: {
      read: (t) => new Map(JSON.parse(t)),
      write: (t) => JSON.stringify(Array.from(t.entries())),
    },
    set: {
      read: (t) => new Set(JSON.parse(t)),
      write: (t) => JSON.stringify(Array.from(t)),
    },
    date: { read: (t) => new Date(t), write: (t) => t.toISOString() },
  },
  dv = 'vueuse-storage';
function DT(t, n, r, o = {}) {
  var l;
  const {
      flush: u = 'pre',
      deep: f = !0,
      listenToStorageChanges: h = !0,
      writeDefaults: d = !0,
      mergeDefaults: g = !1,
      shallow: v,
      window: b = jr,
      eventFilter: x,
      onError: S = (V) => {
        console.error(V);
      },
    } = o,
    A = (v ? as : Vt)(n);
  if (!r)
    try {
      r = sy('getDefaultStorage', () => {
        var V;
        return (V = jr) == null ? void 0 : V.localStorage;
      })();
    } catch (V) {
      S(V);
    }
  if (!r) return A;
  const L = Ur(n),
    M = MT(L),
    T = (l = o.serializer) != null ? l : $T[M],
    { pause: E, resume: $ } = ry(A, () => O(A.value), {
      flush: u,
      deep: f,
      eventFilter: x,
    });
  return b && h && (ns(b, 'storage', ct), ns(b, dv, K)), ct(), A;
  function O(V) {
    try {
      if (V == null) r.removeItem(t);
      else {
        const ut = T.write(V),
          ft = r.getItem(t);
        ft !== ut &&
          (r.setItem(t, ut),
          b &&
            b.dispatchEvent(
              new CustomEvent(dv, {
                detail: { key: t, oldValue: ft, newValue: ut, storageArea: r },
              }),
            ));
      }
    } catch (ut) {
      S(ut);
    }
  }
  function G(V) {
    const ut = V ? V.newValue : r.getItem(t);
    if (ut == null) return d && L !== null && r.setItem(t, T.write(L)), L;
    if (!V && g) {
      const ft = T.read(ut);
      return typeof g == 'function'
        ? g(ft, L)
        : M === 'object' && !Array.isArray(ft)
        ? hv(hv({}, L), ft)
        : ft;
    } else return typeof ut != 'string' ? ut : T.read(ut);
  }
  function K(V) {
    ct(V.detail);
  }
  function ct(V) {
    if (!(V && V.storageArea !== r)) {
      if (V && V.key == null) {
        A.value = L;
        return;
      }
      if (!(V && V.key !== t)) {
        E();
        try {
          A.value = G(V);
        } catch (ut) {
          S(ut);
        } finally {
          V ? Hr($) : $();
        }
      }
    }
  }
}
function RT(t) {
  return oy('(prefers-color-scheme: dark)', t);
}
var zT = Object.defineProperty,
  pv = Object.getOwnPropertySymbols,
  FT = Object.prototype.hasOwnProperty,
  IT = Object.prototype.propertyIsEnumerable,
  gv = (t, n, r) =>
    n in t
      ? zT(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[n] = r),
  qT = (t, n) => {
    for (var r in n || (n = {})) FT.call(n, r) && gv(t, r, n[r]);
    if (pv) for (var r of pv(n)) IT.call(n, r) && gv(t, r, n[r]);
    return t;
  };
function HT(t = {}) {
  const {
      selector: n = 'html',
      attribute: r = 'class',
      initialValue: o = 'auto',
      window: l = jr,
      storage: u,
      storageKey: f = 'vueuse-color-scheme',
      listenToStorageChanges: h = !0,
      storageRef: d,
      emitAuto: g,
      disableTransition: v = !0,
    } = t,
    b = qT({ auto: '', light: 'light', dark: 'dark' }, t.modes || {}),
    x = RT({ window: l }),
    S = xt(() => (x.value ? 'dark' : 'light')),
    A =
      d ||
      (f == null
        ? Y0(o)
        : DT(f, o, u, { window: l, listenToStorageChanges: h })),
    L = xt(() => (A.value === 'auto' ? S.value : A.value)),
    M = sy('updateHTMLAttrs', (O, G, K) => {
      const ct =
        typeof O == 'string'
          ? l == null
            ? void 0
            : l.document.querySelector(O)
          : Ql(O);
      if (!ct) return;
      let V;
      if (
        (v &&
          ((V = l.document.createElement('style')),
          V.appendChild(
            document.createTextNode(
              '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
            ),
          ),
          l.document.head.appendChild(V)),
        G === 'class')
      ) {
        const ut = K.split(/\s/g);
        Object.values(b)
          .flatMap((ft) => (ft || '').split(/\s/g))
          .filter(Boolean)
          .forEach((ft) => {
            ut.includes(ft) ? ct.classList.add(ft) : ct.classList.remove(ft);
          });
      } else ct.setAttribute(G, K);
      v && (l.getComputedStyle(V).opacity, document.head.removeChild(V));
    });
  function T(O) {
    var G;
    M(n, r, (G = b[O]) != null ? G : O);
  }
  function E(O) {
    t.onChanged ? t.onChanged(O, T) : T(O);
  }
  Re(L, E, { flush: 'post', immediate: !0 }), Z0(() => E(L.value));
  const $ = xt({
    get() {
      return g ? A.value : L.value;
    },
    set(O) {
      A.value = O;
    },
  });
  try {
    return Object.assign($, { store: A, system: S, state: L });
  } catch {
    return $;
  }
}
var BT = Object.defineProperty,
  WT = Object.defineProperties,
  UT = Object.getOwnPropertyDescriptors,
  vv = Object.getOwnPropertySymbols,
  jT = Object.prototype.hasOwnProperty,
  GT = Object.prototype.propertyIsEnumerable,
  mv = (t, n, r) =>
    n in t
      ? BT(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[n] = r),
  VT = (t, n) => {
    for (var r in n || (n = {})) jT.call(n, r) && mv(t, r, n[r]);
    if (vv) for (var r of vv(n)) GT.call(n, r) && mv(t, r, n[r]);
    return t;
  },
  KT = (t, n) => WT(t, UT(n));
function XT(t = {}) {
  const { valueDark: n = 'dark', valueLight: r = '' } = t,
    o = HT(
      KT(VT({}, t), {
        onChanged: (u, f) => {
          var h;
          t.onChanged
            ? (h = t.onChanged) == null || h.call(t, u === 'dark', f, u)
            : f(u);
        },
        modes: { dark: n, light: r },
      }),
    );
  return xt({
    get() {
      return o.value === 'dark';
    },
    set(u) {
      const f = u ? 'dark' : 'light';
      o.system.value === f ? (o.value = 'auto') : (o.value = f);
    },
  });
}
var yv = Object.getOwnPropertySymbols,
  YT = Object.prototype.hasOwnProperty,
  ZT = Object.prototype.propertyIsEnumerable,
  JT = (t, n) => {
    var r = {};
    for (var o in t) YT.call(t, o) && n.indexOf(o) < 0 && (r[o] = t[o]);
    if (t != null && yv)
      for (var o of yv(t)) n.indexOf(o) < 0 && ZT.call(t, o) && (r[o] = t[o]);
    return r;
  };
function QT(t, n, r = {}) {
  const o = r,
    { window: l = jr } = o,
    u = JT(o, ['window']);
  let f;
  const h = iy(() => l && 'ResizeObserver' in l),
    d = () => {
      f && (f.disconnect(), (f = void 0));
    },
    g = xt(() => (Array.isArray(t) ? t.map((x) => Ql(x)) : [Ql(t)])),
    v = Re(
      g,
      (x) => {
        if ((d(), h.value && l)) {
          f = new ResizeObserver(n);
          for (const S of x) S && f.observe(S, u);
        }
      },
      { immediate: !0, flush: 'post', deep: !0 },
    ),
    b = () => {
      d(), v();
    };
  return Th(b), { isSupported: h, stop: b };
}
function tE(t = 'history', n = {}) {
  const {
    initialValue: r = {},
    removeNullishValues: o = !0,
    removeFalsyValues: l = !1,
    write: u = !0,
    window: f = jr,
  } = n;
  if (!f) return Dn(r);
  const h = Dn({});
  function d() {
    if (t === 'history') return f.location.search || '';
    if (t === 'hash') {
      const T = f.location.hash || '',
        E = T.indexOf('?');
      return E > 0 ? T.slice(E) : '';
    } else return (f.location.hash || '').replace(/^#/, '');
  }
  function g(T) {
    const E = T.toString();
    if (t === 'history') return `${E ? `?${E}` : ''}${f.location.hash || ''}`;
    if (t === 'hash-params')
      return `${f.location.search || ''}${E ? `#${E}` : ''}`;
    const $ = f.location.hash || '#',
      O = $.indexOf('?');
    return O > 0
      ? `${$.slice(0, O)}${E ? `?${E}` : ''}`
      : `${$}${E ? `?${E}` : ''}`;
  }
  function v() {
    return new URLSearchParams(d());
  }
  function b(T) {
    const E = new Set(Object.keys(h));
    for (const $ of T.keys()) {
      const O = T.getAll($);
      (h[$] = O.length > 1 ? O : T.get($) || ''), E.delete($);
    }
    Array.from(E).forEach(($) => delete h[$]);
  }
  const { pause: x, resume: S } = ry(
    h,
    () => {
      const T = new URLSearchParams('');
      Object.keys(h).forEach((E) => {
        const $ = h[E];
        Array.isArray($)
          ? $.forEach((O) => T.append(E, O))
          : (o && $ == null) || (l && !$)
          ? T.delete(E)
          : T.set(E, $);
      }),
        A(T);
    },
    { deep: !0 },
  );
  function A(T, E) {
    x(),
      E && b(T),
      f.history.replaceState(
        f.history.state,
        f.document.title,
        f.location.pathname + g(T),
      ),
      S();
  }
  function L() {
    u && A(v(), !0);
  }
  ns(f, 'popstate', L, !1), t !== 'history' && ns(f, 'hashchange', L, !1);
  const M = v();
  return M.keys().next().value ? b(M) : Object.assign(h, r), h;
}
function eE(t, n, r, o = {}) {
  var l, u, f;
  const {
      clone: h = !1,
      passive: d = !1,
      eventName: g,
      deep: v = !1,
      defaultValue: b,
      shouldEmit: x,
    } = o,
    S = _a(),
    A =
      r ||
      (S == null ? void 0 : S.emit) ||
      ((l = S == null ? void 0 : S.$emit) == null ? void 0 : l.bind(S)) ||
      ((f = (u = S == null ? void 0 : S.proxy) == null ? void 0 : u.$emit) ==
      null
        ? void 0
        : f.bind(S == null ? void 0 : S.proxy));
  let L = g;
  n || (n = 'modelValue'), (L = g || L || `update:${n.toString()}`);
  const M = ($) => (h ? (typeof h == 'function' ? h($) : ET($)) : $),
    T = () => (tT(t[n]) ? M(t[n]) : b),
    E = ($) => {
      x ? x($) && A(L, $) : A(L, $);
    };
  if (d) {
    const $ = T(),
      O = Vt($);
    return (
      Re(
        () => t[n],
        (G) => (O.value = M(G)),
      ),
      Re(
        O,
        (G) => {
          (G !== t[n] || v) && E(G);
        },
        { deep: v },
      ),
      O
    );
  } else
    return xt({
      get() {
        return T();
      },
      set($) {
        E($);
      },
    });
}
function nE(t = {}) {
  const {
      window: n = jr,
      initialWidth: r = 1 / 0,
      initialHeight: o = 1 / 0,
      listenOrientation: l = !0,
      includeScrollbar: u = !0,
    } = t,
    f = Vt(r),
    h = Vt(o),
    d = () => {
      n &&
        (u
          ? ((f.value = n.innerWidth), (h.value = n.innerHeight))
          : ((f.value = n.document.documentElement.clientWidth),
            (h.value = n.document.documentElement.clientHeight)));
    };
  if ((d(), Z0(d), ns('resize', d, { passive: !0 }), l)) {
    const g = oy('(orientation: portrait)');
    Re(g, () => d());
  }
  return { width: f, height: h };
}
const ay = tE('hash-params', { initialValue: { file: '', view: null } }),
  pr = mc(ay, 'file'),
  fr = mc(ay, 'view');
var On = Uint8Array,
  Ki = Uint16Array,
  ly = Uint32Array,
  cy = new On([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 0, 0, 0,
  ]),
  uy = new On([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13, 0, 0,
  ]),
  rE = new On([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
  ]),
  fy = function (t, n) {
    for (var r = new Ki(31), o = 0; o < 31; ++o) r[o] = n += 1 << t[o - 1];
    for (var l = new ly(r[30]), o = 1; o < 30; ++o)
      for (var u = r[o]; u < r[o + 1]; ++u) l[u] = ((u - r[o]) << 5) | o;
    return [r, l];
  },
  hy = fy(cy, 2),
  dy = hy[0],
  iE = hy[1];
(dy[28] = 258), (iE[258] = 28);
var oE = fy(uy, 0),
  sE = oE[0],
  Nf = new Ki(32768);
for (var xe = 0; xe < 32768; ++xe) {
  var hi = ((xe & 43690) >>> 1) | ((xe & 21845) << 1);
  (hi = ((hi & 52428) >>> 2) | ((hi & 13107) << 2)),
    (hi = ((hi & 61680) >>> 4) | ((hi & 3855) << 4)),
    (Nf[xe] = (((hi & 65280) >>> 8) | ((hi & 255) << 8)) >>> 1);
}
var ra = function (t, n, r) {
    for (var o = t.length, l = 0, u = new Ki(n); l < o; ++l)
      t[l] && ++u[t[l] - 1];
    var f = new Ki(n);
    for (l = 0; l < n; ++l) f[l] = (f[l - 1] + u[l - 1]) << 1;
    var h;
    if (r) {
      h = new Ki(1 << n);
      var d = 15 - n;
      for (l = 0; l < o; ++l)
        if (t[l])
          for (
            var g = (l << 4) | t[l],
              v = n - t[l],
              b = f[t[l] - 1]++ << v,
              x = b | ((1 << v) - 1);
            b <= x;
            ++b
          )
            h[Nf[b] >>> d] = g;
    } else
      for (h = new Ki(o), l = 0; l < o; ++l)
        t[l] && (h[l] = Nf[f[t[l] - 1]++] >>> (15 - t[l]));
    return h;
  },
  Ta = new On(288);
for (var xe = 0; xe < 144; ++xe) Ta[xe] = 8;
for (var xe = 144; xe < 256; ++xe) Ta[xe] = 9;
for (var xe = 256; xe < 280; ++xe) Ta[xe] = 7;
for (var xe = 280; xe < 288; ++xe) Ta[xe] = 8;
var py = new On(32);
for (var xe = 0; xe < 32; ++xe) py[xe] = 5;
var aE = ra(Ta, 9, 1),
  lE = ra(py, 5, 1),
  Vu = function (t) {
    for (var n = t[0], r = 1; r < t.length; ++r) t[r] > n && (n = t[r]);
    return n;
  },
  Kn = function (t, n, r) {
    var o = (n / 8) | 0;
    return ((t[o] | (t[o + 1] << 8)) >> (n & 7)) & r;
  },
  Ku = function (t, n) {
    var r = (n / 8) | 0;
    return (t[r] | (t[r + 1] << 8) | (t[r + 2] << 16)) >> (n & 7);
  },
  cE = function (t) {
    return ((t + 7) / 8) | 0;
  },
  gy = function (t, n, r) {
    (n == null || n < 0) && (n = 0),
      (r == null || r > t.length) && (r = t.length);
    var o = new (
      t.BYTES_PER_ELEMENT == 2 ? Ki : t.BYTES_PER_ELEMENT == 4 ? ly : On
    )(r - n);
    return o.set(t.subarray(n, r)), o;
  },
  uE = [
    'unexpected EOF',
    'invalid block type',
    'invalid length/literal',
    'invalid distance',
    'stream finished',
    'no stream handler',
    ,
    'no callback',
    'invalid UTF-8 data',
    'extra field too long',
    'date not in range 1980-2099',
    'filename too long',
    'stream finishing',
    'invalid zip data',
  ],
  qn = function (t, n, r) {
    var o = new Error(n || uE[t]);
    if (
      ((o.code = t),
      Error.captureStackTrace && Error.captureStackTrace(o, qn),
      !r)
    )
      throw o;
    return o;
  },
  Lh = function (t, n, r) {
    var o = t.length;
    if (!o || (r && r.f && !r.l)) return n || new On(0);
    var l = !n || r,
      u = !r || r.i;
    r || (r = {}), n || (n = new On(o * 3));
    var f = function (tt) {
        var X = n.length;
        if (tt > X) {
          var ot = new On(Math.max(X * 2, tt));
          ot.set(n), (n = ot);
        }
      },
      h = r.f || 0,
      d = r.p || 0,
      g = r.b || 0,
      v = r.l,
      b = r.d,
      x = r.m,
      S = r.n,
      A = o * 8;
    do {
      if (!v) {
        h = Kn(t, d, 1);
        var L = Kn(t, d + 1, 3);
        if (((d += 3), L))
          if (L == 1) (v = aE), (b = lE), (x = 9), (S = 5);
          else if (L == 2) {
            var $ = Kn(t, d, 31) + 257,
              O = Kn(t, d + 10, 15) + 4,
              G = $ + Kn(t, d + 5, 31) + 1;
            d += 14;
            for (var K = new On(G), ct = new On(19), V = 0; V < O; ++V)
              ct[rE[V]] = Kn(t, d + V * 3, 7);
            d += O * 3;
            for (
              var ut = Vu(ct), ft = (1 << ut) - 1, kt = ra(ct, ut, 1), V = 0;
              V < G;

            ) {
              var dt = kt[Kn(t, d, ft)];
              d += dt & 15;
              var M = dt >>> 4;
              if (M < 16) K[V++] = M;
              else {
                var j = 0,
                  z = 0;
                for (
                  M == 16
                    ? ((z = 3 + Kn(t, d, 3)), (d += 2), (j = K[V - 1]))
                    : M == 17
                    ? ((z = 3 + Kn(t, d, 7)), (d += 3))
                    : M == 18 && ((z = 11 + Kn(t, d, 127)), (d += 7));
                  z--;

                )
                  K[V++] = j;
              }
            }
            var k = K.subarray(0, $),
              q = K.subarray($);
            (x = Vu(k)), (S = Vu(q)), (v = ra(k, x, 1)), (b = ra(q, S, 1));
          } else qn(1);
        else {
          var M = cE(d) + 4,
            T = t[M - 4] | (t[M - 3] << 8),
            E = M + T;
          if (E > o) {
            u && qn(0);
            break;
          }
          l && f(g + T),
            n.set(t.subarray(M, E), g),
            (r.b = g += T),
            (r.p = d = E * 8),
            (r.f = h);
          continue;
        }
        if (d > A) {
          u && qn(0);
          break;
        }
      }
      l && f(g + 131072);
      for (var W = (1 << x) - 1, et = (1 << S) - 1, mt = d; ; mt = d) {
        var j = v[Ku(t, d) & W],
          Ct = j >>> 4;
        if (((d += j & 15), d > A)) {
          u && qn(0);
          break;
        }
        if ((j || qn(2), Ct < 256)) n[g++] = Ct;
        else if (Ct == 256) {
          (mt = d), (v = null);
          break;
        } else {
          var Rt = Ct - 254;
          if (Ct > 264) {
            var V = Ct - 257,
              Ft = cy[V];
            (Rt = Kn(t, d, (1 << Ft) - 1) + dy[V]), (d += Ft);
          }
          var jt = b[Ku(t, d) & et],
            Zt = jt >>> 4;
          jt || qn(3), (d += jt & 15);
          var q = sE[Zt];
          if (Zt > 3) {
            var Ft = uy[Zt];
            (q += Ku(t, d) & ((1 << Ft) - 1)), (d += Ft);
          }
          if (d > A) {
            u && qn(0);
            break;
          }
          l && f(g + 131072);
          for (var Q = g + Rt; g < Q; g += 4)
            (n[g] = n[g - q]),
              (n[g + 1] = n[g + 1 - q]),
              (n[g + 2] = n[g + 2 - q]),
              (n[g + 3] = n[g + 3 - q]);
          g = Q;
        }
      }
      (r.l = v),
        (r.p = mt),
        (r.b = g),
        (r.f = h),
        v && ((h = 1), (r.m = x), (r.d = b), (r.n = S));
    } while (!h);
    return g == n.length ? n : gy(n, 0, g);
  },
  fE = new On(0),
  hE = function (t) {
    (t[0] != 31 || t[1] != 139 || t[2] != 8) && qn(6, 'invalid gzip data');
    var n = t[3],
      r = 10;
    n & 4 && (r += t[10] | ((t[11] << 8) + 2));
    for (var o = ((n >> 3) & 1) + ((n >> 4) & 1); o > 0; o -= !t[r++]);
    return r + (n & 2);
  },
  dE = function (t) {
    var n = t.length;
    return (
      (t[n - 4] | (t[n - 3] << 8) | (t[n - 2] << 16) | (t[n - 1] << 24)) >>> 0
    );
  },
  pE = function (t) {
    ((t[0] & 15) != 8 || t[0] >>> 4 > 7 || ((t[0] << 8) | t[1]) % 31) &&
      qn(6, 'invalid zlib data'),
      t[1] & 32 &&
        qn(6, 'invalid zlib data: preset dictionaries not supported');
  };
function gE(t, n) {
  return Lh(t, n);
}
function vE(t, n) {
  return Lh(t.subarray(hE(t), -8), n || new On(dE(t)));
}
function mE(t, n) {
  return Lh((pE(t), t.subarray(2, -4)), n);
}
function yE(t, n) {
  return t[0] == 31 && t[1] == 139 && t[2] == 8
    ? vE(t, n)
    : (t[0] & 15) != 8 || t[0] >> 4 > 7 || ((t[0] << 8) | t[1]) % 31
    ? gE(t, n)
    : mE(t, n);
}
var Pf = typeof TextDecoder < 'u' && new TextDecoder(),
  bE = 0;
try {
  Pf.decode(fE, { stream: !0 }), (bE = 1);
} catch {}
var wE = function (t) {
  for (var n = '', r = 0; ; ) {
    var o = t[r++],
      l = (o > 127) + (o > 223) + (o > 239);
    if (r + l > t.length) return [n, gy(t, r - 1)];
    l
      ? l == 3
        ? ((o =
            (((o & 15) << 18) |
              ((t[r++] & 63) << 12) |
              ((t[r++] & 63) << 6) |
              (t[r++] & 63)) -
            65536),
          (n += String.fromCharCode(55296 | (o >> 10), 56320 | (o & 1023))))
        : l & 1
        ? (n += String.fromCharCode(((o & 31) << 6) | (t[r++] & 63)))
        : (n += String.fromCharCode(
            ((o & 15) << 12) | ((t[r++] & 63) << 6) | (t[r++] & 63),
          ))
      : (n += String.fromCharCode(o));
  }
};
function xE(t, n) {
  if (n) {
    for (var r = '', o = 0; o < t.length; o += 16384)
      r += String.fromCharCode.apply(null, t.subarray(o, o + 16384));
    return r;
  } else {
    if (Pf) return Pf.decode(t);
    var l = wE(t),
      u = l[0],
      f = l[1];
    return f.length && qn(8), u;
  }
}
const bv = () => {},
  di = () => Promise.resolve();
function _E() {
  const t = Dn({
    state: new U0(),
    waitForConnection: f,
    reconnect: l,
    ws: new EventTarget(),
  });
  (t.state.filesMap = Dn(t.state.filesMap)),
    (t.state.idMap = Dn(t.state.idMap));
  let n;
  const r = {
    getFiles: () => n.files,
    getPaths: () => n.paths,
    getConfig: () => n.config,
    getModuleGraph: async (h) => n.moduleGraph[h],
    getTransformResult: async (h) => ({ code: h, source: '' }),
    readFile: async (h) => Promise.resolve(h),
    onDone: bv,
    onCollected: di,
    onTaskUpdate: bv,
    writeFile: di,
    rerun: di,
    updateSnapshot: di,
    removeFile: di,
    createDirectory: di,
    resolveSnapshotPath: di,
    snapshotSaved: di,
  };
  t.rpc = r;
  let o;
  function l() {
    u();
  }
  async function u() {
    var v;
    const h = await fetch(window.METADATA_PATH),
      d =
        ((v = h.headers.get('content-type')) == null
          ? void 0
          : v.toLowerCase()) || '';
    if (d.includes('application/gzip') || d.includes('application/x-gzip')) {
      const b = new Uint8Array(await h.arrayBuffer()),
        x = xE(yE(b));
      n = Af(x);
    } else n = Af(await h.text());
    const g = new Event('open');
    t.ws.dispatchEvent(g);
  }
  u();
  function f() {
    return o;
  }
  return t;
}
const pa = Vt('idle'),
  je = (function () {
    return yr
      ? _E()
      : KC(ZC, {
          reactive: Dn,
          handlers: {
            onTaskUpdate() {
              pa.value = 'running';
            },
            onFinished() {
              pa.value = 'idle';
            },
          },
        });
  })(),
  Ea = as({}),
  Xi = Vt('CONNECTING'),
  En = xt(() => je.state.getFiles()),
  Le = xt(() => En.value.find((t) => t.id === pr.value)),
  vy = xt(
    () =>
      Ch(Le.value)
        .map((t) => (t == null ? void 0 : t.logs) || [])
        .flat() || [],
  );
function tc(t) {
  return En.value.find((n) => n.id === t);
}
const SE = xt(() => Xi.value === 'OPEN'),
  Xu = xt(() => Xi.value === 'CONNECTING');
xt(() => Xi.value === 'CLOSED');
function kE(t = je.state.getFiles()) {
  return my(t);
}
function my(t) {
  return (
    t.forEach((n) => {
      delete n.result, Ch(n).forEach((r) => delete r.result);
    }),
    je.rpc.rerun(t.map((n) => n.filepath))
  );
}
function CE() {
  if (Le.value) return my([Le.value]);
}
Re(
  () => je.ws,
  (t) => {
    (Xi.value = yr ? 'OPEN' : 'CONNECTING'),
      t.addEventListener('open', async () => {
        (Xi.value = 'OPEN'), je.state.filesMap.clear();
        const [n, r] = await Promise.all([
          je.rpc.getFiles(),
          je.rpc.getConfig(),
        ]);
        je.state.collectFiles(n), (Ea.value = r);
      }),
      t.addEventListener('close', () => {
        setTimeout(() => {
          Xi.value === 'CONNECTING' && (Xi.value = 'CLOSED');
        }, 1e3);
      });
  },
  { immediate: !0 },
);
const TE = { 'text-2xl': '' },
  EE = lt(
    'div',
    { 'text-lg': '', op50: '' },
    ' Check your terminal or start a new server with `vitest --ui` ',
    -1,
  ),
  LE = ne({
    __name: 'ConnectionOverlay',
    setup(t) {
      return (n, r) =>
        U(SE)
          ? ee('', !0)
          : (at(),
            Lt(
              'div',
              {
                key: 0,
                fixed: '',
                'inset-0': '',
                p2: '',
                'z-10': '',
                'select-none': '',
                text: 'center sm',
                bg: 'overlay',
                'backdrop-blur-sm': '',
                'backdrop-saturate-0': '',
                onClick:
                  r[0] ||
                  (r[0] = (...o) => U(je).reconnect && U(je).reconnect(...o)),
              },
              [
                lt(
                  'div',
                  {
                    'h-full': '',
                    flex: '~ col gap-2',
                    'items-center': '',
                    'justify-center': '',
                    class: ve(U(Xu) ? 'animate-pulse' : ''),
                  },
                  [
                    lt(
                      'div',
                      {
                        text: '5xl',
                        class: ve(
                          U(Xu)
                            ? 'i-carbon:renew animate-spin animate-reverse'
                            : 'i-carbon-wifi-off',
                        ),
                      },
                      null,
                      2,
                    ),
                    lt(
                      'div',
                      TE,
                      Jt(U(Xu) ? 'Connecting...' : 'Disconnected'),
                      1,
                    ),
                    EE,
                  ],
                  2,
                ),
              ],
            ));
    },
  });
var yy = {},
  Ir = {};
const AE = 'Á',
  ME = 'á',
  NE = 'Ă',
  PE = 'ă',
  OE = '∾',
  $E = '∿',
  DE = '∾̳',
  RE = 'Â',
  zE = 'â',
  FE = '´',
  IE = 'А',
  qE = 'а',
  HE = 'Æ',
  BE = 'æ',
  WE = '⁡',
  UE = '𝔄',
  jE = '𝔞',
  GE = 'À',
  VE = 'à',
  KE = 'ℵ',
  XE = 'ℵ',
  YE = 'Α',
  ZE = 'α',
  JE = 'Ā',
  QE = 'ā',
  tL = '⨿',
  eL = '&',
  nL = '&',
  rL = '⩕',
  iL = '⩓',
  oL = '∧',
  sL = '⩜',
  aL = '⩘',
  lL = '⩚',
  cL = '∠',
  uL = '⦤',
  fL = '∠',
  hL = '⦨',
  dL = '⦩',
  pL = '⦪',
  gL = '⦫',
  vL = '⦬',
  mL = '⦭',
  yL = '⦮',
  bL = '⦯',
  wL = '∡',
  xL = '∟',
  _L = '⊾',
  SL = '⦝',
  kL = '∢',
  CL = 'Å',
  TL = '⍼',
  EL = 'Ą',
  LL = 'ą',
  AL = '𝔸',
  ML = '𝕒',
  NL = '⩯',
  PL = '≈',
  OL = '⩰',
  $L = '≊',
  DL = '≋',
  RL = "'",
  zL = '⁡',
  FL = '≈',
  IL = '≊',
  qL = 'Å',
  HL = 'å',
  BL = '𝒜',
  WL = '𝒶',
  UL = '≔',
  jL = '*',
  GL = '≈',
  VL = '≍',
  KL = 'Ã',
  XL = 'ã',
  YL = 'Ä',
  ZL = 'ä',
  JL = '∳',
  QL = '⨑',
  tA = '≌',
  eA = '϶',
  nA = '‵',
  rA = '∽',
  iA = '⋍',
  oA = '∖',
  sA = '⫧',
  aA = '⊽',
  lA = '⌅',
  cA = '⌆',
  uA = '⌅',
  fA = '⎵',
  hA = '⎶',
  dA = '≌',
  pA = 'Б',
  gA = 'б',
  vA = '„',
  mA = '∵',
  yA = '∵',
  bA = '∵',
  wA = '⦰',
  xA = '϶',
  _A = 'ℬ',
  SA = 'ℬ',
  kA = 'Β',
  CA = 'β',
  TA = 'ℶ',
  EA = '≬',
  LA = '𝔅',
  AA = '𝔟',
  MA = '⋂',
  NA = '◯',
  PA = '⋃',
  OA = '⨀',
  $A = '⨁',
  DA = '⨂',
  RA = '⨆',
  zA = '★',
  FA = '▽',
  IA = '△',
  qA = '⨄',
  HA = '⋁',
  BA = '⋀',
  WA = '⤍',
  UA = '⧫',
  jA = '▪',
  GA = '▴',
  VA = '▾',
  KA = '◂',
  XA = '▸',
  YA = '␣',
  ZA = '▒',
  JA = '░',
  QA = '▓',
  tM = '█',
  eM = '=⃥',
  nM = '≡⃥',
  rM = '⫭',
  iM = '⌐',
  oM = '𝔹',
  sM = '𝕓',
  aM = '⊥',
  lM = '⊥',
  cM = '⋈',
  uM = '⧉',
  fM = '┐',
  hM = '╕',
  dM = '╖',
  pM = '╗',
  gM = '┌',
  vM = '╒',
  mM = '╓',
  yM = '╔',
  bM = '─',
  wM = '═',
  xM = '┬',
  _M = '╤',
  SM = '╥',
  kM = '╦',
  CM = '┴',
  TM = '╧',
  EM = '╨',
  LM = '╩',
  AM = '⊟',
  MM = '⊞',
  NM = '⊠',
  PM = '┘',
  OM = '╛',
  $M = '╜',
  DM = '╝',
  RM = '└',
  zM = '╘',
  FM = '╙',
  IM = '╚',
  qM = '│',
  HM = '║',
  BM = '┼',
  WM = '╪',
  UM = '╫',
  jM = '╬',
  GM = '┤',
  VM = '╡',
  KM = '╢',
  XM = '╣',
  YM = '├',
  ZM = '╞',
  JM = '╟',
  QM = '╠',
  tN = '‵',
  eN = '˘',
  nN = '˘',
  rN = '¦',
  iN = '𝒷',
  oN = 'ℬ',
  sN = '⁏',
  aN = '∽',
  lN = '⋍',
  cN = '⧅',
  uN = '\\',
  fN = '⟈',
  hN = '•',
  dN = '•',
  pN = '≎',
  gN = '⪮',
  vN = '≏',
  mN = '≎',
  yN = '≏',
  bN = 'Ć',
  wN = 'ć',
  xN = '⩄',
  _N = '⩉',
  SN = '⩋',
  kN = '∩',
  CN = '⋒',
  TN = '⩇',
  EN = '⩀',
  LN = 'ⅅ',
  AN = '∩︀',
  MN = '⁁',
  NN = 'ˇ',
  PN = 'ℭ',
  ON = '⩍',
  $N = 'Č',
  DN = 'č',
  RN = 'Ç',
  zN = 'ç',
  FN = 'Ĉ',
  IN = 'ĉ',
  qN = '∰',
  HN = '⩌',
  BN = '⩐',
  WN = 'Ċ',
  UN = 'ċ',
  jN = '¸',
  GN = '¸',
  VN = '⦲',
  KN = '¢',
  XN = '·',
  YN = '·',
  ZN = '𝔠',
  JN = 'ℭ',
  QN = 'Ч',
  tP = 'ч',
  eP = '✓',
  nP = '✓',
  rP = 'Χ',
  iP = 'χ',
  oP = 'ˆ',
  sP = '≗',
  aP = '↺',
  lP = '↻',
  cP = '⊛',
  uP = '⊚',
  fP = '⊝',
  hP = '⊙',
  dP = '®',
  pP = 'Ⓢ',
  gP = '⊖',
  vP = '⊕',
  mP = '⊗',
  yP = '○',
  bP = '⧃',
  wP = '≗',
  xP = '⨐',
  _P = '⫯',
  SP = '⧂',
  kP = '∲',
  CP = '”',
  TP = '’',
  EP = '♣',
  LP = '♣',
  AP = ':',
  MP = '∷',
  NP = '⩴',
  PP = '≔',
  OP = '≔',
  $P = ',',
  DP = '@',
  RP = '∁',
  zP = '∘',
  FP = '∁',
  IP = 'ℂ',
  qP = '≅',
  HP = '⩭',
  BP = '≡',
  WP = '∮',
  UP = '∯',
  jP = '∮',
  GP = '𝕔',
  VP = 'ℂ',
  KP = '∐',
  XP = '∐',
  YP = '©',
  ZP = '©',
  JP = '℗',
  QP = '∳',
  tO = '↵',
  eO = '✗',
  nO = '⨯',
  rO = '𝒞',
  iO = '𝒸',
  oO = '⫏',
  sO = '⫑',
  aO = '⫐',
  lO = '⫒',
  cO = '⋯',
  uO = '⤸',
  fO = '⤵',
  hO = '⋞',
  dO = '⋟',
  pO = '↶',
  gO = '⤽',
  vO = '⩈',
  mO = '⩆',
  yO = '≍',
  bO = '∪',
  wO = '⋓',
  xO = '⩊',
  _O = '⊍',
  SO = '⩅',
  kO = '∪︀',
  CO = '↷',
  TO = '⤼',
  EO = '⋞',
  LO = '⋟',
  AO = '⋎',
  MO = '⋏',
  NO = '¤',
  PO = '↶',
  OO = '↷',
  $O = '⋎',
  DO = '⋏',
  RO = '∲',
  zO = '∱',
  FO = '⌭',
  IO = '†',
  qO = '‡',
  HO = 'ℸ',
  BO = '↓',
  WO = '↡',
  UO = '⇓',
  jO = '‐',
  GO = '⫤',
  VO = '⊣',
  KO = '⤏',
  XO = '˝',
  YO = 'Ď',
  ZO = 'ď',
  JO = 'Д',
  QO = 'д',
  t$ = '‡',
  e$ = '⇊',
  n$ = 'ⅅ',
  r$ = 'ⅆ',
  i$ = '⤑',
  o$ = '⩷',
  s$ = '°',
  a$ = '∇',
  l$ = 'Δ',
  c$ = 'δ',
  u$ = '⦱',
  f$ = '⥿',
  h$ = '𝔇',
  d$ = '𝔡',
  p$ = '⥥',
  g$ = '⇃',
  v$ = '⇂',
  m$ = '´',
  y$ = '˙',
  b$ = '˝',
  w$ = '`',
  x$ = '˜',
  _$ = '⋄',
  S$ = '⋄',
  k$ = '⋄',
  C$ = '♦',
  T$ = '♦',
  E$ = '¨',
  L$ = 'ⅆ',
  A$ = 'ϝ',
  M$ = '⋲',
  N$ = '÷',
  P$ = '÷',
  O$ = '⋇',
  $$ = '⋇',
  D$ = 'Ђ',
  R$ = 'ђ',
  z$ = '⌞',
  F$ = '⌍',
  I$ = '$',
  q$ = '𝔻',
  H$ = '𝕕',
  B$ = '¨',
  W$ = '˙',
  U$ = '⃜',
  j$ = '≐',
  G$ = '≑',
  V$ = '≐',
  K$ = '∸',
  X$ = '∔',
  Y$ = '⊡',
  Z$ = '⌆',
  J$ = '∯',
  Q$ = '¨',
  tD = '⇓',
  eD = '⇐',
  nD = '⇔',
  rD = '⫤',
  iD = '⟸',
  oD = '⟺',
  sD = '⟹',
  aD = '⇒',
  lD = '⊨',
  cD = '⇑',
  uD = '⇕',
  fD = '∥',
  hD = '⤓',
  dD = '↓',
  pD = '↓',
  gD = '⇓',
  vD = '⇵',
  mD = '̑',
  yD = '⇊',
  bD = '⇃',
  wD = '⇂',
  xD = '⥐',
  _D = '⥞',
  SD = '⥖',
  kD = '↽',
  CD = '⥟',
  TD = '⥗',
  ED = '⇁',
  LD = '↧',
  AD = '⊤',
  MD = '⤐',
  ND = '⌟',
  PD = '⌌',
  OD = '𝒟',
  $D = '𝒹',
  DD = 'Ѕ',
  RD = 'ѕ',
  zD = '⧶',
  FD = 'Đ',
  ID = 'đ',
  qD = '⋱',
  HD = '▿',
  BD = '▾',
  WD = '⇵',
  UD = '⥯',
  jD = '⦦',
  GD = 'Џ',
  VD = 'џ',
  KD = '⟿',
  XD = 'É',
  YD = 'é',
  ZD = '⩮',
  JD = 'Ě',
  QD = 'ě',
  t2 = 'Ê',
  e2 = 'ê',
  n2 = '≖',
  r2 = '≕',
  i2 = 'Э',
  o2 = 'э',
  s2 = '⩷',
  a2 = 'Ė',
  l2 = 'ė',
  c2 = '≑',
  u2 = 'ⅇ',
  f2 = '≒',
  h2 = '𝔈',
  d2 = '𝔢',
  p2 = '⪚',
  g2 = 'È',
  v2 = 'è',
  m2 = '⪖',
  y2 = '⪘',
  b2 = '⪙',
  w2 = '∈',
  x2 = '⏧',
  _2 = 'ℓ',
  S2 = '⪕',
  k2 = '⪗',
  C2 = 'Ē',
  T2 = 'ē',
  E2 = '∅',
  L2 = '∅',
  A2 = '◻',
  M2 = '∅',
  N2 = '▫',
  P2 = ' ',
  O2 = ' ',
  $2 = ' ',
  D2 = 'Ŋ',
  R2 = 'ŋ',
  z2 = ' ',
  F2 = 'Ę',
  I2 = 'ę',
  q2 = '𝔼',
  H2 = '𝕖',
  B2 = '⋕',
  W2 = '⧣',
  U2 = '⩱',
  j2 = 'ε',
  G2 = 'Ε',
  V2 = 'ε',
  K2 = 'ϵ',
  X2 = '≖',
  Y2 = '≕',
  Z2 = '≂',
  J2 = '⪖',
  Q2 = '⪕',
  tR = '⩵',
  eR = '=',
  nR = '≂',
  rR = '≟',
  iR = '⇌',
  oR = '≡',
  sR = '⩸',
  aR = '⧥',
  lR = '⥱',
  cR = '≓',
  uR = 'ℯ',
  fR = 'ℰ',
  hR = '≐',
  dR = '⩳',
  pR = '≂',
  gR = 'Η',
  vR = 'η',
  mR = 'Ð',
  yR = 'ð',
  bR = 'Ë',
  wR = 'ë',
  xR = '€',
  _R = '!',
  SR = '∃',
  kR = '∃',
  CR = 'ℰ',
  TR = 'ⅇ',
  ER = 'ⅇ',
  LR = '≒',
  AR = 'Ф',
  MR = 'ф',
  NR = '♀',
  PR = 'ﬃ',
  OR = 'ﬀ',
  $R = 'ﬄ',
  DR = '𝔉',
  RR = '𝔣',
  zR = 'ﬁ',
  FR = '◼',
  IR = '▪',
  qR = 'fj',
  HR = '♭',
  BR = 'ﬂ',
  WR = '▱',
  UR = 'ƒ',
  jR = '𝔽',
  GR = '𝕗',
  VR = '∀',
  KR = '∀',
  XR = '⋔',
  YR = '⫙',
  ZR = 'ℱ',
  JR = '⨍',
  QR = '½',
  tz = '⅓',
  ez = '¼',
  nz = '⅕',
  rz = '⅙',
  iz = '⅛',
  oz = '⅔',
  sz = '⅖',
  az = '¾',
  lz = '⅗',
  cz = '⅜',
  uz = '⅘',
  fz = '⅚',
  hz = '⅝',
  dz = '⅞',
  pz = '⁄',
  gz = '⌢',
  vz = '𝒻',
  mz = 'ℱ',
  yz = 'ǵ',
  bz = 'Γ',
  wz = 'γ',
  xz = 'Ϝ',
  _z = 'ϝ',
  Sz = '⪆',
  kz = 'Ğ',
  Cz = 'ğ',
  Tz = 'Ģ',
  Ez = 'Ĝ',
  Lz = 'ĝ',
  Az = 'Г',
  Mz = 'г',
  Nz = 'Ġ',
  Pz = 'ġ',
  Oz = '≥',
  $z = '≧',
  Dz = '⪌',
  Rz = '⋛',
  zz = '≥',
  Fz = '≧',
  Iz = '⩾',
  qz = '⪩',
  Hz = '⩾',
  Bz = '⪀',
  Wz = '⪂',
  Uz = '⪄',
  jz = '⋛︀',
  Gz = '⪔',
  Vz = '𝔊',
  Kz = '𝔤',
  Xz = '≫',
  Yz = '⋙',
  Zz = '⋙',
  Jz = 'ℷ',
  Qz = 'Ѓ',
  tF = 'ѓ',
  eF = '⪥',
  nF = '≷',
  rF = '⪒',
  iF = '⪤',
  oF = '⪊',
  sF = '⪊',
  aF = '⪈',
  lF = '≩',
  cF = '⪈',
  uF = '≩',
  fF = '⋧',
  hF = '𝔾',
  dF = '𝕘',
  pF = '`',
  gF = '≥',
  vF = '⋛',
  mF = '≧',
  yF = '⪢',
  bF = '≷',
  wF = '⩾',
  xF = '≳',
  _F = '𝒢',
  SF = 'ℊ',
  kF = '≳',
  CF = '⪎',
  TF = '⪐',
  EF = '⪧',
  LF = '⩺',
  AF = '>',
  MF = '>',
  NF = '≫',
  PF = '⋗',
  OF = '⦕',
  $F = '⩼',
  DF = '⪆',
  RF = '⥸',
  zF = '⋗',
  FF = '⋛',
  IF = '⪌',
  qF = '≷',
  HF = '≳',
  BF = '≩︀',
  WF = '≩︀',
  UF = 'ˇ',
  jF = ' ',
  GF = '½',
  VF = 'ℋ',
  KF = 'Ъ',
  XF = 'ъ',
  YF = '⥈',
  ZF = '↔',
  JF = '⇔',
  QF = '↭',
  tI = '^',
  eI = 'ℏ',
  nI = 'Ĥ',
  rI = 'ĥ',
  iI = '♥',
  oI = '♥',
  sI = '…',
  aI = '⊹',
  lI = '𝔥',
  cI = 'ℌ',
  uI = 'ℋ',
  fI = '⤥',
  hI = '⤦',
  dI = '⇿',
  pI = '∻',
  gI = '↩',
  vI = '↪',
  mI = '𝕙',
  yI = 'ℍ',
  bI = '―',
  wI = '─',
  xI = '𝒽',
  _I = 'ℋ',
  SI = 'ℏ',
  kI = 'Ħ',
  CI = 'ħ',
  TI = '≎',
  EI = '≏',
  LI = '⁃',
  AI = '‐',
  MI = 'Í',
  NI = 'í',
  PI = '⁣',
  OI = 'Î',
  $I = 'î',
  DI = 'И',
  RI = 'и',
  zI = 'İ',
  FI = 'Е',
  II = 'е',
  qI = '¡',
  HI = '⇔',
  BI = '𝔦',
  WI = 'ℑ',
  UI = 'Ì',
  jI = 'ì',
  GI = 'ⅈ',
  VI = '⨌',
  KI = '∭',
  XI = '⧜',
  YI = '℩',
  ZI = 'Ĳ',
  JI = 'ĳ',
  QI = 'Ī',
  tq = 'ī',
  eq = 'ℑ',
  nq = 'ⅈ',
  rq = 'ℐ',
  iq = 'ℑ',
  oq = 'ı',
  sq = 'ℑ',
  aq = '⊷',
  lq = 'Ƶ',
  cq = '⇒',
  uq = '℅',
  fq = '∞',
  hq = '⧝',
  dq = 'ı',
  pq = '⊺',
  gq = '∫',
  vq = '∬',
  mq = 'ℤ',
  yq = '∫',
  bq = '⊺',
  wq = '⋂',
  xq = '⨗',
  _q = '⨼',
  Sq = '⁣',
  kq = '⁢',
  Cq = 'Ё',
  Tq = 'ё',
  Eq = 'Į',
  Lq = 'į',
  Aq = '𝕀',
  Mq = '𝕚',
  Nq = 'Ι',
  Pq = 'ι',
  Oq = '⨼',
  $q = '¿',
  Dq = '𝒾',
  Rq = 'ℐ',
  zq = '∈',
  Fq = '⋵',
  Iq = '⋹',
  qq = '⋴',
  Hq = '⋳',
  Bq = '∈',
  Wq = '⁢',
  Uq = 'Ĩ',
  jq = 'ĩ',
  Gq = 'І',
  Vq = 'і',
  Kq = 'Ï',
  Xq = 'ï',
  Yq = 'Ĵ',
  Zq = 'ĵ',
  Jq = 'Й',
  Qq = 'й',
  tH = '𝔍',
  eH = '𝔧',
  nH = 'ȷ',
  rH = '𝕁',
  iH = '𝕛',
  oH = '𝒥',
  sH = '𝒿',
  aH = 'Ј',
  lH = 'ј',
  cH = 'Є',
  uH = 'є',
  fH = 'Κ',
  hH = 'κ',
  dH = 'ϰ',
  pH = 'Ķ',
  gH = 'ķ',
  vH = 'К',
  mH = 'к',
  yH = '𝔎',
  bH = '𝔨',
  wH = 'ĸ',
  xH = 'Х',
  _H = 'х',
  SH = 'Ќ',
  kH = 'ќ',
  CH = '𝕂',
  TH = '𝕜',
  EH = '𝒦',
  LH = '𝓀',
  AH = '⇚',
  MH = 'Ĺ',
  NH = 'ĺ',
  PH = '⦴',
  OH = 'ℒ',
  $H = 'Λ',
  DH = 'λ',
  RH = '⟨',
  zH = '⟪',
  FH = '⦑',
  IH = '⟨',
  qH = '⪅',
  HH = 'ℒ',
  BH = '«',
  WH = '⇤',
  UH = '⤟',
  jH = '←',
  GH = '↞',
  VH = '⇐',
  KH = '⤝',
  XH = '↩',
  YH = '↫',
  ZH = '⤹',
  JH = '⥳',
  QH = '↢',
  tB = '⤙',
  eB = '⤛',
  nB = '⪫',
  rB = '⪭',
  iB = '⪭︀',
  oB = '⤌',
  sB = '⤎',
  aB = '❲',
  lB = '{',
  cB = '[',
  uB = '⦋',
  fB = '⦏',
  hB = '⦍',
  dB = 'Ľ',
  pB = 'ľ',
  gB = 'Ļ',
  vB = 'ļ',
  mB = '⌈',
  yB = '{',
  bB = 'Л',
  wB = 'л',
  xB = '⤶',
  _B = '“',
  SB = '„',
  kB = '⥧',
  CB = '⥋',
  TB = '↲',
  EB = '≤',
  LB = '≦',
  AB = '⟨',
  MB = '⇤',
  NB = '←',
  PB = '←',
  OB = '⇐',
  $B = '⇆',
  DB = '↢',
  RB = '⌈',
  zB = '⟦',
  FB = '⥡',
  IB = '⥙',
  qB = '⇃',
  HB = '⌊',
  BB = '↽',
  WB = '↼',
  UB = '⇇',
  jB = '↔',
  GB = '↔',
  VB = '⇔',
  KB = '⇆',
  XB = '⇋',
  YB = '↭',
  ZB = '⥎',
  JB = '↤',
  QB = '⊣',
  t3 = '⥚',
  e3 = '⋋',
  n3 = '⧏',
  r3 = '⊲',
  i3 = '⊴',
  o3 = '⥑',
  s3 = '⥠',
  a3 = '⥘',
  l3 = '↿',
  c3 = '⥒',
  u3 = '↼',
  f3 = '⪋',
  h3 = '⋚',
  d3 = '≤',
  p3 = '≦',
  g3 = '⩽',
  v3 = '⪨',
  m3 = '⩽',
  y3 = '⩿',
  b3 = '⪁',
  w3 = '⪃',
  x3 = '⋚︀',
  _3 = '⪓',
  S3 = '⪅',
  k3 = '⋖',
  C3 = '⋚',
  T3 = '⪋',
  E3 = '⋚',
  L3 = '≦',
  A3 = '≶',
  M3 = '≶',
  N3 = '⪡',
  P3 = '≲',
  O3 = '⩽',
  $3 = '≲',
  D3 = '⥼',
  R3 = '⌊',
  z3 = '𝔏',
  F3 = '𝔩',
  I3 = '≶',
  q3 = '⪑',
  H3 = '⥢',
  B3 = '↽',
  W3 = '↼',
  U3 = '⥪',
  j3 = '▄',
  G3 = 'Љ',
  V3 = 'љ',
  K3 = '⇇',
  X3 = '≪',
  Y3 = '⋘',
  Z3 = '⌞',
  J3 = '⇚',
  Q3 = '⥫',
  t5 = '◺',
  e5 = 'Ŀ',
  n5 = 'ŀ',
  r5 = '⎰',
  i5 = '⎰',
  o5 = '⪉',
  s5 = '⪉',
  a5 = '⪇',
  l5 = '≨',
  c5 = '⪇',
  u5 = '≨',
  f5 = '⋦',
  h5 = '⟬',
  d5 = '⇽',
  p5 = '⟦',
  g5 = '⟵',
  v5 = '⟵',
  m5 = '⟸',
  y5 = '⟷',
  b5 = '⟷',
  w5 = '⟺',
  x5 = '⟼',
  _5 = '⟶',
  S5 = '⟶',
  k5 = '⟹',
  C5 = '↫',
  T5 = '↬',
  E5 = '⦅',
  L5 = '𝕃',
  A5 = '𝕝',
  M5 = '⨭',
  N5 = '⨴',
  P5 = '∗',
  O5 = '_',
  $5 = '↙',
  D5 = '↘',
  R5 = '◊',
  z5 = '◊',
  F5 = '⧫',
  I5 = '(',
  q5 = '⦓',
  H5 = '⇆',
  B5 = '⌟',
  W5 = '⇋',
  U5 = '⥭',
  j5 = '‎',
  G5 = '⊿',
  V5 = '‹',
  K5 = '𝓁',
  X5 = 'ℒ',
  Y5 = '↰',
  Z5 = '↰',
  J5 = '≲',
  Q5 = '⪍',
  t8 = '⪏',
  e8 = '[',
  n8 = '‘',
  r8 = '‚',
  i8 = 'Ł',
  o8 = 'ł',
  s8 = '⪦',
  a8 = '⩹',
  l8 = '<',
  c8 = '<',
  u8 = '≪',
  f8 = '⋖',
  h8 = '⋋',
  d8 = '⋉',
  p8 = '⥶',
  g8 = '⩻',
  v8 = '◃',
  m8 = '⊴',
  y8 = '◂',
  b8 = '⦖',
  w8 = '⥊',
  x8 = '⥦',
  _8 = '≨︀',
  S8 = '≨︀',
  k8 = '¯',
  C8 = '♂',
  T8 = '✠',
  E8 = '✠',
  L8 = '↦',
  A8 = '↦',
  M8 = '↧',
  N8 = '↤',
  P8 = '↥',
  O8 = '▮',
  $8 = '⨩',
  D8 = 'М',
  R8 = 'м',
  z8 = '—',
  F8 = '∺',
  I8 = '∡',
  q8 = ' ',
  H8 = 'ℳ',
  B8 = '𝔐',
  W8 = '𝔪',
  U8 = '℧',
  j8 = 'µ',
  G8 = '*',
  V8 = '⫰',
  K8 = '∣',
  X8 = '·',
  Y8 = '⊟',
  Z8 = '−',
  J8 = '∸',
  Q8 = '⨪',
  tW = '∓',
  eW = '⫛',
  nW = '…',
  rW = '∓',
  iW = '⊧',
  oW = '𝕄',
  sW = '𝕞',
  aW = '∓',
  lW = '𝓂',
  cW = 'ℳ',
  uW = '∾',
  fW = 'Μ',
  hW = 'μ',
  dW = '⊸',
  pW = '⊸',
  gW = '∇',
  vW = 'Ń',
  mW = 'ń',
  yW = '∠⃒',
  bW = '≉',
  wW = '⩰̸',
  xW = '≋̸',
  _W = 'ŉ',
  SW = '≉',
  kW = '♮',
  CW = 'ℕ',
  TW = '♮',
  EW = ' ',
  LW = '≎̸',
  AW = '≏̸',
  MW = '⩃',
  NW = 'Ň',
  PW = 'ň',
  OW = 'Ņ',
  $W = 'ņ',
  DW = '≇',
  RW = '⩭̸',
  zW = '⩂',
  FW = 'Н',
  IW = 'н',
  qW = '–',
  HW = '⤤',
  BW = '↗',
  WW = '⇗',
  UW = '↗',
  jW = '≠',
  GW = '≐̸',
  VW = '​',
  KW = '​',
  XW = '​',
  YW = '​',
  ZW = '≢',
  JW = '⤨',
  QW = '≂̸',
  tU = '≫',
  eU = '≪',
  nU = `
`,
  rU = '∄',
  iU = '∄',
  oU = '𝔑',
  sU = '𝔫',
  aU = '≧̸',
  lU = '≱',
  cU = '≱',
  uU = '≧̸',
  fU = '⩾̸',
  hU = '⩾̸',
  dU = '⋙̸',
  pU = '≵',
  gU = '≫⃒',
  vU = '≯',
  mU = '≯',
  yU = '≫̸',
  bU = '↮',
  wU = '⇎',
  xU = '⫲',
  _U = '∋',
  SU = '⋼',
  kU = '⋺',
  CU = '∋',
  TU = 'Њ',
  EU = 'њ',
  LU = '↚',
  AU = '⇍',
  MU = '‥',
  NU = '≦̸',
  PU = '≰',
  OU = '↚',
  $U = '⇍',
  DU = '↮',
  RU = '⇎',
  zU = '≰',
  FU = '≦̸',
  IU = '⩽̸',
  qU = '⩽̸',
  HU = '≮',
  BU = '⋘̸',
  WU = '≴',
  UU = '≪⃒',
  jU = '≮',
  GU = '⋪',
  VU = '⋬',
  KU = '≪̸',
  XU = '∤',
  YU = '⁠',
  ZU = ' ',
  JU = '𝕟',
  QU = 'ℕ',
  t4 = '⫬',
  e4 = '¬',
  n4 = '≢',
  r4 = '≭',
  i4 = '∦',
  o4 = '∉',
  s4 = '≠',
  a4 = '≂̸',
  l4 = '∄',
  c4 = '≯',
  u4 = '≱',
  f4 = '≧̸',
  h4 = '≫̸',
  d4 = '≹',
  p4 = '⩾̸',
  g4 = '≵',
  v4 = '≎̸',
  m4 = '≏̸',
  y4 = '∉',
  b4 = '⋵̸',
  w4 = '⋹̸',
  x4 = '∉',
  _4 = '⋷',
  S4 = '⋶',
  k4 = '⧏̸',
  C4 = '⋪',
  T4 = '⋬',
  E4 = '≮',
  L4 = '≰',
  A4 = '≸',
  M4 = '≪̸',
  N4 = '⩽̸',
  P4 = '≴',
  O4 = '⪢̸',
  $4 = '⪡̸',
  D4 = '∌',
  R4 = '∌',
  z4 = '⋾',
  F4 = '⋽',
  I4 = '⊀',
  q4 = '⪯̸',
  H4 = '⋠',
  B4 = '∌',
  W4 = '⧐̸',
  U4 = '⋫',
  j4 = '⋭',
  G4 = '⊏̸',
  V4 = '⋢',
  K4 = '⊐̸',
  X4 = '⋣',
  Y4 = '⊂⃒',
  Z4 = '⊈',
  J4 = '⊁',
  Q4 = '⪰̸',
  t6 = '⋡',
  e6 = '≿̸',
  n6 = '⊃⃒',
  r6 = '⊉',
  i6 = '≁',
  o6 = '≄',
  s6 = '≇',
  a6 = '≉',
  l6 = '∤',
  c6 = '∦',
  u6 = '∦',
  f6 = '⫽⃥',
  h6 = '∂̸',
  d6 = '⨔',
  p6 = '⊀',
  g6 = '⋠',
  v6 = '⊀',
  m6 = '⪯̸',
  y6 = '⪯̸',
  b6 = '⤳̸',
  w6 = '↛',
  x6 = '⇏',
  _6 = '↝̸',
  S6 = '↛',
  k6 = '⇏',
  C6 = '⋫',
  T6 = '⋭',
  E6 = '⊁',
  L6 = '⋡',
  A6 = '⪰̸',
  M6 = '𝒩',
  N6 = '𝓃',
  P6 = '∤',
  O6 = '∦',
  $6 = '≁',
  D6 = '≄',
  R6 = '≄',
  z6 = '∤',
  F6 = '∦',
  I6 = '⋢',
  q6 = '⋣',
  H6 = '⊄',
  B6 = '⫅̸',
  W6 = '⊈',
  U6 = '⊂⃒',
  j6 = '⊈',
  G6 = '⫅̸',
  V6 = '⊁',
  K6 = '⪰̸',
  X6 = '⊅',
  Y6 = '⫆̸',
  Z6 = '⊉',
  J6 = '⊃⃒',
  Q6 = '⊉',
  tj = '⫆̸',
  ej = '≹',
  nj = 'Ñ',
  rj = 'ñ',
  ij = '≸',
  oj = '⋪',
  sj = '⋬',
  aj = '⋫',
  lj = '⋭',
  cj = 'Ν',
  uj = 'ν',
  fj = '#',
  hj = '№',
  dj = ' ',
  pj = '≍⃒',
  gj = '⊬',
  vj = '⊭',
  mj = '⊮',
  yj = '⊯',
  bj = '≥⃒',
  wj = '>⃒',
  xj = '⤄',
  _j = '⧞',
  Sj = '⤂',
  kj = '≤⃒',
  Cj = '<⃒',
  Tj = '⊴⃒',
  Ej = '⤃',
  Lj = '⊵⃒',
  Aj = '∼⃒',
  Mj = '⤣',
  Nj = '↖',
  Pj = '⇖',
  Oj = '↖',
  $j = '⤧',
  Dj = 'Ó',
  Rj = 'ó',
  zj = '⊛',
  Fj = 'Ô',
  Ij = 'ô',
  qj = '⊚',
  Hj = 'О',
  Bj = 'о',
  Wj = '⊝',
  Uj = 'Ő',
  jj = 'ő',
  Gj = '⨸',
  Vj = '⊙',
  Kj = '⦼',
  Xj = 'Œ',
  Yj = 'œ',
  Zj = '⦿',
  Jj = '𝔒',
  Qj = '𝔬',
  t9 = '˛',
  e9 = 'Ò',
  n9 = 'ò',
  r9 = '⧁',
  i9 = '⦵',
  o9 = 'Ω',
  s9 = '∮',
  a9 = '↺',
  l9 = '⦾',
  c9 = '⦻',
  u9 = '‾',
  f9 = '⧀',
  h9 = 'Ō',
  d9 = 'ō',
  p9 = 'Ω',
  g9 = 'ω',
  v9 = 'Ο',
  m9 = 'ο',
  y9 = '⦶',
  b9 = '⊖',
  w9 = '𝕆',
  x9 = '𝕠',
  _9 = '⦷',
  S9 = '“',
  k9 = '‘',
  C9 = '⦹',
  T9 = '⊕',
  E9 = '↻',
  L9 = '⩔',
  A9 = '∨',
  M9 = '⩝',
  N9 = 'ℴ',
  P9 = 'ℴ',
  O9 = 'ª',
  $9 = 'º',
  D9 = '⊶',
  R9 = '⩖',
  z9 = '⩗',
  F9 = '⩛',
  I9 = 'Ⓢ',
  q9 = '𝒪',
  H9 = 'ℴ',
  B9 = 'Ø',
  W9 = 'ø',
  U9 = '⊘',
  j9 = 'Õ',
  G9 = 'õ',
  V9 = '⨶',
  K9 = '⨷',
  X9 = '⊗',
  Y9 = 'Ö',
  Z9 = 'ö',
  J9 = '⌽',
  Q9 = '‾',
  tG = '⏞',
  eG = '⎴',
  nG = '⏜',
  rG = '¶',
  iG = '∥',
  oG = '∥',
  sG = '⫳',
  aG = '⫽',
  lG = '∂',
  cG = '∂',
  uG = 'П',
  fG = 'п',
  hG = '%',
  dG = '.',
  pG = '‰',
  gG = '⊥',
  vG = '‱',
  mG = '𝔓',
  yG = '𝔭',
  bG = 'Φ',
  wG = 'φ',
  xG = 'ϕ',
  _G = 'ℳ',
  SG = '☎',
  kG = 'Π',
  CG = 'π',
  TG = '⋔',
  EG = 'ϖ',
  LG = 'ℏ',
  AG = 'ℎ',
  MG = 'ℏ',
  NG = '⨣',
  PG = '⊞',
  OG = '⨢',
  $G = '+',
  DG = '∔',
  RG = '⨥',
  zG = '⩲',
  FG = '±',
  IG = '±',
  qG = '⨦',
  HG = '⨧',
  BG = '±',
  WG = 'ℌ',
  UG = '⨕',
  jG = '𝕡',
  GG = 'ℙ',
  VG = '£',
  KG = '⪷',
  XG = '⪻',
  YG = '≺',
  ZG = '≼',
  JG = '⪷',
  QG = '≺',
  tV = '≼',
  eV = '≺',
  nV = '⪯',
  rV = '≼',
  iV = '≾',
  oV = '⪯',
  sV = '⪹',
  aV = '⪵',
  lV = '⋨',
  cV = '⪯',
  uV = '⪳',
  fV = '≾',
  hV = '′',
  dV = '″',
  pV = 'ℙ',
  gV = '⪹',
  vV = '⪵',
  mV = '⋨',
  yV = '∏',
  bV = '∏',
  wV = '⌮',
  xV = '⌒',
  _V = '⌓',
  SV = '∝',
  kV = '∝',
  CV = '∷',
  TV = '∝',
  EV = '≾',
  LV = '⊰',
  AV = '𝒫',
  MV = '𝓅',
  NV = 'Ψ',
  PV = 'ψ',
  OV = ' ',
  $V = '𝔔',
  DV = '𝔮',
  RV = '⨌',
  zV = '𝕢',
  FV = 'ℚ',
  IV = '⁗',
  qV = '𝒬',
  HV = '𝓆',
  BV = 'ℍ',
  WV = '⨖',
  UV = '?',
  jV = '≟',
  GV = '"',
  VV = '"',
  KV = '⇛',
  XV = '∽̱',
  YV = 'Ŕ',
  ZV = 'ŕ',
  JV = '√',
  QV = '⦳',
  t7 = '⟩',
  e7 = '⟫',
  n7 = '⦒',
  r7 = '⦥',
  i7 = '⟩',
  o7 = '»',
  s7 = '⥵',
  a7 = '⇥',
  l7 = '⤠',
  c7 = '⤳',
  u7 = '→',
  f7 = '↠',
  h7 = '⇒',
  d7 = '⤞',
  p7 = '↪',
  g7 = '↬',
  v7 = '⥅',
  m7 = '⥴',
  y7 = '⤖',
  b7 = '↣',
  w7 = '↝',
  x7 = '⤚',
  _7 = '⤜',
  S7 = '∶',
  k7 = 'ℚ',
  C7 = '⤍',
  T7 = '⤏',
  E7 = '⤐',
  L7 = '❳',
  A7 = '}',
  M7 = ']',
  N7 = '⦌',
  P7 = '⦎',
  O7 = '⦐',
  $7 = 'Ř',
  D7 = 'ř',
  R7 = 'Ŗ',
  z7 = 'ŗ',
  F7 = '⌉',
  I7 = '}',
  q7 = 'Р',
  H7 = 'р',
  B7 = '⤷',
  W7 = '⥩',
  U7 = '”',
  j7 = '”',
  G7 = '↳',
  V7 = 'ℜ',
  K7 = 'ℛ',
  X7 = 'ℜ',
  Y7 = 'ℝ',
  Z7 = 'ℜ',
  J7 = '▭',
  Q7 = '®',
  tK = '®',
  eK = '∋',
  nK = '⇋',
  rK = '⥯',
  iK = '⥽',
  oK = '⌋',
  sK = '𝔯',
  aK = 'ℜ',
  lK = '⥤',
  cK = '⇁',
  uK = '⇀',
  fK = '⥬',
  hK = 'Ρ',
  dK = 'ρ',
  pK = 'ϱ',
  gK = '⟩',
  vK = '⇥',
  mK = '→',
  yK = '→',
  bK = '⇒',
  wK = '⇄',
  xK = '↣',
  _K = '⌉',
  SK = '⟧',
  kK = '⥝',
  CK = '⥕',
  TK = '⇂',
  EK = '⌋',
  LK = '⇁',
  AK = '⇀',
  MK = '⇄',
  NK = '⇌',
  PK = '⇉',
  OK = '↝',
  $K = '↦',
  DK = '⊢',
  RK = '⥛',
  zK = '⋌',
  FK = '⧐',
  IK = '⊳',
  qK = '⊵',
  HK = '⥏',
  BK = '⥜',
  WK = '⥔',
  UK = '↾',
  jK = '⥓',
  GK = '⇀',
  VK = '˚',
  KK = '≓',
  XK = '⇄',
  YK = '⇌',
  ZK = '‏',
  JK = '⎱',
  QK = '⎱',
  tX = '⫮',
  eX = '⟭',
  nX = '⇾',
  rX = '⟧',
  iX = '⦆',
  oX = '𝕣',
  sX = 'ℝ',
  aX = '⨮',
  lX = '⨵',
  cX = '⥰',
  uX = ')',
  fX = '⦔',
  hX = '⨒',
  dX = '⇉',
  pX = '⇛',
  gX = '›',
  vX = '𝓇',
  mX = 'ℛ',
  yX = '↱',
  bX = '↱',
  wX = ']',
  xX = '’',
  _X = '’',
  SX = '⋌',
  kX = '⋊',
  CX = '▹',
  TX = '⊵',
  EX = '▸',
  LX = '⧎',
  AX = '⧴',
  MX = '⥨',
  NX = '℞',
  PX = 'Ś',
  OX = 'ś',
  $X = '‚',
  DX = '⪸',
  RX = 'Š',
  zX = 'š',
  FX = '⪼',
  IX = '≻',
  qX = '≽',
  HX = '⪰',
  BX = '⪴',
  WX = 'Ş',
  UX = 'ş',
  jX = 'Ŝ',
  GX = 'ŝ',
  VX = '⪺',
  KX = '⪶',
  XX = '⋩',
  YX = '⨓',
  ZX = '≿',
  JX = 'С',
  QX = 'с',
  tY = '⊡',
  eY = '⋅',
  nY = '⩦',
  rY = '⤥',
  iY = '↘',
  oY = '⇘',
  sY = '↘',
  aY = '§',
  lY = ';',
  cY = '⤩',
  uY = '∖',
  fY = '∖',
  hY = '✶',
  dY = '𝔖',
  pY = '𝔰',
  gY = '⌢',
  vY = '♯',
  mY = 'Щ',
  yY = 'щ',
  bY = 'Ш',
  wY = 'ш',
  xY = '↓',
  _Y = '←',
  SY = '∣',
  kY = '∥',
  CY = '→',
  TY = '↑',
  EY = '­',
  LY = 'Σ',
  AY = 'σ',
  MY = 'ς',
  NY = 'ς',
  PY = '∼',
  OY = '⩪',
  $Y = '≃',
  DY = '≃',
  RY = '⪞',
  zY = '⪠',
  FY = '⪝',
  IY = '⪟',
  qY = '≆',
  HY = '⨤',
  BY = '⥲',
  WY = '←',
  UY = '∘',
  jY = '∖',
  GY = '⨳',
  VY = '⧤',
  KY = '∣',
  XY = '⌣',
  YY = '⪪',
  ZY = '⪬',
  JY = '⪬︀',
  QY = 'Ь',
  tZ = 'ь',
  eZ = '⌿',
  nZ = '⧄',
  rZ = '/',
  iZ = '𝕊',
  oZ = '𝕤',
  sZ = '♠',
  aZ = '♠',
  lZ = '∥',
  cZ = '⊓',
  uZ = '⊓︀',
  fZ = '⊔',
  hZ = '⊔︀',
  dZ = '√',
  pZ = '⊏',
  gZ = '⊑',
  vZ = '⊏',
  mZ = '⊑',
  yZ = '⊐',
  bZ = '⊒',
  wZ = '⊐',
  xZ = '⊒',
  _Z = '□',
  SZ = '□',
  kZ = '⊓',
  CZ = '⊏',
  TZ = '⊑',
  EZ = '⊐',
  LZ = '⊒',
  AZ = '⊔',
  MZ = '▪',
  NZ = '□',
  PZ = '▪',
  OZ = '→',
  $Z = '𝒮',
  DZ = '𝓈',
  RZ = '∖',
  zZ = '⌣',
  FZ = '⋆',
  IZ = '⋆',
  qZ = '☆',
  HZ = '★',
  BZ = 'ϵ',
  WZ = 'ϕ',
  UZ = '¯',
  jZ = '⊂',
  GZ = '⋐',
  VZ = '⪽',
  KZ = '⫅',
  XZ = '⊆',
  YZ = '⫃',
  ZZ = '⫁',
  JZ = '⫋',
  QZ = '⊊',
  tJ = '⪿',
  eJ = '⥹',
  nJ = '⊂',
  rJ = '⋐',
  iJ = '⊆',
  oJ = '⫅',
  sJ = '⊆',
  aJ = '⊊',
  lJ = '⫋',
  cJ = '⫇',
  uJ = '⫕',
  fJ = '⫓',
  hJ = '⪸',
  dJ = '≻',
  pJ = '≽',
  gJ = '≻',
  vJ = '⪰',
  mJ = '≽',
  yJ = '≿',
  bJ = '⪰',
  wJ = '⪺',
  xJ = '⪶',
  _J = '⋩',
  SJ = '≿',
  kJ = '∋',
  CJ = '∑',
  TJ = '∑',
  EJ = '♪',
  LJ = '¹',
  AJ = '²',
  MJ = '³',
  NJ = '⊃',
  PJ = '⋑',
  OJ = '⪾',
  $J = '⫘',
  DJ = '⫆',
  RJ = '⊇',
  zJ = '⫄',
  FJ = '⊃',
  IJ = '⊇',
  qJ = '⟉',
  HJ = '⫗',
  BJ = '⥻',
  WJ = '⫂',
  UJ = '⫌',
  jJ = '⊋',
  GJ = '⫀',
  VJ = '⊃',
  KJ = '⋑',
  XJ = '⊇',
  YJ = '⫆',
  ZJ = '⊋',
  JJ = '⫌',
  QJ = '⫈',
  tQ = '⫔',
  eQ = '⫖',
  nQ = '⤦',
  rQ = '↙',
  iQ = '⇙',
  oQ = '↙',
  sQ = '⤪',
  aQ = 'ß',
  lQ = '	',
  cQ = '⌖',
  uQ = 'Τ',
  fQ = 'τ',
  hQ = '⎴',
  dQ = 'Ť',
  pQ = 'ť',
  gQ = 'Ţ',
  vQ = 'ţ',
  mQ = 'Т',
  yQ = 'т',
  bQ = '⃛',
  wQ = '⌕',
  xQ = '𝔗',
  _Q = '𝔱',
  SQ = '∴',
  kQ = '∴',
  CQ = '∴',
  TQ = 'Θ',
  EQ = 'θ',
  LQ = 'ϑ',
  AQ = 'ϑ',
  MQ = '≈',
  NQ = '∼',
  PQ = '  ',
  OQ = ' ',
  $Q = ' ',
  DQ = '≈',
  RQ = '∼',
  zQ = 'Þ',
  FQ = 'þ',
  IQ = '˜',
  qQ = '∼',
  HQ = '≃',
  BQ = '≅',
  WQ = '≈',
  UQ = '⨱',
  jQ = '⊠',
  GQ = '×',
  VQ = '⨰',
  KQ = '∭',
  XQ = '⤨',
  YQ = '⌶',
  ZQ = '⫱',
  JQ = '⊤',
  QQ = '𝕋',
  ttt = '𝕥',
  ett = '⫚',
  ntt = '⤩',
  rtt = '‴',
  itt = '™',
  ott = '™',
  stt = '▵',
  att = '▿',
  ltt = '◃',
  ctt = '⊴',
  utt = '≜',
  ftt = '▹',
  htt = '⊵',
  dtt = '◬',
  ptt = '≜',
  gtt = '⨺',
  vtt = '⃛',
  mtt = '⨹',
  ytt = '⧍',
  btt = '⨻',
  wtt = '⏢',
  xtt = '𝒯',
  _tt = '𝓉',
  Stt = 'Ц',
  ktt = 'ц',
  Ctt = 'Ћ',
  Ttt = 'ћ',
  Ett = 'Ŧ',
  Ltt = 'ŧ',
  Att = '≬',
  Mtt = '↞',
  Ntt = '↠',
  Ptt = 'Ú',
  Ott = 'ú',
  $tt = '↑',
  Dtt = '↟',
  Rtt = '⇑',
  ztt = '⥉',
  Ftt = 'Ў',
  Itt = 'ў',
  qtt = 'Ŭ',
  Htt = 'ŭ',
  Btt = 'Û',
  Wtt = 'û',
  Utt = 'У',
  jtt = 'у',
  Gtt = '⇅',
  Vtt = 'Ű',
  Ktt = 'ű',
  Xtt = '⥮',
  Ytt = '⥾',
  Ztt = '𝔘',
  Jtt = '𝔲',
  Qtt = 'Ù',
  tet = 'ù',
  eet = '⥣',
  net = '↿',
  ret = '↾',
  iet = '▀',
  oet = '⌜',
  set = '⌜',
  aet = '⌏',
  cet = '◸',
  uet = 'Ū',
  fet = 'ū',
  het = '¨',
  det = '_',
  pet = '⏟',
  get = '⎵',
  vet = '⏝',
  met = '⋃',
  yet = '⊎',
  bet = 'Ų',
  wet = 'ų',
  xet = '𝕌',
  _et = '𝕦',
  ket = '⤒',
  Cet = '↑',
  Tet = '↑',
  Eet = '⇑',
  Let = '⇅',
  Aet = '↕',
  Met = '↕',
  Net = '⇕',
  Pet = '⥮',
  Oet = '↿',
  $et = '↾',
  Det = '⊎',
  Ret = '↖',
  zet = '↗',
  Fet = 'υ',
  Iet = 'ϒ',
  qet = 'ϒ',
  Het = 'Υ',
  Bet = 'υ',
  Wet = '↥',
  Uet = '⊥',
  jet = '⇈',
  Get = '⌝',
  Vet = '⌝',
  Ket = '⌎',
  Xet = 'Ů',
  Yet = 'ů',
  Zet = '◹',
  Jet = '𝒰',
  Qet = '𝓊',
  tnt = '⋰',
  ent = 'Ũ',
  nnt = 'ũ',
  rnt = '▵',
  int = '▴',
  ont = '⇈',
  snt = 'Ü',
  ant = 'ü',
  lnt = '⦧',
  cnt = '⦜',
  unt = 'ϵ',
  fnt = 'ϰ',
  hnt = '∅',
  dnt = 'ϕ',
  pnt = 'ϖ',
  gnt = '∝',
  vnt = '↕',
  mnt = '⇕',
  ynt = 'ϱ',
  bnt = 'ς',
  wnt = '⊊︀',
  xnt = '⫋︀',
  _nt = '⊋︀',
  Snt = '⫌︀',
  knt = 'ϑ',
  Cnt = '⊲',
  Tnt = '⊳',
  Ent = '⫨',
  Lnt = '⫫',
  Ant = '⫩',
  Mnt = 'В',
  Nnt = 'в',
  Pnt = '⊢',
  Ont = '⊨',
  $nt = '⊩',
  Dnt = '⊫',
  Rnt = '⫦',
  znt = '⊻',
  Fnt = '∨',
  Int = '⋁',
  qnt = '≚',
  Hnt = '⋮',
  Bnt = '|',
  Wnt = '‖',
  Unt = '|',
  jnt = '‖',
  Gnt = '∣',
  Vnt = '|',
  Knt = '❘',
  Xnt = '≀',
  Ynt = ' ',
  Znt = '𝔙',
  Jnt = '𝔳',
  Qnt = '⊲',
  trt = '⊂⃒',
  ert = '⊃⃒',
  nrt = '𝕍',
  rrt = '𝕧',
  irt = '∝',
  ort = '⊳',
  srt = '𝒱',
  art = '𝓋',
  lrt = '⫋︀',
  crt = '⊊︀',
  urt = '⫌︀',
  frt = '⊋︀',
  hrt = '⊪',
  drt = '⦚',
  prt = 'Ŵ',
  grt = 'ŵ',
  vrt = '⩟',
  mrt = '∧',
  yrt = '⋀',
  brt = '≙',
  wrt = '℘',
  xrt = '𝔚',
  _rt = '𝔴',
  Srt = '𝕎',
  krt = '𝕨',
  Crt = '℘',
  Trt = '≀',
  Ert = '≀',
  Lrt = '𝒲',
  Art = '𝓌',
  Mrt = '⋂',
  Nrt = '◯',
  Prt = '⋃',
  Ort = '▽',
  $rt = '𝔛',
  Drt = '𝔵',
  Rrt = '⟷',
  zrt = '⟺',
  Frt = 'Ξ',
  Irt = 'ξ',
  qrt = '⟵',
  Hrt = '⟸',
  Brt = '⟼',
  Wrt = '⋻',
  Urt = '⨀',
  jrt = '𝕏',
  Grt = '𝕩',
  Vrt = '⨁',
  Krt = '⨂',
  Xrt = '⟶',
  Yrt = '⟹',
  Zrt = '𝒳',
  Jrt = '𝓍',
  Qrt = '⨆',
  tit = '⨄',
  eit = '△',
  nit = '⋁',
  rit = '⋀',
  iit = 'Ý',
  oit = 'ý',
  sit = 'Я',
  ait = 'я',
  lit = 'Ŷ',
  cit = 'ŷ',
  uit = 'Ы',
  fit = 'ы',
  hit = '¥',
  dit = '𝔜',
  pit = '𝔶',
  git = 'Ї',
  vit = 'ї',
  mit = '𝕐',
  yit = '𝕪',
  bit = '𝒴',
  wit = '𝓎',
  xit = 'Ю',
  _it = 'ю',
  Sit = 'ÿ',
  kit = 'Ÿ',
  Cit = 'Ź',
  Tit = 'ź',
  Eit = 'Ž',
  Lit = 'ž',
  Ait = 'З',
  Mit = 'з',
  Nit = 'Ż',
  Pit = 'ż',
  Oit = 'ℨ',
  $it = '​',
  Dit = 'Ζ',
  Rit = 'ζ',
  zit = '𝔷',
  Fit = 'ℨ',
  Iit = 'Ж',
  qit = 'ж',
  Hit = '⇝',
  Bit = '𝕫',
  Wit = 'ℤ',
  Uit = '𝒵',
  jit = '𝓏',
  Git = '‍',
  Vit = '‌',
  by = {
    Aacute: AE,
    aacute: ME,
    Abreve: NE,
    abreve: PE,
    ac: OE,
    acd: $E,
    acE: DE,
    Acirc: RE,
    acirc: zE,
    acute: FE,
    Acy: IE,
    acy: qE,
    AElig: HE,
    aelig: BE,
    af: WE,
    Afr: UE,
    afr: jE,
    Agrave: GE,
    agrave: VE,
    alefsym: KE,
    aleph: XE,
    Alpha: YE,
    alpha: ZE,
    Amacr: JE,
    amacr: QE,
    amalg: tL,
    amp: eL,
    AMP: nL,
    andand: rL,
    And: iL,
    and: oL,
    andd: sL,
    andslope: aL,
    andv: lL,
    ang: cL,
    ange: uL,
    angle: fL,
    angmsdaa: hL,
    angmsdab: dL,
    angmsdac: pL,
    angmsdad: gL,
    angmsdae: vL,
    angmsdaf: mL,
    angmsdag: yL,
    angmsdah: bL,
    angmsd: wL,
    angrt: xL,
    angrtvb: _L,
    angrtvbd: SL,
    angsph: kL,
    angst: CL,
    angzarr: TL,
    Aogon: EL,
    aogon: LL,
    Aopf: AL,
    aopf: ML,
    apacir: NL,
    ap: PL,
    apE: OL,
    ape: $L,
    apid: DL,
    apos: RL,
    ApplyFunction: zL,
    approx: FL,
    approxeq: IL,
    Aring: qL,
    aring: HL,
    Ascr: BL,
    ascr: WL,
    Assign: UL,
    ast: jL,
    asymp: GL,
    asympeq: VL,
    Atilde: KL,
    atilde: XL,
    Auml: YL,
    auml: ZL,
    awconint: JL,
    awint: QL,
    backcong: tA,
    backepsilon: eA,
    backprime: nA,
    backsim: rA,
    backsimeq: iA,
    Backslash: oA,
    Barv: sA,
    barvee: aA,
    barwed: lA,
    Barwed: cA,
    barwedge: uA,
    bbrk: fA,
    bbrktbrk: hA,
    bcong: dA,
    Bcy: pA,
    bcy: gA,
    bdquo: vA,
    becaus: mA,
    because: yA,
    Because: bA,
    bemptyv: wA,
    bepsi: xA,
    bernou: _A,
    Bernoullis: SA,
    Beta: kA,
    beta: CA,
    beth: TA,
    between: EA,
    Bfr: LA,
    bfr: AA,
    bigcap: MA,
    bigcirc: NA,
    bigcup: PA,
    bigodot: OA,
    bigoplus: $A,
    bigotimes: DA,
    bigsqcup: RA,
    bigstar: zA,
    bigtriangledown: FA,
    bigtriangleup: IA,
    biguplus: qA,
    bigvee: HA,
    bigwedge: BA,
    bkarow: WA,
    blacklozenge: UA,
    blacksquare: jA,
    blacktriangle: GA,
    blacktriangledown: VA,
    blacktriangleleft: KA,
    blacktriangleright: XA,
    blank: YA,
    blk12: ZA,
    blk14: JA,
    blk34: QA,
    block: tM,
    bne: eM,
    bnequiv: nM,
    bNot: rM,
    bnot: iM,
    Bopf: oM,
    bopf: sM,
    bot: aM,
    bottom: lM,
    bowtie: cM,
    boxbox: uM,
    boxdl: fM,
    boxdL: hM,
    boxDl: dM,
    boxDL: pM,
    boxdr: gM,
    boxdR: vM,
    boxDr: mM,
    boxDR: yM,
    boxh: bM,
    boxH: wM,
    boxhd: xM,
    boxHd: _M,
    boxhD: SM,
    boxHD: kM,
    boxhu: CM,
    boxHu: TM,
    boxhU: EM,
    boxHU: LM,
    boxminus: AM,
    boxplus: MM,
    boxtimes: NM,
    boxul: PM,
    boxuL: OM,
    boxUl: $M,
    boxUL: DM,
    boxur: RM,
    boxuR: zM,
    boxUr: FM,
    boxUR: IM,
    boxv: qM,
    boxV: HM,
    boxvh: BM,
    boxvH: WM,
    boxVh: UM,
    boxVH: jM,
    boxvl: GM,
    boxvL: VM,
    boxVl: KM,
    boxVL: XM,
    boxvr: YM,
    boxvR: ZM,
    boxVr: JM,
    boxVR: QM,
    bprime: tN,
    breve: eN,
    Breve: nN,
    brvbar: rN,
    bscr: iN,
    Bscr: oN,
    bsemi: sN,
    bsim: aN,
    bsime: lN,
    bsolb: cN,
    bsol: uN,
    bsolhsub: fN,
    bull: hN,
    bullet: dN,
    bump: pN,
    bumpE: gN,
    bumpe: vN,
    Bumpeq: mN,
    bumpeq: yN,
    Cacute: bN,
    cacute: wN,
    capand: xN,
    capbrcup: _N,
    capcap: SN,
    cap: kN,
    Cap: CN,
    capcup: TN,
    capdot: EN,
    CapitalDifferentialD: LN,
    caps: AN,
    caret: MN,
    caron: NN,
    Cayleys: PN,
    ccaps: ON,
    Ccaron: $N,
    ccaron: DN,
    Ccedil: RN,
    ccedil: zN,
    Ccirc: FN,
    ccirc: IN,
    Cconint: qN,
    ccups: HN,
    ccupssm: BN,
    Cdot: WN,
    cdot: UN,
    cedil: jN,
    Cedilla: GN,
    cemptyv: VN,
    cent: KN,
    centerdot: XN,
    CenterDot: YN,
    cfr: ZN,
    Cfr: JN,
    CHcy: QN,
    chcy: tP,
    check: eP,
    checkmark: nP,
    Chi: rP,
    chi: iP,
    circ: oP,
    circeq: sP,
    circlearrowleft: aP,
    circlearrowright: lP,
    circledast: cP,
    circledcirc: uP,
    circleddash: fP,
    CircleDot: hP,
    circledR: dP,
    circledS: pP,
    CircleMinus: gP,
    CirclePlus: vP,
    CircleTimes: mP,
    cir: yP,
    cirE: bP,
    cire: wP,
    cirfnint: xP,
    cirmid: _P,
    cirscir: SP,
    ClockwiseContourIntegral: kP,
    CloseCurlyDoubleQuote: CP,
    CloseCurlyQuote: TP,
    clubs: EP,
    clubsuit: LP,
    colon: AP,
    Colon: MP,
    Colone: NP,
    colone: PP,
    coloneq: OP,
    comma: $P,
    commat: DP,
    comp: RP,
    compfn: zP,
    complement: FP,
    complexes: IP,
    cong: qP,
    congdot: HP,
    Congruent: BP,
    conint: WP,
    Conint: UP,
    ContourIntegral: jP,
    copf: GP,
    Copf: VP,
    coprod: KP,
    Coproduct: XP,
    copy: YP,
    COPY: ZP,
    copysr: JP,
    CounterClockwiseContourIntegral: QP,
    crarr: tO,
    cross: eO,
    Cross: nO,
    Cscr: rO,
    cscr: iO,
    csub: oO,
    csube: sO,
    csup: aO,
    csupe: lO,
    ctdot: cO,
    cudarrl: uO,
    cudarrr: fO,
    cuepr: hO,
    cuesc: dO,
    cularr: pO,
    cularrp: gO,
    cupbrcap: vO,
    cupcap: mO,
    CupCap: yO,
    cup: bO,
    Cup: wO,
    cupcup: xO,
    cupdot: _O,
    cupor: SO,
    cups: kO,
    curarr: CO,
    curarrm: TO,
    curlyeqprec: EO,
    curlyeqsucc: LO,
    curlyvee: AO,
    curlywedge: MO,
    curren: NO,
    curvearrowleft: PO,
    curvearrowright: OO,
    cuvee: $O,
    cuwed: DO,
    cwconint: RO,
    cwint: zO,
    cylcty: FO,
    dagger: IO,
    Dagger: qO,
    daleth: HO,
    darr: BO,
    Darr: WO,
    dArr: UO,
    dash: jO,
    Dashv: GO,
    dashv: VO,
    dbkarow: KO,
    dblac: XO,
    Dcaron: YO,
    dcaron: ZO,
    Dcy: JO,
    dcy: QO,
    ddagger: t$,
    ddarr: e$,
    DD: n$,
    dd: r$,
    DDotrahd: i$,
    ddotseq: o$,
    deg: s$,
    Del: a$,
    Delta: l$,
    delta: c$,
    demptyv: u$,
    dfisht: f$,
    Dfr: h$,
    dfr: d$,
    dHar: p$,
    dharl: g$,
    dharr: v$,
    DiacriticalAcute: m$,
    DiacriticalDot: y$,
    DiacriticalDoubleAcute: b$,
    DiacriticalGrave: w$,
    DiacriticalTilde: x$,
    diam: _$,
    diamond: S$,
    Diamond: k$,
    diamondsuit: C$,
    diams: T$,
    die: E$,
    DifferentialD: L$,
    digamma: A$,
    disin: M$,
    div: N$,
    divide: P$,
    divideontimes: O$,
    divonx: $$,
    DJcy: D$,
    djcy: R$,
    dlcorn: z$,
    dlcrop: F$,
    dollar: I$,
    Dopf: q$,
    dopf: H$,
    Dot: B$,
    dot: W$,
    DotDot: U$,
    doteq: j$,
    doteqdot: G$,
    DotEqual: V$,
    dotminus: K$,
    dotplus: X$,
    dotsquare: Y$,
    doublebarwedge: Z$,
    DoubleContourIntegral: J$,
    DoubleDot: Q$,
    DoubleDownArrow: tD,
    DoubleLeftArrow: eD,
    DoubleLeftRightArrow: nD,
    DoubleLeftTee: rD,
    DoubleLongLeftArrow: iD,
    DoubleLongLeftRightArrow: oD,
    DoubleLongRightArrow: sD,
    DoubleRightArrow: aD,
    DoubleRightTee: lD,
    DoubleUpArrow: cD,
    DoubleUpDownArrow: uD,
    DoubleVerticalBar: fD,
    DownArrowBar: hD,
    downarrow: dD,
    DownArrow: pD,
    Downarrow: gD,
    DownArrowUpArrow: vD,
    DownBreve: mD,
    downdownarrows: yD,
    downharpoonleft: bD,
    downharpoonright: wD,
    DownLeftRightVector: xD,
    DownLeftTeeVector: _D,
    DownLeftVectorBar: SD,
    DownLeftVector: kD,
    DownRightTeeVector: CD,
    DownRightVectorBar: TD,
    DownRightVector: ED,
    DownTeeArrow: LD,
    DownTee: AD,
    drbkarow: MD,
    drcorn: ND,
    drcrop: PD,
    Dscr: OD,
    dscr: $D,
    DScy: DD,
    dscy: RD,
    dsol: zD,
    Dstrok: FD,
    dstrok: ID,
    dtdot: qD,
    dtri: HD,
    dtrif: BD,
    duarr: WD,
    duhar: UD,
    dwangle: jD,
    DZcy: GD,
    dzcy: VD,
    dzigrarr: KD,
    Eacute: XD,
    eacute: YD,
    easter: ZD,
    Ecaron: JD,
    ecaron: QD,
    Ecirc: t2,
    ecirc: e2,
    ecir: n2,
    ecolon: r2,
    Ecy: i2,
    ecy: o2,
    eDDot: s2,
    Edot: a2,
    edot: l2,
    eDot: c2,
    ee: u2,
    efDot: f2,
    Efr: h2,
    efr: d2,
    eg: p2,
    Egrave: g2,
    egrave: v2,
    egs: m2,
    egsdot: y2,
    el: b2,
    Element: w2,
    elinters: x2,
    ell: _2,
    els: S2,
    elsdot: k2,
    Emacr: C2,
    emacr: T2,
    empty: E2,
    emptyset: L2,
    EmptySmallSquare: A2,
    emptyv: M2,
    EmptyVerySmallSquare: N2,
    emsp13: P2,
    emsp14: O2,
    emsp: $2,
    ENG: D2,
    eng: R2,
    ensp: z2,
    Eogon: F2,
    eogon: I2,
    Eopf: q2,
    eopf: H2,
    epar: B2,
    eparsl: W2,
    eplus: U2,
    epsi: j2,
    Epsilon: G2,
    epsilon: V2,
    epsiv: K2,
    eqcirc: X2,
    eqcolon: Y2,
    eqsim: Z2,
    eqslantgtr: J2,
    eqslantless: Q2,
    Equal: tR,
    equals: eR,
    EqualTilde: nR,
    equest: rR,
    Equilibrium: iR,
    equiv: oR,
    equivDD: sR,
    eqvparsl: aR,
    erarr: lR,
    erDot: cR,
    escr: uR,
    Escr: fR,
    esdot: hR,
    Esim: dR,
    esim: pR,
    Eta: gR,
    eta: vR,
    ETH: mR,
    eth: yR,
    Euml: bR,
    euml: wR,
    euro: xR,
    excl: _R,
    exist: SR,
    Exists: kR,
    expectation: CR,
    exponentiale: TR,
    ExponentialE: ER,
    fallingdotseq: LR,
    Fcy: AR,
    fcy: MR,
    female: NR,
    ffilig: PR,
    fflig: OR,
    ffllig: $R,
    Ffr: DR,
    ffr: RR,
    filig: zR,
    FilledSmallSquare: FR,
    FilledVerySmallSquare: IR,
    fjlig: qR,
    flat: HR,
    fllig: BR,
    fltns: WR,
    fnof: UR,
    Fopf: jR,
    fopf: GR,
    forall: VR,
    ForAll: KR,
    fork: XR,
    forkv: YR,
    Fouriertrf: ZR,
    fpartint: JR,
    frac12: QR,
    frac13: tz,
    frac14: ez,
    frac15: nz,
    frac16: rz,
    frac18: iz,
    frac23: oz,
    frac25: sz,
    frac34: az,
    frac35: lz,
    frac38: cz,
    frac45: uz,
    frac56: fz,
    frac58: hz,
    frac78: dz,
    frasl: pz,
    frown: gz,
    fscr: vz,
    Fscr: mz,
    gacute: yz,
    Gamma: bz,
    gamma: wz,
    Gammad: xz,
    gammad: _z,
    gap: Sz,
    Gbreve: kz,
    gbreve: Cz,
    Gcedil: Tz,
    Gcirc: Ez,
    gcirc: Lz,
    Gcy: Az,
    gcy: Mz,
    Gdot: Nz,
    gdot: Pz,
    ge: Oz,
    gE: $z,
    gEl: Dz,
    gel: Rz,
    geq: zz,
    geqq: Fz,
    geqslant: Iz,
    gescc: qz,
    ges: Hz,
    gesdot: Bz,
    gesdoto: Wz,
    gesdotol: Uz,
    gesl: jz,
    gesles: Gz,
    Gfr: Vz,
    gfr: Kz,
    gg: Xz,
    Gg: Yz,
    ggg: Zz,
    gimel: Jz,
    GJcy: Qz,
    gjcy: tF,
    gla: eF,
    gl: nF,
    glE: rF,
    glj: iF,
    gnap: oF,
    gnapprox: sF,
    gne: aF,
    gnE: lF,
    gneq: cF,
    gneqq: uF,
    gnsim: fF,
    Gopf: hF,
    gopf: dF,
    grave: pF,
    GreaterEqual: gF,
    GreaterEqualLess: vF,
    GreaterFullEqual: mF,
    GreaterGreater: yF,
    GreaterLess: bF,
    GreaterSlantEqual: wF,
    GreaterTilde: xF,
    Gscr: _F,
    gscr: SF,
    gsim: kF,
    gsime: CF,
    gsiml: TF,
    gtcc: EF,
    gtcir: LF,
    gt: AF,
    GT: MF,
    Gt: NF,
    gtdot: PF,
    gtlPar: OF,
    gtquest: $F,
    gtrapprox: DF,
    gtrarr: RF,
    gtrdot: zF,
    gtreqless: FF,
    gtreqqless: IF,
    gtrless: qF,
    gtrsim: HF,
    gvertneqq: BF,
    gvnE: WF,
    Hacek: UF,
    hairsp: jF,
    half: GF,
    hamilt: VF,
    HARDcy: KF,
    hardcy: XF,
    harrcir: YF,
    harr: ZF,
    hArr: JF,
    harrw: QF,
    Hat: tI,
    hbar: eI,
    Hcirc: nI,
    hcirc: rI,
    hearts: iI,
    heartsuit: oI,
    hellip: sI,
    hercon: aI,
    hfr: lI,
    Hfr: cI,
    HilbertSpace: uI,
    hksearow: fI,
    hkswarow: hI,
    hoarr: dI,
    homtht: pI,
    hookleftarrow: gI,
    hookrightarrow: vI,
    hopf: mI,
    Hopf: yI,
    horbar: bI,
    HorizontalLine: wI,
    hscr: xI,
    Hscr: _I,
    hslash: SI,
    Hstrok: kI,
    hstrok: CI,
    HumpDownHump: TI,
    HumpEqual: EI,
    hybull: LI,
    hyphen: AI,
    Iacute: MI,
    iacute: NI,
    ic: PI,
    Icirc: OI,
    icirc: $I,
    Icy: DI,
    icy: RI,
    Idot: zI,
    IEcy: FI,
    iecy: II,
    iexcl: qI,
    iff: HI,
    ifr: BI,
    Ifr: WI,
    Igrave: UI,
    igrave: jI,
    ii: GI,
    iiiint: VI,
    iiint: KI,
    iinfin: XI,
    iiota: YI,
    IJlig: ZI,
    ijlig: JI,
    Imacr: QI,
    imacr: tq,
    image: eq,
    ImaginaryI: nq,
    imagline: rq,
    imagpart: iq,
    imath: oq,
    Im: sq,
    imof: aq,
    imped: lq,
    Implies: cq,
    incare: uq,
    in: '∈',
    infin: fq,
    infintie: hq,
    inodot: dq,
    intcal: pq,
    int: gq,
    Int: vq,
    integers: mq,
    Integral: yq,
    intercal: bq,
    Intersection: wq,
    intlarhk: xq,
    intprod: _q,
    InvisibleComma: Sq,
    InvisibleTimes: kq,
    IOcy: Cq,
    iocy: Tq,
    Iogon: Eq,
    iogon: Lq,
    Iopf: Aq,
    iopf: Mq,
    Iota: Nq,
    iota: Pq,
    iprod: Oq,
    iquest: $q,
    iscr: Dq,
    Iscr: Rq,
    isin: zq,
    isindot: Fq,
    isinE: Iq,
    isins: qq,
    isinsv: Hq,
    isinv: Bq,
    it: Wq,
    Itilde: Uq,
    itilde: jq,
    Iukcy: Gq,
    iukcy: Vq,
    Iuml: Kq,
    iuml: Xq,
    Jcirc: Yq,
    jcirc: Zq,
    Jcy: Jq,
    jcy: Qq,
    Jfr: tH,
    jfr: eH,
    jmath: nH,
    Jopf: rH,
    jopf: iH,
    Jscr: oH,
    jscr: sH,
    Jsercy: aH,
    jsercy: lH,
    Jukcy: cH,
    jukcy: uH,
    Kappa: fH,
    kappa: hH,
    kappav: dH,
    Kcedil: pH,
    kcedil: gH,
    Kcy: vH,
    kcy: mH,
    Kfr: yH,
    kfr: bH,
    kgreen: wH,
    KHcy: xH,
    khcy: _H,
    KJcy: SH,
    kjcy: kH,
    Kopf: CH,
    kopf: TH,
    Kscr: EH,
    kscr: LH,
    lAarr: AH,
    Lacute: MH,
    lacute: NH,
    laemptyv: PH,
    lagran: OH,
    Lambda: $H,
    lambda: DH,
    lang: RH,
    Lang: zH,
    langd: FH,
    langle: IH,
    lap: qH,
    Laplacetrf: HH,
    laquo: BH,
    larrb: WH,
    larrbfs: UH,
    larr: jH,
    Larr: GH,
    lArr: VH,
    larrfs: KH,
    larrhk: XH,
    larrlp: YH,
    larrpl: ZH,
    larrsim: JH,
    larrtl: QH,
    latail: tB,
    lAtail: eB,
    lat: nB,
    late: rB,
    lates: iB,
    lbarr: oB,
    lBarr: sB,
    lbbrk: aB,
    lbrace: lB,
    lbrack: cB,
    lbrke: uB,
    lbrksld: fB,
    lbrkslu: hB,
    Lcaron: dB,
    lcaron: pB,
    Lcedil: gB,
    lcedil: vB,
    lceil: mB,
    lcub: yB,
    Lcy: bB,
    lcy: wB,
    ldca: xB,
    ldquo: _B,
    ldquor: SB,
    ldrdhar: kB,
    ldrushar: CB,
    ldsh: TB,
    le: EB,
    lE: LB,
    LeftAngleBracket: AB,
    LeftArrowBar: MB,
    leftarrow: NB,
    LeftArrow: PB,
    Leftarrow: OB,
    LeftArrowRightArrow: $B,
    leftarrowtail: DB,
    LeftCeiling: RB,
    LeftDoubleBracket: zB,
    LeftDownTeeVector: FB,
    LeftDownVectorBar: IB,
    LeftDownVector: qB,
    LeftFloor: HB,
    leftharpoondown: BB,
    leftharpoonup: WB,
    leftleftarrows: UB,
    leftrightarrow: jB,
    LeftRightArrow: GB,
    Leftrightarrow: VB,
    leftrightarrows: KB,
    leftrightharpoons: XB,
    leftrightsquigarrow: YB,
    LeftRightVector: ZB,
    LeftTeeArrow: JB,
    LeftTee: QB,
    LeftTeeVector: t3,
    leftthreetimes: e3,
    LeftTriangleBar: n3,
    LeftTriangle: r3,
    LeftTriangleEqual: i3,
    LeftUpDownVector: o3,
    LeftUpTeeVector: s3,
    LeftUpVectorBar: a3,
    LeftUpVector: l3,
    LeftVectorBar: c3,
    LeftVector: u3,
    lEg: f3,
    leg: h3,
    leq: d3,
    leqq: p3,
    leqslant: g3,
    lescc: v3,
    les: m3,
    lesdot: y3,
    lesdoto: b3,
    lesdotor: w3,
    lesg: x3,
    lesges: _3,
    lessapprox: S3,
    lessdot: k3,
    lesseqgtr: C3,
    lesseqqgtr: T3,
    LessEqualGreater: E3,
    LessFullEqual: L3,
    LessGreater: A3,
    lessgtr: M3,
    LessLess: N3,
    lesssim: P3,
    LessSlantEqual: O3,
    LessTilde: $3,
    lfisht: D3,
    lfloor: R3,
    Lfr: z3,
    lfr: F3,
    lg: I3,
    lgE: q3,
    lHar: H3,
    lhard: B3,
    lharu: W3,
    lharul: U3,
    lhblk: j3,
    LJcy: G3,
    ljcy: V3,
    llarr: K3,
    ll: X3,
    Ll: Y3,
    llcorner: Z3,
    Lleftarrow: J3,
    llhard: Q3,
    lltri: t5,
    Lmidot: e5,
    lmidot: n5,
    lmoustache: r5,
    lmoust: i5,
    lnap: o5,
    lnapprox: s5,
    lne: a5,
    lnE: l5,
    lneq: c5,
    lneqq: u5,
    lnsim: f5,
    loang: h5,
    loarr: d5,
    lobrk: p5,
    longleftarrow: g5,
    LongLeftArrow: v5,
    Longleftarrow: m5,
    longleftrightarrow: y5,
    LongLeftRightArrow: b5,
    Longleftrightarrow: w5,
    longmapsto: x5,
    longrightarrow: _5,
    LongRightArrow: S5,
    Longrightarrow: k5,
    looparrowleft: C5,
    looparrowright: T5,
    lopar: E5,
    Lopf: L5,
    lopf: A5,
    loplus: M5,
    lotimes: N5,
    lowast: P5,
    lowbar: O5,
    LowerLeftArrow: $5,
    LowerRightArrow: D5,
    loz: R5,
    lozenge: z5,
    lozf: F5,
    lpar: I5,
    lparlt: q5,
    lrarr: H5,
    lrcorner: B5,
    lrhar: W5,
    lrhard: U5,
    lrm: j5,
    lrtri: G5,
    lsaquo: V5,
    lscr: K5,
    Lscr: X5,
    lsh: Y5,
    Lsh: Z5,
    lsim: J5,
    lsime: Q5,
    lsimg: t8,
    lsqb: e8,
    lsquo: n8,
    lsquor: r8,
    Lstrok: i8,
    lstrok: o8,
    ltcc: s8,
    ltcir: a8,
    lt: l8,
    LT: c8,
    Lt: u8,
    ltdot: f8,
    lthree: h8,
    ltimes: d8,
    ltlarr: p8,
    ltquest: g8,
    ltri: v8,
    ltrie: m8,
    ltrif: y8,
    ltrPar: b8,
    lurdshar: w8,
    luruhar: x8,
    lvertneqq: _8,
    lvnE: S8,
    macr: k8,
    male: C8,
    malt: T8,
    maltese: E8,
    Map: '⤅',
    map: L8,
    mapsto: A8,
    mapstodown: M8,
    mapstoleft: N8,
    mapstoup: P8,
    marker: O8,
    mcomma: $8,
    Mcy: D8,
    mcy: R8,
    mdash: z8,
    mDDot: F8,
    measuredangle: I8,
    MediumSpace: q8,
    Mellintrf: H8,
    Mfr: B8,
    mfr: W8,
    mho: U8,
    micro: j8,
    midast: G8,
    midcir: V8,
    mid: K8,
    middot: X8,
    minusb: Y8,
    minus: Z8,
    minusd: J8,
    minusdu: Q8,
    MinusPlus: tW,
    mlcp: eW,
    mldr: nW,
    mnplus: rW,
    models: iW,
    Mopf: oW,
    mopf: sW,
    mp: aW,
    mscr: lW,
    Mscr: cW,
    mstpos: uW,
    Mu: fW,
    mu: hW,
    multimap: dW,
    mumap: pW,
    nabla: gW,
    Nacute: vW,
    nacute: mW,
    nang: yW,
    nap: bW,
    napE: wW,
    napid: xW,
    napos: _W,
    napprox: SW,
    natural: kW,
    naturals: CW,
    natur: TW,
    nbsp: EW,
    nbump: LW,
    nbumpe: AW,
    ncap: MW,
    Ncaron: NW,
    ncaron: PW,
    Ncedil: OW,
    ncedil: $W,
    ncong: DW,
    ncongdot: RW,
    ncup: zW,
    Ncy: FW,
    ncy: IW,
    ndash: qW,
    nearhk: HW,
    nearr: BW,
    neArr: WW,
    nearrow: UW,
    ne: jW,
    nedot: GW,
    NegativeMediumSpace: VW,
    NegativeThickSpace: KW,
    NegativeThinSpace: XW,
    NegativeVeryThinSpace: YW,
    nequiv: ZW,
    nesear: JW,
    nesim: QW,
    NestedGreaterGreater: tU,
    NestedLessLess: eU,
    NewLine: nU,
    nexist: rU,
    nexists: iU,
    Nfr: oU,
    nfr: sU,
    ngE: aU,
    nge: lU,
    ngeq: cU,
    ngeqq: uU,
    ngeqslant: fU,
    nges: hU,
    nGg: dU,
    ngsim: pU,
    nGt: gU,
    ngt: vU,
    ngtr: mU,
    nGtv: yU,
    nharr: bU,
    nhArr: wU,
    nhpar: xU,
    ni: _U,
    nis: SU,
    nisd: kU,
    niv: CU,
    NJcy: TU,
    njcy: EU,
    nlarr: LU,
    nlArr: AU,
    nldr: MU,
    nlE: NU,
    nle: PU,
    nleftarrow: OU,
    nLeftarrow: $U,
    nleftrightarrow: DU,
    nLeftrightarrow: RU,
    nleq: zU,
    nleqq: FU,
    nleqslant: IU,
    nles: qU,
    nless: HU,
    nLl: BU,
    nlsim: WU,
    nLt: UU,
    nlt: jU,
    nltri: GU,
    nltrie: VU,
    nLtv: KU,
    nmid: XU,
    NoBreak: YU,
    NonBreakingSpace: ZU,
    nopf: JU,
    Nopf: QU,
    Not: t4,
    not: e4,
    NotCongruent: n4,
    NotCupCap: r4,
    NotDoubleVerticalBar: i4,
    NotElement: o4,
    NotEqual: s4,
    NotEqualTilde: a4,
    NotExists: l4,
    NotGreater: c4,
    NotGreaterEqual: u4,
    NotGreaterFullEqual: f4,
    NotGreaterGreater: h4,
    NotGreaterLess: d4,
    NotGreaterSlantEqual: p4,
    NotGreaterTilde: g4,
    NotHumpDownHump: v4,
    NotHumpEqual: m4,
    notin: y4,
    notindot: b4,
    notinE: w4,
    notinva: x4,
    notinvb: _4,
    notinvc: S4,
    NotLeftTriangleBar: k4,
    NotLeftTriangle: C4,
    NotLeftTriangleEqual: T4,
    NotLess: E4,
    NotLessEqual: L4,
    NotLessGreater: A4,
    NotLessLess: M4,
    NotLessSlantEqual: N4,
    NotLessTilde: P4,
    NotNestedGreaterGreater: O4,
    NotNestedLessLess: $4,
    notni: D4,
    notniva: R4,
    notnivb: z4,
    notnivc: F4,
    NotPrecedes: I4,
    NotPrecedesEqual: q4,
    NotPrecedesSlantEqual: H4,
    NotReverseElement: B4,
    NotRightTriangleBar: W4,
    NotRightTriangle: U4,
    NotRightTriangleEqual: j4,
    NotSquareSubset: G4,
    NotSquareSubsetEqual: V4,
    NotSquareSuperset: K4,
    NotSquareSupersetEqual: X4,
    NotSubset: Y4,
    NotSubsetEqual: Z4,
    NotSucceeds: J4,
    NotSucceedsEqual: Q4,
    NotSucceedsSlantEqual: t6,
    NotSucceedsTilde: e6,
    NotSuperset: n6,
    NotSupersetEqual: r6,
    NotTilde: i6,
    NotTildeEqual: o6,
    NotTildeFullEqual: s6,
    NotTildeTilde: a6,
    NotVerticalBar: l6,
    nparallel: c6,
    npar: u6,
    nparsl: f6,
    npart: h6,
    npolint: d6,
    npr: p6,
    nprcue: g6,
    nprec: v6,
    npreceq: m6,
    npre: y6,
    nrarrc: b6,
    nrarr: w6,
    nrArr: x6,
    nrarrw: _6,
    nrightarrow: S6,
    nRightarrow: k6,
    nrtri: C6,
    nrtrie: T6,
    nsc: E6,
    nsccue: L6,
    nsce: A6,
    Nscr: M6,
    nscr: N6,
    nshortmid: P6,
    nshortparallel: O6,
    nsim: $6,
    nsime: D6,
    nsimeq: R6,
    nsmid: z6,
    nspar: F6,
    nsqsube: I6,
    nsqsupe: q6,
    nsub: H6,
    nsubE: B6,
    nsube: W6,
    nsubset: U6,
    nsubseteq: j6,
    nsubseteqq: G6,
    nsucc: V6,
    nsucceq: K6,
    nsup: X6,
    nsupE: Y6,
    nsupe: Z6,
    nsupset: J6,
    nsupseteq: Q6,
    nsupseteqq: tj,
    ntgl: ej,
    Ntilde: nj,
    ntilde: rj,
    ntlg: ij,
    ntriangleleft: oj,
    ntrianglelefteq: sj,
    ntriangleright: aj,
    ntrianglerighteq: lj,
    Nu: cj,
    nu: uj,
    num: fj,
    numero: hj,
    numsp: dj,
    nvap: pj,
    nvdash: gj,
    nvDash: vj,
    nVdash: mj,
    nVDash: yj,
    nvge: bj,
    nvgt: wj,
    nvHarr: xj,
    nvinfin: _j,
    nvlArr: Sj,
    nvle: kj,
    nvlt: Cj,
    nvltrie: Tj,
    nvrArr: Ej,
    nvrtrie: Lj,
    nvsim: Aj,
    nwarhk: Mj,
    nwarr: Nj,
    nwArr: Pj,
    nwarrow: Oj,
    nwnear: $j,
    Oacute: Dj,
    oacute: Rj,
    oast: zj,
    Ocirc: Fj,
    ocirc: Ij,
    ocir: qj,
    Ocy: Hj,
    ocy: Bj,
    odash: Wj,
    Odblac: Uj,
    odblac: jj,
    odiv: Gj,
    odot: Vj,
    odsold: Kj,
    OElig: Xj,
    oelig: Yj,
    ofcir: Zj,
    Ofr: Jj,
    ofr: Qj,
    ogon: t9,
    Ograve: e9,
    ograve: n9,
    ogt: r9,
    ohbar: i9,
    ohm: o9,
    oint: s9,
    olarr: a9,
    olcir: l9,
    olcross: c9,
    oline: u9,
    olt: f9,
    Omacr: h9,
    omacr: d9,
    Omega: p9,
    omega: g9,
    Omicron: v9,
    omicron: m9,
    omid: y9,
    ominus: b9,
    Oopf: w9,
    oopf: x9,
    opar: _9,
    OpenCurlyDoubleQuote: S9,
    OpenCurlyQuote: k9,
    operp: C9,
    oplus: T9,
    orarr: E9,
    Or: L9,
    or: A9,
    ord: M9,
    order: N9,
    orderof: P9,
    ordf: O9,
    ordm: $9,
    origof: D9,
    oror: R9,
    orslope: z9,
    orv: F9,
    oS: I9,
    Oscr: q9,
    oscr: H9,
    Oslash: B9,
    oslash: W9,
    osol: U9,
    Otilde: j9,
    otilde: G9,
    otimesas: V9,
    Otimes: K9,
    otimes: X9,
    Ouml: Y9,
    ouml: Z9,
    ovbar: J9,
    OverBar: Q9,
    OverBrace: tG,
    OverBracket: eG,
    OverParenthesis: nG,
    para: rG,
    parallel: iG,
    par: oG,
    parsim: sG,
    parsl: aG,
    part: lG,
    PartialD: cG,
    Pcy: uG,
    pcy: fG,
    percnt: hG,
    period: dG,
    permil: pG,
    perp: gG,
    pertenk: vG,
    Pfr: mG,
    pfr: yG,
    Phi: bG,
    phi: wG,
    phiv: xG,
    phmmat: _G,
    phone: SG,
    Pi: kG,
    pi: CG,
    pitchfork: TG,
    piv: EG,
    planck: LG,
    planckh: AG,
    plankv: MG,
    plusacir: NG,
    plusb: PG,
    pluscir: OG,
    plus: $G,
    plusdo: DG,
    plusdu: RG,
    pluse: zG,
    PlusMinus: FG,
    plusmn: IG,
    plussim: qG,
    plustwo: HG,
    pm: BG,
    Poincareplane: WG,
    pointint: UG,
    popf: jG,
    Popf: GG,
    pound: VG,
    prap: KG,
    Pr: XG,
    pr: YG,
    prcue: ZG,
    precapprox: JG,
    prec: QG,
    preccurlyeq: tV,
    Precedes: eV,
    PrecedesEqual: nV,
    PrecedesSlantEqual: rV,
    PrecedesTilde: iV,
    preceq: oV,
    precnapprox: sV,
    precneqq: aV,
    precnsim: lV,
    pre: cV,
    prE: uV,
    precsim: fV,
    prime: hV,
    Prime: dV,
    primes: pV,
    prnap: gV,
    prnE: vV,
    prnsim: mV,
    prod: yV,
    Product: bV,
    profalar: wV,
    profline: xV,
    profsurf: _V,
    prop: SV,
    Proportional: kV,
    Proportion: CV,
    propto: TV,
    prsim: EV,
    prurel: LV,
    Pscr: AV,
    pscr: MV,
    Psi: NV,
    psi: PV,
    puncsp: OV,
    Qfr: $V,
    qfr: DV,
    qint: RV,
    qopf: zV,
    Qopf: FV,
    qprime: IV,
    Qscr: qV,
    qscr: HV,
    quaternions: BV,
    quatint: WV,
    quest: UV,
    questeq: jV,
    quot: GV,
    QUOT: VV,
    rAarr: KV,
    race: XV,
    Racute: YV,
    racute: ZV,
    radic: JV,
    raemptyv: QV,
    rang: t7,
    Rang: e7,
    rangd: n7,
    range: r7,
    rangle: i7,
    raquo: o7,
    rarrap: s7,
    rarrb: a7,
    rarrbfs: l7,
    rarrc: c7,
    rarr: u7,
    Rarr: f7,
    rArr: h7,
    rarrfs: d7,
    rarrhk: p7,
    rarrlp: g7,
    rarrpl: v7,
    rarrsim: m7,
    Rarrtl: y7,
    rarrtl: b7,
    rarrw: w7,
    ratail: x7,
    rAtail: _7,
    ratio: S7,
    rationals: k7,
    rbarr: C7,
    rBarr: T7,
    RBarr: E7,
    rbbrk: L7,
    rbrace: A7,
    rbrack: M7,
    rbrke: N7,
    rbrksld: P7,
    rbrkslu: O7,
    Rcaron: $7,
    rcaron: D7,
    Rcedil: R7,
    rcedil: z7,
    rceil: F7,
    rcub: I7,
    Rcy: q7,
    rcy: H7,
    rdca: B7,
    rdldhar: W7,
    rdquo: U7,
    rdquor: j7,
    rdsh: G7,
    real: V7,
    realine: K7,
    realpart: X7,
    reals: Y7,
    Re: Z7,
    rect: J7,
    reg: Q7,
    REG: tK,
    ReverseElement: eK,
    ReverseEquilibrium: nK,
    ReverseUpEquilibrium: rK,
    rfisht: iK,
    rfloor: oK,
    rfr: sK,
    Rfr: aK,
    rHar: lK,
    rhard: cK,
    rharu: uK,
    rharul: fK,
    Rho: hK,
    rho: dK,
    rhov: pK,
    RightAngleBracket: gK,
    RightArrowBar: vK,
    rightarrow: mK,
    RightArrow: yK,
    Rightarrow: bK,
    RightArrowLeftArrow: wK,
    rightarrowtail: xK,
    RightCeiling: _K,
    RightDoubleBracket: SK,
    RightDownTeeVector: kK,
    RightDownVectorBar: CK,
    RightDownVector: TK,
    RightFloor: EK,
    rightharpoondown: LK,
    rightharpoonup: AK,
    rightleftarrows: MK,
    rightleftharpoons: NK,
    rightrightarrows: PK,
    rightsquigarrow: OK,
    RightTeeArrow: $K,
    RightTee: DK,
    RightTeeVector: RK,
    rightthreetimes: zK,
    RightTriangleBar: FK,
    RightTriangle: IK,
    RightTriangleEqual: qK,
    RightUpDownVector: HK,
    RightUpTeeVector: BK,
    RightUpVectorBar: WK,
    RightUpVector: UK,
    RightVectorBar: jK,
    RightVector: GK,
    ring: VK,
    risingdotseq: KK,
    rlarr: XK,
    rlhar: YK,
    rlm: ZK,
    rmoustache: JK,
    rmoust: QK,
    rnmid: tX,
    roang: eX,
    roarr: nX,
    robrk: rX,
    ropar: iX,
    ropf: oX,
    Ropf: sX,
    roplus: aX,
    rotimes: lX,
    RoundImplies: cX,
    rpar: uX,
    rpargt: fX,
    rppolint: hX,
    rrarr: dX,
    Rrightarrow: pX,
    rsaquo: gX,
    rscr: vX,
    Rscr: mX,
    rsh: yX,
    Rsh: bX,
    rsqb: wX,
    rsquo: xX,
    rsquor: _X,
    rthree: SX,
    rtimes: kX,
    rtri: CX,
    rtrie: TX,
    rtrif: EX,
    rtriltri: LX,
    RuleDelayed: AX,
    ruluhar: MX,
    rx: NX,
    Sacute: PX,
    sacute: OX,
    sbquo: $X,
    scap: DX,
    Scaron: RX,
    scaron: zX,
    Sc: FX,
    sc: IX,
    sccue: qX,
    sce: HX,
    scE: BX,
    Scedil: WX,
    scedil: UX,
    Scirc: jX,
    scirc: GX,
    scnap: VX,
    scnE: KX,
    scnsim: XX,
    scpolint: YX,
    scsim: ZX,
    Scy: JX,
    scy: QX,
    sdotb: tY,
    sdot: eY,
    sdote: nY,
    searhk: rY,
    searr: iY,
    seArr: oY,
    searrow: sY,
    sect: aY,
    semi: lY,
    seswar: cY,
    setminus: uY,
    setmn: fY,
    sext: hY,
    Sfr: dY,
    sfr: pY,
    sfrown: gY,
    sharp: vY,
    SHCHcy: mY,
    shchcy: yY,
    SHcy: bY,
    shcy: wY,
    ShortDownArrow: xY,
    ShortLeftArrow: _Y,
    shortmid: SY,
    shortparallel: kY,
    ShortRightArrow: CY,
    ShortUpArrow: TY,
    shy: EY,
    Sigma: LY,
    sigma: AY,
    sigmaf: MY,
    sigmav: NY,
    sim: PY,
    simdot: OY,
    sime: $Y,
    simeq: DY,
    simg: RY,
    simgE: zY,
    siml: FY,
    simlE: IY,
    simne: qY,
    simplus: HY,
    simrarr: BY,
    slarr: WY,
    SmallCircle: UY,
    smallsetminus: jY,
    smashp: GY,
    smeparsl: VY,
    smid: KY,
    smile: XY,
    smt: YY,
    smte: ZY,
    smtes: JY,
    SOFTcy: QY,
    softcy: tZ,
    solbar: eZ,
    solb: nZ,
    sol: rZ,
    Sopf: iZ,
    sopf: oZ,
    spades: sZ,
    spadesuit: aZ,
    spar: lZ,
    sqcap: cZ,
    sqcaps: uZ,
    sqcup: fZ,
    sqcups: hZ,
    Sqrt: dZ,
    sqsub: pZ,
    sqsube: gZ,
    sqsubset: vZ,
    sqsubseteq: mZ,
    sqsup: yZ,
    sqsupe: bZ,
    sqsupset: wZ,
    sqsupseteq: xZ,
    square: _Z,
    Square: SZ,
    SquareIntersection: kZ,
    SquareSubset: CZ,
    SquareSubsetEqual: TZ,
    SquareSuperset: EZ,
    SquareSupersetEqual: LZ,
    SquareUnion: AZ,
    squarf: MZ,
    squ: NZ,
    squf: PZ,
    srarr: OZ,
    Sscr: $Z,
    sscr: DZ,
    ssetmn: RZ,
    ssmile: zZ,
    sstarf: FZ,
    Star: IZ,
    star: qZ,
    starf: HZ,
    straightepsilon: BZ,
    straightphi: WZ,
    strns: UZ,
    sub: jZ,
    Sub: GZ,
    subdot: VZ,
    subE: KZ,
    sube: XZ,
    subedot: YZ,
    submult: ZZ,
    subnE: JZ,
    subne: QZ,
    subplus: tJ,
    subrarr: eJ,
    subset: nJ,
    Subset: rJ,
    subseteq: iJ,
    subseteqq: oJ,
    SubsetEqual: sJ,
    subsetneq: aJ,
    subsetneqq: lJ,
    subsim: cJ,
    subsub: uJ,
    subsup: fJ,
    succapprox: hJ,
    succ: dJ,
    succcurlyeq: pJ,
    Succeeds: gJ,
    SucceedsEqual: vJ,
    SucceedsSlantEqual: mJ,
    SucceedsTilde: yJ,
    succeq: bJ,
    succnapprox: wJ,
    succneqq: xJ,
    succnsim: _J,
    succsim: SJ,
    SuchThat: kJ,
    sum: CJ,
    Sum: TJ,
    sung: EJ,
    sup1: LJ,
    sup2: AJ,
    sup3: MJ,
    sup: NJ,
    Sup: PJ,
    supdot: OJ,
    supdsub: $J,
    supE: DJ,
    supe: RJ,
    supedot: zJ,
    Superset: FJ,
    SupersetEqual: IJ,
    suphsol: qJ,
    suphsub: HJ,
    suplarr: BJ,
    supmult: WJ,
    supnE: UJ,
    supne: jJ,
    supplus: GJ,
    supset: VJ,
    Supset: KJ,
    supseteq: XJ,
    supseteqq: YJ,
    supsetneq: ZJ,
    supsetneqq: JJ,
    supsim: QJ,
    supsub: tQ,
    supsup: eQ,
    swarhk: nQ,
    swarr: rQ,
    swArr: iQ,
    swarrow: oQ,
    swnwar: sQ,
    szlig: aQ,
    Tab: lQ,
    target: cQ,
    Tau: uQ,
    tau: fQ,
    tbrk: hQ,
    Tcaron: dQ,
    tcaron: pQ,
    Tcedil: gQ,
    tcedil: vQ,
    Tcy: mQ,
    tcy: yQ,
    tdot: bQ,
    telrec: wQ,
    Tfr: xQ,
    tfr: _Q,
    there4: SQ,
    therefore: kQ,
    Therefore: CQ,
    Theta: TQ,
    theta: EQ,
    thetasym: LQ,
    thetav: AQ,
    thickapprox: MQ,
    thicksim: NQ,
    ThickSpace: PQ,
    ThinSpace: OQ,
    thinsp: $Q,
    thkap: DQ,
    thksim: RQ,
    THORN: zQ,
    thorn: FQ,
    tilde: IQ,
    Tilde: qQ,
    TildeEqual: HQ,
    TildeFullEqual: BQ,
    TildeTilde: WQ,
    timesbar: UQ,
    timesb: jQ,
    times: GQ,
    timesd: VQ,
    tint: KQ,
    toea: XQ,
    topbot: YQ,
    topcir: ZQ,
    top: JQ,
    Topf: QQ,
    topf: ttt,
    topfork: ett,
    tosa: ntt,
    tprime: rtt,
    trade: itt,
    TRADE: ott,
    triangle: stt,
    triangledown: att,
    triangleleft: ltt,
    trianglelefteq: ctt,
    triangleq: utt,
    triangleright: ftt,
    trianglerighteq: htt,
    tridot: dtt,
    trie: ptt,
    triminus: gtt,
    TripleDot: vtt,
    triplus: mtt,
    trisb: ytt,
    tritime: btt,
    trpezium: wtt,
    Tscr: xtt,
    tscr: _tt,
    TScy: Stt,
    tscy: ktt,
    TSHcy: Ctt,
    tshcy: Ttt,
    Tstrok: Ett,
    tstrok: Ltt,
    twixt: Att,
    twoheadleftarrow: Mtt,
    twoheadrightarrow: Ntt,
    Uacute: Ptt,
    uacute: Ott,
    uarr: $tt,
    Uarr: Dtt,
    uArr: Rtt,
    Uarrocir: ztt,
    Ubrcy: Ftt,
    ubrcy: Itt,
    Ubreve: qtt,
    ubreve: Htt,
    Ucirc: Btt,
    ucirc: Wtt,
    Ucy: Utt,
    ucy: jtt,
    udarr: Gtt,
    Udblac: Vtt,
    udblac: Ktt,
    udhar: Xtt,
    ufisht: Ytt,
    Ufr: Ztt,
    ufr: Jtt,
    Ugrave: Qtt,
    ugrave: tet,
    uHar: eet,
    uharl: net,
    uharr: ret,
    uhblk: iet,
    ulcorn: oet,
    ulcorner: set,
    ulcrop: aet,
    ultri: cet,
    Umacr: uet,
    umacr: fet,
    uml: het,
    UnderBar: det,
    UnderBrace: pet,
    UnderBracket: get,
    UnderParenthesis: vet,
    Union: met,
    UnionPlus: yet,
    Uogon: bet,
    uogon: wet,
    Uopf: xet,
    uopf: _et,
    UpArrowBar: ket,
    uparrow: Cet,
    UpArrow: Tet,
    Uparrow: Eet,
    UpArrowDownArrow: Let,
    updownarrow: Aet,
    UpDownArrow: Met,
    Updownarrow: Net,
    UpEquilibrium: Pet,
    upharpoonleft: Oet,
    upharpoonright: $et,
    uplus: Det,
    UpperLeftArrow: Ret,
    UpperRightArrow: zet,
    upsi: Fet,
    Upsi: Iet,
    upsih: qet,
    Upsilon: Het,
    upsilon: Bet,
    UpTeeArrow: Wet,
    UpTee: Uet,
    upuparrows: jet,
    urcorn: Get,
    urcorner: Vet,
    urcrop: Ket,
    Uring: Xet,
    uring: Yet,
    urtri: Zet,
    Uscr: Jet,
    uscr: Qet,
    utdot: tnt,
    Utilde: ent,
    utilde: nnt,
    utri: rnt,
    utrif: int,
    uuarr: ont,
    Uuml: snt,
    uuml: ant,
    uwangle: lnt,
    vangrt: cnt,
    varepsilon: unt,
    varkappa: fnt,
    varnothing: hnt,
    varphi: dnt,
    varpi: pnt,
    varpropto: gnt,
    varr: vnt,
    vArr: mnt,
    varrho: ynt,
    varsigma: bnt,
    varsubsetneq: wnt,
    varsubsetneqq: xnt,
    varsupsetneq: _nt,
    varsupsetneqq: Snt,
    vartheta: knt,
    vartriangleleft: Cnt,
    vartriangleright: Tnt,
    vBar: Ent,
    Vbar: Lnt,
    vBarv: Ant,
    Vcy: Mnt,
    vcy: Nnt,
    vdash: Pnt,
    vDash: Ont,
    Vdash: $nt,
    VDash: Dnt,
    Vdashl: Rnt,
    veebar: znt,
    vee: Fnt,
    Vee: Int,
    veeeq: qnt,
    vellip: Hnt,
    verbar: Bnt,
    Verbar: Wnt,
    vert: Unt,
    Vert: jnt,
    VerticalBar: Gnt,
    VerticalLine: Vnt,
    VerticalSeparator: Knt,
    VerticalTilde: Xnt,
    VeryThinSpace: Ynt,
    Vfr: Znt,
    vfr: Jnt,
    vltri: Qnt,
    vnsub: trt,
    vnsup: ert,
    Vopf: nrt,
    vopf: rrt,
    vprop: irt,
    vrtri: ort,
    Vscr: srt,
    vscr: art,
    vsubnE: lrt,
    vsubne: crt,
    vsupnE: urt,
    vsupne: frt,
    Vvdash: hrt,
    vzigzag: drt,
    Wcirc: prt,
    wcirc: grt,
    wedbar: vrt,
    wedge: mrt,
    Wedge: yrt,
    wedgeq: brt,
    weierp: wrt,
    Wfr: xrt,
    wfr: _rt,
    Wopf: Srt,
    wopf: krt,
    wp: Crt,
    wr: Trt,
    wreath: Ert,
    Wscr: Lrt,
    wscr: Art,
    xcap: Mrt,
    xcirc: Nrt,
    xcup: Prt,
    xdtri: Ort,
    Xfr: $rt,
    xfr: Drt,
    xharr: Rrt,
    xhArr: zrt,
    Xi: Frt,
    xi: Irt,
    xlarr: qrt,
    xlArr: Hrt,
    xmap: Brt,
    xnis: Wrt,
    xodot: Urt,
    Xopf: jrt,
    xopf: Grt,
    xoplus: Vrt,
    xotime: Krt,
    xrarr: Xrt,
    xrArr: Yrt,
    Xscr: Zrt,
    xscr: Jrt,
    xsqcup: Qrt,
    xuplus: tit,
    xutri: eit,
    xvee: nit,
    xwedge: rit,
    Yacute: iit,
    yacute: oit,
    YAcy: sit,
    yacy: ait,
    Ycirc: lit,
    ycirc: cit,
    Ycy: uit,
    ycy: fit,
    yen: hit,
    Yfr: dit,
    yfr: pit,
    YIcy: git,
    yicy: vit,
    Yopf: mit,
    yopf: yit,
    Yscr: bit,
    yscr: wit,
    YUcy: xit,
    yucy: _it,
    yuml: Sit,
    Yuml: kit,
    Zacute: Cit,
    zacute: Tit,
    Zcaron: Eit,
    zcaron: Lit,
    Zcy: Ait,
    zcy: Mit,
    Zdot: Nit,
    zdot: Pit,
    zeetrf: Oit,
    ZeroWidthSpace: $it,
    Zeta: Dit,
    zeta: Rit,
    zfr: zit,
    Zfr: Fit,
    ZHcy: Iit,
    zhcy: qit,
    zigrarr: Hit,
    zopf: Bit,
    Zopf: Wit,
    Zscr: Uit,
    zscr: jit,
    zwj: Git,
    zwnj: Vit,
  },
  Kit = 'Á',
  Xit = 'á',
  Yit = 'Â',
  Zit = 'â',
  Jit = '´',
  Qit = 'Æ',
  tot = 'æ',
  eot = 'À',
  not = 'à',
  rot = '&',
  iot = '&',
  oot = 'Å',
  sot = 'å',
  aot = 'Ã',
  lot = 'ã',
  cot = 'Ä',
  uot = 'ä',
  fot = '¦',
  hot = 'Ç',
  dot = 'ç',
  pot = '¸',
  got = '¢',
  vot = '©',
  mot = '©',
  yot = '¤',
  bot = '°',
  wot = '÷',
  xot = 'É',
  _ot = 'é',
  Sot = 'Ê',
  kot = 'ê',
  Cot = 'È',
  Tot = 'è',
  Eot = 'Ð',
  Lot = 'ð',
  Aot = 'Ë',
  Mot = 'ë',
  Not = '½',
  Pot = '¼',
  Oot = '¾',
  $ot = '>',
  Dot = '>',
  Rot = 'Í',
  zot = 'í',
  Fot = 'Î',
  Iot = 'î',
  qot = '¡',
  Hot = 'Ì',
  Bot = 'ì',
  Wot = '¿',
  Uot = 'Ï',
  jot = 'ï',
  Got = '«',
  Vot = '<',
  Kot = '<',
  Xot = '¯',
  Yot = 'µ',
  Zot = '·',
  Jot = ' ',
  Qot = '¬',
  tst = 'Ñ',
  est = 'ñ',
  nst = 'Ó',
  rst = 'ó',
  ist = 'Ô',
  ost = 'ô',
  sst = 'Ò',
  ast = 'ò',
  lst = 'ª',
  cst = 'º',
  ust = 'Ø',
  fst = 'ø',
  hst = 'Õ',
  dst = 'õ',
  pst = 'Ö',
  gst = 'ö',
  vst = '¶',
  mst = '±',
  yst = '£',
  bst = '"',
  wst = '"',
  xst = '»',
  _st = '®',
  Sst = '®',
  kst = '§',
  Cst = '­',
  Tst = '¹',
  Est = '²',
  Lst = '³',
  Ast = 'ß',
  Mst = 'Þ',
  Nst = 'þ',
  Pst = '×',
  Ost = 'Ú',
  $st = 'ú',
  Dst = 'Û',
  Rst = 'û',
  zst = 'Ù',
  Fst = 'ù',
  Ist = '¨',
  qst = 'Ü',
  Hst = 'ü',
  Bst = 'Ý',
  Wst = 'ý',
  Ust = '¥',
  jst = 'ÿ',
  Gst = {
    Aacute: Kit,
    aacute: Xit,
    Acirc: Yit,
    acirc: Zit,
    acute: Jit,
    AElig: Qit,
    aelig: tot,
    Agrave: eot,
    agrave: not,
    amp: rot,
    AMP: iot,
    Aring: oot,
    aring: sot,
    Atilde: aot,
    atilde: lot,
    Auml: cot,
    auml: uot,
    brvbar: fot,
    Ccedil: hot,
    ccedil: dot,
    cedil: pot,
    cent: got,
    copy: vot,
    COPY: mot,
    curren: yot,
    deg: bot,
    divide: wot,
    Eacute: xot,
    eacute: _ot,
    Ecirc: Sot,
    ecirc: kot,
    Egrave: Cot,
    egrave: Tot,
    ETH: Eot,
    eth: Lot,
    Euml: Aot,
    euml: Mot,
    frac12: Not,
    frac14: Pot,
    frac34: Oot,
    gt: $ot,
    GT: Dot,
    Iacute: Rot,
    iacute: zot,
    Icirc: Fot,
    icirc: Iot,
    iexcl: qot,
    Igrave: Hot,
    igrave: Bot,
    iquest: Wot,
    Iuml: Uot,
    iuml: jot,
    laquo: Got,
    lt: Vot,
    LT: Kot,
    macr: Xot,
    micro: Yot,
    middot: Zot,
    nbsp: Jot,
    not: Qot,
    Ntilde: tst,
    ntilde: est,
    Oacute: nst,
    oacute: rst,
    Ocirc: ist,
    ocirc: ost,
    Ograve: sst,
    ograve: ast,
    ordf: lst,
    ordm: cst,
    Oslash: ust,
    oslash: fst,
    Otilde: hst,
    otilde: dst,
    Ouml: pst,
    ouml: gst,
    para: vst,
    plusmn: mst,
    pound: yst,
    quot: bst,
    QUOT: wst,
    raquo: xst,
    reg: _st,
    REG: Sst,
    sect: kst,
    shy: Cst,
    sup1: Tst,
    sup2: Est,
    sup3: Lst,
    szlig: Ast,
    THORN: Mst,
    thorn: Nst,
    times: Pst,
    Uacute: Ost,
    uacute: $st,
    Ucirc: Dst,
    ucirc: Rst,
    Ugrave: zst,
    ugrave: Fst,
    uml: Ist,
    Uuml: qst,
    uuml: Hst,
    Yacute: Bst,
    yacute: Wst,
    yen: Ust,
    yuml: jst,
  },
  Vst = '&',
  Kst = "'",
  Xst = '>',
  Yst = '<',
  Zst = '"',
  wy = { amp: Vst, apos: Kst, gt: Xst, lt: Yst, quot: Zst };
var Ah = {};
const Jst = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376,
};
var Qst =
  (no && no.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(Ah, '__esModule', { value: !0 });
var wv = Qst(Jst),
  tat =
    String.fromCodePoint ||
    function (t) {
      var n = '';
      return (
        t > 65535 &&
          ((t -= 65536),
          (n += String.fromCharCode(((t >>> 10) & 1023) | 55296)),
          (t = 56320 | (t & 1023))),
        (n += String.fromCharCode(t)),
        n
      );
    };
function eat(t) {
  return (t >= 55296 && t <= 57343) || t > 1114111
    ? '�'
    : (t in wv.default && (t = wv.default[t]), tat(t));
}
Ah.default = eat;
var Oc =
  (no && no.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(Ir, '__esModule', { value: !0 });
Ir.decodeHTML = Ir.decodeHTMLStrict = Ir.decodeXML = void 0;
var Of = Oc(by),
  nat = Oc(Gst),
  rat = Oc(wy),
  xv = Oc(Ah),
  iat = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
Ir.decodeXML = xy(rat.default);
Ir.decodeHTMLStrict = xy(Of.default);
function xy(t) {
  var n = _y(t);
  return function (r) {
    return String(r).replace(iat, n);
  };
}
var _v = function (t, n) {
  return t < n ? 1 : -1;
};
Ir.decodeHTML = (function () {
  for (
    var t = Object.keys(nat.default).sort(_v),
      n = Object.keys(Of.default).sort(_v),
      r = 0,
      o = 0;
    r < n.length;
    r++
  )
    t[o] === n[r] ? ((n[r] += ';?'), o++) : (n[r] += ';');
  var l = new RegExp(
      '&(?:' + n.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
      'g',
    ),
    u = _y(Of.default);
  function f(h) {
    return h.substr(-1) !== ';' && (h += ';'), u(h);
  }
  return function (h) {
    return String(h).replace(l, f);
  };
})();
function _y(t) {
  return function (r) {
    if (r.charAt(1) === '#') {
      var o = r.charAt(2);
      return o === 'X' || o === 'x'
        ? xv.default(parseInt(r.substr(3), 16))
        : xv.default(parseInt(r.substr(2), 10));
    }
    return t[r.slice(1, -1)] || r;
  };
}
var $n = {},
  Sy =
    (no && no.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty($n, '__esModule', { value: !0 });
$n.escapeUTF8 =
  $n.escape =
  $n.encodeNonAsciiHTML =
  $n.encodeHTML =
  $n.encodeXML =
    void 0;
var oat = Sy(wy),
  ky = Ty(oat.default),
  Cy = Ey(ky);
$n.encodeXML = My(ky);
var sat = Sy(by),
  Mh = Ty(sat.default),
  aat = Ey(Mh);
$n.encodeHTML = cat(Mh, aat);
$n.encodeNonAsciiHTML = My(Mh);
function Ty(t) {
  return Object.keys(t)
    .sort()
    .reduce(function (n, r) {
      return (n[t[r]] = '&' + r + ';'), n;
    }, {});
}
function Ey(t) {
  for (var n = [], r = [], o = 0, l = Object.keys(t); o < l.length; o++) {
    var u = l[o];
    u.length === 1 ? n.push('\\' + u) : r.push(u);
  }
  n.sort();
  for (var f = 0; f < n.length - 1; f++) {
    for (
      var h = f;
      h < n.length - 1 && n[h].charCodeAt(1) + 1 === n[h + 1].charCodeAt(1);

    )
      h += 1;
    var d = 1 + h - f;
    d < 3 || n.splice(f, d, n[f] + '-' + n[h]);
  }
  return r.unshift('[' + n.join('') + ']'), new RegExp(r.join('|'), 'g');
}
var Ly =
    /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
  lat =
    String.prototype.codePointAt != null
      ? function (t) {
          return t.codePointAt(0);
        }
      : function (t) {
          return (
            (t.charCodeAt(0) - 55296) * 1024 + t.charCodeAt(1) - 56320 + 65536
          );
        };
function $c(t) {
  return (
    '&#x' +
    (t.length > 1 ? lat(t) : t.charCodeAt(0)).toString(16).toUpperCase() +
    ';'
  );
}
function cat(t, n) {
  return function (r) {
    return r
      .replace(n, function (o) {
        return t[o];
      })
      .replace(Ly, $c);
  };
}
var Ay = new RegExp(Cy.source + '|' + Ly.source, 'g');
function uat(t) {
  return t.replace(Ay, $c);
}
$n.escape = uat;
function fat(t) {
  return t.replace(Cy, $c);
}
$n.escapeUTF8 = fat;
function My(t) {
  return function (n) {
    return n.replace(Ay, function (r) {
      return t[r] || $c(r);
    });
  };
}
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.decodeXMLStrict =
      t.decodeHTML5Strict =
      t.decodeHTML4Strict =
      t.decodeHTML5 =
      t.decodeHTML4 =
      t.decodeHTMLStrict =
      t.decodeHTML =
      t.decodeXML =
      t.encodeHTML5 =
      t.encodeHTML4 =
      t.escapeUTF8 =
      t.escape =
      t.encodeNonAsciiHTML =
      t.encodeHTML =
      t.encodeXML =
      t.encode =
      t.decodeStrict =
      t.decode =
        void 0);
  var n = Ir,
    r = $n;
  function o(d, g) {
    return (!g || g <= 0 ? n.decodeXML : n.decodeHTML)(d);
  }
  t.decode = o;
  function l(d, g) {
    return (!g || g <= 0 ? n.decodeXML : n.decodeHTMLStrict)(d);
  }
  t.decodeStrict = l;
  function u(d, g) {
    return (!g || g <= 0 ? r.encodeXML : r.encodeHTML)(d);
  }
  t.encode = u;
  var f = $n;
  Object.defineProperty(t, 'encodeXML', {
    enumerable: !0,
    get: function () {
      return f.encodeXML;
    },
  }),
    Object.defineProperty(t, 'encodeHTML', {
      enumerable: !0,
      get: function () {
        return f.encodeHTML;
      },
    }),
    Object.defineProperty(t, 'encodeNonAsciiHTML', {
      enumerable: !0,
      get: function () {
        return f.encodeNonAsciiHTML;
      },
    }),
    Object.defineProperty(t, 'escape', {
      enumerable: !0,
      get: function () {
        return f.escape;
      },
    }),
    Object.defineProperty(t, 'escapeUTF8', {
      enumerable: !0,
      get: function () {
        return f.escapeUTF8;
      },
    }),
    Object.defineProperty(t, 'encodeHTML4', {
      enumerable: !0,
      get: function () {
        return f.encodeHTML;
      },
    }),
    Object.defineProperty(t, 'encodeHTML5', {
      enumerable: !0,
      get: function () {
        return f.encodeHTML;
      },
    });
  var h = Ir;
  Object.defineProperty(t, 'decodeXML', {
    enumerable: !0,
    get: function () {
      return h.decodeXML;
    },
  }),
    Object.defineProperty(t, 'decodeHTML', {
      enumerable: !0,
      get: function () {
        return h.decodeHTML;
      },
    }),
    Object.defineProperty(t, 'decodeHTMLStrict', {
      enumerable: !0,
      get: function () {
        return h.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(t, 'decodeHTML4', {
      enumerable: !0,
      get: function () {
        return h.decodeHTML;
      },
    }),
    Object.defineProperty(t, 'decodeHTML5', {
      enumerable: !0,
      get: function () {
        return h.decodeHTML;
      },
    }),
    Object.defineProperty(t, 'decodeHTML4Strict', {
      enumerable: !0,
      get: function () {
        return h.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(t, 'decodeHTML5Strict', {
      enumerable: !0,
      get: function () {
        return h.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(t, 'decodeXMLStrict', {
      enumerable: !0,
      get: function () {
        return h.decodeXML;
      },
    });
})(yy);
function hat(t, n) {
  if (!(t instanceof n))
    throw new TypeError('Cannot call a class as a function');
}
function Sv(t, n) {
  for (var r = 0; r < n.length; r++) {
    var o = n[r];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(t, o.key, o);
  }
}
function dat(t, n, r) {
  return n && Sv(t.prototype, n), r && Sv(t, r), t;
}
function Ny(t, n) {
  var r = (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (!r) {
    if (
      Array.isArray(t) ||
      (r = pat(t)) ||
      (n && t && typeof t.length == 'number')
    ) {
      r && (t = r);
      var o = 0,
        l = function () {};
      return {
        s: l,
        n: function () {
          return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
        },
        e: function (g) {
          throw g;
        },
        f: l,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var u = !0,
    f = !1,
    h;
  return {
    s: function () {
      r = r.call(t);
    },
    n: function () {
      var g = r.next();
      return (u = g.done), g;
    },
    e: function (g) {
      (f = !0), (h = g);
    },
    f: function () {
      try {
        !u && r.return != null && r.return();
      } finally {
        if (f) throw h;
      }
    },
  };
}
function pat(t, n) {
  if (t) {
    if (typeof t == 'string') return kv(t, n);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === 'Object' && t.constructor && (r = t.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return kv(t, n);
  }
}
function kv(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var r = 0, o = new Array(n); r < n; r++) o[r] = t[r];
  return o;
}
var gat = yy,
  Cv = {
    fg: '#FFF',
    bg: '#000',
    newline: !1,
    escapeXML: !1,
    stream: !1,
    colors: vat(),
  };
function vat() {
  var t = {
    0: '#000',
    1: '#A00',
    2: '#0A0',
    3: '#A50',
    4: '#00A',
    5: '#A0A',
    6: '#0AA',
    7: '#AAA',
    8: '#555',
    9: '#F55',
    10: '#5F5',
    11: '#FF5',
    12: '#55F',
    13: '#F5F',
    14: '#5FF',
    15: '#FFF',
  };
  return (
    xl(0, 5).forEach(function (n) {
      xl(0, 5).forEach(function (r) {
        xl(0, 5).forEach(function (o) {
          return mat(n, r, o, t);
        });
      });
    }),
    xl(0, 23).forEach(function (n) {
      var r = n + 232,
        o = Py(n * 10 + 8);
      t[r] = '#' + o + o + o;
    }),
    t
  );
}
function mat(t, n, r, o) {
  var l = 16 + t * 36 + n * 6 + r,
    u = t > 0 ? t * 40 + 55 : 0,
    f = n > 0 ? n * 40 + 55 : 0,
    h = r > 0 ? r * 40 + 55 : 0;
  o[l] = yat([u, f, h]);
}
function Py(t) {
  for (var n = t.toString(16); n.length < 2; ) n = '0' + n;
  return n;
}
function yat(t) {
  var n = [],
    r = Ny(t),
    o;
  try {
    for (r.s(); !(o = r.n()).done; ) {
      var l = o.value;
      n.push(Py(l));
    }
  } catch (u) {
    r.e(u);
  } finally {
    r.f();
  }
  return '#' + n.join('');
}
function Tv(t, n, r, o) {
  var l;
  return (
    n === 'text'
      ? (l = _at(r, o))
      : n === 'display'
      ? (l = wat(t, r, o))
      : n === 'xterm256Foreground'
      ? (l = $l(t, o.colors[r]))
      : n === 'xterm256Background'
      ? (l = Dl(t, o.colors[r]))
      : n === 'rgb' && (l = bat(t, r)),
    l
  );
}
function bat(t, n) {
  n = n.substring(2).slice(0, -1);
  var r = +n.substr(0, 2),
    o = n.substring(5).split(';'),
    l = o
      .map(function (u) {
        return ('0' + Number(u).toString(16)).substr(-2);
      })
      .join('');
  return Ol(t, (r === 38 ? 'color:#' : 'background-color:#') + l);
}
function wat(t, n, r) {
  n = parseInt(n, 10);
  var o = {
      '-1': function () {
        return '<br/>';
      },
      0: function () {
        return t.length && Oy(t);
      },
      1: function () {
        return mi(t, 'b');
      },
      3: function () {
        return mi(t, 'i');
      },
      4: function () {
        return mi(t, 'u');
      },
      8: function () {
        return Ol(t, 'display:none');
      },
      9: function () {
        return mi(t, 'strike');
      },
      22: function () {
        return Ol(
          t,
          'font-weight:normal;text-decoration:none;font-style:normal',
        );
      },
      23: function () {
        return Lv(t, 'i');
      },
      24: function () {
        return Lv(t, 'u');
      },
      39: function () {
        return $l(t, r.fg);
      },
      49: function () {
        return Dl(t, r.bg);
      },
      53: function () {
        return Ol(t, 'text-decoration:overline');
      },
    },
    l;
  return (
    o[n]
      ? (l = o[n]())
      : 4 < n && n < 7
      ? (l = mi(t, 'blink'))
      : 29 < n && n < 38
      ? (l = $l(t, r.colors[n - 30]))
      : 39 < n && n < 48
      ? (l = Dl(t, r.colors[n - 40]))
      : 89 < n && n < 98
      ? (l = $l(t, r.colors[8 + (n - 90)]))
      : 99 < n && n < 108 && (l = Dl(t, r.colors[8 + (n - 100)])),
    l
  );
}
function Oy(t) {
  var n = t.slice(0);
  return (
    (t.length = 0),
    n
      .reverse()
      .map(function (r) {
        return '</' + r + '>';
      })
      .join('')
  );
}
function xl(t, n) {
  for (var r = [], o = t; o <= n; o++) r.push(o);
  return r;
}
function xat(t) {
  return function (n) {
    return (t === null || n.category !== t) && t !== 'all';
  };
}
function Ev(t) {
  t = parseInt(t, 10);
  var n = null;
  return (
    t === 0
      ? (n = 'all')
      : t === 1
      ? (n = 'bold')
      : 2 < t && t < 5
      ? (n = 'underline')
      : 4 < t && t < 7
      ? (n = 'blink')
      : t === 8
      ? (n = 'hide')
      : t === 9
      ? (n = 'strike')
      : (29 < t && t < 38) || t === 39 || (89 < t && t < 98)
      ? (n = 'foreground-color')
      : ((39 < t && t < 48) || t === 49 || (99 < t && t < 108)) &&
        (n = 'background-color'),
    n
  );
}
function _at(t, n) {
  return n.escapeXML ? gat.encodeXML(t) : t;
}
function mi(t, n, r) {
  return (
    r || (r = ''),
    t.push(n),
    '<'.concat(n).concat(r ? ' style="'.concat(r, '"') : '', '>')
  );
}
function Ol(t, n) {
  return mi(t, 'span', n);
}
function $l(t, n) {
  return mi(t, 'span', 'color:' + n);
}
function Dl(t, n) {
  return mi(t, 'span', 'background-color:' + n);
}
function Lv(t, n) {
  var r;
  if ((t.slice(-1)[0] === n && (r = t.pop()), r)) return '</' + n + '>';
}
function Sat(t, n, r) {
  var o = !1,
    l = 3;
  function u() {
    return '';
  }
  function f(G, K) {
    return r('xterm256Foreground', K), '';
  }
  function h(G, K) {
    return r('xterm256Background', K), '';
  }
  function d(G) {
    return n.newline ? r('display', -1) : r('text', G), '';
  }
  function g(G, K) {
    (o = !0),
      K.trim().length === 0 && (K = '0'),
      (K = K.trimRight(';').split(';'));
    var ct = Ny(K),
      V;
    try {
      for (ct.s(); !(V = ct.n()).done; ) {
        var ut = V.value;
        r('display', ut);
      }
    } catch (ft) {
      ct.e(ft);
    } finally {
      ct.f();
    }
    return '';
  }
  function v(G) {
    return r('text', G), '';
  }
  function b(G) {
    return r('rgb', G), '';
  }
  var x = [
    { pattern: /^\x08+/, sub: u },
    { pattern: /^\x1b\[[012]?K/, sub: u },
    { pattern: /^\x1b\[\(B/, sub: u },
    { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: b },
    { pattern: /^\x1b\[38;5;(\d+)m/, sub: f },
    { pattern: /^\x1b\[48;5;(\d+)m/, sub: h },
    { pattern: /^\n/, sub: d },
    { pattern: /^\r+\n/, sub: d },
    { pattern: /^\r/, sub: d },
    { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: g },
    { pattern: /^\x1b\[\d?J/, sub: u },
    { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: u },
    { pattern: /^\x1b\[?[\d;]{0,3}/, sub: u },
    { pattern: /^(([^\x1b\x08\r\n])+)/, sub: v },
  ];
  function S(G, K) {
    (K > l && o) || ((o = !1), (t = t.replace(G.pattern, G.sub)));
  }
  var A = [],
    L = t,
    M = L.length;
  t: for (; M > 0; ) {
    for (var T = 0, E = 0, $ = x.length; E < $; T = ++E) {
      var O = x[T];
      if ((S(O, T), t.length !== M)) {
        M = t.length;
        continue t;
      }
    }
    if (t.length === M) break;
    A.push(0), (M = t.length);
  }
  return A;
}
function kat(t, n, r) {
  return (
    n !== 'text' &&
      ((t = t.filter(xat(Ev(r)))),
      t.push({ token: n, data: r, category: Ev(r) })),
    t
  );
}
var Cat = (function () {
    function t(n) {
      hat(this, t),
        (n = n || {}),
        n.colors && (n.colors = Object.assign({}, Cv.colors, n.colors)),
        (this.options = Object.assign({}, Cv, n)),
        (this.stack = []),
        (this.stickyStack = []);
    }
    return (
      dat(t, [
        {
          key: 'toHtml',
          value: function (r) {
            var o = this;
            r = typeof r == 'string' ? [r] : r;
            var l = this.stack,
              u = this.options,
              f = [];
            return (
              this.stickyStack.forEach(function (h) {
                var d = Tv(l, h.token, h.data, u);
                d && f.push(d);
              }),
              Sat(r.join(''), u, function (h, d) {
                var g = Tv(l, h, d, u);
                g && f.push(g),
                  u.stream && (o.stickyStack = kat(o.stickyStack, h, d));
              }),
              l.length && f.push(Oy(l)),
              f.join('')
            );
          },
        },
      ]),
      t
    );
  })(),
  Tat = Cat;
const Eat = j0(Tat);
function Lat(t, n) {
  return n && t.endsWith(n);
}
async function $y(t, n, r) {
  const o = encodeURI(`${t}:${n}:${r}`);
  await fetch(`/__open-in-editor?file=${o}`);
}
function Dy(t) {
  return new Eat({ fg: t ? '#FFF' : '#000', bg: t ? '#000' : '#FFF' });
}
const Aat = { class: 'scrolls scrolls-rounded task-error' },
  Mat = ['onClickPassive'],
  Nat = { key: 0 },
  Pat = ne({
    __name: 'ViewReportError',
    props: { root: null, filename: null, error: null },
    setup(t) {
      const n = t;
      function r(u) {
        return u.startsWith(n.root) ? u.slice(n.root.length) : u;
      }
      const o = xt(() => {
        var u, f;
        return (
          ((u = n.error) == null ? void 0 : u.expected) &&
          ((f = n.error) == null ? void 0 : f.actual)
        );
      });
      function l() {
        return n.error.diff;
      }
      return (u, f) => {
        const h = ao('tooltip');
        return (
          at(),
          Lt('div', Aat, [
            lt('pre', null, [
              lt('b', null, Jt(t.error.name || t.error.nameStr), 1),
              dn(': ' + Jt(t.error.message), 1),
            ]),
            (at(!0),
            Lt(
              ue,
              null,
              Zn(
                t.error.stacks,
                (d, g) => (
                  at(),
                  Lt(
                    'div',
                    {
                      key: g,
                      class: 'op80 flex gap-x-2 items-center',
                      'data-testid': 'stack',
                    },
                    [
                      lt(
                        'pre',
                        null,
                        ' - ' +
                          Jt(r(d.file)) +
                          ':' +
                          Jt(d.line) +
                          ':' +
                          Jt(d.column),
                        1,
                      ),
                      U(Lat)(d.file, t.filename)
                        ? rn(
                            (at(),
                            Lt(
                              'div',
                              {
                                key: 0,
                                class:
                                  'i-carbon-launch c-red-600 dark:c-red-400 hover:cursor-pointer min-w-1em min-h-1em',
                                tabindex: '0',
                                'aria-label': 'Open in Editor',
                                onClickPassive: (v) =>
                                  U($y)(d.file, d.line, d.column),
                              },
                              null,
                              40,
                              Mat,
                            )),
                            [[h, 'Open in Editor', void 0, { bottom: !0 }]],
                          )
                        : ee('', !0),
                    ],
                  )
                ),
              ),
              128,
            )),
            U(o)
              ? (at(),
                Lt(
                  'pre',
                  Nat,
                  '      ' +
                    Jt(`
${l()}`) +
                    `
    `,
                  1,
                ))
              : ee('', !0),
          ])
        );
      };
    },
  });
const Oat = lo(Pat, [['__scopeId', 'data-v-a58dc572']]),
  Dc = XT(),
  $at = oT(Dc),
  Dat = { 'h-full': '', class: 'scrolls' },
  Rat = { key: 0, class: 'scrolls scrolls-rounded task-error' },
  zat = ['innerHTML'],
  Fat = {
    key: 1,
    bg: 'green-500/10',
    text: 'green-500 sm',
    p: 'x4 y2',
    'm-2': '',
    rounded: '',
  },
  Iat = ne({
    __name: 'ViewReport',
    props: { file: null },
    setup(t) {
      const n = t;
      function r(h, d) {
        var g;
        return ((g = h.result) == null ? void 0 : g.state) !== 'fail'
          ? []
          : h.type === 'test' || h.type === 'custom'
          ? [{ ...h, level: d }]
          : [{ ...h, level: d }, ...h.tasks.flatMap((v) => r(v, d + 1))];
      }
      function o(h) {
        return h
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;');
      }
      function l(h, d) {
        var b, x;
        let g = '';
        d.message.includes('\x1B') &&
          (g = `<b>${d.nameStr || d.name}</b>: ${h.toHtml(o(d.message))}`);
        const v = (b = d.stackStr) == null ? void 0 : b.includes('\x1B');
        return (
          (v || ((x = d.stack) != null && x.includes('\x1B'))) &&
            (g.length > 0
              ? (g += h.toHtml(o(v ? d.stackStr : d.stack)))
              : (g = `<b>${d.nameStr || d.name}</b>: ${d.message}${h.toHtml(
                  o(v ? d.stackStr : d.stack),
                )}`)),
          g.length > 0 ? g : null
        );
      }
      function u(h, d) {
        const g = Dy(h);
        return d.map((v) => {
          var S;
          const b = v.result;
          if (!b) return v;
          const x =
            (S = b.errors) == null
              ? void 0
              : S.map((A) => l(g, A))
                  .filter((A) => A != null)
                  .join('<br><br>');
          return x != null && x.length && (b.htmlError = x), v;
        });
      }
      const f = xt(() => {
        var b, x;
        const h = n.file,
          d =
            ((b = h == null ? void 0 : h.tasks) == null
              ? void 0
              : b.flatMap((S) => r(S, 0))) ?? [],
          g = h == null ? void 0 : h.result;
        if ((x = g == null ? void 0 : g.errors) == null ? void 0 : x[0]) {
          const S = {
            id: h.id,
            name: h.name,
            level: 0,
            type: 'suite',
            mode: 'run',
            tasks: [],
            result: g,
          };
          d.unshift(S);
        }
        return d.length > 0 ? u(Dc.value, d) : d;
      });
      return (h, d) => (
        at(),
        Lt('div', Dat, [
          U(f).length
            ? (at(!0),
              Lt(
                ue,
                { key: 0 },
                Zn(U(f), (g) => {
                  var v, b, x;
                  return (
                    at(),
                    Lt('div', { key: g.id }, [
                      lt(
                        'div',
                        {
                          bg: 'red-500/10',
                          text: 'red-500 sm',
                          p: 'x3 y2',
                          'm-2': '',
                          rounded: '',
                          style: Cn({
                            'margin-left': `${
                              (v = g.result) != null && v.htmlError
                                ? 0.5
                                : 2 * g.level + 0.5
                            }rem`,
                          }),
                        },
                        [
                          dn(Jt(g.name) + ' ', 1),
                          (b = g.result) != null && b.htmlError
                            ? (at(),
                              Lt('div', Rat, [
                                lt(
                                  'pre',
                                  { innerHTML: g.result.htmlError },
                                  null,
                                  8,
                                  zat,
                                ),
                              ]))
                            : (x = g.result) != null && x.errors
                            ? (at(!0),
                              Lt(
                                ue,
                                { key: 1 },
                                Zn(g.result.errors, (S, A) => {
                                  var L;
                                  return (
                                    at(),
                                    Yt(
                                      Oat,
                                      {
                                        key: A,
                                        error: S,
                                        filename:
                                          (L = t.file) == null
                                            ? void 0
                                            : L.name,
                                        root: U(Ea).root,
                                      },
                                      null,
                                      8,
                                      ['error', 'filename', 'root'],
                                    )
                                  );
                                }),
                                128,
                              ))
                            : ee('', !0),
                        ],
                        4,
                      ),
                    ])
                  );
                }),
                128,
              ))
            : (at(), Lt('div', Fat, ' All tests passed in this file ')),
        ])
      );
    },
  });
const qat = lo(Iat, [['__scopeId', 'data-v-1988b97e']]),
  Hat = { border: 'b base', 'p-4': '' },
  Bat = ['innerHTML'],
  Wat = ['textContent'],
  Uat = ne({
    __name: 'ViewConsoleOutputEntry',
    props: {
      taskName: null,
      type: null,
      time: null,
      content: null,
      html: { type: Boolean },
    },
    setup(t) {
      const n = t;
      function r(o) {
        return new Date(o).toLocaleTimeString();
      }
      return (o, l) => (
        at(),
        Lt('div', Hat, [
          lt(
            'div',
            {
              'text-xs': '',
              'mb-1': '',
              class: ve(
                n.type === 'stderr' ? 'text-red-600 dark:text-red-300' : 'op30',
              ),
            },
            Jt(r(n.time)) + ' | ' + Jt(n.taskName) + ' | ' + Jt(n.type),
            3,
          ),
          n.html
            ? (at(),
              Lt(
                'pre',
                { key: 0, 'data-type': 'html', innerHTML: n.content },
                null,
                8,
                Bat,
              ))
            : (at(),
              Lt(
                'pre',
                { key: 1, 'data-type': 'text', textContent: Jt(n.content) },
                null,
                8,
                Wat,
              )),
        ])
      );
    },
  }),
  jat = {
    key: 0,
    'h-full': '',
    class: 'scrolls',
    flex: '',
    'flex-col': '',
    'data-testid': 'logs',
  },
  Gat = { key: 1, p6: '' },
  Vat = lt('pre', { inline: '' }, 'console.log(foo)', -1),
  Kat = ne({
    __name: 'ViewConsoleOutput',
    setup(t) {
      const n = xt(() => {
        const o = vy.value;
        if (o) {
          const l = Dy(Dc.value);
          return o.map(({ taskId: u, type: f, time: h, content: d }) => {
            const g = d.trim(),
              v = l.toHtml(g);
            return v !== g
              ? { taskId: u, type: f, time: h, html: !0, content: v }
              : { taskId: u, type: f, time: h, html: !1, content: d };
          });
        }
      });
      function r(o) {
        const l = o && je.state.idMap.get(o);
        return (l ? VC(l).slice(1).join(' > ') : '-') || '-';
      }
      return (o, l) => {
        var f;
        const u = Uat;
        return (f = U(n)) != null && f.length
          ? (at(),
            Lt('div', jat, [
              (at(!0),
              Lt(
                ue,
                null,
                Zn(
                  U(n),
                  ({ taskId: h, type: d, time: g, html: v, content: b }) => (
                    at(),
                    Lt('div', { key: h, 'font-mono': '' }, [
                      It(
                        u,
                        {
                          'task-name': r(h),
                          type: d,
                          time: g,
                          content: b,
                          html: v,
                        },
                        null,
                        8,
                        ['task-name', 'type', 'time', 'content', 'html'],
                      ),
                    ])
                  ),
                ),
                128,
              )),
            ]))
          : (at(),
            Lt('p', Gat, [
              dn(' Log something in your test and it would print here. (e.g. '),
              Vat,
              dn(') '),
            ]));
      };
    },
  });
var Yu = { exports: {} },
  Av;
function cs() {
  return (
    Av ||
      ((Av = 1),
      (function (t, n) {
        (function (r, o) {
          t.exports = o();
        })(no, function () {
          var r = navigator.userAgent,
            o = navigator.platform,
            l = /gecko\/\d/i.test(r),
            u = /MSIE \d/.test(r),
            f = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(r),
            h = /Edge\/(\d+)/.exec(r),
            d = u || f || h,
            g = d && (u ? document.documentMode || 6 : +(h || f)[1]),
            v = !h && /WebKit\//.test(r),
            b = v && /Qt\/\d+\.\d+/.test(r),
            x = !h && /Chrome\/(\d+)/.exec(r),
            S = x && +x[1],
            A = /Opera\//.test(r),
            L = /Apple Computer/.test(navigator.vendor),
            M = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(r),
            T = /PhantomJS/.test(r),
            E = L && (/Mobile\/\w+/.test(r) || navigator.maxTouchPoints > 2),
            $ = /Android/.test(r),
            O =
              E ||
              $ ||
              /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(r),
            G = E || /Mac/.test(o),
            K = /\bCrOS\b/.test(r),
            ct = /win/i.test(o),
            V = A && r.match(/Version\/(\d*\.\d*)/);
          V && (V = Number(V[1])), V && V >= 15 && ((A = !1), (v = !0));
          var ut = G && (b || (A && (V == null || V < 12.11))),
            ft = l || (d && g >= 9);
          function kt(e) {
            return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
          }
          var dt = function (e, i) {
            var a = e.className,
              s = kt(i).exec(a);
            if (s) {
              var c = a.slice(s.index + s[0].length);
              e.className = a.slice(0, s.index) + (c ? s[1] + c : '');
            }
          };
          function j(e) {
            for (var i = e.childNodes.length; i > 0; --i)
              e.removeChild(e.firstChild);
            return e;
          }
          function z(e, i) {
            return j(e).appendChild(i);
          }
          function k(e, i, a, s) {
            var c = document.createElement(e);
            if (
              (a && (c.className = a),
              s && (c.style.cssText = s),
              typeof i == 'string')
            )
              c.appendChild(document.createTextNode(i));
            else if (i) for (var p = 0; p < i.length; ++p) c.appendChild(i[p]);
            return c;
          }
          function q(e, i, a, s) {
            var c = k(e, i, a, s);
            return c.setAttribute('role', 'presentation'), c;
          }
          var W;
          document.createRange
            ? (W = function (e, i, a, s) {
                var c = document.createRange();
                return c.setEnd(s || e, a), c.setStart(e, i), c;
              })
            : (W = function (e, i, a) {
                var s = document.body.createTextRange();
                try {
                  s.moveToElementText(e.parentNode);
                } catch {
                  return s;
                }
                return (
                  s.collapse(!0),
                  s.moveEnd('character', a),
                  s.moveStart('character', i),
                  s
                );
              });
          function et(e, i) {
            if ((i.nodeType == 3 && (i = i.parentNode), e.contains))
              return e.contains(i);
            do if ((i.nodeType == 11 && (i = i.host), i == e)) return !0;
            while ((i = i.parentNode));
          }
          function mt(e) {
            var i;
            try {
              i = e.activeElement;
            } catch {
              i = e.body || null;
            }
            for (; i && i.shadowRoot && i.shadowRoot.activeElement; )
              i = i.shadowRoot.activeElement;
            return i;
          }
          function Ct(e, i) {
            var a = e.className;
            kt(i).test(a) || (e.className += (a ? ' ' : '') + i);
          }
          function Rt(e, i) {
            for (var a = e.split(' '), s = 0; s < a.length; s++)
              a[s] && !kt(a[s]).test(i) && (i += ' ' + a[s]);
            return i;
          }
          var Ft = function (e) {
            e.select();
          };
          E
            ? (Ft = function (e) {
                (e.selectionStart = 0), (e.selectionEnd = e.value.length);
              })
            : d &&
              (Ft = function (e) {
                try {
                  e.select();
                } catch {}
              });
          function jt(e) {
            return e.display.wrapper.ownerDocument;
          }
          function Zt(e) {
            return jt(e).defaultView;
          }
          function Q(e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return function () {
              return e.apply(null, i);
            };
          }
          function tt(e, i, a) {
            i || (i = {});
            for (var s in e)
              e.hasOwnProperty(s) &&
                (a !== !1 || !i.hasOwnProperty(s)) &&
                (i[s] = e[s]);
            return i;
          }
          function X(e, i, a, s, c) {
            i == null &&
              ((i = e.search(/[^\s\u00a0]/)), i == -1 && (i = e.length));
            for (var p = s || 0, m = c || 0; ; ) {
              var y = e.indexOf('	', p);
              if (y < 0 || y >= i) return m + (i - p);
              (m += y - p), (m += a - (m % a)), (p = y + 1);
            }
          }
          var ot = function () {
            (this.id = null),
              (this.f = null),
              (this.time = 0),
              (this.handler = Q(this.onTimeout, this));
          };
          (ot.prototype.onTimeout = function (e) {
            (e.id = 0),
              e.time <= +new Date()
                ? e.f()
                : setTimeout(e.handler, e.time - +new Date());
          }),
            (ot.prototype.set = function (e, i) {
              this.f = i;
              var a = +new Date() + e;
              (!this.id || a < this.time) &&
                (clearTimeout(this.id),
                (this.id = setTimeout(this.handler, e)),
                (this.time = a));
            });
          function Tt(e, i) {
            for (var a = 0; a < e.length; ++a) if (e[a] == i) return a;
            return -1;
          }
          var pe = 50,
            At = {
              toString: function () {
                return 'CodeMirror.Pass';
              },
            },
            P = { scroll: !1 },
            I = { origin: '*mouse' },
            J = { origin: '+move' };
          function nt(e, i, a) {
            for (var s = 0, c = 0; ; ) {
              var p = e.indexOf('	', s);
              p == -1 && (p = e.length);
              var m = p - s;
              if (p == e.length || c + m >= i) return s + Math.min(m, i - c);
              if (((c += p - s), (c += a - (c % a)), (s = p + 1), c >= i))
                return s;
            }
          }
          var it = [''];
          function gt(e) {
            for (; it.length <= e; ) it.push(st(it) + ' ');
            return it[e];
          }
          function st(e) {
            return e[e.length - 1];
          }
          function vt(e, i) {
            for (var a = [], s = 0; s < e.length; s++) a[s] = i(e[s], s);
            return a;
          }
          function _t(e, i, a) {
            for (var s = 0, c = a(i); s < e.length && a(e[s]) <= c; ) s++;
            e.splice(s, 0, i);
          }
          function ht() {}
          function $t(e, i) {
            var a;
            return (
              Object.create
                ? (a = Object.create(e))
                : ((ht.prototype = e), (a = new ht())),
              i && tt(i, a),
              a
            );
          }
          var Nt =
            /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
          function Ot(e) {
            return (
              /\w/.test(e) ||
              (e > '' && (e.toUpperCase() != e.toLowerCase() || Nt.test(e)))
            );
          }
          function zt(e, i) {
            return i
              ? i.source.indexOf('\\w') > -1 && Ot(e)
                ? !0
                : i.test(e)
              : Ot(e);
          }
          function Gt(e) {
            for (var i in e) if (e.hasOwnProperty(i) && e[i]) return !1;
            return !0;
          }
          var re =
            /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
          function te(e) {
            return e.charCodeAt(0) >= 768 && re.test(e);
          }
          function ce(e, i, a) {
            for (; (a < 0 ? i > 0 : i < e.length) && te(e.charAt(i)); ) i += a;
            return i;
          }
          function Qt(e, i, a) {
            for (var s = i > a ? -1 : 1; ; ) {
              if (i == a) return i;
              var c = (i + a) / 2,
                p = s < 0 ? Math.ceil(c) : Math.floor(c);
              if (p == i) return e(p) ? i : a;
              e(p) ? (a = p) : (i = p + s);
            }
          }
          function yn(e, i, a, s) {
            if (!e) return s(i, a, 'ltr', 0);
            for (var c = !1, p = 0; p < e.length; ++p) {
              var m = e[p];
              ((m.from < a && m.to > i) || (i == a && m.to == i)) &&
                (s(
                  Math.max(m.from, i),
                  Math.min(m.to, a),
                  m.level == 1 ? 'rtl' : 'ltr',
                  p,
                ),
                (c = !0));
            }
            c || s(i, a, 'ltr');
          }
          var An = null;
          function We(e, i, a) {
            var s;
            An = null;
            for (var c = 0; c < e.length; ++c) {
              var p = e[c];
              if (p.from < i && p.to > i) return c;
              p.to == i &&
                (p.from != p.to && a == 'before' ? (s = c) : (An = c)),
                p.from == i &&
                  (p.from != p.to && a != 'before' ? (s = c) : (An = c));
            }
            return s ?? An;
          }
          var co = (function () {
            var e =
                'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
              i =
                'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111';
            function a(_) {
              return _ <= 247
                ? e.charAt(_)
                : 1424 <= _ && _ <= 1524
                ? 'R'
                : 1536 <= _ && _ <= 1785
                ? i.charAt(_ - 1536)
                : 1774 <= _ && _ <= 2220
                ? 'r'
                : 8192 <= _ && _ <= 8203
                ? 'w'
                : _ == 8204
                ? 'b'
                : 'L';
            }
            var s = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
              c = /[stwN]/,
              p = /[LRr]/,
              m = /[Lb1n]/,
              y = /[1n]/;
            function w(_, N, D) {
              (this.level = _), (this.from = N), (this.to = D);
            }
            return function (_, N) {
              var D = N == 'ltr' ? 'L' : 'R';
              if (_.length == 0 || (N == 'ltr' && !s.test(_))) return !1;
              for (var B = _.length, H = [], Z = 0; Z < B; ++Z)
                H.push(a(_.charCodeAt(Z)));
              for (var rt = 0, pt = D; rt < B; ++rt) {
                var yt = H[rt];
                yt == 'm' ? (H[rt] = pt) : (pt = yt);
              }
              for (var St = 0, bt = D; St < B; ++St) {
                var Et = H[St];
                Et == '1' && bt == 'r'
                  ? (H[St] = 'n')
                  : p.test(Et) && ((bt = Et), Et == 'r' && (H[St] = 'R'));
              }
              for (var Dt = 1, Pt = H[0]; Dt < B - 1; ++Dt) {
                var Ut = H[Dt];
                Ut == '+' && Pt == '1' && H[Dt + 1] == '1'
                  ? (H[Dt] = '1')
                  : Ut == ',' &&
                    Pt == H[Dt + 1] &&
                    (Pt == '1' || Pt == 'n') &&
                    (H[Dt] = Pt),
                  (Pt = Ut);
              }
              for (var ge = 0; ge < B; ++ge) {
                var He = H[ge];
                if (He == ',') H[ge] = 'N';
                else if (He == '%') {
                  var Se = void 0;
                  for (Se = ge + 1; Se < B && H[Se] == '%'; ++Se);
                  for (
                    var xn =
                        (ge && H[ge - 1] == '!') || (Se < B && H[Se] == '1')
                          ? '1'
                          : 'N',
                      cn = ge;
                    cn < Se;
                    ++cn
                  )
                    H[cn] = xn;
                  ge = Se - 1;
                }
              }
              for (var Me = 0, un = D; Me < B; ++Me) {
                var Ue = H[Me];
                un == 'L' && Ue == '1'
                  ? (H[Me] = 'L')
                  : p.test(Ue) && (un = Ue);
              }
              for (var De = 0; De < B; ++De)
                if (c.test(H[De])) {
                  var Ne = void 0;
                  for (Ne = De + 1; Ne < B && c.test(H[Ne]); ++Ne);
                  for (
                    var Te = (De ? H[De - 1] : D) == 'L',
                      fn = (Ne < B ? H[Ne] : D) == 'L',
                      No = Te == fn ? (Te ? 'L' : 'R') : D,
                      ai = De;
                    ai < Ne;
                    ++ai
                  )
                    H[ai] = No;
                  De = Ne - 1;
                }
              for (var Xe = [], cr, Be = 0; Be < B; )
                if (m.test(H[Be])) {
                  var Pu = Be;
                  for (++Be; Be < B && m.test(H[Be]); ++Be);
                  Xe.push(new w(0, Pu, Be));
                } else {
                  var Mr = Be,
                    zi = Xe.length,
                    Fi = N == 'rtl' ? 1 : 0;
                  for (++Be; Be < B && H[Be] != 'L'; ++Be);
                  for (var en = Mr; en < Be; )
                    if (y.test(H[en])) {
                      Mr < en &&
                        (Xe.splice(zi, 0, new w(1, Mr, en)), (zi += Fi));
                      var Po = en;
                      for (++en; en < Be && y.test(H[en]); ++en);
                      Xe.splice(zi, 0, new w(2, Po, en)), (zi += Fi), (Mr = en);
                    } else ++en;
                  Mr < Be && Xe.splice(zi, 0, new w(1, Mr, Be));
                }
              return (
                N == 'ltr' &&
                  (Xe[0].level == 1 &&
                    (cr = _.match(/^\s+/)) &&
                    ((Xe[0].from = cr[0].length),
                    Xe.unshift(new w(0, 0, cr[0].length))),
                  st(Xe).level == 1 &&
                    (cr = _.match(/\s+$/)) &&
                    ((st(Xe).to -= cr[0].length),
                    Xe.push(new w(0, B - cr[0].length, B)))),
                N == 'rtl' ? Xe.reverse() : Xe
              );
            };
          })();
          function ye(e, i) {
            var a = e.order;
            return a == null && (a = e.order = co(e.text, i)), a;
          }
          var on = [],
            wt = function (e, i, a) {
              if (e.addEventListener) e.addEventListener(i, a, !1);
              else if (e.attachEvent) e.attachEvent('on' + i, a);
              else {
                var s = e._handlers || (e._handlers = {});
                s[i] = (s[i] || on).concat(a);
              }
            };
          function fs(e, i) {
            return (e._handlers && e._handlers[i]) || on;
          }
          function Ge(e, i, a) {
            if (e.removeEventListener) e.removeEventListener(i, a, !1);
            else if (e.detachEvent) e.detachEvent('on' + i, a);
            else {
              var s = e._handlers,
                c = s && s[i];
              if (c) {
                var p = Tt(c, a);
                p > -1 && (s[i] = c.slice(0, p).concat(c.slice(p + 1)));
              }
            }
          }
          function me(e, i) {
            var a = fs(e, i);
            if (a.length)
              for (
                var s = Array.prototype.slice.call(arguments, 2), c = 0;
                c < a.length;
                ++c
              )
                a[c].apply(null, s);
          }
          function ke(e, i, a) {
            return (
              typeof i == 'string' &&
                (i = {
                  type: i,
                  preventDefault: function () {
                    this.defaultPrevented = !0;
                  },
                }),
              me(e, a || i.type, e, i),
              hs(i) || i.codemirrorIgnore
            );
          }
          function Pa(e) {
            var i = e._handlers && e._handlers.cursorActivity;
            if (i)
              for (
                var a =
                    e.curOp.cursorActivityHandlers ||
                    (e.curOp.cursorActivityHandlers = []),
                  s = 0;
                s < i.length;
                ++s
              )
                Tt(a, i[s]) == -1 && a.push(i[s]);
          }
          function Je(e, i) {
            return fs(e, i).length > 0;
          }
          function Qe(e) {
            (e.prototype.on = function (i, a) {
              wt(this, i, a);
            }),
              (e.prototype.off = function (i, a) {
                Ge(this, i, a);
              });
          }
          function Ve(e) {
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
          }
          function Li(e) {
            e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
          }
          function hs(e) {
            return e.defaultPrevented != null
              ? e.defaultPrevented
              : e.returnValue == !1;
          }
          function xr(e) {
            Ve(e), Li(e);
          }
          function sn(e) {
            return e.target || e.srcElement;
          }
          function ds(e) {
            var i = e.which;
            return (
              i == null &&
                (e.button & 1
                  ? (i = 1)
                  : e.button & 2
                  ? (i = 3)
                  : e.button & 4 && (i = 2)),
              G && e.ctrlKey && i == 1 && (i = 3),
              i
            );
          }
          var Ic = (function () {
              if (d && g < 9) return !1;
              var e = k('div');
              return 'draggable' in e || 'dragDrop' in e;
            })(),
            zn;
          function qc(e) {
            if (zn == null) {
              var i = k('span', '​');
              z(e, k('span', [i, document.createTextNode('x')])),
                e.firstChild.offsetHeight != 0 &&
                  (zn =
                    i.offsetWidth <= 1 && i.offsetHeight > 2 && !(d && g < 8));
            }
            var a = zn
              ? k('span', '​')
              : k(
                  'span',
                  ' ',
                  null,
                  'display: inline-block; width: 1px; margin-right: -1px',
                );
            return a.setAttribute('cm-text', ''), a;
          }
          var uo;
          function Oa(e) {
            if (uo != null) return uo;
            var i = z(e, document.createTextNode('AخA')),
              a = W(i, 0, 1).getBoundingClientRect(),
              s = W(i, 1, 2).getBoundingClientRect();
            return (
              j(e), !a || a.left == a.right ? !1 : (uo = s.right - a.right < 3)
            );
          }
          var ps =
              `

b`.split(/\n/).length != 3
                ? function (e) {
                    for (var i = 0, a = [], s = e.length; i <= s; ) {
                      var c = e.indexOf(
                        `
`,
                        i,
                      );
                      c == -1 && (c = e.length);
                      var p = e.slice(i, e.charAt(c - 1) == '\r' ? c - 1 : c),
                        m = p.indexOf('\r');
                      m != -1
                        ? (a.push(p.slice(0, m)), (i += m + 1))
                        : (a.push(p), (i = c + 1));
                    }
                    return a;
                  }
                : function (e) {
                    return e.split(/\r\n?|\n/);
                  },
            Xr = window.getSelection
              ? function (e) {
                  try {
                    return e.selectionStart != e.selectionEnd;
                  } catch {
                    return !1;
                  }
                }
              : function (e) {
                  var i;
                  try {
                    i = e.ownerDocument.selection.createRange();
                  } catch {}
                  return !i || i.parentElement() != e
                    ? !1
                    : i.compareEndPoints('StartToEnd', i) != 0;
                },
            rr = (function () {
              var e = k('div');
              return 'oncopy' in e
                ? !0
                : (e.setAttribute('oncopy', 'return;'),
                  typeof e.oncopy == 'function');
            })(),
            ir = null;
          function $a(e) {
            if (ir != null) return ir;
            var i = z(e, k('span', 'x')),
              a = i.getBoundingClientRect(),
              s = W(i, 0, 1).getBoundingClientRect();
            return (ir = Math.abs(a.left - s.left) > 1);
          }
          var Wn = {},
            Yr = {};
          function Da(e, i) {
            arguments.length > 2 &&
              (i.dependencies = Array.prototype.slice.call(arguments, 2)),
              (Wn[e] = i);
          }
          function fo(e, i) {
            Yr[e] = i;
          }
          function bn(e) {
            if (typeof e == 'string' && Yr.hasOwnProperty(e)) e = Yr[e];
            else if (
              e &&
              typeof e.name == 'string' &&
              Yr.hasOwnProperty(e.name)
            ) {
              var i = Yr[e.name];
              typeof i == 'string' && (i = { name: i }),
                (e = $t(i, e)),
                (e.name = i.name);
            } else {
              if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
                return bn('application/xml');
              if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
                return bn('application/json');
            }
            return typeof e == 'string' ? { name: e } : e || { name: 'null' };
          }
          function _r(e, i) {
            i = bn(i);
            var a = Wn[i.name];
            if (!a) return _r(e, 'text/plain');
            var s = a(e, i);
            if (Zr.hasOwnProperty(i.name)) {
              var c = Zr[i.name];
              for (var p in c)
                c.hasOwnProperty(p) &&
                  (s.hasOwnProperty(p) && (s['_' + p] = s[p]), (s[p] = c[p]));
            }
            if (
              ((s.name = i.name),
              i.helperType && (s.helperType = i.helperType),
              i.modeProps)
            )
              for (var m in i.modeProps) s[m] = i.modeProps[m];
            return s;
          }
          var Zr = {};
          function Ra(e, i) {
            var a = Zr.hasOwnProperty(e) ? Zr[e] : (Zr[e] = {});
            tt(i, a);
          }
          function Sr(e, i) {
            if (i === !0) return i;
            if (e.copyState) return e.copyState(i);
            var a = {};
            for (var s in i) {
              var c = i[s];
              c instanceof Array && (c = c.concat([])), (a[s] = c);
            }
            return a;
          }
          function Jr(e, i) {
            for (
              var a;
              e.innerMode && ((a = e.innerMode(i)), !(!a || a.mode == e));

            )
              (i = a.state), (e = a.mode);
            return a || { mode: e, state: i };
          }
          function gs(e, i, a) {
            return e.startState ? e.startState(i, a) : !0;
          }
          var Ce = function (e, i, a) {
            (this.pos = this.start = 0),
              (this.string = e),
              (this.tabSize = i || 8),
              (this.lastColumnPos = this.lastColumnValue = 0),
              (this.lineStart = 0),
              (this.lineOracle = a);
          };
          (Ce.prototype.eol = function () {
            return this.pos >= this.string.length;
          }),
            (Ce.prototype.sol = function () {
              return this.pos == this.lineStart;
            }),
            (Ce.prototype.peek = function () {
              return this.string.charAt(this.pos) || void 0;
            }),
            (Ce.prototype.next = function () {
              if (this.pos < this.string.length)
                return this.string.charAt(this.pos++);
            }),
            (Ce.prototype.eat = function (e) {
              var i = this.string.charAt(this.pos),
                a;
              if (
                (typeof e == 'string'
                  ? (a = i == e)
                  : (a = i && (e.test ? e.test(i) : e(i))),
                a)
              )
                return ++this.pos, i;
            }),
            (Ce.prototype.eatWhile = function (e) {
              for (var i = this.pos; this.eat(e); );
              return this.pos > i;
            }),
            (Ce.prototype.eatSpace = function () {
              for (
                var e = this.pos;
                /[\s\u00a0]/.test(this.string.charAt(this.pos));

              )
                ++this.pos;
              return this.pos > e;
            }),
            (Ce.prototype.skipToEnd = function () {
              this.pos = this.string.length;
            }),
            (Ce.prototype.skipTo = function (e) {
              var i = this.string.indexOf(e, this.pos);
              if (i > -1) return (this.pos = i), !0;
            }),
            (Ce.prototype.backUp = function (e) {
              this.pos -= e;
            }),
            (Ce.prototype.column = function () {
              return (
                this.lastColumnPos < this.start &&
                  ((this.lastColumnValue = X(
                    this.string,
                    this.start,
                    this.tabSize,
                    this.lastColumnPos,
                    this.lastColumnValue,
                  )),
                  (this.lastColumnPos = this.start)),
                this.lastColumnValue -
                  (this.lineStart
                    ? X(this.string, this.lineStart, this.tabSize)
                    : 0)
              );
            }),
            (Ce.prototype.indentation = function () {
              return (
                X(this.string, null, this.tabSize) -
                (this.lineStart
                  ? X(this.string, this.lineStart, this.tabSize)
                  : 0)
              );
            }),
            (Ce.prototype.match = function (e, i, a) {
              if (typeof e == 'string') {
                var s = function (m) {
                    return a ? m.toLowerCase() : m;
                  },
                  c = this.string.substr(this.pos, e.length);
                if (s(c) == s(e)) return i !== !1 && (this.pos += e.length), !0;
              } else {
                var p = this.string.slice(this.pos).match(e);
                return p && p.index > 0
                  ? null
                  : (p && i !== !1 && (this.pos += p[0].length), p);
              }
            }),
            (Ce.prototype.current = function () {
              return this.string.slice(this.start, this.pos);
            }),
            (Ce.prototype.hideFirstChars = function (e, i) {
              this.lineStart += e;
              try {
                return i();
              } finally {
                this.lineStart -= e;
              }
            }),
            (Ce.prototype.lookAhead = function (e) {
              var i = this.lineOracle;
              return i && i.lookAhead(e);
            }),
            (Ce.prototype.baseToken = function () {
              var e = this.lineOracle;
              return e && e.baseToken(this.pos);
            });
          function Mt(e, i) {
            if (((i -= e.first), i < 0 || i >= e.size))
              throw new Error(
                'There is no line ' + (i + e.first) + ' in the document.',
              );
            for (var a = e; !a.lines; )
              for (var s = 0; ; ++s) {
                var c = a.children[s],
                  p = c.chunkSize();
                if (i < p) {
                  a = c;
                  break;
                }
                i -= p;
              }
            return a.lines[i];
          }
          function kr(e, i, a) {
            var s = [],
              c = i.line;
            return (
              e.iter(i.line, a.line + 1, function (p) {
                var m = p.text;
                c == a.line && (m = m.slice(0, a.ch)),
                  c == i.line && (m = m.slice(i.ch)),
                  s.push(m),
                  ++c;
              }),
              s
            );
          }
          function ho(e, i, a) {
            var s = [];
            return (
              e.iter(i, a, function (c) {
                s.push(c.text);
              }),
              s
            );
          }
          function Fn(e, i) {
            var a = i - e.height;
            if (a) for (var s = e; s; s = s.parent) s.height += a;
          }
          function ae(e) {
            if (e.parent == null) return null;
            for (
              var i = e.parent, a = Tt(i.lines, e), s = i.parent;
              s;
              i = s, s = s.parent
            )
              for (var c = 0; s.children[c] != i; ++c)
                a += s.children[c].chunkSize();
            return a + i.first;
          }
          function or(e, i) {
            var a = e.first;
            t: do {
              for (var s = 0; s < e.children.length; ++s) {
                var c = e.children[s],
                  p = c.height;
                if (i < p) {
                  e = c;
                  continue t;
                }
                (i -= p), (a += c.chunkSize());
              }
              return a;
            } while (!e.lines);
            for (var m = 0; m < e.lines.length; ++m) {
              var y = e.lines[m],
                w = y.height;
              if (i < w) break;
              i -= w;
            }
            return a + m;
          }
          function C(e, i) {
            return i >= e.first && i < e.first + e.size;
          }
          function R(e, i) {
            return String(e.lineNumberFormatter(i + e.firstLineNumber));
          }
          function F(e, i, a) {
            if ((a === void 0 && (a = null), !(this instanceof F)))
              return new F(e, i, a);
            (this.line = e), (this.ch = i), (this.sticky = a);
          }
          function Y(e, i) {
            return e.line - i.line || e.ch - i.ch;
          }
          function qt(e, i) {
            return e.sticky == i.sticky && Y(e, i) == 0;
          }
          function Kt(e) {
            return F(e.line, e.ch);
          }
          function ie(e, i) {
            return Y(e, i) < 0 ? i : e;
          }
          function $e(e, i) {
            return Y(e, i) < 0 ? e : i;
          }
          function Mn(e, i) {
            return Math.max(e.first, Math.min(i, e.first + e.size - 1));
          }
          function Ht(e, i) {
            if (i.line < e.first) return F(e.first, 0);
            var a = e.first + e.size - 1;
            return i.line > a
              ? F(a, Mt(e, a).text.length)
              : Eb(i, Mt(e, i.line).text.length);
          }
          function Eb(e, i) {
            var a = e.ch;
            return a == null || a > i ? F(e.line, i) : a < 0 ? F(e.line, 0) : e;
          }
          function Gh(e, i) {
            for (var a = [], s = 0; s < i.length; s++) a[s] = Ht(e, i[s]);
            return a;
          }
          var za = function (e, i) {
              (this.state = e), (this.lookAhead = i);
            },
            sr = function (e, i, a, s) {
              (this.state = i),
                (this.doc = e),
                (this.line = a),
                (this.maxLookAhead = s || 0),
                (this.baseTokens = null),
                (this.baseTokenPos = 1);
            };
          (sr.prototype.lookAhead = function (e) {
            var i = this.doc.getLine(this.line + e);
            return (
              i != null && e > this.maxLookAhead && (this.maxLookAhead = e), i
            );
          }),
            (sr.prototype.baseToken = function (e) {
              if (!this.baseTokens) return null;
              for (; this.baseTokens[this.baseTokenPos] <= e; )
                this.baseTokenPos += 2;
              var i = this.baseTokens[this.baseTokenPos + 1];
              return {
                type: i && i.replace(/( |^)overlay .*/, ''),
                size: this.baseTokens[this.baseTokenPos] - e,
              };
            }),
            (sr.prototype.nextLine = function () {
              this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
            }),
            (sr.fromSaved = function (e, i, a) {
              return i instanceof za
                ? new sr(e, Sr(e.mode, i.state), a, i.lookAhead)
                : new sr(e, Sr(e.mode, i), a);
            }),
            (sr.prototype.save = function (e) {
              var i = e !== !1 ? Sr(this.doc.mode, this.state) : this.state;
              return this.maxLookAhead > 0 ? new za(i, this.maxLookAhead) : i;
            });
          function Vh(e, i, a, s) {
            var c = [e.state.modeGen],
              p = {};
            Qh(
              e,
              i.text,
              e.doc.mode,
              a,
              function (_, N) {
                return c.push(_, N);
              },
              p,
              s,
            );
            for (
              var m = a.state,
                y = function (_) {
                  a.baseTokens = c;
                  var N = e.state.overlays[_],
                    D = 1,
                    B = 0;
                  (a.state = !0),
                    Qh(
                      e,
                      i.text,
                      N.mode,
                      a,
                      function (H, Z) {
                        for (var rt = D; B < H; ) {
                          var pt = c[D];
                          pt > H && c.splice(D, 1, H, c[D + 1], pt),
                            (D += 2),
                            (B = Math.min(H, pt));
                        }
                        if (Z)
                          if (N.opaque)
                            c.splice(rt, D - rt, H, 'overlay ' + Z),
                              (D = rt + 2);
                          else
                            for (; rt < D; rt += 2) {
                              var yt = c[rt + 1];
                              c[rt + 1] = (yt ? yt + ' ' : '') + 'overlay ' + Z;
                            }
                      },
                      p,
                    ),
                    (a.state = m),
                    (a.baseTokens = null),
                    (a.baseTokenPos = 1);
                },
                w = 0;
              w < e.state.overlays.length;
              ++w
            )
              y(w);
            return { styles: c, classes: p.bgClass || p.textClass ? p : null };
          }
          function Kh(e, i, a) {
            if (!i.styles || i.styles[0] != e.state.modeGen) {
              var s = vs(e, ae(i)),
                c =
                  i.text.length > e.options.maxHighlightLength &&
                  Sr(e.doc.mode, s.state),
                p = Vh(e, i, s);
              c && (s.state = c),
                (i.stateAfter = s.save(!c)),
                (i.styles = p.styles),
                p.classes
                  ? (i.styleClasses = p.classes)
                  : i.styleClasses && (i.styleClasses = null),
                a === e.doc.highlightFrontier &&
                  (e.doc.modeFrontier = Math.max(
                    e.doc.modeFrontier,
                    ++e.doc.highlightFrontier,
                  ));
            }
            return i.styles;
          }
          function vs(e, i, a) {
            var s = e.doc,
              c = e.display;
            if (!s.mode.startState) return new sr(s, !0, i);
            var p = Lb(e, i, a),
              m = p > s.first && Mt(s, p - 1).stateAfter,
              y = m ? sr.fromSaved(s, m, p) : new sr(s, gs(s.mode), p);
            return (
              s.iter(p, i, function (w) {
                Hc(e, w.text, y);
                var _ = y.line;
                (w.stateAfter =
                  _ == i - 1 || _ % 5 == 0 || (_ >= c.viewFrom && _ < c.viewTo)
                    ? y.save()
                    : null),
                  y.nextLine();
              }),
              a && (s.modeFrontier = y.line),
              y
            );
          }
          function Hc(e, i, a, s) {
            var c = e.doc.mode,
              p = new Ce(i, e.options.tabSize, a);
            for (
              p.start = p.pos = s || 0, i == '' && Xh(c, a.state);
              !p.eol();

            )
              Bc(c, p, a.state), (p.start = p.pos);
          }
          function Xh(e, i) {
            if (e.blankLine) return e.blankLine(i);
            if (e.innerMode) {
              var a = Jr(e, i);
              if (a.mode.blankLine) return a.mode.blankLine(a.state);
            }
          }
          function Bc(e, i, a, s) {
            for (var c = 0; c < 10; c++) {
              s && (s[0] = Jr(e, a).mode);
              var p = e.token(i, a);
              if (i.pos > i.start) return p;
            }
            throw new Error('Mode ' + e.name + ' failed to advance stream.');
          }
          var Yh = function (e, i, a) {
            (this.start = e.start),
              (this.end = e.pos),
              (this.string = e.current()),
              (this.type = i || null),
              (this.state = a);
          };
          function Zh(e, i, a, s) {
            var c = e.doc,
              p = c.mode,
              m;
            i = Ht(c, i);
            var y = Mt(c, i.line),
              w = vs(e, i.line, a),
              _ = new Ce(y.text, e.options.tabSize, w),
              N;
            for (s && (N = []); (s || _.pos < i.ch) && !_.eol(); )
              (_.start = _.pos),
                (m = Bc(p, _, w.state)),
                s && N.push(new Yh(_, m, Sr(c.mode, w.state)));
            return s ? N : new Yh(_, m, w.state);
          }
          function Jh(e, i) {
            if (e)
              for (;;) {
                var a = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!a) break;
                e = e.slice(0, a.index) + e.slice(a.index + a[0].length);
                var s = a[1] ? 'bgClass' : 'textClass';
                i[s] == null
                  ? (i[s] = a[2])
                  : new RegExp('(?:^|\\s)' + a[2] + '(?:$|\\s)').test(i[s]) ||
                    (i[s] += ' ' + a[2]);
              }
            return e;
          }
          function Qh(e, i, a, s, c, p, m) {
            var y = a.flattenSpans;
            y == null && (y = e.options.flattenSpans);
            var w = 0,
              _ = null,
              N = new Ce(i, e.options.tabSize, s),
              D,
              B = e.options.addModeClass && [null];
            for (i == '' && Jh(Xh(a, s.state), p); !N.eol(); ) {
              if (
                (N.pos > e.options.maxHighlightLength
                  ? ((y = !1),
                    m && Hc(e, i, s, N.pos),
                    (N.pos = i.length),
                    (D = null))
                  : (D = Jh(Bc(a, N, s.state, B), p)),
                B)
              ) {
                var H = B[0].name;
                H && (D = 'm-' + (D ? H + ' ' + D : H));
              }
              if (!y || _ != D) {
                for (; w < N.start; ) (w = Math.min(N.start, w + 5e3)), c(w, _);
                _ = D;
              }
              N.start = N.pos;
            }
            for (; w < N.pos; ) {
              var Z = Math.min(N.pos, w + 5e3);
              c(Z, _), (w = Z);
            }
          }
          function Lb(e, i, a) {
            for (
              var s,
                c,
                p = e.doc,
                m = a ? -1 : i - (e.doc.mode.innerMode ? 1e3 : 100),
                y = i;
              y > m;
              --y
            ) {
              if (y <= p.first) return p.first;
              var w = Mt(p, y - 1),
                _ = w.stateAfter;
              if (
                _ &&
                (!a ||
                  y + (_ instanceof za ? _.lookAhead : 0) <= p.modeFrontier)
              )
                return y;
              var N = X(w.text, null, e.options.tabSize);
              (c == null || s > N) && ((c = y - 1), (s = N));
            }
            return c;
          }
          function Ab(e, i) {
            if (
              ((e.modeFrontier = Math.min(e.modeFrontier, i)),
              !(e.highlightFrontier < i - 10))
            ) {
              for (var a = e.first, s = i - 1; s > a; s--) {
                var c = Mt(e, s).stateAfter;
                if (c && (!(c instanceof za) || s + c.lookAhead < i)) {
                  a = s + 1;
                  break;
                }
              }
              e.highlightFrontier = Math.min(e.highlightFrontier, a);
            }
          }
          var td = !1,
            Cr = !1;
          function Mb() {
            td = !0;
          }
          function Nb() {
            Cr = !0;
          }
          function Fa(e, i, a) {
            (this.marker = e), (this.from = i), (this.to = a);
          }
          function ms(e, i) {
            if (e)
              for (var a = 0; a < e.length; ++a) {
                var s = e[a];
                if (s.marker == i) return s;
              }
          }
          function Pb(e, i) {
            for (var a, s = 0; s < e.length; ++s)
              e[s] != i && (a || (a = [])).push(e[s]);
            return a;
          }
          function Ob(e, i, a) {
            var s =
              a &&
              window.WeakSet &&
              (a.markedSpans || (a.markedSpans = new WeakSet()));
            s && e.markedSpans && s.has(e.markedSpans)
              ? e.markedSpans.push(i)
              : ((e.markedSpans = e.markedSpans
                  ? e.markedSpans.concat([i])
                  : [i]),
                s && s.add(e.markedSpans)),
              i.marker.attachLine(e);
          }
          function $b(e, i, a) {
            var s;
            if (e)
              for (var c = 0; c < e.length; ++c) {
                var p = e[c],
                  m = p.marker,
                  y =
                    p.from == null ||
                    (m.inclusiveLeft ? p.from <= i : p.from < i);
                if (
                  y ||
                  (p.from == i &&
                    m.type == 'bookmark' &&
                    (!a || !p.marker.insertLeft))
                ) {
                  var w =
                    p.to == null || (m.inclusiveRight ? p.to >= i : p.to > i);
                  (s || (s = [])).push(new Fa(m, p.from, w ? null : p.to));
                }
              }
            return s;
          }
          function Db(e, i, a) {
            var s;
            if (e)
              for (var c = 0; c < e.length; ++c) {
                var p = e[c],
                  m = p.marker,
                  y = p.to == null || (m.inclusiveRight ? p.to >= i : p.to > i);
                if (
                  y ||
                  (p.from == i &&
                    m.type == 'bookmark' &&
                    (!a || p.marker.insertLeft))
                ) {
                  var w =
                    p.from == null ||
                    (m.inclusiveLeft ? p.from <= i : p.from < i);
                  (s || (s = [])).push(
                    new Fa(
                      m,
                      w ? null : p.from - i,
                      p.to == null ? null : p.to - i,
                    ),
                  );
                }
              }
            return s;
          }
          function Wc(e, i) {
            if (i.full) return null;
            var a = C(e, i.from.line) && Mt(e, i.from.line).markedSpans,
              s = C(e, i.to.line) && Mt(e, i.to.line).markedSpans;
            if (!a && !s) return null;
            var c = i.from.ch,
              p = i.to.ch,
              m = Y(i.from, i.to) == 0,
              y = $b(a, c, m),
              w = Db(s, p, m),
              _ = i.text.length == 1,
              N = st(i.text).length + (_ ? c : 0);
            if (y)
              for (var D = 0; D < y.length; ++D) {
                var B = y[D];
                if (B.to == null) {
                  var H = ms(w, B.marker);
                  H ? _ && (B.to = H.to == null ? null : H.to + N) : (B.to = c);
                }
              }
            if (w)
              for (var Z = 0; Z < w.length; ++Z) {
                var rt = w[Z];
                if ((rt.to != null && (rt.to += N), rt.from == null)) {
                  var pt = ms(y, rt.marker);
                  pt || ((rt.from = N), _ && (y || (y = [])).push(rt));
                } else (rt.from += N), _ && (y || (y = [])).push(rt);
              }
            y && (y = ed(y)), w && w != y && (w = ed(w));
            var yt = [y];
            if (!_) {
              var St = i.text.length - 2,
                bt;
              if (St > 0 && y)
                for (var Et = 0; Et < y.length; ++Et)
                  y[Et].to == null &&
                    (bt || (bt = [])).push(new Fa(y[Et].marker, null, null));
              for (var Dt = 0; Dt < St; ++Dt) yt.push(bt);
              yt.push(w);
            }
            return yt;
          }
          function ed(e) {
            for (var i = 0; i < e.length; ++i) {
              var a = e[i];
              a.from != null &&
                a.from == a.to &&
                a.marker.clearWhenEmpty !== !1 &&
                e.splice(i--, 1);
            }
            return e.length ? e : null;
          }
          function Rb(e, i, a) {
            var s = null;
            if (
              (e.iter(i.line, a.line + 1, function (H) {
                if (H.markedSpans)
                  for (var Z = 0; Z < H.markedSpans.length; ++Z) {
                    var rt = H.markedSpans[Z].marker;
                    rt.readOnly &&
                      (!s || Tt(s, rt) == -1) &&
                      (s || (s = [])).push(rt);
                  }
              }),
              !s)
            )
              return null;
            for (var c = [{ from: i, to: a }], p = 0; p < s.length; ++p)
              for (var m = s[p], y = m.find(0), w = 0; w < c.length; ++w) {
                var _ = c[w];
                if (!(Y(_.to, y.from) < 0 || Y(_.from, y.to) > 0)) {
                  var N = [w, 1],
                    D = Y(_.from, y.from),
                    B = Y(_.to, y.to);
                  (D < 0 || (!m.inclusiveLeft && !D)) &&
                    N.push({ from: _.from, to: y.from }),
                    (B > 0 || (!m.inclusiveRight && !B)) &&
                      N.push({ from: y.to, to: _.to }),
                    c.splice.apply(c, N),
                    (w += N.length - 3);
                }
              }
            return c;
          }
          function nd(e) {
            var i = e.markedSpans;
            if (i) {
              for (var a = 0; a < i.length; ++a) i[a].marker.detachLine(e);
              e.markedSpans = null;
            }
          }
          function rd(e, i) {
            if (i) {
              for (var a = 0; a < i.length; ++a) i[a].marker.attachLine(e);
              e.markedSpans = i;
            }
          }
          function Ia(e) {
            return e.inclusiveLeft ? -1 : 0;
          }
          function qa(e) {
            return e.inclusiveRight ? 1 : 0;
          }
          function Uc(e, i) {
            var a = e.lines.length - i.lines.length;
            if (a != 0) return a;
            var s = e.find(),
              c = i.find(),
              p = Y(s.from, c.from) || Ia(e) - Ia(i);
            if (p) return -p;
            var m = Y(s.to, c.to) || qa(e) - qa(i);
            return m || i.id - e.id;
          }
          function id(e, i) {
            var a = Cr && e.markedSpans,
              s;
            if (a)
              for (var c = void 0, p = 0; p < a.length; ++p)
                (c = a[p]),
                  c.marker.collapsed &&
                    (i ? c.from : c.to) == null &&
                    (!s || Uc(s, c.marker) < 0) &&
                    (s = c.marker);
            return s;
          }
          function od(e) {
            return id(e, !0);
          }
          function Ha(e) {
            return id(e, !1);
          }
          function zb(e, i) {
            var a = Cr && e.markedSpans,
              s;
            if (a)
              for (var c = 0; c < a.length; ++c) {
                var p = a[c];
                p.marker.collapsed &&
                  (p.from == null || p.from < i) &&
                  (p.to == null || p.to > i) &&
                  (!s || Uc(s, p.marker) < 0) &&
                  (s = p.marker);
              }
            return s;
          }
          function sd(e, i, a, s, c) {
            var p = Mt(e, i),
              m = Cr && p.markedSpans;
            if (m)
              for (var y = 0; y < m.length; ++y) {
                var w = m[y];
                if (w.marker.collapsed) {
                  var _ = w.marker.find(0),
                    N = Y(_.from, a) || Ia(w.marker) - Ia(c),
                    D = Y(_.to, s) || qa(w.marker) - qa(c);
                  if (
                    !((N >= 0 && D <= 0) || (N <= 0 && D >= 0)) &&
                    ((N <= 0 &&
                      (w.marker.inclusiveRight && c.inclusiveLeft
                        ? Y(_.to, a) >= 0
                        : Y(_.to, a) > 0)) ||
                      (N >= 0 &&
                        (w.marker.inclusiveRight && c.inclusiveLeft
                          ? Y(_.from, s) <= 0
                          : Y(_.from, s) < 0)))
                  )
                    return !0;
                }
              }
          }
          function Un(e) {
            for (var i; (i = od(e)); ) e = i.find(-1, !0).line;
            return e;
          }
          function Fb(e) {
            for (var i; (i = Ha(e)); ) e = i.find(1, !0).line;
            return e;
          }
          function Ib(e) {
            for (var i, a; (i = Ha(e)); )
              (e = i.find(1, !0).line), (a || (a = [])).push(e);
            return a;
          }
          function jc(e, i) {
            var a = Mt(e, i),
              s = Un(a);
            return a == s ? i : ae(s);
          }
          function ad(e, i) {
            if (i > e.lastLine()) return i;
            var a = Mt(e, i),
              s;
            if (!Qr(e, a)) return i;
            for (; (s = Ha(a)); ) a = s.find(1, !0).line;
            return ae(a) + 1;
          }
          function Qr(e, i) {
            var a = Cr && i.markedSpans;
            if (a) {
              for (var s = void 0, c = 0; c < a.length; ++c)
                if (((s = a[c]), !!s.marker.collapsed)) {
                  if (s.from == null) return !0;
                  if (
                    !s.marker.widgetNode &&
                    s.from == 0 &&
                    s.marker.inclusiveLeft &&
                    Gc(e, i, s)
                  )
                    return !0;
                }
            }
          }
          function Gc(e, i, a) {
            if (a.to == null) {
              var s = a.marker.find(1, !0);
              return Gc(e, s.line, ms(s.line.markedSpans, a.marker));
            }
            if (a.marker.inclusiveRight && a.to == i.text.length) return !0;
            for (var c = void 0, p = 0; p < i.markedSpans.length; ++p)
              if (
                ((c = i.markedSpans[p]),
                c.marker.collapsed &&
                  !c.marker.widgetNode &&
                  c.from == a.to &&
                  (c.to == null || c.to != a.from) &&
                  (c.marker.inclusiveLeft || a.marker.inclusiveRight) &&
                  Gc(e, i, c))
              )
                return !0;
          }
          function Tr(e) {
            e = Un(e);
            for (var i = 0, a = e.parent, s = 0; s < a.lines.length; ++s) {
              var c = a.lines[s];
              if (c == e) break;
              i += c.height;
            }
            for (var p = a.parent; p; a = p, p = a.parent)
              for (var m = 0; m < p.children.length; ++m) {
                var y = p.children[m];
                if (y == a) break;
                i += y.height;
              }
            return i;
          }
          function Ba(e) {
            if (e.height == 0) return 0;
            for (var i = e.text.length, a, s = e; (a = od(s)); ) {
              var c = a.find(0, !0);
              (s = c.from.line), (i += c.from.ch - c.to.ch);
            }
            for (s = e; (a = Ha(s)); ) {
              var p = a.find(0, !0);
              (i -= s.text.length - p.from.ch),
                (s = p.to.line),
                (i += s.text.length - p.to.ch);
            }
            return i;
          }
          function Vc(e) {
            var i = e.display,
              a = e.doc;
            (i.maxLine = Mt(a, a.first)),
              (i.maxLineLength = Ba(i.maxLine)),
              (i.maxLineChanged = !0),
              a.iter(function (s) {
                var c = Ba(s);
                c > i.maxLineLength && ((i.maxLineLength = c), (i.maxLine = s));
              });
          }
          var po = function (e, i, a) {
            (this.text = e), rd(this, i), (this.height = a ? a(this) : 1);
          };
          (po.prototype.lineNo = function () {
            return ae(this);
          }),
            Qe(po);
          function qb(e, i, a, s) {
            (e.text = i),
              e.stateAfter && (e.stateAfter = null),
              e.styles && (e.styles = null),
              e.order != null && (e.order = null),
              nd(e),
              rd(e, a);
            var c = s ? s(e) : 1;
            c != e.height && Fn(e, c);
          }
          function Hb(e) {
            (e.parent = null), nd(e);
          }
          var Bb = {},
            Wb = {};
          function ld(e, i) {
            if (!e || /^\s*$/.test(e)) return null;
            var a = i.addModeClass ? Wb : Bb;
            return a[e] || (a[e] = e.replace(/\S+/g, 'cm-$&'));
          }
          function cd(e, i) {
            var a = q('span', null, null, v ? 'padding-right: .1px' : null),
              s = {
                pre: q('pre', [a], 'CodeMirror-line'),
                content: a,
                col: 0,
                pos: 0,
                cm: e,
                trailingSpace: !1,
                splitSpaces: e.getOption('lineWrapping'),
              };
            i.measure = {};
            for (var c = 0; c <= (i.rest ? i.rest.length : 0); c++) {
              var p = c ? i.rest[c - 1] : i.line,
                m = void 0;
              (s.pos = 0),
                (s.addToken = jb),
                Oa(e.display.measure) &&
                  (m = ye(p, e.doc.direction)) &&
                  (s.addToken = Vb(s.addToken, m)),
                (s.map = []);
              var y = i != e.display.externalMeasured && ae(p);
              Kb(p, s, Kh(e, p, y)),
                p.styleClasses &&
                  (p.styleClasses.bgClass &&
                    (s.bgClass = Rt(p.styleClasses.bgClass, s.bgClass || '')),
                  p.styleClasses.textClass &&
                    (s.textClass = Rt(
                      p.styleClasses.textClass,
                      s.textClass || '',
                    ))),
                s.map.length == 0 &&
                  s.map.push(
                    0,
                    0,
                    s.content.appendChild(qc(e.display.measure)),
                  ),
                c == 0
                  ? ((i.measure.map = s.map), (i.measure.cache = {}))
                  : ((i.measure.maps || (i.measure.maps = [])).push(s.map),
                    (i.measure.caches || (i.measure.caches = [])).push({}));
            }
            if (v) {
              var w = s.content.lastChild;
              (/\bcm-tab\b/.test(w.className) ||
                (w.querySelector && w.querySelector('.cm-tab'))) &&
                (s.content.className = 'cm-tab-wrap-hack');
            }
            return (
              me(e, 'renderLine', e, i.line, s.pre),
              s.pre.className &&
                (s.textClass = Rt(s.pre.className, s.textClass || '')),
              s
            );
          }
          function Ub(e) {
            var i = k('span', '•', 'cm-invalidchar');
            return (
              (i.title = '\\u' + e.charCodeAt(0).toString(16)),
              i.setAttribute('aria-label', i.title),
              i
            );
          }
          function jb(e, i, a, s, c, p, m) {
            if (i) {
              var y = e.splitSpaces ? Gb(i, e.trailingSpace) : i,
                w = e.cm.state.specialChars,
                _ = !1,
                N;
              if (!w.test(i))
                (e.col += i.length),
                  (N = document.createTextNode(y)),
                  e.map.push(e.pos, e.pos + i.length, N),
                  d && g < 9 && (_ = !0),
                  (e.pos += i.length);
              else {
                N = document.createDocumentFragment();
                for (var D = 0; ; ) {
                  w.lastIndex = D;
                  var B = w.exec(i),
                    H = B ? B.index - D : i.length - D;
                  if (H) {
                    var Z = document.createTextNode(y.slice(D, D + H));
                    d && g < 9
                      ? N.appendChild(k('span', [Z]))
                      : N.appendChild(Z),
                      e.map.push(e.pos, e.pos + H, Z),
                      (e.col += H),
                      (e.pos += H);
                  }
                  if (!B) break;
                  D += H + 1;
                  var rt = void 0;
                  if (B[0] == '	') {
                    var pt = e.cm.options.tabSize,
                      yt = pt - (e.col % pt);
                    (rt = N.appendChild(k('span', gt(yt), 'cm-tab'))),
                      rt.setAttribute('role', 'presentation'),
                      rt.setAttribute('cm-text', '	'),
                      (e.col += yt);
                  } else
                    B[0] == '\r' ||
                    B[0] ==
                      `
`
                      ? ((rt = N.appendChild(
                          k('span', B[0] == '\r' ? '␍' : '␤', 'cm-invalidchar'),
                        )),
                        rt.setAttribute('cm-text', B[0]),
                        (e.col += 1))
                      : ((rt = e.cm.options.specialCharPlaceholder(B[0])),
                        rt.setAttribute('cm-text', B[0]),
                        d && g < 9
                          ? N.appendChild(k('span', [rt]))
                          : N.appendChild(rt),
                        (e.col += 1));
                  e.map.push(e.pos, e.pos + 1, rt), e.pos++;
                }
              }
              if (
                ((e.trailingSpace = y.charCodeAt(i.length - 1) == 32),
                a || s || c || _ || p || m)
              ) {
                var St = a || '';
                s && (St += s), c && (St += c);
                var bt = k('span', [N], St, p);
                if (m)
                  for (var Et in m)
                    m.hasOwnProperty(Et) &&
                      Et != 'style' &&
                      Et != 'class' &&
                      bt.setAttribute(Et, m[Et]);
                return e.content.appendChild(bt);
              }
              e.content.appendChild(N);
            }
          }
          function Gb(e, i) {
            if (e.length > 1 && !/  /.test(e)) return e;
            for (var a = i, s = '', c = 0; c < e.length; c++) {
              var p = e.charAt(c);
              p == ' ' &&
                a &&
                (c == e.length - 1 || e.charCodeAt(c + 1) == 32) &&
                (p = ' '),
                (s += p),
                (a = p == ' ');
            }
            return s;
          }
          function Vb(e, i) {
            return function (a, s, c, p, m, y, w) {
              c = c ? c + ' cm-force-border' : 'cm-force-border';
              for (var _ = a.pos, N = _ + s.length; ; ) {
                for (
                  var D = void 0, B = 0;
                  B < i.length && ((D = i[B]), !(D.to > _ && D.from <= _));
                  B++
                );
                if (D.to >= N) return e(a, s, c, p, m, y, w);
                e(a, s.slice(0, D.to - _), c, p, null, y, w),
                  (p = null),
                  (s = s.slice(D.to - _)),
                  (_ = D.to);
              }
            };
          }
          function ud(e, i, a, s) {
            var c = !s && a.widgetNode;
            c && e.map.push(e.pos, e.pos + i, c),
              !s &&
                e.cm.display.input.needsContentAttribute &&
                (c ||
                  (c = e.content.appendChild(document.createElement('span'))),
                c.setAttribute('cm-marker', a.id)),
              c &&
                (e.cm.display.input.setUneditable(c), e.content.appendChild(c)),
              (e.pos += i),
              (e.trailingSpace = !1);
          }
          function Kb(e, i, a) {
            var s = e.markedSpans,
              c = e.text,
              p = 0;
            if (!s) {
              for (var m = 1; m < a.length; m += 2)
                i.addToken(
                  i,
                  c.slice(p, (p = a[m])),
                  ld(a[m + 1], i.cm.options),
                );
              return;
            }
            for (
              var y = c.length,
                w = 0,
                _ = 1,
                N = '',
                D,
                B,
                H = 0,
                Z,
                rt,
                pt,
                yt,
                St;
              ;

            ) {
              if (H == w) {
                (Z = rt = pt = B = ''), (St = null), (yt = null), (H = 1 / 0);
                for (var bt = [], Et = void 0, Dt = 0; Dt < s.length; ++Dt) {
                  var Pt = s[Dt],
                    Ut = Pt.marker;
                  if (Ut.type == 'bookmark' && Pt.from == w && Ut.widgetNode)
                    bt.push(Ut);
                  else if (
                    Pt.from <= w &&
                    (Pt.to == null ||
                      Pt.to > w ||
                      (Ut.collapsed && Pt.to == w && Pt.from == w))
                  ) {
                    if (
                      (Pt.to != null &&
                        Pt.to != w &&
                        H > Pt.to &&
                        ((H = Pt.to), (rt = '')),
                      Ut.className && (Z += ' ' + Ut.className),
                      Ut.css && (B = (B ? B + ';' : '') + Ut.css),
                      Ut.startStyle &&
                        Pt.from == w &&
                        (pt += ' ' + Ut.startStyle),
                      Ut.endStyle &&
                        Pt.to == H &&
                        (Et || (Et = [])).push(Ut.endStyle, Pt.to),
                      Ut.title && ((St || (St = {})).title = Ut.title),
                      Ut.attributes)
                    )
                      for (var ge in Ut.attributes)
                        (St || (St = {}))[ge] = Ut.attributes[ge];
                    Ut.collapsed && (!yt || Uc(yt.marker, Ut) < 0) && (yt = Pt);
                  } else Pt.from > w && H > Pt.from && (H = Pt.from);
                }
                if (Et)
                  for (var He = 0; He < Et.length; He += 2)
                    Et[He + 1] == H && (rt += ' ' + Et[He]);
                if (!yt || yt.from == w)
                  for (var Se = 0; Se < bt.length; ++Se) ud(i, 0, bt[Se]);
                if (yt && (yt.from || 0) == w) {
                  if (
                    (ud(
                      i,
                      (yt.to == null ? y + 1 : yt.to) - w,
                      yt.marker,
                      yt.from == null,
                    ),
                    yt.to == null)
                  )
                    return;
                  yt.to == w && (yt = !1);
                }
              }
              if (w >= y) break;
              for (var xn = Math.min(y, H); ; ) {
                if (N) {
                  var cn = w + N.length;
                  if (!yt) {
                    var Me = cn > xn ? N.slice(0, xn - w) : N;
                    i.addToken(
                      i,
                      Me,
                      D ? D + Z : Z,
                      pt,
                      w + Me.length == H ? rt : '',
                      B,
                      St,
                    );
                  }
                  if (cn >= xn) {
                    (N = N.slice(xn - w)), (w = xn);
                    break;
                  }
                  (w = cn), (pt = '');
                }
                (N = c.slice(p, (p = a[_++]))), (D = ld(a[_++], i.cm.options));
              }
            }
          }
          function fd(e, i, a) {
            (this.line = i),
              (this.rest = Ib(i)),
              (this.size = this.rest ? ae(st(this.rest)) - a + 1 : 1),
              (this.node = this.text = null),
              (this.hidden = Qr(e, i));
          }
          function Wa(e, i, a) {
            for (var s = [], c, p = i; p < a; p = c) {
              var m = new fd(e.doc, Mt(e.doc, p), p);
              (c = p + m.size), s.push(m);
            }
            return s;
          }
          var go = null;
          function Xb(e) {
            go
              ? go.ops.push(e)
              : (e.ownsGroup = go = { ops: [e], delayedCallbacks: [] });
          }
          function Yb(e) {
            var i = e.delayedCallbacks,
              a = 0;
            do {
              for (; a < i.length; a++) i[a].call(null);
              for (var s = 0; s < e.ops.length; s++) {
                var c = e.ops[s];
                if (c.cursorActivityHandlers)
                  for (
                    ;
                    c.cursorActivityCalled < c.cursorActivityHandlers.length;

                  )
                    c.cursorActivityHandlers[c.cursorActivityCalled++].call(
                      null,
                      c.cm,
                    );
              }
            } while (a < i.length);
          }
          function Zb(e, i) {
            var a = e.ownsGroup;
            if (a)
              try {
                Yb(a);
              } finally {
                (go = null), i(a);
              }
          }
          var ys = null;
          function Fe(e, i) {
            var a = fs(e, i);
            if (a.length) {
              var s = Array.prototype.slice.call(arguments, 2),
                c;
              go
                ? (c = go.delayedCallbacks)
                : ys
                ? (c = ys)
                : ((c = ys = []), setTimeout(Jb, 0));
              for (
                var p = function (y) {
                    c.push(function () {
                      return a[y].apply(null, s);
                    });
                  },
                  m = 0;
                m < a.length;
                ++m
              )
                p(m);
            }
          }
          function Jb() {
            var e = ys;
            ys = null;
            for (var i = 0; i < e.length; ++i) e[i]();
          }
          function hd(e, i, a, s) {
            for (var c = 0; c < i.changes.length; c++) {
              var p = i.changes[c];
              p == 'text'
                ? tw(e, i)
                : p == 'gutter'
                ? pd(e, i, a, s)
                : p == 'class'
                ? Kc(e, i)
                : p == 'widget' && ew(e, i, s);
            }
            i.changes = null;
          }
          function bs(e) {
            return (
              e.node == e.text &&
                ((e.node = k('div', null, null, 'position: relative')),
                e.text.parentNode &&
                  e.text.parentNode.replaceChild(e.node, e.text),
                e.node.appendChild(e.text),
                d && g < 8 && (e.node.style.zIndex = 2)),
              e.node
            );
          }
          function Qb(e, i) {
            var a = i.bgClass
              ? i.bgClass + ' ' + (i.line.bgClass || '')
              : i.line.bgClass;
            if ((a && (a += ' CodeMirror-linebackground'), i.background))
              a
                ? (i.background.className = a)
                : (i.background.parentNode.removeChild(i.background),
                  (i.background = null));
            else if (a) {
              var s = bs(i);
              (i.background = s.insertBefore(k('div', null, a), s.firstChild)),
                e.display.input.setUneditable(i.background);
            }
          }
          function dd(e, i) {
            var a = e.display.externalMeasured;
            return a && a.line == i.line
              ? ((e.display.externalMeasured = null),
                (i.measure = a.measure),
                a.built)
              : cd(e, i);
          }
          function tw(e, i) {
            var a = i.text.className,
              s = dd(e, i);
            i.text == i.node && (i.node = s.pre),
              i.text.parentNode.replaceChild(s.pre, i.text),
              (i.text = s.pre),
              s.bgClass != i.bgClass || s.textClass != i.textClass
                ? ((i.bgClass = s.bgClass),
                  (i.textClass = s.textClass),
                  Kc(e, i))
                : a && (i.text.className = a);
          }
          function Kc(e, i) {
            Qb(e, i),
              i.line.wrapClass
                ? (bs(i).className = i.line.wrapClass)
                : i.node != i.text && (i.node.className = '');
            var a = i.textClass
              ? i.textClass + ' ' + (i.line.textClass || '')
              : i.line.textClass;
            i.text.className = a || '';
          }
          function pd(e, i, a, s) {
            if (
              (i.gutter && (i.node.removeChild(i.gutter), (i.gutter = null)),
              i.gutterBackground &&
                (i.node.removeChild(i.gutterBackground),
                (i.gutterBackground = null)),
              i.line.gutterClass)
            ) {
              var c = bs(i);
              (i.gutterBackground = k(
                'div',
                null,
                'CodeMirror-gutter-background ' + i.line.gutterClass,
                'left: ' +
                  (e.options.fixedGutter ? s.fixedPos : -s.gutterTotalWidth) +
                  'px; width: ' +
                  s.gutterTotalWidth +
                  'px',
              )),
                e.display.input.setUneditable(i.gutterBackground),
                c.insertBefore(i.gutterBackground, i.text);
            }
            var p = i.line.gutterMarkers;
            if (e.options.lineNumbers || p) {
              var m = bs(i),
                y = (i.gutter = k(
                  'div',
                  null,
                  'CodeMirror-gutter-wrapper',
                  'left: ' +
                    (e.options.fixedGutter ? s.fixedPos : -s.gutterTotalWidth) +
                    'px',
                ));
              if (
                (y.setAttribute('aria-hidden', 'true'),
                e.display.input.setUneditable(y),
                m.insertBefore(y, i.text),
                i.line.gutterClass && (y.className += ' ' + i.line.gutterClass),
                e.options.lineNumbers &&
                  (!p || !p['CodeMirror-linenumbers']) &&
                  (i.lineNumber = y.appendChild(
                    k(
                      'div',
                      R(e.options, a),
                      'CodeMirror-linenumber CodeMirror-gutter-elt',
                      'left: ' +
                        s.gutterLeft['CodeMirror-linenumbers'] +
                        'px; width: ' +
                        e.display.lineNumInnerWidth +
                        'px',
                    ),
                  )),
                p)
              )
                for (var w = 0; w < e.display.gutterSpecs.length; ++w) {
                  var _ = e.display.gutterSpecs[w].className,
                    N = p.hasOwnProperty(_) && p[_];
                  N &&
                    y.appendChild(
                      k(
                        'div',
                        [N],
                        'CodeMirror-gutter-elt',
                        'left: ' +
                          s.gutterLeft[_] +
                          'px; width: ' +
                          s.gutterWidth[_] +
                          'px',
                      ),
                    );
                }
            }
          }
          function ew(e, i, a) {
            i.alignable && (i.alignable = null);
            for (
              var s = kt('CodeMirror-linewidget'),
                c = i.node.firstChild,
                p = void 0;
              c;
              c = p
            )
              (p = c.nextSibling), s.test(c.className) && i.node.removeChild(c);
            gd(e, i, a);
          }
          function nw(e, i, a, s) {
            var c = dd(e, i);
            return (
              (i.text = i.node = c.pre),
              c.bgClass && (i.bgClass = c.bgClass),
              c.textClass && (i.textClass = c.textClass),
              Kc(e, i),
              pd(e, i, a, s),
              gd(e, i, s),
              i.node
            );
          }
          function gd(e, i, a) {
            if ((vd(e, i.line, i, a, !0), i.rest))
              for (var s = 0; s < i.rest.length; s++)
                vd(e, i.rest[s], i, a, !1);
          }
          function vd(e, i, a, s, c) {
            if (i.widgets)
              for (var p = bs(a), m = 0, y = i.widgets; m < y.length; ++m) {
                var w = y[m],
                  _ = k(
                    'div',
                    [w.node],
                    'CodeMirror-linewidget' +
                      (w.className ? ' ' + w.className : ''),
                  );
                w.handleMouseEvents ||
                  _.setAttribute('cm-ignore-events', 'true'),
                  rw(w, _, a, s),
                  e.display.input.setUneditable(_),
                  c && w.above
                    ? p.insertBefore(_, a.gutter || a.text)
                    : p.appendChild(_),
                  Fe(w, 'redraw');
              }
          }
          function rw(e, i, a, s) {
            if (e.noHScroll) {
              (a.alignable || (a.alignable = [])).push(i);
              var c = s.wrapperWidth;
              (i.style.left = s.fixedPos + 'px'),
                e.coverGutter ||
                  ((c -= s.gutterTotalWidth),
                  (i.style.paddingLeft = s.gutterTotalWidth + 'px')),
                (i.style.width = c + 'px');
            }
            e.coverGutter &&
              ((i.style.zIndex = 5),
              (i.style.position = 'relative'),
              e.noHScroll || (i.style.marginLeft = -s.gutterTotalWidth + 'px'));
          }
          function ws(e) {
            if (e.height != null) return e.height;
            var i = e.doc.cm;
            if (!i) return 0;
            if (!et(document.body, e.node)) {
              var a = 'position: relative;';
              e.coverGutter &&
                (a += 'margin-left: -' + i.display.gutters.offsetWidth + 'px;'),
                e.noHScroll &&
                  (a += 'width: ' + i.display.wrapper.clientWidth + 'px;'),
                z(i.display.measure, k('div', [e.node], null, a));
            }
            return (e.height = e.node.parentNode.offsetHeight);
          }
          function Er(e, i) {
            for (var a = sn(i); a != e.wrapper; a = a.parentNode)
              if (
                !a ||
                (a.nodeType == 1 &&
                  a.getAttribute('cm-ignore-events') == 'true') ||
                (a.parentNode == e.sizer && a != e.mover)
              )
                return !0;
          }
          function Ua(e) {
            return e.lineSpace.offsetTop;
          }
          function Xc(e) {
            return e.mover.offsetHeight - e.lineSpace.offsetHeight;
          }
          function md(e) {
            if (e.cachedPaddingH) return e.cachedPaddingH;
            var i = z(e.measure, k('pre', 'x', 'CodeMirror-line-like')),
              a = window.getComputedStyle
                ? window.getComputedStyle(i)
                : i.currentStyle,
              s = {
                left: parseInt(a.paddingLeft),
                right: parseInt(a.paddingRight),
              };
            return (
              !isNaN(s.left) && !isNaN(s.right) && (e.cachedPaddingH = s), s
            );
          }
          function ar(e) {
            return pe - e.display.nativeBarWidth;
          }
          function Ai(e) {
            return e.display.scroller.clientWidth - ar(e) - e.display.barWidth;
          }
          function Yc(e) {
            return (
              e.display.scroller.clientHeight - ar(e) - e.display.barHeight
            );
          }
          function iw(e, i, a) {
            var s = e.options.lineWrapping,
              c = s && Ai(e);
            if (!i.measure.heights || (s && i.measure.width != c)) {
              var p = (i.measure.heights = []);
              if (s) {
                i.measure.width = c;
                for (
                  var m = i.text.firstChild.getClientRects(), y = 0;
                  y < m.length - 1;
                  y++
                ) {
                  var w = m[y],
                    _ = m[y + 1];
                  Math.abs(w.bottom - _.bottom) > 2 &&
                    p.push((w.bottom + _.top) / 2 - a.top);
                }
              }
              p.push(a.bottom - a.top);
            }
          }
          function yd(e, i, a) {
            if (e.line == i)
              return { map: e.measure.map, cache: e.measure.cache };
            if (e.rest) {
              for (var s = 0; s < e.rest.length; s++)
                if (e.rest[s] == i)
                  return { map: e.measure.maps[s], cache: e.measure.caches[s] };
              for (var c = 0; c < e.rest.length; c++)
                if (ae(e.rest[c]) > a)
                  return {
                    map: e.measure.maps[c],
                    cache: e.measure.caches[c],
                    before: !0,
                  };
            }
          }
          function ow(e, i) {
            i = Un(i);
            var a = ae(i),
              s = (e.display.externalMeasured = new fd(e.doc, i, a));
            s.lineN = a;
            var c = (s.built = cd(e, s));
            return (s.text = c.pre), z(e.display.lineMeasure, c.pre), s;
          }
          function bd(e, i, a, s) {
            return lr(e, vo(e, i), a, s);
          }
          function Zc(e, i) {
            if (i >= e.display.viewFrom && i < e.display.viewTo)
              return e.display.view[Pi(e, i)];
            var a = e.display.externalMeasured;
            if (a && i >= a.lineN && i < a.lineN + a.size) return a;
          }
          function vo(e, i) {
            var a = ae(i),
              s = Zc(e, a);
            s && !s.text
              ? (s = null)
              : s &&
                s.changes &&
                (hd(e, s, a, nu(e)), (e.curOp.forceUpdate = !0)),
              s || (s = ow(e, i));
            var c = yd(s, i, a);
            return {
              line: i,
              view: s,
              rect: null,
              map: c.map,
              cache: c.cache,
              before: c.before,
              hasHeights: !1,
            };
          }
          function lr(e, i, a, s, c) {
            i.before && (a = -1);
            var p = a + (s || ''),
              m;
            return (
              i.cache.hasOwnProperty(p)
                ? (m = i.cache[p])
                : (i.rect || (i.rect = i.view.text.getBoundingClientRect()),
                  i.hasHeights || (iw(e, i.view, i.rect), (i.hasHeights = !0)),
                  (m = aw(e, i, a, s)),
                  m.bogus || (i.cache[p] = m)),
              {
                left: m.left,
                right: m.right,
                top: c ? m.rtop : m.top,
                bottom: c ? m.rbottom : m.bottom,
              }
            );
          }
          var wd = { left: 0, right: 0, top: 0, bottom: 0 };
          function xd(e, i, a) {
            for (var s, c, p, m, y, w, _ = 0; _ < e.length; _ += 3)
              if (
                ((y = e[_]),
                (w = e[_ + 1]),
                i < y
                  ? ((c = 0), (p = 1), (m = 'left'))
                  : i < w
                  ? ((c = i - y), (p = c + 1))
                  : (_ == e.length - 3 || (i == w && e[_ + 3] > i)) &&
                    ((p = w - y), (c = p - 1), i >= w && (m = 'right')),
                c != null)
              ) {
                if (
                  ((s = e[_ + 2]),
                  y == w && a == (s.insertLeft ? 'left' : 'right') && (m = a),
                  a == 'left' && c == 0)
                )
                  for (; _ && e[_ - 2] == e[_ - 3] && e[_ - 1].insertLeft; )
                    (s = e[(_ -= 3) + 2]), (m = 'left');
                if (a == 'right' && c == w - y)
                  for (
                    ;
                    _ < e.length - 3 &&
                    e[_ + 3] == e[_ + 4] &&
                    !e[_ + 5].insertLeft;

                  )
                    (s = e[(_ += 3) + 2]), (m = 'right');
                break;
              }
            return {
              node: s,
              start: c,
              end: p,
              collapse: m,
              coverStart: y,
              coverEnd: w,
            };
          }
          function sw(e, i) {
            var a = wd;
            if (i == 'left')
              for (var s = 0; s < e.length && (a = e[s]).left == a.right; s++);
            else
              for (
                var c = e.length - 1;
                c >= 0 && (a = e[c]).left == a.right;
                c--
              );
            return a;
          }
          function aw(e, i, a, s) {
            var c = xd(i.map, a, s),
              p = c.node,
              m = c.start,
              y = c.end,
              w = c.collapse,
              _;
            if (p.nodeType == 3) {
              for (var N = 0; N < 4; N++) {
                for (; m && te(i.line.text.charAt(c.coverStart + m)); ) --m;
                for (
                  ;
                  c.coverStart + y < c.coverEnd &&
                  te(i.line.text.charAt(c.coverStart + y));

                )
                  ++y;
                if (
                  (d && g < 9 && m == 0 && y == c.coverEnd - c.coverStart
                    ? (_ = p.parentNode.getBoundingClientRect())
                    : (_ = sw(W(p, m, y).getClientRects(), s)),
                  _.left || _.right || m == 0)
                )
                  break;
                (y = m), (m = m - 1), (w = 'right');
              }
              d && g < 11 && (_ = lw(e.display.measure, _));
            } else {
              m > 0 && (w = s = 'right');
              var D;
              e.options.lineWrapping && (D = p.getClientRects()).length > 1
                ? (_ = D[s == 'right' ? D.length - 1 : 0])
                : (_ = p.getBoundingClientRect());
            }
            if (d && g < 9 && !m && (!_ || (!_.left && !_.right))) {
              var B = p.parentNode.getClientRects()[0];
              B
                ? (_ = {
                    left: B.left,
                    right: B.left + yo(e.display),
                    top: B.top,
                    bottom: B.bottom,
                  })
                : (_ = wd);
            }
            for (
              var H = _.top - i.rect.top,
                Z = _.bottom - i.rect.top,
                rt = (H + Z) / 2,
                pt = i.view.measure.heights,
                yt = 0;
              yt < pt.length - 1 && !(rt < pt[yt]);
              yt++
            );
            var St = yt ? pt[yt - 1] : 0,
              bt = pt[yt],
              Et = {
                left: (w == 'right' ? _.right : _.left) - i.rect.left,
                right: (w == 'left' ? _.left : _.right) - i.rect.left,
                top: St,
                bottom: bt,
              };
            return (
              !_.left && !_.right && (Et.bogus = !0),
              e.options.singleCursorHeightPerLine ||
                ((Et.rtop = H), (Et.rbottom = Z)),
              Et
            );
          }
          function lw(e, i) {
            if (
              !window.screen ||
              screen.logicalXDPI == null ||
              screen.logicalXDPI == screen.deviceXDPI ||
              !$a(e)
            )
              return i;
            var a = screen.logicalXDPI / screen.deviceXDPI,
              s = screen.logicalYDPI / screen.deviceYDPI;
            return {
              left: i.left * a,
              right: i.right * a,
              top: i.top * s,
              bottom: i.bottom * s,
            };
          }
          function _d(e) {
            if (
              e.measure &&
              ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
            )
              for (var i = 0; i < e.rest.length; i++) e.measure.caches[i] = {};
          }
          function Sd(e) {
            (e.display.externalMeasure = null), j(e.display.lineMeasure);
            for (var i = 0; i < e.display.view.length; i++)
              _d(e.display.view[i]);
          }
          function xs(e) {
            Sd(e),
              (e.display.cachedCharWidth =
                e.display.cachedTextHeight =
                e.display.cachedPaddingH =
                  null),
              e.options.lineWrapping || (e.display.maxLineChanged = !0),
              (e.display.lineNumChars = null);
          }
          function kd(e) {
            return x && $
              ? -(
                  e.body.getBoundingClientRect().left -
                  parseInt(getComputedStyle(e.body).marginLeft)
                )
              : e.defaultView.pageXOffset ||
                  (e.documentElement || e.body).scrollLeft;
          }
          function Cd(e) {
            return x && $
              ? -(
                  e.body.getBoundingClientRect().top -
                  parseInt(getComputedStyle(e.body).marginTop)
                )
              : e.defaultView.pageYOffset ||
                  (e.documentElement || e.body).scrollTop;
          }
          function Jc(e) {
            var i = Un(e),
              a = i.widgets,
              s = 0;
            if (a)
              for (var c = 0; c < a.length; ++c) a[c].above && (s += ws(a[c]));
            return s;
          }
          function ja(e, i, a, s, c) {
            if (!c) {
              var p = Jc(i);
              (a.top += p), (a.bottom += p);
            }
            if (s == 'line') return a;
            s || (s = 'local');
            var m = Tr(i);
            if (
              (s == 'local'
                ? (m += Ua(e.display))
                : (m -= e.display.viewOffset),
              s == 'page' || s == 'window')
            ) {
              var y = e.display.lineSpace.getBoundingClientRect();
              m += y.top + (s == 'window' ? 0 : Cd(jt(e)));
              var w = y.left + (s == 'window' ? 0 : kd(jt(e)));
              (a.left += w), (a.right += w);
            }
            return (a.top += m), (a.bottom += m), a;
          }
          function Td(e, i, a) {
            if (a == 'div') return i;
            var s = i.left,
              c = i.top;
            if (a == 'page') (s -= kd(jt(e))), (c -= Cd(jt(e)));
            else if (a == 'local' || !a) {
              var p = e.display.sizer.getBoundingClientRect();
              (s += p.left), (c += p.top);
            }
            var m = e.display.lineSpace.getBoundingClientRect();
            return { left: s - m.left, top: c - m.top };
          }
          function Ga(e, i, a, s, c) {
            return s || (s = Mt(e.doc, i.line)), ja(e, s, bd(e, s, i.ch, c), a);
          }
          function jn(e, i, a, s, c, p) {
            (s = s || Mt(e.doc, i.line)), c || (c = vo(e, s));
            function m(Z, rt) {
              var pt = lr(e, c, Z, rt ? 'right' : 'left', p);
              return (
                rt ? (pt.left = pt.right) : (pt.right = pt.left),
                ja(e, s, pt, a)
              );
            }
            var y = ye(s, e.doc.direction),
              w = i.ch,
              _ = i.sticky;
            if (
              (w >= s.text.length
                ? ((w = s.text.length), (_ = 'before'))
                : w <= 0 && ((w = 0), (_ = 'after')),
              !y)
            )
              return m(_ == 'before' ? w - 1 : w, _ == 'before');
            function N(Z, rt, pt) {
              var yt = y[rt],
                St = yt.level == 1;
              return m(pt ? Z - 1 : Z, St != pt);
            }
            var D = We(y, w, _),
              B = An,
              H = N(w, D, _ == 'before');
            return B != null && (H.other = N(w, B, _ != 'before')), H;
          }
          function Ed(e, i) {
            var a = 0;
            (i = Ht(e.doc, i)),
              e.options.lineWrapping || (a = yo(e.display) * i.ch);
            var s = Mt(e.doc, i.line),
              c = Tr(s) + Ua(e.display);
            return { left: a, right: a, top: c, bottom: c + s.height };
          }
          function Qc(e, i, a, s, c) {
            var p = F(e, i, a);
            return (p.xRel = c), s && (p.outside = s), p;
          }
          function tu(e, i, a) {
            var s = e.doc;
            if (((a += e.display.viewOffset), a < 0))
              return Qc(s.first, 0, null, -1, -1);
            var c = or(s, a),
              p = s.first + s.size - 1;
            if (c > p)
              return Qc(s.first + s.size - 1, Mt(s, p).text.length, null, 1, 1);
            i < 0 && (i = 0);
            for (var m = Mt(s, c); ; ) {
              var y = cw(e, m, c, i, a),
                w = zb(m, y.ch + (y.xRel > 0 || y.outside > 0 ? 1 : 0));
              if (!w) return y;
              var _ = w.find(1);
              if (_.line == c) return _;
              m = Mt(s, (c = _.line));
            }
          }
          function Ld(e, i, a, s) {
            s -= Jc(i);
            var c = i.text.length,
              p = Qt(
                function (m) {
                  return lr(e, a, m - 1).bottom <= s;
                },
                c,
                0,
              );
            return (
              (c = Qt(
                function (m) {
                  return lr(e, a, m).top > s;
                },
                p,
                c,
              )),
              { begin: p, end: c }
            );
          }
          function Ad(e, i, a, s) {
            a || (a = vo(e, i));
            var c = ja(e, i, lr(e, a, s), 'line').top;
            return Ld(e, i, a, c);
          }
          function eu(e, i, a, s) {
            return e.bottom <= a
              ? !1
              : e.top > a
              ? !0
              : (s ? e.left : e.right) > i;
          }
          function cw(e, i, a, s, c) {
            c -= Tr(i);
            var p = vo(e, i),
              m = Jc(i),
              y = 0,
              w = i.text.length,
              _ = !0,
              N = ye(i, e.doc.direction);
            if (N) {
              var D = (e.options.lineWrapping ? fw : uw)(e, i, a, p, N, s, c);
              (_ = D.level != 1),
                (y = _ ? D.from : D.to - 1),
                (w = _ ? D.to : D.from - 1);
            }
            var B = null,
              H = null,
              Z = Qt(
                function (Dt) {
                  var Pt = lr(e, p, Dt);
                  return (
                    (Pt.top += m),
                    (Pt.bottom += m),
                    eu(Pt, s, c, !1)
                      ? (Pt.top <= c && Pt.left <= s && ((B = Dt), (H = Pt)),
                        !0)
                      : !1
                  );
                },
                y,
                w,
              ),
              rt,
              pt,
              yt = !1;
            if (H) {
              var St = s - H.left < H.right - s,
                bt = St == _;
              (Z = B + (bt ? 0 : 1)),
                (pt = bt ? 'after' : 'before'),
                (rt = St ? H.left : H.right);
            } else {
              !_ && (Z == w || Z == y) && Z++,
                (pt =
                  Z == 0
                    ? 'after'
                    : Z == i.text.length
                    ? 'before'
                    : lr(e, p, Z - (_ ? 1 : 0)).bottom + m <= c == _
                    ? 'after'
                    : 'before');
              var Et = jn(e, F(a, Z, pt), 'line', i, p);
              (rt = Et.left), (yt = c < Et.top ? -1 : c >= Et.bottom ? 1 : 0);
            }
            return (Z = ce(i.text, Z, 1)), Qc(a, Z, pt, yt, s - rt);
          }
          function uw(e, i, a, s, c, p, m) {
            var y = Qt(
                function (D) {
                  var B = c[D],
                    H = B.level != 1;
                  return eu(
                    jn(
                      e,
                      F(a, H ? B.to : B.from, H ? 'before' : 'after'),
                      'line',
                      i,
                      s,
                    ),
                    p,
                    m,
                    !0,
                  );
                },
                0,
                c.length - 1,
              ),
              w = c[y];
            if (y > 0) {
              var _ = w.level != 1,
                N = jn(
                  e,
                  F(a, _ ? w.from : w.to, _ ? 'after' : 'before'),
                  'line',
                  i,
                  s,
                );
              eu(N, p, m, !0) && N.top > m && (w = c[y - 1]);
            }
            return w;
          }
          function fw(e, i, a, s, c, p, m) {
            var y = Ld(e, i, s, m),
              w = y.begin,
              _ = y.end;
            /\s/.test(i.text.charAt(_ - 1)) && _--;
            for (var N = null, D = null, B = 0; B < c.length; B++) {
              var H = c[B];
              if (!(H.from >= _ || H.to <= w)) {
                var Z = H.level != 1,
                  rt = lr(
                    e,
                    s,
                    Z ? Math.min(_, H.to) - 1 : Math.max(w, H.from),
                  ).right,
                  pt = rt < p ? p - rt + 1e9 : rt - p;
                (!N || D > pt) && ((N = H), (D = pt));
              }
            }
            return (
              N || (N = c[c.length - 1]),
              N.from < w && (N = { from: w, to: N.to, level: N.level }),
              N.to > _ && (N = { from: N.from, to: _, level: N.level }),
              N
            );
          }
          var Mi;
          function mo(e) {
            if (e.cachedTextHeight != null) return e.cachedTextHeight;
            if (Mi == null) {
              Mi = k('pre', null, 'CodeMirror-line-like');
              for (var i = 0; i < 49; ++i)
                Mi.appendChild(document.createTextNode('x')),
                  Mi.appendChild(k('br'));
              Mi.appendChild(document.createTextNode('x'));
            }
            z(e.measure, Mi);
            var a = Mi.offsetHeight / 50;
            return a > 3 && (e.cachedTextHeight = a), j(e.measure), a || 1;
          }
          function yo(e) {
            if (e.cachedCharWidth != null) return e.cachedCharWidth;
            var i = k('span', 'xxxxxxxxxx'),
              a = k('pre', [i], 'CodeMirror-line-like');
            z(e.measure, a);
            var s = i.getBoundingClientRect(),
              c = (s.right - s.left) / 10;
            return c > 2 && (e.cachedCharWidth = c), c || 10;
          }
          function nu(e) {
            for (
              var i = e.display,
                a = {},
                s = {},
                c = i.gutters.clientLeft,
                p = i.gutters.firstChild,
                m = 0;
              p;
              p = p.nextSibling, ++m
            ) {
              var y = e.display.gutterSpecs[m].className;
              (a[y] = p.offsetLeft + p.clientLeft + c), (s[y] = p.clientWidth);
            }
            return {
              fixedPos: ru(i),
              gutterTotalWidth: i.gutters.offsetWidth,
              gutterLeft: a,
              gutterWidth: s,
              wrapperWidth: i.wrapper.clientWidth,
            };
          }
          function ru(e) {
            return (
              e.scroller.getBoundingClientRect().left -
              e.sizer.getBoundingClientRect().left
            );
          }
          function Md(e) {
            var i = mo(e.display),
              a = e.options.lineWrapping,
              s =
                a &&
                Math.max(5, e.display.scroller.clientWidth / yo(e.display) - 3);
            return function (c) {
              if (Qr(e.doc, c)) return 0;
              var p = 0;
              if (c.widgets)
                for (var m = 0; m < c.widgets.length; m++)
                  c.widgets[m].height && (p += c.widgets[m].height);
              return a ? p + (Math.ceil(c.text.length / s) || 1) * i : p + i;
            };
          }
          function iu(e) {
            var i = e.doc,
              a = Md(e);
            i.iter(function (s) {
              var c = a(s);
              c != s.height && Fn(s, c);
            });
          }
          function Ni(e, i, a, s) {
            var c = e.display;
            if (!a && sn(i).getAttribute('cm-not-content') == 'true')
              return null;
            var p,
              m,
              y = c.lineSpace.getBoundingClientRect();
            try {
              (p = i.clientX - y.left), (m = i.clientY - y.top);
            } catch {
              return null;
            }
            var w = tu(e, p, m),
              _;
            if (
              s &&
              w.xRel > 0 &&
              (_ = Mt(e.doc, w.line).text).length == w.ch
            ) {
              var N = X(_, _.length, e.options.tabSize) - _.length;
              w = F(
                w.line,
                Math.max(
                  0,
                  Math.round((p - md(e.display).left) / yo(e.display)) - N,
                ),
              );
            }
            return w;
          }
          function Pi(e, i) {
            if (i >= e.display.viewTo || ((i -= e.display.viewFrom), i < 0))
              return null;
            for (var a = e.display.view, s = 0; s < a.length; s++)
              if (((i -= a[s].size), i < 0)) return s;
          }
          function an(e, i, a, s) {
            i == null && (i = e.doc.first),
              a == null && (a = e.doc.first + e.doc.size),
              s || (s = 0);
            var c = e.display;
            if (
              (s &&
                a < c.viewTo &&
                (c.updateLineNumbers == null || c.updateLineNumbers > i) &&
                (c.updateLineNumbers = i),
              (e.curOp.viewChanged = !0),
              i >= c.viewTo)
            )
              Cr && jc(e.doc, i) < c.viewTo && ei(e);
            else if (a <= c.viewFrom)
              Cr && ad(e.doc, a + s) > c.viewFrom
                ? ei(e)
                : ((c.viewFrom += s), (c.viewTo += s));
            else if (i <= c.viewFrom && a >= c.viewTo) ei(e);
            else if (i <= c.viewFrom) {
              var p = Va(e, a, a + s, 1);
              p
                ? ((c.view = c.view.slice(p.index)),
                  (c.viewFrom = p.lineN),
                  (c.viewTo += s))
                : ei(e);
            } else if (a >= c.viewTo) {
              var m = Va(e, i, i, -1);
              m
                ? ((c.view = c.view.slice(0, m.index)), (c.viewTo = m.lineN))
                : ei(e);
            } else {
              var y = Va(e, i, i, -1),
                w = Va(e, a, a + s, 1);
              y && w
                ? ((c.view = c.view
                    .slice(0, y.index)
                    .concat(Wa(e, y.lineN, w.lineN))
                    .concat(c.view.slice(w.index))),
                  (c.viewTo += s))
                : ei(e);
            }
            var _ = c.externalMeasured;
            _ &&
              (a < _.lineN
                ? (_.lineN += s)
                : i < _.lineN + _.size && (c.externalMeasured = null));
          }
          function ti(e, i, a) {
            e.curOp.viewChanged = !0;
            var s = e.display,
              c = e.display.externalMeasured;
            if (
              (c &&
                i >= c.lineN &&
                i < c.lineN + c.size &&
                (s.externalMeasured = null),
              !(i < s.viewFrom || i >= s.viewTo))
            ) {
              var p = s.view[Pi(e, i)];
              if (p.node != null) {
                var m = p.changes || (p.changes = []);
                Tt(m, a) == -1 && m.push(a);
              }
            }
          }
          function ei(e) {
            (e.display.viewFrom = e.display.viewTo = e.doc.first),
              (e.display.view = []),
              (e.display.viewOffset = 0);
          }
          function Va(e, i, a, s) {
            var c = Pi(e, i),
              p,
              m = e.display.view;
            if (!Cr || a == e.doc.first + e.doc.size)
              return { index: c, lineN: a };
            for (var y = e.display.viewFrom, w = 0; w < c; w++) y += m[w].size;
            if (y != i) {
              if (s > 0) {
                if (c == m.length - 1) return null;
                (p = y + m[c].size - i), c++;
              } else p = y - i;
              (i += p), (a += p);
            }
            for (; jc(e.doc, a) != a; ) {
              if (c == (s < 0 ? 0 : m.length - 1)) return null;
              (a += s * m[c - (s < 0 ? 1 : 0)].size), (c += s);
            }
            return { index: c, lineN: a };
          }
          function hw(e, i, a) {
            var s = e.display,
              c = s.view;
            c.length == 0 || i >= s.viewTo || a <= s.viewFrom
              ? ((s.view = Wa(e, i, a)), (s.viewFrom = i))
              : (s.viewFrom > i
                  ? (s.view = Wa(e, i, s.viewFrom).concat(s.view))
                  : s.viewFrom < i && (s.view = s.view.slice(Pi(e, i))),
                (s.viewFrom = i),
                s.viewTo < a
                  ? (s.view = s.view.concat(Wa(e, s.viewTo, a)))
                  : s.viewTo > a && (s.view = s.view.slice(0, Pi(e, a)))),
              (s.viewTo = a);
          }
          function Nd(e) {
            for (var i = e.display.view, a = 0, s = 0; s < i.length; s++) {
              var c = i[s];
              !c.hidden && (!c.node || c.changes) && ++a;
            }
            return a;
          }
          function _s(e) {
            e.display.input.showSelection(e.display.input.prepareSelection());
          }
          function Pd(e, i) {
            i === void 0 && (i = !0);
            var a = e.doc,
              s = {},
              c = (s.cursors = document.createDocumentFragment()),
              p = (s.selection = document.createDocumentFragment()),
              m = e.options.$customCursor;
            m && (i = !0);
            for (var y = 0; y < a.sel.ranges.length; y++)
              if (!(!i && y == a.sel.primIndex)) {
                var w = a.sel.ranges[y];
                if (
                  !(
                    w.from().line >= e.display.viewTo ||
                    w.to().line < e.display.viewFrom
                  )
                ) {
                  var _ = w.empty();
                  if (m) {
                    var N = m(e, w);
                    N && ou(e, N, c);
                  } else
                    (_ || e.options.showCursorWhenSelecting) &&
                      ou(e, w.head, c);
                  _ || dw(e, w, p);
                }
              }
            return s;
          }
          function ou(e, i, a) {
            var s = jn(
                e,
                i,
                'div',
                null,
                null,
                !e.options.singleCursorHeightPerLine,
              ),
              c = a.appendChild(k('div', ' ', 'CodeMirror-cursor'));
            if (
              ((c.style.left = s.left + 'px'),
              (c.style.top = s.top + 'px'),
              (c.style.height =
                Math.max(0, s.bottom - s.top) * e.options.cursorHeight + 'px'),
              /\bcm-fat-cursor\b/.test(e.getWrapperElement().className))
            ) {
              var p = Ga(e, i, 'div', null, null),
                m = p.right - p.left;
              c.style.width = (m > 0 ? m : e.defaultCharWidth()) + 'px';
            }
            if (s.other) {
              var y = a.appendChild(
                k('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor'),
              );
              (y.style.display = ''),
                (y.style.left = s.other.left + 'px'),
                (y.style.top = s.other.top + 'px'),
                (y.style.height = (s.other.bottom - s.other.top) * 0.85 + 'px');
            }
          }
          function Ka(e, i) {
            return e.top - i.top || e.left - i.left;
          }
          function dw(e, i, a) {
            var s = e.display,
              c = e.doc,
              p = document.createDocumentFragment(),
              m = md(e.display),
              y = m.left,
              w = Math.max(s.sizerWidth, Ai(e) - s.sizer.offsetLeft) - m.right,
              _ = c.direction == 'ltr';
            function N(bt, Et, Dt, Pt) {
              Et < 0 && (Et = 0),
                (Et = Math.round(Et)),
                (Pt = Math.round(Pt)),
                p.appendChild(
                  k(
                    'div',
                    null,
                    'CodeMirror-selected',
                    'position: absolute; left: ' +
                      bt +
                      `px;
                             top: ` +
                      Et +
                      'px; width: ' +
                      (Dt ?? w - bt) +
                      `px;
                             height: ` +
                      (Pt - Et) +
                      'px',
                  ),
                );
            }
            function D(bt, Et, Dt) {
              var Pt = Mt(c, bt),
                Ut = Pt.text.length,
                ge,
                He;
              function Se(Me, un) {
                return Ga(e, F(bt, Me), 'div', Pt, un);
              }
              function xn(Me, un, Ue) {
                var De = Ad(e, Pt, null, Me),
                  Ne = (un == 'ltr') == (Ue == 'after') ? 'left' : 'right',
                  Te =
                    Ue == 'after'
                      ? De.begin
                      : De.end -
                        (/\s/.test(Pt.text.charAt(De.end - 1)) ? 2 : 1);
                return Se(Te, Ne)[Ne];
              }
              var cn = ye(Pt, c.direction);
              return (
                yn(cn, Et || 0, Dt ?? Ut, function (Me, un, Ue, De) {
                  var Ne = Ue == 'ltr',
                    Te = Se(Me, Ne ? 'left' : 'right'),
                    fn = Se(un - 1, Ne ? 'right' : 'left'),
                    No = Et == null && Me == 0,
                    ai = Dt == null && un == Ut,
                    Xe = De == 0,
                    cr = !cn || De == cn.length - 1;
                  if (fn.top - Te.top <= 3) {
                    var Be = (_ ? No : ai) && Xe,
                      Pu = (_ ? ai : No) && cr,
                      Mr = Be ? y : (Ne ? Te : fn).left,
                      zi = Pu ? w : (Ne ? fn : Te).right;
                    N(Mr, Te.top, zi - Mr, Te.bottom);
                  } else {
                    var Fi, en, Po, Ou;
                    Ne
                      ? ((Fi = _ && No && Xe ? y : Te.left),
                        (en = _ ? w : xn(Me, Ue, 'before')),
                        (Po = _ ? y : xn(un, Ue, 'after')),
                        (Ou = _ && ai && cr ? w : fn.right))
                      : ((Fi = _ ? xn(Me, Ue, 'before') : y),
                        (en = !_ && No && Xe ? w : Te.right),
                        (Po = !_ && ai && cr ? y : fn.left),
                        (Ou = _ ? xn(un, Ue, 'after') : w)),
                      N(Fi, Te.top, en - Fi, Te.bottom),
                      Te.bottom < fn.top && N(y, Te.bottom, null, fn.top),
                      N(Po, fn.top, Ou - Po, fn.bottom);
                  }
                  (!ge || Ka(Te, ge) < 0) && (ge = Te),
                    Ka(fn, ge) < 0 && (ge = fn),
                    (!He || Ka(Te, He) < 0) && (He = Te),
                    Ka(fn, He) < 0 && (He = fn);
                }),
                { start: ge, end: He }
              );
            }
            var B = i.from(),
              H = i.to();
            if (B.line == H.line) D(B.line, B.ch, H.ch);
            else {
              var Z = Mt(c, B.line),
                rt = Mt(c, H.line),
                pt = Un(Z) == Un(rt),
                yt = D(B.line, B.ch, pt ? Z.text.length + 1 : null).end,
                St = D(H.line, pt ? 0 : null, H.ch).start;
              pt &&
                (yt.top < St.top - 2
                  ? (N(yt.right, yt.top, null, yt.bottom),
                    N(y, St.top, St.left, St.bottom))
                  : N(yt.right, yt.top, St.left - yt.right, yt.bottom)),
                yt.bottom < St.top && N(y, yt.bottom, null, St.top);
            }
            a.appendChild(p);
          }
          function su(e) {
            if (e.state.focused) {
              var i = e.display;
              clearInterval(i.blinker);
              var a = !0;
              (i.cursorDiv.style.visibility = ''),
                e.options.cursorBlinkRate > 0
                  ? (i.blinker = setInterval(function () {
                      e.hasFocus() || bo(e),
                        (i.cursorDiv.style.visibility = (a = !a)
                          ? ''
                          : 'hidden');
                    }, e.options.cursorBlinkRate))
                  : e.options.cursorBlinkRate < 0 &&
                    (i.cursorDiv.style.visibility = 'hidden');
            }
          }
          function Od(e) {
            e.hasFocus() || (e.display.input.focus(), e.state.focused || lu(e));
          }
          function au(e) {
            (e.state.delayingBlurEvent = !0),
              setTimeout(function () {
                e.state.delayingBlurEvent &&
                  ((e.state.delayingBlurEvent = !1), e.state.focused && bo(e));
              }, 100);
          }
          function lu(e, i) {
            e.state.delayingBlurEvent &&
              !e.state.draggingText &&
              (e.state.delayingBlurEvent = !1),
              e.options.readOnly != 'nocursor' &&
                (e.state.focused ||
                  (me(e, 'focus', e, i),
                  (e.state.focused = !0),
                  Ct(e.display.wrapper, 'CodeMirror-focused'),
                  !e.curOp &&
                    e.display.selForContextMenu != e.doc.sel &&
                    (e.display.input.reset(),
                    v &&
                      setTimeout(function () {
                        return e.display.input.reset(!0);
                      }, 20)),
                  e.display.input.receivedFocus()),
                su(e));
          }
          function bo(e, i) {
            e.state.delayingBlurEvent ||
              (e.state.focused &&
                (me(e, 'blur', e, i),
                (e.state.focused = !1),
                dt(e.display.wrapper, 'CodeMirror-focused')),
              clearInterval(e.display.blinker),
              setTimeout(function () {
                e.state.focused || (e.display.shift = !1);
              }, 150));
          }
          function Xa(e) {
            for (
              var i = e.display,
                a = i.lineDiv.offsetTop,
                s = Math.max(0, i.scroller.getBoundingClientRect().top),
                c = i.lineDiv.getBoundingClientRect().top,
                p = 0,
                m = 0;
              m < i.view.length;
              m++
            ) {
              var y = i.view[m],
                w = e.options.lineWrapping,
                _ = void 0,
                N = 0;
              if (!y.hidden) {
                if (((c += y.line.height), d && g < 8)) {
                  var D = y.node.offsetTop + y.node.offsetHeight;
                  (_ = D - a), (a = D);
                } else {
                  var B = y.node.getBoundingClientRect();
                  (_ = B.bottom - B.top),
                    !w &&
                      y.text.firstChild &&
                      (N =
                        y.text.firstChild.getBoundingClientRect().right -
                        B.left -
                        1);
                }
                var H = y.line.height - _;
                if (
                  (H > 0.005 || H < -0.005) &&
                  (c < s && (p -= H), Fn(y.line, _), $d(y.line), y.rest)
                )
                  for (var Z = 0; Z < y.rest.length; Z++) $d(y.rest[Z]);
                if (N > e.display.sizerWidth) {
                  var rt = Math.ceil(N / yo(e.display));
                  rt > e.display.maxLineLength &&
                    ((e.display.maxLineLength = rt),
                    (e.display.maxLine = y.line),
                    (e.display.maxLineChanged = !0));
                }
              }
            }
            Math.abs(p) > 2 && (i.scroller.scrollTop += p);
          }
          function $d(e) {
            if (e.widgets)
              for (var i = 0; i < e.widgets.length; ++i) {
                var a = e.widgets[i],
                  s = a.node.parentNode;
                s && (a.height = s.offsetHeight);
              }
          }
          function Ya(e, i, a) {
            var s =
              a && a.top != null ? Math.max(0, a.top) : e.scroller.scrollTop;
            s = Math.floor(s - Ua(e));
            var c =
                a && a.bottom != null ? a.bottom : s + e.wrapper.clientHeight,
              p = or(i, s),
              m = or(i, c);
            if (a && a.ensure) {
              var y = a.ensure.from.line,
                w = a.ensure.to.line;
              y < p
                ? ((p = y), (m = or(i, Tr(Mt(i, y)) + e.wrapper.clientHeight)))
                : Math.min(w, i.lastLine()) >= m &&
                  ((p = or(i, Tr(Mt(i, w)) - e.wrapper.clientHeight)), (m = w));
            }
            return { from: p, to: Math.max(m, p + 1) };
          }
          function pw(e, i) {
            if (!ke(e, 'scrollCursorIntoView')) {
              var a = e.display,
                s = a.sizer.getBoundingClientRect(),
                c = null,
                p = a.wrapper.ownerDocument;
              if (
                (i.top + s.top < 0
                  ? (c = !0)
                  : i.bottom + s.top >
                      (p.defaultView.innerHeight ||
                        p.documentElement.clientHeight) && (c = !1),
                c != null && !T)
              ) {
                var m = k(
                  'div',
                  '​',
                  null,
                  `position: absolute;
                         top: ` +
                    (i.top - a.viewOffset - Ua(e.display)) +
                    `px;
                         height: ` +
                    (i.bottom - i.top + ar(e) + a.barHeight) +
                    `px;
                         left: ` +
                    i.left +
                    'px; width: ' +
                    Math.max(2, i.right - i.left) +
                    'px;',
                );
                e.display.lineSpace.appendChild(m),
                  m.scrollIntoView(c),
                  e.display.lineSpace.removeChild(m);
              }
            }
          }
          function gw(e, i, a, s) {
            s == null && (s = 0);
            var c;
            !e.options.lineWrapping &&
              i == a &&
              ((a = i.sticky == 'before' ? F(i.line, i.ch + 1, 'before') : i),
              (i = i.ch
                ? F(i.line, i.sticky == 'before' ? i.ch - 1 : i.ch, 'after')
                : i));
            for (var p = 0; p < 5; p++) {
              var m = !1,
                y = jn(e, i),
                w = !a || a == i ? y : jn(e, a);
              c = {
                left: Math.min(y.left, w.left),
                top: Math.min(y.top, w.top) - s,
                right: Math.max(y.left, w.left),
                bottom: Math.max(y.bottom, w.bottom) + s,
              };
              var _ = cu(e, c),
                N = e.doc.scrollTop,
                D = e.doc.scrollLeft;
              if (
                (_.scrollTop != null &&
                  (ks(e, _.scrollTop),
                  Math.abs(e.doc.scrollTop - N) > 1 && (m = !0)),
                _.scrollLeft != null &&
                  (Oi(e, _.scrollLeft),
                  Math.abs(e.doc.scrollLeft - D) > 1 && (m = !0)),
                !m)
              )
                break;
            }
            return c;
          }
          function vw(e, i) {
            var a = cu(e, i);
            a.scrollTop != null && ks(e, a.scrollTop),
              a.scrollLeft != null && Oi(e, a.scrollLeft);
          }
          function cu(e, i) {
            var a = e.display,
              s = mo(e.display);
            i.top < 0 && (i.top = 0);
            var c =
                e.curOp && e.curOp.scrollTop != null
                  ? e.curOp.scrollTop
                  : a.scroller.scrollTop,
              p = Yc(e),
              m = {};
            i.bottom - i.top > p && (i.bottom = i.top + p);
            var y = e.doc.height + Xc(a),
              w = i.top < s,
              _ = i.bottom > y - s;
            if (i.top < c) m.scrollTop = w ? 0 : i.top;
            else if (i.bottom > c + p) {
              var N = Math.min(i.top, (_ ? y : i.bottom) - p);
              N != c && (m.scrollTop = N);
            }
            var D = e.options.fixedGutter ? 0 : a.gutters.offsetWidth,
              B =
                e.curOp && e.curOp.scrollLeft != null
                  ? e.curOp.scrollLeft
                  : a.scroller.scrollLeft - D,
              H = Ai(e) - a.gutters.offsetWidth,
              Z = i.right - i.left > H;
            return (
              Z && (i.right = i.left + H),
              i.left < 10
                ? (m.scrollLeft = 0)
                : i.left < B
                ? (m.scrollLeft = Math.max(0, i.left + D - (Z ? 0 : 10)))
                : i.right > H + B - 3 &&
                  (m.scrollLeft = i.right + (Z ? 0 : 10) - H),
              m
            );
          }
          function uu(e, i) {
            i != null &&
              (Za(e),
              (e.curOp.scrollTop =
                (e.curOp.scrollTop == null
                  ? e.doc.scrollTop
                  : e.curOp.scrollTop) + i));
          }
          function wo(e) {
            Za(e);
            var i = e.getCursor();
            e.curOp.scrollToPos = {
              from: i,
              to: i,
              margin: e.options.cursorScrollMargin,
            };
          }
          function Ss(e, i, a) {
            (i != null || a != null) && Za(e),
              i != null && (e.curOp.scrollLeft = i),
              a != null && (e.curOp.scrollTop = a);
          }
          function mw(e, i) {
            Za(e), (e.curOp.scrollToPos = i);
          }
          function Za(e) {
            var i = e.curOp.scrollToPos;
            if (i) {
              e.curOp.scrollToPos = null;
              var a = Ed(e, i.from),
                s = Ed(e, i.to);
              Dd(e, a, s, i.margin);
            }
          }
          function Dd(e, i, a, s) {
            var c = cu(e, {
              left: Math.min(i.left, a.left),
              top: Math.min(i.top, a.top) - s,
              right: Math.max(i.right, a.right),
              bottom: Math.max(i.bottom, a.bottom) + s,
            });
            Ss(e, c.scrollLeft, c.scrollTop);
          }
          function ks(e, i) {
            Math.abs(e.doc.scrollTop - i) < 2 ||
              (l || hu(e, { top: i }), Rd(e, i, !0), l && hu(e), Es(e, 100));
          }
          function Rd(e, i, a) {
            (i = Math.max(
              0,
              Math.min(
                e.display.scroller.scrollHeight -
                  e.display.scroller.clientHeight,
                i,
              ),
            )),
              !(e.display.scroller.scrollTop == i && !a) &&
                ((e.doc.scrollTop = i),
                e.display.scrollbars.setScrollTop(i),
                e.display.scroller.scrollTop != i &&
                  (e.display.scroller.scrollTop = i));
          }
          function Oi(e, i, a, s) {
            (i = Math.max(
              0,
              Math.min(
                i,
                e.display.scroller.scrollWidth - e.display.scroller.clientWidth,
              ),
            )),
              !(
                (a
                  ? i == e.doc.scrollLeft
                  : Math.abs(e.doc.scrollLeft - i) < 2) && !s
              ) &&
                ((e.doc.scrollLeft = i),
                Hd(e),
                e.display.scroller.scrollLeft != i &&
                  (e.display.scroller.scrollLeft = i),
                e.display.scrollbars.setScrollLeft(i));
          }
          function Cs(e) {
            var i = e.display,
              a = i.gutters.offsetWidth,
              s = Math.round(e.doc.height + Xc(e.display));
            return {
              clientHeight: i.scroller.clientHeight,
              viewHeight: i.wrapper.clientHeight,
              scrollWidth: i.scroller.scrollWidth,
              clientWidth: i.scroller.clientWidth,
              viewWidth: i.wrapper.clientWidth,
              barLeft: e.options.fixedGutter ? a : 0,
              docHeight: s,
              scrollHeight: s + ar(e) + i.barHeight,
              nativeBarWidth: i.nativeBarWidth,
              gutterWidth: a,
            };
          }
          var $i = function (e, i, a) {
            this.cm = a;
            var s = (this.vert = k(
                'div',
                [k('div', null, null, 'min-width: 1px')],
                'CodeMirror-vscrollbar',
              )),
              c = (this.horiz = k(
                'div',
                [k('div', null, null, 'height: 100%; min-height: 1px')],
                'CodeMirror-hscrollbar',
              ));
            (s.tabIndex = c.tabIndex = -1),
              e(s),
              e(c),
              wt(s, 'scroll', function () {
                s.clientHeight && i(s.scrollTop, 'vertical');
              }),
              wt(c, 'scroll', function () {
                c.clientWidth && i(c.scrollLeft, 'horizontal');
              }),
              (this.checkedZeroWidth = !1),
              d &&
                g < 8 &&
                (this.horiz.style.minHeight = this.vert.style.minWidth =
                  '18px');
          };
          ($i.prototype.update = function (e) {
            var i = e.scrollWidth > e.clientWidth + 1,
              a = e.scrollHeight > e.clientHeight + 1,
              s = e.nativeBarWidth;
            if (a) {
              (this.vert.style.display = 'block'),
                (this.vert.style.bottom = i ? s + 'px' : '0');
              var c = e.viewHeight - (i ? s : 0);
              this.vert.firstChild.style.height =
                Math.max(0, e.scrollHeight - e.clientHeight + c) + 'px';
            } else
              (this.vert.scrollTop = 0),
                (this.vert.style.display = ''),
                (this.vert.firstChild.style.height = '0');
            if (i) {
              (this.horiz.style.display = 'block'),
                (this.horiz.style.right = a ? s + 'px' : '0'),
                (this.horiz.style.left = e.barLeft + 'px');
              var p = e.viewWidth - e.barLeft - (a ? s : 0);
              this.horiz.firstChild.style.width =
                Math.max(0, e.scrollWidth - e.clientWidth + p) + 'px';
            } else
              (this.horiz.style.display = ''),
                (this.horiz.firstChild.style.width = '0');
            return (
              !this.checkedZeroWidth &&
                e.clientHeight > 0 &&
                (s == 0 && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
              { right: a ? s : 0, bottom: i ? s : 0 }
            );
          }),
            ($i.prototype.setScrollLeft = function (e) {
              this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
                this.disableHoriz &&
                  this.enableZeroWidthBar(
                    this.horiz,
                    this.disableHoriz,
                    'horiz',
                  );
            }),
            ($i.prototype.setScrollTop = function (e) {
              this.vert.scrollTop != e && (this.vert.scrollTop = e),
                this.disableVert &&
                  this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
            }),
            ($i.prototype.zeroWidthHack = function () {
              var e = G && !M ? '12px' : '18px';
              (this.horiz.style.height = this.vert.style.width = e),
                (this.horiz.style.visibility = this.vert.style.visibility =
                  'hidden'),
                (this.disableHoriz = new ot()),
                (this.disableVert = new ot());
            }),
            ($i.prototype.enableZeroWidthBar = function (e, i, a) {
              e.style.visibility = '';
              function s() {
                var c = e.getBoundingClientRect(),
                  p =
                    a == 'vert'
                      ? document.elementFromPoint(
                          c.right - 1,
                          (c.top + c.bottom) / 2,
                        )
                      : document.elementFromPoint(
                          (c.right + c.left) / 2,
                          c.bottom - 1,
                        );
                p != e ? (e.style.visibility = 'hidden') : i.set(1e3, s);
              }
              i.set(1e3, s);
            }),
            ($i.prototype.clear = function () {
              var e = this.horiz.parentNode;
              e.removeChild(this.horiz), e.removeChild(this.vert);
            });
          var Ts = function () {};
          (Ts.prototype.update = function () {
            return { bottom: 0, right: 0 };
          }),
            (Ts.prototype.setScrollLeft = function () {}),
            (Ts.prototype.setScrollTop = function () {}),
            (Ts.prototype.clear = function () {});
          function xo(e, i) {
            i || (i = Cs(e));
            var a = e.display.barWidth,
              s = e.display.barHeight;
            zd(e, i);
            for (
              var c = 0;
              (c < 4 && a != e.display.barWidth) || s != e.display.barHeight;
              c++
            )
              a != e.display.barWidth && e.options.lineWrapping && Xa(e),
                zd(e, Cs(e)),
                (a = e.display.barWidth),
                (s = e.display.barHeight);
          }
          function zd(e, i) {
            var a = e.display,
              s = a.scrollbars.update(i);
            (a.sizer.style.paddingRight = (a.barWidth = s.right) + 'px'),
              (a.sizer.style.paddingBottom = (a.barHeight = s.bottom) + 'px'),
              (a.heightForcer.style.borderBottom =
                s.bottom + 'px solid transparent'),
              s.right && s.bottom
                ? ((a.scrollbarFiller.style.display = 'block'),
                  (a.scrollbarFiller.style.height = s.bottom + 'px'),
                  (a.scrollbarFiller.style.width = s.right + 'px'))
                : (a.scrollbarFiller.style.display = ''),
              s.bottom &&
              e.options.coverGutterNextToScrollbar &&
              e.options.fixedGutter
                ? ((a.gutterFiller.style.display = 'block'),
                  (a.gutterFiller.style.height = s.bottom + 'px'),
                  (a.gutterFiller.style.width = i.gutterWidth + 'px'))
                : (a.gutterFiller.style.display = '');
          }
          var Fd = { native: $i, null: Ts };
          function Id(e) {
            e.display.scrollbars &&
              (e.display.scrollbars.clear(),
              e.display.scrollbars.addClass &&
                dt(e.display.wrapper, e.display.scrollbars.addClass)),
              (e.display.scrollbars = new Fd[e.options.scrollbarStyle](
                function (i) {
                  e.display.wrapper.insertBefore(i, e.display.scrollbarFiller),
                    wt(i, 'mousedown', function () {
                      e.state.focused &&
                        setTimeout(function () {
                          return e.display.input.focus();
                        }, 0);
                    }),
                    i.setAttribute('cm-not-content', 'true');
                },
                function (i, a) {
                  a == 'horizontal' ? Oi(e, i) : ks(e, i);
                },
                e,
              )),
              e.display.scrollbars.addClass &&
                Ct(e.display.wrapper, e.display.scrollbars.addClass);
          }
          var yw = 0;
          function Di(e) {
            (e.curOp = {
              cm: e,
              viewChanged: !1,
              startHeight: e.doc.height,
              forceUpdate: !1,
              updateInput: 0,
              typing: !1,
              changeObjs: null,
              cursorActivityHandlers: null,
              cursorActivityCalled: 0,
              selectionChanged: !1,
              updateMaxLine: !1,
              scrollLeft: null,
              scrollTop: null,
              scrollToPos: null,
              focus: !1,
              id: ++yw,
              markArrays: null,
            }),
              Xb(e.curOp);
          }
          function Ri(e) {
            var i = e.curOp;
            i &&
              Zb(i, function (a) {
                for (var s = 0; s < a.ops.length; s++) a.ops[s].cm.curOp = null;
                bw(a);
              });
          }
          function bw(e) {
            for (var i = e.ops, a = 0; a < i.length; a++) ww(i[a]);
            for (var s = 0; s < i.length; s++) xw(i[s]);
            for (var c = 0; c < i.length; c++) _w(i[c]);
            for (var p = 0; p < i.length; p++) Sw(i[p]);
            for (var m = 0; m < i.length; m++) kw(i[m]);
          }
          function ww(e) {
            var i = e.cm,
              a = i.display;
            Tw(i),
              e.updateMaxLine && Vc(i),
              (e.mustUpdate =
                e.viewChanged ||
                e.forceUpdate ||
                e.scrollTop != null ||
                (e.scrollToPos &&
                  (e.scrollToPos.from.line < a.viewFrom ||
                    e.scrollToPos.to.line >= a.viewTo)) ||
                (a.maxLineChanged && i.options.lineWrapping)),
              (e.update =
                e.mustUpdate &&
                new Ja(
                  i,
                  e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
                  e.forceUpdate,
                ));
          }
          function xw(e) {
            e.updatedDisplay = e.mustUpdate && fu(e.cm, e.update);
          }
          function _w(e) {
            var i = e.cm,
              a = i.display;
            e.updatedDisplay && Xa(i),
              (e.barMeasure = Cs(i)),
              a.maxLineChanged &&
                !i.options.lineWrapping &&
                ((e.adjustWidthTo =
                  bd(i, a.maxLine, a.maxLine.text.length).left + 3),
                (i.display.sizerWidth = e.adjustWidthTo),
                (e.barMeasure.scrollWidth = Math.max(
                  a.scroller.clientWidth,
                  a.sizer.offsetLeft +
                    e.adjustWidthTo +
                    ar(i) +
                    i.display.barWidth,
                )),
                (e.maxScrollLeft = Math.max(
                  0,
                  a.sizer.offsetLeft + e.adjustWidthTo - Ai(i),
                ))),
              (e.updatedDisplay || e.selectionChanged) &&
                (e.preparedSelection = a.input.prepareSelection());
          }
          function Sw(e) {
            var i = e.cm;
            e.adjustWidthTo != null &&
              ((i.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
              e.maxScrollLeft < i.doc.scrollLeft &&
                Oi(
                  i,
                  Math.min(i.display.scroller.scrollLeft, e.maxScrollLeft),
                  !0,
                ),
              (i.display.maxLineChanged = !1));
            var a = e.focus && e.focus == mt(jt(i));
            e.preparedSelection &&
              i.display.input.showSelection(e.preparedSelection, a),
              (e.updatedDisplay || e.startHeight != i.doc.height) &&
                xo(i, e.barMeasure),
              e.updatedDisplay && pu(i, e.barMeasure),
              e.selectionChanged && su(i),
              i.state.focused &&
                e.updateInput &&
                i.display.input.reset(e.typing),
              a && Od(e.cm);
          }
          function kw(e) {
            var i = e.cm,
              a = i.display,
              s = i.doc;
            if (
              (e.updatedDisplay && qd(i, e.update),
              a.wheelStartX != null &&
                (e.scrollTop != null ||
                  e.scrollLeft != null ||
                  e.scrollToPos) &&
                (a.wheelStartX = a.wheelStartY = null),
              e.scrollTop != null && Rd(i, e.scrollTop, e.forceScroll),
              e.scrollLeft != null && Oi(i, e.scrollLeft, !0, !0),
              e.scrollToPos)
            ) {
              var c = gw(
                i,
                Ht(s, e.scrollToPos.from),
                Ht(s, e.scrollToPos.to),
                e.scrollToPos.margin,
              );
              pw(i, c);
            }
            var p = e.maybeHiddenMarkers,
              m = e.maybeUnhiddenMarkers;
            if (p)
              for (var y = 0; y < p.length; ++y)
                p[y].lines.length || me(p[y], 'hide');
            if (m)
              for (var w = 0; w < m.length; ++w)
                m[w].lines.length && me(m[w], 'unhide');
            a.wrapper.offsetHeight &&
              (s.scrollTop = i.display.scroller.scrollTop),
              e.changeObjs && me(i, 'changes', i, e.changeObjs),
              e.update && e.update.finish();
          }
          function wn(e, i) {
            if (e.curOp) return i();
            Di(e);
            try {
              return i();
            } finally {
              Ri(e);
            }
          }
          function Ie(e, i) {
            return function () {
              if (e.curOp) return i.apply(e, arguments);
              Di(e);
              try {
                return i.apply(e, arguments);
              } finally {
                Ri(e);
              }
            };
          }
          function tn(e) {
            return function () {
              if (this.curOp) return e.apply(this, arguments);
              Di(this);
              try {
                return e.apply(this, arguments);
              } finally {
                Ri(this);
              }
            };
          }
          function qe(e) {
            return function () {
              var i = this.cm;
              if (!i || i.curOp) return e.apply(this, arguments);
              Di(i);
              try {
                return e.apply(this, arguments);
              } finally {
                Ri(i);
              }
            };
          }
          function Es(e, i) {
            e.doc.highlightFrontier < e.display.viewTo &&
              e.state.highlight.set(i, Q(Cw, e));
          }
          function Cw(e) {
            var i = e.doc;
            if (!(i.highlightFrontier >= e.display.viewTo)) {
              var a = +new Date() + e.options.workTime,
                s = vs(e, i.highlightFrontier),
                c = [];
              i.iter(
                s.line,
                Math.min(i.first + i.size, e.display.viewTo + 500),
                function (p) {
                  if (s.line >= e.display.viewFrom) {
                    var m = p.styles,
                      y =
                        p.text.length > e.options.maxHighlightLength
                          ? Sr(i.mode, s.state)
                          : null,
                      w = Vh(e, p, s, !0);
                    y && (s.state = y), (p.styles = w.styles);
                    var _ = p.styleClasses,
                      N = w.classes;
                    N ? (p.styleClasses = N) : _ && (p.styleClasses = null);
                    for (
                      var D =
                          !m ||
                          m.length != p.styles.length ||
                          (_ != N &&
                            (!_ ||
                              !N ||
                              _.bgClass != N.bgClass ||
                              _.textClass != N.textClass)),
                        B = 0;
                      !D && B < m.length;
                      ++B
                    )
                      D = m[B] != p.styles[B];
                    D && c.push(s.line),
                      (p.stateAfter = s.save()),
                      s.nextLine();
                  } else
                    p.text.length <= e.options.maxHighlightLength &&
                      Hc(e, p.text, s),
                      (p.stateAfter = s.line % 5 == 0 ? s.save() : null),
                      s.nextLine();
                  if (+new Date() > a) return Es(e, e.options.workDelay), !0;
                },
              ),
                (i.highlightFrontier = s.line),
                (i.modeFrontier = Math.max(i.modeFrontier, s.line)),
                c.length &&
                  wn(e, function () {
                    for (var p = 0; p < c.length; p++) ti(e, c[p], 'text');
                  });
            }
          }
          var Ja = function (e, i, a) {
            var s = e.display;
            (this.viewport = i),
              (this.visible = Ya(s, e.doc, i)),
              (this.editorIsHidden = !s.wrapper.offsetWidth),
              (this.wrapperHeight = s.wrapper.clientHeight),
              (this.wrapperWidth = s.wrapper.clientWidth),
              (this.oldDisplayWidth = Ai(e)),
              (this.force = a),
              (this.dims = nu(e)),
              (this.events = []);
          };
          (Ja.prototype.signal = function (e, i) {
            Je(e, i) && this.events.push(arguments);
          }),
            (Ja.prototype.finish = function () {
              for (var e = 0; e < this.events.length; e++)
                me.apply(null, this.events[e]);
            });
          function Tw(e) {
            var i = e.display;
            !i.scrollbarsClipped &&
              i.scroller.offsetWidth &&
              ((i.nativeBarWidth =
                i.scroller.offsetWidth - i.scroller.clientWidth),
              (i.heightForcer.style.height = ar(e) + 'px'),
              (i.sizer.style.marginBottom = -i.nativeBarWidth + 'px'),
              (i.sizer.style.borderRightWidth = ar(e) + 'px'),
              (i.scrollbarsClipped = !0));
          }
          function Ew(e) {
            if (e.hasFocus()) return null;
            var i = mt(jt(e));
            if (!i || !et(e.display.lineDiv, i)) return null;
            var a = { activeElt: i };
            if (window.getSelection) {
              var s = Zt(e).getSelection();
              s.anchorNode &&
                s.extend &&
                et(e.display.lineDiv, s.anchorNode) &&
                ((a.anchorNode = s.anchorNode),
                (a.anchorOffset = s.anchorOffset),
                (a.focusNode = s.focusNode),
                (a.focusOffset = s.focusOffset));
            }
            return a;
          }
          function Lw(e) {
            if (
              !(
                !e ||
                !e.activeElt ||
                e.activeElt == mt(e.activeElt.ownerDocument)
              ) &&
              (e.activeElt.focus(),
              !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
                e.anchorNode &&
                et(document.body, e.anchorNode) &&
                et(document.body, e.focusNode))
            ) {
              var i = e.activeElt.ownerDocument,
                a = i.defaultView.getSelection(),
                s = i.createRange();
              s.setEnd(e.anchorNode, e.anchorOffset),
                s.collapse(!1),
                a.removeAllRanges(),
                a.addRange(s),
                a.extend(e.focusNode, e.focusOffset);
            }
          }
          function fu(e, i) {
            var a = e.display,
              s = e.doc;
            if (i.editorIsHidden) return ei(e), !1;
            if (
              !i.force &&
              i.visible.from >= a.viewFrom &&
              i.visible.to <= a.viewTo &&
              (a.updateLineNumbers == null ||
                a.updateLineNumbers >= a.viewTo) &&
              a.renderedView == a.view &&
              Nd(e) == 0
            )
              return !1;
            Bd(e) && (ei(e), (i.dims = nu(e)));
            var c = s.first + s.size,
              p = Math.max(i.visible.from - e.options.viewportMargin, s.first),
              m = Math.min(c, i.visible.to + e.options.viewportMargin);
            a.viewFrom < p &&
              p - a.viewFrom < 20 &&
              (p = Math.max(s.first, a.viewFrom)),
              a.viewTo > m && a.viewTo - m < 20 && (m = Math.min(c, a.viewTo)),
              Cr && ((p = jc(e.doc, p)), (m = ad(e.doc, m)));
            var y =
              p != a.viewFrom ||
              m != a.viewTo ||
              a.lastWrapHeight != i.wrapperHeight ||
              a.lastWrapWidth != i.wrapperWidth;
            hw(e, p, m),
              (a.viewOffset = Tr(Mt(e.doc, a.viewFrom))),
              (e.display.mover.style.top = a.viewOffset + 'px');
            var w = Nd(e);
            if (
              !y &&
              w == 0 &&
              !i.force &&
              a.renderedView == a.view &&
              (a.updateLineNumbers == null || a.updateLineNumbers >= a.viewTo)
            )
              return !1;
            var _ = Ew(e);
            return (
              w > 4 && (a.lineDiv.style.display = 'none'),
              Aw(e, a.updateLineNumbers, i.dims),
              w > 4 && (a.lineDiv.style.display = ''),
              (a.renderedView = a.view),
              Lw(_),
              j(a.cursorDiv),
              j(a.selectionDiv),
              (a.gutters.style.height = a.sizer.style.minHeight = 0),
              y &&
                ((a.lastWrapHeight = i.wrapperHeight),
                (a.lastWrapWidth = i.wrapperWidth),
                Es(e, 400)),
              (a.updateLineNumbers = null),
              !0
            );
          }
          function qd(e, i) {
            for (var a = i.viewport, s = !0; ; s = !1) {
              if (!s || !e.options.lineWrapping || i.oldDisplayWidth == Ai(e)) {
                if (
                  (a &&
                    a.top != null &&
                    (a = {
                      top: Math.min(
                        e.doc.height + Xc(e.display) - Yc(e),
                        a.top,
                      ),
                    }),
                  (i.visible = Ya(e.display, e.doc, a)),
                  i.visible.from >= e.display.viewFrom &&
                    i.visible.to <= e.display.viewTo)
                )
                  break;
              } else s && (i.visible = Ya(e.display, e.doc, a));
              if (!fu(e, i)) break;
              Xa(e);
              var c = Cs(e);
              _s(e), xo(e, c), pu(e, c), (i.force = !1);
            }
            i.signal(e, 'update', e),
              (e.display.viewFrom != e.display.reportedViewFrom ||
                e.display.viewTo != e.display.reportedViewTo) &&
                (i.signal(
                  e,
                  'viewportChange',
                  e,
                  e.display.viewFrom,
                  e.display.viewTo,
                ),
                (e.display.reportedViewFrom = e.display.viewFrom),
                (e.display.reportedViewTo = e.display.viewTo));
          }
          function hu(e, i) {
            var a = new Ja(e, i);
            if (fu(e, a)) {
              Xa(e), qd(e, a);
              var s = Cs(e);
              _s(e), xo(e, s), pu(e, s), a.finish();
            }
          }
          function Aw(e, i, a) {
            var s = e.display,
              c = e.options.lineNumbers,
              p = s.lineDiv,
              m = p.firstChild;
            function y(Z) {
              var rt = Z.nextSibling;
              return (
                v && G && e.display.currentWheelTarget == Z
                  ? (Z.style.display = 'none')
                  : Z.parentNode.removeChild(Z),
                rt
              );
            }
            for (var w = s.view, _ = s.viewFrom, N = 0; N < w.length; N++) {
              var D = w[N];
              if (!D.hidden)
                if (!D.node || D.node.parentNode != p) {
                  var B = nw(e, D, _, a);
                  p.insertBefore(B, m);
                } else {
                  for (; m != D.node; ) m = y(m);
                  var H = c && i != null && i <= _ && D.lineNumber;
                  D.changes &&
                    (Tt(D.changes, 'gutter') > -1 && (H = !1), hd(e, D, _, a)),
                    H &&
                      (j(D.lineNumber),
                      D.lineNumber.appendChild(
                        document.createTextNode(R(e.options, _)),
                      )),
                    (m = D.node.nextSibling);
                }
              _ += D.size;
            }
            for (; m; ) m = y(m);
          }
          function du(e) {
            var i = e.gutters.offsetWidth;
            (e.sizer.style.marginLeft = i + 'px'), Fe(e, 'gutterChanged', e);
          }
          function pu(e, i) {
            (e.display.sizer.style.minHeight = i.docHeight + 'px'),
              (e.display.heightForcer.style.top = i.docHeight + 'px'),
              (e.display.gutters.style.height =
                i.docHeight + e.display.barHeight + ar(e) + 'px');
          }
          function Hd(e) {
            var i = e.display,
              a = i.view;
            if (
              !(
                !i.alignWidgets &&
                (!i.gutters.firstChild || !e.options.fixedGutter)
              )
            ) {
              for (
                var s = ru(i) - i.scroller.scrollLeft + e.doc.scrollLeft,
                  c = i.gutters.offsetWidth,
                  p = s + 'px',
                  m = 0;
                m < a.length;
                m++
              )
                if (!a[m].hidden) {
                  e.options.fixedGutter &&
                    (a[m].gutter && (a[m].gutter.style.left = p),
                    a[m].gutterBackground &&
                      (a[m].gutterBackground.style.left = p));
                  var y = a[m].alignable;
                  if (y) for (var w = 0; w < y.length; w++) y[w].style.left = p;
                }
              e.options.fixedGutter && (i.gutters.style.left = s + c + 'px');
            }
          }
          function Bd(e) {
            if (!e.options.lineNumbers) return !1;
            var i = e.doc,
              a = R(e.options, i.first + i.size - 1),
              s = e.display;
            if (a.length != s.lineNumChars) {
              var c = s.measure.appendChild(
                  k(
                    'div',
                    [k('div', a)],
                    'CodeMirror-linenumber CodeMirror-gutter-elt',
                  ),
                ),
                p = c.firstChild.offsetWidth,
                m = c.offsetWidth - p;
              return (
                (s.lineGutter.style.width = ''),
                (s.lineNumInnerWidth =
                  Math.max(p, s.lineGutter.offsetWidth - m) + 1),
                (s.lineNumWidth = s.lineNumInnerWidth + m),
                (s.lineNumChars = s.lineNumInnerWidth ? a.length : -1),
                (s.lineGutter.style.width = s.lineNumWidth + 'px'),
                du(e.display),
                !0
              );
            }
            return !1;
          }
          function gu(e, i) {
            for (var a = [], s = !1, c = 0; c < e.length; c++) {
              var p = e[c],
                m = null;
              if (
                (typeof p != 'string' && ((m = p.style), (p = p.className)),
                p == 'CodeMirror-linenumbers')
              )
                if (i) s = !0;
                else continue;
              a.push({ className: p, style: m });
            }
            return (
              i &&
                !s &&
                a.push({ className: 'CodeMirror-linenumbers', style: null }),
              a
            );
          }
          function Wd(e) {
            var i = e.gutters,
              a = e.gutterSpecs;
            j(i), (e.lineGutter = null);
            for (var s = 0; s < a.length; ++s) {
              var c = a[s],
                p = c.className,
                m = c.style,
                y = i.appendChild(k('div', null, 'CodeMirror-gutter ' + p));
              m && (y.style.cssText = m),
                p == 'CodeMirror-linenumbers' &&
                  ((e.lineGutter = y),
                  (y.style.width = (e.lineNumWidth || 1) + 'px'));
            }
            (i.style.display = a.length ? '' : 'none'), du(e);
          }
          function Ls(e) {
            Wd(e.display), an(e), Hd(e);
          }
          function Mw(e, i, a, s) {
            var c = this;
            (this.input = a),
              (c.scrollbarFiller = k(
                'div',
                null,
                'CodeMirror-scrollbar-filler',
              )),
              c.scrollbarFiller.setAttribute('cm-not-content', 'true'),
              (c.gutterFiller = k('div', null, 'CodeMirror-gutter-filler')),
              c.gutterFiller.setAttribute('cm-not-content', 'true'),
              (c.lineDiv = q('div', null, 'CodeMirror-code')),
              (c.selectionDiv = k(
                'div',
                null,
                null,
                'position: relative; z-index: 1',
              )),
              (c.cursorDiv = k('div', null, 'CodeMirror-cursors')),
              (c.measure = k('div', null, 'CodeMirror-measure')),
              (c.lineMeasure = k('div', null, 'CodeMirror-measure')),
              (c.lineSpace = q(
                'div',
                [
                  c.measure,
                  c.lineMeasure,
                  c.selectionDiv,
                  c.cursorDiv,
                  c.lineDiv,
                ],
                null,
                'position: relative; outline: none',
              ));
            var p = q('div', [c.lineSpace], 'CodeMirror-lines');
            (c.mover = k('div', [p], null, 'position: relative')),
              (c.sizer = k('div', [c.mover], 'CodeMirror-sizer')),
              (c.sizerWidth = null),
              (c.heightForcer = k(
                'div',
                null,
                null,
                'position: absolute; height: ' + pe + 'px; width: 1px;',
              )),
              (c.gutters = k('div', null, 'CodeMirror-gutters')),
              (c.lineGutter = null),
              (c.scroller = k(
                'div',
                [c.sizer, c.heightForcer, c.gutters],
                'CodeMirror-scroll',
              )),
              c.scroller.setAttribute('tabIndex', '-1'),
              (c.wrapper = k(
                'div',
                [c.scrollbarFiller, c.gutterFiller, c.scroller],
                'CodeMirror',
              )),
              x && S >= 105 && (c.wrapper.style.clipPath = 'inset(0px)'),
              c.wrapper.setAttribute('translate', 'no'),
              d &&
                g < 8 &&
                ((c.gutters.style.zIndex = -1),
                (c.scroller.style.paddingRight = 0)),
              !v && !(l && O) && (c.scroller.draggable = !0),
              e && (e.appendChild ? e.appendChild(c.wrapper) : e(c.wrapper)),
              (c.viewFrom = c.viewTo = i.first),
              (c.reportedViewFrom = c.reportedViewTo = i.first),
              (c.view = []),
              (c.renderedView = null),
              (c.externalMeasured = null),
              (c.viewOffset = 0),
              (c.lastWrapHeight = c.lastWrapWidth = 0),
              (c.updateLineNumbers = null),
              (c.nativeBarWidth = c.barHeight = c.barWidth = 0),
              (c.scrollbarsClipped = !1),
              (c.lineNumWidth = c.lineNumInnerWidth = c.lineNumChars = null),
              (c.alignWidgets = !1),
              (c.cachedCharWidth =
                c.cachedTextHeight =
                c.cachedPaddingH =
                  null),
              (c.maxLine = null),
              (c.maxLineLength = 0),
              (c.maxLineChanged = !1),
              (c.wheelDX = c.wheelDY = c.wheelStartX = c.wheelStartY = null),
              (c.shift = !1),
              (c.selForContextMenu = null),
              (c.activeTouch = null),
              (c.gutterSpecs = gu(s.gutters, s.lineNumbers)),
              Wd(c),
              a.init(c);
          }
          var Qa = 0,
            Lr = null;
          d
            ? (Lr = -0.53)
            : l
            ? (Lr = 15)
            : x
            ? (Lr = -0.7)
            : L && (Lr = -1 / 3);
          function Ud(e) {
            var i = e.wheelDeltaX,
              a = e.wheelDeltaY;
            return (
              i == null &&
                e.detail &&
                e.axis == e.HORIZONTAL_AXIS &&
                (i = e.detail),
              a == null && e.detail && e.axis == e.VERTICAL_AXIS
                ? (a = e.detail)
                : a == null && (a = e.wheelDelta),
              { x: i, y: a }
            );
          }
          function Nw(e) {
            var i = Ud(e);
            return (i.x *= Lr), (i.y *= Lr), i;
          }
          function jd(e, i) {
            x &&
              S == 102 &&
              (e.display.chromeScrollHack == null
                ? (e.display.sizer.style.pointerEvents = 'none')
                : clearTimeout(e.display.chromeScrollHack),
              (e.display.chromeScrollHack = setTimeout(function () {
                (e.display.chromeScrollHack = null),
                  (e.display.sizer.style.pointerEvents = '');
              }, 100)));
            var a = Ud(i),
              s = a.x,
              c = a.y,
              p = Lr;
            i.deltaMode === 0 && ((s = i.deltaX), (c = i.deltaY), (p = 1));
            var m = e.display,
              y = m.scroller,
              w = y.scrollWidth > y.clientWidth,
              _ = y.scrollHeight > y.clientHeight;
            if ((s && w) || (c && _)) {
              if (c && G && v) {
                t: for (var N = i.target, D = m.view; N != y; N = N.parentNode)
                  for (var B = 0; B < D.length; B++)
                    if (D[B].node == N) {
                      e.display.currentWheelTarget = N;
                      break t;
                    }
              }
              if (s && !l && !A && p != null) {
                c && _ && ks(e, Math.max(0, y.scrollTop + c * p)),
                  Oi(e, Math.max(0, y.scrollLeft + s * p)),
                  (!c || (c && _)) && Ve(i),
                  (m.wheelStartX = null);
                return;
              }
              if (c && p != null) {
                var H = c * p,
                  Z = e.doc.scrollTop,
                  rt = Z + m.wrapper.clientHeight;
                H < 0
                  ? (Z = Math.max(0, Z + H - 50))
                  : (rt = Math.min(e.doc.height, rt + H + 50)),
                  hu(e, { top: Z, bottom: rt });
              }
              Qa < 20 &&
                i.deltaMode !== 0 &&
                (m.wheelStartX == null
                  ? ((m.wheelStartX = y.scrollLeft),
                    (m.wheelStartY = y.scrollTop),
                    (m.wheelDX = s),
                    (m.wheelDY = c),
                    setTimeout(function () {
                      if (m.wheelStartX != null) {
                        var pt = y.scrollLeft - m.wheelStartX,
                          yt = y.scrollTop - m.wheelStartY,
                          St =
                            (yt && m.wheelDY && yt / m.wheelDY) ||
                            (pt && m.wheelDX && pt / m.wheelDX);
                        (m.wheelStartX = m.wheelStartY = null),
                          St && ((Lr = (Lr * Qa + St) / (Qa + 1)), ++Qa);
                      }
                    }, 200))
                  : ((m.wheelDX += s), (m.wheelDY += c)));
            }
          }
          var Nn = function (e, i) {
            (this.ranges = e), (this.primIndex = i);
          };
          (Nn.prototype.primary = function () {
            return this.ranges[this.primIndex];
          }),
            (Nn.prototype.equals = function (e) {
              if (e == this) return !0;
              if (
                e.primIndex != this.primIndex ||
                e.ranges.length != this.ranges.length
              )
                return !1;
              for (var i = 0; i < this.ranges.length; i++) {
                var a = this.ranges[i],
                  s = e.ranges[i];
                if (!qt(a.anchor, s.anchor) || !qt(a.head, s.head)) return !1;
              }
              return !0;
            }),
            (Nn.prototype.deepCopy = function () {
              for (var e = [], i = 0; i < this.ranges.length; i++)
                e[i] = new le(
                  Kt(this.ranges[i].anchor),
                  Kt(this.ranges[i].head),
                );
              return new Nn(e, this.primIndex);
            }),
            (Nn.prototype.somethingSelected = function () {
              for (var e = 0; e < this.ranges.length; e++)
                if (!this.ranges[e].empty()) return !0;
              return !1;
            }),
            (Nn.prototype.contains = function (e, i) {
              i || (i = e);
              for (var a = 0; a < this.ranges.length; a++) {
                var s = this.ranges[a];
                if (Y(i, s.from()) >= 0 && Y(e, s.to()) <= 0) return a;
              }
              return -1;
            });
          var le = function (e, i) {
            (this.anchor = e), (this.head = i);
          };
          (le.prototype.from = function () {
            return $e(this.anchor, this.head);
          }),
            (le.prototype.to = function () {
              return ie(this.anchor, this.head);
            }),
            (le.prototype.empty = function () {
              return (
                this.head.line == this.anchor.line &&
                this.head.ch == this.anchor.ch
              );
            });
          function Gn(e, i, a) {
            var s = e && e.options.selectionsMayTouch,
              c = i[a];
            i.sort(function (B, H) {
              return Y(B.from(), H.from());
            }),
              (a = Tt(i, c));
            for (var p = 1; p < i.length; p++) {
              var m = i[p],
                y = i[p - 1],
                w = Y(y.to(), m.from());
              if (s && !m.empty() ? w > 0 : w >= 0) {
                var _ = $e(y.from(), m.from()),
                  N = ie(y.to(), m.to()),
                  D = y.empty() ? m.from() == m.head : y.from() == y.head;
                p <= a && --a, i.splice(--p, 2, new le(D ? N : _, D ? _ : N));
              }
            }
            return new Nn(i, a);
          }
          function ni(e, i) {
            return new Nn([new le(e, i || e)], 0);
          }
          function ri(e) {
            return e.text
              ? F(
                  e.from.line + e.text.length - 1,
                  st(e.text).length + (e.text.length == 1 ? e.from.ch : 0),
                )
              : e.to;
          }
          function Gd(e, i) {
            if (Y(e, i.from) < 0) return e;
            if (Y(e, i.to) <= 0) return ri(i);
            var a = e.line + i.text.length - (i.to.line - i.from.line) - 1,
              s = e.ch;
            return e.line == i.to.line && (s += ri(i).ch - i.to.ch), F(a, s);
          }
          function vu(e, i) {
            for (var a = [], s = 0; s < e.sel.ranges.length; s++) {
              var c = e.sel.ranges[s];
              a.push(new le(Gd(c.anchor, i), Gd(c.head, i)));
            }
            return Gn(e.cm, a, e.sel.primIndex);
          }
          function Vd(e, i, a) {
            return e.line == i.line
              ? F(a.line, e.ch - i.ch + a.ch)
              : F(a.line + (e.line - i.line), e.ch);
          }
          function Pw(e, i, a) {
            for (
              var s = [], c = F(e.first, 0), p = c, m = 0;
              m < i.length;
              m++
            ) {
              var y = i[m],
                w = Vd(y.from, c, p),
                _ = Vd(ri(y), c, p);
              if (((c = y.to), (p = _), a == 'around')) {
                var N = e.sel.ranges[m],
                  D = Y(N.head, N.anchor) < 0;
                s[m] = new le(D ? _ : w, D ? w : _);
              } else s[m] = new le(w, w);
            }
            return new Nn(s, e.sel.primIndex);
          }
          function mu(e) {
            (e.doc.mode = _r(e.options, e.doc.modeOption)), As(e);
          }
          function As(e) {
            e.doc.iter(function (i) {
              i.stateAfter && (i.stateAfter = null),
                i.styles && (i.styles = null);
            }),
              (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
              Es(e, 100),
              e.state.modeGen++,
              e.curOp && an(e);
          }
          function Kd(e, i) {
            return (
              i.from.ch == 0 &&
              i.to.ch == 0 &&
              st(i.text) == '' &&
              (!e.cm || e.cm.options.wholeLineUpdateBefore)
            );
          }
          function yu(e, i, a, s) {
            function c(St) {
              return a ? a[St] : null;
            }
            function p(St, bt, Et) {
              qb(St, bt, Et, s), Fe(St, 'change', St, i);
            }
            function m(St, bt) {
              for (var Et = [], Dt = St; Dt < bt; ++Dt)
                Et.push(new po(_[Dt], c(Dt), s));
              return Et;
            }
            var y = i.from,
              w = i.to,
              _ = i.text,
              N = Mt(e, y.line),
              D = Mt(e, w.line),
              B = st(_),
              H = c(_.length - 1),
              Z = w.line - y.line;
            if (i.full)
              e.insert(0, m(0, _.length)),
                e.remove(_.length, e.size - _.length);
            else if (Kd(e, i)) {
              var rt = m(0, _.length - 1);
              p(D, D.text, H),
                Z && e.remove(y.line, Z),
                rt.length && e.insert(y.line, rt);
            } else if (N == D)
              if (_.length == 1)
                p(N, N.text.slice(0, y.ch) + B + N.text.slice(w.ch), H);
              else {
                var pt = m(1, _.length - 1);
                pt.push(new po(B + N.text.slice(w.ch), H, s)),
                  p(N, N.text.slice(0, y.ch) + _[0], c(0)),
                  e.insert(y.line + 1, pt);
              }
            else if (_.length == 1)
              p(N, N.text.slice(0, y.ch) + _[0] + D.text.slice(w.ch), c(0)),
                e.remove(y.line + 1, Z);
            else {
              p(N, N.text.slice(0, y.ch) + _[0], c(0)),
                p(D, B + D.text.slice(w.ch), H);
              var yt = m(1, _.length - 1);
              Z > 1 && e.remove(y.line + 1, Z - 1), e.insert(y.line + 1, yt);
            }
            Fe(e, 'change', e, i);
          }
          function ii(e, i, a) {
            function s(c, p, m) {
              if (c.linked)
                for (var y = 0; y < c.linked.length; ++y) {
                  var w = c.linked[y];
                  if (w.doc != p) {
                    var _ = m && w.sharedHist;
                    (a && !_) || (i(w.doc, _), s(w.doc, c, _));
                  }
                }
            }
            s(e, null, !0);
          }
          function Xd(e, i) {
            if (i.cm) throw new Error('This document is already in use.');
            (e.doc = i),
              (i.cm = e),
              iu(e),
              mu(e),
              Yd(e),
              (e.options.direction = i.direction),
              e.options.lineWrapping || Vc(e),
              (e.options.mode = i.modeOption),
              an(e);
          }
          function Yd(e) {
            (e.doc.direction == 'rtl'
              ? Ct
              : dt)(e.display.lineDiv, 'CodeMirror-rtl');
          }
          function Ow(e) {
            wn(e, function () {
              Yd(e), an(e);
            });
          }
          function tl(e) {
            (this.done = []),
              (this.undone = []),
              (this.undoDepth = e ? e.undoDepth : 1 / 0),
              (this.lastModTime = this.lastSelTime = 0),
              (this.lastOp = this.lastSelOp = null),
              (this.lastOrigin = this.lastSelOrigin = null),
              (this.generation = this.maxGeneration = e ? e.maxGeneration : 1);
          }
          function bu(e, i) {
            var a = { from: Kt(i.from), to: ri(i), text: kr(e, i.from, i.to) };
            return (
              Qd(e, a, i.from.line, i.to.line + 1),
              ii(
                e,
                function (s) {
                  return Qd(s, a, i.from.line, i.to.line + 1);
                },
                !0,
              ),
              a
            );
          }
          function Zd(e) {
            for (; e.length; ) {
              var i = st(e);
              if (i.ranges) e.pop();
              else break;
            }
          }
          function $w(e, i) {
            if (i) return Zd(e.done), st(e.done);
            if (e.done.length && !st(e.done).ranges) return st(e.done);
            if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
              return e.done.pop(), st(e.done);
          }
          function Jd(e, i, a, s) {
            var c = e.history;
            c.undone.length = 0;
            var p = +new Date(),
              m,
              y;
            if (
              (c.lastOp == s ||
                (c.lastOrigin == i.origin &&
                  i.origin &&
                  ((i.origin.charAt(0) == '+' &&
                    c.lastModTime >
                      p - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                    i.origin.charAt(0) == '*'))) &&
              (m = $w(c, c.lastOp == s))
            )
              (y = st(m.changes)),
                Y(i.from, i.to) == 0 && Y(i.from, y.to) == 0
                  ? (y.to = ri(i))
                  : m.changes.push(bu(e, i));
            else {
              var w = st(c.done);
              for (
                (!w || !w.ranges) && el(e.sel, c.done),
                  m = { changes: [bu(e, i)], generation: c.generation },
                  c.done.push(m);
                c.done.length > c.undoDepth;

              )
                c.done.shift(), c.done[0].ranges || c.done.shift();
            }
            c.done.push(a),
              (c.generation = ++c.maxGeneration),
              (c.lastModTime = c.lastSelTime = p),
              (c.lastOp = c.lastSelOp = s),
              (c.lastOrigin = c.lastSelOrigin = i.origin),
              y || me(e, 'historyAdded');
          }
          function Dw(e, i, a, s) {
            var c = i.charAt(0);
            return (
              c == '*' ||
              (c == '+' &&
                a.ranges.length == s.ranges.length &&
                a.somethingSelected() == s.somethingSelected() &&
                new Date() - e.history.lastSelTime <=
                  (e.cm ? e.cm.options.historyEventDelay : 500))
            );
          }
          function Rw(e, i, a, s) {
            var c = e.history,
              p = s && s.origin;
            a == c.lastSelOp ||
            (p &&
              c.lastSelOrigin == p &&
              ((c.lastModTime == c.lastSelTime && c.lastOrigin == p) ||
                Dw(e, p, st(c.done), i)))
              ? (c.done[c.done.length - 1] = i)
              : el(i, c.done),
              (c.lastSelTime = +new Date()),
              (c.lastSelOrigin = p),
              (c.lastSelOp = a),
              s && s.clearRedo !== !1 && Zd(c.undone);
          }
          function el(e, i) {
            var a = st(i);
            (a && a.ranges && a.equals(e)) || i.push(e);
          }
          function Qd(e, i, a, s) {
            var c = i['spans_' + e.id],
              p = 0;
            e.iter(
              Math.max(e.first, a),
              Math.min(e.first + e.size, s),
              function (m) {
                m.markedSpans &&
                  ((c || (c = i['spans_' + e.id] = {}))[p] = m.markedSpans),
                  ++p;
              },
            );
          }
          function zw(e) {
            if (!e) return null;
            for (var i, a = 0; a < e.length; ++a)
              e[a].marker.explicitlyCleared
                ? i || (i = e.slice(0, a))
                : i && i.push(e[a]);
            return i ? (i.length ? i : null) : e;
          }
          function Fw(e, i) {
            var a = i['spans_' + e.id];
            if (!a) return null;
            for (var s = [], c = 0; c < i.text.length; ++c) s.push(zw(a[c]));
            return s;
          }
          function tp(e, i) {
            var a = Fw(e, i),
              s = Wc(e, i);
            if (!a) return s;
            if (!s) return a;
            for (var c = 0; c < a.length; ++c) {
              var p = a[c],
                m = s[c];
              if (p && m)
                t: for (var y = 0; y < m.length; ++y) {
                  for (var w = m[y], _ = 0; _ < p.length; ++_)
                    if (p[_].marker == w.marker) continue t;
                  p.push(w);
                }
              else m && (a[c] = m);
            }
            return a;
          }
          function _o(e, i, a) {
            for (var s = [], c = 0; c < e.length; ++c) {
              var p = e[c];
              if (p.ranges) {
                s.push(a ? Nn.prototype.deepCopy.call(p) : p);
                continue;
              }
              var m = p.changes,
                y = [];
              s.push({ changes: y });
              for (var w = 0; w < m.length; ++w) {
                var _ = m[w],
                  N = void 0;
                if ((y.push({ from: _.from, to: _.to, text: _.text }), i))
                  for (var D in _)
                    (N = D.match(/^spans_(\d+)$/)) &&
                      Tt(i, Number(N[1])) > -1 &&
                      ((st(y)[D] = _[D]), delete _[D]);
              }
            }
            return s;
          }
          function wu(e, i, a, s) {
            if (s) {
              var c = e.anchor;
              if (a) {
                var p = Y(i, c) < 0;
                p != Y(a, c) < 0
                  ? ((c = i), (i = a))
                  : p != Y(i, a) < 0 && (i = a);
              }
              return new le(c, i);
            } else return new le(a || i, i);
          }
          function nl(e, i, a, s, c) {
            c == null && (c = e.cm && (e.cm.display.shift || e.extend)),
              Ke(e, new Nn([wu(e.sel.primary(), i, a, c)], 0), s);
          }
          function ep(e, i, a) {
            for (
              var s = [], c = e.cm && (e.cm.display.shift || e.extend), p = 0;
              p < e.sel.ranges.length;
              p++
            )
              s[p] = wu(e.sel.ranges[p], i[p], null, c);
            var m = Gn(e.cm, s, e.sel.primIndex);
            Ke(e, m, a);
          }
          function xu(e, i, a, s) {
            var c = e.sel.ranges.slice(0);
            (c[i] = a), Ke(e, Gn(e.cm, c, e.sel.primIndex), s);
          }
          function np(e, i, a, s) {
            Ke(e, ni(i, a), s);
          }
          function Iw(e, i, a) {
            var s = {
              ranges: i.ranges,
              update: function (c) {
                this.ranges = [];
                for (var p = 0; p < c.length; p++)
                  this.ranges[p] = new le(Ht(e, c[p].anchor), Ht(e, c[p].head));
              },
              origin: a && a.origin,
            };
            return (
              me(e, 'beforeSelectionChange', e, s),
              e.cm && me(e.cm, 'beforeSelectionChange', e.cm, s),
              s.ranges != i.ranges ? Gn(e.cm, s.ranges, s.ranges.length - 1) : i
            );
          }
          function rp(e, i, a) {
            var s = e.history.done,
              c = st(s);
            c && c.ranges ? ((s[s.length - 1] = i), rl(e, i, a)) : Ke(e, i, a);
          }
          function Ke(e, i, a) {
            rl(e, i, a), Rw(e, e.sel, e.cm ? e.cm.curOp.id : NaN, a);
          }
          function rl(e, i, a) {
            (Je(e, 'beforeSelectionChange') ||
              (e.cm && Je(e.cm, 'beforeSelectionChange'))) &&
              (i = Iw(e, i, a));
            var s =
              (a && a.bias) ||
              (Y(i.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
            ip(e, sp(e, i, s, !0)),
              !(a && a.scroll === !1) &&
                e.cm &&
                e.cm.getOption('readOnly') != 'nocursor' &&
                wo(e.cm);
          }
          function ip(e, i) {
            i.equals(e.sel) ||
              ((e.sel = i),
              e.cm &&
                ((e.cm.curOp.updateInput = 1),
                (e.cm.curOp.selectionChanged = !0),
                Pa(e.cm)),
              Fe(e, 'cursorActivity', e));
          }
          function op(e) {
            ip(e, sp(e, e.sel, null, !1));
          }
          function sp(e, i, a, s) {
            for (var c, p = 0; p < i.ranges.length; p++) {
              var m = i.ranges[p],
                y = i.ranges.length == e.sel.ranges.length && e.sel.ranges[p],
                w = il(e, m.anchor, y && y.anchor, a, s),
                _ = m.head == m.anchor ? w : il(e, m.head, y && y.head, a, s);
              (c || w != m.anchor || _ != m.head) &&
                (c || (c = i.ranges.slice(0, p)), (c[p] = new le(w, _)));
            }
            return c ? Gn(e.cm, c, i.primIndex) : i;
          }
          function So(e, i, a, s, c) {
            var p = Mt(e, i.line);
            if (p.markedSpans)
              for (var m = 0; m < p.markedSpans.length; ++m) {
                var y = p.markedSpans[m],
                  w = y.marker,
                  _ = 'selectLeft' in w ? !w.selectLeft : w.inclusiveLeft,
                  N = 'selectRight' in w ? !w.selectRight : w.inclusiveRight;
                if (
                  (y.from == null || (_ ? y.from <= i.ch : y.from < i.ch)) &&
                  (y.to == null || (N ? y.to >= i.ch : y.to > i.ch))
                ) {
                  if (c && (me(w, 'beforeCursorEnter'), w.explicitlyCleared))
                    if (p.markedSpans) {
                      --m;
                      continue;
                    } else break;
                  if (!w.atomic) continue;
                  if (a) {
                    var D = w.find(s < 0 ? 1 : -1),
                      B = void 0;
                    if (
                      ((s < 0 ? N : _) &&
                        (D = ap(e, D, -s, D && D.line == i.line ? p : null)),
                      D &&
                        D.line == i.line &&
                        (B = Y(D, a)) &&
                        (s < 0 ? B < 0 : B > 0))
                    )
                      return So(e, D, i, s, c);
                  }
                  var H = w.find(s < 0 ? -1 : 1);
                  return (
                    (s < 0 ? _ : N) &&
                      (H = ap(e, H, s, H.line == i.line ? p : null)),
                    H ? So(e, H, i, s, c) : null
                  );
                }
              }
            return i;
          }
          function il(e, i, a, s, c) {
            var p = s || 1,
              m =
                So(e, i, a, p, c) ||
                (!c && So(e, i, a, p, !0)) ||
                So(e, i, a, -p, c) ||
                (!c && So(e, i, a, -p, !0));
            return m || ((e.cantEdit = !0), F(e.first, 0));
          }
          function ap(e, i, a, s) {
            return a < 0 && i.ch == 0
              ? i.line > e.first
                ? Ht(e, F(i.line - 1))
                : null
              : a > 0 && i.ch == (s || Mt(e, i.line)).text.length
              ? i.line < e.first + e.size - 1
                ? F(i.line + 1, 0)
                : null
              : new F(i.line, i.ch + a);
          }
          function lp(e) {
            e.setSelection(F(e.firstLine(), 0), F(e.lastLine()), P);
          }
          function cp(e, i, a) {
            var s = {
              canceled: !1,
              from: i.from,
              to: i.to,
              text: i.text,
              origin: i.origin,
              cancel: function () {
                return (s.canceled = !0);
              },
            };
            return (
              a &&
                (s.update = function (c, p, m, y) {
                  c && (s.from = Ht(e, c)),
                    p && (s.to = Ht(e, p)),
                    m && (s.text = m),
                    y !== void 0 && (s.origin = y);
                }),
              me(e, 'beforeChange', e, s),
              e.cm && me(e.cm, 'beforeChange', e.cm, s),
              s.canceled
                ? (e.cm && (e.cm.curOp.updateInput = 2), null)
                : { from: s.from, to: s.to, text: s.text, origin: s.origin }
            );
          }
          function ko(e, i, a) {
            if (e.cm) {
              if (!e.cm.curOp) return Ie(e.cm, ko)(e, i, a);
              if (e.cm.state.suppressEdits) return;
            }
            if (
              !(
                (Je(e, 'beforeChange') || (e.cm && Je(e.cm, 'beforeChange'))) &&
                ((i = cp(e, i, !0)), !i)
              )
            ) {
              var s = td && !a && Rb(e, i.from, i.to);
              if (s)
                for (var c = s.length - 1; c >= 0; --c)
                  up(e, {
                    from: s[c].from,
                    to: s[c].to,
                    text: c ? [''] : i.text,
                    origin: i.origin,
                  });
              else up(e, i);
            }
          }
          function up(e, i) {
            if (
              !(i.text.length == 1 && i.text[0] == '' && Y(i.from, i.to) == 0)
            ) {
              var a = vu(e, i);
              Jd(e, i, a, e.cm ? e.cm.curOp.id : NaN), Ms(e, i, a, Wc(e, i));
              var s = [];
              ii(e, function (c, p) {
                !p &&
                  Tt(s, c.history) == -1 &&
                  (pp(c.history, i), s.push(c.history)),
                  Ms(c, i, null, Wc(c, i));
              });
            }
          }
          function ol(e, i, a) {
            var s = e.cm && e.cm.state.suppressEdits;
            if (!(s && !a)) {
              for (
                var c = e.history,
                  p,
                  m = e.sel,
                  y = i == 'undo' ? c.done : c.undone,
                  w = i == 'undo' ? c.undone : c.done,
                  _ = 0;
                _ < y.length &&
                ((p = y[_]), !(a ? p.ranges && !p.equals(e.sel) : !p.ranges));
                _++
              );
              if (_ != y.length) {
                for (c.lastOrigin = c.lastSelOrigin = null; ; )
                  if (((p = y.pop()), p.ranges)) {
                    if ((el(p, w), a && !p.equals(e.sel))) {
                      Ke(e, p, { clearRedo: !1 });
                      return;
                    }
                    m = p;
                  } else if (s) {
                    y.push(p);
                    return;
                  } else break;
                var N = [];
                el(m, w),
                  w.push({ changes: N, generation: c.generation }),
                  (c.generation = p.generation || ++c.maxGeneration);
                for (
                  var D =
                      Je(e, 'beforeChange') ||
                      (e.cm && Je(e.cm, 'beforeChange')),
                    B = function (rt) {
                      var pt = p.changes[rt];
                      if (((pt.origin = i), D && !cp(e, pt, !1)))
                        return (y.length = 0), {};
                      N.push(bu(e, pt));
                      var yt = rt ? vu(e, pt) : st(y);
                      Ms(e, pt, yt, tp(e, pt)),
                        !rt &&
                          e.cm &&
                          e.cm.scrollIntoView({ from: pt.from, to: ri(pt) });
                      var St = [];
                      ii(e, function (bt, Et) {
                        !Et &&
                          Tt(St, bt.history) == -1 &&
                          (pp(bt.history, pt), St.push(bt.history)),
                          Ms(bt, pt, null, tp(bt, pt));
                      });
                    },
                    H = p.changes.length - 1;
                  H >= 0;
                  --H
                ) {
                  var Z = B(H);
                  if (Z) return Z.v;
                }
              }
            }
          }
          function fp(e, i) {
            if (
              i != 0 &&
              ((e.first += i),
              (e.sel = new Nn(
                vt(e.sel.ranges, function (c) {
                  return new le(
                    F(c.anchor.line + i, c.anchor.ch),
                    F(c.head.line + i, c.head.ch),
                  );
                }),
                e.sel.primIndex,
              )),
              e.cm)
            ) {
              an(e.cm, e.first, e.first - i, i);
              for (var a = e.cm.display, s = a.viewFrom; s < a.viewTo; s++)
                ti(e.cm, s, 'gutter');
            }
          }
          function Ms(e, i, a, s) {
            if (e.cm && !e.cm.curOp) return Ie(e.cm, Ms)(e, i, a, s);
            if (i.to.line < e.first) {
              fp(e, i.text.length - 1 - (i.to.line - i.from.line));
              return;
            }
            if (!(i.from.line > e.lastLine())) {
              if (i.from.line < e.first) {
                var c = i.text.length - 1 - (e.first - i.from.line);
                fp(e, c),
                  (i = {
                    from: F(e.first, 0),
                    to: F(i.to.line + c, i.to.ch),
                    text: [st(i.text)],
                    origin: i.origin,
                  });
              }
              var p = e.lastLine();
              i.to.line > p &&
                (i = {
                  from: i.from,
                  to: F(p, Mt(e, p).text.length),
                  text: [i.text[0]],
                  origin: i.origin,
                }),
                (i.removed = kr(e, i.from, i.to)),
                a || (a = vu(e, i)),
                e.cm ? qw(e.cm, i, s) : yu(e, i, s),
                rl(e, a, P),
                e.cantEdit && il(e, F(e.firstLine(), 0)) && (e.cantEdit = !1);
            }
          }
          function qw(e, i, a) {
            var s = e.doc,
              c = e.display,
              p = i.from,
              m = i.to,
              y = !1,
              w = p.line;
            e.options.lineWrapping ||
              ((w = ae(Un(Mt(s, p.line)))),
              s.iter(w, m.line + 1, function (H) {
                if (H == c.maxLine) return (y = !0), !0;
              })),
              s.sel.contains(i.from, i.to) > -1 && Pa(e),
              yu(s, i, a, Md(e)),
              e.options.lineWrapping ||
                (s.iter(w, p.line + i.text.length, function (H) {
                  var Z = Ba(H);
                  Z > c.maxLineLength &&
                    ((c.maxLine = H),
                    (c.maxLineLength = Z),
                    (c.maxLineChanged = !0),
                    (y = !1));
                }),
                y && (e.curOp.updateMaxLine = !0)),
              Ab(s, p.line),
              Es(e, 400);
            var _ = i.text.length - (m.line - p.line) - 1;
            i.full
              ? an(e)
              : p.line == m.line && i.text.length == 1 && !Kd(e.doc, i)
              ? ti(e, p.line, 'text')
              : an(e, p.line, m.line + 1, _);
            var N = Je(e, 'changes'),
              D = Je(e, 'change');
            if (D || N) {
              var B = {
                from: p,
                to: m,
                text: i.text,
                removed: i.removed,
                origin: i.origin,
              };
              D && Fe(e, 'change', e, B),
                N && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(B);
            }
            e.display.selForContextMenu = null;
          }
          function Co(e, i, a, s, c) {
            var p;
            s || (s = a),
              Y(s, a) < 0 && ((p = [s, a]), (a = p[0]), (s = p[1])),
              typeof i == 'string' && (i = e.splitLines(i)),
              ko(e, { from: a, to: s, text: i, origin: c });
          }
          function hp(e, i, a, s) {
            a < e.line
              ? (e.line += s)
              : i < e.line && ((e.line = i), (e.ch = 0));
          }
          function dp(e, i, a, s) {
            for (var c = 0; c < e.length; ++c) {
              var p = e[c],
                m = !0;
              if (p.ranges) {
                p.copied || ((p = e[c] = p.deepCopy()), (p.copied = !0));
                for (var y = 0; y < p.ranges.length; y++)
                  hp(p.ranges[y].anchor, i, a, s),
                    hp(p.ranges[y].head, i, a, s);
                continue;
              }
              for (var w = 0; w < p.changes.length; ++w) {
                var _ = p.changes[w];
                if (a < _.from.line)
                  (_.from = F(_.from.line + s, _.from.ch)),
                    (_.to = F(_.to.line + s, _.to.ch));
                else if (i <= _.to.line) {
                  m = !1;
                  break;
                }
              }
              m || (e.splice(0, c + 1), (c = 0));
            }
          }
          function pp(e, i) {
            var a = i.from.line,
              s = i.to.line,
              c = i.text.length - (s - a) - 1;
            dp(e.done, a, s, c), dp(e.undone, a, s, c);
          }
          function Ns(e, i, a, s) {
            var c = i,
              p = i;
            return (
              typeof i == 'number' ? (p = Mt(e, Mn(e, i))) : (c = ae(i)),
              c == null ? null : (s(p, c) && e.cm && ti(e.cm, c, a), p)
            );
          }
          function Ps(e) {
            (this.lines = e), (this.parent = null);
            for (var i = 0, a = 0; a < e.length; ++a)
              (e[a].parent = this), (i += e[a].height);
            this.height = i;
          }
          Ps.prototype = {
            chunkSize: function () {
              return this.lines.length;
            },
            removeInner: function (e, i) {
              for (var a = e, s = e + i; a < s; ++a) {
                var c = this.lines[a];
                (this.height -= c.height), Hb(c), Fe(c, 'delete');
              }
              this.lines.splice(e, i);
            },
            collapse: function (e) {
              e.push.apply(e, this.lines);
            },
            insertInner: function (e, i, a) {
              (this.height += a),
                (this.lines = this.lines
                  .slice(0, e)
                  .concat(i)
                  .concat(this.lines.slice(e)));
              for (var s = 0; s < i.length; ++s) i[s].parent = this;
            },
            iterN: function (e, i, a) {
              for (var s = e + i; e < s; ++e) if (a(this.lines[e])) return !0;
            },
          };
          function Os(e) {
            this.children = e;
            for (var i = 0, a = 0, s = 0; s < e.length; ++s) {
              var c = e[s];
              (i += c.chunkSize()), (a += c.height), (c.parent = this);
            }
            (this.size = i), (this.height = a), (this.parent = null);
          }
          Os.prototype = {
            chunkSize: function () {
              return this.size;
            },
            removeInner: function (e, i) {
              this.size -= i;
              for (var a = 0; a < this.children.length; ++a) {
                var s = this.children[a],
                  c = s.chunkSize();
                if (e < c) {
                  var p = Math.min(i, c - e),
                    m = s.height;
                  if (
                    (s.removeInner(e, p),
                    (this.height -= m - s.height),
                    c == p && (this.children.splice(a--, 1), (s.parent = null)),
                    (i -= p) == 0)
                  )
                    break;
                  e = 0;
                } else e -= c;
              }
              if (
                this.size - i < 25 &&
                (this.children.length > 1 || !(this.children[0] instanceof Ps))
              ) {
                var y = [];
                this.collapse(y),
                  (this.children = [new Ps(y)]),
                  (this.children[0].parent = this);
              }
            },
            collapse: function (e) {
              for (var i = 0; i < this.children.length; ++i)
                this.children[i].collapse(e);
            },
            insertInner: function (e, i, a) {
              (this.size += i.length), (this.height += a);
              for (var s = 0; s < this.children.length; ++s) {
                var c = this.children[s],
                  p = c.chunkSize();
                if (e <= p) {
                  if (
                    (c.insertInner(e, i, a), c.lines && c.lines.length > 50)
                  ) {
                    for (
                      var m = (c.lines.length % 25) + 25, y = m;
                      y < c.lines.length;

                    ) {
                      var w = new Ps(c.lines.slice(y, (y += 25)));
                      (c.height -= w.height),
                        this.children.splice(++s, 0, w),
                        (w.parent = this);
                    }
                    (c.lines = c.lines.slice(0, m)), this.maybeSpill();
                  }
                  break;
                }
                e -= p;
              }
            },
            maybeSpill: function () {
              if (!(this.children.length <= 10)) {
                var e = this;
                do {
                  var i = e.children.splice(e.children.length - 5, 5),
                    a = new Os(i);
                  if (e.parent) {
                    (e.size -= a.size), (e.height -= a.height);
                    var c = Tt(e.parent.children, e);
                    e.parent.children.splice(c + 1, 0, a);
                  } else {
                    var s = new Os(e.children);
                    (s.parent = e), (e.children = [s, a]), (e = s);
                  }
                  a.parent = e.parent;
                } while (e.children.length > 10);
                e.parent.maybeSpill();
              }
            },
            iterN: function (e, i, a) {
              for (var s = 0; s < this.children.length; ++s) {
                var c = this.children[s],
                  p = c.chunkSize();
                if (e < p) {
                  var m = Math.min(i, p - e);
                  if (c.iterN(e, m, a)) return !0;
                  if ((i -= m) == 0) break;
                  e = 0;
                } else e -= p;
              }
            },
          };
          var $s = function (e, i, a) {
            if (a) for (var s in a) a.hasOwnProperty(s) && (this[s] = a[s]);
            (this.doc = e), (this.node = i);
          };
          ($s.prototype.clear = function () {
            var e = this.doc.cm,
              i = this.line.widgets,
              a = this.line,
              s = ae(a);
            if (!(s == null || !i)) {
              for (var c = 0; c < i.length; ++c)
                i[c] == this && i.splice(c--, 1);
              i.length || (a.widgets = null);
              var p = ws(this);
              Fn(a, Math.max(0, a.height - p)),
                e &&
                  (wn(e, function () {
                    gp(e, a, -p), ti(e, s, 'widget');
                  }),
                  Fe(e, 'lineWidgetCleared', e, this, s));
            }
          }),
            ($s.prototype.changed = function () {
              var e = this,
                i = this.height,
                a = this.doc.cm,
                s = this.line;
              this.height = null;
              var c = ws(this) - i;
              c &&
                (Qr(this.doc, s) || Fn(s, s.height + c),
                a &&
                  wn(a, function () {
                    (a.curOp.forceUpdate = !0),
                      gp(a, s, c),
                      Fe(a, 'lineWidgetChanged', a, e, ae(s));
                  }));
            }),
            Qe($s);
          function gp(e, i, a) {
            Tr(i) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) &&
              uu(e, a);
          }
          function Hw(e, i, a, s) {
            var c = new $s(e, a, s),
              p = e.cm;
            return (
              p && c.noHScroll && (p.display.alignWidgets = !0),
              Ns(e, i, 'widget', function (m) {
                var y = m.widgets || (m.widgets = []);
                if (
                  (c.insertAt == null
                    ? y.push(c)
                    : y.splice(
                        Math.min(y.length, Math.max(0, c.insertAt)),
                        0,
                        c,
                      ),
                  (c.line = m),
                  p && !Qr(e, m))
                ) {
                  var w = Tr(m) < e.scrollTop;
                  Fn(m, m.height + ws(c)),
                    w && uu(p, c.height),
                    (p.curOp.forceUpdate = !0);
                }
                return !0;
              }),
              p &&
                Fe(
                  p,
                  'lineWidgetAdded',
                  p,
                  c,
                  typeof i == 'number' ? i : ae(i),
                ),
              c
            );
          }
          var vp = 0,
            oi = function (e, i) {
              (this.lines = []),
                (this.type = i),
                (this.doc = e),
                (this.id = ++vp);
            };
          (oi.prototype.clear = function () {
            if (!this.explicitlyCleared) {
              var e = this.doc.cm,
                i = e && !e.curOp;
              if ((i && Di(e), Je(this, 'clear'))) {
                var a = this.find();
                a && Fe(this, 'clear', a.from, a.to);
              }
              for (var s = null, c = null, p = 0; p < this.lines.length; ++p) {
                var m = this.lines[p],
                  y = ms(m.markedSpans, this);
                e && !this.collapsed
                  ? ti(e, ae(m), 'text')
                  : e &&
                    (y.to != null && (c = ae(m)),
                    y.from != null && (s = ae(m))),
                  (m.markedSpans = Pb(m.markedSpans, y)),
                  y.from == null &&
                    this.collapsed &&
                    !Qr(this.doc, m) &&
                    e &&
                    Fn(m, mo(e.display));
              }
              if (e && this.collapsed && !e.options.lineWrapping)
                for (var w = 0; w < this.lines.length; ++w) {
                  var _ = Un(this.lines[w]),
                    N = Ba(_);
                  N > e.display.maxLineLength &&
                    ((e.display.maxLine = _),
                    (e.display.maxLineLength = N),
                    (e.display.maxLineChanged = !0));
                }
              s != null && e && this.collapsed && an(e, s, c + 1),
                (this.lines.length = 0),
                (this.explicitlyCleared = !0),
                this.atomic &&
                  this.doc.cantEdit &&
                  ((this.doc.cantEdit = !1), e && op(e.doc)),
                e && Fe(e, 'markerCleared', e, this, s, c),
                i && Ri(e),
                this.parent && this.parent.clear();
            }
          }),
            (oi.prototype.find = function (e, i) {
              e == null && this.type == 'bookmark' && (e = 1);
              for (var a, s, c = 0; c < this.lines.length; ++c) {
                var p = this.lines[c],
                  m = ms(p.markedSpans, this);
                if (m.from != null && ((a = F(i ? p : ae(p), m.from)), e == -1))
                  return a;
                if (m.to != null && ((s = F(i ? p : ae(p), m.to)), e == 1))
                  return s;
              }
              return a && { from: a, to: s };
            }),
            (oi.prototype.changed = function () {
              var e = this,
                i = this.find(-1, !0),
                a = this,
                s = this.doc.cm;
              !i ||
                !s ||
                wn(s, function () {
                  var c = i.line,
                    p = ae(i.line),
                    m = Zc(s, p);
                  if (
                    (m &&
                      (_d(m),
                      (s.curOp.selectionChanged = s.curOp.forceUpdate = !0)),
                    (s.curOp.updateMaxLine = !0),
                    !Qr(a.doc, c) && a.height != null)
                  ) {
                    var y = a.height;
                    a.height = null;
                    var w = ws(a) - y;
                    w && Fn(c, c.height + w);
                  }
                  Fe(s, 'markerChanged', s, e);
                });
            }),
            (oi.prototype.attachLine = function (e) {
              if (!this.lines.length && this.doc.cm) {
                var i = this.doc.cm.curOp;
                (!i.maybeHiddenMarkers ||
                  Tt(i.maybeHiddenMarkers, this) == -1) &&
                  (
                    i.maybeUnhiddenMarkers || (i.maybeUnhiddenMarkers = [])
                  ).push(this);
              }
              this.lines.push(e);
            }),
            (oi.prototype.detachLine = function (e) {
              if (
                (this.lines.splice(Tt(this.lines, e), 1),
                !this.lines.length && this.doc.cm)
              ) {
                var i = this.doc.cm.curOp;
                (i.maybeHiddenMarkers || (i.maybeHiddenMarkers = [])).push(
                  this,
                );
              }
            }),
            Qe(oi);
          function To(e, i, a, s, c) {
            if (s && s.shared) return Bw(e, i, a, s, c);
            if (e.cm && !e.cm.curOp) return Ie(e.cm, To)(e, i, a, s, c);
            var p = new oi(e, c),
              m = Y(i, a);
            if (
              (s && tt(s, p, !1), m > 0 || (m == 0 && p.clearWhenEmpty !== !1))
            )
              return p;
            if (
              (p.replacedWith &&
                ((p.collapsed = !0),
                (p.widgetNode = q(
                  'span',
                  [p.replacedWith],
                  'CodeMirror-widget',
                )),
                s.handleMouseEvents ||
                  p.widgetNode.setAttribute('cm-ignore-events', 'true'),
                s.insertLeft && (p.widgetNode.insertLeft = !0)),
              p.collapsed)
            ) {
              if (
                sd(e, i.line, i, a, p) ||
                (i.line != a.line && sd(e, a.line, i, a, p))
              )
                throw new Error(
                  'Inserting collapsed marker partially overlapping an existing one',
                );
              Nb();
            }
            p.addToHistory &&
              Jd(e, { from: i, to: a, origin: 'markText' }, e.sel, NaN);
            var y = i.line,
              w = e.cm,
              _;
            if (
              (e.iter(y, a.line + 1, function (D) {
                w &&
                  p.collapsed &&
                  !w.options.lineWrapping &&
                  Un(D) == w.display.maxLine &&
                  (_ = !0),
                  p.collapsed && y != i.line && Fn(D, 0),
                  Ob(
                    D,
                    new Fa(
                      p,
                      y == i.line ? i.ch : null,
                      y == a.line ? a.ch : null,
                    ),
                    e.cm && e.cm.curOp,
                  ),
                  ++y;
              }),
              p.collapsed &&
                e.iter(i.line, a.line + 1, function (D) {
                  Qr(e, D) && Fn(D, 0);
                }),
              p.clearOnEnter &&
                wt(p, 'beforeCursorEnter', function () {
                  return p.clear();
                }),
              p.readOnly &&
                (Mb(),
                (e.history.done.length || e.history.undone.length) &&
                  e.clearHistory()),
              p.collapsed && ((p.id = ++vp), (p.atomic = !0)),
              w)
            ) {
              if ((_ && (w.curOp.updateMaxLine = !0), p.collapsed))
                an(w, i.line, a.line + 1);
              else if (
                p.className ||
                p.startStyle ||
                p.endStyle ||
                p.css ||
                p.attributes ||
                p.title
              )
                for (var N = i.line; N <= a.line; N++) ti(w, N, 'text');
              p.atomic && op(w.doc), Fe(w, 'markerAdded', w, p);
            }
            return p;
          }
          var Ds = function (e, i) {
            (this.markers = e), (this.primary = i);
            for (var a = 0; a < e.length; ++a) e[a].parent = this;
          };
          (Ds.prototype.clear = function () {
            if (!this.explicitlyCleared) {
              this.explicitlyCleared = !0;
              for (var e = 0; e < this.markers.length; ++e)
                this.markers[e].clear();
              Fe(this, 'clear');
            }
          }),
            (Ds.prototype.find = function (e, i) {
              return this.primary.find(e, i);
            }),
            Qe(Ds);
          function Bw(e, i, a, s, c) {
            (s = tt(s)), (s.shared = !1);
            var p = [To(e, i, a, s, c)],
              m = p[0],
              y = s.widgetNode;
            return (
              ii(e, function (w) {
                y && (s.widgetNode = y.cloneNode(!0)),
                  p.push(To(w, Ht(w, i), Ht(w, a), s, c));
                for (var _ = 0; _ < w.linked.length; ++_)
                  if (w.linked[_].isParent) return;
                m = st(p);
              }),
              new Ds(p, m)
            );
          }
          function mp(e) {
            return e.findMarks(
              F(e.first, 0),
              e.clipPos(F(e.lastLine())),
              function (i) {
                return i.parent;
              },
            );
          }
          function Ww(e, i) {
            for (var a = 0; a < i.length; a++) {
              var s = i[a],
                c = s.find(),
                p = e.clipPos(c.from),
                m = e.clipPos(c.to);
              if (Y(p, m)) {
                var y = To(e, p, m, s.primary, s.primary.type);
                s.markers.push(y), (y.parent = s);
              }
            }
          }
          function Uw(e) {
            for (
              var i = function (s) {
                  var c = e[s],
                    p = [c.primary.doc];
                  ii(c.primary.doc, function (w) {
                    return p.push(w);
                  });
                  for (var m = 0; m < c.markers.length; m++) {
                    var y = c.markers[m];
                    Tt(p, y.doc) == -1 &&
                      ((y.parent = null), c.markers.splice(m--, 1));
                  }
                },
                a = 0;
              a < e.length;
              a++
            )
              i(a);
          }
          var jw = 0,
            ln = function (e, i, a, s, c) {
              if (!(this instanceof ln)) return new ln(e, i, a, s, c);
              a == null && (a = 0),
                Os.call(this, [new Ps([new po('', null)])]),
                (this.first = a),
                (this.scrollTop = this.scrollLeft = 0),
                (this.cantEdit = !1),
                (this.cleanGeneration = 1),
                (this.modeFrontier = this.highlightFrontier = a);
              var p = F(a, 0);
              (this.sel = ni(p)),
                (this.history = new tl(null)),
                (this.id = ++jw),
                (this.modeOption = i),
                (this.lineSep = s),
                (this.direction = c == 'rtl' ? 'rtl' : 'ltr'),
                (this.extend = !1),
                typeof e == 'string' && (e = this.splitLines(e)),
                yu(this, { from: p, to: p, text: e }),
                Ke(this, ni(p), P);
            };
          (ln.prototype = $t(Os.prototype, {
            constructor: ln,
            iter: function (e, i, a) {
              a
                ? this.iterN(e - this.first, i - e, a)
                : this.iterN(this.first, this.first + this.size, e);
            },
            insert: function (e, i) {
              for (var a = 0, s = 0; s < i.length; ++s) a += i[s].height;
              this.insertInner(e - this.first, i, a);
            },
            remove: function (e, i) {
              this.removeInner(e - this.first, i);
            },
            getValue: function (e) {
              var i = ho(this, this.first, this.first + this.size);
              return e === !1 ? i : i.join(e || this.lineSeparator());
            },
            setValue: qe(function (e) {
              var i = F(this.first, 0),
                a = this.first + this.size - 1;
              ko(
                this,
                {
                  from: i,
                  to: F(a, Mt(this, a).text.length),
                  text: this.splitLines(e),
                  origin: 'setValue',
                  full: !0,
                },
                !0,
              ),
                this.cm && Ss(this.cm, 0, 0),
                Ke(this, ni(i), P);
            }),
            replaceRange: function (e, i, a, s) {
              (i = Ht(this, i)),
                (a = a ? Ht(this, a) : i),
                Co(this, e, i, a, s);
            },
            getRange: function (e, i, a) {
              var s = kr(this, Ht(this, e), Ht(this, i));
              return a === !1
                ? s
                : a === ''
                ? s.join('')
                : s.join(a || this.lineSeparator());
            },
            getLine: function (e) {
              var i = this.getLineHandle(e);
              return i && i.text;
            },
            getLineHandle: function (e) {
              if (C(this, e)) return Mt(this, e);
            },
            getLineNumber: function (e) {
              return ae(e);
            },
            getLineHandleVisualStart: function (e) {
              return typeof e == 'number' && (e = Mt(this, e)), Un(e);
            },
            lineCount: function () {
              return this.size;
            },
            firstLine: function () {
              return this.first;
            },
            lastLine: function () {
              return this.first + this.size - 1;
            },
            clipPos: function (e) {
              return Ht(this, e);
            },
            getCursor: function (e) {
              var i = this.sel.primary(),
                a;
              return (
                e == null || e == 'head'
                  ? (a = i.head)
                  : e == 'anchor'
                  ? (a = i.anchor)
                  : e == 'end' || e == 'to' || e === !1
                  ? (a = i.to())
                  : (a = i.from()),
                a
              );
            },
            listSelections: function () {
              return this.sel.ranges;
            },
            somethingSelected: function () {
              return this.sel.somethingSelected();
            },
            setCursor: qe(function (e, i, a) {
              np(
                this,
                Ht(this, typeof e == 'number' ? F(e, i || 0) : e),
                null,
                a,
              );
            }),
            setSelection: qe(function (e, i, a) {
              np(this, Ht(this, e), Ht(this, i || e), a);
            }),
            extendSelection: qe(function (e, i, a) {
              nl(this, Ht(this, e), i && Ht(this, i), a);
            }),
            extendSelections: qe(function (e, i) {
              ep(this, Gh(this, e), i);
            }),
            extendSelectionsBy: qe(function (e, i) {
              var a = vt(this.sel.ranges, e);
              ep(this, Gh(this, a), i);
            }),
            setSelections: qe(function (e, i, a) {
              if (e.length) {
                for (var s = [], c = 0; c < e.length; c++)
                  s[c] = new le(
                    Ht(this, e[c].anchor),
                    Ht(this, e[c].head || e[c].anchor),
                  );
                i == null && (i = Math.min(e.length - 1, this.sel.primIndex)),
                  Ke(this, Gn(this.cm, s, i), a);
              }
            }),
            addSelection: qe(function (e, i, a) {
              var s = this.sel.ranges.slice(0);
              s.push(new le(Ht(this, e), Ht(this, i || e))),
                Ke(this, Gn(this.cm, s, s.length - 1), a);
            }),
            getSelection: function (e) {
              for (var i = this.sel.ranges, a, s = 0; s < i.length; s++) {
                var c = kr(this, i[s].from(), i[s].to());
                a = a ? a.concat(c) : c;
              }
              return e === !1 ? a : a.join(e || this.lineSeparator());
            },
            getSelections: function (e) {
              for (var i = [], a = this.sel.ranges, s = 0; s < a.length; s++) {
                var c = kr(this, a[s].from(), a[s].to());
                e !== !1 && (c = c.join(e || this.lineSeparator())), (i[s] = c);
              }
              return i;
            },
            replaceSelection: function (e, i, a) {
              for (var s = [], c = 0; c < this.sel.ranges.length; c++) s[c] = e;
              this.replaceSelections(s, i, a || '+input');
            },
            replaceSelections: qe(function (e, i, a) {
              for (var s = [], c = this.sel, p = 0; p < c.ranges.length; p++) {
                var m = c.ranges[p];
                s[p] = {
                  from: m.from(),
                  to: m.to(),
                  text: this.splitLines(e[p]),
                  origin: a,
                };
              }
              for (
                var y = i && i != 'end' && Pw(this, s, i), w = s.length - 1;
                w >= 0;
                w--
              )
                ko(this, s[w]);
              y ? rp(this, y) : this.cm && wo(this.cm);
            }),
            undo: qe(function () {
              ol(this, 'undo');
            }),
            redo: qe(function () {
              ol(this, 'redo');
            }),
            undoSelection: qe(function () {
              ol(this, 'undo', !0);
            }),
            redoSelection: qe(function () {
              ol(this, 'redo', !0);
            }),
            setExtending: function (e) {
              this.extend = e;
            },
            getExtending: function () {
              return this.extend;
            },
            historySize: function () {
              for (
                var e = this.history, i = 0, a = 0, s = 0;
                s < e.done.length;
                s++
              )
                e.done[s].ranges || ++i;
              for (var c = 0; c < e.undone.length; c++)
                e.undone[c].ranges || ++a;
              return { undo: i, redo: a };
            },
            clearHistory: function () {
              var e = this;
              (this.history = new tl(this.history)),
                ii(
                  this,
                  function (i) {
                    return (i.history = e.history);
                  },
                  !0,
                );
            },
            markClean: function () {
              this.cleanGeneration = this.changeGeneration(!0);
            },
            changeGeneration: function (e) {
              return (
                e &&
                  (this.history.lastOp =
                    this.history.lastSelOp =
                    this.history.lastOrigin =
                      null),
                this.history.generation
              );
            },
            isClean: function (e) {
              return this.history.generation == (e || this.cleanGeneration);
            },
            getHistory: function () {
              return {
                done: _o(this.history.done),
                undone: _o(this.history.undone),
              };
            },
            setHistory: function (e) {
              var i = (this.history = new tl(this.history));
              (i.done = _o(e.done.slice(0), null, !0)),
                (i.undone = _o(e.undone.slice(0), null, !0));
            },
            setGutterMarker: qe(function (e, i, a) {
              return Ns(this, e, 'gutter', function (s) {
                var c = s.gutterMarkers || (s.gutterMarkers = {});
                return (c[i] = a), !a && Gt(c) && (s.gutterMarkers = null), !0;
              });
            }),
            clearGutter: qe(function (e) {
              var i = this;
              this.iter(function (a) {
                a.gutterMarkers &&
                  a.gutterMarkers[e] &&
                  Ns(i, a, 'gutter', function () {
                    return (
                      (a.gutterMarkers[e] = null),
                      Gt(a.gutterMarkers) && (a.gutterMarkers = null),
                      !0
                    );
                  });
              });
            }),
            lineInfo: function (e) {
              var i;
              if (typeof e == 'number') {
                if (!C(this, e) || ((i = e), (e = Mt(this, e)), !e))
                  return null;
              } else if (((i = ae(e)), i == null)) return null;
              return {
                line: i,
                handle: e,
                text: e.text,
                gutterMarkers: e.gutterMarkers,
                textClass: e.textClass,
                bgClass: e.bgClass,
                wrapClass: e.wrapClass,
                widgets: e.widgets,
              };
            },
            addLineClass: qe(function (e, i, a) {
              return Ns(
                this,
                e,
                i == 'gutter' ? 'gutter' : 'class',
                function (s) {
                  var c =
                    i == 'text'
                      ? 'textClass'
                      : i == 'background'
                      ? 'bgClass'
                      : i == 'gutter'
                      ? 'gutterClass'
                      : 'wrapClass';
                  if (!s[c]) s[c] = a;
                  else {
                    if (kt(a).test(s[c])) return !1;
                    s[c] += ' ' + a;
                  }
                  return !0;
                },
              );
            }),
            removeLineClass: qe(function (e, i, a) {
              return Ns(
                this,
                e,
                i == 'gutter' ? 'gutter' : 'class',
                function (s) {
                  var c =
                      i == 'text'
                        ? 'textClass'
                        : i == 'background'
                        ? 'bgClass'
                        : i == 'gutter'
                        ? 'gutterClass'
                        : 'wrapClass',
                    p = s[c];
                  if (p)
                    if (a == null) s[c] = null;
                    else {
                      var m = p.match(kt(a));
                      if (!m) return !1;
                      var y = m.index + m[0].length;
                      s[c] =
                        p.slice(0, m.index) +
                          (!m.index || y == p.length ? '' : ' ') +
                          p.slice(y) || null;
                    }
                  else return !1;
                  return !0;
                },
              );
            }),
            addLineWidget: qe(function (e, i, a) {
              return Hw(this, e, i, a);
            }),
            removeLineWidget: function (e) {
              e.clear();
            },
            markText: function (e, i, a) {
              return To(
                this,
                Ht(this, e),
                Ht(this, i),
                a,
                (a && a.type) || 'range',
              );
            },
            setBookmark: function (e, i) {
              var a = {
                replacedWith: i && (i.nodeType == null ? i.widget : i),
                insertLeft: i && i.insertLeft,
                clearWhenEmpty: !1,
                shared: i && i.shared,
                handleMouseEvents: i && i.handleMouseEvents,
              };
              return (e = Ht(this, e)), To(this, e, e, a, 'bookmark');
            },
            findMarksAt: function (e) {
              e = Ht(this, e);
              var i = [],
                a = Mt(this, e.line).markedSpans;
              if (a)
                for (var s = 0; s < a.length; ++s) {
                  var c = a[s];
                  (c.from == null || c.from <= e.ch) &&
                    (c.to == null || c.to >= e.ch) &&
                    i.push(c.marker.parent || c.marker);
                }
              return i;
            },
            findMarks: function (e, i, a) {
              (e = Ht(this, e)), (i = Ht(this, i));
              var s = [],
                c = e.line;
              return (
                this.iter(e.line, i.line + 1, function (p) {
                  var m = p.markedSpans;
                  if (m)
                    for (var y = 0; y < m.length; y++) {
                      var w = m[y];
                      !(
                        (w.to != null && c == e.line && e.ch >= w.to) ||
                        (w.from == null && c != e.line) ||
                        (w.from != null && c == i.line && w.from >= i.ch)
                      ) &&
                        (!a || a(w.marker)) &&
                        s.push(w.marker.parent || w.marker);
                    }
                  ++c;
                }),
                s
              );
            },
            getAllMarks: function () {
              var e = [];
              return (
                this.iter(function (i) {
                  var a = i.markedSpans;
                  if (a)
                    for (var s = 0; s < a.length; ++s)
                      a[s].from != null && e.push(a[s].marker);
                }),
                e
              );
            },
            posFromIndex: function (e) {
              var i,
                a = this.first,
                s = this.lineSeparator().length;
              return (
                this.iter(function (c) {
                  var p = c.text.length + s;
                  if (p > e) return (i = e), !0;
                  (e -= p), ++a;
                }),
                Ht(this, F(a, i))
              );
            },
            indexFromPos: function (e) {
              e = Ht(this, e);
              var i = e.ch;
              if (e.line < this.first || e.ch < 0) return 0;
              var a = this.lineSeparator().length;
              return (
                this.iter(this.first, e.line, function (s) {
                  i += s.text.length + a;
                }),
                i
              );
            },
            copy: function (e) {
              var i = new ln(
                ho(this, this.first, this.first + this.size),
                this.modeOption,
                this.first,
                this.lineSep,
                this.direction,
              );
              return (
                (i.scrollTop = this.scrollTop),
                (i.scrollLeft = this.scrollLeft),
                (i.sel = this.sel),
                (i.extend = !1),
                e &&
                  ((i.history.undoDepth = this.history.undoDepth),
                  i.setHistory(this.getHistory())),
                i
              );
            },
            linkedDoc: function (e) {
              e || (e = {});
              var i = this.first,
                a = this.first + this.size;
              e.from != null && e.from > i && (i = e.from),
                e.to != null && e.to < a && (a = e.to);
              var s = new ln(
                ho(this, i, a),
                e.mode || this.modeOption,
                i,
                this.lineSep,
                this.direction,
              );
              return (
                e.sharedHist && (s.history = this.history),
                (this.linked || (this.linked = [])).push({
                  doc: s,
                  sharedHist: e.sharedHist,
                }),
                (s.linked = [
                  { doc: this, isParent: !0, sharedHist: e.sharedHist },
                ]),
                Ww(s, mp(this)),
                s
              );
            },
            unlinkDoc: function (e) {
              if ((e instanceof be && (e = e.doc), this.linked))
                for (var i = 0; i < this.linked.length; ++i) {
                  var a = this.linked[i];
                  if (a.doc == e) {
                    this.linked.splice(i, 1), e.unlinkDoc(this), Uw(mp(this));
                    break;
                  }
                }
              if (e.history == this.history) {
                var s = [e.id];
                ii(
                  e,
                  function (c) {
                    return s.push(c.id);
                  },
                  !0,
                ),
                  (e.history = new tl(null)),
                  (e.history.done = _o(this.history.done, s)),
                  (e.history.undone = _o(this.history.undone, s));
              }
            },
            iterLinkedDocs: function (e) {
              ii(this, e);
            },
            getMode: function () {
              return this.mode;
            },
            getEditor: function () {
              return this.cm;
            },
            splitLines: function (e) {
              return this.lineSep ? e.split(this.lineSep) : ps(e);
            },
            lineSeparator: function () {
              return (
                this.lineSep ||
                `
`
              );
            },
            setDirection: qe(function (e) {
              e != 'rtl' && (e = 'ltr'),
                e != this.direction &&
                  ((this.direction = e),
                  this.iter(function (i) {
                    return (i.order = null);
                  }),
                  this.cm && Ow(this.cm));
            }),
          })),
            (ln.prototype.eachLine = ln.prototype.iter);
          var yp = 0;
          function Gw(e) {
            var i = this;
            if ((bp(i), !(ke(i, e) || Er(i.display, e)))) {
              Ve(e), d && (yp = +new Date());
              var a = Ni(i, e, !0),
                s = e.dataTransfer.files;
              if (!(!a || i.isReadOnly()))
                if (s && s.length && window.FileReader && window.File)
                  for (
                    var c = s.length,
                      p = Array(c),
                      m = 0,
                      y = function () {
                        ++m == c &&
                          Ie(i, function () {
                            a = Ht(i.doc, a);
                            var H = {
                              from: a,
                              to: a,
                              text: i.doc.splitLines(
                                p
                                  .filter(function (Z) {
                                    return Z != null;
                                  })
                                  .join(i.doc.lineSeparator()),
                              ),
                              origin: 'paste',
                            };
                            ko(i.doc, H),
                              rp(i.doc, ni(Ht(i.doc, a), Ht(i.doc, ri(H))));
                          })();
                      },
                      w = function (H, Z) {
                        if (
                          i.options.allowDropFileTypes &&
                          Tt(i.options.allowDropFileTypes, H.type) == -1
                        ) {
                          y();
                          return;
                        }
                        var rt = new FileReader();
                        (rt.onerror = function () {
                          return y();
                        }),
                          (rt.onload = function () {
                            var pt = rt.result;
                            if (/[\x00-\x08\x0e-\x1f]{2}/.test(pt)) {
                              y();
                              return;
                            }
                            (p[Z] = pt), y();
                          }),
                          rt.readAsText(H);
                      },
                      _ = 0;
                    _ < s.length;
                    _++
                  )
                    w(s[_], _);
                else {
                  if (i.state.draggingText && i.doc.sel.contains(a) > -1) {
                    i.state.draggingText(e),
                      setTimeout(function () {
                        return i.display.input.focus();
                      }, 20);
                    return;
                  }
                  try {
                    var N = e.dataTransfer.getData('Text');
                    if (N) {
                      var D;
                      if (
                        (i.state.draggingText &&
                          !i.state.draggingText.copy &&
                          (D = i.listSelections()),
                        rl(i.doc, ni(a, a)),
                        D)
                      )
                        for (var B = 0; B < D.length; ++B)
                          Co(i.doc, '', D[B].anchor, D[B].head, 'drag');
                      i.replaceSelection(N, 'around', 'paste'),
                        i.display.input.focus();
                    }
                  } catch {}
                }
            }
          }
          function Vw(e, i) {
            if (d && (!e.state.draggingText || +new Date() - yp < 100)) {
              xr(i);
              return;
            }
            if (
              !(ke(e, i) || Er(e.display, i)) &&
              (i.dataTransfer.setData('Text', e.getSelection()),
              (i.dataTransfer.effectAllowed = 'copyMove'),
              i.dataTransfer.setDragImage && !L)
            ) {
              var a = k('img', null, null, 'position: fixed; left: 0; top: 0;');
              (a.src =
                'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                A &&
                  ((a.width = a.height = 1),
                  e.display.wrapper.appendChild(a),
                  (a._top = a.offsetTop)),
                i.dataTransfer.setDragImage(a, 0, 0),
                A && a.parentNode.removeChild(a);
            }
          }
          function Kw(e, i) {
            var a = Ni(e, i);
            if (a) {
              var s = document.createDocumentFragment();
              ou(e, a, s),
                e.display.dragCursor ||
                  ((e.display.dragCursor = k(
                    'div',
                    null,
                    'CodeMirror-cursors CodeMirror-dragcursors',
                  )),
                  e.display.lineSpace.insertBefore(
                    e.display.dragCursor,
                    e.display.cursorDiv,
                  )),
                z(e.display.dragCursor, s);
            }
          }
          function bp(e) {
            e.display.dragCursor &&
              (e.display.lineSpace.removeChild(e.display.dragCursor),
              (e.display.dragCursor = null));
          }
          function wp(e) {
            if (document.getElementsByClassName) {
              for (
                var i = document.getElementsByClassName('CodeMirror'),
                  a = [],
                  s = 0;
                s < i.length;
                s++
              ) {
                var c = i[s].CodeMirror;
                c && a.push(c);
              }
              a.length &&
                a[0].operation(function () {
                  for (var p = 0; p < a.length; p++) e(a[p]);
                });
            }
          }
          var xp = !1;
          function Xw() {
            xp || (Yw(), (xp = !0));
          }
          function Yw() {
            var e;
            wt(window, 'resize', function () {
              e == null &&
                (e = setTimeout(function () {
                  (e = null), wp(Zw);
                }, 100));
            }),
              wt(window, 'blur', function () {
                return wp(bo);
              });
          }
          function Zw(e) {
            var i = e.display;
            (i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null),
              (i.scrollbarsClipped = !1),
              e.setSize();
          }
          for (
            var si = {
                3: 'Pause',
                8: 'Backspace',
                9: 'Tab',
                13: 'Enter',
                16: 'Shift',
                17: 'Ctrl',
                18: 'Alt',
                19: 'Pause',
                20: 'CapsLock',
                27: 'Esc',
                32: 'Space',
                33: 'PageUp',
                34: 'PageDown',
                35: 'End',
                36: 'Home',
                37: 'Left',
                38: 'Up',
                39: 'Right',
                40: 'Down',
                44: 'PrintScrn',
                45: 'Insert',
                46: 'Delete',
                59: ';',
                61: '=',
                91: 'Mod',
                92: 'Mod',
                93: 'Mod',
                106: '*',
                107: '=',
                109: '-',
                110: '.',
                111: '/',
                145: 'ScrollLock',
                173: '-',
                186: ';',
                187: '=',
                188: ',',
                189: '-',
                190: '.',
                191: '/',
                192: '`',
                219: '[',
                220: '\\',
                221: ']',
                222: "'",
                224: 'Mod',
                63232: 'Up',
                63233: 'Down',
                63234: 'Left',
                63235: 'Right',
                63272: 'Delete',
                63273: 'Home',
                63275: 'End',
                63276: 'PageUp',
                63277: 'PageDown',
                63302: 'Insert',
              },
              Rs = 0;
            Rs < 10;
            Rs++
          )
            si[Rs + 48] = si[Rs + 96] = String(Rs);
          for (var sl = 65; sl <= 90; sl++) si[sl] = String.fromCharCode(sl);
          for (var zs = 1; zs <= 12; zs++)
            si[zs + 111] = si[zs + 63235] = 'F' + zs;
          var Ar = {};
          (Ar.basic = {
            Left: 'goCharLeft',
            Right: 'goCharRight',
            Up: 'goLineUp',
            Down: 'goLineDown',
            End: 'goLineEnd',
            Home: 'goLineStartSmart',
            PageUp: 'goPageUp',
            PageDown: 'goPageDown',
            Delete: 'delCharAfter',
            Backspace: 'delCharBefore',
            'Shift-Backspace': 'delCharBefore',
            Tab: 'defaultTab',
            'Shift-Tab': 'indentAuto',
            Enter: 'newlineAndIndent',
            Insert: 'toggleOverwrite',
            Esc: 'singleSelection',
          }),
            (Ar.pcDefault = {
              'Ctrl-A': 'selectAll',
              'Ctrl-D': 'deleteLine',
              'Ctrl-Z': 'undo',
              'Shift-Ctrl-Z': 'redo',
              'Ctrl-Y': 'redo',
              'Ctrl-Home': 'goDocStart',
              'Ctrl-End': 'goDocEnd',
              'Ctrl-Up': 'goLineUp',
              'Ctrl-Down': 'goLineDown',
              'Ctrl-Left': 'goGroupLeft',
              'Ctrl-Right': 'goGroupRight',
              'Alt-Left': 'goLineStart',
              'Alt-Right': 'goLineEnd',
              'Ctrl-Backspace': 'delGroupBefore',
              'Ctrl-Delete': 'delGroupAfter',
              'Ctrl-S': 'save',
              'Ctrl-F': 'find',
              'Ctrl-G': 'findNext',
              'Shift-Ctrl-G': 'findPrev',
              'Shift-Ctrl-F': 'replace',
              'Shift-Ctrl-R': 'replaceAll',
              'Ctrl-[': 'indentLess',
              'Ctrl-]': 'indentMore',
              'Ctrl-U': 'undoSelection',
              'Shift-Ctrl-U': 'redoSelection',
              'Alt-U': 'redoSelection',
              fallthrough: 'basic',
            }),
            (Ar.emacsy = {
              'Ctrl-F': 'goCharRight',
              'Ctrl-B': 'goCharLeft',
              'Ctrl-P': 'goLineUp',
              'Ctrl-N': 'goLineDown',
              'Ctrl-A': 'goLineStart',
              'Ctrl-E': 'goLineEnd',
              'Ctrl-V': 'goPageDown',
              'Shift-Ctrl-V': 'goPageUp',
              'Ctrl-D': 'delCharAfter',
              'Ctrl-H': 'delCharBefore',
              'Alt-Backspace': 'delWordBefore',
              'Ctrl-K': 'killLine',
              'Ctrl-T': 'transposeChars',
              'Ctrl-O': 'openLine',
            }),
            (Ar.macDefault = {
              'Cmd-A': 'selectAll',
              'Cmd-D': 'deleteLine',
              'Cmd-Z': 'undo',
              'Shift-Cmd-Z': 'redo',
              'Cmd-Y': 'redo',
              'Cmd-Home': 'goDocStart',
              'Cmd-Up': 'goDocStart',
              'Cmd-End': 'goDocEnd',
              'Cmd-Down': 'goDocEnd',
              'Alt-Left': 'goGroupLeft',
              'Alt-Right': 'goGroupRight',
              'Cmd-Left': 'goLineLeft',
              'Cmd-Right': 'goLineRight',
              'Alt-Backspace': 'delGroupBefore',
              'Ctrl-Alt-Backspace': 'delGroupAfter',
              'Alt-Delete': 'delGroupAfter',
              'Cmd-S': 'save',
              'Cmd-F': 'find',
              'Cmd-G': 'findNext',
              'Shift-Cmd-G': 'findPrev',
              'Cmd-Alt-F': 'replace',
              'Shift-Cmd-Alt-F': 'replaceAll',
              'Cmd-[': 'indentLess',
              'Cmd-]': 'indentMore',
              'Cmd-Backspace': 'delWrappedLineLeft',
              'Cmd-Delete': 'delWrappedLineRight',
              'Cmd-U': 'undoSelection',
              'Shift-Cmd-U': 'redoSelection',
              'Ctrl-Up': 'goDocStart',
              'Ctrl-Down': 'goDocEnd',
              fallthrough: ['basic', 'emacsy'],
            }),
            (Ar.default = G ? Ar.macDefault : Ar.pcDefault);
          function Jw(e) {
            var i = e.split(/-(?!$)/);
            e = i[i.length - 1];
            for (var a, s, c, p, m = 0; m < i.length - 1; m++) {
              var y = i[m];
              if (/^(cmd|meta|m)$/i.test(y)) p = !0;
              else if (/^a(lt)?$/i.test(y)) a = !0;
              else if (/^(c|ctrl|control)$/i.test(y)) s = !0;
              else if (/^s(hift)?$/i.test(y)) c = !0;
              else throw new Error('Unrecognized modifier name: ' + y);
            }
            return (
              a && (e = 'Alt-' + e),
              s && (e = 'Ctrl-' + e),
              p && (e = 'Cmd-' + e),
              c && (e = 'Shift-' + e),
              e
            );
          }
          function Qw(e) {
            var i = {};
            for (var a in e)
              if (e.hasOwnProperty(a)) {
                var s = e[a];
                if (/^(name|fallthrough|(de|at)tach)$/.test(a)) continue;
                if (s == '...') {
                  delete e[a];
                  continue;
                }
                for (var c = vt(a.split(' '), Jw), p = 0; p < c.length; p++) {
                  var m = void 0,
                    y = void 0;
                  p == c.length - 1
                    ? ((y = c.join(' ')), (m = s))
                    : ((y = c.slice(0, p + 1).join(' ')), (m = '...'));
                  var w = i[y];
                  if (!w) i[y] = m;
                  else if (w != m)
                    throw new Error('Inconsistent bindings for ' + y);
                }
                delete e[a];
              }
            for (var _ in i) e[_] = i[_];
            return e;
          }
          function Eo(e, i, a, s) {
            i = al(i);
            var c = i.call ? i.call(e, s) : i[e];
            if (c === !1) return 'nothing';
            if (c === '...') return 'multi';
            if (c != null && a(c)) return 'handled';
            if (i.fallthrough) {
              if (
                Object.prototype.toString.call(i.fallthrough) !=
                '[object Array]'
              )
                return Eo(e, i.fallthrough, a, s);
              for (var p = 0; p < i.fallthrough.length; p++) {
                var m = Eo(e, i.fallthrough[p], a, s);
                if (m) return m;
              }
            }
          }
          function _p(e) {
            var i = typeof e == 'string' ? e : si[e.keyCode];
            return i == 'Ctrl' || i == 'Alt' || i == 'Shift' || i == 'Mod';
          }
          function Sp(e, i, a) {
            var s = e;
            return (
              i.altKey && s != 'Alt' && (e = 'Alt-' + e),
              (ut ? i.metaKey : i.ctrlKey) && s != 'Ctrl' && (e = 'Ctrl-' + e),
              (ut ? i.ctrlKey : i.metaKey) && s != 'Mod' && (e = 'Cmd-' + e),
              !a && i.shiftKey && s != 'Shift' && (e = 'Shift-' + e),
              e
            );
          }
          function kp(e, i) {
            if (A && e.keyCode == 34 && e.char) return !1;
            var a = si[e.keyCode];
            return a == null || e.altGraphKey
              ? !1
              : (e.keyCode == 3 && e.code && (a = e.code), Sp(a, e, i));
          }
          function al(e) {
            return typeof e == 'string' ? Ar[e] : e;
          }
          function Lo(e, i) {
            for (var a = e.doc.sel.ranges, s = [], c = 0; c < a.length; c++) {
              for (var p = i(a[c]); s.length && Y(p.from, st(s).to) <= 0; ) {
                var m = s.pop();
                if (Y(m.from, p.from) < 0) {
                  p.from = m.from;
                  break;
                }
              }
              s.push(p);
            }
            wn(e, function () {
              for (var y = s.length - 1; y >= 0; y--)
                Co(e.doc, '', s[y].from, s[y].to, '+delete');
              wo(e);
            });
          }
          function _u(e, i, a) {
            var s = ce(e.text, i + a, a);
            return s < 0 || s > e.text.length ? null : s;
          }
          function Su(e, i, a) {
            var s = _u(e, i.ch, a);
            return s == null
              ? null
              : new F(i.line, s, a < 0 ? 'after' : 'before');
          }
          function ku(e, i, a, s, c) {
            if (e) {
              i.doc.direction == 'rtl' && (c = -c);
              var p = ye(a, i.doc.direction);
              if (p) {
                var m = c < 0 ? st(p) : p[0],
                  y = c < 0 == (m.level == 1),
                  w = y ? 'after' : 'before',
                  _;
                if (m.level > 0 || i.doc.direction == 'rtl') {
                  var N = vo(i, a);
                  _ = c < 0 ? a.text.length - 1 : 0;
                  var D = lr(i, N, _).top;
                  (_ = Qt(
                    function (B) {
                      return lr(i, N, B).top == D;
                    },
                    c < 0 == (m.level == 1) ? m.from : m.to - 1,
                    _,
                  )),
                    w == 'before' && (_ = _u(a, _, 1));
                } else _ = c < 0 ? m.to : m.from;
                return new F(s, _, w);
              }
            }
            return new F(
              s,
              c < 0 ? a.text.length : 0,
              c < 0 ? 'before' : 'after',
            );
          }
          function tx(e, i, a, s) {
            var c = ye(i, e.doc.direction);
            if (!c) return Su(i, a, s);
            a.ch >= i.text.length
              ? ((a.ch = i.text.length), (a.sticky = 'before'))
              : a.ch <= 0 && ((a.ch = 0), (a.sticky = 'after'));
            var p = We(c, a.ch, a.sticky),
              m = c[p];
            if (
              e.doc.direction == 'ltr' &&
              m.level % 2 == 0 &&
              (s > 0 ? m.to > a.ch : m.from < a.ch)
            )
              return Su(i, a, s);
            var y = function (yt, St) {
                return _u(i, yt instanceof F ? yt.ch : yt, St);
              },
              w,
              _ = function (yt) {
                return e.options.lineWrapping
                  ? ((w = w || vo(e, i)), Ad(e, i, w, yt))
                  : { begin: 0, end: i.text.length };
              },
              N = _(a.sticky == 'before' ? y(a, -1) : a.ch);
            if (e.doc.direction == 'rtl' || m.level == 1) {
              var D = (m.level == 1) == s < 0,
                B = y(a, D ? 1 : -1);
              if (
                B != null &&
                (D ? B <= m.to && B <= N.end : B >= m.from && B >= N.begin)
              ) {
                var H = D ? 'before' : 'after';
                return new F(a.line, B, H);
              }
            }
            var Z = function (yt, St, bt) {
                for (
                  var Et = function (ge, He) {
                    return He
                      ? new F(a.line, y(ge, 1), 'before')
                      : new F(a.line, ge, 'after');
                  };
                  yt >= 0 && yt < c.length;
                  yt += St
                ) {
                  var Dt = c[yt],
                    Pt = St > 0 == (Dt.level != 1),
                    Ut = Pt ? bt.begin : y(bt.end, -1);
                  if (
                    (Dt.from <= Ut && Ut < Dt.to) ||
                    ((Ut = Pt ? Dt.from : y(Dt.to, -1)),
                    bt.begin <= Ut && Ut < bt.end)
                  )
                    return Et(Ut, Pt);
                }
              },
              rt = Z(p + s, s, N);
            if (rt) return rt;
            var pt = s > 0 ? N.end : y(N.begin, -1);
            return pt != null &&
              !(s > 0 && pt == i.text.length) &&
              ((rt = Z(s > 0 ? 0 : c.length - 1, s, _(pt))), rt)
              ? rt
              : null;
          }
          var Fs = {
            selectAll: lp,
            singleSelection: function (e) {
              return e.setSelection(
                e.getCursor('anchor'),
                e.getCursor('head'),
                P,
              );
            },
            killLine: function (e) {
              return Lo(e, function (i) {
                if (i.empty()) {
                  var a = Mt(e.doc, i.head.line).text.length;
                  return i.head.ch == a && i.head.line < e.lastLine()
                    ? { from: i.head, to: F(i.head.line + 1, 0) }
                    : { from: i.head, to: F(i.head.line, a) };
                } else return { from: i.from(), to: i.to() };
              });
            },
            deleteLine: function (e) {
              return Lo(e, function (i) {
                return {
                  from: F(i.from().line, 0),
                  to: Ht(e.doc, F(i.to().line + 1, 0)),
                };
              });
            },
            delLineLeft: function (e) {
              return Lo(e, function (i) {
                return { from: F(i.from().line, 0), to: i.from() };
              });
            },
            delWrappedLineLeft: function (e) {
              return Lo(e, function (i) {
                var a = e.charCoords(i.head, 'div').top + 5,
                  s = e.coordsChar({ left: 0, top: a }, 'div');
                return { from: s, to: i.from() };
              });
            },
            delWrappedLineRight: function (e) {
              return Lo(e, function (i) {
                var a = e.charCoords(i.head, 'div').top + 5,
                  s = e.coordsChar(
                    { left: e.display.lineDiv.offsetWidth + 100, top: a },
                    'div',
                  );
                return { from: i.from(), to: s };
              });
            },
            undo: function (e) {
              return e.undo();
            },
            redo: function (e) {
              return e.redo();
            },
            undoSelection: function (e) {
              return e.undoSelection();
            },
            redoSelection: function (e) {
              return e.redoSelection();
            },
            goDocStart: function (e) {
              return e.extendSelection(F(e.firstLine(), 0));
            },
            goDocEnd: function (e) {
              return e.extendSelection(F(e.lastLine()));
            },
            goLineStart: function (e) {
              return e.extendSelectionsBy(
                function (i) {
                  return Cp(e, i.head.line);
                },
                { origin: '+move', bias: 1 },
              );
            },
            goLineStartSmart: function (e) {
              return e.extendSelectionsBy(
                function (i) {
                  return Tp(e, i.head);
                },
                { origin: '+move', bias: 1 },
              );
            },
            goLineEnd: function (e) {
              return e.extendSelectionsBy(
                function (i) {
                  return ex(e, i.head.line);
                },
                { origin: '+move', bias: -1 },
              );
            },
            goLineRight: function (e) {
              return e.extendSelectionsBy(function (i) {
                var a = e.cursorCoords(i.head, 'div').top + 5;
                return e.coordsChar(
                  { left: e.display.lineDiv.offsetWidth + 100, top: a },
                  'div',
                );
              }, J);
            },
            goLineLeft: function (e) {
              return e.extendSelectionsBy(function (i) {
                var a = e.cursorCoords(i.head, 'div').top + 5;
                return e.coordsChar({ left: 0, top: a }, 'div');
              }, J);
            },
            goLineLeftSmart: function (e) {
              return e.extendSelectionsBy(function (i) {
                var a = e.cursorCoords(i.head, 'div').top + 5,
                  s = e.coordsChar({ left: 0, top: a }, 'div');
                return s.ch < e.getLine(s.line).search(/\S/)
                  ? Tp(e, i.head)
                  : s;
              }, J);
            },
            goLineUp: function (e) {
              return e.moveV(-1, 'line');
            },
            goLineDown: function (e) {
              return e.moveV(1, 'line');
            },
            goPageUp: function (e) {
              return e.moveV(-1, 'page');
            },
            goPageDown: function (e) {
              return e.moveV(1, 'page');
            },
            goCharLeft: function (e) {
              return e.moveH(-1, 'char');
            },
            goCharRight: function (e) {
              return e.moveH(1, 'char');
            },
            goColumnLeft: function (e) {
              return e.moveH(-1, 'column');
            },
            goColumnRight: function (e) {
              return e.moveH(1, 'column');
            },
            goWordLeft: function (e) {
              return e.moveH(-1, 'word');
            },
            goGroupRight: function (e) {
              return e.moveH(1, 'group');
            },
            goGroupLeft: function (e) {
              return e.moveH(-1, 'group');
            },
            goWordRight: function (e) {
              return e.moveH(1, 'word');
            },
            delCharBefore: function (e) {
              return e.deleteH(-1, 'codepoint');
            },
            delCharAfter: function (e) {
              return e.deleteH(1, 'char');
            },
            delWordBefore: function (e) {
              return e.deleteH(-1, 'word');
            },
            delWordAfter: function (e) {
              return e.deleteH(1, 'word');
            },
            delGroupBefore: function (e) {
              return e.deleteH(-1, 'group');
            },
            delGroupAfter: function (e) {
              return e.deleteH(1, 'group');
            },
            indentAuto: function (e) {
              return e.indentSelection('smart');
            },
            indentMore: function (e) {
              return e.indentSelection('add');
            },
            indentLess: function (e) {
              return e.indentSelection('subtract');
            },
            insertTab: function (e) {
              return e.replaceSelection('	');
            },
            insertSoftTab: function (e) {
              for (
                var i = [],
                  a = e.listSelections(),
                  s = e.options.tabSize,
                  c = 0;
                c < a.length;
                c++
              ) {
                var p = a[c].from(),
                  m = X(e.getLine(p.line), p.ch, s);
                i.push(gt(s - (m % s)));
              }
              e.replaceSelections(i);
            },
            defaultTab: function (e) {
              e.somethingSelected()
                ? e.indentSelection('add')
                : e.execCommand('insertTab');
            },
            transposeChars: function (e) {
              return wn(e, function () {
                for (
                  var i = e.listSelections(), a = [], s = 0;
                  s < i.length;
                  s++
                )
                  if (i[s].empty()) {
                    var c = i[s].head,
                      p = Mt(e.doc, c.line).text;
                    if (p) {
                      if (
                        (c.ch == p.length && (c = new F(c.line, c.ch - 1)),
                        c.ch > 0)
                      )
                        (c = new F(c.line, c.ch + 1)),
                          e.replaceRange(
                            p.charAt(c.ch - 1) + p.charAt(c.ch - 2),
                            F(c.line, c.ch - 2),
                            c,
                            '+transpose',
                          );
                      else if (c.line > e.doc.first) {
                        var m = Mt(e.doc, c.line - 1).text;
                        m &&
                          ((c = new F(c.line, 1)),
                          e.replaceRange(
                            p.charAt(0) +
                              e.doc.lineSeparator() +
                              m.charAt(m.length - 1),
                            F(c.line - 1, m.length - 1),
                            c,
                            '+transpose',
                          ));
                      }
                    }
                    a.push(new le(c, c));
                  }
                e.setSelections(a);
              });
            },
            newlineAndIndent: function (e) {
              return wn(e, function () {
                for (var i = e.listSelections(), a = i.length - 1; a >= 0; a--)
                  e.replaceRange(
                    e.doc.lineSeparator(),
                    i[a].anchor,
                    i[a].head,
                    '+input',
                  );
                i = e.listSelections();
                for (var s = 0; s < i.length; s++)
                  e.indentLine(i[s].from().line, null, !0);
                wo(e);
              });
            },
            openLine: function (e) {
              return e.replaceSelection(
                `
`,
                'start',
              );
            },
            toggleOverwrite: function (e) {
              return e.toggleOverwrite();
            },
          };
          function Cp(e, i) {
            var a = Mt(e.doc, i),
              s = Un(a);
            return s != a && (i = ae(s)), ku(!0, e, s, i, 1);
          }
          function ex(e, i) {
            var a = Mt(e.doc, i),
              s = Fb(a);
            return s != a && (i = ae(s)), ku(!0, e, a, i, -1);
          }
          function Tp(e, i) {
            var a = Cp(e, i.line),
              s = Mt(e.doc, a.line),
              c = ye(s, e.doc.direction);
            if (!c || c[0].level == 0) {
              var p = Math.max(a.ch, s.text.search(/\S/)),
                m = i.line == a.line && i.ch <= p && i.ch;
              return F(a.line, m ? 0 : p, a.sticky);
            }
            return a;
          }
          function ll(e, i, a) {
            if (typeof i == 'string' && ((i = Fs[i]), !i)) return !1;
            e.display.input.ensurePolled();
            var s = e.display.shift,
              c = !1;
            try {
              e.isReadOnly() && (e.state.suppressEdits = !0),
                a && (e.display.shift = !1),
                (c = i(e) != At);
            } finally {
              (e.display.shift = s), (e.state.suppressEdits = !1);
            }
            return c;
          }
          function nx(e, i, a) {
            for (var s = 0; s < e.state.keyMaps.length; s++) {
              var c = Eo(i, e.state.keyMaps[s], a, e);
              if (c) return c;
            }
            return (
              (e.options.extraKeys && Eo(i, e.options.extraKeys, a, e)) ||
              Eo(i, e.options.keyMap, a, e)
            );
          }
          var rx = new ot();
          function Is(e, i, a, s) {
            var c = e.state.keySeq;
            if (c) {
              if (_p(i)) return 'handled';
              if (
                (/\'$/.test(i)
                  ? (e.state.keySeq = null)
                  : rx.set(50, function () {
                      e.state.keySeq == c &&
                        ((e.state.keySeq = null), e.display.input.reset());
                    }),
                Ep(e, c + ' ' + i, a, s))
              )
                return !0;
            }
            return Ep(e, i, a, s);
          }
          function Ep(e, i, a, s) {
            var c = nx(e, i, s);
            return (
              c == 'multi' && (e.state.keySeq = i),
              c == 'handled' && Fe(e, 'keyHandled', e, i, a),
              (c == 'handled' || c == 'multi') && (Ve(a), su(e)),
              !!c
            );
          }
          function Lp(e, i) {
            var a = kp(i, !0);
            return a
              ? i.shiftKey && !e.state.keySeq
                ? Is(e, 'Shift-' + a, i, function (s) {
                    return ll(e, s, !0);
                  }) ||
                  Is(e, a, i, function (s) {
                    if (typeof s == 'string' ? /^go[A-Z]/.test(s) : s.motion)
                      return ll(e, s);
                  })
                : Is(e, a, i, function (s) {
                    return ll(e, s);
                  })
              : !1;
          }
          function ix(e, i, a) {
            return Is(e, "'" + a + "'", i, function (s) {
              return ll(e, s, !0);
            });
          }
          var Cu = null;
          function Ap(e) {
            var i = this;
            if (
              !(e.target && e.target != i.display.input.getField()) &&
              ((i.curOp.focus = mt(jt(i))), !ke(i, e))
            ) {
              d && g < 11 && e.keyCode == 27 && (e.returnValue = !1);
              var a = e.keyCode;
              i.display.shift = a == 16 || e.shiftKey;
              var s = Lp(i, e);
              A &&
                ((Cu = s ? a : null),
                !s &&
                  a == 88 &&
                  !rr &&
                  (G ? e.metaKey : e.ctrlKey) &&
                  i.replaceSelection('', null, 'cut')),
                l &&
                  !G &&
                  !s &&
                  a == 46 &&
                  e.shiftKey &&
                  !e.ctrlKey &&
                  document.execCommand &&
                  document.execCommand('cut'),
                a == 18 &&
                  !/\bCodeMirror-crosshair\b/.test(
                    i.display.lineDiv.className,
                  ) &&
                  ox(i);
            }
          }
          function ox(e) {
            var i = e.display.lineDiv;
            Ct(i, 'CodeMirror-crosshair');
            function a(s) {
              (s.keyCode == 18 || !s.altKey) &&
                (dt(i, 'CodeMirror-crosshair'),
                Ge(document, 'keyup', a),
                Ge(document, 'mouseover', a));
            }
            wt(document, 'keyup', a), wt(document, 'mouseover', a);
          }
          function Mp(e) {
            e.keyCode == 16 && (this.doc.sel.shift = !1), ke(this, e);
          }
          function Np(e) {
            var i = this;
            if (
              !(e.target && e.target != i.display.input.getField()) &&
              !(
                Er(i.display, e) ||
                ke(i, e) ||
                (e.ctrlKey && !e.altKey) ||
                (G && e.metaKey)
              )
            ) {
              var a = e.keyCode,
                s = e.charCode;
              if (A && a == Cu) {
                (Cu = null), Ve(e);
                return;
              }
              if (!(A && (!e.which || e.which < 10) && Lp(i, e))) {
                var c = String.fromCharCode(s ?? a);
                c != '\b' && (ix(i, e, c) || i.display.input.onKeyPress(e));
              }
            }
          }
          var sx = 400,
            Tu = function (e, i, a) {
              (this.time = e), (this.pos = i), (this.button = a);
            };
          Tu.prototype.compare = function (e, i, a) {
            return (
              this.time + sx > e && Y(i, this.pos) == 0 && a == this.button
            );
          };
          var qs, Hs;
          function ax(e, i) {
            var a = +new Date();
            return Hs && Hs.compare(a, e, i)
              ? ((qs = Hs = null), 'triple')
              : qs && qs.compare(a, e, i)
              ? ((Hs = new Tu(a, e, i)), (qs = null), 'double')
              : ((qs = new Tu(a, e, i)), (Hs = null), 'single');
          }
          function Pp(e) {
            var i = this,
              a = i.display;
            if (!(ke(i, e) || (a.activeTouch && a.input.supportsTouch()))) {
              if ((a.input.ensurePolled(), (a.shift = e.shiftKey), Er(a, e))) {
                v ||
                  ((a.scroller.draggable = !1),
                  setTimeout(function () {
                    return (a.scroller.draggable = !0);
                  }, 100));
                return;
              }
              if (!Eu(i, e)) {
                var s = Ni(i, e),
                  c = ds(e),
                  p = s ? ax(s, c) : 'single';
                Zt(i).focus(),
                  c == 1 && i.state.selectingText && i.state.selectingText(e),
                  !(s && lx(i, c, s, p, e)) &&
                    (c == 1
                      ? s
                        ? ux(i, s, p, e)
                        : sn(e) == a.scroller && Ve(e)
                      : c == 2
                      ? (s && nl(i.doc, s),
                        setTimeout(function () {
                          return a.input.focus();
                        }, 20))
                      : c == 3 &&
                        (ft ? i.display.input.onContextMenu(e) : au(i)));
              }
            }
          }
          function lx(e, i, a, s, c) {
            var p = 'Click';
            return (
              s == 'double'
                ? (p = 'Double' + p)
                : s == 'triple' && (p = 'Triple' + p),
              (p = (i == 1 ? 'Left' : i == 2 ? 'Middle' : 'Right') + p),
              Is(e, Sp(p, c), c, function (m) {
                if ((typeof m == 'string' && (m = Fs[m]), !m)) return !1;
                var y = !1;
                try {
                  e.isReadOnly() && (e.state.suppressEdits = !0),
                    (y = m(e, a) != At);
                } finally {
                  e.state.suppressEdits = !1;
                }
                return y;
              })
            );
          }
          function cx(e, i, a) {
            var s = e.getOption('configureMouse'),
              c = s ? s(e, i, a) : {};
            if (c.unit == null) {
              var p = K ? a.shiftKey && a.metaKey : a.altKey;
              c.unit = p
                ? 'rectangle'
                : i == 'single'
                ? 'char'
                : i == 'double'
                ? 'word'
                : 'line';
            }
            return (
              (c.extend == null || e.doc.extend) &&
                (c.extend = e.doc.extend || a.shiftKey),
              c.addNew == null && (c.addNew = G ? a.metaKey : a.ctrlKey),
              c.moveOnDrag == null &&
                (c.moveOnDrag = !(G ? a.altKey : a.ctrlKey)),
              c
            );
          }
          function ux(e, i, a, s) {
            d ? setTimeout(Q(Od, e), 0) : (e.curOp.focus = mt(jt(e)));
            var c = cx(e, a, s),
              p = e.doc.sel,
              m;
            e.options.dragDrop &&
            Ic &&
            !e.isReadOnly() &&
            a == 'single' &&
            (m = p.contains(i)) > -1 &&
            (Y((m = p.ranges[m]).from(), i) < 0 || i.xRel > 0) &&
            (Y(m.to(), i) > 0 || i.xRel < 0)
              ? fx(e, s, i, c)
              : hx(e, s, i, c);
          }
          function fx(e, i, a, s) {
            var c = e.display,
              p = !1,
              m = Ie(e, function (_) {
                v && (c.scroller.draggable = !1),
                  (e.state.draggingText = !1),
                  e.state.delayingBlurEvent &&
                    (e.hasFocus() ? (e.state.delayingBlurEvent = !1) : au(e)),
                  Ge(c.wrapper.ownerDocument, 'mouseup', m),
                  Ge(c.wrapper.ownerDocument, 'mousemove', y),
                  Ge(c.scroller, 'dragstart', w),
                  Ge(c.scroller, 'drop', m),
                  p ||
                    (Ve(_),
                    s.addNew || nl(e.doc, a, null, null, s.extend),
                    (v && !L) || (d && g == 9)
                      ? setTimeout(function () {
                          c.wrapper.ownerDocument.body.focus({
                            preventScroll: !0,
                          }),
                            c.input.focus();
                        }, 20)
                      : c.input.focus());
              }),
              y = function (_) {
                p =
                  p ||
                  Math.abs(i.clientX - _.clientX) +
                    Math.abs(i.clientY - _.clientY) >=
                    10;
              },
              w = function () {
                return (p = !0);
              };
            v && (c.scroller.draggable = !0),
              (e.state.draggingText = m),
              (m.copy = !s.moveOnDrag),
              wt(c.wrapper.ownerDocument, 'mouseup', m),
              wt(c.wrapper.ownerDocument, 'mousemove', y),
              wt(c.scroller, 'dragstart', w),
              wt(c.scroller, 'drop', m),
              (e.state.delayingBlurEvent = !0),
              setTimeout(function () {
                return c.input.focus();
              }, 20),
              c.scroller.dragDrop && c.scroller.dragDrop();
          }
          function Op(e, i, a) {
            if (a == 'char') return new le(i, i);
            if (a == 'word') return e.findWordAt(i);
            if (a == 'line')
              return new le(F(i.line, 0), Ht(e.doc, F(i.line + 1, 0)));
            var s = a(e, i);
            return new le(s.from, s.to);
          }
          function hx(e, i, a, s) {
            d && au(e);
            var c = e.display,
              p = e.doc;
            Ve(i);
            var m,
              y,
              w = p.sel,
              _ = w.ranges;
            if (
              (s.addNew && !s.extend
                ? ((y = p.sel.contains(a)),
                  y > -1 ? (m = _[y]) : (m = new le(a, a)))
                : ((m = p.sel.primary()), (y = p.sel.primIndex)),
              s.unit == 'rectangle')
            )
              s.addNew || (m = new le(a, a)), (a = Ni(e, i, !0, !0)), (y = -1);
            else {
              var N = Op(e, a, s.unit);
              s.extend ? (m = wu(m, N.anchor, N.head, s.extend)) : (m = N);
            }
            s.addNew
              ? y == -1
                ? ((y = _.length),
                  Ke(p, Gn(e, _.concat([m]), y), {
                    scroll: !1,
                    origin: '*mouse',
                  }))
                : _.length > 1 && _[y].empty() && s.unit == 'char' && !s.extend
                ? (Ke(p, Gn(e, _.slice(0, y).concat(_.slice(y + 1)), 0), {
                    scroll: !1,
                    origin: '*mouse',
                  }),
                  (w = p.sel))
                : xu(p, y, m, I)
              : ((y = 0), Ke(p, new Nn([m], 0), I), (w = p.sel));
            var D = a;
            function B(bt) {
              if (Y(D, bt) != 0)
                if (((D = bt), s.unit == 'rectangle')) {
                  for (
                    var Et = [],
                      Dt = e.options.tabSize,
                      Pt = X(Mt(p, a.line).text, a.ch, Dt),
                      Ut = X(Mt(p, bt.line).text, bt.ch, Dt),
                      ge = Math.min(Pt, Ut),
                      He = Math.max(Pt, Ut),
                      Se = Math.min(a.line, bt.line),
                      xn = Math.min(e.lastLine(), Math.max(a.line, bt.line));
                    Se <= xn;
                    Se++
                  ) {
                    var cn = Mt(p, Se).text,
                      Me = nt(cn, ge, Dt);
                    ge == He
                      ? Et.push(new le(F(Se, Me), F(Se, Me)))
                      : cn.length > Me &&
                        Et.push(new le(F(Se, Me), F(Se, nt(cn, He, Dt))));
                  }
                  Et.length || Et.push(new le(a, a)),
                    Ke(p, Gn(e, w.ranges.slice(0, y).concat(Et), y), {
                      origin: '*mouse',
                      scroll: !1,
                    }),
                    e.scrollIntoView(bt);
                } else {
                  var un = m,
                    Ue = Op(e, bt, s.unit),
                    De = un.anchor,
                    Ne;
                  Y(Ue.anchor, De) > 0
                    ? ((Ne = Ue.head), (De = $e(un.from(), Ue.anchor)))
                    : ((Ne = Ue.anchor), (De = ie(un.to(), Ue.head)));
                  var Te = w.ranges.slice(0);
                  (Te[y] = dx(e, new le(Ht(p, De), Ne))),
                    Ke(p, Gn(e, Te, y), I);
                }
            }
            var H = c.wrapper.getBoundingClientRect(),
              Z = 0;
            function rt(bt) {
              var Et = ++Z,
                Dt = Ni(e, bt, !0, s.unit == 'rectangle');
              if (Dt)
                if (Y(Dt, D) != 0) {
                  (e.curOp.focus = mt(jt(e))), B(Dt);
                  var Pt = Ya(c, p);
                  (Dt.line >= Pt.to || Dt.line < Pt.from) &&
                    setTimeout(
                      Ie(e, function () {
                        Z == Et && rt(bt);
                      }),
                      150,
                    );
                } else {
                  var Ut =
                    bt.clientY < H.top ? -20 : bt.clientY > H.bottom ? 20 : 0;
                  Ut &&
                    setTimeout(
                      Ie(e, function () {
                        Z == Et && ((c.scroller.scrollTop += Ut), rt(bt));
                      }),
                      50,
                    );
                }
            }
            function pt(bt) {
              (e.state.selectingText = !1),
                (Z = 1 / 0),
                bt && (Ve(bt), c.input.focus()),
                Ge(c.wrapper.ownerDocument, 'mousemove', yt),
                Ge(c.wrapper.ownerDocument, 'mouseup', St),
                (p.history.lastSelOrigin = null);
            }
            var yt = Ie(e, function (bt) {
                bt.buttons === 0 || !ds(bt) ? pt(bt) : rt(bt);
              }),
              St = Ie(e, pt);
            (e.state.selectingText = St),
              wt(c.wrapper.ownerDocument, 'mousemove', yt),
              wt(c.wrapper.ownerDocument, 'mouseup', St);
          }
          function dx(e, i) {
            var a = i.anchor,
              s = i.head,
              c = Mt(e.doc, a.line);
            if (Y(a, s) == 0 && a.sticky == s.sticky) return i;
            var p = ye(c);
            if (!p) return i;
            var m = We(p, a.ch, a.sticky),
              y = p[m];
            if (y.from != a.ch && y.to != a.ch) return i;
            var w = m + ((y.from == a.ch) == (y.level != 1) ? 0 : 1);
            if (w == 0 || w == p.length) return i;
            var _;
            if (s.line != a.line)
              _ = (s.line - a.line) * (e.doc.direction == 'ltr' ? 1 : -1) > 0;
            else {
              var N = We(p, s.ch, s.sticky),
                D = N - m || (s.ch - a.ch) * (y.level == 1 ? -1 : 1);
              N == w - 1 || N == w ? (_ = D < 0) : (_ = D > 0);
            }
            var B = p[w + (_ ? -1 : 0)],
              H = _ == (B.level == 1),
              Z = H ? B.from : B.to,
              rt = H ? 'after' : 'before';
            return a.ch == Z && a.sticky == rt
              ? i
              : new le(new F(a.line, Z, rt), s);
          }
          function $p(e, i, a, s) {
            var c, p;
            if (i.touches)
              (c = i.touches[0].clientX), (p = i.touches[0].clientY);
            else
              try {
                (c = i.clientX), (p = i.clientY);
              } catch {
                return !1;
              }
            if (
              c >= Math.floor(e.display.gutters.getBoundingClientRect().right)
            )
              return !1;
            s && Ve(i);
            var m = e.display,
              y = m.lineDiv.getBoundingClientRect();
            if (p > y.bottom || !Je(e, a)) return hs(i);
            p -= y.top - m.viewOffset;
            for (var w = 0; w < e.display.gutterSpecs.length; ++w) {
              var _ = m.gutters.childNodes[w];
              if (_ && _.getBoundingClientRect().right >= c) {
                var N = or(e.doc, p),
                  D = e.display.gutterSpecs[w];
                return me(e, a, e, N, D.className, i), hs(i);
              }
            }
          }
          function Eu(e, i) {
            return $p(e, i, 'gutterClick', !0);
          }
          function Dp(e, i) {
            Er(e.display, i) ||
              px(e, i) ||
              ke(e, i, 'contextmenu') ||
              ft ||
              e.display.input.onContextMenu(i);
          }
          function px(e, i) {
            return Je(e, 'gutterContextMenu')
              ? $p(e, i, 'gutterContextMenu', !1)
              : !1;
          }
          function Rp(e) {
            (e.display.wrapper.className =
              e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
              e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
              xs(e);
          }
          var Ao = {
              toString: function () {
                return 'CodeMirror.Init';
              },
            },
            zp = {},
            cl = {};
          function gx(e) {
            var i = e.optionHandlers;
            function a(s, c, p, m) {
              (e.defaults[s] = c),
                p &&
                  (i[s] = m
                    ? function (y, w, _) {
                        _ != Ao && p(y, w, _);
                      }
                    : p);
            }
            (e.defineOption = a),
              (e.Init = Ao),
              a(
                'value',
                '',
                function (s, c) {
                  return s.setValue(c);
                },
                !0,
              ),
              a(
                'mode',
                null,
                function (s, c) {
                  (s.doc.modeOption = c), mu(s);
                },
                !0,
              ),
              a('indentUnit', 2, mu, !0),
              a('indentWithTabs', !1),
              a('smartIndent', !0),
              a(
                'tabSize',
                4,
                function (s) {
                  As(s), xs(s), an(s);
                },
                !0,
              ),
              a('lineSeparator', null, function (s, c) {
                if (((s.doc.lineSep = c), !!c)) {
                  var p = [],
                    m = s.doc.first;
                  s.doc.iter(function (w) {
                    for (var _ = 0; ; ) {
                      var N = w.text.indexOf(c, _);
                      if (N == -1) break;
                      (_ = N + c.length), p.push(F(m, N));
                    }
                    m++;
                  });
                  for (var y = p.length - 1; y >= 0; y--)
                    Co(s.doc, c, p[y], F(p[y].line, p[y].ch + c.length));
                }
              }),
              a(
                'specialChars',
                /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,
                function (s, c, p) {
                  (s.state.specialChars = new RegExp(
                    c.source + (c.test('	') ? '' : '|	'),
                    'g',
                  )),
                    p != Ao && s.refresh();
                },
              ),
              a(
                'specialCharPlaceholder',
                Ub,
                function (s) {
                  return s.refresh();
                },
                !0,
              ),
              a('electricChars', !0),
              a(
                'inputStyle',
                O ? 'contenteditable' : 'textarea',
                function () {
                  throw new Error(
                    'inputStyle can not (yet) be changed in a running editor',
                  );
                },
                !0,
              ),
              a(
                'spellcheck',
                !1,
                function (s, c) {
                  return (s.getInputField().spellcheck = c);
                },
                !0,
              ),
              a(
                'autocorrect',
                !1,
                function (s, c) {
                  return (s.getInputField().autocorrect = c);
                },
                !0,
              ),
              a(
                'autocapitalize',
                !1,
                function (s, c) {
                  return (s.getInputField().autocapitalize = c);
                },
                !0,
              ),
              a('rtlMoveVisually', !ct),
              a('wholeLineUpdateBefore', !0),
              a(
                'theme',
                'default',
                function (s) {
                  Rp(s), Ls(s);
                },
                !0,
              ),
              a('keyMap', 'default', function (s, c, p) {
                var m = al(c),
                  y = p != Ao && al(p);
                y && y.detach && y.detach(s, m),
                  m.attach && m.attach(s, y || null);
              }),
              a('extraKeys', null),
              a('configureMouse', null),
              a('lineWrapping', !1, mx, !0),
              a(
                'gutters',
                [],
                function (s, c) {
                  (s.display.gutterSpecs = gu(c, s.options.lineNumbers)), Ls(s);
                },
                !0,
              ),
              a(
                'fixedGutter',
                !0,
                function (s, c) {
                  (s.display.gutters.style.left = c
                    ? ru(s.display) + 'px'
                    : '0'),
                    s.refresh();
                },
                !0,
              ),
              a(
                'coverGutterNextToScrollbar',
                !1,
                function (s) {
                  return xo(s);
                },
                !0,
              ),
              a(
                'scrollbarStyle',
                'native',
                function (s) {
                  Id(s),
                    xo(s),
                    s.display.scrollbars.setScrollTop(s.doc.scrollTop),
                    s.display.scrollbars.setScrollLeft(s.doc.scrollLeft);
                },
                !0,
              ),
              a(
                'lineNumbers',
                !1,
                function (s, c) {
                  (s.display.gutterSpecs = gu(s.options.gutters, c)), Ls(s);
                },
                !0,
              ),
              a('firstLineNumber', 1, Ls, !0),
              a(
                'lineNumberFormatter',
                function (s) {
                  return s;
                },
                Ls,
                !0,
              ),
              a('showCursorWhenSelecting', !1, _s, !0),
              a('resetSelectionOnContextMenu', !0),
              a('lineWiseCopyCut', !0),
              a('pasteLinesPerSelection', !0),
              a('selectionsMayTouch', !1),
              a('readOnly', !1, function (s, c) {
                c == 'nocursor' && (bo(s), s.display.input.blur()),
                  s.display.input.readOnlyChanged(c);
              }),
              a('screenReaderLabel', null, function (s, c) {
                (c = c === '' ? null : c),
                  s.display.input.screenReaderLabelChanged(c);
              }),
              a(
                'disableInput',
                !1,
                function (s, c) {
                  c || s.display.input.reset();
                },
                !0,
              ),
              a('dragDrop', !0, vx),
              a('allowDropFileTypes', null),
              a('cursorBlinkRate', 530),
              a('cursorScrollMargin', 0),
              a('cursorHeight', 1, _s, !0),
              a('singleCursorHeightPerLine', !0, _s, !0),
              a('workTime', 100),
              a('workDelay', 100),
              a('flattenSpans', !0, As, !0),
              a('addModeClass', !1, As, !0),
              a('pollInterval', 100),
              a('undoDepth', 200, function (s, c) {
                return (s.doc.history.undoDepth = c);
              }),
              a('historyEventDelay', 1250),
              a(
                'viewportMargin',
                10,
                function (s) {
                  return s.refresh();
                },
                !0,
              ),
              a('maxHighlightLength', 1e4, As, !0),
              a('moveInputWithCursor', !0, function (s, c) {
                c || s.display.input.resetPosition();
              }),
              a('tabindex', null, function (s, c) {
                return (s.display.input.getField().tabIndex = c || '');
              }),
              a('autofocus', null),
              a(
                'direction',
                'ltr',
                function (s, c) {
                  return s.doc.setDirection(c);
                },
                !0,
              ),
              a('phrases', null);
          }
          function vx(e, i, a) {
            var s = a && a != Ao;
            if (!i != !s) {
              var c = e.display.dragFunctions,
                p = i ? wt : Ge;
              p(e.display.scroller, 'dragstart', c.start),
                p(e.display.scroller, 'dragenter', c.enter),
                p(e.display.scroller, 'dragover', c.over),
                p(e.display.scroller, 'dragleave', c.leave),
                p(e.display.scroller, 'drop', c.drop);
            }
          }
          function mx(e) {
            e.options.lineWrapping
              ? (Ct(e.display.wrapper, 'CodeMirror-wrap'),
                (e.display.sizer.style.minWidth = ''),
                (e.display.sizerWidth = null))
              : (dt(e.display.wrapper, 'CodeMirror-wrap'), Vc(e)),
              iu(e),
              an(e),
              xs(e),
              setTimeout(function () {
                return xo(e);
              }, 100);
          }
          function be(e, i) {
            var a = this;
            if (!(this instanceof be)) return new be(e, i);
            (this.options = i = i ? tt(i) : {}), tt(zp, i, !1);
            var s = i.value;
            typeof s == 'string'
              ? (s = new ln(s, i.mode, null, i.lineSeparator, i.direction))
              : i.mode && (s.modeOption = i.mode),
              (this.doc = s);
            var c = new be.inputStyles[i.inputStyle](this),
              p = (this.display = new Mw(e, s, c, i));
            (p.wrapper.CodeMirror = this),
              Rp(this),
              i.lineWrapping &&
                (this.display.wrapper.className += ' CodeMirror-wrap'),
              Id(this),
              (this.state = {
                keyMaps: [],
                overlays: [],
                modeGen: 0,
                overwrite: !1,
                delayingBlurEvent: !1,
                focused: !1,
                suppressEdits: !1,
                pasteIncoming: -1,
                cutIncoming: -1,
                selectingText: !1,
                draggingText: !1,
                highlight: new ot(),
                keySeq: null,
                specialChars: null,
              }),
              i.autofocus && !O && p.input.focus(),
              d &&
                g < 11 &&
                setTimeout(function () {
                  return a.display.input.reset(!0);
                }, 20),
              yx(this),
              Xw(),
              Di(this),
              (this.curOp.forceUpdate = !0),
              Xd(this, s),
              (i.autofocus && !O) || this.hasFocus()
                ? setTimeout(function () {
                    a.hasFocus() && !a.state.focused && lu(a);
                  }, 20)
                : bo(this);
            for (var m in cl) cl.hasOwnProperty(m) && cl[m](this, i[m], Ao);
            Bd(this), i.finishInit && i.finishInit(this);
            for (var y = 0; y < Lu.length; ++y) Lu[y](this);
            Ri(this),
              v &&
                i.lineWrapping &&
                getComputedStyle(p.lineDiv).textRendering ==
                  'optimizelegibility' &&
                (p.lineDiv.style.textRendering = 'auto');
          }
          (be.defaults = zp), (be.optionHandlers = cl);
          function yx(e) {
            var i = e.display;
            wt(i.scroller, 'mousedown', Ie(e, Pp)),
              d && g < 11
                ? wt(
                    i.scroller,
                    'dblclick',
                    Ie(e, function (w) {
                      if (!ke(e, w)) {
                        var _ = Ni(e, w);
                        if (!(!_ || Eu(e, w) || Er(e.display, w))) {
                          Ve(w);
                          var N = e.findWordAt(_);
                          nl(e.doc, N.anchor, N.head);
                        }
                      }
                    }),
                  )
                : wt(i.scroller, 'dblclick', function (w) {
                    return ke(e, w) || Ve(w);
                  }),
              wt(i.scroller, 'contextmenu', function (w) {
                return Dp(e, w);
              }),
              wt(i.input.getField(), 'contextmenu', function (w) {
                i.scroller.contains(w.target) || Dp(e, w);
              });
            var a,
              s = { end: 0 };
            function c() {
              i.activeTouch &&
                ((a = setTimeout(function () {
                  return (i.activeTouch = null);
                }, 1e3)),
                (s = i.activeTouch),
                (s.end = +new Date()));
            }
            function p(w) {
              if (w.touches.length != 1) return !1;
              var _ = w.touches[0];
              return _.radiusX <= 1 && _.radiusY <= 1;
            }
            function m(w, _) {
              if (_.left == null) return !0;
              var N = _.left - w.left,
                D = _.top - w.top;
              return N * N + D * D > 20 * 20;
            }
            wt(i.scroller, 'touchstart', function (w) {
              if (!ke(e, w) && !p(w) && !Eu(e, w)) {
                i.input.ensurePolled(), clearTimeout(a);
                var _ = +new Date();
                (i.activeTouch = {
                  start: _,
                  moved: !1,
                  prev: _ - s.end <= 300 ? s : null,
                }),
                  w.touches.length == 1 &&
                    ((i.activeTouch.left = w.touches[0].pageX),
                    (i.activeTouch.top = w.touches[0].pageY));
              }
            }),
              wt(i.scroller, 'touchmove', function () {
                i.activeTouch && (i.activeTouch.moved = !0);
              }),
              wt(i.scroller, 'touchend', function (w) {
                var _ = i.activeTouch;
                if (
                  _ &&
                  !Er(i, w) &&
                  _.left != null &&
                  !_.moved &&
                  new Date() - _.start < 300
                ) {
                  var N = e.coordsChar(i.activeTouch, 'page'),
                    D;
                  !_.prev || m(_, _.prev)
                    ? (D = new le(N, N))
                    : !_.prev.prev || m(_, _.prev.prev)
                    ? (D = e.findWordAt(N))
                    : (D = new le(F(N.line, 0), Ht(e.doc, F(N.line + 1, 0)))),
                    e.setSelection(D.anchor, D.head),
                    e.focus(),
                    Ve(w);
                }
                c();
              }),
              wt(i.scroller, 'touchcancel', c),
              wt(i.scroller, 'scroll', function () {
                i.scroller.clientHeight &&
                  (ks(e, i.scroller.scrollTop),
                  Oi(e, i.scroller.scrollLeft, !0),
                  me(e, 'scroll', e));
              }),
              wt(i.scroller, 'mousewheel', function (w) {
                return jd(e, w);
              }),
              wt(i.scroller, 'DOMMouseScroll', function (w) {
                return jd(e, w);
              }),
              wt(i.wrapper, 'scroll', function () {
                return (i.wrapper.scrollTop = i.wrapper.scrollLeft = 0);
              }),
              (i.dragFunctions = {
                enter: function (w) {
                  ke(e, w) || xr(w);
                },
                over: function (w) {
                  ke(e, w) || (Kw(e, w), xr(w));
                },
                start: function (w) {
                  return Vw(e, w);
                },
                drop: Ie(e, Gw),
                leave: function (w) {
                  ke(e, w) || bp(e);
                },
              });
            var y = i.input.getField();
            wt(y, 'keyup', function (w) {
              return Mp.call(e, w);
            }),
              wt(y, 'keydown', Ie(e, Ap)),
              wt(y, 'keypress', Ie(e, Np)),
              wt(y, 'focus', function (w) {
                return lu(e, w);
              }),
              wt(y, 'blur', function (w) {
                return bo(e, w);
              });
          }
          var Lu = [];
          be.defineInitHook = function (e) {
            return Lu.push(e);
          };
          function Bs(e, i, a, s) {
            var c = e.doc,
              p;
            a == null && (a = 'add'),
              a == 'smart' &&
                (c.mode.indent ? (p = vs(e, i).state) : (a = 'prev'));
            var m = e.options.tabSize,
              y = Mt(c, i),
              w = X(y.text, null, m);
            y.stateAfter && (y.stateAfter = null);
            var _ = y.text.match(/^\s*/)[0],
              N;
            if (!s && !/\S/.test(y.text)) (N = 0), (a = 'not');
            else if (
              a == 'smart' &&
              ((N = c.mode.indent(p, y.text.slice(_.length), y.text)),
              N == At || N > 150)
            ) {
              if (!s) return;
              a = 'prev';
            }
            a == 'prev'
              ? i > c.first
                ? (N = X(Mt(c, i - 1).text, null, m))
                : (N = 0)
              : a == 'add'
              ? (N = w + e.options.indentUnit)
              : a == 'subtract'
              ? (N = w - e.options.indentUnit)
              : typeof a == 'number' && (N = w + a),
              (N = Math.max(0, N));
            var D = '',
              B = 0;
            if (e.options.indentWithTabs)
              for (var H = Math.floor(N / m); H; --H) (B += m), (D += '	');
            if ((B < N && (D += gt(N - B)), D != _))
              return (
                Co(c, D, F(i, 0), F(i, _.length), '+input'),
                (y.stateAfter = null),
                !0
              );
            for (var Z = 0; Z < c.sel.ranges.length; Z++) {
              var rt = c.sel.ranges[Z];
              if (rt.head.line == i && rt.head.ch < _.length) {
                var pt = F(i, _.length);
                xu(c, Z, new le(pt, pt));
                break;
              }
            }
          }
          var Vn = null;
          function ul(e) {
            Vn = e;
          }
          function Au(e, i, a, s, c) {
            var p = e.doc;
            (e.display.shift = !1), s || (s = p.sel);
            var m = +new Date() - 200,
              y = c == 'paste' || e.state.pasteIncoming > m,
              w = ps(i),
              _ = null;
            if (y && s.ranges.length > 1)
              if (
                Vn &&
                Vn.text.join(`
`) == i
              ) {
                if (s.ranges.length % Vn.text.length == 0) {
                  _ = [];
                  for (var N = 0; N < Vn.text.length; N++)
                    _.push(p.splitLines(Vn.text[N]));
                }
              } else
                w.length == s.ranges.length &&
                  e.options.pasteLinesPerSelection &&
                  (_ = vt(w, function (yt) {
                    return [yt];
                  }));
            for (
              var D = e.curOp.updateInput, B = s.ranges.length - 1;
              B >= 0;
              B--
            ) {
              var H = s.ranges[B],
                Z = H.from(),
                rt = H.to();
              H.empty() &&
                (a && a > 0
                  ? (Z = F(Z.line, Z.ch - a))
                  : e.state.overwrite && !y
                  ? (rt = F(
                      rt.line,
                      Math.min(
                        Mt(p, rt.line).text.length,
                        rt.ch + st(w).length,
                      ),
                    ))
                  : y &&
                    Vn &&
                    Vn.lineWise &&
                    Vn.text.join(`
`) ==
                      w.join(`
`) &&
                    (Z = rt = F(Z.line, 0)));
              var pt = {
                from: Z,
                to: rt,
                text: _ ? _[B % _.length] : w,
                origin:
                  c ||
                  (y ? 'paste' : e.state.cutIncoming > m ? 'cut' : '+input'),
              };
              ko(e.doc, pt), Fe(e, 'inputRead', e, pt);
            }
            i && !y && Ip(e, i),
              wo(e),
              e.curOp.updateInput < 2 && (e.curOp.updateInput = D),
              (e.curOp.typing = !0),
              (e.state.pasteIncoming = e.state.cutIncoming = -1);
          }
          function Fp(e, i) {
            var a = e.clipboardData && e.clipboardData.getData('Text');
            if (a)
              return (
                e.preventDefault(),
                !i.isReadOnly() &&
                  !i.options.disableInput &&
                  i.hasFocus() &&
                  wn(i, function () {
                    return Au(i, a, 0, null, 'paste');
                  }),
                !0
              );
          }
          function Ip(e, i) {
            if (!(!e.options.electricChars || !e.options.smartIndent))
              for (var a = e.doc.sel, s = a.ranges.length - 1; s >= 0; s--) {
                var c = a.ranges[s];
                if (
                  !(
                    c.head.ch > 100 ||
                    (s && a.ranges[s - 1].head.line == c.head.line)
                  )
                ) {
                  var p = e.getModeAt(c.head),
                    m = !1;
                  if (p.electricChars) {
                    for (var y = 0; y < p.electricChars.length; y++)
                      if (i.indexOf(p.electricChars.charAt(y)) > -1) {
                        m = Bs(e, c.head.line, 'smart');
                        break;
                      }
                  } else
                    p.electricInput &&
                      p.electricInput.test(
                        Mt(e.doc, c.head.line).text.slice(0, c.head.ch),
                      ) &&
                      (m = Bs(e, c.head.line, 'smart'));
                  m && Fe(e, 'electricInput', e, c.head.line);
                }
              }
          }
          function qp(e) {
            for (var i = [], a = [], s = 0; s < e.doc.sel.ranges.length; s++) {
              var c = e.doc.sel.ranges[s].head.line,
                p = { anchor: F(c, 0), head: F(c + 1, 0) };
              a.push(p), i.push(e.getRange(p.anchor, p.head));
            }
            return { text: i, ranges: a };
          }
          function Mu(e, i, a, s) {
            e.setAttribute('autocorrect', a ? 'on' : 'off'),
              e.setAttribute('autocapitalize', s ? 'on' : 'off'),
              e.setAttribute('spellcheck', !!i);
          }
          function Hp() {
            var e = k(
                'textarea',
                null,
                null,
                'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none',
              ),
              i = k(
                'div',
                [e],
                null,
                'overflow: hidden; position: relative; width: 3px; height: 0px;',
              );
            return (
              v ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'),
              E && (e.style.border = '1px solid black'),
              i
            );
          }
          function bx(e) {
            var i = e.optionHandlers,
              a = (e.helpers = {});
            (e.prototype = {
              constructor: e,
              focus: function () {
                Zt(this).focus(), this.display.input.focus();
              },
              setOption: function (s, c) {
                var p = this.options,
                  m = p[s];
                (p[s] == c && s != 'mode') ||
                  ((p[s] = c),
                  i.hasOwnProperty(s) && Ie(this, i[s])(this, c, m),
                  me(this, 'optionChange', this, s));
              },
              getOption: function (s) {
                return this.options[s];
              },
              getDoc: function () {
                return this.doc;
              },
              addKeyMap: function (s, c) {
                this.state.keyMaps[c ? 'push' : 'unshift'](al(s));
              },
              removeKeyMap: function (s) {
                for (var c = this.state.keyMaps, p = 0; p < c.length; ++p)
                  if (c[p] == s || c[p].name == s) return c.splice(p, 1), !0;
              },
              addOverlay: tn(function (s, c) {
                var p = s.token ? s : e.getMode(this.options, s);
                if (p.startState)
                  throw new Error('Overlays may not be stateful.');
                _t(
                  this.state.overlays,
                  {
                    mode: p,
                    modeSpec: s,
                    opaque: c && c.opaque,
                    priority: (c && c.priority) || 0,
                  },
                  function (m) {
                    return m.priority;
                  },
                ),
                  this.state.modeGen++,
                  an(this);
              }),
              removeOverlay: tn(function (s) {
                for (var c = this.state.overlays, p = 0; p < c.length; ++p) {
                  var m = c[p].modeSpec;
                  if (m == s || (typeof s == 'string' && m.name == s)) {
                    c.splice(p, 1), this.state.modeGen++, an(this);
                    return;
                  }
                }
              }),
              indentLine: tn(function (s, c, p) {
                typeof c != 'string' &&
                  typeof c != 'number' &&
                  (c == null
                    ? (c = this.options.smartIndent ? 'smart' : 'prev')
                    : (c = c ? 'add' : 'subtract')),
                  C(this.doc, s) && Bs(this, s, c, p);
              }),
              indentSelection: tn(function (s) {
                for (
                  var c = this.doc.sel.ranges, p = -1, m = 0;
                  m < c.length;
                  m++
                ) {
                  var y = c[m];
                  if (y.empty())
                    y.head.line > p &&
                      (Bs(this, y.head.line, s, !0),
                      (p = y.head.line),
                      m == this.doc.sel.primIndex && wo(this));
                  else {
                    var w = y.from(),
                      _ = y.to(),
                      N = Math.max(p, w.line);
                    p = Math.min(this.lastLine(), _.line - (_.ch ? 0 : 1)) + 1;
                    for (var D = N; D < p; ++D) Bs(this, D, s);
                    var B = this.doc.sel.ranges;
                    w.ch == 0 &&
                      c.length == B.length &&
                      B[m].from().ch > 0 &&
                      xu(this.doc, m, new le(w, B[m].to()), P);
                  }
                }
              }),
              getTokenAt: function (s, c) {
                return Zh(this, s, c);
              },
              getLineTokens: function (s, c) {
                return Zh(this, F(s), c, !0);
              },
              getTokenTypeAt: function (s) {
                s = Ht(this.doc, s);
                var c = Kh(this, Mt(this.doc, s.line)),
                  p = 0,
                  m = (c.length - 1) / 2,
                  y = s.ch,
                  w;
                if (y == 0) w = c[2];
                else
                  for (;;) {
                    var _ = (p + m) >> 1;
                    if ((_ ? c[_ * 2 - 1] : 0) >= y) m = _;
                    else if (c[_ * 2 + 1] < y) p = _ + 1;
                    else {
                      w = c[_ * 2 + 2];
                      break;
                    }
                  }
                var N = w ? w.indexOf('overlay ') : -1;
                return N < 0 ? w : N == 0 ? null : w.slice(0, N - 1);
              },
              getModeAt: function (s) {
                var c = this.doc.mode;
                return c.innerMode
                  ? e.innerMode(c, this.getTokenAt(s).state).mode
                  : c;
              },
              getHelper: function (s, c) {
                return this.getHelpers(s, c)[0];
              },
              getHelpers: function (s, c) {
                var p = [];
                if (!a.hasOwnProperty(c)) return p;
                var m = a[c],
                  y = this.getModeAt(s);
                if (typeof y[c] == 'string') m[y[c]] && p.push(m[y[c]]);
                else if (y[c])
                  for (var w = 0; w < y[c].length; w++) {
                    var _ = m[y[c][w]];
                    _ && p.push(_);
                  }
                else
                  y.helperType && m[y.helperType]
                    ? p.push(m[y.helperType])
                    : m[y.name] && p.push(m[y.name]);
                for (var N = 0; N < m._global.length; N++) {
                  var D = m._global[N];
                  D.pred(y, this) && Tt(p, D.val) == -1 && p.push(D.val);
                }
                return p;
              },
              getStateAfter: function (s, c) {
                var p = this.doc;
                return (
                  (s = Mn(p, s ?? p.first + p.size - 1)),
                  vs(this, s + 1, c).state
                );
              },
              cursorCoords: function (s, c) {
                var p,
                  m = this.doc.sel.primary();
                return (
                  s == null
                    ? (p = m.head)
                    : typeof s == 'object'
                    ? (p = Ht(this.doc, s))
                    : (p = s ? m.from() : m.to()),
                  jn(this, p, c || 'page')
                );
              },
              charCoords: function (s, c) {
                return Ga(this, Ht(this.doc, s), c || 'page');
              },
              coordsChar: function (s, c) {
                return (s = Td(this, s, c || 'page')), tu(this, s.left, s.top);
              },
              lineAtHeight: function (s, c) {
                return (
                  (s = Td(this, { top: s, left: 0 }, c || 'page').top),
                  or(this.doc, s + this.display.viewOffset)
                );
              },
              heightAtLine: function (s, c, p) {
                var m = !1,
                  y;
                if (typeof s == 'number') {
                  var w = this.doc.first + this.doc.size - 1;
                  s < this.doc.first
                    ? (s = this.doc.first)
                    : s > w && ((s = w), (m = !0)),
                    (y = Mt(this.doc, s));
                } else y = s;
                return (
                  ja(this, y, { top: 0, left: 0 }, c || 'page', p || m).top +
                  (m ? this.doc.height - Tr(y) : 0)
                );
              },
              defaultTextHeight: function () {
                return mo(this.display);
              },
              defaultCharWidth: function () {
                return yo(this.display);
              },
              getViewport: function () {
                return { from: this.display.viewFrom, to: this.display.viewTo };
              },
              addWidget: function (s, c, p, m, y) {
                var w = this.display;
                s = jn(this, Ht(this.doc, s));
                var _ = s.bottom,
                  N = s.left;
                if (
                  ((c.style.position = 'absolute'),
                  c.setAttribute('cm-ignore-events', 'true'),
                  this.display.input.setUneditable(c),
                  w.sizer.appendChild(c),
                  m == 'over')
                )
                  _ = s.top;
                else if (m == 'above' || m == 'near') {
                  var D = Math.max(w.wrapper.clientHeight, this.doc.height),
                    B = Math.max(w.sizer.clientWidth, w.lineSpace.clientWidth);
                  (m == 'above' || s.bottom + c.offsetHeight > D) &&
                  s.top > c.offsetHeight
                    ? (_ = s.top - c.offsetHeight)
                    : s.bottom + c.offsetHeight <= D && (_ = s.bottom),
                    N + c.offsetWidth > B && (N = B - c.offsetWidth);
                }
                (c.style.top = _ + 'px'),
                  (c.style.left = c.style.right = ''),
                  y == 'right'
                    ? ((N = w.sizer.clientWidth - c.offsetWidth),
                      (c.style.right = '0px'))
                    : (y == 'left'
                        ? (N = 0)
                        : y == 'middle' &&
                          (N = (w.sizer.clientWidth - c.offsetWidth) / 2),
                      (c.style.left = N + 'px')),
                  p &&
                    vw(this, {
                      left: N,
                      top: _,
                      right: N + c.offsetWidth,
                      bottom: _ + c.offsetHeight,
                    });
              },
              triggerOnKeyDown: tn(Ap),
              triggerOnKeyPress: tn(Np),
              triggerOnKeyUp: Mp,
              triggerOnMouseDown: tn(Pp),
              execCommand: function (s) {
                if (Fs.hasOwnProperty(s)) return Fs[s].call(null, this);
              },
              triggerElectric: tn(function (s) {
                Ip(this, s);
              }),
              findPosH: function (s, c, p, m) {
                var y = 1;
                c < 0 && ((y = -1), (c = -c));
                for (
                  var w = Ht(this.doc, s), _ = 0;
                  _ < c && ((w = Nu(this.doc, w, y, p, m)), !w.hitSide);
                  ++_
                );
                return w;
              },
              moveH: tn(function (s, c) {
                var p = this;
                this.extendSelectionsBy(function (m) {
                  return p.display.shift || p.doc.extend || m.empty()
                    ? Nu(p.doc, m.head, s, c, p.options.rtlMoveVisually)
                    : s < 0
                    ? m.from()
                    : m.to();
                }, J);
              }),
              deleteH: tn(function (s, c) {
                var p = this.doc.sel,
                  m = this.doc;
                p.somethingSelected()
                  ? m.replaceSelection('', null, '+delete')
                  : Lo(this, function (y) {
                      var w = Nu(m, y.head, s, c, !1);
                      return s < 0
                        ? { from: w, to: y.head }
                        : { from: y.head, to: w };
                    });
              }),
              findPosV: function (s, c, p, m) {
                var y = 1,
                  w = m;
                c < 0 && ((y = -1), (c = -c));
                for (var _ = Ht(this.doc, s), N = 0; N < c; ++N) {
                  var D = jn(this, _, 'div');
                  if (
                    (w == null ? (w = D.left) : (D.left = w),
                    (_ = Bp(this, D, y, p)),
                    _.hitSide)
                  )
                    break;
                }
                return _;
              },
              moveV: tn(function (s, c) {
                var p = this,
                  m = this.doc,
                  y = [],
                  w =
                    !this.display.shift &&
                    !m.extend &&
                    m.sel.somethingSelected();
                if (
                  (m.extendSelectionsBy(function (N) {
                    if (w) return s < 0 ? N.from() : N.to();
                    var D = jn(p, N.head, 'div');
                    N.goalColumn != null && (D.left = N.goalColumn),
                      y.push(D.left);
                    var B = Bp(p, D, s, c);
                    return (
                      c == 'page' &&
                        N == m.sel.primary() &&
                        uu(p, Ga(p, B, 'div').top - D.top),
                      B
                    );
                  }, J),
                  y.length)
                )
                  for (var _ = 0; _ < m.sel.ranges.length; _++)
                    m.sel.ranges[_].goalColumn = y[_];
              }),
              findWordAt: function (s) {
                var c = this.doc,
                  p = Mt(c, s.line).text,
                  m = s.ch,
                  y = s.ch;
                if (p) {
                  var w = this.getHelper(s, 'wordChars');
                  (s.sticky == 'before' || y == p.length) && m ? --m : ++y;
                  for (
                    var _ = p.charAt(m),
                      N = zt(_, w)
                        ? function (D) {
                            return zt(D, w);
                          }
                        : /\s/.test(_)
                        ? function (D) {
                            return /\s/.test(D);
                          }
                        : function (D) {
                            return !/\s/.test(D) && !zt(D);
                          };
                    m > 0 && N(p.charAt(m - 1));

                  )
                    --m;
                  for (; y < p.length && N(p.charAt(y)); ) ++y;
                }
                return new le(F(s.line, m), F(s.line, y));
              },
              toggleOverwrite: function (s) {
                (s != null && s == this.state.overwrite) ||
                  ((this.state.overwrite = !this.state.overwrite)
                    ? Ct(this.display.cursorDiv, 'CodeMirror-overwrite')
                    : dt(this.display.cursorDiv, 'CodeMirror-overwrite'),
                  me(this, 'overwriteToggle', this, this.state.overwrite));
              },
              hasFocus: function () {
                return this.display.input.getField() == mt(jt(this));
              },
              isReadOnly: function () {
                return !!(this.options.readOnly || this.doc.cantEdit);
              },
              scrollTo: tn(function (s, c) {
                Ss(this, s, c);
              }),
              getScrollInfo: function () {
                var s = this.display.scroller;
                return {
                  left: s.scrollLeft,
                  top: s.scrollTop,
                  height: s.scrollHeight - ar(this) - this.display.barHeight,
                  width: s.scrollWidth - ar(this) - this.display.barWidth,
                  clientHeight: Yc(this),
                  clientWidth: Ai(this),
                };
              },
              scrollIntoView: tn(function (s, c) {
                s == null
                  ? ((s = { from: this.doc.sel.primary().head, to: null }),
                    c == null && (c = this.options.cursorScrollMargin))
                  : typeof s == 'number'
                  ? (s = { from: F(s, 0), to: null })
                  : s.from == null && (s = { from: s, to: null }),
                  s.to || (s.to = s.from),
                  (s.margin = c || 0),
                  s.from.line != null
                    ? mw(this, s)
                    : Dd(this, s.from, s.to, s.margin);
              }),
              setSize: tn(function (s, c) {
                var p = this,
                  m = function (w) {
                    return typeof w == 'number' || /^\d+$/.test(String(w))
                      ? w + 'px'
                      : w;
                  };
                s != null && (this.display.wrapper.style.width = m(s)),
                  c != null && (this.display.wrapper.style.height = m(c)),
                  this.options.lineWrapping && Sd(this);
                var y = this.display.viewFrom;
                this.doc.iter(y, this.display.viewTo, function (w) {
                  if (w.widgets) {
                    for (var _ = 0; _ < w.widgets.length; _++)
                      if (w.widgets[_].noHScroll) {
                        ti(p, y, 'widget');
                        break;
                      }
                  }
                  ++y;
                }),
                  (this.curOp.forceUpdate = !0),
                  me(this, 'refresh', this);
              }),
              operation: function (s) {
                return wn(this, s);
              },
              startOperation: function () {
                return Di(this);
              },
              endOperation: function () {
                return Ri(this);
              },
              refresh: tn(function () {
                var s = this.display.cachedTextHeight;
                an(this),
                  (this.curOp.forceUpdate = !0),
                  xs(this),
                  Ss(this, this.doc.scrollLeft, this.doc.scrollTop),
                  du(this.display),
                  (s == null ||
                    Math.abs(s - mo(this.display)) > 0.5 ||
                    this.options.lineWrapping) &&
                    iu(this),
                  me(this, 'refresh', this);
              }),
              swapDoc: tn(function (s) {
                var c = this.doc;
                return (
                  (c.cm = null),
                  this.state.selectingText && this.state.selectingText(),
                  Xd(this, s),
                  xs(this),
                  this.display.input.reset(),
                  Ss(this, s.scrollLeft, s.scrollTop),
                  (this.curOp.forceScroll = !0),
                  Fe(this, 'swapDoc', this, c),
                  c
                );
              }),
              phrase: function (s) {
                var c = this.options.phrases;
                return c && Object.prototype.hasOwnProperty.call(c, s)
                  ? c[s]
                  : s;
              },
              getInputField: function () {
                return this.display.input.getField();
              },
              getWrapperElement: function () {
                return this.display.wrapper;
              },
              getScrollerElement: function () {
                return this.display.scroller;
              },
              getGutterElement: function () {
                return this.display.gutters;
              },
            }),
              Qe(e),
              (e.registerHelper = function (s, c, p) {
                a.hasOwnProperty(s) || (a[s] = e[s] = { _global: [] }),
                  (a[s][c] = p);
              }),
              (e.registerGlobalHelper = function (s, c, p, m) {
                e.registerHelper(s, c, m),
                  a[s]._global.push({ pred: p, val: m });
              });
          }
          function Nu(e, i, a, s, c) {
            var p = i,
              m = a,
              y = Mt(e, i.line),
              w = c && e.direction == 'rtl' ? -a : a;
            function _() {
              var St = i.line + w;
              return St < e.first || St >= e.first + e.size
                ? !1
                : ((i = new F(St, i.ch, i.sticky)), (y = Mt(e, St)));
            }
            function N(St) {
              var bt;
              if (s == 'codepoint') {
                var Et = y.text.charCodeAt(i.ch + (a > 0 ? 0 : -1));
                if (isNaN(Et)) bt = null;
                else {
                  var Dt =
                    a > 0
                      ? Et >= 55296 && Et < 56320
                      : Et >= 56320 && Et < 57343;
                  bt = new F(
                    i.line,
                    Math.max(
                      0,
                      Math.min(y.text.length, i.ch + a * (Dt ? 2 : 1)),
                    ),
                    -a,
                  );
                }
              } else c ? (bt = tx(e.cm, y, i, a)) : (bt = Su(y, i, a));
              if (bt == null)
                if (!St && _()) i = ku(c, e.cm, y, i.line, w);
                else return !1;
              else i = bt;
              return !0;
            }
            if (s == 'char' || s == 'codepoint') N();
            else if (s == 'column') N(!0);
            else if (s == 'word' || s == 'group')
              for (
                var D = null,
                  B = s == 'group',
                  H = e.cm && e.cm.getHelper(i, 'wordChars'),
                  Z = !0;
                !(a < 0 && !N(!Z));
                Z = !1
              ) {
                var rt =
                    y.text.charAt(i.ch) ||
                    `
`,
                  pt = zt(rt, H)
                    ? 'w'
                    : B &&
                      rt ==
                        `
`
                    ? 'n'
                    : !B || /\s/.test(rt)
                    ? null
                    : 'p';
                if ((B && !Z && !pt && (pt = 's'), D && D != pt)) {
                  a < 0 && ((a = 1), N(), (i.sticky = 'after'));
                  break;
                }
                if ((pt && (D = pt), a > 0 && !N(!Z))) break;
              }
            var yt = il(e, i, p, m, !0);
            return qt(p, yt) && (yt.hitSide = !0), yt;
          }
          function Bp(e, i, a, s) {
            var c = e.doc,
              p = i.left,
              m;
            if (s == 'page') {
              var y = Math.min(
                  e.display.wrapper.clientHeight,
                  Zt(e).innerHeight || c(e).documentElement.clientHeight,
                ),
                w = Math.max(y - 0.5 * mo(e.display), 3);
              m = (a > 0 ? i.bottom : i.top) + a * w;
            } else s == 'line' && (m = a > 0 ? i.bottom + 3 : i.top - 3);
            for (var _; (_ = tu(e, p, m)), !!_.outside; ) {
              if (a < 0 ? m <= 0 : m >= c.height) {
                _.hitSide = !0;
                break;
              }
              m += a * 5;
            }
            return _;
          }
          var fe = function (e) {
            (this.cm = e),
              (this.lastAnchorNode =
                this.lastAnchorOffset =
                this.lastFocusNode =
                this.lastFocusOffset =
                  null),
              (this.polling = new ot()),
              (this.composing = null),
              (this.gracePeriod = !1),
              (this.readDOMTimeout = null);
          };
          (fe.prototype.init = function (e) {
            var i = this,
              a = this,
              s = a.cm,
              c = (a.div = e.lineDiv);
            (c.contentEditable = !0),
              Mu(
                c,
                s.options.spellcheck,
                s.options.autocorrect,
                s.options.autocapitalize,
              );
            function p(y) {
              for (var w = y.target; w; w = w.parentNode) {
                if (w == c) return !0;
                if (/\bCodeMirror-(?:line)?widget\b/.test(w.className)) break;
              }
              return !1;
            }
            wt(c, 'paste', function (y) {
              !p(y) ||
                ke(s, y) ||
                Fp(y, s) ||
                (g <= 11 &&
                  setTimeout(
                    Ie(s, function () {
                      return i.updateFromDOM();
                    }),
                    20,
                  ));
            }),
              wt(c, 'compositionstart', function (y) {
                i.composing = { data: y.data, done: !1 };
              }),
              wt(c, 'compositionupdate', function (y) {
                i.composing || (i.composing = { data: y.data, done: !1 });
              }),
              wt(c, 'compositionend', function (y) {
                i.composing &&
                  (y.data != i.composing.data && i.readFromDOMSoon(),
                  (i.composing.done = !0));
              }),
              wt(c, 'touchstart', function () {
                return a.forceCompositionEnd();
              }),
              wt(c, 'input', function () {
                i.composing || i.readFromDOMSoon();
              });
            function m(y) {
              if (!(!p(y) || ke(s, y))) {
                if (s.somethingSelected())
                  ul({ lineWise: !1, text: s.getSelections() }),
                    y.type == 'cut' && s.replaceSelection('', null, 'cut');
                else if (s.options.lineWiseCopyCut) {
                  var w = qp(s);
                  ul({ lineWise: !0, text: w.text }),
                    y.type == 'cut' &&
                      s.operation(function () {
                        s.setSelections(w.ranges, 0, P),
                          s.replaceSelection('', null, 'cut');
                      });
                } else return;
                if (y.clipboardData) {
                  y.clipboardData.clearData();
                  var _ = Vn.text.join(`
`);
                  if (
                    (y.clipboardData.setData('Text', _),
                    y.clipboardData.getData('Text') == _)
                  ) {
                    y.preventDefault();
                    return;
                  }
                }
                var N = Hp(),
                  D = N.firstChild;
                Mu(D),
                  s.display.lineSpace.insertBefore(
                    N,
                    s.display.lineSpace.firstChild,
                  ),
                  (D.value = Vn.text.join(`
`));
                var B = mt(c.ownerDocument);
                Ft(D),
                  setTimeout(function () {
                    s.display.lineSpace.removeChild(N),
                      B.focus(),
                      B == c && a.showPrimarySelection();
                  }, 50);
              }
            }
            wt(c, 'copy', m), wt(c, 'cut', m);
          }),
            (fe.prototype.screenReaderLabelChanged = function (e) {
              e
                ? this.div.setAttribute('aria-label', e)
                : this.div.removeAttribute('aria-label');
            }),
            (fe.prototype.prepareSelection = function () {
              var e = Pd(this.cm, !1);
              return (e.focus = mt(this.div.ownerDocument) == this.div), e;
            }),
            (fe.prototype.showSelection = function (e, i) {
              !e ||
                !this.cm.display.view.length ||
                ((e.focus || i) && this.showPrimarySelection(),
                this.showMultipleSelections(e));
            }),
            (fe.prototype.getSelection = function () {
              return this.cm.display.wrapper.ownerDocument.getSelection();
            }),
            (fe.prototype.showPrimarySelection = function () {
              var e = this.getSelection(),
                i = this.cm,
                a = i.doc.sel.primary(),
                s = a.from(),
                c = a.to();
              if (
                i.display.viewTo == i.display.viewFrom ||
                s.line >= i.display.viewTo ||
                c.line < i.display.viewFrom
              ) {
                e.removeAllRanges();
                return;
              }
              var p = fl(i, e.anchorNode, e.anchorOffset),
                m = fl(i, e.focusNode, e.focusOffset);
              if (
                !(
                  p &&
                  !p.bad &&
                  m &&
                  !m.bad &&
                  Y($e(p, m), s) == 0 &&
                  Y(ie(p, m), c) == 0
                )
              ) {
                var y = i.display.view,
                  w = (s.line >= i.display.viewFrom && Wp(i, s)) || {
                    node: y[0].measure.map[2],
                    offset: 0,
                  },
                  _ = c.line < i.display.viewTo && Wp(i, c);
                if (!_) {
                  var N = y[y.length - 1].measure,
                    D = N.maps ? N.maps[N.maps.length - 1] : N.map;
                  _ = {
                    node: D[D.length - 1],
                    offset: D[D.length - 2] - D[D.length - 3],
                  };
                }
                if (!w || !_) {
                  e.removeAllRanges();
                  return;
                }
                var B = e.rangeCount && e.getRangeAt(0),
                  H;
                try {
                  H = W(w.node, w.offset, _.offset, _.node);
                } catch {}
                H &&
                  (!l && i.state.focused
                    ? (e.collapse(w.node, w.offset),
                      H.collapsed || (e.removeAllRanges(), e.addRange(H)))
                    : (e.removeAllRanges(), e.addRange(H)),
                  B && e.anchorNode == null
                    ? e.addRange(B)
                    : l && this.startGracePeriod()),
                  this.rememberSelection();
              }
            }),
            (fe.prototype.startGracePeriod = function () {
              var e = this;
              clearTimeout(this.gracePeriod),
                (this.gracePeriod = setTimeout(function () {
                  (e.gracePeriod = !1),
                    e.selectionChanged() &&
                      e.cm.operation(function () {
                        return (e.cm.curOp.selectionChanged = !0);
                      });
                }, 20));
            }),
            (fe.prototype.showMultipleSelections = function (e) {
              z(this.cm.display.cursorDiv, e.cursors),
                z(this.cm.display.selectionDiv, e.selection);
            }),
            (fe.prototype.rememberSelection = function () {
              var e = this.getSelection();
              (this.lastAnchorNode = e.anchorNode),
                (this.lastAnchorOffset = e.anchorOffset),
                (this.lastFocusNode = e.focusNode),
                (this.lastFocusOffset = e.focusOffset);
            }),
            (fe.prototype.selectionInEditor = function () {
              var e = this.getSelection();
              if (!e.rangeCount) return !1;
              var i = e.getRangeAt(0).commonAncestorContainer;
              return et(this.div, i);
            }),
            (fe.prototype.focus = function () {
              this.cm.options.readOnly != 'nocursor' &&
                ((!this.selectionInEditor() ||
                  mt(this.div.ownerDocument) != this.div) &&
                  this.showSelection(this.prepareSelection(), !0),
                this.div.focus());
            }),
            (fe.prototype.blur = function () {
              this.div.blur();
            }),
            (fe.prototype.getField = function () {
              return this.div;
            }),
            (fe.prototype.supportsTouch = function () {
              return !0;
            }),
            (fe.prototype.receivedFocus = function () {
              var e = this,
                i = this;
              this.selectionInEditor()
                ? setTimeout(function () {
                    return e.pollSelection();
                  }, 20)
                : wn(this.cm, function () {
                    return (i.cm.curOp.selectionChanged = !0);
                  });
              function a() {
                i.cm.state.focused &&
                  (i.pollSelection(),
                  i.polling.set(i.cm.options.pollInterval, a));
              }
              this.polling.set(this.cm.options.pollInterval, a);
            }),
            (fe.prototype.selectionChanged = function () {
              var e = this.getSelection();
              return (
                e.anchorNode != this.lastAnchorNode ||
                e.anchorOffset != this.lastAnchorOffset ||
                e.focusNode != this.lastFocusNode ||
                e.focusOffset != this.lastFocusOffset
              );
            }),
            (fe.prototype.pollSelection = function () {
              if (
                !(
                  this.readDOMTimeout != null ||
                  this.gracePeriod ||
                  !this.selectionChanged()
                )
              ) {
                var e = this.getSelection(),
                  i = this.cm;
                if (
                  $ &&
                  x &&
                  this.cm.display.gutterSpecs.length &&
                  wx(e.anchorNode)
                ) {
                  this.cm.triggerOnKeyDown({
                    type: 'keydown',
                    keyCode: 8,
                    preventDefault: Math.abs,
                  }),
                    this.blur(),
                    this.focus();
                  return;
                }
                if (!this.composing) {
                  this.rememberSelection();
                  var a = fl(i, e.anchorNode, e.anchorOffset),
                    s = fl(i, e.focusNode, e.focusOffset);
                  a &&
                    s &&
                    wn(i, function () {
                      Ke(i.doc, ni(a, s), P),
                        (a.bad || s.bad) && (i.curOp.selectionChanged = !0);
                    });
                }
              }
            }),
            (fe.prototype.pollContent = function () {
              this.readDOMTimeout != null &&
                (clearTimeout(this.readDOMTimeout),
                (this.readDOMTimeout = null));
              var e = this.cm,
                i = e.display,
                a = e.doc.sel.primary(),
                s = a.from(),
                c = a.to();
              if (
                (s.ch == 0 &&
                  s.line > e.firstLine() &&
                  (s = F(s.line - 1, Mt(e.doc, s.line - 1).length)),
                c.ch == Mt(e.doc, c.line).text.length &&
                  c.line < e.lastLine() &&
                  (c = F(c.line + 1, 0)),
                s.line < i.viewFrom || c.line > i.viewTo - 1)
              )
                return !1;
              var p, m, y;
              s.line == i.viewFrom || (p = Pi(e, s.line)) == 0
                ? ((m = ae(i.view[0].line)), (y = i.view[0].node))
                : ((m = ae(i.view[p].line)),
                  (y = i.view[p - 1].node.nextSibling));
              var w = Pi(e, c.line),
                _,
                N;
              if (
                (w == i.view.length - 1
                  ? ((_ = i.viewTo - 1), (N = i.lineDiv.lastChild))
                  : ((_ = ae(i.view[w + 1].line) - 1),
                    (N = i.view[w + 1].node.previousSibling)),
                !y)
              )
                return !1;
              for (
                var D = e.doc.splitLines(xx(e, y, N, m, _)),
                  B = kr(e.doc, F(m, 0), F(_, Mt(e.doc, _).text.length));
                D.length > 1 && B.length > 1;

              )
                if (st(D) == st(B)) D.pop(), B.pop(), _--;
                else if (D[0] == B[0]) D.shift(), B.shift(), m++;
                else break;
              for (
                var H = 0,
                  Z = 0,
                  rt = D[0],
                  pt = B[0],
                  yt = Math.min(rt.length, pt.length);
                H < yt && rt.charCodeAt(H) == pt.charCodeAt(H);

              )
                ++H;
              for (
                var St = st(D),
                  bt = st(B),
                  Et = Math.min(
                    St.length - (D.length == 1 ? H : 0),
                    bt.length - (B.length == 1 ? H : 0),
                  );
                Z < Et &&
                St.charCodeAt(St.length - Z - 1) ==
                  bt.charCodeAt(bt.length - Z - 1);

              )
                ++Z;
              if (D.length == 1 && B.length == 1 && m == s.line)
                for (
                  ;
                  H &&
                  H > s.ch &&
                  St.charCodeAt(St.length - Z - 1) ==
                    bt.charCodeAt(bt.length - Z - 1);

                )
                  H--, Z++;
              (D[D.length - 1] = St.slice(0, St.length - Z).replace(
                /^\u200b+/,
                '',
              )),
                (D[0] = D[0].slice(H).replace(/\u200b+$/, ''));
              var Dt = F(m, H),
                Pt = F(_, B.length ? st(B).length - Z : 0);
              if (D.length > 1 || D[0] || Y(Dt, Pt))
                return Co(e.doc, D, Dt, Pt, '+input'), !0;
            }),
            (fe.prototype.ensurePolled = function () {
              this.forceCompositionEnd();
            }),
            (fe.prototype.reset = function () {
              this.forceCompositionEnd();
            }),
            (fe.prototype.forceCompositionEnd = function () {
              this.composing &&
                (clearTimeout(this.readDOMTimeout),
                (this.composing = null),
                this.updateFromDOM(),
                this.div.blur(),
                this.div.focus());
            }),
            (fe.prototype.readFromDOMSoon = function () {
              var e = this;
              this.readDOMTimeout == null &&
                (this.readDOMTimeout = setTimeout(function () {
                  if (((e.readDOMTimeout = null), e.composing))
                    if (e.composing.done) e.composing = null;
                    else return;
                  e.updateFromDOM();
                }, 80));
            }),
            (fe.prototype.updateFromDOM = function () {
              var e = this;
              (this.cm.isReadOnly() || !this.pollContent()) &&
                wn(this.cm, function () {
                  return an(e.cm);
                });
            }),
            (fe.prototype.setUneditable = function (e) {
              e.contentEditable = 'false';
            }),
            (fe.prototype.onKeyPress = function (e) {
              e.charCode == 0 ||
                this.composing ||
                (e.preventDefault(),
                this.cm.isReadOnly() ||
                  Ie(this.cm, Au)(
                    this.cm,
                    String.fromCharCode(
                      e.charCode == null ? e.keyCode : e.charCode,
                    ),
                    0,
                  ));
            }),
            (fe.prototype.readOnlyChanged = function (e) {
              this.div.contentEditable = String(e != 'nocursor');
            }),
            (fe.prototype.onContextMenu = function () {}),
            (fe.prototype.resetPosition = function () {}),
            (fe.prototype.needsContentAttribute = !0);
          function Wp(e, i) {
            var a = Zc(e, i.line);
            if (!a || a.hidden) return null;
            var s = Mt(e.doc, i.line),
              c = yd(a, s, i.line),
              p = ye(s, e.doc.direction),
              m = 'left';
            if (p) {
              var y = We(p, i.ch);
              m = y % 2 ? 'right' : 'left';
            }
            var w = xd(c.map, i.ch, m);
            return (w.offset = w.collapse == 'right' ? w.end : w.start), w;
          }
          function wx(e) {
            for (var i = e; i; i = i.parentNode)
              if (/CodeMirror-gutter-wrapper/.test(i.className)) return !0;
            return !1;
          }
          function Mo(e, i) {
            return i && (e.bad = !0), e;
          }
          function xx(e, i, a, s, c) {
            var p = '',
              m = !1,
              y = e.doc.lineSeparator(),
              w = !1;
            function _(H) {
              return function (Z) {
                return Z.id == H;
              };
            }
            function N() {
              m && ((p += y), w && (p += y), (m = w = !1));
            }
            function D(H) {
              H && (N(), (p += H));
            }
            function B(H) {
              if (H.nodeType == 1) {
                var Z = H.getAttribute('cm-text');
                if (Z) {
                  D(Z);
                  return;
                }
                var rt = H.getAttribute('cm-marker'),
                  pt;
                if (rt) {
                  var yt = e.findMarks(F(s, 0), F(c + 1, 0), _(+rt));
                  yt.length &&
                    (pt = yt[0].find(0)) &&
                    D(kr(e.doc, pt.from, pt.to).join(y));
                  return;
                }
                if (H.getAttribute('contenteditable') == 'false') return;
                var St = /^(pre|div|p|li|table|br)$/i.test(H.nodeName);
                if (!/^br$/i.test(H.nodeName) && H.textContent.length == 0)
                  return;
                St && N();
                for (var bt = 0; bt < H.childNodes.length; bt++)
                  B(H.childNodes[bt]);
                /^(pre|p)$/i.test(H.nodeName) && (w = !0), St && (m = !0);
              } else H.nodeType == 3 && D(H.nodeValue.replace(/\u200b/g, '').replace(/\u00a0/g, ' '));
            }
            for (; B(i), i != a; ) (i = i.nextSibling), (w = !1);
            return p;
          }
          function fl(e, i, a) {
            var s;
            if (i == e.display.lineDiv) {
              if (((s = e.display.lineDiv.childNodes[a]), !s))
                return Mo(e.clipPos(F(e.display.viewTo - 1)), !0);
              (i = null), (a = 0);
            } else
              for (s = i; ; s = s.parentNode) {
                if (!s || s == e.display.lineDiv) return null;
                if (s.parentNode && s.parentNode == e.display.lineDiv) break;
              }
            for (var c = 0; c < e.display.view.length; c++) {
              var p = e.display.view[c];
              if (p.node == s) return _x(p, i, a);
            }
          }
          function _x(e, i, a) {
            var s = e.text.firstChild,
              c = !1;
            if (!i || !et(s, i)) return Mo(F(ae(e.line), 0), !0);
            if (i == s && ((c = !0), (i = s.childNodes[a]), (a = 0), !i)) {
              var p = e.rest ? st(e.rest) : e.line;
              return Mo(F(ae(p), p.text.length), c);
            }
            var m = i.nodeType == 3 ? i : null,
              y = i;
            for (
              !m &&
              i.childNodes.length == 1 &&
              i.firstChild.nodeType == 3 &&
              ((m = i.firstChild), a && (a = m.nodeValue.length));
              y.parentNode != s;

            )
              y = y.parentNode;
            var w = e.measure,
              _ = w.maps;
            function N(pt, yt, St) {
              for (var bt = -1; bt < (_ ? _.length : 0); bt++)
                for (
                  var Et = bt < 0 ? w.map : _[bt], Dt = 0;
                  Dt < Et.length;
                  Dt += 3
                ) {
                  var Pt = Et[Dt + 2];
                  if (Pt == pt || Pt == yt) {
                    var Ut = ae(bt < 0 ? e.line : e.rest[bt]),
                      ge = Et[Dt] + St;
                    return (
                      (St < 0 || Pt != pt) && (ge = Et[Dt + (St ? 1 : 0)]),
                      F(Ut, ge)
                    );
                  }
                }
            }
            var D = N(m, y, a);
            if (D) return Mo(D, c);
            for (
              var B = y.nextSibling, H = m ? m.nodeValue.length - a : 0;
              B;
              B = B.nextSibling
            ) {
              if (((D = N(B, B.firstChild, 0)), D))
                return Mo(F(D.line, D.ch - H), c);
              H += B.textContent.length;
            }
            for (var Z = y.previousSibling, rt = a; Z; Z = Z.previousSibling) {
              if (((D = N(Z, Z.firstChild, -1)), D))
                return Mo(F(D.line, D.ch + rt), c);
              rt += Z.textContent.length;
            }
          }
          var Ee = function (e) {
            (this.cm = e),
              (this.prevInput = ''),
              (this.pollingFast = !1),
              (this.polling = new ot()),
              (this.hasSelection = !1),
              (this.composing = null),
              (this.resetting = !1);
          };
          (Ee.prototype.init = function (e) {
            var i = this,
              a = this,
              s = this.cm;
            this.createField(e);
            var c = this.textarea;
            e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
              E && (c.style.width = '0px'),
              wt(c, 'input', function () {
                d && g >= 9 && i.hasSelection && (i.hasSelection = null),
                  a.poll();
              }),
              wt(c, 'paste', function (m) {
                ke(s, m) ||
                  Fp(m, s) ||
                  ((s.state.pasteIncoming = +new Date()), a.fastPoll());
              });
            function p(m) {
              if (!ke(s, m)) {
                if (s.somethingSelected())
                  ul({ lineWise: !1, text: s.getSelections() });
                else if (s.options.lineWiseCopyCut) {
                  var y = qp(s);
                  ul({ lineWise: !0, text: y.text }),
                    m.type == 'cut'
                      ? s.setSelections(y.ranges, null, P)
                      : ((a.prevInput = ''),
                        (c.value = y.text.join(`
`)),
                        Ft(c));
                } else return;
                m.type == 'cut' && (s.state.cutIncoming = +new Date());
              }
            }
            wt(c, 'cut', p),
              wt(c, 'copy', p),
              wt(e.scroller, 'paste', function (m) {
                if (!(Er(e, m) || ke(s, m))) {
                  if (!c.dispatchEvent) {
                    (s.state.pasteIncoming = +new Date()), a.focus();
                    return;
                  }
                  var y = new Event('paste');
                  (y.clipboardData = m.clipboardData), c.dispatchEvent(y);
                }
              }),
              wt(e.lineSpace, 'selectstart', function (m) {
                Er(e, m) || Ve(m);
              }),
              wt(c, 'compositionstart', function () {
                var m = s.getCursor('from');
                a.composing && a.composing.range.clear(),
                  (a.composing = {
                    start: m,
                    range: s.markText(m, s.getCursor('to'), {
                      className: 'CodeMirror-composing',
                    }),
                  });
              }),
              wt(c, 'compositionend', function () {
                a.composing &&
                  (a.poll(), a.composing.range.clear(), (a.composing = null));
              });
          }),
            (Ee.prototype.createField = function (e) {
              (this.wrapper = Hp()), (this.textarea = this.wrapper.firstChild);
              var i = this.cm.options;
              Mu(this.textarea, i.spellcheck, i.autocorrect, i.autocapitalize);
            }),
            (Ee.prototype.screenReaderLabelChanged = function (e) {
              e
                ? this.textarea.setAttribute('aria-label', e)
                : this.textarea.removeAttribute('aria-label');
            }),
            (Ee.prototype.prepareSelection = function () {
              var e = this.cm,
                i = e.display,
                a = e.doc,
                s = Pd(e);
              if (e.options.moveInputWithCursor) {
                var c = jn(e, a.sel.primary().head, 'div'),
                  p = i.wrapper.getBoundingClientRect(),
                  m = i.lineDiv.getBoundingClientRect();
                (s.teTop = Math.max(
                  0,
                  Math.min(i.wrapper.clientHeight - 10, c.top + m.top - p.top),
                )),
                  (s.teLeft = Math.max(
                    0,
                    Math.min(
                      i.wrapper.clientWidth - 10,
                      c.left + m.left - p.left,
                    ),
                  ));
              }
              return s;
            }),
            (Ee.prototype.showSelection = function (e) {
              var i = this.cm,
                a = i.display;
              z(a.cursorDiv, e.cursors),
                z(a.selectionDiv, e.selection),
                e.teTop != null &&
                  ((this.wrapper.style.top = e.teTop + 'px'),
                  (this.wrapper.style.left = e.teLeft + 'px'));
            }),
            (Ee.prototype.reset = function (e) {
              if (!(this.contextMenuPending || (this.composing && e))) {
                var i = this.cm;
                if (((this.resetting = !0), i.somethingSelected())) {
                  this.prevInput = '';
                  var a = i.getSelection();
                  (this.textarea.value = a),
                    i.state.focused && Ft(this.textarea),
                    d && g >= 9 && (this.hasSelection = a);
                } else
                  e ||
                    ((this.prevInput = this.textarea.value = ''),
                    d && g >= 9 && (this.hasSelection = null));
                this.resetting = !1;
              }
            }),
            (Ee.prototype.getField = function () {
              return this.textarea;
            }),
            (Ee.prototype.supportsTouch = function () {
              return !1;
            }),
            (Ee.prototype.focus = function () {
              if (
                this.cm.options.readOnly != 'nocursor' &&
                (!O || mt(this.textarea.ownerDocument) != this.textarea)
              )
                try {
                  this.textarea.focus();
                } catch {}
            }),
            (Ee.prototype.blur = function () {
              this.textarea.blur();
            }),
            (Ee.prototype.resetPosition = function () {
              this.wrapper.style.top = this.wrapper.style.left = 0;
            }),
            (Ee.prototype.receivedFocus = function () {
              this.slowPoll();
            }),
            (Ee.prototype.slowPoll = function () {
              var e = this;
              this.pollingFast ||
                this.polling.set(this.cm.options.pollInterval, function () {
                  e.poll(), e.cm.state.focused && e.slowPoll();
                });
            }),
            (Ee.prototype.fastPoll = function () {
              var e = !1,
                i = this;
              i.pollingFast = !0;
              function a() {
                var s = i.poll();
                !s && !e
                  ? ((e = !0), i.polling.set(60, a))
                  : ((i.pollingFast = !1), i.slowPoll());
              }
              i.polling.set(20, a);
            }),
            (Ee.prototype.poll = function () {
              var e = this,
                i = this.cm,
                a = this.textarea,
                s = this.prevInput;
              if (
                this.contextMenuPending ||
                this.resetting ||
                !i.state.focused ||
                (Xr(a) && !s && !this.composing) ||
                i.isReadOnly() ||
                i.options.disableInput ||
                i.state.keySeq
              )
                return !1;
              var c = a.value;
              if (c == s && !i.somethingSelected()) return !1;
              if (
                (d && g >= 9 && this.hasSelection === c) ||
                (G && /[\uf700-\uf7ff]/.test(c))
              )
                return i.display.input.reset(), !1;
              if (i.doc.sel == i.display.selForContextMenu) {
                var p = c.charCodeAt(0);
                if ((p == 8203 && !s && (s = '​'), p == 8666))
                  return this.reset(), this.cm.execCommand('undo');
              }
              for (
                var m = 0, y = Math.min(s.length, c.length);
                m < y && s.charCodeAt(m) == c.charCodeAt(m);

              )
                ++m;
              return (
                wn(i, function () {
                  Au(
                    i,
                    c.slice(m),
                    s.length - m,
                    null,
                    e.composing ? '*compose' : null,
                  ),
                    c.length > 1e3 ||
                    c.indexOf(`
`) > -1
                      ? (a.value = e.prevInput = '')
                      : (e.prevInput = c),
                    e.composing &&
                      (e.composing.range.clear(),
                      (e.composing.range = i.markText(
                        e.composing.start,
                        i.getCursor('to'),
                        { className: 'CodeMirror-composing' },
                      )));
                }),
                !0
              );
            }),
            (Ee.prototype.ensurePolled = function () {
              this.pollingFast && this.poll() && (this.pollingFast = !1);
            }),
            (Ee.prototype.onKeyPress = function () {
              d && g >= 9 && (this.hasSelection = null), this.fastPoll();
            }),
            (Ee.prototype.onContextMenu = function (e) {
              var i = this,
                a = i.cm,
                s = a.display,
                c = i.textarea;
              i.contextMenuPending && i.contextMenuPending();
              var p = Ni(a, e),
                m = s.scroller.scrollTop;
              if (!p || A) return;
              var y = a.options.resetSelectionOnContextMenu;
              y && a.doc.sel.contains(p) == -1 && Ie(a, Ke)(a.doc, ni(p), P);
              var w = c.style.cssText,
                _ = i.wrapper.style.cssText,
                N = i.wrapper.offsetParent.getBoundingClientRect();
              (i.wrapper.style.cssText = 'position: static'),
                (c.style.cssText =
                  `position: absolute; width: 30px; height: 30px;
      top: ` +
                  (e.clientY - N.top - 5) +
                  'px; left: ' +
                  (e.clientX - N.left - 5) +
                  `px;
      z-index: 1000; background: ` +
                  (d ? 'rgba(255, 255, 255, .05)' : 'transparent') +
                  `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`);
              var D;
              v && (D = c.ownerDocument.defaultView.scrollY),
                s.input.focus(),
                v && c.ownerDocument.defaultView.scrollTo(null, D),
                s.input.reset(),
                a.somethingSelected() || (c.value = i.prevInput = ' '),
                (i.contextMenuPending = H),
                (s.selForContextMenu = a.doc.sel),
                clearTimeout(s.detectingSelectAll);
              function B() {
                if (c.selectionStart != null) {
                  var rt = a.somethingSelected(),
                    pt = '​' + (rt ? c.value : '');
                  (c.value = '⇚'),
                    (c.value = pt),
                    (i.prevInput = rt ? '' : '​'),
                    (c.selectionStart = 1),
                    (c.selectionEnd = pt.length),
                    (s.selForContextMenu = a.doc.sel);
                }
              }
              function H() {
                if (
                  i.contextMenuPending == H &&
                  ((i.contextMenuPending = !1),
                  (i.wrapper.style.cssText = _),
                  (c.style.cssText = w),
                  d &&
                    g < 9 &&
                    s.scrollbars.setScrollTop((s.scroller.scrollTop = m)),
                  c.selectionStart != null)
                ) {
                  (!d || (d && g < 9)) && B();
                  var rt = 0,
                    pt = function () {
                      s.selForContextMenu == a.doc.sel &&
                      c.selectionStart == 0 &&
                      c.selectionEnd > 0 &&
                      i.prevInput == '​'
                        ? Ie(a, lp)(a)
                        : rt++ < 10
                        ? (s.detectingSelectAll = setTimeout(pt, 500))
                        : ((s.selForContextMenu = null), s.input.reset());
                    };
                  s.detectingSelectAll = setTimeout(pt, 200);
                }
              }
              if ((d && g >= 9 && B(), ft)) {
                xr(e);
                var Z = function () {
                  Ge(window, 'mouseup', Z), setTimeout(H, 20);
                };
                wt(window, 'mouseup', Z);
              } else setTimeout(H, 50);
            }),
            (Ee.prototype.readOnlyChanged = function (e) {
              e || this.reset(),
                (this.textarea.disabled = e == 'nocursor'),
                (this.textarea.readOnly = !!e);
            }),
            (Ee.prototype.setUneditable = function () {}),
            (Ee.prototype.needsContentAttribute = !1);
          function Sx(e, i) {
            if (
              ((i = i ? tt(i) : {}),
              (i.value = e.value),
              !i.tabindex && e.tabIndex && (i.tabindex = e.tabIndex),
              !i.placeholder &&
                e.placeholder &&
                (i.placeholder = e.placeholder),
              i.autofocus == null)
            ) {
              var a = mt(e.ownerDocument);
              i.autofocus =
                a == e ||
                (e.getAttribute('autofocus') != null && a == document.body);
            }
            function s() {
              e.value = y.getValue();
            }
            var c;
            if (
              e.form &&
              (wt(e.form, 'submit', s), !i.leaveSubmitMethodAlone)
            ) {
              var p = e.form;
              c = p.submit;
              try {
                var m = (p.submit = function () {
                  s(), (p.submit = c), p.submit(), (p.submit = m);
                });
              } catch {}
            }
            (i.finishInit = function (w) {
              (w.save = s),
                (w.getTextArea = function () {
                  return e;
                }),
                (w.toTextArea = function () {
                  (w.toTextArea = isNaN),
                    s(),
                    e.parentNode.removeChild(w.getWrapperElement()),
                    (e.style.display = ''),
                    e.form &&
                      (Ge(e.form, 'submit', s),
                      !i.leaveSubmitMethodAlone &&
                        typeof e.form.submit == 'function' &&
                        (e.form.submit = c));
                });
            }),
              (e.style.display = 'none');
            var y = be(function (w) {
              return e.parentNode.insertBefore(w, e.nextSibling);
            }, i);
            return y;
          }
          function kx(e) {
            (e.off = Ge),
              (e.on = wt),
              (e.wheelEventPixels = Nw),
              (e.Doc = ln),
              (e.splitLines = ps),
              (e.countColumn = X),
              (e.findColumn = nt),
              (e.isWordChar = Ot),
              (e.Pass = At),
              (e.signal = me),
              (e.Line = po),
              (e.changeEnd = ri),
              (e.scrollbarModel = Fd),
              (e.Pos = F),
              (e.cmpPos = Y),
              (e.modes = Wn),
              (e.mimeModes = Yr),
              (e.resolveMode = bn),
              (e.getMode = _r),
              (e.modeExtensions = Zr),
              (e.extendMode = Ra),
              (e.copyState = Sr),
              (e.startState = gs),
              (e.innerMode = Jr),
              (e.commands = Fs),
              (e.keyMap = Ar),
              (e.keyName = kp),
              (e.isModifierKey = _p),
              (e.lookupKey = Eo),
              (e.normalizeKeyMap = Qw),
              (e.StringStream = Ce),
              (e.SharedTextMarker = Ds),
              (e.TextMarker = oi),
              (e.LineWidget = $s),
              (e.e_preventDefault = Ve),
              (e.e_stopPropagation = Li),
              (e.e_stop = xr),
              (e.addClass = Ct),
              (e.contains = et),
              (e.rmClass = dt),
              (e.keyNames = si);
          }
          gx(be), bx(be);
          var Cx = 'iter insert remove copy getEditor constructor'.split(' ');
          for (var hl in ln.prototype)
            ln.prototype.hasOwnProperty(hl) &&
              Tt(Cx, hl) < 0 &&
              (be.prototype[hl] = (function (e) {
                return function () {
                  return e.apply(this.doc, arguments);
                };
              })(ln.prototype[hl]));
          return (
            Qe(ln),
            (be.inputStyles = { textarea: Ee, contenteditable: fe }),
            (be.defineMode = function (e) {
              !be.defaults.mode && e != 'null' && (be.defaults.mode = e),
                Da.apply(this, arguments);
            }),
            (be.defineMIME = fo),
            be.defineMode('null', function () {
              return {
                token: function (e) {
                  return e.skipToEnd();
                },
              };
            }),
            be.defineMIME('text/plain', 'null'),
            (be.defineExtension = function (e, i) {
              be.prototype[e] = i;
            }),
            (be.defineDocExtension = function (e, i) {
              ln.prototype[e] = i;
            }),
            (be.fromTextArea = Sx),
            kx(be),
            (be.version = '5.65.13'),
            be
          );
        });
      })(Yu)),
    Yu.exports
  );
}
var Xat = cs();
const Yat = j0(Xat);
var Mv = { exports: {} },
  Nv;
function Ry() {
  return (
    Nv ||
      ((Nv = 1),
      (function (t, n) {
        (function (r) {
          r(cs());
        })(function (r) {
          r.defineMode('javascript', function (o, l) {
            var u = o.indentUnit,
              f = l.statementIndent,
              h = l.jsonld,
              d = l.json || h,
              g = l.trackScope !== !1,
              v = l.typescript,
              b = l.wordCharacters || /[\w$\xa1-\uffff]/,
              x = (function () {
                function C($e) {
                  return { type: $e, style: 'keyword' };
                }
                var R = C('keyword a'),
                  F = C('keyword b'),
                  Y = C('keyword c'),
                  qt = C('keyword d'),
                  Kt = C('operator'),
                  ie = { type: 'atom', style: 'atom' };
                return {
                  if: C('if'),
                  while: R,
                  with: R,
                  else: F,
                  do: F,
                  try: F,
                  finally: F,
                  return: qt,
                  break: qt,
                  continue: qt,
                  new: C('new'),
                  delete: Y,
                  void: Y,
                  throw: Y,
                  debugger: C('debugger'),
                  var: C('var'),
                  const: C('var'),
                  let: C('var'),
                  function: C('function'),
                  catch: C('catch'),
                  for: C('for'),
                  switch: C('switch'),
                  case: C('case'),
                  default: C('default'),
                  in: Kt,
                  typeof: Kt,
                  instanceof: Kt,
                  true: ie,
                  false: ie,
                  null: ie,
                  undefined: ie,
                  NaN: ie,
                  Infinity: ie,
                  this: C('this'),
                  class: C('class'),
                  super: C('atom'),
                  yield: Y,
                  export: C('export'),
                  import: C('import'),
                  extends: Y,
                  await: Y,
                };
              })(),
              S = /[+\-*&%=<>!?|~^@]/,
              A =
                /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
            function L(C) {
              for (var R = !1, F, Y = !1; (F = C.next()) != null; ) {
                if (!R) {
                  if (F == '/' && !Y) return;
                  F == '[' ? (Y = !0) : Y && F == ']' && (Y = !1);
                }
                R = !R && F == '\\';
              }
            }
            var M, T;
            function E(C, R, F) {
              return (M = C), (T = F), R;
            }
            function $(C, R) {
              var F = C.next();
              if (F == '"' || F == "'")
                return (R.tokenize = O(F)), R.tokenize(C, R);
              if (F == '.' && C.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
                return E('number', 'number');
              if (F == '.' && C.match('..')) return E('spread', 'meta');
              if (/[\[\]{}\(\),;\:\.]/.test(F)) return E(F);
              if (F == '=' && C.eat('>')) return E('=>', 'operator');
              if (F == '0' && C.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
                return E('number', 'number');
              if (/\d/.test(F))
                return (
                  C.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),
                  E('number', 'number')
                );
              if (F == '/')
                return C.eat('*')
                  ? ((R.tokenize = G), G(C, R))
                  : C.eat('/')
                  ? (C.skipToEnd(), E('comment', 'comment'))
                  : or(C, R, 1)
                  ? (L(C),
                    C.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                    E('regexp', 'string-2'))
                  : (C.eat('='), E('operator', 'operator', C.current()));
              if (F == '`') return (R.tokenize = K), K(C, R);
              if (F == '#' && C.peek() == '!')
                return C.skipToEnd(), E('meta', 'meta');
              if (F == '#' && C.eatWhile(b)) return E('variable', 'property');
              if (
                (F == '<' && C.match('!--')) ||
                (F == '-' &&
                  C.match('->') &&
                  !/\S/.test(C.string.slice(0, C.start)))
              )
                return C.skipToEnd(), E('comment', 'comment');
              if (S.test(F))
                return (
                  (F != '>' || !R.lexical || R.lexical.type != '>') &&
                    (C.eat('=')
                      ? (F == '!' || F == '=') && C.eat('=')
                      : /[<>*+\-|&?]/.test(F) &&
                        (C.eat(F), F == '>' && C.eat(F))),
                  F == '?' && C.eat('.')
                    ? E('.')
                    : E('operator', 'operator', C.current())
                );
              if (b.test(F)) {
                C.eatWhile(b);
                var Y = C.current();
                if (R.lastType != '.') {
                  if (x.propertyIsEnumerable(Y)) {
                    var qt = x[Y];
                    return E(qt.type, qt.style, Y);
                  }
                  if (
                    Y == 'async' &&
                    C.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)
                  )
                    return E('async', 'keyword', Y);
                }
                return E('variable', 'variable', Y);
              }
            }
            function O(C) {
              return function (R, F) {
                var Y = !1,
                  qt;
                if (h && R.peek() == '@' && R.match(A))
                  return (F.tokenize = $), E('jsonld-keyword', 'meta');
                for (; (qt = R.next()) != null && !(qt == C && !Y); )
                  Y = !Y && qt == '\\';
                return Y || (F.tokenize = $), E('string', 'string');
              };
            }
            function G(C, R) {
              for (var F = !1, Y; (Y = C.next()); ) {
                if (Y == '/' && F) {
                  R.tokenize = $;
                  break;
                }
                F = Y == '*';
              }
              return E('comment', 'comment');
            }
            function K(C, R) {
              for (var F = !1, Y; (Y = C.next()) != null; ) {
                if (!F && (Y == '`' || (Y == '$' && C.eat('{')))) {
                  R.tokenize = $;
                  break;
                }
                F = !F && Y == '\\';
              }
              return E('quasi', 'string-2', C.current());
            }
            var ct = '([{}])';
            function V(C, R) {
              R.fatArrowAt && (R.fatArrowAt = null);
              var F = C.string.indexOf('=>', C.start);
              if (!(F < 0)) {
                if (v) {
                  var Y = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                    C.string.slice(C.start, F),
                  );
                  Y && (F = Y.index);
                }
                for (var qt = 0, Kt = !1, ie = F - 1; ie >= 0; --ie) {
                  var $e = C.string.charAt(ie),
                    Mn = ct.indexOf($e);
                  if (Mn >= 0 && Mn < 3) {
                    if (!qt) {
                      ++ie;
                      break;
                    }
                    if (--qt == 0) {
                      $e == '(' && (Kt = !0);
                      break;
                    }
                  } else if (Mn >= 3 && Mn < 6) ++qt;
                  else if (b.test($e)) Kt = !0;
                  else if (/["'\/`]/.test($e))
                    for (; ; --ie) {
                      if (ie == 0) return;
                      var Ht = C.string.charAt(ie - 1);
                      if (Ht == $e && C.string.charAt(ie - 2) != '\\') {
                        ie--;
                        break;
                      }
                    }
                  else if (Kt && !qt) {
                    ++ie;
                    break;
                  }
                }
                Kt && !qt && (R.fatArrowAt = ie);
              }
            }
            var ut = {
              atom: !0,
              number: !0,
              variable: !0,
              string: !0,
              regexp: !0,
              this: !0,
              import: !0,
              'jsonld-keyword': !0,
            };
            function ft(C, R, F, Y, qt, Kt) {
              (this.indented = C),
                (this.column = R),
                (this.type = F),
                (this.prev = qt),
                (this.info = Kt),
                Y != null && (this.align = Y);
            }
            function kt(C, R) {
              if (!g) return !1;
              for (var F = C.localVars; F; F = F.next)
                if (F.name == R) return !0;
              for (var Y = C.context; Y; Y = Y.prev)
                for (var F = Y.vars; F; F = F.next) if (F.name == R) return !0;
            }
            function dt(C, R, F, Y, qt) {
              var Kt = C.cc;
              for (
                j.state = C,
                  j.stream = qt,
                  j.marked = null,
                  j.cc = Kt,
                  j.style = R,
                  C.lexical.hasOwnProperty('align') || (C.lexical.align = !0);
                ;

              ) {
                var ie = Kt.length ? Kt.pop() : d ? At : Tt;
                if (ie(F, Y)) {
                  for (; Kt.length && Kt[Kt.length - 1].lex; ) Kt.pop()();
                  return j.marked
                    ? j.marked
                    : F == 'variable' && kt(C, Y)
                    ? 'variable-2'
                    : R;
                }
              }
            }
            var j = { state: null, column: null, marked: null, cc: null };
            function z() {
              for (var C = arguments.length - 1; C >= 0; C--)
                j.cc.push(arguments[C]);
            }
            function k() {
              return z.apply(null, arguments), !0;
            }
            function q(C, R) {
              for (var F = R; F; F = F.next) if (F.name == C) return !0;
              return !1;
            }
            function W(C) {
              var R = j.state;
              if (((j.marked = 'def'), !!g)) {
                if (R.context) {
                  if (R.lexical.info == 'var' && R.context && R.context.block) {
                    var F = et(C, R.context);
                    if (F != null) {
                      R.context = F;
                      return;
                    }
                  } else if (!q(C, R.localVars)) {
                    R.localVars = new Rt(C, R.localVars);
                    return;
                  }
                }
                l.globalVars &&
                  !q(C, R.globalVars) &&
                  (R.globalVars = new Rt(C, R.globalVars));
              }
            }
            function et(C, R) {
              if (R)
                if (R.block) {
                  var F = et(C, R.prev);
                  return F ? (F == R.prev ? R : new Ct(F, R.vars, !0)) : null;
                } else
                  return q(C, R.vars)
                    ? R
                    : new Ct(R.prev, new Rt(C, R.vars), !1);
              else return null;
            }
            function mt(C) {
              return (
                C == 'public' ||
                C == 'private' ||
                C == 'protected' ||
                C == 'abstract' ||
                C == 'readonly'
              );
            }
            function Ct(C, R, F) {
              (this.prev = C), (this.vars = R), (this.block = F);
            }
            function Rt(C, R) {
              (this.name = C), (this.next = R);
            }
            var Ft = new Rt('this', new Rt('arguments', null));
            function jt() {
              (j.state.context = new Ct(
                j.state.context,
                j.state.localVars,
                !1,
              )),
                (j.state.localVars = Ft);
            }
            function Zt() {
              (j.state.context = new Ct(
                j.state.context,
                j.state.localVars,
                !0,
              )),
                (j.state.localVars = null);
            }
            jt.lex = Zt.lex = !0;
            function Q() {
              (j.state.localVars = j.state.context.vars),
                (j.state.context = j.state.context.prev);
            }
            Q.lex = !0;
            function tt(C, R) {
              var F = function () {
                var Y = j.state,
                  qt = Y.indented;
                if (Y.lexical.type == 'stat') qt = Y.lexical.indented;
                else
                  for (
                    var Kt = Y.lexical;
                    Kt && Kt.type == ')' && Kt.align;
                    Kt = Kt.prev
                  )
                    qt = Kt.indented;
                Y.lexical = new ft(
                  qt,
                  j.stream.column(),
                  C,
                  null,
                  Y.lexical,
                  R,
                );
              };
              return (F.lex = !0), F;
            }
            function X() {
              var C = j.state;
              C.lexical.prev &&
                (C.lexical.type == ')' && (C.indented = C.lexical.indented),
                (C.lexical = C.lexical.prev));
            }
            X.lex = !0;
            function ot(C) {
              function R(F) {
                return F == C
                  ? k()
                  : C == ';' || F == '}' || F == ')' || F == ']'
                  ? z()
                  : k(R);
              }
              return R;
            }
            function Tt(C, R) {
              return C == 'var'
                ? k(tt('vardef', R), xr, ot(';'), X)
                : C == 'keyword a'
                ? k(tt('form'), I, Tt, X)
                : C == 'keyword b'
                ? k(tt('form'), Tt, X)
                : C == 'keyword d'
                ? j.stream.match(/^\s*$/, !1)
                  ? k()
                  : k(tt('stat'), nt, ot(';'), X)
                : C == 'debugger'
                ? k(ot(';'))
                : C == '{'
                ? k(tt('}'), Zt, An, X, Q)
                : C == ';'
                ? k()
                : C == 'if'
                ? (j.state.lexical.info == 'else' &&
                    j.state.cc[j.state.cc.length - 1] == X &&
                    j.state.cc.pop()(),
                  k(tt('form'), I, Tt, X, uo))
                : C == 'function'
                ? k(rr)
                : C == 'for'
                ? k(tt('form'), Zt, Oa, Tt, Q, X)
                : C == 'class' || (v && R == 'interface')
                ? ((j.marked = 'keyword'),
                  k(tt('form', C == 'class' ? C : R), Da, X))
                : C == 'variable'
                ? v && R == 'declare'
                  ? ((j.marked = 'keyword'), k(Tt))
                  : v &&
                    (R == 'module' || R == 'enum' || R == 'type') &&
                    j.stream.match(/^\s*\w/, !1)
                  ? ((j.marked = 'keyword'),
                    R == 'enum'
                      ? k(ho)
                      : R == 'type'
                      ? k($a, ot('operator'), wt, ot(';'))
                      : k(tt('form'), sn, ot('{'), tt('}'), An, X, X))
                  : v && R == 'namespace'
                  ? ((j.marked = 'keyword'), k(tt('form'), At, Tt, X))
                  : v && R == 'abstract'
                  ? ((j.marked = 'keyword'), k(Tt))
                  : k(tt('stat'), zt)
                : C == 'switch'
                ? k(tt('form'), I, ot('{'), tt('}', 'switch'), Zt, An, X, X, Q)
                : C == 'case'
                ? k(At, ot(':'))
                : C == 'default'
                ? k(ot(':'))
                : C == 'catch'
                ? k(tt('form'), jt, pe, Tt, X, Q)
                : C == 'export'
                ? k(tt('stat'), Zr, X)
                : C == 'import'
                ? k(tt('stat'), Sr, X)
                : C == 'async'
                ? k(Tt)
                : R == '@'
                ? k(At, Tt)
                : z(tt('stat'), At, ot(';'), X);
            }
            function pe(C) {
              if (C == '(') return k(Wn, ot(')'));
            }
            function At(C, R) {
              return J(C, R, !1);
            }
            function P(C, R) {
              return J(C, R, !0);
            }
            function I(C) {
              return C != '(' ? z() : k(tt(')'), nt, ot(')'), X);
            }
            function J(C, R, F) {
              if (j.state.fatArrowAt == j.stream.start) {
                var Y = F ? ht : _t;
                if (C == '(')
                  return k(jt, tt(')'), Qt(Wn, ')'), X, ot('=>'), Y, Q);
                if (C == 'variable') return z(jt, sn, ot('=>'), Y, Q);
              }
              var qt = F ? gt : it;
              return ut.hasOwnProperty(C)
                ? k(qt)
                : C == 'function'
                ? k(rr, qt)
                : C == 'class' || (v && R == 'interface')
                ? ((j.marked = 'keyword'), k(tt('form'), Yr, X))
                : C == 'keyword c' || C == 'async'
                ? k(F ? P : At)
                : C == '('
                ? k(tt(')'), nt, ot(')'), X, qt)
                : C == 'operator' || C == 'spread'
                ? k(F ? P : At)
                : C == '['
                ? k(tt(']'), kr, X, qt)
                : C == '{'
                ? yn(re, '}', null, qt)
                : C == 'quasi'
                ? z(st, qt)
                : C == 'new'
                ? k($t(F))
                : k();
            }
            function nt(C) {
              return C.match(/[;\}\)\],]/) ? z() : z(At);
            }
            function it(C, R) {
              return C == ',' ? k(nt) : gt(C, R, !1);
            }
            function gt(C, R, F) {
              var Y = F == !1 ? it : gt,
                qt = F == !1 ? At : P;
              if (C == '=>') return k(jt, F ? ht : _t, Q);
              if (C == 'operator')
                return /\+\+|--/.test(R) || (v && R == '!')
                  ? k(Y)
                  : v &&
                    R == '<' &&
                    j.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
                  ? k(tt('>'), Qt(wt, '>'), X, Y)
                  : R == '?'
                  ? k(At, ot(':'), qt)
                  : k(qt);
              if (C == 'quasi') return z(st, Y);
              if (C != ';') {
                if (C == '(') return yn(P, ')', 'call', Y);
                if (C == '.') return k(Gt, Y);
                if (C == '[') return k(tt(']'), nt, ot(']'), X, Y);
                if (v && R == 'as') return (j.marked = 'keyword'), k(wt, Y);
                if (C == 'regexp')
                  return (
                    (j.state.lastType = j.marked = 'operator'),
                    j.stream.backUp(j.stream.pos - j.stream.start - 1),
                    k(qt)
                  );
              }
            }
            function st(C, R) {
              return C != 'quasi'
                ? z()
                : R.slice(R.length - 2) != '${'
                ? k(st)
                : k(nt, vt);
            }
            function vt(C) {
              if (C == '}')
                return (j.marked = 'string-2'), (j.state.tokenize = K), k(st);
            }
            function _t(C) {
              return V(j.stream, j.state), z(C == '{' ? Tt : At);
            }
            function ht(C) {
              return V(j.stream, j.state), z(C == '{' ? Tt : P);
            }
            function $t(C) {
              return function (R) {
                return R == '.'
                  ? k(C ? Ot : Nt)
                  : R == 'variable' && v
                  ? k(Ve, C ? gt : it)
                  : z(C ? P : At);
              };
            }
            function Nt(C, R) {
              if (R == 'target') return (j.marked = 'keyword'), k(it);
            }
            function Ot(C, R) {
              if (R == 'target') return (j.marked = 'keyword'), k(gt);
            }
            function zt(C) {
              return C == ':' ? k(X, Tt) : z(it, ot(';'), X);
            }
            function Gt(C) {
              if (C == 'variable') return (j.marked = 'property'), k();
            }
            function re(C, R) {
              if (C == 'async') return (j.marked = 'property'), k(re);
              if (C == 'variable' || j.style == 'keyword') {
                if (((j.marked = 'property'), R == 'get' || R == 'set'))
                  return k(te);
                var F;
                return (
                  v &&
                    j.state.fatArrowAt == j.stream.start &&
                    (F = j.stream.match(/^\s*:\s*/, !1)) &&
                    (j.state.fatArrowAt = j.stream.pos + F[0].length),
                  k(ce)
                );
              } else {
                if (C == 'number' || C == 'string')
                  return (
                    (j.marked = h ? 'property' : j.style + ' property'), k(ce)
                  );
                if (C == 'jsonld-keyword') return k(ce);
                if (v && mt(R)) return (j.marked = 'keyword'), k(re);
                if (C == '[') return k(At, We, ot(']'), ce);
                if (C == 'spread') return k(P, ce);
                if (R == '*') return (j.marked = 'keyword'), k(re);
                if (C == ':') return z(ce);
              }
            }
            function te(C) {
              return C != 'variable' ? z(ce) : ((j.marked = 'property'), k(rr));
            }
            function ce(C) {
              if (C == ':') return k(P);
              if (C == '(') return z(rr);
            }
            function Qt(C, R, F) {
              function Y(qt, Kt) {
                if (F ? F.indexOf(qt) > -1 : qt == ',') {
                  var ie = j.state.lexical;
                  return (
                    ie.info == 'call' && (ie.pos = (ie.pos || 0) + 1),
                    k(function ($e, Mn) {
                      return $e == R || Mn == R ? z() : z(C);
                    }, Y)
                  );
                }
                return qt == R || Kt == R
                  ? k()
                  : F && F.indexOf(';') > -1
                  ? z(C)
                  : k(ot(R));
              }
              return function (qt, Kt) {
                return qt == R || Kt == R ? k() : z(C, Y);
              };
            }
            function yn(C, R, F) {
              for (var Y = 3; Y < arguments.length; Y++)
                j.cc.push(arguments[Y]);
              return k(tt(R, F), Qt(C, R), X);
            }
            function An(C) {
              return C == '}' ? k() : z(Tt, An);
            }
            function We(C, R) {
              if (v) {
                if (C == ':') return k(wt);
                if (R == '?') return k(We);
              }
            }
            function co(C, R) {
              if (v && (C == ':' || R == 'in')) return k(wt);
            }
            function ye(C) {
              if (v && C == ':')
                return j.stream.match(/^\s*\w+\s+is\b/, !1)
                  ? k(At, on, wt)
                  : k(wt);
            }
            function on(C, R) {
              if (R == 'is') return (j.marked = 'keyword'), k();
            }
            function wt(C, R) {
              if (
                R == 'keyof' ||
                R == 'typeof' ||
                R == 'infer' ||
                R == 'readonly'
              )
                return (j.marked = 'keyword'), k(R == 'typeof' ? P : wt);
              if (C == 'variable' || R == 'void')
                return (j.marked = 'type'), k(Qe);
              if (R == '|' || R == '&') return k(wt);
              if (C == 'string' || C == 'number' || C == 'atom') return k(Qe);
              if (C == '[') return k(tt(']'), Qt(wt, ']', ','), X, Qe);
              if (C == '{') return k(tt('}'), Ge, X, Qe);
              if (C == '(') return k(Qt(Je, ')'), fs, Qe);
              if (C == '<') return k(Qt(wt, '>'), wt);
              if (C == 'quasi') return z(ke, Qe);
            }
            function fs(C) {
              if (C == '=>') return k(wt);
            }
            function Ge(C) {
              return C.match(/[\}\)\]]/)
                ? k()
                : C == ',' || C == ';'
                ? k(Ge)
                : z(me, Ge);
            }
            function me(C, R) {
              if (C == 'variable' || j.style == 'keyword')
                return (j.marked = 'property'), k(me);
              if (R == '?' || C == 'number' || C == 'string') return k(me);
              if (C == ':') return k(wt);
              if (C == '[') return k(ot('variable'), co, ot(']'), me);
              if (C == '(') return z(ir, me);
              if (!C.match(/[;\}\)\],]/)) return k();
            }
            function ke(C, R) {
              return C != 'quasi'
                ? z()
                : R.slice(R.length - 2) != '${'
                ? k(ke)
                : k(wt, Pa);
            }
            function Pa(C) {
              if (C == '}')
                return (j.marked = 'string-2'), (j.state.tokenize = K), k(ke);
            }
            function Je(C, R) {
              return (C == 'variable' && j.stream.match(/^\s*[?:]/, !1)) ||
                R == '?'
                ? k(Je)
                : C == ':'
                ? k(wt)
                : C == 'spread'
                ? k(Je)
                : z(wt);
            }
            function Qe(C, R) {
              if (R == '<') return k(tt('>'), Qt(wt, '>'), X, Qe);
              if (R == '|' || C == '.' || R == '&') return k(wt);
              if (C == '[') return k(wt, ot(']'), Qe);
              if (R == 'extends' || R == 'implements')
                return (j.marked = 'keyword'), k(wt);
              if (R == '?') return k(wt, ot(':'), wt);
            }
            function Ve(C, R) {
              if (R == '<') return k(tt('>'), Qt(wt, '>'), X, Qe);
            }
            function Li() {
              return z(wt, hs);
            }
            function hs(C, R) {
              if (R == '=') return k(wt);
            }
            function xr(C, R) {
              return R == 'enum'
                ? ((j.marked = 'keyword'), k(ho))
                : z(sn, We, zn, qc);
            }
            function sn(C, R) {
              if (v && mt(R)) return (j.marked = 'keyword'), k(sn);
              if (C == 'variable') return W(R), k();
              if (C == 'spread') return k(sn);
              if (C == '[') return yn(Ic, ']');
              if (C == '{') return yn(ds, '}');
            }
            function ds(C, R) {
              return C == 'variable' && !j.stream.match(/^\s*:/, !1)
                ? (W(R), k(zn))
                : (C == 'variable' && (j.marked = 'property'),
                  C == 'spread'
                    ? k(sn)
                    : C == '}'
                    ? z()
                    : C == '['
                    ? k(At, ot(']'), ot(':'), ds)
                    : k(ot(':'), sn, zn));
            }
            function Ic() {
              return z(sn, zn);
            }
            function zn(C, R) {
              if (R == '=') return k(P);
            }
            function qc(C) {
              if (C == ',') return k(xr);
            }
            function uo(C, R) {
              if (C == 'keyword b' && R == 'else')
                return k(tt('form', 'else'), Tt, X);
            }
            function Oa(C, R) {
              if (R == 'await') return k(Oa);
              if (C == '(') return k(tt(')'), ps, X);
            }
            function ps(C) {
              return C == 'var' ? k(xr, Xr) : C == 'variable' ? k(Xr) : z(Xr);
            }
            function Xr(C, R) {
              return C == ')'
                ? k()
                : C == ';'
                ? k(Xr)
                : R == 'in' || R == 'of'
                ? ((j.marked = 'keyword'), k(At, Xr))
                : z(At, Xr);
            }
            function rr(C, R) {
              if (R == '*') return (j.marked = 'keyword'), k(rr);
              if (C == 'variable') return W(R), k(rr);
              if (C == '(') return k(jt, tt(')'), Qt(Wn, ')'), X, ye, Tt, Q);
              if (v && R == '<') return k(tt('>'), Qt(Li, '>'), X, rr);
            }
            function ir(C, R) {
              if (R == '*') return (j.marked = 'keyword'), k(ir);
              if (C == 'variable') return W(R), k(ir);
              if (C == '(') return k(jt, tt(')'), Qt(Wn, ')'), X, ye, Q);
              if (v && R == '<') return k(tt('>'), Qt(Li, '>'), X, ir);
            }
            function $a(C, R) {
              if (C == 'keyword' || C == 'variable')
                return (j.marked = 'type'), k($a);
              if (R == '<') return k(tt('>'), Qt(Li, '>'), X);
            }
            function Wn(C, R) {
              return (
                R == '@' && k(At, Wn),
                C == 'spread'
                  ? k(Wn)
                  : v && mt(R)
                  ? ((j.marked = 'keyword'), k(Wn))
                  : v && C == 'this'
                  ? k(We, zn)
                  : z(sn, We, zn)
              );
            }
            function Yr(C, R) {
              return C == 'variable' ? Da(C, R) : fo(C, R);
            }
            function Da(C, R) {
              if (C == 'variable') return W(R), k(fo);
            }
            function fo(C, R) {
              if (R == '<') return k(tt('>'), Qt(Li, '>'), X, fo);
              if (R == 'extends' || R == 'implements' || (v && C == ','))
                return (
                  R == 'implements' && (j.marked = 'keyword'),
                  k(v ? wt : At, fo)
                );
              if (C == '{') return k(tt('}'), bn, X);
            }
            function bn(C, R) {
              if (
                C == 'async' ||
                (C == 'variable' &&
                  (R == 'static' || R == 'get' || R == 'set' || (v && mt(R))) &&
                  j.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
              )
                return (j.marked = 'keyword'), k(bn);
              if (C == 'variable' || j.style == 'keyword')
                return (j.marked = 'property'), k(_r, bn);
              if (C == 'number' || C == 'string') return k(_r, bn);
              if (C == '[') return k(At, We, ot(']'), _r, bn);
              if (R == '*') return (j.marked = 'keyword'), k(bn);
              if (v && C == '(') return z(ir, bn);
              if (C == ';' || C == ',') return k(bn);
              if (C == '}') return k();
              if (R == '@') return k(At, bn);
            }
            function _r(C, R) {
              if (R == '!' || R == '?') return k(_r);
              if (C == ':') return k(wt, zn);
              if (R == '=') return k(P);
              var F = j.state.lexical.prev,
                Y = F && F.info == 'interface';
              return z(Y ? ir : rr);
            }
            function Zr(C, R) {
              return R == '*'
                ? ((j.marked = 'keyword'), k(Mt, ot(';')))
                : R == 'default'
                ? ((j.marked = 'keyword'), k(At, ot(';')))
                : C == '{'
                ? k(Qt(Ra, '}'), Mt, ot(';'))
                : z(Tt);
            }
            function Ra(C, R) {
              if (R == 'as') return (j.marked = 'keyword'), k(ot('variable'));
              if (C == 'variable') return z(P, Ra);
            }
            function Sr(C) {
              return C == 'string'
                ? k()
                : C == '('
                ? z(At)
                : C == '.'
                ? z(it)
                : z(Jr, gs, Mt);
            }
            function Jr(C, R) {
              return C == '{'
                ? yn(Jr, '}')
                : (C == 'variable' && W(R),
                  R == '*' && (j.marked = 'keyword'),
                  k(Ce));
            }
            function gs(C) {
              if (C == ',') return k(Jr, gs);
            }
            function Ce(C, R) {
              if (R == 'as') return (j.marked = 'keyword'), k(Jr);
            }
            function Mt(C, R) {
              if (R == 'from') return (j.marked = 'keyword'), k(At);
            }
            function kr(C) {
              return C == ']' ? k() : z(Qt(P, ']'));
            }
            function ho() {
              return z(tt('form'), sn, ot('{'), tt('}'), Qt(Fn, '}'), X, X);
            }
            function Fn() {
              return z(sn, zn);
            }
            function ae(C, R) {
              return (
                C.lastType == 'operator' ||
                C.lastType == ',' ||
                S.test(R.charAt(0)) ||
                /[,.]/.test(R.charAt(0))
              );
            }
            function or(C, R, F) {
              return (
                (R.tokenize == $ &&
                  /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                    R.lastType,
                  )) ||
                (R.lastType == 'quasi' &&
                  /\{\s*$/.test(C.string.slice(0, C.pos - (F || 0))))
              );
            }
            return {
              startState: function (C) {
                var R = {
                  tokenize: $,
                  lastType: 'sof',
                  cc: [],
                  lexical: new ft((C || 0) - u, 0, 'block', !1),
                  localVars: l.localVars,
                  context: l.localVars && new Ct(null, null, !1),
                  indented: C || 0,
                };
                return (
                  l.globalVars &&
                    typeof l.globalVars == 'object' &&
                    (R.globalVars = l.globalVars),
                  R
                );
              },
              token: function (C, R) {
                if (
                  (C.sol() &&
                    (R.lexical.hasOwnProperty('align') ||
                      (R.lexical.align = !1),
                    (R.indented = C.indentation()),
                    V(C, R)),
                  R.tokenize != G && C.eatSpace())
                )
                  return null;
                var F = R.tokenize(C, R);
                return M == 'comment'
                  ? F
                  : ((R.lastType =
                      M == 'operator' && (T == '++' || T == '--')
                        ? 'incdec'
                        : M),
                    dt(R, F, M, T, C));
              },
              indent: function (C, R) {
                if (C.tokenize == G || C.tokenize == K) return r.Pass;
                if (C.tokenize != $) return 0;
                var F = R && R.charAt(0),
                  Y = C.lexical,
                  qt;
                if (!/^\s*else\b/.test(R))
                  for (var Kt = C.cc.length - 1; Kt >= 0; --Kt) {
                    var ie = C.cc[Kt];
                    if (ie == X) Y = Y.prev;
                    else if (ie != uo && ie != Q) break;
                  }
                for (
                  ;
                  (Y.type == 'stat' || Y.type == 'form') &&
                  (F == '}' ||
                    ((qt = C.cc[C.cc.length - 1]) &&
                      (qt == it || qt == gt) &&
                      !/^[,\.=+\-*:?[\(]/.test(R)));

                )
                  Y = Y.prev;
                f && Y.type == ')' && Y.prev.type == 'stat' && (Y = Y.prev);
                var $e = Y.type,
                  Mn = F == $e;
                return $e == 'vardef'
                  ? Y.indented +
                      (C.lastType == 'operator' || C.lastType == ','
                        ? Y.info.length + 1
                        : 0)
                  : $e == 'form' && F == '{'
                  ? Y.indented
                  : $e == 'form'
                  ? Y.indented + u
                  : $e == 'stat'
                  ? Y.indented + (ae(C, R) ? f || u : 0)
                  : Y.info == 'switch' && !Mn && l.doubleIndentSwitch != !1
                  ? Y.indented + (/^(?:case|default)\b/.test(R) ? u : 2 * u)
                  : Y.align
                  ? Y.column + (Mn ? 0 : 1)
                  : Y.indented + (Mn ? 0 : u);
              },
              electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
              blockCommentStart: d ? null : '/*',
              blockCommentEnd: d ? null : '*/',
              blockCommentContinue: d ? null : ' * ',
              lineComment: d ? null : '//',
              fold: 'brace',
              closeBrackets: '()[]{}\'\'""``',
              helperType: d ? 'json' : 'javascript',
              jsonldMode: h,
              jsonMode: d,
              expressionAllowed: or,
              skipExpression: function (C) {
                dt(C, 'atom', 'atom', 'true', new r.StringStream('', 2, null));
              },
            };
          }),
            r.registerHelper('wordChars', 'javascript', /[\w$]/),
            r.defineMIME('text/javascript', 'javascript'),
            r.defineMIME('text/ecmascript', 'javascript'),
            r.defineMIME('application/javascript', 'javascript'),
            r.defineMIME('application/x-javascript', 'javascript'),
            r.defineMIME('application/ecmascript', 'javascript'),
            r.defineMIME('application/json', { name: 'javascript', json: !0 }),
            r.defineMIME('application/x-json', {
              name: 'javascript',
              json: !0,
            }),
            r.defineMIME('application/manifest+json', {
              name: 'javascript',
              json: !0,
            }),
            r.defineMIME('application/ld+json', {
              name: 'javascript',
              jsonld: !0,
            }),
            r.defineMIME('text/typescript', {
              name: 'javascript',
              typescript: !0,
            }),
            r.defineMIME('application/typescript', {
              name: 'javascript',
              typescript: !0,
            });
        });
      })()),
    Mv.exports
  );
}
Ry();
var Zat = { exports: {} };
(function (t, n) {
  (function (r) {
    r(cs());
  })(function (r) {
    var o = {
        autoSelfClosers: {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          command: !0,
          embed: !0,
          frame: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
          menuitem: !0,
        },
        implicitlyClosed: {
          dd: !0,
          li: !0,
          optgroup: !0,
          option: !0,
          p: !0,
          rp: !0,
          rt: !0,
          tbody: !0,
          td: !0,
          tfoot: !0,
          th: !0,
          tr: !0,
        },
        contextGrabbers: {
          dd: { dd: !0, dt: !0 },
          dt: { dd: !0, dt: !0 },
          li: { li: !0 },
          option: { option: !0, optgroup: !0 },
          optgroup: { optgroup: !0 },
          p: {
            address: !0,
            article: !0,
            aside: !0,
            blockquote: !0,
            dir: !0,
            div: !0,
            dl: !0,
            fieldset: !0,
            footer: !0,
            form: !0,
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            header: !0,
            hgroup: !0,
            hr: !0,
            menu: !0,
            nav: !0,
            ol: !0,
            p: !0,
            pre: !0,
            section: !0,
            table: !0,
            ul: !0,
          },
          rp: { rp: !0, rt: !0 },
          rt: { rp: !0, rt: !0 },
          tbody: { tbody: !0, tfoot: !0 },
          td: { td: !0, th: !0 },
          tfoot: { tbody: !0 },
          th: { td: !0, th: !0 },
          thead: { tbody: !0, tfoot: !0 },
          tr: { tr: !0 },
        },
        doNotIndent: { pre: !0 },
        allowUnquoted: !0,
        allowMissing: !0,
        caseFold: !0,
      },
      l = {
        autoSelfClosers: {},
        implicitlyClosed: {},
        contextGrabbers: {},
        doNotIndent: {},
        allowUnquoted: !1,
        allowMissing: !1,
        allowMissingTagName: !1,
        caseFold: !1,
      };
    r.defineMode('xml', function (u, f) {
      var h = u.indentUnit,
        d = {},
        g = f.htmlMode ? o : l;
      for (var v in g) d[v] = g[v];
      for (var v in f) d[v] = f[v];
      var b, x;
      function S(k, q) {
        function W(Ct) {
          return (q.tokenize = Ct), Ct(k, q);
        }
        var et = k.next();
        if (et == '<')
          return k.eat('!')
            ? k.eat('[')
              ? k.match('CDATA[')
                ? W(M('atom', ']]>'))
                : null
              : k.match('--')
              ? W(M('comment', '-->'))
              : k.match('DOCTYPE', !0, !0)
              ? (k.eatWhile(/[\w\._\-]/), W(T(1)))
              : null
            : k.eat('?')
            ? (k.eatWhile(/[\w\._\-]/), (q.tokenize = M('meta', '?>')), 'meta')
            : ((b = k.eat('/') ? 'closeTag' : 'openTag'),
              (q.tokenize = A),
              'tag bracket');
        if (et == '&') {
          var mt;
          return (
            k.eat('#')
              ? k.eat('x')
                ? (mt = k.eatWhile(/[a-fA-F\d]/) && k.eat(';'))
                : (mt = k.eatWhile(/[\d]/) && k.eat(';'))
              : (mt = k.eatWhile(/[\w\.\-:]/) && k.eat(';')),
            mt ? 'atom' : 'error'
          );
        } else return k.eatWhile(/[^&<]/), null;
      }
      S.isInText = !0;
      function A(k, q) {
        var W = k.next();
        if (W == '>' || (W == '/' && k.eat('>')))
          return (
            (q.tokenize = S),
            (b = W == '>' ? 'endTag' : 'selfcloseTag'),
            'tag bracket'
          );
        if (W == '=') return (b = 'equals'), null;
        if (W == '<') {
          (q.tokenize = S), (q.state = K), (q.tagName = q.tagStart = null);
          var et = q.tokenize(k, q);
          return et ? et + ' tag error' : 'tag error';
        } else return /[\'\"]/.test(W) ? ((q.tokenize = L(W)), (q.stringStartCol = k.column()), q.tokenize(k, q)) : (k.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), 'word');
      }
      function L(k) {
        var q = function (W, et) {
          for (; !W.eol(); )
            if (W.next() == k) {
              et.tokenize = A;
              break;
            }
          return 'string';
        };
        return (q.isInAttribute = !0), q;
      }
      function M(k, q) {
        return function (W, et) {
          for (; !W.eol(); ) {
            if (W.match(q)) {
              et.tokenize = S;
              break;
            }
            W.next();
          }
          return k;
        };
      }
      function T(k) {
        return function (q, W) {
          for (var et; (et = q.next()) != null; ) {
            if (et == '<') return (W.tokenize = T(k + 1)), W.tokenize(q, W);
            if (et == '>')
              if (k == 1) {
                W.tokenize = S;
                break;
              } else return (W.tokenize = T(k - 1)), W.tokenize(q, W);
          }
          return 'meta';
        };
      }
      function E(k) {
        return k && k.toLowerCase();
      }
      function $(k, q, W) {
        (this.prev = k.context),
          (this.tagName = q || ''),
          (this.indent = k.indented),
          (this.startOfLine = W),
          (d.doNotIndent.hasOwnProperty(q) ||
            (k.context && k.context.noIndent)) &&
            (this.noIndent = !0);
      }
      function O(k) {
        k.context && (k.context = k.context.prev);
      }
      function G(k, q) {
        for (var W; ; ) {
          if (
            !k.context ||
            ((W = k.context.tagName),
            !d.contextGrabbers.hasOwnProperty(E(W)) ||
              !d.contextGrabbers[E(W)].hasOwnProperty(E(q)))
          )
            return;
          O(k);
        }
      }
      function K(k, q, W) {
        return k == 'openTag'
          ? ((W.tagStart = q.column()), ct)
          : k == 'closeTag'
          ? V
          : K;
      }
      function ct(k, q, W) {
        return k == 'word'
          ? ((W.tagName = q.current()), (x = 'tag'), kt)
          : d.allowMissingTagName && k == 'endTag'
          ? ((x = 'tag bracket'), kt(k, q, W))
          : ((x = 'error'), ct);
      }
      function V(k, q, W) {
        if (k == 'word') {
          var et = q.current();
          return (
            W.context &&
              W.context.tagName != et &&
              d.implicitlyClosed.hasOwnProperty(E(W.context.tagName)) &&
              O(W),
            (W.context && W.context.tagName == et) || d.matchClosing === !1
              ? ((x = 'tag'), ut)
              : ((x = 'tag error'), ft)
          );
        } else return d.allowMissingTagName && k == 'endTag' ? ((x = 'tag bracket'), ut(k, q, W)) : ((x = 'error'), ft);
      }
      function ut(k, q, W) {
        return k != 'endTag' ? ((x = 'error'), ut) : (O(W), K);
      }
      function ft(k, q, W) {
        return (x = 'error'), ut(k, q, W);
      }
      function kt(k, q, W) {
        if (k == 'word') return (x = 'attribute'), dt;
        if (k == 'endTag' || k == 'selfcloseTag') {
          var et = W.tagName,
            mt = W.tagStart;
          return (
            (W.tagName = W.tagStart = null),
            k == 'selfcloseTag' || d.autoSelfClosers.hasOwnProperty(E(et))
              ? G(W, et)
              : (G(W, et), (W.context = new $(W, et, mt == W.indented))),
            K
          );
        }
        return (x = 'error'), kt;
      }
      function dt(k, q, W) {
        return k == 'equals'
          ? j
          : (d.allowMissing || (x = 'error'), kt(k, q, W));
      }
      function j(k, q, W) {
        return k == 'string'
          ? z
          : k == 'word' && d.allowUnquoted
          ? ((x = 'string'), kt)
          : ((x = 'error'), kt(k, q, W));
      }
      function z(k, q, W) {
        return k == 'string' ? z : kt(k, q, W);
      }
      return {
        startState: function (k) {
          var q = {
            tokenize: S,
            state: K,
            indented: k || 0,
            tagName: null,
            tagStart: null,
            context: null,
          };
          return k != null && (q.baseIndent = k), q;
        },
        token: function (k, q) {
          if (
            (!q.tagName && k.sol() && (q.indented = k.indentation()),
            k.eatSpace())
          )
            return null;
          b = null;
          var W = q.tokenize(k, q);
          return (
            (W || b) &&
              W != 'comment' &&
              ((x = null),
              (q.state = q.state(b || W, k, q)),
              x && (W = x == 'error' ? W + ' error' : x)),
            W
          );
        },
        indent: function (k, q, W) {
          var et = k.context;
          if (k.tokenize.isInAttribute)
            return k.tagStart == k.indented
              ? k.stringStartCol + 1
              : k.indented + h;
          if (et && et.noIndent) return r.Pass;
          if (k.tokenize != A && k.tokenize != S)
            return W ? W.match(/^(\s*)/)[0].length : 0;
          if (k.tagName)
            return d.multilineTagIndentPastTag !== !1
              ? k.tagStart + k.tagName.length + 2
              : k.tagStart + h * (d.multilineTagIndentFactor || 1);
          if (d.alignCDATA && /<!\[CDATA\[/.test(q)) return 0;
          var mt = q && /^<(\/)?([\w_:\.-]*)/.exec(q);
          if (mt && mt[1])
            for (; et; )
              if (et.tagName == mt[2]) {
                et = et.prev;
                break;
              } else if (d.implicitlyClosed.hasOwnProperty(E(et.tagName)))
                et = et.prev;
              else break;
          else if (mt)
            for (; et; ) {
              var Ct = d.contextGrabbers[E(et.tagName)];
              if (Ct && Ct.hasOwnProperty(E(mt[2]))) et = et.prev;
              else break;
            }
          for (; et && et.prev && !et.startOfLine; ) et = et.prev;
          return et ? et.indent + h : k.baseIndent || 0;
        },
        electricInput: /<\/[\s\w:]+>$/,
        blockCommentStart: '<!--',
        blockCommentEnd: '-->',
        configuration: d.htmlMode ? 'html' : 'xml',
        helperType: d.htmlMode ? 'html' : 'xml',
        skipAttribute: function (k) {
          k.state == j && (k.state = kt);
        },
        xmlCurrentTag: function (k) {
          return k.tagName
            ? { name: k.tagName, close: k.type == 'closeTag' }
            : null;
        },
        xmlCurrentContext: function (k) {
          for (var q = [], W = k.context; W; W = W.prev) q.push(W.tagName);
          return q.reverse();
        },
      };
    }),
      r.defineMIME('text/xml', 'xml'),
      r.defineMIME('application/xml', 'xml'),
      r.mimeModes.hasOwnProperty('text/html') ||
        r.defineMIME('text/html', { name: 'xml', htmlMode: !0 });
  });
})();
var Jat = Zat.exports;
(function (t, n) {
  (function (r) {
    r(cs(), Jat, Ry());
  })(function (r) {
    function o(u, f, h, d) {
      (this.state = u), (this.mode = f), (this.depth = h), (this.prev = d);
    }
    function l(u) {
      return new o(
        r.copyState(u.mode, u.state),
        u.mode,
        u.depth,
        u.prev && l(u.prev),
      );
    }
    r.defineMode(
      'jsx',
      function (u, f) {
        var h = r.getMode(u, {
            name: 'xml',
            allowMissing: !0,
            multilineTagIndentPastTag: !1,
            allowMissingTagName: !0,
          }),
          d = r.getMode(u, (f && f.base) || 'javascript');
        function g(S) {
          var A = S.tagName;
          S.tagName = null;
          var L = h.indent(S, '', '');
          return (S.tagName = A), L;
        }
        function v(S, A) {
          return A.context.mode == h ? b(S, A, A.context) : x(S, A, A.context);
        }
        function b(S, A, L) {
          if (L.depth == 2)
            return (
              S.match(/^.*?\*\//) ? (L.depth = 1) : S.skipToEnd(), 'comment'
            );
          if (S.peek() == '{') {
            h.skipAttribute(L.state);
            var M = g(L.state),
              T = L.state.context;
            if (T && S.match(/^[^>]*>\s*$/, !1)) {
              for (; T.prev && !T.startOfLine; ) T = T.prev;
              T.startOfLine
                ? (M -= u.indentUnit)
                : L.prev.state.lexical && (M = L.prev.state.lexical.indented);
            } else L.depth == 1 && (M += u.indentUnit);
            return (
              (A.context = new o(r.startState(d, M), d, 0, A.context)), null
            );
          }
          if (L.depth == 1) {
            if (S.peek() == '<')
              return (
                h.skipAttribute(L.state),
                (A.context = new o(
                  r.startState(h, g(L.state)),
                  h,
                  0,
                  A.context,
                )),
                null
              );
            if (S.match('//')) return S.skipToEnd(), 'comment';
            if (S.match('/*')) return (L.depth = 2), v(S, A);
          }
          var E = h.token(S, L.state),
            $ = S.current(),
            O;
          return (
            /\btag\b/.test(E)
              ? />$/.test($)
                ? L.state.context
                  ? (L.depth = 0)
                  : (A.context = A.context.prev)
                : /^</.test($) && (L.depth = 1)
              : !E && (O = $.indexOf('{')) > -1 && S.backUp($.length - O),
            E
          );
        }
        function x(S, A, L) {
          if (S.peek() == '<' && d.expressionAllowed(S, L.state))
            return (
              (A.context = new o(
                r.startState(h, d.indent(L.state, '', '')),
                h,
                0,
                A.context,
              )),
              d.skipExpression(L.state),
              null
            );
          var M = d.token(S, L.state);
          if (!M && L.depth != null) {
            var T = S.current();
            T == '{'
              ? L.depth++
              : T == '}' && --L.depth == 0 && (A.context = A.context.prev);
          }
          return M;
        }
        return {
          startState: function () {
            return { context: new o(r.startState(d), d) };
          },
          copyState: function (S) {
            return { context: l(S.context) };
          },
          token: v,
          indent: function (S, A, L) {
            return S.context.mode.indent(S.context.state, A, L);
          },
          innerMode: function (S) {
            return S.context;
          },
        };
      },
      'xml',
      'javascript',
    ),
      r.defineMIME('text/jsx', 'jsx'),
      r.defineMIME('text/typescript-jsx', {
        name: 'jsx',
        base: { name: 'javascript', typescript: !0 },
      });
  });
})();
(function (t, n) {
  (function (r) {
    r(cs());
  })(function (r) {
    r.defineOption('placeholder', '', function (g, v, b) {
      var x = b && b != r.Init;
      if (v && !x)
        g.on('blur', f),
          g.on('change', h),
          g.on('swapDoc', h),
          r.on(
            g.getInputField(),
            'compositionupdate',
            (g.state.placeholderCompose = function () {
              u(g);
            }),
          ),
          h(g);
      else if (!v && x) {
        g.off('blur', f),
          g.off('change', h),
          g.off('swapDoc', h),
          r.off(
            g.getInputField(),
            'compositionupdate',
            g.state.placeholderCompose,
          ),
          o(g);
        var S = g.getWrapperElement();
        S.className = S.className.replace(' CodeMirror-empty', '');
      }
      v && !g.hasFocus() && f(g);
    });
    function o(g) {
      g.state.placeholder &&
        (g.state.placeholder.parentNode.removeChild(g.state.placeholder),
        (g.state.placeholder = null));
    }
    function l(g) {
      o(g);
      var v = (g.state.placeholder = document.createElement('pre'));
      (v.style.cssText = 'height: 0; overflow: visible'),
        (v.style.direction = g.getOption('direction')),
        (v.className = 'CodeMirror-placeholder CodeMirror-line-like');
      var b = g.getOption('placeholder');
      typeof b == 'string' && (b = document.createTextNode(b)),
        v.appendChild(b),
        g.display.lineSpace.insertBefore(v, g.display.lineSpace.firstChild);
    }
    function u(g) {
      setTimeout(function () {
        var v = !1;
        if (g.lineCount() == 1) {
          var b = g.getInputField();
          v =
            b.nodeName == 'TEXTAREA'
              ? !g.getLine(0).length
              : !/[^\u200b]/.test(
                  b.querySelector('.CodeMirror-line').textContent,
                );
        }
        v ? l(g) : o(g);
      }, 20);
    }
    function f(g) {
      d(g) && l(g);
    }
    function h(g) {
      var v = g.getWrapperElement(),
        b = d(g);
      (v.className =
        v.className.replace(' CodeMirror-empty', '') +
        (b ? ' CodeMirror-empty' : '')),
        b ? l(g) : o(g);
    }
    function d(g) {
      return g.lineCount() === 1 && g.getLine(0) === '';
    }
  });
})();
(function (t, n) {
  (function (r) {
    r(cs());
  })(function (r) {
    function o(f, h, d) {
      (this.orientation = h),
        (this.scroll = d),
        (this.screen = this.total = this.size = 1),
        (this.pos = 0),
        (this.node = document.createElement('div')),
        (this.node.className = f + '-' + h),
        (this.inner = this.node.appendChild(document.createElement('div')));
      var g = this;
      r.on(this.inner, 'mousedown', function (b) {
        if (b.which != 1) return;
        r.e_preventDefault(b);
        var x = g.orientation == 'horizontal' ? 'pageX' : 'pageY',
          S = b[x],
          A = g.pos;
        function L() {
          r.off(document, 'mousemove', M), r.off(document, 'mouseup', L);
        }
        function M(T) {
          if (T.which != 1) return L();
          g.moveTo(A + (T[x] - S) * (g.total / g.size));
        }
        r.on(document, 'mousemove', M), r.on(document, 'mouseup', L);
      }),
        r.on(this.node, 'click', function (b) {
          r.e_preventDefault(b);
          var x = g.inner.getBoundingClientRect(),
            S;
          g.orientation == 'horizontal'
            ? (S = b.clientX < x.left ? -1 : b.clientX > x.right ? 1 : 0)
            : (S = b.clientY < x.top ? -1 : b.clientY > x.bottom ? 1 : 0),
            g.moveTo(g.pos + S * g.screen);
        });
      function v(b) {
        var x =
            r.wheelEventPixels(b)[g.orientation == 'horizontal' ? 'x' : 'y'],
          S = g.pos;
        g.moveTo(g.pos + x), g.pos != S && r.e_preventDefault(b);
      }
      r.on(this.node, 'mousewheel', v), r.on(this.node, 'DOMMouseScroll', v);
    }
    (o.prototype.setPos = function (f, h) {
      return (
        f < 0 && (f = 0),
        f > this.total - this.screen && (f = this.total - this.screen),
        !h && f == this.pos
          ? !1
          : ((this.pos = f),
            (this.inner.style[
              this.orientation == 'horizontal' ? 'left' : 'top'
            ] = f * (this.size / this.total) + 'px'),
            !0)
      );
    }),
      (o.prototype.moveTo = function (f) {
        this.setPos(f) && this.scroll(f, this.orientation);
      });
    var l = 10;
    o.prototype.update = function (f, h, d) {
      var g = this.screen != h || this.total != f || this.size != d;
      g && ((this.screen = h), (this.total = f), (this.size = d));
      var v = this.screen * (this.size / this.total);
      v < l && ((this.size -= l - v), (v = l)),
        (this.inner.style[
          this.orientation == 'horizontal' ? 'width' : 'height'
        ] = v + 'px'),
        this.setPos(this.pos, g);
    };
    function u(f, h, d) {
      (this.addClass = f),
        (this.horiz = new o(f, 'horizontal', d)),
        h(this.horiz.node),
        (this.vert = new o(f, 'vertical', d)),
        h(this.vert.node),
        (this.width = null);
    }
    (u.prototype.update = function (f) {
      if (this.width == null) {
        var h = window.getComputedStyle
          ? window.getComputedStyle(this.horiz.node)
          : this.horiz.node.currentStyle;
        h && (this.width = parseInt(h.height));
      }
      var d = this.width || 0,
        g = f.scrollWidth > f.clientWidth + 1,
        v = f.scrollHeight > f.clientHeight + 1;
      return (
        (this.vert.node.style.display = v ? 'block' : 'none'),
        (this.horiz.node.style.display = g ? 'block' : 'none'),
        v &&
          (this.vert.update(
            f.scrollHeight,
            f.clientHeight,
            f.viewHeight - (g ? d : 0),
          ),
          (this.vert.node.style.bottom = g ? d + 'px' : '0')),
        g &&
          (this.horiz.update(
            f.scrollWidth,
            f.clientWidth,
            f.viewWidth - (v ? d : 0) - f.barLeft,
          ),
          (this.horiz.node.style.right = v ? d + 'px' : '0'),
          (this.horiz.node.style.left = f.barLeft + 'px')),
        { right: v ? d : 0, bottom: g ? d : 0 }
      );
    }),
      (u.prototype.setScrollTop = function (f) {
        this.vert.setPos(f);
      }),
      (u.prototype.setScrollLeft = function (f) {
        this.horiz.setPos(f);
      }),
      (u.prototype.clear = function () {
        var f = this.horiz.node.parentNode;
        f.removeChild(this.horiz.node), f.removeChild(this.vert.node);
      }),
      (r.scrollbarModel.simple = function (f, h) {
        return new u('CodeMirror-simplescroll', f, h);
      }),
      (r.scrollbarModel.overlay = function (f, h) {
        return new u('CodeMirror-overlayscroll', f, h);
      });
  });
})();
function Qat(t, n, r = {}) {
  const o = Yat.fromTextArea(t.value, {
    theme: 'vars',
    ...r,
    scrollbarStyle: 'simple',
  });
  let l = !1;
  return (
    o.on('change', () => {
      if (l) {
        l = !1;
        return;
      }
      n.value = o.getValue();
    }),
    Re(
      n,
      (u) => {
        if (u !== o.getValue()) {
          l = !0;
          const f = o.listSelections();
          o.replaceRange(u, o.posFromIndex(0), o.posFromIndex(1 / 0)),
            o.setSelections(f);
        }
      },
      { immediate: !0 },
    ),
    rh(o)
  );
}
const tlt = {
    relative: '',
    'font-mono': '',
    'text-sm': '',
    class: 'codemirror-scrolls',
  },
  zy = ne({
    __name: 'CodeMirror',
    props: { modelValue: null, mode: null, readOnly: { type: Boolean } },
    emits: ['update:modelValue', 'save'],
    setup(t, { expose: n, emit: r }) {
      const o = t,
        l = P_(),
        u = {
          js: 'javascript',
          mjs: 'javascript',
          cjs: 'javascript',
          ts: { name: 'javascript', typescript: !0 },
          mts: { name: 'javascript', typescript: !0 },
          cts: { name: 'javascript', typescript: !0 },
          jsx: { name: 'javascript', jsx: !0 },
          tsx: { name: 'javascript', typescript: !0, jsx: !0 },
        },
        f = Vt(),
        h = eE(o, 'modelValue', r, { passive: !0 }),
        d = as();
      return (
        n({ cm: d }),
        ls(async () => {
          (d.value = Qat(f, h, {
            ...o,
            ...l,
            mode: u[o.mode || ''] || o.mode,
            readOnly: o.readOnly ? !0 : void 0,
            extraKeys: {
              'Cmd-S': function (g) {
                r('save', g.getValue());
              },
              'Ctrl-S': function (g) {
                r('save', g.getValue());
              },
            },
          })),
            d.value.setSize('100%', '100%'),
            d.value.clearHistory(),
            setTimeout(() => d.value.refresh(), 100);
        }),
        (g, v) => (
          at(),
          Lt('div', tlt, [lt('textarea', { ref_key: 'el', ref: f }, null, 512)])
        )
      );
    },
  }),
  elt = ne({
    __name: 'ViewEditor',
    props: { file: null },
    emits: ['draft'],
    setup(t, { emit: n }) {
      const r = t,
        o = Vt(''),
        l = as(void 0),
        u = Vt(!1);
      Re(
        () => r.file,
        async () => {
          var E;
          if (!r.file || !((E = r.file) != null && E.filepath)) {
            (o.value = ''), (l.value = o.value), (u.value = !1);
            return;
          }
          (o.value = (await je.rpc.readFile(r.file.filepath)) || ''),
            (l.value = o.value),
            (u.value = !1);
        },
        { immediate: !0 },
      );
      const f = xt(() => {
          var E, $;
          return (
            (($ = (E = r.file) == null ? void 0 : E.filepath) == null
              ? void 0
              : $.split(/\./g).pop()) || 'js'
          );
        }),
        h = Vt(),
        d = xt(() => {
          var E;
          return (E = h.value) == null ? void 0 : E.cm;
        }),
        g = xt(() => {
          var E;
          return (
            ((E = r.file) == null
              ? void 0
              : E.tasks.filter(($) => {
                  var O;
                  return ((O = $.result) == null ? void 0 : O.state) === 'fail';
                })) || []
          );
        }),
        v = [],
        b = [],
        x = [],
        S = Vt(!1);
      function A() {
        x.forEach(([E, $, O]) => {
          E.removeEventListener('click', $), O();
        }),
          (x.length = 0);
      }
      QT(h, () => {
        var E;
        (E = d.value) == null || E.refresh();
      });
      function L() {
        u.value = l.value !== d.value.getValue();
      }
      Re(
        u,
        (E) => {
          n('draft', E);
        },
        { immediate: !0 },
      );
      function M(E) {
        const $ = ((E == null ? void 0 : E.stacks) || []).filter((ut) => {
            var ft;
            return (
              ut.file &&
              ut.file === ((ft = r.file) == null ? void 0 : ft.filepath)
            );
          }),
          O = $ == null ? void 0 : $[0];
        if (!O) return;
        const G = document.createElement('div');
        G.className = 'op80 flex gap-x-2 items-center';
        const K = document.createElement('pre');
        (K.className = 'c-red-600 dark:c-red-400'),
          (K.textContent = `${' '.repeat(O.column)}^ ${
            E == null ? void 0 : E.nameStr
          }: ${E == null ? void 0 : E.message}`),
          G.appendChild(K);
        const ct = document.createElement('span');
        (ct.className =
          'i-carbon-launch c-red-600 dark:c-red-400 hover:cursor-pointer min-w-1em min-h-1em'),
          (ct.tabIndex = 0),
          (ct.ariaLabel = 'Open in Editor'),
          O0(ct, { content: 'Open in Editor', placement: 'bottom' }, !1);
        const V = async () => {
          await $y(O.file, O.line, O.column);
        };
        G.appendChild(ct),
          x.push([ct, V, () => kh(ct)]),
          b.push(d.value.addLineClass(O.line - 1, 'wrap', 'bg-red-500/10')),
          v.push(d.value.addLineWidget(O.line - 1, G));
      }
      Re(
        [d, g],
        ([E]) => {
          if (!E) {
            A();
            return;
          }
          setTimeout(() => {
            A(),
              v.forEach(($) => $.clear()),
              b.forEach(($) => {
                var O;
                return (O = d.value) == null
                  ? void 0
                  : O.removeLineClass($, 'wrap');
              }),
              (v.length = 0),
              (b.length = 0),
              E.on('changes', L),
              g.value.forEach(($) => {
                var O, G;
                (G = (O = $.result) == null ? void 0 : O.errors) == null ||
                  G.forEach(M);
              }),
              S.value || E.clearHistory();
          }, 100);
        },
        { flush: 'post' },
      );
      async function T(E) {
        (S.value = !0),
          await je.rpc.writeFile(r.file.filepath, E),
          (l.value = E),
          (u.value = !1);
      }
      return (E, $) => {
        const O = zy;
        return (
          at(),
          Yt(
            O,
            _i(
              {
                ref_key: 'editor',
                ref: h,
                modelValue: U(o),
                'onUpdate:modelValue':
                  $[0] || ($[0] = (G) => (Ae(o) ? (o.value = G) : null)),
                'h-full': '',
              },
              { lineNumbers: !0 },
              { mode: U(f), 'data-testid': 'code-mirror', onSave: T },
            ),
            null,
            16,
            ['modelValue', 'mode'],
          )
        );
      };
    },
  }),
  nlt = ne({
    __name: 'Modal',
    props: {
      modelValue: { type: Boolean, default: !1 },
      direction: { default: 'bottom' },
    },
    emits: ['update:modelValue'],
    setup(t) {
      const n = t,
        r = xt(() => {
          switch (n.direction) {
            case 'bottom':
              return 'bottom-0 left-0 right-0 border-t';
            case 'top':
              return 'top-0 left-0 right-0 border-b';
            case 'left':
              return 'bottom-0 left-0 top-0 border-r';
            case 'right':
              return 'bottom-0 top-0 right-0 border-l';
            default:
              return '';
          }
        }),
        o = xt(() => {
          switch (n.direction) {
            case 'bottom':
              return 'translateY(100%)';
            case 'top':
              return 'translateY(-100%)';
            case 'left':
              return 'translateX(-100%)';
            case 'right':
              return 'translateX(100%)';
            default:
              return '';
          }
        });
      return (l, u) => (
        at(),
        Lt(
          'div',
          {
            class: ve([
              'fixed inset-0 z-40',
              t.modelValue ? '' : 'pointer-events-none',
            ]),
          },
          [
            lt(
              'div',
              {
                class: ve([
                  'bg-base inset-0 absolute transition-opacity duration-500 ease-out',
                  t.modelValue ? 'opacity-50' : 'opacity-0',
                ]),
                onClick:
                  u[0] || (u[0] = (f) => l.$emit('update:modelValue', !1)),
              },
              null,
              2,
            ),
            lt(
              'div',
              {
                class: ve([
                  'bg-base border-base absolute transition-all duration-200 ease-out scrolls',
                  [U(r)],
                ]),
                style: Cn(t.modelValue ? {} : { transform: U(o) }),
              },
              [tr(l.$slots, 'default')],
              6,
            ),
          ],
          2,
        )
      );
    },
  }),
  rlt = ['aria-label', 'opacity', 'disabled', 'hover'],
  us = ne({
    __name: 'IconButton',
    props: { icon: null, title: null, disabled: { type: Boolean } },
    setup(t) {
      return (n, r) => (
        at(),
        Lt(
          'button',
          {
            'aria-label': t.title,
            role: 'button',
            opacity: t.disabled ? 10 : 70,
            rounded: '',
            disabled: t.disabled,
            hover: t.disabled ? '' : 'bg-active op100',
            class: 'w-1.4em h-1.4em flex',
          },
          [
            tr(n.$slots, 'default', {}, () => [
              lt('div', { class: ve(t.icon), ma: '' }, null, 2),
            ]),
          ],
          8,
          rlt,
        )
      );
    },
  }),
  ilt = {
    'w-350': '',
    'max-w-screen': '',
    'h-full': '',
    flex: '',
    'flex-col': '',
  },
  olt = { 'p-4': '', relative: '' },
  slt = lt('p', null, 'Module Info', -1),
  alt = { op50: '', 'font-mono': '', 'text-sm': '' },
  llt = { key: 0, 'p-5': '' },
  clt = {
    grid: '~ cols-2 rows-[min-content_auto]',
    'overflow-hidden': '',
    'flex-auto': '',
  },
  ult = lt(
    'div',
    { p: 'x3 y-1', 'bg-overlay': '', border: 'base b t r' },
    ' Source ',
    -1,
  ),
  flt = lt(
    'div',
    { p: 'x3 y-1', 'bg-overlay': '', border: 'base b t' },
    ' Transformed ',
    -1,
  ),
  hlt = { key: 0 },
  dlt = { p: 'x3 y-1', 'bg-overlay': '', border: 'base b t' },
  plt = ne({
    __name: 'ModuleTransformResultView',
    props: { id: null },
    emits: ['close'],
    setup(t, { emit: n }) {
      const r = t,
        o = ST(() => je.rpc.getTransformResult(r.id)),
        l = xt(() => {
          var d;
          return ((d = r.id) == null ? void 0 : d.split(/\./g).pop()) || 'js';
        }),
        u = xt(() => {
          var d, g;
          return (
            ((g = (d = o.value) == null ? void 0 : d.source) == null
              ? void 0
              : g.trim()) || ''
          );
        }),
        f = xt(() => {
          var d, g;
          return (
            ((g = (d = o.value) == null ? void 0 : d.code) == null
              ? void 0
              : g.replace(/\/\/# sourceMappingURL=.*\n/, '').trim()) || ''
          );
        }),
        h = xt(() => {
          var d, g, v, b;
          return {
            mappings:
              ((g = (d = o.value) == null ? void 0 : d.map) == null
                ? void 0
                : g.mappings) ?? '',
            version:
              (b = (v = o.value) == null ? void 0 : v.map) == null
                ? void 0
                : b.version,
          };
        });
      return (
        CT('Escape', () => {
          n('close');
        }),
        (d, g) => {
          const v = us,
            b = zy;
          return (
            at(),
            Lt('div', ilt, [
              lt('div', olt, [
                slt,
                lt('p', alt, Jt(t.id), 1),
                It(v, {
                  icon: 'i-carbon-close',
                  absolute: '',
                  'top-5px': '',
                  'right-5px': '',
                  'text-2xl': '',
                  onClick: g[0] || (g[0] = (x) => n('close')),
                }),
              ]),
              U(o)
                ? (at(),
                  Lt(
                    ue,
                    { key: 1 },
                    [
                      lt('div', clt, [
                        ult,
                        flt,
                        It(
                          b,
                          _i(
                            {
                              'h-full': '',
                              'model-value': U(u),
                              'read-only': '',
                            },
                            { lineNumbers: !0 },
                            { mode: U(l) },
                          ),
                          null,
                          16,
                          ['model-value', 'mode'],
                        ),
                        It(
                          b,
                          _i(
                            {
                              'h-full': '',
                              'model-value': U(f),
                              'read-only': '',
                            },
                            { lineNumbers: !0 },
                            { mode: U(l) },
                          ),
                          null,
                          16,
                          ['model-value', 'mode'],
                        ),
                      ]),
                      U(h).mappings !== ''
                        ? (at(),
                          Lt('div', hlt, [
                            lt(
                              'div',
                              dlt,
                              ' Source map (v' + Jt(U(h).version) + ') ',
                              1,
                            ),
                            It(
                              b,
                              _i(
                                {
                                  'model-value': U(h).mappings,
                                  'read-only': '',
                                },
                                { lineNumbers: !0 },
                                { mode: U(l) },
                              ),
                              null,
                              16,
                              ['model-value', 'mode'],
                            ),
                          ]))
                        : ee('', !0),
                    ],
                    64,
                  ))
                : (at(),
                  Lt(
                    'div',
                    llt,
                    ' No transform result found for this module. ',
                  )),
            ])
          );
        }
      );
    },
  });
var $f = 'http://www.w3.org/1999/xhtml';
const Pv = {
  svg: 'http://www.w3.org/2000/svg',
  xhtml: $f,
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace',
  xmlns: 'http://www.w3.org/2000/xmlns/',
};
function Rc(t) {
  var n = (t += ''),
    r = n.indexOf(':');
  return (
    r >= 0 && (n = t.slice(0, r)) !== 'xmlns' && (t = t.slice(r + 1)),
    Pv.hasOwnProperty(n) ? { space: Pv[n], local: t } : t
  );
}
function glt(t) {
  return function () {
    var n = this.ownerDocument,
      r = this.namespaceURI;
    return r === $f && n.documentElement.namespaceURI === $f
      ? n.createElement(t)
      : n.createElementNS(r, t);
  };
}
function vlt(t) {
  return function () {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Fy(t) {
  var n = Rc(t);
  return (n.local ? vlt : glt)(n);
}
function mlt() {}
function Nh(t) {
  return t == null
    ? mlt
    : function () {
        return this.querySelector(t);
      };
}
function ylt(t) {
  typeof t != 'function' && (t = Nh(t));
  for (var n = this._groups, r = n.length, o = new Array(r), l = 0; l < r; ++l)
    for (
      var u = n[l], f = u.length, h = (o[l] = new Array(f)), d, g, v = 0;
      v < f;
      ++v
    )
      (d = u[v]) &&
        (g = t.call(d, d.__data__, v, u)) &&
        ('__data__' in d && (g.__data__ = d.__data__), (h[v] = g));
  return new Rn(o, this._parents);
}
function blt(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function wlt() {
  return [];
}
function Iy(t) {
  return t == null
    ? wlt
    : function () {
        return this.querySelectorAll(t);
      };
}
function xlt(t) {
  return function () {
    return blt(t.apply(this, arguments));
  };
}
function _lt(t) {
  typeof t == 'function' ? (t = xlt(t)) : (t = Iy(t));
  for (var n = this._groups, r = n.length, o = [], l = [], u = 0; u < r; ++u)
    for (var f = n[u], h = f.length, d, g = 0; g < h; ++g)
      (d = f[g]) && (o.push(t.call(d, d.__data__, g, f)), l.push(d));
  return new Rn(o, l);
}
function qy(t) {
  return function () {
    return this.matches(t);
  };
}
function Hy(t) {
  return function (n) {
    return n.matches(t);
  };
}
var Slt = Array.prototype.find;
function klt(t) {
  return function () {
    return Slt.call(this.children, t);
  };
}
function Clt() {
  return this.firstElementChild;
}
function Tlt(t) {
  return this.select(t == null ? Clt : klt(typeof t == 'function' ? t : Hy(t)));
}
var Elt = Array.prototype.filter;
function Llt() {
  return Array.from(this.children);
}
function Alt(t) {
  return function () {
    return Elt.call(this.children, t);
  };
}
function Mlt(t) {
  return this.selectAll(
    t == null ? Llt : Alt(typeof t == 'function' ? t : Hy(t)),
  );
}
function Nlt(t) {
  typeof t != 'function' && (t = qy(t));
  for (var n = this._groups, r = n.length, o = new Array(r), l = 0; l < r; ++l)
    for (var u = n[l], f = u.length, h = (o[l] = []), d, g = 0; g < f; ++g)
      (d = u[g]) && t.call(d, d.__data__, g, u) && h.push(d);
  return new Rn(o, this._parents);
}
function By(t) {
  return new Array(t.length);
}
function Plt() {
  return new Rn(this._enter || this._groups.map(By), this._parents);
}
function ec(t, n) {
  (this.ownerDocument = t.ownerDocument),
    (this.namespaceURI = t.namespaceURI),
    (this._next = null),
    (this._parent = t),
    (this.__data__ = n);
}
ec.prototype = {
  constructor: ec,
  appendChild: function (t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function (t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function (t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function (t) {
    return this._parent.querySelectorAll(t);
  },
};
function Olt(t) {
  return function () {
    return t;
  };
}
function $lt(t, n, r, o, l, u) {
  for (var f = 0, h, d = n.length, g = u.length; f < g; ++f)
    (h = n[f]) ? ((h.__data__ = u[f]), (o[f] = h)) : (r[f] = new ec(t, u[f]));
  for (; f < d; ++f) (h = n[f]) && (l[f] = h);
}
function Dlt(t, n, r, o, l, u, f) {
  var h,
    d,
    g = new Map(),
    v = n.length,
    b = u.length,
    x = new Array(v),
    S;
  for (h = 0; h < v; ++h)
    (d = n[h]) &&
      ((x[h] = S = f.call(d, d.__data__, h, n) + ''),
      g.has(S) ? (l[h] = d) : g.set(S, d));
  for (h = 0; h < b; ++h)
    (S = f.call(t, u[h], h, u) + ''),
      (d = g.get(S))
        ? ((o[h] = d), (d.__data__ = u[h]), g.delete(S))
        : (r[h] = new ec(t, u[h]));
  for (h = 0; h < v; ++h) (d = n[h]) && g.get(x[h]) === d && (l[h] = d);
}
function Rlt(t) {
  return t.__data__;
}
function zlt(t, n) {
  if (!arguments.length) return Array.from(this, Rlt);
  var r = n ? Dlt : $lt,
    o = this._parents,
    l = this._groups;
  typeof t != 'function' && (t = Olt(t));
  for (
    var u = l.length,
      f = new Array(u),
      h = new Array(u),
      d = new Array(u),
      g = 0;
    g < u;
    ++g
  ) {
    var v = o[g],
      b = l[g],
      x = b.length,
      S = Flt(t.call(v, v && v.__data__, g, o)),
      A = S.length,
      L = (h[g] = new Array(A)),
      M = (f[g] = new Array(A)),
      T = (d[g] = new Array(x));
    r(v, b, L, M, T, S, n);
    for (var E = 0, $ = 0, O, G; E < A; ++E)
      if ((O = L[E])) {
        for (E >= $ && ($ = E + 1); !(G = M[$]) && ++$ < A; );
        O._next = G || null;
      }
  }
  return (f = new Rn(f, o)), (f._enter = h), (f._exit = d), f;
}
function Flt(t) {
  return typeof t == 'object' && 'length' in t ? t : Array.from(t);
}
function Ilt() {
  return new Rn(this._exit || this._groups.map(By), this._parents);
}
function qlt(t, n, r) {
  var o = this.enter(),
    l = this,
    u = this.exit();
  return (
    typeof t == 'function'
      ? ((o = t(o)), o && (o = o.selection()))
      : (o = o.append(t + '')),
    n != null && ((l = n(l)), l && (l = l.selection())),
    r == null ? u.remove() : r(u),
    o && l ? o.merge(l).order() : l
  );
}
function Hlt(t) {
  for (
    var n = t.selection ? t.selection() : t,
      r = this._groups,
      o = n._groups,
      l = r.length,
      u = o.length,
      f = Math.min(l, u),
      h = new Array(l),
      d = 0;
    d < f;
    ++d
  )
    for (
      var g = r[d], v = o[d], b = g.length, x = (h[d] = new Array(b)), S, A = 0;
      A < b;
      ++A
    )
      (S = g[A] || v[A]) && (x[A] = S);
  for (; d < l; ++d) h[d] = r[d];
  return new Rn(h, this._parents);
}
function Blt() {
  for (var t = this._groups, n = -1, r = t.length; ++n < r; )
    for (var o = t[n], l = o.length - 1, u = o[l], f; --l >= 0; )
      (f = o[l]) &&
        (u &&
          f.compareDocumentPosition(u) ^ 4 &&
          u.parentNode.insertBefore(f, u),
        (u = f));
  return this;
}
function Wlt(t) {
  t || (t = Ult);
  function n(b, x) {
    return b && x ? t(b.__data__, x.__data__) : !b - !x;
  }
  for (
    var r = this._groups, o = r.length, l = new Array(o), u = 0;
    u < o;
    ++u
  ) {
    for (
      var f = r[u], h = f.length, d = (l[u] = new Array(h)), g, v = 0;
      v < h;
      ++v
    )
      (g = f[v]) && (d[v] = g);
    d.sort(n);
  }
  return new Rn(l, this._parents).order();
}
function Ult(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function jlt() {
  var t = arguments[0];
  return (arguments[0] = this), t.apply(null, arguments), this;
}
function Glt() {
  return Array.from(this);
}
function Vlt() {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], l = 0, u = o.length; l < u; ++l) {
      var f = o[l];
      if (f) return f;
    }
  return null;
}
function Klt() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Xlt() {
  return !this.node();
}
function Ylt(t) {
  for (var n = this._groups, r = 0, o = n.length; r < o; ++r)
    for (var l = n[r], u = 0, f = l.length, h; u < f; ++u)
      (h = l[u]) && t.call(h, h.__data__, u, l);
  return this;
}
function Zlt(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function Jlt(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Qlt(t, n) {
  return function () {
    this.setAttribute(t, n);
  };
}
function tct(t, n) {
  return function () {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function ect(t, n) {
  return function () {
    var r = n.apply(this, arguments);
    r == null ? this.removeAttribute(t) : this.setAttribute(t, r);
  };
}
function nct(t, n) {
  return function () {
    var r = n.apply(this, arguments);
    r == null
      ? this.removeAttributeNS(t.space, t.local)
      : this.setAttributeNS(t.space, t.local, r);
  };
}
function rct(t, n) {
  var r = Rc(t);
  if (arguments.length < 2) {
    var o = this.node();
    return r.local ? o.getAttributeNS(r.space, r.local) : o.getAttribute(r);
  }
  return this.each(
    (n == null
      ? r.local
        ? Jlt
        : Zlt
      : typeof n == 'function'
      ? r.local
        ? nct
        : ect
      : r.local
      ? tct
      : Qlt)(r, n),
  );
}
function Wy(t) {
  return (
    (t.ownerDocument && t.ownerDocument.defaultView) ||
    (t.document && t) ||
    t.defaultView
  );
}
function ict(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
function oct(t, n, r) {
  return function () {
    this.style.setProperty(t, n, r);
  };
}
function sct(t, n, r) {
  return function () {
    var o = n.apply(this, arguments);
    o == null ? this.style.removeProperty(t) : this.style.setProperty(t, o, r);
  };
}
function act(t, n, r) {
  return arguments.length > 1
    ? this.each(
        (n == null ? ict : typeof n == 'function' ? sct : oct)(t, n, r ?? ''),
      )
    : rs(this.node(), t);
}
function rs(t, n) {
  return (
    t.style.getPropertyValue(n) ||
    Wy(t).getComputedStyle(t, null).getPropertyValue(n)
  );
}
function lct(t) {
  return function () {
    delete this[t];
  };
}
function cct(t, n) {
  return function () {
    this[t] = n;
  };
}
function uct(t, n) {
  return function () {
    var r = n.apply(this, arguments);
    r == null ? delete this[t] : (this[t] = r);
  };
}
function fct(t, n) {
  return arguments.length > 1
    ? this.each((n == null ? lct : typeof n == 'function' ? uct : cct)(t, n))
    : this.node()[t];
}
function Uy(t) {
  return t.trim().split(/^|\s+/);
}
function Ph(t) {
  return t.classList || new jy(t);
}
function jy(t) {
  (this._node = t), (this._names = Uy(t.getAttribute('class') || ''));
}
jy.prototype = {
  add: function (t) {
    var n = this._names.indexOf(t);
    n < 0 &&
      (this._names.push(t),
      this._node.setAttribute('class', this._names.join(' ')));
  },
  remove: function (t) {
    var n = this._names.indexOf(t);
    n >= 0 &&
      (this._names.splice(n, 1),
      this._node.setAttribute('class', this._names.join(' ')));
  },
  contains: function (t) {
    return this._names.indexOf(t) >= 0;
  },
};
function Gy(t, n) {
  for (var r = Ph(t), o = -1, l = n.length; ++o < l; ) r.add(n[o]);
}
function Vy(t, n) {
  for (var r = Ph(t), o = -1, l = n.length; ++o < l; ) r.remove(n[o]);
}
function hct(t) {
  return function () {
    Gy(this, t);
  };
}
function dct(t) {
  return function () {
    Vy(this, t);
  };
}
function pct(t, n) {
  return function () {
    (n.apply(this, arguments) ? Gy : Vy)(this, t);
  };
}
function gct(t, n) {
  var r = Uy(t + '');
  if (arguments.length < 2) {
    for (var o = Ph(this.node()), l = -1, u = r.length; ++l < u; )
      if (!o.contains(r[l])) return !1;
    return !0;
  }
  return this.each((typeof n == 'function' ? pct : n ? hct : dct)(r, n));
}
function vct() {
  this.textContent = '';
}
function mct(t) {
  return function () {
    this.textContent = t;
  };
}
function yct(t) {
  return function () {
    var n = t.apply(this, arguments);
    this.textContent = n ?? '';
  };
}
function bct(t) {
  return arguments.length
    ? this.each(t == null ? vct : (typeof t == 'function' ? yct : mct)(t))
    : this.node().textContent;
}
function wct() {
  this.innerHTML = '';
}
function xct(t) {
  return function () {
    this.innerHTML = t;
  };
}
function _ct(t) {
  return function () {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? '';
  };
}
function Sct(t) {
  return arguments.length
    ? this.each(t == null ? wct : (typeof t == 'function' ? _ct : xct)(t))
    : this.node().innerHTML;
}
function kct() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Cct() {
  return this.each(kct);
}
function Tct() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ect() {
  return this.each(Tct);
}
function Lct(t) {
  var n = typeof t == 'function' ? t : Fy(t);
  return this.select(function () {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Act() {
  return null;
}
function Mct(t, n) {
  var r = typeof t == 'function' ? t : Fy(t),
    o = n == null ? Act : typeof n == 'function' ? n : Nh(n);
  return this.select(function () {
    return this.insertBefore(
      r.apply(this, arguments),
      o.apply(this, arguments) || null,
    );
  });
}
function Nct() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Pct() {
  return this.each(Nct);
}
function Oct() {
  var t = this.cloneNode(!1),
    n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function $ct() {
  var t = this.cloneNode(!0),
    n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Dct(t) {
  return this.select(t ? $ct : Oct);
}
function Rct(t) {
  return arguments.length ? this.property('__data__', t) : this.node().__data__;
}
function zct(t) {
  return function (n) {
    t.call(this, n, this.__data__);
  };
}
function Fct(t) {
  return t
    .trim()
    .split(/^|\s+/)
    .map(function (n) {
      var r = '',
        o = n.indexOf('.');
      return (
        o >= 0 && ((r = n.slice(o + 1)), (n = n.slice(0, o))),
        { type: n, name: r }
      );
    });
}
function Ict(t) {
  return function () {
    var n = this.__on;
    if (n) {
      for (var r = 0, o = -1, l = n.length, u; r < l; ++r)
        (u = n[r]),
          (!t.type || u.type === t.type) && u.name === t.name
            ? this.removeEventListener(u.type, u.listener, u.options)
            : (n[++o] = u);
      ++o ? (n.length = o) : delete this.__on;
    }
  };
}
function qct(t, n, r) {
  return function () {
    var o = this.__on,
      l,
      u = zct(n);
    if (o) {
      for (var f = 0, h = o.length; f < h; ++f)
        if ((l = o[f]).type === t.type && l.name === t.name) {
          this.removeEventListener(l.type, l.listener, l.options),
            this.addEventListener(l.type, (l.listener = u), (l.options = r)),
            (l.value = n);
          return;
        }
    }
    this.addEventListener(t.type, u, r),
      (l = { type: t.type, name: t.name, value: n, listener: u, options: r }),
      o ? o.push(l) : (this.__on = [l]);
  };
}
function Hct(t, n, r) {
  var o = Fct(t + ''),
    l,
    u = o.length,
    f;
  if (arguments.length < 2) {
    var h = this.node().__on;
    if (h) {
      for (var d = 0, g = h.length, v; d < g; ++d)
        for (l = 0, v = h[d]; l < u; ++l)
          if ((f = o[l]).type === v.type && f.name === v.name) return v.value;
    }
    return;
  }
  for (h = n ? qct : Ict, l = 0; l < u; ++l) this.each(h(o[l], n, r));
  return this;
}
function Ky(t, n, r) {
  var o = Wy(t),
    l = o.CustomEvent;
  typeof l == 'function'
    ? (l = new l(n, r))
    : ((l = o.document.createEvent('Event')),
      r
        ? (l.initEvent(n, r.bubbles, r.cancelable), (l.detail = r.detail))
        : l.initEvent(n, !1, !1)),
    t.dispatchEvent(l);
}
function Bct(t, n) {
  return function () {
    return Ky(this, t, n);
  };
}
function Wct(t, n) {
  return function () {
    return Ky(this, t, n.apply(this, arguments));
  };
}
function Uct(t, n) {
  return this.each((typeof n == 'function' ? Wct : Bct)(t, n));
}
function* jct() {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], l = 0, u = o.length, f; l < u; ++l)
      (f = o[l]) && (yield f);
}
var Xy = [null];
function Rn(t, n) {
  (this._groups = t), (this._parents = n);
}
function La() {
  return new Rn([[document.documentElement]], Xy);
}
function Gct() {
  return this;
}
Rn.prototype = La.prototype = {
  constructor: Rn,
  select: ylt,
  selectAll: _lt,
  selectChild: Tlt,
  selectChildren: Mlt,
  filter: Nlt,
  data: zlt,
  enter: Plt,
  exit: Ilt,
  join: qlt,
  merge: Hlt,
  selection: Gct,
  order: Blt,
  sort: Wlt,
  call: jlt,
  nodes: Glt,
  node: Vlt,
  size: Klt,
  empty: Xlt,
  each: Ylt,
  attr: rct,
  style: act,
  property: fct,
  classed: gct,
  text: bct,
  html: Sct,
  raise: Cct,
  lower: Ect,
  append: Lct,
  insert: Mct,
  remove: Pct,
  clone: Dct,
  datum: Rct,
  on: Hct,
  dispatch: Uct,
  [Symbol.iterator]: jct,
};
function Sn(t) {
  return typeof t == 'string'
    ? new Rn([[document.querySelector(t)]], [document.documentElement])
    : new Rn([[t]], Xy);
}
function Vct(t) {
  let n;
  for (; (n = t.sourceEvent); ) t = n;
  return t;
}
function Dr(t, n) {
  if (((t = Vct(t)), n === void 0 && (n = t.currentTarget), n)) {
    var r = n.ownerSVGElement || n;
    if (r.createSVGPoint) {
      var o = r.createSVGPoint();
      return (
        (o.x = t.clientX),
        (o.y = t.clientY),
        (o = o.matrixTransform(n.getScreenCTM().inverse())),
        [o.x, o.y]
      );
    }
    if (n.getBoundingClientRect) {
      var l = n.getBoundingClientRect();
      return [
        t.clientX - l.left - n.clientLeft,
        t.clientY - l.top - n.clientTop,
      ];
    }
  }
  return [t.pageX, t.pageY];
}
class pn {
  constructor(n, r) {
    (this.x = n), (this.y = r);
  }
  static of([n, r]) {
    return new pn(n, r);
  }
  add(n) {
    return new pn(this.x + n.x, this.y + n.y);
  }
  subtract(n) {
    return new pn(this.x - n.x, this.y - n.y);
  }
  multiply(n) {
    return new pn(this.x * n, this.y * n);
  }
  divide(n) {
    return new pn(this.x / n, this.y / n);
  }
  dot(n) {
    return this.x * n.x + this.y * n.y;
  }
  cross(n) {
    return this.x * n.y - n.x * this.y;
  }
  hadamard(n) {
    return new pn(this.x * n.x, this.y * n.y);
  }
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
  normalize() {
    const n = this.length();
    return new pn(this.x / n, this.y / n);
  }
  rotateByRadians(n) {
    const r = Math.cos(n),
      o = Math.sin(n);
    return new pn(this.x * r - this.y * o, this.x * o + this.y * r);
  }
  rotateByDegrees(n) {
    return this.rotateByRadians((n * Math.PI) / 180);
  }
}
var Kct = { value: () => {} };
function Aa() {
  for (var t = 0, n = arguments.length, r = {}, o; t < n; ++t) {
    if (!(o = arguments[t] + '') || o in r || /[\s.]/.test(o))
      throw new Error('illegal type: ' + o);
    r[o] = [];
  }
  return new Rl(r);
}
function Rl(t) {
  this._ = t;
}
function Xct(t, n) {
  return t
    .trim()
    .split(/^|\s+/)
    .map(function (r) {
      var o = '',
        l = r.indexOf('.');
      if (
        (l >= 0 && ((o = r.slice(l + 1)), (r = r.slice(0, l))),
        r && !n.hasOwnProperty(r))
      )
        throw new Error('unknown type: ' + r);
      return { type: r, name: o };
    });
}
Rl.prototype = Aa.prototype = {
  constructor: Rl,
  on: function (t, n) {
    var r = this._,
      o = Xct(t + '', r),
      l,
      u = -1,
      f = o.length;
    if (arguments.length < 2) {
      for (; ++u < f; )
        if ((l = (t = o[u]).type) && (l = Yct(r[l], t.name))) return l;
      return;
    }
    if (n != null && typeof n != 'function')
      throw new Error('invalid callback: ' + n);
    for (; ++u < f; )
      if ((l = (t = o[u]).type)) r[l] = Ov(r[l], t.name, n);
      else if (n == null) for (l in r) r[l] = Ov(r[l], t.name, null);
    return this;
  },
  copy: function () {
    var t = {},
      n = this._;
    for (var r in n) t[r] = n[r].slice();
    return new Rl(t);
  },
  call: function (t, n) {
    if ((l = arguments.length - 2) > 0)
      for (var r = new Array(l), o = 0, l, u; o < l; ++o)
        r[o] = arguments[o + 2];
    if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
    for (u = this._[t], o = 0, l = u.length; o < l; ++o) u[o].value.apply(n, r);
  },
  apply: function (t, n, r) {
    if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
    for (var o = this._[t], l = 0, u = o.length; l < u; ++l)
      o[l].value.apply(n, r);
  },
};
function Yct(t, n) {
  for (var r = 0, o = t.length, l; r < o; ++r)
    if ((l = t[r]).name === n) return l.value;
}
function Ov(t, n, r) {
  for (var o = 0, l = t.length; o < l; ++o)
    if (t[o].name === n) {
      (t[o] = Kct), (t = t.slice(0, o).concat(t.slice(o + 1)));
      break;
    }
  return r != null && t.push({ name: n, value: r }), t;
}
const Zct = { passive: !1 },
  ga = { capture: !0, passive: !1 };
function Zu(t) {
  t.stopImmediatePropagation();
}
function Uo(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Yy(t) {
  var n = t.document.documentElement,
    r = Sn(t).on('dragstart.drag', Uo, ga);
  'onselectstart' in n
    ? r.on('selectstart.drag', Uo, ga)
    : ((n.__noselect = n.style.MozUserSelect),
      (n.style.MozUserSelect = 'none'));
}
function Zy(t, n) {
  var r = t.document.documentElement,
    o = Sn(t).on('dragstart.drag', null);
  n &&
    (o.on('click.drag', Uo, ga),
    setTimeout(function () {
      o.on('click.drag', null);
    }, 0)),
    'onselectstart' in r
      ? o.on('selectstart.drag', null)
      : ((r.style.MozUserSelect = r.__noselect), delete r.__noselect);
}
const _l = (t) => () => t;
function Df(
  t,
  {
    sourceEvent: n,
    subject: r,
    target: o,
    identifier: l,
    active: u,
    x: f,
    y: h,
    dx: d,
    dy: g,
    dispatch: v,
  },
) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: r, enumerable: !0, configurable: !0 },
    target: { value: o, enumerable: !0, configurable: !0 },
    identifier: { value: l, enumerable: !0, configurable: !0 },
    active: { value: u, enumerable: !0, configurable: !0 },
    x: { value: f, enumerable: !0, configurable: !0 },
    y: { value: h, enumerable: !0, configurable: !0 },
    dx: { value: d, enumerable: !0, configurable: !0 },
    dy: { value: g, enumerable: !0, configurable: !0 },
    _: { value: v },
  });
}
Df.prototype.on = function () {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Jct(t) {
  return !t.ctrlKey && !t.button;
}
function Qct() {
  return this.parentNode;
}
function tut(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function eut() {
  return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function nut() {
  var t = Jct,
    n = Qct,
    r = tut,
    o = eut,
    l = {},
    u = Aa('start', 'drag', 'end'),
    f = 0,
    h,
    d,
    g,
    v,
    b = 0;
  function x(O) {
    O.on('mousedown.drag', S)
      .filter(o)
      .on('touchstart.drag', M)
      .on('touchmove.drag', T, Zct)
      .on('touchend.drag touchcancel.drag', E)
      .style('touch-action', 'none')
      .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
  }
  function S(O, G) {
    if (!(v || !t.call(this, O, G))) {
      var K = $(this, n.call(this, O, G), O, G, 'mouse');
      K &&
        (Sn(O.view).on('mousemove.drag', A, ga).on('mouseup.drag', L, ga),
        Yy(O.view),
        Zu(O),
        (g = !1),
        (h = O.clientX),
        (d = O.clientY),
        K('start', O));
    }
  }
  function A(O) {
    if ((Uo(O), !g)) {
      var G = O.clientX - h,
        K = O.clientY - d;
      g = G * G + K * K > b;
    }
    l.mouse('drag', O);
  }
  function L(O) {
    Sn(O.view).on('mousemove.drag mouseup.drag', null),
      Zy(O.view, g),
      Uo(O),
      l.mouse('end', O);
  }
  function M(O, G) {
    if (t.call(this, O, G)) {
      var K = O.changedTouches,
        ct = n.call(this, O, G),
        V = K.length,
        ut,
        ft;
      for (ut = 0; ut < V; ++ut)
        (ft = $(this, ct, O, G, K[ut].identifier, K[ut])) &&
          (Zu(O), ft('start', O, K[ut]));
    }
  }
  function T(O) {
    var G = O.changedTouches,
      K = G.length,
      ct,
      V;
    for (ct = 0; ct < K; ++ct)
      (V = l[G[ct].identifier]) && (Uo(O), V('drag', O, G[ct]));
  }
  function E(O) {
    var G = O.changedTouches,
      K = G.length,
      ct,
      V;
    for (
      v && clearTimeout(v),
        v = setTimeout(function () {
          v = null;
        }, 500),
        ct = 0;
      ct < K;
      ++ct
    )
      (V = l[G[ct].identifier]) && (Zu(O), V('end', O, G[ct]));
  }
  function $(O, G, K, ct, V, ut) {
    var ft = u.copy(),
      kt = Dr(ut || K, G),
      dt,
      j,
      z;
    if (
      (z = r.call(
        O,
        new Df('beforestart', {
          sourceEvent: K,
          target: x,
          identifier: V,
          active: f,
          x: kt[0],
          y: kt[1],
          dx: 0,
          dy: 0,
          dispatch: ft,
        }),
        ct,
      )) != null
    )
      return (
        (dt = z.x - kt[0] || 0),
        (j = z.y - kt[1] || 0),
        function k(q, W, et) {
          var mt = kt,
            Ct;
          switch (q) {
            case 'start':
              (l[V] = k), (Ct = f++);
              break;
            case 'end':
              delete l[V], --f;
            case 'drag':
              (kt = Dr(et || W, G)), (Ct = f);
              break;
          }
          ft.call(
            q,
            O,
            new Df(q, {
              sourceEvent: W,
              subject: z,
              target: x,
              identifier: V,
              active: Ct,
              x: kt[0] + dt,
              y: kt[1] + j,
              dx: kt[0] - mt[0],
              dy: kt[1] - mt[1],
              dispatch: ft,
            }),
            ct,
          );
        }
      );
  }
  return (
    (x.filter = function (O) {
      return arguments.length
        ? ((t = typeof O == 'function' ? O : _l(!!O)), x)
        : t;
    }),
    (x.container = function (O) {
      return arguments.length
        ? ((n = typeof O == 'function' ? O : _l(O)), x)
        : n;
    }),
    (x.subject = function (O) {
      return arguments.length
        ? ((r = typeof O == 'function' ? O : _l(O)), x)
        : r;
    }),
    (x.touchable = function (O) {
      return arguments.length
        ? ((o = typeof O == 'function' ? O : _l(!!O)), x)
        : o;
    }),
    (x.on = function () {
      var O = u.on.apply(u, arguments);
      return O === u ? x : O;
    }),
    (x.clickDistance = function (O) {
      return arguments.length ? ((b = (O = +O) * O), x) : Math.sqrt(b);
    }),
    x
  );
}
function Oh(t, n, r) {
  (t.prototype = n.prototype = r), (r.constructor = t);
}
function Jy(t, n) {
  var r = Object.create(t.prototype);
  for (var o in n) r[o] = n[o];
  return r;
}
function Ma() {}
var va = 0.7,
  nc = 1 / va,
  jo = '\\s*([+-]?\\d+)\\s*',
  ma = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  vr = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  rut = /^#([0-9a-f]{3,8})$/,
  iut = new RegExp(`^rgb\\(${jo},${jo},${jo}\\)$`),
  out = new RegExp(`^rgb\\(${vr},${vr},${vr}\\)$`),
  sut = new RegExp(`^rgba\\(${jo},${jo},${jo},${ma}\\)$`),
  aut = new RegExp(`^rgba\\(${vr},${vr},${vr},${ma}\\)$`),
  lut = new RegExp(`^hsl\\(${ma},${vr},${vr}\\)$`),
  cut = new RegExp(`^hsla\\(${ma},${vr},${vr},${ma}\\)$`),
  $v = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Oh(Ma, ya, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Dv,
  formatHex: Dv,
  formatHex8: uut,
  formatHsl: fut,
  formatRgb: Rv,
  toString: Rv,
});
function Dv() {
  return this.rgb().formatHex();
}
function uut() {
  return this.rgb().formatHex8();
}
function fut() {
  return Qy(this).formatHsl();
}
function Rv() {
  return this.rgb().formatRgb();
}
function ya(t) {
  var n, r;
  return (
    (t = (t + '').trim().toLowerCase()),
    (n = rut.exec(t))
      ? ((r = n[1].length),
        (n = parseInt(n[1], 16)),
        r === 6
          ? zv(n)
          : r === 3
          ? new kn(
              ((n >> 8) & 15) | ((n >> 4) & 240),
              ((n >> 4) & 15) | (n & 240),
              ((n & 15) << 4) | (n & 15),
              1,
            )
          : r === 8
          ? Sl(
              (n >> 24) & 255,
              (n >> 16) & 255,
              (n >> 8) & 255,
              (n & 255) / 255,
            )
          : r === 4
          ? Sl(
              ((n >> 12) & 15) | ((n >> 8) & 240),
              ((n >> 8) & 15) | ((n >> 4) & 240),
              ((n >> 4) & 15) | (n & 240),
              (((n & 15) << 4) | (n & 15)) / 255,
            )
          : null)
      : (n = iut.exec(t))
      ? new kn(n[1], n[2], n[3], 1)
      : (n = out.exec(t))
      ? new kn((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
      : (n = sut.exec(t))
      ? Sl(n[1], n[2], n[3], n[4])
      : (n = aut.exec(t))
      ? Sl((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
      : (n = lut.exec(t))
      ? qv(n[1], n[2] / 100, n[3] / 100, 1)
      : (n = cut.exec(t))
      ? qv(n[1], n[2] / 100, n[3] / 100, n[4])
      : $v.hasOwnProperty(t)
      ? zv($v[t])
      : t === 'transparent'
      ? new kn(NaN, NaN, NaN, 0)
      : null
  );
}
function zv(t) {
  return new kn((t >> 16) & 255, (t >> 8) & 255, t & 255, 1);
}
function Sl(t, n, r, o) {
  return o <= 0 && (t = n = r = NaN), new kn(t, n, r, o);
}
function hut(t) {
  return (
    t instanceof Ma || (t = ya(t)),
    t ? ((t = t.rgb()), new kn(t.r, t.g, t.b, t.opacity)) : new kn()
  );
}
function Rf(t, n, r, o) {
  return arguments.length === 1 ? hut(t) : new kn(t, n, r, o ?? 1);
}
function kn(t, n, r, o) {
  (this.r = +t), (this.g = +n), (this.b = +r), (this.opacity = +o);
}
Oh(
  kn,
  Rf,
  Jy(Ma, {
    brighter(t) {
      return (
        (t = t == null ? nc : Math.pow(nc, t)),
        new kn(this.r * t, this.g * t, this.b * t, this.opacity)
      );
    },
    darker(t) {
      return (
        (t = t == null ? va : Math.pow(va, t)),
        new kn(this.r * t, this.g * t, this.b * t, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new kn(to(this.r), to(this.g), to(this.b), rc(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: Fv,
    formatHex: Fv,
    formatHex8: dut,
    formatRgb: Iv,
    toString: Iv,
  }),
);
function Fv() {
  return `#${Yi(this.r)}${Yi(this.g)}${Yi(this.b)}`;
}
function dut() {
  return `#${Yi(this.r)}${Yi(this.g)}${Yi(this.b)}${Yi(
    (isNaN(this.opacity) ? 1 : this.opacity) * 255,
  )}`;
}
function Iv() {
  const t = rc(this.opacity);
  return `${t === 1 ? 'rgb(' : 'rgba('}${to(this.r)}, ${to(this.g)}, ${to(
    this.b,
  )}${t === 1 ? ')' : `, ${t})`}`;
}
function rc(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function to(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Yi(t) {
  return (t = to(t)), (t < 16 ? '0' : '') + t.toString(16);
}
function qv(t, n, r, o) {
  return (
    o <= 0
      ? (t = n = r = NaN)
      : r <= 0 || r >= 1
      ? (t = n = NaN)
      : n <= 0 && (t = NaN),
    new Jn(t, n, r, o)
  );
}
function Qy(t) {
  if (t instanceof Jn) return new Jn(t.h, t.s, t.l, t.opacity);
  if ((t instanceof Ma || (t = ya(t)), !t)) return new Jn();
  if (t instanceof Jn) return t;
  t = t.rgb();
  var n = t.r / 255,
    r = t.g / 255,
    o = t.b / 255,
    l = Math.min(n, r, o),
    u = Math.max(n, r, o),
    f = NaN,
    h = u - l,
    d = (u + l) / 2;
  return (
    h
      ? (n === u
          ? (f = (r - o) / h + (r < o) * 6)
          : r === u
          ? (f = (o - n) / h + 2)
          : (f = (n - r) / h + 4),
        (h /= d < 0.5 ? u + l : 2 - u - l),
        (f *= 60))
      : (h = d > 0 && d < 1 ? 0 : f),
    new Jn(f, h, d, t.opacity)
  );
}
function put(t, n, r, o) {
  return arguments.length === 1 ? Qy(t) : new Jn(t, n, r, o ?? 1);
}
function Jn(t, n, r, o) {
  (this.h = +t), (this.s = +n), (this.l = +r), (this.opacity = +o);
}
Oh(
  Jn,
  put,
  Jy(Ma, {
    brighter(t) {
      return (
        (t = t == null ? nc : Math.pow(nc, t)),
        new Jn(this.h, this.s, this.l * t, this.opacity)
      );
    },
    darker(t) {
      return (
        (t = t == null ? va : Math.pow(va, t)),
        new Jn(this.h, this.s, this.l * t, this.opacity)
      );
    },
    rgb() {
      var t = (this.h % 360) + (this.h < 0) * 360,
        n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        o = r + (r < 0.5 ? r : 1 - r) * n,
        l = 2 * r - o;
      return new kn(
        Ju(t >= 240 ? t - 240 : t + 120, l, o),
        Ju(t, l, o),
        Ju(t < 120 ? t + 240 : t - 120, l, o),
        this.opacity,
      );
    },
    clamp() {
      return new Jn(Hv(this.h), kl(this.s), kl(this.l), rc(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const t = rc(this.opacity);
      return `${t === 1 ? 'hsl(' : 'hsla('}${Hv(this.h)}, ${
        kl(this.s) * 100
      }%, ${kl(this.l) * 100}%${t === 1 ? ')' : `, ${t})`}`;
    },
  }),
);
function Hv(t) {
  return (t = (t || 0) % 360), t < 0 ? t + 360 : t;
}
function kl(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ju(t, n, r) {
  return (
    (t < 60
      ? n + ((r - n) * t) / 60
      : t < 180
      ? r
      : t < 240
      ? n + ((r - n) * (240 - t)) / 60
      : n) * 255
  );
}
const tb = (t) => () => t;
function gut(t, n) {
  return function (r) {
    return t + r * n;
  };
}
function vut(t, n, r) {
  return (
    (t = Math.pow(t, r)),
    (n = Math.pow(n, r) - t),
    (r = 1 / r),
    function (o) {
      return Math.pow(t + o * n, r);
    }
  );
}
function mut(t) {
  return (t = +t) == 1
    ? eb
    : function (n, r) {
        return r - n ? vut(n, r, t) : tb(isNaN(n) ? r : n);
      };
}
function eb(t, n) {
  var r = n - t;
  return r ? gut(t, r) : tb(isNaN(t) ? n : t);
}
const Bv = (function t(n) {
  var r = mut(n);
  function o(l, u) {
    var f = r((l = Rf(l)).r, (u = Rf(u)).r),
      h = r(l.g, u.g),
      d = r(l.b, u.b),
      g = eb(l.opacity, u.opacity);
    return function (v) {
      return (
        (l.r = f(v)), (l.g = h(v)), (l.b = d(v)), (l.opacity = g(v)), l + ''
      );
    };
  }
  return (o.gamma = t), o;
})(1);
function vi(t, n) {
  return (
    (t = +t),
    (n = +n),
    function (r) {
      return t * (1 - r) + n * r;
    }
  );
}
var zf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Qu = new RegExp(zf.source, 'g');
function yut(t) {
  return function () {
    return t;
  };
}
function but(t) {
  return function (n) {
    return t(n) + '';
  };
}
function wut(t, n) {
  var r = (zf.lastIndex = Qu.lastIndex = 0),
    o,
    l,
    u,
    f = -1,
    h = [],
    d = [];
  for (t = t + '', n = n + ''; (o = zf.exec(t)) && (l = Qu.exec(n)); )
    (u = l.index) > r &&
      ((u = n.slice(r, u)), h[f] ? (h[f] += u) : (h[++f] = u)),
      (o = o[0]) === (l = l[0])
        ? h[f]
          ? (h[f] += l)
          : (h[++f] = l)
        : ((h[++f] = null), d.push({ i: f, x: vi(o, l) })),
      (r = Qu.lastIndex);
  return (
    r < n.length && ((u = n.slice(r)), h[f] ? (h[f] += u) : (h[++f] = u)),
    h.length < 2
      ? d[0]
        ? but(d[0].x)
        : yut(n)
      : ((n = d.length),
        function (g) {
          for (var v = 0, b; v < n; ++v) h[(b = d[v]).i] = b.x(g);
          return h.join('');
        })
  );
}
var Wv = 180 / Math.PI,
  Ff = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function nb(t, n, r, o, l, u) {
  var f, h, d;
  return (
    (f = Math.sqrt(t * t + n * n)) && ((t /= f), (n /= f)),
    (d = t * r + n * o) && ((r -= t * d), (o -= n * d)),
    (h = Math.sqrt(r * r + o * o)) && ((r /= h), (o /= h), (d /= h)),
    t * o < n * r && ((t = -t), (n = -n), (d = -d), (f = -f)),
    {
      translateX: l,
      translateY: u,
      rotate: Math.atan2(n, t) * Wv,
      skewX: Math.atan(d) * Wv,
      scaleX: f,
      scaleY: h,
    }
  );
}
var Cl;
function xut(t) {
  const n = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(
    t + '',
  );
  return n.isIdentity ? Ff : nb(n.a, n.b, n.c, n.d, n.e, n.f);
}
function _ut(t) {
  return t == null ||
    (Cl || (Cl = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
    Cl.setAttribute('transform', t),
    !(t = Cl.transform.baseVal.consolidate()))
    ? Ff
    : ((t = t.matrix), nb(t.a, t.b, t.c, t.d, t.e, t.f));
}
function rb(t, n, r, o) {
  function l(g) {
    return g.length ? g.pop() + ' ' : '';
  }
  function u(g, v, b, x, S, A) {
    if (g !== b || v !== x) {
      var L = S.push('translate(', null, n, null, r);
      A.push({ i: L - 4, x: vi(g, b) }, { i: L - 2, x: vi(v, x) });
    } else (b || x) && S.push('translate(' + b + n + x + r);
  }
  function f(g, v, b, x) {
    g !== v
      ? (g - v > 180 ? (v += 360) : v - g > 180 && (g += 360),
        x.push({ i: b.push(l(b) + 'rotate(', null, o) - 2, x: vi(g, v) }))
      : v && b.push(l(b) + 'rotate(' + v + o);
  }
  function h(g, v, b, x) {
    g !== v
      ? x.push({ i: b.push(l(b) + 'skewX(', null, o) - 2, x: vi(g, v) })
      : v && b.push(l(b) + 'skewX(' + v + o);
  }
  function d(g, v, b, x, S, A) {
    if (g !== b || v !== x) {
      var L = S.push(l(S) + 'scale(', null, ',', null, ')');
      A.push({ i: L - 4, x: vi(g, b) }, { i: L - 2, x: vi(v, x) });
    } else (b !== 1 || x !== 1) && S.push(l(S) + 'scale(' + b + ',' + x + ')');
  }
  return function (g, v) {
    var b = [],
      x = [];
    return (
      (g = t(g)),
      (v = t(v)),
      u(g.translateX, g.translateY, v.translateX, v.translateY, b, x),
      f(g.rotate, v.rotate, b, x),
      h(g.skewX, v.skewX, b, x),
      d(g.scaleX, g.scaleY, v.scaleX, v.scaleY, b, x),
      (g = v = null),
      function (S) {
        for (var A = -1, L = x.length, M; ++A < L; ) b[(M = x[A]).i] = M.x(S);
        return b.join('');
      }
    );
  };
}
var Sut = rb(xut, 'px, ', 'px)', 'deg)'),
  kut = rb(_ut, ', ', ')', ')'),
  Cut = 1e-12;
function Uv(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Tut(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Eut(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const Lut = (function t(n, r, o) {
  function l(u, f) {
    var h = u[0],
      d = u[1],
      g = u[2],
      v = f[0],
      b = f[1],
      x = f[2],
      S = v - h,
      A = b - d,
      L = S * S + A * A,
      M,
      T;
    if (L < Cut)
      (T = Math.log(x / g) / n),
        (M = function (ct) {
          return [h + ct * S, d + ct * A, g * Math.exp(n * ct * T)];
        });
    else {
      var E = Math.sqrt(L),
        $ = (x * x - g * g + o * L) / (2 * g * r * E),
        O = (x * x - g * g - o * L) / (2 * x * r * E),
        G = Math.log(Math.sqrt($ * $ + 1) - $),
        K = Math.log(Math.sqrt(O * O + 1) - O);
      (T = (K - G) / n),
        (M = function (ct) {
          var V = ct * T,
            ut = Uv(G),
            ft = (g / (r * E)) * (ut * Eut(n * V + G) - Tut(G));
          return [h + ft * S, d + ft * A, (g * ut) / Uv(n * V + G)];
        });
    }
    return (M.duration = (T * 1e3 * n) / Math.SQRT2), M;
  }
  return (
    (l.rho = function (u) {
      var f = Math.max(0.001, +u),
        h = f * f,
        d = h * h;
      return t(f, h, d);
    }),
    l
  );
})(Math.SQRT2, 2, 4);
var is = 0,
  Xs = 0,
  Gs = 0,
  ib = 1e3,
  ic,
  Ys,
  oc = 0,
  io = 0,
  zc = 0,
  ba = typeof performance == 'object' && performance.now ? performance : Date,
  ob =
    typeof window == 'object' && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (t) {
          setTimeout(t, 17);
        };
function $h() {
  return io || (ob(Aut), (io = ba.now() + zc));
}
function Aut() {
  io = 0;
}
function sc() {
  this._call = this._time = this._next = null;
}
sc.prototype = Dh.prototype = {
  constructor: sc,
  restart: function (t, n, r) {
    if (typeof t != 'function')
      throw new TypeError('callback is not a function');
    (r = (r == null ? $h() : +r) + (n == null ? 0 : +n)),
      !this._next &&
        Ys !== this &&
        (Ys ? (Ys._next = this) : (ic = this), (Ys = this)),
      (this._call = t),
      (this._time = r),
      If();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), If());
  },
};
function Dh(t, n, r) {
  var o = new sc();
  return o.restart(t, n, r), o;
}
function Mut() {
  $h(), ++is;
  for (var t = ic, n; t; )
    (n = io - t._time) >= 0 && t._call.call(void 0, n), (t = t._next);
  --is;
}
function jv() {
  (io = (oc = ba.now()) + zc), (is = Xs = 0);
  try {
    Mut();
  } finally {
    (is = 0), Put(), (io = 0);
  }
}
function Nut() {
  var t = ba.now(),
    n = t - oc;
  n > ib && ((zc -= n), (oc = t));
}
function Put() {
  for (var t, n = ic, r, o = 1 / 0; n; )
    n._call
      ? (o > n._time && (o = n._time), (t = n), (n = n._next))
      : ((r = n._next), (n._next = null), (n = t ? (t._next = r) : (ic = r)));
  (Ys = t), If(o);
}
function If(t) {
  if (!is) {
    Xs && (Xs = clearTimeout(Xs));
    var n = t - io;
    n > 24
      ? (t < 1 / 0 && (Xs = setTimeout(jv, t - ba.now() - zc)),
        Gs && (Gs = clearInterval(Gs)))
      : (Gs || ((oc = ba.now()), (Gs = setInterval(Nut, ib))),
        (is = 1),
        ob(jv));
  }
}
function Gv(t, n, r) {
  var o = new sc();
  return (
    (n = n == null ? 0 : +n),
    o.restart(
      (l) => {
        o.stop(), t(l + n);
      },
      n,
      r,
    ),
    o
  );
}
var Out = Aa('start', 'end', 'cancel', 'interrupt'),
  $ut = [],
  sb = 0,
  Vv = 1,
  qf = 2,
  zl = 3,
  Kv = 4,
  Hf = 5,
  Fl = 6;
function Fc(t, n, r, o, l, u) {
  var f = t.__transition;
  if (!f) t.__transition = {};
  else if (r in f) return;
  Dut(t, r, {
    name: n,
    index: o,
    group: l,
    on: Out,
    tween: $ut,
    time: u.time,
    delay: u.delay,
    duration: u.duration,
    ease: u.ease,
    timer: null,
    state: sb,
  });
}
function Rh(t, n) {
  var r = nr(t, n);
  if (r.state > sb) throw new Error('too late; already scheduled');
  return r;
}
function br(t, n) {
  var r = nr(t, n);
  if (r.state > zl) throw new Error('too late; already running');
  return r;
}
function nr(t, n) {
  var r = t.__transition;
  if (!r || !(r = r[n])) throw new Error('transition not found');
  return r;
}
function Dut(t, n, r) {
  var o = t.__transition,
    l;
  (o[n] = r), (r.timer = Dh(u, 0, r.time));
  function u(g) {
    (r.state = Vv),
      r.timer.restart(f, r.delay, r.time),
      r.delay <= g && f(g - r.delay);
  }
  function f(g) {
    var v, b, x, S;
    if (r.state !== Vv) return d();
    for (v in o)
      if (((S = o[v]), S.name === r.name)) {
        if (S.state === zl) return Gv(f);
        S.state === Kv
          ? ((S.state = Fl),
            S.timer.stop(),
            S.on.call('interrupt', t, t.__data__, S.index, S.group),
            delete o[v])
          : +v < n &&
            ((S.state = Fl),
            S.timer.stop(),
            S.on.call('cancel', t, t.__data__, S.index, S.group),
            delete o[v]);
      }
    if (
      (Gv(function () {
        r.state === zl &&
          ((r.state = Kv), r.timer.restart(h, r.delay, r.time), h(g));
      }),
      (r.state = qf),
      r.on.call('start', t, t.__data__, r.index, r.group),
      r.state === qf)
    ) {
      for (
        r.state = zl, l = new Array((x = r.tween.length)), v = 0, b = -1;
        v < x;
        ++v
      )
        (S = r.tween[v].value.call(t, t.__data__, r.index, r.group)) &&
          (l[++b] = S);
      l.length = b + 1;
    }
  }
  function h(g) {
    for (
      var v =
          g < r.duration
            ? r.ease.call(null, g / r.duration)
            : (r.timer.restart(d), (r.state = Hf), 1),
        b = -1,
        x = l.length;
      ++b < x;

    )
      l[b].call(t, v);
    r.state === Hf && (r.on.call('end', t, t.__data__, r.index, r.group), d());
  }
  function d() {
    (r.state = Fl), r.timer.stop(), delete o[n];
    for (var g in o) return;
    delete t.__transition;
  }
}
function Il(t, n) {
  var r = t.__transition,
    o,
    l,
    u = !0,
    f;
  if (r) {
    n = n == null ? null : n + '';
    for (f in r) {
      if ((o = r[f]).name !== n) {
        u = !1;
        continue;
      }
      (l = o.state > qf && o.state < Hf),
        (o.state = Fl),
        o.timer.stop(),
        o.on.call(l ? 'interrupt' : 'cancel', t, t.__data__, o.index, o.group),
        delete r[f];
    }
    u && delete t.__transition;
  }
}
function Rut(t) {
  return this.each(function () {
    Il(this, t);
  });
}
function zut(t, n) {
  var r, o;
  return function () {
    var l = br(this, t),
      u = l.tween;
    if (u !== r) {
      o = r = u;
      for (var f = 0, h = o.length; f < h; ++f)
        if (o[f].name === n) {
          (o = o.slice()), o.splice(f, 1);
          break;
        }
    }
    l.tween = o;
  };
}
function Fut(t, n, r) {
  var o, l;
  if (typeof r != 'function') throw new Error();
  return function () {
    var u = br(this, t),
      f = u.tween;
    if (f !== o) {
      l = (o = f).slice();
      for (var h = { name: n, value: r }, d = 0, g = l.length; d < g; ++d)
        if (l[d].name === n) {
          l[d] = h;
          break;
        }
      d === g && l.push(h);
    }
    u.tween = l;
  };
}
function Iut(t, n) {
  var r = this._id;
  if (((t += ''), arguments.length < 2)) {
    for (var o = nr(this.node(), r).tween, l = 0, u = o.length, f; l < u; ++l)
      if ((f = o[l]).name === t) return f.value;
    return null;
  }
  return this.each((n == null ? zut : Fut)(r, t, n));
}
function zh(t, n, r) {
  var o = t._id;
  return (
    t.each(function () {
      var l = br(this, o);
      (l.value || (l.value = {}))[n] = r.apply(this, arguments);
    }),
    function (l) {
      return nr(l, o).value[n];
    }
  );
}
function ab(t, n) {
  var r;
  return (
    typeof n == 'number'
      ? vi
      : n instanceof ya
      ? Bv
      : (r = ya(n))
      ? ((n = r), Bv)
      : wut
  )(t, n);
}
function qut(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function Hut(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function But(t, n, r) {
  var o,
    l = r + '',
    u;
  return function () {
    var f = this.getAttribute(t);
    return f === l ? null : f === o ? u : (u = n((o = f), r));
  };
}
function Wut(t, n, r) {
  var o,
    l = r + '',
    u;
  return function () {
    var f = this.getAttributeNS(t.space, t.local);
    return f === l ? null : f === o ? u : (u = n((o = f), r));
  };
}
function Uut(t, n, r) {
  var o, l, u;
  return function () {
    var f,
      h = r(this),
      d;
    return h == null
      ? void this.removeAttribute(t)
      : ((f = this.getAttribute(t)),
        (d = h + ''),
        f === d
          ? null
          : f === o && d === l
          ? u
          : ((l = d), (u = n((o = f), h))));
  };
}
function jut(t, n, r) {
  var o, l, u;
  return function () {
    var f,
      h = r(this),
      d;
    return h == null
      ? void this.removeAttributeNS(t.space, t.local)
      : ((f = this.getAttributeNS(t.space, t.local)),
        (d = h + ''),
        f === d
          ? null
          : f === o && d === l
          ? u
          : ((l = d), (u = n((o = f), h))));
  };
}
function Gut(t, n) {
  var r = Rc(t),
    o = r === 'transform' ? kut : ab;
  return this.attrTween(
    t,
    typeof n == 'function'
      ? (r.local ? jut : Uut)(r, o, zh(this, 'attr.' + t, n))
      : n == null
      ? (r.local ? Hut : qut)(r)
      : (r.local ? Wut : But)(r, o, n),
  );
}
function Vut(t, n) {
  return function (r) {
    this.setAttribute(t, n.call(this, r));
  };
}
function Kut(t, n) {
  return function (r) {
    this.setAttributeNS(t.space, t.local, n.call(this, r));
  };
}
function Xut(t, n) {
  var r, o;
  function l() {
    var u = n.apply(this, arguments);
    return u !== o && (r = (o = u) && Kut(t, u)), r;
  }
  return (l._value = n), l;
}
function Yut(t, n) {
  var r, o;
  function l() {
    var u = n.apply(this, arguments);
    return u !== o && (r = (o = u) && Vut(t, u)), r;
  }
  return (l._value = n), l;
}
function Zut(t, n) {
  var r = 'attr.' + t;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != 'function') throw new Error();
  var o = Rc(t);
  return this.tween(r, (o.local ? Xut : Yut)(o, n));
}
function Jut(t, n) {
  return function () {
    Rh(this, t).delay = +n.apply(this, arguments);
  };
}
function Qut(t, n) {
  return (
    (n = +n),
    function () {
      Rh(this, t).delay = n;
    }
  );
}
function tft(t) {
  var n = this._id;
  return arguments.length
    ? this.each((typeof t == 'function' ? Jut : Qut)(n, t))
    : nr(this.node(), n).delay;
}
function eft(t, n) {
  return function () {
    br(this, t).duration = +n.apply(this, arguments);
  };
}
function nft(t, n) {
  return (
    (n = +n),
    function () {
      br(this, t).duration = n;
    }
  );
}
function rft(t) {
  var n = this._id;
  return arguments.length
    ? this.each((typeof t == 'function' ? eft : nft)(n, t))
    : nr(this.node(), n).duration;
}
function ift(t, n) {
  if (typeof n != 'function') throw new Error();
  return function () {
    br(this, t).ease = n;
  };
}
function oft(t) {
  var n = this._id;
  return arguments.length ? this.each(ift(n, t)) : nr(this.node(), n).ease;
}
function sft(t, n) {
  return function () {
    var r = n.apply(this, arguments);
    if (typeof r != 'function') throw new Error();
    br(this, t).ease = r;
  };
}
function aft(t) {
  if (typeof t != 'function') throw new Error();
  return this.each(sft(this._id, t));
}
function lft(t) {
  typeof t != 'function' && (t = qy(t));
  for (var n = this._groups, r = n.length, o = new Array(r), l = 0; l < r; ++l)
    for (var u = n[l], f = u.length, h = (o[l] = []), d, g = 0; g < f; ++g)
      (d = u[g]) && t.call(d, d.__data__, g, u) && h.push(d);
  return new Gr(o, this._parents, this._name, this._id);
}
function cft(t) {
  if (t._id !== this._id) throw new Error();
  for (
    var n = this._groups,
      r = t._groups,
      o = n.length,
      l = r.length,
      u = Math.min(o, l),
      f = new Array(o),
      h = 0;
    h < u;
    ++h
  )
    for (
      var d = n[h], g = r[h], v = d.length, b = (f[h] = new Array(v)), x, S = 0;
      S < v;
      ++S
    )
      (x = d[S] || g[S]) && (b[S] = x);
  for (; h < o; ++h) f[h] = n[h];
  return new Gr(f, this._parents, this._name, this._id);
}
function uft(t) {
  return (t + '')
    .trim()
    .split(/^|\s+/)
    .every(function (n) {
      var r = n.indexOf('.');
      return r >= 0 && (n = n.slice(0, r)), !n || n === 'start';
    });
}
function fft(t, n, r) {
  var o,
    l,
    u = uft(n) ? Rh : br;
  return function () {
    var f = u(this, t),
      h = f.on;
    h !== o && (l = (o = h).copy()).on(n, r), (f.on = l);
  };
}
function hft(t, n) {
  var r = this._id;
  return arguments.length < 2
    ? nr(this.node(), r).on.on(t)
    : this.each(fft(r, t, n));
}
function dft(t) {
  return function () {
    var n = this.parentNode;
    for (var r in this.__transition) if (+r !== t) return;
    n && n.removeChild(this);
  };
}
function pft() {
  return this.on('end.remove', dft(this._id));
}
function gft(t) {
  var n = this._name,
    r = this._id;
  typeof t != 'function' && (t = Nh(t));
  for (var o = this._groups, l = o.length, u = new Array(l), f = 0; f < l; ++f)
    for (
      var h = o[f], d = h.length, g = (u[f] = new Array(d)), v, b, x = 0;
      x < d;
      ++x
    )
      (v = h[x]) &&
        (b = t.call(v, v.__data__, x, h)) &&
        ('__data__' in v && (b.__data__ = v.__data__),
        (g[x] = b),
        Fc(g[x], n, r, x, g, nr(v, r)));
  return new Gr(u, this._parents, n, r);
}
function vft(t) {
  var n = this._name,
    r = this._id;
  typeof t != 'function' && (t = Iy(t));
  for (var o = this._groups, l = o.length, u = [], f = [], h = 0; h < l; ++h)
    for (var d = o[h], g = d.length, v, b = 0; b < g; ++b)
      if ((v = d[b])) {
        for (
          var x = t.call(v, v.__data__, b, d),
            S,
            A = nr(v, r),
            L = 0,
            M = x.length;
          L < M;
          ++L
        )
          (S = x[L]) && Fc(S, n, r, L, x, A);
        u.push(x), f.push(v);
      }
  return new Gr(u, f, n, r);
}
var mft = La.prototype.constructor;
function yft() {
  return new mft(this._groups, this._parents);
}
function bft(t, n) {
  var r, o, l;
  return function () {
    var u = rs(this, t),
      f = (this.style.removeProperty(t), rs(this, t));
    return u === f ? null : u === r && f === o ? l : (l = n((r = u), (o = f)));
  };
}
function lb(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
function wft(t, n, r) {
  var o,
    l = r + '',
    u;
  return function () {
    var f = rs(this, t);
    return f === l ? null : f === o ? u : (u = n((o = f), r));
  };
}
function xft(t, n, r) {
  var o, l, u;
  return function () {
    var f = rs(this, t),
      h = r(this),
      d = h + '';
    return (
      h == null && (d = h = (this.style.removeProperty(t), rs(this, t))),
      f === d ? null : f === o && d === l ? u : ((l = d), (u = n((o = f), h)))
    );
  };
}
function _ft(t, n) {
  var r,
    o,
    l,
    u = 'style.' + n,
    f = 'end.' + u,
    h;
  return function () {
    var d = br(this, t),
      g = d.on,
      v = d.value[u] == null ? h || (h = lb(n)) : void 0;
    (g !== r || l !== v) && (o = (r = g).copy()).on(f, (l = v)), (d.on = o);
  };
}
function Sft(t, n, r) {
  var o = (t += '') == 'transform' ? Sut : ab;
  return n == null
    ? this.styleTween(t, bft(t, o)).on('end.style.' + t, lb(t))
    : typeof n == 'function'
    ? this.styleTween(t, xft(t, o, zh(this, 'style.' + t, n))).each(
        _ft(this._id, t),
      )
    : this.styleTween(t, wft(t, o, n), r).on('end.style.' + t, null);
}
function kft(t, n, r) {
  return function (o) {
    this.style.setProperty(t, n.call(this, o), r);
  };
}
function Cft(t, n, r) {
  var o, l;
  function u() {
    var f = n.apply(this, arguments);
    return f !== l && (o = (l = f) && kft(t, f, r)), o;
  }
  return (u._value = n), u;
}
function Tft(t, n, r) {
  var o = 'style.' + (t += '');
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (n == null) return this.tween(o, null);
  if (typeof n != 'function') throw new Error();
  return this.tween(o, Cft(t, n, r ?? ''));
}
function Eft(t) {
  return function () {
    this.textContent = t;
  };
}
function Lft(t) {
  return function () {
    var n = t(this);
    this.textContent = n ?? '';
  };
}
function Aft(t) {
  return this.tween(
    'text',
    typeof t == 'function'
      ? Lft(zh(this, 'text', t))
      : Eft(t == null ? '' : t + ''),
  );
}
function Mft(t) {
  return function (n) {
    this.textContent = t.call(this, n);
  };
}
function Nft(t) {
  var n, r;
  function o() {
    var l = t.apply(this, arguments);
    return l !== r && (n = (r = l) && Mft(l)), n;
  }
  return (o._value = t), o;
}
function Pft(t) {
  var n = 'text';
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != 'function') throw new Error();
  return this.tween(n, Nft(t));
}
function Oft() {
  for (
    var t = this._name,
      n = this._id,
      r = cb(),
      o = this._groups,
      l = o.length,
      u = 0;
    u < l;
    ++u
  )
    for (var f = o[u], h = f.length, d, g = 0; g < h; ++g)
      if ((d = f[g])) {
        var v = nr(d, n);
        Fc(d, t, r, g, f, {
          time: v.time + v.delay + v.duration,
          delay: 0,
          duration: v.duration,
          ease: v.ease,
        });
      }
  return new Gr(o, this._parents, t, r);
}
function $ft() {
  var t,
    n,
    r = this,
    o = r._id,
    l = r.size();
  return new Promise(function (u, f) {
    var h = { value: f },
      d = {
        value: function () {
          --l === 0 && u();
        },
      };
    r.each(function () {
      var g = br(this, o),
        v = g.on;
      v !== t &&
        ((n = (t = v).copy()),
        n._.cancel.push(h),
        n._.interrupt.push(h),
        n._.end.push(d)),
        (g.on = n);
    }),
      l === 0 && u();
  });
}
var Dft = 0;
function Gr(t, n, r, o) {
  (this._groups = t), (this._parents = n), (this._name = r), (this._id = o);
}
function cb() {
  return ++Dft;
}
var Or = La.prototype;
Gr.prototype = {
  constructor: Gr,
  select: gft,
  selectAll: vft,
  selectChild: Or.selectChild,
  selectChildren: Or.selectChildren,
  filter: lft,
  merge: cft,
  selection: yft,
  transition: Oft,
  call: Or.call,
  nodes: Or.nodes,
  node: Or.node,
  size: Or.size,
  empty: Or.empty,
  each: Or.each,
  on: hft,
  attr: Gut,
  attrTween: Zut,
  style: Sft,
  styleTween: Tft,
  text: Aft,
  textTween: Pft,
  remove: pft,
  tween: Iut,
  delay: tft,
  duration: rft,
  ease: oft,
  easeVarying: aft,
  end: $ft,
  [Symbol.iterator]: Or[Symbol.iterator],
};
function Rft(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var zft = { time: null, delay: 0, duration: 250, ease: Rft };
function Fft(t, n) {
  for (var r; !(r = t.__transition) || !(r = r[n]); )
    if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
  return r;
}
function Ift(t) {
  var n, r;
  t instanceof Gr
    ? ((n = t._id), (t = t._name))
    : ((n = cb()), ((r = zft).time = $h()), (t = t == null ? null : t + ''));
  for (var o = this._groups, l = o.length, u = 0; u < l; ++u)
    for (var f = o[u], h = f.length, d, g = 0; g < h; ++g)
      (d = f[g]) && Fc(d, t, n, g, f, r || Fft(d, n));
  return new Gr(o, this._parents, t, n);
}
La.prototype.interrupt = Rut;
La.prototype.transition = Ift;
const Tl = (t) => () => t;
function qft(t, { sourceEvent: n, target: r, transform: o, dispatch: l }) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    transform: { value: o, enumerable: !0, configurable: !0 },
    _: { value: l },
  });
}
function zr(t, n, r) {
  (this.k = t), (this.x = n), (this.y = r);
}
zr.prototype = {
  constructor: zr,
  scale: function (t) {
    return t === 1 ? this : new zr(this.k * t, this.x, this.y);
  },
  translate: function (t, n) {
    return (t === 0) & (n === 0)
      ? this
      : new zr(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function (t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function (t) {
    return t * this.k + this.x;
  },
  applyY: function (t) {
    return t * this.k + this.y;
  },
  invert: function (t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function (t) {
    return (t - this.x) / this.k;
  },
  invertY: function (t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function (t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function (t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function () {
    return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
  },
};
var Fh = new zr(1, 0, 0);
zr.prototype;
function tf(t) {
  t.stopImmediatePropagation();
}
function Vs(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Hft(t) {
  return (!t.ctrlKey || t.type === 'wheel') && !t.button;
}
function Bft() {
  var t = this;
  return t instanceof SVGElement
    ? ((t = t.ownerSVGElement || t),
      t.hasAttribute('viewBox')
        ? ((t = t.viewBox.baseVal),
          [
            [t.x, t.y],
            [t.x + t.width, t.y + t.height],
          ])
        : [
            [0, 0],
            [t.width.baseVal.value, t.height.baseVal.value],
          ])
    : [
        [0, 0],
        [t.clientWidth, t.clientHeight],
      ];
}
function Xv() {
  return this.__zoom || Fh;
}
function Wft(t) {
  return (
    -t.deltaY *
    (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 0.002) *
    (t.ctrlKey ? 10 : 1)
  );
}
function Uft() {
  return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function jft(t, n, r) {
  var o = t.invertX(n[0][0]) - r[0][0],
    l = t.invertX(n[1][0]) - r[1][0],
    u = t.invertY(n[0][1]) - r[0][1],
    f = t.invertY(n[1][1]) - r[1][1];
  return t.translate(
    l > o ? (o + l) / 2 : Math.min(0, o) || Math.max(0, l),
    f > u ? (u + f) / 2 : Math.min(0, u) || Math.max(0, f),
  );
}
function Gft() {
  var t = Hft,
    n = Bft,
    r = jft,
    o = Wft,
    l = Uft,
    u = [0, 1 / 0],
    f = [
      [-1 / 0, -1 / 0],
      [1 / 0, 1 / 0],
    ],
    h = 250,
    d = Lut,
    g = Aa('start', 'zoom', 'end'),
    v,
    b,
    x,
    S = 500,
    A = 150,
    L = 0,
    M = 10;
  function T(z) {
    z.property('__zoom', Xv)
      .on('wheel.zoom', V, { passive: !1 })
      .on('mousedown.zoom', ut)
      .on('dblclick.zoom', ft)
      .filter(l)
      .on('touchstart.zoom', kt)
      .on('touchmove.zoom', dt)
      .on('touchend.zoom touchcancel.zoom', j)
      .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
  }
  (T.transform = function (z, k, q, W) {
    var et = z.selection ? z.selection() : z;
    et.property('__zoom', Xv),
      z !== et
        ? G(z, k, q, W)
        : et.interrupt().each(function () {
            K(this, arguments)
              .event(W)
              .start()
              .zoom(null, typeof k == 'function' ? k.apply(this, arguments) : k)
              .end();
          });
  }),
    (T.scaleBy = function (z, k, q, W) {
      T.scaleTo(
        z,
        function () {
          var et = this.__zoom.k,
            mt = typeof k == 'function' ? k.apply(this, arguments) : k;
          return et * mt;
        },
        q,
        W,
      );
    }),
    (T.scaleTo = function (z, k, q, W) {
      T.transform(
        z,
        function () {
          var et = n.apply(this, arguments),
            mt = this.__zoom,
            Ct =
              q == null
                ? O(et)
                : typeof q == 'function'
                ? q.apply(this, arguments)
                : q,
            Rt = mt.invert(Ct),
            Ft = typeof k == 'function' ? k.apply(this, arguments) : k;
          return r($(E(mt, Ft), Ct, Rt), et, f);
        },
        q,
        W,
      );
    }),
    (T.translateBy = function (z, k, q, W) {
      T.transform(
        z,
        function () {
          return r(
            this.__zoom.translate(
              typeof k == 'function' ? k.apply(this, arguments) : k,
              typeof q == 'function' ? q.apply(this, arguments) : q,
            ),
            n.apply(this, arguments),
            f,
          );
        },
        null,
        W,
      );
    }),
    (T.translateTo = function (z, k, q, W, et) {
      T.transform(
        z,
        function () {
          var mt = n.apply(this, arguments),
            Ct = this.__zoom,
            Rt =
              W == null
                ? O(mt)
                : typeof W == 'function'
                ? W.apply(this, arguments)
                : W;
          return r(
            Fh.translate(Rt[0], Rt[1])
              .scale(Ct.k)
              .translate(
                typeof k == 'function' ? -k.apply(this, arguments) : -k,
                typeof q == 'function' ? -q.apply(this, arguments) : -q,
              ),
            mt,
            f,
          );
        },
        W,
        et,
      );
    });
  function E(z, k) {
    return (
      (k = Math.max(u[0], Math.min(u[1], k))),
      k === z.k ? z : new zr(k, z.x, z.y)
    );
  }
  function $(z, k, q) {
    var W = k[0] - q[0] * z.k,
      et = k[1] - q[1] * z.k;
    return W === z.x && et === z.y ? z : new zr(z.k, W, et);
  }
  function O(z) {
    return [(+z[0][0] + +z[1][0]) / 2, (+z[0][1] + +z[1][1]) / 2];
  }
  function G(z, k, q, W) {
    z.on('start.zoom', function () {
      K(this, arguments).event(W).start();
    })
      .on('interrupt.zoom end.zoom', function () {
        K(this, arguments).event(W).end();
      })
      .tween('zoom', function () {
        var et = this,
          mt = arguments,
          Ct = K(et, mt).event(W),
          Rt = n.apply(et, mt),
          Ft = q == null ? O(Rt) : typeof q == 'function' ? q.apply(et, mt) : q,
          jt = Math.max(Rt[1][0] - Rt[0][0], Rt[1][1] - Rt[0][1]),
          Zt = et.__zoom,
          Q = typeof k == 'function' ? k.apply(et, mt) : k,
          tt = d(
            Zt.invert(Ft).concat(jt / Zt.k),
            Q.invert(Ft).concat(jt / Q.k),
          );
        return function (X) {
          if (X === 1) X = Q;
          else {
            var ot = tt(X),
              Tt = jt / ot[2];
            X = new zr(Tt, Ft[0] - ot[0] * Tt, Ft[1] - ot[1] * Tt);
          }
          Ct.zoom(null, X);
        };
      });
  }
  function K(z, k, q) {
    return (!q && z.__zooming) || new ct(z, k);
  }
  function ct(z, k) {
    (this.that = z),
      (this.args = k),
      (this.active = 0),
      (this.sourceEvent = null),
      (this.extent = n.apply(z, k)),
      (this.taps = 0);
  }
  ct.prototype = {
    event: function (z) {
      return z && (this.sourceEvent = z), this;
    },
    start: function () {
      return (
        ++this.active === 1 &&
          ((this.that.__zooming = this), this.emit('start')),
        this
      );
    },
    zoom: function (z, k) {
      return (
        this.mouse &&
          z !== 'mouse' &&
          (this.mouse[1] = k.invert(this.mouse[0])),
        this.touch0 &&
          z !== 'touch' &&
          (this.touch0[1] = k.invert(this.touch0[0])),
        this.touch1 &&
          z !== 'touch' &&
          (this.touch1[1] = k.invert(this.touch1[0])),
        (this.that.__zoom = k),
        this.emit('zoom'),
        this
      );
    },
    end: function () {
      return (
        --this.active === 0 && (delete this.that.__zooming, this.emit('end')),
        this
      );
    },
    emit: function (z) {
      var k = Sn(this.that).datum();
      g.call(
        z,
        this.that,
        new qft(z, {
          sourceEvent: this.sourceEvent,
          target: T,
          type: z,
          transform: this.that.__zoom,
          dispatch: g,
        }),
        k,
      );
    },
  };
  function V(z, ...k) {
    if (!t.apply(this, arguments)) return;
    var q = K(this, k).event(z),
      W = this.__zoom,
      et = Math.max(
        u[0],
        Math.min(u[1], W.k * Math.pow(2, o.apply(this, arguments))),
      ),
      mt = Dr(z);
    if (q.wheel)
      (q.mouse[0][0] !== mt[0] || q.mouse[0][1] !== mt[1]) &&
        (q.mouse[1] = W.invert((q.mouse[0] = mt))),
        clearTimeout(q.wheel);
    else {
      if (W.k === et) return;
      (q.mouse = [mt, W.invert(mt)]), Il(this), q.start();
    }
    Vs(z),
      (q.wheel = setTimeout(Ct, A)),
      q.zoom('mouse', r($(E(W, et), q.mouse[0], q.mouse[1]), q.extent, f));
    function Ct() {
      (q.wheel = null), q.end();
    }
  }
  function ut(z, ...k) {
    if (x || !t.apply(this, arguments)) return;
    var q = z.currentTarget,
      W = K(this, k, !0).event(z),
      et = Sn(z.view).on('mousemove.zoom', Ft, !0).on('mouseup.zoom', jt, !0),
      mt = Dr(z, q),
      Ct = z.clientX,
      Rt = z.clientY;
    Yy(z.view),
      tf(z),
      (W.mouse = [mt, this.__zoom.invert(mt)]),
      Il(this),
      W.start();
    function Ft(Zt) {
      if ((Vs(Zt), !W.moved)) {
        var Q = Zt.clientX - Ct,
          tt = Zt.clientY - Rt;
        W.moved = Q * Q + tt * tt > L;
      }
      W.event(Zt).zoom(
        'mouse',
        r($(W.that.__zoom, (W.mouse[0] = Dr(Zt, q)), W.mouse[1]), W.extent, f),
      );
    }
    function jt(Zt) {
      et.on('mousemove.zoom mouseup.zoom', null),
        Zy(Zt.view, W.moved),
        Vs(Zt),
        W.event(Zt).end();
    }
  }
  function ft(z, ...k) {
    if (t.apply(this, arguments)) {
      var q = this.__zoom,
        W = Dr(z.changedTouches ? z.changedTouches[0] : z, this),
        et = q.invert(W),
        mt = q.k * (z.shiftKey ? 0.5 : 2),
        Ct = r($(E(q, mt), W, et), n.apply(this, k), f);
      Vs(z),
        h > 0
          ? Sn(this).transition().duration(h).call(G, Ct, W, z)
          : Sn(this).call(T.transform, Ct, W, z);
    }
  }
  function kt(z, ...k) {
    if (t.apply(this, arguments)) {
      var q = z.touches,
        W = q.length,
        et = K(this, k, z.changedTouches.length === W).event(z),
        mt,
        Ct,
        Rt,
        Ft;
      for (tf(z), Ct = 0; Ct < W; ++Ct)
        (Rt = q[Ct]),
          (Ft = Dr(Rt, this)),
          (Ft = [Ft, this.__zoom.invert(Ft), Rt.identifier]),
          et.touch0
            ? !et.touch1 &&
              et.touch0[2] !== Ft[2] &&
              ((et.touch1 = Ft), (et.taps = 0))
            : ((et.touch0 = Ft), (mt = !0), (et.taps = 1 + !!v));
      v && (v = clearTimeout(v)),
        mt &&
          (et.taps < 2 &&
            ((b = Ft[0]),
            (v = setTimeout(function () {
              v = null;
            }, S))),
          Il(this),
          et.start());
    }
  }
  function dt(z, ...k) {
    if (this.__zooming) {
      var q = K(this, k).event(z),
        W = z.changedTouches,
        et = W.length,
        mt,
        Ct,
        Rt,
        Ft;
      for (Vs(z), mt = 0; mt < et; ++mt)
        (Ct = W[mt]),
          (Rt = Dr(Ct, this)),
          q.touch0 && q.touch0[2] === Ct.identifier
            ? (q.touch0[0] = Rt)
            : q.touch1 && q.touch1[2] === Ct.identifier && (q.touch1[0] = Rt);
      if (((Ct = q.that.__zoom), q.touch1)) {
        var jt = q.touch0[0],
          Zt = q.touch0[1],
          Q = q.touch1[0],
          tt = q.touch1[1],
          X = (X = Q[0] - jt[0]) * X + (X = Q[1] - jt[1]) * X,
          ot = (ot = tt[0] - Zt[0]) * ot + (ot = tt[1] - Zt[1]) * ot;
        (Ct = E(Ct, Math.sqrt(X / ot))),
          (Rt = [(jt[0] + Q[0]) / 2, (jt[1] + Q[1]) / 2]),
          (Ft = [(Zt[0] + tt[0]) / 2, (Zt[1] + tt[1]) / 2]);
      } else if (q.touch0) (Rt = q.touch0[0]), (Ft = q.touch0[1]);
      else return;
      q.zoom('touch', r($(Ct, Rt, Ft), q.extent, f));
    }
  }
  function j(z, ...k) {
    if (this.__zooming) {
      var q = K(this, k).event(z),
        W = z.changedTouches,
        et = W.length,
        mt,
        Ct;
      for (
        tf(z),
          x && clearTimeout(x),
          x = setTimeout(function () {
            x = null;
          }, S),
          mt = 0;
        mt < et;
        ++mt
      )
        (Ct = W[mt]),
          q.touch0 && q.touch0[2] === Ct.identifier
            ? delete q.touch0
            : q.touch1 && q.touch1[2] === Ct.identifier && delete q.touch1;
      if (
        (q.touch1 && !q.touch0 && ((q.touch0 = q.touch1), delete q.touch1),
        q.touch0)
      )
        q.touch0[1] = this.__zoom.invert(q.touch0[0]);
      else if (
        (q.end(),
        q.taps === 2 &&
          ((Ct = Dr(Ct, this)), Math.hypot(b[0] - Ct[0], b[1] - Ct[1]) < M))
      ) {
        var Rt = Sn(this).on('dblclick.zoom');
        Rt && Rt.apply(this, arguments);
      }
    }
  }
  return (
    (T.wheelDelta = function (z) {
      return arguments.length
        ? ((o = typeof z == 'function' ? z : Tl(+z)), T)
        : o;
    }),
    (T.filter = function (z) {
      return arguments.length
        ? ((t = typeof z == 'function' ? z : Tl(!!z)), T)
        : t;
    }),
    (T.touchable = function (z) {
      return arguments.length
        ? ((l = typeof z == 'function' ? z : Tl(!!z)), T)
        : l;
    }),
    (T.extent = function (z) {
      return arguments.length
        ? ((n =
            typeof z == 'function'
              ? z
              : Tl([
                  [+z[0][0], +z[0][1]],
                  [+z[1][0], +z[1][1]],
                ])),
          T)
        : n;
    }),
    (T.scaleExtent = function (z) {
      return arguments.length
        ? ((u[0] = +z[0]), (u[1] = +z[1]), T)
        : [u[0], u[1]];
    }),
    (T.translateExtent = function (z) {
      return arguments.length
        ? ((f[0][0] = +z[0][0]),
          (f[1][0] = +z[1][0]),
          (f[0][1] = +z[0][1]),
          (f[1][1] = +z[1][1]),
          T)
        : [
            [f[0][0], f[0][1]],
            [f[1][0], f[1][1]],
          ];
    }),
    (T.constrain = function (z) {
      return arguments.length ? ((r = z), T) : r;
    }),
    (T.duration = function (z) {
      return arguments.length ? ((h = +z), T) : h;
    }),
    (T.interpolate = function (z) {
      return arguments.length ? ((d = z), T) : d;
    }),
    (T.on = function () {
      var z = g.on.apply(g, arguments);
      return z === g ? T : z;
    }),
    (T.clickDistance = function (z) {
      return arguments.length ? ((L = (z = +z) * z), T) : Math.sqrt(L);
    }),
    (T.tapDistance = function (z) {
      return arguments.length ? ((M = +z), T) : M;
    }),
    T
  );
}
function Vft(t) {
  const n = +this._x.call(null, t),
    r = +this._y.call(null, t);
  return ub(this.cover(n, r), n, r, t);
}
function ub(t, n, r, o) {
  if (isNaN(n) || isNaN(r)) return t;
  var l,
    u = t._root,
    f = { data: o },
    h = t._x0,
    d = t._y0,
    g = t._x1,
    v = t._y1,
    b,
    x,
    S,
    A,
    L,
    M,
    T,
    E;
  if (!u) return (t._root = f), t;
  for (; u.length; )
    if (
      ((L = n >= (b = (h + g) / 2)) ? (h = b) : (g = b),
      (M = r >= (x = (d + v) / 2)) ? (d = x) : (v = x),
      (l = u),
      !(u = u[(T = (M << 1) | L)]))
    )
      return (l[T] = f), t;
  if (
    ((S = +t._x.call(null, u.data)),
    (A = +t._y.call(null, u.data)),
    n === S && r === A)
  )
    return (f.next = u), l ? (l[T] = f) : (t._root = f), t;
  do
    (l = l ? (l[T] = new Array(4)) : (t._root = new Array(4))),
      (L = n >= (b = (h + g) / 2)) ? (h = b) : (g = b),
      (M = r >= (x = (d + v) / 2)) ? (d = x) : (v = x);
  while ((T = (M << 1) | L) === (E = ((A >= x) << 1) | (S >= b)));
  return (l[E] = u), (l[T] = f), t;
}
function Kft(t) {
  var n,
    r,
    o = t.length,
    l,
    u,
    f = new Array(o),
    h = new Array(o),
    d = 1 / 0,
    g = 1 / 0,
    v = -1 / 0,
    b = -1 / 0;
  for (r = 0; r < o; ++r)
    isNaN((l = +this._x.call(null, (n = t[r])))) ||
      isNaN((u = +this._y.call(null, n))) ||
      ((f[r] = l),
      (h[r] = u),
      l < d && (d = l),
      l > v && (v = l),
      u < g && (g = u),
      u > b && (b = u));
  if (d > v || g > b) return this;
  for (this.cover(d, g).cover(v, b), r = 0; r < o; ++r)
    ub(this, f[r], h[r], t[r]);
  return this;
}
function Xft(t, n) {
  if (isNaN((t = +t)) || isNaN((n = +n))) return this;
  var r = this._x0,
    o = this._y0,
    l = this._x1,
    u = this._y1;
  if (isNaN(r)) (l = (r = Math.floor(t)) + 1), (u = (o = Math.floor(n)) + 1);
  else {
    for (
      var f = l - r || 1, h = this._root, d, g;
      r > t || t >= l || o > n || n >= u;

    )
      switch (
        ((g = ((n < o) << 1) | (t < r)),
        (d = new Array(4)),
        (d[g] = h),
        (h = d),
        (f *= 2),
        g)
      ) {
        case 0:
          (l = r + f), (u = o + f);
          break;
        case 1:
          (r = l - f), (u = o + f);
          break;
        case 2:
          (l = r + f), (o = u - f);
          break;
        case 3:
          (r = l - f), (o = u - f);
          break;
      }
    this._root && this._root.length && (this._root = h);
  }
  return (this._x0 = r), (this._y0 = o), (this._x1 = l), (this._y1 = u), this;
}
function Yft() {
  var t = [];
  return (
    this.visit(function (n) {
      if (!n.length)
        do t.push(n.data);
        while ((n = n.next));
    }),
    t
  );
}
function Zft(t) {
  return arguments.length
    ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
    : isNaN(this._x0)
    ? void 0
    : [
        [this._x0, this._y0],
        [this._x1, this._y1],
      ];
}
function gn(t, n, r, o, l) {
  (this.node = t), (this.x0 = n), (this.y0 = r), (this.x1 = o), (this.y1 = l);
}
function Jft(t, n, r) {
  var o,
    l = this._x0,
    u = this._y0,
    f,
    h,
    d,
    g,
    v = this._x1,
    b = this._y1,
    x = [],
    S = this._root,
    A,
    L;
  for (
    S && x.push(new gn(S, l, u, v, b)),
      r == null
        ? (r = 1 / 0)
        : ((l = t - r), (u = n - r), (v = t + r), (b = n + r), (r *= r));
    (A = x.pop());

  )
    if (
      !(
        !(S = A.node) ||
        (f = A.x0) > v ||
        (h = A.y0) > b ||
        (d = A.x1) < l ||
        (g = A.y1) < u
      )
    )
      if (S.length) {
        var M = (f + d) / 2,
          T = (h + g) / 2;
        x.push(
          new gn(S[3], M, T, d, g),
          new gn(S[2], f, T, M, g),
          new gn(S[1], M, h, d, T),
          new gn(S[0], f, h, M, T),
        ),
          (L = ((n >= T) << 1) | (t >= M)) &&
            ((A = x[x.length - 1]),
            (x[x.length - 1] = x[x.length - 1 - L]),
            (x[x.length - 1 - L] = A));
      } else {
        var E = t - +this._x.call(null, S.data),
          $ = n - +this._y.call(null, S.data),
          O = E * E + $ * $;
        if (O < r) {
          var G = Math.sqrt((r = O));
          (l = t - G), (u = n - G), (v = t + G), (b = n + G), (o = S.data);
        }
      }
  return o;
}
function Qft(t) {
  if (
    isNaN((v = +this._x.call(null, t))) ||
    isNaN((b = +this._y.call(null, t)))
  )
    return this;
  var n,
    r = this._root,
    o,
    l,
    u,
    f = this._x0,
    h = this._y0,
    d = this._x1,
    g = this._y1,
    v,
    b,
    x,
    S,
    A,
    L,
    M,
    T;
  if (!r) return this;
  if (r.length)
    for (;;) {
      if (
        ((A = v >= (x = (f + d) / 2)) ? (f = x) : (d = x),
        (L = b >= (S = (h + g) / 2)) ? (h = S) : (g = S),
        (n = r),
        !(r = r[(M = (L << 1) | A)]))
      )
        return this;
      if (!r.length) break;
      (n[(M + 1) & 3] || n[(M + 2) & 3] || n[(M + 3) & 3]) &&
        ((o = n), (T = M));
    }
  for (; r.data !== t; ) if (((l = r), !(r = r.next))) return this;
  return (
    (u = r.next) && delete r.next,
    l
      ? (u ? (l.next = u) : delete l.next, this)
      : n
      ? (u ? (n[M] = u) : delete n[M],
        (r = n[0] || n[1] || n[2] || n[3]) &&
          r === (n[3] || n[2] || n[1] || n[0]) &&
          !r.length &&
          (o ? (o[T] = r) : (this._root = r)),
        this)
      : ((this._root = u), this)
  );
}
function tht(t) {
  for (var n = 0, r = t.length; n < r; ++n) this.remove(t[n]);
  return this;
}
function eht() {
  return this._root;
}
function nht() {
  var t = 0;
  return (
    this.visit(function (n) {
      if (!n.length)
        do ++t;
        while ((n = n.next));
    }),
    t
  );
}
function rht(t) {
  var n = [],
    r,
    o = this._root,
    l,
    u,
    f,
    h,
    d;
  for (
    o && n.push(new gn(o, this._x0, this._y0, this._x1, this._y1));
    (r = n.pop());

  )
    if (
      !t((o = r.node), (u = r.x0), (f = r.y0), (h = r.x1), (d = r.y1)) &&
      o.length
    ) {
      var g = (u + h) / 2,
        v = (f + d) / 2;
      (l = o[3]) && n.push(new gn(l, g, v, h, d)),
        (l = o[2]) && n.push(new gn(l, u, v, g, d)),
        (l = o[1]) && n.push(new gn(l, g, f, h, v)),
        (l = o[0]) && n.push(new gn(l, u, f, g, v));
    }
  return this;
}
function iht(t) {
  var n = [],
    r = [],
    o;
  for (
    this._root &&
    n.push(new gn(this._root, this._x0, this._y0, this._x1, this._y1));
    (o = n.pop());

  ) {
    var l = o.node;
    if (l.length) {
      var u,
        f = o.x0,
        h = o.y0,
        d = o.x1,
        g = o.y1,
        v = (f + d) / 2,
        b = (h + g) / 2;
      (u = l[0]) && n.push(new gn(u, f, h, v, b)),
        (u = l[1]) && n.push(new gn(u, v, h, d, b)),
        (u = l[2]) && n.push(new gn(u, f, b, v, g)),
        (u = l[3]) && n.push(new gn(u, v, b, d, g));
    }
    r.push(o);
  }
  for (; (o = r.pop()); ) t(o.node, o.x0, o.y0, o.x1, o.y1);
  return this;
}
function oht(t) {
  return t[0];
}
function sht(t) {
  return arguments.length ? ((this._x = t), this) : this._x;
}
function aht(t) {
  return t[1];
}
function lht(t) {
  return arguments.length ? ((this._y = t), this) : this._y;
}
function Ih(t, n, r) {
  var o = new qh(n ?? oht, r ?? aht, NaN, NaN, NaN, NaN);
  return t == null ? o : o.addAll(t);
}
function qh(t, n, r, o, l, u) {
  (this._x = t),
    (this._y = n),
    (this._x0 = r),
    (this._y0 = o),
    (this._x1 = l),
    (this._y1 = u),
    (this._root = void 0);
}
function Yv(t) {
  for (var n = { data: t.data }, r = n; (t = t.next); )
    r = r.next = { data: t.data };
  return n;
}
var mn = (Ih.prototype = qh.prototype);
mn.copy = function () {
  var t = new qh(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
    n = this._root,
    r,
    o;
  if (!n) return t;
  if (!n.length) return (t._root = Yv(n)), t;
  for (r = [{ source: n, target: (t._root = new Array(4)) }]; (n = r.pop()); )
    for (var l = 0; l < 4; ++l)
      (o = n.source[l]) &&
        (o.length
          ? r.push({ source: o, target: (n.target[l] = new Array(4)) })
          : (n.target[l] = Yv(o)));
  return t;
};
mn.add = Vft;
mn.addAll = Kft;
mn.cover = Xft;
mn.data = Yft;
mn.extent = Zft;
mn.find = Jft;
mn.remove = Qft;
mn.removeAll = tht;
mn.root = eht;
mn.size = nht;
mn.visit = rht;
mn.visitAfter = iht;
mn.x = sht;
mn.y = lht;
function vn(t) {
  return function () {
    return t;
  };
}
function yi(t) {
  return (t() - 0.5) * 1e-6;
}
function cht(t) {
  return t.x + t.vx;
}
function uht(t) {
  return t.y + t.vy;
}
function fht(t) {
  var n,
    r,
    o,
    l = 1,
    u = 1;
  typeof t != 'function' && (t = vn(t == null ? 1 : +t));
  function f() {
    for (var g, v = n.length, b, x, S, A, L, M, T = 0; T < u; ++T)
      for (b = Ih(n, cht, uht).visitAfter(h), g = 0; g < v; ++g)
        (x = n[g]),
          (L = r[x.index]),
          (M = L * L),
          (S = x.x + x.vx),
          (A = x.y + x.vy),
          b.visit(E);
    function E($, O, G, K, ct) {
      var V = $.data,
        ut = $.r,
        ft = L + ut;
      if (V) {
        if (V.index > x.index) {
          var kt = S - V.x - V.vx,
            dt = A - V.y - V.vy,
            j = kt * kt + dt * dt;
          j < ft * ft &&
            (kt === 0 && ((kt = yi(o)), (j += kt * kt)),
            dt === 0 && ((dt = yi(o)), (j += dt * dt)),
            (j = ((ft - (j = Math.sqrt(j))) / j) * l),
            (x.vx += (kt *= j) * (ft = (ut *= ut) / (M + ut))),
            (x.vy += (dt *= j) * ft),
            (V.vx -= kt * (ft = 1 - ft)),
            (V.vy -= dt * ft));
        }
        return;
      }
      return O > S + ft || K < S - ft || G > A + ft || ct < A - ft;
    }
  }
  function h(g) {
    if (g.data) return (g.r = r[g.data.index]);
    for (var v = (g.r = 0); v < 4; ++v) g[v] && g[v].r > g.r && (g.r = g[v].r);
  }
  function d() {
    if (n) {
      var g,
        v = n.length,
        b;
      for (r = new Array(v), g = 0; g < v; ++g)
        (b = n[g]), (r[b.index] = +t(b, g, n));
    }
  }
  return (
    (f.initialize = function (g, v) {
      (n = g), (o = v), d();
    }),
    (f.iterations = function (g) {
      return arguments.length ? ((u = +g), f) : u;
    }),
    (f.strength = function (g) {
      return arguments.length ? ((l = +g), f) : l;
    }),
    (f.radius = function (g) {
      return arguments.length
        ? ((t = typeof g == 'function' ? g : vn(+g)), d(), f)
        : t;
    }),
    f
  );
}
function hht(t) {
  return t.index;
}
function Zv(t, n) {
  var r = t.get(n);
  if (!r) throw new Error('node not found: ' + n);
  return r;
}
function dht(t) {
  var n = hht,
    r = b,
    o,
    l = vn(30),
    u,
    f,
    h,
    d,
    g,
    v = 1;
  t == null && (t = []);
  function b(M) {
    return 1 / Math.min(h[M.source.index], h[M.target.index]);
  }
  function x(M) {
    for (var T = 0, E = t.length; T < v; ++T)
      for (var $ = 0, O, G, K, ct, V, ut, ft; $ < E; ++$)
        (O = t[$]),
          (G = O.source),
          (K = O.target),
          (ct = K.x + K.vx - G.x - G.vx || yi(g)),
          (V = K.y + K.vy - G.y - G.vy || yi(g)),
          (ut = Math.sqrt(ct * ct + V * V)),
          (ut = ((ut - u[$]) / ut) * M * o[$]),
          (ct *= ut),
          (V *= ut),
          (K.vx -= ct * (ft = d[$])),
          (K.vy -= V * ft),
          (G.vx += ct * (ft = 1 - ft)),
          (G.vy += V * ft);
  }
  function S() {
    if (f) {
      var M,
        T = f.length,
        E = t.length,
        $ = new Map(f.map((G, K) => [n(G, K, f), G])),
        O;
      for (M = 0, h = new Array(T); M < E; ++M)
        (O = t[M]),
          (O.index = M),
          typeof O.source != 'object' && (O.source = Zv($, O.source)),
          typeof O.target != 'object' && (O.target = Zv($, O.target)),
          (h[O.source.index] = (h[O.source.index] || 0) + 1),
          (h[O.target.index] = (h[O.target.index] || 0) + 1);
      for (M = 0, d = new Array(E); M < E; ++M)
        (O = t[M]),
          (d[M] = h[O.source.index] / (h[O.source.index] + h[O.target.index]));
      (o = new Array(E)), A(), (u = new Array(E)), L();
    }
  }
  function A() {
    if (f) for (var M = 0, T = t.length; M < T; ++M) o[M] = +r(t[M], M, t);
  }
  function L() {
    if (f) for (var M = 0, T = t.length; M < T; ++M) u[M] = +l(t[M], M, t);
  }
  return (
    (x.initialize = function (M, T) {
      (f = M), (g = T), S();
    }),
    (x.links = function (M) {
      return arguments.length ? ((t = M), S(), x) : t;
    }),
    (x.id = function (M) {
      return arguments.length ? ((n = M), x) : n;
    }),
    (x.iterations = function (M) {
      return arguments.length ? ((v = +M), x) : v;
    }),
    (x.strength = function (M) {
      return arguments.length
        ? ((r = typeof M == 'function' ? M : vn(+M)), A(), x)
        : r;
    }),
    (x.distance = function (M) {
      return arguments.length
        ? ((l = typeof M == 'function' ? M : vn(+M)), L(), x)
        : l;
    }),
    x
  );
}
const pht = 1664525,
  ght = 1013904223,
  Jv = 4294967296;
function vht() {
  let t = 1;
  return () => (t = (pht * t + ght) % Jv) / Jv;
}
function mht(t) {
  return t.x;
}
function yht(t) {
  return t.y;
}
var bht = 10,
  wht = Math.PI * (3 - Math.sqrt(5));
function xht(t) {
  var n,
    r = 1,
    o = 0.001,
    l = 1 - Math.pow(o, 1 / 300),
    u = 0,
    f = 0.6,
    h = new Map(),
    d = Dh(b),
    g = Aa('tick', 'end'),
    v = vht();
  t == null && (t = []);
  function b() {
    x(), g.call('tick', n), r < o && (d.stop(), g.call('end', n));
  }
  function x(L) {
    var M,
      T = t.length,
      E;
    L === void 0 && (L = 1);
    for (var $ = 0; $ < L; ++$)
      for (
        r += (u - r) * l,
          h.forEach(function (O) {
            O(r);
          }),
          M = 0;
        M < T;
        ++M
      )
        (E = t[M]),
          E.fx == null ? (E.x += E.vx *= f) : ((E.x = E.fx), (E.vx = 0)),
          E.fy == null ? (E.y += E.vy *= f) : ((E.y = E.fy), (E.vy = 0));
    return n;
  }
  function S() {
    for (var L = 0, M = t.length, T; L < M; ++L) {
      if (
        ((T = t[L]),
        (T.index = L),
        T.fx != null && (T.x = T.fx),
        T.fy != null && (T.y = T.fy),
        isNaN(T.x) || isNaN(T.y))
      ) {
        var E = bht * Math.sqrt(0.5 + L),
          $ = L * wht;
        (T.x = E * Math.cos($)), (T.y = E * Math.sin($));
      }
      (isNaN(T.vx) || isNaN(T.vy)) && (T.vx = T.vy = 0);
    }
  }
  function A(L) {
    return L.initialize && L.initialize(t, v), L;
  }
  return (
    S(),
    (n = {
      tick: x,
      restart: function () {
        return d.restart(b), n;
      },
      stop: function () {
        return d.stop(), n;
      },
      nodes: function (L) {
        return arguments.length ? ((t = L), S(), h.forEach(A), n) : t;
      },
      alpha: function (L) {
        return arguments.length ? ((r = +L), n) : r;
      },
      alphaMin: function (L) {
        return arguments.length ? ((o = +L), n) : o;
      },
      alphaDecay: function (L) {
        return arguments.length ? ((l = +L), n) : +l;
      },
      alphaTarget: function (L) {
        return arguments.length ? ((u = +L), n) : u;
      },
      velocityDecay: function (L) {
        return arguments.length ? ((f = 1 - L), n) : 1 - f;
      },
      randomSource: function (L) {
        return arguments.length ? ((v = L), h.forEach(A), n) : v;
      },
      force: function (L, M) {
        return arguments.length > 1
          ? (M == null ? h.delete(L) : h.set(L, A(M)), n)
          : h.get(L);
      },
      find: function (L, M, T) {
        var E = 0,
          $ = t.length,
          O,
          G,
          K,
          ct,
          V;
        for (T == null ? (T = 1 / 0) : (T *= T), E = 0; E < $; ++E)
          (ct = t[E]),
            (O = L - ct.x),
            (G = M - ct.y),
            (K = O * O + G * G),
            K < T && ((V = ct), (T = K));
        return V;
      },
      on: function (L, M) {
        return arguments.length > 1 ? (g.on(L, M), n) : g.on(L);
      },
    })
  );
}
function _ht() {
  var t,
    n,
    r,
    o,
    l = vn(-30),
    u,
    f = 1,
    h = 1 / 0,
    d = 0.81;
  function g(S) {
    var A,
      L = t.length,
      M = Ih(t, mht, yht).visitAfter(b);
    for (o = S, A = 0; A < L; ++A) (n = t[A]), M.visit(x);
  }
  function v() {
    if (t) {
      var S,
        A = t.length,
        L;
      for (u = new Array(A), S = 0; S < A; ++S)
        (L = t[S]), (u[L.index] = +l(L, S, t));
    }
  }
  function b(S) {
    var A = 0,
      L,
      M,
      T = 0,
      E,
      $,
      O;
    if (S.length) {
      for (E = $ = O = 0; O < 4; ++O)
        (L = S[O]) &&
          (M = Math.abs(L.value)) &&
          ((A += L.value), (T += M), (E += M * L.x), ($ += M * L.y));
      (S.x = E / T), (S.y = $ / T);
    } else {
      (L = S), (L.x = L.data.x), (L.y = L.data.y);
      do A += u[L.data.index];
      while ((L = L.next));
    }
    S.value = A;
  }
  function x(S, A, L, M) {
    if (!S.value) return !0;
    var T = S.x - n.x,
      E = S.y - n.y,
      $ = M - A,
      O = T * T + E * E;
    if (($ * $) / d < O)
      return (
        O < h &&
          (T === 0 && ((T = yi(r)), (O += T * T)),
          E === 0 && ((E = yi(r)), (O += E * E)),
          O < f && (O = Math.sqrt(f * O)),
          (n.vx += (T * S.value * o) / O),
          (n.vy += (E * S.value * o) / O)),
        !0
      );
    if (S.length || O >= h) return;
    (S.data !== n || S.next) &&
      (T === 0 && ((T = yi(r)), (O += T * T)),
      E === 0 && ((E = yi(r)), (O += E * E)),
      O < f && (O = Math.sqrt(f * O)));
    do
      S.data !== n &&
        (($ = (u[S.data.index] * o) / O), (n.vx += T * $), (n.vy += E * $));
    while ((S = S.next));
  }
  return (
    (g.initialize = function (S, A) {
      (t = S), (r = A), v();
    }),
    (g.strength = function (S) {
      return arguments.length
        ? ((l = typeof S == 'function' ? S : vn(+S)), v(), g)
        : l;
    }),
    (g.distanceMin = function (S) {
      return arguments.length ? ((f = S * S), g) : Math.sqrt(f);
    }),
    (g.distanceMax = function (S) {
      return arguments.length ? ((h = S * S), g) : Math.sqrt(h);
    }),
    (g.theta = function (S) {
      return arguments.length ? ((d = S * S), g) : Math.sqrt(d);
    }),
    g
  );
}
function Sht(t) {
  var n = vn(0.1),
    r,
    o,
    l;
  typeof t != 'function' && (t = vn(t == null ? 0 : +t));
  function u(h) {
    for (var d = 0, g = r.length, v; d < g; ++d)
      (v = r[d]), (v.vx += (l[d] - v.x) * o[d] * h);
  }
  function f() {
    if (r) {
      var h,
        d = r.length;
      for (o = new Array(d), l = new Array(d), h = 0; h < d; ++h)
        o[h] = isNaN((l[h] = +t(r[h], h, r))) ? 0 : +n(r[h], h, r);
    }
  }
  return (
    (u.initialize = function (h) {
      (r = h), f();
    }),
    (u.strength = function (h) {
      return arguments.length
        ? ((n = typeof h == 'function' ? h : vn(+h)), f(), u)
        : n;
    }),
    (u.x = function (h) {
      return arguments.length
        ? ((t = typeof h == 'function' ? h : vn(+h)), f(), u)
        : t;
    }),
    u
  );
}
function kht(t) {
  var n = vn(0.1),
    r,
    o,
    l;
  typeof t != 'function' && (t = vn(t == null ? 0 : +t));
  function u(h) {
    for (var d = 0, g = r.length, v; d < g; ++d)
      (v = r[d]), (v.vy += (l[d] - v.y) * o[d] * h);
  }
  function f() {
    if (r) {
      var h,
        d = r.length;
      for (o = new Array(d), l = new Array(d), h = 0; h < d; ++h)
        o[h] = isNaN((l[h] = +t(r[h], h, r))) ? 0 : +n(r[h], h, r);
    }
  }
  return (
    (u.initialize = function (h) {
      (r = h), f();
    }),
    (u.strength = function (h) {
      return arguments.length
        ? ((n = typeof h == 'function' ? h : vn(+h)), f(), u)
        : n;
    }),
    (u.y = function (h) {
      return arguments.length
        ? ((t = typeof h == 'function' ? h : vn(+h)), f(), u)
        : t;
    }),
    u
  );
}
var Cht = Object.defineProperty,
  Tht = (t, n, r) =>
    n in t
      ? Cht(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[n] = r),
  Pe = (t, n, r) => (Tht(t, typeof n != 'symbol' ? n + '' : n, r), r);
function Eht() {
  return {
    drag: { end: 0, start: 0.1 },
    filter: { link: 1, type: 0.1, unlinked: { include: 0.1, exclude: 0.1 } },
    focus: { acquire: () => 0.1, release: () => 0.1 },
    initialize: 1,
    labels: { links: { hide: 0, show: 0 }, nodes: { hide: 0, show: 0 } },
    resize: 0.5,
  };
}
const Qv = (t) => {
    if (typeof t == 'object' && t !== null) {
      if (typeof Object.getPrototypeOf == 'function') {
        const n = Object.getPrototypeOf(t);
        return n === Object.prototype || n === null;
      }
      return Object.prototype.toString.call(t) === '[object Object]';
    }
    return !1;
  },
  bi = (...t) =>
    t.reduce((n, r) => {
      if (Array.isArray(r))
        throw new TypeError(
          'Arguments provided to deepmerge must be objects, not arrays.',
        );
      return (
        Object.keys(r).forEach((o) => {
          ['__proto__', 'constructor', 'prototype'].includes(o) ||
            (Array.isArray(n[o]) && Array.isArray(r[o])
              ? (n[o] = bi.options.mergeArrays
                  ? Array.from(new Set(n[o].concat(r[o])))
                  : r[o])
              : Qv(n[o]) && Qv(r[o])
              ? (n[o] = bi(n[o], r[o]))
              : (n[o] = r[o]));
        }),
        n
      );
    }, {}),
  fb = { mergeArrays: !0 };
bi.options = fb;
bi.withOptions = (t, ...n) => {
  bi.options = { mergeArrays: !0, ...t };
  const r = bi(...n);
  return (bi.options = fb), r;
};
function Lht() {
  return {
    centering: { enabled: !0, strength: 0.1 },
    charge: { enabled: !0, strength: -1 },
    collision: { enabled: !0, strength: 1, radiusMultiplier: 2 },
    link: { enabled: !0, strength: 1, length: 128 },
  };
}
function Aht() {
  return {
    includeUnlinked: !0,
    linkFilter: () => !0,
    nodeTypeFilter: void 0,
    showLinkLabels: !0,
    showNodeLabels: !0,
  };
}
function hb(t) {
  t.preventDefault(), t.stopPropagation();
}
function db(t) {
  return typeof t == 'number';
}
function Ci(t, n) {
  return db(t.nodeRadius) ? t.nodeRadius : t.nodeRadius(n);
}
function Mht(t) {
  return `${t.source.id}-${t.target.id}`;
}
function pb(t) {
  return `link-arrow-${t}`.replace(/[()]/g, '~');
}
function Nht(t) {
  return `url(#${pb(t.color)})`;
}
function Pht(t) {
  return {
    size: t,
    padding: (n, r) => Ci(r, n) + 2 * t,
    ref: [t / 2, t / 2],
    path: [
      [0, 0],
      [0, t],
      [t, t / 2],
    ],
    viewBox: [0, 0, t, t].join(','),
  };
}
const gb = { Arrow: (t) => Pht(t) },
  Oht = (t, n, r) => [n / 2, r / 2],
  vb = (t, n, r) => [tm(0, n), tm(0, r)];
function tm(t, n) {
  return Math.random() * (n - t) + t;
}
function $ht(t) {
  const n = Object.fromEntries(t.nodes.map((r) => [r.id, [r.x, r.y]]));
  return (r, o, l) => {
    const [u, f] = n[r.id] ?? [];
    return !u || !f ? vb(r, o, l) : [u, f];
  };
}
const Bf = { Centered: Oht, Randomized: vb, Stable: $ht };
function Dht() {
  return {
    autoResize: !1,
    callbacks: {},
    hooks: {},
    initial: Aht(),
    nodeRadius: 16,
    marker: gb.Arrow(4),
    modifiers: {},
    positionInitializer: Bf.Centered,
    simulation: { alphas: Eht(), forces: Lht() },
    zoom: { initial: 1, min: 0.1, max: 2 },
  };
}
function Rht(t = {}) {
  return bi.withOptions({ mergeArrays: !1 }, Dht(), t);
}
function zht(t, n) {
  let r;
  return () => {
    r !== void 0 && clearTimeout(r), (r = setTimeout(() => t(), n));
  };
}
function Fht({
  applyZoom: t,
  container: n,
  onDoubleClick: r,
  onPointerMoved: o,
  onPointerUp: l,
  offset: [u, f],
  scale: h,
  zoom: d,
}) {
  const g = n
    .classed('graph', !0)
    .append('svg')
    .attr('height', '100%')
    .attr('width', '100%')
    .call(d)
    .on('contextmenu', (v) => hb(v))
    .on('dblclick', (v) => (r == null ? void 0 : r(v)))
    .on('dblclick.zoom', null)
    .on('pointermove', (v) => (o == null ? void 0 : o(v)))
    .on('pointerup', (v) => (l == null ? void 0 : l(v)))
    .style('cursor', 'grab');
  return t && g.call(d.transform, Fh.translate(u, f).scale(h)), g.append('g');
}
function Iht({ canvas: t, scale: n, xOffset: r, yOffset: o }) {
  t == null || t.attr('transform', `translate(${r},${o})scale(${n})`);
}
function qht({ config: t, onDragStart: n, onDragEnd: r }) {
  var o, l;
  const u = nut()
    .filter((f) =>
      f.type === 'mousedown'
        ? f.button === 0
        : f.type === 'touchstart'
        ? f.touches.length === 1
        : !1,
    )
    .on('start', (f, h) => {
      f.active === 0 && n(f, h),
        Sn(f.sourceEvent.target).classed('grabbed', !0),
        (h.fx = h.x),
        (h.fy = h.y);
    })
    .on('drag', (f, h) => {
      (h.fx = f.x), (h.fy = f.y);
    })
    .on('end', (f, h) => {
      f.active === 0 && r(f, h),
        Sn(f.sourceEvent.target).classed('grabbed', !1),
        (h.fx = void 0),
        (h.fy = void 0);
    });
  return (l = (o = t.modifiers).drag) == null || l.call(o, u), u;
}
function Hht({
  graph: t,
  filter: n,
  focusedNode: r,
  includeUnlinked: o,
  linkFilter: l,
}) {
  const u = t.links.filter(
      (d) => n.includes(d.source.type) && n.includes(d.target.type) && l(d),
    ),
    f = (d) =>
      u.find((g) => g.source.id === d.id || g.target.id === d.id) !== void 0,
    h = t.nodes.filter((d) => n.includes(d.type) && (o || f(d)));
  return r === void 0 || !n.includes(r.type)
    ? { nodes: h, links: u }
    : Bht({ nodes: h, links: u }, r);
}
function Bht(t, n) {
  const r = [...Wht(t, n), ...Uht(t, n)],
    o = r.flatMap((l) => [l.source, l.target]);
  return { nodes: [...new Set([...o, n])], links: [...new Set(r)] };
}
function Wht(t, n) {
  return mb(t, n, (r, o) => r.target.id === o.id);
}
function Uht(t, n) {
  return mb(t, n, (r, o) => r.source.id === o.id);
}
function mb(t, n, r) {
  const o = new Set(t.links),
    l = new Set([n]),
    u = [];
  for (; o.size > 0; ) {
    const f = [...o].filter((h) => [...l].some((d) => r(h, d)));
    if (f.length === 0) return u;
    f.forEach((h) => {
      l.add(h.source), l.add(h.target), u.push(h), o.delete(h);
    });
  }
  return u;
}
function Wf(t) {
  return t.x ?? 0;
}
function Uf(t) {
  return t.y ?? 0;
}
function Hh({ source: t, target: n }) {
  const r = new pn(Wf(t), Uf(t)),
    o = new pn(Wf(n), Uf(n)),
    l = o.subtract(r),
    u = l.length(),
    f = l.normalize(),
    h = f.multiply(-1);
  return { s: r, t: o, dist: u, norm: f, endNorm: h };
}
function yb({ center: t, node: n }) {
  const r = new pn(Wf(n), Uf(n));
  let o = t;
  return (
    r.x === o.x && r.y === o.y && (o = o.add(new pn(0, 1))), { n: r, c: o }
  );
}
function bb({ config: t, source: n, target: r }) {
  const { s: o, t: l, norm: u } = Hh({ config: t, source: n, target: r }),
    f = o.add(u.multiply(Ci(t, n) - 1)),
    h = l.subtract(u.multiply(t.marker.padding(r, t)));
  return { start: f, end: h };
}
function jht(t) {
  const { start: n, end: r } = bb(t);
  return `M${n.x},${n.y}
          L${r.x},${r.y}`;
}
function Ght(t) {
  const { start: n, end: r } = bb(t),
    o = r.subtract(n).multiply(0.5),
    l = n.add(o);
  return `translate(${l.x - 8},${l.y - 4})`;
}
function Vht({ config: t, source: n, target: r }) {
  const {
      s: o,
      t: l,
      dist: u,
      norm: f,
      endNorm: h,
    } = Hh({ config: t, source: n, target: r }),
    d = 10,
    g = f
      .rotateByDegrees(-d)
      .multiply(Ci(t, n) - 1)
      .add(o),
    v = h
      .rotateByDegrees(d)
      .multiply(Ci(t, r))
      .add(l)
      .add(h.rotateByDegrees(d).multiply(2 * t.marker.size)),
    b = 1.2 * u;
  return `M${g.x},${g.y}
          A${b},${b},0,0,1,${v.x},${v.y}`;
}
function Kht({ center: t, config: n, node: r }) {
  const { n: o, c: l } = yb({ center: t, config: n, node: r }),
    u = Ci(n, r),
    f = o.subtract(l),
    h = f.multiply(1 / f.length()),
    d = 40,
    g = h
      .rotateByDegrees(d)
      .multiply(u - 1)
      .add(o),
    v = h
      .rotateByDegrees(-d)
      .multiply(u)
      .add(o)
      .add(h.rotateByDegrees(-d).multiply(2 * n.marker.size));
  return `M${g.x},${g.y}
          A${u},${u},0,1,0,${v.x},${v.y}`;
}
function Xht({ config: t, source: n, target: r }) {
  const { t: o, dist: l, endNorm: u } = Hh({ config: t, source: n, target: r }),
    f = 10,
    h = u
      .rotateByDegrees(f)
      .multiply(0.5 * l)
      .add(o);
  return `translate(${h.x},${h.y})`;
}
function Yht({ center: t, config: n, node: r }) {
  const { n: o, c: l } = yb({ center: t, config: n, node: r }),
    u = o.subtract(l),
    f = u
      .multiply(1 / u.length())
      .multiply(3 * Ci(n, r) + 8)
      .add(o);
  return `translate(${f.x},${f.y})`;
}
const Go = {
  line: { labelTransform: Ght, path: jht },
  arc: { labelTransform: Xht, path: Vht },
  reflexive: { labelTransform: Yht, path: Kht },
};
function Zht(t) {
  return t.append('g').classed('links', !0).selectAll('path');
}
function Jht({ config: t, graph: n, selection: r, showLabels: o }) {
  const l =
    r == null
      ? void 0
      : r
          .data(n.links, (u) => Mht(u))
          .join((u) => {
            var f, h, d, g;
            const v = u.append('g'),
              b = v
                .append('path')
                .classed('link', !0)
                .style('marker-end', (S) => Nht(S))
                .style('stroke', (S) => S.color);
            (h = (f = t.modifiers).link) == null || h.call(f, b);
            const x = v
              .append('text')
              .classed('link__label', !0)
              .style('fill', (S) => (S.label ? S.label.color : null))
              .style('font-size', (S) => (S.label ? S.label.fontSize : null))
              .text((S) => (S.label ? S.label.text : null));
            return (g = (d = t.modifiers).linkLabel) == null || g.call(d, x), v;
          });
  return (
    l == null ||
      l.select('.link__label').attr('opacity', (u) => (u.label && o ? 1 : 0)),
    l
  );
}
function Qht(t) {
  tdt(t), edt(t);
}
function tdt({ center: t, config: n, graph: r, selection: o }) {
  o == null ||
    o
      .selectAll('path')
      .attr('d', (l) =>
        l.source.x === void 0 ||
        l.source.y === void 0 ||
        l.target.x === void 0 ||
        l.target.y === void 0
          ? ''
          : l.source.id === l.target.id
          ? Go.reflexive.path({ config: n, node: l.source, center: t })
          : wb(r, l.source, l.target)
          ? Go.arc.path({ config: n, source: l.source, target: l.target })
          : Go.line.path({ config: n, source: l.source, target: l.target }),
      );
}
function edt({ config: t, center: n, graph: r, selection: o }) {
  o == null ||
    o.select('.link__label').attr('transform', (l) =>
      l.source.x === void 0 ||
      l.source.y === void 0 ||
      l.target.x === void 0 ||
      l.target.y === void 0
        ? 'translate(0, 0)'
        : l.source.id === l.target.id
        ? Go.reflexive.labelTransform({
            config: t,
            node: l.source,
            center: n,
          })
        : wb(r, l.source, l.target)
        ? Go.arc.labelTransform({
            config: t,
            source: l.source,
            target: l.target,
          })
        : Go.line.labelTransform({
            config: t,
            source: l.source,
            target: l.target,
          }),
    );
}
function wb(t, n, r) {
  return (
    n.id !== r.id &&
    t.links.some((o) => o.target.id === n.id && o.source.id === r.id) &&
    t.links.some((o) => o.target.id === r.id && o.source.id === n.id)
  );
}
function ndt(t) {
  return t.append('defs').selectAll('marker');
}
function rdt({ config: t, graph: n, selection: r }) {
  return r == null
    ? void 0
    : r
        .data(idt(n), (o) => o)
        .join((o) => {
          const l = o
            .append('marker')
            .attr('id', (u) => pb(u))
            .attr('markerHeight', 4 * t.marker.size)
            .attr('markerWidth', 4 * t.marker.size)
            .attr('markerUnits', 'userSpaceOnUse')
            .attr('orient', 'auto')
            .attr('refX', t.marker.ref[0])
            .attr('refY', t.marker.ref[1])
            .attr('viewBox', t.marker.viewBox)
            .style('fill', (u) => u);
          return l.append('path').attr('d', odt(t.marker.path)), l;
        });
}
function idt(t) {
  return [...new Set(t.links.map((n) => n.color))];
}
function odt(t) {
  const [n, ...r] = t;
  if (!n) return 'M0,0';
  const [o, l] = n;
  return r.reduce((u, [f, h]) => `${u}L${f},${h}`, `M${o},${l}`);
}
function sdt(t) {
  return t.append('g').classed('nodes', !0).selectAll('circle');
}
function adt({
  config: t,
  drag: n,
  graph: r,
  onNodeContext: o,
  onNodeSelected: l,
  selection: u,
  showLabels: f,
}) {
  const h =
    u == null
      ? void 0
      : u
          .data(r.nodes, (d) => d.id)
          .join((d) => {
            var g, v, b, x;
            const S = d.append('g');
            n !== void 0 && S.call(n);
            const A = S.append('circle')
              .classed('node', !0)
              .attr('r', (M) => Ci(t, M))
              .on('contextmenu', (M, T) => {
                hb(M), o(T);
              })
              .on('pointerdown', (M, T) => cdt(M, T, l ?? o))
              .style('fill', (M) => M.color);
            (v = (g = t.modifiers).node) == null || v.call(g, A);
            const L = S.append('text')
              .classed('node__label', !0)
              .attr('dy', '0.33em')
              .style('fill', (M) => (M.label ? M.label.color : null))
              .style('font-size', (M) => (M.label ? M.label.fontSize : null))
              .style('stroke', 'none')
              .text((M) => (M.label ? M.label.text : null));
            return (x = (b = t.modifiers).nodeLabel) == null || x.call(b, L), S;
          });
  return (
    h == null || h.select('.node').classed('focused', (d) => d.isFocused),
    h == null || h.select('.node__label').attr('opacity', f ? 1 : 0),
    h
  );
}
const ldt = 500;
function cdt(t, n, r) {
  if (t.button !== void 0 && t.button !== 0) return;
  const o = n.lastInteractionTimestamp,
    l = Date.now();
  if (o === void 0 || l - o > ldt) {
    n.lastInteractionTimestamp = l;
    return;
  }
  (n.lastInteractionTimestamp = void 0), r(n);
}
function udt(t) {
  t == null || t.attr('transform', (n) => `translate(${n.x ?? 0},${n.y ?? 0})`);
}
function fdt({ center: t, config: n, graph: r, onTick: o }) {
  var l, u;
  const f = xht(r.nodes),
    h = n.simulation.forces.centering;
  if (h && h.enabled) {
    const b = h.strength;
    f.force('x', Sht(() => t().x).strength(b)).force(
      'y',
      kht(() => t().y).strength(b),
    );
  }
  const d = n.simulation.forces.charge;
  d && d.enabled && f.force('charge', _ht().strength(d.strength));
  const g = n.simulation.forces.collision;
  g &&
    g.enabled &&
    f.force(
      'collision',
      fht().radius((b) => g.radiusMultiplier * Ci(n, b)),
    );
  const v = n.simulation.forces.link;
  return (
    v &&
      v.enabled &&
      f.force(
        'link',
        dht(r.links)
          .id((b) => b.id)
          .distance(n.simulation.forces.link.length)
          .strength(v.strength),
      ),
    f.on('tick', () => o()),
    (u = (l = n.modifiers).simulation) == null || u.call(l, f),
    f
  );
}
function hdt({ canvasContainer: t, config: n, min: r, max: o, onZoom: l }) {
  var u, f;
  const h = Gft()
    .scaleExtent([r, o])
    .filter((d) => {
      var g;
      return (
        d.button === 0 || ((g = d.touches) == null ? void 0 : g.length) >= 2
      );
    })
    .on('start', () => t().classed('grabbed', !0))
    .on('zoom', (d) => l(d))
    .on('end', () => t().classed('grabbed', !1));
  return (f = (u = n.modifiers).zoom) == null || f.call(u, h), h;
}
class ddt {
  constructor(n, r, o) {
    if (
      (Pe(this, 'nodeTypes'),
      Pe(this, '_nodeTypeFilter'),
      Pe(this, '_includeUnlinked', !0),
      Pe(this, '_linkFilter', () => !0),
      Pe(this, '_showLinkLabels', !0),
      Pe(this, '_showNodeLabels', !0),
      Pe(this, 'filteredGraph'),
      Pe(this, 'width', 0),
      Pe(this, 'height', 0),
      Pe(this, 'simulation'),
      Pe(this, 'canvas'),
      Pe(this, 'linkSelection'),
      Pe(this, 'nodeSelection'),
      Pe(this, 'markerSelection'),
      Pe(this, 'zoom'),
      Pe(this, 'drag'),
      Pe(this, 'xOffset', 0),
      Pe(this, 'yOffset', 0),
      Pe(this, 'scale'),
      Pe(this, 'focusedNode'),
      Pe(this, 'resizeObserver'),
      (this.container = n),
      (this.graph = r),
      (this.config = o),
      (this.scale = o.zoom.initial),
      this.resetView(),
      this.graph.nodes.forEach((l) => {
        const [u, f] = o.positionInitializer(
          l,
          this.effectiveWidth,
          this.effectiveHeight,
        );
        (l.x = l.x ?? u), (l.y = l.y ?? f);
      }),
      (this.nodeTypes = [...new Set(r.nodes.map((l) => l.type))]),
      (this._nodeTypeFilter = [...this.nodeTypes]),
      o.initial)
    ) {
      const {
        includeUnlinked: l,
        nodeTypeFilter: u,
        linkFilter: f,
        showLinkLabels: h,
        showNodeLabels: d,
      } = o.initial;
      (this._includeUnlinked = l ?? this._includeUnlinked),
        (this._showLinkLabels = h ?? this._showLinkLabels),
        (this._showNodeLabels = d ?? this._showNodeLabels),
        (this._nodeTypeFilter = u ?? this._nodeTypeFilter),
        (this._linkFilter = f ?? this._linkFilter);
    }
    this.filterGraph(void 0),
      this.initGraph(),
      this.restart(o.simulation.alphas.initialize),
      o.autoResize &&
        ((this.resizeObserver = new ResizeObserver(zht(() => this.resize()))),
        this.resizeObserver.observe(this.container));
  }
  get nodeTypeFilter() {
    return this._nodeTypeFilter;
  }
  get includeUnlinked() {
    return this._includeUnlinked;
  }
  set includeUnlinked(n) {
    (this._includeUnlinked = n), this.filterGraph(this.focusedNode);
    const { include: r, exclude: o } =
        this.config.simulation.alphas.filter.unlinked,
      l = n ? r : o;
    this.restart(l);
  }
  set linkFilter(n) {
    (this._linkFilter = n),
      this.filterGraph(this.focusedNode),
      this.restart(this.config.simulation.alphas.filter.link);
  }
  get linkFilter() {
    return this._linkFilter;
  }
  get showNodeLabels() {
    return this._showNodeLabels;
  }
  set showNodeLabels(n) {
    this._showNodeLabels = n;
    const { hide: r, show: o } = this.config.simulation.alphas.labels.nodes,
      l = n ? o : r;
    this.restart(l);
  }
  get showLinkLabels() {
    return this._showLinkLabels;
  }
  set showLinkLabels(n) {
    this._showLinkLabels = n;
    const { hide: r, show: o } = this.config.simulation.alphas.labels.links,
      l = n ? o : r;
    this.restart(l);
  }
  get effectiveWidth() {
    return this.width / this.scale;
  }
  get effectiveHeight() {
    return this.height / this.scale;
  }
  get effectiveCenter() {
    return pn
      .of([this.width, this.height])
      .divide(2)
      .subtract(pn.of([this.xOffset, this.yOffset]))
      .divide(this.scale);
  }
  resize() {
    const n = this.width,
      r = this.height,
      o = this.container.getBoundingClientRect().width,
      l = this.container.getBoundingClientRect().height,
      u = n.toFixed() !== o.toFixed(),
      f = r.toFixed() !== l.toFixed();
    if (!u && !f) return;
    (this.width = this.container.getBoundingClientRect().width),
      (this.height = this.container.getBoundingClientRect().height);
    const h = this.config.simulation.alphas.resize;
    this.restart(
      db(h) ? h : h({ oldWidth: n, oldHeight: r, newWidth: o, newHeight: l }),
    );
  }
  restart(n) {
    var r;
    (this.markerSelection = rdt({
      config: this.config,
      graph: this.filteredGraph,
      selection: this.markerSelection,
    })),
      (this.linkSelection = Jht({
        config: this.config,
        graph: this.filteredGraph,
        selection: this.linkSelection,
        showLabels: this._showLinkLabels,
      })),
      (this.nodeSelection = adt({
        config: this.config,
        drag: this.drag,
        graph: this.filteredGraph,
        onNodeContext: (o) => this.toggleNodeFocus(o),
        onNodeSelected: this.config.callbacks.nodeClicked,
        selection: this.nodeSelection,
        showLabels: this._showNodeLabels,
      })),
      (r = this.simulation) == null || r.stop(),
      (this.simulation = fdt({
        center: () => this.effectiveCenter,
        config: this.config,
        graph: this.filteredGraph,
        onTick: () => this.onTick(),
      })
        .alpha(n)
        .restart());
  }
  filterNodesByType(n, r) {
    n
      ? this._nodeTypeFilter.push(r)
      : (this._nodeTypeFilter = this._nodeTypeFilter.filter((o) => o !== r)),
      this.filterGraph(this.focusedNode),
      this.restart(this.config.simulation.alphas.filter.type);
  }
  shutdown() {
    var n, r;
    this.focusedNode !== void 0 &&
      ((this.focusedNode.isFocused = !1), (this.focusedNode = void 0)),
      (n = this.resizeObserver) == null || n.unobserve(this.container),
      (r = this.simulation) == null || r.stop();
  }
  initGraph() {
    (this.zoom = hdt({
      config: this.config,
      canvasContainer: () => Sn(this.container).select('svg'),
      min: this.config.zoom.min,
      max: this.config.zoom.max,
      onZoom: (n) => this.onZoom(n),
    })),
      (this.canvas = Fht({
        applyZoom: this.scale !== 1,
        container: Sn(this.container),
        offset: [this.xOffset, this.yOffset],
        scale: this.scale,
        zoom: this.zoom,
      })),
      this.applyZoom(),
      (this.linkSelection = Zht(this.canvas)),
      (this.nodeSelection = sdt(this.canvas)),
      (this.markerSelection = ndt(this.canvas)),
      (this.drag = qht({
        config: this.config,
        onDragStart: () => {
          var n;
          return (n = this.simulation) == null
            ? void 0
            : n.alphaTarget(this.config.simulation.alphas.drag.start).restart();
        },
        onDragEnd: () => {
          var n;
          return (n = this.simulation) == null
            ? void 0
            : n.alphaTarget(this.config.simulation.alphas.drag.end).restart();
        },
      }));
  }
  onTick() {
    udt(this.nodeSelection),
      Qht({
        config: this.config,
        center: this.effectiveCenter,
        graph: this.filteredGraph,
        selection: this.linkSelection,
      });
  }
  resetView() {
    var n;
    (n = this.simulation) == null || n.stop(),
      Sn(this.container).selectChildren().remove(),
      (this.zoom = void 0),
      (this.canvas = void 0),
      (this.linkSelection = void 0),
      (this.nodeSelection = void 0),
      (this.markerSelection = void 0),
      (this.simulation = void 0),
      (this.width = this.container.getBoundingClientRect().width),
      (this.height = this.container.getBoundingClientRect().height);
  }
  onZoom(n) {
    var r, o, l;
    (this.xOffset = n.transform.x),
      (this.yOffset = n.transform.y),
      (this.scale = n.transform.k),
      this.applyZoom(),
      (o = (r = this.config.hooks).afterZoom) == null ||
        o.call(r, this.scale, this.xOffset, this.yOffset),
      (l = this.simulation) == null || l.restart();
  }
  applyZoom() {
    Iht({
      canvas: this.canvas,
      scale: this.scale,
      xOffset: this.xOffset,
      yOffset: this.yOffset,
    });
  }
  toggleNodeFocus(n) {
    n.isFocused
      ? (this.filterGraph(void 0),
        this.restart(this.config.simulation.alphas.focus.release(n)))
      : this.focusNode(n);
  }
  focusNode(n) {
    this.filterGraph(n),
      this.restart(this.config.simulation.alphas.focus.acquire(n));
  }
  filterGraph(n) {
    this.focusedNode !== void 0 &&
      ((this.focusedNode.isFocused = !1), (this.focusedNode = void 0)),
      n !== void 0 &&
        this._nodeTypeFilter.includes(n.type) &&
        ((n.isFocused = !0), (this.focusedNode = n)),
      (this.filteredGraph = Hht({
        graph: this.graph,
        filter: this._nodeTypeFilter,
        focusedNode: this.focusedNode,
        includeUnlinked: this._includeUnlinked,
        linkFilter: this._linkFilter,
      }));
  }
}
function em({ nodes: t, links: n }) {
  return { nodes: t ?? [], links: n ?? [] };
}
function pdt(t) {
  return { ...t };
}
function xb(t) {
  return { ...t, isFocused: !1, lastInteractionTimestamp: void 0 };
}
const gdt = { 'h-full': '', 'min-h-75': '', 'flex-1': '', overflow: 'hidden' },
  vdt = { flex: '', 'items-center': '', 'gap-4': '', 'px-3': '', 'py-2': '' },
  mdt = ['id', 'checked', 'onChange'],
  ydt = ['for'],
  bdt = lt('div', { 'flex-auto': '' }, null, -1),
  wdt = ne({
    __name: 'ViewModuleGraph',
    props: { graph: null },
    setup(t) {
      const n = t,
        { graph: r } = _1(n),
        o = Vt(),
        l = Vt(!1),
        u = Vt(),
        f = Vt();
      fh(
        () => {
          l.value === !1 && setTimeout(() => (u.value = void 0), 300);
        },
        { flush: 'post' },
      ),
        ls(() => {
          g();
        }),
        dh(() => {
          var b;
          (b = f.value) == null || b.shutdown();
        }),
        Re(r, g);
      function h(b, x) {
        var S;
        (S = f.value) == null || S.filterNodesByType(x, b);
      }
      function d(b) {
        (u.value = b), (l.value = !0);
      }
      function g() {
        var b;
        (b = f.value) == null || b.shutdown(),
          !(!r.value || !o.value) &&
            (f.value = new ddt(
              o.value,
              r.value,
              Rht({
                nodeRadius: 10,
                autoResize: !0,
                simulation: {
                  alphas: {
                    initialize: 1,
                    resize: ({ newHeight: x, newWidth: S }) =>
                      x === 0 && S === 0 ? 0 : 0.25,
                  },
                  forces: {
                    collision: { radiusMultiplier: 10 },
                    link: { length: 240 },
                  },
                },
                marker: gb.Arrow(2),
                modifiers: { node: v },
                positionInitializer:
                  r.value.nodes.length > 1 ? Bf.Randomized : Bf.Centered,
                zoom: { min: 0.5, max: 2 },
              }),
            ));
      }
      function v(b) {
        if (yr) return;
        const x = (M) => M.button === 0;
        let S = 0,
          A = 0,
          L = 0;
        b.on('pointerdown', (M, T) => {
          T.type !== 'external' &&
            (!T.x || !T.y || !x(M) || ((S = T.x), (A = T.y), (L = Date.now())));
        }).on('pointerup', (M, T) => {
          if (
            T.type === 'external' ||
            !T.x ||
            !T.y ||
            !x(M) ||
            Date.now() - L > 500
          )
            return;
          const E = T.x - S,
            $ = T.y - A;
          E ** 2 + $ ** 2 < 100 && d(T.id);
        });
      }
      return (b, x) => {
        var T;
        const S = us,
          A = plt,
          L = nlt,
          M = ao('tooltip');
        return (
          at(),
          Lt('div', gdt, [
            lt('div', null, [
              lt('div', vdt, [
                (at(!0),
                Lt(
                  ue,
                  null,
                  Zn((T = U(f)) == null ? void 0 : T.nodeTypes.sort(), (E) => {
                    var $;
                    return (
                      at(),
                      Lt(
                        'div',
                        {
                          key: E,
                          flex: '~ gap-1',
                          'items-center': '',
                          'select-none': '',
                        },
                        [
                          lt(
                            'input',
                            {
                              id: `type-${E}`,
                              type: 'checkbox',
                              checked:
                                ($ = U(f)) == null
                                  ? void 0
                                  : $.nodeTypeFilter.includes(E),
                              onChange: (O) => h(E, O.target.checked),
                            },
                            null,
                            40,
                            mdt,
                          ),
                          lt(
                            'label',
                            {
                              'font-light': '',
                              'text-sm': '',
                              'ws-nowrap': '',
                              'overflow-hidden': '',
                              capitalize: '',
                              truncate: '',
                              for: `type-${E}`,
                              'border-b-2': '',
                              style: Cn({
                                'border-color': `var(--color-node-${E})`,
                              }),
                            },
                            Jt(E) + ' Modules',
                            13,
                            ydt,
                          ),
                        ],
                      )
                    );
                  }),
                  128,
                )),
                bdt,
                lt('div', null, [
                  rn(It(S, { icon: 'i-carbon-reset', onClick: g }, null, 512), [
                    [M, 'Reset', void 0, { bottom: !0 }],
                  ]),
                ]),
              ]),
            ]),
            lt('div', { ref_key: 'el', ref: o }, null, 512),
            It(
              L,
              {
                modelValue: U(l),
                'onUpdate:modelValue':
                  x[1] || (x[1] = (E) => (Ae(l) ? (l.value = E) : null)),
                direction: 'right',
              },
              {
                default: Xt(() => [
                  U(u)
                    ? (at(),
                      Yt(
                        F1,
                        { key: 0 },
                        {
                          default: Xt(() => [
                            It(
                              A,
                              {
                                id: U(u),
                                onClose: x[0] || (x[0] = (E) => (l.value = !1)),
                              },
                              null,
                              8,
                              ['id'],
                            ),
                          ]),
                          _: 1,
                        },
                      ))
                    : ee('', !0),
                ]),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
          ])
        );
      };
    },
  });
const xdt = {
    key: 0,
    'text-green-500': '',
    'flex-shrink-0': '',
    'i-carbon:checkmark': '',
  },
  _dt = {
    key: 1,
    'text-red-500': '',
    'flex-shrink-0': '',
    'i-carbon:compare': '',
  },
  Sdt = {
    key: 2,
    'text-red-500': '',
    'flex-shrink-0': '',
    'i-carbon:close': '',
  },
  kdt = {
    key: 3,
    'text-gray-500': '',
    'flex-shrink-0': '',
    'i-carbon:document-blank': '',
  },
  Cdt = {
    key: 4,
    'text-gray-500': '',
    'flex-shrink-0': '',
    'i-carbon:redo': '',
    'rotate-90': '',
  },
  Tdt = {
    key: 5,
    'text-yellow-500': '',
    'flex-shrink-0': '',
    'i-carbon:circle-dash': '',
    'animate-spin': '',
  },
  Bh = ne({
    __name: 'StatusIcon',
    props: { task: null },
    setup(t) {
      return (n, r) => {
        var l, u, f;
        const o = ao('tooltip');
        return ((l = t.task.result) == null ? void 0 : l.state) === 'pass'
          ? (at(), Lt('div', xdt))
          : U(Pc)(t.task)
          ? rn((at(), Lt('div', _dt, null, 512)), [
              [o, 'Contains failed snapshot', void 0, { right: !0 }],
            ])
          : ((u = t.task.result) == null ? void 0 : u.state) === 'fail'
          ? (at(), Lt('div', Sdt))
          : t.task.mode === 'todo'
          ? rn((at(), Lt('div', kdt, null, 512)), [
              [o, 'Todo', void 0, { right: !0 }],
            ])
          : t.task.mode === 'skip' ||
            ((f = t.task.result) == null ? void 0 : f.state) === 'skip'
          ? rn((at(), Lt('div', Cdt, null, 512)), [
              [o, 'Skipped', void 0, { right: !0 }],
            ])
          : (at(), Lt('div', Tdt));
      };
    },
  });
function Edt(t) {
  const n = new Map(),
    r = new Map(),
    o = [];
  for (;;) {
    let l = 0;
    if (
      (t.forEach((u, f) => {
        var v;
        const { splits: h, finished: d } = u;
        if (d) {
          l++;
          const { raw: b, candidate: x } = u;
          n.set(b, x);
          return;
        }
        if (h.length === 0) {
          u.finished = !0;
          return;
        }
        const g = h[0];
        r.has(g)
          ? ((u.candidate += u.candidate === '' ? g : `/${g}`),
            (v = r.get(g)) == null || v.push(f),
            h.shift())
          : (r.set(g, [f]), o.push(f));
      }),
      o.forEach((u) => {
        const f = t[u],
          h = f.splits.shift();
        f.candidate += f.candidate === '' ? h : `/${h}`;
      }),
      r.forEach((u) => {
        if (u.length === 1) {
          const f = u[0];
          t[f].finished = !0;
        }
      }),
      r.clear(),
      (o.length = 0),
      l === t.length)
    )
      break;
  }
  return n;
}
function Ldt(t) {
  let n = t;
  n.includes('/node_modules/') && (n = t.split(/\/node_modules\//g).pop());
  const r = n.split(/\//g);
  return { raw: n, splits: r, candidate: '', finished: !1, id: t };
}
function Adt(t) {
  const n = t.map((o) => Ldt(o)),
    r = Edt(n);
  return n.map(({ raw: o, id: l }) =>
    xb({
      color: 'var(--color-node-external)',
      label: {
        color: 'var(--color-node-external)',
        fontSize: '0.875rem',
        text: r.get(o) ?? '',
      },
      isFocused: !1,
      id: l,
      type: 'external',
    }),
  );
}
function Mdt(t, n) {
  return xb({
    color: n ? 'var(--color-node-root)' : 'var(--color-node-inline)',
    label: {
      color: n ? 'var(--color-node-root)' : 'var(--color-node-inline)',
      fontSize: '0.875rem',
      text: t.split(/\//g).pop(),
    },
    isFocused: !1,
    id: t,
    type: 'inline',
  });
}
function Ndt(t, n) {
  if (!t) return em({});
  const r = Adt(t.externalized),
    o = t.inlined.map((h) => Mdt(h, h === n)) ?? [],
    l = [...r, ...o],
    u = Object.fromEntries(l.map((h) => [h.id, h])),
    f = Object.entries(t.graph).flatMap(([h, d]) =>
      d
        .map((g) => {
          const v = u[h],
            b = u[g];
          if (!(v === void 0 || b === void 0))
            return pdt({
              source: v,
              target: b,
              color: 'var(--color-link)',
              label: !1,
            });
        })
        .filter((g) => g !== void 0),
    );
  return em({ nodes: l, links: f });
}
const Pdt = {
    key: 0,
    flex: '',
    'flex-col': '',
    'h-full': '',
    'max-h-full': '',
    'overflow-hidden': '',
    'data-testid': 'file-detail',
  },
  Odt = {
    p: '2',
    'h-10': '',
    flex: '~ gap-2',
    'items-center': '',
    'bg-header': '',
    border: 'b base',
  },
  $dt = {
    'flex-1': '',
    'font-light': '',
    'op-50': '',
    'ws-nowrap': '',
    truncate: '',
    'text-sm': '',
  },
  Ddt = { class: 'flex text-lg' },
  Rdt = {
    flex: '~',
    'items-center': '',
    'bg-header': '',
    border: 'b-2 base',
    'text-sm': '',
    'h-41px': '',
  },
  zdt = { flex: '', 'flex-col': '', 'flex-1': '', overflow: 'hidden' },
  Fdt = { key: 0, 'flex-1': '' },
  Idt = ne({
    __name: 'FileDetails',
    setup(t) {
      const n = Vt({ externalized: [], graph: {}, inlined: [] }),
        r = Vt({ nodes: [], links: [] }),
        o = Vt(!1),
        l = Vt(!1);
      gT(
        Le,
        async (g, v) => {
          g &&
            g.filepath !== (v == null ? void 0 : v.filepath) &&
            ((n.value = await je.rpc.getModuleGraph(g.filepath)),
            (r.value = Ndt(n.value, g.filepath)));
        },
        { debounce: 100, immediate: !0 },
      );
      function u() {
        var v;
        const g = (v = Le.value) == null ? void 0 : v.filepath;
        g && fetch(`/__open-in-editor?file=${encodeURIComponent(g)}`);
      }
      function f(g) {
        g === 'graph' && (l.value = !0), (fr.value = g);
      }
      const h = xt(() => {
        var g;
        return (
          ((g = vy.value) == null
            ? void 0
            : g.reduce((v, { size: b }) => v + b, 0)) ?? 0
        );
      });
      function d(g) {
        o.value = g;
      }
      return (g, v) => {
        var E, $;
        const b = Bh,
          x = us,
          S = wdt,
          A = elt,
          L = Kat,
          M = qat,
          T = ao('tooltip');
        return U(Le)
          ? (at(),
            Lt('div', Pdt, [
              lt('div', null, [
                lt('div', Odt, [
                  It(b, { task: U(Le) }, null, 8, ['task']),
                  lt(
                    'div',
                    $dt,
                    Jt((E = U(Le)) == null ? void 0 : E.filepath),
                    1,
                  ),
                  lt('div', Ddt, [
                    U(yr)
                      ? ee('', !0)
                      : rn(
                          (at(),
                          Yt(
                            x,
                            {
                              key: 0,
                              title: 'Open in editor',
                              icon: 'i-carbon-launch',
                              disabled: !(($ = U(Le)) != null && $.filepath),
                              onClick: u,
                            },
                            null,
                            8,
                            ['disabled'],
                          )),
                          [[T, 'Open in editor', void 0, { bottom: !0 }]],
                        ),
                  ]),
                ]),
                lt('div', Rdt, [
                  lt(
                    'button',
                    {
                      'tab-button': '',
                      class: ve({ 'tab-button-active': U(fr) == null }),
                      'data-testid': 'btn-report',
                      onClick: v[0] || (v[0] = (O) => f(null)),
                    },
                    ' Report ',
                    2,
                  ),
                  lt(
                    'button',
                    {
                      'tab-button': '',
                      'data-testid': 'btn-graph',
                      class: ve({ 'tab-button-active': U(fr) === 'graph' }),
                      onClick: v[1] || (v[1] = (O) => f('graph')),
                    },
                    ' Module Graph ',
                    2,
                  ),
                  U(yr)
                    ? ee('', !0)
                    : (at(),
                      Lt(
                        'button',
                        {
                          key: 0,
                          'tab-button': '',
                          'data-testid': 'btn-code',
                          class: ve({
                            'tab-button-active': U(fr) === 'editor',
                          }),
                          onClick: v[2] || (v[2] = (O) => f('editor')),
                        },
                        Jt(U(o) ? '* ' : '') + 'Code ',
                        3,
                      )),
                  lt(
                    'button',
                    {
                      'tab-button': '',
                      'data-testid': 'btn-console',
                      class: ve({
                        'tab-button-active': U(fr) === 'console',
                        op20: U(fr) !== 'console' && U(h) === 0,
                      }),
                      onClick: v[3] || (v[3] = (O) => f('console')),
                    },
                    ' Console (' + Jt(U(h)) + ') ',
                    3,
                  ),
                ]),
              ]),
              lt('div', zdt, [
                U(l)
                  ? (at(),
                    Lt('div', Fdt, [
                      rn(
                        It(
                          S,
                          { graph: U(r), 'data-testid': 'graph' },
                          null,
                          8,
                          ['graph'],
                        ),
                        [[yf, U(fr) === 'graph']],
                      ),
                    ]))
                  : ee('', !0),
                U(fr) === 'editor'
                  ? (at(),
                    Yt(
                      A,
                      {
                        key: U(Le).filepath,
                        file: U(Le),
                        'data-testid': 'editor',
                        onDraft: d,
                      },
                      null,
                      8,
                      ['file'],
                    ))
                  : U(fr) === 'console'
                  ? (at(),
                    Yt(
                      L,
                      { key: 2, file: U(Le), 'data-testid': 'console' },
                      null,
                      8,
                      ['file'],
                    ))
                  : U(fr)
                  ? ee('', !0)
                  : (at(),
                    Yt(
                      M,
                      { key: 3, file: U(Le), 'data-testid': 'report' },
                      null,
                      8,
                      ['file'],
                    )),
              ]),
            ]))
          : ee('', !0);
      };
    },
  }),
  qdt = ['open'],
  Hdt = lt(
    'div',
    { 'flex-1': '', 'h-1px': '', border: 'base b', op80: '' },
    null,
    -1,
  ),
  Bdt = lt(
    'div',
    { 'flex-1': '', 'h-1px': '', border: 'base b', op80: '' },
    null,
    -1,
  ),
  Wdt = ne({
    __name: 'DetailsPanel',
    props: { color: null },
    setup(t) {
      const n = Vt(!0);
      return (r, o) => (
        at(),
        Lt(
          'div',
          {
            open: U(n),
            class: 'details-panel',
            onToggle: o[0] || (o[0] = (l) => (n.value = l.target.open)),
          },
          [
            lt(
              'div',
              {
                p: 'y1',
                'text-sm': '',
                'bg-base': '',
                'items-center': '',
                'z-5': '',
                'gap-2': '',
                class: ve(t.color),
                'w-full': '',
                flex: '',
                'select-none': '',
                sticky: '',
                top: '-1',
              },
              [Hdt, tr(r.$slots, 'summary', { open: U(n) }), Bdt],
              2,
            ),
            tr(r.$slots, 'default'),
          ],
          40,
          qdt,
        )
      );
    },
  });
const Udt = {
    key: 0,
    flex: '~ row',
    'items-center': '',
    p: 'x-2 y-1',
    'border-rounded': '',
    'cursor-pointer': '',
    hover: 'bg-active',
  },
  jdt = ['text'],
  Gdt = { 'text-sm': '', truncate: '', 'font-light': '' },
  Vdt = { key: 0, text: 'xs', op20: '', style: { 'white-space': 'nowrap' } },
  Kdt = ne({
    __name: 'TaskItem',
    props: { task: null },
    setup(t) {
      const n = t,
        r = xt(() => {
          const { result: o } = n.task;
          return o && Math.round(o.duration || 0);
        });
      return (o, l) => {
        var f, h;
        const u = Bh;
        return t.task
          ? (at(),
            Lt('div', Udt, [
              It(u, { task: t.task, 'mr-2': '' }, null, 8, ['task']),
              lt(
                'div',
                {
                  flex: '',
                  'items-end': '',
                  'gap-2': '',
                  text:
                    ((h = (f = t.task) == null ? void 0 : f.result) == null
                      ? void 0
                      : h.state) === 'fail'
                      ? 'red-500'
                      : '',
                },
                [
                  lt('span', Gdt, Jt(t.task.name), 1),
                  typeof U(r) == 'number'
                    ? (at(),
                      Lt('span', Vdt, Jt(U(r) > 0 ? U(r) : '< 1') + 'ms ', 1))
                    : ee('', !0),
                ],
                8,
                jdt,
              ),
            ]))
          : ee('', !0);
      };
    },
  });
function Xdt(t) {
  return Object.hasOwnProperty.call(t, 'tasks');
}
function _b(t, n) {
  return typeof t != 'string' || typeof n != 'string'
    ? !1
    : t.toLowerCase().includes(n.toLowerCase());
}
const Ydt = { key: 1 },
  Zdt = { inheritAttrs: !1 },
  Jdt = ne({
    ...Zdt,
    __name: 'TaskTree',
    props: {
      task: null,
      indent: { default: 0 },
      nested: { type: Boolean, default: !1 },
      search: null,
      onItemClick: null,
    },
    setup(t) {
      return (n, r) => {
        const o = Kdt,
          l = eo('TaskTree', !0);
        return (
          at(),
          Lt(
            ue,
            null,
            [
              !t.search || U(_b)(t.task.name, t.search)
                ? (at(),
                  Yt(
                    o,
                    _i({ key: 0 }, n.$attrs, {
                      task: t.task,
                      style: { paddingLeft: `${t.indent * 0.75 + 1}rem` },
                      onClick:
                        r[0] ||
                        (r[0] = (u) => t.onItemClick && t.onItemClick(t.task)),
                    }),
                    null,
                    16,
                    ['task', 'style'],
                  ))
                : ee('', !0),
              t.nested && t.task.type === 'suite' && t.task.tasks.length
                ? (at(),
                  Lt('div', Ydt, [
                    (at(!0),
                    Lt(
                      ue,
                      null,
                      Zn(
                        t.task.tasks,
                        (u) => (
                          at(),
                          Yt(
                            l,
                            {
                              key: u.id,
                              task: u,
                              nested: t.nested,
                              indent: t.indent + 1,
                              search: t.search,
                              'on-item-click': t.onItemClick,
                            },
                            null,
                            8,
                            [
                              'task',
                              'nested',
                              'indent',
                              'search',
                              'on-item-click',
                            ],
                          )
                        ),
                      ),
                      128,
                    )),
                  ]))
                : ee('', !0),
            ],
            64,
          )
        );
      };
    },
  }),
  Qdt = { h: 'full', flex: '~ col' },
  tpt = {
    p: '2',
    'h-10': '',
    flex: '~ gap-2',
    'items-center': '',
    'bg-header': '',
    border: 'b base',
  },
  ept = {
    p: 'l3 y2 r2',
    flex: '~ gap-2',
    'items-center': '',
    'bg-header': '',
    border: 'b-2 base',
  },
  npt = lt('div', { class: 'i-carbon:search', 'flex-shrink-0': '' }, null, -1),
  rpt = ['op'],
  ipt = { class: 'scrolls', 'flex-auto': '', 'py-1': '' },
  opt = { 'text-red5': '' },
  spt = { 'text-yellow5': '' },
  apt = { 'text-green5': '' },
  lpt = { class: 'text-purple5:50' },
  cpt = {
    key: 2,
    flex: '~ col',
    'items-center': '',
    p: 'x4 y4',
    'font-light': '',
  },
  upt = lt('div', { op30: '' }, ' No matched test ', -1),
  fpt = { inheritAttrs: !1 },
  Sb = ne({
    ...fpt,
    __name: 'TasksList',
    props: {
      tasks: null,
      indent: { default: 0 },
      nested: { type: Boolean, default: !1 },
      groupByType: { type: Boolean, default: !1 },
      onItemClick: null,
    },
    emits: ['run'],
    setup(t, { emit: n }) {
      const r = t,
        o = Vt(''),
        l = Vt(),
        u = xt(() => o.value.trim() !== '');
      function f(M, T) {
        let E = !1;
        for (let $ = 0; $ < M.length; $++) {
          const O = M[$];
          if (_b(O.name, T)) {
            E = !0;
            break;
          }
          if (Xdt(O) && O.tasks && ((E = f(O.tasks, T)), E)) break;
        }
        return E;
      }
      const h = xt(() =>
          o.value.trim() ? r.tasks.filter((M) => f([M], o.value)) : r.tasks,
        ),
        d = xt(() =>
          u.value ? h.value.map((M) => tc(M.id)).filter(Boolean) : [],
        ),
        g = xt(() =>
          h.value.filter((M) => {
            var T;
            return ((T = M.result) == null ? void 0 : T.state) === 'fail';
          }),
        ),
        v = xt(() =>
          h.value.filter((M) => {
            var T;
            return ((T = M.result) == null ? void 0 : T.state) === 'pass';
          }),
        ),
        b = xt(() =>
          h.value.filter((M) => M.mode === 'skip' || M.mode === 'todo'),
        ),
        x = xt(() =>
          h.value.filter(
            (M) =>
              !g.value.includes(M) &&
              !v.value.includes(M) &&
              !b.value.includes(M),
          ),
        ),
        S = iT(x, 250);
      function A(M) {
        var T;
        (o.value = ''), M && ((T = l.value) == null || T.focus());
      }
      const L = xt(() => o.value === '');
      return (M, T) => {
        const E = us,
          $ = Jdt,
          O = Wdt,
          G = ao('tooltip');
        return (
          at(),
          Lt('div', Qdt, [
            lt('div', null, [
              lt('div', tpt, [
                tr(M.$slots, 'header', { filteredTests: U(u) ? U(d) : void 0 }),
              ]),
              lt('div', ept, [
                npt,
                rn(
                  lt(
                    'input',
                    {
                      ref_key: 'searchBox',
                      ref: l,
                      'onUpdate:modelValue':
                        T[0] || (T[0] = (K) => (Ae(o) ? (o.value = K) : null)),
                      placeholder: 'Search...',
                      outline: 'none',
                      bg: 'transparent',
                      font: 'light',
                      text: 'sm',
                      'flex-1': '',
                      'pl-1': '',
                      op: U(o).length ? '100' : '50',
                      onKeydown: [
                        T[1] || (T[1] = mf((K) => A(!1), ['esc'])),
                        T[2] ||
                          (T[2] = mf(
                            (K) => n('run', U(u) ? U(d) : void 0),
                            ['enter'],
                          )),
                      ],
                    },
                    null,
                    40,
                    rpt,
                  ),
                  [[oS, U(o)]],
                ),
                rn(
                  It(
                    E,
                    {
                      disabled: U(L),
                      title: 'Clear search',
                      icon: 'i-carbon:filter-remove',
                      onClickPassive: T[3] || (T[3] = (K) => A(!0)),
                    },
                    null,
                    8,
                    ['disabled'],
                  ),
                  [[G, 'Clear search', void 0, { bottom: !0 }]],
                ),
              ]),
            ]),
            lt('div', ipt, [
              t.groupByType
                ? (at(),
                  Lt(
                    ue,
                    { key: 0 },
                    [
                      U(g).length
                        ? (at(),
                          Yt(
                            O,
                            { key: 0 },
                            {
                              summary: Xt(() => [
                                lt(
                                  'div',
                                  opt,
                                  ' FAIL (' + Jt(U(g).length) + ') ',
                                  1,
                                ),
                              ]),
                              default: Xt(() => [
                                (at(!0),
                                Lt(
                                  ue,
                                  null,
                                  Zn(
                                    U(g),
                                    (K) => (
                                      at(),
                                      Yt(
                                        $,
                                        {
                                          key: K.id,
                                          task: K,
                                          nested: t.nested,
                                          search: U(o),
                                          class: ve(
                                            U(pr) === K.id ? 'bg-active' : '',
                                          ),
                                          'on-item-click': t.onItemClick,
                                        },
                                        null,
                                        8,
                                        [
                                          'task',
                                          'nested',
                                          'search',
                                          'class',
                                          'on-item-click',
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              _: 1,
                            },
                          ))
                        : ee('', !0),
                      U(x).length || U(pa) === 'running'
                        ? (at(),
                          Yt(
                            O,
                            { key: 1 },
                            {
                              summary: Xt(() => [
                                lt(
                                  'div',
                                  spt,
                                  ' RUNNING (' + Jt(U(S).length) + ') ',
                                  1,
                                ),
                              ]),
                              default: Xt(() => [
                                (at(!0),
                                Lt(
                                  ue,
                                  null,
                                  Zn(
                                    U(S),
                                    (K) => (
                                      at(),
                                      Yt(
                                        $,
                                        {
                                          key: K.id,
                                          task: K,
                                          nested: t.nested,
                                          search: U(o),
                                          class: ve(
                                            U(pr) === K.id ? 'bg-active' : '',
                                          ),
                                          'on-item-click': t.onItemClick,
                                        },
                                        null,
                                        8,
                                        [
                                          'task',
                                          'nested',
                                          'search',
                                          'class',
                                          'on-item-click',
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              _: 1,
                            },
                          ))
                        : ee('', !0),
                      U(v).length
                        ? (at(),
                          Yt(
                            O,
                            { key: 2 },
                            {
                              summary: Xt(() => [
                                lt(
                                  'div',
                                  apt,
                                  ' PASS (' + Jt(U(v).length) + ') ',
                                  1,
                                ),
                              ]),
                              default: Xt(() => [
                                (at(!0),
                                Lt(
                                  ue,
                                  null,
                                  Zn(
                                    U(v),
                                    (K) => (
                                      at(),
                                      Yt(
                                        $,
                                        {
                                          key: K.id,
                                          task: K,
                                          nested: t.nested,
                                          search: U(o),
                                          class: ve(
                                            U(pr) === K.id ? 'bg-active' : '',
                                          ),
                                          'on-item-click': t.onItemClick,
                                        },
                                        null,
                                        8,
                                        [
                                          'task',
                                          'nested',
                                          'search',
                                          'class',
                                          'on-item-click',
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              _: 1,
                            },
                          ))
                        : ee('', !0),
                      U(b).length
                        ? (at(),
                          Yt(
                            O,
                            { key: 3 },
                            {
                              summary: Xt(() => [
                                lt(
                                  'div',
                                  lpt,
                                  ' SKIP (' + Jt(U(b).length) + ') ',
                                  1,
                                ),
                              ]),
                              default: Xt(() => [
                                (at(!0),
                                Lt(
                                  ue,
                                  null,
                                  Zn(
                                    U(b),
                                    (K) => (
                                      at(),
                                      Yt(
                                        $,
                                        {
                                          key: K.id,
                                          task: K,
                                          nested: t.nested,
                                          search: U(o),
                                          class: ve(
                                            U(pr) === K.id ? 'bg-active' : '',
                                          ),
                                          'on-item-click': t.onItemClick,
                                        },
                                        null,
                                        8,
                                        [
                                          'task',
                                          'nested',
                                          'search',
                                          'class',
                                          'on-item-click',
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              _: 1,
                            },
                          ))
                        : ee('', !0),
                    ],
                    64,
                  ))
                : (at(!0),
                  Lt(
                    ue,
                    { key: 1 },
                    Zn(
                      U(h),
                      (K) => (
                        at(),
                        Yt(
                          $,
                          {
                            key: K.id,
                            task: K,
                            nested: t.nested,
                            search: U(o),
                            class: ve(U(pr) === K.id ? 'bg-active' : ''),
                            'on-item-click': t.onItemClick,
                          },
                          null,
                          8,
                          [
                            'task',
                            'nested',
                            'search',
                            'class',
                            'on-item-click',
                          ],
                        )
                      ),
                    ),
                    128,
                  )),
              U(u) && U(h).length === 0
                ? (at(),
                  Lt('div', cpt, [
                    upt,
                    lt(
                      'button',
                      {
                        'font-light': '',
                        op: '50 hover:100',
                        'text-sm': '',
                        border: '~ gray-400/50 rounded',
                        p: 'x2 y0.5',
                        m: 't2',
                        onClickPassive: T[4] || (T[4] = (K) => A(!0)),
                      },
                      ' Clear ',
                      32,
                    ),
                  ]))
                : ee('', !0),
            ]),
          ])
        );
      };
    },
  }),
  wa = Vt(),
  Vo = Vt(!0),
  oo = Vt(!1),
  ac = Vt(!0),
  lc = xt(() => {
    var t;
    return (t = Ea.value) == null ? void 0 : t.coverage;
  }),
  jf = xt(() => {
    var t, n, r;
    return (n = (t = Ea.value) == null ? void 0 : t.api) != null && n.port
      ? (r = lc.value) == null
        ? void 0
        : r.enabled
      : !1;
  }),
  zo = xt(() => jf.value && lc.value.reporter.map(([t]) => t).includes('html')),
  hpt = xt(() => {
    if (zo.value) {
      const t = `${window.location.protocol}//${window.location.hostname}:${Ea.value.api.port}`,
        n = lc.value.reportsDirectory.lastIndexOf('/');
      return `${t}/${lc.value.reportsDirectory.slice(n + 1)}/index.html`;
    }
  });
Re(
  pa,
  (t) => {
    ac.value = t === 'running';
  },
  { immediate: !0 },
);
function dpt() {
  const t = pr.value;
  if (t && t.length > 0) {
    const n = tc(t);
    n
      ? ((wa.value = n), (Vo.value = !1), (oo.value = !1))
      : vT(
          () => je.state.getFiles(),
          () => {
            (wa.value = tc(t)), (Vo.value = !1), (oo.value = !1);
          },
        );
  }
  return Vo;
}
function ef(t) {
  (Vo.value = t), (oo.value = !1), t && ((wa.value = void 0), (pr.value = ''));
}
function ppt() {
  (oo.value = !0), (Vo.value = !1), (wa.value = void 0), (pr.value = '');
}
const gpt = { key: 0, 'h-full': '' },
  vpt = {
    'data-testid': 'filenames',
    'font-bold': '',
    'text-sm': '',
    'flex-auto': '',
    'ws-nowrap': '',
    'overflow-hidden': '',
    truncate: '',
  },
  mpt = { class: 'flex text-lg' },
  ypt = ne({
    __name: 'Suites',
    setup(t) {
      const n = xt(() => {
          var u;
          return (u = Le.value) == null ? void 0 : u.name.split(/\//g).pop();
        }),
        r = xt(() => {
          var u, f;
          return (
            ((u = Le.value) == null ? void 0 : u.tasks) &&
            Pc((f = Le.value) == null ? void 0 : f.tasks)
          );
        });
      function o() {
        return Le.value && je.rpc.updateSnapshot(Le.value);
      }
      async function l() {
        zo.value && ((ac.value = !0), await Hr()), await CE();
      }
      return (u, f) => {
        const h = Bh,
          d = us,
          g = Sb,
          v = ao('tooltip');
        return U(Le)
          ? (at(),
            Lt('div', gpt, [
              It(
                g,
                { tasks: U(Le).tasks, nested: !0 },
                {
                  header: Xt(() => [
                    It(h, { 'mx-1': '', task: U(Le) }, null, 8, ['task']),
                    lt('span', vpt, Jt(U(n)), 1),
                    lt('div', mpt, [
                      U(r) && !U(yr)
                        ? rn(
                            (at(),
                            Yt(
                              d,
                              {
                                key: 0,
                                icon: 'i-carbon-result-old',
                                onClick: f[0] || (f[0] = (b) => o()),
                              },
                              null,
                              512,
                            )),
                            [
                              [
                                v,
                                `Update failed snapshot(s) of ${U(Le).name}`,
                                void 0,
                                { bottom: !0 },
                              ],
                            ],
                          )
                        : ee('', !0),
                      U(yr)
                        ? ee('', !0)
                        : rn(
                            (at(),
                            Yt(
                              d,
                              {
                                key: 1,
                                icon: 'i-carbon-play',
                                onClick: f[1] || (f[1] = (b) => l()),
                              },
                              null,
                              512,
                            )),
                            [[v, 'Rerun file', void 0, { bottom: !0 }]],
                          ),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ['tasks'],
              ),
            ]))
          : ee('', !0);
      };
    },
  }),
  bpt = { h: 'full', flex: '~ col' },
  wpt = lt(
    'div',
    {
      p: '3',
      'h-10': '',
      flex: '~ gap-2',
      'items-center': '',
      'bg-header': '',
      border: 'b base',
    },
    [
      lt('div', { class: 'i-carbon:folder-details-reference' }),
      lt(
        'span',
        {
          'pl-1': '',
          'font-bold': '',
          'text-sm': '',
          'flex-auto': '',
          'ws-nowrap': '',
          'overflow-hidden': '',
          truncate: '',
        },
        'Coverage',
      ),
    ],
    -1,
  ),
  xpt = { 'flex-auto': '', 'py-1': '', 'bg-white': '' },
  _pt = ['src'],
  Spt = ne({
    __name: 'Coverage',
    props: { src: null },
    setup(t) {
      return (n, r) => (
        at(),
        Lt('div', bpt, [
          wpt,
          lt('div', xpt, [
            lt(
              'iframe',
              { id: 'vitest-ui-coverage', src: t.src },
              null,
              8,
              _pt,
            ),
          ]),
        ])
      );
    },
  });
const cc = xt(() =>
    En.value.filter((t) => {
      var n;
      return ((n = t.result) == null ? void 0 : n.state) === 'fail';
    }),
  ),
  uc = xt(() =>
    En.value.filter((t) => {
      var n;
      return ((n = t.result) == null ? void 0 : n.state) === 'pass';
    }),
  ),
  Wh = xt(() => En.value.filter((t) => t.mode === 'skip' || t.mode === 'todo'));
xt(() =>
  En.value.filter(
    (t) =>
      !cc.value.includes(t) && !uc.value.includes(t) && !Wh.value.includes(t),
  ),
);
xt(() => Wh.value.filter((t) => t.mode === 'skip'));
const nm = xt(() => En.value.filter(Pc));
xt(() => Wh.value.filter((t) => t.mode === 'todo'));
const kpt = xt(() => pa.value === 'idle'),
  Na = xt(() => Uh(En.value)),
  kb = xt(() =>
    Na.value.filter((t) => {
      var n;
      return ((n = t.result) == null ? void 0 : n.state) === 'fail';
    }),
  ),
  Cb = xt(() =>
    Na.value.filter((t) => {
      var n;
      return ((n = t.result) == null ? void 0 : n.state) === 'pass';
    }),
  ),
  Tb = xt(() => Na.value.filter((t) => t.mode === 'skip' || t.mode === 'todo')),
  Cpt = xt(() => Tb.value.filter((t) => t.mode === 'skip')),
  Tpt = xt(() => Tb.value.filter((t) => t.mode === 'todo'));
xt(() => kb.value.length + Cb.value.length);
const Ept = xt(() => {
  const t = Uh(Na.value).reduce((n, r) => {
    var o;
    return (o = r.result) != null && o.duration && (n += r.result.duration), n;
  }, 0);
  return t > 1e3 ? `${(t / 1e3).toFixed(2)}s` : `${Math.round(t)}ms`;
});
function Lpt(t) {
  return (t = t || []), Array.isArray(t) ? t : [t];
}
function rm(t) {
  return t.type === 'test' || t.type === 'benchmark' || t.type === 'typecheck';
}
function Uh(t) {
  return Lpt(t).flatMap((n) =>
    rm(n) ? [n] : n.tasks.flatMap((r) => (rm(r) ? [r] : Uh(r))),
  );
}
const wr = (t) => (Om('data-v-6679a536'), (t = t()), $m(), t),
  Apt = {
    'data-testid': 'test-files-entry',
    grid: '~ cols-[min-content_1fr_min-content]',
    'items-center': '',
    gap: 'x-2 y-3',
    p: 'x4',
    relative: '',
    'font-light': '',
    'w-80': '',
    op80: '',
  },
  Mpt = wr(() => lt('div', { 'i-carbon-document': '' }, null, -1)),
  Npt = wr(() => lt('div', null, 'Files', -1)),
  Ppt = { class: 'number', 'data-testid': 'num-files' },
  Opt = wr(() => lt('div', { 'i-carbon-checkmark': '' }, null, -1)),
  $pt = wr(() => lt('div', null, 'Pass', -1)),
  Dpt = { class: 'number' },
  Rpt = wr(() => lt('div', { 'i-carbon-close': '' }, null, -1)),
  zpt = wr(() => lt('div', null, ' Fail ', -1)),
  Fpt = { class: 'number', 'text-red5': '' },
  Ipt = wr(() => lt('div', { 'i-carbon-compare': '' }, null, -1)),
  qpt = wr(() => lt('div', null, ' Snapshot Fail ', -1)),
  Hpt = { class: 'number', 'text-red5': '' },
  Bpt = wr(() => lt('div', { 'i-carbon-timer': '' }, null, -1)),
  Wpt = wr(() => lt('div', null, 'Time', -1)),
  Upt = { class: 'number', 'data-testid': 'run-time' },
  jpt = ne({
    __name: 'TestFilesEntry',
    setup(t) {
      return (n, r) => (
        at(),
        Lt('div', Apt, [
          Mpt,
          Npt,
          lt('div', Ppt, Jt(U(En).length), 1),
          U(uc).length
            ? (at(),
              Lt(
                ue,
                { key: 0 },
                [Opt, $pt, lt('div', Dpt, Jt(U(uc).length), 1)],
                64,
              ))
            : ee('', !0),
          U(cc).length
            ? (at(),
              Lt(
                ue,
                { key: 1 },
                [Rpt, zpt, lt('div', Fpt, Jt(U(cc).length), 1)],
                64,
              ))
            : ee('', !0),
          U(nm).length
            ? (at(),
              Lt(
                ue,
                { key: 2 },
                [Ipt, qpt, lt('div', Hpt, Jt(U(nm).length), 1)],
                64,
              ))
            : ee('', !0),
          Bpt,
          Wpt,
          lt('div', Upt, Jt(U(Ept)), 1),
        ])
      );
    },
  });
const Gpt = lo(jpt, [['__scopeId', 'data-v-6679a536']]),
  Vpt = { 'p-2': '', 'text-center': '', flex: '' },
  Kpt = { 'text-4xl': '', 'min-w-2em': '' },
  Xpt = { 'text-md': '' },
  Ypt = ne({
    __name: 'DashboardEntry',
    props: { tail: { type: Boolean, default: !1 } },
    setup(t) {
      return (n, r) => (
        at(),
        Lt('div', Vpt, [
          lt('div', null, [
            lt('div', Kpt, [tr(n.$slots, 'body')]),
            lt('div', Xpt, [tr(n.$slots, 'header')]),
          ]),
        ])
      );
    },
  }),
  Zpt = {
    flex: '~ wrap',
    'justify-evenly': '',
    'gap-2': '',
    p: 'x-4',
    relative: '',
  },
  Jpt = ne({
    __name: 'TestsEntry',
    setup(t) {
      const n = xt(() => Na.value.length),
        r = xt(() => Cb.value.length),
        o = xt(() => kb.value.length),
        l = xt(() => Cpt.value.length),
        u = xt(() => Tpt.value.length);
      return (f, h) => {
        const d = Ypt;
        return (
          at(),
          Lt('div', Zpt, [
            It(
              d,
              { 'text-green5': '', 'data-testid': 'pass-entry' },
              {
                header: Xt(() => [dn(' Pass ')]),
                body: Xt(() => [dn(Jt(U(r)), 1)]),
                _: 1,
              },
            ),
            It(
              d,
              {
                class: ve({ 'text-red5': U(o), op50: !U(o) }),
                'data-testid': 'fail-entry',
              },
              {
                header: Xt(() => [dn(' Fail ')]),
                body: Xt(() => [dn(Jt(U(o)), 1)]),
                _: 1,
              },
              8,
              ['class'],
            ),
            U(l)
              ? (at(),
                Yt(
                  d,
                  { key: 0, op50: '', 'data-testid': 'skipped-entry' },
                  {
                    header: Xt(() => [dn(' Skip ')]),
                    body: Xt(() => [dn(Jt(U(l)), 1)]),
                    _: 1,
                  },
                ))
              : ee('', !0),
            U(u)
              ? (at(),
                Yt(
                  d,
                  { key: 1, op50: '', 'data-testid': 'todo-entry' },
                  {
                    header: Xt(() => [dn(' Todo ')]),
                    body: Xt(() => [dn(Jt(U(u)), 1)]),
                    _: 1,
                  },
                ))
              : ee('', !0),
            It(
              d,
              { tail: !0, 'data-testid': 'total-entry' },
              {
                header: Xt(() => [dn(' Total ')]),
                body: Xt(() => [dn(Jt(U(n)), 1)]),
                _: 1,
              },
            ),
          ])
        );
      };
    },
  }),
  Qpt = {},
  tgt = {
    'gap-0': '',
    flex: '~ col gap-4',
    'h-full': '',
    'justify-center': '',
    'items-center': '',
  },
  egt = { 'aria-labelledby': 'tests', m: 'y-4 x-2' };
function ngt(t, n) {
  const r = Jpt,
    o = Gpt;
  return at(), Lt('div', tgt, [lt('section', egt, [It(r)]), It(o)]);
}
const rgt = lo(Qpt, [['render', ngt]]),
  igt = {},
  ogt = { h: 'full', flex: '~ col' },
  sgt = lt(
    'div',
    {
      p: '3',
      'h-10': '',
      flex: '~ gap-2',
      'items-center': '',
      'bg-header': '',
      border: 'b base',
    },
    [
      lt('div', { class: 'i-carbon-dashboard' }),
      lt(
        'span',
        {
          'pl-1': '',
          'font-bold': '',
          'text-sm': '',
          'flex-auto': '',
          'ws-nowrap': '',
          'overflow-hidden': '',
          truncate: '',
        },
        'Dashboard',
      ),
    ],
    -1,
  ),
  agt = { class: 'scrolls', 'flex-auto': '', 'py-1': '' };
function lgt(t, n) {
  const r = rgt;
  return at(), Lt('div', ogt, [sgt, lt('div', agt, [It(r)])]);
}
const cgt = lo(igt, [['render', lgt]]),
  ugt = '' + new URL('../favicon.svg', import.meta.url).href,
  fgt = lt(
    'img',
    { 'w-6': '', 'h-6': '', src: ugt, alt: 'Vitest logo' },
    null,
    -1,
  ),
  hgt = lt(
    'span',
    { 'font-light': '', 'text-sm': '', 'flex-1': '' },
    'Vitest',
    -1,
  ),
  dgt = { class: 'flex text-lg' },
  pgt = lt('div', { class: 'i-carbon:folder-off ma' }, null, -1),
  ggt = lt(
    'div',
    { class: 'op100 gap-1 p-y-1', grid: '~ items-center cols-[1.5em_1fr]' },
    [
      lt('div', { class: 'i-carbon:information-square w-1.5em h-1.5em' }),
      lt('div', null, 'Coverage enabled but missing html reporter.'),
      lt(
        'div',
        { style: { 'grid-column': '2' } },
        ' Add html reporter to your configuration to see coverage here. ',
      ),
    ],
    -1,
  ),
  vgt = ne({
    __name: 'Navigation',
    setup(t) {
      const n = xt(() => En.value && Pc(En.value));
      function r() {
        return je.rpc.updateSnapshot();
      }
      function o(f) {
        (pr.value = f.id), (wa.value = tc(f.id)), ef(!1);
      }
      const l = xt(() => (Dc.value ? 'light' : 'dark'));
      async function u(f) {
        zo.value &&
          ((ac.value = !0), await Hr(), oo.value && (ef(!0), await Hr())),
          await kE(f);
      }
      return (f, h) => {
        const d = us,
          g = Sb,
          v = ao('tooltip');
        return (
          at(),
          Yt(
            g,
            {
              border: 'r base',
              tasks: U(En),
              'on-item-click': o,
              'group-by-type': !0,
              onRun: u,
            },
            {
              header: Xt(({ filteredTests: b }) => [
                fgt,
                hgt,
                lt('div', dgt, [
                  rn(
                    It(
                      d,
                      {
                        title: 'Show dashboard',
                        class: '!animate-100ms',
                        'animate-count-1': '',
                        icon: 'i-carbon:dashboard',
                        onClick: h[0] || (h[0] = (x) => U(ef)(!0)),
                      },
                      null,
                      512,
                    ),
                    [
                      [yf, (U(jf) && !U(zo)) || !U(Vo)],
                      [v, 'Dashboard', void 0, { bottom: !0 }],
                    ],
                  ),
                  U(jf) && !U(zo)
                    ? (at(),
                      Yt(
                        U(TC),
                        {
                          key: 0,
                          title: 'Coverage enabled but missing html reporter',
                          class:
                            'w-1.4em h-1.4em op100 rounded flex color-red5 dark:color-#f43f5e cursor-help',
                        },
                        {
                          popper: Xt(() => [ggt]),
                          default: Xt(() => [pgt]),
                          _: 1,
                        },
                      ))
                    : ee('', !0),
                  U(zo)
                    ? rn(
                        (at(),
                        Yt(
                          d,
                          {
                            key: 1,
                            disabled: U(ac),
                            title: 'Show coverage',
                            class: '!animate-100ms',
                            'animate-count-1': '',
                            icon: 'i-carbon:folder-details-reference',
                            onClick: h[1] || (h[1] = (x) => U(ppt)()),
                          },
                          null,
                          8,
                          ['disabled'],
                        )),
                        [
                          [yf, !U(oo)],
                          [v, 'Coverage', void 0, { bottom: !0 }],
                        ],
                      )
                    : ee('', !0),
                  U(n) && !U(yr)
                    ? rn(
                        (at(),
                        Yt(
                          d,
                          {
                            key: 2,
                            icon: 'i-carbon:result-old',
                            onClick: h[2] || (h[2] = (x) => r()),
                          },
                          null,
                          512,
                        )),
                        [
                          [
                            v,
                            'Update all failed snapshot(s)',
                            void 0,
                            { bottom: !0 },
                          ],
                        ],
                      )
                    : ee('', !0),
                  U(yr)
                    ? ee('', !0)
                    : rn(
                        (at(),
                        Yt(
                          d,
                          {
                            key: 3,
                            disabled: (b == null ? void 0 : b.length) === 0,
                            icon: 'i-carbon:play',
                            onClick: (x) => u(b),
                          },
                          null,
                          8,
                          ['disabled', 'onClick'],
                        )),
                        [
                          [
                            v,
                            b
                              ? b.length === 0
                                ? 'No test to run (clear filter)'
                                : 'Rerun filtered'
                              : 'Rerun all',
                            void 0,
                            { bottom: !0 },
                          ],
                        ],
                      ),
                  rn(
                    It(
                      d,
                      {
                        icon: 'dark:i-carbon-moon i-carbon:sun',
                        onClick: h[3] || (h[3] = (x) => U($at)()),
                      },
                      null,
                      512,
                    ),
                    [[v, `Toggle to ${U(l)} mode`, void 0, { bottom: !0 }]],
                  ),
                ]),
              ]),
              _: 1,
            },
            8,
            ['tasks'],
          )
        );
      };
    },
  }),
  mgt = {
    'h-3px': '',
    relative: '',
    'overflow-hidden': '',
    class: 'px-0',
    'w-screen': '',
  },
  ygt = ne({
    __name: 'ProgressBar',
    setup(t) {
      const { width: n } = nE(),
        r = xt(() =>
          En.value.length === 0
            ? '!bg-gray-4 !dark:bg-gray-7 in-progress'
            : kpt.value
            ? null
            : 'in-progress',
        ),
        o = xt(() => En.value.length),
        l = xt(() => uc.value.length),
        u = xt(() => cc.value.length),
        f = xt(() => {
          const v = U(o);
          return v > 0 ? (n.value * l.value) / v : 0;
        }),
        h = xt(() => {
          const v = U(o);
          return v > 0 ? (n.value * u.value) / v : 0;
        }),
        d = xt(() => U(o) - u.value - l.value),
        g = xt(() => {
          const v = U(o);
          return v > 0 ? (n.value * d.value) / v : 0;
        });
      return (v, b) => (
        at(),
        Lt(
          'div',
          {
            absolute: '',
            't-0': '',
            'l-0': '',
            'r-0': '',
            'z-index-1031': '',
            'pointer-events-none': '',
            'p-0': '',
            'h-3px': '',
            grid: '~ auto-cols-max',
            'justify-items-center': '',
            'w-screen': '',
            class: ve(U(r)),
          },
          [
            lt('div', mgt, [
              lt(
                'div',
                {
                  absolute: '',
                  'l-0': '',
                  't-0': '',
                  'bg-red5': '',
                  'h-3px': '',
                  class: ve(U(r)),
                  style: Cn(`width: ${U(h)}px;`),
                },
                '   ',
                6,
              ),
              lt(
                'div',
                {
                  absolute: '',
                  'l-0': '',
                  't-0': '',
                  'bg-green5': '',
                  'h-3px': '',
                  class: ve(U(r)),
                  style: Cn(`left: ${U(h)}px; width: ${U(f)}px;`),
                },
                '   ',
                6,
              ),
              lt(
                'div',
                {
                  absolute: '',
                  'l-0': '',
                  't-0': '',
                  'bg-yellow5': '',
                  'h-3px': '',
                  class: ve(U(r)),
                  style: Cn(`left: ${U(f) + U(h)}px; width: ${U(g)}px;`),
                },
                '   ',
                6,
              ),
            ]),
          ],
          2,
        )
      );
    },
  });
const bgt = lo(ygt, [['__scopeId', 'data-v-f967c1fe']]),
  im = {
    name: 'splitpanes',
    emits: [
      'ready',
      'resize',
      'resized',
      'pane-click',
      'pane-maximize',
      'pane-add',
      'pane-remove',
      'splitter-click',
    ],
    props: {
      horizontal: { type: Boolean },
      pushOtherPanes: { type: Boolean, default: !0 },
      dblClickSplitter: { type: Boolean, default: !0 },
      rtl: { type: Boolean, default: !1 },
      firstSplitter: { type: Boolean },
    },
    provide() {
      return {
        requestUpdate: this.requestUpdate,
        onPaneAdd: this.onPaneAdd,
        onPaneRemove: this.onPaneRemove,
        onPaneClick: this.onPaneClick,
      };
    },
    data: () => ({
      container: null,
      ready: !1,
      panes: [],
      touch: { mouseDown: !1, dragging: !1, activeSplitter: null },
      splitterTaps: { splitter: null, timeoutId: null },
    }),
    computed: {
      panesCount() {
        return this.panes.length;
      },
      indexedPanes() {
        return this.panes.reduce((t, n) => (t[n.id] = n) && t, {});
      },
    },
    methods: {
      updatePaneComponents() {
        this.panes.forEach((t) => {
          t.update &&
            t.update({
              [this.horizontal ? 'height' : 'width']: `${
                this.indexedPanes[t.id].size
              }%`,
            });
        });
      },
      bindEvents() {
        document.addEventListener('mousemove', this.onMouseMove, {
          passive: !1,
        }),
          document.addEventListener('mouseup', this.onMouseUp),
          'ontouchstart' in window &&
            (document.addEventListener('touchmove', this.onMouseMove, {
              passive: !1,
            }),
            document.addEventListener('touchend', this.onMouseUp));
      },
      unbindEvents() {
        document.removeEventListener('mousemove', this.onMouseMove, {
          passive: !1,
        }),
          document.removeEventListener('mouseup', this.onMouseUp),
          'ontouchstart' in window &&
            (document.removeEventListener('touchmove', this.onMouseMove, {
              passive: !1,
            }),
            document.removeEventListener('touchend', this.onMouseUp));
      },
      onMouseDown(t, n) {
        this.bindEvents(),
          (this.touch.mouseDown = !0),
          (this.touch.activeSplitter = n);
      },
      onMouseMove(t) {
        this.touch.mouseDown &&
          (t.preventDefault(),
          (this.touch.dragging = !0),
          this.calculatePanesSize(this.getCurrentMouseDrag(t)),
          this.$emit(
            'resize',
            this.panes.map((n) => ({ min: n.min, max: n.max, size: n.size })),
          ));
      },
      onMouseUp() {
        this.touch.dragging &&
          this.$emit(
            'resized',
            this.panes.map((t) => ({ min: t.min, max: t.max, size: t.size })),
          ),
          (this.touch.mouseDown = !1),
          setTimeout(() => {
            (this.touch.dragging = !1), this.unbindEvents();
          }, 100);
      },
      onSplitterClick(t, n) {
        'ontouchstart' in window &&
          (t.preventDefault(),
          this.dblClickSplitter &&
            (this.splitterTaps.splitter === n
              ? (clearTimeout(this.splitterTaps.timeoutId),
                (this.splitterTaps.timeoutId = null),
                this.onSplitterDblClick(t, n),
                (this.splitterTaps.splitter = null))
              : ((this.splitterTaps.splitter = n),
                (this.splitterTaps.timeoutId = setTimeout(() => {
                  this.splitterTaps.splitter = null;
                }, 500))))),
          this.touch.dragging || this.$emit('splitter-click', this.panes[n]);
      },
      onSplitterDblClick(t, n) {
        let r = 0;
        (this.panes = this.panes.map(
          (o, l) => (
            (o.size = l === n ? o.max : o.min), l !== n && (r += o.min), o
          ),
        )),
          (this.panes[n].size -= r),
          this.$emit('pane-maximize', this.panes[n]),
          this.$emit(
            'resized',
            this.panes.map((o) => ({ min: o.min, max: o.max, size: o.size })),
          );
      },
      onPaneClick(t, n) {
        this.$emit('pane-click', this.indexedPanes[n]);
      },
      getCurrentMouseDrag(t) {
        const n = this.container.getBoundingClientRect(),
          { clientX: r, clientY: o } =
            'ontouchstart' in window && t.touches ? t.touches[0] : t;
        return { x: r - n.left, y: o - n.top };
      },
      getCurrentDragPercentage(t) {
        t = t[this.horizontal ? 'y' : 'x'];
        const n =
          this.container[this.horizontal ? 'clientHeight' : 'clientWidth'];
        return this.rtl && !this.horizontal && (t = n - t), (t * 100) / n;
      },
      calculatePanesSize(t) {
        const n = this.touch.activeSplitter;
        let r = {
          prevPanesSize: this.sumPrevPanesSize(n),
          nextPanesSize: this.sumNextPanesSize(n),
          prevReachedMinPanes: 0,
          nextReachedMinPanes: 0,
        };
        const o = 0 + (this.pushOtherPanes ? 0 : r.prevPanesSize),
          l = 100 - (this.pushOtherPanes ? 0 : r.nextPanesSize),
          u = Math.max(Math.min(this.getCurrentDragPercentage(t), l), o);
        let f = [n, n + 1],
          h = this.panes[f[0]] || null,
          d = this.panes[f[1]] || null;
        const g = h.max < 100 && u >= h.max + r.prevPanesSize,
          v = d.max < 100 && u <= 100 - (d.max + this.sumNextPanesSize(n + 1));
        if (g || v) {
          g
            ? ((h.size = h.max),
              (d.size = Math.max(
                100 - h.max - r.prevPanesSize - r.nextPanesSize,
                0,
              )))
            : ((h.size = Math.max(
                100 - d.max - r.prevPanesSize - this.sumNextPanesSize(n + 1),
                0,
              )),
              (d.size = d.max));
          return;
        }
        if (this.pushOtherPanes) {
          const b = this.doPushOtherPanes(r, u);
          if (!b) return;
          ({ sums: r, panesToResize: f } = b),
            (h = this.panes[f[0]] || null),
            (d = this.panes[f[1]] || null);
        }
        h !== null &&
          (h.size = Math.min(
            Math.max(u - r.prevPanesSize - r.prevReachedMinPanes, h.min),
            h.max,
          )),
          d !== null &&
            (d.size = Math.min(
              Math.max(
                100 - u - r.nextPanesSize - r.nextReachedMinPanes,
                d.min,
              ),
              d.max,
            ));
      },
      doPushOtherPanes(t, n) {
        const r = this.touch.activeSplitter,
          o = [r, r + 1];
        return n < t.prevPanesSize + this.panes[o[0]].min &&
          ((o[0] = this.findPrevExpandedPane(r).index),
          (t.prevReachedMinPanes = 0),
          o[0] < r &&
            this.panes.forEach((l, u) => {
              u > o[0] &&
                u <= r &&
                ((l.size = l.min), (t.prevReachedMinPanes += l.min));
            }),
          (t.prevPanesSize = this.sumPrevPanesSize(o[0])),
          o[0] === void 0)
          ? ((t.prevReachedMinPanes = 0),
            (this.panes[0].size = this.panes[0].min),
            this.panes.forEach((l, u) => {
              u > 0 &&
                u <= r &&
                ((l.size = l.min), (t.prevReachedMinPanes += l.min));
            }),
            (this.panes[o[1]].size =
              100 -
              t.prevReachedMinPanes -
              this.panes[0].min -
              t.prevPanesSize -
              t.nextPanesSize),
            null)
          : n > 100 - t.nextPanesSize - this.panes[o[1]].min &&
            ((o[1] = this.findNextExpandedPane(r).index),
            (t.nextReachedMinPanes = 0),
            o[1] > r + 1 &&
              this.panes.forEach((l, u) => {
                u > r &&
                  u < o[1] &&
                  ((l.size = l.min), (t.nextReachedMinPanes += l.min));
              }),
            (t.nextPanesSize = this.sumNextPanesSize(o[1] - 1)),
            o[1] === void 0)
          ? ((t.nextReachedMinPanes = 0),
            (this.panes[this.panesCount - 1].size =
              this.panes[this.panesCount - 1].min),
            this.panes.forEach((l, u) => {
              u < this.panesCount - 1 &&
                u >= r + 1 &&
                ((l.size = l.min), (t.nextReachedMinPanes += l.min));
            }),
            (this.panes[o[0]].size =
              100 -
              t.prevPanesSize -
              t.nextReachedMinPanes -
              this.panes[this.panesCount - 1].min -
              t.nextPanesSize),
            null)
          : { sums: t, panesToResize: o };
      },
      sumPrevPanesSize(t) {
        return this.panes.reduce((n, r, o) => n + (o < t ? r.size : 0), 0);
      },
      sumNextPanesSize(t) {
        return this.panes.reduce((n, r, o) => n + (o > t + 1 ? r.size : 0), 0);
      },
      findPrevExpandedPane(t) {
        return (
          [...this.panes]
            .reverse()
            .find((n) => n.index < t && n.size > n.min) || {}
        );
      },
      findNextExpandedPane(t) {
        return this.panes.find((n) => n.index > t + 1 && n.size > n.min) || {};
      },
      checkSplitpanesNodes() {
        Array.from(this.container.children).forEach((t) => {
          const n = t.classList.contains('splitpanes__pane'),
            r = t.classList.contains('splitpanes__splitter');
          !n &&
            !r &&
            (t.parentNode.removeChild(t),
            console.warn(
              'Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed.',
            ));
        });
      },
      addSplitter(t, n, r = !1) {
        const o = t - 1,
          l = document.createElement('div');
        l.classList.add('splitpanes__splitter'),
          r ||
            ((l.onmousedown = (u) => this.onMouseDown(u, o)),
            typeof window < 'u' &&
              'ontouchstart' in window &&
              (l.ontouchstart = (u) => this.onMouseDown(u, o)),
            (l.onclick = (u) => this.onSplitterClick(u, o + 1))),
          this.dblClickSplitter &&
            (l.ondblclick = (u) => this.onSplitterDblClick(u, o + 1)),
          n.parentNode.insertBefore(l, n);
      },
      removeSplitter(t) {
        (t.onmousedown = void 0),
          (t.onclick = void 0),
          (t.ondblclick = void 0),
          t.parentNode.removeChild(t);
      },
      redoSplitters() {
        const t = Array.from(this.container.children);
        t.forEach((r) => {
          r.className.includes('splitpanes__splitter') &&
            this.removeSplitter(r);
        });
        let n = 0;
        t.forEach((r) => {
          r.className.includes('splitpanes__pane') &&
            (!n && this.firstSplitter
              ? this.addSplitter(n, r, !0)
              : n && this.addSplitter(n, r),
            n++);
        });
      },
      requestUpdate({ target: t, ...n }) {
        const r = this.indexedPanes[t._.uid];
        Object.entries(n).forEach(([o, l]) => (r[o] = l));
      },
      onPaneAdd(t) {
        let n = -1;
        Array.from(t.$el.parentNode.children).some(
          (l) => (l.className.includes('splitpanes__pane') && n++, l === t.$el),
        );
        const r = parseFloat(t.minSize),
          o = parseFloat(t.maxSize);
        this.panes.splice(n, 0, {
          id: t._.uid,
          index: n,
          min: isNaN(r) ? 0 : r,
          max: isNaN(o) ? 100 : o,
          size: t.size === null ? null : parseFloat(t.size),
          givenSize: t.size,
          update: t.update,
        }),
          this.panes.forEach((l, u) => (l.index = u)),
          this.ready &&
            this.$nextTick(() => {
              this.redoSplitters(),
                this.resetPaneSizes({ addedPane: this.panes[n] }),
                this.$emit('pane-add', {
                  index: n,
                  panes: this.panes.map((l) => ({
                    min: l.min,
                    max: l.max,
                    size: l.size,
                  })),
                });
            });
      },
      onPaneRemove(t) {
        const n = this.panes.findIndex((o) => o.id === t._.uid),
          r = this.panes.splice(n, 1)[0];
        this.panes.forEach((o, l) => (o.index = l)),
          this.$nextTick(() => {
            this.redoSplitters(),
              this.resetPaneSizes({ removedPane: { ...r, index: n } }),
              this.$emit('pane-remove', {
                removed: r,
                panes: this.panes.map((o) => ({
                  min: o.min,
                  max: o.max,
                  size: o.size,
                })),
              });
          });
      },
      resetPaneSizes(t = {}) {
        !t.addedPane && !t.removedPane
          ? this.initialPanesSizing()
          : this.panes.some((n) => n.givenSize !== null || n.min || n.max < 100)
          ? this.equalizeAfterAddOrRemove(t)
          : this.equalize(),
          this.ready &&
            this.$emit(
              'resized',
              this.panes.map((n) => ({ min: n.min, max: n.max, size: n.size })),
            );
      },
      equalize() {
        const t = 100 / this.panesCount;
        let n = 0;
        const r = [],
          o = [];
        this.panes.forEach((l) => {
          (l.size = Math.max(Math.min(t, l.max), l.min)),
            (n -= l.size),
            l.size >= l.max && r.push(l.id),
            l.size <= l.min && o.push(l.id);
        }),
          n > 0.1 && this.readjustSizes(n, r, o);
      },
      initialPanesSizing() {
        let t = 100;
        const n = [],
          r = [];
        let o = 0;
        this.panes.forEach((u) => {
          (t -= u.size),
            u.size !== null && o++,
            u.size >= u.max && n.push(u.id),
            u.size <= u.min && r.push(u.id);
        });
        let l = 100;
        t > 0.1 &&
          (this.panes.forEach((u) => {
            u.size === null &&
              (u.size = Math.max(
                Math.min(t / (this.panesCount - o), u.max),
                u.min,
              )),
              (l -= u.size);
          }),
          l > 0.1 && this.readjustSizes(t, n, r));
      },
      equalizeAfterAddOrRemove({ addedPane: t, removedPane: n } = {}) {
        let r = 100 / this.panesCount,
          o = 0;
        const l = [],
          u = [];
        t &&
          t.givenSize !== null &&
          (r = (100 - t.givenSize) / (this.panesCount - 1)),
          this.panes.forEach((f) => {
            (o -= f.size),
              f.size >= f.max && l.push(f.id),
              f.size <= f.min && u.push(f.id);
          }),
          !(Math.abs(o) < 0.1) &&
            (this.panes.forEach((f) => {
              (t && t.givenSize !== null && t.id === f.id) ||
                (f.size = Math.max(Math.min(r, f.max), f.min)),
                (o -= f.size),
                f.size >= f.max && l.push(f.id),
                f.size <= f.min && u.push(f.id);
            }),
            o > 0.1 && this.readjustSizes(o, l, u));
      },
      readjustSizes(t, n, r) {
        let o;
        t > 0
          ? (o = t / (this.panesCount - n.length))
          : (o = t / (this.panesCount - r.length)),
          this.panes.forEach((l, u) => {
            if (t > 0 && !n.includes(l.id)) {
              const f = Math.max(Math.min(l.size + o, l.max), l.min),
                h = f - l.size;
              (t -= h), (l.size = f);
            } else if (!r.includes(l.id)) {
              const f = Math.max(Math.min(l.size + o, l.max), l.min),
                h = f - l.size;
              (t -= h), (l.size = f);
            }
            l.update({
              [this.horizontal ? 'height' : 'width']: `${
                this.indexedPanes[l.id].size
              }%`,
            });
          }),
          Math.abs(t) > 0.1 &&
            this.$nextTick(() => {
              this.ready &&
                console.warn(
                  'Splitpanes: Could not resize panes correctly due to their constraints.',
                );
            });
      },
    },
    watch: {
      panes: {
        deep: !0,
        immediate: !1,
        handler() {
          this.updatePaneComponents();
        },
      },
      horizontal() {
        this.updatePaneComponents();
      },
      firstSplitter() {
        this.redoSplitters();
      },
      dblClickSplitter(t) {
        [...this.container.querySelectorAll('.splitpanes__splitter')].forEach(
          (n, r) => {
            n.ondblclick = t ? (o) => this.onSplitterDblClick(o, r) : void 0;
          },
        );
      },
    },
    beforeUnmount() {
      this.ready = !1;
    },
    mounted() {
      (this.container = this.$refs.container),
        this.checkSplitpanesNodes(),
        this.redoSplitters(),
        this.resetPaneSizes(),
        this.$emit('ready'),
        (this.ready = !0);
    },
    render() {
      return Sa(
        'div',
        {
          ref: 'container',
          class: [
            'splitpanes',
            `splitpanes--${this.horizontal ? 'horizontal' : 'vertical'}`,
            { 'splitpanes--dragging': this.touch.dragging },
          ],
        },
        this.$slots.default(),
      );
    },
  },
  wgt = (t, n) => {
    const r = t.__vccOpts || t;
    for (const [o, l] of n) r[o] = l;
    return r;
  },
  xgt = {
    name: 'pane',
    inject: ['requestUpdate', 'onPaneAdd', 'onPaneRemove', 'onPaneClick'],
    props: {
      size: { type: [Number, String], default: null },
      minSize: { type: [Number, String], default: 0 },
      maxSize: { type: [Number, String], default: 100 },
    },
    data: () => ({ style: {} }),
    mounted() {
      this.onPaneAdd(this);
    },
    beforeUnmount() {
      this.onPaneRemove(this);
    },
    methods: {
      update(t) {
        this.style = t;
      },
    },
    computed: {
      sizeNumber() {
        return this.size || this.size === 0 ? parseFloat(this.size) : null;
      },
      minSizeNumber() {
        return parseFloat(this.minSize);
      },
      maxSizeNumber() {
        return parseFloat(this.maxSize);
      },
    },
    watch: {
      sizeNumber(t) {
        this.requestUpdate({ target: this, size: t });
      },
      minSizeNumber(t) {
        this.requestUpdate({ target: this, min: t });
      },
      maxSizeNumber(t) {
        this.requestUpdate({ target: this, max: t });
      },
    },
  };
function _gt(t, n, r, o, l, u) {
  return (
    at(),
    Lt(
      'div',
      {
        class: 'splitpanes__pane',
        onClick: n[0] || (n[0] = (f) => u.onPaneClick(f, t._.uid)),
        style: Cn(t.style),
      },
      [tr(t.$slots, 'default')],
      4,
    )
  );
}
const El = wgt(xgt, [['render', _gt]]),
  Sgt = { 'h-screen': '', 'w-screen': '', overflow: 'hidden' },
  kgt = ne({
    __name: 'index',
    setup(t) {
      const n = dpt(),
        r = Dn([33, 67]),
        o = Dn([33, 67]),
        l = sv((h) => {
          h.forEach((d, g) => {
            r[g] = d.size;
          });
        }, 0),
        u = sv((h) => {
          h.forEach((d, g) => {
            o[g] = d.size;
          });
        }, 0);
      function f() {
        const h = window.innerWidth,
          d = Math.min(h / 3, 300);
        (r[0] = (100 * d) / h),
          (r[1] = 100 - r[0]),
          (o[0] = (100 * d) / (h - d)),
          (o[1] = 100 - o[0]);
      }
      return (h, d) => {
        const g = bgt,
          v = vgt,
          b = cgt,
          x = Spt,
          S = ypt,
          A = Idt,
          L = LE;
        return (
          at(),
          Lt(
            ue,
            null,
            [
              It(g),
              lt('div', Sgt, [
                It(
                  U(im),
                  { class: 'pt-4px', onResized: U(l), onReady: f },
                  {
                    default: Xt(() => [
                      It(
                        U(El),
                        { size: U(r)[0] },
                        { default: Xt(() => [It(v)]), _: 1 },
                        8,
                        ['size'],
                      ),
                      It(
                        U(El),
                        { size: U(r)[1] },
                        {
                          default: Xt(() => [
                            It(mh, null, {
                              default: Xt(() => [
                                U(n)
                                  ? (at(), Yt(b, { key: 'summary' }))
                                  : U(oo)
                                  ? (at(),
                                    Yt(
                                      x,
                                      { key: 'coverage', src: U(hpt) },
                                      null,
                                      8,
                                      ['src'],
                                    ))
                                  : (at(),
                                    Yt(
                                      U(im),
                                      { key: 'detail', onResized: U(u) },
                                      {
                                        default: Xt(() => [
                                          It(
                                            U(El),
                                            { size: U(o)[0] },
                                            {
                                              default: Xt(() => [It(S)]),
                                              _: 1,
                                            },
                                            8,
                                            ['size'],
                                          ),
                                          It(
                                            U(El),
                                            { size: U(o)[1] },
                                            {
                                              default: Xt(() => [It(A)]),
                                              _: 1,
                                            },
                                            8,
                                            ['size'],
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ['onResized'],
                                    )),
                              ]),
                              _: 1,
                            }),
                          ]),
                          _: 1,
                        },
                        8,
                        ['size'],
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ['onResized'],
                ),
              ]),
              It(L),
            ],
            64,
          )
        );
      };
    },
  }),
  Cgt = [{ name: 'index', path: '/', component: kgt, props: !0 }];
const Tgt = { tooltip: CC };
I0.options.instantMove = !0;
I0.options.distance = 10;
function Egt() {
  return pk({ history: MS(JC), routes: Cgt });
}
const Lgt = [Egt],
  jh = o0(hS);
Lgt.forEach((t) => {
  jh.use(t());
});
Object.entries(Tgt).forEach(([t, n]) => {
  jh.directive(t, n);
});
jh.mount('#app');
