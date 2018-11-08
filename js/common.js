$(function() {

	// Custom JS
    function setEqualHeight(list) {
        let tallestcolumn = 0;
        list.each(
            function () {
                let currentHeight = $(this).height();
                if (currentHeight > tallestcolumn) {
                    tallestcolumn = currentHeight;
                }
            }
        );
        list.height(tallestcolumn);
    }

    baguetteBox.run('.functions', {
        captions: function(element) {
            return element.getElementsByTagName('img')[0].alt;
        }
    });

    $(".nav-item a, #invite").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
    });

    // Email ajax
    $("form.callback").submit(function () {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function () {
            $(th).find(".success").addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function () {
                $(th).find(".success").removeClass('active').fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });

    $(window).on("load", function () {
        setEqualHeight($('.wrapper'));
        $('.preloader').delay(3000).fadeOut('slow');
    });
});
