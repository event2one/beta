class PressRelease extends HTMLElement {
   
    constructor() {
        
        super();
   
        this.innerHTML = `
        <section>
            <div class="container">
                    <h1 class="text-secondary">Actus</h1>
                    <div class="row row-cols-1 row-cols-md-3" id="articleList"></div>
                    <button>Toutes les actus</button>
            </div> 
        </section>`;

        this.fetchArticles();
    }


    displayArticles = ({ articles }) => {
        let res = articles.map((article, index) => this.Article({ article, index })).join('');
        document.getElementById("articleList").innerHTML = res;
    }

    Article = ({ article, index }) => {
        if(index < 3) {
            const content = `
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-title">${article.event_presta_nom}</div>
                                    <img src="" class="card-img"></card>
                                    <p class="card-text">${article.texte_contextuel}</p>
                                    <p class="card-text">${}</p>
                                    <a href="https://lirelasuite" class="card-link text-end">Lire la suite</a>
                                </div>
                            </div>
            <div class="col"><a class="link-dark" href="http://www.mlg-consulting.com/Events/EventPrestas${article.id_event_presta}">${article.event_presta_nom} Acrius vero ea salutis considerans ad mitigabat vero incertum ad impetu ingenii idque praesens augeri discrimina vexillum potius altius actus.</a></div>
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
