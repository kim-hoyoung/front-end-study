// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date("1999-01-20/10:10:10"); //. , / , - 로 구분해서 이용 가능
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지 의미하는 숫자값
// 1970년 00시 00분 00초는 "협정세계시" 라고 UTC라고 부른다.

let ts1 = date1.getTime(); // UTC부터 지금까지 몇 초가 지났는지 출력해줌
console.log(ts1);

let date4 = new Date(ts1); // 인수로 타임스탬프 값을 전달하면 타임스탬프 값으로 날짜 계산해서 생성된다.
console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

// JavaScript의 월은 0으로 시작하게 된다.

// 4. 시간 수정하기
date1.setFullYear(2024);
date1.setMonth(2); // 3월
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(29);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기. (시 분 초 제외하고 날짜만 출력)
console.log(date1.toDateString()); // 시간 제외
console.log(date1.toLocaleString()); // 2024. 3. 30. 오후 11:59:29 <-- 이런식(한국식)으로 출력됨.
