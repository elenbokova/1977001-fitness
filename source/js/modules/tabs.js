const tabButtons = document.querySelectorAll('[data-tab-control]');
const tabItems = document.querySelectorAll('[data-tab]');
const catalog = document.querySelector('[data-id="catalog"]');

const removeActive = (element) => {
  element.classList.remove('is-active');
};

const addActive = (element) => {
  element.classList.add('is-active');
};

const activateFirstElement = (items) => {
  for (let item = 1; item < items.length; item++) {
    removeActive(items[item]);
  }
};

const onTabClicked = (el) => {

  let currentTabButton = el;
  let tabNumber = currentTabButton.dataset.tabControl;
  let currentTab = document.querySelector(`[data-tab="${tabNumber}"]`);

  if (!currentTabButton.classList.contains('is-active')) {
    tabButtons.forEach((button) => {
      removeActive(button);
    });
    tabItems.forEach((item) => {
      removeActive(item);
    });
    addActive(currentTabButton);
    addActive(currentTab);
  }
};

const initTabs = () => {
  catalog.dataset.js = '';

  activateFirstElement(tabItems);

  tabButtons.forEach((element) => {
    element.addEventListener('click', () => onTabClicked(element));
  });
};

export {initTabs};
