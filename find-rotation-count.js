function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] < arr[mid - 1]) return mid;
        else if (arr[left] > arr[left + 1]) return arr[left + 1];
        else if (arr[right] < arr[right - 1]) return arr[right - 1];
        else {
            left ++;
            right--;
        }
    }
}

module.exports = findRotationCount