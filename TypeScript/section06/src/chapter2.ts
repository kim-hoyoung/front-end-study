/**
 * 접근 제어자
 * access modifier
 * => public, private, protected
 */
class Employee {
  // 하나의 타입으로도 작용할 수 있다.
  // 필드
  private name: string;
  public age: number;
  public position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  // 메서드
  work() {
    console.log("일함");
  }
}

const employee = new Employee("홍길동", 27, "developer");
//employee.name = "sksksk";
employee.age = 22;
employee.position = "dkdkd";
