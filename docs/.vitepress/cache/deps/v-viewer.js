import {
  createElementBlock,
  defineComponent,
  h,
  nextTick,
  onMounted,
  onUnmounted,
  openBlock,
  ref,
  render,
  renderSlot,
  watch
} from "./chunk-V634PGSD.js";

// node_modules/viewerjs/dist/viewer.esm.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
var DEFAULTS = {
  /**
   * Enable a modal backdrop, specify `static` for a backdrop
   * which doesn't close the modal on click.
   * @type {boolean}
   */
  backdrop: true,
  /**
   * Show the button on the top-right of the viewer.
   * @type {boolean}
   */
  button: true,
  /**
   * Show the navbar.
   * @type {boolean | number}
   */
  navbar: true,
  /**
   * Specify the visibility and the content of the title.
   * @type {boolean | number | Function | Array}
   */
  title: true,
  /**
   * Show the toolbar.
   * @type {boolean | number | Object}
   */
  toolbar: true,
  /**
   * Custom class name(s) to add to the viewer's root element.
   * @type {string}
   */
  className: "",
  /**
   * Define where to put the viewer in modal mode.
   * @type {string | Element}
   */
  container: "body",
  /**
   * Filter the images for viewing. Return true if the image is viewable.
   * @type {Function}
   */
  filter: null,
  /**
   * Enable to request fullscreen when play.
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/FullscreenOptions}
   * @type {boolean|FullscreenOptions}
   */
  fullscreen: true,
  /**
   * Define the extra attributes to inherit from the original image.
   * @type {Array}
   */
  inheritedAttributes: ["crossOrigin", "decoding", "isMap", "loading", "referrerPolicy", "sizes", "srcset", "useMap"],
  /**
   * Define the initial coverage of the viewing image.
   * @type {number}
   */
  initialCoverage: 0.9,
  /**
   * Define the initial index of the image for viewing.
   * @type {number}
   */
  initialViewIndex: 0,
  /**
   * Enable inline mode.
   * @type {boolean}
   */
  inline: false,
  /**
   * The amount of time to delay between automatically cycling an image when playing.
   * @type {number}
   */
  interval: 5e3,
  /**
   * Enable keyboard support.
   * @type {boolean}
   */
  keyboard: true,
  /**
   * Focus the viewer when initialized.
   * @type {boolean}
   */
  focus: true,
  /**
   * Indicate if show a loading spinner when load image or not.
   * @type {boolean}
   */
  loading: true,
  /**
   * Indicate if enable loop viewing or not.
   * @type {boolean}
   */
  loop: true,
  /**
   * Min width of the viewer in inline mode.
   * @type {number}
   */
  minWidth: 200,
  /**
   * Min height of the viewer in inline mode.
   * @type {number}
   */
  minHeight: 100,
  /**
   * Enable to move the image.
   * @type {boolean}
   */
  movable: true,
  /**
   * Enable to rotate the image.
   * @type {boolean}
   */
  rotatable: true,
  /**
   * Enable to scale the image.
   * @type {boolean}
   */
  scalable: true,
  /**
   * Enable to zoom the image.
   * @type {boolean}
   */
  zoomable: true,
  /**
   * Enable to zoom the current image by dragging on the touch screen.
   * @type {boolean}
   */
  zoomOnTouch: true,
  /**
   * Enable to zoom the image by wheeling mouse.
   * @type {boolean}
   */
  zoomOnWheel: true,
  /**
   * Enable to slide to the next or previous image by swiping on the touch screen.
   * @type {boolean}
   */
  slideOnTouch: true,
  /**
   * Indicate if toggle the image size between its natural size
   * and initial size when double click on the image or not.
   * @type {boolean}
   */
  toggleOnDblclick: true,
  /**
   * Show the tooltip with image ratio (percentage) when zoom in or zoom out.
   * @type {boolean}
   */
  tooltip: true,
  /**
   * Enable CSS3 Transition for some special elements.
   * @type {boolean}
   */
  transition: true,
  /**
   * Define the CSS `z-index` value of viewer in modal mode.
   * @type {number}
   */
  zIndex: 2015,
  /**
   * Define the CSS `z-index` value of viewer in inline mode.
   * @type {number}
   */
  zIndexInline: 0,
  /**
   * Define the ratio when zoom the image by wheeling mouse.
   * @type {number}
   */
  zoomRatio: 0.1,
  /**
   * Define the min ratio of the image when zoom out.
   * @type {number}
   */
  minZoomRatio: 0.01,
  /**
   * Define the max ratio of the image when zoom in.
   * @type {number}
   */
  maxZoomRatio: 100,
  /**
   * Define where to get the original image URL for viewing.
   * @type {string | Function}
   */
  url: "src",
  /**
   * Event shortcuts.
   * @type {Function}
   */
  ready: null,
  show: null,
  shown: null,
  hide: null,
  hidden: null,
  view: null,
  viewed: null,
  move: null,
  moved: null,
  rotate: null,
  rotated: null,
  scale: null,
  scaled: null,
  zoom: null,
  zoomed: null,
  play: null,
  stop: null
};
var TEMPLATE = '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>';
var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
var WINDOW = IS_BROWSER ? window : {};
var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : false;
var HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : false;
var NAMESPACE = "viewer";
var ACTION_MOVE = "move";
var ACTION_SWITCH = "switch";
var ACTION_ZOOM = "zoom";
var CLASS_ACTIVE = "".concat(NAMESPACE, "-active");
var CLASS_CLOSE = "".concat(NAMESPACE, "-close");
var CLASS_FADE = "".concat(NAMESPACE, "-fade");
var CLASS_FIXED = "".concat(NAMESPACE, "-fixed");
var CLASS_FULLSCREEN = "".concat(NAMESPACE, "-fullscreen");
var CLASS_FULLSCREEN_EXIT = "".concat(NAMESPACE, "-fullscreen-exit");
var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
var CLASS_HIDE_MD_DOWN = "".concat(NAMESPACE, "-hide-md-down");
var CLASS_HIDE_SM_DOWN = "".concat(NAMESPACE, "-hide-sm-down");
var CLASS_HIDE_XS_DOWN = "".concat(NAMESPACE, "-hide-xs-down");
var CLASS_IN = "".concat(NAMESPACE, "-in");
var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
var CLASS_LOADING = "".concat(NAMESPACE, "-loading");
var CLASS_MOVE = "".concat(NAMESPACE, "-move");
var CLASS_OPEN = "".concat(NAMESPACE, "-open");
var CLASS_SHOW = "".concat(NAMESPACE, "-show");
var CLASS_TRANSITION = "".concat(NAMESPACE, "-transition");
var EVENT_CLICK = "click";
var EVENT_DBLCLICK = "dblclick";
var EVENT_DRAG_START = "dragstart";
var EVENT_FOCUSIN = "focusin";
var EVENT_KEY_DOWN = "keydown";
var EVENT_LOAD = "load";
var EVENT_ERROR = "error";
var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup";
var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove";
var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown";
var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START;
var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE;
var EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END;
var EVENT_RESIZE = "resize";
var EVENT_TRANSITION_END = "transitionend";
var EVENT_WHEEL = "wheel";
var EVENT_READY = "ready";
var EVENT_SHOW = "show";
var EVENT_SHOWN = "shown";
var EVENT_HIDE = "hide";
var EVENT_HIDDEN = "hidden";
var EVENT_VIEW = "view";
var EVENT_VIEWED = "viewed";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_ROTATE = "rotate";
var EVENT_ROTATED = "rotated";
var EVENT_SCALE = "scale";
var EVENT_SCALED = "scaled";
var EVENT_ZOOM = "zoom";
var EVENT_ZOOMED = "zoomed";
var EVENT_PLAY = "play";
var EVENT_STOP = "stop";
var DATA_ACTION = "".concat(NAMESPACE, "Action");
var REGEXP_SPACES = /\s\s*/;
var BUTTONS = ["zoom-in", "zoom-out", "one-to-one", "reset", "prev", "play", "next", "rotate-left", "rotate-right", "flip-horizontal", "flip-vertical"];
function isString(value) {
  return typeof value === "string";
}
var isNaN = Number.isNaN || WINDOW.isNaN;
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
function isUndefined(value) {
  return typeof value === "undefined";
}
function isObject(value) {
  return _typeof(value) === "object" && value !== null;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }
  try {
    var _constructor = value.constructor;
    var prototype = _constructor.prototype;
    return _constructor && prototype && hasOwnProperty.call(prototype, "isPrototypeOf");
  } catch (error) {
    return false;
  }
}
function isFunction(value) {
  return typeof value === "function";
}
function forEach(data, callback) {
  if (data && isFunction(callback)) {
    if (Array.isArray(data) || isNumber(data.length)) {
      var length = data.length;
      var i;
      for (i = 0; i < length; i += 1) {
        if (callback.call(data, data[i], i, data) === false) {
          break;
        }
      }
    } else if (isObject(data)) {
      Object.keys(data).forEach(function(key) {
        callback.call(data, data[key], key, data);
      });
    }
  }
  return data;
}
var assign = Object.assign || function assign2(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (isObject(obj) && args.length > 0) {
    args.forEach(function(arg) {
      if (isObject(arg)) {
        Object.keys(arg).forEach(function(key) {
          obj[key] = arg[key];
        });
      }
    });
  }
  return obj;
};
var REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/;
function setStyle(element, styles) {
  var style = element.style;
  forEach(styles, function(value, property) {
    if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
      value += "px";
    }
    style[property] = value;
  });
}
function escapeHTMLEntities(value) {
  return isString(value) ? value.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : value;
}
function hasClass(element, value) {
  if (!element || !value) {
    return false;
  }
  return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
}
function addClass(element, value) {
  if (!element || !value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      addClass(elem, value);
    });
    return;
  }
  if (element.classList) {
    element.classList.add(value);
    return;
  }
  var className = element.className.trim();
  if (!className) {
    element.className = value;
  } else if (className.indexOf(value) < 0) {
    element.className = "".concat(className, " ").concat(value);
  }
}
function removeClass(element, value) {
  if (!element || !value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      removeClass(elem, value);
    });
    return;
  }
  if (element.classList) {
    element.classList.remove(value);
    return;
  }
  if (element.className.indexOf(value) >= 0) {
    element.className = element.className.replace(value, "");
  }
}
function toggleClass(element, value, added) {
  if (!value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      toggleClass(elem, value, added);
    });
    return;
  }
  if (added) {
    addClass(element, value);
  } else {
    removeClass(element, value);
  }
}
var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;
function hyphenate(value) {
  return value.replace(REGEXP_HYPHENATE, "$1-$2").toLowerCase();
}
function getData(element, name) {
  if (isObject(element[name])) {
    return element[name];
  }
  if (element.dataset) {
    return element.dataset[name];
  }
  return element.getAttribute("data-".concat(hyphenate(name)));
}
function setData(element, name, data) {
  if (isObject(data)) {
    element[name] = data;
  } else if (element.dataset) {
    element.dataset[name] = data;
  } else {
    element.setAttribute("data-".concat(hyphenate(name)), data);
  }
}
var onceSupported = function() {
  var supported = false;
  if (IS_BROWSER) {
    var once = false;
    var listener = function listener2() {
    };
    var options = Object.defineProperty({}, "once", {
      get: function get() {
        supported = true;
        return once;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function set(value) {
        once = value;
      }
    });
    WINDOW.addEventListener("test", listener, options);
    WINDOW.removeEventListener("test", listener, options);
  }
  return supported;
}();
function removeListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function(event) {
    if (!onceSupported) {
      var listeners = element.listeners;
      if (listeners && listeners[event] && listeners[event][listener]) {
        handler = listeners[event][listener];
        delete listeners[event][listener];
        if (Object.keys(listeners[event]).length === 0) {
          delete listeners[event];
        }
        if (Object.keys(listeners).length === 0) {
          delete element.listeners;
        }
      }
    }
    element.removeEventListener(event, handler, options);
  });
}
function addListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var _handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function(event) {
    if (options.once && !onceSupported) {
      var _element$listeners = element.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
      _handler = function handler() {
        delete listeners[event][listener];
        element.removeEventListener(event, _handler, options);
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        listener.apply(element, args);
      };
      if (!listeners[event]) {
        listeners[event] = {};
      }
      if (listeners[event][listener]) {
        element.removeEventListener(event, listeners[event][listener], options);
      }
      listeners[event][listener] = _handler;
      element.listeners = listeners;
    }
    element.addEventListener(event, _handler, options);
  });
}
function dispatchEvent(element, type, data, options) {
  var event;
  if (isFunction(Event) && isFunction(CustomEvent)) {
    event = new CustomEvent(type, _objectSpread2({
      bubbles: true,
      cancelable: true,
      detail: data
    }, options));
  } else {
    event = document.createEvent("CustomEvent");
    event.initCustomEvent(type, true, true, data);
  }
  return element.dispatchEvent(event);
}
function getOffset(element) {
  var box = element.getBoundingClientRect();
  return {
    left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: box.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
function getTransforms(_ref) {
  var rotate2 = _ref.rotate, scaleX2 = _ref.scaleX, scaleY2 = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
  var values = [];
  if (isNumber(translateX) && translateX !== 0) {
    values.push("translateX(".concat(translateX, "px)"));
  }
  if (isNumber(translateY) && translateY !== 0) {
    values.push("translateY(".concat(translateY, "px)"));
  }
  if (isNumber(rotate2) && rotate2 !== 0) {
    values.push("rotate(".concat(rotate2, "deg)"));
  }
  if (isNumber(scaleX2) && scaleX2 !== 1) {
    values.push("scaleX(".concat(scaleX2, ")"));
  }
  if (isNumber(scaleY2) && scaleY2 !== 1) {
    values.push("scaleY(".concat(scaleY2, ")"));
  }
  var transform = values.length ? values.join(" ") : "none";
  return {
    WebkitTransform: transform,
    msTransform: transform,
    transform
  };
}
function getImageNameFromURL(url) {
  return isString(url) ? decodeURIComponent(url.replace(/^.*\//, "").replace(/[?&#].*$/, "")) : "";
}
var IS_SAFARI = WINDOW.navigator && /Version\/\d+(\.\d+)+?\s+Safari/i.test(WINDOW.navigator.userAgent);
function getImageNaturalSizes(image, options, callback) {
  var newImage = document.createElement("img");
  if (image.naturalWidth && !IS_SAFARI) {
    callback(image.naturalWidth, image.naturalHeight);
    return newImage;
  }
  var body = document.body || document.documentElement;
  newImage.onload = function() {
    callback(newImage.width, newImage.height);
    if (!IS_SAFARI) {
      body.removeChild(newImage);
    }
  };
  forEach(options.inheritedAttributes, function(name) {
    var value = image.getAttribute(name);
    if (value !== null) {
      newImage.setAttribute(name, value);
    }
  });
  newImage.src = image.src;
  if (!IS_SAFARI) {
    newImage.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
    body.appendChild(newImage);
  }
  return newImage;
}
function getResponsiveClass(type) {
  switch (type) {
    case 2:
      return CLASS_HIDE_XS_DOWN;
    case 3:
      return CLASS_HIDE_SM_DOWN;
    case 4:
      return CLASS_HIDE_MD_DOWN;
    default:
      return "";
  }
}
function getMaxZoomRatio(pointers) {
  var pointers2 = _objectSpread2({}, pointers);
  var ratios = [];
  forEach(pointers, function(pointer, pointerId) {
    delete pointers2[pointerId];
    forEach(pointers2, function(pointer2) {
      var x1 = Math.abs(pointer.startX - pointer2.startX);
      var y1 = Math.abs(pointer.startY - pointer2.startY);
      var x2 = Math.abs(pointer.endX - pointer2.endX);
      var y2 = Math.abs(pointer.endY - pointer2.endY);
      var z1 = Math.sqrt(x1 * x1 + y1 * y1);
      var z2 = Math.sqrt(x2 * x2 + y2 * y2);
      var ratio = (z2 - z1) / z1;
      ratios.push(ratio);
    });
  });
  ratios.sort(function(a, b) {
    return Math.abs(a) < Math.abs(b);
  });
  return ratios[0];
}
function getPointer(_ref2, endOnly) {
  var pageX = _ref2.pageX, pageY = _ref2.pageY;
  var end = {
    endX: pageX,
    endY: pageY
  };
  return endOnly ? end : _objectSpread2({
    timeStamp: Date.now(),
    startX: pageX,
    startY: pageY
  }, end);
}
function getPointersCenter(pointers) {
  var pageX = 0;
  var pageY = 0;
  var count = 0;
  forEach(pointers, function(_ref3) {
    var startX = _ref3.startX, startY = _ref3.startY;
    pageX += startX;
    pageY += startY;
    count += 1;
  });
  pageX /= count;
  pageY /= count;
  return {
    pageX,
    pageY
  };
}
var render2 = {
  render: function render3() {
    this.initContainer();
    this.initViewer();
    this.initList();
    this.renderViewer();
  },
  initBody: function initBody() {
    var ownerDocument = this.element.ownerDocument;
    var body = ownerDocument.body || ownerDocument.documentElement;
    this.body = body;
    this.scrollbarWidth = window.innerWidth - ownerDocument.documentElement.clientWidth;
    this.initialBodyPaddingRight = body.style.paddingRight;
    this.initialBodyComputedPaddingRight = window.getComputedStyle(body).paddingRight;
  },
  initContainer: function initContainer() {
    this.containerData = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  initViewer: function initViewer() {
    var options = this.options, parent = this.parent;
    var viewerData;
    if (options.inline) {
      viewerData = {
        width: Math.max(parent.offsetWidth, options.minWidth),
        height: Math.max(parent.offsetHeight, options.minHeight)
      };
      this.parentData = viewerData;
    }
    if (this.fulled || !viewerData) {
      viewerData = this.containerData;
    }
    this.viewerData = assign({}, viewerData);
  },
  renderViewer: function renderViewer() {
    if (this.options.inline && !this.fulled) {
      setStyle(this.viewer, this.viewerData);
    }
  },
  initList: function initList() {
    var _this = this;
    var element = this.element, options = this.options, list = this.list;
    var items = [];
    list.innerHTML = "";
    forEach(this.images, function(image, index2) {
      var src = image.src;
      var alt = image.alt || getImageNameFromURL(src);
      var url = _this.getImageURL(image);
      if (src || url) {
        var item = document.createElement("li");
        var img = document.createElement("img");
        forEach(options.inheritedAttributes, function(name) {
          var value = image.getAttribute(name);
          if (value !== null) {
            img.setAttribute(name, value);
          }
        });
        if (options.navbar) {
          img.src = src || url;
        }
        img.alt = alt;
        img.setAttribute("data-original-url", url || src);
        item.setAttribute("data-index", index2);
        item.setAttribute("data-viewer-action", "view");
        item.setAttribute("role", "button");
        if (options.keyboard) {
          item.setAttribute("tabindex", 0);
        }
        item.appendChild(img);
        list.appendChild(item);
        items.push(item);
      }
    });
    this.items = items;
    forEach(items, function(item) {
      var image = item.firstElementChild;
      var onLoad;
      var onError;
      setData(image, "filled", true);
      if (options.loading) {
        addClass(item, CLASS_LOADING);
      }
      addListener(image, EVENT_LOAD, onLoad = function onLoad2(event) {
        removeListener(image, EVENT_ERROR, onError);
        if (options.loading) {
          removeClass(item, CLASS_LOADING);
        }
        _this.loadImage(event);
      }, {
        once: true
      });
      addListener(image, EVENT_ERROR, onError = function onError2() {
        removeListener(image, EVENT_LOAD, onLoad);
        if (options.loading) {
          removeClass(item, CLASS_LOADING);
        }
      }, {
        once: true
      });
    });
    if (options.transition) {
      addListener(element, EVENT_VIEWED, function() {
        addClass(list, CLASS_TRANSITION);
      }, {
        once: true
      });
    }
  },
  renderList: function renderList() {
    var index2 = this.index;
    var item = this.items[index2];
    if (!item) {
      return;
    }
    var next2 = item.nextElementSibling;
    var gutter = parseInt(window.getComputedStyle(next2 || item).marginLeft, 10);
    var offsetWidth = item.offsetWidth;
    var outerWidth = offsetWidth + gutter;
    setStyle(this.list, assign({
      width: outerWidth * this.length - gutter
    }, getTransforms({
      translateX: (this.viewerData.width - offsetWidth) / 2 - outerWidth * index2
    })));
  },
  resetList: function resetList() {
    var list = this.list;
    list.innerHTML = "";
    removeClass(list, CLASS_TRANSITION);
    setStyle(list, getTransforms({
      translateX: 0
    }));
  },
  initImage: function initImage(done) {
    var _this2 = this;
    var options = this.options, image = this.image, viewerData = this.viewerData;
    var footerHeight = this.footer.offsetHeight;
    var viewerWidth = viewerData.width;
    var viewerHeight = Math.max(viewerData.height - footerHeight, footerHeight);
    var oldImageData = this.imageData || {};
    var sizingImage;
    this.imageInitializing = {
      abort: function abort() {
        sizingImage.onload = null;
      }
    };
    sizingImage = getImageNaturalSizes(image, options, function(naturalWidth, naturalHeight) {
      var aspectRatio = naturalWidth / naturalHeight;
      var initialCoverage = Math.max(0, Math.min(1, options.initialCoverage));
      var width = viewerWidth;
      var height = viewerHeight;
      _this2.imageInitializing = false;
      if (viewerHeight * aspectRatio > viewerWidth) {
        height = viewerWidth / aspectRatio;
      } else {
        width = viewerHeight * aspectRatio;
      }
      initialCoverage = isNumber(initialCoverage) ? initialCoverage : 0.9;
      width = Math.min(width * initialCoverage, naturalWidth);
      height = Math.min(height * initialCoverage, naturalHeight);
      var left = (viewerWidth - width) / 2;
      var top = (viewerHeight - height) / 2;
      var imageData = {
        left,
        top,
        x: left,
        y: top,
        width,
        height,
        oldRatio: 1,
        ratio: width / naturalWidth,
        aspectRatio,
        naturalWidth,
        naturalHeight
      };
      var initialImageData = assign({}, imageData);
      if (options.rotatable) {
        imageData.rotate = oldImageData.rotate || 0;
        initialImageData.rotate = 0;
      }
      if (options.scalable) {
        imageData.scaleX = oldImageData.scaleX || 1;
        imageData.scaleY = oldImageData.scaleY || 1;
        initialImageData.scaleX = 1;
        initialImageData.scaleY = 1;
      }
      _this2.imageData = imageData;
      _this2.initialImageData = initialImageData;
      if (done) {
        done();
      }
    });
  },
  renderImage: function renderImage(done) {
    var _this3 = this;
    var image = this.image, imageData = this.imageData;
    setStyle(image, assign({
      width: imageData.width,
      height: imageData.height,
      // XXX: Not to use translateX/Y to avoid image shaking when zooming
      marginLeft: imageData.x,
      marginTop: imageData.y
    }, getTransforms(imageData)));
    if (done) {
      if ((this.viewing || this.moving || this.rotating || this.scaling || this.zooming) && this.options.transition && hasClass(image, CLASS_TRANSITION)) {
        var onTransitionEnd = function onTransitionEnd2() {
          _this3.imageRendering = false;
          done();
        };
        this.imageRendering = {
          abort: function abort() {
            removeListener(image, EVENT_TRANSITION_END, onTransitionEnd);
          }
        };
        addListener(image, EVENT_TRANSITION_END, onTransitionEnd, {
          once: true
        });
      } else {
        done();
      }
    }
  },
  resetImage: function resetImage() {
    if (this.viewing || this.viewed) {
      var image = this.image;
      if (this.viewing) {
        this.viewing.abort();
      }
      image.parentNode.removeChild(image);
      this.image = null;
    }
  }
};
var events = {
  bind: function bind() {
    var options = this.options, viewer = this.viewer, canvas = this.canvas;
    var document2 = this.element.ownerDocument;
    addListener(viewer, EVENT_CLICK, this.onClick = this.click.bind(this));
    addListener(viewer, EVENT_DRAG_START, this.onDragStart = this.dragstart.bind(this));
    addListener(canvas, EVENT_POINTER_DOWN, this.onPointerDown = this.pointerdown.bind(this));
    addListener(document2, EVENT_POINTER_MOVE, this.onPointerMove = this.pointermove.bind(this));
    addListener(document2, EVENT_POINTER_UP, this.onPointerUp = this.pointerup.bind(this));
    addListener(document2, EVENT_KEY_DOWN, this.onKeyDown = this.keydown.bind(this));
    addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
    if (options.zoomable && options.zoomOnWheel) {
      addListener(viewer, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
        passive: false,
        capture: true
      });
    }
    if (options.toggleOnDblclick) {
      addListener(canvas, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
    }
  },
  unbind: function unbind() {
    var options = this.options, viewer = this.viewer, canvas = this.canvas;
    var document2 = this.element.ownerDocument;
    removeListener(viewer, EVENT_CLICK, this.onClick);
    removeListener(viewer, EVENT_DRAG_START, this.onDragStart);
    removeListener(canvas, EVENT_POINTER_DOWN, this.onPointerDown);
    removeListener(document2, EVENT_POINTER_MOVE, this.onPointerMove);
    removeListener(document2, EVENT_POINTER_UP, this.onPointerUp);
    removeListener(document2, EVENT_KEY_DOWN, this.onKeyDown);
    removeListener(window, EVENT_RESIZE, this.onResize);
    if (options.zoomable && options.zoomOnWheel) {
      removeListener(viewer, EVENT_WHEEL, this.onWheel, {
        passive: false,
        capture: true
      });
    }
    if (options.toggleOnDblclick) {
      removeListener(canvas, EVENT_DBLCLICK, this.onDblclick);
    }
  }
};
var handlers = {
  click: function click(event) {
    var options = this.options, imageData = this.imageData;
    var target = event.target;
    var action = getData(target, DATA_ACTION);
    if (!action && target.localName === "img" && target.parentElement.localName === "li") {
      target = target.parentElement;
      action = getData(target, DATA_ACTION);
    }
    if (IS_TOUCH_DEVICE && event.isTrusted && target === this.canvas) {
      clearTimeout(this.clickCanvasTimeout);
    }
    switch (action) {
      case "mix":
        if (this.played) {
          this.stop();
        } else if (options.inline) {
          if (this.fulled) {
            this.exit();
          } else {
            this.full();
          }
        } else {
          this.hide();
        }
        break;
      case "hide":
        if (!this.pointerMoved) {
          this.hide();
        }
        break;
      case "view":
        this.view(getData(target, "index"));
        break;
      case "zoom-in":
        this.zoom(0.1, true);
        break;
      case "zoom-out":
        this.zoom(-0.1, true);
        break;
      case "one-to-one":
        this.toggle();
        break;
      case "reset":
        this.reset();
        break;
      case "prev":
        this.prev(options.loop);
        break;
      case "play":
        this.play(options.fullscreen);
        break;
      case "next":
        this.next(options.loop);
        break;
      case "rotate-left":
        this.rotate(-90);
        break;
      case "rotate-right":
        this.rotate(90);
        break;
      case "flip-horizontal":
        this.scaleX(-imageData.scaleX || -1);
        break;
      case "flip-vertical":
        this.scaleY(-imageData.scaleY || -1);
        break;
      default:
        if (this.played) {
          this.stop();
        }
    }
  },
  dblclick: function dblclick(event) {
    event.preventDefault();
    if (this.viewed && event.target === this.image) {
      if (IS_TOUCH_DEVICE && event.isTrusted) {
        clearTimeout(this.doubleClickImageTimeout);
      }
      this.toggle(event.isTrusted ? event : event.detail && event.detail.originalEvent);
    }
  },
  load: function load() {
    var _this = this;
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = false;
    }
    var element = this.element, options = this.options, image = this.image, index2 = this.index, viewerData = this.viewerData;
    removeClass(image, CLASS_INVISIBLE);
    if (options.loading) {
      removeClass(this.canvas, CLASS_LOADING);
    }
    image.style.cssText = "height:0;" + "margin-left:".concat(viewerData.width / 2, "px;") + "margin-top:".concat(viewerData.height / 2, "px;") + "max-width:none!important;position:relative;width:0;";
    this.initImage(function() {
      toggleClass(image, CLASS_MOVE, options.movable);
      toggleClass(image, CLASS_TRANSITION, options.transition);
      _this.renderImage(function() {
        _this.viewed = true;
        _this.viewing = false;
        if (isFunction(options.viewed)) {
          addListener(element, EVENT_VIEWED, options.viewed, {
            once: true
          });
        }
        dispatchEvent(element, EVENT_VIEWED, {
          originalImage: _this.images[index2],
          index: index2,
          image
        }, {
          cancelable: false
        });
      });
    });
  },
  loadImage: function loadImage(event) {
    var image = event.target;
    var parent = image.parentNode;
    var parentWidth = parent.offsetWidth || 30;
    var parentHeight = parent.offsetHeight || 50;
    var filled = !!getData(image, "filled");
    getImageNaturalSizes(image, this.options, function(naturalWidth, naturalHeight) {
      var aspectRatio = naturalWidth / naturalHeight;
      var width = parentWidth;
      var height = parentHeight;
      if (parentHeight * aspectRatio > parentWidth) {
        if (filled) {
          width = parentHeight * aspectRatio;
        } else {
          height = parentWidth / aspectRatio;
        }
      } else if (filled) {
        height = parentWidth / aspectRatio;
      } else {
        width = parentHeight * aspectRatio;
      }
      setStyle(image, assign({
        width,
        height
      }, getTransforms({
        translateX: (parentWidth - width) / 2,
        translateY: (parentHeight - height) / 2
      })));
    });
  },
  keydown: function keydown(event) {
    var options = this.options;
    if (!options.keyboard) {
      return;
    }
    var keyCode = event.keyCode || event.which || event.charCode;
    switch (keyCode) {
      case 13:
        if (this.viewer.contains(event.target)) {
          this.click(event);
        }
        break;
    }
    if (!this.fulled) {
      return;
    }
    switch (keyCode) {
      case 27:
        if (this.played) {
          this.stop();
        } else if (options.inline) {
          if (this.fulled) {
            this.exit();
          }
        } else {
          this.hide();
        }
        break;
      case 32:
        if (this.played) {
          this.stop();
        }
        break;
      case 37:
        if (this.played && this.playing) {
          this.playing.prev();
        } else {
          this.prev(options.loop);
        }
        break;
      case 38:
        event.preventDefault();
        this.zoom(options.zoomRatio, true);
        break;
      case 39:
        if (this.played && this.playing) {
          this.playing.next();
        } else {
          this.next(options.loop);
        }
        break;
      case 40:
        event.preventDefault();
        this.zoom(-options.zoomRatio, true);
        break;
      case 48:
      case 49:
        if (event.ctrlKey) {
          event.preventDefault();
          this.toggle();
        }
        break;
    }
  },
  dragstart: function dragstart(event) {
    if (event.target.localName === "img") {
      event.preventDefault();
    }
  },
  pointerdown: function pointerdown(event) {
    var options = this.options, pointers = this.pointers;
    var buttons = event.buttons, button = event.button;
    this.pointerMoved = false;
    if (!this.viewed || this.showing || this.viewing || this.hiding || (event.type === "mousedown" || event.type === "pointerdown" && event.pointerType === "mouse") && // No primary button (Usually the left button)
    (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey)) {
      return;
    }
    event.preventDefault();
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        pointers[touch.identifier] = getPointer(touch);
      });
    } else {
      pointers[event.pointerId || 0] = getPointer(event);
    }
    var action = options.movable ? ACTION_MOVE : false;
    if (options.zoomOnTouch && options.zoomable && Object.keys(pointers).length > 1) {
      action = ACTION_ZOOM;
    } else if (options.slideOnTouch && (event.pointerType === "touch" || event.type === "touchstart") && this.isSwitchable()) {
      action = ACTION_SWITCH;
    }
    if (options.transition && (action === ACTION_MOVE || action === ACTION_ZOOM)) {
      removeClass(this.image, CLASS_TRANSITION);
    }
    this.action = action;
  },
  pointermove: function pointermove(event) {
    var pointers = this.pointers, action = this.action;
    if (!this.viewed || !action) {
      return;
    }
    event.preventDefault();
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        assign(pointers[touch.identifier] || {}, getPointer(touch, true));
      });
    } else {
      assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
    }
    this.change(event);
  },
  pointerup: function pointerup(event) {
    var _this2 = this;
    var options = this.options, action = this.action, pointers = this.pointers;
    var pointer;
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        pointer = pointers[touch.identifier];
        delete pointers[touch.identifier];
      });
    } else {
      pointer = pointers[event.pointerId || 0];
      delete pointers[event.pointerId || 0];
    }
    if (!action) {
      return;
    }
    event.preventDefault();
    if (options.transition && (action === ACTION_MOVE || action === ACTION_ZOOM)) {
      addClass(this.image, CLASS_TRANSITION);
    }
    this.action = false;
    if (IS_TOUCH_DEVICE && action !== ACTION_ZOOM && pointer && Date.now() - pointer.timeStamp < 500) {
      clearTimeout(this.clickCanvasTimeout);
      clearTimeout(this.doubleClickImageTimeout);
      if (options.toggleOnDblclick && this.viewed && event.target === this.image) {
        if (this.imageClicked) {
          this.imageClicked = false;
          this.doubleClickImageTimeout = setTimeout(function() {
            dispatchEvent(_this2.image, EVENT_DBLCLICK, {
              originalEvent: event
            });
          }, 50);
        } else {
          this.imageClicked = true;
          this.doubleClickImageTimeout = setTimeout(function() {
            _this2.imageClicked = false;
          }, 500);
        }
      } else {
        this.imageClicked = false;
        if (options.backdrop && options.backdrop !== "static" && event.target === this.canvas) {
          this.clickCanvasTimeout = setTimeout(function() {
            dispatchEvent(_this2.canvas, EVENT_CLICK, {
              originalEvent: event
            });
          }, 50);
        }
      }
    }
  },
  resize: function resize() {
    var _this3 = this;
    if (!this.isShown || this.hiding) {
      return;
    }
    if (this.fulled) {
      this.close();
      this.initBody();
      this.open();
    }
    this.initContainer();
    this.initViewer();
    this.renderViewer();
    this.renderList();
    if (this.viewed) {
      this.initImage(function() {
        _this3.renderImage();
      });
    }
    if (this.played) {
      if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
        this.stop();
        return;
      }
      forEach(this.player.getElementsByTagName("img"), function(image) {
        addListener(image, EVENT_LOAD, _this3.loadImage.bind(_this3), {
          once: true
        });
        dispatchEvent(image, EVENT_LOAD);
      });
    }
  },
  wheel: function wheel(event) {
    var _this4 = this;
    if (!this.viewed) {
      return;
    }
    event.preventDefault();
    if (this.wheeling) {
      return;
    }
    this.wheeling = true;
    setTimeout(function() {
      _this4.wheeling = false;
    }, 50);
    var ratio = Number(this.options.zoomRatio) || 0.1;
    var delta = 1;
    if (event.deltaY) {
      delta = event.deltaY > 0 ? 1 : -1;
    } else if (event.wheelDelta) {
      delta = -event.wheelDelta / 120;
    } else if (event.detail) {
      delta = event.detail > 0 ? 1 : -1;
    }
    this.zoom(-delta * ratio, true, null, event);
  }
};
var methods = {
  /** Show the viewer (only available in modal mode)
   * @param {boolean} [immediate=false] - Indicates if show the viewer immediately or not.
   * @returns {Viewer} this
   */
  show: function show() {
    var immediate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var element = this.element, options = this.options;
    if (options.inline || this.showing || this.isShown || this.showing) {
      return this;
    }
    if (!this.ready) {
      this.build();
      if (this.ready) {
        this.show(immediate);
      }
      return this;
    }
    if (isFunction(options.show)) {
      addListener(element, EVENT_SHOW, options.show, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_SHOW) === false || !this.ready) {
      return this;
    }
    if (this.hiding) {
      this.transitioning.abort();
    }
    this.showing = true;
    this.open();
    var viewer = this.viewer;
    removeClass(viewer, CLASS_HIDE);
    viewer.setAttribute("role", "dialog");
    viewer.setAttribute("aria-labelledby", this.title.id);
    viewer.setAttribute("aria-modal", true);
    viewer.removeAttribute("aria-hidden");
    if (options.transition && !immediate) {
      var shown2 = this.shown.bind(this);
      this.transitioning = {
        abort: function abort() {
          removeListener(viewer, EVENT_TRANSITION_END, shown2);
          removeClass(viewer, CLASS_IN);
        }
      };
      addClass(viewer, CLASS_TRANSITION);
      viewer.initialOffsetWidth = viewer.offsetWidth;
      addListener(viewer, EVENT_TRANSITION_END, shown2, {
        once: true
      });
      addClass(viewer, CLASS_IN);
    } else {
      addClass(viewer, CLASS_IN);
      this.shown();
    }
    return this;
  },
  /**
   * Hide the viewer (only available in modal mode)
   * @param {boolean} [immediate=false] - Indicates if hide the viewer immediately or not.
   * @returns {Viewer} this
   */
  hide: function hide() {
    var _this = this;
    var immediate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var element = this.element, options = this.options;
    if (options.inline || this.hiding || !(this.isShown || this.showing)) {
      return this;
    }
    if (isFunction(options.hide)) {
      addListener(element, EVENT_HIDE, options.hide, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_HIDE) === false) {
      return this;
    }
    if (this.showing) {
      this.transitioning.abort();
    }
    this.hiding = true;
    if (this.played) {
      this.stop();
    } else if (this.viewing) {
      this.viewing.abort();
    }
    var viewer = this.viewer, image = this.image;
    var hideImmediately = function hideImmediately2() {
      removeClass(viewer, CLASS_IN);
      _this.hidden();
    };
    if (options.transition && !immediate) {
      var onViewerTransitionEnd = function onViewerTransitionEnd2(event) {
        if (event && event.target === viewer) {
          removeListener(viewer, EVENT_TRANSITION_END, onViewerTransitionEnd2);
          _this.hidden();
        }
      };
      var onImageTransitionEnd = function onImageTransitionEnd2() {
        if (hasClass(viewer, CLASS_TRANSITION)) {
          addListener(viewer, EVENT_TRANSITION_END, onViewerTransitionEnd);
          removeClass(viewer, CLASS_IN);
        } else {
          hideImmediately();
        }
      };
      this.transitioning = {
        abort: function abort() {
          if (_this.viewed && hasClass(image, CLASS_TRANSITION)) {
            removeListener(image, EVENT_TRANSITION_END, onImageTransitionEnd);
          } else if (hasClass(viewer, CLASS_TRANSITION)) {
            removeListener(viewer, EVENT_TRANSITION_END, onViewerTransitionEnd);
          }
        }
      };
      if (this.viewed && hasClass(image, CLASS_TRANSITION)) {
        addListener(image, EVENT_TRANSITION_END, onImageTransitionEnd, {
          once: true
        });
        this.zoomTo(0, false, null, null, true);
      } else {
        onImageTransitionEnd();
      }
    } else {
      hideImmediately();
    }
    return this;
  },
  /**
   * View one of the images with image's index
   * @param {number} index - The index of the image to view.
   * @returns {Viewer} this
   */
  view: function view() {
    var _this2 = this;
    var index2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.initialViewIndex;
    index2 = Number(index2) || 0;
    if (this.hiding || this.played || index2 < 0 || index2 >= this.length || this.viewed && index2 === this.index) {
      return this;
    }
    if (!this.isShown) {
      this.index = index2;
      return this.show();
    }
    if (this.viewing) {
      this.viewing.abort();
    }
    var element = this.element, options = this.options, title = this.title, canvas = this.canvas;
    var item = this.items[index2];
    var img = item.querySelector("img");
    var url = getData(img, "originalUrl");
    var alt = img.getAttribute("alt");
    var image = document.createElement("img");
    forEach(options.inheritedAttributes, function(name) {
      var value = img.getAttribute(name);
      if (value !== null) {
        image.setAttribute(name, value);
      }
    });
    image.src = url;
    image.alt = alt;
    if (isFunction(options.view)) {
      addListener(element, EVENT_VIEW, options.view, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_VIEW, {
      originalImage: this.images[index2],
      index: index2,
      image
    }) === false || !this.isShown || this.hiding || this.played) {
      return this;
    }
    var activeItem = this.items[this.index];
    if (activeItem) {
      removeClass(activeItem, CLASS_ACTIVE);
      activeItem.removeAttribute("aria-selected");
    }
    addClass(item, CLASS_ACTIVE);
    item.setAttribute("aria-selected", true);
    if (options.focus) {
      item.focus();
    }
    this.image = image;
    this.viewed = false;
    this.index = index2;
    this.imageData = {};
    addClass(image, CLASS_INVISIBLE);
    if (options.loading) {
      addClass(canvas, CLASS_LOADING);
    }
    canvas.innerHTML = "";
    canvas.appendChild(image);
    this.renderList();
    title.innerHTML = "";
    var onViewed = function onViewed2() {
      var imageData = _this2.imageData;
      var render4 = Array.isArray(options.title) ? options.title[1] : options.title;
      title.innerHTML = escapeHTMLEntities(isFunction(render4) ? render4.call(_this2, image, imageData) : "".concat(alt, " (").concat(imageData.naturalWidth, " × ").concat(imageData.naturalHeight, ")"));
    };
    var onLoad;
    var onError;
    addListener(element, EVENT_VIEWED, onViewed, {
      once: true
    });
    this.viewing = {
      abort: function abort() {
        removeListener(element, EVENT_VIEWED, onViewed);
        if (image.complete) {
          if (_this2.imageRendering) {
            _this2.imageRendering.abort();
          } else if (_this2.imageInitializing) {
            _this2.imageInitializing.abort();
          }
        } else {
          image.src = "";
          removeListener(image, EVENT_LOAD, onLoad);
          if (_this2.timeout) {
            clearTimeout(_this2.timeout);
          }
        }
      }
    };
    if (image.complete) {
      this.load();
    } else {
      addListener(image, EVENT_LOAD, onLoad = function onLoad2() {
        removeListener(image, EVENT_ERROR, onError);
        _this2.load();
      }, {
        once: true
      });
      addListener(image, EVENT_ERROR, onError = function onError2() {
        removeListener(image, EVENT_LOAD, onLoad);
        if (_this2.timeout) {
          clearTimeout(_this2.timeout);
          _this2.timeout = false;
        }
        removeClass(image, CLASS_INVISIBLE);
        if (options.loading) {
          removeClass(_this2.canvas, CLASS_LOADING);
        }
      }, {
        once: true
      });
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(function() {
        removeClass(image, CLASS_INVISIBLE);
        _this2.timeout = false;
      }, 1e3);
    }
    return this;
  },
  /**
   * View the previous image
   * @param {boolean} [loop=false] - Indicate if view the last one
   * when it is the first one at present.
   * @returns {Viewer} this
   */
  prev: function prev() {
    var loop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var index2 = this.index - 1;
    if (index2 < 0) {
      index2 = loop ? this.length - 1 : 0;
    }
    this.view(index2);
    return this;
  },
  /**
   * View the next image
   * @param {boolean} [loop=false] - Indicate if view the first one
   * when it is the last one at present.
   * @returns {Viewer} this
   */
  next: function next() {
    var loop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var maxIndex = this.length - 1;
    var index2 = this.index + 1;
    if (index2 > maxIndex) {
      index2 = loop ? 0 : maxIndex;
    }
    this.view(index2);
    return this;
  },
  /**
   * Move the image with relative offsets.
   * @param {number} x - The moving distance in the horizontal direction.
   * @param {number} [y=x] The moving distance in the vertical direction.
   * @returns {Viewer} this
   */
  move: function move(x) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
    var imageData = this.imageData;
    this.moveTo(isUndefined(x) ? x : imageData.x + Number(x), isUndefined(y) ? y : imageData.y + Number(y));
    return this;
  },
  /**
   * Move the image to an absolute point.
   * @param {number} x - The new position in the horizontal direction.
   * @param {number} [y=x] - The new position in the vertical direction.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  moveTo: function moveTo(x) {
    var _this3 = this;
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
    var _originalEvent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var element = this.element, options = this.options, imageData = this.imageData;
    x = Number(x);
    y = Number(y);
    if (this.viewed && !this.played && options.movable) {
      var oldX = imageData.x;
      var oldY = imageData.y;
      var changed = false;
      if (isNumber(x)) {
        changed = true;
      } else {
        x = oldX;
      }
      if (isNumber(y)) {
        changed = true;
      } else {
        y = oldY;
      }
      if (changed) {
        if (isFunction(options.move)) {
          addListener(element, EVENT_MOVE, options.move, {
            once: true
          });
        }
        if (dispatchEvent(element, EVENT_MOVE, {
          x,
          y,
          oldX,
          oldY,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }
        imageData.x = x;
        imageData.y = y;
        imageData.left = x;
        imageData.top = y;
        this.moving = true;
        this.renderImage(function() {
          _this3.moving = false;
          if (isFunction(options.moved)) {
            addListener(element, EVENT_MOVED, options.moved, {
              once: true
            });
          }
          dispatchEvent(element, EVENT_MOVED, {
            x,
            y,
            oldX,
            oldY,
            originalEvent: _originalEvent
          }, {
            cancelable: false
          });
        });
      }
    }
    return this;
  },
  /**
   * Rotate the image with a relative degree.
   * @param {number} degree - The rotate degree.
   * @returns {Viewer} this
   */
  rotate: function rotate(degree) {
    this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    return this;
  },
  /**
   * Rotate the image to an absolute degree.
   * @param {number} degree - The rotate degree.
   * @returns {Viewer} this
   */
  rotateTo: function rotateTo(degree) {
    var _this4 = this;
    var element = this.element, options = this.options, imageData = this.imageData;
    degree = Number(degree);
    if (isNumber(degree) && this.viewed && !this.played && options.rotatable) {
      var oldDegree = imageData.rotate;
      if (isFunction(options.rotate)) {
        addListener(element, EVENT_ROTATE, options.rotate, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_ROTATE, {
        degree,
        oldDegree
      }) === false) {
        return this;
      }
      imageData.rotate = degree;
      this.rotating = true;
      this.renderImage(function() {
        _this4.rotating = false;
        if (isFunction(options.rotated)) {
          addListener(element, EVENT_ROTATED, options.rotated, {
            once: true
          });
        }
        dispatchEvent(element, EVENT_ROTATED, {
          degree,
          oldDegree
        }, {
          cancelable: false
        });
      });
    }
    return this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Viewer} this
   */
  scaleX: function scaleX(_scaleX) {
    this.scale(_scaleX, this.imageData.scaleY);
    return this;
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Viewer} this
   */
  scaleY: function scaleY(_scaleY) {
    this.scale(this.imageData.scaleX, _scaleY);
    return this;
  },
  /**
   * Scale the image.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Viewer} this
   */
  scale: function scale(scaleX2) {
    var _this5 = this;
    var scaleY2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : scaleX2;
    var element = this.element, options = this.options, imageData = this.imageData;
    scaleX2 = Number(scaleX2);
    scaleY2 = Number(scaleY2);
    if (this.viewed && !this.played && options.scalable) {
      var oldScaleX = imageData.scaleX;
      var oldScaleY = imageData.scaleY;
      var changed = false;
      if (isNumber(scaleX2)) {
        changed = true;
      } else {
        scaleX2 = oldScaleX;
      }
      if (isNumber(scaleY2)) {
        changed = true;
      } else {
        scaleY2 = oldScaleY;
      }
      if (changed) {
        if (isFunction(options.scale)) {
          addListener(element, EVENT_SCALE, options.scale, {
            once: true
          });
        }
        if (dispatchEvent(element, EVENT_SCALE, {
          scaleX: scaleX2,
          scaleY: scaleY2,
          oldScaleX,
          oldScaleY
        }) === false) {
          return this;
        }
        imageData.scaleX = scaleX2;
        imageData.scaleY = scaleY2;
        this.scaling = true;
        this.renderImage(function() {
          _this5.scaling = false;
          if (isFunction(options.scaled)) {
            addListener(element, EVENT_SCALED, options.scaled, {
              once: true
            });
          }
          dispatchEvent(element, EVENT_SCALED, {
            scaleX: scaleX2,
            scaleY: scaleY2,
            oldScaleX,
            oldScaleY
          }, {
            cancelable: false
          });
        });
      }
    }
    return this;
  },
  /**
   * Zoom the image with a relative ratio.
   * @param {number} ratio - The target ratio.
   * @param {boolean} [showTooltip=false] - Indicates whether to show the tooltip.
   * @param {Object} [pivot] - The pivot point coordinate for zooming.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  zoom: function zoom(ratio) {
    var showTooltip = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var pivot = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var _originalEvent = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    var imageData = this.imageData;
    ratio = Number(ratio);
    if (ratio < 0) {
      ratio = 1 / (1 - ratio);
    } else {
      ratio = 1 + ratio;
    }
    this.zoomTo(imageData.width * ratio / imageData.naturalWidth, showTooltip, pivot, _originalEvent);
    return this;
  },
  /**
   * Zoom the image to an absolute ratio.
   * @param {number} ratio - The target ratio.
   * @param {boolean} [showTooltip] - Indicates whether to show the tooltip.
   * @param {Object} [pivot] - The pivot point coordinate for zooming.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @param {Event} [_zoomable=false] - Indicates if the current zoom is available or not.
   * @returns {Viewer} this
   */
  zoomTo: function zoomTo(ratio) {
    var _this6 = this;
    var showTooltip = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var pivot = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var _originalEvent = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    var _zoomable = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    var element = this.element, options = this.options, pointers = this.pointers, imageData = this.imageData;
    var x = imageData.x, y = imageData.y, width = imageData.width, height = imageData.height, naturalWidth = imageData.naturalWidth, naturalHeight = imageData.naturalHeight;
    ratio = Math.max(0, ratio);
    if (isNumber(ratio) && this.viewed && !this.played && (_zoomable || options.zoomable)) {
      if (!_zoomable) {
        var minZoomRatio = Math.max(0.01, options.minZoomRatio);
        var maxZoomRatio = Math.min(100, options.maxZoomRatio);
        ratio = Math.min(Math.max(ratio, minZoomRatio), maxZoomRatio);
      }
      if (_originalEvent) {
        switch (_originalEvent.type) {
          case "wheel":
            if (options.zoomRatio >= 0.055 && ratio > 0.95 && ratio < 1.05) {
              ratio = 1;
            }
            break;
          case "pointermove":
          case "touchmove":
          case "mousemove":
            if (ratio > 0.99 && ratio < 1.01) {
              ratio = 1;
            }
            break;
        }
      }
      var newWidth = naturalWidth * ratio;
      var newHeight = naturalHeight * ratio;
      var offsetWidth = newWidth - width;
      var offsetHeight = newHeight - height;
      var oldRatio = imageData.ratio;
      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_ZOOM, {
        ratio,
        oldRatio,
        originalEvent: _originalEvent
      }) === false) {
        return this;
      }
      this.zooming = true;
      if (_originalEvent) {
        var offset = getOffset(this.viewer);
        var center = pointers && Object.keys(pointers).length > 0 ? getPointersCenter(pointers) : {
          pageX: _originalEvent.pageX,
          pageY: _originalEvent.pageY
        };
        imageData.x -= offsetWidth * ((center.pageX - offset.left - x) / width);
        imageData.y -= offsetHeight * ((center.pageY - offset.top - y) / height);
      } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
        imageData.x -= offsetWidth * ((pivot.x - x) / width);
        imageData.y -= offsetHeight * ((pivot.y - y) / height);
      } else {
        imageData.x -= offsetWidth / 2;
        imageData.y -= offsetHeight / 2;
      }
      imageData.left = imageData.x;
      imageData.top = imageData.y;
      imageData.width = newWidth;
      imageData.height = newHeight;
      imageData.oldRatio = oldRatio;
      imageData.ratio = ratio;
      this.renderImage(function() {
        _this6.zooming = false;
        if (isFunction(options.zoomed)) {
          addListener(element, EVENT_ZOOMED, options.zoomed, {
            once: true
          });
        }
        dispatchEvent(element, EVENT_ZOOMED, {
          ratio,
          oldRatio,
          originalEvent: _originalEvent
        }, {
          cancelable: false
        });
      });
      if (showTooltip) {
        this.tooltip();
      }
    }
    return this;
  },
  /**
   * Play the images
   * @param {boolean|FullscreenOptions} [fullscreen=false] - Indicate if request fullscreen or not.
   * @returns {Viewer} this
   */
  play: function play() {
    var _this7 = this;
    var fullscreen = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (!this.isShown || this.played) {
      return this;
    }
    var element = this.element, options = this.options;
    if (isFunction(options.play)) {
      addListener(element, EVENT_PLAY, options.play, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_PLAY) === false) {
      return this;
    }
    var player = this.player;
    var onLoad = this.loadImage.bind(this);
    var list = [];
    var total = 0;
    var index2 = 0;
    this.played = true;
    this.onLoadWhenPlay = onLoad;
    if (fullscreen) {
      this.requestFullscreen(fullscreen);
    }
    addClass(player, CLASS_SHOW);
    forEach(this.items, function(item, i) {
      var img = item.querySelector("img");
      var image = document.createElement("img");
      image.src = getData(img, "originalUrl");
      image.alt = img.getAttribute("alt");
      image.referrerPolicy = img.referrerPolicy;
      total += 1;
      addClass(image, CLASS_FADE);
      toggleClass(image, CLASS_TRANSITION, options.transition);
      if (hasClass(item, CLASS_ACTIVE)) {
        addClass(image, CLASS_IN);
        index2 = i;
      }
      list.push(image);
      addListener(image, EVENT_LOAD, onLoad, {
        once: true
      });
      player.appendChild(image);
    });
    if (isNumber(options.interval) && options.interval > 0) {
      var prev2 = function prev3() {
        clearTimeout(_this7.playing.timeout);
        removeClass(list[index2], CLASS_IN);
        index2 -= 1;
        index2 = index2 >= 0 ? index2 : total - 1;
        addClass(list[index2], CLASS_IN);
        _this7.playing.timeout = setTimeout(prev3, options.interval);
      };
      var next2 = function next3() {
        clearTimeout(_this7.playing.timeout);
        removeClass(list[index2], CLASS_IN);
        index2 += 1;
        index2 = index2 < total ? index2 : 0;
        addClass(list[index2], CLASS_IN);
        _this7.playing.timeout = setTimeout(next3, options.interval);
      };
      if (total > 1) {
        this.playing = {
          prev: prev2,
          next: next2,
          timeout: setTimeout(next2, options.interval)
        };
      }
    }
    return this;
  },
  // Stop play
  stop: function stop() {
    var _this8 = this;
    if (!this.played) {
      return this;
    }
    var element = this.element, options = this.options;
    if (isFunction(options.stop)) {
      addListener(element, EVENT_STOP, options.stop, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_STOP) === false) {
      return this;
    }
    var player = this.player;
    clearTimeout(this.playing.timeout);
    this.playing = false;
    this.played = false;
    forEach(player.getElementsByTagName("img"), function(image) {
      removeListener(image, EVENT_LOAD, _this8.onLoadWhenPlay);
    });
    removeClass(player, CLASS_SHOW);
    player.innerHTML = "";
    this.exitFullscreen();
    return this;
  },
  // Enter modal mode (only available in inline mode)
  full: function full() {
    var _this9 = this;
    var options = this.options, viewer = this.viewer, image = this.image, list = this.list;
    if (!this.isShown || this.played || this.fulled || !options.inline) {
      return this;
    }
    this.fulled = true;
    this.open();
    addClass(this.button, CLASS_FULLSCREEN_EXIT);
    if (options.transition) {
      removeClass(list, CLASS_TRANSITION);
      if (this.viewed) {
        removeClass(image, CLASS_TRANSITION);
      }
    }
    addClass(viewer, CLASS_FIXED);
    viewer.setAttribute("role", "dialog");
    viewer.setAttribute("aria-labelledby", this.title.id);
    viewer.setAttribute("aria-modal", true);
    viewer.removeAttribute("style");
    setStyle(viewer, {
      zIndex: options.zIndex
    });
    if (options.focus) {
      this.enforceFocus();
    }
    this.initContainer();
    this.viewerData = assign({}, this.containerData);
    this.renderList();
    if (this.viewed) {
      this.initImage(function() {
        _this9.renderImage(function() {
          if (options.transition) {
            setTimeout(function() {
              addClass(image, CLASS_TRANSITION);
              addClass(list, CLASS_TRANSITION);
            }, 0);
          }
        });
      });
    }
    return this;
  },
  // Exit modal mode (only available in inline mode)
  exit: function exit() {
    var _this10 = this;
    var options = this.options, viewer = this.viewer, image = this.image, list = this.list;
    if (!this.isShown || this.played || !this.fulled || !options.inline) {
      return this;
    }
    this.fulled = false;
    this.close();
    removeClass(this.button, CLASS_FULLSCREEN_EXIT);
    if (options.transition) {
      removeClass(list, CLASS_TRANSITION);
      if (this.viewed) {
        removeClass(image, CLASS_TRANSITION);
      }
    }
    if (options.focus) {
      this.clearEnforceFocus();
    }
    viewer.removeAttribute("role");
    viewer.removeAttribute("aria-labelledby");
    viewer.removeAttribute("aria-modal");
    removeClass(viewer, CLASS_FIXED);
    setStyle(viewer, {
      zIndex: options.zIndexInline
    });
    this.viewerData = assign({}, this.parentData);
    this.renderViewer();
    this.renderList();
    if (this.viewed) {
      this.initImage(function() {
        _this10.renderImage(function() {
          if (options.transition) {
            setTimeout(function() {
              addClass(image, CLASS_TRANSITION);
              addClass(list, CLASS_TRANSITION);
            }, 0);
          }
        });
      });
    }
    return this;
  },
  // Show the current ratio of the image with percentage
  tooltip: function tooltip() {
    var _this11 = this;
    var options = this.options, tooltipBox = this.tooltipBox, imageData = this.imageData;
    if (!this.viewed || this.played || !options.tooltip) {
      return this;
    }
    tooltipBox.textContent = "".concat(Math.round(imageData.ratio * 100), "%");
    if (!this.tooltipping) {
      if (options.transition) {
        if (this.fading) {
          dispatchEvent(tooltipBox, EVENT_TRANSITION_END);
        }
        addClass(tooltipBox, CLASS_SHOW);
        addClass(tooltipBox, CLASS_FADE);
        addClass(tooltipBox, CLASS_TRANSITION);
        tooltipBox.removeAttribute("aria-hidden");
        tooltipBox.initialOffsetWidth = tooltipBox.offsetWidth;
        addClass(tooltipBox, CLASS_IN);
      } else {
        addClass(tooltipBox, CLASS_SHOW);
        tooltipBox.removeAttribute("aria-hidden");
      }
    } else {
      clearTimeout(this.tooltipping);
    }
    this.tooltipping = setTimeout(function() {
      if (options.transition) {
        addListener(tooltipBox, EVENT_TRANSITION_END, function() {
          removeClass(tooltipBox, CLASS_SHOW);
          removeClass(tooltipBox, CLASS_FADE);
          removeClass(tooltipBox, CLASS_TRANSITION);
          tooltipBox.setAttribute("aria-hidden", true);
          _this11.fading = false;
        }, {
          once: true
        });
        removeClass(tooltipBox, CLASS_IN);
        _this11.fading = true;
      } else {
        removeClass(tooltipBox, CLASS_SHOW);
        tooltipBox.setAttribute("aria-hidden", true);
      }
      _this11.tooltipping = false;
    }, 1e3);
    return this;
  },
  /**
   * Toggle the image size between its current size and natural size
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  toggle: function toggle() {
    var _originalEvent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    if (this.imageData.ratio === 1) {
      this.zoomTo(this.imageData.oldRatio, true, null, _originalEvent);
    } else {
      this.zoomTo(1, true, null, _originalEvent);
    }
    return this;
  },
  // Reset the image to its initial state
  reset: function reset() {
    if (this.viewed && !this.played) {
      this.imageData = assign({}, this.initialImageData);
      this.renderImage();
    }
    return this;
  },
  // Update viewer when images changed
  update: function update() {
    var _this12 = this;
    var element = this.element, options = this.options, isImg = this.isImg;
    if (isImg && !element.parentNode) {
      return this.destroy();
    }
    var images = [];
    forEach(isImg ? [element] : element.querySelectorAll("img"), function(image) {
      if (isFunction(options.filter)) {
        if (options.filter.call(_this12, image)) {
          images.push(image);
        }
      } else if (_this12.getImageURL(image)) {
        images.push(image);
      }
    });
    if (!images.length) {
      return this;
    }
    this.images = images;
    this.length = images.length;
    if (this.ready) {
      var changedIndexes = [];
      forEach(this.items, function(item, i) {
        var img = item.querySelector("img");
        var image = images[i];
        if (image && img) {
          if (image.src !== img.src || image.alt !== img.alt) {
            changedIndexes.push(i);
          }
        } else {
          changedIndexes.push(i);
        }
      });
      setStyle(this.list, {
        width: "auto"
      });
      this.initList();
      if (this.isShown) {
        if (this.length) {
          if (this.viewed) {
            var changedIndex = changedIndexes.indexOf(this.index);
            if (changedIndex >= 0) {
              this.viewed = false;
              this.view(Math.max(Math.min(this.index - changedIndex, this.length - 1), 0));
            } else {
              var activeItem = this.items[this.index];
              addClass(activeItem, CLASS_ACTIVE);
              activeItem.setAttribute("aria-selected", true);
            }
          }
        } else {
          this.image = null;
          this.viewed = false;
          this.index = 0;
          this.imageData = {};
          this.canvas.innerHTML = "";
          this.title.innerHTML = "";
        }
      }
    } else {
      this.build();
    }
    return this;
  },
  // Destroy the viewer
  destroy: function destroy() {
    var element = this.element, options = this.options;
    if (!element[NAMESPACE]) {
      return this;
    }
    this.destroyed = true;
    if (this.ready) {
      if (this.played) {
        this.stop();
      }
      if (options.inline) {
        if (this.fulled) {
          this.exit();
        }
        this.unbind();
      } else if (this.isShown) {
        if (this.viewing) {
          if (this.imageRendering) {
            this.imageRendering.abort();
          } else if (this.imageInitializing) {
            this.imageInitializing.abort();
          }
        }
        if (this.hiding) {
          this.transitioning.abort();
        }
        this.hidden();
      } else if (this.showing) {
        this.transitioning.abort();
        this.hidden();
      }
      this.ready = false;
      this.viewer.parentNode.removeChild(this.viewer);
    } else if (options.inline) {
      if (this.delaying) {
        this.delaying.abort();
      } else if (this.initializing) {
        this.initializing.abort();
      }
    }
    if (!options.inline) {
      removeListener(element, EVENT_CLICK, this.onStart);
    }
    element[NAMESPACE] = void 0;
    return this;
  }
};
var others = {
  getImageURL: function getImageURL(image) {
    var url = this.options.url;
    if (isString(url)) {
      url = image.getAttribute(url);
    } else if (isFunction(url)) {
      url = url.call(this, image);
    } else {
      url = "";
    }
    return url;
  },
  enforceFocus: function enforceFocus() {
    var _this = this;
    this.clearEnforceFocus();
    addListener(document, EVENT_FOCUSIN, this.onFocusin = function(event) {
      var viewer = _this.viewer;
      var target = event.target;
      if (target === document || target === viewer || viewer.contains(target)) {
        return;
      }
      while (target) {
        if (target.getAttribute("tabindex") !== null || target.getAttribute("aria-modal") === "true") {
          return;
        }
        target = target.parentElement;
      }
      viewer.focus();
    });
  },
  clearEnforceFocus: function clearEnforceFocus() {
    if (this.onFocusin) {
      removeListener(document, EVENT_FOCUSIN, this.onFocusin);
      this.onFocusin = null;
    }
  },
  open: function open() {
    var body = this.body;
    addClass(body, CLASS_OPEN);
    if (this.scrollbarWidth > 0) {
      body.style.paddingRight = "".concat(this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0), "px");
    }
  },
  close: function close() {
    var body = this.body;
    removeClass(body, CLASS_OPEN);
    if (this.scrollbarWidth > 0) {
      body.style.paddingRight = this.initialBodyPaddingRight;
    }
  },
  shown: function shown() {
    var element = this.element, options = this.options, viewer = this.viewer;
    this.fulled = true;
    this.isShown = true;
    this.render();
    this.bind();
    this.showing = false;
    if (options.focus) {
      viewer.focus();
      this.enforceFocus();
    }
    if (isFunction(options.shown)) {
      addListener(element, EVENT_SHOWN, options.shown, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_SHOWN) === false) {
      return;
    }
    if (this.ready && this.isShown && !this.hiding) {
      this.view(this.index);
    }
  },
  hidden: function hidden() {
    var element = this.element, options = this.options, viewer = this.viewer;
    if (options.fucus) {
      this.clearEnforceFocus();
    }
    this.fulled = false;
    this.viewed = false;
    this.isShown = false;
    this.close();
    this.unbind();
    addClass(viewer, CLASS_HIDE);
    viewer.removeAttribute("role");
    viewer.removeAttribute("aria-labelledby");
    viewer.removeAttribute("aria-modal");
    viewer.setAttribute("aria-hidden", true);
    this.resetList();
    this.resetImage();
    this.hiding = false;
    if (!this.destroyed) {
      if (isFunction(options.hidden)) {
        addListener(element, EVENT_HIDDEN, options.hidden, {
          once: true
        });
      }
      dispatchEvent(element, EVENT_HIDDEN, null, {
        cancelable: false
      });
    }
  },
  requestFullscreen: function requestFullscreen(options) {
    var document2 = this.element.ownerDocument;
    if (this.fulled && !(document2.fullscreenElement || document2.webkitFullscreenElement || document2.mozFullScreenElement || document2.msFullscreenElement)) {
      var documentElement = document2.documentElement;
      if (documentElement.requestFullscreen) {
        if (isPlainObject(options)) {
          documentElement.requestFullscreen(options);
        } else {
          documentElement.requestFullscreen();
        }
      } else if (documentElement.webkitRequestFullscreen) {
        documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (documentElement.mozRequestFullScreen) {
        documentElement.mozRequestFullScreen();
      } else if (documentElement.msRequestFullscreen) {
        documentElement.msRequestFullscreen();
      }
    }
  },
  exitFullscreen: function exitFullscreen() {
    var document2 = this.element.ownerDocument;
    if (this.fulled && (document2.fullscreenElement || document2.webkitFullscreenElement || document2.mozFullScreenElement || document2.msFullscreenElement)) {
      if (document2.exitFullscreen) {
        document2.exitFullscreen();
      } else if (document2.webkitExitFullscreen) {
        document2.webkitExitFullscreen();
      } else if (document2.mozCancelFullScreen) {
        document2.mozCancelFullScreen();
      } else if (document2.msExitFullscreen) {
        document2.msExitFullscreen();
      }
    }
  },
  change: function change(event) {
    var options = this.options, pointers = this.pointers;
    var pointer = pointers[Object.keys(pointers)[0]];
    if (!pointer) {
      return;
    }
    var offsetX = pointer.endX - pointer.startX;
    var offsetY = pointer.endY - pointer.startY;
    switch (this.action) {
      case ACTION_MOVE:
        if (offsetX !== 0 || offsetY !== 0) {
          this.pointerMoved = true;
          this.move(offsetX, offsetY, event);
        }
        break;
      case ACTION_ZOOM:
        this.zoom(getMaxZoomRatio(pointers), false, null, event);
        break;
      case ACTION_SWITCH: {
        this.action = "switched";
        var absoluteOffsetX = Math.abs(offsetX);
        if (absoluteOffsetX > 1 && absoluteOffsetX > Math.abs(offsetY)) {
          this.pointers = {};
          if (offsetX > 1) {
            this.prev(options.loop);
          } else if (offsetX < -1) {
            this.next(options.loop);
          }
        }
        break;
      }
    }
    forEach(pointers, function(p) {
      p.startX = p.endX;
      p.startY = p.endY;
    });
  },
  isSwitchable: function isSwitchable() {
    var imageData = this.imageData, viewerData = this.viewerData;
    return this.length > 1 && imageData.x >= 0 && imageData.y >= 0 && imageData.width <= viewerData.width && imageData.height <= viewerData.height;
  }
};
var AnotherViewer = WINDOW.Viewer;
var getUniqueID = function(id) {
  return function() {
    id += 1;
    return id;
  };
}(-1);
var Viewer = function() {
  function Viewer2(element) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Viewer2);
    if (!element || element.nodeType !== 1) {
      throw new Error("The first argument is required and must be an element.");
    }
    this.element = element;
    this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
    this.action = false;
    this.fading = false;
    this.fulled = false;
    this.hiding = false;
    this.imageClicked = false;
    this.imageData = {};
    this.index = this.options.initialViewIndex;
    this.isImg = false;
    this.isShown = false;
    this.length = 0;
    this.moving = false;
    this.played = false;
    this.playing = false;
    this.pointers = {};
    this.ready = false;
    this.rotating = false;
    this.scaling = false;
    this.showing = false;
    this.timeout = false;
    this.tooltipping = false;
    this.viewed = false;
    this.viewing = false;
    this.wheeling = false;
    this.zooming = false;
    this.pointerMoved = false;
    this.id = getUniqueID();
    this.init();
  }
  _createClass(Viewer2, [{
    key: "init",
    value: function init() {
      var _this = this;
      var element = this.element, options = this.options;
      if (element[NAMESPACE]) {
        return;
      }
      element[NAMESPACE] = this;
      if (options.focus && !options.keyboard) {
        options.focus = false;
      }
      var isImg = element.localName === "img";
      var images = [];
      forEach(isImg ? [element] : element.querySelectorAll("img"), function(image) {
        if (isFunction(options.filter)) {
          if (options.filter.call(_this, image)) {
            images.push(image);
          }
        } else if (_this.getImageURL(image)) {
          images.push(image);
        }
      });
      this.isImg = isImg;
      this.length = images.length;
      this.images = images;
      this.initBody();
      if (isUndefined(document.createElement(NAMESPACE).style.transition)) {
        options.transition = false;
      }
      if (options.inline) {
        var count = 0;
        var progress = function progress2() {
          count += 1;
          if (count === _this.length) {
            var timeout;
            _this.initializing = false;
            _this.delaying = {
              abort: function abort() {
                clearTimeout(timeout);
              }
            };
            timeout = setTimeout(function() {
              _this.delaying = false;
              _this.build();
            }, 0);
          }
        };
        this.initializing = {
          abort: function abort() {
            forEach(images, function(image) {
              if (!image.complete) {
                removeListener(image, EVENT_LOAD, progress);
                removeListener(image, EVENT_ERROR, progress);
              }
            });
          }
        };
        forEach(images, function(image) {
          if (image.complete) {
            progress();
          } else {
            var onLoad;
            var onError;
            addListener(image, EVENT_LOAD, onLoad = function onLoad2() {
              removeListener(image, EVENT_ERROR, onError);
              progress();
            }, {
              once: true
            });
            addListener(image, EVENT_ERROR, onError = function onError2() {
              removeListener(image, EVENT_LOAD, onLoad);
              progress();
            }, {
              once: true
            });
          }
        });
      } else {
        addListener(element, EVENT_CLICK, this.onStart = function(_ref) {
          var target = _ref.target;
          if (target.localName === "img" && (!isFunction(options.filter) || options.filter.call(_this, target))) {
            _this.view(_this.images.indexOf(target));
          }
        });
      }
    }
  }, {
    key: "build",
    value: function build() {
      if (this.ready) {
        return;
      }
      var element = this.element, options = this.options;
      var parent = element.parentNode;
      var template = document.createElement("div");
      template.innerHTML = TEMPLATE;
      var viewer = template.querySelector(".".concat(NAMESPACE, "-container"));
      var title = viewer.querySelector(".".concat(NAMESPACE, "-title"));
      var toolbar = viewer.querySelector(".".concat(NAMESPACE, "-toolbar"));
      var navbar = viewer.querySelector(".".concat(NAMESPACE, "-navbar"));
      var button = viewer.querySelector(".".concat(NAMESPACE, "-button"));
      var canvas = viewer.querySelector(".".concat(NAMESPACE, "-canvas"));
      this.parent = parent;
      this.viewer = viewer;
      this.title = title;
      this.toolbar = toolbar;
      this.navbar = navbar;
      this.button = button;
      this.canvas = canvas;
      this.footer = viewer.querySelector(".".concat(NAMESPACE, "-footer"));
      this.tooltipBox = viewer.querySelector(".".concat(NAMESPACE, "-tooltip"));
      this.player = viewer.querySelector(".".concat(NAMESPACE, "-player"));
      this.list = viewer.querySelector(".".concat(NAMESPACE, "-list"));
      viewer.id = "".concat(NAMESPACE).concat(this.id);
      title.id = "".concat(NAMESPACE, "Title").concat(this.id);
      addClass(title, !options.title ? CLASS_HIDE : getResponsiveClass(Array.isArray(options.title) ? options.title[0] : options.title));
      addClass(navbar, !options.navbar ? CLASS_HIDE : getResponsiveClass(options.navbar));
      toggleClass(button, CLASS_HIDE, !options.button);
      if (options.keyboard) {
        button.setAttribute("tabindex", 0);
      }
      if (options.backdrop) {
        addClass(viewer, "".concat(NAMESPACE, "-backdrop"));
        if (!options.inline && options.backdrop !== "static") {
          setData(canvas, DATA_ACTION, "hide");
        }
      }
      if (isString(options.className) && options.className) {
        options.className.split(REGEXP_SPACES).forEach(function(className) {
          addClass(viewer, className);
        });
      }
      if (options.toolbar) {
        var list = document.createElement("ul");
        var custom = isPlainObject(options.toolbar);
        var zoomButtons = BUTTONS.slice(0, 3);
        var rotateButtons = BUTTONS.slice(7, 9);
        var scaleButtons = BUTTONS.slice(9);
        if (!custom) {
          addClass(toolbar, getResponsiveClass(options.toolbar));
        }
        forEach(custom ? options.toolbar : BUTTONS, function(value, index2) {
          var deep = custom && isPlainObject(value);
          var name = custom ? hyphenate(index2) : value;
          var show2 = deep && !isUndefined(value.show) ? value.show : value;
          if (!show2 || !options.zoomable && zoomButtons.indexOf(name) !== -1 || !options.rotatable && rotateButtons.indexOf(name) !== -1 || !options.scalable && scaleButtons.indexOf(name) !== -1) {
            return;
          }
          var size = deep && !isUndefined(value.size) ? value.size : value;
          var click2 = deep && !isUndefined(value.click) ? value.click : value;
          var item = document.createElement("li");
          if (options.keyboard) {
            item.setAttribute("tabindex", 0);
          }
          item.setAttribute("role", "button");
          addClass(item, "".concat(NAMESPACE, "-").concat(name));
          if (!isFunction(click2)) {
            setData(item, DATA_ACTION, name);
          }
          if (isNumber(show2)) {
            addClass(item, getResponsiveClass(show2));
          }
          if (["small", "large"].indexOf(size) !== -1) {
            addClass(item, "".concat(NAMESPACE, "-").concat(size));
          } else if (name === "play") {
            addClass(item, "".concat(NAMESPACE, "-large"));
          }
          if (isFunction(click2)) {
            addListener(item, EVENT_CLICK, click2);
          }
          list.appendChild(item);
        });
        toolbar.appendChild(list);
      } else {
        addClass(toolbar, CLASS_HIDE);
      }
      if (!options.rotatable) {
        var rotates = toolbar.querySelectorAll('li[class*="rotate"]');
        addClass(rotates, CLASS_INVISIBLE);
        forEach(rotates, function(rotate2) {
          toolbar.appendChild(rotate2);
        });
      }
      if (options.inline) {
        addClass(button, CLASS_FULLSCREEN);
        setStyle(viewer, {
          zIndex: options.zIndexInline
        });
        if (window.getComputedStyle(parent).position === "static") {
          setStyle(parent, {
            position: "relative"
          });
        }
        parent.insertBefore(viewer, element.nextSibling);
      } else {
        addClass(button, CLASS_CLOSE);
        addClass(viewer, CLASS_FIXED);
        addClass(viewer, CLASS_FADE);
        addClass(viewer, CLASS_HIDE);
        setStyle(viewer, {
          zIndex: options.zIndex
        });
        var container = options.container;
        if (isString(container)) {
          container = element.ownerDocument.querySelector(container);
        }
        if (!container) {
          container = this.body;
        }
        container.appendChild(viewer);
      }
      if (options.inline) {
        this.render();
        this.bind();
        this.isShown = true;
      }
      this.ready = true;
      if (isFunction(options.ready)) {
        addListener(element, EVENT_READY, options.ready, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_READY) === false) {
        this.ready = false;
        return;
      }
      if (this.ready && options.inline) {
        this.view(this.index);
      }
    }
    /**
     * Get the no conflict viewer class.
     * @returns {Viewer} The viewer class.
     */
  }], [{
    key: "noConflict",
    value: function noConflict() {
      window.Viewer = AnotherViewer;
      return Viewer2;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function setDefaults(options) {
      assign(DEFAULTS, isPlainObject(options) && options);
    }
  }]);
  return Viewer2;
}();
assign(Viewer.prototype, render2, events, handlers, methods, others);

// node_modules/v-viewer/dist/index.es.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax$1 = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$3 = freeGlobal || freeSelf || Function("return this")();
var _root = root$3;
var root$2 = _root;
var Symbol$3 = root$2.Symbol;
var _Symbol = Symbol$3;
var Symbol$2 = _Symbol;
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
var nativeObjectToString$1 = objectProto$7.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$5.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$6 = Object.prototype;
var nativeObjectToString = objectProto$6.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$1 = _Symbol;
var getRawTag = _getRawTag;
var objectToString = _objectToString;
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag$4(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$4;
function isObject$7(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$7;
var baseGetTag$3 = _baseGetTag;
var isObject$6 = isObject_1;
var asyncTag = "[object AsyncFunction]";
var funcTag$1 = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$6(value)) {
    return false;
  }
  var tag = baseGetTag$3(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$2;
var root$1 = _root;
var coreJsData$1 = root$1["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$1;
var isFunction$1 = isFunction_1;
var isMasked = _isMasked;
var isObject$5 = isObject_1;
var toSource = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype;
var objectProto$5 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$4).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$5(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative;
var getValue = _getValue;
function getNative$1(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$1;
var getNative = _getNative;
var defineProperty$1 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty2 = defineProperty$1;
var constant = constant_1;
var defineProperty = _defineProperty2;
var identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString;
var shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var identity = identity_1;
var overRest = _overRest;
var setToString = _setToString;
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var _baseRest = baseRest$1;
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$2;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$2;
var isFunction2 = isFunction_1;
var isLength$1 = isLength_1;
function isArrayLike$2(value) {
  return value != null && isLength$1(value.length) && !isFunction2(value);
}
var isArrayLike_1 = isArrayLike$2;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var eq$1 = eq_1;
var isArrayLike$1 = isArrayLike_1;
var isIndex$1 = _isIndex;
var isObject$4 = isObject_1;
function isIterateeCall$1(value, index2, object) {
  if (!isObject$4(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike$1(object) && isIndex$1(index2, object.length) : type == "string" && index2 in object) {
    return eq$1(object[index2], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$1;
function baseTimes$1(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
function isObjectLike$4(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$4;
var baseGetTag$2 = _baseGetTag;
var isObjectLike$3 = isObjectLike_1;
var argsTag$1 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$1;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments;
var isObjectLike$2 = isObjectLike_1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
var isArguments$1 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$2(value) && hasOwnProperty$3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_1 = isArguments$1;
var isArray$1 = Array.isArray;
var isArray_1 = isArray$1;
var isBuffer$1 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$1, isBuffer$1.exports);
var baseGetTag$1 = _baseGetTag;
var isLength = isLength_1;
var isObjectLike$1 = isObjectLike_1;
var argsTag = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$1(value) && isLength(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray;
var baseUnary = _baseUnary;
var nodeUtil = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$1;
var baseTimes = _baseTimes;
var isArguments = isArguments_1;
var isArray = isArray_1;
var isBuffer = isBuffer$1.exports;
var isIndex = _isIndex;
var isTypedArray = isTypedArray_1;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;
var objectProto$2 = Object.prototype;
function isPrototype$1(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$2;
  return value === proto;
}
var _isPrototype = isPrototype$1;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$3 = isObject_1;
var isPrototype = _isPrototype;
var nativeKeysIn = _nativeKeysIn;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$3(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys;
var baseKeysIn = _baseKeysIn;
var isArrayLike = isArrayLike_1;
function keysIn$1(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$1;
var baseRest = _baseRest;
var eq = eq_1;
var isIterateeCall = _isIterateeCall;
var keysIn = keysIn_1;
var objectProto = Object.prototype;
var hasOwnProperty2 = objectProto.hasOwnProperty;
var defaults = baseRest(function(object, sources) {
  object = Object(object);
  var index2 = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : void 0;
  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }
  while (++index2 < length) {
    var source = sources[index2];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;
    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];
      if (value === void 0 || eq(value, objectProto[key]) && !hasOwnProperty2.call(object, key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
});
var defaults_1 = defaults;
var inBrowser = typeof window !== "undefined" && window !== null;
checkIntersectionObserver();
var isEnumerable = Object.prototype.propertyIsEnumerable;
var getSymbols = Object.getOwnPropertySymbols;
function isObject$2(val) {
  return typeof val === "function" || toString.call(val) === "[object Object]";
}
function isPrimitive(val) {
  return typeof val === "object" ? val === null : typeof val !== "function";
}
function isValidKey(key) {
  return key !== "__proto__" && key !== "constructor" && key !== "prototype";
}
function checkIntersectionObserver() {
  if (inBrowser && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
        get() {
          return this.intersectionRatio > 0;
        }
      });
    }
    return true;
  }
  return false;
}
function assignSymbols(target, ...args) {
  if (!isObject$2(target)) {
    throw new TypeError("expected the first argument to be an object");
  }
  if (args.length === 0 || typeof Symbol !== "function" || typeof getSymbols !== "function") {
    return target;
  }
  for (const arg of args) {
    const names = getSymbols(arg);
    for (const key of names) {
      if (isEnumerable.call(arg, key)) {
        target[key] = arg[key];
      }
    }
  }
  return target;
}
function assign3(target, ...args) {
  let i = 0;
  if (isPrimitive(target))
    target = args[i++];
  if (!target)
    target = {};
  for (; i < args.length; i++) {
    if (isObject$2(args[i])) {
      for (const key of Object.keys(args[i])) {
        if (isValidKey(key)) {
          if (isObject$2(target[key]) && isObject$2(args[i][key])) {
            assign3(target[key], args[i][key]);
          } else {
            target[key] = args[i][key];
          }
        }
      }
      assignSymbols(target, args[i]);
    }
  }
  return target;
}
var api = ({ images = [], options }) => {
  options = assign3(options, {
    inline: false
  });
  const token = document.createElement("div");
  const ViewerToken = h("div", {
    style: {
      display: "none"
    },
    class: ["__viewer-token"]
  }, images.map((attr) => {
    return h("img", typeof attr === "string" ? { src: attr } : attr);
  }));
  render(ViewerToken, token);
  const tokenElement = token.firstElementChild;
  document.body.appendChild(tokenElement);
  const $viewerJs = new Viewer(tokenElement, options);
  const $destroy = $viewerJs.destroy.bind($viewerJs);
  $viewerJs.destroy = function() {
    $destroy();
    render(null, token);
    return $viewerJs;
  };
  $viewerJs.show();
  tokenElement.addEventListener("hidden", function() {
    if (this.viewer === $viewerJs) {
      $viewerJs.destroy();
    }
  });
  return $viewerJs;
};
var root = _root;
var now$1 = function() {
  return root.Date.now();
};
var now_1 = now$1;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var _baseTrim = baseTrim$1;
var baseGetTag = _baseGetTag;
var isObjectLike = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$1(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var isSymbol_1 = isSymbol$1;
var baseTrim = _baseTrim;
var isObject$1 = isObject_1;
var isSymbol = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$1(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var isObject2 = isObject_1;
var now = now_1;
var toNumber = toNumber_1;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject2(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_1 = debounce;
var directive = ({ name = "viewer", debug = false } = {}) => {
  async function createViewer(el, options, rebuild = false, observer = false) {
    await nextTick();
    if (observer && !imageDiff(el))
      return;
    if (rebuild || !el[`$${name}`]) {
      destroyViewer(el);
      el[`$${name}`] = new Viewer(el, options);
      log("Viewer created");
    } else {
      el[`$${name}`].update();
      log("Viewer updated");
    }
  }
  function imageDiff(el) {
    const imageContent = el.innerHTML.match(/<img([\w\W]+?)[\\/]?>/g);
    const viewerImageText = imageContent ? imageContent.join("") : void 0;
    if (el.__viewerImageDiffCache === viewerImageText) {
      log("Element change detected, but image(s) has not changed");
      return false;
    } else {
      log("Image change detected");
      el.__viewerImageDiffCache = viewerImageText;
      return true;
    }
  }
  function createObserver(el, options, debouncedCreateViewer, rebuild) {
    destroyObserver(el);
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    if (!MutationObserver) {
      log("Observer not supported");
      return;
    }
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        log(`Viewer mutation:${mutation.type}`);
        debouncedCreateViewer(el, options, rebuild, true);
      });
    });
    const config = { attributes: true, childList: true, characterData: true, subtree: true };
    observer.observe(el, config);
    el.__viewerMutationObserver = observer;
    log("Observer created");
  }
  function createWatcher(el, binding, vnode, debouncedCreateViewer) {
    el.__viewerUnwatch = watch(() => binding.value, (newVal, oldVal) => {
      log("Change detected by watcher: ", binding.value);
      debouncedCreateViewer(el, newVal, true, false);
    }, { deep: true });
    log("Watcher created, expression: ", binding.value);
  }
  function destroyViewer(el) {
    if (!el[`$${name}`]) {
      return;
    }
    el[`$${name}`].destroy();
    delete el[`$${name}`];
    log("Viewer destroyed");
  }
  function destroyObserver(el) {
    if (!el.__viewerMutationObserver) {
      return;
    }
    el.__viewerMutationObserver.disconnect();
    delete el.__viewerMutationObserver;
    log("observer destroyed");
  }
  function destroyWatcher(el) {
    if (!el.__viewerUnwatch) {
      return;
    }
    el.__viewerUnwatch();
    delete el.__viewerUnwatch;
    log("Watcher destroyed");
  }
  function log(...args) {
    debug && console.log(...args);
  }
  const directive2 = {
    mounted(el, binding, vnode) {
      log("Viewer bind");
      const debouncedCreateViewer = debounce_1(createViewer, 50);
      debouncedCreateViewer(el, binding.value);
      createWatcher(el, binding, vnode, debouncedCreateViewer);
      if (!binding.modifiers.static) {
        createObserver(el, binding.value, debouncedCreateViewer, binding.modifiers.rebuild);
      }
    },
    unmounted(el) {
      log("Viewer unbind");
      destroyObserver(el);
      destroyWatcher(el);
      destroyViewer(el);
    }
  };
  return directive2;
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
var _sfc_main = defineComponent({
  name: "Viewer",
  props: {
    images: {
      type: Array,
      default: () => []
    },
    rebuild: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: () => null
    }
  },
  emits: ["inited"],
  setup(props, { emit }) {
    let $viewer;
    const root2 = ref();
    function createViewer() {
      $viewer = new Viewer(root2.value, props.options);
      emit("inited", $viewer);
    }
    function destroyViewer() {
      $viewer && $viewer.destroy();
    }
    function rebuildViewer() {
      destroyViewer();
      createViewer();
    }
    function updateViewer() {
      if ($viewer) {
        $viewer.update();
        emit("inited", $viewer);
      } else {
        createViewer();
      }
    }
    function changeViewer() {
      if (props.rebuild) {
        rebuildViewer();
      } else {
        updateViewer();
      }
    }
    const options = { deep: true };
    watch(() => props.images, () => nextTick(() => changeViewer()), options);
    watch(() => props.trigger, () => nextTick(() => changeViewer()), options);
    watch(() => props.options, () => nextTick(() => rebuildViewer()), options);
    onMounted(() => createViewer());
    onUnmounted(() => destroyViewer());
    return {
      root: root2,
      createViewer,
      rebuildViewer,
      updateViewer,
      destroyViewer
    };
  }
});
var _hoisted_1 = { ref: "root" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default", {
      images: _ctx.images,
      options: _ctx.options
    })
  ], 512);
}
var component = _export_sfc(_sfc_main, [["render", _sfc_render]]);
var index = {
  install(app, { name = "viewer", debug = false, defaultOptions } = {}) {
    if (defaultOptions) {
      Viewer.setDefaults(defaultOptions);
    }
    app.config.globalProperties[`$${name}Api`] = api;
    app.component(name, defaults_1(component, { name }));
    app.directive(name, directive({ name, debug }));
  },
  setDefaults(defaultOptions) {
    Viewer.setDefaults(defaultOptions);
  }
};
export {
  Viewer,
  api,
  component,
  index as default,
  directive
};
/*! Bundled license information:

viewerjs/dist/viewer.esm.js:
  (*!
   * Viewer.js v1.11.4
   * https://fengyuanchen.github.io/viewerjs
   *
   * Copyright 2015-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2023-07-23T07:45:53.159Z
   *)

v-viewer/dist/index.es.js:
  (*!
   * v-viewer v3.0.11
   * https://github.com/mirari/v-viewer#readme
   *
   * Copyright 2022 mirari
   * Released under the MIT license
   *
   * Date: 2022-10-25T08:49:33.301Z
   *)
*/
//# sourceMappingURL=v-viewer.js.map
