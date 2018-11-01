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

    $(document).ready(function () {
        setEqualHeight($('.wrapper'));
    });

    baguetteBox.run('.functions', {
        captions: function(element) {
            return element.getElementsByTagName('img')[0].alt;
        }
    });

});
