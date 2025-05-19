"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce"; // 라이브러리 사용

export default function Search({ placeholder }: { placeholder: string }) {
  const router = useRouter();
  const pathname = usePathname();

  // 여기서 사용한 `URLSearchParams` 는 URL 쿼리 매개변수를 조작하는 데
  // 유용한 메서드를 제공하는 웹 API입니다.
  // 복잡한 문자열 리터럴을 생성하는 대신,
  // ?page=1&query=a와 같이 매개변수 문자열을 가져오는 데 사용할 수 있습니다.
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      // set = 사용자 입력에 따라 params 문자열을 설정합니다.
      params.set("query", term);
      params.set("page", "1");
    } else {
      // delete = 입력 내용이 비어 있으면 삭제합니다.
      params.delete("query");
    }
    // ${pathname}은 현재 경로이며, 이 경우에는 "/dashboard/invoices"입니다.
    router.push(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      type="text"
      placeholder={placeholder}
      defaultValue={searchParams.get("query") || ""}
      onChange={(e) => handleSearch(e.target.value)}
      className="border px-2 py-1"
    />
  );
}
