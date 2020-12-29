import {
    LitElement,
    html,
    css
} from 'lit-element';
class MyElement extends LitElement {
    static get properties() {
        return {
            message: {
                type: String
            },
            myBool: {
                type: Boolean
            },
            myArray: {
                type: Array
            }
        };
    }

    static get styles() {
        return css `
          p {
            font-family: Roboto;
            font-size: 16px;
            font-weight: 500;
          }
          .red {
            color: red;
          }
          .blue {
            color: blue;
          }
        `
    }

    constructor() {
        super();
        this.message = 'Hello World! From my element!';
        this.myBool = true;
        this.myArray = ['an', 'array', 'of', 'test', 'data'];
    }

    render() {
        return html `
            <p class="${this.myBool?'red':'blue'}">styled paragraph</p>
            <div>${this.message}</div>
            <ul>${this.myArray.map(item=>html`
                <li>${item}</li>
            `)}
            </ul>
            ${this.myBool ?html`
            <p>Render some html if myBool is true</p>`:html`
            <p>Render some html if myBool is false</p>
            `}
            <button @click="${this.clickHandler}">Click</button>
        `;
    }

    clickHandler(event) {
        console.log(event.target);
        this.myBool = !this.myBool;
    }
}
customElements.define('my-element', MyElement);