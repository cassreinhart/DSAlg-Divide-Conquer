function sortedFrequency(array, val) {
  let rightIdx = array.length - 1;
  let leftIdx = 0;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (array[leftIdx] === val && array[rightIdx] === val) return rightIdx - leftIdx + 1;
    
    else if (array[middleIdx]  === val && array[middleIdx - 1] !== val) {
        leftIdx = middleIdx;
        // check right until 1
    } else if (array[middleIdx] === val && array[middleIdx + 1] !== val) {
        rightIdx = middleIdx;
    } else if (array[middleIdx] === val) {
        rightIdx -= 1;
        leftIdx -= 1;
    }
  }
}
//////////////////////////////
module.exports = sortedFrequency