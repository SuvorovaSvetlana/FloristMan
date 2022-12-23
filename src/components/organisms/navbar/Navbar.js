import { appRoutes } from '../../../constants/appRoutes';
import { appEvents } from '../../../constants/appEvents';
import * as core from "../../../core";
import { eventBus } from "../../../core";
import './navbar.scss'
import '../../molecules'


export class Navbar extends core.Component{
  constructor(){
    super();
    this.state = {
      activePath: window.location.pathname,
      items: [
        {
          href: "/katalog",
          label: 'Каталог'
        },
        {
          href: '/',
          label: 'Главная'
        },
        {
          href: '/dostavkaOplata',
          label: 'Доставка/оплата'
        },
        {
          href: '/kontakty',
          label: 'Контакты'
        },
        {
          href: '/oNas',
          label: 'О нас'
        },
        {
          href: '/signIn',
          label: 'вход/регистрация'
        },
      ]
    }
  }

  static get observedAttributes() {
    return ['is-logged']
  }
  onSignOut = (evt) => {
    evt.preventDefault();
    if (evt.target.closest(".sign-out-link")) {
      eventBus.emit(appEvents.userLoggedOut);
    }
  };
  onChangeRoute = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        activePath: evt.detail.target,
      };
    });
  };

  isActiveLink(path) {
    return this.state.activePath === path ? "active" : "";
  }
  componentDidMount(){
    const button = this.querySelector('.navbar-toggler-icon');
    button.addEventListener('click', () => {
     this.dispatch('toggle-menu')
    })
    eventBus.on(appEvents.changeRoute, this.onChangeRoute);
    this.addEventListener('click', this.onSignOut)
  }
  componentWillUnmount() {
    this.removeEventListener("click", this.onSignOut);
  }
  
  render() {
    return `
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">

         <button class="navbar-toggler" type="button" 
            data-bs-toggle="collapse" data-bs-target="#navbarText" 
            aria-controls="navbarText" aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>

         <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <shop-link to="${appRoutes.katalog}">
                  <a class="nav-link active" aria-current="page">
                    <h4>Каталог</h4>
                  </a>
              </shop-link>
            </li>
            <li class="nav-item">
              <shop-link to='${appRoutes.home}'>
                <a class="nav-link ${this.isActiveLink(appRoutes.home)} ">
                  <h4>Главная</h4>
                </a>
              </shop-link>
            </li>
            <li class="nav-item">
            <shop-link to='${appRoutes.dostavkaOplata}'>
              <a class="nav-link ${this.isActiveLink(appRoutes.dostavkaOplata)}">
                <h4>Доставка/оплата</h4>
              </a>
              </shop-link>
            </li>
            <li class="nav-item">
              <shop-link to='${appRoutes.kontakty}'>
                <a class="nav-link ${this.isActiveLink(appRoutes.kontakty)}">
                  <h4>Контакты</h4>
                </a>
              </shop-link>
            </li>
            <li class="nav-item">
              <shop-link to='${appRoutes.oNas}'>
                <a class="nav-link ${this.isActiveLink(appRoutes.oNas)}">
                  <h4>О нас</h4>
                </a>
              </shop-link>
            </li>
          </ul>
        </div>


      <div class="justify-content-center">
        <shop-link to='${appRoutes.home}'>
          <img src="../../../../src/assets/images/buket.png">
          <b class="activ" style="text-decoration: none;">FLORISTMAN</b>
        </shop-link>
        </div>
        <div class="navbar_toggler__icon">
        <shop-link to='${appRoutes.katalog}'>
          <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#530a52" class="bi bi-cart3 activ" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        </shop-link>
        
          ${
            JSON.parse(this.props["is-logged"])
              ? `
            <shop-link to='${appRoutes.admin}'>
              <span class="link ${this.isActiveLink(appRoutes.admin)}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#530a52"  >
                <g><path fill="none" d="M0 0h24v24H0z"/><path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9 6h1v5h-8v-5h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z"/>
                </g>
                </svg>
              </span>
            </shop-link>
              <a href="#' class="sing-out-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="activ" viewBox="0 0 16 16"><path fill-rule="evenodd" fill="#530a52" d="M11.992 8.994V6.996H7.995v-2h3.997V2.999l3.998 2.998-3.998 2.998zm-1.998 2.998H5.996V2.998L2 1h7.995v2.998h1V1c0-.55-.45-.999-1-.999H.999A1.001 1.001 0 0 0 0 1v11.372c0 .39.22.73.55.91L5.996 16v-3.008h3.998c.55 0 1-.45 1-1V7.996h-1v3.998z"/></svg>
              </a>
              `
                : `
                <shop-link to='${appRoutes.signIn}'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#530a52" class="bi bi-person-circle activ" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg> 
        </shop-link>
          <shop-link to='${appRoutes.signUp}'>
            <svg id="레이어_1" width="30" height="30" fill="#530a52" style="enable-background:new 0 0 40 40;" version="1.1" viewBox="0 0 40 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M37.1,5.22h-2v-2c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.4-0.9,0.9v2h-2c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9h2v2  c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9V7h2C37.6,7,38,6.6,38,6.1s-0.4-0.9-0.9-0.9l0,0V5.22z"/>
              <path d="M28.76,20c2.92-2.28,3.44-6.5,1.16-9.42c-1.24-1.6-3.14-2.54-5.16-2.58c-1.64,0-3.22,0.62-4.42,1.74  C18.22,5.8,13.32,4.33,9.38,6.45S3.97,13.47,6.09,17.4c0.65,1.2,1.59,2.23,2.74,2.97C4.87,21.53,2,24.85,2,28.77v8  c0,0.5,0.4,0.9,0.9,0.9c0,0,0,0,0,0h20.88c0.5,0,0.9-0.4,0.9-0.9l0,0v-1.62h8.54c0.5,0,0.9-0.4,0.9-0.9v0V27.3  
              C34.08,23.97,31.92,21.04,28.76,20z M24.76,9.75c2.71-0.05,4.94,2.09,5,4.8c0.05,2.71-2.09,4.94-4.8,5  c-1.79,0.04-3.46-0.91-4.35-2.46l0.05-0.14c0.08-0.17,0.15-0.34,0.22-0.51s0.13-0.4,0.19-0.6s0.05-0.16,0.07-0.25  c0.17-0.64,0.26-1.29,0.26-1.95c0-0.43,0-0.84-0.06-1.26c-0.04-0.26-0.09-0.52-0.16-0.77c0,0,0-0.08,0-0.11  c0.89-1.1,2.22-1.74,3.63-1.75H24.76z 
              M19.41,21c-0.52-0.24-1.05-0.44-1.6-0.59c0.68-0.45,1.29-1,1.8-1.64  c0.39,0.51,0.86,0.95,1.39,1.32c-0.54,0.24-1.04,0.56-1.49,0.93L19.41,21z M7,13.64c-0.01-3.47,2.81-6.29,6.28-6.3  c2.69,0,5.09,1.7,5.96,4.25c0.24,0.66,0.36,1.35,0.36,2.05c-0.01,0.68-0.12,1.36-0.34,2c-0.79,2.34-3.06,4.28-5.62,4.28  c0,0-0.74,0-0.74,0C9.59,19.71,7,16.96,7,13.64z M22.88,35.91H3.8c0,0,0-7.14,0-7.14c0-1.46,0.54-2.88,1.46-4.01  
              c0.97-1.19,2.31-2.05,3.77-2.53c0.89-0.29,1.83-0.41,2.76-0.45c0.96-0.04,1.95-0.1,2.91-0.02c0.5,0.04,1,0.14,1.49,0.24  c0.52,0.11,1.03,0.24,1.53,0.39c0.25,0.07,0.49,0.16,0.74,0.24c0.72,0.25,1.36,0.62,1.97,1.08c0.38,0.29,0.66,0.63,0.99,0.96  c0.27,0.27,0.48,0.67,0.64,1.01c0.26,0.53,0.38,1.11,0.51,1.68c0.22,0.99,0.32,1.99,0.32,3.01c0,0.68,0,1.36,0,2.04  c0,1.15,0,2.29,0,3.44c0,0.03,0,0.07,0,0.1L22.88,35.91z 
              M32.32,33.35h-7.64v-4.58c0,0,0-0.06,0-0.09s0-0.18,0-0.28  c-0.1-1.57-0.61-3.09-1.47-4.4c-0.05-0.07-0.11-0.14-0.16-0.22c-0.18-0.24-0.37-0.48-0.57-0.7l-0.05-0.06  c-0.35-0.38-0.75-0.73-1.18-1.02c0.79-0.47,1.69-0.7,2.61-0.65h2.22c3.36-0.07,6.15,2.59,6.24,5.95V33.35z"/></svg>
          </shop-link>
        </div>       
                `
            }
        
      </div>
    </nav> 
    <my-toggel-menu items='${JSON.stringify(this.state.items)}'></my-toggel-menu>
    `;
  }

}
customElements.define('my-navbar', Navbar) 