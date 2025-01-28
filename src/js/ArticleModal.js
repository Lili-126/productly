import { Modal } from "./Modal";

export class ArticleModal extends Modal {
  constructor(classes, {id, name, title, urlToImage, tags, content, date}) {
    super(classes);
      this.id = id;
      this.name = name;
      this.title = title;
      this.urlToImage = urlToImage;
      this.tags = tags;
      this.content = content;
      this.date = date;
  }

// Article Modal  generator
  generatorContent() {
    let template = '';
    const article = document.createElement('div');
    article.className = 'article-modal__content';

    this.urlToImage &&
    (template += `<img class="block-shadow__image ${this.name}" src=${this.urlToImage} alt="People">`);

    if(this.title || this.tags || this.content || this.date) {
        template += `<div class="block-shadow__container">`;

        if(this.date) {
          template += `<p class="block-shadow__date">${this.date}</p>`;
      }

        if(this.title) {
            template += `<h3 class="block-shadow__title">${this.title}</h3>`;
        }

        if(this.content) {
          template += `<p class="block-shadow__text">${this.content}</p>`;
      }

        if(this.tags) {
            template += `<div class="block-shadow__tags">`;
            this.tags.map(tag => {
                template += `<span class="tag tag_color">${tag}</span>`
            })
            template += `</div>`;
        }
        template += `</div>`;
    }

    article.innerHTML = template;
    return article;
  }

  renderModal() {
    const content = this.generatorContent();
    super.buildModal(content);
  }

}