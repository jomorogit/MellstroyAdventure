// 1. URL для перехода
const DOWNLOAD_URL = "https://drive.google.com/file/d/1x5xEU09mxVRPV1vsNtYA7ne6R1wvxohT/view?usp=sharing";

// 2. Находим кнопку по ID
const button = document.getElementById('downloadButton');

// 3. Добавляем слушатель события (обработчик клика)
button.addEventListener('click', function() {
    // Используем window.open() для открытия ссылки в новой вкладке.
    // Это лучше, чем менять текущую страницу, так как пользователь остается на сайте.
    window.open(DOWNLOAD_URL, '_blank');
});



const DOWNLOAD_URL2 = "https://jomoro87.itch.io/mellstroyadventure";
const button2 = document.getElementById('PlayOnlineButton');
button2.addEventListener('click', function() {
    // Используем window.open() для открытия ссылки в новой вкладке.
    // Это лучше, чем менять текущую страницу, так как пользователь остается на сайте.
    window.open(DOWNLOAD_URL2, '_blank');
});


document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Находим все элементы, которые должны вызывать скроллинг
    // Используем класс, который есть у всех пунктов меню
    const navLinks = document.querySelectorAll('.Links__container__Links'); 

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            
            // Получаем значение ID из атрибута data-target
            const targetId = this.getAttribute('data-target');
            
            // Если data-target существует, находим целевой элемент
            if (targetId) {
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // 2. Выполняем плавный скроллинг к целевому элементу
                    targetElement.scrollIntoView({
                        behavior: 'smooth', // Обеспечивает плавность скроллинга
                        block: 'center'      // Прокручивает так, чтобы элемент был вверху экрана
                    });

                    // Если вы использовали div, это не нужно, но
                    // если это были бы ссылки <a>, то нужно предотвратить 
                    // стандартный переход: event.preventDefault();
                }
            }
        });
    });
});