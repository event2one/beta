class ContactListFix extends HTMLElement {
  constructor() {
    super();

    this.id_event = this.getAttribute("id_event");

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

                        <section>
                            <h2 class="text-center">Les partenaires</h2>
                                        <div class="ContactListFix">
                                        </div>
                        </section>`;

    this.fetchContactList();
  }

  displayInfoContacts = ({ infoContact }) => {
    const content = `
                    <div class="card shadow m-2" style="width: 18rem; ">
                      <img class="card-img-top" src="${infoContact.photos.medium}" style="max-height: 15rem" alt="Image de profil">
                      <div class="card-body">
                        <h5 class="card-title">${infoContact.prenom} ${infoContact.nom}</h5>
                        <p class="card-text">${infoContact.societe} - ${infoContact.fonction}</p>
                      </div>
                    </div> 
                                      
                        `;

    document
      .querySelector(".ContactListFix")
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
        console.log(infoContactList);
      });
  };
}

customElements.define("contact-list-fix", ContactListFix);
