import { Article } from "./js/Article";
import { data } from "./js/Data";

// событие window  onload- это успешная загрузка
window.onload = function() {
    console.log('Hello Rolling School');

    // Render Articles
  if (data) {
        renderArticlesToDom();
    }

    // Tags
    addTagsClickHandler();
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

const renderArticlesToDom = () => {
    let strategyWrapper = getStrategyWrapper();
    generateArticles(data).forEach(article => {
        strategyWrapper.append(article.generatorArticle())
    });
}

const getStrategyWrapper = () => {
    const strategiesWrapper = document.querySelector('.strategy-wrapper');
    strategiesWrapper.innerHTML = '';
    return strategiesWrapper;
}

const generateArticles = (date) => {
    const articles = [];
    data.forEach(article => {
        articles.push(new Article(article))
    });
    return articles;
}

