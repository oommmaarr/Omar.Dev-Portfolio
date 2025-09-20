import dynamic from "next/dynamic";

const ContactPage = dynamic(() => import("@/components/ContactMe"), {
  loading: () => <p>Loading contact form...</p>, // Placeholder مؤقت
});

export default function Contact() {
  return <ContactPage />;
}
