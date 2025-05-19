export type Invoice = {
  id: number;
  customer: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
};

export const invoices: Invoice[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  customer: `Customer ${i + 1}`,
  amount: Math.floor(Math.random() * 1000) + 100,
  status: ["paid", "pending", "overdue"][i % 3] as
    | "paid"
    | "pending"
    | "overdue",
}));
