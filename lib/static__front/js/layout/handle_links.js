/* global lib, funcs */

!function () {

    funcs.a_event_main = function (e) {

        if (lib.trim(e.currentTarget.href).length > 0) {

            if (!e.currentTarget.hasAttribute('redirect')) {

                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }

                if (location.href !== e.currentTarget.href) {

                    e.stopPropagation();

                    history.pushState("", "", e.currentTarget.href);

                    funcs.popstatist();

                }

            }

        }

    };

    funcs.div_href_event_main = function (e) {

        if (e.currentTarget.hasAttribute('href')&&lib.trim(e.currentTarget.getAttribute('href')).length > 0) {

            if (!e.currentTarget.hasAttribute('redirect')&&!e.currentTarget.hasAttribute('redirect_blank')) {

                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }

                if (location.href !== e.currentTarget.getAttribute('href')) {

                    e.stopPropagation();

                    history.pushState("", "", e.currentTarget.getAttribute('href'));

                    funcs.popstatist();

                }

            }else if(e.currentTarget.hasAttribute('redirect')){

                location.href = e.currentTarget.getAttribute('href');

            } else if (e.currentTarget.hasAttribute('redirect_blank')){

                window.open(e.currentTarget.getAttribute('href'));

            }

        }

    };

    funcs.handle_links = function () {

        lib._looper_challenge(lib.query_selector_all('a'), function (element) {

            lib.event_attach(element, 'click', funcs.a_event_main, 1);

        });

        lib._looper_challenge(lib.query_selector_all('div'), function (element) {

            lib.event_attach(element, 'click', funcs.div_href_event_main, 1);

        });

    };

}();
