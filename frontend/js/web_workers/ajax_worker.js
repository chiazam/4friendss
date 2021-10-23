/* global self, funcs */

!function () {

    let kick_off_background_ajax = function (e) {

        let woop = e.data;

        eval(woop.all_ajax_exec);

        send_progress_accross = function (progress) {

            /*let woop_ = {};
             
             woop_.progress = progress;
             
             woop_.recognize = woop.recognize;
             
             console.log(woop_);
             
             post_info_work(woop_);*/

        };

        funcs.ajax_trigger(woop.url, '', send_progress_accross, funcs.obj_stringif_parse(woop.form, true)).then(function (e) {

            woop.success = e;

            post_info_work(woop);

        }).catch(function (e) {

            woop.failed = e;

            post_info_work(woop);

        });


    };

    let post_info_work = function (result) {

        self.postMessage(result);

    }

    self.addEventListener('message', kick_off_background_ajax, 1);

}();