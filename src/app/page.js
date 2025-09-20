import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <p>Loading...</p>
});

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Hero />
    </div>
  );
}
