"use client";

import { useState } from "react";

interface AddFormProps {
  action: (formData: FormData) => void;
}

export default function AddForm({ action }: AddFormProps) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"active" | "inactive">("active");

  return (
    <form action={action} className="flex flex-col gap-2 mb-6">
      <h2 className="font-bold">➕ Add New Item</h2>
      <input
        name="name"
        value={name}
        placeholder="Item Name"
        onChange={(e) => setName(e.target.value)}
      />
      <select
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value as "active" | "inactive")}
      >
        <option value="active">active</option>
        <option value="inactive">inactive</option>
      </select>
      <button type="submit" className="bg-blue-200 w-fit p-2 rounded">
        ➕ Add
      </button>
    </form>
  );
}
