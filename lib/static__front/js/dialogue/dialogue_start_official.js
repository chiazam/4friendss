/* global funcs, api, lib, device */

!function () {

    funcs.dialogue_start_official = function (obj) {

        funcs.active_bim = obj.recognize.bim;
        funcs.active_qim = obj.recognize.qim;
        let suffix = obj.recognize.suffix;

        let person = obj.success.api_result.message.dialogue_owner;

        $(obj.recognize.container_id).innerHTML = `
        
        <section class='position-fixed overflow-hidden overflow-y-scroll flex-column card justify-content-center display-flex display-none' data-noroute='true'>

                    <section class="width-100-cent border-box display-flex padding-5-px position-relative z-index-1">
        
                        <section class="flex-1"></section>
        
                        <section class="heavier round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2" onclick="$('hold_main_media_yet_${person.info.b}_${suffix}').innerHTML='';lib.toggle_class_ele('display-none', this.parentNode.parentNode);"><i class="fa fa-times"></i></section>

                    </section>
        
                    <section id='hold_main_media_yet_${person.info.b}_${suffix}' class="height-100-cent overflow-hidden margin-auto width-100-cent"></section>

        </section>
        
        <section style="background:transparent;" class="display-flex min-height-100-cent width-100-cent container border-box flex-column">
        
            <section>${funcs.call_headers_naver(`<section class="display-flex align-items-center justify-content-center"><section class="padding-5-px font-size-16px"><i draggable="false" class="far fa-envelope"></i>&nbsp;Messages</section></section>`)}</section>
        
            <section class="padding-5-px display-flex border-1px-solid border-box border-top-none border-left-none heavier border-right-none">
        
                 ${funcs.display_capter_namer_random(person, false, false)} 
                 
                  <section class="flex-1"> </section>
        
                <section> 

                    <section onclick="lib.toggle_class_ele('display-none', this.nextElementSibling)" class="display-flex align-items-center cursor-pointer icon-mager-xxx-small justify-content-center hover-background-twitter hover-color-fb-blue round-border">

                        <i class="fa fa-cog"></i>

                    </section>
        
                    <section class="heavier position-absolute margin-left--100px friends-shadow-shadow border-radius-5px display-none z-index-2">
        
                         <a href="${funcs.app}?means=selector&category=dialogue things&reason=background music search&suffix=${suffix}&big=${person.info.b}&qig=${person.info.q}"> <section class="padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer"> <i class="fa fa-plus"></i> Background music </section></a>

                    </section>

                 </section>

            </section>
        
            <section id="last_seen_${person.info.b}_${suffix}"></section>
        
            <section data-chatprev="" id="back_music_${person.info.b}_${suffix}" class=""></section>
        
            <section class="padding-5-px align-items-center justify-content-center display-flex border-1px-solid border-box border-top-none border-left-none heavier border-right-none">

                <section> ${funcs.round_profile_dumper(funcs.userinfo.logged_user, false)} </section>
        
                <section class="margin-left--10px position-relative"> ${funcs.round_profile_dumper(person, false)} </section>

            </section>
        
            <section data-chatprev="" id="previous_chat_${person.info.b}_${suffix}"></section>
        
            <section id="holder_chat_${person.info.b}_${suffix}" class=""></section>
        
            <section data-chatnext="0" id="next_chat_${person.info.b}_${suffix}" class=""></section>
        
            <section id="seen_display_${person.info.b}_${suffix}"></section>
        
            <section id="sender_template_${person.info.b}_${suffix}" class="margin-top-auto"></section>
        
            <section class="padding-5-px"></section>
        
        </section>

`;
        funcs.stream_chat_to_fro_flee(person.info.q, person.info.b, suffix, `next_chat_${person.info.b}_${suffix}`);

        funcs.template_sender_dialogue(person, suffix, `sender_template_${person.info.b}_${suffix}`);

    };

}();


!function () {

    funcs.template_sender_dialogue = function (person, suffix, container_id) {

        $(container_id).innerHTML = `

            <section>

                <section id="hold_num_dialogie_unsent_media_${person.info.b}_${suffix}" data-suffix="${suffix}" data-qic="${person.info.q}" data-bic="${person.info.b}" class=""></section>
        
                <section class="overflow-hidden border-1px-solid border-right-none border-left-none border-top-none heavier data-suffix="${suffix}" data-qic="${person.info.q}" data-bic="${person.info.b}">
        
                <section id="__dialogue__progress_${person.info.q}_${suffix}"> </section>
        
                <section class="display-flex">

                    <section class="padding-5-px display-flex">
        
                        <section class="border-radius-5px display-flex justify-content-center align-items-center cursor-pointer icon-mager-xxx-small hover-background-twitter hover-color-fb-blue">  

                            <label for="chat_attach__${person.info.b}_${suffix}"><i class="fa fa-paperclip"></i></label> 
        
                            <form class='display-none' id="chat_attach__${person.info.b}_${suffix}_form" enctype='multipart/form-data'>

                                <input data-suffix="${suffix}" data-qic="${person.info.q}" multiple data-bic="${person.info.b}" id="chat_attach__${person.info.b}_${suffix}" name="message_attach_files[]" type="file"/>

                            </form>

                        </section>

                    </section>
        
                    <section class="flex-1">
        
                        <section textbox data-bic="${person.info.b}" data-qic="${person.info.q}" placeholder="Type your message" spellcheck="false" data-suffix="${suffix}" autocomplete="off" class='content-post-editor-smart-weep overflow-hidden overflow-y-scroll' contenteditable="true" id="dialogue_box_ese_${person.info.b}_${suffix}"></section>
        
                        <section id='dialogue_box_ese_${person.info.b}_${suffix}__suggest_holder' class='display-none overflow-hidden overflow-y-scroll max-height-300-px'></section>
        
                        <textarea data-suffix="${suffix}" data-qic="${person.info.q}" data-bic="${person.info.b}" id='dialogue_box_ese_${person.info.b}_${suffix}_boxer' class='display-none'></textarea>
        
                    </section>
        
                    <section class="padding-5-px display-flex">
        
                        <button data-suffix="${suffix}" data-qic="${person.info.q}" data-bic="${person.info.b}" onclick="funcs.dialogue_submit_now(this,'${person.info.b}','${person.info.q}','${suffix}');" disabled class="border-radius-5px display-flex justify-content-center align-items-center cursor-pointer icon-mager-xxx-small hover-background-twitter disabled hover-color-fb-blue border-none heavier" id="dialogue_box_ese_${person.info.b}_${suffix}_butt">
        
                            <i class="fa-paper-plane far"></i>

                        </button>

                    </section>
        
                </section>

                </section>
        
                <section class="" data-suffix="${suffix}" data-qic="${person.info.q}" data-bic="${person.info.b}"></section>

            </section>

        `;

        funcs.get_dialogue_media_real_time(`hold_num_dialogie_unsent_media_${person.info.b}_${suffix}`, person.info.b, person.info.q, suffix);

        lib.event_attach($(`dialogue_box_ese_${person.info.b}_${suffix}_boxer`), 'input', funcs.disable_dialogue_button_on_inp_empty, 1);

        lib.event_attach($(`dialogue_box_ese_${person.info.b}_${suffix}`), 'input', lib.empty_content_editable, 1);

        lib.event_attach($(`dialogue_box_ese_${person.info.b}_${suffix}`), 'input', funcs.insert_contenteditable_to_textarea, 1);

        lib.event_attach($(`dialogue_box_ese_${person.info.b}_${suffix}`), 'keyup', funcs.content_editable_syntax, 1);

        lib.event_attach($(`dialogue_box_ese_${person.info.b}_${suffix}`), 'blur', function (e) {

            e.currentTarget.dataset.focus = false;
        }, 1);

        lib.event_attach($(`dialogue_box_ese_${person.info.b}_${suffix}`), 'focus', function (e) {

            e.currentTarget.dataset.focus = true;
        }, 1);

        lib.event_attach($(`chat_attach__${person.info.b}_${suffix}`), 'change', function (e) {

            let validate = true;

            lib._looper_challenge(e.currentTarget.files, function (element) {

                if (!funcs.image_validator(element)) {

                    validate = false;

                    e.currentTarget.files = $('empty_inp_file').files;

                    funcs.error_showers_bit(`<section class="padding-5-px">
                    
                        <section>${funcs.input_hollar_error('image')}</section>
                    
                    </section>
                    
                    `);

                }

            });

            if (((funcs.num_saved_upload + e.currentTarget.files.length) > 4)) {

                validate = false;

                e.currentTarget.files = $('empty_inp_file').files;

                funcs.error_showers_bit(`<section class="padding-5-px">
                    
                        <section>${funcs.input_hollar_error('max')}</section>
                    
                    </section>
                    
                    `);

            }

            if (validate === true) {

                funcs.file_upload_kick({suffix: e.currentTarget.dataset.suffix, category: 'dialogue things', type: 'dialogue file upload', repeat: false, input_id: e.currentTarget.id, bic: e.currentTarget.dataset.bic, qic: e.currentTarget.dataset.qic}, `${api}api/chat/dialogue_file_chat_adder.php`, e.currentTarget.parentNode.id, `__dialogue__progress_${person.info.q}_${suffix}`, funcs.upload_puff_symbol, {'4friendss_user': funcs.userinfo.login_token, bic: e.currentTarget.dataset.bic, qic: e.currentTarget.dataset.qic});

            }

        }, 1);

    };

    funcs.dialogue_submit_now = function (element, bic, qic, suffix) {

        if (lib.trim($(`dialogue_box_ese_${bic}_${suffix}_boxer`).value).length > 0) {

            element.innerHTML = lib.loader_dot;
            let onclicker = element.getAttribute('onclick');
            element.removeAttribute('onclick');
            $(`dialogue_box_ese_${bic}_${suffix}`).removeAttribute('contenteditable');

            funcs.send_get_me_something({suffix: suffix, bic: bic, qic: qic, category: 'dialogue things', type: 'chat sender', repeat: false, textarea_id: `dialogue_box_ese_${bic}_${suffix}_boxer`, contenteditable_id: `dialogue_box_ese_${bic}_${suffix}`, onclick: onclicker, submit_butt_id: element.id}, {'4friendss_user': funcs.userinfo.login_token, bic: bic, qic: qic, chat_word: $(`dialogue_box_ese_${bic}_${suffix}_boxer`).value, device: device}, `${api}api/chat/finally_submitter___it_dialogue.php`);
        }

    };

    funcs.disable_dialogue_button_on_inp_empty = function (e) {

        if (lib.trim(e.currentTarget.value).length === 0) {

            $(`dialogue_box_ese_${e.currentTarget.dataset.bic}_${e.currentTarget.dataset.suffix}_butt`).setAttribute('disabled', true);
            $(`dialogue_box_ese_${e.currentTarget.dataset.bic}_${e.currentTarget.dataset.suffix}_butt`).removeAttribute('style');
        } else if (lib.trim(e.currentTarget.value).length > 0) {

            $(`dialogue_box_ese_${e.currentTarget.dataset.bic}_${e.currentTarget.dataset.suffix}_butt`).removeAttribute('disabled');
            $(`dialogue_box_ese_${e.currentTarget.dataset.bic}_${e.currentTarget.dataset.suffix}_butt`).setAttribute('style', 'opacity:1;');
        }

    };

    funcs.stream_chat_to_fro_flee = function (q, b, suffix, spot_id, top = true, repeat = 10, limit = 5) {

        let offset_name = ``;

        let offset = ``;

        if (top === false) {

            offset_name = `first_id`;

            offset = $(spot_id).dataset.chatprev;

            $(spot_id).innerHTML = `<section style="background:transparent;" class="display-flex width-100-cent height-fit-content border-box align-items-center justify-content-center padding-5-px">${funcs.loader_svg__lof}</section>`;

        } else if (top === true) {

            offset_name = `last_id`;

            offset = $(spot_id).dataset.chatnext;

        }

        funcs.send_get_me_something({suffix: suffix, category: 'dialogue things', type: 'dialogue hunter', repeat: repeat, spot_id: spot_id, b: b, q: q, top: top, limit: limit}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/chat/get_dialogue__.php?bic=${b}&qic=${q}&${offset_name}=${offset}&limit=${limit}`);

    };


    funcs.get_dialogue_media_real_time = function (container_id, bic, qic, suffix, repeat = 10, saved = false) {

        funcs.send_get_me_something({suffix: suffix, category: 'dialogue things', type: 'dialogue stream media', repeat: repeat, container_id: container_id, bic: bic, qic: qic, saved: saved}, {'4friendss_user': funcs.userinfo.login_token, bic: bic, qic: qic}, `${api}api/chat/stream_dialogue_file.php`);

    };

}();
