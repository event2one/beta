class EventLieu extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      <div class="d-flex flex-row">
      <div class="m-2"
          style="background-image: url('https://picsum.photos/id/1043/200'); background-image: cover; height: 20vh; width: 20vw; background-size: cover;">
          <span class="bg-dark text-white" style="width: 100%;">Tour zamasky</span>
      </div>
      <p><b>Le Quartier général : </b>lorem ipsum, adresse</p>
  </div>`;
  
      this.fetchEvents();
    }
  }
  
  customElements.define("event-lieu", EventLieu);
  