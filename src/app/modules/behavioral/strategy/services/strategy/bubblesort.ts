export namespace BubbleSort {
  const swap = (arr: Array<number>, idx1: number, idx2: number) => {
    const B = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = B;
    return arr;
  };

  export const run = (unsorted: Array<number>) => {
    const arrLoc: Array<number> = unsorted.slice(),
      l = arrLoc.length;
    const bubbleSort = (arr: Array<number>) => {
      let f = 0;
      for (let i = 0; i < l; i++) {
        if (arr[i] > arr[i + 1] && arr[i + 1] !== undefined) {
          swap(arrLoc, i, i + 1);
          f = 1;
        }
      }
      if (f !== 0) {
        bubbleSort(arrLoc);
      }
    };
    bubbleSort(arrLoc);
    return arrLoc;
  };
}
