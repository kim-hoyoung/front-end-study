// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// CommonJS 모듈방식
// module.exports = {
//   add,
//   sub,
// };

// Es 모듈 방식
export { add, sub };

export default function multiply(a, b) {
  return a * b;
}
