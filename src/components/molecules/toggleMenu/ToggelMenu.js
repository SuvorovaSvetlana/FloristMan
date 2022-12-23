import * as core from  '../../../core';
import "./toggelMenu.scss"
import { eventBus } from "../../../core";
import { appEvents } from "../../../constants/appEvents";

export class ToggelMenu extends core.Component {
  constructor(){
    super();
    this.state ={
      isOpen: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  static get observedAttributes(){
    return ['items']
  }

  toggleMenu(){
    this.setState((state) =>{
      return {
        isOpen: !state.isOpen
      }
    })
  }

  componentDidMount(){
    window.addEventListener('toggle-menu', this.toggleMenu)
    this.addEventListener('click', () => {
     this.dispatch('toggle-menu')
    })
  
  }

  render(){
     const items = JSON.parse(this.props.items)
    return `
        <aside class="menu ${this.state.isOpen ? 'open' : 'closed'}">
          <ul>
            ${items.map((item) =>(
              `
                <li>
                    <a href='${item.href}'
                    style="text-decoration: none;
                    color: #530a52;
                    font-size: 25px;
                    line-height: 30px;">
                    ${item.label}</a>
                </li>
              `
            )).join(' ')}
          </ul>
          <button type="button" class="btn">закрыть</button>
        </aside>
    `;
  }
}
customElements.define('my-toggel-menu', ToggelMenu)