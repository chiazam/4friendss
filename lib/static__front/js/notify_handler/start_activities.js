/* global lib, funcs, api */

!function () {

    funcs.start_activities = function (container_id) {

        if (funcs.search.bis !== funcs.active_bis || funcs.search.qis !== funcs.active_qis) {

            funcs.activities_real(container_id);

        }

    };

    funcs.activities_real=function (container_id) {

        if ((funcs.search.hasOwnProperty('qis') && funcs.search.qis.length > 0) && (funcs.search.hasOwnProperty('bis') && funcs.search.bis.length > 0)) {
                
            lib.add_class('width-100-cent', container_id);
            lib.add_class('min-height-100-cent', container_id);

            $(container_id).parentNode.style.background = `var(--liter-black-moder)`;

            let suffix = lib.switch_num;
            ++lib.switch_num;
            lib.inc_html(`<section class='overflow-hidden border-1px-solid border-right-none border-left-none width-100-cent height-fit-content display-flex flex-column'>

        <section>${funcs.call_headers_naver(`<section class="display-flex align-items-center justify-content-center font-size-16px"><section class="padding-5-px"><i draggable="false" class="far fa-bell"></i>&nbsp;Activities</section><section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.activities_real('${container_id}');"><i class="fa fa-redo-alt"></i></section></section>`)}</section>
    
         <section id="notification_person_holder_${suffix}" class="padding-5-px"></section>
        
        <section id="notification_holder_holder_${suffix}" class="padding-5-px"></section>

    </section>`, container_id);
            funcs.get_activities_starter_ajax(`notification_person_holder_${suffix}`, funcs.search.bis, funcs.search.qis, suffix);
        } else {
            funcs.active_bis = funcs.search.bis;
            funcs.active_qis = funcs.search.qis;
            funcs.main_all40000004();
        }
        
    };

    funcs.get_activities_starter_ajax = function (container_id, bis, qis, suffix) {

        $(container_id).innerHTML = `<section class="display-flex width-100-cent height-100-cent align-items-center justify-content-center">${funcs.loader_svg__lof}</section>`;
        funcs.send_get_me_something({suffix: suffix, category: 'notify things', type: 'activities profile', repeat: false, container_id: container_id, qis: qis, bis: bis}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/notifier/person_notify.php?bis=${bis}&qis=${qis}`);
    };

    funcs.template_owner_activity_notify = function (obj) {

        funcs.active_bis = obj.recognize.bis;

        funcs.active_qis = obj.recognize.qis;

        let person = obj.success.api_result.message.owner_notify;

        $(obj.recognize.container_id).innerHTML = `<section class="padding-5-px border-1px-solid border-top-none border-left-none border-right-none"> ${funcs.display_capter_namer_random(person, false, true)} </section>`;

        $(obj.recognize.container_id).nextElementSibling.innerHTML = `

            <section id="notification_holder_${obj.recognize.suffix}" class="padding-5-px"></section>
        
            <section id="refresh_notification_holder_${obj.recognize.suffix}" class="padding-5-px"></section>

`;
        funcs.get_activities_notify_ajax(`notification_holder_${obj.recognize.suffix}`, `refresh_notification_holder_${obj.recognize.suffix}`, obj.recognize.bis, obj.recognize.qis, obj.recognize.suffix);

    };

    funcs.get_activities_notify_ajax = function (container_id, load_holder, bis, qis, suffix, offset = 0, limit = 5) {

        $(load_holder).innerHTML = `<section class="display-flex width-100-cent height-100-cent align-items-center justify-content-center">${funcs.loader_svg__lof}</section>`;

        funcs.send_get_me_something({suffix: suffix, category: 'notify things', type: 'activities notify', repeat: false, container_id: container_id, qis: qis, bis: bis, offset: offset, limit: limit, load_holder: load_holder}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/notifier/person_notify_main.php?bis=${bis}&qis=${qis}&offset=${offset}&limit=${limit}`);

    };

}();
