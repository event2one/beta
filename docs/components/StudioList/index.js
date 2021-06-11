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
          <div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/id/1042/200" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Paris</p>
            </div>
          </div>

            
          <div class="d-flex flex-column">

            <div class="d-flex flex-row">
              <div class="card" style="width: 9rem;">
                <img src="https://picsum.photos/id/1043/200" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Tour Zamasky</p>
                </div>
              </div>
              <p>Le quartier général : Quelques mots sur le lieu, adresse</p>

              <div class="card" style="width: 9rem;">
                <img src="https://picsum.photos/id/1044/200" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Salon vivatech</p>
                </div>
              </div>
              <p>L'EVENEMENT : Quelques mots sur l'évènement</p>

            </div>
              
              <div class="d-flex flex-row">
                    <div class="m-2"
                        style="background-image: url('https://picsum.photos/id/1044/200'); background-image: cover; height: 20vh; width: 20vw; background-size: cover;">
                        <span class="bg-dark text-white">Salon vivatech</span>
                    </div>
                    
              </div>
                
          </div>
    
        </div>
      </div>`;

    // this.fetchEvents();
  }
}

customElements.define("studio-list", StudioList);
