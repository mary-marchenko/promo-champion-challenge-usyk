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
    tableBody = document.querySelector(".table__body"),
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
    judges = document.querySelector('.predict__left-last.judges'),
    confirmed = document.querySelector('.predict__left-result.confirmed'),
    unconfirmed = document.querySelector('.predict__left-result.unconfirmed');
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

  // let locale = "uk"
  var locale = sessionStorage.getItem("locale") || "uk";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  var userId = Number(sessionStorage.getItem("userId")) || null;
  // let userId = null;

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
    console.log(isCurrentUser);
    if (isCurrentUser) {
      row.classList.add('you');
      updateLastPrediction(user.userid);
      console.log(user.userid);
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
      console.log("updateLastPrediction work");
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

  // TEST
  document.querySelector('.dark-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark');
  });
  var lngBtn = document.querySelector(".lng-btn");
  var authBtn = document.querySelector(".auth-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "00000004");
    }
    window.location.reload();
  });
  document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.btn-predictNum');
    if (button && scoreDiv) {
      button.addEventListener('click', function () {
        scoreDiv.textContent = '1';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    predictBtn.addEventListener('click', function () {
      last.classList.toggle('hide');
      judges.classList.toggle('hide');
    });
    confirmBtn.addEventListener('click', function () {
      confirmed.classList.toggle('hide');
      unconfirmed.classList.toggle('hide');
    });
  });
  document.querySelector('.btn-end').addEventListener('click', function () {
    document.querySelectorAll('.btn, .predict__minus, .predict__plus').forEach(function (el) {
      el.classList.toggle('_lock');
    });
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwicHJvbW9FbmREYXRlIiwiRGF0ZSIsImNoZWNrQW5kTG9ja1Byb21vIiwiY3VycmVudERhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJtYWluUGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0YWJsZUJvZHkiLCJ1bmF1dGhNc2dzIiwicGxheUJ0biIsInNjcm9sbFBhcnRCdG4iLCJwbGFjZUJldEJ0biIsImxvYWRlciIsInJlc3VsdHNUYWJsZSIsInVuYXV0aFRhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJzY29yZURpdiIsInByZWRpY3RCdG4iLCJjb25maXJtQnRuIiwibGFzdCIsImp1ZGdlcyIsImNvbmZpcm1lZCIsInVuY29uZmlybWVkIiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjdXJyZW50QmV0IiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJOdW1iZXIiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJyZW5kZXJVc2VycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJCZXQiLCJtYXRjaE51bWJlciIsInBsYWNlQmV0Iiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwidGFyZ2V0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJsb2FkVGltZSIsInNldFRpbWVvdXQiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJ1c2VyaWQiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInVzZXJzIiwiZGF0YSIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJ1c2VyIiwiaXNDdXJyZW50VXNlciIsInRhcmdldFRhYmxlIiwiZGlzcGxheVVzZXIiLCJ0YWJsZSIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1cGRhdGVMYXN0UHJlZGljdGlvbiIsInByZWRpY3Rpb24iLCJ0ZWFtIiwidXNlcklkRGlzcGxheSIsIm1hc2tVc2VySWQiLCJmb3JtYXREYXRlU3RyaW5nIiwibGFzdEZvcmVjYXN0Iiwid2lubmVyIiwiYXBwZW5kQ2hpbGQiLCJ0b1N0cmluZyIsInNsaWNlIiwidW5jb25maXJtZWRJdGVtIiwiY29uZmlybWVkSXRlbSIsImlzQ29uZmlybWVkIiwiYmV0Q29uZmlybWVkIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJkYXkiLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwidGFyZ2V0IiwiYmVsdCIsInNjcmVlbldpZHRoIiwiaW5uZXJXaWR0aCIsInRocmVzaG9sZFZhbHVlIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidW5vYnNlcnZlIiwidGhyZXNob2xkIiwibWludXNCdG4iLCJwbHVzQnRuIiwibnVtYmVyRWwiLCJqdWRnZXNFbCIsInVwZGF0ZURpc3BsYXkiLCJ0ZXh0Q29udGVudCIsInNjcm9sbEJ0biIsInRhcmdldEJsb2NrIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaXNSZXF1ZXN0SW5Qcm9ncmVzcyIsImJ0biIsImJ0blR4dCIsImxuZ0J0biIsImF1dGhCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFFVCxJQUFNQSxNQUFNLEdBQUcsZ0RBQWdEO0VBRS9ELElBQU1DLFlBQVksR0FBRyxJQUFJQyxJQUFJLENBQUMscUJBQXFCLENBQUM7RUFHcEQsU0FBU0MsaUJBQWlCLENBQUNDLFdBQVcsRUFBRUgsWUFBWSxFQUFFO0lBQ2xELElBQUlHLFdBQVcsSUFB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U0FBUyxDQUFDeUIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNuQyxDQUFDLENBQUM7SUFFRlYsVUFBVSxDQUFDd0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7TUFDN0NyRCxTQUFTLENBQUNsQixTQUFTLENBQUN5QixNQUFNLENBQUMsTUFBTSxDQUFDO01BQ2xDTixXQUFXLENBQUNuQixTQUFTLENBQUN5QixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3hDLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVGN0IsUUFBUSxDQUFDTyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUNvRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUNyRTNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsdUNBQXVDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVVDLEVBQUUsRUFBRTtNQUNyRkEsRUFBRSxDQUFDQyxTQUFTLENBQUN5QixNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUVOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfY2hhbXBpb25fY2hhbGxlbmdlX3VhJ1xuXG4gICAgY29uc3QgcHJvbW9FbmREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA3LTE5VDIzOjI5OjU5XCIpO1xuXG5cbiAgICBmdW5jdGlvbiBjaGVja0FuZExvY2tQcm9tbyhjdXJyZW50RGF0ZSwgcHJvbW9FbmREYXRlKSB7XG4gICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBwcm9tb0VuZERhdGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4sIC5wcmVkaWN0X19taW51cywgLnByZWRpY3RfX3BsdXMnKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICAvLyBjdXJyZW50RGF0ZSA9ICBuZXcgRGF0ZShcIjIwMjYtMDctMTlUMjM6Mjk6NTlcIiksXG4gICAgICAgIHRhYmxlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2JvZHlcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXktYnRuJyksXG4gICAgICAgIHNjcm9sbFBhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Nyb2xsLXBhcnQtYnRuJyksXG4gICAgICAgIHBsYWNlQmV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1qb2luJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKSxcbiAgICAgICAgdW5hdXRoVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfX2JvZHktc2Nyb2xsJyksXG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlT3RoZXInKSxcbiAgICAgICAgc2NvcmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fbGVmdC1jb3VudGVyJyksXG4gICAgICAgIHByZWRpY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXByZWRpY3RKdWQnKSxcbiAgICAgICAgY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY29uZmlybWVkJyksXG4gICAgICAgIGxhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fbGVmdC1sYXN0Lm51bWJlcicpLFxuICAgICAgICBqdWRnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fbGVmdC1sYXN0Lmp1ZGdlcycpLFxuICAgICAgICBjb25maXJtZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fbGVmdC1yZXN1bHQuY29uZmlybWVkJyksXG4gICAgICAgIHVuY29uZmlybWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2xlZnQtcmVzdWx0LnVuY29uZmlybWVkJyk7XG5cblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgbGV0IGN1cnJlbnRCZXQ7IFxuICAgIFxuICAgIC8vIGxldCBsb2NhbGUgPSBcInVrXCJcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcInVrXCJcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuXG4gICAgbGV0IHVzZXJJZCA9ICBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgfHwgbnVsbFxuICAgIC8vIGxldCB1c2VySWQgPSBudWxsO1xuXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgcmVuZGVyVXNlcnMoKTtcbiAgICAgICAgICAgIGNoZWNrQW5kTG9ja1Byb21vKGN1cnJlbnREYXRlLCBwcm9tb0VuZERhdGUpLFxuICAgICAgICAgICAgcGxhY2VCZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghY3VycmVudEJldCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QmV0ID0gbmV3IEJldCh1c2VySWQsIG1hdGNoTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwbGFjZUJldChwbGFjZUJldEJ0bik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFtcGlvbi1jaGFsbGVuZ2UtdXN5a1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zdCBsb2FkVGltZSA9IDIwMDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgY29uc3QgaGlkZUVsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG5cbiAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgLy8gaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgcGxhY2VCZXRCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhzY3JvbGxQYXJ0QnRuKTtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocGxheUJ0bik7XG4gICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICB1bmF1dGhUYWJsZS5jbGFzc0xpc3QuYWRkKFwidW5hdXRoXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICB1bmF1dGhUYWJsZS5jbGFzc0xpc3QucmVtb3ZlKFwidW5hdXRoXCIpXG5cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMoc2Nyb2xsUGFydEJ0bik7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhbcGxhY2VCZXRCdG5dKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHBsYXlCdG4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhzY3JvbGxQYXJ0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKFtwbGFjZUJldEJ0bl0pO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocGxheUJ0bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBsb2FkVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHVzZXJzKSB7XG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy9gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKGRhdGEsIHVzZXJJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQpIHtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50VXNlciA9IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0VGFibGUgPSBpc0N1cnJlbnRVc2VyID8gcmVzdWx0c1RhYmxlT3RoZXIgOiByZXN1bHRzVGFibGU7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YXJnZXRUYWJsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuICAgICAgICBjb25zb2xlLmxvZyhpc0N1cnJlbnRVc2VyKVxuXG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG5cbiAgICAgICAgICAgIHVwZGF0ZUxhc3RQcmVkaWN0aW9uKHVzZXIudXNlcmlkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIudXNlcmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZWRpY3Rpb24gPSBOdW1iZXIodXNlci50ZWFtKSA9PT0gMTNcbiAgICAgICAgICAgID8gaTE4bkRhdGFbXCJqdWRnZXNEZWNpc2lvblwiXVxuICAgICAgICAgICAgOiB1c2VyLnRlYW07XG5cbiAgICAgICAgY29uc3QgdXNlcklkRGlzcGxheSA9IGlzQ3VycmVudFVzZXJcbiAgICAgICAgICAgID8gYCR7dXNlci51c2VyaWR9IDxzcGFuIGNsYXNzPVwieW91XCIgZGF0YS10cmFuc2xhdGU9XCJ5b3VcIj48L3NwYW4+YFxuICAgICAgICAgICAgOiBtYXNrVXNlcklkKHVzZXIudXNlcmlkKTtcblxuICAgICAgICByb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHt1c2VySWREaXNwbGF5fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtmb3JtYXREYXRlU3RyaW5nKHVzZXIubGFzdEZvcmVjYXN0KX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7cHJlZGljdGlvbn08L2Rpdj5cbiAgICAgICAgJHt0eXBlb2YgdXNlci53aW5uZXIgPT09ICdib29sZWFuJ1xuICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiIGRhdGEtdHJhbnNsYXRlPVwiJHt1c2VyLndpbm5lciA/ICdwcml6ZScgOiAnbm9XaW5uZXJzJ31cIj4qKioqKjwvZGl2PmBcbiAgICAgICAgICAgIDogYDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4qKioqKjwvZGl2PmB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGFibGU/LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuICcqKicgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXN0UHJlZGljdGlvbih1c2VyaWQpIHtcbiAgICAgICAgcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHNjb3JlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2xlZnQtY291bnRlcicpO1xuICAgICAgICAgICAgICAgIGlmIChzY29yZURpdikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50ZWFtID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1ZGdlcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1ZGdlcy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZURpdi5pbm5lckhUTUwgPSBgJHtkYXRhLnRlYW19YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlTGFzdFByZWRpY3Rpb24gd29ya1wiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVuY29uZmlybWVkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGVmdC1yZXN1bHQudW5jb25maXJtZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlybWVkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGVmdC1yZXN1bHQuY29uZmlybWVkXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaXNDb25maXJtZWQgPSAhIWRhdGEuYmV0Q29uZmlybWVkO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlzQ29uZmlybWVkICsgXCIg0YbQtSDRgdGC0L7RgdC+0LLQvdC+INGB0YLQsNCy0LrQuFwiKVxuXG4gICAgICAgICAgICAgICAgY29uZmlybWVkSXRlbT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIiwgIWlzQ29uZmlybWVkKTtcbiAgICAgICAgICAgICAgICB1bmNvbmZpcm1lZEl0ZW0/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIGlzQ29uZmlybWVkKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gICAgICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdClcblxuXG4gICAgLy8gYW5pbSBiZWx0XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgYmVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19yaWdodC1iZWx0Jyk7XG5cbiAgICAgICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkVmFsdWUgPSBzY3JlZW5XaWR0aCA8PSA2NDAgPyAwLjMgOiAwLjk7XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBiZWx0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRocmVzaG9sZDogdGhyZXNob2xkVmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBwcmVkaWN0ICstXG4gICAgY29uc3QgbWludXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fbWludXMnKTtcbiAgICBjb25zdCBwbHVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3BsdXMnKTtcbiAgICBjb25zdCBudW1iZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19udW1iZXInKTtcbiAgICBjb25zdCBqdWRnZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19qdWRnZXMnKTtcblxuICAgIGN1cnJlbnRCZXQgPSAxOyAvLyAxLTEyICsgMTMgKNGB0YPQtNC00ZYpXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgICBpZiAoY3VycmVudEJldCA9PT0gMTMpIHtcbiAgICAgICAgICAgIG51bWJlckVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIGp1ZGdlc0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bWJlckVsLnRleHRDb250ZW50ID0gY3VycmVudEJldDtcbiAgICAgICAgICAgIG51bWJlckVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIGp1ZGdlc0VsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRCZXQgPSBjdXJyZW50QmV0ID09PSAxMyA/IDEgOiBjdXJyZW50QmV0KyAxO1xuICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XG4gICAgfSk7XG5cbiAgICBtaW51c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3VycmVudEJldCA9IGN1cnJlbnRCZXQgPT09IDEgPyAxMyA6IGN1cnJlbnRCZXQtIDE7XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZURpc3BsYXkoKTtcblxuICAgIC8vIHNjcm9sbCB0b1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtcGFydC1idG4nKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGVudCcpO1xuXG4gICAgICAgIGlmIChzY3JvbGxCdG4gJiYgdGFyZ2V0QmxvY2spIHtcbiAgICAgICAgICAgIHNjcm9sbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRhcmdldEJsb2NrLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgICAgICBibG9jazogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgaXNSZXF1ZXN0SW5Qcm9ncmVzcztcbiAgICBmdW5jdGlvbiBwbGFjZUJldChidG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzUmVxdWVzdEluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlzUmVxdWVzdEluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlcXVlc3QoJy9iZXQnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IGN1cnJlbnRCZXQsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpc1JlcXVlc3RJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlclVzZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0blR4dCA9IGJ0bi5xdWVyeVNlbGVjdG9yKCcuYnRuLXR4dCcpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMoW2J0blR4dF0sIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMoW2J0blR4dF0sIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKFtidG5UeHRdLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhbYnRuVHh0XSwgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKFtidG5UeHRdLCBcInBhcnRCdG5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxhc3RQcmVkaWN0aW9uKHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycygpXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8vIFRFU1RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCIwMDAwMDAwNFwiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wcmVkaWN0TnVtJyk7XG5cbiAgICAgICAgaWYgKGJ1dHRvbiAmJiBzY29yZURpdikge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNjb3JlRGl2LnRleHRDb250ZW50ID0gJzEnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcHJlZGljdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxhc3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICAgICAganVkZ2VzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbmZpcm1lZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICAgICAgICB1bmNvbmZpcm1lZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1lbmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0biwgLnByZWRpY3RfX21pbnVzLCAucHJlZGljdF9fcGx1cycpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdfbG9jaycpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufSkoKTtcbiJdfQ==
