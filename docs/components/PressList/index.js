class PressList extends HTMLElement {
   
    constructor() {
        
        super();
   
        this.innerHTML = `
        <section>
            <div class="container">
                    <h1 class="text-secondary">On en parle dans la presse</h1>
                    <hr/>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Média</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Pays</th>
                                <th scope="col">Date de parution</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody id="pressList"></tbody>
                    </table>
            </div> 
        </section>`;

        this.fetchPressList();
    }


    displayPressList = ({ articles }) => {
        let res = articles.filter(article => article.etat != 'attente' && article.media_nom != '').map((article, index) => this.Article({ article, index })).join('');
        document.getElementById("pressList").innerHTML = res;
    }

    Article = ({ article }) => {
            const content = `
                                <div>
                                    <tr>
                                        <td scope="row">${article.media_nom}</td>
                                        <td>${article.event_presta_nom}</td>
                                        <td>${article.event_presta_pays}</td>
                                        <td>${article.date_parution}</td>
                                        <td>@<a href="${event_presta_url_externe}">Lire l'article'</a></td>   
                                    </tr>
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