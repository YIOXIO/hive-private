const app = document.querySelector('#app')
const btn = document.querySelector('#project-button');

console.log(btn)






function openNextPage(evt) {
    evt.preventDefault();
    app.innerHTML = `
    <section id="project-section" class="private-office-projects">
    <h2 class="section-title">Проекты</h2>
    <p class="section-description">Опишите свои проекты: текущие и те, что в портфолио. Другие
        участники увидят
        их и смогут помочь вам. </p>
    <h2 class="section-subtitle">Личные</h2>

    <div class="elements">
        <ul class="elements__card">
            <li class="card">
                <img src="./images/Klaster-project-card-image.png" alt="">
                <h3 class="card__name">Klaster</h3>
                <p class="card__description">Разработка концепции системы мотивации граждан по
                    освоению
                    необходимых компетенций в развитии
                    цифровой экономики России и получению цифровых сертификатов.</p>
                <div class="card__projects-wrapper">
                    <button type="button" class="card__projects-button">Посмотреть проект</button>
                    <button class="card__projects-button-edit"></button>
                </div>
            </li>
            <li id="ls" class="card">
                <img src="./images/Flower-project-card-image.png" alt="">
                <h3 class="card__name">HACKMANAGE</h3>
                <p class="card__description">Разработка портального решения для органов управления
                    административным округом и администрацией города в рамках концепции «Умного
                    города»</p>
                <div class="card__projects-wrapper">
                    <button type="button" class="card__projects-button">Посмотреть проект</button>
                    <button id="edit-card" class="card__projects-button-edit"></button>
                </div>
            </li>
        </ul>
    </div>
    <form class="form-add-project" action="">
        <h2 class="section-title">Редактирование проекта</h2>
        <h3>Описание проекта</h3>
        <ul>
            <li class="form-add-project-flex">
                <label for="name">Название проекта</label>
                <input type="text" id="name" placeholder="Назавание проекта" name="project_name" />
            </li>
            <li class="form-add-project-flex">
                <label for="describe">Краткое описание проекта</label>
                <textarea name="project_describe" id="describe"
                    placeholder="Описание проекта, какую проблему решает" cols="30" rows="10"></textarea>
            </li>
        </ul>
        <ul>
            <h3>Стадия реализация проекта</h3>
            <li class="form-add-project-flex">
                <label for="idea">Идея</label>
                <input type="text" id="idea" name="project_idea" placeholder="Идея">
            </li>
            <li class="form-add-project-flex">
                <label for="required_invest">Требуемые инвестиции</label>
                <input type="number" id="required_invest" name="project_required_invest"
                    placeholder="Требуемые инвестиции (руб.)">
            </li>
            <li class="form-add-project-flex">
                <label for="invole_invest">Привлеченные инвестиции</label>
                <input type="number" id="invole_invest" name="project_invole_invest"
                    placeholder="Привлеченные инвестиции (руб.)">
            </li>
        </ul>
        <ul>
            <h3>Добавьте презентацию</h3>
            <li class="form-add-project-flex">
                <input type="file" accept="">
            </li>
        </ul>
        <ul>
            <h3>Добавьте обложку проекта</h3>
            <li class="form-add-project-flex">
                <input type="file"">
                    </li>
                </ul>
            </form>
        </section>
    
    `
}

btn.addEventListener('click', openNextPage); 