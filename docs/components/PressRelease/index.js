class PressRelease extends HTMLElement {
   
    constructor() {
        
        super();
   
        this.innerHTML = `
        <section>
            <div class="container">
                    <h1 class="text-secondary">Actus</h1>
                    <div class="row row-cols-1 row-cols-md-3 justify-content-around" id="articleList"></div>
                    <button>Toutes les actus</button>
            </div> 
        </section>`;

        this.fetchArticles();
    }


    displayArticles = ({ articles }) => {
        let res = articles.filter(articles => articles.event_presta_categorie != "").map((article, index) => this.Article({ article, index })).join('');
        document.getElementById("articleList").innerHTML = res;
    }

    Article = ({ article, index }) => {
        let text = article.texte_contextuel.replace(/(<([^>]+)>)/ig,"");
        text.substring(0, 50);

        if(index < 3) {
            const content = `
                            <div class="card" style="width: 20rem;"> 
                                <div class="card-body">
                                    <div class="card-title">${article.event_presta_nom}</div>
                                    <img src="https://www.mlg-consulting.com/manager_cc/docs/archives/${article.event_presta_visuel}" class="card-img"></card>
                                    <p class="card-text">${article.date_parution}</p>
                                    <p class="card-text">${text}</p>
                                    <a href="https://lirelasuite" class="card-link text-end">Lire la suite</a>
                                </div>
                            </div>
                        `;
            return content;
        } 
    }
 
    fetchArticles = async () => {
        
        await fetch(`https://www.mlg-consulting.com/smart_territory/form/api.php?action=getEventPrestas&id_event=1635`)
                .then(res => res.json())
                .then(articleList => {
                    this.displayArticles({ articles : articleList });
                })
    }
}

customElements.define('press-release', PressRelease);
