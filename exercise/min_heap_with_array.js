/**
 * 配列を使った最小ヒープの実装
 *
 * refer to:https://medium.com/@yasufumy/data-structure-heap-ecfd0989e5be
 * https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/MIT6_006F11_lec04.pdf
 */

function minHeapify(array, index) {
  const leftChildIndex = 2 * index + 1;
  const rightChildIndex = 2 * index + 2;
  const length = array.length - 1;
  let smallestIndex = index;

  if (leftChildIndex <= length && array[index] > array[leftChildIndex])
    smallestIndex = leftChildIndex;
  if (
    rightChildIndex <= length &&
    array[smallestIndex] > array[rightChildIndex]
  )
    smallestIndex = rightChildIndex;
  if (smallestIndex !== index) {
    // swap
    [array[index], array[smallestIndex]] = [array[smallestIndex], array[index]];
    minHeapify(array, smallestIndex);
  }
}

function buildMinHeap(array) {
  const start = Math.floor(array.length / 2);
  for (let i = start; i; i--) {
    minHeapify(array, i);
  }
}

function heapSort(array) {
  const copiedArray = [...array];
  buildMinHeap(copiedArray);
  const sortedArray = [];
  const length = copiedArray.length;
  for (let i = 0; i < length; i++) {
    [copiedArray[0], copiedArray[copiedArray.length - 1]] = [
      copiedArray[copiedArray.length - 1],
      copiedArray[0],
    ];
    sortedArray.push(copiedArray.pop());
    minHeapify(copiedArray, 0);
  }
  return sortedArray;
}

console.log("sortedArray", heapSort([4, 6, 10, 5, 6, 8]));
