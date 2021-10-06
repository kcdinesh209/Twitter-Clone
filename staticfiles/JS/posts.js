//// Java Script for Post page
$(function(){

    //Execute when js-menu-icon is clicked
    $('.js-menu_icon').click(function(){
        // $(this) : self element, namely div.js-menu-icon
        //next():Next to div.js-menu-icon namely div.menu
        // toggle(): switch show and hide
        $(this).next().toggle();
    })
})