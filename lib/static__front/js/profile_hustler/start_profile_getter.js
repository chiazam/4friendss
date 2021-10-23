/* global funcs, lib, api */

!function () {

    funcs.present_profile_form = {};

    funcs.is_new_profile = function (new_prof, present_prof) {

        return ((new_prof.hasOwnProperty('fr_user') && present_prof.fr_user !== new_prof.fr_user) || (new_prof.hasOwnProperty('fr_g') && new_prof.hasOwnProperty('fr_r') && present_prof.fr_r !== new_prof.fr_r && present_prof.fr_g !== new_prof.fr_g));

    };

    funcs.is_profile = function (prof_obj) {
        return (prof_obj.hasOwnProperty('fr_user') || (prof_obj.hasOwnProperty('fr_g') && prof_obj.hasOwnProperty('fr_r')));
    };

    funcs.trigger_profile_main=function (container_id) {

        lib.add_class('width-100-cent', container_id);
        lib.add_class('height-fit-content', container_id);
        $(container_id).innerHTML = `<section class="display-flex width-100-cent height-100-cent align-items-center justify-content-center">${funcs.loader_svg__lof}</section> `;

        let _present_profile_form = funcs.search;

        delete(_present_profile_form.means);

        funcs.send_get_me_something({suffix: lib.switch_num, category: 'profile', type: 'profile info', repeat: false, container_id: container_id}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/profile_handler/profile_basic_info.php?${funcs.obj_to_url_query(_present_profile_form)}`);

        ++lib.switch_num;
    }

    funcs.trigger_profile = function (container_id) {

        if (funcs.is_profile(funcs.search) === true) {

            if (funcs.is_new_profile(funcs.search, funcs.present_profile_form) === true || $(container_id).dataset.fetched !== 'true') {

                funcs.trigger_profile_main(container_id);

            }

        } else {
            funcs.swipe_404_shit();
        }

    };

}();
