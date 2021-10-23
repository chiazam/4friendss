/* global funcs, lib, api */

!function () {

    funcs.start_dialogue = function (container_id) {

        if (funcs.search.bim !== funcs.active_bim || funcs.search.qim !== funcs.active_qim) {

            if ((funcs.search.hasOwnProperty('qim') && funcs.search.qim.length > 0) && (funcs.search.hasOwnProperty('bim') && funcs.search.bim.length > 0) && ((funcs.search.bim !== funcs.userinfo.logged_user.info.b) || (funcs.search.qim !== funcs.userinfo.logged_user.info.q))) {

                lib.add_class('width-100-cent', container_id);
                lib.add_class('min-height-100-cent', container_id);

                $(container_id).parentNode.style.background = `var(--liter-black-moder)`;

                let suffix = lib.switch_num;

                ++lib.switch_num;

                funcs.get_dialogue_starter_ajax(container_id, funcs.search.bim, funcs.search.qim, suffix);

            } else {
                funcs.active_bim = funcs.search.bim;
                funcs.active_qim = funcs.search.qim;
                funcs.main_all40000004();
            }

        }


    };

    funcs.get_dialogue_starter_ajax = function (container_id, bim, qim, suffix) {

        lib.inc_html(`<section style="background:transparent;" class="display-flex width-100-cent height-fit-content border-box align-items-center justify-content-center padding-5-px">${funcs.loader_svg__lof}</section>`, container_id);

        funcs.send_get_me_something({suffix: suffix, category: 'dialogue things', type: 'validate', repeat: false, container_id: container_id, bim: bim, qim: qim}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/chat/chat_starter.php?bic=${bim}&qic=${qim}`);

    };


}();
