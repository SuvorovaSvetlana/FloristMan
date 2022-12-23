import { Component } from "../../../core";

export class Bouquets extends Component{

  render(){
    return `
    <div class="container-fluid"> 
      <div class="row">
          <div class="katalog_pages col mt-3">
            <div class="card">
              <img src="../../../../src/assets/images/rose3.jpg" alt="...">
              <div class="card-body card-img-overlay" style="color: white;">
                <p class="card-text"><h2>Букеты</h2></p>
                <a href="#" class="btn"><h3>подробнее</h3></a>
              </div>
            </div>
          </div>

          <div class="katalog_pages col mt-3">
          <div class="card">
            <img src="../../../../src/assets/images/rose3.jpg" alt="...">
            <div class="card-body card-img-overlay" style="color: white;">
              <p class="card-text"><h2>Букеты</h2></p>
              <a href="#" class="btn"><h3>подробнее</h3></a>
            </div>
          </div>
        </div>

        <div class="katalog_pages col mt-3">
        <div class="card">
          <img src="../../../../src/assets/images/rose3.jpg" alt="...">
          <div class="card-body card-img-overlay" style="color: white;">
            <p class="card-text"><h2>Букеты</h2></p>
            <a href="#" class="btn"><h3>подробнее</h3></a>
          </div>
        </div>
      </div>

      <div class="katalog_pages col mt-3">
      <div class="card">
        <img src="../../../../src/assets/images/rose3.jpg" alt="...">
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
customElements.define('shop-bouquets', Bouquets)