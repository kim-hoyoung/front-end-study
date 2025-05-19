"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

type Props = {
  totalPages: number;
  currentPage: number;
};

export default function Pagination({ totalPages, currentPage }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex gap-2 mt-4">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => router.push(createPageLink(i + 1))}
          className={`px-3 py-1 border ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
