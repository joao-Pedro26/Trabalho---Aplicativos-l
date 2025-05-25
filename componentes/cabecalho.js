class Cabecalho extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="divTopo">
                <div class="logoCti">
                    <img src="imagens/logo-cti.png" alt="Logo CTI" class="logoCti" id="logoCti">
                </div>
                <input-busca></input-busca>
            </div>
        `;

        const logo = this.querySelector('#logoCti');
        logo.addEventListener('click', () => {
            window.location.href = '/';
        });
    }
}

customElements.define('cabecalho-pagina', Cabecalho);