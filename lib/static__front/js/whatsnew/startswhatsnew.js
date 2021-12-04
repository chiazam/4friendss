/* global funcs, lib, api, device */

!function () {

    funcs.empty_content_giver = function (suffix) {

        $(`whats_new_block_text_editor_${suffix}`).innerHTML = ``;

        lib.host_event_execute_now('input', $(`whats_new_block_text_editor_${suffix}`));

        lib.host_event_execute_now('keyup', $(`whats_new_block_text_editor_${suffix}`));

        $(`this_content_bulker_fwesh${suffix}_media`).innerHTML = ``;

        $(`this_content_bulker_fwesh${suffix}_tagger`).innerHTML = ``;

        $(`this_content_bulker_fwesh${suffix}_tied`).innerHTML = ``;

        $(`whats_new_block_topic_editor_${suffix}`).value = '';

        lib.host_event_execute_now('input', $(`whats_new_block_topic_editor_${suffix}`));

    };

    funcs.post_type_obj = {

        post: `<i class="fa fa-globe"></i> &nbsp;

                 <span class='font-weight-bold'>Post</span>`,
        times: `<i class="fa fa-clock"></i> &nbsp;

                 <span class='font-weight-bold'>Times</span>`,

        blog: `<i class="fa fa-book-open"></i> &nbsp;

                 <span class='font-weight-bold'>Blog</span>`,

       /* event: `<i class="far fa-calendar-alt"></i> &nbsp;

                 <span class='font-weight-bold'>Event</span>`,

        poll: `<i class="fa fa-poll "></i> &nbsp;

                 <span class='font-weight-bold'>Poll</span>`,  */

    };

    funcs.post_privacy_obj_icons = {

        public: `
                <i class="fa fa-globe-africa"></i>`,

        male: `<i class="fa fa-male"></i>`,

        female: `<i class="fa fa-female"></i>`,

        contact: `
                <i class="fa fa-user-friends"></i>`,

        'passers by': `<i class="fa fa-walking"></i>`,

        'passed by': `<i class="fa fa-hand-spock"></i>`,

        'same state': `<i class="fa fa-flag-checkered"></i>`,

        'has contact': `<i class="fa fa-hand-peace"></i>`,

        'same contact': `<i class="fa fa-handshake"></i>`,

        'contact contact': `<i class="fa fa-users-cog"></i>`,

    };

    funcs.post_privacy_obj = {

        public: `${funcs.post_privacy_obj_icons.public}&nbsp;<span class='font-weight-bold'>Public</span>`,

        male: `${funcs.post_privacy_obj_icons.male}&nbsp;<span class='font-weight-bold'>Male</span>`,

        female: `${funcs.post_privacy_obj_icons.female}&nbsp;<span class='font-weight-bold'>Female</span>`,

        contact: `${funcs.post_privacy_obj_icons.contact}&nbsp;<span class='font-weight-bold'>Contact</span>`,

        'passers by': `${funcs.post_privacy_obj_icons['passers by']}&nbsp;<span class='font-weight-bold'>Passers by</span>`,

        'passed by': `${funcs.post_privacy_obj_icons['passed by']}&nbsp;<span class='font-weight-bold'>Passed by</span>`,

        'same state': `${funcs.post_privacy_obj_icons['same state']}&nbsp;<span class='font-weight-bold'>Same state</span>`,

        'has contact': `${funcs.post_privacy_obj_icons['has contact']}&nbsp;<span class='font-weight-bold'>Has contact</span>`,

        'same contact': `${funcs.post_privacy_obj_icons['same contact']}&nbsp;<span class='font-weight-bold'>Same contact</span>`,

        'contact contact': `${funcs.post_privacy_obj_icons['contact contact']}&nbsp;<span class='font-weight-bold'>Contact contact</span>`,

    };

    funcs.change_post_type = function (e) {

        funcs.empty_content_giver(e.currentTarget.dataset.suffix);

        if (funcs.post_type_obj.hasOwnProperty(e.currentTarget.value.toLowerCase())) {

            $(`${e.currentTarget.id}_boxer`).innerHTML = funcs.post_type_obj[e.currentTarget.value.toLowerCase()];

        } else {

            e.currentTarget.value = 'post';
            lib.host_event_execute_now('change', e.currentTarget);
        }

        funcs.make_spinner_ajax(`whats_new_block_text_editor_${e.currentTarget.dataset.suffix}`, true);

        funcs.send_get_me_something({suffix: e.currentTarget.dataset.suffix, category: 'content maker', type: 'text', repeat: false, cate_post: e.currentTarget.value}, {cate_post: e.currentTarget.value, '4friendss_user': funcs.userinfo.login_token}, `${api}api/timeline_gen/get_saved_word.php`);

        lib.inc_html(``, `this_content_bulker_fwesh${e.currentTarget.dataset.suffix}_tagger`);

        $(`tagger_maker_content_maker${e.currentTarget.dataset.suffix}`).href = `${funcs.app}?means=selector&cate_post=${e.currentTarget.value}&category=content maker&reason=tag search&suffix=${e.currentTarget.dataset.suffix}`;

        if (funcs.setTag_timeout !== undefined) {

            clearTimeout(funcs.setTag_timeout);

            funcs.setTag_timeout = undefined;

        }

        if (funcs.setMedia_timeout !== undefined) {

            clearTimeout(funcs.setMedia_timeout);

            funcs.setMedia_timeout = undefined;

        }

        $(`this_content_bulker_fwesh${e.currentTarget.dataset.suffix}_tagger`).dataset.purpose = e.currentTarget.value.toLowerCase();

        if (e.currentTarget.value === 'event'||e.currentTarget.value === 'poll') {

            funcs.event_date_display(e.currentTarget.dataset.suffix);

        } else {

            $(`this_content_bulker_fwesh${e.currentTarget.dataset.suffix}_extar_spot`).innerHTML = ``;

        }

        funcs.send_get_me_something({suffix: e.currentTarget.dataset.suffix, category: 'content maker', type: 'tag', repeat: 10, display_id: `this_content_bulker_fwesh${e.currentTarget.dataset.suffix}_tagger`}, {cate_post: e.currentTarget.value, '4friendss_user': funcs.userinfo.login_token}, `${api}api/tag/stream_tag__.php`);

        funcs.send_get_me_something({suffix: e.currentTarget.dataset.suffix, category: 'content maker', type: 'media uploaded', repeat: 10, display_id: `this_content_bulker_fwesh${e.currentTarget.dataset.suffix}_media`, cate_post: e.currentTarget.value}, {cate_post: e.currentTarget.value, '4friendss_user': funcs.userinfo.login_token}, `${api}api/timeline_gen/stream_my_unsaved_post_media.php`);

    };

    funcs.change_post_privacy = function (e) {

        if (funcs.post_privacy_obj.hasOwnProperty(e.currentTarget.value.toLowerCase())) {

            $(`${e.currentTarget.id}_boxer`).innerHTML = funcs.post_privacy_obj[e.currentTarget.value.toLowerCase()];

        } else {

            e.currentTarget.value = 'public';
            lib.host_event_execute_now('change', e.currentTarget);
        }
    };

    funcs.change_post_type_opter = function (input_id) {

        let list = ``;

        lib.obj_looper_challenge(funcs.post_type_obj, function (key, value) {
            list += `<section data-value="${key}" class="butt_selector">${value}</section>`;
        });

        funcs.option_maker_fool(list, false);

        lib._looper_challenge(lib.query_selector_all('.butt_selector'), function (element) {

            element.setAttribute('onclick', `
                if($('${input_id}').value!==this.dataset.value){
            
            $('${input_id}').value=this.dataset.value;
                funcs.start_post($('${input_id}').dataset.container_id,this.dataset.value);
            
            };
                lib.inc_html('', 'option-spender');
                lib.remove_class('display-flex', 'card-7');
                lib.add_class('display-none', 'card-7');
                
            `);


        });
    };

    funcs.change_post_privacy_opter = function (input_id) {
        let list = ``;

        lib.obj_looper_challenge(funcs.post_privacy_obj, function (key, value) {
            list += `<section data-value="${key}" class="butt_selector">${value}</section>`;
        });

        funcs.option_maker_fool(list, false);
        lib._looper_challenge(lib.query_selector_all('.butt_selector'), function (element) {

            element.setAttribute('onclick', `
                $('${input_id}').value=this.dataset.value;
                lib.inc_html('', 'option-spender');
                lib.remove_class('display-flex', 'card-7');
                lib.add_class('display-none', 'card-7');
                lib.host_event_execute_now('change',$('${input_id}'));
                funcs.change_privacy_post(this.dataset.value,$('${input_id}').dataset.suffix);
            `);

        });
    };

    funcs.change_privacy_post = function (privacy, suffix) {

        $(`privacy_content_div_${suffix}_boxer`).innerHTML = lib.loader_dot;

        funcs.send_get_me_something({suffix: suffix, category: 'content maker', type: 'privacy', repeat: false}, {cate_post: $(`type_content_div_${suffix}`).value, '4friendss_user': funcs.userinfo.login_token, privacy: privacy}, `${api}api/timeline_gen/post_privacy.php`);

    };

    funcs.num_saved_upload = 0;

    funcs.start_post = function (container_id, type = 'post') {

        lib.add_class('width-100-cent', container_id);
        lib.add_class('min-height-100-cent', container_id);
        $(container_id).parentNode.style.background = `var(--liter-black-moder)`;

        lib.inc_html(`

    <section class='overflow-hidden border-1px-solid border-right-none border-left-none width-100-cent height-fit-content display-flex flex-column'>
        
        <section>${funcs.call_headers_naver('<section class="display-flex align-items-center justify-content-center"><section class="padding-5-px font-size-16px"><i draggable="false" class="far fa-edit"></i>&nbsp;What is new?</section> <section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.start_post(\'' + container_id + '\',\'' + type + '\');"><i class="fa fa-redo-alt"></i></section></section>')}</section>
    
        <section id="__post__progress${lib.switch_num}"> </section>
        
        <section id="content-error-shower-${lib.switch_num}" class="loggers-lock-inputs-holders-holders error-box border-1px-solid buttoners-goog-red display-none"></section>
        
        <section class='width-98-cent margin-auto display-flex loggers-lock-inputs-holders-holders border-1px-solid padding-5-px border-1px-solid border-right-none border-left-none border-top-none border-box'>
        
            <input class='flex-1 padding-5-px loggers-lock-inputs' id="whats_new_block_topic_editor_${lib.switch_num}" textbox placeholder="Content topic (optional)" spellcheck="false" data-suffix="${lib.switch_num}" autocomplete="off"/>
        
            <section class="padding-5-px"></section>
        
        </section>
        
        <section class='width-98-cent margin-auto display-flex loggers-lock-inputs-holders-holders border-1px-solid padding-5-px border-1px-solid border-right-none border-left-none border-top-none border-box'>
        
            <section>${funcs.round_profile_dumper(funcs.userinfo.logged_user, true, false)}</section>
        
            <section class='flex-1 padding-5-px overflow-hidden'>

                <section textbox placeholder="What's new?" spellcheck="false" data-suffix="${lib.switch_num}" autocomplete="off" class='content-post-editor-smart-weep overflow-hidden overflow-y-scroll' id="whats_new_block_text_editor_${lib.switch_num}"></section>
        
                <section id="whats_new_block_text_editor_${lib.switch_num}__suggest_holder" class='display-none overflow-hidden overflow-y-scroll max-height-300-px'></section>

            </section>

        </section>

        <section id='this_content_bulker_fwesh${lib.switch_num}_sentiment_analysis' class="padding-2-px"></section>
        
        <section class="margin-left-5px margin-right-5px" id='this_content_bulker_fwesh${lib.switch_num}_tied'> </section>
        
        <section id='this_content_bulker_fwesh${lib.switch_num}_tagger'> </section>
        
        <section id='this_content_bulker_fwesh${lib.switch_num}_media'> </section>
        
        <section id='this_content_bulker_fwesh${lib.switch_num}_extar_spot'> </section>
        
        <section class="padding-5-px display-flex">
        
            <label for="upload_filer_filer_${lib.switch_num}">
        
                <section class="border-radius-5px display-flex justify-content-center align-items-center cursor-pointer icon-mager-xxx-small hover-background-twitter hover-color-fb-blue liner-post-attach">
    
                <i class="fa fa-paperclip"></i>

            </section>

        </label>
    
            <a href="" id='tagger_maker_content_maker${lib.switch_num}' class="border-radius-5px display-flex justify-content-center align-items-center cursor-pointer icon-mager-xxx-small hover-background-twitter hover-color-fb-blue liner-post-attach">
    
                <i class="fa fa-user-tag"></i>

            </a>
    
            <section class="flex-1"></section>
    
            <section class="border-radius-5px display-flex justify-content-center align-items-center cursor-pointer hover-background-twitter hover-color-fb-blue liner-post-attach padding-5-px" onclick="funcs.change_post_privacy_opter('privacy_content_div_${lib.switch_num}');">
    
               <section id='privacy_content_div_${lib.switch_num}_boxer' class="display-flex justify-content-center align-items-center">${lib.loader_dot}</section>
    
                &nbsp; <i class="fa fa-angle-down"></i>

            </section>
    
            <section class="border-radius-5px display-flex justify-content-center align-items-center cursor-pointer hover-background-twitter hover-color-fb-blue liner-post-attach padding-5-px" onclick="funcs.change_post_type_opter('type_content_div_${lib.switch_num}');">
    
               <section id='type_content_div_${lib.switch_num}_boxer' class="display-flex justify-content-center align-items-center"></section>
        
                &nbsp; <i class="fa fa-angle-down"></i>

            </section>

        </section>
        
        <section class='display-flex border-1px-solid border-left-none border-right-none border-bottom-none'>

        <section class='padding-5-px'>

             <button data-type="${type}" data-suffix="${lib.switch_num}" disabled id='whats_new_block_text_editor_${lib.switch_num}_boxer_publish' class='padding-5-px border-none font-weight-bold border-radius-2px hover-background-twitter hover-color-fb-blue post-button cursor-pointer heavier'>

                <i class='fa-level-up-alt fa'></i> Publish

            </button>

        </section>
        
        <section class='flex-1'></section>
        
        <section class='padding-5-px'>
        
            <button data-type="${type}" disabled data-suffix="${lib.switch_num}" id='whats_new_block_text_editor_${lib.switch_num}_boxer_draft' class='padding-5-px border-none hover-background-twitter hover-color-fb-blue font-weight-bold border-radius-2px post-button cursor-pointer heavier'>

                <i class='fa-level-down-alt fa'></i> Draft

            </button>

        </section>

    </section>
        
    </section>
    
        <input class='display-none' data-suffix='${lib.switch_num}' id='privacy_content_div_${lib.switch_num}' value='public'>
        
        <input class='display-none' data-container_id="${container_id}" data-suffix='${lib.switch_num}' id='type_content_div_${lib.switch_num}' value='${type}'>

        <textarea class='display-none' id='whats_new_block_text_editor_${lib.switch_num}_boxer'></textarea>
        
        <form class='display-none' data-suffix='${lib.switch_num}' id='upload_filer_filer_${lib.switch_num}_parenter' enctype='multipart/form-data'>

            <input name="post_attach_files[]" multiple type='file' data-suffix='${lib.switch_num}' id='upload_filer_filer_${lib.switch_num}'>

        </form>
    
        `, container_id);

        lib.event_attach($(`whats_new_block_topic_editor_${lib.switch_num}`), 'input', funcs.syntax_topics, 1);

        lib.host_event_execute_now('input', $(`whats_new_block_topic_editor_${lib.switch_num}`));

        lib.event_attach($(`privacy_content_div_${lib.switch_num}`), 'change', funcs.change_post_privacy, 1);

        lib.event_attach($(`type_content_div_${lib.switch_num}`), 'change', funcs.change_post_type, 1);

        lib.host_event_execute_now('change', $(`type_content_div_${lib.switch_num}`));

        lib.event_attach($(`whats_new_block_text_editor_${lib.switch_num}`), 'input', lib.empty_content_editable, 1);

        lib.event_attach($(`whats_new_block_text_editor_${lib.switch_num}`), 'input', funcs.insert_contenteditable_to_textarea, 1);

        lib.event_attach($(`whats_new_block_text_editor_${lib.switch_num}`), 'keyup', funcs.content_editable_syntax, 1);

        lib.event_attach($(`whats_new_block_text_editor_${lib.switch_num}_boxer`), 'input', lib.free_lock_post_sub_draft, 1);

        lib.event_attach($(`whats_new_block_text_editor_${lib.switch_num}_boxer_draft`), 'click', function (e) {

            e.currentTarget.setAttribute('disabled', true);

            if ($(`whats_new_block_text_editor_${e.currentTarget.dataset.suffix}_boxer_publish`) !== null) {

                $(`whats_new_block_text_editor_${e.currentTarget.dataset.suffix}_boxer_publish`).setAttribute('disabled', true);

            }

            e.currentTarget.innerHTML = lib.loader_dot;

            let form_info = {'4friendss_user': funcs.userinfo.login_token, topic: $(`whats_new_block_topic_editor_${e.currentTarget.dataset.suffix}`).value, wisdom: $(`whats_new_block_text_editor_${e.currentTarget.dataset.suffix}_boxer`).value, cate_post: $(`type_content_div_${e.currentTarget.dataset.suffix}`).value, device: device};

            if (e.currentTarget.dataset.type === "event"||e.currentTarget.dataset.type === "poll") {

                form_info['event_start'] = $(`start_date_${e.currentTarget.dataset.suffix}`).value;

                form_info['event_end'] = $(`end_date_${e.currentTarget.dataset.suffix}`).value;

            }

            $(`content-error-shower-${e.currentTarget.dataset.suffix}`).classList.remove('display-block');
            $(`content-error-shower-${e.currentTarget.dataset.suffix}`).classList.remove('display-flex');
            $(`content-error-shower-${e.currentTarget.dataset.suffix}`).classList.add('display-none');

            funcs.send_get_me_something({suffix: e.currentTarget.dataset.suffix, category: 'content maker', type: 'draft', repeat: false, draft_id: e.currentTarget.id, publish_id: `whats_new_block_text_editor_${e.currentTarget.dataset.suffix}_boxer_publish`}, form_info, `${api}api/timeline_gen/draft_post.php`);

        }, 1);

        lib.event_attach($(`whats_new_block_text_editor_${lib.switch_num}_boxer_publish`), 'click', function (e) {

            e.currentTarget.setAttribute('disabled', true);

            if ($(`whats_new_block_text_editor_${e.currentTarget.dataset.suffix}_boxer_draft`) !== null) {

                $(`whats_new_block_text_editor_${e.currentTarget.dataset.suffix}_boxer_draft`).setAttribute('disabled', true);

            }

            e.currentTarget.innerHTML = lib.loader_dot;

            let form_info = {'4friendss_user': funcs.userinfo.login_token, topic: $(`whats_new_block_topic_editor_${e.currentTarget.dataset.suffix}`).value, wisdom: $(`whats_new_block_text_editor_${e.currentTarget.dataset.suffix}_boxer`).value, cate_post: $(`type_content_div_${e.currentTarget.dataset.suffix}`).value, device: device};

            if (e.currentTarget.dataset.type === "event"||e.currentTarget.dataset.type === "poll") {

                form_info['event_start'] = $(`start_date_${e.currentTarget.dataset.suffix}`).value;

                form_info['event_end'] = $(`end_date_${e.currentTarget.dataset.suffix}`).value;

            }

            $(`content-error-shower-${e.currentTarget.dataset.suffix}`).classList.remove('display-block');
            $(`content-error-shower-${e.currentTarget.dataset.suffix}`).classList.remove('display-flex');
            $(`content-error-shower-${e.currentTarget.dataset.suffix}`).classList.add('display-none');

            funcs.send_get_me_something({suffix: e.currentTarget.dataset.suffix, category: 'content maker', type: 'publish', repeat: false, cate_post: $(`type_content_div_${e.currentTarget.dataset.suffix}`).value, draft_id: `whats_new_block_text_editor_${e.currentTarget.dataset.suffix}_boxer_draft`, publish_id: e.currentTarget.id}, form_info, `${api}api/timeline_gen/save_post.php`);

        }, 1);

        lib.event_attach($(`whats_new_block_text_editor_${lib.switch_num}`), 'blur', function (e) {

            e.currentTarget.dataset.focus = false;
        }, 1);

        lib.event_attach($(`whats_new_block_text_editor_${lib.switch_num}`), 'focus', function (e) {

            e.currentTarget.dataset.focus = true;
        }, 1);

        lib.event_attach($(`upload_filer_filer_${lib.switch_num}`), 'change', function (e) {

            let validate = true;

            lib._looper_challenge(e.currentTarget.files, function (element) {

                if (!funcs.all_three_validator(element)) {

                    validate = false;

                    e.currentTarget.files = $('empty_inp_file').files;

                    funcs.error_showers_bit(`<section class="padding-5-px">
                    
                        <section>${funcs.input_hollar_error()}</section>
                    
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

                funcs.file_upload_kick({suffix: e.currentTarget.dataset.suffix, category: 'content maker', type: 'file upload', repeat: false, input_id: e.currentTarget.id}, `${api}api/add_files/post_file_attach.php`, e.currentTarget.parentNode.id, `__post__progress${e.currentTarget.dataset.suffix}`, funcs.upload_puff_symbol, {cate_post: $(`type_content_div_${e.currentTarget.dataset.suffix}`).value, '4friendss_user': funcs.userinfo.login_token});

            }

        }, 1);

        funcs.handle_links();
        ++lib.switch_num;
    };
}();
