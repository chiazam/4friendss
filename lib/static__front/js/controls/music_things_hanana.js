/* global funcs, lib */

!function () {

    funcs.music_thing_hanana = function (obj) {

        if (obj.recognize.type === 'personal music') {

            funcs.personal_music_sharer(obj);

        } else if (obj.recognize.type === 'personal music list') {

            funcs.personal_music_list_sharer(obj);

        } else if (obj.recognize.type === 'favouriter') {

            funcs.personal_music_favouriter(obj);

        } else if (obj.recognize.type === 'playlister') {

            funcs.personal_music_playlister(obj);

        } else if (obj.recognize.type === 'music search') {

            funcs.personal_music_search_err(obj);

        } else if (obj.recognize.type === 'music info') {

            funcs.personal_music_info_err(obj);

        } else if (obj.recognize.type === 'music info list') {

            funcs.personal_music_info_list(obj);

        } else if (obj.recognize.type === 'music player') {

            funcs.music_player_arrange_err(obj);

        } else if (obj.recognize.type === 'music upload') {

            funcs.file_upload_handle(obj);

        }

    };

    funcs.music_player_arrange_err = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.music_player_hunt("${obj.recognize.container_id}", "${obj.recognize.key}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_id));

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.music_player_hunt("${obj.recognize.container_id}", "${obj.recognize.key}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.container_id));

                } else {

                    funcs.music_player_display_role(obj);
                }

            }

        }

    };

    funcs.personal_music_info_list = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.mudin_info_category_llist("${obj.recognize.hash}", "${obj.recognize.suffix}", "${obj.recognize.category_}", "${obj.recognize.limit}", "${obj.recognize.offset}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_id).nextElementSibling);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.mudin_info_category_llist("${obj.recognize.hash}", "${obj.recognize.suffix}", "${obj.recognize.category_}", "${obj.recognize.limit}", "${obj.recognize.offset}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.container_id).nextElementSibling);

                } else {

                    funcs.music_info_display_list(obj);

                    let offfset = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;

                    funcs.inc_html(funcs.error_reviver__(`funcs.mudin_info_category_llist("${obj.recognize.hash}", "${obj.recognize.suffix}", "${obj.recognize.category_}", "${obj.recognize.limit}", "${offfset}");`, `<i class="fa fa-angle-down"></i> &nbsp; <section>See more contents</section>`), $(obj.recognize.container_id).nextElementSibling);

                }

            }

        }

    };

    funcs.personal_music_info_err = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.fully_start_music_info_now("${obj.recognize.container_id}", "${obj.recognize.key}", "${obj.recognize.suffix}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_id));

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.fully_start_music_info_now("${obj.recognize.container_id}", "${obj.recognize.key}", "${obj.recognize.suffix}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.container_id));

                } else {

                    funcs.music_info_display_infoo(obj);
                }

            }

        }

    };

    funcs.personal_music_search_err = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.get_search_music("${obj.recognize.input_id}", "${obj.recognize.word}", "${obj.recognize.suffix}", "${obj.recognize.offset}", "${obj.recognize.limit}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_id).children[1]);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.get_search_music("${obj.recognize.input_id}", "${obj.recognize.word}", "${obj.recognize.suffix}", "${obj.recognize.offset}", "${obj.recognize.limit}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.container_id).children[1]);

                } else {

                    funcs.template_my_music_search(obj, obj.recognize.container_id);


                    let offfset = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;

                    funcs.inc_html(funcs.error_reviver__(`funcs.get_search_music("${obj.recognize.input_id}", "${obj.recognize.word}", "${obj.recognize.suffix}", "${offfset}", "${obj.recognize.limit}");`, `<i class="fa fa-angle-down"></i> &nbsp; <section>See more contents</section>`), $(obj.recognize.container_id).children[1]);

                }

            }

        }

    };

    funcs.personal_music_playlister = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                $(obj.recognize.container_id).children[0].className = `fa fa-redo`;

                $(obj.recognize.container_id).setAttribute('onclick', obj.recognize.onclick);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.container_id).children[0].className = `fa fa-redo`;

                    $(obj.recognize.container_id).setAttribute('onclick', obj.recognize.onclick);

                } else {

                    $(obj.recognize.container_id).children[0].className = `fa-list-ul font-size-16px fa`;

                    $(obj.recognize.container_id).setAttribute('onclick', obj.recognize.onclick);

                    funcs.playlist_music_display_switer(obj.recognize.container_id, obj.success.api_result.message.favourite);

                }

            }

        }

    };

    funcs.personal_music_favouriter = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                $(obj.recognize.container_id).children[0].className = `fa fa-redo`;

                $(obj.recognize.container_id).setAttribute('onclick', obj.recognize.onclick);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.container_id).children[0].className = `fa fa-redo`;

                    $(obj.recognize.container_id).setAttribute('onclick', obj.recognize.onclick);

                } else {

                    $(obj.recognize.container_id).children[0].className = `fa-heart font-size-16px far`;

                    $(obj.recognize.container_id).setAttribute('onclick', obj.recognize.onclick);

                    funcs.favourite_music_display_switer(obj.recognize.container_id, obj.success.api_result.message.favourite);

                }

            }

        }

    };

    funcs.personal_music_list_sharer = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.get_person_music_llist("${obj.recognize.gip}", "${obj.recognize.bip}", "${obj.recognize.suffix}", "${obj.recognize.category_}","${obj.recognize.limit}", "${obj.recognize.offset}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_id).nextElementSibling);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.get_person_music_llist("${obj.recognize.gip}", "${obj.recognize.bip}", "${obj.recognize.suffix}", "${obj.recognize.category_}","${obj.recognize.limit}", "${obj.recognize.offset}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.container_id).nextElementSibling);

                } else {

                    let offfset = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;

                    funcs.inc_html(funcs.error_reviver__(`funcs.get_person_music_llist("${obj.recognize.gip}", "${obj.recognize.bip}", ${obj.recognize.suffix}, "${obj.recognize.category_}",${obj.recognize.limit}, ${offfset});`, `<i class="fa fa-angle-down"></i> &nbsp; <section>See more contents</section>`), $(obj.recognize.container_id).nextElementSibling);

                    funcs.template_my_music_personally(obj);

                }

            }

        }

    };

    funcs.personal_music_sharer = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.start_personal_music_holder("${obj.recognize.container_id}", "${obj.recognize.gip}", "${obj.recognize.bip}", "${obj.recognize.suffix}", ${obj.recognize.thiers});`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_id));

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.start_personal_music_holder("${obj.recognize.container_id}", "${obj.recognize.gip}", "${obj.recognize.bip}", "${obj.recognize.suffix}", ${obj.recognize.thiers});`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.container_id));

                } else {

                    funcs.personal_music_identity_return(obj);

                }

            }

        }

    };

}();
