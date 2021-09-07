class VideoHeader extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <style>
        @media all and (max-device-width: 480px) {
            h1 #video-header-title {
                font-size: 6vw;
                background-color: blue;
            }
        }
    </style>
        <section style="height: 70vh; text-align: center">
            <video loop="" muted="" autoplay="" style="width: 100%;height: 70vh;object-fit: cover;">

                <source src="//www.mlg-consulting.com/manager_cc/docs/archives/french_village_video_cover_2018_1.mp4"
                    type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video>
            <h1 id="video-header-title" style="font-size: 6vh; margin: -50vh auto 0 auto; width: 85vw; color: white !important;">Bienvenue au point de convergence des solutions, des territoires et des décideurs francophones de l’innovation</h1>
        </section>`;
  }
}

customElements.define("video-header", VideoHeader);
