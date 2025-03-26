const students = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 90 },
];

const updatedScores = students.map((student) => {
  return {
    ...student,
    score: student.score + 5,
  };
});

const totalScore = updatedScores.reduce((sum, student) => {
  return sum + student.score;
}, 0);

const averageScore = Math.round(totalScore / updatedScores.length);

console.log(updatedScores); // 점수가 5점씩 오른 새 배열
/*
[
  { name: "Alice", score: 85 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 95 }
]
*/

console.log(averageScore); // 87 -> 평균 점수는 반올림 해주세요.
