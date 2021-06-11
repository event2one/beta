class StudioList extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <div class="container mt-2">
    <div class="d-flex bg-dark text-white">
        <img class='m-2' src='https://picsum.photos/id/1041/200' />
        <p>
            Le village accueille les francophones sur tous les plus grands évènements
            mondiaux de la techno
            et si vous ne pouvez vous y déplacer vous connecte depuis un réseau
            mondial de salles/studios connectés ou simplement en ligne depuis votre PC
        </p>
    </div>

    <div class='d-flex flex-row justify-content-center align-items-center m-2'>
        <div class="card m-2" style="width: 28rem;">
            <img src="https://picsum.photos/id/1029/200" class="card-img-top" alt="...">
            <div class="card-footer p-0" style="width: 100%; height: 100%; background-color: black; color: white;">
                <p class="card-text fs-1 fw-bold p-2">Paris</p>
            </div>
        </div>


        <div class="d-flex flex-column">

            <div class="d-flex flex-row">
                <div class="card m-2" style="width: 12rem;">
                    <img src="https://picsum.photos/id/1043/200" class="card-img-top" alt="...">
                    <div class="card-footer" style="width: 100%; height: 100%; background-color: black; color: white;">
                        <p class="card-text">Tour Zamasky</p>
                    </div>
                </div>
                <p>Le quartier général : Quelques mots sur le lieu, adresse</p>
            </div>
            <div class="d-flex flex-row">
                <div class="card m-2" style="width: 12rem;">
                    <img src="https://picsum.photos/id/1044/200" class="card-img-top" alt="...">
                    <div class="card-footer" style="width: 100%; height: 100%; background-color: black; color: white;">
                        <p class="card-text">Salon vivatech</p>
                    </div>
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
