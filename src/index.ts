function isDescending(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) continue;
    else return true;
  }
  return false;
}
export function merge(  collection1: number[],  collection2: number[],  collection3: number[]): number[] {
  console.log("✨ Step 1: Input collections");
  console.log("collection1 :", collection1);
  console.log("collection2 :", collection2);
  console.log("collection3 :", collection3);

  // Step 2: Reverse collection to ASC
  console.log("\n✨ Step 2: Reverse all collection to ASC")
  const inputs = [collection1, collection2, collection3];
  const newCollection = inputs.map((col, index) => {
    if (isDescending(col)) {
      const reversed = [...col].reverse();
      console.log(`collection${index + 1} is descending, reversed:`, reversed);
      return reversed;
    } else {
      console.log(`collection${index + 1} is ascending (no change):`, col);
      return col;
    }
  });

  // Step 3: Merge all arrays
  const merged = [...newCollection[0], ...newCollection[1], ...newCollection[2]];
  console.log("\n✨ Step 3: Merged array before sorting:", merged);

  // Step 4: Manual merge sort
  const sorted = mergeSort(merged);
  console.log("\n✨ Step 4: Final sorted array:", sorted);

  return sorted;
}

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return mergeArrays(left, right);
}

function mergeArrays(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let l = 0, r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }

  return result.concat(left.slice(l)).concat(right.slice(r));
}


const result = merge([1, 3, 5], [9, 6, 2], [0, 4, 8]);
console.log("✅ Sorted Result:", result);
