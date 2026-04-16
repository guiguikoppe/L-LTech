export default function Header() {
  return `
    <header class="main-header">
      <h1 style="color: var(--primary); cursor:pointer" onclick="showPage('home')">
        ⅃L Tech
      </h1>
      <nav>
        <button class="nav-btn" onclick="showPage('home')">Home</button>
        <button class="nav-btn" onclick="showPage('produtos')">Produtos</button>
        <button class="nav-btn" onclick="showPage('servicos')">Serviços</button>
        <button class="nav-btn" onclick="showPage('antes')">Antes/Depois</button>
        <button class="nav-btn" onclick="showPage('contato')">Contato</button>
      </nav>
    </header>
  `
}