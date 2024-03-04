const buttonMenu = document.querySelector('#navbar .menu')
const sidebar = document.querySelector('#sidebar-nav')

buttonMenu.addEventListener('click', function(){
    sidebar.classList.toggle('sidebar-open')
});

// owl carousel
$(document).ready(function() {
    $('header .owl-carousel').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:5000, // Waktu dalam milidetik (ms)
        autoplayHoverPause:false, // Jeda autoplay saat kursor mouse di atas slider
        margin: 0,
        responsiveClass: true,
        center: false,
        nav: false,
        dots: false,
        // navText: [
        //     "<h1><</h1>",
        //     "<h1>></h1>",
        // ],
        responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
        }
    });
});

$(document).ready(function() {
    $('.slider-tournament .owl-carousel').owlCarousel({
        loop: true,
        autoplay:false,
        autoplayTimeout:5000, // Waktu dalam milidetik (ms)
        autoplayHoverPause:true, // Jeda autoplay saat kursor mouse di atas slider
        margin: 10,
        responsiveClass: true,
        center: false,
        nav: true,
        dots: false,
        navText: [
            "<div class='tombol'><</div>",
            "<div class='tombol'>></div>"
        ],
        responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        }
        }
    });
});