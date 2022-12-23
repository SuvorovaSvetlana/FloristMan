import { Component } from "../../../core";
import './kontakty.scss'

export class Kontakty extends Component{

  render(){
    return`
    <header class="main_header">
    <div class="containe-fluid main_desctop">
      <div class="header_text">
         <h2>КОНТАКТЫ</h2>
      </div>
      <p class="kontakty_text">
      Студия цветочного дизайна «FLORIST»<br> это услуги профессиональных 
      флористов, которые располагают повседневным и экзотическим ассортиментом цветов, 
      выполняют оригинальные букеты и композиции, создают цветочные аксессуары,
      оформляют мероприятия и предлагают массу свежих идей.
    </p>
    </div>
    <div class="container-fluid kontakty_desktop">
      <div class="row">

        <div class="col-md-4">
          Подпишитесь на наши странички
          <p>
          <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill="#555" fill-rule="evenodd" d="M18.8961111,0 L1.10388889,0 C0.494166667,0 0,0.494166667 0,1.10388889 L0,18.8963889 C0,19.5058333 0.494166667,20 1.10388889,20 L10.6825,20 L10.6825,12.255 L8.07611111,12.255 L8.07611111,9.23666667 L10.6825,9.23666667 L10.6825,7.01055556 C10.6825,4.42722222 12.2602778,3.02083333 14.5647222,3.02083333 C15.6686111,3.02083333 16.6172222,3.10277778 16.8938889,3.13972222 L16.8938889,5.83944444 L15.2955556,5.84027778 C14.0422222,5.84027778 13.7997222,6.43583333 13.7997222,7.30972222 L13.7997222,9.23694444 L16.7886111,9.23694444 L16.3994444,12.2552778 L13.7997222,12.2552778 L13.7997222,20 L18.8963889,20 C19.5058333,20 20,19.5058333 20,18.8961111 L20,1.10388889 C20,0.494166667 19.5058333,0 18.8961111,0 L18.8961111,0 Z"/>
          </svg>
          <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill="#555" fill-rule="evenodd" d="M20,3.89414472 C19.2641845,4.21529021 18.473566,4.43237024 17.6434684,4.52978778 C18.4904484,4.02991562 19.1413322,3.23830222 19.4472943,2.29557658 C18.6545979,2.75837382 17.7761905,3.09486065 16.8419412,3.27537714 C16.0936587,2.49092304 15.0272067,2 13.846993,2 C11.5811072,2 9.74377622,3.80823319 9.74377622,6.03937612 C9.74377622,6.35566351 9.78013844,6.66428024 9.85026557,6.9601125 C6.44000883,6.7916134 3.41675,5.18332907 1.39293274,2.73919714 C1.03969975,3.33597545 0.837369973,4.03017131 0.837369973,4.77013552 C0.837369973,6.17156737 1.56175733,7.4075684 2.6627534,8.13219126 C1.99031207,8.11096906 1.35760944,7.92917412 0.804384245,7.62694963 C0.803864784,7.64382511 0.803864784,7.6604449 0.803864784,7.67783176 C0.803864784,9.63436461 2.2180954,11.2669394 4.09490539,11.6384556 C3.75076296,11.730248 3.38843941,11.7798517 3.01416828,11.7798517 C2.74950327,11.7798517 2.49263016,11.7547942 2.24199057,11.7074917 C2.76404815,13.3119407 4.27931379,14.4801841 6.07482825,14.5129123 C4.67046738,15.5960113 2.9014454,16.2421376 0.978922899,16.2421376 C0.64776697,16.2421376 0.321286184,16.2232166 1.39282525e-13,16.1856303 C1.81577341,17.3316287 3.9725725,18 6.28962508,18 C13.8368635,18 17.9639754,11.8453081 17.9639754,6.50805421 C17.9639754,6.33316287 17.9598197,6.15852723 17.9520278,5.98491434 C18.7543342,5.41575045 19.4501513,4.70416773 20,3.89414472 L20,3.89414472 Z"/>
          </svg>
            #floristman
          </p>
        </div>

        <div class="col-md-4">
          Позвоните нам
          <p> +375 44 000000<br>+375 29 000000</p>
           
        </div>

        <div class="col-md-4">
        Напишите нам
          <p>
            <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill="#555" fill-rule="evenodd" d="M18.3333333,2.5 C19.2538079,2.5 20,3.24619208 20,4.16666667 L20,15.8333333 C20,16.7538079 19.2538079,17.5 18.3333333,17.5 L1.66666667,17.5 C0.746192084,17.5 2.33317167e-15,16.7538079 1.77635684e-15,15.8333333 L1.77635684e-15,4.16666667 C1.66363121e-15,3.24619208 0.746192084,2.5 1.66666667,2.5 L18.3333333,2.5 Z M7.16778842,11.3283763 L2.25878629,16.1802269 L17.5826888,16.1802269 L12.7258856,11.3778956 L10,13.2651744 L7.16778842,11.3283763 Z M18.641191,7.29207207 L13.8450345,10.6082871 L18.641191,15.3441081 L18.641191,7.29207207 Z M1.36233243,7.35321045 L1.36233243,15.1889532 L6.04751587,10.5577581 L1.36233243,7.35321045 Z M18.3176115,3.82130698 L1.69800793,3.82130698 C1.59345552,3.82130698 1.50986643,3.84987713 1.44724066,3.90701743 C1.38461489,3.96415772 1.35642774,4.03810002 1.36267922,4.12884432 L1.36267922,5.7485199 L10,11.6557985 L18.6440397,5.69051298 L18.6440397,4.19917622 C18.6454952,4.06518753 18.6147031,3.96780126 18.5516635,3.90701743 C18.4886239,3.84623359 18.4106065,3.81766344 18.3176115,3.82130698 Z"/>
            </svg> 
            floristman@gmail.com
          </p> 
        </div>

      </div>

      </div>
  </header>
  <shop-katalog></shop-katalog>
    `
  }
}
customElements.define('shop-kontakty', Kontakty)