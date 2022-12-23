import { Component } from "../../../core";
import { appRoutes } from "../../../constants/appRoutes";
import './shopKatalog.scss'

export class ShopKatalog extends Component{
    render(){
      return `
      <section class="katalog">
      <div class="container-fluid"> 
        <div class="row">

          <div class="katalog_pages col mt-3">

            <div class="card">
              <img src="../../../../src/assets/images/rose3.jpg" alt="...">
              <div class="card-body card-img-overlay"style="color: white">
                <p class="card-text"><h2>Букеты</h2></p>
                  <shop-link to='${appRoutes.bouquets}'>
                   <a class="btn btn-secondary"><h3>выбрать</h3></a>
                  </shop-link>
              </div>
            </div>

          </div>
          
            <div class="katalog_pages col mt-3">
              <div class="card">
                <img src="../../../../src/assets/images/buket0.jpg" alt="...">
                <div class="card-body card-img-overlay" style="color: white;">
                <p class="card-text"><h2>Букеты в коробках</h2></p>
                  <shop-link to='${appRoutes.bouquetsInBox}'>
                    <a class="btn btn-secondary"><h3>выбрать</h3></a>
                  </shop-link>
                </div>
              </div>
            </div>
            <div class="katalog_pages col mt-3">
              <div class="card">
                <img src="../../../../src/assets/images/sladosti3.jpg" alt="...">
                <div class="card-body card-img-overlay" style="color: white;">
                  <p class="card-text"><h2>Цветы и сладости</h2></p>
                  <shop-link to='${appRoutes.flowersAndSweets}'>
                      <a class="btn btn-secondary"><h3>выбрать</h3></a>
                  </shop-link>
                </div>
              </div>
            </div>
            <div class="katalog_pages col mt-3">
              <div class="card">
                <img src="../../../../src/assets/images/newYearBuket1.jpg" alt="...">
                <div class="card-body card-img-overlay card_cor" style="color: white;">
                  <p class="card-text"><h2>Новогоднее предложение</h2></p>
                  <shop-link to='${appRoutes.newYearOffer}'>
                     <a class="btn btn-secondary"><h3>выбрать</h3></a>
                  </shop-link>
                </div>
              </div>
            </div>
            <div class="katalog_pages col mt-3">
              <div class="card">
                <img src="../../../../src/assets/images/beautyBox3.jpg" alt="...">
                <div class="card-body card-img-overlay" style="color: white;">
                  <p class="card-text"><h2>Цветы и косметика</h2></p>
                  <shop-link to='${appRoutes.flowersAndCosmetics}'>
                     <a class="btn btn-secondary"><h3>выбрать</h3></a>
                  </shop-link>
                </div>
              </div>
            </div>
            <div class="katalog_pages col mt-3 mb-3">
              <div class="card">
                <img src="../../../../src/assets/images/miks.jpg" alt="...">
                <div class="card-body card-img-overlay" style="color: white;">
                  <p class="card-text"><h2>Цветы поштучно</h2></p>
                  <shop-link to='${appRoutes.flowers}'>
                     <a class="btn btn-secondary"><h3>выбрать</h3></a>
                  </shop-link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
      `
    }

}
customElements.define('shop-katalog', ShopKatalog)