/* global funcs, lib, api */

!function () {

    funcs.put_retry_file_upload = function (id, network = true, event = 'change') {

        let reason = `<section>Poor network make sure you are connected to a stable network to continue</section>`;
        if (network === false) {

            reason = `<section>we trying to make sure you the one to continue relogin </section>`;
        }

        funcs.error_showers_bit(`

            <section class="padding-5-px">
                    
                <section>${reason}</section>
        
                    <section>${funcs.error_reviver__(`lib.host_event_execute_now("${event}", $("${id}")); lib.remove_class("display-flex", $("error-giver-show").parentNode.id);lib.add_class("display-none", $("error-giver-show").parentNode.id);`, `<i class='fa fa-redo'></i> &nbsp; <section>click to retry</section>`)}</section>
                    
            </section>
                    
        `);
    };
    funcs.file_upload_handle = function (obj) {

        if ($(obj.recognize.input_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                funcs.put_retry_file_upload(obj.recognize.input_id);
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.put_retry_file_upload(obj.recognize.input_id, false);
                } else {

                    $(obj.recognize.input_id).files = $('empty_inp_file').files;
                }

            }

        }

    };
    funcs.set_privacy_innerText = function (obj) {

        if (obj.hasOwnProperty('failed')) {

            funcs.all_catches_(obj.failed);
            funcs.inc_html(funcs.error_reviver__(``, `<i class='fa fa-redo'></i>`), $(`privacy_content_div_${obj.recognize.suffix}_boxer`));
        } else if (obj.hasOwnProperty('success')) {

            funcs.every_observer_ajax(obj.success);
            if (obj.success.api_result.hasOwnProperty('permission')) {

                funcs.inc_html(funcs.error_reviver__(``, `<i class='fa fa-redo'></i>`), $(`privacy_content_div_${obj.recognize.suffix}_boxer`));
            } else {

                $(`privacy_content_div_${obj.recognize.suffix}_boxer`).innerHTML = funcs.post_privacy_obj[obj.success.api_result.privacy.toLowerCase()];
            }

        }

    };
    funcs.set_word_innerText = function (obj) {

        if (obj.hasOwnProperty('failed')) {

            funcs.all_catches_(obj.failed);
            funcs.inc_html(funcs.error_reviver__(`lib.host_event_execute_now("change", $("type_content_div_${obj.recognize.suffix}"));`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(`whats_new_block_text_editor_${obj.recognize.suffix}`));
        } else if (obj.hasOwnProperty('success')) {

            funcs.every_observer_ajax(obj.success);
            if (obj.success.api_result.hasOwnProperty('permission')) {

                funcs.inc_html(funcs.error_reviver__(`lib.host_event_execute_now("change", $("type_content_div_${obj.recognize.suffix}"));`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(`whats_new_block_text_editor_${obj.recognize.suffix}`));
            } else {

                funcs.inc_html(funcs.sentiment_analysis_templater(obj.success.api_result.message.word_analysis), $(`this_content_bulker_fwesh${obj.recognize.suffix}_sentiment_analysis`));

                funcs.inc_html(obj.success.api_result.message.word, $(`whats_new_block_text_editor_${obj.recognize.suffix}`));

                $(`whats_new_block_text_editor_${obj.recognize.suffix}`).contentEditable = true;

                var caret = new VanillaCaret($(`whats_new_block_text_editor_${obj.recognize.suffix}`));

                caret.setPos(obj.success.api_result.message.word.length);

                lib.host_event_execute_now('input', $(`whats_new_block_text_editor_${obj.recognize.suffix}`));

                lib.host_event_execute_now('keyup', $(`whats_new_block_text_editor_${obj.recognize.suffix}`));

                $(`privacy_content_div_${obj.recognize.suffix}_boxer`).innerHTML = funcs.post_privacy_obj[obj.success.api_result.message.privacy.toLowerCase()];

                $(`privacy_content_div_${obj.recognize.suffix}`).value = obj.success.api_result.message.privacy;

                funcs.contain_post_tied(`this_content_bulker_fwesh${obj.recognize.suffix}_tied`, obj.success.api_result.message.tied_info, obj.recognize.cate_post, false);

                $(`whats_new_block_topic_editor_${obj.recognize.suffix}`).value = obj.success.api_result.message.topic;

                lib.host_event_execute_now('input', $(`whats_new_block_topic_editor_${obj.recognize.suffix}`));

                if ((obj.recognize.cate_post === 'event'||obj.recognize.cate_post === 'poll') && obj.success.api_result.message.hasOwnProperty('event_date') && !obj.success.api_result.message.event_date.hasOwnProperty('none')) {

                    $(`start_date_${obj.recognize.suffix}`).value = obj.success.api_result.message.event_date.date_start;

                    $(`end_date_${obj.recognize.suffix}`).value = obj.success.api_result.message.event_date.date_end;

                }


            }

        }

    };
}();
!function () {

    funcs.set_tag_innerText = function (obj) {

        if (obj.hasOwnProperty('failed')) {

            funcs.all_catches_(obj.failed);
        } else if (obj.hasOwnProperty('success')) {

            funcs.every_observer_ajax(obj.success);
            if (!obj.success.api_result.hasOwnProperty('permission')) {

                if ($(`this_content_bulker_fwesh${obj.recognize.suffix}_tagger`) !== null) {

                    funcs.display_tagger_stuffy_any_t1me(obj.success.api_result.message, `this_content_bulker_fwesh${obj.recognize.suffix}_tagger`, obj.recognize.type, obj.recognize.suffix, $(obj.recognize.display_id).dataset.purpose, false);
                }

            }

        }

        funcs.reenroll_ajax(obj, funcs, 'setTag_timeout');
    };
    funcs.obj_tagger_type_remover = {

        'backgound music': function (element, hash, big, suffix) {

            let on_click = element.getAttribute('onclick');
            element.removeAttribute('onclick');
            element.firstElementChild.className = `fa fa-spinner animate-spin`;
            funcs.send_get_me_something({suffix: suffix, hash: hash, 'onclick': on_click, category: 'dialogue things', type: 'choose music', repeat: false, dom_id: element.id, big: big, class_gen: `back_music_${suffix}`}, {'4friendss_user': funcs.userinfo.login_token, hash: hash, big: big}, `${api}api/chat/add_music_dialogue.php`);
        },
        chat_file_remover: function (element, file_hash, qic, bic) {

            let on_click = element.getAttribute('onclick');
            element.removeAttribute('onclick');
            element.firstElementChild.className = `fa fa-spinner animate-spin`;
            funcs.send_get_me_something({suffix: element.dataset.suffix, hash: element.dataset.hash, 'onclick': on_click, category: 'dialogue things', type: 'remove files', repeat: false, dom_id: element.id, qic: qic, bic: bic}, {'4friendss_user': funcs.userinfo.login_token, hash: file_hash, qic: qic, bic: bic}, `${api}api/chat/remove_dialogue_media.php`);
        },
        file_remover: function (element, file_hash) {

            let on_click = element.getAttribute('onclick');
            element.removeAttribute('onclick');
            element.firstElementChild.className = `fa fa-spinner animate-spin`;
            funcs.send_get_me_something({suffix: element.dataset.suffix, hash: element.dataset.hash, 'onclick': on_click, category: 'content maker', type: 'remove files', repeat: false, dom_id: element.id}, {cate_post: element.dataset.purpose, '4friendss_user': funcs.userinfo.login_token, hash: file_hash}, `${api}api/timeline_gen/remove_media_post.php`);
        },
        tag: function (element, user_key_q) {

            let on_click = element.getAttribute('onclick');
            element.removeAttribute('onclick');
            element.firstElementChild.className = `fa fa-spinner animate-spin`;
            funcs.send_get_me_something({suffix: element.dataset.suffix, q: element.dataset.q, 'onclick': on_click, category: 'content maker', type: 'remove tag', repeat: false, dom_id: element.id}, {cate_post: element.dataset.purpose, '4friendss_user': funcs.userinfo.login_token, hash: user_key_q}, `${api}api/tag/add.php`);
        },
    };
    funcs.display_tagger_stuffy_any_t1me = function (persons, container_id, type, suffix, purpose, saved = true) {

        if (persons.length > 0) {

            let template = ``;
            lib._looper_challenge(persons, function (element) {

                let canceller = ``;
                if (saved === false) {

                    let code_canceller = ``;
                    if (funcs.obj_tagger_type_remover.hasOwnProperty(type)) {
                        code_canceller = `funcs.obj_tagger_type_remover['${type}'](this,'${element.info.q}');`;
                    }

                    canceller = `<section data-purpose="${purpose}" id='tegged_${element.info.q}_${suffix}' data-suffix='${suffix}' data-q='${element.info.q}' onclick="${code_canceller}">

                                    <i class="fa fa-times"></i>

                    </section>`;
                }

                template += `

                    <section class="display-flex hover-background-twitter hover-color-fb-blue cursor-pointer tagger_hasher lighter width-fit-content height-fit-content"> ${funcs.online_color_datist(element.online).online_template} <section> ${element.info.full}&nbsp;${funcs.verify_returner(element.info.act)} </section>&nbsp;${canceller} </section>

                `;
            });
            if (container_id === false) {
                return `<section class="overflow-hidden padding-5-px">${funcs.scroll_amber_wawerteer_fdtg(template)}</section>`;
            } else {
                lib.inc_html(`<section class="overflow-hidden padding-5-px">${funcs.scroll_amber_wawerteer_fdtg(template)}</section>`, container_id);
            }

        } else {
            lib.inc_html(``, container_id);
    }


    };
}();
!function () {
    funcs.set_media_innerText = function (obj) {

        if (obj.hasOwnProperty('failed')) {

            funcs.all_catches_(obj.failed);
        } else if (obj.hasOwnProperty('success')) {

            funcs.every_observer_ajax(obj.success);
            if (!obj.success.api_result.hasOwnProperty('permission')) {

                if ($(obj.recognize.display_id) !== null) {

                    let num_all = 0;
                    let inner_content = ``;
                    if (obj.success.api_result.message.images > 0) {

                        inner_content += `
<a href="${funcs.app}?means=gallery&cate_post=${obj.recognize.cate_post}&category=content maker&reason=photo&suffix=${obj.recognize.suffix}&saved=false" class="display-flex align-items-center hover-background-twitter hover-color-fb-blue cursor-pointer tagger_hasher lighter width-fit-content height-fit-content"> ${obj.success.api_result.message.images} images </a>
                        `;
                        num_all += obj.success.api_result.message.images;
                    }

                    if (obj.success.api_result.message.videos > 0) {

                        inner_content += `
<a href="${funcs.app}?means=gallery&cate_post=${obj.recognize.cate_post}&category=content maker&reason=video&suffix=${obj.recognize.suffix}&saved=false" class="display-flex align-items-center hover-background-twitter hover-color-fb-blue cursor-pointer tagger_hasher lighter width-fit-content height-fit-content"> ${obj.success.api_result.message.videos} videos </a>
                        `;
                        num_all += obj.success.api_result.message.videos;
                    }
                    if (obj.success.api_result.message.audios > 0) {

                        inner_content += `
<a href="${funcs.app}?means=gallery&cate_post=${obj.recognize.cate_post}&category=content maker&reason=audio&suffix=${obj.recognize.suffix}&saved=false" class="display-flex align-items-center hover-background-twitter hover-color-fb-blue cursor-pointer tagger_hasher lighter width-fit-content height-fit-content"> ${obj.success.api_result.message.audios} audios </a>
                        `;
                        num_all += obj.success.api_result.message.audios;
                    }

                    funcs.num_saved_upload = num_all;
                    lib.inc_html(`<section class="overflow-hidden padding-5-px">

                        <section class="display-flex justify-content-center">${inner_content}</section>

                    </section>`, obj.recognize.display_id);
                    funcs.handle_links();
                }

            }

        }

        funcs.reenroll_ajax(obj, funcs, 'setMedia_timeout');
    };
    funcs.tag_remover_act = function (obj) {

        if ($(obj.recognize.dom_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                $(obj.recognize.dom_id).firstElementChild.className = `fa fa-redo`;
                $(obj.recognize.dom_id).setAttribute('onclick', obj.recognize.onclick);
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.dom_id).firstElementChild.className = `fa fa-redo`;
                    $(obj.recognize.dom_id).setAttribute('onclick', obj.recognize.onclick);
                } else {

                    if ($(obj.recognize.dom_id).dataset.selector === 'true') {
                        let select_change_symbol = ``;
                        if (obj.success.api_result.message.tagged === true) {

                            select_change_symbol = `<i class="far fa-check-square"></i>`;
                        } else if (obj.success.api_result.message.tagged === false) {

                            select_change_symbol = `<i class="far fa-square"></i>`;
                        }

                        $(obj.recognize.dom_id).setAttribute('onclick', obj.recognize.onclick);
                        $(obj.recognize.dom_id).innerHTML = select_change_symbol;
                    } else {

                        $(obj.recognize.dom_id).remove();
                    }
                }

            }

        }

    };
    funcs.tag_searcher_act = function (obj) {

        if ($(obj.recognize.display_id) !== null && $(obj.recognize.input_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                funcs.inc_html(funcs.error_reviver__(`lib.host_event_execute_now("input", $("${obj.recognize.input_id}"));`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.display_id));
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`lib.host_event_execute_now("input", $("${obj.recognize.input_id}"));`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops wrong credentials or unrevalidate login, click to retry</section>`), $(obj.recognize.display_id));
                } else {

                    funcs.template_people_selector_tag(obj);
                }

            }

        }

    };
    funcs.selector_butt_hoop = function (element, type, suffix, params) {

        let select_change_symbol = ``;
        if (type === 'tag') {

            if (element.tagged === true) {

                select_change_symbol = `<i class="far fa-check-square"></i>`;
            } else if (element.tagged === false) {

                select_change_symbol = `<i class="far fa-square"></i>`;
            }
            return `<section class="cursor-pointer" data-purpose="${params.purpose}" data-selector='true' id='tegged_${element.info.q}_${suffix}' data-suffix='${suffix}' data-q='${element.info.q}' onclick="funcs.obj_tagger_type_remover['${type}'](this,'${element.info.q}');">${select_change_symbol}</section>`;
        } else if (type === 'backgound music') {

            if (element.added === true) {

                select_change_symbol = `<i class="far fa-check-square"></i>`;
            } else if (element.added === false) {

                select_change_symbol = `<i class="far fa-square"></i>`;
            }

            return `<section class="cursor-pointer back_music_${suffix}" data-selector='true' id='back_music_${element.hash}_${params.big}_${suffix}' onclick="funcs.obj_tagger_type_remover['${type}'](this,'${element.hash}','${params.big}','${suffix}');">${select_change_symbol}</section>`;
        }

    };
    funcs.template_people_selector_tag = function (obj) {

        let templater = ``;
        if (!obj.success.api_result.message.hasOwnProperty('none')) {

            lib._looper_challenge(obj.success.api_result.message, function (element) {

                templater += `

                <section class="display-flex padding-5-px">

                    <section class="flex-1 display-flex">${funcs.display_capter_namer_random(element, true, false)}</section>
            
                    <section class="display-flex padding-5-px align-items-center">${funcs.selector_butt_hoop(element, 'tag', obj.recognize.suffix, {purpose: obj.recognize.cate_post})}</section>

                </section>

            `;
            });
        } else {

            templater = ` <section class="padding-5-px text-align-center font-weight-bold">No such persons found</section>`;
        }

        funcs.inc_html(templater, $(obj.recognize.display_id));
    };
    funcs.draft_actor = function (obj) {

        if ($(obj.recognize.draft_id) !== null && $(obj.recognize.publish_id) !== null) {

            if (obj.hasOwnProperty('failed')) {
                funcs.all_catches_(obj.failed);
                funcs.inc_html(`<i class='fa fa-redo'></i> retry`, $(obj.recognize.draft_id));
                $(obj.recognize.draft_id).removeAttribute('disabled', true);
                $(obj.recognize.publish_id).removeAttribute('disabled', true);
            } else if (obj.hasOwnProperty('success')) {


                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(`<i class='fa fa-redo'></i> retry`, $(obj.recognize.draft_id));
                    $(obj.recognize.draft_id).removeAttribute('disabled', true);
                    $(obj.recognize.publish_id).removeAttribute('disabled', true);
                } else {

                    if (obj.success.api_result.hasOwnProperty('mis_conduct')) {

                        funcs.login_starter.show_error(`content-error-shower-${obj.recognize.suffix}`, `${obj.success.api_result['mis_conduct']} ${obj.success.api_result['field']}`);

                    }else{

                        funcs.inc_html(funcs.sentiment_analysis_templater(obj.success.api_result.message.word_analysis), $(`this_content_bulker_fwesh${obj.recognize.suffix}_sentiment_analysis`));

                    }

                    funcs.inc_html(`<i class='fa-level-down-alt fa'></i> Draft`, $(obj.recognize.draft_id));
                    $(obj.recognize.draft_id).removeAttribute('disabled', true);
                    $(obj.recognize.publish_id).removeAttribute('disabled', true);
                }

            }

        }

    };
    funcs.publish_actor = function (obj) {

        if ($(obj.recognize.draft_id) !== null && $(obj.recognize.publish_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                funcs.inc_html(`<i class='fa fa-redo'></i> retry`, $(obj.recognize.publish_id));
                $(obj.recognize.publish_id).removeAttribute('disabled', true);
                $(obj.recognize.draft_id).removeAttribute('disabled', true);
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(`<i class='fa fa-redo'></i> retry`, $(obj.recognize.publish_id));
                    $(obj.recognize.publish_id).removeAttribute('disabled', true);
                    $(obj.recognize.draft_id).removeAttribute('disabled', true);
                } else {

                    if (obj.success.api_result.hasOwnProperty('mis_conduct')) {

                        funcs.login_starter.show_error(`content-error-shower-${obj.recognize.suffix}`, `${obj.success.api_result['mis_conduct']} ${obj.success.api_result['field']}`);

                    } else {

                        funcs.empty_content_giver(obj.recognize.suffix);

                    }

                    if (obj.recognize.cate_post === 'event'||obj.recognize.cate_post === 'poll') {

                        $(`start_date_${obj.recognize.suffix}`).value = ``;

                        $(`end_date_${obj.recognize.suffix}`).value = ``;

                    }

                    funcs.inc_html(``, $(`this_content_bulker_fwesh${obj.recognize.suffix}_sentiment_analysis`));

                    funcs.inc_html(`<i class='fa-level-down-alt fa'></i> Publish`, $(obj.recognize.publish_id));
                    $(obj.recognize.publish_id).removeAttribute('disabled', true);
                    $(obj.recognize.draft_id).removeAttribute('disabled', true);

                }

            }

        }

    };
    funcs.media_act_content_maker = function (obj) {

        if ($(obj.recognize.display_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                funcs.inc_html(funcs.error_reviver__(`funcs.reenroll_ajax_no_repeat(JSON.parse(\`${JSON.stringify({recognize: obj.recognize, form: obj.form, url: obj.url})}\`));funcs.make_spinner_ajax(this.parentNode.id, true, funcs.loader_svg__lof);`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.display_id));
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.reenroll_ajax_no_repeat(JSON.parse(\`${JSON.stringify({recognize: obj.recognize, form: obj.form, url: obj.url})}\`));funcs.make_spinner_ajax(this.parentNode.id, true, funcs.loader_svg__lof);`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops wrong credentials or unrevalidate login, click to retry</section>`), $(obj.recognize.display_id));
                } else {

                    funcs.media_content_maker(obj);
                }

            }

        }

    };
    funcs.media_content_maker = function (obj) {

        if (obj.success.api_result.message.answers.hasOwnProperty('none')) {

            funcs.inc_html(`<section class="padding-5-px text-align-center font-weight-bold">Nothing found</section>`, $(obj.recognize.display_id));
        } else {

            funcs.media_seprator_content_maker(obj.success.api_result.message.answers, obj.recognize.display_id, obj.recognize.type, obj.recognize.saved, obj.recognize.suffix, obj.form.cate_post);
        }

    };
    funcs.media_seprator_content_maker = function (obj, container_id, type, saved, suffix, purpose) {

        if (type === 'photo') {

            funcs.photo_galleryer_content_maker(obj, container_id, saved, suffix, purpose);
        } else if (type === 'audio') {

            funcs.audio_galleryer_content_maker(obj, container_id, saved, suffix, purpose);
        } else if (type === 'video') {

            funcs.video_galleryer_content_maker(obj, container_id, saved, suffix, purpose,true,true);
        }

    };
    funcs.remove_files = function (obj) {

        if ($(obj.recognize.dom_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                $(obj.recognize.dom_id).firstElementChild.className = `fa fa-redo`;
                $(obj.recognize.dom_id).setAttribute('onclick', obj.recognize.onclick);
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.dom_id).firstElementChild.className = `fa fa-redo`;
                    $(obj.recognize.dom_id).setAttribute('onclick', obj.recognize.onclick);
                } else {

                    $(obj.recognize.dom_id).parentElement.parentElement.remove();
                }

            }

        }

    };
}();


