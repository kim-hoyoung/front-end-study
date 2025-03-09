/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입.
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  // K에 할당할 수 있는 타입은 무조건 T로 들어오는 객체 타입의 키값들을 추출한 유니온 타입에 서브타입만 들어올 수 있다.
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // ('title' | 'content') extends ('title' | 'tags' | 'content' | 'thumbnailURL')
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL', title'>

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V> 실무에서 굉장히 많이 쓰이는 타입
 */

// type ThumbnailURLLegacy = {
//   large: {
//     url: string;
//   };
//   medium: {
//     url: string;
//   };
//   small: {
//     url: string;
//   };
//   watch: {
//     url: string;
//   };
// };

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
