import dynamic from "next/dynamic";

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <p>Loading experience...</p>, // Placeholder مؤقت
});

export default function ExperiencePage() {
  return (
    <div>
      <Experience />
    </div>
  );
}
