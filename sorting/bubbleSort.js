// bubble sort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}

console.log(bubbleSort([4,2,1,4,6]))
