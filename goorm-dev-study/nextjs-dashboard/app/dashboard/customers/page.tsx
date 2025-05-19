import React from "react";

async function fetchCustomers() {
  try {
    console.log("Fetching revenue data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await fetch("https://jsonplaceholder.typicode.com/users");

    console.log("Data fetch completed after 3 seconds.");

    return data.json();
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export default async function Page() {
  const customers = await fetchCustomers(); // 그냥 바로 불러올 수 있음

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Customers</h1>
      <ul>
        {customers.map((customer: { id: number; name: string }) => (
          <li key={customer.id}>- {customer.name}</li>
        ))}
      </ul>
    </div>
  );
}
