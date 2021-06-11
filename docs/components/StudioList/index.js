class StudioList extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <script type="module" src="./components/StudioList/CollectifGeographique/index.js"></script>
    <script type="module" src="./components/StudioList/EventLieu/index.js"></script>
    <script type="module" src="./components/StudioList/EventList/index.js"></script>

      <div class="container">
      <div class="d-flex bg-dark text-white">
          <img class='m-2' src='https://picsum.photos/id/1041/200' />
          <p>
              Le village accueille les francophones sur tous les plus grands évènements
              mondiaux de la techno
              et si vous ne pouvez vous y déplacer vous connecte depuis un réseau
              mondial de salles/studios connectés ou simplement en ligne depuis votre PC
          </p>
      </div>
  
      <div class='d-flex flex-row'>

          <collectif-geographique></collectif-geographique>
          
          <div class="d-flex flex-column">

              <event-lieu></event-lieu>
             
              <event-list></event-list>
              
          </div>
  
      </div>
  </div>`;

    // this.fetchEvents();
  }
}

customElements.define("studio-list", StudioList);