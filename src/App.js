import * as core from "./core";
import "./components";
import { appRoutes } from "./constants/appRoutes";
import { authService } from "./services/Auth";
import { eventBus } from "./core";
import { appEvents } from "./constants/appEvents";
import "./auth/PrivateRoute";


export class App extends core.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isLogged: false,
      error: "",
    };
  }

  toggleIsLoading() {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  }

  getUser() {
    this.toggleIsLoading();
    authService
      .init()
      .then((user) => {
        authService.user = user;
        this.setState((state) => {
          return {
            ...state,
            isLogged: Boolean(user),
          };
        });
      })
      .catch((error) => {
        this.setState((state) => {
          return {
            ...state,
            error: error.message,
          };
        });
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  }

  onSignOut = () => {
    this.toggleIsLoading();
    authService
      .signOut()
      .then(() => {
        this.setState((state) => {
          return {
            ...state,
            isLogged: false,
          };
        });
      })
      .catch((error) => {
        this.setState((state) => {
          return {
            ...state,
            error: error.message,
          };
        });
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  };

  setIsAuthorized = () => {
    this.setState((state) => {
      return {
        ...state,
        isLogged: true,
      };
    });
  };

  componentDidMount() {
    this.getUser();
    eventBus.on(appEvents.userAuthorized, this.setIsAuthorized);
    eventBus.on(appEvents.userLoggedOut, this.onSignOut);
  }

  componentWillUnmount() {
    eventBus.off(appEvents.userAuthorized, this.setIsAuthorized);
    eventBus.off(appEvents.userLoggedOut, this.onSignOut);
  }
  render() {  
    return this.state.isLoading
      ? `<my-preloader is-loading="${this.state.isLoading}"></my-preloader>`
      : `
    <it-router>
        <my-navbar  is-logged="${this.state.isLogged}"></my-navbar>
          <main id="main">
            <it-route path="${appRoutes.home}" component="shop-home" title="Home Page"></it-route>
            <it-route path="${appRoutes.dostavkaOplata}" component="shop-dostava-oplata" title="Dostavka Oplata Page"></it-route>
            <it-route path="${appRoutes.katalog}" component="shop-katalog-page" title="Katalog Page"></it-route>
            <it-route path="${appRoutes.kontakty}" component="shop-kontakty" title="Kontakty Page"></it-route>
            <it-route path="${appRoutes.oNas}" component="shop-o-nas" title="O nas Page"></it-route>
            <it-route path="${appRoutes.admin}" component="shop-admin" title="Admin Page"></it-route>
            <it-route path="${appRoutes.signIn}" component="shop-sign-in" title="Sign In Page"></it-route>
            <it-route path="${appRoutes.signUp}" component="shop-sign-up" title="Sign Up Page"></it-route>
            <it-route path="${appRoutes.bouquets}" component="shop-bouquets" title="Bouquets Page"></it-route>
            <it-route path="${appRoutes.bouquetsInBox}" component="shop-bouquets-in-box" title="Bouquets In Box Page"></it-route>
            <it-route path="${appRoutes.flowersAndSweets}" component="shop-flowers-and-sweets" title="Flowers And Sweets Page"></it-route>
            <it-route path="${appRoutes.newYearOffer}" component="shop-new-year-offer" title="New Year Offer Page"></it-route>
            <it-route path="${appRoutes.flowersAndCosmetics}" component="shop-flowers-and-cosmetics" title="Flowers And Cosmetics Page"></it-route>
            <it-route path="${appRoutes.flowers}" component="shop-flowers" title="Flowers Page"></it-route>
            <it-outlet></it-outlet>
            </main>
        <my-footer></my-footer> 
    </it-router>
    ` 
  }
}

customElements.define("shop-app", App);

