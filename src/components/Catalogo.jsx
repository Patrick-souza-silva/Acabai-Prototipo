"use client";

import { useState } from "react";
import "../styles/catalogo.css";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

export default function Catalogo({ categoria, children, isActive, numeroComercio, cidade, bairro }) {
    const [isMinimized, setIsMinimized] = useState(false);

    const toggleVisibility = () => {
        setIsMinimized(!isMinimized);
    };

    if (!isActive) {
        return (
            <section style={{ opacity: 0.4, pointerEvents: "none" }}>
                <h2>{categoria}</h2>
                <p style={{ color: "#c00" }}>Selecione produtos apenas deste comércio.</p>
            </section>
        );
    }

    return (
        <section id={categoria}>
            <div id="div-top">
                <h2>{categoria}</h2>
                <button onClick={toggleVisibility} id="toggle-button">
                    {isMinimized ? <HiChevronDown size={24} /> : <HiChevronUp size={24} />}
                </button>
            </div>
            <div style={{ fontSize: 14, color: "#555", marginBottom: 8 }}>
                Cidade: <strong>{cidade}</strong> | Bairro: <strong>{bairro}</strong>
            </div>
            <div id="div-section" className={isMinimized ? "collapsed" : "expanded"}>
                {children}
            </div>
        </section>
    );
}