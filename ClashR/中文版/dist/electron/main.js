module.exports = function(t)
{
	function e(r)
	{
		if(n[r]) return n[r].exports;
		var o = n[r] = {
			i: r,
			l: !1,
			exports:
			{}
		};
		return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
	}
	var n = {};
	return e.m = t, e.c = n, e.d = function(t, n, r)
	{
		e.o(t, n) || Object.defineProperty(t, n,
		{
			enumerable: !0,
			get: r
		})
	}, e.r = function(t)
	{
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag,
		{
			value: "Module"
		}), Object.defineProperty(t, "__esModule",
		{
			value: !0
		})
	}, e.t = function(t, n)
	{
		if(1 & n && (t = e(t)), 8 & n) return t;
		if(4 & n && "object" == typeof t && t && t.__esModule) return t;
		var r = Object.create(null);
		if(e.r(r), Object.defineProperty(r, "default",
		{
			enumerable: !0,
			value: t
		}), 2 & n && "string" != typeof t)
			for(var o in t) e.d(r, o, function(e)
			{
				return t[e]
			}.bind(null, o));
		return r
	}, e.n = function(t)
	{
		var n = t && t.__esModule ? function()
		{
			return t.default
		} : function()
		{
			return t
		};
		return e.d(n, "a", n), n
	}, e.o = function(t, e)
	{
		return Object.prototype.hasOwnProperty.call(t, e)
	}, e.p = "", e(e.s = 44)
}([function(t)
{
	t.exports = require("electron")
}, function(t)
{
	var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
	"number" == typeof __g && (__g = e)
}, function(t, e, n)
{
	var r = n(33)("wks"),
		o = n(34),
		i = n(1)
		.Symbol,
		c = "function" == typeof i;
	(t.exports = function(t)
	{
		return r[t] || (r[t] = c && i[t] || (c ? i : o)("Symbol." + t))
	})
	.store = r
}, function(t)
{
	var e = t.exports = {
		version: "2.5.7"
	};
	"number" == typeof __e && (__e = e)
}, function(t, e, n)
{
	var r = n(7);
	t.exports = function(t)
	{
		if(!r(t)) throw TypeError(t + " is not an object!");
		return t
	}
}, function(t, e, n)
{
	var r = n(12),
		o = n(29);
	t.exports = n(8) ? function(t, e, n)
	{
		return r.f(t, e, o(1, n))
	} : function(t, e, n)
	{
		return t[e] = n, t
	}
}, function(t, e, n)
{
	var r = n(1),
		o = n(3),
		i = n(10),
		c = n(5),
		a = n(13),
		u = "prototype",
		s = function(t, e, n)
		{
			var f, l, p, h = t & s.F,
				d = t & s.G,
				v = t & s.S,
				y = t & s.P,
				m = t & s.B,
				g = t & s.W,
				w = d ? o : o[e] || (o[e] = {}),
				x = w[u],
				b = d ? r : v ? r[e] : (r[e] ||
				{})[u];
			for(f in d && (n = e), n)(l = !h && b && void 0 !== b[f]) && a(w, f) || (p = l ? b[f] : n[f], w[f] = d && "function" != typeof b[f] ? n[f] : m && l ? i(p, r) : g && b[f] == p ? function(t)
			{
				var e = function(e, n, r)
				{
					if(this instanceof t)
					{
						switch (arguments.length)
						{
							case 0:
								return new t;
							case 1:
								return new t(e);
							case 2:
								return new t(e, n)
						}
						return new t(e, n, r)
					}
					return t.apply(this, arguments)
				};
				return e[u] = t[u], e
			}(p) : y && "function" == typeof p ? i(Function.call, p) : p, y && ((w.virtual || (w.virtual = {}))[f] = p, t & s.R && x && !x[f] && c(x, f, p)))
		};
	s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
}, function(t)
{
	t.exports = function(t)
	{
		return "object" == typeof t ? null !== t : "function" == typeof t
	}
}, function(t, e, n)
{
	t.exports = !n(18)((function()
	{
		return 7 != Object.defineProperty(
			{}, "a",
			{
				get: function()
				{
					return 7
				}
			})
			.a
	}))
}, function(t)
{
	t.exports = {}
}, function(t, e, n)
{
	var r = n(11);
	t.exports = function(t, e, n)
	{
		return r(t), void 0 === e ? t : 1 === n ? function(n)
		{
			return t.call(e, n)
		} : 2 === n ? function(n, r)
		{
			return t.call(e, n, r)
		} : 3 === n ? function(n, r, o)
		{
			return t.call(e, n, r, o)
		} : function()
		{
			return t.apply(e, arguments)
		}
	}
}, function(t)
{
	t.exports = function(t)
	{
		if("function" != typeof t) throw TypeError(t + " is not a function!");
		return t
	}
}, function(t, e, n)
{
	var r = n(4),
		o = n(52),
		i = n(53),
		c = Object.defineProperty;
	e.f = n(8) ? Object.defineProperty : function(t, e, n)
	{
		if(r(t), e = i(e, !0), r(n), o) try
		{
			return c(t, e, n)
		}
		catch (e)
		{}
		if("get" in n || "set" in n) throw TypeError("Accessors not supported!");
		return "value" in n && (t[e] = n.value), t
	}
}, function(t)
{
	var e = {}.hasOwnProperty;
	t.exports = function(t, n)
	{
		return e.call(t, n)
	}
}, function(t)
{
	var e = {}.toString;
	t.exports = function(t)
	{
		return e.call(t)
			.slice(8, -1)
	}
}, function(t)
{
	var e = Math.ceil,
		n = Math.floor;
	t.exports = function(t)
	{
		return isNaN(t = +t) ? 0 : (0 < t ? n : e)(t)
	}
}, function(t)
{
	t.exports = function(t)
	{
		if(null == t) throw TypeError("Can't call method on  " + t);
		return t
	}
}, function(t)
{
	t.exports = !0
}, function(t)
{
	t.exports = function(t)
	{
		try
		{
			return !!t()
		}
		catch (t)
		{
			return !0
		}
	}
}, function(t, e, n)
{
	var r = n(7),
		o = n(1)
		.document,
		i = r(o) && r(o.createElement);
	t.exports = function(t)
	{
		return i ? o.createElement(t) :
		{}
	}
}, function(t, e, n)
{
	var r = n(31),
		o = n(16);
	t.exports = function(t)
	{
		return r(o(t))
	}
}, function(t, e, n)
{
	var r = n(33)("keys"),
		o = n(34);
	t.exports = function(t)
	{
		return r[t] || (r[t] = o(t))
	}
}, function(t, e, n)
{
	var r = n(12)
		.f,
		o = n(13),
		i = n(2)("toStringTag");
	t.exports = function(t, e, n)
	{
		t && !o(t = n ? t : t.prototype, i) && r(t, i,
		{
			configurable: !0,
			value: e
		})
	}
}, function(t, e, n)
{
	"use strict";

	function r(t)
	{
		var e, n;
		this.promise = new t((function(t, r)
		{
			if(null != e || null != n) throw TypeError("Bad Promise constructor");
			e = t, n = r
		})), this.resolve = o(e), this.reject = o(n)
	}
	var o = n(11);
	t.exports.f = function(t)
	{
		return new r(t)
	}
}, function(t)
{
	t.exports = require("path")
}, function(t, e, n)
{
	t.exports = n(45)
}, function(t, e, n)
{
	t.exports = {
		default: n(80),
		__esModule: !0
	}
}, function(t, e, n)
{
	"use strict";
	e.__esModule = !0;
	var r = function(t)
	{
		return t && t.__esModule ? t :
		{
			default: t
		}
	}(n(81));
	e.default = r.default || function(t)
	{
		for(var e, n = 1; n < arguments.length; n++)
			for(var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
		return t
	}
}, function(t, e, n)
{
	"use strict";
	var r = n(17),
		o = n(6),
		i = n(54),
		c = n(5),
		a = n(9),
		u = n(55),
		s = n(22),
		f = n(61),
		l = n(2)("iterator"),
		p = !([].keys && "next" in [].keys()),
		h = "keys",
		d = "values",
		v = function()
		{
			return this
		};
	t.exports = function(t, e, n, y, m, g, w)
	{
		u(n, e, y);
		var x, b, _, j = function(t)
			{
				return !p && t in k ? k[t] : function()
				{
					return new n(this, t)
				}
			},
			O = e + " Iterator",
			S = m == d,
			M = !1,
			k = t.prototype,
			L = k[l] || k["@@iterator"] || m && k[m],
			P = L || j(m),
			E = m ? S ? j("entries") : P : void 0,
			T = "Array" == e && k.entries || L;
		if(T && ((_ = f(T.call(new t))) !== Object.prototype && _.next && (s(_, O, !0), !r && "function" != typeof _[l] && c(_, l, v))), S && L && L.name !== d && (M = !0, P = function()
		{
			return L.call(this)
		}), (!r || w) && (p || M || !k[l]) && c(k, l, P), a[e] = P, a[O] = v, m)
			if(x = {
				values: S ? P : j(d),
				keys: g ? P : j(h),
				entries: E
			}, w)
				for(b in x) b in k || i(k, b, x[b]);
			else o(o.P + o.F * (p || M), e, x);
		return x
	}
}, function(t)
{
	t.exports = function(t, e)
	{
		return {
			enumerable: !(1 & t),
			configurable: !(2 & t),
			writable: !(4 & t),
			value: e
		}
	}
}, function(t, e, n)
{
	var r = n(58),
		o = n(35);
	t.exports = Object.keys || function(t)
	{
		return r(t, o)
	}
}, function(t, e, n)
{
	var r = n(14);
	t.exports = Object("z")
		.propertyIsEnumerable(0) ? Object : function(t)
		{
			return "String" == r(t) ? t.split("") : Object(t)
		}
}, function(t, e, n)
{
	var r = n(15),
		o = Math.min;
	t.exports = function(t)
	{
		return 0 < t ? o(r(t), 9007199254740991) : 0
	}
}, function(t, e, n)
{
	var r = n(3),
		o = n(1),
		i = "__core-js_shared__",
		c = o[i] || (o[i] = {});
	(t.exports = function(t, e)
	{
		return c[t] || (c[t] = void 0 === e ?
		{} : e)
	})("versions", [])
	.push(
	{
		version: r.version,
		mode: n(17) ? "pure" : "global",
		copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
	})
}, function(t)
{
	var e = 0,
		n = Math.random();
	t.exports = function(t)
	{
		return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + n)
			.toString(36))
	}
}, function(t)
{
	t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, e, n)
{
	var r = n(1)
		.document;
	t.exports = r && r.documentElement
}, function(t, e, n)
{
	var r = n(16);
	t.exports = function(t)
	{
		return Object(r(t))
	}
}, function(t, e, n)
{
	var r = n(14),
		o = n(2)("toStringTag"),
		i = "Arguments" == r(function()
		{
			return arguments
		}());
	t.exports = function(t)
	{
		var e, n, c;
		return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e)
		{
			try
			{
				return t[e]
			}
			catch (e)
			{}
		}(e = Object(t), o)) ? n : i ? r(e) : "Object" == (c = r(e)) && "function" == typeof e.callee ? "Arguments" : c
	}
}, function(t, e, n)
{
	var r = n(4),
		o = n(11),
		i = n(2)("species");
	t.exports = function(t, e)
	{
		var n, c = r(t)
			.constructor;
		return void 0 === c || null == (n = r(c)[i]) ? e : o(n)
	}
}, function(t, e, n)
{
	var r, o, i, c = n(10),
		a = n(72),
		u = n(36),
		s = n(19),
		f = n(1),
		l = f.process,
		p = f.setImmediate,
		h = f.clearImmediate,
		d = f.MessageChannel,
		v = f.Dispatch,
		y = 0,
		m = {},
		g = "onreadystatechange",
		w = function()
		{
			var t = +this;
			if(m.hasOwnProperty(t))
			{
				var e = m[t];
				delete m[t], e()
			}
		},
		x = function(t)
		{
			w.call(t.data)
		};
	p && h || (p = function(t)
	{
		for(var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
		return m[++y] = function()
		{
			a("function" == typeof t ? t : Function(t), e)
		}, r(y), y
	}, h = function(t)
	{
		delete m[t]
	}, "process" == n(14)(l) ? r = function(t)
	{
		l.nextTick(c(w, t, 1))
	} : v && v.now ? r = function(t)
	{
		v.now(c(w, t, 1))
	} : d ? (i = (o = new d)
		.port2, o.port1.onmessage = x, r = c(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t)
	{
		f.postMessage(t + "", "*")
	}, f.addEventListener("message", x, !1)) : r = g in s("script") ? function(t)
	{
		u.appendChild(s("script"))[g] = function()
		{
			u.removeChild(this), w.call(t)
		}
	} : function(t)
	{
		setTimeout(c(w, t, 1), 0)
	}), t.exports = {
		set: p,
		clear: h
	}
}, function(t)
{
	t.exports = function(t)
	{
		try
		{
			return {
				e: !1,
				v: t()
			}
		}
		catch (t)
		{
			return {
				e: !0,
				v: t
			}
		}
	}
}, function(t, e, n)
{
	var r = n(4),
		o = n(7),
		i = n(23);
	t.exports = function(t, e)
	{
		if(r(t), o(e) && e.constructor === t) return e;
		var n = i.f(t);
		return (0, n.resolve)(e), n.promise
	}
}, function(t, e, n)
{
	"use strict";
	e.__esModule = !0;
	var r = function(t)
	{
		return t && t.__esModule ? t :
		{
			default: t
		}
	}(n(47));
	e.default = function(t)
	{
		return function()
		{
			var e = t.apply(this, arguments);
			return new r.default((function(t, n)
			{
				return function o(i, c)
				{
					try
					{
						var a = e[i](c),
							u = a.value
					}
					catch (t)
					{
						return void n(t)
					}
					return a.done ? void t(u) : r.default.resolve(u)
						.then((function(t)
						{
							o("next", t)
						}), (function(t)
						{
							o("throw", t)
						}))
				}("next")
			}))
		}
	}
}, function(t, e, n)
{
	"use strict";

	function r()
	{
		var t = this,
			e = {};
		try
		{
			var r = JSON.parse(d.readFileSync(m, "utf8"))
				.bounds;
			r && (e = r)
		}
		catch (e)
		{}(v = new p.BrowserWindow(l()(
		{
			height: 603,
			width: 850,
			minWidth: 850,
			minHeight: 603,
			backgroundColor: "#f5f5f5",
			useContentSize: !0,
			show: "darwin" === process.platform,
			minimizable: !0,
			frame: !1,
			titleBarStyle: "hidden",
			webPreferences:
			{
				nodeIntegration: !0,
				webSecurity: !0,
				nodeIntegrationInWorker: !1,
				enableRemoteModule: !0,
				preload: h.resolve(h.join(__dirname, "preload.js"))
			}
		}, e)))
		.setMenu(null), v.webContents.on("will-navigate", (function(t)
			{
				return t.preventDefault()
			})), v.loadURL(g,
			{
				userAgent: "ClashforWindows/7.0 (Windows NT 10.0; Win64; x64) Chrome/76.0.3809.126 Electron/6.0.3"
			}), v.on("hide", (function()
			{
				v.webContents.send("window-event", "hide")
			})), v.on("show", (function()
			{
				"darwin" === process.platform && p.app.dock.show(), v.webContents.send("window-event", "show")
			})), v.on("close", (function(t)
			{
				if(p.app.isQuiting)
				{
					try
					{
						d.writeFileSync(m, s()(
						{
							bounds: v.getBounds()
						}))
					}
					catch (t)
					{}
					p.app.exit()
				}
				else t.preventDefault(), v.hide(), "darwin" === process.platform && p.app.dock.hide();
				return !1
			})), v.on("session-end", (function(t)
			{
				t.preventDefault(), v.webContents.send("app-exit")
			})), v.webContents.on("crashed", a()(i.a.mark((function e()
			{
				var n, r;
				return i.a.wrap((function(t)
				{
					for(;;) switch (t.prev = t.next)
					{
						case 0:
							if("darwin" !== process.platform)
							{
								t.next = 2;
								break
							}
							return t.abrupt("return");
						case 2:
							return n = {
								type: "error",
								title: "ClashR for Windows",
								message: "控制面板崩溃啦！",
								buttons: ["重载", "退出"]
							}, t.next = 5, p.dialog.showMessageBox(v, n);
						case 5:
							r = t.sent, 0 === r.response ? (p.app.relaunch(), p.app.exit(0)) : p.app.quit();
						case 8:
						case "end":
							return t.stop()
					}
				}), e, t)
			})))), n(0)
			.powerMonitor.on("resume", (function()
			{
				v.webContents.send("app-resume")
			}));
		var o = p.nativeImage.createFromPath(n(24)
				.join(__static, "imgs", "logo_64.png"))
			.resize(
			{
				width: 24,
				height: 24
			}),
			c = h.join(__static, "tray_normal_Z8R_icon.ico");
		(y = new p.Tray("darwin" === process.platform ? o : c))
		.setToolTip("ClashR for Windows"), y.on("click", (function()
		{
			v.show()
		})), p.ipcMain.on("cleanup-done", (function()
		{
			try
			{
				d.writeFileSync(m, s()(
				{
					bounds: v.getBounds()
				}))
			}
			catch (t)
			{}
			p.app.isQuiting = !0, p.app.quit()
		})), p.ipcMain.on("status-changed", (function(t, e)
		{
			try
			{
				"darwin" !== process.platform && y.setImage(e)
			}
			catch (e)
			{}
		})), p.ipcMain.on("show-notification", (function(t, e)
		{
			var n = h.join(global.__static, "imgs/logo_64.png"),
				r = new p.Notification(l()(
				{}, e,
				{
					icon: "darwin" === process.platform ? null : p.nativeImage.createFromPath(n)
				}));
			e.folder && r.on("click", (function()
			{
				p.shell.openPath(e.folder)
			})), r.show()
		}));
		var u = p.Menu.buildFromTemplate([
		{
			label: "控制面板",
			click: function()
			{
				return v.show()
			}
		},
		{
			type: "separator"
		},
		{
			label: "系统代理",
			type: "checkbox",
			id: "system-proxy",
			click: function(t)
			{
				var e = t.checked;
				v.webContents.send("system-proxy-changed", e)
			}
		},
		{
			label: "混合模式",
			type: "checkbox",
			id: "mixin",
			click: function(t)
			{
				var e = t.checked;
				v.webContents.send("mixin-changed", e)
			}
		},
		{
			type: "separator"
		},
		{
			label: "代理模式",
			id: "mode",
			submenu: [
			{
				label: "全局",
				type: "radio",
				id: "mode-global",
				click: function()
				{
					return v.webContents.send("mode-changed", "global")
				}
			},
			{
				label: "规则",
				type: "radio",
				id: "mode-rule",
				click: function()
				{
					return v.webContents.send("mode-changed", "rule")
				}
			},
			{
				label: "直连",
				type: "radio",
				id: "mode-direct",
				click: function()
				{
					return v.webContents.send("mode-changed", "direct")
				}
			},
			{
				label: "脚本",
				type: "radio",
				id: "mode-script",
				click: function()
				{
					return v.webContents.send("mode-changed", "script")
				}
			}]
		},
		{
			type: "separator"
		},
		{
			label: "强制退出",
			click: function()
			{
				p.app.isQuiting = !0, p.app.quit()
			}
		},
		{
			label: "退出",
			click: function()
			{
				return v.webContents.send("app-exit")
			}
		}]);
		p.ipcMain.on("clash-core-status-change", (function(t, e)
		{
			var n = u.getMenuItemById("system-proxy");
			n && (n.enabled = 1 !== e);
			var r = u.getMenuItemById("mode");
			r && (r.enabled = 1 !== e)
		})), p.ipcMain.on("mode-changed", (function(t, e)
		{
			var n = u.getMenuItemById("mode-" + e);
			n && (n.checked = !0)
		})), p.ipcMain.on("system-proxy-changed", (function(t, e)
		{
			var n = u.getMenuItemById("system-proxy");
			n && (n.checked = e)
		})), p.ipcMain.on("mixin-changed", (function(t, e)
		{
			var n = u.getMenuItemById("mixin");
			n && (n.checked = e)
		})), p.ipcMain.on("speed-update", (function(t, e, n)
		{
			try
			{
				y && y.setImage(p.nativeImage.createFromDataURL(e)
					.crop(
					{
						x: 0,
						y: 0,
						width: n ? 225 : 60,
						height: 69
					})
					.resize(
					{
						height: 23
					}))
			}
			catch (e)
			{}
		})), y.on("click", (function()
		{
			v.show()
		})), y.on("right-click", (function()
		{
			y.popUpContextMenu(u)
		}))
	}
	n.r(e);
	var o = n(25),
		i = n.n(o),
		c = n(43),
		a = n.n(c),
		u = n(26),
		s = n.n(u),
		f = n(27),
		l = n.n(f),
		p = n(0),
		h = (n.n(p), n(24)),
		d = n(87);
	global.__static = n(24)
		.join(__dirname, "/static")
		.replace(/\\/g, "\\\\"), p.app.disableHardwareAcceleration();
	var v = void 0,
		y = void 0,
		m = h.join(p.app.getPath("userData"), "window_ocnfig.json"),
		g = "file://" + __dirname + "/index.html",
		w = p.app.requestSingleInstanceLock();
	p.app.setAppUserModelId("com.lbyczf.clashwin"), p.app.setAsDefaultProtocolClient("clash"), p.app.on("open-url", (function(t, e)
	{
		v.webContents.send("app-open", [e])
	})), w ? (p.app.on("second-instance", (function(t, e)
	{
		v && (v.webContents.send("app-open", e), v.isMinimized() && v.restore(), v.show())
	})), p.app.on("ready", (function()
	{
		p.powerMonitor.on("shutdown", (function()
		{
			p.app.isQuiting = !0, p.app.quit()
		})), r(), "darwin" === process.platform && (global.isDarkMode = p.systemPreferences.isDarkMode(), p.systemPreferences.subscribeNotification("AppleInterfaceThemeChangedNotification", (function()
		{
			setTimeout((function()
			{
				global.isDarkMode = p.systemPreferences.isDarkMode(), console.log("theme changed", global.isDarkMode), v.webContents.send("theme-change")
			}), 1e3)
		})))
	}))) : p.app.quit(), p.app.on("activate", (function()
	{
		null === v ? r() : v.show()
	}))
}, function(t, e, n)
{
	var r = function()
		{
			return this
		}() || Function("return this")(),
		o = r.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(r)
		.indexOf("regeneratorRuntime"),
		i = o && r.regeneratorRuntime;
	if(r.regeneratorRuntime = void 0, t.exports = n(46), o) r.regeneratorRuntime = i;
	else try
	{
		delete r.regeneratorRuntime
	}
	catch (e)
	{
		r.regeneratorRuntime = void 0
	}
}, function(t)
{
	! function(e)
	{
		"use strict";

		function n(t, e, n, r)
		{
			var i = e && e.prototype instanceof o ? e : o,
				c = Object.create(i.prototype),
				a = new h(r || []);
			return c._invoke = s(t, n, a), c
		}

		function r(t, e, n)
		{
			try
			{
				return {
					type: "normal",
					arg: t.call(e, n)
				}
			}
			catch (t)
			{
				return {
					type: "throw",
					arg: t
				}
			}
		}

		function o()
		{}

		function i()
		{}

		function c()
		{}

		function a(t)
		{
			["next", "throw", "return"].forEach((function(e)
			{
				t[e] = function(t)
				{
					return this._invoke(e, t)
				}
			}))
		}

		function u(t)
		{
			function e(n, o, i, c)
			{
				var a = r(t[n], t, o);
				if("throw" !== a.type)
				{
					var u = a.arg,
						s = u.value;
					return s && "object" == typeof s && m.call(s, "__await") ? Promise.resolve(s.__await)
						.then((function(t)
						{
							e("next", t, i, c)
						}), (function(t)
						{
							e("throw", t, i, c)
						})) : Promise.resolve(s)
						.then((function(t)
						{
							u.value = t, i(u)
						}), c)
				}
				c(a.arg)
			}
			var n;
			this._invoke = function(t, r)
			{
				function o()
				{
					return new Promise((function(n, o)
					{
						e(t, r, n, o)
					}))
				}
				return n = n ? n.then(o, o) : o()
			}
		}

		function s(t, e, n)
		{
			var o = O;
			return function(i, c)
			{
				if(o == M) throw new Error("Generator is already running");
				if(o == k)
				{
					if("throw" === i) throw c;
					return {
						value: void 0,
						done: !0
					}
				}
				for(n.method = i, n.arg = c;;)
				{
					var a = n.delegate;
					if(a)
					{
						var u = f(a, n);
						if(u)
						{
							if(u === L) continue;
							return u
						}
					}
					if("next" === n.method) n.sent = n._sent = n.arg;
					else if("throw" === n.method)
					{
						if(o == O) throw o = k, n.arg;
						n.dispatchException(n.arg)
					}
					else "return" === n.method && n.abrupt("return", n.arg);
					o = M;
					var s = r(t, e, n);
					if("normal" === s.type)
					{
						if(o = n.done ? k : S, s.arg === L) continue;
						return {
							value: s.arg,
							done: n.done
						}
					}
					"throw" === s.type && (o = k, n.method = "throw", n.arg = s.arg)
				}
			}
		}

		function f(t, e)
		{
			var n = t.iterator[e.method];
			if(void 0 === n)
			{
				if(e.delegate = null, "throw" === e.method)
				{
					if(t.iterator.return && (e.method = "return", e.arg = void 0, f(t, e), "throw" === e.method)) return L;
					e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return L
			}
			var o = r(n, t.iterator, e.arg);
			if("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, L;
			var i = o.arg;
			return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, L) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, L)
		}

		function l(t)
		{
			var e = {
				tryLoc: t[0]
			};
			1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
		}

		function p(t)
		{
			var e = t.completion ||
			{};
			e.type = "normal", delete e.arg, t.completion = e
		}

		function h(t)
		{
			this.tryEntries = [
			{
				tryLoc: "root"
			}], t.forEach(l, this), this.reset(!0)
		}

		function d(t)
		{
			if(t)
			{
				var e = t[w];
				if(e) return e.call(t);
				if("function" == typeof t.next) return t;
				if(!isNaN(t.length))
				{
					var n = -1,
						r = function e()
						{
							for(; ++n < t.length;)
								if(m.call(t, n)) return e.value = t[n], e.done = !1, e;
							return e.value = void 0, e.done = !0, e
						};
					return r.next = r
				}
			}
			return {
				next: v
			}
		}

		function v()
		{
			return {
				value: void 0,
				done: !0
			}
		}
		var y = Object.prototype,
			m = y.hasOwnProperty,
			g = "function" == typeof Symbol ? Symbol :
			{},
			w = g.iterator || "@@iterator",
			x = g.asyncIterator || "@@asyncIterator",
			b = g.toStringTag || "@@toStringTag",
			_ = "object" == typeof t,
			j = e.regeneratorRuntime;
		if(j) _ && (t.exports = j);
		else
		{
			(j = e.regeneratorRuntime = _ ? t.exports :
			{})
			.wrap = n;
			var O = "suspendedStart",
				S = "suspendedYield",
				M = "executing",
				k = "completed",
				L = {},
				P = {};
			P[w] = function()
			{
				return this
			};
			var E = Object.getPrototypeOf,
				T = E && E(E(d([])));
			T && T !== y && m.call(T, w) && (P = T);
			var C = c.prototype = o.prototype = Object.create(P);
			i.prototype = C.constructor = c, c.constructor = i, c[b] = i.displayName = "GeneratorFunction", j.isGeneratorFunction = function(t)
			{
				var e = "function" == typeof t && t.constructor;
				return !!e && (e === i || "GeneratorFunction" === (e.displayName || e.name))
			}, j.mark = function(t)
			{
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, c) : (t.__proto__ = c, !(b in t) && (t[b] = "GeneratorFunction")), t.prototype = Object.create(C), t
			}, j.awrap = function(t)
			{
				return {
					__await: t
				}
			}, a(u.prototype), u.prototype[x] = function()
			{
				return this
			}, j.AsyncIterator = u, j.async = function(t, e, r, o)
			{
				var i = new u(n(t, e, r, o));
				return j.isGeneratorFunction(e) ? i : i.next()
					.then((function(t)
					{
						return t.done ? t.value : i.next()
					}))
			}, a(C), C[b] = "Generator", C[w] = function()
			{
				return this
			}, C.toString = function()
			{
				return "[object Generator]"
			}, j.keys = function(t)
			{
				var e = [];
				for(var n in t) e.push(n);
				return e.reverse(),
					function n()
					{
						for(; e.length;)
						{
							var r = e.pop();
							if(r in t) return n.value = r, n.done = !1, n
						}
						return n.done = !0, n
					}
			}, j.values = d, h.prototype = {
				constructor: h,
				reset: function(t)
				{
					if(this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(p), !t)
						for(var e in this) "t" === e.charAt(0) && m.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
				},
				stop: function()
				{
					this.done = !0;
					var t = this.tryEntries[0].completion;
					if("throw" === t.type) throw t.arg;
					return this.rval
				},
				dispatchException: function(t)
				{
					function e(e, r)
					{
						return i.type = "throw", i.arg = t, n.next = e, r && (n.method = "next", n.arg = void 0), !!r
					}
					if(this.done) throw t;
					for(var n = this, r = this.tryEntries.length - 1; 0 <= r; --r)
					{
						var o = this.tryEntries[r],
							i = o.completion;
						if("root" === o.tryLoc) return e("end");
						if(o.tryLoc <= this.prev)
						{
							var c = m.call(o, "catchLoc"),
								a = m.call(o, "finallyLoc");
							if(c && a)
							{
								if(this.prev < o.catchLoc) return e(o.catchLoc, !0);
								if(this.prev < o.finallyLoc) return e(o.finallyLoc)
							}
							else if(c)
							{
								if(this.prev < o.catchLoc) return e(o.catchLoc, !0)
							}
							else
							{
								if(!a) throw new Error("try statement without catch or finally");
								if(this.prev < o.finallyLoc) return e(o.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, e)
				{
					for(var n, r = this.tryEntries.length - 1; 0 <= r; --r)
						if((n = this.tryEntries[r])
							.tryLoc <= this.prev && m.call(n, "finallyLoc") && this.prev < n.finallyLoc)
						{
							var o = n;
							break
						} o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
					var i = o ? o.completion :
					{};
					return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, L) : this.complete(i)
				},
				complete: function(t, e)
				{
					if("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), L
				},
				finish: function(t)
				{
					for(var e, n = this.tryEntries.length - 1; 0 <= n; --n)
						if((e = this.tryEntries[n])
							.finallyLoc === t) return this.complete(e.completion, e.afterLoc), p(e), L
				},
				catch: function(t)
				{
					for(var e, n = this.tryEntries.length - 1; 0 <= n; --n)
						if((e = this.tryEntries[n])
							.tryLoc === t)
						{
							var r = e.completion;
							if("throw" === r.type)
							{
								var o = r.arg;
								p(e)
							}
							return o
						} throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, e, n)
				{
					return this.delegate = {
						iterator: d(t),
						resultName: e,
						nextLoc: n
					}, "next" === this.method && (this.arg = void 0), L
				}
			}
		}
	}(function()
	{
		return this
	}() || Function("return this")())
}, function(t, e, n)
{
	t.exports = {
		default: n(48),
		__esModule: !0
	}
}, function(t, e, n)
{
	n(49), n(50), n(62), n(66), n(78), n(79), t.exports = n(3)
		.Promise
}, function() {}, function(t, e, n)
{
	"use strict";
	var r = n(51)(!0);
	n(28)(String, "String", (function(t)
	{
		this._t = t + "", this._i = 0
	}), (function()
	{
		var t, e = this._t,
			n = this._i;
		return n >= e.length ?
		{
			value: void 0,
			done: !0
		} : (t = r(e, n), this._i += t.length,
		{
			value: t,
			done: !1
		})
	}))
}, function(t, e, n)
{
	var r = n(15),
		o = n(16);
	t.exports = function(t)
	{
		return function(e, n)
		{
			var i, c, a = o(e) + "",
				u = r(n),
				s = a.length;
			return 0 > u || u >= s ? t ? "" : void 0 : 55296 > (i = a.charCodeAt(u)) || 56319 < i || u + 1 === s || 56320 > (c = a.charCodeAt(u + 1)) || 57343 < c ? t ? a.charAt(u) : i : t ? a.slice(u, u + 2) : c - 56320 + (i - 55296 << 10) + 65536
		}
	}
}, function(t, e, n)
{
	t.exports = !n(8) && !n(18)((function()
	{
		return 7 != Object.defineProperty(n(19)("div"), "a",
			{
				get: function()
				{
					return 7
				}
			})
			.a
	}))
}, function(t, e, n)
{
	var r = n(7);
	t.exports = function(t, e)
	{
		if(!r(t)) return t;
		var n, o;
		if(e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
		if("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
		if(!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
		throw TypeError("Can't convert object to primitive value")
	}
}, function(t, e, n)
{
	t.exports = n(5)
}, function(t, e, n)
{
	"use strict";
	var r = n(56),
		o = n(29),
		i = n(22),
		c = {};
	n(5)(c, n(2)("iterator"), (function()
	{
		return this
	})), t.exports = function(t, e, n)
	{
		t.prototype = r(c,
		{
			next: o(1, n)
		}), i(t, e + " Iterator")
	}
}, function(t, e, n)
{
	var r = n(4),
		o = n(57),
		i = n(35),
		c = n(21)("IE_PROTO"),
		a = function() {},
		u = "prototype",
		s = function()
		{
			var t, e = n(19)("iframe"),
				r = i.length;
			for(e.style.display = "none", n(36)
				.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document)
				.open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--;) delete s[u][i[r]];
			return s()
		};
	t.exports = Object.create || function(t, e)
	{
		var n;
		return null === t ? n = s() : (a[u] = r(t), n = new a, a[u] = null, n[c] = t), void 0 === e ? n : o(n, e)
	}
}, function(t, e, n)
{
	var r = n(12),
		o = n(4),
		i = n(30);
	t.exports = n(8) ? Object.defineProperties : function(t, e)
	{
		o(t);
		for(var n, c = i(e), a = c.length, u = 0; a > u;) r.f(t, n = c[u++], e[n]);
		return t
	}
}, function(t, e, n)
{
	var r = n(13),
		o = n(20),
		i = n(59)(!1),
		c = n(21)("IE_PROTO");
	t.exports = function(t, e)
	{
		var n, a = o(t),
			u = 0,
			s = [];
		for(n in a) n != c && r(a, n) && s.push(n);
		for(; e.length > u;) r(a, n = e[u++]) && (~i(s, n) || s.push(n));
		return s
	}
}, function(t, e, n)
{
	var r = n(20),
		o = n(32),
		i = n(60);
	t.exports = function(t)
	{
		return function(e, n, c)
		{
			var a, u = r(e),
				s = o(u.length),
				f = i(c, s);
			if(t && n != n)
			{
				for(; s > f;)
					if((a = u[f++]) != a) return !0
			}
			else
				for(; s > f; f++)
					if((t || f in u) && u[f] === n) return t || f || 0;
			return !t && -1
		}
	}
}, function(t, e, n)
{
	var r = n(15),
		o = Math.max,
		i = Math.min;
	t.exports = function(t, e)
	{
		return 0 > (t = r(t)) ? o(t + e, 0) : i(t, e)
	}
}, function(t, e, n)
{
	var r = n(13),
		o = n(37),
		i = n(21)("IE_PROTO"),
		c = Object.prototype;
	t.exports = Object.getPrototypeOf || function(t)
	{
		return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null
	}
}, function(t, e, n)
{
	n(63);
	for(var r = n(1), o = n(5), i = n(9), c = n(2)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < a.length; u++)
	{
		var s = a[u],
			f = r[s],
			l = f && f.prototype;
		l && !l[c] && o(l, c, s), i[s] = i.Array
	}
}, function(t, e, n)
{
	"use strict";
	var r = n(64),
		o = n(65),
		i = n(9),
		c = n(20);
	t.exports = n(28)(Array, "Array", (function(t, e)
	{
		this._t = c(t), this._i = 0, this._k = e
	}), (function()
	{
		var t = this._t,
			e = this._k,
			n = this._i++;
		return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
	}), "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function(t)
{
	t.exports = function() {}
}, function(t)
{
	t.exports = function(t, e)
	{
		return {
			value: e,
			done: !!t
		}
	}
}, function(t, e, n)
{
	"use strict";
	var r, o, i, c, a = n(17),
		u = n(1),
		s = n(10),
		f = n(38),
		l = n(6),
		p = n(7),
		h = n(11),
		d = n(67),
		v = n(68),
		y = n(39),
		m = n(40)
		.set,
		g = n(73)(),
		w = n(23),
		x = n(41),
		b = n(74),
		_ = n(42),
		j = "Promise",
		O = u.TypeError,
		S = u.process,
		M = S && S.versions,
		k = M && M.v8 || "",
		L = u[j],
		P = "process" == f(S),
		E = function() {},
		T = o = w.f,
		C = !! function()
		{
			try
			{
				var t = L.resolve(1),
					e = (t.constructor = {})[n(2)("species")] = function(t)
					{
						t(E, E)
					};
				return (P || "function" == typeof PromiseRejectionEvent) && t.then(E) instanceof e && 0 !== k.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
			}
			catch (e)
			{}
		}(),
		I = function(t)
		{
			var e;
			return p(t) && "function" == typeof(e = t.then) && e
		},
		F = function(t, e)
		{
			if(!t._n)
			{
				t._n = !0;
				var n = t._c;
				g((function()
				{
					for(var r = t._v, o = 1 == t._s, i = 0, c = function(e)
					{
						var n, i, c, a = o ? e.ok : e.fail,
							u = e.resolve,
							s = e.reject,
							f = e.domain;
						try
						{
							a ? (!o && (2 == t._h && N(t), t._h = 1), !0 === a ? n = r : (f && f.enter(), n = a(r), f && (f.exit(), c = !0)), n === e.promise ? s(O("Promise-chain cycle")) : (i = I(n)) ? i.call(n, u, s) : u(n)) : s(r)
						}
						catch (e)
						{
							f && !c && f.exit(), s(e)
						}
					}; n.length > i;) c(n[i++]);
					t._c = [], t._n = !1, e && !t._h && R(t)
				}))
			}
		},
		R = function(t)
		{
			m.call(u, (function()
			{
				var e, n, r, o = t._v,
					i = A(t);
				if(i && (e = x((function()
				{
					P ? S.emit("unhandledRejection", o, t) : (n = u.onunhandledrejection) ? n(
					{
						promise: t,
						reason: o
					}) : (r = u.console) && r.error && r.error("Unhandled promise rejection", o)
				})), t._h = P || A(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
			}))
		},
		A = function(t)
		{
			return 1 !== t._h && 0 === (t._a || t._c)
				.length
		},
		N = function(t)
		{
			m.call(u, (function()
			{
				var e;
				P ? S.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e(
				{
					promise: t,
					reason: t._v
				})
			}))
		},
		D = function(t)
		{
			var e = this;
			e._d || (e._d = !0, (e = e._w || e)
				._v = t, e._s = 2, !e._a && (e._a = e._c.slice()), F(e, !0))
		},
		G = function(t)
		{
			var e, n = this;
			if(!n._d)
			{
				n._d = !0, n = n._w || n;
				try
				{
					if(n === t) throw O("Promise can't be resolved itself");
					(e = I(t)) ? g((function()
					{
						var r = {
							_w: n,
							_d: !1
						};
						try
						{
							e.call(t, s(G, r, 1), s(D, r, 1))
						}
						catch (t)
						{
							D.call(r, t)
						}
					})): (n._v = t, n._s = 1, F(n, !1))
				}
				catch (e)
				{
					D.call(
					{
						_w: n,
						_d: !1
					}, e)
				}
			}
		};
	C || (L = function(t)
		{
			d(this, L, j, "_h"), h(t), r.call(this);
			try
			{
				t(s(G, this, 1), s(D, this, 1))
			}
			catch (t)
			{
				D.call(this, t)
			}
		}, (r = function()
		{
			this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
		})
		.prototype = n(75)(L.prototype,
		{
			then: function(t, e)
			{
				var n = T(y(this, L));
				return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = P ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && F(this, !1), n.promise
			},
			catch: function(t)
			{
				return this.then(void 0, t)
			}
		}), i = function()
		{
			var t = new r;
			this.promise = t, this.resolve = s(G, t, 1), this.reject = s(D, t, 1)
		}, w.f = T = function(t)
		{
			return t === L || t === c ? new i(t) : o(t)
		}), l(l.G + l.W + l.F * !C,
	{
		Promise: L
	}), n(22)(L, j), n(76)(j), c = n(3)[j], l(l.S + l.F * !C, j,
	{
		reject: function(t)
		{
			var e = T(this);
			return (0, e.reject)(t), e.promise
		}
	}), l(l.S + l.F * (a || !C), j,
	{
		resolve: function(t)
		{
			return _(a && this === c ? L : this, t)
		}
	}), l(l.S + l.F * !(C && n(77)((function(t)
	{
		L.all(t)
			.catch(E)
	}))), j,
	{
		all: function(t)
		{
			var e = this,
				n = T(e),
				r = n.resolve,
				o = n.reject,
				i = x((function()
				{
					var n = [],
						i = 0,
						c = 1;
					v(t, !1, (function(t)
					{
						var a = i++,
							u = !1;
						n.push(void 0), c++, e.resolve(t)
							.then((function(t)
							{
								u || (u = !0, n[a] = t, --c || r(n))
							}), o)
					})), --c || r(n)
				}));
			return i.e && o(i.v), n.promise
		},
		race: function(t)
		{
			var e = this,
				n = T(e),
				r = n.reject,
				o = x((function()
				{
					v(t, !1, (function(t)
					{
						e.resolve(t)
							.then(n.resolve, r)
					}))
				}));
			return o.e && r(o.v), n.promise
		}
	})
}, function(t)
{
	t.exports = function(t, e, n, r)
	{
		if(!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
		return t
	}
}, function(t, e, n)
{
	var r = n(10),
		o = n(69),
		i = n(70),
		c = n(4),
		a = n(32),
		u = n(71),
		s = {},
		f = {};
	(e = t.exports = function(t, e, n, l, p)
	{
		var h, d, v, y, m = p ? function()
			{
				return t
			} : u(t),
			g = r(n, l, e ? 2 : 1),
			w = 0;
		if("function" != typeof m) throw TypeError(t + " is not iterable!");
		if(i(m))
		{
			for(h = a(t.length); h > w; w++)
				if((y = e ? g(c(d = t[w])[0], d[1]) : g(t[w])) === s || y === f) return y
		}
		else
			for(v = m.call(t); !(d = v.next())
				.done;)
				if((y = o(v, g, d.value, e)) === s || y === f) return y
	})
	.BREAK = s, e.RETURN = f
}, function(t, e, n)
{
	var r = n(4);
	t.exports = function(t, e, n, o)
	{
		try
		{
			return o ? e(r(n)[0], n[1]) : e(n)
		}
		catch (n)
		{
			var i = t.return;
			throw void 0 !== i && r(i.call(t)), n
		}
	}
}, function(t, e, n)
{
	var r = n(9),
		o = n(2)("iterator"),
		i = Array.prototype;
	t.exports = function(t)
	{
		return void 0 !== t && (r.Array === t || i[o] === t)
	}
}, function(t, e, n)
{
	var r = n(38),
		o = n(2)("iterator"),
		i = n(9);
	t.exports = n(3)
		.getIteratorMethod = function(t)
		{
			if(null != t) return t[o] || t["@@iterator"] || i[r(t)]
		}
}, function(t)
{
	t.exports = function(t, e, n)
	{
		var r = void 0 === n;
		switch (e.length)
		{
			case 0:
				return r ? t() : t.call(n);
			case 1:
				return r ? t(e[0]) : t.call(n, e[0]);
			case 2:
				return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
			case 3:
				return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
			case 4:
				return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
		}
		return t.apply(n, e)
	}
}, function(t, e, n)
{
	var r = n(1),
		o = n(40)
		.set,
		i = r.MutationObserver || r.WebKitMutationObserver,
		c = r.process,
		a = r.Promise,
		u = "process" == n(14)(c);
	t.exports = function()
	{
		var t, e, n, s = function()
		{
			var r, o;
			for(u && (r = c.domain) && r.exit(); t;)
			{
				o = t.fn, t = t.next;
				try
				{
					o()
				}
				catch (o)
				{
					throw t ? n() : e = void 0, o
				}
			}
			e = void 0, r && r.enter()
		};
		if(u) n = function()
		{
			c.nextTick(s)
		};
		else if(!i || r.navigator && r.navigator.standalone)
			if(a && a.resolve)
			{
				var f = a.resolve(void 0);
				n = function()
				{
					f.then(s)
				}
			}
		else n = function()
		{
			o.call(r, s)
		};
		else
		{
			var l = !0,
				p = document.createTextNode("");
			new i(s)
				.observe(p,
				{
					characterData: !0
				}), n = function()
				{
					p.data = l = !l
				}
		}
		return function(r)
		{
			var o = {
				fn: r,
				next: void 0
			};
			e && (e.next = o), t || (t = o, n()), e = o
		}
	}
}, function(t, e, n)
{
	var r = n(1)
		.navigator;
	t.exports = r && r.userAgent || ""
}, function(t, e, n)
{
	var r = n(5);
	t.exports = function(t, e, n)
	{
		for(var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
		return t
	}
}, function(t, e, n)
{
	"use strict";
	var r = n(1),
		o = n(3),
		i = n(12),
		c = n(8),
		a = n(2)("species");
	t.exports = function(t)
	{
		var e = "function" == typeof o[t] ? o[t] : r[t];
		c && e && !e[a] && i.f(e, a,
		{
			configurable: !0,
			get: function()
			{
				return this
			}
		})
	}
}, function(t, e, n)
{
	var r = n(2)("iterator"),
		o = !1;
	try
	{
		var i = [7][r]();
		i.return = function()
		{
			o = !0
		}, Array.from(i, (function()
		{
			throw 2
		}))
	}
	catch (e)
	{}
	t.exports = function(t, e)
	{
		if(!e && !o) return !1;
		var n = !1;
		try
		{
			var i = [7],
				c = i[r]();
			c.next = function()
			{
				return {
					done: n = !0
				}
			}, i[r] = function()
			{
				return c
			}, t(i)
		}
		catch (e)
		{}
		return n
	}
}, function(t, e, n)
{
	"use strict";
	var r = n(6),
		o = n(3),
		i = n(1),
		c = n(39),
		a = n(42);
	r(r.P + r.R, "Promise",
	{
		finally: function(t)
		{
			var e = c(this, o.Promise || i.Promise),
				n = "function" == typeof t;
			return this.then(n ? function(n)
			{
				return a(e, t())
					.then((function()
					{
						return n
					}))
			} : t, n ? function(n)
			{
				return a(e, t())
					.then((function()
					{
						throw n
					}))
			} : t)
		}
	})
}, function(t, e, n)
{
	"use strict";
	var r = n(6),
		o = n(23),
		i = n(41);
	r(r.S, "Promise",
	{
		try: function(t)
		{
			var e = o.f(this),
				n = i(t);
			return (n.e ? e.reject : e.resolve)(n.v), e.promise
		}
	})
}, function(t, e, n)
{
	var r = n(3),
		o = r.JSON || (r.JSON = {
			stringify: JSON.stringify
		});
	t.exports = function()
	{
		return o.stringify.apply(o, arguments)
	}
}, function(t, e, n)
{
	t.exports = {
		default: n(82),
		__esModule: !0
	}
}, function(t, e, n)
{
	n(83), t.exports = n(3)
		.Object.assign
}, function(t, e, n)
{
	var r = n(6);
	r(r.S + r.F, "Object",
	{
		assign: n(84)
	})
}, function(t, e, n)
{
	"use strict";
	var r = n(30),
		o = n(85),
		i = n(86),
		c = n(37),
		a = n(31),
		u = Object.assign;
	t.exports = !u || n(18)((function()
	{
		var t = {},
			e = {},
			n = Symbol(),
			r = "abcdefghijklmnopqrst";
		return t[n] = 7, r.split("")
			.forEach((function(t)
			{
				e[t] = t
			})), 7 != u(
			{}, t)[n] || Object.keys(u(
			{}, e))
			.join("") != r
	})) ? function(t)
	{
		for(var e = c(t), n = arguments.length, u = 1, s = o.f, f = i.f; n > u;)
			for(var l, p = a(arguments[u++]), h = s ? r(p)
				.concat(s(p)) : r(p), d = h.length, v = 0; d > v;) f.call(p, l = h[v++]) && (e[l] = p[l]);
		return e
	} : u
}, function(t, e)
{
	e.f = Object.getOwnPropertySymbols
}, function(t, e)
{
	e.f = {}.propertyIsEnumerable
}, function(t)
{
	t.exports = require("fs")
}]);