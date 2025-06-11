class Rodape extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="rodape">
                <div class="rodape-conteudo">
                    <span>&copy; ${new Date().getFullYear()} Wiki Lang. Todos os direitos reservados.</span>
                    <span>Trabalho de Aplicativos</span>
                </div>
            </footer>
        `;
    }
}
customElements.define('rodape-pagina', Rodape);