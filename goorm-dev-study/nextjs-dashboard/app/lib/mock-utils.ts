import { Invoice, invoices } from "./mock-invoices";

export function filterInvoices(query: string): Invoice[] {
  return invoices.filter((invoice) =>
    invoice.customer.toLowerCase().includes(query.toLowerCase())
  );
}

export function paginateInvoices(
  data: Invoice[],
  page: number,
  perPage: number
): Invoice[] {
  const start = (page - 1) * perPage;
  return data.slice(start, start + perPage);
}
