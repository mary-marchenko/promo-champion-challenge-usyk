"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var apiURL = 'https://fav-prom.com/api_champion_challenge_ua';
  var promoEndDate = new Date("2025-07-19T23:29:59");
  function checkAndLockPromo(currentDate, promoEndDate) {
    if (currentDate >= promoEndDate) {
      document.querySelectorAll('.btn, .predict__minus, .predict__plus').forEach(function (el) {
        el.classList.add('_lock');
      });
    }
  }
  var mainPage = document.querySelector(".fav-page"),
    currentDate = new Date(),
    // currentDate =  new Date("2026-07-19T23:29:59"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    playBtn = document.querySelectorAll('.play-btn'),
    scrollPartBtn = document.querySelectorAll('.scroll-part-btn'),
    placeBetBtn = document.querySelector('.btn-join'),
    loader = document.querySelector(".spinner-overlay"),
    resultsTable = document.querySelector('#table'),
    unauthTable = document.querySelector('.table__body-scroll'),
    resultsTableOther = document.querySelector('#tableOther'),
    scoreDiv = document.querySelector('.predict__left-counter'),
    predictBtn = document.querySelector('.btn-predictJud'),
    confirmBtn = document.querySelector('.btn-confirmed'),
    last = document.querySelector('.predict__left-last.number'),
    judges = document.querySelector('.predict__left-last.judges');
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };
  var currentBet;
  var locale = "uk";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  var userId = null;
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              checkUserAuth();
              renderUsers();
              checkAndLockPromo(currentDate, promoEndDate), placeBetBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (!currentBet) {
                  currentBet = new Bet(userId, matchNumber);
                }
                placeBet(placeBetBtn);
              });
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function loadTranslations() {
    return request("/new-translates/".concat(locale)).then(function (json) {
      i18nData = json;
      translate();
      var targetNode = document.getElementById("champion-challenge-usyk");
      var mutationObserver = new MutationObserver(function (mutations) {
        mutationObserver.disconnect();
        translate();
        mutationObserver.observe(targetNode, {
          childList: true,
          subtree: true
        });
      });
      mutationObserver.observe(targetNode, {
        childList: true,
        subtree: true
      });
    });
  }
  function checkUserAuth() {
    var loadTime = 200;
    setTimeout(function () {
      var showElements = function showElements(elements) {
        return elements.forEach(function (el) {
          return el.classList.remove('hide');
        });
      };
      var hideElements = function hideElements(elements) {
        return elements.forEach(function (el) {
          return el.classList.add('hide');
        });
      };
      if (!userId) {
        // hideElements(participateBtns);
        placeBetBtn.classList.add('hide');
        hideElements(scrollPartBtn);
        hideElements(playBtn);
        showElements(unauthMsgs);
        hideLoader();
        unauthTable.classList.add("unauth");
        return Promise.resolve(false);
      }
      hideElements(unauthMsgs);
      unauthTable.classList.remove("unauth");
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          // hideElements(participateBtns);
          showElements(scrollPartBtn);
          showElements([placeBetBtn]);
          showElements(playBtn);
        } else {
          showElements(scrollPartBtn);
          showElements([placeBetBtn]);
          showElements(playBtn);
        }
        hideLoader();
      });
    }, loadTime);
  }
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
      }
    }
    refreshLocalizedClass(mainPage);
  }
  function refreshLocalizedClass(element) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(lang);
    }
    element.classList.add(locale);
  }
  function renderUsers(users) {
    request("/users/").then(function (data) {
      populateUsersTable(data, userId);
    });
  }
  function populateUsersTable(users, currentUserId) {
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    if (!(users !== null && users !== void 0 && users.length)) return;
    users.forEach(function (user) {
      var isCurrentUser = user.userid === currentUserId;
      var targetTable = isCurrentUser ? resultsTableOther : resultsTable;
      displayUser(user, isCurrentUser, targetTable);
    });
  }
  function displayUser(user, isCurrentUser, table) {
    var row = document.createElement('div');
    row.classList.add('table__row');
    if (isCurrentUser) {
      row.classList.add('you');
      updateLastPrediction(user.userid);
    }
    var prediction = Number(user.team) === 13 ? i18nData["judgesDecision"] : user.team;
    var userIdDisplay = isCurrentUser ? "".concat(user.userid, " <span class=\"you\" data-translate=\"you\"></span>") : maskUserId(user.userid);
    row.innerHTML = "\n        <div class=\"table__row-item\">".concat(userIdDisplay, "</div>\n        <div class=\"table__row-item\">").concat(formatDateString(user.lastForecast), "</div>\n        <div class=\"table__row-item\">").concat(prediction, "</div>\n        ").concat(typeof user.winner === 'boolean' ? "<div class=\"table__row-item\" data-translate=\"".concat(user.winner ? 'prize' : 'noWinners', "\">*****</div>") : "<div class=\"table__row-item\">*****</div>", "\n        ");
    table === null || table === void 0 ? void 0 : table.appendChild(row);
  }
  function maskUserId(userId) {
    return '**' + userId.toString().slice(2);
  }
  function updateLastPrediction(userid) {
    request("/favuser/".concat(userId), {
      method: 'GET'
    }).then(function (data) {
      // const scoreDiv = document.querySelector('.predict__left-counter');
      if (scoreDiv) {
        if (data.team === 13) {
          last.classList.add('hide');
          judges.classList.remove('hide');
        } else {
          judges.classList.add('hide');
          last.classList.remove('hide');
          scoreDiv.innerHTML = "".concat(data.team);
        }
      }
      var unconfirmedItem = document.querySelector(".predict__left-result.unconfirmed");
      var confirmedItem = document.querySelector(".predict__left-result.confirmed");
      var isConfirmed = !!data.betConfirmed;
      console.log(isConfirmed + " це стосовно ставки");
      confirmedItem === null || confirmedItem === void 0 ? void 0 : confirmedItem.classList.toggle("hide", !isConfirmed);
      unconfirmedItem === null || unconfirmedItem === void 0 ? void 0 : unconfirmedItem.classList.toggle("hide", isConfirmed);
    })["catch"](function (error) {
      console.error('Error:', error);
    });
  }
  function formatDateString(dateString) {
    var date = new Date(dateString);
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear();
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    return "".concat(day, ".").concat(month, ".").concat(year, " ").concat(hours, ":").concat(minutes);
  }
  loadTranslations().then(init);

  // anim belt
  document.addEventListener('DOMContentLoaded', function () {
    var target = document.querySelector('.predict__content');
    var belt = document.querySelector('.predict__right-belt');
    var screenWidth = window.innerWidth;
    var thresholdValue = screenWidth <= 640 ? 0.3 : 0.9;
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          belt.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: thresholdValue
    });
    if (target) {
      observer.observe(target);
    }
  });

  // predict +-
  var minusBtn = document.querySelector('.predict__minus');
  var plusBtn = document.querySelector('.predict__plus');
  var numberEl = document.querySelector('.predict__number');
  var judgesEl = document.querySelector('.predict__judges');
  currentBet = 1; // 1-12 + 13 (судді)

  function updateDisplay() {
    if (currentBet === 13) {
      numberEl.classList.add('hide');
      judgesEl.classList.remove('hide');
    } else {
      numberEl.textContent = currentBet;
      numberEl.classList.remove('hide');
      judgesEl.classList.add('hide');
    }
  }
  plusBtn.addEventListener('click', function () {
    currentBet = currentBet === 13 ? 1 : currentBet + 1;
    updateDisplay();
  });
  minusBtn.addEventListener('click', function () {
    currentBet = currentBet === 1 ? 13 : currentBet - 1;
    updateDisplay();
  });
  updateDisplay();

  // scroll to
  document.addEventListener('DOMContentLoaded', function () {
    var scrollBtn = document.querySelector('.scroll-part-btn');
    var targetBlock = document.querySelector('.predict__content');
    if (scrollBtn && targetBlock) {
      scrollBtn.addEventListener('click', function (e) {
        e.preventDefault();
        targetBlock.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      });
    }
  });
  var isRequestInProgress;
  function placeBet(btn) {
    if (!userId) {
      return;
    }
    if (isRequestInProgress) {
      return;
    }
    isRequestInProgress = true;
    request('/bet', {
      method: 'POST',
      body: JSON.stringify({
        userid: userId,
        team: currentBet
      })
    }).then(function (res) {
      isRequestInProgress = false;
      // renderUsers();
      var btnTxt = btn.querySelector('.btn-txt');
      toggleClasses([btnTxt], "loader");
      toggleTranslates([btnTxt], "loader");
      setTimeout(function () {
        toggleTranslates([btnTxt], "loader_ready");
        toggleClasses([btnTxt], "loader");
      }, 500);
      setTimeout(function () {
        toggleTranslates([btnTxt], "partBtn");
        updateLastPrediction(userId);
        renderUsers();
      }, 1000);
    });
  }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwicHJvbW9FbmREYXRlIiwiRGF0ZSIsImNoZWNrQW5kTG9ja1Byb21vIiwiY3VycmVudERhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJtYWluUGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicGxheUJ0biIsInNjcm9sbFBhcnRCdG4iLCJwbGFjZUJldEJ0biIsImxvYWRlciIsInJlc3VsdHNUYWJsZSIsInVuYXV0aFRhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJzY29yZURpdiIsInByZWRpY3RCdG4iLCJjb25maXJtQnRuIiwibGFzdCIsImp1ZGdlcyIsInVrTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwiY3VycmVudEJldCIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXBvcnRFcnJvciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0IiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJjaGVja1VzZXJBdXRoIiwicmVuZGVyVXNlcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiQmV0IiwibWF0Y2hOdW1iZXIiLCJwbGFjZUJldCIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZSIsInRhcmdldE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwibG9hZFRpbWUiLCJzZXRUaW1lb3V0Iiwic2hvd0VsZW1lbnRzIiwiaGlkZUVsZW1lbnRzIiwidXNlcmlkIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJ1c2VycyIsImRhdGEiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwidXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YXJnZXRUYWJsZSIsImRpc3BsYXlVc2VyIiwidGFibGUiLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwidXBkYXRlTGFzdFByZWRpY3Rpb24iLCJwcmVkaWN0aW9uIiwiTnVtYmVyIiwidGVhbSIsInVzZXJJZERpc3BsYXkiLCJtYXNrVXNlcklkIiwiZm9ybWF0RGF0ZVN0cmluZyIsImxhc3RGb3JlY2FzdCIsIndpbm5lciIsImFwcGVuZENoaWxkIiwidG9TdHJpbmciLCJzbGljZSIsInVuY29uZmlybWVkSXRlbSIsImNvbmZpcm1lZEl0ZW0iLCJpc0NvbmZpcm1lZCIsImJldENvbmZpcm1lZCIsImRhdGVTdHJpbmciLCJkYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInRhcmdldCIsImJlbHQiLCJzY3JlZW5XaWR0aCIsImlubmVyV2lkdGgiLCJ0aHJlc2hvbGRWYWx1ZSIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsIm1pbnVzQnRuIiwicGx1c0J0biIsIm51bWJlckVsIiwianVkZ2VzRWwiLCJ1cGRhdGVEaXNwbGF5IiwidGV4dENvbnRlbnQiLCJzY3JvbGxCdG4iLCJ0YXJnZXRCbG9jayIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImlzUmVxdWVzdEluUHJvZ3Jlc3MiLCJidG4iLCJidG5UeHQiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBRVQsSUFBTUEsTUFBTSxHQUFHLGdEQUFnRDtFQUUvRCxJQUFNQyxZQUFZLEdBQUcsSUFBSUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0VBR3BELFNBQVNDLGlCQUFpQixDQUFDQyxXQUFXLEVBQUVILFlBQVksRUFBRTtJQUNsRCxJQUFJRyxXQUFXLElBQUlILFlBQVksRUFBRTtNQUM3QkksUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBVUMsRUFBRSxFQUFFO1FBQ3JGQSxFQUFFLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztNQUM3QixDQUFDLENBQUM7SUFDTjtFQUNKO0VBRUEsSUFBTUMsUUFBUSxHQUFHTixRQUFRLENBQUNPLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDaERSLFdBQVcsR0FBRyxJQUFJRixJQUFJLEVBQUU7SUFDeEI7SUFDQVcsVUFBVSxHQUFHUixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNyRFEsT0FBTyxHQUFHVCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUNoRFMsYUFBYSxHQUFHVixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO0lBQzdEVSxXQUFXLEdBQUdYLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNqREssTUFBTSxHQUFHWixRQUFRLENBQUNPLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztJQUNuRE0sWUFBWSxHQUFHYixRQUFRLENBQUNPLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDL0NPLFdBQVcsR0FBR2QsUUFBUSxDQUFDTyxhQUFhLENBQUMscUJBQXFCLENBQUM7SUFDM0RRLGlCQUFpQixHQUFHZixRQUFRLENBQUNPLGFBQWEsQ0FBQyxhQUFhLENBQUM7SUFDekRTLFFBQVEsR0FBR2hCLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLHdCQUF3QixDQUFDO0lBQzNEVSxVQUFVLEdBQUdqQixRQUFRLENBQUNPLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUN0RFcsVUFBVSxHQUFHbEIsUUFBUSxDQUFDTyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7SUFDckRZLElBQUksR0FBR25CLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLDRCQUE0QixDQUFDO0lBQzNEYSxNQUFNLEdBQUdwQixRQUFRLENBQUNPLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztFQUdqRSxJQUFNYyxNQUFNLEdBQUdyQixRQUFRLENBQUNPLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFDaEQsSUFBTWUsTUFBTSxHQUFHdEIsUUFBUSxDQUFDTyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBRWhELElBQU1nQixhQUFhLEdBQUcsU0FBaEJBLGFBQWEsQ0FBSUMsUUFBUSxFQUFFQyxTQUFTO0lBQUEsT0FBS0QsUUFBUSxDQUFDdEIsT0FBTyxDQUFDLFVBQUFDLEVBQUU7TUFBQSxPQUFJQSxFQUFFLENBQUNDLFNBQVMsQ0FBQ3NCLE1BQU0sV0FBSUQsU0FBUyxFQUFHO0lBQUEsRUFBQztFQUFBO0VBQzFHLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0IsQ0FBSUgsUUFBUSxFQUFFSSxRQUFRO0lBQUEsT0FBS0osUUFBUSxDQUFDdEIsT0FBTyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtNQUNwRUEsRUFBRSxDQUFDMEIsWUFBWSxDQUFDLGdCQUFnQixZQUFLRCxRQUFRLEVBQUc7TUFDaER6QixFQUFFLENBQUMyQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0gsUUFBUSxDQUFDLElBQUksMENBQTBDLEdBQUdBLFFBQVE7TUFDMUZ6QixFQUFFLENBQUM2QixlQUFlLENBQUMsZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQyxDQUFDO0VBQUE7RUFFRixJQUFJQyxVQUFVO0VBRWQsSUFBSUMsTUFBTSxHQUFHLElBQUk7RUFFakIsSUFBSWIsTUFBTSxFQUFFYSxNQUFNLEdBQUcsSUFBSTtFQUN6QixJQUFJWixNQUFNLEVBQUVZLE1BQU0sR0FBRyxJQUFJO0VBRXpCLElBQUlDLEtBQUssR0FBRyxLQUFLO0VBRWpCLElBQUlBLEtBQUssRUFBRUMsVUFBVSxFQUFFO0VBRXZCLElBQUlMLFFBQVEsR0FBRyxDQUFDLENBQUM7RUFDakIsSUFBTU0sY0FBYyxHQUFHLElBQUk7RUFFM0IsSUFBSUMsTUFBTSxHQUFHLElBQUk7RUFHakIsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU8sQ0FBYUMsSUFBSSxFQUFFQyxZQUFZLEVBQUU7SUFDMUMsT0FBT0MsS0FBSyxDQUFDL0MsTUFBTSxHQUFHNkMsSUFBSTtNQUN0QkcsT0FBTyxFQUFFO1FBQ0wsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixjQUFjLEVBQUU7TUFDcEI7SUFBQyxHQUNHRixZQUFZLElBQUksQ0FBQyxDQUFDLEVBQ3hCLENBQ0dHLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUk7TUFDVCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsRUFBRSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztNQUN6QyxPQUFPRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUNyQixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtNQUNWQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRUYsR0FBRyxDQUFDO01BRXpDRyxXQUFXLENBQUNILEdBQUcsQ0FBQztNQUVoQmpELFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDOEMsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtNQUMxRCxJQUFJQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRTtRQUMzREgsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyw0QkFBNEI7TUFDdkQsQ0FBQyxNQUFNO1FBQ0hGLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcscUJBQXFCO01BQ2hEO01BRUEsT0FBT0UsT0FBTyxDQUFDQyxNQUFNLENBQUNYLEdBQUcsQ0FBQztJQUM5QixDQUFDLENBQUM7RUFFVixDQUFDO0VBRUQsU0FBU2IsVUFBVSxHQUFFO0lBQ2pCeEIsTUFBTSxDQUFDUixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDNUJMLFFBQVEsQ0FBQzZELElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxRQUFRLEdBQUcsTUFBTTtJQUNyQ3hELFFBQVEsQ0FBQ0YsU0FBUyxDQUFDMkQsTUFBTSxDQUFDLFNBQVMsQ0FBQztFQUN4QztFQUFDLFNBRWNDLElBQUk7SUFBQTtFQUFBO0VBQUE7SUFBQSxtRUFBbkI7TUFBQSw0Q0FLYUMsZUFBZSxFQVNmQyxtQkFBbUI7TUFBQTtRQUFBO1VBQUE7WUFBbkJBLG1CQUFtQixtQ0FBRztjQUMzQkMsYUFBYSxFQUFFO2NBQ2ZDLFdBQVcsRUFBRTtjQUNidEUsaUJBQWlCLENBQUNDLFdBQVcsRUFBRUgsWUFBWSxDQUFDLEVBQzVDZSxXQUFXLENBQUMwRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO2dCQUN6Q0EsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7Z0JBRWxCLElBQUksQ0FBQ3RDLFVBQVUsRUFBRTtrQkFDYkEsVUFBVSxHQUFHLElBQUl1QyxHQUFHLENBQUNsQyxNQUFNLEVBQUVtQyxXQUFXLENBQUM7Z0JBQzdDO2dCQUVBQyxRQUFRLENBQUMvRCxXQUFXLENBQUM7Y0FDekIsQ0FBQyxDQUFDO1lBQ04sQ0FBQztZQXRCUXNELGVBQWUsK0JBQUc7Y0FDdkIsSUFBSVYsTUFBTSxDQUFDb0IsS0FBSyxFQUFFO2dCQUNkLElBQU1DLEtBQUssR0FBR3JCLE1BQU0sQ0FBQ29CLEtBQUssQ0FBQ0UsUUFBUSxFQUFFO2dCQUNyQ3ZDLE1BQU0sR0FBR3NDLEtBQUssQ0FBQ0UsSUFBSSxDQUFDQyxZQUFZLElBQUlILEtBQUssQ0FBQ0UsSUFBSSxDQUFDRSxFQUFFLElBQUksRUFBRTtjQUMzRCxDQUFDLE1BQU0sSUFBSXpCLE1BQU0sQ0FBQzBCLFNBQVMsRUFBRTtnQkFDekIzQyxNQUFNLEdBQUdpQixNQUFNLENBQUMwQixTQUFTO2NBQzdCO1lBQ0osQ0FBQztZQVhHQyxRQUFRLEdBQUcsQ0FBQztZQUNWQyxXQUFXLEdBQUcsRUFBRTtZQUNoQkMsZUFBZSxHQUFHLEVBQUU7WUEwQnBCQyxhQUFhLEdBQUcsSUFBSTFCLE9BQU8sQ0FBQyxVQUFDMkIsT0FBTyxFQUFLO2NBQzNDLElBQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQU07Z0JBQy9CdkIsZUFBZSxFQUFFO2dCQUNqQixJQUFJM0IsTUFBTSxJQUFJNEMsUUFBUSxJQUFJQyxXQUFXLEVBQUU7a0JBQ25DakIsbUJBQW1CLEVBQUU7a0JBQ3JCdUIsYUFBYSxDQUFDRixRQUFRLENBQUM7a0JBQ3ZCRCxPQUFPLEVBQUU7Z0JBQ2I7Z0JBQ0FKLFFBQVEsRUFBRTtjQUNkLENBQUMsRUFBRUUsZUFBZSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQztZQUFBO1lBQUEsT0FFSUMsYUFBYTtVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQSxDQUN0QjtJQUFBO0VBQUE7RUFFRCxTQUFTSyxnQkFBZ0IsR0FBRztJQUN4QixPQUFPbkQsT0FBTywyQkFBb0JMLE1BQU0sRUFBRyxDQUN0Q1UsSUFBSSxDQUFDLFVBQUFJLElBQUksRUFBSTtNQUNWakIsUUFBUSxHQUFHaUIsSUFBSTtNQUNmMkMsU0FBUyxFQUFFO01BQ1gsSUFBTUMsVUFBVSxHQUFHNUYsUUFBUSxDQUFDNkYsY0FBYyxDQUFDLHlCQUF5QixDQUFDO01BQ3JFLElBQU1DLGdCQUFnQixHQUFHLElBQUlDLGdCQUFnQixDQUFDLFVBQVVDLFNBQVMsRUFBRTtRQUMvREYsZ0JBQWdCLENBQUNHLFVBQVUsRUFBRTtRQUM3Qk4sU0FBUyxFQUFFO1FBQ1hHLGdCQUFnQixDQUFDSSxPQUFPLENBQUNOLFVBQVUsRUFBRTtVQUFFTyxTQUFTLEVBQUUsSUFBSTtVQUFFQyxPQUFPLEVBQUU7UUFBSyxDQUFDLENBQUM7TUFDNUUsQ0FBQyxDQUFDO01BQ0ZOLGdCQUFnQixDQUFDSSxPQUFPLENBQUNOLFVBQVUsRUFBRTtRQUNqQ08sU0FBUyxFQUFFLElBQUk7UUFDZkMsT0FBTyxFQUFFO01BQ2IsQ0FBQyxDQUFDO0lBRU4sQ0FBQyxDQUFDO0VBQ1Y7RUFHQSxTQUFTakMsYUFBYSxHQUFHO0lBQ3JCLElBQU1rQyxRQUFRLEdBQUcsR0FBRztJQUVwQkMsVUFBVSxDQUFDLFlBQU07TUFDYixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJL0UsUUFBUTtRQUFBLE9BQUtBLFFBQVEsQ0FBQ3RCLE9BQU8sQ0FBQyxVQUFBQyxFQUFFO1VBQUEsT0FBSUEsRUFBRSxDQUFDQyxTQUFTLENBQUMyRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQUEsRUFBQztNQUFBO01BQ3RGLElBQU15QyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJaEYsUUFBUTtRQUFBLE9BQUtBLFFBQVEsQ0FBQ3RCLE9BQU8sQ0FBQyxVQUFBQyxFQUFFO1VBQUEsT0FBSUEsRUFBRSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFBQSxFQUFDO01BQUE7TUFFbkYsSUFBSSxDQUFDaUMsTUFBTSxFQUFFO1FBQ1Q7UUFDQTNCLFdBQVcsQ0FBQ1AsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ2pDbUcsWUFBWSxDQUFDOUYsYUFBYSxDQUFDO1FBQzNCOEYsWUFBWSxDQUFDL0YsT0FBTyxDQUFDO1FBQ3JCOEYsWUFBWSxDQUFDL0YsVUFBVSxDQUFDO1FBQ3hCNEIsVUFBVSxFQUFFO1FBQ1p0QixXQUFXLENBQUNWLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUNuQyxPQUFPc0QsT0FBTyxDQUFDMkIsT0FBTyxDQUFDLEtBQUssQ0FBQztNQUNqQztNQUVBa0IsWUFBWSxDQUFDaEcsVUFBVSxDQUFDO01BQ3hCTSxXQUFXLENBQUNWLFNBQVMsQ0FBQzJELE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFFdEMsT0FBT3hCLE9BQU8sb0JBQWFELE1BQU0sZ0JBQWEsQ0FBQ00sSUFBSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtRQUN2RCxJQUFJQSxHQUFHLENBQUM0RCxNQUFNLEVBQUU7VUFDWjtVQUNBRixZQUFZLENBQUM3RixhQUFhLENBQUM7VUFDM0I2RixZQUFZLENBQUMsQ0FBQzVGLFdBQVcsQ0FBQyxDQUFDO1VBQzNCNEYsWUFBWSxDQUFDOUYsT0FBTyxDQUFDO1FBQ3pCLENBQUMsTUFBTTtVQUNIOEYsWUFBWSxDQUFDN0YsYUFBYSxDQUFDO1VBQzNCNkYsWUFBWSxDQUFDLENBQUM1RixXQUFXLENBQUMsQ0FBQztVQUMzQjRGLFlBQVksQ0FBQzlGLE9BQU8sQ0FBQztRQUN6QjtRQUNBMkIsVUFBVSxFQUFFO01BQ2hCLENBQUMsQ0FBQztJQUNOLENBQUMsRUFBRWlFLFFBQVEsQ0FBQztFQUNoQjtFQUVBLFNBQVNqRCxXQUFXLENBQUNILEdBQUcsRUFBRTtJQUN0QixJQUFNeUQsVUFBVSxHQUFHO01BQ2ZDLE1BQU0sRUFBRXBELE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJO01BQzVCZ0QsTUFBTSxFQUFFbkUsTUFBTTtNQUNkc0UsU0FBUyxFQUFFLENBQUEzRCxHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRUUsS0FBSyxNQUFJRixHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRTRELElBQUksTUFBSTVELEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFNkQsT0FBTyxLQUFJLGVBQWU7TUFDckVDLElBQUksRUFBRSxDQUFBOUQsR0FBRyxhQUFIQSxHQUFHLHVCQUFIQSxHQUFHLENBQUUrRCxJQUFJLEtBQUksY0FBYztNQUNqQ0MsS0FBSyxFQUFFLENBQUFoRSxHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRWdFLEtBQUssS0FBSTtJQUN6QixDQUFDO0lBRUR2RSxLQUFLLENBQUMsMENBQTBDLEVBQUU7TUFDOUN3RSxNQUFNLEVBQUUsTUFBTTtNQUNkdkUsT0FBTyxFQUFFO1FBQ0wsY0FBYyxFQUFFO01BQ3BCLENBQUM7TUFDRGtCLElBQUksRUFBRXNELElBQUksQ0FBQ0MsU0FBUyxDQUFDVixVQUFVO0lBQ25DLENBQUMsQ0FBQyxTQUFNLENBQUN4RCxPQUFPLENBQUNtRSxJQUFJLENBQUM7RUFDMUI7RUFFQSxTQUFTMUIsU0FBUyxHQUFHO0lBQ2pCLElBQU0yQixLQUFLLEdBQUd0SCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO0lBQzNELElBQUlxSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxFQUFFO01BQ3ZCLElBQUdsRixjQUFjLEVBQUM7UUFDZGlGLEtBQUssQ0FBQ3BILE9BQU8sQ0FBQyxVQUFBc0gsSUFBSSxFQUFJO1VBQ2xCLElBQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDRSxZQUFZLENBQUMsZ0JBQWdCLENBQUM7VUFDL0NGLElBQUksQ0FBQzFGLFNBQVMsR0FBR0MsUUFBUSxDQUFDMEYsR0FBRyxDQUFDLElBQUksMENBQTBDLEdBQUdBLEdBQUc7VUFDbEYsSUFBSTFGLFFBQVEsQ0FBQzBGLEdBQUcsQ0FBQyxFQUFFO1lBQ2ZELElBQUksQ0FBQ3hGLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztVQUMxQztRQUNKLENBQUMsQ0FBQztNQUNOLENBQUMsTUFBSTtRQUNEa0IsT0FBTyxDQUFDeUUsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3JDO0lBQ0o7SUFDQUMscUJBQXFCLENBQUN0SCxRQUFRLENBQUM7RUFDbkM7RUFFQSxTQUFTc0gscUJBQXFCLENBQUNDLE9BQU8sRUFBRTtJQUNwQyxJQUFJLENBQUNBLE9BQU8sRUFBRTtNQUNWO0lBQ0o7SUFDQSx3QkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLDBCQUFFO01BQTVCLElBQU1DLElBQUk7TUFDWEQsT0FBTyxDQUFDekgsU0FBUyxDQUFDMkQsTUFBTSxDQUFDK0QsSUFBSSxDQUFDO0lBQ2xDO0lBQ0FELE9BQU8sQ0FBQ3pILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDNkIsTUFBTSxDQUFDO0VBQ2pDO0VBRUEsU0FBU2tDLFdBQVcsQ0FBQzJELEtBQUssRUFBRTtJQUN4QnhGLE9BQU8sV0FBVyxDQUNiSyxJQUFJLENBQUMsVUFBQW9GLElBQUksRUFBSTtNQUNWQyxrQkFBa0IsQ0FBQ0QsSUFBSSxFQUFFMUYsTUFBTSxDQUFDO0lBQ3BDLENBQUMsQ0FBQztFQUNWO0VBRUEsU0FBUzJGLGtCQUFrQixDQUFDRixLQUFLLEVBQUVHLGFBQWEsRUFBRTtJQUM5Q3JILFlBQVksQ0FBQ2lCLFNBQVMsR0FBRyxFQUFFO0lBQzNCZixpQkFBaUIsQ0FBQ2UsU0FBUyxHQUFHLEVBQUU7SUFFaEMsSUFBSSxFQUFDaUcsS0FBSyxhQUFMQSxLQUFLLGVBQUxBLEtBQUssQ0FBRVIsTUFBTSxHQUFFO0lBRXBCUSxLQUFLLENBQUM3SCxPQUFPLENBQUMsVUFBQWlJLElBQUksRUFBSTtNQUNsQixJQUFNQyxhQUFhLEdBQUdELElBQUksQ0FBQzFCLE1BQU0sS0FBS3lCLGFBQWE7TUFDbkQsSUFBTUcsV0FBVyxHQUFHRCxhQUFhLEdBQUdySCxpQkFBaUIsR0FBR0YsWUFBWTtNQUNwRXlILFdBQVcsQ0FBQ0gsSUFBSSxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsQ0FBQztJQUNqRCxDQUFDLENBQUM7RUFDTjtFQUVBLFNBQVNDLFdBQVcsQ0FBQ0gsSUFBSSxFQUFFQyxhQUFhLEVBQUVHLEtBQUssRUFBRTtJQUM3QyxJQUFNQyxHQUFHLEdBQUd4SSxRQUFRLENBQUN5SSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3pDRCxHQUFHLENBQUNwSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFFL0IsSUFBSStILGFBQWEsRUFBRTtNQUNmSSxHQUFHLENBQUNwSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFFeEJxSSxvQkFBb0IsQ0FBQ1AsSUFBSSxDQUFDMUIsTUFBTSxDQUFDO0lBQ3JDO0lBRUEsSUFBTWtDLFVBQVUsR0FBR0MsTUFBTSxDQUFDVCxJQUFJLENBQUNVLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FDckM5RyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FDMUJvRyxJQUFJLENBQUNVLElBQUk7SUFFZixJQUFNQyxhQUFhLEdBQUdWLGFBQWEsYUFDMUJELElBQUksQ0FBQzFCLE1BQU0sMkRBQ2RzQyxVQUFVLENBQUNaLElBQUksQ0FBQzFCLE1BQU0sQ0FBQztJQUU3QitCLEdBQUcsQ0FBQzFHLFNBQVMsc0RBQ2tCZ0gsYUFBYSw0REFDYkUsZ0JBQWdCLENBQUNiLElBQUksQ0FBQ2MsWUFBWSxDQUFDLDREQUNuQ04sVUFBVSw2QkFDdkMsT0FBT1IsSUFBSSxDQUFDZSxNQUFNLEtBQUssU0FBUyw2REFDb0JmLElBQUksQ0FBQ2UsTUFBTSxHQUFHLE9BQU8sR0FBRyxXQUFXLGtFQUN6QyxlQUMvQztJQUVEWCxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRVksV0FBVyxDQUFDWCxHQUFHLENBQUM7RUFDM0I7RUFFQSxTQUFTTyxVQUFVLENBQUN6RyxNQUFNLEVBQUU7SUFDeEIsT0FBTyxJQUFJLEdBQUdBLE1BQU0sQ0FBQzhHLFFBQVEsRUFBRSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQzVDO0VBRUEsU0FBU1gsb0JBQW9CLENBQUNqQyxNQUFNLEVBQUU7SUFDbENsRSxPQUFPLG9CQUFhRCxNQUFNLEdBQUk7TUFDMUI0RSxNQUFNLEVBQUU7SUFDWixDQUFDLENBQUMsQ0FBQ3RFLElBQUksQ0FBQyxVQUFBb0YsSUFBSSxFQUFJO01BQ1I7TUFDQSxJQUFJaEgsUUFBUSxFQUFFO1FBQ1YsSUFBSWdILElBQUksQ0FBQ2EsSUFBSSxLQUFLLEVBQUUsRUFBRTtVQUNsQjFILElBQUksQ0FBQ2YsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1VBQzFCZSxNQUFNLENBQUNoQixTQUFTLENBQUMyRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ25DLENBQUMsTUFBTTtVQUNIM0MsTUFBTSxDQUFDaEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1VBQzVCYyxJQUFJLENBQUNmLFNBQVMsQ0FBQzJELE1BQU0sQ0FBQyxNQUFNLENBQUM7VUFDN0IvQyxRQUFRLENBQUNjLFNBQVMsYUFBTWtHLElBQUksQ0FBQ2EsSUFBSSxDQUFFO1FBQ3ZDO01BQ0o7TUFFQSxJQUFNUyxlQUFlLEdBQUd0SixRQUFRLENBQUNPLGFBQWEsQ0FBQyxtQ0FBbUMsQ0FBQztNQUNuRixJQUFNZ0osYUFBYSxHQUFHdkosUUFBUSxDQUFDTyxhQUFhLENBQUMsaUNBQWlDLENBQUM7TUFFL0UsSUFBTWlKLFdBQVcsR0FBRyxDQUFDLENBQUN4QixJQUFJLENBQUN5QixZQUFZO01BQ3ZDdkcsT0FBTyxDQUFDeUUsR0FBRyxDQUFDNkIsV0FBVyxHQUFHLHFCQUFxQixDQUFDO01BRWhERCxhQUFhLGFBQWJBLGFBQWEsdUJBQWJBLGFBQWEsQ0FBRW5KLFNBQVMsQ0FBQ3NCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzhILFdBQVcsQ0FBQztNQUNyREYsZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUVsSixTQUFTLENBQUNzQixNQUFNLENBQUMsTUFBTSxFQUFFOEgsV0FBVyxDQUFDO0lBQzlELENBQUMsQ0FBQyxTQUFNLENBQUMsVUFBQXJHLEtBQUssRUFBSTtNQUNkRCxPQUFPLENBQUNDLEtBQUssQ0FBQyxRQUFRLEVBQUVBLEtBQUssQ0FBQztJQUNsQyxDQUFDLENBQUM7RUFDTjtFQUVBLFNBQVM2RixnQkFBZ0IsQ0FBQ1UsVUFBVSxFQUFFO0lBQ2xDLElBQU1DLElBQUksR0FBRyxJQUFJOUosSUFBSSxDQUFDNkosVUFBVSxDQUFDO0lBQ2pDLElBQU1FLEdBQUcsR0FBR0QsSUFBSSxDQUFDRSxPQUFPLEVBQUUsQ0FBQ1QsUUFBUSxFQUFFLENBQUNVLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ3RELElBQU1DLEtBQUssR0FBRyxDQUFDSixJQUFJLENBQUNLLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRVosUUFBUSxFQUFFLENBQUNVLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQy9ELElBQU1HLElBQUksR0FBR04sSUFBSSxDQUFDTyxXQUFXLEVBQUU7SUFDL0IsSUFBTUMsS0FBSyxHQUFHUixJQUFJLENBQUNTLFFBQVEsRUFBRSxDQUFDaEIsUUFBUSxFQUFFLENBQUNVLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ3pELElBQU1PLE9BQU8sR0FBR1YsSUFBSSxDQUFDVyxVQUFVLEVBQUUsQ0FBQ2xCLFFBQVEsRUFBRSxDQUFDVSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUU3RCxpQkFBVUYsR0FBRyxjQUFJRyxLQUFLLGNBQUlFLElBQUksY0FBSUUsS0FBSyxjQUFJRSxPQUFPO0VBQ3REO0VBRUEzRSxnQkFBZ0IsRUFBRSxDQUFDOUMsSUFBSSxDQUFDb0IsSUFBSSxDQUFDOztFQUc3QjtFQUNBaEUsUUFBUSxDQUFDcUUsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtJQUN0RCxJQUFNa0csTUFBTSxHQUFHdkssUUFBUSxDQUFDTyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDMUQsSUFBTWlLLElBQUksR0FBR3hLLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLHNCQUFzQixDQUFDO0lBRTNELElBQU1rSyxXQUFXLEdBQUdsSCxNQUFNLENBQUNtSCxVQUFVO0lBQ3JDLElBQU1DLGNBQWMsR0FBR0YsV0FBVyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztJQUVyRCxJQUFNRyxRQUFRLEdBQUcsSUFBSUMsb0JBQW9CLENBQUMsVUFBQ0MsT0FBTyxFQUFFRixRQUFRLEVBQUs7TUFDN0RFLE9BQU8sQ0FBQzVLLE9BQU8sQ0FBQyxVQUFBNkssS0FBSyxFQUFJO1FBQ3JCLElBQUlBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO1VBQ3RCUixJQUFJLENBQUNwSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7VUFDN0J1SyxRQUFRLENBQUNLLFNBQVMsQ0FBQ0YsS0FBSyxDQUFDUixNQUFNLENBQUM7UUFDcEM7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLEVBQUU7TUFDQ1csU0FBUyxFQUFFUDtJQUNmLENBQUMsQ0FBQztJQUVGLElBQUlKLE1BQU0sRUFBRTtNQUNSSyxRQUFRLENBQUMxRSxPQUFPLENBQUNxRSxNQUFNLENBQUM7SUFDNUI7RUFDSixDQUFDLENBQUM7O0VBRUY7RUFDQSxJQUFNWSxRQUFRLEdBQUduTCxRQUFRLENBQUNPLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztFQUMxRCxJQUFNNkssT0FBTyxHQUFHcEwsUUFBUSxDQUFDTyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDeEQsSUFBTThLLFFBQVEsR0FBR3JMLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLGtCQUFrQixDQUFDO0VBQzNELElBQU0rSyxRQUFRLEdBQUd0TCxRQUFRLENBQUNPLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztFQUUzRDBCLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQzs7RUFFaEIsU0FBU3NKLGFBQWEsR0FBRztJQUNyQixJQUFJdEosVUFBVSxLQUFLLEVBQUUsRUFBRTtNQUNuQm9KLFFBQVEsQ0FBQ2pMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUM5QmlMLFFBQVEsQ0FBQ2xMLFNBQVMsQ0FBQzJELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQyxNQUFNO01BQ0hzSCxRQUFRLENBQUNHLFdBQVcsR0FBR3ZKLFVBQVU7TUFDakNvSixRQUFRLENBQUNqTCxTQUFTLENBQUMyRCxNQUFNLENBQUMsTUFBTSxDQUFDO01BQ2pDdUgsUUFBUSxDQUFDbEwsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2xDO0VBQ0o7RUFFQStLLE9BQU8sQ0FBQy9HLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3BDcEMsVUFBVSxHQUFHQSxVQUFVLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBR0EsVUFBVSxHQUFFLENBQUM7SUFDbERzSixhQUFhLEVBQUU7RUFDbkIsQ0FBQyxDQUFDO0VBRUZKLFFBQVEsQ0FBQzlHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3JDcEMsVUFBVSxHQUFHQSxVQUFVLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBR0EsVUFBVSxHQUFFLENBQUM7SUFDbERzSixhQUFhLEVBQUU7RUFDbkIsQ0FBQyxDQUFDO0VBRUZBLGFBQWEsRUFBRTs7RUFFZjtFQUNBdkwsUUFBUSxDQUFDcUUsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtJQUN0RCxJQUFNb0gsU0FBUyxHQUFHekwsUUFBUSxDQUFDTyxhQUFhLENBQUMsa0JBQWtCLENBQUM7SUFDNUQsSUFBTW1MLFdBQVcsR0FBRzFMLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBRS9ELElBQUlrTCxTQUFTLElBQUlDLFdBQVcsRUFBRTtNQUMxQkQsU0FBUyxDQUFDcEgsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVDLENBQUMsRUFBRTtRQUM3Q0EsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7UUFDbEJtSCxXQUFXLENBQUNDLGNBQWMsQ0FBQztVQUN2QkMsUUFBUSxFQUFFLFFBQVE7VUFDbEJDLEtBQUssRUFBRTtRQUNYLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQyxDQUFDO0VBRUYsSUFBSUMsbUJBQW1CO0VBQ3ZCLFNBQVNwSCxRQUFRLENBQUNxSCxHQUFHLEVBQUU7SUFDWCxJQUFJLENBQUN6SixNQUFNLEVBQUU7TUFDVDtJQUNKO0lBRUEsSUFBSXdKLG1CQUFtQixFQUFFO01BQ3JCO0lBQ0o7SUFDQUEsbUJBQW1CLEdBQUcsSUFBSTtJQUMxQnZKLE9BQU8sQ0FBQyxNQUFNLEVBQUU7TUFDWjJFLE1BQU0sRUFBRSxNQUFNO01BQ2RyRCxJQUFJLEVBQUVzRCxJQUFJLENBQUNDLFNBQVMsQ0FBQztRQUNqQlgsTUFBTSxFQUFFbkUsTUFBTTtRQUNkdUcsSUFBSSxFQUFFNUc7TUFDVixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUNXLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUk7TUFDWGlKLG1CQUFtQixHQUFHLEtBQUs7TUFDM0I7TUFDQSxJQUFNRSxNQUFNLEdBQUdELEdBQUcsQ0FBQ3hMLGFBQWEsQ0FBQyxVQUFVLENBQUM7TUFDNUNnQixhQUFhLENBQUMsQ0FBQ3lLLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQztNQUNqQ3JLLGdCQUFnQixDQUFDLENBQUNxSyxNQUFNLENBQUMsRUFBRSxRQUFRLENBQUM7TUFDcEMxRixVQUFVLENBQUMsWUFBSztRQUNaM0UsZ0JBQWdCLENBQUMsQ0FBQ3FLLE1BQU0sQ0FBQyxFQUFFLGNBQWMsQ0FBQztRQUMxQ3pLLGFBQWEsQ0FBQyxDQUFDeUssTUFBTSxDQUFDLEVBQUUsUUFBUSxDQUFDO01BQ3JDLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDUDFGLFVBQVUsQ0FBQyxZQUFJO1FBQ1gzRSxnQkFBZ0IsQ0FBQyxDQUFDcUssTUFBTSxDQUFDLEVBQUUsU0FBUyxDQUFDO1FBQ3JDdEQsb0JBQW9CLENBQUNwRyxNQUFNLENBQUM7UUFDNUI4QixXQUFXLEVBQUU7TUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNaLENBQUMsQ0FBQztFQUNkO0FBRUosQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9jaGFtcGlvbl9jaGFsbGVuZ2VfdWEnXG5cbiAgICBjb25zdCBwcm9tb0VuZERhdGUgPSBuZXcgRGF0ZShcIjIwMjUtMDctMTlUMjM6Mjk6NTlcIik7XG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrQW5kTG9ja1Byb21vKGN1cnJlbnREYXRlLCBwcm9tb0VuZERhdGUpIHtcbiAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHByb21vRW5kRGF0ZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0biwgLnByZWRpY3RfX21pbnVzLCAucHJlZGljdF9fcGx1cycpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICAgIC8vIGN1cnJlbnREYXRlID0gIG5ldyBEYXRlKFwiMjAyNi0wNy0xOVQyMzoyOTo1OVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBsYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheS1idG4nKSxcbiAgICAgICAgc2Nyb2xsUGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY3JvbGwtcGFydC1idG4nKSxcbiAgICAgICAgcGxhY2VCZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpLFxuICAgICAgICB1bmF1dGhUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZV9fYm9keS1zY3JvbGwnKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVPdGhlcicpLFxuICAgICAgICBzY29yZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19sZWZ0LWNvdW50ZXInKSxcbiAgICAgICAgcHJlZGljdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcHJlZGljdEp1ZCcpLFxuICAgICAgICBjb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jb25maXJtZWQnKSxcbiAgICAgICAgbGFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19sZWZ0LWxhc3QubnVtYmVyJyksXG4gICAgICAgIGp1ZGdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19sZWZ0LWxhc3QuanVkZ2VzJyk7XG5cblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgbGV0IGN1cnJlbnRCZXQ7IFxuICAgIFxuICAgIGxldCBsb2NhbGUgPSBcInVrXCJcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuXG4gICAgbGV0IHVzZXJJZCA9IG51bGw7XG5cblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICByZW5kZXJVc2VycygpO1xuICAgICAgICAgICAgY2hlY2tBbmRMb2NrUHJvbW8oY3VycmVudERhdGUsIHByb21vRW5kRGF0ZSksXG4gICAgICAgICAgICBwbGFjZUJldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50QmV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCZXQgPSBuZXcgQmV0KHVzZXJJZCwgbWF0Y2hOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBsYWNlQmV0KHBsYWNlQmV0QnRuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW1waW9uLWNoYWxsZW5nZS11c3lrXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRUaW1lID0gMjAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd0VsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBoaWRlRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgICAvLyBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICBwbGFjZUJldEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHNjcm9sbFBhcnRCdG4pO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwbGF5QnRuKTtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHVuYXV0aFRhYmxlLmNsYXNzTGlzdC5hZGQoXCJ1bmF1dGhcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhpZGVFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgIHVuYXV0aFRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmF1dGhcIilcblxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhzY3JvbGxQYXJ0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKFtwbGFjZUJldEJ0bl0pO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocGxheUJ0bik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHNjcm9sbFBhcnRCdG4pO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMoW3BsYWNlQmV0QnRuXSk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwbGF5QnRuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGxvYWRUaW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnModXNlcnMpIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzL2ApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUoZGF0YSwgdXNlcklkKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCkge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRVc2VyID0gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQ7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRUYWJsZSA9IGlzQ3VycmVudFVzZXIgPyByZXN1bHRzVGFibGVPdGhlciA6IHJlc3VsdHNUYWJsZTtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhcmdldFRhYmxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcblxuICAgICAgICAgICAgdXBkYXRlTGFzdFByZWRpY3Rpb24odXNlci51c2VyaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlZGljdGlvbiA9IE51bWJlcih1c2VyLnRlYW0pID09PSAxM1xuICAgICAgICAgICAgPyBpMThuRGF0YVtcImp1ZGdlc0RlY2lzaW9uXCJdXG4gICAgICAgICAgICA6IHVzZXIudGVhbTtcblxuICAgICAgICBjb25zdCB1c2VySWREaXNwbGF5ID0gaXNDdXJyZW50VXNlclxuICAgICAgICAgICAgPyBgJHt1c2VyLnVzZXJpZH0gPHNwYW4gY2xhc3M9XCJ5b3VcIiBkYXRhLXRyYW5zbGF0ZT1cInlvdVwiPjwvc3Bhbj5gXG4gICAgICAgICAgICA6IG1hc2tVc2VySWQodXNlci51c2VyaWQpO1xuXG4gICAgICAgIHJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4ke3VzZXJJZERpc3BsYXl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4ke2Zvcm1hdERhdGVTdHJpbmcodXNlci5sYXN0Rm9yZWNhc3QpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtwcmVkaWN0aW9ufTwvZGl2PlxuICAgICAgICAke3R5cGVvZiB1c2VyLndpbm5lciA9PT0gJ2Jvb2xlYW4nXG4gICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCIgZGF0YS10cmFuc2xhdGU9XCIke3VzZXIud2lubmVyID8gJ3ByaXplJyA6ICdub1dpbm5lcnMnfVwiPioqKioqPC9kaXY+YFxuICAgICAgICAgICAgOiBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPioqKioqPC9kaXY+YH1cbiAgICAgICAgYDtcblxuICAgICAgICB0YWJsZT8uYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gJyoqJyArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxhc3RQcmVkaWN0aW9uKHVzZXJpZCkge1xuICAgICAgICByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgc2NvcmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fbGVmdC1jb3VudGVyJyk7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3JlRGl2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRlYW0gPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAganVkZ2VzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAganVkZ2VzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlRGl2LmlubmVySFRNTCA9IGAke2RhdGEudGVhbX1gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdW5jb25maXJtZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sZWZ0LXJlc3VsdC51bmNvbmZpcm1lZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sZWZ0LXJlc3VsdC5jb25maXJtZWRcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc0NvbmZpcm1lZCA9ICEhZGF0YS5iZXRDb25maXJtZWQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXNDb25maXJtZWQgKyBcIiDRhtC1INGB0YLQvtGB0L7QstC90L4g0YHRgtCw0LLQutC4XCIpXG5cbiAgICAgICAgICAgICAgICBjb25maXJtZWRJdGVtPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiLCAhaXNDb25maXJtZWQpO1xuICAgICAgICAgICAgICAgIHVuY29uZmlybWVkSXRlbT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIiwgaXNDb25maXJtZWQpO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cbiAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0uJHt5ZWFyfSAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKCkudGhlbihpbml0KVxuXG5cbiAgICAvLyBhbmltIGJlbHRcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGVudCcpO1xuICAgICAgICBjb25zdCBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3JpZ2h0LWJlbHQnKTtcblxuICAgICAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb25zdCB0aHJlc2hvbGRWYWx1ZSA9IHNjcmVlbldpZHRoIDw9IDY0MCA/IDAuMyA6IDAuOTtcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlbHQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdGhyZXNob2xkOiB0aHJlc2hvbGRWYWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHByZWRpY3QgKy1cbiAgICBjb25zdCBtaW51c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19taW51cycpO1xuICAgIGNvbnN0IHBsdXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fcGx1cycpO1xuICAgIGNvbnN0IG51bWJlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX251bWJlcicpO1xuICAgIGNvbnN0IGp1ZGdlc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2p1ZGdlcycpO1xuXG4gICAgY3VycmVudEJldCA9IDE7IC8vIDEtMTIgKyAxMyAo0YHRg9C00LTRlilcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICAgIGlmIChjdXJyZW50QmV0ID09PSAxMykge1xuICAgICAgICAgICAgbnVtYmVyRWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAganVkZ2VzRWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbnVtYmVyRWwudGV4dENvbnRlbnQgPSBjdXJyZW50QmV0O1xuICAgICAgICAgICAgbnVtYmVyRWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAganVkZ2VzRWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGx1c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3VycmVudEJldCA9IGN1cnJlbnRCZXQgPT09IDEzID8gMSA6IGN1cnJlbnRCZXQrIDE7XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcblxuICAgIG1pbnVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjdXJyZW50QmV0ID0gY3VycmVudEJldCA9PT0gMSA/IDEzIDogY3VycmVudEJldC0gMTtcbiAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuICAgIH0pO1xuXG4gICAgdXBkYXRlRGlzcGxheSgpO1xuXG4gICAgLy8gc2Nyb2xsIHRvXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC1wYXJ0LWJ0bicpO1xuICAgICAgICBjb25zdCB0YXJnZXRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19jb250ZW50Jyk7XG5cbiAgICAgICAgaWYgKHNjcm9sbEJ0biAmJiB0YXJnZXRCbG9jaykge1xuICAgICAgICAgICAgc2Nyb2xsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0QmxvY2suc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrOiAnY2VudGVyJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBpc1JlcXVlc3RJblByb2dyZXNzO1xuICAgIGZ1bmN0aW9uIHBsYWNlQmV0KGJ0bikge1xuICAgICAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNSZXF1ZXN0SW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXNSZXF1ZXN0SW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVxdWVzdCgnL2JldCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogY3VycmVudEJldCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWVzdEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyVXNlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuVHh0ID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5idG4tdHh0JylcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhbYnRuVHh0XSwgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhbYnRuVHh0XSwgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMoW2J0blR4dF0sIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKFtidG5UeHRdLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMoW2J0blR4dF0sIFwicGFydEJ0blwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGFzdFByZWRpY3Rpb24odXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKClcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgICAgICB9KVxuICAgIH1cblxufSkoKTtcbiJdfQ==
