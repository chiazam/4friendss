/* global funcs, lib, name_company */

!function () {

    funcs.start_gallery = function (container_id) {

        if (funcs.awa_gallery_obj === undefined || lib.obj_equals(funcs.awa_gallery_obj, funcs.search) === false) {

            funcs.awa_gallery_obj = funcs.search;

            let file_reloader_handler = `<section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.unsaved_file_reload(funcs.awa_gallery_obj,'result_container_gallery${funcs.awa_gallery_obj.suffix}');"><i class="fa fa-redo-alt"></i></section>`;

            lib.add_class('width-100-cent', container_id);
            lib.add_class('min-height-100-cent', container_id);
            $(container_id).parentNode.style.background = `var(--liter-black-moder)`;

            lib.inc_html(`

    <section class='width-100-cent height-fit-content display-flex flex-column border-1px-solid border-right-none border-left-none'>
        
        <section>${funcs.call_headers_naver('<section class="display-flex justify-content-center">' + (funcs.select_reason_obj[funcs.awa_gallery_obj.reason].template_title)() + file_reloader_handler + '</section>')}</section>
            
            <section class='padding-5-px'>
                
                <section id="result_container_gallery${funcs.awa_gallery_obj.suffix}"></section>
        
            </section>
            
            <section>

`, container_id);

            funcs.unsaved_file_reload(funcs.awa_gallery_obj, `result_container_gallery${funcs.awa_gallery_obj.suffix}`);

            funcs.handle_links();

        }

    };

    funcs.unsaved_file_reload = function (obj_hold_content, container_id) {

        let form_post = {};
        let fume_rcognizer = {};

        let link_rester = ``;

        if (obj_hold_content.hasOwnProperty('cate_post') && obj_hold_content.hasOwnProperty('saved') && obj_hold_content.saved === 'false' && obj_hold_content.hasOwnProperty('category') && funcs.decode_url(obj_hold_content.category) === 'content maker') {

            form_post = {'4friendss_user': funcs.userinfo.login_token, cate_post: obj_hold_content.cate_post};

            fume_rcognizer = {suffix: obj_hold_content.suffix, category: 'content maker', type: obj_hold_content.reason, repeat: false, display_id: container_id, saved: obj_hold_content.saved, cate_post: obj_hold_content.cate_post};

            link_rester = funcs.select_reason_obj[obj_hold_content.reason].unsaved_link;

        } else if (obj_hold_content.hasOwnProperty('saved') && obj_hold_content.saved === 'false' && obj_hold_content.hasOwnProperty('qic') && obj_hold_content.hasOwnProperty('bic') && obj_hold_content.hasOwnProperty('category') && funcs.decode_url(obj_hold_content.category) === 'dialogue things') {

            form_post = {'4friendss_user': funcs.userinfo.login_token, bic: obj_hold_content.bic, qic: obj_hold_content.qic};

            fume_rcognizer = {suffix: obj_hold_content.suffix, category: 'dialogue things', type: obj_hold_content.reason, repeat: false, display_id: container_id, saved: obj_hold_content.saved, bic: obj_hold_content.bic, qic: obj_hold_content.qic};

            link_rester = funcs.select_reason_obj[obj_hold_content.reason].unsaved_link;

        }

        funcs.make_spinner_ajax(container_id, true, funcs.loader_svg__lof);

        funcs.send_get_me_something(fume_rcognizer, form_post, link_rester);

    };

}();
