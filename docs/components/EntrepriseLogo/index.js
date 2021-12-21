class EntrepriseLogo extends HTMLElement {
    constructor() {
      super();
  
      this.id_event = this.getAttribute("id_event");
  
      this.innerHTML = `
        
                          <style>
                              body {
                                  background: #f7f8fa;
                              }

                              .entreprisesList {
                                display: flex;
                                flex-direction: row;
                              }
  
                              * {
                                  font-size: 30px;
                              }
                          </style>
  
                          <section>
                              <h2 class="text-center">Entreprises partenaires</h2>
                                          <div class="entreprisesList container">
                                          </div>
                          </section>`;
  
      this.fetchContactList();
    }
  
    displayInfoContacts = ({ infoContact }) => {
      const content = `
                  <div style="width: 20vw">
                      <a href="${infoContact.web}" target="_blank" >
                          <img src="${infoContact.logos.medium}" style="width:100%; "/>
                      </a>
                  </div>              
                          `;
  
      document
        .querySelector(".partenairesList")
        .insertAdjacentHTML("afterbegin", content);
    };
  
    fetchContactList = async () => {
      const req = `getContactConferencierList&filter=%20and%20id_event=1656 LIMIT 20`;
  
      await fetch(
        `https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req}`
      )
        .then((res) => res.json())
        .then((contactEvent) => {
          this.researchInfoContact({ infoContactEvents: contactEvent });
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
  
  customElements.define("entreprise-logo", EntrepriseLogo);
  