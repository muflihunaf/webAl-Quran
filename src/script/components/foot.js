class Bawah extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render () {
        this.innerHTML = `<footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="container text-center">
          <small>Copyright &copy; Muflihun</small>
        </div>
      </footer>`;
    }
}

customElements.define("bawah-foot",Bawah);