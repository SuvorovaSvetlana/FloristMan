import { Component } from "../../../core";
import './oNas.scss'
export class ONas extends Component{

  render(){
    return`
    <header class="main_header">
    <div class="main_desctop">
      <div class="header_text">
          <h2>О НАС</h2>
      </div>
      <p class="oNas_text">
        Студия цветочного дизайна «FLORIST» открыла свои двери в 2017 году.<br> 
        За это время мы создали тысячи букетов для различных праздников и мероприятий,
        провели много интересных мастер-классов,<br> оформили интерьеры домов и предприятий цветочными композициями, 
        комнатными растениями и уличными цветами, <br> внушающее количество быстрых доставок,<br> 
        и наши клиенты всегда оставались довольны.
      </p>
    </div>
  </header>
  <shop-katalog></shop-katalog>
  `
  }
}
customElements.define('shop-o-nas', ONas)