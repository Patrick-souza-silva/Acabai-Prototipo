# 🍽️ Acabai — MVP React.js

Bem-vindo ao repositório do Acabai!  
Este projeto é um protótipo MVP desenvolvido em React.js, criado no contexto de uma startup com a proposta de futuramente evoluir para um aplicativo mobile.
O Acabai funciona como um “iFood de produtos próximos ao vencimento”, conectando consumidores e estabelecimentos para que alimentos com data de validade próxima possam ser vendidos mais rápido, com descontos atrativos, reduzindo o desperdício e ajudando no consumo consciente.

---

## Estrutura do MVP
```plaintext
Acabai MVP
├── INTRO
│   ├── Header e navegação
│   └── Filtros por cidade e bairro
├── CATÁLOGO
│   ├── Listagem de comércios locais
│   ├── Produtos com validade e desconto
│   └── Botão "Adicionar ao Carrinho"
├── CARRINHO
│   ├── Quantidade ajustável
│   ├── Remover produtos
│   └── Limite baseado no estoque (unit)
├── FINALIZAÇÃO
│   └── Envio direto do pedido via WhatsApp do comércio
└── FOOTER
    └── Marca "Desenvolvido por ACABAI"
```

---

## 🚀 Funcionalidades Atuais

- 📍 Pesquisa por cidade e bairro.
- 🛒 Carrinho de compras com atualização de quantidade e remoção de itens.
- 📦 Exibição de produtos com validade e preço original vs preço com desconto.
- 🔗 Integração com WhatsApp para envio do pedido ao comércio selecionado.
- 💻 Interface simples, responsiva e navegável no browser.

---

## 🛠️ Tecnologias Utilizadas

- React.js (Vite)
- useState e useEffect para estados e efeitos
- Componentização (Catalogo, Product, Nav, SectionHeader)
- CSS para estilização
- Integração WhatsApp (via wa.me)
