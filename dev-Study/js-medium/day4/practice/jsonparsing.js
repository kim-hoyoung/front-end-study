function parseJSON(jsonString) {
  try {
    const data = JSON.parse(jsonString);

    console.log("JSON 파싱 성공:", data);
    return data;
  } catch (error) {
    console.error("잘못된 JSON 데이터입니다.");
  } finally {
    console.log("데이터 파싱 시도 완료");
  }
}

// JSON 데이터에서 특정 키 값을 찾아 반환하는 함수 작성하기
function parseJSONWithKey(jsonString, key) {
  try {
    const data = JSON.parse(jsonString);

    console.log(`"예상 출력: ${data[key]} 값: "`);
    return data;
  } catch (error) {
    console.error("잘못된 JSON 데이터입니다.");
  } finally {
    console.log("-> 데이터 파싱 시도 완료");
  }
}
