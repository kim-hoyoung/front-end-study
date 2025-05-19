import { filterInvoices, paginateInvoices } from "@/app/lib/mock-utils";

type Props = {
  query: string;
  currentPage: number;
  perPage: number;
};

export default function Table({ query, currentPage, perPage }: Props) {
  const filtered = filterInvoices(query);
  const paginated = paginateInvoices(filtered, currentPage, perPage);

  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {paginated.map((invoice) => (
          <tr key={invoice.id}>
            <td>{invoice.id}</td>
            <td>{invoice.customer}</td>
            <td>${invoice.amount}</td>
            <td>{invoice.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
