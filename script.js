function threeSum(arr, target) {
// write your code here
	 if (arr.length < 3) {
    // Not enough elements to form a sum of three integers.
    return null;
  }

  // Sort the array in ascending order.
  arr.sort((a, b) => a - b);

  let closestSum = arr[0] + arr[1] + arr[2];

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
  
}

module.exports = threeSum;
