interface DeleteFormProps {
  id: number;
  action: (formData: FormData) => void;
}

export default function DeleteForm({ id, action }: DeleteFormProps) {
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id.toString()} />
      <button type="submit" className="text-red-500">
        🗑 Delete
      </button>
    </form>
  );
}
