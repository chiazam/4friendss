/* global funcs, lib, api */

!function () {

    funcs.dialogue_display_media = function (obj, saved = false) {

        let num_all = 0;
        let inner_content = ``;

        if (obj.success.api_result.message.images > 0) {

            let click_attr = `href="${funcs.app}?means=gallery&category=dialogue things&reason=dialogue photo&suffix=${obj.recognize.suffix}&saved=${obj.recognize.saved}&bic=${obj.recognize.bic}&qic=${obj.recognize.qic}"`;

            if (saved === true) {
                click_attr = `onclick="funcs.get_media_wanted_dialogue('${obj.recognize.bic}', '${obj.recognize.qic}', '${obj.recognize.suffix}', '${obj.recognize.chat_key}', 'images');"`;
            }

            inner_content += `
<a ${click_attr} class="display-flex align-items-center hover-background-twitter hover-color-fb-blue cursor-pointer tagger_hasher heavier border-1px-solid width-fit-content height-fit-content"> ${obj.success.api_result.message.images} images </a>
                        `;
            num_all += obj.success.api_result.message.images;
        }

        if (obj.success.api_result.message.videos > 0) {

            let click_attr = `href="${funcs.app}?means=gallery&category=dialogue things&reason=dialogue video&suffix=${obj.recognize.suffix}&saved=${obj.recognize.saved}&bic=${obj.recognize.bic}&qic=${obj.recognize.qic}"`;

            if (saved === true) {
                click_attr = `onclick="funcs.get_media_wanted_dialogue('${obj.recognize.bic}', '${obj.recognize.qic}', '${obj.recognize.suffix}', '${obj.recognize.chat_key}', 'videos');"`;
            }

            inner_content += `
<a ${click_attr} class="display-flex align-items-center hover-background-twitter hover-color-fb-blue cursor-pointer tagger_hasher heavier border-1px-solid width-fit-content height-fit-content"> ${obj.success.api_result.message.videos} videos </a>
                        `;
            num_all += obj.success.api_result.message.videos;
        }
        if (obj.success.api_result.message.audios > 0) {

            let click_attr = `href="${funcs.app}?means=gallery&category=dialogue things&reason=dialogue audio&suffix=${obj.recognize.suffix}&saved=${obj.recognize.saved}&bic=${obj.recognize.bic}&qic=${obj.recognize.qic}"`;

            if (saved === true) {
                click_attr = `onclick="funcs.get_media_wanted_dialogue('${obj.recognize.bic}', '${obj.recognize.qic}', '${obj.recognize.suffix}', '${obj.recognize.chat_key}', 'audios');"`;
            }

            inner_content += `
<a ${click_attr} class="display-flex align-items-center hover-background-twitter hover-color-fb-blue cursor-pointer tagger_hasher heavier border-1px-solid width-fit-content height-fit-content"> ${obj.success.api_result.message.audios} audios </a>
                        `;
            num_all += obj.success.api_result.message.audios;
        }

        lib.inc_html(`<section class="overflow-hidden padding-5-px">

                        <section class="display-flex justify-content-center">${inner_content}</section>

                    </section>`, obj.recognize.container_id);
        funcs.handle_links();
    };
}();
!function () {

    funcs.media_dialogue_maker = function (obj) {

        if (obj.recognize.type === 'dialogue photo') {

            if (obj.success.api_result.message.image.length > 0) {

                funcs.dialogue_display_media_main_photo(obj, obj.recognize.display_id, obj.recognize.suffix, obj.recognize.saved);
            } else {

                $(obj.recognize.display_id).innerHTML = `<section class="padding-5-px text-align-center font-weight-bold">Nothing found</section>`;
            }

        } else if (obj.recognize.type === 'dialogue audio') {

            if (!obj.success.api_result.message.hasOwnProperty('none')) {

                funcs.dialogue_display_media_main_audio(obj, obj.recognize.display_id, obj.recognize.suffix, obj.recognize.saved);
            } else {

                $(obj.recognize.display_id).innerHTML = `<section class="padding-5-px text-align-center font-weight-bold">Nothing found</section>`;
            }

        } else if (obj.recognize.type === 'dialogue video') {

            if (!obj.success.api_result.message.hasOwnProperty('none')) {

                funcs.dialogue_display_media_main_video(obj, obj.recognize.display_id, obj.recognize.suffix, obj.recognize.saved);
            } else {

                $(obj.recognize.display_id).innerHTML = `<section class="padding-5-px text-align-center font-weight-bold">Nothing found</section>`;
            }

        }

    };
}();
!function () {

    funcs.video_dialogue_singer = function (obj, element, suffix, saved) {

        let template = ``;

        let canceller = ``;

        if (saved === 'false') {

            canceller += `<section class="display-flex padding-5-px position-relative z-index-1 margin-bottom--40-px">
            
                        <section class="flex-1"></section>
            
                        <section onclick="funcs.obj_tagger_type_remover.chat_file_remover(this,'${element.chat_file_hash}','${obj.recognize.qic}','${obj.recognize.bic}');" data-hash="${element.chat_file_hash}" data-suffix="${suffix}" id="file_remover_${suffix}_${element.chat_file_hash}" class="lighter fb-shadow-shadow-2 round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue"><i class="fa fa-times"></i></section>
                      
                    </section>`;
        }

        template += `

                <section class='fish_woop_lips_hold min-width-100-cent max-width-100-cent margin-right-10px overflow-hidden heavier'>${canceller}<section class='heavier display-flex flex-column justify-content-center' id="holder_vid_audio_${suffix}_${element.chat_file_hash}">

                        <video data-height="height-200-px" draggable="false" data-suffix="${suffix}" data-hash="${element.chat_file_hash}" class="max-height-90-cent cursor-pointer width-100-cent object-fit-cover border-bottom-left-radius-0px border-bottom-right-radius-0px stone-vid-aud-mine-${suffix} height-200-px" preload="none" src="${api}${element.chat_file_path}" id="vid_audio_${suffix}_${element.chat_file_hash}" data-file-info='${element.chat_file_hash}'></video>
            
                    <section data-suffix="${suffix}" data-hash="${element.chat_file_hash}" class="position-relative border-radius-5px border-top-left-radius-0px border-top-right-radius-0px stone-controls-mine-${suffix}" id="controls_${suffix}_${element.chat_file_hash}"></section>

                </section>
            
            </section>

            `;

        return template;

    };

    funcs.dialogue_display_media_main_video = function (obj, container_id, suffix, saved) {

        let template = ``;

        lib._looper_challenge(obj.success.api_result.message['video/mp4'], function (element) {

            template += funcs.video_dialogue_singer(obj, element, suffix, saved);

        });

        funcs.inc_html(funcs.scroll_amber_wawerteer_fdtg(template, false), $(container_id));

        setTimeout(function () {
            funcs.add_controls_aud_vid_multiple(`stone-vid-aud-mine-${suffix}`, `stone-controls-mine-${suffix}`);
        }, 100);

    };


    funcs.dialogue_display_media_main_audio = function (obj, container_id, suffix, saved) {
        let template = ``;

        lib._looper_challenge(obj.success.api_result.message['audio/mpeg'], function (element) {

            let audio__info = '';

            let file_info = ``;

            file_info = element.file_info.chat_file_hash;

            funcs.audio_push_info(element.audio_info);

            audio__info = funcs.audio_obj_[element.audio_info.hash];

            let canceller = ``;

            if (saved === 'false') {

                canceller += `<section onclick="funcs.obj_tagger_type_remover.chat_file_remover(this,'${file_info}','${obj.recognize.qic}','${obj.recognize.bic}');" data-hash="${file_info}" data-suffix="${suffix}" id="file_remover_${suffix}_${file_info}" class="lighter fb-shadow-shadow-2 round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue"><i class="fa fa-times"></i></section>`;
            }

            template += `

             <section data-file-info='${file_info}' data-mediakey='${audio__info.hash}' class='fish_woop_lips_hold min-width-200-px max-width-200-px padding-5-px class-suggested-persons-margin border-radius-5px border-1px-solid overflow-hidden heavier height-100-cent margin-left-5-px border-box display-flex flex-column'>

                <section class="display-flex padding-5-px position-relative z-index-1 margin-bottom--40-px">
            
                        <section class="lighter fb-shadow-shadow-2 border-radius-5px cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small">${audio__info.duration}</section>
            
                        <section class="flex-1"></section>${canceller}  

                </section>

                        <section class="display-flex justify-content-center">

                            <img style="background:${audio__info.img_background};border-color:${audio__info.img_background};" draggable="false" class="cursor-pointer border-3px-solid border-box border-radius-2px width-100-cent height-100-px object-fit-cover border-box" src="${funcs.addImage(audio__info.path, 450, 500, 60)}"/>

                        </section>
            
                        <section class='text-align-center margin-top-5-px'>${audio__info.title}</section>
            
                        <section class='display-flex width-100-cent border-box flex-wrap justify-content-center'>${funcs.music_artist_returner(audio__info.artist_array)}</section>
            
                        <section class='width-fit-content cursor-pointer align-self-center'> ${funcs.music_year_returner(audio__info.year)}  </section>
            
                        ${funcs.music_album_returner(audio__info.album)}  
            
                        ${funcs.music_related_songs_returner(audio__info)}  
                        
                        <section class='margin-top-auto'>${funcs.spill_played_playlist_favourite_template(audio__info)}</section>
            
                        <a class="width-fit-content align-self-center" href="${funcs.app}?means=music_info&key=${audio__info.hash}"> <section class="cursor-pointer color-fb-blue hover-background-twitter border-box margin-auto text-align-center border-radius-2px"><i class="fa fa-external-link-alt"></i> See music info </section> </a>
            

        </section>

`;

        });

        funcs.inc_html(funcs.scroll_amber_wawerteer_fdtg(template), $(container_id));
    };

    funcs.dialogue_display_media_main_photo = function (obj, container_id, suffix, saved, flex_wrap = false, small = true) {

        let template = ``;
        let max_height_mager = ``;
        if (small === true) {
            max_height_mager = `height-150-px`;
        } else if (small === false) {
            max_height_mager = `height-200-px`;
        }

        lib._looper_challenge(obj.success.api_result.message.image, function (element) {

            let canceller = ``;
            if (saved === 'false') {

                canceller += `
            
                        <section class="flex-1"></section>
            
                        <section onclick="funcs.obj_tagger_type_remover.chat_file_remover(this,'${element.chat_file_hash}','${obj.recognize.qic}','${obj.recognize.bic}');" data-hash="${element.chat_file_hash}" data-suffix="${suffix}" id="file_remover_${suffix}_${element.chat_file_hash}" class="lighter fb-shadow-shadow-2 round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue"><i class="fa fa-times"></i></section>
                      
                    `;
            }

            let color__ = (element.img_background.length > 0) ? (element.img_background) : ('var(--liter-black-moder)');
            template += `
                <section class='display-flex flex-column fish_woop_lips_hold min-width-32-cent flex-1 overflow-hidden ${max_height_mager} border-1px-solid border-box' style="border-color:${color__};background-color:${color__};" id="img_unsaved_holder_${suffix}_${element.chat_file_hash}" data-hash="${element.chat_file_hash}" data-suffix="${suffix}">
            
                    <section class="display-flex padding-5-px position-relative z-index-1 margin-bottom--40-px">
            
                        <section data-hash="${element.chat_file_hash}" data-suffix="${suffix}" id="toggle_fullscreen_button_${suffix}_${element.chat_file_hash}" class="light-over-hang round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2"><i class="fa fa-expand"></i></section>
            
                    ${canceller}</section>

                    <img draggable="false" class="cursor-pointer width-100-cent ${max_height_mager} object-fit-cover" id="img_unsaved_${element.chat_file_hash}_${suffix}" data-file-info='${element.chat_file_hash}' style="background-color:${color__};" src="${funcs.addImage(element.chat_file_path, 800, 750, 60)}"/>

                </section>

            `;
        });
        let flex_wrapper = ``;
        if (flex_wrap === true) {

            flex_wrapper = 'flex-wrap';
        }

        funcs.inc_html(funcs.scroll_amber_wawerteer_fdtg(template, true, '', 10, '', flex_wrapper), $(container_id));
        let fullscreen_toggler_callback = function (the_bool, reciever, trigger) {

            if (the_bool === true) {

                lib.remove_class_ele('height-100-cent', reciever);
                lib.remove_class_ele('height-100-cent', $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));
                lib.remove_class_ele('object-fit-contain', $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));
                lib.add_class_ele(max_height_mager, reciever);
                lib.add_class_ele(max_height_mager, $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));
                lib.add_class_ele('object-fit-cover', $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));
                trigger.children[0].className = `fa fa-expand`;
            } else if (the_bool === false) {

                lib.remove_class_ele(max_height_mager, reciever);
                lib.remove_class_ele(max_height_mager, $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));
                lib.remove_class_ele('object-fit-cover', $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));
                lib.add_class_ele('object-fit-contain', $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));
                lib.add_class_ele('height-100-cent', reciever);
                lib.add_class_ele('height-100-cent', $(`img_unsaved_${reciever.dataset.hash}_${reciever.dataset.suffix}`));
                trigger.children[0].className = `fa fa-compress`;
            }

        };
        lib._looper_challenge(obj.success.api_result.message.image, function (element) {

            lib.detect_full_screen($(`img_unsaved_holder_${suffix}_${element.chat_file_hash}`), $(`toggle_fullscreen_button_${suffix}_${element.chat_file_hash}`), fullscreen_toggler_callback);
            lib.toggle_full_screen($(`toggle_fullscreen_button_${suffix}_${element.chat_file_hash}`), $(`img_unsaved_holder_${suffix}_${element.chat_file_hash}`), 'click');
        });
    };
}();
