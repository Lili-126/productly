export class Modal {
    constructor (classes) {
        this.classes = classes;
        this.modal = '';
        this.modalContant = '';
        this.modalCloseBtn = '';
        this.overlay = '';
    }
    buildModal(content) {
        // overlay
        this.overlay = document.createElement('div');
        this.overlay.classList.add('overlay');
    }
}