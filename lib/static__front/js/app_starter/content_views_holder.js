/* global funcs, lib, api */

!function () {

    funcs.start_views__beem = function (container_id, key, suffix) {

        lib.add_class('width-100-cent', container_id);
        lib.add_class('height-fit-content', container_id);
        $(container_id).parentNode.style.background = `var(--darker-black-moder)`;
        $(container_id).innerHTML = `<section class="display-flex width-100-cent height-100-cent align-items-center justify-content-center">${funcs.loader_svg__lof}</section> `;
        funcs.send_get_me_something({suffix: suffix, category: 'content things', type: 'content fully', repeat: false, container_id: container_id, key: funcs.content_key, how: 'seer'}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/post_viewer/view_post.php?key_viewer=${key}&how=seer`);

    };

    funcs.content_views_holder = function (container_id) {

        if (funcs.search.hasOwnProperty('key_viewer') && funcs.search.key_viewer.length > 0) {

            if (funcs.search.key_viewer !== funcs.content_key) {

                funcs.start_views__beem(container_id, funcs.search.key_viewer, lib.switch_num);

                ++lib.switch_num;

            }

        } else {

            funcs.main_all40000004();
        }

    };
}();
!function () {

    funcs.categorize_full_content = function (obj) {

        if (obj.success.api_result.hasOwnProperty('mis_conduct') || obj.success.api_result.message.post[0].hasOwnProperty('none')) {

            funcs.main_all40000004();
        } else {

            if (obj.success.api_result.message.post[0].cate_post === 'post') {
                funcs.content_key = funcs.search.key_viewer;
                funcs.start_post_full_main(obj.success.api_result.message.post[0], obj.recognize.container_id, obj.recognize.suffix);

            } else if (obj.success.api_result.message.post[0].cate_post === 'blog') {
                funcs.content_key = funcs.search.key_viewer;
                funcs.start_blog_full_main(obj.success.api_result.message.post[0], obj.recognize.container_id, obj.recognize.suffix);

            } else if (obj.success.api_result.message.post[0].cate_post === 'times') {

                funcs.content_key = funcs.search.key_viewer;

                funcs.start_times_full_main(obj.success.api_result.message.post[0], obj.recognize.container_id, obj.recognize.suffix);

            }

        }

    };
}();
