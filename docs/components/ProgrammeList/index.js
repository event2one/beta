class ProgrammeList extends HTMLElement {

    constructor() {
        super();

        this.id_cycle_lang = this.getAttribute('id_cycle_lang');

        this.innerHTML = `<div>
                              <h4 class="mb-4">Choix de mes thématiques</h4>
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

        const content = `<tr>
                            <td><input name="programme" class="btn-primary" type="checkbox" id="prog_${programmeListCheckbox.id_cycle_lang}" value="${programmeListCheckbox.id_cycle_lang}"></input></td>
                            <td><label for="prog_${programmeListCheckbox.id_cycle_lang}}">
                            <img src="https://www.mlg-consulting.com/manager_cc/docs/archives/${programmeListCheckbox.logo}" style="width:5vh"></img>
                             ${programmeListCheckbox.programm_title}</label></td>
                         </tr>`;

        return content;
    }

    fetchProgrammeList = async () => {

        const req = this.id_cycle_lang ? `&id_cycle_lang=${this.id_cycle_lang}` : ``;

        await fetch(`https://www.mlg-consulting.com/smart_territory/form/api.php?action=getDemandesReferencement${req}`)
            .then(res => res.json())
            .then(programmeList => {
                this.displayProgrammeList({ programmeListCheckboxs: programmeList });
            })
    }
}

customElements.define('programme-list', ProgrammeList);
