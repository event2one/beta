class PressRelease extends HTMLElement {
   
    constructor() {
        
        super();
   
        this.innerHTML = `
        <section>
            <div class="container">
                    <h1 class="text-secondary" style="color: #fff; text-align: center">Actus</h1>
                    <div class="row row-cols-1 row-cols-md-3 justify-content-around mb-3" id="articleList"></div>
                    <p class="text-center"><a class="btn btn-secondary" href="">Toutes les actus </a></p>
            </div> 
        </section>`;

        this.fetchArticles();
    }


    displayArticles = ({ articles }) => {
        let res = articles.filter(articles => articles.event_presta_categorie == "article").map((article, index) => index < 3 ? this.Article({ article }) : '').join('');
        document.getElementById("articleList").innerHTML = res;
    }

    Article = ({ article }) => {
        let text = article.texte_contextuel.replace(/(<([^>]+)>)/ig,"").substring(0, 200);

            const content = `
                            <div class="card" style="width: 20rem; border-radius: 25px; box-shadow: 0px 0px 20px rgba(0,0,0, .1); border: 0px solid; padding: 0px;" > 
                                <div class="card-body" style="padding: 0px;">
                                    <img src="https://picsum.photos/id/1041/200" style="padding: -1rem; border-radius: 25px 25px 0px 0px; width: 100%;"/>
                                    <div class="card-title" style="font-weight: bold; padding: 10 10 10 20;">${article.event_presta_nom}</div>
                                    <p class="card-text" style="padding: 10 10 10 20; font-size: 20px;">${text}</p>
                                    <p class="text-muted small">${article.date_parution}</p>
                                </div> 
                                <div class="card-footer" style="background-color: #fff;border-top: 0px solid; border-radius: 25px;">
                                    <div style="height: 1.5rem; width: 50%;text-align: center; margin: auto;">
                                        <a href="https://lirelasuite" style="color: black; width: 50%; font-size: 20px; border-radius: 50%; padding: 10px; vertical-align: center; text-decoration: none; box-shadow: 0px 0px 20px rgba(0,0,0, .1)">Lire la suite</a>
                                    </div>  
                                </div> 
                            </div>
                        `;
            return content;
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
