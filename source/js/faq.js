import { setDataAttribute } from './utils';

const tabsContainer = document.querySelector('.faq__tabs-wrapper');
const tabs = tabsContainer.querySelectorAll('.faq__tab');
const faqLists = document.querySelectorAll('.faq__list');
const faqItems = document.querySelectorAll('.faq__item');

const buttonHiddenText = {
  OPEN_TEXT:  'Открыть ответ.',
  CLOSE_TEXT: 'Закрыть ответ.',
};

let tabIndex = 0;
let newTabIndex;

setDataAttribute(tabs);

tabsContainer.addEventListener('click', (evt) => {
  const clickedTab = evt.target.closest('[data-tab-id]');
  if (clickedTab) {
    newTabIndex = clickedTab.dataset.tabId;

    if (newTabIndex < faqLists.length) {
      tabs[tabIndex].classList.remove('faq__tab--current');
      tabs[newTabIndex].classList.add('faq__tab--current');

      faqLists[tabIndex].classList.remove('faq__list--current');
      faqLists[newTabIndex].classList.add('faq__list--current');

      tabIndex = newTabIndex;
    }
  }
});

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('faq__item--opened');
    const hiddenText = item.querySelector('span');

    hiddenText.textContent = buttonHiddenText.OPEN_TEXT;
    if (item.classList.contains('faq__item--opened')) {
      hiddenText.textContent = buttonHiddenText.CLOSE_TEXT;
    }
  });
});
