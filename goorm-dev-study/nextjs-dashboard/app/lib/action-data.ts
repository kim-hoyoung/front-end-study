export interface Item {
  id: number;
  name: string;
  status: "active" | "inactive";
}

// 가짜 메모리 데이터
export let items: Item[] = [
  { id: 1, name: "Item One", status: "active" },
  { id: 2, name: "Item Two", status: "inactive" },
  { id: 3, name: "Item Three", status: "active" },
];
