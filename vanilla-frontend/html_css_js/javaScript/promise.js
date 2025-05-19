// 동기적 처리와 비동기적 처리
// Syncronous (동기) : 요청을 보낸 후, 해당 요청의 응답을 받아야 다음동작 실행 ( 직렬 )
// Asynchronous (비동기) : 요청을 보낸 후, 응답과 관계없이 다음 동작을 실행 ( 병렬 )
// JavaScript는 동기적 처리가 기본

// 비동기적 처리의 예시
// 오래 걸리는 기능 비동기로 처리
// Rest AP 요청, 파일/데이터베이스 처리, 타이머, 암호화/복호화 등등

// 비동기 처리 예 (setTimeout)
console.log("hi");
setTimeout(() => {
  console.log("my name is hoyoung");
}, 1000);

console.log("kim hoyoung");

console.log("-----------------------");

// 비동기 처리의 문제점은,Rest API 를 호출해서 결과 값을 받아서, 이를 기반으로 코드를 실행하는 경우ㅡ
// 해당 함수 호출 후, 결과값을 받지 않은 채로, 다음 코드가 실행되면, 전체 코드 실행에 문제가 발생됨.
// 이를 처리하개 위해 콜백함수를 사용한다.

// 콜백 함수 (callback)
console.log("hi");
function desc(callback) {
  setTimeout(() => {
    console.log("my name is hoyoung");
    callback();
  }, 1500);
}

function desc2() {
  console.log("gkkgkgkggk");
}
desc(desc2);

// Promise : 콜백함수의 단점을 극복하기 위해 제안됨.

const exPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = 8;
    if (num > 9) {
      resolve(num);
    } else {
      reject("error");
    }
  }, 4000);
});

exPromise
  .then(
    (item) => {
      console.log("success", item);
    },
    (err) => {
      console.log("error", err);
    }
  )
  .then(
    // then 이라는 메소드를 써준 후 promise 내부에서 동기적으로 이어간다
    () => {
      console.log("promise 작동하는지 확인");
    },
    () => {
      console.log("error2");
    }
  );

// promise의 3가지 상태 (states)
// 1. Pending(대기) : 비동기 처리가 아직 실행되지 않은 초기상태
// 2. Fulfilled(이행) : 비동기 처리가 성공적으로 완료된 상태
// 3. Rejected(실패) : 비동기 처리가 실패한 상태

// catch 메서드
// 예외상황을 처리할 때 사용함..
/*
.then(()=>{
  })
.catch((error)=>{
  })
*/

// chaining, throw ( 사용자 정의 예외를 던질 때 사용한다 )
// throw new Error('에러 메시지');
// chaining 처럼 여러 then을 사용할 땐 catch 문구는 맨 마지막에 선언하는게 원칙

// chainingrhk return
// return 값을 넘겨주면 then의 다음 인자 로 넘겨지게 됨.

// finally (default 구문 // 무조건적으로 실행해야 하는 구문,)
// throw 로 인한 예외사항이 나타나면 정상 then -> finally -> error

// promise.all = 동기화 처리할 Promise를 묶어서 한 번에 실행.

// Promise.race 여러 함수 중, 제일 빠르게 실행완료된 함수만 then 구문을 실행
