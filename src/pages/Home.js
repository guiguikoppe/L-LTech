export default function Home() {
  return `
    <section>

      <!-- HERO / BANNER -->
      <div style="
        background: linear-gradient(135deg, #5f00ff, #2a0050);
        padding: 80px 20px;
        text-align: center;
        color: white;
      ">
        <h1 style="font-size:3rem; margin-bottom:10px;">
          ⅃L Tech 
        </h1>

        <p style="max-width:600px;margin:auto; opacity:0.9;">
          Especialistas em manutenção de consoles e PCs Gamer.
          Performance, qualidade e confiança em cada detalhe.
        </p>

        <button class="btn-cta" style="margin-top:25px;" onclick="showPage('contato')">
          Solicitar orçamento
        </button>
      </div>

      <div class="container">

        <!-- SOBRE / QUEM SOMOS -->
        <div class="card" style="margin-top:60px;">
          <h2 class="title">Quem somos</h2>
          <p class="text-muted">
            A ⅃L Tech nasceu da paixão por tecnologia e desempenho. Fundada por dois técnicos
            especializados, nosso foco é oferecer soluções de alta qualidade para gamers e usuários exigentes.
          </p>

          <p class="text-muted">
            Trabalhamos com manutenção avançada, upgrades e otimizações, sempre buscando
            o máximo desempenho e durabilidade para cada equipamento.
          </p>
        </div>

        <!-- DIFERENCIAIS -->
        <div class="grid grid-3" style="margin-top:60px;">
          <div class="card">
            <h3> Diagnóstico Profissional</h3>
            <p class="text-muted">
              Equipamentos de teste avançados para identificar qualquer problema com precisão.
            </p>
          </div>

          <div class="card">
            <h3> Performance Térmica</h3>
            <p class="text-muted">
              Aplicação de metal líquido e otimização completa de refrigeração.
            </p>
          </div>

          <div class="card">
            <h3> Garantia e Confiança</h3>
            <p class="text-muted">
              90 dias de garantia e total transparência no serviço.
            </p>
          </div>
        </div>

        <!-- MISSÃO -->
        <div class="card" style="margin-top:60px;">
          <h2 class="title">Nossa missão</h2>
          <p class="text-muted">
            Entregar qualidade premium em cada serviço, garantindo que seu equipamento
            funcione com máximo desempenho, segurança e durabilidade.
          </p>
        </div>

        <!-- CTA FINAL -->
        <div style="text-align:center; margin-top:60px;">
          <h2 class="title">Seu setup merece o melhor </h2>
          <p class="text-muted">
            Entre em contato e leve seu equipamento para outro nível.
          </p>

          <button class="btn-cta" style="margin-top:20px;" onclick="showPage('contato')">
            Falar no WhatsApp
          </button>
        </div>

      </div>
    </section>
  `
}