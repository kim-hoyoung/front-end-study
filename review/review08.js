// Date 객체

let myDate0 = new Date();

console.log(myDate0);

// new Date ( 특정한 값 ) ;
let myDate = new Date(1000);
console.log(myDate);

// new Date("문자열");
// new Date("YYYY-MM-DD")
let myDate2 = new Date("2017-05-18");

// new Date('YYYY-MM-DDThh:mm:ss')
let myDate3 = new Date("2017-05-18T19:11:16");

console.log(myDate2);
console.log(myDate3);

// new Date(값, 값, 값);

// new Date(year, month, date, hours, minutes, seconsd, ms)
let myDate4 = new Date(2024, 4, 18, 19, 11, 16);
// month는 0부터 시작함 1월은 0 2월은 1
console.log(myDate4);

// Date.getTime()
let myDate5 = new Date(2024, 4, 18, 19, 11, 16);
console.log(myDate5.getTime());
// myDate객체가 1970년 1월 1일 부터 몇 밀리초 지났는지,
// 타임 스태프라는 메서드

// 요일은 0부터 6까지 요일의 수가 있음.
