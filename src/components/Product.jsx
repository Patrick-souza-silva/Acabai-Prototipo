import "../styles/product.css";
import { useState } from "react";

export default function Product({ title, validate, imageUrl, oldValue, value, onOpenModal, onAddToCart, unit }) {
    const fontFamily = "Inter, Roboto, Arial, sans-serif";

    return (
        <div id="div-product" style={{
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            padding: 16,
            marginBottom: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 320,
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily
        }}>
            <div style={{
                width: "100%",
                textAlign: "center",
                marginBottom: 10,
                fontFamily
            }}>
                <h3 style={{ marginBottom: 4, fontWeight: 700, fontFamily }}>{title}</h3>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    alignItems: "center",
                    fontFamily
                }}>
                    <span style={{
                        color: "#4caf50",
                        fontWeight: 500,
                        fontSize: 15,
                        background: "#eafbe7",
                        borderRadius: 4,
                        padding: "2px 8px",
                        width: "fit-content",
                        fontFamily
                    }}>
                        Data de validade: <strong>{validate}</strong>
                    </span>
                    {unit !== undefined && (
                        <span style={{
                            color: "#1976d2",
                            fontWeight: 500,
                            fontSize: 15,
                            background: "#e3f2fd",
                            borderRadius: 4,
                            padding: "2px 8px",
                            width: "fit-content",
                            fontFamily
                        }}>
                            Quantidade disponível: <strong>{unit}</strong>
                        </span>
                    )}
                </div>
            </div>
            <div id="div-img" style={{ marginBottom: 10 }}>
                <img src={imageUrl} alt={title} style={{
                    width: 90,
                    height: 90,
                    objectFit: "cover",
                    borderRadius: 8,
                    border: "1px solid #eee"
                }} />
            </div>
            <div style={{
                width: "90%",
                height: 1,
                background: "#eee",
                margin: "8px 0"
            }} />
            <div style={{ width: "100%", textAlign: "center", marginBottom: 8, fontFamily }}>
                <h5 style={{
                    textDecoration: "line-through",
                    color: "#888",
                    fontSize: 15,
                    marginBottom: 4,
                    fontWeight: 400,
                    fontFamily
                }}>
                    Valor sem desconto: {oldValue}
                </h5>
                <h4 style={{
                    color: "#ff8e4f",
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    marginBottom: 0,
                    marginTop: 0,
                    fontFamily
                }}>
                    Valor com desconto: {value}
                </h4>
            </div>
            <button
                onClick={onAddToCart}
                style={{
                    marginTop: 8,
                    background: "#ff8e4f",
                    color: "#fff",
                    border: "none",
                    width: '90%',
                    borderRadius: 6,
                    padding: "10px 18px",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    cursor: "pointer",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                    fontFamily
                }}
            >
                Adicionar ao Carrinho
            </button>
        </div>
    );
}