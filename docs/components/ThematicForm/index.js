class ThematicForm extends HTMLElement {

    constructor() {
        super();

        this.innerHTML = `<div>
                              <h4 class="mb-4">Choix de mes collectifs technologiques</h4>
                              <p>Si ma solution s'inscrit dans une thématique technologique, je sélectionne la thématique qui lui correspond ci-dessous</p>
                              <div class="row" id="thematicCheckbox"></div>
                              <div id="trad"></div>
                          </div>`

        this.fetchThematicForm();
    }

    displayThematicForm = ({ thematicCheckboxs }) => {

        const collectifList = ['collectif_technologique', 'collectif_sectoriel'];

        let res = thematicCheckboxs.filter(thematicCheckbox => thematicCheckbox.cycle_lang_type == collectifList[0]).map((thematicCheckbox) => this.thematicCheckbox({ thematicCheckbox })).join('');
        document.getElementById("thematicCheckbox").innerHTML = res;
    }

    thematicCheckbox = ({ thematicCheckbox }) => {

        const content = `<div class="col-6">
                            <input name="eventCycleLang" class="btn-primary" type="checkbox" id="cl_${thematicCheckbox.id_cycle_lang}" value="${thematicCheckbox.id_cycle_lang}"></input>
                            <label for="cl_${thematicCheckbox.id_cycle_lang}">${thematicCheckbox.nom_cycle_lang}</label>
                        </div>`;

        return content;
    }

    fetchThematicForm = async () => {

        const req = `getCycleLang`;

        await fetch(`https://www.mlg-consulting.com/smart_territory/form/api.php?action=${req}&filter=cycle_lang_type='collectif_technologique' AND `)
            .then(res => res.json())
            .then(thematicForm => {
            const gt = {
	    "name":"test",
	    "description":"test description",
	    "id":500,
	    "months": ["January","February","March"],
	    "content":"<i>Hello world</i>",
	    "gt_translate_keys": ["name", "description", {"key": "months", "format": "list"}, {"key": "content", "format": "html"}],
	    "user": {
	        "login":"test",
	        "bio":"test user",
	        "gt_translate_keys": [{"key": "bio", "format": "text"}]
	    }
	}
	
document.getElementById("trad").innerHTML = JSON.stringify(gt);
         
            //document.getElementById("gt").innerHTML = JSON.stringify(thematicForm);
                this.displayThematicForm({ thematicCheckboxs: thematicForm });
            })
    }
}

customElements.define('thematic-form', ThematicForm);
