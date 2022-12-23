import { Component } from "../../../core";

export class NewYearOffer extends Component{

  render(){
    return `
    <div class="container-fluid"> 
      <div class="row">

          <div class="katalog_pages col mt-3">
            <div class="card">
              <img src="../../../../src/assets/images/newYearBuket2.jpg" alt="...">
              <div class="card-body card-img-overlay" style="color: white;">
                <p class="card-text"><h2>Букеты</h2></p>
                <a href="#" class="btn"><h3>подробнее</h3></a>
              </div>
            </div>
          </div>

          <div class="katalog_pages col mt-3">
          <div class="card">
            <img src="../../../../src/assets/images/newYearBuket3.jpg" alt="...">
            <div class="card-body card-img-overlay" style="color: white;">
              <p class="card-text"><h2>Букеты</h2></p>
              <a href="#" class="btn"><h3>подробнее</h3></a>
            </div>
          </div>
        </div>

        <div class="katalog_pages col mt-3">
        <div class="card">
          <img src="../../../../src/assets/images/newYearBuket1.jpg" alt="...">
          <div class="card-body card-img-overlay" style="color: white;">
            <p class="card-text"><h2>Букеты</h2></p>
            <a href="#" class="btn"><h3>подробнее</h3></a>
          </div>
        </div>
      </div>

      <div class="katalog_pages col mt-3">
      <div class="card">
        <img src="../../../../src/assets/images/newYearBuket.jpg" alt="...">
        <div class="card-body card-img-overlay" style="color: white;">
          <p class="card-text"><h2>Букеты</h2></p>
          <a href="#" class="btn"><h3>подробнее</h3></a>
        </div>
      </div>
    </div>

  </div
</div>
    `
  }
}
customElements.define('shop-new-year-offer', NewYearOffer)