class PartenairesList extends HTMLElement {

    constructor() {
        super();

        this.innerHTML = `<div class="container">
                            <h2 class="mb-4">Les partenaires et solutions</h2>
                              <div class="carouselslider">
                                <input class="carousel-control previous carousel-previous" type="button" value=""></input>
                                <div class="carousel-wrap">
                                    <div class="margin-fixer">
                                        <ul class="item_list" id="partenairesList"></ul>
                                    </div>
                                </div>
                              </div>
                          </div>`;

        this.fetchContactList();
    }

    displayInfoContacts = ({ infoContact }) => {

        // console.log(infoContacts)
        const content = `
                         <li style="height: 200px;">
                            <a href="infoContact">
                                <img src="${infoContact.logos.medium}"></img>
                            </a>
                         </li>
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

        uniqueIdInfoContactEvents.filter(uniqueIdInfoContactEvent => uniqueIdInfoContactEvent.id_contact != '').map((uniqueIdInfoContactEvent) => this.fetchInfoContact({ uniqueIdInfoContactEvent })).join('');

    }

    fetchInfoContact = async ({ uniqueIdInfoContactEvent }) => {


        const req_id_contact = `getContact&id_contact=${uniqueIdInfoContactEvent.id_contact}`;

        await fetch(`https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req_id_contact}`)
            .then(res => res.json())
            .then(infoContactList => {
                this.displayInfoContacts({ infoContact : infoContactList });
            })
    }
}

customElements.define('partenaires-list', PartenairesList);
