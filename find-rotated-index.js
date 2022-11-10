function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        if (arr[mid] === num) return mid;
        else if (arr[right] > num) {
            left = mid + 1;
        } else if (arr[mid] > num) {
            right = mid - 1;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } 
    } return - 1;
}

module.exports = findRotatedIndex