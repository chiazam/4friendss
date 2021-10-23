/* global funcs, api */

!function () {

    funcs.spill_editor_handler = function (obj) {

        if (obj.recognize.type === 'effect') {

            funcs.editor_effect_handler(obj);

        }

    };


    funcs.editor_effect_handler = function (obj) {

        if ($(obj.recognize.display_id) !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);

                $(obj.recognize.display_id).innerHTML = `<i class="fa fa-redo"></i> retry`;

                $(obj.recognize.display_id).setAttribute('onclick', obj.recognize.onclick);

            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);

                if (obj.success.api_result.hasOwnProperty('permission')) {

                    $(obj.recognize.display_id).innerHTML = `<i class="fa fa-redo"></i> retry`;

                    $(obj.recognize.display_id).setAttribute('onclick', obj.recognize.onclick);

                } else {

                    $(obj.recognize.display_id).innerHTML = `<i class="fa-save far"></i> Save`;

                    $(obj.recognize.display_id).setAttribute('onclick', obj.recognize.onclick);

                }

            }

        }

    };

}();
