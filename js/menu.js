$(document).ready(function () {

    var status = false;

    $('#icon').stop().click(function(e) {
        if (status == false) {
            $('.open').stop().slideUp(500);
            $('.close').stop().slideDown(500);
            $('nav ul.first').stop().slideDown(500);
            status = true;
        } else {
            $('.open').stop().slideDown(500);
            $('.close').stop().slideUp(500);
            $('nav ul.first').stop().slideUp(500);
            status = false;
        }
        
    })

    function RespNav() {
        if ((($('ul.first').children('li').length)*151) > $(window).width()) {
            $('nav ul.first').css('display', 'none');
            $('nav ul.first').css('width', '100%');
                $('nav ul.first li').css('width', '100%');
            $('#icon').css('display', 'block');    
        } else {
            $('nav ul.first').css('display', 'block');
            $('nav ul.first').css('width', 'auto');
            $('nav ul.first li').css('background-color', 'none');
                $('nav ul.first li').css('width', '150px');
            $('#icon').css('display', 'none');     
        }
    }

    RespNav()

    $('nav ul li').stop().hover(
        function(e) {
            $(this).children('ul').stop().slideDown(500);
        },
        function(e) {
            $(this).children('ul').stop().slideUp(500);
        }
    )

    $(window).resize(function () { 
        RespNav();
    });
});