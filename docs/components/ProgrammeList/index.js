class ProgrammeList extends HTMLElement {

    constructor() {
        super();

        this.innerHTML = `<div class="container">
                              <h2 class="mb-4">Sélectionner une thématique</h2>
                              </hr>
                              <p><b>Je sélectionne dans la liste ci-dessous le besoin prioritaire auquel répond ma solution</b></p>
                              <table class="table table-sm">
                                <tbody id="programmeList"></tbody>
                              </table>
                          </div>`;

        this.fetchProgrammeList();
    }

    displayProgrammeList = ({ programmeListCheckboxs }) => {

        let res = programmeListCheckboxs.map((programmeListCheckbox) => this.programmeListCheckbox({ programmeListCheckbox })).join('');
        document.getElementById("programmeList").innerHTML = res;

    }

    programmeListCheckbox = ({ programmeListCheckbox }) => {

        const content = `
                         <tr>
                            <td><input name="eventDemandesReferencement" class="btn-primary" type="checkbox" id="${programmeListCheckbox.id_cycle_lang}" value="${programmeListCheckbox.id_cycle_lang}"></input></td>
                            <td><img src="https://www.mlg-consulting.com/manager_cc/docs/archives/${programmeListCheckbox.logo}" style="width:5vh"></img></td>
                            <td><label for="eventDemandesReferencement}" >${programmeListCheckbox.programm_title}</label></td>
                         </tr>   
                        `;

        return content;
    }

    fetchProgrammeList = async () => {

        const req = `getDemandesReferencement`;

        await fetch(`https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req}`)
            .then(res => res.json())
            .then(programmeList => {
                this.displayProgrammeList({ programmeListCheckboxs : programmeList });
            })
    }
}

customElements.define('programme-list', ProgrammeList);
