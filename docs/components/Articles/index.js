class PressRelease extends HTMLElement {
   
    constructor() {
        
        super();

        this.innerHTML = `
        <section>
            <h2>Press releases</h2>
            <div class="modal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body" id="eventList">dsqqd</div>
                    </div>
                </div>
            </div>
        </section>`;

        this.fetchEvents();
    }


    displayEvents = ({ events }) => {
        events.map((event, index) => this.Event({ event, index })).join('');
        document.getElementById("eventList").innerHTML = this.content;
    }

    Event = ({ events }) => {
        const content = `
            <div><a href="http://www.mlg-consulting.com/Events/EventPrestas${events.id_event_presta}">${event_presta_nom}</a></div>
        `

        return content;
    }
 
    fetchEvents = async () => {
        
        await fetch(`https://www.mlg-consulting.com/smart_territory/form/api.php?action=getEventPrestas&id_event=1635`)
                .then(res = res.json())
                .then(eventList => {
                    this.displayEvents({ events: eventList });
                })
    }
}

customElements.define('press-release', PressRelease);
