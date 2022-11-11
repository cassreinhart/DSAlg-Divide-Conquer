function countZeroes(array) {
  let rightIdx = array.length - 1;
  let leftIdx = 0;

  if (array[rightIdx] === 0 && array[leftIdx] === 0) return array.length;
  else if (array[rightIdx] === 1) return 0;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    
    if (array[middleIdx] === 1) {
        leftIdx = middleIdx + 1;
        //check left until 0
    } else if (array[middleIdx]  === 0 && array[middleIdx - 1] === 1) {
        return array.length - middleIdx;
        // check right until 1
    } else {
        rightIdx = middleIdx - 1;
    }
  } 
}

module.exports = countZeroes
L .      R
[1,0,0,0,0]