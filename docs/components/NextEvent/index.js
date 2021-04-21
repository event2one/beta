class NextEvent extends HTMLElement {
   
    constructor() {
        
        super();
   
        this.innerHTML = `
        <section>
            <div class="container">
                <h1 class="dark">Prochains évènement du Village Francophone</h1>
                <h2 class="indigo-700">Prochains évènement du Village Francophone</h2>
                <div class="container>
                    <div class="row" id="nextEvent"></div>
                </div>
            </div> 
        </section>`;

        this.fetchNextEvent();
    }


    displayNextEvent = ({ infoEvents }) => {
        let res = infoEvents.filter(article => infoEvent.etat != 'n').map((infoEvent, index) => this.Article({ infoEvent, index })).join('');
        document.getElementById("infoEvent").innerHTML = res;
    }

    infoEvent = ({ infoEvent }) => {

            const content = `
                                <div class="col-2">
                                    <p>15 au 16 MARS 2021</p>
                                    <p>SOUTH BY SOUTHWEST PHYGITAL FORUM</p>
                                    <img src=""></img>

                                    
                                </div>
                                <div class="col-10">
                                    <p>2 continents, 7 pays, 10 médias, 12 territoires et +3000 décideurs</p>
                                </div>
                            `;

            return content;
    }
 
    fetchNextEvent = async () => {
        
        const req_suite = `params=where%20id_event!=399%20and`;

		await fetch(`//www.mlg-consulting.com/smart_territory/form/api.php?action=getEvents&${req_suite}`)
                .then(res => res.json())
                .then(pressList => {
                    this.displayPressList({ infoEvents : nextEvent });
                })
    }
}

customElements.define('next-event', NextEvent);
