import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <p>Loading projects...</p>, // Placeholder مؤقت
});

export default function Page() {
  return <Projects />;
}
