import { filterInvoices } from "@/app/lib/mock-utils";
import Pagination from "@/app/ui/invoices/pagination";
import Table from "@/app/ui/invoices/table";
import Search from "@/app/ui/search";

// 우리는 notFound 페이지로 보내버리기 위해 next/navigation 을 호출하면 됩니다.
import { notFound } from "next/navigation";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const query = searchParams.query || "";
  const currentPage = parseInt(searchParams.page || "1", 10);
  const perPage = 10;

  const filtered = filterInvoices(query);
  const totalPages = Math.ceil(filtered.length / perPage);

  // 가짜로 데이터 없다고 만들어서 notFound를 호출할게요.
  let isNotFound = false;
  if (!isNotFound) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Invoices</h1>
      <Search placeholder="Search invoices..." />
      <Table query={query} currentPage={currentPage} perPage={perPage} />
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
