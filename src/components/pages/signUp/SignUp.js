import { Component, eventBus } from "../../../core";
import "../../molecules";
import "../../atoms"
import { initialFieldsState } from "./initialState";
import { FormManager } from "../../../core/FormManager/FormManager";
import { Validator } from "../../../core/FormManager/Validator";
import { authService } from "../../../services/Auth";
import { appRoutes } from "../../../constants/appRoutes";
import { appEvents } from "../../../constants/appEvents";

export class SignUp extends Component{
   
  constructor() {
    super();
    this.state = {
      error: '',
      isLoading: false,
      fields: {
        ...initialFieldsState,
      },
    }

    this.form = new FormManager();
  }
  toggleisLoading = () =>{
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading
      }
    })
  }


  registerUser = (data) => {
    this.toggleisLoading();
    authService
      .signUp(data.email, data.password)
      .then((user) => {
        authService.user = user;
        eventBus.emit(appEvents.changeRoute, { target: appRoutes.katalog});
        eventBus.emit(appEvents.userAuthorized);
      })
      .catch((error) => {
        this.setState((state) => {
          return {
            ...state,
            error: error.message,
          };
        });
      })
      .finally(()=> {
        this.toggleisLoading();
      })
  };

  validateForm = (evt) => {
    if (evt.target.closest("shop-input")) {
      this.form.init(this.querySelector(".registration-form"), {
        email: [
          Validator.email("Email is not valid"),
          Validator.required("The field should not be empty"),
        ],
        password: [Validator.required("The field should not be empty")],
      });
    }
  };

  validate = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        fields: {
          ...state.fields,
          ...evt.detail,
        },
      };
    });
  };

  componentDidMount() {
    this.addEventListener("click", this.validateForm);
    this.addEventListener("submit", this.form.handleSubmit(this.registerUser));
    eventBus.on(appEvents.validateControls, this.validate);
  }

  render() {
    const {
      fields: { email, password },
    } = this.state;
    return`
    <header class="main_header">
      <div class="main_desctop">
        <div class="header_text">
          <h2>РЕГИСТРАЦИЯ</h2>
        </div>
        <my-preloader is-loading="${this.state.isLoading}">
          <form class="mt-5 mx-5 registration-form" style="max-width: 750px">
          <div class="invalid-feedback text-center mb-3 d-block">${this.state.error}</div>
          <shop-input
                type="email"
                label="Email"
                control-name="email"
                value="${email.value}"
                is-valid="${email.isValid}"
                is-touched="${email.isTouched}"
                error-message="${email.errors?.message}"
            ></shop-input>
            <shop-input
                type="password" 
                label="Password"
                control-name="password"
                class-name="first-pass"
                value="${password.value}"
                is-valid="${password.isValid}"
                is-touched="${password.isTouched}"
                error-message="${password.errors?.message}"
            ></shop-input>
            <button type="submit" class="btn btn-secondary">регистрация</button>
          </form>
        </my-preloader>
     
      </div>
   </header>
    `;
  }
}
customElements.define('shop-sign-up', SignUp )