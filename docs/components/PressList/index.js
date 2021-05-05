class PressList extends HTMLElement {
   
    constructor() {
        
        super();
   
        this.innerHTML = `
        <style>
            .pressArticle {
                padding: 1rem;
                box-shadow: 0 0 20px rgba(75, 75, 75, 0.1);
                border-radius: 2rem;
                display: flex;
                flex-direction: row;
            }

            h1 {
                text-align: center;
                font-size: 50px;
                font-weight: black;
            }

            h4 {
                font-size: 30px;
                font-weight: bold;
            }
            
            p:first-child {
                font-size: 25px;
                font-weight: light;
            }

            p {
                font-size: 30px;
                font-weight: regular;
            }

            .infoArticle {
                
            }
        </style>
        <section>
            <div class="container">
                <h1 class="text-secondary">Presse</h1>
                <p>Vous souhaitez vous tenir informé de l'actualité du salon, consulter les communiqués ou dossier de presse, effectuer une demande d’accréditation ou encore entrer en contact avec nous ? Cet espace est fait pour vous.</p>
                <h2 class="text-secondary">On en parle dans la presse</h2>
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

            const content = `   <div class="pressArticle">
                                    <div class="infoArticle">
                                        <h4>${article.media_nom}</h4>
                                        <p>${article.date_parution}</p>
                                        <p>${article.event_presta_nom}</p>
                                    </div>
                                    <div>
                                        <img src="${article.flag}" style="width:35%" />
                                    </div>
                                    <div>
                                        <a href="${article.event_presta_url_externe}">Découvrir</a>
                                    </div>
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
