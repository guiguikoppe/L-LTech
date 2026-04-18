export default function Header() {
  return `
    <header class="main-header">
      
      <h1 class="logo">JL Tech</h1>

      <nav class="nav" id="nav">
        <button class="nav-btn" onclick="showPage('home')">Home</button>
        <button class="nav-btn" onclick="showPage('produtos')">Produtos</button>
        <button class="nav-btn" onclick="showPage('servicos')">Serviços</button>
        <button class="nav-btn" onclick="showPage('antes')">Antes/Depois</button>
        <button class="nav-btn" onclick="showPage('contato')">Contato</button>
      </nav>
      
      <div class="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </header>
  `;
}