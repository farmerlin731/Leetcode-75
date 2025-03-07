const array2 = Array.from({ length: 5 }, () => Array(5).fill(5));

array2[1][1] = 888;
console.log(array2);

let n = 6;
const cMap = Array.from({ length: n }, () => []);
cMap[2].push(5);
console.log(cMap);
