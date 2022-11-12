function sortedFrequency(array, val) {
  let rightIdx = array.length - 1;
  let leftIdx = 0;

  if (array[leftIdx] === val && array[rightIdx] === val) return array.length;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    
    if (array[leftIdx] === val && array[rightIdx] === val) return rightIdx - leftIdx + 1;

    if (array[middleIdx]  === val && array[middleIdx - 1] !== val) {
        leftIdx = middleIdx;
        // check right until 1
    } else if (array[middleIdx] === val && array[middleIdx + 1] !== val) {
        rightIdx = middleIdx;
    } else if (array[middleIdx] === val) {
        rightIdx--;
        leftIdx++;
    }
  } return -1;
}
//////////////////////////////
module.exports = sortedFrequency