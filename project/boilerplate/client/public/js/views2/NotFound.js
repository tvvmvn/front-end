import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    // must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(params)
    this.setTitle('Dashboard');
  }

  async doSomething() {}

  async getHtml() {
    return `
      <h1>404 Not Found</h1>
    `;
  }
}



