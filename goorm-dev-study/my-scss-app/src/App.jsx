import TeamCard from "./components/TeamCard/TeamCard";
import members from "./data/members";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      {members.map((member) => (
        <TeamCard
          name={member.name}
          role={member.role}
          image={member.image}
          level={member.level}
        />
      ))}
    </div>
  );
}
