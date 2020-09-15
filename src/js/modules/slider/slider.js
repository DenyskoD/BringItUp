 export default class Slider {
    constructor({page = null, btns = null, next = null, prev = null} = {}) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }
}