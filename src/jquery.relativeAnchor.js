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
        $("a[href*=#]").each(function() {
            var link = $(this);
            var id = this.href.substr(this.href.indexOf("#") + 1);
            var anchor = $("#" + id)[0];

            // find a viable container for relativeAnchor
            var container = _.find($(anchor).parents(), function(container) {
                return _.find(["overflow", "overflow-x", "overflow-y"], function(attr) {
                    return _.find(["hidden", "auto", "scroll"], function(value) {
                        return $(container).css(attr) == value;
                    })
                })
            });

            if(container) { // has viable container
                link.click(function(e) {
                    $(container).scrollTop(anchor.offsetTop - container.offsetTop);
                    e.preventDefault();
                })
            }
        });
    }

    $.relativeAnchor = function( options ) {
        return new Init(this, options);
    }
})( jQuery );
