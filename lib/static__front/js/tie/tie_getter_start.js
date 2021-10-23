(function () {

    funcs.tie_get_holder = function (container_id) {

        if (funcs.search.hasOwnProperty('tie_key') && funcs.search.tie_key.length > 0) {

            if (funcs.search.tie_key !== funcs.tie_key) {
            
                funcs.trigger_tied_getter(container_id);

                funcs.tie_key = funcs.search.tie_key;

            }
        
        } else {

            funcs.main_all40000004();
        }
        
    };

    funcs.trigger_tied_getter = function(container_id) {

        lib.add_class('width-100-cent', container_id);
        lib.add_class('min-height-100-cent', container_id);

        let suffix = lib.switch_num;

        ++lib.switch_num;

        lib.inc_html(`<section class='overflow-hidden border-1px-solid border-right-none border-left-none width-100-cent height-fit-content display-flex flex-column'>

            <section>${funcs.call_headers_naver('<section class="display-flex align-items-center justify-content-center font-size-16px"><section class="padding-5-px"><i draggable="false" class="fa-retweet fa"></i>&nbsp;Tied</section> <section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.trigger_tied_getter(\'' + container_id + '\');"><i class="fa fa-redo-alt"></i></section></section>')}</section>
        
            <section id="tied_main_holder_${suffix}" class="lighter"></section>
        
            <section id="refresh_tied_main_holder_${suffix}" class="padding-5-px lighter"></section>

        </section>`, container_id);

        funcs.start_views_tied(`tied_main_holder_${suffix}`, funcs.search.tie_key, suffix);
        
    }

    funcs.start_views_tied = function (container_id, key, suffix, offset=0, limit=3) {

        $(container_id).nextElementSibling.innerHTML = `<section class="display-flex width-100-cent height-100-cent align-items-center justify-content-center">${funcs.loader_svg__lof}</section> `;

        funcs.send_get_me_something({suffix: suffix, category: 'content things', type: 'tied content', repeat: false, container_id: container_id, key: key, offset: offset, limit: limit}, {'4friendss_user': funcs.userinfo.login_token}, `${api}/api/post_viewer/tied_viewer.php?key=${key}&offset=${offset}&limit=${limit}`);

    };
    
})();