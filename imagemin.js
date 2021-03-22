(function(e) {
  var t = function(e, t) {
      var r = e[0]
        , i = e[1]
        , n = e[2]
        , a = e[3];
      i = ((i += ((n = ((n += ((a = ((a += ((r = ((r += (i & n | ~i & a) + t[0] - 680876936 | 0) << 7 | r >>> 25) + i | 0) & i | ~r & n) + t[1] - 389564586 | 0) << 12 | a >>> 20) + r | 0) & r | ~a & i) + t[2] + 606105819 | 0) << 17 | n >>> 15) + a | 0) & a | ~n & r) + t[3] - 1044525330 | 0) << 22 | i >>> 10) + n | 0,
      i = ((i += ((n = ((n += ((a = ((a += ((r = ((r += (i & n | ~i & a) + t[4] - 176418897 | 0) << 7 | r >>> 25) + i | 0) & i | ~r & n) + t[5] + 1200080426 | 0) << 12 | a >>> 20) + r | 0) & r | ~a & i) + t[6] - 1473231341 | 0) << 17 | n >>> 15) + a | 0) & a | ~n & r) + t[7] - 45705983 | 0) << 22 | i >>> 10) + n | 0,
      i = ((i += ((n = ((n += ((a = ((a += ((r = ((r += (i & n | ~i & a) + t[8] + 1770035416 | 0) << 7 | r >>> 25) + i | 0) & i | ~r & n) + t[9] - 1958414417 | 0) << 12 | a >>> 20) + r | 0) & r | ~a & i) + t[10] - 42063 | 0) << 17 | n >>> 15) + a | 0) & a | ~n & r) + t[11] - 1990404162 | 0) << 22 | i >>> 10) + n | 0,
      i = ((i += ((n = ((n += ((a = ((a += ((r = ((r += (i & n | ~i & a) + t[12] + 1804603682 | 0) << 7 | r >>> 25) + i | 0) & i | ~r & n) + t[13] - 40341101 | 0) << 12 | a >>> 20) + r | 0) & r | ~a & i) + t[14] - 1502002290 | 0) << 17 | n >>> 15) + a | 0) & a | ~n & r) + t[15] + 1236535329 | 0) << 22 | i >>> 10) + n | 0,
      i = ((i += ((n = ((n += ((a = ((a += ((r = ((r += (i & a | n & ~a) + t[1] - 165796510 | 0) << 5 | r >>> 27) + i | 0) & n | i & ~n) + t[6] - 1069501632 | 0) << 9 | a >>> 23) + r | 0) & i | r & ~i) + t[11] + 643717713 | 0) << 14 | n >>> 18) + a | 0) & r | a & ~r) + t[0] - 373897302 | 0) << 20 | i >>> 12) + n | 0,
      i = ((i += ((n = ((n += ((a = ((a += ((r = ((r += (i & a | n & ~a) + t[5] - 701558691 | 0) << 5 | r >>> 27) + i | 0) & n | i & ~n) + t[10] + 38016083 | 0) << 9 | a >>> 23) + r | 0) & i | r & ~i) + t[15] - 660478335 | 0) << 14 | n >>> 18) + a | 0) & r | a & ~r) + t[4] - 405537848 | 0) << 20 | i >>> 12) + n | 0,
      i = ((i += ((n = ((n += ((a = ((a += ((r = ((r += (i & a | n & ~a) + t[9] + 568446438 | 0) << 5 | r >>> 27) + i | 0) & n | i & ~n) + t[14] - 1019803690 | 0) << 9 | a >>> 23) + r | 0) & i | r & ~i) + t[3] - 187363961 | 0) << 14 | n >>> 18) + a | 0) & r | a & ~r) + t[8] + 1163531501 | 0) << 20 | i >>> 12) + n | 0,
      i = ((i += ((n = ((n += ((a = ((a += ((r = ((r += (i & a | n & ~a) + t[13] - 1444681467 | 0) << 5 | r >>> 27) + i | 0) & n | i & ~n) + t[2] - 51403784 | 0) << 9 | a >>> 23) + r | 0) & i | r & ~i) + t[7] + 1735328473 | 0) << 14 | n >>> 18) + a | 0) & r | a & ~r) + t[12] - 1926607734 | 0) << 20 | i >>> 12) + n | 0,
      i = ((i += ((n = ((n += ((a = ((a += ((r = ((r += (i ^ n ^ a) + t[5] - 378558 | 0) << 4 | r >>> 28) + i | 0) ^ i ^ n) + t[8] - 2022574463 | 0) << 11 | a >>> 21) + r | 0) ^ r ^ i) + t[11] + 1839030562 | 0) << 16 | n >>> 16) + a | 0) ^ a ^ r) + t[14] - 35309556 | 0) << 23 | i >>> 9) + n | 0,
      i = ((i += ((n = ((n += ((a = ((a += ((r = ((r += (i ^ n ^ a) + t[1] - 1530992060 | 0) << 4 | r >>> 28) + i | 0) ^ i ^ n) + t[4] + 1272893353 | 0) << 11 | a >>> 21) + r | 0) ^ r ^ i) + t[7] - 155497632 | 0) << 16 | n >>> 16) + a | 0) ^ a ^ r) + t[10] - 1094730640 | 0) << 23 | i >>> 9) + n | 0,
      i = ((i += ((n = ((n += ((a = ((a += ((r = ((r += (i ^ n ^ a) + t[13] + 681279174 | 0) << 4 | r >>> 28) + i | 0) ^ i ^ n) + t[0] - 358537222 | 0) << 11 | a >>> 21) + r | 0) ^ r ^ i) + t[3] - 722521979 | 0) << 16 | n >>> 16) + a | 0) ^ a ^ r) + t[6] + 76029189 | 0) << 23 | i >>> 9) + n | 0,
      i = ((i += ((n = ((n += ((a = ((a += ((r = ((r += (i ^ n ^ a) + t[9] - 640364487 | 0) << 4 | r >>> 28) + i | 0) ^ i ^ n) + t[12] - 421815835 | 0) << 11 | a >>> 21) + r | 0) ^ r ^ i) + t[15] + 530742520 | 0) << 16 | n >>> 16) + a | 0) ^ a ^ r) + t[2] - 995338651 | 0) << 23 | i >>> 9) + n | 0,
      i = ((i += ((a = ((a += (i ^ ((r = ((r += (n ^ (i | ~a)) + t[0] - 198630844 | 0) << 6 | r >>> 26) + i | 0) | ~n)) + t[7] + 1126891415 | 0) << 10 | a >>> 22) + r | 0) ^ ((n = ((n += (r ^ (a | ~i)) + t[14] - 1416354905 | 0) << 15 | n >>> 17) + a | 0) | ~r)) + t[5] - 57434055 | 0) << 21 | i >>> 11) + n | 0,
      i = ((i += ((a = ((a += (i ^ ((r = ((r += (n ^ (i | ~a)) + t[12] + 1700485571 | 0) << 6 | r >>> 26) + i | 0) | ~n)) + t[3] - 1894986606 | 0) << 10 | a >>> 22) + r | 0) ^ ((n = ((n += (r ^ (a | ~i)) + t[10] - 1051523 | 0) << 15 | n >>> 17) + a | 0) | ~r)) + t[1] - 2054922799 | 0) << 21 | i >>> 11) + n | 0,
      i = ((i += ((a = ((a += (i ^ ((r = ((r += (n ^ (i | ~a)) + t[8] + 1873313359 | 0) << 6 | r >>> 26) + i | 0) | ~n)) + t[15] - 30611744 | 0) << 10 | a >>> 22) + r | 0) ^ ((n = ((n += (r ^ (a | ~i)) + t[6] - 1560198380 | 0) << 15 | n >>> 17) + a | 0) | ~r)) + t[13] + 1309151649 | 0) << 21 | i >>> 11) + n | 0,
      i = ((i += ((a = ((a += (i ^ ((r = ((r += (n ^ (i | ~a)) + t[4] - 145523070 | 0) << 6 | r >>> 26) + i | 0) | ~n)) + t[11] - 1120210379 | 0) << 10 | a >>> 22) + r | 0) ^ ((n = ((n += (r ^ (a | ~i)) + t[2] + 718787259 | 0) << 15 | n >>> 17) + a | 0) | ~r)) + t[9] - 343485551 | 0) << 21 | i >>> 11) + n | 0,
      e[0] = r + e[0] | 0,
      e[1] = i + e[1] | 0,
      e[2] = n + e[2] | 0,
      e[3] = a + e[3] | 0
  }
    , r = []
    , i = function() {
      this._dataLength = 0,
      this._state = new Int32Array(4),
      this._buffer = new ArrayBuffer(68),
      this._bufferLength = 0,
      this._buffer8 = new Uint8Array(this._buffer,0,68),
      this._buffer32 = new Uint32Array(this._buffer,0,17),
      this.start()
  }
    , n = new Int32Array([1732584193, -271733879, -1732584194, 271733878])
    , a = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  i.prototype.appendStr = function(e) {
      for (var r, i = this._buffer8, n = this._buffer32, a = this._bufferLength, s = 0; s < e.length; s++) {
          if ((r = e.charCodeAt(s)) < 128)
              i[a++] = r;
          else if (r < 2048)
              i[a++] = 192 + (r >>> 6),
              i[a++] = 63 & r | 128;
          else if (r < 55296 || r > 56319)
              i[a++] = 224 + (r >>> 12),
              i[a++] = r >>> 6 & 63 | 128,
              i[a++] = 63 & r | 128;
          else {
              if ((r = 1024 * (r - 55296) + (e.charCodeAt(++s) - 56320) + 65536) > 1114111)
                  throw "Unicode standard supports code points up to U+10FFFF";
              i[a++] = 240 + (r >>> 18),
              i[a++] = r >>> 12 & 63 | 128,
              i[a++] = r >>> 6 & 63 | 128,
              i[a++] = 63 & r | 128
          }
          a >= 64 && (this._dataLength += 64,
          t(this._state, n),
          a -= 64,
          n[0] = n[16])
      }
      return this._bufferLength = a,
      this
  }
  ,
  i.prototype.appendAsciiStr = function(e) {
      for (var r, i = this._buffer8, n = this._buffer32, a = this._bufferLength, s = 0; ; ) {
          for (r = Math.min(e.length - s, 64 - a); r--; )
              i[a++] = e.charCodeAt(s++);
          if (a < 64)
              break;
          this._dataLength += 64,
          t(this._state, n),
          a = 0
      }
      return this._bufferLength = a,
      this
  }
  ,
  i.prototype.appendByteArray = function(e) {
      for (var r, i = this._buffer8, n = this._buffer32, a = this._bufferLength, s = 0; ; ) {
          for (r = Math.min(e.length - s, 64 - a); r--; )
              i[a++] = e[s++];
          if (a < 64)
              break;
          this._dataLength += 64,
          t(this._state, n),
          a = 0
      }
      return this._bufferLength = a,
      this
  }
  ,
  i.prototype.start = function() {
      return this._dataLength = 0,
      this._bufferLength = 0,
      this._state.set(n),
      this
  }
  ,
  i.prototype.end = function(e) {
      var i = this._bufferLength;
      this._dataLength += i;
      var n = this._buffer8;
      n[i] = 128,
      n[i + 1] = n[i + 2] = n[i + 3] = 0;
      var s = this._buffer32
        , o = 1 + (i >> 2);
      s.set(a.subarray(o), o),
      i > 55 && (t(this._state, s),
      s.set(a));
      var l = 8 * this._dataLength;
      if (l <= 4294967295)
          s[14] = l;
      else {
          var u = l.toString(16).match(/(.*?)(.{0,8})$/)
            , d = parseInt(u[2], 16)
            , c = parseInt(u[1], 16) || 0;
          s[14] = d,
          s[15] = c
      }
      return t(this._state, s),
      e ? this._state : function(e) {
          for (var t, i, n, a = "0123456789abcdef", s = r, o = 0; o < 4; o++)
              for (i = 8 * o,
              t = e[o],
              n = 0; n < 8; n += 2)
                  s[i + 1 + n] = a.charAt(15 & t),
                  t >>>= 4,
                  s[i + 0 + n] = a.charAt(15 & t),
                  t >>>= 4;
          return s.join("")
      }(this._state)
  }
  ;
  var s = new i;
  i.hashStr = function(e, t) {
      return s.start().appendStr(e).end(t)
  }
  ,
  i.hashAsciiStr = function(e, t) {
      return s.start().appendAsciiStr(e).end(t)
  }
  ,
  "5d41402abc4b2a76b9719d911017c592" !== i.hashStr("hello") && console.error("YaMD5> this javascript engine does not support YaMD5. Sorry."),
  "object" == typeof e && (e.YaMD5 = i)
})(this);

function createOptimizeOpts() {
  return {
      optimize: !0
  }
}

function validateInputAndProcess() {
  var e = createOptimizeOpts();
  ImageCompressor.setOption("optimizeOpts", e),
  ImageCompressor.processFileQueue();
}

var ImageCompressor = function() {
    "use strict";
    document.querySelector.bind(document);
    var e = window.navigator.hardwareConcurrency || 8;
    e--;
    var t, r = new Map, i = ["image/jpeg", "image/png", "image/webp", "image/gif"], n = [], a = [], s = new Map([["image/png", {
        runChain: [function(e, t, r) {
            T(O(e, c), t)
        }
        , async function(e, t, r) {
            T(O(e, h), t)
        }
        ]
    }], ["image/webp", {
        runChain: [async function(e, t, r) {
            R(O(e, p), t, r)
        }
        ]
    }], ["image/gif", {
        runChain: [async function(e, t, r) {
            T(O(e, m), t)
        }
        ]
    }], ["image/jpeg", {
        runChain: [async function(e, t, r) {
            R(O(e, f), t, r)
        }
        ]
    }]]), o = {
        xhr: {
            timeToWaitDoneMs: 10,
            interceptionEnabled: !0
        },
        optimization: {
            png: ["lossy", "lossless"],
            jpg: ["lossy"],
            gif: ["lossy"],
            webp: ["lossy"]
        },
        ui: {
            visible: !0
        },
        resizeOpts: {},
        rotateOpts: {},
        optimizeOpts: {
            optimize: !0
        },
        convertOpts: {}
    }, l = [[], [0, 1, 1], [0, -1, 1], [0, -1, -1], [0, 1, -1], [90, 1, -1], [90, 1, 1], [-90, 1, -1], [-90, 1, 1]], u = [0, 1, 2, 3, 4, 5, 8, 7, 6], d = "from-image" === window.getComputedStyle(document.body).imageOrientation;
    window.javaScriptRoot = window.javaScriptRoot || "";
    var c = window.javaScriptRoot + "plossy/plossy-worker.js"
      , h = window.javaScriptRoot + "plossless/plossless-worker.js"
      , f = window.javaScriptRoot + "jlossy/jlossy-worker.js"
      , p = window.javaScriptRoot + "wlossy/wlossy-worker.js"
      , m = window.javaScriptRoot + "glossy/glossy-worker.js"
      , g = {};
    function w(e) {
        return i.includes(e)
    }
    async function v(e) {
        return function(e) {
            var t = ""
              , r = e.substring(0, 8)
              , i = e.substring(0, 12)
              , n = e.substring(0, 16)
              , a = e.substring(0, 24);
            switch (r) {
            case "ffd8ffe0":
            case "ffd8ffe1":
            case "ffd8ffe2":
            case "ffd8ffe3":
            case "ffd8ffe8":
            case "ffd8ffdb":
                t = "image/jpeg";
                break;
            default:
                t = ""
            }
            if ("" !== t)
                return t;
            switch (i) {
            case "474946383761":
            case "474946383961":
                t = "image/gif";
                break;
            default:
                t = ""
            }
            if ("" !== t)
                return t;
            switch (n) {
            case "89504e470d0a1a0a":
                t = "image/png";
                break;
            default:
                t = ""
            }
            return "" !== t ? t : (a.startsWith("52494646") && a.endsWith("57454250") && (t = "image/webp"),
            t)
        }(await function(e, t, r) {
            return new Promise((function(i, n) {
                e && !1 !== y(e) || n("");
                var a = new FileReader;
                a.onload = function(e) {
                    i(function(e, t, r) {
                        r = r || 2;
                        for (var i = "", n = 0; n < e.length; n++)
                            i += e[n].toString(t).padStart(r, "0");
                        return i
                    }(new Uint8Array(e.target.result), r, 2))
                }
                ,
                a.onerror = function(e) {
                    console.log(e),
                    n("")
                }
                ,
                a.readAsArrayBuffer(e.slice(0, t))
            }
            ))
        }(e, 12, 16))
    }
    function y(e) {
        return "File"in window && e instanceof File
    }
    function _(e) {
        return YaMD5.hashStr(function(e) {
            return +e.lastModified + e.lastModifiedDate + e.name + e.size + e.type
        }(e))
    }
    function b(e, t) {
        return new Promise((function(r, i) {
            var n = document.createElement("img");
            n.onload = function() {
                r(n)
            }
            ,
            n.onerror = function(e) {
                console.log(e),
                i(e)
            }
            ;
            var a = new Blob([e],{
                type: t
            })
              , s = window.URL || window.webkitURL;
            n.src = s.createObjectURL(a)
        }
        ))
    }
    function k(e, t) {
        return new Promise((function(r, i) {
            var n = document.createElement("canvas")
              , a = n.getContext("2d");
            n.width = e.width,
            n.height = e.height,
            a.clearRect(0, 0, n.width, n.height),
            a.drawImage(e, 0, 0),
            n.toBlob(e=>{
                var t = new FileReader;
                t.onload = function() {
                    r(t.result)
                }
                ,
                t.onerror = function(e) {
                    i(e)
                }
                ,
                t.readAsArrayBuffer(e)
            }
            , t)
        }
        ))
    }
    function x(e, t, r) {
        return new Promise((function(i, n) {
            r = function(e, t) {
                var r = {
                    resizeMethod: t.resizeMethod,
                    aspectRatio: t.aspectRatio
                };
                if ("px" === t.resizeMethod)
                    if (!0 !== t.aspectRatio || !1 !== U(t.width) && !1 !== U(t.height)) {
                        if (!1 !== t.aspectRatio || !1 !== U(t.width) || !1 !== U(t.height))
                            return {};
                        r.width = F(t.width),
                        r.height = F(t.height)
                    } else
                        !1 === U(t.width) ? (r.width = F(t.width),
                        r.height = Math.round(e.height * r.width / e.width)) : !1 === U(t.height) && (r.height = F(t.height),
                        r.width = Math.round(e.width * r.height / e.height));
                else {
                    if ("percent" !== t.resizeMethod)
                        return {};
                    if (!0 === t.aspectRatio && !1 === U(t.percent)) {
                        var i = D(t.percent);
                        r.width = Math.round(e.width * (i / 100)),
                        r.height = Math.round(e.height * (i / 100))
                    } else {
                        if (!1 !== t.aspectRatio || !1 !== U(t.percentWidth) || !1 !== U(t.percentHeight))
                            return {};
                        var n = D(t.percentWidth)
                          , a = D(t.percentHeight);
                        r.width = Math.round(e.width * (n / 100)),
                        r.height = Math.round(e.height * (a / 100))
                    }
                }
                return r
            }(e, r);
            var a = e.width
              , s = e.height
              , o = r.width
              , l = r.height
              , u = document.createElement("canvas");
            u.width = e.width,
            u.height = e.height;
            var d = u.getContext("2d");
            if (!d)
                throw Error("Canvas not initialized");
            d.clearRect(0, 0, u.width, u.height),
            d.drawImage(e, 0, 0);
            var c = document.createElement("canvas");
            c.width = o,
            c.height = l;
            var h = c.getContext("2d");
            if (!h)
                throw new Error("Could not create canvas context");
            h.imageSmoothingQuality = "high",
            h.drawImage(u, 0, 0, a, s, 0, 0, o, l),
            c.toBlob(e=>{
                var t = new FileReader;
                t.onload = function() {
                    i(t.result)
                }
                ,
                t.onerror = function(e) {
                    n(e)
                }
                ,
                t.readAsArrayBuffer(e)
            }
            , t)
        }
        ))
    }
    function S(e, t, r, i) {
        return new Promise((function(n, a) {
            var s = document.createElement("canvas")
              , o = s.getContext("2d")
              , c = i || 1;
            (c < 1 || c > 8) && (c = 1);
            var h = [];
            h = r.exifHonoured ? d ? l[1] : l[c] : d ? l[u[c]] : l[1];
            var f = Math.floor(e.width / 2)
              , p = Math.floor(e.height / 2)
              , [m,g,w] = h;
            m = E(m);
            var v = E(r.degrees)
              , y = E(m + g * w * v);
            90 === y || 270 === y ? (s.width = e.height,
            s.height = e.width,
            o.translate(p, f)) : (s.width = e.width,
            s.height = e.height,
            o.translate(f, p)),
            o.rotate(m * Math.PI / 180),
            o.scale(g, w),
            0 !== v && o.rotate(v * g * w * Math.PI / 180),
            o.drawImage(e, -f, -p, e.width, e.height),
            s.toBlob(e=>{
                var t = new FileReader;
                t.onload = function() {
                    n(t.result)
                }
                ,
                t.onerror = function(e) {
                    a(e)
                }
                ,
                t.readAsArrayBuffer(e)
            }
            , t)
        }
        ))
    }
    function E(e) {
        return ((e || 0) % 360 + 360) % 360
    }
    function C(e) {
        var t = new DataView(e);
        if (65496 != t.getUint16(0, !1))
            return -2;
        for (var r = t.byteLength, i = 2; i < r; ) {
            if (t.getUint16(i + 2, !1) <= 8)
                return -1;
            var n = t.getUint16(i, !1);
            if (i += 2,
            65505 === n) {
                if (1165519206 != t.getUint32(i += 2, !1))
                    return -1;
                var a = 18761 == t.getUint16(i += 6, !1);
                i += t.getUint32(i + 4, a);
                var s = t.getUint16(i, a);
                i += 2;
                for (var o = 0; o < s; o++)
                    if (274 == t.getUint16(i + 12 * o, a))
                        return t.getUint16(i + 12 * o + 8, a)
            } else {
                if (65280 != (65280 & n))
                    break;
                i += t.getUint16(i, !1)
            }
        }
        return -1
    }
    function A() {
        e++,
        z()
    }
    function z() {
        if (e > 0 && n.length > 0) {
            var t = n.shift();
            a.push(t),
            !0 === y(t) && async function(t) {
                e--;
                var i = await v(t) || t.type
                  , n = i;
                if (!1 === w(n))
                    return void A();
                var a = await function(e) {
                    return new Promise((function(t, r) {
                        var i = new FileReader;
                        i.onload = function(e) {
                            t(e.target.result)
                        }
                        ,
                        i.onerror = r,
                        i.readAsArrayBuffer(e)
                    }
                    ))
                }(t)
                  , l = _(t);
                if (!1 === r.has(l)) {
                    var u = {
                        input: {
                            fileName: t.name,
                            size: t.size,
                            mimeType: i,
                            blob: t
                        },
                        output: {},
                        status: "intialized",
                        operationList: []
                    };
                    r.set(l, u);
                    var c = [];
                    if (!0 === function(e, t) {
                        return !1 === U(e) && !1 === U(e.target) && "preserve" !== e.target && e.target !== t
                    }(o.convertOpts, i)) {
                        var h = await b(a, i);
                        n = o.convertOpts.target,
                        a = await k(h, n).catch((function(e) {
                            console.error(e)
                        }
                        )),
                        c.push("convert")
                    }
                    if (!0 === function(e, t) {
                        return !1 === U(e) && !1 === U(e.autorotate) && !0 === e.autorotate && "image/jpeg" === t
                    }(o.rotateOpts, n)) {
                        h = await b(a, n);
                        (f = C(a)) >= 1 && f <= 8 && (a = await function(e, t, r) {
                            return "image/jpeg" !== t && reject("Cannot auto-rotate a non-JPEG."),
                            d ? k(e, t) : S(e, t, {
                                exifHonoured: !0,
                                degrees: 0
                            }, r)
                        }(h, n, f).catch(e=>{
                            console.error(e)
                        }
                        )),
                        u.input.exifOrientation = f,
                        c.push("rotate")
                    } else if (!1 === function(e) {
                        return !0 === U(e) || !0 === U(e.degrees) || !1 === U(e.degrees) && 0 === e.degrees
                    }(o.rotateOpts)) {
                        h = await b(a, n);
                        var f = C(a);
                        a = await S(h, n, o.rotateOpts, f).catch(e=>{
                            console.error(e)
                        }
                        ),
                        u.input.exifOrientation = f,
                        c.push("rotate")
                    }
                    if (!0 === function(e) {
                        if (!0 === U(e) || !0 === U(e.aspectRatio) || !0 === U(e.resizeMethod))
                            return !1;
                        return "px" === e.resizeMethod ? !0 === e.aspectRatio ? !1 === U(e.width) || !1 === U(e.height) : !1 === U(e.width) && !1 === U(e.height) : !0 === e.aspectRatio ? !1 === U(e.percent) : !1 === U(e.percentWidth) && !1 === U(e.percentHeight)
                    }(o.resizeOpts)) {
                        h = await b(a, n);
                        a = await x(h, n, o.resizeOpts).catch(e=>{
                            console.error(e)
                        }
                        ),
                        c.push("resize")
                    }
                    u.status = "preprocessed",
                    u.preprocessed = {
                        mimeType: n
                    };
                    var p = [];
                    !0 === function(e) {
                        return !1 === U(e) && !1 === U(e.optimize) && !0 === e.optimize
                    }(o.optimizeOpts) ? (g = n,
                    p = s.get(g).runChain.slice(),
                    c.push("compress")) : p = [L],
                    u.operationList = c,
                    u.runChain = p,
                    r.set(l, u);
                    var m = u.runChain.shift();
                    "function" == typeof m && m(l, a, {
                        mimeType: n
                    }),
                    B()
                }
                var g
            }(t)
        }
    }
    async function I(e, t, i) {
        if (!0 === r.has(e)) {
            var n = r.get(e)
              , a = n.runChain.shift();
            "function" == typeof a ? a(e, t, {
                mimeType: i
            }) : (n.output.fileName = (s = n.input.fileName,
            "" === (o = s.split(".").slice(0, -1).join(".")) && (o = s),
            o + "." + function(e) {
                var t = "";
                switch (e) {
                case "image/jpeg":
                    t = "jpg";
                    break;
                case "image/png":
                    t = "png";
                    break;
                case "image/webp":
                    t = "webp";
                    break;
                case "image/gif":
                    t = "gif"
                }
                return t
            }(i)),
            n.output.mimeType = i,
            n.output.size = t.byteLength,
            n.output.blob = new Blob([t],{
                type: n.output.mimeType,
                name: n.outputName
            }),
            t.byteLength < n.input.size ? n.status = "done" : n.status = "skipped",
            B(),
            A())
        }
        var s, o
    }
    function O(e, t) {
        var r = function(e) {
            var t = g[e];
            return t.length > 0 ? t.shift() : new Worker(e)
        }(t);
        return r.onmessage = function(i) {
            var n = i.data;
            if ("ready" == n.type)
                ;
            else if ("stdout" == n.type)
                console.log(n.data + "\n");
            else if ("start" == n.type)
                console.log("Worker has received command" + e);
            else if ("done" == n.type) {
                var a = n.result;
                a && a.forEach((function(i) {
                    !function(e, t) {
                        g[e].push(t)
                    }(t, r),
                    I(e, new Uint8Array(i.data.buffer,i.data.byteOffset,i.data.length), i.type)
                }
                ))
            } else
                n.type
        }
        ,
        r.onerror = function(e) {
            console.log("worker is suffering!", e)
        }
        ,
        r.onmessageerror = function(e) {
            console.log("worker is suffering!", e)
        }
        ,
        r
    }
    async function T(e, t) {
        var r = new Uint8Array(t,t.byteOffset,t.length);
        e.postMessage({
            type: "command",
            arguments: [],
            file: {
                name: "input.png",
                data: r.buffer
            }
        }, [r.buffer])
    }
    async function R(e, t, r) {
        var i = r.mimeType || "image/jpeg"
          , n = function(e) {
            var t = document.createElement("canvas")
              , r = t.getContext("2d");
            return t.width = e.width,
            t.height = e.height,
            r.drawImage(e, 0, 0),
            r.getImageData(0, 0, e.width, e.height)
        }(await b(t, i));
        e.postMessage({
            type: "command",
            arguments: [],
            file: {
                name: "input.png",
                data: n.data.buffer,
                width: n.width,
                height: n.height
            }
        }, [n.data.buffer])
    }
    async function L(e, t, r) {
        I(e, new Uint8Array(t,0,t.length), r.mimeType)
    }
    function B() {
        "function" == typeof t && t(function() {
            var e = [];
            for (var [t,i] of r.entries()) {
                var a = {
                    status: i.status,
                    key: t,
                    operationList: i.operationList,
                    input: {
                        fileName: i.input.fileName,
                        size: i.input.size,
                        mimeType: i.input.mimeType,
                        blob: i.input.blob,
                        exifOrientation: i.input.exifOrientation
                    },
                    output: {
                        fileName: i.output.fileName,
                        size: i.output.size,
                        mimeType: i.output.mimeType,
                        blob: i.output.blob
                    }
                };
                e.push(a)
            }
            var s = [];
            for (var o of n) {
                var t;
                a = {
                    status: "queued",
                    key: t = _(o),
                    input: {
                        fileName: o.name,
                        size: o.size,
                        mimeType: o.type,
                        blob: o
                    }
                };
                s.push(a)
            }
            return {
                processData: e,
                queuedData: s
            }
        }())
    }
    function D(e) {
        return e < 0 && (e = 1),
        e > 100 && (e = 100),
        e
    }
    function F(e) {
        return e < 1 && (e = 1),
        Math.floor(e)
    }
    function U(e) {
        return !e && !1 !== e && 0 !== e
    }
    return g[c] = [new Worker(c)],
    g[h] = [new Worker(h)],
    g[f] = [new Worker(f)],
    g[p] = [new Worker(p)],
    g[m] = [new Worker(m)],
    {
        addFileToQueue: function(e) {
            var t = function(e) {
                !function(e) {
                    var t = e.split(".").pop();
                    t === e && (t = "")
                }(e);
                var t = "";
                switch (t) {
                case "jpg":
                case "jpeg":
                    t = "image/jpeg";
                    break;
                case "png":
                    t = "image/png";
                    break;
                case "webp":
                    t = "image/webp";
                    break;
                case "gif":
                    t = "image/gif"
                }
                return t
            }(e.name) || e.type
              , i = _(e);
            !0 === w(t) && !1 === r.has(i) && n.push(e)
        },
        processFileQueue: z,
        report: function() {
            var e = 0
              , t = 0
              , i = {};
            for (var n of r.entries())
                "done" === n[1].status && (e += n[1].input.size,
                t += n[1].output.blob.size);
            for (var n of r.entries())
                i[n[1].status] = !0 === U(i[n[1].status]) ? 1 : i[n[1].status] + 1;
            console.log(i),
            console.log(e),
            console.log(t),
            console.log(t / e)
        },
        getOutputFiles: function() {
            var e = new Map;
            for (var [t,i] of r.entries())
                "done" === i.status && e.set(i.output.fileName, i.output.blob);
            return e
        },
        setStatusCallback: function(e) {
            t = e
        },
        callStatusCallback: B,
        setOption: function(e, t) {
            o[e] = t
        },
        restartFileQueue: function() {
            n = a.concat(n),
            a = [],
            r = new Map
        },
        reload: function() {
          // g = {};
          n = [];
          a = [];
          r = new Map;
        }
    }
}();
