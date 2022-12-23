import { appRoutes } from "../../../constants/appRoutes";
import * as core from "../../../core";
import "./flowerCard.scss";
import "../../molecules";

export class FlowerCard extends core.Component {
  static get observedAttributes() {
    return ["title", "poster", "description", "id", "kind"];
  }

  render() {
    return `
        <div class="flower">
            <div class="flower-image">
            <span class="play"><span class="name">${this.props.title}</span></span>
            <shop-link to="${appRoutes.bouquets}/${this.props.id}">
              <img src="${this.props.poster}" alt="${this.props.title}" />
            </shop-link>
            </div>
        </div>
        `;
  }
}

customElements.define("flower-card", FlowerCard);
