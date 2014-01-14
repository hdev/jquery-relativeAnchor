/**
 * Name: relativeAnchor.js
 * Author: Florian Hassmann
 * Contact: hassmann@hwdev.de
 * Description:
 *      relativeAnchor replaces the default behaviour of anchor links within
 *      overflowed containers with container scrolling.
 *
 * Usage:
 *      $(document).ready(function() {
 *          $.relativeAnchor.init();
 *      });
 *
 */
(function($) {
    function Init() {
        $("a[href*=#]").click(function (e) {
            var id = this.href.substr(this.href.indexOf("#") + 1);
            var elem = $("#" + id)[0];
            $(elem).parents().each(function () {
                if ($(this).css("overflow") == "hidden") {
                    $(this).scrollTop(elem.offsetTop - this.offsetTop);
                    e.preventDefault();
                }
            });
        });
    }


    $.relativeAnchor = function( options ) {
        return new Init(this, options);
    }
})( jQuery );
