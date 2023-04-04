const privateOffice = document.querySelector('.private-office');
const btn = document.querySelector('#project-button');
const template = document.querySelector('#template');
const projectSection = document.querySelector('#project-section');
const porjectFrom = document.querySelector('#form');
const addButton = document.querySelector('.project-section-add-button');
const editProfileButton = document.querySelector('#profile-edit-button')
const profileForm = document.querySelector('.profile-form')
const templateProfileForm = document.querySelector('#profile-form-tmpl');
const profileName = document.querySelector('#profile-name');
const nameInput = document.querySelector('#name-input');
const editForm = document.querySelector('.profile-form');

function openPage(evt) {
    evt.preventDefault();
    projectSection.append(template.content.cloneNode(true));
    privateOffice.replaceWith(projectSection);

}

function openProfilePage(evt) {
    evt.preventDefault();
    profileForm.append(templateProfileForm.content.cloneNode(true));
    privateOffice.replaceWith(profileForm);
}


btn.addEventListener('click', openPage);
editProfileButton.addEventListener('click', openProfilePage)


function openForm() {
    porjectFrom.classList.add('opened');
}

function openPopUp() {
    profileForm.classList.add('profile-form_opened')
}


addButton.addEventListener('click', openForm);
