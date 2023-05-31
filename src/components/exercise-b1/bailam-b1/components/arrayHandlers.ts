export function countChiaHetCho3(numbers: number[]): number {
  // Làm Bài Tại Đây
  let newNumbers = numbers.filter(item => item % 3 === 0);
  // console.log(newNumbers);
  return newNumbers.length;
}

export function sum(numbers: number[]): number {
  // Làm Bài Tại Đây
  return numbers.reduce((obj,value) => {
    return obj + value
  },0);
}

export function hasNumber10(numbers: number[]): boolean {
  // Làm Bài Tại Đây
  return numbers.includes(10);
}

export function filterChiaHetCho7(numbers: number[]): number[] {
  // Làm Bài Tại Đây
  return numbers.filter((item,index) => item == 0 ? false : item % 7 === 0 ? true : false);
}
