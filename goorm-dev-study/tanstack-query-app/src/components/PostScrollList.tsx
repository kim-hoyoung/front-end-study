import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { fetchPosts } from "../api/posts";

export default function PostScrollList() {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // 핵심: useInfiniteQuery의 타입 파라미터를 아래와 같이 명시
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    // 타입을 굳이 정의하자면: useInfiniteQuery<Post[], Error, Post[], [string], number>
    queryKey: ["posts-scroll"],
    queryFn: fetchPosts,
    initialPageParam: 1, // v5부터 필수값이니 반드시 작성합시다.
    getNextPageParam: (_lastPage, allPages) => {
      // 100개의 포스트가 있다고 가정 (jsonplaceholder는 100개)
      const nextPage = allPages.length + 1;
      return nextPage <= 10 ? nextPage : undefined;
    },
  });

  // IntersectionObserver로 스크롤 하단 감지
  useEffect(() => {
    if (!bottomRef.current || !hasNextPage) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );
    observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, [bottomRef, hasNextPage, fetchNextPage]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="space-y-4">
      {data?.pages.flat().map((post) => (
        <div key={post.id} className="p-4 border rounded shadow-sm bg-white">
          <h3 className="font-semibold text-lg">{post.title}</h3>
          <p className="text-sm text-gray-600">{post.body}</p>
        </div>
      ))}
      <div ref={bottomRef} className="h-10" />
      {isFetchingNextPage && <p>Loading more...</p>}
      {!hasNextPage && (
        <p className="text-center text-gray-400">No more posts</p>
      )}
    </div>
  );
}
