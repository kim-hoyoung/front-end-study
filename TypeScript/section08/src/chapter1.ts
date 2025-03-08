/**
 * 인덱스드 엑세스 타입
 */

// interface 는 객체타입 정의에만 특화되어있기 때문에 배열을 정의하긴 불편하다

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
  //인덱스라고 부름
  console.log(`${author.name}-${author.id}`);
}

const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "홍길동",
    age: 27,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
//type Tup3 = Tup[3];

type TupNum = Tup[number];
