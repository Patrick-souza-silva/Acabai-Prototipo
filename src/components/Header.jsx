"use client"

import React, { useState, useEffect } from "react";
import "../styles/header.css";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={isScrolled ? "scrolled" : ""}>
            <h1>sfsfsdfs</h1>
        </header>
    );
}