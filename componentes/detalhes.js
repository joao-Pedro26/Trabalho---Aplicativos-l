class DetalhesLinguagem extends HTMLElement {
    constructor() {
        super();
        this.linguagens = [
            {
                titulo: "Java",
                detalhes: "Java é uma linguagem de programação robusta e amplamente utilizada em diversos setores, como desenvolvimento de aplicativos corporativos, sistemas embarcados e muito mais.",
                logo: "logo-java.png",
            },
            {
                titulo: "Python",
                detalhes: "Python é uma linguagem versátil, ideal para iniciantes e profissionais. É amplamente usada em ciência de dados, aprendizado de máquina e automação.",
                logo: "logo-python.png",
            },
            {
                titulo: "JavaScript",
                detalhes: "JavaScript é essencial para o desenvolvimento web moderno, permitindo a criação de interfaces dinâmicas e interativas.",
                logo: "logo-javascript.png",
            },
            {
                titulo: "C++",
                detalhes: "C++ é amplamente utilizado em sistemas de alto desempenho, como jogos, motores gráficos e sistemas operacionais.",
                logo: "logo-c++.png",
            },
            {
                titulo: "Ruby",
                detalhes: "Ruby é conhecido por sua simplicidade e produtividade, sendo popular no desenvolvimento de aplicações web.",
                logo: "logo-ruby.png",
            },
        ];
    }

    connectedCallback() {
        const params = new URLSearchParams(window.location.search);
        const titulo = params.get('titulo');
        const linguagem = this.linguagens.find(lang => lang.titulo === titulo);

        if (linguagem) {
            this.innerHTML = `
                <div class="detalhesContainer">
                    <h2>${linguagem.titulo}</h2>
                    <img src="${linguagem.logo}" alt="Logo ${linguagem.titulo}" class="logoDetalhes">
                    <p>${linguagem.detalhes}</p>
                </div>
            `;
        } else {
            this.innerHTML = `<p>Linguagem não encontrada.</p>`;
        }
    }
}

customElements.define('detalhes-linguagem', DetalhesLinguagem);
