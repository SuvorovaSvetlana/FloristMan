import { Component } from "../../../core";
import './katalog.scss'

export class Katalog extends Component {
  render() {
    return `
    
    <header class="main_header">
      <div class="main_desctop">
        <div class="header_text">
        <h2>КАТАЛОГ</h2>
        </div>
      </div>
    </header>
    <my-information></my-information>
    <shop-katalog></shop-katalog>
    
    `;
  }
}
customElements.define("shop-katalog-page", Katalog);
