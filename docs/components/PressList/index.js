class PressList extends HTMLElement {
   
    constructor() {
        
        super();
   
        this.innerHTML = `
        <section>
            <div class="container">
                <h1 class="text-secondary">Presse</h1>
                <p>Vous souhaitez vous tenir informé de l'actualité du salon, consulter les communiqués ou dossier de presse, effectuer une demande d’accréditation ou encore entrer en contact avec nous ? Cet espace est fait pour vous.</p>
                <h1 class="text-secondary">On en parle dans la presse</h1>
                <hr/>
                <div id="pressList"></div>
            </div> 
        </section>`;

        this.fetchPressList();
    }


    displayPressList = ({ articles }) => {
        let res = articles.filter(article => article.etat != 'attente').map((article, index) => this.Article({ article, index })).join('');
        document.getElementById("pressList").innerHTML = res;
    }

    Article = ({ article }) => {

            const content = `
                                    <div>
                                        ${article.media_nom}
                                        ${article.date_parution}
                                        ${article.event_presta_nom}
                                    </div>
                                    <div>
                                        <img src="${article.flag}" style="width:35%" />
                                    </div>
                                    <div>
                                        <a href="${article.event_presta_url_externe}">Découvrir</a>
                                    </div>
                            `;

            return content;
    }
 
    fetchPressList = async () => {
        
        await fetch(`https://www.mlg-consulting.com/smart_territory/form/api.php?action=getEventPrestas&id_event=1635`)
                .then(res => res.json())
                .then(pressList => {
                    this.displayPressList({ articles : pressList });
                })
    }
}

customElements.define('press-list', PressList);
