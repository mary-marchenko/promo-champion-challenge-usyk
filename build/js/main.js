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
  var promoStartDate = new Date("2025-07-15T12:00:00");
  var promoEndDate = new Date("2025-07-19T23:29:59");
  setInterval(function () {
    currentDate = new Date(); // Оновити поточну дату
    checkAndLockPromo(currentDate, promoEndDate);
  }, 600000); // Оновлювати кожні 10 хв

  function checkAndLockPromo(currentDate, promoEndDate) {
    if (currentDate >= promoEndDate) {
      document.querySelectorAll('.btn, .predict__minus, .predict__plus').forEach(function (el) {
        el.classList.add('_lock');
      });
    }
  }
  var mainPage = document.querySelector(".fav-page"),
    tableBody = document.querySelector(".table__body"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    // participateBtns = document.querySelectorAll('.part-btn'),
    playBtn = document.querySelectorAll('.play-btn'),
    scrollPartBtn = document.querySelectorAll('.scroll-part-btn'),
    placeBetBtn = document.querySelector('.btn-join'),
    loader = document.querySelector(".spinner-overlay"),
    resultsTable = document.querySelector('#table'),
    resultsTableOther = document.querySelector('#tableOther');
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
  var userId = sessionStorage.getItem("userId") || null;
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
              placeBetBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (!currentBet) {
                  currentBet = new Bet(userId, matchNumber);
                }
                placeBet(currentBet);
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
        return Promise.resolve(false);
      }
      hideElements(unauthMsgs);
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

  // function displayUser(user, isCurrentUser, table) {
  //     const additionalUserRow = document.createElement('div');
  //     additionalUserRow.classList.add('table__row');
  //     if (isCurrentUser) {
  //         updateLastPrediction(user);
  //         additionalUserRow.classList.add('you');
  //     }
  //
  //     const prediction = user.score == 13 ? i18nData[judgesDecision] : current;
  //
  //     additionalUserRow.innerHTML = `
  //                     <div class="table__row-item">${user.userid} ${isCurrentUser ? '<span data-translate="you"></span>' : ''}</div>
  //                     <div class="table__row-item">${formatDateString(user.lastForecast)}</div>
  //                     <div class="table__row-item">${prediction}</div>
  //                     <div class="table__row-item">***</div>
  //                 `;
  //     const userIdDisplay = isCurrentUser ? user.userid : maskUserId(user.userid);
  //     table.append(additionalUserRow);
  //
  //     function updateLastPrediction(data) {
  //
  //         const scoreDiv = document.querySelector('.predict__left-counter');
  //         scoreDiv.innerHTML = `${data.team}`;
  //
  //         const unconfirmedItem = document.querySelector(".predict__left-result.unconfirmed");
  //         const confirmedItem = document.querySelector(".predict__left-result.confirmed");
  //
  //         const isConfirmed = (data.betConfirmed);
  //
  //         confirmedItem.classList.toggle("hide", !isConfirmed);
  //         unconfirmedItem.classList.toggle("hide", isConfirmed);
  //     }
  //
  // }

  // function displayUser(user, isCurrentUser) {
  //     let table;
  //
  //     if (isCurrentUser) {
  //         table = document.querySelector('#tableOther');
  //     } else {
  //         const tableBody = document.querySelector('#table');
  //
  //
  //         let scrollContainer = tableBody.querySelector('.table__body-scroll');
  //         if (!scrollContainer) {
  //             scrollContainer = document.createElement('div');
  //             scrollContainer.classList.add('table__body-scroll');
  //             tableBody.appendChild(scrollContainer);
  //         }
  //
  //         table = scrollContainer;
  //     }
  //
  //     const row = document.createElement('div');
  //     row.classList.add('table__row');
  //     if (isCurrentUser) row.classList.add('you');
  //
  //     const prediction = Number(user.team) === 13
  //         ? i18nData["judgesDecision"]
  //         : user.team;
  //         console.log(i18nData["judgesDecision"])
  //
  //     const userIdDisplay = isCurrentUser
  //         ? `${user.userid} <span class="you" data-translate="you"></span>`
  //         : maskUserId(user.userid);
  //
  //     row.innerHTML = `
  //     <div class="table__row-item">${userIdDisplay}</div>
  //     <div class="table__row-item">${formatDateString(user.lastForecast)}</div>
  //     <div class="table__row-item">${prediction}</div>
  //     <div class="table__row-item">****</div>
  // `;
  //
  //     table.appendChild(row);
  //
  //     if (isCurrentUser) {
  //         updateLastPrediction(user);
  //     }
  //
  //     function maskUserId(userId) {
  //         return '**' + userId.toString().slice(2);
  //     }
  //
  //     function updateLastPrediction(data) {
  //         const scoreDiv = document.querySelector('.predict__left-counter');
  //         if (scoreDiv) scoreDiv.innerHTML = `${data.team}`;
  //         console.log(`${data.team}`);
  //
  //         const unconfirmedItem = document.querySelector(".predict__left-result.unconfirmed");
  //         const confirmedItem = document.querySelector(".predict__left-result.confirmed");
  //
  //         const isConfirmed = data.betConfirmed;
  //
  //         confirmedItem?.classList.toggle("hide", !isConfirmed);
  //         unconfirmedItem?.classList.toggle("hide", isConfirmed);
  //     }
  // }
  function displayUser(user, isCurrentUser, table) {
    var _table;
    var row = document.createElement('div');
    row.classList.add('table__row');
    console.log(isCurrentUser);
    if (isCurrentUser) {
      row.classList.add('you');
      updateLastPrediction(user);
    } else {
      var _tableBody = document.querySelector('#table');
      if (!_tableBody) return;
      var scrollContainer = _tableBody.querySelector('.table__body-scroll');
      if (!scrollContainer) {
        scrollContainer = document.createElement('div');
        scrollContainer.classList.add('table__body-scroll');
        _tableBody.appendChild(scrollContainer);
      }
      table = scrollContainer;
    }
    var prediction = Number(user.team) === 13 ? i18nData["judgesDecision"] : user.team;
    var userIdDisplay = isCurrentUser ? "".concat(user.userid, " <span class=\"you\" data-translate=\"you\"></span>") : maskUserId(user.userid);
    row.innerHTML = "\n        <div class=\"table__row-item\">".concat(userIdDisplay, "</div>\n        <div class=\"table__row-item\">").concat(formatDateString(user.lastForecast), "</div>\n        <div class=\"table__row-item\">").concat(prediction, "</div>\n        <div class=\"table__row-item\">****</div>\n        ");
    (_table = table) === null || _table === void 0 ? void 0 : _table.appendChild(row);
  }
  function maskUserId(userId) {
    return '**' + userId.toString().slice(2);
  }
  function updateLastPrediction(user) {
    request("/users/").then(function (data) {
      var scoreDiv = document.querySelector('.predict__left-counter');
      if (scoreDiv) {
        scoreDiv.innerHTML = "".concat(data.team);
      }
      console.log(data.team);
      console.log("updateLastPrediction work");
      var unconfirmedItem = document.querySelector(".predict__left-result.unconfirmed");
      var confirmedItem = document.querySelector(".predict__left-result.confirmed");
      var isConfirmed = data.betConfirmed;
      confirmedItem === null || confirmedItem === void 0 ? void 0 : confirmedItem.classList.toggle("hide", !isConfirmed);
      unconfirmedItem === null || unconfirmedItem === void 0 ? void 0 : unconfirmedItem.classList.toggle("hide", isConfirmed);
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
  function placeBet(bet) {
    console.log("клік");
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
      refreshBetInfo(userId);
      renderUsers();
    })["catch"](function (e) {
      isRequestInProgress = false;
      (function (error) {
        return console.error('Error placing bet:', error);
      });
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
      sessionStorage.setItem("userId", "777");
    }
    window.location.reload();
  });
  document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.btn-predictNum');
    var counter = document.querySelector('.predict__left-counter');
    if (button && counter) {
      button.addEventListener('click', function () {
        counter.textContent = '1';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    var predictBtn = document.querySelector('.btn-predictJud');
    var confirmBtn = document.querySelector('.btn-confirmed');
    var last = document.querySelector('.predict__left-last.number');
    var judges = document.querySelector('.predict__left-last.judges');
    var confermd = document.querySelector('.predict__left-result.confirmed');
    var unconfermd = document.querySelector('.predict__left-result.unconfirmed');
    predictBtn.addEventListener('click', function () {
      last.classList.toggle('hide');
      judges.classList.toggle('hide');
    });
    confirmBtn.addEventListener('click', function () {
      confermd.classList.toggle('hide');
      unconfermd.classList.toggle('hide');
    });
  });
  document.querySelector('.btn-end').addEventListener('click', function () {
    document.querySelectorAll('.btn, .predict__minus, .predict__plus').forEach(function (el) {
      el.classList.toggle('_lock');
    });
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwicHJvbW9TdGFydERhdGUiLCJEYXRlIiwicHJvbW9FbmREYXRlIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50RGF0ZSIsImNoZWNrQW5kTG9ja1Byb21vIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwiYWRkIiwibWFpblBhZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGFibGVCb2R5IiwidW5hdXRoTXNncyIsInBsYXlCdG4iLCJzY3JvbGxQYXJ0QnRuIiwicGxhY2VCZXRCdG4iLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsInVrTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwiY3VycmVudEJldCIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXBvcnRFcnJvciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0IiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJjaGVja1VzZXJBdXRoIiwicmVuZGVyVXNlcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiQmV0IiwibWF0Y2hOdW1iZXIiLCJwbGFjZUJldCIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJ0YXJnZXROb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImxvYWRUaW1lIiwic2V0VGltZW91dCIsInNob3dFbGVtZW50cyIsImhpZGVFbGVtZW50cyIsInVzZXJpZCIsInJlcG9ydERhdGEiLCJvcmlnaW4iLCJlcnJvclRleHQiLCJ0ZXh0IiwibWVzc2FnZSIsInR5cGUiLCJuYW1lIiwic3RhY2siLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5Iiwid2FybiIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsImxvZyIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJsYW5nIiwidXNlcnMiLCJkYXRhIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsInVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFyZ2V0VGFibGUiLCJkaXNwbGF5VXNlciIsInRhYmxlIiwicm93IiwiY3JlYXRlRWxlbWVudCIsInVwZGF0ZUxhc3RQcmVkaWN0aW9uIiwic2Nyb2xsQ29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJwcmVkaWN0aW9uIiwiTnVtYmVyIiwidGVhbSIsInVzZXJJZERpc3BsYXkiLCJtYXNrVXNlcklkIiwiZm9ybWF0RGF0ZVN0cmluZyIsImxhc3RGb3JlY2FzdCIsInRvU3RyaW5nIiwic2xpY2UiLCJzY29yZURpdiIsInVuY29uZmlybWVkSXRlbSIsImNvbmZpcm1lZEl0ZW0iLCJpc0NvbmZpcm1lZCIsImJldENvbmZpcm1lZCIsImRhdGVTdHJpbmciLCJkYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInRhcmdldCIsImJlbHQiLCJzY3JlZW5XaWR0aCIsImlubmVyV2lkdGgiLCJ0aHJlc2hvbGRWYWx1ZSIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsIm1pbnVzQnRuIiwicGx1c0J0biIsIm51bWJlckVsIiwianVkZ2VzRWwiLCJ1cGRhdGVEaXNwbGF5IiwidGV4dENvbnRlbnQiLCJzY3JvbGxCdG4iLCJ0YXJnZXRCbG9jayIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImlzUmVxdWVzdEluUHJvZ3Jlc3MiLCJiZXQiLCJyZWZyZXNoQmV0SW5mbyIsImxuZ0J0biIsImF1dGhCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImJ1dHRvbiIsImNvdW50ZXIiLCJwcmVkaWN0QnRuIiwiY29uZmlybUJ0biIsImxhc3QiLCJqdWRnZXMiLCJjb25mZXJtZCIsInVuY29uZmVybWQiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBRVQsSUFBTUEsTUFBTSxHQUFHLGdEQUFnRDtFQUUvRCxJQUFNQyxjQUFjLEdBQUcsSUFBSUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0VBQ3RELElBQU1DLFlBQVksR0FBRyxJQUFJRCxJQUFJLENBQUMs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Z0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtNQUM3Q3FJLElBQUksQ0FBQ25NLFNBQVMsQ0FBQ2lCLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDN0JtTCxNQUFNLENBQUNwTSxTQUFTLENBQUNpQixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ25DLENBQUMsQ0FBQztJQUVGaUwsVUFBVSxDQUFDcEksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7TUFDN0N1SSxRQUFRLENBQUNyTSxTQUFTLENBQUNpQixNQUFNLENBQUMsTUFBTSxDQUFDO01BQ2pDcUwsVUFBVSxDQUFDdE0sU0FBUyxDQUFDaUIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN2QyxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFFRnJCLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDMkQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDckVsRSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLHVDQUF1QyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFVQyxFQUFFLEVBQUU7TUFDckZBLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDaUIsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNoQyxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFFTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2NoYW1waW9uX2NoYWxsZW5nZV91YSdcblxuICAgIGNvbnN0IHByb21vU3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA3LTE1VDEyOjAwOjAwXCIpO1xuICAgIGNvbnN0IHByb21vRW5kRGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNy0xOVQyMzoyOTo1OVwiKTtcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpOyAvLyDQntC90L7QstC40YLQuCDQv9C+0YLQvtGH0L3RgyDQtNCw0YLRg1xuICAgICAgICBjaGVja0FuZExvY2tQcm9tbyhjdXJyZW50RGF0ZSwgcHJvbW9FbmREYXRlKVxuICAgIH0sIDYwMDAwMCk7IC8vINCe0L3QvtCy0LvRjtCy0LDRgtC4INC60L7QttC90ZYgMTAg0YXQslxuXG4gICAgZnVuY3Rpb24gY2hlY2tBbmRMb2NrUHJvbW8oY3VycmVudERhdGUsIHByb21vRW5kRGF0ZSkge1xuICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gcHJvbW9FbmREYXRlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLCAucHJlZGljdF9fbWludXMsIC5wcmVkaWN0X19wbHVzJykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdGFibGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fYm9keVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIC8vIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICBwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXktYnRuJyksXG4gICAgICAgIHNjcm9sbFBhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Nyb2xsLXBhcnQtYnRuJyksXG4gICAgICAgIHBsYWNlQmV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1qb2luJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVPdGhlcicpXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGxldCBjdXJyZW50QmV0OyBcbiAgICBcbiAgICAvLyBsZXQgbG9jYWxlID0gXCJ1a1wiXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJ1a1wiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcblxuICAgIGxldCB1c2VySWQgPSAgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSB8fCBudWxsXG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG5cblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICByZW5kZXJVc2VycygpO1xuICAgICAgICAgICAgcGxhY2VCZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghY3VycmVudEJldCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QmV0ID0gbmV3IEJldCh1c2VySWQsIG1hdGNoTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwbGFjZUJldChjdXJyZW50QmV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW1waW9uLWNoYWxsZW5nZS11c3lrXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRUaW1lID0gMjAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd0VsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBoaWRlRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgICAvLyBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICBwbGFjZUJldEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHNjcm9sbFBhcnRCdG4pO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwbGF5QnRuKTtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMoc2Nyb2xsUGFydEJ0bik7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhbcGxhY2VCZXRCdG5dKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHBsYXlCdG4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhzY3JvbGxQYXJ0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKFtwbGFjZUJldEJ0bl0pO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocGxheUJ0bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBsb2FkVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHVzZXJzKSB7XG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy9gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKGRhdGEsIHVzZXJJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQpIHtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50VXNlciA9IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0VGFibGUgPSBpc0N1cnJlbnRVc2VyID8gcmVzdWx0c1RhYmxlT3RoZXIgOiByZXN1bHRzVGFibGU7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YXJnZXRUYWJsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlKSB7XG4gICAgLy8gICAgIGNvbnN0IGFkZGl0aW9uYWxVc2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICAgIGFkZGl0aW9uYWxVc2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcbiAgICAvLyAgICAgaWYgKGlzQ3VycmVudFVzZXIpIHtcbiAgICAvLyAgICAgICAgIHVwZGF0ZUxhc3RQcmVkaWN0aW9uKHVzZXIpO1xuICAgIC8vICAgICAgICAgYWRkaXRpb25hbFVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBwcmVkaWN0aW9uID0gdXNlci5zY29yZSA9PSAxMyA/IGkxOG5EYXRhW2p1ZGdlc0RlY2lzaW9uXSA6IGN1cnJlbnQ7XG4gICAgLy9cbiAgICAvLyAgICAgYWRkaXRpb25hbFVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7dXNlci51c2VyaWR9ICR7aXNDdXJyZW50VXNlciA/ICc8c3BhbiBkYXRhLXRyYW5zbGF0ZT1cInlvdVwiPjwvc3Bhbj4nIDogJyd9PC9kaXY+XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtmb3JtYXREYXRlU3RyaW5nKHVzZXIubGFzdEZvcmVjYXN0KX08L2Rpdj5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4ke3ByZWRpY3Rpb259PC9kaXY+XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+KioqPC9kaXY+XG4gICAgLy8gICAgICAgICAgICAgICAgIGA7XG4gICAgLy8gICAgIGNvbnN0IHVzZXJJZERpc3BsYXkgPSBpc0N1cnJlbnRVc2VyID8gdXNlci51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXIudXNlcmlkKTtcbiAgICAvLyAgICAgdGFibGUuYXBwZW5kKGFkZGl0aW9uYWxVc2VyUm93KTtcbiAgICAvL1xuICAgIC8vICAgICBmdW5jdGlvbiB1cGRhdGVMYXN0UHJlZGljdGlvbihkYXRhKSB7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGNvbnN0IHNjb3JlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2xlZnQtY291bnRlcicpO1xuICAgIC8vICAgICAgICAgc2NvcmVEaXYuaW5uZXJIVE1MID0gYCR7ZGF0YS50ZWFtfWA7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGNvbnN0IHVuY29uZmlybWVkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGVmdC1yZXN1bHQudW5jb25maXJtZWRcIik7XG4gICAgLy8gICAgICAgICBjb25zdCBjb25maXJtZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sZWZ0LXJlc3VsdC5jb25maXJtZWRcIik7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGNvbnN0IGlzQ29uZmlybWVkID0gKGRhdGEuYmV0Q29uZmlybWVkKTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgY29uZmlybWVkSXRlbS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiLCAhaXNDb25maXJtZWQpO1xuICAgIC8vICAgICAgICAgdW5jb25maXJtZWRJdGVtLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIGlzQ29uZmlybWVkKTtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gfVxuXG4gICAgLy8gZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlcikge1xuICAgIC8vICAgICBsZXQgdGFibGU7XG4gICAgLy9cbiAgICAvLyAgICAgaWYgKGlzQ3VycmVudFVzZXIpIHtcbiAgICAvLyAgICAgICAgIHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlT3RoZXInKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpO1xuICAgIC8vXG4gICAgLy9cbiAgICAvLyAgICAgICAgIGxldCBzY3JvbGxDb250YWluZXIgPSB0YWJsZUJvZHkucXVlcnlTZWxlY3RvcignLnRhYmxlX19ib2R5LXNjcm9sbCcpO1xuICAgIC8vICAgICAgICAgaWYgKCFzY3JvbGxDb250YWluZXIpIHtcbiAgICAvLyAgICAgICAgICAgICBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyAgICAgICAgICAgICBzY3JvbGxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFibGVfX2JvZHktc2Nyb2xsJyk7XG4gICAgLy8gICAgICAgICAgICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKHNjcm9sbENvbnRhaW5lcik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgICAgIHRhYmxlID0gc2Nyb2xsQ29udGFpbmVyO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICAgIHJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG4gICAgLy8gICAgIGlmIChpc0N1cnJlbnRVc2VyKSByb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgcHJlZGljdGlvbiA9IE51bWJlcih1c2VyLnRlYW0pID09PSAxM1xuICAgIC8vICAgICAgICAgPyBpMThuRGF0YVtcImp1ZGdlc0RlY2lzaW9uXCJdXG4gICAgLy8gICAgICAgICA6IHVzZXIudGVhbTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGkxOG5EYXRhW1wianVkZ2VzRGVjaXNpb25cIl0pXG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgdXNlcklkRGlzcGxheSA9IGlzQ3VycmVudFVzZXJcbiAgICAvLyAgICAgICAgID8gYCR7dXNlci51c2VyaWR9IDxzcGFuIGNsYXNzPVwieW91XCIgZGF0YS10cmFuc2xhdGU9XCJ5b3VcIj48L3NwYW4+YFxuICAgIC8vICAgICAgICAgOiBtYXNrVXNlcklkKHVzZXIudXNlcmlkKTtcbiAgICAvL1xuICAgIC8vICAgICByb3cuaW5uZXJIVE1MID0gYFxuICAgIC8vICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHt1c2VySWREaXNwbGF5fTwvZGl2PlxuICAgIC8vICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtmb3JtYXREYXRlU3RyaW5nKHVzZXIubGFzdEZvcmVjYXN0KX08L2Rpdj5cbiAgICAvLyAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7cHJlZGljdGlvbn08L2Rpdj5cbiAgICAvLyAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPioqKio8L2Rpdj5cbiAgICAvLyBgO1xuICAgIC8vXG4gICAgLy8gICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgLy9cbiAgICAvLyAgICAgaWYgKGlzQ3VycmVudFVzZXIpIHtcbiAgICAvLyAgICAgICAgIHVwZGF0ZUxhc3RQcmVkaWN0aW9uKHVzZXIpO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiAnKionICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBmdW5jdGlvbiB1cGRhdGVMYXN0UHJlZGljdGlvbihkYXRhKSB7XG4gICAgLy8gICAgICAgICBjb25zdCBzY29yZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19sZWZ0LWNvdW50ZXInKTtcbiAgICAvLyAgICAgICAgIGlmIChzY29yZURpdikgc2NvcmVEaXYuaW5uZXJIVE1MID0gYCR7ZGF0YS50ZWFtfWA7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhgJHtkYXRhLnRlYW19YCk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGNvbnN0IHVuY29uZmlybWVkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGVmdC1yZXN1bHQudW5jb25maXJtZWRcIik7XG4gICAgLy8gICAgICAgICBjb25zdCBjb25maXJtZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sZWZ0LXJlc3VsdC5jb25maXJtZWRcIik7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGNvbnN0IGlzQ29uZmlybWVkID0gZGF0YS5iZXRDb25maXJtZWQ7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGNvbmZpcm1lZEl0ZW0/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsICFpc0NvbmZpcm1lZCk7XG4gICAgLy8gICAgICAgICB1bmNvbmZpcm1lZEl0ZW0/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIGlzQ29uZmlybWVkKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSkge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcbiAgICAgICAgY29uc29sZS5sb2coaXNDdXJyZW50VXNlcilcblxuICAgICAgICBpZiAoaXNDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuXG4gICAgICAgICAgICB1cGRhdGVMYXN0UHJlZGljdGlvbih1c2VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpO1xuICAgICAgICAgICAgaWYgKCF0YWJsZUJvZHkpIHJldHVybjtcblxuICAgICAgICAgICAgbGV0IHNjcm9sbENvbnRhaW5lciA9IHRhYmxlQm9keS5xdWVyeVNlbGVjdG9yKCcudGFibGVfX2JvZHktc2Nyb2xsJyk7XG5cbiAgICAgICAgICAgIGlmICghc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19ib2R5LXNjcm9sbCcpO1xuICAgICAgICAgICAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChzY3JvbGxDb250YWluZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YWJsZSA9IHNjcm9sbENvbnRhaW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZWRpY3Rpb24gPSBOdW1iZXIodXNlci50ZWFtKSA9PT0gMTNcbiAgICAgICAgICAgID8gaTE4bkRhdGFbXCJqdWRnZXNEZWNpc2lvblwiXVxuICAgICAgICAgICAgOiB1c2VyLnRlYW07XG5cbiAgICAgICAgY29uc3QgdXNlcklkRGlzcGxheSA9IGlzQ3VycmVudFVzZXJcbiAgICAgICAgICAgID8gYCR7dXNlci51c2VyaWR9IDxzcGFuIGNsYXNzPVwieW91XCIgZGF0YS10cmFuc2xhdGU9XCJ5b3VcIj48L3NwYW4+YFxuICAgICAgICAgICAgOiBtYXNrVXNlcklkKHVzZXIudXNlcmlkKTtcblxuICAgICAgICByb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHt1c2VySWREaXNwbGF5fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtmb3JtYXREYXRlU3RyaW5nKHVzZXIubGFzdEZvcmVjYXN0KX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7cHJlZGljdGlvbn08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPioqKio8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICB0YWJsZT8uYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gJyoqJyArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxhc3RQcmVkaWN0aW9uKHVzZXIpIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzL2ApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY29yZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19sZWZ0LWNvdW50ZXInKTtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcmVEaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVEaXYuaW5uZXJIVE1MID0gYCR7ZGF0YS50ZWFtfWA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS50ZWFtKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlTGFzdFByZWRpY3Rpb24gd29ya1wiKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdW5jb25maXJtZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sZWZ0LXJlc3VsdC51bmNvbmZpcm1lZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sZWZ0LXJlc3VsdC5jb25maXJtZWRcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc0NvbmZpcm1lZCA9IGRhdGEuYmV0Q29uZmlybWVkO1xuXG4gICAgICAgICAgICAgICAgY29uZmlybWVkSXRlbT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIiwgIWlzQ29uZmlybWVkKTtcbiAgICAgICAgICAgICAgICB1bmNvbmZpcm1lZEl0ZW0/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIGlzQ29uZmlybWVkKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcblxuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gICAgICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdClcblxuXG4gICAgLy8gYW5pbSBiZWx0XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgYmVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19yaWdodC1iZWx0Jyk7XG5cbiAgICAgICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkVmFsdWUgPSBzY3JlZW5XaWR0aCA8PSA2NDAgPyAwLjMgOiAwLjk7XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBiZWx0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRocmVzaG9sZDogdGhyZXNob2xkVmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBwcmVkaWN0ICstXG4gICAgY29uc3QgbWludXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fbWludXMnKTtcbiAgICBjb25zdCBwbHVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3BsdXMnKTtcbiAgICBjb25zdCBudW1iZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19udW1iZXInKTtcbiAgICBjb25zdCBqdWRnZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19qdWRnZXMnKTtcblxuICAgIGN1cnJlbnRCZXQgPSAxOyAvLyAxLTEyICsgMTMgKNGB0YPQtNC00ZYpXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgICBpZiAoY3VycmVudEJldCA9PT0gMTMpIHtcbiAgICAgICAgICAgIG51bWJlckVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIGp1ZGdlc0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bWJlckVsLnRleHRDb250ZW50ID0gY3VycmVudEJldDtcbiAgICAgICAgICAgIG51bWJlckVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIGp1ZGdlc0VsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRCZXQgPSBjdXJyZW50QmV0ID09PSAxMyA/IDEgOiBjdXJyZW50QmV0KyAxO1xuICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XG4gICAgfSk7XG5cbiAgICBtaW51c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3VycmVudEJldCA9IGN1cnJlbnRCZXQgPT09IDEgPyAxMyA6IGN1cnJlbnRCZXQtIDE7XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZURpc3BsYXkoKTtcblxuICAgIC8vIHNjcm9sbCB0b1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtcGFydC1idG4nKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGVudCcpO1xuXG4gICAgICAgIGlmIChzY3JvbGxCdG4gJiYgdGFyZ2V0QmxvY2spIHtcbiAgICAgICAgICAgIHNjcm9sbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRhcmdldEJsb2NrLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgICAgICBibG9jazogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgaXNSZXF1ZXN0SW5Qcm9ncmVzcztcbiAgICBmdW5jdGlvbiBwbGFjZUJldChiZXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi0LrQu9GW0LpcIilcblxuICAgICAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNSZXF1ZXN0SW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXNSZXF1ZXN0SW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVxdWVzdCgnL2JldCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogY3VycmVudEJldCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWVzdEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEJldEluZm8odXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMoKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1ZXN0SW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAoZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgcGxhY2luZyBiZXQ6JywgZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIFRFU1RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCI3NzdcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcHJlZGljdE51bScpO1xuICAgICAgICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2xlZnQtY291bnRlcicpO1xuXG4gICAgICAgIGlmIChidXR0b24gJiYgY291bnRlcikge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSAnMSc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcHJlZGljdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcHJlZGljdEp1ZCcpO1xuICAgICAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jb25maXJtZWQnKTtcbiAgICAgICAgY29uc3QgbGFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19sZWZ0LWxhc3QubnVtYmVyJyk7XG4gICAgICAgIGNvbnN0IGp1ZGdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19sZWZ0LWxhc3QuanVkZ2VzJyk7XG4gICAgICAgIGNvbnN0IGNvbmZlcm1kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2xlZnQtcmVzdWx0LmNvbmZpcm1lZCcpO1xuICAgICAgICBjb25zdCB1bmNvbmZlcm1kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2xlZnQtcmVzdWx0LnVuY29uZmlybWVkJyk7XG5cblxuICAgICAgICBwcmVkaWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGFzdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICAgICAgICBqdWRnZXMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uZmVybWQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICAgICAgdW5jb25mZXJtZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1lbmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0biwgLnByZWRpY3RfX21pbnVzLCAucHJlZGljdF9fcGx1cycpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdfbG9jaycpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufSkoKTtcbiJdfQ==
