class NextEvent extends HTMLElement {
   
    constructor() {
        
        super();
   
        this.innerHTML = `
        <section>
            <div class="container">
                <h1 class="text-dark">Prochains évènement du Village Francophone</h1>
                <h2 style="color: purple">Les prochains temps forts</h2>
                <div class="container" id="nextEvent" style="box-shadow: 0px 0px 5px 1px grey"></div>
            </div> 
        </section>`;

        this.fetchNextEvent();
    }


    displayNextEvent = ({ infoEvents }) => {
        let res = infoEvents.filter(infoEvent => infoEvent.afficher != 'n').map((infoEvent, index) => this.infoEvent({ infoEvent, index })).join('');
        document.getElementById("nextEvent").innerHTML = res;
    }

    infoEvent = ({ infoEvent, index }) => {
        if(index < 2) {
            const content = `
                        <div class="row" style="border-bottom: 0.5px solid grey; padding-bottom: 50px">
                            <div class="col-2">
                                <p>${infoEvent.precision_date}</p>
                                <p>${infoEvent.nom}</p>
                                <img src="https://www.mlg-consulting.com/manager_cc/events/img_uploaded/${infoEvent.logo}" style="width: 50%"></img>
                            </div>
                            <div class="col-10">
                                <p>2 continents, 7 pays, 10 médias, 12 territoires et +3000 décideurs en ligne chaque jour. Le Village Francophone vous offre le dispositif le plus important d'intelligence
                                collective jamais mis en oeuvre lors du South by SouthWest avec au programme : </br> </br> 2 après-midis marathon pour décrypter 15 tendances clés pour l'Entertainment
                                de la fashiontech, beautyTech, foodTech </br> </br> Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides.</p>
                                <a classe="link-info" href="${infoEvent.web}">Découvrir le programme des journées de travail</a>
                            </div>
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
