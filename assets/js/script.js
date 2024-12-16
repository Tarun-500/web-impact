// Optional: Add a smooth scrolling effect for buttons or links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


// slider for card on first slider 
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,  
    spaceBetween: 20,  
    loop: true,    
    speed: 600,    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 2,  
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,  
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 4, 
            spaceBetween: 30,
        },
    },
});

// slider for logo left to right 
var swiperLeft = new Swiper(".swiper-left", {
    slidesPerView: 7,
    spaceBetween: 30,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 3,  
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,  
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 6, 
            spaceBetween: 30,
        },
    },
});

// slider for logo's right ot left
var swiperRight = new Swiper(".swiper-right", {
    slidesPerView: 7,
    spaceBetween: 30,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 3,  
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,  
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 6, 
            spaceBetween: 30,
        },
    },
});




