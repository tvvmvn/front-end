import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        var result = await fetch('http://localhost:3001/api').then(res => res.json())
        console.log(result)
        return `
            <h1>Settings</h1>
            <p>${result.message}</p>
        `;
    }
}