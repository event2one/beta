class PartenairesList extends HTMLElement {

    constructor() {
        super();

        this.innerHTML = `<div class="container">
                            <h2 class="mb-4">Les partenaires et solutions</h2>
                              <div class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner" id="partenairesList"></div>
                                    <a class="carousel-control-prev" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                              </div>
                          </div>`;

        this.fetchContactList();
    }

    displayInfoContacts = ({ infoContact }) => {

        const content = `
                            <div class="carousel-item">
                                <a href="${infoContact.web}">
                                    <img src="${infoContact.logos.medium}" class="d-block w-100"></img>
                                </a>
                            </div>
                        `;
        
        document.getElementById("partenairesList").insertAdjacentHTML('afterbegin', content);

    }

    fetchContactList = async () => {

        const req = `getContactConferencierList&filter=%20and%20id_event=1635`;

        await fetch(`https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req}`)
            .then(res => res.json())
            .then(contactEvent => {
                this.researchInfoContact({ infoContactEvents : contactEvent});
            })
    }

    researchInfoContact = ({infoContactEvents}) => {

        let uniqueIdInfoContactEvents = [...new Set(infoContactEvents.map(infoConctactEvent => infoConctactEvent.id_contact))];
        console.log(uniqueIdInfoContactEvents);

        uniqueIdInfoContactEvents.filter(uniqueIdInfoContactEvent => uniqueIdInfoContactEvent != '').map((uniqueIdInfoContactEvent) => this.fetchInfoContact({ uniqueIdInfoContactEvent })).join('');

    }

    fetchInfoContact = async ({ uniqueIdInfoContactEvent }) => {


        const req_id_contact = `getContact&id_contact=${uniqueIdInfoContactEvent}`;

        await fetch(`https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req_id_contact}`)
            .then(res => res.json())
            .then(infoContactList => {
                this.displayInfoContacts({ infoContact : infoContactList });
            })
    }
}

customElements.define('partenaires-list', PartenairesList);
