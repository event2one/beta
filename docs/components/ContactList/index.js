class ContactList extends HTMLElement {
   
    constructor() {
        
        super();
   
        this.innerHTML = `
        
        <section>
            test
        </section>`;

    }
}

customElements.define('contact-list', ContactList);
