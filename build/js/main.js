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

  // let locale = "uk"
  var locale = sessionStorage.getItem("locale") || "uk";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;

  // let userId = null;
  var userId = Number(sessionStorage.getItem("userId")) || null;
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
      sessionStorage.setItem("userId", "567567567");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwicHJvbW9FbmREYXRlIiwiRGF0ZSIsImNoZWNrQW5kTG9ja1Byb21vIiwiY3VycmVudERhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJtYWluUGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicGxheUJ0biIsInNjcm9sbFBhcnRCdG4iLCJwbGFjZUJldEJ0biIsImxvYWRlciIsInJlc3VsdHNUYWJsZSIsInVuYXV0aFRhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJzY29yZURpdiIsInByZWRpY3RCdG4iLCJjb25maXJtQnRuIiwibGFzdCIsImp1ZGdlcyIsInVuY29uZmlybWVkSXRlbSIsImNvbmZpcm1lZEl0ZW0iLCJzY3JvbGxCdG4iLCJ0YXJnZXRCbG9jayIsInRhcmdldCIsIndlbGNvbWVQcml6ZSIsImJlbHQiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImN1cnJlbnRCZXQiLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsIk51bWJlciIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdGFydHNXaXRoIiwiUHJvbWlzZSIsInJlamVjdCIsImJvZHkiLCJvdmVyZmxvdyIsInJlbW92ZSIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsInJlbmRlclVzZXJzIiwiZGV0ZWN0V2luZG93c1VzZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiQmV0IiwibWF0Y2hOdW1iZXIiLCJwbGFjZUJldCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInNjcmVlbldpZHRoIiwiaW5uZXJXaWR0aCIsInRocmVzaG9sZFZhbHVlIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidW5vYnNlcnZlIiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZSIsInRhcmdldE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZGlzY29ubmVjdCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJsb2FkVGltZSIsInNldFRpbWVvdXQiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJ1c2VyaWQiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInVzZXJzIiwiZGF0YSIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJ1c2VyIiwiaXNDdXJyZW50VXNlciIsInRhcmdldFRhYmxlIiwiZGlzcGxheVVzZXIiLCJ0YWJsZSIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1cGRhdGVMYXN0UHJlZGljdGlvbiIsInByZWRpY3Rpb24iLCJ0ZWFtIiwidXNlcklkRGlzcGxheSIsIm1hc2tVc2VySWQiLCJmb3JtYXREYXRlU3RyaW5nIiwibGFzdEZvcmVjYXN0Iiwid2lubmVyIiwiYXBwZW5kQ2hpbGQiLCJ0b1N0cmluZyIsInNsaWNlIiwiaXNDb25maXJtZWQiLCJiZXRDb25maXJtZWQiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsImRheSIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJtaW51c0J0biIsInBsdXNCdG4iLCJudW1iZXJFbCIsImp1ZGdlc0VsIiwidXBkYXRlRGlzcGxheSIsInRleHRDb250ZW50IiwiaXNSZXF1ZXN0SW5Qcm9ncmVzcyIsImJ0biIsImJ0blR4dCIsInVzZXJBZyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInBsYXRmb3JtIiwiaXNXaW5kb3dzIiwiaW5jbHVkZXMiLCJsbmdCdG4iLCJhdXRoQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJyZWxvYWQiLCJidXR0b24iLCJjb25maXJtZWQiLCJ1bmNvbmZpcm1lZCJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFFVCxJQUFNQSxNQUFNLEdBQUcsZ0RBQWdEO0VBRS9ELElBQU1DLFlBQVksR0FBRyxJQUFJ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TSxDQUFDaEksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7UUFDekNoRSxRQUFRLENBQUNpTCxXQUFXLEdBQUcsR0FBRztNQUM5QixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUMsQ0FBQztFQUVGak0sUUFBUSxDQUFDZ0YsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtJQUV0RC9ELFVBQVUsQ0FBQytELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO01BQzdDN0QsSUFBSSxDQUFDZixTQUFTLENBQUM2QixNQUFNLENBQUMsTUFBTSxDQUFDO01BQzdCYixNQUFNLENBQUNoQixTQUFTLENBQUM2QixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ25DLENBQUMsQ0FBQztJQUVGZixVQUFVLENBQUM4RCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtNQUM3Q2lJLFNBQVMsQ0FBQzdNLFNBQVMsQ0FBQzZCLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDbENpTCxXQUFXLENBQUM5TSxTQUFTLENBQUM2QixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3hDLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVGakMsUUFBUSxDQUFDTyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUN5RSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUNyRWhGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsdUNBQXVDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVVDLEVBQUUsRUFBRTtNQUNyRkEsRUFBRSxDQUFDQyxTQUFTLENBQUM2QixNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUVOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfY2hhbXBpb25fY2hhbGxlbmdlX3VhJ1xuXG4gICAgY29uc3QgcHJvbW9FbmREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA3LTE5VDIzOjI5OjU5XCIpO1xuXG5cbiAgICBmdW5jdGlvbiBjaGVja0FuZExvY2tQcm9tbyhjdXJyZW50RGF0ZSwgcHJvbW9FbmREYXRlKSB7XG4gICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBwcm9tb0VuZERhdGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4sIC5wcmVkaWN0X19taW51cywgLnByZWRpY3RfX3BsdXMnKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICAvLyBjdXJyZW50RGF0ZSA9ICBuZXcgRGF0ZShcIjIwMjYtMDctMTlUMjM6Mjk6NTlcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXktYnRuJyksXG4gICAgICAgIHNjcm9sbFBhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Nyb2xsLXBhcnQtYnRuJyksXG4gICAgICAgIHBsYWNlQmV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1qb2luJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKSxcbiAgICAgICAgdW5hdXRoVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfX2JvZHktc2Nyb2xsJyksXG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlT3RoZXInKSxcbiAgICAgICAgc2NvcmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fbGVmdC1jb3VudGVyJyksXG4gICAgICAgIHByZWRpY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXByZWRpY3RKdWQnKSxcbiAgICAgICAgY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY29uZmlybWVkJyksXG4gICAgICAgIGxhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fbGVmdC1sYXN0Lm51bWJlcicpLFxuICAgICAgICBqdWRnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fbGVmdC1sYXN0Lmp1ZGdlcycpLFxuICAgICAgICB1bmNvbmZpcm1lZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xlZnQtcmVzdWx0LnVuY29uZmlybWVkXCIpLFxuICAgICAgICBjb25maXJtZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sZWZ0LXJlc3VsdC5jb25maXJtZWRcIiksXG4gICAgICAgIHNjcm9sbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtcGFydC1idG4nKSxcbiAgICAgICAgdGFyZ2V0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGVudCcpLFxuICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGVudCcpLFxuICAgICAgICB3ZWxjb21lUHJpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZV9fcHJpemUtY2VudGVyJyksXG4gICAgICAgIGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fcmlnaHQtYmVsdCcpO1xuXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGxldCBjdXJyZW50QmV0OyBcbiAgICBcbiAgICAvLyBsZXQgbG9jYWxlID0gXCJ1a1wiXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJ1a1wiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcblxuICAgIC8vIGxldCB1c2VySWQgPSBudWxsO1xuICAgIGxldCB1c2VySWQgPSAgTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpIHx8IG51bGxcblxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIHJlbmRlclVzZXJzKCk7XG4gICAgICAgICAgICBkZXRlY3RXaW5kb3dzVXNlcigpO1xuICAgICAgICAgICAgY2hlY2tBbmRMb2NrUHJvbW8oY3VycmVudERhdGUsIHByb21vRW5kRGF0ZSksXG4gICAgICAgICAgICBwbGFjZUJldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50QmV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCZXQgPSBuZXcgQmV0KHVzZXJJZCwgbWF0Y2hOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBsYWNlQmV0KHBsYWNlQmV0QnRuKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG9cbiAgICAgICAgICAgIHNjcm9sbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRhcmdldEJsb2NrLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgICAgICBibG9jazogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBhbmltIGJlbHRcbiAgICAgICAgICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICBjb25zdCB0aHJlc2hvbGRWYWx1ZSA9IHNjcmVlbldpZHRoIDw9IDY0MCA/IDAuMyA6IDAuOTtcblxuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWx0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiB0aHJlc2hvbGRWYWx1ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFtcGlvbi1jaGFsbGVuZ2UtdXN5a1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zdCBsb2FkVGltZSA9IDIwMDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgY29uc3QgaGlkZUVsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG5cbiAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgLy8gaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgcGxhY2VCZXRCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhzY3JvbGxQYXJ0QnRuKTtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocGxheUJ0bik7XG4gICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICB1bmF1dGhUYWJsZS5jbGFzc0xpc3QuYWRkKFwidW5hdXRoXCIpO1xuICAgICAgICAgICAgICAgIHVuY29uZmlybWVkSXRlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICBjb25maXJtZWRJdGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAvLyB1bmF1dGhUYWJsZS5jbGFzc0xpc3QucmVtb3ZlKFwiLnVuYXV0aFwiKVxuXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHNjcm9sbFBhcnRCdG4pO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMoW3BsYWNlQmV0QnRuXSk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwbGF5QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgdW5hdXRoVGFibGUuY2xhc3NMaXN0LnJlbW92ZShcInVuYXV0aFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1bmNvbmZpcm1lZEl0ZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHVuYXV0aFRhYmxlLmNsYXNzTGlzdC5hZGQoXCJ1bmF1dGhcIik7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhzY3JvbGxQYXJ0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKFtwbGFjZUJldEJ0bl0pO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocGxheUJ0bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBsb2FkVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHVzZXJzKSB7XG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy9gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKGRhdGEsIHVzZXJJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQpIHtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50VXNlciA9IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0VGFibGUgPSBpc0N1cnJlbnRVc2VyID8gcmVzdWx0c1RhYmxlT3RoZXIgOiByZXN1bHRzVGFibGU7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YXJnZXRUYWJsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG5cbiAgICAgICAgICAgIHVwZGF0ZUxhc3RQcmVkaWN0aW9uKHVzZXIudXNlcmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZWRpY3Rpb24gPSBOdW1iZXIodXNlci50ZWFtKSA9PT0gMTNcbiAgICAgICAgICAgID8gaTE4bkRhdGFbXCJqdWRnZXNEZWNpc2lvblwiXVxuICAgICAgICAgICAgOiB1c2VyLnRlYW07XG5cbiAgICAgICAgY29uc3QgdXNlcklkRGlzcGxheSA9IGlzQ3VycmVudFVzZXJcbiAgICAgICAgICAgID8gYCR7dXNlci51c2VyaWR9IDxzcGFuIGNsYXNzPVwieW91XCIgZGF0YS10cmFuc2xhdGU9XCJ5b3VcIj48L3NwYW4+YFxuICAgICAgICAgICAgOiBtYXNrVXNlcklkKHVzZXIudXNlcmlkKTtcblxuICAgICAgICByb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHt1c2VySWREaXNwbGF5fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtmb3JtYXREYXRlU3RyaW5nKHVzZXIubGFzdEZvcmVjYXN0KX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7cHJlZGljdGlvbn08L2Rpdj5cbiAgICAgICAgJHt0eXBlb2YgdXNlci53aW5uZXIgPT09ICdib29sZWFuJ1xuICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiIGRhdGEtdHJhbnNsYXRlPVwiJHt1c2VyLndpbm5lciA/ICdwcml6ZScgOiAnbm9XaW5uZXJzJ31cIj4qKioqKjwvZGl2PmBcbiAgICAgICAgICAgIDogYDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4qKioqKjwvZGl2PmB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGFibGU/LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuICcqKicgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXN0UHJlZGljdGlvbih1c2VyaWQpIHtcbiAgICAgICAgcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHNjb3JlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2xlZnQtY291bnRlcicpO1xuICAgICAgICAgICAgICAgIGlmIChzY29yZURpdikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50ZWFtID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1ZGdlcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1ZGdlcy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZURpdi5pbm5lckhUTUwgPSBgJHtkYXRhLnRlYW19YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVuYXV0aFRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmF1dGhcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc0NvbmZpcm1lZCA9ICEhZGF0YS5iZXRDb25maXJtZWQ7XG5cbiAgICAgICAgICAgICAgICBjb25maXJtZWRJdGVtPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiLCAhaXNDb25maXJtZWQpO1xuICAgICAgICAgICAgICAgIHVuY29uZmlybWVkSXRlbT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIiwgaXNDb25maXJtZWQpO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cbiAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0uJHt5ZWFyfSAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKCkudGhlbihpbml0KVxuXG4gICAgLy8gcHJlZGljdCArLVxuICAgIGNvbnN0IG1pbnVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX21pbnVzJyk7XG4gICAgY29uc3QgcGx1c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19wbHVzJyk7XG4gICAgY29uc3QgbnVtYmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fbnVtYmVyJyk7XG4gICAgY29uc3QganVkZ2VzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fanVkZ2VzJyk7XG5cbiAgICBjdXJyZW50QmV0ID0gMTsgLy8gMS0xMiArIDEzICjRgdGD0LTQtNGWKVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRCZXQgPT09IDEzKSB7XG4gICAgICAgICAgICBudW1iZXJFbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBqdWRnZXNFbC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BhY2l0eScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbnVtYmVyRWwudGV4dENvbnRlbnQgPSBjdXJyZW50QmV0O1xuICAgICAgICAgICAgbnVtYmVyRWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAganVkZ2VzRWwuY2xhc3NMaXN0LmFkZCgnX29wYWNpdHknKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRCZXQgPSBjdXJyZW50QmV0ID09PSAxMyA/IDEgOiBjdXJyZW50QmV0KyAxO1xuICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XG4gICAgfSk7XG5cbiAgICBtaW51c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3VycmVudEJldCA9IGN1cnJlbnRCZXQgPT09IDEgPyAxMyA6IGN1cnJlbnRCZXQtIDE7XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZURpc3BsYXkoKTtcblxuICAgIGxldCBpc1JlcXVlc3RJblByb2dyZXNzO1xuICAgIGZ1bmN0aW9uIHBsYWNlQmV0KGJ0bikge1xuICAgICAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNSZXF1ZXN0SW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXNSZXF1ZXN0SW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVxdWVzdCgnL2JldCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogY3VycmVudEJldCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWVzdEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyVXNlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuVHh0ID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5idG4tdHh0JylcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhbYnRuVHh0XSwgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhbYnRuVHh0XSwgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMoW2J0blR4dF0sIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKFtidG5UeHRdLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMoW2J0blR4dF0sIFwicGFydEJ0blwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGFzdFByZWRpY3Rpb24odXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKClcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRldGVjdFdpbmRvd3NVc2VyKCkge1xuICAgICAgICBjb25zdCB1c2VyQWcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IG5hdmlnYXRvci5wbGF0Zm9ybTtcbiAgICAgICAgY29uc3QgaXNXaW5kb3dzID0gdXNlckFnLmluY2x1ZGVzKFwiV2luZG93c1wiKSB8fCBwbGF0Zm9ybS5zdGFydHNXaXRoKFwiV2luXCIpO1xuXG4gICAgICAgIGlmIChpc1dpbmRvd3MpIHtcbiAgICAgICAgICAgIG51bWJlckVsLmNsYXNzTGlzdC5hZGQoXCJ3aW5kVXNlclwiKTtcbiAgICAgICAgICAgIHdlbGNvbWVQcml6ZS5jbGFzc0xpc3QuYWRkKFwid2luZFVzZXJcIik7XG4gICAgICAgICAgICBzY29yZURpdi5jbGFzc0xpc3QuYWRkKFwid2luZFVzZXJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBURVNUXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiNTY3NTY3NTY3XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXByZWRpY3ROdW0nKTtcblxuICAgICAgICBpZiAoYnV0dG9uICYmIHNjb3JlRGl2KSB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2NvcmVEaXYudGV4dENvbnRlbnQgPSAnMSc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBwcmVkaWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGFzdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICAgICAgICBqdWRnZXMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uZmlybWVkLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHVuY29uZmlybWVkLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWVuZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLCAucHJlZGljdF9fbWludXMsIC5wcmVkaWN0X19wbHVzJykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ19sb2NrJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KSgpO1xuIl19
