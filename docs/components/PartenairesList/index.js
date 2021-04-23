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
                                        <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/170616121214_neo_300x0.jpg" alt="Archimed" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/201221190645_k1t31qa0-400x400_300x0.jpg" alt="Agglo du Saint-Quentinois" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/151013123048_touleco_300x0.jpg" alt="ToulÉco" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/210108192836_30188716-5884-41f3-9f2b-73a08a89db3d_300x0.png" alt="ZEBOX " style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/210323160725_logo-campusfab_300x0.png" alt="CampusFab" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/210305105913_een-cc_300x0.png" alt="Luxembourg Chamber of Commerce" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/190912171913_valeo-logo.svg_300x0.png" alt="VALEO" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/210105174335_ft_300x0.png" alt="La French Tech Guadeloupe " style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/200721193510_logo-mlg-02_300x0.png" alt="MLG consulting" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/201209134554_symag-logo_300x0.jpg" alt="SYMAG by BNP Paribas" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/170519100107_communaute-d-agglomeration-du-saint-quentinois_300x0.jpg" alt="Communauté agglomération Saint Quentin" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/201230191642_lacoque-logogrey-rvb-_300x0.png" alt="LA COQUE" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/210105132420_atica-by-appim_300x0.jpg" alt="ATI-CA" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/191230185417_logo-sprintproject-gris_300x0.png" alt="SprintProject" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/191220134444_vlcsnap-error813_300x0.png" alt="AWEX" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/130422183910_ccluxembourg_300x0.jpg" alt="CCI du Luxembourg" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/201216114350_logo-km0-quadri_300x0.jpg" alt="KMØ" style="width: 100%;" />
             </div></li>
              
            <li class="splide__slide">
            <div class="">
             <img src="//www.mlg-consulting.com/manager_cc/contacts/img_uploaded/thumbs/210310155520_download_300x0.png" alt="IHK Trier" style="width: 100%;" />
             </div></li>
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
                new Splide('.splide', {
                    perPage: 10,
                    type: 'loop',
                    autoplay: true
                }).mount();
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
