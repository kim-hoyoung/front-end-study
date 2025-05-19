import { items } from "../lib/action-data";
import { createItem, updateItem, deleteItem } from "../lib/action";
import AddForm from "./add-form";
import EditForm from "./edit-form";
import DeleteForm from "./delete-form";

// 실제 서버 액션 함수가 아니기 때문에 변경 사항을 만들고 다른 탭을 눌렀다가 다시 돌아와봅시다.
export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Dashboard</h1>

      <AddForm action={createItem} />

      <table className="w-full border">
        <thead>
          <tr className="border-b">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Status</th>
            <th className="p-2">Edit</th>
            <th className="p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.status}</td>
              <td className="p-2">
                <EditForm item={item} action={updateItem} />
              </td>
              <td className="p-2">
                <DeleteForm id={item.id} action={deleteItem} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
