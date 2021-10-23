/* global funcs, lib, api */

!function () {

    funcs.music_info_holder = function (container_id) {


        if ((funcs.search.hasOwnProperty('key') && funcs.search.key.length > 0)) {

            if ((funcs.search.key !== funcs.music_info_key)) {

                lib.add_class('width-100-cent', container_id);

                $(container_id).parentNode.style.background = `var(--liter-black-moder)`;

                funcs.fully_start_music_info_now(container_id, funcs.search.key, lib.switch_num);

                ++lib.switch_num;

            }


        } else {
            funcs.main_all40000004();
        }

    };

    funcs.fully_start_music_info_now = function (container_id, key, suffix) {

        $(container_id).innerHTML = `<section style="background:transparent;" class="display-flex width-100-cent height-100-cent align-items-center justify-content-center">${funcs.loader_svg__lof}</section> `;

        funcs.send_get_me_something({suffix: suffix, category: 'music things', type: 'music info', repeat: false, container_id: container_id, key: key}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/music/music_info.php?hash=${key}`);
    };

}();
