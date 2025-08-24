import SectionHeader from "../src/components/SectionHeader";
import Nav from "../src/components/Nav";
import Catalogo from "../src/components/Catalogo";
import "../src/styles/app.css";
import { useEffect, useState } from "react";
import Product from "./components/Product";
import cafeImg from "../public/cafe.jpeg";
import boloImg from "../public/bolo.jpeg";
import bebidaImg from "../public/bebida.jpeg";
import oleo from "../public/oleo.jpeg";

function App() {
  const [activeSection, setActiveSection] = useState("Cafés");
  const [cart, setCart] = useState([]);
  const [activeComercio, setActiveComercio] = useState(null); // novo estado
  const [numeroComercio, setNumeroComercio] = useState(null); // novo estado
  const [searchCidade, setSearchCidade] = useState("");
  const [searchBairro, setSearchBairro] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "Cafés"; 

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id; 
        }
      });

      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  function addToCart(product, comercio, numero) {
    setActiveComercio(comercio);
    setNumeroComercio(numero);

    setCart(prev => {
      const idx = prev.findIndex(
        item => item.productId === product.productId // compare pelo id único
      );
      if (idx !== -1) {
        const updated = [...prev];
        const newQty = updated[idx].qty + 1;
        updated[idx].qty = newQty > updated[idx].unit ? updated[idx].unit : newQty;
        return updated;
      } else {
        return [...prev, { ...product, qty: 1, unit: product.unit, productId: product.productId }];
      }
    });
  }

  function updateCartQty(index, newQty) {
    setCart(prev =>
      prev.map((item, i) =>
        i === index
          ? { ...item, qty: newQty > item.unit ? item.unit : newQty < 1 ? 1 : newQty }
          : item
      )
    );
  }

  function removeFromCart(index) {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    if (newCart.length === 0) {
      setActiveComercio(null);
      setNumeroComercio(null);
    }
  }

  function sendOrderWhatsApp() {
    if (cart.length === 0 || !numeroComercio) return;
    const items = cart.map((item, idx) => `${idx + 1}. ${item.title} - ${item.value}`).join('\n');
    const msg = encodeURIComponent(`Olá, vim através da Acabai, segue meu pedido: \n${items}`);
    window.open(`https://wa.me/${numeroComercio}?text=${msg}`, "_blank");
  }

  // Função para verificar se o catálogo deve ser exibido
  function matchCatalogo(cidade, bairro) {
    const cidadeMatch = searchCidade === "" || cidade.toLowerCase().includes(searchCidade.toLowerCase());
    const bairroMatch = searchBairro === "" || bairro.toLowerCase().includes(searchBairro.toLowerCase());
    return cidadeMatch && bairroMatch;
  }

  return (
     <>
      <SectionHeader />
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {/* Barra de pesquisa estilizada para mobile */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginBottom: 18,
            maxWidth: 340,
            margin: "0 auto",
            padding: "12px 10px",
            background: "#f8f8f8",
            borderRadius: 10,
            boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
            border: "1px solid #e0e0e0"
          }}
        >
          <input
            type="text"
            placeholder="Pesquisar cidade"
            value={searchCidade}
            onChange={e => setSearchCidade(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 12px",
              borderRadius: 6,
              border: "1px solid #bdbdbd",
              fontSize: 16,
              background: "#fff",
              boxSizing: "border-box",
              fontFamily: "Inter, Roboto, Arial, sans-serif",
              outline: "none"
            }}
          />
          <input
            type="text"
            placeholder="Pesquisar bairro"
            value={searchBairro}
            onChange={e => setSearchBairro(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 12px",
              borderRadius: 6,
              border: "1px solid #bdbdbd",
              fontSize: 16,
              background: "#fff",
              boxSizing: "border-box",
              fontFamily: "Inter, Roboto, Arial, sans-serif",
              outline: "none"
            }}
          />
        </div>
        {/* Catálogo 01 */}
        {matchCatalogo("Francisco Beltrão", "Centro") && (
          <Catalogo
            categoria="Comercio 01"
            cidade="Francisco Beltrão"
            bairro="Centro"
            isActive={activeComercio === null || activeComercio === "Comercio 01"}
            numeroComercio="554699237690"
          >
            <Product
              title="Café Aleatório"
              validate="25/08/2025"  
              oldValue="R$ 15,45"
              value="R$ 10,45"
              unit={10}
              imageUrl={cafeImg}
              productId='5'
              onAddToCart={() => addToCart({
                title: "Café Aleatório",
                value: "R$ 10,45",
                unit: 10,
                productId: '5'
              }, "Comercio 01", "554699237690")}
            />
            <Product
              title="Bolo Aleatório"
              validate="25/08/2025"
              value="R$ 4,45"
              oldValue="R$ 2,45"
              unit={10}
              imageUrl={boloImg}
              productId='6'
              onAddToCart={() => addToCart({
                title: "Bolo Aleatório",
                value: "R$ 2,45",
                unit: 10,
                productId: '6'
              }, "Comercio 01", "554699237690")}
            />
          </Catalogo>
        )}
        {/* Catálogo 02 */}
        {matchCatalogo("Francisco Beltrão", "Industrial") && (
          <Catalogo
            categoria="Comercio 02"
            cidade="Francisco Beltrão"
            bairro="Industrial"
            isActive={activeComercio === null || activeComercio === "Comercio 02"}
            numeroComercio="5546999011726"
          >
            <Product
              title="Cerveja Aleatória"
              validate="25/08/2025"
              value="R$ 5,45"
              oldValue="R$ 3,45"
              imageUrl={bebidaImg}
              unit={10}
              productId={'11'}
              onAddToCart={() => addToCart({
                title: "Cerveja Aleatória",
                value: "R$ 3,45",
                unit: 10,
                productId: '11'
              }, "Comercio 02", "5546999011726")}
            />
            <Product
              title="Óleo Aleatório"
              validate="25/08/2025"
              value="R$ 7,65"
              oldValue="R$ 4,45"
              unit={10}
              imageUrl={oleo}
              productId={'12'}
              onAddToCart={() => addToCart({
                title: "Óleo Aleatório",
                value: "R$ 3,45",
                unit: 10,
                productId: '12'
              }, "Comercio 02", "5546999011726")}
            />
          </Catalogo>
        )}
        <button
          onClick={sendOrderWhatsApp}
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            background: "#25d366",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "16px 28px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            cursor: cart.length === 0 ? "not-allowed" : "pointer",
            opacity: cart.length === 0 ? 0.6 : 1,
            zIndex: 2000,
          }}
          disabled={cart.length === 0}
        >
          Enviar pedido ({cart.length})
        </button>
        {cart.length > 0 && (
          <div style={{
            position: "fixed",
            bottom: 80,
            right: 24,
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: 8,
            padding: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            maxWidth: 340, // aumentado de 260 para 340
            zIndex: 2000,
          }}>
            <strong>Carrinho:</strong>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {cart.map((item, idx) => (
                <li key={idx} style={{ marginBottom: 4, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span>
                    {item.title} - {item.value}
                    <input
                      type="number"
                      min={1}
                      max={item.unit}
                      value={item.qty}
                      onChange={e => updateCartQty(idx, parseInt(e.target.value, 10))}
                      style={{
                        width: 40,
                        marginLeft: 8,
                        padding: "2px 6px",
                        borderRadius: 4,
                        border: "1px solid #ccc",
                        fontSize: 15,
                        textAlign: "center"
                      }}
                      title={`Máximo: ${item.unit}`}
                    />
                  </span>
                  <button
                    onClick={() => removeFromCart(idx)}
                    style={{
                      marginLeft: 8,
                      color: "#fff",
                      background: "#c00",
                      border: "none",
                      borderRadius: "50%",
                      cursor: "pointer",
                      fontSize: 18,
                      width: 28,
                      height: 28,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background 0.2s",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.10)"
                    }}
                    onMouseOver={e => e.currentTarget.style.background = "#a00"}
                    onMouseOut={e => e.currentTarget.style.background = "#c00"}
                    aria-label="Remover produto"
                    title="Remover produto"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <footer>
          <h3>Desenvolvido por <a rel="noopener noreferrer">ACABAI</a></h3>
        </footer>
      </main>
    </>
  )
}

export default App
