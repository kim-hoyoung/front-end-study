// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 1 + 2 * 10; //곱셈이 순서가 더 높기 때문에 곱셈 먼저 연산된다
// 소괄호 묶어서 계산도 가능함.

// 3. 복합 대입 연산자
let num3 = 10;
num3 += 20;
num3 -= 20;
num3 *= 20;
num3 /= 20;
num3 %= 20;

// 4. 증감 연산자
let num4 = 10;
num4++; // 후위 연산
++num4; // 전위 연산

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

// 6. 비교 연산자
let comp1 = 1 === 2; // 두 개 만 써도 가능은 하지만 값의 자료형 까지 비교하진 못함.
let comp2 = 1 !== 2;
let comp3 = 2 > 1;
