/* global funcs */

!function () {

    funcs.funca_start_ajax__ow = function () {

        if (typeof (Worker) !== "undefined") {

            if (typeof (funcs.ajax_hunter__worker) === "undefined") {

                funcs.ajax_hunter__worker = new Worker(`${funcs.app}frontend/js/web_workers/ajax_worker.js?v=${funcs.time_int()}`);

                funcs.ajax_hunter__worker.addEventListener('message', function (e) {

                    funcs.divide_to_suit_job(e.data);

                }, 1);

                funcs.ajax_hunter__worker.addEventListener('error', function (e) {

                    funcs.funca_start_ajax__ow();

                }, 1);

            }

        }

    };

    funcs.funca_start_ajax__ow();

    funcs.send_get_me_something = function (prove, form, url) {

        funcs.ajax_hunter__worker.postMessage({recognize: prove, form: form, url: url, all_ajax_exec: `funcs={};funcs.obj_stringif_parse = ${funcs.obj_stringif_parse};funcs.ajax_trigger = ${funcs.ajax_trigger};`});

    };

}();