const privateOffice = document.querySelector('.private-office');
const btn = document.querySelector('#project-button');
const template = document.querySelector('#template');
const projectSection = document.querySelector('#project-section');
const porjectFrom = document.querySelector('#form');
const addButton = document.querySelector('.project-section-add-button');

function openPage(evt) {
    evt.preventDefault();
    projectSection.append(template.content.cloneNode(true));
    privateOffice.replaceWith(projectSection);

}

btn.addEventListener('click', openPage);

function openForm() {
    porjectFrom.classList.add('opened');
}

addButton.addEventListener('click', openForm);
