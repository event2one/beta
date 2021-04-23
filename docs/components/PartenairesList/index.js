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

    displayInfoContacts = ({ infoContacts }) => {

        // console.log(infoContacts)
        let res = infoContacts.map((infoContact) => this.infoContact({ infoContact })).join('');
        document.getElementById("partenairesList").innerHTML = res;

    }

    infoContact = ({ infoContact }) => {

        const content = `
                         <li style="height: 200px;">
                            <a href="infoContact">
                                <img src="https://www.event2one.com/screen_manager/content/logos/${infoContact.logo}"></img>
                            </a>
                         </li>
                        `;

        return content;
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

        infoContactEvents.filter(infoContactEvent => infoContactEvent.id_contact != '').map((infoContactEvent) => this.fetchInfoContact({ infoContactEvent })).join('');

    }

    fetchInfoContact = async ({ infoContactEvent }) => {

        const req_id_contact = `getContact&id_contact=${infoContactEvent.id_contact}`

        await fetch(`https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req_id_contact}`)
            .then(res => res.json())
            .then(infoContactList => {
                this.displayInfoContacts({ infoContacts : infoContactList });
            })
    }
}

customElements.define('partenaires-list', PartenairesList);
