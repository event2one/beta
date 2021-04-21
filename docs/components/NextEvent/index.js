class NextEvent extends HTMLElement {
   
    constructor() {
        
        super();
   
        this.innerHTML = `
        <section>
            <div class="container">
                <h1 class="dark">Prochains évènement du Village Francophone</h1>
                <h2 class="indigo-700">Les prochains temps forts</h2>
                <div class="container">
                    <div class="row" id="nextEvent"></div>
                </div>
            </div> 
        </section>`;

        this.fetchNextEvent();
    }


    displayNextEvent = ({ infoEvents }) => {
        let res = infoEvents.filter(infoEvent => infoEvent.afficher != 'n').map((infoEvent, index) => this.infoEvent({ infoEvent, index })).join('');
        document.getElementById("nextEvent").innerHTML = res;
    }

    infoEvent = ({ infoEvent, index }) => {
        if(index > 2) {
            const content = `
            <div class="col">
                <p>${infoEvent.precision_date}</p>
                <p>${infoEvent.nom}</p>
                <img src="${infoEvent.logo}"></img>
            </div>
            <div class="col">
                <p>2 continents, 7 pays, 10 médias, 12 territoires et +3000 décideurs</p>
                <a href="">Découvrir le programme des journées de travail</a>
            </div>
        `;

        return content;
        }     
    }
 
    fetchNextEvent = async () => {
        
        const req_suite = `params=where%20id_event!=399%20and`;

		await fetch(`//www.mlg-consulting.com/smart_territory/form/api.php?action=getEvents&${req_suite}`)
                .then(res => res.json())
                .then(nextEvent => {
                    this.displayNextEvent({ infoEvents : nextEvent });
                })
    }
}

customElements.define('next-event', NextEvent);
