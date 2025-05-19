"use client";

import { useState } from "react";
import { Item } from "../lib/action-data";

interface EditFormProps {
  item: Item;
  action: (formData: FormData) => void;
}

export default function EditForm({ item, action }: EditFormProps) {
  const [name, setName] = useState(item.name);
  const [status, setStatus] = useState<"active" | "inactive">(item.status);

  // 우리가 formData를 넘겨받는 서버 액션 함수를 작성했기 때문에
  // <form> 요소에 action 속성을 추가하고 서버 액션 함수를 호출하면 됩니다.
  // <form action={action} /> -> 이 부분임
  return (
    <form action={action} className="flex flex-col gap-1 mb-2">
      <input type="hidden" name="id" value={item.id.toString()} />
      <input
        name="name"
        value={name}
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
      <button type="submit">💾 Update</button>
    </form>
  );
}
