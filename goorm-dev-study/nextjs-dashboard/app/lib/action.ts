"use server";

import { items, Item } from "./action-data";

// 우리가 받아올 formData의 값을 추출해야 합니다.
// 사용할 수 있는 메서드가 몇 가지 있지만 우리는 .get(name) 메서드를 사용해 보겠습니다.
export async function updateItem(formData: FormData) {
  const id = parseInt(formData.get("id") as string);
  const name = formData.get("name") as string;
  const status = formData.get("status") as "active" | "inactive";

  const item = items.find((item) => item.id === id);
  if (item) {
    item.name = name;
    item.status = status;
  }
}

export async function createItem(formData: FormData) {
  const name = formData.get("name") as string;
  const status = formData.get("status") as "active" | "inactive";

  const newItem: Item = {
    id: items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1,
    name,
    status,
  };
  items.push(newItem);
}

export async function deleteItem(formData: FormData) {
  const id = parseInt(formData.get("id") as string);
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
  }
}
