(function () {

    const apiURL = 'https://fav-prom.com/api_champion_challenge_ua'

    const promoEndDate = new Date("2025-07-19T23:29:59");


    function checkAndLockPromo(currentDate, promoEndDate) {
        if (currentDate >= promoEndDate) {
            document.querySelectorAll('.btn, .predict__minus, .predict__plus').forEach(function (el) {
                el.classList.add('_lock');
            });
        }
    }

    const mainPage = document.querySelector(".fav-page"),
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


    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');

    const toggleClasses = (elements, className) => elements.forEach(el => el.classList.toggle(`${className}`));
    const toggleTranslates = (elements, dataAttr) => elements.forEach(el => {
        el.setAttribute('data-translate', `${dataAttr}`)
        el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
        el.removeAttribute('data-translate');
    });

    let currentBet; 
    
    // let locale = "uk"
    let locale = sessionStorage.getItem("locale") || "uk"

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';

    let debug = false

    if (debug) hideLoader()

    let i18nData = {};
    const translateState = true;

    // let userId = null;
    let userId =  Number(sessionStorage.getItem("userId")) || null


    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        })
            .then(res => {
                if (!res.ok) throw new Error('API error');
                return res.json();
            })
            .catch(err => {
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

    }

    function hideLoader(){
        loader.classList.add("hide")
        document.body.style.overflow = "auto"
        mainPage.classList.remove("loading")
    }

    async function init() {
        let attempts = 0;
        const maxAttempts = 20;
        const attemptInterval = 50;

        function tryDetectUserId() {
            if (window.store) {
                const state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
            } else if (window.g_user_id) {
                userId = window.g_user_id;
            }
        }

        function quickCheckAndRender() {
            checkUserAuth();
            renderUsers();
            detectWindowsUser();
            checkAndLockPromo(currentDate, promoEndDate),
            placeBetBtn.addEventListener('click', (e) => {
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
            const screenWidth = window.innerWidth;
            const thresholdValue = screenWidth <= 640 ? 0.3 : 0.9;

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
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

        }

        const waitForUserId = new Promise((resolve) => {
            const interval = setInterval(() => {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                    quickCheckAndRender();
                    clearInterval(interval);
                    resolve();
                }
                attempts++;
            }, attemptInterval);
        });

        await waitForUserId;
    }

    function loadTranslations() {
        return request(`/new-translates/${locale}`)
            .then(json => {
                i18nData = json;
                translate();
                const targetNode = document.getElementById("champion-challenge-usyk");
                const mutationObserver = new MutationObserver(function (mutations) {
                    mutationObserver.disconnect();
                    translate();
                    mutationObserver.observe(targetNode, { childList: true, subtree: true });
                });
                mutationObserver.observe(targetNode, {
                    childList: true,
                    subtree: true
                });

            });
    }


    function checkUserAuth() {
        const loadTime = 200;

        setTimeout(() => {
            const showElements = (elements) => elements.forEach(el => el.classList.remove('hide'));
            const hideElements = (elements) => elements.forEach(el => el.classList.add('hide'));

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

            return request(`/favuser/${userId}?nocache=1`).then(res => {
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
        const reportData = {
            origin: window.location.href,
            userid: userId,
            errorText: err?.error || err?.text || err?.message || 'Unknown error',
            type: err?.name || 'UnknownError',
            stack: err?.stack || ''
        };

        fetch('https://fav-prom.com/api-cms/reports/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reportData)
        }).catch(console.warn);
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            if(translateState){
                elems.forEach(elem => {
                    const key = elem.getAttribute('data-translate');
                    elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
                    if (i18nData[key]) {
                        elem.removeAttribute('data-translate');
                    }
                })
            }else{
                console.log("translation works!")
            }
        }
        refreshLocalizedClass(mainPage);
    }

    function refreshLocalizedClass(element) {
        if (!element) {
            return;
        }
        for (const lang of ['uk', 'en']) {
            element.classList.remove(lang);
        }
        element.classList.add(locale);
    }

    function renderUsers(users) {
        request(`/users/`)
            .then(data => {
                populateUsersTable(data, userId);
            });
    }

    function populateUsersTable(users, currentUserId) {
        resultsTable.innerHTML = '';
        resultsTableOther.innerHTML = '';

        if (!users?.length) return;

        users.forEach(user => {
            const isCurrentUser = user.userid === currentUserId;
            const targetTable = isCurrentUser ? resultsTableOther : resultsTable;
            displayUser(user, isCurrentUser, targetTable);
        });
    }

    function displayUser(user, isCurrentUser, table) {
        const row = document.createElement('div');
        row.classList.add('table__row');

        if (isCurrentUser) {
            row.classList.add('you');

            updateLastPrediction(user.userid);
        }

        const prediction = Number(user.team) === 13
            ? i18nData["judgesDecision"]
            : user.team;

        const userIdDisplay = isCurrentUser
            ? `${user.userid} <span class="you" data-translate="you"></span>`
            : maskUserId(user.userid);

        row.innerHTML = `
        <div class="table__row-item">${userIdDisplay}</div>
        <div class="table__row-item">${formatDateString(user.lastForecast)}</div>
        <div class="table__row-item">${prediction}</div>
        ${typeof user.winner === 'boolean'
            ? `<div class="table__row-item" data-translate="${user.winner ? 'prize' : 'noWinners'}">*****</div>`
            : `<div class="table__row-item">*****</div>`}
        `;

        table?.appendChild(row);
    }

    function maskUserId(userId) {
        return '**' + userId.toString().slice(2);
    }

    function updateLastPrediction(userid) {
        request(`/favuser/${userId}`, {
            method: 'GET'
        }).then(data => {
                // const scoreDiv = document.querySelector('.predict__left-counter');
                if (scoreDiv) {
                    if (data.team === 13) {
                        last.classList.add('hide')
                        judges.classList.remove('hide')
                    } else {
                        judges.classList.add('hide')
                        last.classList.remove('hide')
                        scoreDiv.innerHTML = `${data.team}`;
                    }
                }

                unauthTable.classList.remove("unauth");

                const isConfirmed = !!data.betConfirmed;

                confirmedItem?.classList.toggle("hide", !isConfirmed);
                unconfirmedItem?.classList.toggle("hide", isConfirmed);
        }).catch(error => {
            console.error('Error:', error);
        });
    }

    function formatDateString(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }

    loadTranslations().then(init)

    // predict +-
    const minusBtn = document.querySelector('.predict__minus');
    const plusBtn = document.querySelector('.predict__plus');
    const numberEl = document.querySelector('.predict__number');
    const judgesEl = document.querySelector('.predict__judges');

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

    plusBtn.addEventListener('click', () => {
        currentBet = currentBet === 13 ? 1 : currentBet+ 1;
        updateDisplay();
    });

    minusBtn.addEventListener('click', () => {
        currentBet = currentBet === 1 ? 13 : currentBet- 1;
        updateDisplay();
    });

    updateDisplay();

    let isRequestInProgress;
    function placeBet(btn) {
                if (!userId) {
                    return;
                }

                if (isRequestInProgress) {
                    return
                }
                isRequestInProgress = true;
                request('/bet', {
                    method: 'POST',
                    body: JSON.stringify({
                        userid: userId,
                        team: currentBet,
                    })
                }).then(res => {
                    isRequestInProgress = false;
                    // renderUsers();
                    const btnTxt = btn.querySelector('.btn-txt')
                    toggleClasses([btnTxt], "loader")
                    toggleTranslates([btnTxt], "loader")
                    setTimeout(() =>{
                        toggleTranslates([btnTxt], "loader_ready")
                        toggleClasses([btnTxt], "loader")
                    }, 500)
                    setTimeout(()=>{
                        toggleTranslates([btnTxt], "partBtn")
                        updateLastPrediction(userId);
                        renderUsers()
                    }, 1000)
                })
    }

    function detectWindowsUser() {
        const userAg = navigator.userAgent;
        const platform = navigator.platform;
        const isWindows = userAg.includes("Windows") || platform.startsWith("Win");

        if (isWindows) {
            numberEl.classList.add("windUser");
            welcomePrize.classList.add("windUser");
            scoreDiv.classList.add("windUser");
        }
    }

    // TEST
    document.querySelector('.dark-btn').addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    const lngBtn = document.querySelector(".lng-btn")
    const authBtn = document.querySelector(".auth-btn")

    lngBtn.addEventListener("click", () => {
        if (sessionStorage.getItem("locale")) {
            sessionStorage.removeItem("locale");
        } else {
            sessionStorage.setItem("locale", "en");
        }
        window.location.reload();
    });

    authBtn.addEventListener("click", () =>{
        if(userId){
            sessionStorage.removeItem("userId")
        }else{
            sessionStorage.setItem("userId", "567567567")
        }
        window.location.reload()
    });

    document.addEventListener('DOMContentLoaded', function () {
        const button = document.querySelector('.btn-predictNum');

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
