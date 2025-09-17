import CardNav from "@/components/CardNav";
export default function Navbar (){
    const items = [
    {
      label: "Skills",

      textColor: "#fff",
      borderColor: "#ff6b35",
      links: [
        { label: "Show Skills", ariaLabel: "Show Skills" , href : "/ShowSkills" },
      ]
    },
    {
      label: "Experience", 
      textColor: "#fff",
      borderColor: "#ff7d47",
      links: [
        { label: "Experience", ariaLabel: "Show Experience" , href : "/Experience"},
      ]
    },
    {
      label: "Projects", 
      textColor: "#fff",
      borderColor: "#ff8c42",
      links: [
        { label: "Show Projects", ariaLabel: "All Projects", href : "/Projects" }
      ]
    },
    {
      label: "Contact",
      textColor: "#fff",
      borderColor: "#ffa652",
      links: [
        { label: "Email", ariaLabel: "Email us" ,href : "/ShowSkills"},
        { label: "Facebook", ariaLabel: "Facebook",href : "/ShowSkills" },
        { label: "Whatsapp", ariaLabel: "Whatsapp" ,href : "/ShowSkills"},
        { label: "LinkedIn", ariaLabel: "LinkedIn" ,href : "/ShowSkills"}
      ]
    }
  ];
    return (
        <div>
        <CardNav
        logoAlt="Omar.Dev"
        items={items}
        baseColor="transparent"
        menuColor="#fff"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        />
        </div>
    )
}