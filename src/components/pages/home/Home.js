import { Component } from "../../../core";

export class Home extends Component{
  constructor(){
    super();

  }


  render(){
    return`
    <header class="main_header">
    <div class="main_desctop">
      <div class="header_text">
      <h2> ЦВЕТЫ и БУКЕТЫ,<br> ПРИЯТНЫЕ МЕЛОЧИ</h2>
      </div>
    </div>
   </header>
    <my-information></my-information>

    <shop-katalog></shop-katalog>
    `
  }
}
customElements.define('shop-home', Home)