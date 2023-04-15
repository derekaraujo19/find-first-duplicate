function findFirstDuplicate(arr) {

  // create an empty set called unique
  // const uniques = new Set();
  const uniques = [];

  // iterate through original array
  // for (const value of arr) {
  //   // if uniques has value
  //   if(uniques.has(value)) {
  //     // return that value
  //     return value;
  //   }
  //   // otherwise add the value and move on
  //   uniques.add(value);
  // }
  // // if we finish original array and never find uniques has value, return -1
  // return -1

  for (i = 0; i < arr.length; i++) {
    if (uniques.includes(arr[i])) {
      return arr[i];
    }
    uniques.push(arr[i]);
    }
    return -1
  }


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
