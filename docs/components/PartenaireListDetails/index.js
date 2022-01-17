class PartenairesListDetails extends HTMLElement {
  constructor() {
    super();

    this.id_event = this.getAttribute("id_event");

    this.innerHTML = `
      
                        <style>
                            body {
                                background: #f7f8fa;
                            }
                        </style>

                        <section class="container">
                        <h1>PartenairesListDetails</h1>
                            <div class="partenaireListDetails"></div>
                        </section>`;

    this.fetchContactList();
  }

  displayInfoContacts = ({ partenaire }) => {
    const content = `<div class="card mb-3 shadow" style="max-width: 100%; max-height: 20vh; height: 20vh; overflow: hidden;">
                        <div class="row no-gutters">
                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                            <img src="${partenaire?.logos?.large}" class="card-img" alt="entreprise logo" style="width: 70%; height: 70%; object-fit: contain;">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title">${partenaire?.contact?.societe}</h5>
                            <p class="card-text">${partenaire?.contact?.edito_long}</p>
                            <a href="${partenaire?.contact?.web}">${partenaire?.contact?.web}</a>
                            </div>
                        </div>
                        </div>
                    </div>`;

    document
      .querySelector(".partenaireListDetails")
      .insertAdjacentHTML("afterbegin", content);
  };

  fetchContactList = async () => {
    const req = `getPartenaires&params=AND id_event=1656 AND cf.statut in('partenaire_officiel','jury') LIMIT 20`;

    await fetch(
      `https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req}`
    )
      .then((res) => res.json())
      .then((partenaireList) => {
        console.log(partenaireList),
          partenaireList.map((partenaire) =>
            this.displayInfoContacts({partenaire})
          );
        this.displayInfoContacts;
      });
  };
}

customElements.define("partenaires-list-details", PartenairesListDetails);
