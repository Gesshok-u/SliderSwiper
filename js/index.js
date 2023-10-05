new Swiper('.image-slider', {
    // Можливість перетянути слайд мишкою
    simulateTouch: true,

    // Чутливість свайпа
    touchRatio: 1,

    // Курсор перетягування
    grabCursor: true,

    // Кількість слайдів для показу
    slidesPerView: 3,

    // Відступ між слайдами
    spaceBetween: 30,

    // Безкінечність слайдера
    loop: true,

    // Адаптивність сайдера. Брейк поінти. Широта єкрана
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 3,
        }
    },

    // // Автопрокрутка
    // autoplay : {
    //     // Пауза між прокруткою
    //     delay: 200,
    //     // Закінчити на останньому слайді
    //     stopOnLastSlide: true,
    //     // Відключити після ручного переключення
    //     disableOnInteraction: false
    // },

    // Швидкість прокрутки
    speed: 600,

    /*
    // Вертикальний слайдер
    direction: 'vertical',
    */


    // // Ефекти переключення слайдів. Їх є декілька
    // // Куб
    // effect: 'cube',

    // // Доповнення до cube 
    // cubeEffect: {
    //     // Налаштування тіні
    //     slidesShadow: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94
    // },



    // arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },



    // Навігація: булети, поточний стан, прогресбар
    pagination: {
        el: '.swiper-pagination',

        // // Буллети
        // clickable: true,
        // // Динамічні буллети
        // dynamicBullets: true,
        // // Кастомні буллети
        // renderBullet: function (index, className) {
        //     return '<span class=" ' + className + ' ">' + (index + 1) + '</span>';
        // },
   
        // // Фракція (1/6)
        // type: 'fraction',

        // // Кастомна фракія (Фото 1 із 6)
        // renderFraction: function (currentClass, totalClass) {
        //     return 'Фото <span class="' + currentClass + '"></span>' + ' із ' + '<span class="' + totalClass + '"></span>';
        // },

        // Прогресбар (полоса, що слідкує за слайдами)
        type: 'progressbar'

    },
/*
    // Scroll
    scrollbar: {
        el: '.swiper-scrollbar',
        // Можливість пересувати скрол
        draggable: true,
    },
*/
}); 