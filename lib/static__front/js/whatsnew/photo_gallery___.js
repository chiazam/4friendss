/* global funcs, lib */

!function () {


    funcs.photo_switcher_content_maker = function (obj, container_id, suffix, small = false, flex_times=false) {
        let template = ``;

        let max_height_mager = ``;

        if (small === true) {
            max_height_mager = `height-200-px`;
        } else if (small === false) {
            max_height_mager = `height-300-px`;
        }

        let marginer_right=``;

        let width_mager = ` min-width-100-cent max-width-100-cent`;

        if(flex_times===true){

            marginer_right= `margin-right-5px`;

            width_mager = `min-width-150-px max-width-150-px`;

            if (small === true) {
                max_height_mager = `height-200-px`;
            } else if (small === false) {
                max_height_mager = `height-250-px`;
            }

        }

        lib._looper_challenge(obj, function (element) {

            funcs.file_push_info(element);

            let color__ = (element.file_info.img_background.length > 0) ? (element.file_info.img_background) : ('var(--liter-black-moder)');

            template += `
                <section style='background-color:${color__};' class='display-flex flex-column fish_woop_lips_hold flex-1 overflow-hidden ${max_height_mager} border-box border-radius-5px ${width_mager} ${marginer_right}' id="img_unsaved_holder_${suffix}_${element.file_info.hash}" data-hash="${element.file_info.hash}" data-suffix="${suffix}">
            
                    <section class="display-flex padding-5-px position-relative z-index-1 margin-bottom--40-px">
            
                        <section data-hash="${element.file_info.hash}" data-suffix="${suffix}" id="toggle_fullscreen_button_${suffix}_${element.file_info.hash}" class="light-over-hang round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2"><i class="fa fa-expand"></i></section>
                    </section>

                    <img draggable="false" class="cursor-pointer width-100-cent ${max_height_mager} object-fit-contain" id="img_unsaved_${element.file_info.hash}_${suffix}" data-file-info='${element.file_info.hash}' style="filter:${funcs.add_main_effect_to_yall(element.style)};background-color:${color__};" src="${funcs.addImage(element.file_info.path, 800, 750, 60)}"/>

                </section>

            `;



        });

        if(flex_times===false){

            funcs.inc_html(funcs.scroll_amber_wawerteer_fdtg(template, false), $(container_id));

        }else if(flex_times===true){

            funcs.inc_html(funcs.scroll_amber_wawerteer_fdtg(template, true, '', 10, '', `border-radius-5px overflow-hidden margin-top-5-px margin-bottom-5-px`), $(container_id));

        }

        let fullscreen_toggler_callback = function (the_bool, reciever, trigger) {

            if (the_bool === true) {

                lib.remove_class_ele('height-100-cent', reciever);

                lib.remove_class_ele('height-100-cent', $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));

                lib.add_class_ele(max_height_mager, reciever);

                lib.add_class_ele(max_height_mager, $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));

                trigger.children[0].className = `fa fa-expand`;

            } else if (the_bool === false) {

                lib.remove_class_ele(max_height_mager, reciever);

                lib.remove_class_ele(max_height_mager, $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));

                lib.add_class_ele('height-100-cent', reciever);

                lib.add_class_ele('height-100-cent', $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));

                trigger.children[0].className = `fa fa-compress`;

            }

        };

        lib._looper_challenge(obj, function (element) {

            lib.detect_full_screen($(`img_unsaved_holder_${suffix}_${element.file_info.hash}`), $(`toggle_fullscreen_button_${suffix}_${element.file_info.hash}`), fullscreen_toggler_callback);

            lib.toggle_full_screen($(`toggle_fullscreen_button_${suffix}_${element.file_info.hash}`), $(`img_unsaved_holder_${suffix}_${element.file_info.hash}`), 'click');
        });

    };

    funcs.photo_galleryer_content_maker = function (obj, container_id, saved, suffix, purpose = '', flex_wrap = false, small = true) {
        let template = ``;

        let max_height_mager = ``;

        let min_width_mager = ``;

        if (small === true) {

            max_height_mager = `height-100-px`;

            if (flex_wrap === true) {

                min_width_mager = `min-width-50-cent`;

            } else if (flex_wrap === false) {

                min_width_mager = `min-width-32-cent`;

            }

        } else if (small === false) {
            
            max_height_mager = `height-150-px`;

            if (flex_wrap === true) {

                min_width_mager = `min-width-50-cent`;
    
            } else if (small === false) {
    
                min_width_mager = `min-width-150-px`;
    
            }

        }

        lib._looper_challenge(obj, function (element) {

            funcs.file_push_info(element);

            let canceller = ``;

            if (saved === 'false') {

                canceller += `
            
                        <section class="flex-1"></section>

                        <section onclick="funcs.edit_something_now('media_things','${element.file_info.path}', 'content maker','img_unsaved_${element.file_info.hash}_${suffix}', '${suffix}', '${element.file_info.hash}','images_media');" class="lighter fb-shadow-shadow-2 round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small margin-right-5px hover-color-fb-blue"><i class="fa fa-paint-brush"></i></section>
            
                        <section onclick="funcs.obj_tagger_type_remover.file_remover(this,'${element.file_info.hash}');" data-hash="${element.file_info.hash}" data-purpose="${purpose}" data-suffix="${suffix}" id="file_remover_${suffix}_${element.file_info.hash}" class="lighter fb-shadow-shadow-2 round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue"><i class="fa fa-times"></i></section>
                      
                    `;
            }

            let color__ = (element.file_info.img_background.length > 0) ? (element.file_info.img_background) : ('var(--liter-black-moder)');

            template += `
                <section class='display-flex flex-column fish_woop_lips_hold ${min_width_mager} flex-1 overflow-hidden ${max_height_mager} border-1px-solid border-box' style="border-color:${color__};background-color:${color__};" id="img_unsaved_holder_${suffix}_${element.file_info.hash}" data-hash="${element.file_info.hash}" data-suffix="${suffix}">
            
                    <section class="display-flex padding-5-px position-relative z-index-1 margin-bottom--40-px">
            
                        <section data-hash="${element.file_info.hash}" data-suffix="${suffix}" id="toggle_fullscreen_button_${suffix}_${element.file_info.hash}" class="light-over-hang round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2"><i class="fa fa-expand"></i></section>
            
                    ${canceller}</section>

                    <img draggable="false" class="cursor-pointer width-100-cent ${max_height_mager} object-fit-contain" id="img_unsaved_${element.file_info.hash}_${suffix}" data-file-info='${element.file_info.hash}' style="filter:${funcs.add_main_effect_to_yall(element.style)};background-color:${color__};" src="${funcs.addImage(element.file_info.path, 800, 750, 60)}"/>

                </section>

            `;

        });

        let flex_wrapper = ``;

        if (flex_wrap === true) {

            flex_wrapper = 'flex-wrap';

        }

        funcs.inc_html(funcs.scroll_amber_wawerteer_fdtg(template, true, '', 10, '', `border-radius-5px overflow-hidden margin-top-5-px margin-bottom-5-px ${flex_wrapper}`), $(container_id));

        let fullscreen_toggler_callback = function (the_bool, reciever, trigger) {

            if (the_bool === true) {

                lib.remove_class_ele('height-100-cent', reciever);

                lib.remove_class_ele('height-100-cent', $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));

                lib.add_class_ele(max_height_mager, reciever);

                lib.add_class_ele(max_height_mager, $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));

                trigger.children[0].className = `fa fa-expand`;

            } else if (the_bool === false) {

                lib.remove_class_ele(max_height_mager, reciever);

                lib.remove_class_ele(max_height_mager, $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));

                lib.add_class_ele('height-100-cent', reciever);

                lib.add_class_ele('height-100-cent', $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));

                trigger.children[0].className = `fa fa-compress`;

            }

        };

        lib._looper_challenge(obj, function (element) {

            lib.detect_full_screen($(`img_unsaved_holder_${suffix}_${element.file_info.hash}`), $(`toggle_fullscreen_button_${suffix}_${element.file_info.hash}`), fullscreen_toggler_callback);

            lib.toggle_full_screen($(`toggle_fullscreen_button_${suffix}_${element.file_info.hash}`), $(`img_unsaved_holder_${suffix}_${element.file_info.hash}`), 'click');
        });


    };

}();
