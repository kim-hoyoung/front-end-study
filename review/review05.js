// if문 (if statement)

let temperature = 1;

if (temperature <= 0) {
  console.log("물이 언다.");
}

let myAge = 26;
let myGender = "male";

let callOlderBrother = "형";
let callOlderSister = "누나";
let callFriend = "친구";
let callYoungerSister = "여동생";
let callYoungerBrother = "남동생";

function whatShouldICallYou(yourAge, yourGender) {
  if (myAge === yourAge) {
    return callFriend;
  } else if (myAge > yourAge && myGender !== yourGender) {
    return callYoungerSister;
  } else if (myAge > yourAge && myGender === yourGender) {
    return callYoungerBrother;
  } else if (myAge < yourAge && myGender !== yourGender) {
    return callOlderSister;
  } else if (myAge < yourAge && myGender === yourGender) {
    return callOlderBrother;
  }
}

let result1 = whatShouldICallYou(25, "female");
let result2 = whatShouldICallYou(20, "male");
let result3 = whatShouldICallYou(26, "female");
let result4 = whatShouldICallYou(30, "male");
let result5 = whatShouldICallYou(31, "female");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

// switch문 (switch statment)

// switch (비교할_값) {
//   case 조건값_1:
//     동작부분;
//     break;
//   case 조건값_2:
//     동작부분;
//     break;
//   default:
//     동작부분;
// }

let myChoice = 2;

switch (myChoice) {
  case 1:
    console.log("토끼를 선택한 당신,");
    break;
  case 2:
    console.log("강아지를 선택한 당신,");
    break;

  default:
    console.log("1에서 4사이의 숫자를 선택해 주세요.");
}

// 예시
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

function checkPrice(grade) {
  switch (grade) {
    case "R":
      console.log(`${grade}석은 ${RPrice}만 원입니다.`);
      break;

    case "VIP":
      console.log(`${grade}석은 ${VIPPrice}만 원입니다.`);
      break;

    case "S":
      console.log(`${grade}석은 ${SPrice}만 원입니다.`);
      break;

    case "A":
      console.log(`${grade}석은 ${APrice}만 원입니다.`);
      break;

    default:
      console.log("VIP, R, S, A 중에서 하나를 선택해 주세요.");
  }
}

checkPrice("R");
checkPrice("VIP");
checkPrice("S");
checkPrice("A");
checkPrice("B");

// 반복문 (loop statement)

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

function printTriangle(height) {
  for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// 테스트 코드
console.log("높이: 1");
printTriangle(1);

console.log("높이: 3");
printTriangle(3);

console.log("높이: 5");
printTriangle(5);

// while문 (while statment)

// while (조건부분) {
//     동작부분
// }

let i = 1;

while (i <= 10) {
  console.log(`${i} 안녕!`);
  i++;
}

let l = 30;

while (l % 7 !== 0) {
  l++;
}

console.log(l);

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
