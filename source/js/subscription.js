import { setDataAttribute } from './utils';

const tabsContainer = document.querySelector('.subscription__tabs-wrapper');
const tabs = tabsContainer.querySelectorAll('.subscription__tab-button');
const priceDecorStrings = document.querySelectorAll('.subscription__price-decor');
const priceStrings = document.querySelectorAll('.subscription__price');

const priceTags = [
  ['5000', '1700', '2700'],
  ['30 000', '10 200', '16 200'],
  ['60 000', '20 400', '32 400']
];

let tabIndex = 0;
let newTabIndex;

setDataAttribute(tabs);

tabsContainer.addEventListener('click', (evt) => {
  const clickedTab = evt.target.closest('[data-tab-id]');
  if (clickedTab) {
    newTabIndex = clickedTab.dataset.tabId;

    if (newTabIndex < priceTags.length) {
      tabs[tabIndex].classList.remove('subscription__tab-button--current');
      tabs[newTabIndex].classList.add('subscription__tab-button--current');

      tabIndex = newTabIndex;

      for (let i = 0; i < priceStrings.length; i++) {
        priceDecorStrings[i].textContent = priceTags[tabIndex][i];
        priceStrings[i].textContent = priceTags[tabIndex][i];
      }
    }
  }
});
