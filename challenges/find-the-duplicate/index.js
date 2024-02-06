/**
 * @param {array} array - Array of length n + 1, where n is the last element in the array
 * @returns {string}
 */

function findDuplicate(array) {
  let tempArray = new Array(array.length - 1).fill(false);

  for (let i = 0; i < array.length; i++) {
    const val = array[i];

    if (!tempArray[val]) {
      tempArray[val] = true;
    } else {
      return `The duplicate value is ${val}`;
    }
  }
  return `There are no duplicate values`;
}

module.exports = findDuplicate;
