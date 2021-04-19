class PressRelease extends HTMLElement {
   
    constructor() {
        
        super();

        this.innerHTML = `
        <section>
            <h2>Press releases</h2>
            <div class="modal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body" id="articleList"></div>
                    </div>
                </div>
            </div>
        </section>`;

        this.fetchArticles();
    }


    displayArticles = ({ articles }) => {
        articles.map((article, index) => this.Article({ article, index })).join('');
        document.getElementById("articleList").innerHTML = this.content;
    }

    Article = ({ article }) => {
        const content = `
            <div><a href="http://www.mlg-consulting.com/Events/EventPrestas${article.id_event_presta}">${article.event_presta_nom}</a></div>
        `

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
