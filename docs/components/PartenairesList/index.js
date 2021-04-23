class PartenairesList extends HTMLElement {

    constructor() {
        super();

        this.id_event = this.getAttribute('id_event');

        this.innerHTML = `
      
                        <style>
                            body {
                                background: #f7f8fa;
                            }

                            .splide__slide {
                                width: 192px;
                                margin: 10px;
                                flex-direction: column;
                                display: flex;
                                justify-content: space-around;
                                background: #fff;
                                padding: 10px;
                                box-shadow: 0 0 20px rgba(75, 75, 75, 0.1);
                                border-radius: .5rem;
                                align-items: center;
                            }

                            * {
                                font-size: 30px;
                            }
                        </style>

                        <section>
                            <h2 class="text-center">Les partenaires et solutions</h2>
                                <div class="splide">
                                    <div class="splide__track">
                                        <ul class="splide__list partenairesList">
                                        </ul>
                                    </div>
                                </div>
                        </section>`;

        this.fetchContactList();


    }

    displayInfoContacts = ({ infoContact }) => {

        const content = `<li class="splide__slide">
                                <a href="${infoContact.web}" target="_blank">
                                        <img src="${infoContact.logos.medium}" style="width:100%"/>
                                </a>
                        </li>`;

        document.querySelector(".partenairesList").insertAdjacentHTML('afterbegin', content);

    }

    fetchContactList = async () => {

        const req = `getContactConferencierList&filter=%20and%20id_event=${this.id_event} LIMIT 20`;

        await fetch(`https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req}`)
            .then(res => res.json())
            .then(contactEvent => {
                this.researchInfoContact({ infoContactEvents: contactEvent });
            }).then(res => {


                alert("d");

                new Splide('.splide', {
                    perPage: 10,
                    type: 'loop',
                    autoplay: true
                }).mount();

                console.log(document.querySelector(".splide"));


            })
    }

    researchInfoContact = ({ infoContactEvents }) => {

        let uniqueIdInfoContactEvents = [...new Set(infoContactEvents.map(infoConctactEvent => infoConctactEvent.id_contact))];

        //console.log(uniqueIdInfoContactEvents);

        uniqueIdInfoContactEvents.filter(uniqueIdInfoContactEvent => uniqueIdInfoContactEvent != '').map((uniqueIdInfoContactEvent, index) => this.fetchInfoContact({ uniqueIdInfoContactEvent, index })).join('');

    }

    fetchInfoContact = async ({ uniqueIdInfoContactEvent }) => {


        const req_id_contact = `getContact&id_contact=${uniqueIdInfoContactEvent}`;

        await fetch(`https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req_id_contact}`)
            .then(res => res.json())
            .then(infoContactList => {
                this.displayInfoContacts({ infoContact: infoContactList });
            })
    }
}

customElements.define('partenaires-list', PartenairesList);
