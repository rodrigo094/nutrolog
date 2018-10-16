function clickForm(){
    $('.e-general__main--form .button').click(function(){
        e.preventDefault();
    });
};

function openPopUp(){
    $('.e-general__banners-top--massa').click(function(){
        $('.e-general__popup-massa').show();
        $('.e-general__popup-massa').addClass('e-active');
    });

    $('.e-general__banners-top--diet').click(function(){
        $('.e-general__popup-diet').show();
        $('.e-general__popup-diet').addClass('e-active');
    });

    $('.e-general__banners-top--snack').click(function(){
        $('.e-general__popup-snack').show();
        $('.e-general__popup-snack').addClass('e-active');
    });

    $('.e-general__banners-top--energy').click(function(){
        $('.e-general__popup-energy').show();
        $('.e-general__popup-energy').addClass('e-active');
    });

    $('.e-general__banners-bottom--peso').click(function(){
        $('.e-general__popup-peso').show();
        $('.e-general__popup-peso').addClass('e-active');
    });

    $('.e-general__banners-bottom--refeicao').click(function(){
        $('.e-general__popup-refeicao').show();
        $('.e-general__popup-refeicao').addClass('e-active');
    });

    $('.e-general__banners-bottom--bcaa').click(function(){
        $('.e-general__popup-bcaa').show();
        $('.e-general__popup-bcaa').addClass('e-active');
    });

    $('.e-general__banners-bottom--isolate').click(function(){
        $('.e-general__popup-isolate').show();
        $('.e-general__popup-isolate').addClass('e-active');
    });
};

function closePopUp(){
    $('.e-general__popup-massa-close').click(function(){
        $('.e-general__popup-massa').hide();
    });

    $('.e-general__popup-diet-close').click(function(){
        $('.e-general__popup-diet').hide();
    });

    $('.e-general__popup-snack-close').click(function(){
        $('.e-general__popup-snack').hide();
    });

    $('.e-general__popup-energy-close').click(function(){
        $('.e-general__popup-energy').hide();
    });

    $('.e-general__popup-peso-close').click(function(){
        $('.e-general__popup-peso').hide();
    });

    $('.e-general__popup-refeicao-close').click(function(){
        $('.e-general__popup-refeicao').hide();
    });

    $('.e-general__popup-bcaa-close').click(function(){
        $('.e-general__popup-bcaa').hide();
    });

    $('.e-general__popup-isolate-close').click(function(){
        $('.e-general__popup-isolate').hide();
    });
};

function slickMobile(){
    $('.e-general__banners-mobile').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
};

$(document).ready(function(){
    clickForm();
    openPopUp();
    closePopUp();
    slickMobile();
});