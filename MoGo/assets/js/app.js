$(function() {

    //шапка закреплена при скролле страницы
    var header = $("#header"), 
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
        checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    //при обновлении страницы закреп. шапка
    function checkScroll(scrollOffset) {
        if(scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    /* */


    /* Блок с навигацией - скролл по нажатию */
    $("[data-scroll]").on("click",function(event) {
        event.preventDefault();

        var $this = $(this), 
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active"); //убираем класс - активная ссылка
           $this.addClass("active"); //только одна активная

           $("html, body").animate({
            scrollTop: blockOffset
           }, 500);
    });
    
    /* Бургер меню */
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active"); //крестик - закрытие менюшки
        $("#nav").toggleClass("active");
    
        //Закрытие меню бургер)) - изучить!!!!!!
        window.onscroll = magic;
            function magic() {
                if (window.pageYOffset) {
                $("#nav").removeClass("active");
                $("#nav_toggle").removeClass("active");
                }
            };
    });


    /* Service - What we do - сворач. элемент Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this), 
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });


    /* slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    

    
});