// Quiz 1. 영화 리뷰 정보 출력하기 (feat. 하얼빈 & 위키드)
// 목표: 영화 리뷰 정보가 담긴 객체를 매개변수로 받아 출력하는 함수 printMovieReview를 완성하세요

function printMovieReview({ title, releaseYear, reviewers }) {
  const [firstReviewers = "리뷰어 미정"] = reviewers;
  console.log(`제목 : ${title}`);
  console.log(`개봉 : ${releaseYear}`);
  console.log(`첫 번째 리뷰어 : ${firstReviewers}`);
}

printMovieReview({
  title: "하얼빈",
  releaseYear: 2024,
  reviewers: ["박정민", "김효빈", "이정환"],
});

printMovieReview({
  title: "위키드",
  releaseYear: 2024,
  reviewers: [],
});

// Quiz 2. 평균 성적 출력하기
// 목표: 학생들의 평균 성적을 출력합니다.

function printAvgScore(students) {
  // 각 학생 개체의 이름을 순회
  for (const student in students) {
    // 각 학생의 점수를 배열로 반환
    const scores = students[student].scores;

    // 각 학생의 점수를 더함

    let sum = 0;
    for (score of scores) {
      sum += score;
    }

    const avg = scores.length > 0 ? sum / scores.length : 0;

    console.log(`${student}: ${avg}`);
  }
}

printAvgScore({
  김호영: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});
