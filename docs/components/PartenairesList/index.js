class PartenairesList extends HTMLElement {

    constructor() {
        super();


        document.addEventListener( 'DOMContentLoaded', function () {
            new Splide( '.splide',{
                perPage :10,
                type    : 'loop',
                    autoplay: true} ).mount();
        } );

        this.innerHTML = `
                        <section>
                            <h2 class="text-center">Les partenaires et solutions</h2>
                                <div class="splide">
                                    <div class="splide__track">
                                        <ul class="splide__list" id="partenairesList">
                                        </ul>
                                    </div>
                                </div>
                        </section>`;

        this.fetchContactList();
    }

    displayInfoContacts = ({ infoContact }) => {

        const content = `
                        <li class="splide_slide">
                            <div class="splide_slide_container">
                                <a href="${infoContact.web}" target="_blank">
                                        <img src="${infoContact.logos.medium}"></img>
                                </a>
                            </div>
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

        uniqueIdInfoContactEvents.filter(uniqueIdInfoContactEvent => uniqueIdInfoContactEvent != '').map((uniqueIdInfoContactEvent, index) => this.fetchInfoContact({ uniqueIdInfoContactEvent, index })).join('');

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
