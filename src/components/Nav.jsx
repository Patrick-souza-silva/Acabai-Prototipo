import "../styles/nav.css";

export default function Nav({ activeSection, setActiveSection }) {
  const categories = [
    "Comercio 01",
    "Comercio 02",
  ];

  return (
    <nav>
      {categories.map((category) => (
        <a
          key={category}
          href={`#${category}`}
          className={activeSection === category ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection(category); // Define a seção ativa ao clicar
            document.getElementById(category)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {category}
        </a>
      ))}
    </nav>
  );
}