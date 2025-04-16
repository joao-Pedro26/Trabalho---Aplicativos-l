class Container extends HTMLElement {
  constructor() {
    super();
    this.linguagens = [
      {
      titulo: "Java",
      resumo: "Java é uma linguagem de programação orientada a objetos, lançada em 1995. É amplamente utilizada no desenvolvimento de aplicativos e sistemas diversos. Java é conhecida por sua portabilidade, segurança e robustez.",
      logo: "logo-java.png",
      },
      {
      titulo: "Python",
      resumo: "Python é uma linguagem de programação de alto nível, conhecida por sua simplicidade e legibilidade. É amplamente usada em ciência de dados, inteligência artificial e desenvolvimento web.",
      logo: "logo-python.png",
      },
      {
      titulo: "JavaScript",
      resumo: "JavaScript é uma linguagem de programação amplamente utilizada para desenvolvimento web. É essencial para criar páginas interativas e dinâmicas.",
      logo: "logo-javascript.png",
      },
      {
        titulo: "C++",
        resumo: "C++ é uma linguagem de programação de propósito geral, conhecida por sua eficiência e flexibilidade. É amplamente usada no desenvolvimento de sistemas, jogos e aplicações de alto desempenho.",
        logo: "logo-c++.png",
        },
        {
        titulo: "Ruby",
        resumo: "Ruby é uma linguagem de programação dinâmica e de alto nível, conhecida por sua simplicidade e produtividade. É amplamente utilizada no desenvolvimento de aplicações web, especialmente com o framework Ruby on Rails.",
        logo: "logo-ruby.png",
        },
    ];
  }
  connectedCallback() {
    this.render(this.linguagens);
      const inputBusca = document.querySelector('input-busca');
      inputBusca.addEventListener('input', (event) => {
        const valorBusca = event.target.value.toLowerCase();
        const linguagensFiltradas = this.linguagens.filter(linguagem => 
          linguagem.titulo.toLowerCase().includes(valorBusca) );
        this.render(linguagensFiltradas);
      });
  
    }
   

  render(linguagens) {   
    this.innerHTML = `
    <div class="divContainers">
      ${linguagens
        .map(
          (linguagem) => `
          <div class="Container" data-titulo="${linguagem.titulo}">
            <div class="Titulo">
              <p>${linguagem.titulo}</p>
            </div>
            <div class="Resumo">
              <p>${linguagem.resumo}</p>
            </div>
            <div class="divLogo">
              <img src="${linguagem.logo}" alt="Logo ${linguagem.titulo}" class="logoLang">
            </div>
          </div>
          `
        )
        .join("")}
    </div>
  `;

    this.querySelectorAll('.Container').forEach(container => {
      container.addEventListener('click', () => {
        const titulo = container.getAttribute('data-titulo');
        window.location.href = `detalhes.html?titulo=${encodeURIComponent(titulo)}`;
      });
    });
  }
}
customElements.define('container-linguagens', Container);