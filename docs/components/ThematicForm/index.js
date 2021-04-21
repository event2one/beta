class ThematicForm extends HTMLElement {
    constructor() {
        super();

        // const thematic = [' Biothech',' Blockchain',' BlueTech',' Capteurs I.O.T',' Data & I.A',' Energie',' Greentech',' Impression 3d',' Robotique',' système d\'information',]
        this.innerHTML = `
                        <section>
                            <div class="container">
                                <h1 class="text-dark">Choix de mes collectifs technologiques</h1>
                                <p>Si ma solution s'inscrit dans uen thématique technologique, je sélectionne la thématique qui lui correspond ci-dessous</p>
                                <input type="checkbox" id="checkbox1"></input>
                                <label for="checkbox1">Collectif des experts - BlueTech</label>
                            </div> 
                        </section>
                    `
    }
}

customElements.define('thematic-form', ThematicForm);
//                                 <div class="container" id="nextEvent" style="box-shadow: 0px 0px 5px 1px grey"></div>