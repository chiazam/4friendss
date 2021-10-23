/* global funcs, lib */

!function () {

    funcs.profile_handler = function (obj) {

        if (obj.recognize.type === 'profile info') {

            funcs.prof_info_first(obj);

        } else if (obj.recognize.type === 'remove add contact') {

            funcs.remove_add_contact_lastly(obj);

        } else if (obj.recognize.type === 'post times posted tagged') {

            funcs.prof_tagged_posted(obj);

        } else if (obj.recognize.type === 'relationship profile') {

            funcs.fwends_get_profile_base(obj);

        } else if (obj.recognize.type === 'update prof_pix') {

            funcs.prof_pix_updater(obj);

        } else if (obj.recognize.type === 'update cover') {

            funcs.cover_updater(obj);

        } else if (obj.recognize.type === 'profile update') {

            funcs.profile_updater(obj);

        } else if (obj.recognize.type === 'bookmarks') {

            funcs.profile_bookmarks(obj);

        } else if (obj.recognize.type === 'contact info validate') {

            funcs.profile_contact_info_validate(obj);

        }

    };

    funcs.profile_contact_info_validate = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.start_contact_info("${obj.recognize.container_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_id).children[0]);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.start_contact_info("${obj.recognize.container_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_id).children[0]);

                } else if (obj.success.api_result.hasOwnProperty('mis_conduct')) {

                    funcs.comment_bike = obj.recognize.bike;

                    funcs.main_all40000004();

                } else {

                    funcs.kickoff_contact_main(obj);

                }

            }

        }

    };

    funcs.profile_bookmarks = function (obj) {

        if ($(obj.recognize.container_id) !== null && $(obj.recognize.load_holder) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.get_bookmarks_now("${obj.recognize.container_id}", "${obj.recognize.load_holder}", "${obj.recognize.suffix}","${obj.recognize.offset}","${obj.recognize.limit}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.load_holder));

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.get_bookmarks_now("${obj.recognize.container_id}", "${obj.recognize.load_holder}", "${obj.recognize.suffix}","${obj.recognize.offset}","${obj.recognize.limit}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.load_holder));

                } else {

                    let offfset = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;

                    funcs.inc_html(funcs.error_reviver__(`funcs.get_bookmarks_now("${obj.recognize.container_id}", "${obj.recognize.load_holder}", "${obj.recognize.suffix}","${offfset}","${obj.recognize.limit}");`, `<i class='fa fa-angle-down'></i> &nbsp; <section>See more contents</section>`), $(obj.recognize.load_holder));

                    funcs.bookmark_main__display(obj);

                }

            }

        }

    };

    funcs.profile_updater = function (obj) {

        if ($(obj.recognize.butt_id) !== null && $(obj.recognize.form_id) !== null) {

            $(obj.recognize.butt_id).setAttribute('onclick', obj.recognize.on_click);

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                $(obj.recognize.butt_id).children[0].className = 'fa-redo fa';

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.butt_id).children[0].className = 'fa-redo fa';

                } else {

                    $(obj.recognize.butt_id).children[0].className = 'fa-arrow-up fa';

                    if (obj.success.api_result.hasOwnProperty('mis_conduct') && obj.success.api_result.hasOwnProperty('field')) {

                        lib.remove_class_ele('display-none', $(`update_profile_err_disp_${obj.recognize.suffix}_${obj.recognize.g}`));
                        $(`update_profile_err_disp_${obj.recognize.suffix}_${obj.recognize.g}`).innerHTML = `${obj.success.api_result.mis_conduct} ${obj.success.api_result.field}`;

                    }

                }

            }

        }

    };

    funcs.cover_updater = function (obj) {

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

    funcs.prof_pix_updater = function (obj) {

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

    funcs.fwends_get_profile_base = function (obj) {

        if ($(`friends_holder_profile_${obj.recognize.suffix}__${obj.recognize.b}`) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.get_person_contact_main("${obj.recognize.category_main}", "${obj.recognize.b}","${obj.recognize.suffix}","${obj.recognize.trigger}","${obj.recognize.offset}","${obj.recognize.limit}")`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(`friends_holder_profile_${obj.recognize.suffix}__${obj.recognize.b}`));

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.get_person_contact_main("${obj.recognize.category_main}", "${obj.recognize.b}","${obj.recognize.suffix}","${obj.recognize.trigger}","${obj.recognize.offset}","${obj.recognize.limit}")`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(`friends_holder_profile_${obj.recognize.suffix}__${obj.recognize.b}`));

                } else {

                    if (obj.recognize.trigger === "profile") {

                        funcs.profile_arrange_friends(obj);

                    } else if (obj.recognize.trigger === "relator") {

                        funcs.relator_arrange_friends(obj);

                    }

                }

            }

        }

    };

    funcs.prof_tagged_posted = function (obj) {

        if ($(`main-more_post_tag__profile_${obj.recognize.suffix}__${obj.recognize.g}`) !== null && $(`main_cont_post_tag__profile_${obj.recognize.suffix}__${obj.recognize.g}`) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.get_profile_post_tagged_main("${obj.recognize.main_type}","${obj.recognize.g}", "${obj.recognize.q}","${obj.recognize.suffix}","${obj.recognize.offset}","${obj.recognize.limit}")`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(`main-more_post_tag__profile_${obj.recognize.suffix}__${obj.recognize.g}`));

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.get_profile_post_tagged_main("${obj.recognize.main_type}","${obj.recognize.g}", "${obj.recognize.q}","${obj.recognize.suffix}","${obj.recognize.offset}","${obj.recognize.limit}")`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(`main-more_post_tag__profile_${obj.recognize.suffix}__${obj.recognize.g}`));

                } else {

                    let offfset = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;

                    funcs.display_my_posted_tagged_returns(obj);

                    funcs.inc_html(funcs.error_reviver__(`funcs.get_profile_post_tagged_main("${obj.recognize.main_type}","${obj.recognize.g}", "${obj.recognize.q}","${obj.recognize.suffix}","${offfset}","${obj.recognize.limit}")`, `<i class='fa fa-angle-down'></i> &nbsp; <section>See more contents</section>`), $(`main-more_post_tag__profile_${obj.recognize.suffix}__${obj.recognize.g}`));


                }

            }
        }

    };

    funcs.remove_add_contact_lastly = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                $(obj.recognize.container_id).setAttribute('onclick', obj.recognize.onclick);
                $(obj.recognize.container_id).children[0].className = `fa-redo fa`;
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.container_id).setAttribute('onclick', obj.recognize.onclick);
                    $(obj.recognize.container_id).children[0].className = `fa-redo fa`;
                } else {

                    $(obj.recognize.container_id).setAttribute('onclick', `funcs.add_remove_contact_main(this.id,'${obj.recognize.b}','${obj.recognize.suffix}',${!obj.recognize.add});`);
                    if (obj.recognize.add === true) {

                        $(obj.recognize.container_id).innerHTML = `<i draggable="false" class="fa fa-user-minus"></i> remove contact`;
                    } else if (obj.recognize.add === false) {

                        $(obj.recognize.container_id).innerHTML = `<i draggable="false" class="fa fa-user-plus"></i> add contact`;
                    }

                }

            }

        }

    };
    funcs.prof_info_first = function (obj) {

        if (obj.hasOwnProperty('failed')) {

            funcs.all_catches_(obj.failed);
            funcs.inc_html(funcs.error_reviver__(`funcs.trigger_profile("${obj.recognize.container_id}")`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_id));
        } else if (obj.hasOwnProperty('success')) {

            if (obj.success.api_result.hasOwnProperty('permission')) {

                funcs.inc_html(funcs.error_reviver__(`funcs.trigger_profile("${obj.recognize.container_id}")`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.container_id));
            } else if (obj.success.api_result.hasOwnProperty('mis_conduct')) {

                funcs.main_all40000004();

                funcs.present_profile_form = funcs.search;

            } else {
                funcs.holla_first_prof_info(obj);

                funcs.present_profile_form = funcs.search;

            }

            funcs.every_observer_ajax(obj.success);

        }

    };
}();
