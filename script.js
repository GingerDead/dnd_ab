// Загружаем сохранённого персонажа при загрузке страницы
window.onload = function() {
    loadCharacter();
};

// Функция для сохранения персонажа
function saveCharacter() {
    const name = document.getElementById('charName').value;
    const race = document.getElementById('charRace').value;
    const charClass = document.getElementById('charClass').value;

    if (name && race && charClass) {
        const character = {
            name: name,
            race: race,
            class: charClass
        };
        // Сохраняем в localStorage
        localStorage.setItem('character', JSON.stringify(character));
        displayCharacter();
    } else {
        alert('Заполните все поля!');
    }
}

// Функция для отображения персонажа
function displayCharacter() {
    const character = JSON.parse(localStorage.getItem('character'));
    const display = document.getElementById('charDisplay');
    if (character) {
        display.textContent = `Имя: ${character.name}, Раса: ${character.race}, Класс: ${character.class}`;
    } else {
        display.textContent = 'Пока нет сохранённых персонажей.';
    }
}

// Функция для загрузки персонажа
function loadCharacter() {
    displayCharacter();
}

// Регистрируем Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(() => console.log('Service Worker зарегистрирован'))
        .catch(err => console.log('Ошибка:', err));
}