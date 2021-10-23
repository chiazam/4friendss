/* global funcs, lib */

!function () {

    funcs.search_thing_hanana = function (obj) {

        if (obj.recognize.type === 'main search') {

            funcs.main_search(obj);

        } else if (obj.recognize.type === 'dict upload') {

            funcs.dict_upload_reciver(obj);

        }

    };

    funcs.dict_upload_reciver = function (obj) {

        if ($(obj.recognize.trigger_id) !== null) {

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

                    $(obj.recognize.trigger_id).children[0].className = `fa fa-angle-down`;

                    $(obj.recognize.trigger_id).dataset.seen = true;

                    lib.toggle_class_ele('display-none', $(`hold_word_dict_${obj.recognize.word}_${obj.recognize.suffix}`));

                    $(obj.recognize.trigger_id).setAttribute('onclick', obj.recognize.onclick);

                }

            }
        }

    };

    funcs.list_persons = function (people_array, small = true, round = true) {

        let people_holder = ``;

        lib._looper_challenge(people_array, function (element) {

            people_holder += `<section class="padding-5-px">
                
                    <section>${funcs.display_capter_namer_random(element, small, round)}</section>

                </section>`;
        });

        return people_holder;

    };

}();
