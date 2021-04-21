class PressRelease extends HTMLElement {
   
    constructor() {
        
        super();
   
        this.innerHTML = `
        <section>
            <div class="container">
                    <h1 class="text-secondary">Press releases</h1>
                    <div class="row row-cols-1 row-cols-md-3" id="articleList"></div>
                    <hr/>
                    <a href="https://lienverstouslesarticles.html" style="float: right">Voir tous les articles</a>
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
            const content = `<div class="col"><a class="link-dark" href="http://www.mlg-consulting.com/Events/EventPrestas${article.id_event_presta}">${article.event_presta_nom} Acrius vero ea salutis considerans ad mitigabat vero incertum ad impetu ingenii idque praesens augeri discrimina vexillum potius altius actus.</a></div>`;
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
