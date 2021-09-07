class VideoHeader extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
        <section style="width: 100vw; height: 40vh;">
            <video loop muted autoplay style="object-fit: cover; width: 100%; height: 100%;">

                <source src="//www.mlg-consulting.com/manager_cc/docs/archives/french_village_video_cover_2018_1.mp4"
                    type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video>
            <h1 style="font-size: 3rem; font-weight: 800; color: white;">Bienvenue au point de convergence des solutions, des territoires et des décideurs francophones de l’innovation</h1>
        </section>`;
  }
}

customElements.define("video-header", VideoHeader);
