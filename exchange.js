'use strict';

// data for exchange application
const countries = {
  // currency abbreviations used in application
  currency: [
    'AED',
    'ARS',
    'AUD',
    'BGN',
    'BRL',
    'BSD',
    'CAD',
    'CHF',
    'CLP',
    'CNY',
    'COP',
    'CZK',
    'DKK',
    'DOP',
    'EGP',
    'EUR',
    'FJD',
    'GBP',
    'GTQ',
    'HKD',
    'HRK',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'ISK',
    'JPY',
    'KRW',
    'KZT',
    'MXN',
    'MYR',
    'NOK',
    'NZD',
    'PAB',
    'PEN',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'RON',
    'RUB',
    'SAR',
    'SEK',
    'SGD',
    'THB',
    'TRY',
    'TWD',
    'UAH',
    'USD',
    'UYU',
    'VND',
    'ZAR',
  ],
  // countries/unions using these currencies
  country_name: [
    'United Arab Emirates',
    'Argentina',
    'Australia',
    'Bulgaria',
    'Brazil',
    'Bahamy',
    'Canada',
    'Switzerland',
    'Chile',
    'China',
    'Colombia',
    'Czech republic',
    'Denmark',
    'Dominic republic',
    'Egypt',
    'EMU',
    'Fiji',
    'The United Kingdom',
    'Guatemala',
    'Hong Kong',
    'Croatia',
    'Hungaria',
    'Indonesia',
    'Israel',
    'India',
    'Iceland',
    'Japan',
    'South Korea',
    'Kazakhstan',
    'Mexico',
    'Malaysia',
    'Norway',
    'New Zealand',
    'Panama',
    'Peru',
    'Philippines',
    'Pakistan',
    'Poland',
    'Paraguay',
    'Romania',
    'Russian federation',
    'Saudi Arabia',
    'Sweden',
    'Singapore',
    'Thailand',
    'Turkey',
    'Taiwan',
    'Ukraine',
    'United States',
    'Uruguay',
    'Vietnam',
    'South African',
  ],

  // name of the currencies
  currency_name: [
    'dirham',
    'peso',
    'dollar',
    'lev',
    'real',
    'dollar',
    'dollar',
    'franc',
    'peso',
    'renminbi',
    'peso',
    'koruna',
    'krone',
    'peso',
    'pound',
    'euro',
    'dollar',
    'pound sterling',
    'quetzal',
    'dollar',
    'kuna',
    'forint',
    'rupiah',
    'new shekel',
    'rupee',
    'króna',
    'yen',
    'won',
    'tenge',
    'peso',
    'ringgit',
    'krone',
    'dollar',
    'balboa',
    'sol',
    'peso',
    'rupee',
    'złoty',
    'guaraní',
    'leu',
    'ruble',
    'riyal',
    'krona',
    'dollar',
    'baht',
    'lira',
    'dollar',
    'hryvnia',
    'dollar',
    'peso',
    'dong',
    'rand',
  ],

  // links for country flags used in application
  flags: [
    'https://countryflagsapi.com/png/ae',
    'https://countryflagsapi.com/png/ar',
    'https://countryflagsapi.com/png/au',
    'https://countryflagsapi.com/png/bg',
    'https://countryflagsapi.com/png/br',
    'https://countryflagsapi.com/png/bs',
    'https://countryflagsapi.com/png/ca',
    'https://countryflagsapi.com/png/ch',
    'https://countryflagsapi.com/png/cl',
    'https://countryflagsapi.com/png/cn',
    'https://countryflagsapi.com/png/co',
    'https://countryflagsapi.com/png/cz',
    'https://countryflagsapi.com/png/dk',
    'https://countryflagsapi.com/png/do',
    'https://countryflagsapi.com/png/eg',
    'https://countryflagsapi.com/png/eu',
    'https://countryflagsapi.com/png/fj',
    'https://countryflagsapi.com/png/gb',
    'https://countryflagsapi.com/png/gt',
    'https://countryflagsapi.com/png/hk',
    'https://countryflagsapi.com/png/hr',
    'https://countryflagsapi.com/png/hu',
    'https://countryflagsapi.com/png/id',
    'https://countryflagsapi.com/png/il',
    'https://countryflagsapi.com/png/in',
    'https://countryflagsapi.com/png/is',
    'https://countryflagsapi.com/png/jp',
    'https://countryflagsapi.com/png/kr',
    'https://countryflagsapi.com/png/kz',
    'https://countryflagsapi.com/png/mx',
    'https://countryflagsapi.com/png/my',
    'https://countryflagsapi.com/png/no',
    'https://countryflagsapi.com/png/nz',
    'https://countryflagsapi.com/png/pa',
    'https://countryflagsapi.com/png/pe',
    'https://countryflagsapi.com/png/ph',
    'https://countryflagsapi.com/png/pk',
    'https://countryflagsapi.com/png/pl',
    'https://countryflagsapi.com/png/py',
    'https://countryflagsapi.com/png/ro',
    'https://countryflagsapi.com/png/ru',
    'https://countryflagsapi.com/png/sa',
    'https://countryflagsapi.com/png/se',
    'https://countryflagsapi.com/png/sg',
    'https://countryflagsapi.com/png/th',
    'https://countryflagsapi.com/png/tr',
    'https://countryflagsapi.com/png/tw',
    'https://countryflagsapi.com/png/ua',
    'https://countryflagsapi.com/png/us',
    'https://countryflagsapi.com/png/uy',
    'https://countryflagsapi.com/png/vn',
    'https://countryflagsapi.com/png/za',
  ],

  alts: [
    'United Arab Emirates flag',
    'Argentina flag',
    'Australia flag',
    'Bulgaria flag',
    'Brazil flag',
    'The Bahamas flag',
    'Canada flag',
    'Switzerland flag',
    'Chile flag',
    'China flag',
    'Colombia flag',
    'Czechia flag',
    'Denmark flag',
    'Dominican Republic flag',
    'Egypt flag',
    'European Union flag',
    'Fiji flag',
    'The United Kingdom Of Great Britain And Northern Ireland flag',
    'Guatemala flag',
    'Hong Kong flag',
    'Croatia flag',
    'Hungary flag',
    'Indonesia flag',
    'Israel flag',
    'India flag',
    'Iceland flag',
    'Japan flag',
    'The Republic Of Korea flag',
    'Kazakhstan flag',
    'Mexico flag',
    'Malaysia flag',
    'Norway flag',
    'New Zealand flag',
    'Panama flag',
    'Peru flag',
    'Philippines flag',
    'Pakistan flag',
    'Poland flag',
    'Paraguay flag',
    'Romania flag',
    'Russian Federation flag',
    'Saudi Arabia flag',
    'Sweden flag',
    'Singapore flag',
    'Thailand flag',
    'Turkey flag',
    'Taiwan flag',
    'Ukraine flag',
    'The United States Of America flag',
    'Uruguay flag',
    'Viet Nam flag',
    'South Africa flag',
  ],
};

// main currency showed on the top of the page (list)
const mainCurrency = document.getElementById('currency-main');
// current date
const date = document.getElementById('date');
// list of items with countries and their currency rates compared to main currency
const countriesItems = document.getElementById('countries');
// lists of currencies and inputs for amounts
const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
// swaping  utton
const swap = document.getElementById('swap');

// showing current date
const newDate = new Date();

date.innerText = `${newDate.getDate()}/${
  newDate.getMonth() + 1
}/${newDate.getFullYear()}`;

// async function for downloading data (currency rates) from the third party API
async function convert() {
  const currencyEl_one = currencyOne.value;
  const currencyEl_two = currencyTwo.value;

  // downloading data for the currency chosen in the select list
  const res = await fetch(
    `https://v6.exchangerate-api.com/v6/5f4d69b4015d694e7afd949d/latest/${currencyEl_one}`
  );

  // data in json format
  const data = await res.json();

  // choosing currency rate for second currency
  const rate = data.conversion_rates[currencyEl_two];

  // showing result for typed amount for currency one in converted currency two
  amountTwo.value = (amountOne.value * rate).toFixed(3);
}

// async function for downloading data (currency rates) from the third party API
async function currencyRates() {
  const mainCurrencyEl = mainCurrency.value;

  const res = await fetch(
    `https://v6.exchangerate-api.com/v6/5f4d69b4015d694e7afd949d/latest/${mainCurrencyEl}`
  );

  const data = await res.json();

  // empty array for saving results used in dynamically created nlist of items - countries and their currency rates compared to main currency rate
  const values = [];

  // if currency abbreviation in data json format is the same as currency abbreviation in countries object, its currency rate is saved in values array
  for (let i = 0; i <= countries.currency.length; i++) {
    for (const [key, value] of Object.entries(data.conversion_rates)) {
      if (key === countries.currency[i]) values.push(value);
    }
  }

  // after changing main currency there will be reseting of currency rates calculated to previous main currency
  countriesItems.innerHTML = '';

  // for every currency there is one item in dynamically created list of countries and their currencies and currency rates compared to main currency
  countries.currency.forEach((_, i) => {
    const element = document.createElement('li');

    element.classList.add('country');

    element.innerHTML = `
    <div class="country__left">
    <img
    class="country__flag"
    id="country-flag"
    src="${countries.flags[i]}"
    alt="${countries.alts[i]}"
    />
    <div class="country__info">
    <div class="country__info--name" id="country-name">${
      countries.country_name[i]
    }</div>
    <div class="country__info--currency" id="country-currency">
    ${countries.currency_name[i]}
    </div>
    </div>
    </div>
    <div class="country__right">
    <h1 class="country__mark" id="country-mark">${countries.currency[i]}</h1>
    <div class="country__unit">1</div>
    <div class="country__rate" id="country-rate">${values[i].toFixed(4)}</div>
        </div>
        `;

    countriesItems.insertAdjacentElement('beforeend', element);
  });
}

// showing numbers in input element after clicking on buttons with numbers
function display(val) {
  amountOne.value += val;
  convert();
  return val;
}

// clearing input element
function clearScreen() {
  let a = amountOne;
  a.value = '';
  convert();
}

//////////////////////// Event handlers ////////////////////////

// after changing currency one there will be automatically convertion of results
currencyOne.addEventListener('change', convert);

// after changing amount of currency one the is automatically convertion of results
amountOne.addEventListener('input', convert);

// after changing currency two there will be automatically convertion of results
currencyTwo.addEventListener('change', convert);

// calculated amount of currency two
amountTwo.addEventListener('input', convert);

// after changing main currency there will be automatically convertion of results
mainCurrency.addEventListener('change', currencyRates);

// swaping currency one and currency two and automatically converting
swap.addEventListener('click', () => {
  let temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  convert();
});

// calling async functions
convert();
currencyRates();
