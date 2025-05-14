export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const c2_reversed = collection_2.slice().reverse();
    return mergeThreeSorted(collection_1, c2_reversed, collection_3);
  }
  
  function mergeTwoSorted(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i++]);
      } else {
        result.push(arr2[j++]);
      }
    }
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
  }
  
  function mergeThreeSorted(a: number[], b: number[], c: number[]): number[] {
    return mergeTwoSorted(mergeTwoSorted(a, b), c);
  }
  