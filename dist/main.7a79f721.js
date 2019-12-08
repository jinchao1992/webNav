// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"T7uK":[function(require,module,exports) {
module.exports = "juejin.abfdc994.svg";
},{}],"pg/r":[function(require,module,exports) {
module.exports = "sifou.802f3938.png";
},{}],"RDfP":[function(require,module,exports) {
module.exports = "Vue.7f088d80.png";
},{}],"zob0":[function(require,module,exports) {
module.exports = "React.9c4899db.png";
},{}],"E1Jp":[function(require,module,exports) {
module.exports = "Angular.eed96449.png";
},{}],"AAqn":[function(require,module,exports) {
module.exports = "ant design.dda12cae.svg";
},{}],"HWdF":[function(require,module,exports) {
module.exports = "iview.846fc82d.svg";
},{}],"xGRN":[function(require,module,exports) {
module.exports = "element.bdeba2fb.png";
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _juejin = _interopRequireDefault(require("./images/juejin.svg"));

var _sifou = _interopRequireDefault(require("./images/sifou.png"));

var _Vue = _interopRequireDefault(require("./images/Vue.png"));

var _React = _interopRequireDefault(require("./images/React.png"));

var _Angular = _interopRequireDefault(require("./images/Angular.png"));

var _antDesign = _interopRequireDefault(require("./images/ant design.svg"));

var _iview = _interopRequireDefault(require("./images/iview.svg"));

var _element = _interopRequireDefault(require("./images/element.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var $siteList = $('.site-list');
var $lastLi = $('.site-item').last();
var data = JSON.parse(localStorage.getItem('hasMap')) || [{
  logo: _juejin.default,
  logoType: 'img',
  url: 'https://juejin.im'
}, {
  logo: _sifou.default,
  logoType: 'img',
  url: 'https://segmentfault.com'
}, {
  logo: _Vue.default,
  logoType: 'img',
  url: 'https://cn.vuejs.org/'
}, {
  logo: _React.default,
  logoType: 'img',
  url: 'https://zh-hans.reactjs.org/'
}, {
  logo: _Angular.default,
  logoType: 'img',
  url: 'https://angular.io/'
}, {
  logo: _antDesign.default,
  logoType: 'img',
  url: 'https://ant.design/index-cn'
}, {
  logo: _iview.default,
  logoType: 'img',
  url: 'https://www.iviewui.com/'
}, {
  logo: _element.default,
  logoType: 'img',
  url: 'https://element.eleme.io/#/zh-CN'
}];
var hasMap = data;
var timer = null;
var startTime = null;
var endTime = null;
var isMove = false;

var render = function render() {
  $siteList.find('li:not(:last())').remove();
  hasMap.forEach(function (node, index) {
    var $li = $("<li class=\"site-item\">\n      <a href=\"".concat(node.url, "\">\n        <div class=\"website\">\n          <p class=\"logo\">\n            ").concat(node.logoType === 'img' ? '<img src="' + node.logo + '">' : parseUrl(node.url)[0], "\n          </p>\n          <span class=\"title\">").concat(parseUrl(node.url), "</span>\n          <span class=\"close\">\n            <svg class=\"icon\" aria-hidden=\"true\">\n              <use xlink:href=\"#icon-hebingxingzhuang\"></use>\n            </svg>\n          </span>\n        </div>\n      </a>\n    </li>"));
    $li.insertBefore($lastLi);
    $li.on('click', '.close', function (e) {
      e.preventDefault();
      hasMap.splice(index, 1);
      render();
    });
    $li.on('touchstart', function (e) {
      startTime = +new Date();
      timer = setTimeout(function () {
        $($('.close').get(index)).addClass('close-hover');
        $li.addClass('move');
      }, 700);
    });
    $li.on('touchmove', function (e) {
      if (e.changedTouches[0].clientY > 10) {
        clearTimeout(timer);
      }
    });
    $li.on('touchend', function () {
      endTime = +new Date();
      clearTimeout(timer);

      if (endTime - startTime < 700) {
        $('.close').removeClass('close-hover');
        $li.removeClass('move');
      }
    });
    var string = JSON.stringify(hasMap);
    localStorage.setItem('hasMap', string);
  });
};

var parseUrl = function parseUrl(url) {
  return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '');
};

var handleCancel = function handleCancel() {
  $('.popup-box-wrap').fadeOut();
  $('.popup-box').css({
    'opacity': 0,
    'transform': 'translate3d(-50%, -150%, 0)'
  });
  clearText();
};

var clearText = function clearText() {
  $('#url').val('');
  $('#logo').val('');
};

render();
$('.add-wrap').on('click', function () {
  $('.popup-box-wrap').fadeIn();
  $('.popup-box').css({
    'opacity': 1,
    'transform': 'translate3d(-50%, -50%, 0)'
  });
});
$('.btn-ok').on('click', function () {
  // let url = window.prompt('请输入要添加的网址')
  var $url = $('#url');
  var $logo = $('#logo');
  var $urlVal = $url.val();
  var $logoVal = $logo.val();

  if ($urlVal === '') {
    alert('url不能为空');
    return;
  }

  if ($urlVal.indexOf('http') !== 0) {
    $urlVal = "https://".concat($urlVal);
  }

  hasMap.push({
    logo: !$logoVal ? parseUrl($urlVal)[0] : $logoVal,
    logoType: !$logoVal ? 'text' : 'img',
    url: $urlVal
  });
  render();
  handleCancel();
});
$('.btn-cancel').on('click', handleCancel);
$('.popup-box-wrap').on('keyup', '#url', '#logo', function (e) {
  e.stopPropagation();
});
$(document).on('keyup', function (e) {
  var key = e.key;
  hasMap.forEach(function (item) {
    if (key === item.logo) {
      window.open(item.url);
    }
  });
});
$(document).on('click', function () {
  $('.site-item').removeClass('move');
  $('.site-item .close').removeClass('close-hover');
});
$('.search-text').on('keyup', function (e) {
  e.stopPropagation();
});
var startIndex;
var endIndex;
$('.site-list').sortable({
  containment: 'parent',
  cursor: 'move',
  start: function start(ev, _ref) {
    var item = _ref.item;
    startIndex = $(item).index();
  },
  stop: function stop(ev, _ref2) {
    var item = _ref2.item;
    endIndex = $(item).index();
    hasMap.splice.apply(hasMap, [endIndex, 1].concat(_toConsumableArray(hasMap.splice(startIndex, 1, hasMap[endIndex]))));
    render();
  }
}).disableSelection(); // 页面关闭之前触发
// window.onbeforeunload = function () {
//   const string = JSON.stringify(hasMap)
//   localStorage.setItem('hasMap', string)
// }

$(document).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  var $header = $('.global-header');
  var $fixedHeader = $('.fixed-header');
  var $headerTop = $header.offset().top;

  if (scrollTop > $headerTop) {
    $fixedHeader.show();
  }

  if (scrollTop === 0) {
    $fixedHeader.hide();
  }
});
},{"./images/juejin.svg":"T7uK","./images/sifou.png":"pg/r","./images/Vue.png":"RDfP","./images/React.png":"zob0","./images/Angular.png":"E1Jp","./images/ant design.svg":"AAqn","./images/iview.svg":"HWdF","./images/element.png":"xGRN"}]},{},["epB2"], null)
//# sourceMappingURL=main.7a79f721.js.map