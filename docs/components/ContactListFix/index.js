class ContactListFix extends HTMLElement {
  constructor() {
    super();

    this.showFlag = this.getAttribute("showFlag")

    this.statut = this.getAttribute("statut").split(',');
    // console.log(this.statut)
    this.statutList = [
      "candidat-pitch",
      "offreur_de_solution",
      "charge_organisation",
      "chroniqueur_tv",
      "referent-lieu",
      "curateur",
      "demande_accreditation_presse",
      "edito",
      "intervenant",
      "jury",
      "partenaire_media",
      "participant",
      "pack",
      "tete_affiche",
    ];

    this.currentStatutList = this.statutList.filter(
      (statut) => this.statut.includes(statut)
    );

    
    //Gère le nombre de cards display
    this.displayNumber = this.getAttribute("displayNumber")
    this.displayNumberList = { 1: "40vw", 2: "30vw", 3: "20vw", 4: "15vw", 5: "12vw" };

    //Gère les params des appels API
    this.id_event = this.getAttribute("id_event");
    this.id_conf_event = this.getAttribute("id_conf_event");

    this.innerHTML = `
      
                        <style>
                            body {
                                background: #f7f8fa;
                            }
                            .ContactListFix {
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: center;
                            }

                            h2 {
                              font-size: 30px;
                            }

                        </style>

                        <section class="container">
                            <h2 class="text-center">Les partenaires</h2>
                                        <div class="ContactListFix">
                                        </div>
                        </section>`;

    this.fetchContactList();
  }

  displayInfoContacts = ({ infoContact }) => {
    const content = `
                    <div class="card shadow m-2" style="width: ${this.displayNumber ? this.displayNumberList[parseInt(this.displayNumber)] : "12vw"}; ">
                      <img class="card-img-top" src="${infoContact.photos.medium}" style="max-height: 15rem" alt="Image de profil">
                      <div class="card-body">
                        <h5 class="card-title">${infoContact.prenom} ${infoContact.nom}</h5>
                        ${this.showFlag === "true" ? `<img src=${infoContact.flag} style="max-width: 2vw; float: right" alt="Flag">` : ""}
                        <p class="card-text">${infoContact.societe} - ${infoContact.fonction}</p>
                        
                      </div>
                    </div> 
                                      
                        `;

    document
      .querySelector(".ContactListFix")
      .insertAdjacentHTML("afterbegin", content);
  };

  fetchContactList = async () => {
    const req = `getContactConferencierList&filter=%20and%20id_event=1656 AND id_conf_event=174361`;

    await fetch(
      `https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req}`
    )
      .then((res) => res.json())
      .then((contactEvent) => {
        const filteredContactEvent = contactEvent.filter((contact) =>
          this.currentStatutList.includes(contact.conferencier_statut)
        );
        filteredContactEvent.length && this.researchInfoContact({ infoContactEvents: filteredContactEvent });
      });
  };

  researchInfoContact = ({ infoContactEvents }) => {
    let uniqueIdInfoContactEvents = [
      ...new Set(
        infoContactEvents.map(
          (infoConctactEvent) => infoConctactEvent.id_contact
        )
      ),
    ];

    //console.log(uniqueIdInfoContactEvents);

    uniqueIdInfoContactEvents
      .filter((uniqueIdInfoContactEvent) => uniqueIdInfoContactEvent != "")
      .map((uniqueIdInfoContactEvent, index) =>
        this.fetchInfoContact({ uniqueIdInfoContactEvent, index })
      )
      .join("");
  };

  fetchInfoContact = async ({ uniqueIdInfoContactEvent }) => {
    const req_id_contact = `getContact&id_contact=${uniqueIdInfoContactEvent}`;

    await fetch(
      `https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req_id_contact}`
    )
      .then((res) => res.json())
      .then((infoContactList) => {
        this.displayInfoContacts({ infoContact: infoContactList });
      });
  };
}

customElements.define("contact-list-fix", ContactListFix);
