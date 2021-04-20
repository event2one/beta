class PressRelease extends HTMLElement {
   
    constructor() {
        
        super();
   
        this.innerHTML = `
        <section>
            <div class="container">
                    <h2 class="text-secondary">Press releases</h2>
                    <div class="row" id="articleList">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
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
            const content = `<div class="col"><a class="link-dark" href="http://www.mlg-consulting.com/Events/EventPrestas${article.id_event_presta}">${article.event_presta_nom}</a></div>`
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
