class EventList extends HTMLElement {

    constructor() {

        super();

        this.innerHTML = `
        <style>
            .container:first-child {
                text-align: center;
            }

            #eventList {
                box-shadow: 0px 0px 20px rgba(0,0,0, .1);
                width: 80%;
                text-align: center;
            }

            .event h3 {
                font-size: 30px;
                font-weight: bold;
            }

            .event a {
                box-shadow: 0px 0px 20px rgba(0,0,0, .1);
                padding: 5px;
            }
        </style>
        <section>
            <div class="container" style="text-align: center">
                <h1 class="text-dark">Prochains évènement du Village Francophone</h1>
                <h2 style="color: purple">Les prochains temps forts</h2>
                <div class="container" id="eventList"></div>
            </div> 
        </section>`;

        this.fetchEventList();


    }


    displayEventList = ({ infoEvents }) => {
        let res = infoEvents.filter(infoEvent => infoEvent.afficher != 'n').map((infoEvent, index) => index < 2 ? this.infoEvent({ infoEvent }) : '').join('');
        document.getElementById("eventList").innerHTML = res;
    }

    infoEvent = ({ infoEvent }) => {

        const content = `
                        <div class="event">
                            <h3>${infoEvent.nom}</h3>
                            <img src="https://www.mlg-consulting.com/manager_cc/events/img_uploaded/${infoEvent.logo}" style="width: 20%"/>
                            <p>${infoEvent.precision_date}</p>
                            <a class="link-info" href="${infoEvent.web}">Découvrez le programme des journées de travail</a>
                            </hr>
                        </div>
                    `;

        return content;
    }

    fetchEventList = async () => {

        const req_suite = `params=where%20id_event!=399%20and`;

        await fetch(`//www.mlg-consulting.com/smart_territory/form/api.php?action=getEvents&${req_suite}`)
            .then(res => res.json())
            .then(eventList => {
                this.displayEventList({ infoEvents: eventList });
            })
    }
}

customElements.define('event-list', EventList);
