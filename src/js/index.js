// событие window  onload- это успешная загрузка
window.onload = function() {
    // Tags
    addTagsClickHandler();
}

//вешаем событие click на контейнер родителя tags
const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTags();
        }
    });
}

//убирает оранжевый цвет с тега strategies__tags
const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
        console.log(tags);
            tags.forEach( tag => {
            tag.classList.remove('tag_colored');
            tag.classList.add('tag_bordered');
        });
}

