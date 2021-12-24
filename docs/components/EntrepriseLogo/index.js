class EntrepriseLogo extends HTMLElement {
  constructor() {
    super();

    this.title = this.getAttribute("title")
    //Gère le filtre des status
    this.statut = this.getAttribute("statut");
    this.statut && this.statut.split(",")
    this.statutList = [
      "candidat-pitch",
      "offreur_de_solution",
      "charge_organisation",
      "president_collectif",
      "chroniqueur_tv",
      "referent-lieu",
      "curateur",
      "demande_accreditation_presse",
      "edito",
      "intervenant",
      "jury",
      "partenaire_media",
      "participant",
      "president_forum",
      "pack",
      "tete_affiche",
    ];
    this.currentStatutList = this.statutList.filter((statut) =>
      this.statut.includes(statut)
    );

    //Gère le nombre de cards display
    this.displayNumber = this.getAttribute("displayNumber");
    this.displayNumberList = {
      1: "40vw",
      2: "30vw",
      3: "20vw",
      4: "15vw",
      5: "12vw",
    };

    //Gère les params des appels API
    this.id_event = this.getAttribute("id_event");
    this.id_conf_event = this.getAttribute("id_conf_event");

    this.innerHTML = `
        
                          <style>
                              body {
                                  background: #f7f8fa;
                              }
                              .entreprisesList {
                                  display: flex;
                                  flex-wrap: wrap;
                                  justify-content: center;
                              }
  
                          </style>
  
                          <section>
                              <h2 class="text-center">${this.title}</h2>
                                          <div class="entreprisesList">
                                          </div>
                          </section>`;

    this.fetchContactList();
  }

  displayInfoContacts = ({ infoContact }) => {
    const content = `
                  <div class="shadow" style="width:${
                    this.displayNumber
                      ? this.displayNumberList[parseInt(this.displayNumber)]
                      : "12vw"
                  }; text-align: center; background-color: white; border-radius: 10px; margin: 10px; min-height: 10vh;">
                      <a href="${infoContact.web}" target="_blank" >
                          <img src="${
                            infoContact.logos.medium
                          }" style="max-width:60%; margin: 10px;"/>
                      </a>
                  </div>              
                          `;

    document
      .querySelector(".entreprisesList")
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
        filteredContactEvent.length &&
          this.researchInfoContact({ infoContactEvents: filteredContactEvent });
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

customElements.define("entreprise-logo", EntrepriseLogo);

// const req = `getContactConferencierList&filter=%20and%20id_event=${this.id_event} AND id_conf_event=${this.id_conf_event}`;
