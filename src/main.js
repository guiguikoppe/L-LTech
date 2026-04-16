import Home from './pages/Home.js'
import Produtos from './pages/Produtos.js'
import Servicos from './pages/Servicos.js'
import AntesDepois from './pages/AntesDepois.js'
import Contato from './pages/Contato.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

// Função para trocar páginas
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

// deixa global (pra funcionar nos botões)
window.showPage = showPage

// inicialização
window.onload = () => {
    document.getElementById('header-root').innerHTML = Header()
    document.getElementById('footer-root').innerHTML = Footer()
    showPage('home')
}