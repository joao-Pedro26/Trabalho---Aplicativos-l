class Cabecalho extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="divTopo">
            <div class="logoCti">
            <img src="imagens/logo-cti.png" alt="Logo CTI" class="logoCti" id="logoCti">
            </div>
            <div class="divFotos">
            <div class="img">
                <img src="imagens/foto1.png" alt="Foto 1" class="img">
            </div>
            <div class="img">
             <img src="imagens/foto2.png" alt="Foto 2" class="img">
            </div>
            </div>
        </div>
        `;

        const logo = this.querySelector('#logoCti');
        logo.addEventListener('click', () => {
            window.location.href = '/';
        });
    }
}

customElements.define('cabecalho-pagina', Cabecalho);