class VideoHeader extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <section>
            <p>Video Header</p>
        </section>`;
    }
}


customElements.define("video-header", VideoHeader);