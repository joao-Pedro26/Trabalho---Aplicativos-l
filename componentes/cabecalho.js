class Cabecalho extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="divTopo">
                <div class="logoCti">
                    <img src="imagens/logo-cti.png" alt="Logo CTI" class="logoCti" id="logoCti">
                </div>
                <button class="btnBuscaMobile" id="btnBuscaMobile" aria-label="Buscar">
                    <img class ="iconBusca" src="imagens/icon_busca.png" alt="Buscar" class="lupa">
                </button>
                  <div class="cabecalhoBuscaTopo">
                     <input-busca></input-busca>
                 </div>
            </div>
        `;

        const logo = this.querySelector('#logoCti');
        logo.addEventListener('click', () => {
            window.location.href = '/';
        });

        const btnBuscaMobile = this.querySelector('#btnBuscaMobile');
        const inputBusca = this.querySelector('input-busca');
        btnBuscaMobile.addEventListener('click', () => {
            if (inputBusca) {
                const divBusca = inputBusca.querySelector('#divBusca');
                if (divBusca) {
                    divBusca.classList.toggle('ativo');
                }
            }
        });
    }
}

customElements.define('cabecalho-pagina', Cabecalho);