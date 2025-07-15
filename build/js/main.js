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
      document.querySelectorAll('.scroll-part-btn, .play-btn, .btn-join, .predict__minus, .predict__plus').forEach(function (el) {
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
    judges = document.querySelector('.predict__left-last.judges'),
    unconfirmedItem = document.querySelector(".predict__left-result.unconfirmed"),
    confirmedItem = document.querySelector(".predict__left-result.confirmed"),
    scrollBtn = document.querySelector('.scroll-part-btn'),
    targetBlock = document.querySelector('.predict__content'),
    target = document.querySelector('.predict__content'),
    welcomePrize = document.querySelector('.welcome__prize-center'),
    belt = document.querySelector('.predict__right-belt');
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
              detectWindowsUser();
              checkAndLockPromo(currentDate, promoEndDate), placeBetBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (!currentBet) {
                  currentBet = new Bet(userId, matchNumber);
                }
                placeBet(placeBetBtn);
              });

              // scroll to
              scrollBtn.addEventListener('click', function (e) {
                e.preventDefault();
                targetBlock.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                });
              });

              // anim belt
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
        unconfirmedItem.classList.add("hide");
        confirmedItem.classList.add("hide");
        return Promise.resolve(false);
      }
      hideElements(unauthMsgs);
      // unauthTable.classList.remove(".unauth")

      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          // hideElements(participateBtns);
          showElements(scrollPartBtn);
          showElements([placeBetBtn]);
          showElements(playBtn);
          unauthTable.classList.remove("unauth");
        } else {
          unconfirmedItem.classList.add("hide");
          unauthTable.classList.add("unauth");
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
      unauthTable.classList.remove("unauth");
      var isConfirmed = !!data.betConfirmed;
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

  // predict +-
  var minusBtn = document.querySelector('.predict__minus');
  var plusBtn = document.querySelector('.predict__plus');
  var numberEl = document.querySelector('.predict__number');
  var judgesEl = document.querySelector('.predict__judges');
  currentBet = 1; // 1-12 + 13 (судді)

  function updateDisplay() {
    if (currentBet === 13) {
      numberEl.classList.add('hide');
      judgesEl.classList.remove('_opacity');
    } else {
      numberEl.textContent = currentBet;
      numberEl.classList.remove('hide');
      judgesEl.classList.add('_opacity');
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
  function detectWindowsUser() {
    var userAg = navigator.userAgent;
    var platform = navigator.platform;
    var isWindows = userAg.includes("Windows") || platform.startsWith("Win");
    if (isWindows) {
      numberEl.classList.add("windUser");
      welcomePrize.classList.add("windUser");
      scoreDiv.classList.add("windUser");
    }
  }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwicHJvbW9FbmREYXRlIiwiRGF0ZSIsImNoZWNrQW5kTG9ja1Byb21vIiwiY3VycmVudERhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJtYWluUGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicGxheUJ0biIsInNjcm9sbFBhcnRCdG4iLCJwbGFjZUJldEJ0biIsImxvYWRlciIsInJlc3VsdHNUYWJsZSIsInVuYXV0aFRhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJzY29yZURpdiIsInByZWRpY3RCdG4iLCJjb25maXJtQnRuIiwibGFzdCIsImp1ZGdlcyIsInVuY29uZmlybWVkSXRlbSIsImNvbmZpcm1lZEl0ZW0iLCJzY3JvbGxCdG4iLCJ0YXJnZXRCbG9jayIsInRhcmdldCIsIndlbGNvbWVQcml6ZSIsImJlbHQiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImN1cnJlbnRCZXQiLCJsb2NhbGUiLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdGFydHNXaXRoIiwiUHJvbWlzZSIsInJlamVjdCIsImJvZHkiLCJvdmVyZmxvdyIsInJlbW92ZSIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsInJlbmRlclVzZXJzIiwiZGV0ZWN0V2luZG93c1VzZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiQmV0IiwibWF0Y2hOdW1iZXIiLCJwbGFjZUJldCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInNjcmVlbldpZHRoIiwiaW5uZXJXaWR0aCIsInRocmVzaG9sZFZhbHVlIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidW5vYnNlcnZlIiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZSIsInRhcmdldE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZGlzY29ubmVjdCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJsb2FkVGltZSIsInNldFRpbWVvdXQiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJ1c2VyaWQiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInVzZXJzIiwiZGF0YSIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJ1c2VyIiwiaXNDdXJyZW50VXNlciIsInRhcmdldFRhYmxlIiwiZGlzcGxheVVzZXIiLCJ0YWJsZSIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1cGRhdGVMYXN0UHJlZGljdGlvbiIsInByZWRpY3Rpb24iLCJOdW1iZXIiLCJ0ZWFtIiwidXNlcklkRGlzcGxheSIsIm1hc2tVc2VySWQiLCJmb3JtYXREYXRlU3RyaW5nIiwibGFzdEZvcmVjYXN0Iiwid2lubmVyIiwiYXBwZW5kQ2hpbGQiLCJ0b1N0cmluZyIsInNsaWNlIiwiaXNDb25maXJtZWQiLCJiZXRDb25maXJtZWQiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsImRheSIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJtaW51c0J0biIsInBsdXNCdG4iLCJudW1iZXJFbCIsImp1ZGdlc0VsIiwidXBkYXRlRGlzcGxheSIsInRleHRDb250ZW50IiwiaXNSZXF1ZXN0SW5Qcm9ncmVzcyIsImJ0biIsImJ0blR4dCIsInVzZXJBZyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInBsYXRmb3JtIiwiaXNXaW5kb3dzIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBRVQsSUFBTUEsTUFBTSxHQUFHLGdEQUFnRDtFQUUvRCxJQUFNQyxZQUFZLEdBQUcsSUFBSUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0VBR3BELFNBQVNDLGlCQUFpQixDQUFDQyxXQUFXLEVBQUVILFlBQVksRUFBRTtJQUNsRCxJQUFJRyxXQUFXLElBQUlILFlBQVksRUFBRTtNQUM3QkksUUFB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RixnQkFBZ0IsQ0FBQyxDQUFDZ0ssTUFBTSxDQUFDLEVBQUUsY0FBYyxDQUFDO1FBQzFDcEssYUFBYSxDQUFDLENBQUNvSyxNQUFNLENBQUMsRUFBRSxRQUFRLENBQUM7TUFDckMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztNQUNQdkUsVUFBVSxDQUFDLFlBQUk7UUFDWHpGLGdCQUFnQixDQUFDLENBQUNnSyxNQUFNLENBQUMsRUFBRSxTQUFTLENBQUM7UUFDckNuQyxvQkFBb0IsQ0FBQ2xILE1BQU0sQ0FBQztRQUM1QjhCLFdBQVcsRUFBRTtNQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ1osQ0FBQyxDQUFDO0VBQ2Q7RUFFQSxTQUFTQyxpQkFBaUIsR0FBRztJQUN6QixJQUFNdUgsTUFBTSxHQUFHQyxTQUFTLENBQUNDLFNBQVM7SUFDbEMsSUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNFLFFBQVE7SUFDbkMsSUFBTUMsU0FBUyxHQUFHSixNQUFNLENBQUNLLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSUYsUUFBUSxDQUFDckksVUFBVSxDQUFDLEtBQUssQ0FBQztJQUUxRSxJQUFJc0ksU0FBUyxFQUFFO01BQ1hYLFFBQVEsQ0FBQ3hMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUNsQ3FCLFlBQVksQ0FBQ3RCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUN0Q1csUUFBUSxDQUFDWixTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDdEM7RUFDSjtBQUVKLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfY2hhbXBpb25fY2hhbGxlbmdlX3VhJ1xuXG4gICAgY29uc3QgcHJvbW9FbmREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA3LTE5VDIzOjI5OjU5XCIpO1xuXG5cbiAgICBmdW5jdGlvbiBjaGVja0FuZExvY2tQcm9tbyhjdXJyZW50RGF0ZSwgcHJvbW9FbmREYXRlKSB7XG4gICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBwcm9tb0VuZERhdGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY3JvbGwtcGFydC1idG4sIC5wbGF5LWJ0biwgLmJ0bi1qb2luLCAucHJlZGljdF9fbWludXMsIC5wcmVkaWN0X19wbHVzJykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKSxcbiAgICAgICAgLy8gY3VycmVudERhdGUgPSAgbmV3IERhdGUoXCIyMDI2LTA3LTE5VDIzOjI5OjU5XCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5LWJ0bicpLFxuICAgICAgICBzY3JvbGxQYXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjcm9sbC1wYXJ0LWJ0bicpLFxuICAgICAgICBwbGFjZUJldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tam9pbicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyksXG4gICAgICAgIHVuYXV0aFRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlX19ib2R5LXNjcm9sbCcpLFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZU90aGVyJyksXG4gICAgICAgIHNjb3JlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2xlZnQtY291bnRlcicpLFxuICAgICAgICBwcmVkaWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wcmVkaWN0SnVkJyksXG4gICAgICAgIGNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNvbmZpcm1lZCcpLFxuICAgICAgICBsYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2xlZnQtbGFzdC5udW1iZXInKSxcbiAgICAgICAganVkZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2xlZnQtbGFzdC5qdWRnZXMnKSxcbiAgICAgICAgdW5jb25maXJtZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sZWZ0LXJlc3VsdC51bmNvbmZpcm1lZFwiKSxcbiAgICAgICAgY29uZmlybWVkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGVmdC1yZXN1bHQuY29uZmlybWVkXCIpLFxuICAgICAgICBzY3JvbGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLXBhcnQtYnRuJyksXG4gICAgICAgIHRhcmdldEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRlbnQnKSxcbiAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRlbnQnKSxcbiAgICAgICAgd2VsY29tZVByaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbWVfX3ByaXplLWNlbnRlcicpLFxuICAgICAgICBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3JpZ2h0LWJlbHQnKTtcblxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgY3VycmVudEJldDsgXG4gICAgXG4gICAgbGV0IGxvY2FsZSA9IFwidWtcIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG5cbiAgICBsZXQgdXNlcklkID0gbnVsbDtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICByZW5kZXJVc2VycygpO1xuICAgICAgICAgICAgZGV0ZWN0V2luZG93c1VzZXIoKTtcbiAgICAgICAgICAgIGNoZWNrQW5kTG9ja1Byb21vKGN1cnJlbnREYXRlLCBwcm9tb0VuZERhdGUpLFxuICAgICAgICAgICAgcGxhY2VCZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghY3VycmVudEJldCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QmV0ID0gbmV3IEJldCh1c2VySWQsIG1hdGNoTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwbGFjZUJldChwbGFjZUJldEJ0bik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvXG4gICAgICAgICAgICBzY3JvbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRCbG9jay5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICAgICAgYmxvY2s6ICdjZW50ZXInXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gYW5pbSBiZWx0XG4gICAgICAgICAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkVmFsdWUgPSBzY3JlZW5XaWR0aCA8PSA2NDAgPyAwLjMgOiAwLjk7XG5cbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVsdC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogdGhyZXNob2xkVmFsdWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbXBpb24tY2hhbGxlbmdlLXVzeWtcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc3QgbG9hZFRpbWUgPSAyMDA7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93RWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGNvbnN0IGhpZGVFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgICAgIC8vIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIHBsYWNlQmV0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMoc2Nyb2xsUGFydEJ0bik7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBsYXlCdG4pO1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgdW5hdXRoVGFibGUuY2xhc3NMaXN0LmFkZChcInVuYXV0aFwiKTtcbiAgICAgICAgICAgICAgICB1bmNvbmZpcm1lZEl0ZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgY29uZmlybWVkSXRlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgLy8gdW5hdXRoVGFibGUuY2xhc3NMaXN0LnJlbW92ZShcIi51bmF1dGhcIilcblxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhzY3JvbGxQYXJ0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKFtwbGFjZUJldEJ0bl0pO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocGxheUJ0bik7XG4gICAgICAgICAgICAgICAgICAgIHVuYXV0aFRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmF1dGhcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdW5jb25maXJtZWRJdGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICB1bmF1dGhUYWJsZS5jbGFzc0xpc3QuYWRkKFwidW5hdXRoXCIpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMoc2Nyb2xsUGFydEJ0bik7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhbcGxhY2VCZXRCdG5dKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHBsYXlCdG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgbG9hZFRpbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh1c2Vycykge1xuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvYClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZShkYXRhLCB1c2VySWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkKSB7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudFVzZXIgPSB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZDtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFRhYmxlID0gaXNDdXJyZW50VXNlciA/IHJlc3VsdHNUYWJsZU90aGVyIDogcmVzdWx0c1RhYmxlO1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFyZ2V0VGFibGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSkge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICBpZiAoaXNDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuXG4gICAgICAgICAgICB1cGRhdGVMYXN0UHJlZGljdGlvbih1c2VyLnVzZXJpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVkaWN0aW9uID0gTnVtYmVyKHVzZXIudGVhbSkgPT09IDEzXG4gICAgICAgICAgICA/IGkxOG5EYXRhW1wianVkZ2VzRGVjaXNpb25cIl1cbiAgICAgICAgICAgIDogdXNlci50ZWFtO1xuXG4gICAgICAgIGNvbnN0IHVzZXJJZERpc3BsYXkgPSBpc0N1cnJlbnRVc2VyXG4gICAgICAgICAgICA/IGAke3VzZXIudXNlcmlkfSA8c3BhbiBjbGFzcz1cInlvdVwiIGRhdGEtdHJhbnNsYXRlPVwieW91XCI+PC9zcGFuPmBcbiAgICAgICAgICAgIDogbWFza1VzZXJJZCh1c2VyLnVzZXJpZCk7XG5cbiAgICAgICAgcm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7dXNlcklkRGlzcGxheX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7Zm9ybWF0RGF0ZVN0cmluZyh1c2VyLmxhc3RGb3JlY2FzdCl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4ke3ByZWRpY3Rpb259PC9kaXY+XG4gICAgICAgICR7dHlwZW9mIHVzZXIud2lubmVyID09PSAnYm9vbGVhbidcbiAgICAgICAgICAgID8gYDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIiBkYXRhLXRyYW5zbGF0ZT1cIiR7dXNlci53aW5uZXIgPyAncHJpemUnIDogJ25vV2lubmVycyd9XCI+KioqKio8L2Rpdj5gXG4gICAgICAgICAgICA6IGA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+KioqKio8L2Rpdj5gfVxuICAgICAgICBgO1xuXG4gICAgICAgIHRhYmxlPy5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiAnKionICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGFzdFByZWRpY3Rpb24odXNlcmlkKSB7XG4gICAgICAgIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBzY29yZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19sZWZ0LWNvdW50ZXInKTtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcmVEaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudGVhbSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBqdWRnZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdWRnZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVEaXYuaW5uZXJIVE1MID0gYCR7ZGF0YS50ZWFtfWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1bmF1dGhUYWJsZS5jbGFzc0xpc3QucmVtb3ZlKFwidW5hdXRoXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaXNDb25maXJtZWQgPSAhIWRhdGEuYmV0Q29uZmlybWVkO1xuXG4gICAgICAgICAgICAgICAgY29uZmlybWVkSXRlbT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIiwgIWlzQ29uZmlybWVkKTtcbiAgICAgICAgICAgICAgICB1bmNvbmZpcm1lZEl0ZW0/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIGlzQ29uZmlybWVkKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gICAgICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdClcblxuICAgIC8vIHByZWRpY3QgKy1cbiAgICBjb25zdCBtaW51c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19taW51cycpO1xuICAgIGNvbnN0IHBsdXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fcGx1cycpO1xuICAgIGNvbnN0IG51bWJlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX251bWJlcicpO1xuICAgIGNvbnN0IGp1ZGdlc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2p1ZGdlcycpO1xuXG4gICAgY3VycmVudEJldCA9IDE7IC8vIDEtMTIgKyAxMyAo0YHRg9C00LTRlilcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICAgIGlmIChjdXJyZW50QmV0ID09PSAxMykge1xuICAgICAgICAgICAgbnVtYmVyRWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAganVkZ2VzRWwuY2xhc3NMaXN0LnJlbW92ZSgnX29wYWNpdHknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bWJlckVsLnRleHRDb250ZW50ID0gY3VycmVudEJldDtcbiAgICAgICAgICAgIG51bWJlckVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIGp1ZGdlc0VsLmNsYXNzTGlzdC5hZGQoJ19vcGFjaXR5Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbHVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjdXJyZW50QmV0ID0gY3VycmVudEJldCA9PT0gMTMgPyAxIDogY3VycmVudEJldCsgMTtcbiAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuICAgIH0pO1xuXG4gICAgbWludXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRCZXQgPSBjdXJyZW50QmV0ID09PSAxID8gMTMgOiBjdXJyZW50QmV0LSAxO1xuICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XG4gICAgfSk7XG5cbiAgICB1cGRhdGVEaXNwbGF5KCk7XG5cbiAgICBsZXQgaXNSZXF1ZXN0SW5Qcm9ncmVzcztcbiAgICBmdW5jdGlvbiBwbGFjZUJldChidG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzUmVxdWVzdEluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlzUmVxdWVzdEluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlcXVlc3QoJy9iZXQnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IGN1cnJlbnRCZXQsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpc1JlcXVlc3RJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlclVzZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0blR4dCA9IGJ0bi5xdWVyeVNlbGVjdG9yKCcuYnRuLXR4dCcpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMoW2J0blR4dF0sIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMoW2J0blR4dF0sIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKFtidG5UeHRdLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhbYnRuVHh0XSwgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKFtidG5UeHRdLCBcInBhcnRCdG5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxhc3RQcmVkaWN0aW9uKHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycygpXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXRlY3RXaW5kb3dzVXNlcigpIHtcbiAgICAgICAgY29uc3QgdXNlckFnID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBuYXZpZ2F0b3IucGxhdGZvcm07XG4gICAgICAgIGNvbnN0IGlzV2luZG93cyA9IHVzZXJBZy5pbmNsdWRlcyhcIldpbmRvd3NcIikgfHwgcGxhdGZvcm0uc3RhcnRzV2l0aChcIldpblwiKTtcblxuICAgICAgICBpZiAoaXNXaW5kb3dzKSB7XG4gICAgICAgICAgICBudW1iZXJFbC5jbGFzc0xpc3QuYWRkKFwid2luZFVzZXJcIik7XG4gICAgICAgICAgICB3ZWxjb21lUHJpemUuY2xhc3NMaXN0LmFkZChcIndpbmRVc2VyXCIpO1xuICAgICAgICAgICAgc2NvcmVEaXYuY2xhc3NMaXN0LmFkZChcIndpbmRVc2VyXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG59KSgpO1xuIl19
