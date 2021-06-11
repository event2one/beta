class Event extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
            <div class="d-flex flex-row">
                  <div class="m-2"
                      style="background-image: url('https://picsum.photos/id/1044/200'); background-image: cover; height: 20vh; width: 20vw; background-size: cover;">
                      <span class="bg-dark text-white">Salon vivatech</span>
                  </div>
                  <p>L'EVENEMENT : Quelques mots sur l'évènement</p>
            </div>
              `;

    this.fetchEvents();
  }
}

customElements.define("event", Event);
