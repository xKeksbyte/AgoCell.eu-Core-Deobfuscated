(function(elem, $) {
  /**
   * @param {number} f
   * @param {number} data
   * @param {number} showDialog
   * @return {?}
   */
  function error(f, data, showDialog) {
    var _0x23BC6 = ("00" + (~~f).toString (16)).slice (-2);
    var _0x23B12 = ("00" + (~~data).toString (16)).slice (-2);
    var _0x23A5E = ("00" + (~~showDialog).toString (16)).slice (-2);
    return "#" + _0x23BC6 + "" + _0x23B12 + "" + _0x23A5E + "";
  }
  /**
   * @param {!Array} child
   * @return {?}
   */
  function extend(child) {
    if (child["length"] === 4) {
      return {
        r : parseInt(child[1] + child[1], 16),
        g : parseInt(child[2] + child[2], 16),
        b : parseInt(child[3] + child[3], 16)
      };
    } else {
      if (child["length"] === 7) {
        return {
          r : parseInt(child[1] + child[2], 16),
          g : parseInt(child[3] + child[4], 16),
          b : parseInt(child[5] + child[6], 16)
        };
      }
    }
    throw new Error("Invalid color " + child + "!");
  }
  /**
   * @param {!Array} level
   * @return {?}
   */
  function execute(level) {
    var allKeys = extend(level);
    return error(allKeys["r"] * .9, allKeys["g"] * .9, allKeys["b"] * .9);
  }
  /**
   * @param {!Object} value
   * @return {undefined}
   */
  function parseInt(value) {
    var classKey;
    for (classKey in value) {
      delete value[classKey];
    }
  }
  /**
   * @param {?} post_cmd
   * @return {?}
   */
  function Buffer(post_cmd) {
    this["_e"] = post_cmd;
    this.reset ();
    return this;
  }
  /**
   * @param {?} gl
   * @param {?} type
   * @param {?} raw
   * @return {undefined}
   */
  function D3Material(gl, type, raw) {
    this["_e"] = raw;
    if (gl) {
      this.repurpose (gl, type);
    }
  }
  /**
   * @return {undefined}
   */
  function hide() {
    if (!socket) {
      return;
    }
    CONSOLE_OUTPUT.debug ("WS cleanup triggered!");
    /** @type {null} */
    socket["onopen"] = null;
    /** @type {null} */
    socket["onmessage"] = null;
    /** @type {null} */
    socket["onerror"] = null;
    /** @type {null} */
    socket["onclose"] = null;
    socket.close ();
    /** @type {null} */
    socket = null;
  }
  /**
   * @param {!AudioNode} name
   * @return {undefined}
   */
  function cb(name) {
    if (socket) {
      CONSOLE_OUTPUT.debug ("WS init on existing connection!");
      hide();
    }
    $("#connecting").show ();
    /** @type {!WebSocket} */
    socket = new WebSocket("ws" + (_0x22AE6 ? "s" : "") + "://" + (init = name) + "");
    socket["binaryType"] = "arraybuffer";
    /** @type {function(): undefined} */
    socket["onopen"] = onSocketOpen;
    /** @type {function(?): undefined} */
    socket["onmessage"] = load;
    /** @type {function(?): undefined} */
    socket["onerror"] = $get;
    /** @type {function(?): undefined} */
    socket["onclose"] = fn;
  }
  /**
   * @return {undefined}
   */
  function onSocketOpen() {
    /** @type {number} */
    _0x21BC8 = 1;
    /** @type {number} */
    n = 1E3;
    $("#connecting").hide ();
    _allocate(priv);
    _allocate(basepoint);
    CONSOLE_OUTPUT.debug ("WS connected, using https: " + _0x22AE6 + "");
    console.log ("Socket open.");
  }
  /**
   * @param {?} mmCoreSplitViewBlock
   * @return {undefined}
   */
  function $get(mmCoreSplitViewBlock) {
    CONSOLE_OUTPUT.warn (mmCoreSplitViewBlock);
    console.log ("Socket error.");
  }
  /**
   * @param {?} fullFormat
   * @return {undefined}
   */
  function fn(fullFormat) {
    /** @type {number} */
    _0x21BC8 = 0;
    CONSOLE_OUTPUT.debug ("WS disconnected " + fullFormat["code"] + " '" + fullFormat["reason"] + "'");
    hide();
    val();
    setTimeout(function() {
      if (socket && socket["readyState"] === 1) {
        return;
      }
      cb(init);
    }, n = n * 1.5);
    console.log ("Socket closed");
  }
  /**
   * @param {!ArrayBufferView} bytes
   * @return {undefined}
   */
  function _allocate(bytes) {
    if (!socket) {
      return;
    }
    if (socket["readyState"] !== 1) {
      return;
    }
    if (bytes["build"]) {
      socket.send (bytes.build ());
    } else {
      socket.send (bytes);
    }
  }
  /**
   * @param {?} data
   * @return {undefined}
   */
  function load(data) {
    pos = Date.now ();
    var _0x256D8 = new D3Material(new DataView(data["data"]), 0, 1);
    var _0x2567E = _0x256D8.getUint8 ();
    switch(_0x2567E) {
      case 16:
        var _maskLayer;
        var p;
        var key;
        var values;
        var params;
        var property;
        var overloaded;
        var item;
        var fileName;
        var callingId;
        var inverseFlag;
        var addressCount;
        var response;
        var pkg;
        var ccw_flag;
        addressCount = _0x256D8.getUint16 ();
        /** @type {number} */
        var alarm_class = 0;
        for (; alarm_class < addressCount; alarm_class++) {
          _maskLayer = _0x256D8.getUint32 ();
          p = _0x256D8.getUint32 ();
          if (!items["byId"].hasOwnProperty (_maskLayer) || !items["byId"].hasOwnProperty (p)) {
            continue;
          }
          items["byId"][p].destroy (_maskLayer);
        }
        for (; 1;) {
          key = _0x256D8.getUint32 ();
          if (key === 0) {
            break;
          }
          values = _0x256D8.getInt32 ();
          params = _0x256D8.getInt32 ();
          property = _0x256D8.getUint16 ();
          overloaded = _0x256D8.getUint8 ();
          /** @type {boolean} */
          fileName = !!(overloaded & 2);
          /** @type {boolean} */
          callingId = !!(overloaded & 8);
          /** @type {boolean} */
          inverseFlag = !!(overloaded & 4);
          response = fileName ? error(_0x256D8.getUint8 (), _0x256D8.getUint8 (), _0x256D8.getUint8 ()) : null;
          ccw_flag = inverseFlag ? _0x256D8.getStringUTF8 () : null;
          pkg = callingId ? _0x256D8.getStringUTF8 () : null;
          if (items["byId"].hasOwnProperty (key)) {
            item = items["byId"][key];
            item.update (pos);
            item["updated"] = pos;
            item["ox"] = item["x"];
            item["oy"] = item["y"];
            item["os"] = item["s"];
            item["nx"] = values;
            item["ny"] = params;
            item["ns"] = property;
            if (response) {
              item.setColor (response);
            }
            if (ccw_flag) {
              item.setSkin (ccw_flag);
            }
            if (pkg) {
              item.setName (pkg);
            }
          } else {
            item = new constructor(key, values, params, property, pkg, response, ccw_flag, overloaded);
            items["byId"][key] = item;
            items["list"].push (item);
          }
        }
        addressCount = _0x256D8.getUint16 ();
        /** @type {number} */
        alarm_class = 0;
        for (; alarm_class < addressCount; alarm_class++) {
          p = _0x256D8.getUint32 ();
          if (items["byId"].hasOwnProperty (p) && !items["byId"][p]["destroyed"]) {
            items["byId"][p].destroy (null);
          }
        }
        break;
      case 17:
        t = _0x256D8.getFloat32 ();
        s = _0x256D8.getFloat32 ();
        cellsize = _0x256D8.getFloat32 ();
        break;
      case 18:
        for (alarm_class in items["byId"]) {
          items["byId"][alarm_class].destroy (null);
        }
      case 20:
        /** @type {!Array} */
        items["mine"] = [];
        break;
      case 21:
        CONSOLE_OUTPUT.warn ("Got packet 0x15 (draw line) which is unsupported!");
        break;
      case 32:
        items["mine"].push (_0x256D8.getUint32 ());
        break;
      case 48:
        /** @type {!Array} */
        H["items"] = [];
        H["type"] = "text";
        addressCount = _0x256D8.getUint32 ();
        /** @type {number} */
        alarm_class = 0;
        for (; alarm_class < addressCount; ++alarm_class) {
          H["items"].push (_0x256D8.getStringUTF8 ());
        }
        parseFloat();
        break;
      case 49:
        /** @type {!Array} */
        H["items"] = [];
        H["type"] = "ffa";
        addressCount = _0x256D8.getUint32 ();
        /** @type {number} */
        alarm_class = 0;
        for (; alarm_class < addressCount; ++alarm_class) {
          H["items"].push ({
            me : !!_0x256D8.getUint32 (),
            name : _0x256D8.getStringUTF8 () || "An unnamed cell"
          });
        }
        parseFloat();
        break;
      case 50:
        /** @type {!Array} */
        H["items"] = [];
        H["type"] = "pie";
        addressCount = _0x256D8.getUint32 ();
        /** @type {number} */
        alarm_class = 0;
        for (; alarm_class < addressCount; ++alarm_class) {
          H["items"].push (_0x256D8.getFloat32 ());
        }
        parseFloat();
        break;
      case 64:
        args["left"] = _0x256D8.getFloat64 ();
        args["top"] = _0x256D8.getFloat64 ();
        args["right"] = _0x256D8.getFloat64 ();
        args["bottom"] = _0x256D8.getFloat64 ();
        /** @type {number} */
        args["width"] = args["right"] - args["left"];
        /** @type {number} */
        args["height"] = args["bottom"] - args["top"];
        /** @type {number} */
        args["centerX"] = (args["left"] + args["right"]) / 2;
        /** @type {number} */
        args["centerY"] = (args["top"] + args["bottom"]) / 2;
        if (data["data"]["byteLength"] === 33) {
          break;
        }
        if (!_0x21F4C) {
          /** @type {number} */
          _0x21F4C = 1;
          w = t = args["centerX"];
          h = s = args["centerY"];
          /** @type {number} */
          total_sum = cellsize = 1;
        }
        _0x256D8.getUint32 ();
        if (!/MultiOgar/.test (_0x256D8.getStringUTF8 ()) || value["pingLoopId"]) {
          break;
        }
        /** @type {number} */
        value["pingLoopId"] = setInterval(function() {
          _allocate(new Uint8Array([254]));
          value["pingLoopStamp"] = Date.now ();
        }, 2E3);
        break;
      case 99:
        overloaded = _0x256D8.getUint8 ();
        response = error(_0x256D8.getUint8 (), _0x256D8.getUint8 (), _0x256D8.getUint8 ());
        pkg = _0x256D8.getStringUTF8 ().trim ();
        var options = /\{([\w]+)\}/.exec (pkg);
        if (options) {
          pkg = pkg.replace (options[0], "").trim ();
        }
        var msg_obj = _0x256D8.getStringUTF8 ();
        /** @type {boolean} */
        var activeSalt = !!(overloaded & 128);
        /** @type {boolean} */
        var admin = !!(overloaded & 64);
        /** @type {boolean} */
        var mod = !!(overloaded & 32);
        if (activeSalt && pkg !== "SERVER") {
          pkg = "[SERVER] " + pkg;
        }
        if (admin) {
          pkg = "[ADMIN] " + pkg;
        }
        if (mod) {
          pkg = "[MOD] " + pkg;
        }
        var d = Math.max (3E3, 1E3 + msg_obj["length"] * 150);
        ticks["waitUntil"] = pos - ticks["waitUntil"] > 1E3 ? pos + d : ticks["waitUntil"] + d;
        ticks["messages"].push ({
          server : activeSalt,
          admin : admin,
          mod : mod,
          color : response,
          name : pkg,
          message : msg_obj,
          time : pos
        });
        getConfigIdentifier();
        break;
      case 254:
        value["info"] = JSON.parse (_0x256D8.getStringUTF8 ());
        /** @type {number} */
        value["latency"] = pos - value["pingLoopStamp"];
        loadXMP();
        break;
      default:
        hide();
        break;
    }
  }
  /**
   * @return {undefined}
   */
  function move_to_story() {
    var _0x24652 = new requestAnimationFramev2(240, redrawGameScene);
    _0x24652.ini ();
    requestAnimationFrame(redrawGameSceneAnim);
    var _0x246AC = animationFrame.request (function(canCreateDiscussions) {
      _loop();
    });
  }
  /**
   * @return {undefined}
   */
  function mousemove() {
    value.begin ();
    drawScene();
    value.end ();
  }
  /**
   * @return {undefined}
   */
  function redrawGameScene() {
    value.begin ();
    drawGameScene();
    value.end ();
    elem.requestAnimationFrame (redrawGameScene);
  }
  /**
   * @return {undefined}
   */
  function _loop() {
    value.begin ();
    drawScene();
    value.end ();
    animationFrame.request (function(canCreateDiscussions) {
      _loop();
    });
  }
  /**
   * @param {?} domain
   * @param {?} asset_paths
   * @return {undefined}
   */
  function verify(domain, asset_paths) {
    var priv = new Buffer(1);
    priv.setUint8 (16);
    priv.setUint32 (domain);
    priv.setUint32 (asset_paths);
    priv["_b"].push (0, 0, 0, 0);
    _allocate(priv);
  }
  /**
   * @param {?} isBgroundImg
   * @return {undefined}
   */
  function sign(isBgroundImg) {
    CONSOLE_OUTPUT.debug ("Play triggered");
    var priv = new Buffer(1);
    priv.setUint8 (0);
    priv.setStringUTF8 (isBgroundImg);
    _allocate(priv);
  }
  /**
   * @param {?} remotePath
   * @return {undefined}
   */
  function pullFileAsString(remotePath) {
    var priv = new Buffer;
    priv.setUint8 (99);
    priv.setUint8 (0);
    priv.setStringUTF8 (remotePath);
    _allocate(priv);
  }
  /**
   * @return {undefined}
   */
  function val() {
    parseInt(items);
    parseInt(args);
    parseInt(H);
    parseInt(ticks);
    parseInt(value);
    /** @type {!Array} */
    ticks["messages"] = [];
    /** @type {!Array} */
    H["items"] = [];
    /** @type {!Array} */
    items["mine"] = [];
    items["byId"] = {};
    /** @type {!Array} */
    items["list"] = [];
    /** @type {number} */
    w = h = t = s = 0;
    /** @type {number} */
    total_sum = cellsize = 1;
    /** @type {number} */
    _0x21F4C = 0;
  }
  /**
   * @return {undefined}
   */
  function _insert_template() {
    /** @type {number} */
    winRef = 0;
    $("#overlays").fadeOut (200);
  }
  /**
   * @return {undefined}
   */
  function initMouseDetection() {
    /** @type {number} */
    winRef = 1;
    $("#overlays").fadeIn (300);
  }
  /**
   * @param {?} cfg
   * @return {undefined}
   */
  function clientRender(cfg) {
    cfg.translate (input_obj["width"] / 2, input_obj["height"] / 2);
    getFillAttrs(cfg);
    cfg.translate (-w, -h);
  }
  /**
   * @param {?} cfg
   * @return {undefined}
   */
  function getFillAttrs(cfg) {
    cfg.scale (total_sum, total_sum);
  }
  /**
   * @param {?} cfg
   * @return {undefined}
   */
  function getLineAttrs(cfg) {
    cfg.scale (lastviewmatrix, lastviewmatrix);
  }
  /**
   * @param {?} cfg
   * @return {undefined}
   */
  function createSerieFromParams(cfg) {
    cfg.translate (w, h);
    getLineAttrs(cfg);
    cfg.translate (-input_obj["width"] / 2, -input_obj["height"] / 2);
  }
  /**
   * @return {undefined}
   */
  function getConfigIdentifier() {
    if (ticks["messages"]["length"] === 0 && !translations["hideChat"]) {
      return;
    }
    var t = ticks["canvas"];
    var i = t.getContext ("2d");
    var tiledImageBRs = ticks["messages"].slice (-15);
    /** @type {!Array} */
    var PL$5 = [];
    /** @type {number} */
    var type = 0;
    var tiledImageBR = tiledImageBRs["length"];
    for (; type < tiledImageBR; type++) {
      PL$5.push ([{
        text : tiledImageBRs[type]["name"],
        color : tiledImageBRs[type]["color"]
      }, {
        text : " " + tiledImageBRs[type]["message"],
        color : translations["darkTheme"] ? "#FFF" : "#000"
      }]);
    }
    /** @type {number} */
    var r = 0;
    /** @type {number} */
    var translation = 20 * tiledImageBR + 2;
    /** @type {number} */
    type = 0;
    for (; type < tiledImageBR; type++) {
      /** @type {number} */
      var fraction = 0;
      var PL$13 = PL$5[type];
      /** @type {number} */
      var PL$17 = 0;
      for (; PL$17 < PL$13["length"]; PL$17++) {
        i["font"] = "18px Ubuntu";
        PL$13[PL$17]["width"] = i.measureText (PL$13[PL$17]["text"])["width"];
        fraction = fraction + PL$13[PL$17]["width"];
      }
      r = Math.max (fraction, r);
    }
    t["width"] = r;
    /** @type {number} */
    t["height"] = translation;
    /** @type {number} */
    type = 0;
    for (; type < tiledImageBR; type++) {
      /** @type {number} */
      r = 0;
      PL$13 = PL$5[type];
      /** @type {number} */
      PL$17 = 0;
      for (; PL$17 < PL$13["length"]; PL$17++) {
        i["font"] = "18px Ubuntu";
        i["fillStyle"] = PL$13[PL$17]["color"];
        i.fillText (PL$13[PL$17]["text"], r, 20 * (1 + type));
        r = r + PL$13[PL$17]["width"];
      }
    }
  }
  /**
   * @return {?}
   */
  function loadXMP() {
    if (!value["info"]) {
      return value["visible"] = 0;
    }
    /** @type {number} */
    value["visible"] = 1;
    var element = value["canvas"];
    var PL$22 = element.getContext ("2d");
    PL$22["font"] = "14px Ubuntu";
    if (typeof value["info"]["botsTotal"] === "undefined") {
      /** @type {number} */
      value["info"]["botsTotal"] = 0;
    }
    if (typeof value["info"]["playersDead"] === "undefined") {
      /** @type {number} */
      value["info"]["playersDead"] = 0;
    }
    /** @type {!Array} */
    var PL$13 = ["" + value["info"]["name"] + " (" + value["info"]["mode"] + ")", "" + value["info"]["playersTotal"] + " / " + value["info"]["playersLimit"] + " players", "" + value["info"]["playersAlive"] + " playing", "" + value["info"]["playersDead"] + " dead", "" + value["info"]["playersSpect"] + " spectating", "" + value["info"]["botsTotal"] + " bots", "" + 
    (value["info"]["update"] * 2.5).toFixed (1) + "% memory load", "" + change_btn(value["info"]["uptime"]) + " uptime"];
    /** @type {number} */
    var deltaX = 0;
    /** @type {number} */
    var PL$17 = 0;
    for (; PL$17 < PL$13["length"]; PL$17++) {
      deltaX = Math.max (deltaX, 2 + PL$22.measureText (PL$13[PL$17])["width"] + 2);
    }
    element["width"] = deltaX;
    /** @type {number} */
    element["height"] = PL$13["length"] * (14 + 2);
    PL$22["font"] = "14px Ubuntu";
    PL$22["fillStyle"] = translations["darkTheme"] ? "#AAA" : "#555";
    PL$22["textBaseline"] = "top";
    /** @type {number} */
    PL$17 = 0;
    for (; PL$17 < PL$13["length"]; PL$17++) {
      PL$22.fillText (PL$13[PL$17], 2, -2 + PL$17 * (14 + 2));
    }
  }
  /**
   * @param {number} hide
   * @return {?}
   */
  function change_btn(hide) {
    /** @type {number} */
    hide = ~~hide;
    /** @type {number} */
    var _0x25192 = ~~(hide / 60);
    if (_0x25192 < 1) {
      return "<1 min";
    }
    /** @type {number} */
    var _0x25138 = ~~(_0x25192 / 60);
    if (_0x25138 < 1) {
      return _0x25192 + " min";
    }
    /** @type {number} */
    var _0x250DE = ~~(_0x25138 / 24);
    if (_0x250DE < 1) {
      return _0x25138 + " hours";
    }
    return _0x250DE + " days";
  }
  /**
   * @return {?}
   */
  function parseFloat() {
    if (H["type"] === NaN) {
      return H["visible"] = 0;
    }
    if (!translations["showNames"] || H["items"]["length"] === 0) {
      return H["visible"] = 0;
    }
    /** @type {number} */
    H["visible"] = 1;
    var a = H["canvas"];
    var options = a.getContext ("2d");
    var viewSourceWithCount = H["items"]["length"];
    /** @type {number} */
    a["width"] = 250;
    /** @type {number} */
    a["height"] = H["type"] !== "pie" ? 60 + 24 * viewSourceWithCount : 240;
    /** @type {number} */
    options["globalAlpha"] = .4;
    options["fillStyle"] = "#000";
    options.fillRect (0, 0, 250, a["height"]);
    /** @type {number} */
    options["globalAlpha"] = 1;
    options["fillStyle"] = "#FFF";
    options["font"] = "30px Ubuntu";
    options.fillText ("Leaderboard", 125 - options.measureText ("Leaderboard")["width"] / 2, 40);
    if (H["type"] === "pie") {
      /** @type {number} */
      var ops = 0;
      /** @type {number} */
      var i = 0;
      for (; i < viewSourceWithCount; i++) {
        options["fillStyle"] = H["teams"][i];
        options.beginPath ();
        options.moveTo (125, 140);
        options.arc (125, 140, 80, ops, ops = ops + H["items"][i] * Math["PI"] * 2, 0);
        options.closePath ();
        options.fill ();
      }
    } else {
      var item;
      /** @type {number} */
      var existing = 0;
      options["font"] = "20px Ubuntu";
      /** @type {number} */
      i = 0;
      for (; i < viewSourceWithCount; i++) {
        if (H["type"] === "text") {
          item = H["items"][i];
        } else {
          item = H["items"][i]["name"];
          existing = H["items"][i]["me"];
        }
        var property = /\{([\w]+)\}/.exec (item);
        if (property) {
          item = item.replace (property[0], "").trim ();
        }
        /** @type {string} */
        var yminstr = String($("#lbColor").val ());
        options["fillStyle"] = existing ? "#" + (!yminstr ? "FAA" : yminstr) : "#FFF";
        if (H["type"] === "ffa") {
          item = i + 1 + ". " + (item || "An unnamed cell");
        }
        options["textAlign"] = "left";
        options.fillText (item, 15, 70 + 24 * i);
      }
    }
  }
  /**
   * @return {undefined}
   */
  function min() {
    cfg.save ();
    /** @type {number} */
    cfg["lineWidth"] = 1;
    cfg["strokeStyle"] = translations["darkTheme"] ? "#AAA" : "#000";
    /** @type {number} */
    cfg["globalAlpha"] = .2;
    /** @type {number} */
    var mainBlockWidth = 50;
    var entry_x;
    /** @type {number} */
    var widthOffset = input_obj["width"] / total_sum;
    /** @type {number} */
    var lastviewmatrix = input_obj["height"] / total_sum;
    /** @type {number} */
    var _0x24382 = (-w + widthOffset / 2) % mainBlockWidth;
    /** @type {number} */
    var _0x243DC = (-h + lastviewmatrix / 2) % mainBlockWidth;
    getFillAttrs(cfg);
    cfg.beginPath ();
    /** @type {number} */
    entry_x = _0x24382;
    for (; entry_x < widthOffset; entry_x = entry_x + mainBlockWidth) {
      cfg.moveTo (entry_x, 0);
      cfg.lineTo (entry_x, lastviewmatrix);
    }
    /** @type {number} */
    entry_x = _0x243DC;
    for (; entry_x < lastviewmatrix; entry_x = entry_x + mainBlockWidth) {
      cfg.moveTo (0, entry_x);
      cfg.lineTo (widthOffset, entry_x);
    }
    cfg.closePath ();
    cfg.stroke ();
    cfg.restore ();
  }
  /**
   * @return {undefined}
   */
  function getPixelOnImageSizeMax() {
    if (!_0x21BC8 || args["centerX"] !== 0 || args["centerY"] !== 0 || !translations["mapBorders"]) {
      return;
    }
    cfg.save ();
    cfg["strokeStyle"] = "#ff0000ad";
    /** @type {number} */
    cfg["lineWidth"] = 20;
    cfg["lineCap"] = "round";
    cfg["lineJoin"] = "round";
    cfg.beginPath ();
    cfg.moveTo (args["left"], args["top"]);
    cfg.lineTo (args["right"], args["top"]);
    cfg.lineTo (args["right"], args["bottom"]);
    cfg.lineTo (args["left"], args["bottom"]);
    cfg.closePath ();
    cfg.stroke ();
    cfg.restore ();
  }
  /**
   * @return {undefined}
   */
  function setCoverage() {
    if (!_0x21BC8 || args["centerX"] !== 0 || args["centerY"] !== 0 || !translations["sectors"]) {
      return;
    }
    var h = args["left"] + 65;
    /** @type {number} */
    var y = args["bottom"] - 65;
    var COLUMNS = "ABCDE".split ("");
    /** @type {number} */
    var s = (args["right"] - 65 - h) / 5;
    /** @type {number} */
    var height = (args["top"] + 65 - y) / 5;
    cfg.save ();
    cfg.beginPath ();
    /** @type {number} */
    cfg["lineWidth"] = .05;
    cfg["textAlign"] = "center";
    cfg["textBaseline"] = "middle";
    cfg["font"] = s * .6 + "px Russo One";
    cfg["fillStyle"] = "#1A1A1A";
    /** @type {number} */
    var i = 0;
    for (; 5 > i; i++) {
      /** @type {number} */
      var j = 0;
      for (; 5 > j; j++) {
        cfg.fillText (COLUMNS[i] + (j + 1), h + s * i + s / 2, -y - height + height * -j + height / 2);
      }
    }
    /** @type {number} */
    cfg["lineWidth"] = 100;
    cfg["strokeStyle"] = "#2323238c";
    /** @type {number} */
    i = 0;
    for (; 5 > i; i++) {
      /** @type {number} */
      j = 0;
      for (; 5 > j; j++) {
        cfg.strokeRect (h + s * j, y + height * i, s, height);
      }
    }
    cfg.restore ();
    cfg.stroke ();
  }
  /**
   * @return {undefined}
   */
  function isCovered() {
    if (!_0x21BC8 || args["centerX"] !== 0 || args["centerY"] !== 0 || !translations["showMinimap"]) {
      return;
    }
    cfg.save ();
    /** @type {number} */
    var xWidth = 200 * (args["width"] / args["height"]);
    /** @type {number} */
    var contentWidth = 200 * (args["height"] / args["width"]);
    /** @type {number} */
    var time = input_obj["width"] / stepRow - xWidth;
    /** @type {number} */
    var prefix = input_obj["height"] / stepRow - contentWidth;
    cfg["fillStyle"] = "#000";
    /** @type {number} */
    cfg["globalAlpha"] = .4;
    cfg.fillRect (time, prefix, xWidth, contentWidth);
    /** @type {number} */
    cfg["globalAlpha"] = 1;
    /** @type {!Array} */
    var gridCells = ["ABCDE", "12345"];
    /** @type {number} */
    var SIZE = xWidth / 5;
    /** @type {number} */
    var dist = contentWidth / 5;
    /** @type {number} */
    var _0x24AE4 = Math.min (SIZE, dist) / 3;
    cfg["fillStyle"] = translations["darkTheme"] ? "#666" : "#DDD";
    cfg["textBaseline"] = "middle";
    cfg["textAlign"] = "center";
    cfg["font"] = "" + _0x24AE4 + "px Russo One";
    /** @type {number} */
    var j = 0;
    for (; j < 5; j++) {
      /** @type {number} */
      var duration = SIZE / 2 + j * SIZE;
      /** @type {number} */
      var y = 0;
      for (; y < 5; y++) {
        /** @type {number} */
        var displayMove = dist / 2 + y * dist;
        cfg.fillText ("" + gridCells[0][j] + "" + gridCells[1][y] + "", time + duration, prefix + displayMove);
      }
    }
    /** @type {number} */
    var x = xWidth / args["width"];
    /** @type {number} */
    var width = contentWidth / args["height"];
    /** @type {number} */
    var k = args["width"] / 2;
    /** @type {number} */
    var px = args["height"] / 2;
    /** @type {number} */
    var lastTime = time + (w + k) * x;
    /** @type {number} */
    var prefixedPropertyName = prefix + (h + px) * width;
    cfg.beginPath ();
    if (items["mine"]["length"]) {
      /** @type {number} */
      j = 0;
      for (; j < items["mine"]["length"]; j++) {
        var d = items["byId"][items["mine"][j]];
        if (d) {
          cfg["fillStyle"] = translations["showColor"] ? d["color"] : "#FFF";
          /** @type {number} */
          duration = time + (d["x"] + k) * x;
          /** @type {number} */
          displayMove = prefix + (d["y"] + px) * width;
          cfg.moveTo (duration + d["s"] * x, displayMove);
          cfg.arc (duration, displayMove, d["s"] * x, 0, Math["PI"] * 2);
        }
      }
    } else {
      cfg["fillStyle"] = "#FFF";
      cfg.arc (lastTime, prefixedPropertyName, 5, 0, Math["PI"] * 2);
    }
    cfg.fill ();
    cfg.restore ();
  }
  /**
   * @return {undefined}
   */
  function updateBestTileAtCurrentLevel() {
    item = Date.now ();
    var PL$13 = items["list"].slice (0).sort (subtract);
    /** @type {number} */
    var PL$17 = 0;
    for (; PL$17 < PL$13["length"]; PL$17++) {
      PL$13[PL$17].update (item);
    }
    max();
    cfg.save ();
    cfg["fillStyle"] = translations["darkTheme"] ? "#111" : "#F2FBFF";
    cfg.fillRect (0, 0, input_obj["width"], input_obj["height"]);
    if (!translations["hideGrid"]) {
      min();
    }
    clientRender(cfg);
    getPixelOnImageSizeMax();
    setCoverage();
    /** @type {number} */
    PL$17 = 0;
    for (; PL$17 < PL$13["length"]; PL$17++) {
      PL$13[PL$17].draw (cfg);
    }
    createSerieFromParams(cfg);
    cfg.scale (stepRow, stepRow);
    /** @type {number} */
    var GET_AUTH_URL_TIMEOUT = 2;
    cfg["fillStyle"] = translations["darkTheme"] ? "#FFF" : "#000";
    cfg["textBaseline"] = "top";
    if (!isNaN(value["score"])) {
      cfg["font"] = "30px Ubuntu";
      if (!translations["showPos"] || !_0x21BC8) {
        var _0x24274 = "";
      } else {
        _0x24274 = "| Position: (" + ~~w + ", " + ~~h + ")";
      }
      cfg.fillText ("Score: " + value["score"] + " " + _0x24274 + "", 2, GET_AUTH_URL_TIMEOUT);
      /** @type {number} */
      GET_AUTH_URL_TIMEOUT = GET_AUTH_URL_TIMEOUT + 30;
    } else {
      cfg["font"] = "30px Ubuntu";
      if (!translations["showPos"] || !_0x21BC8) {
        _0x24274 = "";
      } else {
        _0x24274 = "Position: (" + ~~w + ", " + ~~h + ")";
        cfg.fillText ("" + _0x24274 + "", 2, GET_AUTH_URL_TIMEOUT);
        /** @type {number} */
        GET_AUTH_URL_TIMEOUT = GET_AUTH_URL_TIMEOUT + 30;
      }
    }
    cfg["font"] = "20px Ubuntu";
    if (value["visible"]) {
      cfg.drawImage (value["canvas"], 2, GET_AUTH_URL_TIMEOUT);
    }
    if (H["visible"]) {
      cfg.drawImage (H["canvas"], input_obj["width"] / stepRow - 10 - H["canvas"]["width"], 10);
    }
    if (!translations["hideChat"] && (inputWin || 1)) {
      /** @type {number} */
      cfg["globalAlpha"] = inputWin ? 1 : Math.max (1E3 - item + ticks["waitUntil"], 0) / 1E3;
      cfg.drawImage (ticks["canvas"], 10 / stepRow, (input_obj["height"] - 55) / stepRow - ticks["canvas"]["height"]);
      /** @type {number} */
      cfg["globalAlpha"] = 1;
    }
    isCovered();
    cfg.restore ();
    resetCoverage();
    elem.requestAnimationFrame (updateBestTileAtCurrentLevel);
  }
  /**
   * @param {?} subtractor
   * @param {?} subtractee
   * @return {?}
   */
  function subtract(subtractor, subtractee) {
    return subtractor["s"] === subtractee["s"] ? subtractor["id"] - subtractee["id"] : subtractor["s"] - subtractee["s"];
  }
  /**
   * @return {undefined}
   */
  function max() {
    /** @type {!Array} */
    var tags = [];
    /** @type {number} */
    var i = 0;
    for (; i < items["mine"]["length"]; i++) {
      if (items["byId"].hasOwnProperty (items["mine"][i])) {
        tags.push (items["byId"][items["mine"][i]]);
      }
    }
    if (tags["length"] > 0) {
      /** @type {number} */
      var v = 0;
      /** @type {number} */
      var diff = 0;
      /** @type {number} */
      var count = 0;
      /** @type {number} */
      var val = 0;
      /** @type {number} */
      i = 0;
      var a = tags["length"];
      for (; i < a; i++) {
        var values = tags[i];
        /** @type {number} */
        val = val + ~~(values["ns"] * values["ns"] / 100);
        v = v + values["x"];
        diff = diff + values["y"];
        count = count + values["s"];
      }
      /** @type {number} */
      t = v / a;
      /** @type {number} */
      s = diff / a;
      cellsize = Math.pow (Math.min (64 / count, 1), .4);
      w = w + (t - w) / 2;
      h = h + (s - h) / 2;
      /** @type {number} */
      value["score"] = val;
      value["maxScore"] = Math.max (value["maxScore"], val);
    } else {
      /** @type {number} */
      value["score"] = NaN;
      /** @type {number} */
      value["maxScore"] = 0;
      w = w + (t - w) / 20;
      h = h + (s - h) / 20;
    }
    total_sum = total_sum + (cellsize * stepRow * norm - total_sum) / 9;
    /** @type {number} */
    lastviewmatrix = 1 / total_sum;
  }
  /**
   * @param {?} poscount
   * @param {?} var_args
   * @param {?} var_kwargs
   * @param {?} date
   * @param {?} y
   * @param {?} topLevelMenu
   * @param {?} type
   * @param {number} element
   * @return {undefined}
   */
  function constructor(poscount, var_args, var_kwargs, date, y, topLevelMenu, type, element) {
    this["id"] = poscount;
    this["x"] = this["nx"] = this["ox"] = var_args;
    this["y"] = this["ny"] = this["oy"] = var_kwargs;
    this["s"] = this["ns"] = this["os"] = date;
    this.setColor (topLevelMenu);
    this.setName (y);
    this.setSkin (type);
    /** @type {number} */
    this["jagged"] = element & 1 || element & 16;
    /** @type {boolean} */
    this["ejected"] = !!(element & 32);
    /** @type {boolean} */
    this["Speed"] = !!(element & 144);
    /** @type {boolean} */
    this["food"] = !!(element & 128);
    this["born"] = pos;
  }
  /**
   * @return {undefined}
   */
  function resetCoverage() {
    var prop;
    for (prop in data) {
      var prop2;
      for (prop2 in data[prop]) {
        if (item - data[prop][prop2]["accessTime"] >= 5E3) {
          delete data[prop][prop2];
        }
      }
      if (data[prop] === {}) {
        delete data[prop];
      }
    }
    for (prop in target) {
      if (item - target[prop]["accessTime"] >= 5E3) {
        delete target[prop];
      }
    }
  }
  /**
   * @param {?} meta
   * @param {?} data
   * @param {!Object} value
   * @param {number} count
   * @return {undefined}
   */
  function callback(meta, data, value, count) {
    data["font"] = "" + count + "px Ubuntu";
    data["lineWidth"] = translations["showTextOutline"] ? Math.max (~~(count / 10), 2) : 2;
    meta["width"] = data.measureText (value)["width"] + 2 * data["lineWidth"];
    /** @type {number} */
    meta["height"] = 4 * count;
    data["font"] = "" + count + "px Ubuntu";
    data["lineWidth"] = translations["showTextOutline"] ? Math.max (~~(count / 10), 2) : 2;
    data["textBaseline"] = "middle";
    data["textAlign"] = "center";
    /** @type {string} */
    var yminstr = String($("#nameColor").val ());
    data["fillStyle"] = "#" + (!yminstr ? "FFF" : yminstr);
    data["strokeStyle"] = "#000";
    data.translate (meta["width"] / 2, 2 * count);
    if (data["lineWidth"] !== 1) {
      data.strokeText (value, 0, 0);
    }
    data.fillText (value, 0, 0);
  }
  /**
   * @param {?} params
   * @param {number} status
   * @param {number} transform
   * @param {!Array} result
   * @param {number} context
   * @return {undefined}
   */
  function render(params, status, transform, result, context) {
    params["font"] = "" + context + "px Ubuntu";
    params["textBaseline"] = "middle";
    params["textAlign"] = "center";
    params["lineWidth"] = translations["showTextOutline"] ? Math.max (~~(context / 10), 2) : 2;
    params["fillStyle"] = "#FFF";
    params["strokeStyle"] = "#000";
    if (params["lineWidth"] !== 1) {
      params.strokeText (result, status, transform);
    }
    params.fillText (result, status, transform);
    params.restore ();
  }
  /**
   * @param {!Object} k
   * @param {number} i
   * @return {?}
   */
  function merge(k, i) {
    var container = document.createElement ("canvas");
    var message = container.getContext ("2d");
    callback(container, message, k, i);
    data[k] = data[k] || {};
    data[k][i] = {
      width : container["width"],
      height : container["height"],
      canvas : container,
      value : k,
      size : i,
      accessTime : item
    };
    return data[k][i];
  }
  /**
   * @param {number} key
   * @return {?}
   */
  function when(key) {
    var egressPerm = {
      0 : {},
      1 : {},
      2 : {},
      3 : {},
      4 : {},
      5 : {},
      6 : {},
      7 : {},
      8 : {},
      9 : {}
    };
    var i;
    for (i in egressPerm) {
      var http = egressPerm[i]["canvas"] = document.createElement ("canvas");
      var message = http.getContext ("2d");
      callback(http, message, i, key);
      egressPerm[i]["canvas"] = http;
      egressPerm[i]["width"] = http["width"];
      egressPerm[i]["height"] = http["height"];
    }
    target[key] = {
      canvases : egressPerm,
      size : key,
      lineWidth : translations["showTextOutline"] ? Math.max (~~(key / 10), 2) : 2,
      accessTime : item
    };
    return target[key];
  }
  /**
   * @param {number} e2
   * @param {number} p
   * @param {number} marg2
   * @return {?}
   */
  function compare(e2, p, marg2) {
    return e2 - marg2 <= p && p <= e2 + marg2;
  }
  /**
   * @param {!Object} i
   * @param {number} e
   * @return {?}
   */
  function next(i, e) {
    if (!data[i]) {
      return merge(i, e);
    }
    var result = Object.keys (data[i]);
    /** @type {number} */
    var j = 0;
    var _jlen = result["length"];
    for (; j < _jlen; j++) {
      if (compare(e, result[j], e / 4)) {
        return data[i][result[j]];
      }
    }
    return merge(i, e);
  }
  /**
   * @param {number} ctx
   * @return {?}
   */
  function drawEggs(ctx) {
    var targetFields = Object.keys (target);
    /** @type {number} */
    var i = 0;
    var maxValue = targetFields["length"];
    for (; i < maxValue; i++) {
      if (compare(ctx, targetFields[i], ctx / 4)) {
        return target[targetFields[i]];
      }
    }
    return when(ctx);
  }
  /**
   * @param {?} content
   * @param {number} url
   * @param {number} target
   * @param {number} time
   * @param {number} ctx
   * @param {number} callback
   * @param {!Array} options
   * @return {?}
   */
  function draw(content, url, target, time, ctx, callback, options) {
    content.save ();
    if (ctx > 500) {
      return render(content, target, time, options, callback);
    }
    content["imageSmoothingQuality"] = "high";
    if (url) {
      var r = drawEggs(ctx);
      r["accessTime"] = item;
      var window = r["canvases"];
      /** @type {number} */
      var trigger = callback / r["size"];
      /** @type {number} */
      var range = 0;
      /** @type {number} */
      var i = 0;
      for (; i < options["length"]; i++) {
        /** @type {number} */
        range = range + (window[options[i]]["width"] - 2 * r["lineWidth"]);
      }
      content.scale (trigger, trigger);
      /** @type {number} */
      target = target / trigger;
      /** @type {number} */
      time = time / trigger;
      /** @type {number} */
      target = target - range / 2;
      /** @type {number} */
      i = 0;
      for (; i < options["length"]; i++) {
        var helloComponent = window[options[i]];
        content.drawImage (helloComponent["canvas"], target, time - helloComponent["height"] / 2);
        target = target + (helloComponent["width"] - 2 * r["lineWidth"]);
      }
    } else {
      r = next(options, ctx);
      r["accessTime"] = item;
      var rparams = r["canvas"];
      /** @type {number} */
      trigger = callback / r["size"];
      content.scale (trigger, trigger);
      /** @type {number} */
      target = target / trigger;
      /** @type {number} */
      time = time / trigger;
      content.drawImage (rparams, target - rparams["width"] / 2, time - rparams["height"] / 2);
    }
    content.restore ();
  }
  /**
   * @return {undefined}
   */
  function func() {
    /**
     * @param {?} event
     * @return {undefined}
     */
    function onDocumentKeyUp(event) {
      /** @type {number} */
      norm = norm * Math.pow (.95, event["wheelDelta"] / -120 || event["detail"] || 0);
      if (!translations["infiniteZoom"]) {
        if (1 > norm) {
          /** @type {number} */
          norm = 1;
        }
      }
      if (norm > 4 / norm) {
        /** @type {number} */
        norm = 4 / norm;
      }
    }
    input_obj = document.getElementById ("canvas");
    cfg = input_obj.getContext ("2d");
    widgetArr = document.getElementById ("chat_textbox");
    input_obj.focus ();
    if (/firefox/i.test (navigator["userAgent"])) {
      document.addEventListener ("DOMMouseScroll", onDocumentKeyUp, 0);
    } else {
      /** @type {function(?): undefined} */
      document["body"]["onmousewheel"] = onDocumentKeyUp;
    }
    /**
     * @param {?} canCreateDiscussions
     * @return {undefined}
     */
    elem["onkeydown"] = function(canCreateDiscussions) {
      switch(canCreateDiscussions["keyCode"]) {
        case 13:
          if (winRef) {
            break;
          }
          if (translations["hideChat"]) {
            break;
          }
          if (inputWin) {
            widgetArr.blur ();
            var remotePath = widgetArr["value"];
            if (remotePath["length"] > 0) {
              pullFileAsString(remotePath);
            }
            widgetArr["value"] = "";
          } else {
            widgetArr.focus ();
          }
          break;
        case 32:
          if (inputWin || winRef || map["space"]) {
            break;
          }
          _allocate(_0x229D8[17]);
          /** @type {number} */
          map["space"] = 1;
          break;
        case 87:
          if (inputWin || winRef) {
            break;
          }
          _allocate(_0x229D8[21]);
          /** @type {number} */
          map["w"] = 1;
          break;
        case 81:
          if (inputWin || winRef || map["q"]) {
            break;
          }
          _allocate(_0x229D8[18]);
          /** @type {number} */
          map["q"] = 1;
          break;
        case 69:
          if (inputWin || winRef) {
            break;
          }
          _allocate(_0x229D8[22]);
          /** @type {number} */
          map["e"] = 1;
          break;
        case 82:
          if (inputWin || winRef) {
            break;
          }
          _allocate(_0x229D8[23]);
          /** @type {number} */
          map["r"] = 1;
          break;
        case 84:
          if (inputWin || winRef || map["t"]) {
            break;
          }
          _allocate(_0x229D8[24]);
          /** @type {number} */
          map["t"] = 1;
          break;
        case 80:
          if (inputWin || winRef || map["p"]) {
            break;
          }
          _allocate(_0x229D8[25]);
          /** @type {number} */
          map["p"] = 1;
          break;
        case 79:
          if (inputWin || winRef || map["o"]) {
            break;
          }
          _allocate(_0x229D8[26]);
          /** @type {number} */
          map["o"] = 1;
          break;
        case 77:
          if (inputWin || winRef || map["m"]) {
            break;
          }
          _allocate(_0x229D8[27]);
          /** @type {number} */
          map["m"] = 1;
          break;
        case 73:
          if (inputWin || winRef || map["i"]) {
            break;
          }
          _allocate(_0x229D8[28]);
          /** @type {number} */
          map["i"] = 1;
          break;
        case 89:
          if (inputWin || winRef) {
            break;
          }
          _allocate(_0x229D8[30]);
          /** @type {number} */
          map["y"] = 1;
          break;
        case 85:
          if (inputWin || winRef) {
            break;
          }
          _allocate(_0x229D8[31]);
          /** @type {number} */
          map["u"] = 1;
          break;
        case 75:
          if (inputWin || winRef || map["k"]) {
            break;
          }
          _allocate(_0x229D8[29]);
          /** @type {number} */
          map["k"] = 1;
          break;
        case 76:
          if (inputWin || winRef || map["l"]) {
            break;
          }
          _allocate(_0x229D8[33]);
          /** @type {number} */
          map["l"] = 1;
          break;
        case 72:
          if (inputWin || winRef || map["h"]) {
            break;
          }
          _allocate(_0x229D8[34]);
          /** @type {number} */
          map["h"] = 1;
          break;
        case 90:
          if (inputWin || winRef) {
            break;
          }
          _allocate(_0x229D8[35]);
          /** @type {number} */
          map["z"] = 1;
          break;
        case 88:
          if (inputWin || winRef || map["x"]) {
            break;
          }
          _allocate(_0x229D8[36]);
          /** @type {number} */
          map["x"] = 1;
          break;
        case 83:
          if (inputWin || winRef) {
            break;
          }
          _allocate(_0x229D8[37]);
          /** @type {number} */
          map["s"] = 1;
          break;
        case 67:
          if (inputWin || winRef || map["c"]) {
            break;
          }
          _allocate(_0x229D8[38]);
          /** @type {number} */
          map["c"] = 1;
          break;
        case 71:
          if (inputWin || winRef) {
            break;
          }
          _allocate(_0x229D8[39]);
          /** @type {number} */
          map["j"] = 1;
          break;
        case 74:
          if (inputWin || winRef) {
            break;
          }
          _allocate(_0x229D8[40]);
          /** @type {number} */
          map["g"] = 1;
          break;
        case 66:
          if (inputWin || winRef || map["b"]) {
            break;
          }
          _allocate(_0x229D8[41]);
          /** @type {number} */
          map["b"] = 1;
          break;
        case 86:
          if (inputWin || winRef) {
            break;
          }
          _allocate(_0x229D8[42]);
          /** @type {number} */
          map["v"] = 1;
          break;
        case 78:
          if (inputWin || winRef) {
            break;
          }
          _allocate(_0x229D8[43]);
          /** @type {number} */
          map["n"] = 1;
          break;
        case 27:
          if (map["esc"]) {
            break;
          }
          if (winRef) {
            _insert_template();
          } else {
            initMouseDetection();
          }
          /** @type {number} */
          map["esc"] = 1;
          break;
      }
    };
    /**
     * @param {?} canCreateDiscussions
     * @return {undefined}
     */
    elem["onkeyup"] = function(canCreateDiscussions) {
      switch(canCreateDiscussions["keyCode"]) {
        case 32:
          /** @type {number} */
          map["space"] = 0;
          break;
        case 87:
          /** @type {number} */
          map["w"] = 0;
          break;
        case 81:
          if (map["q"]) {
            _allocate(_0x229D8[19]);
          }
          /** @type {number} */
          map["q"] = 0;
          break;
        case 69:
          /** @type {number} */
          map["e"] = 0;
          break;
        case 82:
          /** @type {number} */
          map["r"] = 0;
          break;
        case 84:
          /** @type {number} */
          map["t"] = 0;
          break;
        case 80:
          /** @type {number} */
          map["p"] = 0;
          break;
        case 79:
          /** @type {number} */
          map["o"] = 0;
          break;
        case 77:
          /** @type {number} */
          map["m"] = 0;
          break;
        case 73:
          /** @type {number} */
          map["i"] = 0;
          break;
        case 89:
          /** @type {number} */
          map["y"] = 0;
          break;
        case 85:
          /** @type {number} */
          map["u"] = 0;
          break;
        case 75:
          /** @type {number} */
          map["k"] = 0;
          break;
        case 76:
          /** @type {number} */
          map["l"] = 0;
          break;
        case 72:
          /** @type {number} */
          map["h"] = 0;
          break;
        case 90:
          /** @type {number} */
          map["z"] = 0;
          break;
        case 88:
          /** @type {number} */
          map["x"] = 0;
          break;
        case 83:
          /** @type {number} */
          map["s"] = 0;
          break;
        case 67:
          /** @type {number} */
          map["c"] = 0;
          break;
        case 74:
          /** @type {number} */
          map["g"] = 0;
          break;
        case 71:
          /** @type {number} */
          map["j"] = 0;
          break;
        case 66:
          /** @type {number} */
          map["b"] = 0;
          break;
        case 86:
          /** @type {number} */
          map["v"] = 0;
          break;
        case 78:
          /** @type {number} */
          map["n"] = 0;
          break;
        case 27:
          /** @type {number} */
          map["esc"] = 0;
          break;
      }
    };
    /**
     * @return {undefined}
     */
    widgetArr["onblur"] = function() {
      /** @type {number} */
      inputWin = 0;
      getConfigIdentifier();
    };
    /**
     * @return {undefined}
     */
    widgetArr["onfocus"] = function() {
      /** @type {number} */
      inputWin = 1;
      getConfigIdentifier();
    };
    /**
     * @param {?} prices
     * @return {undefined}
     */
    input_obj["onmousemove"] = function(prices) {
      maxSell = prices["clientX"];
      minBuy = prices["clientY"];
    };
    setInterval(function() {
      verify((maxSell - input_obj["width"] / 2) / total_sum + w, (minBuy - input_obj["height"] / 2) / total_sum + h);
    }, 60);
    /**
     * @return {undefined}
     */
    elem["onresize"] = function() {
      var height = input_obj["width"] = elem["innerWidth"];
      var delta = input_obj["height"] = elem["innerHeight"];
      stepRow = Math.sqrt (Math.min (delta / 1080, height / 1920));
    };
    elem.onresize ();
    CONSOLE_OUTPUT.info ("Init completed in " + (Date.now () - _0x2140C) + "ms");
    val();
    initMouseDetection();
    if (translations["allowGETipSet"] && elem["location"]["search"]) {
      var _0x24F76 = /ip=([\w\W]+):([0-9]+)/.exec (elem["location"]["search"].slice (1));
      if (_0x24F76) {
        cb("" + _0x24F76[1] + ":" + _0x24F76[2] + "");
      }
    }
    window.requestAnimationFrame (updateBestTileAtCurrentLevel);
  }
  if (navigator["appVersion"].indexOf ("MSIE") != -1) {
    alert("You're using a pretty old browser, some parts of the site may not work properly!");
  }
  if (!Date["now"]) {
    /**
     * @return {?}
     */
    Date["now"] = function() {
      return (+new Date).getTime ();
    };
  }
  var _0x2140C = Date.now ();
  /**
   * @return {?}
   */
  Array["prototype"]["peek"] = function() {
    return this[this["length"] - 1];
  };
  /**
   * @param {?} level
   * @return {?}
   */
  Array["prototype"]["remove"] = function(level) {
    var numberOfTiles = this.indexOf (level);
    if (numberOfTiles !== -1) {
      this.splice (numberOfTiles, 1);
    }
    return numberOfTiles !== -1;
  };
  /** @type {!DataView} */
  var funcHandlers = new DataView(new ArrayBuffer(8));
  Buffer["prototype"] = {
    writer : 1,
    reset : function(noalert) {
      /** @type {!Array} */
      this["_b"] = [];
      /** @type {number} */
      this["_o"] = 0;
    },
    setUint8 : function(value) {
      if (value >= 0 && value < 256) {
        this["_b"].push (value);
      }
      return this;
    },
    setInt8 : function(value) {
      if (value >= -128 && value < 128) {
        this["_b"].push (value);
      }
      return this;
    },
    setUint16 : function(value) {
      funcHandlers.setUint16 (0, value, this["_e"]);
      this._move (2);
      return this;
    },
    setInt16 : function(value) {
      funcHandlers.setInt16 (0, value, this["_e"]);
      this._move (2);
      return this;
    },
    setUint32 : function(value) {
      funcHandlers.setUint32 (0, value, this["_e"]);
      this._move (4);
      return this;
    },
    setInt32 : function(value) {
      funcHandlers.setInt32 (0, value, this["_e"]);
      this._move (4);
      return this;
    },
    setFloat32 : function(value) {
      funcHandlers.setFloat32 (0, value, this["_e"]);
      this._move (4);
      return this;
    },
    setFloat64 : function(value) {
      funcHandlers.setFloat64 (0, value, this["_e"]);
      this._move (8);
      return this;
    },
    _move : function(justCalc) {
      /** @type {number} */
      var fqn = 0;
      for (; fqn < justCalc; fqn++) {
        this["_b"].push (funcHandlers.getUint8 (fqn));
      }
    },
    setStringUTF8 : function(value) {
      /** @type {string} */
      var data = unescape(encodeURIComponent(value));
      /** @type {number} */
      var parameter = 0;
      var passid = data["length"];
      for (; parameter < passid; parameter++) {
        this["_b"].push (data.charCodeAt (parameter));
      }
      this["_b"].push (0);
      return this;
    },
    build : function() {
      return new Uint8Array(this["_b"]);
    }
  };
  D3Material["prototype"] = {
    reader : 1,
    repurpose : function(formatters, customFormatters) {
      this["view"] = formatters;
      this["_o"] = customFormatters || 0;
    },
    getUint8 : function() {
      return this["view"].getUint8 (this["_o"]++, this["_e"]);
    },
    getInt8 : function() {
      return this["view"].getInt8 (this["_o"]++, this["_e"]);
    },
    getUint16 : function() {
      return this["view"].getUint16 ((this["_o"] += 2) - 2, this["_e"]);
    },
    getInt16 : function() {
      return this["view"].getInt16 ((this["_o"] += 2) - 2, this["_e"]);
    },
    getUint32 : function() {
      return this["view"].getUint32 ((this["_o"] += 4) - 4, this["_e"]);
    },
    getInt32 : function() {
      return this["view"].getInt32 ((this["_o"] += 4) - 4, this["_e"]);
    },
    getFloat32 : function() {
      return this["view"].getFloat32 ((this["_o"] += 4) - 4, this["_e"]);
    },
    getFloat64 : function() {
      return this["view"].getFloat64 ((this["_o"] += 8) - 8, this["_e"]);
    },
    getStringUTF8 : function() {
      var strResult = "";
      var rgUTF8Bytes;
      for (; (rgUTF8Bytes = this["view"].getUint8 (this["_o"]++)) !== 0;) {
        strResult = strResult + String.fromCharCode (rgUTF8Bytes);
      }
      return decodeURIComponent(escape(strResult));
    }
  };
  var CONSOLE_OUTPUT = {
    verbosity : 4,
    error : function(val) {
      if (CONSOLE_OUTPUT["verbosity"] <= 0) {
        return;
      }
      console.error (val);
    },
    warn : function(a) {
      if (CONSOLE_OUTPUT["verbosity"] <= 1) {
        return;
      }
      console.warn (a);
    },
    info : function(message) {
      if (CONSOLE_OUTPUT["verbosity"] <= 2) {
        return;
      }
      console.info (message);
    },
    debug : function(format) {
      if (CONSOLE_OUTPUT["verbosity"] <= 3) {
        return;
      }
      console.debug (format);
    }
  };
  /** @type {null} */
  var init = null;
  var _0x22654 = "../../skins/";
  var _0x21ABA = "../../hats/";
  /** @type {boolean} */
  var _0x22AE6 = "https:" == elem["location"]["protocol"];
  /** @type {!Uint8Array} */
  var priv = new Uint8Array([254, 6, 0, 0, 0]);
  /** @type {!Uint8Array} */
  var basepoint = new Uint8Array([255, 1, 0, 0, 0]);
  var _0x229D8 = {
    1 : new Uint8Array([1]),
    17 : new Uint8Array([17]),
    21 : new Uint8Array([21]),
    18 : new Uint8Array([18]),
    19 : new Uint8Array([19]),
    22 : new Uint8Array([22]),
    23 : new Uint8Array([23]),
    24 : new Uint8Array([24]),
    25 : new Uint8Array([25]),
    26 : new Uint8Array([26]),
    27 : new Uint8Array([27]),
    28 : new Uint8Array([28]),
    30 : new Uint8Array([30]),
    31 : new Uint8Array([31]),
    29 : new Uint8Array([29]),
    33 : new Uint8Array([33]),
    34 : new Uint8Array([34]),
    35 : new Uint8Array([35]),
    36 : new Uint8Array([36]),
    37 : new Uint8Array([37]),
    38 : new Uint8Array([38]),
    39 : new Uint8Array([39]),
    40 : new Uint8Array([40]),
    41 : new Uint8Array([41]),
    42 : new Uint8Array([42]),
    43 : new Uint8Array([43]),
    254 : new Uint8Array([254])
  };
  /** @type {number} */
  var datum = 0;
  /** @type {number} */
  var numKeysDeleted = 0;
  /** @type {number} */
  var _maskLayer = 0;
  /** @type {number} */
  var _maskLayerSimulate = 0;
  if (localStorage.getItem ("virusShootKey") === null) {
    localStorage.setItem ("getMinionsKey", datum);
    localStorage.setItem ("speedBoostKey", numKeysDeleted);
    localStorage.setItem ("virusPushKey", _maskLayer);
    localStorage.setItem ("virusShootKey", _maskLayerSimulate);
  }
  var items = Object.create ({
    mine : [],
    byId : {},
    list : []
  });
  var args = Object.create ({
    left : -2E3,
    right : 2E3,
    top : -2E3,
    bottom : 2E3,
    width : 4E3,
    height : 4E3,
    centerX : -1,
    centerY : -1
  });
  var H = Object.create ({
    type : NaN,
    items : null,
    canvas : document.createElement ("canvas"),
    teams : ["#F33", "#3F3", "#33F"]
  });
  var ticks = Object.create ({
    messages : [],
    waitUntil : 0,
    canvas : document.createElement ("canvas"),
    visible : 0
  });
  var value = Object.create ({
    latency : NaN,
    supports : null,
    info : null,
    pingLoopId : NaN,
    pingLoopStamp : null,
    canvas : document.createElement ("canvas"),
    visible : 0,
    score : NaN,
    maxScore : 0
  });
  /** @type {null} */
  var socket = null;
  /** @type {null} */
  init = null;
  /** @type {number} */
  var _0x21BC8 = 0;
  /** @type {number} */
  var n = 1E3;
  var pos = Date.now ();
  var item = Date.now ();
  /** @type {null} */
  var input_obj = null;
  /** @type {null} */
  var cfg = null;
  var _0x21CD6 = {};
  var _0x21C7C = {};
  var array = {};
  var images = {};
  /** @type {number} */
  var winRef = 0;
  /** @type {number} */
  var inputWin = 0;
  /** @type {null} */
  var widgetArr = null;
  /** @type {number} */
  var _0x21F4C = 0;
  /** @type {number} */
  var w = 0;
  /** @type {number} */
  var h = 0;
  /** @type {number} */
  var total_sum = 1;
  /** @type {number} */
  var lastviewmatrix = 1;
  /** @type {number} */
  var t = 0;
  /** @type {number} */
  var s = 0;
  /** @type {number} */
  var cellsize = 1;
  /** @type {number} */
  var stepRow = 1;
  /** @type {number} */
  var maxSell = NaN;
  /** @type {number} */
  var minBuy = NaN;
  /** @type {number} */
  var norm = 1;
  var translations = {
    mobile : "createTouch" in document,
    showMass : 0,
    showNames : 1,
    hideChat : 0,
    showTextOutline : 1,
    showColor : 1,
    showSkins : 1,
    showMinimap : 1,
    darkTheme : 0,
    hideGrid : 0,
    cellBorders : 1,
    infiniteZoom : 1,
    transparency : 0,
    mapBorders : 1,
    sectors : 0,
    showPos : 0,
    hideFood : 0,
    allowGETipSet : 0
  };
  var map = {
    space : 0,
    w : 0,
    e : 0,
    r : 0,
    t : 0,
    p : 0,
    q : 0,
    o : 0,
    m : 0,
    i : 0,
    y : 0,
    u : 0,
    k : 0,
    l : 0,
    h : 0,
    z : 0,
    x : 0,
    s : 0,
    c : 0,
    g : 0,
    j : 0,
    b : 0,
    v : 0,
    n : 0,
    esc : 0
  };
  if (null !== elem["localStorage"]) {
    $(window).load (function() {
      $(".save").each (function() {
        var OUR_TAG_CLS_NAME = $(this).data ("box-id");
        var srcHost = elem["localStorage"].getItem ("checkbox-" + OUR_TAG_CLS_NAME);
        if (srcHost && srcHost == "1" && 0 != OUR_TAG_CLS_NAME) {
          $(this).prop ("checked", "1");
          $(this).trigger ("change");
        } else {
          if (OUR_TAG_CLS_NAME == 0 && srcHost != null) {
            $(this).val (srcHost);
          }
        }
      });
      $(".save").change (function() {
        var _0x233B0 = $(this).data ("box-id");
        var artistTrack = _0x233B0 == 0 ? $(this).val () : $(this).prop ("checked");
        elem["localStorage"].setItem ("checkbox-" + _0x233B0, artistTrack);
      });
    });
  }
  constructor["prototype"] = {
    destroyed : 0,
    id : 0,
    diedBy : 0,
    ox : 0,
    x : 0,
    nx : 0,
    oy : 0,
    y : 0,
    ny : 0,
    os : 0,
    s : 0,
    ns : 0,
    nameSize : 0,
    drawNameSize : 0,
    color : "#FFF",
    sColor : "#E5E5E5",
    skin : null,
    jagged : 0,
    born : null,
    updated : null,
    dead : null,
    destroy : function(onlyCss) {
      delete items["byId"][this["id"]];
      if (items["mine"].remove (this["id"]) && items["mine"]["length"] === 0) {
        initMouseDetection();
      }
      /** @type {number} */
      this["destroyed"] = 1;
      this["dead"] = pos;
      if (onlyCss && !this["diedBy"]) {
        /** @type {boolean} */
        this["diedBy"] = onlyCss;
      }
    },
    update : function(percentageValues) {
      /** @type {number} */
      var n = (percentageValues - this["updated"]) / 120;
      n = Math.max (Math.min (n, 1), 0);
      if (this["destroyed"] && Date.now () > this["dead"] + 200) {
        items["list"].remove (this);
      } else {
        if (this["diedBy"] && items["byId"].hasOwnProperty (this["diedBy"])) {
          this["nx"] = items["byId"][this["diedBy"]]["x"];
          this["ny"] = items["byId"][this["diedBy"]]["y"];
        }
      }
      this["x"] = this["ox"] + (this["nx"] - this["ox"]) * n;
      this["y"] = this["oy"] + (this["ny"] - this["oy"]) * n;
      this["s"] = this["os"] + (this["ns"] - this["os"]) * n;
      /** @type {number} */
      this["nameSize"] = ~~(~~Math.max (~~(.3 * this["ns"]), 24) / 3) * 3;
      /** @type {number} */
      this["drawNameSize"] = ~~(~~Math.max (~~(.3 * this["s"]), 24) / 3) * 3;
    },
    setName : function(PL$13) {
      var PL$15 = /\{([\w\W]+)\}/.exec (PL$13);
      if (this["skin"] === null && PL$15 !== null) {
        this["name"] = PL$13.replace (PL$15[0], "").trim ();
        this.setSkin (PL$15[1]);
      } else {
        this["name"] = PL$13;
      }
    },
    setSkin : function(event) {
      this["skin"] = (event && event[0] === "%" ? event.slice (1) : event) || this["skin"];
      if (this["skin"] === null || !_0x21CD6.hasOwnProperty (this["skin"]) || array[this["skin"]]) {
        return;
      }
      /** @type {!Image} */
      array[this["skin"]] = new Image;
      array[this["skin"]]["src"] = "" + _0x22654 + "" + this["skin"] + ".png";
    },
    setHat : function(canCreateDiscussions) {
      this["hat"] = canCreateDiscussions;
      if (this["hat"] === null || !_0x21C7C.hasOwnProperty (this["hat"]) || images[this["hat"]]) {
        return;
      }
      /** @type {!Image} */
      images[this["hat"]] = new Image;
      images[this["hat"]]["src"] = "" + _0x21ABA + "" + this["hat"] + ".png";
    },
    setColor : function(value) {
      if (!value) {
        return CONSOLE_OUTPUT.warn ("Returned no color!");
      }
      /** @type {!Array} */
      this["color"] = value;
      this["sColor"] = execute(value);
    },
    draw : function(yOrig) {
      if (this["Speed"] === true) {
        /** @type {!Image} */
        var slashThunderImageObject = new Image;
        slashThunderImageObject["src"] = "https://www.shareicon.net/data/128x128/2016/08/18/814946_arrows_512x512.png";
        slashThunderImageObject["width"] = this["size"];
        slashThunderImageObject["height"] = this["size"];
        return cfg.drawImage (slashThunderImageObject, this["x"] - this["size"], this["y"] - this["size"], this["size"] * 2, this["size"] * 2);
      }
      yOrig.save ();
      this.drawShape (yOrig);
      this.drawText (yOrig);
      yOrig.restore ();
    },
    drawShape : function(cfg) {
      if (translations["hideFood"] && this["food"]) {
        return;
      }
      cfg["fillStyle"] = translations["showColor"] ? this["color"] : constructor["prototype"]["color"];
      /** @type {string} */
      var yminstr = String($("#cellBorderColor").val ());
      cfg["strokeStyle"] = yminstr === "000000" || yminstr === "000" || !yminstr ? translations["showColor"] ? this["sColor"] : constructor["prototype"]["sColor"] : "#" + yminstr;
      /** @type {string} */
      var iframeSrcRandom = String($("#cellBorderSize").val ());
      cfg["lineWidth"] = this["jagged"] ? 12 : !iframeSrcRandom || iframeSrcRandom > 50 ? Math.max (~~(this["s"] / 50), 10) : iframeSrcRandom;
      var _0x23842 = translations["cellBorders"] && !this["food"] && !this["ejected"] && 20 < this["s"];
      if (_0x23842) {
        this["s"] -= cfg["lineWidth"] / 2 - 2;
      }
      cfg.beginPath ();
      if (this["jagged"]) {
        var scale = this["s"];
        /** @type {number} */
        var i = Math["PI"] * 2 / scale;
        cfg.moveTo (this["x"], this["y"] + this["s"] + 3);
        /** @type {number} */
        var s = 1;
        for (; s < scale; s++) {
          /** @type {number} */
          var value = s * i;
          /** @type {number} */
          var sign = this["s"] - 3 + (s % 2 === 0) * 6;
          cfg.lineTo (this["x"] + sign * Math.sin (value), this["y"] + sign * Math.cos (value));
        }
        cfg.lineTo (this["x"], this["y"] + this["s"] + 3);
      } else {
        cfg.arc (this["x"], this["y"], this["s"], 0, Math["PI"] * 2, 0);
      }
      cfg.closePath ();
      if (translations["transparency"]) {
        /** @type {number} */
        cfg["globalAlpha"] = .75;
      } else {
        if (this["destroyed"]) {
          /** @type {number} */
          cfg["globalAlpha"] = Math.max (200 - Date.now () + this["dead"], 0) / 100;
        } else {
          /** @type {number} */
          cfg["globalAlpha"] = Math.min (Date.now () - this["born"], 200) / 100;
        }
      }
      if (_0x23842) {
        cfg.stroke ();
      }
      cfg.fill ();
      if (translations["showSkins"] && this["skin"]) {
        var item = array[this["skin"]];
        if (item && item["complete"] && item["width"] && item["height"]) {
          cfg.save ();
          cfg.clip ();
          getLineAttrs(cfg);
          /** @type {number} */
          var alphaS = this["s"] * total_sum;
          cfg.drawImage (item, this["x"] * total_sum - alphaS, this["y"] * total_sum - alphaS, alphaS = alphaS * 2, alphaS);
          getFillAttrs(cfg);
          cfg.restore ();
        }
      }
      if (_0x23842) {
        this["s"] += cfg["lineWidth"] / 2 - 2;
      }
    },
    drawText : function(text) {
      if (this["s"] < 20 || this["jagged"]) {
        return;
      }
      if (translations["showMass"] && (items["mine"].indexOf (this["id"]) !== -1 || items["mine"]["length"] === 0) && !this["food"]) {
        var min = (~~(this["s"] * this["s"] / 100)).toString ();
        if (this["name"] && translations["showNames"]) {
          draw(text, 0, this["x"], this["y"], this["nameSize"], this["drawNameSize"], this["name"]);
          var data = this["y"] + Math.max (this["s"] / 4.5, this["nameSize"] / 1.5);
          draw(text, 1, this["x"], data, this["nameSize"] / 2, this["drawNameSize"] / 2, min);
        } else {
          draw(text, 1, this["x"], this["y"], this["nameSize"] / 2, this["drawNameSize"] / 2, min);
        }
      } else {
        if (this["name"] && translations["showNames"]) {
          draw(text, 0, this["x"], this["y"], this["nameSize"], this["drawNameSize"], this["name"]);
        }
      }
    }
  };
  var data = {};
  var target = {};
  /**
   * @param {!AudioNode} Server
   * @return {undefined}
   */
  elem["setServer"] = function(Server) {
    if (init === Server) {
      return;
    }
    cb(Server);
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setDarkTheme"] = function(result) {
    translations["darkTheme"] = result;
    loadXMP();
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setShowMass"] = function(result) {
    translations["showMass"] = result;
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setSkins"] = function(result) {
    translations["showSkins"] = result;
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setHats"] = function(result) {
    translations["showHats"] = result;
  };
  /**
   * @param {?} canCreateDiscussions
   * @return {undefined}
   */
  elem["setColors"] = function(canCreateDiscussions) {
    /** @type {boolean} */
    translations["showColor"] = !canCreateDiscussions;
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setNames"] = function(result) {
    translations["showNames"] = result;
    parseFloat();
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setChatHide"] = function(result) {
    translations["hideChat"] = result;
    if (translations["hideChat"]) {
      $("#chat_textbox").hide ();
    } else {
      $("#chat_textbox").show ();
    }
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setItemsHide"] = function(result) {
    translations["hideItems"] = result;
    if (translations["hideItems"]) {
      $("#items_box").hide ();
    } else {
      $("#items_box").show ();
    }
  };
  /**
   * @param {?} canCreateDiscussions
   * @return {undefined}
   */
  elem["setMinimap"] = function(canCreateDiscussions) {
    /** @type {boolean} */
    translations["showMinimap"] = !canCreateDiscussions;
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setGrid"] = function(result) {
    translations["hideGrid"] = result;
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setCellBorder"] = function(result) {
    translations["cellBorders"] = result;
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setZoom"] = function(result) {
    translations["infiniteZoom"] = result;
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setTransparency"] = function(result) {
    translations["transparency"] = result;
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setMapBorders"] = function(result) {
    translations["mapBorders"] = result;
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setSectors"] = function(result) {
    translations["sectors"] = result;
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setCellPos"] = function(result) {
    translations["showPos"] = result;
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setTextOutline"] = function(result) {
    translations["showTextOutline"] = result;
  };
  /**
   * @param {?} result
   * @return {undefined}
   */
  elem["setFood"] = function(result) {
    translations["hideFood"] = result;
  };
  /**
   * @return {undefined}
   */
  elem["spectate"] = function() {
    _allocate(new Uint8Array([1]));
    /** @type {number} */
    value["maxScore"] = 0;
    _insert_template();
  };
  /**
   * @param {?} isBgroundImg
   * @return {undefined}
   */
  elem["play"] = function(isBgroundImg) {
    sign(isBgroundImg);
    _insert_template();
  };
  /** @type {function(): undefined} */
  elem["onload"] = func;
})(window, window["jQuery"]);
