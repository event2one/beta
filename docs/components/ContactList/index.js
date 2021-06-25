class ContactList extends HTMLElement {
  constructor() {
    super();

    // var js = document.createElement('script');
    // js.type = `text`;
    // js.src = `https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js`
    // //Ajout de la balise dans la page
    // document.body.appendChild(js);
    // console.log(document.body.appendChild(js));

    this.contactList = this.getAttribute("contactList");

    console.log(this.contactList);

    const displayContactList = () => {
      this.contactList.map((item) => (
        <li class="splide__slide">
          <img src={item.photo}></img>
          <div>
            <h3>
              {item.prenom} {item.nom}
            </h3>
            <br /> <br />
            {item.societe}
          </div>
        </li>
      ));
    };

    this.innerHTML = `
        <section>
            <div class="container">
                <div class="splide">
                    <div class="splide__track">
                        <ul class="splide__list">
                            ${displayContactList()}
                        </ul>
                    </div>
                
                    <div class="splide__progress">
                        <div class="splide__progress__bar">
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

    this.displaySplide();
  }

  displaySplide = () => {
    var splide = new Splide(".splide");

    splide.on("autoplay:playing", function (rate) {
      console.log(rate); // 0-1
    });

    splide.mount();
  };
}

customElements.define("contact-list", ContactList);
