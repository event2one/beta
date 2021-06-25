class ContactList extends HTMLElement {
  constructor() {
    super();

    console.log('ouiui')
    
    this.innerHTML = `
        <script>console.log('non')</script>
        <section>
            <div class="container">
                <div class="splide">
                    <div class="splide__track">
                        <ul class="splide__list">
                            <li class="splide__slide">Slide 01</li>
                            <li class="splide__slide">Slide 02</li>
                            <li class="splide__slide">Slide 03</li>
                        </ul>
                    </div>
                
                    <div class="splide__progress">
                        <div class="splide__progress__bar">
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
  }
}

customElements.define("contact-list", ContactList);
