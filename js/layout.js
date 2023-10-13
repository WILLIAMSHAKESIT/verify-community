class Layout {
    constructor(){
        this.lastScrollTop = 0;
        this.scrollPosIn = 50
        this.increAmount = 1.000000
        this.timeOut;
    }
    getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const inputDate = new Date(`${year}-${month}-${day}`);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = inputDate.toLocaleDateString('ko-KR', options);
        $('.header-date').text(`${formattedDate}`)
    }
    loadOwlCar(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })
    }
    sideBannerStick(_this){
        var windowHeight = $(window).height();
        var elementHeight = $('.side-banner').height();
        var scrollPos = $(window).scrollTop();
        var newPosition = (windowHeight - elementHeight) / 2 + scrollPos;
        $('.side-banner').css({
            'position': 'absolute',
            'top': newPosition + 'px'
        });
    }
}

$(document).ready(function(){
    let layout = new Layout()
    layout.getTodayDate()
    layout.loadOwlCar()
    $('#toggleAllMenu').click(function(){
        $('.all-menu').slideToggle()
    })
    $(window).scroll(function(event){
        layout.sideBannerStick(this)
    });
})