/* global funcs, lib, api */

!function () {

    funcs.personal_music_holder = function (container_id) {

        if ((funcs.search.hasOwnProperty('bip') && funcs.search.bip.length > 0) && (funcs.search.hasOwnProperty('gip') && funcs.search.gip.length > 0) && (funcs.search.gip !== funcs.personal_music_gip || funcs.search.bip !== funcs.personal_music_bip)) {
            lib.add_class('width-100-cent', container_id);
            lib.add_class('height-fit-content', container_id);
            $(container_id).parentNode.style.background = `var(--liter-black-moder)`;

            funcs.start_personal_music_holder(container_id, funcs.search.gip, funcs.search.bip, lib.switch_num);

            ++lib.switch_num;
        } else if (funcs.search.gip.length === 0 || funcs.search.bip.length === 0) {
            funcs.main_all40000004();
        }

    };

    funcs.start_personal_music_holder = function (container_id, gip, bip, suffix, thiers = true) {

        $(container_id).innerHTML = `<section style="background:transparent;" class="display-flex width-100-cent height-100-cent align-items-center justify-content-center">${funcs.loader_svg__lof}</section> `;

        funcs.send_get_me_something({suffix: suffix, category: 'music things', type: 'personal music', repeat: false, container_id: container_id, gip: gip, bip: bip, thiers: thiers}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/music/music_owner_info.php?gip=${gip}&bip=${bip}`);


    };
}();
