/* global funcs, lib, regex */

!function () {

    funcs.content_things_maker = function (obj) {

        if (obj.recognize.type === 'comment getter') {

            funcs.arrange_comment_stream(obj);
        } else if (obj.recognize.type === 'react adder') {

            funcs.adder_react_(obj);
        } else if (obj.recognize.type === 'comment adder') {

            funcs.adder_comment_(obj);
        } else if (obj.recognize.type === 'comment editor') {

            funcs.editor_comment_(obj);

        } else if (obj.recognize.type === 'comment deleter') {

            funcs.deleter_comment_(obj);
        } else if (obj.recognize.type === 'post editor') {

            funcs.post_editor_(obj);

        } else if (obj.recognize.type === 'post delete') {

            funcs.post_deleter_(obj);

        } else if (obj.recognize.type === 'tie adder remover') {

            funcs.tie_adder_remove_function(obj);

        } else if (obj.recognize.type === 'save unsave post') {

            funcs.save_unsave_post(obj);

        } else if (obj.recognize.type === 'content fully') {

            funcs.content_fully(obj);

        } else if (obj.recognize.type === 'profile times') {

            funcs.profile_times(obj);

        } else if (obj.recognize.type === 'times list') {

            funcs.times_list(obj);

        }  else if (obj.recognize.type === 'tied content') {

            funcs.tied_list(obj);

        }

    };

    funcs.tied_list = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.start_views_tied("${obj.recognize.container_id}","${obj.recognize.key}", "${obj.recognize.suffix}", "${obj.recognize.offset}","${obj.recognize.limit}")`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_id).nextElementSibling);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.start_views_tied("${obj.recognize.container_id}","${obj.recognize.key}", "${obj.recognize.suffix}", "${obj.recognize.offset}","${obj.recognize.limit}")`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.container_id).nextElementSibling);

                } else {

                    funcs.tied_list_hunted(obj);

                    funcs.inc_html(funcs.error_reviver__(`funcs.start_views_tied("${obj.recognize.container_id}","${obj.recognize.key}", "${obj.recognize.suffix}", "${obj.recognize.offset}","${obj.recognize.limit}")`, `<i class="fa fa-angle-down"></i>&nbsp;<section>See more contents</section>`), $(obj.recognize.container_id).nextElementSibling);

                }

            }


        }

    }

    funcs.times_list = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.list_times_roller("${obj.recognize.container_id}","${obj.recognize.by_g}", "${obj.recognize.suffix}", "${obj.recognize.limit}","${obj.recognize.offset}")`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_more));

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.list_times_roller("${obj.recognize.container_id}","${obj.recognize.by_g}", "${obj.recognize.suffix}", "${obj.recognize.limit}","${obj.recognize.offset}")`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.container_more));

                } else {

                    funcs.times_list_hunted(obj);

                }

            }

        }

    };

    funcs.profile_times = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.content_times_holder("${obj.recognize.container_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_id).children[0]);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.content_times_holder("${obj.recognize.container_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.container_id).children[0]);

                } else {

                    funcs.times_owner_hunted(obj);

                }

            }

        }

    };

    funcs.content_fully = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.content_views_holder("${obj.recognize.container_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_id).children[0]);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.content_views_holder("${obj.recognize.container_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.container_id).children[0]);

                } else {

                    funcs.categorize_full_content(obj);

                }

            }

        }

    };

    funcs.save_unsave_post = function (obj) {

        if ($(obj.recognize.trigger_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                if (obj.recognize.save === true) {
                    $(obj.recognize.trigger_id).innerHTML = `<i class="fa-redo fa"></i> See later`;
                } else if (obj.recognize.save === false) {
                    $(obj.recognize.trigger_id).innerHTML = `<i class="fa-redo fa"></i> Unsave`;
                }
                $(obj.recognize.trigger_id).setAttribute('onclick', obj.recognize.onclick);
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    if (obj.recognize.save === true) {
                        $(obj.recognize.trigger_id).innerHTML = `<i class="fa-redo fa"></i> See later`;
                    } else if (obj.recognize.save === false) {
                        $(obj.recognize.trigger_id).innerHTML = `<i class="fa-redo fa"></i> Unsave`;
                    }
                    $(obj.recognize.trigger_id).setAttribute('onclick', obj.recognize.onclick);
                } else {

                    if (obj.recognize.save === true) {
                        $(obj.recognize.trigger_id).innerHTML = `<i class="fa fa-bookmark"></i> Unsave`;
                    } else if (obj.recognize.save === false) {
                        $(obj.recognize.trigger_id).innerHTML = `<i class="far fa-bookmark"></i> See later`;
                    }
                    $(obj.recognize.trigger_id).setAttribute('onclick', `funcs.save_unsaved_post(this, '${obj.recognize.key}', '${obj.recognize.cate_post}', '${obj.recognize.suffix}', !${obj.recognize.save});`);
                }

            }

        }

    };

    funcs.tie_adder_remove_function = function (obj) {

        if ($(obj.recognize.facility_holder) !== null && $(obj.recognize.submit_butt_id) !== null) {
            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                if (obj.recognize.key !== 'untie') {
                    $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i> ${obj.recognize.cate_post}`;
                } else {
                    $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i>`;
                }
                $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    if (obj.recognize.key !== 'untie') {
                        $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i> ${obj.recognize.cate_post}`;
                    } else {
                        $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i>`;
                    }
                    $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);

                } else {

                    if (obj.recognize.key !== 'untie') {

                        $(obj.recognize.submit_butt_id).innerHTML = obj.recognize.formal_html;

                        $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);

                        lib.add_class_ele('display-none', $(obj.recognize.facility_holder));

                    } else {
                        $(obj.recognize.facility_holder).remove();
                    }

                }

            }

        }

    };

    funcs.post_deleter_ = function (obj) {

        if ($(obj.recognize.facility_holder) !== null && $(obj.recognize.submit_butt_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i> Delete`;
                $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i> Delete`;
                    $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);

                } else {

                    $(obj.recognize.facility_holder).remove();

                }

            }

        }

    };


    funcs.post_editor_ = function (obj) {

        if ($(obj.recognize.facility_holder) !== null && $(obj.recognize.submit_butt_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i> Edit`;
                $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i> Edit`;
                    $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);

                } else {

                    $(obj.recognize.facility_holder).remove();

                }

            }

        }

    };

    funcs.deleter_comment_ = function (obj) {

        if ($(obj.recognize.facility_holder) !== null && $(obj.recognize.submit_butt_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i> Delete`;
                $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i> Delete`;
                    $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);

                } else {

                    $(obj.recognize.facility_holder).remove();

                }

            }

        }

    };

    funcs.editor_comment_ = function (obj) {

        if ($(obj.recognize.contenteditable_id) !== null && $(obj.recognize.submit_butt_id) !== null && $(obj.recognize.textarea_id) !== null && $(obj.recognize.final_display_id) !== null && $(obj.recognize.facility_holder) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i> Update`;
                $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);
                $(obj.recognize.contenteditable_id).setAttribute('contenteditable', true);
                lib.remove_class_ele('display-none', $(obj.recognize.submit_butt_id).parentNode.nextElementSibling);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i> Update`;
                    $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);
                    $(obj.recognize.contenteditable_id).setAttribute('contenteditable', true);
                    lib.remove_class_ele('display-none', $(obj.recognize.submit_butt_id).parentNode.nextElementSibling);
                } else {

                    $(obj.recognize.final_display_id).innerHTML = regex.hash__tag_replacer(obj.success.api_result.message.word, true);

                    funcs.timeline_comment[obj.recognize.key].word = obj.success.api_result.message.word;
                    funcs.edit_template_toggler(obj.recognize.facility_holder, obj.recognize.key, obj.recognize.suffix, obj.recognize.reply);

                }

            }

        }

    };
    funcs.adder_comment_ = function (obj) {

        if ($(obj.recognize.contenteditable_id) !== null && $(obj.recognize.submit_butt_id) !== null && $(obj.recognize.textarea_id) !== null && $(obj.recognize.facility_holder) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i> Post`;
                $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);
                $(obj.recognize.contenteditable_id).setAttribute('contenteditable', true);
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-redo fa"></i> Post`;
                    $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);
                    $(obj.recognize.contenteditable_id).setAttribute('contenteditable', true);
                } else {

                    if (obj.recognize.reply === false) {

                        $(obj.recognize.submit_butt_id).innerHTML = `<i class="fa-arrow-up fa"></i> Post`;
                        $(obj.recognize.submit_butt_id).setAttribute('onclick', obj.recognize.onclick);
                        $(obj.recognize.contenteditable_id).innerHTML = ``;
                        $(obj.recognize.contenteditable_id).setAttribute('contenteditable', true);
                        $(obj.recognize.textarea_id).value = ``;
                        lib.host_event_execute_now('input', $(obj.recognize.textarea_id));
                    } else if (obj.recognize.reply === true) {

                        $(obj.recognize.facility_holder).innerHTML = ``;
                    }

                }

            }

        }

    };
    funcs.arrange_comment_stream = function (obj) {

        if ($(obj.recognize.container_id) !== null && $(obj.recognize.prev_id) !== null && $(obj.recognize.next_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                if (obj.recognize.top === false) {

                    $(obj.recognize.prev_id).children[1].children[0].className = `fa fa-redo`;
                } else if (obj.recognize.top === true) {

                    $(obj.recognize.next_id).children[1].children[0].className = `fa fa-redo`;
                }

                $(obj.recognize.prev_id).setAttribute('onclick', obj.recognize.prev_onclick);
                $(obj.recognize.next_id).setAttribute('onclick', obj.recognize.next_onclick);
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    if (obj.recognize.top === false) {

                        $(obj.recognize.prev_id).children[1].children[0].className = `fa fa-redo`;
                    } else if (obj.recognize.top === true) {

                        $(obj.recognize.next_id).children[1].children[0].className = `fa fa-redo`;
                    }

                    $(obj.recognize.prev_id).setAttribute('onclick', obj.recognize.prev_onclick);

                    $(obj.recognize.next_id).setAttribute('onclick', obj.recognize.next_onclick);
                } else {

                    funcs.comment_display_sample(obj.success.api_result.message, obj.recognize.hash, obj.recognize.suffix, obj.recognize.container_id, obj.recognize.top, obj.recognize.reply);
                    if (obj.recognize.top === false) {

                        $(obj.recognize.prev_id).children[1].children[0].className = `fa fa-angle-up`;
                    } else if (obj.recognize.top === true) {

                        $(obj.recognize.next_id).children[1].children[0].className = `fa fa-angle-down`;
                    }

                    $(obj.recognize.prev_id).setAttribute('onclick', obj.recognize.prev_onclick);

                    $(obj.recognize.next_id).setAttribute('onclick', obj.recognize.next_onclick);

                    if (obj.recognize.comment_enable === true && (obj.success.api_result.is_post_comment_reply !== `reply` && obj.success.api_result.is_post_comment_reply !== false) && obj.recognize.offset === 0) {

                        funcs.comments_template_toggler(`comment_holder_main_${obj.recognize.hash}_${obj.recognize.suffix}`, obj.recognize.hash, obj.recognize.suffix, false);

                    } else if (obj.success.api_result.is_post_comment_reply === false) {
                        funcs.main_all40000004();
                    }

                }

            }

        }

    };
    funcs.adder_react_ = function (obj) {

        if ($(obj.recognize.trigger_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                $(obj.recognize.trigger_id).children[0].children[0].className = `fa fa-redo`;
                $(`react-butt_wimper-${obj.recognize.hash}-${obj.recognize.suffix}-love`).setAttribute('onclick', obj.recognize.love_onclick);
                $(`react-butt_wimper-${obj.recognize.hash}-${obj.recognize.suffix}-like`).setAttribute('onclick', obj.recognize.like_onclick);
                $(`react-butt_wimper-${obj.recognize.hash}-${obj.recognize.suffix}-rate`).setAttribute('onclick', obj.recognize.rate_onclick);
                $(`react-butt_wimper-${obj.recognize.hash}-${obj.recognize.suffix}-dislike`).setAttribute('onclick', obj.recognize.dislike_onclick);
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.trigger_id).children[0].children[0].className = `fa fa-redo`;
                    $(`react-butt_wimper-${obj.recognize.hash}-${obj.recognize.suffix}-love`).setAttribute('onclick', obj.recognize.love_onclick);
                    $(`react-butt_wimper-${obj.recognize.hash}-${obj.recognize.suffix}-like`).setAttribute('onclick', obj.recognize.like_onclick);
                    $(`react-butt_wimper-${obj.recognize.hash}-${obj.recognize.suffix}-rate`).setAttribute('onclick', obj.recognize.rate_onclick);
                    $(`react-butt_wimper-${obj.recognize.hash}-${obj.recognize.suffix}-dislike`).setAttribute('onclick', obj.recognize.dislike_onclick);
                } else {

                    $(obj.recognize.trigger_id).children[0].children[0].className = `fa fa-redo`;
                    lib._looper_challenge(lib.query_selector_all(`.react-butt_wimper-${obj.recognize.hash}-${obj.recognize.suffix}`), function (element, q) {

                        console.log(q)

                        element.children[0].children[0].className = funcs.react_list_natural_class[funcs.react_list[q]];
                    });
                    funcs.num_react_shower(obj.success.api_result.success, obj.recognize.hash, obj.recognize.suffix);
                    funcs.my_react_shower(obj.success.api_result.success, obj.recognize.hash, obj.recognize.suffix);
                    $(`react-butt_wimper-${obj.recognize.hash}-${obj.recognize.suffix}-love`).setAttribute('onclick', obj.recognize.love_onclick);
                    $(`react-butt_wimper-${obj.recognize.hash}-${obj.recognize.suffix}-like`).setAttribute('onclick', obj.recognize.like_onclick);
                    $(`react-butt_wimper-${obj.recognize.hash}-${obj.recognize.suffix}-rate`).setAttribute('onclick', obj.recognize.rate_onclick);
                    $(`react-butt_wimper-${obj.recognize.hash}-${obj.recognize.suffix}-dislike`).setAttribute('onclick', obj.recognize.dislike_onclick);
                }

            }

        }

    };
}();
