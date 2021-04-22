class SelectThematic extends HTMLElement {

    constructor() {
        super();

        this.innerHTML = `<div>
                              <h2 class="mb-4">Sélectionner une thématique</h2>
                              </hr>
                              <h4 class="mb-4">Je sélectionne dans la lisye ci-dessous le besoin prioritaire auquel répond ma solution</h4>
                              <div id="selectThematicCheckbox"></div>
                          </div>`

        this.fetchSelectThematic();
    }

    displaySelectThematic = ({ selectThematicCheckboxs }) => {

        // const collectifList = ['collectif_technologique', 'collectif_sectoriel'];

        let res = selectThematicCheckboxs.filter(selectThematicCheckbox => selectThematicCheckbox.programm_title == '').map((selectThematicCheckbox) => this.selectThematicCheckbox({ selectThematicCheckbox })).join('');
        document.getElementById("selectThematicCheckbox").innerHTML = res;
    }

    selectThematicCheckbox = ({ selectThematicCheckbox }) => {

        const content = `</hr>
                         <div class="row">  
                            <input name="eventDemandesReferencement" class="btn-primary col-2" type="checkbox" id="${selectThematicCheckbox.id_cycle_lang}" value="${selectThematicCheckbox.id_cycle_lang}"></input>
                            <img src="https://www.mlg-consulting.com/manager_cc/docs/archives/${selectThematicCheckbox.logo}" class="col-2" style="width: 50%"></img>
                            <label for="eventDemandesReferencement}" class="col-8">${selectThematicCheckbox.programm_title}</label>
                         </div>`;

        return content;
    }

    fetchSelectThematic = async () => {

        const req = `getDemandesReferencement`;

        await fetch(`https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req}`)
            .then(res => res.json())
            .then(selectThematic => {
                this.displaySelectThematic({ selectThematicCheckboxs : selectThematic });
            })
    }
}

customElements.define('select-thematic', SelectThematic);
