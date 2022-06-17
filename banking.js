'use strict';

// Account 1 - data for general account informations, payment movements, savings and loan requests
const account1 = {
  owner: 'Martin Jurkov',
  movements: [
    2500,
    -10000,
    -897,
    -1899,
    -559,
    12000,
    -499,
    16000,
    12500,
    -599,
    -1199,
  ],
  counterparty: [
    'Lukáš Mantič',
    'Saving Account',
    'Albert',
    'Alza',
    'České dráhy',
    'Milan Veselý',
    'Denník N',
    'Klára Zelená',
    'Kristína Milá',
    'YouTube',
    'Martinus',
  ],
  images: [
    'X',
    'X',
    `img/albert.webp`,
    `img/alza.webp`,
    `img/cd.webp`,
    'X',
    `img/dennikn.png`,
    'X',
    'X',
    `img/youtube.jpeg`,
    `img/martinus.png`,
  ],
  interestRate: 4.2, // %
  pin: 1111,
  cvv: 681,
  card_number: '5282 3456 7890 1289',
  card_date: '07/23',
  starting_balance: 158000,
  starting_savings: 90000,
  savings: [10000],

  movementsDates: [
    '2022-01-18T13:15:33.035Z',
    '2022-01-19T13:15:33.035Z',
    '2022-01-23T09:48:16.867Z',
    '2022-01-28T09:15:04.904Z',
    '2022-02-01T14:18:46.235Z',
    '2022-02-08T16:33:06.386Z',
    '2022-02-26T14:43:26.374Z',
    '2022-03-08T13:15:33.035Z',
    '2022-03-16T18:49:59.371Z',
    '2022-03-28T13:15:33.035Z',
    '2022-03-29T12:01:20.894Z',
  ],
  currency: 'CZK',
  locale: 'cz-CZ',
};

// Account 2
const account2 = {
  owner: 'Lukáš Mantič',
  movements: [5000, 3400, -2500, -790, -3210, -1000, 8500, -30],
  counterparty: [
    'Kristína Milá',
    'Klára Zelená',
    'Martin Jurkov',
    'Netflix',
    'Alza',
    'Alza',
    'Miroslav Krátky',
    'Albert',
  ],
  images: [
    'X',
    'X',
    'X',
    `img/netflix.png`,
    `img/alza.webp`,
    `img/alza.webp`,
    'X',
    `img/albert.webp`,
  ],
  interestRate: 4.0,
  pin: 2222,
  cvv: 305,
  card_number: '6893 6543 0217 7543',
  card_date: '02/24',
  starting_balance: 495000,
  starting_savings: 30000,
  savings: [],

  movementsDates: [
    '2022-01-03T13:15:33.035Z',
    '2022-01-30T09:48:16.867Z',
    '2022-01-18T09:15:04.904Z',
    '2022-02-25T14:18:46.235Z',
    '2022-02-28T16:33:06.386Z',
    '2022-03-10T14:43:26.374Z',
    '2022-03-25T18:49:59.371Z',
    '2022-03-28T12:01:20.894Z',
  ],
  currency: 'CZK',
  locale: 'cz-CZ',
};

// Account 3
const account3 = {
  owner: 'Renáta Malá',
  movements: [30000, -200, 340, -300, -20, -50, -400, -460],
  counterparty: [
    'Payroll Company',
    'Albert',
    'Denník N',
    'Notino',
    'Albert',
    'Albert',
    'Netflix',
    'YouTube',
  ],
  images: [
    'X',
    `img/albert.webp`,
    `img/dennikn.png`,
    `img/notino.webp`,
    `img/albert.webp`,
    `img/albert.webp`,
    `img/netflix.png`,
    `img/youtube.jpeg`,
  ],
  interestRate: 3.6,
  pin: 3333,
  cvv: 998,
  card_number: '8090 5498 0518 7598',
  card_date: '11/23',
  starting_balance: 5000,
  starting_savings: 65000,
  savings: [],

  movementsDates: [
    '2022-01-10T13:15:33.035Z',
    '2022-01-20T09:48:16.867Z',
    '2022-02-25T06:04:23.907Z',
    '2022-02-27T14:18:46.235Z',
    '2022-03-05T16:33:06.386Z',
    '2022-03-16T14:43:26.374Z',
    '2022-03-22T18:49:59.371Z',
    '2022-03-30T12:01:20.894Z',
  ],
  currency: 'CZK',
  locale: 'cz-CZ',
};

// saving 3 accounts into array for next operations
const accounts = [account1, account2, account3];

// login labels and button
const loginBtn = document.querySelector('.login__input--btn');
const loginUsername = document.querySelector('.login__input--username');
const loginPin = document.querySelector('.login__input--pin');

// after login
const labelWelcome = document.getElementById('welcome');
const app = document.getElementById('app');
const overlay = document.getElementById('overlay');
const logoutBtn = document.getElementById('logout');

// btns in nav
const cardsBtn = document.getElementById('cards');
const paymentsBtn = document.getElementById('payments');
const requestLoanBtn = document.getElementById('request-loan');
const savingAccountBtn = document.getElementById('saving-account');

// after login showing data about account/elements in account
const myCards = document.getElementById('cards-list');
const payments = document.getElementById('payments-list');
const request_loan = document.getElementById('request-loan-list');
const saving_account = document.getElementById('saving-account-list');
const labelTimer = document.getElementById('timer');
const movementsContainer = document.getElementById('movements');
const labelToday = document.getElementById('today');
const specialNumber = document.getElementById('special-number');
const labelBalance = document.getElementById('balance');
const labelCardNumber = document.getElementById('card-number');
const labelCardDate = document.getElementById('card-date');
const labelCardNumberRight = document.getElementById('card-number-right');
const requestedLoan = document.getElementById('requested-loan');

// btns and labels for transfer/payment
const inputPaymentFrom = document.getElementById('payment-from');
const inputPaymentTo = document.getElementById('payment-to');
const inputPaymentAmount = document.getElementById('payment-amount');
const paymentBtn = document.getElementById('payment-btn');

// btns and labels for loan request
const requestedLoanBtn = document.getElementById('btn-request-loan');
const inputRequestedLoan = document.getElementById('requested-loan');
const approvedLoan = document.querySelector('.request-loan__approved');
const rejectedLoan = document.querySelector('.request-loan__rejected');

// btns and labels for transfer money from universal account to saving account
const savingAmount = document.getElementById('saving-amount');
const inputSavingTransfer = document.getElementById('saving-transfer');
const savingTransferBtn = document.getElementById('btn-saving-account');
const savingProfit = document.getElementById('saving-profit');
const savingRate = document.getElementById('saving-rate');

// function for formatting dates in movements (today, yesterday, 2 - 7 days ago and specific dates in case of more than 7 days ago)
function formatMovementDate(date, locale) {
  // transforming miliseconds into days
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  // how many days ago was specific movement
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // returning date in user account locale
  return new Intl.DateTimeFormat(locale).format(date);
}

// function for automatic formatting currency into user acount locale
function formatCur(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

// function for setting and starting 5 min logout timer for safety reasons
function startLogOutTimer() {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      overlay.classList.add('hidden');
      app.classList.add('hidden');
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 300;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
}

// function for creating usernames/initials needed for login
function createUsernames(accs) {
  accs.forEach(
    (acc) =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map((name) => name[0])
        .join(''))
  );
}

createUsernames(accounts);

// after clicking on "My Cards" button showing my cards container
function showMyCards() {
  myCards.classList.remove('hidden');
  payments.classList.add('hidden');
  request_loan.classList.add('hidden');
  saving_account.classList.add('hidden');
}

// after clicking on "Payments" button showing payments container
function showPayments() {
  myCards.classList.add('hidden');
  payments.classList.remove('hidden');
  request_loan.classList.add('hidden');
  saving_account.classList.add('hidden');
}

// after clicking on "Request Loan" button showing request loan container
function showRequestLoan() {
  myCards.classList.add('hidden');
  payments.classList.add('hidden');
  request_loan.classList.remove('hidden');
  saving_account.classList.add('hidden');
}

// after clicking on "Saving Account" button showing saving account container
function showSavingAccount() {
  myCards.classList.add('hidden');
  payments.classList.add('hidden');
  request_loan.classList.add('hidden');
  saving_account.classList.remove('hidden');
}

// function for showing movements/history container (on the right side of the screen)
function displayMovemetns(acc) {
  movementsContainer.innerHTML = '';

  // for current account - for each movement creating list element with locale formatted dates and amounts, counterparty of current account, information whether this movement/payment is sent or received and image or initials of counterparty
  acc.movements.forEach((mov, i) => {
    const element = document.createElement('li');
    element.classList.add('movements__row');

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const type_1 = mov > 0 ? 'receive' : 'sent';
    const type_2 = mov > 0 ? 'deposit' : 'withdrawal';
    const initials = acc.counterparty[i]
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();

    element.innerHTML = `
      ${
        acc.images[i] === 'X'
          ? `<div class="movements__circle">
      <div class="movements__circle--initials">${initials}</div>
    </div>`
          : `<img src="${acc.images[i]}" alt="${acc.counterparty[i]}" />`
      }
      
      <div class="movements__column">
        <div class="movements__name">${acc.counterparty[i]}</div>
        <div class="movements__type movements__type--${type_2}">
          ${i + 1} ${type_1}
        </div>
      </div>
      <div class="movements__column">
        <div class="movements__value movements__value--${type_2}">
          ${formattedMov}
        </div>
        <div class="movements__date">${displayDate}</div>
      </div>
    `;

    // sorted in way where the last movement is on the top of the container and the first movement in on the bottom of the container
    movementsContainer.insertAdjacentElement('afterbegin', element);
  });
}

// calculating total balance in user account (from previous movements and starting balance amount) and showing formatted total balance that can be used for transfers/payments
function calcBalance(acc) {
  acc.balance = acc.movements.reduce(
    (acc, mov) => acc + mov,
    acc.starting_balance
  );

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
}

// calculating savings in saving account (from saving movements and starting saving amount) and showing formatted total savings (cannot be used for transfers/payments)
function calcSavings(acc) {
  acc.current_savings = acc.savings.reduce(
    (acc, sav) => acc + sav,
    acc.starting_savings
  );

  savingAmount.textContent = formatCur(
    acc.current_savings,
    acc.locale,
    acc.currency
  );
}

// calculating profit as of 31.12.2022 in saving account (from total savings and specific interest rate for every account) and showing profit
// user can see "future profit" and will have motivation for higher savings
function calcProfit(acc) {
  acc.profit =
    ((acc.savings.reduce((acc, int) => acc + int, 0) + acc.starting_savings) *
      acc.interestRate) /
    100;
  savingProfit.textContent = formatCur(acc.profit, acc.locale, acc.currency);
}

// after login there will be showed informations about every user account - in "My Cards" there will be user's first name, card number and card date expiration and cvv number  (after clicking on that cvv sign)
// in "Payments" there will be automatically filled input for user credit card
// in "Saving Account" there will be specific interest rate for saving in eveery user account
function showCardInfo(acc) {
  labelWelcome.textContent = `Welcome, ${acc.owner.split(' ')[0]}`;
  labelCardNumber.textContent = labelCardNumberRight.textContent =
    acc.card_number;
  labelCardDate.textContent = acc.card_date;
  specialNumber.textContent = acc.cvv;
  inputPaymentFrom.textContent = acc.card_number;
  savingRate.textContent = `${acc.interestRate}%`;
}

// after every transaction/operation there will be automatically updated numbers/elements in every account
function updateUI(acc) {
  showCardInfo(acc);
  displayMovemetns(acc);

  calcBalance(acc);
  calcSavings(acc);
  calcProfit(acc);
}

// in "Payments" - formatting receiver card number in max length of 19 and divided it into 4 digits number
function formats(ele) {
  if (ele.value.length < 19) {
    ele.value = ele.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    return true;
  } else {
    return false;
  }
}

function numberValidation(e) {
  e.target.value = e.target.value.replace(/[^\d ]/g, '');
  return false;
}

//////////////////////// Event handlers ////////////////////////

// setting empty current account and timer
let currentAccount, timer;

///////////////////// after clicking on login button /////////////////////
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // current account will be account with username identical with username typped in username input
  currentAccount = accounts.find((acc) => acc.username === loginUsername.value);

  // after matching pin code typped in pin input element with pin in specific account there will be:
  // showing current time and date on the top of the app container
  if (currentAccount?.pin === +loginPin.value) {
    function updateTime() {
      const now = new Date();
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      };

      const formattedDateTime = new Intl.DateTimeFormat(
        currentAccount.locale,
        options
      ).format(now);

      labelToday.textContent = formattedDateTime;
    }

    updateTime();

    // this time will be updated and showed on the top of the container every 1 second
    setInterval(updateTime, 1000);

    // removing class "hidden" in overlay and app container, so user can see current account with updated informations about account
    overlay.classList.remove('hidden');
    app.classList.remove('hidden');

    // removing of username and pin from inputs
    loginUsername.value = loginPin.value = '';
    loginPin.blur();

    // starting 5 min timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // updating data of current account
    updateUI(currentAccount);
  }
});

///////////////////// after clicking on logout button /////////////////////
// adding "hidden" class to overlay and app container, so they will be not seen in UI
logoutBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
  app.classList.add('hidden');
});

//////////////////////// after click on cvv number ////////////////////////
// after holding mousedown event user can see cvv number
specialNumber.addEventListener('mousedown', () => {
  specialNumber.textContent = currentAccount.cvv;
});
// after mouseup event cvv number will be hidden
specialNumber.addEventListener('mouseup', () => {
  specialNumber.textContent = 'CVV';
});

/////////////////// after clicking on navigation buttons///////////////////
// activating function showMyCards
cardsBtn.addEventListener('click', showMyCards);

// activating function showPayments
paymentsBtn.addEventListener('click', showPayments);

// activating function showRequestLoan
requestLoanBtn.addEventListener('click', showRequestLoan);

// activating function showSavingAccount
savingAccountBtn.addEventListener('click', showSavingAccount);

//////////////////// after clicking on transfer button ////////////////////
paymentBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // transform value in input from strig into number
  const amount = +inputPaymentAmount.value;

  // finding receiver account which matching card number typped in input
  const receiverAcc = accounts.find(
    (acc) => acc.card_number === inputPaymentTo.value
  );

  // removing amount and receiver card number from inputs
  inputPaymentAmount.value = inputPaymentTo.value = '';

  // trasfered amount must be greater than zero, there must be correct receiver account, card number of receiver must be different than card number of current account and finally total balance of current account must be greater than transfered amount of money
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.card_number !== currentAccount.card_number
  ) {
    // adding to movements array of current account negative transfered amount and to receiver movements array positive amount
    currentAccount.movements.push(-amount) &&
      receiverAcc.movements.push(amount) &&
      // adding the name of the owner of receiver account to counterparty array of current account and the name of the owner of current account to the counterparty array of receiver account
      currentAccount.counterparty.push(receiverAcc.owner) &&
      receiverAcc.counterparty.push(currentAccount.owner) &&
      // the same with images
      currentAccount.images.push('X') &&
      receiverAcc.images.push('X') &&
      // and adding time of transaction to movementsDates array of receiver and current account
      currentAccount.movementsDates.push(new Date().toISOString()) &&
      receiverAcc.movementsDates.push(new Date().toISOString());

    // updating UI after transaction
    updateUI(currentAccount);
  }
});

/////////////////// after clicking on requestLoan button ///////////////////
requestedLoanBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // setting timer function (10s) for showing and hidding of result after requesting of loan
  setTimeout(() => {
    approvedLoan.classList.add('hidden');
    rejectedLoan.classList.add('hidden');
  }, 10000);

  // requested amount of money transforming from string into number
  const amount = +inputRequestedLoan.value;

  // if there is fullfilled basic condition - loan amount must be up to 25% of the current balance in account, there will be showed after 3 seconds positive result, otherwise there will be negative result
  amount > 0 && currentAccount.balance * 0.25 >= amount
    ? setTimeout(positiveResult, 3000)
    : setTimeout(negativeResult, 3000);

  // in a case of positive result there will be showed a new movement, as a counterparty there will be name "Approved loan" and there will be showe initials of this words, plus date of the transaction and showing positive sign
  function positiveResult() {
    currentAccount.movements.push(amount) &&
      currentAccount.counterparty.push('Approved Loan') &&
      currentAccount.images.push('X') &&
      currentAccount.movementsDates.push(new Date().toISOString()) &&
      approvedLoan.classList.remove('hidden');

    // updating UI after transaction
    updateUI(currentAccount);
  }

  // in a case of negative result there will be showed negative sign
  function negativeResult() {
    rejectedLoan.classList.remove('hidden');

    updateUI(currentAccount);
  }

  // deleting amount from input after requesting
  inputRequestedLoan.value = '';
});

/////////////////// after clicking on savingTransfer button ///////////////////
savingTransferBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // amount of money transfered from current balance into saving account
  const amount = +inputSavingTransfer.value;

  // if transfered amount is greater than O and lower than current balance, than create a new movement, otherwise there will be no action
  amount > 0 && currentAccount.balance >= amount
    ? currentAccount.movements.push(-amount) &&
      currentAccount.savings.push(amount) &&
      currentAccount.counterparty.push('Saving Account') &&
      currentAccount.images.push('X') &&
      currentAccount.movementsDates.push(new Date().toISOString()) &&
      updateUI(currentAccount)
    : '';

  // deleting amount from input after transaction
  inputSavingTransfer.value = '';
});

// after clicking with mouse on the screen, the timer will be automatically set again to 5 minutes
window.addEventListener('click', () => {
  clearInterval(timer);
  timer = startLogOutTimer();
});

// after clicking on the any button/key on the keyboard, the timer will be automatically set again to 5 minutes
window.addEventListener('keypress', (e) => {
  if (e.key) {
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});
