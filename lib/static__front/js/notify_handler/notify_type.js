
/* global funcs, lib */

!function () {

    funcs.notify_type_show = function (obj) {

        if (obj.recognize.type === 'real time') {

            funcs.notify_real_time_ajax(obj);

        } else if (obj.recognize.type === 'notification') {

            funcs.notify_notification_ajax(obj);

        } else if (obj.recognize.type === 'activities profile') {

            funcs.notify_activities_person_ajax(obj);

        } else if (obj.recognize.type === 'activities notify') {

            funcs.notify_activities_notify_ajax(obj);

        }

    };

    funcs.notify_activities_notify_ajax = function (obj) {

        if ($(obj.recognize.container_id) !== null && $(obj.recognize.load_holder) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                funcs.inc_html(funcs.error_reviver__(`funcs.get_activities_notify_ajax("${obj.recognize.container_id}", "${obj.recognize.load_holder}","${obj.recognize.bis}","${obj.recognize.qis}", "${obj.recognize.suffix}","${obj.recognize.offset}","${obj.recognize.limit}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.load_holder));
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.get_activities_notify_ajax("${obj.recognize.container_id}", "${obj.recognize.load_holder}", "${obj.recognize.suffix}","${obj.recognize.bis}","${obj.recognize.qis}","${obj.recognize.offset}","${obj.recognize.limit}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.load_holder));
                } else {

                    let offfset = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;

                    funcs.inc_html(funcs.error_reviver__(`funcs.get_activities_notify_ajax("${obj.recognize.container_id}", "${obj.recognize.load_holder}","${obj.recognize.bis}","${obj.recognize.qis}", "${obj.recognize.suffix}","${offfset}","${obj.recognize.limit}");`, `<i class='fa fa-angle-down'></i> &nbsp; <section>See more contents</section>`), $(obj.recognize.load_holder));
                    funcs.notification_main__display(obj);
                }

            }

        }

    };

    funcs.notify_activities_person_ajax = function (obj) {

        if ($(obj.recognize.container_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                funcs.inc_html(funcs.error_reviver__(`funcs.get_activities_starter_ajax("${obj.recognize.container_id}", "${obj.recognize.bis}", "${obj.recognize.qis}","${obj.recognize.suffix}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.container_id));

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.get_activities_starter_ajax("${obj.recognize.container_id}", "${obj.recognize.bis}", "${obj.recognize.qis}","${obj.recognize.suffix}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.container_id));

                } else if (obj.success.api_result.hasOwnProperty('mis_conduct')) {

                    funcs.active_bis = obj.recognize.bis;

                    funcs.active_qis = obj.recognize.qis;

                    funcs.main_all40000004();

                } else {

                    funcs.template_owner_activity_notify(obj);

                }


            }

        }

    };

    funcs.notify_notification_ajax = function (obj) {

        if ($(obj.recognize.container_id) !== null && $(obj.recognize.load_holder) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                funcs.inc_html(funcs.error_reviver__(`funcs.get_notification_now("${obj.recognize.container_id}", "${obj.recognize.load_holder}", "${obj.recognize.suffix}","${obj.recognize.offset}","${obj.recognize.limit}","${obj.recognize.person_offset}","${obj.recognize.person_limit}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.load_holder));
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.get_notification_now("${obj.recognize.container_id}", "${obj.recognize.load_holder}", "${obj.recognize.suffix}","${obj.recognize.offset}","${obj.recognize.limit}","${obj.recognize.person_offset}","${obj.recognize.person_limit}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops unvalidated login, click to try again</section>`), $(obj.recognize.load_holder));
                } else {

                    let offfset = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;
                    let person_offfset = (lib.next_offset(obj.recognize.person_offset, obj.recognize.person_limit)).offset;
                    funcs.inc_html(funcs.error_reviver__(`funcs.get_notification_now("${obj.recognize.container_id}", "${obj.recognize.load_holder}", "${obj.recognize.suffix}","${offfset}","${obj.recognize.limit}","${person_offfset}","${obj.recognize.person_limit}");`, `<i class='fa fa-angle-down'></i> &nbsp; <section>See more contents</section>`), $(obj.recognize.load_holder));
                    funcs.notification_main__display(obj);
                }

            }

        }

    };

    funcs.notify_real_time_ajax = function (obj) {

        if ($(obj.recognize.notify_id) !== null/* && $(obj.recognize.chaty_id) !== null*/) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                if (obj.recognize.repeat !== false) {

                    setTimeout(function () {

                        funcs.notify_real_time(obj.recognize.notify_id, obj.recognize.chaty_id, obj.recognize.repeat, obj.recognize.limit, obj.recognize.offset);
                    }, (obj.recognize.repeat * 1000));
                }

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    if (obj.recognize.repeat !== false) {
                        setTimeout(function () {

                            funcs.notify_real_time(obj.recognize.notify_id, obj.recognize.chaty_id, obj.recognize.repeat, obj.recognize.limit, obj.recognize.offset);
                        }, (obj.recognize.repeat * 1000));
                    }

                } else {

                    funcs.display_notify_indicar(obj);
                    if (obj.recognize.repeat !== false) {

                        setTimeout(function () {

                            let offfset = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;
                            funcs.notify_real_time(obj.recognize.notify_id, obj.recognize.chaty_id, obj.recognize.repeat, obj.recognize.limit, offfset);
                        }, (obj.recognize.repeat * 1000));
                    }


                }

            }

        }

    };
}();
