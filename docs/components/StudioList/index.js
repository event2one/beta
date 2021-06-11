class StudioList extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <div class="container mt-2">
    <div class="d-flex text-white" style="background-color: black;">
        <img class='m-2' src='https://picsum.photos/id/1041/150' />
        <p class='mt-3' style="text-align: center">
           <b>Le quartier général de la présence francophone sur l'évènement</b>
           <br>Participez aux temps forts de la journée, rassemblez vous aux points de départ des parcours de visité et <br>
           rencontrez les décideurs francophones de l'évènements lors des soirées et sessions de pitch
        </p>
    </div>

    <div class='d-flex flex-row justify-content-center align-items-center m-2'>
        <div class="card m-2" style="width: 28rem;">
            <img src="https://picsum.photos/id/1029/200" class="card-img-top" alt="...">
            <div class="card-footer p-0" style="width: 100%; background-color: black; color: white;">
                <p class="card-text fs-1 fw-bold p-2">Paris</p>
            </div>
        </div>


        <div class="d-flex flex-column">

            <div class="d-flex flex-row align-items-center">
                <div class="card m-2" style="width: 12rem;">
                    <img src="https://picsum.photos/id/1043/200" class="card-img-top" alt="...">
                    <div class="card-footer" style="width: 100%; background-color: black; color: white;">
                        <p class="card-text">Tour Zamasky</p>
                    </div>
                </div>
                <p>Le quartier général :<br> Lieu du studio central<br> quelques mots sur le lieu <br>adresse</p>
            </div>
            <div class="d-flex flex-row align-items-center">
                <div class="card m-2" style="width: 12rem;">
                    <img src="https://picsum.photos/id/1044/200" class="card-img-top" alt="...">
                    <div class="card-footer" style="width: 100%;  background-color: black; color: white;">
                        <p class="card-text">Salon vivatech</p>
                    </div>
                </div>
                <p>L'EVENEMENT :<br> Quelques mots sur l'évènement</p>
            </div>

        </div>

    </div>
</div>`;

    // this.fetchEvents();
  }
}

customElements.define("studio-list", StudioList);
