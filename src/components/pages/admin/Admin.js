import { Component, eventBus } from "../../../core";
import { authService } from "../../../services/Auth";
import { appRoutes } from "../../../constants/appRoutes";
import { appEvents } from "../../../constants/appEvents";
import { FormManager } from "../../../core/FormManager/FormManager";
import { storageService } from "../../../services/Storage";
import { databaseService } from "../../../services/Database";


export class Admin extends Component{

 constructor() {
    super();
    this.state = {
      isLoading: false,
    };
    this.form = new FormManager();
  }

  toggleIsLoading() {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  }

  createMovie = (data) => {
    this.toggleIsLoading();
    storageService
      .uploadPoster(data.poster)
      .then((snapshot) => {
        storageService.getDownloadURL(snapshot.ref).then((url) => {
          databaseService
            .create("movies", {
              ...data,
              poster: url,
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  };

  componentDidMount() {
    this.form.init(this.querySelector(".send-data"), {});
    this.addEventListener("submit", this.form.handleSubmit(this.createMovie));
  }


  render(){
    return`
    <header class="main_header ">
      <div class="main_desctop">
        <div class="containe">
          <div class="header_text"></div>
              <div class="container-fluid ">
                <div class="row">
                <div class="col-1"></div>
                  <div class="col-8">

                    <form class="send-data mt-10">
                    <div class="mb-3">
                      <label class="form-label">введите название раздела каталога</label>
                      <input class="form-control" type="text" name="katalogPage">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">введите название букета</label>
                      <input class="form-control" type="text" name="title">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">добавить фото</label>
                      <input class="form-control" type="file" id="formFile" name="poster">
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">стоимость</label>
                      <textarea name="price" class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                    </div>
                    <button type="submit" class="btn btn-secondary">отправить</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="row" style="min-height: 100px"></div>
    </header>
    `
  }
}
customElements.define('shop-admin', Admin)
