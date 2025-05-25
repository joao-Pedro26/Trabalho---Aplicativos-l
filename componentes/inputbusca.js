class InputBusca extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="divBusca" id ="divBusca">
                <input type="text" placeholder="Buscar..." class="inputBusca" id="inputBuscaInterno">
            </div>
        `;
        this.querySelector('#inputBuscaInterno').addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.dispatchEvent(new CustomEvent('busca', {
                    detail: event.target.value,
                    bubbles: true 
                }));
            }
        });
    }
}

customElements.define('input-busca', InputBusca);