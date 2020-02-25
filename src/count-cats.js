module.exports = function countCats(arrays) {
  let countCats = 0;
  arrays.forEach(array => {
    array.forEach(item => {
      if (item === '^^') countCats++;
    })
  });
  return countCats;
};
