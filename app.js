//   search btn

searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle("active");
    console.log("search form");
}

//     home section

var swipper= new Swiper('.books-list' , {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1040: {
            slidesPerView: 3
        },
    },
});

//      featured section

varswiper = new Swiper(".featured-slider",{
    spaceBetween:10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        450: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1040: {
            slidesPerView: 4
        },
    },
});