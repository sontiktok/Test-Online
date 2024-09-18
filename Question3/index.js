function removeDuplicates(arr) {
  let seen = new Set();
  let result = [];

  for (let item of arr) {
    let lowerCaseItem = typeof item === "string" ? item.toLowerCase() : item;

    if (!seen.has(lowerCaseItem)) {
      seen.add(lowerCaseItem);
      result.push(item);
    }
  }

  return result;
}

// Test Cases

console.log(removeDuplicates(["a", "B", "c", "A", "b", "C"]));
console.log(
  removeDuplicates(["apple", "banana", "Apple", "Banana", "APPLE", "BANANA"])
);
console.log(removeDuplicates(["Car", "Bike", "car", "BIKE", "CAR", "bike"]));
console.log(removeDuplicates(["A", "B", "C", "a", "b", "c"]));
console.log(
  removeDuplicates([
    "apple",
    "banana",
    "carrot",
    "APPLE",
    "BANANA",
    "CARROT",
    "apple",
    "banana",
    "carrot",
  ])
);

console.log(
  removeDuplicates(["dog", "cat", "Dog", "CAT", "bird", "DOG", "BIRD"])
);
