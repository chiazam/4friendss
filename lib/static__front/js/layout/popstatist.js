/* global funcs, lib */

!function () {

    funcs.get_url_scroll = function () {

        let scroll_url = 0;

        if (funcs.hold_url_scroll.hasOwnProperty(window.location.href)) {

            scroll_url = funcs.hold_url_scroll[window.location.href];
            
        }

        window.scrollTo(0,scroll_url);
        
    };

    funcs.hold_url_scroll = {};

    funcs.set_url_scroll = function () {

        let set_url_scroll = function () {

            funcs.hold_url_scroll[window.location.href] = lib.documentScrollTop();
            
        }

        lib.event_attach(window, 'scroll', set_url_scroll, !false);
        
    };

    lib.event_attach(window, 'scroll', funcs.set_url_scroll, !false);
    
}();


!function () {

    funcs.popstatist = function () {

        funcs.url_respawner();

        funcs.route_kick_off();

        funcs.get_url_scroll();

    };

    lib.event_attach(window, 'popstate', funcs.popstatist, 1);

}();