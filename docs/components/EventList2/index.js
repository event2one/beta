
// class EventList2 extends HTMLElement {

//   constructor() {

//       super();

//       this.innerHTML = `
//       <style>
//           .container:first-child {
//               text-align: center;
//           }

//           #eventList {
//               box-shadow: 0px 0px 20px rgba(0,0,0, .1);
//               width: 100%;
//               text-align: center;
//               padding: 3rem;
//           }

//           .event h3 {
//               font-size: 40px;
//               font-weight: bold;
//               padding: 10px;
//               margin-top: 3rem;
//           }

//           .event a {
//               box-shadow: 0px 0px 20px rgba(0,0,0, .1);
//               padding: 1.5rem;
//               text-decoration: none;
//               color: black;
//               border-radius: 3rem;
//               font-size: 30px;
//           }

//           .event p {
//               font-size: 30px;
//               padding: 1rem;
//           }

//           .event img {
//               width: 25%;
//               padding: 10px;
//           }

//           .hr {
//               height: 1px;
//               width: 70%;
//               background-color: black;
//               padding: 20px;
//           }
//       </style>
//       <section>
//           <div class="container" style="text-align: center">
//               <h1 class="text-dark">Prochains évènement du Village Francophone</h1>
//               <h2 style="color: purple">Les prochains temps forts</h2>
//               <div class="container" id="eventList"></div>
//           </div> 
//       </section>`;

//       this.fetchEventList();


//   }


//   displayEventList = ({ infoEvents }) => {
//       let res = infoEvents.filter(infoEvent => infoEvent.afficher != 'n').map((infoEvent, index) => index < 2 ? this.infoEvent({ infoEvent }) : '').join('');
//       document.getElementById("eventList").innerHTML = res;
//   }

//   infoEvent = ({ infoEvent }) => {

//       const content = `
//                       <div class="event">
//                           <h3>${infoEvent.nom}</h3>
//                           <img src="https://www.mlg-consulting.com/manager_cc/events/img_uploaded/${infoEvent.logo}"/>
//                           <p>${infoEvent.precision_date}</p>
//                           <a class="link-info" href="${infoEvent.web}">Découvrez le programme des journées de travail</a>
//                       </div>
//                   `;

//       return content;
//   }

//   fetchEventList = async () => {

//       const req_suite = `params=where%20id_event!=399%20and`;

//       await fetch(`//www.mlg-consulting.com/smart_territory/form/api.php?action=getEvents&${req_suite}`)
//           .then(res => res.json())
//           .then(eventList => {
//               this.displayEventList({ infoEvents: eventList });
//           })
//   }
// }

// customElements.define('event-list-2', EventList2);
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
          ? `<li><i class="fas fa-plane"></i>&emsp;<a href="${event.web}">D&eacute;couvrez le village de ${event.lieu.lieu_ville}</a></li>`
          : "";
  
      const visuel = `
                        <p><b>Le village francophone vous y am&egrave;ne :</b></p>
                        <ul class="event-list__list__decoration-none">
                            ${isLieuVille}
                            <li><i class="fas fa-camera"></i><a href="${event.web}/${event.mega_demonstrateur_id}/connected_studios/">&emsp;Liste des studios connect&eacute;s</a></li>
                            <li><i class="fas fa-file-signature"></i><a href="${event.web}/${event.mega_demonstrateur_id}/pitch_registration/">&emsp;Inscriptions gratuites ouvertes</a></li>
                        </ul>
                      `;
  
      const content = `
                                <div class="card mb-3">
                                <div class="row no-gutters p-3">
                                    <div class="col-md-2">
                                        <a href="${event.web}" target="_blank"><img src="http://www.mlg-consulting.com/manager_cc/events/img_uploaded/${event.logo}" class="card-img" alt="..." style="width:100%"></a>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body">
                                            <h3 class="card-title" style="color:#591442"> ${event.nom}</h3>
                                            <h5 class="card-text"><i class="far fa-calendar-check"></i> ${event.precision_date}</h5>
                                          
                                            <p class="card-text"><small class="text-muted"></small></p>
                                            <p> <a href="${event.web}" class="btn btn-primary">En savoir plus &gt;</a>  </p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 bg-light p-3 rounded"> 
                                      ${visuel}
                                    </div>
                                  </div>
                            </div>
                        `;
  
      const classItem = this.isCarousel == "true" ? `carousel-item ${isActive}` : ``;
  
      const res = `<div class=${classItem}>{content}</div>`
  
      return res;
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
  