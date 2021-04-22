class ThematicForm extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `<section>
                            <div class="container">
                                <h1 class="" style="color: white; background-color: #25555c; padding: 10px;">Choix de mes collectifs technologiques</h1>
                                <p>Si ma solution s'inscrit dans uen thématique technologique, je sélectionne la thématique qui lui correspond ci-dessous</p>
                                <div class="row" id="thematicCheckbox"></div>
                            </div> 
                        </section>`

        this.fetchThematicForm();
    }

    displayThematicForm = ({ thematicCheckboxs }) => {
        let res = thematicCheckboxs.filter(thematicCheckbox => thematicCheckbox.afficher != 'n').map((thematicCheckbox, index) => this.thematicCheckbox({ thematicCheckbox })).join('');
        document.getElementById("thematicCheckbox").innerHTML = res;
    }

    thematicCheckbox = ({ thematicCheckbox }) => {

        const content = `
                                <div class="col-4">
                                    <input name="eventCycleLang" class="btn-primary" type="checkbox" id="checkbox1" value="${thematicCheckbox.id_cycle_lang}"></input>
                                    <label for="checkbox1">${thematicCheckbox.nom_cycle_lang}</label>
                                </div>
                        `; 

        return content;
    }

    fetchThematicForm = async () => {

        await fetch(`https://www.mlg-consulting.com/smart_territory/form/api.php?action=getCycleLang&id_event=1635`)
            .then(res => res.json())
            .then(thematicForm => {
                this.displayThematicForm({ thematicCheckboxs: thematicForm });
            })
    }
}

customElements.define('thematic-form', ThematicForm);