class EventList2 extends HTMLElement {
  constructor() {
    super();

    this.isCarousel = this.getAttribute("isCarousel");

    this.content = this.getAttribute("content");

    this.innerHTML = `
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

    let visuel;

    // const visuel = event.lieu.visuel_principal != "" ? `<img src="${event.lieu.visuel_principal}" style="width:100%">` : "";
    visuel = event.lieu.visuel_principal != "" ? event.lieu.visuel_principal == "//www.mlg-consulting.com/manager_cc/events/lieux/img_uploaded/210322203353_sticker-region-sud-18.png" ? visuel = `image du sud` : visuel = `<p>ça c'est le visuel avec le village francophone</p>` : 'il n y a pas d image';

    console.log('visuel :' + visuel);
    // console.log('visuelcomplet : ' + visuelComplet);

    const content = `
						    <div class="card mb-3" style="max-width:100%">
					        <div class="row no-gutters p-3">
					            <div class="col-md-2">
					                <img src="http://www.mlg-consulting.com/manager_cc/events/img_uploaded/${event.logo}" class="card-img" alt="..." style="width:100%">
					            </div>
							    <div class="col-md-6">
							        <div class="card-body">
							            <h3 class="card-title" style="color:#591442"> ${event.nom}</h3>
							            <h5 class="card-text"><i class="far fa-calendar-check"></i> ${event.precision_date}</h5>
							          
							            <p class="card-text"><small class="text-muted"></small></p>
							            <p> En savoir plus >  </p>
							        </div>
							    </div>
							    <div class="col-md-2"> 
							      <h5 class="card-text"><i class="fas fa-map-marker-alt"></i> ${event.lieu.lieu_nom} - ${event.lieu.lieu_ville}</h5>
							    </div>
							  </div>
					      </div>
					`;

    const classItem =
      this.isCarousel == "true" ? `carousel-item ${isActive}` : ``;

    const res =
      event.web != ""
        ? `<div class="${classItem}"><a href="${event.web}" target="_blank">${content}</a></div>`
        : `<div class="${classItem}">${content}</div>`;

    return res;
  };

  // DisplayLieu = (event) => {
	// console.log("on est dans display lieu !");
	// console.log("le nom de l event est :" + event.nom);
	// if (
	//   event.lieu.visuel_principal != "" ||
	//   event.lieu.visuel_principal !=
	// 	"//www.mlg-consulting.com/manager_cc/events/lieux/img_uploaded/210322203353_sticker-region-sud-18.png"
	// ) {
	//   console.log("c/est le visuel bien" + event.lieu.visuel_principal);
	// } else {
	//   console.log("c est le visuel de base ! " + event.lieu.visuel_principal);
	// }}

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
