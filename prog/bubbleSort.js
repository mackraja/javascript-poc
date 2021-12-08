/**
 * Optimized implementation of bubble sort Algorithm
 * @param {*} arr (Unsorted arr)
 * @returns Array
 */
function bubbleSort(arr) {
    let i, j;
    const len = arr.length;
    let isSwapped = false;
    for (i = 0; i < len; i++) {
      isSwapped = false;
      for (j = 0; j < len; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          isSwapped = true;
        }
      }
      // IF no two elements were swapped by inner loop, then break
      if (!isSwapped) {
        break;
      }
    }
    return arr;
  }
  
  const unsortedArr = [243, 45, 23, 356, 3, 5346, 35, 5];
  // calling the bubbleSort Function
  const sortedArr = bubbleSort(unsortedArr);
  console.log(sortedArr); // [3, 5, 23, 35, 45, 243, 356, 5346]
  