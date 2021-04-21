class ThematicForm extends HTMLElement {
    constructor() {
        super();

        // const thematic = [' Biothech',' Blockchain',' BlueTech',' Capteurs I.O.T',' Data & I.A',' Energie',' Greentech',' Impression 3d',' Robotique',' système d\'information',]
        this.innerHTML = `
                        <section>
                            <div class="container">
                                <h1 class="" style="color: white; background-color: #25555c">Choix de mes collectifs technologiques</h1>
                                <p>Si ma solution s'inscrit dans uen thématique technologique, je sélectionne la thématique qui lui correspond ci-dessous</p>
                                <div class="container" id="thematicCheckbox"></div>
                                
                            </div> 
                        </section>
                    `

                    this.fetchThematicForm();
    }

            displayThematicForm = ({ thematicCheckboxs }) => {
                let res = thematicCheckboxs.filter(thematicCheckbox => thematicCheckbox.afficher != 'n').map((thematicCheckbox, index) => this.thematicCheckbox({ thematicCheckbox})).join('');
                document.getElementById("thematicCheckbox").innerHTML = res;
            }

            thematicCheckbox = ({ thematicCheckbox }) => {

                    const content = `
                                <div class="row">
                                    <input class="btn-primary" type="checkbox" id="checkbox1"></input>
                                    <label for="checkbox1">${thematicCheckbox.nom}</label>
                                </div>
                            `;

                return content;    
            }

            fetchThematicForm = async () => {
                
                const req_suite = `params=where%20id_event!=399%20and`;

                await fetch(`//www.mlg-consulting.com/smart_territory/form/api.php?action=getEvents&${req_suite}`)
                        .then(res => res.json())
                        .then(thematicForm => {
                            this.displayThematicForm({ thematicCheckboxs : thematicForm });
                        })
            }
    }

customElements.define('thematic-form', ThematicForm);