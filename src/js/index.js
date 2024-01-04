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
            selectClickedTag(clickedTag);
        
        }
    });
}

//убирает оранжевый цвет с тега strategies__tags при клике
const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
            tags.forEach( tag => {
            tag.classList.remove('tag_colored');
            tag.classList.add('tag_bordered');
        });
}

// добавляет оранжевый цвет на тег strategies__tags при клике
const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag_colored');
    clickedTag.classList.remove('tag_bordered');
}

