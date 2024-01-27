/// <reference types="../@types/jquery" />

let sectionoffset=$('#about').offset().top 
$(window).on('scroll', function() {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > sectionoffset-70) {
        $('.navbar').css('backgroundColor','rgba(0, 0, 0, 0.5)');
        
    }
    else{
        $('.navbar').css('backgroundColor','transparent');
    }
});

//  $('a[href^"#"]').on('click',function(e){
$('.linkitem').on('click',function(e){
   
    let ahref=e.target.getAttribute('href');
let sectionoffset=$(ahref).offset().top 

$('html, body').animate({scrollTop:sectionoffset}, 2000);
})

window.prompt("Enter Message Here");

$(function(){
    $('.loader').fadeOut(1500 ,function(){
        $('.loading').slideUp(2000 ,function(){
            $('body').css('overflow','auto');
            $('.loading').remove();
        });
    });
})

let boxcolor=$('.box-color');

boxcolor.eq(0).css('backgroundColor','red');
boxcolor.eq(1).css('backgroundColor','blue');
boxcolor.eq(2).css('backgroundColor','gray');
boxcolor.eq(3).css('backgroundColor','yellow');
boxcolor.eq(4).css('backgroundColor','orange');


$('#icon').on('click',function(){
    $('.side-box').animate({width:'toggle',paddingInline:'toggle'},1000);
})

$('.box-color').on('click',function(e){
let currentcolor=$(e.target).css('backgroundColor');
$('*').css('color',currentcolor);
})





