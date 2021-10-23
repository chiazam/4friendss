/* global funcs, api, lib */

!function () {

    funcs.notify_real_time = function (notify_id, chaty_id, repeat = 10, limit = 5, offset = 0) {

        funcs.send_get_me_something({category: 'notify things', type: 'real time', repeat: repeat, limit: limit, offset: offset, url: `${api}api/notifier/notify_first.php`, notify_id: notify_id, chaty_id: chaty_id}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/notifier/notify_first.php?person_offset=${offset}&person_limit=${limit}`);

    };

    funcs.display_notify_indicar = function (obj) {

        if (obj.success.api_result.message.notify.is === true) {

            lib.remove_class_ele('display-none', $(obj.recognize.notify_id));

            /*   $(obj.recognize.notify_id).innerHTML = obj.success.api_result.message.notify.num; */

        }

        if (obj.success.api_result.message.chaty.is === true) {

            /*  lib.remove_class_ele('display-none', $(obj.recognize.chaty_id));
             
             $(obj.recognize.chaty_id).innerHTML = obj.success.api_result.message.chaty.num; */

        }

    };

    funcs.trigger_notification = function (container_id) {

        lib.add_class('width-100-cent', container_id);
        lib.add_class('min-height-100-cent', container_id);
        $(container_id).parentNode.style.background = `var(--liter-black-moder)`;

        let suffix = lib.switch_num;

        ++lib.switch_num;

        lib.inc_html(`<section class='overflow-hidden border-1px-solid border-right-none border-left-none width-100-cent height-fit-content display-flex flex-column'>

            <section>${funcs.call_headers_naver('<section class="display-flex align-items-center justify-content-center font-size-16px"><section class="padding-5-px"><i draggable="false" class="far fa-bell"></i>&nbsp;Notifications</section> <section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.trigger_notification(\'' + container_id + '\');"><i class="fa fa-redo-alt"></i></section></section>')}</section>
        
            <section id="notification_holder_${suffix}" class="padding-5-px"></section>
        
            <section id="refresh_notification_holder_${suffix}" class="padding-5-px"></section>

        </section>`, container_id);

        funcs.get_notification_now(`notification_holder_${suffix}`, `refresh_notification_holder_${suffix}`, suffix);

    };

    funcs.get_notification_now = function (container_id, load_holder, suffix, offset = 0, limit = 3, person_offset = 0, person_limit = 3) {

        $(load_holder).innerHTML = `<section class="display-flex width-100-cent height-100-cent align-items-center justify-content-center">${funcs.loader_svg__lof}</section>`;

        funcs.send_get_me_something({suffix: suffix, category: 'notify things', type: 'notification', repeat: false, container_id: container_id, load_holder: load_holder, offset: offset, limit: limit, person_offset: person_offset, person_limit: person_limit}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/notifier/notify_real.php?offset=${offset}&limit=${limit}&person_limit=${person_limit}&person_offset=${person_offset}`);

    };

}();


(function () {

    funcs.notification_main__display = function (obj) {

        if (!obj.success.api_result.message.notifyer.hasOwnProperty('none')) {

            let template = ``;

            lib._looper_challenge(obj.success.api_result.message.notifyer, function (element) {

                if (element.category === 'profile_viewed') {

                    template += funcs.profile_viewed_notification_template(element, obj.recognize.suffix);

                } else if (element.category === 'tags') {

                    template += funcs.tag_notification_template(element, obj.recognize.suffix);

                } else if (element.category === 'post_viewed') {

                    template += funcs.post_viewed_notification_template(element, obj.recognize.suffix);

                } else if (element.category === 'music') {

                    template += funcs.music_notification_template(element, obj.recognize.suffix);

                } else if (element.category === 'blog' || element.category === 'times' || element.category === 'post') {

                    template += funcs.blog_times_post_notification_template(element, obj.recognize.suffix);

                }

            });

            funcs.adj_html(obj.recognize.container_id, 'beforeend', template);

        }

    };

}());
