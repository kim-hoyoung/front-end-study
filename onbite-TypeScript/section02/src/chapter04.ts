// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "바보",
  nickname: "땅콩",
  birth: "1999-99-99",
  bio: "안녕하세요",
  location: "서울",
};

let user2: User = {
  id: 2,
  name: "바보1",
  nickname: "땅콩",
  birth: "1999-99-99",
  bio: "안녕하세요",
  location: "서울",
};

// 인덱스 시그니처
type countryCodes = {
  [key: string]: string;
};
let countryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type countryNumberCodes = {
  [key: string]: number;
  korea: number;
};
let countryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
