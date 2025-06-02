class InputBusca extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="divBusca" id="divBusca">
                <input type="text" placeholder="Buscar..." class="inputBusca" id="inputBuscaInterno">
            </div>
        `;
        const input = this.querySelector('#inputBuscaInterno');
        const divBusca = this.querySelector('#divBusca');

        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.dispatchEvent(new CustomEvent('busca', {
                    detail: event.target.value,
                    bubbles: true
                }));
            }
            if (event.key === 'Escape') {
                divBusca.classList.remove('ativo');
                input.blur();
            }
        });

        // Fecha ao clicar fora
        document.addEventListener('mousedown', (e) => {
            if (!divBusca.classList.contains('ativo')) return;
            if (!divBusca.contains(e.target) && e.target.id !== 'btnBuscaMobile') {
                divBusca.classList.remove('ativo');
                input.blur();
            }
        });

        // Foco automático ao abrir busca mobile
        const focusInputIfActive = () => {
            if (divBusca.classList.contains('ativo')) {
                setTimeout(() => input.focus(), 100);
            }
        };

        // Observa a classe 'ativo' para focar automaticamente
        const observer = new MutationObserver(focusInputIfActive);
        observer.observe(divBusca, { attributes: true, attributeFilter: ['class'] });

        // Garante foco ao abrir pelo botão mobile
        document.addEventListener('click', (e) => {
            if (e.target.id === 'btnBuscaMobile' || (e.target.closest && e.target.closest('#btnBuscaMobile'))) {
                setTimeout(() => input.focus(), 100);
            }
        });
    }
}

customElements.define('input-busca', InputBusca);