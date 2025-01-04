/**
 * Binary Search Algorithm
 * @param {number[]} arr - A sorted array of numbers
 * @param {number} target - The number to search for
 * @returns {number} - The index of the target, or -1 if not found
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    return -1; // Target not found
}

// Example usage
const sortedArray = [2, 4, 6, 8, 10, 12, 14];
const target = 10;

const result = binarySearch(sortedArray, target);
if (result !== -1) {
    console.log(`Target found at index: ${result}`);
} else {
    console.log("Target not found in the array.");
}
