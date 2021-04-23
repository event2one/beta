class PartenairesList extends HTMLElement {

    constructor() {
        super();

        this.innerHTML = `

                        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"> 
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css">
                        <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js"></script>

                        <script>
                            document.addEventListener( 'DOMContentLoaded', function () {
                                new Splide( '.splide',{
                                    perPage :10,
                                    type    : 'loop',
                                        autoplay: true} ).mount();
                            } );
                        </script>
        
                        <style>
                            body{
                                background: #f7f8fa;
                                font-family: 'Bebas Neue', cursive;
                            }
                            .splide__slide {   
                                width:300px;
                                margin: 10px;
                                flex-direction: column;
                                display: flex;
                                justify-content: space-around;
                                background: #fff;
                                padding: 10px;
                                box-shadow: 0 0 20px rgba(75,75,75,0.1);
                                border-radius: .5rem;
                                align-items: center;
                            }

                            *{
                                font-size:30px;
                            }
                        </style>
        
        
                        <section>
                            <h2 class="text-center">Les partenaires et solutions</h2>
                                <div class="splide">
                                    <div class="splide__track">
                                        <ul class="splide__list" id="partenairesList"></ul>
                                    </div>
                                </div>
                        </section>`;

        this.fetchContactList();
    }

    displayInfoContacts = ({ infoContact }) => {

        const content = `
                        <li class="splide_slide">
                            <a href="${infoContact.web}" target="_blank">
                                    <img src="${infoContact.logos.medium}" style="width=20%"></img>
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
