class StudioList extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
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

          <div class="m-2"
              style="background-image: url('https://picsum.photos/id/1042/200'); height: 40vh; width: 40vw;background-size: cover;">
              <span class="bg-dark text-white fs-1">Paris</span>
          </div>
          
          <div class="d-flex flex-column">

          <div class="d-flex flex-row">
          <div class="m-2"
              style="background-image: url('https://picsum.photos/id/1043/200'); background-image: cover; height: 20vh; width: 20vw; background-size: cover;">
              <span class="bg-dark text-white" style="width: 100%;">Tour zamasky</span>
          </div>
          <p><b>Le Quartier général : </b>lorem ipsum, adresse</p>
      </div>
             
            <div class="d-flex flex-row">
                  <div class="m-2"
                      style="background-image: url('https://picsum.photos/id/1044/200'); background-image: cover; height: 20vh; width: 20vw; background-size: cover;">
                      <span class="bg-dark text-white">Salon vivatech</span>
                  </div>
                  <p>L'EVENEMENT : Quelques mots sur l'évènement</p>
            </div>
              
          </div>
  
      </div>
  </div>`;

    // this.fetchEvents();
  }
}

customElements.define("studio-list", StudioList);
