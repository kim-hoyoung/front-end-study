// CommonJS 방식으로 받아오기
const moduleData = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 객체의 구조분해할당 방식으로 가져오기
const { add, sub } = require("./math");

// console.log(add(1, 2));
// console.log(sub(1, 2));

// Es 모듈 방식
import { add, sub } from "./math.js";
import multi from "./math.js";

// 이런식으로 합쳐서 사용할 수 있다.
//import multi, { add, sub } from "./math.js";

//console.log(multi(2, 2));

// 라이브러리 사용법

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
