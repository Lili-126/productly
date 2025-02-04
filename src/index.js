import { Article } from "./js/Article";
import { data } from "./js/Data";
import { Modal } from "./js/Modal";
import { ArticleModal } from "./js/ArticleModal";

// событие window  onload- это успешная загрузка
window.onload = function() {
    console.log('Hello Rolling School');

    // Render Articles
  if (data) {
        renderArticlesToDom();
    }

    // Tags
    addTagsClickHandler();

    // generate base Modal from Modal Class
    addToolsClickHandler();
};

//вешаем событие click на контейнер родителя tags
const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {

        let clickedTag = e.target;

    // переключаем теги с tag_colored на tag_bordered
        if (clickedTag.classList.contains('tag')) {
            removeSelectedTags();
            selectClickedTag(clickedTag);
        }
    // сортируем картинки по тегам
        if (clickedTag.innerText === 'All') {  // если 'All' показываем все картинки
            showAllStrategies();
        } else {
            filterStrategyBySelectedTag(clickedTag.innerText); // иначе сортируем по названию тега
        }
    });
};

//убирает оранжевый цвет с тега strategies__tags при клике
const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
            tags.forEach( tag => {
            tag.classList.remove('tag_colored');
            tag.classList.add('tag_bordered');
        });
};

// добавляет оранжевый цвет на тег strategies__tags при клике
const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag_colored');
    clickedTag.classList.remove('tag_bordered');
};

const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
     strategy.classList.remove('strategy_hidden');
    })
};


// показывает и скрывае картинки в зависимости от выбранного тега
const filterStrategyBySelectedTag = (coloredTag) => {
   let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
   strategies.forEach(strategy => {
    strategy.classList.add('strategy_hidden');
    strategy.querySelectorAll('.tag').forEach( tag => {
        if(tag.innerText === coloredTag) {
            strategy.classList.remove('strategy_hidden');
        }
    })
   })
};


// помещаем все карточки articles в пустой контейнер
const renderArticlesToDom = () => {
    let strategyWrapper = getStrategyWrapper();
    generateArticles(data).forEach(article => {
        strategyWrapper.append(article.generatorArticle())
    });

    addStrategyClickHandler();
}

// получаем и отчищаем контейнер для articles элементов
const getStrategyWrapper = () => {
    const strategiesWrapper = document.querySelector('.strategy-wrapper');
    strategiesWrapper.innerHTML = '';
    return strategiesWrapper;
}

//создаём карточки articles
const generateArticles = (date) => {
    const articles = [];
    data.forEach(article => {
        articles.push(new Article(article));
    });
    return articles;
}


// при клике на кнопку открывается модалка
const addToolsClickHandler = () => {
    document.querySelector('.header__buttons').addEventListener('click', (e) => {
        const target = e.target;
        if (target == document.querySelector('.button.button_bordered')) {
            generateToolsModalSignIn();
        } else if (target == document.querySelector('.button.button_colored')) {
            generateToolsModalSignUp();
        }
    })
}

 //наполненем модалку Sign In содержимым
const generateToolsModalSignIn = () => {
    let template = `<img class="modal__image" src="src/assets/images/strategies/img1.png" alt="Person">`;
        template += `<form class="modal__form">`;
        template += `<h2 class="modal__title">Sign In</h2>`;
        template += `<input class="form_text" name="email" type="email" autocomplete="email" placeholder="Email Address">`;
        template += `<input class="form_text" name="password" type="password" autocomplete="new-password" placeholder="Password">`;
        template += `<div class="modal-buttons">`;
        template += `<label class="label-checkbox">`;
        template += `<input class="modal-buttons__checkbox" type="checkbox"> Remember me`;
        template += `</label>`;
        template += `<button class="button button_colored">Sign In</button>`;
        template += `</д>`;
        template += `</form>`;

    renderModalWindow(template);
}
 //наполненем модалку Sign Up содержимым
const generateToolsModalSignUp = () => {
    let template = `<img class="modal__image" src="src/assets/images/strategies/img2.png" alt="Person">`;
        template += `<form class="modal__form">`;
        template += `<h2 class="modal__title">Sign Up</h2>`;
        template += `<input class="form_text" name="email" type="email" autocomplete="email" placeholder="Email Address">`;
        template += `<input class="form_text" type="text" autocomplete="username" placeholder="First Name">`;
        template += `<input class="form_text" type="text" autocomplete="username" placeholder="Last Name">`;
        template += `<input class="form_text" name="password" type="password" autocomplete="new-password" placeholder="Password">`;
        template += `<input class="form_text" name="confirm-password" type="password" autocomplete="confirmPassword" placeholder="Confirm Password">`;
        template += `<button class="button button_colored">Sign Up</button>`;
        template += `</form>`;

    renderModalWindow(template);
}

//создание экземпляра модалки общий для всех модалок
const renderModalWindow = (content) => {
    const modal = new Modal('tools-modal');
    modal.buildModal(content);
}

// получаем по клику модальное окно АРТИКЛА
const addStrategyClickHandler = () => {
    document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {
        if (e.target.closest('.strategy')) {
            let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
            let clickedStrategyIdDate = getClickedDate(clickedStrategyId);

            renderArticleModalWindow(clickedStrategyIdDate);
        }
    });
}

const getClickedDate = (id) => {
    return data.find( article => article.id == id);
}

const renderArticleModalWindow = (article) => {
    let modal = new ArticleModal('article-modal', article);
    modal.renderModal();
};