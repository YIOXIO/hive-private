const cardTemplate = document.querySelector('.card-template')
const elements = document.querySelector('.elements__card');

function createCard(element) {
    const card = cardTemplate.cloneNode(true);
    card.querySelector('.card__image').src = element.link;
    card.querySelector('.card__name').textContent = element.name;
    card.querySelector('.card__description').textContent = element.description;
    elements.prepend(card)
}

// function renderCard() {
//     elements.prepend(createCard);
// }