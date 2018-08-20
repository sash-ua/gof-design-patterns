export namespace QuickSort {
  const swap = (arr: Array<number>, idx1: number, idx2: number) => {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
  };
  const partition = (arr: Array<number>, p: number, r: number) => {
    let i = p - 1,
      j = p;
    for (; j < r; j++) {
      if (arr[j] <= arr[r]) {
        i += 1;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, r);
    return i + 1;
  };
  export const run = (arr: Array<number>, p: number, r: number) => {
    const arrLoc = arr.slice();
    const x = (arrL: Array<number>, pr: number, re: number) => {
      if (pr < re) {
        const q = partition(arrLoc, pr, re);
        x(arrL, pr, q - 1);
        x(arrL, q + 1, re);
      }
    };
    x(arrLoc, p, r);
    return arrLoc;
  };
}
