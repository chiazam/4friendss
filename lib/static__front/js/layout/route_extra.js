!function () {

    funcs.route_kick_off = function () {

        lib._looper_challenge(lib.query_selector_all('.card'), function (element) {

            if (element.id !== 'card-7' && element.dataset.noroute === undefined) {
                lib.add_class('display-none', element.id);
                lib.remove_class('display-flex', element.id);
            }

        });
        if (funcs.search.hasOwnProperty('means')) {

            lib.add_class('display-none', 'container-2-main');
            lib.remove_class('display-none', 'container-2-hang');

            if (funcs.route_obj.hasOwnProperty(funcs.search.means)) {

                funcs.setDocumentTitle('my_title', `${name_company} - ${funcs.search.means}`);
                (funcs.route_obj[funcs.search.means])();
            } else {

                funcs.main_all40000004();
            }

        } else {

            lib.add_class('display-none', 'container-2-hang');
            lib.remove_class('display-none', 'container-2-main');

            funcs.setDocumentTitle('my_title', `${name_company} - ${funcs.userinfo.logged_user.info.full}`);

        }
    };
    
    funcs.swipe_404_shit = function (container_id = '404_pipper') {

        lib.add_class('width-100-cent', container_id);
        $(container_id).parentNode.style.background = `var(--liter-black-moder)`;

        lib.inc_html(`
        
        <section class='width-100-cent display-flex flex-column margin-auto'>
        
        <section>${funcs.call_headers_naver('<section class="display-flex align-items-center justify-content-center width-100-cent height-100-cent">Page not found</section>')}</section>

            <section>
        
                <img draggable='false' class="width-100-cent" src="${funcs.addImage('icons/404_eee.jpg', 100, 100, 100,1)}"/>

            </section>
        
        </section>

        `, container_id);
        lib.remove_class('display-none', $(container_id).parentNode.id);
        lib.add_class('display-flex', $(container_id).parentNode.id);
        funcs.handle_links();
    };

    funcs.main_all40000004 = function () {

        funcs.setDocumentTitle('my_title', `${name_company} - 404 not found`);
        funcs.swipe_404_shit();
    };

    funcs.error_showers_bit = function (error, title = `<i class="fa fa-exclamation"></i>&nbsp;Take note`, container_id = 'error-giver-show') {
        
        lib.add_class('width-100-cent', container_id);
        lib.inc_html(`

    <section class='overflow-hidden border-1px-solid width-95-cent height-fit-content friends-shadow-shadow display-flex flex-column margin-auto'>
        
        <section>
            
                <section class="display-flex padding-5-px position-sticky heavier border-1px-solid border-top-none border-left-none border-right-none">
        
                    <section class="flex-1 text-align-center font-weight-bold align-items-center justify-content-center display-flex">${title}</section>
        
                    <section class='lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue' onclick=" lib.remove_class('display-flex', $('${container_id}').parentNode.id);lib.add_class('display-none', $('${container_id}').parentNode.id);"/>
        
                        <i class="fa fa-times"></i>

                    </section>

                </section>
    
        </section>

            <section class="buttoners-goog-red">${error}</section>
        
        </section>

        `, 'error-giver-show');
        lib.remove_class('display-none', $(container_id).parentNode.id);
        lib.add_class('display-flex', $(container_id).parentNode.id);
    };

}();