/**
 * 타입 단언  assertion
 */
type Person = {
  name: String;
  age: number;
};

let person = {} as Person;
person.name = "김호영";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string;
// 10은 number
// A는 NUMBER B는 String 즉 타입간 집합에 겹치는 부분이 없기 때문.
// unknown으로 단언하고 또 단언하면 오류가 나지 않긴 함.
// 이러한 다중단언을 하게 될 시 단언이 안되는 타입으로도 단언을 할 수 있게됨,, 이건 절대 좋은 방법이 아님.

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "김호영",
};

const len: number = post.author!.length;
// 물음표는 옵셔널 체이닝 널이거나 언디파인일 경우 .표시 로 접근하면 오류발생하니 "?" 을 붙여주는 연산자.
// 느낌표로 바꿔주면 Non Nulll 단언 연산자. NULL 이거나 UNDEFINED가 아닐거라고 얘기해주는 방식.

// 잠깐 눈으로 가리는 느낌이라 조심해서 확실할 때만 사용해야함.
