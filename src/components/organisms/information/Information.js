import { Component } from "../../../core";
import './information.scss'

export class Information extends Component{
  render(){
    return`
    <div class="information container-fluid">
      <div class=" row" >
        <div class="col-md-3">
          <p>Профессиональные флористы</p>
        </div>
        <div class="col-md-3">
            <p>Красивые цветы и букеты</p>
        </div>
        <div class="col-md-3">
          <p>Внимательное отношение к клиенту</p>
        </div>
        <div class="col-md-3">Быстрая доставка по Гомелю и области</div>
      </div>
    </div>
    `
  }

}
customElements.define('my-information', Information)