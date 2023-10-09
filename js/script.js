$('#slider1').owlCarousel({
    loop: true,
    rewind:true,
    margin: 30,
    nav: false,   
    items: 1,
    dots: false,
    autoplay:true,
    // navText:['<i class="fa-solid fa-angle-left"></i>' , '<i class="fa-solid fa-angle-right"></i>'],
    autoplayTimeout:5000,
    animateIn:'animate__fadeIn',
    animateOut:'animate__fadeOut'
})

$('#slider2').owlCarousel({
    loop: true,
    margin: 30,   
    items: 3,
    autoplay:true,
    autoplayTimeout:2000,
    dots:false,
})    

$('#slider3').owlCarousel({
    loop: true,
    margin: 30,   
    items: 2,
    autoplay:true,
    autoplayTimeout:2000,
    dots:false,
}) 

$('#slider4').owlCarousel({
    loop: true,
    margin: 30,   
    items: 1,
    autoplay:true,
    autoplayTimeout:2000,
    dots:false,
})

$('#slider5').owlCarousel({
    loop: true,
    // margin: 30,  
    dotsEach: true, 
    items: 3,
    autoplay:true,
    autoplayTimeout:2000,
    dots:true,
})

// ============= header fixed =============

$(document).ready(function(){

    $(window).scroll(function(){
        x = $(window).scrollTop()
        // console.log(x)

        if(x>150){
            $('.header1').addClass('fixed')
            $('#scroll').css('opacity','1')
        }
        else{
            $('.header1').removeClass('fixed')
            $('#scroll').css('opacity','0')
        }
    })

    $('#scroll').click(function(){
        $(window).scrollTop(0)
    })
})

// ================ number counter ================

new numberRush('num1', {
    speed: 3,
    steps: 150,
    maxNumber: 5250300
})

new numberRush('num2', {
    speed: 5,
    steps: 1,
    maxNumber: 2535,
})

new numberRush('num3', {
    speed: 3,
    steps: 1,
    maxNumber:255,
})

new numberRush('num4', {
    speed: 1,
    steps: 1,
    maxNumber:4.6,
})

// ============loader===========

    $(window).on('load',function(){
        // $('#loader').delay(1000).fadeOut()
        $('#loader').delay(1000).slideUp()
    })