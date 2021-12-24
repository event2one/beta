class ContactListFix extends HTMLElement {
  constructor() {
    super();
    //Titre
    this.title = this.getAttribute("title");

    //Gère le mode d'affichage
    this.displayMode = this.getAttribute("displayMode");
    this.horizontalStyle = "";

    this.showFlag = this.getAttribute("showFlag");

    this.statut = this.getAttribute("statut");
    this.statut && this.statut.split(",");
    console.log(this.statut);
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
      "president_collectif",
      "president_forum",
      "president_programme",
      "president_jury",
      "participant",
      "pack",
      "tete_affiche",
    ];

    this.currentStatutList = this.statutList.filter((statut) =>
      this.statut.includes(statut)
    );

    console.log(this.currentStatutList);

    //Gère le nombre de cards display
    this.displayNumber = this.getAttribute("displayNumber");
    this.displayNumberList = {
      1: "12",
      2: "6",
      3: "4",
      4: "3",
      5: "2",
      6: "2",
    };

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
                                justify-content: center;
                            }

                            h2 {
                              text-align: left;
                            }

                        </style>

                        <section class="contact-list-fix__container container">
                                        <div class="ContactListFix row">
                                        </div>
                        </section>`;

    this.fetchContactList();
  }

  displayInfoTitle = (numberUser) => {
    console.log(numberUser)
    const content = `<h2 class="text-center bg_color_1 p-1"> ${
      this.title.length > 0 ? this.title : "titre"
    }</h2>`;
    document
      .querySelector(".contact-list-fix__container")
      .insertAdjacentHTML("afterbegin", content);
  };

  displayInfoContacts = ({ infoContact, numberUser }) => {
    console.log(numberUser);
    if (this.displayMode === "horizontal") {
      if(numberUser > 1) {
        this.horizontalStyle = `style="display: flex; flex: 1 1 auto; height: 20vh; overflow: hidden;"`;

      } else {
        this.horizontalStyle = `style="display: flex; flex: 1 1 auto; overflow: hidden; align-items: center;"`;
      }
    }

    const content = `
                    <div class="card shadow col-md-${
                      this.displayNumber.length > 0
                        ? this.displayNumberList[parseInt(this.displayNumber)]
                        : "3"
                    }" style="width: 100%">
                      <div ${this.horizontalStyle}>
                        <img class="card-img-top" src="${
                          infoContact.photos.medium
                        }" style="max-height: 15rem; width: 15vw"  alt="Image de profil">
                          <div class="card-body">
                            <h5 class="card-title">${infoContact.prenom} ${infoContact.nom}</h5>
                                    ${this.showFlag === "true"  ? `<img src=${infoContact.flag} style="max-width: 2vw; float: right" alt="Flag">`: ""}
                              <p class="card-text">${infoContact.societe} - ${infoContact.fonction}</p>
                              <p class="card-text">${
                                infoContact.edito_court
                              }</p>
                                    
                        </div>
                      </div>
                    </div> 
                    
                                      
                        `;

    document
      .querySelector(".ContactListFix")
      .insertAdjacentHTML("afterbegin", content);
  };

  fetchContactList = async () => {
    const req = `getContactConferencierList&filter=%20and%20id_event=${this.id_event} AND id_conf_event=${this.id_conf_event}`;

    await fetch(
      `https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req}`
    )
      .then((res) => res.json())
      .then((contactEvent) => {

        const filteredContactEvent = contactEvent.filter((contact) =>
          this.currentStatutList.includes(contact.conferencier_statut)
        );
        console.log(filteredContactEvent);
        filteredContactEvent.length && this.displayInfoTitle(filteredContactEvent.length);
        filteredContactEvent.length &&
          this.researchInfoContact({
            infoContactEvents: filteredContactEvent,
            numberUser: filteredContactEvent.length,
          });
      });
  };

  researchInfoContact = ({ infoContactEvents, numberUser }) => {
    let uniqueIdInfoContactEvents = [
      ...new Set(
        infoContactEvents.map(
          (infoConctactEvent) => infoConctactEvent.id_contact
        )
      ),
    ];

    uniqueIdInfoContactEvents
      .filter((uniqueIdInfoContactEvent) => uniqueIdInfoContactEvent != "")
      .map((uniqueIdInfoContactEvent, index) =>
        this.fetchInfoContact({ uniqueIdInfoContactEvent, index, numberUser })
      )
      .join("");
  };

  fetchInfoContact = async ({ uniqueIdInfoContactEvent, numberUser }) => {
    console.log(uniqueIdInfoContactEvent);
    const req_id_contact = `getContact&id_contact=${uniqueIdInfoContactEvent}`;

    await fetch(
      `https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req_id_contact}`
    )
      .then((res) => res.json())
      .then((infoContactList) => {
        this.displayInfoContacts({
          infoContact: infoContactList,
          numberUser: numberUser,
        });
      });
  };
}

customElements.define("contact-list-fix", ContactListFix);
