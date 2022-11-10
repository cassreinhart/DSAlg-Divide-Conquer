function findFloor(array, x) {
    let left = 0;
    let right = array.length - 1;

    while (right >= left) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === x) return arr[mid];
        else if (arr[mid] > x) {
            right = mid - 1;
        } else if (arr[mid] < x) {
            left = mid + 1;
        } else if (arr[left] > x) return -1;
    } return mid;
}

module.exports = findFloor