export class Article {
    constructor({id, title, urlToImage, tags, ...rest}) {
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
    }
    // Article generator
    generatorArticle() {
        let template = '';
        const article = document.createElement('article');
        article.className = 'strategy block-shadow';
        article.setAttribute('data-id', this.id);

        this.urlToImage &&
        (template += `<img class="block-shadow__image" src=${this.urlToImage} alt="People">`);

        if(this.title || this.tags) {
            template += `<div class="block-shadow__container">`;
            if(this.title) {
                template += `<h3 class="block-shadow__title">${this.title}</h3>`;
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
}