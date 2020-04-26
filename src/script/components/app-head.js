class AppHead extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render () {
        this.innerHTML = `<h2>Web Al Qur'an</h2>`;
    }
}

customElements.define("app-head",AppHead);