/**
 * 템플릿 리터럴 타입
 */

// 템플릿 리터럴 타입은 스트링 리터럴 타입들을 기반으로 특정 패턴을 갖는 문자열 타입들을 만드는 기능

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;
