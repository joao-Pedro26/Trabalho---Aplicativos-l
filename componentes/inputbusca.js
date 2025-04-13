class InputBusca extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="divBusca">
                <input type="text" placeholder="Buscar..."  class="inputBusca">
            </div>
        `
        }
}

customElements.define('input-busca', InputBusca);