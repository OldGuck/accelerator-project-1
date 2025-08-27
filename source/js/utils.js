const setDataAttribute = (array) => {
  let dataId = 0;

  array.forEach((element) => {
    element.dataset.tabId = dataId;
    dataId++;
  });
};

export { setDataAttribute };
