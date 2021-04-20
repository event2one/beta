class PressRelease extends HTMLElement {
   
    constructor() {
        
        super();

        this.innerHTML = `
        <section>
            <div class="container">
                    <h2>Press releases</h2>
                    <div class="row" id="articleList"></div>
                <div class="container">
                    <div class="row">
                        <a class="col align-self-end link-dark" href="https://lienverstouslesarticles.html">Voir tous les articles</a>
                    </div>
                </div>
                           
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
            const content = `<div class="col"><a class="link-dark" href="http://www.mlg-consulting.com/Events/EventPrestas${article.id_event_presta}">${article.event_presta_nom}</a></div>`

            // const  res =  `<div>${content}</div>`;
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
