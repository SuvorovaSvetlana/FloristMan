import { Component } from "../../../core";
import './dostavka.scss'

export class DostavkaOplata extends Component{

  render(){
    return`
    <header class="main_header">
      <div class="main_desctop">
        <div class="header_text">
          <h2>ДОСТАВКА/ОПЛАТА</h2>
         </div>
      </div>
    </header>
    <my-information></my-information> 
      <div class='container-fluid dostavka'>
          <div class='row'>
              <div class='col-md-2'></div>
                    <div class='col-md-8'>
                      <p><br>
                        Доставка букетов и цветочных композиций осуществляется
                        курьером на заранее оговоренную дату и время.<br>
                        В предпраздничные и праздничные дни доставка
                        осуществляется курьером на заранее оговоренное время,
                        но с временным интервалом в 1,5-2 часа..<br>
                        Стоимость доставки составляет 6,0 рублей,
                        доставка осуществляется в черте города с 8.00 до 21.00,
                        в другое время стоимость доставки оплачивается по ночному
                        тарифу 12,0 рублей..<br>
                        Если Вы указали дату и время, 
                        а Получателя не оказалось по указанному адресу, 
                        то повторная доставка до местонахождения Получателя 
                        оплачивается дополнительно..<br>
                        Доставка до дальних районов: Красный Маяк, Романовичи, 
                        Костюковка, Красное, Мильча и другие 
                        (можно уточнить у флориста, назвав свой адрес) 
                        рассчитывается исходя из расстояния до Получателя.<br><br>
                        Под заказ выполняем работы в следующих направлениях<br>
                        флористики: свадебная, сезонная <br>
                        (весенняя, летняя, осенняя, новогодняя и рождественская),
                        пасхальная, траурная.
                      </p>
                    </div>
              <div class='col-md-2'></div>
          </div>
        </div>
    `
  }
}
customElements.define('shop-dostava-oplata', DostavkaOplata)

// background-image: url(../../../assets/images/fon.jpg);
// background-position: center;
// background-repeat: no-repeat;
// background-size: cover;