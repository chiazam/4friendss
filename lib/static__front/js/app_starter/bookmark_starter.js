/* global funcs, lib, api */

!function () {
    funcs.trigger_bookmarks = function (container_id) {

        lib.add_class('width-100-cent', container_id);
        lib.add_class('min-height-100-cent', container_id);
        $(container_id).parentNode.style.background = `var(--darker-black-moder)`;

        let suffix = lib.switch_num;

        ++lib.switch_num;

        lib.inc_html(`<section style="background:var(--liter-black-moder);" class='overflow-hidden border-box flex-column width-100-cent height-fit-content display-flex flex-column'>

            <section>${funcs.call_headers_naver('<section class="display-flex align-items-center justify-content-center font-size-16px"><section class="padding-5-px"><i draggable="false" class="far fa-bookmark"></i>&nbsp;Bookmarks</section> <section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.trigger_bookmarks(\'' + container_id + '\');"><i class="fa fa-redo-alt"></i></section></section>')}</section>
        
            <section class="margin-top-10-px" id="bookmark_holder_${suffix}"></section>
        
            <section id="refresh_bookmark_holder_${suffix}" class="padding-5-px"></section>

        </section>`, container_id);

        funcs.get_bookmarks_now(`bookmark_holder_${suffix}`, `refresh_bookmark_holder_${suffix}`, suffix);

    };


    funcs.get_bookmarks_now = function (container_id, load_holder, suffix, offset = 0, limit = 3) {

        $(load_holder).innerHTML = `<section class="display-flex width-100-cent height-100-cent align-items-center justify-content-center">${funcs.loader_svg__lof}</section>`;

        funcs.send_get_me_something({suffix: suffix, category: 'profile', type: 'bookmarks', repeat: false, container_id: container_id, load_holder: load_holder, offset: offset, limit: limit}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/views/view_later.php?offset=${offset}&limit=${limit}`);

    };

}();
