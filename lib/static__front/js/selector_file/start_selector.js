/* global funcs, lib, name_company, api */
!function () {

    funcs.input_tag_selector = function (e) {

        funcs.make_spinner_ajax(`result_container_selector${e.currentTarget.dataset.suffix}`, true, lib.loader_dot);

        let targeted = e.currentTarget;

        if (funcs.search_selector_outer !== undefined) {

            clearTimeout(funcs.search_selector_outer);

        }

        funcs.search_selector_outer = setTimeout(function () {

            funcs.send_get_me_something({suffix: targeted.dataset.suffix, category: funcs.awa_selevtor_obj.category, type: funcs.awa_selevtor_obj.reason, repeat: false, display_id: `result_container_selector${targeted.dataset.suffix}`, input_id: targeted.id, cate_post: funcs.awa_selevtor_obj.cate_post}, {cate_post: funcs.awa_selevtor_obj.cate_post, '4friendss_user': funcs.userinfo.login_token}, `${(funcs.select_reason_obj[funcs.awa_selevtor_obj.reason].link)}?offset=0&limit=10&hash=${targeted.value}`);

        }, 1000);

    };

}();

!function () {

    funcs.back_music_selector = function (e) {

        funcs.make_spinner_ajax(`result_container_selector${e.currentTarget.dataset.suffix}`, true, lib.loader_dot);

        let targeted = e.currentTarget;

        if (funcs.search_selector_outer !== undefined) {

            clearTimeout(funcs.search_selector_outer);

        }

        funcs.search_selector_outer = setTimeout(function () {

            funcs.send_get_me_something({suffix: targeted.dataset.suffix, category: funcs.awa_selevtor_obj.category, type: funcs.awa_selevtor_obj.reason, repeat: false, display_id: `result_container_selector${targeted.dataset.suffix}`, input_id: targeted.id, big: funcs.awa_selevtor_obj.big, qig: funcs.awa_selevtor_obj.qig}, {'4friendss_user': funcs.userinfo.login_token}, `${(funcs.select_reason_obj[funcs.awa_selevtor_obj.reason].link)}?offset=0&limit=10&hash=${targeted.value}&big=${funcs.awa_selevtor_obj.big}&qig=${funcs.awa_selevtor_obj.qig}`);

        }, 1000);

    };

}();

!function () {

    funcs.display_selector_head = function (struct) {

        return `<section class="border-1px-solid flex-1 display-flex align-items-center border-right-none border-left-none border-top-none">
        
                <section class='padding-5-px'><i class="fa fa-search"></i></section>

                <section class='flex-1'>

                    <input data-suffix="${struct.suffix}" data-reason="${struct.reason}" id="selector-sercher-full-${struct.suffix}" class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" placeholder="search options">

                </section>
        
                <section class="cursor-pointer padding-5-px height-fit-content"><i id="see-unseen-country" onclick="$('selector-sercher-full-${struct.suffix}').value='';lib.host_event_execute_now('input', $('selector-sercher-full-${struct.suffix}'));" class="fa fa-times"></i></section>

            </section>`;

    };

    funcs.select_reason_obj = {

        'background music search': {

            link: `${api}api/chat/chat_music_add.php`,

            action: funcs.back_music_selector,

            template_title: function () {

                return `<section class="padding-5-px font-size-16px"> <i draggable="false" class="fab fa-itunes-note"></i>&nbsp;Background music </section>`;

            },

        },

        'tag search': {

            link: `${api}api/search/tag_search.php`,

            action: funcs.input_tag_selector,

            template_title: function () {

                return `<section class="padding-5-px font-size-16px"> <i draggable="false" class="fa fa-user-tag"></i>&nbsp;Tag some persons </section>`;

            },

        },

        'dialogue photo': {

            template_title: function () {

                return `<section class="padding-5-px font-size-16px"> <i draggable="false" class="fa fa-images"></i>&nbsp;Dialogue photos </section>`;

            },

            unsaved_link: `${api}api/chat/dialogue_stream_get_file_.php?media=images`,
        },

        'dialogue video': {

            template_title: function () {

                return `<section class="padding-5-px font-size-16px"> <i draggable="false" class="fa fa-images"></i>&nbsp;Dialogue videos </section>`;

            },

            unsaved_link: `${api}api/chat/dialogue_stream_get_file_.php?media=videos`,
        },

        'dialogue audio': {

            template_title: function () {

                return `<section class="padding-5-px font-size-16px"> <i draggable="false" class="fa fa-images"></i>&nbsp;Dialogue audios </section>`;

            },

            unsaved_link: `${api}api/chat/dialogue_stream_get_file_.php?media=audios`,
        },

        photo: {

            template_title: function () {

                return `<section class="padding-5-px font-size-16px"> <i draggable="false" class="fa fa-images"></i>&nbsp;Photos </section>`;

            },

            unsaved_link: `${api}api/timeline_gen/__uploaded_unsaved_file.php?kind=images`,
        },

        video: {

            template_title: function () {

                return `<section class="padding-5-px font-size-16px"> <i draggable="false" class="fa fa-video"></i>&nbsp;Videos </section>`;

            },

            unsaved_link: `${api}api/timeline_gen/__uploaded_unsaved_file.php?kind=videos`,
        },

        audio: {

            template_title: function () {

                return `<section class="padding-5-px font-size-16px"> <i draggable="false" class="fa-music fa"></i>&nbsp;Audios </section>`;

            },

            unsaved_link: `${api}api/timeline_gen/__uploaded_unsaved_file.php?kind=audios`,
        },

    };

    funcs.start_selector = function (container_id) {

        if (funcs.awa_selevtor_obj === undefined || lib.obj_equals(funcs.awa_selevtor_obj, funcs.search) === false) {

            if (funcs.select_reason_obj.hasOwnProperty(funcs.search.reason) && funcs.search.hasOwnProperty('reason') && funcs.search.hasOwnProperty('suffix')) {

                if ($(`selector-sercher-full-${funcs.search.suffix}`) === null || $(`selector-sercher-full-${funcs.search.suffix}`).dataset.reason !== funcs.search.reason || $(`selector-sercher-full-${funcs.search.suffix}`).dataset.reason !== funcs.search.suffix) {

                    funcs.awa_selevtor_obj = funcs.search;

                    funcs.setDocumentTitle('my_title', `${name_company} - ${funcs.search.reason}`);
                    lib.add_class('width-100-cent', container_id);
                    lib.add_class('min-height-100-cent', container_id);
                    $(container_id).parentNode.style.background = `var(--liter-black-moder)`;

                    lib.inc_html(`

    <section class='width-100-cent height-fit-content display-flex flex-column border-1px-solid border-right-none border-left-none'>
        
        <section>${funcs.call_headers_naver((funcs.select_reason_obj[funcs.awa_selevtor_obj.reason].template_title)() + funcs.display_selector_head(funcs.awa_selevtor_obj))}</section>
            
            <section class='padding-5-px'>
                
                <section id="result_container_selector${funcs.awa_selevtor_obj.suffix}"></section>
        
            </section>
            
            <section>

`, container_id);

                    console.log(funcs.select_reason_obj[funcs.awa_selevtor_obj.reason].action);

                    lib.event_attach($(`selector-sercher-full-${funcs.awa_selevtor_obj.suffix}`), 'input', funcs.select_reason_obj[funcs.awa_selevtor_obj.reason].action, 1);

                    lib.host_event_execute_now('input', $(`selector-sercher-full-${funcs.awa_selevtor_obj.suffix}`));

                    funcs.handle_links();
                }

            } else {

                funcs.main_all40000004();

            }

        }

    };
}();
