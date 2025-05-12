import { useState } from "react";
import TeamCard from "../components/TeamCard";
import members from "../data/members";

const roles = ["All", "Frontend", "Backend", "Design"];

export default function Home() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? members : members.filter((m) => m.role === filter);

  return (
    <section className="p-6">
      <div className="flex gap-3 mb-4">
        {roles.map((role) => (
          <button
            key={role}
            className={`cursor-pointer  px-4 py-2 rounded border ${
              filter === role
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white hover:bg-blue-200 dark:bg-zinc-700"
            }`}
            onClick={() => setFilter(role)}
          >
            {role}
          </button>
        ))}
      </div>
      {/* 반응형을 위해 md, lg 를 사용하겠습니다. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
