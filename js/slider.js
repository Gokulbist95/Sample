// affilated content

const slider1 = document.getElementById("glide_1");


if(slider1){
    new Glide(slider1, {
        type:"carousel",
        startAt:0,
        autoplay: 3000,
        hoverpause: true,
        perView: 6,
        animationDuration:800,
        animationTimingFunv:"ease-in-out",
        breakpoints:{
            1200:{
                perView:3,
            },
            768:{
                perView:2,
            },

        },
    }).mount();
}


// Owl carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: 3000,
    responsive:{
        0:{
            items:1
        }
    }
})