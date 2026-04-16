export default function Produtos() {

  const listaProdutos = [
    { nome: "PS5 Digital Seminovo", preco: "3.200", tag: "REVISADO" },
    { nome: "SSD NVMe 1TB", preco: "450", tag: "NOVO" }
  ];

  const cards = listaProdutos.map(p => `
    <div class="card">
      <small style="color:var(--primary)">${p.tag}</small>
      <h3>${p.nome}</h3>
      <p>R$ ${p.preco}</p>
      <button class="btn-cta" style="margin-top:10px">Comprar</button>
    </div>
  `).join('');

  return `
    <section class="container">
      <h2 class="title">Estoque Disponível</h2>
      <div class="grid grid-3">${cards}</div>
    </section>
  `
}