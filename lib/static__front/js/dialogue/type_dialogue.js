/* global funcs, lib */

!function () {

    funcs.dialogue_type_show = function (obj) {

        if (obj.recognize.type === 'validate') {

            funcs.dialogue_validate(obj);

        } else if (obj.recognize.type === 'dialogue hunter') {

            funcs.dialogue_hunter(obj);

        } else if (obj.recognize.type === 'dialogue file upload') {

            funcs.file_upload_handle(obj);

        } else if (obj.recognize.type === 'dialogue stream media') {

            funcs.dialogue_stream_media(obj);

        } else if (obj.recognize.type === 'dialogue photo' || obj.recognize.type === 'dialogue audio' || obj.recognize.type === 'dialogue video') {

            funcs.dialogue_display_media_main(obj);

        } else if (obj.recognize.type === 'remove files') {

            funcs.remove_files(obj);

        } else if (obj.recognize.type === 'chat sender') {

            funcs.dialogue_chat_sender_main(obj);

        } else if (obj.recognize.type === 'chat deleter') {

            funcs.chat_deleter_func(obj);

        } else if (obj.recognize.type === 'background music search') {

            funcs.background_music_search(obj);

        } else if (obj.recognize.type === 'choose music') {

            funcs.choose_music(obj);

        }

    };
    funcs.choose_music = function (obj) {

        if ($(obj.recognize.dom_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                $(obj.recognize.dom_id).setAttribute('onclick', obj.recognize.onclick);

                $(obj.recognize.dom_id).firstElementChild.className = `fa fa-redo`;

            } else if (obj.hasOwnProperty('success')) {

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.dom_id).setAttribute('onclick', obj.recognize.onclick);

                    $(obj.recognize.dom_id).firstElementChild.className = `fa fa-redo`;
                } else {

                    lib._looper_challenge(lib.query_selector_all(`.${obj.recognize.class_gen}`), function (element) {

                        element.firstElementChild.className = `far fa-square`;

                    });

                    $(obj.recognize.dom_id).parentNode.innerHTML = funcs.selector_butt_hoop({added: obj.success.api_result.message.added, hash: obj.recognize.hash}, 'backgound music', obj.recognize.suffix, {big: obj.recognize.big});

                }

            }

        }

    };

    funcs.background_music_search = function (obj) {

        if ($(obj.recognize.display_id) !== null && $(obj.recognize.input_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                funcs.inc_html(funcs.error_reviver__(`lib.host_event_execute_now("input", $("${obj.recognize.input_id}"));`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.display_id));
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`lib.host_event_execute_now("input", $("${obj.recognize.input_id}"));`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops wrong credentials or unrevalidate login, click to retry</section>`), $(obj.recognize.display_id));
                } else {

                    funcs.template_back_music_list(obj);
                }

            }

        }

    };

    funcs.chat_deleter_func = function (obj) {
        if ($(obj.recognize.container_id) !== null && $(obj.recognize.trigger_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                $(obj.recognize.trigger_id).children[0].className = `fa-redo fa`;

                $(obj.recognize.trigger_id).setAttribute('onclick', obj.recognize.onclick);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.trigger_id).children[0].className = `fa-redo fa`;

                    $(obj.recognize.trigger_id).setAttribute('onclick', obj.recognize.onclick);

                } else {

                    $(obj.recognize.container_id).remove();

                }

            }

        }

    };

    funcs.dialogue_chat_sender_main = function (obj) {
        if ($(obj.recognize.contenteditable_id) !== null && $(obj.recognize.submit_butt_id) !== null && $(obj.recognize.textarea_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i>`;
                $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);
                $(obj.recognize.contenteditable_id).setAttribute('contenteditable', true);
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i>`;
                    $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);
                    $(obj.recognize.contenteditable_id).setAttribute('contenteditable', true);
                } else {

                    $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-paper-plane far"></i>`;
                    $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);
                    $(obj.recognize.contenteditable_id).innerHTML = ``;
                    $(obj.recognize.contenteditable_id).setAttribute('contenteditable', true);
                    $(obj.recognize.textarea_id).value = ``;
                    lib.host_event_execute_now('input', $(obj.recognize.textarea_id));

                }

            }

        }

    };

    funcs.dialogue_display_media_main = function (obj) {

        if ($(obj.recognize.display_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                funcs.inc_html(funcs.error_reviver__(`funcs.reenroll_ajax_no_repeat(JSON.parse(\`${JSON.stringify({recognize: obj.recognize, form: obj.form, url: obj.url})}\`));funcs.make_spinner_ajax(this.parentNode.id, true, funcs.loader_svg__lof);`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.display_id));
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.reenroll_ajax_no_repeat(JSON.parse(\`${JSON.stringify({recognize: obj.recognize, form: obj.form, url: obj.url})}\`));funcs.make_spinner_ajax(this.parentNode.id, true, funcs.loader_svg__lof);`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops wrong credentials or unrevalidate login, click to retry</section>`), $(obj.recognize.display_id));
                } else {

                    funcs.media_dialogue_maker(obj);
                }

            }

        }


    };

    funcs.dialogue_stream_media = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                if (obj.recognize.repeat !== false) {

                    setTimeout(function () {

                        funcs.get_dialogue_media_real_time(obj.recognize.container_id, obj.recognize.bic, obj.recognize.qic, obj.recognize.suffix, obj.recognize.repeat);

                    }, (obj.recognize.repeat * 1000));

                }

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    if (obj.recognize.repeat !== false) {

                        setTimeout(function () {

                            funcs.get_dialogue_media_real_time(obj.recognize.container_id, obj.recognize.bic, obj.recognize.qic, obj.recognize.suffix, obj.recognize.repeat);

                        }, (obj.recognize.repeat * 1000));

                    }

                } else {

                    funcs.dialogue_display_media(obj);

                    if (obj.recognize.repeat !== false) {

                        setTimeout(function () {

                            funcs.get_dialogue_media_real_time(obj.recognize.container_id, obj.recognize.bic, obj.recognize.qic, obj.recognize.suffix, obj.recognize.repeat);

                        }, (obj.recognize.repeat * 1000));

                    }

                }
            }

        }

    };

    funcs.dialogue_hunter = function (obj) {

        if ($(obj.recognize.spot_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                if (obj.recognize.repeat !== false) {

                    setTimeout(function () {

                        funcs.stream_chat_to_fro_flee(obj.recognize.q, obj.recognize.b, obj.recognize.suffix, obj.recognize.spot_id, obj.recognize.top, obj.recognize.repeat, obj.recognize.limit);

                    }, (obj.recognize.repeat * 1000));

                } else if (obj.recognize.repeat === false) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.stream_chat_to_fro_flee("${obj.recognize.q}", "${obj.recognize.b}", "${obj.recognize.suffix}", "${obj.recognize.spot_id}", ${obj.recognize.top}, ${obj.recognize.repeat}, "${obj.recognize.limit}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.spot_id));

                }

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    if (obj.recognize.repeat !== false) {

                        setTimeout(function () {

                            funcs.stream_chat_to_fro_flee(obj.recognize.q, obj.recognize.b, obj.recognize.suffix, obj.recognize.spot_id, obj.recognize.top, obj.recognize.repeat, obj.recognize.limit);

                        }, (obj.recognize.repeat * 1000));

                    } else if (obj.recognize.repeat === false) {

                        funcs.inc_html(funcs.error_reviver__(`funcs.stream_chat_to_fro_flee("${obj.recognize.q}", "${obj.recognize.b}", "${obj.recognize.suffix}", "${obj.recognize.spot_id}", ${obj.recognize.top}, ${obj.recognize.repeat}, "${obj.recognize.limit}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.spot_id));

                    }

                } else {

                    funcs.display_fully_dialogue_anytime(obj);

                    if (obj.recognize.repeat !== false) {

                        setTimeout(function () {

                            funcs.stream_chat_to_fro_flee(obj.recognize.q, obj.recognize.b, obj.recognize.suffix, obj.recognize.spot_id, obj.recognize.top, obj.recognize.repeat, obj.recognize.limit);

                        }, (obj.recognize.repeat * 1000));

                    } else if (obj.recognize.repeat === false) {

                        funcs.inc_html(funcs.error_reviver__(`funcs.stream_chat_to_fro_flee("${obj.recognize.q}", "${obj.recognize.b}", "${obj.recognize.suffix}", "${obj.recognize.spot_id}", ${obj.recognize.top}, ${obj.recognize.repeat}, "${obj.recognize.limit}");`, `<i class='fa fa-angle-up'></i> &nbsp; <section>See more dialogue</section>`), $(obj.recognize.spot_id));

                    }

                }
            }

        }

    };

    funcs.dialogue_validate = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.get_dialogue_starter_ajax("${obj.recognize.container_id}", "${obj.recognize.bim}", "${obj.recognize.qim}", "${obj.recognize.suffix}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_id));

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.get_dialogue_starter_ajax("${obj.recognize.container_id}", "${obj.recognize.bim}", "${obj.recognize.qim}", "${obj.recognize.suffix}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.container_id));

                } else if (obj.success.api_result.hasOwnProperty('mis_conduct')) {

                    funcs.active_bim = obj.recognize.bim;
                    funcs.active_qim = obj.recognize.qim;

                    funcs.main_all40000004();

                } else {

                    funcs.dialogue_start_official(obj);
                }

            }

        }

    };

}();
