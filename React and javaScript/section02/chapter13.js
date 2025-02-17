// Promise 란?

// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체

// Promise 안에 setTimeout가 있다고 보면 된다
// Promise의 효능 , 비동지 작업 실행, 상태 관리, 결과 저장, 병렬 실행, 다시 실행... 등등 해주는 그런 객체

// Promise 는 대기, 성공, 실패 이렇게 3가지 상태로 나눔

// 대기 (Pending) (아직 작업이 완료되지 않은 상태)
// 성공 (Fulfilled) (비동기 작업이 성공적으로 마무리 된 상태)
// 살패 (Rejected) (비동기 작업이 실패한 상태) ~~ 네트워크 에러, 잘못 작성된 코드

// 대기 -> 성공 resolve(해결)
// 대기 -> 실패 reject(거부)

// ex) 유튜브 보기 전 로딩상태가 대기(Pending) 시청 가능 상태 성공(Fulfilled) 시청 불가능 실패(Rejected)

const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // 프로미스 객체가 생성됨과 동시에 자동으로 비동기 작업을 실행해줌.
  // executor

  setTimeout(() => {
    console.log("안녕");
    //resolve("안녕");
    reject("왜 실패했는지 이유..");
  }, 2000);
});

setTimeout(() => {
  console.log(promise);
}, 3000);

//-------------------------------------------------------------
const promise_ex = new Promise((resolve, reject) => {
  // executor

  setTimeout(() => {
    const num = null;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});

// then() 메서드 Promise의 비동기 작업이 성공할 때만 실행됨
// then() 메서드는 Promise를 한 번 더 반환한다.
// 객체를 그대로 반환. 그렇기 때문에 바로 뒤에 catch 메서드를 넣을 수 있음.

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// 위의 Promise Chaining 이라고 불림

// catch() 메서드 Promise의 비동기 작업이 실패됐을 때만 실행.

promise.catch((error) => {
  console.log(error);
});

//------------------------------------------------

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);

    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
