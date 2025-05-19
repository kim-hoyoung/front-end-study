/**
 * 클래스
 */

let studentA = {
  name: "김호영",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  //파스칼 표기법
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  // 메서드
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  } // 클래스 안에서는 "," 를 사용하지 않는다.
}

class StudentDeveloper extends Student {
  // 필드

  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programing() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함.`);
  }
}

const studentDeveloper = new StudentDeveloper("김호영", "B+", 27, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programing();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// student 인스턴스
// let studentB = new Student("홍길동", "A+", 27);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
