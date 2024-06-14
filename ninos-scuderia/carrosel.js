const swiper = new Swiper('.swiper', {

    direction: 'horizontal',

    slidesPerView: 3.3,
    spaceBetween: 32,

    centeredSlides: true,
    rewind: true,
    
    mousewheel: {
        invert: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    pagination: {
        el: '.swiper-pagination',
    },
});