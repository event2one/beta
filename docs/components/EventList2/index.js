class EventList2 extends HTMLElement {
  constructor() {
    super();

    this.isCarousel = this.getAttribute("isCarousel");

    this.content = this.getAttribute("content");

    this.innerHTML = `
    <style>
           .event-list__list__decoration-none {
            list-style-type: none;
           } 
    </style>
		<section class="bg-light py-4">
		    <h2 class="text-center" style="">Les prochains &eacute;v&eacute;nements</h2> 
		    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner container" id="eventList"></div>
            </div>
        </section>`;

    this.fetchEvents();
  }

  displayEvents = ({ events }) => {
    let res = events
      .filter((event) => event.afficher != "n")
      .map((event, index) => this.Event({ event, index }))
      .join("");

    let leadingEvents = events
      .filter((event) => event.afficher != "n" && event.id_event_format == 1)
      .map((event, index) => this.Event({ event, index }))
      .join("");

    document.getElementById("eventList").innerHTML =
      this.content == "leading-events" ? leadingEvents : res;
  };

  Event = ({ event, index }) => {
    const isActive = index == 0 ? "active" : "";

    const isLieuVille =
      event.lieu.lieu_ville != ""
        ? `<li><i class="fas fa-plane"></i>&emsp;<a href="${event.web}">Découvrez le village de ${event.lieu.lieu_ville}</a></li>`
        : "";

    const visuel =
      event.lieu.visuel_principal != ""
        ? `<p><b>Le village francophone vous y amène :</b></p>
        <ul class="event-list__list__decoration-none">
             ${isLieuVille}
            <li><i class="fas fa-camera"></i><a href="#">&emsp;Liste des 8 studios connectés</a></li>
            <li><i class="fas fa-file-signature"></i><a href="${event.web}/${event.mega_demonstrateur_id}/pitch_registration/">&emsp;inscriptions gratuits ouvertes</a></li>
        </ul>
        `
        : `<h5 class="card-text"><i class="fas fa-map-marker-alt"></i> ${event.lieu.lieu_nom} - ${event.lieu.lieu_ville}</h5><img src="//www.mlg-consulting.com/manager_cc/events/lieux/img_uploaded/210322203353_sticker-region-sud-18.png" style="width:70%"/> `;

    const content = `
						    <div class="card mb-3">
					        <div class="row no-gutters p-3">
					            <div class="col-md-2">
					                <img src="http://www.mlg-consulting.com/manager_cc/events/img_uploaded/${event.logo}" class="card-img" alt="..." style="width:100%">
					            </div>
							    <div class="col-md-6">
							        <div class="card-body">
							            <h3 class="card-title" style="color:#591442"> ${event.nom}</h3>
							            <h5 class="card-text"><i class="far fa-calendar-check"></i> ${event.precision_date}</h5>
							          
							            <p class="card-text"><small class="text-muted"></small></p>
							            <p> <a href="${event.web}">En savoir plus ></a>  </p>
							        </div>
							    </div>
							    <div class="col-md-4 bg-light p-3 rounded"> 
							      ${visuel}
							    </div>
							  </div>
					    </div>
					`;
    const classItem =
      this.isCarousel == "true" ? `carousel-item ${isActive}` : ``;

    /* const res =
      event.web != ""
        ? `<div class="${classItem}"><a href="${event.web}" target="_blank">${content}</a></div>`
        : `<div class="${classItem}">${content}</div>`;
 */
    return content;
  };

  fetchEvents = async () => {
    const req_suite = `params=where%20id_event!=399%20and`;

    await fetch(
      `//www.mlg-consulting.com/smart_territory/form/api.php?action=getEvents&${req_suite}`
    )
      .then((res) => res.json())
      .then((eventList) => {
        this.displayEvents({ events: eventList });
      });
  };
}

customElements.define("event-list-2", EventList2);
