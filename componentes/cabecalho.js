class Cabecalho extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <div class="divTopo">
            <div class="logoCti">
                <img src="logo-cti.png" alt="Logo CTI" class="logoCti">
            </div>
            <div class="divFotos">
                <div class="img">

                </div>
                <div class="img">

                </div>
            </div>
        </div>
        `
    }
}

customElements.define('cabecalho-pagina', Cabecalho);