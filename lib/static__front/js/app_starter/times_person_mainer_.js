/* global funcs, lib, api */

!function () {

    funcs.content_times_holder = function (container_id) {

        if ((funcs.search.hasOwnProperty('by_g') && funcs.search.by_g.length > 0) && (funcs.search.by_g !== funcs.times_by_g)) {

            funcs.start_times_by_g(container_id, funcs.search.by_g);

        } else if (funcs.search.by_g.length === 0) {

            funcs.main_all40000004();
        }

    };

    funcs.start_times_by_g = function (container_id, by_g) {

        lib.add_class('width-100-cent', container_id);
        lib.add_class('height-fit-content', container_id);
        $(container_id).parentNode.style.background = `var(--liter-black-moder)`;
        $(container_id).innerHTML = `<section style="background:transparent;" class="display-flex width-100-cent height-100-cent align-items-center justify-content-center">${funcs.loader_svg__lof}</section> `;
        funcs.send_get_me_something({suffix: lib.switch_num, category: 'content things', type: 'profile times', repeat: false, container_id: container_id, by_g: by_g}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/times_popper/times_owner.php?by_g=${by_g}`);

        ++lib.switch_num;

    };
}();
