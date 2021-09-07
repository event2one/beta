class VideoHeader extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
        <section>
            <video controls width="250">

                <source src="//www.mlg-consulting.com/manager_cc/docs/archives/french_village_video_cover_2018_1.mp4"
                    type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video>
        </section>`;
  }
}

customElements.define("video-header", VideoHeader);
