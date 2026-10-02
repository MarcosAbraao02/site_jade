// Dados do cardápio (edite aqui).
// Cada produto tem 1 ou mais "opcoes" (tamanho/sabor). Com mais de uma, o card mostra seletor.
// "promo" (opcional) aparece como uma linha discreta no rodapé do card.
const CATEGORIAS = [
  { id: "taca", nome: "Taças e Travessas" },
  { id: "tortas", nome: "Tortas" },
  { id: "bombons", nome: "Bombons" },
  { id: "bolos", nome: "Bolos e Brownies" },
];

const PRODUTOS = [
  { cat: "taca", nome: "Banoffe", opcoes: [
    { rotulo: "Taça 1,25 L", preco: 110, img: "BANOFFE NA TAÇA 1.25 L.jpeg" },
    { rotulo: "Travessa 2 L", preco: 170, img: "BANOFFE NA TRAVESSA 2L.jpeg" },
  ] },
  { cat: "taca", nome: "Surpresa de Uva", opcoes: [
    { rotulo: "Taça 1,25 L", preco: 100, img: "SURPRESA DE UVA NA TAÇA.jpeg" },
    { rotulo: "Travessa 2 L", preco: 150, img: "SURPRESA DE UVA NA TRAVESSA 2L.jpeg" },
  ] },
  { cat: "taca", nome: "Surpresa de Morango", opcoes: [
    { rotulo: "Taça 1,25 L", preco: 150, img: "SURPRESA DE MORANGO NA TAÇA.jpeg" },
  ] },
  { cat: "taca", nome: "Mousse de Maracujá", opcoes: [
    { rotulo: "Travessa 2 L", preco: 150, img: "MOUSSE DE MARACUJÁ TRAVESSA 2L.jpeg" },
  ] },

  { cat: "tortas", nome: "Torta de Limão", opcoes: [
    { rotulo: "2 L", preco: 150, img: "TORTA DE LIMÃO 2L.jpeg" },
    { rotulo: "Massa amanteigada", preco: 170, img: "TORTA DE LIMÃO MASSA AMANTEIGADA.jpeg" },
  ] },

  { cat: "bombons", nome: "Bombom (unidade)", promo: { texto: "Combo 1 de cada", preco: 45 }, opcoes: [
    { rotulo: "Morango c/ chocolate", preco: 17, img: "BOMBOM DE MORANGO C CHOCOLATE UN.jpeg" },
    { rotulo: "Morango cravejado", preco: 17, img: "BOMBOM MORANGO CRAVEJADO UN.jpeg" },
    { rotulo: "Coxinha de brigadeiro c/ morango", preco: 17, img: "COXINHA BRIGADEIRO C MORANGO UN.jpeg" },
  ] },
  { cat: "bombons", nome: "Bombom de Travessa 2 L", opcoes: [
    { rotulo: "Morango", preco: 180, img: "BOMBOM DE TRAVESSA MORANGO 2L.jpeg" },
    { rotulo: "Morango c/ chocolate", preco: 200, img: "BOM BOM DE TRAVESSA MORANGO C CHOCOLATE 2L.jpeg" },
    { rotulo: "Morango cravejado", preco: 200, img: "BOMBOM DE TRAVESSA MORANGO CRAVEJADO 2L.jpeg" },
  ] },

  { cat: "bolos", nome: "Brownie", detalhe: "Brigadeiro, Casadinho, Prestígio e Ninho", opcoes: [
    { rotulo: "Unidade", preco: 10, img: "BROWNIE (VARIEDADES) UN.jpeg" },
  ] },
  { cat: "bolos", nome: "Bolo de Pote", opcoes: [
    { rotulo: "Ninho c/ morango", preco: 12, img: "BOLO DE POTE NINHO COM MORANGO MASSA DE CHOCOLATE.jpeg" },
    { rotulo: "Maracujá c/ chocolate", preco: 12, img: "BOLO DE POTE MARACUJA COM CHOCOLATE.jpeg" },
    { rotulo: "Prestígio", preco: 12, img: "BOLO DE POTE PRESTÍGIO.jpeg" },
  ] },
];

const brl =(n) => (n == null ? "Consulte" : "R$ " + n.toFixed(2).replace(".", ","));
