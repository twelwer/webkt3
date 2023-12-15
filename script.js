class CardComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 300px;
                    border: 1px solid #ccc;
                    padding: 16px;
                    margin: 16px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                img {
                    width: 100%; 
                    height: 100%; 
                    object-fit: cover; 
                }
                h2 {
                    color: #333;
                }
                p {
                    color: #666;
                }
            </style>
            <div>
                <div id="header"></div>
                <div id="content"></div>
            </div>
        `;
        shadow.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        const headerSlot = this.shadowRoot.querySelector('#header');
        const contentSlot = this.shadowRoot.querySelector('#content');
        const headerTemplate = this.querySelector('template[slot="header"]');
        const contentTemplate = this.querySelector('template[slot="content"]');
        if (headerTemplate) {
            headerSlot.appendChild(document.importNode(headerTemplate.content, true));
        }

        if (contentTemplate) {
            contentSlot.appendChild(document.importNode(contentTemplate.content, true));
        }
    }
}
customElements.define('card-component', CardComponent);
