import Home from './pages/Home.js'
import Produtos from './pages/Produtos.js'
import Servicos from './pages/Servicos.js'
import AntesDepois from './pages/AntesDepois.js'
import Contato from './pages/Contato.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function showPage(page) {
    const pages = {
        home: Home,
        produtos: Produtos,
        servicos: Servicos,
        antes: AntesDepois,
        contato: Contato
    }

    const content = document.getElementById('content-root')

    if (pages[page]) {
        content.innerHTML = pages[page]()
    } else {
        content.innerHTML = Home()
    }

    window.scrollTo(0, 0)
}

// deixa global
window.showPage = showPage

// 🔥 INICIALIZAÇÃO
window.onload = () => {

    // HEADER + FOOTER
    document.getElementById('header-root').innerHTML = Header()
    document.getElementById('footer-root').innerHTML = Footer()

    // página inicial
    showPage('home')

    // 🍔 MENU HAMBURGUER
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    if (!hamburger || !nav) return;

    // abrir/fechar menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // 🔥 FECHAR AO CLICAR EM QUALQUER ITEM
    const navButtons = nav.querySelectorAll('.nav-btn');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.getAttribute('data-page');

            if (page) showPage(page);

            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
};

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});