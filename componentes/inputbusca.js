class InputBusca extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="divBusca">
                <input type="text" placeholder="Buscar..." class="inputBusca" id="inputBuscaInterno">
            </div>
        `;
        this.querySelector('#inputBuscaInterno').addEventListener('input', (event) => {
            this.dispatchEvent(new CustomEvent('busca', {
                detail: event.target.value,
                bubbles: true 
            }));
        });
    }
}

customElements.define('input-busca', InputBusca);