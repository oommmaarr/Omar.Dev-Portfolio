import dynamic from "next/dynamic";

const ShowSkills2 = dynamic(() => import("@/components/ShowSkills"), {
  loading: () => <p>Loading skills...</p>, // Placeholder مؤقت
});

export default function ShowSkills() {
  return (
    <div>
      <ShowSkills2 />
    </div>
  );
}
