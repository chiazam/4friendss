/* global funcs, lib, api, obj */

!function () {

    funcs.start_contact_info = function (container_id) {

        if (funcs.search.hasOwnProperty('bike') && funcs.search.bike.length > 0) {

            if (funcs.search.bike !== funcs.comment_bike) {

                funcs.contact_real_move(container_id);

            }

        } else {

            funcs.comment_bike = funcs.search.bike;
            funcs.main_all40000004();
        }

    };

    funcs.contact_real_move = function (container_id) {

        let suffix = lib.switch_num;
        ++lib.switch_num;

        lib.add_class('width-100-cent', container_id);
        lib.add_class('min-height-100-cent', container_id);
        $(container_id).parentNode.style.background = `var(--liter-black-moder)`;

        lib.inc_html(`

            <section class="overflow-hidden border-radius-5px width-100-cent height-fit-content display-flex flex-column">
        
                <section class="display-flex width-100-cent height-100-cent align-items-center justify-content-center padding-5-px">${funcs.loader_svg__lof}</section>

            </section>

           `, container_id);

        funcs.send_get_me_something({suffix: suffix, category: 'profile', type: 'contact info validate', repeat: false, container_id: container_id, bike: funcs.search.bike}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/contact_info/contact.php?bike=${funcs.search.bike}`);
        
    }

}();
!function () {
    funcs.kickoff_contact_main = function (obj, type = 'contact') {

        funcs.comment_bike = funcs.search.bike;
        let person = obj.success.api_result.message.owner_contact;

        let header_spec = funcs.scroll_amber_wawerteer_fdtg(`

                <section onclick="funcs.update_inp_value_contact('contact',${obj.recognize.suffix});" class="margin-left-10-px display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer width-fit-content padding-5-px font-weight-bold"> <i draggable="false" class="fa fa-user-friends"></i>&nbsp; contact </section>
        
                <section onclick="funcs.update_inp_value_contact('same state',${obj.recognize.suffix});" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer width-fit-content padding-5-px font-weight-bold"> <i draggable="false" class="fa fa-flag-checkered"></i>&nbsp; same state</section>
        
                <section onclick="funcs.update_inp_value_contact('has contacts',${obj.recognize.suffix});" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer width-fit-content padding-5-px font-weight-bold"> <i draggable="false" class="fa fa-hand-peace"></i>&nbsp; has contacts</section>
        
                <section onclick="funcs.update_inp_value_contact('same contacts',${obj.recognize.suffix});" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer width-fit-content padding-5-px font-weight-bold"> <i draggable="false" class="fa fa-handshake"></i>&nbsp;same contacts</section>
        
                <section onclick="funcs.update_inp_value_contact('contact contact',${obj.recognize.suffix});" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer width-fit-content padding-5-px font-weight-bold"> <i draggable="false" class="fa fa-users-cog"></i>&nbsp; contact contact</section>
        
                <section onclick="funcs.update_inp_value_contact('passers by',${obj.recognize.suffix});" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer width-fit-content padding-5-px font-weight-bold"> <i draggable="false" class="fa fa-walking"></i>&nbsp; passers by</section>
        
                <section onclick="funcs.update_inp_value_contact('passed by',${obj.recognize.suffix});" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer width-fit-content padding-5-px font-weight-bold"> <i draggable="false" class="fa fa-hand-spock"></i>&nbsp;passed by</section>

        `, true, 'smaller_scroll_butt');

        lib.inc_html(`

                    <section class="overflow-hidden border-1px-solid border-right-none border-left-none width-100-cent height-fit-content display-flex flex-column">
                
                       <section>${funcs.call_headers_naver(`<section class="display-flex align-items-center justify-content-center"><section class="padding-5-px font-size-16px"><i draggable="false" class="fa fa-users"></i>&nbsp;${person.info.full}'s connection</section><section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.contact_real_move('${obj.recognize.container_id}');"><i class="fa fa-redo-alt"></i></section></section>`)}</section>
        
                        <section class="padding-5-px border-1px-solid border-top-none border-left-none border-right-none"> ${funcs.display_capter_namer_random(person, false, true)} </section>
        
                        <section class="border-1px-solid border-top-none border-left-none border-right-none">  ${header_spec} </section>
        
                        
        
                        <section id='hold_persons_contactinfo_${obj.recognize.suffix}__${person.info.b}'></section>
                        
                        <section class="padding-5-px" id='friends_holder_profile_${obj.recognize.suffix}__${person.info.b}'></section>

                    </section>
        
                   <section class="display-none">
        
                        <input value='${type}' data-suffix='${obj.recognize.suffix}' data-b='${person.info.b}' id='input_persons_contactinfo_${obj.recognize.suffix}' />

                    </section>

                   `, obj.recognize.container_id);

        lib.event_attach($(`input_persons_contactinfo_${obj.recognize.suffix}`), 'change', funcs.get_contacts_listener, 1);

        lib.host_event_execute_now('change', $(`input_persons_contactinfo_${obj.recognize.suffix}`));

    };

    funcs.get_contacts_listener = function (e) {

        $(`hold_persons_contactinfo_${e.currentTarget.dataset.suffix}__${e.currentTarget.dataset.b}`).innerHTML = ``;

        funcs.get_person_contact_main(e.currentTarget.value, e.currentTarget.dataset.b, e.currentTarget.dataset.suffix, 'relator');

    };

}();

!function () {

    funcs.relator_arrange_friends = function (obj) {

        if ($(`hold_persons_contactinfo_${obj.recognize.suffix}__${obj.recognize.b}`) !== null && $(`friends_holder_profile_${obj.recognize.suffix}__${obj.recognize.b}`) !== null) {

            if (!obj.success.api_result.message.persons.hasOwnProperty('none')) {

                let template_fleed = '';

                lib._looper_challenge(obj.success.api_result.message.persons, function (element) {

                    template_fleed += funcs.vertical_suggest(element, obj.recognize.suffix);

                });

                funcs.adj_html(`hold_persons_contactinfo_${obj.recognize.suffix}__${obj.recognize.b}`, 'beforeend', template_fleed);

            }

            let offfset = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;

            funcs.inc_html(funcs.error_reviver__(`funcs.get_person_contact_main("${obj.recognize.category_main}", "${obj.recognize.b}","${obj.recognize.suffix}","${obj.recognize.trigger}","${offfset}","${obj.recognize.limit}")`, `<i class='fa fa-angle-down'></i> &nbsp; <section>See more contents</section>`), $(`friends_holder_profile_${obj.recognize.suffix}__${obj.recognize.b}`));

        }

    };

    funcs.update_inp_value_contact = function (type, suffix) {

        $(`input_persons_contactinfo_${suffix}`).value = type;

        lib.host_event_execute_now('change', $(`input_persons_contactinfo_${suffix}`));

    };

}();
