class CollectifGeographique extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div class="m-2"
      style="background-image: url('https://picsum.photos/id/1042/200'); height: 40vh; width: 40vw;background-size: cover;">
      <span class="bg-dark text-white fs-1">Paris</span>
  </div>`;

    this.fetchEvents();
  }
}

customElements.define("collectif-geographique", CollectifGeographique);
