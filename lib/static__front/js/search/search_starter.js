/* global funcs, lib, api */
let trigger_search = function (container_id, word, type = 'all') {

    if (location.href !== `${funcs.app}?means=search`) {

        history.pushState("", "", `${funcs.app}?means=search`);

        funcs.popstatist();

    }

    funcs.trigger_search(container_id, word, type);

};

let trigger_anchor = function (word) {

    if (location.href !== `${funcs.app}?means=profile&fr_user=${word}`) {

        history.pushState("", "", `${funcs.app}?means=profile&fr_user=@${word}`);

        funcs.popstatist();

    }

};

!function () {

    funcs.trigger_search = function (container_id, search = '', type = 'all') {

        lib.add_class('width-100-cent', container_id);

        lib.add_class('height-fit-content', container_id);

        $(container_id).parentNode.style.background = `var(--darker-black-moder)`;

        let suffix = lib.switch_num;

        ++lib.switch_num;

        $(container_id).innerHTML = `

            <section style="background:var(--liter-black-moder);" class="display-flex min-height-100-cent margin-auto width-100-cent border-box flex-column">
        
                <section>${funcs.call_headers_naver(`<section class="display-flex align-items-center justify-content-center"><section class="padding-5-px font-size-16px"><i draggable="false" class="fa fa-search"></i>&nbsp;Search</section><section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.trigger_search('${container_id}');"><i class="fa fa-redo-alt"></i></section></section>`)}</section>
  
                <section class="display-flex justify-content-center padding-5-px heavier">

                    <section class="display-flex width-90-cent">
        
                        <section class="border-1px-solid flex-1 loggers-lock-inputs-holders-holders display-flex align-items-center border-right-none border-left-none border-top-none">

                        <section class="padding-5-px">

                            <i class="fa fa-search"></i>

                        </section>

                        <section class="flex-1">

                            <input data-suffix="${suffix}" value="${search}" id="all-sercher-full-inp-${suffix}" class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" placeholder="search 4friendss">

                        </section>

                        <section class="cursor-pointer padding-5-px height-fit-content">

                            <i onclick="$('all-sercher-full-inp-${suffix}').value='';lib.host_event_execute_now('input', $('all-sercher-full-inp-${suffix}'));" class="fa fa-times"></i>

                        </section>

                    </section>

                    </section>
    
                </section>
        
                <section class="display-flex justify-content-center heavier border-1px-solid border-left-none border-right-none border-top-none">
        
                <section class="width-100-cent overflow-hidden padding-5-px padding-top-0-px padding-bottom-0-px">${ funcs.scroll_amber_wawerteer_fdtg(`
        
                <section class="display-none">

                    <input data-suffix="${suffix}" value="${type}" id="input_switch_search_type_${suffix}"/>

                </section>

                <section onclick="funcs.update_inp_search_option('all','${suffix}');" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer padding-5-px width-max-content font-weight-bold border-radius-5px"> <i draggable="false" class="fa fa-bars"></i>&nbsp; All</section>
        
                <section onclick="funcs.update_inp_search_option('people','${suffix}');" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer padding-5-px width-max-content font-weight-bold border-radius-5px"> <i draggable="false" class="fa fa-user-friends"></i>&nbsp; People</section>
        
                <section onclick="funcs.update_inp_search_option('post','${suffix}');" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer padding-5-px width-max-content font-weight-bold border-radius-5px"> <i draggable="false" class="fa fa-cubes"></i>&nbsp; Post, Times and Blog</section>
        
                <section onclick="funcs.update_inp_search_option('dictionary','${suffix}');" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer padding-5-px width-max-content font-weight-bold border-radius-5px"> <i draggable="false" class="fa fa-box-open"></i>&nbsp; Dictionary</section>
        
                <section onclick="funcs.update_inp_search_option('music','${suffix}');" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer padding-5-px width-max-content font-weight-bold border-radius-5px"> <i draggable="false" class="fab fa-itunes-note"></i>&nbsp; Music</section>
        
                `, true, 'smaller_scroll_butt') }</section>

                </section>
        
                <section id="search_result_holder_${suffix}"></section>
        
                <section id="search_result_holder_next_${suffix}"></section>

            </section>
        `;

        lib.event_attach($(`all-sercher-full-inp-${suffix}`), 'input', funcs.change_search_type, 1);

        lib.host_event_execute_now('input', $(`all-sercher-full-inp-${suffix}`));

    };

    funcs.update_inp_search_option = function (type, suffix) {

        if ($(`input_switch_search_type_${suffix}`).value !== type) {

            $(`input_switch_search_type_${suffix}`).value = type;

            lib.host_event_execute_now('input', $(`all-sercher-full-inp-${suffix}`));
        }

    };

    funcs.change_search_type = function (e) {

        if (funcs.search_music_outer !== undefined) {

            clearTimeout(funcs.search_main_outer);

        }

        let targeted = e.currentTarget;

        $(`search_result_holder_${targeted.dataset.suffix}`).innerHTML = ``;

        $(`search_result_holder_next_${targeted.dataset.suffix}`).innerHTML = `<section class="display-flex width-100-cent border-box height-100-cent align-items-center justify-content-center padding-5-px">${funcs.loader_svg__lof}</section>`;

        funcs.search_main_outer = setTimeout(function () {

            funcs.execute_search_honest(targeted.value, $(`input_switch_search_type_${targeted.dataset.suffix}`).value, targeted.dataset.suffix);

        }, 1000);

    };

    funcs.execute_search_honest = function (word, type, suffix, limit = 5, offset = 0) {

        $(`search_result_holder_next_${suffix}`).innerHTML = `<section class="display-flex width-100-cent border-box height-100-cent align-items-center justify-content-center padding-5-px">${funcs.loader_svg__lof}</section>`;

        funcs.send_get_me_something({category: 'search things', type: 'main search', repeat: false, word: word, suffix: suffix, type_: type, limit: limit, offset: offset}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/search/hint_search.php?offset=${offset}&limit=${limit}&type=${type}&word=${word}`);

    };

    funcs.main_search = function (obj) {

        if (obj.hasOwnProperty('failed')) {

            funcs.all_catches_(obj.failed);

            funcs.inc_html(funcs.error_reviver__(`funcs.execute_search_honest("${obj.recognize.word}", "${obj.recognize.type_}", "${obj.recognize.suffix}", "${obj.recognize.limit}", "${obj.recognize.offset}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(`search_result_holder_next_${obj.recognize.suffix}`));

        } else if (obj.hasOwnProperty('success')) {

            funcs.every_observer_ajax(obj.success);

            if (obj.success.api_result.hasOwnProperty('permission')) {

                funcs.inc_html(funcs.error_reviver__(`funcs.execute_search_honest("${obj.recognize.word}", "${obj.recognize.type_}", "${obj.recognize.suffix}", "${obj.recognize.limit}", "${obj.recognize.offset}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(`search_result_holder_next_${obj.recognize.suffix}`));

            } else {

                funcs.search_info_display_infoo(obj);

                let offfset = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;

                funcs.inc_html(funcs.error_reviver__(`funcs.execute_search_honest("${obj.recognize.word}", "${obj.recognize.type_}", "${obj.recognize.suffix}", "${obj.recognize.limit}", "${offfset}");`, `<i class="fa fa-angle-down"></i> &nbsp; <section>See more contents</section>`), $(`search_result_holder_next_${obj.recognize.suffix}`));

            }

        }

    };

}();
